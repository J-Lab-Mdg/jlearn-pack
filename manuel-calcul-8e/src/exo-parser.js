// Analyse des énoncés d'exercices (V1 importés ou nouveaux) → corrigé détaillé via solvers.js
// Un exercice = { consigne, items:[texte], v1:[réponse V1 texte] } ; renvoie pour chaque item { els, short }
const S = require("./solvers");
const B = require("./builders");
const { fmt } = B;

const N = "([\\d][\\d\\s\\u00A0]*(?:,\\d+)?)";
const clean = (s) => s.replace(/\s|\u00A0/g, "");
const num = S.num;
const strip = (t) => t.replace(/^\d+\.\s*/, "").trim();
const unitFam = (u) => { try { return require("./builders").EXP && famOf(u); } catch { return null; } };
function famOf(u) { const E = B.EXP; u = B.normU(u); for (const [f, m] of Object.entries(E)) if (u in m) return f; return null; }

// Regroupe les conversions d'un même exercice dans un seul tableau (une ligne par item)
function parseConversionGroup(items) {
  const rows = [];
  for (const t of items) {
    const m = strip(t).match(new RegExp(`^${N}\\s*([a-zA-Zµ²³]+)\\s*=\\s*\\?\\s*([a-zA-Zµ²³]+)`));
    if (!m) return null;
    const [, v, from, to] = m; const f = famOf(from);
    if (!f || famOf(to) !== f) return null;
    rows.push([v.replace(/\s|\u00A0/g, ""), B.normU(from), B.normU(to), f]);
  }
  if (!rows.length || rows.some((r) => r[3] !== rows[0][3])) return null;
  return rows;
}

function solveItem(text, v1 = "", consigne = "") {
  const t = strip(text);
  let m;
  // Numération
  if ((m = t.match(new RegExp(`^Écris en lettres\\s*:\\s*${N}$`)))) return S.ecrireEnLettres(clean(m[1]).includes(",") ? m[1] : parseInt(clean(m[1]), 10));
  if (/^[a-zéèêôûîïç\-\s]+$/i.test(t) && /mille|cent|million|milliard|vingt|dix|trente|quarante|cinquante|soixante|deux|trois|quatre|cinq|six|sept|huit|neuf|un/.test(t)) {
    const n = parseInt(clean(v1.replace(/^\d+\.\s*/, "")), 10);
    if (!isNaN(n)) return S.ecrireEnChiffres(t, n);
  }
  if ((m = t.match(new RegExp(`^${N}\\s*…\\s*${N}\\s*\\(complète`)))) return S.comparer(m[1].trim(), m[2].trim());
  if ((m = t.match(new RegExp(`^Encadre\\s*${N}\\s*entre`)))) return S.encadrer(m[1]);
  // Opérations
  if ((m = t.match(new RegExp(`^${N}\\s*\\+\\s*${N}\\s*=\\s*\\?`)))) return S.addition(m[1].trim(), m[2].trim());
  if ((m = t.match(new RegExp(`^${N}\\s*[−\\-]\\s*${N}\\s*=\\s*\\?`)))) return S.soustraction(m[1].trim(), m[2].trim());
  if ((m = t.match(new RegExp(`^${N}\\s*×\\s*${N}\\s*=\\s*\\?`)))) return S.multiplication(m[1].trim(), m[2].trim());
  if ((m = t.match(new RegExp(`^${N}\\s*÷\\s*${N}\\s*=\\s*\\?`)))) { const a = m[1].trim(), b = parseInt(clean(m[2]), 10); return S.division(a, b, "", { decimales: /,/.test(a) ? 0 : 0 }); }
  // Fractions
  if ((m = t.match(/^Écris en chiffres la fraction « (\d+) sur (\d+) »/))) return S.simple(`« ${m[1]} sur ${m[2]} » s'écrit {${m[1]}/${m[2]}} : le numérateur ${m[1]} (parts prises) au-dessus, le dénominateur ${m[2]} (parts en tout) en dessous.`);
  if ((m = t.match(/^Simplifie la fraction\s*:\s*\{(\d+)\/(\d+)\}/))) return S.simplifier(+m[1], +m[2]);
  if ((m = t.match(/^Complète\s*:\s*\{(\d+)\/(\d+)\}\s*=\s*\?\/(\d+)/))) return S.fracEquiv(+m[1], +m[2], +m[3]);
  if ((m = t.match(/^\{(\d+)\/(\d+)\}\s*…\s*\{(\d+)\/(\d+)\}/))) return S.comparerFractions(+m[1], +m[2], +m[3], +m[4]);
  if ((m = t.match(/^\{(\d+)\/(\d+)\}\s*([+−\-])\s*\{(\d+)\/(\d+)\}\s*=/))) return S.opFractions(+m[1], +m[2], m[3], +m[4], +m[5]);
  if ((m = t.match(/^\{(\d+)\/(\d+)\}\s*([×÷])\s*(\d+)\s*=/))) return S.opFractions(+m[1], +m[2], m[3], +m[4], null);
  // Géométrie
  if ((m = t.match(new RegExp(`aire d'un rectangle de base ${N} cm et hauteur ${N} cm`)))) return S.aireRectangle(num(m[1]), num(m[2]));
  if ((m = t.match(new RegExp(`aire d'un carré de côté ${N} cm`)))) return S.aireCarre(num(m[1]));
  if ((m = t.match(new RegExp(`périmètre d'un triangle de côtés ${N} cm, ${N} cm et ${N} cm`)))) return S.perimetreTriangle(num(m[1]), num(m[2]), num(m[3]));
  if ((m = t.match(new RegExp(`aire d'un triangle de base ${N} cm et de hauteur ${N} cm`)))) return S.aireTriangle(num(m[1]), num(m[2]));
  if ((m = t.match(new RegExp(`aire d'un parallélogramme de base ${N} cm et hauteur ${N} cm`)))) return S.aireParallelogramme(num(m[1]), num(m[2]));
  if ((m = t.match(new RegExp(`aire d'un losange de diagonales ${N} cm et ${N} cm`)))) return S.aireLosange(num(m[1]), num(m[2]));
  if ((m = t.match(new RegExp(`périmètre d'un trapèze dont la grande base mesure ${N} cm, la petite base ${N} cm et les côtés obliques ${N} cm et ${N} cm`)))) return S.perimetreTrapeze(num(m[1]), num(m[2]), num(m[3]), num(m[4]));
  if ((m = t.match(new RegExp(`aire d'un trapèze de grande base ${N} cm, petite base ${N} cm et hauteur ${N} cm`)))) return S.aireTrapeze(num(m[1]), num(m[2]), num(m[3]));
  if ((m = t.match(new RegExp(`périmètre d'un cercle de rayon ${N} cm`)))) return S.perimetreCercle(num(m[1]));
  if ((m = t.match(new RegExp(`aire d'un disque de rayon ${N} cm`)))) return S.aireDisque(num(m[1]));
  if ((m = t.match(new RegExp(`volume d'un cube de côté ${N} cm`)))) return S.volumeCube(num(m[1]));
  if ((m = t.match(new RegExp(`volume d'un parallélépipède rectangle de (?:dimensions )?${N} cm × ${N} cm × ${N} cm`)))) return S.volumePave(num(m[1]), num(m[2]), num(m[3]));
  // Problèmes
  if ((m = t.match(new RegExp(`achète une marchandise à ${N} Ar, paie ${N} Ar de frais, et la revend à ${N} Ar`)))) return S.echange(num(m[1]), num(m[2]), num(m[3]));
  if ((m = t.match(new RegExp(`gain mensuel de ${N} Ar et une dépense de ${N} Ar`)))) return S.budget(num(m[1]), num(m[2]));
  if ((m = t.match(new RegExp(`intérêt d'un capital de ${N} Ar placé à ${N} % pendant ${N} ans?`)))) return S.interet(num(m[1]), num(m[2]), num(m[3]));
  if ((m = t.match(new RegExp(`^${N} objets coûtent ${N} Ar\\. Combien coûtent ${N} objets`)))) return S.proportionnalite(num(m[1]), num(m[2]), num(m[3]));
  if ((m = t.match(new RegExp(`partage ${N} Ar entre deux personnes selon leurs parts : ${N} parts? et ${N} parts?`)))) return S.partageInegal(num(m[1]), num(m[2]), num(m[3]));
  // Temps
  if ((m = t.match(new RegExp(`^${N}\\s*(heures?|minutes?|jours?|semaines?)\\s*=\\s*\\?\\s*(minutes?|secondes?|heures?|jours?)`)))) {
    const map = { heure: "h", heures: "h", minute: "min", minutes: "min", seconde: "s", secondes: "s", jour: "j", jours: "j", semaine: "sem", semaines: "sem" };
    return S.conversionTemps(num(m[1]), map[m[2]], map[m[3]]);
  }
  if ((m = t.match(new RegExp(`^${N} h ${N} min \\+ ${N} h ${N} min`)))) return S.additionDurees(num(m[1]), num(m[2]), num(m[3]), num(m[4]));
  // Défaut : réponse V1 reformatée
  return null;
}

// Corrige un exercice complet ; renvoie [{els, short}] alignés sur items
function solveExercice(exo) {
  const { consigne, items, v1 = [] } = exo;
  if (exo.corrige) { // corrigé rédigé à la main : lignes de texte (avec **gras**, {a/b}) ou éléments docx
    const { renderBlocks } = require("./seance-generator");
    const perItem = exo.corrige.map((lines, i) => ({ els: lines.flatMap((l) => (typeof l === "string" ? [S.cp(l)] : l && l.t ? renderBlocks([l]) : [l])), short: (exo.short || [])[i] || "" }));
    return { perItem, shorts: perItem.map((o) => o.short) };
  }
  if (/conversions suivantes/i.test(consigne) && !/heures|minutes/.test(items[0])) {
    const rows = parseConversionGroup(items);
    if (rows) {
      const grouped = S.conversions(rows[0][3], rows.map((r) => [r[0], r[1], r[2]]));
      const shorts = rows.map((r) => { const c = B.convert(r[0], r[1], r[2]); return `${fmt(num(r[0]))} ${r[1]} = ${fmt(c.result)} ${r[2]}`; });
      return { grouped: grouped.els, shorts };
    }
  }
  const out = items.map((it, i) => {
    const r = solveItem(it, v1[i] || "", consigne);
    if (r) return r;
    const ans = (v1[i] || "").replace(/^\d+\.\s*/, "");
    return { els: [S.res(ans || "—")], short: ans };
  });
  return { perItem: out, shorts: out.map((o) => o.short) };
}

module.exports = { solveExercice, solveItem, strip };
