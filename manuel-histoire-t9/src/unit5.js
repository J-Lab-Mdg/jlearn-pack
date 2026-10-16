// UNITÉ 5 — COMMÉMORATIONS ET MÉMOIRES COLLECTIVES (PE T9) : 3 séances + révision + examen
const L = require('./figlib');
const { buildUnit } = require('./engine');
const { head, svg, txt, nline, dot, tableEl, box, arrow, seg, circle, poly, PINK, PINK2, GREEN, GREENL, BLUE, BLUEL, OCRE } = L;

const figs = {};
const chain = (titre, sous, steps, h = 64) => { const { s, y } = head(titre, [sous]);
  const top = y + 15; let b = '';
  steps.forEach((t, i) => { b += box(90, top + i * (h + 12), 820, h, t, i % 2 ? BLUEL : GREENL, i % 2 ? BLUE : GREEN, 21);
    if (i < steps.length - 1) b += arrow(500, top + i * (h + 12) + h, 500, top + (i + 1) * (h + 12), PINK2, 4); });
  return svg(1000, top + steps.length * (h + 12) + 20, s + b); };
const duo = (titre, sous, t1, l1, t2, l2) => { const { s, y } = head(titre, [sous]);
  const top = y + 15; let b = txt(255, top + 8, t1, 23, GREEN, 'bold', 'middle') + txt(745, top + 8, t2, 23, BLUE, 'bold', 'middle');
  l1.forEach((t, i) => { b += box(40, top + 30 + i * 62, 430, 50, t, GREENL, GREEN, 19); });
  l2.forEach((t, i) => { b += box(530, top + 30 + i * 62, 430, 50, t, BLUEL, BLUE, 19); });
  const n = Math.max(l1.length, l2.length);
  return svg(1000, top + 30 + n * 62 + 20, s + b); };

figs.u5f1 = chain('Les catégories de lieux de mémoire', ['Tout ce qui fait vivre le souvenir d’une communauté.'],
  ['symboles : drapeau, hymne, devise — l’identité condensée', 'monuments et sites : mémoriaux, musées, tombeaux, places (13-Mai, Moramanga)', 'commémorations : dates et cérémonies — 29 mars, 26 juin', 'paysages et lieux naturels : collines sacrées, doany, forêts des ancêtres', 'patrimoine immatériel : récits, chants, kabary, savoir-faire transmis']);
figs.u5f2 = duo('Mémoire et Histoire : alliées mais différentes', ['Deux rapports au passé.'],
  'LA MÉMOIRE', ['vécue, portée par des groupes', 'affective, sélective', 'plurielle : chaque groupe a la sienne', 'se transmet — et peut s’éteindre'],
  'L’HISTOIRE', ['reconstruite par les historiens', 'critique, fondée sur les sources', 'vise la vérité commune', 's’écrit, se corrige, se discute']);
figs.u5f3 = chain('Organiser une commémoration', ['De la mémoire à l’action.'],
  ['choisir l’événement et la date — et se documenter sérieusement', 'préparer : autorisations, invités, témoins, lieux', 'célébrer : défilé, dépôt de gerbes, minute de silence', 'faire comprendre : exposition, conférence-débat, pièces et chants', 'transmettre : recueillir les témoignages, publier, archiver']);

const S = [
  {
    t: 'Lieux de mémoire et mémoires collectives', comp: 'Commémorations et mémoires collectives', theme: 'Définitions et catégories',
    goal: 'définir mémoire collective et lieu de mémoire, et classer les lieux de mémoire par catégories',
    mat: 'Photographies de monuments malgaches, documents, schéma',
    revQ: 'Cite les quatre racines de l’instabilité politique malgache.',
    revRA: 'Plébiscites et constitutions sur mesure ; élections contestées ; personnalisation du pouvoir et faiblesse des contre-pouvoirs ; pauvreté (cercle vicieux crise-pauvreté).',
    situation: 'Pourquoi la place du 13-Mai s’appelle-t-elle ainsi ? Pourquoi dépose-t-on des gerbes à Moramanga chaque 29 mars ? Pourquoi ta famille entretient-elle le tombeau des ancêtres ? Parce qu’une communauté — famille, village, nation — ne vit pas seulement au présent : elle porte en elle le souvenir de son passé. Ce souvenir partagé a ses lieux, ses dates, ses objets : les lieux de mémoire.',
    legende: 'Monuments, places, tombeaux, drapeaux : les lieux où la nation garde vivant le souvenir de son passé.',
    motsCles: ['mémoire collective', 'lieu de mémoire', 'symboles', 'monuments', 'commémorations', 'paysages', 'patrimoine immatériel', 'identité', 'place du 13-Mai', 'Moramanga', 'doany'],
    sections: [
      {
        titre: 'Mémoire collective et lieux de mémoire',
        paras: [
          'La mémoire collective est l’ensemble des souvenirs, des représentations et des émotions qu’un groupe — famille, communauté, nation — partage à propos de son passé. Elle fonde l’identité : nous sommes, en partie, ce dont nous nous souvenons ensemble. Un lieu de mémoire est tout ce qui sert de support à cette mémoire : un endroit, mais aussi un objet, une date, un chant — tout ce autour de quoi le souvenir d’une communauté se cristallise. L’expression a été popularisée par l’historien français Pierre Nora dans les années 1980.',
        ],
      },
      {
        titre: 'Les grandes catégories',
        paras: ['On peut classer les lieux de mémoire en cinq familles :'],
        puces: [
          'les symboles : drapeau, hymne national, devise, armoiries — l’identité de la nation condensée en signes ;',
          'les monuments et sites : mémoriaux, statues, musées, stèles — à Madagascar, le mausolée d’Avaratr’Ambohitsaina, le monument aux morts d’Anosy, la gare et la stèle de Moramanga, le Rova d’Antananarivo ;',
          'les commémorations : dates et cérémonies qui reviennent chaque année — 29 mars, 26 juin, 11 novembre ;',
          'les paysages et lieux naturels chargés d’histoire : les douze collines sacrées de l’Imerina, les doany sakalava, les forêts et sources des ancêtres ;',
          'le patrimoine immatériel : récits, kabary, chants, savoir-faire — une mémoire sans murs, portée par les vivants.',
        ],
      },
      {
        titre: 'À quoi servent-ils ?',
        paras: [
          'Les lieux de mémoire font tenir la communauté ensemble : ils rappellent d’où elle vient, honorent ceux qui se sont sacrifiés, transmettent les valeurs aux jeunes générations et rendent visible l’identité commune. Mais attention : la mémoire n’est pas l’Histoire. La mémoire est affective et sélective — elle embellit, oublie, simplifie ; l’Histoire est critique et fondée sur les sources. Les deux se complètent : l’historien étudie aussi les mémoires, et les mémoires ont besoin de l’Histoire pour ne pas devenir des légendes.',
        ],
      },
    ],
    doc: {
      titre: 'Que sont les lieux de mémoire ?',
      source: 'd’après Pierre Nora, Les Lieux de mémoire, 1984-1992 — extraits adaptés et simplifiés',
      texte: 'Un lieu de mémoire, dans tous les sens du mot, va de l’objet le plus matériel et concret, éventuellement géographiquement situé, à l’objet le plus abstrait et intellectuellement construit. Ce peut être un monument, un personnage important, un musée, des archives, tout aussi bien qu’un symbole, une devise, un événement ou une institution. Si l’on habite encore sa mémoire, on n’a pas besoin de lui consacrer des lieux ; les lieux de mémoire naissent et vivent du sentiment qu’il n’y a pas de mémoire spontanée, qu’il faut créer des archives, maintenir des anniversaires, organiser des célébrations, parce que ces opérations ne sont pas naturelles. Moins la mémoire est vécue de l’intérieur, plus elle a besoin de supports extérieurs.',
      questions: ['Quelles formes un lieu de mémoire peut-il prendre, selon Nora ?',
        'Explique : « Si l’on habite encore sa mémoire, on n’a pas besoin de lui consacrer des lieux. »',
        'Applique cette idée à Madagascar : notre mémoire est-elle encore « habitée » ?'],
      reponses: ['Du plus concret au plus abstrait : monument, personnage, musée, archives — mais aussi symbole, devise, événement ou institution.',
        'Tant qu’une mémoire est vivante et transmise naturellement (par la famille, les récits), on n’a pas besoin de monuments ni d’archives ; on en crée quand la transmission spontanée faiblit.',
        'En partie : la mémoire familiale et villageoise (tombeaux, récits, famadihana) reste très vivante ; mais la mémoire nationale (1947, les royaumes) a besoin de musées, de stèles et de commémorations — et de l’Histoire orale — car les témoins disparaissent et la transmission spontanée s’affaiblit.']
    },
    lexique: [
      ['Mémoire collective', 'souvenirs et représentations du passé partagés par un groupe'],
      ['Lieu de mémoire', 'support matériel ou immatériel où se cristallise cette mémoire'],
      ['Commémoration', 'cérémonie rappelant collectivement un événement passé'],
      ['Patrimoine immatériel', 'héritage sans support matériel : récits, chants, savoir-faire'],
    ],
    synthese: 'Mémoire collective : souvenirs partagés d’un groupe, fondement de son identité. Lieu de mémoire (Nora) : tout support — matériel ou non — du souvenir commun. Cinq catégories : symboles (drapeau, hymne), monuments et sites (Anosy, Moramanga, Rova), commémorations (29 mars, 26 juin), paysages (collines sacrées, doany), patrimoine immatériel (kabary, récits). Mémoire ≠ Histoire : affective et sélective contre critique et fondée sur les sources — mais complémentaires.',
    saistu: 'Le monument aux morts du lac Anosy, l’« Ange noir », est lui-même un lieu de mémoire à double sens : érigé en 1927 par la France pour honorer les Malgaches morts pour elle en 1914-1918, il est devenu pour les Malgaches le lieu du souvenir de leurs propres sacrifices — et aujourd’hui, les cérémonies nationales s’y succèdent. Un même monument peut ainsi changer de signification avec l’Histoire : les lieux de mémoire ont, eux aussi, une histoire !',
    exos: ['Définir. a) Qu’est-ce que la mémoire collective ? b) Qu’est-ce qu’un lieu de mémoire ? d) Qui a popularisé cette expression ? e) Pourquoi la mémoire fonde-t-elle l’identité ?',
      'Classer. Range chaque exemple dans sa catégorie : a) l’hymne national ; b) la stèle de Moramanga ; d) le famadihana et les kabary ; e) les douze collines sacrées de l’Imerina.',
      'Distinguer. a) Donne deux caractères de la mémoire. b) Donne deux caractères de l’Histoire. d) Pourquoi la mémoire a-t-elle besoin de l’Histoire ? e) Pourquoi l’Histoire s’intéresse-t-elle aux mémoires ?'],
    corr: ['a) l’ensemble des souvenirs et représentations du passé partagés par un groupe ; b) tout support, matériel ou immatériel, où se cristallise le souvenir d’une communauté ; d) l’historien Pierre Nora, dans les années 1980 ; e) parce qu’un groupe se définit en partie par ce dont il se souvient ensemble.',
      'a) symbole ; b) monument/site ; d) patrimoine immatériel ; e) paysage/lieu naturel chargé d’histoire.',
      'a) affective et sélective (elle embellit, oublie, simplifie) ; b) critique et fondée sur les sources (elle se corrige et se discute) ; d) pour ne pas devenir légende : l’Histoire vérifie, corrige, complète ; e) parce que la façon dont les groupes se souviennent est elle-même un fait historique à étudier.'],
    fig: 'u5f1'
  },
  {
    t: 'La transmission des mémoires et le devoir de mémoire', comp: 'Commémorations et mémoires collectives', theme: 'Transmettre ; les oublis de l’Histoire ; devoir de mémoire',
    goal: 'expliquer comment se transmettent les mémoires, identifier les oublis de l’Histoire et définir le devoir de mémoire',
    mat: 'Témoignages, documents, photographies',
    revQ: 'Cite les cinq catégories de lieux de mémoire avec un exemple malgache chacune.',
    revRA: 'Symboles (drapeau), monuments (stèle de Moramanga), commémorations (29 mars), paysages (collines sacrées), patrimoine immatériel (kabary).',
    situation: 'Dans certaines familles, on sait encore qui fut déporté en 1947, qui fut esclave, qui combattit à Verdun. Dans d’autres, le silence a tout recouvert : les victimes se taisaient par douleur ou par honte, et les enfants n’ont pas demandé. Une mémoire qui ne se transmet pas meurt — et avec elle, une part de la nation. Comment transmettre ? Et que faire des pages que l’Histoire officielle a préféré oublier ?',
    legende: 'D’une génération à l’autre, la parole fait vivre la mémoire — le silence la fait mourir.',
    motsCles: ['transmission', 'témoins', 'famille', 'école', 'médias', 'oublis de l’Histoire', 'esclavage', 'nationalistes oubliés', 'devoir de mémoire', 'réconciliation', 'Histoire orale'],
    sections: [
      {
        titre: 'Comment les mémoires se transmettent',
        paras: ['La mémoire collective passe d’une génération à l’autre par plusieurs canaux :'],
        puces: [
          'la famille : récits des anciens, tombeaux, généalogies, famadihana — premier lieu de la transmission à Madagascar ;',
          'l’école : les cours d’histoire, les manuels — comme celui-ci — et les visites de sites ;',
          'les commémorations et les médias : cérémonies, documentaires, journaux, réseaux sociaux ;',
          'les arts : chansons, romans, films, pièces de théâtre qui font revivre le passé ;',
          'et l’Histoire orale, que tu as apprise en unité 1 : recueillir les témoins avant qu’il ne soit trop tard.',
        ],
      },
      {
        titre: 'Les oublis de l’Histoire',
        paras: ['Toute mémoire nationale a ses zones d’ombre — des pages occultées parce qu’elles dérangent :'],
        puces: [
          'la mémoire de l’esclavage : l’esclavage précolonial et sa longue trace sociale restent un sujet douloureux, souvent tu dans les familles comme dans l’espace public ;',
          'les nationalistes oubliés : à côté des héros célébrés, combien de militants, de femmes, de paysans insurgés de 1947 n’ont ni stèle ni nom de rue ?',
          'les cultures régionales minorées : la mémoire nationale a parfois été écrite du point de vue d’une région ou d’un groupe, laissant les autres dans l’ombre ;',
          'les pages sombres des pouvoirs successifs — répressions, victimes des crises — que chaque régime préfère taire.',
        ],
      },
      {
        titre: 'Le devoir de mémoire',
        paras: [
          'Le devoir de mémoire est l’obligation morale de se souvenir des souffrances et des injustices du passé — et d’abord de leurs victimes — pour leur rendre justice et empêcher la répétition. Il ne s’agit ni de vengeance ni de culte du passé : se souvenir de 1947 n’est pas haïr, c’est honorer et comprendre. Bien conduit, le devoir de mémoire répare (reconnaissance des victimes), réconcilie (vérité dite, dialogue possible) et protège (un peuple qui connaît ses tragédies les reconnaît quand elles menacent de revenir). C’est pourquoi il s’appuie sur l’Histoire : pas de juste mémoire sans vérité établie.',
        ],
      },
    ],
    doc: {
      titre: 'Petite-fille de 1947',
      source: 'texte reconstitué d’après des témoignages de descendants d’insurgés de 1947 — document pédagogique',
      texte: 'Mon grand-père n’a jamais parlé de 1947. Nous savions seulement qu’il ne fallait pas poser de questions sur la cicatrice de son épaule, ni sur son frère dont la photo était tournée vers le mur. C’est à sa mort que ma grand-mère a parlé : le frère était parti dans la forêt avec les insurgés, il n’est jamais revenu ; grand-père, lui, avait été arrêté et battu, puis relâché faute de preuves. Elle a dit : « Il se taisait pour vous protéger. À son époque, parler de 1947, c’était s’attirer des ennuis. » Aujourd’hui, je raconte cette histoire à mes élèves. Je leur dis : vos familles aussi ont des silences. Écoutez-les avant qu’ils ne deviennent des oublis.',
      questions: ['Pourquoi le grand-père se taisait-il ?',
        'Comment la mémoire familiale a-t-elle fini par se transmettre ?',
        '« Écoutez les silences avant qu’ils ne deviennent des oublis » : relie cette phrase à l’Histoire orale et au devoir de mémoire.'],
      reponses: ['Par peur — « parler de 1947, c’était s’attirer des ennuis » — et pour protéger les siens : le silence des victimes est une conséquence durable de la répression.',
        'Par la grand-mère, à la mort du témoin direct : la parole s’est libérée tard, et la petite-fille la transmet à son tour à ses élèves.',
        'Un silence peut encore être écouté tant que des témoins indirects vivent ; après, il devient oubli définitif. L’Histoire orale (unité 1) est l’outil, le devoir de mémoire est la raison : recueillir, vérifier et transmettre avant la disparition des dernières voix.']
    },
    lexique: [
      ['Transmission', 'passage de la mémoire d’une génération à la suivante'],
      ['Occulter', 'cacher volontairement une page du passé'],
      ['Devoir de mémoire', 'obligation morale de se souvenir des victimes et des injustices'],
      ['Réconciliation', 'rétablissement de la paix entre groupes divisés par le passé'],
    ],
    synthese: 'Transmission : famille (récits, tombeaux), école, commémorations et médias, arts, Histoire orale. Oublis de l’Histoire : esclavage et sa trace sociale, nationalistes anonymes de 1947, cultures régionales minorées, pages sombres des régimes. Devoir de mémoire : se souvenir des victimes pour leur rendre justice, réconcilier et empêcher la répétition — ni vengeance ni culte du passé, et toujours appuyé sur la vérité historique.',
    saistu: 'Ce n’est qu’en 2005 que l’État français a officiellement qualifié la répression de 1947 de « répression inacceptable », par la voix de son président en visite à Madagascar ; et il faudra attendre les années 2010 pour que les archives s’ouvrent largement aux historiens. Le devoir de mémoire avance lentement — mais il avance : chaque génération obtient un peu plus de vérité que la précédente. La tienne obtiendra peut-être le reste.',
    exos: ['La transmission. a) Cite les cinq canaux de transmission. b) Lequel est le premier à Madagascar ? d) Quel rôle jouent les arts ? e) Quel rôle joue l’Histoire orale ?',
      'Les oublis. a) Pourquoi la mémoire de l’esclavage est-elle difficile ? b) Qui sont les « nationalistes oubliés » ? d) Pourquoi des cultures régionales ont-elles été minorées ? e) Pourquoi les régimes occultent-ils certaines pages ?',
      'Le devoir de mémoire. a) Définis-le. b) Que n’est-il pas ? d) Cite ses trois fruits. e) Pourquoi a-t-il besoin de l’Histoire ?'],
    corr: ['a) famille, école, commémorations et médias, arts, Histoire orale ; b) la famille (récits, tombeaux, famadihana) ; d) ils font revivre le passé et le rendent sensible au grand nombre ; e) recueillir les témoignages des derniers témoins et les transformer en sources vérifiées.',
      'a) parce qu’elle touche à une souffrance et à une hiérarchie sociale dont la trace perdure : les familles se taisent ; b) les militants, femmes et paysans de la lutte nationale sans stèle ni nom de rue ; d) parce que la mémoire nationale a parfois été écrite du point de vue d’un seul groupe ; e) parce qu’elles mettent en cause leurs responsabilités.',
      'a) l’obligation morale de se souvenir des souffrances et injustices du passé, d’abord de leurs victimes ; b) ni une vengeance ni un culte du passé ; d) réparer (reconnaissance), réconcilier (vérité et dialogue), protéger (vigilance contre la répétition) ; e) parce qu’il n’y a pas de juste mémoire sans vérité établie par les sources.'],
    fig: 'u5f2'
  },
  {
    t: 'Les manifestations de commémoration', comp: 'Commémorations et mémoires collectives', theme: 'Défilé, dépôt de gerbes, conférence-débat, exposition — et projet de classe',
    goal: 'décrire les formes de commémoration et organiser une commémoration en classe',
    mat: 'Programme de cérémonie, photographies, matériel d’exposition',
    revQ: 'Définis le devoir de mémoire et cite deux « oublis » de l’Histoire malgache.',
    revRA: 'Obligation morale de se souvenir des victimes et injustices du passé pour réparer et empêcher la répétition ; oublis : mémoire de l’esclavage, nationalistes anonymes de 1947 (entre autres).',
    situation: 'Chaque 26 juin, ton quartier s’illumine de lanternes ; chaque 29 mars, des gerbes fleurissent les stèles. Mais une commémoration ne se réduit pas à un jour férié : c’est un langage complet — gestes, musiques, silences, discours — par lequel la nation se parle à elle-même. Dernière séance de ton année d’Histoire : apprendre ce langage… et organiser toi-même une commémoration.',
    legende: 'Arendrina du 26 juin, gerbes du 29 mars : la nation se souvient — et la relève, c’est toi.',
    motsCles: ['commémoration', 'défilé', 'dépôt de gerbes', 'minute de silence', 'conférence-débat', 'exposition', '26 juin', '29 mars', 'arendrina', 'projet de classe'],
    sections: [
      {
        titre: 'Les formes officielles',
        paras: ['Les cérémonies publiques combinent des gestes codifiés, chacun porteur de sens :'],
        puces: [
          'le défilé : militaires, écoles et associations marchent ensemble — la nation unie se montre à elle-même (26 juin sur les grandes avenues) ;',
          'le dépôt de gerbes et la minute de silence : honorer les morts par les fleurs et par le silence — à Anosy, à Moramanga, à Avaratr’Ambohitsaina ;',
          'les sonneries, hymnes et levées de drapeau : les symboles mis en action ;',
          'les discours officiels : rappeler l’événement et en tirer le sens pour le présent.',
        ],
      },
      {
        titre: 'Les formes culturelles et populaires',
        paras: ['Autour des cérémonies, la mémoire se vit aussi par :'],
        puces: [
          'les conférences-débats : des historiens et des témoins expliquent et répondent — la mémoire s’instruit ;',
          'les expositions : photographies, objets, documents d’archives mis sous les yeux de tous ;',
          'les concours, pièces de théâtre, chants et films scolaires ;',
          'et les traditions populaires : les arendrina (lanternes) du 26 juin, les podiums, les fêtes de quartier — la mémoire en joie.',
        ],
      },
      {
        titre: 'Projet : organiser une commémoration en classe',
        paras: [
          'À vous de jouer : choisissez un événement (le 29 mars, le 26 juin, une figure locale, un ancien de votre village) et bâtissez votre commémoration en cinq étapes : se documenter (leçons, bibliothèque, Histoire orale — interviewez un témoin ou un descendant !) ; préparer (date, lieu, autorisations, invitations — direction, anciens, autorités locales) ; célébrer (lever du drapeau, minute de silence, lecture de témoignages) ; faire comprendre (exposition de vos recherches, petite conférence-débat avec un invité) ; transmettre (affiches, enregistrements, album ou page à archiver au CDI pour les classes suivantes). Vous aurez alors fait, en vrai, tout le chemin de ce manuel : de la source au souvenir, de l’Histoire à la mémoire.',
        ],
      },
    ],
    doc: {
      titre: 'Programme officiel d’un 26 juin',
      source: 'texte reconstitué d’après les programmes types des cérémonies de la fête nationale dans les communes malgaches — document pédagogique',
      texte: 'Commune de X — Célébration du 26 juin, fête nationale. Veille au soir : retraite aux flambeaux et défilé des arendrina des écoles, podium des jeunes sur la place. Jour J, 7 h : rassemblement des autorités, des anciens combattants, des écoles et des associations. 7 h 30 : lever des couleurs et hymne national. 8 h : dépôt de gerbes au monument aux morts, minute de silence en hommage aux héros de l’indépendance et aux martyrs de 1947. 8 h 30 : lecture du message de la Nation ; remise de décorations aux anciens combattants. 9 h : défilé des forces de l’ordre, des écoles et des associations. 11 h : vin d’honneur ; après-midi : jeux populaires, exposition « Notre commune dans l’Histoire » à la mairie ; conférence-débat avec un historien à 15 h.',
      questions: ['Relève, dans l’ordre, les gestes officiels du matin et leur signification.',
        'Quelles formes culturelles et populaires le programme prévoit-il ?',
        'Pourquoi associer les anciens combattants, les écoles et un historien à la même journée ?'],
      reponses: ['Lever des couleurs et hymne (les symboles en action), dépôt de gerbes et minute de silence (honorer les morts), message de la Nation et décorations (donner sens et reconnaissance), défilé (la nation unie en marche).',
        'Retraite aux flambeaux et arendrina, podium des jeunes, jeux populaires, exposition historique, conférence-débat : la mémoire en fête et la mémoire instruite.',
        'Parce que la commémoration relie trois maillons : les témoins (anciens combattants) qui portent la mémoire vécue, les jeunes (écoles) qui doivent la recevoir, et l’historien qui garantit la vérité des faits — toute la chaîne de la transmission en une seule journée.']
    },
    lexique: [
      ['Défilé', 'marche ordonnée et publique manifestant l’unité d’une communauté'],
      ['Gerbe', 'bouquet déposé en hommage aux morts lors d’une cérémonie'],
      ['Arendrina', 'lanternes du 26 juin portées par les enfants la veille de la fête'],
      ['Conférence-débat', 'exposé d’un spécialiste suivi d’échanges avec le public'],
    ],
    synthese: 'Formes officielles : défilé, dépôt de gerbes et minute de silence, hymne et levée des couleurs, discours. Formes culturelles et populaires : conférences-débats, expositions, théâtre et chants, arendrina et fêtes du 26 juin. Projet de classe en cinq étapes : se documenter (avec l’Histoire orale), préparer, célébrer, faire comprendre, transmettre — la boucle du manuel est bouclée : de la source au souvenir.',
    saistu: 'La tradition des arendrina du 26 juin rappelle, dit-on, les lanternes des fêtes royales de l’Imerina — le fandroana — recyclées par la nation indépendante : une coutume ancienne devenue rituel républicain ! C’est le propre des mémoires vivantes : elles ne conservent pas le passé comme un musée, elles le réinventent sans cesse. Et maintenant que tu sais lire l’Histoire, les sources et les mémoires… c’est à toi d’écrire la suite. Bonne route, historienne, historien !',
    exos: ['Les formes. a) Cite trois gestes d’une cérémonie officielle et leur sens. b) Que signifie la minute de silence ? d) Cite trois formes culturelles ou populaires. e) Que sont les arendrina ?',
      'Comprendre. a) Pourquoi le défilé rassemble-t-il armée, écoles et associations ? b) À quoi sert une exposition ? d) Et une conférence-débat ? e) Pourquoi la fête (podiums, jeux) a-t-elle aussi sa place ?',
      'Projet. a) Énumère les cinq étapes du projet de commémoration. b) Que viens-tu chercher chez un témoin, et avec quelle méthode ? d) Que faut-il préparer avant la cérémonie ? e) Comment assurer la transmission après l’événement ?'],
    corr: ['a) lever des couleurs (symboles en action), dépôt de gerbes (honorer les morts), défilé (unité de la nation), discours (sens pour le présent) — trois suffisent ; b) honorer les morts par un hommage silencieux et partagé ; d) conférence-débat, exposition, théâtre, chants, concours, arendrina (trois suffisent) ; e) les lanternes portées par les enfants la veille du 26 juin.',
      'a) parce qu’il donne à voir la nation entière, unie, dans toutes ses composantes ; b) à mettre les documents et objets du passé sous les yeux de tous ; d) à faire expliquer les faits par un spécialiste et à permettre les questions ; e) parce que la mémoire se transmet aussi par la joie partagée : une nation commémore ce qu’elle aime.',
      'a) se documenter, préparer, célébrer, faire comprendre, transmettre ; b) un témoignage de première main, recueilli avec la méthode de l’Histoire orale (unité 1) : questionnaire préparé, écoute, vérification ; d) date, lieu, autorisations, invitations, matériel, répartition des rôles ; e) archiver les travaux (album, enregistrements, page au CDI) pour les classes suivantes.'],
    fig: 'u5f3'
  }
];

const unit5 = {
  no: 5, roman: 'V', name: 'Les commémorations et les célébrations des mémoires collectives',
  rag: 'identifier les lieux et les formes de la mémoire collective, et participer à sa transmission.',
  valeurs: 'fierté d’être malgache, culture de la paix',
  sessions: S,
  revision: {
    table: [
      ['Mémoire collective', 'Souvenirs partagés d’un groupe, fondement de l’identité ; différente de l’Histoire (critique, fondée sur les sources)', 'Définir et distinguer mémoire et Histoire'],
      ['Lieux de mémoire', 'Cinq catégories : symboles, monuments et sites, commémorations, paysages, patrimoine immatériel (Nora)', 'Classer les supports du souvenir'],
      ['Exemples malgaches', 'Place du 13-Mai, Anosy, Moramanga, Avaratr’Ambohitsaina, Rova, collines sacrées, doany, kabary', 'Connaître les lieux de mémoire nationaux'],
      ['Transmission', 'Famille, école, commémorations et médias, arts, Histoire orale', 'Expliquer comment la mémoire se transmet'],
      ['Oublis et devoir de mémoire', 'Esclavage, nationalistes anonymes, cultures minorées ; devoir de mémoire : réparer, réconcilier, protéger', 'Affronter les zones d’ombre du passé'],
      ['Commémorer', 'Formes officielles (défilé, gerbes, silence) et culturelles (expositions, conférences, arendrina) ; projet en cinq étapes', 'Organiser une commémoration']
    ],
    questions: [
      'Distingue mémoire collective et Histoire.',
      'Cite les cinq catégories de lieux de mémoire avec un exemple malgache chacune.',
      'Cite trois oublis de l’Histoire malgache.',
      'Définis le devoir de mémoire et ses trois fruits.',
      'Énumère les cinq étapes de l’organisation d’une commémoration.'
    ],
    answers: [
      'La mémoire est vécue, affective et sélective, portée par des groupes ; l’Histoire est reconstruite par les historiens, critique et fondée sur les sources — elles se complètent.',
      'Symboles (drapeau), monuments (stèle de Moramanga), commémorations (29 mars), paysages (collines sacrées de l’Imerina), patrimoine immatériel (kabary).',
      'La mémoire de l’esclavage, les nationalistes anonymes de 1947, les cultures régionales minorées (ou les pages sombres des régimes).',
      'L’obligation morale de se souvenir des souffrances et injustices du passé : il répare (reconnaissance des victimes), réconcilie (vérité dite) et protège (vigilance contre la répétition).',
      'Se documenter, préparer, célébrer, faire comprendre, transmettre.'
    ]
  },
  exam: {
    exos: [
      'Questions de cours. a) Définis la mémoire collective. b) Définis le lieu de mémoire. d) Définis le devoir de mémoire. e) Définis la commémoration.',
      'Classer. Range dans les cinq catégories : a) l’hymne malgache ; b) le monument aux morts d’Anosy ; d) le kabary et les récits des anciens ; e) la cérémonie du 29 mars.',
      'Mémoire et Histoire. a) Donne deux différences entre mémoire et Histoire. b) Pourquoi la mémoire peut-elle devenir légende ? d) Que fait l’Histoire orale pour la mémoire ? e) Pourquoi dit-on qu’elles se complètent ?',
      'Étude de document. Un témoignage reconstitué rapporte le silence d’un ancien de 1947. a) Pourquoi les victimes se taisaient-elles ? b) Qu’est-ce qu’un témoin indirect ? d) Que risque une mémoire non recueillie ? e) Relie ce cas au devoir de mémoire.',
      'Projet. Tu organises une commémoration du 29 mars dans ton collège. a) Indique tes deux premières étapes. b) Décris le déroulement de la cérémonie (trois gestes). d) Propose deux activités pour faire comprendre. e) Comment transmettras-tu le travail aux classes suivantes ?'
    ],
    corr: [
      'a) l’ensemble des souvenirs et représentations du passé partagés par un groupe ; b) tout support matériel ou immatériel où se cristallise le souvenir commun ; d) l’obligation morale de se souvenir des victimes et injustices du passé ; e) une cérémonie rappelant collectivement un événement passé. Un point par item.',
      'a) symbole ; b) monument/site ; d) patrimoine immatériel ; e) commémoration. Un point par item.',
      'a) vécue/reconstruite ; affective et sélective/critique et fondée sur les sources (deux différences) ; b) parce qu’elle embellit, simplifie et oublie, sans vérification ; d) elle transforme les souvenirs des témoins en sources vérifiées et conservées ; e) l’Histoire donne la vérité à la mémoire, la mémoire donne chair et sens à l’Histoire. Un point par item.',
      'a) par peur de la répression et pour protéger leur famille ; b) une personne qui rapporte ce qu’un témoin direct lui a confié ; d) de disparaître avec les derniers témoins — devenir un oubli définitif ; e) le devoir de mémoire commande de recueillir, vérifier et transmettre ces voix avant leur extinction : c’est réparer, réconcilier et protéger. Un point par item.',
      'a) se documenter (leçons, interviews de descendants, méthode de l’unité 1), puis préparer (date, lieu, autorisations, invités) ; b) lever du drapeau et hymne, dépôt de gerbes et minute de silence, lecture de témoignages ou message (trois gestes) ; d) une exposition des recherches et une conférence-débat avec un invité (historien, ancien, descendant) ; e) en archivant affiches, enregistrements et album au CDI pour les classes suivantes. Un point par item.'
    ]
  }
};

(async () => {
  const bufs = await L.render(figs);
  await buildUnit(unit5, bufs);
})();
