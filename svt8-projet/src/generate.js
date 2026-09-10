// ============================================================
// generate.js — génération du fichier .docx final (SVT T8 / 4e)
// ============================================================
const fs = require("fs");
const path = require("path");
const { Packer } = require("docx");
const IMAGES = require("./images");
const { assemble } = require("./assemble");

const OUT_DIR = path.join(__dirname, "..", "output");
const OUT_FILE = path.join(OUT_DIR, "SVT T8 [PE] Fiche de preparation sujet corrigés J-Learn.docx");

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  if (process.env.GEN_IMAGES !== "0") {
    await IMAGES.generateAll();
  }
  const doc = assemble();
  const buf = await Packer.toBuffer(doc);
  fs.writeFileSync(OUT_FILE, buf);
  console.log("Fichier écrit :", OUT_FILE, "—", (buf.length / 1024).toFixed(0), "Ko");
}

main().catch((e) => { console.error(e); process.exit(1); });
