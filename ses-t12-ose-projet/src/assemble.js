// ============================================================
// assemble.js — assemblage du manuel SES T12, série OSE (Collection J-Learn)
// Bloc 1 : Unité I « Croissance et développement » (15 séances)
// TOTAL = 89 séances (découpage complet du manuel : 6 unités, 165 heures)
// ============================================================
const fs = require("fs");
const path = require("path");
const {
  Document, Paragraph, TextRun, AlignmentType, PageBreak,
  TableRow, InternalHyperlink,
} = require("docx");

const B = require("./builders");
const EB = require("./exercise-bank");
const { generateSeanceDocContent } = require("./seance-generator");
const U1 = require("./data-unite1");
const U2 = require("./data-unite2");
const U3 = require("./data-unite3");
const U4 = require("./data-unite4");
const U5 = require("./data-unite5");
const U6 = require("./data-unite6");
const { revisions, examens } = require("./data-evaluations");

const UNITS = [U1, U2, U3, U4, U5, U6];
const TOTAL = 89;
const IMG_DIR = path.join(__dirname, "..", "output", "images");

// Découpage complet (89 séances) — 6 thématiques du Programme d'Études T12
const PLAN = [
  ["I", "Croissance et développement", 15],
  ["II", "Mondialisation", 15],
  ["III", "Travail et emploi", 14],
  ["IV", "Organisations", 9],
  ["V", "Cohésion et changement social", 13],
  ["VI", "Sciences politiques et droit", 11],
];

// ------------------------------------------------------------
// Couverture
// ------------------------------------------------------------
function coverPage() {
  return [
    B.p("", { size: 24 }),
    B.p("Collection J-Learn", { bold: true, size: 28, align: AlignmentType.CENTER, color: B.BLUE, spacingAfter: 400 }),
    B.p("MANUEL DE SCIENCES ÉCONOMIQUES ET SOCIALES", { bold: true, size: 34, align: AlignmentType.CENTER, color: B.RED, spacingAfter: 120 }),
    B.p("CLASSE DE T12 — SÉRIE OSE", { bold: true, size: 30, align: AlignmentType.CENTER, spacingAfter: 200 }),
    B.p("Programme d'Études — 6 unités thématiques · 89 séances", { size: 24, align: AlignmentType.CENTER, spacingAfter: 300 }),
    B.p("Fiches de préparation · Leçons · Exercices corrigés · Sujets d'examen corrigés", { size: 20, align: AlignmentType.CENTER, spacingAfter: 600 }),
    B.p("Madagascar", { size: 22, align: AlignmentType.CENTER, spacingAfter: 60 }),
    new Paragraph({ children: [new PageBreak()] }),
  ];
}

// ------------------------------------------------------------
// Avant-propos
// ------------------------------------------------------------
function avantPropos() {
  const out = [];
  out.push(B.sectionHeading("AVANT-PROPOS", "avant", { size: 26 }));
  out.push(B.p("Ce manuel de Sciences Économiques et Sociales pour la classe de T12, série OSE, a été élaboré à partir du Programme d'Études officiel de Madagascar, section « Sciences Économiques et Sociales ». Il couvre les six thématiques du programme : la croissance et le développement, la mondialisation, le travail et l'emploi, les organisations, la cohésion et le changement social, enfin les sciences politiques et le droit.", { size: 21, spacingAfter: 120 }));
  out.push(B.p("Chaque séance est composée d'une fiche de préparation, d'une leçon, d'exercices notés et de leur corrigé. Le manuel suit la méthode J-Learn organisée en trois grandes étapes : la Révision, la Nouvelle Leçon (six sous-étapes) et l'Évaluation.", { size: 21, spacingAfter: 120 }));
  out.push(B.p("Le Programme d'Études attribue cinq heures par semaine aux Sciences Économiques et Sociales en série OSE, soit cent soixante-cinq heures pour l'année. Le découpage en quatre-vingt-neuf séances respecte cette répartition : soixante-dix-sept séances de cours, une séance de révision et un sujet d'examen corrigé par unité. La durée de chaque séance est laissée à l'enseignant, qui la répartit selon le rythme de sa classe, le niveau des apprenants et le matériel disponible.", { size: 21, spacingAfter: 120 }));
  out.push(B.p("Conformément aux orientations pédagogiques du programme, les séances privilégient une approche centrée sur l'apprenant : celui-ci observe, questionne, travaille en groupe et construit lui-même ses savoirs. Les démarches inductive, déductive, comparative, documentaire et argumentative sont mobilisées selon les objets d'étude, et l'enseignant joue le rôle de guide, de médiateur et d'accompagnateur.", { size: 21, spacingAfter: 120 }));
  out.push(B.p("Les séances sont regroupées en six unités, une par thématique du programme. Les exemples, situations et supports proposés sont ancrés dans la réalité malgache : exploitation rurale, coopérative, atelier de transformation, marché local, administration et collectivité locale.", { size: 21, spacingAfter: 120 }));
  out.push(B.p("Pour bien utiliser ce manuel, se reporter au « Mode d'emploi » qui suit.", { size: 21, spacingAfter: 120 }));
  out.push(new Paragraph({ children: [new PageBreak()] }));
  return out;
}

// ------------------------------------------------------------
// Mode d'emploi
// ------------------------------------------------------------
function modeEmploi() {
  const out = [];
  out.push(B.sectionHeading("MODE D'EMPLOI", "mode", { size: 26 }));
  out.push(B.p("Comment est construite chaque séance ?", { bold: true, size: 22, color: B.GREEN, spacingAfter: 80 }));
  out.push(B.p("I. Révision — questions simples sur la séance précédente, avec la réponse attendue (R.A.).", { size: 21, spacingAfter: 60 }));
  out.push(B.p("II. Nouvelle leçon — six sous-étapes : 1. Mise en situation, 2. Présentation, 3. Observation, 4. Analyse, 5. Synthèse (énoncée par l'enseignant), 6. Application.", { size: 21, spacingAfter: 60 }));
  out.push(B.p("III. Évaluation — exercices écrits, avec corrigé.", { size: 21, spacingAfter: 100 }));
  out.push(B.p("La durée de chaque séance n'est pas imprimée : elle est laissée à l'enseignant, qui répartit le temps entre les trois grandes étapes selon le rythme de sa classe et la difficulté de la leçon.", { size: 21, spacingAfter: 120 }));
  out.push(B.p("Après la fiche de préparation viennent la page LEÇON (le contenu à retenir) puis la section EXERCICES (exercices notés avec barème, suivis du corrigé détaillé).", { size: 21, spacingAfter: 120 }));
  out.push(B.p("Code couleur utilisé dans ce manuel :", { bold: true, size: 22, color: B.GREEN, spacingAfter: 80 }));
  out.push(B.p("Titre de leçon : rouge.", { size: 21, spacingAfter: 40, color: B.RED }));
  out.push(B.p("Sous-titres : vert.", { size: 21, spacingAfter: 40, color: B.GREEN }));
  out.push(B.p("Mots clés de la leçon : bleu et gras.", { size: 21, spacingAfter: 40, color: B.BLUE }));
  out.push(B.p("Corrigé des exercices : rose bordeaux.", { size: 21, spacingAfter: 40, color: B.PINK }));
  out.push(B.p("Texte courant : noir. Police : Times New Roman.", { size: 21, spacingAfter: 120 }));
  out.push(B.p("Types d'exercices utilisés (jamais nommés dans les consignes) : choix de réponses, Vrai/Faux, texte à compléter, question/réponse, appariement, complétion. Chaque exercice de la section EXERCICES est noté selon un barème ; le total est affiché.", { size: 21, spacingAfter: 120 }));
  out.push(B.p("Les exercices placés dans les étapes « Application » et « Évaluation » de la fiche ne portent ni note ni barème : ce sont des exercices de classe, corrigés à l'oral ou au tableau.", { size: 21, spacingAfter: 120 }));
  out.push(new Paragraph({ children: [new PageBreak()] }));
  return out;
}

// ------------------------------------------------------------
// Table des matières
// ------------------------------------------------------------
function tableDesMatieres() {
  const out = [];
  out.push(B.sectionHeading("TABLE DES MATIÈRES", null, { size: 26 }));
  out.push(B.tocLink("Avant-propos", "avant", { size: 22, bold: true }));
  out.push(B.tocLink("Mode d'emploi", "mode", { size: 22, bold: true }));

  let n = 0;
  UNITS.forEach((u) => {
    out.push(B.tocLink("UNITÉ " + u.num + " — " + u.titre, "unite" + u.num, { size: 22, bold: true }));
    u.topics.forEach((t) => {
      n += 1;
      out.push(B.tocLink("Séance " + n + " — " + t.titre, "seance" + n, { size: 19, indent: 360 }));
    });
    n += 1;
    out.push(B.tocLink("Séance " + n + " — " + revisions[u.num].titre, "seance" + n, { size: 19, indent: 360 }));
    n += 1;
    out.push(B.tocLink("Séance " + n + " — " + examens[u.num].titre, "seance" + n, { size: 19, indent: 360 }));
  });


  out.push(B.tocLink("Annexes", "annexes", { size: 22, bold: true }));
  out.push(B.tocLink("Glossaire", "glossaire", { size: 19, indent: 360 }));
  out.push(B.tocLink("Auto-évaluation", "autoeval", { size: 19, indent: 360 }));
  out.push(B.tocLink("Index", "index", { size: 19, indent: 360 }));
  out.push(B.tocLink("Bibliographie et webographie", "biblio", { size: 19, indent: 360 }));
  out.push(B.tocLink("Table des illustrations", "illus", { size: 19, indent: 360 }));
  out.push(new Paragraph({ children: [new PageBreak()] }));
  return out;
}

// ------------------------------------------------------------
// Tableau de bord d'une unité
// ------------------------------------------------------------
function tableauDeBord(u, startNum) {
  const out = [];
  out.push(B.sectionHeading("UNITÉ " + u.num + " — " + u.titre, "unite" + u.num, { size: 26 }));
  out.push(B.p("Résultats d'apprentissage spécifiques (Programme d'Études T12, série OSE) :", { bold: true, size: 20, spacingAfter: 40 }));
  u.ras.split(" · ").forEach((r) => out.push(B.p("• " + r, { size: 20, spacingAfter: 30, indent: { left: 360 } })));
  out.push(B.p("Valeurs à véhiculer : " + u.valeurs, { size: 20, spacingAfter: 60 }));
  out.push(B.p("Volume horaire de l'unité : " + u.duree + " (la discipline dispose de 5 heures par semaine, soit 165 heures pour l'année). Durée de chaque séance laissée à l'enseignant.", { size: 20, spacingAfter: 100 }));
  const rows = [
    new TableRow({ children: [
      B.cell([B.p("N°", { bold: true, size: 19 })], { shading: "D9E2F3" }),
      B.cell([B.p("Séance", { bold: true, size: 19 })], { shading: "D9E2F3" }),
    ]}),
  ];
  let n = startNum;
  u.topics.forEach((t) => {
    rows.push(new TableRow({ children: [
      B.cell([B.p("" + n, { size: 19 })]),
      B.cell([B.p(t.titre, { size: 19 })]),
    ]}));
    n += 1;
  });
  rows.push(new TableRow({ children: [
    B.cell([B.p("" + n, { size: 19, bold: true })]),
    B.cell([B.p(revisions[u.num].titre, { size: 19, bold: true })]),
  ]}));
  n += 1;
  rows.push(new TableRow({ children: [
    B.cell([B.p("" + n, { size: 19, bold: true })]),
    B.cell([B.p(examens[u.num].titre, { size: 19, bold: true })]),
  ]}));
  out.push(B.gridTable(rows, [8, 92]));
  out.push(new Paragraph({ children: [new PageBreak()] }));
  return out;
}

// ------------------------------------------------------------
// Séance de révision
// ------------------------------------------------------------
function revisionSeance(u, num) {
  const rev = revisions[u.num];
  const out = [];
  out.push(new Paragraph({ children: [new PageBreak()] }));
  out.push(B.sectionHeading("SÉANCE " + num + " / " + TOTAL, "seance" + num, { size: 22, color: B.BLUE }));
  out.push(B.p(rev.titre, { bold: true, size: 26, align: AlignmentType.CENTER, color: B.RED, spacingAfter: 120 }));
  out.push(B.p("Durée : ____________ — Valeurs à véhiculer : " + u.valeurs, { size: 20, align: AlignmentType.CENTER, spacingAfter: 120 }));
  out.push(B.p("Tableau récapitulatif des notions", { bold: true, size: 22, color: B.GREEN, spacingAfter: 60 }));
  const rows = [
    new TableRow({ children: [
      B.cell([B.p("Notion", { bold: true, size: 19 })], { shading: "D9E2F3" }),
      B.cell([B.p("L'essentiel", { bold: true, size: 19 })], { shading: "D9E2F3" }),
    ]}),
  ];
  rev.tableau.forEach(([t, e]) => rows.push(new TableRow({ children: [
    B.cell([B.p(t, { size: 19, bold: true })]),
    B.cell([B.p(e, { size: 19 })]),
  ]})));
  out.push(B.gridTable(rows, [30, 70]));
  out.push(B.p("Questions de révision", { bold: true, size: 22, color: B.GREEN, spacingAfter: 60 }));
  rev.questions.forEach(([q, ra]) => {
    out.push(B.p(q, { size: 21, spacingAfter: 30 }));
    out.push(B.pHighlight("R.A. : " + ra, [], B.PINK, { size: 20, spacingAfter: 80 }));
  });
  return out;
}

// ------------------------------------------------------------
// Sujet d'examen
// ------------------------------------------------------------
function examenSeance(u, num) {
  const ex = examens[u.num];
  const out = [];
  out.push(new Paragraph({ children: [new PageBreak()] }));
  out.push(B.sectionHeading("SÉANCE " + num + " / " + TOTAL, "seance" + num, { size: 22, color: B.BLUE }));
  out.push(B.p(ex.titre, { bold: true, size: 26, align: AlignmentType.CENTER, color: B.RED, spacingAfter: 80 }));
  out.push(B.p("Durée : ____________   ·   Barème total : " + totalPoints(ex.exercices) + " points", { size: 20, align: AlignmentType.CENTER, spacingAfter: 120 }));
  let total = 0;
  ex.exercices.forEach((exo, i) => {
    const d = EB.buildExo(exo);
    total += d.points;
    out.push(B.p("Exercice " + (i + 1) + " (" + d.points + " points)", { bold: true, size: 20, color: B.BLUE, spacingAfter: 30 }));
    out.push(B.p(exo.consigne, { italics: true, size: 19, spacingAfter: 30 }));
    d.parts.forEach((line) => out.push(B.p(line, { size: 19, spacingAfter: 25 })));
    out.push(B.p("", { size: 14 }));
  });
  out.push(B.p("TOTAL : " + total + " points", { bold: true, size: 21, align: AlignmentType.CENTER, spacingAfter: 160 }));
  out.push(B.sectionHeading("CORRIGÉ", null, { size: 24 }));
  ex.exercices.forEach((exo, i) => {
    const d = EB.buildExo(exo);
    out.push(B.p("Exercice " + (i + 1) + " — corrigé", { bold: true, size: 20, color: B.BLUE, spacingAfter: 30 }));
    d.corrige.forEach((c) => out.push(B.pHighlight(c.text, c.keys, B.PINK, { size: 19, spacingAfter: 25 })));
    out.push(B.p("", { size: 14 }));
  });
  return out;
}

function totalPoints(exos) {
  return exos.reduce((s, e) => s + EB.buildExo(e).points, 0);
}

// ------------------------------------------------------------
// Annexes
// ------------------------------------------------------------
const GLOSSAIRE = [
  ["Anomie", "Affaiblissement des règles communes : chacun poursuit son intérêt sans repère collectif."],
  ["Appartenance nationale", "Sentiment d'être membre d'une même collectivité, au-delà des différences individuelles."],
  ["Appréciation", "Hausse de la valeur de la monnaie nationale : il faut en donner moins pour la même devise."],
  ["Apprentissage", "Formation qui alterne les périodes en entreprise et l'enseignement, et donne une expérience réelle du métier."],
  ["Approche par la dépense", "Calcul du PIB qui additionne consommation, investissement, dépenses publiques et solde extérieur."],
  ["Approche par la production", "Calcul du PIB qui additionne les valeurs ajoutées des branches et les impôts nets des subventions."],
  ["Approche par le revenu", "Calcul du PIB qui additionne salaires, excédent brut d'exploitation et impôts nets des subventions."],
  ["Assemblée générale", "Instance souveraine d'une association : elle élit les responsables, approuve les comptes et fixe les orientations."],
  ["Association", "Groupement de personnes réunies pour un but autre que le partage d'un bénéfice."],
  ["Autorité", "Pouvoir reconnu comme légitime : on obéit parce que la fonction le justifie."],
  ["Avantage absolu", "Capacité de produire un bien avec moins d'heures de travail qu'un autre pays (Adam Smith)."],
  ["Avantage comparatif", "Situation d'un pays dont le désavantage relatif est le plus faible dans une production (David Ricardo)."],
  ["Avantage construit", "Avantage acquis par l'effort : formation, innovation, qualité et respect des normes."],
  ["Balance commerciale", "Différence entre la valeur des exportations et celle des importations d'un pays."],
  ["Balance des paiements", "Document qui retrace toutes les transactions entre les résidents et les non-résidents."],
  ["Bénévolat", "Engagement personnel non rémunéré ; dans une association, il fonde une autorité sans lien hiérarchique."],
  ["Besoin essentiel", "Ce qui est nécessaire pour vivre dignement : se nourrir, se soigner, s'instruire et se loger."],
  ["Big push", "Ensemble d'investissements coordonnés qui deviennent rentables ensemble, là où des projets isolés échouent."],
  ["Budget participatif", "Procédure où les habitants décident de l'affectation d'une part des dépenses de la collectivité."],
  ["But lucratif", "Finalité d'une organisation qui recherche un bénéfice destiné à être partagé."],
  ["Capital humain", "Compétences, formation et santé des travailleurs : ce qui rend leur travail plus efficace."],
  ["Capital naturel", "Ressources et écosystèmes utilisés par la production : sols, forêts, eau, biodiversité."],
  ["Capital produit", "Machines, bâtiments, routes et réseaux : l'équipement dont dispose le pays."],
  ["Caractère cumulatif", "Fait que les désavantages s'additionnent au lieu de se limiter à un seul domaine."],
  ["Cercle vicieux", "Enchaînement où chaque difficulté entretient la suivante : faible revenu, faible épargne, faible investissement, faible productivité."],
  ["Chaîne de montage", "Dispositif de production où le produit avance vers l'ouvrier et impose la cadence de travail."],
  ["Chef de l'État", "Personne qui incarne l'État et le représente, avec des pouvoirs variables selon le régime."],
  ["Chômage classique", "Chômage causé par un coût du travail supérieur à la productivité du poste, qui décourage l'embauche."],
  ["Chômage conjoncturel", "Chômage lié au cycle de l'activité, qui recule quand la croissance revient."],
  ["Chômage frictionnel", "Chômage de courte durée, lié au temps de recherche entre deux emplois."],
  ["Chômage involontaire", "Situation d'une personne qui accepterait le salaire en vigueur sans trouver d'emploi."],
  ["Chômage keynésien", "Chômage causé par l'insuffisance de la demande adressée aux entreprises."],
  ["Chômage structurel", "Chômage durable lié à la structure de l'économie, qui résiste à la reprise."],
  ["Chômage volontaire", "Situation d'une personne qui refuse le poste ou le salaire proposés alors qu'un emploi est disponible."],
  ["Chômeur découragé", "Personne qui cesse de chercher un emploi après des échecs répétés et sort des statistiques."],
  ["Coentreprise", "Société créée et dirigée ensemble par un groupe étranger et un partenaire national."],
  ["Cohabitation", "Situation où le président et la majorité parlementaire sont de bords politiques opposés."],
  ["Cohésion sociale", "Degré d'attachement des membres d'une société entre eux et à des règles communes."],
  ["Commerce international", "Ensemble des échanges de biens et de services qui franchissent les frontières."],
  ["Commerce intra-branche", "Échange de produits appartenant à une même branche entre deux pays."],
  ["Commerce intra-firme", "Échanges réalisés entre les filiales d'une même entreprise multinationale."],
  ["Compromis fordiste", "Cercle qui relie gains de productivité, hausse des salaires et consommation de masse."],
  ["Conscience collective", "Ensemble des croyances et des sentiments communs aux membres d'une société."],
  ["Constitution", "Texte fondamental qui organise les pouvoirs publics et garantit les droits des citoyens."],
  ["Contagion", "Propagation d'une crise financière d'une place vers les autres marchés."],
  ["Contrat", "Convention par laquelle des personnes s'engagent les unes envers les autres à donner, faire ou ne pas faire."],
  ["Contre-pouvoir", "Institution ou mécanisme permettant de s'opposer à une décision et d'en obtenir le contrôle."],
  ["Contrôle de légalité", "Vérification qu'une décision publique respecte les textes en vigueur."],
  ["Coût du travail", "Salaire brut augmenté des cotisations et charges supportées par l'employeur."],
  ["Coût relatif", "Ce à quoi il faut renoncer d'un bien pour produire une unité d'un autre : le coût d'opportunité."],
  ["Crise bancaire", "Défaillance des banques, qui assèche le crédit et atteint l'économie réelle."],
  ["Crise boursière", "Effondrement rapide des cours des actions, qui détruit la valeur des portefeuilles."],
  ["Crise de taux de change", "Attaque contre une monnaie, qui se déprécie brutalement."],
  ["Croissance économique", "Augmentation durable de la production d'un pays, mesurée par la hausse du PIB en volume."],
  ["Croissance endogène", "Croissance dont les causes sont internes au système économique et qui s'entretient elle-même."],
  ["Croissance extensive", "Croissance obtenue en mobilisant davantage de facteurs : plus de travailleurs, de machines ou de terres."],
  ["Croissance intensive", "Croissance obtenue en rendant les mêmes facteurs plus efficaces, grâce à la productivité."],
  ["Décloisonnement", "Suppression des séparations entre les marchés financiers et les activités."],
  ["Délégation", "Transfert d'une responsabilité à une personne ou à une équipe, assorti des moyens nécessaires."],
  ["Délocalisation", "Transfert d'une activité de production vers un autre pays."],
  ["Demande de travail", "Quantité de travail que les entreprises souhaitent embaucher à un salaire donné."],
  ["Démocratie délibérative", "Démarche où la décision se prépare par une discussion argumentée avant d'être tranchée."],
  ["Démocratie directe", "Forme de démocratie où les citoyens décident eux-mêmes, sans intermédiaire élu."],
  ["Démocratie participative", "Ensemble des dispositifs qui associent les citoyens à la décision publique entre deux élections."],
  ["Démocratie représentative", "Forme de démocratie où les citoyens élisent des représentants qui décident en leur nom."],
  ["Démocratie semi-directe", "Combinaison de la démocratie représentative et de procédures de décision directe."],
  ["Dépréciation", "Baisse de la valeur de la monnaie nationale en régime de changes flottants."],
  ["Déréglementation", "Levée des règles et des contrôles qui limitaient les mouvements de capitaux."],
  ["Désaffiliation", "Perte progressive des appartenances : emploi, famille, voisinage, associations."],
  ["Désintermédiation", "Financement direct sur les marchés, sans passer par l'intermédiaire d'une banque."],
  ["Destruction créatrice", "Processus par lequel une activité ancienne disparaît pendant qu'une activité nouvelle naît."],
  ["Dette extérieure", "Ensemble des sommes que les résidents d'un pays doivent à des créanciers étrangers."],
  ["Développement", "Amélioration durable des conditions de vie : santé, éducation, sécurité, liberté et environnement."],
  ["Développement durable", "Développement qui répond aux besoins du présent sans compromettre ceux des générations futures."],
  ["Développement humain", "Approche qui place l'élargissement des capacités des personnes au cœur du développement."],
  ["Diagnostic stratégique", "Analyse de la situation interne et externe de l'organisation, qui précède toute décision stratégique."],
  ["Différence", "Écart constaté entre deux personnes, qui n'implique ni supériorité ni infériorité."],
  ["Différenciation des produits", "Variétés distinctes proposées pour un même bien : modèles, qualités, marques."],
  ["Discrimination", "Traitement défavorable fondé sur une caractéristique sans lien avec la situation."],
  ["Disqualification sociale", "Perte de la reconnaissance sociale : la personne n'occupe plus de place reconnue."],
  ["Dissolution", "Décision de mettre fin au mandat de l'assemblée et de provoquer de nouvelles élections."],
  ["Diversification", "Voie stratégique qui ouvre une activité nouvelle afin de répartir le risque."],
  ["Division du travail", "Répartition des tâches entre les individus, chacun exerçant une activité particulière."],
  ["Dommages et intérêts", "Somme versée à la victime pour réparer le préjudice qu'elle a subi."],
  ["Dotation factorielle", "Quantité de facteurs de production — travail, capital, ressources — dont dispose un pays."],
  ["Droit coopératif", "Droit qui répare le dommage causé plutôt que de punir la faute."],
  ["Droit de la concurrence", "Ensemble des règles qui interdisent les ententes, les abus de position dominante et les pratiques trompeuses."],
  ["Droit répressif", "Droit où la règle transgressée appelle une peine, afin de réaffirmer la règle commune."],
  ["Droits de douane", "Taxes prélevées sur les produits importés, qui en renchérissent le prix."],
  ["Économies d'échelle", "Baisse du coût unitaire obtenue en produisant en plus grande série."],
  ["Effet d'éviction", "Freinage de l'investissement privé par la hausse des taux qu'entraîne l'emprunt public."],
  ["Effet de compensation", "Emplois rendus par la baisse des prix, l'activité induite et la fabrication des équipements nouveaux."],
  ["Effet de destruction", "Disparition de postes remplacés par des machines ou par un procédé plus efficace."],
  ["Égalité des chances", "Compensation des handicaps de départ, pour que le mérite décide du parcours."],
  ["Égalité des droits", "Mêmes droits pour tous : même loi, mêmes libertés, même accès au suffrage."],
  ["Égalité réelle", "Égalité de situation : les conditions de vie elles-mêmes se rapprochent."],
  ["Élasticité emploi-croissance", "Rapport entre la variation de l'emploi et la variation de la production."],
  ["Émile Durkheim", "Sociologue français qui a montré que la division du travail fonde le lien social moderne."],
  ["Employabilité", "Capacité d'une personne à trouver et à conserver un emploi, compte tenu de ses compétences et du marché."],
  ["Entreprise privée", "Organisation qui produit des biens ou des services pour les vendre, et dont le capital est privé."],
  ["Équité", "Principe selon lequel chacun reçoit selon son effort, son mérite ou son besoin réel."],
  ["État de droit", "État où les gouvernants sont soumis au droit et où les droits des personnes sont garantis."],
  ["Exclusion sociale", "État d'une personne privée durablement de ressources, de liens et de reconnaissance."],
  ["Exportation", "Vente à l'étranger d'un bien ou d'un service produit dans le pays."],
  ["Externalité", "Effet de l'activité d'un agent sur un tiers, sans compensation par le marché."],
  ["Externalité négative", "Coût subi par un tiers et non compensé par celui qui le cause : pollution, bruit, dégradation d'une rivière."],
  ["Facteur capital", "Moyens durables de production : machines, outils, bâtiments et moyens financiers."],
  ["Facteur travail", "Activité humaine consacrée à la production, mesurée en personnel occupé et en heures."],
  ["Faiblesse", "Point faible interne de l'organisation : équipement vétuste, coûts élevés, dépendance à un fournisseur."],
  ["FFOM", "Traduction française de la matrice SWOT : Forces, Faiblesses, Opportunités, Menaces."],
  ["Firme multinationale", "Entreprise qui possède des unités de production ou de vente dans plusieurs pays."],
  ["Fiscalité", "Ensemble des prélèvements obligatoires : impôts, taxes et cotisations."],
  ["Flexibilité encadrée", "Assouplissement des conditions d'embauche et de travail, assorti de garanties pour les salariés."],
  ["Fonction de production", "Relation Y = A × F(K, L) qui relie la production aux quantités de capital et de travail et à leur efficacité."],
  ["Force", "Point fort interne de l'organisation : compétence rare, équipe formée, matériel fiable."],
  ["Fordisme", "Production de masse à la chaîne associée à des salaires élevés et à la consommation de masse."],
  ["Formation continue", "Formation suivie pendant la vie active pour entretenir et élever les compétences."],
  ["Globalisation financière", "Intégration des marchés de capitaux à l'échelle mondiale, actifs en continu."],
  ["Groupe d'appartenance", "Groupe dont on est réellement membre."],
  ["Groupe de référence", "Groupe dont on adopte les valeurs sans nécessairement en être membre."],
  ["Groupe de sociétés", "Ensemble de sociétés liées : la maison mère fixe l'orientation, les filiales déclinent les cibles."],
  ["Groupe de travail autonome", "Équipe qui organise elle-même la répartition des tâches et résout les problèmes courants."],
  ["Groupe primaire", "Groupe de petite taille à relations directes et personnelles : famille, amis, voisins."],
  ["Groupe secondaire", "Groupe plus vaste à relations fonctionnelles : entreprise, établissement scolaire."],
  ["Groupe social", "Ensemble de personnes liées par des relations régulières et le sentiment d'une appartenance commune."],
  ["Identité de l'organisation", "Ce qu'elle est : sa mission, ses valeurs, son métier et les ressources qu'elle mobilise."],
  ["IDH", "Indice de développement humain, compris entre 0 et 1, qui combine santé, éducation et niveau de vie."],
  ["Importation", "Achat à l'étranger d'un bien ou d'un service destiné au marché intérieur."],
  ["Impôt progressif", "Impôt dont le taux s'élève avec le revenu."],
  ["Inadéquation des compétences", "Écart entre les qualifications disponibles et celles que recherchent les entreprises."],
  ["Indicateur de suivi", "Grandeur mesurée à intervalles réguliers, qui renseigne sur l'avancement d'une action."],
  ["Industrialisation", "Développement des activités de transformation, qui crée des emplois et retient la valeur ajoutée."],
  ["Inégalité", "Écart qui place les personnes dans un rapport de supériorité ou d'infériorité."],
  ["Inégalités de genre", "Écarts de rémunération, d'accès aux responsabilités et de sécurité entre les sexes."],
  ["Inégalités de santé", "Écarts d'accès aux soins et d'espérance de vie."],
  ["Inégalités économiques", "Écarts de revenu, de patrimoine et d'accès à l'emploi."],
  ["Inégalités justes", "Inégalités acceptées parce qu'elles récompensent l'effort ou résultent d'un choix."],
  ["Inégalités scolaires", "Écarts de réussite, d'orientation et d'accès aux études longues."],
  ["Inégalités territoriales", "Écarts d'accès aux services publics, aux transports et aux réseaux."],
  ["Insertion professionnelle", "Dispositifs qui accompagnent les jeunes et les publics éloignés de l'emploi vers un poste durable."],
  ["Instance d'intégration", "Institution ou cadre collectif qui relie l'individu à la société et lui donne une place."],
  ["Institutions", "Règles et organisations qui encadrent la vie économique : droit de propriété, contrats, fiscalité."],
  ["Intensité capitalistique", "Rapport entre le capital et le travail : l'équipement dont dispose chaque travailleur."],
  ["Intensité de main-d'œuvre", "Quantité de travail nécessaire pour produire une unité de bien ou de service."],
  ["Interdépendance", "Situation où aucun individu ne se suffit à lui-même et où tous ont besoin les uns des autres."],
  ["Investissement de portefeuille", "Achat de titres étrangers sans participation à la direction de l'entreprise."],
  ["Jury citoyen", "Groupe de citoyens tirés au sort, réunis pour examiner une question et rendre un avis."],
  ["Justice sociale", "Ensemble des principes qui permettent de juger si la répartition des avantages est équitable."],
  ["Légitimité électorale", "Pouvoir reconnu parce qu'il provient du suffrage : le responsable élu agit au nom de la population."],
  ["Libre-échange", "Politique qui supprime les obstacles aux échanges entre les pays."],
  ["Lien de filiation", "Lien de parenté, établi par la naissance ou l'adoption."],
  ["Lien de voisinage", "Lien fondé sur la proximité géographique et l'entraide qu'elle rend possible."],
  ["Lien social", "Ensemble des relations qui unissent les membres d'une société et fondent leur appartenance."],
  ["Majorité absolue", "Nombre de suffrages supérieur à la moitié des suffrages exprimés."],
  ["Majorité relative", "Situation du candidat qui dépasse chacun de ses adversaires sans atteindre la moitié."],
  ["Mandat", "Mission confiée à un responsable, pour une durée et des compétences définies."],
  ["Marché de quotas", "Dispositif qui fixe un plafond d'émissions puis répartit des droits échangeables entre entreprises."],
  ["Marché des changes", "Lieu, physique où électronique, où les monnaies s'échangent entre elles."],
  ["Marché du travail", "Lieu, réel ou virtuel, où l'offre de travail des ménages rencontre la demande des entreprises."],
  ["Menace", "Risque venu de l'environnement : concurrence nouvelle, hausse des intrants, réglementation plus stricte."],
  ["Métier de l'organisation", "Savoir-faire précis qu'elle maîtrise et qui la distingue des autres."],
  ["Minima sociaux", "Ressources garanties à ceux qui n'en ont aucune."],
  ["Mission", "Énoncé de ce que l'organisation fait et de ceux à qui elle s'adresse."],
  ["Mobilité professionnelle", "Capacité d'un travailleur à changer de poste, de métier ou de région."],
  ["Modernisation agricole", "Semences améliorées, irrigation, engrais, stockage et pistes rurales pour élever les rendements."],
  ["Mondialisation", "Intensification des échanges de biens, de services, de capitaux et d'informations à l'échelle mondiale."],
  ["Motion de censure", "Vote par lequel le Parlement met fin aux fonctions du gouvernement."],
  ["Multiplicateur", "Effet amplifié d'une dépense, qui crée plus d'activité que son montant initial."],
  ["Non-discrimination", "Règle selon laquelle un avantage accordé à un membre l'est à tous les autres."],
  ["Objectif stratégique", "Résultat clair, mesurable et atteignable, choisi pour engager l'organisation sur plusieurs années."],
  ["Offre de travail", "Quantité de travail que les ménages acceptent de fournir à un salaire donné."],
  ["OMC", "Organisation mondiale du commerce : elle fixe les règles et règle les différends entre membres."],
  ["Opportunité", "Chance offerte par l'environnement : marché en croissance, aide publique, technologie disponible."],
  ["Organigramme", "Schéma qui représente les fonctions d'une organisation et les liens hiérarchiques entre elles."],
  ["Organisation", "Groupe structuré de personnes qui poursuit un but commun, avec des tâches réparties et des ressources."],
  ["Organisation publique", "Structure créée par une décision publique pour rendre un service à la population."],
  ["Paradoxe de l'épargne", "Situation où la volonté générale d'épargner réduit le revenu de tous."],
  ["Parcellisation", "Décomposition du travail en gestes élémentaires, confiés à des postes distincts."],
  ["PGF", "Productivité globale des facteurs : part de la croissance non expliquée par les quantités de travail et de capital."],
  ["PIB", "Produit intérieur brut : valeur de la production réalisée sur le territoire pendant une année."],
  ["PIB par habitant", "PIB divisé par la population : un ordre de grandeur de la production moyenne par personne."],
  ["Plus forte moyenne", "Règle d'attribution des sièges restants après la répartition au quotient électoral."],
  ["Politique d'offre", "Action sur les conditions de production, pour rendre l'embauche moins coûteuse et plus simple."],
  ["Politique de relance", "Soutien à la demande par la dépense publique, pour relancer la production et l'emploi."],
  ["Pollueur-payeur", "Principe selon lequel celui qui dégrade l'environnement en supporte le coût."],
  ["Pouvoir", "Capacité d'une personne ou d'un groupe d'influencer une décision et de la faire appliquer."],
  ["Pouvoir d'expertise", "Influence tirée de la maîtrise d'un savoir rare, indépendamment du grade occupé."],
  ["Pouvoir exécutif", "Pouvoir qui exécute les lois et conduit la politique de l'État."],
  ["Pouvoir judiciaire", "Pouvoir indépendant qui tranche les litiges et sanctionne les atteintes à la règle."],
  ["Pouvoir législatif", "Pouvoir qui vote la loi et contrôle l'action du gouvernement."],
  ["Prestations sociales", "Versements destinés aux ménages : allocations familiales, aides au logement, minima sociaux."],
  ["Prêteur en dernier ressort", "Rôle de la banque centrale, qui fournit des liquidités au système en période de crise."],
  ["Prime majoritaire", "Attribution d'un nombre fixe de sièges à la liste arrivée en tête, en sus de sa part proportionnelle."],
  ["Production au plus juste", "Produire juste à temps et juste ce qu'il faut, en limitant les stocks et les gaspillages."],
  ["Production perdue", "Production qui aurait pu être réalisée si la main-d'œuvre disponible avait travaillé."],
  ["Productivité", "Rapport entre la quantité produite et les moyens utilisés pour la produire."],
  ["Productivité du travail", "Production rapportée au travail utilisé, le plus souvent par heure travaillé."],
  ["Produits manufacturés", "Biens transformés par l'industrie avant d'être échangés."],
  ["Produits primaires", "Produits agricoles, forestiers, halieutiques et miniers échangés peu transformés."],
  ["Progrès technique", "Innovation qui permet d'obtenir davantage avec les mêmes facteurs, où la même chose avec moins."],
  ["Propriété du capital", "Source de pouvoir qui permet de désigner les dirigeants et d'approuver les grandes orientations."],
  ["Protection sociale", "Dispositifs qui couvrent les risques : maladie, vieillesse, accident du travail, chômage, famille."],
  ["Protectionnisme", "Politique qui protège la production nationale de la concurrence étrangère."],
  ["Qualité totale", "Recherche du zéro défaut : chaque opérateur contrôle son propre travail."],
  ["Quota", "Limite quantitative imposée aux importations d'un produit pendant une période."],
  ["Quotient électoral", "Nombre de suffrages nécessaires pour obtenir un siège dans un scrutin proportionnel."],
  ["Reconversion", "Changement de métier préparé par une formation adaptée, quand l'activité d'origine décline."],
  ["Redistribution", "Financement de prestations et de services avec les ressources prélevées."],
  ["Référendum", "Vote par lequel les citoyens se prononcent directement sur un texte ou sur une question."],
  ["Régime autoritaire", "Régime où le pouvoir est concentré, les libertés réduites et la contestation limitée."],
  ["Régime démocratique", "Régime où le pouvoir s'exerce au nom du peuple, par des représentants élus et dans le respect des libertés."],
  ["Régime parlementaire", "Régime où le gouvernement est responsable devant le Parlement, qui peut le renverser."],
  ["Régime politique", "Organisation du pouvoir dans un État : qui le détient, comment il s'exerce et par quoi il est limité."],
  ["Régime présidentiel", "Régime où le président élu dirige l'exécutif sans être responsable devant le Parlement."],
  ["Régime semi-présidentiel", "Régime à deux têtes de l'exécutif : un président élu et un Premier ministre responsable devant le Parlement."],
  ["Réglementation", "Ensemble de normes et d'interdictions imposées pour protéger l'environnement."],
  ["Rendements décroissants", "Loi selon laquelle chaque unité de capital supplémentaire apporte un gain plus faible, à travail constant."],
  ["Responsabilité civile", "Obligation de réparer le dommage que l'on a causé à autrui."],
  ["Responsabilité pénale", "Obligation de répondre d'une infraction prévue par la loi, en subissant une peine."],
  ["Ressource immatérielle", "Ressource sans support physique : savoir-faire, réputation, relations."],
  ["Ressource non renouvelable", "Ressource dont le stock ne se reconstitue pas à l'échelle humaine : minerais, hydrocarbures."],
  ["Rigidité des salaires", "Résistance des rémunérations à la baisse, même en période de chômage élevé."],
  ["RNB", "Revenu national brut : ensemble des revenus perçus par les unités résidentes, où qu'elles produisent."],
  ["Salaire au rendement", "Rémunération indexée sur la quantité produite, destinée à stimuler l'effort."],
  ["Salaire d'efficience", "Salaire supérieur à l'équilibre, choisi pour stimuler l'effort et retenir le personnel."],
  ["Salaire d'équilibre", "Salaire qui égalise les quantités de travail offertes et demandées sur le marché."],
  ["Salaire réel", "Salaire corrigé de la hausse des prix : il mesure le pouvoir d'achat."],
  ["Scrutin", "Procédure par laquelle les électeurs désignent leurs représentants ou se prononcent sur une question."],
  ["Scrutin de liste", "Scrutin où l'électeur choisit une liste de candidats présentée par un parti."],
  ["Scrutin majoritaire", "Mode de scrutin où le candidat ou la liste arrivé en tête emporte le siège."],
  ["Scrutin mixte", "Mode de scrutin combinant une part de sièges au scrutin majoritaire et une part à la proportionnelle."],
  ["Scrutin proportionnel", "Mode de scrutin où les sièges sont répartis entre les listes à proportion de leurs suffrages."],
  ["Scrutin uninominal", "Scrutin où l'électeur choisit un seul nom, pour un seul siège à pourvoir."],
  ["Second tour", "Nouveau scrutin organisé lorsqu'aucun candidat n'a réuni la majorité requise au premier tour."],
  ["Sécurité juridique", "Certitude que la règle est claire, stable et effectivement appliquée par le juge."],
  ["Segmentation", "Séparation du marché du travail en un secteur stable et un secteur précaire qui communiquent peu."],
  ["Séparation des pouvoirs", "Répartition des fonctions de l'État entre organes distincts, afin qu'aucun ne concentre toute l'autorité."],
  ["Service de la dette", "Capital remboursé et intérêts payés chaque année au titre de la dette."],
  ["Seuil de représentativité", "Pourcentage minimal de suffrages exigé pour participer à la répartition des sièges."],
  ["Socialisation", "Processus par lequel l'individu apprend les règles et les manières de vivre de sa société."],
  ["Sociologie", "Science qui étudie les sociétés humaines, les groupes qui les composent et les relations qui les unissent."],
  ["Solidarité mécanique", "Lien social fondé sur la ressemblance des individus : mêmes croyances et mêmes tâches."],
  ["Solidarité organique", "Lien social fondé sur la complémentarité des fonctions et l'interdépendance."],
  ["Sous-activité", "Situation où l'économie produit durablement en dessous de ses capacités."],
  ["Sous-développement", "Situation durable où les besoins essentiels d'une grande partie de la population restent insatisfaits."],
  ["Sous-emploi", "Situation d'un actif qui travaille moins qu'il ne le voudrait, ou sous sa qualification."],
  ["Soutenabilité", "Capacité d'un mode de développement à durer sans épuiser les ressources dont il dépend."],
  ["Soutenabilité faible", "Approche qui tient les formes de capital pour substituables : seul compte le stock total transmis."],
  ["Soutenabilité forte", "Approche qui tient le capital naturel pour irremplaçable et le protège séparément."],
  ["Spécialisation", "Voie stratégique qui concentre l'effort sur le métier le mieux maîtrisé."],
  ["Stabilisateur automatique", "Dispositif qui amortit le cycle sans décision nouvelle, comme l'allocation chômage."],
  ["Stratégie", "Ensemble des choix par lesquels l'organisation atteint ses objectifs compte tenu de ses ressources."],
  ["Style de direction", "Manière habituelle dont un responsable prend ses décisions et conduit son équipe."],
  ["Style délégatif", "Style où le responsable fixe l'objectif et laisse à l'équipe le choix des moyens."],
  ["Style directif", "Style où le responsable décide seul et donne des ordres précis, sans consulter."],
  ["Style participatif", "Style où le responsable consulte l'équipe avant de décider."],
  ["Style persuasif", "Style où le responsable décide, puis explique sa décision pour obtenir l'adhésion."],
  ["Suffrage universel", "Droit de vote reconnu à tous les citoyens majeurs, sans condition de fortune ni d'instruction."],
  ["Surendettement", "Situation où un pays ne peut plus honorer le service de sa dette sans sacrifier l'essentiel."],
  ["SWOT", "Matrice de diagnostic : Strengths, Weaknesses, Opportunities, Threats — forces, faiblesses, opportunités, menaces."],
  ["Taux d'ouverture", "Rapport entre le commerce extérieur et le PIB : (exportations + importations) ÷ (2 × PIB)."],
  ["Taux de change", "Prix d'une monnaie exprimé dans une autre monnaie."],
  ["Taxation environnementale", "Impôt où taxe qui rend la pollution coûteuse afin d'en décourager l'usage."],
  ["Taylorisme", "Organisation scientifique du travail : tâches parcellisées, chronométrées et étroitement contrôlées."],
  ["Travaux publics", "Commandes de l'État, routes, écoles et réseaux, qui emploient directement de la main-d'œuvre."],
  ["Utilité sociale", "Critère de réussite d'une organisation non lucrative : le service rendu à la collectivité."],
  ["Valeur ajoutée", "Valeur de la production diminuée des consommations intermédiaires : la richesse créée."],
];

function glossaireAnnexe() {
  const out = [];
  out.push(new Paragraph({ children: [new PageBreak()] }));
  out.push(B.sectionHeading("ANNEXES", "annexes", { size: 26 }));
  out.push(B.sectionHeading("GLOSSAIRE", "glossaire", { size: 24 }));
  const rows = GLOSSAIRE.map(([t, d]) => new TableRow({ children: [
    B.cell([B.p(t, { size: 19, bold: true })]),
    B.cell([B.p(d, { size: 19 })]),
  ]}));
  const header = new TableRow({ children: [
    B.cell([B.p("Terme", { bold: true, size: 19 })], { shading: "D9E2F3" }),
    B.cell([B.p("Définition", { bold: true, size: 19 })], { shading: "D9E2F3" }),
  ]});
  out.push(B.gridTable([header, ...rows], [32, 68]));
  return out;
}

function autoEvaluationAnnexe() {
  const out = [];
  out.push(B.sectionHeading("AUTO-ÉVALUATION", "autoeval", { size: 24 }));
  out.push(B.p("Coche la case qui correspond à ton niveau après chaque séance.", { size: 20, spacingAfter: 80 }));
  const rows = [new TableRow({ children: [
    B.cell([B.p("Compétence", { bold: true, size: 19 })], { shading: "D9E2F3" }),
    B.cell([B.p("Acquis", { bold: true, size: 19 })], { shading: "D9E2F3" }),
    B.cell([B.p("En cours", { bold: true, size: 19 })], { shading: "D9E2F3" }),
    B.cell([B.p("À revoir", { bold: true, size: 19 })], { shading: "D9E2F3" }),
  ]})];
  UNITS.forEach((u) => {
    u.themes.forEach((t) => rows.push(new TableRow({ children: [
      B.cell([B.p("Unité " + u.num + " — " + t, { size: 19 })]),
      B.cell([B.p("☐", { size: 19 })]),
      B.cell([B.p("☐", { size: 19 })]),
      B.cell([B.p("☐", { size: 19 })]),
    ]})));
  });
  out.push(B.gridTable(rows, [55, 15, 15, 15]));
  return out;
}

function buildIndex() {
  const entries = [];
  let n = 0;
  UNITS.forEach((u) => {
    u.topics.forEach((t) => {
      n += 1;
      (t.motsCles || []).forEach((m) => entries.push([m, n]));
    });
    n += 2;
  });
  const map = new Map();
  entries.forEach(([m, s]) => {
    if (!map.has(m)) map.set(m, []);
    if (!map.get(m).includes(s)) map.get(m).push(s);
  });
  return [...map.entries()].sort((a, b) => a[0].localeCompare(b[0], "fr", { sensitivity: "base" }));
}

function indexAnnexe() {
  const out = [];
  out.push(B.sectionHeading("INDEX", "index", { size: 24 }));
  buildIndex().forEach(([m, seances]) => {
    const links = seances.map((s) => new InternalHyperlink({
      anchor: "seance" + s,
      children: [new TextRun({ text: "Séance " + s + "  ", size: 19, color: B.BLUE, font: B.FONT })],
    }));
    out.push(new Paragraph({
      spacing: { after: 40 },
      children: [new TextRun({ text: m + "  :  ", bold: true, size: 19, font: B.FONT }), ...links],
    }));
  });
  return out;
}

function bibliographieAnnexe() {
  const out = [];
  out.push(B.sectionHeading("BIBLIOGRAPHIE ET WEBOGRAPHIE", "biblio", { size: 24 }));
  const refs = [
    "Programme d'Études — Classe de T12, série OSE, Sciences Économiques et Sociales (Direction des Curricula et des Recherches Pédagogiques, Madagascar).",
    "Programme d'Études — Classe de T12, volume horaire et organisation générale des disciplines (même source).",
  ];
  refs.forEach((r) => out.push(B.p("• " + r, { size: 20, spacingAfter: 50, indent: { left: 360 } })));
  return out;
}

function tableIllustrations() {
  const images = [];
  let n = 0;
  UNITS.forEach((u) => {
    u.topics.forEach((t) => {
      n += 1;
      if (t.image) images.push([t.image.legende || t.titre, n]);
    });
    n += 2;
  });
  if (!images.length) return [];
  const out = [];
  out.push(B.sectionHeading("TABLE DES ILLUSTRATIONS", "illus", { size: 24 }));
  images.forEach(([titre, s]) => {
    out.push(B.tocLink(titre + " — Séance " + s, "seance" + s, { size: 19 }));
  });
  return out;
}

// ------------------------------------------------------------
// Assemblage final
// ------------------------------------------------------------
function assemble() {
  const children = [
    ...coverPage(),
    ...avantPropos(),
    ...modeEmploi(),
    ...tableDesMatieres(),
  ];
  let n = 0;
  UNITS.forEach((u) => {
    children.push(...tableauDeBord(u, n + 1));
    u.topics.forEach((t) => {
      n += 1;
      if (t.image) {
        const file = path.join(IMG_DIR, t.image.file);
        t.image.file = fs.existsSync(file) ? file : null;
      }
      children.push(...generateSeanceDocContent(t, n, TOTAL));
    });
    n += 1;
    children.push(...revisionSeance(u, n));
    n += 1;
    children.push(...examenSeance(u, n));
  });
  children.push(
    ...glossaireAnnexe(),
    ...autoEvaluationAnnexe(),
    ...indexAnnexe(),
    ...bibliographieAnnexe(),
    ...tableIllustrations(),
  );
  const doc = new Document({
    styles: { default: { document: { run: { font: "Times New Roman", size: 20 } } } },
    sections: [{
      properties: { page: { margin: { top: 900, bottom: 900, left: 1000, right: 1000 } } },
      children,
    }],
  });
  return doc;
}

module.exports = { assemble, buildIndex };
