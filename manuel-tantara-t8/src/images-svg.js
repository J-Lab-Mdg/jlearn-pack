// images-svg.js — T8 : mamokatra ny sary SVG -> PNG (frizy, diagrama, sari-tany) amin'ny sharp
const sharp = require("sharp");
const path = require("path");

const IMG = path.join(__dirname, "..", "images");
const GREEN = "#2E7D32", PINK = "#C2185B", OCRE = "#B25000", BLUE = "#1565C0", GREY = "#555555", VIOLET = "#7A4E9E";
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

// ---------- piramida ----------
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
  });
  return { file, svg: svgDoc(W, H, g) };
}

// ---------- ny varotra telozoro (schéma triangle) ----------
function triangleVarotra(file, opts = {}) {
  const W = 1100, H = 640;
  const lettres = opts.lettres || false;
  let g = `<rect width="${W}" height="${H}" fill="#EAF3FB"/>`;
  g += txt(W / 2, 42, opts.titre || "Ny varotra telozoro (taonjato XVI-XVIII)", 25, GREEN, "bold");
  // Toerana telo
  const node = (x, y, label, color) => {
    let s = `<rect x="${x - 120}" y="${y - 34}" width="240" height="64" fill="${color}" rx="12"/>`;
    s += txt(x, y + 6, label, 22, "white", "bold");
    return s;
  };
  const E = [760, 140], AM = [220, 380], AF = [820, 480];
  g += node(E[0], E[1], "EOROPA", BLUE);
  g += node(AM[0], AM[1], "AMERIKA", OCRE);
  g += node(AF[0], AF[1], "AFRIKA", VIOLET);
  const fleche = (x1, y1, x2, y2, color, label1, label2, lx, ly) => {
    const dx = x2 - x1, dy = y2 - y1, L = Math.hypot(dx, dy), ux = dx / L, uy = dy / L;
    const ax = x2 - ux * 20, ay = y2 - uy * 20;
    let s = `<line x1="${x1}" y1="${y1}" x2="${ax}" y2="${ay}" stroke="${color}" stroke-width="6" stroke-dasharray="14 8"/>`;
    s += `<polygon points="${x2},${y2} ${ax - uy * 11},${ay + ux * 11} ${ax + uy * 11},${ay - ux * 11}" fill="${color}"/>`;
    const wBox = Math.max(label1.length, (label2 || "").length) * 8.6 + 14;
    s += `<rect x="${lx - wBox / 2}" y="${ly - 20}" width="${wBox}" height="${label2 ? 46 : 26}" fill="white" opacity="0.9" rx="5"/>`;
    s += txt(lx, ly, label1, 15, color, "bold");
    if (label2) s += txt(lx, ly + 20, label2, 14, color);
    return s;
  };
  if (lettres) {
    g += fleche(700, 175, 790, 440, BLUE, "A", "", 700, 320);
    g += fleche(695, 480, 350, 400, VIOLET, "B", "", 520, 470);
    g += fleche(255, 340, 640, 165, OCRE, "D", "", 430, 230);
    g += txt(W / 2, H - 25, "Fenoy : inona avy no nafindra tamin'ny lalana A, B ary D ?", 17, GREY);
  } else {
    g += fleche(700, 175, 790, 440, BLUE, "1. entana avy any Eoropa", "(basy, lamba, divay...)", 660, 315);
    g += fleche(695, 480, 350, 400, VIOLET, "2. andevo avy any Afrika", "(lalana mahatsiravina)", 520, 555);
    g += fleche(255, 340, 640, 165, OCRE, "3. vokatry ny plantations", "(siramamy, landihazo, kakao)", 400, 205);
    g += txt(W / 2, H - 25, "Sary tsotra — mampiseho ny fizotry ny varotra telozoro", 15, GREY);
  }
  return { file, svg: svgDoc(W, H, g) };
}

// ---------- sari-tany : ireo fanjakana malagasy (XVI-XVIII) ----------
function carteFanjakana(file, opts = {}) {
  const W = 800, H = 900;
  const lettres = opts.lettres || false;
  let g = `<rect width="${W}" height="${H}" fill="#DDEEFA"/>`;
  g += txt(W / 2, 40, opts.titre || "Ireo fanjakana malagasy (taonjato XVI-XVIII)", 22, GREEN, "bold");
  g += `<path d="M 390 120 Q 450 80 480 130 Q 520 200 510 300 Q 505 420 470 550 Q 440 680 380 790 Q 330 840 300 770 Q 260 650 270 480 Q 280 300 330 190 Q 355 140 390 120 Z" fill="#CDE6C9" stroke="#1B5E20" stroke-width="4"/>`;
  const zones = lettres ? [
    [440, 135, "1", PINK], [320, 285, "2", PINK], [330, 500, "3", PINK],
    [475, 320, "4", PINK], [450, 600, "5", PINK], [355, 740, "6", PINK], [395, 400, "7", PINK],
  ] : [];
  if (lettres) {
    for (const [x, y, num, color] of zones) {
      g += `<circle cx="${x}" cy="${y}" r="17" fill="white" stroke="${color}" stroke-width="4"/>`;
      g += txt(x, y + 6, num, 19, "#8E0E3F", "bold");
    }
    g += txt(W / 2, H - 80, "Fenoy : 1 avaratra - 2 avaratra andrefana - 3 andrefana", 15, GREY);
    g += txt(W / 2, H - 55, "4 atsinanana - 5 atsimo atsinanana - 6 atsimo - 7 afovoan-tany", 15, GREY);
    g += txt(W / 2, H - 25, "Soraty ny anaran'ny fanjakana mifanandrify amin'ny isa tsirairay", 16, GREY, "bold");
  } else {
    const lbl = (x, y, name, color, ax, ay) => {
      let s = `<line x1="${ax}" y1="${ay}" x2="${x}" y2="${y - 8}" stroke="${color}" stroke-width="2"/>`;
      s += `<rect x="${x - name.length * 4.8 - 8}" y="${y - 22}" width="${name.length * 9.6 + 16}" height="28" fill="${color}" rx="6"/>`;
      s += txt(x, y - 2, name, 15, "white", "bold");
      return s;
    };
    g += lbl(610, 120, "ANTANKARANA", PINK, 448, 140);
    g += lbl(150, 250, "BOINA (sakalava)", VIOLET, 318, 285);
    g += lbl(140, 500, "MENABE (sakalava)", VIOLET, 300, 500);
    g += lbl(640, 300, "BETSIMISARAKA", BLUE, 490, 320);
    g += lbl(640, 590, "ANTEMORO sy", OCRE, 462, 590);
    g += txt(640, 610, "ANTESAKA", 14, OCRE, "bold");
    g += lbl(560, 780, "MAHAFALY sy", "#8E5B3C", 380, 760);
    g += txt(560, 800, "ANTANDROY", 14, "#8E5B3C", "bold");
    g += lbl(150, 400, "IMERINA sy", GREEN, 385, 395);
    g += txt(150, 420, "BETSILEO (afovoan-tany)", 13, GREEN, "bold");
    g += txt(W / 2, H - 25, "Sary tsotra tsy misy maridrefy — ny toerana amin'ny ankapobeny ihany no aseho", 15, GREY);
  }
  return { file, svg: svgDoc(W, H, g) };
}

// =============== IREO SARY ===============
const jobs = [];

// ---------- IMG2 : sary faha-2 isaky ny seho (ao amin'ny LESONA) ----------
jobs.push(colTable("img2_s01.png", "Ny dingana enina amin'ny fanadihadiana am-bava", [
  { titre: "1-2 | Fiomanana", color: GREEN, items: ["Fanapahana ny", "lohahevitra", "Fanomanana ny", "fanontaniana"] },
  { titre: "3-4 | Resadresaka", color: PINK, items: ["Fanaovana ny", "resadresaka", "Fandraiketana"] },
  { titre: "5-6 | Famokarana", color: BLUE, items: ["Fitsikerana sy", "fandikana", "Fandrafetana ny vokatra"] },
], { h: 340 }));

jobs.push(boxes("img2_s02.png", "Ny famokarana ny loharano am-bava", "LOHARANO AM-BAVA", [
  { titre: "Olan-kevitra", color: GREEN, items: ["inona no tiana", "hovaliana ?"] },
  { titre: "Fitsikerana", color: PINK, items: ["iza no miteny ?", "azo itokisana ve ?", "ampitahaina"] },
  { titre: "Fandrafetana", color: BLUE, items: ["tatitra an-tsoratra", "famelabelarana"] },
], { h: 380 }));

jobs.push(eventFrise("img2_s04.png", "Ny Andro Maoderina (1492 - 1789)", 1470, 1810, [
  { y: 1492, date: "1492", lines: ["C. Colomb", "tany Amerika"] },
  { y: 1517, date: "1517", lines: ["niandohan'ny", "R\u00e9forme (Luther)"], color: BLUE },
  { y: 1522, date: "1519-1522", lines: ["Magellan :", "fanodidinana ny tany"], color: OCRE },
  { y: 1600, date: "taonjato XVI", lines: ["Renaissance", "niroborobo"], color: VIOLET },
  { y: 1789, date: "1789", lines: ["Revolisiona", "frantsay"], color: GREY },
]));

jobs.push(eventFrise("img2_s05.png", "Ireo mpikaroka lehibe (1488 - 1522)", 1483, 1527, [
  { y: 1488, date: "1488", lines: ["B. Diaz :", "Cap Bonne-Esp\u00e9rance"] },
  { y: 1492, date: "1492", lines: ["C. Colomb :", "Amerika"], color: BLUE },
  { y: 1498, date: "1498", lines: ["Vasco de Gama :", "Calicut (Indes)"], color: OCRE },
  { y: 1500, date: "1500", lines: ["Di\u00e9go Diaz : Mcar ;", "Vespucci"], color: VIOLET },
  { y: 1521, date: "1519-1522", lines: ["Magellan :", "fanodidinana ny tany"], color: GREY },
]));

jobs.push(boxes("img2_s06.png", "Ny varotra andevo", "VAROTRA ANDEVO", [
  { titre: "Antony", color: PINK, items: ["mpiasa ho an'ny", "plantations any Amerika", "akora ho an'i Eoropa"] },
  { titre: "Fizotra", color: BLUE, items: ["varotra telozoro :", "Eoropa - Afrika -", "Amerika"] },
  { titre: "Vokany", color: OCRE, items: ["fihenan'ny mponina", "tany Afrika", "fanankarenan'i Eoropa"] },
], { h: 400 }));

jobs.push(boxes("img2_s07.png", "Ny Renaissance", "RENAISSANCE", [
  { titre: "Zavakanto", color: PINK, items: ["L\u00e9onard de Vinci", "Michel-Ange, Rapha\u00ebl", "Donatello"] },
  { titre: "Siansa", color: BLUE, items: ["Copernic :", "ny tany mihodina", "manodidina ny masoandro"] },
  { titre: "Toe-tsaina", color: GREEN, items: ["humanisme :", "ny olombelona no", "ifantohana"] },
], { h: 400 }));

jobs.push(boxes("img2_s08.png", "Ny R\u00e9forme (taonjato XVI)", "REFORME", [
  { titre: "Antony", color: OCRE, items: ["tsy fahatokisana", "ny Eglizy", "humanistes, imprimerie"] },
  { titre: "Mpitarika", color: PINK, items: ["Luther (Alemaina)", "Calvin (Frantsa-Soisa)", "Henri VIII (Angletera)"] },
  { titre: "Vokany", color: BLUE, items: ["protestantisme", "anglicanisme", "contre-r\u00e9forme"] },
], { h: 400 }));

jobs.push(eventFrise("img2_s09.png", "Madagasikara tamin'ny Andro Maoderina", 1480, 1800, [
  { y: 1500, date: "1500", lines: ["Di\u00e9go Diaz :", "hitany i Madagasikara"] },
  { y: 1643, date: "1643", lines: ["comptoir : Fort-Dauphin", "(frantsay)"], color: BLUE },
  { y: 1700, date: "taonjato XVII-XVIII", lines: ["niroboroboan'ny fanjakana", "amoron-tsiraka"], color: GREEN },
  { y: 1774, date: "1774", lines: ["Beniowski", "tao Antongil"], color: OCRE },
]));

jobs.push(pyramide("img2_s11.png", "Ny sokajy telo tamin'ny Ancien R\u00e9gime", [
  { titre: "KLERJY", color: BLUE, sub: "mivavaka - manana tombontsoa, tsy mandoa hetra" },
  { titre: "ANDRIANA", color: PINK, sub: "miady - manana tombontsoa, tsy mandoa hetra" },
  { titre: "SARAMBABEM-BAHOAKA (tiers \u00e9tat)", color: OCRE, sub: "miasa sy mandoa ny hetra rehetra - 97%-n'ny mponina" },
], { h: 420 }));

jobs.push(colTable("img2_s12.png", "Ireo mpahay siansa sy filozofan'ny Fahazavana", [
  { titre: "SIANSA", color: BLUE, items: ["Lavoisier :", "firafitry ny rivotra", "Franklin :", "paratonnerre"] },
  { titre: "POLITIKA", color: PINK, items: ["Montesquieu : fisarahan'ny", "fahefana", "Rousseau : sitrapon'ny", "vahoaka"] },
  { titre: "FAHALALANA", color: GREEN, items: ["Voltaire : fandeferana", "Kant : ny saina", "Diderot :", "Encyclop\u00e9die"] },
], { h: 400 }));

jobs.push(eventFrise("img2_s13.png", "Ny revolisiona roa (1776 - 1792)", 1770, 1798, [
  { y: 1776, date: "4 jolay 1776", lines: ["fahaleovantenan'i", "Etazonia"] },
  { y: 1783, date: "1783", lines: ["nifarana ny ady", "fahaleovantena"], color: GREY },
  { y: 1789.5, date: "14 jolay 1789", lines: ["fakana ny Bastille ;", "DDHC (aogositra)"], color: BLUE },
  { y: 1792, date: "1792", lines: ["Repoblika voalohany", "frantsay"], color: OCRE },
]));

jobs.push(colTable("img2_s14.png", "Ny revolisiona indostrialy roa", [
  { titre: "REVOLISIONA I|(tapaky ny XVIII - XIX)", color: OCRE, items: ["tany Angletera", "etivam-po", "landihazo, arina", "lalamby"] },
  { titre: "REVOLISIONA II|(1850 - 1914)", color: BLUE, items: ["herinaratra, solika, vy", "tsipika famokarana", "taylorisme, fordisme", "Eoropa, Etazonia, Japana"] },
], { h: 400 }));

jobs.push(boxes("img2_s15.png", "Nahoana no nanangana empira mpanjanaka ?", "ANTONY", [
  { titre: "Toekarena", color: OCRE, items: ["akora ho an'ny indostria", "tsena vaovao"] },
  { titre: "Mponina", color: BLUE, items: ["fifindra-monina", "eoropeanina"] },
  { titre: "Politika sy hafa", color: PINK, items: ["fifaninanan'ny firenena", "\u00ab mission civilisatrice \u00bb"] },
], { h: 390 }));

jobs.push(carteFanjakana("img2_s17.png"));

jobs.push(pyramide("img2_s18.png", "Ny ambaratongan'ny fiaraha-monina malagasy fahiny", [
  { titre: "MPANJAKA", color: PINK, sub: "masina - tompon'ny tany sy ny vahoaka" },
  { titre: "ANDRIANA sy MANAM-BONINAHITRA", color: OCRE, sub: "manana tombontsoa" },
  { titre: "HOVA / VAHOAKA TSOTRA", color: BLUE, sub: "mpamboly, mpiompy, mpanao asa tanana" },
  { titre: "ANDEVO", color: GREY, sub: "tsy manan-jo, miasa ho an'ny tompony" },
]));

jobs.push(bandFrise("img2_s20.png", "Ireo mpanjaka nifandimby (1810 - 1896)", 1810, 1896, [
  { from: 1810, to: 1828, label: "RADAMA I", color: GREEN },
  { from: 1828, to: 1861, label: "RANAVALONA I", color: OCRE },
  { from: 1861, to: 1863, label: "", color: PINK, sub: "Radama II" },
  { from: 1863, to: 1868, label: "", color: VIOLET, sub: "Rasoherina" },
  { from: 1868, to: 1883, label: "RANAVALONA II", color: BLUE },
  { from: 1883, to: 1896, label: "RANAVALONA III", color: GREY },
], { h: 380 }));

jobs.push(boxes("img2_s21.png", "Ny fanavaozana nataon-dRadama I", "RADAMA I", [
  { titre: "Tafika", color: PINK, items: ["fitaovana vaovao", "fampiofanana", "eoropeanina"] },
  { titre: "Fampianarana", color: BLUE, items: ["sekoly LMS (1820)", "soratra latinina", "tanora tany Angletera"] },
  { titre: "Hafa", color: GREEN, items: ["asa tanana vaovao", "misionera kristianina", "fifanarahana 1817, 1820"] },
], { h: 400 }));

jobs.push(boxes("img2_s22.png", "Ny fandaminan'ny fitondrana hova (1864 - 1895)", "RAINILAIARIVONY", [
  { titre: "Tafika", color: PINK, items: ["foloalindahy", "postes : Mahabo,", "Marovoay, Tamatave..."] },
  { titre: "Lal\u00e0na sy vola", color: BLUE, items: ["code 305 articles (1881)", "hetra isan-karazany"] },
  { titre: "Fivavahana", color: GREEN, items: ["protestantisme :", "fivavaham-panjakana", "(1869)"] },
], { h: 400 }));

jobs.push(colTable("img2_s24.png", "Ny anton'ny fanjanahana an'i Madagasikara", [
  { titre: "ANTONY ANATINY", color: PINK, items: ["charte Lambert (1855)", "lova Jean Laborde", "fahalemen'ny", "fitondrana hova"] },
  { titre: "ANTONY IVELANY", color: BLUE, items: ["Berlin 1885", "convention de Zanzibar 1890", "revolisiona indostrialy", "\u00ab mission civilisatrice \u00bb"] },
], { h: 400 }));

jobs.push(pyramide("img2_s25.png", "Ny rafi-pitondrana mpanjanaka", [
  { titre: "GOVERNORA JENERALY", color: PINK, sub: "Frantsay - fara tampon'ny fahefana" },
  { titre: "PROVINCE", color: OCRE, sub: "lehibe frantsay" },
  { titre: "DISTRICT", color: BLUE, sub: "lehibe frantsay" },
  { titre: "CANTON", color: GREEN, sub: "mpiadidy malagasy notendrena - mpanatanteraka" },
]));

jobs.push(eventFrise("img2_s26.png", "Ireo hetsika nasionalista (1895 - 1947)", 1890, 1955, [
  { y: 1896, date: "1895-1898", lines: ["Menalamba"] },
  { y: 1905, date: "1904-1905", lines: ["Sadiavahy", "(sy 1914-1917)"], color: VIOLET },
  { y: 1914, date: "1913-1915", lines: ["VVS"], color: BLUE },
  { y: 1924, date: "1919-1930", lines: ["Ralaimongo :", "gazety, fitakiana"], color: OCRE },
  { y: 1947, date: "29 martsa 1947", lines: ["tolona lehibe", "(JINA, PANAMA)"], color: GREY },
]));

jobs.push(eventFrise("img2_s27.png", "Ny dia mankany amin'ny fahaleovantena (1947 - 1960)", 1944, 1963, [
  { y: 1947, date: "1947", lines: ["tolona sy", "famoretana"] },
  { y: 1956, date: "1956", lines: ["loi-cadre"], color: BLUE },
  { y: 1958, date: "14 oktobra 1958", lines: ["referendum :", "Repoblika voalohany"], color: OCRE },
  { y: 1960, date: "26 jona 1960", lines: ["FAHALEOVANTENA"], color: GREEN },
]));

jobs.push(colTable("img2_s29.png", "Ny karazana vakoka roa", [
  { titre: "HITA MASO|(mat\u00e9riel)", color: OCRE, items: ["tsangambato (rova...)", "toerana ara-arkeolojika", "sangan'asa kanto", "rakitsoratra (sorabe)"] },
  { titre: "TSY HITA MASO|(immat\u00e9riel)", color: GREEN, items: ["lovan-tsofina (angano...)", "seho an-tsehatra (hiragasy)", "fety sy fombafomba", "fahaiza-manao"] },
], { h: 400 }));

jobs.push(boxes("img2_s30.png", "Ny fiarovana sy ny fampitana ny vakoka", "VAKOKA", [
  { titre: "Lal\u00e0na", color: PINK, items: ["hitsivolana 82-029 (1982)", "didim-panjakana", "91-017 (1991)"] },
  { titre: "Mpiaro", color: BLUE, items: ["fanjakana (tranombakoka)", "UNESCO", "fokonolona, tsirairay"] },
  { titre: "Fampitana", color: GREEN, items: ["sekoly, fitsidihana", "fandraiketana ny", "lovan-tsofina"] },
], { h: 400 }));

// ---------- IMG3 : sary faha-3 ho an'ny lesona sasany ----------
jobs.push(triangleVarotra("img3_s06.png"));

jobs.push(eventFrise("img3_s15.png", "Ny fizarana an'izao tontolo izao (1885 - 1896)", 1882, 1899, [
  { y: 1885, date: "1884-1885", lines: ["konferansan'i Berlin :", "fizarana an'i Afrika"] },
  { y: 1890, date: "1890", lines: ["convention de Zanzibar :", "Mcar ho an'i Frantsa"], color: BLUE },
  { y: 1895, date: "1895", lines: ["ady franco-hova II :", "lavo Antananarivo"], color: OCRE },
  { y: 1896, date: "1896", lines: ["zanatany", "i Madagasikara"], color: GREY },
]));

jobs.push(colTable("img3_s26.png", "Ny endriky ny tolona nasionalista", [
  { titre: "AN'ADY", color: PINK, items: ["Menalamba (1895-1898)", "Sadiavahy (1904-1917)", "tolona 1947"] },
  { titre: "AN-TSOKOSOKO", color: OCRE, items: ["VVS (1913-1915)", "JINA, PANAMA"] },
  { titre: "ARA-POLITIKA", color: BLUE, items: ["Ralaimongo :", "gazety, fivoriana", "MDRM (antoko)"] },
], { h: 380 }));

// ---------- TOVANA ----------
jobs.push(bandFrise("img_annexe_frise.png", "Frizy famintinana : ireo vanim-potoana lehibe", -3500, 2100, [
  { from: -3500, to: -3000, label: "\u2026", color: GREY, fromLabel: "Soratra", sub: "Prehistoara" },
  { from: -3000, to: 476, label: "ANDRO TALOHA", color: OCRE, fromLabel: "-3000" },
  { from: 476, to: 1492, label: "ANDRO|ANTENATENANY", color: BLUE },
  { from: 1492, to: 1789, label: "MAODERINA", color: PINK },
  { from: 1789, to: 2100, label: "ANKEHITRINY", color: GREEN },
], { endLabel: "izao" }));

jobs.push(bandFrise("img_annexe_friseMG.png", "Frizy famintinana : Madagasikara (1500 - 1960)", 1500, 1980, [
  { from: 1500, to: 1810, label: "FANJAKANA|MALAGASY", color: BLUE, sub: "sakalava, Betsimisaraka, merina..." },
  { from: 1810, to: 1896, label: "FANJAKAN'I|MCAR", color: PINK, sub: "Radama I ... Ranavalona III" },
  { from: 1896, to: 1960, label: "ZANATANY", color: GREY, sub: "tolom-panafahana" },
  { from: 1960, to: 1980, label: "", color: GREEN, sub: "fahaleovantena" },
], { endLabel: "izao" }));

jobs.push(carteFanjakana("img_annexe_carteFanj.png"));

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
// Triangle hofenoina : ny varotra telozoro (S6)
jobs.push(triangleVarotra("img_exo_triangle.png", { lettres: true, titre: "Ny varotra telozoro : fenoy ny lalana A, B ary D" }));

// Sari-tany hofenoina : ireo fanjakana (S17)
jobs.push(carteFanjakana("img_exo_carteFanj.png", { lettres: true, titre: "Sari-tany hofenoina : ireo fanjakana malagasy" }));

// Frizy hofenoina : ireo mpanjaka (S20)
(() => {
  const W = 1100, H = 340;
  let g = txt(W / 2, 40, "Frizy hofenoina : ireo mpanjaka nifandimby (1810 - 1896)", 24, GREEN, "bold");
  const y0 = 1810, y1 = 1896, mL = 70, mR = 50;
  const X = (yr) => mL + (yr - y0) / (y1 - y0) * (W - mL - mR);
  const bandY = 130, bandH = 70;
  const bands = [
    { from: 1810, to: 1828, lettre: "A", color: GREEN },
    { from: 1828, to: 1861, lettre: "B", color: OCRE },
    { from: 1861, to: 1863, lettre: "D", color: PINK },
    { from: 1863, to: 1868, lettre: "E", color: VIOLET },
    { from: 1868, to: 1883, lettre: "F", color: BLUE },
    { from: 1883, to: 1896, lettre: "G", color: GREY },
  ];
  for (const b of bands) {
    const x1 = X(b.from), x2 = X(b.to);
    g += `<rect x="${x1}" y="${bandY}" width="${x2 - x1}" height="${bandH}" fill="${b.color}" rx="6"/>`;
    g += txt((x1 + x2) / 2, bandY + 45, b.lettre, 24, "white", "bold");
    g += txt(x1, bandY + bandH + 30, String(b.from), 14, GREY, "bold");
  }
  g += txt(X(1896), bandY + bandH + 30, "1896", 14, GREY, "bold");
  g += `<line x1="${mL}" y1="${bandY + bandH + 6}" x2="${W - mR}" y2="${bandY + bandH + 6}" stroke="#999" stroke-width="1"/>`;
  g += txt(W / 2, H - 25, "Soraty ny anaran'ny mpanjaka mifanandrify amin'ny litera A, B, D, E, F ary G", 17, GREY);
  jobs.push({ file: "img_exo_friseMpanjaka.png", svg: svgDoc(W, H, g) });
})();

// =============== FAMOKARANA ===============
(async () => {
  for (const j of jobs) {
    const out = path.join(IMG, j.file);
    await sharp(Buffer.from(j.svg)).png().toFile(out);
    console.log("OK", j.file);
  }
})();
