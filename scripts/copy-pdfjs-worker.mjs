// Copies pdf.js worker, character maps, and standard font data from pdfjs-dist
// into public/ so the browser can load them from the same origin. Without the
// CMaps and standard fonts, text extraction from PDFs that use CID/embedded
// fonts (e.g. Google Docs exports) returns empty strings.
// Runs before `dev` and `build`.
import { copyFile, mkdir, readdir, stat } from "node:fs/promises";
import { dirname, resolve, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");
const pkg = resolve(root, "node_modules/pdfjs-dist");
const publicDir = resolve(root, "public");

async function copyDir(src, dest) {
  await mkdir(dest, { recursive: true });
  const entries = await readdir(src);
  await Promise.all(
    entries.map(async (name) => {
      const s = join(src, name);
      const d = join(dest, name);
      const info = await stat(s);
      if (info.isDirectory()) {
        await copyDir(s, d);
      } else if (info.isFile()) {
        await copyFile(s, d);
      }
    }),
  );
}

await mkdir(publicDir, { recursive: true });
await copyFile(
  resolve(pkg, "build/pdf.worker.min.mjs"),
  resolve(publicDir, "pdf.worker.min.mjs"),
);
await copyDir(resolve(pkg, "cmaps"), resolve(publicDir, "pdfjs/cmaps"));
await copyDir(
  resolve(pkg, "standard_fonts"),
  resolve(publicDir, "pdfjs/standard_fonts"),
);

console.log("Copied pdf.js worker, cmaps, and standard fonts into public/");
