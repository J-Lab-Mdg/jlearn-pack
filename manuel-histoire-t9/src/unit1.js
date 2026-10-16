// UNITÉ 1 — L'HISTOIRE ORALE (PE T9) : 2 séances + révision + examen
const L = require('./figlib');
const { buildUnit } = require('./engine');
const { head, svg, txt, nline, dot, tableEl, box, arrow, seg, circle, poly, PINK, PINK2, GREEN, GREENL, BLUE, BLUEL, OCRE } = L;

const figs = {};
// S1 — la démarche complète, du sujet à la préparation
figs.u1f1 = (() => { const { s, y } = head('La démarche de l’Histoire orale : la préparation', ['Six étapes avant même de rencontrer le témoin.']);
  const top = y + 15;
  const steps = ['1. choisir le sujet et le délimiter (temps, espace)', '2. construire la problématique (question de recherche)', '3. rechercher les sources écrites ET orales', '4. choisir les témoins', '5. prendre contact : rendez-vous, lieu, permission', '6. préparer l’interview : grille de questions, matériel'];
  let b = '';
  steps.forEach((t, i) => {
    b += box(110, top + i * 72, 780, 56, t, i % 2 ? BLUEL : GREENL, i % 2 ? BLUE : GREEN, 22);
    if (i < 5) b += arrow(500, top + i * 72 + 56, 500, top + (i + 1) * 72, PINK2, 4);
  });
  b += txt(500, top + 6 * 72 + 14, 'une enquête bien préparée est déjà à moitié réussie', 22, OCRE, 'bold', 'middle');
  return svg(1000, top + 6 * 72 + 46, s + b); })();
// S2 — de l'interview à l'interprétation
figs.u1f2 = (() => { const { s, y } = head('De l’interview à l’interprétation', ['Les trois derniers maillons : réaliser, analyser, interpréter.']);
  const top = y + 15;
  let b = box(80, top, 840, 92, '7. RÉALISER L’INTERVIEW : écouter, noter, enregistrer — une question à la fois, récit libre', GREENL, GREEN, 22);
  b += arrow(500, top + 92, 500, top + 122, PINK2, 4);
  b += box(80, top + 122, 840, 92, '8. ANALYSER : retranscrire fidèlement, trier les informations, repérer ce qui répond à la problématique', BLUEL, BLUE, 22);
  b += arrow(500, top + 214, 500, top + 244, PINK2, 4);
  b += box(80, top + 244, 840, 92, '9. INTERPRÉTER : recouper avec les sources écrites, combler leurs lacunes, reconstituer les résultats', '#F6D5E5', PINK2, 22);
  const yf = top + 244 + 92 + 26;
  b += txt(500, yf, 'le témoignage comble les manques des sources écrites — et les sources écrites vérifient le témoignage', 20, OCRE, 'bold', 'middle');
  return svg(1000, yf + 34, s + b); })();

const S = [
  {
    t: 'La démarche de l’Histoire orale : préparer l’enquête', comp: 'L’Histoire orale', theme: 'Du choix du sujet à la préparation de l’interview',
    goal: 'maîtriser les six premières étapes de la démarche de l’Histoire orale : sujet, problématique, sources, témoins, contact, préparation de l’interview',
    mat: 'Cahier d’enquête, grille de questions, liste bibliographique, documents',
    revQ: 'Rappelle les règles d’or de l’entretien apprises les années précédentes.',
    revRA: 'Contact visuel, empathie, une seule question à la fois, laisser raconter librement, recadrer poliment.',
    situation: 'La classe de Hanta veut reconstituer l’histoire du marché de sa commune. Problème : presque rien n’est écrit sur ce marché — pas de livre, à peine quelques registres. Mais des dizaines de personnes âgées l’ont vu naître et grandir. Leur mémoire est une bibliothèque vivante… à condition de savoir l’interroger avec méthode. Par où commencer ?',
    legende: 'Avant de tendre le micro, l’historien choisit son sujet, pose sa question et prépare son enquête.',
    motsCles: ['Histoire orale', 'choix du sujet', 'délimitation', 'problématique', 'hypothèse de travail', 'sources écrites', 'sources orales', 'bibliographie', 'témoins', 'prise de contact', 'grille d’entretien'],
    sections: [
      {
        titre: 'Choisir et délimiter le sujet',
        paras: [
          'Tout commence par un sujet : un fait, un lieu, un groupe dont on veut reconstituer l’histoire. Mais un sujet trop vaste ne se traite pas — il faut le délimiter dans le temps (quelles années ?) et dans l’espace (quel village, quel quartier ?). « Le marché de notre commune de 1970 à nos jours » se traite ; « les marchés de Madagascar », non.',
          'Vient ensuite la problématique : la question précise à laquelle l’enquête devra répondre — « Comment le marché a-t-il transformé la vie de la commune ? ». On peut aussi la formuler en hypothèse de travail : une réponse provisoire que l’enquête confirmera ou corrigera.',
        ],
      },
      {
        titre: 'Rechercher les sources, choisir les témoins',
        paras: ['Avant d’interroger qui que ce soit, l’historien fait l’inventaire de ce qui existe déjà :'],
        puces: [
          'les sources écrites : livres, registres, journaux, archives, photographies — on en dresse la liste (la bibliographie) et on repère leurs manques : ce que l’écrit ne dit pas, l’oral devra le dire ;',
          'les sources orales : qui sait quoi ? On choisit les témoins — ceux qui ont vécu les faits ou en gardent la mémoire — en variant les points de vue : un seul témoin ne suffit jamais ;',
          'la prise de contact : se présenter poliment, expliquer le projet, fixer le rendez-vous et le lieu, demander la permission d’enregistrer.',
        ],
      },
      {
        titre: 'Préparer l’interview',
        paras: [
          'Dernière étape avant le grand jour : la préparation. On rédige la grille d’entretien — des questions ouvertes, ordonnées du général au précis —, on prépare le matériel (cahier, enregistreur chargé), et le groupe se répartit les rôles : qui interroge, qui note, qui enregistre, qui gère le temps. Une enquête bien préparée est déjà à moitié réussie.',
        ],
      },
    ],
    doc: {
      titre: 'La tradition orale est une source de l’Histoire',
      source: 'd’après Jan Vansina, De la tradition orale. Essai de méthode historique (1961) — extrait adapté',
      texte: 'Dans les sociétés où l’écriture est rare, la tradition orale constitue la principale source de l’histoire. Rejeter ces témoignages parce qu’ils ne sont pas écrits serait condamner à l’oubli le passé de peuples entiers. Mais le témoignage oral, comme tout document, doit être soumis à la critique : il faut savoir qui parle, d’où il tient son récit, ce qu’il a intérêt à dire ou à taire. Recueillie avec méthode et croisée avec d’autres sources, la tradition orale permet d’écrire une histoire aussi rigoureuse que celle qui repose sur les archives.',
      questions: ['Pourquoi, selon Vansina, ne peut-on pas rejeter les sources orales ?',
        'Quelles questions critiques faut-il poser à un témoignage oral ?',
        'En quoi ce texte justifie-t-il l’enquête de la classe de Hanta ?'],
      reponses: ['Parce que dans les sociétés où l’écrit est rare, refuser l’oral reviendrait à condamner à l’oubli le passé de peuples entiers — dont une grande partie du passé malgache.',
        'Qui parle ? D’où tient-il son récit ? Qu’a-t-il intérêt à dire ou à taire ? — c’est la critique de la source, appliquée à l’oral.',
        'Le marché n’a presque pas laissé d’écrits : seule l’enquête orale, menée avec méthode et recoupée, permettra d’en écrire l’histoire rigoureusement.']
    },
    lexique: [
      ['Problématique', 'question de recherche qui guide toute l’enquête'],
      ['Hypothèse de travail', 'réponse provisoire que l’enquête vérifiera'],
      ['Bibliographie', 'liste ordonnée des sources écrites consultées'],
      ['Grille d’entretien', 'liste ordonnée des questions préparées'],
    ],
    synthese: 'Démarche de l’Histoire orale — préparation : 1. choisir et délimiter le sujet (temps, espace) ; 2. construire la problématique ou l’hypothèse ; 3. rechercher les sources écrites (bibliographie) et orales ; 4. choisir les témoins ; 5. prendre contact ; 6. préparer l’interview (grille, matériel, rôles).',
    saistu: 'Jan Vansina, l’historien qui a fait entrer la tradition orale à l’université, a appris par cœur des généalogies africaines longues de plusieurs siècles pour en vérifier la fiabilité ! Ses travaux ont prouvé que des royaumes entiers d’Afrique centrale pouvaient être reconstitués sans archives écrites — une révolution pour l’histoire de tous les pays du Sud, Madagascar compris.',
    exos: ['Vrai ou faux ? Corrige si faux. a) Un sujet d’enquête doit être le plus vaste possible. b) La problématique se formule avant l’interview. d) On interroge les témoins avant de chercher les sources écrites. e) Un seul témoin bien choisi suffit.',
      'Les étapes. a) Que signifie « délimiter » un sujet ? b) Qu’est-ce qu’une hypothèse de travail ? d) Que contient la bibliographie ? e) Que demande-t-on lors de la prise de contact ?',
      'Projet. Ta classe enquête sur l’histoire de l’école du village. a) Délimite le sujet dans le temps et l’espace. b) Formule une problématique. d) Cite deux sources écrites à chercher. e) Cite deux catégories de témoins à interroger.'],
    corr: ['a) faux : il doit être délimité dans le temps et l’espace ; b) vrai ; d) faux : on inventorie d’abord les sources écrites pour repérer leurs manques ; e) faux : il faut varier les témoins pour pouvoir recouper.',
      'a) fixer ses bornes dans le temps (années) et dans l’espace (lieu) ; b) une réponse provisoire à la problématique, que l’enquête confirmera ou corrigera ; d) la liste des sources écrites consultées ; e) un rendez-vous, un lieu, et la permission d’enregistrer.',
      'a) réponse libre — ex. : « l’école de notre village de 1960 à nos jours » ; b) réponse libre — ex. : « comment l’école a-t-elle changé la vie des enfants du village ? » ; d) registres de l’école, archives du fokontany, journaux, photographies (deux suffisent) ; e) anciens élèves, anciens maîtres, parents, voisins du quartier (deux suffisent).'],
    fig: 'u1f1'
  },
  {
    t: 'Réaliser l’interview, analyser et interpréter', comp: 'L’Histoire orale', theme: 'Les trois derniers maillons de la démarche',
    goal: 'réaliser l’interview, analyser les résultats et les interpréter pour reconstituer l’histoire',
    mat: 'Enregistreur, cahier de retranscription, sources écrites, dossier d’enquête',
    revQ: 'Récite les six étapes de préparation d’une enquête orale.',
    revRA: 'Choix et délimitation du sujet ; problématique ; recherche des sources écrites et orales ; choix des témoins ; prise de contact ; préparation de l’interview.',
    situation: 'Le jour J est arrivé : Hanta et son groupe s’assoient face à Neny Voahangy, doyenne des marchandes, qui a tenu son étal pendant quarante ans. Deux heures plus tard, ils rapportent un trésor d’histoires — et une question : comment transformer ces souvenirs en Histoire ? C’est tout l’enjeu des trois derniers maillons : réaliser, analyser, interpréter.',
    legende: 'L’interview n’est pas la fin de l’enquête : il reste à analyser, recouper et reconstituer.',
    motsCles: ['interview', 'écoute', 'retranscription', 'analyse', 'tri des informations', 'interprétation', 'recoupement', 'lacunes des sources écrites', 'reconstitution', 'dossier d’enquête'],
    sections: [
      {
        titre: 'Réaliser l’interview',
        paras: [
          'Pendant l’interview, les règles d’or s’appliquent : contact visuel, empathie, une seule question à la fois, récit libre, recadrage poli. On note et on enregistre — avec la permission du témoin — car la mémoire de l’enquêteur est aussi faillible que celle du témoin !',
        ],
      },
      {
        titre: 'Analyser les résultats',
        paras: [
          'De retour en classe, l’analyse commence par la retranscription fidèle : écrire les paroles telles qu’elles ont été dites, sans rien corriger. Puis on trie : quelles informations répondent à la problématique ? Lesquelles sont nouvelles ? Lesquelles restent obscures ou contradictoires ?',
        ],
      },
      {
        titre: 'Interpréter et reconstituer',
        paras: ['L’interprétation est le travail le plus exigeant :'],
        puces: [
          'recouper : confronter le témoignage aux sources écrites et aux autres témoins — ce qui concorde est solide, ce qui diverge appelle la prudence ;',
          'combler les lacunes : là où les sources écrites se taisent, le témoignage vérifié apporte ce qu’aucun document ne disait — c’est la grande force de l’Histoire orale ;',
          'reconstituer : rédiger le récit d’ensemble qui répond à la problématique, en citant ses sources ; le dossier final — problématique, grille, retranscriptions, analyse, conclusion — devient à son tour une source pour les chercheurs de demain.',
        ],
      },
    ],
    doc: {
      titre: 'Extrait d’un dossier d’enquête de classe',
      source: 'texte reconstitué : retranscription et analyse d’un entretien mené par des élèves auprès d’une ancienne marchande',
      texte: 'Retranscription (extrait) : « Je suis arrivée au marché en 1972, l’année où tout a changé au pays. Au début, nous étions une dizaine sous des parasols. Le grand hangar, on l’a construit bien plus tard — attends… c’était l’année du passage du cyclone, je crois. » — Analyse des élèves : le témoignage date l’arrivée de la marchande (1972, recoupée avec le registre communal) et décrit le marché des débuts, absent de toutes les sources écrites. La date du hangar reste incertaine : le témoin hésite. Recoupement prévu : archives du fokontany et deux autres marchandes.',
      questions: ['Relève une information que seules les sources orales pouvaient fournir.',
        'Comment les élèves traitent-ils l’hésitation du témoin sur la date du hangar ?',
        'Montre que ce dossier applique les maillons 8 et 9 de la démarche.'],
      reponses: ['La description du marché des débuts (« une dizaine sous des parasols ») : aucune source écrite ne la donnait — l’oral comble la lacune de l’écrit.',
        'Ils ne la rejettent ni ne l’acceptent : ils la signalent comme incertaine et prévoient un recoupement (archives, autres témoins) — c’est l’esprit critique.',
        'Maillon 8 (analyse) : retranscription fidèle avec hésitations, tri des informations ; maillon 9 (interprétation) : recoupement avec le registre communal et reconstitution prudente.']
    },
    lexique: [
      ['Retranscription', 'écriture fidèle, mot à mot, des paroles du témoin'],
      ['Analyse', 'tri des informations recueillies face à la problématique'],
      ['Interprétation', 'mise en relation des résultats avec les autres sources'],
      ['Reconstitution', 'récit d’ensemble rédigé à partir des résultats vérifiés'],
    ],
    synthese: 'Démarche — réalisation : 7. réaliser l’interview (règles d’or, noter, enregistrer) ; 8. analyser (retranscrire fidèlement, trier) ; 9. interpréter (recouper, combler les lacunes des sources écrites, reconstituer les résultats). Le dossier final devient une source.',
    saistu: 'À Madagascar, des pans entiers de l’histoire du 29 mars 1947 ou du 13 mai 1972 n’existent dans aucune archive : ils ne survivent que dans la mémoire des témoins et de leurs descendants. C’est pourquoi le programme de ta classe fait de l’enquête orale un outil essentiel : chaque entretien bien mené sauve un fragment d’histoire nationale que l’écrit n’a jamais noté.',
    exos: ['Remets dans l’ordre les maillons 7 à 9 : a) recouper et reconstituer ; b) retranscrire et trier ; d) écouter et enregistrer ; e) rédiger le dossier final.',
      'Comprendre. a) Pourquoi enregistrer alors qu’on prend des notes ? b) Pourquoi la retranscription garde-t-elle les hésitations ? d) Que fait-on d’une information non recoupée ? e) Qu’est-ce que « combler les lacunes des sources écrites » ?',
      'Esprit critique. Un témoin affirme que le marché a brûlé « vers 1985 » ; un journal d’époque date l’incendie de 1987. a) Les deux sources se contredisent-elles gravement ? b) Laquelle privilégier pour la date exacte ? d) Que garde-t-on du témoignage ? e) Rédige la phrase prudente qu’écrirait l’historien.'],
    corr: ['Ordre : d (réaliser l’interview), b (analyser), a (interpréter), e (le dossier conclut la démarche).',
      'a) parce que la mémoire de l’enquêteur est faillible : l’enregistrement garantit la fidélité ; b) parce qu’une hésitation peut avoir un sens — et que la source doit rester intacte ; d) on la signale comme incertaine et on cherche d’autres sources ; e) apporter par l’oral les informations que l’écrit n’a jamais notées.',
      'a) non : « vers 1985 » est une approximation de mémoire, proche de 1987 ; b) le journal d’époque, source écrite datée ; d) tout le reste : l’ambiance, les circonstances, les conséquences vécues ; e) réponse libre — ex. : « L’incendie, daté de 1987 par la presse, reste vif dans la mémoire des marchandes, qui le situent “vers 1985”. »'],
    fig: 'u1f2'
  }
];

const unit1 = {
  no: 1, roman: 'I', name: 'L’Histoire orale',
  rag: 'saisir la technique propre à l’Histoire orale et analyser les traces du passé à partir de sources historiques.',
  valeurs: 'esprit d’analyse, esprit critique',
  sessions: S,
  revision: {
    table: [
      ['Sujet délimité', 'Fait, lieu ou groupe borné dans le temps et dans l’espace', 'Choisir un sujet traitable'],
      ['Problématique', 'Question de recherche (ou hypothèse de travail) qui guide l’enquête', 'Formuler la question de départ'],
      ['Sources écrites et orales', 'Bibliographie des écrits + témoins choisis et variés', 'Inventorier avant d’interroger'],
      ['Prise de contact', 'Présentation, rendez-vous, lieu, permission d’enregistrer', 'Préparer la rencontre'],
      ['Interview', 'Règles d’or : contact visuel, empathie, une question à la fois, récit libre', 'Recueillir le témoignage'],
      ['Analyse et interprétation', 'Retranscrire, trier, recouper, combler les lacunes, reconstituer', 'Transformer la mémoire en Histoire']
    ],
    questions: [
      'Récite les neuf étapes de la démarche de l’Histoire orale.',
      'Pourquoi délimiter le sujet dans le temps et dans l’espace ?',
      'À quoi sert l’inventaire des sources écrites avant l’enquête ?',
      'Que fait-on pendant l’analyse des résultats ?',
      'Qu’apporte l’interprétation de plus que l’analyse ?'
    ],
    answers: [
      'Choix du sujet ; problématique ; recherche des sources orales et écrites ; choix des témoins ; prise de contact ; préparation de l’interview ; réalisation de l’interview ; analyse du résultat ; interprétation du résultat.',
      'Parce qu’un sujet trop vaste est intraitable : des bornes précises rendent l’enquête possible et rigoureuse.',
      'À repérer ce que l’écrit dit déjà — et surtout ses manques, que les témoignages oraux devront combler.',
      'On retranscrit fidèlement, puis on trie les informations : celles qui répondent à la problématique, les nouvelles, les incertaines.',
      'Elle recoupe le témoignage avec les autres sources, comble les lacunes de l’écrit et reconstitue le récit d’ensemble.'
    ]
  },
  exam: {
    exos: [
      'Questions de cours. a) Définis l’Histoire orale. b) Qu’est-ce qu’une problématique ? d) Qu’est-ce que la retranscription ? e) Qu’est-ce que le recoupement ?',
      'La démarche. a) Range dans l’ordre : interview, problématique, choix des témoins, analyse. b) Où se place la prise de contact ? d) Que prépare-t-on avant l’interview ? e) Quel est le dernier maillon de la démarche ?',
      'Vrai ou faux ? Corrige si faux. a) L’hypothèse de travail est une réponse définitive. b) On choisit des témoins aux points de vue variés. d) La retranscription corrige les fautes du témoin. e) Le dossier final devient une source.',
      'Étude de cas. Ta classe enquête sur les anciens tirailleurs de ta région. a) Formule la problématique. b) Cite deux sources écrites à consulter. d) Qui interroger, les tirailleurs ayant disparu ? e) Pourquoi cette enquête est-elle urgente ?',
      'Esprit critique. a) Pourquoi un témoignage oral doit-il être critiqué comme tout document ? b) Cite les trois questions critiques de Vansina. d) Que faire de deux témoignages contradictoires ? e) Explique : « l’oral comble les lacunes de l’écrit ».'
    ],
    corr: [
      'a) la collecte et l’exploitation méthodiques des témoignages parlés pour reconstituer le passé ; b) la question de recherche qui guide l’enquête ; d) l’écriture fidèle, mot à mot, des paroles du témoin ; e) la confrontation d’un témoignage avec d’autres sources. Un point par item.',
      'a) problématique, choix des témoins, interview, analyse ; b) après le choix des témoins, avant la préparation de l’interview ; d) la grille de questions, le matériel, la répartition des rôles ; e) l’interprétation du résultat (recoupement et reconstitution). Un point par item.',
      'a) faux : c’est une réponse provisoire que l’enquête vérifie ; b) vrai ; d) faux : elle écrit les paroles telles quelles ; e) vrai. Un point par item.',
      'a) réponse libre — ex. : « quelle fut la vie des tirailleurs de notre région pendant et après la guerre ? » ; b) archives, journaux d’époque, registres militaires, monuments aux morts (deux suffisent) ; d) leurs descendants et les anciens qui les ont connus ; e) parce que les derniers témoins directs et leurs enfants vieillissent : chaque année qui passe efface des souvenirs. Un point par item.',
      'a) parce que la mémoire est faillible et que tout témoin peut avoir intérêt à dire ou à taire ; b) qui parle ? d’où tient-il son récit ? qu’a-t-il intérêt à dire ou à taire ? ; d) les signaler, chercher d’autres sources, ne pas trancher sans preuve ; e) les témoignages vérifiés apportent les informations que les documents écrits n’ont jamais notées. Un point par item.'
    ]
  }
};

(async () => {
  const bufs = await L.render(figs);
  await buildUnit(unit1, bufs);
})();
