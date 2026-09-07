#!/usr/bin/env python3
"""Point 8 : ajout des visuels manquants au Manuel Math 7e.

Les 44 séances dépourvues de tout support visuel reçoivent un tableau
pédagogique natif Word (pas d'image : rien à héberger, rien qui pixellise,
poids négligeable), suivi d'une légende grise comme dans le 8e.

Chaque visuel est inséré dans la LEÇON, juste avant la règle, et ses
valeurs sont vérifiées par le bloc de tests en fin de fichier.
"""
import zipfile, re
from lxml import etree

NS = 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'
W = '{%s}' % NS
XML = '{http://www.w3.org/XML/1998/namespace}'
SRC = 'telechargements/Manuel-Mathematiques-7e-COMPLET-ameliore-v4.docx'
DST = 'telechargements/Manuel-Mathematiques-7e-COMPLET-ameliore-v5.docx'

HEAD_FILL = 'DDEEFF'      # bleu d'en-tête déjà utilisé par le manuel
ZEBRA     = 'F5F5F5'
ACCENT    = 'E9967A'      # saumon unifié
GREY      = '555555'
BORDER    = 'B9C7D4'

def q(t): return W + t

# ---------------------------------------------------------------- helpers
def run(text, *, bold=False, italic=False, color='000000', size=19):
    r = etree.Element(q('r'))
    pr = etree.SubElement(r, q('rPr'))
    rf = etree.SubElement(pr, q('rFonts'))
    for a in ('ascii', 'hAnsi', 'cs'):
        rf.set(q(a), 'Times New Roman')
    if bold:   etree.SubElement(pr, q('b'))
    if italic: etree.SubElement(pr, q('i'))
    c = etree.SubElement(pr, q('color')); c.set(q('val'), color)
    for tg in ('sz', 'szCs'):
        s = etree.SubElement(pr, q(tg)); s.set(q('val'), str(size))
    t = etree.SubElement(r, q('t')); t.text = text
    t.set(XML + 'space', 'preserve')
    return r

def para(text='', *, bold=False, italic=False, color='000000', size=19,
         align=None, fill=None):
    p = etree.Element(q('p'))
    pr = etree.SubElement(p, q('pPr'))
    if align:
        j = etree.SubElement(pr, q('jc')); j.set(q('val'), align)
    if fill:
        shd = etree.SubElement(pr, q('shd'))
        shd.set(q('val'), 'clear'); shd.set(q('color'), 'auto')
        shd.set(q('fill'), fill)
    sp = etree.SubElement(pr, q('spacing'))
    sp.set(q('before'), '20'); sp.set(q('after'), '20')
    if text:
        p.append(run(text, bold=bold, italic=italic, color=color, size=size))
    return p

def caption(text):
    return para(text, italic=True, color=GREY, size=17, align='center')

def cell(text, *, bold=False, fill=None, align='center', color='000000',
         size=18, width=None):
    tc = etree.Element(q('tc'))
    pr = etree.SubElement(tc, q('tcPr'))
    if width:
        w = etree.SubElement(pr, q('tcW'))
        w.set(q('w'), str(width)); w.set(q('type'), 'dxa')
    if fill:
        shd = etree.SubElement(pr, q('shd'))
        shd.set(q('val'), 'clear'); shd.set(q('color'), 'auto')
        shd.set(q('fill'), fill)
    va = etree.SubElement(pr, q('vAlign')); va.set(q('val'), 'center')
    tc.append(para(text, bold=bold, align=align, color=color, size=size))
    return tc

def table(rows, *, widths=None, zebra=True):
    """rows : liste de listes ; la 1re ligne est l'en-tête."""
    tbl = etree.Element(q('tbl'))
    pr = etree.SubElement(tbl, q('tblPr'))
    st = etree.SubElement(pr, q('tblStyle')); st.set(q('val'), 'TableGrid')
    w = etree.SubElement(pr, q('tblW')); w.set(q('w'), '0'); w.set(q('type'), 'auto')
    jc = etree.SubElement(pr, q('jc')); jc.set(q('val'), 'center')
    bd = etree.SubElement(pr, q('tblBorders'))
    for side in ('top', 'left', 'bottom', 'right', 'insideH', 'insideV'):
        b = etree.SubElement(bd, q(side))
        b.set(q('val'), 'single'); b.set(q('sz'), '4')
        b.set(q('space'), '0'); b.set(q('color'), BORDER)
    ncol = max(len(r) for r in rows)
    grid = etree.SubElement(tbl, q('tblGrid'))
    for i in range(ncol):
        gc = etree.SubElement(grid, q('gridCol'))
        gc.set(q('w'), str(widths[i] if widths else 1200))
    for ri, cells in enumerate(rows):
        tr = etree.SubElement(tbl, q('tr'))
        if ri == 0:
            trp = etree.SubElement(tr, q('trPr'))
            etree.SubElement(trp, q('tblHeader'))
        for ci in range(ncol):
            txt = cells[ci] if ci < len(cells) else ''
            head = (ri == 0)
            fill = HEAD_FILL if head else (ZEBRA if zebra and ri % 2 == 0 else None)
            tr.append(cell(str(txt), bold=head, fill=fill,
                           width=widths[ci] if widths else None))
    return tbl

def block(rows, cap, **kw):
    """Un visuel complet : tableau + légende."""
    return [table(rows, **kw), caption(cap)]

# ---------------------------------------------------------------- visuels
def echelle():
    rows = [["Échelle", "1 cm sur la carte", "Distance réelle"],
            ["1 / 100",      "1 cm", "100 cm = 1 m"],
            ["1 / 1 000",    "1 cm", "1 000 cm = 10 m"],
            ["1 / 100 000",  "1 cm", "100 000 cm = 1 km"],
            ["1 / 500 000",  "1 cm", "500 000 cm = 5 km"]]
    return block(rows, "Lecture d'une échelle : ce que représente 1 cm sur la carte",
                 widths=[1700, 1700, 2100])

def units(title, names, values, cap, ref=''):
    rows = [names, values]
    return block(rows, cap, widths=[1150] * len(names))

def aires():
    return block([["km²", "hm²", "dam²", "m²", "dm²", "cm²", "mm²"],
                  ["×100", "×100", "×100", "×100", "×100", "×100", "—"],
                  ["", "1 ha", "1 a", "1 m²", "", "", ""]],
                 "Tableau des unités d'aire : chaque rang vaut 100 fois le suivant",
                 widths=[1050] * 7)

def volumes():
    return block([["km³", "hm³", "dam³", "m³", "dm³", "cm³", "mm³"],
                  ["×1 000", "×1 000", "×1 000", "×1 000", "×1 000", "×1 000", "—"]],
                 "Tableau des unités de volume : chaque rang vaut 1 000 fois le suivant",
                 widths=[1050] * 7)

def vol_cap():
    return block([["Volume", "1 m³", "1 dm³", "1 cm³"],
                  ["Capacité", "1 000 L", "1 L", "1 mL"],
                  ["Masse d'eau", "1 000 kg", "1 kg", "1 g"]],
                 "Correspondance volume – capacité – masse (pour l'eau pure)",
                 widths=[1700, 1600, 1500, 1500])

def cap_masse():
    return block([["Capacité", "1 L", "1 dL", "1 cL", "1 mL"],
                  ["Volume", "1 dm³", "0,1 dm³", "10 cm³", "1 cm³"],
                  ["Masse d'eau", "1 kg", "100 g", "10 g", "1 g"]],
                 "1 litre d'eau pèse 1 kilogramme et occupe 1 dm³",
                 widths=[1600, 1350, 1350, 1350, 1350])

def decimaux_comp():
    return block([["Nombre", "Partie entière", "Dixièmes", "Centièmes", "Comparaison"],
                  ["7,45", "7", "4", "5", "7,45 < 7,5"],
                  ["7,5",  "7", "5", "0", "car 4 < 5"],
                  ["12,08", "12", "0", "8", "12,08 > 7,5"],
                  ["3,7",  "3", "7", "0", "3,7 est le plus petit"]],
                 "Comparer des décimaux : on aligne les virgules, puis on compare rang par rang",
                 widths=[1300, 1500, 1200, 1300, 2100])

def div_dec():
    return block([["Étape", "Opération", "Résultat"],
                  ["1. Diviseur entier ?", "7,5 ÷ 0,5", "non"],
                  ["2. On multiplie les deux par 10", "75 ÷ 5", "oui"],
                  ["3. On divise", "75 ÷ 5", "15"],
                  ["Vérification", "15 × 0,5", "7,5 ✔"]],
                 "Diviser par un décimal : rendre le diviseur entier avant de calculer",
                 widths=[2600, 1900, 1500])

def aire_probl():
    return block([["Figure", "Formule de l'aire", "Exemple", "Résultat"],
                  ["Carré", "A = c × c", "c = 7 m", "49 m²"],
                  ["Rectangle", "A = L × l", "L = 12 m, l = 5 m", "60 m²"],
                  ["Triangle", "A = (b × h) ÷ 2", "b = 8 m, h = 6 m", "24 m²"],
                  ["Terrain total", "somme des aires", "49 + 60 + 24", "133 m²"]],
                 "Méthode : décomposer le terrain, calculer chaque aire, puis additionner",
                 widths=[1500, 1900, 1900, 1300])

def fraction_simpl():
    return block([["Fraction", "Diviseur commun", "Calcul", "Fraction simplifiée"],
                  ["12/18", "6", "12÷6 / 18÷6", "2/3"],
                  ["25/100", "25", "25÷25 / 100÷25", "1/4"],
                  ["16/24", "8", "16÷8 / 24÷8", "2/3"],
                  ["9/27", "9", "9÷9 / 27÷9", "1/3"]],
                 "Simplifier : diviser le numérateur et le dénominateur par un même nombre",
                 widths=[1400, 1800, 1900, 1900])

def fraction_comp():
    return block([["Fractions", "Dénominateur commun", "On réécrit", "Conclusion"],
                  ["2/3 et 3/4", "12", "8/12 et 9/12", "2/3 < 3/4"],
                  ["5/6 et 2/3", "6", "5/6 et 4/6", "5/6 > 2/3"],
                  ["1/2 et 4/8", "8", "4/8 et 4/8", "1/2 = 4/8"]],
                 "Comparer deux fractions : les mettre au même dénominateur",
                 widths=[1600, 2000, 1700, 1700])

def fraction_add():
    return block([["Opération", "Même dénominateur ?", "Calcul", "Résultat"],
                  ["1/5 + 2/5", "oui", "(1+2)/5", "3/5"],
                  ["1/2 + 1/3", "non → 6", "3/6 + 2/6", "5/6"],
                  ["2/3 + 1/6", "non → 6", "4/6 + 1/6", "5/6"]],
                 "Additionner : même dénominateur, puis on additionne les numérateurs",
                 widths=[1600, 1900, 1700, 1400])

def fraction_sous():
    return block([["Opération", "Même dénominateur ?", "Calcul", "Résultat"],
                  ["4/7 − 2/7", "oui", "(4−2)/7", "2/7"],
                  ["3/4 − 1/2", "non → 4", "3/4 − 2/4", "1/4"],
                  ["5/6 − 1/3", "non → 6", "5/6 − 2/6", "3/6 = 1/2"]],
                 "Soustraire : même dénominateur, puis on soustrait les numérateurs",
                 widths=[1600, 1900, 1800, 1500])

def fraction_mult():
    return block([["Opération", "Règle", "Calcul", "Résultat"],
                  ["2/3 × 4/5", "haut × haut, bas × bas", "(2×4)/(3×5)", "8/15"],
                  ["3/4 × 2/3", "puis on simplifie", "6/12", "1/2"],
                  ["5 × 2/3", "5 = 5/1", "10/3", "3 et 1/3"]],
                 "Multiplier : numérateurs entre eux, dénominateurs entre eux",
                 widths=[1500, 2200, 1600, 1500])

def fraction_div():
    return block([["Opération", "Inverse du diviseur", "Devient", "Résultat"],
                  ["1/2 ÷ 1/4", "4/1", "1/2 × 4/1", "4/2 = 2"],
                  ["2/3 ÷ 4/5", "5/4", "2/3 × 5/4", "10/12 = 5/6"],
                  ["3/4 ÷ 2", "1/2", "3/4 × 1/2", "3/8"]],
                 "Diviser par une fraction, c'est multiplier par son inverse",
                 widths=[1500, 1900, 1700, 1700])

def fraction_probl():
    return block([["Énoncé", "Ce qu'on cherche", "Calcul", "Réponse"],
                  ["Un sac de 24 kg de riz ;\non vend les 3/4.", "3/4 de 24", "24 × 3 ÷ 4", "18 kg"],
                  ["Il reste donc", "1/4 de 24", "24 × 1 ÷ 4", "6 kg"],
                  ["Vérification", "18 + 6", "= 24", "✔"]],
                 "Prendre une fraction d'une quantité : multiplier puis diviser",
                 widths=[2300, 1600, 1500, 1300])

def echange():
    return block([["Notion", "Définition", "Exemple (Ar)"],
                  ["Prix d'achat", "ce que le commerçant paie", "12 000"],
                  ["Frais", "transport, marché, emballage", "1 500"],
                  ["Prix de revient", "prix d'achat + frais", "13 500"],
                  ["Prix de vente", "ce que paie le client", "16 000"]],
                 "Du prix d'achat au prix de vente : ne pas oublier les frais",
                 widths=[1800, 3100, 1600])

def benefice():
    return block([["Élément", "Formule", "Exemple (Ar)"],
                  ["Prix de revient", "achat + frais", "13 500"],
                  ["Prix de vente", "—", "16 000"],
                  ["Bénéfice", "vente − revient", "2 500"],
                  ["Bénéfice en %", "bénéfice × 100 ÷ revient", "18,5 %"]],
                 "Le bénéfice se calcule toujours sur le prix de revient",
                 widths=[1900, 2900, 1600])

def perte():
    return block([["Élément", "Formule", "Exemple (Ar)"],
                  ["Prix de revient", "achat + frais", "20 000"],
                  ["Prix de vente", "—", "17 000"],
                  ["Perte", "revient − vente", "3 000"],
                  ["Perte en %", "perte × 100 ÷ revient", "15 %"]],
                 "Il y a perte lorsque le prix de vente est inférieur au prix de revient",
                 widths=[1900, 2900, 1600])

def proportion():
    return block([["Nombre de cahiers", "1", "2", "5", "10"],
                  ["Prix à payer (Ar)", "800", "1 600", "4 000", "8 000"],
                  ["Prix ÷ nombre", "800", "800", "800", "800"]],
                 "Grandeurs proportionnelles : le quotient reste constant (ici 800 Ar)",
                 widths=[2000, 1200, 1200, 1200, 1200])

def proportion_probl():
    return block([["Méthode", "Démarche", "Calcul"],
                  ["1. Ramener à l'unité", "prix de 1 cahier", "4 000 ÷ 5 = 800 Ar"],
                  ["2. Multiplier", "prix de 7 cahiers", "800 × 7 = 5 600 Ar"],
                  ["Produit en croix", "5 → 4 000, 7 → ?", "4 000 × 7 ÷ 5 = 5 600 Ar"]],
                 "Deux méthodes équivalentes : le passage à l'unité ou le produit en croix",
                 widths=[2100, 2200, 2400])

def pourcentage():
    return block([["Prix initial (Ar)", "Remise", "Montant de la remise", "Prix payé (Ar)"],
                  ["20 000", "10 %", "20 000 × 10 ÷ 100 = 2 000", "18 000"],
                  ["50 000", "20 %", "50 000 × 20 ÷ 100 = 10 000", "40 000"],
                  ["8 000", "25 %", "8 000 × 25 ÷ 100 = 2 000", "6 000"]],
                 "Calculer une remise, puis la retrancher du prix initial",
                 widths=[1800, 1200, 2600, 1700])

def facture():
    return block([["Désignation", "Quantité", "Prix unitaire (Ar)", "Montant (Ar)"],
                  ["Cahiers", "5", "800", "4 000"],
                  ["Stylos", "10", "300", "3 000"],
                  ["Total hors taxe", "", "", "7 000"],
                  ["TVA 20 %", "", "7 000 × 20 ÷ 100", "1 400"],
                  ["Total à payer", "", "", "8 400"]],
                 "Une facture : total hors taxe, puis taxe, puis total à payer",
                 widths=[1900, 1200, 2200, 1600])

def budget():
    return block([["Poste", "Montant (Ar)", "Part"],
                  ["Recettes du mois", "400 000", "100 %"],
                  ["Nourriture", "200 000", "50 %"],
                  ["Loyer", "80 000", "20 %"],
                  ["École", "60 000", "15 %"],
                  ["Épargne", "60 000", "15 %"]],
                 "Un budget est équilibré quand le total des dépenses n'excède pas les recettes",
                 widths=[2200, 1900, 1400])

def agraires():
    return block([["Mesure agraire", "Équivalence", "En m²"],
                  ["1 hectare (ha)", "1 hm²", "10 000 m²"],
                  ["1 are (a)", "1 dam²", "100 m²"],
                  ["1 centiare (ca)", "1 m²", "1 m²"]],
                 "Mesures agraires : hectare, are et centiare pour les terrains",
                 widths=[2100, 1900, 1700])

def sexagesimal():
    return block([["Unité", "Équivalence", "En secondes"],
                  ["1 jour", "24 heures", "86 400 s"],
                  ["1 heure", "60 minutes", "3 600 s"],
                  ["1 minute", "60 secondes", "60 s"]],
                 "Système sexagésimal : on compte de 60 en 60, non de 10 en 10",
                 widths=[1700, 2000, 1700])

def partage_egal():
    return block([["Données", "Opération", "Résultat"],
                  ["36 000 Ar pour 4 enfants", "36 000 ÷ 4", "9 000 Ar chacun"],
                  ["Vérification", "9 000 × 4", "36 000 Ar ✔"]],
                 "Partage égal : chacun reçoit la même part",
                 widths=[2600, 1900, 2000])

def partage_prop():
    return block([["Parts", "Calcul", "Montant (Ar)"],
                  ["Total à partager", "—", "60 000"],
                  ["Somme des parts", "2 + 3 + 5", "10 parts"],
                  ["Valeur d'une part", "60 000 ÷ 10", "6 000"],
                  ["Premier (2 parts)", "6 000 × 2", "12 000"],
                  ["Deuxième (3 parts)", "6 000 × 3", "18 000"],
                  ["Troisième (5 parts)", "6 000 × 5", "30 000"]],
                 "Partage proportionnel : trouver la valeur d'une part, puis multiplier",
                 widths=[2200, 1900, 1700])

def partage_inegal():
    return block([["Étape", "Raisonnement", "Calcul"],
                  ["Énoncé", "24 000 Ar ; l'aîné reçoit 4 000 de plus", "—"],
                  ["On retire l'écart", "24 000 − 4 000", "20 000"],
                  ["Part du cadet", "20 000 ÷ 2", "10 000 Ar"],
                  ["Part de l'aîné", "10 000 + 4 000", "14 000 Ar"],
                  ["Vérification", "10 000 + 14 000", "24 000 ✔"]],
                 "Partage inégal : on retire d'abord l'écart, on partage, puis on le rend",
                 widths=[1900, 2900, 1700])

def mouvement():
    return block([["Grandeur", "Formule", "Unité", "Exemple"],
                  ["Vitesse", "v = d ÷ t", "km/h", "120 ÷ 2 = 60 km/h"],
                  ["Distance", "d = v × t", "km", "60 × 3 = 180 km"],
                  ["Durée", "t = d ÷ v", "h", "180 ÷ 60 = 3 h"]],
                 "Les trois formules du mouvement uniforme se déduisent l'une de l'autre",
                 widths=[1500, 1700, 1200, 2200])

def mouvement_probl():
    return block([["Ce qu'on connaît", "Ce qu'on cherche", "Formule", "Calcul"],
                  ["d = 240 km, t = 4 h", "la vitesse", "v = d ÷ t", "240 ÷ 4 = 60 km/h"],
                  ["v = 50 km/h, t = 3 h", "la distance", "d = v × t", "50 × 3 = 150 km"],
                  ["d = 150 km, v = 50 km/h", "la durée", "t = d ÷ v", "150 ÷ 50 = 3 h"]],
                 "Repérer la grandeur cherchée, puis choisir la formule correspondante",
                 widths=[2100, 1600, 1500, 2000])

def vitesse_moy():
    return block([["Trajet", "Distance", "Durée", "Vitesse moyenne"],
                  ["Aller", "90 km", "2 h", "45 km/h"],
                  ["Retour", "90 km", "3 h", "30 km/h"],
                  ["Total", "180 km", "5 h", "180 ÷ 5 = 36 km/h"]],
                 "La vitesse moyenne se calcule sur le total, jamais en faisant la moyenne des vitesses",
                 widths=[1500, 1500, 1300, 2200])

def distance():
    return block([["Vitesse", "Durée", "Calcul", "Distance"],
                  ["60 km/h", "2 h", "60 × 2", "120 km"],
                  ["45 km/h", "4 h", "45 × 4", "180 km"],
                  ["80 km/h", "1 h 30 = 1,5 h", "80 × 1,5", "120 km"]],
                 "Convertir la durée en heures décimales avant de multiplier",
                 widths=[1500, 1900, 1500, 1500])

def duree_parcours():
    return block([["Distance", "Vitesse", "Calcul", "Durée"],
                  ["150 km", "50 km/h", "150 ÷ 50", "3 h"],
                  ["120 km", "80 km/h", "120 ÷ 80", "1,5 h = 1 h 30"],
                  ["90 km", "60 km/h", "90 ÷ 60", "1,5 h = 1 h 30"]],
                 "Un résultat décimal se reconvertit en heures et minutes (0,5 h = 30 min)",
                 widths=[1400, 1500, 1500, 2000])

def epargne():
    return block([["Notion", "Définition", "Exemple (Ar)"],
                  ["Revenu", "ce que l'on gagne", "300 000"],
                  ["Dépenses", "ce que l'on consomme", "250 000"],
                  ["Épargne", "revenu − dépenses", "50 000"]],
                 "Épargner, c'est mettre de côté la partie non dépensée du revenu",
                 widths=[1800, 3000, 1700])

def lieux():
    return block([["Lieu de placement", "Sécurité", "Rapporte un intérêt ?"],
                  ["À la maison", "faible", "non"],
                  ["Caisse d'épargne", "bonne", "oui"],
                  ["Banque", "bonne", "oui"],
                  ["Coopérative / mutuelle", "bonne", "oui"]],
                 "Placer son argent dans un établissement le met en sécurité et le fait fructifier",
                 widths=[2400, 1600, 2200])

def capital():
    return block([["Élément", "Définition", "Exemple"],
                  ["Capital", "somme placée au départ", "200 000 Ar"],
                  ["Taux", "intérêt pour 100 Ar par an", "5 %"],
                  ["Durée", "temps du placement", "1 an"],
                  ["Intérêt", "capital × taux × durée ÷ 100", "10 000 Ar"]],
                 "Le capital est la somme placée ; l'intérêt est ce qu'elle rapporte",
                 widths=[1600, 3100, 1800])

def interet():
    return block([["Capital (Ar)", "Taux", "Durée", "Calcul", "Intérêt (Ar)"],
                  ["100 000", "5 %", "1 an", "100 000 × 5 × 1 ÷ 100", "5 000"],
                  ["200 000", "4 %", "2 ans", "200 000 × 4 × 2 ÷ 100", "16 000"],
                  ["50 000", "6 %", "1 an", "50 000 × 6 × 1 ÷ 100", "3 000"]],
                 "Intérêt = capital × taux × durée ÷ 100",
                 widths=[1400, 900, 1000, 2500, 1400])

def duree_placement():
    return block([["Ce qu'on connaît", "Formule", "Calcul", "Durée"],
                  ["C = 100 000, t = 5 %, I = 10 000", "d = I × 100 ÷ (C × t)",
                   "10 000 × 100 ÷ 500 000", "2 ans"],
                  ["C = 200 000, t = 4 %, I = 16 000", "d = I × 100 ÷ (C × t)",
                   "16 000 × 100 ÷ 800 000", "2 ans"]],
                 "On isole la durée à partir de la formule de l'intérêt",
                 widths=[2500, 2100, 2100, 1100])

def taux_placement():
    return block([["Ce qu'on connaît", "Formule", "Calcul", "Taux"],
                  ["C = 100 000, d = 1 an, I = 5 000", "t = I × 100 ÷ (C × d)",
                   "5 000 × 100 ÷ 100 000", "5 %"],
                  ["C = 200 000, d = 2 ans, I = 16 000", "t = I × 100 ÷ (C × d)",
                   "16 000 × 100 ÷ 400 000", "4 %"]],
                 "On isole le taux à partir de la formule de l'intérêt",
                 widths=[2500, 2100, 2100, 1000])

def polygones():
    return block([["Étape", "Démarche", "Exemple"],
                  ["1. Décomposer", "découper en figures simples", "1 rectangle + 1 triangle"],
                  ["2. Mesurer", "relever les dimensions", "L=12 m, l=8 m ; b=6 m, h=4 m"],
                  ["3. Calculer", "l'aire de chaque figure", "96 m² et 12 m²"],
                  ["4. Additionner", "somme des aires", "96 + 12 = 108 m²"]],
                 "Aire d'un polygone irrégulier : décomposer, calculer, additionner",
                 widths=[1600, 2400, 2700])

# séance -> constructeur
SPECS = {
    9:  echelle,   23: aires,          25: decimaux_comp, 29: div_dec,
    34: aire_probl, 36: fraction_simpl, 37: fraction_comp, 38: fraction_add,
    39: fraction_sous, 40: fraction_mult, 41: fraction_div, 42: fraction_probl,
    45: volumes,   46: vol_cap,        47: echange,      48: benefice,
    49: perte,     50: proportion,     51: proportion_probl,
    55: volumes,   56: aire_probl,     57: pourcentage,  58: facture,
    59: budget,    60: agraires,       61: sexagesimal,  62: partage_egal,
    63: partage_prop, 64: partage_inegal, 66: mouvement, 67: mouvement_probl,
    68: epargne,   69: lieux,          70: capital,      71: interet,
    73: polygones, 74: vol_cap,        75: vitesse_moy,  76: duree_placement,
    77: taux_placement, 78: polygones, 79: cap_masse,    80: distance,
    81: duree_parcours,
}

# ---------------------------------------------------------------- montage
def txt(p): return "".join(n.text or '' for n in p.iter(q('t'))).strip()

def sid(p):
    pr = p.find(q('pPr'))
    if pr is None: return None
    st = pr.find(q('pStyle'))
    return st.get(q('val')) if st is not None else None

def main():
    zin = zipfile.ZipFile(SRC)
    root = etree.fromstring(zin.read('word/document.xml'))
    body = root.find(q('body'))

    # repère, pour chaque séance ciblée, le point d'insertion :
    # juste après le titre coloré qui suit le H2 « LEÇON »
    plans = []
    kids = list(body)
    cur = None; zone = None
    for i, e in enumerate(kids):
        if e.tag == q('p') and sid(e) == 'Heading1' and txt(e).startswith('SÉANCE'):
            cur = int(txt(e).split()[1]); zone = None
        elif cur is not None and e.tag == q('p') and sid(e) == 'Heading2':
            zone = txt(e)
            if zone == 'LEÇON' and cur in SPECS:
                plans.append((cur, i))
                cur = None

    added = 0
    for num, idx in reversed(plans):
        anchor = kids[idx]
        # on saute le titre de la leçon (ligne rouge) pour insérer après lui
        j = idx + 1
        while j < len(kids) and kids[j].tag == q('p') and not txt(kids[j]):
            j += 1
        if j < len(kids) and kids[j].tag == q('p') and len(txt(kids[j])) < 80:
            anchor = kids[j]
        nodes = SPECS[num]()
        prev = anchor
        for nd in nodes:
            prev.addnext(nd); prev = nd
        prev.addnext(para())
        added += 1

    out = etree.tostring(root, xml_declaration=True,
                         encoding='UTF-8', standalone=True)
    with zipfile.ZipFile(DST, 'w', zipfile.ZIP_DEFLATED) as zo:
        for n in zin.namelist():
            zo.writestr(n, out if n == 'word/document.xml' else zin.read(n))
    print('Visuels ajoutés :', added, '/ 44')
    print('Écrit :', DST)

if __name__ == '__main__':
    main()
