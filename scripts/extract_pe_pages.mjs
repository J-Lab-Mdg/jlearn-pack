import fs from 'node:fs';
import path from 'node:path';
import * as pdfjs from 'pdfjs-dist/legacy/build/pdf.mjs';

const outputDir = process.argv[2] || '/tmp/pe-pages';
const files = process.argv.slice(3);
if (!files.length) {
  throw new Error('Usage: node scripts/extract_pe_pages.mjs <output-dir> <pdf...>');
}
fs.mkdirSync(outputDir, { recursive: true });
for (const file of files) {
  const data = new Uint8Array(fs.readFileSync(file));
  const document = await pdfjs.getDocument({ data, disableFontFace: true }).promise;
  const pages = [];
  for (let pageNumber = 1; pageNumber <= document.numPages; pageNumber += 1) {
    const page = await document.getPage(pageNumber);
    const content = await page.getTextContent();
    pages.push({
      page: pageNumber,
      text: content.items.map((item) => item.str).join(' ').replace(/\s+/g, ' ').trim(),
    });
  }
  const metadata = await document.getMetadata();
  const stem = path.basename(file, path.extname(file)).replace(/[^A-Za-z0-9_-]+/g, '_');
  const output = path.join(outputDir, `${stem}.json`);
  fs.writeFileSync(output, `${JSON.stringify({ file, pages: document.numPages, metadata: metadata.info, content: pages }, null, 2)}\n`);
  console.log(`${file}: ${document.numPages} pages -> ${output}`);
}
