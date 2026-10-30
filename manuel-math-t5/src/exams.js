// Sujets d'examen format CEPE — 20 sujets OPÉRATIONS + 20 sujets PROBLÈMES, corrigés démarche complète.
// Tous les énoncés sont originaux ; les nombres sont générés et les corrigés CALCULÉS (zéro erreur).
const fs = require('fs');
const path = require('path');
const {
  Document, Packer, Paragraph, TextRun, AlignmentType, ShadingType, PageBreak,
  Header, Footer, PageNumber, Bookmark, Math: DocxMath, MathFraction, MathRun
} = require('docx');

const C = { red: 'C00000', green: '2E7D32', blue: '1F4E79', wine: 'C2185B', ocre: 'B25000', pale: 'EAF2F8', white: 'FFFFFF', black: '000000' };
const tr = (text, opt = {}) => new TextRun({ text, font: 'Times New Roman', size: opt.size || 24, bold: !!opt.bold, color: opt.color || C.black, italics: !!opt.italics });
const rich = (text, opt = {}) => {
  const out = []; let last = 0; const re = /(\d[\d ]*)\/(\d[\d ]*)/g; let m;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(tr(text.slice(last, m.index), opt));
    out.push(new DocxMath({ children: [new MathFraction({ numerator: [new MathRun(m[1].trim())], denominator: [new MathRun(m[2].trim())] })] }));
    last = re.lastIndex;
  }
  if (last < text.length) out.push(tr(text.slice(last), opt));
  return out.length ? out : [tr(text, opt)];
};
const p = (text, opt = {}) => new Paragraph({ alignment: opt.align || AlignmentType.LEFT, spacing: { after: opt.after ?? 100, line: 300 }, indent: opt.indent ? { left: opt.indent } : undefined, shading: opt.fill ? { type: ShadingType.CLEAR, fill: opt.fill } : undefined, children: rich(text, opt) });
const title = (text, level = 1, bookmark) => {
  const run = tr(text, { bold: true, color: level === 1 ? C.red : C.green, size: level === 1 ? 32 : 28 });
  const children = bookmark ? [new Bookmark({ id: bookmark, children: [run] })] : [run];
  return new Paragraph({ alignment: level === 1 ? AlignmentType.CENTER : AlignmentType.LEFT, spacing: { before: 200, after: 150 }, children });
};
const banner = (text, fill) => new Paragraph({ spacing: { before: 180, after: 110 }, shading: { type: ShadingType.CLEAR, fill }, children: [tr('  ' + text, { bold: true, color: C.white, size: 26 })] });
const page = () => new Paragraph({ children: [new PageBreak()] });

// ---------- outils ----------
function mulberry32(a) { return function () { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
const F = n => Math.round(n).toLocaleString('fr-FR').replace(/\u202F/g, '\u00A0');
const FD = x => x.toLocaleString('fr-FR', { minimumFractionDigits: 0, maximumFractionDigits: 2 }).replace(/\u202F/g, '\u00A0');
const pgcd = (a, b) => b ? pgcd(b, a % b) : a;
const n9 = n => { n = Math.abs(n); while (n > 9) n = String(n).split('').reduce((a, c) => a + (+c), 0); return n; };

// ---------- SUJETS OPÉRATIONS ----------
function sujetOperations(k) {
  const r = mulberry32(1000 + k * 7);
  const ri = (lo, hi) => lo + Math.floor(r() * (hi - lo + 1));
  const items = [], corr = [];
  // 1. addition
  const a = ri(123456, 523456), b = ri(54321, 999999 - a);
  items.push(`${F(a)} + ${F(b)}`);
  corr.push([`On pose l’addition en alignant les chiffres par colonnes (unités sous unités).`,
    `${F(a)} + ${F(b)} = ${F(a + b)}.`]);
  // 2. soustraction
  const c = ri(300000, 987654), d = ri(12345, c - 10000);
  items.push(`${F(c)} − ${F(d)}`);
  corr.push([`On pose la soustraction, le plus grand nombre en haut, et on gère les retenues.`,
    `${F(c)} − ${F(d)} = ${F(c - d)}.`,
    `Vérification par l’addition : ${F(c - d)} + ${F(d)} = ${F(c)} ✓`]);
  // 3. multiplication 3 ch × 2 ch
  const e = ri(214, 987), f = ri(23, 97);
  const fd = Math.floor(f / 10) * 10, fu = f % 10;
  items.push(`${F(e)} × ${f}`);
  corr.push([`On décompose le multiplicateur : ${f} = ${fd} + ${fu}.`,
    `${F(e)} × ${fd} = ${F(e * fd)}  et  ${F(e)} × ${fu} = ${F(e * fu)}.`,
    `${F(e)} × ${f} = ${F(e * fd)} + ${F(e * fu)} = ${F(e * f)}.`,
    `Preuve par 9 (croix) : ${e} → ${n9(e)} ; ${f} → ${n9(f)} ; ${n9(e)} × ${n9(f)} = ${n9(n9(e) * n9(f))}, et ${F(e * f)} → ${n9(e * f)} ✓`]);
  // 4. division euclidienne
  const h = ri(12, 45), q = ri(23, 97), rr = ri(1, h - 1), g = h * q + rr;
  items.push(`${F(g)} ÷ ${h}`);
  corr.push([`Encadrement : ${h} × 10 = ${F(h * 10)} < ${F(g)} < ${h} × 100 = ${F(h * 100)} → le quotient a 2 chiffres.`,
    `${F(g)} = (${h} × ${q}) + ${rr} : quotient ${q}, reste ${rr}.`,
    `Vérification : ${h} × ${q} + ${rr} = ${F(h * q)} + ${rr} = ${F(g)} ✓ (le reste ${rr} est bien plus petit que ${h}).`,
    `Croix de la preuve par 9 : H ${n9(h)} × B ${n9(q)} + reste ${rr} → ${n9(h * q + rr)}, comme ${F(g)} → ${n9(g)} ✓`]);
  // 5. fractions (4 variantes)
  const v = k % 4;
  if (v === 0) {
    const den = [5, 7, 8, 9, 11, 12][ri(0, 5)], na = ri(1, den - 1), nb2 = ri(1, den);
    const s = na + nb2, gg = pgcd(s, den);
    items.push(`${na}/${den} + ${nb2}/${den}`);
    const lines = [`Même dénominateur : on additionne les numérateurs.`, `${na}/${den} + ${nb2}/${den} = ${s}/${den}.`];
    if (gg > 1) lines.push(`On simplifie par ${gg} : ${s}/${den} = ${s / gg}/${den / gg}.`);
    corr.push(lines);
  } else if (v === 1) {
    const na = ri(2, 5), nb2 = ri(3, 9), ne = ri(4, 9);
    const num = na * nb2, den = nb2 * ne;
    items.push(`${na}/${nb2} × ${nb2}/${ne}`);
    corr.push([`On multiplie les numérateurs entre eux et les dénominateurs entre eux.`,
      `${na}/${nb2} × ${nb2}/${ne} = ${num}/${den}.`,
      `On simplifie par ${nb2} (simplification croisée) : le résultat est ${na}/${ne}.`]);
  } else if (v === 2) {
    const na = ri(2, 7), nb2 = ri(3, 9), nc = ri(2, 7), nd = ri(3, 9);
    const num = na * nd, den = nb2 * nc, gg = pgcd(num, den);
    items.push(`${na}/${nb2} ÷ ${nc}/${nd}`);
    const lines = [`Diviser par une fraction, c’est multiplier par son inverse.`,
      `${na}/${nb2} ÷ ${nc}/${nd} = ${na}/${nb2} × ${nd}/${nc} = ${num}/${den}.`];
    if (gg > 1) lines.push(`On simplifie par ${gg} : ${num}/${den} = ${num / gg}/${den / gg}.`);
    corr.push(lines);
  } else {
    const n = ri(3, 9), nb2 = ri(2, 7), na = ri(1, nb2 * 2);
    items.push(`${n} − ${na}/${nb2}`);
    corr.push([`On écrit l’entier en fraction : ${n} = ${n * nb2}/${nb2}.`,
      `${n} − ${na}/${nb2} = ${n * nb2}/${nb2} − ${na}/${nb2} = ${n * nb2 - na}/${nb2}.`]);
  }
  // 6. décimaux / conversions (4 variantes)
  const w = Math.floor(k / 4) % 4;
  if (w === 0) {
    const x = ri(1234, 9876) / 100, y = ri(123, 987) / 10;
    items.push(`${FD(x)} + ${FD(y)}`);
    corr.push([`On aligne les virgules l’une sous l’autre (on peut compléter avec des zéros).`,
      `${FD(x)} + ${FD(y)} = ${FD(Math.round((x + y) * 100) / 100)}.`]);
  } else if (w === 1) {
    const x = ri(5000, 9876) / 100, y = ri(123, 4900) / 100;
    items.push(`${FD(x)} − ${FD(y)}`);
    corr.push([`On aligne les virgules, puis on soustrait colonne par colonne.`,
      `${FD(x)} − ${FD(y)} = ${FD(Math.round((x - y) * 100) / 100)}.`]);
  } else if (w === 2) {
    const convs = [
      () => { const m = ri(125, 980) / 100; return [`Convertir ${FD(m)} m en cm`, [`1 m = 100 cm : la virgule glisse de 2 colonnes vers la droite.`, `${FD(m)} m = ${F(m * 100)} cm.`]]; },
      () => { const kg = ri(12, 85) / 10; return [`Convertir ${FD(kg)} kg en g`, [`1 kg = 1 000 g : la virgule glisse de 3 colonnes vers la droite.`, `${FD(kg)} kg = ${F(kg * 1000)} g.`]]; },
      () => { const L = ri(15, 95) / 10; return [`Convertir ${FD(L)} L en cL`, [`1 L = 100 cL.`, `${FD(L)} L = ${F(L * 100)} cL.`]]; },
      () => { const km = ri(12, 78) / 10; return [`Convertir ${FD(km)} km en m`, [`1 km = 1 000 m.`, `${FD(km)} km = ${F(km * 1000)} m.`]]; },
    ];
    const [it, co] = convs[k % 4]();
    items.push(it); corr.push(co);
  } else {
    const H = ri(1, 3), M = [15, 20, 30, 45, 50][ri(0, 4)];
    items.push(`Convertir ${H} h ${M} min en minutes`);
    corr.push([`1 h = 60 min, donc ${H} h = ${H} × 60 = ${H * 60} min.`,
      `${H} h ${M} min = ${H * 60} + ${M} = ${H * 60 + M} min.`]);
  }
  return { items, corr };
}

// ---------- SUJETS PROBLÈMES ----------
const TEMPLATES = [
  (ri) => { // marché et monnaie
    const n = ri(3, 8), pk = [1000, 1200, 1500][ri(0, 2)], s = [2500, 3000, 3500][ri(0, 2)], B = 20000;
    const riz = n * pk, tot = riz + s, rendu = B - tot;
    return {
      enonce: `Au marché, Soa achète ${n} kapoaka de riz à ${F(pk)} Ar le kapoaka et un savon à ${F(s)} Ar. Elle paie avec un billet de ${F(B)} Ar. Combien lui rend-on ?`,
      steps: [`Étape 1 — Prix du riz : ${n} × ${F(pk)} = ${F(riz)} Ar.`,
        `Étape 2 — Dépense totale : ${F(riz)} + ${F(s)} = ${F(tot)} Ar.`,
        `Étape 3 — Monnaie rendue : ${F(B)} − ${F(tot)} = ${F(rendu)} Ar.`],
      rep: `On lui rend ${F(rendu)} Ar.`,
      qc: `Pour rendre la monnaie, il faut d’abord connaître le prix TOTAL des achats : le total est la question cachée.`,
      mi: `« à … Ar le kapoaka » (prix unitaire → ×) ; « et un savon » (réunion → +) ; « combien lui rend-on » (écart → −).`,
      op: `multiplication (prix du riz), puis addition (total), puis soustraction (monnaie rendue).`
    };
  },
  (ri) => { // partage en sachets
    const R = [25, 40, 50][ri(0, 2)], m = [250, 400, 500][ri(0, 2)];
    const Rg = R * 1000, nb = Math.floor(Rg / m), reste = Rg % m;
    return {
      enonce: `Un commerçant partage un sac de ${R} kg de sucre en sachets de ${F(m)} g. Combien de sachets pleins obtient-il, et combien de grammes reste-t-il ?`,
      steps: [`Étape 1 — Conversion : ${R} kg = ${R} × 1 000 = ${F(Rg)} g.`,
        `Étape 2 — Division : ${F(Rg)} ÷ ${F(m)} = ${F(nb)}${reste ? `, reste ${F(reste)}` : ' exactement'}.`,
        `Vérification : ${F(m)} × ${F(nb)}${reste ? ` + ${F(reste)}` : ''} = ${F(Rg)} ✓`],
      rep: `Il obtient ${F(nb)} sachets pleins${reste ? ` et il reste ${F(reste)} g` : ' et il ne reste rien'}.`,
      qc: `On ne peut diviser que des grammes par des grammes : la conversion kg → g est la question cachée.`,
      mi: `« partage… en sachets de » → division ; « kg » et « g » dans le même énoncé → conversion d’abord.`,
      op: `conversion, puis division euclidienne : combien de paquets de … g dans … g, et que reste-t-il ?`
    };
  },
  (ri) => { // proportionnalité carburant
    const cc = [8, 9, 12][ri(0, 2)], D = [150, 250, 350][ri(0, 2)];
    const conso = cc * D / 100;
    return {
      enonce: `Un taxi-brousse consomme ${cc} L de carburant pour 100 km. Quelle quantité consomme-t-il pour parcourir ${D} km ?`,
      steps: [`Étape 1 — Pour 1 km : ${cc} ÷ 100 = ${FD(cc / 100)} L (ou on raisonne par paquets de 100 km).`,
        `Étape 2 — Pour ${D} km : ${cc} × ${D} ÷ 100 = ${FD(conso)} L.`,
        `C’est un tableau de proportionnalité : 100 km → ${cc} L ; ${D} km → ${FD(conso)} L.`],
      rep: `Il consomme ${FD(conso)} L pour ${D} km.`,
      qc: `La consommation est donnée pour 100 km, on la cherche pour un autre trajet : c’est un tableau de proportionnalité.`,
      mi: `« … L pour 100 km… pour … km ? » → proportionnalité (produit en croix ou retour à l’unité).`,
      op: `multiplication et division par le coefficient : on raisonne par paquets de 100 km.`
    };
  },
  (ri) => { // clôture périmètre
    const L = ri(6, 12) * 10, l = ri(3, 8) * 10, f = [1500, 2000, 2500][ri(0, 2)];
    const P = (L + l) * 2, cout = P * f;
    return {
      enonce: `Le champ rectangulaire de Rakoto mesure ${L} m de longueur et ${l} m de largeur. Il veut le clôturer avec du grillage vendu ${F(f)} Ar le mètre. Combien va coûter la clôture ?`,
      steps: [`Étape 1 — Périmètre : P = (L + l) × 2 = (${L} + ${l}) × 2 = ${F(P)} m.`,
        `Étape 2 — Coût : ${F(P)} × ${F(f)} = ${F(cout)} Ar.`],
      rep: `La clôture coûtera ${F(cout)} Ar.`,
      qc: `Le grillage suit le TOUR du champ : le périmètre est la question cachée — impossible d’acheter des mètres sans connaître le tour !`,
      mi: `« clôturer » → le tour → périmètre ; « … Ar le mètre » → × ensuite.`,
      op: `périmètre (L + l) × 2, puis multiplication par le prix du mètre.`
    };
  },
  (ri) => { // aire et dalles
    const L = ri(8, 12), l = ri(6, 9), dp = [8000, 10000, 12000][ri(0, 2)];
    const A = L * l, cout = A * dp;
    return {
      enonce: `Une salle de classe rectangulaire mesure ${L} m sur ${l} m. On veut la carreler avec des dalles de 1 m² vendues ${F(dp)} Ar l’unité. Combien de dalles faut-il, et pour quel prix total ?`,
      steps: [`Étape 1 — Aire de la salle : A = L × l = ${L} × ${l} = ${F(A)} m².`,
        `Étape 2 — Nombre de dalles : ${F(A)} dalles de 1 m² (1 dalle par m²).`,
        `Étape 3 — Prix total : ${F(A)} × ${F(dp)} = ${F(cout)} Ar.`],
      rep: `Il faut ${F(A)} dalles, pour ${F(cout)} Ar.`,
      qc: `Une dalle couvre exactement 1 m² : le nombre de dalles est donc l’AIRE de la salle.`,
      mi: `« carreler… dalles de 1 m² » → aire ; « pour quel prix total » → ×.`,
      op: `aire L × l, puis multiplication par le prix de la dalle.`
    };
  },
  (ri) => { // fractions de récolte
    const Fk = [120, 160, 200, 240][ri(0, 3)], pz = [2000, 2500, 3000][ri(0, 2)];
    const vendu = Fk * 3 / 4, garde = Fk / 4, recette = vendu * pz;
    return {
      enonce: `Rasoa récolte ${F(Fk)} kg de letchis. Elle en vend les 3/4 au marché à ${F(pz)} Ar le kilo et garde le reste pour sa famille. Quelle est sa recette, et combien de kilos garde-t-elle ?`,
      steps: [`Étape 1 — Quantité vendue : 3/4 de ${F(Fk)} = (${F(Fk)} ÷ 4) × 3 = ${F(Fk / 4)} × 3 = ${F(vendu)} kg.`,
        `Étape 2 — Recette : ${F(vendu)} × ${F(pz)} = ${F(recette)} Ar.`,
        `Étape 3 — Part gardée : ${F(Fk)} − ${F(vendu)} = ${F(garde)} kg (c’est bien 1/4 de la récolte).`],
      rep: `Sa recette est de ${F(recette)} Ar et elle garde ${F(garde)} kg.`,
      qc: `Vendre les 3/4 oblige à calculer D’ABORD cette quantité en kilos : c’est la question cachée.`,
      mi: `« les 3/4 de » → fraction de la récolte (÷ 4 puis × 3) ; « au kilo » → × par le prix.`,
      op: `fraction de la récolte, puis multiplication pour la recette, puis soustraction pour la part gardée.`
    };
  },
  (ri) => { // tissu décimaux
    const mt = [2.5, 3.5, 4.5][ri(0, 2)], pm = [12000, 16000, 18000][ri(0, 2)], B = 100000;
    const cout = mt * pm, rendu = B - cout;
    return {
      enonce: `Pour coudre des uniformes, une maman achète ${FD(mt)} m de tissu à ${F(pm)} Ar le mètre. Elle paie avec un billet de ${F(B)} Ar. Quel est le prix du tissu, et combien lui rend-on ?`,
      steps: [`Étape 1 — Prix du tissu : ${FD(mt)} × ${F(pm)} = ${F(cout)} Ar.`,
        `Étape 2 — Monnaie rendue : ${F(B)} − ${F(cout)} = ${F(rendu)} Ar.`],
      rep: `Le tissu coûte ${F(cout)} Ar ; on lui rend ${F(rendu)} Ar.`,
      qc: `Le prix du tissu d’abord, la monnaie ensuite : on ne rend pas la monnaie sans connaître le total.`,
      mi: `« … m à … Ar le mètre » (prix unitaire → ×) ; « combien lui rend-on » (écart → −).`,
      op: `multiplication à virgules, puis soustraction.`
    };
  },
  (ri) => { // durées
    const h1 = ri(6, 9), m1 = [15, 30, 45][ri(0, 2)], dh = ri(1, 3), dm = [20, 35, 50][ri(0, 2)];
    let H = h1 + dh, M = m1 + dm;
    if (M >= 60) { H += 1; M -= 60; }
    return {
      enonce: `Un taxi-brousse part d’Antananarivo à ${h1} h ${m1 < 10 ? '0' + m1 : m1} min. Le trajet dure ${dh} h ${dm} min. À quelle heure arrive-t-il ?`,
      steps: [`Étape 1 — On additionne les heures : ${h1} h + ${dh} h = ${h1 + dh} h.`,
        `Étape 2 — On additionne les minutes : ${m1} min + ${dm} min = ${m1 + dm} min${m1 + dm >= 60 ? ` = 1 h ${m1 + dm - 60} min (on ne dépasse jamais 60 min !)` : ''}.`,
        `Étape 3 — Heure d’arrivée : ${H} h ${M < 10 ? '0' + M : M} min.`],
      rep: `Il arrive à ${H} h ${M < 10 ? '0' + M : M} min.`,
      qc: `On additionne les heures avec les heures et les minutes avec les minutes — et si les minutes dépassent 60, on échange contre 1 heure.`,
      mi: `« part à… le trajet dure… » → addition de durées (base 60).`,
      op: `addition sexagésimale : colonne des heures, colonne des minutes, échange à 60.`
    };
  },
  (ri) => { // épargne
    const ep = [2000, 2500, 5000][ri(0, 2)], V = ep * ri(18, 30);
    const sem = V / ep;
    return {
      enonce: `Naina épargne ${F(ep)} Ar par semaine pour acheter un vélo à ${F(V)} Ar. Combien de semaines d’épargne lui faudra-t-il ?`,
      steps: [`Étape 1 — On cherche combien de fois ${F(ep)} entre dans ${F(V)} : c’est une division.`,
        `Étape 2 — ${F(V)} ÷ ${F(ep)} = ${F(sem)}.`,
        `Vérification : ${F(ep)} × ${F(sem)} = ${F(V)} ✓`],
      rep: `Il lui faudra ${F(sem)} semaines.`,
      qc: `Combien de « paquets » de … Ar tiennent dans le prix du vélo : l’épargne hebdomadaire est comme un paquet qu’on répète.`,
      mi: `« combien de semaines » → combien de fois → division (groupement).`,
      op: `division : on cherche combien de fois l’épargne entre dans le prix total.`
    };
  },
  (ri) => { // école rangées et bus
    const rg = [12, 18, 24][ri(0, 1)], nr = ri(8, 14), extra = ri(5, 25);
    const ne = rg * nr, tot = ne + extra, bus = Math.ceil(tot / 30), rest = tot % 30;
    return {
      enonce: `Pour la fête de l’école, ${F(ne)} élèves sont rangés en rangées de ${rg}. Combien y a-t-il de rangées ? Ensuite, ces élèves et ${extra} enseignants partent en excursion dans des bus de 30 places. Combien de bus faut-il ?`,
      steps: [`Étape 1 — Nombre de rangées : ${F(ne)} ÷ ${rg} = ${nr} rangées.`,
        `Étape 2 — Personnes à transporter : ${F(ne)} + ${extra} = ${F(tot)}.`,
        `Étape 3 — ${F(tot)} ÷ 30 = ${Math.floor(tot / 30)}${rest ? `, reste ${rest} : il faut un bus de plus pour les ${rest} personnes restantes` : ' exactement'}.`],
      rep: `Il y a ${nr} rangées et il faut ${bus} bus.`,
      qc: `Deux questions bien séparées : d’abord les rangées (division), puis les bus (division avec reste — et il faut l’interpréter !).`,
      mi: `« en rangées de » → ÷ ; « et … enseignants » → + ; « bus de 30 places » → ÷ avec reste.`,
      op: `division, addition, puis division avec interprétation du reste : le reste impose un bus DE PLUS.`
    };
  },
];

function sujetProblemes(k) {
  const r = mulberry32(5000 + k * 13);
  const ri = (lo, hi) => lo + Math.floor(r() * (hi - lo + 1));
  const t1 = TEMPLATES[(2 * k) % TEMPLATES.length](ri);
  const t2 = TEMPLATES[(2 * k + 1) % TEMPLATES.length](ri);
  return [t1, t2];
}

// ---------- montage du document ----------
function entryPage(kind, bookmark, intro) {
  return [page(),
    new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 2200, after: 200 }, children: [tr('SUJETS D’EXAMEN', { bold: true, color: C.blue, size: 76 })] }),
    new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 160 }, shading: { type: ShadingType.CLEAR, fill: C.pale }, children: [new Bookmark({ id: bookmark, children: [tr(kind, { bold: true, color: C.red, size: 56 })] })] }),
    new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 400 }, children: [tr('20 sujets type CEPE — avec corrigés détaillés', { italics: true, color: C.green, size: 26 })] }),
    ...intro.map(t => new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 140 }, children: rich(t, { size: 24 }) })),
  ];
}

const children = [];
children.push(...entryPage('OPÉRATIONS', 'exop', [
  'Chaque sujet couvre tout le programme : grands nombres, les quatre opérations,',
  'fractions, nombres décimaux et conversions.',
  'Fais chaque sujet SANS regarder le corrigé, puis compare ta démarche !',
]));
for (let k = 1; k <= 20; k++) {
  const { items, corr } = sujetOperations(k);
  children.push(page(), title(`SUJET N° ${k} — OPÉRATIONS`, 1, `exop${k}`));
  children.push(p('Effectue les opérations suivantes en posant tes calculs. Durée conseillée : 30 minutes.', { fill: 'FFF8E1' }));
  items.forEach((it, i) => children.push(p(`${i + 1}.  ${it}${it.startsWith('Convertir') ? '' : ' = …'}`, { indent: 240 })));
  children.push(banner(`CORRIGÉ DU SUJET N° ${k}`, C.green));
  corr.forEach((lines, i) => {
    children.push(p(`${i + 1}.`, { after: 40 }));
    lines.forEach(l => children.push(p(l, { indent: 360, after: 60 })));
  });
}
children.push(...entryPage('PROBLÈMES', 'expb', [
  'Des problèmes de la vie courante à Madagascar : marché, champs, transport, école…',
  'Pour chaque problème : lis deux fois, repère la question cachée et les mots-indices,',
  'choisis l’opération, calcule bien posé, puis rédige ta réponse en phrase complète.',
]));
for (let k = 1; k <= 20; k++) {
  const probs = sujetProblemes(k);
  children.push(page(), title(`SUJET N° ${k} — PROBLÈMES`, 1, `expb${k}`));
  children.push(p('Résous chaque problème en montrant toutes les étapes. Durée conseillée : 40 minutes.', { fill: 'FFF8E1' }));
  probs.forEach((pr, i) => {
    children.push(p(`Problème ${i + 1}.`, { bold: true, after: 60 }));
    children.push(p(pr.enonce, { indent: 240 }));
  });
  children.push(banner(`CORRIGÉ DU SUJET N° ${k}`, C.green));
  probs.forEach((pr, i) => {
    children.push(p(`Problème ${i + 1} — démarche :`, { bold: true, color: C.wine, after: 60 }));
    children.push(p(`Question cachée : ${pr.qc}`, { indent: 360, after: 50, italics: true, color: C.wine }));
    children.push(p(`Mots-indices : ${pr.mi}`, { indent: 360, after: 50, italics: true, color: C.blue }));
    children.push(p(`Opérations choisies : ${pr.op}`, { indent: 360, after: 70, italics: true, color: C.ocre }));
    pr.steps.forEach(st => children.push(p(st, { indent: 360, after: 60 })));
    children.push(p(`Réponse : ${pr.rep}`, { indent: 360, bold: true, color: C.green }));
  });
}

(async () => {
  const doc = new Document({
    styles: { default: { document: { run: { font: 'Times New Roman', size: 24 }, paragraph: { spacing: { line: 300 } } } } },
    sections: [{
      properties: { page: { margin: { top: 900, right: 1000, bottom: 900, left: 1000 } } },
      headers: { default: new Header({ children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [tr('J-Learn — Mathématiques T5 — Sujets d’examen', { size: 18, color: '666666' })] })] }) },
      footers: { default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [tr('Page ', { size: 18 }), new TextRun({ children: [PageNumber.CURRENT], font: 'Times New Roman', size: 18 })] })] }) },
      children
    }]
  });
  const out = path.join(__dirname, '..', 'Manuel_Mathematiques_T5_EXAMENS.docx');
  fs.writeFileSync(out, await Packer.toBuffer(doc));
  console.log(out, ':', fs.statSync(out).size, 'octets');
})();
