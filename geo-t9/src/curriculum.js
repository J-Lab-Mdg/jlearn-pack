// curriculum.js — Programme complet de Géographie T9
// 64 leçons de 60 minutes, 6 révisions et 6 examens = 76 numéros.
// Données conformes aux six thématiques et contenus du Programme d'études T9.

const TOTAL = 76;
const unitDefs = require("./curriculum-data.json");

function ex(consigne, items, corrige) {
  return { points: 5, consigne, items, corrige };
}

function makeTopic(seed, numero, unit, index) {
  const [titre, terme, definition, points, keywords, contexte, action] = seed;
  const motsCles = [terme, ...keywords];
  const ouverture = index === 0 ? unit.opening : null;
  const qRevision = [
    [`Définis « ${terme} ».`, definition],
    [`Indique deux idées essentielles concernant ${terme}.`, `${points[0]} ${points[1]}`],
    [`Quelle règle pratique faut-il retenir ?`, action],
  ];
  return {
    numero, total: TOTAL, titre, theme: unit.theme,
    objectif: `Être capable de définir ${terme}, d'en expliquer les éléments essentiels et de l'utiliser dans une situation géographique.`,
    documentation: "Programme d'études officiel T9 — Géographie ; ressources pédagogiques T9 ; atlas géographique.",
    image: { id: `geo9_s${String(numero).padStart(2, "0")}`, legende: `Schéma pédagogique : ${titre}.` },
    scene: { file: `scene_s${String(numero).padStart(2, "0")}.jpg`, mode: index % 2 ? "illustration" : "document", legende: `Document d'observation : ${contexte}` },
    revisionOuverture: ouverture || [["Quelle notion avons-nous étudiée à la séance précédente ?", "Les élèves rappellent la notion précédente avec une phrase complète."], ["Pourquoi cette notion est-elle utile au géographe ?", "Elle l'aide à observer, localiser, décrire ou expliquer les territoires."]],
    miseEnSituation: { texte: contexte, question: `Quelle notion géographique permet de comprendre cette situation ?`, ra: `${terme} : ${definition}`, support: "Document et schéma de la leçon" },
    presentation: `Aujourd'hui, nous étudions « ${titre} ». À la fin de la séance, vous saurez définir ${terme}, expliquer ses composantes et appliquer la notion.`,
    observation: `Observez le schéma « ${titre} » et le document illustré. Repérez la notion centrale, les relations et les éléments du paysage.`,
    supportObservation: "Schéma pédagogique et document illustré de la leçon",
    analyse: [
      [`Qu'est-ce que ${terme} ?`, definition],
      ["Quelle est une première idée importante ?", points[0]],
      ["Quelle autre idée complète l'explication ?", points[1]],
      ["Quelle règle doit guider l'analyse ou l'action ?", action],
    ],
    synthese: `${definition} ${points[0]} ${points[1]} Il faut retenir : ${action}`,
    motsCles,
    lecon: { sections: [
      { titre: `1. Comprendre ${terme}`, paras: [definition, `Cette notion permet d'étudier le territoire avec précision et de relier les faits observés à leurs causes et à leurs conséquences.`] },
      { titre: "2. Les éléments essentiels", paras: points },
      { titre: "3. Lire une situation et agir", paras: [contexte, `Règle à retenir : ${action}`] },
    ] },
    appExos: [
      ex("Réponds par des phrases complètes.", [`1. Définis ${terme}.`, "2. Relève deux éléments essentiels de la leçon."], [`1. ${definition} (2,5 points)`, `2. ${points[0]} ${points[1]} (2,5 points)`]),
      ex("Associe chaque idée à son explication puis justifie ton choix.", [`1. ${keywords[0] || terme}`, `2. ${keywords[1] || terme}`, "3. Écris la relation entre ces deux idées."], [`1. ${points[0]} (2 points)`, `2. ${points[1]} (2 points)`, `3. Ces idées sont liées dans l'étude de ${terme}. (1 point)`]),
    ],
    evalExos: [
      ex("Explique ce que montre la situation.", [contexte, `1. Nomme la notion étudiée.`, "2. Donne l'indice qui permet de la reconnaître."], [`1. Il s'agit de ${terme}. (2 points)`, `2. ${points[2]} (3 points)`]),
      ex("Rédige une courte réponse organisée.", [`Présente ${terme}, une idée essentielle et la règle pratique à retenir.`], [`${definition} ${points[3]} ${action} (5 points)`]),
    ],
    questionsRevision: qRevision,
    _definition: definition,
    _points: points,
    _terme: terme,
  };
}

function makeRevision(unit, topics) {
  return {
    numero: unit.revNum, total: TOTAL,
    titre: `Révision — ${unit.nom.replace("UNITÉ ", "Unité ")}`,
    theme: unit.theme,
    tableau: topics.map(t => [t._terme.charAt(0).toUpperCase() + t._terme.slice(1), t._definition]),
    questions: topics.flatMap(t => t.questionsRevision.slice(0, 2)),
  };
}

function makeExam(unit, topics) {
  const pick = i => topics[Math.min(i, topics.length - 1)];
  const qs = [pick(0), pick(Math.floor(topics.length / 3)), pick(Math.floor(2 * topics.length / 3)), pick(topics.length - 1)];
  return {
    numero: unit.examNum, total: TOTAL,
    titre: `Sujet d'examen T9 — ${unit.nom.replace("UNITÉ ", "Unité ")}`,
    duree: "60 minutes", bareme: 20,
    consigneGenerale: "Lis attentivement chaque consigne et rédige des réponses précises.",
    exercices: [
      { titre: "Exercice 1 (5 points)", consigne: "Définis les deux notions.", items: [`1. ${qs[0]._terme}.`, `2. ${qs[1]._terme}.`], corrige: [`1. ${qs[0]._definition} (2,5 points)`, `2. ${qs[1]._definition} (2,5 points)`] },
      { titre: "Exercice 2 (5 points)", consigne: "Réponds par une phrase complète.", items: [`1. ${qs[0].questionsRevision[1][0]}`, `2. ${qs[2].questionsRevision[1][0]}`], corrige: [`1. ${qs[0].questionsRevision[1][1]} (2,5 points)`, `2. ${qs[2].questionsRevision[1][1]} (2,5 points)`] },
      { titre: "Exercice 3 (5 points)", consigne: "Explique les relations entre les éléments indiqués.", items: [`1. ${qs[1]._points[0]}`, `2. ${qs[3]._points[1]}`, "3. Rédige une conclusion sur le thème de l'unité."], corrige: [`1. ${qs[1]._points[2]} (2 points)`, `2. ${qs[3]._points[2]} (2 points)`, `3. Ces éléments permettent de comprendre ${unit.theme.toLowerCase()}. (1 point)`] },
      { titre: "Exercice 4 (5 points)", consigne: "Étudie la situation et propose une réponse géographique.", items: [qs[3].scene.legende.replace("Document d'observation : ", ""), "Présente la notion, un élément d'explication et une règle d'action."], corrige: [`Notion : ${qs[3]._terme}. (1 point)`, `Explication : ${qs[3]._points[0]} ${qs[3]._points[1]} (2 points)`, `Règle : ${qs[3].questionsRevision[2][1]} (2 points)`] },
    ],
  };
}

const UNITES = unitDefs.map(unit => {
  const topics = unit.seeds.map((seed, i) => makeTopic(seed, unit.first + i, unit, i));
  if (topics.length !== unit.duration) throw new Error(`${unit.id}: ${topics.length} leçons au lieu de ${unit.duration}`);
  return {
    id: unit.id, nom: unit.nom,
    seances: `Séances ${unit.first} à ${unit.examNum}`,
    lecons: unit.duration,
    intro: `Thématique officielle : ${unit.theme}. Durée officielle : ${unit.duration} heures, soit ${unit.duration} leçons de 60 minutes, suivies d'une révision et d'un examen corrigé. ${unit.intro}`,
    topics,
    rev: makeRevision(unit, topics),
    exam: makeExam(unit, topics),
  };
});

const allTopics = UNITES.flatMap(u => u.topics);
if (allTopics.length !== 64) throw new Error(`64 leçons attendues, ${allTopics.length} obtenues`);
const numbers = UNITES.flatMap(u => [...u.topics.map(t => t.numero), u.rev.numero, u.exam.numero]);
if (numbers.length !== 76 || numbers.some((n, i) => n !== i + 1)) throw new Error("La numérotation 1–76 n'est pas continue.");

module.exports = { TOTAL, UNITES, allTopics, unitDefs };
