// Builders docx — Manuel Calcul 8e J-Learn V2
// Tout est en Word natif : tableaux de numération, tableaux de conversion (flèches), opérations posées,
// potence, preuve par 9, encadrés formules / méthodes / attention ; fractions en OMML (Math).
const fs = require("fs");
const {
  Paragraph, TextRun, Table, TableRow, TableCell, WidthType, BorderStyle,
  AlignmentType, VerticalAlign, ShadingType, PageBreak, Bookmark, InternalHyperlink,
  ImageRun, TableLayoutType, Math: DMath, MathRun, MathFraction,
} = require("docx");

const C = {
  rouge: "C00000", vert: "1E7B34", bleu: "1F4E79", noir: "000000", gris: "808080",
  corrige: "E9704F",           // rose saumon validé
  enteteFiche: "DDEEFF", sousEntete: "F5F5F5", section: "E8F1E4",
  formuleFond: "FFF8DC", formuleBord: "E38A00",   // jaune pâle / orange
  methodeFond: "E2F0D9", methodeBord: "1E7B34",   // vert
  attentionFond: "FDECEA", attentionBord: "C00000",
  retenue: "C00000", classeMilliards: "F4CCCC", classeMillions: "FCE5CD", classeMille: "D9EAD3", classeUnites: "CFE2F3", classeDecimale: "EAD1DC",
};
const FONT = "Times New Roman";
const MONO = "Courier New";

// ---------- formats ----------
const NBSP = "\u00A0";
function fmt(n, dec = null) {
  // 94200 → "94 200" ; 0.742 → "0,742" ; espaces insécables
  if (typeof n === "string") return n;
  let s = dec === null ? String(n) : n.toFixed(dec);
  if (dec === null && Math.abs(n - Math.round(n)) > 1e-9) s = String(+n.toFixed(6));
  let [ent, frac] = s.split(".");
  const neg = ent.startsWith("-"); if (neg) ent = ent.slice(1);
  ent = ent.replace(/\B(?=(\d{3})+(?!\d))/g, NBSP);
  // (pas de groupement des décimales : 0,0586 reste lisible pour la classe)
  return (neg ? "−" : "") + ent + (frac ? "," + frac : "");
}
const ar = (n) => `${fmt(n)}${NBSP}Ar`;

// ---------- texte enrichi : **gras** et {num/den} → fraction ----------
function runs(text, { size = 22, color = C.noir, keyColor = null, bold = false, italic = false, font = FONT } = {}) {
  const out = [];
  const parts = String(text).split(/(\*\*[^*]+\*\*|\{[^{}]+\/[^{}]+\})/g).filter(Boolean);
  parts.forEach((part) => {
    let m = part.match(/^\*\*([^*]+)\*\*$/);
    if (m) {
      // gras peut contenir des fractions
      const sub = m[1].split(/(\{[^{}]+\/[^{}]+\})/g).filter(Boolean);
      sub.forEach((s) => {
        const f = s.match(/^\{([^{}]+)\/([^{}]+)\}$/);
        if (f) out.push(frac(f[1], f[2], size)); else out.push(new TextRun({ text: s, bold: true, color: keyColor || color, size, italics: italic, font }));
      });
      return;
    }
    m = part.match(/^\{([^{}]+)\/([^{}]+)\}$/);
    if (m) { out.push(frac(m[1], m[2], size)); return; }
    out.push(new TextRun({ text: part, bold, color, size, italics: italic, font }));
  });
  return out;
}
function frac(num, den, size = 22) {
  return new DMath({ children: [new MathFraction({ numerator: [new MathRun(String(num))], denominator: [new MathRun(String(den))] })] });
}

function p(text, opts = {}) {
  const { align = AlignmentType.LEFT, spacingAfter = 80, spacingBefore = 0, indent = null, keepNext = false, shading = null, line = 276 } = opts;
  return new Paragraph({
    alignment: align,
    spacing: { after: spacingAfter, before: spacingBefore, line },
    indent: indent ? { left: indent } : undefined,
    keepNext,
    shading: shading ? { type: ShadingType.CLEAR, fill: shading, color: "auto" } : undefined,
    children: runs(text, opts),
  });
}
function empty(after = 60) { return new Paragraph({ spacing: { after }, children: [new TextRun({ text: "", font: FONT })] }); }
function pageBreak() { return new Paragraph({ children: [new PageBreak()] }); }

function titled(text, { anchor = null, size = 28, color = C.noir, align = AlignmentType.CENTER, bold = true, spacingAfter = 160, spacingBefore = 0 } = {}) {
  const run = new TextRun({ text, bold, color, size, font: FONT });
  return new Paragraph({ alignment: align, spacing: { after: spacingAfter, before: spacingBefore }, children: anchor ? [new Bookmark({ id: anchor, children: [run] })] : [run] });
}
function tocLink(label, anchor, { indent = 0, size = 22 } = {}) {
  return new Paragraph({ spacing: { after: 40 }, indent: { left: indent }, children: [new InternalHyperlink({ anchor, children: [new TextRun({ text: label, style: "Hyperlink", size, font: FONT })] })] });
}

// ---------- cellules / tables ----------
const none = { style: BorderStyle.NONE, size: 0, color: "FFFFFF" };
const thin = { style: BorderStyle.SINGLE, size: 4, color: "808080" };
const thick = (color = "000000", size = 12) => ({ style: BorderStyle.SINGLE, size, color });
function noBorders() { return { top: none, bottom: none, left: none, right: none, insideHorizontal: none, insideVertical: none }; }
function thinBorders() { return { top: thin, bottom: thin, left: thin, right: thin, insideHorizontal: thin, insideVertical: thin }; }
function boxBorders(color, size = 12) { const b = thick(color, size); return { top: b, bottom: b, left: b, right: b, insideHorizontal: none, insideVertical: none }; }

function cell(children, { width = null, shading = null, colSpan = 1, rowSpan = 1, vAlign = VerticalAlign.TOP, margins = 60, borders = null } = {}) {
  return new TableCell({
    children: children.length ? children : [empty(0)],
    width: width ? { size: width, type: WidthType.DXA } : undefined,
    shading: shading ? { type: ShadingType.CLEAR, fill: shading, color: "auto" } : undefined,
    columnSpan: colSpan > 1 ? colSpan : undefined,
    rowSpan: rowSpan > 1 ? rowSpan : undefined,
    verticalAlign: vAlign,
    margins: { top: margins, bottom: margins, left: margins, right: margins },
    borders: borders || undefined,
  });
}
function table(rows, widths, { borders = thinBorders(), align = AlignmentType.LEFT, layout = TableLayoutType.FIXED } = {}) {
  return new Table({ width: { size: widths.reduce((a, b) => a + b, 0), type: WidthType.DXA }, columnWidths: widths, layout, borders, alignment: align, rows });
}
const centered = (txt, o = {}) => p(String(txt).replace(/\*\*\*\*/g, ""), { align: AlignmentType.CENTER, spacingAfter: 0, ...o });

// Méta-table de la fiche
function metaTable(meta) {
  const L = (label, val) => p(`**${label}** ${val}`, { size: 20, keyColor: C.noir, spacingAfter: 40 });
  const left = [L("Discipline :", meta.discipline), L("Sous-discipline :", meta.sousDiscipline), L("Thème :", meta.theme), L("Titre :", meta.titre), L("Objectif spécifique :", meta.objectif), L("Support et matériel :", meta.support)];
  const right = [L("Date :", "________________"), L("Classe :", meta.classe), L("Séance n° :", meta.seance), L("Durée :", meta.duree)];
  return new Table({ width: { size: 100, type: WidthType.PERCENTAGE }, borders: noBorders(), rows: [new TableRow({ children: [cell(left, { width: 6600 }), cell(right, { width: 3000 })] })] });
}

// Table de déroulement — 6 colonnes
const COLW = [1150, 3250, 2250, 1100, 1050, 800];
function hdr(text) { return p(`**${text}**`, { size: 18, keyColor: C.noir, align: AlignmentType.CENTER, spacingAfter: 0 }); }
function deroulementHeader() {
  const row1 = new TableRow({ tableHeader: true, children: [
    cell([hdr("Étapes et Durée")], { width: COLW[0], shading: C.enteteFiche, rowSpan: 2, vAlign: VerticalAlign.CENTER }),
    cell([hdr("Déroulement de la leçon")], { width: COLW[1] + COLW[2], shading: C.enteteFiche, colSpan: 2, vAlign: VerticalAlign.CENTER }),
    cell([hdr("Technique et Stratégie")], { width: COLW[3], shading: C.enteteFiche, rowSpan: 2, vAlign: VerticalAlign.CENTER }),
    cell([hdr("Support et Matériel")], { width: COLW[4], shading: C.enteteFiche, rowSpan: 2, vAlign: VerticalAlign.CENTER }),
    cell([hdr("Observation")], { width: COLW[5], shading: C.enteteFiche, rowSpan: 2, vAlign: VerticalAlign.CENTER }),
  ]});
  const row2 = new TableRow({ tableHeader: true, children: [cell([hdr("Enseignant")], { width: COLW[1], shading: C.sousEntete }), cell([hdr("Apprenants")], { width: COLW[2], shading: C.sousEntete })] });
  return [row1, row2];
}
function sectionRow(label) { return new TableRow({ children: [cell([p(`**${label}**`, { size: 19, keyColor: C.noir, spacingAfter: 0 })], { colSpan: 6, shading: C.section })] }); }

// contenu de cellule : lignes de texte, ou objets docx (Table/Paragraph) déjà construits
function cp(lines, opts = {}) {
  const out = [];
  (lines || []).forEach((l) => {
    if (l === null || l === undefined || l === "") return;
    if (typeof l === "string") out.push(p(l, { size: 18, spacingAfter: 50, ...opts }));
    else if (Array.isArray(l)) out.push(...l);
    else out.push(l);
  });
  return out;
}
function stepRow({ etape, duree = null, enseignant = [], apprenants = [], technique = "", support = "", observation = [] }) {
  const et = [p(`**${etape}**`, { size: 18, keyColor: C.noir, spacingAfter: 20 })];
  if (duree) et.push(p(duree, { size: 18, spacingAfter: 0 }));
  return new TableRow({ children: [
    cell(et, { width: COLW[0] }), cell(cp(enseignant), { width: COLW[1] }), cell(cp(apprenants, { keyColor: C.corrige }), { width: COLW[2] }),
    cell(cp([technique]), { width: COLW[3] }), cell(cp([support]), { width: COLW[4] }), cell(cp(observation, { italic: true }), { width: COLW[5] }),
  ]});
}
function deroulementTable(rows) { return table([...deroulementHeader(), ...rows], COLW); }

// ---------- leçon ----------
function leconTitre(text, anchor = null) { return titled(text, { anchor, size: 30, color: C.rouge, align: AlignmentType.LEFT, spacingAfter: 120 }); }
function leconSousTitre(text) { return titled(text, { size: 24, color: C.vert, align: AlignmentType.LEFT, spacingAfter: 80, spacingBefore: 160 }); }
function leconSousSous(text) { return p(`**${text}**`, { size: 22, keyColor: C.noir, spacingBefore: 80, keepNext: true }); }
function leconPara(text) { return p(text, { size: 22, keyColor: C.bleu, align: AlignmentType.JUSTIFIED, spacingAfter: 100 }); }
function leconPuce(text) { return p(`• ${text}`, { size: 22, keyColor: C.bleu, indent: 360, spacingAfter: 40 }); }
function legende(text) { return p(text, { size: 18, italic: true, align: AlignmentType.CENTER, spacingAfter: 160 }); }

// Bandeau « Méthode n — titre » + étapes
function methode(titre, etapes = [], { size = 22 } = {}) {
  const out = [new Table({
    width: { size: 9600, type: WidthType.DXA }, columnWidths: [9600], layout: TableLayoutType.FIXED, borders: boxBorders(C.methodeBord, 8),
    rows: [new TableRow({ children: [cell([p(`**${titre}**`, { size: size + 1, keyColor: "FFFFFF", color: "FFFFFF", spacingAfter: 0 })], { width: 9600, shading: C.methodeBord, margins: 70 })] })],
  })];
  etapes.forEach((e, i) => out.push(p(typeof e === "string" && !/^[•\-]/.test(e) && etapes.length > 1 ? `**${i + 1}.** ${e}` : e, { size, keyColor: C.bleu, indent: 360, spacingAfter: 50, spacingBefore: i === 0 ? 60 : 0, align: AlignmentType.JUSTIFIED })));
  out.push(empty(40));
  return out;
}

// Encadré formule : nom, formule (avec ⇒ abrégée), application numérique, résultat
function formule({ nom = null, formule, abrege = null, application = null, resultat = null, unite = "" }, { color = C.noir, width = 9600 } = {}) {
  const lines = [];
  if (nom) lines.push(p(`**${nom}**`, { size: 20, keyColor: C.gris, color: C.gris, spacingAfter: 20 }));
  lines.push(p(`**${formule}**${abrege ? `   ⇒   **${abrege}**` : ""}`, { size: 24, keyColor: C.bleu, color: C.bleu, spacingAfter: 40 }));
  (Array.isArray(application) ? application : application ? [application] : []).forEach((a) => lines.push(p(a, { size: 22, color, spacingAfter: 20, indent: 360 })));
  if (resultat) lines.push(p(`**${resultat}**${unite}`, { size: 22, keyColor: color, color, spacingAfter: 0, indent: 360 }));
  return [new Table({
    width: { size: width, type: WidthType.DXA }, columnWidths: [width], layout: TableLayoutType.FIXED, borders: boxBorders(C.formuleBord, 12),
    rows: [new TableRow({ children: [cell(lines, { width, shading: C.formuleFond, margins: 100 })] })],
  }), empty(60)];
}
function attention(text) {
  return [new Table({
    width: { size: 9600, type: WidthType.DXA }, columnWidths: [9600], layout: TableLayoutType.FIXED, borders: boxBorders(C.attentionBord, 8),
    rows: [new TableRow({ children: [cell([p(`**⚠ Attention !** ${text}`, { size: 21, keyColor: C.rouge, spacingAfter: 0, align: AlignmentType.JUSTIFIED })], { width: 9600, shading: C.attentionFond, margins: 90 })] })],
  }), empty(60)];
}
function retenir(text) {
  return [new Table({
    width: { size: 9600, type: WidthType.DXA }, columnWidths: [9600], layout: TableLayoutType.FIXED, borders: boxBorders(C.bleu, 8),
    rows: [new TableRow({ children: [cell([p(`**Je retiens :** ${text}`, { size: 22, keyColor: C.bleu, spacingAfter: 0, align: AlignmentType.JUSTIFIED })], { width: 9600, shading: "EAF1FB", margins: 90 })] })],
  }), empty(60)];
}

// Tableau de données simple
function dataTable(header, rows, { widths = null, size = 19, source = null, align = AlignmentType.LEFT, headShade = C.enteteFiche, color = C.bleu, center = false } = {}) {
  const n = header.length;
  const w = widths || Array(n).fill(Math.floor(9600 / n));
  const tr = new TableRow({ tableHeader: true, children: header.map((h, i) => cell([p(`**${h}**`, { size, keyColor: C.noir, spacingAfter: 0, align: AlignmentType.CENTER })], { width: w[i], shading: headShade })) });
  const body = rows.map((r) => new TableRow({ children: r.map((v, i) => cell([p(String(v), { size, keyColor: color, color: C.noir, spacingAfter: 0, align: center ? AlignmentType.CENTER : AlignmentType.LEFT })], { width: w[i] })) }));
  const out = [table([tr, ...body], w, { align })];
  if (source) out.push(p(`Source : ${source}`, { size: 18, italic: true, spacingAfter: 120 })); else out.push(empty(60));
  return out;
}

function figure(file, legendeTxt, { widthCm = 12, source = null } = {}) {
  if (!fs.existsSync(file)) return [p(`[Illustration à insérer : ${legendeTxt}]`, { italic: true })];
  const buf = fs.readFileSync(file);
  let wpx, hpx, type;
  if (buf[0] === 0x89) { wpx = buf.readUInt32BE(16); hpx = buf.readUInt32BE(20); type = "png"; }
  else { // JPEG : chercher SOF0/SOF2
    type = "jpg"; let i = 2;
    while (i < buf.length) { if (buf[i] !== 0xff) { i++; continue; } const marker = buf[i + 1]; if ([0xc0, 0xc1, 0xc2].includes(marker)) { hpx = buf.readUInt16BE(i + 5); wpx = buf.readUInt16BE(i + 7); break; } i += 2 + buf.readUInt16BE(i + 2); }
    if (!wpx) { wpx = 4; hpx = 3; }
  }
  const hcm = widthCm * hpx / wpx; const px = (cm) => Math.round(cm * 37.8);
  return [
    new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 120, after: 40 }, children: [new ImageRun({ type, data: buf, transformation: { width: px(widthCm), height: px(hcm) } })] }),
    legende(`${legendeTxt}${source ? ` — Source : ${source}` : ""}`),
  ];
}

// =====================================================================
//                     OUTILS MATHÉMATIQUES (Word natif)
// =====================================================================

// ----- Tableau de numération -----
// n : entier ou décimal (nombre ou chaîne "308,67") ; showAll : forcer toutes les classes jusqu'à maxClass
const CLASSES = [
  { nom: "Classe des milliards", shade: C.classeMilliards }, { nom: "Classe des millions", shade: C.classeMillions },
  { nom: "Classe des mille", shade: C.classeMille }, { nom: "Classe des unités simples", shade: C.classeUnites },
];
function numerationTable(values, { maxClasses = null, decimals = null, size = 20, titre = null, lecture = true, color = C.noir } = {}) {
  // values : liste de nombres (ou chaînes avec virgule) ; une ligne par nombre
  const vals = (Array.isArray(values) ? values : [values]).map((v) => String(v).replace(/\s|\u00A0/g, "").replace(".", ","));
  let maxInt = 1, maxDec = 0;
  vals.forEach((v) => { const [e, d = ""] = v.split(","); maxInt = Math.max(maxInt, e.length); maxDec = Math.max(maxDec, d.length); });
  const nClasses = maxClasses || Math.max(1, Math.ceil(maxInt / 3));
  const nDec = decimals === null ? maxDec : decimals;
  const classes = CLASSES.slice(4 - nClasses);
  const cw = 560, dw = 640, vw = 240;
  const widths = []; classes.forEach(() => widths.push(cw, cw, cw)); if (nDec) { widths.push(vw); for (let i = 0; i < nDec; i++) widths.push(dw); }
  const hcell = (txt, w, shade, span = 1) => cell([centered(`**${txt}**`, { size: size - 2, keyColor: C.noir })], { width: w, shading: shade, colSpan: span, vAlign: VerticalAlign.CENTER, margins: 30 });
  const row1 = [], row2 = [];
  classes.forEach((c) => { row1.push(hcell(c.nom, cw * 3, c.shade, 3)); ["C", "D", "U"].forEach((l) => row2.push(hcell(l, cw, c.shade))); });
  if (nDec) {
    row1.push(hcell("", vw, "FFFFFF", 1)); row1.push(hcell("Partie décimale", dw * nDec, C.classeDecimale, nDec));
    row2.push(hcell(",", vw, "FFFFFF")); ["dixièmes", "centièmes", "millièmes"].slice(0, nDec).forEach((l) => row2.push(hcell(l, dw, C.classeDecimale)));
  }
  const rows = [new TableRow({ tableHeader: true, children: row1 }), new TableRow({ tableHeader: true, children: row2 })];
  vals.forEach((v) => {
    const [e, d = ""] = v.split(",");
    const digits = e.padStart(nClasses * 3, " ").split("");
    const cells = digits.map((ch) => cell([centered(ch.trim() ? `**${ch}**` : "", { size: size + 2, keyColor: color })], { width: cw, margins: 30 }));
    if (nDec) {
      cells.push(cell([centered(d ? "**,**" : "", { size: size + 2, keyColor: color })], { width: vw, margins: 30 }));
      d.padEnd(nDec, " ").split("").forEach((ch) => cells.push(cell([centered(ch.trim() ? `**${ch}**` : "", { size: size + 2, keyColor: color })], { width: dw, margins: 30 })));
    }
    rows.push(new TableRow({ children: cells }));
  });
  const out = [];
  if (titre) out.push(p(titre, { size: 20, italic: true, spacingAfter: 40, keepNext: true }));
  out.push(table(rows, widths, { align: AlignmentType.CENTER }));
  if (lecture) vals.forEach((v) => out.push(p(`${fmt(v.includes(",") ? +v.replace(",", ".") : +v)} se lit : « **${enLettres(v)}** ».`, { size: 20, keyColor: color, spacingBefore: 40, spacingAfter: 20, align: AlignmentType.CENTER })));
  out.push(empty(60));
  return out;
}

// ----- Nombres en lettres (orthographe traditionnelle : traits d'union sous 100) -----
const U = ["", "un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", "dix", "onze", "douze", "treize", "quatorze", "quinze", "seize", "dix-sept", "dix-huit", "dix-neuf"];
const D = ["", "dix", "vingt", "trente", "quarante", "cinquante", "soixante", "soixante", "quatre-vingt", "quatre-vingt"];
function moins100(n, followed = false) {
  if (n < 20) return U[n];
  const d = Math.floor(n / 10), u = n % 10;
  if (d === 7 || d === 9) { const r = n - (d - 1) * 10; return D[d] + (r === 11 && d === 7 ? " et " : "-") + U[r]; }
  if (u === 0) return D[d] + (d === 8 && !followed ? "s" : "");
  if (u === 1 && d !== 8) return D[d] + " et un";
  return D[d] + "-" + U[u];
}
function moins1000(n, followed = false) {
  const c = Math.floor(n / 100), r = n % 100;
  let s = "";
  if (c === 1) s = "cent"; else if (c > 1) s = U[c] + " cent" + (r === 0 && !followed ? "s" : "");
  if (r) s += (s ? " " : "") + moins100(r, followed);
  return s;
}
function enLettres(n) {
  let str = String(n).replace(/\s|\u00A0/g, "");
  if (str.includes(",") || str.includes(".")) {
    const [e, d] = str.replace(".", ",").split(",");
    const names = ["dixième", "centième", "millième"];
    const part = names[d.length - 1] || "millième";
    const dn = parseInt(d, 10);
    return `${enLettres(e)} unité${+e > 1 ? "s" : ""} et ${enLettres(String(dn))} ${part}${dn > 1 ? "s" : ""}`;
  }
  const num = parseInt(str, 10);
  if (num === 0) return "zéro";
  const parts = [];
  const md = Math.floor(num / 1e9), mi = Math.floor((num % 1e9) / 1e6), mil = Math.floor((num % 1e6) / 1000), u = num % 1000;
  if (md) parts.push(moins1000(md) + (md > 1 ? " milliards" : " milliard"));
  if (mi) parts.push(moins1000(mi) + (mi > 1 ? " millions" : " million"));
  if (mil) parts.push((mil === 1 ? "" : moins1000(mil, true) + " ") + "mille");
  if (u) parts.push(moins1000(u));
  return parts.join(" ");
}

// ----- Tableau de conversion avec flèches -----
const UNITES = {
  longueur: { list: ["km", "hm", "dam", "m", "dm", "cm", "mm"], base: "m", nom: "longueur" },
  masse: { list: ["kg", "hg", "dag", "g", "dg", "cg", "mg"], base: "g", nom: "masse" },
  masseT: { list: ["t", "q", "", "kg", "hg", "dag", "g"], base: "g", nom: "masse" },
  capacite: { list: ["kL", "hL", "daL", "L", "dL", "cL", "mL"], base: "L", nom: "capacité" },
  aire: { list: ["km²", "hm²", "dam²", "m²", "dm²", "cm²", "mm²"], base: "m²", nom: "aire", pas: 2 },
  agraire: { list: ["km²", "hm²", "dam²", "m²"], base: "m²", nom: "aire", pas: 2, alias: ["", "ha", "a", "ca"] },
  volume: { list: ["m³", "dm³", "cm³", "mm³"], base: "m³", nom: "volume", pas: 3 },
};
const EXP = { longueur: { km: 3, hm: 2, dam: 1, m: 0, dm: -1, cm: -2, mm: -3 }, masse: { t: 6, q: 5, kg: 3, hg: 2, dag: 1, g: 0, dg: -1, cg: -2, mg: -3 },
  capacite: { kL: 3, hL: 2, daL: 1, L: 0, dL: -1, cL: -2, mL: -3, kl: 3, hl: 2, dal: 1, l: 0, dl: -1, cl: -2, ml: -3 },
  aire: { "km²": 6, "hm²": 4, "dam²": 2, "m²": 0, "dm²": -2, "cm²": -4, "mm²": -6, ha: 4, a: 2, ca: 0 }, volume: { "m³": 0, "dm³": -3, "cm³": -6, "mm³": -9 } };
function famille(u) { for (const [f, m] of Object.entries(EXP)) if (u in m) return f; throw new Error("unité inconnue " + u); }
const normU = (u) => ({ l: "L", dl: "dL", cl: "cL", ml: "mL", dal: "daL", hl: "hL", kl: "kL" }[u] || u);
const colU = (u) => ({ ha: "hm²", a: "dam²", ca: "m²" }[u] || u); // unité agraire → colonne du tableau

// convert(value, from, to) → { result:number, resultStr, digits per column, comma position }
function convert(value, from, to) {
  const f = famille(from); const e1 = EXP[f][from], e2 = EXP[f][to];
  const k = e1 - e2; // >0 : vers la droite → ×10^k
  const v = typeof value === "string" ? parseFloat(value.replace(/\s|\u00A0/g, "").replace(",", ".")) : value;
  const res = +(v * Math.pow(10, k)).toPrecision(12);
  return { result: res, k, from, to, famille: f };
}
function convResStr(res) { return fmt(res); }

// Ligne d'un tableau de conversion : place les chiffres de value (unité from) dans les colonnes, virgule après la colonne `to`
function convCells(value, from, to, cols, pas) {
  const vstr = String(value).replace(/\s|\u00A0/g, "").replace(".", ",");
  let [ent, dec = ""] = vstr.split(",");
  // position colonne de `from` et `to`
  const idxFrom = cols.indexOf(from), idxTo = cols.indexOf(to);
  // chaque colonne a `pas` chiffres ; construire la chaîne de chiffres avec la position de l'unité
  // chiffres de la partie entière : le dernier chiffre est dans la case de `from` (position la plus à droite de cette case)
  const cellsTxt = cols.map(() => "");
  // remplir vers la gauche
  let digits = ent.split("").reverse();
  for (let c = idxFrom, i = 0; i < digits.length; c--) {
    let s = "";
    for (let j = 0; j < pas && i < digits.length; j++, i++) s = digits[i] + s;
    if (c >= 0) cellsTxt[c] = s + cellsTxt[c]; else cellsTxt[0] = s + cellsTxt[0];
  }
  // décimales vers la droite
  let dd = dec.split("");
  for (let c = idxFrom + 1, i = 0; i < dd.length; c++) {
    let s = "";
    for (let j = 0; j < pas && i < dd.length; j++, i++) s += dd[i];
    if (c < cols.length) cellsTxt[c] += s; else cellsTxt[cols.length - 1] += s;
  }
  // compléter avec des 0 : entre from et to (les deux sens)
  const lo = Math.min(idxFrom, idxTo), hi = Math.max(idxFrom, idxTo);
  const firstSig = cellsTxt.findIndex((x) => x); // première case portant un chiffre significatif
  const lastSig = cellsTxt.length - 1 - [...cellsTxt].reverse().findIndex((x) => x);
  for (let c = lo; c <= hi; c++) if (!cellsTxt[c]) cellsTxt[c] = c < firstSig ? "0" : "0".repeat(pas);
  // cases partiellement remplies : à gauche de l'unité donnée on complète par des 0 devant (sauf la case la plus à gauche) ; à droite (décimales) on complète par des 0 derrière
  const first2 = cellsTxt.findIndex((x) => x);
  for (let c = first2 + 1; c <= Math.max(hi, lastSig); c++) if (cellsTxt[c] && cellsTxt[c].length < pas) cellsTxt[c] = c <= idxFrom ? cellsTxt[c].padStart(pas, "0") : cellsTxt[c].padEnd(pas, "0");
  // si la colonne cible est à droite de la dernière décimale, compléter les cases vides à droite jusqu'à to par des 0 (déjà fait par lo..hi) ; cases après `to` gardent d'éventuelles décimales
  return { cellsTxt, idxFrom, idxTo };
}
function convRow(value, from, to, cols, famName, { size = 20, color = C.noir, shadeTo = "FFF2CC" } = {}) {
  const pas = UNITES[famName].pas || 1;
  const { cellsTxt, idxTo } = convCells(value, from, to, cols, pas);
  const rowCells = cols.map((u, c) => {
    const txt = cellsTxt[c]; const isTo = c === idxTo;
    const comma = isTo && cellsTxt.slice(idxTo + 1).some((x) => x && /[1-9]/.test(x)) ? "," : "";
    const shown = txt ? `**${txt}${comma}**` : "";
    return cell([centered(shown, { size: size + 2, keyColor: color })], { width: 900, shading: isTo ? shadeTo : null, margins: 30 });
  });
  return new TableRow({ children: rowCells });
}

// conversionTable(famille, [ [value, from, to], ... ]) — flèches au-dessus, colonnes d'unités, une ligne par conversion, phrase-résultat
function conversionTable(famName, conversions, { size = 20, color = C.noir, resultats = true, legendeFleches = true, explication = true } = {}) {
  const fam = UNITES[famName]; const cols = fam.list; const n = cols.length; const w = Array(n).fill(900);
  const pas = fam.pas || 1; const facteur = pas === 1 ? "10" : pas === 2 ? "100" : "1 000";
  const arrowRow1 = new TableRow({ children: cols.map((u, i) => cell([centered(i < n - 1 ? `**× ${facteur} →**` : "", { size: size - 3, keyColor: C.vert, color: C.vert })], { width: 900, margins: 20, borders: { top: none, left: none, right: none, bottom: none } })) });
  const arrowRow2 = new TableRow({ children: cols.map((u, i) => cell([centered(i > 0 ? `**← ÷ ${facteur}**` : "", { size: size - 3, keyColor: C.rouge, color: C.rouge })], { width: 900, margins: 20, borders: { top: none, left: none, right: none, bottom: none } })) });
  const unitRow = new TableRow({ tableHeader: true, children: cols.map((u, i) => cell([centered(`**${u}**${fam.alias && fam.alias[i] ? ` (${fam.alias[i]})` : ""}`, { size, keyColor: u === fam.base ? C.rouge : C.noir })], { width: 900, shading: u === fam.base ? "FFE0B2" : C.enteteFiche, margins: 30 })) });
  const rows = [arrowRow1, arrowRow2, unitRow];
  const out = [];
  const outer = { top: none, bottom: none, left: none, right: none, insideHorizontal: thin, insideVertical: thin };
  const results = [];
  conversions.forEach(([v, from, to]) => {
    const fr = normU(from), t = normU(to);
    rows.push(convRow(v, colU(fr), colU(t), cols, famName, { size, color }));
    const r = convert(v, fr, t); results.push({ v, from: fr, to: t, r });
  });
  // bordures : lignes de flèches sans bordure, reste fin
  out.push(new Table({ width: { size: 900 * n, type: WidthType.DXA }, columnWidths: w, layout: TableLayoutType.FIXED, alignment: AlignmentType.CENTER, borders: thinBorders(), rows }));
  if (legendeFleches) out.push(p(`**Vers la droite** (→) : l'unité devient plus petite, le nombre devient plus grand : on ajoute des 0 ou on déplace la virgule vers la droite. **Vers la gauche** (←) : l'unité devient plus grande, le nombre devient plus petit : on place (ou on déplace) la virgule juste après le chiffre de l'unité demandée.`, { size: 18, italic: true, keyColor: C.noir, spacingBefore: 60, spacingAfter: 60, align: AlignmentType.JUSTIFIED }));
  if (resultats) results.forEach(({ v, from, to, r }) => {
    const sens = r.k > 0 ? "vers la droite" : "vers la gauche";
    const nb = Math.abs(r.k);
    const expl = explication ? (r.k > 0
      ? ` (${sens} : ${nb} colonne${nb > 1 ? "s" : ""}, ${String(v).includes(",") ? "on déplace la virgule de " + nb + " rang" + (nb > 1 ? "s" : "") + " et on complète par des 0 si besoin" : "on ajoute " + nb + " zéro" + (nb > 1 ? "s" : "")})`
      : ` (${sens} : ${nb} colonne${nb > 1 ? "s" : ""}, on place la virgule juste après le chiffre des ${to})`) : "";
    out.push(p(`**${fmt(typeof v === "string" ? +v.replace(",", ".") : v)} ${from} = ${fmt(r.result)} ${to}**${expl}`, { size: 20, keyColor: color, color, spacingAfter: 30, indent: 360 }));
  });
  out.push(empty(60));
  return out;
}

// ----- Opérations posées -----
const digitsOf = (n) => String(n).split("");
function opCell(txt, w, { size = 26, color = C.noir, bold = true, shade = null, borders = null, sup = null, sub = null, post = "", align = AlignmentType.CENTER } = {}) {
  const children = [];
  if (sup) children.push(new TextRun({ text: sup, superScript: true, color: C.retenue, size: size - 6, font: FONT, bold: true }));
  children.push(new TextRun({ text: txt, bold, color, size, font: FONT }));
  if (sub) children.push(new TextRun({ text: sub, subScript: true, color: C.retenue, size: size - 6, font: FONT, bold: true }));
  if (post) children.push(new TextRun({ text: post, bold, color, size, font: FONT }));
  return cell([new Paragraph({ alignment: align, spacing: { after: 0 }, children })], { width: w, shading: shade, margins: 30, borders: borders || noBorders() });
}
// Addition ou soustraction posée (entiers ou décimaux) — retenues affichées
function opPosee(a, op, b, { size = 26, color = C.noir, showRetenues = true } = {}) {
  // travail sur des chaînes décimales alignées
  const toStr = (x) => (typeof x === "number" ? (Number.isInteger(x) ? String(x) : String(+x.toFixed(6)).replace(".", ",")) : String(x).replace(/\s|\u00A0/g, "").replace(".", ","));
  let sa = toStr(a), sb = toStr(b);
  const dec = Math.max((sa.split(",")[1] || "").length, (sb.split(",")[1] || "").length);
  const norm = (s) => { let [e, d = ""] = s.split(","); return e + d.padEnd(dec, "0"); };
  const A = norm(sa), B = norm(sb);
  const isAdd = op === "+";
  const bigA = BigInt(A), bigB = BigInt(B);
  const R = String(isAdd ? bigA + bigB : bigA - bigB);
  const L = Math.max(A.length, B.length, R.length);
  const pa = A.padStart(L, " "), pb = B.padStart(L, " "), pr = R.padStart(L, " ");
  // retenues
  const ret = Array(L).fill(""); const sous = Array(L).fill("");
  let carry = 0;
  for (let i = L - 1; i >= 0; i--) {
    const da = +(pa[i].trim() || 0), db = +(pb[i].trim() || 0);
    if (isAdd) { const s = da + db + carry; carry = s >= 10 ? 1 : 0; if (carry && i > 0) ret[i - 1] = "1"; }
    else { let top = da + carry * 0; let d = da; if (d + (carry ? 0 : 0) < db + carry) { /* emprunt */ } }
  }
  if (!isAdd) { // méthode par compensation : petit 1 devant le chiffre du haut, petit 1 sous le chiffre du bas de la colonne suivante
    let borrow = 0;
    for (let i = L - 1; i >= 0; i--) {
      const da = +(pa[i].trim() || 0), db = +(pb[i].trim() || 0) + borrow;
      if (da < db) { ret[i] = "1"; borrow = 1; if (i > 0) sous[i - 1] = "1"; } else borrow = 0;
    }
  }
  const w = 420; const widths = [500, ...Array(L).fill(w)];
  const commaAt = dec ? L - dec : -1; // index de la colonne après laquelle on met la virgule (colonne commaAt-1 suivie de virgule)
  const mk = (txt, i, opts = {}) => opCell(txt, w, { size, color, post: dec && i === commaAt - 1 && txt.trim() ? "," : "", ...opts });
  const rows = [];
  if (showRetenues && ret.some((x) => x) && isAdd) rows.push(new TableRow({ children: [opCell("", 500), ...ret.map((r) => opCell(r, w, { size: size - 8, color: C.retenue }))] }));
  rows.push(new TableRow({ children: [opCell("", 500), ...pa.split("").map((d, i) => mk(d, i, { sup: !isAdd && ret[i] ? "1" : null }))] }));
  rows.push(new TableRow({ children: [opCell(op === "-" ? "−" : op, 500, { color: C.vert, size }), ...pb.split("").map((d, i) => mk(d, i, { sub: !isAdd && sous[i] ? "1" : null }))] }));
  const lineB = { top: thick(C.noir, 12), bottom: none, left: none, right: none };
  rows.push(new TableRow({ children: [opCell("", 500, { borders: lineB }), ...pr.split("").map((d, i) => mk(d, i, { color: C.rouge, borders: lineB }))] }));
  const t = new Table({ width: { size: widths.reduce((x, y) => x + y, 0), type: WidthType.DXA }, columnWidths: widths, layout: TableLayoutType.FIXED, alignment: AlignmentType.CENTER, borders: noBorders(), rows });
  const resNum = dec ? R.slice(0, R.length - dec).padStart(1, "0") + "," + R.slice(R.length - dec) : R;
  return { table: t, result: resNum.replace(/^,/, "0,"), resultFmt: fmt(dec ? +R / Math.pow(10, dec) : +R, dec || null) };
}

// Multiplication posée : a × b (entiers ou décimaux)
function multPosee(a, b, { size = 26, color = C.noir } = {}) {
  const toStr = (x) => (typeof x === "number" ? String(x).replace(".", ",") : String(x).replace(/\s|\u00A0/g, "").replace(".", ","));
  const sa = toStr(a), sb = toStr(b);
  const da = (sa.split(",")[1] || "").length, db = (sb.split(",")[1] || "").length; const dec = da + db;
  const A = sa.replace(",", ""), B = sb.replace(",", "");
  const bigA = BigInt(A), bigB = BigInt(B);
  const prod = String(bigA * bigB);
  const partials = B.split("").reverse().map((d, i) => ({ d: +d, shift: i, val: String(bigA * BigInt(d)) }));
  const L = Math.max(prod.length, A.length, B.length, ...partials.map((p) => p.val.length + p.shift)) + 0;
  const w = 420; const widths = [500, ...Array(L).fill(w)];
  const pad = (s, shift = 0) => (s + " ".repeat(shift)).padStart(L, " ");
  const withComma = (s, nd) => { if (!nd) return s; const arr = s.split(""); return arr; };
  const rowOf = (s, { sign = "", colorD = color, borders = null, commaPos = -1, small = false } = {}) => new TableRow({ children: [opCell(sign, 500, { color: C.vert, size, borders }), ...s.split("").map((ch, i) => opCell(ch + (commaPos === i && ch.trim() ? "," : ""), w, { size: small ? size - 8 : size, color: colorD, borders }))] });
  const rows = [];
  rows.push(rowOf(pad(A), { commaPos: da ? L - da - 1 : -1 }));
  const lineB = { top: thick(C.noir, 12), bottom: none, left: none, right: none };
  rows.push(rowOf(pad(B), { sign: "×", borders: lineB, commaPos: db ? L - db - 1 : -1 }));
  if (partials.length > 1) {
    partials.forEach((pt, i) => rows.push(rowOf(pad(pt.val, pt.shift).replace(/ (?=\s*$)/g, " "), { sign: i === partials.length - 1 ? "+" : "", colorD: C.bleu })));
    // remplacer les espaces de décalage par des points ? on laisse vide (usage courant : on décale)
    rows.push(rowOf(pad(prod), { colorD: C.rouge, borders: lineB, commaPos: dec ? L - dec - 1 : -1 }));
  } else {
    rows.push(rowOf(pad(prod), { colorD: C.rouge, commaPos: dec ? L - dec - 1 : -1 }));
  }
  const t = new Table({ width: { size: widths.reduce((x, y) => x + y, 0), type: WidthType.DXA }, columnWidths: widths, layout: TableLayoutType.FIXED, alignment: AlignmentType.CENTER, borders: noBorders(), rows });
  const res = dec ? +prod / Math.pow(10, dec) : Number(prod);
  return { table: t, result: res, resultFmt: fmt(res, dec || null).replace(/,?0+$/, (m) => (dec ? "" : m)), prod, dec };
}

// Division posée (potence) — mode "long" : produits partiels écrits ; "court" : restes seulement
// a entier ou décimal, b entier ; decimales : nombre de décimales à pousser au quotient si reste ≠ 0
function potence(a, b, { mode = "long", decimales = 0, size = 24 } = {}) {
  const sa = String(a).replace(/\s|\u00A0/g, "").replace(".", ",");
  const [ent, decPart = ""] = sa.split(",");
  const digitsAll = (ent + decPart).split("").map(Number);
  const commaIndex = decPart ? ent.length : -1; // index du chiffre après lequel commence la partie décimale
  const extra = decimales; // chiffres 0 ajoutés
  const digits = [...digitsAll, ...Array(extra).fill(0)];
  const totalComma = commaIndex >= 0 ? commaIndex : (extra ? ent.length : -1);
  const lines = []; // { text, kind } en police mono, alignées à droite sur la position de chiffre
  const width = digits.length + 2;
  const posLine = (s, endPos) => s.padStart(endPos + 1 + 1, " ").padEnd(width, " "); // endPos = index du dernier chiffre (0-based) ; +1 pour le signe
  // affichage du dividende avec virgule
  const divStr = digits.map((d, i) => (i === totalComma && i > 0 ? "," + d : String(d))).join("");
  let q = ""; let r = 0; let started = false;
  let firstStep = true;
  const steps = [];
  for (let i = 0; i < digits.length; i++) {
    const cur = r * 10 + digits[i];
    const qd = Math.floor(cur / b);
    if (!started && qd === 0 && i < digits.length - 1 && !(i === totalComma)) { r = cur; continue; }
    started = true;
    if (i === totalComma && totalComma > 0) q += ",";
    q += qd;
    steps.push({ i, cur, qd, prod: qd * b, rest: cur - qd * b });
    r = cur - qd * b;
  }
  if (q === "") q = "0";
  // construire les lignes
  let out = []; // strings mono
  const posOf = (i) => i + (totalComma > 0 && i >= totalComma ? 1 : 0); // position dans divStr
  out.push({ txt: divStr.padEnd(width + 1), first: true });
  let prevRest = null;
  steps.forEach((st, k) => {
    const endPos = posOf(st.i);
    if (mode === "long") {
      if (k === 0) { // première étape : partiel = cur = premiers chiffres
        out.push({ txt: ("−" + String(st.prod)).padStart(endPos + 2).padEnd(width + 1), sign: true });
        out.push({ txt: "—".repeat(String(st.cur).length + 1).padStart(endPos + 2).padEnd(width + 1), rule: true });
      } else {
        out.push({ txt: ("−" + String(st.prod)).padStart(endPos + 2).padEnd(width + 1), sign: true });
        out.push({ txt: "—".repeat(String(st.cur).length + 1).padStart(endPos + 2).padEnd(width + 1), rule: true });
      }
      // reste + chiffre abaissé (si étape suivante)
      const nxt = steps[k + 1];
      let restStr = String(st.rest);
      if (nxt) {
        // abaisser tous les chiffres entre st.i+1 et nxt.i
        const lowered = digits.slice(st.i + 1, nxt.i + 1).join("");
        restStr = (st.rest === 0 && lowered ? "0" : String(st.rest)) + lowered;
        out.push({ txt: restStr.padStart(posOf(nxt.i) + 2).padEnd(width + 1), rest: true });
      } else {
        out.push({ txt: restStr.padStart(endPos + 2).padEnd(width + 1), rest: true, final: true });
      }
    } else { // court : on écrit seulement le reste suivi du chiffre abaissé
      const nxt = steps[k + 1];
      let restStr = String(st.rest);
      if (nxt) { const lowered = digits.slice(st.i + 1, nxt.i + 1).join(""); restStr = (st.rest === 0 && lowered ? "0" : String(st.rest)) + lowered; out.push({ txt: restStr.padStart(posOf(nxt.i) + 2).padEnd(width + 1), rest: true }); }
      else out.push({ txt: restStr.padStart(endPos + 2).padEnd(width + 1), rest: true, final: true });
    }
  });
  const mono = (txt, { color = C.noir, bold = false } = {}) => new Paragraph({ spacing: { after: 0, line: 240 }, children: [new TextRun({ text: txt.replace(/ /g, NBSP), font: MONO, size, color, bold })] });
  const leftLines = out.map((l) => mono(l.txt, { color: l.final ? C.rouge : l.sign ? C.vert : C.noir, bold: !!l.first || !!l.final }));
  const leftW = Math.max(2200, (width + 2) * 150), rightW = Math.max(1600, (String(b).length + q.length + 2) * 150);
  const vline = { style: BorderStyle.SINGLE, size: 12, color: C.noir };
  const rows = [
    new TableRow({ children: [
      cell([leftLines[0]], { width: leftW, borders: { top: none, bottom: none, left: none, right: vline }, margins: 40 }),
      cell([mono(" " + String(b), { bold: true })], { width: rightW, borders: { top: none, bottom: vline, left: vline, right: none }, margins: 40 }),
    ]}),
    new TableRow({ children: [
      cell(leftLines.slice(1), { width: leftW, borders: { top: none, bottom: none, left: none, right: vline }, margins: 40 }),
      cell([mono(" " + q, { color: C.rouge, bold: true })], { width: rightW, borders: { top: vline, bottom: none, left: vline, right: none }, margins: 40, vAlign: VerticalAlign.TOP }),
    ]}),
  ];
  const t = new Table({ width: { size: leftW + rightW, type: WidthType.DXA }, columnWidths: [leftW, rightW], layout: TableLayoutType.FIXED, alignment: AlignmentType.CENTER, borders: noBorders(), rows });
  const quotient = q.includes(",") ? +q.replace(",", ".") : +q;
  return { table: t, quotient, quotientStr: q.replace(".", ","), reste: r, exact: r === 0 };
}

// ----- Preuve par 9 -----
const racine9 = (n) => { let s = String(n).replace(/\D/g, "").split("").reduce((a, c) => a + +c, 0); while (s >= 10) s = String(s).split("").reduce((a, c) => a + +c, 0); return s === 9 ? 0 : s; };
function preuve9({ op = "×", a, b, q = null, r = 0, produit = null, size = 22 }) {
  const N = (x) => (typeof x === "string" && /^\d+$/.test(x) ? +x : x); a = N(a); b = N(b); q = N(q); produit = N(produit);
  // Disposition habituelle des élèves : les deux nombres réduits en HAUT et en BAS, le produit des deux à GAUCHE, la réduction du résultat à DROITE.
  // × : haut = racine(a), bas = racine(b), gauche = racine(haut × bas), droite = racine(produit)
  // ÷ : a = dividende, b = diviseur, q = quotient, r = reste ; haut = racine(b), bas = racine(q), gauche = racine(h×b + racine(r)), droite = racine(a)
  let h, bas, g, d, txt;
  if (op === "×") {
    h = racine9(a); bas = racine9(b); g = racine9(h * bas); d = racine9(produit);
    txt = [`Somme des chiffres de ${fmt(a)} → ${h} (en haut) ; de ${fmt(b)} → ${bas} (en bas).`, `${h} × ${bas} = ${h * bas} → ${g} (à gauche).`, `Somme des chiffres du produit ${fmt(produit)} → ${d} (à droite).`];
  } else {
    h = racine9(b); bas = racine9(q); const rr = racine9(r); g = racine9(h * bas + rr); d = racine9(a);
    txt = [`Somme des chiffres du diviseur ${fmt(b)} → ${h} (en haut) ; du quotient ${fmt(q)} → ${bas} (en bas).`, `${h} × ${bas} = ${h * bas}${r ? ` ; on ajoute le reste réduit (${fmt(r)} → ${rr}) : ${h * bas} + ${rr} = ${h * bas + rr}` : ""} → ${g} (à gauche).`, `Somme des chiffres du dividende ${fmt(a)} → ${d} (à droite).`];
  }
  const ok = g === d;
  const w = 520; const c = (t, col = C.noir) => cell([centered(t ? `**${t}**` : "", { size: size + 4, keyColor: col })], { width: w, margins: 20, borders: noBorders() });
  const cross = new Table({ width: { size: w * 3, type: WidthType.DXA }, columnWidths: [w, w, w], layout: TableLayoutType.FIXED, alignment: AlignmentType.CENTER, borders: noBorders(), rows: [
    new TableRow({ children: [c(""), c(String(h)), c("")] }),
    new TableRow({ children: [c(String(g), C.bleu), c("✕", C.gris), c(String(d), C.bleu)] }),
    new TableRow({ children: [c(""), c(String(bas)), c("")] }),
  ]});
  const lines = [p(`**Preuve par 9** (rappel : si la somme des chiffres vaut 9, on écrit 0) :`, { size, keyColor: C.noir, spacingAfter: 20 })];
  return [ ...lines, cross, ...txt.map((t) => p(t, { size: size - 2, indent: 360, spacingAfter: 10 })), p(ok ? `**Gauche = droite (${g} = ${d}) : l'opération est juste.**` : `Gauche ≠ droite : il y a une erreur.`, { size, keyColor: C.vert, color: ok ? C.vert : C.rouge, indent: 360, spacingAfter: 80 }) ];
}

module.exports = {
  convCells, UNITES, C, FONT, MONO, NBSP, fmt, ar, runs, frac, p, empty, pageBreak, titled, tocLink, cell, table, centered, noBorders, thinBorders, boxBorders,
  metaTable, deroulementTable, sectionRow, stepRow, COLW,
  leconTitre, leconSousTitre, leconSousSous, leconPara, leconPuce, legende, methode, formule, attention, retenir, dataTable, figure,
  numerationTable, enLettres, conversionTable, convert, UNITES, EXP, normU, opPosee, multPosee, potence, preuve9, racine9, AlignmentType,
};
