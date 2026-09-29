// images-svg.js — mamokatra ny sary SVG -> PNG (frizy, diagrama, sari-tany) amin'ny sharp — Tantara T4
const sharp = require("sharp");
const path = require("path");

const IMG = path.join(__dirname, "..", "images");
const GREEN = "#2E7D32", PINK = "#C2185B", OCRE = "#B25000", BLUE = "#1565C0", GREY = "#555555";
const FONT = "DejaVu Sans, Arial, sans-serif";

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function svgDoc(w, h, inner) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <rect width="${w}" height="${h}" fill="white"/>${inner}</svg>`;
}
function txt(x, y, s, size, color = "#222", weight = "normal", anchor = "middle") {
  return `<text x="${x}" y="${y}" font-family="${FONT}" font-size="${size}" fill="${color}" font-weight="${weight}" text-anchor="${anchor}">${esc(s)}</text>`;
}

// ---------- boaty diagrama (tampony -> zana-boaty) ----------
function boxes(file, title, top, cols, opts = {}) {
  const W = 1100, H = opts.h || 430;
  let g = txt(W / 2, 40, title, 25, GREEN, "bold");
  g += `<rect x="${W / 2 - 190}" y="65" width="380" height="55" fill="${GREEN}" rx="10"/>`;
  g += txt(W / 2, 100, top, 21, "white", "bold");
  const n = cols.length, bw = Math.min(320, (W - 80 - (n - 1) * 30) / n), y = 190;
  cols.forEach((c, i) => {
    const x = (W - n * bw - (n - 1) * 30) / 2 + i * (bw + 30);
    g += `<line x1="${W / 2}" y1="120" x2="${x + bw / 2}" y2="${y}" stroke="#999" stroke-width="2"/>`;
    g += `<rect x="${x}" y="${y}" width="${bw}" height="48" fill="${c.color || PINK}" rx="8"/>`;
    g += txt(x + bw / 2, y + 31, c.titre, 16, "white", "bold");
    c.items.forEach((it, j) => {
      g += txt(x + bw / 2, y + 78 + j * 26, it, 14, "#333");
    });
  });
  return { file, svg: svgDoc(W, H, g) };
}

// ---------- tabilao tsanganana ----------
function colTable(file, title, cols, opts = {}) {
  const W = 1100, H = opts.h || 480;
  let g = txt(W / 2, 40, title, 25, GREEN, "bold");
  const n = cols.length, bw = (W - 80 - (n - 1) * 30) / n, y = 80;
  cols.forEach((c, i) => {
    const x = 40 + i * (bw + 30);
    g += `<rect x="${x}" y="${y}" width="${bw}" height="52" fill="${c.color}" rx="8"/>`;
    const tl = c.titre.split("|");
    tl.forEach((l, j) => g += txt(x + bw / 2, y + (tl.length > 1 ? 22 : 33) + j * 22, l, 17, "white", "bold"));
    g += `<rect x="${x}" y="${y + 60}" width="${bw}" height="${H - y - 90}" fill="#F5F5F5" rx="8"/>`;
    c.items.forEach((it, j) => {
      g += txt(x + 14, y + 92 + j * 30, "\u2022 " + it, 15, "#333", "normal", "start");
    });
  });
  return { file, svg: svgDoc(W, H, g) };
}

// ---------- frizy boaty mitovy habe (tsy mila maridrefy) ----------
function stepFrise(file, title, steps, opts = {}) {
  // steps : [{label (misy |), sub (daty ambany), color}] ; dates : eo anelanelan'ny boaty
  const W = 1100, H = opts.h || 330;
  let g = txt(W / 2, 40, title, 24, GREEN, "bold");
  const n = steps.length, gap = 26, bw = (W - 80 - (n - 1) * gap) / n, y = 110, bh = 110;
  g += `<line x1="30" y1="${y + bh + 34}" x2="${W - 45}" y2="${y + bh + 34}" stroke="${GREEN}" stroke-width="5"/>`;
  g += `<polygon points="${W - 45},${y + bh + 26} ${W - 22},${y + bh + 34} ${W - 45},${y + bh + 42}" fill="${GREEN}"/>`;
  steps.forEach((s, i) => {
    const x = 40 + i * (bw + gap);
    g += `<rect x="${x}" y="${y}" width="${bw}" height="${bh}" fill="${s.color}" rx="10"/>`;
    const lines = s.label.split("|");
    lines.forEach((l, j) => {
      const fit = Math.max(11, Math.min(17, Math.floor((bw - 12) / (l.length * 0.60 || 1))));
      g += txt(x + bw / 2, y + bh / 2 - (lines.length - 1) * 11 + j * 22 + 6, l, fit, "white", "bold");
    });
    if (i < n - 1) {
      g += `<polygon points="${x + bw + 2},${y + bh / 2 - 9} ${x + bw + gap - 2},${y + bh / 2} ${x + bw + 2},${y + bh / 2 + 9}" fill="#999"/>`;
    }
    // daty eo am-piandohan'ny boaty
    if (s.from !== undefined) {
      g += `<line x1="${x}" y1="${y + bh + 26}" x2="${x}" y2="${y + bh + 42}" stroke="#333" stroke-width="2"/>`;
      g += txt(x, y + bh + 64, s.from, 15, "#333", "bold");
    }
    if (s.sub) g += txt(x + bw / 2, y + bh + 88, s.sub, 13, GREY);
  });
  const last = steps[n - 1];
  if (last.to !== undefined) {
    const x = 40 + (n - 1) * (bw + gap) + bw;
    g += `<line x1="${x}" y1="${y + bh + 26}" x2="${x}" y2="${y + bh + 42}" stroke="#333" stroke-width="2"/>`;
    g += txt(x, y + bh + 64, last.to, 15, "#333", "bold");
  }
  if (opts.note) g += txt(W / 2, H - 12, opts.note, 14, GREY);
  return { file, svg: svgDoc(W, H, g) };
}

// ---------- Madagasikara (polygone stylisé, azo averimberina) ----------
function pathMG(offX = 0, offY = 0, scale = 1) {
  const p = [
    ["M", 390, 120], ["Q", 450, 80, 480, 130], ["Q", 520, 200, 510, 300], ["Q", 505, 420, 470, 550],
    ["Q", 440, 680, 380, 790], ["Q", 330, 840, 300, 770], ["Q", 260, 650, 270, 480],
    ["Q", 280, 300, 330, 190], ["Q", 355, 140, 390, 120], ["Z"],
  ];
  return p.map(seg => seg[0] + seg.slice(1).map((v, i) => (i % 2 === 0 ? v * scale + offX : v * scale + offY)).join(" ")).join(" ");
}

const jobs = [];

// =============== IMG2 (ao anaty lesona) ===============

// S3 — kodiarana : ireo andro fito amin'ny herinandro
(() => {
  const W = 1100, H = 600, cx = 550, cy = 330, R = 215;
  let g = txt(W / 2, 42, "Ny kodiaran'ny herinandro : andro fito mifandimby", 25, GREEN, "bold");
  const jours = ["ALATSINAINY", "TALATA", "ALAROBIA", "ALAKAMISY", "ZOMA", "SABOTSY", "ALAHADY"];
  const colors = [GREEN, PINK, BLUE, OCRE, GREEN, PINK, BLUE];
  for (let i = 0; i < 7; i++) {
    const a0 = (i / 7) * 2 * Math.PI - Math.PI / 2, a1 = ((i + 1) / 7) * 2 * Math.PI - Math.PI / 2;
    const x0 = cx + R * Math.cos(a0), y0 = cy + R * Math.sin(a0);
    const x1 = cx + R * Math.cos(a1), y1 = cy + R * Math.sin(a1);
    g += `<path d="M ${cx} ${cy} L ${x0.toFixed(1)} ${y0.toFixed(1)} A ${R} ${R} 0 0 1 ${x1.toFixed(1)} ${y1.toFixed(1)} Z" fill="${colors[i]}" stroke="white" stroke-width="4"/>`;
    const am = (a0 + a1) / 2, tx = cx + R * 0.66 * Math.cos(am), ty = cy + R * 0.66 * Math.sin(am);
    g += `<g transform="rotate(${(am * 180 / Math.PI + (Math.cos(am) < 0 ? 180 : 0)).toFixed(1)} ${tx.toFixed(1)} ${ty.toFixed(1)})">` +
      txt(tx.toFixed(1), (ty + 5).toFixed(1), jours[i], 15, "white", "bold") + `</g>`;
    g += txt(cx + (R + 26) * Math.cos(am), cy + (R + 26) * Math.sin(am) + 5, String(i + 1), 18, colors[i], "bold");
  }
  g += `<circle cx="${cx}" cy="${cy}" r="62" fill="white" stroke="#999" stroke-width="2"/>`;
  g += txt(cx, cy - 4, "HERINANDRO", 14, GREEN, "bold");
  g += txt(cx, cy + 18, "= 7 andro", 14, "#333");
  return jobs.push({ file: "img2_s03.png", svg: svgDoc(W, H, g) });
})();

// S4 — ireo volana 12 amin'ny taona
(() => {
  const W = 1100, H = 480;
  let g = txt(W / 2, 40, "Ny volana 12 amin'ny taona iray", 25, GREEN, "bold");
  const volana = [
    ["JANOARY", "31"], ["FEBROARY", "28 na 29"], ["MARTSA", "31"], ["APRILY", "30"],
    ["MEY", "31"], ["JONA", "30"], ["JOLAY", "31"], ["AOGOSITRA", "31"],
    ["SEPTAMBRA", "30"], ["OKTOBRA", "31"], ["NOVAMBRA", "30"], ["DESAMBRA", "31"],
  ];
  const cols = 4, bw = 235, bh = 78, gapx = 22, gapy = 18, x0 = (W - cols * bw - (cols - 1) * gapx) / 2, y0 = 70;
  volana.forEach(([nom, andro], i) => {
    const x = x0 + (i % cols) * (bw + gapx), y = y0 + Math.floor(i / cols) * (bh + gapy);
    const c = [GREEN, PINK, BLUE, OCRE][Math.floor(i / cols) % 4];
    g += `<rect x="${x}" y="${y}" width="${bw}" height="${bh}" fill="${c}" rx="10"/>`;
    g += `<circle cx="${x + 26}" cy="${y + 26}" r="15" fill="white"/>`;
    g += txt(x + 26, y + 32, String(i + 1), 15, c, "bold");
    g += txt(x + bw / 2 + 12, y + 33, nom, 17, "white", "bold");
    g += txt(x + bw / 2, y + 60, andro + " andro", 14, "white");
  });
  g += `<rect x="180" y="${y0 + 3 * (bh + gapy) + 6}" width="740" height="46" fill="#FFF3E0" rx="8"/>`;
  g += txt(W / 2, y0 + 3 * (bh + gapy) + 35, "1 taona = 12 volana = 365 andro (366 amin'ny taona mihoatra : misy 29 febroary)", 16, OCRE, "bold");
  return jobs.push({ file: "img2_s04.png", svg: svgDoc(W, H, g) });
})();

// S6 — tabilao tarehimarika romana
(() => {
  const W = 1100, H = 500;
  let g = txt(W / 2, 40, "Ny tarehimarika romana", 25, GREEN, "bold");
  // andalana 1 : 1-10
  const r1 = [["1", "I"], ["2", "II"], ["3", "III"], ["4", "IV"], ["5", "V"], ["6", "VI"], ["7", "VII"], ["8", "VIII"], ["9", "IX"], ["10", "X"]];
  const bw = 96, gap = 8, x0 = (W - 10 * bw - 9 * gap) / 2;
  r1.forEach(([a, r], i) => {
    const x = x0 + i * (bw + gap);
    g += `<rect x="${x}" y="70" width="${bw}" height="42" fill="${GREEN}" rx="6"/>`;
    g += txt(x + bw / 2, 98, a, 18, "white", "bold");
    g += `<rect x="${x}" y="116" width="${bw}" height="46" fill="#F5F5F5" rx="6"/>`;
    g += txt(x + bw / 2, 147, r, 20, PINK, "bold");
  });
  // andalana 2 : marika lehibe
  const r2 = [["20", "XX"], ["40", "XL"], ["50", "L"], ["90", "XC"], ["100", "C"], ["500", "D"], ["1000", "M"]];
  const bw2 = 128, x02 = (W - 7 * bw2 - 6 * gap) / 2;
  r2.forEach(([a, r], i) => {
    const x = x02 + i * (bw2 + gap);
    g += `<rect x="${x}" y="192" width="${bw2}" height="42" fill="${BLUE}" rx="6"/>`;
    g += txt(x + bw2 / 2, 220, a, 18, "white", "bold");
    g += `<rect x="${x}" y="238" width="${bw2}" height="46" fill="#F5F5F5" rx="6"/>`;
    g += txt(x + bw2 / 2, 269, r, 20, PINK, "bold");
  });
  // fitsipika
  g += `<rect x="70" y="315" width="960" height="60" fill="#E8F0E4" rx="10"/>`;
  g += txt(W / 2, 340, "Fitsipika : ampiana ny marika kely aorian'ny lehibe (VI = 5 + 1 = 6) ;", 16, "#333");
  g += txt(W / 2, 364, "analana kosa ny marika kely alohan'ny lehibe (IV = 5 - 1 = 4 ; IX = 10 - 1 = 9)", 16, "#333");
  g += `<rect x="70" y="392" width="960" height="60" fill="#FFF3E0" rx="10"/>`;
  g += txt(W / 2, 417, "Ny taonjato dia soratana amin'ny tarehimarika romana :", 16, OCRE, "bold");
  g += txt(W / 2, 441, "taona 1901 - 2000 = taonjato faha-XX ; taona 2001 - 2100 = taonjato faha-XXI", 16, OCRE, "bold");
  return jobs.push({ file: "img2_s06.png", svg: svgDoc(W, H, g) });
})();

// S10 — tabilao : ireo loharano fanovozan-kevitra
jobs.push(colTable("img2_s10.png", "Ireo karazana loharano fanovozan-kevitra ara-tantara", [
  { titre: "AN-TSORATRA", color: BLUE, items: ["Boky, gazety", "Taratasy tranainy", "Soratra amin'ny vato", "Tahirim-boky (archives)"] },
  { titre: "AM-BAVA", color: PINK, items: ["Lovantsofina", "Angano, ohabolana", "Tantara nolazain'ny", "  ray aman-dreny sy dadabe"] },
  { titre: "MOANA (tsy miteny)", color: OCRE, items: ["Vilany tany, fitaovana", "Lefona, vola tranainy", "Tsangambato, fasana", "Trano rava, taolana"] },
], { h: 300 }));

// S13 — frizy : ireo vanim-potoana dimy
jobs.push(stepFrise("img2_s13.png", "Ireo vanim-potoana lehibe nifandimby teo amin'ny tantaran'i Madagasikara",
  [
    { label: "TALOHAN'NY|FAHAFOKO", color: GREY, sub: "mbola tsy nisy foko" },
    { label: "FAHAFOKO", color: BLUE, from: "taonjato V", sub: "niforona ny foko" },
    { label: "FAHA-|MPANJAKA", color: GREEN, from: "1500 teo ho eo", sub: "nisy ny fanjakana" },
    { label: "FANJANAHAN-|TANY", color: PINK, from: "1896", sub: "frantsay (64 taona)" },
    { label: "FAHALEOVAN-|TENA", color: OCRE, from: "26 jona 1960", to: "androany", sub: "firenena mahaleo tena" },
  ],
  { h: 350, note: "Fanamarihana : tombantombana ireo daty tranainy ; tsy mitovy hevitra amin'izy ireo ny mpahay tantara." }));

// S15 — sari-tany : ny lalana nodiavin'ny razambe
(() => {
  const W = 1100, H = 640;
  let g = `<rect width="${W}" height="${H}" fill="#DDEEFA"/>`;
  g += txt(W / 2, 42, "Avy aiza ny razamben'ny Malagasy ? (sary famintinana)", 25, GREEN, "bold");
  // Afrika atsinanana (ilany havia)
  g += `<path d="M 0 70 L 185 85 Q 250 210 205 350 Q 180 470 250 640 L 0 640 Z" fill="#D7C29E" stroke="#A98F5F" stroke-width="2"/>`;
  g += txt(100, 330, "AFRIKA", 24, "#7A6234", "bold");
  g += txt(100, 358, "atsinanana", 16, "#7A6234");
  // Arabia (avaratra havia)
  g += `<path d="M 230 70 L 470 70 Q 460 130 380 165 Q 300 185 265 130 Z" fill="#E4CB9E" stroke="#A98F5F" stroke-width="2"/>`;
  g += txt(355, 125, "ARABIA", 20, "#7A6234", "bold");
  // Azia atsimo atsinanana (ilany havanana)
  g += `<path d="M 1100 70 L 880 80 Q 830 160 880 240 Q 940 300 1010 290 L 1100 320 Z" fill="#D7C29E" stroke="#A98F5F" stroke-width="2"/>`;
  g += `<ellipse cx="960" cy="360" rx="70" ry="22" fill="#D7C29E" stroke="#A98F5F" stroke-width="2" transform="rotate(18 960 360)"/>`;
  g += txt(975, 160, "AZIA", 22, "#7A6234", "bold");
  g += txt(975, 188, "atsimo atsinanana", 15, "#7A6234");
  g += txt(1000, 372, "Indonezia", 14, "#7A6234", "bold");
  // Madagasikara (afovoany, kely)
  g += `<path d="${pathMG(320, 185, 0.52)}" fill="${GREEN}" stroke="#1B5E20" stroke-width="3"/>`;
  g += txt(523, 430, "MADAGASIKARA", 13, "white", "bold");
  // zana-tsipika : Azia -> MG (lava indrindra)
  g += `<path d="M 900 370 Q 740 520 585 450" fill="none" stroke="${PINK}" stroke-width="6" stroke-dasharray="14 8"/>`;
  g += `<polygon points="600,458 578,438 570,466" fill="${PINK}"/>`;
  g += txt(750, 520, "lalana an-dranomasina lavitra indrindra", 15, PINK, "bold");
  // Afrika -> MG
  g += `<path d="M 240 380 Q 340 400 435 420" fill="none" stroke="${BLUE}" stroke-width="6" stroke-dasharray="14 8"/>`;
  g += `<polygon points="440,428 448,408 418,410" fill="${BLUE}"/>`;
  g += txt(330, 440, "akaiky indrindra", 15, BLUE, "bold");
  // Arabia -> MG
  g += `<path d="M 370 190 Q 430 280 470 330" fill="none" stroke="${OCRE}" stroke-width="6" stroke-dasharray="14 8"/>`;
  g += `<polygon points="476,340 480,316 454,326" fill="${OCRE}"/>`;
  g += txt(405, 265, "mpivarotra arabo", 15, OCRE, "bold", "start");
  g += txt(W / 2, H - 20, "Sary tsotra tsy misy maridrefy — natao hianarana ny toerana niavian'ny razambe", 14, GREY);
  return jobs.push({ file: "img2_s15.png", svg: svgDoc(W, H, g) });
})();

// S17 — sari-tany : ireo morontsiraka niantsonana
(() => {
  const W = 900, H = 800;
  let g = `<rect width="${W}" height="${H}" fill="#DDEEFA"/>`;
  g += txt(W / 2, 40, "Niantsona tamin'ny morontsiraka efatra ny mpiavy", 23, GREEN, "bold");
  g += `<path d="${pathMG(65, 20, 0.85)}" fill="${GREEN}" stroke="#1B5E20" stroke-width="4"/>`;
  g += txt(400, 420, "MADAGASIKARA", 20, "white", "bold");
  const fleches = [
    { x1: 430, y1: 85, x2: 425, y2: 160, label: "AVARATRA", lx: 435, ly: 70, c: PINK },
    { x1: 620, y1: 330, x2: 495, y2: 340, label: "ATSINANANA", lx: 700, ly: 335, c: BLUE },
    { x1: 175, y1: 430, x2: 295, y2: 440, label: "ANDREFANA", lx: 105, ly: 435, c: OCRE },
    { x1: 340, y1: 760, x2: 355, y2: 690, label: "ATSIMO", lx: 340, ly: 785, c: "#7B1FA2" },
  ];
  for (const f of fleches) {
    g += `<line x1="${f.x1}" y1="${f.y1}" x2="${f.x2}" y2="${f.y2}" stroke="${f.c}" stroke-width="7" stroke-dasharray="12 7"/>`;
    const ang = Math.atan2(f.y2 - f.y1, f.x2 - f.x1);
    const ax = f.x2 + 14 * Math.cos(ang), ay = f.y2 + 14 * Math.sin(ang);
    g += `<polygon points="${ax},${ay} ${ax - 20 * Math.cos(ang - 0.45)},${ay - 20 * Math.sin(ang - 0.45)} ${ax - 20 * Math.cos(ang + 0.45)},${ay - 20 * Math.sin(ang + 0.45)}" fill="${f.c}"/>`;
    g += txt(f.lx, f.ly, f.label, 17, f.c, "bold");
  }
  g += txt(W / 2, H - 15, "Avy eny amoron-tsiraka izy ireo dia niditra tsikelikely tany afovoan-tany", 15, GREY);
  return jobs.push({ file: "img2_s17.png", svg: svgDoc(W, H, g) });
})();

// S18 — frizy : ireo andiany efatra
jobs.push(stepFrise("img2_s18.png", "Ireo andiany efatra nifandimby tonga teto Madagasikara",
  [
    { label: "OSTRONESIANINA|voalohany", color: GREEN, from: "taonjato III-IV", sub: "avy any Azia" },
    { label: "INDONEZIANINA|SY MALEZIANA", color: BLUE, from: "talohan'ny taonjato VII", sub: "avy any Azia" },
    { label: "AFRIKANINA", color: OCRE, from: "taonjato VII-VIII", sub: "avy any Afrika atsinanana" },
    { label: "ARABO", color: PINK, from: "taonjato IX...", to: "", sub: "sorabe, fanandroana, varotra" },
  ],
  { h: 350, note: "Fanamarihana : tombantombana ireo daty ; tsy mitovy hevitra amin'izy ireo ny mpahay tantara." }));

// S19 — tabilao : ny anaran'ny andro avy amin'ny teny arabo
(() => {
  const W = 1100, H = 520;
  let g = txt(W / 2, 40, "Ny anaran'ny andro malagasy dia avy amin'ny teny arabo", 24, GREEN, "bold");
  const rows = [
    ["al-ahad", "alahady"], ["al-itnayna", "alatsinainy"], ["at-talata", "talata"],
    ["al-arba'a", "alarobia"], ["al-khamis", "alakamisy"], ["al-jom'a", "zoma"], ["as-sabt", "sabotsy"],
  ];
  const y0 = 78, rh = 50, c1x = 200, c2x = 700, cw = 380;
  g += `<rect x="${c1x - cw / 2}" y="${y0 - 34}" width="${cw}" height="40" fill="${BLUE}" rx="8"/>`;
  g += txt(c1x, y0 - 7, "TENY ARABO", 17, "white", "bold");
  g += `<rect x="${c2x - cw / 2}" y="${y0 - 34}" width="${cw}" height="40" fill="${GREEN}" rx="8"/>`;
  g += txt(c2x, y0 - 7, "ANDRO MALAGASY", 17, "white", "bold");
  rows.forEach(([ar, mg], i) => {
    const y = y0 + 14 + i * rh;
    g += `<rect x="${c1x - cw / 2}" y="${y}" width="${cw}" height="${rh - 8}" fill="${i % 2 ? "#EAF1FB" : "#F5F5F5"}" rx="6"/>`;
    g += txt(c1x, y + 28, ar, 18, "#333");
    g += `<rect x="${c2x - cw / 2}" y="${y}" width="${cw}" height="${rh - 8}" fill="${i % 2 ? "#E8F0E4" : "#F5F5F5"}" rx="6"/>`;
    g += txt(c2x, y + 28, mg, 18, PINK, "bold");
    g += `<polygon points="${c1x + cw / 2 + 30},${y + 15} ${c2x - cw / 2 - 30},${y + 21} ${c1x + cw / 2 + 30},${y + 27}" fill="#999"/>`;
  });
  g += txt(W / 2, H - 15, "Porofo fa nifanerasera tamin'ny Arabo ny razamben'ny Malagasy", 15, GREY);
  return jobs.push({ file: "img2_s19.png", svg: svgDoc(W, H, g) });
})();

// S21 — diagrama : andiany maro -> vahoaka iray
(() => {
  const W = 1100, H = 420;
  let g = txt(W / 2, 40, "Andiany maro no tonga... vahoaka iray no niforona", 25, GREEN, "bold");
  const srcs = [["OSTRONESIANINA", GREEN], ["INDONEZIANINA|SY MALEZIANA", BLUE], ["AFRIKANINA", OCRE], ["ARABO", PINK]];
  const bw = 235, gap = 30, x0 = (W - 4 * bw - 3 * gap) / 2, y = 80;
  srcs.forEach(([label, c], i) => {
    const x = x0 + i * (bw + gap);
    g += `<rect x="${x}" y="${y}" width="${bw}" height="70" fill="${c}" rx="10"/>`;
    const lines = label.split("|");
    lines.forEach((l, j) => g += txt(x + bw / 2, y + (lines.length > 1 ? 30 : 43) + j * 24, l, 16, "white", "bold"));
    g += `<line x1="${x + bw / 2}" y1="${y + 70}" x2="${W / 2}" y2="260" stroke="#999" stroke-width="3"/>`;
  });
  g += `<polygon points="${W / 2},275 ${W / 2 - 14},250 ${W / 2 + 14},250" fill="#999"/>`;
  g += `<rect x="${W / 2 - 260}" y="285" width="520" height="76" fill="${GREEN}" rx="12"/>`;
  g += txt(W / 2, 317, "NY VAHOAKA MALAGASY", 24, "white", "bold");
  g += txt(W / 2, 345, "iray fiteny, iray tanindrazana", 16, "white");
  g += txt(W / 2, 395, "Niharo sy nifanambady ireo andiany rehetra ka firenena iray no niforona", 15, GREY);
  return jobs.push({ file: "img2_s21.png", svg: svgDoc(W, H, g) });
})();

// S25 — diagrama : ireo tombontsoa avy amin'ny fizahantany
jobs.push(boxes("img2_s25.png", "Ireo tombontsoa azo amin'ny fikolokoloana ny vakoka", "FIZAHANTANY MIROBOROBO", [
  { titre: "VOLA MIDITRA", color: PINK, items: ["Vola vahiny ho an'ny", "firenena sy ny mponina"] },
  { titre: "ASA", color: BLUE, items: ["Mpitari-dalana,", "mpandray vahiny,", "mpanao asa tanana"] },
  { titre: "FAMPANDROSOANA", color: OCRE, items: ["Lalana, trano", "fandraisam-bahiny", "ho an'ny faritra"] },
  { titre: "LAZA", color: GREEN, items: ["Fantatr'izao tontolo", "izao i Madagasikara"] },
], { h: 400 }));

// =============== IMG3 (aorian'ny tahirin-kevitra) ===============

// S13 — tabilao famintinana ny vanim-potoana
jobs.push(colTable("img3_s13.png", "Tabilao famintinana : ireo vanim-potoana dimy", [
  { titre: "VANIM-POTOANA", color: GREEN, items: ["Talohan'ny fahafoko", "Fahafoko", "Faha-mpanjaka", "Fanjanahantany", "Fahaleovantena"] },
  { titre: "FOTOANA", color: BLUE, items: ["talohan'ny taonjato V", "taonjato V - XV", "1500 - 1896", "1896 - 1960", "1960 - androany"] },
  { titre: "ZAVA-NITRANGA", color: PINK, items: ["tonga ny mpiavy voalohany", "niforona ireo foko", "nisy ireo fanjakana", "nozanahin'i Frantsa", "firenena mahaleo tena"] },
], { h: 320 }));

// S15 — tabilao : izay nentin'ny avy any amin'ireo faritra telo
jobs.push(colTable("img3_s15.png", "Ireo faritra telo niavian'ny razambe sy ny nentiny", [
  { titre: "AZIA|ATSIMO ATSINANANA", color: GREEN, items: ["Indonezia, Malezia", "Lavitra indrindra", "Vary, lakam-piara", "Fototry ny fiteny malagasy"] },
  { titre: "AFRIKA|ATSINANANA", color: OCRE, items: ["Akaiky indrindra", "Omby, fiompiana", "Teny sasany", "  (omby, akoho...)"] },
  { titre: "ARABIA", color: PINK, items: ["Mpivarotra an-dranomasina", "Sorabe (soratra)", "Fanandroana", "Anaran'ny andro"] },
], { h: 320 }));

// S21 — tabilao : ny endriky ny mponina
(() => {
  const W = 1100, H = 330;
  let g = txt(W / 2, 40, "Ny toe-batan'ny mponina : samy hafa ny endrika, iray ny vahoaka", 23, GREEN, "bold");
  const cols = [
    { titre: "ENDRIKA INDONEZIANINA", color: BLUE, items: ["Hoditra somary mavo, volo tsotra", "Betsaka any afovoan-tany", "(ohatra : Merina, Betsileo)"] },
    { titre: "ENDRIKA AFRIKANINA", color: OCRE, items: ["Hoditra somary mainty, volo olioly", "Betsaka any amoron-tsiraka", "(faritra maro samihafa)"] },
  ];
  const bw = 460, gap = 40, x0 = (W - 2 * bw - gap) / 2, y = 70;
  cols.forEach((c, i) => {
    const x = x0 + i * (bw + gap);
    g += `<rect x="${x}" y="${y}" width="${bw}" height="46" fill="${c.color}" rx="8"/>`;
    g += txt(x + bw / 2, y + 30, c.titre, 17, "white", "bold");
    g += `<rect x="${x}" y="${y + 54}" width="${bw}" height="120" fill="#F5F5F5" rx="8"/>`;
    c.items.forEach((it, j) => g += txt(x + bw / 2, y + 86 + j * 30, it, 15, "#333"));
  });
  g += `<rect x="${W / 2 - 380}" y="${y + 190}" width="760" height="46" fill="#E8F0E4" rx="10"/>`;
  g += txt(W / 2, y + 219, "Nefa niharo izy rehetra : VAHOAKA MALAGASY IRAY isika mianakavy !", 17, GREEN, "bold");
  return jobs.push({ file: "img3_s21.png", svg: svgDoc(W, H, g) });
})();

// S26 — diagrama : ny fiarovana ny vakoka
jobs.push(boxes("img3_s26.png", "Ny fiarovana ny vakoka sy ny harem-pirenena", "FIAROVANA NY VAKOKA", [
  { titre: "FEPETRA", color: BLUE, items: ["Tranom-bakoka", "Arovana amin'ny hamandoana,", "ny vovoka, ny afo,", "ny mpangalatra"] },
  { titre: "LALANA SY DINA", color: OCRE, items: ["Didim-panjakana 91-017", "Didim-panjakana 56-1106", "Dinam-piaraha-monina"] },
  { titre: "ANDRAIKITRY NY TSIRAIRAY", color: PINK, items: ["Tsy mandoro tanety", "Tsy manimba, tsy mandoto", "Mandray anjara amin'ny", "fanadiovana"] },
], { h: 430 }));

// =============== SARY FANAZARAN-TENA (exo) ===============

// S6 — tabilao romana hofenoina
(() => {
  const W = 1100, H = 330;
  let g = txt(W / 2, 40, "Fenoy ny tabilao : tarehimarika romana sa arabo ?", 24, GREEN, "bold");
  const cells = [["3", "?"], ["?", "IV"], ["9", "?"], ["?", "XII"], ["14", "?"], ["?", "XVI"], ["20", "?"], ["?", "XIX"]];
  const bw = 118, gap = 12, x0 = (W - 8 * bw - 7 * gap) / 2;
  cells.forEach(([a, r], i) => {
    const x = x0 + i * (bw + gap);
    g += `<rect x="${x}" y="80" width="${bw}" height="52" fill="${GREEN}" rx="6"/>`;
    g += txt(x + bw / 2, 114, a, 22, "white", "bold");
    g += `<rect x="${x}" y="140" width="${bw}" height="56" fill="${a === "?" ? "#F5F5F5" : "#FDEEF4"}" rx="6" stroke="${PINK}" stroke-width="${r === "?" ? 3 : 0}" stroke-dasharray="8 5"/>`;
    g += txt(x + bw / 2, 177, r, 24, r === "?" ? GREY : PINK, "bold");
  });
  g += txt(x0, 240, "Andalana ambony : tarehimarika arabo — andalana ambany : tarehimarika romana", 15, GREY, "normal", "start");
  g += txt(x0, 268, "Soloy isa marina ny « ? » tsirairay ao amin'ny kahienao.", 16, "#333", "bold", "start");
  return jobs.push({ file: "img_exo_romana.png", svg: svgDoc(W, H, g) });
})();

// S13 — frizy moana hofenoina
(() => {
  const W = 1100, H = 300;
  let g = txt(W / 2, 40, "Frizy hofenoina : ireo vanim-potoana dimy", 24, GREEN, "bold");
  const lettres = ["A", "B", "D", "E", "F"];
  const dates = ["", "taonjato V", "1500", "1896", "1960"];
  const n = 5, gap = 24, bw = (W - 80 - (n - 1) * gap) / n, y = 90, bh = 90;
  g += `<line x1="30" y1="${y + bh + 30}" x2="${W - 45}" y2="${y + bh + 30}" stroke="${GREEN}" stroke-width="5"/>`;
  g += `<polygon points="${W - 45},${y + bh + 22} ${W - 22},${y + bh + 30} ${W - 45},${y + bh + 38}" fill="${GREEN}"/>`;
  for (let i = 0; i < n; i++) {
    const x = 40 + i * (bw + gap);
    g += `<rect x="${x}" y="${y}" width="${bw}" height="${bh}" fill="#F5F5F5" stroke="${PINK}" stroke-width="3" stroke-dasharray="10 6" rx="10"/>`;
    g += txt(x + bw / 2, y + bh / 2 + 12, lettres[i], 36, PINK, "bold");
    if (dates[i]) {
      g += `<line x1="${x}" y1="${y + bh + 22}" x2="${x}" y2="${y + bh + 38}" stroke="#333" stroke-width="2"/>`;
      g += txt(x, y + bh + 60, dates[i], 15, "#333", "bold");
    }
  }
  g += txt(W / 2, H - 15, "Soraty ao amin'ny kahienao ny anaran'ny vanim-potoana mifanandrify amin'ny litera A - F", 16, "#333", "bold");
  return jobs.push({ file: "img_exo_frise.png", svg: svgDoc(W, H, g) });
})();

// S17 — sari-tany moana : ireo morontsiraka
(() => {
  const W = 900, H = 780;
  let g = `<rect width="${W}" height="${H}" fill="#DDEEFA"/>`;
  g += txt(W / 2, 40, "Sari-tany hofenoina : taiza no niantsona ny mpiavy ?", 22, GREEN, "bold");
  g += `<path d="${pathMG(65, 10, 0.85)}" fill="${GREEN}" stroke="#1B5E20" stroke-width="4"/>`;
  const fleches = [
    { x1: 430, y1: 75, x2: 425, y2: 150, l: "A", lx: 455, ly: 68 },
    { x1: 620, y1: 320, x2: 495, y2: 330, l: "B", lx: 655, ly: 325 },
    { x1: 175, y1: 420, x2: 295, y2: 430, l: "D", lx: 140, ly: 425 },
    { x1: 340, y1: 740, x2: 355, y2: 675, l: "E", lx: 330, ly: 768 },
  ];
  for (const f of fleches) {
    g += `<line x1="${f.x1}" y1="${f.y1}" x2="${f.x2}" y2="${f.y2}" stroke="${PINK}" stroke-width="7" stroke-dasharray="12 7"/>`;
    const ang = Math.atan2(f.y2 - f.y1, f.x2 - f.x1);
    const ax = f.x2 + 14 * Math.cos(ang), ay = f.y2 + 14 * Math.sin(ang);
    g += `<polygon points="${ax},${ay} ${ax - 20 * Math.cos(ang - 0.45)},${ay - 20 * Math.sin(ang - 0.45)} ${ax - 20 * Math.cos(ang + 0.45)},${ay - 20 * Math.sin(ang + 0.45)}" fill="${PINK}"/>`;
    g += `<circle cx="${f.lx}" cy="${f.ly - 6}" r="17" fill="white" stroke="${PINK}" stroke-width="3"/>`;
    g += txt(f.lx, f.ly, f.l, 20, "#8E0E3F", "bold");
  }
  g += txt(W / 2, H - 18, "Soraty ny anaran'ny morontsiraka mifanandrify amin'ny litera A, B, D, E", 16, "#333", "bold");
  return jobs.push({ file: "img_exo_carteMG.png", svg: svgDoc(W, H, g) });
})();

// S19 — tabilao hofenoina : ny anaran'ny andro
(() => {
  const W = 1100, H = 480;
  let g = txt(W / 2, 40, "Fenoy : inona ny andro malagasy mifanandrify ?", 24, GREEN, "bold");
  const rows = [["al-ahad", "A"], ["at-talata", "B"], ["al-khamis", "D"], ["al-jom'a", "E"], ["as-sabt", "F"]];
  const y0 = 92, rh = 60, c1x = 300, c2x = 720, cw = 340;
  g += `<rect x="${c1x - cw / 2}" y="${y0 - 40}" width="${cw}" height="42" fill="${BLUE}" rx="8"/>`;
  g += txt(c1x, y0 - 12, "TENY ARABO", 17, "white", "bold");
  g += `<rect x="${c2x - cw / 2}" y="${y0 - 40}" width="${cw}" height="42" fill="${GREEN}" rx="8"/>`;
  g += txt(c2x, y0 - 12, "ANDRO MALAGASY", 17, "white", "bold");
  rows.forEach(([ar, l], i) => {
    const y = y0 + 12 + i * rh;
    g += `<rect x="${c1x - cw / 2}" y="${y}" width="${cw}" height="${rh - 10}" fill="${i % 2 ? "#EAF1FB" : "#F5F5F5"}" rx="6"/>`;
    g += txt(c1x, y + 32, ar, 19, "#333");
    g += `<rect x="${c2x - cw / 2}" y="${y}" width="${cw}" height="${rh - 10}" fill="#F5F5F5" stroke="${PINK}" stroke-width="3" stroke-dasharray="8 5" rx="6"/>`;
    g += txt(c2x, y + 34, l, 24, PINK, "bold");
    g += `<polygon points="${c1x + cw / 2 + 26},${y + 17} ${c2x - cw / 2 - 26},${y + 25} ${c1x + cw / 2 + 26},${y + 33}" fill="#999"/>`;
  });
  g += txt(W / 2, H - 18, "Soraty ao amin'ny kahienao ny andro malagasy mifanandrify amin'ny litera A - F", 16, "#333", "bold");
  return jobs.push({ file: "img_exo_andro.png", svg: svgDoc(W, H, g) });
})();

// S24 — sari-tany : aiza ho aiza ireo harem-pirenena ?
(() => {
  const W = 800, H = 880;
  let g = `<rect width="${W}" height="${H}" fill="#DDEEFA"/>`;
  g += txt(W / 2, 40, "Sari-tany hofenoina : aiza ho aiza", 22, GREEN, "bold");
  g += txt(W / 2, 68, "ireo harem-pirenena malaza ?", 22, GREEN, "bold");
  g += `<path d="${pathMG(0, 90, 0.9)}" fill="${GREEN}" stroke="#1B5E20" stroke-width="4"/>`;
  const spots = [
    [270, 390, "1"], // tsingy (andrefana avaratra)
    [300, 700, "2"], // baobab (atsimo andrefana)
    [400, 480, "3"], // rova (afovoan-tany)
    [440, 560, "4"], // ala Ranomafana (atsinanana atsimo)
  ];
  for (const [x, y, num] of spots) {
    g += `<circle cx="${x}" cy="${y}" r="18" fill="white" stroke="${PINK}" stroke-width="4"/>`;
    g += txt(x, y + 7, num, 20, "#8E0E3F", "bold");
  }
  g += txt(W / 2, H - 80, "Ampifanandrifio ny isa 1 - 4 sy ireto anarana ireto :", 16, "#333", "bold");
  g += txt(W / 2, H - 52, "ny rovan'Ambohimanga - ny tsingin'i Bemaraha", 15, GREY);
  g += txt(W / 2, H - 28, "ny lalan'ny baobab (Morondava) - ny alan'i Ranomafana", 15, GREY);
  return jobs.push({ file: "img_exo_harena.png", svg: svgDoc(W, H, g) });
})();

// =============== FAMOKARANA ===============
(async () => {
  for (const j of jobs) {
    const out = path.join(IMG, j.file);
    await sharp(Buffer.from(j.svg)).png().toFile(out);
    console.log("OK", j.file);
  }
})();
