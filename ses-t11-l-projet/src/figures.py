# ============================================================
# figures.py — figures du manuel SES T11 série L (Pillow)
# Schemas clairs, lisibles, fond blanc, bandeau bleu.
# ============================================================
import os
from PIL import Image, ImageDraw, ImageFont

OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "output", "images")
os.makedirs(OUT, exist_ok=True)

BLEU = (31, 73, 125)
BLEU_C = (222, 235, 247)
VERT = (56, 118, 29)
VERT_C = (226, 239, 218)
ORANGE = (192, 91, 15)
ORANGE_C = (252, 234, 213)
ROSE = (176, 32, 78)
ROSE_C = (250, 226, 232)
GRIS = (120, 120, 120)
GRIS_C = (240, 240, 240)
JAUNE_C = (255, 244, 204)

_CANDS = [
    "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
    "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
]


def F(sz, bold=False):
    p = _CANDS[1] if bold else _CANDS[0]
    try:
        return ImageFont.truetype(p, sz)
    except Exception:
        return ImageFont.load_default()


def base(titre, h=720):
    img = Image.new("RGB", (1240, h), "white")
    d = ImageDraw.Draw(img)
    d.rectangle([0, 0, 1240, 70], fill=BLEU)
    d.text((36, 20), titre, font=F(30, True), fill="white")
    return img, d


def wrap(text, size, maxw, bold=False):
    font = F(size, bold)
    words, lines, cur = text.split(), [], ""
    for w in words:
        t = (cur + " " + w).strip()
        if ImageDraw.Draw(Image.new("RGB", (10, 10))).textlength(t, font=font) <= maxw:
            cur = t
        else:
            if cur:
                lines.append(cur)
            cur = w
    if cur:
        lines.append(cur)
    return lines


def box(d, x, y, w, h, text, fill=BLEU_C, line=BLEU, size=21, tcolor=(20, 20, 20), bold=False):
    d.rounded_rectangle([x, y, x + w, y + h], radius=12, fill=fill, outline=line, width=3)
    lines = wrap(text, size, w - 28, bold)
    lh = int(size * 1.35)
    ty = y + (h - len(lines) * lh) // 2
    for ln in lines:
        tw = d.textlength(ln, font=F(size, bold))
        d.text((x + (w - tw) / 2, ty), ln, font=F(size, bold), fill=tcolor)
        ty += lh


def arrow(d, x1, y1, x2, y2, color=ROSE, label=None, size=18):
    d.line([x1, y1, x2, y2], fill=color, width=4)
    import math
    a = math.atan2(y2 - y1, x2 - x1)
    for s in (2.5, -2.5):
        d.line([x2, y2, x2 - 16 * math.cos(a + s * 0.30), y2 - 16 * math.sin(a + s * 0.30)],
               fill=color, width=4)
    if label:
        d.text(((x1 + x2) / 2 - 30, (y1 + y2) / 2 - 28), label, font=F(size, True), fill=color)


def legende(d, txt, y, h=720):
    tw = d.textlength(txt, font=F(19))
    d.text(((1240 - tw) / 2, y), txt, font=F(19), fill=GRIS)


def save(img, name):
    p = os.path.join(OUT, name)
    img.save(p)
    print("Figure écrite :", name)


# ------------------------------------------------------------
# FIGURES — UNITÉ I : La production dans les organisations
# ------------------------------------------------------------
def fig_orga_statuts():
    img, d = base("Les statuts des organisations")
    d.text((40, 100), "Selon le propriétaire du capital", font=F(22, True), fill=BLEU)
    box(d, 60, 140, 500, 200, "Organisation publique\nCapital détenu par l'État ou la collectivité\nEx. : société nationale d'eau, hôpital public")
    box(d, 640, 140, 500, 200, "Organisation privée\nCapital détenu par des personnes privées\nEx. : entreprise familiale, société anonyme")
    d.text((40, 370), "Selon le but recherché", font=F(22, True), fill=BLEU)
    box(d, 60, 410, 500, 200, "À but lucratif\nRecherche un bénéfice partageable\nEx. : société commerciale", fill=VERT_C, line=VERT)
    box(d, 640, 410, 500, 200, "À but non lucratif\nLe service rendu prime sur le profit\nEx. : association, coopérative", fill=VERT_C, line=VERT)
    legende(d, "Figure 1 — Deux critères pour classer les organisations.", 650)
    save(img, "t11_l_orga_statuts.png")


def fig_facteurs():
    img, d = base("L'activité productive : des facteurs au produit")
    box(d, 40, 120, 260, 110, "Travail\n(effort humain)", fill=JAUNE_C, line=ORANGE)
    box(d, 40, 260, 260, 110, "Capital\n(machines, bâtiments)", fill=JAUNE_C, line=ORANGE)
    box(d, 40, 400, 260, 110, "Ressources naturelles\n(terre, matières premières)", fill=JAUNE_C, line=ORANGE)
    d.text((60, 90), "Facteurs de production", font=F(21, True), fill=ORANGE)
    arrow(d, 310, 175, 470, 300)
    arrow(d, 310, 315, 470, 330)
    arrow(d, 310, 455, 470, 360)
    box(d, 480, 250, 300, 160, "Combinaison\nproductive", fill=BLEU_C, size=24)
    arrow(d, 790, 330, 930, 330, label="")
    box(d, 940, 250, 260, 160, "Biens et\nservices\nproduits", fill=VERT_C, line=VERT, size=24)
    legende(d, "Figure 3 — Combiner les facteurs pour produire.", 650)
    save(img, "t11_l_facteurs.png")


def fig_couts_recettes():
    img, d = base("Coûts, recettes et profit de l'entreprise")
    box(d, 50, 120, 350, 120, "Coûts fixes\nIndépendants de la quantité\n(loyer, amortissement)", fill=ORANGE_C, line=ORANGE)
    box(d, 50, 270, 350, 120, "Coûts variables\nSuivent la quantité produite\n(matieres premières, heures)", fill=ORANGE_C, line=ORANGE)
    box(d, 50, 420, 350, 120, "Coût total = CF + CV", fill=ORANGE_C, line=ORANGE, size=24)
    arrow(d, 410, 180, 560, 300)
    arrow(d, 410, 480, 560, 380)
    box(d, 570, 250, 260, 120, "Recettes\nPrix × Quantité\nvendue", fill=VERT_C, line=VERT, size=22)
    arrow(d, 840, 310, 960, 310)
    box(d, 970, 250, 230, 120, "Profit =\nRecettes − Coût\ntotal", fill=BLEU_C, size=24)
    d.text((60, 590), "L'entreprise maximise son profit quand l'écart entre la recette et le coût est le plus grand.", font=F(21), fill=(40, 40, 40))
    legende(d, "Figure 4 — Du coût de production au profit.", 650)
    save(img, "t11_l_couts_recettes.png")


def fig_va_bilan():
    img, d = base("Mesurer la performance : valeur ajoutée, bilan et compte de résultat")
    box(d, 60, 120, 300, 100, "Valeur de la\nproduction", fill=BLEU_C, size=22)
    d.text((390, 152), "−", font=F(40, True), fill=ROSE)
    box(d, 440, 120, 320, 100, "Consommations\nintermédiaires", fill=BLEU_C, size=22)
    d.text((790, 152), "=", font=F(40, True), fill=ROSE)
    box(d, 840, 120, 340, 100, "Valeur ajoutée\n(richesse créée)", fill=VERT_C, line=VERT, size=22)
    d.text((60, 270), "Deux instruments pour juger la performance :", font=F(22, True), fill=BLEU)
    box(d, 60, 320, 540, 180, "Le bilan : photographie du patrimoine\n• Emplois (ce que possède l'entreprise)\n• Ressources (comment c'est financé)", fill=JAUNE_C, line=ORANGE, size=20)
    box(d, 640, 320, 540, 180, "Le compte de résultat : film de l'activité\n• Produits (recettes de l'année)\n• Charges (dépenses de l'année)\n• Résultat = produits − charges", fill=JAUNE_C, line=ORANGE, size=20)
    d.text((60, 545), "La valeur ajoutée se répartit ensuite : salaires, impôts, autofinancement, intérêts et dividendes.", font=F(21), fill=(40, 40, 40))
    legende(d, "Figure 5 — Mesurer la richesse créée et la performance.", 650)
    save(img, "t11_l_va_bilan.png")


def fig_rse():
    img, d = base("La responsabilité sociétale de l'entreprise (RSE)")
    box(d, 480, 120, 290, 110, "RSE : prendre en compte\nles effets de l'activité", size=22)
    box(d, 60, 300, 340, 220, "Pilier économique\n• Viabilité de l'activité\n• Emplois et revenus\n• Innovation", fill=BLEU_C, size=20)
    box(d, 450, 300, 340, 220, "Pilier social\n• Conditions de travail\n• Dialogue avec les salariés\n• Effet sur le territoire", fill=VERT_C, line=VERT, size=20)
    box(d, 840, 300, 340, 220, "Pilier environnemental\n• Ressources et déchets\n• Énergie et pollution\n• Impact climatique", fill=JAUNE_C, line=ORANGE, size=20)
    arrow(d, 625, 235, 230, 300)
    arrow(d, 625, 235, 620, 300)
    arrow(d, 625, 235, 1010, 300)
    d.text((60, 570), "L'impact peut être positif (emplois, formation) ou négatif (pollution, épuisement des ressources).", font=F(21), fill=(40, 40, 40))
    legende(d, "Figure 6 — Les trois piliers de la responsabilité sociétale.", 650)
    save(img, "t11_l_rse.png")


def fig_parties_prenantes():
    img, d = base("Les parties prenantes de l'entreprise")
    box(d, 500, 300, 250, 130, "L'entreprise", fill=BLEU_C, size=26)
    box(d, 60, 120, 300, 130, "Acteurs internes\nAssociés et actionnaires\nSalariés et dirigeants", fill=VERT_C, line=VERT, size=20)
    box(d, 880, 120, 300, 130, "Acteurs externes\nClients, fournisseurs\nBanques, État, riverains", fill=ORANGE_C, line=ORANGE, size=20)
    arrow(d, 370, 200, 500, 340)
    arrow(d, 880, 200, 760, 340)
    d.text((60, 480), "Chaque acteur apporte une contribution et attend une contrepartie :", font=F(22, True), fill=BLEU)
    box(d, 60, 530, 520, 150, "Intérêts convergents\nLa pérennité de l'entreprise profite à tous", fill=BLEU_C, size=20)
    box(d, 660, 530, 520, 150, "Intérêts divergents\nSalaires et dividendes, prix et marge,\nemploi et productivité", fill=ROSE_C, line=ROSE, size=20)
    legende(d, "Figure 7 — Contributions, attentes et intérêts des acteurs.", 650)
    save(img, "t11_l_parties_prenantes.png")



# ------------------------------------------------------------
# FIGURES — UNITÉ II : Monnaie et financement
# ------------------------------------------------------------
def fig_monnaie():
    img, d = base("La monnaie : fonctions et formes")
    d.text((40, 100), "Trois fonctions", font=F(23, True), fill=BLEU)
    box(d, 50, 150, 360, 150, "Intermédiaire\ndes échanges\nElle sert à acheter", size=21)
    box(d, 440, 150, 360, 150, "Unité de compte\nElle sert à mesurer\net à comparer", size=21)
    box(d, 830, 150, 360, 150, "Réserve de valeur\nElle permet\nd'épargner", size=21)
    d.text((40, 340), "Deux formes", font=F(23, True), fill=BLEU)
    box(d, 50, 390, 540, 170, "Monnaie fiduciaire\nBillets et pièces, avoir physique", fill=VERT_C, line=VERT, size=21)
    box(d, 650, 390, 540, 170, "Monnaie scripturale\nÉcritures en compte, chèques, virements", fill=VERT_C, line=VERT, size=21)
    d.text((50, 605), "Une monnaie n'a de valeur que si ceux qui la reçoivent lui font confiance.", font=F(21), fill=(40, 40, 40))
    legende(d, "Figure 8 — Les fonctions et les formes de la monnaie.", 660)
    save(img, "t11_l_monnaie.png")


def fig_creation_monetaire():
    img, d = base("La création monétaire")
    box(d, 40, 130, 280, 150, "Banque centrale\nElle fournit la\nmonnaie de base", fill=BLEU_C, size=21)
    arrow(d, 330, 205, 470, 205, label="")
    box(d, 480, 130, 280, 150, "Banques\ncommerciales", fill=BLEU_C, size=22)
    arrow(d, 770, 205, 900, 205, label="crédits")
    box(d, 910, 130, 290, 150, "Ménages et\nentreprises", fill=JAUNE_C, line=ORANGE, size=22)
    arrow(d, 1050, 290, 1050, 470, label="dépenses")
    box(d, 910, 470, 290, 150, "Dépôts en compte\nnouvelle monnaie", fill=JAUNE_C, line=ORANGE, size=21)
    arrow(d, 900, 545, 770, 545, label="dépôts")
    box(d, 480, 470, 280, 150, "Retour dans\nles banques", fill=BLEU_C, size=22)
    d.text((40, 320), "Le crédit fait naître un dépôt : prêter, c'est créer de la monnaie.", font=F(22, True), fill=ROSE)
    d.text((40, 370), "La banque centrale encadre ce processus et veille à la valeur de la monnaie.", font=F(21), fill=(40, 40, 40))
    d.text((40, 660), "Masse monétaire : ensemble des moyens de paiement détenus par les agents.", font=F(20), fill=GRIS)
    legende(d, "Figure 9 — Du crédit accordé à la monnaie créée.", 700)
    save(img, "t11_l_creation_monetaire.png")


def fig_financement():
    img, d = base("Financement direct et financement indirect")
    box(d, 40, 120, 260, 130, "Agent à besoin de\nfinancement\n(entreprise)", fill=ORANGE_C, line=ORANGE, size=20)
    box(d, 940, 120, 260, 130, "Agent à capacité\nde financement\n(ménage)", fill=VERT_C, line=VERT, size=20)
    d.text((380, 90), "Financement direct", font=F(22, True), fill=BLEU)
    box(d, 340, 230, 560, 90, "Marché financier : actions et obligations", fill=BLEU_C, size=21)
    arrow(d, 320, 190, 360, 240)
    arrow(d, 900, 250, 930, 200)
    arrow(d, 360, 330, 320, 380, label="")
    arrow(d, 930, 380, 900, 330, label="")
    d.text((380, 400), "Financement indirect", font=F(22, True), fill=BLEU)
    box(d, 340, 450, 560, 90, "Intermédiaire : la banque collecte et prête", fill=BLEU_C, size=21)
    arrow(d, 320, 480, 350, 490)
    arrow(d, 910, 480, 930, 490)
    d.text((60, 590), "Autofinancement : l'entreprise finance d'abord son investissement sur ses ressources propres.", font=F(21, True), fill=ROSE)
    d.text((60, 635), "Financement désintermédié = direct ; financement intermédié = indirect.", font=F(20), fill=GRIS)
    legende(d, "Figure 11 — Les deux voies du financement de l'économie.", 680)
    save(img, "t11_l_financement.png")


def fig_taux_interet():
    img, d = base("Le taux d'intérêt : calcul et portée")
    box(d, 60, 110, 520, 130, "Intérêts simples\nIntérêts = capital × taux × durée", fill=BLEU_C, size=23)
    box(d, 660, 110, 520, 130, "Exemple\n100 000 Ar à 5 % pendant 2 ans\n= 10 000 Ar d'intérêts", fill=JAUNE_C, line=ORANGE, size=20)
    d.text((60, 280), "Deux lectures du taux", font=F(22, True), fill=BLEU)
    box(d, 60, 330, 520, 190, "Taux nominal\nTaux affiché par le prêteur,\ncelui que porte le contrat", fill=VERT_C, line=VERT, size=21)
    box(d, 660, 330, 520, 190, "Taux réel\nTaux nominal diminué de l'inflation\nil mesure le coût réel du crédit", fill=VERT_C, line=VERT, size=21)
    d.text((60, 560), "Le prêteur exige une prime de risque : plus le risque de crédit est élevé, plus le taux l'est.", font=F(21, True), fill=ROSE)
    d.text((60, 605), "Le taux d'intérêt rémunère l'épargne, sélectionne les projets et pèse sur l'investissement.", font=F(20), fill=(40, 40, 40))
    legende(d, "Figure 12 — Calculer des intérêts et lire un taux.", 660)
    save(img, "t11_l_taux_interet.png")


if __name__ == "__main__":
    fig_orga_statuts()
    fig_facteurs()
    fig_couts_recettes()
    fig_va_bilan()
    fig_rse()
    fig_parties_prenantes()
    fig_monnaie()
    fig_creation_monetaire()
    fig_financement()
    fig_taux_interet()
