// annexes.js — ireo tovana sivy amin'ny bokin'ny Tantara T5
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

// ---------- Tovana 1 : Frizy ireo mpanjaka enina ----------
function annexe1(rootDir) {
  const out = [];
  out.push(B.heading("TOVANA 1 — FRIZY : IREO MPANJAKA ENINA NIFANDIMBY (1810-1897)", { anchorId: "tovana1", size: 28, spacingAfter: 120 }));
  const im = img(rootDir, "images/img2_s11.png", 640, "Frizy : ireo mpanjaka enina nifandimby");
  if (im) out.push(im);
  out.push(leg("Frizy famintinana : ireo mpanjaka enina (1810-1897)", "tovana1"));
  out.push(B.p("Ireo daty tsara ho tadidina :", { bold: true, size: 24, color: B.GREEN, spacingBefore: 120, spacingAfter: 60 }));
  [
    "1817 sy 1820 : ny fifanekena teo amin'i Radama I sy Farquhar (najanona ny fanondranana andevo).",
    "1822 : nanambady an-dRasalimo (zanak'i Ramitraho, Menabe) i Radama I.",
    "1855 : ny Charte Lambert (nataon'ny printsy Rakoto sonia).",
    "16 aogositra 1861 : nodimandry i Ranavalona I (33 taona nanjakana).",
    "21 febroary 1869 : natao batisa i Ranavalona II — lasa fivavahana ofisialy ny kristianisma.",
    "1883-1885 sy 1895 : ny ady tamin'ny Frantsay.",
    "6 aogositra 1896 : lasa zanatany frantsay i Madagasikara — very ny fahaleovantena.",
  ].forEach(t => out.push(B.p("\u2022 " + t, { size: 24, spacingAfter: 40 })));
  out.push(B.p("Fanamarihana : Rainilaiarivony no praiminisitra nitantana ny fanjakana nandritra ny 31 taona (1864-1895), teo anilan'ny mpanjakavavy telo nifandimby.", { italics: true, size: 22, spacingBefore: 80 }));
  out.push(B.pageBreak());
  return out;
}

// ---------- Tovana 2 : Sari-tany — ireo fanjakana ----------
function annexe2(rootDir) {
  const out = [];
  out.push(B.heading("TOVANA 2 — SARI-TANY : IREO FANJAKANA NIJORO TETO MADAGASIKARA", { anchorId: "tovana2", size: 28, spacingAfter: 120 }));
  const im = img(rootDir, "images/img2_s05.png", 520, "Sari-tany : ireo fanjakana efatra vaventy");
  if (im) out.push(im);
  out.push(leg("Sari-tany famintinana : ireo fanjakana efatra vaventy sy ny taonjato nijoroany", "tovana2"));
  out.push(B.p("Ireo fanjakana nijoro teto Madagasikara nanomboka ny taonjato XVI :", { bold: true, size: 24, color: B.GREEN, spacingBefore: 120, spacingAfter: 60 }));
  out.push(B.p("Antandroy \u2022 Andratsay (Betafo) \u2022 Antambahoaka \u2022 Antanosy \u2022 Antemoro \u2022 Antesaka \u2022 Bara \u2022 Betsileo \u2022 Betsimisaraka \u2022 Bezanozano \u2022 Mahafaly \u2022 Merina \u2022 Sakalava \u2022 Sihanaka \u2022 Tsimihety \u2022 Vezo \u2022 Tanala \u2022 Antakarana", { size: 24, spacingAfter: 80, align: AlignmentType.JUSTIFIED }));
  [
    "SAKALAVA (taonjato XVI, andrefana) : Andriandahifotsy (Menabe) ; Andriamandisoarivo (Boina).",
    "MERINA (taonjato XVI, afovoan-tany) : Rangita, Andriamanelo, Ralambo, Andrianjaka, Andriamasinavalona, Andrianampoinimerina.",
    "BETSIMISARAKA (taonjato XVII, atsinanana) : Ratsimilaho (Ramaromanompo).",
    "BETSILEO (taonjato XVIII, afovoan-tany atsimo) : nizara efatra — Manandriana, Iarindrano, Isandra (Andriamanalina), Lalangina.",
  ].forEach(t => out.push(B.p("\u2022 " + t, { size: 24, spacingAfter: 40 })));
  out.push(B.pageBreak());
  return out;
}

// ---------- Tovana 3 : Sari-tany — ny varotra andevo ----------
function annexe3(rootDir) {
  const out = [];
  out.push(B.heading("TOVANA 3 — SARI-TANY : NY LALAN'NY VAROTRA ANDEVO", { anchorId: "tovana3", size: 28, spacingAfter: 120 }));
  const im = img(rootDir, "images/img2_s08.png", 620, "Sari-tany : ny lalan'ny varotra andevo");
  if (im) out.push(im);
  out.push(leg("Sari-tany famintinana : ny lalan'ny varotra andevo", "tovana3"));
  [
    "Fanjakana VALO no nivarotra andevo : Antakarana, Sakalava, Betsimisaraka, Merina, Betsileo, Antemoro, Antanosy, Mahafaly.",
    "Ny babo azo tamin'ny fifanafihana samy Malagasy no namidy ; ny Sakalava koa nanafika hatrany Mozambika sy ny Nosy Komaoro.",
    "Ny tsenan'i Moramanga sy ireo seranana amoron-tsiraka no toerana nivarotana.",
    "Naondrana tany amin'ny Nosy Mascareignes (Maurice sy La Réunion) sy tany Afrika atsinanana ny andevo, niasa tamin'ny toham-boly fary sy landihazo.",
    "Ny takalo : basy, vanja, toaka, sigara, fitaratra, lamba ary vola.",
  ].forEach(t => out.push(B.p("\u2022 " + t, { size: 24, spacingAfter: 40 })));
  out.push(B.pageBreak());
  return out;
}

// ---------- Tovana 4 : Ny fanjanahantany — sata sy rafitra ----------
function annexe4(rootDir) {
  const out = [];
  out.push(B.heading("TOVANA 4 — NY FANJANAHANTANY : IREO SATA SY NY RAFI-PITANTANANA", { anchorId: "tovana4", size: 28, spacingAfter: 120 }));
  const im1 = img(rootDir, "images/img2_s18.png", 640, "Frizy : ireo satan'i Madagasikara");
  if (im1) out.push(im1);
  out.push(leg("Frizy : ireo satan'i Madagasikara (1895-1960)", "tovana4"));
  const im2 = img(rootDir, "images/img2_s19.png", 540, "Ny rafi-pitantanan'ny mpanjanaka");
  if (im2) out.push(im2);
  out.push(leg("Ny rafi-pitantanan'ny mpanjanaka", "tovana4"));
  [
    "5 aogositra 1890 : neken'ny Anglisy ho zaram-pahefan'i Frantsa i Madagasikara (takalo : Zanzibar).",
    "Governora jeneraly 14 no nifandimby (1896-1946) — Gallieni no voalohany ; haut-commissaire 4 (1946-1960).",
    "14 oktobra 1958 : niorina ny Repoblika Malagasy voalohany ; 26 jona 1960 : niverina ny fahaleovantena.",
  ].forEach(t => out.push(B.p("\u2022 " + t, { size: 24, spacingAfter: 40 })));
  out.push(B.pageBreak());
  return out;
}

// ---------- Tovana 5 : Frizy ny tolona ----------
function annexe5(rootDir) {
  const out = [];
  out.push(B.heading("TOVANA 5 — FRIZY : IREO HETSIKA FANOHERANA NY FANJANAHANTANY", { anchorId: "tovana5", size: 28, spacingAfter: 120 }));
  const im = img(rootDir, "images/img2_s23.png", 640, "Frizy : ireo hetsika fanoherana");
  if (im) out.push(im);
  out.push(leg("Frizy famintinana : ireo hetsika fanoherana ny fanjanahantany", "tovana5"));
  const im2 = img(rootDir, "images/img3_s23.png", 620, "Tabilao famintinana : ireo hetsika fanoherana");
  if (im2) out.push(im2);
  out.push(leg("Tabilao famintinana : ny hetsika, ny fotoana ary ny zava-notakina", "tovana5"));
  out.push(B.p("Ny 29 martsa 1947 no nipoahan'ny tolona lehibe indrindra ; vahoaka maro no maty tamin'ny famoretana, saingy nanamafy ny fitakiana ny fahaleovantena izany.", { size: 24, spacingBefore: 80, align: AlignmentType.JUSTIFIED }));
  out.push(B.pageBreak());
  return out;
}

// ---------- Tovana 6 : Tabilao ireo mpanjaka ----------
function annexe6(rootDir) {
  const out = [];
  out.push(B.heading("TOVANA 6 — TABILAO : IREO MPANJAKAN'I MADAGASIKARA (TAONJATO XIX)", { anchorId: "tovana6", size: 28, spacingAfter: 120 }));
  out.push(table2(
    ["Mpanjaka", "Nanjakany", "Zava-nitranga lehibe"],
    [
      ["Radama I", "1810 - 1828", "fifanekena tamin'i Farquhar (1817, 1820) ; fanitarana ny fanjakana ; sekoly LMS sy abidy latinina (1823)"],
      ["Ranavalona I", "1828 - 1861", "fiarovana ny fiandrianam-pirenena ; Jean Laborde sy ny orinasan'i Mantasoa"],
      ["Radama II", "1861 - 1863", "fisokafana amin'ny vahiny ; ny Charte Lambert (1855) ; novonoina ny 11 mey 1863"],
      ["Rasoherina", "1863 - 1868", "nanambady ny praiminisitra Rainilaiarivony ; fampianarana"],
      ["Ranavalona II", "1868 - 1883", "batisa (21 febroary 1869) ; fandrarana ny toaka ; fifanarahana tamin'ny Anglisy"],
      ["Ranavalona III", "1883 - 1897", "ady 1883-1885 sy 1895 ; zanatany (6 aogositra 1896) ; sesitany, maty tany Alger (1917)"],
    ],
    [22, 18, 60]
  ));
  const im = img(rootDir, "images/img3_s11.png", 620, "Tabilao famintinana : ireo mpanjaka enina");
  if (im) { out.push(B.p("", { size: 8 })); out.push(im); out.push(leg("Tabilao famintinana : ireo mpanjaka enina", "tovana6")); }
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
      ["LMS", "London Missionary Society", "Misionera anglisy tonga tamin'ny andron-dRadama I ; nanokatra sekoly"],
      ["SICE", "Société Industrielle et Commerciale de l'Emyrne", "Kaompania vazaha nifehy ny varotra"],
      ["TOM", "Territoire d'Outre-Mer", "Sata : faritany ampitan-dranomasina (1946-1958)"],
      ["SMOTIG", "Service de la Main-d'\u0152uvre pour les Travaux d'Intérêt Général", "Asa an-terivozona : 10-50 andro, lehilahy 15-60 taona"],
      ["VVS", "Vy Vato Sakelika", "Fikambanan'ny tanora nitaky ny fitovian-jo (1913-1915)"],
      ["JINA", "Jeunesse Nationaliste (fikambanana miafina)", "Nitaky ny fahaleovantena"],
      ["PANAMA", "Parti Nationaliste Malgache (fikambanana miafina)", "Nitaky ny fahaleovantena"],
      ["MDRM", "Mouvement Démocratique de la Rénovation Malgache", "Antoko nitaky ny fahaleovantena (1946)"],
      ["TCE", "Tananarive - Côte Est", "Lalamby Antananarivo - Toamasina"],
      ["MLA", "Moramanga - Lac Alaotra", "Lalamby Moramanga - Alaotra"],
      ["TA", "Tananarive - Antsirabe", "Lalamby Antananarivo - Antsirabe"],
      ["FCE", "Fianarantsoa - Côte Est", "Lalamby Fianarantsoa - Manakara"],
      ["UNESCO", "United Nations Educational, Scientific and Cultural Organization", "Fikambanana iraisam-pirenena miaro ny vakoka (Ambohimanga : 2001)"],
      ["MEN", "Ministère de l'Éducation Nationale", "Ny ministera miandraikitra ny fanabeazam-pirenena"],
      ["PE", "Programme Éducatif", "Ny fandaharam-pianarana ofisialy"],
      ["FRP", "Fitaovana fanampiny ho an'ny mpampianatra", "Boky torolalana ho an'ny mpampianatra"],
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
      ["akora", "matière première"],
      ["aloalo", "poteau funéraire sculpté"],
      ["andevo", "esclave"],
      ["an-tanan-tohatra", "hiérarchie"],
      ["asa an-terivozona", "travail forcé"],
      ["babo an'ady", "captif de guerre"],
      ["dina", "convention communautaire"],
      ["didim-panjakana", "décret"],
      ["fanondranana andevo", "traite des esclaves"],
      ["fanjanahantany", "colonisation"],
      ["fiandrianam-pirenena", "souveraineté nationale"],
      ["fiankinan-doha", "dépendance"],
      ["fifanekena", "traité, accord"],
      ["fihavanana", "lien social, entente"],
      ["firaisan-kina", "solidarité, union"],
      ["fizahantany", "tourisme"],
      ["foko", "clan"],
      ["governora jeneraly", "gouverneur général"],
      ["harem-pirenena", "richesses nationales"],
      ["hasina", "pouvoir sacré"],
      ["hetra isan-dahy", "impôt de capitation"],
      ["kaompania", "compagnie commerciale"],
      ["praiminisitra", "premier ministre"],
      ["sata", "statut"],
      ["seranana", "port"],
      ["sesitany", "exil"],
      ["soatoavina", "valeurs"],
      ["tolona", "lutte, résistance"],
      ["toham-boly", "plantation"],
      ["tranga ara-tantara", "fait historique"],
      ["tranom-bakoka", "musée"],
      ["vakoka", "patrimoine"],
      ["vanja", "poudre à canon"],
      ["voanjo (colons)", "colons"],
      ["zanatany", "colonie"],
      ["zava-mitranga", "événement"],
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
    "Ministère de l'Éducation Nationale (MEN), Programme Éducatif — Tantara, kilasy T5 (Édition 2026).",
    "Ministère de l'Éducation Nationale (MEN), FRP Tantara — kilasy T5 (fitaovana fanampiny ho an'ny mpampianatra).",
    "RASOANINDRINA Baptistine, Tantaran'i Madagasikara, kilasy faha-7, 2010.",
    "RAZAFIMBELO Célestin, Histoire de Madagascar (Université d'Antananarivo).",
    "Revue Historique de l'Océan Indien, laharana 14 (J. Ravelomanana).",
    "Fanambarana iraisam-pirenena momba ny zon'olombelona (1948), andininy voalohany.",
  ].forEach(t => out.push(B.p("\u2022 " + t, { size: 24, spacingAfter: 40 })));
  out.push(B.p("Webografia :", { bold: true, size: 24, color: B.GREEN, spacingBefore: 120, spacingAfter: 60 }));
  [
    "plateforme.education.mg — ny sehatra ofisialin'ny MEN ahitana ny PE sy ny FRP.",
    "education.gov.mg — RAPE T5 (fandaharana isan-taona).",
    "Madagascar-Tribune (lahatsoratra « Mahaliana ny vahiny ny vakoka », nohafohezina tao amin'ny FRP).",
    "mg.mondemalgache.org (rakibolana : famaritana ny vakoka).",
  ].forEach(t => out.push(B.p("\u2022 " + t, { size: 24, spacingAfter: 40 })));
  out.push(B.p("Lisitry ny sary rehetra ao amin'ny boky :", { bold: true, size: 24, color: B.GREEN, spacingBefore: 120, spacingAfter: 60 }));
  for (const f of saryList) {
    out.push(B.tocLink(f.legende, f.anchor, { size: 22, indentLeft: 240 }));
  }
  return out;
}

module.exports = { annexe1, annexe2, annexe3, annexe4, annexe5, annexe6, annexe7, annexe8, annexe9 };
