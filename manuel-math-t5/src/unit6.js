// UNITÉ 6 — TRAITEMENT DE DONNÉES (PE T5) : 6 séances + révision + examen format CEPE
const L = require('./figlib');
const { buildUnit } = require('./engine');
const { head, svg, txt, nline, dot, tableEl, box, arrow, seg, circle, poly, axes, PINK, PINK2, GREEN, GREENL, BLUE, BLUEL, OCRE } = L;

const figs = {};
// S1 — la démarche de l’enquête
figs.u6f1 = (() => { const { s, y } = head('La démarche de l’enquête', ['Quatre étapes : poser la question, prévoir une réponse, collecter, répondre.']);
  const top = y + 25;
  const steps = ['1. Question', '2. Hypothèse', '3. Collecte', '4. Réponse'];
  const sous = ['« quel fruit préféré ? »', '« je prédis la banane »', 'on interroge la classe', 'les données tranchent'];
  let b = '';
  steps.forEach((st, i) => {
    const X = 30 + i * 250;
    b += box(X, top, 200, 64, st, i % 2 ? '#FDE7EF' : GREENL, i % 2 ? PINK2 : GREEN, 24);
    b += txt(X + 100, top + 100, sous[i], 19, '#555', 'normal', 'middle');
    if (i < 3) b += arrow(X + 205, top + 32, X + 245, top + 32, BLUE, 4);
  });
  b += txt(500, top + 158, 'la réponse vient des DONNÉES collectées — jamais de l’avis d’une seule personne !', 21, PINK2, 'bold', 'middle');
  return svg(1050, top + 190, s + b); })();
// S2 — tableau des effectifs
figs.u6f2 = (() => { const { s, y } = head('Le tableau des effectifs', ['Les 24 réponses deviennent un tableau : un bâton par réponse, puis l’effectif.']);
  const top = y + 20;
  const data = [['fruit préféré', 'dénombrement', 'effectif'],
    ['mangue', 'IIII III', '8'], ['banane', 'IIII I', '6'], ['letchi', 'IIII II', '7'], ['ananas', 'III', '3']];
  let b = tableEl(130, top, [280, 320, 180], 54, data);
  b += txt(500, top + 5 * 54 + 42, 'total : 8 + 6 + 7 + 3 = 24 — la somme retombe sur le nombre d’interrogés', 20, GREEN, 'bold', 'middle');
  b += txt(500, top + 5 * 54 + 78, 'les bâtons se groupent par paquets de 5 pour se compter d’un coup d’œil', 20, PINK2, 'bold', 'middle');
  return svg(1000, top + 5 * 54 + 110, s + b); })();
// S3 — diagramme en barres + pictogramme
figs.u6f3 = (() => { const { s, y } = head('Le diagramme en barres et le pictogramme', ['Mêmes données, deux images : barres proportionnelles ou symboles avec légende.']);
  const top = y + 20; const base = top + 250;
  const eff = [['mangue', 8, PINK], ['banane', 6, GREENL], ['letchi', 7, BLUEL], ['ananas', 3, '#FFE3C2']];
  let b = axes(100, base, 580, 235);
  eff.forEach(([n, v, f], i) => {
    const X = 150 + i * 130, H = v * 25;
    b += poly([[X, base], [X + 85, base], [X + 85, base - H], [X, base - H]], f, BLUE, 3);
    b += txt(X + 42, base - H - 12, `${v}`, 23, PINK2, 'bold', 'middle');
    b += txt(X + 42, base + 32, n, 20, '#333', 'normal', 'middle');
  });
  b += txt(790, top + 30, 'pictogramme :', 22, BLUE, 'bold');
  b += txt(745, top + 75, 'mangue', 19, '#333');
  for (let k = 0; k < 4; k++) b += dot(870 + k * 36, top + 68, 13, PINK2);
  b += txt(745, top + 125, 'banane', 19, '#333');
  for (let k = 0; k < 3; k++) b += dot(870 + k * 36, top + 118, 13, GREEN);
  b += box(735, top + 155, 280, 46, 'légende : 1 rond = 2 élèves', '#FDE7EF', PINK2, 19);
  b += txt(525, base + 78, 'barres de même largeur, hauteur proportionnelle ; sans légende, pas de pictogramme !', 20, GREEN, 'bold', 'middle');
  return svg(1050, base + 108, s + b); })();
// S4 — interpréter
figs.u6f4 = (() => { const { s, y } = head('Interpréter : faire parler le diagramme', ['Lire une valeur, comparer, totaliser, conclure — quatre gestes dans l’ordre.']);
  const top = y + 20; const base = top + 215;
  const eff = [['mangue', 8, PINK], ['banane', 6, GREENL], ['letchi', 7, BLUEL], ['ananas', 3, '#FFE3C2']];
  let b = axes(70, base, 520, 205);
  eff.forEach(([n, v, f], i) => {
    const X = 110 + i * 120, H = v * 22;
    b += poly([[X, base], [X + 78, base], [X + 78, base - H], [X, base - H]], f, BLUE, 3);
    b += txt(X + 39, base - H - 10, `${v}`, 21, PINK2, 'bold', 'middle');
    b += txt(X + 39, base + 30, n, 18, '#333', 'normal', 'middle');
  });
  const lx = 640, lw = 380, lh = 50;
  b += box(lx, top + 5, lw, lh, 'lire : banane = 6 élèves', GREENL, GREEN, 20);
  b += box(lx, top + 65, lw, lh, 'comparer : 8 − 3 = 5 d’écart', BLUEL, BLUE, 20);
  b += box(lx, top + 125, lw, lh, 'totaliser : 8 + 6 + 7 + 3 = 24', '#FFE3C2', OCRE, 20);
  b += box(lx, top + 185, lw, lh, 'conclure : hypothèse « banane » fausse', '#FDE7EF', PINK2, 18);
  b += txt(525, base + 72, 'l’œil critique vérifie toujours : axe partant de zéro ? barres de même largeur ?', 20, PINK2, 'bold', 'middle');
  return svg(1050, base + 102, s + b); })();
// S5 — expérience aléatoire et dénombrement
figs.u6f5 = (() => { const { s, y } = head('L’expérience aléatoire et son tableau de dénombrement', ['Un dé lancé 30 fois : chaque lancer est imprévisible, mais tout s’enregistre.']);
  const top = y + 20;
  const data = [['face du dé', '1', '2', '3', '4', '5', '6'],
    ['effectif', '4', '6', '5', '7', '3', '5']];
  let b = tableEl(50, top, [240, 118, 118, 118, 118, 118, 118], 56, data);
  b += txt(500, top + 2 * 56 + 45, 'total : 4 + 6 + 5 + 7 + 3 + 5 = 30 = le nombre de lancers', 21, GREEN, 'bold', 'middle');
  b += txt(500, top + 2 * 56 + 82, 'imprévisible à chaque lancer… mais les six possibles sont connus d’avance !', 20, PINK2, 'bold', 'middle');
  return svg(1000, top + 2 * 56 + 114, s + b); })();
// S6 — fréquence et probabilité expérimentale
figs.u6f6 = (() => { const { s, y } = head('De l’effectif à la fréquence', ['20 tirages avec remise dans le sac : rouge 12 fois, bleu 6 fois, jaune 2 fois.']);
  const top = y + 20;
  let b = box(190, top, 620, 54, 'fréquence = effectif ÷ nombre total d’essais', GREENL, GREEN, 24);
  const rows = [['rouge', 12, PINK2, '12/20 = 3/5'], ['bleu', 6, BLUE, '6/20 = 3/10'], ['jaune', 2, OCRE, '2/20 = 1/10']];
  rows.forEach(([n, v, col, fr], i) => {
    const Y = top + 110 + i * 56;
    b += txt(80, Y + 8, n, 21, '#333', 'bold');
    for (let k = 0; k < v; k++) b += dot(180 + k * 34, Y, 12, col);
    b += txt(640, Y + 8, fr, 23, col, 'bold');
  });
  b += txt(500, top + 110 + 3 * 56 + 18, 'estimation pour un sac de 10 jetons : 6 rouges, 3 bleus, 1 jaune', 22, GREEN, 'bold', 'middle');
  b += txt(500, top + 110 + 3 * 56 + 54, 'plus on fait d’essais, plus l’estimation devient sûre', 21, PINK2, 'bold', 'middle');
  return svg(1000, top + 110 + 3 * 56 + 86, s + b); })();

const S = [
  {
    t: 'Concevoir une enquête : questions et hypothèses', comp: 'Traitement de données', theme: 'Questions d’enquête et hypothèses',
    goal: 'formuler une question d’enquête précise et émettre une hypothèse avant de collecter les données',
    mat: 'Grandes feuilles, cahier, exemples de questions écrites au tableau',
    revQ: 'Combien d’élèves compte la classe ? Comment le sais-tu avec certitude ?',
    revRA: 'On les compte un par un : l’information vient d’un comptage, pas d’une impression.',
    situation: 'La maîtresse veut acheter des fruits pour la fête de l’école. « Prenons des bananes, tout le monde adore ça ! » lance Soa. « Pas du tout, le letchi est meilleur ! » répond Rivo. Comment trancher ? Pas en criant plus fort — en menant une ENQUÊTE : on pose la question à toute la classe et les réponses décideront.',
    def: 'Une enquête est une démarche organisée pour répondre à une question en recueillant des informations. La question d’enquête est la question précise à laquelle on veut répondre. L’hypothèse est la réponse que l’on prévoit avant de collecter les données.',
    autrement: 'au lieu de deviner, on demande ; et avant de demander, on écrit son pari — l’enquête dira s’il était bon.',
    concept: 'Tout commence par une BONNE question d’enquête. Elle doit être précise (« quel est le fruit préféré des élèves de la classe ? » et non « les fruits, c’est bien ? »), porter sur un groupe défini (notre classe, pas « les gens »), et accepter des réponses que l’on peut compter. Vient ensuite l’hypothèse : « je prédis que la banane sera première ». Pourquoi parier avant de compter ? Parce que l’hypothèse oblige à réfléchir à ce qu’on attend, et donne du sens à la collecte : à la fin, les données confirment ou contredisent la prédiction — les deux issues font avancer ! Enfin on prépare la collecte : qui interroger (tous les élèves, une seule fois chacun), quelles réponses possibles prévoir, comment noter. Une enquête bien conçue se déroule ensuite toute seule ; une enquête bâclée donne des données inutilisables — et c’est la responsabilité de l’enquêteur.',
    synthese: 'enquête = question précise + hypothèse + collecte + réponse ; la question définit le groupe interrogé et des réponses comptables ; l’hypothèse est le pari à vérifier.',
    method: ['Formuler une question précise, sur un groupe défini, aux réponses comptables.', 'Écrire l’hypothèse : la réponse que l’on prévoit.', 'Préparer la collecte : qui interroger, quelles réponses possibles, comment noter.'],
    exemple: 'Question : « quel jour y a-t-il le plus d’absents ? » ; hypothèse : « le lundi » ; collecte : le registre d’appel de la semaine.',
    erreur: 'Poser une question vague : « le sport, c’est important ? ». Chacun comprend autre chose, les réponses ne se comptent pas, l’enquête ne conclut rien. La question doit appeler des réponses précises et dénombrables.',
    saistu: 'La plus grande enquête de Madagascar est le recensement général de la population : en 2018, des milliers d’agents ont visité une à une toutes les maisons du pays pour compter plus de 25 millions d’habitants. Les résultats servent à prévoir les écoles, les hôpitaux et les routes — une enquête peut dessiner l’avenir d’un pays !',
    exos: ['Bonnes ou mauvaises questions d’enquête ? Justifie. a) « Quel est le fruit préféré des élèves de la classe ? » b) « Les mangues, c’est bien ? » d) « Combien de frères et sœurs a chaque élève de la classe ? » e) « Quel jour de la semaine y a-t-il le plus d’absents dans la classe ? »',
      'Pour la question « comment les élèves viennent-ils à l’école ? » : a) propose une hypothèse. b) Qui faut-il interroger ? d) Prévois quatre réponses possibles. e) Combien de fois interroger chaque élève ?',
      'Invente ta propre enquête : a) écris une question précise ; b) écris ton hypothèse ; d) indique le groupe à interroger ; e) explique comment les données diront si ton hypothèse était bonne.'],
    corr: ['a) bonne : précise, groupe défini, réponses comptables ; b) mauvaise : vague, chacun comprend autre chose ; d) bonne : la réponse de chacun est un nombre ; e) bonne : il suffit de compter les absents jour par jour.',
      'a) par exemple « la plupart viennent à pied » ; b) tous les élèves de la classe ; d) à pied, à vélo, en taxi-be, en charrette ; e) une seule fois — sinon les effectifs sont faussés.',
      'a) question précise sur un groupe défini ; b) une prédiction claire ; d) par exemple les élèves de la classe ; e) on comptera les réponses : si la réponse la plus fréquente est celle prédite, l’hypothèse était bonne.'],
    fig: 'u6f1'
  },
  {
    t: 'Collecter et organiser : tableaux simples et chronologiques', comp: 'Traitement de données', theme: 'Collecte et tableaux des effectifs',
    goal: 'collecter des données, les dénombrer par bâtons et les organiser en tableau simple ou chronologique',
    mat: 'Ardoises, bâtonnets, grands tableaux tracés, registre d’appel',
    revQ: 'Qu’est-ce qu’une hypothèse d’enquête ?',
    revRA: 'La réponse que l’on prévoit avant de collecter les données.',
    situation: 'L’enquête des fruits est lancée : les 24 élèves répondent l’un après l’autre — « mangue ! », « letchi ! », « mangue ! », « banane ! »… Hanta note tout à la suite sur son ardoise, et au bout de dix réponses, c’est déjà un fouillis illisible. Il lui faut l’outil des enquêteurs : le tableau, où chaque réponse devient un petit bâton bien rangé.',
    def: 'Collecter des données, c’est recueillir les réponses une à une. L’effectif d’une réponse est le nombre de fois où elle apparaît. Le tableau des effectifs range chaque réponse possible avec son effectif ; le tableau chronologique range les données dans l’ordre du temps (jours, semaines, mois).',
    autrement: 'chaque réponse devient un bâton dans la bonne ligne ; à la fin, on compte les bâtons de chaque ligne : c’est l’effectif.',
    concept: 'Le dénombrement par bâtons est la machine à ne rien perdre : à chaque réponse entendue, un bâton — immédiatement, dans la bonne ligne. Les bâtons se groupent par paquets de 5, qui se comptent ensuite d’un coup d’œil : 5, 10, 15… Quand la collecte est finie, on écrit les effectifs en chiffres : mangue 8, banane 6, letchi 7, ananas 3. Puis vient le contrôle du professionnel : la somme des effectifs doit égaler le nombre d’interrogés — 8 + 6 + 7 + 3 = 24 élèves ✓. Si le compte n’y est pas, une réponse a été perdue ou comptée deux fois. Le tableau chronologique obéit à la même logique, mais ses lignes sont les jours ou les mois DANS L’ORDRE : absents de lundi à vendredi, pluie de janvier à décembre… L’ordre du temps ne se mélange jamais, car c’est lui qui montre l’évolution.',
    synthese: 'un bâton par réponse, paquets de 5 ; effectif = compte d’une ligne ; somme des effectifs = nombre d’interrogés ; tableau chronologique = données dans l’ordre du temps.',
    method: ['Tracer le tableau : une ligne par réponse possible (ou par période).', 'À chaque donnée, marquer un bâton dans la bonne ligne, par paquets de 5.', 'Écrire les effectifs en chiffres et vérifier : leur somme = le nombre de données.'],
    exemple: '15 réponses collectées, effectifs 6, 6 et 3 : contrôle 6 + 6 + 3 = 15 ✓ — aucune réponse perdue.',
    erreur: 'Noter toutes les réponses en vrac et compter à la fin : on relit dix fois, on se trompe, on perd des réponses. Le bâton se marque AU MOMENT où la réponse arrive — jamais après.',
    saistu: 'Le plus vieil objet mathématique du monde est un os à bâtons : l’os d’Ishango, trouvé en Afrique près du lac Édouard, porte des entailles groupées vieilles d’environ 20 000 ans. Bien avant l’écriture, des hommes dénombraient déjà comme toi — un trait par objet compté !',
    exos: ['Voici 15 réponses à « quel est ton animal préféré ? » : zébu, poule, zébu, chien, poule, zébu, poule, chien, zébu, poule, zébu, poule, chien, zébu, poule. a) Dresse le tableau avec les bâtons. b) Quel est l’effectif de « zébu » ? d) Celui de « chien » ? e) Vérifie le total.',
      'Absents de la semaine : lundi 2, mardi 1, mercredi 0, jeudi 3, vendredi 1. a) Quel jour compte le plus d’absents ? b) Quel jour n’en compte aucun ? d) Combien d’absences dans la semaine ? e) Pourquoi garder les jours dans l’ordre ?',
      'L’enquête des fruits donne : mangue 8, banane 6, letchi 7, ananas ?, pour 24 élèves. a) Calcule l’effectif manquant. b) Quel est le fruit le plus choisi ? d) Quel est l’écart entre mangue et banane ? e) Combien d’élèves n’ont pas choisi la mangue ?'],
    corr: ['a) zébu IIII I, poule IIII I, chien III ; b) 6 ; d) 3 ; e) 6 + 6 + 3 = 15 ✓.',
      'a) jeudi (3) ; b) mercredi ; d) 2 + 1 + 0 + 3 + 1 = 7 absences ; e) parce que l’ordre du temps montre l’évolution au fil de la semaine.',
      'a) 24 − (8 + 6 + 7) = 24 − 21 = 3 ; b) la mangue ; d) 8 − 6 = 2 ; e) 24 − 8 = 16 élèves.'],
    fig: 'u6f2'
  },
  {
    t: 'Diagrammes en barres et pictogrammes', comp: 'Traitement de données', theme: 'Représentations : barres et pictogrammes',
    goal: 'représenter des données par un diagramme en barres et par un pictogramme avec légende',
    mat: 'Papier quadrillé, règle, crayons de couleur, gommettes ou cachets',
    revQ: 'Effectifs 8, 6, 7, 3 pour 24 élèves : le contrôle est-il bon ?',
    revRA: '8 + 6 + 7 + 3 = 24 ✓ : aucune réponse perdue.',
    situation: 'Le tableau des fruits est exact, mais au fond de la classe, personne ne le lit : des nombres, encore des nombres… Alors Hanta prend le papier quadrillé : une barre rose de 8 carreaux pour la mangue, une verte de 6 pour la banane… En trois secondes, toute la classe VOIT le gagnant. Une image bien construite parle plus vite que cent nombres.',
    def: 'Un diagramme en barres représente chaque effectif par une barre : toutes les barres ont la même largeur, et la hauteur de chaque barre est proportionnelle à l’effectif. Un pictogramme représente les effectifs par de petits symboles identiques ; sa légende indique combien d’unités vaut un symbole.',
    autrement: 'le diagramme en barres, c’est le tableau debout : plus l’effectif est grand, plus sa barre monte ; le pictogramme raconte la même chose avec des petits dessins.',
    concept: 'Le diagramme en barres se construit avec trois règles d’or. Un : même largeur pour toutes les barres — seule la HAUTEUR porte l’information. Deux : une échelle régulière qui part de zéro — ici 1 carreau = 1 élève, donc mangue 8 carreaux, banane 6, letchi 7, ananas 3. Trois : tout étiqueter — le nom sous chaque barre, l’effectif au sommet. Le pictogramme suit la même idée avec des symboles : si la légende dit « 1 rond = 2 élèves », la mangue (8 élèves) reçoit 4 ronds, la banane (6) en reçoit 3, et le letchi (7) … 3 ronds et demi ! Le demi-symbole est permis et courant. Sans légende, le pictogramme est muet : 4 ronds pourraient valoir 4, 8 ou 400 — la légende est sa clef de lecture, on la vérifie toujours en premier.',
    synthese: 'barres : même largeur, échelle régulière partant de zéro, hauteur proportionnelle à l’effectif ; pictogramme : symboles identiques + légende obligatoire ; demi-symbole permis.',
    method: ['Choisir l’échelle : 1 carreau (ou 1 symbole) = combien d’unités ?', 'Tracer une barre (ou une rangée de symboles) par réponse, à la bonne hauteur.', 'Étiqueter : noms, effectifs, et la légende du pictogramme.'],
    exemple: 'Effectif 14 avec la légende « 1 symbole = 4 » : 14 ÷ 4 = 3 reste 2, donc 3 symboles et un demi-symbole.',
    erreur: 'Dessiner des barres de largeurs différentes : la barre large paraît plus importante même si elle est moins haute, et le lecteur est trompé. La largeur ne change JAMAIS ; seule la hauteur parle.',
    saistu: 'Le diagramme en barres a un inventeur : l’Écossais William Playfair, en 1786. Et c’est une infirmière, Florence Nightingale, qui rendit ces images célèbres : ses diagrammes sur les hôpitaux militaires étaient si parlants qu’ils convaincurent la reine Victoria de réformer tous les hôpitaux d’Angleterre. Un bon diagramme peut changer le monde !',
    exos: ['Avec les effectifs mangue 8, banane 6, letchi 7, ananas 3 et l’échelle 1 carreau = 1 élève : a) hauteur de la barre « mangue » ? b) Hauteur de la barre « banane » ? d) Quelle barre est la plus haute ? e) Trace le diagramme complet sur papier quadrillé.',
      'Pictogramme avec la légende « 1 rond = 2 élèves » : a) combien de ronds pour la mangue (8) ? b) Pour la banane (6) ? d) Pour le letchi (7) ? e) Pourquoi la légende est-elle indispensable ?',
      'Livres lus pendant les vacances : Hanta 5, Rivo 3, Soa 6, Naly 2. a) Qui a lu le plus ? b) Qui a lu le moins ? d) Combien de livres en tout ? e) Trace le diagramme en barres (1 carreau = 1 livre).'],
    corr: ['a) 8 carreaux ; b) 6 carreaux ; d) la mangue ; e) quatre barres de même largeur, hauteurs 8, 6, 7, 3, noms dessous et effectifs au sommet.',
      'a) 8 ÷ 2 = 4 ronds ; b) 3 ronds ; d) 3 ronds et demi ; e) sans elle, on ignore la valeur d’un symbole : le pictogramme devient illisible.',
      'a) Soa (6) ; b) Naly (2) ; d) 5 + 3 + 6 + 2 = 16 livres ; e) barres de hauteurs 5, 3, 6, 2 avec la même largeur.'],
    fig: 'u6f3'
  },
  {
    t: 'Interpréter des données', comp: 'Traitement de données', theme: 'Lecture et interprétation de données',
    goal: 'lire, comparer et interpréter des données présentées en tableau ou en diagramme, et juger une hypothèse',
    mat: 'Diagrammes et tableaux préparés, affiches, cahier',
    revQ: 'Légende « 1 symbole = 4 élèves » : quel effectif pour 3 symboles et demi ?',
    revRA: '3 × 4 = 12, plus le demi-symbole qui vaut 2 : effectif 14.',
    situation: 'Le diagramme des fruits est affiché. La maîtresse ne demande plus « que voyez-vous ? » mais « que COMPREND-on ? ». Rivo lit : « la mangue gagne avec 8 voix ». Soa compare : « 5 voix d’écart entre la première et la dernière ». Hanta conclut : « mon hypothèse banane était fausse — et pour la fête, il faut des mangues ! ». Lire, comparer, conclure : le diagramme a parlé.',
    def: 'Interpréter des données, c’est en tirer des informations et des conclusions : lire des valeurs, comparer les effectifs, calculer des totaux et des écarts, répondre à la question d’enquête et dire si l’hypothèse de départ était bonne.',
    autrement: 'le tableau et le diagramme sont des témoins : interpréter, c’est les interroger — qui est premier ? de combien ? et alors, que décide-t-on ?',
    concept: 'L’interprétation suit quatre gestes, du plus simple au plus fort. LIRE : prélever une valeur — « banane : 6 élèves ». COMPARER : classer et mesurer les écarts — la mangue (8) dépasse l’ananas (3) de 5 voix. TOTALISER : retrouver l’ensemble — 8 + 6 + 7 + 3 = 24 réponses, le compte est bon. CONCLURE : revenir à la question d’enquête et à l’hypothèse — la banane n’est pas première, l’hypothèse de Soa est contredite par les données, et la décision suit (acheter surtout des mangues). Et par-dessus tout, le regard critique : avant de croire un diagramme, on vérifie que l’axe part de zéro, que les barres ont la même largeur, que la légende est donnée. Un diagramme dont l’axe commence à 9 fait paraître 12 trois fois plus grand que 10 — l’image peut mentir, le lecteur critique ne se laisse pas faire.',
    synthese: 'quatre gestes : lire une valeur, comparer (écarts), totaliser, conclure sur l’hypothèse ; et l’œil critique vérifie axe, largeurs, légende avant de croire l’image.',
    method: ['Lire les valeurs demandées directement sur le tableau ou les barres.', 'Comparer : plus grand, plus petit, écarts, et calculer le total.', 'Conclure : répondre à la question d’enquête et juger l’hypothèse — après avoir vérifié que le diagramme est honnête.'],
    exemple: 'Ventes : lundi 12, mardi 9, mercredi 15 → le meilleur jour est mercredi ; écart avec mardi : 15 − 9 = 6 ; total 36.',
    erreur: 'Confondre « voir » et « conclure » : annoncer « la banane a perdu » sans citer les nombres. Une interprétation s’appuie toujours sur des valeurs lues et des calculs — sinon ce n’est qu’une opinion de plus.',
    saistu: 'Les prévisions météo que tu entends à la radio sont de l’interprétation de données géante : des millions de mesures de température, de vent et de pression, collectées par des stations et des satellites, sont comparées aux situations passées pour conclure « demain, pluie sur les hautes terres ». Lire, comparer, conclure — exactement tes gestes d’aujourd’hui.',
    exos: ['Sacs de riz vendus : lundi 12, mardi 9, mercredi 15, jeudi 9, vendredi 18. a) Quel est le meilleur jour ? b) Quels jours sont à égalité ? d) Combien de sacs dans la semaine ? e) Quel est l’écart entre le meilleur et le moins bon jour ?',
      'Retour sur l’enquête des fruits (mangue 8, banane 6, letchi 7, ananas 3). L’hypothèse de Soa était « la banane sera première ». a) Qui est premier d’après les données ? b) L’hypothèse était-elle bonne ? d) Combien d’élèves ont choisi les deux fruits les moins populaires ? e) Quelle décision prendre pour la fête ?',
      'Esprit critique. Un vendeur affiche un diagramme dont l’axe commence à 9 : sa barre de 12 paraît immense face à celle de 10. a) Que faut-il toujours vérifier sur l’axe ? b) Que doivent avoir en commun toutes les barres ? d) Quel est l’écart réel entre 12 et 10 ? e) Pourquoi dit-on que la pensée critique protège le lecteur ?'],
    corr: ['a) vendredi (18) ; b) mardi et jeudi (9) ; d) 12 + 9 + 15 + 9 + 18 = 63 sacs ; e) 18 − 9 = 9 sacs.',
      'a) la mangue (8) ; b) non : la banane est troisième (6) ; d) ananas 3 + banane 6 = 9 élèves ; e) acheter surtout des mangues — les données décident.',
      'a) qu’il part de zéro ; b) la même largeur ; d) 12 − 10 = 2 seulement ; e) parce qu’elle fait vérifier l’image avant d’y croire : axe, largeurs, légende.'],
    fig: 'u6f4'
  },
  {
    t: 'Expériences aléatoires et tableaux de dénombrement', comp: 'Traitement de données', theme: 'Expériences aléatoires : dés, pièces, jetons',
    goal: 'reconnaître une expérience aléatoire et enregistrer ses résultats dans un tableau de dénombrement',
    mat: 'Dés, pièces de monnaie, jetons colorés dans un sac opaque, ardoises',
    revQ: 'Diagramme honnête : les trois vérifications du lecteur critique ?',
    revRA: 'Axe partant de zéro, barres de même largeur, légende présente.',
    situation: 'Naly lance un dé : 4. Il relance : 2. Encore : 4, puis 6, puis 1… « Je parie que le prochain est un 3 ! » Perdu : c’est un 5. Personne au monde ne peut prévoir le prochain lancer — pas même la maîtresse ! Pourtant, en notant chaque résultat d’un bâton, quelque chose d’étonnant apparaît au bout de 30 lancers : le hasard, imprévisible au coup par coup, se laisse compter.',
    def: 'Une expérience aléatoire est une expérience dont le résultat ne peut pas être prévu à l’avance, même si l’on connaît la liste de tous les résultats possibles. Le tableau de dénombrement enregistre, par des bâtons puis des effectifs, le nombre de fois où chaque résultat est apparu.',
    autrement: 'on ne sait jamais CE QUI va sortir, mais on sait tout ce qui PEUT sortir — et on compte fidèlement ce qui EST sorti.',
    concept: 'Trois objets royaux du hasard entrent en classe. Le dé : six résultats possibles, 1 à 6. La pièce : deux résultats, pile ou face. Le sac de jetons colorés : autant de résultats que de couleurs. À chaque fois, le même paradoxe : chaque essai est imprévisible, mais la LISTE des possibles est parfaitement connue d’avance — c’est la signature de l’expérience aléatoire. Face au hasard, le mathématicien sort son arme de la séance 2 : le tableau de dénombrement. Une ligne par résultat possible, un bâton par essai, et le contrôle sacré : la somme des effectifs doit égaler le nombre d’essais — nos 30 lancers donnent 4 + 6 + 5 + 7 + 3 + 5 = 30 ✓. Attention à l’illusion du joueur : après trois 6 de suite, le dé ne « doit » rien — il ne se souvient de rien, et le quatrième lancer reste aussi imprévisible que le premier.',
    synthese: 'aléatoire = résultat imprévisible, possibles connus ; dé (6), pièce (2), jetons (couleurs) ; tableau de dénombrement + contrôle : somme des effectifs = nombre d’essais.',
    method: ['Lister tous les résultats possibles : une ligne de tableau chacun.', 'Réaliser les essais et marquer un bâton par résultat, au fur et à mesure.', 'Écrire les effectifs et contrôler : leur somme = le nombre d’essais.'],
    exemple: 'Pièce lancée 20 fois : pile IIII IIII I (11), face IIII IIII (9) ; contrôle 11 + 9 = 20 ✓.',
    erreur: 'Croire que le hasard a de la mémoire : « le 6 n’est pas sorti depuis longtemps, il va forcément sortir ». Faux ! Le dé ne se souvient de rien : chaque lancer repart de zéro.',
    saistu: 'Les dés sont parmi les plus vieux jouets de l’humanité : on en a retrouvé en Mésopotamie et en Égypte vieux de 5 000 ans, souvent taillés dans des osselets de zébu ou de mouton — l’astragale. Pharaons, légionnaires romains et rois ont tous fait rouler les dés… sans jamais réussir à prévoir le résultat.',
    exos: ['Expérience aléatoire ou non ? Justifie. a) Lancer un dé. b) Mesurer la longueur de la table avec une règle. d) Tirer un jeton d’un sac sans regarder. e) Se demander si le soleil se lèvera demain.',
      'Dé lancé 30 fois : face 1 → 4 fois, face 2 → 6, face 3 → 5, face 4 → 7, face 5 → 3, face 6 → 5. a) Quelle face est la plus sortie ? b) La moins sortie ? d) Calcule la somme des effectifs. e) À quoi cette somme doit-elle être égale ?',
      'Pièce lancée 50 fois : pile 27 fois, face 23 fois. a) Quel est l’effectif de pile ? b) Celui de face ? d) Vérifie le contrôle du tableau. e) Les deux résultats sortent-ils à peu près aussi souvent ?'],
    corr: ['a) oui : résultat imprévisible parmi six possibles ; b) non : le résultat se mesure, il n’y a pas de hasard ; d) oui : couleur imprévisible parmi les couleurs du sac ; e) non : le résultat est certain.',
      'a) la face 4 (7 fois) ; b) la face 5 (3 fois) ; d) 4 + 6 + 5 + 7 + 3 + 5 = 30 ; e) au nombre de lancers : 30 ✓.',
      'a) 27 ; b) 23 ; d) 27 + 23 = 50 ✓ ; e) oui : presque moitié-moitié, 27 contre 23.'],
    fig: 'u6f5'
  },
  {
    t: 'La probabilité expérimentale', comp: 'Traitement de données', theme: 'Fréquences et probabilité expérimentale',
    goal: 'calculer des fréquences et estimer une probabilité expérimentale pour comparer et prédire',
    mat: 'Sacs opaques, jetons rouges, bleus et jaunes, dés, pièces, cahier',
    revQ: 'Dé lancé 30 fois : à quoi doit être égale la somme des effectifs ?',
    revRA: 'À 30, le nombre de lancers.',
    situation: 'La maîtresse apporte un sac opaque : « il contient 10 jetons, mais je ne vous dirai pas leurs couleurs ! ». Interdiction d’ouvrir le sac. Alors la classe tire un jeton, note sa couleur, le remet, et recommence 20 fois : rouge, rouge, bleu, rouge, jaune… Au tableau : rouge 12, bleu 6, jaune 2. Sans jamais ouvrir le sac, la classe va deviner ce qu’il contient. Magie ? Non : probabilité expérimentale.',
    def: 'La fréquence d’un résultat est le quotient de son effectif par le nombre total d’essais. La probabilité expérimentale d’un résultat est sa fréquence observée sur un grand nombre d’essais : elle estime la chance que ce résultat se produise.',
    autrement: 'la fréquence répond à « quelle part des essais a donné ce résultat ? » — et cette part, mesurée longtemps, devient la meilleure prédiction du futur.',
    concept: 'La fréquence transforme un effectif en PART du total : rouge est sorti 12 fois sur 20, fréquence 12/20 = 3/5 ; bleu 6/20 = 3/10 ; jaune 2/20 = 1/10. Les fréquences se comparent (le rouge sort 6 fois plus souvent que le jaune) et surtout, elles PRÉDISENT : si les tirages sont à l’image du sac, les 10 jetons devraient se répartir comme les fréquences — 3/5 de 10 = 6 rouges, 3/10 de 10 = 3 bleus, 1/10 de 10 = 1 jaune. Le sac, ouvert enfin, confirme ! Deux lois gouvernent ce pouvoir. Première : la somme des fréquences fait toujours le total entier (12/20 + 6/20 + 2/20 = 20/20). Seconde, la plus importante : plus le nombre d’essais est GRAND, plus la fréquence devient fiable — 20 tirages donnent une bonne idée, 200 donneraient une estimation remarquable. C’est pourquoi on dit probabilité EXPÉRIMENTALE : elle naît de l’expérience répétée, patiemment comptée.',
    synthese: 'fréquence = effectif ÷ total des essais ; les fréquences se comparent et estiment le contenu caché ; somme des fréquences = le tout ; plus d’essais = estimation plus sûre.',
    method: ['Compter l’effectif de chaque résultat dans le tableau de dénombrement.', 'Diviser chaque effectif par le nombre total d’essais : c’est la fréquence (à simplifier).', 'Utiliser les fréquences pour comparer les résultats et estimer ce qui est caché — en se rappelant que plus d’essais rendent l’estimation plus sûre.'],
    exemple: 'Face 6 sortie 12 fois sur 60 lancers : fréquence 12/60 = 1/5 — environ un lancer sur cinq.',
    erreur: 'Prendre l’effectif pour la fréquence : « rouge : 12 » ne dit rien tout seul — 12 sur 20, c’est énorme ; 12 sur 2 000, c’est minuscule. La fréquence compare TOUJOURS l’effectif au total des essais.',
    saistu: 'Pendant la Seconde Guerre mondiale, le mathématicien John Kerrich, prisonnier au Danemark, occupa sa captivité à lancer une pièce… 10 000 fois ! Résultat : 5 067 piles, soit une fréquence de 5 067/10 000 — très proche d’une moitié. Sa patience prouva de façon éclatante que plus on répète l’expérience, plus la fréquence se stabilise.',
    exos: ['Un dé est lancé 60 fois : la face 6 sort 12 fois, la face 1 sort 9 fois. a) Quelle est la fréquence de la face 6 ? b) Simplifie-la. d) Quelle est la fréquence de la face 1, simplifiée ? e) Laquelle des deux faces est sortie le plus souvent ?',
      'Sac de jetons, 20 tirages avec remise : rouge 12, bleu 6, jaune 2. a) Fréquence du rouge, simplifiée ? b) Fréquence du bleu, simplifiée ? d) Fréquence du jaune, simplifiée ? e) De quelle couleur le sac contient-il probablement le plus de jetons ?',
      'Le sac de l’exercice 2 contient exactement 10 jetons. a) Estime le nombre de jetons rouges. b) Le nombre de bleus. d) Le nombre de jaunes. e) Comment rendre ces estimations encore plus sûres ?'],
    corr: ['a) 12/60 ; b) 12/60 = 1/5 ; d) 9/60 = 3/20 ; e) la face 6 (12 fois contre 9).',
      'a) 12/20 = 3/5 ; b) 6/20 = 3/10 ; d) 2/20 = 1/10 ; e) le rouge : sa fréquence est de loin la plus grande.',
      'a) 3/5 de 10 = 6 rouges ; b) 3/10 de 10 = 3 bleus ; d) 1/10 de 10 = 1 jaune ; e) faire beaucoup plus de tirages : la fréquence devient plus fiable.'],
    fig: 'u6f6'
  }
];

const unit6 = {
  no: 6, roman: 'VI', name: 'Traitement de données',
  rag: 'collecter, organiser, représenter et interpréter des données, et estimer des probabilités par l’expérience.',
  valeurs: 'pensée critique et responsabilité',
  sessions: S,
  revision: {
    table: [
      ['Enquête', 'Question précise + hypothèse + collecte + réponse par les données', 'Concevoir une enquête et formuler une hypothèse'],
      ['Collecte et effectifs', 'Un bâton par réponse, paquets de 5 ; somme des effectifs = nombre d’interrogés', 'Dresser un tableau des effectifs ou chronologique'],
      ['Diagramme en barres', 'Même largeur, échelle régulière partant de zéro, hauteur proportionnelle', 'Construire et étiqueter un diagramme'],
      ['Pictogramme', 'Symboles identiques + légende obligatoire ; demi-symbole permis', 'Représenter et lire un pictogramme'],
      ['Interprétation', 'Lire, comparer, totaliser, conclure — et vérifier que l’image est honnête', 'Tirer des conclusions et juger une hypothèse'],
      ['Hasard et fréquences', 'Aléatoire = imprévisible aux possibles connus ; fréquence = effectif ÷ essais', 'Dénombrer une expérience et estimer une probabilité']
    ],
    questions: [
      'Donne une bonne question d’enquête sur les goûts de la classe, et une hypothèse qui l’accompagne.',
      'Réponses collectées : zébu 4, poule 7, canard 3, pour 14 élèves interrogés. Le tableau est-il complet et juste ?',
      'Diagramme : brèdes 15, tomates 10, carottes 20, oignons 5 (bottes vendues). Donne le plus vendu, le total et l’écart maximal.',
      'Un dé est lancé 36 fois ; la face 3 sort 6 fois. Calcule sa fréquence et simplifie-la.',
      'Sac inconnu : sur 30 tirages avec remise, le rouge sort 18 fois. Fréquence du rouge ? Estimation pour un sac de 10 jetons ?'
    ],
    answers: [
      'Par exemple : « quel est le jeu préféré des élèves de la classe ? » ; hypothèse : « je prédis le fanorona ».',
      'Contrôle : 4 + 7 + 3 = 14 ✓ — la somme des effectifs retombe sur le nombre d’interrogés, le tableau est juste.',
      'Les carottes (20) ; total 15 + 10 + 20 + 5 = 50 bottes ; écart maximal 20 − 5 = 15.',
      '6/36 = 1/6.',
      'Fréquence 18/30 = 3/5 ; estimation : 3/5 de 10 = 6 jetons rouges environ.'
    ]
  },
  exam: {
    exos: [
      'Enquête. On veut savoir comment les élèves de la classe viennent à l’école. a) Écris une question d’enquête précise. b) Propose une hypothèse. d) Qui faut-il interroger, et combien de fois chacun ? e) Pourquoi la réponse finale doit-elle venir des données et non d’un avis ?',
      'Tableau des effectifs. Les 20 élèves répondent à « quel est ton sport préféré ? » : football 9, course 5, natation 4, basket 2. a) Dresse le tableau des effectifs. b) Quel est le sport le plus choisi ? d) Vérifie le contrôle du tableau. e) Combien d’élèves n’ont pas choisi le football ?',
      'Diagramme en barres. Bottes vendues au marché : brèdes 15, tomates 10, carottes 20, oignons 5. a) Avec l’échelle 1 carreau = 5 bottes, donne la hauteur de chaque barre. b) Trace le diagramme. d) Quel est l’écart entre carottes et oignons ? e) Que faut-il vérifier pour que le diagramme soit honnête ?',
      'Expérience aléatoire. Un dé est lancé 25 fois ; la face 6 sort 5 fois. a) Pourquoi ce lancer de dé est-il une expérience aléatoire ? b) Quelle est la fréquence de la face 6 ? d) Simplifie-la. e) Après trois 6 de suite, le 6 a-t-il plus de chances de sortir au lancer suivant ? Justifie.',
      'Problème. Un sac opaque contient 10 jetons. On tire 40 fois avec remise : rouge 28 fois, bleu 8 fois, jaune 4 fois. a) Calcule la fréquence de chaque couleur, simplifiée. b) Quelle couleur domine le sac ? d) Estime la composition du sac. e) La classe refait 400 tirages au lieu de 40 : qu’est-ce qui change pour l’estimation ?'
    ],
    corr: [
      'a) « comment chaque élève de la classe vient-il à l’école ? » ; b) par exemple « la plupart viennent à pied » ; d) tous les élèves de la classe, une seule fois chacun ; e) parce qu’un avis isolé peut se tromper : seules les données collectées répondent pour tout le groupe. Un point par item.',
      'a) football 9, course 5, natation 4, basket 2 (avec bâtons par paquets de 5) ; b) le football ; d) 9 + 5 + 4 + 2 = 20 ✓ ; e) 20 − 9 = 11 élèves. Un point par item.',
      'a) brèdes 3 carreaux, tomates 2, carottes 4, oignons 1 ; b) quatre barres de même largeur, hauteurs 3, 2, 4, 1 carreaux, étiquetées ; d) 20 − 5 = 15 bottes ; e) axe partant de zéro, barres de même largeur, échelle régulière. Un point par item.',
      'a) le résultat de chaque lancer est imprévisible, bien que les six résultats possibles soient connus ; b) 5/25 ; d) 5/25 = 1/5 ; e) non : le dé n’a pas de mémoire, chaque lancer reste imprévisible. Un point par item.',
      'a) rouge 28/40 = 7/10 ; bleu 8/40 = 1/5 ; jaune 4/40 = 1/10 ; b) le rouge ; d) 7/10 de 10 = 7 rouges, 1/5 de 10 = 2 bleus, 1/10 de 10 = 1 jaune ; e) l’estimation devient plus sûre : plus les essais sont nombreux, plus les fréquences sont fiables. Un point par item.'
    ]
  }
};

(async () => {
  const bufs = await L.render(figs);
  await buildUnit(unit6, bufs);
})();
