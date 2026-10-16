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
head(a, 'ANNEXES — HISTOIRE T9', 22)
para(a, 'Synthèse des notions étudiées dans les cinq unités : repères, vocabulaire et méthodes de la pensée historique.')
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
    ('Tertiarisation', 'part croissante des emplois de services dans l’économie'),
    ('Société de consommation', 'société organisée autour de la consommation de masse'),
    ('Taylorisme', 'organisation du travail qui chronomètre chaque geste de l’ouvrier'),
    ('Fordisme', 'travail à la chaîne et production de masse, inventés chez Ford'),
    ('Automatisation', 'remplacement du travail humain par les machines et robots'),
    ('Délocalisation', 'transfert d’une production vers un pays où elle coûte moins cher'),
    ('Mondialisation', 'interdépendance croissante des économies et des sociétés du monde'),
    ('Triple-Entente', 'alliance de 1914 : France, Royaume-Uni, Russie'),
    ('Triple-Alliance', 'alliance de 1914 : Allemagne, Autriche-Hongrie, Italie'),
    ('Guerre de mouvement', 'phase de guerre faite d’offensives et de déplacements rapides'),
    ('Guerre de position', 'phase où les fronts se figent dans les tranchées (1915-1918)'),
    ('Armistice', 'accord qui arrête les combats sans conclure encore la paix'),
    ('Traité de Versailles', 'traité de paix de 1919 déclarant l’Allemagne responsable de la guerre'),
    ('Diktat', '« paix imposée » : nom donné par les Allemands au traité de Versailles'),
    ('SDN', 'Société des Nations (1920), première organisation mondiale pour la paix'),
    ('Tirailleurs malgaches', 'soldats malgaches recrutés par la France pour les deux guerres mondiales'),
    ('SICE', 'société créée en 1916 à Madagascar pour ravitailler la France en conserves de viande'),
    ('Bolcheviks', 'parti révolutionnaire russe de Lénine, au pouvoir en octobre 1917'),
    ('URSS', 'Union des républiques socialistes soviétiques, fondée en 1922'),
    ('Totalitarisme', 'régime qui prétend contrôler toute la vie des citoyens'),
    ('Collectivisation', 'mise en commun forcée des terres paysannes en URSS'),
    ('Goulag', 'ensemble des camps de travail forcé de l’URSS stalinienne'),
    ('Plan quinquennal', 'programme économique d’État fixé pour cinq ans en URSS'),
    ('Stakhanovisme', 'propagande soviétique du travailleur modèle aux records de production'),
    ('Fascisme', 'dictature nationaliste fondée en Italie par Mussolini en 1922'),
    ('Nazisme', 'totalitarisme allemand d’Hitler, raciste et antisémite'),
    ('Antisémitisme', 'haine et persécution des Juifs'),
    ('Propagande', 'diffusion massive d’idées pour contrôler les opinions'),
    ('Krach', 'effondrement brutal des cours de la Bourse (Wall Street, 24 octobre 1929)'),
    ('New Deal', 'programme de relance de l’économie américaine lancé par Roosevelt en 1933'),
    ('Axe', 'alliance de l’Allemagne, de l’Italie et du Japon pendant la Seconde Guerre mondiale'),
    ('Alliés', 'coalition victorieuse de 1945 : Royaume-Uni, URSS, États-Unis, France libre…'),
    ('Shoah', 'extermination de six millions de Juifs d’Europe par l’Allemagne nazie'),
    ('ONU', 'Organisation des Nations unies, fondée le 26 juin 1945 pour maintenir la paix'),
    ('Conseil de sécurité', 'organe de l’ONU chargé de la paix, aux décisions obligatoires'),
    ('Casques bleus', 'soldats de la paix mis à la disposition de l’ONU par les États'),
    ('Sécurité collective', 'principe : une agression contre un État concerne tous les autres'),
    ('Guerre froide', 'affrontement total mais sans guerre directe des blocs américain et soviétique (1947-1991)'),
    ('Bipolarisation', 'organisation du monde autour de deux pôles rivaux'),
    ('Rideau de fer', 'frontière fermée séparant l’Europe de l’Est et de l’Ouest'),
    ('OTAN', 'alliance militaire du bloc occidental, fondée en 1949'),
    ('Pacte de Varsovie', 'alliance militaire du bloc soviétique, fondée en 1955'),
    ('Détente', 'période d’apaisement entre les deux blocs après la crise de Cuba (1962)'),
    ('Perestroïka', '« restructuration » de l’économie soviétique par Gorbatchev'),
    ('Glasnost', '« transparence » : liberté de parole rendue en URSS par Gorbatchev'),
    ('Hyperpuissance', 'puissance dominant tous les domaines : militaire, économique, culturel'),
    ('Monde multipolaire', 'monde organisé autour de plusieurs pôles de puissance'),
    ('Terrorisme', 'violence visant des civils pour imposer une cause par la terreur'),
    ('Décolonisation', 'accession des colonies à l’indépendance (1945-1975)'),
    ('Nationalisme', 'mouvement revendiquant une nation libre et indépendante'),
    ('Non-violence', 'méthode de lutte de Gandhi refusant tout recours à la force'),
    ('Désobéissance civile', 'refus collectif et pacifique d’obéir aux lois injustes'),
    ('MDRM', 'Mouvement démocratique de la rénovation malgache, parti nationaliste fondé en 1946'),
    ('Insurrection', 'soulèvement armé contre le pouvoir en place — à Madagascar, le 29 mars 1947'),
    ('Loi-cadre', 'loi de 1956 accordant l’autonomie interne et le suffrage universel aux colonies françaises'),
    ('Tiers-Monde', 'ensemble des pays pauvres n’appartenant à aucun des deux blocs (Sauvy, 1952)'),
    ('Non-alignement', 'refus d’appartenir au bloc américain ou au bloc soviétique'),
    ('Échange inégal', 'commerce défavorable : matières premières bon marché contre produits chers'),
    ('Accords de coopération', 'traités de 1960 maintenant la présence française après l’indépendance'),
    ('Malgachisation', 'adaptation de l’enseignement à la langue et aux réalités malgaches'),
    ('ZOAM', 'jeunes chômeurs des quartiers populaires, acteurs de mai 1972'),
    ('Boky Mena', 'Charte de la révolution socialiste malgache de 1975'),
    ('Nationalisation', 'transfert d’une entreprise privée à la propriété de l’État'),
    ('Ajustement structurel', 'réformes imposées par le FMI en échange de prêts'),
    ('Forces vives', 'coalition d’opposition malgache (partis, églises, syndicats) de 1991'),
    ('Transition', 'période de passage négocié d’un régime politique à un autre'),
    ('Plébiscite', 'référendum détourné en vote de confiance pour un homme'),
    ('Contre-pouvoirs', 'institutions qui limitent le pouvoir : justice, assemblée, presse'),
    ('Refondation', 'reconstruction des institutions d’un État après une crise'),
    ('Mémoire collective', 'souvenirs et représentations du passé partagés par un groupe'),
    ('Lieu de mémoire', 'support matériel ou immatériel où se cristallise la mémoire d’une communauté'),
    ('Commémoration', 'cérémonie rappelant collectivement un événement passé'),
    ('Patrimoine immatériel', 'héritage sans support matériel : récits, chants, savoir-faire'),
    ('Devoir de mémoire', 'obligation morale de se souvenir des victimes et des injustices du passé'),
    ('Réconciliation', 'rétablissement de la paix entre groupes divisés par le passé'),
    ('Arendrina', 'lanternes du 26 juin portées par les enfants la veille de la fête nationale'),
]
for t, v in gloss:
    p = a.add_paragraph()
    font(p.add_run(t + ' : '), 12, True, (31, 78, 121)); font(p.add_run(v + '.'), 12)

a.add_page_break(); head(a, 'ANNEXE 2 — REPÈRES CHRONOLOGIQUES')
rows = [
    ('Date', 'Événement'),
    ('1903', 'Premier vol des frères Wright : naissance de l’aviation'),
    ('28 juin 1914', 'Attentat de Sarajevo ; début de la Première Guerre mondiale en août'),
    ('1916', 'Bataille de Verdun ; création de la SICE à Madagascar'),
    ('Octobre 1917', 'Révolution russe : les bolcheviks prennent le pouvoir'),
    ('11 novembre 1918', 'Armistice : fin de la Première Guerre mondiale'),
    ('28 juin 1919', 'Traité de Versailles ; création de la SDN en 1920'),
    ('1922', 'Naissance de l’URSS ; marche sur Rome de Mussolini'),
    ('24 octobre 1929', 'Jeudi noir : krach de Wall Street, début de la crise mondiale'),
    ('30 janvier 1933', 'Hitler chancelier de l’Allemagne ; New Deal de Roosevelt'),
    ('1ᵉʳ septembre 1939', 'Invasion de la Pologne : début de la Seconde Guerre mondiale'),
    ('1942-1943', 'Le tournant : Stalingrad, El Alamein, Midway ; combats de Diego-Suarez'),
    ('8 mai / 2 sept. 1945', 'Capitulations allemande et japonaise ; Yalta et Potsdam'),
    ('26 juin 1945', 'Signature de la Charte de l’ONU à San Francisco'),
    ('1947', 'Doctrines Truman et Jdanov : début de la Guerre froide ; indépendance de l’Inde'),
    ('29 mars 1947', 'Insurrection nationale malgache, durement réprimée'),
    ('1948-1949', 'Blocus de Berlin ; création de la RFA et de la RDA'),
    ('Avril 1955', 'Conférence afro-asiatique de Bandung'),
    ('14 octobre 1958', 'Proclamation de la République malgache après le référendum'),
    ('1960', '« Année de l’Afrique » : 17 indépendances — Madagascar le 26 juin'),
    ('1961', 'Mur de Berlin ; conférence des non-alignés à Belgrade'),
    ('Octobre 1962', 'Crise de Cuba ; indépendance de l’Algérie la même année'),
    ('13 mai 1972', 'Répression meurtrière à Antananarivo ; chute de la Première République'),
    ('11 février 1975', 'Assassinat de Ratsimandrava ; Deuxième République le 21 décembre'),
    ('9 novembre 1989', 'Chute du mur de Berlin'),
    ('Décembre 1991', 'Dissolution de l’URSS : fin de la Guerre froide'),
    ('10 août 1991', 'Marche des Forces vives vers Iavoloha ; Constitution de la IIIᵉ République en 1992'),
    ('1994', 'Génocide des Tutsi au Rwanda'),
    ('11 septembre 2001', 'Attentats terroristes contre les États-Unis'),
    ('2002 et 2009', 'Crises politiques malgaches ; transition 2009-2014'),
    ('17 novembre 2010', 'Référendum : Quatrième République malgache'),
    ('Octobre 2025', 'Mouvement de la jeunesse ; refondation de la République'),
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
    ('Analyser un discours ou un texte de propagande', 'Identifier l’auteur, la date, le public visé ; distinguer les faits des opinions ; confronter le message aux faits établis.'),
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
    'Réaliser une interview, l’analyser et en interpréter les résultats',
    'Citer les innovations scientifiques et technologiques du XXᵉ siècle',
    'Expliquer l’évolution des systèmes de production et les mutations sociales',
    'Expliquer les origines, les trois phases et les conséquences de la Première Guerre mondiale',
    'Présenter l’effort de guerre de Madagascar (1914-1918)',
    'Raconter la révolution russe et la naissance de l’URSS',
    'Expliquer la crise de 1929 et ses répercussions jusqu’à Madagascar',
    'Caractériser les régimes totalitaires : stalinisme, fascisme, nazisme',
    'Expliquer les causes, les phases et le bilan de la Seconde Guerre mondiale',
    'Comparer la SDN et l’ONU et citer les grands accords de paix',
    'Expliquer la Guerre froide : origines, crises, détente, fin',
    'Caractériser le monde depuis 1990 : mondialisation, conflits, multipolarité',
    'Expliquer les facteurs externes et internes de la décolonisation',
    'Associer les acteurs et les étapes des indépendances',
    'Distinguer les formes de décolonisation et raconter le 29 mars 1947',
    'Présenter Bandung et le mouvement des non-alignés',
    'Présenter la Première République malgache et la crise de 1972',
    'Expliquer la Deuxième République, sa crise et la transition de 1991',
    'Suivre les alternances et les crises de la Troisième République',
    'Situer la Quatrième République et analyser les racines de l’instabilité',
    'Classer les lieux de mémoire et distinguer mémoire et Histoire',
    'Expliquer la transmission des mémoires et le devoir de mémoire',
    'Organiser une commémoration en cinq étapes',
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
para(a, 'Cinq sujets d’examen sur 20 points figurent à la fin des unités. Chaque sujet comporte cinq exercices avec corrigé détaillé et barème : questions de cours, repères chronologiques, étude de document et réflexion organisée, dans l’esprit des évaluations de la classe d’examen.')

a.add_page_break(); head(a, 'BIBLIOGRAPHIE ET WEBOGRAPHIE')
para(a, 'Ministère de l’Éducation Nationale de Madagascar, Programme d’études — Classe de T9, section Histoire (PE T9).')
para(a, 'Collection J-Learn, Manuels Histoire T6, T7 et T8, J-Lab Madagascar, édition 2026.')
para(a, 'Collection J-Learn, charte de conception des manuels scolaires, version 18.')
para(a, 'Organisation des Nations unies : Charte des Nations unies (San Francisco, 1945) et rapport de l’enquête indépendante sur l’action de l’ONU au Rwanda (1999) — un.org.')
para(a, 'Textes et discours historiques cités (Churchill, Fulton 1946 ; Kennedy, Berlin 1963 ; Gandhi, Bombay 1942 ; communiqué final de Bandung, 1955 ; conférence de Brazzaville, 1944) : archives publiques en ligne.')
para(a, 'Pierre Nora (dir.), Les Lieux de mémoire, Gallimard, 1984-1992.')
para(a, 'Plateforme officielle des programmes éducatifs : plateforme.education.mg.')

annex_marks = {
    'ANNEXES — HISTOIRE T9': 'annexes', 'ANNEXE 1 — GLOSSAIRE': 'annexe1',
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
