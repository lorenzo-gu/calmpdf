import { readFileSync } from "node:fs";

const CHECKS = [
  { file: "src/components/Footer.tsx", forbidden: ["All PDF Tools", "How-to guides", "How-to Guides"] },
  { file: "src/app/tools/page.tsx", forbidden: ["PDF to Word (DOCX)", "Word (DOCX) to PDF", "DOCX to PDF", "PDF to DOCX"] },
  { file: "src/content/tools.ts", forbidden: ["Word to PDF (DOCX)", "PDF to DOCX"] },
  { file: "src/components/ArticleShell.tsx", forbidden: ["How-to guides"] },
];

const DUPLICATE_BRAND_PATTERN = /CalmPDF\s+CalmPDF/g;

const issues = [];
for (const check of CHECKS) {
  const content = readFileSync(check.file, "utf8");
  for (const token of check.forbidden) {
    if (content.includes(token)) issues.push(`${check.file}: forbidden variant \"${token}\"`);
  }
  if (DUPLICATE_BRAND_PATTERN.test(content)) issues.push(`${check.file}: duplicate brand token \"CalmPDF CalmPDF\"`);
}

if (issues.length > 0) {
  console.error("Terminology check failed:\n" + issues.map((i) => `- ${i}`).join("\n"));
  process.exit(1);
}

console.log("Terminology check passed.");
