// lecons-fusionnees.js (CP1) — Leçons fusionnées par grand titre (structure v2)
// Fusion automatique et fidèle des contenus de leçon des séances du même grand titre.
// Chaque leçon fusionnée apparaît après la séance marquée par `apres`, sur 1 à 2 pages illustrées.
// Scènes IA : album scolaire malgache, AUCUN texte dans l'image.

const THEMES = [1, 2, 3, 4, 5, 6, 7, 8].map((i) => require("./data-theme" + i)["theme" + i]);

function themeOf(n) {
  return THEMES.find((th) => th.seances.some((s) => s.n === n));
}
function seanceOf(n) {
  return themeOf(n).seances.find((s) => s.n === n);
}

// Fusionne la leçon d'une séance source en sous-sections de la leçon fusionnée
function fusionneSeance(n) {
  const s = seanceOf(n);
  const titre = s.lecon.titre.replace(/^\d+\.\s*/, ""); // "1. BONJOUR..." → "BONJOUR..."
  const paras = [];
  for (const sub of s.lecon.subs) {
    const head = [{ t: sub.t + " : ", b: true }];
    paras.push(head.concat(s.lecon.subs.length && sub.paras[0] ? sub.paras[0] : []));
    for (const p of sub.paras.slice(1)) paras.push(p);
  }
  return { t: `${titre} (séance ${n})`, paras };
}

function groupe({ num, apres, de, a, titre, titreS, image, legende }) {
  const ns = [];
  for (let n = de; n <= a; n++) ns.push(n);
  const subs = ns.map(fusionneSeance);
  const retenir = [];
  ns.forEach((n, i) => {
    if (i > 0) retenir.push({ t: " • ", b: true });
    retenir.push(...seanceOf(n).lecon.retenir);
  });
  return {
    id: "leconc1_" + num, apres, num,
    titre, titreS,
    plage: de === a ? String(de) : `${de} à ${a}`,
    image: image ? { file: image, w: 1376, h: 768, legende } : null,
    subs, retenir,
  };
}

module.exports = [
  // ---------- Thème 1 — Les salutations ----------
  groupe({
    num: 1, de: 1, a: 2, apres: 2,
    titre: "BONJOUR, BONSOIR, AU REVOIR", titreS: "Bonjour, bonsoir, au revoir",
    image: "ia_c1_t1_a.jpg",
    legende: "Bonjour ! ... Bonsoir ! : je salue le matin et le soir.",
  }),
  groupe({
    num: 2, de: 3, a: 4, apres: 4,
    titre: "DEMANDER, REMERCIER, CHOISIR LA BONNE FORMULE", titreS: "Demander, remercier, choisir la bonne formule",
    image: "ia_c1_t1_b.jpg",
    legende: "S'il te plaît... Merci ! : les mots polis au quotidien.",
  }),
  groupe({
    num: 3, de: 5, a: 7, apres: 7,
    titre: "LA PETITE SCÈNE : PARLER À TOUT LE MONDE", titreS: "La petite scène : parler à tout le monde",
    image: "ia_c1_t1_c.jpg",
    legende: "Je salue mes camarades, et je parle aux adultes avec respect.",
  }),
  groupe({
    num: 4, de: 8, a: 10, apres: 10,
    titre: "TOUTES NOS FORMULES DE SALUTATION", titreS: "Toutes nos formules de salutation (bilan)",
    image: "ia_c1_t1_d.jpg",
    legende: "Bonjour, merci, pardon, au revoir : les formules partout, même au marché !",
  }),

  // ---------- Thème 2 — Les sons I et U ----------
  groupe({
    num: 5, de: 11, a: 15, apres: 15,
    titre: "LES SONS I ET U : JE LES DÉCOUVRE", titreS: "Les sons i et u : je les découvre",
    image: "ia_c1_t2_a.jpg",
    legende: "La souris (i) et la lune (u) : deux petits sons à ne pas confondre !",
  }),
  groupe({
    num: 6, de: 16, a: 20, apres: 20,
    titre: "BIEN PRONONCER I ET U", titreS: "Bien prononcer i et u (bilan)",
    image: "ia_c1_t2_b.jpg",
    legende: "Devant le miroir : je souris pour i, je fais la moue pour u.",
  }),

  // ---------- Thème 3 — Se présenter ----------
  groupe({
    num: 7, de: 21, a: 24, apres: 24,
    titre: "JE ME PRÉSENTE", titreS: "Je me présente",
    image: "ia_c1_t3_a.jpg",
    legende: "Je m'appelle... , j'ai ... ans, je viens de... : je me présente !",
  }),
  groupe({
    num: 8, de: 25, a: 30, apres: 30,
    titre: "PRÉSENTER LES AUTRES", titreS: "Présenter les autres (bilan)",
    image: "ia_c1_t3_b.jpg",
    legende: "Qui est-ce ? C'est... : le jeu des devinettes !",
  }),

  // ---------- Thème 4 — Le son OUI ----------
  groupe({
    num: 9, de: 31, a: 35, apres: 35,
    titre: "LE SON OUI : JE LE DÉCOUVRE", titreS: "Le son oui : je le découvre",
    image: "ia_c1_t4_a.jpg",
    legende: "Le hibou, la pluie, la nuit, le fruit : j'entends le son ou-i !",
  }),
  groupe({
    num: 10, de: 36, a: 40, apres: 40,
    titre: "BIEN PRONONCER OUI", titreS: "Bien prononcer oui (bilan)",
    image: null,
    legende: null,
  }),

  // ---------- Thème 5 — Le son U : nouveaux mots ----------
  groupe({
    num: 11, de: 41, a: 45, apres: 45,
    titre: "LE SON U : NOUVEAUX MOTS", titreS: "Le son u : nouveaux mots",
    image: null,
    legende: null,
  }),
  groupe({
    num: 12, de: 46, a: 50, apres: 50,
    titre: "BIEN PRONONCER U", titreS: "Bien prononcer u (bilan)",
    image: null,
    legende: null,
  }),

  // ---------- Thème 6 — Le village ----------
  groupe({
    num: 13, de: 51, a: 55, apres: 55,
    titre: "MON VILLAGE", titreS: "Mon village",
    image: null,
    legende: null,
  }),
  groupe({
    num: 14, de: 56, a: 60, apres: 60,
    titre: "VIVRE AU VILLAGE", titreS: "Vivre au village (bilan)",
    image: null,
    legende: null,
  }),

  // ---------- Thème 7 — Le son GN ----------
  groupe({
    num: 15, de: 61, a: 65, apres: 65,
    titre: "LE SON GN : JE LE DÉCOUVRE", titreS: "Le son gn : je le découvre",
    image: null,
    legende: null,
  }),
  groupe({
    num: 16, de: 66, a: 70, apres: 70,
    titre: "BIEN PRONONCER GN", titreS: "Bien prononcer gn (bilan)",
    image: null,
    legende: null,
  }),

  // ---------- Thème 8 — Mon corps, les couleurs, le son CH ----------
  groupe({
    num: 17, de: 71, a: 72, apres: 72,
    titre: "MON CORPS ET LE SON CH", titreS: "Mon corps et le son ch",
    image: null,
    legende: null,
  }),
  groupe({
    num: 18, de: 73, a: 76, apres: 76,
    titre: "LES COULEURS ET LES PETITS MOTS", titreS: "Les couleurs et les petits mots",
    image: null,
    legende: null,
  }),
  groupe({
    num: 19, de: 77, a: 80, apres: 80,
    titre: "LA COMPTINE DU CORPS ET LA GRANDE PERFORMANCE", titreS: "La comptine du corps et la grande performance",
    image: null,
    legende: null,
  }),
];
