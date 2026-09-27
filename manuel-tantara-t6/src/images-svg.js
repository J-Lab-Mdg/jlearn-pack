// images-svg.js — mamokatra ny sary SVG -> PNG (frizy, diagrama) amin'ny sharp
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

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

// ---------- frizy misy sombin-taona (bandes) ----------
function bandFrise(file, title, y0, y1, bands, opts = {}) {
  const W = 1100, H = opts.h || 360, mL = 60, mR = 40;
  const X = (yr) => mL + (yr - y0) / (y1 - y0) * (W - mL - mR);
  const bandY = 150, bandH = 70;
  let g = txt(W / 2, 40, title, 26, GREEN, "bold");
  bands.forEach((b, i) => {
    const x1 = X(b.from), x2 = X(b.to);
    g += `<rect x="${x1}" y="${bandY}" width="${x2 - x1}" height="${bandH}" fill="${b.color}" rx="6"/>`;
    const lines = b.label.split("|");
    lines.forEach((l, j) => {
      const fit = Math.max(10, Math.min(17, Math.floor((x2 - x1 - 10) / (l.length * 0.62 || 1))));
      g += txt((x1 + x2) / 2, bandY + 28 + j * 22, l, fit, "white", "bold");
    });
    // daty ambany/ambony mifandimby
    const ty = i % 2 === 0 ? bandY + bandH + 30 : bandY - 16;
    g += txt(x1, ty, String(b.from), 16, GREY, "bold");
    if (b.sub) g += txt((x1 + x2) / 2, bandY + bandH + 58 + (i % 2) * 22, b.sub, 14, GREY);
  });
  g += txt(X(y1), bandY + bandH + 30, opts.endLabel || String(y1), 16, GREY, "bold");
  g += `<line x1="${mL}" y1="${bandY + bandH + 6}" x2="${W - mR}" y2="${bandY + bandH + 6}" stroke="#999" stroke-width="1"/>`;
  return { file, svg: svgDoc(W, H, g) };
}

// ---------- frizy misy tranga (événements) ----------
function eventFrise(file, title, y0, y1, events, opts = {}) {
  const W = 1100, H = opts.h || 420, mL = 70, mR = 50, axisY = 230;
  const X = (yr) => mL + (yr - y0) / (y1 - y0) * (W - mL - mR);
  let g = txt(W / 2, 40, title, 25, GREEN, "bold");
  g += `<line x1="${mL - 20}" y1="${axisY}" x2="${W - mR + 25}" y2="${axisY}" stroke="${GREEN}" stroke-width="5"/>`;
  g += `<polygon points="${W - mR + 25},${axisY - 8} ${W - mR + 45},${axisY} ${W - mR + 25},${axisY + 8}" fill="${GREEN}"/>`;
  events.forEach((e, i) => {
    const x = X(e.y), up = i % 2 === 0;
    const tx = Math.max(115, Math.min(x, W - 135)); // tsy mivoaka ny sisiny ny soratra
    const stemY = up ? axisY - 60 - (e.lines.length - 1) * 18 : axisY + 60;
    g += `<line x1="${x}" y1="${axisY}" x2="${x}" y2="${up ? stemY + 12 : stemY - 26}" stroke="${e.color || PINK}" stroke-width="2"/>`;
    g += `<circle cx="${x}" cy="${axisY}" r="8" fill="${e.color || PINK}"/>`;
    g += txt(tx, up ? stemY - 26 : stemY - 8, e.date, 16, e.color || PINK, "bold");
    e.lines.forEach((l, j) => {
      g += txt(tx, (up ? stemY - 6 : stemY + 12) + j * 18, l, 14, "#333");
    });
  });
  return { file, svg: svgDoc(W, H, g) };
}

// ---------- boaty diagrama ----------
function boxes(file, title, top, cols, opts = {}) {
  const W = 1100, H = opts.h || 430;
  let g = txt(W / 2, 40, title, 25, GREEN, "bold");
  // boaty ambony
  g += `<rect x="${W / 2 - 160}" y="65" width="320" height="55" fill="${GREEN}" rx="10"/>`;
  g += txt(W / 2, 100, top, 22, "white", "bold");
  const n = cols.length, bw = Math.min(320, (W - 80 - (n - 1) * 30) / n), y = 190;
  cols.forEach((c, i) => {
    const x = (W - n * bw - (n - 1) * 30) / 2 + i * (bw + 30);
    g += `<line x1="${W / 2}" y1="120" x2="${x + bw / 2}" y2="${y}" stroke="#999" stroke-width="2"/>`;
    g += `<rect x="${x}" y="${y}" width="${bw}" height="48" fill="${c.color || PINK}" rx="8"/>`;
    g += txt(x + bw / 2, y + 31, c.titre, 17, "white", "bold");
    c.items.forEach((it, j) => {
      g += txt(x + bw / 2, y + 78 + j * 26, it, 15, "#333");
    });
  });
  return { file, svg: svgDoc(W, H, g) };
}

// ---------- tabilao 3 tsanganana ----------
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

// ---------- carte schématique ranomasimbe indianina ----------
function carteOI(file) {
  const W = 1100, H = 620;
  let g = `<rect width="${W}" height="${H}" fill="#DDEEFA"/>`;
  g += txt(W / 2, 45, "Ireo nosy ao amin'ny ranomasimbe indianina (sary famintinana)", 26, GREEN, "bold");
  // Afrika (morontsiraka atsinanana — sombiny)
  g += `<path d="M 0 80 L 150 90 Q 210 200 170 330 Q 150 450 220 620 L 0 620 Z" fill="#D7C29E" stroke="#A98F5F" stroke-width="2"/>`;
  g += txt(90, 300, "AFRIKA", 24, "#7A6234", "bold");
  // Madagasikara (polygone stylisé)
  g += `<path d="M 560 190 Q 600 150 625 185 Q 660 240 655 320 Q 650 420 600 500 Q 560 540 540 490 Q 515 400 525 300 Q 530 230 560 190 Z" fill="${GREEN}" stroke="#1B5E20" stroke-width="3"/>`;
  g += txt(590, 355, "MADAGASIKARA", 20, "white", "bold");
  // Nosy
  const iles = [
    [455, 150, "Kaomoro", 12], [520, 168, "Mayotte (Frantsa)", 9],
    [905, 330, "Maorisy", 13], [830, 385, "La Réunion (Frantsa)", 12],
    [880, 105, "Seselisy", 12],
  ];
  for (const [x, y, nom, r] of iles) {
    g += `<circle cx="${x}" cy="${y}" r="${r}" fill="${PINK}" stroke="#8E0E3F" stroke-width="2"/>`;
    g += txt(x, y - r - 8, nom, 17, "#8E0E3F", "bold");
  }
  g += txt(W / 2, H - 25, "Sary tsotra tsy misy maridrefy — natao hianarana ny toerana misy ny nosy mpiara-dia amintsika ao amin'ny COI", 15, GREY);
  return { file, svg: svgDoc(W, H, g) };
}

// =============== IREO SARY ===============
const jobs = [];

// S3 — fandrefesana ny fotoana
(() => {
  const W = 1100, H = 560;
  let g = txt(W / 2, 40, "Ny fandrefesana ny fotoana", 26, GREEN, "bold");
  // ambaratongan'ny fotoana
  const units = [["Andro", "1 andro"], ["Herinandro", "7 andro"], ["Volana", "28-31 andro"], ["Taona", "12 volana"], ["Folo taona", "10 taona"], ["Taon-jato", "100 taona"], ["Arivo taona", "1 000 taona"]];
  units.forEach(([u, v], i) => {
    const x = 40 + i * 148;
    g += `<rect x="${x}" y="70" width="132" height="72" fill="${i % 2 ? GREEN : PINK}" rx="10"/>`;
    g += txt(x + 66, 100, u, 16, "white", "bold");
    g += txt(x + 66, 126, v, 14, "white");
  });
  // frizy TAL. J.K. / TAOR. J.K.
  const axisY = 300;
  g += `<line x1="40" y1="${axisY}" x2="1040" y2="${axisY}" stroke="${GREEN}" stroke-width="5"/>`;
  g += `<polygon points="1040,${axisY - 8} 1065,${axisY} 1040,${axisY + 8}" fill="${GREEN}"/>`;
  g += `<line x1="540" y1="${axisY - 45}" x2="540" y2="${axisY + 45}" stroke="${PINK}" stroke-width="4"/>`;
  g += txt(540, axisY - 55, "Nahaterahan'i Jesoa Kristy (taona 0)", 16, PINK, "bold");
  g += txt(290, axisY - 20, "TALOHAN'I J.K.", 18, GREY, "bold");
  g += txt(790, axisY - 20, "TAORIAN'I J.K.", 18, GREY, "bold");
  [[140, "-2000"], [340, "-1000"], [540, "0"], [740, "+1000"], [940, "+2000"]].forEach(([x, l]) => {
    g += `<line x1="${x}" y1="${axisY - 8}" x2="${x}" y2="${axisY + 8}" stroke="#333" stroke-width="2"/>`;
    g += txt(x, axisY + 32, l, 15, "#333", "bold");
  });
  // taon-jato ohatra
  g += txt(W / 2, 420, "Ohatra : ny taona 1960 dia ao amin'ny taon-jato faha-20 ; ny taona 2026 dia ao amin'ny taon-jato faha-21", 18, "#333");
  g += txt(W / 2, 460, "Fitsipika : taona 1 - 100 = taon-jato voalohany ; taona 1901 - 2000 = taon-jato faha-20 ; taona 2001 - 2100 = taon-jato faha-21", 16, GREY);
  g += `<rect x="150" y="490" width="800" height="44" fill="#FFF3E0" rx="8"/>`;
  g += txt(W / 2, 518, "Kalandrie : gregorianina (izao), silamo (hejira), jiosy, sinoa \u2014 samy manana ny fiaingany", 16, OCRE, "bold");
  jobs.push({ file: "img_seansa03.png", svg: svgDoc(W, H, g) });
})();

// S5 — tabilao mampiavaka ny loharano
jobs.push(colTable("img_seansa05.png", "Ireo sokajin'ny loharano fanovozan-kevitra ara-tantara", [
  { titre: "AN-TSORATRA|(documents écrits)", color: BLUE, items: ["Boky, gazety", "Soratra voasokitra amin'ny vato", "Tahirim-bokim-pirenena (archives)", "Rakitsoratry ny fitsarana", "Taratasy, papyrus"] },
  { titre: "AM-BAVA|(sources orales)", color: PINK, items: ["Lovan-tsofina", "Fijoroana vavolombelona", "Tahirim-peo, horonantsary", "Onjam-peo sy fahita lavitra", "Angano sy oha-pitenenana"] },
  { titre: "MOANA|(documents muets)", color: OCRE, items: ["Fitaovana taloha (vilany, sotro)", "Taolana sisa tavela", "Vola, firavaka", "Tsangam-bato, trano rava", "Sary hosodoko anaty lava-bato"] },
], { h: 320 }));

// S7 — frizy ny repoblika nifandimby
jobs.push(bandFrise("img_seansa07.png", "Frizy : ireo Repoblika nifandimby teto Madagasikara (1958 - 2026)", 1958, 2026, [
  { from: 1958, to: 1972, label: "REPOBLIKA I|Tsiranana", color: BLUE },
  { from: 1972, to: 1975, label: "TZ", color: GREY },
  { from: 1975, to: 1991, label: "REPOBLIKA II|Ratsiraka", color: PINK },
  { from: 1991, to: 1993, label: "TZ", color: GREY },
  { from: 1993, to: 2009, label: "REPOBLIKA III|Zafy - Ratsiraka - Ravalomanana", color: GREEN },
  { from: 2009, to: 2014, label: "TZ|HAT", color: GREY },
  { from: 2014, to: 2025, label: "REPOBLIKA IV", color: OCRE },
  { from: 2025, to: 2026, label: "", color: "#7B1FA2" },
], { endLabel: "2026", h: 400 }));

// S9 — tetezamita 1972-1975
jobs.push(eventFrise("img_seansa09.png", "Ny tetezamita 1972 - 1975", 1971.8, 1975.9, [
  { y: 1972.1, date: "Mey 1972", lines: ["Fitokonan'ny mpianatra,", "hetsi-bahoaka (rotaka 72)"] },
  { y: 1972.4, date: "18 mey 1972", lines: ["Tsiranana nanolotra fahefana", "ny Jeneraly Ramanantsoa"], color: BLUE },
  { y: 1975.1, date: "5 feb. 1975", lines: ["Ratsimandrava nandray", "ny fahefana"], color: GREEN },
  { y: 1975.35, date: "11 feb. 1975", lines: ["Maty voatifitra i Ratsimandrava ;", "direktoara miaramila (Andriamahazo)"] },
  { y: 1975.65, date: "15 jona 1975", lines: ["Didier Ratsiraka voatendry", "ho filoham-panjakana"], color: OCRE },
]));

// S10 — Repoblika II 1975-1991
jobs.push(eventFrise("img_seansa10.png", "Ny Repoblika faharoa (1975 - 1991)", 1975, 1992, [
  { y: 1975.95, date: "30 des. 1975", lines: ["Fitsapan-kevi-bahoaka :", "Repoblika Demokratika Malagasy,", "ny Boky Mena (sosialisma)"], color: PINK },
  { y: 1977, date: "1976-1980", lines: ["Fanjakan'ny fanjakana ny toekarena :", "SOLIMA, JIRAMA, SINPA..."], color: BLUE },
  { y: 1982, date: "1982", lines: ["Ratsiraka lany fanindroany"], color: GREEN },
  { y: 1989, date: "1989-1991", lines: ["Nihanaka ny hetsi-bahoaka", "nitaky demokrasia"], color: OCRE },
  { y: 1991.6, date: "31 okt. 1991", lines: ["Fifanarahana Panorama :", "niroso tamin'ny tetezamita"], color: PINK },
]));

// S11 — 1991-2010
jobs.push(eventFrise("img_seansa11.png", "Tetezamita 1991-1993 sy ny Repoblika fahatelo (1993 - 2010)", 1991, 2010, [
  { y: 1991.9, date: "1991-1993", lines: ["Tetezamita : Razanamasy (PM),", "HAE Zafy, CRES"], color: GREY },
  { y: 1993.2, date: "27 mar. 1993", lines: ["Zafy Albert filoha :", "Repoblika III"], color: GREEN },
  { y: 1996.7, date: "1996", lines: ["Fanonganana an'i Zafy ;", "Ratsirahonana vonjimaika"], color: OCRE },
  { y: 1997.2, date: "1997-2002", lines: ["Ratsiraka niverina"], color: BLUE },
  { y: 2002.2, date: "2002", lines: ["Krizy taorian'ny fifidianana ;", "Ravalomanana filoha"], color: PINK },
  { y: 2009, date: "17 mar. 2009", lines: ["Nametra-pialana", "i Ravalomanana"], color: GREY },
]));

// S12 — 2009-2026
jobs.push(eventFrise("img_seansa12.png", "Ny tetezamita 2009-2014, ny Repoblika faha-4 ary ny taona 2025", 2009, 2026.5, [
  { y: 2009.2, date: "2009", lines: ["Krizy : HAT notarihin'i", "Rajoelina (tetezamita)"], color: GREY },
  { y: 2010.9, date: "17 nov. 2010", lines: ["Lalampanorenana vaovao :", "Repoblika IV"], color: PINK },
  { y: 2014.1, date: "25 jan. 2014", lines: ["Rajaonarimampianina filoha", "voafidy voalohany"], color: GREEN },
  { y: 2019, date: "18 jan. 2019", lines: ["Rajoelina filoha voafidy"], color: BLUE },
  { y: 2023.9, date: "des. 2023", lines: ["Rajoelina lany fanindroany"], color: OCRE },
  { y: 2025.8, date: "okt. 2025", lines: ["Krizy : nesorina i Rajoelina ;", "Randrianirina, filohan'ny", "Fanorenana ifotony (transition)"], color: "#7B1FA2" },
]));

// S13 — andrim-panjakana
jobs.push(boxes("img_seansa13.png", "Ireo andrim-panjakan'ny Repoblika", "REPOBLIKA", [
  { titre: "FAHEFANA MPANATANTERAKA", color: PINK, items: ["Filoham-pirenena", "(voafidim-bahoaka, 5 taona)", "Governemanta sy Praiminisitra"] },
  { titre: "FAHEFANA MPANAO LALANA", color: BLUE, items: ["Antenimieram-pirenena", "(solombavambahoaka)", "Antenimierandoholona", "(loholona)"] },
  { titre: "FAHEFANA MPITSARA", color: OCRE, items: ["Fitsarana isan-tokony", "Fitsarana Tampony", "Fitsarana Avo momba ny", "Lalampanorenana (HCC)"] },
], { h: 440 }));

// S14 — fototra iorenan'ny Repoblika (andry)
(() => {
  const W = 1100, H = 460;
  let g = txt(W / 2, 40, "Ireo fototra iorenan'ny Repoblika", 26, GREEN, "bold");
  g += `<rect x="120" y="80" width="860" height="60" fill="${GREEN}" rx="10"/>`;
  g += txt(W / 2, 118, "REPOBLIKA MANDALA NY DEMOKRASIA", 22, "white", "bold");
  const piliers = ["Fifidianana malalaka", "Fitsinjaram-pahefana", "Zon'olombelona", "Fanjakana tan-dalana", "Fitovian'ny rehetra"];
  piliers.forEach((pl, i) => {
    const x = 130 + i * 172;
    g += `<rect x="${x}" y="160" width="150" height="180" fill="${i % 2 ? PINK : OCRE}" rx="8"/>`;
    const words = pl.split(" ");
    words.forEach((w, j) => g += txt(x + 75, 230 + j * 26, w, 17, "white", "bold"));
  });
  g += `<rect x="120" y="360" width="860" height="50" fill="#E8F0E4" rx="10"/>`;
  g += txt(W / 2, 392, "NY VAHOAKA no loharanon'ny fahefana rehetra", 20, GREEN, "bold");
  jobs.push({ file: "img_seansa14.png", svg: svgDoc(W, H, g) });
})();

// S15 — politikam-pitondrana isaky ny repoblika
jobs.push(colTable("img_seansa15.png", "Ny politikam-pitondrana nifandimby", [
  { titre: "REPOBLIKA I|1958-1972", color: BLUE, items: ["Niankina tamin'i", "Frantsa (politika,", "toekarena)", "Nanondrana akora", "fototra"] },
  { titre: "REPOBLIKA II|1975-1991", color: PINK, items: ["Sosialisma :", "ny Boky Mena", "Fanjakana nitantana", "ny orinasa (SOLIMA,", "JIRAMA, SINPA...)"] },
  { titre: "REPOBLIKA III|1993-2010", color: GREEN, items: ["Demokrasia sy", "fanalalahana", "Sehatra tsy miankina", "nomena vahana", "Fanatontoloana"] },
  { titre: "REPOBLIKA IV|2010-...", color: OCRE, items: ["Fanjakana tan-dalana", "Miralenta", "Fampandrosoana", "maharitra", "lovain-jafy"] },
], { h: 340 }));

// S16 — krizy nifandimby
jobs.push(eventFrise("img_seansa16.png", "Ireo krizy politika lehibe sy ny fiovan'ny mpitondra", 1970, 2027, [
  { y: 1972, date: "1972", lines: ["Rotaka : niala", "i Tsiranana"] },
  { y: 1991, date: "1991", lines: ["Hetsi-bahoaka :", "rava ny Rep. II"] },
  { y: 2002, date: "2002", lines: ["Krizy taorian'ny", "fifidianana"] },
  { y: 2009, date: "2009", lines: ["Krizy : niala", "i Ravalomanana"] },
  { y: 2025, date: "2025", lines: ["Krizy : niala", "i Rajoelina"] },
].map(e => ({ ...e, color: PINK }))));

// S19 — fikambanana idiran'i Madagasikara
jobs.push(boxes("img_seansa19.png", "Ireo fikambanana misy an'i Madagasikara", "MADAGASIKARA", [
  { titre: "UA (1963/2002)", color: GREEN, items: ["Firaisambe Afrikanina", "Firenena afrikanina 55", "Foibe : Addis-Abeba"] },
  { titre: "COI (1984)", color: BLUE, items: ["Vaomieran'ny", "ranomasimbe indianina", "Nosy 5 mpikambana"] },
  { titre: "COMESA (1994)", color: PINK, items: ["Tsena iombonana", "Afrika Atsinanana", "sy Atsimo (21 firenena)"] },
  { titre: "SADC (2005)", color: OCRE, items: ["Fampandrosoana", "Afrika Atsimo", "Firenena 16"] },
], { h: 430 }));

// Annexe — frizy lehibe
jobs.push(bandFrise("img_annexe_frise.png", "Frizy famintinana : Madagasikara 1958 - 2026", 1958, 2026, [
  { from: 1958, to: 1972, label: "REPOBLIKA I|Tsiranana", color: BLUE, sub: "14 okt. 1958 / 26 jona 1960" },
  { from: 1972, to: 1975, label: "TZ", color: GREY },
  { from: 1975, to: 1991, label: "REPOBLIKA II|Ratsiraka \u2014 Boky Mena", color: PINK, sub: "sosialisma" },
  { from: 1991, to: 1993, label: "TZ", color: GREY },
  { from: 1993, to: 2009, label: "REPOBLIKA III|Zafy - Ratsiraka - Ravalomanana", color: GREEN, sub: "demokrasia, fanalalahana" },
  { from: 2009, to: 2014, label: "TZ|HAT", color: GREY },
  { from: 2014, to: 2025, label: "REPOBLIKA IV|Rajaonarimampianina - Rajoelina", color: OCRE },
  { from: 2025, to: 2026, label: "", color: "#7B1FA2" },
], { endLabel: "2026", h: 420 }));

// Annexe — carte océan indien
jobs.push(carteOI("img_annexe_carteOI.png"));

// Annexe — carte schématique Madagasikara (renivohitry ny faritany 6 taloha)
(() => {
  const W = 800, H = 900;
  let g = `<rect width="${W}" height="${H}" fill="#DDEEFA"/>`;
  g += txt(W / 2, 40, "Madagasikara : ireo renivohitry", 22, GREEN, "bold");
  g += txt(W / 2, 68, "ny faritany enina (sary famintinana)", 22, GREEN, "bold");
  g += `<path d="M 390 120 Q 450 80 480 130 Q 520 200 510 300 Q 505 420 470 550 Q 440 680 380 790 Q 330 840 300 770 Q 260 650 270 480 Q 280 300 330 190 Q 355 140 390 120 Z" fill="${GREEN}" stroke="#1B5E20" stroke-width="4"/>`;
  const villes = [
    [445, 150, "Antsiranana", -12],
    [330, 300, "Mahajanga", -95],
    [480, 380, "Toamasina", 14],
    [400, 430, "Antananarivo", -125],
    [400, 570, "Fianarantsoa", 16],
    [305, 700, "Toliara", -70],
  ];
  for (const [x, y, nom, dx] of villes) {
    g += `<circle cx="${x}" cy="${y}" r="9" fill="white" stroke="${PINK}" stroke-width="4"/>`;
    g += txt(x + dx + (dx > 0 ? 40 : 0), y + 5, nom, 18, "#8E0E3F", "bold", dx > 0 ? "start" : "end");
  }
  g += txt(W / 2, H - 30, "Sary tsotra tsy misy maridrefy — ny renivohitry ny faritany 6 nanjaka hatramin'ny 2009", 14, GREY);
  jobs.push({ file: "img_annexe_carteMG.png", svg: svgDoc(W, H, g) });
})();

// =============== FAMOKARANA ===============
(async () => {
  for (const j of jobs) {
    const out = path.join(IMG, j.file);
    await sharp(Buffer.from(j.svg)).png().toFile(out);
    console.log("OK", j.file);
  }
})();
