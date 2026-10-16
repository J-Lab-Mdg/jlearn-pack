// UNITÉ 2 — LE MONDE DEPUIS 1914 (PE T9) : 18 séances + révision + examen
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

figs.u2f1 = chain('Les innovations scientifiques du XXᵉ siècle', ['La science transforme la santé et la connaissance.'],
  ['médecine : vaccins généralisés, antibiotiques (pénicilline, 1928)', 'chirurgie : transfusions, greffes d’organes, imagerie médicale', 'biologie : découverte de la structure de l’ADN (1953)', 'physique : relativité, atome — énergie et questions nouvelles', 'résultat : l’espérance de vie double en un siècle']);
figs.u2f2 = chain('Les innovations technologiques majeures', ['Un siècle qui rétrécit la planète.'],
  ['1903 : premier vol des frères Wright — l’aviation est née', 'l’automobile se démocratise (Ford T, 1908)', 'radio puis télévision : l’information entre dans les foyers', '1946 : premiers ordinateurs ; années 1980 : le micro-ordinateur', 'années 1990 : Internet relie le monde ; puis le téléphone mobile']);
figs.u2f3 = chain('L’évolution des systèmes de production', ['Du chronomètre à l’usine mondiale.'],
  ['taylorisme : chaque geste chronométré', 'fordisme : le travail à la chaîne, la production de masse', 'automatisation : les machines et robots remplacent les bras', 'sociétés anonymes et concentration : des entreprises géantes', 'mondialisation et délocalisation : produire là où cela coûte moins']);
figs.u2f4 = chain('Les mutations socio-économiques du XXᵉ siècle', ['La société change avec l’économie.'],
  ['moins de paysans, plus d’ouvriers puis d’employés : tertiarisation', 'féminisation : les femmes entrent massivement au travail salarié', 'migrations : des campagnes vers les villes, des Suds vers les Nords', 'niveau de vie et espérance de vie en hausse ; société de consommation', 'mais un mal nouveau s’installe : le chômage de masse']);
figs.u2f5 = duo('L’Europe en 1914 : deux blocs face à face', ['Les systèmes d’alliances militaires.'],
  'TRIPLE-ENTENTE', ['France', 'Royaume-Uni', 'Russie'],
  'TRIPLE-ALLIANCE', ['Allemagne', 'Autriche-Hongrie', 'Italie']);
figs.u2f6 = chain('Les trois phases de la Première Guerre mondiale', ['1914-1918 : mouvement, position, mouvement.'],
  ['été 1914-1915 : guerre de MOUVEMENT — offensives rapides, puis blocage', '1915-mars 1918 : guerre de POSITION — les tranchées (Verdun, 1916)', 'mars-novembre 1918 : reprise du MOUVEMENT — offensives finales', '11 novembre 1918 : armistice — l’Allemagne vaincue demande la paix']);
figs.u2f7 = chain('Le bilan de la Grande Guerre', ['Un monde ruiné et bouleversé.'],
  ['pertes humaines : environ 10 millions de morts, des millions d’invalides', '1915 : le génocide des Arméniens dans l’Empire ottoman', 'pertes matérielles et économiques : régions dévastées, dettes énormes', 'traité de Versailles (1919) : l’Allemagne jugée responsable et punie', 'frontières bouleversées : quatre empires disparaissent']);
figs.u2f8 = duo('L’effort de guerre de Madagascar (1914-1918)', ['La colonie mobilisée pour la métropole.'],
  'PLAN ÉCONOMIQUE', ['ravitaillement en vivres (SICE)', 'viande, riz vers la France', 'hausse de la valeur des taxes'],
  'PLAN MILITAIRE', ['réquisitions d’hommes', 'plus de 40 000 tirailleurs', 'envoyés sur les fronts d’Europe']);
figs.u2f9 = chain('1917 : la révolution russe', ['De l’empire des tsars à l’URSS.'],
  ['février 1917 : le tsar Nicolas II abdique — la Russie épuisée par la guerre', 'octobre 1917 : les bolcheviks de Lénine prennent le pouvoir', 'paix immédiate, terres aux paysans, usines contrôlées', '1918-1921 : guerre civile — les bolcheviks l’emportent', '1922 : naissance de l’URSS, premier État communiste']);
figs.u2f10 = chain('L’engrenage de la crise de 1929', ['Du krach de Wall Street à la crise mondiale.'],
  ['24 octobre 1929 : le « jeudi noir » — la Bourse de New York s’effondre', 'banques ruinées → usines fermées → chômage de masse', 'la crise gagne l’Europe puis les colonies — dont Madagascar', 'misère et colère : les extrémismes progressent', '1933 : Roosevelt lance le New Deal pour relancer l’économie']);
figs.u2f11 = chain('Le stalinisme en URSS', ['Une dictature totale sur la société et l’économie.'],
  ['un chef tout-puissant : Staline, culte de la personnalité', 'la terreur : police politique, procès truqués, camps du goulag', 'collectivisation forcée des terres — famines terribles', 'industrialisation à marche forcée : plans quinquennaux, stakhanovisme', 'propriété privée interdite : l’État contrôle toute l’économie']);
figs.u2f12 = duo('Deux dictatures fascistes en Europe', ['Italie de Mussolini, Allemagne d’Hitler.'],
  'ITALIE FASCISTE', ['1922 : marche sur Rome', 'libertés supprimées', 'parti unique, propagande', 'ralliement de l’Église (1929)'],
  'ALLEMAGNE NAZIE', ['1933 : Hitler au pouvoir', 'dictature et antisémitisme', 'réarmement massif', '« espace vital » : vers la guerre']);
figs.u2f13 = chain('La Seconde Guerre mondiale (1939-1945)', ['Deux grandes phases.'],
  ['1ᵉʳ septembre 1939 : l’Allemagne envahit la Pologne', '1939-1942 : domination de l’Axe — Europe occupée, Pearl Harbor (1941)', '1942-1943 : le tournant — Stalingrad, El Alamein, Midway', '1942-1945 : victoires des Alliés — débarquements, reconquêtes', 'mai 1945 : capitulation allemande ; septembre 1945 : capitulation japonaise']);
figs.u2f14 = chain('Les conséquences de la Seconde Guerre mondiale', ['Le monde de 1945.'],
  ['50 à 60 millions de morts — dont 6 millions de Juifs exterminés', 'villes rasées, économies ruinées ; Hiroshima et Nagasaki atomisées', 'conférences de Yalta et de Potsdam (1945) : le monde réorganisé', '26 juin 1945 : la Charte de l’ONU est signée à San Francisco', 'Madagascar a fourni soldats et ravitaillement — les anciens combattants reviennent changés']);
figs.u2f15 = duo('De la SDN à l’ONU', ['Deux organisations pour la paix.'],
  'SDN (1920)', ['née du traité de Versailles', 'sans armée, sans les États-Unis', 'impuissante dans les années 1930', 'disparaît avec la guerre'],
  'ONU (1945)', ['51 États fondateurs, universelle', 'Conseil de sécurité, casques bleus', 'droits de l’Homme (1948)', 'missions de paix, dont en Afrique']);
figs.u2f16 = chain('La Guerre froide (1947-1962) : l’apogée', ['Deux blocs, un monde bipolaire.'],
  ['1947 : la rupture — doctrine Truman contre doctrine Jdanov', 'deux camps organisés : OTAN (1949) contre pacte de Varsovie (1955)', '1948-1949 : blocus de Berlin → création de la RFA et de la RDA', 'guerres périphériques : Corée (1950-1953), Indochine (1946-1954)', '1961 : construction du mur de Berlin']);
figs.u2f17 = chain('La détente et la fin de la Guerre froide (1962-1991)', ['Du bord du gouffre à la chute du mur.'],
  ['1962 : crise de Cuba — le monde frôle la guerre nucléaire', 'accords sur les armes : Moscou 1963, TNP 1968, SALT 1972', 'limites : Vietnam (1962-1975), Afghanistan (1979-1988)', '1985 : Gorbatchev — perestroïka et glasnost', '1989 : chute du mur de Berlin ; 1991 : fin de l’URSS']);
figs.u2f18 = chain('Le monde depuis les années 1990', ['De l’hyperpuissance au monde multipolaire.'],
  ['1991 : l’URSS disparaît — les États-Unis seuls « gendarmes du monde »', 'la mondialisation accélère les échanges et les interdépendances', 'conflits : Yougoslavie (1992-2001), génocide du Rwanda (1994)', 'Moyen-Orient : Golfe 1991, Afghanistan 2001, Irak 2003, Syrie 2011', 'montée du terrorisme et émergence de nouvelles puissances : monde multipolaire']);

const S = [
  {
    t: 'Les innovations scientifiques du XXᵉ siècle', comp: 'Le monde depuis 1914', theme: 'Les transformations scientifiques du XXᵉ siècle',
    goal: 'présenter les grandes innovations scientifiques du XXᵉ siècle et leurs effets sur la vie des hommes',
    mat: 'Frise des découvertes, images, biographies de savants',
    revQ: 'Récite les neuf étapes de la démarche de l’Histoire orale.',
    revRA: 'Sujet ; problématique ; sources écrites et orales ; témoins ; contact ; préparation ; interview ; analyse ; interprétation.',
    situation: 'En 1900, une simple infection pouvait tuer un enfant en quelques jours, et un médecin ne voyait rien à l’intérieur du corps de son patient. Un siècle plus tard, les antibiotiques guérissent en une semaine, les scanners photographient le cerveau, et l’on greffe des cœurs. Jamais la science n’avait autant changé la vie humaine en si peu de temps. Que s’est-il passé ?',
    legende: 'Du microscope à l’ADN : en un siècle, la science a doublé l’espérance de vie humaine.',
    motsCles: ['innovations scientifiques', 'médecine', 'vaccins', 'antibiotiques', 'pénicilline', '1928', 'greffes', 'imagerie médicale', 'ADN', '1953', 'espérance de vie'],
    sections: [
      {
        titre: 'La révolution médicale',
        paras: ['Le XXᵉ siècle est d’abord celui de la victoire sur les maladies :'],
        puces: [
          'les vaccins, généralisés pays après pays, font reculer la variole, la tuberculose, la poliomyélite ;',
          'en 1928, Alexander Fleming découvre la pénicilline, premier antibiotique : les infections qui tuaient par millions deviennent guérissables ;',
          'la chirurgie se transforme : transfusions sanguines, greffes d’organes, anesthésie sûre ;',
          'l’imagerie médicale — radiographie, puis scanner et échographie — permet de voir l’intérieur du corps sans l’ouvrir.',
        ],
      },
      {
        titre: 'Comprendre la matière et la vie',
        paras: [
          'Les sciences fondamentales avancent du même pas : la physique perce les secrets de l’atome et de l’énergie ; et en 1953, la découverte de la structure de l’ADN — la molécule qui porte l’hérédité — ouvre l’ère de la biologie moderne et de la génétique.',
        ],
      },
      {
        titre: 'Des vies transformées',
        paras: [
          'Le résultat se lit dans les chiffres : en un siècle, l’espérance de vie a presque doublé dans de nombreux pays. Mais la science du XXᵉ siècle a deux visages : la même physique qui soigne par les rayons a produit la bombe atomique. Le progrès scientifique pose désormais des questions morales — c’est à l’Homme de choisir l’usage de ses découvertes.',
        ],
      },
    ],
    doc: {
      titre: 'La découverte de la pénicilline',
      source: 'd’après le récit d’Alexander Fleming sur sa découverte de 1928 — extrait adapté',
      texte: 'En revenant de vacances, je triais de vieilles boîtes de culture où poussaient des microbes. Sur l’une d’elles, une moisissure s’était développée — et autour d’elle, chose étrange, les colonies de microbes avaient disparu. Quelque chose, dans cette moisissure, tuait les bactéries. J’aurais pu jeter la boîte ; je l’ai étudiée. La substance qu’elle produisait, que j’ai nommée pénicilline, s’est révélée capable de détruire les microbes les plus dangereux sans abîmer les cellules du corps. Je n’ai pas inventé la pénicilline : la nature l’a faite. Je n’ai eu que le mérite de ne pas passer à côté.',
      questions: ['Quel hasard est à l’origine de la découverte ?',
        'Quelle qualité du savant transforme ce hasard en découverte ?',
        'Pourquoi cette découverte est-elle l’une des plus importantes du siècle ?'],
      reponses: ['Une moisissure s’est développée par accident sur une boîte de culture oubliée — et elle tuait les microbes autour d’elle.',
        'L’esprit d’observation et la curiosité : au lieu de jeter la boîte « ratée », Fleming l’étudie — « le mérite de ne pas passer à côté ».',
        'Parce qu’elle fonde les antibiotiques : des millions de vies sont sauvées chaque année des infections autrefois mortelles.']
    },
    lexique: [
      ['Antibiotique', 'médicament qui détruit les bactéries responsables d’infections'],
      ['Vaccin', 'préparation qui apprend au corps à se défendre contre une maladie'],
      ['ADN', 'molécule porteuse de l’hérédité, dont la structure est décrite en 1953'],
      ['Espérance de vie', 'durée moyenne de vie d’une génération'],
    ],
    synthese: 'Innovations scientifiques du XXᵉ : médecine (vaccins, antibiotiques — pénicilline 1928, greffes, imagerie), physique (atome, énergie), biologie (ADN 1953). Résultat : l’espérance de vie double — mais la science a deux visages, et son usage est un choix moral.',
    saistu: 'La pénicilline de Fleming a dormi dix ans dans les revues scientifiques : personne ne savait la produire en grande quantité ! Ce sont les besoins de la Seconde Guerre mondiale qui ont tout accéléré — en 1944, les laboratoires alliés en produisaient assez pour tous les blessés du débarquement. La guerre, hélas, est souvent l’accélérateur des sciences.',
    exos: ['Associe chaque innovation à son domaine : a) la pénicilline ; b) le scanner ; d) l’ADN ; e) la greffe d’organes.',
      'Dates et noms. a) Qui découvre la pénicilline, et quand ? b) Quand la structure de l’ADN est-elle décrite ? d) Cite deux maladies vaincues par les vaccins. e) Qu’est-ce que l’imagerie médicale ?',
      'Réfléchir. a) Pourquoi dit-on que l’espérance de vie a « doublé » ? b) Montre que la science du XXᵉ siècle a « deux visages ». d) Pourquoi la découverte de Fleming doit-elle beaucoup à l’observation ? e) Cite une question morale posée par la science moderne.'],
    corr: ['a) la médecine (antibiotiques) ; b) l’imagerie médicale ; d) la biologie (génétique) ; e) la chirurgie.',
      'a) Alexander Fleming, en 1928 ; b) en 1953 ; d) variole, tuberculose, poliomyélite (deux suffisent) ; e) l’ensemble des techniques qui permettent de voir l’intérieur du corps (radio, scanner, échographie).',
      'a) parce que les morts par infections et maladies infantiles se sont effondrées : on vit en moyenne presque deux fois plus longtemps qu’en 1900 ; b) la même physique nucléaire soigne (rayons) et détruit (bombe atomique) ; d) sans son œil attentif, la boîte « ratée » partait à la poubelle ; e) réponse libre — usage de l’atome, manipulations génétiques, etc.'],
    fig: 'u2f1'
  },
  {
    t: 'Les innovations technologiques majeures', comp: 'Le monde depuis 1914', theme: 'Transports, communication, information : un monde rétréci',
    goal: 'présenter les grandes innovations technologiques du XXᵉ siècle : transports, communication, informatique',
    mat: 'Frise des inventions, images d’objets techniques, documents',
    revQ: 'Cite trois innovations scientifiques du XXᵉ siècle et leur effet.',
    revRA: 'Antibiotiques et vaccins (recul des maladies), imagerie médicale (diagnostic), ADN 1953 (génétique) — l’espérance de vie double.',
    situation: 'Ton arrière-arrière-grand-père mettait trois semaines de bateau pour aller de Toamasina à Marseille, et une lettre répondait deux mois plus tard. Aujourd’hui, l’avion fait le trajet en onze heures et un message arrive en une seconde. Entre les deux : l’avion, la radio, la télévision, l’ordinateur, Internet. Le XXᵉ siècle a rétréci la planète. Comment ?',
    legende: 'Avion, radio, ordinateur, Internet : un siècle d’inventions qui ont rétréci la planète.',
    motsCles: ['automobile', 'aviation', '1903', 'frères Wright', 'radio', 'télévision', 'ordinateur', '1946', 'micro-ordinateur', 'Internet', 'années 1990', 'téléphone mobile'],
    sections: [
      {
        titre: 'Les transports : la terre et le ciel conquis',
        paras: [
          'L’automobile, produite en masse à partir de la Ford T (1908), met la route à la portée des familles. Et le 17 décembre 1903, les frères Wright arrachent au sol le premier avion à moteur : douze secondes de vol qui ouvrent un siècle d’aviation — traversées des océans, avions à réaction, vols de ligne reliant tous les continents.',
        ],
      },
      {
        titre: 'La communication : l’information en direct',
        paras: [
          'La radio entre dans les foyers dans les années 1920 : pour la première fois, des millions de personnes entendent la même voix au même instant. La télévision suit après 1945 et devient la fenêtre du monde. L’information — et la propagande — voyagent désormais à la vitesse de l’onde.',
        ],
      },
      {
        titre: 'L’informatique : la révolution du siècle finissant',
        paras: ['La dernière révolution est la plus rapide :'],
        puces: [
          'en 1946, les premiers ordinateurs occupent des salles entières et calculent pour les armées et les savants ;',
          'dans les années 1980, le micro-ordinateur entre dans les bureaux puis les maisons ;',
          'dans les années 1990, Internet relie les ordinateurs du monde entier : textes, images et sons circulent instantanément ;',
          'le téléphone mobile, enfin, met tout cela dans la poche — jusqu’aux villages malgaches, où le mobile est arrivé avant la ligne fixe !',
        ],
      },
    ],
    doc: {
      titre: 'Le premier vol de l’histoire',
      source: 'd’après le récit d’Orville Wright sur le vol du 17 décembre 1903 à Kitty Hawk — extrait adapté',
      texte: 'Le vent soufflait fort ce matin-là sur les dunes. Le moteur lancé, l’appareil s’élança sur son rail, et je sentis les ailes porter : nous volions. Le vol ne dura que douze secondes et couvrit à peine quarante mètres — moins que l’envergure d’un grand avion d’aujourd’hui. Mais c’était la première fois dans l’histoire du monde qu’une machine portant un homme s’élevait par sa propre force, avançait sans perdre de vitesse et se posait sans se briser. Nous savions, mon frère et moi, que l’ère du vol venait de commencer.',
      questions: ['Relève les trois critères qui font de ce vol une « première mondiale ».',
        'Quel contraste l’auteur souligne-t-il entre ce vol et l’aviation moderne ?',
        'Pourquoi l’historien date-t-il volontiers une « ère nouvelle » d’un événement si modeste ?'],
      reponses: ['La machine s’élève par sa propre force, avance sans perdre de vitesse, et se pose sans se briser — un vol contrôlé complet.',
        'Douze secondes et quarante mètres — moins que l’envergure d’un avion moderne : le point de départ était minuscule.',
        'Parce que l’événement prouve que la chose est possible : tout le développement ultérieur découle de cette preuve — les douze secondes de 1903 contiennent le siècle de l’aviation.']
    },
    lexique: [
      ['Aviation', 'ensemble des techniques du vol des appareils plus lourds que l’air'],
      ['TSF', '« télégraphie sans fil » : la radio des débuts'],
      ['Micro-ordinateur', 'ordinateur individuel, assez petit pour un bureau'],
      ['Internet', 'réseau mondial reliant les ordinateurs entre eux'],
    ],
    synthese: 'Innovations technologiques : transports (automobile de masse, aviation depuis 1903) ; communication (radio années 1920, télévision après 1945) ; informatique (ordinateurs 1946, micro-ordinateur années 1980, Internet années 1990, mobile). La planète est « rétrécie ».',
    saistu: 'Madagascar est entré dans l’ère de l’aviation dès 1911 — huit ans seulement après Kitty Hawk ! — quand les premiers meetings aériens émerveillèrent Antananarivo. Et c’est un pionnier malgache, le prince Ramahatra, qui fut parmi les premiers pilotes malgaches formés en France. Les innovations du siècle n’ont jamais mis longtemps à atteindre la Grande Île.',
    exos: ['Associe chaque invention à sa période : a) premier vol motorisé ; b) Internet ; d) radio dans les foyers ; e) micro-ordinateur.',
      'Comprendre. a) Quelle voiture lance l’automobile de masse ? b) Que permet la radio pour la première fois ? d) Où les premiers ordinateurs servent-ils ? e) Pourquoi dit-on que le XXᵉ siècle a « rétréci » la planète ?',
      'Réfléchir. a) Compare le voyage Toamasina-Marseille en 1900 et aujourd’hui. b) Montre que la radio peut servir le meilleur et le pire. d) Pourquoi le mobile s’est-il répandu si vite dans les pays du Sud ? e) Classe ces inventions : transport, communication, information.'],
    corr: ['a) 1903 ; b) années 1990 ; d) années 1920 ; e) années 1980.',
      'a) la Ford T (1908) ; b) faire entendre la même voix à des millions de personnes au même instant ; d) dans les armées et les laboratoires ; e) parce que les distances se franchissent en heures et les messages en secondes.',
      'a) trois semaines de bateau contre onze heures d’avion ; b) elle informe en direct — mais elle a aussi diffusé la propagande des dictatures ; d) parce qu’il n’exige pas de réseau filaire : il a sauté l’étape de la ligne fixe ; e) transport : automobile, avion ; communication : radio, télévision, mobile ; information : ordinateur, Internet.'],
    fig: 'u2f2'
  },
  {
    t: 'L’évolution des systèmes de production', comp: 'Le monde depuis 1914', theme: 'Du taylorisme à la mondialisation',
    goal: 'expliquer l’évolution des méthodes de production et l’essor de la grande entreprise au XXᵉ siècle',
    mat: 'Schéma de la chaîne, documents, images d’usines',
    revQ: 'Cite quatre innovations technologiques majeures du XXᵉ siècle.',
    revRA: 'Aviation (1903), automobile de masse, radio-télévision, informatique et Internet (quatre parmi d’autres).',
    situation: 'En 1913, chez Ford, une voiture naissait toutes les 93 minutes ; en 2000, dans une usine robotisée, il en sort une par minute — et ses pièces viennent de dix pays différents. Entre les deux : le chronomètre de Taylor, le tapis roulant de Ford, les robots, et des entreprises devenues plus riches que des États. Comment produit-on au XXᵉ siècle ?',
    legende: 'Chronomètre, tapis roulant, robots, conteneurs : un siècle de course à la production.',
    motsCles: ['taylorisme', 'fordisme', 'production de masse', 'automatisation', 'société anonyme', 'actions', 'concentration', 'multinationale', 'mondialisation', 'délocalisation'],
    sections: [
      {
        titre: 'Produire plus : taylorisme, fordisme, automatisation',
        paras: ['Trois âges se succèdent dans l’organisation du travail :'],
        puces: [
          'le taylorisme chronomètre chaque geste de l’ouvrier pour supprimer les temps morts ;',
          'le fordisme ajoute le tapis roulant : le travail à la chaîne permet la production de masse — et des salaires plus élevés pour que les ouvriers achètent ce qu’ils produisent ;',
          'l’automatisation, enfin : machines-outils puis robots exécutent les gestes répétitifs — l’ouvrier surveille, règle, répare.',
        ],
      },
      {
        titre: 'L’essor de la grande entreprise',
        paras: [
          'Pour financer des usines géantes, l’entreprise change de forme : la société anonyme divise son capital en actions vendues au public — des milliers d’épargnants deviennent copropriétaires. Et la concentration regroupe les entreprises : rachats et fusions créent des groupes géants qui dominent un marché entier, présents dans des dizaines de pays — les multinationales.',
        ],
      },
      {
        titre: 'La mondialisation de la production',
        paras: [
          'À la fin du siècle, la production elle-même se mondialise : une entreprise conçoit dans un pays, fabrique dans un autre, vend partout. C’est la délocalisation : les usines migrent vers les pays où le travail coûte moins cher. Les économies deviennent interdépendantes — avec des emplois créés ici, perdus là : la mondialisation fait des gagnants et des perdants, et Madagascar, avec ses zones franches textiles, est entré à son tour dans ce grand jeu.',
        ],
      },
    ],
    doc: {
      titre: 'Henry Ford explique la chaîne',
      source: 'd’après Henry Ford, Ma vie et mon œuvre (1922) — extrait adapté',
      texte: 'Le principe est simple : amener le travail à l’homme au lieu d’amener l’homme au travail. Chaque ouvrier reste à sa place et n’accomplit qu’un geste, toujours le même ; la pièce avance devant lui sur un transporteur, à hauteur de main, à vitesse réglée. Avant la chaîne, le montage d’un châssis demandait plus de douze heures ; il en demande aujourd’hui moins de deux. Produire en masse, c’est produire à bas prix ; et produire à bas prix, c’est permettre à des millions d’hommes — à commencer par mes propres ouvriers — d’acheter une automobile.',
      questions: ['Résume le principe de la chaîne dans les mots de Ford.',
        'Quel gain de temps Ford annonce-t-il, et qu’en fait-il ?',
        'Quel est le revers de ce système pour l’ouvrier ?'],
      reponses: ['« Amener le travail à l’homme » : l’ouvrier est fixe, la pièce avance devant lui, et il répète un seul geste à vitesse réglée.',
        'De plus de douze heures à moins de deux pour un châssis : le gain abaisse les prix — et ouvre l’achat de l’automobile aux masses, ouvriers compris.',
        'Un travail répétitif, cadencé par la machine, vidé de tout savoir-faire : l’ouvrier devient un geste — c’est la critique constante faite au travail à la chaîne.']
    },
    lexique: [
      ['Société anonyme', 'entreprise dont le capital est divisé en actions'],
      ['Concentration', 'regroupement d’entreprises en groupes géants'],
      ['Multinationale', 'entreprise implantée dans de nombreux pays'],
      ['Délocalisation', 'transfert de la production vers un pays à moindre coût'],
    ],
    synthese: 'Production au XXᵉ : taylorisme (gestes chronométrés) → fordisme (chaîne, production de masse) → automatisation (robots). Entreprise : sociétés anonymes (actions), concentration (multinationales). Fin de siècle : mondialisation et délocalisations — économies interdépendantes.',
    saistu: 'Les zones franches de Madagascar sont nées de la mondialisation : depuis 1990, des entreprises du monde entier y font coudre vêtements et textiles — des centaines de milliers d’emplois, surtout féminins, à Antananarivo et Antsirabe. Le tee-shirt cousu à Madagascar se vend à Paris ou New York : la Grande Île est un maillon des chaînes mondiales de production.',
    exos: ['Associe : a) gestes chronométrés ; b) tapis roulant ; d) robots ; e) usines transférées à l’étranger.',
      'L’entreprise. a) Qu’est-ce qu’une action ? b) Pourquoi la société anonyme permet-elle de grandes usines ? d) Qu’est-ce que la concentration ? e) Définis la multinationale.',
      'Réfléchir. a) Pourquoi Ford augmente-t-il les salaires de ses ouvriers ? b) Quels sont les gagnants et les perdants d’une délocalisation ? d) Montre que les économies sont devenues interdépendantes. e) Situe Madagascar dans la mondialisation.'],
    corr: ['a) le taylorisme ; b) le fordisme ; d) l’automatisation ; e) la délocalisation.',
      'a) une part du capital d’une société, achetable et vendable ; b) parce qu’elle rassemble l’épargne de milliers d’actionnaires ; d) le regroupement d’entreprises par rachats et fusions ; e) une entreprise implantée et produisant dans de nombreux pays.',
      'a) pour que ses ouvriers puissent acheter les voitures qu’ils produisent — la production de masse exige une consommation de masse ; b) gagnants : consommateurs (prix bas) et pays d’accueil (emplois) ; perdants : les ouvriers du pays de départ ; d) une crise ou une rupture dans un pays se répercute sur tous les autres ; e) les zones franches textiles depuis 1990 : Madagascar produit pour les marchés mondiaux.'],
    fig: 'u2f3'
  },
  {
    t: 'Les mutations socio-économiques', comp: 'Le monde depuis 1914', theme: 'La société transformée par l’économie',
    goal: 'décrire les mutations socio-économiques du XXᵉ siècle : secteurs, féminisation, migrations, consommation, chômage',
    mat: 'Graphiques des secteurs, documents, images',
    revQ: 'Distingue taylorisme, fordisme et automatisation.',
    revRA: 'Taylorisme : gestes chronométrés ; fordisme : travail à la chaîne et production de masse ; automatisation : machines et robots remplacent les gestes.',
    situation: 'Regarde une photo de famille de 1920 : le grand-père est paysan, la grand-mère au foyer, et l’on vit à huit dans deux pièces. Photo de 2000 : la petite-fille est comptable, sa mère infirmière, le réfrigérateur est plein et la voiture au garage — mais l’oncle cherche un emploi depuis deux ans. En trois générations, la société entière a changé de visage. Que s’est-il passé ?',
    legende: 'Des champs aux bureaux, du panier au caddie : trois générations qui changent de monde.',
    motsCles: ['secteur primaire', 'secteur secondaire', 'secteur tertiaire', 'tertiarisation', 'féminisation', 'migrations', 'exode rural', 'espérance de vie', 'pouvoir d’achat', 'société de consommation', 'chômage'],
    sections: [
      {
        titre: 'Le grand basculement des secteurs',
        paras: [
          'On classe les activités en trois secteurs : le primaire (agriculture, pêche, mines), le secondaire (industrie, construction), le tertiaire (services : commerce, transports, santé, éducation, banques). Au XXᵉ siècle, dans les pays industrialisés, le primaire s’effondre — les machines remplacent les bras des champs —, le secondaire monte puis recule, et le tertiaire triomphe : c’est la tertiarisation de l’économie. Autre basculement : la féminisation — les femmes entrent massivement dans le travail salarié, des usines aux bureaux, et conquièrent peu à peu l’égalité professionnelle.',
        ],
      },
      {
        titre: 'Des hommes en mouvement',
        paras: [
          'Ces bouleversements déplacent les populations : exode rural des campagnes vers les villes, et grandes migrations internationales — des pays pauvres vers les pays riches, au rythme des besoins de main-d’œuvre et des crises.',
        ],
      },
      {
        titre: 'Mieux vivre — mais le chômage',
        paras: ['Le bilan du siècle est contrasté :'],
        puces: [
          'l’espérance de vie s’allonge, le niveau de vie et le pouvoir d’achat progressent fortement ;',
          'la société de consommation s’installe : équipement des foyers, publicité, crédit, supermarchés — consommer devient un mode de vie ;',
          'mais le chômage devient un mal de masse : à chaque crise — 1929, années 1970, 2008 —, des millions de travailleurs perdent leur emploi ; la peur du chômage marque désormais toutes les sociétés.',
        ],
      },
    ],
    doc: {
      titre: 'Une famille dans le siècle',
      source: 'texte reconstitué d’après les études sur l’évolution des modes de vie au XXᵉ siècle',
      texte: 'Mon grand-père, né en 1900, était le septième enfant d’une famille de paysans ; il a quitté l’école à onze ans pour les champs. Mon père, né en 1935, est devenu ouvrier à la ville : il a connu la paie fixe, le logement avec l’eau courante, la première voiture — et le premier réfrigérateur, que les voisins venaient admirer. Moi, née en 1965, je travaille dans une banque ; ma fille étudie à l’université. En trois générations, notre famille est passée des champs à l’usine, puis au bureau — et nos enfants vivent trente ans de plus que nos aïeux.',
      questions: ['Retrouve les trois secteurs économiques dans l’itinéraire de la famille.',
        'Relève deux signes de l’amélioration des conditions de vie.',
        'Pourquoi ce texte est-il « reconstitué », et que représente-t-il ?'],
      reponses: ['Le grand-père au primaire (paysan), le père au secondaire (ouvrier), la narratrice au tertiaire (banque) : la tertiarisation en une seule famille.',
        'L’eau courante, le réfrigérateur, la voiture, les études de la fille, l’allongement de la vie (« trente ans de plus ») — deux suffisent.',
        'Aucune famille précise n’est citée : le récit condense des trajectoires typiques établies par les études — il représente l’expérience de millions de familles du siècle.']
    },
    lexique: [
      ['Tertiarisation', 'part croissante des services dans l’économie'],
      ['Féminisation', 'entrée massive des femmes dans le travail salarié'],
      ['Société de consommation', 'société organisée autour de l’achat de biens'],
      ['Pouvoir d’achat', 'quantité de biens qu’un revenu permet d’acheter'],
    ],
    synthese: 'Mutations du XXᵉ : primaire en recul, tertiaire triomphant (tertiarisation) ; féminisation du travail ; exode rural et migrations internationales ; espérance et niveau de vie en hausse, société de consommation — mais chômage de masse à chaque crise.',
    saistu: 'Le premier supermarché « libre-service » a semblé une folie : laisser les clients se servir eux-mêmes dans les rayons ! Inventée aux États-Unis en 1916, la formule a conquis le monde après 1945 — caddie (1937), codes-barres (1974), publicité télévisée… À Antananarivo aussi, les grandes surfaces ont changé les habitudes : la société de consommation est mondiale.',
    exos: ['Classe dans son secteur : a) une rizière ; b) une cimenterie ; d) un hôpital ; e) une banque.',
      'Comprendre. a) Définis la tertiarisation. b) Qu’est-ce que la féminisation du travail ? d) Cite deux grandes migrations du siècle. e) Cite trois signes de la société de consommation.',
      'Réfléchir. a) Pourquoi le secteur primaire a-t-il tant reculé ? b) Montre que le bilan social du siècle est contrasté. d) Quelles crises ont fait exploser le chômage ? e) La tertiarisation vaut-elle aussi pour Madagascar ? Nuance.'],
    corr: ['a) primaire ; b) secondaire ; d) tertiaire ; e) tertiaire.',
      'a) la part croissante des services dans l’emploi et l’économie ; b) l’entrée massive des femmes dans le travail salarié ; d) l’exode rural et les migrations des pays pauvres vers les pays riches ; e) équipement des foyers, publicité, crédit, supermarchés (trois suffisent).',
      'a) parce que les machines agricoles remplacent les bras : moins de paysans produisent davantage ; b) niveau de vie et espérance de vie en hausse, mais chômage de masse et inégalités ; d) 1929, les années 1970, 2008 ; e) en partie : les services croissent en ville, mais la majorité des Malgaches travaille encore dans l’agriculture — le primaire domine toujours.'],
    fig: 'u2f4'
  },
  {
    t: 'Les origines de la Première Guerre mondiale', comp: 'Le monde depuis 1914', theme: 'Tensions, alliances et étincelle de Sarajevo',
    goal: 'expliquer les origines de la Première Guerre mondiale : tensions, systèmes d’alliances, attentat de Sarajevo',
    mat: 'Carte de l’Europe en 1914, schéma des alliances, frise',
    revQ: 'Cite trois mutations socio-économiques du XXᵉ siècle.',
    revRA: 'Tertiarisation, féminisation du travail, migrations, société de consommation, chômage de masse (trois suffisent).',
    situation: '28 juin 1914, Sarajevo. Deux coups de feu claquent : l’archiduc héritier d’Autriche-Hongrie s’effondre. Un attentat local, dans une ville des Balkans que presque personne ne sait placer sur une carte… Cinq semaines plus tard, toute l’Europe est en guerre — et bientôt le monde, colonies comprises. Comment deux coups de feu ont-ils pu embraser la planète ? Parce que l’Europe était une poudrière : l’attentat n’a été que l’étincelle.',
    legende: 'L’Europe de 1914 est une poudrière ; Sarajevo ne sera que l’étincelle.',
    motsCles: ['tensions économiques', 'rivalités coloniales', 'Alsace-Lorraine', 'course aux armements', 'systèmes d’alliances', 'Triple-Entente', 'Triple-Alliance', 'Sarajevo', '28 juin 1914', 'engrenage'],
    sections: [
      {
        titre: 'Une Europe sous tension',
        paras: ['Depuis vingt ans, les tensions s’accumulent entre puissances européennes :'],
        puces: [
          'tensions économiques : l’industrie allemande, devenue la première d’Europe, dispute marchés et colonies aux Britanniques et aux Français ;',
          'tensions politiques : la France n’a jamais accepté la perte de l’Alsace-Lorraine (1871) ; les Balkans, où l’Autriche-Hongrie et la Russie s’affrontent par peuples interposés, sont la « poudrière de l’Europe » ;',
          'et chacun s’arme : la course aux armements remplit les arsenaux — canons, cuirassés, millions de soldats mobilisables.',
        ],
      },
      {
        titre: 'Les alliances : la mécanique fatale',
        paras: [
          'Pour se protéger, les puissances se lient par des alliances militaires : d’un côté la Triple-Entente — France, Royaume-Uni, Russie ; de l’autre la Triple-Alliance — Allemagne, Autriche-Hongrie, Italie. Les colonies sont embarquées d’avance : si la métropole entre en guerre, ses colonies — hommes et ressources — y entrent aussi. Ces alliances, censées dissuader, transforment en fait tout conflit local en conflit général : que deux pays s’affrontent, et leurs alliés suivent en cascade.',
        ],
      },
      {
        titre: 'L’étincelle et l’engrenage',
        paras: [
          'Le 28 juin 1914, un nationaliste serbe de Bosnie assassine à Sarajevo l’archiduc François-Ferdinand, héritier d’Autriche-Hongrie. L’Autriche adresse un ultimatum à la Serbie, puis lui déclare la guerre ; la Russie mobilise pour protéger la Serbie ; l’Allemagne déclare la guerre à la Russie puis à la France ; l’invasion de la Belgique fait entrer le Royaume-Uni. Début août 1914, l’engrenage des alliances a jeté l’Europe entière — et ses empires coloniaux — dans la guerre.',
        ],
      },
    ],
    doc: {
      titre: 'L’engrenage de l’été 1914',
      source: 'd’après les dépêches diplomatiques échangées en juillet-août 1914 — extraits adaptés',
      texte: '23 juillet, Vienne à Belgrade : « Le gouvernement austro-hongrois exige une réponse dans les quarante-huit heures. » — 28 juillet, Vienne : « L’Autriche-Hongrie se considère en état de guerre avec la Serbie. » — 30 juillet, Saint-Pétersbourg : « Sa Majesté a ordonné la mobilisation générale de l’armée russe. » — 1ᵉʳ août, Berlin : « L’Allemagne se trouve en état de guerre avec la Russie. » — 3 août, Berlin à Paris : « L’Empire allemand se considère en état de guerre avec la France. » — 4 août, Londres : « Les troupes allemandes ayant violé la neutralité de la Belgique, un état de guerre existe entre la Grande-Bretagne et l’Allemagne. »',
      questions: ['Établis la chronologie exacte des entrées en guerre.',
        'Montre que chaque déclaration découle de la précédente.',
        'Pourquoi parle-t-on d’« engrenage » plutôt que de décision unique ?'],
      reponses: ['28 juillet : Autriche-Serbie ; 30 juillet : mobilisation russe ; 1ᵉʳ août : Allemagne-Russie ; 3 août : Allemagne-France ; 4 août : Royaume-Uni-Allemagne — douze jours suffisent.',
        'L’ultimatum entraîne la guerre austro-serbe, qui entraîne la mobilisation russe, qui déclenche la déclaration allemande, qui entraîne la France alliée, et la violation de la Belgique fait entrer Londres : chaque maillon tire le suivant.',
        'Parce qu’aucun État ne décide « la guerre mondiale » : chacun applique son alliance et sa mobilisation — la mécanique collective dépasse les volontés : c’est l’engrenage.']
    },
    lexique: [
      ['Ultimatum', 'exigence finale assortie d’un délai, sous menace de guerre'],
      ['Mobilisation', 'appel de tous les soldats et réservistes sous les drapeaux'],
      ['Alliance militaire', 'engagement de se défendre mutuellement en cas de guerre'],
      ['Nationalisme', 'exaltation de la nation, pouvant mener à l’affrontement'],
    ],
    synthese: 'Origines de la PGM : tensions économiques (rivalités industrielles et coloniales) et politiques (Alsace-Lorraine, Balkans), course aux armements ; alliances — Triple-Entente (France, Royaume-Uni, Russie) contre Triple-Alliance (Allemagne, Autriche-Hongrie, Italie) ; étincelle : Sarajevo, 28 juin 1914 → engrenage d’août 1914, colonies entraînées.',
    saistu: 'L’Italie, membre de la Triple-Alliance, n’est pas entrée en guerre aux côtés de l’Allemagne : estimant que l’Autriche était l’agresseur, elle resta neutre — puis rejoignit la Triple-Entente en 1915 ! Preuve que les alliances n’étaient pas automatiques… sauf quand les états-majors avaient déjà lancé leurs plans de mobilisation, impossibles à arrêter une fois déclenchés.',
    exos: ['Les alliances. a) Cite les trois pays de la Triple-Entente. b) Et ceux de la Triple-Alliance. d) Pourquoi les colonies sont-elles entraînées ? e) Quel pays changera de camp ?',
      'Les tensions. a) Quelle province oppose France et Allemagne ? b) Pourquoi les Balkans sont-ils une « poudrière » ? d) Qu’est-ce que la course aux armements ? e) Quelle rivalité économique oppose l’Allemagne au Royaume-Uni ?',
      'L’engrenage. a) Que se passe-t-il le 28 juin 1914 ? b) Reconstitue la cascade de l’été 1914. d) Pourquoi l’attentat n’est-il qu’une « étincelle » ? e) Pouvait-on arrêter l’engrenage ? Discute.'],
    corr: ['a) France, Royaume-Uni, Russie ; b) Allemagne, Autriche-Hongrie, Italie ; d) parce qu’elles appartiennent aux métropoles en guerre : hommes et ressources sont mobilisés ; e) l’Italie (1915).',
      'a) l’Alsace-Lorraine, perdue par la France en 1871 ; b) parce que l’Autriche-Hongrie et la Russie s’y affrontent à travers les peuples balkaniques ; d) l’accumulation d’armes et de soldats par toutes les puissances ; e) la rivalité industrielle et commerciale — l’Allemagne est devenue la première industrie d’Europe.',
      'a) l’assassinat de l’archiduc François-Ferdinand à Sarajevo ; b) ultimatum autrichien → guerre austro-serbe → mobilisation russe → déclarations allemandes à la Russie puis à la France → invasion de la Belgique → entrée britannique ; d) parce que la poudrière était prête : tensions et alliances avaient tout préparé ; e) réponse argumentée — les mobilisations lancées, les plans militaires rendaient le recul presque impossible.'],
    fig: 'u2f5'
  },
  {
    t: 'Le déroulement de la Première Guerre mondiale', comp: 'Le monde depuis 1914', theme: 'Les trois phases de la guerre (1914-1918)',
    goal: 'présenter les trois phases de la Première Guerre mondiale et l’évolution de l’armement',
    mat: 'Carte des fronts, frise des phases, images des tranchées',
    revQ: 'Récite l’engrenage de l’été 1914.',
    revRA: 'Sarajevo (28 juin) → ultimatum et guerre austro-serbe → mobilisation russe → déclarations allemandes → invasion de la Belgique → entrée britannique.',
    situation: 'Août 1914 : les soldats partent « la fleur au fusil », persuadés d’être rentrés pour Noël. Ils resteront quatre ans — terrés dans des tranchées, sous des déluges d’obus, dans une guerre que personne n’avait imaginée. Comment la guerre fraîche et joyeuse annoncée est-elle devenue la plus terrible boucherie que le monde eût connue ?',
    legende: 'Partis pour quelques semaines, les soldats resteront quatre ans dans la boue des tranchées.',
    motsCles: ['guerre de mouvement', 'guerre de position', 'tranchées', 'Verdun', '1916', 'armes nouvelles', 'gaz', 'chars', 'aviation', 'fronts', 'armistice', '11 novembre 1918'],
    sections: [
      {
        titre: 'Été 1914-1915 : la guerre de mouvement',
        paras: [
          'Les plans prévoyaient une guerre courte : l’Allemagne envahit la Belgique et fonce vers Paris ; les Français contre-attaquent et arrêtent l’invasion sur la Marne (septembre 1914). Chacun tente alors de déborder l’autre — en vain : à la fin de 1914, les armées s’enterrent face à face, de la mer du Nord à la Suisse. À l’est, Allemands et Russes s’affrontent sur un front immense.',
        ],
      },
      {
        titre: '1915-mars 1918 : la guerre de position',
        paras: ['La guerre s’immobilise dans les tranchées :'],
        puces: [
          'deux lignes fortifiées se font face, séparées par le no man’s land hérissé de barbelés ;',
          'les offensives pour percer échouent dans des bains de sang : Verdun (1916) — dix mois, plus de 700 000 morts, blessés ou disparus — et la Somme la même année ;',
          'l’armement évolue sans cesse : artillerie massive, gaz de combat, premiers chars, aviation de chasse et d’observation — la guerre devient industrielle ;',
          'les fronts se multiplient : ouest, est, Balkans, Italie, Moyen-Orient — et les empires coloniaux fournissent soldats et travailleurs, dont les tirailleurs malgaches.',
        ],
      },
      {
        titre: 'Mars-novembre 1918 : le mouvement reprend — et la fin',
        paras: [
          'En 1917, tout bascule : la Russie en révolution quitte la guerre, mais les États-Unis entrent aux côtés de l’Entente. Au printemps 1918, l’Allemagne joue son va-tout par de grandes offensives — percées d’abord, puis épuisement. À l’été, les Alliés, renforcés des Américains et des chars, contre-attaquent sans relâche. Vaincue, l’Allemagne signe l’armistice le 11 novembre 1918, à 11 heures : les armes se taisent enfin.',
        ],
      },
    ],
    doc: {
      titre: 'Lettre d’un soldat de Verdun',
      source: 'd’après les lettres de soldats français du front de Verdun (1916) — extraits adaptés',
      texte: 'Ma chère mère, ne crois pas les journaux qui parlent de gloire. Ici, il n’y a ni gloire ni charge héroïque : il y a la boue, le froid, et les obus qui tombent jour et nuit. Nous vivons terrés comme des taupes ; quand le bombardement cesse, c’est pour l’assaut, et ceux qui sortent ne reviennent pas tous. J’ai vu des villages entiers disparaître, retournés par les obus comme un champ par la charrue. Si je reviens, je te raconterai ce qu’aucun journal n’écrit. Ton fils qui pense à toi, du fond de sa tranchée.',
      questions: ['Que reproche le soldat aux journaux de l’époque ?',
        'Relève trois réalités de la guerre de position décrites dans la lettre.',
        'Pourquoi les lettres de soldats sont-elles des sources précieuses — et à critiquer ?'],
      reponses: ['De masquer la réalité sous un discours de gloire : la censure et la propagande (le « bourrage de crâne ») embellissaient la guerre.',
        'La vie terrée dans la boue, les bombardements continus, les assauts meurtriers, les paysages anéantis (trois suffisent).',
        'Elles disent le vécu réel que la presse censurée taisait ; mais chaque lettre reste un regard individuel — et certaines s’autocensuraient pour rassurer les familles : on les croise, comme toujours.']
    },
    lexique: [
      ['Guerre de mouvement', 'phase d’offensives rapides et de déplacements des armées'],
      ['Guerre de position', 'phase où les armées s’immobilisent dans les tranchées'],
      ['No man’s land', 'zone mortelle entre les deux lignes de tranchées'],
      ['Armistice', 'arrêt des combats signé entre les belligérants'],
    ],
    synthese: 'Trois phases : mouvement (été 1914-1915 : invasion, Marne, enterrement) ; position (1915-mars 1918 : tranchées, Verdun 1916, armes nouvelles — gaz, chars, aviation) ; mouvement (mars-novembre 1918 : offensives allemandes puis contre-offensives alliées). Armistice : 11 novembre 1918.',
    saistu: 'À Verdun, l’artillerie a tiré tant d’obus — environ 60 millions ! — que le sol en est encore bouleversé et truffé de métal : un siècle après, des « démineurs » y ramassent toujours des tonnes d’obus non explosés chaque année, et neuf villages détruits n’ont jamais été reconstruits. On les appelle les « villages morts pour la France » : ils ont encore un maire, mais plus un seul habitant.',
    exos: ['Les phases. a) Donne les dates de la guerre de mouvement initiale. b) Et celles de la guerre de position. d) Quand le mouvement reprend-il ? e) Quand et à quelle heure l’armistice est-il signé ?',
      'Comprendre. a) Quelle bataille arrête l’invasion en 1914 ? b) Cite trois armes nouvelles de la guerre. d) Que se passe-t-il en 1917 côté russe et côté américain ? e) Pourquoi 1917 est-il un tournant ?',
      'Document. a) Qu’est-ce que le « bourrage de crâne » ? b) Pourquoi Verdun est-il resté un symbole ? d) Quel rôle jouent les colonies dans la guerre ? e) Compare guerre de mouvement et guerre de position en deux phrases.'],
    corr: ['a) été 1914-1915 ; b) 1915-mars 1918 ; d) de mars à novembre 1918 ; e) le 11 novembre 1918, à 11 heures.',
      'a) la bataille de la Marne (septembre 1914) ; b) gaz de combat, chars, aviation, artillerie massive (trois suffisent) ; d) la Russie en révolution quitte la guerre ; les États-Unis entrent aux côtés de l’Entente ; e) parce que le retrait russe et l’arrivée américaine changent l’équilibre des forces.',
      'a) la propagande qui embellissait la guerre dans la presse ; b) dix mois d’enfer et plus de 700 000 victimes pour quelques kilomètres : le symbole de la guerre d’usure ; d) elles fournissent soldats (tirailleurs) et travailleurs ; e) mouvement : les armées avancent et manœuvrent ; position : elles s’enterrent face à face et s’usent sur place.'],
    fig: 'u2f6'
  },
  {
    t: 'Les conséquences de la Première Guerre mondiale', comp: 'Le monde depuis 1914', theme: 'Le monde au lendemain de la Grande Guerre',
    goal: 'dresser le bilan humain, matériel et politique de la guerre : pertes, génocide arménien, traité de Versailles, nouvelles frontières',
    mat: 'Cartes avant/après, tableau du bilan, extraits du traité',
    revQ: 'Cite les trois phases de la Première Guerre mondiale avec leurs dates.',
    revRA: 'Mouvement (été 1914-1915), position (1915-mars 1918), mouvement (mars-novembre 1918).',
    situation: '11 novembre 1918 : les cloches sonnent, la foule danse — mais dans chaque village, des listes de noms s’allongent sur les monuments. L’Europe victorieuse est exsangue : dix millions de morts, des régions rasées, des caisses vides. Et à Versailles, les vainqueurs redessinent la carte du monde sur les ruines de quatre empires. Que laisse la Grande Guerre derrière elle ?',
    legende: 'Sur chaque place de village, un monument : la liste des noms dit le prix de la victoire.',
    motsCles: ['pertes humaines', 'dix millions de morts', 'génocide des Arméniens', '1915', 'pertes matérielles', 'pertes économiques', 'traité de Versailles', '28 juin 1919', 'article 231', 'réparations', 'nouvelles frontières', 'SDN'],
    sections: [
      {
        titre: 'Le bilan humain : une saignée',
        paras: [
          'Environ dix millions de soldats sont morts, et des millions d’autres reviennent mutilés — les « gueules cassées » ; les civils ont souffert des occupations, des famines et de la grippe espagnole qui suit la guerre. Toute une génération manque : la France, par exemple, a perdu près d’un jeune homme actif sur dix. Et pendant la guerre même, en 1915, l’Empire ottoman a perpétré le génocide des Arméniens : plus d’un million de personnes exterminées par déportations et massacres — le premier génocide du XXᵉ siècle, dont la mémoire reste un devoir.',
        ],
      },
      {
        titre: 'Le bilan matériel et économique',
        paras: [
          'Les régions des fronts sont dévastées : villes, usines, mines, champs criblés d’obus. L’Europe, créancière du monde en 1914, sort ruinée et endettée — surtout envers les États-Unis, grands gagnants économiques du conflit. Les monnaies vacillent, les prix flambent : l’âge d’or économique de l’Europe est terminé.',
        ],
      },
      {
        titre: 'Le bilan politique : Versailles et la nouvelle carte',
        paras: ['Les traités d’après-guerre redessinent le monde :'],
        puces: [
          'le traité de Versailles (28 juin 1919) impose à l’Allemagne l’article 231 — la responsabilité de la guerre —, de lourdes réparations, la perte de territoires (dont l’Alsace-Lorraine) et de toutes ses colonies, et un désarmement sévère : les Allemands le vivront comme un « diktat » ;',
          'quatre empires disparaissent — allemand, austro-hongrois, ottoman, russe — et de nouveaux États naissent en Europe centrale : Pologne, Tchécoslovaquie, Yougoslavie… ;',
          'les colonies, qui ont payé l’impôt du sang, attendent en vain la reconnaissance : la déception nourrira les nationalismes ;',
          'et pour que « plus jamais » la guerre ne revienne, les vainqueurs créent la Société des Nations (SDN) — nous verrons ce qu’il en advint.',
        ],
      },
    ],
    doc: {
      titre: 'Le traité de Versailles',
      source: 'd’après le traité signé à Versailles le 28 juin 1919 — extraits adaptés',
      texte: 'Article 231. Les gouvernements alliés déclarent, et l’Allemagne reconnaît, que l’Allemagne et ses alliés sont responsables de toutes les pertes et de tous les dommages subis du fait de la guerre qui leur a été imposée par leur agression. — Article 232. L’Allemagne s’engage à réparer tous les dommages causés aux populations civiles. — L’Allemagne renonce en outre à toutes ses colonies, restitue l’Alsace-Lorraine à la France, et son armée est limitée à cent mille hommes, sans aviation ni artillerie lourde.',
      questions: ['Que proclame l’article 231, et pourquoi est-il explosif ?',
        'Relève les quatre types de sanctions imposées à l’Allemagne.',
        'En quoi ce traité peut-il porter les germes d’une nouvelle guerre ?'],
      reponses: ['Il fait de l’Allemagne la responsable unique de la guerre : cette humiliation morale, ressentie comme un « diktat », nourrira le désir de revanche.',
        'Morale (article 231), financière (les réparations), territoriale (colonies perdues, Alsace-Lorraine restituée), militaire (armée réduite à 100 000 hommes, sans aviation).',
        'L’humiliation et la ruine de l’Allemagne alimentent la rancœur que les extrémistes — Hitler en tête — exploiteront : les historiens y voient l’une des causes de la Seconde Guerre mondiale.']
    },
    lexique: [
      ['Génocide', 'extermination programmée d’un peuple entier'],
      ['Réparations', 'sommes dues par le vaincu pour les dommages de guerre'],
      ['Diktat', 'traité imposé sans négociation — nom donné par les Allemands à Versailles'],
      ['SDN', 'Société des Nations, créée en 1920 pour préserver la paix'],
    ],
    synthese: 'Bilan de la PGM : environ 10 millions de morts, mutilés, génocide des Arméniens (1915) ; régions dévastées, Europe ruinée et endettée ; traité de Versailles (1919) : article 231, réparations, pertes territoriales et coloniales, désarmement allemand ; quatre empires disparus, nouvelles frontières ; création de la SDN.',
    saistu: 'La guerre finie, une pandémie acheva le désastre : la « grippe espagnole » de 1918-1919 tua plus de personnes que la guerre elle-même — entre 20 et 50 millions dans le monde ! Elle frappa aussi Madagascar, où elle fit des dizaines de milliers de victimes. Son nom est trompeur : elle n’était pas née en Espagne — mais la presse espagnole, non censurée car le pays était neutre, fut la seule à en parler librement.',
    exos: ['Le bilan humain. a) Combien de soldats sont morts ? b) Qui sont les « gueules cassées » ? d) Quel génocide a lieu en 1915 ? e) Quelle pandémie suit la guerre ?',
      'Versailles. a) Quand le traité est-il signé ? b) Que dit l’article 231 ? d) Cite trois sanctions contre l’Allemagne. e) Comment les Allemands nomment-ils ce traité ?',
      'La nouvelle carte. a) Quels quatre empires disparaissent ? b) Cite deux États nouveaux. d) Pourquoi les colonies sont-elles déçues ? e) Quelle organisation naît pour préserver la paix ?'],
    corr: ['a) environ dix millions ; b) les soldats mutilés au visage, symboles des blessés de guerre ; d) le génocide des Arméniens par l’Empire ottoman ; e) la grippe espagnole (1918-1919).',
      'a) le 28 juin 1919 — cinq ans jour pour jour après Sarajevo ; b) que l’Allemagne et ses alliés sont responsables de la guerre ; d) réparations, pertes territoriales et coloniales, désarmement (armée limitée à 100 000 hommes) ; e) le « diktat ».',
      'a) allemand, austro-hongrois, ottoman, russe ; b) Pologne, Tchécoslovaquie, Yougoslavie (deux suffisent) ; d) elles ont fourni soldats et richesses sans recevoir en retour ni droits ni autonomie ; e) la Société des Nations (SDN).'],
    fig: 'u2f7'
  },
  {
    t: 'L’effort de guerre à Madagascar', comp: 'Le monde depuis 1914', theme: 'La Grande Île dans la Grande Guerre',
    goal: 'démontrer la participation de Madagascar à la Première Guerre mondiale : ravitaillement, taxes, tirailleurs',
    mat: 'Documents d’archives, photographies des tirailleurs, carte',
    revQ: 'Cite trois conséquences de la Première Guerre mondiale.',
    revRA: 'Dix millions de morts et le génocide arménien ; l’Europe ruinée ; le traité de Versailles et les nouvelles frontières (trois parmi d’autres).',
    situation: 'La guerre de 1914 se joue à 10 000 kilomètres de Madagascar — et pourtant elle entre dans chaque village de l’île : les taxes augmentent, le riz et la viande partent pour la France, et des dizaines de milliers de jeunes hommes embarquent pour des fronts dont ils ignorent tout. Sur les monuments aux morts de France, des noms malgaches sont gravés. Quelle fut la part de Madagascar dans la Grande Guerre ?',
    legende: 'À 10 000 km des tranchées, chaque village malgache a payé sa part — en vivres, en impôts, en hommes.',
    motsCles: ['effort de guerre', 'ravitaillement', 'SICE', 'conserves de viande', 'riz', 'hausse des taxes', 'souscriptions', 'réquisition', 'tirailleurs malgaches', 'fronts', 'anciens combattants'],
    sections: [
      {
        titre: 'Le plan économique : nourrir la métropole',
        paras: ['La colonie est mise au service de la guerre :'],
        puces: [
          'le ravitaillement en vivres s’organise : la Société Industrielle et Commerciale de l’Emyrne (SICE) produit des conserves de viande pour l’armée française ; le riz, le café et les produits de l’île traversent les océans ;',
          'la valeur des taxes et impôts est relevée pour financer l’effort de guerre, et des souscriptions « volontaires » collectent l’or et l’argent des Malgaches ;',
          'les campagnes se vident de bras, les prix montent : la guerre lointaine se paie dans chaque foyer.',
        ],
      },
      {
        titre: 'Le plan militaire : les tirailleurs malgaches',
        paras: [
          'Surtout, la colonie donne des hommes : plus de 40 000 tirailleurs malgaches sont recrutés — par engagement ou par réquisition — et envoyés en France. On les retrouve sur les fronts, dans l’artillerie et le génie, dans les usines de guerre et les hôpitaux. Des milliers ne reverront jamais l’île : morts au combat, de maladie ou du terrible hiver des tranchées, si cruel aux hommes des tropiques.',
        ],
      },
      {
        titre: 'Les conséquences : une île transformée',
        paras: [
          'Les survivants rentrent changés : ils ont vu la France réelle — ses paysans, ses ouvriers, ses faiblesses —, appris des idées nouvelles, gagné le respect des armes. Beaucoup n’acceptent plus l’indigénat ni l’inégalité : d’anciens combattants comme Jean Ralaimongo deviendront des figures du mouvement pour l’égalité. L’effort de guerre a semé, sans le vouloir, les graines du nationalisme malgache.',
        ],
      },
    ],
    doc: {
      titre: 'Lettre d’un tirailleur malgache à sa famille',
      source: 'texte reconstitué d’après les correspondances et témoignages de tirailleurs malgaches de la Grande Guerre',
      texte: 'Mes chers parents, je vous écris de France, où l’hiver est si froid que la terre durcit comme la pierre et que l’eau gèle dans les bidons. Nous autres Malgaches souffrons de ce froid plus que des obus. Je travaille au canon avec des camarades de tous les pays — des Français, des Sénégalais, des Annamites. Les Français d’ici ne sont pas comme ceux de la colonie : des paysans comme nous, qui partagent leur pain et nous appellent camarades. Si Dieu me ramène au pays, j’aurai beaucoup à raconter — et bien des idées ont changé dans ma tête. Priez pour moi les ancêtres.',
      questions: ['Quelles épreuves particulières le tirailleur évoque-t-il ?',
        'Quelle découverte le soldat fait-il au contact des Français de métropole ?',
        'En quoi la dernière phrase annonce-t-elle l’après-guerre malgache ?'],
      reponses: ['Le froid terrible de l’hiver européen — plus redouté que les obus —, l’éloignement, le danger du front.',
        'Que les Français de France sont des gens ordinaires qui les traitent en égaux (« camarades ») — à l’opposé de la hiérarchie coloniale de l’île.',
        '« Bien des idées ont changé dans ma tête » : les anciens combattants rentreront porteurs d’exigences nouvelles — l’égalité de droits, que portera le mouvement de Ralaimongo.']
    },
    lexique: [
      ['Effort de guerre', 'mobilisation de toutes les ressources d’un pays pour la guerre'],
      ['SICE', 'Société Industrielle et Commerciale de l’Emyrne — conserves pour l’armée'],
      ['Réquisition', 'prélèvement forcé d’hommes ou de biens par l’autorité'],
      ['Tirailleur', 'soldat recruté dans les colonies de l’empire français'],
    ],
    synthese: 'Effort de guerre malgache : économique — ravitaillement (SICE, viande, riz), hausse des taxes, souscriptions ; militaire — réquisition et envoi de plus de 40 000 tirailleurs sur les fronts. Conséquence majeure : les anciens combattants rentrent porteurs d’idées nouvelles — ferment du nationalisme.',
    saistu: 'Un monument aux morts malgaches de la Grande Guerre se dresse au cœur d’Antananarivo, au lac Anosy : l’« Ange noir » doré, érigé en 1927, honore les tirailleurs tombés en Europe. Chaque 11 novembre, on y dépose encore des gerbes. Et en France, des carrés de tombes malgaches subsistent dans les cimetières militaires — va voir celui de ta région si tu voyages un jour : l’Histoire y est gravée dans la pierre.',
    exos: ['L’économie. a) Que signifie SICE ? b) Que produit-elle pour l’armée ? d) Citez deux autres contributions économiques. e) Qui paie, au bout du compte, l’effort de guerre ?',
      'Les hommes. a) Combien de tirailleurs malgaches partent ? b) Comment sont-ils recrutés ? d) Où servent-ils ? e) De quoi souffrent-ils particulièrement ?',
      'Réfléchir. a) Pourquoi la guerre « entre dans chaque village » malgache ? b) Que découvrent les tirailleurs en France ? d) Montre le lien entre l’effort de guerre et la naissance du nationalisme. e) Quel lieu de mémoire honore les tirailleurs à Antananarivo ?'],
    corr: ['a) Société Industrielle et Commerciale de l’Emyrne ; b) des conserves de viande ; d) la hausse des taxes et les souscriptions, l’envoi de riz et café ; e) les familles malgaches, par l’impôt, les privations et les bras perdus.',
      'a) plus de 40 000 ; b) par engagement ou par réquisition ; d) sur les fronts, dans l’artillerie, le génie, les usines et les hôpitaux ; e) du froid de l’hiver européen, des maladies, du feu.',
      'a) parce que taxes, réquisitions et départs touchent toutes les familles ; b) une France ordinaire qui les traite en camarades — et des idées nouvelles ; d) les anciens combattants, ayant payé l’impôt du sang, exigent l’égalité : Ralaimongo, ancien de 14-18, mènera ce combat ; e) le monument de l’« Ange noir » au lac Anosy.'],
    fig: 'u2f8'
  },
  {
    t: 'La révolution russe et la naissance de l’URSS', comp: 'Le monde depuis 1914', theme: 'Le monde d’entre-deux-guerres : 1917 et ses suites',
    goal: 'raconter la révolution russe de 1917 et la naissance de l’URSS',
    mat: 'Frise 1917-1922, documents, images d’époque',
    revQ: 'Présente les deux volets de l’effort de guerre malgache.',
    revRA: 'Économique : ravitaillement (SICE), hausse des taxes ; militaire : plus de 40 000 tirailleurs envoyés sur les fronts.',
    situation: 'Hiver 1917, Petrograd. Les files d’attente devant les boulangeries n’en finissent plus ; au front, les soldats meurent sans fusils ni bottes. En février, la rue se soulève : le tsar tombe. En octobre, un parti encore inconnu dix ans plus tôt s’empare du pouvoir en promettant « la paix, la terre, le pain ». La Russie des tsars devient, en cinq ans, le premier État communiste de l’histoire. Comment ?',
    legende: 'Petrograd, 1917 : des files de pain à la chute d’un empire — l’année où tout bascula.',
    motsCles: ['révolution russe', 'février 1917', 'abdication du tsar', 'bolcheviks', 'Lénine', 'octobre 1917', 'paix', 'terre', 'guerre civile', 'communisme', 'URSS', '1922'],
    sections: [
      {
        titre: 'Février 1917 : la chute du tsar',
        paras: [
          'La Russie est épuisée par la guerre : défaites, famines, millions de morts. En février 1917, grèves et manifestations embrasent Petrograd, la capitale ; les soldats refusent de tirer sur la foule. Le tsar Nicolas II abdique : trois siècles de règne des Romanov s’achèvent. Un gouvernement provisoire s’installe — mais il poursuit la guerre, et le pays continue de souffrir.',
        ],
      },
      {
        titre: 'Octobre 1917 : les bolcheviks au pouvoir',
        paras: [
          'Lénine, chef du parti bolchevik, promet ce que le peuple attend : la paix immédiate, la terre aux paysans, le pouvoir aux soviets — les conseils d’ouvriers et de soldats. Dans la nuit du 24 au 25 octobre 1917, les bolcheviks s’emparent de Petrograd et renversent le gouvernement provisoire. Aussitôt, les décrets tombent : paix (la Russie quitte la guerre en 1918), partage des terres, contrôle ouvrier des usines, banques nationalisées.',
        ],
      },
      {
        titre: 'De la guerre civile à l’URSS',
        paras: [
          'Le nouveau régime doit survivre : de 1918 à 1921, une guerre civile féroce oppose l’Armée rouge des bolcheviks aux armées blanches soutenues par les puissances étrangères. Les rouges l’emportent — au prix de millions de morts et d’une dictature durcie : parti unique, police politique, économie dirigée. En 1922, le pays prend un nom nouveau : l’Union des Républiques Socialistes Soviétiques — l’URSS. Le premier État communiste est né ; il fascinera et effraiera le monde pendant soixante-dix ans.',
        ],
      },
    ],
    doc: {
      titre: 'Le décret sur la paix',
      source: 'd’après le décret sur la paix adopté par le congrès des soviets (26 octobre 1917) — extrait adapté',
      texte: 'Le gouvernement ouvrier et paysan, créé par la révolution, propose à tous les peuples belligérants et à leurs gouvernements d’engager immédiatement des pourparlers en vue d’une paix juste et démocratique : une paix sans annexions, c’est-à-dire sans conquête de territoires étrangers, et sans indemnités. Le gouvernement abolit la diplomatie secrète et publiera les traités secrets conclus par les gouvernements précédents. Continuer cette guerre pour partager entre les nations fortes les peuples faibles qu’elles ont conquis, le gouvernement le considère comme le plus grand crime contre l’humanité.',
      questions: ['Que propose le décret à tous les belligérants ?',
        'Quelles pratiques des anciennes diplomaties ce texte dénonce-t-il ?',
        'Pourquoi ce décret eut-il un écho jusque dans les colonies ?'],
      reponses: ['Une paix immédiate, « sans annexions ni indemnités » — la Russie joint le geste à la parole en quittant la guerre en 1918.',
        'La diplomatie secrète et les traités cachés, ainsi que la guerre de conquête — « partager les peuples faibles » entre puissances.',
        'Parce qu’il condamne la domination des « peuples faibles » par les « nations fortes » : les peuples colonisés y entendirent une condamnation du colonialisme — l’URSS soutiendra plus tard les mouvements d’indépendance.']
    },
    lexique: [
      ['Bolcheviks', 'parti révolutionnaire russe dirigé par Lénine'],
      ['Soviet', 'conseil d’ouvriers, de soldats ou de paysans'],
      ['Guerre civile', 'guerre entre les habitants d’un même pays'],
      ['URSS', 'Union des Républiques Socialistes Soviétiques (1922)'],
    ],
    synthese: 'Révolution russe : février 1917 — abdication du tsar ; octobre 1917 — les bolcheviks de Lénine prennent le pouvoir (paix, terre, soviets) ; 1918-1921 — guerre civile gagnée par l’Armée rouge ; 1922 — naissance de l’URSS, premier État communiste.',
    saistu: 'Petrograd, la ville de la révolution, a changé trois fois de nom en un siècle ! Saint-Pétersbourg à sa fondation, elle devint Petrograd en 1914 — « bourg de Pierre » sonnait trop allemand en pleine guerre —, puis Leningrad en 1924 à la mort de Lénine… avant de redevenir Saint-Pétersbourg en 1991, à la chute de l’URSS. Les noms des villes racontent l’Histoire aussi sûrement que les livres.',
    exos: ['Dates. a) Que se passe-t-il en février 1917 ? b) Et dans la nuit du 24-25 octobre 1917 ? d) Quand la guerre civile a-t-elle lieu ? e) Quand l’URSS naît-elle ?',
      'Comprendre. a) Pourquoi la Russie est-elle épuisée en 1917 ? b) Que promettent les bolcheviks ? d) Qu’est-ce qu’un soviet ? e) Quels camps s’affrontent dans la guerre civile ?',
      'Réfléchir. a) Pourquoi le gouvernement provisoire échoue-t-il ? b) Cite trois décrets d’octobre 1917. d) Quel prix la victoire bolchevique coûte-t-elle ? e) Pourquoi la révolution russe a-t-elle un écho mondial ?'],
    corr: ['a) le tsar Nicolas II abdique après les émeutes de Petrograd ; b) les bolcheviks s’emparent du pouvoir ; d) de 1918 à 1921 ; e) en 1922.',
      'a) défaites, famines, millions de morts de la Grande Guerre ; b) la paix, la terre aux paysans, le pouvoir aux soviets ; d) un conseil d’ouvriers, de soldats ou de paysans ; e) l’Armée rouge (bolcheviks) contre les armées blanches aidées de l’étranger.',
      'a) parce qu’il poursuit la guerre que le peuple ne supporte plus ; b) paix, partage des terres, contrôle ouvrier, nationalisation des banques (trois suffisent) ; d) millions de morts et dictature : parti unique, police politique ; e) parce qu’elle propose un modèle — le communisme — qui divisera le monde entier, et condamne le colonialisme.'],
    fig: 'u2f9'
  },
  {
    t: 'La crise de 1929 et ses répercussions', comp: 'Le monde depuis 1914', theme: 'Du krach de Wall Street à la crise mondiale — et à Madagascar',
    goal: 'expliquer la crise de 1929, son extension mondiale et ses répercussions jusqu’à Madagascar',
    mat: 'Schéma de l’engrenage, graphiques, documents',
    revQ: 'Donne les quatre grandes dates de la révolution russe.',
    revRA: 'Février 1917 (chute du tsar), octobre 1917 (bolcheviks au pouvoir), 1918-1921 (guerre civile), 1922 (naissance de l’URSS).',
    situation: 'Jeudi 24 octobre 1929, Wall Street. En quelques heures, des actions qui valaient une fortune ne valent plus rien ; des financiers ruinés se pressent aux guichets, la panique gagne la rue. Ce « jeudi noir » de la Bourse de New York va jeter des dizaines de millions de personnes au chômage sur trois continents — et faire chuter le prix du café jusque dans les campagnes malgaches. Comment une panique boursière devient-elle une catastrophe mondiale ?',
    legende: 'Le jeudi noir de Wall Street : une panique boursière qui fera le tour du monde.',
    motsCles: ['krach', 'jeudi noir', '24 octobre 1929', 'Wall Street', 'spéculation', 'surproduction', 'faillites', 'chômage', 'crise mondiale', 'New Deal', 'Roosevelt', 'Madagascar'],
    sections: [
      {
        titre: 'Le krach : l’engrenage infernal',
        paras: ['La mécanique de la crise s’enchaîne implacablement :'],
        puces: [
          'pendant les années 1920, l’Amérique prospère — mais produit trop (surproduction) et joue en Bourse à crédit (spéculation) : les cours montent sans rapport avec la réalité ;',
          'le 24 octobre 1929 — le « jeudi noir » —, la confiance casse : tout le monde vend, les cours s’effondrent ;',
          'les banques, ruinées, ferment et cessent de prêter ; privées de crédit, les usines ferment à leur tour ;',
          'les chômeurs ne consomment plus, d’autres usines ferment : le cercle vicieux est lancé — en 1932, un Américain actif sur quatre est sans emploi.',
        ],
      },
      {
        titre: 'La crise devient mondiale',
        paras: [
          'L’Amérique rapatrie ses capitaux et ferme ses frontières commerciales : la crise traverse l’Atlantique. L’Allemagne, dépendante des prêts américains, s’effondre — six millions de chômeurs en 1932 : la misère y fera le lit du nazisme. Partout, production en berne, prix agricoles effondrés, misère et colère : les démocraties vacillent, les extrémismes prospèrent. En 1933, le président Roosevelt lance le New Deal : grands travaux, aides aux chômeurs, encadrement des banques — l’État intervient pour sauver l’économie.',
        ],
      },
      {
        titre: 'La crise à Madagascar',
        paras: [
          'La colonie n’échappe pas à la tourmente : les prix du café, du girofle et des produits d’exportation s’effondrent — le paysan malgache vend deux fois plus pour payer le même impôt. Les compagnies réduisent salaires et embauches, les petits planteurs s’endettent, et l’administration maintient taxes et prestations malgré la misère. L’amertume des années 1930 nourrira les revendications : la crise mondiale, ici comme en Europe, a préparé les bouleversements à venir.',
        ],
      },
    ],
    doc: {
      titre: 'La misère des années 1930 vue des campagnes coloniales',
      source: 'texte reconstitué d’après les rapports administratifs et la presse des années 1930 sur la crise à Madagascar',
      texte: 'Les cours du café se sont effondrés de plus de moitié depuis deux ans ; le girofle ne trouve plus preneur. Dans les districts producteurs, les planteurs indigènes déclarent ne plus pouvoir payer l’impôt : il leur faut vendre aujourd’hui deux fois plus de sacs qu’hier pour réunir la même somme. Les compagnies ont réduit leurs achats et licencié une partie de leurs employés. On signale dans plusieurs régions des familles quittant leurs villages pour chercher du travail. Le mécontentement est réel, et les meneurs qui réclament l’égalité des droits trouvent des oreilles plus attentives que jamais.',
      questions: ['Par quel mécanisme la crise de Wall Street atteint-elle le paysan malgache ?',
        'Pourquoi l’impôt devient-il deux fois plus lourd sans avoir changé ?',
        'Quelle conséquence politique le rapport signale-t-il — et que confirme l’Histoire ?'],
      reponses: ['Par les prix mondiaux : la crise effondre les cours du café et du girofle que Madagascar exporte — la mévente et la baisse des prix ruinent les producteurs.',
        'Parce qu’il se paie en argent, à montant fixe : quand le prix du café est divisé par deux, il faut vendre deux fois plus de récolte pour la même somme.',
        'Le mécontentement profite aux « meneurs » réclamant l’égalité : les années 1930 sont celles des campagnes de Ralaimongo — la crise a nourri la contestation coloniale.']
    },
    lexique: [
      ['Krach', 'effondrement brutal des cours de la Bourse'],
      ['Spéculation', 'achat risqué dans l’espoir de revendre plus cher'],
      ['Surproduction', 'production supérieure à ce que les acheteurs peuvent absorber'],
      ['New Deal', '« nouvelle donne » : programme de Roosevelt contre la crise (1933)'],
    ],
    synthese: 'Crise de 1929 : jeudi noir (24 octobre) à Wall Street — spéculation et surproduction ; faillites bancaires → fermetures d’usines → chômage de masse ; extension mondiale (Allemagne : 6 millions de chômeurs) ; réponse : le New Deal de Roosevelt (1933). À Madagascar : effondrement des prix du café, misère des planteurs, montée du mécontentement.',
    saistu: 'Pendant la Grande Dépression, on brûlait du café dans les locomotives brésiliennes et on déversait du lait dans les rivières américaines — pendant que des millions de personnes avaient faim ! Détruire les récoltes pour faire remonter les prix : rien ne dit mieux l’absurdité d’une crise de surproduction. Ces images ont marqué les contemporains et inspiré une idée neuve : l’État doit réguler l’économie.',
    exos: ['L’engrenage. a) Que se passe-t-il le 24 octobre 1929 ? b) Pourquoi les banques s’effondrent-elles ? d) Pourquoi les usines ferment-elles ensuite ? e) Complète le cercle vicieux.',
      'Le monde en crise. a) Comment la crise gagne-t-elle l’Europe ? b) Quel pays compte 6 millions de chômeurs en 1932 ? d) Qu’est-ce que le New Deal ? e) Quel lien entre la crise et la montée du nazisme ?',
      'Madagascar. a) Quels produits malgaches s’effondrent ? b) Pourquoi l’impôt écrase-t-il davantage le paysan ? d) Que font les compagnies ? e) Quelle conséquence politique la crise a-t-elle dans l’île ?'],
    corr: ['a) le krach de Wall Street — le « jeudi noir » ; b) ruinées par la chute des actions et les emprunts non remboursés ; d) privées de crédit et de clients ; e) chômage → consommation en berne → nouvelles fermetures → plus de chômage.',
      'a) par le rapatriement des capitaux américains et l’effondrement du commerce ; b) l’Allemagne ; d) le programme de Roosevelt (1933) : grands travaux, aides, encadrement des banques ; e) la misère et les 6 millions de chômeurs allemands font le lit du parti d’Hitler.',
      'a) le café et le girofle (et les produits d’exportation) ; b) parce qu’il est fixe et en argent : prix divisés par deux = effort doublé ; d) elles réduisent achats, salaires et emplois ; e) le mécontentement renforce les mouvements qui réclament l’égalité des droits.'],
    fig: 'u2f10'
  },
  {
    t: 'Les régimes totalitaires : le stalinisme en URSS', comp: 'Le monde depuis 1914', theme: 'La dictature stalinienne : terreur, collectivisation, industrialisation',
    goal: 'définir le régime totalitaire et caractériser le stalinisme en URSS',
    mat: 'Définitions, documents, affiches de propagande à analyser',
    revQ: 'Décris l’engrenage de la crise de 1929.',
    revRA: 'Krach (jeudi noir) → faillites des banques → fermetures d’usines → chômage de masse → extension mondiale.',
    situation: 'URSS, années 1930. Le portrait de Staline est partout : écoles, usines, gares. Les journaux le nomment « petit père des peuples », les foules l’acclament — et, la nuit, des camions noirs emmènent les « ennemis du peuple » vers des camps dont on ne revient guère. Jamais un État n’avait prétendu contrôler à ce point la vie, le travail et jusqu’aux pensées de chacun. C’est le totalitarisme. Comment fonctionne-t-il ?',
    legende: 'Portraits géants, défilés, police politique : l’État totalitaire veut tout contrôler — jusqu’aux pensées.',
    motsCles: ['régime totalitaire', 'Staline', 'culte de la personnalité', 'parti unique', 'propagande', 'terreur', 'police politique', 'goulag', 'collectivisation', 'famines', 'plans quinquennaux', 'stakhanovisme'],
    sections: [
      {
        titre: 'Qu’est-ce qu’un régime totalitaire ?',
        paras: [
          'Un régime totalitaire est un régime qui prétend contrôler la totalité de la vie des citoyens : un chef unique objet d’un culte, un parti unique, une idéologie officielle imposée à tous, la propagande dans les médias et à l’école, la police politique et la terreur contre les opposants, et l’encadrement de la jeunesse. L’URSS de Staline, l’Italie de Mussolini et l’Allemagne d’Hitler en sont les trois exemples des années 1930.',
        ],
      },
      {
        titre: 'La dictature stalinienne : la terreur',
        paras: [
          'Maître absolu de l’URSS après Lénine, Staline règne par la peur : la police politique surveille et arrête, les grands procès truqués de Moscou (1936-1938) font condamner d’anciens compagnons de révolution qui « avouent » des crimes inventés, et des millions de personnes sont déportées au goulag — le réseau des camps de travail forcé. La société est proclamée « sans classes » et égalitaire ; en réalité, l’obéissance est la seule loi.',
        ],
      },
      {
        titre: 'L’économie sous la dictature',
        paras: ['Staline soumet aussi l’économie entière à l’État :'],
        puces: [
          'la collectivisation force les paysans à fusionner leurs terres dans des fermes collectives (kolkhozes) ; ceux qui refusent — les « koulaks » — sont déportés ; la désorganisation provoque des famines effroyables, notamment en Ukraine (1932-1933) ;',
          'la propriété privée est interdite : terres, usines, commerces appartiennent à l’État ;',
          'l’industrialisation est menée à marche forcée par les plans quinquennaux : objectifs fixés pour cinq ans, priorité à l’industrie lourde ;',
          'le stakhanovisme glorifie les ouvriers « records » — tel le mineur Stakhanov — pour pousser tous les autres à produire plus.',
        ],
      },
    ],
    doc: {
      titre: 'Souvenirs d’une déportée du goulag',
      source: 'd’après les récits de rescapées des camps staliniens (années 1930) — extraits adaptés',
      texte: 'On m’a arrêtée une nuit de 1937, comme tant d’autres : trois coups à la porte, une valise, et l’inconnu. Au juge, j’ai demandé quel était mon crime ; il a répondu que le Parti ne se trompait jamais. Le wagon nous a emportées vers l’est pendant des semaines. Au camp, nous abattions des arbres par moins quarante degrés, pour une soupe claire et quatre cents grammes de pain. Le plus dur n’était pas le froid : c’était d’être devenue, du jour au lendemain, une « ennemie du peuple » — moi qui avais cru de toutes mes forces à la révolution.',
      questions: ['Relève les éléments qui montrent l’arbitraire de l’arrestation.',
        'Que révèle la réponse du juge sur la nature du régime ?',
        'Pourquoi la dernière phrase est-elle la plus tragique aux yeux de l’historien ?'],
      reponses: ['L’arrestation nocturne sans motif, l’absence de crime énoncé, la condamnation sans preuve : la terreur frappe au hasard pour que chacun ait peur.',
        '« Le Parti ne se trompe jamais » : le parti unique est au-dessus de la loi et de la vérité — c’est la définition même du totalitarisme.',
        'La victime était une militante convaincue : la terreur stalinienne dévore ses propres fidèles — nul n’est à l’abri, pas même les croyants de la première heure.']
    },
    lexique: [
      ['Totalitarisme', 'régime qui prétend contrôler toute la vie des citoyens'],
      ['Goulag', 'réseau des camps de travail forcé soviétiques'],
      ['Collectivisation', 'mise en commun forcée des terres paysannes'],
      ['Plan quinquennal', 'objectifs économiques fixés par l’État pour cinq ans'],
    ],
    synthese: 'Totalitarisme : chef et parti uniques, idéologie, propagande, terreur. Stalinisme : culte de la personnalité, police politique, procès truqués, goulag ; collectivisation (famines), interdiction de la propriété privée, plans quinquennaux, stakhanovisme — société proclamée « sans classes », en réalité soumise par la peur.',
    saistu: 'La propagande stalinienne retouchait les photographies : à mesure que les compagnons de Staline étaient éliminés, ils disparaissaient aussi… des images officielles ! Des historiens ont retrouvé les clichés successifs où tel dirigeant, fusillé entre-temps, s’efface d’une photo de groupe. Falsifier le passé pour contrôler le présent : voilà pourquoi l’historien critique toujours ses sources — même une photographie peut mentir.',
    exos: ['La définition. a) Cite quatre caractères du régime totalitaire. b) Quels sont les trois totalitarismes des années 1930 ? d) Qu’est-ce que le culte de la personnalité ? e) Quel rôle joue la propagande ?',
      'La terreur. a) Que sont les procès de Moscou ? b) Qu’est-ce que le goulag ? d) Qui sont les « ennemis du peuple » ? e) La société soviétique est-elle réellement égalitaire ?',
      'L’économie. a) Définis la collectivisation. b) Qui sont les koulaks et que deviennent-ils ? d) Que provoque la collectivisation en Ukraine ? e) Explique plans quinquennaux et stakhanovisme.'],
    corr: ['a) chef unique et culte, parti unique, idéologie et propagande, terreur policière (quatre parmi d’autres) ; b) l’URSS de Staline, l’Italie de Mussolini, l’Allemagne d’Hitler ; d) l’adoration organisée du chef (portraits, titres, défilés) ; e) imposer l’idéologie officielle dans les médias, l’école, les arts.',
      'a) des procès truqués (1936-1938) où d’anciens dirigeants « avouent » des crimes inventés ; b) le réseau des camps de travail forcé ; d) quiconque est désigné par le régime : opposants réels ou imaginaires ; e) non : elle est proclamée « sans classes », mais la peur et les privilèges du Parti règnent.',
      'a) la fusion forcée des terres paysannes en fermes collectives ; b) les paysans dits « riches » qui refusent : ils sont déportés ; d) des famines effroyables (1932-1933) ; e) objectifs d’État fixés pour cinq ans, priorité à l’industrie lourde ; glorification des ouvriers « records » comme Stakhanov pour accélérer les cadences.'],
    fig: 'u2f11'
  },
  {
    t: 'Les régimes totalitaires : l’Italie fasciste et l’Allemagne nazie', comp: 'Le monde depuis 1914', theme: 'Mussolini, Hitler et la marche à la guerre',
    goal: 'expliquer la montée du fascisme italien et du nazisme allemand et dégager les caractères communs des totalitarismes',
    mat: 'Frises, documents, cartes de l’expansion allemande',
    revQ: 'Cite quatre caractères du stalinisme.',
    revRA: 'Culte de Staline, terreur (goulag, procès truqués), collectivisation forcée, plans quinquennaux (quatre parmi d’autres).',
    situation: 'Italie, 1922 : des milliers d’hommes en chemise noire marchent sur Rome — leur chef, Mussolini, est nommé chef du gouvernement. Allemagne, 1933 : Hitler, chef d’un parti raciste porté par la crise, devient chancelier. En quelques années, deux grandes nations européennes basculent dans la dictature — et la seconde prépare ouvertement la guerre. Comment les démocraties ont-elles pu laisser faire ?',
    legende: 'Chemises noires à Rome, croix gammées à Berlin : deux démocraties basculent dans la dictature.',
    motsCles: ['fascisme', 'Mussolini', 'marche sur Rome', '1922', 'liberté d’expression supprimée', 'accords du Latran', 'nazisme', 'Hitler', '1933', 'antisémitisme', 'réarmement', 'espace vital', 'Munich 1938'],
    sections: [
      {
        titre: 'L’Italie fasciste de Mussolini',
        paras: [
          'L’Italie sort de la guerre déçue et troublée : chômage, grèves, peur de la révolution. Mussolini fonde le fascisme — un mouvement nationaliste et violent dont les milices, les « chemises noires », brisent les grèves. En octobre 1922, la marche sur Rome lui ouvre le pouvoir ; en quelques années, il instaure la dictature : partis et syndicats interdits, liberté d’expression supprimée, presse muselée, opposants emprisonnés, culte du « Duce » et embrigadement de la jeunesse. En 1929, les accords du Latran rallient l’Église catholique au régime, en échange de la création de l’État du Vatican.',
        ],
      },
      {
        titre: 'L’Allemagne nazie d’Hitler',
        paras: ['L’Allemagne humiliée par Versailles et ravagée par la crise de 1929 bascule à son tour :'],
        puces: [
          'Hitler et son parti nazi promettent de déchirer le « diktat », de rendre travail et fierté — et désignent des boucs émissaires : les Juifs ; porté par six millions de chômeurs, il est nommé chancelier le 30 janvier 1933 ;',
          'en quelques mois, la dictature est totale : parti unique, camps pour les opposants, propagande omniprésente, jeunesse embrigadée ;',
          'l’antisémitisme devient loi : les lois de Nuremberg (1935) privent les Juifs de leurs droits — première étape d’une persécution qui mènera au génocide ;',
          'le régime réarme massivement et affiche son but : conquérir l’« espace vital » à l’est ; l’Autriche est annexée (1938), puis la Tchécoslovaquie démembrée après la conférence de Munich (1938), où les démocraties reculent — la marche à la guerre est lancée.',
        ],
      },
      {
        titre: 'Les caractères communs des totalitarismes',
        paras: [
          'Stalinisme, fascisme, nazisme diffèrent par l’idéologie — mais partagent les mêmes traits : un chef unique divinisé, un parti unique, la propagande totale, la terreur policière, l’embrigadement de la jeunesse et la haine des libertés. Face à eux, les démocraties affaiblies par la crise hésitent — et ce recul, de Munich en Munich, rend la guerre inévitable.',
        ],
      },
    ],
    doc: {
      titre: 'Une jeunesse embrigadée',
      source: 'd’après les témoignages d’anciens membres des organisations de jeunesse des régimes totalitaires (années 1930) — extraits adaptés',
      texte: 'Nous avions dix ans quand on nous a remis l’uniforme. Tout était organisé : les défilés du samedi, les chants, les camps d’été, le sport — et à chaque instant, les mêmes phrases répétées : le chef a toujours raison, la nation au-dessus de tout, l’ennemi est partout. On nous apprenait à marcher au pas avant de nous apprendre à penser. Nos maîtres notaient ceux qui posaient des questions. J’ai mis des années, après la guerre, à comprendre qu’on avait volé notre enfance pour fabriquer des soldats obéissants.',
      questions: ['Par quels moyens le régime embrigade-t-il la jeunesse ?',
        'Que signifie « on nous apprenait à marcher au pas avant de nous apprendre à penser » ?',
        'Pourquoi les totalitarismes visent-ils d’abord la jeunesse ?'],
      reponses: ['Uniforme, défilés, chants, camps, sport, slogans répétés, surveillance de ceux qui questionnent : toute la vie de l’enfant est encadrée par le régime.',
        'Que l’obéissance passait avant la réflexion : le régime voulait des corps disciplinés et des esprits sans questions.',
        'Parce qu’un enfant façonné dès dix ans ne connaîtra jamais d’autre vérité que celle du régime : contrôler la jeunesse, c’est contrôler l’avenir — d’où l’importance, en démocratie, d’apprendre à penser par soi-même.']
    },
    lexique: [
      ['Fascisme', 'régime totalitaire fondé par Mussolini en Italie'],
      ['Nazisme', 'totalitarisme allemand d’Hitler, raciste et antisémite'],
      ['Antisémitisme', 'haine et persécution des Juifs'],
      ['Espace vital', 'territoires que le nazisme prétendait conquérir à l’est'],
    ],
    synthese: 'Italie : Mussolini, marche sur Rome (1922), dictature, libertés supprimées, ralliement de l’Église (Latran 1929). Allemagne : Hitler chancelier (30 janvier 1933) — crise de 1929 et humiliation de Versailles —, dictature, lois antisémites de Nuremberg (1935), réarmement, espace vital, Anschluss et Munich (1938). Caractères communs : chef unique, parti unique, propagande, terreur, jeunesse embrigadée.',
    saistu: 'À la conférence de Munich (septembre 1938), la France et le Royaume-Uni acceptèrent le démembrement de la Tchécoslovaquie en croyant « sauver la paix ». Churchill répondit par une phrase restée célèbre : « Vous avez voulu éviter la guerre au prix du déshonneur ; vous avez le déshonneur, et vous aurez la guerre. » Onze mois plus tard, Hitler envahissait la Pologne. Céder à un dictateur ne l’arrête jamais : Munich est devenu le symbole des capitulations qui préparent les catastrophes.',
    exos: ['L’Italie. a) Qui fonde le fascisme ? b) Que se passe-t-il en octobre 1922 ? d) Cite deux libertés supprimées. e) Que prévoient les accords du Latran ?',
      'L’Allemagne. a) Quels deux facteurs portent Hitler au pouvoir ? b) Quand devient-il chancelier ? d) Que font les lois de Nuremberg ? e) Qu’est-ce que l’« espace vital » ?',
      'Synthèse. a) Cite quatre caractères communs aux trois totalitarismes. b) Que cède-t-on à Munich en 1938 ? d) Pourquoi les démocraties reculent-elles ? e) Montre que la marche à la guerre commence avant 1939.'],
    corr: ['a) Mussolini ; b) la marche sur Rome : Mussolini obtient le pouvoir ; d) liberté d’expression, liberté de la presse, libertés politique et syndicale (deux suffisent) ; e) le ralliement de l’Église au régime contre la création de l’État du Vatican (1929).',
      'a) l’humiliation de Versailles et la crise de 1929 (6 millions de chômeurs) ; b) le 30 janvier 1933 ; d) elles privent les Juifs d’Allemagne de leurs droits (1935) ; e) les territoires de l’Est que le nazisme prétend conquérir pour la « race allemande ».',
      'a) chef unique divinisé, parti unique, propagande, terreur, embrigadement de la jeunesse (quatre suffisent) ; b) le démembrement de la Tchécoslovaquie ; d) traumatisées par 14-18 et affaiblies par la crise, elles espèrent « sauver la paix » ; e) réarmement, Anschluss (1938), Munich (1938) : les agressions s’enchaînent dès avant l’invasion de la Pologne.'],
    fig: 'u2f12'
  },
  {
    t: 'La Seconde Guerre mondiale : causes et phases', comp: 'Le monde depuis 1914', theme: '1939-1945 : la guerre la plus destructrice de l’Histoire',
    goal: 'expliquer les causes de la Seconde Guerre mondiale et présenter ses deux grandes phases',
    mat: 'Carte des belligérants, frise 1939-1945, documents',
    revQ: 'Cite les caractères communs des régimes totalitaires des années 1930.',
    revRA: 'Chef unique et culte, parti unique, idéologie et propagande, terreur policière, jeunesse embrigadée.',
    situation: '1ᵉʳ septembre 1939, 4 h 45 : les blindés allemands franchissent la frontière polonaise. Vingt et un ans après l’armistice de 1918, l’Europe replonge — et cette fois, la guerre sera vraiment mondiale : six continents, soixante-dix nations, cent millions de soldats. Pourquoi la paix de 1919 n’a-t-elle tenu que vingt ans ? Et comment la guerre a-t-elle basculé ?',
    legende: 'Septembre 1939 : vingt ans après Versailles, les blindés effacent la paix manquée.',
    motsCles: ['causes', 'traités de 1919-1920', 'crise de 1929', 'agressions fascistes', 'guerre éclair', 'Axe', 'Alliés', 'Pearl Harbor', 'Stalingrad', 'tournant 1942-1943', 'débarquement', 'capitulations 1945'],
    sections: [
      {
        titre: 'Les causes : une paix manquée',
        paras: ['Toutes les racines de la guerre plongent dans l’entre-deux-guerres :'],
        puces: [
          'les traités de 1919-1920 ont humilié les vaincus sans les affaiblir durablement : l’Allemagne rêve de revanche ;',
          'la crise de 1929 a ruiné les peuples et porté les extrémistes au pouvoir ;',
          'les agressions fascistes se sont enchaînées sans riposte : Éthiopie envahie par l’Italie, Rhénanie remilitarisée, Autriche annexée, Munich — la politique extérieure d’Hitler vise ouvertement l’espace vital ;',
          'l’industrie de guerre — notamment chimique — a préparé des arsenaux terrifiants ;',
          'en août 1939, Hitler s’assure la neutralité soviétique par le pacte germano-soviétique : la voie est libre — le 1ᵉʳ septembre 1939, il envahit la Pologne ; la France et le Royaume-Uni déclarent la guerre.',
        ],
      },
      {
        titre: 'Première phase : la domination de l’Axe (1939-1942)',
        paras: [
          'La « guerre éclair » allemande écrase tout : Pologne, Danemark, Norvège, Pays-Bas, Belgique — et la France, vaincue en six semaines (juin 1940). Le Royaume-Uni, bombardé, résiste seul derrière Churchill. En 1941, Hitler envahit l’URSS ; le Japon attaque la flotte américaine à Pearl Harbor (7 décembre 1941) : les États-Unis entrent en guerre. L’Axe — Allemagne, Italie, Japon — domine alors l’Europe, une partie de l’Afrique et du Pacifique.',
        ],
      },
      {
        titre: 'Le tournant et la victoire des Alliés (1942-1945)',
        paras: [
          '1942-1943 : trois batailles renversent la guerre — Stalingrad, où l’armée allemande capitule après des mois d’enfer, El Alamein en Afrique, Midway dans le Pacifique. Dès lors, les Alliés — URSS, États-Unis, Royaume-Uni et leurs empires, dont les tirailleurs malgaches — reconquièrent pied à pied : débarquements en Afrique du Nord, en Italie, puis en Normandie (6 juin 1944) ; l’Allemagne, prise en tenaille, capitule le 8 mai 1945. Le Japon s’obstine : les bombes atomiques d’Hiroshima et de Nagasaki (août 1945) le contraignent à capituler le 2 septembre 1945. La guerre la plus meurtrière de l’Histoire est finie.',
        ],
      },
    ],
    doc: {
      titre: 'L’appel du 18 juin 1940',
      source: 'd’après l’appel lancé à la radio de Londres par le général de Gaulle (18 juin 1940) — extrait adapté',
      texte: 'Les chefs qui sont à la tête des armées françaises ont demandé l’armistice. Mais le dernier mot est-il dit ? La défaite est-elle définitive ? Non ! Car la France n’est pas seule : elle a un vaste empire derrière elle, elle peut s’unir à l’Empire britannique qui tient la mer, elle peut utiliser l’immense industrie des États-Unis. Cette guerre est une guerre mondiale. Quoi qu’il arrive, la flamme de la résistance française ne doit pas s’éteindre et ne s’éteindra pas.',
      questions: ['Quelle décision de Gaulle refuse-t-il d’accepter ?',
        'Sur quelles forces compte-t-il pour poursuivre la guerre ?',
        'En quoi la phrase « cette guerre est une guerre mondiale » s’est-elle vérifiée — jusqu’à Madagascar ?'],
      reponses: ['L’armistice demandé par le gouvernement français : il refuse de considérer la défaite de juin 1940 comme définitive.',
        'L’empire colonial français, l’Empire britannique maître des mers, et l’industrie des États-Unis — les ressources du monde contre celles de l’Allemagne.',
        'La guerre s’est étendue à tous les continents — et Madagascar y fut entraîné : soldats, ravitaillement, et même des combats sur son sol en 1942.']
    },
    lexique: [
      ['Axe', 'alliance de l’Allemagne, de l’Italie et du Japon'],
      ['Alliés', 'camp réunissant notamment URSS, États-Unis, Royaume-Uni'],
      ['Guerre éclair', 'offensive rapide combinant blindés et aviation'],
      ['Capitulation', 'reconnaissance officielle de la défaite militaire'],
    ],
    synthese: 'Causes : traités de 1919-1920, crise de 1929, montée des totalitarismes et agressions fascistes, politique de l’espace vital ; déclenchement : invasion de la Pologne (1ᵉʳ septembre 1939). Phases : domination de l’Axe (1939-1942 : France vaincue 1940, URSS envahie, Pearl Harbor) ; tournant 1942-1943 (Stalingrad, El Alamein, Midway) ; victoires alliées (1942-1945 : débarquements, 8 mai 1945, Hiroshima-Nagasaki, 2 septembre 1945).',
    saistu: 'Madagascar fut un champ de bataille de la Seconde Guerre mondiale ! En mai 1942, les Britanniques débarquèrent à Diego-Suarez (opération Ironclad) pour empêcher les sous-marins japonais d’utiliser le port, alors contrôlé par le régime de Vichy. Des combats de plusieurs mois s’ensuivirent jusqu’à la reddition de novembre 1942 — avant la remise de l’île à la France libre en 1943. La « guerre mondiale » a réellement touché le sol malgache.',
    exos: ['Les causes. a) Cite quatre causes de la guerre. b) Que permet le pacte germano-soviétique ? d) Quand et où la guerre éclate-t-elle ? e) Qui déclare la guerre à l’Allemagne ?',
      'Les phases. a) Que se passe-t-il en juin 1940 ? b) Quels événements de 1941 mondialisent la guerre ? d) Cite les trois batailles du tournant. e) Donne les deux dates de capitulation de 1945.',
      'Réfléchir. a) Pourquoi dit-on que Versailles porte « les germes » de 1939 ? b) Quel rôle la crise de 1929 joue-t-elle ? d) Pourquoi Stalingrad est-il décisif ? e) Que montre l’emploi de la bombe atomique ?'],
    corr: ['a) traités de 1919-1920, crise de 1929, agressions fascistes et totalitarismes, politique de l’espace vital (quatre) ; b) il assure à Hitler la neutralité soviétique pour envahir la Pologne ; d) le 1ᵉʳ septembre 1939, en Pologne ; e) la France et le Royaume-Uni.',
      'a) la défaite de la France en six semaines ; b) l’invasion de l’URSS et Pearl Harbor (entrée des États-Unis) ; d) Stalingrad, El Alamein, Midway (1942-1943) ; e) 8 mai 1945 (Allemagne) et 2 septembre 1945 (Japon).',
      'a) parce que l’humiliation allemande a nourri l’esprit de revanche exploité par Hitler ; b) elle ruine les démocraties et porte les extrémistes au pouvoir ; d) parce que l’armée allemande y subit sa première grande capitulation : le mythe de l’invincibilité tombe ; e) que la science mise au service de la guerre peut anéantir des villes entières — l’humanité entre dans l’ère nucléaire.'],
    fig: 'u2f13'
  },
  {
    t: 'Les conséquences de la Seconde Guerre mondiale', comp: 'Le monde depuis 1914', theme: 'Le bilan de 1945 et la réorganisation du monde',
    goal: 'dresser le bilan de la Seconde Guerre mondiale et présenter la réorganisation du monde en 1945, dont l’effort de guerre malgache',
    mat: 'Tableaux du bilan, cartes de 1945, documents',
    revQ: 'Donne les causes et les grandes phases de la Seconde Guerre mondiale.',
    revRA: 'Causes : traités de 1919, crise de 1929, totalitarismes, agressions ; phases : domination de l’Axe (1939-1942), tournant, victoires alliées (1942-1945).',
    situation: '1945. Varsovie, Berlin, Hiroshima ne sont plus que décombres ; dans les camps libérés, le monde découvre l’horreur absolue. Cinquante à soixante millions d’êtres humains sont morts — six fois plus qu’en 1914-1918, et cette fois plus de civils que de soldats. Sur ces ruines, les vainqueurs réunis à Yalta et Potsdam dessinent un monde nouveau — et jurent, à San Francisco : « plus jamais ça ». Que laisse la guerre, et que construit-on en 1945 ?',
    legende: '1945 : sur les ruines de la guerre la plus meurtrière, le monde jure « plus jamais ça ».',
    motsCles: ['bilan humain', '50 à 60 millions de morts', 'Shoah', 'génocide', 'Hiroshima', 'pertes économiques', 'Yalta', 'Potsdam', '1945', 'ONU', 'procès de Nuremberg', 'effort de guerre malgache'],
    sections: [
      {
        titre: 'Un bilan sans précédent',
        paras: ['Le bilan dépasse tout ce que l’humanité avait connu :'],
        puces: [
          'humain : 50 à 60 millions de morts, majoritairement des civils — bombardements, famines, massacres ; et le crime des crimes : la Shoah, génocide de six millions de Juifs d’Europe, exterminés dans les camps de la mort nazis, avec des centaines de milliers de Tsiganes et d’autres victimes ;',
          'matériel et économique : des milliers de villes détruites, les économies européennes et japonaise à genoux, l’Europe dépendante de l’aide américaine ;',
          'moral : Hiroshima et les camps posent une question terrible — que vaut la civilisation qui a produit cela ? Les grands criminels nazis sont jugés au procès de Nuremberg (1945-1946) : pour la première fois, des dirigeants répondent de « crimes contre l’humanité ».',
        ],
      },
      {
        titre: 'La réorganisation du monde',
        paras: [
          'Dès février 1945, à Yalta, puis en juillet à Potsdam, les vainqueurs — États-Unis, URSS, Royaume-Uni — organisent l’après-guerre : occupation et partage de l’Allemagne, nouvelles frontières, promesses d’élections libres. Deux superpuissances émergent : les États-Unis et l’URSS — l’Europe, ruinée, cesse d’être le centre du monde. Et le 26 juin 1945, à San Francisco, cinquante et un États signent la Charte des Nations unies : l’ONU remplace la défunte SDN pour maintenir la paix.',
        ],
      },
      {
        titre: 'Madagascar dans la guerre — et après',
        paras: [
          'La Grande Île a de nouveau payé sa part : des dizaines de milliers de soldats malgaches ont servi de 1939 à 1945 — campagne de France en 1940, puis armées de la Libération —, pendant que l’île fournissait vivres et matières premières et subissait en 1942 les combats de Diego-Suarez. Les anciens combattants rentrent en 1946 dans une colonie inchangée — mais le monde, lui, a changé : la Charte de l’ONU proclame l’égalité des peuples, et les empires coloniaux vacillent. Le retour des tirailleurs nourrira la flambée nationaliste de 1947 — et, partout, la décolonisation s’annonce : ce sera notre unité III.',
        ],
      },
    ],
    doc: {
      titre: 'Un tirailleur malgache dans la Seconde Guerre mondiale',
      source: 'texte reconstitué d’après les témoignages d’anciens combattants malgaches de 1939-1945',
      texte: 'J’ai été mobilisé en 1939 ; nous avons connu la défaite de 1940, puis la captivité en Allemagne pour beaucoup des nôtres. Libéré, j’ai rejoint les armées qui ont remonté la France en 1944. À la victoire, on nous a fêtés — puis on nous a renvoyés au pays, et au port, un fonctionnaire m’a tutoyé comme avant la guerre. J’avais défendu la liberté d’un pays qui me refusait la mienne. Beaucoup d’entre nous se sont dit la même chose ce jour-là : ce que nous avons fait pour la France, nous saurons le faire pour Madagascar.',
      questions: ['Reconstitue le parcours du tirailleur de 1939 à 1945.',
        'Quelle contradiction le soldat découvre-t-il à son retour ?',
        'En quoi ce témoignage annonce-t-il 1947 — et pourquoi est-il signalé « reconstitué » ?'],
      reponses: ['Mobilisation en 1939, défaite de 1940 et captivité, puis campagnes de la Libération en 1944, et retour à Madagascar après la victoire.',
        'Il a combattu pour la liberté de la France, mais reste un colonisé sans droits chez lui — tutoyé comme avant, malgré l’uniforme et les combats.',
        'La dernière phrase dit la détermination des anciens combattants, qui seront nombreux dans les mouvements de 1946-1947 ; le texte condense des témoignages réels sans citer un homme précis — l’historien le signale honnêtement.']
    },
    lexique: [
      ['Shoah', 'génocide des Juifs d’Europe par l’Allemagne nazie'],
      ['Crime contre l’humanité', 'crime jugé au nom de l’humanité entière (Nuremberg)'],
      ['Superpuissance', 'État dominant le monde par sa force totale'],
      ['Charte', 'texte fondateur fixant les buts d’une organisation'],
    ],
    synthese: 'Bilan : 50-60 millions de morts (surtout civils), Shoah (6 millions de Juifs), villes rasées, économies ruinées, procès de Nuremberg. Réorganisation : Yalta et Potsdam (1945), deux superpuissances (États-Unis, URSS), création de l’ONU (26 juin 1945). Madagascar : soldats et ravitaillement, combats de 1942 ; le retour des anciens combattants nourrit le nationalisme.',
    saistu: 'La Charte des Nations unies a été signée le 26 juin 1945 — et Madagascar est devenu indépendant un 26 juin, quinze ans plus tard jour pour jour ! Simple coïncidence de calendrier, mais les deux dates se répondent : la Charte proclamait « l’égalité de droits des peuples et leur droit à disposer d’eux-mêmes » — exactement le principe dont les peuples colonisés, Malgaches en tête, allaient exiger l’application.',
    exos: ['Le bilan. a) Combien de morts la guerre a-t-elle causés ? b) Qu’est-ce que la Shoah ? d) Pourquoi plus de civils que de soldats ? e) Que juge-t-on à Nuremberg ?',
      'Le monde de 1945. a) Que décident Yalta et Potsdam ? b) Quelles superpuissances émergent ? d) Quand la Charte de l’ONU est-elle signée ? e) Que remplace l’ONU ?',
      'Madagascar. a) Où les soldats malgaches servent-ils ? b) Que se passe-t-il à Diego-Suarez en 1942 ? d) Que découvrent les anciens combattants au retour ? e) Montre le lien entre 1945 et la décolonisation.'],
    corr: ['a) 50 à 60 millions ; b) le génocide de six millions de Juifs d’Europe par les nazis ; d) à cause des bombardements des villes, des famines et des massacres ; e) les grands criminels nazis, pour crimes contre l’humanité (1945-1946).',
      'a) l’occupation de l’Allemagne, les nouvelles frontières, l’organisation de l’après-guerre ; b) les États-Unis et l’URSS ; d) le 26 juin 1945, à San Francisco ; e) la SDN, morte de son impuissance.',
      'a) campagne de France 1940, captivité, armées de la Libération 1944 ; b) les Britanniques débarquent et prennent le port après des combats (opération de 1942) ; d) une colonie inchangée, où ils restent des sujets sans droits ; e) la Charte proclame l’égalité des peuples, les empires sont affaiblis, les anciens combattants réclament : partout la décolonisation s’enclenche.'],
    fig: 'u2f14'
  },
  {
    t: 'Les relations internationales : de la SDN à l’ONU', comp: 'Le monde depuis 1914', theme: 'Définir les relations internationales ; les organisations de la paix',
    goal: 'définir les relations internationales et comparer la SDN et l’ONU ; citer les grands accords de paix',
    mat: 'Schéma des acteurs, textes (Charte de l’ONU), documents',
    revQ: 'Cite trois décisions ou créations de l’année 1945.',
    revRA: 'Conférences de Yalta et Potsdam, création de l’ONU (26 juin 1945), procès de Nuremberg.',
    situation: 'Quand deux pays se disputent une frontière, qui peut les empêcher d’en venir aux armes ? Quand une guerre éclate, qui envoie les casques bleus ? Derrière ces questions se cache toute une science : celle des relations internationales. Deux fois au XXᵉ siècle, l’humanité a bâti une organisation mondiale pour la paix : la SDN, qui a échoué — et l’ONU, qui tient depuis 1945. Pourquoi l’une est-elle morte et l’autre vivante ?',
    legende: 'Un parlement des nations pour remplacer les champs de bataille : le pari de 1920, repris en 1945.',
    motsCles: ['relations internationales', 'États', 'organisations internationales', 'forces transnationales', 'mondialisation', 'terrorisme', 'SDN', '1920', 'ONU', '1945', 'Conseil de sécurité', 'casques bleus', 'accords de paix'],
    sections: [
      {
        titre: 'Que sont les relations internationales ?',
        paras: ['Les relations internationales sont l’étude des rapports entre les acteurs du monde. Elles se définissent par leurs objets :'],
        puces: [
          'l’analyse de la guerre et de ses facteurs — pourquoi les États s’affrontent-ils ? ;',
          'l’étude de l’obtention de la paix par le droit — traités, arbitrages, organisations ;',
          'l’étude des phénomènes transnationaux, qui traversent les frontières : mondialisation économique, migrations, terrorisme ;',
          'et l’ensemble des relations entre les acteurs : les États d’abord, les organisations internationales (ONU, Union africaine…), et les forces transnationales — entreprises multinationales, ONG, réseaux — dans leur environnement mondial.',
        ],
      },
      {
        titre: 'La SDN : le premier essai (1920)',
        paras: [
          'Née du traité de Versailles, la Société des Nations devait garantir la paix par la sécurité collective : une agression contre l’un serait l’affaire de tous. Mais elle naît infirme : les États-Unis refusent d’y entrer, elle n’a pas d’armée, et ses condamnations restent des mots. Dans les années 1930, elle assiste impuissante aux agressions japonaise, italienne et allemande : la SDN meurt de n’avoir pu empêcher la guerre qu’elle devait interdire.',
        ],
      },
      {
        titre: 'L’ONU et les accords de paix',
        paras: [
          'L’ONU, fondée en 1945 par 51 États — presque tous aujourd’hui —, corrige les défauts de la SDN : un Conseil de sécurité qui peut décider de sanctions et d’interventions armées, des casques bleus pour maintenir la paix, et des institutions pour la santé (OMS), l’éducation (UNESCO), l’enfance (UNICEF). Elle proclame en 1948 la Déclaration universelle des droits de l’Homme. Ses missions de paix se déploient notamment en Afrique — et l’ONU accompagne Madagascar du développement aux élections. Les grands accords de paix jalonnent le siècle : traité de Paris (1947) avec les vaincus européens, accords de Genève (1954) mettant fin à la guerre d’Indochine, traité de Moscou (1990) scellant la réunification de l’Allemagne.',
        ],
      },
    ],
    doc: {
      titre: 'La Charte des Nations unies',
      source: 'd’après le préambule et l’article 1 de la Charte signée à San Francisco (26 juin 1945) — extraits adaptés',
      texte: 'Nous, peuples des Nations unies, résolus à préserver les générations futures du fléau de la guerre qui, deux fois en l’espace d’une vie humaine, a infligé à l’humanité d’indicibles souffrances ; à proclamer à nouveau notre foi dans les droits fondamentaux de l’homme, dans la dignité et la valeur de la personne humaine, dans l’égalité de droits des hommes et des femmes, ainsi que des nations grandes et petites — avons décidé d’unir nos efforts. Les buts des Nations unies sont : maintenir la paix et la sécurité internationales ; développer entre les nations des relations amicales fondées sur l’égalité de droits des peuples et leur droit à disposer d’eux-mêmes.',
      questions: ['Quelle expérience historique le préambule rappelle-t-il ?',
        'Relève les principes d’égalité proclamés par la Charte.',
        'Pourquoi l’article 1 intéresse-t-il particulièrement les peuples colonisés ?'],
      reponses: ['Les deux guerres mondiales « en l’espace d’une vie humaine » : la Charte naît du refus de revivre 1914 et 1939.',
        'Égalité de droits des hommes et des femmes, et des nations « grandes et petites » — tous les États valent également.',
        'Parce qu’il proclame « le droit des peuples à disposer d’eux-mêmes » : les colonisés — Malgaches, Africains, Asiatiques — y liront la condamnation du système colonial et le fondement de leurs indépendances.']
    },
    lexique: [
      ['Relations internationales', 'étude des rapports entre États, organisations et forces mondiales'],
      ['Sécurité collective', 'principe : une agression contre un État concerne tous les autres'],
      ['Conseil de sécurité', 'organe de l’ONU chargé de la paix, aux décisions obligatoires'],
      ['Casques bleus', 'soldats de la paix mis à disposition de l’ONU par les États'],
    ],
    synthese: 'Relations internationales : guerre et paix, phénomènes transnationaux (mondialisation, migrations, terrorisme), acteurs (États, organisations internationales, forces transnationales). SDN (1920) : sans armée ni États-Unis — échec. ONU (1945) : Conseil de sécurité, casques bleus, droits de l’Homme (1948), missions en Afrique. Accords de paix : Paris 1947, Genève 1954, Moscou 1990.',
    saistu: 'Madagascar a siégé au Conseil de sécurité de l’ONU en 1985-1986, comme membre non permanent élu ! Et des contingents malgaches ont servi sous le casque bleu dans plusieurs missions de paix africaines. Le pays qui fut colonisé « sans un seul Malgache dans la salle » en 1885-1890 vote aujourd’hui, à égalité avec les grandes puissances, à l’assemblée des nations : c’est toute la revanche de l’Histoire.',
    exos: ['Définitions. a) Que étudient les relations internationales ? b) Cite les trois types d’acteurs. d) Donne deux phénomènes transnationaux. e) Qu’est-ce que la sécurité collective ?',
      'SDN et ONU. a) Quand et d’où naît la SDN ? b) Cite deux faiblesses de la SDN. d) Quand l’ONU naît-elle, avec combien d’États ? e) Cite deux moyens d’action de l’ONU.',
      'Approfondir. a) Que proclame la Déclaration de 1948 ? b) Associe chaque accord à son objet : Paris 1947, Genève 1954, Moscou 1990. d) Cite une action de l’ONU en Afrique ou à Madagascar. e) Pourquoi l’ONU a-t-elle mieux résisté que la SDN ?'],
    corr: ['a) la guerre et ses facteurs, la paix par le droit, les phénomènes transnationaux ; b) les États, les organisations internationales, les forces transnationales ; d) mondialisation, migrations, terrorisme (deux suffisent) ; e) le principe selon lequel une agression contre un État est l’affaire de tous.',
      'a) en 1920, du traité de Versailles ; b) pas d’armée, absence des États-Unis, condamnations sans effet (deux suffisent) ; d) en 1945, avec 51 États fondateurs ; e) sanctions et interventions du Conseil de sécurité, casques bleus, institutions spécialisées (deux suffisent).',
      'a) la Déclaration universelle des droits de l’Homme ; b) Paris 1947 : paix avec les vaincus européens ; Genève 1954 : fin de la guerre d’Indochine ; Moscou 1990 : réunification allemande ; d) missions de paix de casques bleus ; appui au développement et aux élections à Madagascar ; e) parce qu’elle a des moyens d’action réels et rassemble presque tous les États, grandes puissances comprises.'],
    fig: 'u2f15'
  },
  {
    t: 'La Guerre froide : un monde bipolaire (1947-1962)', comp: 'Le monde depuis 1914', theme: 'Origines, manifestations et apogée de la Guerre froide',
    goal: 'expliquer les origines de la Guerre froide et ses manifestations jusqu’en 1962',
    mat: 'Carte des blocs, frise 1947-1962, documents',
    revQ: 'Compare la SDN et l’ONU en deux phrases.',
    revRA: 'La SDN (1920), sans armée ni États-Unis, a échoué ; l’ONU (1945) dispose du Conseil de sécurité et des casques bleus, et rassemble presque tous les États.',
    situation: '1945 : Américains et Soviétiques tombent dans les bras l’un de l’autre sur l’Elbe. 1948 : les mêmes se défient à Berlin, chars contre chars. Que s’est-il passé ? Les deux vainqueurs de la guerre, porteurs de deux modèles incompatibles — capitalisme contre communisme —, se sont partagé le monde en deux blocs. Pendant quarante ans, ils se feront tout… sauf la guerre directe : c’est la Guerre froide.',
    legende: 'Un monde coupé en deux blocs : capitalisme contre communisme, sans guerre directe — la Guerre froide.',
    motsCles: ['Guerre froide', 'bipolarisation', 'méfiance réciproque', 'doctrine Truman', 'doctrine Jdanov', 'OTAN', 'pacte de Varsovie', 'blocus de Berlin', 'RFA', 'RDA', 'guerre de Corée', 'guerre d’Indochine', 'mur de Berlin', '1961'],
    sections: [
      {
        titre: 'Les origines : la méfiance réciproque',
        paras: [
          'L’alliance de guerre ne survit pas à la victoire. L’URSS installe des régimes communistes dans l’Europe de l’Est qu’elle a libérée-occupée ; l’Ouest y voit une expansion menaçante. En 1947, la rupture est consommée : la doctrine Truman promet l’aide américaine à tout pays menacé par le communisme (l’« endiguement »), la doctrine Jdanov répond en divisant le monde en camp « impérialiste » et camp « anti-impérialiste ». Le monde devient bipolaire : deux blocs autour de deux superpuissances.',
        ],
      },
      {
        titre: 'Deux blocs organisés',
        paras: ['Chaque camp se structure en organisations rivales :'],
        puces: [
          'militaires : l’OTAN (1949) autour des États-Unis, le pacte de Varsovie (1955) autour de l’URSS ;',
          'économiques : le plan Marshall et l’OECE à l’Ouest, le CAEM (Comecon) à l’Est ;',
          'politiques et idéologiques : propagande, espionnage, course aux armements nucléaires et course à l’espace.',
        ],
      },
      {
        titre: 'L’apogée : les crises (1947-1962)',
        paras: [
          'Les crises se succèdent sans guerre directe : le blocus de Berlin (1948-1949) — Staline coupe les accès de Berlin-Ouest, les Alliés ravitaillent la ville par un pont aérien d’un an — aboutit à la création de deux Allemagnes, la RFA à l’Ouest et la RDA à l’Est (1949) ; la guerre de Corée (1950-1953) oppose par pays interposé les deux camps et fige la péninsule en deux États ; la guerre d’Indochine (1946-1954) mêle guerre coloniale et guerre froide ; et en août 1961, la RDA dresse en une nuit le mur de Berlin pour arrêter la fuite de ses habitants — le « mur de la honte », symbole du monde coupé en deux.',
        ],
      },
    ],
    doc: {
      titre: 'Le « rideau de fer »',
      source: 'd’après le discours de Winston Churchill à Fulton, États-Unis (5 mars 1946) — extrait adapté',
      texte: 'De Stettin, sur la Baltique, à Trieste, sur l’Adriatique, un rideau de fer est descendu à travers le continent. Derrière cette ligne se trouvent toutes les capitales des anciens États de l’Europe centrale et orientale : Varsovie, Berlin, Prague, Vienne, Budapest, Belgrade, Bucarest et Sofia. Toutes ces villes célèbres et les populations qui les entourent se trouvent dans ce que je dois appeler la sphère soviétique, et toutes sont soumises, sous une forme ou une autre, non seulement à l’influence soviétique, mais à un contrôle très étendu et, dans bien des cas, croissant, de Moscou.',
      questions: ['Que désigne l’image du « rideau de fer » ?',
        'Situe la ligne décrite par Churchill sur une carte d’Europe.',
        'Ce discours de 1946 annonce-t-il la Guerre froide ? Justifie.'],
      reponses: ['La coupure de l’Europe en deux : à l’est de la ligne, les pays passés sous contrôle soviétique ; à l’ouest, les démocraties libérales.',
        'De Stettin (Baltique, nord de l’Europe) à Trieste (Adriatique, sud) : une ligne nord-sud qui coupe le continent en deux, laissant à l’est Varsovie, Prague, Budapest…',
        'Oui : un an avant les doctrines de 1947, Churchill constate déjà la division de l’Europe et désigne l’expansion soviétique comme la menace — le vocabulaire même de la Guerre froide est né dans ce discours.']
    },
    lexique: [
      ['Bipolarisation', 'organisation du monde autour de deux pôles rivaux'],
      ['Endiguement', 'doctrine américaine visant à stopper l’expansion communiste'],
      ['Pont aérien', 'ravitaillement d’une ville isolée par avions (Berlin, 1948-49)'],
      ['Rideau de fer', 'frontière fermée séparant l’Europe de l’Est et de l’Ouest'],
    ],
    synthese: 'Guerre froide : méfiance réciproque, rupture de 1947 (doctrines Truman et Jdanov), monde bipolaire. Organisations : OTAN (1949) / pacte de Varsovie (1955) ; plan Marshall-OECE / CAEM. Apogée 1947-1962 : blocus de Berlin (1948-49) → RFA et RDA (1949) ; Corée (1950-53) ; Indochine (1946-54) ; mur de Berlin (1961). Affrontement total — sauf la guerre directe.',
    saistu: 'Pendant le blocus de Berlin, un avion allié se posait toutes les 90 secondes ! En un an, le pont aérien livra plus de deux millions de tonnes de vivres et de charbon — et un pilote américain, touché par les enfants berlinois, se mit à larguer des petits parachutes de chocolat avant d’atterrir. Des dizaines d’équipages l’imitèrent : les « bombardiers de bonbons » gagnèrent les cœurs mieux qu’aucune propagande.',
    exos: ['Les origines. a) Pourquoi l’alliance de 1945 se brise-t-elle ? b) Que dit la doctrine Truman ? d) Et la doctrine Jdanov ? e) Que signifie « monde bipolaire » ?',
      'Les blocs. a) Associe OTAN et pacte de Varsovie à leur camp et à leur date. b) Cite les organisations économiques des deux camps. d) Citez deux autres formes de l’affrontement. e) Pourquoi parle-t-on de guerre « froide » ?',
      'Les crises. a) Raconte le blocus de Berlin et son issue. b) Quelles guerres opposent les camps par pays interposés ? d) Que se passe-t-il en août 1961 ? e) Pourquoi le mur devient-il le symbole de la Guerre froide ?'],
    corr: ['a) parce que les deux vainqueurs portent deux modèles incompatibles et se disputent l’Europe ; b) les États-Unis aideront tout pays menacé par le communisme (endiguement) ; d) le monde se divise en camp impérialiste et camp anti-impérialiste ; e) un monde organisé autour de deux superpuissances rivales.',
      'a) OTAN : camp américain, 1949 ; pacte de Varsovie : camp soviétique, 1955 ; b) plan Marshall et OECE à l’Ouest, CAEM à l’Est ; d) propagande, espionnage, courses aux armements et à l’espace (deux suffisent) ; e) parce que les deux Grands s’affrontent par tous les moyens sauf la guerre directe entre eux.',
      'a) Staline coupe les accès de Berlin-Ouest (1948) ; les Alliés ravitaillent par pont aérien un an durant ; Staline cède — et deux Allemagnes naissent (RFA, RDA, 1949) ; b) la Corée (1950-1953) et l’Indochine (1946-1954) ; d) la RDA construit le mur de Berlin en une nuit ; e) parce qu’il coupe une ville, des familles et le monde en deux, béton et barbelés à l’appui.'],
    fig: 'u2f16'
  },
  {
    t: 'La détente et la fin de la Guerre froide (1962-1991)', comp: 'Le monde depuis 1914', theme: 'De la crise de Cuba à la chute du mur',
    goal: 'présenter la détente, ses accords et ses limites, et la fin de la Guerre froide',
    mat: 'Frise 1962-1991, documents, images de la chute du mur',
    revQ: 'Cite trois crises de l’apogée de la Guerre froide.',
    revRA: 'Blocus de Berlin (1948-49), guerre de Corée (1950-53), guerre d’Indochine (1946-54), mur de Berlin (1961) — trois suffisent.',
    situation: 'Octobre 1962 : des missiles nucléaires soviétiques sont découverts à Cuba, à 150 km des côtes américaines. Pendant treize jours, le monde retient son souffle — jamais la guerre atomique n’a été si proche. Les deux Grands, effrayés par leur propre puissance, choisissent alors de se parler : c’est la détente. Trente ans plus tard, le mur de Berlin tombe et l’URSS disparaît. Comment la Guerre froide s’est-elle éteinte ?',
    legende: 'Treize jours au bord du gouffre nucléaire : après Cuba, les deux Grands choisissent de se parler.',
    motsCles: ['crise de Cuba', '1962', 'détente', 'téléphone rouge', 'traité de Moscou 1963', 'non-prolifération 1968', 'SALT 1972', 'guerre du Vietnam', 'Afghanistan', 'Gorbatchev', 'perestroïka', 'glasnost', 'chute du mur', '1989', 'fin de l’URSS 1991'],
    sections: [
      {
        titre: 'Cuba, 1962 : le monde au bord du gouffre',
        paras: [
          'La crise de Cuba (octobre 1962) est le sommet de la peur : missiles soviétiques installés à Cuba, blocus naval américain, menace directe de guerre nucléaire. Au dernier moment, Khrouchtchev retire les missiles contre l’engagement américain de ne pas envahir Cuba. La leçon est retenue : un « téléphone rouge » relie désormais Washington et Moscou, et l’ère de la détente commence.',
        ],
      },
      {
        titre: 'La détente : accords — et limites',
        paras: ['Les deux Grands apprennent à limiter leur rivalité :'],
        puces: [
          'les accords sur les armements : traité de Moscou (1963) interdisant les essais nucléaires dans l’atmosphère, traité de non-prolifération des armes nucléaires (1968), négociations SALT (1972) limitant les arsenaux ;',
          'mais la détente a ses limites : la guerre du Vietnam (1962-1975) engloutit les États-Unis, l’URSS s’enlise en Afghanistan (1979-1988), et les conflits périphériques — en Afrique, au Moyen-Orient — continuent d’opposer les camps par alliés interposés.',
        ],
      },
      {
        titre: 'Gorbatchev et la fin (1985-1991)',
        paras: [
          'En 1985, Mikhaïl Gorbatchev prend la tête d’une URSS épuisée — économie à bout de souffle, guerre d’Afghanistan, course aux armements ruineuse. Il lance la perestroïka (restructuration de l’économie) et la glasnost (transparence, liberté de parole), et négocie le désarmement avec l’Ouest. Mais la liberté rendue réveille les peuples : en 1989, les régimes communistes d’Europe de l’Est tombent les uns après les autres, et le 9 novembre 1989, les Berlinois abattent le mur. L’Allemagne se réunifie (1990) — et en décembre 1991, l’URSS elle-même se dissout : la Guerre froide est finie, sans bataille finale.',
        ],
      },
    ],
    doc: {
      titre: 'Un discours au pied du mur',
      source: 'd’après le discours prononcé par le président Kennedy devant le mur de Berlin (26 juin 1963) — extrait adapté',
      texte: 'Il y a beaucoup de gens dans le monde qui ne comprennent pas quel est le grand débat entre le monde libre et le monde communiste. Qu’ils viennent à Berlin ! Il y en a qui disent que le communisme est la vague de l’avenir. Qu’ils viennent à Berlin ! La liberté connaît bien des difficultés, et la démocratie n’est pas parfaite. Mais nous n’avons jamais eu besoin, nous, d’élever un mur pour empêcher notre peuple de s’enfuir. Tous les hommes libres, où qu’ils vivent, sont citoyens de Berlin.',
      questions: ['Quel argument le mur fournit-il à Kennedy contre le communisme ?',
        'Relève la concession que fait l’orateur sur son propre camp.',
        'Ce discours relève-t-il de la propagande, de l’Histoire, ou des deux ? Discute.'],
      reponses: ['Le mur prouve que le régime de l’Est doit enfermer son peuple pour le garder : « nous n’avons jamais eu besoin d’élever un mur pour empêcher notre peuple de s’enfuir ».',
        '« La liberté connaît bien des difficultés, et la démocratie n’est pas parfaite » : il reconnaît les imperfections de son camp pour mieux souligner la différence.',
        'Des deux : c’est un discours de camp, conçu pour frapper l’opinion mondiale (propagande) — mais c’est aussi un document historique majeur, qui dit le climat de 1963 ; l’historien l’analyse en gardant cette double nature à l’esprit.']
    },
    lexique: [
      ['Détente', 'période d’apaisement entre les deux blocs (1962-1991)'],
      ['Non-prolifération', 'engagement d’empêcher la diffusion des armes nucléaires'],
      ['Perestroïka', '« restructuration » de l’économie soviétique par Gorbatchev'],
      ['Glasnost', '« transparence » : liberté de parole rendue en URSS'],
    ],
    synthese: 'Détente : après Cuba (1962), téléphone rouge, accords (Moscou 1963, TNP 1968, SALT 1972) — limites : Vietnam (1962-1975), Afghanistan (1979-1988), conflits périphériques. Fin : Gorbatchev (1985, perestroïka-glasnost), chute du mur (9 novembre 1989), réunification allemande (1990), dissolution de l’URSS (décembre 1991).',
    saistu: 'La chute du mur de Berlin est née… d’un cafouillage ! Le 9 novembre 1989 au soir, un porte-parole est-allemand, mal informé, annonce que les voyages vers l’Ouest sont libres « immédiatement ». Des dizaines de milliers de Berlinois se ruent aux postes-frontières ; les gardes, sans ordres, finissent par ouvrir. En quelques heures, la foule danse sur le mur et l’attaque au marteau. Le symbole de la Guerre froide est tombé sur un malentendu — que plus personne ne voulait corriger.',
    exos: ['Cuba et la détente. a) Que se passe-t-il en octobre 1962 ? b) Comment la crise se dénoue-t-elle ? d) Qu’est-ce que le téléphone rouge ? e) Cite les trois accords sur les armements.',
      'Les limites. a) Quelles guerres montrent les limites de la détente ? b) Qui s’enlise en Afghanistan, et quand ? d) Que sont les « conflits périphériques » ? e) Pourquoi la course aux armements ruine-t-elle l’URSS ?',
      'La fin. a) Quand Gorbatchev arrive-t-il au pouvoir ? b) Définis perestroïka et glasnost. d) Que se passe-t-il le 9 novembre 1989 ? e) Et en décembre 1991 ?'],
    corr: ['a) la crise de Cuba : des missiles soviétiques sont découverts à Cuba, blocus américain, menace nucléaire ; b) Khrouchtchev retire les missiles contre l’engagement de ne pas envahir Cuba ; d) la ligne directe Washington-Moscou créée après la crise ; e) Moscou 1963, non-prolifération 1968, SALT 1972.',
      'a) le Vietnam (1962-1975) pour les États-Unis, l’Afghanistan (1979-1988) pour l’URSS ; b) l’URSS, de 1979 à 1988 ; d) des guerres entre alliés des deux camps, hors d’Europe (Afrique, Asie, Moyen-Orient) ; e) parce que son économie, moins productive, ne peut suivre les dépenses militaires américaines.',
      'a) en 1985 ; b) perestroïka : restructuration de l’économie ; glasnost : transparence et liberté de parole ; d) le mur de Berlin tombe sous la pression populaire ; e) l’URSS se dissout : la Guerre froide est terminée.'],
    fig: 'u2f17'
  },
  {
    t: 'Le monde depuis le début des années 1990', comp: 'Le monde depuis 1914', theme: 'Mondialisation, conflits nouveaux, monde multipolaire',
    goal: 'caractériser le monde depuis 1990 : hégémonie américaine, mondialisation, conflits, terrorisme, multipolarité',
    mat: 'Carte du monde actuel, frise 1990-2020, documents',
    revQ: 'Donne les grandes dates de la fin de la Guerre froide.',
    revRA: 'Gorbatchev 1985 ; chute du mur 9 novembre 1989 ; réunification allemande 1990 ; dissolution de l’URSS décembre 1991.',
    situation: '1991 : l’URSS disparaît, et certains annoncent « la fin de l’Histoire » — plus de rival, plus de guerre, le marché et la démocratie partout. Trente ans plus tard, le bilan est tout autre : génocide au Rwanda, guerres en Yougoslavie et au Moyen-Orient, tours de New York effondrées, nouvelles puissances qui défient l’Amérique. L’Histoire n’était pas finie — elle changeait de visage. À quoi ressemble le monde né en 1991 ?',
    legende: 'Après 1991, un monde sans rival pour l’Amérique — mais pas sans conflits ni surprises.',
    motsCles: ['dislocation du bloc communiste', '1991', 'hyperpuissance', 'gendarme du monde', 'mondialisation', 'guerre du Golfe', 'Yougoslavie', 'génocide du Rwanda', '1994', 'terrorisme international', '11 septembre 2001', 'puissances émergentes', 'monde multipolaire'],
    sections: [
      {
        titre: 'L’Amérique seule au sommet',
        paras: [
          'La dislocation du bloc communiste — éclatement de l’URSS en quinze États, fin de la guerre froide (1991) — laisse les États-Unis seuls au rang de superpuissance : une « hyperpuissance » militaire, économique et culturelle, qui se fait « gendarme du monde » : dès 1991, la guerre du Golfe chasse l’Irak du Koweït sous mandat de l’ONU. La mondialisation de l’économie s’accélère : libre-échange, Internet, conteneurs — les échanges explosent, la Chine devient l’atelier du monde.',
        ],
      },
      {
        titre: 'Un monde pourtant violent',
        paras: ['Le « nouvel ordre mondial » déçoit vite :'],
        puces: [
          'la guerre civile déchire la Yougoslavie (1992-2001) : l’Europe redécouvre les massacres sur son sol ;',
          'au Rwanda, en 1994, le génocide des Tutsi fait environ 800 000 morts en cent jours, dans l’indifférence des grandes puissances — l’ONU, présente, n’a pas su l’empêcher ;',
          'le Moyen-Orient s’embrase à répétition : Golfe (1991), Afghanistan (2001), Irak (2003-2011), Syrie (depuis 2011) ;',
          'et le terrorisme international frappe au cœur : le 11 septembre 2001, les attentats d’Al-Qaïda contre New York et Washington tuent près de 3 000 personnes — l’Amérique découvre sa vulnérabilité.',
        ],
      },
      {
        titre: 'Vers un monde multipolaire',
        paras: [
          'Au XXIᵉ siècle, l’unipolarité américaine s’érode : la Chine devenue deuxième économie mondiale, l’Inde, le Brésil, la Russie de retour — les puissances émergentes réclament leur place. Le monde devient multipolaire : plusieurs pôles de puissance, des alliances mouvantes, des institutions contestées. Pour les pays du Sud — Madagascar compris —, ce monde multipolaire offre plus de partenaires… et exige plus de diplomatie que jamais.',
        ],
      },
    ],
    doc: {
      titre: 'L’ONU face au génocide du Rwanda',
      source: 'd’après le rapport de l’enquête indépendante sur l’action des Nations unies au Rwanda (1999) — extraits adaptés',
      texte: 'Quelque 800 000 personnes ont été tuées au Rwanda en 1994, en l’espace d’une centaine de jours. L’enquête conclut que la réponse des Nations unies, avant et pendant le génocide, a été un échec. La mission sur place manquait d’hommes, de moyens et d’un mandat suffisant ; les avertissements n’ont pas été entendus ; et quand le génocide a commencé, la communauté internationale a retiré l’essentiel de ses forces au lieu de les renforcer. Chacun doit assumer et regretter sa part de cet échec : il faut que l’ONU dise plus jamais — et s’en donne, cette fois, les moyens.',
      questions: ['Quel bilan le rapport établit-il, et en combien de temps ?',
        'Quelles causes de l’échec de l’ONU le rapport reconnaît-il ?',
        'Pourquoi une organisation publie-t-elle un rapport accablant… sur elle-même ?'],
      reponses: ['Environ 800 000 personnes tuées en une centaine de jours — l’un des génocides les plus rapides de l’Histoire.',
        'Mission trop faible (hommes, moyens, mandat), avertissements ignorés, et retrait des forces au moment où il fallait les renforcer.',
        'Parce que reconnaître ses fautes est la condition pour ne pas les répéter : ce rapport d’autocritique illustre le « devoir de mémoire » et a conduit l’ONU à renforcer ses missions suivantes.']
    },
    lexique: [
      ['Hyperpuissance', 'puissance dominant tous les domaines : militaire, économique, culturel'],
      ['Mondialisation', 'interdépendance croissante des économies et des sociétés'],
      ['Terrorisme', 'violence visant des civils pour imposer une cause par la terreur'],
      ['Multipolaire', 'monde organisé autour de plusieurs pôles de puissance'],
    ],
    synthese: 'Depuis 1990 : dislocation du bloc communiste (1991), États-Unis hyperpuissance (« gendarme du monde », Golfe 1991), mondialisation accélérée ; mais conflits — Yougoslavie (1992-2001), génocide du Rwanda (1994), Moyen-Orient (Afghanistan 2001, Irak 2003, Syrie 2011) — et terrorisme international (11 septembre 2001). Émergence de nouvelles puissances : le monde devient multipolaire.',
    saistu: 'Le 11 septembre 2001 est l’événement le plus regardé de l’histoire de la télévision : des milliards de personnes ont vu, en direct, s’effondrer les tours jumelles. Pour la première fois, l’humanité entière a assisté ensemble, au même instant, au même événement historique. Les historiens de demain étudieront aussi cela : comment la mondialisation de l’information a changé notre façon même de vivre l’Histoire.',
    exos: ['L’après-1991. a) Que devient l’URSS en 1991 ? b) Pourquoi parle-t-on d’« hyperpuissance » américaine ? d) Qu’est-ce que la guerre du Golfe ? e) Cite deux moteurs de la mondialisation.',
      'Les conflits. a) Quand la Yougoslavie se déchire-t-elle ? b) Que se passe-t-il au Rwanda en 1994 ? d) Cite trois conflits du Moyen-Orient depuis 1990. e) Que se passe-t-il le 11 septembre 2001 ?',
      'Réfléchir. a) Pourquoi la « fin de l’Histoire » annoncée en 1991 était-elle une illusion ? b) Qu’est-ce qu’une puissance émergente ? d) Définis le monde multipolaire. e) Quels enjeux ce monde pose-t-il à Madagascar ?'],
    corr: ['a) elle se disloque en quinze États indépendants ; b) parce qu’ils dominent tous les domaines : militaire, économique, culturel ; d) l’intervention de 1991 qui chasse l’Irak du Koweït sous mandat de l’ONU ; e) libre-échange, Internet, transports par conteneurs (deux suffisent).',
      'a) de 1992 à 2001 ; b) le génocide des Tutsi : environ 800 000 morts en cent jours ; d) Golfe 1991, Afghanistan 2001, Irak 2003-2011, Syrie depuis 2011 (trois suffisent) ; e) les attentats terroristes d’Al-Qaïda contre New York et Washington.',
      'a) parce que les conflits, les génocides et le terrorisme ont continué sous d’autres formes ; b) un pays dont le poids économique et politique croît rapidement (Chine, Inde, Brésil…) ; d) un monde organisé autour de plusieurs pôles de puissance rivaux et partenaires ; e) diversifier ses partenaires, défendre ses intérêts par la diplomatie, tirer parti de la mondialisation sans en subir les chocs.'],
    fig: 'u2f18'
  }
];

const unit2 = {
  no: 2, roman: 'II', name: 'Le monde depuis 1914',
  rag: 'porter un regard critique sur la situation économique, sociale et politique du monde depuis 1914.',
  valeurs: 'esprit critique, culture de la paix',
  sessions: S,
  revision: {
    table: [
      ['Transformations du XXᵉ siècle', 'Innovations scientifiques et techniques, production de masse, tertiarisation, société de consommation', 'Comprendre le siècle des mutations'],
      ['Première Guerre mondiale', 'Alliances, Sarajevo 1914 ; mouvement-position-mouvement ; 10 millions de morts, Versailles 1919 ; effort de guerre malgache (SICE, 40 000 tirailleurs)', 'Expliquer la Grande Guerre et la part de Madagascar'],
      ['Entre-deux-guerres', 'Révolution russe 1917 → URSS 1922 ; crise de 1929 ; totalitarismes : stalinisme, fascisme, nazisme', 'Relier crise et montée des dictatures'],
      ['Seconde Guerre mondiale', '1939-1945 : Axe dominant puis victoire alliée ; 50-60 millions de morts, Shoah ; Yalta-Potsdam, ONU 1945', 'Dresser le bilan du second conflit'],
      ['Guerre froide', '1947-1991 : bipolarisation, Berlin, Corée, Cuba 1962 ; détente ; Gorbatchev, chute du mur 1989, fin URSS 1991', 'Lire un demi-siècle d’affrontement sans guerre directe'],
      ['Monde depuis 1990', 'Hyperpuissance américaine, mondialisation, Yougoslavie, Rwanda 1994, 11 septembre 2001, multipolarité', 'Caractériser le monde actuel']
    ],
    questions: [
      'Cite trois innovations scientifiques et trois innovations technologiques du XXᵉ siècle.',
      'Récite les trois phases de la Première Guerre mondiale et les deux volets de l’effort de guerre malgache.',
      'Montre l’enchaînement : crise de 1929 → totalitarismes → Seconde Guerre mondiale.',
      'Compare la SDN et l’ONU.',
      'Résume la Guerre froide en cinq dates.'
    ],
    answers: [
      'Sciences : antibiotiques (1928), ADN (1953), imagerie médicale ; techniques : aviation (1903), radio-télévision, informatique et Internet.',
      'Mouvement (1914-15), position (1915-mars 1918), mouvement (mars-novembre 1918) ; économique : ravitaillement (SICE) et taxes ; militaire : plus de 40 000 tirailleurs.',
      'La crise ruine l’Allemagne (6 millions de chômeurs) → Hitler au pouvoir (1933) → réarmement et agressions → guerre en 1939.',
      'SDN (1920) : sans armée ni États-Unis, impuissante ; ONU (1945) : Conseil de sécurité, casques bleus, quasi-universelle.',
      '1947 (rupture, doctrines), 1949 (OTAN, deux Allemagnes), 1962 (Cuba), 1989 (chute du mur), 1991 (fin de l’URSS).'
    ]
  },
  exam: {
    exos: [
      'Questions de cours. a) Définis le régime totalitaire. b) Qu’est-ce que l’économie de la société de consommation ? d) Définis la Guerre froide. e) Qu’est-ce que la mondialisation ?',
      'Repères. Associe chaque date à son événement : a) 28 juin 1914 ; b) 24 octobre 1929 ; d) 8 mai 1945 ; e) 9 novembre 1989.',
      'La part de Madagascar. a) Présente l’effort de guerre malgache de 1914-1918 (deux volets). b) Que fait la SICE ? d) Que se passe-t-il à Diego-Suarez en 1942 ? e) Montre le lien entre le retour des anciens combattants et le nationalisme.',
      'Étude de document. L’article 231 du traité de Versailles déclare l’Allemagne responsable de la guerre. a) Quand ce traité est-il signé ? b) Cite deux autres sanctions qu’il impose. d) Comment les Allemands le surnomment-ils ? e) Explique en quoi il porte les germes de la Seconde Guerre mondiale.',
      'Réflexion organisée. « De 1914 à nos jours, le monde n’a cessé de se transformer. » a) Cite deux transformations économiques et sociales. b) Cite les deux guerres mondiales avec leurs bilans humains. d) Explique la bipolarisation puis la multipolarité. e) Conclus : pourquoi l’étude de ce siècle développe-t-elle l’esprit critique et la culture de la paix ?'
    ],
    corr: [
      'a) régime qui prétend contrôler toute la vie des citoyens : chef et parti uniques, propagande, terreur ; b) société organisée autour de la consommation de masse : équipement, publicité, crédit ; d) l’affrontement total mais sans guerre directe des blocs américain et soviétique (1947-1991) ; e) l’interdépendance croissante des économies et des sociétés du monde. Un point par item.',
      'a) attentat de Sarajevo ; b) krach de Wall Street (jeudi noir) ; d) capitulation allemande ; e) chute du mur de Berlin. Un point par item.',
      'a) économique : ravitaillement (SICE, riz, viande) et hausse des taxes ; militaire : plus de 40 000 tirailleurs ; b) elle produit des conserves de viande pour l’armée française ; d) les Britanniques prennent le port après des combats contre les forces de Vichy ; e) revenus porteurs d’idées nouvelles et d’exigence d’égalité, les anciens combattants nourrissent les mouvements nationalistes. Un point par item.',
      'a) le 28 juin 1919 ; b) réparations financières, pertes territoriales et coloniales, désarmement (deux suffisent) ; d) le « diktat » ; e) l’humiliation et la ruine nourrissent l’esprit de revanche qu’exploitera Hitler. Un point par item.',
      'a) production de masse puis mondialisation ; tertiarisation et société de consommation (ou féminisation, migrations) ; b) 1914-1918 : environ 10 millions de morts ; 1939-1945 : 50 à 60 millions ; d) 1947-1991 : deux blocs autour de deux superpuissances ; depuis 1991 : plusieurs pôles de puissance ; e) parce qu’elle apprend à critiquer les propagandes et les sources, et montre le prix des guerres — donc la valeur de la paix. Un point par item.'
    ]
  }
};

(async () => {
  const bufs = await L.render(figs);
  await buildUnit(unit2, bufs);
})();
