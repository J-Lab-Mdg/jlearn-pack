// illus-themes3-10.js — schémas SVG -> PNG (sharp) pour les thèmes 3 à 10.
// Même style que illus.js : fond crème, boîtes colorées, Times New Roman.
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");
const ASSETS = path.join(__dirname, "..", "assets");
fs.mkdirSync(ASSETS, { recursive: true });

const T = (x, y, s, fill, extra = "") =>
  `<text x="${x}" y="${y}" font-size="${s}" fill="${fill}" font-family="Times New Roman" ${extra}>`;
const BOX = (x, y, w, h, fill, stroke, txt, tcolor = "#FFF", fs2 = 24) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" fill="${fill}" stroke="${stroke}" stroke-width="4"/>` +
  T(x + w / 2, y + h / 2 + 9, fs2, tcolor, 'text-anchor="middle"') + txt + "</text>";

const head = (titre) =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="1100" height="560">` +
  `<rect width="1100" height="560" fill="#FFF7E6"/>` +
  T(40, 58, 34, "#C00000") + titre + "</text>";

const foot = (legende) => T(40, 520, 26, "#1F4E79") + legende + "</text></svg>";

// ---- THÈME 3 : le temps et l'environnement scolaire ----
const svg3 = head("La journée et l'école") +
  BOX(60, 110, 300, 70, "#1F4E79", "#1F4E79", "Le matin : je me lève") +
  BOX(400, 110, 300, 70, "#1E7B34", "#1E7B34", "Le midi : je mange") +
  BOX(740, 110, 300, 70, "#C00000", "#C00000", "Le soir : je me couche") +
  `<line x1="360" y1="145" x2="400" y2="145" stroke="#8B5A2B" stroke-width="5"/>` +
  `<line x1="700" y1="145" x2="740" y2="145" stroke="#8B5A2B" stroke-width="5"/>` +
  BOX(60, 240, 240, 60, "#F5E6CC", "#8B5A2B", "le bâtiment scolaire", "#1F4E79") +
  BOX(320, 240, 220, 60, "#F5E6CC", "#8B5A2B", "la salle de classe", "#1F4E79") +
  BOX(560, 240, 180, 60, "#F5E6CC", "#8B5A2B", "la cour", "#1F4E79") +
  BOX(760, 240, 280, 60, "#F5E6CC", "#8B5A2B", "le point d'eau", "#1F4E79") +
  BOX(60, 350, 480, 90, "#FFFDF5", "#1E7B34", "D'abord, ensuite, après, enfin", "#1E7B34", 28) +
  BOX(570, 350, 470, 90, "#FFFDF5", "#C00000", "[o] : seau, pot, tôt - [u] : sou, chou", "#C00000", 28) +
  foot("La journée se raconte dans l'ordre ; l'école a ses lieux.");

// ---- THÈME 4 : la maison ----
const svg4 = head("La maison et ses pièces") +
  `<polygon points="550,90 200,240 900,240" fill="#C0562F" stroke="#8B5A2B" stroke-width="5"/>` +
  `<rect x="240" y="240" width="620" height="200" fill="#F5E6CC" stroke="#8B5A2B" stroke-width="6"/>` +
  `<line x1="550" y1="240" x2="550" y2="440" stroke="#8B5A2B" stroke-width="5"/>` +
  `<line x1="240" y1="340" x2="860" y2="340" stroke="#8B5A2B" stroke-width="5"/>` +
  T(395, 300, 26, "#1F4E79", 'text-anchor="middle"') + "la chambre</text>" +
  T(705, 300, 26, "#1E7B34", 'text-anchor="middle"') + "la cuisine</text>" +
  T(395, 400, 26, "#C00000", 'text-anchor="middle"') + "le salon</text>" +
  T(705, 400, 26, "#8B5A2B", 'text-anchor="middle"') + "la véranda</text>" +
  T(60, 500, 26, "#1F4E79") + "Les meubles : le lit, la table, la chaise, l'armoire, la marmite.</text></svg>";

// ---- THÈME 5 : le village ----
const svg5 = head("Le village et ses lieux") +
  BOX(80, 120, 220, 70, "#1E7B34", "#1E7B34", "l'école") +
  BOX(440, 120, 220, 70, "#C00000", "#C00000", "le marché") +
  BOX(800, 120, 220, 70, "#1F4E79", "#1F4E79", "l'église") +
  BOX(80, 300, 220, 70, "#8B5A2B", "#8B5A2B", "le puits") +
  BOX(440, 300, 220, 70, "#C0562F", "#C0562F", "le dispensaire") +
  BOX(800, 300, 220, 70, "#4B6B3A", "#4B6B3A", "les rizières") +
  `<line x1="300" y1="155" x2="440" y2="155" stroke="#8B5A2B" stroke-width="4" stroke-dasharray="10 8"/>` +
  T(370, 145, 22, "#8B5A2B", 'text-anchor="middle"') + "à côté de</text>" +
  `<line x1="190" y1="190" x2="190" y2="300" stroke="#8B5A2B" stroke-width="4" stroke-dasharray="10 8"/>` +
  T(210, 255, 22, "#8B5A2B") + "derrière</text>" +
  foot("On situe les lieux : à côté de, en face de, derrière, au bord de.");

// ---- THÈME 6 : la ferme ----
const svg6 = head("La ferme : mâle, femelle, petit") +
  BOX(60, 110, 300, 60, "#1E7B34", "#1E7B34", "Volailles : poulailler") +
  BOX(400, 110, 300, 60, "#1F4E79", "#1F4E79", "Bovins : étable") +
  BOX(740, 110, 300, 60, "#C0562F", "#C0562F", "Caprins : enclos") +
  BOX(60, 200, 300, 60, "#FFFDF5", "#1E7B34", "le coq - la poule", "#1E7B34") +
  BOX(400, 200, 300, 60, "#FFFDF5", "#1F4E79", "le bœuf - la vache", "#1F4E79") +
  BOX(740, 200, 300, 60, "#FFFDF5", "#C0562F", "le bouc - la chèvre", "#C0562F") +
  BOX(60, 290, 300, 60, "#F5E6CC", "#8B5A2B", "le poussin", "#8B5A2B") +
  BOX(400, 290, 300, 60, "#F5E6CC", "#8B5A2B", "le veau", "#8B5A2B") +
  BOX(740, 290, 300, 60, "#F5E6CC", "#8B5A2B", "le chevreau", "#8B5A2B") +
  BOX(60, 390, 980, 70, "#EAF3EA", "#1E7B34", "la provende - la semoule - l'abreuvoir - la soubique", "#1E7B34", 26) +
  foot("Chaque animal a un mâle, une femelle, un petit et un habitat.");

// ---- THÈME 7 : les travaux des champs ----
const svg7 = head("Les travaux des champs, dans l'ordre") +
  BOX(50, 150, 180, 80, "#1E7B34", "#1E7B34", "1. labourer") +
  BOX(260, 150, 180, 80, "#4B6B3A", "#4B6B3A", "2. semer") +
  BOX(470, 150, 180, 80, "#1F4E79", "#1F4E79", "3. repiquer") +
  BOX(680, 150, 180, 80, "#C0562F", "#C0562F", "4. sarcler") +
  BOX(890, 150, 160, 80, "#C00000", "#C00000", "5. récolter") +
  `<path d="M230 190 L260 190 M440 190 L470 190 M650 190 L680 190 M860 190 L890 190" stroke="#8B5A2B" stroke-width="5"/>` +
  BOX(50, 300, 480, 70, "#F5E6CC", "#8B5A2B", "l'angady - la houe - la faucille", "#8B5A2B", 26) +
  BOX(560, 300, 490, 70, "#F5E6CC", "#8B5A2B", "la rizière - le champ - le talus", "#8B5A2B", 26) +
  foot("D'abord on laboure, ensuite on sème et on repique, enfin on récolte.");

// ---- THÈME 8 : le marché ----
const svg8 = head("Au marché : le marchand et le client") +
  BOX(60, 120, 460, 70, "#1E7B34", "#1E7B34", "Le marchand : « Deux mille ariary le kilo. »", "#FFF", 22) +
  BOX(580, 120, 460, 70, "#1F4E79", "#1F4E79", "Le client : « Combien coûte la tomate ? »", "#FFF", 22) +
  BOX(60, 230, 460, 70, "#FFFDF5", "#C00000", "« C'est trop cher, faites un effort. »", "#C00000", 24) +
  BOX(580, 230, 460, 70, "#FFFDF5", "#1E7B34", "« Je prends un kilo, s'il vous plaît. »", "#1E7B34", 24) +
  BOX(60, 340, 980, 70, "#F5E6CC", "#8B5A2B", "l'épicerie - la boucherie - l'étal - le grossiste - le détaillant", "#8B5A2B", 26) +
  foot("On demande le prix, on marchande, puis on achète.");

// ---- THÈME 9 : les métiers ----
const svg9 = head("Les métiers, les lieux et les outils") +
  BOX(60, 110, 300, 60, "#1E7B34", "#1E7B34", "l'instituteur") +
  BOX(400, 110, 300, 60, "#C0562F", "#C0562F", "le maçon") +
  BOX(740, 110, 300, 60, "#1F4E79", "#1F4E79", "la couturière") +
  BOX(60, 200, 300, 60, "#FFFDF5", "#1E7B34", "l'école", "#1E7B34") +
  BOX(400, 200, 300, 60, "#FFFDF5", "#C0562F", "le chantier", "#C0562F") +
  BOX(740, 200, 300, 60, "#FFFDF5", "#1F4E79", "l'atelier", "#1F4E79") +
  BOX(60, 290, 300, 60, "#F5E6CC", "#8B5A2B", "la craie", "#8B5A2B") +
  BOX(400, 290, 300, 60, "#F5E6CC", "#8B5A2B", "la truelle", "#8B5A2B") +
  BOX(740, 290, 300, 60, "#F5E6CC", "#8B5A2B", "la machine à coudre", "#8B5A2B", 20) +
  BOX(60, 390, 980, 70, "#EAF3EA", "#1E7B34", "construire - prendre - faire - venir (3e groupe)", "#1E7B34", 26) +
  foot("Un métier, c'est un lieu de travail, des outils et une activité.");

// ---- THÈME 10 : le voyage et les saisons ----
const svg10 = head("Le voyage et les deux saisons") +
  BOX(60, 110, 980, 70, "#1F4E79", "#1F4E79", "le taxi-brousse - la pirogue - la charrette - le billet - la valise") +
  BOX(60, 220, 470, 110, "#1E7B34", "#1E7B34", "La saison des pluies : il pleut, les rizières sont vertes.", "#FFF", 24) +
  BOX(570, 220, 470, 110, "#C0562F", "#C0562F", "La saison sèche : il fait chaud, la terre est dure.", "#FFF", 24) +
  BOX(60, 370, 980, 70, "#FFFDF5", "#C00000", "je me lève - nous nous sommes levés (verbes pronominaux)", "#C00000", 26) +
  foot("On raconte un voyage dans l'ordre et on décrit le temps qu'il fait.");

async function main() {
  const items = [
    ["theme3_temps_ecole.png", svg3], ["theme4_maison.png", svg4], ["theme5_village.png", svg5],
    ["theme6_ferme.png", svg6], ["theme7_champs.png", svg7], ["theme8_marche.png", svg8],
    ["theme9_metiers.png", svg9], ["theme10_voyage.png", svg10],
  ];
  for (const [name, svg] of items) {
    await sharp(Buffer.from(svg)).resize({ width: 1100 }).png().toFile(path.join(ASSETS, name));
    console.log("OK", name);
  }
}
main();
