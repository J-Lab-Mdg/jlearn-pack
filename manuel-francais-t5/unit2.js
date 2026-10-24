// Français T5 — UNITÉ 2 — LE VOYAGE (10 leçons + révision + test) — Séances 13 à 24 / 72
const B = require("./builders");
const { C, SZ, run, p, pr, kw, pAns, fp, fiche, sectionRow, stepRow,
        unitBanner, img, pageBreak, lessonTitle, sub, iCan, cell } = B;
const { Table, TableRow, WidthType } = require("docx");

const COLOR = "1F618D"; // bleu voyage
const SHADE = "D6EAF8";
const TOTAL = 72;
const META = (title, slo, session, materials) => ({
  theme: "UNITÉ 2 — LE VOYAGE", title, slo,
  values: "autonomie, confiance en soi", session, materials,
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

// brochure d'écoute (S13)
function brochureMorondava() {
  return box("PASSAGE D'ÉCOUTE — Brochure « Destination Morondava »", [
    p("Bienvenue à Morondava, la perle de l'Ouest ! Notre ville se trouve au bord du canal du Mozambique, à environ 700 kilomètres d'Antananarivo. Pour venir, c'est facile : l'autocar part chaque matin de la gare routière de la capitale ; les plus pressés prennent l'avion jusqu'au petit aéroport de la ville."),
    p("Que peut-on découvrir à Morondava ? D'abord, la célèbre allée des baobabs : des arbres géants et majestueux qui se dressent près de la route, à quelques kilomètres de la ville. Ensuite, la plage de sable doré, où les pirogues des pêcheurs rentrent au coucher du soleil. Enfin, les villages des environs, que l'on visite en charrette ou en tuk-tuk."),
    p("Nos hôtels confortables se trouvent à côté de la plage ; les restaurants servent des poissons frais et des fruits tropicaux. Pensez à la réservation pendant les grandes vacances : les billets partent vite ! Préparez votre budget, votre chapeau et votre appareil photo… Morondava vous attend !", { after: 40 }),
  ]);
}
// brochure de lecture (S15)
function brochureNosyBe() {
  return box("TEXTE DE LECTURE — Brochure « Nosy Be, l'île aux parfums »", [
    p("Au nord-ouest de Madagascar se trouve Nosy Be, la plus célèbre des îles malgaches. On y arrive en avion, ou en bateau depuis le port d'Ankify : la traversée dure une petite heure sur une mer calme et turquoise."),
    p("L'île offre des paysages magnifiques : des plages de sable blanc, des collines couvertes d'ylang-ylang, des vallées vertes et parfumées. Dans la réserve de Lokobe, on aperçoit des lémuriens minuscules et des caméléons multicolores. Les visiteurs curieux prennent la pirogue pour les îlots voisins : Nosy Komba, l'île aux lémuriens, et Nosy Tanikely, un jardin de corail idéal pour nager."),
    p("En ville, à Hell-Ville, les hôtels principaux se trouvent près du port ; les agences de voyage organisent des excursions originales ; les restaurants régalent les gourmands de poissons grillés. Le soir, sur la plage d'Ambatoloaka, le coucher du soleil est un spectacle royal."),
    p("Nosy Be, c'est le paradis à portée de pirogue : préparez vos billets, votre budget… et vos rêves !", { after: 40 }),
  ]);
}

// ---------- page d'ouverture ----------
function opening() {
  return [
    unitBanner("UNITÉ 2 — LE VOYAGE", COLOR, "unit2"),
    p("", { after: 100 }),
    p([run("En route : l'île est à nous !", { bold: true, color: COLOR, size: 44 })], { center: true, after: 120 }),
    img("u2_voyage.png", 440, 768 / 1376),
    p([run("Dans cette unité, je vais apprendre à :", { bold: true })], { after: 60 }),
    p("• comprendre une brochure de voyage, à l'oral et à l'écrit ;"),
    p("• nommer les établissements, les moyens de transport et les mots du paysage ;"),
    p("• employer les prépositions de lieu et les adjectifs qualificatifs (pluriel en -aux !) ;"),
    p("• conjuguer aller, faire, venir, prendre, mettre au présent et au conditionnel ;"),
    p("• décrire un lieu touristique à l'oral et comparer deux destinations ;"),
    p("• rédiger ma propre brochure de voyage et la lire avec expressivité.", { after: 120 }),
    pr([run("Type de texte de l'unité : ", { bold: true }),
        run("le texte DESCRIPTIF", { bold: true, color: COLOR }),
        run(" — au service du voyage : décrire une destination pour donner envie !")], { after: 80 }),
    pr([run("Valeurs à véhiculer : ", { bold: true }),
        run("l'autonomie et la confiance en soi.", { italic: true })], { after: 80 }),
  ];
}

// ---------- S13 — Compréhension orale : la brochure ----------
function ficheS13() {
  const meta = META("Compréhension orale : la brochure « Destination Morondava »",
    "À la fin de la séance, l'apprenant détermine le sens des mots inconnus et repère les informations essentielles d'une brochure de voyage entendue.",
    "1 / 12", "texte de la brochure, photographies (baobabs, plage, taxi-brousse)");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Retour sur l'unité 1 : citez un mot de la protection de l'environnement et un mot de transition.")],
      [fp("Répondent."),
       fp("R.A. : reboisement, préservation… ; d'abord, ensuite, enfin…")],
      "Travail collectif", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route", "(pré-écoute)"],
      [fp("Montrez la photo des baobabs : qui connaît cet endroit ? Avez-vous déjà voyagé loin de chez vous ? Comment ? Aujourd'hui, une brochure nous invite au voyage.")],
      [fp("Observent, partagent leurs expériences.")], "Brainstorming", "Photographies"),
    stepRow(["2. Présentation"],
      [fp("Annonce : « Compréhension orale : la brochure Destination Morondava ». Une brochure, c'est un petit document qui présente un lieu pour donner envie de le visiter.")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation", "(1re écoute)"],
      [fp("Lecture expressive de la brochure. Questions globales : Quel lieu est présenté ? Où se situe-t-il ?")],
      [fp("Écoutent. Répondent."),
       fp("R.A. : Morondava ; au bord du canal du Mozambique, à 700 km d'Antananarivo, dans l'Ouest.")],
      "Écoute active", "Texte de la brochure"),
    stepRow(["4. Analyse", "(2e écoute)"],
      [fp("Relecture. Mots difficiles au tableau : gare routière, réservation, budget, majestueux. Faites déduire le sens par le contexte. Questions détaillées : Que peut-on y découvrir ? Quelles activités peut-on y pratiquer ? Comment y va-t-on ?")],
      [fp("Déduisent le sens, répondent."),
       fp("R.A. : gare routière = l'endroit d'où partent les autocars ; réservation = garder sa place à l'avance ; on découvre l'allée des baobabs, la plage, les villages ; on y va en autocar ou en avion.")],
      "Questionnement progressif", "Tableau"),
    stepRow(["5. Synthèse"],
      [fp("Repérons les informations essentielles dans la grille : LIEU / PAYSAGES / MOYENS D'ACCÈS / ACTIVITÉS / SERVICES. Information principale (Morondava est une belle destination) et informations secondaires.")],
      [fp("Complètent la grille collectivement."),
       fp("R.A. : lieu → Morondava ; paysages → baobabs, plage ; accès → autocar, avion ; activités → visites, photos ; services → hôtels, restaurants, réservation.")],
      "Travail collectif", "Grille au tableau"),
    stepRow(["6. Entraînement"],
      [fp("En binômes : résumez la brochure en une ou deux phrases avec vos propres mots.")],
      [fp("Résument."),
       pAns("R.A. : Morondava, dans l'Ouest, est une destination magnifique : on y admire l'allée des baobabs et la plage, et on y va en autocar ou en avion.", ["Morondava"], { size: SZ.FICHE })],
      "Binômes", "----"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("1. Quel lieu la brochure présente-t-elle ?"),
       fp("2. Cite deux curiosités à découvrir."),
       fp("3. Cite deux moyens d'y aller."),
       fp("4. Que veut dire « réservation » ?")],
      [fp("Répondent individuellement."),
       pAns("R.A. : 1. Morondava — 2. l'allée des baobabs, la plage — 3. l'autocar, l'avion — 4. garder sa place à l'avance.", ["Morondava", "baobabs"], { size: SZ.FICHE })],
      "Travail individuel", "----"),
  ];
  return fiche(13, TOTAL, meta, rows, "s13");
}
function lessonS13() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 13", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("ÉCOUTER UNE BROCHURE DE VOYAGE", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    brochureMorondava(),
    p("", { after: 80 }),
    sub("La brochure de voyage :"),
    p("• C'est un document qui présente une destination pour donner envie de la visiter."),
    p("• J'y cherche les informations essentielles : le lieu, les paysages, les moyens d'accès, les activités, les curiosités, les services.", { after: 80 }),
    sub("Mes premiers mots du voyage :"),
    mot("la gare routière", "l'endroit d'où partent les autocars"),
    mot("la réservation", "garder sa place à l'avance"),
    mot("le billet", "le papier qui prouve que j'ai payé ma place"),
    mot("le budget", "l'argent prévu pour le voyage"),
    mot("majestueux", "grand et magnifique, comme un roi"),
  ];
}

// ---------- S14 — Lexique : transports, établissements, préparation ----------
function ficheS14() {
  const meta = META("Lexique : les moyens de transport, les établissements et la préparation du voyage",
    "À la fin de la séance, l'apprenant nomme les établissements du voyage, les moyens de transport ruraux et urbains et le vocabulaire de la préparation du voyage.",
    "2 / 12", "étiquettes, images des moyens de transport, trois affiches");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Quel lieu présentait la brochure de la séance 13 ? Citez un moyen d'y aller.")],
      [fp("Répondent."),
       fp("R.A. : Morondava ; l'autocar ou l'avion.")],
      "Travail collectif", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Jeu du bruiteur : j'imite un bruit (vroum du bus, clochette du cyclopousse, pagaie de la pirogue…) ; devinez le moyen de transport !")],
      [fp("Devinent.")], "Jeu d'écoute", "----"),
    stepRow(["2. Présentation"],
      [fp("Annonce : « Les mots du voyage : transports, établissements, préparation ». Trois familles de mots — trois affiches !")],
      [fp("Écoutent.")], "Travail collectif", "Affiches"),
    stepRow(["3. Observation"],
      [fp("Famille 1 — les TRANSPORTS. À la campagne (rural) : la charrette, la pirogue, le motoculteur. En ville (urbain) : le cyclopousse, le taxi, le bus, la moto-taxi, le taxi-be, le tuk-tuk, l'autocar. Chaque image est placée sous la bonne colonne.")],
      [fp("Classent les images, répètent les mots."),
       fp("R.A. : rural → charrette, pirogue, motoculteur ; urbain → cyclopousse, taxi, bus, moto-taxi, taxi-be, tuk-tuk, autocar.")],
      "Observation guidée", "Images"),
    stepRow(["4. Analyse"],
      [fp("Famille 2 — les ÉTABLISSEMENTS : la gare routière, le port, l'aéroport, l'hôtel, le restaurant, l'agence de voyage, le stationnement, les sites touristiques. Qui fait quoi ? Associez : « Je dors à … », « Je prends le bateau au … ». Famille 3 — la PRÉPARATION : la réservation, le billet, le budget, les frais de transport, les accessoires de voyage (sac, chapeau, gourde…). C'est un CHAMP LEXICAL : toutes ces familles appartiennent au grand thème du voyage !")],
      [fp("Associent, découvrent la notion de champ lexical."),
       fp("R.A. : je dors à l'hôtel ; je prends le bateau au port ; champ lexical = famille de mots autour d'un même thème.")],
      "Observation et manipulation", "Étiquettes"),
    stepRow(["5. Synthèse"],
      [fp("Trace écrite : le soleil du champ lexical « VOYAGE » au centre, trois rayons (transports / établissements / préparation) avec leurs mots.")],
      [fp("Recopient le schéma.")], "Travail collectif", "Cahiers"),
    stepRow(["6. Entraînement"],
      [fp("Complétez : 1. Pour traverser le fleuve, les villageois prennent la … . 2. L'avion décolle de l'… . 3. En ville, le … transporte beaucoup de passagers. 4. Avant de partir, je prépare mon … et j'achète mon … .")],
      [fp("Complètent."),
       pAns("R.A. : 1. pirogue — 2. aéroport — 3. taxi-be (ou bus) — 4. budget, billet.", ["pirogue", "aéroport", "taxi-be", "budget"], { size: SZ.FICHE })],
      "Travail individuel", "----"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("Classe ces mots dans le bon panier (RURAL / URBAIN / PRÉPARATION) : charrette, tuk-tuk, réservation, motoculteur, cyclopousse, billet.")],
      [fp("Classent."),
       pAns("R.A. : RURAL → charrette, motoculteur ; URBAIN → tuk-tuk, cyclopousse ; PRÉPARATION → réservation, billet.", ["RURAL", "URBAIN"], { size: SZ.FICHE })],
      "Travail individuel", "----"),
  ];
  return fiche(14, TOTAL, meta, rows, "s14");
}
function lessonS14() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 14", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("LES MOTS DU VOYAGE", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    sub("Les moyens de transport à Madagascar :"),
    pr([run("À la campagne (rural) : ", { bold: true }),
        run("la charrette, la pirogue, le motoculteur", { bold: true, color: C.BLUE })], { after: 40 }),
    pr([run("En ville (urbain) : ", { bold: true }),
        run("le cyclopousse, le taxi, le bus, la moto-taxi, le taxi-be, le tuk-tuk, l'autocar", { bold: true, color: C.BLUE })], { after: 80 }),
    sub("Les établissements du voyage :"),
    mot("la gare routière", "les autocars partent d'ici"),
    mot("le port", "les bateaux et les pirogues"),
    mot("l'aéroport", "les avions"),
    mot("l'hôtel", "pour dormir"),
    mot("le restaurant", "pour manger"),
    mot("l'agence de voyage", "elle organise le voyage"),
    mot("les sites touristiques", "les endroits à visiter"),
    p("", { after: 60 }),
    sub("La préparation du voyage :"),
    pr([run("la réservation, le billet, le budget, les frais de transport, les accessoires de voyage", { bold: true, color: C.BLUE })], { after: 80 }),
    sub("Le champ lexical :"),
    p("Tous ces mots appartiennent au même grand thème : c'est le champ lexical du voyage. Un champ lexical = une famille de mots autour d'un même thème."),
  ];
}

// ---------- S15 — Compréhension écrite : Nosy Be ----------
function ficheS15() {
  const meta = META("Compréhension écrite : la brochure « Nosy Be, l'île aux parfums »",
    "À la fin de la séance, l'apprenant repère les informations essentielles d'une brochure écrite, identifie les champs lexicaux et reconnaît les caractéristiques du texte descriptif.",
    "3 / 12", "texte photocopié ou recopié, carte de Madagascar");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Dictée éclair : la gare routière, la pirogue, le billet, l'aéroport.")],
      [fp("Écrivent sur l'ardoise.")],
      "Procédé La Martinière", "Ardoises"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route", "(pré-lecture)"],
      [fp("Sur la carte : où est Nosy Be ? Que savez-vous de cette île ?")],
      [fp("Situent l'île, partagent.")], "Brainstorming", "Carte"),
    stepRow(["2. Présentation"],
      [fp("Distribution du texte. Lecture silencieuse, puis chasse aux trésors : informations et champs lexicaux.")],
      [fp("Lisent silencieusement.")], "Lecture silencieuse", "Texte"),
    stepRow(["3. Observation", "(lecture analytique)"],
      [fp("Questions : Quel lieu est présenté ? Où se situe-t-il ? Que peut-on y découvrir ? Quelles activités peut-on y pratiquer ? Repérez : lieu, paysages, moyens d'accès, activités, curiosités, services.")],
      [fp("Répondent en citant le texte."),
       fp("R.A. : Nosy Be, au nord-ouest ; plages, collines d'ylang-ylang, réserve de Lokobe ; avion ou bateau ; nager, excursions ; hôtels, agences, restaurants.")],
      "Questionnement progressif", "Texte"),
    stepRow(["4. Analyse"],
      [fp("Chasse aux champs lexicaux : soulignez en bleu les mots du TRANSPORT (avion, bateau, port, traversée, pirogue), en vert ceux du PAYSAGE (plages, collines, vallées, mer), en rouge ceux du TOURISME (visiteurs, excursions, hôtels, agences). Puis : ce texte est-il descriptif ? Preuves ! (adjectifs : turquoise, magnifiques, parfumées ; indications de lieu ; présent de description).")],
      [fp("Soulignent, classent, justifient."),
       fp("R.A. : trois champs lexicaux retrouvés ; texte descriptif car il décrit l'île avec des adjectifs et des indications de lieu.")],
      "Repérage et annotation", "Texte, crayons de couleur"),
    stepRow(["5. Synthèse"],
      [fp("Information principale : Nosy Be est une destination de rêve. Informations secondaires : les îlots, les poissons grillés… Récapitulons la grille des informations essentielles.")],
      [fp("Distinguent, récapitulent.")], "Travail collectif", "Tableau"),
    stepRow(["6. Entraînement"],
      [fp("Résumé en une ou deux phrases avec vos propres mots.")],
      [fp("Résument par écrit."),
       pAns("R.A. : Nosy Be est une île magnifique du nord-ouest : plages blanches, lémuriens et couchers de soleil attendent les visiteurs.", ["Nosy Be"], { size: SZ.FICHE })],
      "Travail individuel", "----"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("1. Comment arrive-t-on à Nosy Be ? 2. Cite deux paysages de l'île. 3. Relève deux mots du champ lexical du tourisme. 4. Relève un adjectif qualificatif qui valorise l'île.")],
      [fp("Répondent."),
       pAns("R.A. : 1. en avion ou en bateau — 2. plages de sable blanc, collines d'ylang-ylang — 3. excursions, hôtels — 4. magnifiques (ou turquoise, parfumées…).", ["en avion ou en bateau"], { size: SZ.FICHE })],
      "Travail individuel", "----"),
  ];
  return fiche(15, TOTAL, meta, rows, "s15");
}
function lessonS15() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 15", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("LIRE UNE BROCHURE : LES CHAMPS LEXICAUX", { bold: true, size: 36, color: COLOR })], { center: true, after: 140 }),
    brochureNosyBe(),
    p("", { after: 80 }),
    sub("Dans une brochure, je repère :"),
    p("• le lieu et sa situation — les paysages — les moyens d'accès — les activités — les curiosités — les services.", { after: 60 }),
    sub("Les champs lexicaux de la brochure :"),
    mot("le transport", "avion, bateau, port, traversée, pirogue"),
    mot("le paysage", "plages, collines, vallées, mer, îlots"),
    mot("le tourisme", "visiteurs, excursions, hôtels, agences de voyage"),
    p("", { after: 60 }),
    sub("C'est bien un texte descriptif :"),
    p("• des adjectifs qui valorisent : turquoise, magnifiques, parfumées, royal ;"),
    p("• des indications de lieu : au nord-ouest, près du port, sur la plage ;"),
    p("• le présent de description : l'île offre, les hôtels se trouvent."),
  ];
}

// ---------- S16 — Prépositions de lieu + CC de lieu ----------
function ficheS16() {
  const meta = META("Fonctionnement de la langue : les prépositions de lieu",
    "À la fin de la séance, l'apprenant relève les prépositions de lieu, précise leur rôle et les emploie pour situer les éléments d'une description.",
    "4 / 12", "corpus, un carton et une craie (pour la démonstration), images");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Citez un champ lexical de la brochure de Nosy Be et deux de ses mots.")],
      [fp("Répondent."),
       fp("R.A. : le transport → avion, port.")],
      "Travail collectif", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Démonstration : je pose la craie SUR le carton, SOUS le carton, DANS le carton, À CÔTÉ DU carton, PRÈS DU tableau, LOIN DE la porte. À chaque fois : où est la craie ?")],
      [fp("Répondent avec le petit mot de position."),
       fp("R.A. : sur, sous, dans, à côté de, près de, loin de.")],
      "Démonstration", "Carton, craie"),
    stepRow(["2. Présentation"],
      [fp("Annonce : « Les prépositions de lieu » — les petits mots qui placent les choses dans l'espace.")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation"],
      [fp("Corpus (brochures) : « Les hôtels se trouvent à côté de la plage. Dans la réserve de Lokobe, on aperçoit des lémuriens. Les baobabs se dressent près de la route. Nosy Be est loin de la capitale. Les bagages voyagent sur le toit du taxi-brousse. » Relevez les prépositions : quel est leur rôle ?")],
      [fp("Relèvent."),
       fp("R.A. : à côté de, dans, près de, loin de, sur ; elles situent les éléments.")],
      "Exploitation de texte", "Corpus"),
    stepRow(["4. Analyse"],
      [fp("La préposition fabrique un CC de lieu : préposition + nom = groupe qui répond à la question OÙ ? (dans la réserve, près de la route). Attention aux contractions : à côté DE + le port → à côté DU port ; près DE + les plages → près DES plages.")],
      [fp("Construisent des CC de lieu, manipulent les contractions."),
       fp("R.A. : à côté du marché, près des rizières, loin du village…")],
      "Observation et manipulation", "Tableau"),
    stepRow(["5. Synthèse"],
      [fp("Trace écrite : les six prépositions (dans, sur, sous, à côté de, près de, loin de) + la règle : préposition + nom = CC de lieu (question où ?). Dessin-mémo au tableau (la boîte et la bille).")],
      [fp("Recopient.")], "Travail collectif", "Cahiers"),
    stepRow(["6. Entraînement"],
      [fp("Complétez avec la bonne préposition : 1. Les pirogues dorment … la plage. 2. … la gare routière, les autocars attendent. 3. L'hôtel est … du port (tout proche). 4. Le village est … de la ville (il faut deux jours de marche !).")],
      [fp("Complètent."),
       pAns("R.A. : 1. sur — 2. Dans (ou À) — 3. près — 4. loin.", ["sur", "près", "loin"], { size: SZ.FICHE })],
      "Exercices guidés puis autonomes", "----"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("Écris trois phrases pour situer : ton école, le marché, la rivière — avec trois prépositions de lieu différentes.")],
      [fp("Rédigent."),
       pAns("R.A. (exemple) : Mon école se trouve près de l'église. Le marché est à côté de la gare routière. La rivière coule loin du village.", ["près de", "à côté de", "loin du"], { size: SZ.FICHE })],
      "Travail individuel", "----"),
  ];
  return fiche(16, TOTAL, meta, rows, "s16");
}
function lessonS16() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 16", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("LES PRÉPOSITIONS DE LIEU", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    p("Les prépositions de lieu placent les personnes et les choses dans l'espace.", { after: 80 }),
    sub("Les six prépositions à connaître :"),
    mot("dans", "à l'intérieur : dans la pirogue"),
    mot("sur", "au-dessus, posé : sur le toit du taxi-brousse"),
    mot("sous", "au-dessous : sous le grand manguier"),
    mot("à côté de", "juste à côté : à côté de la plage"),
    mot("près de", "pas loin : près de la route"),
    mot("loin de", "à grande distance : loin de la capitale"),
    p("", { after: 80 }),
    sub("La machine à CC de lieu :"),
    pr([run("préposition + nom = CC de lieu", { bold: true, color: C.RED }),
        run("  (il répond à la question OÙ ?)")], { after: 50 }),
    pr([run("Exemple : ", { bold: true }), run("Dans la réserve,", { bold: true, color: C.BLUE }),
        run(" on aperçoit des lémuriens "), run("près des arbres", { bold: true, color: C.BLUE }), run(".")], { after: 80 }),
    sub("Attention aux contractions !"),
    pr([run("de + le = du ", { bold: true, color: C.RED }), run("→ à côté du port   •   "),
        run("de + les = des ", { bold: true, color: C.RED }), run("→ près des plages")]),
  ];
}

// ---------- S17 — Adjectifs qualificatifs + pluriel en -aux ----------
function ficheS17() {
  const meta = META("Fonctionnement de la langue : les adjectifs qualificatifs et le pluriel en -aux",
    "À la fin de la séance, l'apprenant emploie des adjectifs qualificatifs pour valoriser un paysage et forme correctement le pluriel des adjectifs en -al.",
    "5 / 12", "corpus, étiquettes d'adjectifs, images de paysages");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Situez votre cahier avec trois prépositions différentes (sur, sous, dans…).")],
      [fp("Répondent en manipulant."),
       fp("R.A. : mon cahier est sur la table, dans mon sac…")],
      "Travail collectif", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Deux phrases au tableau : « Nosy Be est une île. » / « Nosy Be est une île magnifique, parfumée et accueillante. » Quelle phrase donne envie de voyager ? Pourquoi ?")],
      [fp("Comparent."),
       fp("R.A. : la deuxième ! Les adjectifs embellissent la description.")],
      "Travail collectif", "Tableau"),
    stepRow(["2. Présentation"],
      [fp("Annonce : « Les adjectifs qualificatifs : les habits du nom » — et leur pluriel spécial en -aux.")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation"],
      [fp("Corpus : « une mer calme et turquoise — des plages magnifiques — un spectacle royal — les sites principaux — un repas original ». L'adjectif s'accorde avec le nom : une plage magnifique → des plages magnifiques. Il dit COMMENT est la chose.")],
      [fp("Relèvent les adjectifs et les noms qu'ils qualifient."),
       fp("R.A. : calme/turquoise → mer ; magnifiques → plages ; royal → spectacle…")],
      "Exploitation de texte", "Corpus"),
    stepRow(["4. Analyse"],
      [fp("Le piège du pluriel : royal → des couchers de soleil ROYAUX ; principal → les hôtels PRINCIPAUX ; original → des circuits ORIGINAUX ; national → les parcs NATIONAUX. Règle : les adjectifs en -al font leur pluriel en -AUX. (Mais au féminin : royales, principales, originales, nationales !)")],
      [fp("Transforment au pluriel."),
       fp("R.A. : -al → -aux au masculin pluriel ; -ale → -ales au féminin pluriel.")],
      "Observation et manipulation", "Étiquettes"),
    stepRow(["5. Synthèse"],
      [fp("Trace écrite : l'adjectif qualificatif dit comment est la chose et s'accorde avec le nom ; tableau du pluriel en -al → -aux avec quatre exemples. Banque d'adjectifs du voyage : magnifique, splendide, calme, accueillant, pittoresque, confortable.")],
      [fp("Recopient.")], "Travail collectif", "Cahiers"),
    stepRow(["6. Entraînement"],
      [fp("Accordez : 1. les parcs (national) — 2. des plages (splendide) — 3. les axes (principal) — 4. des fêtes (original) — 5. une avenue (royal).")],
      [fp("Accordent."),
       pAns("R.A. : 1. nationaux — 2. splendides — 3. principaux — 4. originales — 5. royale.", ["nationaux", "principaux", "originales"], { size: SZ.FICHE })],
      "Procédé La Martinière", "Ardoises"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("Enrichis la phrase avec deux adjectifs bien choisis : « Les visiteurs admirent les paysages de l'île. » Puis mets au pluriel : « un monument national ».")],
      [fp("Rédigent, transforment."),
       pAns("R.A. (exemple) : Les visiteurs émerveillés admirent les paysages splendides de l'île. — des monuments nationaux.", ["splendides", "nationaux"], { size: SZ.FICHE })],
      "Travail individuel", "----"),
  ];
  return fiche(17, TOTAL, meta, rows, "s17");
}
function lessonS17() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 17", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("LES ADJECTIFS QUALIFICATIFS", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    sub("L'adjectif : l'habit du nom"),
    p("L'adjectif qualificatif dit comment est la personne ou la chose. Il s'accorde avec le nom :", { after: 40 }),
    pr([run("une plage ", { size: SZ.BODY }), run("magnifique", { bold: true, color: C.BLUE }),
        run("  →  des plages "), run("magnifiques", { bold: true, color: C.BLUE })], { after: 80 }),
    sub("Ma banque d'adjectifs du voyage :"),
    pr([run("magnifique, splendide, calme, turquoise, accueillant, pittoresque, confortable, majestueux, parfumé", { bold: true, color: C.BLUE })], { after: 80 }),
    sub("Le piège du pluriel : -al → -AUX"),
    mot("royal → royaux", "des spectacles royaux"),
    mot("principal → principaux", "les hôtels principaux"),
    mot("national → nationaux", "les parcs nationaux"),
    mot("original → originaux", "des circuits originaux"),
    p("", { after: 60 }),
    pr([run("Mais au féminin, pas de piège : ", { bold: true }),
        run("des avenues royales, des routes principales, des fêtes originales", { bold: true, color: C.BLUE }), run(".")]),
  ];
}

// ---------- S18 — Conjugaison : aller, faire, venir, prendre, mettre ----------
function ficheS18() {
  const meta = META("Conjugaison : aller, faire, venir, prendre, mettre — présent et conditionnel",
    "À la fin de la séance, l'apprenant conjugue les verbes irréguliers aller, faire, venir, prendre et mettre au présent de l'indicatif et au conditionnel présent.",
    "6 / 12", "tableaux de conjugaison, ardoises");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Accordez : « les sites (principal) » ; « des îles (merveilleux) ».")],
      [fp("Répondent."),
       fp("R.A. : principaux ; merveilleuses.")],
      "Travail collectif", "Ardoises"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Phrase mystère : « Si j'étais riche, j'IRAIS à Nosy Be, je PRENDRAIS l'avion… » Est-ce que je pars vraiment ? Non : c'est un rêve ! Quel temps exprime le rêve ?")],
      [fp("Écoutent, devinent."),
       fp("R.A. : c'est le conditionnel — le temps du rêve et de la politesse.")],
      "Travail collectif", "----"),
    stepRow(["2. Présentation"],
      [fp("Annonce : « Cinq verbes irréguliers du voyage : aller, faire, venir, prendre, mettre — au présent et au conditionnel ».")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation"],
      [fp("Corpus : « Je vais à la gare. Nous prenons le taxi-be. Les visiteurs viennent de loin. On fait les bagages. Je mets mon chapeau. » Puis : « J'irais volontiers à la mer. Nous ferions le tour de l'île. » Relevez les verbes : présent ou conditionnel ?")],
      [fp("Relèvent, classent."),
       fp("R.A. : vais, prenons, viennent, fait, mets → présent ; irais, ferions → conditionnel.")],
      "Exploitation de texte", "Corpus"),
    stepRow(["4. Analyse"],
      [fp("Tableaux : ALLER (je vais, tu vas, il va, nous allons, vous allez, ils vont / j'irais…) ; FAIRE (je fais, nous faisons, vous FAITES !, ils font / je ferais…) ; VENIR (je viens, nous venons, ils viennent / je viendrais…) ; PRENDRE (je prends, nous prenons, ils prennent / je prendrais…) ; METTRE (je mets, nous mettons, ils mettent / je mettrais…). Repère du conditionnel : les terminaisons -rais, -rait, -rions, -raient.")],
      [fp("Lisent, répètent, épellent."),
       fp("R.A. : vous faites (pas « faisez » !) ; ils vont ; le conditionnel a toujours un R avant la terminaison.")],
      "Observation et manipulation", "Tableaux"),
    stepRow(["5. Synthèse"],
      [fp("Trace écrite : les cinq tableaux + la règle d'usage : présent = ce qui se passe ; conditionnel = le rêve, le souhait, la politesse (je voudrais un billet, s'il vous plaît !).")],
      [fp("Recopient.")], "Travail collectif", "Cahiers"),
    stepRow(["6. Entraînement"],
      [fp("Ardoise ! 1. nous (aller, présent) — 2. vous (faire, présent) — 3. ils (prendre, présent) — 4. je (venir, conditionnel) — 5. tu (mettre, conditionnel).")],
      [fp("Écrivent."),
       pAns("R.A. : 1. nous allons — 2. vous faites — 3. ils prennent — 4. je viendrais — 5. tu mettrais.", ["nous allons", "vous faites", "ils prennent", "je viendrais"], { size: SZ.FICHE })],
      "Procédé La Martinière", "Ardoises"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("Écris ton rêve de voyage en deux phrases au conditionnel, avec deux verbes différents de la leçon.")],
      [fp("Rédigent."),
       pAns("R.A. (exemple) : J'irais à Morondava avec ma famille. Nous prendrions des photos sous les baobabs.", ["J'irais", "prendrions"], { size: SZ.FICHE })],
      "Travail individuel", "----"),
  ];
  return fiche(18, TOTAL, meta, rows, "s18");
}
function lessonS18() {
  const t = (title, rows) => new Table({
    width: { size: 10400, type: WidthType.DXA },
    rows: [
      new TableRow({ children: [cell([p([run(title, { bold: true, color: C.WHITE, size: SZ.FICHE })], { center: true, after: 20 })], { colSpan: 3, shade: COLOR })] }),
      ...rows.map(r => new TableRow({ children: r.map((x, i) => cell([p([run(x, { size: SZ.FICHE, bold: i === 0, color: i === 0 ? C.BLUE : C.BLACK })], { after: 20 })])) })),
    ],
  });
  return [
    p([run("LEÇON DU JOUR — SÉANCE 18", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("CINQ VERBES IRRÉGULIERS DU VOYAGE", { bold: true, size: 36, color: COLOR })], { center: true, after: 140 }),
    p("Le présent dit ce qui se passe ; le conditionnel dit le rêve, le souhait, la politesse.", { after: 80 }),
    t("ALLER — présent / conditionnel", [
      ["je", "vais", "irais"], ["tu", "vas", "irais"], ["il, elle, on", "va", "irait"],
      ["nous", "allons", "irions"], ["vous", "allez", "iriez"], ["ils, elles", "vont", "iraient"],
    ]),
    p("", { after: 60 }),
    t("FAIRE — présent / conditionnel (attention : vous FAITES !)", [
      ["je", "fais", "ferais"], ["nous", "faisons", "ferions"],
      ["vous", "faites", "feriez"], ["ils, elles", "font", "feraient"],
    ]),
    p("", { after: 60 }),
    t("VENIR / PRENDRE / METTRE — présent", [
      ["je", "viens — prends — mets", ""],
      ["nous", "venons — prenons — mettons", ""],
      ["ils, elles", "viennent — prennent — mettent", ""],
    ]),
    p("", { after: 60 }),
    sub("Le repère du conditionnel :"),
    pr([run("toujours un R avant la terminaison : ", { size: SZ.BODY }),
        run("j'irais, je ferais, je viendrais, je prendrais, je mettrais", { bold: true, color: C.BLUE })], { after: 50 }),
    pr([run("La politesse du voyageur : ", { bold: true }),
        run("« Je voudrais un billet pour Morondava, s'il vous plaît ! »", { italic: true, color: C.BLUE })]),
  ];
}

// ---------- S19 — Production orale ----------
function ficheS19() {
  const meta = META("Production orale : décrire un lieu touristique",
    "À la fin de la séance, l'apprenant décrit oralement un lieu touristique et compare deux destinations en mettant en évidence leurs particularités.",
    "7 / 12", "photographies ou affiches touristiques, plan d'exposé au tableau");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("À l'oral : « vous (faire, présent) » ; « nous (aller, conditionnel) ».")],
      [fp("Répondent."),
       fp("R.A. : vous faites ; nous irions.")],
      "Travail collectif", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Affiche touristique au tableau (plage ou montagne). Pluie d'idées : tout le vocabulaire utile — paysage, transports, adjectifs valorisants.")],
      [fp("Proposent le vocabulaire."),
       fp("R.A. : plage splendide, mer turquoise, pirogues, hôtels accueillants…")],
      "Brainstorming", "Affiche"),
    stepRow(["2. Présentation"],
      [fp("Annonce : « Décrire un lieu touristique et comparer deux destinations ». Comme un guide touristique professionnel !")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation"],
      [fp("Modèle de l'enseignant : je décris l'affiche en situant (au premier plan, près de…, au fond) et en valorisant (magnifique, majestueux). Puis j'annonce le plan de l'exposé comparatif : 1. destination A — 2. destination B — 3. ma préférée et pourquoi.")],
      [fp("Écoutent, observent le plan.")],
      "Modélisation", "Affiche"),
    stepRow(["4. Analyse"],
      [fp("Préparation en binômes : comparer DEUX destinations (la mer / la montagne ; Morondava / Nosy Be ; la ville / la campagne). Notes en mots clés : paysages, transports, activités, particularités de chacune.")],
      [fp("Dressent le plan, rédigent leurs notes.")],
      "Travail en binôme", "Notes"),
    stepRow(["5. Synthèse"],
      [fp("Passage des binômes (2 minutes). La classe écoute et pose une question par exposé. Rappel des comportements : voix claire, regard, gestes ; on répond calmement aux questions.")],
      [fp("Présentent, répondent aux questions."),
       pAns("R.A. (exemple) : D'abord, Morondava offre les baobabs majestueux et une plage dorée ; on y va en autocar. Ensuite, Nosy Be propose des îlots splendides et la réserve de Lokobe ; on y va en bateau. Enfin, je préférerais Nosy Be : je prendrais la pirogue pour voir les coraux !", ["D'abord", "Ensuite", "Enfin"], { size: SZ.FICHE })],
      "Exposé, interaction orale", "----"),
    stepRow(["6. Entraînement"],
      [fp("Défi éclair : en une phrase, valorise ton village avec deux adjectifs et une préposition de lieu.")],
      [fp("Improvisent.")],
      "Travail individuel", "----"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("Grille orale : ☐ j'ai situé (prépositions) ☐ j'ai valorisé (adjectifs) ☐ j'ai comparé (particularités) ☐ j'ai parlé clairement.")],
      [fp("S'auto-évaluent.")],
      "Auto-évaluation", "Grille"),
  ];
  return fiche(19, TOTAL, meta, rows, "s19");
}
function lessonS19() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 19", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("DÉCRIRE ET COMPARER DES DESTINATIONS", { bold: true, size: 36, color: COLOR })], { center: true, after: 140 }),
    sub("Le plan du guide touristique :"),
    p("1. Destination A — paysages, transports, activités."),
    p("2. Destination B — paysages, transports, activités."),
    p("3. Ma préférée — et pourquoi ! (au conditionnel : j'irais, je prendrais…)", { after: 80 }),
    sub("Mes outils pour comparer :"),
    p("• les particularités : « À Morondava, on admire les baobabs ; à Nosy Be, on nage près des coraux. »"),
    p("• les adjectifs valorisants : splendide, majestueux, pittoresque, accueillant ;"),
    p("• les prépositions pour situer : près de, à côté de, dans, sur ;"),
    p("• les mots de transition : d'abord, ensuite, enfin.", { after: 80 }),
    sub("La phrase magique du rêveur :"),
    pr([run("« Si je pouvais choisir, j'irais à … , je prendrais … , je ferais … ! »", { italic: true, bold: true, color: C.BLUE })]),
  ];
}

// ---------- S20 — Production écrite 1 : le plan de la brochure ----------
function ficheS20() {
  const meta = META("Production écrite (1) : préparer ma brochure de voyage",
    "À la fin de la séance, l'apprenant choisit une destination, dégage la structure du texte modèle et élabore un plan simple (présentation du lieu, description, intérêt du lieu).",
    "8 / 12", "brochures modèles (Morondava, Nosy Be), grille de plan");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Quelles informations trouve-t-on dans une brochure de voyage ?")],
      [fp("Répondent."),
       fp("R.A. : le lieu, les paysages, les moyens d'accès, les activités, les services.")],
      "Travail collectif", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Annonce du grand projet : chacun écrira SA brochure ! Sujet : « Décris une destination de voyage, réelle ou imaginaire, pour donner envie de la visiter. »")],
      [fp("Recopient le sujet.")], "Travail collectif", "Tableau"),
    stepRow(["2. Présentation"],
      [fp("Aujourd'hui : choisir la destination et bâtir le plan. Demain : rédiger !")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation"],
      [fp("Retour aux modèles : quelle est la charpente des brochures de Morondava et de Nosy Be ? 1. présentation du lieu (où ? comment y aller ?) — 2. description (paysages, curiosités, activités) — 3. intérêt du lieu (pourquoi venir ? la phrase qui donne envie !).")],
      [fp("Dégagent la structure."),
       fp("R.A. : trois blocs : présentation, description, intérêt.")],
      "Exploitation de texte", "Brochures modèles"),
    stepRow(["4. Analyse"],
      [fp("Chacun choisit sa destination (réelle : Antsirabe, Toliara, son village… ou imaginaire : l'île aux mille pirogues !). Pluie d'idées personnelle, puis liste du lexique : mots du transport, du paysage, du tourisme + adjectifs valorisants + connecteurs de lieu.")],
      [fp("Choisissent, listent leur lexique dans la grille.")],
      "Brainstorming, planification guidée", "Grille de plan"),
    stepRow(["5. Synthèse"],
      [fp("Mise en commun : deux ou trois plans lus à la classe. Vérification : les trois parties ? le lexique du voyage ? au moins deux adjectifs et deux prépositions prévues ?")],
      [fp("Présentent, améliorent."),
       pAns("R.A. (exemple de plan) : Présentation : Antsirabe, ville des hautes terres, à 170 km de Tana, en taxi-brousse. — Description : lacs splendides, pousse-pousse colorés, sources thermales. — Intérêt : la ville la plus fraîche et la plus accueillante de l'île !", ["Antsirabe", "pousse-pousse"], { size: SZ.FICHE })],
      "Mise en commun", "----"),
    stepRow(["6. Entraînement"],
      [fp("Finalisation du plan : un titre accrocheur + trois ou quatre mots clés par partie.")],
      [fp("Finalisent.")],
      "Travail individuel", "Grille"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("Liste de contrôle : ☐ destination choisie ☐ 3 parties ☐ lexique du voyage listé ☐ adjectifs et prépositions prévus.")],
      [fp("Cochent.")],
      "Auto-évaluation", "Liste de contrôle"),
  ];
  return fiche(20, TOTAL, meta, rows, "s20");
}
function lessonS20() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 20", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("MA BROCHURE DE VOYAGE (1) : LE PLAN", { bold: true, size: 36, color: COLOR })], { center: true, after: 140 }),
    pr([run("Sujet : ", { bold: true, color: C.RED }),
        run("Décris une destination de voyage, réelle ou imaginaire, pour donner envie de la visiter.", { italic: true })], { after: 80 }),
    sub("Le plan de la brochure :"),
    p("1. PRÉSENTATION DU LIEU — où se trouve-t-il ? comment y aller ?"),
    p("2. DESCRIPTION — les paysages, les curiosités, les activités."),
    p("3. INTÉRÊT DU LIEU — pourquoi venir ? La phrase qui donne envie !", { after: 80 }),
    sub("Ma liste de lexique :"),
    p("• transports : autocar, taxi-brousse, pirogue, avion… ;"),
    p("• paysage : montagne, colline, rizières, vallées, plage, forêt ;"),
    p("• tourisme : sites touristiques, hôtel, excursion, visiteurs ;"),
    p("• adjectifs valorisants : splendide, majestueux, pittoresque, accueillant ;"),
    p("• connecteurs de lieu : dans, sur, près de, à côté de, au bord de."),
  ];
}

// ---------- S21 — Production écrite 2 : rédaction ----------
function ficheS21() {
  const meta = META("Production écrite (2) : rédiger et améliorer ma brochure",
    "À la fin de la séance, l'apprenant rédige un premier jet de brochure décrivant une destination réelle ou imaginaire, puis relit et améliore sa production avec un camarade.",
    "9 / 12", "plans de la séance 20, grille de relecture");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Relisez votre plan. Rappel des trois parties de la brochure ?")],
      [fp("Répondent."),
       fp("R.A. : présentation, description, intérêt du lieu.")],
      "Travail collectif", "Plans"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Phrase d'ouverture offerte : « Bienvenue à … , la perle de … ! » Les brochures aiment les phrases qui brillent !")],
      [fp("Adaptent la phrase à leur destination.")], "Écriture guidée", "----"),
    stepRow(["2. Présentation"],
      [fp("Consignes : suivre le plan, une partie = un paragraphe, huit à dix phrases, employer le lexique listé.")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation", "(rédaction)"],
      [fp("Rédaction silencieuse du premier jet. Je circule et j'aide : un adjectif oublié, une contraction (près du port !), un verbe irrégulier…")],
      [fp("Rédigent.")],
      "Écriture guidée", "Cahiers d'essai"),
    stepRow(["4. Analyse", "(relecture)"],
      [fp("Grille de relecture : 1. Mes trois parties ? 2. Deux prépositions de lieu ? 3. Trois adjectifs valorisants (accords !) ? 4. Le lexique du voyage ? 5. Les verbes aller/faire/venir/prendre/mettre bien conjugués ? 6. Majuscules et ponctuation ?")],
      [fp("Relisent, corrigent.")],
      "Relecture guidée", "Grille"),
    stepRow(["5. Synthèse", "(réécriture)"],
      [fp("Travail collaboratif : échange de brouillons en binômes. Chacun propose UNE amélioration précise (un adjectif plus fort, un détail qui donne envie…).")],
      [fp("Lisent, conseillent, améliorent."),
       pAns("R.A. (exemple de production) : Bienvenue à Antsirabe, la perle des hautes terres ! Notre ville se trouve à 170 kilomètres de la capitale ; on y vient en taxi-brousse par une route pittoresque. D'abord, admirez les lacs splendides près de la ville. Ensuite, montez dans les pousse-pousse multicolores qui roulent dans les avenues royales. Enfin, goûtez aux sources chaudes : un bain majestueux ! Antsirabe vous attend : préparez vite vos billets !", ["Bienvenue à Antsirabe", "pittoresque", "splendides"], { size: SZ.FICHE })],
      "Travail collaboratif", "----"),
    stepRow(["6. Entraînement"],
      [fp("Mise au propre, avec le titre accrocheur. Les plus rapides dessinent une petite illustration de brochure.")],
      [fp("Recopient au propre.")],
      "Travail individuel", "Cahiers"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("Ramassage. Barème : structure 3 pts, lexique du voyage 2 pts, outils de la langue (prépositions, adjectifs, conjugaison) 3 pts, correction 2 pts.")],
      [fp("Rendent leur brochure.")],
      "Travail individuel", "----"),
  ];
  return fiche(21, TOTAL, meta, rows, "s21");
}
function lessonS21() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 21", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("MA BROCHURE DE VOYAGE (2) : RÉDIGER", { bold: true, size: 36, color: COLOR })], { center: true, after: 140 }),
    sub("Les phrases qui brillent :"),
    p("• l'ouverture : « Bienvenue à …, la perle de … ! »"),
    p("• l'invitation : « Venez découvrir…, admirez…, goûtez… »"),
    p("• la fermeture : « … vous attend : préparez vite vos billets ! »", { after: 80 }),
    sub("Ma grille de relecture :"),
    p("☐ Mes trois parties : présentation, description, intérêt du lieu."),
    p("☐ Deux prépositions de lieu au moins (près du port, dans la baie…)."),
    p("☐ Trois adjectifs valorisants, bien accordés (plages splendides, parcs nationaux…)."),
    p("☐ Le lexique du voyage (transports, paysage, tourisme)."),
    p("☐ Les verbes irréguliers bien conjugués (on y va, vous faites, les visiteurs viennent…)."),
    p("☐ Majuscules, points, virgules."),
  ];
}

// ---------- S22 — Lecture-fluidité ----------
function ficheS22() {
  const meta = META("Lecture-fluidité : lire une brochure avec expressivité",
    "À la fin de la séance, l'apprenant lit à haute voix un texte descriptif relatif au voyage avec fluidité, précision et expressivité : pauses, groupes de souffle, intonation, débit.",
    "10 / 12", "brochures de l'unité, productions des apprenants");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Que fait la voix à la fin d'une question ? après une virgule ?")],
      [fp("Répondent."),
       fp("R.A. : elle monte ; on fait un petit arrêt.")],
      "Travail collectif", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Je lis la fin de la brochure de Morondava deux fois : d'une voix endormie, puis comme un vrai guide enthousiaste. Laquelle donne envie de partir ?")],
      [fp("Comparent."),
       fp("R.A. : la deuxième — l'expressivité vend le voyage !")],
      "Modélisation", "----"),
    stepRow(["2. Présentation"],
      [fp("Annonce : « Lire une brochure comme un guide : pauses, groupes de souffle, intonation, débit ».")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation"],
      [fp("Lecture modèle de la brochure de Nosy Be. Consigne d'écoute : marquez / aux virgules, // aux points, ↗ quand ma voix monte (questions, exclamations). Observez aussi mon DÉBIT : ni trop vite, ni trop lent.")],
      [fp("Annotent leur texte pendant l'écoute.")],
      "Lecture modèle", "Texte annoté"),
    stepRow(["4. Analyse"],
      [fp("Entraînement par groupes de souffle : « Au nord-ouest de Madagascar / se trouve Nosy Be, / la plus célèbre des îles malgaches. // » Chaque rangée lit un groupe de phrases ; je corrige le débit et l'intonation des « ! ».")],
      [fp("Lisent par groupes de souffle.")],
      "Lecture répétée", "Texte"),
    stepRow(["5. Synthèse"],
      [fp("Lectures individuelles : des volontaires lisent un paragraphe en continu. Évaluation par les pairs : fluidité / précision / expressivité — une remarque gentille chacun.")],
      [fp("Lisent, s'évaluent avec bienveillance.")],
      "Lecture à haute voix", "Grille simple"),
    stepRow(["6. Entraînement"],
      [fp("Chacun prépare puis lit SA brochure (séance 21) à son binôme — comme un guide qui veut convaincre !")],
      [fp("Préparent et présentent leur lecture expressive.")],
      "Binômes", "Productions"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("Auto-évaluation : ☐ j'ai respecté les pauses ☐ ma voix est montée aux « ? » et « ! » ☐ j'ai lu tous les mots ☐ mon débit était régulier.")],
      [fp("Cochent.")],
      "Auto-évaluation", "Grille"),
  ];
  return fiche(22, TOTAL, meta, rows, "s22");
}
function lessonS22() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 22", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("LIRE COMME UN GUIDE TOURISTIQUE", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    sub("Les quatre secrets de la lecture expressive :"),
    mot("les pauses", "petit arrêt à la virgule, grand arrêt au point"),
    mot("les groupes de souffle", "je respire entre les groupes de mots, jamais au milieu !"),
    mot("l'intonation", "la voix monte aux « ? » et s'enflamme aux « ! »"),
    mot("le débit", "ni trop vite, ni trop lent — régulier comme le taxi-brousse sur une bonne route !"),
    p("", { after: 80 }),
    sub("Mon code d'annotation :"),
    pr([run("/ ", { bold: true, color: C.RED }), run("= petite pause (virgule)   "),
        run("// ", { bold: true, color: C.RED }), run("= grande pause (point)   "),
        run("↗ ", { bold: true, color: C.RED }), run("= la voix monte")], { after: 80 }),
    pr([run("Exemple : ", { bold: true }),
        run("« Au nord-ouest de Madagascar / se trouve Nosy Be, / la plus célèbre des îles malgaches. // »", { italic: true, color: C.BLUE })]),
  ];
}

// ---------- grande leçon récapitulative ----------
function bigLesson() {
  return [
    unitBanner("LEÇON — UNITÉ 2 : LE VOYAGE (récapitulatif)", COLOR),
    p("", { after: 80 }),
    sub("1. Les mots du voyage :"),
    pr([run("Transports ruraux : ", { bold: true }), run("charrette, pirogue, motoculteur", { bold: true, color: C.BLUE }),
        run(" — urbains : ", { bold: true }), run("cyclopousse, taxi, bus, moto-taxi, taxi-be, tuk-tuk, autocar.", { bold: true, color: C.BLUE })], { after: 40 }),
    pr([run("Établissements : ", { bold: true }), run("gare routière, port, aéroport, hôtel, restaurant, agence de voyage, sites touristiques.", { bold: true, color: C.BLUE })], { after: 40 }),
    pr([run("Préparation : ", { bold: true }), run("réservation, billet, budget, frais de transport, accessoires.", { bold: true, color: C.BLUE })], { after: 40 }),
    pr([run("Paysage : ", { bold: true }), run("montagne, colline, rizières, vallées, plage, forêt.", { bold: true, color: C.BLUE })], { after: 40 }),
    p("Un champ lexical = une famille de mots autour d'un même thème.", { after: 80 }),
    sub("2. Les prépositions de lieu :"),
    p("dans, sur, sous, à côté de, près de, loin de — préposition + nom = CC de lieu (où ?). Contractions : de + le = du ; de + les = des.", { after: 80 }),
    sub("3. Les adjectifs qualificatifs :"),
    p("Ils valorisent la description et s'accordent avec le nom. Pluriel spécial : -al → -aux (royaux, principaux, nationaux, originaux) — mais royales, principales au féminin !", { after: 80 }),
    sub("4. Les cinq verbes irréguliers :"),
    p("aller (je vais, ils vont), faire (vous faites !), venir (ils viennent), prendre (nous prenons), mettre (je mets). Conditionnel = le temps du rêve : j'irais, je ferais, je prendrais… toujours un R avant la terminaison !", { after: 80 }),
    sub("5. La brochure de voyage :"),
    p("Présentation du lieu → description → intérêt du lieu. Des phrases qui brillent : « Bienvenue à…, la perle de… ! »", { after: 80 }),
    sub("6. La lecture du guide :"),
    p("Pauses, groupes de souffle, intonation qui monte aux « ? » et « ! », débit régulier."),
  ];
}

// ---------- exercices supplémentaires ----------
function exercises() {
  return [
    p([run("EXERCICES SUPPLÉMENTAIRES — UNITÉ 2", { bold: true, color: COLOR, size: 32 })], { center: true, after: 140 }),
    sub("Exercice 1 — Vocabulaire :"),
    p("Classe dans le bon panier (RURAL / URBAIN) : pirogue, taxi-be, charrette, tuk-tuk, motoculteur, cyclopousse.", { after: 60 }),
    pAns("Corrigé : RURAL → pirogue, charrette, motoculteur ; URBAIN → taxi-be, tuk-tuk, cyclopousse.", ["RURAL", "URBAIN"]),
    p("", { after: 40 }),
    sub("Exercice 2 — Les prépositions :"),
    p("Complète : 1. Les bagages sont … le toit de l'autocar. 2. L'hôtel se trouve … de la plage (tout proche). 3. Les lémuriens vivent … la réserve. 4. Notre village est … de la mer (à 500 km !).", { after: 60 }),
    pAns("Corrigé : 1. sur — 2. près — 3. dans — 4. loin.", ["sur", "près", "dans", "loin"]),
    p("", { after: 40 }),
    sub("Exercice 3 — Les adjectifs :"),
    p("Accorde : 1. les parcs (national) — 2. les routes (principal) — 3. des paysages (original) — 4. des avenues (royal) — 5. une mer (turquoise).", { after: 60 }),
    pAns("Corrigé : 1. nationaux — 2. principales — 3. originaux — 4. royales — 5. turquoise.", ["nationaux", "principales", "originaux", "royales"]),
    p("", { after: 40 }),
    sub("Exercice 4 — Conjugaison :"),
    p("Mets au temps demandé : 1. nous (prendre, présent) 2. vous (faire, présent) 3. ils (aller, présent) 4. je (venir, conditionnel) 5. elle (mettre, conditionnel).", { after: 60 }),
    pAns("Corrigé : 1. nous prenons — 2. vous faites — 3. ils vont — 4. je viendrais — 5. elle mettrait.", ["prenons", "faites", "vont", "viendrais"]),
    p("", { after: 40 }),
    sub("Exercice 5 — Expression écrite :"),
    p("Écris quatre phrases de brochure sur ton village : présentation (1), description avec une préposition et deux adjectifs (2), invitation finale (1).", { after: 60 }),
    pAns("Corrigé (exemple) : Bienvenue dans mon village, au cœur des hautes terres ! Près de la rivière, les rizières splendides brillent sous le soleil. Les habitants accueillants vous saluent au marché. Venez vite nous rendre visite !", ["Bienvenue", "splendides", "accueillants"]),
  ];
}

// ---------- S23 — Révision ----------
function revision() {
  const B2 = require("./builders");
  return [
    B2.bookmarkTitle("s23", "SÉANCE 23 / 72", { bold: true, size: 28, after: 60 }),
    p([run("RÉVISION — UNITÉ 2 : LE VOYAGE", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    p([run("Toute l'unité en une séance — en route pour le test !", { italic: true, color: C.GRAY })], { center: true, after: 120 }),
    sub("Atelier 1 — Le grand tri des transports (10 min) :"),
    p("Trois paniers : RURAL / URBAIN / PRÉPARATION DU VOYAGE. Étiquettes : charrette, taxi-be, réservation, pirogue, tuk-tuk, billet, motoculteur, cyclopousse, budget, autocar.", { after: 60 }),
    pAns("R.A. : RURAL → charrette, pirogue, motoculteur ; URBAIN → taxi-be, tuk-tuk, cyclopousse, autocar ; PRÉPARATION → réservation, billet, budget.", ["RURAL", "URBAIN", "PRÉPARATION"]),
    p("", { after: 40 }),
    sub("Atelier 2 — La phrase du guide (10 min) :"),
    p("Phrase de départ : « On voit la plage. » Rangée 1 ajoute une préposition de lieu, rangée 2 un adjectif valorisant, rangée 3 un mot de transition, rangée 4 transforme au conditionnel avec « aller ».", { after: 60 }),
    pAns("R.A. : Ensuite, près du port, on voit la plage splendide. / J'irais volontiers sur cette plage splendide !", ["près du port", "splendide"]),
    p("", { after: 40 }),
    sub("Atelier 3 — Conjugaison en chaîne (10 min) :"),
    p("« je vais » → « tu vas » → … puis faire au présent (gare au « vous faites » !), prendre au présent, venir au conditionnel.", { after: 60 }),
    sub("Atelier 4 — Pluriels éclair (5 min) :"),
    p("Ardoise : royal → ? principal → ? national → ? original → ? (au masculin pluriel, puis au féminin pluriel).", { after: 60 }),
    pAns("R.A. : royaux/royales — principaux/principales — nationaux/nationales — originaux/originales.", ["royaux", "principaux"]),
    p("", { after: 40 }),
    sub("Atelier 5 — Lecture du guide (10 min) :"),
    p("En binômes : lire le dernier paragraphe de la brochure de Nosy Be avec l'enthousiasme d'un guide. Le binôme coche : pauses ? intonation ? débit ?", { after: 60 }),
    pr([run("Demain : le TEST de l'unité 2 — relis ta grande leçon récapitulative !", { bold: true, color: C.RED })]),
  ];
}

// ---------- S24 — Test ----------
function testPaper() {
  const B2 = require("./builders");
  return [
    B2.bookmarkTitle("s24", "SÉANCE 24 / 72", { bold: true, size: 28, after: 60 }),
    p([run("TEST — UNITÉ 2 : LE VOYAGE", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 60 }),
    p([run("Durée : ……… — Note : … / 20", { bold: true })], { center: true, after: 140 }),
    sub("Exercice 1 — Vocabulaire (4 points) :"),
    p("Complète : 1. Les autocars partent de la … . 2. Pour garder sa place, on fait une … . 3. En ville, on circule en … ou en … . 4. À la campagne, on traverse le fleuve en … .", { after: 80 }),
    sub("Exercice 2 — Les prépositions de lieu (4 points) :"),
    p("Complète : « L'hôtel se trouve … de la plage. Les bagages voyagent … le toit. … la réserve, on aperçoit des lémuriens. Notre île est … de la capitale. »", { after: 80 }),
    sub("Exercice 3 — Les adjectifs (4 points) :"),
    p("a) Accorde : les parcs (national) ; des circuits (original) ; les avenues (royal). b) Enrichis avec deux adjectifs valorisants : « Les visiteurs admirent les plages de l'île. »", { after: 80 }),
    sub("Exercice 4 — Conjugaison (4 points) :"),
    p("Conjugue : 1. nous (aller, présent) — 2. vous (faire, présent) — 3. ils (prendre, présent) — 4. j'(aller, conditionnel).", { after: 80 }),
    sub("Exercice 5 — Expression écrite (4 points) :"),
    p("Rédige une mini-brochure de cinq phrases sur une destination de ton choix : présentation (1 phrase), description (3 phrases avec une préposition, un adjectif valorisant et un mot du voyage), invitation finale (1 phrase).", { after: 120 }),
    p([run("CORRIGÉ", { bold: true, color: C.PINK, size: 32 })], { center: true, after: 80 }),
    pAns("Ex.1 : 1. gare routière — 2. réservation — 3. taxi-be, tuk-tuk (ou bus, cyclopousse…) — 4. pirogue. (1 pt chacun)", ["gare routière", "réservation", "pirogue"]),
    pAns("Ex.2 : près — sur — Dans — loin. (1 pt chacun)", ["près", "sur", "Dans", "loin"]),
    pAns("Ex.3 : a) nationaux, originaux, royales (2 pts). b) exemple : Les visiteurs émerveillés admirent les plages splendides de l'île. (2 pts)", ["nationaux", "originaux", "royales"]),
    pAns("Ex.4 : 1. nous allons — 2. vous faites — 3. ils prennent — 4. j'irais. (1 pt chacun)", ["nous allons", "vous faites", "ils prennent", "j'irais"]),
    pAns("Ex.5 : structure 1,5 pt (3 parties), outils de la langue 1,5 pt (préposition + adjectif + lexique), correction de la langue 1 pt.", ["structure"]),
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
      "Je comprends une brochure de voyage, à l'oral et à l'écrit.",
      "Je connais les transports ruraux et urbains, les établissements et la préparation du voyage.",
      "Je reconnais un champ lexical : la famille de mots d'un même thème.",
      "Je situe avec les prépositions de lieu : dans, sur, sous, à côté de, près de, loin de.",
      "J'emploie des adjectifs valorisants et je connais le pluriel en -aux (royaux, nationaux).",
      "Je conjugue aller, faire, venir, prendre, mettre au présent et au conditionnel.",
      "Je décris et je compare deux destinations à l'oral.",
      "Je rédige une brochure : présentation, description, intérêt du lieu.",
      "Je lis une brochure avec les pauses, l'intonation et le bon débit.",
    ], "PROCHAINE ÉTAPE → UNITÉ 3 : LES SERVICES PUBLICS !"),
  ];
};
module.exports.COLOR = COLOR;
module.exports.SHADE = SHADE;
