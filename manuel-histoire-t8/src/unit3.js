// UNITÉ 3 — L'ÉPOQUE CONTEMPORAINE (PE T8) : 5 séances + révision + examen
const L = require('./figlib');
const { buildUnit } = require('./engine');
const { head, svg, txt, nline, dot, tableEl, box, arrow, seg, circle, poly, PINK, PINK2, GREEN, GREENL, BLUE, BLUEL, OCRE } = L;

const figs = {};
// S1 — la société des trois ordres
figs.u3f1 = (() => { const { s, y } = head('L’Ancien Régime : la société des trois ordres', ['Une pyramide inégalitaire, sous un roi absolu.']);
  const top = y + 20;
  let b = box(350, top, 300, 56, 'LE ROI ABSOLU', '#FDE7EF', PINK2, 24);
  b += arrow(500, top + 56, 500, top + 86, OCRE, 4);
  const ordres = [['CLERGÉ', 'prie — privilégié, ne paie pas d’impôts', GREENL, GREEN],
    ['NOBLESSE', 'combat — privilégiée, perçoit des droits', BLUEL, BLUE],
    ['TIERS ÉTAT', 'travaille — paie tous les impôts (97 % du peuple)', '#FDE7EF', PINK2]];
  ordres.forEach(([n, d, f, c], i) => {
    const Y = top + 95 + i * 90;
    b += box(120, Y, 240, 60, n, f, c, 23);
    b += txt(390, Y + 38, d, 21, '#333');
  });
  const yb = top + 95 + 3 * 90 + 15;
  b += txt(500, yb, 'agriculture traditionnelle, régime seigneurial, poids de l’Église', 21, '#333', 'normal', 'middle');
  b += txt(500, yb + 34, 'exception : l’Angleterre pratique le parlementarisme', 22, GREEN, 'bold', 'middle');
  return svg(1000, yb + 66, s + b); })();
// S2 — tableau des Lumières
figs.u3f2 = (() => { const { s, y } = head('Savants et philosophes des Lumières', ['Chaque nom, une idée ou une découverte.']);
  const top = y + 15;
  const data = [['Personnage', 'Apport'],
    ['Lavoisier (savant)', 'composition de l’air'],
    ['Franklin (savant)', 'le paratonnerre'],
    ['Montesquieu', 'séparation des pouvoirs'],
    ['Voltaire', 'la tolérance'],
    ['Rousseau', 'la volonté du peuple'],
    ['Kant', 'la raison'],
    ['Diderot', 'l’Encyclopédie']];
  let b = tableEl(110, top, [390, 390], 52, data);
  b += txt(500, top + 8 * 52 + 38, 'la raison contre les abus : l’absolutisme est contesté', 22, PINK2, 'bold', 'middle');
  return svg(1000, top + 8 * 52 + 70, s + b); })();
// S3 — frise de la Révolution française
figs.u3f3 = (() => { const { s, y } = head('1789 : la Révolution française', ['De la Bastille à la République : l’enchaînement des faits.']);
  const top = y + 12;
  const ev = [['14 juillet 1789', 'prise de la Bastille', '#FDE7EF', PINK2],
    ['1789', 'Assemblée constituante', BLUEL, BLUE],
    ['août 1789', 'abolition des privilèges : fin de l’Ancien Régime', GREENL, GREEN],
    ['1789', 'Déclaration des droits de l’Homme et du citoyen', BLUEL, BLUE],
    ['1792', 'proclamation de la République', '#FDE7EF', PINK2],
    ['1792-1796', 'premières années de la République', GREENL, GREEN]];
  let b = '';
  ev.forEach(([d, t, f, c], i) => {
    const Y = top + i * 72;
    b += box(70, Y, 250, 54, d, f, c, 22);
    b += arrow(320, Y + 27, 358, Y + 27, OCRE, 3.5);
    b += box(363, Y, 570, 54, t, '#FFFFFF', c, 20);
  });
  b += txt(500, top + 6 * 72 + 22, 'et en Amérique : 13 colonies → guerre d’indépendance → États-Unis', 21, OCRE, 'bold', 'middle');
  return svg(1000, top + 6 * 72 + 54, s + b); })();
// S4 — les deux révolutions industrielles
figs.u3f4 = (() => { const { s, y } = head('Les deux révolutions industrielles', ['Énergies, machines, organisation : comparaison.']);
  const top = y + 15;
  const data = [['', '1ʳᵉ révolution', '2ᵉ révolution'],
    ['période', 'mi-XVIIIᵉ – mi-XIXᵉ', '1850 – 1914'],
    ['berceau', 'Grande-Bretagne', 'Europe, États-Unis'],
    ['énergies', 'charbon, vapeur', 'pétrole, électricité'],
    ['machines', 'machine à vapeur', 'moteur à explosion'],
    ['transport', 'la locomotive', 'automobile, tramway'],
    ['travail', 'ateliers, usines', 'taylorisme, fordisme']];
  let b = tableEl(50, top, [190, 355, 355], 54, data);
  b += txt(500, top + 7 * 54 + 40, 'le monde passe de l’atelier à la grande usine', 22, GREEN, 'bold', 'middle');
  return svg(1000, top + 7 * 54 + 72, s + b); })();
// S5 — les empires coloniaux et Madagascar
figs.u3f5 = (() => { const { s, y } = head('Le partage colonial du monde', ['De Berlin 1885 à la convention de Zanzibar : la course aux colonies.']);
  const top = y + 15;
  const steps = [['fin XIXᵉ s.', 'émigration européenne et course aux colonies', GREENL, GREEN],
    ['1885', 'conférence de Berlin : règles du partage de l’Afrique', BLUEL, BLUE],
    ['puissances', 'Royaume-Uni, France, Allemagne, Portugal…', '#FDE7EF', PINK2],
    ['1890', 'convention de Zanzibar', BLUEL, BLUE]];
  let b = '';
  steps.forEach(([d, t, f, c], i) => {
    const Y = top + i * 74;
    b += box(70, Y, 230, 56, d, f, c, 22);
    b += arrow(300, Y + 28, 338, Y + 28, OCRE, 3.5);
    b += box(343, Y, 590, 56, t, '#FFFFFF', c, 20);
  });
  const yb = top + 4 * 74 + 14;
  b += box(130, yb, 740, 64, 'le Royaume-Uni laisse Madagascar à la France…', GREENL, GREEN, 22);
  b += box(130, yb + 78, 740, 64, '…en échange de Zanzibar', GREENL, GREEN, 22);
  b += txt(500, yb + 170, 'le sort de Madagascar se joue sans les Malgaches', 22, PINK2, 'bold', 'middle');
  return svg(1000, yb + 202, s + b); })();


const S = [
  {
    t: 'Délimiter l’époque contemporaine : l’Europe de l’Ancien Régime', comp: 'L’époque contemporaine', theme: 'La délimitation de la période et l’Ancien Régime européen',
    goal: 'délimiter l’époque contemporaine et caractériser l’Ancien Régime européen du début du XVIIIᵉ siècle',
    mat: 'Frise chronologique, schéma des trois ordres, documents',
    revQ: 'Donne les bornes des Temps modernes et l’événement de chaque borne.',
    revRA: '1492 (arrivée de Colomb en Amérique) et 1789 (Révolution française).',
    situation: 'Nous vivons encore dans l’époque qui commence en 1789 : l’époque contemporaine. Mais pour comprendre pourquoi la France explose cette année-là, il faut regarder l’Europe d’avant — un monde où trois paysans sur quatre labourent comme leurs arrière-grands-pères, où la naissance décide de tout, où le roi gouverne seul. C’est l’Ancien Régime. À quoi ressemblait-il ?',
    legende: 'Un monde où la naissance décide de tout et où le roi gouverne seul : l’Europe d’avant 1789.',
    motsCles: ['époque contemporaine', '1789', 'Ancien Régime', 'agriculture traditionnelle', 'régime seigneurial', 'trois ordres', 'clergé', 'noblesse', 'tiers état', 'privilèges', 'monarchie absolue', 'parlementarisme'],
    sections: [
      {
        titre: 'La dernière période de l’Histoire',
        paras: [
          'L’époque contemporaine est la quatrième et dernière période de l’Histoire : ouverte par la Révolution française de 1789, elle n’est pas close — tu vis dedans.',
        ],
      },
      {
        titre: 'L’Ancien Régime : cinq traits',
        paras: ['L’Europe de 1700 vit encore à l’ancienne :'],
        puces: [
          'une agriculture traditionnelle : outils en bois, rendements faibles, famines fréquentes ;',
          'le régime seigneurial : le paysan paie des droits au seigneur, utilise son moulin et son four contre redevance ;',
          'une société divisée en trois ordres hérités du Moyen Âge : le clergé, qui prie ; la noblesse, qui combat ; le tiers état, qui travaille — et paie seul l’impôt, alors qu’il regroupe l’immense majorité de la population ; les deux premiers ordres jouissent des privilèges : exemptions d’impôts, emplois réservés, droits seigneuriaux ;',
          'la monarchie absolue : le roi, « représentant de Dieu sur terre », concentre tous les pouvoirs — il fait la loi, la fait exécuter et juge en dernier ressort ;',
          'une Église très puissante : registres, écoles, hôpitaux, censure des livres.',
        ],
      },
      {
        titre: 'L’exception anglaise',
        paras: [
          'Une exception intrigue les penseurs : l’Angleterre, où depuis la fin du XVIIᵉ siècle le roi partage le pouvoir avec un Parlement qui vote les lois et l’impôt — c’est le parlementarisme, que les philosophes français citeront en modèle.',
        ],
      },
    ],
    doc: {
      titre: 'Les plaintes des paysans à la veille de 1789',
      source: 'd’après les cahiers de doléances des paroisses rurales de France (1789) — extraits adaptés',
      texte: 'Nous, pauvres laboureurs, supplions Sa Majesté de considérer que nous payons la taille au roi, la dîme au curé, le champart et les corvées à notre seigneur, et qu’après tant de charges il ne nous reste pas de quoi nourrir nos enfants. Nous demandons que les privilégiés paient l’impôt comme nous, que les droits du seigneur soient supprimés, et que le pain cesse d’être si cher. Nous ne demandons que justice, et prions Dieu pour le roi.',
      questions: ['Relève les trois bénéficiaires des charges payées par les paysans.',
        'Quelles réformes les paysans demandent-ils ?',
        'Ce document annonce-t-il une révolution ? Nuance ta réponse avec la dernière phrase.'],
      reponses: ['Le roi (la taille), l’Église (la dîme), le seigneur (le champart et les corvées) : les trois pouvoirs de l’Ancien Régime pèsent sur le même paysan.',
        'L’égalité devant l’impôt (que les privilégiés paient aussi), la suppression des droits seigneuriaux, et du pain moins cher.',
        'Les demandes attaquent les privilèges, cœur de l’Ancien Régime — mais les paysans restent fidèles au roi (« prions Dieu pour le roi ») : en 1789, on veut réformer, pas encore renverser.']
    },
    lexique: [
      ['Ancien Régime', 'ordre social et politique de l’Europe d’avant 1789'],
      ['Tiers état', 'troisième ordre : tous ceux qui travaillent et paient l’impôt'],
      ['Privilèges', 'avantages réservés au clergé et à la noblesse'],
      ['Parlementarisme', 'régime où le Parlement vote les lois et limite le roi'],
    ],
    synthese: 'Époque contemporaine : 1789 → nos jours. Ancien Régime : agriculture traditionnelle, régime seigneurial, trois ordres (clergé, noblesse, tiers état), monarchie absolue, Église puissante ; exception : le parlementarisme anglais.',
    saistu: 'Le roi Louis XIV, modèle du monarque absolu, aurait résumé le système en une phrase restée célèbre : « L’État, c’est moi ». Vraie ou légendaire, la formule dit tout : sous l’absolutisme, aucune assemblée, aucun juge, aucune loi ne s’impose au roi. C’est exactement ce que 1789 fera voler en éclats.',
    exos: ['Les bornes. a) Quand commence l’époque contemporaine ? b) Quel événement l’ouvre ? d) Quand finit-elle ? e) Quelle période la précède ?',
      'Les trois ordres. a) Nomme les trois ordres. b) Lequel paie tous les impôts ? d) Quels sont les privilèges des deux premiers ? e) Quelle part de la population forme le tiers état ?',
      'Réfléchir. a) Définis la monarchie absolue. b) Cite deux signes du poids de l’Église. d) Qu’est-ce que le régime seigneurial ? e) En quoi l’Angleterre fait-elle exception ?'],
    corr: ['a) en 1789 ; b) la Révolution française ; d) elle n’est pas finie : elle va jusqu’à nos jours ; e) les Temps modernes.',
      'a) clergé, noblesse, tiers état ; b) le tiers état ; d) exemptions d’impôts, emplois réservés, droits seigneuriaux ; e) l’immense majorité — environ 97 %.',
      'a) un régime où le roi concentre tous les pouvoirs (législatif, exécutif, judiciaire) ; b) registres, écoles, hôpitaux, censure, dîme (deux suffisent) ; d) le système où les paysans paient des droits et redevances au seigneur ; e) le roi y partage le pouvoir avec un Parlement : c’est le parlementarisme.'],
    fig: 'u3f1'
  },
  {
    t: 'Les Lumières : savants et philosophes', comp: 'L’époque contemporaine', theme: 'Les idées nouvelles du XVIIIᵉ siècle',
    goal: 'présenter les savants et les philosophes des Lumières et leurs idées',
    mat: 'Tableau des philosophes, extraits de textes, images',
    revQ: 'Cite les trois ordres de l’Ancien Régime et deux caractéristiques de la monarchie absolue.',
    revRA: 'Clergé, noblesse, tiers état ; le roi concentre tous les pouvoirs et ne rend compte qu’à Dieu.',
    situation: 'Dans les salons de Paris, au XVIIIᵉ siècle, on ne parle plus seulement de mode : on discute d’électricité, de tolérance, de liberté. Des savants décomposent l’air, domptent la foudre ; des philosophes osent demander : de quel droit un homme seul gouverne-t-il des millions d’autres ? Ce siècle qui veut éclairer le monde par la raison s’est nommé lui-même : le siècle des Lumières.',
    legende: 'Dans les salons du XVIIIᵉ siècle, on discute d’électricité, de tolérance et de liberté : le siècle s’éclaire.',
    motsCles: ['Lumières', 'raison', 'Lavoisier', 'Franklin', 'Montesquieu', 'séparation des pouvoirs', 'Voltaire', 'tolérance', 'Rousseau', 'volonté du peuple', 'Kant', 'Diderot', 'Encyclopédie'],
    sections: [
      {
        titre: 'La raison contre l’obscurité',
        paras: [
          'Le mot « Lumières » est une image : la raison éclaire, comme une lampe, ce que l’ignorance laissait dans l’obscurité. Côté sciences, Lavoisier montre que l’air est un mélange de gaz — il fonde la chimie moderne ; Franklin, en Amérique, prouve que la foudre est de l’électricité et invente le paratonnerre : la science explique et protège, là où l’on voyait des punitions du ciel.',
        ],
      },
      {
        titre: 'Les philosophes contre l’Ancien Régime',
        paras: ['Chaque penseur attaque un pilier de l’ordre ancien :'],
        puces: [
          'Montesquieu propose de séparer les trois pouvoirs — faire la loi, l’exécuter, juger — pour qu’aucun homme ne les tienne tous : c’est la condamnation de l’absolutisme ;',
          'Voltaire se bat pour la tolérance : nul ne doit être persécuté pour ses croyances ;',
          'Rousseau affirme que le pouvoir vient du peuple, et que la loi doit exprimer la volonté générale — idée explosive sous un roi de droit divin ;',
          'Kant, en Allemagne, résume tout le mouvement : « Aie le courage de te servir de ta propre raison ! » ;',
          'Diderot rassemble tous les savoirs du temps dans l’Encyclopédie, immense dictionnaire en 28 volumes : malgré la censure, elle répand les idées nouvelles dans toute l’Europe.',
        ],
      },
      {
        titre: 'Des idées qui préparent 1789',
        paras: [
          'Ces idées circulent par les livres, les salons, les académies — et quand la crise éclatera en 1789, elles fourniront aux révolutionnaires leur programme.',
        ],
      },
    ],
    doc: {
      titre: 'Qu’est-ce que les Lumières ?',
      source: 'd’après Emmanuel Kant, Qu’est-ce que les Lumières ? (1784) — extrait adapté',
      texte: 'Les Lumières, c’est la sortie de l’homme hors de l’état de minorité où il se maintient par sa propre faute. La minorité est l’incapacité de se servir de son entendement sans la conduite d’un autre. Elle a pour cause non un défaut d’intelligence, mais un manque de courage. Aie le courage de te servir de ta propre raison ! Voilà la devise des Lumières. Il est si commode d’être mineur : si j’ai un livre qui pense pour moi, un directeur qui me tient lieu de conscience, je n’ai pas besoin de penser moi-même.',
      questions: ['Que signifie « l’état de minorité » selon Kant ?',
        'Quelle est la devise des Lumières, et que demande-t-elle à chacun ?',
        'En quoi ce texte menace-t-il l’Ancien Régime, où le roi et l’Église pensent pour les sujets ?'],
      reponses: ['L’incapacité de penser par soi-même, de se servir de sa raison sans être guidé par un autre — par paresse ou par manque de courage.',
        '« Aie le courage de te servir de ta propre raison ! » : elle demande à chacun de réfléchir, vérifier et juger par lui-même.',
        'Si chaque sujet pense par lui-même, il peut questionner le droit divin du roi, les privilèges, la censure : la raison libre sape l’obéissance aveugle — c’est tout l’esprit de 1789 en germe.']
    },
    lexique: [
      ['Lumières', 'mouvement du XVIIIᵉ siècle qui veut éclairer par la raison'],
      ['Séparation des pouvoirs', 'législatif, exécutif et judiciaire confiés à des mains différentes'],
      ['Tolérance', 'respect des croyances d’autrui, refus de la persécution'],
      ['Encyclopédie', 'dictionnaire des savoirs dirigé par Diderot (28 volumes)'],
    ],
    synthese: 'Lumières = raison et science contre ignorance et absolutisme. Savants : Lavoisier (composition de l’air), Franklin (paratonnerre). Philosophes : Montesquieu (séparation des pouvoirs), Voltaire (tolérance), Rousseau (volonté du peuple), Kant (raison), Diderot (Encyclopédie).',
    saistu: 'Pour échapper à la censure, l’Encyclopédie usait de ruses : les critiques du pouvoir se cachaient dans des articles d’apparence innocente, et les renvois (« voir tel article ») guidaient le lecteur complice ! Interdite deux fois, sauvée par des protecteurs haut placés, elle fut pourtant l’un des plus grands succès de librairie du siècle : les idées, comme l’eau, trouvent toujours un passage.',
    exos: ['Associe chaque personnage à son apport : a) Montesquieu ; b) Lavoisier ; d) Diderot ; e) Rousseau.',
      'Savants et philosophes. a) Qui invente le paratonnerre ? b) Qui défend la tolérance ? d) Que signifie l’image des « Lumières » ? e) Comment les idées circulent-elles ?',
      'Réfléchir. a) Pourquoi la séparation des pouvoirs condamne-t-elle l’absolutisme ? b) Pourquoi l’idée de Rousseau est-elle explosive sous un roi de droit divin ? d) Quel rôle joue l’Encyclopédie ? e) Montre un lien entre les Lumières et la Révolution de 1789.'],
    corr: ['a) la séparation des pouvoirs ; b) la composition de l’air ; d) l’Encyclopédie ; e) la volonté du peuple.',
      'a) Franklin ; b) Voltaire ; d) la raison éclaire les hommes comme une lampe éclaire l’obscurité ; e) par les livres, les salons, les académies.',
      'a) parce que le roi absolu concentre les trois pouvoirs : les séparer, c’est détruire l’absolutisme ; b) parce qu’elle fait venir le pouvoir du peuple et non de Dieu ; d) elle rassemble et diffuse tous les savoirs et les idées nouvelles malgré la censure ; e) les révolutionnaires de 1789 appliquent les idées des Lumières : souveraineté du peuple, séparation des pouvoirs, droits de l’Homme.'],
    fig: 'u3f2'
  },
  {
    t: 'La Révolution française et la naissance des États-Unis', comp: 'L’époque contemporaine', theme: '1789 en France, l’indépendance en Amérique',
    goal: 'raconter les débuts de la Révolution française et la formation des États-Unis',
    mat: 'Frise des événements, textes (DDHC), images',
    revQ: 'Associe : Montesquieu, Voltaire, Rousseau à leur idée.',
    revRA: 'Montesquieu : séparation des pouvoirs ; Voltaire : tolérance ; Rousseau : volonté du peuple.',
    situation: 'Été 1789. Le royaume de France est en faillite, le pain manque, et le roi masse des troupes autour de Paris. Le 14 juillet, la foule marche sur une vieille forteresse-prison, symbole de l’arbitraire royal : la Bastille tombe en quelques heures. En un été, mille ans de monarchie vacillent. Et de l’autre côté de l’Atlantique, treize colonies viennent déjà de montrer l’exemple en devenant les États-Unis. Comment ces deux révolutions ont-elles changé le monde ?',
    legende: 'Le 14 juillet 1789, la Bastille tombe en quelques heures : en un été, mille ans de monarchie vacillent.',
    motsCles: ['états généraux', 'Assemblée constituante', '14 juillet 1789', 'Bastille', 'abolition des privilèges', 'Déclaration des droits de l’Homme', 'République 1792', 'treize colonies', 'guerre d’indépendance', 'États-Unis'],
    sections: [
      {
        titre: 'L’été 1789 : la chaîne des événements',
        paras: ['Tout s’enchaîne vite en France :'],
        puces: [
          'le roi, ruiné, convoque les états généraux — l’assemblée des trois ordres, qui n’avait plus siégé depuis 175 ans ;',
          'le tiers état, méprisé, se proclame Assemblée nationale constituante : la nation, et non le roi, écrira désormais les règles ;',
          'le 14 juillet 1789, Paris prend la Bastille : le peuple entre dans l’Histoire ;',
          'en août, l’Assemblée abolit les privilèges et les droits seigneuriaux : en une nuit, l’Ancien Régime s’effondre.',
        ],
      },
      {
        titre: 'La Déclaration et la République',
        paras: [
          'Puis vient le texte fondateur : la Déclaration des droits de l’Homme et du citoyen — « Les hommes naissent et demeurent libres et égaux en droits » ; liberté, propriété, sûreté, souveraineté de la nation, séparation des pouvoirs : les idées des Lumières deviennent loi.',
          'La monarchie survit trois ans, affaiblie ; en 1792, la République est proclamée — ses premières années (1792-1796) seront orageuses, entre guerres et luttes intérieures, mais l’essentiel est acquis : le pouvoir vient du peuple.',
        ],
      },
      {
        titre: 'L’Amérique avait ouvert la voie',
        paras: [
          'Les treize colonies anglaises de la côte atlantique, refusant de payer des impôts votés sans elles à Londres, s’étaient soulevées ; aidées de la France, elles avaient gagné leur guerre d’indépendance et fondé les États-Unis d’Amérique — avec une constitution appliquant la séparation des pouvoirs de Montesquieu. Révolution américaine puis française : deux filles des Lumières, qui inspireront le monde entier.',
        ],
      },
    ],
    doc: {
      titre: 'La Déclaration des droits de l’Homme et du citoyen',
      source: 'd’après la Déclaration adoptée par l’Assemblée nationale constituante (26 août 1789) — extraits',
      texte: 'Article premier. Les hommes naissent et demeurent libres et égaux en droits ; les distinctions sociales ne peuvent être fondées que sur l’utilité commune. Article 3. Le principe de toute souveraineté réside essentiellement dans la Nation. Article 6. La loi est l’expression de la volonté générale ; tous les citoyens ont droit de concourir à sa formation. Article 16. Toute société dans laquelle la séparation des pouvoirs n’est pas déterminée n’a point de constitution.',
      questions: ['En quoi l’article premier abolit-il la société des trois ordres ?',
        'Retrouve dans les articles 3, 6 et 16 les idées de Rousseau et de Montesquieu.',
        'Pourquoi dit-on que ce texte fait des idées des Lumières des lois ?'],
      reponses: ['Si les hommes naissent et demeurent égaux en droits, les privilèges de naissance du clergé et de la noblesse n’ont plus de fondement : la société d’ordres meurt.',
        'Articles 3 et 6 : la souveraineté de la Nation et la loi comme volonté générale — Rousseau ; article 16 : la séparation des pouvoirs — Montesquieu.',
        'Parce que les principes discutés dans les salons deviennent des règles officielles adoptées par l’Assemblée : la philosophie entre dans le droit.']
    },
    lexique: [
      ['États généraux', 'assemblée des trois ordres convoquée par le roi'],
      ['Constituante', 'assemblée chargée d’écrire une constitution'],
      ['DDHC', 'Déclaration des droits de l’Homme et du citoyen (1789)'],
      ['République', 'régime sans roi, où le pouvoir vient du peuple'],
    ],
    synthese: '14 juillet 1789 : prise de la Bastille ; Assemblée constituante ; abolition des privilèges = fin de l’Ancien Régime ; Déclaration des droits de l’Homme et du citoyen ; République en 1792 (débuts 1792-1796). États-Unis : 13 colonies → guerre d’indépendance → première nation née des Lumières.',
    saistu: 'La Révolution française a parlé au monde entier — jusqu’à Madagascar : au XIXᵉ siècle, les mots « liberté » et « égalité » voyagent avec les livres et les missionnaires. Et quand Madagascar devient indépendant en 1960, sa première constitution proclame, elle aussi, les droits fondamentaux hérités de 1789. Les idées n’ont pas de frontières.',
    exos: ['Dates et faits. a) Que se passe-t-il le 14 juillet 1789 ? b) Que fait l’Assemblée en août 1789 ? d) Quel grand texte est adopté en 1789 ? e) Quand la République est-elle proclamée ?',
      'Les États-Unis. a) Combien de colonies se soulèvent ? b) Contre quel pays ? d) Pourquoi refusent-elles l’impôt ? e) Quelle idée de Montesquieu appliquent-elles ?',
      'Réfléchir. a) Pourquoi la Bastille est-elle un symbole ? b) Cite trois droits proclamés par la Déclaration. d) Montre que la Révolution applique les Lumières. e) Pourquoi dit-on que 1789 ouvre l’époque contemporaine ?'],
    corr: ['a) la prise de la Bastille par le peuple de Paris ; b) elle abolit les privilèges : fin de l’Ancien Régime ; d) la Déclaration des droits de l’Homme et du citoyen ; e) en 1792 (premières années 1792-1796).',
      'a) treize ; b) l’Angleterre ; d) parce qu’ils sont votés à Londres sans elles ; e) la séparation des pouvoirs.',
      'a) parce qu’elle incarnait l’arbitraire royal : sa chute annonce la victoire du peuple ; b) liberté, égalité, propriété, sûreté (trois suffisent) ; d) souveraineté du peuple (Rousseau), séparation des pouvoirs (Montesquieu), droits et tolérance (Voltaire) deviennent des lois ; e) parce qu’elle détruit l’ordre ancien et fonde le monde politique moderne — celui où nous vivons encore.'],
    fig: 'u3f3'
  },
  {
    t: 'Les révolutions industrielles', comp: 'L’époque contemporaine', theme: 'Machines, énergies et usines : le monde transformé',
    goal: 'caractériser les deux révolutions industrielles et leurs conséquences sur le travail et les transports',
    mat: 'Tableau comparatif, images de machines, frise',
    revQ: 'Récite la chaîne des événements de 1789.',
    revRA: 'Prise de la Bastille (14 juillet) → Assemblée constituante → abolition des privilèges → Déclaration des droits de l’Homme et du citoyen.',
    situation: 'Vers 1750, un artisan anglais tisse chez lui, à la main, quelques mètres d’étoffe par jour. Cent ans plus tard, son arrière-petit-fils surveille dans une usine des machines à vapeur qui en produisent des kilomètres. Entre les deux : la machine à vapeur, le charbon, l’usine, le chemin de fer. Ce bouleversement du travail et de la vie, les historiens l’appellent la révolution industrielle — et il y en a eu deux.',
    legende: 'De l’atelier familial à l’usine à vapeur : en un siècle, le travail change de monde.',
    motsCles: ['révolution industrielle', 'Grande-Bretagne', 'charbon', 'machine à vapeur', 'usine', 'locomotive', 'pétrole', 'électricité', 'moteur à explosion', 'taylorisme', 'fordisme', 'chaîne de montage'],
    sections: [
      {
        titre: 'La première révolution : le charbon et la vapeur',
        paras: [
          'Pourquoi la Grande-Bretagne ? Elle a le charbon, les capitaux du commerce maritime, et des inventeurs : la machine à vapeur de Watt transforme la chaleur du charbon en mouvement — elle pompe, file, tisse, inlassablement. Du milieu du XVIIIᵉ au milieu du XIXᵉ siècle, le travail quitte l’atelier familial pour l’usine, où des centaines d’ouvriers servent les machines ; les villes noircissent de fumées et grossissent de paysans venus chercher de l’embauche.',
          'La locomotive à vapeur révolutionne les transports : des marchandises et des hommes traversent le pays en heures au lieu de jours — le chemin de fer couvre l’Europe de rails.',
        ],
      },
      {
        titre: 'La deuxième révolution : le pétrole et l’électricité',
        paras: [
          'Vers 1850 s’ouvre un deuxième âge (1850-1914) : le pétrole et l’électricité détrônent peu à peu le charbon. Le moteur à explosion, compact et puissant, rend possible l’automobile ; l’électricité éclaire les rues et anime les moteurs des usines.',
          'Le travail lui-même est réorganisé : le taylorisme chronomètre chaque geste de l’ouvrier pour éliminer les temps morts ; le fordisme, chez le constructeur automobile Ford, fait défiler les pièces sur un tapis roulant devant des ouvriers immobiles — la chaîne de montage.',
        ],
      },
      {
        titre: 'Les conséquences',
        paras: [
          'La production explose, les prix baissent ; mais la condition ouvrière est dure : journées longues, salaires faibles, travail des enfants — les luttes sociales de l’époque contemporaine en naîtront. Et pour nourrir ces usines en matières premières et leur trouver des clients, l’Europe industrielle se tournera vers l’Afrique et l’Asie : la révolution industrielle prépare la colonisation.',
        ],
      },
    ],
    doc: {
      titre: 'Des enfants dans les usines',
      source: 'd’après les témoignages recueillis par les commissions d’enquête du Parlement britannique sur le travail en manufacture (années 1830) — extraits adaptés',
      texte: 'Question : À quel âge avez-vous commencé à travailler à la filature ? — Réponse : À huit ans, monsieur. — Quelles étaient vos heures de travail ? — De cinq heures du matin à huit heures du soir, quand l’ouvrage pressait. — Aviez-vous le temps de manger ? — Quarante minutes à midi ; souvent nous mangions près des machines, sans nous asseoir. — Que se passait-il si vous arriviez en retard ou si vous vous endormiez ? — Le contremaître nous frappait avec une courroie. — Êtes-vous allé à l’école ? — Non, monsieur : je travaillais.',
      questions: ['Relève trois éléments qui montrent la dureté de la condition des enfants ouvriers.',
        'Pourquoi ce document, issu d’une enquête officielle, est-il une source précieuse pour l’historien ?',
        'Quel lien peux-tu faire entre ces témoignages et les luttes sociales évoquées dans la leçon ?'],
      reponses: ['Le travail dès huit ans, des journées de quinze heures, les coups du contremaître, pas d’école, les repas pris debout près des machines (trois suffisent).',
        'C’est une source primaire : des paroles recueillies sous serment, à l’époque même des faits, par une institution officielle — un témoignage direct et daté.',
        'Ces enquêtes ont révélé les abus et poussé aux premières lois sociales (limitation du travail des enfants) : la dureté de la condition ouvrière a nourri les luttes et les réformes de l’époque contemporaine.']
    },
    lexique: [
      ['Machine à vapeur', 'machine de Watt transformant la chaleur du charbon en mouvement'],
      ['Taylorisme', 'organisation chronométrant chaque geste de l’ouvrier'],
      ['Fordisme', 'travail à la chaîne sur tapis roulant, inventé chez Ford'],
      ['Condition ouvrière', 'vie et travail des ouvriers d’usine'],
    ],
    synthese: '1ʳᵉ révolution (mi-XVIIIᵉ – mi-XIXᵉ, Grande-Bretagne) : charbon, machine à vapeur, usines, locomotive. 2ᵉ (1850-1914) : pétrole, électricité, moteur à explosion, taylorisme et fordisme. Conséquences : usines, grandes villes, transports rapides — et course aux colonies.',
    saistu: 'Le chemin de fer est arrivé à Madagascar avec la colonisation : la ligne Tananarive-Côte Est (TCE), construite entre 1901 et 1913, reliait la capitale au port de Toamasina. Ses locomotives à vapeur — technologie de la première révolution industrielle — ont fonctionné des décennies ; la ligne existe toujours, et des trains y circulent encore !',
    exos: ['La première révolution. a) Où naît-elle ? b) Quand ? d) Quelle énergie et quelle machine ? e) Quel nouveau transport ?',
      'La deuxième révolution. a) Donne ses dates. b) Quelles énergies nouvelles ? d) Quel moteur apparaît ? e) Définis taylorisme et fordisme.',
      'Réfléchir. a) Pourquoi la Grande-Bretagne démarre-t-elle la première ? b) Comment la vie des ouvriers change-t-elle ? d) Pourquoi les villes grossissent-elles ? e) Montre le lien entre révolution industrielle et colonisation.'],
    corr: ['a) en Grande-Bretagne ; b) du milieu du XVIIIᵉ au milieu du XIXᵉ siècle ; d) le charbon et la machine à vapeur ; e) la locomotive (le chemin de fer).',
      'a) 1850-1914 ; b) le pétrole et l’électricité ; d) le moteur à explosion ; e) taylorisme : chaque geste de l’ouvrier est chronométré ; fordisme : montage à la chaîne sur tapis roulant.',
      'a) elle a le charbon, les capitaux du commerce et des inventeurs ; b) ils quittent l’atelier pour l’usine : journées longues, gestes répétitifs, salaires faibles ; d) les paysans viennent y chercher du travail dans les usines ; e) l’industrie a besoin de matières premières et de clients : l’Europe les cherche en Afrique et en Asie — la course aux colonies commence.'],
    fig: 'u3f4'
  },
  {
    t: 'La formation des empires coloniaux', comp: 'L’époque contemporaine', theme: 'Le partage du monde et le sort de Madagascar',
    goal: 'expliquer la formation des empires coloniaux du XIXᵉ siècle et la convention de Zanzibar',
    mat: 'Carte du partage de l’Afrique, frise, documents',
    revQ: 'Donne les énergies et une machine de chacune des deux révolutions industrielles.',
    revRA: '1ʳᵉ : charbon, machine à vapeur ; 2ᵉ : pétrole et électricité, moteur à explosion.',
    situation: '1885, Berlin. Autour d’une grande table, des diplomates européens se penchent sur une carte d’Afrique et tracent des frontières au crayon — sans qu’aucun Africain soit présent. Quelques années plus tard, dans un simple échange de lettres, le Royaume-Uni « laisse » Madagascar à la France contre l’île de Zanzibar. Comment l’Europe en est-elle venue à se partager le monde — et notre île avec ?',
    legende: 'Berlin, 1885 : des diplomates tracent les frontières de l’Afrique au crayon — sans un seul Africain dans la salle.',
    motsCles: ['empires coloniaux', 'matières premières', 'émigration', 'prestige', 'mission civilisatrice', 'conférence de Berlin 1885', 'occupation effective', 'convention de Zanzibar 1890', 'Ranavalona III'],
    sections: [
      {
        titre: 'Les trois moteurs de la colonisation',
        paras: ['Trois moteurs poussent l’Europe hors d’elle-même :'],
        puces: [
          'l’économie : les usines réclament coton, caoutchouc, minerais, et des marchés pour écouler leurs produits ;',
          'la démographie : l’Europe surpeuplée déverse ses émigrants — des millions partent peupler les colonies et les Amériques à la fin du XIXᵉ siècle ;',
          'le prestige : posséder des colonies, c’est être une grande puissance ; la France, humiliée par l’Allemagne en 1870, cherche sa revanche outre-mer, et certains, comme Jules Ferry, invoquent une « mission civilisatrice ».',
        ],
      },
      {
        titre: 'Berlin 1885 : les règles du partage',
        paras: [
          'La course est si vive qu’elle menace de dégénérer : pour éviter les guerres entre Européens, la conférence de Berlin (1885) pose les règles du partage de l’Afrique — toute puissance qui occupe effectivement une côte peut en revendiquer l’arrière-pays, à condition de notifier les autres. En vingt ans, presque toute l’Afrique passe sous domination européenne : le Royaume-Uni rêve d’un empire du Caire au Cap, la France s’étend de l’Algérie au Congo, l’Allemagne et le Portugal prennent leurs parts.',
        ],
      },
      {
        titre: 'La convention de Zanzibar et le sort de Madagascar',
        paras: [
          'Les rivalités se règlent par des marchandages : c’est ainsi que la convention de Zanzibar (1890) scelle le sort de Madagascar — le Royaume-Uni, qui protégeait jusque-là ses alliés malgaches, reconnaît l’île comme zone d’influence française, et reçoit en échange le protectorat sur Zanzibar. Abandonné par son allié, le Royaume de Madagascar se retrouve seul face à la France : la colonisation de 1896, que nous étudierons à l’unité VI, est en germe dans cet échange — conclu à des milliers de kilomètres de l’île, sans un seul Malgache.',
        ],
      },
    ],
    doc: {
      titre: 'Jules Ferry justifie la colonisation',
      source: 'd’après le discours de Jules Ferry à la Chambre des députés (28 juillet 1885) — extrait adapté',
      texte: 'La politique coloniale s’impose d’abord par les besoins de notre industrie : les colonies sont, pour les pays riches, des placements de capitaux et des débouchés pour nos produits. Il y a un second point : le côté humanitaire et civilisateur de la question. Il faut dire ouvertement que les races supérieures ont un droit vis-à-vis des races inférieures, parce qu’il y a pour elles un devoir : le devoir de civiliser. Enfin, dans l’Europe telle qu’elle est faite, s’abstenir, c’est abdiquer : une grande nation doit répandre son influence partout où elle le peut.',
      questions: ['Retrouve dans ce discours les trois moteurs de la colonisation étudiés dans la leçon.',
        'Pourquoi l’argument des « races supérieures » est-il inacceptable et faux ?',
        'Pourquoi l’historien étudie-t-il quand même un tel discours ?'],
      reponses: ['L’économie (débouchés, placements pour l’industrie), la « mission civilisatrice » (prétexte humanitaire), et le prestige national (« s’abstenir, c’est abdiquer »).',
        'Parce qu’il n’existe pas de races supérieures ou inférieures : la science l’a démontré, et l’égale dignité des peuples est aujourd’hui un principe universel ; cet argument servait à masquer des intérêts économiques et politiques.',
        'Parce qu’il révèle comment les colonisateurs justifiaient leur domination : comprendre leur discours, c’est pouvoir le critiquer — l’historien analyse les idées d’une époque sans les approuver.']
    },
    lexique: [
      ['Empire colonial', 'ensemble des territoires dominés par une puissance'],
      ['Occupation effective', 'règle de Berlin : occuper réellement pour revendiquer'],
      ['Protectorat', 'domination indirecte : l’État garde un souverain sous contrôle'],
      ['Convention', 'accord diplomatique entre puissances'],
    ],
    synthese: 'Moteurs : industrie (matières premières, marchés), émigration, prestige national. Berlin 1885 : règles du partage de l’Afrique. Puissances : Royaume-Uni, France, Allemagne, Portugal. Convention de Zanzibar (1890) : Madagascar reconnu à la France contre Zanzibar au Royaume-Uni.',
    saistu: 'En 1890, le Royaume de Madagascar avait pourtant des traités avec le Royaume-Uni et même des consuls à Londres ! Mais la realpolitik l’a emporté : la convention de Zanzibar a été signée sans que la reine Ranavalona III en soit même informée officiellement. Quand son gouvernement a protesté, Londres a répondu… que cela ne la concernait pas. L’épisode reste un exemple classique du mépris des puissances pour les États non européens.',
    exos: ['Les moteurs. a) Que cherchent les industries européennes dans les colonies ? b) Quel phénomène de population pousse au départ ? d) Que signifie la « mission civilisatrice » ? e) Cite quatre puissances coloniales.',
      'Berlin 1885. a) Qui se réunit à Berlin ? b) Qui est absent ? d) Quelle règle principale est fixée ? e) Quel continent est concerné ?',
      'La convention de Zanzibar. a) Quelles puissances la signent ? b) Que reçoit la France ? d) Que reçoit le Royaume-Uni ? e) Quelle conséquence pour le Royaume de Madagascar ?'],
    corr: ['a) des matières premières (coton, caoutchouc, minerais) et des marchés ; b) l’émigration : l’Europe surpeuplée envoie des millions de personnes outre-mer ; d) l’idée — avancée par Jules Ferry — que l’Europe aurait le devoir d’apporter sa civilisation aux autres peuples ; e) Royaume-Uni, France, Allemagne, Portugal.',
      'a) les puissances européennes ; b) les Africains, premiers concernés ; d) l’occupation effective d’une côte donne droit à l’arrière-pays, avec notification aux autres puissances ; e) l’Afrique.',
      'a) le Royaume-Uni et la France ; b) la reconnaissance de son influence sur Madagascar ; d) le protectorat sur Zanzibar ; e) il perd son allié britannique et se retrouve seul face à la France — la voie de la colonisation est ouverte.'],
    fig: 'u3f5'
  }
];


const unit3 = {
  no: 3, roman: 'III', name: 'L’époque contemporaine',
  rag: 'caractériser une période de l’Histoire en utilisant des représentations du temps et de l’espace, et porter un regard critique sur la réalité sociale à Madagascar et dans le monde.',
  valeurs: 'esprit d’analyse, esprit critique',
  sessions: S,
  revision: {
    table: [
      ['Époque contemporaine', '1789 (Révolution française) → nos jours', 'Délimiter la période'],
      ['Ancien Régime', 'Trois ordres, monarchie absolue, régime seigneurial, Église puissante ; exception anglaise', 'Caractériser l’Europe d’avant 1789'],
      ['Lumières', 'Lavoisier, Franklin ; Montesquieu, Voltaire, Rousseau, Kant, Diderot', 'Associer chaque nom à son apport'],
      ['Révolution / États-Unis', 'Bastille 14-7-1789, fin de l’Ancien Régime, DDHC, République 1792 ; 13 colonies indépendantes', 'Raconter 1789 et la naissance des É-U'],
      ['Révolutions industrielles', '1ʳᵉ : charbon-vapeur (GB) ; 2ᵉ : pétrole-électricité, taylorisme, fordisme (1850-1914)', 'Comparer les deux révolutions'],
      ['Empires coloniaux', 'Berlin 1885, R-U/France/Allemagne/Portugal ; convention de Zanzibar → Madagascar à la France', 'Expliquer le partage du monde']
    ],
    questions: [
      'Délimite l’époque contemporaine et cite les cinq traits de l’Ancien Régime.',
      'Récite le tableau des Lumières : sept noms, sept apports.',
      'Raconte l’année 1789 en quatre événements ordonnés.',
      'Compare les deux révolutions industrielles (période, énergie, machine, travail).',
      'Explique la convention de Zanzibar : signataires, échange, conséquence pour Madagascar.'
    ],
    answers: [
      '1789 → nos jours ; agriculture traditionnelle, régime seigneurial, trois ordres, monarchie absolue, Église puissante (exception : parlementarisme anglais).',
      'Lavoisier : composition de l’air ; Franklin : paratonnerre ; Montesquieu : séparation des pouvoirs ; Voltaire : tolérance ; Rousseau : volonté du peuple ; Kant : raison ; Diderot : Encyclopédie.',
      'Prise de la Bastille (14 juillet) ; Assemblée constituante ; abolition des privilèges (fin de l’Ancien Régime) ; Déclaration des droits de l’Homme et du citoyen — puis République en 1792.',
      '1ʳᵉ : mi-XVIIIᵉ–mi-XIXᵉ, Grande-Bretagne, charbon, machine à vapeur, usines et locomotive ; 2ᵉ : 1850-1914, pétrole et électricité, moteur à explosion, taylorisme et fordisme.',
      'Royaume-Uni et France ; Madagascar reconnu zone française contre Zanzibar au Royaume-Uni ; le royaume malgache perd son allié et se retrouve seul face à la France.'
    ]
  },
  exam: {
    exos: [
      'Questions de cours. a) Délimite l’époque contemporaine. b) Nomme les trois ordres de l’Ancien Régime. d) Qui écrit l’Encyclopédie ? e) Que fixe la conférence de Berlin ?',
      'Les Lumières. a) Associe Lavoisier et Franklin à leur découverte. b) Qui défend la séparation des pouvoirs ? d) Résume l’idée de Rousseau. e) Pourquoi ces idées menacent-elles l’absolutisme ?',
      '1789 et l’Amérique. a) Date la prise de la Bastille. b) Quel texte proclame les droits ? d) Quand naît la République ? e) Qu’ont fait les treize colonies avant la France ?',
      'Les révolutions industrielles. a) Donne la période et le berceau de la première. b) Associe chaque révolution à ses énergies. d) Définis le fordisme. e) Cite une conséquence sociale et une conséquence coloniale.',
      'Le partage colonial. a) Cite trois moteurs de la colonisation. b) Que décide Berlin en 1885 ? d) Explique l’échange de la convention de Zanzibar. e) Pourquoi cet accord annonce-t-il 1896 pour Madagascar ?'
    ],
    corr: [
      'a) de 1789 (Révolution française) à nos jours ; b) clergé, noblesse, tiers état ; d) Diderot ; e) les règles du partage de l’Afrique entre puissances européennes. Un point par item.',
      'a) Lavoisier : composition de l’air ; Franklin : paratonnerre ; b) Montesquieu ; d) le pouvoir vient du peuple et la loi doit exprimer sa volonté ; e) parce qu’elles retirent au roi la source (Dieu) et la concentration de son pouvoir. Un point par item.',
      'a) le 14 juillet 1789 ; b) la Déclaration des droits de l’Homme et du citoyen ; d) en 1792 (premières années 1792-1796) ; e) elles ont gagné leur indépendance contre l’Angleterre et fondé les États-Unis. Un point par item.',
      'a) du milieu du XVIIIᵉ au milieu du XIXᵉ siècle, en Grande-Bretagne ; b) 1ʳᵉ : charbon ; 2ᵉ : pétrole et électricité ; d) le montage à la chaîne sur tapis roulant, chez Ford ; e) sociale : naissance de la classe ouvrière et de ses luttes ; coloniale : recherche de matières premières et de marchés. Un point par item.',
      'a) industrie (matières premières, marchés), émigration, prestige national ; b) les règles du partage de l’Afrique (occupation effective, notification) ; d) le Royaume-Uni reconnaît Madagascar à la France et reçoit Zanzibar ; e) parce que le royaume malgache, privé de son allié britannique, ne peut plus résister seul à la pression française. Un point par item.'
    ]
  }
};

(async () => {
  const bufs = await L.render(figs);
  await buildUnit(unit3, bufs);
})();
