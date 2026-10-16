# Merge final — Manuel Histoire T9 (5 unités + annexes + sommaire complet)
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
N_UNITS = 5
units = [R / f'Manuel_Histoire_T9_UNITE{i}.docx' for i in range(1, N_UNITS + 1)]
ROMANS = {1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V', 6: 'VI', 7: 'VII'}
NAMES = {1: 'L’Histoire orale', 2: 'Le monde depuis 1914', 3: 'La décolonisation', 4: 'Madagascar sous les Républiques', 5: 'Les commémorations et les célébrations des mémoires collectives'}


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
head(a, 'ANNEXES — HISTOIRE T8', 22)
para(a, 'Synthèse des notions étudiées dans les sept unités : repères, vocabulaire et méthodes de la pensée historique.')
a.add_page_break(); head(a, 'ANNEXE 1 — GLOSSAIRE')
gloss = [
    ('Histoire orale', 'collecte des témoignages parlés pour reconstituer le passé'),
    ('Enquête orale', 'collecte d’informations historiques auprès de témoins, par l’entretien'),
    ('Témoin', 'personne qui a vécu les faits ou en garde la mémoire'),
    ('Empathie', 'capacité à se mettre à la place du témoin et à comprendre ses émotions'),
    ('Problématique', 'question de recherche qui guide toute l’enquête'),
    ('Grille d’entretien', 'liste ordonnée des questions préparées pour l’entretien'),
    ('Retranscription', 'écriture fidèle des paroles du témoin, sans ajout ni correction'),
    ('Recoupement', 'confrontation d’un témoignage avec d’autres sources pour le vérifier'),
    ('Temps modernes', 'période de l’Histoire comprise entre 1492 (Colomb en Amérique) et 1789 (Révolution française)'),
    ('Grandes découvertes', 'expéditions maritimes des XVᵉ et XVIᵉ siècles par lesquelles les Européens explorent les océans'),
    ('Caravelle', 'navire maniable des Grandes découvertes, capable de remonter le vent'),
    ('Astrolabe', 'instrument de navigation qui permet de mesurer la latitude'),
    ('Comptoir', 'escale commerciale fortifiée établie sur une côte étrangère'),
    ('Empire colonial', 'ensemble des territoires conquis et dominés par une puissance'),
    ('Économie de plantation', 'grands domaines des colonies d’Amérique produisant sucre, coton ou tabac pour l’Europe'),
    ('Commerce triangulaire', 'circuit Europe-Afrique-Amérique fondé sur la traite des êtres humains'),
    ('Traite des Noirs', 'déportation massive d’Africains réduits en esclavage vers l’Amérique'),
    ('Renaissance', 'renouveau des arts, des lettres et des sciences aux XVᵉ-XVIᵉ siècles, inspiré de l’Antiquité'),
    ('Humanisme', 'courant de pensée qui place l’Homme et son intelligence au centre de la réflexion'),
    ('Réforme', 'mouvement religieux du XVIᵉ siècle qui conteste l’Église catholique et fonde le protestantisme'),
    ('Indulgences', '« pardons » vendus par l’Église, dénoncés par Luther en 1517'),
    ('Protestantisme', 'ensemble des Églises chrétiennes issues de la Réforme de Luther et de Calvin'),
    ('Anglicanisme', 'Église d’Angleterre fondée par Henri VIII après sa rupture avec le pape'),
    ('Contre-réforme', 'réponse de l’Église catholique à la Réforme : discipline restaurée, reconquête des fidèles'),
    ('Époque contemporaine', 'période de l’Histoire allant de 1789 à nos jours'),
    ('Ancien Régime', 'organisation de l’Europe avant 1789 : trois ordres, monarchie absolue, régime seigneurial'),
    ('Trois ordres', 'division de la société d’Ancien Régime : clergé, noblesse, tiers état'),
    ('Privilèges', 'avantages réservés au clergé et à la noblesse, abolis en août 1789'),
    ('Monarchie absolue', 'régime où le roi concentre tous les pouvoirs'),
    ('Parlementarisme', 'régime anglais où le roi partage le pouvoir avec un Parlement qui vote lois et impôts'),
    ('Lumières', 'mouvement intellectuel du XVIIIᵉ siècle qui veut éclairer les hommes par la raison et la science'),
    ('Encyclopédie', 'dictionnaire des savoirs dirigé par Diderot, diffuseur des idées des Lumières'),
    ('Séparation des pouvoirs', 'idée de Montesquieu : confier à des organes distincts les pouvoirs de légiférer, d’exécuter et de juger'),
    ('Déclaration des droits de l’Homme et du citoyen', 'texte fondateur de 1789 : les hommes naissent et demeurent libres et égaux en droits'),
    ('Révolution industrielle', 'transformation de l’économie par les machines : 1ʳᵉ (charbon, vapeur), 2ᵉ (pétrole, électricité)'),
    ('Taylorisme', 'organisation du travail qui chronomètre chaque geste de l’ouvrier'),
    ('Fordisme', 'organisation du travail à la chaîne, sur tapis roulant, inventée chez Ford'),
    ('Conférence de Berlin', 'réunion de 1885 qui fixe les règles du partage de l’Afrique entre puissances européennes'),
    ('Convention de Zanzibar', 'accord de 1890 : le Royaume-Uni reconnaît Madagascar à la France en échange de Zanzibar'),
    ('Mission civilisatrice', 'idéologie invoquée par Jules Ferry pour justifier la colonisation'),
    ('Dynastie', 'famille régnante qui se transmet le pouvoir'),
    ('Caste', 'groupe social héréditaire que l’on ne peut pas quitter'),
    ('Andriana', 'caste des nobles dans la société merina'),
    ('Hova', 'caste des hommes libres dans la société merina'),
    ('Andevo', 'caste des non-libres dans les sociétés malgaches anciennes'),
    ('Kabary', 'art oratoire malgache des grandes occasions, inscrit au patrimoine de l’humanité en 2021'),
    ('Foloalindahy', '« les cent mille hommes » : l’armée permanente créée par Radama Iᵉʳ'),
    ('Oligarchie', 'gouvernement d’un petit nombre — à Madagascar, celui des grandes familles hova après 1863'),
    ('Code des 305 articles', 'recueil de 1881 rassemblant tout le droit du Royaume de Madagascar'),
    ('Tantara ny Andriana', 'recueil des traditions orales de l’Imerina noté par le R.P. Callet — source majeure'),
    ('Charte Lambert', 'document de 1855 promettant d’immenses privilèges économiques au Français Joseph Lambert'),
    ('Colonie', 'territoire conquis, administré et exploité par une puissance étrangère'),
    ('Gouverneur général', 'chef de la colonie, concentrant les pouvoirs civils et militaires'),
    ('Auxiliaires', 'Malgaches employés par l’administration coloniale : interprètes, commis, gardes'),
    ('Code de l’indigénat', 'régime de lois spécial appliqué aux colonisés, avec punitions sans tribunal'),
    ('Pacte colonial', 'règle réservant la production et le commerce de la colonie à la métropole'),
    ('Capitation', 'impôt payé par chaque homme adulte, en argent, sous la colonisation'),
    ('Prestations', 'journées de travail obligatoires et gratuites dues à l’administration coloniale'),
    ('Économie de traite', 'échange inégal : matières premières à bas prix contre produits fabriqués au prix fort'),
    ('SMOTIG', 'Service de la Main-d’Œuvre pour les Travaux d’Intérêt Général (1926), travail forcé déguisé'),
    ('Menalamba', '« les lamba rouges » : insurrection contre la présence étrangère (fin 1895-1898)'),
    ('Sadiavahy', 'mouvements de résistance du sud et de l’ouest (1904-1905 et 1914-1917)'),
    ('VVS', 'Vy Vato Sakelika : société secrète d’intellectuels pour l’égalité de droits (1913-1915)'),
    ('Nationalisme', 'mouvement qui défend les droits et l’indépendance de la nation'),
    ('Émancipation', 'libération de la domination coloniale — objectif des mouvements de 1947'),
    ('Loi-cadre', 'loi de 1956 accordant le suffrage universel et un gouvernement local malgache'),
    ('Référendum', 'vote direct du peuple sur une question — en 1958, sur la Communauté française'),
    ('Indépendance', 'souveraineté complète d’un État — pour Madagascar, le 26 juin 1960'),
    ('Patrimoine culturel', 'ensemble des biens hérités du passé, reconnus et à transmettre'),
    ('Patrimoine matériel', 'biens concrets : monuments, sites, paysages construits, œuvres d’art, documents'),
    ('Patrimoine immatériel', 'pratiques vivantes : traditions orales, spectacles, rituels, fêtes, savoir-faire'),
    ('Mémoire collective', 'souvenir commun qu’une nation garde de son passé et qui fonde son identité'),
    ('Sorabe', 'manuscrits malgaches anciens écrits en caractères arabes'),
    ('Aloalo', 'sculptures funéraires du pays mahafaly, œuvres d’art du patrimoine malgache'),
    ('Hiragasy', 'art du spectacle des Hautes Terres : chant, danse et kabary mêlés'),
]
for t, v in gloss:
    p = a.add_paragraph()
    font(p.add_run(t + ' : '), 12, True, (31, 78, 121)); font(p.add_run(v + '.'), 12)

a.add_page_break(); head(a, 'ANNEXE 2 — REPÈRES CHRONOLOGIQUES')
rows = [
    ('Date', 'Événement'),
    ('1488', 'Bartolomeu Diaz double le cap de Bonne-Espérance'),
    ('1492', 'Christophe Colomb arrive en Amérique : début des Temps modernes'),
    ('1498', 'Vasco de Gama atteint Calicut : la route des Indes est ouverte'),
    ('1500', 'Diégo Diaz aborde Madagascar ; Vespucci explore le Nouveau Monde'),
    ('1517', 'Luther publie ses thèses : début de la Réforme'),
    ('1519-1522', 'L’expédition de Magellan réalise le premier tour du monde'),
    ('1643-1674', 'Comptoir français de Fort-Dauphin'),
    ('Mars 1774', 'Beniowski s’installe à la baie d’Antongil'),
    ('14 juillet 1789', 'Prise de la Bastille : début de la Révolution française et de l’époque contemporaine'),
    ('1792', 'Proclamation de la République en France'),
    ('Mi-XVIIIᵉ – mi-XIXᵉ', 'Première révolution industrielle (Grande-Bretagne : charbon, vapeur)'),
    ('1810-1828', 'Règne de Radama Iᵉʳ : création du Royaume de Madagascar'),
    ('1817 et 1820', 'Traités anglo-merina : abolition de la traite contre aide anglaise'),
    ('1828-1861', 'Règne de Ranavalona Iʳᵉ'),
    ('1850-1914', 'Deuxième révolution industrielle (pétrole, électricité)'),
    ('1855', 'La charte Lambert est signée'),
    ('1861-1863', 'Règne de Radama II ; puis Rasoherina (1863-1868)'),
    ('1869', 'Le protestantisme devient religion d’État (Ranavalona II, 1868-1883)'),
    ('1881', 'Code des 305 articles'),
    ('1883-1896', 'Règne de Ranavalona III, dernière souveraine'),
    ('1885', 'Conférence de Berlin : règles du partage de l’Afrique'),
    ('1890', 'Convention de Zanzibar : Madagascar reconnu à la France'),
    ('1895', 'Guerre franco-hova ; prise d’Antananarivo le 30 septembre'),
    ('1896', 'Madagascar colonie française ; insurrection des Menalamba (fin 1895-1898)'),
    ('1904-05 / 1914-17', 'Mouvements Sadiavahy'),
    ('1913-1915', 'La VVS, société secrète pour l’égalité de droits'),
    ('1919-1930', 'Mouvement de Jean Ralaimongo'),
    ('1926', 'Création du SMOTIG'),
    ('29 mars 1947', 'Insurrection nationale, durement réprimée'),
    ('1956', 'Loi-cadre : suffrage universel et gouvernement local malgache'),
    ('14 octobre 1958', 'Proclamation de la République malgache après le référendum'),
    ('26 juin 1960', 'Indépendance de Madagascar'),
    ('2001 / 2021', 'Ambohimanga puis le kabary malgache classés par l’UNESCO'),
]
t = a.add_table(rows=0, cols=2); t.style = 'Table Grid'; t.alignment = WD_TABLE_ALIGNMENT.CENTER
for i, row in enumerate(rows):
    c = t.add_row().cells
    for j, s in enumerate(row):
        font(c[j].paragraphs[0].add_run(s), 11, i == 0)

a.add_page_break(); head(a, 'ANNEXE 3 — RÉSUMÉ DES MÉTHODES')
methods = [
    ('Mener un entretien d’enquête orale', 'Préparer thème, objet et questions ; garder le contact visuel, faire preuve d’empathie, poser une seule question à la fois, laisser raconter, recadrer poliment.'),
    ('Produire une source orale', 'Poser la problématique, bâtir la grille, mener l’entretien, retranscrire fidèlement, analyser, recouper avec d’autres sources, constituer le dossier.'),
    ('Lire une frise chronologique', 'Repérer l’échelle (décennie, siècle…), lire les événements de gauche à droite, calculer les durées par soustraction des dates.'),
    ('Construire une frise chronologique', 'Choisir une échelle régulière, tracer la ligne du temps, placer les dates dans l’ordre, écrire un titre.'),
    ('Analyser une source historique', 'Identifier sa nature (matérielle, écrite, orale…), son auteur, sa date et son lieu ; décrire ce qu’elle montre ; dire ce qu’elle apprend.'),
    ('Critiquer une source', 'Se demander qui l’a produite, pourquoi, et si elle est fiable ; croiser toujours plusieurs sources avant de conclure.'),
    ('Analyser une caricature', 'Identifier l’auteur et la date, repérer les symboles, dégager le message, puis le confronter aux faits établis.'),
    ('Situer un fait dans le temps et l’espace', 'Répondre aux deux questions de l’historien : quand ? (date, période) et où ? (territoire, lieu, carte).'),
    ('Comparer deux périodes ou deux systèmes', 'Dégager pour chacun les mêmes critères (économie, société, politique), puis relever les continuités et les changements.'),
    ('Expliquer causes et conséquences', 'Distinguer les causes (internes/externes, ce qui a produit le fait) des conséquences (ce qu’il a entraîné), sur les plans politique, économique et social.'),
    ('Lire une carte historique', 'Lire le titre et la légende, repérer l’espace concerné, localiser les pays ou lieux demandés.'),
    ('Rédiger une réponse organisée', 'Lire la question, mobiliser les connaissances exactes (dates, noms, faits), rédiger par phrases complètes, conclure.'),
    ('Mémoriser les repères', 'Associer chaque date à son événement et à un personnage, réciter la frise, se tester régulièrement.'),
]
for name, steps in methods:
    p = a.add_paragraph()
    font(p.add_run(name + ' — '), 12, True, (31, 78, 121)); font(p.add_run(steps), 12)

a.add_page_break(); head(a, 'ANNEXE 4 — AUTO-ÉVALUATION')
skills = [
    'Mener une enquête orale en respectant les techniques de l’entretien',
    'Produire une source orale : retranscrire, analyser, recouper, présenter',
    'Délimiter les Temps modernes et citer leurs trois grands mouvements',
    'Expliquer les facteurs des Grandes découvertes et présenter les explorateurs',
    'Analyser les conséquences des découvertes et le commerce triangulaire',
    'Caractériser la Renaissance et expliquer la Réforme',
    'Présenter les Temps modernes à Madagascar (Diégo Diaz, comptoirs, Beniowski)',
    'Délimiter l’époque contemporaine et caractériser l’Ancien Régime',
    'Associer chaque savant et philosophe des Lumières à son apport',
    'Raconter 1789 et la formation des États-Unis',
    'Comparer les deux révolutions industrielles',
    'Expliquer le partage colonial et la convention de Zanzibar',
    'Situer les royaumes malgaches du XVᵉ au XIXᵉ siècle sur la carte',
    'Décrire l’organisation sociale, économique et politique des royaumes',
    'Réciter la succession des souverains du Royaume de Madagascar',
    'Expliquer l’œuvre de Radama Iᵉʳ : traités, armée, écoles, expansion',
    'Expliquer l’oligarchie merina et le code des 305 articles',
    'Classer les causes internes et externes de la colonisation',
    'Décrire l’administration coloniale et ses instruments d’exploitation',
    'Analyser le système économique colonial et une caricature d’époque',
    'Classer les mouvements nationalistes en trois vagues',
    'Raconter la marche vers l’indépendance (1947-1960)',
    'Distinguer patrimoine culturel matériel et immatériel',
    'Expliquer la chaîne de sauvegarde des patrimoines historiques',
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
para(a, 'Sept sujets d’examen sur 20 points figurent à la fin des unités. Chaque sujet comporte cinq exercices avec corrigé détaillé et barème : questions de cours, frise ou repères chronologiques, étude de document et réflexion organisée, dans l’esprit des évaluations du collège.')

a.add_page_break(); head(a, 'BIBLIOGRAPHIE ET WEBOGRAPHIE')
para(a, 'Ministère de l’Éducation Nationale de Madagascar, Programme d’études — Classe de T8, section Histoire (PE T8).')
para(a, 'Collection J-Learn, Manuel Tantara T8 (édition en langue malgache), J-Lab Madagascar, édition 2026.')
para(a, 'Collection J-Learn, charte de conception des manuels scolaires, version 18.')
para(a, 'Plateforme officielle des programmes éducatifs : plateforme.education.mg.')

annex_marks = {
    'ANNEXES — HISTOIRE T8': 'annexes', 'ANNEXE 1 — GLOSSAIRE': 'annexe1',
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

out = R / 'livrables' / 'Manuel_Histoire_T9_JLearn_V1.docx'
composer.save(out)
print('OK :', out, out.stat().st_size, 'octets')
