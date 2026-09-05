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

async function render(name, svg, width = 1100) {
  await sharp(Buffer.from(svg)).resize({ width }).png().toFile(path.join(OUT, name));
  console.log("✓", name);
}

(async () => {
  await render("carte_regions_naturelles.png", carteRegions(), 900);
  await render("population_evolution.png", barChart({ title: "Population de Madagascar aux recensements", cats: ["1975 (RGPH-1)", "1993 (RGPH-2)", "2018 (RGPH-3)", "2024 (estimation)"], vals: [7.6, 12.2, 25.7, 30], unit: "millions d'habitants", note: "Sources : INSTAT (RGPH 1975, 1993, 2018) ; estimation 2024 : Nations Unies" }));
  await render("structure_age.png", hBars({ title: "Structure par âge de la population (2018)", rows: [["Moins de 15 ans", 44], ["15 à 24 ans", 19], ["25 à 59 ans", 32.5], ["60 ans et plus", 4.5]], note: "Source : INSTAT, RGPH-3 (2018), valeurs arrondies" }));
  await render("secteurs_economie.png", stackedSecteurs());
})();
