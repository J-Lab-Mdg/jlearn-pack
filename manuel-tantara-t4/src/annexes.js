// annexes.js — ireo tovana sivy amin'ny bokin'ny Tantara T4
const B = require("./builders");
const { AlignmentType, Table, TableRow, WidthType } = require("docx");
const path = require("path");
const fs = require("fs");
const SARY = require("./sary-counter");
const leg = (t, a) => B.legende(`Sary ${SARY.add(t, a)} — ${t}`);

const sizeOf = (p) => {
  const buf = fs.readFileSync(p);
  return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
};
function img(rootDir, rel, wPx, alt) {
  const p = path.join(rootDir, rel);
  if (!fs.existsSync(p)) return null;
  const dim = sizeOf(p);
  const h = Math.round(dim.height * (wPx / dim.width));
  return B.imagePara(p, wPx, h, alt ? { alt } : {});
}
const { cell, p } = B;
const HEAD = "DDEEFF";

function table2(header, rows, widths) {
  const hr = new TableRow({ children: header.map((h, i) => cell([p(h, { bold: true, size: 22, spacingAfter: 20 })], { shading: HEAD, width: widths[i] })) });
  const trs = rows.map(r => new TableRow({ children: r.map((c, i) => cell([p(c, { size: 22, spacingAfter: 20 })], { width: widths[i] })) }));
  return new Table({ width: { size: 100, type: WidthType.PERCENTAGE }, rows: [hr, ...trs] });
}

// ---------- Tovana 1 : Frizy ny vanim-potoana ----------
function annexe1(rootDir) {
  const out = [];
  out.push(B.heading("TOVANA 1 — FRIZY : IREO VANIM-POTOANA LEHIBE TEO AMIN'NY TANTARAN'I MADAGASIKARA", { anchorId: "tovana1", size: 28, spacingAfter: 120 }));
  const im = img(rootDir, "images/img2_s13.png", 640, "Frizy famintinana ny vanim-potoana dimy");
  if (im) out.push(im);
  out.push(leg("Frizy famintinana : ireo vanim-potoana dimy nifandimby", "tovana1"));
  out.push(B.p("Ireo daty tsara ho tadidina :", { bold: true, size: 24, color: B.GREEN, spacingBefore: 120, spacingAfter: 60 }));
  [
    "Taonjato III-IV : tonga ny Ostronesianina voalohany (tombantombana).",
    "Taonjato V - XV : ny fahafoko — niforona ireo foko.",
    "1500 teo ho eo - 1896 : ny faha-mpanjaka — nisy ireo fanjakana malagasy.",
    "1298 : nanoratra momba ny nosy « Madeigascar » i Marco Polo tao amin'ny Bokin'ny zava-mahagaga.",
    "1896 - 1960 : ny fanjanahantany frantsay (64 taona).",
    "26 jona 1960 : ny fahaleovantenan'i Madagasikara — niandoha ny vanim-potoanan'ny fahaleovantena.",
  ].forEach(t => out.push(B.p("\u2022 " + t, { size: 24, spacingAfter: 40 })));
  out.push(B.p("Fanamarihana : tombantombana ireo daty tranainy indrindra ; tsy mitovy hevitra amin'izy ireo ny mpahay tantara.", { italics: true, size: 22, spacingBefore: 80 }));
  out.push(B.pageBreak());
  return out;
}

// ---------- Tovana 2 : Sari-tany — niavian'ny razambe ----------
function annexe2(rootDir) {
  const out = [];
  out.push(B.heading("TOVANA 2 — SARI-TANY : IREO FARITRA NIAVIAN'NY RAZAMBEN'NY MALAGASY", { anchorId: "tovana2", size: 28, spacingAfter: 120 }));
  const im = img(rootDir, "images/img2_s15.png", 620, "Sari-tany : ireo faritra niavian'ny razambe");
  if (im) out.push(im);
  out.push(leg("Sari-tany famintinana : Azia atsimo atsinanana, Afrika atsinanana ary Arabia", "tovana2"));
  [
    "Avy any AZIA ATSIMO ATSINANANA (Indonezia, Malezia) ny ankamaroan'ny razambe : izy no lavitra indrindra — lalana an-dranomasina an'arivony kilaometatra maro.",
    "Avy any AFRIKA ATSINANANA ny sasany : io no faritra akaiky indrindra an'i Madagasikara.",
    "Avy any ARABIA ny mpivarotra arabo, tonga taty aoriana kokoa nitondra ny sorabe sy ny fanandroana.",
  ].forEach(t => out.push(B.p("\u2022 " + t, { size: 24, spacingAfter: 40 })));
  out.push(B.pageBreak());
  return out;
}

// ---------- Tovana 3 : Sari-tany — morontsiraka niantsonana ----------
function annexe3(rootDir) {
  const out = [];
  out.push(B.heading("TOVANA 3 — SARI-TANY : IREO MORONTSIRAKA NIANTSONAN'NY MPIAVY", { anchorId: "tovana3", size: 28, spacingAfter: 120 }));
  const im = img(rootDir, "images/img2_s17.png", 480, "Sari-tany : ireo morontsiraka efatra niantsonan'ny mpiavy");
  if (im) out.push(im);
  out.push(leg("Sari-tany famintinana : niantsona tamin'ny morontsiraka efatra ny mpiavy", "tovana3"));
  out.push(B.p("Rehefa niantsona teny amoron-tsiraka ny mpiavy dia niditra tsikelikely tany afovoan-tany, nanaraka ny renirano sy ny lohasaha, ka nameno ny nosy manontolo.", { size: 24, spacingBefore: 80 }));
  out.push(B.pageBreak());
  return out;
}

// ---------- Tovana 4 : Ny tarehimarika romana ----------
function annexe4() {
  const out = [];
  out.push(B.heading("TOVANA 4 — NY TAREHIMARIKA ROMANA", { anchorId: "tovana4", size: 28, spacingAfter: 120 }));
  out.push(B.p("Ireo marika fototra fito :", { bold: true, size: 24, color: B.GREEN, spacingAfter: 60 }));
  out.push(table2(
    ["Marika romana", "I", "V", "X", "L", "C", "D", "M"],
    [["Sandany", "1", "5", "10", "50", "100", "500", "1 000"]],
    [23, 11, 11, 11, 11, 11, 11, 11]
  ));
  out.push(B.p("Ohatra (1 ka hatramin'ny 100) :", { bold: true, size: 24, color: B.GREEN, spacingBefore: 120, spacingAfter: 60 }));
  out.push(table2(
    ["Arabo", "Romana", "Arabo", "Romana", "Arabo", "Romana"],
    [
      ["1", "I", "11", "XI", "30", "XXX"],
      ["2", "II", "12", "XII", "40", "XL"],
      ["3", "III", "13", "XIII", "50", "L"],
      ["4", "IV", "14", "XIV", "60", "LX"],
      ["5", "V", "15", "XV", "70", "LXX"],
      ["6", "VI", "16", "XVI", "80", "LXXX"],
      ["7", "VII", "17", "XVII", "90", "XC"],
      ["8", "VIII", "18", "XVIII", "99", "XCIX"],
      ["9", "IX", "19", "XIX", "100", "C"],
      ["10", "X", "20", "XX", "2026", "MMXXVI"],
    ],
    [16, 17, 16, 17, 16, 18]
  ));
  out.push(B.p("Ny taonjato dia soratana amin'ny tarehimarika romana :", { bold: true, size: 24, color: B.GREEN, spacingBefore: 120, spacingAfter: 60 }));
  out.push(table2(
    ["Taona", "Taonjato"],
    [
      ["1 - 100", "taonjato voalohany (I)"],
      ["101 - 200", "taonjato faha-II"],
      ["1201 - 1300", "taonjato faha-XIII (tamin'i Marco Polo : 1298)"],
      ["1801 - 1900", "taonjato faha-XIX"],
      ["1901 - 2000", "taonjato faha-XX (tamin'ny fahaleovantena : 1960)"],
      ["2001 - 2100", "taonjato faha-XXI (isika izao)"],
    ],
    [35, 65]
  ));
  out.push(B.pageBreak());
  return out;
}

// ---------- Tovana 5 : Ny kalandrie — andro sy volana ----------
function annexe5(rootDir) {
  const out = [];
  out.push(B.heading("TOVANA 5 — NY KALANDRIE : NY ANDRO SY NY VOLANA", { anchorId: "tovana5", size: 28, spacingAfter: 120 }));
  out.push(B.p("Ireo andro fito amin'ny herinandro (avy amin'ny teny arabo ny anarany) :", { bold: true, size: 24, color: B.GREEN, spacingAfter: 60 }));
  out.push(table2(
    ["Andro malagasy", "Teny arabo niaviany", "Andro frantsay"],
    [
      ["alatsinainy", "al-itnayna", "lundi"],
      ["talata", "at-talata", "mardi"],
      ["alarobia", "al-arba'a", "mercredi"],
      ["alakamisy", "al-khamis", "jeudi"],
      ["zoma", "al-jom'a", "vendredi"],
      ["sabotsy", "as-sabt", "samedi"],
      ["alahady", "al-ahad", "dimanche"],
    ],
    [34, 33, 33]
  ));
  out.push(B.p("Ireo volana 12 amin'ny taona :", { bold: true, size: 24, color: B.GREEN, spacingBefore: 120, spacingAfter: 60 }));
  const im = img(rootDir, "images/img2_s04.png", 620, "Ny volana 12 amin'ny taona iray");
  if (im) out.push(im);
  out.push(leg("Ny volana 12 sy ny isan'ny androny", "tovana5"));
  out.push(B.p("Tsara ho fantatra : 1 taona = 365 andro (366 amin'ny taona mihoatra) ; 1 taonjato = 100 taona ; 1 arivo taona = 1 000 taona.", { italics: true, size: 22, spacingBefore: 80 }));
  out.push(B.pageBreak());
  return out;
}

// ---------- Tovana 6 : Fampitahana teny ----------
function annexe6() {
  const out = [];
  out.push(B.heading("TOVANA 6 — NY FITENY MALAGASY SY IREO FITENY NIAVIANY", { anchorId: "tovana6", size: 28, spacingAfter: 120 }));
  out.push(B.p("Ny fiteny malagasy dia mitahiry ny dian'ireo razambe : teny maro no mitovy na mifanakaiky amin'ny teny any Indonezia-Malezia, any Afrika atsinanana (swahili) ary any Arabia.", { size: 24, spacingAfter: 80, align: AlignmentType.JUSTIFIED }));
  out.push(B.p("Teny avy amin'ny fiteny malay-indoneziana :", { bold: true, size: 24, color: B.GREEN, spacingAfter: 60 }));
  out.push(table2(
    ["Teny malagasy", "Teny malay-indoneziana", "Dikany"],
    [
      ["vato", "batu", "pierre"],
      ["tany", "tanah", "terre"],
      ["lanitra", "langit", "ciel"],
      ["maty", "mati", "mort"],
      ["vary", "padi", "riz"],
      ["dimy", "lima", "cinq"],
      ["telo", "telu (teny aostroneziana)", "trois"],
    ],
    [30, 40, 30]
  ));
  out.push(B.p("Teny avy amin'ny fiteny swahili (Afrika atsinanana) :", { bold: true, size: 24, color: B.GREEN, spacingBefore: 120, spacingAfter: 60 }));
  out.push(table2(
    ["Teny malagasy", "Teny swahili", "Dikany"],
    [
      ["omby", "ng'ombe", "b\u0153uf / zébu"],
      ["akoho", "kuku", "poule"],
      ["ampondra", "punda", "âne"],
    ],
    [30, 40, 30]
  ));
  out.push(B.p("Teny avy amin'ny teny arabo :", { bold: true, size: 24, color: B.GREEN, spacingBefore: 120, spacingAfter: 60 }));
  out.push(table2(
    ["Teny malagasy", "Teny arabo", "Dikany"],
    [
      ["alahady, talata, zoma...", "al-ahad, at-talata, al-jom'a...", "ny anaran'ny andro"],
      ["sorabe", "(soratra arabo nanoratana ny teny malagasy)", "écriture ancienne"],
      ["fanandroana", "(avy amin'ny fahaizana arabo momba ny kintana)", "astrologie"],
    ],
    [30, 40, 30]
  ));
  out.push(B.pageBreak());
  return out;
}

// ---------- Tovana 7 : Sigla sy fanafohezan-teny ----------
function annexe7() {
  const out = [];
  out.push(B.heading("TOVANA 7 — IREO SIGLA SY FANAFOHEZAN-TENY", { anchorId: "tovana7", size: 28, spacingAfter: 120 }));
  out.push(B.p("Ny sigla dia fanafohezana anarana lava amin'ny litera voalohany avy amin'ny teny tsirairay.", { italics: true, size: 22, spacingAfter: 80 }));
  out.push(table2(
    ["Sigla", "Dikany feno", "Fanazavana"],
    [
      ["MEN", "Ministère de l'Éducation Nationale", "Ny ministera miandraikitra ny fanabeazam-pirenena"],
      ["PE", "Programme Éducatif", "Ny fandaharam-pianarana ofisialy"],
      ["FRP", "Fitaovana fanampiny ho an'ny mpampianatra", "Boky torolalana ho an'ny mpampianatra"],
      ["ODAS", "Objectifs de Développement de l'Apprentissage Scolaire", "Ireo tanjona fototry ny fianarana"],
      ["UNESCO", "United Nations Educational, Scientific and Cultural Organization", "Fikambanana iraisam-pirenena miaro ny fanabeazana sy ny kolontsaina ary ny vakoka"],
      ["V.A.", "Valiny andrasana", "Ny valiny tokony homen'ny mpianatra"],
      ["J.K.", "Jesoa Kristy", "Ny fanisana ny taona dia miainga amin'ny nahaterahany"],
    ],
    [14, 40, 46]
  ));
  out.push(B.pageBreak());
  return out;
}

// ---------- Tovana 8 : Rakibolana kely ----------
function annexe8() {
  const out = [];
  out.push(B.heading("TOVANA 8 — RAKIBOLANA KELY (MALAGASY - FRANTSAY)", { anchorId: "tovana8", size: 28, spacingAfter: 120 }));
  out.push(table2(
    ["Teny malagasy", "Terme officiel / frantsay"],
    [
      ["andiany", "vague (de migration)"],
      ["angano", "conte, légende"],
      ["dina", "convention communautaire"],
      ["didim-panjakana", "décret"],
      ["fahafoko", "période des clans"],
      ["faha-mpanjaka", "période royale"],
      ["fahaleovantena", "indépendance"],
      ["fanandroana", "astrologie traditionnelle"],
      ["fanjanahantany", "colonisation"],
      ["fiarahamonina", "société"],
      ["fifindra-monina", "migration"],
      ["fizahantany", "tourisme"],
      ["frizy", "frise chronologique"],
      ["habaka", "espace"],
      ["harem-pirenena", "richesse / patrimoine national"],
      ["lakana", "pirogue"],
      ["lakam-piara", "pirogue à balancier"],
      ["loharano fanovozan-kevitra", "source historique"],
      ["lovantsofina", "tradition orale"],
      ["mpiavy", "migrant, nouveau venu"],
      ["razambe", "ancêtres"],
      ["sorabe", "écriture arabico-malgache"],
      ["tantara", "histoire"],
      ["taona mihoatra", "année bissextile"],
      ["taonjato", "siècle"],
      ["tarehimarika romana", "chiffres romains"],
      ["tombana", "évaluation"],
      ["tranom-bakoka", "musée"],
      ["tsangambato", "stèle, monument"],
      ["vakoka", "patrimoine"],
      ["vanim-potoana", "période, époque"],
    ],
    [50, 50]
  ));
  out.push(B.pageBreak());
  return out;
}

// ---------- Tovana 9 : Bibliografia, webografia ary lisitry ny sary ----------
function annexe9(saryList) {
  const out = [];
  out.push(B.heading("TOVANA 9 — BIBLIOGRAFIA, WEBOGRAFIA ARY LISITRY NY SARY", { anchorId: "tovana9", size: 28, spacingAfter: 120 }));
  out.push(B.p("Bibliografia :", { bold: true, size: 24, color: B.GREEN, spacingAfter: 60 }));
  [
    "Ministère de l'Éducation Nationale (MEN), Programme Éducatif — Tantara, kilasy T4 (Édition 2026).",
    "Ministère de l'Éducation Nationale (MEN), FRP Tantara — kilasy T4 (fitaovana fanampiny ho an'ny mpampianatra).",
    "Marco Polo, Le Livre des Merveilles (Il Milione), 1298.",
    "Rakibolana malagasy sy rakibolana ho an'ny mpampianatra (nakana ny famaritana sasany).",
  ].forEach(t => out.push(B.p("\u2022 " + t, { size: 24, spacingAfter: 40 })));
  out.push(B.p("Webografia :", { bold: true, size: 24, color: B.GREEN, spacingBefore: 120, spacingAfter: 60 }));
  [
    "plateforme.education.mg — ny sehatra ofisialin'ny MEN ahitana ny PE sy ny FRP.",
    "Madagascar-Tribune (lahatsoratra « Mahaliana ny vahiny ny vakoka », nohafohezina tao amin'ny FRP).",
  ].forEach(t => out.push(B.p("\u2022 " + t, { size: 24, spacingAfter: 40 })));
  out.push(B.p("Lisitry ny sary rehetra ao amin'ny boky :", { bold: true, size: 24, color: B.GREEN, spacingBefore: 120, spacingAfter: 60 }));
  for (const f of saryList) {
    out.push(B.tocLink(f.legende, f.anchor, { size: 22, indentLeft: 240 }));
  }
  return out;
}

module.exports = { annexe1, annexe2, annexe3, annexe4, annexe5, annexe6, annexe7, annexe8, annexe9 };
