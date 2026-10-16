// UNITÉ 7 — LES PATRIMOINES CULTURELS ET HISTORIQUES DE MADAGASCAR (PE T8) : 2 séances + révision + examen
const L = require('./figlib');
const { buildUnit } = require('./engine');
const { head, svg, txt, nline, dot, tableEl, box, arrow, seg, circle, poly, PINK, PINK2, GREEN, GREENL, BLUE, BLUEL, OCRE } = L;

const figs = {};
// S1 — tableau patrimoine matériel / immatériel
figs.u7f1 = (() => { const { s, y } = head('Les patrimoines culturels', ['Matériel : ce qui se touche ; immatériel : ce qui se vit.']);
  const top = y + 15;
  const data = [['Patrimoine MATÉRIEL', 'Patrimoine IMMATÉRIEL'],
    ['monuments (Rova, portes…)', 'traditions orales (contes…)'],
    ['sites archéologiques', 'arts du spectacle (hiragasy)'],
    ['paysages construits', 'rituels et pratiques sociales'],
    ['œuvres d’art (aloalo…)', 'fêtes traditionnelles'],
    ['documents (sorabe…)', 'savoir-faire (tissage…)']];
  let b = tableEl(60, top, [440, 440], 54, data);
  b += txt(500, top + 6 * 54 + 40, 'un patrimoine = un héritage commun à définir, protéger, transmettre', 21, GREEN, 'bold', 'middle');
  return svg(1000, top + 6 * 54 + 72, s + b); })();
// S2 — protéger et transmettre
figs.u7f2 = (() => { const { s, y } = head('Protéger et transmettre les patrimoines historiques', ['De la définition à la mémoire collective : la chaîne de sauvegarde.']);
  const top = y + 12;
  const steps = ['1. définir : reconnaître ce qui fait patrimoine', '2. sensibiliser : faire connaître sa valeur à tous', '3. protéger : appliquer la loi de protection', '4. transmettre : enseigner aux jeunes générations', '5. entretenir la mémoire collective de la nation'];
  let b = '';
  steps.forEach((t, i) => {
    b += box(120, top + i * 78, 760, 58, t, i % 2 ? BLUEL : GREENL, i % 2 ? BLUE : GREEN, 21);
    if (i < 4) b += arrow(500, top + i * 78 + 58, 500, top + (i + 1) * 78, PINK2, 4);
  });
  const yb = top + 5 * 78 + 10;
  b += txt(500, yb, 'coutumes, contes, danses, cuisine, savoir-faire : un trésor vivant', 21, PINK2, 'bold', 'middle');
  b += txt(500, yb + 32, 'chaque génération est le gardien du suivant', 21, OCRE, 'bold', 'middle');
  return svg(1000, yb + 62, s + b); })();


const S = [
  {
    t: 'Les patrimoines culturels de Madagascar', comp: 'Les patrimoines culturels et historiques', theme: 'Patrimoine culturel matériel et immatériel',
    goal: 'définir le patrimoine culturel et distinguer ses formes matérielles et immatérielles',
    mat: 'Photos de monuments et de fêtes, tableau de classement, documents',
    revQ: 'Donne les quatre étapes de la marche vers l’indépendance.',
    revRA: 'Après 1947 ; Loi-cadre 1956 ; référendum et République 1958 ; indépendance le 26 juin 1960.',
    situation: 'Le Rova qui domine Antananarivo, les aloalo sculptés du sud, un conte que raconte ta grand-mère, le hiragasy qui fait danser tout un village : qu’ont en commun ces choses si différentes ? Toutes sont des trésors reçus des générations passées — notre patrimoine. Mais un palais se visite, un conte s’écoute : comment classer ces richesses pour mieux les protéger ?',
    legende: 'Un palais se visite, un conte s’écoute : deux formes d’un même trésor hérité.',
    motsCles: ['patrimoine culturel', 'matériel', 'immatériel', 'monuments', 'sites archéologiques', 'paysages construits', 'œuvres d’art', 'documents', 'traditions orales', 'arts du spectacle', 'rituels', 'fêtes', 'UNESCO', 'Ambohimanga'],
    sections: [
      {
        titre: 'Qu’est-ce que le patrimoine ?',
        paras: [
          'Le mot patrimoine vient du latin patrimonium : « ce qui vient des pères » — l’héritage. Appliqué à la culture, il désigne tout ce qu’une communauté — village, région, nation, humanité — reçoit du passé, reconnaît comme précieux et décide de transmettre.',
        ],
      },
      {
        titre: 'Le patrimoine matériel : ce qui se touche',
        paras: ['Le patrimoine matériel de Madagascar est d’une grande richesse :'],
        puces: [
          'des monuments, comme le Rova d’Antananarivo ou les portes de pierre des villages fortifiés de l’Imerina ;',
          'des sites archéologiques, tels les anciens villages des Hautes Terres ou les comptoirs échangeurs de la côte ;',
          'des paysages construits — les rizières en terrasses betsileo, œuvre de générations ;',
          'des œuvres d’art, comme les aloalo funéraires mahafaly ;',
          'des documents : les sorabe en caractères arabes, les archives royales, les photographies anciennes.',
        ],
      },
      {
        titre: 'Le patrimoine immatériel : ce qui se pratique',
        paras: ['Le patrimoine immatériel est tout aussi précieux, mais fragile autrement : il ne vit que tant qu’on le pratique :'],
        puces: [
          'les traditions orales — contes (angano), proverbes (ohabolana), généalogies récitées ;',
          'les arts du spectacle — le hiragasy des Hautes Terres, les chants et musiques de chaque région ;',
          'les rituels et pratiques sociales — le famadihana, les cérémonies de circoncision, les kabary de mariage ;',
          'les fêtes — le fandroana d’autrefois, les fêtes de villages.',
        ],
      },
      {
        titre: 'Une reconnaissance mondiale',
        paras: [
          'L’UNESCO protège ces deux formes au niveau mondial : la colline royale d’Ambohimanga est classée patrimoine mondial (matériel), et le savoir-faire du bois des Zafimaniry comme le kabary malgache sont inscrits au patrimoine immatériel de l’humanité. Première mission du citoyen : connaître ce double trésor — on ne protège bien que ce qu’on connaît.',
        ],
      },
    ],
    doc: {
      titre: 'La convention du patrimoine mondial',
      source: 'd’après la Convention de l’UNESCO concernant la protection du patrimoine mondial, culturel et naturel (Paris, 1972) — extraits adaptés',
      texte: 'Constatant que le patrimoine culturel est de plus en plus menacé de destruction, et que la disparition d’un bien du patrimoine constitue un appauvrissement du patrimoine de tous les peuples du monde, les États signataires conviennent de ce qui suit. Sont considérés comme patrimoine culturel : les monuments, œuvres d’architecture, de sculpture ou de peinture ; les ensembles de constructions ; les sites, œuvres combinées de l’homme et de la nature, ayant une valeur universelle exceptionnelle. Chaque État s’engage à assurer l’identification, la protection, la conservation et la transmission aux générations futures du patrimoine situé sur son territoire.',
      questions: ['Pourquoi la disparition d’un bien culturel appauvrit-elle « tous les peuples du monde » ?',
        'Relève les quatre devoirs que chaque État signataire accepte.',
        'À quelle catégorie de la convention rattaches-tu la colline d’Ambohimanga ? Justifie.'],
      reponses: ['Parce qu’un bien exceptionnel a une valeur universelle : il appartient à l’histoire de l’humanité entière — sa perte est irréparable pour tous, pas seulement pour son pays.',
        'Identifier, protéger, conserver et transmettre aux générations futures le patrimoine de son territoire.',
        'Aux « sites, œuvres combinées de l’homme et de la nature » : la colline unit cité royale, porte de pierre et bois sacrés — c’est à ce titre qu’elle fut classée en 2001.']
    },
    lexique: [
      ['Patrimoine', 'héritage reçu du passé et destiné à être transmis'],
      ['Matériel', 'patrimoine concret : monuments, objets, documents'],
      ['Immatériel', 'patrimoine vivant : pratiques, savoirs, expressions'],
      ['UNESCO', 'organisation des Nations unies pour l’éducation, la science et la culture'],
    ],
    synthese: 'Patrimoine culturel = héritage commun à transmettre. Matériel : monuments, sites archéologiques, paysages construits, œuvres d’art, documents. Immatériel : traditions orales, arts du spectacle, rituels et pratiques sociales, fêtes. Exemples malgaches : Rova et Ambohimanga ; hiragasy, kabary, famadihana.',
    saistu: 'La colline royale d’Ambohimanga a été classée au patrimoine mondial de l’UNESCO en 2001 : ses bois sacrés, sa porte à disque de pierre — qu’une vingtaine d’hommes manœuvraient chaque soir ! — et sa cité royale en font un lieu unique. Et le kabary malgache, l’art oratoire des grandes occasions, est entré en 2021 au patrimoine immatériel de l’humanité : la parole malgache est désormais un trésor mondial.',
    exos: ['Classe en matériel ou immatériel : a) les aloalo mahafaly ; b) un conte angano ; d) les sorabe ; e) le famadihana.',
      'Définitions. a) Que signifie le mot « patrimoine » ? b) Cite les cinq formes du patrimoine matériel. d) Cite les quatre formes du patrimoine immatériel. e) Pourquoi l’immatériel est-il plus fragile ?',
      'Chez toi. a) Cite un patrimoine matériel de ta région. b) Cite un patrimoine immatériel de ta région. d) Lequel des deux te semble le plus menacé, et pourquoi ? e) Que peut faire un élève pour les connaître ?'],
    corr: ['a) matériel (œuvres d’art) ; b) immatériel (tradition orale) ; d) matériel (documents) ; e) immatériel (rituel).',
      'a) l’héritage reçu des générations passées (« ce qui vient des pères ») ; b) monuments, sites archéologiques, paysages construits, œuvres d’art, documents ; d) traditions orales, arts du spectacle, rituels et pratiques sociales, fêtes ; e) parce qu’il ne vit que tant qu’on le pratique : une génération qui cesse suffit à le perdre.',
      'a) réponse libre — un monument, site ou objet local ; b) réponse libre — un conte, une danse, une fête locale ; d) réponse libre argumentée ; e) interroger les anciens, participer aux fêtes, visiter les sites — et mener une enquête orale comme à l’unité I.'],
    fig: 'u7f1'
  },
  {
    t: 'Protéger et transmettre les patrimoines historiques', comp: 'Les patrimoines culturels et historiques', theme: 'Sauvegarde, loi, transmission et mémoire collective',
    goal: 'expliquer pourquoi et comment protéger et transmettre les patrimoines historiques de Madagascar',
    mat: 'Textes (loi de protection), exemples locaux, schéma de la chaîne de sauvegarde',
    revQ: 'Distingue patrimoine matériel et immatériel avec deux exemples de chaque.',
    revRA: 'Matériel : se touche — Rova, sorabe ; immatériel : se pratique — hiragasy, famadihana (ou autres exemples).',
    situation: 'En 1995, un incendie a ravagé le Rova d’Antananarivo : en quelques heures, des trésors irremplaçables sont partis en fumée. Ailleurs, des tombes anciennes sont pillées, des contes meurent avec les derniers conteurs, des savoir-faire disparaissent sans bruit. Le patrimoine ne se garde pas tout seul : il faut le défendre. Qui doit le faire — et comment ?',
    legende: 'Un monument brûlé, un conte oublié ne reviennent pas : le patrimoine ne se garde pas tout seul.',
    motsCles: ['sauvegarde', 'mémoire collective', 'identité', 'définir', 'sensibiliser', 'loi de protection', 'classement', 'pillage', 'transmission', 'commémoration', 'gardiens du patrimoine'],
    sections: [
      {
        titre: 'Pourquoi protéger ?',
        paras: ['Trois raisons commandent la sauvegarde :'],
        puces: [
          'le patrimoine historique est la mémoire collective de la nation : il raconte d’où nous venons, il fonde l’identité commune — un peuple qui perd son patrimoine perd une part de lui-même ;',
          'il est irremplaçable : un monument brûlé, un conte oublié ne reviennent pas ;',
          'il est une richesse d’avenir — le tourisme culturel, les métiers d’art en vivent.',
        ],
      },
      {
        titre: 'Comment protéger ? La chaîne à cinq maillons',
        paras: ['La sauvegarde suit une chaîne :'],
        puces: [
          'définir : inventorier ce qui fait patrimoine — c’est le travail des historiens, des musées, des communautés elles-mêmes ;',
          'sensibiliser : expliquer sa valeur à tous — par l’école, les médias, les journées du patrimoine ; on ne respecte que ce qu’on comprend ;',
          'protéger par la loi : Madagascar s’est doté d’une législation sur la protection du patrimoine national, qui classe les biens culturels, interdit leur destruction, leur pillage et leur sortie du territoire, et punit les contrevenants ; les conventions de l’UNESCO complètent cette protection au niveau mondial ;',
          'transmettre : le patrimoine immatériel surtout ne survit que par la transmission — les coutumes, les contes, les danses, les traditions culinaires, les savoir-faire doivent passer des anciens aux jeunes : c’est l’affaire des familles, des associations, de l’école… et la tienne ;',
          'entretenir la mémoire collective : commémorations, musées, enseignement de l’Histoire — ce manuel lui-même y participe.',
        ],
      },
      {
        titre: 'La boucle de l’année se referme',
        paras: [
          'À l’unité I, tu as appris à recueillir la mémoire des anciens ; tu sais maintenant pourquoi ce geste est vital — chaque enquête orale, chaque conte noté, chaque visite d’un site est un acte de sauvegarde. Le patrimoine n’a pas de meilleurs gardiens que ceux qui l’aiment et le connaissent : vous.',
        ],
      },
    ],
    doc: {
      titre: 'La loi malgache protège le patrimoine national',
      source: 'd’après l’ordonnance n° 82-029 relative à la sauvegarde, la protection et la conservation du patrimoine national (Madagascar, 1982) — extraits adaptés',
      texte: 'Le patrimoine national comprend les biens culturels, meubles et immeubles, qui présentent un intérêt pour l’histoire, l’art, l’archéologie ou les traditions du pays. Les biens classés ne peuvent être détruits, déplacés, modifiés ou restaurés sans autorisation. L’exportation des biens culturels classés hors du territoire national est interdite. Les fouilles archéologiques sont soumises à autorisation, et toute découverte fortuite doit être déclarée à l’autorité compétente. Les infractions aux présentes dispositions sont punies conformément à la loi.',
      questions: ['Quels biens la loi protège-t-elle, et contre quels dangers ?',
        'Pourquoi interdire l’exportation des biens culturels classés ?',
        'Que doit faire un paysan qui découvre des poteries anciennes dans son champ ? Pourquoi ?'],
      reponses: ['Les biens culturels d’intérêt historique, artistique, archéologique ou traditionnel — contre la destruction, le déplacement, la modification sauvage, l’exportation et le pillage des fouilles.',
        'Parce qu’un bien sorti du territoire est perdu pour la mémoire nationale : il enrichit des collections lointaines au lieu de raconter l’histoire du pays à ses propres enfants.',
        'Déclarer sa découverte à l’autorité compétente : une poterie arrachée sans méthode perd son contexte — datée et étudiée en place, elle devient une page d’histoire (souviens-toi de la démarche archéologique).']
    },
    lexique: [
      ['Mémoire collective', 'souvenir commun qui fonde l’identité d’une nation'],
      ['Classement', 'inscription officielle d’un bien sur la liste protégée'],
      ['Pillage', 'vol ou destruction de biens culturels'],
      ['Commémoration', 'cérémonie entretenant le souvenir d’un événement'],
    ],
    synthese: 'Patrimoines historiques matériels et immatériels (coutumes, contes, danses, traditions culinaires, savoir-faire) = mémoire collective de la nation. Chaîne de sauvegarde : définir → sensibiliser → protéger par la loi → transmettre aux jeunes → entretenir la mémoire. Chaque génération en est le gardien.',
    saistu: 'Après l’incendie de 1995, le Rova d’Antananarivo a été patiemment reconstruit — des années de travaux pour rendre à la capitale son symbole. Mais le plus émouvant est ailleurs : une partie des objets royaux avait été sauvée des flammes par des mains anonymes, gardée puis restituée. La meilleure assurance d’un patrimoine, ce sont les citoyens qui le considèrent comme leur bien propre.',
    exos: ['La chaîne. a) Cite les cinq maillons de la chaîne de sauvegarde. b) Pourquoi commencer par « définir » ? d) Que fait la loi de protection ? e) Qui assure la transmission ?',
      'Pourquoi protéger ? a) Qu’est-ce que la mémoire collective ? b) Pourquoi dit-on le patrimoine « irremplaçable » ? d) En quoi est-il une richesse d’avenir ? e) Cite cinq formes de patrimoine immatériel historique.',
      'Agir. a) Que peut faire un élève pour la sauvegarde ? b) Relie l’enquête orale de l’unité I à cette séance. d) Propose une action de sensibilisation dans ton école. e) Pourquoi dit-on que chaque génération est « gardienne » du patrimoine ?'],
    corr: ['a) définir, sensibiliser, protéger par la loi, transmettre, entretenir la mémoire collective ; b) parce qu’on ne peut protéger ce qu’on n’a pas identifié ; d) elle classe les biens, interdit destruction, pillage et sortie du territoire, et punit les contrevenants ; e) les familles, l’école, les associations — et chaque jeune.',
      'a) le souvenir commun qu’une nation garde de son passé et qui fonde son identité ; b) parce qu’un bien détruit ou un savoir oublié ne revient jamais ; d) tourisme culturel, métiers d’art, fierté nationale ; e) coutumes, contes, danses, traditions culinaires, savoir-faire.',
      'a) connaître, visiter, interroger les anciens, signaler les menaces, participer aux fêtes ; b) l’enquête orale recueille et fixe la mémoire des témoins : c’est un acte de sauvegarde du patrimoine immatériel ; d) réponse libre — exposition, journée du patrimoine, recueil de contes ; e) parce que le patrimoine ne passe au suivant que si la génération présente le protège et le transmet.'],
    fig: 'u7f2'
  }
];


const unit7 = {
  no: 7, roman: 'VII', name: 'Les patrimoines culturels et historiques de Madagascar',
  rag: 'porter un regard sur la réalité sociale à Madagascar en exploitant les traces du passé, et s’engager pour la sauvegarde du patrimoine.',
  valeurs: 'fierté d’être malgache, identité culturelle malgache',
  sessions: S,
  revision: {
    table: [
      ['Patrimoine culturel', 'Héritage reçu, reconnu et à transmettre (patrimonium : « ce qui vient des pères »)', 'Définir la notion'],
      ['Patrimoine matériel', 'Monuments, sites archéologiques, paysages construits, œuvres d’art, documents', 'Citer les cinq formes'],
      ['Patrimoine immatériel', 'Traditions orales, arts du spectacle, rituels et pratiques sociales, fêtes', 'Citer les quatre formes'],
      ['Exemples malgaches', 'Rova, Ambohimanga (UNESCO 2001), sorabe ; hiragasy, kabary (UNESCO 2021), famadihana', 'Illustrer chaque catégorie'],
      ['Patrimoines historiques', 'Matériels + immatériels : coutumes, contes, danses, traditions culinaires, savoir-faire', 'Reconnaître le trésor vivant'],
      ['Chaîne de sauvegarde', 'Définir → sensibiliser → loi de protection → transmettre → mémoire collective', 'Réciter et appliquer les cinq maillons']
    ],
    questions: [
      'Définis le patrimoine culturel et donne l’étymologie du mot.',
      'Cite les cinq formes du patrimoine matériel et les quatre formes de l’immatériel.',
      'Donne deux patrimoines malgaches classés par l’UNESCO.',
      'Récite la chaîne de sauvegarde en cinq maillons.',
      'Explique pourquoi le patrimoine est la mémoire collective de la nation.'
    ],
    answers: [
      'L’ensemble des biens hérités du passé qu’une communauté reconnaît et veut transmettre ; du latin patrimonium, « ce qui vient des pères ».',
      'Matériel : monuments, sites archéologiques, paysages construits, œuvres d’art, documents ; immatériel : traditions orales, arts du spectacle, rituels et pratiques sociales, fêtes.',
      'La colline royale d’Ambohimanga (patrimoine mondial, 2001) et le kabary malgache (patrimoine immatériel, 2021) — ou le savoir-faire du bois des Zafimaniry.',
      'Définir, sensibiliser, protéger par la loi, transmettre aux jeunes générations, entretenir la mémoire collective.',
      'Parce qu’il raconte d’où vient la nation et fonde son identité commune : le perdre, c’est perdre une part de soi — d’où le devoir de chaque génération de le transmettre.'
    ]
  },
  exam: {
    exos: [
      'Questions de cours. a) Définis le patrimoine culturel. b) Distingue matériel et immatériel. d) Qu’est-ce que la mémoire collective ? e) Cite les cinq maillons de la chaîne de sauvegarde.',
      'Classement. Classe en matériel ou immatériel : a) les terrasses betsileo ; b) le kabary ; d) les archives royales ; e) une recette traditionnelle.',
      'Exemples malgaches. a) Cite deux monuments du patrimoine matériel. b) Cite deux traditions du patrimoine immatériel. d) Qu’a classé l’UNESCO en 2001 ? e) Et en 2021 ?',
      'La protection. a) Que prévoit la loi de protection du patrimoine ? b) Pourquoi sensibiliser avant de protéger ? d) Qui transmet le patrimoine immatériel ? e) Pourquoi l’immatériel est-il le plus fragile ?',
      'Agir et relier. a) Montre que l’enquête orale est un acte de sauvegarde. b) Propose deux actions d’élève pour le patrimoine. d) Pourquoi le patrimoine est-il une richesse d’avenir ? e) Explique : « chaque génération est gardienne du patrimoine ».'
    ],
    corr: [
      'a) l’ensemble des biens hérités du passé, reconnus et à transmettre ; b) matériel : biens concrets qui se touchent ; immatériel : pratiques vivantes qui se transmettent ; d) le souvenir commun qui fonde l’identité de la nation ; e) définir, sensibiliser, protéger par la loi, transmettre, entretenir la mémoire. Un point par item.',
      'a) matériel (paysage construit) ; b) immatériel (art oratoire) ; d) matériel (documents) ; e) immatériel (tradition culinaire). Un point par item.',
      'a) le Rova d’Antananarivo, les portes de pierre des villages fortifiés (ou autres) ; b) le hiragasy, le famadihana, les angano (deux suffisent) ; d) la colline royale d’Ambohimanga ; e) le kabary malgache. Un point par item.',
      'a) elle classe les biens culturels, interdit destruction, pillage et sortie du territoire, et punit les contrevenants ; b) parce qu’on ne respecte que ce qu’on comprend : sans adhésion de tous, la loi reste lettre morte ; d) les familles, l’école, les associations — les anciens vers les jeunes ; e) parce qu’il ne vit que tant qu’on le pratique : une génération qui cesse suffit à le perdre. Un point par item.',
      'a) elle recueille et fixe la mémoire des témoins : retranscrite et archivée, elle sauve un patrimoine oral menacé ; b) interroger les anciens, monter une exposition, visiter et faire connaître un site, signaler une menace (deux suffisent) ; d) tourisme culturel, métiers d’art, rayonnement du pays ; e) le patrimoine ne parvient à la génération suivante que si la génération présente le protège et le transmet — chacune est un maillon de la chaîne. Un point par item.'
    ]
  }
};

(async () => {
  const bufs = await L.render(figs);
  await buildUnit(unit7, bufs);
})();
