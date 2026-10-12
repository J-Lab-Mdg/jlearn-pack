// UNITÉ 2 — MADAGASCAR DEPUIS L'INDÉPENDANCE (PE T6) : 8 séances + révision + examen
const L = require('./figlib');
const { buildUnit } = require('./engine');
const { head, svg, txt, nline, dot, tableEl, box, arrow, seg, circle, poly, PINK, PINK2, GREEN, GREENL, BLUE, BLUEL, OCRE } = L;

const figs = {};
// S1 — fiche d'identité de la Première République
figs.u2f1 = (() => { const { s, y } = head('La Première République (1958-1972)', ['La carte d’identité de la Repoblika Malagasy.']);
  const top = y + 15;
  const data = [['élément', 'Première République'],
    ['nom officiel', 'Repoblika Malagasy'],
    ['proclamation', '14 octobre 1958 — indépendance : 26 juin 1960'],
    ['devise', 'Tanindrazana - Fahafahana - Fandrosoana'],
    ['drapeau', 'blanc, rouge et vert'],
    ['hymne national', 'Ry tanindrazanay malala ô !'],
    ['président', 'Philibert Tsiranana (14-10-1958 au 11-10-1972)']];
  let b = tableEl(60, top, [260, 620], 52, data);
  b += txt(500, top + 7 * 52 + 42, 'le drapeau et l’hymne de 1958 n’ont jamais changé : ils unissent toutes les Républiques', 20, GREEN, 'bold', 'middle');
  return svg(1000, top + 7 * 52 + 74, s + b); })();
// S2 — frise de la transition 1972-1975
figs.u2f2 = (() => { const { s, y } = head('La transition de 1972 à 1975', ['Trois ans, quatre chefs d’État : la période la plus mouvementée de notre histoire.']);
  const top = y + 20;
  const steps = [['Gabriel Ramanantsoa', '11 oct. 1972 — 5 fév. 1975', GREENL, GREEN],
    ['Richard Ratsimandrava', '5 fév. — 11 fév. 1975', '#FDE7EF', PINK2],
    ['Gilles Andriamahazo', '11 fév. — 15 juin 1975', BLUEL, BLUE],
    ['Didier Ignace Ratsiraka', '15 juin — 30 déc. 1975', '#FFE3C2', OCRE]];
  let b = '';
  steps.forEach(([n, d, f, c], i) => {
    const Y = top + i * 86;
    b += box(120, Y, 480, 60, n, f, c, 23);
    b += txt(640, Y + 38, d, 21, c, 'bold');
    if (i < 3) b += arrow(360, Y + 62, 360, Y + 84, '#777', 3.5);
  });
  b += txt(500, top + 4 * 86 + 20, 'mai 1972 : le mouvement populaire met fin à la Première République', 21, PINK2, 'bold', 'middle');
  return svg(1000, top + 4 * 86 + 52, s + b); })();
// S3 — fiche de la Deuxième République
figs.u2f3 = (() => { const { s, y } = head('La Deuxième République (1975-1993)', ['La carte d’identité de la Repoblika Demokratika Malagasy.']);
  const top = y + 15;
  const data = [['élément', 'Deuxième République'],
    ['nom officiel', 'Repoblika Demokratika Malagasy'],
    ['naissance', '30 décembre 1975'],
    ['devise', 'Tanindrazana - Tolom-piavotana - Fahafahana'],
    ['texte fondateur', '« boky mena », charte socialiste'],
    ['chef d’État', 'Didier Ratsiraka (30-12-1975 - août 1991)'],
    ['fin', 'grandes manifestations populaires de 1991']];
  let b = tableEl(60, top, [260, 620], 52, data);
  b += txt(500, top + 7 * 52 + 42, 'drapeau et hymne restent ceux de 1958 ; la devise, elle, change avec la République', 20, GREEN, 'bold', 'middle');
  return svg(1000, top + 7 * 52 + 74, s + b); })();
// S4 — la Troisième République, deux périodes
figs.u2f4 = (() => { const { s, y } = head('La Troisième République (1993-2010)', ['Deux périodes, une même Repoblikan’i Madagasikara.']);
  const top = y + 15;
  const data = [['période', 'chefs d’État successifs'],
    ['première période', 'Albert Zafy (mars 1993 - sept. 1996)'],
    ['', 'N. Ratsirahonana (sept. 1996 - janv. 1997)'],
    ['', 'D. Ratsiraka (fév. 1997 - juil. 2002)'],
    ['deuxième période', 'M. Ravalomanana (fév. 2002 - mars 2009)'],
    ['', 'transfert, puis transition 2009-2013']];
  let b = tableEl(60, top, [280, 620], 52, data);
  b += txt(500, top + 6 * 52 + 40, 'devise de la première période : Tanindrazana - Fahafahana - Fahamarinana', 19, PINK2, 'bold', 'middle');
  b += txt(500, top + 6 * 52 + 70, 'devise de la deuxième période : Tanindrazana - Fahafahana - Fandrosoana', 19, PINK2, 'bold', 'middle');
  return svg(1000, top + 6 * 52 + 102, s + b); })();
// S5 — la Quatrième République
figs.u2f5 = (() => { const { s, y } = head('La Quatrième République (depuis 2010)', ['Née du référendum constitutionnel du 17 novembre 2010.']);
  const top = y + 15;
  const data = [['élément', 'Quatrième République'],
    ['nom officiel', 'Repoblikan’i Madagasikara'],
    ['naissance', 'référendum du 17 novembre 2010'],
    ['devise', 'Fitiavana - Tanindrazana - Fandrosoana'],
    ['présidents élus', 'H. Rajaonarimampianina (2014 - 2018)'],
    ['', 'Andry Nirina Rajoelina (depuis janvier 2019)']];
  let b = tableEl(60, top, [260, 620], 52, data);
  b += txt(500, top + 6 * 52 + 42, 'toujours le même drapeau blanc-rouge-vert et le même hymne de 1958', 20, GREEN, 'bold', 'middle');
  return svg(1000, top + 6 * 52 + 74, s + b); })();
// S6 — les trois pouvoirs
figs.u2f6 = (() => { const { s, y } = head('Les trois pouvoirs de la République', ['Chaque République organise l’État autour de trois pouvoirs séparés.']);
  const top = y + 25;
  let b = box(290, top, 440, 56, 'L’ÉTAT', BLUEL, BLUE, 26);
  const cols = [['pouvoir EXÉCUTIF', 'chef de l’État + gouvernement : applique les lois', GREENL, GREEN],
    ['pouvoir LÉGISLATIF', 'députés + sénateurs : vote les lois', '#FDE7EF', PINK2],
    ['pouvoir JUDICIAIRE', 'tribunaux, HCC, HCJ : fait respecter les lois', '#FFE3C2', OCRE]];
  cols.forEach(([t1, t2, f, c], i) => {
    const X = 25 + i * 330;
    b += arrow(510, top + 58, X + 160, top + 98, '#777', 3);
    b += box(X, top + 100, 320, 54, t1, f, c, 22);
    const words = t2.split(' : ');
    b += txt(X + 160, top + 185, words[0], 18, '#333', 'normal', 'middle');
    b += txt(X + 160, top + 212, words[1], 18, c, 'bold', 'middle');
  });
  b += txt(500, top + 268, 'séparés pour s’équilibrer : aucun pouvoir ne doit dominer les deux autres', 21, BLUE, 'bold', 'middle');
  return svg(1000, top + 300, s + b); })();
// S7 — politiques des Républiques
figs.u2f7 = (() => { const { s, y } = head('Une politique par République', ['Chaque République a imprimé sa direction à l’État.']);
  const top = y + 15;
  const data = [['République', 'principes et politiques de base'],
    ['Première', 'dépendance envers la communauté française'],
    ['Deuxième', 'boky mena : SINPA, malgachisation'],
    ['Troisième', 'démocratie, libéralisation, mondialisation'],
    ['Quatrième', 'développement durable']];
  let b = tableEl(50, top, [220, 700], 56, data);
  b += txt(500, top + 5 * 56 + 42, 'd’une République à l’autre, l’État change de cap — l’historien compare pour comprendre', 20, GREEN, 'bold', 'middle');
  return svg(1000, top + 5 * 56 + 74, s + b); })();
// S8 — causes et conséquences des changements
figs.u2f8 = (() => { const { s, y } = head('Pourquoi les dirigeants changent-ils si souvent ?', ['Des facteurs qui s’accumulent… et des conséquences qui frappent tout le pays.']);
  const top = y + 20;
  const causes = ['programme de l’État non réalisé', 'développement mitigé', 'corruption aggravée', 'crises cycliques et instabilité'];
  const effets = ['non-continuité de l’État', 'crise économique et chômage', 'pauvreté et insécurité accrues', 'perte de confiance des partenaires'];
  let b = txt(240, top + 8, 'FACTEURS', 24, GREEN, 'bold', 'middle');
  causes.forEach((c, i) => { b += box(35, top + 30 + i * 64, 410, 52, c, GREENL, GREEN, 19); });
  b += txt(760, top + 8, 'CONSÉQUENCES', 24, PINK2, 'bold', 'middle');
  effets.forEach((c, i) => { b += box(555, top + 30 + i * 64, 410, 52, c, '#FDE7EF', PINK2, 19); });
  b += arrow(455, top + 155, 545, top + 155, BLUE, 5);
  b += txt(500, top + 30 + 4 * 64 + 28, 'crises de 1972, 1991, 2002 et 2009 : presque une par décennie', 21, BLUE, 'bold', 'middle');
  return svg(1000, top + 30 + 4 * 64 + 60, s + b); })();

const S = [
  {
    t: 'La Première République (1958-1972)', comp: 'Madagascar depuis l’indépendance', theme: 'Les caractéristiques de la Première République',
    goal: 'caractériser la Première République : nom, devise, drapeau, hymne et président',
    mat: 'Documents historiques, frise chronologique, photos du drapeau et des emblèmes',
    revQ: 'Quelles sont les deux questions qui situent un fait historique ?',
    revRA: 'Quand ? (le temps) et où ? (l’espace).',
    situation: 'Chaque 26 juin, les lampions s’allument et le drapeau blanc-rouge-vert monte dans toutes les cours d’école. Mais que fête-t-on exactement ? Et pourquoi le 14 octobre 1958 est-il, lui aussi, une date capitale ? Pour répondre, remontons à la naissance de la toute première République malgache.',
    recit: [
      'Le ##14 octobre 1958##, Madagascar proclame sa première République : la **Repoblika Malagasy**. Elle naît au sein de la communauté française — le pays se gouverne, mais reste lié à l’ancienne puissance coloniale. Puis vient le grand jour : le ##26 juin 1960##, l’indépendance est pleinement retrouvée. Sur le perron, @@Philibert Tsiranana@@, premier président, proclame la souveraineté devant le peuple rassemblé. Deux dates de naissance, donc — et c’est la seconde que nous fêtons chaque année.',
      'La jeune République se donne ses **emblèmes**, sa carte d’identité pour le monde entier. La **devise** d’abord : « Tanindrazana - Fahafahana - Fandrosoana » — patrie, liberté, progrès : tout un programme en trois mots. Le **drapeau** ensuite : blanc et rouge, couleurs des anciens royaumes, unis au vert du peuple des côtes. L’**hymne** enfin : « Ry tanindrazanay malala ô ! », écrit par le pasteur @@Rahajason@@ et mis en musique par @@Norbert Raharisoa@@ — adopté dès ##1959##, avant même l’indépendance.',
      'Président durant toute la période, Tsiranana gouverne quatorze années, de ##1958## à ##1972##. En ##mai 1972##, un grand mouvement populaire conteste le pouvoir : le président remet les pleins pouvoirs, et la Première République s’achève. Mais ses emblèmes, eux, ne mourront jamais : le drapeau et l’hymne de 1958 traverseront toutes les Républiques suivantes — un fil d’unité à travers les tempêtes.'
    ],
    doc: {
      titre: 'Le chant de la terre des ancêtres',
      source: 'première strophe de « Ry tanindrazanay malala ô ! », paroles du pasteur Rahajason, 1958',
      texte: 'Ry tanindrazanay malala ô ! Ry Madagasikara soa. Ny fitiavanay anao tsy miala, fa ho anao, ho anao doria tokoa. — « Ô terre de nos ancêtres bien-aimée ! Ô belle Madagascar ! Notre amour pour toi ne faiblira pas et restera fidèle à jamais. »',
      questions: ['Qui a écrit ces paroles, et en quelle année ?',
        'Quel sentiment ce chant exprime-t-il envers le pays ?',
        'Pourquoi cet hymne est-il une source historique précieuse ?'],
      reponses: ['Le pasteur Rahajason, en 1958 — l’année de la proclamation de la République.',
        'L’amour fidèle de la terre des ancêtres : le patriotisme.',
        'Parce qu’il témoigne des sentiments et des espoirs des Malgaches au moment de la naissance de la République — et qu’il est chanté sans changement depuis 1958.']
    },
    reperes: {
      dates: [['14 octobre 1958', 'proclamation de la Première République'],
        ['26 juin 1960', 'indépendance de Madagascar — fête nationale'],
        ['Mai 1972', 'mouvement populaire : fin de la Première République']],
      persos: [['Philibert Tsiranana', 'président de la Première République (1958-1972)'],
        ['Rahajason et Raharisoa', 'auteur et compositeur de l’hymne national']],
      mots: [['Repoblika Malagasy', 'nom officiel de la Première République'],
        ['Devise', 'formule qui résume l’idéal d’un État'],
        ['Emblèmes', 'symboles officiels : drapeau, hymne, devise']]
    },
    idee: {
      faux: 'Le 14 octobre 1958, Madagascar est devenu indépendant.',
      vrai: 'Non : en 1958, la République est proclamée mais reste au sein de la communauté française. L’indépendance complète date du 26 juin 1960 — c’est elle que célèbre la fête nationale.'
    },
    synthese: 'Repoblika Malagasy : proclamée le 14-10-1958, indépendance le 26-6-1960 ; devise Tanindrazana-Fahafahana-Fandrosoana ; drapeau blanc-rouge-vert ; hymne Ry tanindrazanay malala ô ! ; président Philibert Tsiranana jusqu’en 1972.',
    saistu: 'Notre hymne national « Ry tanindrazanay malala ô ! » a été écrit en 1958 par le pasteur Rahajason et mis en musique par Norbert Raharisoa, un professeur de musique. Il fut adopté officiellement le 27 avril 1959 — avant même l’indépendance : les paroles étaient prêtes à accueillir la liberté !',
    exos: ['Carte d’identité. a) Quel est le nom officiel de la Première République ? b) Quelle est sa devise ? d) Quelles sont les couleurs du drapeau ? e) Qui est son président et pendant quelles années ?',
      'Les deux dates. a) Que se passe-t-il le 14 octobre 1958 ? b) Que se passe-t-il le 26 juin 1960 ? d) Laquelle est la fête nationale ? e) Combien d’années séparent ces deux dates ?',
      'Frise et fin de période. a) Place 1958, 1960 et 1972 sur une frise. b) Combien d’années dure la présidence de Tsiranana ? d) Quel événement met fin à la Première République ? e) En quel siècle toute cette période se situe-t-elle ?'],
    corr: ['a) Repoblika Malagasy ; b) Tanindrazana - Fahafahana - Fandrosoana ; d) blanc, rouge et vert ; e) Philibert Tsiranana, de 1958 à 1972.',
      'a) la proclamation de la Première République ; b) l’indépendance de Madagascar ; d) le 26 juin ; e) presque 2 ans (1 an et 8 mois).',
      'a) frise ordonnée 1958 → 1960 → 1972 ; b) 1972 − 1958 = 14 ans ; d) le mouvement populaire de mai 1972 ; e) le XXᵉ siècle.'],
    fig: 'u2f1'
  },
  {
    t: 'La transition de 1972 à 1975', comp: 'Madagascar depuis l’indépendance', theme: 'La transition et le directoire militaire (1972-1975)',
    goal: 'décrire la période de transition 1972-1975 et ordonner ses quatre chefs d’État',
    mat: 'Frise chronologique, documents historiques, photos d’époque',
    revQ: 'Devise et président de la Première République ?',
    revRA: 'Tanindrazana - Fahafahana - Fandrosoana ; Philibert Tsiranana.',
    situation: 'En mai 1972, étudiants, lycéens puis travailleurs descendent dans les rues de la capitale. Le 13 mai, la foule immense se rassemble devant l’hôtel de ville : la Première République vit ses derniers mois. Commence alors une période étonnante : trois ans à peine… et quatre chefs d’État successifs !',
    recit: [
      'Tout commence par la colère de la jeunesse. Au début de ##1972##, les étudiants en médecine, puis les lycéens, puis les travailleurs protestent : l’université, la langue d’enseignement, la vie chère, la **dépendance** envers l’ancienne puissance coloniale nourrissent le malaise. Le ##13 mai 1972##, une foule immense se rassemble devant l’hôtel de ville d’Antananarivo — la « rotaka » emporte la Première République. Le ##11 octobre 1972##, le président Tsiranana remet les pleins pouvoirs au général @@Gabriel Ramanantsoa@@ : l’armée prend la barre de la **transition**.',
      'Mais les tensions persistent. Le ##5 février 1975##, Ramanantsoa transmet le pouvoir au colonel @@Richard Ratsimandrava@@ — qui est assassiné six jours plus tard, le ##11 février 1975## : le choc le plus brutal de toute la période. Un **directoire militaire**, conduit par le général @@Gilles Andriamahazo@@, assure alors l’intérim du pays sous le choc.',
      'Le ##15 juin 1975##, le capitaine de frégate @@Didier Ratsiraka@@ est porté à la tête de l’État. Le ##30 décembre 1975##, après référendum, il proclame la Deuxième République : la transition s’achève. Trois ans à peine, quatre chefs d’État — retiens l’ordre **R-R-A-R** : Ramanantsoa, Ratsimandrava, Andriamahazo, Ratsiraka. C’est la clef de toute la période.'
    ],
    doc: {
      titre: 'Un lycéen sur la place, le 13 mai 1972',
      source: 'témoignage d’un ancien lycéen — texte reconstitué',
      texte: 'Nous sommes partis du lycée en rangs serrés, rejoints à chaque rue par d’autres élèves, puis par les ouvriers. Devant l’hôtel de ville, je n’avais jamais vu autant de monde : on chantait, on réclamait une école pour nous, dans notre langue, et du travail pour nos aînés. Les anciens disaient que rien ne serait plus comme avant. Ils avaient raison.',
      questions: ['À quelle famille de sources ce document appartient-il ? Quelle précaution impose-t-elle ?',
        'Quelles revendications le témoin rapporte-t-il ?',
        'Quelle phrase montre que les contemporains ont senti l’importance de l’événement ?'],
      reponses: ['Une source orale (témoignage) — et de plus reconstituée : il faut la recouper avec d’autres sources (photos, journaux de 1972).',
        'Une école adaptée, l’enseignement dans la langue malgache, du travail.',
        '« Les anciens disaient que rien ne serait plus comme avant » : ils ont compris qu’une page se tournait.']
    },
    reperes: {
      dates: [['13 mai 1972', 'la foule devant l’hôtel de ville : fin de la Première République'],
        ['11 février 1975', 'assassinat du colonel Ratsimandrava'],
        ['30 décembre 1975', 'proclamation de la Deuxième République']],
      persos: [['Gabriel Ramanantsoa', 'général, reçoit les pleins pouvoirs en octobre 1972'],
        ['Richard Ratsimandrava', 'colonel, chef de l’État six jours en février 1975'],
        ['Gilles Andriamahazo', 'général, dirige le directoire militaire'],
        ['Didier Ratsiraka', 'porté à la tête de l’État le 15 juin 1975']],
      mots: [['Transition', 'période entre deux Républiques'],
        ['Directoire militaire', 'groupe de militaires qui dirige collectivement l’État'],
        ['Rotaka', 'nom donné au mouvement populaire de 1972']]
    },
    idee: {
      faux: 'La transition a duré très longtemps, puisque quatre chefs d’État se sont succédé.',
      vrai: 'Non : de l’arrivée de Ramanantsoa (octobre 1972) à la proclamation de la Deuxième République (décembre 1975), trois ans seulement s’écoulent. Beaucoup de dirigeants ne veut pas dire beaucoup d’années !'
    },
    synthese: 'mai 1972 : fin de la Première République ; transition 1972-1975 ; ordre des quatre chefs d’État : Ramanantsoa, Ratsimandrava (6 jours), Andriamahazo, Ratsiraka ; 30 décembre 1975 : naissance de la Deuxième République.',
    saistu: 'La grande place au cœur d’Antananarivo s’appelle « place du 13-Mai » en souvenir du 13 mai 1972, jour où la foule s’y est rassemblée face à l’hôtel de ville. Depuis, chaque génération de Malgaches y a exprimé ses espoirs : une place devenue, à elle seule, une source d’histoire.',
    exos: ['Dates et ordre. a) Quel mouvement met fin à la Première République, et en quel mois ? b) Qui reçoit les pleins pouvoirs le 11 octobre 1972 ? d) Remets dans l’ordre : Andriamahazo, Ratsiraka, Ramanantsoa, Ratsimandrava. e) Quelle date clôt la transition ?',
      'Durées. a) Combien de temps Ratsimandrava dirige-t-il l’État ? b) Combien d’années sépare mai 1972 de décembre 1975 ? d) Qui dirige entre le 11 février et le 15 juin 1975 ? e) Quel âge a la transition quand Ratsiraka arrive (en mois, d’octobre 1972 à juin 1975) ?',
      'Comprendre. a) Cite deux causes du mouvement de 1972. b) Pourquoi parle-t-on de « directoire militaire » ? d) Quel événement tragique marque février 1975 ? e) Par quel moyen la Deuxième République est-elle approuvée avant sa proclamation ?'],
    corr: ['a) le mouvement populaire de mai 1972 ; b) le général Gabriel Ramanantsoa ; d) Ramanantsoa → Ratsimandrava → Andriamahazo → Ratsiraka ; e) le 30 décembre 1975.',
      'a) six jours (5 au 11 février 1975) ; b) environ 3 ans et demi ; d) le général Gilles Andriamahazo ; e) environ 32 mois.',
      'a) malaise étudiant (université, langue d’enseignement) et malaise social (vie chère, dépendance) ; b) parce que des militaires dirigent collectivement l’État ; d) l’assassinat du colonel Ratsimandrava le 11 février ; e) par référendum.'],
    fig: 'u2f2'
  },
  {
    t: 'La Deuxième République (1975-1993)', comp: 'Madagascar depuis l’indépendance', theme: 'Les caractéristiques de la Deuxième République',
    goal: 'caractériser la Deuxième République : nom, devise, texte fondateur et chef d’État',
    mat: 'Documents historiques, frise chronologique, extraits de textes d’époque',
    revQ: 'Récite l’ordre des quatre chefs d’État de la transition 1972-1975.',
    revRA: 'Ramanantsoa, Ratsimandrava, Andriamahazo, Ratsiraka.',
    situation: 'Fin décembre 1975, la radio nationale annonce une nouvelle République : la Repoblika Demokratika Malagasy. Un petit livre rouge circule bientôt dans tout le pays ; à l’école, les cours changent de langue ; dans les campagnes naissent des coopératives. Une page entière de notre histoire commence — elle durera dix-huit ans.',
    recit: [
      'Le ##30 décembre 1975##, après référendum, naît la **Repoblika Demokratika Malagasy** : la Deuxième République. Nouvelle devise — « Tanindrazana - Tolom-piavotana - Fahafahana », où apparaît **Tolom-piavotana**, le combat libérateur — mais même drapeau blanc-rouge-vert et même hymne : les emblèmes de 1958 traversent les Républiques, signe d’unité nationale.',
      'Son projet tient dans un petit livre : le **boky mena**, le « livre rouge », charte de la **révolution socialiste malgache**. L’État dirige l’économie ; les coopératives socialistes comme la **SINPA** organisent la collecte et la distribution des produits ; les **collectivités décentralisées** rapprochent l’administration du peuple ; et la **malgachisation** fait de la langue malgache la langue de l’enseignement — toute une génération apprendra les sciences en malgache.',
      'À la tête de l’État : @@Didier Ratsiraka@@, de ##décembre 1975## à ##août 1991## — quinze ans et demi, la plus longue présidence de notre histoire. Mais à la fin des années 1980, les difficultés économiques s’accumulent ; en ##1991##, d’immenses manifestations pacifiques réclament le changement. La Deuxième République s’efface : la transition vers la Troisième commence.'
    ],
    doc: {
      titre: 'Le projet du « livre rouge »',
      source: 'd’après la Charte de la révolution socialiste malgache (boky mena), 1975 — extrait adapté',
      texte: 'La révolution socialiste est la seule voie qui permette au peuple malgache de conquérir son indépendance économique réelle. L’État dirigera les secteurs vitaux de l’économie ; les fokonolona et les collectivités décentralisées seront les cellules de base du développement ; l’école formera des citoyens enracinés dans leur culture et servira le peuple tout entier.',
      questions: ['Quel objectif principal ce texte fixe-t-il à la révolution socialiste ?',
        'Quels acteurs sont désignés comme « cellules de base » du développement ?',
        'Quelle réalisation scolaire de la Deuxième République ce texte annonce-t-il ?'],
      reponses: ['Conquérir l’indépendance économique réelle du peuple malgache.',
        'Les fokonolona et les collectivités décentralisées.',
        'Une école enracinée dans la culture malgache : la malgachisation de l’enseignement.']
    },
    reperes: {
      dates: [['30 décembre 1975', 'naissance de la Deuxième République'],
        ['1991', 'grandes manifestations : fin de la Deuxième République']],
      persos: [['Didier Ratsiraka', 'chef d’État de 1975 à 1991 — la plus longue présidence']],
      mots: [['Boky mena', '« livre rouge » : charte de la révolution socialiste malgache'],
        ['SINPA', 'coopérative socialiste de collecte et distribution des produits'],
        ['Malgachisation', 'enseignement donné en langue malgache'],
        ['Collectivités décentralisées', 'administrations locales rapprochées du peuple']]
    },
    idee: {
      faux: 'Chaque nouvelle République change le drapeau et l’hymne.',
      vrai: 'Non : le drapeau blanc-rouge-vert et l’hymne « Ry tanindrazanay malala ô ! » n’ont JAMAIS changé depuis 1958. Ce qui change avec les Républiques : le nom, la devise, la constitution et la politique.'
    },
    synthese: 'Repoblika Demokratika Malagasy, 30-12-1975 ; devise Tanindrazana-Tolom-piavotana-Fahafahana ; boky mena = charte de la révolution socialiste ; SINPA, décentralisation, malgachisation ; Ratsiraka chef d’État 1975-1991 ; fin : manifestations de 1991.',
    saistu: 'La malgachisation a transformé l’école : du jour au lendemain, des générations d’élèves ont appris les mathématiques et les sciences en malgache. Les mots savants qu’il fallait inventer — « isa » pour le nombre, « refy » pour la mesure — sont nés dans les années 1970... et tu en utilises certains encore aujourd’hui dans tes manuels !',
    exos: ['Carte d’identité. a) Quel est le nom officiel de la Deuxième République ? b) Quelle est sa date de naissance ? d) Quelle est sa devise ? e) Qui la dirige, et pendant combien d’années ?',
      'Le projet. a) Comment s’appelle le texte fondateur, et que signifie son nom ? b) Que fait la SINPA ? d) Qu’est-ce que la malgachisation ? e) Que sont les collectivités décentralisées ?',
      'Continuités et fin. a) Quels emblèmes de 1958 restent inchangés ? b) Quel mot nouveau apparaît dans la devise ? d) Quel événement met fin à la Deuxième République ? e) Combien d’années dure cette République (1975-1993) ?'],
    corr: ['a) Repoblika Demokratika Malagasy ; b) le 30 décembre 1975 ; d) Tanindrazana - Tolom-piavotana - Fahafahana ; e) Didier Ignace Ratsiraka, pendant plus de 15 ans (1975-1991).',
      'a) le boky mena, le « livre rouge », charte de la révolution socialiste malgache ; b) c’est la coopérative socialiste chargée de collecter et distribuer les produits ; d) l’enseignement donné en langue malgache ; e) des administrations locales rapprochées du peuple.',
      'a) le drapeau blanc-rouge-vert et l’hymne national ; b) Tolom-piavotana, le combat libérateur ; d) les grandes manifestations populaires de 1991 ; e) 18 ans.'],
    fig: 'u2f3'
  },
  {
    t: 'La Troisième République (1993-2010)', comp: 'Madagascar depuis l’indépendance', theme: 'Les caractéristiques de la Troisième République',
    goal: 'caractériser la Troisième République et distinguer ses deux périodes',
    mat: 'Frise chronologique, documents historiques, articles de presse d’époque',
    revQ: 'Nom, texte fondateur et chef d’État de la Deuxième République ?',
    revRA: 'Repoblika Demokratika Malagasy ; le boky mena ; Didier Ratsiraka.',
    situation: 'En 1992, les Malgaches votent une nouvelle constitution ; en mars 1993, un professeur de médecine coiffé d’un chapeau de paille devient président : la Troisième République est née. Elle connaîtra cinq chefs d’État et deux grandes périodes — une histoire mouvementée qu’il faut ranger avec la rigueur de l’historien.',
    recit: [
      'Après les manifestations de 1991, les Malgaches votent une nouvelle constitution en ##1992## : la **Repoblikan’i Madagasikara** — la Troisième République — est née. Première période (##1993-2002##) : @@Albert Zafy@@, élu en ##mars 1993##, gouverne sous la devise « Tanindrazana - Fahafahana - Fahamarinana » — la **vérité** remplace le progrès. Empêché par l’Assemblée en ##1996##, il laisse la place au président par intérim @@Norbert Lala Ratsirahonana@@ ; puis @@Didier Ratsiraka@@, de retour, gouverne de ##février 1997## à ##juillet 2002##.',
      'Deuxième période (##2002-2010##) : l’élection de décembre 2001 débouche sur la grande **crise de 2002** ; @@Marc Ravalomanana@@ s’installe le ##22 février 2002##, et la devise redevient « Tanindrazana - Fahafahana - Fandrosoana ». Réélu en 2006, il démissionne le ##17 mars 2009## au terme d’une nouvelle crise : le pouvoir est transféré le jour même à @@Andry Nirina Rajoelina@@, qui conduit la **transition** de 2009 à 2013.',
      'Sur toute la période, l’État suit un cap nouveau : **démocratie** et **libéralisation**, intégration à la **mondialisation**, ajustements structurels, promotion du secteur privé. Cinq dirigeants, deux crises, un cap : voilà la Troisième République — la République de la démocratie retrouvée.'
    ],
    doc: {
      titre: 'Mars 1993 : un nouveau président élu',
      source: 'article de presse, mars 1993 — texte reconstitué',
      texte: 'Au terme d’un scrutin ouvert à plusieurs candidats, le professeur Albert Zafy, reconnaissable à son chapeau de paille, a été proclamé président de la République. Dans les rues de la capitale, ses partisans fêtent ce qu’ils appellent le retour de la démocratie : pour la première fois depuis longtemps, l’alternance s’est faite par les urnes.',
      questions: ['De quel type de source s’agit-il, et quels contrôles faut-il appliquer ?',
        'Quel événement précis ce document rapporte-t-il ?',
        'Pourquoi les partisans parlent-ils de « retour de la démocratie » ?'],
      reponses: ['Une source écrite (article de presse), ici reconstituée : vérifier l’auteur, la date, le journal, et croiser avec d’autres sources.',
        'L’élection d’Albert Zafy à la présidence, en mars 1993 — le début de la Troisième République.',
        'Parce que le changement de dirigeant s’est fait par une élection ouverte et non par la rue : l’alternance par les urnes.']
    },
    reperes: {
      dates: [['1992', 'nouvelle constitution votée par référendum'],
        ['22 février 2002', 'Marc Ravalomanana s’installe après la crise'],
        ['17 mars 2009', 'démission de Ravalomanana, transfert à Rajoelina']],
      persos: [['Albert Zafy', 'premier président de la Troisième République (1993-1996)'],
        ['Norbert Lala Ratsirahonana', 'président par intérim (1996-1997)'],
        ['Marc Ravalomanana', 'président de 2002 à 2009'],
        ['Andry Nirina Rajoelina', 'conduit la transition 2009-2013']],
      mots: [['Alternance', 'remplacement d’un dirigeant par un autre, par les urnes'],
        ['Libéralisation', 'ouverture de l’économie au marché et au secteur privé'],
        ['Mondialisation', 'intégration du pays aux échanges du monde entier']]
    },
    idee: {
      faux: 'Le Ratsiraka de la Troisième République est un autre homme que celui de la Deuxième.',
      vrai: 'Non : c’est le même Didier Ratsiraka, à deux époques différentes — chef d’État de la Deuxième République (1975-1991), puis président élu de la Troisième (1997-2002). Sur la frise, cela fait deux segments bien distincts !'
    },
    synthese: 'Repoblikan’i Madagasikara, 1993-2010, deux périodes ; 1ʳᵉ : Zafy, Ratsirahonana, Ratsiraka ; 2ᵉ : Ravalomanana puis transition 2009-2013 ; politiques : démocratie, libéralisation, mondialisation, ajustements structurels.',
    saistu: 'C’est sous la Troisième République, en 2005, que Madagascar a changé de monnaie : l’ariary a remplacé le franc malgache. L’ariary est l’une des deux seules monnaies au monde qui ne se divise pas en centièmes : il vaut 5 iraimbilanja — un héritage des anciennes pièces d’argent pesées au temps des royaumes !',
    exos: ['Les deux périodes. a) Quelles années couvre la Troisième République ? b) Qui ouvre la première période en 1993 ? d) Qui ouvre la deuxième période en 2002 ? e) Quelles sont les deux devises successives ?',
      'Ordre et dates. a) Classe : Ravalomanana, Zafy, Ratsiraka, Ratsirahonana. b) Qui assure l’intérim en 1996-1997 ? d) Que se passe-t-il le 17 mars 2009 ? e) Quelles années couvre la transition qui suit ?',
      'Comprendre. a) Cite deux orientations politiques de la Troisième République. b) En quoi la devise de Zafy diffère-t-elle ? d) Quelles sont les deux grandes crises de la période ? e) Pourquoi dit-on que cette République est celle de la « démocratie retrouvée » ?'],
    corr: ['a) 1993-2010 ; b) Albert Zafy ; d) Marc Ravalomanana ; e) Tanindrazana-Fahafahana-Fahamarinana, puis Tanindrazana-Fahafahana-Fandrosoana.',
      'a) Zafy → Ratsirahonana → Ratsiraka → Ravalomanana ; b) Norbert Lala Ratsirahonana ; d) Marc Ravalomanana quitte le pouvoir, transféré le jour même à Andry Rajoelina ; e) 2009-2013.',
      'a) démocratie et libéralisation ; intégration à la mondialisation (aussi : ajustements structurels, secteur privé) ; b) elle remplace Fandrosoana (progrès) par Fahamarinana (vérité) ; d) 2002 et 2009 ; e) parce que les élections ouvertes et le multipartisme reviennent après 1991.'],
    fig: 'u2f4'
  },
  {
    t: 'La Quatrième République (depuis 2010)', comp: 'Madagascar depuis l’indépendance', theme: 'Les caractéristiques de la Quatrième République',
    goal: 'caractériser la Quatrième République et ses présidents élus',
    mat: 'Constitution de 2010, frise chronologique, articles de presse',
    revQ: 'Les deux périodes de la Troisième République et leurs premiers présidents ?',
    revRA: '1993-2002 avec Albert Zafy ; 2002-2010 avec Marc Ravalomanana.',
    situation: 'Le 17 novembre 2010, les électeurs déposent dans l’urne un bulletin décisif : une nouvelle constitution est approuvée par référendum. La Quatrième République est née — c’est elle qui organise encore aujourd’hui l’État malgache. Son histoire s’écrit sous nos yeux : nous en sommes les témoins… et les sources de demain !',
    recit: [
      'Le ##17 novembre 2010##, les Malgaches approuvent par **référendum** une nouvelle constitution : la Quatrième République est née. Même nom que la Troisième — **Repoblikan’i Madagasikara** —, même drapeau et même hymne que depuis 1958… mais une devise nouvelle : « Fitiavana - Tanindrazana - Fandrosoana » — l’**amour** ouvre désormais la devise nationale.',
      'La mise en route fut progressive. La transition conduite par @@Andry Rajoelina@@ s’étend de ##2009## à ##2013## ; l’élection de fin 2013 porte @@Hery Rajaonarimampianina@@ à la présidence en ##janvier 2014## ; en ##janvier 2019##, Andry Rajoelina lui succède, cette fois comme président élu, puis est réélu. Le cap affiché : une politique générale fondée sur le **développement durable** — développer le pays sans épuiser ses ressources, en pensant aux générations futures.',
      'Étudier la Quatrième République a un charme particulier : ses **sources** sont partout autour de nous — journaux, radios, réseaux, témoins directs. Son histoire s’écrit sous nos yeux, et l’historien que tu deviens peut la collecter… en appliquant, bien sûr, la démarche historique !'
    ],
    doc: {
      titre: 'Le peuple malgache se donne une constitution',
      source: 'd’après le préambule de la Constitution du 11 décembre 2010 — extrait adapté',
      texte: 'Le peuple malgache souverain, affirmant sa croyance en Andriamanitra Andriananahary, résolu à promouvoir et à développer son héritage de société vivant en harmonie et respectueuse de l’altérité, convaincu de la nécessité de préserver ses richesses naturelles pour les générations futures, déclare adopter la présente constitution.',
      questions: ['Qui adopte la constitution, et par quel moyen l’a-t-il approuvée ?',
        'Relève la phrase qui annonce le développement durable.',
        'Pourquoi une constitution est-elle une source précieuse pour l’historien ?'],
      reponses: ['Le peuple malgache souverain — par le référendum du 17 novembre 2010.',
        '« Préserver ses richesses naturelles pour les générations futures. »',
        'Parce qu’elle révèle le projet de société d’une époque : la comparer aux constitutions précédentes, c’est lire ce que chaque République a voulu changer.']
    },
    reperes: {
      dates: [['17 novembre 2010', 'référendum : naissance de la Quatrième République'],
        ['Janvier 2014', 'Hery Rajaonarimampianina, premier président élu'],
        ['Janvier 2019', 'Andry Rajoelina devient président élu']],
      persos: [['Hery Rajaonarimampianina', 'président élu de 2014 à 2018'],
        ['Andry Nirina Rajoelina', 'chef de la transition, puis président élu depuis 2019']],
      mots: [['Référendum', 'vote par lequel le peuple approuve ou rejette un texte'],
        ['Constitution', 'loi fondamentale qui organise l’État'],
        ['Développement durable', 'développer sans épuiser les ressources des générations futures']]
    },
    idee: {
      faux: 'Andry Rajoelina a toujours été un président élu.',
      vrai: 'Non : il faut distinguer ses deux rôles — chef de la transition (2009-2013, non élu), puis président élu (depuis janvier 2019). Entre les deux : la présidence élue de Hery Rajaonarimampianina (2014-2018).'
    },
    synthese: 'née du référendum du 17-11-2010 ; devise Fitiavana-Tanindrazana-Fandrosoana ; transition 2009-2013 ; présidents élus : Rajaonarimampianina (2014-2018), Rajoelina (depuis 2019) ; cap : développement durable.',
    saistu: 'La constitution de 2010 est déjà la quatrième de notre histoire — après celles de 1959, de 1975 et de 1992. À chaque République sa constitution : la comparer aux précédentes, c’est lire d’un coup d’œil ce que chaque époque a voulu changer. Quatre textes, quatre projets de société : une mine d’or pour les historiens !',
    exos: ['Carte d’identité. a) De quel événement la Quatrième République est-elle née, et à quelle date ? b) Quelle est sa devise ? d) Quel est son nom officiel ? e) Quels emblèmes partage-t-elle avec les Républiques précédentes ?',
      'Dirigeants. a) Qui conduit la transition de 2009 à 2013 ? b) Qui est élu président en janvier 2014 ? d) Qui préside depuis janvier 2019 ? e) Quelle différence de statut entre la période 2009-2013 et la période depuis 2014 ?',
      'Comprendre. a) Que signifie « développement durable » ? b) Pourquoi dit-on que nous sommes les « sources de demain » ? d) Combien de constitutions Madagascar a-t-il connues, et en quelles années ? e) Calcule l’âge de la Quatrième République en 2026.'],
    corr: ['a) du référendum constitutionnel du 17 novembre 2010 ; b) Fitiavana - Tanindrazana - Fandrosoana ; d) Repoblikan’i Madagasikara ; e) le drapeau blanc-rouge-vert et l’hymne de 1958.',
      'a) Andry Nirina Rajoelina ; b) Hery Rajaonarimampianina ; d) Andry Nirina Rajoelina ; e) 2009-2013 : transition non élue ; depuis 2014 : présidents élus au suffrage.',
      'a) développer le pays sans épuiser ses ressources, en préservant l’avenir des générations futures ; b) parce que nos témoignages, photos et documents d’aujourd’hui seront les sources des historiens futurs ; d) quatre : 1959, 1975, 1992, 2010 ; e) 2026 − 2010 = 16 ans.'],
    fig: 'u2f5'
  },
  {
    t: 'Les institutions des Républiques successives', comp: 'Madagascar depuis l’indépendance', theme: 'Les institutions : exécutif, législatif, judiciaire',
    goal: 'décrire les trois pouvoirs de l’État et comparer les institutions des quatre Républiques',
    mat: 'Schéma des institutions, textes constitutionnels simplifiés, tableau comparatif',
    revQ: 'Devise et date de naissance de la Quatrième République ?',
    revRA: 'Fitiavana - Tanindrazana - Fandrosoana ; référendum du 17 novembre 2010.',
    situation: 'Qui fabrique les lois ? Qui les applique ? Qui punit celui qui les viole ? Si une seule personne faisait les trois, elle serait toute-puissante — et le citoyen sans défense. C’est pourquoi, depuis 1958, chaque République malgache organise l’État en trois pouvoirs séparés. Entrons dans la machine de l’État.',
    recit: [
      'L’idée vient de loin. Au ##XVIIIᵉ siècle##, le philosophe @@Montesquieu@@ l’énonce dans //De l’esprit des lois// : pour qu’on ne puisse abuser du pouvoir, il faut que le pouvoir arrête le pouvoir. D’où la **séparation des pouvoirs** : le **pouvoir exécutif** — chef de l’État et gouvernement — applique les lois ; le **pouvoir législatif** — députés et sénateurs — vote les lois ; le **pouvoir judiciaire** — tribunaux et hautes cours — les fait respecter. Trois jambes pour l’État, et aucune ne doit écraser les autres : c’est la protection du citoyen.',
      'Chaque République malgache a organisé ces pouvoirs à sa manière. Première République : le chef de l’État est aussi chef du gouvernement — l’exécutif est concentré. Deuxième République : un organe original apparaît, le **Conseil Suprême de la Révolution** (C.S.R.), qui oriente l’État selon le boky mena. Troisième République : le modèle complet s’installe — exécutif à deux têtes, Parlement avec députés et sénateurs, et au sommet du judiciaire la **Haute Cour Constitutionnelle** (HCC), gardienne de la constitution.',
      'Quatrième République : même architecture, renforcée par la **Haute Cour de Justice** (HCJ), chargée de juger les plus hauts responsables. Comparer les institutions, c’est le travail de l’historien : repérer ce qui continue — trois pouvoirs partout — et ce qui change — C.S.R. hier, HCC et HCJ aujourd’hui. La continuité et le changement : deux lunettes à porter ensemble.'
    ],
    doc: {
      titre: 'Que le pouvoir arrête le pouvoir',
      source: 'd’après Montesquieu, De l’esprit des lois, 1748 — extrait adapté',
      texte: 'Tout serait perdu si le même homme, ou le même corps, exerçait ces trois pouvoirs : celui de faire les lois, celui d’exécuter les résolutions publiques, et celui de juger les crimes ou les différends des particuliers. C’est une expérience éternelle que tout homme qui a du pouvoir est porté à en abuser ; pour qu’on ne puisse abuser du pouvoir, il faut que, par la disposition des choses, le pouvoir arrête le pouvoir.',
      questions: ['Quels sont les trois pouvoirs que Montesquieu refuse de confier à un seul homme ?',
        'Quel danger redoute-t-il, et pourquoi ?',
        'Montre que les constitutions malgaches appliquent son idée.'],
      reponses: ['Faire les lois (législatif), les exécuter (exécutif), juger (judiciaire).',
        'L’abus de pouvoir : « tout homme qui a du pouvoir est porté à en abuser » — un seul détenteur des trois pouvoirs serait tout-puissant.',
        'Les quatre constitutions malgaches séparent exécutif, législatif et judiciaire : chaque pouvoir arrête l’autre, comme le voulait Montesquieu.']
    },
    reperes: {
      dates: [['1748', 'Montesquieu publie De l’esprit des lois']],
      persos: [['Montesquieu', 'philosophe français, père de la séparation des pouvoirs']],
      mots: [['Pouvoir exécutif', 'chef de l’État + gouvernement : applique les lois'],
        ['Pouvoir législatif', 'députés + sénateurs : vote les lois'],
        ['Pouvoir judiciaire', 'tribunaux et hautes cours : fait respecter les lois'],
        ['HCC / HCJ', 'gardienne de la constitution / juge des plus hauts responsables']]
    },
    idee: {
      faux: 'C’est le président qui fait les lois.',
      vrai: 'Non : il les propose et les applique, mais c’est le Parlement — députés et sénateurs — qui les vote. Chaque pouvoir reste dans son couloir !'
    },
    synthese: 'trois pouvoirs : exécutif (applique), législatif (vote), judiciaire (juge) ; 1ʳᵉ Rép. : exécutif concentré ; 2ᵉ : C.S.R. ; 3ᵉ : exécutif à deux têtes + HCC ; 4ᵉ : HCC et HCJ ; principe : la séparation protège le citoyen.',
    saistu: 'L’idée de séparer les trois pouvoirs a été défendue au XVIIIᵉ siècle par le philosophe français Montesquieu dans « De l’esprit des lois » : « pour qu’on ne puisse abuser du pouvoir, il faut que le pouvoir arrête le pouvoir ». Trois siècles plus tard, presque toutes les constitutions du monde — dont les quatre constitutions malgaches — reposent sur son idée.',
    exos: ['Les trois pouvoirs. a) Qui compose le pouvoir exécutif ? b) Qui compose le pouvoir législatif ? d) Que fait le pouvoir judiciaire ? e) Pourquoi les sépare-t-on ?',
      'Chaque République. a) Quelle particularité de l’exécutif sous la Première République ? b) Quel organe original sous la Deuxième ? d) Que gardent la HCC ? e) Qu’ajoute la Quatrième République avec la HCJ ?',
      'Appliquer. Une nouvelle loi sur la protection des forêts est adoptée. a) Qui l’a votée ? b) Qui la met en œuvre ? d) Qui juge un contrevenant ? e) Relève une continuité institutionnelle entre la Troisième et la Quatrième République.'],
    corr: ['a) le chef de l’État et le gouvernement ; b) les députés et les sénateurs ; d) il fait respecter les lois en jugeant ; e) pour qu’aucun organe ne concentre tous les pouvoirs et n’écrase le citoyen.',
      'a) le chef de l’État est aussi chef du gouvernement ; b) le Conseil Suprême de la Révolution (C.S.R.) ; d) la constitution — la HCC vérifie que les lois la respectent ; e) une haute cour chargée de juger les plus hauts responsables de l’État.',
      'a) le Parlement : députés et sénateurs ; b) le gouvernement (ministère concerné) ; d) les tribunaux ; e) l’exécutif à deux têtes, le Parlement bicaméral et la HCC existent dans les deux.'],
    fig: 'u2f6'
  },
  {
    t: 'Les politiques et principes de base des Républiques', comp: 'Madagascar depuis l’indépendance', theme: 'Les politiques de l’État à travers les Républiques',
    goal: 'mettre en évidence les principes de base de chaque République et les comparer',
    mat: 'Tableau comparatif, textes et articles relatifs aux quatre Républiques, frise',
    revQ: 'Cite les trois pouvoirs et leur mission.',
    revRA: 'Exécutif : appliquer les lois ; législatif : les voter ; judiciaire : les faire respecter.',
    situation: 'Quatre Républiques, quatre caps : l’une regarde vers la France, l’autre vers la révolution socialiste, la troisième vers le marché mondial, la quatrième vers le développement durable. Comme un capitaine change de route, l’État malgache a plusieurs fois changé de direction. Comparons les journaux de bord !',
    recit: [
      'Première République (##1958-1972##) : jeune État, Madagascar reste étroitement lié à la **communauté française** — coopérants, monnaie, commerce, armée. C’est cette **dépendance** que contestera le mouvement de 1972. Deuxième République (##1975-1993##) : cap inverse ! Le **boky mena** nationalise les grands secteurs, la **SINPA** organise la collecte des produits agricoles, les collectivités décentralisées démocratisent l’administration, la **malgachisation** transforme l’école.',
      'Troisième République (##1993-2010##) : nouveau renversement — la **démocratie** et la **libéralisation** rouvrent l’économie ; le pays s’intègre à la **mondialisation**, applique les **ajustements structurels** demandés par les bailleurs de fonds et promeut le secteur privé. Quatrième République (depuis ##2010##) : l’État affiche un **développement durable** — croissance, mais sans sacrifier les forêts, les sols et les générations futures.',
      'La leçon de l’historien : ces principes ne tombent pas du ciel ; chacun répond aux difficultés du cap précédent. La dépendance appelle la révolution ; les difficultés du socialisme appellent la libéralisation ; les excès de l’exploitation appellent le développement durable. Comprendre l’enchaînement, c’est comprendre soixante ans d’histoire.'
    ],
    doc: {
      titre: 'Un grand-père raconte ses quatre Républiques',
      source: 'témoignage recueilli auprès d’un ancien fonctionnaire — texte reconstitué',
      texte: 'Jeune homme, je travaillais avec des coopérants français : tout venait de France, jusqu’aux manuels de l’école. Sous la Deuxième République, j’ai fait la queue devant les magasins de la SINPA et mes enfants ont étudié en malgache. Sous la Troisième, les boutiques privées ont fleuri et l’on parlait de marché mondial. Aujourd’hui, mes petits-enfants me parlent de protéger la forêt pour leurs propres enfants. Quatre Républiques : j’ai l’impression d’avoir vécu quatre pays !',
      questions: ['Associe chaque souvenir du témoin à une République et à son principe de base.',
        'À quelle famille de sources ce document appartient-il ? Quelle est sa limite ?',
        'Que signifie la dernière phrase : « j’ai l’impression d’avoir vécu quatre pays » ?'],
      reponses: ['Coopérants et manuels français : 1ʳᵉ (dépendance envers la communauté française) ; SINPA et école en malgache : 2ᵉ (socialisme du boky mena) ; boutiques privées et marché mondial : 3ᵉ (libéralisation) ; protection de la forêt : 4ᵉ (développement durable).',
        'Une source orale (témoignage), reconstituée : la mémoire déforme et simplifie — il faut recouper avec archives et journaux.',
        'Que chaque République a tellement changé la vie quotidienne que le pays semblait différent à chaque fois : le principe de base se lit jusque dans la vie des familles.']
    },
    reperes: {
      mots: [['1ʳᵉ République', 'dépendance envers la communauté française'],
        ['2ᵉ République', 'révolution socialiste : boky mena, SINPA, malgachisation'],
        ['3ᵉ République', 'démocratie, libéralisation, mondialisation, ajustements structurels'],
        ['4ᵉ République', 'développement durable'],
        ['Ajustements structurels', 'réformes économiques demandées par les bailleurs de fonds']]
    },
    idee: {
      faux: 'La malgachisation de l’école date de la Troisième République.',
      vrai: 'Non : c’est une réalisation de la Deuxième République, dans le cadre du boky mena. Toujours accrocher chaque principe à sa République et à ses dates !'
    },
    synthese: '1ʳᵉ : dépendance envers la communauté française ; 2ᵉ : socialisme du boky mena (SINPA, décentralisation, malgachisation) ; 3ᵉ : démocratie, libéralisation, mondialisation, ajustements structurels ; 4ᵉ : développement durable — chaque cap répond au précédent.',
    saistu: 'SINPA signifie « Sociétés d’Intérêt National des Produits Agricoles » : dans les années 1970, ses dépôts recevaient le riz collecté dans tout le pays avant de le redistribuer. Les anciens se souviennent encore des files d’attente devant ses magasins — un simple sigle peut contenir toute une époque de la vie quotidienne !',
    exos: ['Associer. Relie chaque principe à sa République : a) développement durable ; b) révolution socialiste du boky mena ; d) dépendance envers la communauté française ; e) libéralisation et mondialisation.',
      'Réalisations. a) Cite deux réalisations de la Deuxième République. b) Que sont les ajustements structurels ? d) Que promeut la Troisième République dans l’économie ? e) Que vise le développement durable de la Quatrième ?',
      'Comprendre l’enchaînement. a) Quel principe de la Première République le mouvement de 1972 conteste-t-il ? b) À quelles difficultés la libéralisation de la Troisième répond-elle ? d) Pourquoi le développement durable répond-il aux excès de l’exploitation des ressources ? e) Explique la phrase : « chaque cap répond au précédent ».'],
    corr: ['a) Quatrième ; b) Deuxième ; d) Première ; e) Troisième.',
      'a) la SINPA et la malgachisation (aussi : décentralisation) ; b) des réformes économiques demandées par les bailleurs pour rééquilibrer les finances de l’État ; d) le secteur privé ; e) développer sans épuiser les ressources, en pensant aux générations futures.',
      'a) la dépendance politique et économique envers la communauté française ; b) aux difficultés économiques de la fin de la Deuxième République ; d) parce qu’il impose de protéger forêts, sols et richesses pour qu’elles durent ; e) chaque République choisit son orientation en réaction aux problèmes laissés par la précédente.'],
    fig: 'u2f7'
  },
  {
    t: 'Le changement fréquent de dirigeants : facteurs et impacts', comp: 'Madagascar depuis l’indépendance', theme: 'Les facteurs et l’impact du changement fréquent de dirigeants',
    goal: 'analyser les facteurs du changement fréquent de dirigeants et en déduire les conséquences',
    mat: 'Textes et articles, film documentaire sur une crise (1972, 1991, 2002, 2009), tableau',
    revQ: 'Associe : boky mena, développement durable, communauté française, libéralisation — à leur République.',
    revRA: '2ᵉ, 4ᵉ, 1ʳᵉ, 3ᵉ République.',
    situation: '1972, 1991, 2002, 2009 : presque une crise par décennie, et à chaque fois le pays retient son souffle — écoles fermées, marchés ralentis, familles autour de la radio. Pourquoi ces secousses reviennent-elles ? Et que coûtent-elles réellement au pays ? L’historien ne juge pas : il analyse les causes et mesure les conséquences.',
    recit: [
      'Côté **facteurs**, tout commence souvent par l’écart entre promesses et réalités : le **Programme Général de l’État** n’est pas réalisé, le développement reste mitigé, le quotidien du peuple ne change pas. S’y ajoutent l’aggravation de la **corruption**, qui ronge la confiance, l’**instabilité politique** entretenue par les rivalités, et l’influence des tendances internationales — les vagues de démocratisation ou de contestation qui traversent le monde touchent aussi la Grande Île. Résultat : des **crises cycliques** — ##1972##, ##1991##, ##2002##, ##2009## — presque une par décennie.',
      'Côté **impacts**, chaque rupture casse la **continuité de l’État** : les projets s’arrêtent, les administrations changent de cap. L’économie plonge, le **chômage** se développe ; la **pauvreté** et l’**insécurité** s’accentuent, et le fossé entre riches et pauvres s’élargit. Les partenaires et **bailleurs de fonds** perdent confiance et suspendent leurs aides ; des infrastructures sont détruites — et les mouvements populaires ont coûté des vies humaines.',
      'La leçon que le programme nous confie : l’historien ne juge pas les acteurs, il démonte le mécanisme. Comprendre ces engrenages — causes en amont, conséquences en aval — c’est se donner les moyens de les éviter, par l’**union nationale** et la responsabilité citoyenne. La stabilité est le premier capital d’une nation.'
    ],
    doc: {
      titre: 'Une ville à l’arrêt',
      source: 'article de presse, 2002 — texte reconstitué',
      texte: 'Depuis des semaines, les barrages dressés sur les routes nationales coupent la capitale du reste du pays. Le carburant manque, les prix des denrées s’envolent au marché, les usines de la zone franche tournent au ralenti et des milliers d’ouvriers sont au chômage technique. Plusieurs bailleurs de fonds annoncent la suspension de leurs programmes en attendant la fin de la crise.',
      questions: ['Quels impacts de la crise ce document décrit-il ? Classe-les par domaine.',
        'Quel acteur extérieur réagit, et comment ?',
        'Ce document décrit des conséquences : quels facteurs, vus dans la leçon, restent invisibles ici ?'],
      reponses: ['Économiques : carburant rare, prix en hausse, usines au ralenti, chômage ; politiques : pays coupé en deux, État paralysé ; sociaux : vie quotidienne des familles frappée.',
        'Les bailleurs de fonds : ils suspendent leurs programmes — la perte de confiance des partenaires.',
        'Les causes en amont : programme de l’État non réalisé, corruption, instabilité politique, influences internationales — le document montre l’aval, la leçon explique l’amont.']
    },
    reperes: {
      dates: [['1972, 1991, 2002, 2009', 'les quatre grandes crises — presque une par décennie']],
      mots: [['Facteur', 'cause qui provoque ou prépare une crise'],
        ['Impact', 'conséquence subie après la crise'],
        ['Crises cycliques', 'crises qui reviennent à intervalles réguliers'],
        ['Bailleurs de fonds', 'partenaires qui financent des projets de développement']]
    },
    idee: {
      faux: 'C’est le chômage qui a provoqué les crises.',
      vrai: 'Non — c’est l’inverse dans l’analyse du programme : le chômage qui se développe est un IMPACT des crises ; les facteurs sont en amont (programme non réalisé, corruption, instabilité…). Ne confonds jamais cause et conséquence.'
    },
    synthese: 'facteurs : programme non réalisé, développement mitigé, corruption, crises cycliques, instabilité, influences internationales ; impacts : non-continuité de l’État, crise économique, chômage, pauvreté, insécurité, fossé social, défiance des bailleurs, infrastructures détruites, pertes humaines.',
    saistu: 'Les économistes ont calculé que chaque grande crise fait reculer le pays de plusieurs années de croissance : usines fermées, touristes partis, chantiers arrêtés mettent souvent une décennie à revenir. C’est pourquoi l’on dit que la stabilité est le premier capital d’une nation — un capital invisible, mais plus précieux que l’or.',
    exos: ['Facteurs ou impacts ? Classe : a) aggravation de la corruption ; b) perte de confiance des bailleurs de fonds ; d) non-réalisation du Programme Général de l’État ; e) élargissement du fossé entre riches et pauvres.',
      'Les crises. a) Cite les quatre grandes années de crise depuis 1972. b) Que signifie « crises cycliques » ? d) Quel facteur extérieur peut influencer une crise malgache ? e) Quel impact touche directement les écoles et les hôpitaux ?',
      'Analyse et projet. a) Classe ces impacts par domaine (politique, économique, social) : non-continuité de l’État, chômage, insécurité. b) Explique pourquoi la défiance des bailleurs aggrave la crise. d) Propose deux actions de citoyens pour préserver l’unité nationale. e) Pourquoi l’historien étudie-t-il les crises sans en juger les acteurs ?'],
    corr: ['a) facteur ; b) impact ; d) facteur ; e) impact.',
      'a) 1972, 1991, 2002, 2009 ; b) des crises qui reviennent régulièrement, presque chaque décennie ; d) l’influence des tendances et mouvements politiques internationaux ; e) la destruction d’infrastructures et l’arrêt des financements.',
      'a) politique : non-continuité de l’État ; économique : chômage ; social : insécurité ; b) parce que les aides suspendues arrêtent les projets, ce qui aggrave chômage et pauvreté ; d) par exemple dialoguer au lieu de s’affronter, vérifier les informations avant de les diffuser, respecter le verdict des urnes ; e) parce que sa mission est de comprendre les causes et les conséquences pour aider à améliorer le futur.'],
    fig: 'u2f8'
  }
];

const unit2 = {
  no: 2, roman: 'II', name: 'Madagascar depuis l’indépendance',
  rag: 'spécifier les Républiques qui se succèdent à Madagascar depuis 1960, décrire leurs institutions et analyser les facteurs et impacts du changement fréquent de dirigeants.',
  valeurs: 'union nationale et patriotisme',
  sessions: S,
  revision: {
    table: [
      ['Première République', 'Repoblika Malagasy, 1958-1972 ; Tsiranana ; indépendance le 26 juin 1960', 'Caractériser la Première République'],
      ['Transition 1972-1975', 'Quatre chefs d’État : Ramanantsoa, Ratsimandrava, Andriamahazo, Ratsiraka', 'Ordonner les dirigeants de la transition'],
      ['Deuxième République', 'Repoblika Demokratika Malagasy, 1975-1993 ; boky mena ; Ratsiraka', 'Caractériser la Deuxième République'],
      ['Troisième et Quatrième', '1993-2010 en deux périodes ; depuis 2010, devise Fitiavana-Tanindrazana-Fandrosoana', 'Distinguer les deux dernières Républiques'],
      ['Institutions', 'Exécutif, législatif, judiciaire ; CSR, HCC, HCJ selon les Républiques', 'Décrire et comparer les institutions'],
      ['Crises', 'Facteurs (corruption, programme non réalisé…) et impacts (chômage, pauvreté…)', 'Analyser causes et conséquences des crises']
    ],
    questions: [
      'Dresse la carte d’identité de la Première République (nom, dates, devise, président).',
      'Remets dans l’ordre avec leurs dates : Andriamahazo, Ratsiraka, Ramanantsoa, Ratsimandrava.',
      'Compare les devises des quatre Républiques : qu’est-ce qui change, qu’est-ce qui reste ?',
      'Nomme les trois pouvoirs, leur composition et leur mission.',
      'Cite trois facteurs et trois impacts du changement fréquent de dirigeants.'
    ],
    answers: [
      'Repoblika Malagasy ; proclamée le 14-10-1958, indépendance le 26-6-1960, fin en 1972 ; devise Tanindrazana-Fahafahana-Fandrosoana ; président Philibert Tsiranana.',
      'Ramanantsoa (oct. 1972 - fév. 1975), Ratsimandrava (5-11 fév. 1975), Andriamahazo (fév.-juin 1975), Ratsiraka (juin-déc. 1975).',
      'Le premier mot change de sens : Tanindrazana (1ʳᵉ, 3ᵉ) puis Fitiavana (4ᵉ) ; la 2ᵉ ajoute Tolom-piavotana, la 3ᵉ Fahamarinana ; drapeau et hymne ne changent jamais.',
      'Exécutif : chef de l’État + gouvernement, applique les lois ; législatif : députés + sénateurs, vote les lois ; judiciaire : tribunaux, HCC, HCJ, fait respecter les lois.',
      'Facteurs : programme non réalisé, corruption aggravée, instabilité politique ; impacts : crise économique et chômage, pauvreté et insécurité, perte de confiance des bailleurs.'
    ]
  },
  exam: {
    exos: [
      'Questions de cours. a) Quand et comment la Quatrième République est-elle née ? b) Donne le nom officiel et la devise de la Deuxième République. d) Qui est le premier président de la Troisième République, et quand ? e) Quels emblèmes nationaux restent identiques depuis 1958 ?',
      'Frise chronologique. a) Trace une frise de 1958 à 2019 et places-y les quatre Républiques. b) Situe les crises de 1972, 1991, 2002 et 2009. d) Calcule la durée de chaque République (en prenant 2019 pour borne de la 4ᵉ). e) Quelle décennie ne connaît pas de grande crise ?',
      'Les institutions. a) Nomme les trois pouvoirs et la mission de chacun. b) Sous quelle République apparaît le Conseil Suprême de la Révolution ? d) Quel est le rôle de la HCC ? e) Pourquoi la séparation des pouvoirs protège-t-elle le citoyen ?',
      'Étude de document. Un article de 1991 rapporte d’immenses manifestations pacifiques dans la capitale. a) De quel type de source s’agit-il ? b) Quelle République est alors contestée, et depuis quand existait-elle ? d) Quel changement cette crise prépare-t-elle ? e) Quels contrôles appliquer avant d’utiliser cet article ?',
      'Réflexion organisée. « Presque une crise par décennie. » a) Cite trois facteurs qui expliquent ce rythme. b) Classe trois impacts par domaine : politique, économique, social. d) Explique pourquoi la non-continuité de l’État retarde le développement. e) Propose deux engagements citoyens au service de l’union nationale.'
    ],
    corr: [
      'a) du référendum constitutionnel du 17 novembre 2010 ; b) Repoblika Demokratika Malagasy ; Tanindrazana - Tolom-piavotana - Fahafahana ; d) Albert Zafy, en mars 1993 ; e) le drapeau blanc-rouge-vert et l’hymne Ry tanindrazanay malala ô !. Un point par item.',
      'a) 1ʳᵉ : 1958-1972 ; transition 1972-1975 ; 2ᵉ : 1975-1993 ; 3ᵉ : 1993-2010 ; 4ᵉ : depuis 2010 ; b) crises placées sur la frise ; d) environ 14 ans, 18 ans, 17 ans, 9 ans (2010-2019) ; e) la décennie 1980 (entre 1972-1991, pas de changement de République). Un point par item, tracé soigné compris.',
      'a) exécutif : appliquer ; législatif : voter ; judiciaire : faire respecter les lois ; b) la Deuxième République ; d) vérifier que les lois respectent la constitution ; e) parce qu’aucun organe ne concentre tous les pouvoirs : le pouvoir arrête le pouvoir. Un point par item.',
      'a) une source écrite (article de presse) ; b) la Deuxième République, née le 30 décembre 1975 ; d) le passage à la Troisième République (constitution de 1992, élection de 1993) ; e) vérifier l’auteur, la date, le journal, et croiser avec d’autres sources (photos, témoignages). Un point par item.',
      'a) programme de l’État non réalisé, corruption aggravée, instabilité politique (ou influences internationales) ; b) politique : non-continuité de l’État ; économique : chômage, défiance des bailleurs ; social : pauvreté, insécurité ; d) parce que chaque rupture arrête les projets en cours et fait repartir l’administration de zéro ; e) par exemple : dialoguer et respecter les urnes ; vérifier les informations avant de les partager. Un point par item.'
    ]
  }
};

(async () => {
  const bufs = await L.render(figs);
  await buildUnit(unit2, bufs);
})();
