// make-svg-u1.js — Schémas pédagogiques « style scolaire » pour le Manuel Géographie T5 — UNITÉ 1
// Génère les SVG puis les convertit en PNG (~1100 px) avec sharp.
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const OUT = path.join(__dirname, ".."); // geo-t5/
const REPO = path.resolve(OUT, "..");   // racine du dépôt
const FONT = "Georgia, 'Times New Roman', serif";

const svgHeader = (w, h) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" font-family="${FONT}">`;
const sun = (cx, cy, r, rays = true) => {
  let s = `<circle cx="${cx}" cy="${cy}" r="${r}" fill="#FFD54F" stroke="#F9A825" stroke-width="3"/>`;
  if (rays) {
    for (let i = 0; i < 8; i++) {
      const a = (Math.PI / 4) * i;
      const x1 = cx + Math.cos(a) * (r + 5), y1 = cy + Math.sin(a) * (r + 5);
      const x2 = cx + Math.cos(a) * (r + 18), y2 = cy + Math.sin(a) * (r + 18);
      s += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#F9A825" stroke-width="4" stroke-linecap="round"/>`;
    }
  }
  return s;
};
const cadre = (x, y, w, h, fill = "#EAF4FB") =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="18" fill="${fill}" stroke="#90A4AE" stroke-width="3"/>`;
const titreSvg = (t, w = 1000) =>
  `<text x="${w / 2}" y="52" text-anchor="middle" font-size="30" font-weight="bold" fill="#1E7B34">${t}</text>`;
// Terre stylisée : disque bleu avec taches vertes de continents
const terre = (cx, cy, r, id = "") => `
  <defs><clipPath id="glob${id}"><circle cx="${cx}" cy="${cy}" r="${r}"/></clipPath></defs>
  <circle cx="${cx}" cy="${cy}" r="${r}" fill="#4FC3F7" stroke="#0277BD" stroke-width="4"/>
  <g clip-path="url(#glob${id})" fill="#81C784">
    <ellipse cx="${cx - r * 0.45}" cy="${cy - r * 0.35}" rx="${r * 0.30}" ry="${r * 0.22}" transform="rotate(-20 ${cx - r * 0.45} ${cy - r * 0.35})"/>
    <ellipse cx="${cx - r * 0.35}" cy="${cy + r * 0.35}" rx="${r * 0.18}" ry="${r * 0.26}" transform="rotate(15 ${cx - r * 0.35} ${cy + r * 0.35})"/>
    <ellipse cx="${cx + r * 0.35}" cy="${cy - r * 0.15}" rx="${r * 0.34}" ry="${r * 0.30}"/>
    <ellipse cx="${cx + r * 0.15}" cy="${cy + r * 0.55}" rx="${r * 0.14}" ry="${r * 0.10}"/>
  </g>`;

// ── S1. La forme de la Terre ────────────────────────────────────────────
function svgFormeTerre() {
  return svgHeader(1000, 560) + titreSvg("La forme de la Terre") + `
  ${cadre(40, 90, 920, 380)}
  ${terre(500, 280, 150, "f1")}
  <text x="500" y="475" text-anchor="middle" font-size="26" font-weight="bold" fill="#0277BD">La Terre est une sphère : elle est presque ronde.</text>
  <text x="270" y="150" text-anchor="middle" font-size="22" fill="#546E7A" font-style="italic">Vue depuis l'espace,</text>
  <text x="270" y="180" text-anchor="middle" font-size="22" fill="#546E7A" font-style="italic">la Terre ressemble à une balle.</text>
  <text x="740" y="150" text-anchor="middle" font-size="22" fill="#546E7A" font-style="italic">Elle est un peu aplatie</text>
  <text x="740" y="180" text-anchor="middle" font-size="22" fill="#546E7A" font-style="italic">aux pôles, comme une orange.</text>
  <text x="500" y="525" text-anchor="middle" font-size="24" fill="#546E7A" font-style="italic">Les photos prises depuis l'espace montrent que la Terre est ronde.</text>
</svg>`;
}

// ── S2. Les dimensions de la Terre ──────────────────────────────────────
function svgDimensions() {
  const cx = 500, cy = 285, r = 140;
  return svgHeader(1000, 580) + titreSvg("Les dimensions de la Terre") + `
  ${cadre(40, 90, 920, 400)}
  ${terre(cx, cy, r, "d1")}
  <line x1="${cx}" y1="${cy - r}" x2="${cx}" y2="${cy + r}" stroke="#C00000" stroke-width="4" stroke-dasharray="10 6"/>
  <text x="${cx + 12}" y="${cy}" font-size="24" font-weight="bold" fill="#C00000">Diamètre</text>
  <text x="${cx + 12}" y="${cy + 30}" font-size="24" font-weight="bold" fill="#C00000">≈ 12 742 km</text>
  <path d="M ${cx - r - 40} ${cy} A ${r + 40} ${r + 40} 0 0 1 ${cx + r + 40} ${cy}" fill="none" stroke="#1E7B34" stroke-width="4" stroke-dasharray="12 7" marker-end="url(#{null})"/>
  <text x="175" y="130" font-size="24" font-weight="bold" fill="#1E7B34">Circonférence</text>
  <text x="175" y="160" font-size="24" font-weight="bold" fill="#1E7B34">≈ 40 000 km</text>
  <text x="700" y="130" font-size="24" font-weight="bold" fill="#1F4E79">Superficie</text>
  <text x="700" y="160" font-size="24" font-weight="bold" fill="#1F4E79">≈ 510 millions de km²</text>
  <text x="500" y="530" text-anchor="middle" font-size="24" fill="#546E7A" font-style="italic">La circonférence : le tour complet de la Terre. Le diamètre : la distance à travers la Terre.</text>
</svg>`;
}

// ── S3. Le globe terrestre et le planisphère ────────────────────────────
function svgGlobePlanisphere() {
  return svgHeader(1000, 580) + titreSvg("Deux façons de représenter la Terre") + `
  ${cadre(40, 90, 440, 380)}
  ${cadre(520, 90, 440, 380)}
  ${terre(260, 265, 120, "g1")}
  <line x1="260" y1="385" x2="260" y2="425" stroke="#6D4C41" stroke-width="6"/>
  <ellipse cx="260" cy="432" rx="70" ry="14" fill="#8D6E63" stroke="#5D4037" stroke-width="3"/>
  <text x="260" y="145" text-anchor="middle" font-size="26" font-weight="bold" fill="#C00000">Le globe terrestre</text>
  <text x="260" y="480" text-anchor="middle" font-size="21" fill="#37474F">Une petite sphère qui imite</text>
  <text x="260" y="506" text-anchor="middle" font-size="21" fill="#37474F">la forme réelle de la Terre.</text>
  <rect x="560" y="150" width="360" height="220" rx="10" fill="#B3E5FC" stroke="#0277BD" stroke-width="4"/>
  <ellipse cx="640" cy="215" rx="46" ry="32" fill="#81C784" transform="rotate(-18 640 215)"/>
  <ellipse cx="700" cy="305" rx="26" ry="40" fill="#81C784" transform="rotate(12 700 305)"/>
  <ellipse cx="800" cy="205" rx="52" ry="44" fill="#81C784"/>
  <ellipse cx="855" cy="320" rx="28" ry="18" fill="#81C784"/>
  <ellipse cx="740" cy="160" rx="22" ry="14" fill="#81C784"/>
  <text x="740" y="145" text-anchor="middle" font-size="26" font-weight="bold" fill="#C00000">Le planisphère</text>
  <text x="740" y="480" text-anchor="middle" font-size="21" fill="#37474F">La Terre dessinée à plat,</text>
  <text x="740" y="506" text-anchor="middle" font-size="21" fill="#37474F">sur une surface plane.</text>
  <text x="500" y="545" text-anchor="middle" font-size="24" fill="#546E7A" font-style="italic">Le globe est fidèle à la forme de la Terre ; le planisphère est pratique à transporter.</text>
</svg>`;
}

// ── S4. L'équateur et les hémisphères ───────────────────────────────────
function svgEquateur() {
  const cx = 500, cy = 290, r = 145;
  return svgHeader(1000, 580) + titreSvg("L'équateur et les hémisphères") + `
  ${cadre(40, 90, 920, 400)}
  <path d="M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy} Z" fill="#BBDEFB" stroke="none"/>
  <path d="M ${cx - r} ${cy} A ${r} ${r} 0 0 0 ${cx + r} ${cy} Z" fill="#C8E6C9" stroke="none"/>
  <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="#0277BD" stroke-width="4"/>
  <line x1="${cx - r}" y1="${cy}" x2="${cx + r}" y2="${cy}" stroke="#C00000" stroke-width="6"/>
  <text x="${cx}" y="${cy - 18}" text-anchor="middle" font-size="26" font-weight="bold" fill="#01579B">Hémisphère Nord</text>
  <text x="${cx}" y="${cy + 42}" text-anchor="middle" font-size="26" font-weight="bold" fill="#1B5E20">Hémisphère Sud</text>
  <text x="${cx}" y="${cy + r + 40}" text-anchor="middle" font-size="26" font-weight="bold" fill="#C00000">L'équateur</text>
  <text x="210" y="150" text-anchor="middle" font-size="22" fill="#546E7A" font-style="italic">L'équateur est une ligne</text>
  <text x="210" y="178" text-anchor="middle" font-size="22" fill="#546E7A" font-style="italic">imaginaire : on ne la voit pas</text>
  <text x="210" y="206" text-anchor="middle" font-size="22" fill="#546E7A" font-style="italic">sur le terrain !</text>
  <text x="790" y="150" text-anchor="middle" font-size="22" fill="#546E7A" font-style="italic">Elle partage la Terre</text>
  <text x="790" y="178" text-anchor="middle" font-size="22" fill="#546E7A" font-style="italic">en deux moitiés égales</text>
  <text x="790" y="206" text-anchor="middle" font-size="22" fill="#546E7A" font-style="italic">appelées hémisphères.</text>
  <text x="500" y="545" text-anchor="middle" font-size="24" fill="#546E7A" font-style="italic">Madagascar se trouve dans l'hémisphère Sud.</text>
</svg>`;
}

// ── S5. Les tropiques et les cercles polaires ───────────────────────────
function svgTropiques() {
  const cx = 500, cy = 290, r = 150;
  const ligne = (yr, color, label, dash) => `
    <line x1="${cx - r}" y1="${cy + yr}" x2="${cx + r}" y2="${cy + yr}" stroke="${color}" stroke-width="5" ${dash ? 'stroke-dasharray="10 6"' : ""}/>
    <text x="${cx + r + 16}" y="${cy + yr + 8}" font-size="21" font-weight="bold" fill="${color}">${label}</text>`;
  return svgHeader(1000, 600) + titreSvg("Les grandes lignes imaginaires du globe") + `
  ${cadre(40, 90, 920, 420, "#FDF6E3")}
  ${terre(cx, cy, r, "t1")}
  ${ligne(-r * 0.78, "#7B1FA2", "Cercle polaire Arctique", true)}
  ${ligne(-r * 0.42, "#E65100", "Tropique du Cancer")}
  ${ligne(0, "#C00000", "Équateur")}
  ${ligne(r * 0.42, "#E65100", "Tropique du Capricorne")}
  ${ligne(r * 0.78, "#7B1FA2", "Cercle polaire Antarctique", true)}
  <text x="500" y="558" text-anchor="middle" font-size="24" fill="#546E7A" font-style="italic">Madagascar est traversée par le tropique du Capricorne, dans sa partie Sud.</text>
</svg>`;
}

// ── S6. Les pôles et le méridien de Greenwich ───────────────────────────
function svgPolesGreenwich() {
  const cx = 500, cy = 290, r = 150;
  return svgHeader(1000, 600) + titreSvg("Les pôles et le méridien de Greenwich") + `
  ${cadre(40, 90, 920, 420, "#FDF6E3")}
  ${terre(cx, cy, r, "p1")}
  <line x1="${cx}" y1="${cy - r}" x2="${cx}" y2="${cy + r}" stroke="#C00000" stroke-width="5"/>
  <ellipse cx="${cx}" cy="${cy}" rx="${r * 0.45}" ry="${r}" fill="none" stroke="#90A4AE" stroke-width="3" stroke-dasharray="8 6"/>
  <circle cx="${cx}" cy="${cy - r}" r="10" fill="#37474F"/>
  <circle cx="${cx}" cy="${cy + r}" r="10" fill="#37474F"/>
  <text x="${cx}" y="${cy - r - 16}" text-anchor="middle" font-size="24" font-weight="bold" fill="#37474F">Pôle Nord</text>
  <text x="${cx}" y="${cy + r + 34}" text-anchor="middle" font-size="24" font-weight="bold" fill="#37474F">Pôle Sud</text>
  <text x="${cx - 14}" y="${cy}" text-anchor="end" font-size="22" font-weight="bold" fill="#C00000">Méridien de Greenwich</text>
  <text x="${cx + 14}" y="${cy - 10}" font-size="20" fill="#546E7A" font-style="italic">(méridien d'origine,</text>
  <text x="${cx + 14}" y="${cy + 14}" font-size="20" fill="#546E7A" font-style="italic">numéro 0)</text>
  <text x="190" y="150" text-anchor="middle" font-size="22" fill="#546E7A" font-style="italic">Les méridiens relient</text>
  <text x="190" y="178" text-anchor="middle" font-size="22" fill="#546E7A" font-style="italic">le pôle Nord au pôle Sud.</text>
  <text x="500" y="558" text-anchor="middle" font-size="24" fill="#546E7A" font-style="italic">Le pôle : le point le plus au Nord (ou le plus au Sud) de la Terre.</text>
</svg>`;
}

// ── S7. Les sept continents ─────────────────────────────────────────────
function svgContinents() {
  const map = `
    <rect x="60" y="120" width="880" height="360" rx="12" fill="#B3E5FC" stroke="#0277BD" stroke-width="4"/>
    <ellipse cx="215" cy="200" rx="105" ry="72" fill="#A5D6A7" stroke="#2E7D32" stroke-width="3" transform="rotate(-12 215 200)"/>
    <text x="205" y="188" text-anchor="middle" font-size="21" font-weight="bold" fill="#1B5E20">Amérique</text>
    <text x="205" y="214" text-anchor="middle" font-size="21" font-weight="bold" fill="#1B5E20">du Nord</text>
    <path d="M 240 270 L 285 268 L 312 320 L 292 400 L 250 442 L 235 380 L 225 315 Z" fill="#A5D6A7" stroke="#2E7D32" stroke-width="3"/>
    <text x="268" y="352" text-anchor="middle" font-size="21" font-weight="bold" fill="#1B5E20">Amérique</text>
    <text x="268" y="378" text-anchor="middle" font-size="21" font-weight="bold" fill="#1B5E20">du Sud</text>
    <ellipse cx="475" cy="190" rx="62" ry="46" fill="#FFCC80" stroke="#E65100" stroke-width="3"/>
    <text x="475" y="196" text-anchor="middle" font-size="22" font-weight="bold" fill="#BF360C">Europe</text>
    <path d="M 430 235 L 530 232 L 552 300 L 520 395 L 465 420 L 428 330 Z" fill="#FFCC80" stroke="#E65100" stroke-width="3"/>
    <text x="490" y="320" text-anchor="middle" font-size="22" font-weight="bold" fill="#BF360C">Afrique</text>
    <ellipse cx="680" cy="205" rx="150" ry="85" fill="#CE93D8" stroke="#6A1B9A" stroke-width="3"/>
    <text x="680" y="210" text-anchor="middle" font-size="23" font-weight="bold" fill="#4A148C">Asie</text>
    <ellipse cx="800" cy="390" rx="66" ry="42" fill="#F48FB1" stroke="#AD1457" stroke-width="3"/>
    <text x="800" y="396" text-anchor="middle" font-size="21" font-weight="bold" fill="#880E4F">Océanie</text>
    <rect x="120" y="440" width="760" height="34" rx="16" fill="#ECEFF1" stroke="#90A4AE" stroke-width="3"/>
    <text x="500" y="464" text-anchor="middle" font-size="21" font-weight="bold" fill="#37474F">Antarctique</text>`;
  return svgHeader(1000, 580) + titreSvg("Les sept continents du globe terrestre") + `
  ${map}
  <text x="500" y="545" text-anchor="middle" font-size="24" fill="#546E7A" font-style="italic">Un continent : une très grande étendue de terre entourée d'océans. Le plus grand : l'Asie.</text>
</svg>`;
}

// ── S8. Les cinq océans ─────────────────────────────────────────────────
function svgOceans() {
  const map = `
    <rect x="60" y="120" width="880" height="360" rx="12" fill="#4FC3F7" stroke="#0277BD" stroke-width="4"/>
    <ellipse cx="215" cy="200" rx="105" ry="72" fill="#CFD8DC" stroke="#607D8B" stroke-width="3" transform="rotate(-12 215 200)"/>
    <path d="M 240 270 L 285 268 L 312 320 L 292 400 L 250 442 L 235 380 L 225 315 Z" fill="#CFD8DC" stroke="#607D8B" stroke-width="3"/>
    <ellipse cx="475" cy="190" rx="62" ry="46" fill="#CFD8DC" stroke="#607D8B" stroke-width="3"/>
    <path d="M 430 235 L 530 232 L 552 300 L 520 395 L 465 420 L 428 330 Z" fill="#CFD8DC" stroke="#607D8B" stroke-width="3"/>
    <ellipse cx="680" cy="205" rx="150" ry="85" fill="#CFD8DC" stroke="#607D8B" stroke-width="3"/>
    <ellipse cx="800" cy="390" rx="66" ry="42" fill="#CFD8DC" stroke="#607D8B" stroke-width="3"/>
    <rect x="120" y="440" width="760" height="34" rx="16" fill="#ECEFF1" stroke="#90A4AE" stroke-width="3"/>
    <text x="128" y="160" font-size="22" font-weight="bold" fill="#01579B">Océan Pacifique</text>
    <text x="800" y="160" font-size="22" font-weight="bold" fill="#01579B">Océan Pacifique</text>
    <text x="352" y="290" font-size="21" font-weight="bold" fill="#01579B" transform="rotate(-72 352 290)">Océan Atlantique</text>
    <text x="600" y="430" text-anchor="middle" font-size="22" font-weight="bold" fill="#01579B">Océan Indien</text>
    <text x="500" y="106" text-anchor="middle" font-size="22" font-weight="bold" fill="#01579B">Océan glacial Arctique</text>
    <text x="500" y="524" text-anchor="middle" font-size="22" font-weight="bold" fill="#01579B">Océan glacial Antarctique</text>`;
  return svgHeader(1000, 580) + titreSvg("Les cinq océans du globe terrestre") + `
  ${map}
  <text x="500" y="558" text-anchor="middle" font-size="24" fill="#546E7A" font-style="italic">Un océan : une immense étendue d'eau salée. Le plus grand : l'océan Pacifique.</text>
</svg>`;
}

// ── S9. Lire une carte du monde ─────────────────────────────────────────
function svgLireCarte() {
  return svgHeader(1000, 600) + titreSvg("Les éléments d'une carte") + `
  ${cadre(40, 90, 700, 430, "#FFFFFF")}
  <rect x="70" y="140" width="640" height="330" rx="8" fill="#B3E5FC" stroke="#0277BD" stroke-width="3"/>
  <ellipse cx="210" cy="220" rx="85" ry="55" fill="#A5D6A7" stroke="#2E7D32" stroke-width="2" transform="rotate(-12 210 220)"/>
  <path d="M 230 280 L 265 278 L 288 330 L 268 400 L 232 435 L 218 320 Z" fill="#A5D6A7" stroke="#2E7D32" stroke-width="2"/>
  <ellipse cx="420" cy="215" rx="52" ry="38" fill="#FFCC80" stroke="#E65100" stroke-width="2"/>
  <path d="M 385 250 L 460 248 L 480 310 L 452 395 L 405 415 L 380 330 Z" fill="#FFCC80" stroke="#E65100" stroke-width="2"/>
  <ellipse cx="590" cy="230" rx="100" ry="60" fill="#CE93D8" stroke="#6A1B9A" stroke-width="2"/>
  <text x="400" y="128" text-anchor="middle" font-size="22" font-weight="bold" fill="#37474F">Titre : Le monde</text>
  <g>
    <line x1="662" y1="165" x2="662" y2="125" stroke="#C00000" stroke-width="5"/>
    <path d="M 662 118 L 654 136 L 670 136 Z" fill="#C00000"/>
    <text x="676" y="140" font-size="20" font-weight="bold" fill="#C00000">N</text>
  </g>
  <g>
    <rect x="82" y="430" width="150" height="12" fill="#37474F"/>
    <rect x="82" y="430" width="30" height="12" fill="#FFFFFF" stroke="#37474F" stroke-width="2"/>
    <text x="157" y="462" text-anchor="middle" font-size="18" fill="#37474F">0        1000 km</text>
  </g>
  <g>
    <rect x="480" y="392" width="216" height="86" rx="8" fill="#FFFFFF" stroke="#37474F" stroke-width="2"/>
    <rect x="496" y="406" width="22" height="16" fill="#A5D6A7" stroke="#2E7D32" stroke-width="2"/>
    <text x="528" y="419" font-size="17" fill="#37474F">Terre</text>
    <rect x="496" y="430" width="22" height="16" fill="#4FC3F7" stroke="#0277BD" stroke-width="2"/>
    <text x="528" y="443" font-size="17" fill="#37474F">Mer</text>
    <circle cx="507" cy="460" r="7" fill="#C00000"/>
    <text x="528" y="466" font-size="17" fill="#37474F">Ville</text>
  </g>
  ${cadre(770, 90, 190, 430, "#FFF8E1")}
  <text x="865" y="125" text-anchor="middle" font-size="21" font-weight="bold" fill="#1E7B34">À vérifier</text>
  <text x="865" y="165" text-anchor="middle" font-size="19" fill="#37474F">• le titre</text>
  <text x="865" y="200" text-anchor="middle" font-size="19" fill="#37474F">• la légende</text>
  <text x="865" y="235" text-anchor="middle" font-size="19" fill="#37474F">• l'échelle</text>
  <text x="865" y="270" text-anchor="middle" font-size="19" fill="#37474F">• l'orientation</text>
  <text x="865" y="305" text-anchor="middle" font-size="19" fill="#37474F">• la source</text>
  <text x="865" y="340" text-anchor="middle" font-size="19" fill="#37474F">• la date</text>
  <text x="865" y="375" text-anchor="middle" font-size="19" fill="#37474F">• l'auteur</text>
  <text x="500" y="565" text-anchor="middle" font-size="24" fill="#546E7A" font-style="italic">Avant de lire une carte, on regarde d'abord ces sept éléments.</text>
</svg>`;
}

// ── S10. La rotation de la Terre ────────────────────────────────────────
function svgRotation() {
  const cx = 560, cy = 285, r = 130;
  return svgHeader(1000, 580) + titreSvg("La rotation de la Terre") + `
  ${cadre(40, 90, 920, 400, "#E8F5E9")}
  ${sun(200, 285, 60)}
  <text x="200" y="390" text-anchor="middle" font-size="22" font-weight="bold" fill="#E65100">Le Soleil</text>
  ${terre(cx, cy, r, "r1")}
  <path d="M ${cx - 30} ${cy - r - 26} A 40 40 0 1 1 ${cx + 30} ${cy - r - 26}" fill="none" stroke="#C00000" stroke-width="6"/>
  <path d="M ${cx + 30} ${cy - r - 26} l -2 -20 l 18 8 Z" fill="#C00000"/>
  <text x="${cx}" y="${cy - r - 60}" text-anchor="middle" font-size="23" font-weight="bold" fill="#C00000">La Terre tourne sur elle-même</text>
  <text x="${cx}" y="${cy + r + 46}" text-anchor="middle" font-size="23" font-weight="bold" fill="#1E7B34">d'Ouest en Est, en 24 heures</text>
  <text x="${cx - 105}" y="${cy + 4}" text-anchor="middle" font-size="20" font-weight="bold" fill="#0277BD">Ouest</text>
  <text x="${cx + 105}" y="${cy + 4}" text-anchor="middle" font-size="20" font-weight="bold" fill="#0277BD">Est</text>
  <text x="500" y="545" text-anchor="middle" font-size="24" fill="#546E7A" font-style="italic">La Terre tourne comme une toupie : c'est la rotation.</text>
</svg>`;
}

// ── S11. Le jour et la nuit ─────────────────────────────────────────────
function svgJourNuit() {
  const cx = 560, cy = 285, r = 130;
  return svgHeader(1000, 580) + titreSvg("L'alternance du jour et de la nuit") + `
  ${cadre(40, 90, 920, 400, "#E8F5E9")}
  ${sun(170, 285, 62)}
  <defs><clipPath id="jn1"><circle cx="${cx}" cy="${cy}" r="${r}"/></clipPath></defs>
  <circle cx="${cx}" cy="${cy}" r="${r}" fill="#0D47A1" stroke="#0277BD" stroke-width="4"/>
  <g clip-path="url(#jn1)">
    <path d="M ${cx} ${cy - r} A ${r} ${r} 0 0 0 ${cx} ${cy + r} L ${cx - 60} ${cy + r} L ${cx - 60} ${cy - r} Z" fill="#4FC3F7"/>
    <path d="M ${cx - 60} ${cy - r} L ${cx - 60} ${cy + r} L ${cx - r} ${cy + r} L ${cx - r} ${cy - r} Z" fill="#29B6F6"/>
    <ellipse cx="${cx + 60}" cy="${cy - 30}" rx="34" ry="24" fill="#81C784"/>
    <ellipse cx="${cx + 66}" cy="${cy + 40}" rx="26" ry="18" fill="#81C784"/>
    <text x="${cx + 66}" y="${cy + 130}" text-anchor="middle" font-size="22" font-weight="bold" fill="#FFFFFF">Nuit</text>
    <text x="${cx + 66}" y="${cy + 158}" text-anchor="middle" font-size="18" fill="#E3F2FD">(à l'abri du Soleil)</text>
    <text x="${cx - 78}" y="${cy - 80}" text-anchor="middle" font-size="22" font-weight="bold" fill="#01579B">Jour</text>
    <text x="${cx - 78}" y="${cy - 52}" text-anchor="middle" font-size="18" fill="#01579B">(côté Soleil)</text>
  </g>
  <line x1="340" y1="155" x2="430" y2="200" stroke="#F9A825" stroke-width="6" stroke-dasharray="12 8"/>
  <line x1="340" y1="285" x2="430" y2="285" stroke="#F9A825" stroke-width="6" stroke-dasharray="12 8"/>
  <line x1="340" y1="415" x2="430" y2="370" stroke="#F9A825" stroke-width="6" stroke-dasharray="12 8"/>
  <path d="M ${cx - 30} ${cy - r - 24} A 40 40 0 1 1 ${cx + 30} ${cy - r - 24}" fill="none" stroke="#C00000" stroke-width="5"/>
  <text x="500" y="545" text-anchor="middle" font-size="24" fill="#546E7A" font-style="italic">La Terre tourne : la moitié éclairée vit le jour, l'autre moitié vit la nuit.</text>
</svg>`;
}

// ── S12. La révolution de la Terre ──────────────────────────────────────
function svgRevolution() {
  const cx = 500, cy = 300;
  const pos = [[cx, cy - 175], [cx + 240, cy], [cx, cy + 175], [cx - 240, cy]];
  const mois = ["Position 1", "Position 2", "Position 3", "Position 4"];
  let s = svgHeader(1000, 620) + titreSvg("La révolution de la Terre autour du Soleil") + `
  ${cadre(40, 90, 920, 440, "#FFFDE7")}
  ${sun(cx, cy, 66)}
  <ellipse cx="${cx}" cy="${cy}" rx="240" ry="175" fill="none" stroke="#7B1FA2" stroke-width="4" stroke-dasharray="14 10"/>`;
  pos.forEach(([x, y], i) => {
    s += `
  <circle cx="${x}" cy="${y}" r="44" fill="#4FC3F7" stroke="#0277BD" stroke-width="3"/>
  <ellipse cx="${x - 10}" cy="${y - 8}" rx="13" ry="9" fill="#81C784"/>
  <ellipse cx="${x + 10}" cy="${y + 10}" rx="11" ry="8" fill="#81C784"/>
  <text x="${x}" y="${y + (i < 2 ? -60 : 76)}" text-anchor="middle" font-size="19" font-weight="bold" fill="#6A1B9A">${mois[i]}</text>
  <path d="M ${x + 54} ${y - 26} a 34 34 0 0 1 26 30" fill="none" stroke="#C00000" stroke-width="4"/>`;
  });
  s += `
  <text x="500" y="585" text-anchor="middle" font-size="24" fill="#546E7A" font-style="italic">La Terre fait le tour du Soleil en 365 jours et 6 heures : c'est la révolution.</text>
</svg>`;
  return s;
}

// ── S13. Les saisons ────────────────────────────────────────────────────
function svgSaisons() {
  const arbre = (x, feuilles, couleur, label, sub) => {
    let s = `
    <line x1="${x}" y1="330" x2="${x}" y2="240" stroke="#6D4C41" stroke-width="10"/>
    <line x1="${x}" y1="300" x2="${x - 30}" y2="265" stroke="#6D4C41" stroke-width="7"/>
    <line x1="${x}" y1="290" x2="${x + 30}" y2="255" stroke="#6D4C41" stroke-width="7"/>`;
    if (feuilles) {
      s += `<circle cx="${x}" cy="225" r="42" fill="${couleur}" stroke="#558B2F" stroke-width="3"/>
            <circle cx="${x - 34}" cy="252" r="26" fill="${couleur}" stroke="#558B2F" stroke-width="3"/>
            <circle cx="${x + 34}" cy="252" r="26" fill="${couleur}" stroke="#558B2F" stroke-width="3"/>`;
    }
    s += `<text x="${x}" y="395" text-anchor="middle" font-size="23" font-weight="bold" fill="#37474F">${label}</text>
          <text x="${x}" y="422" text-anchor="middle" font-size="18" fill="#546E7A" font-style="italic">${sub}</text>`;
    return s;
  };
  return svgHeader(1000, 560) + titreSvg("Les quatre saisons de l'année") + `
  ${cadre(40, 90, 210, 360)} ${cadre(270, 90, 210, 360)} ${cadre(500, 90, 210, 360)} ${cadre(730, 90, 210, 360)}
  ${sun(135, 150, 26)}
  ${arbre(145, true, "#C5E1A5", "Le printemps", "les fleurs naissent")}
  ${sun(375, 148, 38)}
  ${arbre(375, true, "#81C784", "L'été", "il fait chaud")}
  <g fill="#E65100"><ellipse cx="560" cy="255" rx="9" ry="6"/><ellipse cx="600" cy="280" rx="9" ry="6"/><ellipse cx="585" cy="240" rx="9" ry="6"/><ellipse cx="620" cy="258" rx="9" ry="6"/><ellipse cx="570" cy="290" rx="9" ry="6"/><ellipse cx="608" cy="300" rx="9" ry="6"/></g>
  ${arbre(605, true, "#FFB74D", "L'automne", "les feuilles tombent")}
  <ellipse cx="835" cy="160" rx="52" ry="26" fill="#CFD8DC" stroke="#90A4AE" stroke-width="3"/>
  ${arbre(835, false, "#FFFFFF", "L'hiver", "il fait frais")}
  <text x="500" y="525" text-anchor="middle" font-size="24" fill="#546E7A" font-style="italic">À Madagascar : une saison chaude et pluvieuse, puis une saison fraîche et sèche.</text>
</svg>`;
}

// ── S14. Le rôle du soleil ──────────────────────────────────────────────
function svgRoleSoleil() {
  return svgHeader(1000, 560) + titreSvg("Le rôle du Soleil pour la vie sur la Terre") + `
  ${cadre(40, 90, 920, 400, "#FFFDE7")}
  ${sun(190, 285, 78)}
  <line x1="300" y1="215" x2="560" y2="185" stroke="#F9A825" stroke-width="5" stroke-dasharray="12 8"/>
  <line x1="300" y1="285" x2="560" y2="265" stroke="#FB8C00" stroke-width="5" stroke-dasharray="12 8"/>
  <line x1="300" y1="355" x2="560" y2="345" stroke="#F9A825" stroke-width="5" stroke-dasharray="12 8"/>
  <rect x="560" y="130" width="360" height="310" rx="14" fill="#E8F5E9" stroke="#66BB6A" stroke-width="3"/>
  <line x1="640" y1="400" x2="640" y2="330" stroke="#6D4C41" stroke-width="8"/>
  <circle cx="640" cy="308" r="34" fill="#81C784" stroke="#558B2F" stroke-width="3"/>
  <circle cx="640" cy="262" r="16" fill="#FF7043" stroke="#D84315" stroke-width="3"/>
  <text x="640" y="268" text-anchor="middle" font-size="15" fill="#FFFFFF">fleur</text>
  <text x="770" y="185" text-anchor="middle" font-size="22" font-weight="bold" fill="#E65100">La lumière</text>
  <text x="770" y="212" font-size="19" fill="#37474F">elle éclaire la Terre</text>
  <text x="770" y="272" text-anchor="middle" font-size="22" font-weight="bold" fill="#E65100">La chaleur</text>
  <text x="770" y="299" font-size="19" fill="#37474F">elle réchauffe l'air et l'eau</text>
  <text x="770" y="360" text-anchor="middle" font-size="22" font-weight="bold" fill="#1B5E20">La vie</text>
  <text x="770" y="387" font-size="19" fill="#37474F">plantes, animaux et hommes</text>
  <text x="500" y="535" text-anchor="middle" font-size="24" fill="#546E7A" font-style="italic">Sans la lumière et la chaleur du Soleil, la vie ne pourrait pas exister sur la Terre.</text>
</svg>`;
}

// ── Écriture + conversion ────────────────────────────────────────────────
const SVG = {
  geo5_forme_terre: svgFormeTerre(),
  geo5_dimensions_terre: svgDimensions(),
  geo5_globe_planisphere: svgGlobePlanisphere(),
  geo5_equateur_hemispheres: svgEquateur(),
  geo5_tropiques_cercles: svgTropiques(),
  geo5_poles_greenwich: svgPolesGreenwich(),
  geo5_continents: svgContinents(),
  geo5_oceans: svgOceans(),
  geo5_lire_carte_monde: svgLireCarte(),
  geo5_rotation: svgRotation(),
  geo5_jour_nuit: svgJourNuit(),
  geo5_revolution: svgRevolution(),
  geo5_saisons: svgSaisons(),
  geo5_role_soleil: svgRoleSoleil(),
};

(async () => {
  fs.mkdirSync(path.join(OUT, "svg"), { recursive: true });
  for (const [name, svg] of Object.entries(SVG)) {
    const svgPath = path.join(OUT, "svg", `${name}.svg`);
    const pngPath = path.join(REPO, `${name}.png`);
    fs.writeFileSync(svgPath, svg);
    await sharp(Buffer.from(svg)).resize({ width: 1100 }).png().toFile(pngPath);
    const meta = await sharp(pngPath).metadata();
    console.log(`OK ${name}.png  ${meta.width}x${meta.height}`);
  }
})();
