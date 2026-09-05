// Corrigés détaillés générés automatiquement à partir des énoncés V1 (et des nouveaux énoncés)
// Chaque solveur renvoie une liste d'éléments docx (paragraphes / tableaux) en couleur corrigé.
const B = require("./builders");
const { C, fmt, ar, p, NBSP } = B;

const num = (s) => parseFloat(String(s).replace(/\s|\u00A0/g, "").replace(",", "."));
const isDec = (s) => /,/.test(String(s));
const cp = (t, o = {}) => p(t, { size: 21, keyColor: C.corrige, color: C.noir, indent: 360, spacingAfter: 30, ...o });
let LAST_SHORT = "";
const res = (t) => { LAST_SHORT = String(t).replace(/\*\*/g, ""); return p(`**${t}**`, { size: 22, keyColor: C.corrige, color: C.corrige, indent: 360, spacingAfter: 60 }); };
// wrap : renvoie { els, short } (short = dernier résultat enregistré par res())
const wrap = (fn) => (...args) => { LAST_SHORT = ""; const els = fn(...args); return { els, short: LAST_SHORT }; };
const pgcd = (a, b) => (b ? pgcd(b, a % b) : a);
const F = (spec) => { LAST_SHORT = String(spec.resultat || "").replace(/\*\*/g, ""); return B.formule(spec, { color: C.corrige }); };

// ---------------- Numération ----------------
function ecrireEnLettres(n, label = "") {
  return [cp(`${label}Je place ${fmt(n)} dans le tableau de numération, puis je lis classe par classe :`), ...B.numerationTable([n], { lecture: false, color: C.corrige }), res(`${fmt(n)} s'écrit : ${B.enLettres(n)}.`)];
}
function ecrireEnChiffres(lettres, n, label = "") {
  return [cp(`${label}« ${lettres} » : je repère les classes (millions, mille, unités) et j'écris chaque classe sur 3 chiffres dans le tableau :`), ...B.numerationTable([n], { lecture: false, color: C.corrige }), res(`« ${lettres} » s'écrit ${fmt(n)}.`)];
}
const fs_ = (x) => { if (!(typeof x === "string" && /,/.test(x))) return fmt(num(x)); const [e, d] = x.replace(/\s|\u00A0/g, "").split(","); return e.replace(/\B(?=(\d{3})+(?!\d))/g, NBSP) + "," + d; };
function comparer(a, b, label = "") {
  const A = num(a), Bv = num(b);
  const dA = fs_(a), dB = fs_(b);
  const sa = String(a).replace(/\s|\u00A0/g, ""), sb = String(b).replace(/\s|\u00A0/g, "");
  const sign = A > Bv ? ">" : A < Bv ? "<" : "=";
  const lines = [cp(`${label}Je place les deux nombres dans le tableau de numération et je compare :`), ...B.numerationTable([a, b], { lecture: false, color: C.corrige })];
  if (!sa.includes(",") && sa.length !== sb.length) lines.push(cp(`${fmt(A)} a ${sa.length} chiffres et ${fmt(Bv)} en a ${sb.length} : le nombre qui a le plus de chiffres est le plus grand.`));
  else if (sign === "=") lines.push(cp("Tous les chiffres sont identiques : les deux nombres sont égaux."));
  else {
    const [ea, da = ""] = sa.split(","), [eb, db = ""] = sb.split(",");
    if (ea !== eb) { let i = 0; while (ea[i] === eb[i]) i++; const rang = ["", "unités", "dizaines", "centaines"][ea.length - i] || `rang ${ea.length - i}`; lines.push(cp(`Même nombre de chiffres${sa.includes(",") ? " avant la virgule" : ""} : je compare chiffre par chiffre en partant de la gauche. Premier chiffre différent : ${ea[i]} et ${eb[i]} (${rang}), et ${ea[i]} ${+ea[i] > +eb[i] ? ">" : "<"} ${eb[i]}.`)); }
    else { let i = 0; while (da[i] === db[i] && i < Math.max(da.length, db.length)) i++; lines.push(cp(`Les parties entières sont égales (${fmt(+ea)}) : je compare la partie décimale chiffre par chiffre après la virgule. ${["Dixièmes", "Centièmes", "Millièmes"][i] || "Chiffre"} : ${da[i] || 0} et ${db[i] || 0}.`)); }
  }
  lines.push(res(`${dA} ${sign} ${dB}`));
  return lines;
}
function encadrer(x, label = "") {
  const v = num(x), e = Math.floor(v);
  return [cp(`${label}La partie entière de ${fmt(v)} est ${fmt(e)} ; le nombre est donc compris entre ${fmt(e)} et l'entier suivant ${fmt(e + 1)}.`), res(`${fmt(e)} < ${fmt(v)} < ${fmt(e + 1)}`)];
}

// ---------------- Opérations ----------------
function addition(a, b, label = "") {
  const r = B.opPosee(a, "+", b);
  const lines = [cp(`${label}Je pose l'addition en alignant les unités sous les unités${isDec(a) || isDec(b) ? " et les virgules sous les virgules" : ""} ; je calcule de droite à gauche (les retenues sont en rouge) :`), r.table];
  const s = num(a) + num(b);
  lines.push(res(`${fmt(num(a))} + ${fmt(num(b))} = ${fmt(+s.toFixed(6))}`));
  lines.push(cp(`Vérification : ${fmt(+s.toFixed(6))} − ${fmt(num(b))} = ${fmt(num(a))}.`, { italic: true }));
  return lines;
}
function soustraction(a, b, label = "") {
  const r = B.opPosee(a, "-", b);
  const d = num(a) - num(b);
  return [cp(`${label}Je pose la soustraction (le plus grand nombre en haut), unités sous unités${isDec(a) || isDec(b) ? ", virgules sous virgules" : ""} ; quand le chiffre du haut est trop petit, j'ajoute 10 en haut (petit 1 rouge) et 1 en bas dans la colonne suivante :`), r.table, res(`${fmt(num(a))} − ${fmt(num(b))} = ${fmt(+d.toFixed(6))}`), cp(`Vérification : ${fmt(+d.toFixed(6))} + ${fmt(num(b))} = ${fmt(num(a))}.`, { italic: true })];
}
function multiplication(a, b, label = "", { preuve = true } = {}) {
  const r = B.multPosee(a, b);
  const prodInt = r.prod;
  const lines = [cp(`${label}Je pose la multiplication ; je multiplie ${fmt(num(a))} par chaque chiffre de ${fmt(num(b))} en partant des unités (chaque produit partiel est décalé d'un rang vers la gauche), puis j'additionne${r.dec ? ` ; enfin je place la virgule : ${r.dec} chiffre${r.dec > 1 ? "s" : ""} après la virgule en tout dans les facteurs` : ""} :`), r.table, res(`${fmt(num(a))} × ${fmt(num(b))} = ${fmt(r.result)}`)];
  if (preuve) lines.push(...B.preuve9({ op: "×", a: String(a).replace(",", ""), b: String(b).replace(",", ""), produit: prodInt, size: 20 }).map((x) => x));
  return lines;
}
function division(a, b, label = "", { preuve = true, decimales = 0 } = {}) {
  const dec = isDec(a) || decimales;
  const r = B.potence(a, b, { mode: "long", decimales });
  const lines = [cp(`${label}Je pose la division « à la potence » : le dividende ${fmt(num(a))} à gauche, le diviseur ${b} à droite. Je cherche combien de fois ${b} est contenu dans les premiers chiffres, j'écris le chiffre au quotient, je soustrais le produit, puis j'abaisse le chiffre suivant${isDec(a) ? " ; quand j'abaisse le premier chiffre après la virgule, je mets la virgule au quotient" : ""} :`), r.table];
  if (r.exact) lines.push(res(`${fmt(num(a))} ÷ ${b} = ${r.quotientStr} (reste 0 : division exacte)`));
  else lines.push(res(`${fmt(num(a))} ÷ ${b} : quotient ${r.quotientStr}, reste ${r.reste}`));
  if (!dec) lines.push(cp(`Vérification : (${r.quotientStr} × ${b}) + ${r.reste} = ${fmt(r.quotient * b)} + ${r.reste} = ${fmt(num(a))} ✔`, { italic: true }));
  if (preuve && !dec) lines.push(...B.preuve9({ op: "÷", a: num(a), b, q: r.quotient, r: r.reste, size: 20 }));
  return lines;
}

// ---------------- Conversions ----------------
function conversions(fam, list, label = "") {
  // list : [[v, from, to], ...]
  const out = [cp(`${label}J'écris chaque nombre dans le tableau de conversion (le chiffre des unités dans la colonne de l'unité donnée), puis je lis le résultat dans la colonne de l'unité demandée (colonne colorée) :`)];
  out.push(...B.conversionTable(fam, list, { color: C.corrige, legendeFleches: false }));
  LAST_SHORT = list.map(([v, f, t]) => { const r = B.convert(v, B.normU(f), B.normU(t)); return `${fmt(num(v))} ${B.normU(f)} = ${fmt(r.result)} ${B.normU(t)}`; }).join(" ; ");
  return out;
}
function conversionTemps(v, from, to, label = "") {
  const F = { h: { min: 60 }, min: { s: 60 }, j: { h: 24 }, sem: { j: 7 }, h_s: 3600 };
  const names = { h: "heure", min: "minute", s: "seconde", j: "jour", sem: "semaine" };
  let k; if (from === "h" && to === "s") k = 3600; else k = F[from][to];
  return [cp(`${label}1 ${names[from]} = ${fmt(k)} ${names[to]}s, donc ${v} ${names[from]}${v > 1 ? "s" : ""} = ${v} × ${fmt(k)} ${names[to]}s.`), res(`${v} ${names[from]}${v > 1 ? "s" : ""} = ${fmt(v * k)} ${names[to]}s`)];
}
function additionDurees(h1, m1, h2, m2, label = "") {
  const m = m1 + m2, h = h1 + h2; const out = [];
  out.push(cp(`${label}J'additionne les heures ensemble et les minutes ensemble :`));
  out.push(...B.dataTable(["", "h", "min"], [[" ", `${h1}`, `${m1}`], ["+", `${h2}`, `${m2}`], ["=", `${h}`, `${m}`]], { widths: [700, 1200, 1200], size: 21, center: true, color: C.corrige, align: B.AlignmentType.CENTER }));
  if (m >= 60) { out.push(cp(`${m} min dépasse 60 : ${m} min = 60 min + ${m - 60} min = 1 h ${m - 60} min. J'ajoute 1 h aux heures : ${h} h + 1 h = ${h + 1} h.`)); out.push(res(`${h1} h ${m1} min + ${h2} h ${m2} min = ${h + 1} h ${String(m - 60).padStart(2, "0")} min`)); }
  else out.push(res(`${h1} h ${m1} min + ${h2} h ${m2} min = ${h} h ${String(m).padStart(2, "0")} min`));
  return out;
}

// ---------------- Géométrie : formules encadrées ----------------
function aireRectangle(L, l, label = "", unit = "cm") {
  return [cp(`${label}`), ...F({ nom: "Aire du rectangle", formule: "Aire = Longueur × largeur", abrege: "A = L × l", application: `A = ${fmt(L)} × ${fmt(l)}`, resultat: `A = ${fmt(L * l)} ${unit}²` })];
}
function perimetreRectangle(L, l, label = "", unit = "cm") {
  return [cp(label), ...F({ nom: "Périmètre du rectangle", formule: "Périmètre = (Longueur + largeur) × 2", abrege: "P = (L + l) × 2", application: [`P = (${fmt(L)} + ${fmt(l)}) × 2`, `P = ${fmt(L + l)} × 2`], resultat: `P = ${fmt(2 * (L + l))} ${unit}` })];
}
function aireCarre(c, label = "", unit = "cm") { return [cp(label), ...F({ nom: "Aire du carré", formule: "Aire = côté × côté", abrege: "A = c × c", application: `A = ${fmt(c)} × ${fmt(c)}`, resultat: `A = ${fmt(c * c)} ${unit}²` })]; }
function perimetreCarre(c, label = "", unit = "cm") { return [cp(label), ...F({ nom: "Périmètre du carré", formule: "Périmètre = côté × 4", abrege: "P = c × 4", application: `P = ${fmt(c)} × 4`, resultat: `P = ${fmt(4 * c)} ${unit}` })]; }
function perimetreTriangle(a, b, c, label = "", unit = "cm") { return [cp(label), ...F({ nom: "Périmètre du triangle", formule: "Périmètre = côté 1 + côté 2 + côté 3", abrege: "P = a + b + c", application: `P = ${a} + ${b} + ${c}`, resultat: `P = ${fmt(a + b + c)} ${unit}` })]; }
function aireTriangle(b, h, label = "", unit = "cm") { return [cp(label), ...F({ nom: "Aire du triangle", formule: "Aire = {base × hauteur/2}", abrege: "A = {b × h/2}", application: [`A = {${b} × ${h}/2}`, `A = {${fmt(b * h)}/2}`], resultat: `A = ${fmt((b * h) / 2)} ${unit}²` })]; }
function aireParallelogramme(b, h, label = "", unit = "cm") { return [cp(label), ...F({ nom: "Aire du parallélogramme", formule: "Aire = base × hauteur", abrege: "A = b × h", application: `A = ${b} × ${h}`, resultat: `A = ${fmt(b * h)} ${unit}²` })]; }
function aireLosange(D, d, label = "", unit = "cm") { return [cp(label), ...F({ nom: "Aire du losange", formule: "Aire = {grande diagonale × petite diagonale/2}", abrege: "A = {D × d/2}", application: [`A = {${D} × ${d}/2}`, `A = {${fmt(D * d)}/2}`], resultat: `A = ${fmt((D * d) / 2)} ${unit}²` })]; }
function aireTrapeze(Bg, b, h, label = "", unit = "cm") { return [cp(label), ...F({ nom: "Aire du trapèze", formule: "Aire = {(grande base + petite base) × hauteur/2}", abrege: "A = {(B + b) × h/2}", application: [`A = {(${Bg} + ${b}) × ${h}/2}`, `A = {${Bg + b} × ${h}/2} = {${fmt((Bg + b) * h)}/2}`], resultat: `A = ${fmt(((Bg + b) * h) / 2)} ${unit}²` })]; }
function perimetreTrapeze(Bg, b, c1, c2, label = "", unit = "cm") { return [cp(label), ...F({ nom: "Périmètre du trapèze", formule: "Périmètre = grande base + petite base + côté 1 + côté 2", abrege: "P = B + b + c1 + c2", application: `P = ${Bg} + ${b} + ${c1} + ${c2}`, resultat: `P = ${fmt(Bg + b + c1 + c2)} ${unit}` })]; }
function perimetreCercle(r, label = "", unit = "cm") { return [cp(label), ...F({ nom: "Périmètre du cercle (circonférence)", formule: "Périmètre = 2 × π × rayon", abrege: "P = 2 × π × r", application: [`P = 2 × 3,14 × ${r}`, `P = 6,28 × ${r}`], resultat: `P = ${fmt(+(6.28 * r).toFixed(2))} ${unit}` })]; }
function aireDisque(r, label = "", unit = "cm") { return [cp(label), ...F({ nom: "Aire du disque", formule: "Aire = π × rayon × rayon", abrege: "A = π × r × r", application: [`A = 3,14 × ${r} × ${r}`, `A = 3,14 × ${fmt(r * r)}`], resultat: `A = ${fmt(+(3.14 * r * r).toFixed(2))} ${unit}²` })]; }
function volumeCube(c, label = "", unit = "cm") { return [cp(label), ...F({ nom: "Volume du cube", formule: "Volume = côté × côté × côté", abrege: "V = c × c × c", application: [`V = ${c} × ${c} × ${c}`, `V = ${fmt(c * c)} × ${c}`], resultat: `V = ${fmt(c * c * c)} ${unit}³` })]; }
function volumePave(L, l, h, label = "", unit = "cm") { return [cp(label), ...F({ nom: "Volume du parallélépipède rectangle", formule: "Volume = Longueur × largeur × hauteur", abrege: "V = L × l × h", application: [`V = ${L} × ${l} × ${h}`, `V = ${fmt(L * l)} × ${h}`], resultat: `V = ${fmt(L * l * h)} ${unit}³` })]; }

// ---------------- Problèmes ----------------
function echange(PA, F, PV, label = "") {
  const PR = PA + F; const out = [cp(`${label}Je calcule d'abord le prix de revient, puis je le compare au prix de vente.`)];
  out.push(...B.formule({ nom: "Prix de revient", formule: "Prix de revient = Prix d'achat + Frais", abrege: "PR = PA + F", application: `PR = ${fmt(PA)} + ${fmt(F)}`, resultat: `PR = ${ar(PR)}` }, { color: C.corrige }));
  if (PV > PR) out.push(cp(`Le prix de vente (${ar(PV)}) est plus grand que le prix de revient (${ar(PR)}) : il y a un **bénéfice**.`), ...B.formule({ nom: "Bénéfice", formule: "Bénéfice = Prix de vente − Prix de revient", abrege: "B = PV − PR", application: `B = ${fmt(PV)} − ${fmt(PR)}`, resultat: `B = ${ar(PV - PR)}` }, { color: C.corrige }), res(`Le commerçant réalise un bénéfice de ${ar(PV - PR)}.`));
  else if (PV < PR) out.push(cp(`Le prix de vente (${ar(PV)}) est plus petit que le prix de revient (${ar(PR)}) : il y a une **perte**.`), ...B.formule({ nom: "Perte", formule: "Perte = Prix de revient − Prix de vente", abrege: "P = PR − PV", application: `P = ${fmt(PR)} − ${fmt(PV)}`, resultat: `P = ${ar(PR - PV)}` }, { color: C.corrige }), res(`Le commerçant subit une perte de ${ar(PR - PV)}.`));
  else out.push(res(`Prix de vente = prix de revient (${ar(PR)}) : ni bénéfice ni perte.`));
  return out;
}
function budget(G, D, label = "") {
  const out = [cp(label)];
  if (G >= D) out.push(...B.formule({ nom: "Économie", formule: "Économie = Gain − Dépense", abrege: "E = G − D", application: `E = ${fmt(G)} − ${fmt(D)}`, resultat: `E = ${ar(G - D)}` }, { color: C.corrige }), res(`La famille économise ${ar(G - D)} par mois.`));
  else out.push(...B.formule({ nom: "Dette", formule: "Dette = Dépense − Gain", abrege: "Dette = D − G", application: `Dette = ${fmt(D)} − ${fmt(G)}`, resultat: `Dette = ${ar(D - G)}` }, { color: C.corrige }), res(`La dépense dépasse le gain : la famille a une dette de ${ar(D - G)}.`));
  return out;
}
function interet(Cap, t, n, label = "") {
  const I = (Cap * t * n) / 100;
  const out = [cp(label), ...B.formule({ nom: "Intérêt annuel", formule: "Intérêt = {Capital × Taux/100} × Temps (en années)", abrege: "I = {C × t/100} × n", application: [`I = {${fmt(Cap)} × ${t}/100} × ${n}`, `I = {${fmt(Cap * t)}/100} × ${n} = ${fmt((Cap * t) / 100)} × ${n}`], resultat: `I = ${ar(I)}` }, { color: C.corrige })];
  out.push(res(`L'intérêt gagné est de ${ar(I)}${n > 1 ? ` pour ${n} ans` : ""} ; le capital devient ${fmt(Cap)} + ${fmt(I)} = ${ar(Cap + I)}.`));
  return out;
}
function proportionnalite(n1, prix1, n2, label = "") {
  const unit = prix1 / n1; const out = [cp(`${label}Méthode du passage à l'unité : je cherche d'abord le prix d'un objet, puis je multiplie.`)];
  out.push(...B.dataTable(["Nombre d'objets", `${n1}`, "1", `${n2}`], [["Prix (Ar)", fmt(prix1), fmt(unit), fmt(unit * n2)]], { widths: [2600, 1600, 1600, 1600], size: 21, center: true, color: C.corrige, align: B.AlignmentType.CENTER }));
  out.push(...B.formule({ nom: "Prix d'un objet", formule: "Prix d'un objet = {Prix total/Nombre d'objets}", application: `{${fmt(prix1)}/${n1}}`, resultat: `= ${ar(unit)}` }, { color: C.corrige }));
  out.push(...B.formule({ nom: `Prix de ${n2} objets`, formule: "Prix = Prix d'un objet × Nombre d'objets", application: `${fmt(unit)} × ${n2}`, resultat: `= ${ar(unit * n2)}` }, { color: C.corrige }));
  out.push(res(`${n2} objets coûtent ${ar(unit * n2)}.`));
  return out;
}
function partageInegal(total, p1, p2, label = "") {
  const parts = p1 + p2, u = total / parts;
  return [cp(`${label}Nombre total de parts : ${p1} + ${p2} = ${parts} parts.`), ...B.formule({ nom: "Valeur d'une part", formule: "Une part = {Somme totale/Nombre de parts}", application: `{${fmt(total)}/${parts}}`, resultat: `= ${ar(u)}` }, { color: C.corrige }), cp(`Première personne : ${p1} part${p1 > 1 ? "s" : ""} = ${fmt(u)} × ${p1} = ${ar(u * p1)}. Deuxième personne : ${p2} parts = ${fmt(u)} × ${p2} = ${ar(u * p2)}.`), cp(`Vérification : ${fmt(u * p1)} + ${fmt(u * p2)} = ${ar(total)} ✔`, { italic: true }), res(`La première reçoit ${ar(u * p1)} et la deuxième ${ar(u * p2)}.`)];
}

// ---------------- Fractions ----------------
function simplifier(n, d, label = "") {
  const g = pgcd(n, d);
  if (g === 1) return [cp(`${label}${n} et ${d} n'ont aucun diviseur commun autre que 1 : la fraction {${n}/${d}} est déjà simplifiée.`), res(`{${n}/${d}}`)];
  const steps = []; let a = n, b = d;
  const divs = [2, 3, 5, 7, 11, 13];
  while (pgcd(a, b) > 1) { const k = divs.find((x) => a % x === 0 && b % x === 0) || pgcd(a, b); steps.push(`{${a}/${b}} = {${a} ÷ ${k}/${b} ÷ ${k}} = {${a / k}/${b / k}}`); a /= k; b /= k; }
  return [cp(`${label}Je divise le numérateur ET le dénominateur par un même nombre (2, 3, 5…) jusqu'à ce que ce ne soit plus possible :`), ...steps.map((s) => cp(s)), res(`{${n}/${d}} = {${a}/${b}}${b === 1 ? ` = ${a}` : ""}`)];
}
function fracEquiv(n, d, d2, label = "") { const k = d2 / d; return [cp(`${label}Pour passer de ${d} à ${d2} au dénominateur, on multiplie par ${k} (${d} × ${k} = ${d2}). Je multiplie aussi le numérateur par ${k} : ${n} × ${k} = ${n * k}.`), res(`{${n}/${d}} = {${n * k}/${d2}}`)]; }
function comparerFractions(n1, d1, n2, d2, label = "") {
  if (d1 === d2) { const s = n1 > n2 ? ">" : n1 < n2 ? "<" : "="; return [cp(`${label}Même dénominateur (${d1}) : la plus grande fraction est celle qui a le plus grand numérateur. ${n1} ${s} ${n2}.`), res(`{${n1}/${d1}} ${s} {${n2}/${d2}}`)]; }
  const D = (d1 * d2) / pgcd(d1, d2); const a = n1 * (D / d1), b = n2 * (D / d2); const s = a > b ? ">" : a < b ? "<" : "=";
  return [cp(`${label}Dénominateurs différents : je les réduis au même dénominateur ${D}. {${n1}/${d1}} = {${a}/${D}} et {${n2}/${d2}} = {${b}/${D}}. Je compare les numérateurs : ${a} ${s} ${b}.`), res(`{${n1}/${d1}} ${s} {${n2}/${d2}}`)];
}
function opFractions(n1, d1, op, n2, d2, label = "") {
  if (op === "+" || op === "−" || op === "-") {
    const r = op === "+" ? n1 + n2 : n1 - n2; const g = pgcd(Math.abs(r), d1);
    return [cp(`${label}Même dénominateur (${d1}) : j'${op === "+" ? "additionne" : "soustrais"} les numérateurs et je garde le dénominateur.`), cp(`{${n1}/${d1}} ${op === "+" ? "+" : "−"} {${n2}/${d1}} = {${n1} ${op === "+" ? "+" : "−"} ${n2}/${d1}} = {${r}/${d1}}`), ...(g > 1 ? [cp(`Je simplifie par ${g} : {${r}/${d1}} = {${r / g}/${d1 / g}}${d1 / g === 1 ? ` = ${r / g}` : ""}`)] : []), res(`{${n1}/${d1}} ${op === "+" ? "+" : "−"} {${n2}/${d1}} = {${r / g}/${d1 / g}}${d1 / g === 1 ? ` = ${r / g}` : ""}`)];
  }
  if (op === "×") { // × entier n2
    const r = n1 * n2, g = pgcd(r, d1);
    return [cp(`${label}Multiplier une fraction par un entier : je multiplie seulement le numérateur, le dénominateur ne change pas.`), cp(`{${n1}/${d1}} × ${n2} = {${n1} × ${n2}/${d1}} = {${r}/${d1}}`), ...(g > 1 ? [cp(`Je simplifie par ${g} : {${r}/${d1}} = {${r / g}/${d1 / g}}${d1 / g === 1 ? ` = ${r / g}` : ""}`)] : []), res(`{${n1}/${d1}} × ${n2} = {${r / g}/${d1 / g}}${d1 / g === 1 ? ` = ${r / g}` : ""}`)];
  }
  // ÷ entier n2
  const d = d1 * n2, g = pgcd(n1, d);
  return [cp(`${label}Diviser une fraction par un entier : je multiplie seulement le dénominateur, le numérateur ne change pas.`), cp(`{${n1}/${d1}} ÷ ${n2} = {${n1}/${d1} × ${n2}} = {${n1}/${d}}`), ...(g > 1 ? [cp(`Je simplifie par ${g} : {${n1}/${d}} = {${n1 / g}/${d / g}}`)] : []), res(`{${n1}/${d1}} ÷ ${n2} = {${n1 / g}/${d / g}}`)];
}

// ---------------- QCM / Vrai-Faux (repris de V1, reformatés) ----------------
function simple(text, label = "") { return [res(`${label}${text}`)]; }

const W = {};
[ecrireEnLettres, ecrireEnChiffres, comparer, encadrer, addition, soustraction, multiplication, division, conversions, conversionTemps, additionDurees,
  aireRectangle, perimetreRectangle, aireCarre, perimetreCarre, perimetreTriangle, aireTriangle, aireParallelogramme, aireLosange, aireTrapeze, perimetreTrapeze, perimetreCercle, aireDisque, volumeCube, volumePave,
  echange, budget, interet, proportionnalite, partageInegal, simplifier, fracEquiv, comparerFractions, opFractions, simple].forEach((f) => { W[f.name] = wrap(f); });
module.exports = { ...W, num, cp, res, pgcd, raw: { ecrireEnLettres, ecrireEnChiffres, comparer, encadrer, addition, soustraction, multiplication, division, conversions, conversionTemps, additionDurees,
  aireRectangle, perimetreRectangle, aireCarre, perimetreCarre, perimetreTriangle, aireTriangle, aireParallelogramme, aireLosange, aireTrapeze, perimetreTrapeze, perimetreCercle, aireDisque, volumeCube, volumePave,
  echange, budget, interet, proportionnalite, partageInegal, simplifier, fracEquiv, comparerFractions, opFractions, simple } };
