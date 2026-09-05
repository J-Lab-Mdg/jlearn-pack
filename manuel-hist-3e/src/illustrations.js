// Génération des illustrations du manuel d'Histoire 3e (SVG → PNG via sharp)
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");
const OUT = path.join(__dirname, "..", "assets");
fs.mkdirSync(OUT, { recursive: true });

const FONT = "'DejaVu Serif', 'Times New Roman', serif";
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const T = (x, y, t, { size = 14, w = "normal", fill = "#222", anchor = "start", style = "normal" } = {}) =>
  `<text x="${x}" y="${y}" font-family="${FONT}" font-size="${size}" font-weight="${w}" font-style="${style}" fill="${fill}" text-anchor="${anchor}">${esc(t)}</text>`;
// texte multi-lignes (séparateur \n)
const TM = (x, y, t, o = {}) => t.split("\n").map((l, i) => T(x, y + i * ((o.size || 14) + 3), l, o)).join("");
const svgWrap = (W, H, inner, title, note) => `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}"><rect width="${W}" height="${H}" fill="#fff"/>
${title ? T(W / 2, 30, title, { size: 21, w: "bold", anchor: "middle" }) : ""}${inner}
${note ? T(W / 2, H - 12, note, { size: 12, style: "italic", anchor: "middle", fill: "#444" }) : ""}</svg>`;
const box = (x, y, w, h, fill, stroke = "#333", r = 6) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${fill}" stroke="${stroke}" stroke-width="1.5"/>`;
const line = (x1, y1, x2, y2, stroke = "#333", sw = 1.5, dash = "") => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${stroke}" stroke-width="${sw}" ${dash ? `stroke-dasharray="${dash}"` : ""}/>`;
const arrow = (x1, y1, x2, y2, stroke = "#333", sw = 2) => {
  const a = Math.atan2(y2 - y1, x2 - x1), L = 10;
  return line(x1, y1, x2, y2, stroke, sw) + `<polygon points="${x2},${y2} ${x2 - L * Math.cos(a - 0.4)},${y2 - L * Math.sin(a - 0.4)} ${x2 - L * Math.cos(a + 0.4)},${y2 - L * Math.sin(a + 0.4)}" fill="${stroke}"/>`;
};

// ---- contour simplifié de Madagascar (lon, lat) ----
const MADA = [
  [49.26,-11.95],[49.9,-12.9],[50.0,-13.4],[50.2,-14.3],[50.3,-14.9],[50.5,-15.7],[49.9,-15.45],[49.75,-16.2],[49.45,-17.4],[49.4,-18.15],[49.0,-19.35],[48.55,-20.5],[48.35,-21.25],[48.0,-22.15],[47.8,-22.85],[47.55,-23.6],[47.1,-24.8],[46.95,-25.05],
  [46.3,-25.25],[45.5,-25.55],[45.15,-25.6],[44.5,-25.3],[44.0,-24.95],
  [43.7,-24.0],[43.65,-23.35],[43.55,-22.5],[43.35,-21.7],[43.9,-20.8],[44.28,-20.3],[44.5,-19.6],[44.35,-18.8],[44.0,-18.0],[44.2,-17.3],[44.45,-16.6],[44.4,-16.15],[45.0,-16.0],[45.35,-15.95],[46.3,-15.7],[46.5,-15.3],[47.0,-15.0],[47.5,-14.6],[47.9,-14.0],[47.9,-13.5],[48.2,-13.2],[48.5,-13.0],[48.8,-13.2],[48.9,-12.6],[49.0,-12.3],
];
const S = 62, X0 = 43.0, Y0 = -11.6, KX = 0.94;
const px = ([lon, lat]) => [+((lon - X0) * S * KX + 30).toFixed(1), +((Y0 - lat) * S + 30).toFixed(1)];
const poly = (pts) => pts.map(px).map((p) => p.join(",")).join(" ");
const ville = (n, lon, lat, side = 1, size = 14, fill = "#c00000") => { const [x, y] = px([lon, lat]); return `<circle cx="${x}" cy="${y}" r="5" fill="${fill}" stroke="#fff" stroke-width="1.5"/>` + T(x + side * 9, y + 5, n, { size, anchor: side > 0 ? "start" : "end" }); };
const nord = (W) => T(W - 40, 60, "N", { size: 22, w: "bold", anchor: "middle" }) + `<polygon points="${W - 40},20 ${W - 48},40 ${W - 32},40" fill="#000"/>`;
const echelle = (W, H) => line(40, H - 40, 40 + S * KX * 2, H - 40, "#000", 3) + T(40, H - 46, "≈ 220 km", { size: 12 });

// ===================================================================
// 1. Carte de la conquête (1883-1896)
function carteConquete() {
  const W = 880, H = 1010;
  const fleche = (a, b, col) => { const [x1, y1] = px(a), [x2, y2] = px(b); return arrow(x1, y1, x2, y2, col, 3); };
  const inner = `
  <polygon points="${poly(MADA)}" fill="#f3e6b8" stroke="#333" stroke-width="2"/>
  ${fleche([46.0, -15.3], [47.35, -18.6], "#b00000")}
  ${fleche([49.9, -18.1], [47.75, -18.85], "#b00000")}
  ${ville("Antsiranana (Diego-Suarez)\noccupée en 1885", 49.29, -12.28, -1, 13)}
  ${ville("Mahajanga : débarquement\ndu corps expéditionnaire (mai 1895)", 46.32, -15.72, 1, 13)}
  ${ville("Toamasina : bombardée en 1883,\noccupée en 1885", 49.40, -18.15, 1, 13)}
  ${ville("Antananarivo : prise le\n30 septembre 1895", 47.52, -18.91, -1, 13)}
  ${ville("Fianarantsoa", 47.09, -21.45, -1, 13)}
  ${ville("Toliara", 43.67, -23.35, 1, 13)}
  ${ville("Nosy Be (française dès 1841)", 48.26, -13.33, -1, 12, "#1F4E79")}
  ${ville("Île Sainte-Marie (française dès 1750)", 49.85, -16.9, 1, 12, "#1F4E79")}
  ${T(500, 720, "Repères", { size: 15, w: "bold" })}
  ${TM(500, 742, "1883-1885 : première guerre franco-merina\n1885 : traité imposant le protectorat\n1894-1895 : seconde guerre, expédition Duchesne\n1er octobre 1895 : traité de protectorat\n6 août 1896 : annexion, Madagascar colonie\n1897 : exil de la reine Ranavalona III", { size: 13 })}
  ${line(500, 860, 540, 860, "#b00000", 3)}${T(548, 865, "Itinéraire des colonnes françaises (1895)", { size: 13 })}
  <circle cx="520" cy="890" r="5" fill="#1F4E79"/>${T(548, 895, "Possessions françaises antérieures", { size: 13 })}
  ${TM(500, 925, "À l'ouest : Comores (1886-1912), Mayotte (1841) ;\nà l'est : La Réunion, colonie française", { size: 12, style: "italic" })}
  ${nord(W)}${echelle(W, H)}`;
  return svgWrap(W, H, inner, null, "Schéma pédagogique — tracés et positions approximatifs");
}
// remplace le \n dans les étiquettes de villes par une 2e ligne
function fixVilleLabels(svg) {
  return svg.replace(/<text ([^>]*)>([^<]*)\n([^<]*)<\/text>/g, (m, attrs, l1, l2) => {
    const y = +(/y="([-\d.]+)"/.exec(attrs)[1]);
    return `<text ${attrs}>${l1}</text><text ${attrs.replace(/y="[-\d.]+"/, `y="${y + 15}"`)}>${l2}</text>`;
  });
}

// ===================================================================
// 2. Organigramme de l'administration coloniale
function organigrammeColonial() {
  const W = 900, H = 620;
  const lv = [
    { y: 50, items: [["Ministre des Colonies (Paris)", "#1F4E79", "#fff"]] },
    { y: 140, items: [["Gouverneur général (Antananarivo)\ntous les pouvoirs civils et militaires, décrets, budget", "#2E75B6", "#fff"]] },
    { y: 240, items: [["Secrétaire général\net services centraux", "#9DC3E6", "#000"], ["Chefs de province\n(administrateurs français)", "#9DC3E6", "#000"], ["Conseil d'administration\n(consultatif, colons)", "#9DC3E6", "#000"]] },
    { y: 340, items: [["Chefs de district (cercle)\nadministrateurs français : impôt, justice indigène, prestations", "#BDD7EE", "#000"]] },
    { y: 440, items: [["Chefs de canton (malgaches)\nnommés, relais de l'administration", "#E2EFDA", "#000"], ["Auxiliaires : gouverneurs indigènes, gardes, interprètes,\ncommis, instituteurs, infirmiers", "#E2EFDA", "#000"]] },
    { y: 530, items: [["Fokonolona et villages : chefs de village, population soumise à l'indigénat, à l'impôt et aux prestations", "#FFF2CC", "#000"]] },
  ];
  let g = "";
  const centers = [];
  lv.forEach((l, li) => {
    const n = l.items.length, bw = Math.min(560, (W - 60) / n - 20), bh = 62;
    const cs = [];
    l.items.forEach(([t, f, c], i) => {
      const x = W / 2 - (n * (bw + 20) - 20) / 2 + i * (bw + 20);
      g += box(x, l.y, bw, bh, f);
      const lines = t.split("\n");
      lines.forEach((ln, k) => { g += T(x + bw / 2, l.y + 26 + k * 18 - (lines.length - 1) * 8, ln, { size: 13.5, w: k === 0 ? "bold" : "normal", fill: c, anchor: "middle" }); });
      cs.push([x + bw / 2, l.y, l.y + bh]);
    });
    centers.push(cs);
  });
  // liaisons verticales
  const link = (a, b) => { const [xa, , ya2] = a, [xb, yb1] = b; const ym = (ya2 + yb1) / 2; return line(xa, ya2, xa, ym) + line(xa, ym, xb, ym) + arrow(xb, ym, xb, yb1); };
  g += link(centers[0][0], centers[1][0]);
  centers[2].forEach((c) => (g += link(centers[1][0], c)));
  g += link(centers[2][1], centers[3][0]);
  centers[4].forEach((c) => (g += link(centers[3][0], c)));
  g += link(centers[4][0], centers[5][0]);
  g += T(W - 20, 110, "← autorité et ordres", { size: 12, anchor: "end", style: "italic" });
  g += T(W - 20, 128, "impôts, rapports, main-d'œuvre →", { size: 12, anchor: "end", style: "italic" });
  return svgWrap(W, H, g, "L'administration coloniale à Madagascar (1896-1946)", "Six provinces en 1896, puis découpages successifs ; environ 20 provinces/régions et une centaine de districts vers 1930");
}

// ===================================================================
// Frise générique
function frise({ title, y0, y1, periods = [], events = [], W = 1200, H = 520, note = null, step = 10, lineY = null, downOffset = 70 }) {
  const m = { l: 50, r: 50 };
  const ly = lineY || Math.round(H * 0.52);
  const X = (y) => m.l + (W - m.l - m.r) * (y - y0) / (y1 - y0);
  let g = "";
  periods.forEach((p) => {
    const w = X(p.to) - X(p.from), cx = (X(p.from) + X(p.to)) / 2;
    g += `<rect x="${X(p.from)}" y="${ly - 22}" width="${w}" height="${44}" fill="${p.color}" stroke="#555" stroke-width="1"/>`;
    const lines = p.label.split("\n");
    const maxLen = Math.max(...lines.map((l) => l.length));
    const fits = maxLen * 7.2 < w - 8;
    const size = fits ? 12.5 : 11;
    if (fits) lines.forEach((l, i) => (g += T(cx, ly + 5 + i * 15 - (lines.length - 1) * 7, l, { size, w: "bold", anchor: "middle", fill: p.text || "#000" })));
    else { // étiquette sous l'axe des années, reliée par un trait
      const by = ly + 66 + (p.lvl || 0) * 30;
      g += line(cx, ly + 22, cx, by - 12, "#777", 1) ;
      lines.forEach((l, i) => (g += T(cx, by + i * 13, l, { size, w: "bold", anchor: "middle", fill: "#333" })));
    }
  });
  g += line(m.l, ly, W - m.r, ly, "#000", 2.5);
  for (let y = Math.ceil(y0 / step) * step; y <= y1; y += step) {
    g += line(X(y), ly + 22, X(y), ly + 32, "#000", 1.5) + T(X(y), ly + 46, String(y), { size: 13, anchor: "middle", w: "bold" });
  }
  let up = 0, down = 0;
  events.forEach((e, i) => {
    const side = e.side || (i % 2 === 0 ? -1 : 1);
    const lvl = side < 0 ? (up++ % 3) : (down++ % 3);
    const x = X(e.y), base = side < 0 ? ly - 60 - lvl * 58 : ly + (downOffset) + lvl * 58;
    g += line(x, ly + side * 22, x, base + (side < 0 ? 6 : -16), e.color || "#555", 1.2, "3,3");
    g += `<circle cx="${x}" cy="${ly}" r="4.5" fill="${e.color || "#c00000"}" stroke="#fff" stroke-width="1"/>`;
    const lines = e.label.split("\n");
    lines.forEach((l, k) => (g += T(x, base + k * 14 - (side < 0 ? (lines.length - 1) * 14 : 0), l, { size: 11.5, anchor: e.anchor || "middle", w: k === 0 ? "bold" : "normal", fill: e.color || "#222" })));
  });
  return svgWrap(W, H, g, title, note);
}

// 3. Frise colonisation 1883-1960
const friseColonisation = () => frise({
  title: "Madagascar sous la domination française (1883-1960)", y0: 1880, y1: 1962, step: 10, H: 600, downOffset: 100, W: 1300,
  periods: [
    { from: 1883, to: 1896, label: "Guerres,\nprotectorat", color: "#f4b183", lvl: 0 },
    { from: 1896, to: 1946, label: "Colonie : indigénat, impôts, prestations, économie de traite", color: "#ffd966" },
    { from: 1946, to: 1960, label: "Vers l'indépendance", color: "#a9d18e", lvl: 0 },
  ],
  events: [
    { y: 1883, label: "1883-1885\n1re guerre franco-merina" }, { y: 1885, label: "17 déc. 1885\ntraité de protectorat" },
    { y: 1895, label: "30 sept. 1895\nprise d'Antananarivo" }, { y: 1896, label: "6 août 1896 : annexion\nGallieni gouverneur général", color: "#b00000" },
    { y: 1897, label: "1895-1898 : Menalamba\n1897 : exil de la reine" }, { y: 1901, label: "1901\ncode de l'indigénat" },
    { y: 1913, label: "1913 : VVS" }, { y: 1916, label: "1914-1918 : 41 000\ntirailleurs malgaches" },
    { y: 1926, label: "1926 : SMOTIG" }, { y: 1929, label: "19 mai 1929\nmanifestation Ralaimongo\n(crise de 1929)" },
    { y: 1942, label: "1942 : occupation\nbritannique" }, { y: 1946, label: "1946 : citoyenneté,\nfin de l'indigénat, MDRM", color: "#1E7B34" },
    { y: 1947, label: "29 mars 1947\ninsurrection", color: "#b00000" }, { y: 1956, label: "1956 : Loi-cadre" },
    { y: 1958, label: "28 sept. 1958 : référendum\n14 oct. : République" }, { y: 1960, label: "26 juin 1960\nINDÉPENDANCE", color: "#1E7B34" },
  ],
  note: "Sources : Deschamps (1972), Rajaonah (2016), Tronchon (1986)",
});

// ===================================================================
// 4. Carte de l'insurrection de 1947
function carte1947() {
  const W = 880, H = 1010;
  const zone = [[49.4,-17.6],[48.4,-17.9],[48.0,-19.0],[47.7,-20.4],[47.4,-21.6],[47.6,-22.9],[48.3,-22.9],[48.6,-21.0],[49.0,-19.6],[49.5,-18.5]];
  const inner = `
  <polygon points="${poly(MADA)}" fill="#f3e6b8" stroke="#333" stroke-width="2"/>
  <defs><clipPath id="ile"><polygon points="${poly(MADA)}"/></clipPath></defs>
  <g clip-path="url(#ile)"><polygon points="${poly(zone)}" fill="#f4a3a3" stroke="#b00000" stroke-width="2" stroke-dasharray="6,4"/></g>
  ${ville("Moramanga : attaque du camp\nmilitaire, nuit du 29 mars 1947", 48.23, -18.95, 1, 13, "#b00000")}
  ${ville("Manakara : attaque\ndu 29 mars 1947", 48.02, -22.15, 1, 13, "#b00000")}
  ${ville("Antananarivo (calme,\narrestations, procès 1948)", 47.52, -18.91, -1, 13, "#444")}
  ${ville("Fianarantsoa", 47.09, -21.45, -1, 13, "#444")}
  ${ville("Toamasina", 49.40, -18.15, 1, 13, "#444")}
  ${ville("Mananjary", 48.35, -21.22, 1, 13, "#b00000")}
  ${ville("Farafangana", 47.83, -22.82, -1, 13, "#b00000")}
  ${ville("Mahajanga", 46.32, -15.72, -1, 13, "#444")}
  ${ville("Toliara", 43.67, -23.35, 1, 13, "#444")}
  ${T(500, 700, "Légende", { size: 15, w: "bold" })}
  <rect x="500" y="712" width="30" height="18" fill="#f4a3a3" stroke="#b00000" stroke-dasharray="6,4"/>${T(540, 726, "Zone insurgée (forêt de l'Est, 1947-1948)", { size: 13 })}
  <circle cx="515" cy="752" r="5" fill="#b00000"/>${T(540, 757, "Foyers de départ et villes attaquées", { size: 13 })}
  <circle cx="515" cy="780" r="5" fill="#444" stroke="#fff"/>${T(540, 785, "Autres villes", { size: 13 })}
  ${TM(500, 820, "Répression : 18 000 soldats (tirailleurs\nsénégalais, légion) ; fin des combats déc. 1948.\nBilan : 11 000 à 89 000 morts selon les sources\n(chiffre officiel 1949 : 89 000 ; Tronchon ;\nFremigacci).", { size: 12.5 })}
  ${nord(W)}${echelle(W, H)}`;
  return svgWrap(W, H, inner, null, "Schéma pédagogique d'après Tronchon (1986) et Fremigacci (2007) — limites approximatives");
}

// ===================================================================
// 5. Schéma des traités de paix 1919-1920
function traites1919() {
  const W = 1000, H = 640;
  let g = "";
  // Allemagne au centre
  g += box(360, 230, 280, 150, "#f4b183");
  g += T(500, 258, "ALLEMAGNE (traité de Versailles, 28 juin 1919)", { size: 14, w: "bold", anchor: "middle" });
  g += TM(372, 282, "• armée limitée à 100 000 hommes\n• Rhénanie démilitarisée et occupée\n• réparations à payer\n• article 231 : responsable de la guerre\n• perd 1/7 de son territoire et 1/10 de sa population", { size: 12.5 });
  const pertes = [
    [40, 60, "Alsace-Lorraine\n→ FRANCE", "#c9daf8"], [40, 250, "Eupen-Malmédy\n→ BELGIQUE", "#c9daf8"], [40, 440, "Sarre : SDN 15 ans\n(mines à la France)", "#c9daf8"],
    [760, 60, "Posnanie, couloir de Dantzig\n→ POLOGNE (reconstituée)", "#c9daf8"], [760, 250, "Schleswig du Nord\n→ DANEMARK", "#c9daf8"], [760, 440, "Toutes les colonies\n→ mandats de la SDN\n(Togo, Cameroun, Tanganyika…)", "#c9daf8"],
  ];
  pertes.forEach(([x, y, t, f]) => {
    g += box(x, y, 200, 70, f);
    t.split("\n").forEach((l, i) => (g += T(x + 100, y + 25 + i * 16, l, { size: 12.5, anchor: "middle", w: i === t.split("\n").length - 1 ? "bold" : "normal" })));
    const cx = x < 500 ? 360 : 640, tx = x < 500 ? x + 200 : x;
    g += arrow(cx, y < 230 ? 240 : y > 380 ? 370 : 305, tx, y + 35, "#b00000", 2);
  });
  // bas : autres traités et nouveaux États
  g += box(40, 540, 920, 70, "#e2efda");
  g += T(500, 562, "Les autres vaincus : Saint-Germain (Autriche, 1919), Trianon (Hongrie, 1920), Neuilly (Bulgarie, 1919), Sèvres (Turquie, 1920)", { size: 13, w: "bold", anchor: "middle" });
  g += T(500, 584, "Nouveaux États : Pologne, Tchécoslovaquie, Yougoslavie, Autriche, Hongrie, Finlande, Estonie, Lettonie, Lituanie — Société des Nations (Genève)", { size: 12.5, anchor: "middle" });
  g += T(500, 604, "Quatre empires disparus : allemand, austro-hongrois, russe, ottoman", { size: 12.5, anchor: "middle", style: "italic" });
  g += T(500, 420, "« Diktat » pour les Allemands : humiliation et désir de revanche", { size: 13, style: "italic", anchor: "middle", fill: "#b00000" });
  return svgWrap(W, H, g, "Les traités de paix de 1919-1920 : ce que perd l'Allemagne et la nouvelle Europe", "D'après Milza-Berstein, Histoire du XXe siècle, t. 1");
}

// 6. Frise URSS 1917-1953
const friseURSS = () => frise({
  title: "De la Russie des tsars à l'URSS de Staline (1917-1953)", y0: 1914, y1: 1954, step: 5, H: 600, downOffset: 130, W: 1300,
  periods: [
    { from: 1914, to: 1917.8, label: "Guerre\n1914-18", color: "#d9d9d9" },
    { from: 1917.8, to: 1921, label: "Guerre civile", color: "#f4b183", lvl: 1 },
    { from: 1921, to: 1928, label: "NEP", color: "#ffd966", lvl: 0 },
    { from: 1928, to: 1941.4, label: "Staline : collectivisation, plans quinquennaux, terreur", color: "#f4a3a3" },
    { from: 1941.4, to: 1945.4, label: "Guerre\n1941-45", color: "#d9d9d9" },
    { from: 1945.4, to: 1953.2, label: "Apogée du\nstalinisme", color: "#f4a3a3", lvl: 0 },
  ],
  events: [
    { y: 1917.15, label: "Février 1917\nchute du tsar", color: "#b00000" }, { y: 1917.8, label: "Octobre 1917\nbolcheviks au pouvoir", color: "#b00000" },
    { y: 1918.2, label: "Mars 1918\nBrest-Litovsk" }, { y: 1919, label: "1919\nKomintern" },
    { y: 1921.2, label: "1921 : Cronstadt, NEP\nfamine 1921-22" }, { y: 1922.95, label: "30 déc. 1922\nnaissance de l'URSS", color: "#1F4E79" },
    { y: 1924.05, label: "21 janv. 1924\nmort de Lénine" }, { y: 1929, label: "1929 : Staline maître,\nTrotski exilé,\ncollectivisation" },
    { y: 1932.5, label: "1932-33 : famine\n(5 à 7 millions de morts)" }, { y: 1937, label: "1936-38\ngrandes purges" },
    { y: 1939.6, label: "23 août 1939\npacte germano-soviétique" }, { y: 1941.5, label: "22 juin 1941\ninvasion allemande" },
    { y: 1943.1, label: "Février 1943\nStalingrad" }, { y: 1949, label: "1949 : bombe A\nsoviétique" }, { y: 1953.2, label: "5 mars 1953\nmort de Staline", color: "#b00000" },
  ],
  note: "Sources : N. Werth, Histoire de l'Union soviétique ; Milza-Berstein",
});

// ===================================================================
// 7. Crise de 1929 : chômeurs USA / Allemagne
function crise1929() {
  const W = 900, H = 500, m = { l: 80, r: 30, t: 60, b: 100 };
  const cats = ["1929", "1930", "1931", "1932", "1933", "1934", "1936", "1938"];
  const series = [
    { name: "États-Unis (millions de chômeurs)", color: "#1F4E79", vals: [1.5, 4.3, 8, 12, 12.8, 11.3, 9, 10.4] },
    { name: "Allemagne (millions de chômeurs)", color: "#b00000", vals: [1.9, 3.1, 4.5, 5.6, 4.8, 2.7, 1.6, 0.4] },
  ];
  const max = 15, cw = (W - m.l - m.r) / cats.length, bw = cw * 0.38;
  const y = (v) => m.t + (H - m.t - m.b) * (1 - v / max);
  let g = "";
  for (let v = 0; v <= max; v += 3) g += line(m.l, y(v), W - m.r, y(v), "#ccc") + T(m.l - 8, y(v) + 5, v, { size: 13, anchor: "end" });
  cats.forEach((c, i) => {
    series.forEach((s, k) => {
      const x = m.l + cw * i + cw * 0.12 + k * bw, v = s.vals[i];
      g += `<rect x="${x}" y="${y(v)}" width="${bw - 4}" height="${y(0) - y(v)}" fill="${s.color}"/>` + T(x + bw / 2 - 2, y(v) - 5, String(v).replace(".", ","), { size: 12, w: "bold", anchor: "middle" });
    });
    g += T(m.l + cw * i + cw / 2, H - m.b + 22, c, { size: 14, anchor: "middle" });
  });
  g += line(m.l, y(0), W - m.r, y(0), "#000", 1.5);
  series.forEach((s, k) => (g += `<rect x="${m.l + k * 340}" y="${H - 52}" width="16" height="16" fill="${s.color}"/>` + T(m.l + k * 340 + 22, H - 39, s.name, { size: 13 })));
  g += T(m.l - 8, m.t - 14, "millions", { size: 12, anchor: "end" });
  g += T(W / 2, 52, "Krach du 24 octobre 1929 → faillites → chômage de masse ; l'Allemagne « guérit » par le réarmement nazi, les États-Unis par le New Deal puis la guerre", { size: 12, anchor: "middle", style: "italic" });
  return svgWrap(W, H, g, "La crise de 1929 : le chômage aux États-Unis et en Allemagne (1929-1938)", "Sources : Milza-Berstein ; Bureau of Labor Statistics ; Statistisches Reichsamt — valeurs arrondies (moyennes annuelles)");
}

// 8. Chômage et vote nazi 1928-1933
function chomageNSDAP() {
  const W = 900, H = 500, m = { l: 80, r: 90, t: 60, b: 90 };
  const cats = ["mai 1928", "sept. 1930", "juil. 1932", "nov. 1932", "mars 1933"];
  const chom = [1.4, 3.0, 6.0, 5.8, 6.0], vote = [2.6, 18.3, 37.4, 33.1, 43.9];
  const cw = (W - m.l - m.r) / cats.length;
  const yL = (v) => m.t + (H - m.t - m.b) * (1 - v / 8), yR = (v) => m.t + (H - m.t - m.b) * (1 - v / 50);
  let g = "";
  for (let v = 0; v <= 8; v += 2) g += line(m.l, yL(v), W - m.r, yL(v), "#ddd") + T(m.l - 8, yL(v) + 5, v, { size: 13, anchor: "end", fill: "#1F4E79" });
  for (let v = 0; v <= 50; v += 10) g += T(W - m.r + 8, yR(v) + 5, v + " %", { size: 13, fill: "#b00000" });
  cats.forEach((c, i) => {
    const x = m.l + cw * i + cw * 0.25, w = cw * 0.5;
    g += `<rect x="${x}" y="${yL(chom[i])}" width="${w}" height="${yL(0) - yL(chom[i])}" fill="#1F4E79" opacity="0.85"/>` + T(x + w / 2, yL(chom[i]) - 6, String(chom[i]).replace(".", ","), { size: 13, w: "bold", anchor: "middle", fill: "#1F4E79" });
    g += T(m.l + cw * i + cw / 2, H - m.b + 22, c, { size: 13, anchor: "middle" });
  });
  const pts = cats.map((c, i) => [m.l + cw * i + cw / 2, yR(vote[i])]);
  g += `<polyline points="${pts.map((p) => p.join(",")).join(" ")}" fill="none" stroke="#b00000" stroke-width="3"/>`;
  pts.forEach(([x, y], i) => (g += `<circle cx="${x}" cy="${y}" r="6" fill="#b00000" stroke="#fff" stroke-width="2"/>` + T(x + 10, y - 8, vote[i].toString().replace(".", ",") + " %", { size: 13, w: "bold", fill: "#b00000" })));
  g += line(m.l, yL(0), W - m.r, yL(0), "#000", 1.5);
  g += `<rect x="${m.l}" y="${H - 50}" width="16" height="16" fill="#1F4E79"/>` + T(m.l + 22, H - 37, "Chômeurs (millions, échelle de gauche)", { size: 13 });
  g += line(m.l + 380, H - 42, m.l + 410, H - 42, "#b00000", 3) + T(m.l + 418, H - 37, "Voix du NSDAP aux élections (%, échelle de droite)", { size: 13 });
  g += T(W / 2, 52, "30 janvier 1933 : Hitler nommé chancelier", { size: 13, anchor: "middle", style: "italic", fill: "#b00000" });
  return svgWrap(W, H, g, "Allemagne 1928-1933 : la crise fait le succès du parti nazi", "Sources : I. Kershaw, Hitler (1998) ; résultats officiels des élections au Reichstag — valeurs arrondies");
}

// ===================================================================
// 9. Deux phases de la 2GM
function phases2GM() {
  const W = 1200, H = 620;
  let g = "";
  const y0 = 1939, y1 = 1946, X = (y) => 60 + (W - 120) * (y - y0) / (y1 - y0);
  const ly = 300;
  g += `<rect x="${X(1939.67)}" y="${ly - 26}" width="${X(1942.9) - X(1939.67)}" height="52" fill="#f4a3a3" stroke="#555"/>`;
  g += `<rect x="${X(1942.9)}" y="${ly - 26}" width="${X(1945.67) - X(1942.9)}" height="52" fill="#a9d18e" stroke="#555"/>`;
  g += T((X(1939.67) + X(1942.9)) / 2, ly - 4, "PHASE 1 : DOMINATION DE L'AXE", { size: 15, w: "bold", anchor: "middle" });
  g += T((X(1939.67) + X(1942.9)) / 2, ly + 15, "guerre éclair, Europe et Pacifique conquis", { size: 12, anchor: "middle" });
  g += T((X(1942.9) + X(1945.67)) / 2, ly - 4, "PHASE 2 : VICTOIRES DES ALLIÉS", { size: 15, w: "bold", anchor: "middle" });
  g += T((X(1942.9) + X(1945.67)) / 2, ly + 15, "reconquête sur trois fronts", { size: 12, anchor: "middle" });
  g += line(60, ly, W - 60, ly, "#000", 2.5);
  for (let y = 1939; y <= 1945; y++) g += line(X(y), ly + 26, X(y), ly + 36, "#000", 1.5) + T(X(y), ly + 52, y, { size: 14, w: "bold", anchor: "middle" });
  g += line(X(1942.9), ly - 40, X(1942.9), ly + 40, "#b00000", 3, "8,5") + T(X(1942.9), ly - 48, "TOURNANT 1942-1943", { size: 14, w: "bold", anchor: "middle", fill: "#b00000" });
  const up = [
    [1939.67, "1er sept. 1939\ninvasion de la Pologne\n(3 sept. : déclaration de guerre)"], [1940.45, "mai-juin 1940 : Blitzkrieg\n22 juin : armistice français\n(Vichy / de Gaulle)"], [1940.7, "été 1940\nbataille d'Angleterre\n(échec allemand)"],
    [1941.47, "22 juin 1941\ninvasion de l'URSS"], [1941.93, "7 déc. 1941\nPearl Harbor : entrée en\nguerre des États-Unis"], [1942.45, "juin 1942 : Midway\nmai 1942 : Britanniques\nà Madagascar"],
    [1942.85, "nov. 1942 : El-Alamein,\ndébarquement en\nAfrique du Nord"],
  ];
  const down = [
    [1943.1, "2 février 1943\nStalingrad : 1re grande\ndéfaite allemande"], [1943.55, "juillet 1943 : Sicile,\nchute de Mussolini"], [1944.43, "6 juin 1944\ndébarquement de Normandie\n25 août : Paris libéré"],
    [1945.35, "8 mai 1945\ncapitulation allemande\n(Hitler suicidé le 30 avril)"], [1945.6, "6 et 9 août 1945 : Hiroshima,\nNagasaki — 2 sept. :\ncapitulation du Japon"],
  ];
  up.forEach(([y, t], i) => { const x = X(y), lvl = i % 3, base = ly - 70 - lvl * 62; g += line(x, ly - 26, x, base + 4, "#555", 1.2, "3,3") + `<circle cx="${x}" cy="${ly}" r="5" fill="#b00000" stroke="#fff"/>`; t.split("\n").forEach((l, k, a) => (g += T(x, base + k * 14 - (a.length - 1) * 14, l, { size: 11.5, anchor: "middle", w: k === 0 ? "bold" : "normal" }))); });
  down.forEach(([y, t], i) => { const x = X(y), lvl = i % 3, base = ly + 95 + lvl * 62; g += line(x, ly + 26, x, base - 14, "#555", 1.2, "3,3") + `<circle cx="${x}" cy="${ly}" r="5" fill="#1E7B34" stroke="#fff"/>`; t.split("\n").forEach((l, k) => (g += T(x, base + k * 14, l, { size: 11.5, anchor: "middle", w: k === 0 ? "bold" : "normal" }))); });
  g += T(70, H - 40, "Axe : Allemagne, Italie, Japon (+ alliés)   |   Alliés : Royaume-Uni, URSS (1941), États-Unis (1941), France libre, Chine…", { size: 12.5, style: "italic" });
  return svgWrap(W, H, g, "Les deux phases de la Deuxième Guerre mondiale (1939-1945)", "D'après Milza-Berstein et A. Beevor, La Seconde Guerre mondiale (2012)");
}

// ===================================================================
// 10. Schéma des blocs de la guerre froide
function blocsGuerreFroide() {
  const W = 1100, H = 660;
  let g = "";
  const col = (x, titre, fill, lignes) => {
    g += box(x, 60, 330, 300, fill);
    g += T(x + 165, 88, titre, { size: 17, w: "bold", anchor: "middle" });
    lignes.forEach((l, i) => (g += T(x + 14, 116 + i * 22, l, { size: 12.5, w: l.startsWith("•") ? "normal" : "bold" })));
  };
  col(30, "BLOC DE L'OUEST — États-Unis", "#c9daf8", ["Idéologie : démocratie libérale, capitalisme", "• Doctrine Truman (mars 1947) : endiguement", "• Plan Marshall (juin 1947) : 13 milliards $", "• OTAN (4 avril 1949)", "• RFA (1949), Japon, Australie, Canada,", "  Europe occidentale, alliances en Asie", "Chefs : Truman, Eisenhower, Kennedy", "", "Bombe A 1945, bombe H 1952"]);
  col(740, "BLOC DE L'EST — URSS", "#f4b183", ["Idéologie : communisme, parti unique", "• Doctrine Jdanov (sept. 1947) : deux camps", "• Kominform (1947), Comecon (1949)", "• Pacte de Varsovie (14 mai 1955)", "• Démocraties populaires d'Europe de l'Est,", "  RDA (1949), Chine (1949), Corée du Nord,", "  Vietnam du Nord, Cuba (1961)", "Chefs : Staline, Khrouchtchev, Brejnev", "Bombe A 1949, bombe H 1953"]);
  // rideau de fer
  g += line(550, 50, 550, 380, "#333", 6, "14,8") + T(550, 40, "« RIDEAU DE FER » (Churchill, 1946)", { size: 13, w: "bold", anchor: "middle" });
  g += box(390, 120, 320, 60, "#fff2cc") + T(550, 145, "ÉQUILIBRE DE LA TERREUR", { size: 14, w: "bold", anchor: "middle" }) + T(550, 166, "pas de guerre directe : propagande, espionnage,", { size: 11.5, anchor: "middle" });
  g += box(390, 200, 320, 60, "#fff2cc") + T(550, 222, "course aux armements, conquête spatiale,", { size: 11.5, anchor: "middle" }) + T(550, 242, "guerres par pays interposés", { size: 11.5, anchor: "middle" });
  g += box(390, 280, 320, 60, "#e2efda") + T(550, 303, "Tiers-Monde / non-alignés (Bandoeng 1955)", { size: 12.5, w: "bold", anchor: "middle" }) + T(550, 324, "refusent de choisir un bloc", { size: 11.5, anchor: "middle" });
  // crises
  g += T(W / 2, 410, "Les grandes crises (1948-1962)", { size: 16, w: "bold", anchor: "middle" });
  const crises = [["1948-1949", "Blocus de Berlin\npont aérien\n→ RFA et RDA"], ["1950-1953", "Guerre de Corée\n2 à 3 millions de morts\n→ 38e parallèle"], ["13 août 1961", "Mur de Berlin\nsymbole du\nrideau de fer"], ["octobre 1962", "Crise de Cuba\nfusées soviétiques\n→ au bord du nucléaire"]];
  crises.forEach(([d, t], i) => { const x = 40 + i * 262; g += box(x, 430, 240, 110, "#f8cbad"); g += T(x + 120, 455, d, { size: 14, w: "bold", anchor: "middle", fill: "#b00000" }); t.split("\n").forEach((l, k) => (g += T(x + 120, 478 + k * 17, l, { size: 12.5, anchor: "middle" }))); });
  g += arrow(300, 560, 500, 560, "#333") + arrow(800, 560, 600, 560, "#333") + T(550, 566, "après 1962 : DÉTENTE", { size: 14, w: "bold", anchor: "middle", fill: "#1E7B34" });
  g += T(550, 595, "1985-1991 : Gorbatchev, chute du mur (9 nov. 1989), fin de l'URSS (25 déc. 1991)", { size: 12.5, anchor: "middle", style: "italic" });
  return svgWrap(W, H, g, "Le monde bipolaire de la guerre froide (1947-1962)", "D'après G.-H. Soutou, La Guerre de Cinquante Ans (2001) et Milza-Berstein");
}

// ===================================================================
// 11. Frise décolonisation
function decolonisation() {
  const W = 1200, H = 610;
  let g = "";
  const y0 = 1944, y1 = 1977, X = (y) => 60 + (W - 120) * (y - y0) / (y1 - y0);
  const row = (ly, titre, fill, items, colr) => {
    g += `<rect x="${X(y0)}" y="${ly - 14}" width="${X(y1) - X(y0)}" height="28" fill="${fill}" stroke="#555"/>` + T(X(y0) + 6, ly + 5, titre, { size: 13, w: "bold" });
    items.forEach(([y, t, side, dx], i) => {
      const x = X(y), s = side || (i % 2 === 0 ? -1 : 1), lvl = Math.floor(i / 2) % 2;
      const base = s < 0 ? ly - 30 - lvl * 40 : ly + 42 + lvl * 40;
      g += `<circle cx="${x}" cy="${ly}" r="5" fill="${colr}" stroke="#fff"/>` + line(x, ly + s * 14, x, base + (s < 0 ? 4 : -12), colr, 1, "3,3");
      t.split("\n").forEach((l, k, a) => (g += T(x + (dx || 0), base + k * 13 - (s < 0 ? (a.length - 1) * 13 : 0), l, { size: 11.5, anchor: "middle", w: k === 0 ? "bold" : "normal" })));
    });
  };
  row(150, "ASIE (1945-1955)", "#c9daf8", [
    [1945.6, "1945 : Indonésie\n(guerre → 1949)"], [1947.6, "1947 : Inde\net Pakistan"], [1948.1, "1948 : Birmanie,\nCeylan"], [1949.75, "1949 : Chine\ncommuniste"], [1954.5, "1954 : Diên Biên Phu,\nGenève : Vietnam,\nLaos, Cambodge"], [1955.3, "avril 1955\nBANDOENG", 1],
  ], "#1F4E79");
  row(400, "AFRIQUE (1956-1975)", "#ffe599", [
    [1956.2, "1956 : Tunisie,\nMaroc, Soudan\nLoi-cadre"], [1957.2, "1957 : Ghana", 1, -20], [1958.75, "1958 : Guinée\nréférendum", 1], [1960.5, "1960 : « année de l'Afrique »\n17 États dont MADAGASCAR\n(26 juin), Sénégal, Congo…", -1], [1962.5, "1962 : Algérie\n(guerre 1954-62)", 1], [1963.9, "1963 : Kenya\nOUA (Addis-Abeba)", -1], [1975.5, "1975 : Angola,\nMozambique", 1],
  ], "#b00000");
  for (let y = 1945; y <= 1975; y += 5) { g += T(X(y), 285, y, { size: 13, w: "bold", anchor: "middle", fill: "#666" }); g += line(X(y), 164, X(y), 272, "#bbb", 1, "4,4") + line(X(y), 292, X(y), 386, "#bbb", 1, "4,4"); }
  g += box(60, 510, W - 120, 60, "#e2efda") + T(W / 2, 534, "Décolonisation négociée : Inde, Ghana, Tunisie, Afrique noire française, Madagascar   —   Décolonisation violente : Indonésie, Indochine, Algérie, Kenya, colonies portugaises", { size: 12.5, anchor: "middle" }) + T(W / 2, 556, "Naissance du Tiers-Monde : Bandoeng (1955), non-alignés (Belgrade 1961), Groupe des 77 (1964)", { size: 12.5, anchor: "middle", style: "italic" });
  return svgWrap(W, H, g, "Les grandes étapes de la décolonisation (1945-1975)", "D'après B. Droz, Histoire de la décolonisation au XXe siècle (2006)");
}

// 12. Frise Madagascar 1960-2025
const friseMada = () => frise({
  title: "Madagascar depuis l'indépendance (1960-2025) : Républiques, transitions et présidents", y0: 1958, y1: 2028, step: 5, H: 620, downOffset: 130, W: 1300,
  periods: [
    { from: 1960, to: 1972.4, label: "1re République\nTsiranana", color: "#a9d18e" },
    { from: 1972.4, to: 1975.9, label: "Transition militaire\nRamanantsoa", color: "#d9d9d9", lvl: 0 },
    { from: 1975.9, to: 1992.7, label: "2e République\nRatsiraka", color: "#f4b183" },
    { from: 1992.7, to: 2009.2, label: "3e République\nZafy, Ratsiraka, Ravalomanana", color: "#9dc3e6" },
    { from: 2009.2, to: 2014.1, label: "Transition (HAT)\nRajoelina", color: "#d9d9d9", lvl: 0 },
    { from: 2014.1, to: 2025.8, label: "4e République\nRajaonarimamp., Rajoelina", color: "#ffd966" },
    { from: 2025.8, to: 2027, label: "Transition\nRandrianirina", color: "#d9d9d9", lvl: 1 },
  ],
  events: [
    { y: 1960.5, label: "26 juin 1960\nindépendance", color: "#1E7B34" }, { y: 1971.3, label: "avril 1971\nrévolte du Sud" },
    { y: 1972.4, label: "13-18 mai 1972\nchute de Tsiranana\nRamanantsoa", color: "#b00000" }, { y: 1975.1, label: "fév. 1975 : Ratsimandrava\nassassiné ; Ratsiraka" },
    { y: 1975.97, label: "21 déc. 1975\nConstitution, Boky Mena" }, { y: 1982, label: "années 1980 : crise,\najustement structurel (FMI)" },
    { y: 1991.6, label: "10 août 1991 : marche\nsur Iavoloha ; Forces vives\nconvention du Panorama", color: "#b00000" }, { y: 1992.7, label: "18 sept. 1992\nConstitution" },
    { y: 1996.7, label: "1996 : empêchement\nde Zafy" }, { y: 2002.3, label: "2002 : crise\nRatsiraka /\nRavalomanana", color: "#b00000" },
    { y: 2009.2, label: "7 fév. 2009 : fusillade\n17 mars : Rajoelina (HAT)", color: "#b00000" }, { y: 2010.9, label: "17 nov. 2010\nréférendum 4e Rép." },
    { y: 2014.1, label: "janv. 2014\nRajaonarimampianina" }, { y: 2019.05, label: "janv. 2019 : Rajoelina\n(réélu déc. 2023)" },
    { y: 2025.8, label: "14 oct. 2025 : destitution\n17 oct. : Randrianirina,\nprésident de la Refondation", color: "#b00000", anchor: "end" },
  ],
  note: "Sources : Randrianja & Ellis (2009), Rajaonah (2016), Galibert (2009), textes constitutionnels, presse (octobre 2025) — à actualiser",
});

// ===================================================================
async function render(name, svg, width = 1100) {
  await sharp(Buffer.from(svg)).resize({ width }).png().toFile(path.join(OUT, name));
  console.log("✓", name);
}

(async () => {
  await render("carte_conquete.png", fixVilleLabels(carteConquete()), 900);
  await render("organigramme_colonial.png", organigrammeColonial(), 1300);
  await render("frise_colonisation.png", friseColonisation(), 1600);
  await render("carte_1947.png", fixVilleLabels(carte1947()), 900);
  await render("carte_europe_1919.png", traites1919(), 1400);
  await render("frise_urss.png", friseURSS(), 1600);
  await render("crise_1929.png", crise1929(), 1300);
  await render("chomage_nsdap.png", chomageNSDAP(), 1300);
  await render("carte_2gm.png", phases2GM(), 1600);
  await render("blocs_guerre_froide.png", blocsGuerreFroide(), 1500);
  await render("decolonisation.png", decolonisation(), 1600);
  await render("frise_madagascar_1960_2025.png", friseMada(), 1600);
})();
