// Génération des illustrations (SVG → PNG via sharp) — approche 2 du skill (schémas/cartes/graphiques)
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");
const OUT = path.join(__dirname, "..", "assets");
fs.mkdirSync(OUT, { recursive: true });

const FONT = "'DejaVu Serif', 'Times New Roman', serif";

// ---- contour simplifié de Madagascar (lon, lat) ----
const MADA = [
  [49.26,-11.95],[49.9,-12.9],[50.0,-13.4],[50.2,-14.3],[50.3,-14.9],[50.5,-15.7],[49.9,-15.45],[49.75,-16.2],[49.45,-17.4],[49.4,-18.15],[49.0,-19.35],[48.55,-20.5],[48.35,-21.25],[48.0,-22.15],[47.8,-22.85],[47.55,-23.6],[47.1,-24.8],[46.95,-25.05],
  [46.3,-25.25],[45.5,-25.55],[45.15,-25.6],[44.5,-25.3],[44.0,-24.95],
  [43.7,-24.0],[43.65,-23.35],[43.55,-22.5],[43.35,-21.7],[43.9,-20.8],[44.28,-20.3],[44.5,-19.6],[44.35,-18.8],[44.0,-18.0],[44.2,-17.3],[44.45,-16.6],[44.4,-16.15],[45.0,-16.0],[45.35,-15.95],[46.3,-15.7],[46.5,-15.3],[47.0,-15.0],[47.5,-14.6],[47.9,-14.0],[47.9,-13.5],[48.2,-13.2],[48.5,-13.0],[48.8,-13.2],[48.9,-12.6],[49.0,-12.3],
];
const S = 62, X0 = 43.0, Y0 = -11.6, KX = 0.94;
const px = ([lon, lat]) => [((lon - X0) * S * KX + 30).toFixed(1), ((Y0 - lat) * S + 30).toFixed(1)];
const poly = (pts) => pts.map(px).map((p) => p.join(",")).join(" ");

function carteRegions() {
  const W = 520, H = 1010;
  const est = [[49.3,-14.6],[48.75,-18.0],[48.0,-21.5],[47.3,-23.2],[47.3,-26],[51,-26],[51,-14.6]];
  const ht = [[48.3,-14.6],[47.1,-17.5],[46.6,-20.0],[46.0,-23.2],[47.3,-23.2],[48.0,-21.5],[48.75,-18.0],[49.3,-14.6]];
  const nord = [[42,-11],[52,-11],[52,-14.6],[42,-14.6]];
  const sud = [[42,-23.2],[52,-23.2],[52,-27],[42,-27]];
  const villes = [["Antsiranana",49.29,-12.28,1],["Mahajanga",46.32,-15.72,-1],["Toamasina",49.40,-18.15,1],["Antananarivo",47.52,-18.91,-1],["Fianarantsoa",47.09,-21.45,-1],["Toliara",43.67,-23.35,1]];
  const lab = (t, lon, lat, size = 17, w = "bold", fill = "#222") => { const [x, y] = px([lon, lat]); return `<text x="${x}" y="${y}" font-family="${FONT}" font-size="${size}" font-weight="${w}" fill="${fill}" text-anchor="middle">${t}</text>`; };
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <rect width="${W}" height="${H}" fill="#ffffff"/>
  <defs><clipPath id="ile"><polygon points="${poly(MADA)}"/></clipPath></defs>
  <g clip-path="url(#ile)">
    <polygon points="${poly(MADA)}" fill="#f1e2a8"/>
    <polygon points="${poly(ht)}" fill="#e2b48a"/>
    <polygon points="${poly(est)}" fill="#8fc98f"/>
    <polygon points="${poly(nord)}" fill="#b6d7a8"/>
    <polygon points="${poly(sud)}" fill="#f5c77e"/>
    <polygon points="${poly(ht)}" fill="none" stroke="#7a4b22" stroke-width="1.5" stroke-dasharray="6,4"/>
    <polygon points="${poly(est)}" fill="none" stroke="#2f6b2f" stroke-width="1.5" stroke-dasharray="6,4"/>
    <line x1="${px([42,-14.6])[0]}" y1="${px([42,-14.6])[1]}" x2="${px([52,-14.6])[0]}" y2="${px([52,-14.6])[1]}" stroke="#555" stroke-width="1.5" stroke-dasharray="6,4"/>
    <line x1="${px([42,-23.2])[0]}" y1="${px([42,-23.2])[1]}" x2="${px([52,-23.2])[0]}" y2="${px([52,-23.2])[1]}" stroke="#555" stroke-width="1.5" stroke-dasharray="6,4"/>
  </g>
  <polygon points="${poly(MADA)}" fill="none" stroke="#333" stroke-width="2"/>
  ${lab("NORD", 48.6, -13.3, 20)}
  ${lab("EST", 49.6, -20.0, 20)}
  ${lab("HAUTES", 47.4, -19.9, 18)}${lab("TERRES", 47.4, -20.35, 18)}
  ${lab("OUEST", 45.0, -18.6, 20)}
  ${lab("SUD", 45.3, -24.6, 20)}
  ${lab("▲ Tsaratanana 2 876 m", 48.9, -13.95, 13, "normal", "#7a1f1f")}
  ${lab("▲ Ankaratra 2 643 m", 47.35, -19.35, 12, "normal", "#7a1f1f")}
  ${villes.map(([n, lon, lat, side]) => { const [x, y] = px([lon, lat]); return `<circle cx="${x}" cy="${y}" r="5" fill="#c00000" stroke="#fff" stroke-width="1.5"/><text x="${+x + side * 9}" y="${+y + 5}" font-family="${FONT}" font-size="14" fill="#000" text-anchor="${side > 0 ? "start" : "end"}">${n}</text>`; }).join("")}
  <text x="20" y="${H - 66}" font-family="${FONT}" font-size="13" fill="#333">Canal de Mozambique (ouest) — Océan Indien (est)</text>
  <text x="20" y="${H - 44}" font-family="${FONT}" font-size="13" fill="#333">● Chef-lieu des six anciennes provinces</text>
  <text x="20" y="${H - 22}" font-family="${FONT}" font-size="13" fill="#333">Limites des régions naturelles : approximatives (schéma pédagogique)</text>
  <line x1="${W - 140}" y1="${H - 92}" x2="${W - 140 + 62 * 0.94 * 2}" y2="${H - 92}" stroke="#000" stroke-width="3"/>
  <text x="${W - 140}" y="${H - 98}" font-family="${FONT}" font-size="12" fill="#000">≈ 220 km</text>
  <text x="${W - 40}" y="60" font-family="${FONT}" font-size="22" font-weight="bold" fill="#000" text-anchor="middle">N</text>
  <polygon points="${W - 40},20 ${W - 48},40 ${W - 32},40" fill="#000"/>
</svg>`;
  return svg;
}

function barChart({ title, cats, vals, unit, color = "#1F4E79", W = 760, H = 460, note = null }) {
  const m = { l: 80, r: 30, t: 60, b: 80 };
  const max = Math.ceil(Math.max(...vals) / 5) * 5;
  const cw = (W - m.l - m.r) / cats.length;
  const y = (v) => m.t + (H - m.t - m.b) * (1 - v / max);
  let g = "";
  for (let i = 0; i <= 5; i++) { const v = (max / 5) * i; g += `<line x1="${m.l}" y1="${y(v)}" x2="${W - m.r}" y2="${y(v)}" stroke="#ccc"/><text x="${m.l - 8}" y="${y(v) + 5}" font-family="${FONT}" font-size="14" text-anchor="end">${v}</text>`; }
  cats.forEach((c, i) => {
    const x = m.l + cw * i + cw * 0.2, w = cw * 0.6;
    g += `<rect x="${x}" y="${y(vals[i])}" width="${w}" height="${y(0) - y(vals[i])}" fill="${color}"/>`;
    g += `<text x="${x + w / 2}" y="${y(vals[i]) - 8}" font-family="${FONT}" font-size="16" font-weight="bold" text-anchor="middle">${String(vals[i]).replace(".", ",")}</text>`;
    g += `<text x="${x + w / 2}" y="${H - m.b + 22}" font-family="${FONT}" font-size="15" text-anchor="middle">${c}</text>`;
  });
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}"><rect width="${W}" height="${H}" fill="#fff"/>
  <text x="${W / 2}" y="32" font-family="${FONT}" font-size="20" font-weight="bold" text-anchor="middle">${title}</text>
  <text x="${m.l - 8}" y="${m.t - 14}" font-family="${FONT}" font-size="13" text-anchor="end">${unit}</text>${g}
  <line x1="${m.l}" y1="${y(0)}" x2="${W - m.r}" y2="${y(0)}" stroke="#000" stroke-width="1.5"/>
  ${note ? `<text x="${W / 2}" y="${H - 18}" font-family="${FONT}" font-size="13" font-style="italic" text-anchor="middle">${note}</text>` : ""}</svg>`;
}

function hBars({ title, rows, W = 760, H = 380, color = "#1E7B34", note = null }) {
  const m = { l: 230, r: 80, t: 60, b: 40 };
  const rh = (H - m.t - m.b) / rows.length;
  const max = 50;
  let g = "";
  rows.forEach(([lab, v], i) => {
    const y = m.t + rh * i + rh * 0.2, h = rh * 0.6, w = (W - m.l - m.r) * v / max;
    g += `<text x="${m.l - 10}" y="${y + h / 2 + 6}" font-family="${FONT}" font-size="16" text-anchor="end">${lab}</text>`;
    g += `<rect x="${m.l}" y="${y}" width="${w}" height="${h}" fill="${color}"/>`;
    g += `<text x="${m.l + w + 8}" y="${y + h / 2 + 6}" font-family="${FONT}" font-size="16" font-weight="bold">${String(v).replace(".", ",")} %</text>`;
  });
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}"><rect width="${W}" height="${H}" fill="#fff"/>
  <text x="${W / 2}" y="32" font-family="${FONT}" font-size="20" font-weight="bold" text-anchor="middle">${title}</text>${g}
  ${note ? `<text x="${W / 2}" y="${H - 12}" font-family="${FONT}" font-size="13" font-style="italic" text-anchor="middle">${note}</text>` : ""}</svg>`;
}

function stackedSecteurs() {
  const W = 800, H = 420;
  const data = [["Part du PIB", [23, 22, 45, 10]], ["Part des emplois", [75, 8, 17, 0]]];
  const cols = ["#1E7B34", "#C00000", "#1F4E79", "#999"];
  const names = ["Secteur primaire", "Secteur secondaire", "Secteur tertiaire", "Taxes et autres"];
  const m = { l: 60, r: 40, t: 60, b: 70 }, bw = 220, gap = 120;
  let g = "";
  data.forEach(([lab, vals], bi) => {
    const x = m.l + 60 + bi * (bw + gap); let acc = 0;
    vals.forEach((v, i) => {
      if (!v) return;
      const h = (H - m.t - m.b) * v / 100, y = m.t + (H - m.t - m.b) * (1 - (acc + v) / 100);
      g += `<rect x="${x}" y="${y}" width="${bw}" height="${h}" fill="${cols[i]}" stroke="#fff"/>`;
      if (v >= 7) g += `<text x="${x + bw / 2}" y="${y + h / 2 + 6}" font-family="${FONT}" font-size="17" font-weight="bold" fill="#fff" text-anchor="middle">${v} %</text>`;
      acc += v;
    });
    g += `<text x="${x + bw / 2}" y="${H - m.b + 26}" font-family="${FONT}" font-size="17" font-weight="bold" text-anchor="middle">${lab}</text>`;
  });
  let leg = ""; names.forEach((n, i) => { leg += `<rect x="${m.l + i * 185}" y="${H - 26}" width="16" height="16" fill="${cols[i]}"/><text x="${m.l + i * 185 + 22}" y="${H - 13}" font-family="${FONT}" font-size="13">${n}</text>`; });
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}"><rect width="${W}" height="${H}" fill="#fff"/>
  <text x="${W / 2}" y="32" font-family="${FONT}" font-size="20" font-weight="bold" text-anchor="middle">Les trois secteurs de l'économie malgache</text>${g}${leg}</svg>`;
}


// Carte générique : fond de l'île + zones colorées (polygones lon/lat) + points + légende
function carteThematique({ titre, zones = [], points = [], legende = [] }) {
  const W = 680, H = 940 + legende.length * 26 + 30;
  const lab = (t, lon, lat, size = 14, w = "bold", fill = "#222", anchor = "middle") => { const [x, y] = px([lon, lat]); return `<text x="${x}" y="${y}" font-family="${FONT}" font-size="${size}" font-weight="${w}" fill="${fill}" text-anchor="${anchor}">${t}</text>`; };
  const zonesSvg = zones.map((z) => `<polygon points="${poly(z.pts)}" fill="${z.fill}" fill-opacity="${z.opacity ?? 0.85}" stroke="${z.stroke || "none"}" stroke-width="1.2"/>`).join("");
  const zoneLabels = zones.filter((z) => z.label).map((z) => lab(z.label, z.lab[0], z.lab[1], 13, "bold", "#111")).join("");
  const ptsSvg = points.map((p) => { const [x, y] = px([p.lon, p.lat]); const side = p.side || 1; return `<circle cx="${x}" cy="${y}" r="5" fill="${p.color || "#c00000"}" stroke="#fff" stroke-width="1.5"/><text x="${+x + side * 9}" y="${+y + 5}" font-family="${FONT}" font-size="13" fill="#000" text-anchor="${side > 0 ? "start" : "end"}">${p.n}</text>`; }).join("");
  const y0 = 930;
  const legSvg = legende.map((l, i) => `<rect x="24" y="${y0 + i * 26}" width="18" height="16" fill="${l.fill}" stroke="#666"/><text x="50" y="${y0 + 13 + i * 26}" font-family="${FONT}" font-size="13" fill="#222">${l.text}</text>`).join("");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <rect width="${W}" height="${H}" fill="#ffffff"/>
  <text x="${W / 2}" y="26" font-family="${FONT}" font-size="17" font-weight="bold" text-anchor="middle">${titre}</text>
  <defs><clipPath id="ile2"><polygon points="${poly(MADA)}"/></clipPath></defs>
  <g transform="translate(90,0)"><g clip-path="url(#ile2)"><polygon points="${poly(MADA)}" fill="#f6f1de"/>${zonesSvg}</g>
  <polygon points="${poly(MADA)}" fill="none" stroke="#333" stroke-width="2"/>
  ${zoneLabels}${ptsSvg}</g>
  <line x1="20" y1="${y0 - 14}" x2="${W - 20}" y2="${y0 - 14}" stroke="#999"/>${legSvg}
  <text x="${W - 40}" y="70" font-family="${FONT}" font-size="22" font-weight="bold" text-anchor="middle">N</text><polygon points="${W - 40},30 ${W - 48},50 ${W - 32},50" fill="#000"/>
  <text x="${W - 20}" y="${H - 8}" font-family="${FONT}" font-size="11" fill="#555" text-anchor="end">Schéma pédagogique — limites approximatives</text>
</svg>`;
}

function carteCultures() {
  return carteThematique({
    titre: "Localisation des principales cultures",
    zones: [
      { pts: [[49.3,-14.6],[48.75,-18.0],[48.0,-21.5],[47.3,-23.2],[47.3,-26],[51,-26],[51,-14.6]], fill: "#7fbf7f", label: "Vanille", lab: [49.55,-15.9] },
      { pts: [[48.2,-13.0],[49.6,-13.0],[49.6,-13.6],[48.2,-13.6]], fill: "#d97b4f", label: "", lab: [48.9,-13.35] },
      { pts: [[48.3,-14.6],[47.1,-17.5],[46.6,-20.0],[46.0,-23.2],[47.3,-23.2],[48.0,-21.5],[48.75,-18.0],[49.3,-14.6]], fill: "#f2d16b", label: "Riz", lab: [47.4,-20.7] },
      { pts: [[44.0,-15.3],[46.4,-15.3],[46.4,-16.6],[44.0,-16.6]], fill: "#f2d16b", opacity: 0.6 },
      { pts: [[43.5,-17.5],[46.5,-17.5],[46.5,-21.5],[43.5,-21.5]], fill: "#e8e0c0", label: "Coton, arachide", lab: [44.9,-19.0] },
      { pts: [[45.5,-24.6],[47.0,-24.6],[47.0,-25.4],[45.5,-25.4]], fill: "#c9a96b", label: "", lab: [46.2,-24.35] },
      { pts: [[43.5,-22.0],[46.5,-22.0],[46.5,-25.6],[43.5,-25.6]], fill: "#f0c890", opacity: 0.5, label: "Manioc, maïs", lab: [44.9,-23.0] },
    ],
    points: [
      { n: "SAVA (vanille)", lon: 50.0, lat: -14.3, side: -1 }, { n: "Ambanja (cacao, Sambirano)", lon: 48.45, lat: -13.7, side: -1 },
      { n: "Lac Alaotra (riz)", lon: 48.45, lat: -17.5, side: -1 }, { n: "Marovoay (riz)", lon: 46.65, lat: -16.1, side: -1 },
      { n: "Fénérive (girofle)", lon: 49.4, lat: -17.4, side: 1 }, { n: "Toamasina (litchi)", lon: 49.4, lat: -18.15, side: 1 },
      { n: "Ambilobe (canne à sucre)", lon: 49.05, lat: -13.2, side: 1 }, { n: "Antsirabe (pomme de terre)", lon: 47.03, lat: -19.87, side: -1 },
      { n: "Amboasary (sisal)", lon: 46.4, lat: -25.0, side: -1 }, { n: "Manakara (café)", lon: 48.0, lat: -22.15, side: 1 },
    ],
    legende: [
      { fill: "#7fbf7f", text: "Cultures d'exportation (vanille, girofle, café, litchi)" },
      { fill: "#d97b4f", text: "Cacao, ylang-ylang (Sambirano)" },
      { fill: "#f2d16b", text: "Riziculture (Hautes Terres, Alaotra, Marovoay), cultures tempérées" },
      { fill: "#e8e0c0", text: "Coton, arachide, tabac, élevage (Ouest)" },
      { fill: "#f0c890", text: "Manioc, maïs, patate douce, sisal (Sud)" },
    ],
  });
}

function carteElevagePeche() {
  return carteThematique({
    titre: "Élevage bovin et zones de pêche",
    zones: [
      { pts: [[43.5,-15.0],[46.8,-15.0],[46.8,-21.5],[43.5,-21.5]], fill: "#e6b980", label: "Grands troupeaux", lab: [45.0,-18.3] },
      { pts: [[43.5,-21.5],[47.0,-21.5],[47.0,-25.8],[43.5,-25.8]], fill: "#e6b980", label: "Zébus, chèvres", lab: [45.0,-23.6] },
      { pts: [[46.6,-18.5],[47.6,-18.5],[47.6,-20.3],[46.6,-20.3]], fill: "#f7e28a", label: "Lait", lab: [47.1,-19.5] },
      { pts: [[43.6,-14.8],[45.0,-14.8],[45.0,-17.2],[43.6,-17.2]], fill: "#8fc4e8", opacity: 0.6 },
      { pts: [[43.0,-21.5],[44.0,-21.5],[44.0,-24.5],[43.0,-24.5]], fill: "#8fc4e8", opacity: 0.6 },
      { pts: [[48.5,-11.9],[50.5,-11.9],[50.5,-13.6],[48.5,-13.6]], fill: "#8fc4e8", opacity: 0.6 },
    ],
    points: [
      { n: "Mahajanga (crevettes)", lon: 46.32, lat: -15.72, side: -1, color: "#0b5394" }, { n: "Besalampy (aquaculture)", lon: 44.5, lat: -16.75, side: -1, color: "#0b5394" },
      { n: "Morondava (crevettes)", lon: 44.28, lat: -20.3, side: -1, color: "#0b5394" }, { n: "Toliara (Vezo, récif)", lon: 43.67, lat: -23.35, side: -1, color: "#0b5394" },
      { n: "Antsiranana (thon)", lon: 49.29, lat: -12.28, side: 1, color: "#0b5394" }, { n: "Taolagnaro (langoustes)", lon: 46.99, lat: -25.03, side: 1, color: "#0b5394" },
      { n: "Lac Alaotra (tilapia)", lon: 48.45, lat: -17.5, side: 1, color: "#0b5394" }, { n: "Antsirabe (lait)", lon: 47.03, lat: -19.87, side: 1 },
      { n: "Ihorombe (Bara)", lon: 46.1, lat: -22.4, side: 1 }, { n: "Androy", lon: 46.0, lat: -25.1, side: -1 },
    ],
    legende: [
      { fill: "#e6b980", text: "Élevage bovin extensif (Ouest, Sud)" },
      { fill: "#f7e28a", text: "Élevage laitier moderne (Vakinankaratra)" },
      { fill: "#8fc4e8", text: "Principales zones de pêche en mer" },
    ],
  });
}

function groupedBars({ title, cats, series, W = 800, H = 460, note = null }) {
  const m = { l: 90, r: 30, t: 60, b: 90 };
  const max = Math.ceil(Math.max(...series.flatMap((s) => s.vals)) / 1000) * 1000;
  const cw = (W - m.l - m.r) / cats.length, bw = cw * 0.35;
  const y = (v) => m.t + (H - m.t - m.b) * (1 - v / max);
  let g = "";
  for (let i = 0; i <= 5; i++) { const v = (max / 5) * i; g += `<line x1="${m.l}" y1="${y(v)}" x2="${W - m.r}" y2="${y(v)}" stroke="#ccc"/><text x="${m.l - 8}" y="${y(v) + 5}" font-family="${FONT}" font-size="13" text-anchor="end">${v.toLocaleString("fr-FR").replace(/\u202f/g, " ")}</text>`; }
  cats.forEach((c, i) => {
    series.forEach((s, k) => {
      const x = m.l + cw * i + cw * 0.15 + k * bw, v = s.vals[i];
      g += `<rect x="${x}" y="${y(v)}" width="${bw - 4}" height="${y(0) - y(v)}" fill="${s.color}"/>`;
      g += `<text x="${x + bw / 2 - 2}" y="${y(v) - 6}" font-family="${FONT}" font-size="13" font-weight="bold" text-anchor="middle">${v.toLocaleString("fr-FR").replace(/\u202f/g, " ")}</text>`;
    });
    g += `<text x="${m.l + cw * i + cw / 2}" y="${H - m.b + 22}" font-family="${FONT}" font-size="15" text-anchor="middle">${c}</text>`;
  });
  let leg = ""; series.forEach((s, k) => { leg += `<rect x="${m.l + k * 260}" y="${H - 40}" width="16" height="16" fill="${s.color}"/><text x="${m.l + k * 260 + 22}" y="${H - 27}" font-family="${FONT}" font-size="14">${s.name}</text>`; });
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}"><rect width="${W}" height="${H}" fill="#fff"/>
  <text x="${W / 2}" y="32" font-family="${FONT}" font-size="20" font-weight="bold" text-anchor="middle">${title}</text>
  <text x="${m.l - 8}" y="${m.t - 14}" font-family="${FONT}" font-size="12" text-anchor="end">milliers de tonnes</text>${g}
  <line x1="${m.l}" y1="${y(0)}" x2="${W - m.r}" y2="${y(0)}" stroke="#000" stroke-width="1.5"/>${leg}
  ${note ? `<text x="${W / 2}" y="${H - 8}" font-family="${FONT}" font-size="12" font-style="italic" text-anchor="middle">${note}</text>` : ""}</svg>`;
}

// ---- Unité 3 / 4 ----
function pieChart({ cx, cy, r, data, colors, labelSize = 13 }) {
  let acc = -Math.PI / 2, g = "";
  const total = data.reduce((a, [, v]) => a + v, 0);
  data.forEach(([n, v], i) => {
    const a0 = acc, a1 = acc + (v / total) * 2 * Math.PI; acc = a1;
    const x0 = cx + r * Math.cos(a0), y0 = cy + r * Math.sin(a0), x1 = cx + r * Math.cos(a1), y1 = cy + r * Math.sin(a1);
    const large = a1 - a0 > Math.PI ? 1 : 0;
    g += `<path d="M${cx},${cy} L${x0.toFixed(1)},${y0.toFixed(1)} A${r},${r} 0 ${large} 1 ${x1.toFixed(1)},${y1.toFixed(1)} Z" fill="${colors[i]}" stroke="#fff" stroke-width="2"/>`;
    const am = (a0 + a1) / 2, lx = cx + r * 0.62 * Math.cos(am), ly = cy + r * 0.62 * Math.sin(am);
    if (v / total > 0.06) g += `<text x="${lx.toFixed(1)}" y="${(ly + 5).toFixed(1)}" font-family="${FONT}" font-size="${labelSize}" font-weight="bold" fill="#fff" text-anchor="middle">${v} %</text>`;
  });
  return g;
}
function legendBlock(x, y, data, colors, size = 13, dy = 22) {
  return data.map(([n], i) => `<rect x="${x}" y="${y + i * dy}" width="15" height="15" fill="${colors[i]}"/><text x="${x + 22}" y="${y + 12 + i * dy}" font-family="${FONT}" font-size="${size}">${n}</text>`).join("");
}

function energieMadagascar() {
  const W = 860, H = 440;
  const mix = [["Thermique (fioul, gazole importés)", 55], ["Hydroélectricité", 40], ["Solaire et autres", 5]];
  const cm = ["#C00000", "#1F4E79", "#F2A900"];
  const acc = [["Ménages sans électricité", 64], ["Ménages avec électricité", 36]];
  const ca = ["#999999", "#1E7B34"];
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}"><rect width="${W}" height="${H}" fill="#fff"/>
  <text x="${W / 2}" y="30" font-family="${FONT}" font-size="20" font-weight="bold" text-anchor="middle">L'électricité à Madagascar (vers 2023)</text>
  <text x="215" y="64" font-family="${FONT}" font-size="15" font-weight="bold" text-anchor="middle">Origine de l'électricité produite</text>
  ${pieChart({ cx: 215, cy: 200, r: 115, data: mix, colors: cm })}
  ${legendBlock(60, 340, mix, cm)}
  <text x="640" y="64" font-family="${FONT}" font-size="15" font-weight="bold" text-anchor="middle">Accès des ménages à l'électricité</text>
  ${pieChart({ cx: 640, cy: 200, r: 115, data: acc, colors: ca })}
  ${legendBlock(500, 340, acc, ca)}
  <text x="640" y="400" font-family="${FONT}" font-size="12" font-style="italic" text-anchor="middle">Villes : plus de 70 % — Campagnes : moins de 10 %</text>
  <text x="${W / 2}" y="${H - 10}" font-family="${FONT}" font-size="12" font-style="italic" text-anchor="middle">Sources : JIRAMA, Ministère de l'Énergie, Banque mondiale (valeurs arrondies)</text></svg>`;
}

function carteIndustries() {
  return carteThematique({
    titre: "Principaux centres industriels et miniers",
    zones: [
      { pts: [[47.0,-18.5],[48.0,-18.5],[48.0,-19.3],[47.0,-19.3]], fill: "#f4b183", opacity: 0.7 },
      { pts: [[47.0,-19.3],[47.6,-19.3],[47.6,-20.1],[47.0,-20.1]], fill: "#f4b183", opacity: 0.5 },
      { pts: [[48.0,-18.7],[49.5,-18.7],[49.5,-19.2],[48.0,-19.2]], fill: "#f4b183", opacity: 0.35 },
    ],
    points: [
      { n: "Antananarivo (textile, IAA, chimie)", lon: 47.52, lat: -18.9, side: -1, color: "#C00000" },
      { n: "Antsirabe (brasserie, lait, ciment)", lon: 47.03, lat: -19.87, side: -1, color: "#C00000" },
      { n: "Toamasina (port, nickel, pétrole)", lon: 49.4, lat: -18.15, side: 1, color: "#C00000" },
      { n: "Moramanga (mine de nickel)", lon: 48.23, lat: -18.95, side: 1, color: "#7030A0" },
      { n: "Mahajanga (crevettes, ciment)", lon: 46.32, lat: -15.72, side: -1, color: "#C00000" },
      { n: "Antsiranana (chantier naval, thon)", lon: 49.29, lat: -12.28, side: 1, color: "#C00000" },
      { n: "Ambilobe (sucre)", lon: 49.05, lat: -13.2, side: -1, color: "#1E7B34" },
      { n: "Andriamena (chrome)", lon: 47.55, lat: -17.4, side: -1, color: "#7030A0" },
      { n: "Ilakaka (saphirs)", lon: 45.2, lat: -22.65, side: -1, color: "#7030A0" },
      { n: "Taolagnaro (ilménite)", lon: 46.99, lat: -25.03, side: 1, color: "#7030A0" },
      { n: "Toliara", lon: 43.67, lat: -23.35, side: 1, color: "#C00000" },
      { n: "Ambatolampy (aluminium)", lon: 47.42, lat: -19.38, side: 1, color: "#1E7B34" },
    ],
    legende: [
      { fill: "#f4b183", text: "Axe industriel Antsirabe – Antananarivo – Toamasina" },
      { fill: "#C00000", text: "Grands centres industriels et ports" },
      { fill: "#7030A0", text: "Sites miniers" },
      { fill: "#1E7B34", text: "Agro-industrie et artisanat de production" },
    ],
  });
}

function carteTransports() {
  const routes = [
    { n: "RN2", pts: [[47.52,-18.9],[48.23,-18.95],[48.8,-18.6],[49.4,-18.15]] },
    { n: "RN4", pts: [[47.52,-18.9],[47.0,-17.7],[46.9,-16.5],[46.32,-15.72]] },
    { n: "RN6", pts: [[46.9,-16.5],[48.0,-14.7],[48.45,-13.7],[49.05,-13.2],[49.29,-12.28]] },
    { n: "RN7", pts: [[47.52,-18.9],[47.03,-19.87],[47.1,-21.45],[46.1,-22.4],[45.2,-22.65],[44.3,-23.2],[43.67,-23.35]] },
    { n: "RN1", pts: [[47.52,-18.9],[46.05,-18.77]] },
    { n: "RN13", pts: [[46.1,-22.4],[46.2,-24.0],[46.99,-25.03]] },
    { n: "RN34/35", pts: [[47.03,-19.87],[45.6,-19.9],[44.28,-20.3]] },
  ];
  const rails = [
    [[47.52,-18.9],[48.23,-18.95],[48.8,-18.6],[49.4,-18.15]],
    [[48.23,-18.95],[48.45,-17.5]],
    [[47.52,-18.9],[47.03,-19.87]],
    [[47.1,-21.45],[48.0,-22.15]],
  ];
  const W = 680, H = 940 + 5 * 26 + 30;
  const pl = (pts) => pts.map(px).map((p) => p.join(",")).join(" ");
  const routesSvg = routes.map((r) => `<polyline points="${pl(r.pts)}" fill="none" stroke="#C00000" stroke-width="3"/>`).join("");
  const labPos = { RN2: [48.75, -18.45], RN4: [46.95, -17.1], RN6: [48.2, -14.5], RN7: [47.2, -20.7], RN1: [46.6, -18.6], RN13: [46.3, -24.3], "RN34/35": [45.6, -19.75] };
  const routeLabels = routes.map((r) => { const [x, y] = px(labPos[r.n]); return `<text x="${x}" y="${y}" font-family="${FONT}" font-size="12" font-weight="bold" fill="#C00000">${r.n}</text>`; }).join("");
  const railsSvg = rails.map((r) => `<polyline points="${pl(r)}" fill="none" stroke="#000" stroke-width="3" stroke-dasharray="8,5"/>`).join("");
  const pang = `<polyline points="${pl([[49.4,-18.15],[49.0,-19.35],[48.55,-20.5],[48.35,-21.25],[48.0,-22.15],[47.8,-22.85]])}" fill="none" stroke="#1F4E79" stroke-width="3" stroke-dasharray="2,4"/>`;
  const ports = [["Toamasina", 49.4, -18.15, 1], ["Mahajanga", 46.32, -15.72, -1], ["Antsiranana", 49.29, -12.28, 1], ["Toliara", 43.67, -23.35, -1], ["Ehoala / Taolagnaro", 46.99, -25.03, 1], ["Morondava", 44.28, -20.3, -1], ["Manakara", 48.0, -22.15, 1]];
  const portsSvg = ports.map(([n, lon, lat, side]) => { const [x, y] = px([lon, lat]); return `<rect x="${x - 5}" y="${y - 5}" width="10" height="10" fill="#1F4E79" stroke="#fff"/><text x="${+x + side * 10}" y="${+y + 4}" font-family="${FONT}" font-size="12" text-anchor="${side > 0 ? "start" : "end"}">${n}</text>`; }).join("");
  const aero = [["Ivato", 47.45, -18.75, -1], ["Fascene (Nosy Be)", 48.32, -13.3, 1]];
  const aeroSvg = aero.map(([n, lon, lat, side]) => { const [x, y] = px([lon, lat]); return `<polygon points="${x},${y - 8} ${x - 7},${y + 5} ${x + 7},${y + 5}" fill="#F2A900" stroke="#333"/><text x="${+x + side * 10}" y="${+y + 4}" font-family="${FONT}" font-size="12" text-anchor="${side > 0 ? "start" : "end"}">${n}</text>`; }).join("");
  const cities = [["Antananarivo", 47.52, -18.9, 6, -10, "bold"], ["Antsirabe", 47.03, -19.87, 7, -5], ["Fianarantsoa", 47.1, -21.45, 7, -5], ["Moramanga", 48.23, -18.95, 4, 16], ["Ihosy", 46.1, -22.4, -8, 16], ["Ambatondrazaka", 48.45, -17.5, 7, -5]];
  const citiesSvg = cities.map(([n, lon, lat, dx, dy, w]) => { const [x, y] = px([lon, lat]); return `<circle cx="${x}" cy="${y}" r="4" fill="#000"/><text x="${+x + dx}" y="${+y + dy}" font-family="${FONT}" font-size="12" font-style="italic" font-weight="${w || "normal"}" text-anchor="${dx < 0 ? "end" : "start"}">${n}</text>`; }).join("");
  const leg = [["#C00000", "Routes nationales principales", "line"], ["#000", "Voies ferrées (877 km)", "dash"], ["#1F4E79", "Canal des Pangalanes", "dot"], ["#1F4E79", "Ports", "rect"], ["#F2A900", "Aéroports internationaux principaux", "tri"]];
  const y0 = 930;
  const legSvg = leg.map(([c, t, k], i) => { const y = y0 + i * 26; let sym = ""; if (k === "line") sym = `<line x1="24" y1="${y + 8}" x2="44" y2="${y + 8}" stroke="${c}" stroke-width="3"/>`; else if (k === "dash") sym = `<line x1="24" y1="${y + 8}" x2="44" y2="${y + 8}" stroke="${c}" stroke-width="3" stroke-dasharray="6,4"/>`; else if (k === "dot") sym = `<line x1="24" y1="${y + 8}" x2="44" y2="${y + 8}" stroke="${c}" stroke-width="3" stroke-dasharray="2,4"/>`; else if (k === "rect") sym = `<rect x="28" y="${y + 2}" width="12" height="12" fill="${c}"/>`; else sym = `<polygon points="34,${y} 27,${y + 14} 41,${y + 14}" fill="${c}" stroke="#333"/>`; return `${sym}<text x="52" y="${y + 13}" font-family="${FONT}" font-size="13">${t}</text>`; }).join("");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}"><rect width="${W}" height="${H}" fill="#fff"/>
  <text x="${W / 2}" y="26" font-family="${FONT}" font-size="17" font-weight="bold" text-anchor="middle">Les grands axes de transport de Madagascar</text>
  <g transform="translate(90,0)"><polygon points="${poly(MADA)}" fill="#f6f1de" stroke="#333" stroke-width="2"/>${pang}${routesSvg}${railsSvg}${routeLabels}${portsSvg}${aeroSvg}${citiesSvg}</g>
  <line x1="20" y1="${y0 - 14}" x2="${W - 20}" y2="${y0 - 14}" stroke="#999"/>${legSvg}
  <text x="${W - 40}" y="70" font-family="${FONT}" font-size="22" font-weight="bold" text-anchor="middle">N</text><polygon points="${W - 40},30 ${W - 48},50 ${W - 32},50" fill="#000"/>
  <text x="${W - 20}" y="${H - 8}" font-family="${FONT}" font-size="11" fill="#555" text-anchor="end">Schéma pédagogique — tracés simplifiés</text></svg>`;
}

function commerceExterieur() {
  const W = 960, H = 480;
  const exp = [["Nickel", 25], ["Vêtements", 15], ["Vanille", 8], ["Girofle", 8], ["Titane (ilménite)", 5], ["Or", 4], ["Autres (crevettes, cobalt, litchis)", 35]];
  const ce = ["#1F4E79", "#2E75B6", "#1E7B34", "#70AD47", "#7030A0", "#F2A900", "#BBBBBB"];
  const imp = [["Produits pétroliers", 19], ["Machines, équipements", 15], ["Véhicules", 8], ["Riz", 4], ["Médicaments", 4], ["Tissus", 4], ["Autres (ciment, huile, sucre)", 46]];
  const ci = ["#C00000", "#E9704F", "#F4B183", "#1E7B34", "#7030A0", "#2E75B6", "#BBBBBB"];
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}"><rect width="${W}" height="${H}" fill="#fff"/>
  <text x="${W / 2}" y="30" font-family="${FONT}" font-size="20" font-weight="bold" text-anchor="middle">Le commerce extérieur de Madagascar en 2023</text>
  <text x="225" y="62" font-family="${FONT}" font-size="15" font-weight="bold" text-anchor="middle">Exportations : 3,2 milliards de dollars</text>
  ${pieChart({ cx: 130, cy: 200, r: 105, data: exp, colors: ce, labelSize: 12 })}
  ${legendBlock(250, 110, exp, ce, 12, 21)}
  <text x="705" y="62" font-family="${FONT}" font-size="15" font-weight="bold" text-anchor="middle">Importations : 4,7 milliards de dollars</text>
  ${pieChart({ cx: 610, cy: 200, r: 105, data: imp, colors: ci, labelSize: 12 })}
  ${legendBlock(730, 110, imp, ci, 12, 21)}
  <rect x="${W / 2 - 250}" y="345" width="500" height="60" fill="#fdecea" stroke="#C00000"/>
  <text x="${W / 2}" y="370" font-family="${FONT}" font-size="15" font-weight="bold" text-anchor="middle" fill="#C00000">Balance commerciale : 3,2 − 4,7 = − 1,5 milliard de dollars</text>
  <text x="${W / 2}" y="392" font-family="${FONT}" font-size="13" text-anchor="middle">Le pays achète plus qu'il ne vend : la balance est déficitaire.</text>
  <text x="${W / 2}" y="${H - 44}" font-family="${FONT}" font-size="12" text-anchor="middle">Principaux clients : France 14,5 % · États-Unis 12,6 % · Japon 8 % · Corée du Sud 8 % · Chine 8 %</text>
  <text x="${W / 2}" y="${H - 27}" font-family="${FONT}" font-size="12" text-anchor="middle">Principaux fournisseurs : Chine 17 % · Oman 13,5 % · France 11 % · Inde 9 %</text>
  <text x="${W / 2}" y="${H - 10}" font-family="${FONT}" font-size="12" font-style="italic" text-anchor="middle">Sources : Banque mondiale / WITS, INSTAT (valeurs arrondies)</text></svg>`;
}

function tourismeArrivees() {
  const W = 900, H = 460;
  const cats = ["2015", "2017", "2019", "2020", "2021", "2022", "2023"], vals = [244, 255, 375, 63, 20, 132, 260];
  const m = { l: 70, r: 20, t: 70, b: 70 }, gw = 520, max = 400;
  const cw = gw / cats.length; const y = (v) => m.t + (H - m.t - m.b) * (1 - v / max);
  let g = "";
  for (let i = 0; i <= 4; i++) { const v = 100 * i; g += `<line x1="${m.l}" y1="${y(v)}" x2="${m.l + gw}" y2="${y(v)}" stroke="#ccc"/><text x="${m.l - 6}" y="${y(v) + 5}" font-family="${FONT}" font-size="13" text-anchor="end">${v}</text>`; }
  cats.forEach((c, i) => { const x = m.l + cw * i + cw * 0.2, w = cw * 0.6; const col = ["2020", "2021"].includes(c) ? "#C00000" : "#1E7B34"; g += `<rect x="${x}" y="${y(vals[i])}" width="${w}" height="${y(0) - y(vals[i])}" fill="${col}"/><text x="${x + w / 2}" y="${y(vals[i]) - 6}" font-family="${FONT}" font-size="14" font-weight="bold" text-anchor="middle">${vals[i]}</text><text x="${x + w / 2}" y="${H - m.b + 20}" font-family="${FONT}" font-size="14" text-anchor="middle">${c}</text>`; });
  const orig = [["France", 37], ["Italie", 13], ["Réunion, Maurice", 8], ["Allemagne", 5], ["États-Unis", 5], ["Autres", 32]];
  const co = ["#1F4E79", "#2E75B6", "#1E7B34", "#F2A900", "#C00000", "#BBBBBB"];
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}"><rect width="${W}" height="${H}" fill="#fff"/>
  <text x="${W / 2}" y="30" font-family="${FONT}" font-size="20" font-weight="bold" text-anchor="middle">Le tourisme à Madagascar</text>
  <text x="${m.l + gw / 2}" y="56" font-family="${FONT}" font-size="14" font-weight="bold" text-anchor="middle">Arrivées de touristes étrangers (milliers)</text>${g}
  <line x1="${m.l}" y1="${y(0)}" x2="${m.l + gw}" y2="${y(0)}" stroke="#000" stroke-width="1.5"/>
  <text x="${m.l + gw / 2}" y="${H - 22}" font-family="${FONT}" font-size="12" font-style="italic" text-anchor="middle">En rouge : années de la pandémie de Covid-19</text>
  <text x="745" y="56" font-family="${FONT}" font-size="14" font-weight="bold" text-anchor="middle">Origine des touristes (2023)</text>
  ${pieChart({ cx: 745, cy: 180, r: 95, data: orig, colors: co, labelSize: 12 })}
  ${legendBlock(660, 295, orig, co, 12, 20)}
  <text x="${W / 2}" y="${H - 6}" font-family="${FONT}" font-size="12" font-style="italic" text-anchor="middle">Sources : Ministère du Tourisme, ONTM (valeurs arrondies)</text></svg>`;
}

async function render(name, svg, width = 1100) {
  await sharp(Buffer.from(svg)).resize({ width }).png().toFile(path.join(OUT, name));
  console.log("✓", name);
}

(async () => {
  await render("carte_regions_naturelles.png", carteRegions(), 900);
  await render("population_evolution.png", barChart({ title: "Population de Madagascar aux recensements", cats: ["1975 (RGPH-1)", "1993 (RGPH-2)", "2018 (RGPH-3)", "2024 (estimation)"], vals: [7.6, 12.2, 25.7, 30], unit: "millions d'habitants", note: "Sources : INSTAT (RGPH 1975, 1993, 2018) ; estimation 2024 : Nations Unies" }));
  await render("structure_age.png", hBars({ title: "Structure par âge de la population (2018)", rows: [["Moins de 15 ans", 44], ["15 à 24 ans", 19], ["25 à 59 ans", 32.5], ["60 ans et plus", 4.5]], note: "Source : INSTAT, RGPH-3 (2018), valeurs arrondies" }));
  await render("secteurs_economie.png", stackedSecteurs());
  // Unité 2
  await render("carte_cultures.png", carteCultures(), 900);
  await render("carte_elevage_peche.png", carteElevagePeche(), 900);
  await render("riz_production_importation.png", groupedBars({ title: "Riz : production de paddy et importations", cats: ["2020", "2021", "2022", "2023"], series: [{ name: "Production de paddy", color: "#1E7B34", vals: [4200, 4600, 4400, 5100] }, { name: "Riz importé", color: "#C00000", vals: [480, 630, 745, 424] }], note: "Sources : Ministère de l'Agriculture, INSTAT, Observatoire du Riz (valeurs arrondies)" }));
  // Unités 3 et 4
  await render("energie_madagascar.png", energieMadagascar());
  await render("carte_industries.png", carteIndustries(), 900);
  await render("carte_transports.png", carteTransports(), 900);
  await render("commerce_exterieur.png", commerceExterieur(), 1200);
  await render("tourisme_arrivees.png", tourismeArrivees(), 1200);
  await render("foret_recul.png", barChart({ title: "Recul de la forêt naturelle de Madagascar", cats: ["1953", "1990", "2000", "2014", "2023"], vals: [16, 10.7, 9.9, 8.9, 8], unit: "millions d'hectares", color: "#1E7B34", note: "Sources : Vieilledent et al. (2018) ; Global Forest Watch (valeurs arrondies)" }));
})();
