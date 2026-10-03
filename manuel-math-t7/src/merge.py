# Merge final — Manuel Mathématiques T7 (6 unités + annexes + sommaire complet)
from pathlib import Path
import re
from docx import Document
from docxcompose.composer import Composer
from docx.oxml.ns import qn
from docx.oxml import OxmlElement
from docx.shared import Pt, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT

R = Path(__file__).resolve().parents[1]
W = R / 'work_merge'; W.mkdir(exist_ok=True)
(R / 'livrables').mkdir(exist_ok=True)
units = [R / f'Manuel_Mathematiques_T7_UNITE{i}.docx' for i in range(1, 7)]
ROMANS = {1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V', 6: 'VI'}
NAMES = {1: 'Nombre', 2: 'Opération', 3: 'Algèbre', 4: 'Géométrie', 5: 'Mesure', 6: 'Traitement de données'}


def text(el):
    return ''.join(el.itertext()).strip()


def stripped(src, n):
    d = Document(src); body = d.element.body; found = False
    for el in list(body):
        if el.tag == qn('w:sectPr'):
            continue
        if el.tag == qn('w:p') and f'UNITÉ {ROMANS[n]} —' in text(el) and 'SÉANCE' not in text(el):
            found = True
        if not found:
            body.remove(el)
    if not found:
        raise RuntimeError(f'Unité {n} introuvable')
    out = W / f'u{n}.docx'; d.save(out); return out


def font(run, size=12, bold=False, color=None):
    run.font.name = 'Times New Roman'; run.font.size = Pt(size); run.bold = bold
    if color:
        run.font.color.rgb = RGBColor(*color)


def head(d, s, size=18):
    p = d.add_paragraph(); p.alignment = WD_ALIGN_PARAGRAPH.CENTER
    font(p.add_run(s), size, True, (192, 0, 0))


def para(d, s, bold=False):
    p = d.add_paragraph(); p.alignment = WD_ALIGN_PARAGRAPH.JUSTIFY
    font(p.add_run(s), 12, bold); return p


# ---------- ANNEXES ----------
a = Document()
head(a, 'ANNEXES — MATHÉMATIQUES T7', 22)
para(a, 'Synthèse des notions étudiées dans les six unités.')
a.add_page_break(); head(a, 'ANNEXE 1 — GLOSSAIRE')
gloss = [
    ('Abscisse', 'première coordonnée d’un point, lue sur l’axe horizontal'),
    ('Aire', 'mesure de la surface d’une figure, en unités carrées'),
    ('Bissectrice', 'demi-droite qui partage un angle en deux angles égaux'),
    ('Centre de gravité', 'point de rencontre des trois médianes d’un triangle'),
    ('Circonférence', 'longueur du contour d’un cercle : C = π × d'),
    ('Distributivité', 'propriété k(a + b) = ka + kb reliant multiplication et addition'),
    ('Effectif', 'nombre de fois où une valeur apparaît dans une série de données'),
    ('Équation', 'égalité contenant une inconnue à déterminer'),
    ('Expression littérale', 'expression contenant une ou plusieurs lettres représentant des nombres'),
    ('Fraction irréductible', 'fraction que l’on ne peut plus simplifier'),
    ('Fréquence', 'quotient de l’effectif d’une valeur par l’effectif total'),
    ('Hauteur', 'droite passant par un sommet du triangle, perpendiculaire au côté opposé'),
    ('Médiane (géométrie)', 'segment reliant un sommet du triangle au milieu du côté opposé'),
    ('Médiatrice', 'droite perpendiculaire à un segment en son milieu'),
    ('Moyenne pondérée', 'moyenne tenant compte des coefficients ou des effectifs'),
    ('Nombre relatif', 'nombre muni d’un signe + ou −'),
    ('Ordonnée', 'deuxième coordonnée d’un point, lue sur l’axe vertical'),
    ('Orthocentre', 'point de rencontre des trois hauteurs d’un triangle'),
    ('Périmètre', 'longueur totale du contour d’une figure'),
    ('Pourcentage', 'fraction de dénominateur 100'),
    ('Probabilité', 'nombre entre 0 et 1 mesurant la chance qu’un événement se produise'),
    ('Puissance', 'produit de facteurs identiques : aⁿ = a × a × … × a, n facteurs'),
    ('Quadrant', 'chacune des quatre régions du plan délimitées par les axes du repère'),
    ('Variable', 'lettre représentant un nombre qui peut changer de valeur'),
    ('Volume', 'mesure de l’espace occupé, en unités cubes ; 1 L = 1 dm³'),
]
for t, v in gloss:
    p = a.add_paragraph()
    font(p.add_run(t + ' : '), 12, True, (31, 78, 121)); font(p.add_run(v + '.'), 12)

a.add_page_break(); head(a, 'ANNEXE 2 — FORMULES ET PROPRIÉTÉS')
rows = [
    ('Notion', 'Formule ou propriété'),
    ('Distributivité', 'k(a + b) = ka + kb ; k(a − b) = ka − kb'),
    ('Puissances', 'aⁿ × aᵐ = aⁿ⁺ᵐ ; (aⁿ)ᵐ = aⁿ×ᵐ ; aⁿ × bⁿ = (ab)ⁿ'),
    ('Règle des signes (produit)', 'mêmes signes → + ; signes contraires → −'),
    ('Proportionnalité', 'y = ax, coefficient a = y ÷ x'),
    ('Angles du triangle', 'somme = 180°'),
    ('Angles complémentaires / supplémentaires', 'somme = 90° / somme = 180°'),
    ('Cercle', 'd = 2r ; C = πd ≈ 3,14 × d'),
    ('Carré', 'P = 4c ; A = c²'),
    ('Rectangle', 'P = 2(L + l) ; A = L × l'),
    ('Parallélogramme', 'A = base × hauteur'),
    ('Triangle', 'A = (base × hauteur) ÷ 2'),
    ('Volumes et contenances', '1 L = 1 dm³ ; 1 mL = 1 cm³ ; 1 m³ = 1 000 L'),
    ('Fréquence', 'effectif ÷ effectif total ; somme des fréquences = 1'),
    ('Angle d’un secteur circulaire', '(effectif ÷ total) × 360°'),
    ('Moyenne pondérée', 'somme des (valeur × coefficient) ÷ somme des coefficients'),
    ('Probabilité', 'cas favorables ÷ cas possibles, entre 0 et 1'),
]
t = a.add_table(rows=0, cols=2); t.style = 'Table Grid'; t.alignment = WD_TABLE_ALIGNMENT.CENTER
for i, row in enumerate(rows):
    c = t.add_row().cells
    for j, s in enumerate(row):
        font(c[j].paragraphs[0].add_run(s), 11, i == 0)

a.add_page_break(); head(a, 'ANNEXE 3 — RÉSUMÉ DES MÉTHODES')
methods = [
    ('Simplifier une fraction', 'Chercher un diviseur commun au numérateur et au dénominateur, diviser les deux, recommencer jusqu’à la forme irréductible.'),
    ('Calculer avec des relatifs', 'Appliquer la règle des signes, opérer sur les distances à zéro, puis contrôler l’ordre de grandeur du résultat.'),
    ('Respecter les priorités', 'Calculer les parenthèses, puis les multiplications et divisions, enfin les additions et soustractions.'),
    ('Développer ou factoriser', 'Repérer le facteur commun ou le facteur devant la parenthèse, appliquer k(a + b) = ka + kb, vérifier par le calcul inverse.'),
    ('Résoudre une équation', 'Isoler l’inconnue en faisant la même opération sur les deux membres, puis vérifier par substitution.'),
    ('Construire un triangle', 'Lire les données, tracer le premier côté, utiliser équerre ou compas selon le triangle, contrôler les propriétés.'),
    ('Tracer une droite remarquable', 'Identifier médiatrice, médiane, hauteur ou bissectrice ; utiliser l’instrument adapté ; vérifier le point de concours.'),
    ('Convertir une grandeur', 'Choisir le tableau adapté (10 pour longueurs, 1 000 pour masses et volumes, 60 pour durées) et déplacer la virgule.'),
    ('Calculer périmètre ou aire d’un assemblage', 'Découper la figure en figures simples, appliquer chaque formule, additionner ou soustraire.'),
    ('Traiter des données', 'Collecter, compter par traits, dresser le tableau des effectifs, calculer les fréquences, représenter par le bon diagramme.'),
    ('Calculer une probabilité', 'Lister les cas possibles (arbre ou tableau si deux étapes), compter les favorables, former le quotient.'),
]
for name, steps in methods:
    p = a.add_paragraph()
    font(p.add_run(name + ' — '), 12, True, (31, 78, 121)); font(p.add_run(steps), 12)

a.add_page_break(); head(a, 'ANNEXE 4 — AUTO-ÉVALUATION')
skills = [
    'Décomposer et composer nombres décimaux et fractions',
    'Fractions équivalentes et forme irréductible',
    'Nombres relatifs et droite graduée',
    'Échelle, pourcentage, taux et rendement',
    'Puissances et leurs propriétés',
    'Additions, soustractions et produits de relatifs',
    'Distributivité, développement et factorisation',
    'Équations du premier degré',
    'Triangles particuliers et leurs constructions',
    'Repérage dans le plan et quadrants',
    'Angles et droites remarquables du triangle',
    'Conversions, périmètres, aires et volumes',
    'Effectifs, fréquences et diagrammes',
    'Moyennes et probabilités',
]
t = a.add_table(rows=1, cols=4); t.style = 'Table Grid'
for i, s in enumerate(['Compétence', 'Acquis', 'En cours', 'À revoir']):
    font(t.rows[0].cells[i].paragraphs[0].add_run(s), 11, True)
for s in skills:
    c = t.add_row().cells
    font(c[0].paragraphs[0].add_run(s), 10)
    for i in range(1, 4):
        font(c[i].paragraphs[0].add_run('☐'), 14)

a.add_page_break(); head(a, 'ANNEXE 5 — INDEX')
para(a, ', '.join(sorted([x[0] for x in gloss], key=str.lower)) + '.')

a.add_page_break(); head(a, 'ANNEXE 6 — ÉVALUATIONS FORMAT EXAMEN')
para(a, 'Six sujets d’examen sur 20 points figurent à la fin des unités Nombre, Opération, Algèbre, Géométrie, Mesure et Traitement de données. Chaque sujet comporte cinq exercices avec corrigé détaillé et barème.')

a.add_page_break(); head(a, 'BIBLIOGRAPHIE ET WEBOGRAPHIE')
para(a, 'Ministère de l’Éducation Nationale de Madagascar, Programme d’études — Classe de T7, section Mathématiques (PE T7).')
para(a, 'Ministère de l’Éducation Nationale de Madagascar, Fascicule de ressources pédagogiques — Mathématiques.')
para(a, 'Collection J-Learn, Manuel de Mathématiques T6, J-Lab Madagascar, édition 2026.')
para(a, 'Collection J-Learn, charte de conception des manuels scolaires, version 18.')

annex_marks = {
    'ANNEXES — MATHÉMATIQUES T7': 'annexes', 'ANNEXE 1 — GLOSSAIRE': 'annexe1',
    'ANNEXE 2 — FORMULES ET PROPRIÉTÉS': 'annexe2', 'ANNEXE 3 — RÉSUMÉ DES MÉTHODES': 'annexe3',
    'ANNEXE 4 — AUTO-ÉVALUATION': 'annexe4', 'ANNEXE 5 — INDEX': 'annexe5',
    'ANNEXE 6 — ÉVALUATIONS FORMAT EXAMEN': 'annexe6', 'BIBLIOGRAPHIE ET WEBOGRAPHIE': 'sources',
}
mark_id = 5000
for paragraph in a.paragraphs:
    if paragraph.text in annex_marks:
        start = OxmlElement('w:bookmarkStart'); start.set(qn('w:id'), str(mark_id)); start.set(qn('w:name'), annex_marks[paragraph.text])
        end = OxmlElement('w:bookmarkEnd'); end.set(qn('w:id'), str(mark_id))
        paragraph._p.insert(0, start); paragraph._p.append(end); mark_id += 1
ann = W / 'annexes.docx'; a.save(ann)

# ---------- COMPOSITION ----------
master = Document(units[0]); composer = Composer(master)
for i in range(2, 7):
    composer.append(Document(stripped(units[i - 1], i)))
composer.append(Document(ann))

# ---------- SOMMAIRE COMPLET ----------
def hyperlink_paragraph(label, anchor, indent=False):
    p = OxmlElement('w:p'); pPr = OxmlElement('w:pPr')
    spacing = OxmlElement('w:spacing'); spacing.set(qn('w:after'), '80'); pPr.append(spacing)
    if indent:
        ind = OxmlElement('w:ind'); ind.set(qn('w:left'), '360'); pPr.append(ind)
    p.append(pPr)
    h = OxmlElement('w:hyperlink'); h.set(qn('w:anchor'), anchor); h.set(qn('w:history'), '1')
    r = OxmlElement('w:r'); rPr = OxmlElement('w:rPr')
    color = OxmlElement('w:color'); color.set(qn('w:val'), '1F4E79')
    u = OxmlElement('w:u'); u.set(qn('w:val'), 'single'); rPr.extend([color, u]); r.append(rPr)
    tx = OxmlElement('w:t'); tx.text = label; r.append(tx); h.append(r); p.append(h)
    return p


def sentence(s, roman):
    if 'RÉVISION' in s:
        return f'Révision de l’unité {roman}'
    if 'EXAMEN' in s:
        return f'Sujet d’examen — unité {roman}'
    out = s.capitalize()
    return out


body_el = master.element.body
paras = list(master.paragraphs)
toc_i = next(i for i, p in enumerate(paras) if p.text == 'SOMMAIRE INTERACTIF')
insert_before = None
for par in paras[toc_i + 1:]:
    if par._p.xpath('.//w:br[@w:type="page"]'):
        insert_before = par._p; break

links = []
for unit_no in range(2, 7):
    links.append((f'Unité {ROMANS[unit_no]} — {NAMES[unit_no]}', f'u{unit_no}', False))
    source = Document(units[unit_no - 1])
    session_titles = [p.text for p in source.paragraphs if re.match(r'^SÉANCE \d+ / \d+ —', p.text)]
    for k, session_title in enumerate(session_titles, 1):
        raw = re.sub(r'^SÉANCE \d+ / \d+ — ', '', session_title)
        links.append((f'Séance {k} — {sentence(raw, ROMANS[unit_no])}', f'u{unit_no}_l{k}', True))
links.extend([
    ('Annexes', 'annexes', False), ('Annexe 1 — Glossaire', 'annexe1', True),
    ('Annexe 2 — Formules et propriétés', 'annexe2', True), ('Annexe 3 — Résumé des méthodes', 'annexe3', True),
    ('Annexe 4 — Auto-évaluation', 'annexe4', True), ('Annexe 5 — Index', 'annexe5', True),
    ('Annexe 6 — Évaluations format examen', 'annexe6', True), ('Bibliographie et webographie', 'sources', False),
])
if insert_before is not None:
    idx = body_el.index(insert_before)
    for label, anchor, ind in links:
        body_el.insert(idx, hyperlink_paragraph(label, anchor, ind)); idx += 1
else:
    raise RuntimeError('Point d’insertion du sommaire introuvable')

out = R / 'livrables' / 'Manuel_Mathematiques_T7_JLearn_V1.docx'
composer.save(out)
print('OK :', out, out.stat().st_size, 'octets')
