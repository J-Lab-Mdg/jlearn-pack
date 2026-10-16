// Français T6 — UNITÉ 2 — LA VIE EN SOCIÉTÉ (10 leçons + révision + test) — Séances 13 à 24 / 72
const B = require("./builders");
const { C, SZ, run, p, pr, kw, pAns, fp, fiche, sectionRow, stepRow,
        unitBanner, discBadge, img, pageBreak, lessonTitle, sub, iCan, cell } = B;
const { Table, TableRow, WidthType } = require("docx");

const COLOR = "1E8449"; // vert vie en société
const SHADE = "D5F5E3";
const TOTAL = 72;
const META = (title, slo, session, materials) => ({
  theme: "UNITÉ 2 — LA VIE EN SOCIÉTÉ", title, slo,
  values: "tolérance, respect des biens communs", session, materials,
});

const bullet = (runs, o = {}) => pr(
  [run("•  ", { bold: true, color: COLOR, size: SZ.BODY }), ...runs],
  { after: o.after != null ? o.after : 50 });
const mot = (word, expl) => bullet([
  run(word, { bold: true, color: C.SALMON, hl: true }), ...(expl ? [run("  —  " + expl)] : [])]);
function box(title, children, shade = SHADE) {
  return new Table({
    width: { size: 10400, type: WidthType.DXA },
    rows: [
      new TableRow({ children: [cell(
        [p([run(title, { bold: true, color: COLOR, size: SZ.BODY })], { center: true, after: 40 })],
        { shade })] }),
      new TableRow({ children: [cell(children)] }),
    ],
  });
}

// passage de compréhension orale (S13)
function passageEntraide() {
  return box("PASSAGE D'ÉCOUTE — compte-rendu « La journée d'entraide du fokontany »", [
    p("Samedi dernier, le fokontany d'Ambohitsoa a organisé sa grande journée d'entraide. Dès six heures du matin, les jeunes étaient déjà rassemblés sur la place, balais et pelles à la main. Les habitants ont d'abord nettoyé la place du marché et les canaux bouchés par le sable. Ensuite, un groupe a repeint les murs de l'école publique, pendant qu'un autre réparait le vieux banc de la fontaine. Les femmes du quartier ont préparé le repas de midi : un grand plat de riz partagé à l'ombre des manguiers."),
    p("Dans l'après-midi, les enfants ont planté dix jeunes arbres le long du chemin. Le chef du fokontany a remercié tout le monde : « Quand chacun donne un peu de son temps, le quartier devient la maison de tous. » À la fin de la journée, la place était propre, l'école avait retrouvé ses couleurs, et les voisins se parlaient comme des amis de toujours."),
    p("La prochaine journée d'entraide aura lieu dans trois mois. Les habitants du quartier voisin, impressionnés par le résultat, ont déjà demandé des conseils pour organiser la leur.", { after: 40 }),
  ]);
}
// texte de lecture (S15)
function texteReglement() {
  return box("TEXTE DE LECTURE — « Le jardin public d'Antanimena »", [
    p("Le jardin public d'Antanimena est l'un des plus anciens espaces verts de la ville. Créé il y a plus de cinquante ans, il accueille chaque jour des centaines de visiteurs : des familles, des sportifs du matin, des écoliers à l'heure de la sortie. On y trouve des allées ombragées, un bassin, une aire de jeux et des bancs de pierre. Ce jardin appartient à tous : c'est un bien public, entretenu grâce aux impôts de chacun."),
    p("Pour que le jardin reste agréable, la commune affiche à l'entrée le règlement suivant :"),
    p("Article 1 — Respectez les pelouses et les massifs de fleurs."),
    p("Article 2 — Jetez vos déchets dans les poubelles."),
    p("Article 3 — Ne cueillez pas les fleurs ; ne gravez rien sur les troncs ni sur les bancs."),
    p("Article 4 — Il est interdit de faire du feu dans l'enceinte du jardin."),
    p("Article 5 — Tenez les chiens en laisse."),
    p("Article 6 — Il est indispensable de surveiller les jeunes enfants près du bassin."),
    p("Un gardien veille à l'application de ces règles. Mais le meilleur gardien du jardin, rappelle la commune, reste chaque visiteur.", { after: 40 }),
  ]);
}

// ---------- page d'ouverture ----------
function opening() {
  return [
    unitBanner("UNITÉ 2 — LA VIE EN SOCIÉTÉ", COLOR, "unit2"),
    p("", { after: 100 }),
    p([run("Vivre ensemble, cela s'apprend.", { bold: true, color: COLOR, size: 44 })], { center: true, after: 120 }),
    img("u2_societe.png", 440, 768 / 1376),
    p([run("Dans cette unité, je vais apprendre à :", { bold: true })], { after: 60 }),
    p("• comprendre un compte-rendu, à l'oral et à l'écrit, avec la grille où ? quand ? quoi ? comment ? ;"),
    p("• employer les mots de la vie en société : biens publics, patrimoine, entraide, savoir-vivre ;"),
    p("• utiliser les pronoms démonstratifs pour éviter les répétitions ;"),
    p("• mettre en garde ou interdire avec la phrase impérative, l'obligation et la tournure impersonnelle ;"),
    p("• informer au présent et à l'imparfait, en organisant mes idées avec les connecteurs logiques ;"),
    p("• présenter un compte-rendu oral et produire une affiche sur la vie en société ;"),
    p("• lire un compte-rendu à haute voix avec précision.", { after: 120 }),
    pr([run("Types de texte de l'unité : ", { bold: true }),
        run("le texte INFORMATIF", { bold: true, color: COLOR }),
        run(" (donner des informations) et "),
        run("le texte INJONCTIF", { bold: true, color: COLOR }),
        run(" (donner des ordres, des conseils, des interdictions).")], { after: 80 }),
    pr([run("Valeurs à véhiculer : ", { bold: true }),
        run("la tolérance et le respect des biens communs.", { italic: true })], { after: 80 }),
  ];
}

// ---------- S13 — Compréhension orale ----------
function ficheS13() {
  const meta = META("Compréhension orale : compte-rendu « La journée d'entraide du fokontany »",
    "À la fin de la séance, l'apprenant détermine le sens des mots inconnus et repère les informations explicites et implicites d'un compte-rendu entendu.",
    "1 / 12", "texte du passage, grille où/quand/quoi/comment au tableau");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Rappel de l'unité 1 : donne ton avis sur le voyage de ton choix, avec une justification.")],
      [fp("Répondent."),
       fp("R.A. : À mon avis, le voyage nature est le plus beau, parce qu'on y découvre les animaux de l'île.")],
      "Travail collectif", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route", "(pré-écoute)"],
      [fp("Demandez : que fait-on ensemble dans votre quartier ou votre village ? (nettoyage, fête, reconstruction…) Introduisez le mot : une journée d'entraide.")],
      [fp("Répondent, partagent leurs expériences."),
       fp("R.A. : on nettoie les canaux, on répare l'école, on prépare la fête…")],
      "Brainstorming", "Tableau"),
    stepRow(["2. Présentation"],
      [fp("Annoncez : « Compréhension orale : un compte-rendu — La journée d'entraide du fokontany ». Précisez : un compte-rendu raconte ce qui s'est réellement passé, dans l'ordre. Tracez la grille : Où ? Quand ? Quoi ? Comment ?")],
      [fp("Écoutent, copient la grille.")], "Travail collectif", "Tableau"),
    stepRow(["3. Observation", "(1re écoute)"],
      [fp("Lisez le passage lentement (ou faites écouter l'enregistrement). Questions globales : de quel événement parle ce compte-rendu ? qui y participe ?")],
      [fp("Écoutent. Répondent."),
       fp("R.A. : la journée d'entraide du fokontany d'Ambohitsoa ; les jeunes, les habitants, les femmes, les enfants.")],
      "Écoute active", "Texte du passage"),
    stepRow(["4. Analyse", "(2e écoute)"],
      [fp("Relisez. Faites compléter la grille : Où ? (le fokontany d'Ambohitsoa) Quand ? (samedi dernier, dès six heures) Quoi ? (nettoyage, peinture, réparation, plantation) Comment ? (par groupes, ensemble). Puis cherchez l'implicite : « dès six heures, les jeunes étaient déjà rassemblés » — qu'est-ce que cela montre sans le dire ?")],
      [fp("Complètent la grille, déduisent l'implicite."),
       fp("R.A. : cela montre que les jeunes étaient motivés ; « les voisins se parlaient comme des amis » montre que l'entraide rapproche les gens.")],
      "Complétion", "Grille au tableau"),
    stepRow(["5. Synthèse"],
      [fp("Faites reformuler les informations essentielles avec la grille, puis expliquez les mots notés : l'entraide, le fokontany, impressionnés. Distinguez information explicite (dite) et implicite (suggérée).")],
      [fp("Reformulent. Récapitulent."),
       fp("R.A. : explicite = écrit dans le texte ; implicite = ce qu'on comprend entre les lignes.")],
      "Reformulation", "----"),
    stepRow(["6. Entraînement"],
      [fp("En binômes : reformulez le compte-rendu en trois phrases (début, milieu, fin de la journée). Quelques binômes présentent leur version.")],
      [fp("Reformulent oralement."),
       pAns("R.A. : Samedi, le fokontany a organisé une journée d'entraide. Les habitants ont nettoyé la place, repeint l'école et planté des arbres. À la fin, le quartier était propre et les voisins plus unis.", ["journée d'entraide"], { size: SZ.FICHE })],
      "Binômes", "----"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("1. Remplis la grille : où ? quand ? quoi ? comment ?"),
       fp("2. Donne une information implicite du texte."),
       fp("3. Que veut dire « l'entraide » ?")],
      [fp("Répondent individuellement."),
       pAns("R.A. : 1. à Ambohitsoa — samedi dernier — nettoyage, peinture, plantation — ensemble, par groupes. 2. les jeunes étaient motivés ; l'entraide rapproche les voisins. 3. s'aider les uns les autres.", ["l'entraide"], { size: SZ.FICHE })],
      "Travail individuel", "----"),
  ];
  return fiche(13, TOTAL, meta, rows, "s13", "COMPRÉHENSION ORALE", COLOR);
}
function lessonS13() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 13", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    discBadge("COMPRÉHENSION ORALE", COLOR),
    p("", { after: 40 }),
    p([run("ÉCOUTER UN COMPTE-RENDU", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    passageEntraide(),
    p("", { after: 80 }),
    sub("Le compte-rendu :"),
    p("C'est un texte qui rapporte fidèlement ce qui s'est passé : un événement réel, raconté dans l'ordre, sans inventer.", { after: 60 }),
    sub("Ma grille d'écoute :"),
    p("• Où ? — le lieu de l'événement ;"),
    p("• Quand ? — le moment ;"),
    p("• Quoi ? — ce qui s'est passé ;"),
    p("• Comment ? — la manière dont cela s'est passé.", { after: 60 }),
    sub("Explicite ou implicite ?"),
    p("• l'information explicite est écrite dans le texte : « les enfants ont planté dix jeunes arbres » ;"),
    p("• l'information implicite se comprend entre les lignes : « dès six heures, les jeunes étaient déjà là » → ils étaient motivés.", { after: 60 }),
    sub("Mots du texte :"),
    mot("l'entraide", "s'aider les uns les autres"),
    mot("le fokontany", "le quartier ou le village, la plus petite communauté administrative"),
    mot("un compte-rendu", "un texte qui rapporte ce qui s'est réellement passé"),
  ];
}

// ---------- S14 — Lexique ----------
function ficheS14() {
  const meta = META("Lexique : vivre ensemble — biens publics, patrimoine, savoir-vivre",
    "À la fin de la séance, l'apprenant emploie le vocabulaire des règles de vie en société, du respect des biens publics et des activités communautaires.",
    "2 / 12", "images (école, borne-fontaine, monument), étiquettes de mots");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Rappelle la grille du compte-rendu et une information implicite du passage de la séance 13.")],
      [fp("Répondent."),
       fp("R.A. : où, quand, quoi, comment ; les jeunes étaient motivés.")],
      "Travail collectif", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Affichez trois images : une école, une borne-fontaine, un monument ancien. Question : à qui appartiennent ces choses ? Laissez venir la réponse : à tout le monde — et à personne en particulier.")],
      [fp("Observent, répondent."),
       fp("R.A. : à tous les habitants ; ce sont des biens de tous.")],
      "Observation guidée", "Images"),
    stepRow(["2. Présentation"],
      [fp("Annoncez : « Lexique : vivre ensemble ». Objectif : nommer précisément ce qui appartient à tous et les comportements qui protègent la vie commune.")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation"],
      [fp("Classement d'étiquettes au tableau en trois familles : LES BIENS DE TOUS (bien public, patrimoine, borne-fontaine, école, jardin public) ; LES ACTIONS ENSEMBLE (entraide, solidarité, activités communautaires, journée d'entraide) ; LES BONNES MANIÈRES (savoir-vivre, politesse, respect, règles de vie en classe).")],
      [fp("Classent les étiquettes."),
       fp("R.A. : trois familles — les biens, les actions, les manières.")],
      "Jeux", "Étiquettes"),
    stepRow(["4. Analyse"],
      [fp("Précisez les nuances : un bien public sert à tous aujourd'hui (l'école, la route) ; le patrimoine vient du passé et doit passer aux enfants (le monument, la colline sacrée, une chanson ancienne). L'entraide est une aide donnée et reçue ; la solidarité, le sentiment qui la fait naître. Le savoir-vivre : l'ensemble des bonnes manières (saluer, remercier, respecter les aînés).")],
      [fp("Distinguent les nuances, donnent des exemples."),
       fp("R.A. : la route est un bien public ; le Rova est un patrimoine ; aider un voisin à reconstruire son toit est de l'entraide.")],
      "Questions-réponses", "Tableau"),
    stepRow(["5. Synthèse"],
      [fp("Récapitulez les trois familles et leurs mots. Insistez : respecter un bien public, c'est respecter le travail et l'argent de tous.")],
      [fp("Récapitulent. Copient.")], "Travail collectif", "Tableau"),
    stepRow(["6. Entraînement"],
      [fp("Chaque binôme choisit un lieu du quartier (école, marché, fontaine, terrain de sport) et écrit deux phrases : une qui dit pourquoi c'est un bien de tous, une qui donne un exemple de respect ou d'entraide.")],
      [fp("Rédigent, présentent."),
       pAns("R.A. : La borne-fontaine est un bien public : tout le quartier y puise son eau. La respecter, c'est fermer le robinet et garder l'endroit propre.", ["bien public"], { size: SZ.FICHE })],
      "Binômes", "Cahiers"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("1. Donne deux biens publics et un patrimoine de ta région."),
       fp("2. Quelle est la différence entre l'entraide et la solidarité ?"),
       fp("3. Cite deux marques de savoir-vivre.")],
      [fp("Répondent individuellement."),
       pAns("R.A. : 1. l'école, la route ; le Rova (ou un monument local). 2. l'entraide est l'action d'aider ; la solidarité, le sentiment qui y pousse. 3. saluer, remercier, laisser sa place à un aîné.", ["patrimoine"], { size: SZ.FICHE })],
      "Travail individuel", "----"),
  ];
  return fiche(14, TOTAL, meta, rows, "s14", "VOCABULAIRE (LEXIQUE)", COLOR);
}
function lessonS14() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 14", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    discBadge("VOCABULAIRE (LEXIQUE)", COLOR),
    p("", { after: 40 }),
    p([run("LES MOTS DE LA VIE EN SOCIÉTÉ", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    sub("1. Les biens de tous :"),
    mot("un bien public", "il sert à tous : l'école, la route, la borne-fontaine, le jardin public"),
    mot("le patrimoine", "ce qui vient du passé et doit passer aux enfants : un monument, une colline sacrée, un chant ancien"),
    p("", { after: 60 }),
    sub("2. Les actions ensemble :"),
    mot("l'entraide", "une aide donnée et reçue entre voisins"),
    mot("la solidarité", "le sentiment qui pousse à aider"),
    mot("les activités communautaires", "les travaux faits ensemble pour le quartier"),
    p("", { after: 60 }),
    sub("3. Les bonnes manières :"),
    mot("le savoir-vivre", "l'ensemble des bonnes manières"),
    mot("la politesse", "saluer, remercier, demander pardon"),
    mot("les règles de vie en classe", "écouter, lever la main, respecter le matériel"),
    p("", { after: 60 }),
    pr([run("À retenir : ", { bold: true }),
        run("respecter un bien public, c'est respecter le travail et l'argent de tous.")]),
  ];
}

// ---------- S15 — Compréhension écrite ----------
function ficheS15() {
  const meta = META("Compréhension écrite : « Le jardin public d'Antanimena » — textes informatif et injonctif",
    "À la fin de la séance, l'apprenant distingue la partie informative et la partie injonctive d'un texte et dégage leurs caractéristiques.",
    "3 / 12", "texte de lecture (un par binôme si possible)");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Bien public ou patrimoine ? la route — le monument aux morts — la borne-fontaine.")],
      [fp("Répondent."),
       fp("R.A. : bien public, patrimoine, bien public.")],
      "Travail collectif", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route", "(pré-lecture)"],
      [fp("Demandez : qu'est-ce qu'on trouve affiché à l'entrée d'un jardin public ou d'une école ? À quoi cela sert-il ?")],
      [fp("Répondent."),
       fp("R.A. : un règlement ; il dit ce qu'on peut faire et ce qui est interdit.")],
      "Questions-réponses", "----"),
    stepRow(["2. Présentation"],
      [fp("Annoncez : « Compréhension écrite : Le jardin public d'Antanimena ». Consigne : lecture silencieuse, puis nous chercherons ce que le texte INFORME et ce qu'il ORDONNE.")],
      [fp("Écoutent la consigne.")], "Travail collectif", "----"),
    stepRow(["3. Observation", "(lecture silencieuse)"],
      [fp("Lecture silencieuse. Questions globales : de quel lieu parle le texte ? Combien de parties voyez-vous ? Lesquelles ?")],
      [fp("Lisent silencieusement. Répondent."),
       fp("R.A. : du jardin public d'Antanimena ; deux parties — la présentation du jardin, puis son règlement.")],
      "Lecture silencieuse", "Texte de lecture"),
    stepRow(["4. Analyse", "(lecture analytique)"],
      [fp("Partie 1 : relevez trois informations sur le jardin (âge, visiteurs, équipements). Quels temps, quelles phrases ? — des phrases déclaratives au présent. Partie 2 : observez les articles du règlement. Relevez les verbes : Respectez, Jetez, Ne cueillez pas, Il est interdit de… Quelles formes ? — l'impératif et des tournures impersonnelles. À quoi sert chaque partie ?")],
      [fp("Relèvent, comparent les deux parties."),
       fp("R.A. : la partie 1 informe (texte informatif) ; la partie 2 donne des ordres et des interdictions (texte injonctif).")],
      "Lecture analytique", "Texte de lecture"),
    stepRow(["5. Synthèse"],
      [fp("Dégagez les caractéristiques : texte INFORMATIF — but : faire savoir ; phrases déclaratives, présent, chiffres et faits. Texte INJONCTIF — but : faire agir ; impératif, interdictions, articles numérotés. Un même document peut mélanger les deux.")],
      [fp("Récapitulent. Copient."),
       fp("R.A. : informer = faire savoir ; enjoindre = faire agir.")],
      "Travail collectif", "Tableau"),
    stepRow(["6. Entraînement"],
      [fp("En binômes : classez les six articles du règlement en deux groupes — ce qu'il faut faire / ce qu'il ne faut pas faire. Puis répondez : pourquoi le visiteur est-il « le meilleur gardien du jardin » ?")],
      [fp("Classent, interprètent."),
       pAns("R.A. : à faire : respecter les pelouses, jeter les déchets à la poubelle, tenir les chiens, surveiller les enfants ; à ne pas faire : cueillir, graver, faire du feu. Le visiteur est le meilleur gardien parce que, si chacun respecte les règles, le gardien n'a rien à faire.", ["le meilleur gardien"], { size: SZ.FICHE })],
      "Binômes", "Texte de lecture"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("1. Quel est le but d'un texte informatif ? d'un texte injonctif ?"),
       fp("2. Relève dans le texte un verbe à l'impératif et une tournure impersonnelle."),
       fp("3. Pourquoi le jardin est-il un bien public ?")],
      [fp("Répondent individuellement."),
       pAns("R.A. : 1. faire savoir / faire agir. 2. Respectez (Jetez, Tenez…) ; Il est interdit de faire du feu. 3. il appartient à tous et il est entretenu grâce aux impôts de chacun.", ["Il est interdit"], { size: SZ.FICHE })],
      "Travail individuel", "----"),
  ];
  return fiche(15, TOTAL, meta, rows, "s15", "COMPRÉHENSION ÉCRITE", COLOR);
}
function lessonS15() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 15", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    discBadge("COMPRÉHENSION ÉCRITE", COLOR),
    p("", { after: 40 }),
    p([run("LE TEXTE INFORMATIF ET LE TEXTE INJONCTIF", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    texteReglement(),
    p("", { after: 80 }),
    sub("Le texte informatif :"),
    p("• but : faire savoir ;"),
    p("• moyens : des phrases déclaratives, le présent, des faits et des chiffres ;"),
    p("• exemple : « Le jardin accueille chaque jour des centaines de visiteurs. »", { after: 60 }),
    sub("Le texte injonctif :"),
    p("• but : faire agir — conseiller, ordonner, interdire ;"),
    p("• moyens : l'impératif (Respectez, Jetez…), les tournures impersonnelles (Il est interdit de…), les articles numérotés ;"),
    p("• exemple : « Article 4 — Il est interdit de faire du feu. »", { after: 60 }),
    pr([run("À retenir : ", { bold: true }),
        run("un même document peut mélanger les deux : le règlement du jardin informe d'abord, puis ordonne.")]),
  ];
}

// ---------- S16 — Les pronoms démonstratifs ----------
function ficheS16() {
  const meta = META("Fonctionnement de la langue : les pronoms démonstratifs",
    "À la fin de la séance, l'apprenant identifie les pronoms démonstratifs simples et neutres et les emploie pour éviter les répétitions.",
    "4 / 12", "phrases au tableau, ardoises");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Quel est le but du texte informatif ? du texte injonctif ? Donne un exemple de tournure impersonnelle.")],
      [fp("Répondent."),
       fp("R.A. : faire savoir / faire agir ; il est interdit de…")],
      "Travail collectif", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Écrivez : « Les règles du jardin sont utiles. Les règles du jardin protègent tout le monde. » Que remarque-t-on ? Comment éviter la répétition ?")],
      [fp("Observent, proposent."),
       fp("R.A. : « les règles du jardin » est répété ; on peut dire « celles-ci protègent tout le monde ».")],
      "Questions-réponses", "Tableau"),
    stepRow(["2. Présentation"],
      [fp("Annoncez : « Les pronoms démonstratifs ». Objectif : remplacer un nom déjà cité, pour alléger les phrases.")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation"],
      [fp("Corpus au tableau : « Ce banc est celui de la fontaine. » / « Ces règles sont celles du jardin. » / « Ceux qui respectent le jardin en sont les gardiens. » / « Cela fait plaisir à voir. » / « Ça, c'est du beau travail ! » Faites repérer les mots qui remplacent un nom.")],
      [fp("Repèrent celui, celles, ceux, cela, ça."),
       fp("R.A. : celui remplace « le banc » ; celles remplace « les règles »…")],
      "Lecture analytique", "Tableau"),
    stepRow(["4. Analyse"],
      [fp("Classez en deux familles : les SIMPLES, qui s'accordent — celui (masc. sing.), celle (fém. sing.), ceux (masc. plur.), celles (fém. plur.) ; les NEUTRES, qui désignent une idée ou une situation — ce, ceci, cela, ça. Observez les emplois : celui-ci / celui de la fontaine / ceux qui… Règle d'or : le pronom prend le genre et le nombre du nom remplacé.")],
      [fp("Classent, formulent la règle."),
       fp("R.A. : simples = celui, celle, ceux, celles ; neutres = ce, ceci, cela, ça.")],
      "Questions-réponses", "Tableau"),
    stepRow(["5. Synthèse"],
      [fp("Récapitulez les deux familles et la règle d'accord. Dictée d'ardoise : remplace le nom répété — « Mon quartier et celui de Naly » ; « Ces fleurs sont celles du massif ».")],
      [fp("Écrivent sur l'ardoise. Corrigent.")],
      "Procédé La Martinière", "Ardoises"),
    stepRow(["6. Entraînement"],
      [fp("En binômes : améliorez ce petit texte en supprimant les répétitions avec des pronoms démonstratifs : « Les bancs du jardin sont vieux. Les bancs du jardin seront repeints. Le travail des jeunes est utile. Le travail des jeunes rend le quartier plus beau. »")],
      [fp("Réécrivent le texte."),
       pAns("R.A. : Les bancs du jardin sont vieux ; ceux-ci seront repeints. Le travail des jeunes est utile : celui-ci rend le quartier plus beau.", ["ceux-ci"], { size: SZ.FICHE })],
      "Binômes", "Cahiers"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("1. Complète : « Mon école et … de mon frère » ; « Ces arbres sont … qu'on a plantés samedi. »"),
       fp("2. Simple ou neutre ? « Cela me fait plaisir. » / « Celles du marché sont fraîches. »"),
       fp("3. Écris une phrase avec « ceux qui ».")],
      [fp("Répondent individuellement."),
       pAns("R.A. : 1. celle ; ceux. 2. neutre ; simple. 3. exemple : Ceux qui jettent leurs déchets à la poubelle respectent le quartier.", ["celle"], { size: SZ.FICHE })],
      "Travail individuel", "----"),
  ];
  return fiche(16, TOTAL, meta, rows, "s16", "GRAMMAIRE (FONCTIONNEMENT DE LA LANGUE)", COLOR);
}
function lessonS16() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 16", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    discBadge("GRAMMAIRE (FONCTIONNEMENT DE LA LANGUE)", COLOR),
    p("", { after: 40 }),
    p([run("LES PRONOMS DÉMONSTRATIFS", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    sub("À quoi servent-ils ?"),
    p("À remplacer un nom déjà cité, pour éviter la répétition :"),
    p("« Les règles du jardin sont utiles ; celles-ci protègent tout le monde. »", { after: 60 }),
    sub("1. Les pronoms simples — ils s'accordent avec le nom remplacé :"),
    pr([run("• masculin singulier : ", { bold: true }), run("celui", { bold: true, color: C.SALMON }), run("  —  Ce banc est celui de la fontaine.")]),
    pr([run("• féminin singulier : ", { bold: true }), run("celle", { bold: true, color: C.SALMON }), run("  —  Mon école et celle de mon frère.")]),
    pr([run("• masculin pluriel : ", { bold: true }), run("ceux", { bold: true, color: C.SALMON }), run("  —  Ceux qui aident reçoivent des remerciements.")]),
    pr([run("• féminin pluriel : ", { bold: true }), run("celles", { bold: true, color: C.SALMON }), run("  —  Ces fleurs sont celles du massif.")], { after: 60 }),
    sub("2. Les pronoms neutres — ils désignent une idée, une situation :"),
    pr([run("ce, ceci, cela, ça", { bold: true, color: C.SALMON }), run("  —  Cela fait plaisir à voir. Ça, c'est du beau travail.")], { after: 60 }),
    sub("Leurs emplois :"),
    p("• suivis de -ci ou -là : celui-ci, celle-là ;"),
    p("• suivis de « de » : celui de la fontaine ;"),
    p("• suivis de « qui / que » : ceux qui respectent le jardin.", { after: 60 }),
    pr([run("Attention : ", { bold: true, color: C.RED }),
        run("le pronom simple prend toujours le genre et le nombre du nom qu'il remplace.")]),
  ];
}

// ---------- S17 — Impératif, obligation, tournure impersonnelle ----------
function ficheS17() {
  const meta = META("Fonctionnement de la langue : la phrase impérative, l'obligation et la nécessité",
    "À la fin de la séance, l'apprenant construit des phrases impératives et exprime l'obligation et la nécessité, y compris avec la tournure impersonnelle.",
    "5 / 12", "règlement de la séance 15, panneaux d'interdiction (dessins)");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Remplace le nom répété : « Les allées du jardin sont propres ; les allées du jardin ont été balayées. »")],
      [fp("Répondent."),
       fp("R.A. : … ; celles-ci ont été balayées.")],
      "Travail collectif", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Montrez deux panneaux dessinés : une poubelle (geste à faire) et une fleur barrée (geste interdit). Comment le dire avec des mots ? Notez les propositions.")],
      [fp("Proposent des phrases."),
       fp("R.A. : Jetez vos déchets ici ! Ne cueillez pas les fleurs !")],
      "Observation guidée", "Panneaux"),
    stepRow(["2. Présentation"],
      [fp("Annoncez : « La phrase impérative, l'obligation et la nécessité ». Objectif : mettre en garde, ordonner ou interdire — les outils du texte injonctif.")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation"],
      [fp("Reprenez le règlement de la séance 15. Relevez : Respectez, Jetez, Ne cueillez pas, Tenez ; puis : Il est interdit de faire du feu ; Il est indispensable de surveiller les enfants. Observez : où est le sujet des premières phrases ?")],
      [fp("Relèvent, observent."),
       fp("R.A. : il n'y a pas de sujet exprimé ; le verbe est en tête.")],
      "Lecture analytique", "Texte de la S15"),
    stepRow(["4. Analyse"],
      [fp("Dégagez : 1. la PHRASE IMPÉRATIVE — pas de sujet exprimé ; trois personnes (tu, nous, vous) : Respecte / Respectons / Respectez ; forme négative : Ne cueillez pas. 2. l'OBLIGATION — il faut + infinitif ; devoir + infinitif ; être obligé de ; avoir l'obligation de. 3. la NÉCESSITÉ — il est essentiel de, il est indispensable de. 4. la TOURNURE IMPERSONNELLE — le « il » ne désigne personne : il faut, il est interdit de, il est essentiel de ; elle sert à exprimer une généralité.")],
      [fp("Formulent les règles, transforment des exemples."),
       fp("R.A. : « Jetez vos déchets » → « Il faut jeter ses déchets » → « Vous devez jeter vos déchets ».")],
      "Questions-réponses", "Tableau"),
    stepRow(["5. Synthèse"],
      [fp("Récapitulez les quatre outils. Jeu rapide : je dis une règle à l'impératif, vous la transformez avec il faut, puis avec devoir.")],
      [fp("Transforment oralement."),
       fp("R.A. : Tenez les chiens en laisse → Il faut tenir les chiens en laisse → On doit tenir les chiens en laisse.")],
      "Jeux", "----"),
    stepRow(["6. Entraînement"],
      [fp("Par binômes : rédigez le mini-règlement (quatre articles) d'un lieu de l'école — la bibliothèque, la cour, la cantine — avec au moins un impératif, une négation, une tournure impersonnelle et une expression de nécessité.")],
      [fp("Rédigent leur règlement."),
       pAns("R.A. : Article 1 — Parlez à voix basse. Article 2 — Ne mangez pas dans la salle. Article 3 — Il est interdit de déchirer les livres. Article 4 — Il est indispensable de rendre les livres à la date prévue.", ["Il est interdit"], { size: SZ.FICHE })],
      "Binômes", "Cahiers"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("1. Mets à l'impératif (vous) : respecter les pelouses ; ne pas courir."),
       fp("2. Transforme avec une tournure impersonnelle : « Surveillez les enfants près du bassin. »"),
       fp("3. Exprime la même règle avec devoir.")],
      [fp("Répondent individuellement."),
       pAns("R.A. : 1. Respectez les pelouses ; ne courez pas. 2. Il est indispensable de surveiller les enfants près du bassin. 3. Vous devez surveiller les enfants près du bassin.", ["Il est indispensable"], { size: SZ.FICHE })],
      "Travail individuel", "----"),
  ];
  return fiche(17, TOTAL, meta, rows, "s17", "GRAMMAIRE (FONCTIONNEMENT DE LA LANGUE)", COLOR);
}
function lessonS17() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 17", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    discBadge("GRAMMAIRE (FONCTIONNEMENT DE LA LANGUE)", COLOR),
    p("", { after: 40 }),
    p([run("ORDONNER, OBLIGER, INTERDIRE", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    sub("1. La phrase impérative — pas de sujet exprimé :"),
    p("• trois personnes : Respecte (tu) — Respectons (nous) — Respectez (vous) ;"),
    p("• forme négative : Ne cueillez pas les fleurs.", { after: 60 }),
    sub("2. L'obligation :"),
    pr([run("il faut + infinitif ; devoir + infinitif ; être obligé de ; avoir l'obligation de", { bold: true, color: C.SALMON })]),
    p("« Il faut jeter ses déchets à la poubelle. » — « Vous devez tenir les chiens en laisse. »", { after: 60 }),
    sub("3. La nécessité :"),
    pr([run("il est essentiel de ; il est indispensable de", { bold: true, color: C.SALMON })]),
    p("« Il est indispensable de surveiller les jeunes enfants près du bassin. »", { after: 60 }),
    sub("4. La tournure impersonnelle :"),
    p("Le « il » ne désigne personne ; elle exprime une règle générale :"),
    p("« Il est interdit de faire du feu. » — « Il faut respecter les biens publics. »", { after: 60 }),
    sub("La même règle, quatre habits :"),
    p("Jetez vos déchets. → Il faut jeter ses déchets. → On doit jeter ses déchets. → Il est essentiel de jeter ses déchets.", { after: 60 }),
    pr([run("Attention : ", { bold: true, color: C.RED }),
        run("à l'impératif, les verbes en -er perdent le s de « tu » : tu respectes → respecte.")]),
  ];
}

// ---------- S18 — Présent, imparfait, connecteurs logiques ----------
function ficheS18() {
  const meta = META("Fonctionnement de la langue : le présent, l'imparfait et les connecteurs logiques",
    "À la fin de la séance, l'apprenant emploie le présent et l'imparfait des verbes courants pour informer, et organise ses idées avec les connecteurs logiques.",
    "6 / 12", "compte-rendu de la séance 13, étiquettes de connecteurs");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Exprime la règle de trois façons : « ne pas graver sur les bancs ».")],
      [fp("Répondent."),
       fp("R.A. : Ne gravez rien sur les bancs ; il est interdit de graver sur les bancs ; on ne doit pas graver sur les bancs.")],
      "Travail collectif", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Deux phrases au tableau : « Aujourd'hui, la place est propre. » / « Avant, la place était sale. » Quelle différence de temps ? de sens ?")],
      [fp("Comparent."),
       fp("R.A. : présent pour maintenant ; imparfait pour la situation d'avant.")],
      "Questions-réponses", "Tableau"),
    stepRow(["2. Présentation"],
      [fp("Annoncez : « Le présent, l'imparfait et les connecteurs logiques ». Objectif : donner des informations au bon temps et dans le bon ordre.")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation"],
      [fp("Retour au compte-rendu de la S13 : relevez des verbes au présent (le jardin accueille, le quartier devient…) et à l'imparfait (les jeunes étaient rassemblés, la place était propre). Puis relevez les mots qui ordonnent le récit : d'abord, ensuite, pendant que, à la fin.")],
      [fp("Relèvent, classent."),
       fp("R.A. : présent = ce qui est vrai maintenant ou en général ; imparfait = la situation passée ; les connecteurs rangent les étapes.")],
      "Lecture analytique", "Texte de la S13"),
    stepRow(["4. Analyse"],
      [fp("Conjuguez au tableau, présent et imparfait, les verbes les plus courants : être (je suis / j'étais), avoir (j'ai / j'avais), aller, faire, devoir, respecter, finir. Rappel : à l'imparfait, mêmes terminaisons pour tous les verbes : -ais, -ais, -ait, -ions, -iez, -aient. Puis les deux familles de connecteurs logiques : premièrement, deuxièmement, troisièmement — et : d'abord, ensuite, puis, après, enfin.")],
      [fp("Conjuguent, mémorisent les deux séries."),
       fp("R.A. : nous étions, vous faisiez, ils devaient ; d'abord… ensuite… puis… enfin.")],
      "Complétion", "Tableau"),
    stepRow(["5. Synthèse"],
      [fp("Récapitulez : présent pour informer sur maintenant et sur les généralités ; imparfait pour décrire la situation d'avant ; connecteurs pour hiérarchiser. Dictée d'ardoise : « Avant, les canaux étaient bouchés ; aujourd'hui, l'eau coule. »")],
      [fp("Écrivent. Corrigent.")],
      "Procédé La Martinière", "Ardoises"),
    stepRow(["6. Entraînement"],
      [fp("En binômes : racontez en quatre phrases le changement d'un lieu que vous connaissez (avant / maintenant), avec deux imparfaits, deux présents et trois connecteurs.")],
      [fp("Rédigent, lisent."),
       pAns("R.A. : D'abord, notre cour était poussiéreuse et les arbres manquaient. Ensuite, la classe a planté des flamboyants. Aujourd'hui, la cour est ombragée ; enfin, chacun la garde propre.", ["D'abord"], { size: SZ.FICHE })],
      "Binômes", "Cahiers"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("1. Conjugue à l'imparfait : être (nous) ; faire (vous) ; avoir (ils)."),
       fp("2. Présent ou imparfait ? « Avant, on … (jeter) les déchets partout ; maintenant, chacun … (utiliser) les poubelles. »"),
       fp("3. Range : enfin / d'abord / ensuite.")],
      [fp("Répondent individuellement."),
       pAns("R.A. : 1. nous étions, vous faisiez, ils avaient. 2. jetait ; utilise. 3. d'abord, ensuite, enfin.", ["nous étions"], { size: SZ.FICHE })],
      "Travail individuel", "----"),
  ];
  return fiche(18, TOTAL, meta, rows, "s18", "GRAMMAIRE (FONCTIONNEMENT DE LA LANGUE)", COLOR);
}
function lessonS18() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 18", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    discBadge("GRAMMAIRE (FONCTIONNEMENT DE LA LANGUE)", COLOR),
    p("", { after: 40 }),
    p([run("INFORMER AU BON TEMPS, DANS LE BON ORDRE", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    sub("1. Le présent — pour maintenant et pour les généralités :"),
    p("« Le jardin accueille des centaines de visiteurs. » — « L'entraide rapproche les voisins. »"),
    p("être : je suis, tu es, il est, nous sommes, vous êtes, ils sont — avoir : j'ai, tu as, il a, nous avons, vous avez, ils ont.", { after: 60 }),
    sub("2. L'imparfait — pour la situation d'avant :"),
    p("« Avant, la place était sale ; les canaux étaient bouchés. »"),
    p("Terminaisons, les mêmes pour tous les verbes : -ais, -ais, -ait, -ions, -iez, -aient."),
    p("être : j'étais, nous étions — faire : vous faisiez — devoir : ils devaient.", { after: 60 }),
    sub("3. Les connecteurs logiques — pour ranger les idées :"),
    pr([run("• la série des nombres : ", { bold: true }), run("premièrement, deuxièmement, troisièmement ;", { bold: true, color: C.SALMON })]),
    pr([run("• la série du récit : ", { bold: true }), run("d'abord, ensuite, puis, après, enfin.", { bold: true, color: C.SALMON })], { after: 60 }),
    sub("Exemple complet :"),
    p("« D'abord, les jeunes ont nettoyé la place. Ensuite, un groupe a repeint l'école. Enfin, les enfants ont planté dix arbres. »", { after: 60 }),
    pr([run("À retenir : ", { bold: true }),
        run("avant / maintenant : l'imparfait peint la situation d'hier, le présent celle d'aujourd'hui.")]),
  ];
}

// ---------- S19 — Production orale ----------
function ficheS19() {
  const meta = META("Production orale : le compte-rendu oral",
    "À la fin de la séance, l'apprenant élabore et présente un compte-rendu oral sur un fait relatif à la vie en société.",
    "7 / 12", "grille où/quand/quoi/comment, sujets au tableau");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Les deux séries de connecteurs logiques ?")],
      [fp("Répondent."),
       fp("R.A. : premièrement, deuxièmement… ; d'abord, ensuite, puis, après, enfin.")],
      "Travail collectif", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Rappelez le compte-rendu de la séance 13. Aujourd'hui, chacun devient le reporter de son quartier : vous allez rapporter un fait réel que vous avez vu ou vécu.")],
      [fp("Écoutent, cherchent leur fait.")],
      "Travail collectif", "----"),
    stepRow(["2. Présentation"],
      [fp("Annoncez : « Production orale : le compte-rendu oral ». Sujets possibles : une journée d'entraide, la réparation d'un puits, une fête du village, le nettoyage de l'école, un marché particulier.")],
      [fp("Choisissent leur sujet.")], "Travail collectif", "Tableau"),
    stepRow(["3. Observation"],
      [fp("Construisez ensemble le plan du compte-rendu oral : 1. je situe (où ? quand ?) ; 2. je rapporte dans l'ordre (quoi ? comment ?), avec d'abord, ensuite, enfin ; 3. je conclus (le résultat, ce que cela a changé). Donnez un court modèle oral.")],
      [fp("Écoutent le modèle, notent le plan."),
       fp("R.A. : situer → rapporter dans l'ordre → conclure.")],
      "Exposé", "Tableau"),
    stepRow(["4. Analyse", "(préparation)"],
      [fp("Chacun prépare ses notes : la grille où/quand/quoi/comment remplie, trois connecteurs choisis, une phrase de conclusion. Pas de texte entièrement rédigé : des notes pour parler, non pour lire.")],
      [fp("Préparent leurs notes.")],
      "Travail individuel", "Cahiers"),
    stepRow(["5. Synthèse", "(présentations)"],
      [fp("Passages devant la classe (une à deux minutes). La classe écoute avec la grille : toutes les cases sont-elles remplies ? Questions-réponses après chaque passage.")],
      [fp("Présentent, écoutent, questionnent."),
       fp("R.A. : Où cela s'est-il passé ? Combien de personnes étaient là ?")],
      "Questions-réponses", "Grille"),
    stepRow(["6. Entraînement"],
      [fp("En binômes : chacun refait son compte-rendu à son camarade en une minute, en corrigeant ce qui a manqué au premier passage.")],
      [fp("Refont leur compte-rendu amélioré."),
       pAns("R.A. : Samedi, au marché d'Ambositra, j'ai assisté à… D'abord…, ensuite…, enfin… Depuis, …", ["D'abord"], { size: SZ.FICHE })],
      "Binômes", "----"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("Grille d'évaluation annoncée : les quatre questions couvertes (2 pts), l'ordre et les connecteurs (2 pts), la voix et le regard (1 pt).")],
      [fp("Prennent connaissance des critères.")],
      "Travail individuel", "----"),
  ];
  return fiche(19, TOTAL, meta, rows, "s19", "PRODUCTION ORALE", COLOR);
}
function lessonS19() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 19", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    discBadge("PRODUCTION ORALE", COLOR),
    p("", { after: 40 }),
    p([run("LE COMPTE-RENDU ORAL", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    sub("Le plan en trois temps :"),
    p("1. Je situe : où ? quand ? — « Samedi dernier, au fokontany d'Ambohitsoa… »"),
    p("2. Je rapporte dans l'ordre : quoi ? comment ? — avec d'abord, ensuite, puis, enfin."),
    p("3. Je conclus : le résultat, ce que cela a changé.", { after: 60 }),
    sub("Mes règles de reporter :"),
    p("• je rapporte un fait réel, sans inventer ;"),
    p("• je parle avec mes notes, je ne lis pas un texte ;"),
    p("• je regarde mon public et je parle assez fort ;"),
    p("• je réponds ensuite aux questions de la classe.", { after: 60 }),
    sub("Les outils de l'unité à réutiliser :"),
    p("• la grille où / quand / quoi / comment ;"),
    p("• les connecteurs logiques ;"),
    p("• l'imparfait pour la situation d'avant, le présent pour le résultat d'aujourd'hui.", { after: 60 }),
    pr([run("À retenir : ", { bold: true }),
        run("un bon compte-rendu répond aux quatre questions avant même qu'on les pose.")]),
  ];
}

// ---------- S20 — Production écrite (1) ----------
function ficheS20() {
  const meta = META("Production écrite (1) : l'affiche sur la vie en société — les idées et le plan",
    "À la fin de la séance, l'apprenant choisit son sujet d'affiche, rassemble ses idées et construit des phrases pour obtenir un petit texte cohérent.",
    "8 / 12", "exemples d'affiches (dessins), liste des sujets au tableau");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Les trois temps du compte-rendu oral ?")],
      [fp("Répondent."),
       fp("R.A. : situer, rapporter dans l'ordre, conclure.")],
      "Travail collectif", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route", "(pré-écriture)"],
      [fp("Annoncez le projet de l'unité : une affiche pour l'école sur la vie en société. Sujets au choix (ceux du programme) : le respect des biens publics ; le respect des patrimoines ; les activités communautaires ; les bonnes manières ; les règles de vie en classe.")],
      [fp("Choisissent leur sujet.")],
      "Travail collectif", "Tableau"),
    stepRow(["2. Présentation"],
      [fp("Annoncez : « Production écrite : l'affiche — les idées et le plan ». Une affiche réussie = un titre qui accroche + un court texte qui informe + des règles qui font agir.")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation"],
      [fp("Observez ensemble une affiche modèle dessinée au tableau : « NOTRE ÉCOLE, NOTRE MAISON » — deux phrases informatives (présent + un fait), puis trois règles injonctives (impératif, il faut, il est interdit de), et une devise finale. Retrouvez les outils de l'unité dans ce modèle.")],
      [fp("Analysent le modèle."),
       fp("R.A. : phrases déclaratives au présent pour informer ; impératif et tournures impersonnelles pour faire agir.")],
      "Observation guidée", "Tableau"),
    stepRow(["4. Analyse", "(recherche d'idées)"],
      [fp("Chacun remplit sa fiche d'idées : mon sujet ; deux informations vraies (pourquoi c'est important) ; trois règles (une à l'impératif, une avec il faut/devoir, une avec il est interdit/indispensable de) ; une devise courte.")],
      [fp("Remplissent leur fiche d'idées.")],
      "Travail individuel", "Fiche d'idées"),
    stepRow(["5. Synthèse"],
      [fp("Faites construire le plan de l'affiche : TITRE (court, accrocheur) → PARTIE INFORMATIVE (deux phrases) → PARTIE INJONCTIVE (trois règles numérotées) → DEVISE. Vérification rapide binôme par binôme.")],
      [fp("Bâtissent leur plan.")],
      "Travail individuel", "Cahiers"),
    stepRow(["6. Entraînement"],
      [fp("Échange de plans : chaque camarade vérifie — le titre accroche-t-il ? les deux parties sont-elles distinctes ? les trois formes injonctives sont-elles différentes ?")],
      [fp("Vérifient le plan du camarade."),
       pAns("R.A. : Tes trois règles utilisent trois formes différentes ; mais ton titre est long — propose : « La fontaine, c'est nous ! »", ["trois formes"], { size: SZ.FICHE })],
      "Binômes", "Cahiers"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("Recopie ton plan au propre : titre, deux informations, trois règles, devise.")],
      [fp("Recopient leur plan."),
       pAns("R.A. : Titre : L'école est à nous tous. Infos : l'école accueille 400 élèves ; ses bancs sont payés par les parents. Règles : Respecte les bancs — Il faut garder la cour propre — Il est interdit d'écrire sur les murs. Devise : Une école propre, une fierté pour tous.", ["devise"], { size: SZ.FICHE })],
      "Travail individuel", "----"),
  ];
  return fiche(20, TOTAL, meta, rows, "s20", "PRODUCTION ÉCRITE", COLOR);
}
function lessonS20() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 20", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    discBadge("PRODUCTION ÉCRITE", COLOR),
    p("", { after: 40 }),
    p([run("L'AFFICHE : LES IDÉES ET LE PLAN", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    sub("Le plan de l'affiche :"),
    p("1. le TITRE — court et accrocheur : « Notre école, notre maison » ;"),
    p("2. la partie INFORMATIVE — deux phrases vraies, au présent : « L'école accueille quatre cents élèves. » ;"),
    p("3. la partie INJONCTIVE — trois règles numérotées, avec des formes variées : un impératif, une obligation, une interdiction ;"),
    p("4. la DEVISE — une phrase courte qui reste en tête.", { after: 60 }),
    sub("Ma fiche d'idées :"),
    p("• mon sujet (biens publics, patrimoine, entraide, bonnes manières, règles de classe) ;"),
    p("• deux informations qui expliquent pourquoi c'est important ;"),
    p("• trois règles — trois formes différentes ;"),
    p("• une devise.", { after: 60 }),
    sub("Exemple :"),
    p("LA FONTAINE, C'EST NOUS ! — La borne-fontaine sert à cent familles. Elle est entretenue par le fokontany. — 1. Ferme le robinet après usage. 2. Il faut garder l'endroit propre. 3. Il est interdit d'y laver les véhicules. — L'eau de tous, la responsabilité de chacun.", { after: 60 }),
    pr([run("À retenir : ", { bold: true }),
        run("une affiche informe d'abord, fait agir ensuite — comme le règlement du jardin.")]),
  ];
}

// ---------- S21 — Production écrite (2) ----------
function ficheS21() {
  const meta = META("Production écrite (2) : rédiger l'affiche, relire, améliorer",
    "À la fin de la séance, l'apprenant rédige le texte de son affiche en phrases correctes et cohérentes, le relit et l'améliore.",
    "9 / 12", "plans de la séance 20, grille de relecture au tableau");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Les quatre étages du plan de l'affiche ?")],
      [fp("Répondent."),
       fp("R.A. : titre, partie informative, partie injonctive, devise.")],
      "Travail collectif", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Chacun relit son plan. Rappelez les outils disponibles : les pronoms démonstratifs (pour éviter les répétitions), l'impératif, les tournures impersonnelles, les connecteurs.")],
      [fp("Relisent leur plan.")],
      "Travail individuel", "Cahiers"),
    stepRow(["2. Présentation"],
      [fp("Annoncez : « Rédiger, relire, améliorer ». Consigne : rédiger le texte complet de l'affiche — huit à dix lignes en tout, les deux parties bien distinctes, trois formes injonctives différentes.")],
      [fp("Écoutent la consigne.")], "Travail collectif", "Tableau"),
    stepRow(["3. Observation", "(premier jet)"],
      [fp("Rédaction du premier jet. Circulez : aidez à construire des phrases complètes et cohérentes ; vérifiez que la partie informative reste au présent.")],
      [fp("Rédigent leur premier jet.")],
      "Rédaction individuelle", "Cahiers"),
    stepRow(["4. Analyse", "(relecture guidée)"],
      [fp("Grille de relecture au tableau : 1. mes deux parties sont-elles distinctes ? 2. mes trois règles ont-elles trois formes différentes ? 3. ai-je évité les répétitions (pronoms démonstratifs) ? 4. majuscules et ponctuation ? 5. ma devise est-elle courte ? Relecture individuelle puis croisée.")],
      [fp("Relisent avec la grille, corrigent."),
       fp("R.A. : j'ai répété « l'école » trois fois ; je remplace par « celle-ci ».")],
      "Relecture guidée", "Grille au tableau"),
    stepRow(["5. Synthèse"],
      [fp("Mise au propre de l'affiche sur une demi-page : titre en grand, règles numérotées, devise encadrée. Ceux qui le souhaitent ajoutent un dessin.")],
      [fp("Mettent au propre.")],
      "Travail individuel", "Feuilles"),
    stepRow(["6. Entraînement"],
      [fp("Exposition des affiches au mur de la classe. Chaque apprenant lit celle d'un camarade et relève une réussite : un bon titre, une règle bien formulée, une devise frappante.")],
      [fp("Lisent, commentent."),
       pAns("R.A. : La devise « L'eau de tous, la responsabilité de chacun » se retient facilement.", ["devise"], { size: SZ.FICHE })],
      "Jeu de rôle — exposition", "Affiches"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("Remise des affiches. Barème : deux parties distinctes (2 pts), trois formes injonctives différentes (2 pts), correction de la langue (1 pt).")],
      [fp("Remettent leur affiche.")],
      "Travail individuel", "----"),
  ];
  return fiche(21, TOTAL, meta, rows, "s21", "PRODUCTION ÉCRITE", COLOR);
}
function lessonS21() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 21", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    discBadge("PRODUCTION ÉCRITE", COLOR),
    p("", { after: 40 }),
    p([run("RÉDIGER MON AFFICHE", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    sub("Pour rédiger :"),
    p("• je suis mon plan : titre → informations → règles → devise ;"),
    p("• la partie informative reste au présent ;"),
    p("• mes trois règles prennent trois formes différentes : un impératif, une obligation (il faut, devoir), une tournure impersonnelle (il est interdit de…) ;"),
    p("• j'évite les répétitions avec les pronoms démonstratifs.", { after: 60 }),
    sub("Ma grille de relecture :"),
    p("1. Les deux parties sont-elles bien distinctes ?"),
    p("2. Mes trois règles ont-elles trois formes différentes ?"),
    p("3. Ai-je remplacé les noms répétés ?"),
    p("4. Majuscules, points, articles numérotés ?"),
    p("5. Ma devise est-elle courte et frappante ?", { after: 60 }),
    sub("Améliorer, c'est :"),
    p("• raccourcir le titre jusqu'à ce qu'il frappe ;"),
    p("• remplacer une règle vague (« soyez gentils ») par une règle précise (« saluez les aînés ») ;"),
    p("• lire l'affiche à voix haute : ce qui se dit mal se lit mal.", { after: 60 }),
    pr([run("À retenir : ", { bold: true }),
        run("une affiche se lit en dix secondes ; chaque mot doit mériter sa place.")]),
  ];
}

// ---------- S22 — Lecture-fluidité ----------
function ficheS22() {
  const meta = META("Lecture-fluidité : lire un compte-rendu à haute voix",
    "À la fin de la séance, l'apprenant lit un compte-rendu avec précision et un rythme adapté, en s'appuyant sur les signes de ponctuation de base.",
    "10 / 12", "compte-rendu de la séance 13, affiches des apprenants");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Rappelle le code de lecture des signes : le point, la virgule, les deux-points.")],
      [fp("Répondent."),
       fp("R.A. : pause longue et voix qui descend ; pause courte ; annonce d'une explication ou d'une liste.")],
      "Travail collectif", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Lisez la citation du chef de fokontany sans aucune intonation, puis avec le ton. Quelle différence ? Les guillemets annoncent des paroles rapportées : on change de voix.")],
      [fp("Comparent."),
       fp("R.A. : avec le ton, on entend que quelqu'un parle.")],
      "Modélisation de la lecture", "Texte de la S13"),
    stepRow(["2. Présentation"],
      [fp("Annoncez : « Lecture-fluidité : lire un compte-rendu ». Objectif : précision des mots, rythme régulier, autocorrections rapides.")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation"],
      [fp("Repérage dans le compte-rendu : les virgules des énumérations (balais et pelles…), les deux-points qui annoncent (le repas de midi : un grand plat de riz), le point d'exclamation de la citation, les points d'interrogation éventuels. Rappel du code de chaque signe.")],
      [fp("Repèrent les signes."),
       fp("R.A. : après « midi », les deux-points annoncent le menu.")],
      "Lecture analytique", "Texte de la S13"),
    stepRow(["4. Analyse", "(lecture modèle puis répétée)"],
      [fp("Lecture modèle du deuxième paragraphe. Puis lecture répétée en binômes : deux lectures chacun, le camarade suit du doigt et note les mots déformés ou sautés ; on se corrige rapidement, sans longue pause.")],
      [fp("Lisent, se corrigent, relisent.")],
      "Lecture répétée", "Texte de la S13"),
    stepRow(["5. Synthèse"],
      [fp("Récapitulez : précision (chaque mot exact), rythme (ni course ni lenteur), autocorrection rapide, respect des signes — et changement de voix pour les paroles rapportées.")],
      [fp("Récapitulent. Copient.")], "Travail collectif", "Tableau"),
    stepRow(["6. Entraînement"],
      [fp("Chacun lit à haute voix SON affiche (séance 21) : le titre avec force, les informations posément, les règles nettement, la devise lentement. Le groupe relève une réussite par lecture.")],
      [fp("Lisent leur affiche."),
       pAns("R.A. : les trois règles étaient détachées l'une de l'autre ; la devise, lue lentement, a porté.", ["devise"], { size: SZ.FICHE })],
      "Lecture à haute voix", "Affiches"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("Lecture individuelle notée de six lignes du compte-rendu : précision, ponctuation respectée, rythme, voix de la citation.")],
      [fp("Lisent individuellement."),
       pAns("R.A. : lecture fluide ; la citation du chef de fokontany est lue avec une voix différente.", ["citation"], { size: SZ.FICHE })],
      "Travail individuel", "Texte de la S13"),
  ];
  return fiche(22, TOTAL, meta, rows, "s22", "LECTURE (LECTURE-FLUIDITÉ)", COLOR);
}
function lessonS22() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 22", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    discBadge("LECTURE (LECTURE-FLUIDITÉ)", COLOR),
    p("", { after: 40 }),
    p([run("LIRE UN COMPTE-RENDU À HAUTE VOIX", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    sub("Les signes de base et leur code :"),
    mot("la virgule ,", "pause courte — elle sépare les éléments d'une énumération"),
    mot("le point .", "pause longue, la voix descend"),
    mot("les deux-points :", "on annonce : une explication, une liste, des paroles"),
    mot("le point d'interrogation ?", "la voix monte"),
    mot("le point d'exclamation !", "la voix s'anime"),
    p("", { after: 60 }),
    sub("Les paroles rapportées :"),
    p("Entre guillemets, quelqu'un parle : je change légèrement de voix."),
    p("« Quand chacun donne un peu de son temps, le quartier devient la maison de tous. »", { after: 60 }),
    sub("Pour une lecture fluide :"),
    p("• je lis chaque mot avec précision ;"),
    p("• je me corrige vite, sans m'arrêter longtemps ;"),
    p("• je garde un rythme régulier ;"),
    p("• je m'entraîne : deux lectures valent mieux qu'une.", { after: 60 }),
    pr([run("À retenir : ", { bold: true }),
        run("lire un compte-rendu, c'est rendre l'événement vivant pour celui qui n'y était pas.")]),
  ];
}

// ---------- La grande leçon ----------
function bigLesson() {
  return [
    unitBanner("LEÇON — UNITÉ 2 : LA VIE EN SOCIÉTÉ (récapitulatif)", COLOR),
    p("", { after: 80 }),
    sub("1. Les mots de l'unité :"),
    pr([run("Les biens de tous : ", { bold: true }), run("le bien public, le patrimoine.", { bold: true, color: C.SALMON })], { after: 40 }),
    pr([run("Les actions ensemble : ", { bold: true }), run("l'entraide, la solidarité, les activités communautaires.", { bold: true, color: C.SALMON })], { after: 40 }),
    pr([run("Les manières : ", { bold: true }), run("le savoir-vivre, la politesse, les règles de vie en classe.", { bold: true, color: C.SALMON })], { after: 80 }),
    sub("2. Le compte-rendu :"),
    p("Il rapporte un fait réel. La grille : où ? quand ? quoi ? comment ? Information explicite (écrite) ou implicite (comprise entre les lignes).", { after: 80 }),
    sub("3. Les textes informatif et injonctif :"),
    p("Informatif — faire savoir : phrases déclaratives, présent, faits. Injonctif — faire agir : impératif, interdictions, articles numérotés.", { after: 80 }),
    sub("4. Les pronoms démonstratifs :"),
    p("Simples (ils s'accordent) : celui, celle, ceux, celles. Neutres : ce, ceci, cela, ça. Ils évitent les répétitions : « les règles… celles-ci protègent tout le monde ».", { after: 80 }),
    sub("5. Ordonner, obliger, interdire :"),
    p("L'impératif (Respecte, Respectons, Respectez — sans sujet) ; l'obligation (il faut, devoir, être obligé de) ; la nécessité (il est essentiel/indispensable de) ; la tournure impersonnelle (il est interdit de…).", { after: 80 }),
    sub("6. Informer au bon temps, dans le bon ordre :"),
    p("Le présent pour maintenant et les généralités ; l'imparfait (-ais, -ais, -ait, -ions, -iez, -aient) pour la situation d'avant ; les connecteurs logiques : premièrement… / d'abord, ensuite, puis, après, enfin.", { after: 80 }),
  ];
}

// ---------- Exercices ----------
function exercises() {
  return [
    p([run("EXERCICES", { bold: true, size: 30 })], { center: true, after: 140 }),
    pr([run("Exercice 1 (4 points). ", { bold: true }), run("Complète avec : patrimoine — entraide — bien public — savoir-vivre. 1. Saluer les aînés est une marque de …. 2. La route est un … : elle sert à tous. 3. Le Rova fait partie du … de Madagascar. 4. Reconstruire ensemble le toit d'un voisin, c'est de l'….")]),
    p("", { after: 120 }),
    pr([run("Exercice 2 (4 points). ", { bold: true }), run("Informatif ou injonctif ? 1. « Le jardin a plus de cinquante ans. » 2. « Ne cueillez pas les fleurs. » 3. « Il est interdit de faire du feu. » 4. « Un gardien veille à l'application des règles. »")]),
    p("", { after: 120 }),
    pr([run("Exercice 3 (4 points). ", { bold: true }), run("Remplace les mots répétés par un pronom démonstratif : 1. « Mon quartier est propre ; le quartier de Lova l'est aussi. » 2. « Ces affiches sont réussies ; les affiches de la classe voisine aussi. » 3. « Les élèves qui aident sont récompensés ; les élèves qui cassent réparent. » 4. « Tout le monde a aimé la journée ; la journée a uni le quartier. »")]),
    p("", { after: 120 }),
    pr([run("Exercice 4 (4 points). ", { bold: true }), run("Transforme la règle « garder la cour propre » : 1. à l'impératif (vous) 2. avec il faut 3. avec devoir (nous) 4. avec une tournure impersonnelle de nécessité.")]),
    p("", { after: 120 }),
    pr([run("Exercice 5 (4 points). ", { bold: true }), run("Mets les verbes au temps qui convient (présent ou imparfait) et ajoute deux connecteurs : « Avant, la cour (être) poussiéreuse. … , la classe (planter) des arbres chaque année ; aujourd'hui, la cour (être) ombragée. … , chacun la (garder) propre. »")]),
    p("", { after: 140 }),
    p([run("Total : 20 points", { bold: true })], { after: 160 }),
    p([run("CORRIGÉ", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Ex.1 : savoir-vivre — bien public — patrimoine — entraide. (1 pt chacun)", ["savoir-vivre"]),
    pAns("Ex.2 : 1. informatif — 2. injonctif — 3. injonctif — 4. informatif. (1 pt chacun)", ["injonctif"]),
    pAns("Ex.3 : 1. celui de Lova — 2. celles de la classe voisine — 3. ceux qui aident / ceux qui cassent — 4. celle-ci a uni le quartier. (1 pt chacun)", ["celle-ci"]),
    pAns("Ex.4 : 1. Gardez la cour propre. 2. Il faut garder la cour propre. 3. Nous devons garder la cour propre. 4. Il est indispensable (essentiel) de garder la cour propre. (1 pt chacun)", ["Il est indispensable"]),
    pAns("Ex.5 : était — Ensuite (Puis), plante (ou a planté ; accepter le présent de généralité) — est — Enfin, garde. Connecteurs cohérents exigés. (4 pts)", ["était"]),
  ];
}

// ---------- Révision (S23) ----------
function revision() {
  const B2 = require("./builders");
  return [
    B2.bookmarkTitle("s23", "SÉANCE 23 / 72", { bold: true, size: 28, after: 60 }),
    p([run("RÉVISION — UNITÉ 2 : LA VIE EN SOCIÉTÉ", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    p([run("Je réponds :", { bold: true })], { after: 80 }),
    p("1. Qu'est-ce qu'un compte-rendu ? Donne sa grille de lecture."),
    pAns("R.A. : un texte qui rapporte un fait réel ; où ? quand ? quoi ? comment ?", ["fait réel"]),
    p("2. Explicite ou implicite ? Explique avec un exemple."),
    pAns("R.A. : explicite = écrit (« les enfants ont planté dix arbres ») ; implicite = compris entre les lignes (« dès six heures… » → ils étaient motivés).", ["implicite"]),
    p("3. Donne la différence entre un bien public et un patrimoine."),
    pAns("R.A. : le bien public sert à tous aujourd'hui ; le patrimoine vient du passé et doit passer aux enfants.", ["patrimoine"]),
    p("4. Quel est le but du texte informatif ? du texte injonctif ? Donne un indice de chaque."),
    pAns("R.A. : faire savoir (déclaratives au présent) ; faire agir (impératif, interdictions).", ["faire agir"]),
    p("5. Cite les quatre pronoms démonstratifs simples et deux neutres."),
    pAns("R.A. : celui, celle, ceux, celles ; ce/ceci, cela, ça.", ["celles"]),
    p("6. Remplace : « Les bancs de l'école et les bancs du jardin ». "),
    pAns("R.A. : les bancs de l'école et ceux du jardin.", ["ceux"]),
    p("7. Mets à l'impératif (tu, nous, vous) : respecter le matériel."),
    pAns("R.A. : respecte, respectons, respectez le matériel.", ["respectons"]),
    p("8. Exprime « ne pas gaspiller l'eau » avec une obligation puis une tournure impersonnelle."),
    pAns("R.A. : il ne faut pas gaspiller l'eau / nous ne devons pas gaspiller l'eau ; il est interdit de gaspiller l'eau.", ["gaspiller"]),
    p("9. Conjugue à l'imparfait : être (vous), avoir (nous), faire (ils)."),
    pAns("R.A. : vous étiez, nous avions, ils faisaient.", ["vous étiez"]),
    p("10. Range ces connecteurs et emploie-les dans trois phrases sur une journée d'entraide : enfin / d'abord / ensuite."),
    pAns("R.A. : d'abord, ensuite, enfin — D'abord, nous avons balayé la place. Ensuite, nous avons repeint l'école. Enfin, nous avons partagé le repas.", ["d'abord"]),
  ];
}

// ---------- Test (S24) ----------
function testPaper() {
  const B2 = require("./builders");
  return [
    B2.bookmarkTitle("s24", "SÉANCE 24 / 72", { bold: true, size: 28, after: 60 }),
    p([run("TEST — UNITÉ 2 : LA VIE EN SOCIÉTÉ", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 60 }),
    pr([run("Durée : ………        ", { bold: true }), run("Total : 20 points", { bold: true })], { center: true, after: 160 }),
    pr([run("Exercice 1 (4 points). ", { bold: true }), run("Complète avec : solidarité — patrimoine — savoir-vivre — bien public. 1. Céder sa place à une personne âgée est une marque de …. 2. La borne-fontaine est un …. 3. Les chants anciens font partie de notre …. 4. La … pousse les voisins à s'entraider.")]),
    p("", { after: 120 }),
    pr([run("Exercice 2 (4 points). ", { bold: true }), run("Lis : « L'école d'Ambodirano accueille quatre cents élèves. Article 1 — Gardez la cour propre. Article 2 — Il est interdit d'écrire sur les murs. » 1. Quelle phrase est informative ? 2. Relève un impératif. 3. Relève une tournure impersonnelle. 4. Quel est le but des articles ?")]),
    p("", { after: 120 }),
    pr([run("Exercice 3 (4 points). ", { bold: true }), run("Pronoms démonstratifs : remplace les répétitions. 1. « Ma classe et la classe de Hery ». 2. « Ces règles sont les règles du jardin. » 3. « Les élèves qui écoutent réussissent ; les élèves qui bavardent recommencent. » 4. « Le quartier a changé : le changement du quartier fait plaisir » (utilise cela).")]),
    p("", { after: 120 }),
    pr([run("Exercice 4 (4 points). ", { bold: true }), run("La règle « éteindre les lampes en sortant » : écris-la 1. à l'impératif (tu) 2. avec il faut 3. avec devoir (on) 4. avec il est essentiel de.")]),
    p("", { after: 120 }),
    pr([run("Exercice 5 (4 points). ", { bold: true }), run("Rédige la partie injonctive d'une affiche « Respectons le marché » : trois règles numérotées de trois formes différentes, puis une devise.")]),
    p("", { after: 140 }),
    p([run("CORRIGÉ", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Ex.1 : savoir-vivre — bien public — patrimoine — solidarité. (1 pt chacun)", ["solidarité"]),
    pAns("Ex.2 : 1. « L'école accueille quatre cents élèves. » 2. Gardez. 3. Il est interdit d'écrire sur les murs. 4. faire agir les élèves. (1 pt chacun)", ["Gardez"]),
    pAns("Ex.3 : 1. celle de Hery — 2. celles du jardin — 3. ceux qui écoutent / ceux qui bavardent — 4. cela fait plaisir. (1 pt chacun)", ["cela"]),
    pAns("Ex.4 : 1. Éteins les lampes en sortant. 2. Il faut éteindre les lampes en sortant. 3. On doit éteindre les lampes en sortant. 4. Il est essentiel d'éteindre les lampes en sortant. (1 pt chacun)", ["éteindre"]),
    pAns("Ex.5 : trois règles numérotées, trois formes différentes (impératif / obligation / impersonnelle) : 3 pts ; devise courte et cohérente : 1 pt.", ["devise"]),
  ];
}

module.exports = function unit2() {
  return [
    ...opening(), pageBreak(),
    ...ficheS13(), pageBreak(), ...lessonS13(), pageBreak(),
    ...ficheS14(), pageBreak(), ...lessonS14(), pageBreak(),
    ...ficheS15(), pageBreak(), ...lessonS15(), pageBreak(),
    ...ficheS16(), pageBreak(), ...lessonS16(), pageBreak(),
    ...ficheS17(), pageBreak(), ...lessonS17(), pageBreak(),
    ...ficheS18(), pageBreak(), ...lessonS18(), pageBreak(),
    ...ficheS19(), pageBreak(), ...lessonS19(), pageBreak(),
    ...ficheS20(), pageBreak(), ...lessonS20(), pageBreak(),
    ...ficheS21(), pageBreak(), ...lessonS21(), pageBreak(),
    ...ficheS22(), pageBreak(), ...lessonS22(), pageBreak(),
    ...bigLesson(), pageBreak(),
    ...exercises(), pageBreak(),
    ...revision(), pageBreak(),
    ...testPaper(), pageBreak(),
    ...iCan("UNITÉ 2", COLOR, [
      "Je comprends un compte-rendu avec la grille où ? quand ? quoi ? comment ?",
      "Je distingue l'information explicite de l'information implicite.",
      "J'emploie les mots de la vie en société : bien public, patrimoine, entraide, savoir-vivre.",
      "Je reconnais le texte informatif (faire savoir) et le texte injonctif (faire agir).",
      "J'évite les répétitions avec celui, celle, ceux, celles — et cela, ça.",
      "J'ordonne, j'oblige et j'interdis : impératif, il faut, il est interdit de…",
      "J'informe au présent et je décris la situation d'avant à l'imparfait.",
      "J'organise mes idées avec d'abord, ensuite, puis, après, enfin.",
      "Je présente un compte-rendu oral et je produis une affiche.",
    ], "PROCHAINE ÉTAPE → UNITÉ 3 : LES NOUVELLES TECHNOLOGIES"),
  ];
};
module.exports.COLOR = COLOR;
module.exports.SHADE = SHADE;
