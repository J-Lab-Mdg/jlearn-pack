// illus.js — génère les schémas SVG -> PNG (sharp) pour le manuel 9e V2.
// Style : pédagogique sobre, personnages/quotidien malgaches, AUCUN mot interdit.
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");
const ASSETS = path.join(__dirname, "..", "assets");
fs.mkdirSync(ASSETS, { recursive: true });

const svgRepas = `<svg xmlns="http://www.w3.org/2000/svg" width="1100" height="560">
<rect width="1100" height="560" fill="#FFF7E6"/>
<text x="40" y="60" font-size="34" fill="#C00000" font-family="Times New Roman">Le repas de la famille</text>
<ellipse cx="300" cy="330" rx="180" ry="70" fill="#FFFFFF" stroke="#8B5A2B" stroke-width="6"/>
<ellipse cx="300" cy="310" rx="140" ry="45" fill="#FFFDF5" stroke="#D9C7A0" stroke-width="4"/>
<text x="300" y="320" font-size="28" fill="#1E7B34" text-anchor="middle" font-family="Times New Roman">le riz</text>
<rect x="560" y="250" width="200" height="120" rx="14" fill="#F5E6CC" stroke="#8B5A2B" stroke-width="5"/>
<text x="660" y="318" font-size="26" fill="#1F4E79" text-anchor="middle" font-family="Times New Roman">le ravitoto</text>
<circle cx="880" cy="300" r="70" fill="#EAF3EA" stroke="#1E7B34" stroke-width="5"/>
<text x="880" y="292" font-size="24" fill="#1E7B34" text-anchor="middle" font-family="Times New Roman">la banane</text>
<text x="880" y="324" font-size="24" fill="#1E7B34" text-anchor="middle" font-family="Times New Roman">le fruit</text>
<text x="40" y="500" font-size="26" fill="#1F4E79" font-family="Times New Roman">Sur la table : le riz, le ravitoto, les fruits.</text>
</svg>`;

const svgFamille = `<svg xmlns="http://www.w3.org/2000/svg" width="1100" height="560">
<rect width="1100" height="560" fill="#FFF7E6"/>
<text x="40" y="60" font-size="34" fill="#C00000" font-family="Times New Roman">La famille élargie</text>
<g font-family="Times New Roman" font-size="26" text-anchor="middle">
<rect x="430" y="90" width="240" height="60" rx="10" fill="#1E7B34"/><text x="550" y="128" fill="#FFF">les grands-parents</text>
<line x1="550" y1="150" x2="550" y2="200" stroke="#8B5A2B" stroke-width="4"/>
<rect x="120" y="210" width="180" height="60" rx="10" fill="#1F4E79"/><text x="210" y="248" fill="#FFF">l'oncle / la tante</text>
<rect x="460" y="210" width="180" height="60" rx="10" fill="#1F4E79"/><text x="550" y="248" fill="#FFF">le père / la mère</text>
<rect x="800" y="210" width="180" height="60" rx="10" fill="#1F4E79"/><text x="890" y="248" fill="#FFF">le cousin / la cousine</text>
<line x1="550" y1="270" x2="550" y2="330" stroke="#8B5A2B" stroke-width="4"/>
<rect x="430" y="340" width="240" height="60" rx="10" fill="#C00000"/><text x="550" y="378" fill="#FFF">l'enfant</text>
</g>
<text x="40" y="500" font-size="26" fill="#1F4E79" font-family="Times New Roman">grand-père, grand-mère, oncle, tante, cousin, cousine, nièce.</text>
</svg>`;

async function main() {
  const jobs = [
    [svgRepas, "theme1_repas.png"],
    [svgFamille, "theme2_famille.png"],
  ];
  for (const [svg, name] of jobs) {
    await sharp(Buffer.from(svg)).resize({ width: 1100 }).png().toFile(path.join(ASSETS, name));
    console.log("SVG ->", name);
  }
}
main();
