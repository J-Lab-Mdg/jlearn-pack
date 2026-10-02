# -*- coding: utf-8 -*-
# Phase 2 V3 — insertion des définitions rigoureuses + « Autrement dit » dans les 79 leçons
# Ancre : paragraphe titre-leçon (texte MAJUSCULES, occurrence unique hors titre de séance)
import zipfile, re, os

SRC = "manuel-math-t6/livrables/Manuel_Mathematiques_T6_JLearn_V1.docx"

# (def rigoureuse, explication simple) — ordre = ordre des 79 séances d'apprentissage
DEFS = [
("Une fraction est un nombre qui représente une ou plusieurs parts égales d\u2019un tout. Elle s\u2019écrit avec un numérateur et un dénominateur : le dénominateur indique en combien de parts égales le tout est partagé, le numérateur indique combien de parts on prend.",
 "le « dénominateur » donne le nom des parts (des huitièmes, des quarts\u2026) et le « numérateur » les compte. 3/8, c\u2019est : le tout est coupé en 8 parts égales, et j\u2019en prends 3."),
("Une droite numérique est une droite graduée sur laquelle chaque point représente un nombre ; pour y placer des fractions, on partage chaque unité en parts égales.",
 "« graduée » veut dire marquée de petits traits régulièrement espacés, comme sur une règle. Entre 0 et 1, huit intervalles égaux donnent des huitièmes."),
("Deux fractions sont équivalentes lorsqu\u2019elles représentent la même quantité. On obtient une fraction équivalente en multipliant ou en divisant le numérateur et le dénominateur par un même nombre non nul.",
 "« équivalentes » veut dire de même valeur : 1/2 et 2/4, c\u2019est la même part de gâteau, découpée différemment."),
("Une fraction impropre est une fraction dont le numérateur est supérieur ou égal au dénominateur. Un nombre fractionnaire est la somme d\u2019un nombre entier et d\u2019une fraction inférieure à 1.",
 "« impropre » signifie que la fraction dépasse un tout entier : 7/4, c\u2019est un tout plus 3/4."),
("Comparer deux fractions, c\u2019est déterminer laquelle représente la plus grande quantité ; on les réduit au même dénominateur, puis on compare leurs numérateurs.",
 "« réduire au même dénominateur » veut dire réécrire les fractions avec des parts de même taille : on ne compare bien que ce qui est découpé pareil."),
("Une fraction décimale est une fraction dont le dénominateur est 10, 100 ou 1 000. Tout nombre décimal est une autre écriture d\u2019une fraction décimale.",
 "3/10 = 0,3 : la virgule n\u2019est qu\u2019une façon plus courte d\u2019écrire des dixièmes, des centièmes ou des millièmes."),
("Un nombre décimal est formé d\u2019une partie entière et d\u2019une partie décimale séparées par une virgule ; les chiffres après la virgule indiquent les dixièmes, les centièmes puis les millièmes.",
 "chaque rang après la virgule vaut dix fois moins que le précédent, comme des pièces de monnaie de plus en plus petites."),
("Pour comparer deux nombres décimaux, on compare d\u2019abord leurs parties entières ; si elles sont égales, on compare les chiffres de la partie décimale rang par rang.",
 "« rang par rang » : d\u2019abord les dixièmes, puis les centièmes \u2014 comme on compare des mots lettre par lettre dans le dictionnaire."),
("Un pourcentage est une fraction de dénominateur 100 : p % signifie « p pour cent », c\u2019est-à-dire p/100.",
 "« pour cent » veut dire « sur 100 » : 25 %, c\u2019est 25 parts sur 100, donc un quart."),
("Un diviseur d\u2019un nombre naturel est un nombre qui le divise exactement, sans reste ; on dit aussi que ce diviseur est un facteur de ce nombre.",
 "un diviseur « rentre pile » : 6 est un diviseur de 24 parce que 24 ÷ 6 = 4, sans reste."),
("Un multiple d\u2019un nombre est le produit de ce nombre par un entier naturel. Le PPCM de deux nombres est leur plus petit commun multiple non nul ; le PGCD est leur plus grand commun diviseur.",
 "les multiples de 8, c\u2019est sa table : 8, 16, 24\u2026 Le PPCM est le premier rendez-vous des deux tables ; le PGCD est le plus grand nombre qui « rentre pile » dans les deux."),
("Écrire une fraction sous forme décimale, c\u2019est effectuer la division du numérateur par le dénominateur, ou transformer la fraction en une fraction décimale équivalente.",
 "7/20 = 35/100 = 0,35 : on fabrique un dénominateur 100, ou on pose simplement la division 7 ÷ 20."),
("Encadrer une fraction, c\u2019est trouver deux nombres, l\u2019un plus petit et l\u2019autre plus grand qu\u2019elle. La valeur approchée par défaut est au-dessous de la valeur exacte ; la valeur approchée par excès est au-dessus.",
 "« par défaut », on arrondit au-dessous (il en manque un peu) ; « par excès », on arrondit au-dessus (il y en a un peu trop)."),
("Dans une suite d\u2019opérations, les multiplications et les divisions sont prioritaires : elles s\u2019effectuent avant les additions et les soustractions.",
 "« prioritaire » veut dire qui passe en premier, comme une ambulance dans la circulation : 2 + 3 × 4 = 14, et non 20 !"),
("Pour calculer une expression sans parenthèses, on effectue d\u2019abord toutes les multiplications et les divisions de gauche à droite, puis les additions et les soustractions de gauche à droite.",
 "une « expression » est une suite de nombres reliés par des opérations ; on la calcule en deux passages, jamais dans l\u2019ordre de lecture simple."),
("Les parenthèses indiquent les calculs à effectuer en premier : on calcule toujours l\u2019intérieur des parenthèses avant le reste de l\u2019expression.",
 "les parenthèses sont des « bulles prioritaires » : tout ce qui est enfermé dedans se calcule d\u2019abord."),
("Résoudre un problème par une expression numérique, c\u2019est traduire la situation en un seul calcul qui respecte les priorités des opérations.",
 "« traduire », c\u2019est passer des phrases aux nombres \u2014 puis laisser les règles de priorité faire le travail."),
("L\u2019échelle d\u2019un plan est le quotient de la longueur mesurée sur le plan par la longueur réelle correspondante, les deux étant exprimées dans la même unité.",
 "le « quotient » est le résultat d\u2019une division. Une échelle de 1/100 veut dire : 1 cm sur le plan représente 100 cm, c\u2019est-à-dire 1 m, dans la réalité."),
("Calculer p % d\u2019une quantité Q, c\u2019est multiplier Q par p puis diviser par 100 : p % de Q = Q × p ÷ 100.",
 "pour 15 % de 400 : 400 × 15 = 6 000, puis 6 000 ÷ 100 = 60."),
("Un taux est un quotient qui compare deux quantités de natures différentes, par exemple une distance et une durée.",
 "180 km parcourus en 3 h donnent un taux de 60 km par heure : le taux dit « combien de l\u2019un pour une unité de l\u2019autre »."),
("Le rendement est le rapport entre le résultat obtenu et le résultat attendu (ou la quantité engagée) ; il s\u2019exprime souvent en pourcentage.",
 "un « rapport » est une division de comparaison : 40 kg de riz récoltés pour 50 kg espérés, c\u2019est un rendement de 80 %."),
("Multiplier un nombre par 10, 100 ou 1 000 revient à décaler chacun de ses chiffres d\u2019un, de deux ou de trois rangs vers la gauche dans le tableau de numération.",
 "ce ne sont pas des « zéros ajoutés » : ce sont les chiffres qui montent de rang \u2014 et la virgule semble glisser vers la droite."),
("Diviser un nombre par 10, 100 ou 1 000 revient à décaler chacun de ses chiffres d\u2019un, de deux ou de trois rangs vers la droite : le nombre devient 10, 100 ou 1 000 fois plus petit.",
 "la virgule semble glisser vers la gauche : 825 ÷ 100 = 8,25."),
("Multiplier un nombre par 0,25, c\u2019est en prendre le quart (diviser par 4) ; multiplier par 0,75, c\u2019est en prendre les trois quarts.",
 "0,25 = 1/4 et 0,75 = 3/4. Multiplier par un nombre plus petit que 1 rapetisse le résultat !"),
("Diviser par 0,50, c\u2019est multiplier par 2 ; diviser par 0,25, c\u2019est multiplier par 4 ; diviser par 0,75, c\u2019est multiplier par 4 puis diviser par 3.",
 "diviser par une moitié, c\u2019est se demander « combien de moitiés ? » : il y en a deux par unité, donc le résultat double."),
("Le calcul mental efficace s\u2019appuie sur trois stratégies : l\u2019estimation (prévoir un ordre de grandeur), la décomposition (découper les nombres) et la compensation (arrondir puis corriger).",
 "un « ordre de grandeur » est un résultat approximatif qui sert de garde-fou : 19 × 21 est proche de 20 × 20 = 400."),
("Deux quantités sont proportionnelles lorsque l\u2019on passe de l\u2019une à l\u2019autre en multipliant toujours par le même nombre, appelé coefficient de proportionnalité.",
 "le « coefficient » est un multiplicateur fidèle : deux fois plus de riz, deux fois plus cher \u2014 le prix du kilo, lui, ne change jamais."),
("La relation y = ax exprime que y est proportionnel à x : le nombre a est le coefficient de proportionnalité, le même pour tous les couples (x ; y).",
 "la lettre a cache le nombre fixe, x la quantité choisie, y le résultat : y = 650x donne le prix de x kapoaka de riz à 650 Ar."),
("Dans un tableau de proportionnalité, les nombres de la seconde ligne s\u2019obtiennent en multipliant ceux de la première ligne par le coefficient de proportionnalité.",
 "pour vérifier un tableau, divise chaque nombre du bas par celui du haut : la réponse doit toujours être la même."),
("La représentation graphique d\u2019une situation de proportionnalité est une ligne droite qui passe par l\u2019origine du repère.",
 "l\u2019« origine » est le point (0 ; 0), le coin de départ : zéro kapoaka coûte zéro ariary, c\u2019est pourquoi la droite part de là."),
("Pour résoudre un problème de proportionnalité, on utilise le passage à l\u2019unité (la règle de trois) ou le coefficient de proportionnalité.",
 "le « passage à l\u2019unité » : je cherche d\u2019abord le prix de UN, puis je multiplie \u2014 c\u2019est la fameuse règle de trois."),
("Une relation entre deux quantités est une règle qui associe à chaque valeur de la première quantité une valeur de la seconde.",
 "c\u2019est une « machine à nombres » : tu donnes un nombre à l\u2019entrée, la règle fabrique le nombre de sortie."),
("Représenter une relation, c\u2019est traduire la même règle sous différentes formes : objets manipulés, dessin, tableau de valeurs ou graphique.",
 "un motif qui grandit avec des capsules ou des cailloux raconte la même histoire que le tableau de nombres : seule la langue change."),
("Un tableau de valeurs organise les couples de nombres d\u2019une relation : la première ligne donne les valeurs choisies, la seconde les valeurs calculées correspondantes.",
 "un « couple » est formé de deux nombres qui vont ensemble, comme (3 ; 12) : pour 3 à l\u2019entrée, la machine donne 12 à la sortie."),
("Représenter une relation dans un graphique, c\u2019est placer chaque couple du tableau de valeurs comme un point du repère : l\u2019allure des points décrit la relation.",
 "l\u2019« allure », c\u2019est la forme générale \u2014 points alignés, qui montent, qui descendent \u2014 et elle se lit d\u2019un seul coup d\u2019\u0153il."),
("En algèbre, une lettre représente une quantité inconnue ou variable : elle remplace un nombre que l\u2019on ne connaît pas encore.",
 "« variable » veut dire qui peut changer. La lettre x est une boîte mystère qui contient un nombre à découvrir."),
("Le signe d\u2019égalité exprime que les deux membres d\u2019une égalité représentent exactement la même valeur, comme les deux plateaux d\u2019une balance en équilibre.",
 "un « membre » est ce qui est écrit d\u2019un côté du signe =. L\u2019égalité ne veut pas dire « la réponse arrive », mais « les deux côtés pèsent pareil »."),
("Résoudre une équation, c\u2019est trouver la valeur de l\u2019inconnue qui rend l\u2019égalité vraie. Par déduction, on isole l\u2019inconnue en utilisant les opérations inverses.",
 "« isoler », c\u2019est laisser x tout seul d\u2019un côté : on retire la même chose des deux plateaux de la balance pour qu\u2019elle reste en équilibre."),
("La résolution par essais systématiques consiste à tester des valeurs ordonnées de l\u2019inconnue, à observer le résultat obtenu et à ajuster l\u2019essai suivant.",
 "« systématique » veut dire organisé : on essaie 5, puis 6, puis 7\u2026 dans un tableau, jamais au hasard."),
("Un quadrilatère est un polygone à quatre côtés. Le carré, le rectangle, le losange, le parallélogramme et le trapèze en sont les familles principales.",
 "un « polygone » est une figure fermée aux côtés droits (« poly » = plusieurs, « gone » = angle) ; « quadri » veut dire quatre."),
("Décrire un quadrilatère, c\u2019est préciser les propriétés de ses côtés (longueurs, parallélisme) et de ses angles (mesures, angles droits).",
 "des côtés « parallèles » gardent toujours le même écart entre eux, comme les deux rails d\u2019une voie ferrée."),
("Une diagonale relie deux sommets non consécutifs d\u2019un quadrilatère. Un axe de symétrie est une droite qui partage la figure en deux moitiés superposables par pliage.",
 "« non consécutifs » veut dire pas voisins ; « superposables » veut dire qui se recouvrent exactement, sans rien qui dépasse."),
("Classer les quadrilatères, c\u2019est les regrouper selon leurs propriétés communes : côtés parallèles, côtés égaux, angles droits.",
 "un « critère » de classement est la question posée à chaque figure : « As-tu un angle droit ? Des côtés égaux ? »"),
("Les familles de quadrilatères s\u2019emboîtent les unes dans les autres : tout carré est à la fois un rectangle et un losange, et tout rectangle est un parallélogramme.",
 "elles « s\u2019emboîtent » comme des paniers de tailles différentes : le carré est le plus exigeant, il vérifie toutes les propriétés à la fois."),
("La somme des mesures des trois angles d\u2019un triangle est toujours égale à 180 degrés.",
 "si tu connais deux angles, le troisième se déduit : 180 \u2212 (la somme des deux). Déchire les trois coins d\u2019un triangle en papier et aligne-les : ils forment un angle plat !"),
("La somme des angles d\u2019un quadrilatère est égale à 360 degrés, car une diagonale partage tout quadrilatère en deux triangles de 180 degrés chacun.",
 "2 triangles × 180° = 360° : la diagonale est le raccourci qui explique la règle."),
("Construire un quadrilatère, c\u2019est le tracer avec précision à l\u2019aide des instruments : la règle pour les longueurs, l\u2019équerre pour les angles droits, le compas pour reporter des longueurs, le rapporteur pour les angles.",
 "chaque instrument a son métier ; un « programme de construction » est la recette qui dit dans quel ordre les utiliser."),
("Construire un triangle, c\u2019est le tracer à partir de mesures données : trois côtés ; ou deux côtés et l\u2019angle compris ; ou deux angles et le côté commun.",
 "l\u2019« angle compris » est celui qui se trouve entre les deux côtés donnés, comme la charnière entre les deux branches d\u2019un compas."),
("Un cercle est l\u2019ensemble des points situés à la même distance, appelée rayon, d\u2019un point fixe, appelé centre. Un polygone régulier a tous ses côtés et tous ses angles égaux.",
 "« régulier » veut dire parfaitement équilibré : pentagone (5 côtés), hexagone (6) et octogone (8) se construisent en partageant le cercle en parts égales."),
("Composer et décomposer des figures, c\u2019est les assembler ou les découper pour en former de nouvelles, sans changer l\u2019aire totale.",
 "comme dans un tangram : les pièces changent de place, mais la quantité de surface reste exactement la même."),
("Un prisme droit est un solide qui possède deux bases polygonales parallèles et superposables, reliées par des faces rectangulaires.",
 "un « solide » est un objet en trois dimensions. Les deux bases du prisme sont des jumelles parfaitement alignées l\u2019une au-dessus de l\u2019autre."),
("Le patron d\u2019un solide est une figure plane qui, une fois pliée, reconstitue toutes les faces du solide, sans trou ni recouvrement.",
 "comme un carton d\u2019emballage déplié : le patron est le « vêtement à plat » du solide \u2014 un mot emprunté à la couture."),
("Le premier quadrant du plan cartésien est la région délimitée par l\u2019axe horizontal des abscisses et l\u2019axe vertical des ordonnées, à partir de l\u2019origine.",
 "« cartésien » vient du nom du savant Descartes ; le quadrant est le quart du plan où toutes les coordonnées sont positives."),
("Les coordonnées d\u2019un point forment un couple ordonné (abscisse ; ordonnée) : l\u2019abscisse se lit sur l\u2019axe horizontal, l\u2019ordonnée sur l\u2019axe vertical.",
 "« ordonné » veut dire que l\u2019ordre compte : (3 ; 5) et (5 ; 3) sont deux points différents ! D\u2019abord on avance, ensuite on monte."),
("La translation fait glisser une figure, la réflexion la retourne comme un miroir, la rotation la fait tourner autour d\u2019un point. Ces trois transformations conservent les longueurs et les angles.",
 "« conserver » veut dire garder intact : la figure bouge, mais ni sa taille ni sa forme ne changent \u2014 seulement sa position, et parfois son orientation."),
("Choisir l\u2019unité de longueur appropriée, c\u2019est prendre, dans le système métrique (millimètre, centimètre, mètre, kilomètre), l\u2019unité la mieux adaptée à la taille de l\u2019objet mesuré.",
 "on ne mesure pas une fourmi en kilomètres, ni la route d\u2019Antananarivo à Toamasina en millimètres : l\u2019unité doit être à la bonne taille."),
("Convertir une longueur, c\u2019est l\u2019exprimer dans une autre unité. Dans le système métrique, chaque unité vaut dix fois l\u2019unité immédiatement inférieure.",
 "le tableau de conversion est un escalier : chaque marche multiplie ou divise par 10."),
("Le périmètre d\u2019une figure est la longueur totale de son contour. Connaissant le périmètre d\u2019un rectangle, on peut retrouver une dimension manquante.",
 "le « contour » est le tour complet. P = 2 × (L + l), donc L + l = P ÷ 2 : la dimension manquante se déduit par une soustraction."),
("Le diamètre d\u2019un cercle est le segment qui passe par le centre et relie deux points du cercle ; il vaut le double du rayon : d = 2 × r.",
 "le rayon va du centre au bord ; le diamètre traverse de bord à bord en passant par le centre : deux rayons mis bout à bout."),
("La circonférence d\u2019un cercle est la longueur de son contour : C = π × d = 2 × π × r, où le nombre π vaut environ 3,14.",
 "π (lis « pi ») est le nombre magique du cercle : tout tour de cercle mesure environ 3,14 fois son diamètre, quel que soit le cercle !"),
("L\u2019aire d\u2019un rectangle est le produit de sa longueur par sa largeur : A = L × l. Elle se mesure en unités carrées, comme le centimètre carré.",
 "une « unité carrée » est un petit carreau de 1 sur 1 : l\u2019aire compte combien de carreaux pavent exactement la surface."),
("L\u2019aire d\u2019un parallélogramme est le produit de sa base par sa hauteur : A = b × h. La hauteur est perpendiculaire à la base.",
 "« perpendiculaire » veut dire qui tombe tout droit, en angle droit. Attention : la hauteur n\u2019est pas le côté penché !"),
("L\u2019aire d\u2019un triangle est la moitié du produit de sa base par sa hauteur : A = b × h ÷ 2.",
 "un triangle est un demi-parallélogramme : deux triangles identiques collés l\u2019un à l\u2019autre reforment le parallélogramme complet."),
("Comparer les aires de figures liées, c\u2019est utiliser les relations entre elles : un triangle a la moitié de l\u2019aire du parallélogramme de même base et de même hauteur.",
 "des figures « liées » sont fabriquées l\u2019une à partir de l\u2019autre : leurs aires se comparent sans tout recalculer."),
("Le volume d\u2019un prisme droit est la quantité d\u2019espace qu\u2019il occupe ; il se mesure en unités cubes, comme le centimètre cube (cm³).",
 "une « unité cube » est un petit dé de 1 cm d\u2019arête : le volume compte combien de dés remplissent exactement le solide."),
("Le volume d\u2019un pavé droit est le produit de ses trois dimensions : V = longueur × largeur × hauteur.",
 "on compte les cubes d\u2019une couche (L × l), puis on empile h couches : voilà d\u2019où vient la formule."),
("La capacité est le volume de liquide qu\u2019un récipient peut contenir : 1 mL = 1 cm³ et 1 L = 1 000 cm³.",
 "capacité et volume mesurent la même chose avec des unités différentes : le lait se compte en litres, la boîte en centimètres cubes."),
("Dans un problème de mesure, toutes les données doivent être exprimées dans la même unité avant d\u2019effectuer le moindre calcul.",
 "mélanger des mètres et des centimètres dans un calcul, c\u2019est comme additionner des ariary et des euros : il faut d\u2019abord tout convertir."),
("Une hypothèse est une réponse provisoire proposée à une question d\u2019expérience ; les données recueillies permettront de la confirmer ou de la rejeter.",
 "« provisoire » veut dire en attendant la preuve : l\u2019hypothèse est un pari intelligent que l\u2019enquête va vérifier."),
("Un sondage est une enquête qui recueille des données auprès d\u2019une partie d\u2019un groupe. Ses questions doivent être claires, neutres et porter sur des données quantitatives.",
 "« quantitatives » veut dire qui se comptent (l\u2019âge, le nombre de frères et s\u0153urs) ; une question « neutre » n\u2019influence pas la réponse."),
("Une stratégie de collecte de données précise comment recueillir l\u2019information : observation, comptage, questionnaire ou mesure, avec un support d\u2019enregistrement adapté.",
 "le « support d\u2019enregistrement » est l\u2019outil où l\u2019on note au fur et à mesure : feuille de comptage, tableau à cocher."),
("Un tableau d\u2019effectifs organise les données collectées : chaque ligne porte une valeur et son effectif, c\u2019est-à-dire le nombre de fois où cette valeur apparaît.",
 "l\u2019« effectif » est le compte des apparitions : les petits bâtons de comptage deviennent des nombres bien rangés."),
("Un pictogramme représente les effectifs par des symboles de valeur fixe ; un diagramme à bandes les représente par des barres dont la hauteur est proportionnelle à l\u2019effectif.",
 "« proportionnelle » : une barre deux fois plus haute signale un effectif deux fois plus grand ; la légende dit combien vaut chaque symbole."),
("Un diagramme à ligne brisée relie par des segments des points qui représentent l\u2019évolution d\u2019une quantité au cours du temps.",
 "« brisée » veut dire cassée en segments : la ligne monte, descend ou reste plate, et raconte l\u2019histoire de la quantité jour après jour."),
("Un diagramme à tige et à feuilles classe des nombres en séparant le chiffre des dizaines (la tige) du chiffre des unités (les feuilles), rangées en ordre croissant.",
 "47 se range tige 4, feuille 7. D\u2019un coup d\u2019\u0153il, on voit où les valeurs se regroupent \u2014 sans perdre un seul nombre."),
("La moyenne est la somme des valeurs divisée par leur nombre ; la médiane est la valeur centrale d\u2019une série ordonnée ; le mode est la valeur la plus fréquente.",
 "trois « résumés » d\u2019une même série : le partage équitable (moyenne), le milieu (médiane) et le champion des apparitions (mode)."),
("La probabilité théorique d\u2019un événement est le rapport du nombre de résultats favorables au nombre de résultats possibles ; la probabilité expérimentale est la fréquence observée au cours d\u2019essais réels.",
 "« favorable » veut dire qui nous arrange. La théorie calcule avant de jouer ; l\u2019expérience compte après avoir joué \u2014 et plus on joue, plus les deux se rapprochent."),
("Un diagramme en arbre énumère tous les résultats possibles d\u2019une expérience en plusieurs étapes ; un tableau de probabilités les organise en lignes et en colonnes.",
 "« énumérer », c\u2019est lister sans rien oublier : chaque branche de l\u2019arbre est un chemin possible, et on les compte tous."),
("Une probabilité s\u2019exprime par une fraction, un nombre décimal ou un pourcentage, et sa valeur est toujours comprise entre 0 (événement impossible) et 1 (événement certain).",
 "1/2 = 0,5 = 50 % : trois écritures du même hasard. Plus la valeur s\u2019approche de 1, plus l\u2019événement est probable."),
]

assert len(DEFS) == 79, len(DEFS)

zin = zipfile.ZipFile(SRC)
doc = zin.read("word/document.xml").decode("utf-8")

# retrouver les 79 titres-leçon (ordre du document)
paras = [(m.start(), m.end(), m.group(0)) for m in re.finditer(r"<w:p\b.*?</w:p>", doc, re.S)]
def ptext(x): return re.sub(r"<[^>]+>", "", x).strip()

seance_rx = re.compile(r"SÉANCE \d+ / \d+ — ")
titres = []  # titres d'apprentissage dans l'ordre
for s, e, p in paras:
    t = ptext(p)
    m = seance_rx.match(t)
    if m and len(t) < 150:
        base = t[m.end():]
        if "RÉVISION" not in base and "EXAMEN" not in base and "SUJET" not in base:
            titres.append(base)
assert len(titres) == 79, len(titres)

RPR_G = '<w:rPr><w:rFonts w:ascii="Times New Roman" w:hAnsi="Times New Roman"/><w:b/><w:color w:val="2E7D32"/><w:sz w:val="24"/><w:szCs w:val="24"/></w:rPr>'
RPR_DEF = '<w:rPr><w:rFonts w:ascii="Times New Roman" w:hAnsi="Times New Roman"/><w:b/><w:sz w:val="24"/><w:szCs w:val="24"/></w:rPr>'
RPR_O = '<w:rPr><w:rFonts w:ascii="Times New Roman" w:hAnsi="Times New Roman"/><w:b/><w:color w:val="B25000"/><w:sz w:val="24"/><w:szCs w:val="24"/></w:rPr>'
RPR_S = '<w:rPr><w:rFonts w:ascii="Times New Roman" w:hAnsi="Times New Roman"/><w:sz w:val="24"/><w:szCs w:val="24"/></w:rPr>'
PPR = '<w:pPr><w:spacing w:before="80" w:after="120" w:line="300" w:lineRule="auto"/><w:jc w:val="both"/></w:pPr>'

def esc(t):
    return t.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")

def bloc(d, s):
    p1 = (f'<w:p>{PPR}'
          f'<w:r>{RPR_G}<w:t xml:space="preserve">Définition \u2014 </w:t></w:r>'
          f'<w:r>{RPR_DEF}<w:t xml:space="preserve">{esc(d)}</w:t></w:r></w:p>')
    p2 = (f'<w:p>{PPR}'
          f'<w:r>{RPR_O}<w:t xml:space="preserve">Autrement dit : </w:t></w:r>'
          f'<w:r>{RPR_S}<w:t xml:space="preserve">{esc(s)}</w:t></w:r></w:p>')
    return p1 + p2

# insertion de droite à gauche : pour chaque titre (ordre inverse), trouver le
# paragraphe-leçon (texte == titre, sans préfixe SÉANCE) et insérer après lui
inserted = 0
for idx in range(78, -1, -1):
    titre = titres[idx]
    target = None
    for s, e, p in paras:
        t = ptext(p)
        if t == titre:
            target = (s, e)
            break
    if target is None:
        print("INTROUVABLE:", titre); continue
    s, e = target
    doc = doc[:e] + bloc(*DEFS[idx]) + doc[e:]
    inserted += 1
    # recalculer paras seulement pour les positions avant idx (insertion après e
    # ne décale pas les positions < e) -> inutile car on va de droite à gauche
print("insérées:", inserted)

OUT = SRC  # on écrase le livrable
import shutil, tempfile
tmp = SRC + ".tmp"
zout = zipfile.ZipFile(tmp, "w", zipfile.ZIP_DEFLATED)
for item in zin.infolist():
    data = doc.encode("utf-8") if item.filename == "word/document.xml" else zin.read(item.filename)
    zout.writestr(item, data)
zin.close(); zout.close()
os.replace(tmp, OUT)
print("OK:", OUT, os.path.getsize(OUT))
