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
    def: 'La Première République, nommée Repoblika Malagasy, est proclamée le 14 octobre 1958 ; Madagascar accède à l’indépendance le 26 juin 1960. Sa devise est « Tanindrazana - Fahafahana - Fandrosoana », son drapeau est blanc, rouge et vert, son hymne est « Ry tanindrazanay malala ô ! », et son président est Philibert Tsiranana (14 octobre 1958 - 11 octobre 1972).',
    autrement: 'c’est la République de la naissance : le pays retrouve son indépendance et se donne ses emblèmes — drapeau, hymne et devise — que nous portons encore.',
    concept: 'Caractériser une République, c’est dresser sa carte d’identité : nom officiel, dates, devise, drapeau, hymne, dirigeants. Pour la Première : le nom Repoblika Malagasy dit le retour de la souveraineté ; la devise « Tanindrazana - Fahafahana - Fandrosoana » (patrie, liberté, progrès) annonce le programme ; le drapeau unit le blanc et le rouge — couleurs des anciens royaumes — au vert du peuple des côtes ; l’hymne, « Ry tanindrazanay malala ô ! », chante la terre des ancêtres. Philibert Tsiranana préside durant toute la période : quatorze années, de 1958 à 1972. Attention aux deux dates de naissance : le 14 octobre 1958, la République est proclamée au sein de la communauté française ; le 26 juin 1960, l’indépendance est pleinement retrouvée — c’est elle que nous fêtons. La Première République s’achève en 1972, lorsque le mouvement populaire de mai pousse le président à remettre les pleins pouvoirs.',
    synthese: 'Repoblika Malagasy : proclamée le 14-10-1958, indépendance le 26-6-1960 ; devise Tanindrazana-Fahafahana-Fandrosoana ; drapeau blanc-rouge-vert ; hymne Ry tanindrazanay malala ô ! ; président Philibert Tsiranana jusqu’en 1972.',
    method: ['Dresser la carte d’identité : nom, dates, devise, drapeau, hymne, président.', 'Distinguer les deux dates fondatrices : proclamation (1958) et indépendance (1960).', 'Placer la période 1958-1972 sur la frise et noter l’événement de fin (mai 1972).'],
    exemple: 'Fiche express : Repoblika Malagasy, 1958-1972, devise Tanindrazana-Fahafahana-Fandrosoana, président Tsiranana — indépendance fêtée chaque 26 juin.',
    erreur: 'Confondre le 14 octobre 1958 et le 26 juin 1960 : en 1958 la République est proclamée mais reste liée à la communauté française ; l’indépendance complète date de 1960 — c’est elle que célèbre la fête nationale.',
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
    def: 'La transition de 1972 à 1975 est la période qui sépare la Première et la Deuxième République. Quatre chefs d’État se succèdent : le général Gabriel Ramanantsoa (11 octobre 1972 - 5 février 1975), le colonel Richard Ratsimandrava (5 - 11 février 1975), le général Gilles Andriamahazo (11 février - 15 juin 1975), puis Didier Ignace Ratsiraka (15 juin - 30 décembre 1975).',
    autrement: 'après la tempête de 1972, le pays cherche un nouveau capitaine : quatre dirigeants prennent la barre en trois ans, jusqu’à la naissance de la Deuxième République fin 1975.',
    concept: 'Pourquoi cette valse des dirigeants ? Le mouvement de mai 1972 — la « rotaka » — naît du malaise étudiant et social : l’université, la langue d’enseignement, la vie chère, la dépendance envers l’ancienne puissance coloniale. Le président Tsiranana remet les pleins pouvoirs au général Ramanantsoa le 11 octobre 1972 : l’armée dirige la transition. Mais les tensions persistent : le 5 février 1975, Ramanantsoa transmet le pouvoir au colonel Ratsimandrava… assassiné six jours plus tard, le 11 février 1975 — le choc le plus brutal de la période. Un directoire militaire conduit par le général Andriamahazo assure l’intérim, puis le 15 juin 1975, le capitaine de frégate Didier Ratsiraka est porté à la tête de l’État. Le 30 décembre 1975, après référendum, il proclame la Deuxième République. Retenir l’ordre R-R-A-R (Ramanantsoa, Ratsimandrava, Andriamahazo, Ratsiraka) et les dates charnières : c’est la clef de toute la période.',
    synthese: 'mai 1972 : fin de la Première République ; transition 1972-1975 ; ordre des quatre chefs d’État : Ramanantsoa, Ratsimandrava (6 jours), Andriamahazo, Ratsiraka ; 30 décembre 1975 : naissance de la Deuxième République.',
    method: ['Identifier l’événement déclencheur : le mouvement populaire de mai 1972.', 'Ordonner les quatre chefs d’État avec leurs dates sur la frise.', 'Relever l’événement de clôture : le référendum et la proclamation du 30 décembre 1975.'],
    exemple: 'Frise de la transition : 11-10-1972 Ramanantsoa → 5-2-1975 Ratsimandrava → 11-2-1975 Andriamahazo → 15-6-1975 Ratsiraka → 30-12-1975 Deuxième République.',
    erreur: 'Croire que la transition a duré longtemps : de l’arrivée de Ramanantsoa (octobre 1972) à la proclamation de la Deuxième République (décembre 1975), trois ans seulement s’écoulent — mais quatre chefs d’État passent. Vitesse ne veut pas dire durée !',
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
    def: 'La Deuxième République, nommée Repoblika Demokratika Malagasy, naît le 30 décembre 1975. Sa devise est « Tanindrazana - Tolom-piavotana - Fahafahana » ; son texte fondateur est la charte de la révolution socialiste malgache, le « boky mena » ; son chef d’État est Didier Ignace Ratsiraka, du 30 décembre 1975 à août 1991. Le drapeau et l’hymne restent ceux de 1958.',
    autrement: 'c’est la République du « livre rouge » : un projet socialiste pour tout le pays, conduit pendant dix-huit ans par un même chef d’État.',
    concept: 'La carte d’identité d’abord : nouveau nom (Repoblika Demokratika Malagasy), nouvelle devise où apparaît « Tolom-piavotana », le combat libérateur — mais même drapeau blanc-rouge-vert et même hymne : les emblèmes de 1958 traversent les Républiques, et c’est un signe d’unité nationale. Le projet ensuite : le boky mena (« livre rouge ») trace la voie d’une révolution socialiste malgache — l’État dirige l’économie, les coopératives socialistes comme la SINPA organisent la collecte et la distribution des produits, les collectivités décentralisées rapprochent l’administration du peuple, et la malgachisation fait de la langue malgache la langue de l’enseignement. Le temps long enfin : Didier Ratsiraka dirige de décembre 1975 à août 1991 — quinze ans et demi, la plus longue présidence de notre histoire. À la fin des années 1980, les difficultés économiques s’accumulent ; en 1991, d’immenses manifestations pacifiques réclament le changement : la Deuxième République s’efface, la transition vers la Troisième commence.',
    synthese: 'Repoblika Demokratika Malagasy, 30-12-1975 ; devise Tanindrazana-Tolom-piavotana-Fahafahana ; boky mena = charte de la révolution socialiste ; SINPA, décentralisation, malgachisation ; Ratsiraka chef d’État 1975-1991 ; fin : manifestations de 1991.',
    method: ['Dresser la carte d’identité : nom, date, devise, texte fondateur, chef d’État.', 'Relier chaque réalisation (SINPA, malgachisation, décentralisation) au projet du boky mena.', 'Encadrer la période sur la frise : 30-12-1975 → 1991-1993.'],
    exemple: 'Fiche express : Repoblika Demokratika Malagasy, 1975-1993, devise avec Tolom-piavotana, boky mena, Ratsiraka — fin par les manifestations de 1991.',
    erreur: 'Croire que chaque République change tout : le drapeau blanc-rouge-vert et l’hymne « Ry tanindrazanay malala ô ! » n’ont JAMAIS changé depuis 1958. Ce qui change : le nom, la devise, la constitution et la politique.',
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
    def: 'La Troisième République, nommée Repoblikan’i Madagasikara, couvre les années 1993-2010 et se divise en deux périodes. Première période : Albert Zafy (mars 1993 - septembre 1996), Norbert Lala Ratsirahonana (septembre 1996 - janvier 1997), Didier Ignace Ratsiraka (9 février 1997 - 5 juillet 2002). Deuxième période : Marc Ravalomanana (22 février 2002 - 17 mars 2009), suivi du transfert du pouvoir et de la transition de 2009 à 2013.',
    autrement: 'c’est la République de la démocratie retrouvée : élections ouvertes, alternances… mais aussi deux grandes crises, en 2002 et en 2009.',
    concept: 'Première période (1993-2002). Albert Zafy, élu en 1993, gouverne sous la devise « Tanindrazana - Fahafahana - Fahamarinana » — la vérité remplace le progrès. Empêché par l’Assemblée en 1996, il laisse la place au président par intérim Norbert Lala Ratsirahonana ; puis Didier Ratsiraka, de retour, gouverne de février 1997 à juillet 2002. Deuxième période (2002-2010). L’élection de décembre 2001 débouche sur la grande crise de 2002 ; Marc Ravalomanana s’installe le 22 février 2002, la devise redevient « Tanindrazana - Fahafahana - Fandrosoana ». Réélu en 2006, il démissionne le 17 mars 2009 au terme d’une nouvelle crise : le pouvoir, remis au vice-amiral Hippolyte Ramaroson, est transféré le jour même à Andry Nirina Rajoelina, qui conduit la transition de 2009 à 2013. Sur toute la période, la politique suit un cap nouveau : démocratie et libéralisation, intégration à la mondialisation, ajustements structurels, promotion du secteur privé. Cinq dirigeants, deux crises, un cap : voilà la Troisième République.',
    synthese: 'Repoblikan’i Madagasikara, 1993-2010, deux périodes ; 1ʳᵉ : Zafy, Ratsirahonana, Ratsiraka ; 2ᵉ : Ravalomanana puis transition 2009-2013 ; politiques : démocratie, libéralisation, mondialisation, ajustements structurels.',
    method: ['Découper la République en deux périodes et dater chacune.', 'Ordonner les cinq dirigeants avec leurs années : Zafy, Ratsirahonana, Ratsiraka, Ravalomanana, transition.', 'Relever les deux crises (2002, 2009) et le cap politique commun (démocratie, libéralisation).'],
    exemple: 'Frise : 1993 Zafy → 1996 Ratsirahonana → 1997 Ratsiraka → 2002 Ravalomanana → 2009 transfert et transition → 2010 Quatrième République.',
    erreur: 'Mélanger les deux retours : Ratsiraka de la Deuxième République (1975-1991) et Ratsiraka de la Troisième (1997-2002) sont le même homme à deux époques différentes — sur la frise, deux segments bien distincts !',
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
    def: 'La Quatrième République, nommée Repoblikan’i Madagasikara, naît du référendum constitutionnel du 17 novembre 2010. Sa devise est « Fitiavana - Tanindrazana - Fandrosoana ». Après la transition de 2009-2013, ses présidents élus sont Hery Rajaonarimampianina (janvier 2014 - septembre 2018), puis Andry Nirina Rajoelina, depuis janvier 2019.',
    autrement: 'c’est notre République actuelle : née en 2010, dirigée par des présidents élus depuis 2014, et guidée par une devise qui commence par l’amour — Fitiavana.',
    concept: 'La carte d’identité : même nom que la Troisième (Repoblikan’i Madagasikara), même drapeau et même hymne que depuis 1958 — mais une constitution nouvelle, approuvée par référendum le 17 novembre 2010, et une devise nouvelle : « Fitiavana - Tanindrazana - Fandrosoana » (amour, patrie, progrès). La mise en route fut progressive : la transition conduite par Andry Rajoelina s’étend de 2009 à 2013 ; l’élection de fin 2013 porte Hery Rajaonarimampianina à la présidence en janvier 2014 ; en janvier 2019, Andry Rajoelina lui succède comme président élu, puis est réélu. Le cap affiché : une politique générale de l’État fondée sur le développement durable — développer le pays sans épuiser ses ressources, en pensant aux générations futures. Étudier la Quatrième République a un charme particulier : ses sources sont partout autour de nous — journaux, radios, réseaux, témoins directs — et l’historien que tu deviens peut les collecter… en appliquant, bien sûr, la démarche historique !',
    synthese: 'née du référendum du 17-11-2010 ; devise Fitiavana-Tanindrazana-Fandrosoana ; transition 2009-2013 ; présidents élus : Rajaonarimampianina (2014-2018), Rajoelina (depuis 2019) ; cap : développement durable.',
    method: ['Dater la naissance : référendum du 17 novembre 2010.', 'Distinguer transition (2009-2013) et présidents élus (2014, 2019).', 'Relever la devise et le cap politique (développement durable).'],
    exemple: 'Frise : 2009-2013 transition → janv. 2014 Rajaonarimampianina → sept. 2018 fin de mandat → janv. 2019 Rajoelina.',
    erreur: 'Confondre les deux rôles d’Andry Rajoelina : chef de la transition (2009-2013, non élu) puis président élu (depuis janvier 2019). Entre les deux : la présidence élue de Hery Rajaonarimampianina (2014-2018).',
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
    def: 'Les institutions d’une République sont les organes qui exercent les pouvoirs de l’État. Le pouvoir exécutif (le chef de l’État et le gouvernement) applique les lois ; le pouvoir législatif (les députés et les sénateurs) vote les lois ; le pouvoir judiciaire (les tribunaux et les hautes cours) les fait respecter.',
    autrement: 'l’État marche sur trois jambes : l’une décide et applique, l’autre écrit les lois, la troisième juge — et aucune ne doit écraser les autres.',
    concept: 'Le principe d’abord : la séparation des pouvoirs protège le citoyen — celui qui applique la loi ne doit être ni celui qui l’écrit, ni celui qui juge. Chaque République l’a organisée à sa manière. Première République : le chef de l’État est aussi chef du gouvernement — l’exécutif est concentré. Deuxième République : un organe original apparaît, le Conseil Suprême de la Révolution (C.S.R.), qui oriente l’État selon le boky mena. Troisième République : le modèle complet s’installe — exécutif à deux têtes (chef de l’État et chef du gouvernement), législatif avec députés et sénateurs, judiciaire couronné par la Haute Cour Constitutionnelle (HCC), gardienne de la constitution. Quatrième République : même architecture, renforcée par la Haute Cour de Justice (HCJ), chargée de juger les plus hauts responsables. Comparer les institutions, c’est le travail de l’historien : repérer ce qui continue (trois pouvoirs partout) et ce qui change (CSR hier, HCC et HCJ aujourd’hui) — la continuité et le changement, deux lunettes à porter ensemble.',
    synthese: 'trois pouvoirs : exécutif (applique), législatif (vote), judiciaire (juge) ; 1ʳᵉ Rép. : exécutif concentré ; 2ᵉ : C.S.R. ; 3ᵉ : exécutif à deux têtes + HCC ; 4ᵉ : HCC et HCJ ; principe : la séparation protège le citoyen.',
    method: ['Nommer les trois pouvoirs et la mission de chacun.', 'Pour chaque République, identifier l’organisation particulière (CSR, HCC, HCJ…).', 'Comparer : relever une continuité et un changement entre deux Républiques.'],
    exemple: 'Une loi scolaire : votée par les députés et sénateurs (législatif), appliquée par le ministère (exécutif), contrôlée par la HCC si elle est contestée (judiciaire).',
    erreur: 'Croire que le président « fait les lois » : il les propose et les applique, mais c’est le Parlement — députés et sénateurs — qui les vote. Chaque pouvoir reste dans son couloir !',
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
    def: 'Les principes de base d’une République sont les grandes orientations qui guident sa politique. Première République : dépendance politique et économique envers la communauté française. Deuxième : révolution socialiste du boky mena, coopératives (SINPA), décentralisation, malgachisation. Troisième : démocratie et libéralisation, mondialisation, ajustements structurels, promotion du secteur privé. Quatrième : politique générale fondée sur le développement durable.',
    autrement: 'chaque République a sa boussole : France, socialisme, marché mondial, développement durable — connaître la boussole, c’est comprendre toutes ses décisions.',
    concept: 'Première République (1958-1972) : jeune État, Madagascar reste étroitement lié à la communauté française — coopérants, monnaie, commerce, armée ; c’est cette dépendance que contestera le mouvement de 1972. Deuxième République (1975-1993) : cap inverse ! Le boky mena nationalise les grands secteurs, la SINPA organise la collecte des produits agricoles, les collectivités décentralisées démocratisent l’administration, la malgachisation transforme l’école. Troisième République (1993-2010) : nouveau renversement — la démocratie et la libéralisation rouvrent l’économie ; le pays s’intègre à la mondialisation, applique les ajustements structurels demandés par les bailleurs de fonds et promeut le secteur privé. Quatrième République (depuis 2010) : l’État affiche un développement durable — croissance, mais sans sacrifier les forêts, les sols et les générations futures. La leçon de l’historien : ces principes ne tombent pas du ciel ; chacun répond aux difficultés du cap précédent. Comprendre l’enchaînement, c’est comprendre soixante ans d’histoire.',
    synthese: '1ʳᵉ : dépendance envers la communauté française ; 2ᵉ : socialisme du boky mena (SINPA, décentralisation, malgachisation) ; 3ᵉ : démocratie, libéralisation, mondialisation, ajustements structurels ; 4ᵉ : développement durable — chaque cap répond au précédent.',
    method: ['Associer chaque République à son principe de base.', 'Citer pour chacune une ou deux réalisations concrètes.', 'Expliquer l’enchaînement : en quoi chaque cap répond-il aux difficultés du précédent ?'],
    exemple: 'Tableau express : 1ʳᵉ → communauté française ; 2ᵉ → boky mena et SINPA ; 3ᵉ → libéralisation et secteur privé ; 4ᵉ → développement durable.',
    erreur: 'Réciter les principes sans les relier aux Républiques : « la malgachisation sous la Troisième République » est une erreur classique — elle appartient à la Deuxième. Toujours accrocher le principe à sa République et à ses dates.',
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
    def: 'Les facteurs du changement fréquent de dirigeants sont les causes qui provoquent les crises : non-réalisation du Programme Général de l’État, développement mitigé qui n’impacte pas réellement le peuple, aggravation de la corruption, crises cycliques, instabilité politique et influence des mouvements politiques internationaux. Les impacts en sont les conséquences : non-continuité de l’État, crise économique, chômage, accentuation de la pauvreté et de l’insécurité, fossé entre riches et pauvres, perte de confiance des partenaires et des bailleurs de fonds, destruction d’infrastructures et pertes humaines.',
    autrement: 'quand les promesses ne se réalisent pas et que la corruption s’installe, la confiance se brise — et chaque rupture coûte au pays des années d’efforts.',
    concept: 'Côté facteurs : tout commence souvent par l’écart entre promesses et réalités — le Programme Général de l’État n’est pas réalisé, le développement reste mitigé, le quotidien du peuple ne change pas. S’y ajoutent l’aggravation de la corruption, qui ronge la confiance, l’instabilité politique entretenue par les rivalités, et l’influence des tendances internationales — les vagues de démocratisation ou de contestation qui traversent le monde touchent aussi la Grande Île. Résultat : des crises cycliques, presque une par décennie. Côté impacts : chaque rupture casse la continuité de l’État — les projets s’arrêtent, les administrations changent de cap ; l’économie plonge, le chômage se développe ; la pauvreté et l’insécurité s’accentuent et le fossé entre riches et pauvres s’élargit ; les partenaires et bailleurs de fonds perdent confiance et suspendent leurs aides ; des infrastructures sont détruites, et les mouvements populaires de 1972, 1991, 2002 et 2009 ont coûté des vies humaines. La leçon que le programme nous confie : comprendre ces mécanismes, c’est se donner les moyens de les éviter — par l’union nationale et la responsabilité citoyenne.',
    synthese: 'facteurs : programme non réalisé, développement mitigé, corruption, crises cycliques, instabilité, influences internationales ; impacts : non-continuité de l’État, crise économique, chômage, pauvreté, insécurité, fossé social, défiance des bailleurs, infrastructures détruites, pertes humaines.',
    method: ['Distinguer soigneusement facteurs (causes) et impacts (conséquences).', 'Classer les impacts par domaine : politique, économique, social.', 'Tirer la leçon : proposer des comportements qui préservent l’unité nationale.'],
    exemple: 'La perte de confiance des bailleurs de fonds est un impact économique : après une crise, des financements prévus pour des routes ou des écoles sont suspendus.',
    erreur: 'Confondre cause et conséquence : « le chômage a provoqué la crise »… Non : dans l’analyse du programme, le chômage qui se développe est un IMPACT des crises ; les facteurs sont en amont (programme non réalisé, corruption, instabilité…).',
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
