// Français T5 — UNITÉ 6 — LES CONTES ET LÉGENDES (10 leçons + révision + test) — Séances 61 à 72 / 72
const B = require("./builders");
const { C, SZ, run, p, pr, kw, pAns, fp, fiche, sectionRow, stepRow,
        unitBanner, img, pageBreak, lessonTitle, sub, iCan, cell } = B;
const { Table, TableRow, WidthType } = require("docx");

const COLOR = "AD1457"; // rose foncé contes
const SHADE = "FCE4EC";
const TOTAL = 72;
const META = (title, slo, session, materials) => ({
  theme: "UNITÉ 6 — LES CONTES ET LÉGENDES", title, slo,
  values: "autonomie, sens de la responsabilité", session, materials,
});

const bullet = (runs, o = {}) => pr(
  [run("•  ", { bold: true, color: COLOR, size: SZ.BODY }), ...runs],
  { after: o.after != null ? o.after : 50 });
const mot = (word, expl) => bullet([
  run(word, { bold: true, color: C.BLUE }), ...(expl ? [run("  —  " + expl)] : [])]);
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

// passage d'écoute (S61)
function passageConte() {
  return box("PASSAGE D'ÉCOUTE — Conte : « Soafara et la sorcière du lac »", [
    p("Il était une fois, dans un village au bord d'un grand lac, une fillette courageuse nommée Soafara. Elle vivait heureuse avec son père, un pêcheur, et s'occupait seule de la maison, car sa mère était partie au ciel."),
    p("Un jour, une sorcière maléfique jeta un sortilège sur le lac : les eaux devinrent noires, et plus un seul poisson ne mordit aux filets. « Si personne ne me rapporte la fleur d'or de la montagne, ricana la sorcière, le lac restera noir pour toujours ! » Les villageois baissèrent la tête : la montagne était loin, et le chemin, plein de dangers."),
    p("Alors Soafara prit sa décision : « J'irai, dit-elle. Le lac nourrit tout le village, c'est aussi ma responsabilité ! » Elle marcha trois jours. Soudain, un génie géant surgit d'un rocher : « Qui ose traverser ma montagne ? » Soafara ne se sauva pas. Elle expliqua son village, le lac noir, les filets vides. Touché par son courage, le génie lui tendit la fleur d'or : « Tu ne l'as pas cueillie pour toi : prends-la. »"),
    p("Soafara rentra et lança la fleur dans les eaux noires. Tout à coup, le lac redevint bleu et les poissons sautèrent de joie ! La sorcière, vaincue, s'enfuit pour toujours. Depuis ce jour, les villageois racontent l'histoire de la fillette qui sauva le lac, et ils vécurent heureux au bord des eaux les plus poissonneuses du pays.", { after: 40 }),
  ]);
}
// texte de lecture (S63)
function texteDarafify() {
  return box("TEXTE DE LECTURE — Légende : « Darafify, le géant bienfaiteur »", [
    p("Il y a très longtemps, bien avant nos grands-parents, vivait sur la côte Est un géant nommé Darafify. Il était si grand que sa tête touchait les nuages : quand il marchait, la mer ne montait qu'à ses genoux ! Darafify était doux et responsable : il surveillait les villages comme un grand frère."),
    p("Un jour, une tempête terrible se leva. Les pirogues des pêcheurs, surprises au large, allaient se briser sur les récifs. Alors Darafify entra dans la mer, souleva les pirogues une à une et les posa doucement sur le sable. Mais la tempête redoubla : le vent arrachait les toits et pliait les arbres !"),
    p("Darafify s'allongea alors de tout son long entre la mer et les villages, et son corps immense arrêta le vent. Toute la nuit, il protégea le pays. Au matin, épuisé, le géant s'endormit profondément… et il ne se réveilla jamais. Heureusement, son grand corps ne disparut pas : il se transforma en une longue chaîne de collines vertes."),
    p("Voilà pourquoi, racontent les anciens, les collines de la côte Est protègent encore les villages du vent. Les gouttes de sueur du géant, elles, sont devenues les lacs de la région. Et quand le tonnerre gronde au loin, les grands-mères sourient : « Ce n'est rien, mes enfants. C'est Darafify qui ronfle ! »", { after: 40 }),
  ]);
}

// ---------- page d'ouverture ----------
function opening() {
  return [
    unitBanner("UNITÉ 6 — LES CONTES ET LÉGENDES", COLOR, "unit6"),
    p("", { after: 100 }),
    p([run("Il était une fois… la dernière aventure de l'année !", { bold: true, color: COLOR, size: 44 })], { center: true, after: 120 }),
    img("u6_contes.png", 440, 768 / 1376),
    p([run("Dans cette unité, je vais apprendre à :", { bold: true })], { after: 60 }),
    p("• comprendre un conte ou une légende et repérer son schéma narratif ;"),
    p("• utiliser les formules du conteur : il était une fois, soudain, ils vécurent heureux… ;"),
    p("• connaître les personnages du merveilleux : sorcière, géant, génie, héros… ;"),
    p("• remplacer les répétitions par les pronoms COD : le, la, l', les ;"),
    p("• conjuguer à l'imparfait, au futur et au passé composé — même les verbes pronominaux ;"),
    p("• accorder le participe passé et les adjectifs en -eau, -au, -eu, -ou ;"),
    p("• raconter un conte avec la voix, les gestes et le visage ;"),
    p("• inventer et rédiger mon propre conte de 15 à 20 lignes !", { after: 120 }),
    pr([run("Type de texte de l'unité : ", { bold: true }),
        run("le texte NARRATIF", { bold: true, color: COLOR }),
        run(" — il raconte une histoire, réelle ou imaginaire.")], { after: 80 }),
    pr([run("Valeurs à véhiculer : ", { bold: true }),
        run("l'autonomie et le sens de la responsabilité.", { italic: true })], { after: 80 }),
  ];
}

// ---------- S61 — Compréhension orale ----------
function ficheS61() {
  const meta = META("Compréhension orale : conte « Soafara et la sorcière du lac »",
    "À la fin de la séance, l'apprenant identifie le type et la fonction d'un conte entendu, ses personnages principaux et secondaires, le lieu, le temps, le problème et son dénouement.",
    "1 / 12", "texte du conte, images du conte");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Retour sur l'unité 5 : complétez avec un connecteur de cause : « Le lac est précieux … il nourrit le village. »")],
      [fp("Répondent."),
       fp("R.A. : car / parce qu'il nourrit le village.")],
      "Travail collectif", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route", "(pré-écoute)"],
      [fp("Question magique : « Qui vous raconte des histoires le soir ? Lesquelles ? » Puis : à quoi reconnaît-on qu'une histoire commence ? J'attends LA formule…")],
      [fp("Échangent."),
       fp("R.A. : « Il était une fois… » !")],
      "Échange", "----"),
    stepRow(["2. Présentation"],
      [fp("Annonce : « Compréhension orale : un conte ». Le conte = une histoire imaginaire, pleine de magie et de merveilleux, qui se transmet de bouche à oreille depuis toujours.")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation", "(1re écoute)"],
      [fp("Lecture expressive (voix de sorcière, voix de génie !). Questions globales : Est-ce une histoire vraie ou imaginaire ? Qui est l'héroïne ? Où et quand se passe l'histoire ?")],
      [fp("Écoutent. Répondent."),
       fp("R.A. : imaginaire (sorcière, génie, sortilège !) ; l'héroïne = Soafara ; au bord d'un lac, il était une fois = autrefois, on ne sait pas quand.")],
      "Écoute active", "Texte"),
    stepRow(["4. Analyse", "(2e écoute)"],
      [fp("Relecture. Personnages principaux et secondaires ? Le problème ? Le dénouement ? Mots nouveaux : maléfique, sortilège, dénouement — sens par le contexte et la famille de mots (MAL-éfique = qui fait le mal).")],
      [fp("Répondent, déduisent."),
       fp("R.A. : principaux = Soafara, la sorcière, le génie ; secondaires = le père, les villageois ; problème = le sortilège rend le lac noir ; dénouement = la fleur d'or délivre le lac.")],
      "Questionnement progressif", "Tableau"),
    stepRow(["5. Synthèse"],
      [fp("Frise de l'histoire au tableau en cinq cases : 1. Soafara vit heureuse (début) → 2. le sortilège (le problème éclate !) → 3. le voyage et le génie (les aventures) → 4. la fleur d'or sauve le lac (la solution) → 5. le village vit heureux (fin). C'est le squelette de TOUS les contes — nous l'étudierons en lecture !")],
      [fp("Complètent la frise.")],
      "Travail collectif", "Frise"),
    stepRow(["6. Entraînement"],
      [fp("En binômes : reformulez l'histoire en trois phrases, dans l'ordre !")],
      [fp("Reformulent."),
       pAns("R.A. : Une sorcière jette un sortilège sur le lac d'un village. La courageuse Soafara va chercher la fleur d'or sur la montagne et convainc le génie. Grâce à elle, le lac redevient bleu et la sorcière s'enfuit.", ["sortilège", "fleur d'or"], { size: SZ.FICHE })],
      "Binômes", "----"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("1. Le conte est-il réel ou imaginaire ? Donne un indice."),
       fp("2. Quel est le problème de l'histoire ?"),
       fp("3. Pourquoi Soafara décide-t-elle de partir ?"),
       fp("4. Que veut dire « maléfique » ?")],
      [fp("Répondent individuellement."),
       pAns("R.A. : 1. imaginaire — il y a une sorcière et un sortilège — 2. le lac devient noir, plus de poissons — 3. parce que le lac nourrit le village : c'est aussi sa responsabilité — 4. qui fait le mal.", ["imaginaire", "responsabilité"], { size: SZ.FICHE })],
      "Travail individuel", "----"),
  ];
  return fiche(61, TOTAL, meta, rows, "s61");
}
function lessonS61() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 61", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("J'ÉCOUTE UN CONTE", { bold: true, size: 36, color: COLOR })], { center: true, after: 140 }),
    sub("Le conte :"),
    p("• une histoire IMAGINAIRE (fictive) : elle n'est pas vraiment arrivée ;"),
    p("• un univers MERVEILLEUX : magie, sortilèges, génies, animaux qui parlent ;"),
    p("• il commence par une formule : « Il était une fois… » ;"),
    p("• il se transmet de bouche à oreille, le soir, depuis toujours.", { after: 80 }),
    sub("Pour comprendre un conte, je cherche :"),
    pr([run("QUI ? ", { bold: true, color: C.BLUE }), run("personnages principaux et secondaires — "),
        run("OÙ ? QUAND ? ", { bold: true, color: C.BLUE }), run("le lieu et le temps — "),
        run("QUEL PROBLÈME ? ", { bold: true, color: C.BLUE }), run("— "),
        run("QUEL DÉNOUEMENT ? ", { bold: true, color: C.BLUE }), run("(la solution)")], { after: 80 }),
    sub("Mots nouveaux :"),
    mot("maléfique", "qui fait le mal. La sorcière maléfique !"),
    mot("un sortilège", "un mauvais sort jeté par la magie."),
    mot("le dénouement", "le moment où le problème se dénoue, se résout."),
    mot("l'héroïne, le héros", "le personnage courageux qui sauve l'histoire !"),
    p("", { after: 60 }),
    pr([run("La leçon de Soafara : ", { bold: true }),
        run("« Le lac nourrit tout le village, c'est aussi ma responsabilité ! »", { italic: true, color: COLOR })]),
  ];
}

// ---------- S62 — Lexique ----------
function ficheS62() {
  const meta = META("Lexique : la boîte à outils du conteur",
    "À la fin de la séance, l'apprenant emploie les formules d'ouverture et de fin, les indicateurs de temps, les connecteurs du récit et le vocabulaire des personnages du merveilleux.",
    "2 / 12", "étiquettes de formules, cartes des personnages");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Par quelle formule commence le conte de Soafara ? Par quels mots finit-il ?")],
      [fp("Répondent."),
       fp("R.A. : « Il était une fois… » ; « ils vécurent heureux… ».")],
      "Travail collectif", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Jeu : je raconte le début d'un conte SANS formule (« Bon, alors, il y a une fille… »). Qu'est-ce qui manque pour que la magie opère ?")],
      [fp("Réagissent."),
       fp("R.A. : la formule magique d'ouverture !")],
      "Mise en situation", "----"),
    stepRow(["2. Présentation"],
      [fp("Annonce : « La boîte à outils du conteur » — quatre tiroirs : les formules d'ouverture, les indicateurs de temps, les connecteurs du récit, la formule de fin. Plus une galerie de personnages !")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation"],
      [fp("Retour au texte : relevez les mots qui ouvrent (il était une fois), qui situent le temps (un jour, depuis ce jour), qui font avancer et rebondir l'action (alors, soudain, tout à coup, heureusement) et qui ferment (ils vécurent heureux).")],
      [fp("Relèvent et classent."),
       fp("R.A. : ouverture : il était une fois ; temps : un jour ; rebonds : alors, soudain, tout à coup ; fin : ils vécurent heureux.")],
      "Repérage guidé", "Texte"),
    stepRow(["4. Analyse"],
      [fp("On remplit les quatre tiroirs au tableau : OUVERTURE (il était une fois, il y a très longtemps, dans un pays lointain) ; TEMPS (autrefois, jadis, au début, un jour) ; CONNECTEURS (alors, soudain, tout à coup, heureusement) ; FIN (ils vécurent heureux et eurent beaucoup d'enfants). Puis la galerie des personnages avec les cartes : le roi, la reine, la princesse, le héros/l'héroïne, la sorcière, le géant, le génie — les bons et les maléfiques !")],
      [fp("Classent les étiquettes, trient bons et méchants.")],
      "Manipulation d'étiquettes", "Étiquettes, cartes"),
    stepRow(["5. Synthèse"],
      [fp("Récapitulation : le tableau des quatre tiroirs + la galerie est recopié. Astuce : soudain et tout à coup annoncent TOUJOURS un rebondissement — dressez l'oreille !")],
      [fp("Recopient.")],
      "Travail collectif", "Tableau"),
    stepRow(["6. Entraînement"],
      [fp("Le conte en chaîne : je lance « Il était une fois un géant qui… » ; chaque élève ajoute UNE phrase avec un outil du conteur (un jour…, soudain…, heureusement…, et la formule de fin pour le dernier !).")],
      [fp("Inventent en chaîne."),
       fp("R.A. : … Un jour, il perdit son zébu. Soudain, une sorcière apparut… Heureusement, un génie l'aida. Et ils vécurent heureux !")],
      "Jeu de chaîne", "----"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("1. Cite deux formules d'ouverture."),
       fp("2. Cite deux connecteurs qui annoncent un rebondissement."),
       fp("3. Donne la formule de fin la plus célèbre."),
       fp("4. Nomme un personnage bon et un personnage maléfique du merveilleux.")],
      [fp("Répondent individuellement."),
       pAns("R.A. : 1. il était une fois ; dans un pays lointain — 2. soudain, tout à coup — 3. ils vécurent heureux et eurent beaucoup d'enfants — 4. ex. : le génie / la sorcière.", ["il était une fois", "soudain", "tout à coup"], { size: SZ.FICHE })],
      "Travail individuel", "----"),
  ];
  return fiche(62, TOTAL, meta, rows, "s62");
}
function lessonS62() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 62", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("LA BOÎTE À OUTILS DU CONTEUR", { bold: true, size: 36, color: COLOR })], { center: true, after: 140 }),
    sub("Tiroir 1 — Les formules d'ouverture :"),
    p("Il était une fois… • Il y a très longtemps… • Dans un pays lointain…", { after: 80 }),
    sub("Tiroir 2 — Les indicateurs de temps :"),
    p("autrefois, jadis, au début, un jour…", { after: 80 }),
    sub("Tiroir 3 — Les connecteurs du récit :"),
    pr([run("alors, soudain, tout à coup, heureusement", { bold: true, color: C.RED }),
        run(" — soudain et tout à coup annoncent toujours un rebondissement !")], { after: 80 }),
    sub("Tiroir 4 — La formule de fin :"),
    p("« Ils vécurent heureux et eurent beaucoup d'enfants. »", { after: 80 }),
    sub("La galerie des personnages du merveilleux :"),
    mot("les têtes couronnées", "le roi, la reine, la princesse."),
    mot("les héros", "le héros, l'héroïne — courageux et responsables, comme Soafara !"),
    mot("les maléfiques", "la sorcière (la sorcellerie, les sortilèges !)."),
    mot("les créatures", "le géant, le génie — parfois bons, parfois terribles."),
  ];
}

// ---------- S63 — Compréhension écrite ----------
function ficheS63() {
  const meta = META("Compréhension écrite : « Darafify, le géant bienfaiteur » — le schéma narratif",
    "À la fin de la séance, l'apprenant lit une légende, en dégage le schéma narratif (situation initiale, élément perturbateur, péripéties, résolution, situation finale) et remet des événements en ordre.",
    "3 / 12", "texte de lecture, étiquettes d'événements");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Citez les quatre tiroirs de la boîte à outils du conteur.")],
      [fp("Répondent."),
       fp("R.A. : formules d'ouverture, indicateurs de temps, connecteurs, formule de fin.")],
      "Travail collectif", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route", "(pré-lecture)"],
      [fp("Titre au tableau : « Darafify, le géant bienfaiteur ». Bienfaiteur : famille de mots ? Hypothèses sur l'histoire ?")],
      [fp("Analysent, imaginent."),
       fp("R.A. : bien + faire = celui qui fait le bien. Un gentil géant ?")],
      "Anticipation", "Tableau"),
    stepRow(["2. Présentation"],
      [fp("Distribution. Le conte est imaginaire partout ; la LÉGENDE, elle, part d'un lieu ou d'un fait réel (nos collines !) et l'explique avec du merveilleux.")],
      [fp("Observent le texte.")], "Travail collectif", "Texte"),
    stepRow(["3. Observation", "(lecture silencieuse)"],
      [fp("Lecture silencieuse. Vérification des hypothèses. Questions globales : qui est Darafify ? Quel est le danger ? Comment finit-il ?")],
      [fp("Lisent, répondent."),
       fp("R.A. : un géant protecteur ; la tempête menace pirogues et villages ; il se transforme en collines.")],
      "Lecture silencieuse", "Texte"),
    stepRow(["4. Analyse", "(le schéma narratif)"],
      [fp("Découverte du SCHÉMA NARRATIF en cinq étapes, appliqué au texte : 1. situation initiale (Darafify vit paisible — imparfait !) ; 2. élément perturbateur (un jour, la tempête ! — « un jour » + action) ; 3. péripéties (il sauve les pirogues, il se couche contre le vent) ; 4. résolution (le danger est écarté, il s'endort et se transforme) ; 5. situation finale (les collines protègent les villages pour toujours).")],
      [fp("Repèrent les cinq étapes dans le texte."),
       fp("R.A. : les cinq étapes retrouvées, avec les indices : il était…, un jour, alors, au matin, voilà pourquoi.")],
      "Exploitation de texte", "Schéma narratif"),
    stepRow(["5. Synthèse", "(remise en ordre)"],
      [fp("Jeu : cinq étiquettes d'événements données dans le désordre (il s'endort / la tempête se lève / il vivait paisible / il arrête le vent / les collines protègent). Remettez-les dans l'ordre du schéma !")],
      [fp("Remettent en ordre."),
       fp("R.A. : il vivait paisible → la tempête → il arrête le vent → il s'endort → les collines protègent.")],
      "Manipulation d'étiquettes", "Étiquettes"),
    stepRow(["6. Entraînement"],
      [fp("En binômes : reformulez la légende en cinq phrases, une par étape du schéma.")],
      [fp("Reformulent."),
       pAns("R.A. : Autrefois, le géant Darafify veillait sur la côte. Un jour, une tempête terrible se leva. Alors il sauva les pirogues et arrêta le vent de son corps. Épuisé, il s'endormit et se transforma en collines. Depuis, les collines protègent toujours les villages.", ["Un jour", "Alors"], { size: SZ.FICHE })],
      "Binômes", "----"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("1. Quelle est la différence entre un conte et une légende ?"),
       fp("2. Cite les cinq étapes du schéma narratif."),
       fp("3. Quel est l'élément perturbateur de cette légende ?"),
       fp("4. Que sont devenues les gouttes de sueur du géant ?")],
      [fp("Répondent individuellement."),
       pAns("R.A. : 1. la légende explique un lieu ou un fait réel avec du merveilleux — 2. situation initiale, élément perturbateur, péripéties, résolution, situation finale — 3. la tempête — 4. les lacs de la région.", ["situation initiale", "élément perturbateur", "péripéties"], { size: SZ.FICHE })],
      "Travail individuel", "----"),
  ];
  return fiche(63, TOTAL, meta, rows, "s63");
}
function lessonS63() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 63", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("LE SCHÉMA NARRATIF — LE SQUELETTE DES CONTES", { bold: true, size: 36, color: COLOR })], { center: true, after: 140 }),
    sub("Tous les contes et légendes suivent cinq étapes :"),
    pr([run("1. LA SITUATION INITIALE ", { bold: true, color: C.BLUE }),
        run("— tout va bien, on présente le héros. (« Il était une fois… », à l'imparfait)")], { after: 50 }),
    pr([run("2. L'ÉLÉMENT PERTURBATEUR ", { bold: true, color: C.RED }),
        run("— un problème éclate ! (« Un jour… », « Soudain… »)")], { after: 50 }),
    pr([run("3. LES PÉRIPÉTIES ", { bold: true, color: C.BLUE }),
        run("— les aventures et les épreuves du héros.")], { after: 50 }),
    pr([run("4. LA RÉSOLUTION ", { bold: true, color: C.GREEN }),
        run("— le problème est réglé. (« Heureusement… »)")], { after: 50 }),
    pr([run("5. LA SITUATION FINALE ", { bold: true, color: C.BLUE }),
        run("— une nouvelle vie commence. (« Depuis ce jour… », « Ils vécurent heureux… »)")], { after: 80 }),
    sub("Conte ou légende ?"),
    p("• le CONTE : tout est imaginaire, n'importe où, n'importe quand ;"),
    p("• la LÉGENDE : elle part d'un lieu ou d'un fait réel (nos collines, un lac…) et l'explique avec du merveilleux.", { after: 80 }),
    sub("Mots nouveaux :"),
    mot("bienfaiteur", "celui qui fait le bien (bien + faire)."),
    mot("une péripétie", "une aventure, un rebondissement du récit."),
    mot("un récif", "un rocher à fleur d'eau, dangereux pour les pirogues."),
  ];
}

// ---------- S64 — Les pronoms COD ----------
function ficheS64() {
  const meta = META("Les pronoms personnels compléments d'objet direct (COD)",
    "À la fin de la séance, l'apprenant identifie les pronoms personnels COD, précise leur référent et remplace un groupe nominal par un pronom pour éviter les répétitions.",
    "4 / 12", "corpus de phrases, étiquettes");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Les cinq étapes du schéma narratif ?")],
      [fp("Récitent."),
       fp("R.A. : situation initiale, élément perturbateur, péripéties, résolution, situation finale.")],
      "Travail collectif", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Texte qui bégaie au tableau : « Darafify voit les pirogues. Darafify soulève les pirogues. Darafify pose les pirogues. » Qu'est-ce qui cloche ?")],
      [fp("Réagissent."),
       fp("R.A. : trop de répétitions !")],
      "Observation", "Tableau"),
    stepRow(["2. Présentation"],
      [fp("Annonce : « Les pronoms personnels COD » — les petits mots qui remplacent et évitent les répétitions : le, la, l', les.")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation", "(corpus)"],
      [fp("Corpus : « Darafify voit les pirogues : il LES soulève. » ; « La fleur d'or ? Soafara LA lance dans le lac. » ; « Le génie ? Son courage LE touche. » Que remplacent les, la, le ? Où sont-ils placés ?")],
      [fp("Observent."),
       fp("R.A. : les = les pirogues ; la = la fleur d'or ; le = le génie. Ils sont placés AVANT le verbe !")],
      "Exploitation de corpus", "Corpus"),
    stepRow(["4. Analyse"],
      [fp("Tableau des pronoms COD : LE (masculin singulier), LA (féminin singulier), L' (devant une voyelle), LES (pluriel) — et aussi me, te, nous, vous (« le génie NOUS protège »). Méthode en trois pas : 1. je trouve le COD (je demande « qui ? quoi ? » après le verbe) ; 2. je choisis le pronom du même genre et nombre ; 3. je le place avant le verbe. Manipulation sur six phrases.")],
      [fp("Transforment les phrases."),
       fp("R.A. : « La sorcière jette le sortilège » → « La sorcière le jette. » ; « Soa raconte la légende » → « Soa la raconte. »")],
      "Manipulation de phrases", "Étiquettes"),
    stepRow(["5. Synthèse"],
      [fp("Règle recopiée + le piège encadré : ne confonds pas LE/LA/LES articles (devant un nom : le lac) et LE/LA/LES pronoms (devant un verbe : je le vois !).")],
      [fp("Recopient la règle.")],
      "Travail collectif", "Tableau"),
    stepRow(["6. Entraînement"],
      [fp("Chasse aux répétitions : réécrire le texte qui bégaie de la mise en route avec les pronoms.")],
      [fp("Réécrivent."),
       pAns("R.A. : Darafify voit les pirogues : il les soulève, puis il les pose doucement sur le sable.", ["les soulève", "les pose"], { size: SZ.FICHE })],
      "Travail individuel", "Cahiers"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("1. Remplace le COD par un pronom : « Le roi appelle la princesse. »"),
       fp("2. Même consigne : « Les enfants écoutent le conte. »"),
       fp("3. Que remplace « les » dans : « Les villageois ? Le géant les protège. » ?"),
       fp("4. « Le » est-il article ou pronom ? : « Je LE raconte à mon frère. »")],
      [fp("Répondent individuellement."),
       pAns("R.A. : 1. Le roi l'appelle. — 2. Les enfants l'écoutent. — 3. les villageois — 4. pronom (il est devant le verbe !).", ["l'appelle", "l'écoutent", "pronom"], { size: SZ.FICHE })],
      "Travail individuel", "----"),
  ];
  return fiche(64, TOTAL, meta, rows, "s64");
}
function lessonS64() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 64", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("LES PRONOMS PERSONNELS COD", { bold: true, size: 36, color: COLOR })], { center: true, after: 140 }),
    sub("À quoi servent-ils ?"),
    p("À remplacer un groupe nominal COD pour éviter les répétitions :"),
    pr([run("« Darafify voit les pirogues : il "), run("les", { bold: true, color: C.RED }),
        run(" soulève. » (les = les pirogues)")], { after: 80 }),
    sub("Le tableau des pronoms COD :"),
    pr([run("LE ", { bold: true, color: C.BLUE }), run("masculin singulier — « Le sortilège ? Elle le jette. »")], { after: 50 }),
    pr([run("LA ", { bold: true, color: C.BLUE }), run("féminin singulier — « La légende ? Soa la raconte. »")], { after: 50 }),
    pr([run("L' ", { bold: true, color: C.BLUE }), run("devant une voyelle — « Le conte ? Je l'adore ! »")], { after: 50 }),
    pr([run("LES ", { bold: true, color: C.BLUE }), run("pluriel — « Les pirogues ? Il les sauve. »")], { after: 50 }),
    p("Et aussi : me, te, nous, vous — « Le génie nous protège. »", { after: 80 }),
    sub("Ma méthode en trois pas :"),
    p("1. Je trouve le COD : je demande « qui ? quoi ? » après le verbe."),
    p("2. Je choisis le pronom du même genre et du même nombre."),
    p("3. Je le place AVANT le verbe.", { after: 80 }),
    sub("Le piège :"),
    p("le, la, les + NOM = article (le lac) ; le, la, les + VERBE = pronom COD (je le vois) !"),
  ];
}

// ---------- S65 — Conjugaison : imparfait, futur, pronominaux ----------
function ficheS65() {
  const meta = META("Conjugaison : l'imparfait, le futur et les verbes pronominaux",
    "À la fin de la séance, l'apprenant conjugue les verbes du 1er et du 2e groupe et les verbes pronominaux au présent, à l'imparfait et au futur simple, et choisit l'imparfait pour la situation initiale du conte.",
    "5 / 12", "corpus, étiquettes pronoms/verbes, ardoises");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Remplacez par un pronom COD : « Le géant sauve les pêcheurs. »")],
      [fp("Répondent."),
       fp("R.A. : Le géant les sauve.")],
      "Travail collectif", "Ardoises"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Détective des temps : « Il ÉTAIT une fois une fillette qui VIVAIT heureuse… » Ces verbes sont-ils au présent ? Au passé ? C'est le temps magique des débuts de contes !")],
      [fp("Observent."),
       fp("R.A. : au passé — c'est l'imparfait.")],
      "Observation", "Tableau"),
    stepRow(["2. Présentation"],
      [fp("Annonce : « L'imparfait, le futur… et les verbes qui se regardent dans le miroir : les pronominaux (se lever, se transformer) ! »")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation", "(corpus)"],
      [fp("Corpus : « Darafify vivait paisible » ; « les villageois finissaient leur journée » ; « il SE réveillera peut-être un jour » ; « la sorcière S'enfuit ». Repérage : terminaisons de l'imparfait ? Petit mot devant les pronominaux ?")],
      [fp("Repèrent."),
       fp("R.A. : -ait, -aient ; le petit pronom se/s' (me, te, nous, vous…) devant le verbe.")],
      "Exploitation de corpus", "Corpus"),
    stepRow(["4. Analyse"],
      [fp("Trois tableaux construits avec la classe : IMPARFAIT (-ais, -ais, -ait, -ions, -iez, -aient : je chantais ; 2e groupe : je finissais, nous finissions) ; FUTUR (infinitif + -ai, -as, -a, -ons, -ez, -ont : je chanterai, je finirai) ; PRONOMINAUX (je me lève, tu te lèves… ; imparfait : elle se transformait ; futur : nous nous lèverons). Conjugaison en chœur et sur l'ardoise.")],
      [fp("Conjuguent en chœur, épellent."),
       fp("R.A. : ils finissaient ; vous chanterez ; elle se transformera.")],
      "Observation et répétition", "Tableau, ardoises"),
    stepRow(["5. Synthèse"],
      [fp("La règle d'or du conteur, encadrée : la SITUATION INITIALE se raconte à l'IMPARFAIT (le décor : il était, elle vivait) ; les ACTIONS qui surgissent, au passé simple ou au passé composé (nous verrons le passé composé à la prochaine séance !).")],
      [fp("Recopient les tableaux et la règle.")],
      "Travail collectif", "Tableau"),
    stepRow(["6. Entraînement"],
      [fp("Machine à remonter le temps : je dis un verbe au présent, rangée 1 le met à l'imparfait, rangée 2 au futur. « Elle se réveille ! »")],
      [fp("Transforment."),
       fp("R.A. : elle se réveillait — elle se réveillera ; nous grandissons → nous grandissions — nous grandirons.")],
      "Jeu de transformation", "Ardoises"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("1. Imparfait : « Autrefois, les géants (habiter) nos montagnes. »"),
       fp("2. Imparfait : « Je (finir) toujours mes contes par la formule magique. »"),
       fp("3. Futur : « Demain, nous (raconter) la légende. »"),
       fp("4. Pronominal à l'imparfait : « Chaque soir, le village (se réunir) autour du feu. »")],
      [fp("Répondent individuellement."),
       pAns("R.A. : 1. habitaient — 2. finissais — 3. raconterons — 4. se réunissait.", ["habitaient", "finissais", "raconterons", "se réunissait"], { size: SZ.FICHE })],
      "Travail individuel", "Cahiers"),
  ];
  return fiche(65, TOTAL, meta, rows, "s65");
}
function lessonS65() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 65", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("L'IMPARFAIT, LE FUTUR ET LES VERBES PRONOMINAUX", { bold: true, size: 36, color: COLOR })], { center: true, after: 140 }),
    sub("L'imparfait — le temps du décor du conte :"),
    p("terminaisons : -ais, -ais, -ait, -ions, -iez, -aient."),
    p("chanter → je chantais, nous chantions ; finir → je finissais, ils finissaient."),
    pr([run("« Il ÉTAIT une fois une fillette qui VIVAIT heureuse… » ", { italic: true }),
        run("— la situation initiale est à l'imparfait !", { bold: true, color: C.RED })], { after: 80 }),
    sub("Le futur simple — le temps des promesses :"),
    p("infinitif + -ai, -as, -a, -ons, -ez, -ont."),
    p("je chanterai, tu finiras, nous raconterons, ils grandiront.", { after: 80 }),
    sub("Les verbes pronominaux — le petit pronom miroir :"),
    p("se lever, se transformer, s'enfuir, se réunir : un pronom (me, te, se, nous, vous) accompagne le verbe."),
    p("présent : elle se transforme — imparfait : elle se transformait — futur : elle se transformera."),
    p("je me lève, tu te lèves, il se lève, nous nous levons, vous vous levez, ils se lèvent.", { after: 80 }),
    sub("L'astuce de Koto :"),
    p("Pour le futur, je pars de l'infinitif tout entier : raconter + ai = je raconterai !"),
  ];
}

// ---------- S66 — Passé composé et accords ----------
function ficheS66() {
  const meta = META("Le passé composé et ses accords — le pluriel des adjectifs en -eau, -au, -eu, -ou",
    "À la fin de la séance, l'apprenant conjugue au passé composé, accorde le participe passé avec être (et le verbe avec un sujet composé), applique l'accord avec avoir quand le COD est placé avant, et forme le pluriel des adjectifs en -eau, -au, -eu, -ou.",
    "6 / 12", "corpus, ardoises");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Imparfait : « les géants (vivre) » ; futur : « je (finir) ».")],
      [fp("Répondent."),
       fp("R.A. : vivaient ; finirai.")],
      "Travail collectif", "Ardoises"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Deux phrases du conte au tableau : « Soafara EST RENTRÉE au village. » / « Elle A LANCÉ la fleur. » Combien de mots pour chaque verbe ? Lesquels ?")],
      [fp("Observent."),
       fp("R.A. : deux mots — être ou avoir + participe passé : c'est le passé composé.")],
      "Observation", "Tableau"),
    stepRow(["2. Présentation"],
      [fp("Annonce : « Le passé composé et ses accords » — le temps des actions du conte. Et en bonus : le pluriel des adjectifs en -eau, -au, -eu, -ou !")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation", "(corpus)"],
      [fp("Corpus : « Soafara est rentréE » ; « Le roi et la reine sont partiS » ; « la sorcière s'est enfuiE » ; « Elle a lancé la fleur » ; « La fleur ? Elle L'a lancéE dans le lac ». Quand le participe s'accorde-t-il ?")],
      [fp("Comparent les terminaisons."),
       fp("R.A. : avec ÊTRE, le participe s'accorde avec le sujet ; avec AVOIR, pas d'accord… sauf la dernière phrase !")],
      "Exploitation de corpus", "Corpus"),
    stepRow(["4. Analyse"],
      [fp("Les trois règles d'or : 1. avec ÊTRE (et les pronominaux !), accord avec le sujet : elle est rentrée, ils sont partis — sujet composé « le roi et la reine » → verbe au pluriel ! 2. avec AVOIR, pas d'accord : elle a lancé ; 3. MAIS si le COD est placé AVANT le verbe (souvent un pronom !), accord avec ce COD : la fleur ? elle l'a lancée. Manipulation sur l'ardoise.")],
      [fp("Appliquent sur six phrases."),
       fp("R.A. : les pirogues ? il les a sauvées ; la légende ? nous l'avons racontée.")],
      "Manipulation de phrases", "Ardoises"),
    stepRow(["5. Synthèse", "(+ pluriel des adjectifs)"],
      [fp("Encadré final : le pluriel des adjectifs — en -eau → -eaux (un beau conte, de beaux contes ; nouveau → nouveaux) ; en -au → -aux ; en -eu → -eux (merveilleux reste merveilleux !)… mais BLEU → BLEUS et FOU → FOUS prennent un simple -s ! « Des lacs bleus, de beaux contes merveilleux. »")],
      [fp("Recopient les règles.")],
      "Travail collectif", "Tableau"),
    stepRow(["6. Entraînement"],
      [fp("Dictée éclair sur l'ardoise : « La princesse est arrivée. » ; « Les pirogues ? Il les a posées. » ; « de nouveaux contes » ; « des génies merveilleux » ; « des rubans bleus ».")],
      [fp("Écrivent, corrigent.")],
      "Dictée sur ardoise", "Ardoises"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("1. Accorde : « La reine est (parti). »"),
       fp("2. Accorde : « Le roi et la reine sont (arrivé). »"),
       fp("3. Accorde : « La fleur ? Soafara l'a (lancé) dans le lac. »"),
       fp("4. Mets au pluriel : un beau château bleu.")],
      [fp("Répondent individuellement."),
       pAns("R.A. : 1. partie — 2. arrivés — 3. lancée — 4. de beaux châteaux bleus.", ["partie", "arrivés", "lancée", "beaux châteaux bleus"], { size: SZ.FICHE })],
      "Travail individuel", "----"),
  ];
  return fiche(66, TOTAL, meta, rows, "s66");
}
function lessonS66() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 66", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("LE PASSÉ COMPOSÉ ET SES ACCORDS", { bold: true, size: 36, color: COLOR })], { center: true, after: 140 }),
    sub("Le passé composé = être ou avoir (au présent) + participe passé :"),
    p("il a lancé, elle est rentrée, ils se sont réunis — le temps des ACTIONS du conte.", { after: 80 }),
    sub("Les trois règles d'or de l'accord :"),
    pr([run("1. Avec ÊTRE ", { bold: true, color: C.GREEN }),
        run("(et les verbes pronominaux) → accord avec le sujet : elle est rentréE, ils sont partiS, la sorcière s'est enfuiE.")], { after: 50 }),
    pr([run("2. Avec AVOIR ", { bold: true, color: C.BLUE }),
        run("→ pas d'accord : elle a lancé la fleur.")], { after: 50 }),
    pr([run("3. MAIS ", { bold: true, color: C.RED }),
        run("si le COD est placé AVANT le verbe → accord avec ce COD : « La fleur ? Elle L'a lancéE. » « Les pirogues ? Il LES a sauvéES. »")], { after: 80 }),
    sub("Le sujet composé :"),
    p("Le roi ET la reine sont partis — deux sujets reliés par « et » = verbe au pluriel !", { after: 80 }),
    sub("Le pluriel des adjectifs en -eau, -au, -eu, -ou :"),
    p("• beau → beaux, nouveau → nouveaux (-eau, -au → -x) ;"),
    p("• merveilleux reste merveilleux ;"),
    pr([run("• attention ! ", { bold: true, color: C.RED }),
        run("bleu → bleuS, fou → fouS — un simple -s : « des lacs bleus, de beaux contes merveilleux ! »")]),
  ];
}

// ---------- S67 — Production orale ----------
function ficheS67() {
  const meta = META("Production orale : raconter un conte devant la classe",
    "À la fin de la séance, l'apprenant raconte un conte en respectant le schéma narratif et la chronologie, en adaptant sa voix, son débit, sa gestuelle et ses expressions du visage pour captiver l'auditoire.",
    "7 / 12", "images séquentielles, cartes des personnages, schéma narratif");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Accordez : « La sorcière s'est (enfui). » Les cinq étapes du schéma narratif ?")],
      [fp("Répondent."),
       fp("R.A. : enfuie ; situation initiale, élément perturbateur, péripéties, résolution, situation finale.")],
      "Travail collectif", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Je raconte le début de Soafara deux fois : une fois assis, voix plate ; une fois debout, avec la voix de la sorcière, les grands yeux, les gestes. Quelle version captive ?")],
      [fp("Comparent."),
       fp("R.A. : la deuxième — le conteur joue avec sa voix et son corps !")],
      "Démonstration", "----"),
    stepRow(["2. Présentation"],
      [fp("Annonce : « Aujourd'hui, vous devenez conteurs ! » Choisir un conte connu (Soafara, Darafify, un conte de la famille) ou en inventer un — et le raconter en suivant le schéma narratif.")],
      [fp("Écoutent, choisissent leur conte.")], "Travail collectif", "----"),
    stepRow(["3. Observation", "(les secrets du conteur)"],
      [fp("Construction collective de la grille du conteur : LA VOIX (grosse voix du géant, voix pointue de la sorcière), LE DÉBIT (lent pour le mystère, rapide pour la poursuite !), LES GESTES (montrer, mimer), LE VISAGE (peur, joie, surprise), et les OUTILS du récit (il était une fois, un jour, soudain, heureusement, depuis ce jour).")],
      [fp("Élaborent la grille.")],
      "Travail collectif", "Grille, tableau"),
    stepRow(["4. Analyse", "(préparation)"],
      [fp("Préparation en binômes avec les images séquentielles ou le schéma en cinq cases : chacun note ses cinq étapes en mots-clés (pas de texte par cœur !) et répète son conte à son binôme, qui coche la grille du conteur.")],
      [fp("Préparent, répètent, se conseillent.")],
      "Travail en binôme", "Images séquentielles, schéma"),
    stepRow(["5. Synthèse", "(le festival des conteurs)"],
      [fp("Festival : les conteurs passent devant la classe (3 minutes). L'auditoire écoute puis pose des questions ; le conteur répond.")],
      [fp("Racontent, répondent aux questions."),
       pAns("R.A. (exemple de récit) : Il était une fois un vieux baobab qui gardait l'eau du village dans son tronc. Un jour, un marchand jaloux a voulu le couper ! Alors les enfants se sont relayés nuit et jour autour de l'arbre. Heureusement, le marchand, touché par leur courage, a jeté sa hache. Depuis ce jour, le baobab donne son eau à tous — et les enfants le surveillent toujours.", ["Il était une fois", "Soudain", "Heureusement"], { size: SZ.FICHE })],
      "Récit oral", "----"),
    stepRow(["6. Entraînement"],
      [fp("Tour éclair : chacun redit SA plus belle phrase de conteur avec le geste et la voix !")],
      [fp("Rejouent leur meilleur moment.")],
      "Tour de parole", "----"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("Grille du conteur : ☐ mes cinq étapes dans l'ordre ☐ mes formules et connecteurs ☐ ma voix a changé selon les personnages ☐ mes gestes et mon visage ont raconté aussi ☐ j'ai répondu aux questions.")],
      [fp("S'auto-évaluent.")],
      "Auto-évaluation", "Grille"),
  ];
  return fiche(67, TOTAL, meta, rows, "s67");
}
function lessonS67() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 67", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("DEVENIR CONTEUR : LA VOIX, LES GESTES, LE VISAGE", { bold: true, size: 36, color: COLOR })], { center: true, after: 140 }),
    sub("Les quatre secrets du conteur :"),
    pr([run("1. LA VOIX ", { bold: true, color: C.BLUE }),
        run("— grosse voix du géant, voix pointue de la sorcière, chuchotement du mystère…")], { after: 50 }),
    pr([run("2. LE DÉBIT ", { bold: true, color: C.BLUE }),
        run("— lent pour le suspense, rapide pour la poursuite !")], { after: 50 }),
    pr([run("3. LES GESTES ", { bold: true, color: C.BLUE }),
        run("— je montre la montagne, je mime le géant qui soulève les pirogues.")], { after: 50 }),
    pr([run("4. LE VISAGE ", { bold: true, color: C.BLUE }),
        run("— mes yeux s'agrandissent de peur, mon sourire annonce la fin heureuse.")], { after: 80 }),
    sub("Mon plan de conteur — cinq mots-clés, pas de par cœur :"),
    p("situation initiale → élément perturbateur → péripéties → résolution → situation finale."),
    p("Et à chaque étape, un outil du conteur : il était une fois, un jour, soudain, heureusement, depuis ce jour.", { after: 80 }),
    sub("L'astuce de Soa :"),
    p("Je regarde mon public dans les yeux : un conteur ne parle pas à ses sandales !"),
  ];
}

// ---------- S68 — Production écrite 1 ----------
function ficheS68() {
  const meta = META("Production écrite (1) : inventer mon conte et organiser mes idées",
    "À la fin de la séance, l'apprenant invente un conte ou une légende, sélectionne les personnages, le lieu, l'époque et les événements principaux, et remplit sa fiche d'organisation selon le schéma narratif.",
    "8 / 12", "textes modèles, fiche d'organisation des idées");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Qu'est-ce qui distingue un conte d'une légende ?")],
      [fp("Répondent."),
       fp("R.A. : la légende explique un lieu ou un fait réel ; le conte est entièrement imaginaire.")],
      "Travail collectif", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Grand projet final de l'année : « Invente ton conte ou ta légende (15 à 20 lignes) ! » Aujourd'hui les idées et le plan, à la prochaine séance la rédaction.")],
      [fp("Recopient le sujet, rêvent.")],
      "Travail collectif", "Tableau"),
    stepRow(["2. Présentation"],
      [fp("Retour éclair aux deux modèles : Soafara (conte) et Darafify (légende). Leurs ingrédients communs ? Schéma en cinq étapes, formules, personnages, merveilleux !")],
      [fp("Retrouvent les ingrédients.")], "Travail collectif", "Textes modèles"),
    stepRow(["3. Observation", "(le casting)"],
      [fp("Chacun choisit d'abord son monde : QUI ? (héros ou héroïne + un personnage maléfique ou une créature) ; OÙ ? (un village, une forêt, une île…) ; QUAND ? (autrefois, il y a très longtemps). Les cartes des personnages circulent pour donner des idées.")],
      [fp("Choisissent personnages, lieu, époque.")],
      "Brainstorming", "Cartes des personnages"),
    stepRow(["4. Analyse", "(la fiche d'organisation)"],
      [fp("Remplissage de la fiche d'organisation en cinq cases : 1. situation initiale (qui ? où ? la vie paisible) ; 2. élément perturbateur (quel problème éclate ?) ; 3. péripéties (deux épreuves maximum !) ; 4. résolution (comment le héros s'en sort — par son courage, pas par hasard !) ; 5. situation finale (la nouvelle vie + la formule de fin). En mots-clés !")],
      [fp("Remplissent leur fiche.")],
      "Planification guidée", "Fiche d'organisation"),
    stepRow(["5. Synthèse"],
      [fp("Mise en commun : deux ou trois fiches racontées à l'oral. La classe vérifie : le problème est-il clair ? La résolution vient-elle du héros ? Conseil-valeur : un héros autonome et responsable, comme Soafara !")],
      [fp("Présentent, améliorent."),
       pAns("R.A. (exemple de fiche) : 1. Naivo, petit berger, vivait heureux près de la forêt. 2. Un génie en colère assèche la source. 3. Naivo traverse la forêt ; il partage son riz avec un vieux caméléon affamé. 4. Le caméléon était le génie déguisé : touché, il rend l'eau. 5. Depuis, la source ne tarit jamais et Naivo la protège.", ["Naivo"], { size: SZ.FICHE })],
      "Mise en commun", "----"),
    stepRow(["6. Entraînement"],
      [fp("Finalisation : chacun choisit sa formule d'ouverture, sa formule de fin et ses trois connecteurs (un jour, soudain, heureusement…).")],
      [fp("Complètent leur fiche.")],
      "Travail individuel", "Fiches"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("Liste de contrôle : ☐ mes personnages, mon lieu, mon époque ☐ mes cinq cases remplies en mots-clés ☐ ma résolution vient du héros ☐ formules et connecteurs choisis.")],
      [fp("Cochent.")],
      "Auto-évaluation", "Liste de contrôle"),
  ];
  return fiche(68, TOTAL, meta, rows, "s68");
}
function lessonS68() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 68", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("MON CONTE (1) : INVENTER ET ORGANISER", { bold: true, size: 36, color: COLOR })], { center: true, after: 140 }),
    pr([run("Sujet : ", { bold: true, color: C.RED }),
        run("Invente un conte ou une légende de 15 à 20 lignes, en respectant le schéma narratif.", { italic: true })], { after: 80 }),
    sub("D'abord, le casting :"),
    p("QUI ? un héros ou une héroïne + un personnage maléfique ou une créature ;"),
    p("OÙ ? un village, une forêt, une île, une montagne… ;"),
    p("QUAND ? autrefois, il y a très longtemps, jadis.", { after: 80 }),
    sub("Ensuite, ma fiche d'organisation — cinq cases en mots-clés :"),
    p("1. Situation initiale — la vie paisible du héros."),
    p("2. Élément perturbateur — le problème éclate !"),
    p("3. Péripéties — deux épreuves maximum."),
    p("4. Résolution — le héros s'en sort par son courage, pas par hasard !"),
    p("5. Situation finale — la nouvelle vie + la formule de fin.", { after: 80 }),
    sub("Le conseil du conteur :"),
    p("Un bon héros est autonome et responsable : il agit, il n'attend pas que la solution tombe du ciel !"),
  ];
}

// ---------- S69 — Production écrite 2 ----------
function ficheS69() {
  const meta = META("Production écrite (2) : rédiger mon conte",
    "À la fin de la séance, l'apprenant rédige son conte ou sa légende de 15 à 20 lignes avec ses propres mots, puis le relit, le corrige et l'améliore à l'aide d'une grille.",
    "9 / 12", "fiches d'organisation de la séance 68, grille de relecture");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("À quel temps se raconte la situation initiale ? Et les actions ?")],
      [fp("Répondent."),
       fp("R.A. : l'imparfait pour le décor ; le passé composé pour les actions.")],
      "Travail collectif", "Fiches"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Rappel des consignes : 15 à 20 lignes, le schéma en cinq étapes, la formule d'ouverture et la formule de fin, les connecteurs, l'imparfait pour le décor et le passé composé pour les actions.")],
      [fp("Relisent leur fiche d'organisation.")],
      "Travail collectif", "----"),
    stepRow(["2. Présentation"],
      [fp("Défi d'écriture bonus : glisser au moins UN pronom COD pour éviter une répétition (« Le génie ? Naivo l'a attendri ! ») et UN adjectif bien accordé (de beaux rizières ? non ! de belles rizières, des champs merveilleux).")],
      [fp("Notent les défis.")], "Travail collectif", "Tableau"),
    stepRow(["3. Observation", "(rédaction)"],
      [fp("Rédaction silencieuse à partir de la fiche. Je circule : une situation initiale au présent ? un « ils vécurent heureux » dès la deuxième ligne ? J'aiguille sans écrire à la place.")],
      [fp("Rédigent leur premier jet.")],
      "Écriture guidée", "Cahiers d'essai"),
    stepRow(["4. Analyse", "(relecture)"],
      [fp("Grille de relecture : 1. Mes cinq étapes dans l'ordre ? 2. Formule d'ouverture ET de fin ? 3. L'imparfait au début, le passé composé pour les actions ? 4. Les participes bien accordés (elle est partie, il les a sauvées) ? 5. Un pronom COD ? 6. 15 à 20 lignes ?")],
      [fp("Relisent, corrigent.")],
      "Relecture guidée", "Grille"),
    stepRow(["5. Synthèse", "(amélioration)"],
      [fp("Échange de brouillons en binômes : le lecteur suit le schéma avec le doigt — une étape manque-t-elle ? Le héros gagne-t-il par son courage ? Il signale le passage flou.")],
      [fp("Améliorent leur texte."),
       pAns("R.A. (exemple de production) : Il était une fois, près de la grande forêt, un petit berger nommé Naivo qui vivait heureux avec son troupeau. Un jour, un génie en colère a asséché la source du village ! Alors Naivo est parti à travers la forêt. En chemin, il a partagé son riz avec un vieux caméléon affamé. Soudain, le caméléon s'est transformé : c'était le génie ! « Tu m'as nourri sans rien demander, dit-il. Ta source ? Je te la rends. » Heureusement, l'eau est revenue en chantant. Depuis ce jour, la source ne tarit jamais, et Naivo la protège comme un trésor. Et ils vécurent heureux au bord de l'eau claire.", ["Il était une fois", "Soudain", "Depuis ce jour"], { size: SZ.FICHE })],
      "Binômes", "----"),
    stepRow(["6. Entraînement"],
      [fp("Mise au propre avec un titre. Les contes rejoindront le grand livre des contes de la classe !")],
      [fp("Recopient, illustrent s'ils le souhaitent.")],
      "Travail individuel", "Cahiers"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("Ramassage. Barème : schéma narratif complet 3 pts, formules et connecteurs 2 pts, temps du récit et accords 3 pts, originalité et correction 2 pts.")],
      [fp("Rendent leur production.")],
      "Travail individuel", "----"),
  ];
  return fiche(69, TOTAL, meta, rows, "s69");
}
function lessonS69() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 69", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("MON CONTE (2) : RÉDIGER", { bold: true, size: 36, color: COLOR })], { center: true, after: 140 }),
    sub("La recette du conte réussi :"),
    p("• J'ouvre avec la formule : « Il était une fois… » — et le décor à l'IMPARFAIT."),
    p("• Le problème éclate : « Un jour… » — et les actions au PASSÉ COMPOSÉ."),
    p("• Je fais rebondir : alors, soudain, tout à coup, heureusement."),
    p("• Mon héros gagne par son courage — il est autonome et responsable !"),
    p("• Je ferme avec la formule : « Depuis ce jour… », « Ils vécurent heureux… »", { after: 80 }),
    sub("Ma grille de relecture :"),
    p("☐ Les cinq étapes du schéma, dans l'ordre."),
    p("☐ Formule d'ouverture ET formule de fin."),
    p("☐ Imparfait pour le décor, passé composé pour les actions."),
    p("☐ Les accords : elle est partie, ils sont arrivés, il les a sauvées."),
    p("☐ Un pronom COD pour chasser une répétition."),
    p("☐ 15 à 20 lignes, majuscules et points."),
  ];
}

// ---------- S70 — Lecture-fluidité ----------
function ficheS70() {
  const meta = META("Lecture-fluidité : le théâtre des lecteurs",
    "À la fin de la séance, l'apprenant prépare et présente en petit groupe la lecture expressive d'un conte, en respectant les dialogues, les groupes de souffle, les pauses et les changements d'intonation.",
    "10 / 12", "textes de Soafara et Darafify, productions des apprenants");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Le code du lecteur : que fait la voix devant « ? », devant « ! » ?")],
      [fp("Répondent."),
       fp("R.A. : elle monte pour la question, elle s'exclame pour le « ! ».")],
      "Travail collectif", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Lecture modèle d'un passage de Soafara avec les voix : la narratrice, la sorcière qui ricane, le génie qui gronde. Combien de « voix » avez-vous entendues ?")],
      [fp("Écoutent, comptent."),
       fp("R.A. : trois voix — le conte est plein de dialogues !")],
      "Lecture modèle", "Texte"),
    stepRow(["2. Présentation"],
      [fp("Annonce : « Le théâtre des lecteurs » — en petits groupes, on se partage un passage (un narrateur + les personnages), on le prépare, puis on le présente comme au théâtre… le livre à la main !")],
      [fp("Écoutent, forment les groupes.")], "Travail collectif", "----"),
    stepRow(["3. Observation", "(préparation du texte)"],
      [fp("Chaque groupe choisit son passage (Soafara, Darafify ou un conte de la séance 69) et prépare sa partition : surligner les paroles de chaque personnage, marquer les groupes de souffle ( / ), entourer les « ? » et les « ! », choisir la voix de chacun.")],
      [fp("Préparent leur partition de lecture.")],
      "Lecture silencieuse, annotation", "Textes, crayons"),
    stepRow(["4. Analyse", "(répétition)"],
      [fp("Répétition en groupes : chacun lit sa partie à tour de rôle, les autres conseillent (plus lent ! plus fort ! la voix monte !). Je passe de groupe en groupe pour ajuster débit et intonation.")],
      [fp("Répètent, se conseillent.")],
      "Travail de groupe", "Textes annotés"),
    stepRow(["5. Synthèse", "(représentation)"],
      [fp("Le théâtre des lecteurs : chaque groupe présente sa lecture devant la classe. L'auditoire évalue avec la grille : fluidité, précision, expressivité — et la magie des voix !")],
      [fp("Présentent leur lecture, écoutent les autres.")],
      "Théâtre des lecteurs", "Grille"),
    stepRow(["6. Entraînement"],
      [fp("Bis ! Le passage préféré de la classe est relu par un nouveau groupe volontaire — on progresse en réécoutant.")],
      [fp("Relisent, comparent les interprétations.")],
      "Lecture à haute voix", "----"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("Grille : ☐ j'ai lu ma partie sans hésiter ☐ j'ai respecté pauses et groupes de souffle ☐ ma voix a joué mon personnage ☐ notre groupe a captivé la classe.")],
      [fp("S'auto-évaluent.")],
      "Auto-évaluation", "Grille"),
  ];
  return fiche(70, TOTAL, meta, rows, "s70");
}
function lessonS70() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 70", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("LE THÉÂTRE DES LECTEURS", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    sub("Le principe :"),
    p("• En petit groupe, on se partage un passage : un NARRATEUR + les PERSONNAGES."),
    p("• On prépare, on répète… puis on présente la lecture comme au théâtre, le livre à la main !", { after: 80 }),
    sub("Ma partition de lecture :"),
    p("• je surligne les paroles de mon personnage (entre guillemets « … ») ;"),
    p("• je marque mes groupes de souffle ( / ) et mes pauses ;"),
    p("• j'entoure les ? (la voix monte) et les ! (la voix s'exclame) ;"),
    p("• je choisis MA voix : grosse voix du géant, ricanement de la sorcière…", { after: 80 }),
    sub("Le trio gagnant, une dernière fois :"),
    pr([run("fluidité ", { bold: true, color: C.BLUE }), run("+ "),
        run("précision ", { bold: true, color: C.BLUE }), run("+ "),
        run("expressivité ", { bold: true, color: C.BLUE }),
        run("— toutes les techniques de l'année : la ponctuation, l'écho, le chœur, et maintenant le théâtre !")]),
  ];
}

// ---------- grande leçon récapitulative ----------
function bigLesson() {
  return [
    unitBanner("LEÇON — UNITÉ 6 : LES CONTES ET LÉGENDES (récapitulatif)", COLOR),
    p("", { after: 80 }),
    sub("1. Le conte et la légende :"),
    p("Le conte : histoire imaginaire, univers merveilleux (magie, sortilèges, génies). La légende : elle explique un lieu ou un fait réel avec du merveilleux. Personnages : roi, reine, princesse, héros/héroïne, sorcière maléfique, géant, génie.", { after: 80 }),
    sub("2. Le schéma narratif — cinq étapes :"),
    p("situation initiale (imparfait !) → élément perturbateur (« un jour… ») → péripéties → résolution (« heureusement… ») → situation finale (« depuis ce jour… »).", { after: 80 }),
    sub("3. La boîte à outils du conteur :"),
    p("Ouverture : il était une fois, dans un pays lointain. Temps : autrefois, jadis, un jour. Connecteurs : alors, soudain, tout à coup, heureusement. Fin : ils vécurent heureux et eurent beaucoup d'enfants.", { after: 80 }),
    sub("4. Les pronoms COD :"),
    p("le, la, l', les (+ me, te, nous, vous) remplacent le COD et se placent AVANT le verbe : « Les pirogues ? Il les sauve. » Devant un nom = article ; devant un verbe = pronom !", { after: 80 }),
    sub("5. La conjugaison du conte :"),
    p("Imparfait (-ais, -ait, -ions, -aient : il vivait, ils finissaient) pour le décor ; futur (je raconterai) ; passé composé (être/avoir + participe passé) pour les actions ; verbes pronominaux : elle se transformait, ils se sont réunis.", { after: 80 }),
    sub("6. Les accords :"),
    p("Avec être : accord avec le sujet (elle est rentrée, le roi et la reine sont partis). Avec avoir : pas d'accord… sauf COD placé avant (« la fleur ? elle l'a lancée »). Adjectifs : beaux, nouveaux, merveilleux — mais bleus et fous !", { after: 80 }),
  ];
}

// ---------- exercices supplémentaires ----------
function exercises() {
  return [
    p([run("EXERCICES SUPPLÉMENTAIRES — UNITÉ 6", { bold: true, color: COLOR, size: 32 })], { center: true, after: 140 }),
    sub("Exercice 1 — La boîte du conteur :"),
    p("Classe ces outils dans le bon tiroir (ouverture / temps / connecteur / fin) : soudain — il était une fois — jadis — ils vécurent heureux — tout à coup — dans un pays lointain.", { after: 60 }),
    pAns("Corrigé : ouverture : il était une fois, dans un pays lointain — temps : jadis — connecteurs : soudain, tout à coup — fin : ils vécurent heureux.", ["il était une fois", "jadis", "soudain"]),
    p("", { after: 40 }),
    sub("Exercice 2 — Le schéma narratif :"),
    p("Remets ces événements dans l'ordre du schéma : a) Heureusement, le génie rend l'eau. b) Il était une fois un berger heureux. c) Depuis, la source ne tarit plus. d) Un jour, la source s'assèche. e) Le berger traverse la forêt et partage son riz.", { after: 60 }),
    pAns("Corrigé : b → d → e → a → c.", ["b", "d", "e", "a", "c"]),
    p("", { after: 40 }),
    sub("Exercice 3 — Les pronoms COD :"),
    p("a) Remplace par un pronom : « La grand-mère raconte la légende. » ; « Le héros affronte les épreuves. » b) Que remplace « l' » dans : « Le conte ? Nous l'avons adoré. »", { after: 60 }),
    pAns("Corrigé : a) La grand-mère la raconte. Le héros les affronte. b) le conte.", ["la raconte", "les affronte", "le conte"]),
    p("", { after: 40 }),
    sub("Exercice 4 — Conjugaison et accords :"),
    p("a) Imparfait : « Autrefois, les génies (habiter) la forêt et je les (écouter). » b) Futur : « Demain, tu (raconter) ton conte. » c) Passé composé, accorde : « La princesse est (arrivé) » ; « Les pirogues ? Il les a (sauvé). » d) Pluriel : un nouveau conte merveilleux ; un ruban bleu.", { after: 60 }),
    pAns("Corrigé : a) habitaient, écoutais — b) raconteras — c) arrivée ; sauvées — d) de nouveaux contes merveilleux ; des rubans bleus.", ["habitaient", "raconteras", "arrivée", "sauvées"]),
    p("", { after: 40 }),
    sub("Exercice 5 — Expression écrite :"),
    p("Écris la situation initiale et l'élément perturbateur d'un conte (4 phrases) : la formule d'ouverture et l'imparfait pour le décor, « un jour » et le passé composé pour le problème.", { after: 60 }),
    pAns("Corrigé (exemple) : Il était une fois une vieille tisserande qui vivait au bord de la mer. Chaque soir, elle tissait des nattes aux couleurs du soleil. Un jour, un vent maléfique a emporté tous ses fils ! Alors la tisserande a appelé ses petits-enfants à l'aide…", ["Il était une fois", "Un jour"]),
  ];
}

// ---------- S71 — Révision ----------
function revision() {
  const B2 = require("./builders");
  return [
    B2.bookmarkTitle("s71", "SÉANCE 71 / 72", { bold: true, size: 28, after: 60 }),
    p([run("RÉVISION — UNITÉ 6 : LES CONTES ET LÉGENDES", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    p([run("Toute l'unité en une séance — en route pour le dernier test de l'année !", { italic: true, color: C.GRAY })], { center: true, after: 120 }),
    sub("Atelier 1 — Le schéma en désordre (10 min) :"),
    p("Cinq étiquettes d'un mini-conte au tableau, dans le désordre : la classe les remet dans l'ordre du schéma narratif et nomme chaque étape.", { after: 60 }),
    sub("Atelier 2 — Le tiroir éclair (5 min) :"),
    p("Ardoise : je dis un outil du conteur, les élèves écrivent O (ouverture), T (temps), C (connecteur) ou F (fin). Soudain ? Jadis ? Il était une fois ? Ils vécurent heureux ?", { after: 60 }),
    pAns("R.A. : C — T — O — F.", ["C", "T", "O", "F"]),
    p("", { after: 40 }),
    sub("Atelier 3 — La chasse aux répétitions (10 min) :"),
    p("Texte qui bégaie : « Le génie regarde la source. Le génie touche la source. Le génie rend la source au village. » Réécrivez avec les pronoms COD !", { after: 60 }),
    pAns("R.A. : Le génie regarde la source : il la touche, puis il la rend au village.", ["la touche", "la rend"]),
    p("", { after: 40 }),
    sub("Atelier 4 — La dictée des accords (10 min) :"),
    p("Ardoise : elle est partie — ils se sont réunis — la fleur ? il l'a cueillie — de beaux contes merveilleux — des lacs bleus. On épelle, on justifie chaque accord !", { after: 60 }),
    sub("Atelier 5 — Le conteur minute (10 min) :"),
    p("En binômes : raconter un mini-conte en cinq phrases — une par étape du schéma, avec la voix et les gestes. Les plus captivants passent devant la classe !", { after: 60 }),
    pr([run("Demain : le TEST de l'unité 6 — relis ta grande leçon récapitulative !", { bold: true, color: C.RED })]),
  ];
}

// ---------- S72 — Test ----------
function testPaper() {
  const B2 = require("./builders");
  return [
    B2.bookmarkTitle("s72", "SÉANCE 72 / 72", { bold: true, size: 28, after: 60 }),
    p([run("TEST — UNITÉ 6 : LES CONTES ET LÉGENDES", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 60 }),
    p([run("Durée : ……… — Note : … / 20", { bold: true })], { center: true, after: 140 }),
    sub("Exercice 1 — Le conte et ses outils (4 points) :"),
    p("1. Cite une formule d'ouverture et la formule de fin. 2. Cite deux connecteurs qui annoncent un rebondissement. 3. Nomme deux personnages du merveilleux. 4. Quelle est la différence entre un conte et une légende ?", { after: 80 }),
    sub("Exercice 2 — Le schéma narratif (4 points) :"),
    p("Remets dans l'ordre et nomme les étapes : a) Heureusement, Soafara rapporte la fleur d'or. b) Soafara vivait heureuse au bord du lac. c) Depuis, le lac est le plus poissonneux du pays. d) Un jour, la sorcière jette un sortilège. e) Soafara marche trois jours et convainc le génie.", { after: 80 }),
    sub("Exercice 3 — Les pronoms COD (4 points) :"),
    p("a) Remplace le COD par un pronom : « Le roi appelle ses filles. » ; « La grand-mère raconte l'histoire. » b) Que remplace « les » dans : « Les pirogues ? Darafify les a sauvées. » c) Article ou pronom ? « Je LA raconte le soir. »", { after: 80 }),
    sub("Exercice 4 — Conjugaison et accords (4 points) :"),
    p("1. Imparfait : « Autrefois, un géant (protéger) la côte. » 2. Futur : « Demain, nous (finir) le grand livre des contes. » 3. Accorde : « La reine est (parti) » ; « Le roi et la reine sont (arrivé) ». 4. Accorde : « La fleur ? Elle l'a (lancé). » Et mets au pluriel : « un beau ruban bleu ».", { after: 80 }),
    sub("Exercice 5 — Expression écrite (4 points) :"),
    p("Écris un mini-conte de six à huit phrases en suivant le schéma narratif : formule d'ouverture + imparfait, « un jour » + passé composé, un connecteur de rebondissement, une résolution grâce au héros, une formule de fin.", { after: 120 }),
    p([run("CORRIGÉ", { bold: true, color: C.PINK, size: 32 })], { center: true, after: 80 }),
    pAns("Ex.1 : 1. il était une fois… ; ils vécurent heureux et eurent beaucoup d'enfants — 2. soudain, tout à coup — 3. la sorcière, le génie (ou le géant, la princesse…) — 4. la légende explique un lieu ou un fait réel ; le conte est entièrement imaginaire. (1 pt chacun)", ["il était une fois", "soudain"]),
    pAns("Ex.2 : b (situation initiale) → d (élément perturbateur) → e (péripéties) → a (résolution) → c (situation finale). (4 pts)", ["situation initiale", "élément perturbateur"]),
    pAns("Ex.3 : a) Le roi les appelle. La grand-mère la raconte. (2 pts) b) les pirogues (1 pt). c) pronom — il est devant le verbe (1 pt).", ["les appelle", "la raconte", "pronom"]),
    pAns("Ex.4 : 1. protégeait — 2. finirons — 3. partie ; arrivés — 4. lancée ; de beaux rubans bleus. (1 pt chacun)", ["protégeait", "finirons", "partie", "arrivés", "lancée"]),
    pAns("Ex.5 : schéma complet 1,5 pt, formules et connecteurs 1 pt, temps et accords 1 pt, correction 0,5 pt.", ["schéma"]),
  ];
}

module.exports = function unit6() {
  return [
    ...opening(), pageBreak(),
    ...ficheS61(), pageBreak(), ...lessonS61(), pageBreak(),
    ...ficheS62(), pageBreak(), ...lessonS62(), pageBreak(),
    ...ficheS63(), pageBreak(), ...lessonS63(), pageBreak(),
    ...ficheS64(), pageBreak(), ...lessonS64(), pageBreak(),
    ...ficheS65(), pageBreak(), ...lessonS65(), pageBreak(),
    ...ficheS66(), pageBreak(), ...lessonS66(), pageBreak(),
    ...ficheS67(), pageBreak(), ...lessonS67(), pageBreak(),
    ...ficheS68(), pageBreak(), ...lessonS68(), pageBreak(),
    ...ficheS69(), pageBreak(), ...lessonS69(), pageBreak(),
    ...ficheS70(), pageBreak(), ...lessonS70(), pageBreak(),
    ...bigLesson(), pageBreak(),
    ...exercises(), pageBreak(),
    ...revision(), pageBreak(),
    ...testPaper(), pageBreak(),
    ...iCan("UNITÉ 6", COLOR, [
      "Je reconnais un conte (imaginaire, merveilleux) et une légende (un lieu réel expliqué).",
      "Je repère les cinq étapes du schéma narratif et je remets un récit en ordre.",
      "J'utilise la boîte à outils du conteur : il était une fois, soudain, ils vécurent heureux…",
      "Je remplace les répétitions par les pronoms COD : le, la, l', les.",
      "Je conjugue à l'imparfait (il vivait), au futur (je raconterai) et au passé composé.",
      "Je conjugue les verbes pronominaux : elle se transformait, ils se sont réunis.",
      "J'accorde le participe passé : elle est partie — la fleur ? il l'a cueillie.",
      "J'écris le pluriel des adjectifs : beaux, nouveaux, merveilleux… mais bleus !",
      "Je raconte et je rédige mon propre conte — et je le lis comme au théâtre !",
    ], "BRAVO ! LES 6 UNITÉS SONT TERMINÉES — PROCHAINE ÉTAPE → LES ANNEXES !"),
  ];
};
module.exports.COLOR = COLOR;
module.exports.SHADE = SHADE;
