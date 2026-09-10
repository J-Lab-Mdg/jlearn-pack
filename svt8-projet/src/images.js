// ============================================================
// images.js — schémas scolaires SVG → PNG (sharp)
// Schémas pédagogiques originaux dessinés ici même (SVG).
// Les scènes Madagascar (jpg) sont placées à la main dans
// output/images/scenes/.
// ============================================================
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");
const NEW = require("./schemas-new");

const OUT = path.join(__dirname, "..", "output", "images");
const W = 900, H = 640;

function wrap(inner) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="#ffffff"/>${inner}</svg>`;
}

const IMAGES = { ...NEW.SCHEMAS_NEW };

async function generateAll() {
  fs.mkdirSync(OUT, { recursive: true });
  fs.mkdirSync(path.join(OUT, "scenes"), { recursive: true });
  for (const [name, svg] of Object.entries(IMAGES)) {
    const full = svg.includes("<svg") ? svg : wrap(svg);
    await sharp(Buffer.from(full)).png().toFile(path.join(OUT, name));
    console.log("OK", name);
  }
  console.log("Terminé : " + Object.keys(IMAGES).length + " schémas");
}

if (require.main === module) {
  generateAll().catch((e) => { console.error(e); process.exit(1); });
}

module.exports = { IMAGES, generateAll };
