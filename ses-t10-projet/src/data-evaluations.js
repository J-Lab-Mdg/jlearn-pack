// ============================================================
// data-evaluations.js — séances de révision (1 h) et sujets d'examen (1 h)
// 1 révision + 1 sujet d'examen T10 par unité
// ============================================================

const revisions = {
  I: {
    titre: "Révision — Unité I : Orientation scolaire et professionnelle",
    tableau: [
      ["Diplôme", "Document officiel attestant la réussite à un examen et un niveau d'études ; il ouvre l'accès à l'emploi sans le garantir."],
      ["Emploi", "Activité professionnelle rémunérée : travail salarié (pour un employeur) ou travail indépendant (à son compte)."],
      ["Formation et compétences", "Ce que l'on sait faire : elles complètent le diplôme et sont exigées par les employeurs."],
      ["Exigences du monde du travail", "Ponctualité, discipline, respect des consignes, travail en équipe, langues, compétences numériques, autonomie."],
      ["Série L", "Langues, littérature, philosophie, histoire-géographie → enseignement, droit, journalisme, communication, culture."],
      ["Série S", "Mathématiques, sciences physiques, SVT → médecine, ingénierie, agronomie, informatique, recherche."],
      ["Série OSE", "Sciences économiques et sociales, droit, gestion → gestion, comptabilité, commerce, banque, entrepreneuriat."],
      ["Projet d'orientation", "Quatre étapes : se connaître, s'informer, décider, s'engager — en tenant compte des besoins de l'économie."],
      ["Secteurs porteurs", "Agriculture et élevage, santé, enseignement, bâtiment et énergie, numérique, tourisme et artisanat."],
    ],
    questions: [
      ["Quelle est la différence entre un diplôme et un emploi ?", "Le diplôme atteste un niveau d'études et de compétences ; l'emploi est l'activité rémunérée que l'on occupe ensuite. Le diplôme facilite l'accès à l'emploi mais ne le garantit pas."],
      ["Cite trois exigences du monde du travail.", "La ponctualité, la discipline et l'esprit d'équipe (on peut aussi citer la maîtrise des langues, des outils numériques et l'autonomie)."],
      ["Quelles sont les matières dominantes et deux débouchés de la série OSE ?", "Les matières dominantes sont les sciences économiques et sociales, le droit et la gestion ; les débouchés sont la comptabilité et la gestion d'entreprise (ou la banque, le commerce, l'entrepreneuriat)."],
      ["Quelles sont les quatre étapes d'un projet d'orientation ?", "Se connaître, s'informer, décider et s'engager."],
      ["Pourquoi faut-il tenir compte des besoins de l'économie dans son projet d'orientation ?", "Parce que les secteurs qui recrutent offrent plus de chances de trouver un emploi ou de créer sa propre activité : agriculture, santé, enseignement, bâtiment, numérique, tourisme."],
    ],
  },
};

const examens = {
  I: {
    titre: "Sujet d'examen T10 — Unité I : Orientation scolaire et professionnelle",
    exercices: [
      { type: "qcm", consigne: "Choisis la bonne réponse en écrivant la lettre correspondante.", pointsPar: 1, items: [
        { q: "Un diplôme est…", opts: ["un contrat de travail", "un document officiel attestant un niveau d'études", "une fiche de paie"], ok: 1, expl: "Il atteste la réussite à un examen et un niveau d'études." },
        { q: "La série qui prépare le mieux aux métiers de la comptabilité est la série…", opts: ["L", "S", "OSE"], ok: 2, expl: "La série OSE couvre l'économie, la gestion et la comptabilité." },
        { q: "La première étape d'un projet d'orientation est…", opts: ["se connaître", "s'engager", "chercher un employeur"], ok: 0, expl: "Il faut d'abord repérer ses intérêts et ses capacités." },
        { q: "Parmi les secteurs qui ont d'importants besoins à Madagascar, on trouve…", opts: ["uniquement la pêche industrielle", "l'agriculture, la santé et l'enseignement", "aucun secteur, le pays n'a plus de besoins"], ok: 1, expl: "Agriculture, santé et enseignement figurent parmi les secteurs les plus demandeurs." },
      ]},
      { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
        { txt: "Le diplôme garantit automatiquement l'obtention d'un emploi.", rep: false, expl: "Il facilite l'accès à l'emploi, mais comptent aussi la formation, l'expérience et les qualités personnelles." },
        { txt: "Un travailleur indépendant exerce son activité à son propre compte.", rep: true, expl: "Artisan, commerçant, exploitant agricole ou entrepreneur." },
        { txt: "Les compétences numériques sont aujourd'hui exigées dans de nombreux emplois de bureau.", rep: true, expl: "Traitement de texte, tableur, messagerie et recherche d'informations." },
        { txt: "Le choix d'une série au lycée est irréversible dans tous les cas.", rep: false, expl: "Des passerelles et des réorientations restent possibles, surtout après le baccalauréat." },
      ]},
      { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
        { q: "Donne la définition d'un emploi.", r: "Un emploi est une activité professionnelle occupée par une personne et rémunérée." },
        { q: "Cite deux exigences du monde du travail et explique-les brièvement.", r: "La ponctualité : arriver à l'heure chaque jour ; et l'esprit d'équipe : savoir travailler et communiquer avec les collègues pour atteindre un objectif commun." },
        { q: "Cite deux débouchés de la série S.", r: "Deux débouchés de la série S sont les études de médecine et les études d'ingénierie (ou d'agronomie, d'informatique, de recherche)." },
      ]},
      { type: "appariement", consigne: "Relie chaque série à son débouché.", pointsPar: 1, items: [
        { g: ["Série L", "Série S", "Série OSE", "Série L (2e exemple)"], d: ["Ingénieur en travaux publics", "Comptable dans une entreprise", "Magistrat ou avocat", "Professeur de lettres"], pairs: [[0, 3], [1, 0], [2, 1], [3, 2]] },
      ]},
      { type: "completion", consigne: "Complète les phrases.", pointsPar: 1, items: [
        { debut: "Le diplôme atteste la réussite à un examen et un niveau", suite: "d'études" },
        { debut: "Le salarié travaille pour un employeur et reçoit un", suite: "salaire" },
        { debut: "Les quatre étapes du projet d'orientation sont : se connaître, s'informer, décider et", suite: "s'engager" },
        { debut: "Choisir un secteur qui recrute augmente les chances de trouver un", suite: "emploi" },
      ]},
    ],
  },
};

module.exports = { revisions, examens };
