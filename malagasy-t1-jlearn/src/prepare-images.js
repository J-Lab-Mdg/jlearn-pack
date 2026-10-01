const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function main() {
  const root = path.resolve(__dirname, '..');
  const mapping = JSON.parse(fs.readFileSync(path.join(root, 'image-mapping.json'), 'utf8'));

  for (const [id, entry] of Object.entries(mapping)) {
    const source = path.resolve(root, entry.source);
    const output = path.resolve(root, entry.output);
    fs.mkdirSync(path.dirname(output), { recursive: true });
    await sharp(source)
      .resize({ width: entry.targetWidthPx, withoutEnlargement: true })
      .png({ compressionLevel: 9, adaptiveFiltering: true })
      .toFile(output);
    const meta = await sharp(output).metadata();
    console.log(`${id}: ${meta.width}x${meta.height} — ${fs.statSync(output).size} octets`);
    if (meta.width > 1100) throw new Error(`${id}: image trop large`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
