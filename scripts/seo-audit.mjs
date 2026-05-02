import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const fail = [];

const read = (p) => fs.readFileSync(path.join(root, p), 'utf8');
const exists = (p) => fs.existsSync(path.join(root, p));

function parseQuotedArray(filePath, varName) {
  const text = read(filePath);
  const match = text.match(new RegExp(`const\\s+${varName}\\s*=\\s*\\[([\\s\\S]*?)\\];`));
  if (!match) return [];
  return match[1].split(",").map((v) => v.trim()).filter((v) => /^".*"$/.test(v)).map((v) => v.slice(1, -1));
}

function parseToolData() {
  const text = read('src/content/tools.ts');
  const blocks = [...text.matchAll(/\{\s*slug:\s*"([^"]+)"[\s\S]*?title:\s*"([^"]+)"[\s\S]*?description:\s*\n?\s*"([^"]+)"[\s\S]*?faqs:\s*\[([\s\S]*?)\],/g)];
  return blocks.map((m) => ({ slug: m[1], title: m[2], description: m[3], faqCount: (m[4].match(/q:\s*"/g) || []).length }));
}

function parsePosts() {
  const text = read('src/content/posts.ts');
  const blocks = [...text.matchAll(/\{\s*slug:\s*"([^"]+)"[\s\S]*?title:\s*"([^"]+)"[\s\S]*?description:\s*\n?\s*"([^"]+)"[\s\S]*?published:\s*(true|false)[\s\S]*?(?:faqs:\s*\[([\s\S]*?)\],)?/g)];
  return blocks
    .map((m) => ({ slug: m[1], title: m[2], description: m[3], published: m[4] === 'true', faqCount: ((m[5] || '').match(/q:\s*"/g) || []).length }))
    .filter((p) => p.published);
}

function routeExists(route) {
  if (route === '/') return exists('src/app/page.tsx');
  const seg = route.replace(/^\//, '');
  return exists(`src/app/${seg}/page.tsx`);
}

const staticPaths = parseQuotedArray('src/app/sitemap.ts', 'staticPaths').map((p) => (p ? `/${p}` : '/'));
const programmatic = parseQuotedArray('src/app/sitemap.ts', 'PROGRAMMATIC_SLUGS').map((s) => `/${s}`);
const tools = parseToolData();
const posts = parsePosts();
const postRoutes = posts.map((p) => `/how-to/${p.slug}`);
const toolRoutes = tools.map((t) => `/${t.slug}`);
const allRoutes = [...new Set([...staticPaths, '/how-to', ...toolRoutes, ...postRoutes, ...programmatic])];

for (const route of allRoutes) {
  if (!routeExists(route)) fail.push({ route, reason: 'Missing route page file for sitemap/indexable path.' });
}

for (const t of tools) {
  if (!allRoutes.includes(`/${t.slug}`)) fail.push({ route: `/${t.slug}`, reason: 'Tool missing from sitemap routes.' });
}
for (const p of posts) {
  if (!allRoutes.includes(`/how-to/${p.slug}`)) fail.push({ route: `/how-to/${p.slug}`, reason: 'Published post missing from sitemap routes.' });
}

const paths = new Map();
for (const route of allRoutes) {
  paths.set(route, (paths.get(route) || 0) + 1);
}
for (const [route, count] of paths.entries()) {
  if (count > 1) fail.push({ route, reason: 'Duplicate route defined across SEO surfaces.' });
}

const titles = new Map();
const descs = new Map();
for (const t of tools) {
  titles.set(t.title, (titles.get(t.title) || 0) + 1);
  descs.set(t.description, (descs.get(t.description) || 0) + 1);
}
for (const p of posts) {
  titles.set(p.title, (titles.get(p.title) || 0) + 1);
  descs.set(p.description, (descs.get(p.description) || 0) + 1);
}
for (const [v, c] of titles.entries()) if (c > 1) fail.push({ route: '(metadata)', reason: `Duplicate title: ${v}` });
for (const [v, c] of descs.entries()) if (c > 1) fail.push({ route: '(metadata)', reason: `Duplicate description: ${v.slice(0, 80)}...` });

for (const route of allRoutes.filter((r) => r !== '/')) {
  const file = `src/app${route}/page.tsx`;
  if (!exists(file)) continue;
  const text = read(file);
  if (!text.includes('alternates:') || !text.includes('canonical')) {
    fail.push({ route, reason: 'Missing canonical URL in metadata alternates.' });
  }
}

for (const t of tools) {
  const file = `src/app/${t.slug}/page.tsx`;
  if (!exists(file)) continue;
  const text = read(file);
  ['SoftwareAppJsonLd', 'HowToJsonLd', 'FaqJsonLd', 'BreadcrumbJsonLd'].forEach((token) => {
    if (!text.includes(token) && !read('src/components/ToolShell.tsx').includes(token)) fail.push({ route: `/${t.slug}`, reason: `Missing ${token} JSON-LD.` });
  });
}
for (const p of posts) {
  const file = `src/app/how-to/${p.slug}/page.tsx`;
  if (!exists(file)) continue;
  const text = read(file);
  if (!text.includes('ArticleShell')) fail.push({ route: `/how-to/${p.slug}`, reason: 'Missing ArticleShell / Article JSON-LD path.' });
}

if (exists('.next/server/app-paths-manifest.json')) {
  const manifest = JSON.parse(read('.next/server/app-paths-manifest.json'));
  for (const route of allRoutes) {
    const key = route === '/' ? '/page' : `${route}/page`;
    if (!manifest[key]) fail.push({ route, reason: 'Route not present in built app-paths manifest.' });
  }
}

if (fail.length) {
  console.error('\nSEO audit failed:\n');
  for (const item of fail) console.error(`- ${item.route}: ${item.reason}`);
  process.exit(1);
}

console.log(`SEO audit passed for ${allRoutes.length} routes.`);
