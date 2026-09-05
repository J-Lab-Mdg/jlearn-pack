// Scènes illustratives (dessins de manuel scolaire, style validé) et photos d'archives (domaine public / licence libre)
// Choix validés : 1 scène par séance en tête de leçon (+ 1 photo d'archives pour les séances riches) ;
// personnages réels = photos authentiques uniquement, jamais de visage inventé.
// Appliqué aux données par applyScenes(seances) : ajoute s.scene et insère des blocs { t: "photo" } avant la sous-partie indiquée.

const IJ = "illustration J-Learn";

const SCENES = {
  1: { file: "scene:s01_port_tamatave.jpg", legende: "Le port de Toamasina vers 1880 : navires et comptoirs européens, pirogues et porteurs malgaches" },
  2: { file: "scene:s02_colonne_1895.jpg", legende: "1895 : la colonne française progresse vers Antananarivo à travers les Hautes Terres" },
  3: { file: "scene:s03_gouverneur_general.jpg", legende: "La résidence du gouverneur général à Antananarivo vers 1900 : le pouvoir colonial s'installe" },
  4: { file: "scene:s04_chef_canton.jpg", legende: "Un administrateur colonial remet ses instructions au chef de canton devant les villageois (vers 1920)" },
  5: { file: "scene:s05_pacte_colonial.jpg", legende: "Le pacte colonial sur un quai malgache : café, raphia et vanille partent vers la France, tissus et outils en arrivent" },
  6: { file: "scene:s06_prestations_route.jpg", legende: "Les prestations : des villageois réquisitionnés construisent une route sous surveillance (vers 1910)" },
  7: { file: "scene:s07_plantation_chemin_fer.jpg", legende: "L'économie coloniale : cueillette du café et de la vanille, chemin de fer Tananarive–Côte Est" },
  8: { file: "scene:s08_menalamba.jpg", legende: "1896 : des Menalamba (« toges rouges ») se rassemblent sur une colline des Hautes Terres" },
  9: { file: "scene:s09_moramanga_1947.jpg", legende: "Nuit du 29 mars 1947 : les insurgés attaquent le camp militaire de Moramanga" },
  10: { file: "scene:s10_independance_1960.jpg", legende: "26 juin 1960, stade de Mahamasina : le drapeau malgache est hissé devant la foule" },
  11: { file: "scene:s11_versailles_1919.jpg", legende: "28 juin 1919 : la signature du traité de paix dans la galerie des Glaces du château de Versailles" },
  12: { file: "scene:s12_petrograd_1917.jpg", legende: "Février 1917 à Petrograd : ouvriers, femmes et soldats manifestent pour le pain et la paix" },
  13: { file: "scene:s13_gardes_rouges.jpg", legende: "La guerre civile russe (1918-1921) : un train blindé de l'Armée rouge et des gardes rouges" },
  14: { file: "scene:s14_kolkhoze_plan.jpg", legende: "L'URSS de Staline : kolkhoze et chantier industriel du plan quinquennal (années 1930)" },
  15: { file: "scene:s15_wall_street_1929.jpg", legende: "Octobre 1929 : la foule inquiète devant la Bourse de New York (Wall Street)" },
  16: { file: "scene:s16_new_deal.jpg", legende: "Les années 1930 aux États-Unis : file d'attente devant une soupe populaire et chantier du New Deal" },
  17: { file: "scene:s17_marche_rome.jpg", legende: "Octobre 1922 : les Chemises noires marchent sur Rome" },
  18: { file: "scene:s18_propagande_nazie.jpg", legende: "L'Allemagne nazie : défilé et propagande, embrigadement de la jeunesse (années 1930)" },
  19: { file: "scene:s19_guerre_eclair.jpg", legende: "1939-1940 : la guerre éclair (Blitzkrieg), chars et avions allemands, colonnes de réfugiés" },
  20: { file: "scene:s20_ruines_1945.jpg", legende: "1945 : une ville européenne en ruines, le retour des déportés et des prisonniers" },
  21: { file: "scene:s21_berlin_1948.jpg", legende: "1948-1949 : le pont aérien de Berlin ravitaille la ville bloquée par les Soviétiques" },
  22: { file: "scene:s22_mur_berlin_1989.jpg", legende: "9 novembre 1989 : Berlinois de l'Est et de l'Ouest sur le mur, symbole de la fin de la guerre froide" },
  23: { file: "scene:s23_bandoeng_1955.jpg", legende: "Avril 1955 : les délégations des pays d'Asie et d'Afrique réunies à la conférence de Bandoeng" },
  24: { file: "scene:s24_mondialisation.jpg", legende: "Le monde d'aujourd'hui : port à conteneurs, réseaux numériques et institutions internationales" },
  25: { file: "scene:s25_13_mai_1972.jpg", legende: "13 mai 1972 : étudiants et lycéens manifestent place de l'Indépendance à Antananarivo" },
};

// Photos d'archives : insérées AVANT la sous-partie « avant » (titre exact de la leçon)
const PHOTOS = {
  2: [
    { avant: "2. La première guerre franco-malgache et le traité de 1885", file: "photo:ranavalona3.jpg", widthCm: 5.5,
      legende: "La reine Ranavalona III (1861-1917), dernière souveraine de Madagascar, vers 1890",
      source: "photographie anonyme, University of Southern California Libraries, domaine public (Wikimedia Commons)",
      texte: ["**Ranavalona III** monte sur le trône en 1883, à 22 ans, au moment où éclate la première guerre franco-malgache. Le pouvoir réel appartient au Premier ministre Rainilaiarivony, qu'elle épouse selon la coutume.", "Après la prise d'Antananarivo (30 septembre 1895), elle est d'abord maintenue sous protectorat, puis **déposée et exilée** par Gallieni en février 1897, à La Réunion puis à Alger, où elle meurt en 1917. Sa dépouille a été ramenée à Madagascar en 1938."] },
    { avant: "3. La conquête de 1895 et l'annexion de 1896", file: "photo:gallieni.jpg", widthCm: 5.5,
      legende: "Le général Joseph Gallieni (1849-1916), résident général puis gouverneur général de Madagascar (1896-1905)",
      source: "photographie anonyme, avant 1916, domaine public (Wikimedia Commons)",
      texte: ["**Joseph Gallieni** arrive à Madagascar en septembre 1896, après la loi d'annexion. Officier formé au Soudan et au Tonkin, il reçoit les pleins pouvoirs civils et militaires.", "Il abolit la royauté merina, dirige la « pacification » contre les Menalamba (répression sévère, exécution du prince Ratsimamanga et du ministre Rainandriamampandry en octobre 1896), puis organise l'administration de la colonie jusqu'en 1905."] },
  ],
  10: [
    { avant: "4. L'indépendance du 26 juin 1960", file: "photo:tsiranana_1960.jpg", widthCm: 5,
      legende: "Philibert Tsiranana (1912-1978) en 1960, premier président de la République malgache",
      source: "Service de presse et d'information, France, 1960, domaine public (Wikimedia Commons)",
      texte: ["Instituteur originaire du Nord-Ouest, fondateur du **PSD** (Parti social-démocrate) en 1956, **Philibert Tsiranana** devient vice-président du Conseil de gouvernement grâce à la Loi-cadre, puis président de la République malgache proclamée le 14 octobre 1958.", "C'est lui qui signe avec la France les accords de transfert de compétences (avril 1960) et proclame l'**indépendance le 26 juin 1960**. Il gouverne jusqu'en 1972."] },
  ],
  13: [
    { avant: "4. Lénine (1870-1924)", file: "photo:lenine_1919.jpg", widthCm: 6,
      legende: "Lénine prononce un discours sur la place Rouge à Moscou, 1er mai 1919",
      source: "photographie de G. Goldshtein, 1919, domaine public (Wikimedia Commons)",
      texte: ["Chef du parti bolchevik, **Lénine** (Vladimir Ilitch Oulianov) dirige la révolution d'Octobre 1917, puis le nouvel État soviétique pendant la guerre civile.", "Orateur redoutable, il s'adresse directement aux ouvriers et aux soldats : la photographie montre le rôle de la parole et de la propagande dans la victoire des bolcheviks."] },
  ],
  14: [
    { avant: "3. Un régime totalitaire", file: "photo:staline.jpg", widthCm: 5,
      legende: "Joseph Staline (1878-1953), portrait officiel diffusé par la propagande soviétique (vers 1942)",
      source: "photographie anonyme, Sovfoto, domaine public (Wikimedia Commons)",
      texte: ["Secrétaire général du Parti communiste depuis 1922, **Staline** élimine ses rivaux après la mort de Lénine et concentre tous les pouvoirs à partir de 1929.", "Le portrait officiel, reproduit par millions dans les écoles, les usines et les kolkhozes, est un instrument du **culte de la personnalité** : le chef est présenté comme un père bienveillant et infaillible."] },
  ],
  16: [
    { avant: "2. Roosevelt et l'idée du New Deal", file: "photo:roosevelt_1933.jpg", widthCm: 5,
      legende: "Franklin D. Roosevelt (1882-1945), président des États-Unis de 1933 à 1945, portrait de décembre 1933",
      source: "photographie d'Elias Goldensky, Library of Congress, domaine public (Wikimedia Commons)",
      texte: ["Gouverneur de l'État de New York, **Franklin Delano Roosevelt** est élu président en novembre 1932 avec la promesse d'un « **New Deal** » (nouvelle donne) pour le peuple américain.", "Atteint de poliomyélite depuis 1921, il gouverne depuis un fauteuil roulant, ce que les photographies officielles évitent de montrer. Réélu trois fois, il meurt en avril 1945, peu avant la fin de la guerre."] },
  ],
  17: [
    { avant: "2. Mussolini et la conquête du pouvoir", file: "photo:mussolini.jpg", widthCm: 5,
      legende: "Benito Mussolini (1883-1945), le « Duce », portrait officiel en uniforme",
      source: "photographie anonyme, Narodowe Archiwum Cyfrowe, domaine public (Wikimedia Commons)",
      texte: ["Ancien socialiste devenu nationaliste pendant la guerre, **Benito Mussolini** fonde les Faisceaux de combat en 1919 et le Parti national fasciste en 1921.", "Le portrait officiel — menton levé, regard dur, uniforme — illustre le **culte du chef** (le *Duce*) organisé par le régime : force, virilité et autorité sont les valeurs mises en scène."] },
  ],
  18: [
    { avant: "2. Hitler et le parti nazi", file: "photo:hitler_1937.jpg", widthCm: 5,
      legende: "Adolf Hitler (1889-1945), chancelier du Reich depuis 1933, portrait officiel du 20 avril 1937",
      source: "Bundesarchiv, Bild 183-S33882 / auteur inconnu / CC BY-SA 3.0 de (Wikimedia Commons)",
      texte: ["Chef du parti nazi (NSDAP) depuis 1921, **Adolf Hitler** est nommé chancelier le 30 janvier 1933 et concentre tous les pouvoirs en dix-huit mois (le *Führer*).", "Ce portrait, diffusé pour son anniversaire, appartient à la propagande du régime : le photographe officiel Heinrich Hoffmann fabrique l'image d'un chef à la fois sévère et proche du peuple."] },
  ],
  20: [
    { avant: "3. Un nouvel ordre mondial : Yalta, Potsdam et l'ONU", file: "photo:yalta_1945.jpg", widthCm: 7.5,
      legende: "Churchill, Roosevelt et Staline à la conférence de Yalta (Crimée), février 1945",
      source: "U.S. Army Signal Corps, 1945, domaine public (Wikimedia Commons)",
      texte: ["Du 4 au 11 février 1945, les « **Trois Grands** » — Churchill (Royaume-Uni), Roosevelt (États-Unis) et Staline (URSS) — se réunissent à Yalta pour préparer la fin de la guerre.", "Ils décident l'occupation de l'Allemagne en quatre zones, la tenue d'élections libres dans les pays libérés et la création de l'**ONU**. La photographie des trois chefs assis côte à côte symbolise une alliance qui se brisera dès 1947."] },
  ],
  22: [
    { avant: "1. La détente (1962-1975)", file: "photo:kennedy_khrouchtchev_1961.jpg", widthCm: 7,
      legende: "Nikita Khrouchtchev et John F. Kennedy au sommet de Vienne, 3 juin 1961",
      source: "U.S. Department of State, John F. Kennedy Presidential Library, domaine public (Wikimedia Commons)",
      texte: ["Le dirigeant soviétique **Khrouchtchev** et le président américain **Kennedy** se rencontrent à Vienne en juin 1961, quelques semaines avant la construction du mur de Berlin.", "Après la crise des fusées de Cuba (octobre 1962), qui a frôlé la guerre nucléaire, les deux Grands installent le « téléphone rouge » et entrent dans la **Détente**."] },
  ],
  23: [
    { avant: "3. Bandoeng et la naissance du Tiers-Monde", file: "photo:nasser_nehru_bandung_1955.jpg", widthCm: 4.5,
      legende: "Gamal Abdel Nasser (Égypte) et Jawaharlal Nehru (Inde) à la conférence de Bandoeng, avril 1955",
      source: "Bibliotheca Alexandrina, fonds Nasser, domaine public (Wikimedia Commons)",
      texte: ["**Nehru**, Premier ministre de l'Inde indépendante depuis 1947, et **Nasser**, chef de l'Égypte depuis 1954, sont avec Soekarno (Indonésie) et Zhou Enlai (Chine) les grandes figures de Bandoeng.", "Les 29 pays présents condamnent le colonialisme et le racisme, et refusent de s'aligner sur l'un des deux blocs : c'est la naissance du **Tiers-Monde** et du **non-alignement** (Belgrade, 1961)."] },
  ],
};

function applyScenes(seances) {
  seances.forEach((s) => {
    if (SCENES[s.num]) s.scene = { ...SCENES[s.num], widthCm: 15, source: IJ };
    (PHOTOS[s.num] || []).forEach((ph) => {
      const idx = s.lecon.findIndex((b) => b && b.t === "h" && b.x === ph.avant);
      if (idx < 0) throw new Error(`S${s.num} : sous-titre introuvable « ${ph.avant} »`);
      const { avant, ...blk } = ph;
      s.lecon.splice(idx, 0, { t: "photo", ...blk });
    });
  });
  return seances;
}

module.exports = { applyScenes, SCENES, PHOTOS };
