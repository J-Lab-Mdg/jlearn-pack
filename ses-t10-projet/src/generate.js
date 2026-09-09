// ============================================================
// generate.js — génération du fichier .docx (Manuel SES T10)
// Bloc 1 : Unité I — Orientation scolaire et professionnelle
// ============================================================
const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");
const { Packer } = require("docx");
const { assemble } = require("./assemble");

const OUT_DIR = path.join(__dirname, "..", "output");
const OUT_FILE = process.env.OUT_FILE
  || path.join(OUT_DIR, "Manuel_SES_T10_V1_UNITE1.docx");

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.mkdirSync(path.join(OUT_DIR, "images"), { recursive: true });

  if (process.env.GEN_FIGURES !== "0") {
    console.log("Génération des figures (Pillow)…");
    execFileSync("python3", [path.join(__dirname, "figures.py")], { stdio: "inherit" });
  }

  const doc = assemble();
  const buf = await Packer.toBuffer(doc);
  fs.writeFileSync(OUT_FILE, buf);
  console.log("Fichier écrit :", OUT_FILE, "—", (buf.length / 1024).toFixed(0), "Ko");
}

main().catch((e) => { console.error(e); process.exit(1); });
