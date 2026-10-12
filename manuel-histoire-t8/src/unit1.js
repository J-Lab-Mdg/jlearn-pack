// UNITÉ 1 — L'HISTOIRE ORALE (PE T8) : 2 séances + révision + examen
const L = require('./figlib');
const { buildUnit } = require('./engine');
const { head, svg, txt, nline, dot, tableEl, box, arrow, seg, circle, poly, PINK, PINK2, GREEN, GREENL, BLUE, BLUEL, OCRE } = L;

const figs = {};
// S1 — les règles d'or de l'entretien
figs.u1f1 = (() => { const { s, y } = head('Les règles d’or de l’entretien', ['Avant, pendant : la conduite d’une enquête orale réussie.']);
  const top = y + 15;
  let b = txt(80, top + 10, 'AVANT l’entretien', 24, GREEN, 'bold');
  const avant = ['se concerter : répartir les rôles dans le groupe', 'préparer le thème, l’objet et les questions'];
  avant.forEach((t, i) => { b += box(80, top + 30 + i * 66, 840, 50, t, GREENL, GREEN, 22); });
  const y2 = top + 30 + 2 * 66 + 30;
  b += txt(80, y2, 'PENDANT l’entretien', 24, BLUE, 'bold');
  const pendant = ['garder le contact visuel avec le témoin', 'faire preuve d’empathie : se mettre à sa place', 'poser UNE seule question à la fois', 'laisser le témoin raconter librement', 'recadrer poliment s’il s’éloigne du sujet'];
  pendant.forEach((t, i) => { b += box(80, y2 + 20 + i * 62, 840, 48, t, i % 2 ? '#BBD4EE' : BLUEL, BLUE, 22); });
  const yf = y2 + 20 + 5 * 62 + 20;
  b += txt(500, yf, 'écouter plus que parler — le témoin est la source', 22, PINK2, 'bold', 'middle');
  return svg(1000, yf + 34, s + b); })();
// S2 — la chaîne de production d'une source orale
figs.u1f2 = (() => { const { s, y } = head('Produire une source orale : la chaîne complète', ['Huit maillons, de la question de recherche au dossier présenté.']);
  const top = y + 12;
  const steps = ['1. poser la problématique (question de recherche)', '2. élaborer la grille d’entretien', '3. choisir les témoins et les supports', '4. mener l’entretien (noter, enregistrer)', '5. retranscrire fidèlement les paroles', '6. analyser : répondre à la problématique', '7. recouper avec d’autres sources écrites et orales', '8. constituer le dossier et le présenter à l’oral'];
  let b = '';
  steps.forEach((t, i) => {
    b += box(110, top + i * 64, 780, 50, t, i % 2 ? BLUEL : GREENL, i % 2 ? BLUE : GREEN, 22);
    if (i < 7) b += arrow(500, top + i * 64 + 50, 500, top + (i + 1) * 64, PINK2, 4);
  });
  b += txt(500, top + 8 * 64 + 16, 'le dossier final devient une SOURCE pour d’autres historiens', 21, OCRE, 'bold', 'middle');
  return svg(1000, top + 8 * 64 + 48, s + b); })();

const S = [
  {
    t: 'Réaliser une enquête orale', comp: 'L’Histoire orale', theme: 'Les techniques de l’enquête orale : de la question à l’entretien',
    goal: 'mener une enquête orale en respectant les techniques de l’entretien',
    mat: 'Questionnaire, cahier, enregistreur ou téléphone, tableau',
    revQ: 'En T7, quelles étaient les cinq étapes de préparation d’un projet d’Histoire orale ?',
    revRA: 'Thème délimité, questionnaire, personnes ressources, lieu de rencontre, rendez-vous.',
    situation: 'La classe de Niry a obtenu un rendez-vous avec Dadabe Rakoto, ancien instituteur du village. Mais une fois assis devant lui, les élèves parlent tous en même temps, posent trois questions d’un coup, regardent leurs cahiers au lieu du vieil homme… et Dadabe se tait. Un entretien ne s’improvise pas : il existe de vraies techniques pour qu’un témoin livre sa mémoire. Lesquelles ?',
    def: 'L’enquête orale est la collecte d’informations historiques auprès de témoins, par l’entretien. Elle se prépare : on choisit le thème et l’objet de l’enquête, on formule la question, et le groupe se concerte pour répartir les rôles. Pendant l’entretien, l’enquêteur garde le contact visuel, fait preuve d’empathie, pose une seule question à la fois, laisse le témoin raconter librement et le recadre poliment s’il s’éloigne du sujet.',
    autrement: 'pour qu’un ancien raconte vraiment, il faut le regarder, le comprendre, lui poser une question simple à la fois, le laisser parler — et le ramener doucement au sujet s’il s’égare.',
    concept: 'Tout commence avant la rencontre : le thème (par exemple « l’école de notre commune ») est précisé en un objet d’enquête (« l’école pendant les années 1970 »), puis en une question d’enquête claire. Le groupe se concerte : qui pose les questions ? qui note ? qui enregistre ? qui surveille le temps ? Un entretien où tout le monde parle est un entretien perdu. Pendant la rencontre, le contact visuel montre au témoin qu’on l’écoute : les yeux dans le cahier, l’attention tombe, et le témoin aussi se décourage. L’empathie consiste à se mettre à la place du témoin : certains souvenirs sont douloureux ou intimes, on ne force jamais, on respecte les silences. On pose une seule question à la fois : deux questions ensemble, et le témoin n’en retient qu’une. Puis on laisse raconter librement : les détours d’un récit contiennent souvent des informations précieuses que le questionnaire n’avait pas prévues. Enfin, si le témoin s’éloigne trop longtemps du sujet, on recadre avec politesse : « C’est très intéressant — et à l’école, comment cela se passait-il ? ». À Madagascar, le respect dû aux aînés ajoute ses règles : saluer selon l’usage, se présenter, remercier, et demander la permission avant d’enregistrer.',
    synthese: 'Enquête orale = collecter la mémoire d’un témoin par l’entretien ; avant : thème, objet, question, concertation du groupe ; pendant : contact visuel, empathie, une question à la fois, récit libre, recadrage poli.',
    method: ['Préciser le thème, l’objet et la question de l’enquête ; se répartir les rôles.', 'Conduire l’entretien : regarder le témoin, écouter, une seule question à la fois.', 'Laisser raconter librement, recadrer poliment, remercier et demander les permissions.'],
    exemple: 'Enquête sur le marché communal : Vola pose les questions une à une en regardant la marchande ; Hery note ; Lova enregistre avec permission. Quand la marchande dérive vers la politique, Vola recadre : « Et les prix du riz à cette époque ? ».',
    erreur: 'Transformer l’entretien en interrogatoire : enchaîner les questions fermées (« oui ou non ? ») sans laisser le témoin raconter. Le témoignage devient sec et pauvre. L’entretien d’Histoire orale est une écoute guidée, pas un contrôle de connaissances.',
    saistu: 'Les historiens professionnels utilisent exactement ces techniques ! Les grandes archives sonores du monde — comme celles des anciens combattants ou des survivants de catastrophes — ont été constituées par des milliers d’entretiens menés selon ces règles : une question à la fois, récit libre, respect du témoin. Ta petite enquête de classe suit la même méthode que les chercheurs des universités.',
    exos: ['Vrai ou faux ? Corrige si faux. a) On pose deux ou trois questions à la fois pour gagner du temps. b) Le contact visuel encourage le témoin. d) Si le témoin s’éloigne du sujet, on l’interrompt sèchement. e) Le groupe se concerte avant l’entretien pour répartir les rôles.',
      'Les techniques. a) Qu’est-ce que l’empathie dans un entretien ? b) Pourquoi laisse-t-on le témoin raconter librement ? d) Comment recadrer poliment un témoin ? e) Cite deux règles de politesse malgaches à respecter avec un témoin âgé.',
      'Analyse de situation. Pendant un entretien, Fetra lit ses questions sans lever les yeux, coupe la parole au témoin et pose les questions 4, 5 et 6 d’un coup. a) Relève trois erreurs de Fetra. b) Propose une correction pour chacune. d) Quel rôle aurait dû jouer son groupe ? e) Rédige la phrase de recadrage que Fetra pourrait utiliser.'],
    corr: ['a) faux : une seule question à la fois ; b) vrai ; d) faux : on recadre poliment, sans brusquer ; e) vrai.',
      'a) se mettre à la place du témoin, comprendre ses émotions et respecter ses silences ; b) parce que les détours du récit livrent des informations imprévues et précieuses ; d) par une transition aimable qui ramène au sujet (« C’est intéressant — et pour notre sujet… ») ; e) saluer selon l’usage, se présenter, remercier, demander la permission d’enregistrer (deux suffisent).',
      'a) pas de contact visuel, il coupe la parole, trois questions à la fois ; b) regarder le témoin, le laisser finir, poser une seule question ; d) se concerter avant : un seul interroge, les autres notent et enregistrent ; e) réponse libre — une phrase polie qui ramène au thème.'],
    fig: 'u1f1'
  },
  {
    t: 'Produire une source orale', comp: 'L’Histoire orale', theme: 'De l’entretien au dossier : fabriquer une source orale',
    goal: 'produire une source orale : retranscrire, analyser, recouper et présenter les témoignages recueillis',
    mat: 'Enregistrements, cahier de retranscription, documents écrits, dossier',
    revQ: 'Cite trois techniques à respecter pendant un entretien d’enquête orale.',
    revRA: 'Contact visuel, empathie, une seule question à la fois, récit libre, recadrage poli (trois suffisent).',
    situation: 'L’enquête est finie : la classe de Niry rapporte deux heures d’enregistrement et des pages de notes. Et maintenant ? Si tout reste dans le téléphone, rien n’aura servi. Pour que la mémoire de Dadabe Rakoto devienne un document d’Histoire — une source que d’autres pourront utiliser — il faut la retranscrire, l’analyser, la vérifier et la présenter. C’est la fabrication d’une source orale.',
    def: 'Produire une source orale, c’est transformer des témoignages recueillis en document historique utilisable. La démarche comprend : poser la problématique (question de recherche), élaborer la grille d’entretien, choisir les témoins et les supports, mener l’entretien, retranscrire les témoignages, les analyser par rapport à la question de recherche, les recouper avec des sources écrites et d’autres sources orales, puis constituer un dossier et le présenter oralement.',
    autrement: 'on écrit mot à mot ce que le témoin a dit, on vérifie si cela répond à notre question, on compare avec d’autres sources — et on range le tout dans un dossier qu’on présente à la classe.',
    concept: 'La problématique est la boussole du projet : « Comment l’école de notre commune a-t-elle changé entre 1970 et 1990 ? ». La grille d’entretien liste les questions qui en découlent. Après l’entretien vient la retranscription : écrire fidèlement les paroles du témoin, sans rien ajouter ni corriger — même les hésitations peuvent avoir un sens. Puis l’analyse : que répond le témoignage à la problématique ? Qu’apprend-on de neuf ? Qu’est-ce qui reste obscur ? Vient alors l’étape qui fait de l’élève un vrai historien : le recoupement. La mémoire peut se tromper — dates mélangées, souvenirs embellis. On confronte donc le témoignage à des sources écrites (registres, journaux, photographies datées) et à d’autres témoignages : ce qui concorde est solide ; ce qui diverge appelle la prudence. Enfin, le dossier rassemble tout : problématique, grille, retranscriptions, analyse, conclusion, et la présentation orale restitue le travail devant la classe. Ce dossier devient à son tour une source : dans vingt ans, un chercheur pourra s’en servir. La boucle de l’Histoire orale est bouclée — l’esprit d’analyse et l’esprit critique en sont les deux piliers.',
    synthese: 'Source orale : problématique → grille d’entretien → témoins et supports → entretien → retranscription fidèle → analyse → recoupement avec sources écrites et orales → dossier et présentation. La mémoire se vérifie toujours.',
    method: ['Retranscrire fidèlement les paroles, sans corriger ni ajouter.', 'Analyser : confronter le témoignage à la problématique de départ.', 'Recouper avec des sources écrites et d’autres témoignages avant de conclure ; constituer le dossier.'],
    exemple: 'Dadabe affirme que l’école a brûlé « vers 1975 ». Le registre communal indique l’incendie en 1977. La classe retient 1977 en signalant l’écart : le recoupement a corrigé la mémoire sans disqualifier le témoin.',
    erreur: 'Prendre le témoignage pour argent comptant et le recopier comme une vérité : une source orale non recoupée n’est qu’un souvenir. Sans confrontation avec d’autres sources, le dossier n’a pas de valeur historique.',
    saistu: 'Le « Tantara ny Andriana », somme monumentale de l’histoire de l’Imerina, est né exactement de cette démarche : au XIXᵉ siècle, le père Callet a interrogé des anciens, retranscrit leurs récits en malgache, recoupé les versions entre elles — et son dossier est devenu l’une des sources majeures de l’histoire de Madagascar. Une source orale bien produite peut traverser les siècles !',
    exos: ['Remets la chaîne dans l’ordre : a) retranscrire les témoignages ; b) poser la problématique ; d) recouper avec d’autres sources ; e) mener l’entretien.',
      'Les étapes. a) Qu’est-ce qu’une problématique ? b) Pourquoi la retranscription doit-elle être fidèle ? d) Que fait-on pendant l’analyse ? e) Que contient le dossier final ?',
      'Esprit critique. Deux témoins donnent deux dates différentes pour la construction du pont du village. a) Pourquoi la mémoire peut-elle se tromper ? b) Que faire face à ces deux versions ? d) Quelles sources écrites pourraient trancher ? e) Pourquoi dit-on que le dossier produit devient lui-même une source ?'],
    corr: ['Ordre : b (problématique), puis grille et choix des témoins, e (entretien), a (retranscription), d (recoupement), enfin dossier et présentation.',
      'a) la question de recherche qui guide toute l’enquête ; b) parce que toute modification déforme la source : on écrit les paroles telles quelles ; d) on confronte le témoignage à la problématique pour en tirer les réponses ; e) problématique, grille d’entretien, retranscriptions, analyse, conclusion.',
      'a) le temps efface ou mélange les souvenirs, et chacun embellit parfois son récit ; b) ne pas choisir au hasard : recouper avec d’autres sources ; d) registres communaux, archives, journaux, photographies datées (deux suffisent) ; e) parce que d’autres chercheurs pourront l’utiliser plus tard pour reconstituer le passé.'],
    fig: 'u1f2'
  }
];

const unit1 = {
  no: 1, roman: 'I', name: 'L’Histoire orale',
  rag: 'saisir la technique de l’Histoire orale et exploiter une trace du passé à partir de sources historiques.',
  valeurs: 'esprit d’analyse, esprit critique',
  sessions: S,
  revision: {
    table: [
      ['Enquête orale', 'Collecte d’informations auprès de témoins par l’entretien ; se prépare en groupe', 'Préparer et mener une enquête orale'],
      ['Techniques d’entretien', 'Contact visuel, empathie, une question à la fois, récit libre, recadrage poli', 'Conduire un entretien réussi'],
      ['Problématique', 'Question de recherche qui guide toute l’enquête', 'Formuler la question de départ'],
      ['Retranscription', 'Écriture fidèle des paroles du témoin, sans ajout ni correction', 'Transformer l’oral en écrit'],
      ['Recoupement', 'Confrontation du témoignage avec sources écrites et autres témoignages', 'Vérifier avant de conclure'],
      ['Dossier', 'Problématique, grille, retranscriptions, analyse, conclusion + présentation orale', 'Produire une source utilisable']
    ],
    questions: [
      'Cite les cinq techniques à respecter pendant l’entretien.',
      'Pourquoi le groupe doit-il se concerter avant l’entretien ?',
      'Décris la chaîne complète de production d’une source orale.',
      'Pourquoi faut-il recouper un témoignage oral ?',
      'Que devient le dossier final une fois présenté ?'
    ],
    answers: [
      'Contact visuel, empathie, une seule question à la fois, laisser raconter librement, recadrer poliment.',
      'Pour répartir les rôles (interroger, noter, enregistrer, gérer le temps) et éviter la cacophonie devant le témoin.',
      'Problématique → grille d’entretien → choix des témoins et supports → entretien → retranscription → analyse → recoupement → dossier et présentation orale.',
      'Parce que la mémoire peut se tromper : seule la confrontation avec des sources écrites et d’autres témoignages rend l’information solide.',
      'Une source orale à part entière, que d’autres chercheurs pourront utiliser.'
    ]
  },
  exam: {
    exos: [
      'Questions de cours. a) Définis l’enquête orale. b) Qu’est-ce que l’empathie ? d) Qu’est-ce qu’une problématique ? e) Qu’est-ce que le recoupement ?',
      'L’entretien. Ta classe interroge une ancienne sage-femme sur la santé au village. a) Rédige la question d’enquête. b) Cite deux règles à respecter pendant l’entretien. d) Que faire si elle s’éloigne du sujet ? e) Que demander avant d’enregistrer ?',
      'Vrai ou faux ? Corrige si faux. a) On peut corriger les paroles du témoin à la retranscription. b) L’analyse confronte le témoignage à la problématique. d) Un seul témoin suffit toujours. e) Le dossier contient la grille d’entretien.',
      'La chaîne de production. a) Range dans l’ordre : analyse, entretien, problématique, retranscription. b) Où intervient le choix des supports ? d) Pourquoi la retranscription précède-t-elle l’analyse ? e) Quel est le dernier maillon de la chaîne ?',
      'Esprit critique. Un témoin affirme que la route date de 1960 ; un registre indique 1965. a) Quelle attitude adopter ? b) Pourquoi ne pas rejeter le témoin ? d) Cite deux autres sources pour trancher. e) Explique pourquoi l’Histoire orale exige l’esprit critique.'
    ],
    corr: [
      'a) la collecte d’informations historiques auprès de témoins par l’entretien ; b) se mettre à la place du témoin, comprendre ses émotions ; d) la question de recherche qui guide l’enquête ; e) la confrontation du témoignage avec d’autres sources. Un point par item.',
      'a) réponse libre — question claire et délimitée (ex. : « Comment soignait-on au village dans les années 1980 ? ») ; b) contact visuel, une question à la fois (ou autres techniques) ; d) la recadrer poliment vers le sujet ; e) sa permission. Un point par item.',
      'a) faux : la retranscription est fidèle, sans correction ; b) vrai ; d) faux : plusieurs témoins permettent le recoupement ; e) vrai. Un point par item.',
      'a) problématique, entretien, retranscription, analyse ; b) avant l’entretien, avec le choix des témoins ; d) parce qu’on ne peut analyser qu’un texte fixé par écrit ; e) le dossier et sa présentation orale. Un point par item.',
      'a) signaler l’écart et privilégier la source écrite datée, sans certitude absolue ; b) sa mémoire reste précieuse sur d’autres points : une erreur de date ne disqualifie pas tout ; d) journaux d’époque, archives, photographies datées, autres témoins (deux suffisent) ; e) parce qu’un témoignage est une mémoire humaine, faillible : il doit toujours être vérifié et recoupé. Un point par item.'
    ]
  }
};

(async () => {
  const bufs = await L.render(figs);
  await buildUnit(unit1, bufs);
})();
