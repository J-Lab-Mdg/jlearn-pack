# -*- coding: utf-8 -*-
# Mise en conformité skill v18 :
# 1. Méta-table complète 2 zones (Discipline/Composante/Thème/Titre/Objectif spécifique/
#    Documentation/Support et matériel | Date/Classe/Séance n°) — bordures invisibles
# 2. I. Révision : question spécifique + R.A. rédigée (79 couples)
import zipfile, re, os

SRC = "manuel-math-t6/livrables/Manuel_Mathematiques_T6_JLearn_V1.docx"

# ---------- Q/R.A. de révision par séance (ordre global 1..79) ----------
QRA = [
("Si on coupe une orange en deux parts égales, comment s\u2019appelle chaque part ?",
 "R.A. : chaque part est une moitié, c\u2019est-à-dire un demi : 1/2."),
("Que représente la fraction 3/8 ?",
 "R.A. : le tout est partagé en 8 parts égales et on en prend 3 ; 3 est le numérateur, 8 le dénominateur."),
("Comment places-tu 3/4 sur une droite numérique ?",
 "R.A. : je partage l\u2019unité de 0 à 1 en 4 intervalles égaux, puis je compte 3 intervalles à partir de 0 : le point est 3/4."),
("Donne une fraction équivalente à 1/2 et explique comment tu l\u2019obtiens.",
 "R.A. : 2/4 (ou 3/6, 5/10\u2026) : on multiplie le numérateur et le dénominateur par un même nombre, ici 2."),
("Transforme 7/4 en nombre fractionnaire.",
 "R.A. : 7 ÷ 4 = 1 reste 3, donc 7/4 = 1 + 3/4, soit un tout et trois quarts."),
("Compare 2/3 et 3/4.",
 "R.A. : au même dénominateur 12 : 2/3 = 8/12 et 3/4 = 9/12, donc 2/3 < 3/4."),
("Écris 7/10 sous forme de nombre décimal.",
 "R.A. : 7/10 = 0,7 : sept dixièmes."),
("Dans 4,375, que représente le chiffre 7 ?",
 "R.A. : 7 centièmes, car il occupe le deuxième rang après la virgule."),
("Compare 2,305 et 2,35.",
 "R.A. : parties entières égales ; dixièmes égaux (3) ; centièmes : 0 < 5, donc 2,305 < 2,35."),
("Écris 25 % sous forme de fraction puis de nombre décimal.",
 "R.A. : 25 % = 25/100 = 1/4 = 0,25."),
("Liste tous les diviseurs de 12.",
 "R.A. : 1, 2, 3, 4, 6 et 12."),
("Quel est le PPCM de 4 et de 6 ?",
 "R.A. : multiples de 4 : 4, 8, 12\u2026 ; multiples de 6 : 6, 12\u2026 Le PPCM est 12."),
("Écris 3/5 sous forme décimale.",
 "R.A. : 3/5 = 6/10 = 0,6."),
# U2 (14-26)
("Encadre 7/3 entre deux entiers consécutifs.",
 "R.A. : 6/3 = 2 et 9/3 = 3, donc 2 < 7/3 < 3."),
("Dans 5 + 3 × 4, quel calcul fais-tu d\u2019abord ? Quel est le résultat ?",
 "R.A. : la multiplication d\u2019abord : 3 × 4 = 12, puis 5 + 12 = 17."),
("Calcule 20 \u2212 8 ÷ 2 + 1.",
 "R.A. : 8 ÷ 2 = 4 ; puis 20 \u2212 4 + 1 = 17."),
("Calcule (20 \u2212 8) ÷ 2.",
 "R.A. : parenthèses d\u2019abord : 20 \u2212 8 = 12, puis 12 ÷ 2 = 6."),
("Traduis en une seule expression : \u00ab 3 cahiers à 500 Ar et 1 stylo à 400 Ar \u00bb.",
 "R.A. : 3 × 500 + 400 = 1 900 Ar."),
("Sur un plan à l\u2019échelle 1/100, que représente 1 cm ?",
 "R.A. : 100 cm dans la réalité, c\u2019est-à-dire 1 m."),
("Calcule 10 % de 350.",
 "R.A. : 350 × 10 ÷ 100 = 35."),
("Un bus parcourt 120 km en 2 heures. Quel est son taux (sa vitesse) ?",
 "R.A. : 120 ÷ 2 = 60 km par heure."),
("45 kg de riz récoltés pour 50 kg attendus : quel est le rendement ?",
 "R.A. : 45/50 = 90/100 : rendement de 90 %."),
("Calcule 3,7 × 100.",
 "R.A. : 370 : chaque chiffre monte de deux rangs, la virgule semble glisser de deux rangs vers la droite."),
("Calcule 46 ÷ 100.",
 "R.A. : 0,46 : chaque chiffre descend de deux rangs."),
("Calcule 80 × 0,25 puis 80 × 0,75.",
 "R.A. : le quart de 80 : 20 ; les trois quarts : 60."),
("Calcule 12 ÷ 0,5.",
 "R.A. : 12 × 2 = 24 : il y a 24 moitiés dans 12."),
# U3 (27-39)
("Calcule mentalement 49 × 3 avec une astuce.",
 "R.A. : 49 × 3 = 50 × 3 \u2212 3 = 150 \u2212 3 = 147 (compensation)."),
("2 kapoaka coûtent 1 300 Ar et 4 kapoaka coûtent 2 600 Ar : y a-t-il proportionnalité ?",
 "R.A. : oui : quantité doublée, prix doublé ; le coefficient est 650 Ar par kapoaka."),
("Dans la relation y = 5x, que vaut y pour x = 7 ?",
 "R.A. : y = 5 × 7 = 35 ; le coefficient de proportionnalité est 5."),
("Tableau de proportionnalité : 3 \u2192 18 ; 5 \u2192 ? ",
 "R.A. : le coefficient est 18 ÷ 3 = 6, donc 5 \u2192 30."),
("À quoi reconnaît-on le graphique d\u2019une situation de proportionnalité ?",
 "R.A. : les points sont alignés sur une droite qui passe par l\u2019origine (0 ; 0)."),
("5 stylos coûtent 2 000 Ar. Combien coûtent 8 stylos ?",
 "R.A. : 1 stylo : 2 000 ÷ 5 = 400 Ar ; 8 stylos : 8 × 400 = 3 200 Ar (passage à l\u2019unité)."),
("Une machine ajoute 7. Quelle est la sortie pour l\u2019entrée 15 ? Quelle entrée donne 20 ?",
 "R.A. : 15 + 7 = 22 ; l\u2019entrée était 20 \u2212 7 = 13."),
("Un motif compte 3 cailloux au rang 1, 6 au rang 2, 9 au rang 3. Combien au rang 4 ?",
 "R.A. : 12 cailloux : 3 de plus à chaque rang (3 × le rang)."),
("Avec la règle y = 2x + 1, complète le couple (4 ; ?).",
 "R.A. : y = 2 × 4 + 1 = 9 : le couple est (4 ; 9)."),
("Comment places-tu le couple (3 ; 5) dans un repère ?",
 "R.A. : 3 sur l\u2019axe horizontal (abscisse), 5 sur l\u2019axe vertical (ordonnée) ; le point est à l\u2019intersection."),
("Traduis avec une lettre : \u00ab un nombre augmenté de 9 donne 15 \u00bb.",
 "R.A. : x + 9 = 15, où x est le nombre inconnu."),
("Que signifie le signe = dans 8 + 4 = 12 ?",
 "R.A. : les deux membres ont exactement la même valeur, comme une balance en équilibre."),
("Résous x + 6 = 14 par l\u2019opération inverse.",
 "R.A. : x = 14 \u2212 6 = 8 ; vérification : 8 + 6 = 14."),
# U4 (40-55)
("Résous 3x = 21 par essais systématiques.",
 "R.A. : essais ordonnés : 5 \u2192 15 ; 6 \u2192 18 ; 7 \u2192 21 : donc x = 7."),
("Cite les cinq familles principales de quadrilatères.",
 "R.A. : le carré, le rectangle, le losange, le parallélogramme et le trapèze."),
("Quelles sont les propriétés des côtés et des angles du rectangle ?",
 "R.A. : côtés opposés parallèles et de même longueur ; quatre angles droits."),
("Que sait-on des diagonales d\u2019un rectangle ?",
 "R.A. : elles ont la même longueur et se coupent en leur milieu."),
("Vrai ou faux : tout carré est un losange. Justifie.",
 "R.A. : vrai : le carré a quatre côtés égaux, c\u2019est la propriété du losange."),
("Quel quadrilatère possède exactement deux côtés parallèles ?",
 "R.A. : le trapèze."),
("Deux angles d\u2019un triangle mesurent 65° et 40°. Combien mesure le troisième ?",
 "R.A. : 180 \u2212 (65 + 40) = 180 \u2212 105 = 75°."),
("Trois angles d\u2019un quadrilatère mesurent 90°, 85° et 95°. Et le quatrième ?",
 "R.A. : 360 \u2212 (90 + 85 + 95) = 360 \u2212 270 = 90°."),
("Quels instruments utilises-tu pour construire un rectangle de 6 cm sur 4 cm ?",
 "R.A. : la règle graduée pour les longueurs et l\u2019équerre pour les angles droits."),
("Peut-on construire un triangle de côtés 3 cm, 4 cm et 8 cm ?",
 "R.A. : non : 3 + 4 = 7 < 8 ; la somme de deux côtés doit dépasser le troisième."),
("Comment construit-on un hexagone régulier ?",
 "R.A. : on trace un cercle puis on reporte le rayon six fois sur le cercle avec le compas."),
("Deux triangles identiques accolés : quelle figure obtient-on ?",
 "R.A. : un parallélogramme (un rectangle si les triangles sont rectangles)."),
("Quelles sont les caractéristiques d\u2019un prisme droit ?",
 "R.A. : deux bases polygonales parallèles et superposables, reliées par des faces rectangulaires."),
("Combien de faces compte le patron d\u2019un pavé droit ?",
 "R.A. : six faces : trois paires de rectangles identiques."),
("Dans un repère, quel est le point (0 ; 0) ?",
 "R.A. : l\u2019origine : le croisement de l\u2019axe des abscisses et de l\u2019axe des ordonnées."),
("Les points (2 ; 6) et (6 ; 2) sont-ils le même point ?",
 "R.A. : non : l\u2019ordre compte \u2014 abscisse d\u2019abord, ordonnée ensuite."),
# U5 (56-68)
("Quelles transformations conservent les longueurs et les angles ?",
 "R.A. : la translation, la réflexion et la rotation : la figure change de position, jamais de forme."),
("Quelle unité choisis-tu pour mesurer la longueur de la salle de classe ?",
 "R.A. : le mètre (le centimètre pour un livre, le kilomètre pour une route)."),
("Convertis 3,5 m en centimètres.",
 "R.A. : 3,5 × 100 = 350 cm."),
("Le périmètre d\u2019un rectangle est 26 cm et sa largeur 5 cm. Quelle est sa longueur ?",
 "R.A. : L + l = 26 ÷ 2 = 13, donc L = 13 \u2212 5 = 8 cm."),
("Le rayon d\u2019un cercle mesure 4,5 cm. Quel est son diamètre ?",
 "R.A. : d = 2 × r = 2 × 4,5 = 9 cm."),
("Calcule la circonférence d\u2019un cercle de diamètre 10 cm (π \u2248 3,14).",
 "R.A. : C = π × d = 3,14 × 10 = 31,4 cm."),
("Calcule l\u2019aire d\u2019un rectangle de 8 cm sur 5 cm.",
 "R.A. : A = 8 × 5 = 40 cm²."),
("Calcule l\u2019aire d\u2019un parallélogramme de base 6 cm et de hauteur 4 cm.",
 "R.A. : A = 6 × 4 = 24 cm² (la hauteur est perpendiculaire à la base)."),
("Calcule l\u2019aire d\u2019un triangle de base 10 cm et de hauteur 6 cm.",
 "R.A. : A = 10 × 6 ÷ 2 = 30 cm²."),
("Un parallélogramme a une aire de 48 cm². Quelle est l\u2019aire du triangle de même base et même hauteur ?",
 "R.A. : la moitié : 48 ÷ 2 = 24 cm²."),
("En quelles unités mesure-t-on un volume ?",
 "R.A. : en unités cubes : cm³, m³ \u2014 et en litres pour les capacités."),
("Calcule le volume d\u2019un pavé droit de 5 cm × 4 cm × 3 cm.",
 "R.A. : V = 5 × 4 × 3 = 60 cm³."),
("Convertis 250 mL en cm³, puis 2 L en cm³.",
 "R.A. : 250 mL = 250 cm³ ; 2 L = 2 000 cm³ (car 1 mL = 1 cm³)."),
# U6 (69-79)
("Avant de calculer avec 2 m et 40 cm, que dois-tu faire ?",
 "R.A. : tout convertir dans la même unité : 200 cm et 40 cm (ou 2 m et 0,4 m)."),
("Qu\u2019est-ce qu\u2019une hypothèse dans une expérience ?",
 "R.A. : une réponse provisoire à la question posée, que les données recueillies confirmeront ou rejetteront."),
("Propose une question de sondage quantitative pour la classe.",
 "R.A. : par exemple : \u00ab Combien de frères et s\u0153urs as-tu ? \u00bb \u2014 la réponse est un nombre que l\u2019on peut compter."),
("Comment notes-tu rapidement les réponses pendant un comptage ?",
 "R.A. : avec une feuille de comptage à bâtons, regroupés par paquets de cinq."),
("Dans un tableau, que signifie l\u2019effectif 7 pour la valeur \u00ab 2 frères et s\u0153urs \u00bb ?",
 "R.A. : 7 élèves ont donné la réponse 2 : la valeur 2 apparaît 7 fois."),
("Dans un pictogramme, un symbole vaut 4 élèves. Que représentent 3 symboles et demi ?",
 "R.A. : 3,5 × 4 = 14 élèves."),
("Sur un diagramme à ligne brisée, que signifie un segment qui descend ?",
 "R.A. : la quantité diminue pendant cette période."),
("Comment ranges-tu le nombre 34 dans un diagramme à tige et à feuilles ?",
 "R.A. : tige 3 (le chiffre des dizaines), feuille 4 (le chiffre des unités)."),
("Notes : 8, 10, 10, 12, 15. Donne la moyenne, la médiane et le mode.",
 "R.A. : moyenne : 55 ÷ 5 = 11 ; médiane : 10 (valeur centrale) ; mode : 10 (valeur la plus fréquente)."),
("Quelle est la probabilité d\u2019obtenir un 6 avec un dé équilibré ?",
 "R.A. : 1/6 : un résultat favorable sur six résultats possibles."),
("Combien de résultats possibles pour deux lancers d\u2019une pièce ?",
 "R.A. : 4 : PP, PF, FP et FF \u2014 l\u2019arbre les montre tous."),
]
assert len(QRA) == 79, len(QRA)

# ---------- Support et matériel par unité ----------
SUPPORTS = {
1: "Tableau, cahier, ardoises, bandes et grilles fractionnées",
2: "Tableau, cahier, ardoises, grilles de 100, plans à l\u2019échelle",
3: "Tableau, cahier, ardoises, balance à plateaux, tableaux de valeurs",
4: "Tableau, cahier, règle, équerre, compas, rapporteur, solides",
5: "Tableau, cahier, règle graduée, mètre, récipients gradués",
6: "Tableau, cahier, ardoises, dés, pièces, feuilles de comptage",
}
UNIT_OF = {}
k = 1
for u, n in [(1, 13), (2, 13), (3, 13), (4, 16), (5, 13), (6, 11)]:
    for _ in range(n):
        UNIT_OF[k] = u; k += 1

DOCU = "Programme d\u2019études T6 (MEN) ; Fascicule de ressources pédagogiques Mathématiques ; manuel J-Learn Math T6"

# ---------- Thèmes depuis PLAN.md ----------
plan = open("manuel-math-t6/PLAN.md", encoding="utf-8").read()
themes = []
for line in plan.splitlines():
    m = re.match(r"\|\s*(\d+)\s*\|([^|]+)\|([^|]+)\|", line)
    if m:
        titre = m.group(2).strip(); contenu = m.group(3).strip()
        if "Révision" in titre or "examen" in titre.lower() or "Sujet d" in titre:
            continue
        themes.append(contenu)
assert len(themes) == 79, len(themes)

# ---------- chargement ----------
zin = zipfile.ZipFile(SRC)
doc = zin.read("word/document.xml").decode("utf-8")

def esc(t):
    return t.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")

RPR_L = '<w:rPr><w:rFonts w:ascii="Times New Roman" w:hAnsi="Times New Roman"/><w:b/><w:sz w:val="24"/><w:szCs w:val="24"/></w:rPr>'
RPR_V = '<w:rPr><w:rFonts w:ascii="Times New Roman" w:hAnsi="Times New Roman"/><w:sz w:val="24"/><w:szCs w:val="24"/></w:rPr>'
PPRM = '<w:pPr><w:spacing w:after="40"/></w:pPr>'
NOB = ('<w:tcBorders><w:top w:val="none" w:sz="0" w:space="0" w:color="auto"/>'
       '<w:left w:val="none" w:sz="0" w:space="0" w:color="auto"/>'
       '<w:bottom w:val="none" w:sz="0" w:space="0" w:color="auto"/>'
       '<w:right w:val="none" w:sz="0" w:space="0" w:color="auto"/></w:tcBorders>')

def meta_p(label, value):
    return (f'<w:p>{PPRM}<w:r>{RPR_L}<w:t xml:space="preserve">{esc(label)} : </w:t></w:r>'
            f'<w:r>{RPR_V}<w:t xml:space="preserve">{esc(value)}</w:t></w:r></w:p>')

def build_meta(composante, theme, titre, objectif, seance, unite):
    left = (meta_p("Discipline", "Mathématiques")
            + meta_p("Composante", composante)
            + meta_p("Thème", theme)
            + meta_p("Titre", titre)
            + meta_p("Objectif spécifique", objectif)
            + meta_p("Documentation", DOCU)
            + meta_p("Support et matériel", SUPPORTS[unite]))
    right = (meta_p("Date", "_______________")
             + meta_p("Classe", "T6")
             + meta_p("Séance n°", seance))
    return ('<w:tbl><w:tblPr><w:tblW w:w="9800" w:type="dxa"/>'
            '<w:tblLayout w:type="fixed"/></w:tblPr>'
            '<w:tblGrid><w:gridCol w:w="6600"/><w:gridCol w:w="3200"/></w:tblGrid>'
            '<w:tr>'
            f'<w:tc><w:tcPr><w:tcW w:w="6600" w:type="dxa"/>{NOB}</w:tcPr>{left}</w:tc>'
            f'<w:tc><w:tcPr><w:tcW w:w="3200" w:type="dxa"/>{NOB}</w:tcPr>{right}</w:tc>'
            '</w:tr></w:tbl>')

# ---------- 1. remplacer les 79 méta-tables ----------
fiche_pos = [m.start() for m in re.finditer(r"FICHE DE PRÉPARATION", doc)]
print("FICHE DE PRÉPARATION:", len(fiche_pos))
assert len(fiche_pos) == 79

def celltext(x):
    t = re.sub(r"<[^>]+>", " ", x)
    return re.sub(r"\s+", " ", t).strip()

count = 0
for idx in range(78, -1, -1):
    pos = fiche_pos[idx]
    t0 = doc.find("<w:tbl>", pos)
    t1 = doc.find("</w:tbl>", t0) + len("</w:tbl>")
    old = doc[t0:t1]
    cells = re.findall(r"<w:tc>.*?</w:tc>", old, re.S)
    c1, c2, c3 = celltext(cells[0]), celltext(cells[1]), celltext(cells[2])
    comp = re.search(r"Composante : (.*?) Titre :", c1).group(1).strip()
    titre = re.search(r"Titre : (.*)$", c1).group(1).strip()
    seance = re.search(r"Séance : (.*)$", c2).group(1).strip()
    objectif = re.sub(r"^Objectif : ", "", c3).strip()
    new = build_meta(comp, themes[idx], titre, objectif, seance, UNIT_OF[idx + 1])
    doc = doc[:t0] + new + doc[t1:]
    count += 1
print("méta-tables remplacées:", count)

# ---------- 2. Q/R.A. de révision ----------
QG = "Que retenez-vous de la notion précédente ? Donnez un exemple numérique."
RG = "Répondent oralement et justifient leur exemple."
print("Q génériques:", doc.count(QG), "| RA génériques:", doc.count(RG))
assert doc.count(QG) == 79 and doc.count(RG) == 79
qi = 0
out = []
rest = doc
while QG in rest:
    i = rest.find(QG)
    out.append(rest[:i]); out.append(esc(QRA[qi][0]))
    rest = rest[i + len(QG):]; qi += 1
out.append(rest)
doc = "".join(out)
qi = 0
out = []
rest = doc
while RG in rest:
    i = rest.find(RG)
    out.append(rest[:i]); out.append(esc(QRA[qi][1]))
    rest = rest[i + len(RG):]; qi += 1
out.append(rest)
doc = "".join(out)
print("remplacements Q:", doc.count(QG) == 0, "| RA:", doc.count(RG) == 0)

# ---------- écriture ----------
tmp = SRC + ".tmp"
zout = zipfile.ZipFile(tmp, "w", zipfile.ZIP_DEFLATED)
for item in zin.infolist():
    data = doc.encode("utf-8") if item.filename == "word/document.xml" else zin.read(item.filename)
    zout.writestr(item, data)
zin.close(); zout.close()
os.replace(tmp, SRC)
print("OK:", SRC, os.path.getsize(SRC))
