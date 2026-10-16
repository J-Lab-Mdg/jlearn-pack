// UNITÉ 1 — L'HISTOIRE ORALE ET LES GRANDES PÉRIODES DE LA PRÉHISTOIRE (PE T7) : 4 séances + révision + examen
const L = require('./figlib');
const { buildUnit } = require('./engine');
const { head, svg, txt, nline, dot, tableEl, box, arrow, seg, circle, poly, PINK, PINK2, GREEN, GREENL, BLUE, BLUEL, OCRE } = L;

const figs = {};
// S1 — les étapes du projet d'Histoire orale
figs.u1f1 = (() => { const { s, y } = head('Les cinq étapes du projet d’Histoire orale', ['De l’idée au rendez-vous : la démarche du programme, dans l’ordre.']);
  const top = y + 15;
  const steps = ['1. choisir un thème délimité (temps, espace)', '2. élaborer le questionnaire sur le thème', '3. identifier les personnes ressources', '4. déterminer le lieu de rencontre', '5. demander un rendez-vous'];
  let b = '';
  steps.forEach((t, i) => {
    b += box(150, top + i * 72, 700, 54, t, i % 2 ? BLUEL : GREENL, i % 2 ? BLUE : GREEN, 22);
    if (i < 4) b += arrow(500, top + i * 72 + 54, 500, top + (i + 1) * 72, PINK2, 4);
  });
  b += txt(500, top + 5 * 72 + 20, 'puis : mener l’enquête, noter ou enregistrer, vérifier et restituer', 21, OCRE, 'bold', 'middle');
  return svg(1000, top + 5 * 72 + 52, s + b); })();
// S2 — frise des grandes périodes
figs.u1f2 = (() => { const { s, y } = head('La frise des grandes périodes', ['Deux périodes de la Préhistoire, quatre périodes de l’Histoire.']);
  const top = y + 30;
  const X = 60, W = 880, Y1 = top + 50, Y2 = top + 240;
  // Préhistoire
  let b = txt(X, top + 10, 'PRÉHISTOIRE (avant l’écriture)', 24, GREEN, 'bold');
  b += `<rect x="${X}" y="${Y1}" width="560" height="56" fill="${GREENL}" stroke="${GREEN}" stroke-width="3"/>`;
  b += `<rect x="${X + 560}" y="${Y1}" width="320" height="56" fill="#CDE8CF" stroke="${GREEN}" stroke-width="3"/>`;
  b += txt(X + 280, Y1 + 36, 'Paléolithique', 24, '#222', 'bold', 'middle');
  b += txt(X + 720, Y1 + 36, 'Néolithique', 24, '#222', 'bold', 'middle');
  b += txt(X, Y1 + 86, 'apparition de l’Homme', 20, '#333');
  b += txt(X + 560, Y1 + 86, '−12 000', 22, PINK2, 'bold', 'middle');
  b += txt(X + 880, Y1 + 86, '−3 000', 22, PINK2, 'bold', 'end');
  // Histoire
  b += txt(X, Y2 - 40, 'HISTOIRE (depuis l’écriture, vers −3 000)', 24, BLUE, 'bold');
  const per = [['Antiquité', 190], ['Moyen Âge', 190], ['Temps modernes', 230], ['Époque contemp.', 270]];
  const fills = [BLUEL, '#BBD4EE', BLUEL, '#BBD4EE'];
  let cx = X;
  per.forEach(([t, w], i) => {
    b += `<rect x="${cx}" y="${Y2}" width="${w}" height="56" fill="${fills[i]}" stroke="${BLUE}" stroke-width="3"/>`;
    b += txt(cx + w / 2, Y2 + 35, t, 21, '#222', 'bold', 'middle');
    cx += w;
  });
  const dates = ['−3 000', '476', '1492', '1789', 'nos jours'];
  const dx = [X, X + 190, X + 380, X + 610, X + 880];
  dates.forEach((d, i) => { b += txt(dx[i], Y2 + 86, d, 22, PINK2, 'bold', i === 0 ? 'start' : i === 4 ? 'end' : 'middle'); });
  return svg(1000, Y2 + 110, s + b); })();
// S3 — tableau Paléolithique / Néolithique
figs.u1f3 = (() => { const { s, y } = head('Paléolithique et Néolithique', ['Deux manières de vivre — comparaison terme à terme.']);
  const top = y + 15;
  const data = [['', 'Paléolithique', 'Néolithique'],
    ['outils', 'pierre taillée, primitifs', 'pierre polie, améliorés'],
    ['nourriture', 'chasse et cueillette', 'agriculture, élevage'],
    ['habitat', 'nomade (grottes, abris)', 'sédentaire (villages)'],
    ['découverte', 'le feu', 'poterie, tissage']];
  let b = tableEl(60, top, [230, 330, 330], 54, data);
  b += txt(500, top + 5 * 54 + 42, 'étymologie : palaios = ancien, neos = nouveau, lithos = pierre', 22, GREEN, 'bold', 'middle');
  return svg(1000, top + 5 * 54 + 74, s + b); })();
// S4 — évolution de l'Homme
figs.u1f4 = (() => { const { s, y } = head('L’évolution de l’Homme', ['Six étapes, de l’Australopithèque à l’Homme actuel.']);
  const top = y + 15;
  const steps = [['Australopithèque', 'marche debout'], ['Homo habilis', 'premiers outils'], ['Homo erectus', 'maîtrise du feu'], ['Homo neanderthalensis', 'premières sépultures'], ['Homo sapiens', 'homme moderne'], ['Homo sapiens sapiens', 'art, agriculture']];
  let b = '';
  steps.forEach(([n, d], i) => {
    const Y = top + i * 66;
    b += box(80, Y, 400, 50, n, i < 2 ? GREENL : i < 4 ? BLUEL : '#FDE7EF', i < 2 ? GREEN : i < 4 ? BLUE : PINK2, 21);
    b += txt(520, Y + 32, d, 21, '#333');
    if (i < 5) b += arrow(280, Y + 50, 280, Y + 66, OCRE, 3.5);
  });
  b += txt(500, top + 6 * 66 + 18, 'une évolution biologique (le corps) et technique (les outils)', 21, GREEN, 'bold', 'middle');
  return svg(1000, top + 6 * 66 + 50, s + b); })();


const S = [
  {
    t: 'Le projet d’Histoire orale', comp: 'L’Histoire orale', theme: 'Les étapes d’un projet d’Histoire orale',
    goal: 's’initier à l’Histoire orale et monter un projet d’enquête orale en suivant ses étapes',
    mat: 'Fiche d’enquête, questionnaire d’enquête, cahier, tableau',
    revQ: 'En T6, quelles sources l’historien utilise-t-il pour reconstituer le passé ?',
    revRA: 'Les sources écrites, orales, matérielles (vestiges) et audiovisuelles.',
    situation: 'La grand-mère de Fara connaît l’histoire du village mieux que personne : la grande sécheresse, la construction de l’école, les chants anciens. Mais rien de tout cela n’est écrit dans un livre. Si personne ne l’interroge, tout disparaîtra avec elle. Comment transformer sa mémoire en document d’Histoire ? C’est tout l’art de l’Histoire orale — et cela se prépare comme un vrai projet.',
    legende: 'La mémoire de la grand-mère de Fara n’est écrite nulle part : si personne ne l’interroge, elle disparaîtra avec elle.',
    motsCles: ['Histoire orale', 'témoignages', 'thème délimité', 'questionnaire', 'personnes ressources', 'lieu de rencontre', 'rendez-vous', 'croiser les témoignages', 'esprit critique'],
    sections: [
      {
        titre: 'Qu’est-ce que l’Histoire orale ?',
        paras: [
          'L’Histoire orale est la collecte des témoignages parlés pour reconstituer le passé. Elle permet d’écrire l’histoire de ceux qui n’ont pas laissé de documents écrits : une famille, un village, un événement vécu par les anciens.',
        ],
      },
      {
        titre: 'Les cinq étapes du projet',
        paras: ['Un projet d’Histoire orale se prépare comme une vraie enquête :'],
        puces: [
          'choisir un thème délimité dans le temps ET dans l’espace — « l’école de notre fokontany de 1980 à 2000 », et non « l’histoire du village » ;',
          'élaborer un questionnaire sur le thème : des questions ouvertes (« Racontez-moi… », « Comment avez-vous vécu… »), ordonnées du général au précis, sans suggérer les réponses ;',
          'identifier les personnes ressources : celles qui ont vécu les faits ou en gardent la mémoire — anciens, ray aman-dreny, notables ; il en faut plusieurs ;',
          'déterminer le lieu de rencontre : calme, familier au témoin, souvent chez lui ;',
          'demander un rendez-vous : poliment, à l’avance, en expliquant le projet.',
        ],
      },
      {
        titre: 'Mener l’enquête avec respect et esprit critique',
        paras: [
          'Le jour de l’entretien : écouter plus que parler, noter ou enregistrer avec permission, remercier. À Madagascar, le respect des aînés commande d’être accompagné et de suivre les usages.',
          'Ensuite vient le travail de l’historien : croiser les témoignages — un souvenir se compare toujours à d’autres sources, car la mémoire peut se tromper. C’est l’esprit critique.',
        ],
      },
    ],
    doc: {
      titre: 'Recueillir la parole des anciens',
      source: 'd’après la démarche du R.P. François Callet, collecteur du Tantara ny Andriana (1878) — texte reconstitué',
      texte: 'Je suis allé m’asseoir auprès des vieillards qui gardent la mémoire des royaumes. Je les ai écoutés longuement, sans les interrompre, et j’ai noté leurs paroles telles qu’ils les prononçaient. Quand deux récits ne s’accordaient pas, j’interrogeais un troisième ancien, puis un quatrième, pour approcher la vérité. C’est ainsi que les traditions des ancêtres, qui n’étaient écrites nulle part, sont devenues un livre.',
      questions: ['Quelle attitude le collecteur adopte-t-il pendant l’entretien ?',
        'Que fait-il quand deux témoignages se contredisent ?',
        'En quoi sa démarche ressemble-t-elle à ton projet d’Histoire orale ?'],
      reponses: ['Il écoute longuement sans interrompre et note fidèlement les paroles — l’attitude de l’enquêteur respectueux.',
        'Il interroge d’autres anciens pour croiser les témoignages : c’est l’esprit critique de l’historien.',
        'Mêmes étapes : choisir les personnes ressources, les écouter avec respect, noter, puis vérifier en comparant les récits.']
    },
    lexique: [
      ['Histoire orale', 'collecte des témoignages parlés pour reconstituer le passé'],
      ['Personne ressource', 'personne qui a vécu les faits ou en garde la mémoire'],
      ['Questionnaire', 'liste ordonnée de questions ouvertes et neutres'],
      ['Croiser les témoignages', 'comparer plusieurs récits pour vérifier les faits'],
    ],
    synthese: 'Histoire orale = collecter des témoignages parlés ; cinq étapes : thème délimité, questionnaire, personnes ressources, lieu de rencontre, rendez-vous ; puis enquêter avec respect et croiser les témoignages.',
    saistu: 'À Madagascar, l’Histoire orale a précédé l’Histoire écrite : les tantara, les lovantsofina (« héritage des oreilles ») et les généalogies récitées ont conservé des siècles d’événements. Le pasteur Callet a recueilli au XIXᵉ siècle ces récits auprès des anciens : son « Tantara ny Andriana » reste une source majeure de l’histoire de l’Imerina — né de simples entretiens, comme ton projet !',
    exos: ['Remets les étapes dans l’ordre : a) demander un rendez-vous ; b) choisir un thème délimité ; d) identifier les personnes ressources ; e) élaborer le questionnaire.',
      'Bon ou mauvais thème ? Justifie. a) « L’histoire de Madagascar ». b) « Notre école de 1995 à 2015 ». d) « La vie autrefois ». e) « Le cyclone de 2004 dans notre commune ».',
      'Ton projet. a) Propose un thème délimité dans le temps et l’espace. b) Rédige trois questions ouvertes de ton questionnaire. d) Cite deux personnes ressources possibles et justifie. e) Pourquoi faut-il interroger plusieurs témoins ?'],
    corr: ['Ordre : b (thème), e (questionnaire), d (personnes ressources), puis lieu de rencontre, puis a (rendez-vous).',
      'a) mauvais : trop vaste, aucune délimitation ; b) bon : délimité dans l’espace (notre école) et le temps (1995-2015) ; d) mauvais : ni lieu ni période ; e) bon : un événement précis, un lieu précis, une date précise.',
      'a) réponse libre — vérifier la double délimitation ; b) réponse libre — questions commençant par « racontez », « comment », « pourquoi » ; d) réponse libre — des personnes ayant vécu les faits ; e) pour croiser les témoignages et corriger les oublis ou erreurs de mémoire de chacun.'],
    fig: 'u1f1'
  },
  {
    t: 'Les grandes périodes de la Préhistoire et de l’Histoire', comp: 'Les grandes périodes de la Préhistoire', theme: 'La frise chronologique des grandes périodes',
    goal: 'situer dans le temps et dans l’espace les faits préhistoriques et historiques à l’aide d’une frise chronologique',
    mat: 'Frise chronologique, carte du monde, documents historiques, règle',
    revQ: 'Cite les cinq étapes d’un projet d’Histoire orale.',
    revRA: 'Thème délimité, questionnaire, personnes ressources, lieu de rencontre, rendez-vous.',
    situation: 'Entre le premier Homme qui taille un caillou et toi qui lis cette page, des millions d’années se sont écoulées. Comment ranger un si long passé sans se perdre ? Les historiens ont tracé une grande ligne du temps et l’ont découpée en périodes, comme on découpe l’année en trimestres. Une date suffit à tout séparer : l’invention de l’écriture.',
    legende: 'Des millions d’années à ranger sans se perdre : les historiens découpent le temps en grandes périodes.',
    motsCles: ['Préhistoire', 'Paléolithique', 'Néolithique', 'Histoire', 'écriture', 'Antiquité', 'Moyen Âge', 'Temps modernes', 'Époque contemporaine', 'frise chronologique', 'bornes'],
    sections: [
      {
        titre: 'La Préhistoire et ses deux âges',
        paras: [
          'La Préhistoire s’étend de l’apparition de l’Homme à la découverte de l’écriture, vers −3 000. Elle comprend le Paléolithique (de l’apparition de l’Homme à −12 000) et le Néolithique (de −12 000 à −3 000).',
          'Pourquoi l’écriture sert-elle de frontière ? Parce qu’avec elle, les hommes laissent des textes que l’historien peut lire : on passe des traces muettes (os, outils, cendres) aux témoignages directs.',
        ],
      },
      {
        titre: 'L’Histoire et ses quatre périodes',
        paras: ['L’Histoire commence avec l’écriture et se découpe en quatre périodes, séparées par trois grandes dates :'],
        puces: [
          'l’Antiquité : de −3 000 à 476 (chute de l’Empire romain d’Occident) ;',
          'le Moyen Âge : de 476 à 1492 (arrivée de Christophe Colomb en Amérique) ;',
          'les Temps modernes : de 1492 à 1789 (Révolution française) ;',
          'l’Époque contemporaine : de 1789 à nos jours.',
        ],
      },
      {
        titre: 'Lire une frise chronologique',
        paras: [
          'Le signe « moins » devant une date signifie « avant Jésus-Christ » : −12 000 est plus ancien que −3 000 — les dates négatives se lisent à rebours. Sur une frise, on vérifie toujours trois choses : l’échelle (combien d’années par centimètre ?), le sens (le temps coule vers la droite) et les bornes de chaque période.',
          'Dans l’espace aussi, les périodes se situent : la Préhistoire commence en Afrique, berceau de l’humanité ; l’écriture naît en Mésopotamie ; à Madagascar, le peuplement est si récent que l’île entre presque directement dans l’Histoire.',
        ],
      },
    ],
    doc: {
      titre: 'Pourquoi découper le temps ?',
      source: 'd’après les réflexions des historiens sur la périodisation — texte reconstitué',
      texte: 'Le temps des hommes coule sans interruption : personne, un matin de l’année 476, ne s’est réveillé en s’écriant « le Moyen Âge commence ! ». Ce sont les historiens qui, longtemps après, ont posé des bornes sur la ligne du temps pour s’y retrouver. Ils ont choisi des événements si importants que le monde d’après ne ressemble plus au monde d’avant : la chute d’un empire, la découverte d’un continent, une révolution. Les périodes sont donc des outils de travail — non des murs.',
      questions: ['Les hommes du passé savaient-ils qu’ils « changeaient de période » ? Justifie.',
        'Quels critères les historiens utilisent-ils pour choisir une borne ?',
        'Explique la phrase : « les périodes sont des outils de travail — non des murs ».'],
      reponses: ['Non : le texte dit que personne ne s’est réveillé en 476 en annonçant le Moyen Âge ; les bornes sont posées longtemps après, par les historiens.',
        'Des événements si importants que le monde d’après ne ressemble plus au monde d’avant : chute d’un empire (476), découverte d’un continent (1492), révolution (1789).',
        'Elles servent à classer et à se repérer, mais la vie des hommes continue sans coupure brutale : les périodes aident l’historien, elles n’enferment pas le passé.']
    },
    lexique: [
      ['Frise chronologique', 'ligne du temps graduée où l’on place les événements'],
      ['Borne', 'date-événement qui sépare deux périodes'],
      ['Avant J.-C. (−)', 'date antérieure à la naissance de Jésus-Christ, lue à rebours'],
      ['Périodisation', 'découpage du temps en grandes périodes'],
    ],
    synthese: 'Préhistoire : Paléolithique (apparition de l’Homme → −12 000) puis Néolithique (−12 000 → −3 000) ; Histoire depuis l’écriture : Antiquité (−3 000 → 476), Moyen Âge (476 → 1492), Temps modernes (1492 → 1789), Époque contemporaine (1789 → nos jours).',
    saistu: 'La frontière entre Préhistoire et Histoire n’est pas la même partout ! L’écriture apparaît vers −3 300 en Mésopotamie, mais certains peuples ne l’ont adoptée que des millénaires plus tard. À Madagascar, les premiers textes — les sorabe en caractères arabes — datent d’il y a quelques siècles seulement : l’essentiel du passé malgache se lit donc dans l’archéologie et la tradition orale, pas dans les livres !',
    exos: ['Associe chaque date à sa période : a) −8 000 ; b) l’an 800 ; d) 1600 ; e) 1896.',
      'Les bornes. a) Quel événement marque la fin de l’Antiquité ? b) Quelle date sépare le Paléolithique du Néolithique ? d) Quel événement ouvre les Temps modernes ? e) Pourquoi l’écriture sépare-t-elle Préhistoire et Histoire ?',
      'Frise. a) Trace une frise de −3 000 à nos jours avec les quatre périodes de l’Histoire. b) Place la naissance de Jésus-Christ. d) Place 1492 et nomme l’événement. e) Range du plus ancien au plus récent : 476, −12 000, 1789, −3 000, 1492.'],
    corr: ['a) Néolithique (Préhistoire) ; b) Moyen Âge ; d) Temps modernes ; e) Époque contemporaine.',
      'a) la chute de l’Empire romain d’Occident en 476 ; b) −12 000 ; d) l’arrivée de Christophe Colomb en Amérique en 1492 ; e) parce qu’avec l’écriture apparaissent les textes, sources directes que l’historien peut lire.',
      'a) frise aux bornes −3 000, 476, 1492, 1789 ; b) au point zéro de la frise ; d) 1492 : arrivée de Colomb en Amérique ; e) −12 000, −3 000, 476, 1492, 1789.'],
    fig: 'u1f2'
  },
  {
    t: 'Caractériser la Préhistoire', comp: 'Les grandes périodes de la Préhistoire', theme: 'Les caractéristiques du Paléolithique et du Néolithique',
    goal: 'caractériser la Préhistoire et expliquer le mode de vie de l’homme au Paléolithique et au Néolithique',
    mat: 'Images et textes sur la Préhistoire, frise chronologique, tableau',
    revQ: 'Cite les deux périodes de la Préhistoire et les quatre périodes de l’Histoire avec leurs bornes.',
    revRA: 'Paléolithique (→ −12 000), Néolithique (−12 000 → −3 000) ; Antiquité, Moyen Âge, Temps modernes, Époque contemporaine (−3 000, 476, 1492, 1789).',
    situation: 'Imagine deux campements que des millénaires séparent. Dans le premier, des chasseurs reviennent à la grotte, une torche à la main, et repartiront dès que le gibier manquera. Dans le second, des familles habitent des maisons, moissonnent un champ et gardent un troupeau. Entre les deux, l’humanité a changé de vie — c’est la plus grande révolution de la Préhistoire.',
    legende: 'Deux campements, des millénaires d’écart : des chasseurs nomades à la grotte, des familles sédentaires au village.',
    motsCles: ['Paléolithique', 'pierre taillée', 'chasse', 'cueillette', 'feu', 'nomadisme', 'Néolithique', 'pierre polie', 'agriculture', 'élevage', 'sédentarisation', 'révolution néolithique'],
    sections: [
      {
        titre: 'Le Paléolithique : l’âge de la pierre taillée',
        paras: [
          'Le Paléolithique (du grec palaios, « ancien », et lithos, « pierre ») est l’âge de la pierre taillée. L’homme y dépend entièrement de la nature : il prend ce qu’elle offre.',
        ],
        puces: [
          'un outillage primitif : bifaces, grattoirs, pointes taillés à grands éclats ;',
          'la chasse, la pêche et la cueillette pour se nourrir ;',
          'la découverte du feu : il éclaire, chauffe, cuit les aliments, éloigne les bêtes ;',
          'le nomadisme : quand le gibier part, l’homme part aussi — grottes et abris provisoires.',
        ],
      },
      {
        titre: 'Le Néolithique : l’âge de la pierre polie',
        paras: [
          'Vers −12 000, le climat se réchauffe et tout bascule : l’homme découvre qu’une graine semée devient une récolte, qu’un animal capturé peut être élevé.',
        ],
        puces: [
          'un outillage amélioré : pierre polie, houes, faucilles, meules ;',
          'l’agriculture et l’élevage : l’homme produit sa nourriture ;',
          'la sédentarisation : qui cultive un champ doit rester près de lui — villages, maisons, greniers ;',
          'des inventions nouvelles : la poterie conserve le grain, le tissage habille.',
        ],
      },
      {
        titre: 'La révolution néolithique',
        paras: [
          'En produisant plus qu’il ne consomme, l’homme libère du temps : les métiers se spécialisent, les villages grossissent — jusqu’aux premières villes, où naîtra l’écriture, fin de la Préhistoire. On parle de révolution parce qu’en quelques millénaires, toute la vie humaine change : nourriture, habitat, outils, organisation.',
        ],
      },
    ],
    doc: {
      titre: 'La grotte de Lascaux, « chapelle Sixtine de la Préhistoire »',
      source: 'd’après la présentation officielle du site de Lascaux (France) — extrait adapté',
      texte: 'Découverte en 1940 par quatre adolescents, la grotte de Lascaux abrite l’un des plus grands ensembles d’art pariétal du Paléolithique : près de deux mille figures — chevaux, taureaux, cerfs — peintes il y a environ 17 000 ans à la lumière des torches. Les artistes utilisaient des pigments de terre broyée et travaillaient parfois sur des échafaudages. La grotte originale est aujourd’hui fermée au public pour protéger les peintures.',
      questions: ['À quelle période de la Préhistoire les peintures de Lascaux appartiennent-elles ? Justifie par la date.',
        'Quels indices montrent que ces peintres étaient déjà de véritables artistes organisés ?',
        'Pourquoi la grotte originale est-elle fermée au public ?'],
      reponses: ['Au Paléolithique : 17 000 ans avant nous, bien avant −12 000, borne du Néolithique.',
        'Près de deux mille figures, des pigments préparés (terre broyée), des échafaudages : un travail réfléchi et organisé.',
        'Pour protéger les peintures, fragiles, de la dégradation — un patrimoine de l’humanité se conserve.']
    },
    lexique: [
      ['Paléolithique', 'âge de la pierre taillée (palaios = ancien, lithos = pierre)'],
      ['Néolithique', 'âge de la pierre polie (neos = nouveau)'],
      ['Nomadisme', 'vie en déplacement, sans habitat fixe'],
      ['Sédentarisation', 'installation durable en un lieu : villages, maisons'],
    ],
    synthese: 'Préhistoire = de l’apparition de l’Homme à l’écriture (−3 000) ; Paléolithique : pierre taillée, chasse-cueillette, feu, nomadisme ; Néolithique : pierre polie, agriculture, élevage, sédentarisation ; la révolution néolithique fait de l’homme un producteur.',
    saistu: 'La grotte de Lascaux, en France, abrite des centaines de peintures d’il y a 17 000 ans : chevaux, taureaux, cerfs tracés à la lumière des torches par des artistes du Paléolithique. On l’appelle la « chapelle Sixtine de la Préhistoire » — la preuve que bien avant l’écriture, l’homme savait déjà raconter avec des images.',
    exos: ['Paléolithique ou Néolithique ? a) Une faucille de pierre polie. b) Un biface taillé. d) Les restes d’un grenier à grain. e) Un campement provisoire de chasseurs.',
      'Vocabulaire et dates. a) Donne l’étymologie de « Paléolithique ». b) Donne celle de « Néolithique ». d) Définis la Préhistoire. e) Quelle date sépare les deux périodes ?',
      'La révolution néolithique. a) Qu’est-ce qui change dans la façon d’obtenir la nourriture ? b) Pourquoi l’agriculture entraîne-t-elle la sédentarisation ? d) Cite deux inventions du Néolithique autres que l’agriculture. e) Pourquoi parle-t-on de « révolution » ?'],
    corr: ['a) Néolithique ; b) Paléolithique ; d) Néolithique ; e) Paléolithique.',
      'a) palaios « ancien » + lithos « pierre » : l’âge de la pierre taillée ; b) neos « nouveau » + lithos « pierre » : l’âge de la pierre polie ; d) la période allant de l’apparition de l’Homme à la découverte de l’écriture vers −3 000 ; e) −12 000.',
      'a) l’homme cesse de seulement prélever (chasse, cueillette) : il produit (agriculture, élevage) ; b) parce qu’un champ se surveille et se récolte sur place : il faut habiter près de lui ; d) la pierre polie, la poterie, le tissage (deux suffisent) ; e) parce qu’en quelques millénaires, toute la vie humaine change : nourriture, habitat, outils, organisation.'],
    fig: 'u1f3'
  },
  {
    t: 'L’évolution de l’Homme', comp: 'Les grandes périodes de la Préhistoire', theme: 'Les étapes de l’évolution humaine',
    goal: 'établir l’évolution de l’Homme durant la Préhistoire et classifier ses étapes biologiques et techniques',
    mat: 'Images montrant l’évolution de l’Homme et les outils, frise chronologique',
    revQ: 'Compare le mode de vie du Paléolithique et celui du Néolithique (deux différences).',
    revRA: 'Paléolithique : chasse-cueillette et nomadisme ; Néolithique : agriculture-élevage et sédentarisation.',
    situation: 'Dans un musée, six silhouettes sont alignées : la première, petite, marche à peine redressée ; la dernière te ressemble comme un frère. Entre elles, des millions d’années, des crânes qui grandissent, des outils qui s’affinent. L’Homme n’est pas apparu d’un coup : il est le résultat d’une très longue évolution — et la science en a reconstitué les étapes.',
    legende: 'Six silhouettes au musée : des millions d’années entre la première, à peine redressée, et la dernière qui te ressemble.',
    motsCles: ['Australopithèque', 'bipédie', 'Homo habilis', 'Homo erectus', 'maîtrise du feu', 'Homo neanderthalensis', 'Homo sapiens', 'Homo sapiens sapiens', 'évolution biologique', 'évolution technique', 'berceau de l’humanité'],
    sections: [
      {
        titre: 'Les six étapes de l’évolution',
        paras: ['L’évolution de l’Homme durant la Préhistoire compte six grandes étapes :'],
        puces: [
          'l’Australopithèque, apparu en Afrique : il marche debout — la bipédie libère les mains ;',
          'l’Homo habilis, « l’homme habile » : il fabrique les premiers outils, des galets aménagés ;',
          'l’Homo erectus, « l’homme redressé » : il taille le biface, maîtrise le feu et quitte l’Afrique pour peupler l’Asie et l’Europe ;',
          'l’Homo neanderthalensis, trapu et robuste : il affronte les glaciations et enterre ses morts — premiers gestes de pensée symbolique ;',
          'l’Homo sapiens, « l’homme qui sait » : homme moderne, crâne développé, langage articulé, outils spécialisés ;',
          'l’Homo sapiens sapiens — nous : art des cavernes, aiguille, arc, puis agriculture et bientôt écriture.',
        ],
      },
      {
        titre: 'Deux lignes de lecture : biologique et technique',
        paras: [
          'L’évolution biologique concerne le corps : bipédie, cerveau plus volumineux, langage. L’évolution technique concerne les outils : du galet aménagé au biface, du feu aux outils spécialisés, jusqu’à l’art.',
        ],
      },
      {
        titre: 'Un arbre, pas une échelle',
        paras: [
          'Attention : cette évolution n’est pas une file indienne parfaite — certaines espèces ont coexisté, comme Néandertal et Sapiens. Les fossiles découverts, souvent en Afrique, permettent aux savants de compléter l’arbre de famille humain, pièce par pièce. Dire que « l’homme descend du singe » est faux : l’Homme et les singes actuels descendent d’ancêtres communs, puis leurs lignées se sont séparées.',
        ],
      },
    ],
    doc: {
      titre: 'Lucy, la grand-tante d’Éthiopie',
      source: 'd’après les récits de la découverte de 1974 (expédition Johanson-Coppens-Taieb) — extrait adapté',
      texte: 'Le 24 novembre 1974, dans la vallée de l’Awash, en Éthiopie, l’équipe internationale repère des fragments d’os qui affleurent du sol : au total, plusieurs dizaines de morceaux d’un même squelette d’Australopithèque, vieux de plus de trois millions d’années. Le soir, au campement, les chercheurs fêtent la trouvaille en écoutant une chanson des Beatles, « Lucy in the Sky with Diamonds » : le squelette s’appellera Lucy. Haute d’environ 1,10 m, Lucy marchait déjà debout.',
      questions: ['Où et quand Lucy a-t-elle été découverte, et quel âge a ce squelette ?',
        'D’où vient son nom ?',
        'Pourquoi cette découverte confirme-t-elle que l’Afrique est le berceau de l’humanité ?'],
      reponses: ['En Éthiopie, dans la vallée de l’Awash, le 24 novembre 1974 ; le squelette a plus de trois millions d’années.',
        'D’une chanson des Beatles, « Lucy in the Sky with Diamonds », écoutée au campement le soir de la découverte.',
        'Parce que les plus anciens fossiles d’ancêtres humains, comme Lucy, sont découverts en Afrique : c’est là que commence l’évolution humaine.']
    },
    lexique: [
      ['Bipédie', 'marche debout sur deux jambes, qui libère les mains'],
      ['Fossile', 'reste d’être vivant conservé dans la roche'],
      ['Évolution biologique', 'transformation du corps : taille, crâne, marche'],
      ['Évolution technique', 'progrès des outils et des savoir-faire'],
    ],
    synthese: 'six étapes : Australopithèque (bipédie), Homo habilis (premiers outils), Homo erectus (feu), Homo neanderthalensis (sépultures), Homo sapiens (homme moderne), Homo sapiens sapiens (art, agriculture) ; évolution biologique ET technique ; berceau : l’Afrique.',
    saistu: 'La célèbre « Lucy », squelette d’Australopithèque découvert en Éthiopie en 1974, doit son nom à une chanson des Beatles que les chercheurs écoutaient le soir de la trouvaille ! Haute d’à peine 1,10 m, vieille de plus de 3 millions d’années, elle marchait déjà debout — l’Afrique est bien le berceau de l’humanité.',
    exos: ['Associe chaque étape à son progrès : a) Homo habilis ; b) Homo erectus ; d) Australopithèque ; e) Homo sapiens sapiens.',
      'Ordre et classement. a) Range dans l’ordre : Homo sapiens, Australopithèque, Homo erectus, Homo habilis. b) Qu’est-ce qu’une évolution « biologique » ? d) Qu’est-ce qu’une évolution « technique » ? e) Donne un exemple de chaque.',
      'Réfléchir. a) Pourquoi la bipédie est-elle un progrès décisif ? b) Cite deux apports de la maîtrise du feu. d) Que révèlent les sépultures de Néandertal ? e) Pourquoi dit-on que l’Afrique est le berceau de l’humanité ?'],
    corr: ['a) premiers outils ; b) maîtrise du feu ; d) marche debout (bipédie) ; e) art des cavernes et agriculture.',
      'a) Australopithèque, Homo habilis, Homo erectus, Homo sapiens ; b) une transformation du corps (taille, crâne, marche) ; d) un progrès des outils et des savoir-faire ; e) biologique : le cerveau qui grandit ; technique : du galet aménagé au biface.',
      'a) elle libère les mains, qui peuvent porter, fabriquer, manier des outils ; b) cuire les aliments, se chauffer, s’éclairer, éloigner les bêtes (deux suffisent) ; d) une pensée symbolique : le souci des morts, peut-être des croyances ; e) parce que les plus anciens fossiles d’ancêtres humains y ont été découverts.'],
    fig: 'u1f4'
  }
];

const unit1 = {
  no: 1, roman: 'I', name: 'L’Histoire orale et les grandes périodes de la Préhistoire',
  rag: 'caractériser une période de l’Histoire en utilisant des représentations du temps et de l’espace, et exploiter une trace du passé à partir de sources historiques.',
  valeurs: 'esprit critique, esprit d’analyse',
  sessions: S,
  revision: {
    table: [
      ['Histoire orale', 'Collecte de témoignages parlés ; 5 étapes : thème, questionnaire, personnes, lieu, rendez-vous', 'Monter un projet d’enquête orale'],
      ['Préhistoire', 'De l’apparition de l’Homme à l’écriture (−3 000) ; Paléolithique puis Néolithique', 'Définir et borner la Préhistoire'],
      ['Histoire', 'Antiquité (−3 000/476), Moyen Âge (476/1492), Temps modernes (1492/1789), contemporaine (1789/…)', 'Situer un fait sur la frise'],
      ['Paléolithique', 'Pierre taillée, chasse-cueillette, feu, nomadisme', 'Caractériser le mode de vie'],
      ['Néolithique', 'Pierre polie, agriculture, élevage, sédentarisation', 'Expliquer la révolution néolithique'],
      ['Évolution de l’Homme', 'Australopithèque → habilis → erectus → neanderthalensis → sapiens → sapiens sapiens', 'Classifier les étapes biologiques et techniques']
    ],
    questions: [
      'Cite dans l’ordre les cinq étapes d’un projet d’Histoire orale.',
      'Trace la frise des périodes de la Préhistoire et de l’Histoire avec toutes les bornes.',
      'Donne trois caractéristiques du Paléolithique et trois du Néolithique.',
      'Range les six étapes de l’évolution de l’Homme et associe un progrès à trois d’entre elles.',
      'Situe sur la frise : −9 000, l’an 1200, 1515, 1960.'
    ],
    answers: [
      'Thème délimité dans le temps et l’espace ; questionnaire ; personnes ressources ; lieu de rencontre ; rendez-vous.',
      'Paléolithique (→ −12 000), Néolithique (−12 000 → −3 000) ; Antiquité (−3 000 → 476), Moyen Âge (476 → 1492), Temps modernes (1492 → 1789), Époque contemporaine (1789 → nos jours).',
      'Paléolithique : pierre taillée, chasse-cueillette, feu, nomadisme ; Néolithique : pierre polie, agriculture-élevage, sédentarisation (trois de chaque).',
      'Australopithèque (bipédie), Homo habilis (premiers outils), Homo erectus (feu), Homo neanderthalensis (sépultures), Homo sapiens (homme moderne), Homo sapiens sapiens (art, agriculture).',
      '−9 000 : Néolithique ; 1200 : Moyen Âge ; 1515 : Temps modernes ; 1960 : Époque contemporaine.'
    ]
  },
  exam: {
    exos: [
      'Questions de cours. a) Définis l’Histoire orale. b) Définis la Préhistoire. d) Donne l’étymologie de « Néolithique ». e) Quelles sont les quatre périodes de l’Histoire ?',
      'Le projet d’enquête. Ta classe enquête sur « la gare de notre ville de 1970 à 2000 ». a) Montre que ce thème est bien délimité. b) Rédige deux questions ouvertes du questionnaire. d) Propose deux personnes ressources. e) Pourquoi faut-il demander un rendez-vous à l’avance ?',
      'La frise chronologique. a) Trace la frise de la Préhistoire et de l’Histoire avec ses bornes. b) Place la découverte de l’écriture. d) Situe : −15 000, −5 000, l’an 1000. e) Pourquoi 476 est-il une borne ?',
      'Paléolithique et Néolithique. Un site archéologique livre : des meules, des faucilles polies, des fonds de maisons, des poteries. a) À quelle période appartient-il ? b) Justifie par deux indices. d) Décris le mode de vie de ses habitants. e) Compare avec la vie au Paléolithique (deux différences).',
      'L’évolution de l’Homme. a) Range : Homo erectus, Australopithèque, Homo sapiens, Homo habilis. b) Associe un progrès technique à deux de ces étapes. d) Distingue évolution biologique et évolution technique. e) Explique pourquoi « l’homme descend du singe » est une phrase fausse.'
    ],
    corr: [
      'a) la collecte des témoignages parlés pour reconstituer le passé ; b) la période de l’apparition de l’Homme à la découverte de l’écriture vers −3 000 ; d) neos « nouveau » + lithos « pierre » : âge de la pierre polie ; e) Antiquité, Moyen Âge, Temps modernes, Époque contemporaine. Un point par item.',
      'a) délimité dans l’espace (la gare de notre ville) et dans le temps (1970-2000) ; b) réponse libre — questions ouvertes et neutres ; d) un ancien cheminot, un commerçant du quartier (ou équivalents) ; e) par politesse et pour que le témoin se prépare et se rende disponible. Un point par item.',
      'a) bornes : −12 000, −3 000, 476, 1492, 1789 ; b) vers −3 000, fin de la Préhistoire ; d) −15 000 : Paléolithique ; −5 000 : Néolithique ; 1000 : Moyen Âge ; e) chute de l’Empire romain d’Occident : fin de l’Antiquité. Un point par item.',
      'a) au Néolithique ; b) outils polis et agricoles (meules, faucilles) + habitat fixe (maisons) ; d) agriculteurs-éleveurs sédentaires, produisant et stockant leur nourriture ; e) au Paléolithique : chasse-cueillette au lieu de l’agriculture, nomadisme au lieu des villages. Un point par item.',
      'a) Australopithèque, Homo habilis, Homo erectus, Homo sapiens ; b) habilis : premiers outils ; erectus : maîtrise du feu ; d) biologique : le corps change ; technique : les outils progressent ; e) l’Homme et les singes actuels descendent d’ancêtres communs : les lignées se sont séparées, aucune n’engendre l’autre. Un point par item.'
    ]
  }
};

(async () => {
  const bufs = await L.render(figs);
  await buildUnit(unit1, bufs);
})();
