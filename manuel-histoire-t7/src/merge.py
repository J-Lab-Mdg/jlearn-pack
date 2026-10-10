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
para(a, 'Synthèse des notions étudiées dans les six unités : repères, vocabulaire et méthodes de la pensée historique.')
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
    ('Histoire orale', 'collecte des témoignages parlés pour reconstituer le passé'),
    ('Personne ressource', 'personne qui a vécu les faits ou en garde la mémoire, interrogée lors d’une enquête orale'),
    ('Préhistoire', 'période allant de l’apparition de l’Homme à la découverte de l’écriture, vers −3 000'),
    ('Paléolithique', 'âge de la pierre taillée (palaios « ancien », lithos « pierre ») : chasse-cueillette, feu, nomadisme'),
    ('Néolithique', 'âge de la pierre polie (neos « nouveau ») : agriculture, élevage, sédentarisation'),
    ('Nomadisme', 'mode de vie fondé sur le déplacement permanent, sans habitat fixe'),
    ('Sédentarisation', 'installation durable dans des villages, liée à l’agriculture'),
    ('Bipédie', 'marche debout sur deux pieds, premier progrès de l’évolution humaine'),
    ('Civilisation', 'ensemble des caractères communs d’une société : espace, organisation politique et sociale, valeurs, économie'),
    ('Mésopotamie', '« pays entre les fleuves » (Tigre et Euphrate), première civilisation, née vers −3 400'),
    ('Pictogramme', 'premier signe d’écriture : un petit dessin représentant une chose'),
    ('Cunéiforme', 'écriture mésopotamienne aux signes en forme de coins, gravés sur l’argile'),
    ('Pharaon', 'roi de l’Égypte antique, à la fois chef politique, religieux et militaire'),
    ('Polythéisme', 'religion à plusieurs dieux ; le monothéisme n’en reconnaît qu’un seul'),
    ('Cité', 'petit État grec regroupant une ville et ses campagnes (polis)'),
    ('Démocratie', 'régime où le pouvoir appartient au peuple (dêmos « peuple », kratos « pouvoir »), né à Athènes'),
    ('Citoyen', 'membre d’une cité ou d’un État, qui possède des droits et des devoirs'),
    ('République', 'régime où l’État est « la chose publique » (res publica) : le pouvoir appartient aux citoyens, non à un seul homme'),
    ('Empire', 'vaste État dirigé par un empereur qui concentre tous les pouvoirs'),
    ('Féodalité', 'organisation du Moyen Âge fondée sur le fief : terre confiée contre fidélité et services'),
    ('Fief', 'terre confiée par un suzerain à son vassal lors de l’hommage'),
    ('Suzerain', 'seigneur qui confie un fief et doit protection à son vassal'),
    ('Vassal', 'homme qui reçoit un fief et doit fidélité, aide militaire et conseil à son suzerain'),
    ('Serf', 'paysan attaché à la terre qu’il cultive'),
    ('Vilain', 'paysan libre, soumis aux redevances et aux corvées'),
    ('Clergé séculier', 'clergé qui vit parmi les fidèles : évêques, curés'),
    ('Clergé régulier', 'clergé qui vit selon une règle dans les monastères : abbés, moines'),
    ('Dîme', 'impôt d’environ un dixième des récoltes versé à l’Église au Moyen Âge'),
    ('Croisades', 'expéditions militaires et religieuses de l’Occident chrétien vers Jérusalem (1096-1270)'),
    ('Islam', 'religion monothéiste fondée au VIIᵉ siècle en Arabie par Mahomet ; livre sacré : le Coran'),
    ('Calife', 'successeur de Mahomet, chef religieux et politique du monde musulman'),
    ('Sunnites et chiites', 'deux branches de l’Islam nées de la querelle de succession de Mahomet au VIIᵉ siècle'),
    ('Austronésiens', 'navigateurs venus des îles d’Asie du Sud-Est, premiers habitants de Madagascar (IIIᵉ-IVᵉ siècle)'),
    ('Vazimba', 'descendants anciens des premiers migrants austronésiens, dans les traditions malgaches'),
    ('Antalaotra', 'commerçants islamisés installés en comptoirs au Nord-Ouest de Madagascar'),
    ('Antemoro', 'groupe du Sud-Est, gardien des manuscrits sorabe'),
    ('Zanamalata', 'enfants des pirates européens et de mères malgaches, influents sur la côte Est'),
    ('Archéologie', 'étude des traces matérielles laissées par les hommes du passé'),
    ('Sorabe', 'la langue malgache écrite en caractères arabes'),
    ('Sikidy', 'géomancie malgache, divination par les graines, héritée du monde arabe'),
    ('Valitanana', 'entraide et solidarité, l’aide rendue « main pour main »'),
    ('Fihavanana', 'lien de parenté, d’amitié et de solidarité qui fonde la paix sociale malgache'),
    ('Clan', 'groupe de familles descendant d’un ancêtre commun, dirigé par un chef de clan'),
    ('Confédération clanique', 'union de plusieurs clans sous l’autorité d’un roitelet'),
    ('Royaume de Madagascar', 'État unifié de la majeure partie de l’île, de Radama Iᵉʳ (1810) à 1896'),
    ('Ethnie', 'peuple possédant sa propre langue et sa propre culture — concept non applicable à Madagascar'),
    ('Tribu', 'groupe uni par un ancêtre commun — concept non applicable à Madagascar'),
    ('Groupe de population', 'ensemble des habitants d’une même région aux coutumes locales : le concept juste pour Madagascar'),
]
for t, v in gloss:
    p = a.add_paragraph()
    font(p.add_run(t + ' : '), 12, True, (31, 78, 121)); font(p.add_run(v + '.'), 12)

a.add_page_break(); head(a, 'ANNEXE 2 — REPÈRES CHRONOLOGIQUES')
rows = [
    ('Date', 'Événement'),
    ('−12 000', 'Fin du Paléolithique, début du Néolithique'),
    ('Vers −3 500 / −3 000', 'Invention de l’écriture en Mésopotamie : début de l’Histoire et de l’Antiquité'),
    ('−3 400 à −2 900', 'Civilisation mésopotamienne (période d’Uruk)'),
    ('−2 700 à −1 100', 'Civilisation égyptienne : Ancien, Moyen et Nouvel Empire'),
    ('−776', 'Premiers Jeux olympiques en Grèce'),
    ('−753', 'Fondation légendaire de Rome par Romulus'),
    ('Vers −500', 'Naissance de la démocratie à Athènes'),
    ('−509 à −27', 'République romaine'),
    ('27 à 476', 'Empire romain'),
    ('476', 'Chute de l’Empire romain d’Occident : fin de l’Antiquité, début du Moyen-Âge'),
    ('IIIᵉ-IVᵉ siècle', 'Arrivée des Austronésiens à Madagascar, ancêtres des Vazimba'),
    ('622', 'Hégire : point de départ du calendrier musulman'),
    ('632', 'Mort de Mahomet ; début des conquêtes des quatre premiers califes'),
    ('661-750', 'Califes omeyyades : l’empire musulman de l’Espagne à l’Indus'),
    ('VIIᵉ-VIIIᵉ siècle', 'Vagues africaines, indonésiennes et malaisiennes vers Madagascar'),
    ('IXᵉ siècle', 'Arrivée des islamisés : Antalaotra, Iharana, Zafiraminia, Antemoro'),
    ('1096-1270', 'Les croisades'),
    ('1337-1453', 'Guerre de Cent Ans : la fin de la prospérité médiévale'),
    ('XVᵉ siècle', 'Arrivée des Européens : Diégo-Suarez (Portugais), puis Fort-Dauphin (Français)'),
    ('1492', 'Arrivée de Christophe Colomb en Amérique : fin du Moyen-Âge'),
    ('1500-1810', 'Les royaumes malgaches : sakalava, betsimisaraka, betsileo, merina…'),
    ('Vers 1787-1810', 'Règne d’Andrianampoinimerina depuis Ambohimanga'),
    ('1810-1896', 'Le Royaume de Madagascar, à partir de Radama Iᵉʳ'),
    ('1818 / 1823', 'Premières écoles missionnaires ; adoption de l’alphabet latin pour le malgache'),
    ('XIXᵉ siècle', 'Arrivée des Indiens et Indopakistanais à Madagascar'),
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
    'Monter un projet d’Histoire orale en suivant ses cinq étapes',
    'Situer sur une frise les périodes de la Préhistoire et de l’Histoire',
    'Caractériser le Paléolithique et le Néolithique',
    'Classifier les étapes de l’évolution de l’Homme',
    'Délimiter l’Antiquité dans le temps et dans l’espace',
    'Définir la civilisation et caractériser la Mésopotamie',
    'Expliquer le rôle du Nil et le pouvoir du pharaon',
    'Comparer Sparte et Athènes ; définir la démocratie',
    'Retracer les trois régimes de l’histoire romaine',
    'Démontrer l’héritage antique à Madagascar',
    'Délimiter le Moyen-Âge et caractériser ses étapes',
    'Présenter le fonctionnement du système féodal',
    'Faire ressortir la place de l’Église médiévale',
    'Expliquer la naissance de l’Islam et ses cinq piliers',
    'Déterminer les étapes des conquêtes musulmanes',
    'Analyser la division de l’Islam au VIIᵉ siècle',
    'Élaborer la frise des vagues de migration vers Madagascar',
    'Localiser les zones d’implantation des premiers Malgaches',
    'Expliquer les apports austronésiens, africains, arabes et occidentaux',
    'Retracer l’évolution politique du clan au Royaume de Madagascar',
    'Distinguer ethnie, tribu et groupe de population',
    'Promouvoir l’unité dans la diversité du peuple malgache',
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
para(a, 'Six sujets d’examen sur 20 points figurent à la fin des unités. Chaque sujet comporte cinq exercices avec corrigé détaillé et barème : questions de cours, frise ou repères chronologiques, étude de document et réflexion organisée, dans l’esprit des évaluations du collège.')

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
