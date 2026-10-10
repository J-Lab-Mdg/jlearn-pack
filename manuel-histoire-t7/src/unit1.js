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
    def: 'L’Histoire orale est la collecte des témoignages parlés pour reconstituer le passé. Un projet d’Histoire orale suit cinq étapes : le choix d’un thème délimité dans le temps et dans l’espace, l’élaboration d’un questionnaire sur le thème, l’identification des personnes ressources et à enquêter, la détermination du lieu de rencontre, et la demande d’un rendez-vous auprès des personnes enquêtées.',
    autrement: 'avant d’aller interroger les anciens, on prépare tout : un sujet précis, des questions écrites, les bonnes personnes, le bon endroit, le bon moment.',
    concept: 'Étape 1 : le thème. « L’histoire du village » est trop vaste ; « l’école de notre fokontany de 1980 à 2000 » est délimité dans le temps ET dans l’espace — c’est un bon thème : histoire de la famille, généalogie, village, district, événement marquant. Étape 2 : le questionnaire. Des questions ouvertes (« Racontez-moi… », « Comment avez-vous vécu… »), ordonnées du général au précis, sans suggérer les réponses. Étape 3 : les personnes ressources — celles qui ont vécu les faits ou en gardent la mémoire : anciens, ray aman-dreny, notables ; il en faut plusieurs, pour croiser les témoignages comme le fait l’historien. Étape 4 : le lieu — calme, familier au témoin, souvent chez lui. Étape 5 : le rendez-vous — demandé poliment, à l’avance, en expliquant le projet ; à Madagascar, le respect des aînés commande d’être accompagné et de suivre les usages. Ensuite seulement vient l’enquête : écouter plus que parler, noter ou enregistrer avec permission, remercier — puis vérifier et restituer. L’Histoire orale exige l’esprit critique : un témoignage se compare toujours à d’autres sources.',
    synthese: 'Histoire orale = collecter des témoignages parlés ; cinq étapes : thème délimité, questionnaire, personnes ressources, lieu de rencontre, rendez-vous ; puis enquêter avec respect et croiser les témoignages.',
    method: ['Délimiter le thème dans le temps et dans l’espace (une période, un lieu).', 'Rédiger le questionnaire : questions ouvertes, ordonnées, neutres.', 'Choisir les personnes ressources, fixer lieu et rendez-vous avec politesse.'],
    exemple: 'Thème : « le marché de notre commune de 1990 à 2010 » ; questionnaire de huit questions ; personnes ressources : deux marchandes anciennes et le chef fokontany ; lieu : chez chacune ; rendez-vous pris une semaine à l’avance.',
    erreur: 'Arriver chez le témoin sans préparation, « pour discuter » : sans thème délimité ni questionnaire, l’entretien part dans tous les sens et les informations sont inutilisables. En Histoire orale, l’improvisation est l’ennemie de la mémoire.',
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
    def: 'La Préhistoire s’étend de l’apparition de l’Homme à la découverte de l’écriture, vers −3 000. Elle comprend le Paléolithique (de l’apparition de l’Homme à −12 000) et le Néolithique (de −12 000 à −3 000). L’Histoire commence avec l’écriture et comprend quatre périodes : l’Antiquité (−3 000 à 476), le Moyen Âge (476 à 1492), les Temps modernes (1492 à 1789) et l’Époque contemporaine (1789 à nos jours).',
    autrement: 'avant l’écriture : la Préhistoire, en deux âges de la pierre ; après l’écriture : l’Histoire, en quatre périodes séparées par trois grandes dates — 476, 1492, 1789.',
    concept: 'Pourquoi l’écriture sert-elle de frontière ? Parce qu’avec elle, les hommes laissent des textes que l’historien peut lire : on passe des traces muettes (os, outils, cendres) aux témoignages directs. Le signe « moins » devant les dates signifie « avant Jésus-Christ » : −12 000 est plus ancien que −3 000 — sur la frise, les nombres négatifs se lisent à rebours. Chaque borne de l’Histoire est un événement : 476, la chute de l’Empire romain d’Occident, ouvre le Moyen Âge ; 1492, l’arrivée de Christophe Colomb en Amérique, ouvre les Temps modernes ; 1789, la Révolution française, ouvre l’Époque contemporaine — qui dure encore. Dans l’espace aussi, les périodes se situent : la Préhistoire commence en Afrique, berceau de l’humanité ; l’écriture naît en Mésopotamie ; et à Madagascar, le peuplement humain est si récent que l’île entre presque directement dans l’Histoire. Sur une frise, on vérifie toujours trois choses : l’échelle (combien d’années par centimètre ?), le sens (le temps coule vers la droite) et les bornes de chaque période.',
    synthese: 'Préhistoire : Paléolithique (apparition de l’Homme → −12 000) puis Néolithique (−12 000 → −3 000) ; Histoire depuis l’écriture : Antiquité (−3 000 → 476), Moyen Âge (476 → 1492), Temps modernes (1492 → 1789), Époque contemporaine (1789 → nos jours).',
    method: ['Tracer la ligne du temps, choisir l’échelle, orienter vers la droite.', 'Placer les bornes : −12 000, −3 000, 476, 1492, 1789.', 'Nommer chaque période entre deux bornes et y situer le fait étudié.'],
    exemple: 'L’an 1000 est entre 476 et 1492 : Moyen Âge. L’année −5 000 est entre −12 000 et −3 000 : Néolithique, donc Préhistoire. L’indépendance de Madagascar (1960) est après 1789 : Époque contemporaine.',
    erreur: 'Croire que −12 000 est plus récent que −3 000 parce que 12 000 est plus grand : avant Jésus-Christ, plus le nombre est grand, plus la date est ancienne. Toujours lire les dates négatives à rebours.',
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
    def: 'La Préhistoire est la période qui va de l’apparition de l’Homme à la découverte de l’écriture, vers −3 000. Le Paléolithique (du grec palaios, « ancien », et lithos, « pierre » : l’âge de la pierre taillée) est marqué par l’outillage primitif, la chasse et la cueillette, la découverte du feu et le nomadisme. Le Néolithique (neos, « nouveau » : l’âge de la pierre polie) est marqué par l’amélioration de l’outillage, la pratique de l’agriculture et la sédentarisation.',
    autrement: 'au Paléolithique, l’homme taille la pierre, chasse, cueille et se déplace sans cesse ; au Néolithique, il polit la pierre, cultive, élève — et se fixe dans des villages.',
    concept: 'Au Paléolithique, l’homme dépend entièrement de la nature : il prend ce qu’elle offre. Ses outils sont des pierres taillées à grands éclats — bifaces, grattoirs, pointes ; il chasse, pêche et cueille ; quand le gibier part, il part aussi : c’est le nomadisme, la vie en déplacement, dans des grottes et des abris. Sa plus grande conquête est le feu : il éclaire, chauffe, cuit les aliments, éloigne les bêtes — et rassemble le groupe le soir, berceau des premiers récits. Vers −12 000, le climat se réchauffe et tout bascule : l’homme découvre qu’une graine semée devient une récolte, qu’un animal capturé peut être élevé. C’est la révolution néolithique : agriculture et élevage font de l’homme un producteur de sa nourriture. Qui cultive un champ doit rester près de lui : c’est la sédentarisation — villages, maisons, greniers. Les outils s’améliorent : pierre polie, plus régulière et plus efficace, puis houes, faucilles, meules ; la poterie conserve le grain, le tissage habille. En produisant plus qu’il ne consomme, l’homme libère du temps : les métiers se spécialisent, les villages grossissent — jusqu’aux premières villes, où naîtra l’écriture, fin de la Préhistoire.',
    synthese: 'Préhistoire = de l’apparition de l’Homme à l’écriture (−3 000) ; Paléolithique : pierre taillée, chasse-cueillette, feu, nomadisme ; Néolithique : pierre polie, agriculture, élevage, sédentarisation ; la révolution néolithique fait de l’homme un producteur.',
    method: ['Identifier les indices : outils taillés ou polis ? nourriture prélevée ou produite ?', 'En déduire le mode de vie : nomade ou sédentaire.', 'Conclure : Paléolithique ou Néolithique, et justifier par deux caractéristiques.'],
    exemple: 'Un site livre des faucilles, des meules et des restes de maisons : outils agricoles + habitat fixe → Néolithique. Un autre livre des bifaces et des foyers dans une grotte : pierre taillée + abri temporaire → Paléolithique.',
    erreur: 'Croire que les hommes préhistoriques vivaient au temps des dinosaures : les dinosaures ont disparu environ 60 millions d’années avant l’apparition de l’Homme. La Préhistoire est l’histoire des hommes — pas celle des dinosaures.',
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
    def: 'L’évolution de l’Homme durant la Préhistoire compte six grandes étapes : l’Australopithèque, l’Homo habilis, l’Homo erectus, l’Homo neanderthalensis, l’Homo sapiens et l’Homo sapiens sapiens. Cette évolution est à la fois biologique (le corps : marche debout, volume du cerveau) et technique (les outils : du galet aménagé à l’outillage perfectionné).',
    autrement: 'de l’Australopithèque à l’Homo sapiens sapiens, le corps se redresse, le cerveau grandit, les outils se perfectionnent — chaque étape franchit un progrès.',
    concept: 'L’Australopithèque, apparu en Afrique, marche debout — la bipédie libère les mains. L’Homo habilis, « l’homme habile », fabrique les premiers outils : galets aménagés d’un tranchant. L’Homo erectus, « l’homme redressé », taille le biface et réussit l’exploit décisif : la maîtrise du feu ; il quitte l’Afrique et peuple l’Asie et l’Europe. L’Homo neanderthalensis, trapu et robuste, affronte les glaciations ; il enterre ses morts — premiers gestes de pensée symbolique. L’Homo sapiens, « l’homme qui sait », est l’homme moderne : crâne développé, langage articulé, outils spécialisés. L’Homo sapiens sapiens — nous — invente l’art des cavernes, l’aiguille, l’arc, puis l’agriculture et bientôt l’écriture. Deux lignes de lecture pour classer ces étapes : la ligne biologique (bipédie → cerveau plus volumineux → langage) et la ligne technique (galet aménagé → biface → feu → outils spécialisés → art). Attention : cette évolution n’est pas une file indienne parfaite — certaines espèces ont coexisté, comme Néandertal et Sapiens ; les fossiles découverts, souvent en Afrique, permettent aux savants de compléter l’arbre de famille humain, pièce par pièce.',
    synthese: 'six étapes : Australopithèque (bipédie), Homo habilis (premiers outils), Homo erectus (feu), Homo neanderthalensis (sépultures), Homo sapiens (homme moderne), Homo sapiens sapiens (art, agriculture) ; évolution biologique ET technique ; berceau : l’Afrique.',
    method: ['Ranger les six étapes dans l’ordre chronologique.', 'Associer à chaque étape son progrès biologique (corps) et technique (outil).', 'Vérifier sur la frise : les étapes se recouvrent parfois — l’évolution n’est pas une ligne droite.'],
    exemple: 'On attribue un foyer de feu ancien à l’Homo erectus (maîtrise du feu) ; des galets aménagés à l’Homo habilis (premiers outils) ; une sépulture à Néandertal ou Sapiens (pensée symbolique).',
    erreur: 'Dire que « l’homme descend du singe » : l’Homme et les singes actuels descendent d’ancêtres communs, puis leurs lignées se sont séparées ; aucun singe d’aujourd’hui n’est notre « grand-père ». L’évolution est un arbre aux multiples branches, pas une échelle.',
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
