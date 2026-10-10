// UNITÉ 4 — LES ORIGINES DU PEUPLE MALGACHE (PE T7) : 3 séances + révision + examen
const L = require('./figlib');
const { buildUnit } = require('./engine');
const { head, svg, txt, nline, dot, tableEl, box, arrow, seg, circle, poly, PINK, PINK2, GREEN, GREENL, BLUE, BLUEL, OCRE } = L;

const figs = {};
// S1 — frise des vagues de migration
figs.u4f1 = (() => { const { s, y } = head('Les vagues de migration vers Madagascar', ['Qui est arrivé, et quand — la frise du peuplement.']);
  const top = y + 15;
  const waves = [
    ['Austronésiens (ancêtres des Vazimba)', 'IIIᵉ-IVᵉ siècle', GREENL, GREEN],
    ['Africains', 'VIIᵉ-VIIIᵉ siècle', BLUEL, BLUE],
    ['Indonésiens et Malaisiens', 'VIIᵉ siècle', GREENL, GREEN],
    ['Islamisés (Antalaotra, Antemoro…)', 'IXᵉ siècle', '#FDE7EF', PINK2],
    ['Européens (Portugais, Français…)', 'XVᵉ siècle', '#FFF3E0', OCRE],
    ['Indiens et Indopakistanais', 'XIXᵉ siècle', BLUEL, BLUE]
  ];
  let b = '';
  waves.forEach(([n, d, f, c], i) => {
    const Y = top + i * 64;
    b += box(60, Y, 560, 50, n, f, c, 20);
    b += txt(650, Y + 32, d, 22, c, 'bold');
    if (i < 5) b += arrow(340, Y + 50, 340, Y + 64, '#999', 3);
  });
  b += txt(500, top + 6 * 64 + 18, 'plusieurs vagues, un seul peuple : l’unité dans la diversité', 21, PINK2, 'bold', 'middle');
  return svg(1000, top + 6 * 64 + 50, s + b); })();
// S2 — zones d'implantation
figs.u4f2 = (() => { const { s, y } = head('Les zones d’implantation des premiers Malgaches', ['Six grandes zones d’installation sur la Grande Île.']);
  const top = y + 15;
  const data = [['zone', 'exemples d’installations'],
    ['côte Ouest', 'villages de pêcheurs et d’éleveurs'],
    ['Nord et Nord-Ouest', 'comptoirs des Antalaotra'],
    ['Nord-Est', 'baies des navigateurs (Iharana)'],
    ['Sud-Est', 'vallées des islamisés (Antemoro)'],
    ['Sud', 'pasteurs des grands espaces'],
    ['Hautes Terres centrales', 'rizières et villages fortifiés']];
  let b = tableEl(70, top, [350, 510], 52, data);
  b += txt(500, top + 7 * 52 + 40, 'l’archéologie confirme : fouilles de comptoirs, poteries, charbons datés', 21, GREEN, 'bold', 'middle');
  return svg(1000, top + 7 * 52 + 72, s + b); })();
// S3 — unité / diversité
figs.u4f3 = (() => { const { s, y } = head('Un seul peuple, une belle diversité', ['Ce qui rassemble tous les Malgaches — et ce qui varie.']);
  const top = y + 20;
  let b = box(70, top, 400, 54, 'RESSEMBLANCES', GREENL, GREEN, 22);
  b += box(530, top, 400, 54, 'DIFFÉRENCES', '#FDE7EF', PINK2, 22);
  const res = ['une même croyance ancienne', 'une même langue malgache', 'zébu et riziculture partout'];
  const dif = ['variétés régionales de la langue', 'habits, coiffures, coutumes', 'morphologies variées'];
  res.forEach((m, i) => { b += txt(270, top + 100 + i * 36, m, 20, GREEN, 'normal', 'middle'); });
  dif.forEach((m, i) => { b += txt(730, top + 100 + i * 36, m, 20, PINK2, 'normal', 'middle'); });
  b += txt(500, top + 100 + 3 * 36 + 26, 'la nation malgache : un sentiment national né du brassage des migrations', 21, BLUE, 'bold', 'middle');
  return svg(1000, top + 100 + 3 * 36 + 58, s + b); })();

const S = [
  {
    t: 'Les vagues de migration', comp: 'Les origines du peuple malgache', theme: 'La formation du peuple malgache à partir du brassage des migrations',
    goal: 'déterminer les origines du peuple malgache et élaborer la frise des différentes vagues de migration',
    mat: 'Cartes des itinéraires, frise chronologique, textes et images',
    revQ: 'Quelles civilisations médiévales avons-nous étudiées dans l’unité précédente ?',
    revRA: 'L’Occident féodal et chrétien, et la civilisation musulmane.',
    situation: 'Regarde les visages d’une classe malgache : on y devine l’Asie et l’Afrique, parfois l’Arabie ou l’Europe. Écoute la langue : des mots cousins du malais, d’autres du swahili, d’autres de l’arabe. Le peuple malgache est né d’un extraordinaire rendez-vous de navigateurs — reconstitutions la frise de ces arrivées.',
    def: 'Le peuple malgache s’est formé à partir du brassage de plusieurs vagues de migration : les Austronésiens (IIIᵉ-IVᵉ siècle), ancêtres des Vazimba ; les Africains (VIIᵉ-VIIIᵉ siècle) ; les Indonésiens et Malaisiens (VIIᵉ siècle) ; les islamisés (IXᵉ siècle) — Antalaotra, Iharana, Zafiraminia, Antemoro ; les Européens à partir du XVᵉ siècle — découverte de Diégo-Suarez par les Portugais, de Fort-Dauphin par les Français, pirates et Zanamalata de la côte Est ; puis les Indiens et Indopakistanais au XIXᵉ siècle.',
    autrement: 'pendant plus de quinze siècles, des pirogues, des boutres puis des navires ont déposé sur l’île des familles venues d’Asie, d’Afrique, d’Arabie, d’Europe et d’Inde — et leur mélange a fait les Malgaches.',
    concept: 'Les premiers arrivés sont les Austronésiens : partis des îles de l’Asie du Sud-Est, ils traversent l’océan Indien sur leurs pirogues à balancier vers les IIIᵉ-IVᵉ siècles — leurs descendants anciens sont les Vazimba des traditions. Comment traverser 7 000 km d’océan ? Les courants marins et la mousson portent les navigateurs d’est en ouest : la carte des courants explique l’itinéraire, par cabotage le long des côtes de l’Inde et de l’Afrique ou par traversée directe. Suivent les Africains (VIIᵉ-VIIIᵉ siècles), venus de la côte orientale toute proche avec leurs zébus et leurs langues bantoues ; puis de nouvelles vagues indonésiennes et malaisiennes (VIIᵉ siècle). Au IXᵉ siècle arrivent les islamisés, commerçants mêlés d’Arabes, de Persans et de Swahilis : les Antalaotra fondent des comptoirs au Nord-Ouest, d’autres groupes s’installent à Iharana (Nord-Est), les Zafiraminia puis les Antemoro au Sud-Est. Au XVᵉ siècle, l’Europe aborde l’île : les Portugais reconnaissent la baie de Diégo-Suarez, les Français s’installent plus tard à Fort-Dauphin ; au XVIIᵉ-XVIIIᵉ siècle, les pirates hantent la côte Est — leurs enfants nés de mères malgaches, les Zanamalata, joueront un rôle chez les Betsimisaraka. Enfin, au XIXᵉ siècle, Indiens et Indopakistanais viennent commercer. La preuve du brassage ? La langue : fond austronésien, enrichi de mots bantous et d’apports du sorabe arabe — chaque vague a laissé sa trace dans notre bouche.',
    synthese: 'six vagues : Austronésiens IIIᵉ-IVᵉ (ancêtres des Vazimba), Africains VIIᵉ-VIIIᵉ, Indonésiens-Malaisiens VIIᵉ, islamisés IXᵉ (Antalaotra, Iharana, Zafiraminia, Antemoro), Européens XVᵉ (Diégo-Suarez, Fort-Dauphin, pirates et Zanamalata), Indiens-Indopakistanais XIXᵉ ; courants marins et mousson expliquent les traversées ; la langue malgache garde la trace de chaque vague.',
    method: ['Tracer la frise des vagues avec leurs siècles.', 'Sur la carte de l’océan Indien, suivre les itinéraires portés par courants et mousson.', 'Associer chaque vague à une trace encore visible (mots, zébu, sorabe, comptoirs).'],
    exemple: 'Le mot « vary » (riz) est cousin du malais « padi » : trace austronésienne. « Akoho » (poule) rappelle le swahili « kuku » : trace africaine. Les manuscrits sorabe : trace islamisée — trois vagues dans trois mots.',
    erreur: 'Croire que les migrations furent une « invasion » organisée : ce furent des arrivées successives de petits groupes — familles de navigateurs, commerçants, pasteurs — étalées sur quinze siècles, qui se sont mêlées aux habitants déjà présents.',
    saistu: 'La langue malgache a une sœur jumelle... à 7 500 kilomètres ! Le maanyan, parlé au sud de Bornéo (Indonésie), partage avec le malgache une grande partie de son vocabulaire de base. C’est l’une des plus belles preuves du voyage austronésien — la plus longue migration maritime de l’histoire ancienne de l’humanité, bien avant les caravelles européennes !',
    exos: ['Associe chaque vague à son siècle : a) Austronésiens ; b) islamisés ; d) Européens ; e) Indiens et Indopakistanais.',
      'Les repères. a) Qui sont les ancêtres des Vazimba ? b) Cite deux groupes islamisés et leur région. d) Qui découvre Diégo-Suarez ? Fort-Dauphin ? e) Qui sont les Zanamalata ?',
      'Analyse. a) Comment les courants marins ont-ils aidé les traversées ? b) Donne deux traces linguistiques de deux vagues différentes. d) Pourquoi parle-t-on de « brassage » ? e) Trace la frise complète des six vagues.'],
    corr: ['a) IIIᵉ-IVᵉ siècle ; b) IXᵉ siècle ; d) à partir du XVᵉ siècle ; e) XIXᵉ siècle.',
      'a) les Austronésiens, premiers arrivés ; b) les Antalaotra au Nord-Ouest, les Antemoro au Sud-Est (aussi : Iharana, Zafiraminia) ; d) les Portugais ; les Français ; e) les enfants des pirates et de mères malgaches, influents sur la côte Est.',
      'a) courants et mousson portent les bateaux d’est en ouest à travers l’océan Indien ; b) vary (austronésien), akoho (bantou) — ou sorabe (arabe) ; d) parce que les vagues se sont mélangées entre elles et avec les habitants déjà installés ; e) frise conforme à la figure de la leçon.'],
    fig: 'u4f1'
  },
  {
    t: 'Les zones d’implantation des premiers Malgaches', comp: 'Les origines du peuple malgache', theme: 'Les zones d’implantation et le rôle de l’archéologie',
    goal: 'localiser les zones d’implantation des premiers Malgaches et démontrer le rôle de l’archéologie',
    mat: 'Carte des zones d’implantation, photos de sites archéologiques',
    revQ: 'Cite les six vagues de migration avec leurs siècles.',
    revRA: 'Austronésiens IIIᵉ-IVᵉ ; Africains VIIᵉ-VIIIᵉ ; Indonésiens-Malaisiens VIIᵉ ; islamisés IXᵉ ; Européens XVᵉ ; Indiens XIXᵉ.',
    situation: 'Où poser sa pirogue quand on découvre une île grande comme un continent ? Près d’une baie abritée, d’une rivière poissonneuse, d’une plaine à zébus ? Chaque groupe de migrants a choisi son rivage — et des siècles plus tard, les archéologues retrouvent leurs villages enfouis, leurs poteries et leurs foyers. La carte du peuplement se reconstitue, fouille après fouille.',
    def: 'Les zones d’implantation des premiers Malgaches sont la côte Ouest, le Nord et le Nord-Ouest, le Nord-Est, le Sud-Est, le Sud et les Hautes Terres centrales. L’archéologie — l’étude des traces matérielles laissées par les hommes — joue un rôle essentiel pour l’Histoire du peuplement : les fouilles apportent des preuves concrètes (poteries, foyers, ossements, comptoirs) qui confirment, corrigent ou complètent les traditions orales.',
    autrement: 'les migrants se sont installés sur toutes les façades de l’île avant de gagner l’intérieur — et ce sont les fouilles archéologiques qui permettent de dater et de prouver ces installations.',
    concept: 'Le peuplement suit une logique : on aborde par les côtes, on remonte ensuite les fleuves vers l’intérieur. La côte Ouest, aux larges plaines, accueille pêcheurs et éleveurs ; le Nord et le Nord-Ouest, tournés vers l’Afrique et l’Arabie, voient fleurir les comptoirs des Antalaotra — Mahilaka, grande ville marchande fouillée par les archéologues, en est le joyau ; le Nord-Est abrite les navigateurs d’Iharana (Vohémar), dont les tombes ont livré de magnifiques objets ; le Sud-Est reçoit les islamisés Zafiraminia puis Antemoro, gardiens du sorabe ; le Sud, terre des pasteurs ; et les Hautes Terres centrales, conquises plus tardivement, se couvrent de rizières et de villages fortifiés de fossés. Comment le sait-on ? Par l’archéologie : à Taolambiby, au Sud, des os entaillés par l’homme sont datés scientifiquement ; dans la grotte d’Andavakoera et sur les sites du Nord, charbons et poteries racontent les premiers campements ; à Mahilaka, les murs d’une cité du XIᵉ siècle sortent du sable. La fouille est une source primaire : elle se fait couche par couche — plus c’est profond, plus c’est ancien —, chaque objet est photographié, daté, comparé. Là où les textes manquent, comme pour le Madagascar ancien, l’archéologie est la mémoire du sol : visiter un site, c’est lire une page d’histoire que personne n’a écrite.',
    synthese: 'six zones : côte Ouest, Nord/Nord-Ouest (comptoirs antalaotra, Mahilaka), Nord-Est (Iharana), Sud-Est (Zafiraminia, Antemoro), Sud, Hautes Terres (rizières, villages fortifiés) ; d’abord les côtes, puis l’intérieur ; l’archéologie fournit les preuves : fouilles, poteries, charbons datés.',
    method: ['Placer les six zones sur la carte de Madagascar.', 'Associer chaque zone à un groupe de migrants ou un mode de vie.', 'Citer pour une zone une preuve archéologique (site, objet, datation).'],
    exemple: 'Pour prouver l’ancienneté du comptoir de Mahilaka, l’archéologue croise trois indices : les murs dégagés, les tessons de céramique importée d’Arabie et de Chine, et la datation des charbons — trois preuves concordantes, conclusion solide.',
    erreur: 'Croire que l’archéologie « cherche des trésors » : elle cherche des informations. Un tas de cendres daté vaut plus pour l’historien qu’un bijou sans contexte — c’est pourquoi piller un site, c’est déchirer une page d’histoire à jamais.',
    saistu: 'À Vohémar (Iharana), les archéologues ont découvert des centaines de tombes contenant des bols de chlorite locale, des céramiques chinoises et des perles venues d’Inde : la preuve qu’au Moyen Âge, le Nord-Est malgache commerçait déjà avec la moitié du monde ! La Grande Île n’a jamais été isolée — elle était un carrefour de l’océan Indien.',
    exos: ['Associe chaque zone à son groupe : a) Nord-Ouest ; b) Sud-Est ; d) Nord-Est ; e) Hautes Terres centrales.',
      'L’archéologie. a) Définis l’archéologie. b) Cite trois types de traces qu’une fouille peut livrer. d) Pourquoi fouille-t-on couche par couche ? e) Cite un site archéologique malgache.',
      'Réfléchir. a) Pourquoi les migrants s’installent-ils d’abord sur les côtes ? b) Pourquoi les Hautes Terres sont-elles peuplées plus tard ? d) En quoi l’archéologie complète-t-elle la tradition orale ? e) Pourquoi le pillage d’un site est-il une perte pour l’Histoire ?'],
    corr: ['a) les comptoirs des Antalaotra ; b) les islamisés Zafiraminia puis Antemoro ; d) les navigateurs d’Iharana (Vohémar) ; e) les riziculteurs des villages fortifiés.',
      'a) l’étude des traces matérielles laissées par les hommes du passé ; b) poteries, foyers et charbons, ossements (aussi : murs, perles, outils) ; d) parce que les couches profondes sont les plus anciennes : la profondeur donne la chronologie ; e) Mahilaka, Vohémar, Taolambiby, Andavakoera (un suffit).',
      'a) parce qu’ils arrivent par la mer : baies abritées, pêche, commerce ; b) parce qu’il faut du temps pour remonter fleuves et falaises et aménager les rizières ; d) elle apporte des preuves matérielles datées, là où la tradition raconte sans dater ; e) parce qu’un objet arraché à son contexte ne peut plus rien prouver ni dater.'],
    fig: 'u4f2'
  },
  {
    t: 'Le peuple malgache : l’unité dans la diversité', comp: 'Les origines du peuple malgache', theme: 'Le peuple malgache et le sentiment national',
    goal: 'montrer les ressemblances et les différences entre les migrants et conscientiser la communauté à vivre en harmonie',
    mat: 'Portraits et images du peuple malgache, textes',
    revQ: 'Cite les six zones d’implantation des premiers Malgaches.',
    revRA: 'Côte Ouest, Nord/Nord-Ouest, Nord-Est, Sud-Est, Sud, Hautes Terres centrales.',
    situation: 'Un pêcheur vezo, une tisserande betsileo, un éleveur bara, une marchande betsimisaraka : quatre visages, quatre régions, quatre manières de vivre — et pourtant, qu’ils se rencontrent, et ils se comprennent : même langue, mêmes salutations, même respect des ancêtres. D’où vient ce miracle d’un peuple si divers et pourtant si un ?',
    def: 'Le peuple malgache est issu de plusieurs origines ; la nation malgache s’est construite à partir de l’identification de faits communs et manifeste un sentiment national : c’est l’unité dans la diversité. Les ressemblances entre les migrants portent sur la croyance, la langue malgache et la civilisation matérielle — élevage bovin et riziculture ; les différences portent sur la culture (variétés linguistiques régionales, mode vestimentaire, coiffure, us et coutumes) et sur la morphologie humaine, selon les apports asiatiques, africains et islamisés.',
    autrement: 'venus de partout, les Malgaches partagent l’essentiel — la langue, les croyances anciennes, le zébu et le riz — et gardent chacun leurs couleurs régionales : c’est cela, l’unité dans la diversité.',
    concept: 'Les ressemblances d’abord — le socle commun. La croyance : partout, le respect de Zanahary (le Créateur) et des razana (les ancêtres), le culte des tombeaux, les grandes cérémonies familiales. La langue : une seule langue malgache, comprise de Diégo à Fort-Dauphin — fait rarissime pour une île-continent ; l’Afrique voisine compte des centaines de langues sur des espaces semblables. La civilisation matérielle : le zébu, richesse et prestige, présent dans les rites comme dans les rizières ; la riziculture, cœur de l’alimentation et du calendrier. Les différences ensuite — les couleurs régionales : chaque région a sa variété de la langue (on dit « accent » ou dialecte), ses habits et coiffures, ses coutumes — ici le famadihana, là le tromba, ailleurs le savatse — ; et les visages varient selon le dosage des héritages asiatique, africain, arabe ou européen. Faut-il y voir des « races » ou des peuples séparés ? Non : les études montrent que chaque Malgache porte à la fois des ancêtres asiatiques et africains — le brassage est dans chacun de nous. C’est pourquoi la nation malgache n’est pas une addition de groupes, mais un sentiment national : la conscience d’une histoire, d’une langue et d’un destin partagés. Le devoir du citoyen — et de l’élève historien — est d’en être le gardien : valoriser chaque culture régionale comme une richesse de la nation, refuser les divisions, cultiver le fihavanana. L’unité n’efface pas la diversité : elle la fait chanter ensemble.',
    synthese: 'ressemblances : croyance (Zanahary, razana), langue malgache unique, zébu et riziculture ; différences : variétés régionales de langue, habits, coutumes, morphologies ; chaque Malgache porte le brassage en lui ; nation = sentiment national ; devoir : vivre en harmonie — l’unité dans la diversité.',
    method: ['Lister les ressemblances : croyance, langue, civilisation matérielle.', 'Lister les différences : variétés culturelles régionales et morphologies.', 'Conclure par le sentiment national et un engagement concret d’harmonie.'],
    exemple: 'Un exposé réussi : « le famadihana des Hautes Terres et le savatse du Sud diffèrent — mais tous deux honorent les ancêtres : différence de forme, ressemblance de fond. » Différence en surface, unité en profondeur : voilà la grille d’analyse.',
    erreur: 'Transformer les différences régionales en divisions : dire « eux » et « nous » entre Malgaches, c’est oublier que toutes les régions descendent des mêmes vagues mélangées. La diversité est une richesse à partager, jamais une frontière.',
    saistu: 'Le fihavanana est si central dans la culture malgache qu’aucun mot français ne le traduit exactement : parenté, amitié, solidarité et paix sociale à la fois ! Le proverbe le résume : « Aleo very tsikalakalam-bola toy izay very tsikalakalam-pihavanana » — mieux vaut perdre un peu d’argent que perdre le fihavanana. Toute une philosophie de l’unité en une phrase.',
    exos: ['Ressemblance ou différence ? a) Le respect des razana. b) La coiffure traditionnelle d’une région. d) La riziculture. e) La variété régionale de la langue.',
      'Le socle commun. a) Cite les trois grandes ressemblances entre les migrants. b) Pourquoi la langue unique est-elle un fait remarquable ? d) Quel rôle joue le zébu dans la vie malgache ? e) Que signifie « sentiment national » ?',
      'Vivre ensemble. a) Explique « l’unité dans la diversité ». b) Pourquoi dit-on que le brassage est « dans chacun de nous » ? d) Qu’est-ce que le fihavanana ? e) Propose deux actions concrètes pour renforcer l’harmonie entre élèves de régions différentes.'],
    corr: ['a) ressemblance ; b) différence ; d) ressemblance ; e) différence.',
      'a) la croyance, la langue malgache, la civilisation matérielle (zébu, riziculture) ; b) parce qu’une île aussi vaste aurait pu compter des dizaines de langues, comme les espaces voisins d’Afrique ; d) richesse, prestige, travail des rizières et place dans les rites ; e) la conscience d’appartenir à une même nation, par l’histoire et le destin partagés.',
      'a) les Malgaches partagent l’essentiel tout en gardant leurs particularités régionales ; b) parce que chaque Malgache descend à la fois des vagues asiatiques et africaines mélangées ; d) le lien de parenté, d’amitié et de solidarité qui fonde la paix sociale malgache ; e) réponse libre — exposés croisés sur les coutumes, jumelages, chants des différentes régions…'],
    fig: 'u4f3'
  }
];

const unit4 = {
  no: 4, roman: 'IV', name: 'Les origines du peuple malgache',
  rag: 'exploiter des traces du passé pour déterminer les origines du peuple malgache et interpréter la réalité sociale de l’unité dans la diversité.',
  valeurs: 'identité culturelle malgache, solidarité',
  sessions: S,
  revision: {
    table: [
      ['Vagues de migration', 'Austronésiens IIIᵉ-IVᵉ, Africains VIIᵉ-VIIIᵉ, Indonésiens VIIᵉ, islamisés IXᵉ, Européens XVᵉ, Indiens XIXᵉ', 'Élaborer la frise du peuplement'],
      ['Itinéraires', 'Courants marins et mousson ; pirogues à balancier, cabotage ou traversée directe', 'Expliquer les traversées'],
      ['Zones d’implantation', 'Côte Ouest, Nord/N-O (Antalaotra), N-E (Iharana), S-E (Antemoro), Sud, Hautes Terres', 'Localiser les installations'],
      ['Archéologie', 'Fouilles, poteries, charbons datés : preuves du peuplement (Mahilaka, Vohémar…)', 'Démontrer son rôle de source'],
      ['Ressemblances', 'Croyance, langue malgache, zébu et riziculture', 'Identifier le socle commun'],
      ['Unité dans la diversité', 'Différences régionales + brassage en chacun → sentiment national, fihavanana', 'Conscientiser à vivre en harmonie']
    ],
    questions: [
      'Trace la frise des six vagues de migration avec leurs siècles.',
      'Cite les groupes islamisés et leurs régions d’implantation.',
      'Énumère les six zones d’implantation et associe trois d’entre elles à un groupe.',
      'Montre par deux exemples le rôle de l’archéologie dans l’Histoire du peuplement.',
      'Présente deux ressemblances et deux différences entre les migrants, puis définis l’unité dans la diversité.'
    ],
    answers: [
      'Austronésiens IIIᵉ-IVᵉ ; Africains VIIᵉ-VIIIᵉ ; Indonésiens-Malaisiens VIIᵉ ; islamisés IXᵉ ; Européens XVᵉ ; Indiens-Indopakistanais XIXᵉ.',
      'Antalaotra (Nord-Ouest), Iharana (Nord-Est), Zafiraminia puis Antemoro (Sud-Est).',
      'Côte Ouest, Nord/Nord-Ouest (Antalaotra), Nord-Est (Iharana), Sud-Est (Antemoro), Sud (pasteurs), Hautes Terres (riziculteurs).',
      'Mahilaka : murs et céramiques d’une cité marchande ; Vohémar : tombes aux objets venus de Chine et d’Inde (aussi : Taolambiby, Andavakoera).',
      'Ressemblances : croyance, langue, zébu-riziculture ; différences : variétés régionales, morphologies ; unité dans la diversité : un socle commun, des couleurs régionales.'
    ]
  },
  exam: {
    exos: [
      'Questions de cours. a) Cite les six vagues de migration avec leurs siècles. b) Qui sont les Antalaotra ? d) Définis l’archéologie. e) Que signifie « unité dans la diversité » ?',
      'La frise du peuplement. a) Trace la frise des vagues de migration. b) Place les ancêtres des Vazimba. d) Place la découverte de Diégo-Suarez et son auteur. e) Quelle vague est la plus récente ?',
      'Les itinéraires et les zones. a) Explique le rôle des courants marins et de la mousson. b) Associe quatre zones d’implantation à leur groupe. d) Pourquoi les côtes sont-elles peuplées avant l’intérieur ? e) Cite un site archéologique et ce qu’il a livré.',
      'Document : « Dans les tombes de Vohémar, on a trouvé des bols de pierre locale, des céramiques de Chine et des perles d’Inde. » a) De quel type de source s’agit-il ? b) Que prouve la présence d’objets chinois et indiens ? d) Quelle zone d’implantation est concernée ? e) Pourquoi ces objets doivent-ils rester dans leur contexte de fouille ?',
      'Réflexion : l’unité dans la diversité. a) Présente les trois grandes ressemblances entre les migrants. b) Présente deux différences. d) Explique pourquoi le brassage est « dans chacun de nous ». e) Conclus en deux phrases sur le devoir d’harmonie de ta génération.'
    ],
    corr: [
      'a) Austronésiens IIIᵉ-IVᵉ, Africains VIIᵉ-VIIIᵉ, Indonésiens-Malaisiens VIIᵉ, islamisés IXᵉ, Européens XVᵉ, Indiens-Indopakistanais XIXᵉ ; b) des commerçants islamisés installés en comptoirs au Nord-Ouest ; d) l’étude des traces matérielles du passé ; e) un peuple aux origines diverses uni par un socle commun. Un point par item.',
      'a) frise conforme à la leçon ; b) IIIᵉ-IVᵉ siècle, vague austronésienne ; d) XVᵉ siècle, les Portugais ; e) les Indiens et Indopakistanais (XIXᵉ siècle). Un point par item.',
      'a) ils portent les navigateurs d’est en ouest à travers l’océan Indien ; b) N-O : Antalaotra ; N-E : Iharana ; S-E : Antemoro ; Hautes Terres : riziculteurs (ou Sud : pasteurs, Ouest : pêcheurs-éleveurs) ; d) parce qu’on arrive par la mer et qu’il faut du temps pour aménager l’intérieur ; e) Mahilaka : murs et céramiques importées (ou Vohémar, Taolambiby). Un point par item.',
      'a) une source matérielle (archéologique), source primaire ; b) que le Nord-Est malgache commerçait avec l’Asie : l’île était un carrefour de l’océan Indien ; d) le Nord-Est (Iharana/Vohémar) ; e) parce que hors contexte, un objet ne peut plus être daté ni rien prouver. Un point par item.',
      'a) croyance (Zanahary, razana), langue malgache unique, civilisation matérielle (zébu, riziculture) ; b) variétés régionales de langue et de coutumes ; morphologies variées ; d) chaque Malgache descend du mélange des vagues asiatiques et africaines ; e) réponse libre — valoriser chaque culture régionale et cultiver le fihavanana. Un point par item.'
    ]
  }
};

(async () => {
  const bufs = await L.render(figs);
  await buildUnit(unit4, bufs);
})();
