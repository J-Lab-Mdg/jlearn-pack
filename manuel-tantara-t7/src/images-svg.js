// images-svg.js — T7 : mamokatra ny sary SVG -> PNG (frizy, diagrama, sari-tany) amin'ny sharp
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
    const ty = i % 2 === 0 ? bandY + bandH + 30 : bandY - 16;
    g += txt(x1, ty, b.fromLabel || String(b.from), 16, GREY, "bold");
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
    const tx = Math.max(115, Math.min(x, W - 135));
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

// ---------- fafana misy tsanganana ----------
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

// ---------- piramida feodaly ----------
function pyramide(file, title, levels, opts = {}) {
  const W = 1100, H = opts.h || 520;
  let g = txt(W / 2, 40, title, 25, GREEN, "bold");
  const n = levels.length, y0 = 80, lh = 84, gap = 14;
  levels.forEach((lv, i) => {
    const w = 420 + i * ((W - 580) / (n - 1));
    const x = (W - w) / 2, y = y0 + i * (lh + gap);
    g += `<rect x="${x}" y="${y}" width="${w}" height="${lh}" fill="${lv.color}" rx="10"/>`;
    g += txt(W / 2, y + 32, lv.titre, 19, "white", "bold");
    if (lv.sub) g += txt(W / 2, y + 58, lv.sub, 14, "white");
    if (i < n - 1) {
      g += `<polygon points="${W / 2 - 8},${y + lh} ${W / 2 + 8},${y + lh} ${W / 2},${y + lh + gap}" fill="#777"/>`;
    }
    if (lv.side) {
      g += txt(x + w + 18, y + 40, lv.side, 14, GREY, "normal", "start");
    }
  });
  return { file, svg: svgDoc(W, H, g) };
}

// ---------- sari-tany : ny onjam-pifindra-monina nankany Madagasikara ----------
function carteMigrations(file, opts = {}) {
  const W = 1100, H = 650;
  const lettres = opts.lettres || false;
  let g = `<rect width="${W}" height="${H}" fill="#DDEEFA"/>`;
  g += txt(W / 2, 40, opts.titre || "Ireo onjam-pifindra-monina nankany Madagasikara (sary famintinana)", 24, GREEN, "bold");
  // Afrika (morontsiraka atsinanana)
  g += `<path d="M 0 80 L 170 95 Q 230 220 190 350 Q 170 470 240 650 L 0 650 Z" fill="#D7C29E" stroke="#A98F5F" stroke-width="2"/>`;
  g += txt(95, 320, "AFRIKA", 24, "#7A6234", "bold");
  // Arabia (avaratra)
  g += `<path d="M 260 80 L 480 80 L 430 150 Q 370 185 300 150 Z" fill="#E4D2A8" stroke="#A98F5F" stroke-width="2"/>`;
  g += txt(370, 120, "ARABIA", 18, "#7A6234", "bold");
  // Azia atsimo atsinanana (atsinanana ambony)
  g += `<path d="M 880 80 L 1100 80 L 1100 260 Q 1010 240 950 170 Q 910 120 880 80 Z" fill="#D7C29E" stroke="#A98F5F" stroke-width="2"/>`;
  g += txt(1000, 130, "AZIA ATSIMO", 16, "#7A6234", "bold");
  g += txt(1000, 152, "ATSINANANA", 16, "#7A6234", "bold");
  // Eoropa (fanamarihana avaratra andrefana)
  g += `<rect x="30" y="60" width="0" height="0" fill="none"/>`;
  // Madagasikara
  g += `<path d="M 560 300 Q 600 260 625 295 Q 660 350 655 430 Q 650 520 600 600 Q 560 640 540 590 Q 515 500 525 410 Q 530 340 560 300 Z" fill="${GREEN}" stroke="#1B5E20" stroke-width="3"/>`;
  g += txt(590, 460, "MADAGASIKARA", 17, "white", "bold");
  // Zana-tsipika (flèches)
  const fleche = (x1, y1, x2, y2, color, label, lx, ly) => {
    const dx = x2 - x1, dy = y2 - y1, L = Math.hypot(dx, dy), ux = dx / L, uy = dy / L;
    const ax = x2 - ux * 18, ay = y2 - uy * 18;
    let s = `<line x1="${x1}" y1="${y1}" x2="${ax}" y2="${ay}" stroke="${color}" stroke-width="5" stroke-dasharray="12 7"/>`;
    s += `<polygon points="${x2},${y2} ${ax - uy * 9},${ay + ux * 9} ${ax + uy * 9},${ay - ux * 9}" fill="${color}"/>`;
    s += `<rect x="${lx - 4}" y="${ly - 18}" width="${label.length * 8.6 + 10}" height="24" fill="white" opacity="0.85" rx="4"/>`;
    s += txt(lx, ly, label, 15, color, "bold", "start");
    return s;
  };
  if (lettres) {
    g += fleche(960, 200, 655, 380, OCRE, "A", 830, 260);
    g += fleche(210, 300, 528, 400, "#7A4E9E", "B", 330, 330);
    g += fleche(380, 165, 590, 285, PINK, "D", 470, 200);
    g += fleche(120, 640, 545, 600, BLUE, "E", 300, 600);
    g += txt(W / 2, H - 20, "Fenoy : avy aiza avy ireo mpifindra monina A, B, D ary E ?", 17, GREY);
  } else {
    g += fleche(960, 200, 655, 380, OCRE, "Aostronezianina (taonjato III-IV)", 700, 235);
    g += fleche(210, 300, 528, 400, "#7A4E9E", "Afrikanina (VII-VIII)", 280, 340);
    g += fleche(380, 165, 590, 285, PINK, "Arabo-silamo (IX)", 400, 215);
    g += fleche(120, 640, 545, 600, BLUE, "Eoropeanina (XV)", 250, 585);
    g += txt(W / 2, H - 20, "Sary tsotra tsy misy maridrefy — natao hianarana ny fiavian'ireo razamben'ny Malagasy", 15, GREY);
  }
  return { file, svg: svgDoc(W, H, g) };
}

// =============== IREO SARY ===============
const jobs = [];

// ---------- IMG2 : sary faha-2 isaky ny seho (ao amin'ny LESONA) ----------
jobs.push(colTable("img2_s01.png", "Ny dingana enina amin'ny tetikasa fanadihadiana am-bava", [
  { titre: "1-2 | Fiomanana", color: GREEN, items: ["Safidy ny lohahevitra", "Fanomanana ny", "fanontaniana"] },
  { titre: "3-4 | Fanadihadiana", color: PINK, items: ["Fitadiavana ny olona", "hanontaniana", "Fotoana sy resaka"] },
  { titre: "5-6 | Tatitra", color: BLUE, items: ["Fandraiketana", "an-tsoratra", "Famelabelarana"] },
], { h: 320 }));

jobs.push(boxes("img2_s02.png", "Ny fanadihadiana am-bava mahomby", "FANADIHADIANA", [
  { titre: "Toe-tsaina", color: GREEN, items: ["fanajana", "fihainoana tsara", "fisaorana"] },
  { titre: "Fitaovana", color: PINK, items: ["kahie sy penina", "fanontaniana voaomana", "fandraisam-peo (raha misy)"] },
  { titre: "Fitandremana", color: BLUE, items: ["mampitaha loharano", "mety miova ny", "tantara am-bava"] },
], { h: 380 }));

jobs.push(bandFrise("img2_s04.png", "Ireo vanim-potoana lehiben'ny Tantara", -3500, 2100, [
  { from: -3500, to: -3000, label: "…", color: GREY, fromLabel: "Soratra", sub: "Prehistoara" },
  { from: -3000, to: 476, label: "ANDRO TALOHA", color: OCRE, fromLabel: "-3000" },
  { from: 476, to: 1492, label: "ANDRO|ANTENATENANY", color: BLUE },
  { from: 1492, to: 1789, label: "MAODERINA", color: PINK },
  { from: 1789, to: 2100, label: "ANKEHITRINY", color: GREEN },
], { endLabel: "izao" }));

jobs.push(colTable("img2_s05.png", "Ny dingana lehibe tamin'ny fivoaran'ny olombelona", [
  { titre: "Aostralopiteka", color: GREY, items: ["nitsangana tamin'ny", "tongotra roa"] },
  { titre: "Homo habilis", color: OCRE, items: ["fitaovana vato", "voalohany"] },
  { titre: "Homo erectus", color: BLUE, items: ["nahay nampiasa", "ny afo"] },
  { titre: "Homo sapiens", color: GREEN, items: ["olombelona hendry :", "isika ankehitriny"] },
], { h: 300 }));

jobs.push(boxes("img2_s07.png", "Mezopotamia : sivilizasiona voalohany", "MEZOPOTAMIA", [
  { titre: "Toerana", color: OCRE, items: ["eo anelanelan'i", "Tigra sy Eofrata"] },
  { titre: "Tanàna voalohany", color: PINK, items: ["Uruk", "(-3400 / -2900)"] },
  { titre: "Soratra voalohany", color: BLUE, items: ["tokony ho -3500", "sary famantarana ->", "soratra kioneiforma"] },
], { h: 400 }));

jobs.push(eventFrise("img2_s08.png", "Ejipta : ireo empira telo nifandimby", -2900, -900, [
  { y: -2700, date: "-2700 / -2200", lines: ["Empira taloha", "(piramida)"] },
  { y: -2050, date: "-2050 / -1800", lines: ["Empira", "antenatenany"], color: BLUE },
  { y: -1600, date: "-1600 / -1100", lines: ["Empira vaovao", "(fiitarana)"], color: OCRE },
], { h: 380 }));

jobs.push(boxes("img2_s09.png", "Ny fahefan'ny farao", "FARAO", [
  { titre: "Ara-politika", color: PINK, items: ["mpanjaka manam-", "pahefana feno", "mibaiko ny fanjakana"] },
  { titre: "Ara-pivavahana", color: BLUE, items: ["heverina ho zanaky", "ny andriamanitra"] },
  { titre: "Ara-miaramila", color: OCRE, items: ["lehiben'ny tafika", "miaro ny firenena"] },
], { h: 390 }));

jobs.push(colTable("img2_s10.png", "Sparta sy Atena : tanàna roa tsy mitovy", [
  { titre: "SPARTA", color: OCRE, items: ["tanàna mpiady", "ny miaramila no", "voalohan-daharana", "fitaizana henjana"] },
  { titre: "ATENA", color: GREEN, items: ["niandohan'ny demokrasia", "ny vahoaka no mitondra", "zo sy adidin'ny", "olom-pirenena"] },
], { h: 360 }));

jobs.push(bandFrise("img2_s11.png", "Roma : ireo fitondrana telo nifandimby", -650, 550, [
  { from: -600, to: -509, label: "MPANJAKA", color: OCRE, sub: "etriska" },
  { from: -509, to: -27, label: "REPOBLIKA", color: BLUE },
  { from: -27, to: 476, label: "EMPIRA", color: PINK, fromLabel: "27" },
], { endLabel: "476" }));

jobs.push(boxes("img2_s12.png", "Ny lova antika hita eto Madagasikara", "LOVA ANTIKA", [
  { titre: "Demokrasia", color: GREEN, items: ["fifidianana", "ny vahoaka no", "loharanom-pahefana"] },
  { titre: "Zo sy adidy", color: PINK, items: ["zon'ny olom-pirenena", "adidy amin'ny firenena"] },
  { titre: "Lalàna sy hafa", color: BLUE, items: ["fitsarana, lalàna", "kalandrie, abidy"] },
], { h: 390 }));

jobs.push(bandFrise("img2_s14.png", "Ny Andro Antenatenany (476 - 1492)", 476, 1492, [
  { from: 476, to: 1000, label: "MOYEN AGE AMBONY", color: BLUE, sub: "fiandohana" },
  { from: 1000, to: 1300, label: "XI-XIII|fandrosoana", color: GREEN, sub: "fambolena, kroazada" },
  { from: 1300, to: 1492, label: "XIV-XV|loza", color: OCRE, sub: "ady zato taona, pesta" },
]));

jobs.push(pyramide("img2_s15.png", "Ny rafitra feodaly", [
  { titre: "SUZERAIN (mpanjaka lehibe)", color: PINK, sub: "eo an-tampony" },
  { titre: "SEIGNEUR (tompomenakely)", color: OCRE, sub: "manome fief ny vasaly" },
  { titre: "VASALY sy CHEVALIER", color: BLUE, sub: "manompo sy miady ho an'ny tompony" },
  { titre: "SERF sy VILAIN (mpiasa tany)", color: GREEN, sub: "miasa ny tany, mandoa haba" },
]));

jobs.push(boxes("img2_s16.png", "Ny fandaminan'ny Eglizy tamin'ny Andro Antenatenany", "PAPA sy KARDINALY", [
  { titre: "Klerjy sekiolera", color: BLUE, items: ["miaina eo anivon'ny", "vahoaka", "eveka, kiore"] },
  { titre: "Klerjy regiolera", color: OCRE, items: ["miaina ao amin'ny", "monasitera", "abbé, moanina"] },
  { titre: "Anjara asa", color: GREEN, items: ["fampianarana", "fanampiana ny mahantra", "mandamina ny fotoana"] },
], { h: 400 }));

jobs.push(eventFrise("img2_s17.png", "Ny fahaterahan'ny Silamo (taonjato VII)", 565, 645, [
  { y: 570, date: "tokony ho 570", lines: ["teraka tany Lameka", "(Arabia) i Mohammed"] },
  { y: 610, date: "tokony ho 610", lines: ["nanomboka nitory", "ny finoana izy"], color: BLUE },
  { y: 622, date: "622", lines: ["nifindra tany Medina", "(hejira)"], color: OCRE },
  { y: 632, date: "632", lines: ["nodimandry", "i Mohammed"], color: GREY },
]));

jobs.push(eventFrise("img2_s18.png", "Ny fandresen'ny Silamo (630 - 750)", 620, 760, [
  { y: 631, date: "630-632", lines: ["fiitarana tany", "Arabia manontolo"] },
  { y: 644, date: "632-656", lines: ["kalifa efatra", "voalohany"], color: BLUE },
  { y: 705, date: "661-750", lines: ["Omeyyades :", "hatrany Espaina"], color: OCRE },
]));

jobs.push(colTable("img2_s19.png", "Fampitahana : sivilizasiona roa tamin'ny Andro Antenatenany", [
  { titre: "TANDREFANA|(kristianina)", color: BLUE, items: ["fivavahana kristianina", "teny latina", "feodaly sy chevalier", "katedraly"] },
  { titre: "SILAMO|(arabo)", color: GREEN, items: ["finoana silamo", "teny arabo", "kalifa", "moske, siansa, isa arabo"] },
], { h: 380 }));

jobs.push(eventFrise("img2_s21.png", "Ireo onjam-pifindra-monina nankany Madagasikara", 150, 2000, [
  { y: 350, date: "taonjato III-IV", lines: ["aostronezianina", "(razamben'ny Vazimba)"] },
  { y: 700, date: "VII-VIII", lines: ["afrikanina ;", "indonezianina (VII)"], color: "#7A4E9E" },
  { y: 850, date: "IX", lines: ["arabo-silamo", "(Antalaotra...)"], color: OCRE },
  { y: 1450, date: "XV", lines: ["eoropeanina", "(portogey...)"], color: BLUE },
  { y: 1850, date: "XIX", lines: ["karana (indianina,", "indopakistane)"], color: GREY },
]));

jobs.push(boxes("img2_s22.png", "Ny arkeolojia sy ny toeram-ponenana voalohany", "ARKEOLOJIA", [
  { titre: "Inona no hitany ?", color: OCRE, items: ["vilany tany, taolana", "fitaovana, toeram-", "ponenana taloha"] },
  { titre: "Inona no ianarany ?", color: BLUE, items: ["ny fotoana sy ny toerana", "nipetrahan'ny olona", "ny fomba fiainany"] },
  { titre: "Nahoana izy no ilaina ?", color: GREEN, items: ["tsy nisy soratra", "ny Malagasy voalohany"] },
], { h: 400 }));

jobs.push(colTable("img2_s23.png", "Vahoaka iray ny Malagasy", [
  { titre: "Fitoviana", color: GREEN, items: ["fiompiana omby", "fambolena vary", "teny iray fototra", "fomba amam-panao"] },
  { titre: "Fahasamihafana", color: PINK, items: ["fitenim-paritra", "fitafiana", "fomba vitsivitsy", "= harena, tsy fisarahana"] },
], { h: 360 }));

jobs.push(colTable("img2_s25.png", "Ny lova aostronezianina sy afrikanina", [
  { titre: "Aostronezianina", color: OCRE, items: ["teny : vary, omby...", "fambolena vary", "lakana misy fanary", "jono"] },
  { titre: "Afrikanina", color: "#7A4E9E", items: ["teny bantoa sy soahily", "anaram-biby maro", "fiompiana omby"] },
], { h: 360 }));

jobs.push(boxes("img2_s26.png", "Ny lova arabo-silamo", "LOVA ARABO-SILAMO", [
  { titre: "Varotra", color: OCRE, items: ["toeram-barotra", "vola sy fandanjana", "isa arabo"] },
  { titre: "Soratra sy fotoana", color: BLUE, items: ["sorabe (katibo)", "anaran'ny andro", "sy ny volana"] },
  { titre: "Fomba", color: PINK, items: ["sikidy, fanandroana", "famorana", "mpanjaka masina"] },
], { h: 400 }));

jobs.push(boxes("img2_s27.png", "Ny lova tandrefana", "LOVA TANDREFANA", [
  { titre: "Toekarena", color: OCRE, items: ["varotra an-dranomasina", "indostria", "ariary (avy amin'ny real)"] },
  { titre: "Fanjakana", color: BLUE, items: ["fanjakana maoderina", "tafika matihanina"] },
  { titre: "Fivavahana sy sekoly", color: GREEN, items: ["kristianisma (LMS)", "sekoly 1818 (Toamasina)", "abidy latina 1823"] },
], { h: 400 }));

jobs.push(bandFrise("img2_s29.png", "Ny fivoaran'ny fandaminana ara-politika teto Madagasikara", 400, 1900, [
  { from: 400, to: 1500, label: "FOKO sy|FIKAMBANAM-POKO", color: OCRE, fromLabel: "taonjato V", sub: "loham-poko, mpanjaka kely" },
  { from: 1500, to: 1810, label: "FANJAKANA|MALAGASY", color: BLUE, sub: "Sakalava, Betsimisaraka, Merina" },
  { from: 1810, to: 1896, label: "FANJAKAN'I|MCAR", color: PINK, sub: "Radama I..." },
], { endLabel: "1896" }));

jobs.push(boxes("img2_s30.png", "Vondrom-poko 18, vahoaka iray", "NY MALAGASY", [
  { titre: "Tsy misy", color: GREY, items: ["ethnie", "tribu"] },
  { titre: "Fa misy", color: GREEN, items: ["vondrom-poko 18", "ao anaty firenena iray"] },
  { titre: "Porofo", color: PINK, items: ["iray razana", "iray teny fototra", "iray tantara"] },
], { h: 400 }));

// ---------- IMG3 : sary faha-3 ho an'ny lesona sasany ----------
jobs.push(boxes("img3_s10.png", "Ny olom-pirenena tao Atena", "OLOM-PIRENENA", [
  { titre: "Zo", color: GREEN, items: ["mandray anjara amin'ny", "fivoriam-bahoaka", "mifidy sy fidina"] },
  { titre: "Adidy", color: PINK, items: ["miaro ny tanàna", "mandoa hetra", "manaja ny lalàna"] },
], { h: 380 }));

jobs.push(carteMigrations("img3_s21.png"));

jobs.push(colTable("img3_s29.png", "Ireo fanjakana malagasy lehibe (1500 - 1810)", [
  { titre: "SAKALAVA", color: OCRE, items: ["Menabe :", "Andriandahifotsy", "Boina :", "Andriamandisoarivo"] },
  { titre: "BETSIMISARAKA", color: BLUE, items: ["Ratsimilaho", "(1712-1750)", "nampiray ny", "morontsiraka atsinanana"] },
  { titre: "MERINA", color: GREEN, items: ["Andrianampoinimerina", "(1787-1810)", "nampiray an'Imerina"] },
], { h: 400 }));

// ---------- TOVANA ----------
jobs.push(bandFrise("img_annexe_frise.png", "Frizy famintinana : ireo vanim-potoana lehibe", -3500, 2100, [
  { from: -3500, to: -3000, label: "…", color: GREY, fromLabel: "Soratra", sub: "Prehistoara" },
  { from: -3000, to: 476, label: "ANDRO TALOHA", color: OCRE, fromLabel: "-3000" },
  { from: 476, to: 1492, label: "ANDRO|ANTENATENANY", color: BLUE },
  { from: 1492, to: 1789, label: "MAODERINA", color: PINK },
  { from: 1789, to: 2100, label: "ANKEHITRINY", color: GREEN },
], { endLabel: "izao" }));

jobs.push(bandFrise("img_annexe_friseMG.png", "Frizy famintinana : Madagasikara (taonjato III - 1896)", 200, 1900, [
  { from: 250, to: 900, label: "FIFINDRA-MONINA", color: "#7A4E9E", fromLabel: "III", sub: "aostronezianina, afrikanina, silamo" },
  { from: 900, to: 1500, label: "FOKO sy|FIKAMBANANA", color: OCRE, fromLabel: "IX" },
  { from: 1500, to: 1810, label: "FANJAKANA|MALAGASY", color: BLUE },
  { from: 1810, to: 1896, label: "FANJAKAN'I|MCAR", color: PINK },
], { endLabel: "1896" }));

jobs.push(carteMigrations("img_annexe_carteMigr.png"));

// Sari-tany moana : Madagasikara — renivohitra 1-6
(() => {
  const W = 800, H = 900;
  let g = `<rect width="${W}" height="${H}" fill="#DDEEFA"/>`;
  g += txt(W / 2, 40, "Sari-tany : Madagasikara sy ireo renivohitra enina", 22, GREEN, "bold");
  g += `<path d="M 390 120 Q 450 80 480 130 Q 520 200 510 300 Q 505 420 470 550 Q 440 680 380 790 Q 330 840 300 770 Q 260 650 270 480 Q 280 300 330 190 Q 355 140 390 120 Z" fill="${GREEN}" stroke="#1B5E20" stroke-width="4"/>`;
  const villes = [
    [445, 150, "1"], [330, 300, "2"], [480, 380, "3"], [400, 430, "4"], [400, 570, "5"], [305, 700, "6"],
  ];
  for (const [x, y, num] of villes) {
    g += `<circle cx="${x}" cy="${y}" r="16" fill="white" stroke="${PINK}" stroke-width="4"/>`;
    g += txt(x, y + 6, num, 19, "#8E0E3F", "bold");
  }
  g += txt(W / 2, H - 55, "Renivohitra : 1 Antsiranana - 2 Mahajanga - 3 Toamasina", 15, GREY);
  g += txt(W / 2, H - 30, "4 Antananarivo - 5 Fianarantsoa - 6 Toliara", 15, GREY);
  jobs.push({ file: "img_annexe_carteMG.png", svg: svgDoc(W, H, g) });
})();

// ---------- FANAZARAN-TENA AN-TSARY ----------
// Frizy hofenoina : ireo vanim-potoana (S4)
(() => {
  const W = 1100, H = 340;
  let g = txt(W / 2, 40, "Frizy hofenoina : ireo vanim-potoana efatra amin'ny Tantara", 24, GREEN, "bold");
  const y0 = -3000, y1 = 2100, mL = 70, mR = 50;
  const X = (yr) => mL + (yr - y0) / (y1 - y0) * (W - mL - mR);
  const bandY = 130, bandH = 70;
  const bands = [
    { from: -3000, to: 476, lettre: "A", color: OCRE },
    { from: 476, to: 1492, lettre: "B", color: BLUE },
    { from: 1492, to: 1789, lettre: "D", color: PINK },
    { from: 1789, to: 2100, lettre: "E", color: GREEN },
  ];
  for (const b of bands) {
    const x1 = X(b.from), x2 = X(b.to);
    g += `<rect x="${x1}" y="${bandY}" width="${x2 - x1}" height="${bandH}" fill="${b.color}" rx="6"/>`;
    g += txt((x1 + x2) / 2, bandY + 45, b.lettre, 30, "white", "bold");
    g += txt(x1, bandY + bandH + 30, String(b.from), 16, GREY, "bold");
  }
  g += txt(X(2100), bandY + bandH + 30, "izao", 16, GREY, "bold");
  g += `<line x1="${mL}" y1="${bandY + bandH + 6}" x2="${W - mR}" y2="${bandY + bandH + 6}" stroke="#999" stroke-width="1"/>`;
  g += txt(W / 2, H - 25, "Soraty ny anaran'ny vanim-potoana mifanandrify amin'ny litera A, B, D ary E", 17, GREY);
  jobs.push({ file: "img_exo_frise.png", svg: svgDoc(W, H, g) });
})();

// Piramida feodaly hofenoina (S15)
jobs.push(pyramide("img_exo_feodal.png", "Piramida hofenoina : ny rafitra feodaly", [
  { titre: "A", color: PINK },
  { titre: "B", color: OCRE },
  { titre: "D", color: BLUE },
  { titre: "E", color: GREEN },
], { h: 500 }));

// Sari-tany hofenoina : ny fifindra-monina (S21)
jobs.push(carteMigrations("img_exo_carteMigr.png", { lettres: true, titre: "Sari-tany hofenoina : avy aiza ireo mpifindra monina ?" }));

// =============== FAMOKARANA ===============
(async () => {
  for (const j of jobs) {
    const out = path.join(IMG, j.file);
    await sharp(Buffer.from(j.svg)).png().toFile(out);
    console.log("OK", j.file);
  }
})();
