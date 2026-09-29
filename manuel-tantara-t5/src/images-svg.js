// images-svg.js — mamokatra ny sary SVG -> PNG (frizy, diagrama, sari-tany) amin'ny sharp — Tantara T5
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
  g += `<rect x="${W / 2 - 210}" y="65" width="420" height="55" fill="${GREEN}" rx="10"/>`;
  g += txt(W / 2, 100, top, 20, "white", "bold");
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
  let g = txt(W / 2, 40, title, 24, GREEN, "bold");
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

// ---------- frizy boaty ----------
function stepFrise(file, title, steps, opts = {}) {
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

// ---------- Madagasikara (polygone stylisé) ----------
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

// S1 — tabilao : zava-mitranga eo an-toerana / eo amin'ny firenena
jobs.push(colTable("img2_s01.png", "Ireo karazana zava-mitranga", [
  { titre: "EO AN-TOERANA", color: BLUE, items: ["Fetin'ny fokontany", "Fambolen-kazo", "Asa tanamaro", "Doro tanety", "Tsenabe"] },
  { titre: "EO AMIN'NY FIRENENA", color: PINK, items: ["Fifidianana", "Fetim-pirenena (26 jona)", "Hetsika ara-panatanjahantena", "Fitokanana fotodrafitrasa", "Rivo-doza lehibe"] },
], { h: 320 }));

// S2 — fampitahana : zava-mitranga sy tranga ara-tantara
(() => {
  const W = 1100, H = 400;
  let g = txt(W / 2, 40, "Inona no manavaka azy roa ?", 25, GREEN, "bold");
  const cols = [
    { titre: "ZAVA-MITRANGA", color: BLUE, items: ["Miseho amin'ny fiainana", "andavanandro", "Mety hohadinoina", "Ohatra : tsena, fety, orana"] },
    { titre: "TRANGA ARA-TANTARA", color: PINK, items: ["Nisy tamin'ny fotoana sy", "toerana voafaritra teo aloha", "Lehibe ny fiantraikany ka tadidy", "Ohatra : 26 jona 1960"] },
  ];
  const bw = 460, gap = 40, x0 = (W - 2 * bw - gap) / 2, y = 70;
  cols.forEach((c, i) => {
    const x = x0 + i * (bw + gap);
    g += `<rect x="${x}" y="${y}" width="${bw}" height="46" fill="${c.color}" rx="8"/>`;
    g += txt(x + bw / 2, y + 30, c.titre, 17, "white", "bold");
    g += `<rect x="${x}" y="${y + 54}" width="${bw}" height="150" fill="#F5F5F5" rx="8"/>`;
    c.items.forEach((it, j) => g += txt(x + bw / 2, y + 86 + j * 30, it, 15, "#333"));
  });
  g += `<rect x="${W / 2 - 400}" y="${y + 224}" width="800" height="46" fill="#E8F0E4" rx="10"/>`;
  g += txt(W / 2, y + 253, "Ny zava-mitranga manan-danja sy voarakitra no lasa TRANGA ARA-TANTARA", 17, GREEN, "bold");
  return jobs.push({ file: "img2_s02.png", svg: svgDoc(W, H, g) });
})();

// S4 — piramida : ireo saranga telo + fivoarana foko -> fanjakana
(() => {
  const W = 1100, H = 480;
  let g = txt(W / 2, 40, "Ny an-tanan-tohatra teo amin'ny fiarahamonina", 25, GREEN, "bold");
  const cx = 340;
  // piramida 3 sosona
  g += `<polygon points="${cx},80 ${cx + 110},190 ${cx - 110},190" fill="${PINK}"/>`;
  g += txt(cx, 160, "ANDRIANA", 18, "white", "bold");
  g += `<polygon points="${cx + 118},200 ${cx + 185},300 ${cx - 185},300 ${cx - 118},200" fill="${BLUE}"/>`;
  g += txt(cx, 260, "HOVA (olontsotra)", 18, "white", "bold");
  g += `<polygon points="${cx + 193},310 ${cx + 260},410 ${cx - 260},410 ${cx - 193},310" fill="${OCRE}"/>`;
  g += txt(cx, 370, "ANDEVO (resy an'ady)", 18, "white", "bold");
  // fivoarana foko -> fanjakana (ilany havanana)
  const x2 = 770;
  g += `<rect x="${x2 - 140}" y="95" width="280" height="60" fill="${GREEN}" rx="10"/>`;
  g += txt(x2, 122, "FOKO MAROMARO", 17, "white", "bold");
  g += txt(x2, 144, "(iray fihaviana, iray fomba)", 13, "white");
  g += `<polygon points="${x2},165 ${x2 - 14},195 ${x2 + 14},195" fill="#999"/>`;
  g += `<rect x="${x2 - 140}" y="205" width="280" height="60" fill="${BLUE}" rx="10"/>`;
  g += txt(x2, 232, "MITAMBATRA", 17, "white", "bold");
  g += txt(x2, 254, "(ny zokiolona mahery an'ady)", 13, "white");
  g += `<polygon points="${x2},275 ${x2 - 14},305 ${x2 + 14},305" fill="#999"/>`;
  g += `<rect x="${x2 - 140}" y="315" width="280" height="60" fill="${PINK}" rx="10"/>`;
  g += txt(x2, 342, "FANJAKANA", 17, "white", "bold");
  g += txt(x2, 364, "(mpanjaka manana hasina)", 13, "white");
  g += txt(W / 2, H - 20, "Arindra, ifandovàna ary tsy refesi-mandidy ny fanjakana", 15, GREY);
  return jobs.push({ file: "img2_s04.png", svg: svgDoc(W, H, g) });
})();

// S5 — sari-tany : ireo fanjakana efatra vaventy
(() => {
  const W = 950, H = 820;
  let g = `<rect width="${W}" height="${H}" fill="#DDEEFA"/>`;
  g += txt(W / 2, 40, "Ireo fanjakana efatra vaventy (taonjato XVI-XVIII)", 23, GREEN, "bold");
  g += `<path d="${pathMG(65, 20, 0.85)}" fill="#CDE6C9" stroke="#1B5E20" stroke-width="4"/>`;
  const zones = [
    { x: 330, y: 380, l: "SAKALAVA|XVI", c: OCRE, lx: 140, ly: 330 },
    { x: 415, y: 300, l: "MERINA|XVI", c: PINK, lx: 690, ly: 220 },
    { x: 470, y: 330, l: "BETSIMISARAKA|XVII", c: BLUE, lx: 660, ly: 390, fs: 17 },
    { x: 405, y: 480, l: "BETSILEO|XVIII", c: GREEN, lx: 660, ly: 540 },
  ];
  for (const z of zones) {
    g += `<circle cx="${z.x}" cy="${z.y}" r="16" fill="${z.c}" stroke="white" stroke-width="3"/>`;
    const lines = z.l.split("|");
    const anchor = z.lx > z.x ? "start" : "end";
    g += `<line x1="${z.x + (z.lx > z.x ? 16 : -16)}" y1="${z.y}" x2="${z.lx + (z.lx > z.x ? -8 : 8)}" y2="${z.ly - 8}" stroke="${z.c}" stroke-width="2.5"/>`;
    lines.forEach((l, j) => g += txt(z.lx, z.ly + j * 24, l, j === 0 ? (z.fs || 20) : 15, z.c, "bold", anchor));
  }
  g += txt(150, 660, "Fanjakana hafa maro koa :", 15, "#555", "normal", "start");
  g += txt(150, 682, "Antakarana, Antemoro, Bara,", 14, "#555", "normal", "start");
  g += txt(150, 704, "Mahafaly, Sihanaka, Tsimihety...", 14, "#555", "normal", "start");
  g += txt(W / 2, H - 18, "Sary tsotra tsy misy maridrefy — ny toerana no ianarana", 14, GREY);
  return jobs.push({ file: "img2_s05.png", svg: svgDoc(W, H, g) });
})();

// S7 — tabilao : ireo antony telo nivarotana andevo
jobs.push(colTable("img2_s07.png", "Nahoana ny mpanjaka no nivarotra andevo ?", [
  { titre: "ARA-TAFIKA", color: PINK, items: ["Basy sy vanja", "Fanamafisana ny tafika", "Fandresena ny", "  fanjakana hafa"] },
  { titre: "ARA-PITAOVANA", color: BLUE, items: ["Toaka (whisky)", "Sigara, fitaratra", "Lamba sy kojakoja", "  avy any ivelany"] },
  { titre: "ARA-TOEKARENA", color: OCRE, items: ["Vola niditra", "Nampitombo ny harena", "Nampahery ny", "  fanjakana"] },
], { h: 320 }));

// S8 — sari-tany : ny lalan'ny varotra andevo
(() => {
  const W = 1100, H = 640;
  let g = `<rect width="${W}" height="${H}" fill="#DDEEFA"/>`;
  g += txt(W / 2, 42, "Ny lalan'ny varotra andevo (sary famintinana)", 25, GREEN, "bold");
  // Afrika atsinanana (havia)
  g += `<path d="M 0 70 L 175 85 Q 235 210 195 350 Q 170 470 235 640 L 0 640 Z" fill="#D7C29E" stroke="#A98F5F" stroke-width="2"/>`;
  g += txt(95, 320, "AFRIKA", 22, "#7A6234", "bold");
  g += txt(95, 346, "atsinanana", 15, "#7A6234");
  g += `<circle cx="185" cy="420" r="9" fill="#7A6234"/>`;
  g += txt(120, 402, "Mozambika", 14, "#7A6234", "bold");
  // Madagasikara afovoany
  g += `<path d="${pathMG(240, 130, 0.56)}" fill="${GREEN}" stroke="#1B5E20" stroke-width="3"/>`;
  g += txt(458, 480, "MADAGASIKARA", 14, "white", "bold");
  // Moramanga (afovoany atsinanana)
  g += `<circle cx="478" cy="310" r="8" fill="white" stroke="${PINK}" stroke-width="3"/>`;
  g += txt(478, 292, "Moramanga", 14, PINK, "bold");
  // seranana atsinanana
  g += `<circle cx="516" cy="345" r="7" fill="${OCRE}"/>`;
  g += txt(560, 340, "seranana", 13, OCRE, "bold", "start");
  // Nosy Mascareignes (havanana)
  g += `<circle cx="880" cy="330" r="26" fill="#D7C29E" stroke="#A98F5F" stroke-width="2"/>`;
  g += txt(880, 302, "Maurice", 15, "#7A6234", "bold");
  g += `<circle cx="820" cy="420" r="22" fill="#D7C29E" stroke="#A98F5F" stroke-width="2"/>`;
  g += txt(820, 462, "La Réunion", 15, "#7A6234", "bold");
  // zana-tsipika : MG -> Mascareignes (andevo)
  g += `<path d="M 540 350 Q 680 330 845 335" fill="none" stroke="${PINK}" stroke-width="6" stroke-dasharray="14 8"/>`;
  g += `<polygon points="850,343 862,331 838,324" fill="${PINK}"/>`;
  g += txt(690, 310, "andevo naondrana", 15, PINK, "bold");
  // MG -> Afrika (Sakalava maka andevo)
  g += `<path d="M 310 380 Q 250 395 205 412" fill="none" stroke="${BLUE}" stroke-width="6" stroke-dasharray="14 8"/>`;
  g += `<polygon points="200,420 190,404 214,400" fill="${BLUE}"/>`;
  g += txt(255, 450, "ny Sakalava naka andevo", 14, BLUE, "bold");
  // takalo miverina
  g += `<path d="M 845 380 Q 700 420 555 400" fill="none" stroke="${OCRE}" stroke-width="5" stroke-dasharray="10 8"/>`;
  g += `<polygon points="548,398 568,388 566,412" fill="${OCRE}"/>`;
  g += txt(705, 445, "basy, vanja, vola, entana", 14, OCRE, "bold");
  g += txt(W / 2, H - 18, "Sary tsotra tsy misy maridrefy — natao hianarana ny lalan'ny varotra", 14, GREY);
  return jobs.push({ file: "img2_s08.png", svg: svgDoc(W, H, g) });
})();

// S9 — tabilao : ny fiantraikan'ny varotra andevo
(() => {
  const W = 1100, H = 400;
  let g = txt(W / 2, 40, "Ny fiantraikan'ny varotra andevo", 25, GREEN, "bold");
  const cols = [
    { titre: "TEO AMIN'NY MPIVAROTRA", color: BLUE, items: ["Nihanahery ny Sakalava", "sy ny Merina", "Nitombo ny basy sy ny vola", "Nanitatra ny fahefany"] },
    { titre: "TEO AMIN'NY FIARAHAMONINA", color: PINK, items: ["Rava ny fanjakana voafana", "Nihavitsy ny hery mpamokatra", "Nisaraka ny fianakaviana", "Simba ny fihavanana"] },
  ];
  const bw = 460, gap = 40, x0 = (W - 2 * bw - gap) / 2, y = 70;
  cols.forEach((c, i) => {
    const x = x0 + i * (bw + gap);
    g += `<rect x="${x}" y="${y}" width="${bw}" height="46" fill="${c.color}" rx="8"/>`;
    g += txt(x + bw / 2, y + 30, c.titre, 16, "white", "bold");
    g += `<rect x="${x}" y="${y + 54}" width="${bw}" height="150" fill="#F5F5F5" rx="8"/>`;
    c.items.forEach((it, j) => g += txt(x + bw / 2, y + 86 + j * 30, it, 15, "#333"));
  });
  g += `<rect x="${W / 2 - 420}" y="${y + 224}" width="840" height="46" fill="#FDEEF4" rx="10"/>`;
  g += txt(W / 2, y + 253, "Manitsakitsaka ny zon'olombelona ny fivarotana olona : manan-kasina ny aina !", 17, PINK, "bold");
  return jobs.push({ file: "img2_s09.png", svg: svgDoc(W, H, g) });
})();

// S11 — frizy : ireo mpanjaka enina (1810-1897)
jobs.push(stepFrise("img2_s11.png", "Ireo mpanjaka enina nifandimby (1810-1897)",
  [
    { label: "RADAMA I", color: GREEN, from: "1810", sub: "fanitarana" },
    { label: "RANAVALONA I", color: PINK, from: "1828", sub: "fiandrianam-pirenena" },
    { label: "RADAMA II", color: BLUE, from: "1861", sub: "fisokafana" },
    { label: "RASOHERINA", color: OCRE, from: "1863", sub: "Rainilaiarivony PM" },
    { label: "RANAVALONA II", color: "#7B1FA2", from: "1868", sub: "batisa 1869" },
    { label: "RANAVALONA III", color: GREY, from: "1883", to: "1897", sub: "zanatany 1896" },
  ],
  { h: 340 }));

// S13 — diagrama : ny vokatry ny orinasan'i Mantasoa
jobs.push(boxes("img2_s13.png", "Ny orinasan'i Mantasoa (Jean Laborde)", "NAMOKATRA SAMIRERY I MADAGASIKARA", [
  { titre: "HO AN'NY TAFIKA", color: PINK, items: ["Basy", "Vanja", "Tafondro"] },
  { titre: "HO AN'NY FANORENANA", color: BLUE, items: ["Biriky", "Fitaratra", "Vy"] },
  { titre: "HO AN'NY MPONINA", color: OCRE, items: ["Savony", "Labozia", "Kojakoja maro"] },
], { h: 400 }));

// S15 — frizy : ireo mpanjakavavy telo farany
jobs.push(stepFrise("img2_s15.png", "Ireo mpanjakavavy telo farany sy ny praiminisitra Rainilaiarivony",
  [
    { label: "RASOHERINA", color: OCRE, from: "1863", sub: "fampianarana" },
    { label: "RANAVALONA II", color: "#7B1FA2", from: "1868", sub: "batisa 21-02-1869" },
    { label: "RANAVALONA III", color: GREY, from: "1883", to: "1897", sub: "ady 1885 sy 1895" },
  ],
  { h: 340, note: "Rainilaiarivony no praiminisitra nitantana ny fanjakana nandritra ny 31 taona (1864-1895)" }));

// S16 — diagrama : ireo soatoavina malagasy
jobs.push(boxes("img2_s16.png", "Ireo soatoavina malagasy tokony hotandrovana", "NY SOATOAVINA MAHA MALAGASY", [
  { titre: "FIHAVANANA", color: GREEN, items: ["Aleo very tsikalakalam-bola", "toy izay very", "tsikalakalam-pihavanana"] },
  { titre: "FIRAISAN-KINA", color: PINK, items: ["Izay mitambatra vato,", "izay misaraka fasika", "Fifanampiana"] },
  { titre: "FANAJANA", color: BLUE, items: ["Ny hafa sy ny tena", "Ny teny nomena :", "\u00AB ny teny nomena, trosa \u00BB"] },
], { h: 400 }));

// S18 — frizy : ireo satan'i Madagasikara
jobs.push(stepFrise("img2_s18.png", "Ireo satan'i Madagasikara (1895-1960)",
  [
    { label: "PROTECTORAT", color: BLUE, from: "1895", sub: "mbola nisy ny mpanjaka" },
    { label: "ZANATANY", color: PINK, from: "1896", sub: "governora jeneraly" },
    { label: "TOM|(Union française)", color: OCRE, from: "1946", sub: "taorian'ny ady lehibe II" },
    { label: "FIRAISAMBE|FRANTSAY", color: GREEN, from: "1958", to: "26 jona 1960", sub: "Repoblika I (1958)" },
  ],
  { h: 340 }));

// S19 — organigrama : ny rafi-pitantanan'ny mpanjanaka
(() => {
  const W = 1100, H = 620;
  let g = txt(W / 2, 40, "Ny rafi-pitantanan'ny mpanjanaka", 25, GREEN, "bold");
  const levels = [
    ["GOVERNORA JENERALY", "solontenan'i Frantsa (Gallieni no voalohany)", PINK, 440],
    ["PROVINCE (faritany)", "notantanan'ny frantsay", BLUE, 380],
    ["DISTRICT (distrika)", "notantanan'ny frantsay", BLUE, 350],
    ["CANTON (kantao)", "malagasy notendrena", OCRE, 320],
    ["ARRONDISSEMENT (boriboritany)", "malagasy notendrena", OCRE, 480],
    ["VILLAGE sy QUARTIER (tanàna, fokontany)", "malagasy notendrena", GREEN, 560],
  ];
  let y = 70;
  levels.forEach(([l, sub, c, w], i) => {
    const x = (W - w) / 2;
    g += `<rect x="${x}" y="${y}" width="${w}" height="56" fill="${c}" rx="9"/>`;
    g += txt(W / 2, y + 25, l, 16, "white", "bold");
    g += txt(W / 2, y + 45, sub, 12, "white");
    if (i < levels.length - 1) {
      g += `<polygon points="${W / 2},${y + 74} ${W / 2 - 12},${y + 60} ${W / 2 + 12},${y + 60}" fill="#999"/>`;
    }
    y += 82;
  });
  g += txt(W / 2, H - 18, "Ny frantsay no nibaiko tany ambony ; malagasy notendrena no nanatanteraka tany ambany", 14, GREY);
  return jobs.push({ file: "img2_s19.png", svg: svgDoc(W, H, g) });
})();

// S20 — diagrama : ny économie de traite
(() => {
  const W = 1100, H = 430;
  let g = txt(W / 2, 40, "Ny \u00AB économie de traite \u00BB : toekarena ho an'ny mpanjanaka", 24, GREEN, "bold");
  // MG havia
  g += `<rect x="60" y="120" width="330" height="180" fill="${GREEN}" rx="14"/>`;
  g += txt(225, 155, "MADAGASIKARA", 20, "white", "bold");
  g += txt(225, 185, "(zanatany)", 14, "white");
  g += txt(225, 220, "mamokatra akora :", 15, "white");
  g += txt(225, 245, "kafé, jirofo, lavanila,", 14, "white");
  g += txt(225, 268, "harena an-kibon'ny tany", 14, "white");
  // Frantsa havanana
  g += `<rect x="710" y="120" width="330" height="180" fill="${BLUE}" rx="14"/>`;
  g += txt(875, 155, "FRANTSA", 20, "white", "bold");
  g += txt(875, 185, "(firenena mpanjanaka)", 14, "white");
  g += txt(875, 220, "mamokatra entana vita :", 15, "white");
  g += txt(875, 245, "lamba, fitaovana,", 14, "white");
  g += txt(875, 268, "kojakoja amidy lafo", 14, "white");
  // zana-tsipika akora ->
  g += `<path d="M 395 170 L 700 170" stroke="${OCRE}" stroke-width="8"/>`;
  g += `<polygon points="705,170 680,158 680,182" fill="${OCRE}"/>`;
  g += txt(550, 150, "akora mivoaka (mora)", 16, OCRE, "bold");
  // <- entana
  g += `<path d="M 705 255 L 400 255" stroke="${PINK}" stroke-width="8"/>`;
  g += `<polygon points="395,255 420,243 420,267" fill="${PINK}"/>`;
  g += txt(550, 290, "entana vita miditra (lafo)", 16, PINK, "bold");
  g += `<rect x="${W / 2 - 400}" y="340" width="800" height="50" fill="#FFF3E0" rx="10"/>`;
  g += txt(W / 2, 366, "Ny kaompania vazaha (SICE, Marseillaise, Lyonnaise) no nifehy ny varotra", 16, OCRE, "bold");
  g += txt(W / 2, 386, "", 14, GREY);
  return jobs.push({ file: "img2_s20.png", svg: svgDoc(W, H, g) });
})();

// S22 — takelaka : ny SMOTIG amin'ny isa
(() => {
  const W = 1100, H = 420;
  let g = txt(W / 2, 40, "Ny SMOTIG amin'ny isa", 25, GREEN, "bold");
  g += txt(W / 2, 72, "Service de la Main-d'\u0152uvre pour les Travaux d'Intérêt Général", 15, GREY);
  const cards = [
    ["10 - 50", "andro isan-taona", PINK],
    ["15 - 60", "taona (vatan-dehilahy)", BLUE],
    ["0 Ariary", "karama : tsy nisy", OCRE],
    ["lalana, lalamby", "tetezana, tonelina", GREEN],
  ];
  const bw = 240, gap = 22, x0 = (W - 4 * bw - 3 * gap) / 2, y = 110;
  cards.forEach(([big, sub, c], i) => {
    const x = x0 + i * (bw + gap);
    g += `<rect x="${x}" y="${y}" width="${bw}" height="150" fill="${c}" rx="14"/>`;
    g += txt(x + bw / 2, y + 72, big, big.length > 8 ? 22 : 34, "white", "bold");
    g += txt(x + bw / 2, y + 112, sub, 15, "white");
  });
  g += `<rect x="${W / 2 - 430}" y="300" width="860" height="52" fill="#FDEEF4" rx="10"/>`;
  g += txt(W / 2, 322, "Asa an-terivozona : noterena ny olona ary tsy nandray karama —", 16, PINK, "bold");
  g += txt(W / 2, 344, "natao hanondranana mora ny harem-pirenena malagasy", 16, PINK, "bold");
  return jobs.push({ file: "img2_s22.png", svg: svgDoc(W, H, g) });
})();

// S23 — frizy : ireo hetsika fanoherana
jobs.push(stepFrise("img2_s23.png", "Ireo hetsika fanoherana ny fanjanahantany",
  [
    { label: "MENALAMBA", color: PINK, from: "1895", sub: "afovoan-tany" },
    { label: "SADIAVAHY", color: OCRE, from: "1904", sub: "faritra atsimo" },
    { label: "VVS", color: BLUE, from: "1913", sub: "fitovian-jo" },
    { label: "RALAIMONGO", color: "#7B1FA2", from: "1919", sub: "gazety sy lalàna" },
    { label: "JINA|PANAMA|MDRM", color: GREY, from: "1946", sub: "fahaleovantena" },
    { label: "FAHALEOVAN-|TENA", color: GREEN, from: "29-03-1947", to: "26-06-1960", sub: "tanjona tratra !" },
  ],
  { h: 340 }));

// S24 — tabilao : zava-bita sy fiantraikany
(() => {
  const W = 1100, H = 440;
  let g = txt(W / 2, 40, "Ny lanjan'ny fanjanahantany : mizana roa", 25, GREEN, "bold");
  const cols = [
    { titre: "ZAVA-BITA", color: BLUE, items: ["Seranana, lalana, lalamby", "(TCE, MLA, TA, FCE)", "Sekoly sy hopitaly", "Vaksiny sy fanafody"] },
    { titre: "FIANTRAIKANY RATSY", color: PINK, items: ["Olana ara-pananan-tany", "Fiankinan-doha amin'i Frantsa", "Fanindrahindrana ny vahiny", "Fahaverezan'ny soatoavina"] },
  ];
  const bw = 460, gap = 40, x0 = (W - 2 * bw - gap) / 2, y = 70;
  cols.forEach((c, i) => {
    const x = x0 + i * (bw + gap);
    g += `<rect x="${x}" y="${y}" width="${bw}" height="46" fill="${c.color}" rx="8"/>`;
    g += txt(x + bw / 2, y + 30, c.titre, 17, "white", "bold");
    g += `<rect x="${x}" y="${y + 54}" width="${bw}" height="150" fill="#F5F5F5" rx="8"/>`;
    c.items.forEach((it, j) => g += txt(x + bw / 2, y + 86 + j * 30, it, 15, "#333"));
  });
  g += `<rect x="${W / 2 - 430}" y="${y + 224}" width="860" height="52" fill="#E8F0E4" rx="10"/>`;
  g += txt(W / 2, y + 246, "Ireo fotodrafitrasa dia natao indrindra ho an'ny tombontsoan'ny mpanjanaka ;", 15, GREEN, "bold");
  g += txt(W / 2, y + 268, "ny vahoaka malagasy no nanamboatra azy tamin'ny asa an-terivozona", 15, GREEN, "bold");
  return jobs.push({ file: "img2_s24.png", svg: svgDoc(W, H, g) });
})();

// S26 — tabilao : ireo karazana vakoka
jobs.push(colTable("img2_s26.png", "Ireo karazana vakoka", [
  { titre: "HITA MASO", color: BLUE, items: ["Tsangambato, aloalo", "Rova, lapa, fasana", "Trano sy fiangonana", "  manan-tantara", "Fitaovana tranainy"] },
  { titre: "TSY HITA MASO", color: PINK, items: ["Kabary", "Hira gasy, vakodrazana", "Fomba amam-panao", "Angano, ohabolana"] },
], { h: 340 }));

// S27 — diagrama : ireo tombontsoa avy amin'ny fizahantany
jobs.push(boxes("img2_s27.png", "Ny tombontsoa azo amin'ny fikolokoloana ny harem-pirenena", "FIZAHANTANY MIROBOROBO", [
  { titre: "VOLA MIDITRA", color: PINK, items: ["Vola vahiny ho an'ny", "firenena sy ny mponina"] },
  { titre: "ASA", color: BLUE, items: ["Mpitari-dalana,", "mpandray vahiny,", "mpanao asa tanana"] },
  { titre: "FAMPANDROSOANA", color: OCRE, items: ["Lalana, trano", "fandraisam-bahiny", "ho an'ny faritra"] },
  { titre: "LAZA", color: GREEN, items: ["Fantatr'izao tontolo", "izao i Madagasikara"] },
], { h: 400 }));

// S28 — tabilao : lalàna sy fepetra
jobs.push(colTable("img2_s28.png", "Ny fiarovana ny vakoka : lalàna sy fepetra", [
  { titre: "LALANA", color: BLUE, items: ["Lalàna 82-029 (vakoka nasionaly)", "Didim-panjakana 91-017", "  (harem-pirenena)", "Lalàna 56-1106 (toerana", "  manan-tantara)"] },
  { titre: "FEPETRA MIVANTANA", color: OCRE, items: ["Tranom-bakoka", "Arovana amin'ny hamandoana,", "  ny vovoka, ny rivotra", "Arovana amin'ny afo, ny", "  mpangalatra, ny bibikely"] },
], { h: 360 }));

// S29 — diagrama : ny anjara asan'ny tsirairay
jobs.push(boxes("img2_s29.png", "Ny anjara asan'ny tsirairay", "MIARO NY VAKOKA SY NY HAREM-PIRENENA AHO", [
  { titre: "TSY MANIMBA", color: PINK, items: ["Tsy mandoro tanety", "Tsy mandoto,", "tsy manoratra amin'ny", "toerana manan-tantara"] },
  { titre: "MANDRAY ANJARA", color: BLUE, items: ["Fanadiovana", "Fambolen-kazo", "Tetikasa fampitomboana"] },
  { titre: "MANAJA", color: GREEN, items: ["Ny lalàna", "Ny dinam-", "piarahamonina"] },
], { h: 420 }));

// =============== IMG3 (fanampiny) ===============

// S11 — tabilao famintinana : ireo mpanjaka enina
jobs.push(colTable("img3_s11.png", "Tabilao famintinana : ireo mpanjaka enina", [
  { titre: "MPANJAKA", color: GREEN, items: ["Radama I", "Ranavalona I", "Radama II", "Rasoherina", "Ranavalona II", "Ranavalona III"] },
  { titre: "VANIM-POTOANA", color: BLUE, items: ["1810 - 1828", "1828 - 1861", "1861 - 1863", "1863 - 1868", "1868 - 1883", "1883 - 1897"] },
  { titre: "ZAVA-NITRANGA LEHIBE", color: PINK, items: ["fanitarana, fifanekena 1817", "Mantasoa, fiandrianam-pirenena", "fisokafana, Charte Lambert", "Rainilaiarivony praiminisitra", "batisa 1869, fandrarana toaka", "resy 1895, zanatany 1896"] },
], { h: 340 }));

// S23 — tabilao famintinana : ireo tolona
jobs.push(colTable("img3_s23.png", "Tabilao famintinana : ireo hetsika fanoherana", [
  { titre: "HETSIKA", color: GREEN, items: ["Menalamba", "Sadiavahy", "VVS", "Ralaimongo", "JINA / PANAMA", "MDRM (1947)"] },
  { titre: "FOTOANA", color: BLUE, items: ["1895 - 1898", "1904 - 1905", "1913 - 1915", "1919 - 1930", "fikambanana miafina", "1946 - 1947"] },
  { titre: "ZAVA-NOTAKINA", color: PINK, items: ["fanoherana ny vahiny", "fanoherana ny vahiny", "fitovian-jo", "fitovian-jo, zon'ny malagasy", "fahaleovantena", "fahaleovantena"] },
], { h: 340 }));

// S18 — tabilao : ny sata sy ny dikany
jobs.push(colTable("img3_s18.png", "Tabilao : ireo sata efatra sy ny dikany", [
  { titre: "SATA", color: GREEN, items: ["Protectorat (1895-1896)", "Zanatany (1896-1945)", "TOM (1946-1958)", "Firaisambe (1958-1960)"] },
  { titre: "NY DIKANY", color: OCRE, items: ["mbola nisy ny mpanjaka,", "  fa ny frantsay no nibaiko", "nofoanana ny fanjakana malagasy", "faritany ampitan-dranomasina", "Repoblika tao anaty firaisambe"] },
], { h: 330 }));

// S26 — diagrama : ny fiarovana ny vakoka (famintinana LH VI)
jobs.push(boxes("img3_s26.png", "Ny fiarovana ny vakoka sy ny harem-pirenena", "FIAROVANA NY VAKOKA", [
  { titre: "FEPETRA", color: BLUE, items: ["Tranom-bakoka", "Arovana amin'ny hamandoana,", "ny vovoka, ny afo,", "ny mpangalatra"] },
  { titre: "LALANA SY DINA", color: OCRE, items: ["Lalàna 82-029", "Didim-panjakana 91-017", "Lalàna 56-1106", "Dinam-piarahamonina"] },
  { titre: "ANDRAIKITRY NY TSIRAIRAY", color: PINK, items: ["Tsy mandoro tanety", "Tsy manimba, tsy mandoto", "Mandray anjara amin'ny", "fanadiovana"] },
], { h: 430 }));

// =============== SARY FANAZARAN-TENA (exo) ===============

// S11 — frizy moana : ireo mpanjaka enina
(() => {
  const W = 1100, H = 310;
  let g = txt(W / 2, 40, "Frizy hofenoina : ireo mpanjaka enina", 24, GREEN, "bold");
  const lettres = ["A", "B", "D", "E", "F", "G"];
  const dates = ["1810", "1828", "1861", "1863", "1868", "1883"];
  const n = 6, gap = 20, bw = (W - 80 - (n - 1) * gap) / n, y = 90, bh = 90;
  g += `<line x1="30" y1="${y + bh + 30}" x2="${W - 45}" y2="${y + bh + 30}" stroke="${GREEN}" stroke-width="5"/>`;
  g += `<polygon points="${W - 45},${y + bh + 22} ${W - 22},${y + bh + 30} ${W - 45},${y + bh + 38}" fill="${GREEN}"/>`;
  for (let i = 0; i < n; i++) {
    const x = 40 + i * (bw + gap);
    g += `<rect x="${x}" y="${y}" width="${bw}" height="${bh}" fill="#F5F5F5" stroke="${PINK}" stroke-width="3" stroke-dasharray="10 6" rx="10"/>`;
    g += txt(x + bw / 2, y + bh / 2 + 12, lettres[i], 34, PINK, "bold");
    g += `<line x1="${x}" y1="${y + bh + 22}" x2="${x}" y2="${y + bh + 38}" stroke="#333" stroke-width="2"/>`;
    g += txt(x, y + bh + 58, dates[i], 14, "#333", "bold");
  }
  g += txt(40 + (n - 1) * (bw + gap) + bw, y + bh + 58, "1897", 14, "#333", "bold");
  g += `<line x1="${40 + (n - 1) * (bw + gap) + bw}" y1="${y + bh + 22}" x2="${40 + (n - 1) * (bw + gap) + bw}" y2="${y + bh + 38}" stroke="#333" stroke-width="2"/>`;
  g += txt(W / 2, H - 15, "Soraty ao amin'ny kahienao ny anaran'ny mpanjaka mifanandrify amin'ny litera A - G", 16, "#333", "bold");
  return jobs.push({ file: "img_exo_frise_mpanjaka.png", svg: svgDoc(W, H, g) });
})();

// S5 — sari-tany moana : ireo fanjakana efatra vaventy
(() => {
  const W = 900, H = 800;
  let g = `<rect width="${W}" height="${H}" fill="#DDEEFA"/>`;
  g += txt(W / 2, 40, "Sari-tany hofenoina : ireo fanjakana efatra vaventy", 22, GREEN, "bold");
  g += `<path d="${pathMG(65, 10, 0.85)}" fill="#CDE6C9" stroke="#1B5E20" stroke-width="4"/>`;
  const spots = [
    [330, 370, "A"], // andrefana - Sakalava
    [415, 290, "B"], // afovoany - Merina
    [472, 315, "D"], // atsinanana - Betsimisaraka
    [405, 470, "E"], // afovoany atsimo - Betsileo
  ];
  for (const [x, y, l] of spots) {
    g += `<circle cx="${x}" cy="${y}" r="18" fill="white" stroke="${PINK}" stroke-width="4"/>`;
    g += txt(x, y + 7, l, 20, "#8E0E3F", "bold");
  }
  g += txt(W / 2, H - 74, "Ampifanandrifio ny litera A, B, D, E sy ireto fanjakana ireto :", 16, "#333", "bold");
  g += txt(W / 2, H - 46, "Betsileo - Sakalava - Betsimisaraka - Merina", 16, GREY);
  g += txt(W / 2, H - 20, "ary lazao ny taonjato nijoroan'ny tsirairay", 14, GREY);
  return jobs.push({ file: "img_exo_carte_fanjakana.png", svg: svgDoc(W, H, g) });
})();

// S18 — frizy moana : ireo sata efatra
(() => {
  const W = 1100, H = 310;
  let g = txt(W / 2, 40, "Frizy hofenoina : ireo satan'i Madagasikara", 24, GREEN, "bold");
  const lettres = ["A", "B", "D", "E"];
  const dates = ["1895", "1896", "1946", "1958"];
  const n = 4, gap = 26, bw = (W - 80 - (n - 1) * gap) / n, y = 90, bh = 90;
  g += `<line x1="30" y1="${y + bh + 30}" x2="${W - 45}" y2="${y + bh + 30}" stroke="${GREEN}" stroke-width="5"/>`;
  g += `<polygon points="${W - 45},${y + bh + 22} ${W - 22},${y + bh + 30} ${W - 45},${y + bh + 38}" fill="${GREEN}"/>`;
  for (let i = 0; i < n; i++) {
    const x = 40 + i * (bw + gap);
    g += `<rect x="${x}" y="${y}" width="${bw}" height="${bh}" fill="#F5F5F5" stroke="${PINK}" stroke-width="3" stroke-dasharray="10 6" rx="10"/>`;
    g += txt(x + bw / 2, y + bh / 2 + 12, lettres[i], 34, PINK, "bold");
    g += `<line x1="${x}" y1="${y + bh + 22}" x2="${x}" y2="${y + bh + 38}" stroke="#333" stroke-width="2"/>`;
    g += txt(x, y + bh + 58, dates[i], 14, "#333", "bold");
  }
  const xe = 40 + (n - 1) * (bw + gap) + bw;
  g += `<line x1="${xe}" y1="${y + bh + 22}" x2="${xe}" y2="${y + bh + 38}" stroke="#333" stroke-width="2"/>`;
  g += txt(xe, y + bh + 58, "1960", 14, "#333", "bold");
  g += txt(W / 2, H - 15, "Soraty ny anaran'ny sata mifanandrify amin'ny litera A - E : zanatany - firaisambe - protectorat - TOM", 15, "#333", "bold");
  return jobs.push({ file: "img_exo_satas.png", svg: svgDoc(W, H, g) });
})();

// S19 — organigrama moana
(() => {
  const W = 1100, H = 560;
  let g = txt(W / 2, 40, "Organigrama hofenoina : ny rafi-pitantanan'ny mpanjanaka", 23, GREEN, "bold");
  const lettres = ["A", "B", "D", "E", "F"];
  const hints = ["fara-tampony, solontenan'i Frantsa", "faritany lehibe", "zarazaran'ny faritany", "zarazaran'ny distrika", "tanàna sy fokontany"];
  let y = 78;
  lettres.forEach((l, i) => {
    const w = 420 - i * 10, x = (W - w) / 2;
    g += `<rect x="${x}" y="${y}" width="${w}" height="56" fill="#F5F5F5" stroke="${PINK}" stroke-width="3" stroke-dasharray="10 6" rx="9"/>`;
    g += txt(W / 2 - 90, y + 36, l, 26, PINK, "bold");
    g += txt(W / 2 + 30, y + 34, hints[i], 13, GREY);
    if (i < lettres.length - 1) g += `<polygon points="${W / 2},${y + 74} ${W / 2 - 12},${y + 60} ${W / 2 + 12},${y + 60}" fill="#999"/>`;
    y += 82;
  });
  g += txt(W / 2, H - 40, "Soraty ny anarana mifanandrify amin'ny litera A - F :", 16, "#333", "bold");
  g += txt(W / 2, H - 16, "district - governora jeneraly - village/quartier - canton - province", 15, GREY);
  return jobs.push({ file: "img_exo_organigrama.png", svg: svgDoc(W, H, g) });
})();

// S26 — sari-tany : aiza ho aiza ireo vakoka sy harem-pirenena ?
(() => {
  const W = 800, H = 880;
  let g = `<rect width="${W}" height="${H}" fill="#DDEEFA"/>`;
  g += txt(W / 2, 40, "Sari-tany hofenoina : aiza ho aiza", 22, GREEN, "bold");
  g += txt(W / 2, 68, "ireo vakoka sy harem-pirenena malaza ?", 22, GREEN, "bold");
  g += `<path d="${pathMG(0, 90, 0.9)}" fill="${GREEN}" stroke="#1B5E20" stroke-width="4"/>`;
  const spots = [
    [270, 390, "1"], // tsingy (andrefana)
    [300, 700, "2"], // aloalo (atsimo)
    [400, 400, "3"], // rova Ambohimanga (afovoany)
    [430, 330, "4"], // lalamby TCE (atsinanana)
  ];
  for (const [x, y, num] of spots) {
    g += `<circle cx="${x}" cy="${y}" r="18" fill="white" stroke="${PINK}" stroke-width="4"/>`;
    g += txt(x, y + 7, num, 20, "#8E0E3F", "bold");
  }
  g += txt(W / 2, H - 80, "Ampifanandrifio ny isa 1 - 4 sy ireto anarana ireto :", 16, "#333", "bold");
  g += txt(W / 2, H - 52, "ny rovan'Ambohimanga - ny tsingin'ny Bemaraha", 15, GREY);
  g += txt(W / 2, H - 28, "ny aloalon'ny faritra atsimo - ny lalamby TCE", 15, GREY);
  return jobs.push({ file: "img_exo_vakoka.png", svg: svgDoc(W, H, g) });
})();

// =============== FAMOKARANA ===============
(async () => {
  for (const j of jobs) {
    const out = path.join(IMG, j.file);
    await sharp(Buffer.from(j.svg)).png().toFile(out);
    console.log("OK", j.file);
  }
})();
