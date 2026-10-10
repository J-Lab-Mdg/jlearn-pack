# Merge final — Manuel Histoire T7 (4 unités + annexes + sommaire complet)
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
N_UNITS = 6
units = [R / f'Manuel_Histoire_T7_UNITE{i}.docx' for i in range(1, N_UNITS + 1)]
ROMANS = {1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V', 6: 'VI'}
NAMES = {1: 'L’Histoire orale et les grandes périodes de la Préhistoire', 2: 'L’Antiquité', 3: 'Le Moyen-Âge', 4: 'Les origines du peuple malgache', 5: 'Le mode de vie des premiers Malgaches', 6: 'L’évolution de l’organisation politique à Madagascar'}


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
head(a, 'ANNEXES — HISTOIRE T7', 22)
para(a, 'Synthèse des notions étudiées dans les quatre unités : repères, vocabulaire et méthodes de la pensée historique.')
a.add_page_break(); head(a, 'ANNEXE 1 — GLOSSAIRE')
gloss = [
    ('Histoire', 'discipline scientifique qui reconstitue et explique le passé de l’humanité et des sociétés humaines à partir de sources'),
    ('Chronologie', 'science des temps ; liste d’événements classés suivant leur date, généralement du plus ancien au plus récent'),
    ('Frise chronologique', 'ligne graduée sur laquelle on place les événements dans l’ordre du temps'),
    ('Décennie', 'période de dix ans'),
    ('Siècle', 'période de cent ans'),
    ('Millénaire', 'période de mille ans'),
    ('Calendrier grégorien', 'calendrier dont le point de départ est l’an 1, naissance de Jésus-Christ'),
    ('Hégire', 'départ du prophète Mahomet vers Médine en 622, point de départ du calendrier musulman'),
    ('Source historique', 'toute trace du passé qui permet de reconstituer l’Histoire : objet, écrit, image, témoignage…'),
    ('Source matérielle', 'source qui se présente sous forme d’objet : monnaie, vase, bateau, outil…'),
    ('Source figurative', 'source représentée par une gravure, une sculpture, un dessin ou une caricature'),
    ('Vestige', 'reste d’une civilisation, d’un peuple ou d’une époque : fondations d’une ancienne cité, outils…'),
    ('Source écrite', 'document rédigé : manuscrit, archive, journal, lettre…'),
    ('Source orale', 'témoignage ou tradition transmis par la parole'),
    ('Source audiovisuelle', 'source récente formée de sons et d’images : musique, bande sonore, film…'),
    ('Démarche historique', 'méthode du travail de l’historien : rechercher, classer, vérifier, comprendre puis interpréter les sources'),
    ('République', 'régime politique dans lequel le pouvoir est exercé par des dirigeants élus pour un temps limité'),
    ('Constitution', 'loi fondamentale qui organise les pouvoirs d’un État'),
    ('Institution', 'organe qui exerce un pouvoir de l’État : présidence, gouvernement, assemblée, tribunaux…'),
    ('Pouvoir exécutif', 'pouvoir d’appliquer les lois, exercé par le chef de l’État et le gouvernement'),
    ('Pouvoir législatif', 'pouvoir de voter les lois, exercé par les députés et les sénateurs'),
    ('Pouvoir judiciaire', 'pouvoir de juger, exercé par les tribunaux et les cours'),
    ('Devise nationale', 'formule courte qui exprime l’idéal d’un État, inscrite sur ses emblèmes'),
    ('Hymne national', 'chant officiel d’un pays — pour Madagascar : Ry tanindrazanay malala ô !'),
    ('Malgachisation', 'politique de la Deuxième République plaçant la langue et la culture malgaches au centre de l’enseignement'),
    ('Boky mena', 'le « livre rouge », charte de la révolution socialiste malgache de la Deuxième République'),
    ('Ajustement structurel', 'réformes économiques imposées à l’État pour rééquilibrer ses finances, appliquées sous la Troisième République'),
    ('Mondialisation', 'intégration croissante des économies et des cultures du monde entier'),
    ('Relation bilatérale', 'relation entre deux pays'),
    ('Relation multilatérale', 'relation entre plusieurs pays, souvent au sein d’une organisation'),
    ('Diplomatie', 'ensemble des relations officielles qu’un État entretient avec les autres États'),
    ('Organisation régionale', 'groupement de pays d’une même région pour coopérer : UA, COMESA, SADC, COI…'),
    ('Union Africaine (UA)', 'organisation de tous les États africains, qui succède en 2002 à l’OUA fondée en 1963'),
    ('COMESA', 'marché commun de l’Afrique orientale et australe, zone de libre-échange créée en 1994'),
    ('SADC', 'communauté de développement de l’Afrique australe, que Madagascar rejoint en 2005'),
    ('Commission de l’océan Indien (COI)', 'organisation des îles de l’océan Indien créée en 1982, que Madagascar rejoint en 1986'),
    ('Patrimoine', 'ensemble des biens hérités du passé que la nation doit transmettre aux générations futures'),
    ('Patrimoine matériel', 'patrimoine que l’on peut toucher : édifices, tombeaux et palais royaux, temples, places historiques, statues…'),
    ('Patrimoine immatériel', 'patrimoine sans forme physique : traditions, arts, rituels, pratiques sociales…'),
    ('Richesses naturelles', 'ressources offertes par la nature : faune, flore, eaux, ressources énergétiques, fossiles…'),
    ('Aire protégée', 'territoire délimité où la nature est protégée par la loi'),
    ('Reboisement', 'action de replanter des arbres pour reconstituer les forêts'),
    ('Patriotisme', 'amour et service de la patrie'),
    ('Union nationale', 'solidarité de tous les citoyens au-dessus des divisions politiques ou régionales'),
]
for t, v in gloss:
    p = a.add_paragraph()
    font(p.add_run(t + ' : '), 12, True, (31, 78, 121)); font(p.add_run(v + '.'), 12)

a.add_page_break(); head(a, 'ANNEXE 2 — REPÈRES CHRONOLOGIQUES')
rows = [
    ('Date', 'Événement'),
    ('An 1', 'Point de départ du calendrier grégorien (naissance de Jésus-Christ)'),
    ('622', 'Hégire : point de départ du calendrier musulman'),
    ('14 octobre 1958', 'Proclamation de la Première République (Repoblika Malagasy)'),
    ('26 juin 1960', 'Indépendance de Madagascar'),
    ('1958-1972', 'Première République — président Philibert Tsiranana'),
    ('Mai 1972', 'Mouvement populaire : fin de la Première République'),
    ('1972-1975', 'Transition : Gabriel Ramanantsoa, Richard Ratsimandrava, Gilles Andriamahazo'),
    ('11 février 1975', 'Assassinat du colonel Richard Ratsimandrava, six jours après sa prise de fonction'),
    ('30 décembre 1975', 'Deuxième République (Repoblika Demokratika Malagasy) — Didier Ratsiraka, « boky mena »'),
    ('1991', 'Grandes manifestations populaires : fin de la Deuxième République'),
    ('1993', 'Troisième République — président Albert Zafy'),
    ('1997-2002', 'Retour de Didier Ratsiraka à la présidence'),
    ('2002', 'Crise post-électorale ; Marc Ravalomanana président (2002-2009)'),
    ('2009-2013', 'Crise de 2009 et période de transition — Andry Rajoelina'),
    ('17 novembre 2010', 'Référendum constitutionnel : naissance de la Quatrième République'),
    ('2014-2018', 'Présidence de Hery Rajaonarimampianina'),
    ('Depuis janvier 2019', 'Présidence d’Andry Nirina Rajoelina'),
    ('1963', 'Fondation de l’OUA ; Madagascar membre fondateur'),
    ('1982 / 1986', 'Création de la COI ; adhésion de Madagascar'),
    ('1994', 'Création du COMESA, dont Madagascar est membre'),
    ('2002', 'L’Union Africaine succède à l’OUA'),
    ('2005', 'Adhésion de Madagascar à la SADC'),
]
t = a.add_table(rows=0, cols=2); t.style = 'Table Grid'; t.alignment = WD_TABLE_ALIGNMENT.CENTER
for i, row in enumerate(rows):
    c = t.add_row().cells
    for j, s in enumerate(row):
        font(c[j].paragraphs[0].add_run(s), 11, i == 0)

a.add_page_break(); head(a, 'ANNEXE 3 — RÉSUMÉ DES MÉTHODES')
methods = [
    ('Lire une frise chronologique', 'Repérer l’échelle (décennie, siècle…), lire les événements de gauche à droite, calculer les durées par soustraction des dates.'),
    ('Construire une frise chronologique', 'Choisir une échelle régulière, tracer la ligne du temps, placer les dates dans l’ordre, écrire un titre.'),
    ('Analyser une source historique', 'Identifier sa nature (matérielle, écrite, orale…), son auteur, sa date et son lieu ; décrire ce qu’elle montre ; dire ce qu’elle apprend.'),
    ('Critiquer une source', 'Se demander qui l’a produite, pourquoi, et si elle est fiable ; croiser toujours plusieurs sources avant de conclure.'),
    ('Appliquer la démarche historique', 'Rechercher et classer les sources, les contrôler et les vérifier, en extraire les informations, puis les analyser et les interpréter.'),
    ('Situer un fait dans le temps et l’espace', 'Répondre aux deux questions de l’historien : quand ? (date, période) et où ? (territoire, lieu, carte).'),
    ('Comparer deux périodes', 'Dégager pour chacune les mêmes critères (institutions, politique, société), puis relever les continuités et les changements.'),
    ('Expliquer causes et conséquences', 'Distinguer les causes (ce qui a produit le fait) des conséquences (ce qu’il a entraîné), sur les plans politique, économique et social.'),
    ('Lire une carte historique', 'Lire le titre et la légende, repérer l’espace concerné, localiser les pays ou lieux demandés.'),
    ('Rédiger une réponse organisée', 'Lire la question, mobiliser les connaissances exactes (dates, noms, faits), rédiger par phrases complètes, conclure.'),
    ('Préparer un exposé ou un mini-projet', 'Choisir le sujet, rassembler les sources, organiser un plan, présenter clairement, répondre aux questions.'),
    ('Mémoriser les repères', 'Associer chaque date à son événement et à un personnage, réciter la frise, se tester régulièrement.'),
]
for name, steps in methods:
    p = a.add_paragraph()
    font(p.add_run(name + ' — '), 12, True, (31, 78, 121)); font(p.add_run(steps), 12)

a.add_page_break(); head(a, 'ANNEXE 4 — AUTO-ÉVALUATION')
skills = [
    'Définir l’Histoire et son objet d’étude',
    'Expliquer l’utilité et le rôle de l’Histoire',
    'Appliquer la démarche historique',
    'Utiliser la chronologie : temps, unités de mesure, calendriers',
    'Situer un fait dans le temps et dans l’espace',
    'Distinguer et caractériser les sources historiques',
    'Caractériser la Première République et la transition de 1972-1975',
    'Caractériser la Deuxième République',
    'Caractériser la Troisième République',
    'Caractériser la Quatrième République',
    'Décrire les institutions des Républiques successives',
    'Comparer les politiques et principes de base des Républiques',
    'Expliquer les facteurs du changement fréquent de dirigeants',
    'Analyser l’impact du changement fréquent de dirigeants',
    'Décrire les formes de relations extérieures de Madagascar',
    'Présenter l’UA, le COMESA, la SADC et la COI',
    'Interpréter l’impact de l’adhésion aux organisations régionales',
    'Catégoriser les patrimoines matériels et immatériels',
    'Classer les richesses naturelles nationales',
    'Proposer des actions de protection du patrimoine et de la nature',
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

a.add_page_break(); head(a, 'ANNEXE 6 — ÉVALUATIONS')
para(a, 'Quatre sujets d’examen sur 20 points figurent à la fin des unités. Chaque sujet comporte cinq exercices avec corrigé détaillé et barème : questions de cours, frise ou repères chronologiques, étude de document et réflexion organisée, dans l’esprit des évaluations du collège.')

a.add_page_break(); head(a, 'BIBLIOGRAPHIE ET WEBOGRAPHIE')
para(a, 'Ministère de l’Éducation Nationale de Madagascar, Programme d’études — Classe de T7, section Histoire (PE T7).')
para(a, 'Collection J-Learn, Manuel Tantara T7 (édition en langue malgache), J-Lab Madagascar, édition 2026.')
para(a, 'Collection J-Learn, charte de conception des manuels scolaires, version 18.')
para(a, 'Plateforme officielle des programmes éducatifs : plateforme.education.mg.')

annex_marks = {
    'ANNEXES — HISTOIRE T7': 'annexes', 'ANNEXE 1 — GLOSSAIRE': 'annexe1',
    'ANNEXE 2 — REPÈRES CHRONOLOGIQUES': 'annexe2', 'ANNEXE 3 — RÉSUMÉ DES MÉTHODES': 'annexe3',
    'ANNEXE 4 — AUTO-ÉVALUATION': 'annexe4', 'ANNEXE 5 — INDEX': 'annexe5',
    'ANNEXE 6 — ÉVALUATIONS': 'annexe6', 'BIBLIOGRAPHIE ET WEBOGRAPHIE': 'sources',
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
for i in range(2, N_UNITS + 1):
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
    return s.capitalize()


body_el = master.element.body
paras = list(master.paragraphs)
toc_i = next(i for i, p in enumerate(paras) if p.text == 'SOMMAIRE INTERACTIF')
insert_before = None
for par in paras[toc_i + 1:]:
    if par._p.xpath('.//w:br[@w:type="page"]'):
        insert_before = par._p; break

links = []
for unit_no in range(2, N_UNITS + 1):
    links.append((f'Unité {ROMANS[unit_no]} — {NAMES[unit_no]}', f'u{unit_no}', False))
    source = Document(units[unit_no - 1])
    session_titles = [p.text for p in source.paragraphs if re.match(r'^SÉANCE \d+ / \d+ —', p.text)]
    for k, session_title in enumerate(session_titles, 1):
        raw = re.sub(r'^SÉANCE \d+ / \d+ — ', '', session_title)
        links.append((f'Séance {k} — {sentence(raw, ROMANS[unit_no])}', f'u{unit_no}_l{k}', True))
links.extend([
    ('Annexes', 'annexes', False), ('Annexe 1 — Glossaire', 'annexe1', True),
    ('Annexe 2 — Repères chronologiques', 'annexe2', True), ('Annexe 3 — Résumé des méthodes', 'annexe3', True),
    ('Annexe 4 — Auto-évaluation', 'annexe4', True), ('Annexe 5 — Index', 'annexe5', True),
    ('Annexe 6 — Évaluations', 'annexe6', True), ('Bibliographie et webographie', 'sources', False),
])
if insert_before is not None:
    idx = body_el.index(insert_before)
    for label, anchor, ind in links:
        body_el.insert(idx, hyperlink_paragraph(label, anchor, ind)); idx += 1
else:
    raise RuntimeError('Point d’insertion du sommaire introuvable')

out = R / 'livrables' / 'Manuel_Histoire_T7_JLearn_V1.docx'
composer.save(out)
print('OK :', out, out.stat().st_size, 'octets')
