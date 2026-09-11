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
const { revisions, examens } = require("./data-evaluations");

const UNITS = [U1, U2, U3];
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
  ["Appréciation", "Hausse de la valeur de la monnaie nationale : il faut en donner moins pour la même devise."],
  ["Apprentissage", "Formation qui alterne les périodes en entreprise et l'enseignement, et donne une expérience réelle du métier."],
  ["Approche par la dépense", "Calcul du PIB qui additionne consommation, investissement, dépenses publiques et solde extérieur."],
  ["Approche par la production", "Calcul du PIB qui additionne les valeurs ajoutées des branches et les impôts nets des subventions."],
  ["Approche par le revenu", "Calcul du PIB qui additionne salaires, excédent brut d'exploitation et impôts nets des subventions."],
  ["Avantage absolu", "Capacité de produire un bien avec moins d'heures de travail qu'un autre pays (Adam Smith)."],
  ["Avantage comparatif", "Situation d'un pays dont le désavantage relatif est le plus faible dans une production (David Ricardo)."],
  ["Avantage construit", "Avantage acquis par l'effort : formation, innovation, qualité et respect des normes."],
  ["Balance commerciale", "Différence entre la valeur des exportations et celle des importations d'un pays."],
  ["Balance des paiements", "Document qui retrace toutes les transactions entre les résidents et les non-résidents."],
  ["Besoin essentiel", "Ce qui est nécessaire pour vivre dignement : se nourrir, se soigner, s'instruire et se loger."],
  ["Big push", "Ensemble d'investissements coordonnés qui deviennent rentables ensemble, là où des projets isolés échouent."],
  ["Capital humain", "Compétences, formation et santé des travailleurs : ce qui rend leur travail plus efficace."],
  ["Capital naturel", "Ressources et écosystèmes utilisés par la production : sols, forêts, eau, biodiversité."],
  ["Capital produit", "Machines, bâtiments, routes et réseaux : l'équipement dont dispose le pays."],
  ["Cercle vicieux", "Enchaînement où chaque difficulté entretient la suivante : faible revenu, faible épargne, faible investissement, faible productivité."],
  ["Chaîne de montage", "Dispositif de production où le produit avance vers l'ouvrier et impose la cadence de travail."],
  ["Chômage classique", "Chômage causé par un coût du travail supérieur à la productivité du poste, qui décourage l'embauche."],
  ["Chômage conjoncturel", "Chômage lié au cycle de l'activité, qui recule quand la croissance revient."],
  ["Chômage frictionnel", "Chômage de courte durée, lié au temps de recherche entre deux emplois."],
  ["Chômage involontaire", "Situation d'une personne qui accepterait le salaire en vigueur sans trouver d'emploi."],
  ["Chômage keynésien", "Chômage causé par l'insuffisance de la demande adressée aux entreprises."],
  ["Chômage structurel", "Chômage durable lié à la structure de l'économie, qui résiste à la reprise."],
  ["Chômage volontaire", "Situation d'une personne qui refuse le poste ou le salaire proposés alors qu'un emploi est disponible."],
  ["Chômeur découragé", "Personne qui cesse de chercher un emploi après des échecs répétés et sort des statistiques."],
  ["Coentreprise", "Société créée et dirigée ensemble par un groupe étranger et un partenaire national."],
  ["Commerce international", "Ensemble des échanges de biens et de services qui franchissent les frontières."],
  ["Commerce intra-branche", "Échange de produits appartenant à une même branche entre deux pays."],
  ["Commerce intra-firme", "Échanges réalisés entre les filiales d'une même entreprise multinationale."],
  ["Compromis fordiste", "Cercle qui relie gains de productivité, hausse des salaires et consommation de masse."],
  ["Contagion", "Propagation d'une crise financière d'une place vers les autres marchés."],
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
  ["Délocalisation", "Transfert d'une activité de production vers un autre pays."],
  ["Demande de travail", "Quantité de travail que les entreprises souhaitent embaucher à un salaire donné."],
  ["Dépréciation", "Baisse de la valeur de la monnaie nationale en régime de changes flottants."],
  ["Déréglementation", "Levée des règles et des contrôles qui limitaient les mouvements de capitaux."],
  ["Désintermédiation", "Financement direct sur les marchés, sans passer par l'intermédiaire d'une banque."],
  ["Destruction créatrice", "Processus par lequel une activité ancienne disparaît pendant qu'une activité nouvelle naît."],
  ["Dette extérieure", "Ensemble des sommes que les résidents d'un pays doivent à des créanciers étrangers."],
  ["Développement", "Amélioration durable des conditions de vie : santé, éducation, sécurité, liberté et environnement."],
  ["Développement durable", "Développement qui répond aux besoins du présent sans compromettre ceux des générations futures."],
  ["Développement humain", "Approche qui place l'élargissement des capacités des personnes au cœur du développement."],
  ["Différenciation des produits", "Variétés distinctes proposées pour un même bien : modèles, qualités, marques."],
  ["Dotation factorielle", "Quantité de facteurs de production — travail, capital, ressources — dont dispose un pays."],
  ["Droits de douane", "Taxes prélevées sur les produits importés, qui en renchérissent le prix."],
  ["Économies d'échelle", "Baisse du coût unitaire obtenue en produisant en plus grande série."],
  ["Effet d'éviction", "Freinage de l'investissement privé par la hausse des taux qu'entraîne l'emprunt public."],
  ["Effet de compensation", "Emplois rendus par la baisse des prix, l'activité induite et la fabrication des équipements nouveaux."],
  ["Effet de destruction", "Disparition de postes remplacés par des machines ou par un procédé plus efficace."],
  ["Élasticité emploi-croissance", "Rapport entre la variation de l'emploi et la variation de la production."],
  ["Employabilité", "Capacité d'une personne à trouver et à conserver un emploi, compte tenu de ses compétences et du marché."],
  ["Exportation", "Vente à l'étranger d'un bien ou d'un service produit dans le pays."],
  ["Externalité", "Effet de l'activité d'un agent sur un tiers, sans compensation par le marché."],
  ["Externalité négative", "Coût subi par un tiers et non compensé par celui qui le cause : pollution, bruit, dégradation d'une rivière."],
  ["Facteur capital", "Moyens durables de production : machines, outils, bâtiments et moyens financiers."],
  ["Facteur travail", "Activité humaine consacrée à la production, mesurée en personnel occupé et en heures."],
  ["Firme multinationale", "Entreprise qui possède des unités de production ou de vente dans plusieurs pays."],
  ["Flexibilité encadrée", "Assouplissement des conditions d'embauche et de travail, assorti de garanties pour les salariés."],
  ["Fonction de production", "Relation Y = A × F(K, L) qui relie la production aux quantités de capital et de travail et à leur efficacité."],
  ["Fordisme", "Production de masse à la chaîne associée à des salaires élevés et à la consommation de masse."],
  ["Formation continue", "Formation suivie pendant la vie active pour entretenir et élever les compétences."],
  ["Globalisation financière", "Intégration des marchés de capitaux à l'échelle mondiale, actifs en continu."],
  ["Groupe de travail autonome", "Équipe qui organise elle-même la répartition des tâches et résout les problèmes courants."],
  ["IDH", "Indice de développement humain, compris entre 0 et 1, qui combine santé, éducation et niveau de vie."],
  ["Importation", "Achat à l'étranger d'un bien ou d'un service destiné au marché intérieur."],
  ["Inadéquation des compétences", "Écart entre les qualifications disponibles et celles que recherchent les entreprises."],
  ["Industrialisation", "Développement des activités de transformation, qui crée des emplois et retient la valeur ajoutée."],
  ["Insertion professionnelle", "Dispositifs qui accompagnent les jeunes et les publics éloignés de l'emploi vers un poste durable."],
  ["Institutions", "Règles et organisations qui encadrent la vie économique : droit de propriété, contrats, fiscalité."],
  ["Intensité capitalistique", "Rapport entre le capital et le travail : l'équipement dont dispose chaque travailleur."],
  ["Intensité de main-d'œuvre", "Quantité de travail nécessaire pour produire une unité de bien ou de service."],
  ["Investissement de portefeuille", "Achat de titres étrangers sans participation à la direction de l'entreprise."],
  ["Libre-échange", "Politique qui supprime les obstacles aux échanges entre les pays."],
  ["Marché de quotas", "Dispositif qui fixe un plafond d'émissions puis répartit des droits échangeables entre entreprises."],
  ["Marché des changes", "Lieu, physique où électronique, où les monnaies s'échangent entre elles."],
  ["Marché du travail", "Lieu, réel ou virtuel, où l'offre de travail des ménages rencontre la demande des entreprises."],
  ["Mobilité professionnelle", "Capacité d'un travailleur à changer de poste, de métier ou de région."],
  ["Modernisation agricole", "Semences améliorées, irrigation, engrais, stockage et pistes rurales pour élever les rendements."],
  ["Mondialisation", "Intensification des échanges de biens, de services, de capitaux et d'informations à l'échelle mondiale."],
  ["Multiplicateur", "Effet amplifié d'une dépense, qui crée plus d'activité que son montant initial."],
  ["Non-discrimination", "Règle selon laquelle un avantage accordé à un membre l'est à tous les autres."],
  ["Offre de travail", "Quantité de travail que les ménages acceptent de fournir à un salaire donné."],
  ["OMC", "Organisation mondiale du commerce : elle fixe les règles et règle les différends entre membres."],
  ["Paradoxe de l'épargne", "Situation où la volonté générale d'épargner réduit le revenu de tous."],
  ["Parcellisation", "Décomposition du travail en gestes élémentaires, confiés à des postes distincts."],
  ["PGF", "Productivité globale des facteurs : part de la croissance non expliquée par les quantités de travail et de capital."],
  ["PIB", "Produit intérieur brut : valeur de la production réalisée sur le territoire pendant une année."],
  ["PIB par habitant", "PIB divisé par la population : un ordre de grandeur de la production moyenne par personne."],
  ["Politique d'offre", "Action sur les conditions de production, pour rendre l'embauche moins coûteuse et plus simple."],
  ["Politique de relance", "Soutien à la demande par la dépense publique, pour relancer la production et l'emploi."],
  ["Pollueur-payeur", "Principe selon lequel celui qui dégrade l'environnement en supporte le coût."],
  ["Prêteur en dernier ressort", "Rôle de la banque centrale, qui fournit des liquidités au système en période de crise."],
  ["Production au plus juste", "Produire juste à temps et juste ce qu'il faut, en limitant les stocks et les gaspillages."],
  ["Production perdue", "Production qui aurait pu être réalisée si la main-d'œuvre disponible avait travaillé."],
  ["Productivité", "Rapport entre la quantité produite et les moyens utilisés pour la produire."],
  ["Productivité du travail", "Production rapportée au travail utilisé, le plus souvent par heure travaillé."],
  ["Produits manufacturés", "Biens transformés par l'industrie avant d'être échangés."],
  ["Produits primaires", "Produits agricoles, forestiers, halieutiques et miniers échangés peu transformés."],
  ["Progrès technique", "Innovation qui permet d'obtenir davantage avec les mêmes facteurs, où la même chose avec moins."],
  ["Protectionnisme", "Politique qui protège la production nationale de la concurrence étrangère."],
  ["Qualité totale", "Recherche du zéro défaut : chaque opérateur contrôle son propre travail."],
  ["Quota", "Limite quantitative imposée aux importations d'un produit pendant une période."],
  ["Reconversion", "Changement de métier préparé par une formation adaptée, quand l'activité d'origine décline."],
  ["Réglementation", "Ensemble de normes et d'interdictions imposées pour protéger l'environnement."],
  ["Rendements décroissants", "Loi selon laquelle chaque unité de capital supplémentaire apporte un gain plus faible, à travail constant."],
  ["Ressource non renouvelable", "Ressource dont le stock ne se reconstitue pas à l'échelle humaine : minerais, hydrocarbures."],
  ["Rigidité des salaires", "Résistance des rémunérations à la baisse, même en période de chômage élevé."],
  ["RNB", "Revenu national brut : ensemble des revenus perçus par les unités résidentes, où qu'elles produisent."],
  ["Salaire au rendement", "Rémunération indexée sur la quantité produite, destinée à stimuler l'effort."],
  ["Salaire d'efficience", "Salaire supérieur à l'équilibre, choisi pour stimuler l'effort et retenir le personnel."],
  ["Salaire d'équilibre", "Salaire qui égalise les quantités de travail offertes et demandées sur le marché."],
  ["Salaire réel", "Salaire corrigé de la hausse des prix : il mesure le pouvoir d'achat."],
  ["Segmentation", "Séparation du marché du travail en un secteur stable et un secteur précaire qui communiquent peu."],
  ["Service de la dette", "Capital remboursé et intérêts payés chaque année au titre de la dette."],
  ["Sous-activité", "Situation où l'économie produit durablement en dessous de ses capacités."],
  ["Sous-développement", "Situation durable où les besoins essentiels d'une grande partie de la population restent insatisfaits."],
  ["Sous-emploi", "Situation d'un actif qui travaille moins qu'il ne le voudrait, ou sous sa qualification."],
  ["Soutenabilité", "Capacité d'un mode de développement à durer sans épuiser les ressources dont il dépend."],
  ["Soutenabilité faible", "Approche qui tient les formes de capital pour substituables : seul compte le stock total transmis."],
  ["Soutenabilité forte", "Approche qui tient le capital naturel pour irremplaçable et le protège séparément."],
  ["Stabilisateur automatique", "Dispositif qui amortit le cycle sans décision nouvelle, comme l'allocation chômage."],
  ["Surendettement", "Situation où un pays ne peut plus honorer le service de sa dette sans sacrifier l'essentiel."],
  ["Taux d'ouverture", "Rapport entre le commerce extérieur et le PIB : (exportations + importations) ÷ (2 × PIB)."],
  ["Taux de change", "Prix d'une monnaie exprimé dans une autre monnaie."],
  ["Taxation environnementale", "Impôt où taxe qui rend la pollution coûteuse afin d'en décourager l'usage."],
  ["Taylorisme", "Organisation scientifique du travail : tâches parcellisées, chronométrées et étroitement contrôlées."],
  ["Travaux publics", "Commandes de l'État, routes, écoles et réseaux, qui emploient directement de la main-d'œuvre."],
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
