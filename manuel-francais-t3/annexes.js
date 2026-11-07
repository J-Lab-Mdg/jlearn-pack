// Français T3 — ANNEXES 1 à 6 + page finale
const B = require("./builders");
const { C, SZ, run, p, pr, pAns, fp, unitBanner, img, pageBreak, sub, cell, bookmarkTitle } = B;
const { Table, TableRow, WidthType } = require("docx");

const COLOR = "4A235A"; // violet annexes
const SHADE = "E8DAEF";

const bullet = (runs, o = {}) => pr(
  [run("•  ", { bold: true, color: COLOR, size: SZ.BODY }), ...runs],
  { after: o.after != null ? o.after : 50 });
const mot = (word, expl) => bullet([
  run(word, { bold: true, color: C.BLUE }), ...(expl ? [run("  —  " + expl)] : [])]);

function head(bm, title, subtitle) {
  return [
    unitBanner(title, COLOR, bm),
    p("", { after: 80 }),
    ...(subtitle ? [p([run(subtitle, { italic: true, color: C.GRAY, size: 26 })], { center: true, after: 140 })] : []),
  ];
}

// ============ ANNEXE 1 — IMAGIER ============
function theme(imgFile, title, color, words) {
  return [
    p([run(title, { bold: true, color, size: 32 })], { after: 60 }),
    img(imgFile, 300, 502 / 900),
    ...words.map(([w, d]) => mot(w, d)),
    p("", { after: 100 }),
  ];
}
function annexe1() {
  return [
    ...head("annex1", "ANNEXE 1 — L'IMAGIER DES 6 THÉMATIQUES",
      "Tout le lexique de l'année, thème par thème — à relire avant chaque test."),
    ...theme("u1_aliments.png", "UNITÉ 1 — LES ALIMENTS", "D35400", [
      ["les aliments", "le riz, les brèdes, la viande, le poisson, les fruits, les légumes."],
      ["les repas", "le petit déjeuner (le matin), le déjeuner (à midi), le dîner (le soir)."],
      ["les goûts", "sucré, salé, aigre, amer — le gâteau est sucré, le citron est aigre."],
      ["les ustensiles", "la marmite, l'assiette, la cuillère, le verre."],
      ["comparer", "plus … que, moins … que, aussi … que : le gâteau est plus sucré que le pain."],
    ]),
    ...theme("u2_famille.png", "UNITÉ 2 — LA FAMILLE ÉLARGIE", "884EA0", [
      ["la famille élargie", "le grand-père, la grand-mère, l'oncle, la tante, le cousin, la cousine, le neveu, la nièce."],
      ["l'arbre généalogique", "le dessin de la famille, du plus ancien au plus jeune."],
      ["les mots du temps", "d'abord, ensuite, après, puis, enfin."],
      ["les mots du lieu", "à gauche de, à droite de, devant, derrière, sous, sur."],
      ["les possessifs", "mon, ma, mes, ton, ta, tes, son, sa, ses."],
    ]),
    ...theme("u3_activites.png", "UNITÉ 3 — LE TEMPS", "2471A3", [
      ["les moments de la journée", "le matin, à midi, l'après-midi, le soir, la nuit."],
      ["les activités quotidiennes", "se lever, se laver, manger, aller à l'école, faire ses devoirs, dormir."],
      ["le genre", "féminin ou masculin : le cahier, la maison."],
      ["la phrase simple", "sujet + verbe + le reste, avec la majuscule et le point."],
      ["vouloir, pouvoir, devoir", "tu veux, tu peux, tu dois."],
    ]),
    ...theme("u4_classe.png", "UNITÉ 4 — L'ENVIRONNEMENT SCOLAIRE", "148F77", [
      ["les lieux de l'école", "la cour, la salle de classe, le bureau du directeur, les toilettes."],
      ["les objets", "le tableau, le banc, le cahier, la trousse, le stylo, la gomme, la règle."],
      ["les règles de la classe", "j'arrive à l'heure, je lève la main, je range mes affaires."],
      ["les questions", "qui ? (personne), que ? (chose), où ? (lieu)."],
      ["les consignes", "range, efface, prends, fais — et dans les exercices : entoure, souligne, relie."],
    ]),
    ...theme("u5_animaux.png", "UNITÉ 5 — LA FERME", "A04000", [
      ["les animaux", "la poule, le coq, le canard, le zébu, le mouton, la chèvre, le cochon, le lapin."],
      ["les familles", "le coq / la poule / le poussin ; le taureau / la vache / le veau."],
      ["les maisons", "le poulailler, l'étable, le clapier, la mare."],
      ["la négation", "ne… pas, ne… plus, ne… jamais : le canard ne vole pas."],
      ["le futur proche", "aller + infinitif : demain, je vais donner du maïs."],
    ]),
    ...theme("u6_produits.png", "UNITÉ 6 — LE MARCHÉ", "B7950B", [
      ["les acteurs", "le marchand / la marchande (il vend), le client / la cliente (il achète)."],
      ["les endroits", "l'étal, la boutique, l'épicerie, la boulangerie, la boucherie."],
      ["les produits", "les fruits, les légumes, le riz, les œufs, le poisson frais."],
      ["le prix", "C'est combien ? — cher, pas cher ; on paie en ariary et on marchande poliment."],
      ["le passé composé", "avoir + participe : hier, j'ai acheté des bananes."],
    ]),
  ];
}

// ============ ANNEXE 2 — LE GUIDE DU PETIT RÉDACTEUR ============
function annexe2() {
  const row3 = (a, b, c, opts = {}) => new TableRow({ children: [
    cell([fp([run(a, { bold: opts.h, size: SZ.FICHE })])], { w: 2600, shade: opts.h ? SHADE : undefined }),
    cell([fp([run(b, { bold: opts.h, size: SZ.FICHE })])], { w: 3900, shade: opts.h ? SHADE : undefined }),
    cell([fp([run(c, { bold: opts.h, size: SZ.FICHE })])], { w: 3900, shade: opts.h ? SHADE : undefined }),
  ]});
  return [
    ...head("annex2", "ANNEXE 2 — LE GUIDE DU PETIT RÉDACTEUR",
      "Les deux types de textes de l'année : décrire et raconter."),
    sub("Le tableau des types de textes :"),
    new Table({ width: { size: 10400, type: WidthType.DXA }, rows: [
      row3("", "BUT ET QUESTIONS", "OUTILS ET TEMPS", { h: true }),
      row3("DESCRIPTIF (U1 à U4)", "faire voir : comment est-ce ? qui est-ce ? où est-ce ?",
        "les adjectifs (sucré, grand, propre), les comparatifs (plus … que), les mots du lieu (devant, sous) — au présent."),
      row3("NARRATIF (U5 et U6)", "raconter une histoire : que se passe-t-il ? que s'est-il passé ?",
        "les mots du temps (d'abord, puis, enfin ; hier), le futur proche (je vais donner) et le passé composé (j'ai acheté)."),
    ]}),
    p("", { after: 120 }),
    sub("Le plan des PHRASES QUI DÉCRIVENT (U1 à U3) :"),
    p("1. Je dis QUI ou QUOI (Le gâteau…, Ma cousine Vola…) — 2. J'ajoute COMMENT (…est sucré, …est gentille) — 3. Je peux comparer (plus sucré que le pain).", { after: 100 }),
    sub("Le plan des RÈGLES DE CLASSE (U4) :"),
    p("1. Je commence par Je ou Nous — 2. Un verbe au présent — 3. Court et clair, avec la majuscule et le point : « Je lève la main pour parler. »", { after: 100 }),
    sub("Le plan du RÉCIT DE LA JOURNÉE (U3 et U5) :"),
    p("1. Le jour et le lieu (Samedi, je vais à la ferme.) — 2. D'abord + une action — 3. Ensuite + une action — 4. Enfin + la fin de la journée.", { after: 100 }),
    sub("Le plan du RÉCIT AU PASSÉ (U6) :"),
    pr([run("1. LE DÉBUT ", { bold: true, color: C.BLUE }), run("(Hier, je suis allé au marché avec…) → ")], { after: 40 }),
    pr([run("2. LES ACTIONS ", { bold: true, color: C.BLUE }), run("(D'abord, j'ai acheté… Puis j'ai marchandé…) → ")], { after: 40 }),
    pr([run("3. LA FIN ", { bold: true, color: C.GREEN }), run("(Enfin, j'ai payé et j'ai dit merci.)")], { after: 100 }),
    sub("La routine du petit écrivain, pour tous les textes :"),
    p("1. Je PRÉPARE (mes idées, mes mots). 2. J'ÉCRIS au brouillon (des phrases complètes, majuscule et point). 3. Je RELIS avec ma grille (les verbes, les accents, les mots-outils). 4. Je RECOPIE au propre, avec soin."),
  ];
}

// ============ ANNEXE 3 — CONJUGAISON ============
function conjTable(title, forms, note) {
  // forms: [ [pronom, présent, imparfait, futur proche, passé composé] x6 ]
  const hd = new TableRow({ children: [
    cell([fp([run(title, { bold: true, color: COLOR, size: SZ.FICHE })])], { w: 1400, shade: SHADE }),
    cell([fp([run("PRÉSENT", { bold: true, size: SZ.FICHE })])], { w: 2000, shade: SHADE }),
    cell([fp([run("IMPARFAIT", { bold: true, size: SZ.FICHE })])], { w: 2200, shade: SHADE }),
    cell([fp([run("FUTUR PROCHE", { bold: true, size: SZ.FICHE })])], { w: 2500, shade: SHADE }),
    cell([fp([run("PASSÉ COMPOSÉ", { bold: true, size: SZ.FICHE })])], { w: 2300, shade: SHADE }),
  ]});
  const rows = forms.map(f => new TableRow({ children: f.map((t, i) =>
    cell([fp([run(t, { bold: i === 0, size: SZ.FICHE })])], {})) }));
  return [
    new Table({ width: { size: 10400, type: WidthType.DXA }, rows: [hd, ...rows] }),
    ...(note ? [pr([run(note, { italic: true, color: C.GRAY, size: 22 })], { after: 80 })] : [p("", { after: 100 })]),
  ];
}
function annexe3() {
  return [
    ...head("annex3", "ANNEXE 3 — TOUTE LA CONJUGAISON DE L'ANNÉE",
      "Les verbes du programme aux quatre temps étudiés — à consulter à chaque rédaction."),
    sub("Quand utiliser chaque temps ?"),
    mot("le PRÉSENT", "maintenant, ou ce qui est toujours vrai : Hery mange du riz. Le coq chante le matin."),
    mot("l'IMPARFAIT", "décrire dans le passé : avant, grand-mère habitait au village."),
    mot("le FUTUR PROCHE", "ce qui va bientôt arriver : aller + infinitif — demain, je vais voir les poussins."),
    mot("le PASSÉ COMPOSÉ", "raconter ce qui est déjà passé : avoir + participe — hier, j'ai acheté des bananes."),
    p("", { after: 100 }),
    ...conjTable("ÊTRE", [
      ["je", "suis", "étais", "vais être", "ai été"],
      ["tu", "es", "étais", "vas être", "as été"],
      ["il/elle", "est", "était", "va être", "a été"],
      ["nous", "sommes", "étions", "allons être", "avons été"],
      ["vous", "êtes", "étiez", "allez être", "avez été"],
      ["ils/elles", "sont", "étaient", "vont être", "ont été"],
    ]),
    ...conjTable("AVOIR", [
      ["j'/je", "ai", "avais", "vais avoir", "ai eu"],
      ["tu", "as", "avais", "vas avoir", "as eu"],
      ["il/elle", "a", "avait", "va avoir", "a eu"],
      ["nous", "avons", "avions", "allons avoir", "avons eu"],
      ["vous", "avez", "aviez", "allez avoir", "avez eu"],
      ["ils/elles", "ont", "avaient", "vont avoir", "ont eu"],
    ]),
    ...conjTable("FAIRE", [
      ["je", "fais", "faisais", "vais faire", "ai fait"],
      ["tu", "fais", "faisais", "vas faire", "as fait"],
      ["il/elle", "fait", "faisait", "va faire", "a fait"],
      ["nous", "faisons", "faisions", "allons faire", "avons fait"],
      ["vous", "faites", "faisiez", "allez faire", "avez fait"],
      ["ils/elles", "font", "faisaient", "vont faire", "ont fait"],
    ]),
    ...conjTable("ALLER", [
      ["je", "vais", "allais", "vais aller", "suis allé"],
      ["tu", "vas", "allais", "vas aller", "es allé"],
      ["il/elle", "va", "allait", "va aller", "est allé(e)"],
      ["nous", "allons", "allions", "allons aller", "sommes allés"],
      ["vous", "allez", "alliez", "allez aller", "êtes allés"],
      ["ils/elles", "vont", "allaient", "vont aller", "sont allé(e)s"],
    ], "Le petit secret d'ALLER : au passé composé, il se conjugue avec être — je suis allé au marché."),
    ...conjTable("JOUER (-er)", [
      ["je", "joue", "jouais", "vais jouer", "ai joué"],
      ["tu", "joues", "jouais", "vas jouer", "as joué"],
      ["il/elle", "joue", "jouait", "va jouer", "a joué"],
      ["nous", "jouons", "jouions", "allons jouer", "avons joué"],
      ["vous", "jouez", "jouiez", "allez jouer", "avez joué"],
      ["ils/elles", "jouent", "jouaient", "vont jouer", "ont joué"],
    ]),
    ...conjTable("ACHETER (-er)", [
      ["j'/je", "achète", "achetais", "vais acheter", "ai acheté"],
      ["tu", "achètes", "achetais", "vas acheter", "as acheté"],
      ["il/elle", "achète", "achetait", "va acheter", "a acheté"],
      ["nous", "achetons", "achetions", "allons acheter", "avons acheté"],
      ["vous", "achetez", "achetiez", "allez acheter", "avez acheté"],
      ["ils/elles", "achètent", "achetaient", "vont acheter", "ont acheté"],
    ]),
    sub("Les trois amis de l'unité 3 (à la deuxième personne) :"),
    pr([run("vouloir → tu veux ; pouvoir → tu peux ; devoir → tu dois.", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("Les participes passés à connaître par cœur :"),
    pr([run("les verbes en -er → é ", { bold: true }), run("(acheté, joué, payé, marchandé, demandé) ; "),
        run("et les spéciaux : ", { bold: true }), run("pris (prendre), vendu (vendre), fait (faire), eu (avoir), été (être).", { bold: true, color: C.RED })], { after: 60 }),
    pr([run("Le secret du futur proche : ", { bold: true, color: C.RED }),
        run("je conjugue seulement "), run("aller", { bold: true }),
        run(" — le deuxième verbe reste à l'infinitif : nous allons manger.")]),
  ];
}

// ============ ANNEXE 4 — FLASHCARDS ET JEUX ============
function annexe4() {
  const card = (recto, verso) => new Table({
    width: { size: 10400, type: WidthType.DXA },
    rows: [new TableRow({ children: [
      cell([p([run(recto, { bold: true, size: SZ.FICHE })], { center: true, after: 20 })], { w: 5200, shade: "FDF2E9" }),
      cell([p([run(verso, { italic: true, size: SZ.FICHE })], { center: true, after: 20 })], { w: 5200 }),
    ]})],
  });
  return [
    ...head("annex4", "ANNEXE 4 — FLASHCARDS ET JEUX DE CLASSE",
      "À découper ou à recopier : le recto pour la question, le verso pour la réponse."),
    p([run("Unité 1 — Les aliments :", { bold: true, color: "D35400" })], { after: 40 }),
    card("sucré, salé, aigre, amer", "les quatre goûts : le gâteau, le poisson séché, le citron, le café"),
    card("plus … que / moins … que / aussi … que", "les comparatifs : le gâteau est plus sucré que le pain"),
    card("je suis, j'ai, je fais, je mange", "être, avoir, faire et les verbes en -er au présent"),
    card("an, en, am, em / on, om", "les lettres des sons [ã] (maman) et [õ] (le bonbon)"),
    p([run("Unité 2 — La famille élargie :", { bold: true, color: "884EA0" })], { after: 40 }),
    card("l'oncle, la tante, le cousin, la nièce", "la famille élargie autour de l'arbre généalogique"),
    card("il, elle, ils, elles", "les pronoms qui remplacent les personnes"),
    card("mon, ma, mes — ton, ta, tes — son, sa, ses", "les adjectifs possessifs"),
    card("j'étais, j'avais, je faisais, j'habitais", "l'imparfait : avant, grand-mère habitait au village"),
    p([run("Unité 3 — Le temps :", { bold: true, color: "2471A3" })], { after: 40 }),
    card("le matin, à midi, l'après-midi, le soir", "les moments de la journée"),
    card("le … ou la … ?", "le genre : le cahier (masculin), la maison (féminin)"),
    card("sujet + verbe + le reste", "l'ordre des mots dans la phrase simple"),
    card("tu veux, tu peux, tu dois", "vouloir, pouvoir, devoir à la deuxième personne"),
    p([run("Unité 4 — L'environnement scolaire :", { bold: true, color: "148F77" })], { after: 40 }),
    card("qui ? que ? où ?", "les questions : la personne, la chose, le lieu"),
    card("Quelle belle classe ! Comme tu lis bien !", "la phrase exclamative, avec son point !"),
    card("Range ! Efface ! Prends ! Fais !", "les consignes : le verbe passe devant"),
    card("entoure, souligne, complète, relie, recopie, barre", "les consignes des exercices"),
    p([run("Unité 5 — La ferme :", { bold: true, color: "A04000" })], { after: 40 }),
    card("le coq / la poule / le poussin", "le mâle, la femelle, le petit"),
    card("ne … pas, ne … plus, ne … jamais", "la négation : les deux gardiens autour du verbe"),
    card("je vais donner, nous allons voir", "le futur proche : aller + infinitif"),
    card("un, um / u", "les lettres des sons [œ̃] (brun) et [y] (la plume)"),
    p([run("Unité 6 — Le marché :", { bold: true, color: "B7950B" })], { after: 40 }),
    card("C'est combien ?", "la question du prix — et on marchande poliment !"),
    card("j'ai acheté, elle a payé", "le passé composé : avoir + participe en é"),
    card("j'ai pris, elle a vendu", "les deux participes têtus"),
    card("hier, d'abord, puis, enfin", "les mots du temps pour raconter au passé"),
    p("", { after: 100 }),
    sub("Cinq jeux pour la classe :"),
    mot("1. Le jeu des cris", "un élève fait un cri d'animal (cocorico !) ; la classe devine et fait une phrase : « C'est le coq ! »"),
    mot("2. Le béret des mots", "deux équipes, des étiquettes au centre ; l'enseignant dit une définition, le premier arrivé ramasse le mot."),
    mot("3. Le mémory", "les flashcards retournées ; retrouve la paire recto/verso."),
    mot("4. Le jeu du NON", "« La poule nage ! » → « Non ! La poule ne nage pas ! » — le plus rapide gagne."),
    mot("5. Le marché de la classe", "un étal, des billets en papier : on joue le client et la marchande, avec les cinq étapes de l'achat."),
  ];
}

// ============ ANNEXE 5 — LES STRATÉGIES DE LECTURE (PE) ============
function annexe5() {
  return [
    ...head("annex5", "ANNEXE 5 — LES STRATÉGIES DE LECTURE",
      "L'annexe officielle du programme — les techniques travaillées pendant l'année."),
    sub("1. La modélisation de la lecture :"),
    p("L'enseignant lit d'abord le texte à haute voix, de façon exemplaire : les apprenants écoutent comment il respire, où il s'arrête, comment sa voix monte et descend. Puis ils l'imitent."),
    p([run("Utilisée à chaque séance de lecture — on apprend d'abord avec ses oreilles.", { italic: true, color: C.GRAY })], { after: 100 }),
    sub("2. L'écoute et lecture :"),
    p("Les apprenants suivent le texte des yeux pendant que l'enseignant (ou un camarade) le lit : l'œil associe chaque mot entendu au mot écrit."),
    p([run("Utilisée en compréhension écrite, avant la lecture individuelle.", { italic: true, color: C.GRAY })], { after: 100 }),
    sub("3. La lecture en écho :"),
    p("L'enseignant lit une phrase ; les apprenants relisent aussitôt la même phrase en imitant l'intonation et l'expression."),
    p([run("Très utile pour les grandes phrases des sons et pour le dialogue du marché.", { italic: true, color: C.GRAY })], { after: 100 }),
    sub("4. La lecture à l'unisson :"),
    p("Toute la classe lit le même passage en même temps, d'une seule voix, au même rythme : personne ne se presse, personne ne reste en arrière."),
    p([run("Idéale pour les textes courts : la comptine de la ferme, les règles de la classe.", { italic: true, color: C.GRAY })], { after: 100 }),
    sub("5. La lecture en chaîne :"),
    p("Chaque apprenant lit une phrase, l'un après l'autre, sans casser le rythme : je suis le texte du doigt et je suis prêt quand mon tour arrive."),
    p([run("Travaillée aux séances de lecture-fluidité de chaque unité.", { italic: true, color: C.GRAY })], { after: 100 }),
    sub("6. Les groupes de souffle et la ponctuation :"),
    p("Je lis les mots par petits paquets qui vont ensemble, sans couper au milieu ; je respire à la virgule, je m'arrête au point, ma voix monte au point d'interrogation."),
    p([run("Posée dès l'unité 1 — et utilisée toute l'année.", { italic: true, color: C.GRAY })], { after: 100 }),
    sub("Le rappel du lecteur, pour toujours :"),
    pr([run("FLUIDITÉ ", { bold: true, color: C.BLUE }), run("(je lis sans hésiter) + "),
        run("PRÉCISION ", { bold: true, color: C.BLUE }), run("(je lis tous les mots) + "),
        run("EXPRESSIVITÉ ", { bold: true, color: C.BLUE }), run("(ma voix vit) "),
        run("= une lecture qui donne envie d'écouter.", { bold: true })]),
  ];
}

// ============ ANNEXE 6 — ORTHOGRAPHE ET SONS DE L'ANNÉE ============
function annexe6() {
  const rowS = (a, b, c, opts = {}) => new TableRow({ children: [
    cell([fp([run(a, { bold: true, size: SZ.FICHE })])], { w: 1800, shade: opts.h ? SHADE : undefined }),
    cell([fp([run(b, { bold: opts.h, size: SZ.FICHE })])], { w: 3200, shade: opts.h ? SHADE : undefined }),
    cell([fp([run(c, { bold: opts.h, size: SZ.FICHE })])], { w: 5400, shade: opts.h ? SHADE : undefined }),
  ]});
  return [
    ...head("annex6", "ANNEXE 6 — ORTHOGRAPHE ET SONS DE L'ANNÉE",
      "Les huit maisons des sons et les règles anti-fautes."),
    sub("Les huit maisons des sons de l'année :"),
    new Table({ width: { size: 10400, type: WidthType.DXA }, rows: [
      rowS("LE SON", "SES LETTRES", "MES MOTS MODÈLES", { h: true }),
      rowS("[ã]", "an, en, am, em", "maman, les parents, la chambre, novembre"),
      rowS("[õ]", "on, om", "le bonbon, la maison, le crayon, compter"),
      rowS("[œ]", "e, eu, œu", "le neveu, la fleur, le cœur, la sœur"),
      rowS("[ɛ̃]", "in, ain, ein", "le cousin, la main, le lapin, la peinture"),
      rowS("[o]", "o, eau, au, ô", "le stylo, le tableau, aujourd'hui, tôt"),
      rowS("[u]", "ou", "la cour, la poule, le jour, la trousse"),
      rowS("[œ̃]", "un, um", "un, lundi, brun, le parfum"),
      rowS("[y]", "u", "la plume, le mur, la laitue, une"),
    ]}),
    p("", { after: 120 }),
    sub("1. La phrase sans fautes :"),
    p("• je commence par la MAJUSCULE et je termine par le point ( . ? ! ) ;"),
    p("• la question finit par ? et l'exclamation par !", { after: 100 }),
    sub("2. Le genre et le pluriel :"),
    p("• j'apprends chaque nom avec son petit mot : le cahier, la maison, les poules ;"),
    p("• au pluriel, j'ajoute le s : la poule → les poules (le s est souvent muet !).", { after: 100 }),
    sub("3. La négation (unité 5) :"),
    p("• les deux gardiens encadrent le verbe : le canard ne vole pas ;"),
    pr([run("• attention ! ", { bold: true, color: C.RED }),
        run("devant a, e, i, o, u, ne devient n' : le lapin n'aime pas la viande.")], { after: 100 }),
    sub("4. Le futur proche sans fautes (unité 5) :"),
    p("• je conjugue aller, le deuxième verbe ne change jamais : nous allons voir les poussins.", { after: 100 }),
    sub("5. Le passé composé sans fautes (unité 6) :"),
    p("• avoir + participe : j'ai acheté (jamais « j'ai acheter » !) ;"),
    pr([run("• attention ! ", { bold: true, color: C.RED }),
        run("les deux têtus : j'ai pris, elle a vendu.")], { after: 100 }),
    sub("6. Les petits mots qui se ressemblent (spécial dictée !) :"),
    mot("a / à", "a = verbe avoir (la poule a cinq poussins) ; à = petit mot invariable (à l'école)."),
    mot("est / et", "est = verbe être (le poisson est frais) ; et = il ajoute (Tiana et Hery)."),
    mot("ou / où", "ou = choix (sucré ou salé) ; où = le lieu (Où est ton cahier ?)."),
    mot("son / sont", "son = à lui (son panier) ; sont = verbe être (les bananes sont mûres)."),
    mot("la / là", "la = devant le nom (la cour) ; là = le lieu (il est là)."),
  ];
}

// ============ PAGE FINALE ============
function pageFinale() {
  return [
    bookmarkTitle("final", "FÉLICITATIONS !", { bold: true, size: 48, center: true, after: 120 }),
    p([run("72 séances, 6 thématiques, 8 sons, 4 temps… TU AS TOUT TRAVERSÉ !", { bold: true, color: COLOR, size: 32 })], { center: true, after: 140 }),
    img("u6_marche.png", 300, 502 / 900),
    p([run("Tiana, Hery et grand-père Rabe sont fiers de toi !", { bold: true, size: 28 })], { center: true, after: 140 }),
    p("Cette année, tu as appris à parler des aliments et à comparer les goûts ;"),
    p("à présenter ta famille élargie autour de l'arbre généalogique ;"),
    p("à raconter ta journée, du matin au soir ;"),
    p("à vivre à l'école avec ses règles, ses questions et ses consignes ;"),
    p("à dire non, et à dire demain, à la ferme des poussins ;"),
    p("et à raconter hier, au marché, comme un vrai conteur — d'abord, puis, enfin.", { after: 140 }),
    pr([run("Avec l'autonomie et le sens de la responsabilité, ", { bold: true, size: 28 }),
        run("continue de lire, d'écrire et de raconter !", { bold: true, color: C.RED, size: 28 })], { center: true, after: 160 }),
    p([run("Ce manuel se termine, mais le français, lui, t'accompagne chaque jour :", { italic: true, color: C.GRAY })], { center: true, after: 40 }),
    p([run("quelque part, une nouvelle histoire t'attend — et c'est toi qui vas la raconter.", { italic: true, color: C.GRAY })], { center: true, after: 160 }),
    p([run("FIN DU MANUEL — COLLECTION J-LEARN — FRANÇAIS T3", { bold: true, color: COLOR, size: 26 })], { center: true }),
  ];
}

module.exports = function annexes() {
  return [
    ...annexe1(), pageBreak(),
    ...annexe2(), pageBreak(),
    ...annexe3(), pageBreak(),
    ...annexe4(), pageBreak(),
    ...annexe5(), pageBreak(),
    ...annexe6(), pageBreak(),
    ...pageFinale(),
  ];
};
