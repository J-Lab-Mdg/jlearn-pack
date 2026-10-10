// UNITÉ 3 — LE MOYEN-ÂGE (PE T7) : 6 séances + révision + examen
const L = require('./figlib');
const { buildUnit } = require('./engine');
const { head, svg, txt, nline, dot, tableEl, box, arrow, seg, circle, poly, PINK, PINK2, GREEN, GREENL, BLUE, BLUEL, OCRE } = L;

const figs = {};
// S1 — frise du Moyen-Âge
figs.u3f1 = (() => { const { s, y } = head('Le Moyen-Âge : 476 à 1492', ['Mille ans entre l’Antiquité et les Temps modernes.']);
  const top = y + 30;
  const X = 70, W = 860, Y0 = top + 20;
  let b = seg(X, Y0, X + W, Y0, BLUE, 5);
  // bornes : 476, XIe (~1000), 1492 — proportionnel : 476→1492 = 1016 ans
  const x11 = X + W * (1000 - 476) / 1016;
  b += `<rect x="${X}" y="${Y0 + 24}" width="${x11 - X}" height="48" fill="${GREENL}" stroke="${GREEN}" stroke-width="3"/>`;
  b += `<rect x="${x11}" y="${Y0 + 24}" width="${X + W - x11}" height="48" fill="${BLUEL}" stroke="${BLUE}" stroke-width="3"/>`;
  b += txt((X + x11) / 2, Y0 + 54, 'Haut Moyen Âge (Vᵉ-XIᵉ s.)', 21, GREEN, 'bold', 'middle');
  b += txt((x11 + X + W) / 2, Y0 + 54, 'Bas Moyen Âge (XIᵉ-XVᵉ s.)', 21, BLUE, 'bold', 'middle');
  b += txt(X, Y0 - 12, '476', 22, PINK2, 'bold', 'middle');
  b += txt(x11, Y0 - 12, 'XIᵉ siècle', 21, PINK2, 'bold', 'middle');
  b += txt(X + W, Y0 - 12, '1492', 22, PINK2, 'bold', 'middle');
  b += txt(X, Y0 + 104, 'chute de Rome :', 20, '#333');
  b += txt(X, Y0 + 130, 'début du Moyen Âge', 20, '#333');
  b += txt(X + W, Y0 + 104, 'arrivée de Colomb en Amérique :', 20, '#333', 'normal', 'end');
  b += txt(X + W, Y0 + 130, 'fin du Moyen Âge', 20, '#333', 'normal', 'end');
  b += box(60, Y0 + 160, 400, 50, 'XIᵉ-XIIIᵉ : progrès et croisades', GREENL, GREEN, 20);
  b += box(520, Y0 + 160, 420, 50, 'XIVᵉ-XVᵉ : malheurs, guerre de Cent Ans', '#FDE7EF', PINK2, 18);
  return svg(1000, Y0 + 240, s + b); })();
// S2 — pyramide féodale
figs.u3f2 = (() => { const { s, y } = head('La société féodale', ['Chacun doit service et fidélité à celui du dessus.']);
  const top = y + 15;
  const rows = [['le roi (suzerain suprême)', 340, '#FDE7EF', PINK2],
    ['les seigneurs (suzerains)', 460, BLUEL, BLUE],
    ['les vassaux et chevaliers', 580, GREENL, GREEN],
    ['les paysans : serfs et vilains', 700, '#FFF3E0', OCRE]];
  let b = '';
  rows.forEach(([t, w, f, c], i) => {
    b += box(500 - w / 2, top + i * 70, w, 54, t, f, c, 22);
    if (i < 3) b += arrow(500, top + (i + 1) * 70 - 16, 500, top + (i + 1) * 70, '#888', 3);
  });
  b += txt(500, top + 4 * 70 + 24, 'le clergé prie pour tous ; le vassal reçoit un fief contre fidélité et service', 20, BLUE, 'bold', 'middle');
  b += txt(500, top + 4 * 70 + 56, 'serf : attaché à la terre — vilain : paysan libre mais chargé de redevances', 20, OCRE, 'bold', 'middle');
  return svg(1000, top + 4 * 70 + 88, s + b); })();
// S3 — organisation de l'Église
figs.u3f3 = (() => { const { s, y } = head('L’Église au Moyen Âge', ['Une organisation en deux clergés — et des rôles partout.']);
  const top = y + 15;
  let b = box(350, top, 300, 50, 'le pape et les cardinaux', '#FDE7EF', PINK2, 21);
  b += arrow(420, top + 50, 300, top + 86, BLUE, 3.5);
  b += arrow(580, top + 50, 700, top + 86, GREEN, 3.5);
  b += box(90, top + 90, 400, 50, 'clergé séculier : évêques, curés', BLUEL, BLUE, 20);
  b += box(510, top + 90, 400, 50, 'clergé régulier : abbés, moines', GREENL, GREEN, 20);
  b += txt(290, top + 172, 'vit au milieu des fidèles', 20, BLUE, 'normal', 'middle');
  b += txt(710, top + 172, 'vit dans les monastères', 20, GREEN, 'normal', 'middle');
  const roles = [['assistance', 'aide aux pauvres et aux malades, hôpitaux'], ['culture', 'écoles, manuscrits copiés par les moines'], ['économie', 'la dîme, la vente d’indulgences'], ['société', 'baptême, mariage, funérailles — toute la vie']];
  roles.forEach(([t, d], i) => {
    const Y = top + 205 + i * 60;
    b += box(80, Y, 200, 48, t, '#FFF3E0', OCRE, 20);
    b += txt(305, Y + 31, d, 20, '#333');
  });
  return svg(1000, top + 205 + 4 * 60 + 20, s + b); })();
// S4 — les 5 piliers de l'Islam
figs.u3f4 = (() => { const { s, y } = head('Les cinq piliers de l’Islam', ['Les cinq obligations du croyant musulman.']);
  const top = y + 15;
  const piliers = [['1. chahâda', 'la profession de foi'], ['2. la prière', 'cinq fois par jour'], ['3. le jeûne', 'le mois de Ramadan'], ['4. zakat', 'l’aumône aux pauvres'], ['5. hadj', 'le pèlerinage à La Mecque']];
  let b = '';
  piliers.forEach(([t, d], i) => {
    const X = 35 + i * 190;
    b += `<rect x="${X}" y="${top}" width="170" height="150" rx="10" fill="${i % 2 ? BLUEL : GREENL}" stroke="${i % 2 ? BLUE : GREEN}" stroke-width="3"/>`;
    b += txt(X + 85, top + 48, t, 21, i % 2 ? BLUE : GREEN, 'bold', 'middle');
    const words = d.split(' ');
    let line1 = '', line2 = '';
    for (const w of words) { if ((line1 + w).length <= 12) line1 += (line1 ? ' ' : '') + w; else line2 += (line2 ? ' ' : '') + w; }
    b += txt(X + 85, top + 90, line1, 18, '#333', 'normal', 'middle');
    if (line2) b += txt(X + 85, top + 114, line2, 18, '#333', 'normal', 'middle');
  });
  b += txt(500, top + 190, 'l’Islam naît en Arabie au VIIᵉ siècle : Mahomet reçoit le message du Coran', 21, OCRE, 'bold', 'middle');
  return svg(1000, top + 222, s + b); })();
// S5 — frise des conquêtes
figs.u3f5 = (() => { const { s, y } = head('Les conquêtes musulmanes', ['Une expansion fulgurante en à peine plus d’un siècle.']);
  const top = y + 20;
  const steps = [['Au temps de Mahomet', '630-632', 'l’Arabie est unie', GREENL, GREEN],
    ['Les 4 premiers califes', '632-656', 'Syrie, Égypte, Perse', BLUEL, BLUE],
    ['Les califes omeyyades', '661-750', 'de l’Espagne à l’Indus', '#FDE7EF', PINK2]];
  let b = '';
  steps.forEach(([n, d, t, f, c], i) => {
    const X = 40 + i * 315;
    b += box(X, top, 290, 54, n, f, c, 20);
    b += txt(X + 145, top + 90, d, 22, c, 'bold', 'middle');
    b += txt(X + 145, top + 122, t, 19, '#333', 'normal', 'middle');
    if (i < 2) b += arrow(X + 290, top + 27, X + 315, top + 27, OCRE, 4);
  });
  b += txt(500, top + 176, 'calife = successeur de Mahomet, chef religieux et politique', 21, BLUE, 'bold', 'middle');
  b += txt(500, top + 212, 'en 750, l’empire musulman s’étend sur trois continents', 21, GREEN, 'bold', 'middle');
  return svg(1000, top + 244, s + b); })();
// S6 — la scission
figs.u3f6 = (() => { const { s, y } = head('La division de l’Islam au VIIᵉ siècle', ['Une querelle de succession aux conséquences durables.']);
  const top = y + 15;
  let b = box(300, top, 400, 50, 'mort de Mahomet (632)', '#FFF3E0', OCRE, 21);
  b += box(250, top + 80, 500, 50, 'qui doit diriger les croyants ?', BLUEL, BLUE, 21);
  b += arrow(500, top + 50, 500, top + 80, '#888', 3.5);
  b += arrow(380, top + 130, 260, top + 170, GREEN, 3.5);
  b += arrow(620, top + 130, 740, top + 170, PINK2, 3.5);
  b += box(60, top + 175, 400, 50, 'les sunnites', GREENL, GREEN, 22);
  b += box(540, top + 175, 400, 50, 'les chiites', '#FDE7EF', PINK2, 22);
  b += txt(260, top + 258, 'suivent la sunna (tradition) ;', 20, GREEN, 'normal', 'middle');
  b += txt(260, top + 284, 'le calife choisi par la communauté', 20, GREEN, 'normal', 'middle');
  b += txt(740, top + 258, 'fidèles à Ali, gendre de Mahomet ;', 20, PINK2, 'normal', 'middle');
  b += txt(740, top + 284, 'le chef doit être de sa famille', 20, PINK2, 'normal', 'middle');
  b += txt(500, top + 330, 'cette scission du monde musulman dure encore aujourd’hui', 21, BLUE, 'bold', 'middle');
  return svg(1000, top + 362, s + b); })();

const S = [
  {
    t: 'Délimiter le Moyen-Âge et ses étapes', comp: 'Le Moyen-Âge', theme: 'La délimitation et les étapes du Moyen-Âge',
    goal: 'situer dans le temps et dans l’espace le Moyen-Âge et caractériser ses étapes',
    mat: 'Frise chronologique, carte du Moyen-Âge, textes',
    revQ: 'Quel événement met fin à l’Antiquité, et en quelle année ?',
    revRA: 'La chute de l’Empire romain d’Occident, en 476.',
    situation: 'En 476, le dernier empereur romain d’Occident est déposé : l’immense Empire s’est effondré. Sur ses ruines commence une période de mille ans que les savants de la Renaissance appelleront, avec un peu de mépris, le « Moyen » Âge — l’âge « du milieu », entre l’Antiquité et leur époque. Mille ans de châteaux, de cathédrales, de progrès et de malheurs : découvrons leur squelette.',
    def: 'Le Moyen-Âge est la période de l’Histoire comprise entre la chute de l’Empire romain d’Occident (476) et l’arrivée de Christophe Colomb en Amérique (1492). Il se divise en deux étapes : le Haut Moyen Âge (du Vᵉ au XIᵉ siècle) et le Bas Moyen Âge (du XIᵉ au XVᵉ siècle), marqué par le progrès de l’agriculture et les croisades (XIᵉ-XIIIᵉ), puis par la fin de la prospérité : la succession des malheurs et la guerre de Cent Ans (XIVᵉ-XVᵉ).',
    autrement: 'mille ans entre deux dates faciles : 476 (Rome tombe) et 1492 (Colomb traverse l’Atlantique) ; une première moitié de réorganisation, une seconde de progrès... puis de crises.',
    concept: 'Les origines du Moyen Âge tiennent dans l’éclatement de l’Empire romain : envahi par les peuples germaniques, l’Occident se morcelle en royaumes ; les villes se vident, les échanges diminuent, la société se réorganise autour des campagnes — c’est le Haut Moyen Âge (Vᵉ-XIᵉ siècle), où l’Église reste le dernier pilier hérité de Rome. Puis vient l’essor de l’Occident : le Bas Moyen Âge (XIᵉ-XVᵉ siècle). Du XIᵉ au XIIIᵉ siècle, tout progresse : la charrue à roues et les moulins augmentent les récoltes, la population double, les villes renaissent avec leurs marchés et leurs cathédrales — et l’Europe chrétienne lance les croisades, expéditions militaires et religieuses vers Jérusalem. Mais aux XIVᵉ et XVᵉ siècles, la prospérité s’achève dans une succession de malheurs : famines, Peste noire qui emporte un Européen sur trois, et la guerre de Cent Ans (1337-1453) qui ravage la France et l’Angleterre. L’espace du Moyen Âge, c’est d’abord l’Europe occidentale chrétienne — mais à ses portes vivent deux brillantes civilisations : l’Empire byzantin à l’est et, bientôt, le monde musulman au sud, que nous étudierons dans les prochaines séances.',
    synthese: 'Moyen-Âge : 476 (chute de Rome) → 1492 (Colomb) ; Haut Moyen Âge Vᵉ-XIᵉ (morcellement, réorganisation), Bas Moyen Âge XIᵉ-XVᵉ : progrès et croisades (XIᵉ-XIIIᵉ) puis malheurs et guerre de Cent Ans (XIVᵉ-XVᵉ).',
    method: ['Tracer la frise 476-1492 et placer la borne du XIᵉ siècle.', 'Nommer les deux étapes et leur caractère dominant.', 'Dans le Bas Moyen Âge, distinguer la phase de progrès (XIᵉ-XIIIᵉ) et la phase de crises (XIVᵉ-XVᵉ).'],
    exemple: 'L’an 800 est entre 476 et le XIᵉ siècle : Haut Moyen Âge. L’année 1348 (Peste noire) tombe dans la phase des malheurs du Bas Moyen Âge — la frise le montre d’un coup d’œil.',
    erreur: 'Croire que le Moyen Âge fut mille ans de ténèbres : la période a inventé les universités, les cathédrales, les moulins, les banques et les parlements. « Âge sombre » est un jugement des savants de la Renaissance — l’historien, lui, nuance.',
    saistu: 'La guerre de Cent Ans a duré... 116 ans (1337-1453) ! Entrecoupée de trêves, elle vit une jeune paysanne de dix-sept ans, Jeanne d’Arc, mener l’armée française à la victoire d’Orléans en 1429. Quant à la Peste noire, elle voyagea à la vitesse des bateaux et des caravanes : partie d’Asie, elle fit le tour de l’Europe en cinq ans à peine.',
    exos: ['Vrai ou faux ? Corrige. a) Le Moyen-Âge commence en 1492. b) Le Haut Moyen Âge va du Vᵉ au XIᵉ siècle. d) Les croisades datent des XIᵉ-XIIIᵉ siècles. e) La guerre de Cent Ans ouvre le Moyen-Âge.',
      'Les repères. a) Donne les deux bornes du Moyen-Âge et leurs événements. b) Nomme ses deux étapes. d) Situe l’an 1000 et l’an 1400 dans ces étapes. e) Cite deux malheurs des XIVᵉ-XVᵉ siècles.',
      'Comprendre. a) Pourquoi l’Empire romain laisse-t-il place au Moyen-Âge ? b) Qu’est-ce qui progresse du XIᵉ au XIIIᵉ siècle ? d) D’où vient le nom « Moyen » Âge ? e) Pourquoi ce nom est-il un peu injuste ?'],
    corr: ['a) faux : il commence en 476 et finit en 1492 ; b) vrai ; d) vrai ; e) faux : elle appartient à sa fin (1337-1453).',
      'a) 476 : chute de l’Empire romain d’Occident ; 1492 : arrivée de Colomb en Amérique ; b) Haut Moyen Âge (Vᵉ-XIᵉ) et Bas Moyen Âge (XIᵉ-XVᵉ) ; d) l’an 1000 : fin du Haut Moyen Âge ; 1400 : phase des malheurs du Bas Moyen Âge ; e) les famines, la Peste noire, la guerre de Cent Ans (deux suffisent).',
      'a) parce que l’Empire éclate sous les invasions germaniques : l’Occident se morcelle et la société se réorganise ; b) l’agriculture (charrue, moulins), la population, les villes ; d) des savants de la Renaissance : l’âge « du milieu » entre l’Antiquité et leur temps ; e) parce que la période a aussi produit universités, cathédrales et inventions — elle ne fut pas que ténèbres.'],
    fig: 'u3f1'
  },
  {
    t: 'Le système féodal', comp: 'Le Moyen-Âge', theme: 'Le fonctionnement du système féodal',
    goal: 'présenter le fonctionnement du système féodal et décrire la structure de la société féodale',
    mat: 'Textes, images et schémas sur le système féodal, dictionnaire',
    revQ: 'Donne les bornes du Moyen-Âge et ses deux grandes étapes.',
    revRA: '476-1492 ; Haut Moyen Âge (Vᵉ-XIᵉ) et Bas Moyen Âge (XIᵉ-XVᵉ).',
    situation: 'Dans la cour du château, un homme s’agenouille, place ses mains dans celles du seigneur et prononce un serment de fidélité ; en échange, il reçoit une terre. Autour d’eux, des chevaliers en armes ; au loin, des paysans courbés sur les champs du domaine. Toute la société du Moyen Âge tient dans cette scène : la féodalité.',
    def: 'La féodalité est l’organisation sociale et politique du Moyen Âge fondée sur le fief : une terre que le seigneur (ou suzerain) confie à un vassal en échange de sa fidélité et de ses services. La société féodale comprend le clergé, les seigneurs, les vassaux et chevaliers, et les paysans — serfs, attachés à la terre, et vilains, paysans libres soumis à des redevances.',
    autrement: 'au Moyen Âge, le pouvoir s’échange contre la terre : je te donne un fief, tu me dois fidélité, conseil et combat — et tout en bas, les paysans font vivre tout le monde.',
    concept: 'Pourquoi la féodalité ? Après l’éclatement de l’Empire, plus d’État fort : face aux invasions, chacun cherche un protecteur. Les rois donnent des terres aux grands seigneurs, qui en donnent à leurs vassaux : la pyramide féodale se construit, chaque étage lié au-dessus par l’hommage — la cérémonie où le vassal jure fidélité à son suzerain et reçoit le fief. Le vassal doit l’aide militaire (quarante jours de combat par an), le conseil et parfois l’argent ; le suzerain doit protection et justice. Le chevalier est le combattant à cheval de ce système : armure, destrier, adoubement — et un code d’honneur qui protège, en principe, les faibles. Le domaine seigneurial (le fief) s’organise en trois parts : la réserve, cultivée pour le seigneur ; les tenures, louées aux paysans contre redevances et corvées ; les communs — bois, prés, four, moulin et pressoir banaux, que les paysans paient pour utiliser. Les serfs appartiennent à la terre : ils ne peuvent la quitter ni se marier sans permission ; les vilains, libres, n’en paient pas moins impôts et corvées. Le clergé, lui, traverse la pyramide : il prie pour tous — la société médiévale se pense en trois ordres : ceux qui prient, ceux qui combattent, ceux qui travaillent.',
    synthese: 'féodalité = pouvoir fondé sur le fief ; hommage : fidélité et services contre terre et protection ; pyramide : roi suzerain → seigneurs → vassaux et chevaliers → paysans (serfs attachés à la terre, vilains libres mais taxés) ; trois ordres : prier, combattre, travailler.',
    method: ['Définir les mots-clés : fief, suzerain, vassal, hommage, serf, vilain.', 'Dessiner la pyramide féodale et placer chaque groupe.', 'Expliquer l’échange : ce que donne le suzerain, ce que doit le vassal.'],
    exemple: 'Le comte reçoit du roi un vaste fief : il est vassal du roi. Il en confie une partie au chevalier Renaud, qui lui prête hommage : Renaud est vassal du comte, et le comte est son suzerain — le même homme est vassal de l’un et suzerain de l’autre.',
    erreur: 'Croire que serf = esclave : le serf n’est pas une marchandise ; il a une famille, une tenure, des droits reconnus — mais il est attaché à la terre et la suit quand elle change de seigneur. Une dépendance, pas une propriété.',
    saistu: 'L’adoubement du chevalier était tout un spectacle : veillée d’armes en prière, bain rituel, remise de l’épée et... la colée, une vigoureuse tape sur la nuque — la seule gifle que le chevalier devait recevoir sans jamais la rendre ! Quant au mot « vilain », il désignait simplement l’habitant de la villa (le domaine) : c’est plus tard qu’il est devenu une insulte.',
    exos: ['Qui suis-je ? a) Je reçois un fief contre mon hommage. b) Je suis attaché à la terre que je cultive. d) Je confie un fief et protège mon homme. e) Je suis paysan libre mais je paie redevances et corvées.',
      'Le vocabulaire. a) Définis le fief. b) Décris la cérémonie de l’hommage. d) Cite deux devoirs du vassal. e) Cite deux devoirs du suzerain.',
      'La société. a) Dessine la pyramide féodale avec ses quatre niveaux. b) Quels sont les trois ordres de la société médiévale ? d) Explique la différence entre serf et vilain. e) Pourquoi la féodalité apparaît-elle après la chute de l’Empire romain ?'],
    corr: ['a) le vassal ; b) le serf ; d) le suzerain (ou seigneur) ; e) le vilain.',
      'a) la terre confiée par un suzerain à son vassal en échange de fidélité et de services ; b) le vassal s’agenouille, met ses mains dans celles du suzerain, jure fidélité et reçoit le fief ; d) l’aide militaire et le conseil (aussi : l’aide financière) ; e) la protection et la justice.',
      'a) roi → seigneurs → vassaux et chevaliers → paysans ; b) ceux qui prient (clergé), ceux qui combattent (seigneurs, chevaliers), ceux qui travaillent (paysans) ; d) le serf est attaché à la terre, le vilain est libre mais paie redevances et corvées ; e) parce que sans État fort, chacun cherche protection auprès d’un seigneur : le pouvoir s’organise autour de la terre.'],
    fig: 'u3f2'
  },
  {
    t: 'La place de l’Église dans la société médiévale', comp: 'Le Moyen-Âge', theme: 'La place de l’Église au sein de la société médiévale',
    goal: 'faire ressortir la place de l’Église au sein de la société médiévale : organisation et rôles',
    mat: 'Textes, images, schémas sur l’Église au Moyen-Âge',
    revQ: 'Décris la pyramide féodale et définis le fief.',
    revRA: 'Roi → seigneurs → vassaux, chevaliers → paysans ; fief : terre confiée contre fidélité et services.',
    situation: 'Du premier cri au dernier soupir, le médiéval vit au rythme de l’Église : baptisé à la naissance, marié devant le curé, enterré près du clocher ; les cloches découpent ses journées, les fêtes religieuses son année ; même le calme de son village dépend de la « paix de Dieu ». Comment une institution a-t-elle pu occuper une telle place ?',
    def: 'L’Église au Moyen Âge est organisée en une hiérarchie dirigée par le pape, assisté des cardinaux ; elle comprend le clergé séculier — évêques et curés, qui vivent au milieu des fidèles — et le clergé régulier — abbés et moines, qui vivent dans les monastères selon une règle. Elle domine la vie de chacun de la naissance à la mort et joue des rôles d’assistance, un rôle culturel, un rôle économique (la dîme, la vente d’indulgences) et un rôle socio-politique, dont les croisades.',
    autrement: 'une seule institution accompagne toute la vie, soigne, enseigne, prélève l’impôt et pèse sur rois et seigneurs : au Moyen Âge, l’Église est partout.',
    concept: 'L’organisation d’abord : héritée de l’Empire romain, elle est la seule structure qui ait survécu à sa chute. Au sommet, le pape, évêque de Rome ; les cardinaux l’élisent et le conseillent. Le clergé séculier (du latin saeculum, « le siècle », le monde) vit parmi les fidèles : l’évêque dirige un diocèse depuis sa cathédrale, le curé anime la paroisse. Le clergé régulier (de regula, « la règle ») s’est retiré du monde : dans les monastères, les moines, sous l’autorité de l’abbé, partagent leur journée entre prière et travail. Les rôles ensuite. L’assistance : hôpitaux (les « hôtels-Dieu »), secours aux pauvres, hospitalité aux voyageurs. Le rôle culturel : les moines copistes recopient à la main les manuscrits antiques — sans eux, presque tous les textes anciens seraient perdus ; les écoles des monastères et des cathédrales deviendront les universités. Le rôle économique : l’Église possède d’immenses terres et prélève la dîme, environ un dixième des récoltes ; elle vend aussi des indulgences — des remises de peine pour les péchés, pratique qui provoquera plus tard de vives contestations. Le rôle socio-politique enfin : l’Église sacre les rois, impose des trêves aux guerriers... et lance les croisades, ces expéditions armées vers Jérusalem (1096-1270), mélange de foi, de conquête et de commerce, qui mettent l’Occident en contact avec le monde musulman — pour le pire des guerres et le meilleur des échanges.',
    synthese: 'organisation : pape et cardinaux ; clergé séculier (évêques, curés, parmi les fidèles) et régulier (abbés, moines, dans les monastères) ; rôles : assistance (hôpitaux), culture (copistes, écoles), économie (dîme, indulgences), socio-politique (sacres, croisades) ; l’Église domine la vie de la naissance à la mort.',
    method: ['Dessiner l’organigramme : pape → cardinaux → deux clergés.', 'Distinguer séculier (dans le monde) et régulier (sous une règle, au monastère).', 'Classer les rôles en quatre rubriques : assistance, culture, économie, socio-politique.'],
    exemple: 'Un moine copiant un manuscrit dans un monastère : clergé régulier, rôle culturel. Un curé baptisant un nouveau-né dans sa paroisse : clergé séculier, rôle social. La dîme prélevée sur la récolte : rôle économique.',
    erreur: 'Confondre les deux clergés : le curé n’est pas un moine ! Le séculier vit dans le siècle, au contact des fidèles ; le régulier suit une règle au monastère. Le mot lui-même fait la différence.',
    saistu: 'Pour copier une seule Bible, un moine copiste travaillait parfois plus de deux ans, et il fallait les peaux de deux cents moutons pour fabriquer le parchemin ! Les plus beaux manuscrits, ornés d’or et de couleurs, sont appelés « enluminés » — de lumen, la lumière. Beaucoup de textes grecs et latins que tu étudieras ne nous sont parvenus que grâce à ces patients copistes.',
    exos: ['Séculier ou régulier ? a) Le curé du village. b) L’abbé du monastère. d) L’évêque dans sa cathédrale. e) Le moine copiste.',
      'L’organisation. a) Qui dirige l’Église ? b) Qui l’assiste et l’élit ? d) Donne l’origine des mots « séculier » et « régulier ». e) Où vivent les moines et sous quelle autorité ?',
      'Les rôles. a) Cite deux formes d’assistance de l’Église. b) Explique le rôle culturel des copistes. d) Que sont la dîme et les indulgences ? e) Que sont les croisades, et quelle double conséquence ont-elles eue ?'],
    corr: ['a) séculier ; b) régulier ; d) séculier ; e) régulier.',
      'a) le pape ; b) les cardinaux ; d) saeculum « le siècle, le monde » ; regula « la règle » ; e) dans les monastères, sous l’autorité de l’abbé.',
      'a) les hôpitaux et le secours aux pauvres (aussi : l’hospitalité aux voyageurs) ; b) en recopiant les manuscrits, ils ont sauvé les textes antiques et préparé les universités ; d) la dîme : un dixième des récoltes versé à l’Église ; les indulgences : des remises de peine pour les péchés, vendues aux fidèles ; e) des expéditions militaires et religieuses vers Jérusalem (1096-1270) : des guerres, mais aussi des échanges avec le monde musulman.'],
    fig: 'u3f3'
  },
  {
    t: 'La naissance de l’Islam', comp: 'Le Moyen-Âge', theme: 'La naissance de l’Islam et la civilisation musulmane',
    goal: 'comprendre la naissance de l’Islam, ses cinq piliers et la civilisation musulmane',
    mat: 'Carte de l’Arabie, frise chronologique, textes et images',
    revQ: 'Distingue clergé séculier et clergé régulier avec un exemple de chaque.',
    revRA: 'Séculier : parmi les fidèles (curé, évêque) ; régulier : au monastère sous une règle (moine, abbé).',
    situation: 'Au VIIᵉ siècle, pendant que l’Occident vit à l’heure féodale, une péninsule de déserts et de caravanes bascule : à La Mecque, ville marchande d’Arabie, un homme nommé Mahomet annonce qu’il a reçu un message divin. En moins d’un siècle, ce message deviendra une religion, un empire et une brillante civilisation — la troisième grande religion monothéiste est née.',
    def: 'L’Islam est la religion monothéiste fondée au VIIᵉ siècle en Arabie par Mahomet, qui déclare avoir reçu la parole de Dieu (Allah), recueillie dans le Coran, livre sacré des musulmans. Le croyant observe les cinq piliers de l’Islam : la profession de foi (chahâda), les cinq prières quotidiennes, le jeûne du mois de Ramadan, l’aumône (zakat) et le pèlerinage à La Mecque (hadj). La mosquée est le lieu de prière, et le Coran préconise des règles de vie quotidienne.',
    autrement: 'un prophète, un livre, cinq obligations : l’Islam organise la foi et la vie quotidienne du croyant — prière, partage, jeûne, pèlerinage.',
    concept: 'L’Arabie d’abord : une péninsule désertique entre l’Afrique et l’Asie, parcourue de caravanes ; La Mecque, carrefour marchand et sanctuaire. Mahomet y naît vers 570 : caravanier réputé honnête, il déclare vers 610 recevoir la révélation divine ; chassé par les marchands mecquois, il se réfugie à Médine en 622 — l’Hégire, départ du calendrier musulman — puis revient en vainqueur : à sa mort en 632, l’Arabie est unie sous l’Islam. Le Coran, parole de Dieu pour les musulmans, se complète de la sunna, la tradition du prophète. Les cinq piliers structurent la foi : dire la chahâda, prier cinq fois par jour tourné vers La Mecque, jeûner du lever au coucher du soleil pendant le Ramadan, donner la zakat aux pauvres, accomplir si possible le hadj. Le Coran règle aussi la vie quotidienne : interdits alimentaires, habillement, place de la femme, entraide. La civilisation musulmane rayonne vite : villes immenses — Bagdad, Cordoue — aux mosquées ornées de mosaïques et de calligraphies (l’art d’écrire devient décoration, car on ne représente pas Dieu) ; commerce des épices et de la soie ; savants traducteurs des Grecs, inventeurs de l’algèbre, médecins et astronomes réputés. Comme le judaïsme et le christianisme, l’Islam est monothéiste : trois religions d’un Dieu unique, nées dans la même région, dont les relations traverseront toute l’Histoire.',
    synthese: 'Islam : religion monothéiste née en Arabie au VIIᵉ siècle ; Mahomet (570-632), révélation, Hégire 622, Coran ; cinq piliers : chahâda, prière, Ramadan, zakat, hadj ; mosquées, règles de vie ; civilisation brillante : villes, commerce, sciences, arts.',
    method: ['Situer l’Arabie et La Mecque sur la carte.', 'Retenir la biographie de Mahomet par trois dates : 570, 622 (Hégire), 632.', 'Réciter les cinq piliers et citer deux traits de la civilisation musulmane.'],
    exemple: 'Comparer les monothéismes : judaïsme (le plus ancien), christianisme (Ier siècle), Islam (VIIᵉ siècle) — trois religions d’un Dieu unique nées au Proche-Orient, à placer sur une même frise.',
    erreur: 'Confondre « arabe » et « musulman » : arabe désigne une langue et un peuple, musulman un croyant de l’Islam. Il existe des Arabes chrétiens et d’immenses pays musulmans non arabes — l’Indonésie, premier pays musulman du monde, est en Asie du Sud-Est.',
    saistu: 'Le calendrier musulman commence en 622, l’année de l’Hégire — et il suit la Lune, non le Soleil : ses années durent onze jours de moins que les nôtres, si bien que le mois de Ramadan « voyage » à travers les saisons ! Et des mots français comme « algèbre », « chiffre », « sucre », « coton » ou « magasin » viennent de l’arabe : la civilisation musulmane vit jusque dans notre vocabulaire.',
    exos: ['Les piliers. Associe chaque pilier à sa définition : a) chahâda ; b) zakat ; d) hadj ; e) Ramadan.',
      'Repères. a) Où et quand naît l’Islam ? b) Qu’est-ce que le Coran ? d) Que s’est-il passé en 622 ? e) Qu’est-ce qu’une mosquée ?',
      'La civilisation. a) Cite deux grandes villes du monde musulman médiéval. b) Cite deux domaines scientifiques où ses savants ont brillé. d) Pourquoi la calligraphie est-elle un grand art musulman ? e) Cite les trois religions monothéistes dans l’ordre d’apparition.'],
    corr: ['a) la profession de foi ; b) l’aumône aux pauvres ; d) le pèlerinage à La Mecque ; e) le jeûne d’un mois.',
      'a) en Arabie, au VIIᵉ siècle ; b) le livre sacré des musulmans, parole de Dieu révélée à Mahomet ; d) l’Hégire : Mahomet quitte La Mecque pour Médine — départ du calendrier musulman ; e) le lieu de prière des musulmans.',
      'a) Bagdad et Cordoue ; b) l’algèbre (mathématiques), la médecine, l’astronomie (deux suffisent) ; d) parce qu’on ne représente pas Dieu : l’écriture ornée devient la grande décoration ; e) judaïsme, christianisme, Islam.'],
    fig: 'u3f4'
  },
  {
    t: 'Les conquêtes musulmanes', comp: 'Le Moyen-Âge', theme: 'Les étapes des conquêtes musulmanes',
    goal: 'déterminer les étapes des conquêtes musulmanes et localiser l’expansion de l’Islam jusqu’en 750',
    mat: 'Carte des conquêtes musulmanes, frise chronologique, textes',
    revQ: 'Cite les cinq piliers de l’Islam.',
    revRA: 'Chahâda, les cinq prières quotidiennes, le jeûne du Ramadan, la zakat, le hadj.',
    situation: 'En 632, l’Islam ne dépasse pas l’Arabie. En 750 — à peine plus d’un siècle — son empire s’étend de l’Espagne aux portes de l’Inde : plus vaste que l’Empire romain, conquis en huit fois moins de temps. Comment une expansion aussi fulgurante fut-elle possible, et où s’est-elle arrêtée ?',
    def: 'Les conquêtes musulmanes sont l’expansion de l’Islam après la mort de Mahomet. Elles se déroulent en trois étapes : au temps de Mahomet (630-632), l’Arabie est unifiée ; sous les quatre premiers califes (632-656), la Syrie, l’Égypte et la Perse sont conquises ; sous les califes omeyyades (661-750), l’empire s’étend de l’Espagne à l’Indus. Le calife, « successeur » de Mahomet, est à la fois chef religieux et chef politique.',
    autrement: 'trois vagues en un siècle : l’Arabie unie, puis le Proche-Orient et l’Égypte, puis un empire sur trois continents — dirigé par les califes, héritiers du prophète.',
    concept: 'Première étape (630-632) : Mahomet lui-même unit les tribus d’Arabie autour de l’Islam — à sa mort, la péninsule entière prie vers La Mecque. Deuxième étape (632-656) : les quatre premiers califes, compagnons du prophète, lancent les armées arabes hors d’Arabie ; les deux grands empires voisins, byzantin et perse, épuisés par leurs guerres mutuelles, cèdent : la Syrie tombe, puis l’Égypte, puis toute la Perse. Troisième étape (661-750) : la dynastie des Omeyyades, installée à Damas, pousse l’expansion aux deux bouts du monde connu — à l’ouest, l’Afrique du Nord puis l’Espagne (711) ; à l’est, jusqu’au fleuve Indus. Les limites : à l’ouest, les Francs arrêtent une expédition à Poitiers en 732 ; à l’est, les montagnes et les distances ; Constantinople, assiégée deux fois, résiste derrière ses murailles. Pourquoi si vite ? Des armées mobiles et motivées, des adversaires affaiblis, et une administration souple : les peuples conquis, « gens du Livre », gardent leur religion contre un impôt — beaucoup se convertissent peu à peu, sans contrainte massive. Sur la carte, l’empire de 750 couvre trois continents : Asie, Afrique, Europe — et la Méditerranée, jadis « lac romain », est désormais partagée entre trois civilisations : l’Occident chrétien, Byzance et l’Islam.',
    synthese: 'trois étapes : Mahomet 630-632 (Arabie) ; quatre premiers califes 632-656 (Syrie, Égypte, Perse) ; Omeyyades 661-750 (de l’Espagne à l’Indus) ; calife = successeur, chef religieux et politique ; limites : Poitiers 732, Constantinople ; un empire sur trois continents.',
    method: ['Tracer la frise des trois étapes avec leurs dates.', 'Colorier sur la carte les trois vagues d’expansion.', 'Expliquer la rapidité : armées mobiles, empires voisins affaiblis, tolérance envers les « gens du Livre ».'],
    exemple: 'L’Espagne est conquise en 711 : 711 est entre 661 et 750 — c’est l’œuvre des Omeyyades, troisième étape. La Perse tombe avant 656 : deuxième étape, celle des quatre premiers califes.',
    erreur: 'Croire que les peuples conquis furent tous convertis de force : chrétiens et juifs, « gens du Livre », conservèrent leur religion moyennant un impôt. L’islamisation des populations fut progressive et s’étala sur des siècles.',
    saistu: 'Damas, capitale des Omeyyades, puis Bagdad, fondée en 762, devinrent les plus grandes villes du monde de leur temps — Bagdad aurait dépassé le million d’habitants quand Paris n’était qu’une bourgade ! Sa « Maison de la sagesse » rassemblait traducteurs et savants : les textes de Platon et d’Aristote y furent sauvés... avant de revenir en Europe par l’Espagne musulmane.',
    exos: ['Associe chaque conquête à son étape : a) l’unification de l’Arabie ; b) l’Égypte et la Perse ; d) l’Espagne ; e) la Syrie.',
      'Repères. a) Qu’est-ce qu’un calife ? b) Donne les dates des trois étapes. d) Où l’expansion s’arrête-t-elle à l’ouest, et quand ? e) Sur quels continents l’empire s’étend-il en 750 ?',
      'Analyse. a) Cite deux raisons de la rapidité des conquêtes. b) Que deviennent les religions des peuples conquis ? d) Compare l’empire musulman de 750 et l’Empire romain (taille, durée de formation). e) Pourquoi la Méditerranée n’est-elle plus un « lac romain » ?'],
    corr: ['a) au temps de Mahomet (630-632) ; b) sous les quatre premiers califes (632-656) ; d) sous les Omeyyades (661-750, en 711) ; e) sous les quatre premiers califes (632-656).',
      'a) le successeur de Mahomet, chef religieux et politique ; b) 630-632 ; 632-656 ; 661-750 ; d) à Poitiers, en 732, face aux Francs ; e) Asie, Afrique et Europe.',
      'a) armées mobiles et motivées ; empires byzantin et perse épuisés ; administration souple envers les conquis (deux suffisent) ; b) chrétiens et juifs, « gens du Livre », les conservent contre un impôt ; d) plus vaste que l’Empire romain, formé en un siècle au lieu de plusieurs ; e) parce qu’elle est désormais partagée entre l’Occident chrétien, Byzance et l’Islam.'],
    fig: 'u3f5'
  },
  {
    t: 'La division de l’Islam au VIIᵉ siècle', comp: 'Le Moyen-Âge', theme: 'Les raisons de la division de l’Islam',
    goal: 'analyser les causes et les conséquences de la division de l’Islam au VIIᵉ siècle',
    mat: 'Textes, carte du monde musulman, frise chronologique',
    revQ: 'Cite les trois étapes des conquêtes musulmanes avec leurs dates.',
    revRA: 'Mahomet 630-632 ; quatre premiers califes 632-656 ; Omeyyades 661-750.',
    situation: 'Un empire immense, une religion jeune et conquérante... et pourtant, au cœur même du VIIᵉ siècle, une question déchire les croyants : qui a le droit de succéder au prophète ? De cette querelle naîtra une division que quatorze siècles n’ont pas refermée — la scission entre sunnites et chiites.',
    def: 'La division de l’Islam au VIIᵉ siècle a pour cause le problème de la succession de Mahomet, mort en 632 sans avoir désigné d’héritier : une guerre civile éclate entre les partisans d’Ali, gendre du prophète, et leurs adversaires. Sa conséquence est la scission du monde musulman en deux groupes : les sunnites, fidèles à la sunna (tradition) et au calife choisi par la communauté, et les chiites, pour qui le chef doit appartenir à la famille du prophète. Cette division dure encore aujourd’hui.',
    autrement: 'tout part d’une question de succession : famille du prophète ou choix de la communauté ? Deux réponses, deux branches — sunnites et chiites — et une fracture toujours vivante.',
    concept: 'Les causes : Mahomet meurt en 632 sans fils survivant ni successeur désigné. Les premiers califes sont choisis parmi ses compagnons — mais les partisans d’Ali, cousin et gendre du prophète, époux de sa fille Fatima, estiment que la direction des croyants revient à sa famille. Ali devient bien le quatrième calife (656), mais son autorité est contestée par le gouverneur de Syrie, Muawiya : c’est la guerre civile — la fitna, « l’épreuve ». Ali est assassiné en 661 ; Muawiya fonde la dynastie omeyyade ; et en 680, Hussein, fils d’Ali, est tué avec les siens à Kerbala — le martyre fondateur de la mémoire chiite. Les conséquences : l’unité religieuse est brisée. Les sunnites — aujourd’hui la grande majorité des musulmans — suivent la sunna et acceptent le calife choisi par la communauté ; les chiites ne reconnaissent que les descendants d’Ali, leurs imams, et cultivent la mémoire de Kerbala ; d’autres branches minoritaires apparaîtront. Au fil des siècles, la division devient aussi politique : des dynasties rivales s’en réclament, jusqu’aux tensions actuelles entre certains États. L’historien y lit une leçon générale : dans les sociétés humaines, les questions de succession et de pouvoir peuvent diviser même ce que la foi unit — comprendre l’origine d’un conflit, c’est déjà refuser ses caricatures.',
    synthese: 'cause : succession de Mahomet non réglée → guerre civile autour d’Ali (656-661) ; conséquence : scission durable — sunnites (sunna, calife choisi, majorité actuelle) / chiites (famille du prophète, imams, mémoire de Kerbala) ; la division, devenue aussi politique, persiste aujourd’hui.',
    method: ['Identifier la cause : le problème de succession (famille ou communauté ?).', 'Raconter l’enchaînement : califat d’Ali → guerre civile → assassinat → Kerbala.', 'Présenter les deux branches et leur situation actuelle sans caricature.'],
    exemple: 'Schéma causes-conséquences : mort de Mahomet (632) → querelle de succession → guerre civile (656-661) → scission sunnites/chiites → rivalités politiques jusqu’à nos jours — un enchaînement typique que l’historien sait reconstituer.',
    erreur: 'Croire que sunnites et chiites ont des religions différentes : ils partagent le Coran, les cinq piliers et la foi en un Dieu unique ; leur désaccord d’origine porte sur la direction de la communauté, pas sur l’essentiel de la foi.',
    saistu: 'Les musulmans arrivèrent à Madagascar dès le Moyen Âge : commerçants et navigateurs islamisés fondèrent des comptoirs sur les côtes — et les manuscrits sorabe, qui écrivent la langue malgache en caractères arabes, en sont l’héritage direct. Les devins-astrologues du Sud-Est, les Antemoro, ont conservé ce savoir des siècles durant : tu l’étudieras de près dans les prochaines unités !',
    exos: ['La chronologie. Range dans l’ordre : a) l’assassinat d’Ali ; b) la mort de Mahomet ; d) le drame de Kerbala ; e) le califat d’Ali.',
      'Causes et conséquences. a) Quelle est la cause profonde de la division ? b) Qui sont les partisans d’Ali ? d) Qu’est-ce que la sunna ? e) Quelle est la conséquence durable de la guerre civile ?',
      'Comprendre. a) Que partagent sunnites et chiites ? b) Sur quoi portait leur désaccord d’origine ? d) Comment la division est-elle devenue politique ? e) Pourquoi l’historien étudie-t-il l’origine des conflits ?'],
    corr: ['Ordre : b (632), e (656), a (661), d (680).',
      'a) le problème de la succession de Mahomet, mort sans héritier désigné ; b) ceux qui estiment que la direction revient à la famille du prophète — les futurs chiites ; d) la tradition du prophète, suivie par les sunnites ; e) la scission du monde musulman en sunnites et chiites, qui dure encore.',
      'a) le Coran, les cinq piliers, la foi en un Dieu unique ; b) sur la direction de la communauté : famille du prophète ou choix de la communauté ; d) des dynasties puis des États rivaux se sont réclamés de chaque branche ; e) parce que comprendre l’origine d’un conflit permet d’en refuser les caricatures et d’analyser le présent.'],
    fig: 'u3f6'
  }
];

const unit3 = {
  no: 3, roman: 'III', name: 'Le Moyen-Âge',
  rag: 'caractériser la période du Moyen-Âge, exploiter des traces du passé et interpréter les réalités sociales des civilisations médiévales.',
  valeurs: 'esprit d’analyse et de critique',
  sessions: S,
  revision: {
    table: [
      ['Le Moyen-Âge', '476 (chute de Rome) → 1492 (Colomb) ; Haut (Vᵉ-XIᵉ) et Bas Moyen Âge (XIᵉ-XVᵉ)', 'Délimiter et caractériser les étapes'],
      ['Féodalité', 'Fief contre fidélité ; suzerain, vassal, hommage ; serfs et vilains', 'Présenter le système féodal'],
      ['L’Église', 'Pape, cardinaux ; clergé séculier et régulier ; dîme, indulgences, croisades', 'Faire ressortir sa place dans la société'],
      ['L’Islam', 'Arabie, VIIᵉ s. ; Mahomet, Coran, Hégire 622 ; cinq piliers ; civilisation brillante', 'Comprendre la naissance de l’Islam'],
      ['Conquêtes', '630-632 Arabie ; 632-656 Syrie-Égypte-Perse ; 661-750 Espagne-Indus', 'Déterminer les étapes de l’expansion'],
      ['Division', 'Succession de Mahomet → guerre civile → sunnites / chiites, scission durable', 'Analyser causes et conséquences']
    ],
    questions: [
      'Trace la frise du Moyen-Âge : bornes, étapes, phase de progrès et phase de malheurs.',
      'Explique l’hommage et la pyramide féodale ; distingue serf et vilain.',
      'Présente l’organisation de l’Église et ses quatre rôles.',
      'Raconte la naissance de l’Islam avec trois dates et récite les cinq piliers.',
      'Range les trois étapes des conquêtes et explique la scission sunnites/chiites.'
    ],
    answers: [
      '476-1492 ; Haut Moyen Âge Vᵉ-XIᵉ, Bas XIᵉ-XVᵉ : progrès et croisades XIᵉ-XIIIᵉ, malheurs et guerre de Cent Ans XIVᵉ-XVᵉ.',
      'Le vassal jure fidélité et reçoit un fief de son suzerain ; roi → seigneurs → vassaux → paysans ; serf attaché à la terre, vilain libre mais taxé.',
      'Pape et cardinaux ; clergé séculier (évêques, curés) et régulier (abbés, moines) ; assistance, culture, économie (dîme, indulgences), socio-politique (croisades).',
      '570 naissance de Mahomet, 622 Hégire, 632 sa mort ; chahâda, prière, Ramadan, zakat, hadj.',
      'Mahomet 630-632 ; quatre califes 632-656 ; Omeyyades 661-750 ; succession contestée → sunnites (communauté) contre chiites (famille d’Ali).'
    ]
  },
  exam: {
    exos: [
      'Questions de cours. a) Délimite le Moyen-Âge dans le temps. b) Définis la féodalité. d) Cite les cinq piliers de l’Islam. e) Qu’est-ce qu’un calife ?',
      'La société féodale. Un document montre un chevalier agenouillé devant un seigneur. a) Nomme la cérémonie. b) Que reçoit le chevalier et que doit-il en échange ? d) Place clergé, seigneurs et paysans dans les trois ordres. e) Distingue serf et vilain.',
      'L’Église. a) Présente l’organisation de l’Église (organigramme). b) Distingue les deux clergés avec un exemple chacun. d) Explique la dîme et les indulgences. e) Montre que l’Église domine la vie « de la naissance à la mort ».',
      'L’Islam et son expansion. a) Situe la naissance de l’Islam dans le temps et l’espace. b) Que s’est-il passé en 622 ? d) Range les trois étapes des conquêtes avec leurs dates. e) Explique pourquoi l’expansion fut si rapide (deux raisons).',
      'Analyse : la division de l’Islam. a) Expose la cause de la guerre civile du VIIᵉ siècle. b) Présente les deux branches issues de la scission. d) Que partagent-elles malgré tout ? e) Conclus en deux phrases : que nous apprend cette histoire sur les conflits de succession ?'
    ],
    corr: [
      'a) de 476 (chute de l’Empire romain d’Occident) à 1492 (arrivée de Colomb en Amérique) ; b) l’organisation fondée sur le fief : terre confiée par un suzerain à un vassal contre fidélité et services ; d) chahâda, cinq prières, jeûne du Ramadan, zakat, hadj ; e) le successeur de Mahomet, chef religieux et politique. Un point par item.',
      'a) l’hommage ; b) il reçoit un fief ; il doit fidélité, aide militaire et conseil ; d) clergé : ceux qui prient ; seigneurs et chevaliers : ceux qui combattent ; paysans : ceux qui travaillent ; e) le serf est attaché à la terre ; le vilain est libre mais paie redevances et corvées. Un point par item.',
      'a) pape → cardinaux → clergé séculier et clergé régulier ; b) séculier : curé, évêque, parmi les fidèles ; régulier : moine, abbé, au monastère ; d) dîme : un dixième des récoltes ; indulgences : remises de peine vendues aux fidèles ; e) baptême à la naissance, mariage, funérailles — et cloches, fêtes et écoles entre les deux. Un point par item.',
      'a) en Arabie, au VIIᵉ siècle ; b) l’Hégire : départ de Mahomet vers Médine, début du calendrier musulman ; d) 630-632 Arabie ; 632-656 Syrie, Égypte, Perse ; 661-750 de l’Espagne à l’Indus ; e) armées mobiles, empires voisins épuisés, tolérance envers les « gens du Livre » (deux suffisent). Un point par item.',
      'a) la succession de Mahomet, mort sans héritier désigné : partisans d’Ali contre califes choisis par la communauté ; b) sunnites : sunna et calife choisi ; chiites : chefs issus de la famille du prophète ; d) le Coran, les cinq piliers, la foi monothéiste ; e) réponse libre — les querelles de pouvoir peuvent diviser durablement même ce que la foi ou la loi unit ; comprendre l’origine permet de dépasser les caricatures. Un point par item.'
    ]
  }
};

(async () => {
  const bufs = await L.render(figs);
  await buildUnit(unit3, bufs);
})();
