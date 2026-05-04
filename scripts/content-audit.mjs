#!/usr/bin/env node

import { readFile } from 'node:fs/promises';

const FILES = {
  tools: 'src/content/tools.ts',
  posts: 'src/content/posts.ts',
  header: 'src/components/Header.tsx',
  footer: 'src/components/Footer.tsx',
  toolsHub: 'src/app/tools/page.tsx',
};

const FORBIDDEN_TERMS = [
  'ilovepdf',
  'smallpdf',
  'adobe acrobat online',
  '100% secure upload',
];

const REQUIRED_TOOL_KEYS = ['slug', 'title', 'h1', 'tagline', 'description', 'keyword', 'steps', 'faqs'];
const REQUIRED_POST_KEYS = ['slug', 'title', 'description', 'ctaHref', 'ctaLabel', 'datePublished', 'dateModified'];
const REQUIRED_TOOL_FAQ_COUNT = 3;

const LIMITATION_PATTERNS_BY_TOOL = {
  'rotate-pdf': [/\brotate just one page\b/i, /\bper-page rotate\b/i],
  'split-pdf': [/\bsplit every page into separate files\b/i],
  'docx-to-pdf': [/\bsupports?\s+\.doc\b/i],
};

const findings = [];

function addFinding(level, message, location) {
  findings.push({ level, message, location });
}

function normalize(str) {
  return str.toLowerCase().replace(/\s+/g, ' ').trim();
}

function extractArrayBody(source, constName) {
  const startRegex = new RegExp(`export const\\s+${constName}(?:\\s*:[^=]+)?\\s*=`);
  const startMatch = source.match(startRegex);
  const start = startMatch ? startMatch.index : -1;
  if (start === -1) return null;
  const equalsIndex = source.indexOf('=', start);
  const arrayStart = source.indexOf('[', equalsIndex);
  if (arrayStart === -1) return null;
  let depth = 0;
  for (let i = arrayStart; i < source.length; i += 1) {
    const ch = source[i];
    if (ch === '[') depth += 1;
    if (ch === ']') {
      depth -= 1;
      if (depth === 0) {
        return source.slice(arrayStart + 1, i);
      }
    }
  }
  return null;
}

function splitTopLevelObjects(arrayBody) {
  const objects = [];
  let depth = 0;
  let inString = false;
  let stringQuote = '';
  let objectStart = -1;
  for (let i = 0; i < arrayBody.length; i += 1) {
    const ch = arrayBody[i];
    const prev = arrayBody[i - 1];
    if ((ch === '"' || ch === "'" || ch === '`') && prev !== '\\') {
      if (!inString) {
        inString = true;
        stringQuote = ch;
      } else if (stringQuote === ch) {
        inString = false;
      }
    }
    if (inString) continue;
    if (ch === '{') {
      if (depth === 0) objectStart = i;
      depth += 1;
    } else if (ch === '}') {
      depth -= 1;
      if (depth === 0 && objectStart >= 0) {
        objects.push(arrayBody.slice(objectStart, i + 1));
        objectStart = -1;
      }
    }
  }
  return objects;
}

function valueForKey(block, key) {
  const rx = new RegExp(`${key}\\s*:\\s*([\\s\\S]*?)(,\\n\\s*[a-zA-Z]+\\s*:|\\n\\s*})`);
  const m = block.match(rx);
  return m ? m[1].trim() : null;
}

function parseTextLiteral(raw) {
  if (!raw) return '';
  const m = raw.match(/^(["'`])([\s\S]*)\1$/);
  return m ? m[2].replace(/\\n/g, ' ').trim() : raw;
}

async function main() {
  const [toolsSrc, postsSrc, headerSrc, footerSrc, toolsHubSrc] = await Promise.all([
    readFile(FILES.tools, 'utf8'),
    readFile(FILES.posts, 'utf8'),
    readFile(FILES.header, 'utf8'),
    readFile(FILES.footer, 'utf8'),
    readFile(FILES.toolsHub, 'utf8'),
  ]);

  const toolsBody = extractArrayBody(toolsSrc, 'TOOLS');
  const postsBody = extractArrayBody(postsSrc, 'BLOG_POSTS');
  if (!toolsBody || !postsBody) throw new Error('Unable to parse content registries.');

  const toolBlocks = splitTopLevelObjects(toolsBody);
  const postBlocks = splitTopLevelObjects(postsBody);

  const seenToolCopy = new Map();
  for (const block of toolBlocks) {
    const slug = parseTextLiteral(valueForKey(block, 'slug'));
    for (const key of REQUIRED_TOOL_KEYS) {
      if (!new RegExp(`\\b${key}\\s*:`).test(block)) {
        addFinding('error', `Missing required tool field: ${key}`, `${FILES.tools} [${slug || 'unknown tool'}]`);
      }
    }

    const faqCount = (block.match(/\bq\s*:/g) || []).length;
    if (faqCount < REQUIRED_TOOL_FAQ_COUNT) {
      addFinding('error', `Tool has ${faqCount} FAQs; expected at least ${REQUIRED_TOOL_FAQ_COUNT}.`, `${FILES.tools} [${slug}]`);
    }

    const limitedPatterns = LIMITATION_PATTERNS_BY_TOOL[slug] || [];
    for (const pattern of limitedPatterns) {
      if (pattern.test(block) && !/not yet/i.test(block)) {
        addFinding('warn', `Potential limitation mismatch copy matched pattern ${pattern}.`, `${FILES.tools} [${slug}]`);
      }
    }

    const description = normalize(parseTextLiteral(valueForKey(block, 'description')));
    if (description) {
      if (seenToolCopy.has(description)) {
        addFinding('warn', `Duplicate tool description with ${seenToolCopy.get(description)}.`, `${FILES.tools} [${slug}]`);
      } else {
        seenToolCopy.set(description, slug);
      }
    }
  }

  const seenPostCopy = new Map();
  for (const block of postBlocks) {
    const slug = parseTextLiteral(valueForKey(block, 'slug'));
    for (const key of REQUIRED_POST_KEYS) {
      if (!new RegExp(`\\b${key}\\s*:`).test(block)) {
        addFinding('error', `Missing required how-to field: ${key}`, `${FILES.posts} [${slug || 'unknown post'}]`);
      }
    }

    const description = normalize(parseTextLiteral(valueForKey(block, 'description')));
    if (description) {
      if (seenPostCopy.has(description)) {
        addFinding('warn', `Duplicate how-to description with ${seenPostCopy.get(description)}.`, `${FILES.posts} [${slug}]`);
      } else {
        seenPostCopy.set(description, slug);
      }
    }
  }

  const textScopes = [toolsSrc, postsSrc, headerSrc, footerSrc, toolsHubSrc];
  for (const term of FORBIDDEN_TERMS) {
    textScopes.forEach((text, i) => {
      if (text.toLowerCase().includes(term)) {
        const file = Object.values(FILES)[i];
        addFinding('error', `Forbidden/deprecated term found: "${term}".`, file);
      }
    });
  }

  const navLabels = [...headerSrc.matchAll(/>([^<>]+)<\/Link>/g)].map((m) => m[1].trim()).filter(Boolean);
  const footerLabels = [...footerSrc.matchAll(/>([^<>]+)<\/Link>/g)].map((m) => m[1].trim()).filter(Boolean);
  const toolsHubLabels = [...toolsHubSrc.matchAll(/label:\s*"([^"]+)"/g)].map((m) => m[1].trim());

  const duplicates = new Map();
  for (const label of [...navLabels, ...footerLabels, ...toolsHubLabels]) {
    const k = normalize(label);
    duplicates.set(k, (duplicates.get(k) || 0) + 1);
  }
  for (const [label, count] of duplicates.entries()) {
    if (count > 1) addFinding('warn', `Duplicate label appears ${count} times: "${label}".`, 'header/footer/tools-hub');
  }

  if (footerLabels.includes('PDF How-to Guides')) {
    // expected current label; no-op
  } else {
    addFinding('warn', 'Legacy footer guide label detected or missing expected "PDF How-to Guides".', FILES.footer);
  }

  if (findings.length === 0) {
    console.log('✅ Content audit passed with no findings.');
    return;
  }

  for (const finding of findings) {
    const prefix = finding.level === 'error' ? '❌' : '⚠️';
    console.log(`${prefix} ${finding.location}: ${finding.message}`);
  }

  if (findings.some((f) => f.level === 'error')) {
    process.exitCode = 1;
  }
}

main().catch((error) => {
  console.error(`❌ Content audit failed with exception: ${error.message}`);
  process.exit(1);
});
