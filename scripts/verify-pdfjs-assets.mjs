import { access } from "node:fs/promises";
import { constants as fsConstants } from "node:fs";
import { resolve } from "node:path";

const root = resolve(new URL("..", import.meta.url).pathname);

const requiredAssets = [
  "public/pdf.worker.min.js",
  "public/pdfjs/cmaps",
  "public/pdfjs/standard_fonts",
];

const expectedExportAssets = [
  "out/pdf.worker.min.js",
  "out/pdfjs/cmaps",
  "out/pdfjs/standard_fonts",
];

async function assertExists(path) {
  try {
    await access(resolve(root, path), fsConstants.R_OK);
  } catch {
    throw new Error(`Missing required pdf.js asset: ${path}`);
  }
}

for (const asset of requiredAssets) {
  await assertExists(asset);
}

const shouldVerifyExport = process.argv.includes("--built") && process.argv.includes("--expect-export");
if (shouldVerifyExport) {
  for (const asset of expectedExportAssets) {
    await assertExists(asset);
  }
}

console.log("Verified required pdf.js worker, CMaps, and standard fonts assets.");
