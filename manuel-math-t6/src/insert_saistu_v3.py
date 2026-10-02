# -*- coding: utf-8 -*-
# Phase 2 V3 — encadrés « Le savais-tu ? » avant les EXERCICES de chaque leçon
import zipfile, re, os

SRC = "manuel-math-t6/livrables/Manuel_Mathematiques_T6_JLearn_V1.docx"

SAISTU = [
"Il y a 3 500 ans, les scribes égyptiens n\u2019utilisaient presque que des fractions de numérateur 1 (1/2, 1/3, 1/4\u2026). Pour écrire 3/4, ils posaient 1/2 + 1/4 ! Le papyrus Rhind, un des plus vieux documents de mathématiques du monde, en est rempli.",
"Le thermomètre est une droite numérique verticale, et la règle de ton cartable en est une horizontale. Sur une valiha, les positions des doigts suivent aussi des fractions précises de la longueur de la corde : la musique est pleine de droites numériques cachées.",
"En musique, les mesures à 2/4 et à 4/8 battent exactement le même rythme : des fractions équivalentes que les musiciens utilisent sans toujours le savoir !",
"Quand on dit « un pain et demi », on utilise un nombre fractionnaire ; la boulangerie dirait 3/2 de pain \u2014 une fraction impropre. Les deux écritures racontent la même quantité.",
"Les charpentiers et les mécaniciens comparent sans cesse des fractions : une clé de 5/8 est plus petite qu\u2019une clé de 3/4. Se tromper de fraction, c\u2019est abîmer le boulon !",
"C\u2019est le savant flamand Simon Stevin qui a popularisé les nombres décimaux en Europe, en 1585, dans un petit livre appelé « La Disme ». Avant lui, tout le monde calculait avec des fractions !",
"L\u2019ariary est l\u2019une des très rares monnaies du monde qui ne soit pas décimale : il se divise en 5 iraimbilanja, et non en 10 ou 100 ! Presque tous les autres pays comptent leur monnaie en centièmes.",
"Aux Jeux olympiques, le classement du 100 mètres se joue souvent aux centièmes de seconde : 9,58 et 9,63 se départagent au deuxième chiffre après la virgule. Sans les décimaux, pas de photo-finish !",
"Le symbole % vient de l\u2019italien « per cento » (pour cent) : les marchands de la Renaissance l\u2019abrégeaient en « p 100 », puis l\u2019écriture s\u2019est déformée peu à peu jusqu\u2019au signe que tu utilises aujourd\u2019hui.",
"6 est un nombre « parfait » : il est égal à la somme de ses diviseurs plus petits que lui (1 + 2 + 3 = 6). Le suivant est 28, puis 496\u2026 Les Grecs anciens les trouvaient magiques, et on en cherche encore de nouveaux aujourd\u2019hui !",
"En Amérique, certaines cigales ne sortent de terre que tous les 13 ou 17 ans \u2014 des nombres premiers ! Ainsi, leurs cycles coïncident très rarement avec ceux de leurs prédateurs : le PPCM est leur bouclier secret.",
"1/3 = 0,333 333\u2026 et les 3 ne s\u2019arrêtent jamais ! Certaines fractions donnent des écritures décimales infinies : la calculatrice les coupe, mais les mathématiciens savent qu\u2019elles continuent pour toujours.",
"Les ingénieurs ne donnent jamais une mesure exacte : ils l\u2019encadrent toujours entre deux valeurs, appelées tolérances. Un axe de moteur est accepté s\u2019il mesure entre 24,99 et 25,01 mm \u2014 un encadrement au centième !",
"Tape 2 + 3 × 4 sur une calculatrice de poche toute simple : elle affiche souvent 20. Une calculatrice scientifique affiche 14. La scientifique connaît les priorités\u2026 l\u2019autre calcule dans l\u2019ordre où l\u2019on tape !",
"Les règles de priorité sont une convention mondiale : un élève de Tokyo, de Paris ou d\u2019Antananarivo calcule 5 + 2 × 3 exactement de la même façon. Sans cet accord, chaque pays aurait ses propres résultats !",
"Avant l\u2019invention des parenthèses au XVIe siècle, les mathématiciens soulignaient d\u2019un trait les calculs à faire en premier. Ce trait, appelé vinculum, survit encore\u2026 dans la barre de fraction !",
"Les plus vieux problèmes de mathématiques du monde sont gravés sur des tablettes d\u2019argile de Babylone, il y a 4 000 ans \u2014 et ce sont déjà des problèmes à étapes, avec plusieurs opérations combinées, comme ceux de cette leçon.",
"La FTM (Foiben-Taosarintanin\u2019i Madagasikara) dessine les cartes officielles de Madagascar, souvent au 1/500 000 : 1 cm sur la carte représente 5 km de routes, de rizières ou de forêt.",
"À Madagascar, la TVA incluse dans beaucoup de prix est de 20 % : quand tu paies 6 000 Ar, environ 1 000 Ar partent à l\u2019État. Les pourcentages sont dans presque tous tes achats !",
"Le débit d\u2019un fleuve est un taux : l\u2019Ikopa, qui traverse Antananarivo, se mesure en mètres cubes d\u2019eau par seconde. Pendant la saison des pluies, ce taux peut être multiplié par dix !",
"Le SRI (système de riziculture intensive) a été inventé à Madagascar en 1983 par le père Henri de Laulanié, près d\u2019Antsirabe : en repiquant des plants très jeunes et espacés, le rendement des rizières peut doubler, voire tripler. Une invention malgache utilisée aujourd\u2019hui dans plus de 50 pays !",
"Kilo veut dire 1 000, méga un million, giga un milliard : quand ton téléphone affiche 2 Go, il annonce deux milliards d\u2019octets. Les multiplications par 10, 100, 1 000 gouvernent toute l\u2019informatique.",
"Quand la météo annonce « 50 mm de pluie », cela veut dire 50 litres d\u2019eau tombés sur chaque mètre carré ! Les divisions par 10, 100 et 1 000 relient les millimètres, les litres et les mètres carrés.",
"Un quart d\u2019heure, c\u2019est 60 × 0,25 = 15 minutes. En anglais, on dit d\u2019ailleurs « a quarter » (un quart) pour parler du quart d\u2019heure\u2026 et de la pièce de 25 cents !",
"Combien de quarts de kapoaka dans 3 kapoaka de riz ? 3 ÷ 0,25 = 12 ! Diviser par 0,25 revient à multiplier par 4 : la marchande le sait d\u2019instinct en remplissant sa mesure.",
"Les marchandes des marchés malgaches calculent de tête toute la journée, sans calculatrice : 3 kapoaka à 650 Ar, elles décomposent 3 × 600 + 3 × 50 en une seconde. De vraies championnes du calcul mental !",
"Double les ingrédients d\u2019une recette de mofo gasy et tu obtiens deux fois plus de galettes : la cuisine est une école de proportionnalité. Mais attention, le temps de cuisson, lui, ne double pas \u2014 il n\u2019est pas proportionnel !",
"Compte les secondes entre l\u2019éclair et le tonnerre, puis multiplie par 340 : tu obtiens la distance de l\u2019orage en mètres. C\u2019est la relation d = 340 × t \u2014 une proportionnalité que les paysans connaissent bien.",
"Le « produit en croix » que tu utiliseras au collège était déjà expliqué dans un manuel chinois il y a 2 000 ans, les « Neuf chapitres sur l\u2019art mathématique ». Les tableaux de proportionnalité ont une très longue histoire !",
"La légende raconte que René Descartes inventa les coordonnées en observant une mouche se promener au plafond de sa chambre : pour décrire sa position, deux nombres suffisaient. Le repère cartésien était né !",
"La règle de trois était si précieuse au Moyen Âge que les marchands l\u2019appelaient la « règle d\u2019or ». Elle figurait déjà dans les manuscrits des savants arabes du IXe siècle.",
"Les mathématiciens appellent « fonction » ta machine à nombres : le mot a été choisi par le savant allemand Leibniz en 1694. Toutes les applications de ton téléphone sont bâties sur des millions de ces machines.",
"Observe les motifs des nattes (tsihy) et des lamba tissés : le même dessin revient à intervalles réguliers. Les tisserandes malgaches prolongent des suites régulières exactement comme toi dans cette leçon !",
"Les plus anciens tableaux de valeurs du monde sont les tables astronomiques de Babylone : position de la Lune, jour après jour, gravée dans l\u2019argile. Organiser des couples de nombres est un geste vieux de 4 000 ans.",
"À l\u2019hôpital, la courbe de température d\u2019un malade est un graphique de relation : chaque point est un couple (heure ; température). D\u2019un coup d\u2019\u0153il, le médecin voit si la fièvre monte ou descend.",
"Le mot « algèbre » vient de l\u2019arabe al-jabr, titre du livre du savant al-Khwârizmî (IXe siècle). Et c\u2019est Descartes qui a choisi la lettre x pour l\u2019inconnue \u2014 peut-être parce que l\u2019imprimeur avait beaucoup de x inutilisés !",
"Le signe = a été inventé en 1557 par le Gallois Robert Recorde. Il choisit deux petits traits parallèles « parce que rien n\u2019est plus égal que deux droites parallèles ». Avant lui, on écrivait en toutes lettres « est égal à » !",
"Al-jabr, le mot qui a donné « algèbre », signifie « remise en place, rééquilibrage » : exactement ce que tu fais quand tu retires la même masse des deux plateaux de la balance pour isoler l\u2019inconnue.",
"Les ordinateurs résolvent beaucoup de problèmes\u2026 par essais systématiques, comme toi ! La différence : ils testent des millions de valeurs par seconde. La méthode est la même, seule la vitesse change.",
"Les cases traditionnelles malgaches ont un plan rectangulaire soigneusement orienté : les anciens plaçaient les angles selon les points cardinaux. Le quadrilatère est au c\u0153ur de l\u2019architecture malgache.",
"Pour vérifier un angle droit, les maçons utilisent la corde à 13 n\u0153uds formant un triangle de côtés 3, 4 et 5 : une astuce déjà employée par les bâtisseurs de l\u2019Égypte ancienne, toujours utilisée sur les chantiers d\u2019aujourd\u2019hui.",
"Le secret des menuisiers : pour vérifier qu\u2019un cadre de porte est bien rectangulaire, ils mesurent ses deux diagonales. Égales ? Le cadre est droit. Différentes ? Tout est de travers ! Les diagonales ne mentent jamais.",
"Classer les figures selon des critères, c\u2019est la même démarche que le botaniste Linné utilisait pour classer les plantes en familles et en espèces. La classification est un outil de toutes les sciences !",
"« Tout carré est un rectangle » surprend tout le monde la première fois. C\u2019est pourtant logique : le carré vérifie toutes les exigences du rectangle, plus une. Le champion d\u2019une catégorie appartient toujours à la catégorie !",
"Sur une sphère, la règle des 180° s\u2019effondre ! Trace un triangle du pôle Nord à l\u2019équateur : il peut avoir trois angles droits, soit 270°. La règle des 180° ne vaut que sur une surface bien plate.",
"Pourquoi 360 degrés dans un tour complet ? Héritage des Babyloniens, qui comptaient en base 60 : 360 est proche de la durée de l\u2019année et se divise par 2, 3, 4, 5, 6, 8, 9, 10, 12\u2026 Un nombre très pratique à partager !",
"Pendant plus de 2 000 ans, les mathématiciens ont relevé le défi des Grecs : tout construire avec seulement la règle et le compas. Trois problèmes célèbres, comme la trisection de l\u2019angle, ont résisté\u2026 et on a prouvé qu\u2019ils étaient impossibles !",
"Le triangle est la seule figure indéformable : impossible de le tordre sans casser un côté. Voilà pourquoi charpentes, ponts métalliques et pylônes électriques sont remplis de triangles !",
"Les abeilles construisent leurs alvéoles en hexagones réguliers : c\u2019est la forme qui stocke le plus de miel avec le moins de cire. Les mathématiciens ont mis des siècles à prouver ce que les abeilles savaient déjà !",
"Le tangram est un casse-tête chinois très ancien : sept pièces découpées dans un carré permettent de former des milliers de silhouettes \u2014 toutes de la même aire ! Composer et décomposer des figures peut occuper toute une vie.",
"Madagascar est célèbre pour ses cristaux de quartz : ce sont des prismes hexagonaux naturels, taillés par la géologie il y a des millions d\u2019années. La géométrie pousse aussi sous terre !",
"Chaque boîte en carton que tu croises a d\u2019abord été un patron dessiné à plat, découpé puis plié par une machine. Des ingénieurs passent leur carrière à inventer des patrons plus solides et plus économes !",
"La Terre entière est quadrillée par des coordonnées : Antananarivo se trouve vers 18,9° de latitude Sud et 47,5° de longitude Est. Ton téléphone utilise ce repère géant pour te localiser par GPS.",
"Le jeu de bataille navale fonctionne exactement comme le plan cartésien : « B5, touché ! » est un couple de coordonnées. Chaque coup est une lecture d\u2019abscisse et d\u2019ordonnée.",
"Les magnifiques mosaïques du palais de l\u2019Alhambra, en Espagne, combinent translations, réflexions et rotations depuis le XIVe siècle. Les motifs des nattes malgaches utilisent les mêmes transformations !",
"Le mètre a été défini en 1795 comme la dix-millionième partie du quart du méridien terrestre. Aujourd\u2019hui, il est défini par la vitesse de la lumière \u2014 beaucoup plus précis, mais c\u2019est toujours le même mètre !",
"Trois pays seulement n\u2019utilisent pas officiellement le système métrique : les États-Unis, le Liberia et le Myanmar. Partout ailleurs, du Japon à Madagascar, on convertit en multipliant par 10 !",
"Un vieux problème grec : à périmètre égal, quelle figure enferme la plus grande surface ? Réponse : le cercle ! La légende de la reine Didon raconte qu\u2019elle fonda Carthage en délimitant le plus grand terrain possible avec une lanière de cuir.",
"Regarde la valve d\u2019une roue de bicyclette qui tourne : elle reste toujours à la même distance du moyeu. Chaque point d\u2019une roue dessine un cercle dont le rayon est sa distance au centre \u2014 par définition !",
"Le nombre π a sa fête : le 14 mars (3-14 à l\u2019américaine) ! Les ordinateurs en ont calculé des milliers de milliards de décimales, qui ne se répètent jamais : 3,14159265\u2026 et l\u2019aventure continue.",
"Les surfaces agricoles se mesurent en ares et en hectares : 1 are = 100 m² (un carré de 10 m sur 10) et 1 hectare = 10 000 m². Une rizière familiale malgache fait souvent quelques ares.",
"Le pantographe, un parallélogramme articulé en bois, servait autrefois à agrandir ou réduire les dessins et les cartes : en déformant le parallélogramme sans changer ses côtés, la pointe reproduit la figure à une autre échelle.",
"Les voiles des lakana (pirogues à balancier) et des boutres sont souvent triangulaires : légères, faciles à orienter, solides dans le vent. Les marins malgaches naviguent sur des triangles depuis des siècles !",
"La formule « le triangle vaut la moitié du parallélogramme » figurait déjà dans les Éléments d\u2019Euclide, écrits vers 300 avant J.-C. \u2014 le livre de mathématiques le plus réédité de toute l\u2019histoire.",
"Le système métrique est merveilleusement cohérent : 1 cm³ d\u2019eau pèse exactement 1 gramme, et 1 litre d\u2019eau pèse 1 kilogramme. Volume et masse se répondent !",
"Les conteneurs des navires sont des pavés droits aux dimensions mondiales standardisées. Cette simple boîte rectangulaire, inventée en 1956, a révolutionné le commerce mondial \u2014 y compris au port de Toamasina !",
"1 L = 1 dm³ exactement : un cube de 10 cm d\u2019arête contient pile un litre. Vérifie avec une brique de lait : elle n\u2019est pas cubique, mais son volume fait bien 1 000 cm³ !",
"En 1999, la sonde spatiale Mars Climate Orbiter s\u2019est écrasée sur Mars : une équipe calculait en unités anglaises, l\u2019autre en unités métriques, et personne n\u2019a converti ! Une erreur d\u2019unités à 125 millions de dollars.",
"Hypothèse, test, conclusion : c\u2019est la démarche de Pasteur, de Marie Curie et de tous les chercheurs du monde. En formulant tes hypothèses en classe, tu t\u2019entraînes au métier de scientifique !",
"Avant une élection, les instituts de sondage interrogent environ un millier de personnes\u2026 pour prédire le vote de millions d\u2019électeurs ! Bien choisir son échantillon est tout un art mathématique.",
"Compter la population est l\u2019une des plus vieilles activités mathématiques des États : Babylone et l\u2019Égypte recensaient déjà. Le dernier recensement général de Madagascar, en 2018, a mobilisé des milliers d\u2019agents dans toute l\u2019île.",
"Le mot « statistique » vient du latin status, l\u2019État : à l\u2019origine, c\u2019était la science des chiffres du royaume \u2014 habitants, récoltes, impôts. Tes tableaux d\u2019effectifs ont des ancêtres royaux !",
"Les pictogrammes des journaux et des panneaux descendent de l\u2019Isotype, un langage visuel inventé à Vienne vers 1925 pour que chacun, même sans savoir lire, comprenne les chiffres d\u2019un coup d\u2019\u0153il.",
"Pendant la saison des cyclones, les météorologues malgaches suivent la pression et le vent heure par heure : leurs écrans affichent des lignes brisées. Lire ces graphiques peut sauver des vies !",
"Le diagramme à tige et à feuilles est tout jeune : il a été inventé en 1977 par le statisticien américain John Tukey. C\u2019est probablement l\u2019outil le plus récent de tout ton manuel de mathématiques !",
"La moyenne peut tromper : si une personne très riche monte dans un taxi-be, la richesse moyenne des passagers explose\u2026 mais la médiane bouge à peine ! Les statisticiens choisissent leur « résumé » avec soin.",
"Le calcul des probabilités est né en 1654 d\u2019un échange de lettres entre Pascal et Fermat\u2026 à propos de jeux de dés ! Un chevalier joueur leur avait demandé comment partager équitablement les mises d\u2019une partie interrompue.",
"Deux lancers de pièce : 4 chemins dans l\u2019arbre. Dix lancers : 1 024 chemins ! L\u2019arbre devient vite une forêt \u2014 c\u2019est pourquoi les mathématiciens ont inventé des formules pour compter les branches sans les dessiner.",
"« 70 % de risque de pluie » : la météo te parle en probabilités tous les jours. 0 %, impossible ; 100 %, certain ; entre les deux, toute la palette du hasard \u2014 exactement l\u2019échelle de ta leçon !",
]
assert len(SAISTU) == 79, len(SAISTU)

zin = zipfile.ZipFile(SRC)
doc = zin.read("word/document.xml").decode("utf-8")
paras = [(m.start(), m.end(), m.group(0)) for m in re.finditer(r"<w:p\b.*?</w:p>", doc, re.S)]
def ptext(x): return re.sub(r"<[^>]+>", "", x).strip()

ex_pos = [(s, e) for s, e, p in paras if ptext(p) == "EXERCICES"]
print("paragraphes EXERCICES:", len(ex_pos))
assert len(ex_pos) == 79, len(ex_pos)

RPR_B = '<w:rPr><w:rFonts w:ascii="Times New Roman" w:hAnsi="Times New Roman"/><w:b/><w:color w:val="1565C0"/><w:sz w:val="24"/><w:szCs w:val="24"/></w:rPr>'
RPR_T = '<w:rPr><w:rFonts w:ascii="Times New Roman" w:hAnsi="Times New Roman"/><w:sz w:val="24"/><w:szCs w:val="24"/></w:rPr>'
PPR = ('<w:pPr><w:pBdr>'
       '<w:top w:val="single" w:sz="6" w:space="4" w:color="1565C0"/>'
       '<w:left w:val="single" w:sz="6" w:space="4" w:color="1565C0"/>'
       '<w:bottom w:val="single" w:sz="6" w:space="4" w:color="1565C0"/>'
       '<w:right w:val="single" w:sz="6" w:space="4" w:color="1565C0"/>'
       '</w:pBdr><w:shd w:val="clear" w:color="auto" w:fill="E3F2FD"/>'
       '<w:spacing w:before="160" w:after="160" w:line="300" w:lineRule="auto"/>'
       '<w:jc w:val="both"/></w:pPr>')

def esc(t):
    return t.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")

def bloc(t):
    return (f'<w:p>{PPR}'
            f'<w:r>{RPR_B}<w:t xml:space="preserve">Le savais-tu ? </w:t></w:r>'
            f'<w:r>{RPR_T}<w:t xml:space="preserve">{esc(t)}</w:t></w:r></w:p>')

for idx in range(78, -1, -1):
    s, e = ex_pos[idx]
    doc = doc[:s] + bloc(SAISTU[idx]) + doc[s:]
print("insérés: 79")

tmp = SRC + ".tmp"
zout = zipfile.ZipFile(tmp, "w", zipfile.ZIP_DEFLATED)
for item in zin.infolist():
    data = doc.encode("utf-8") if item.filename == "word/document.xml" else zin.read(item.filename)
    zout.writestr(item, data)
zin.close(); zout.close()
os.replace(tmp, SRC)
print("OK:", SRC, os.path.getsize(SRC))
