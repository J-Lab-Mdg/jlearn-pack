# -*- coding: utf-8 -*-
"""Construit le manuel pilote Geographie T9 -- Unite 1 (18h PE = 18 seances +
revision + examen = 20 seances), en clonant la structure XML exacte du
manuel Geographie T8 (meme gabarit officiel J-Learn : meta-table, tableau de
deroulement 6 colonnes, couleurs, polices).

Usage : python3 build_pilot.py
"""
import copy
import os
import re
import sys

import docx
from docx.oxml.ns import qn
from docx.oxml import OxmlElement
from docx.opc.constants import RELATIONSHIP_TYPE as RT
from docx.shared import Inches
from docx.enum.text import WD_ALIGN_PARAGRAPH
from lxml import etree

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(os.path.dirname(HERE))
sys.path.insert(0, HERE)
MEDIA_DIR = os.path.join(HERE, "charts_sample")

NUM_FR = {
    1: "une", 2: "deux", 3: "trois", 4: "quatre", 5: "cinq", 6: "six",
    7: "sept", 8: "huit", 9: "neuf", 10: "dix", 11: "onze", 12: "douze",
    13: "treize", 14: "quatorze", 15: "quinze", 16: "seize", 17: "dix-sept",
    18: "dix-huit", 19: "dix-neuf", 20: "vingt",
}

from content_unit1 import UNIT1, LESSONS  # noqa: E402
from content_unit2 import UNIT2, LESSONS2, EXAM2  # noqa: E402
from content_unit3 import UNIT3, LESSONS3, EXAM3  # noqa: E402
from content_unit4 import UNIT4, LESSONS4, EXAM4  # noqa: E402

SRC = os.path.join(ROOT, "Nos manuels", "Manuel_Geographie_T8_JLearn.docx")
OUT = os.path.join(ROOT, "Nos manuels", "Manuel_Geographie_T9_V1_PILOTE.docx")

Wp = qn('w:p')
Wtbl = qn('w:tbl')
Wt = qn('w:t')
Wr = qn('w:r')
Wtc = qn('w:tc')
Wtr = qn('w:tr')


def clone(el):
    return copy.deepcopy(el)


def ptext(el):
    return ''.join(t.text or '' for t in el.findall('.//' + Wt))


# ---------------------------------------------------------------------
# 1. Charger le manuel T8 source et extraire les gabarits (role -> element)
# ---------------------------------------------------------------------
doc_src = docx.Document(SRC)
body_src = list(doc_src.element.body.iterchildren())

# Unite 1 header : indices 144-146 (titre, thematique, blanc)
UNIT_HEADER_ROLES = ['unit_title', 'unit_thematique', 'blank']
unit_header_tpl = {role: clone(body_src[144 + i]) for i, role in enumerate(UNIT_HEADER_ROLES)}

# Seance (lecon complete) : indices 147-202 (56 elements), roles par offset
LESSON_ROLE_BY_OFFSET = {
    0: 'seance_marker', 1: 'title_big', 2: 'fiche_label', 3: 'meta_table',
    4: 'blank', 5: 'deroulement_table', 6: 'blank_pagebreak', 7: 'lesson_title',
    8: 'blank', 9: 'schema_line', 10: 'blank', 11: 'observation_line',
    12: 'subtitle', 13: 'body_kw', 14: 'body_plain',
    23: 'exercices_header', 24: 'exercise_header', 25: 'instruction_italic',
    26: 'question_line', 41: 'total_line', 42: 'corrige_header',
    43: 'corrige_ex_header', 44: 'corrige_line', 55: 'blank',
}
lesson_tpl = {}
for off, role in LESSON_ROLE_BY_OFFSET.items():
    if role not in lesson_tpl:
        lesson_tpl[role] = clone(body_src[147 + off])

# Revision : indices 732-751
REV_ROLE_BY_OFFSET = {
    0: 'seance_marker', 1: 'rev_title', 2: 'fiche_label', 3: 'meta_table',
    4: 'blank', 5: 'deroulement_table', 7: 'recap_title', 8: 'recap_table',
    10: 'questions_rev_header', 11: 'rev_q', 12: 'rev_ra', 19: 'blank',
}
rev_tpl = {}
for off, role in REV_ROLE_BY_OFFSET.items():
    if role not in rev_tpl:
        rev_tpl[role] = clone(body_src[732 + off])

# Examen : indices 752-789
EXAM_ROLE_BY_OFFSET = {
    0: 'seance_marker', 1: 'exam_title', 2: 'duree_bareme', 3: 'instruction_exam',
    22: 'corrige_bareme_header', 37: 'total_line_exam',
}
exam_tpl = {}
for off, role in EXAM_ROLE_BY_OFFSET.items():
    if role not in exam_tpl:
        exam_tpl[role] = clone(body_src[752 + off])

print("Gabarits extraits :", list(lesson_tpl.keys()), list(rev_tpl.keys()), list(exam_tpl.keys()))


# ---------------------------------------------------------------------
# 2. Fonctions utilitaires de clonage / ecriture de texte
# ---------------------------------------------------------------------
def mk(tpl_dict, role):
    return clone(tpl_dict[role])


def set_single_run_text(p_el, text):
    runs = p_el.findall('.//' + Wr)
    if not runs:
        return
    t = runs[0].find(Wt)
    if t is None:
        t = OxmlElement('w:t')
        runs[0].append(t)
    t.text = text
    t.set(qn('xml:space'), 'preserve')
    for r in runs[1:]:
        r.getparent().remove(r)


def set_multiline_single_run(p_el, lines):
    """Remplace le texte d'un paragraphe par plusieurs lignes separees par
    des <w:br/>, en reutilisant le premier run (meme style)."""
    runs = p_el.findall('.//' + Wr)
    if not runs:
        return
    first = runs[0]
    for r in runs[1:]:
        r.getparent().remove(r)
    for child in list(first):
        first.remove(child)
    for i, line in enumerate(lines):
        if i > 0:
            br = OxmlElement('w:br')
            first.append(br)
        t = OxmlElement('w:t')
        t.text = line
        t.set(qn('xml:space'), 'preserve')
        first.append(t)


def set_keyword_para(p_el, triple):
    """triple = (avant, mot_cle, apres). Reutilise les 3 premiers runs du
    gabarit (texte normal / mot-cle gras bleu / texte normal)."""
    avant, kw, apres = triple
    runs = p_el.findall('.//' + Wr)
    assert len(runs) >= 3, "le gabarit mot-cle doit avoir 3 runs"
    kw_run_tpl = runs[1]
    plain_run_tpl = runs[0]
    # vider le paragraphe puis reconstruire avec le nombre de runs necessaire
    for r in runs:
        r.getparent().remove(r)
    parts = [(avant, plain_run_tpl), (kw, kw_run_tpl), (apres, plain_run_tpl)]
    for text, tpl_run in parts:
        if text == '':
            continue
        new_run = clone(tpl_run)
        t = new_run.find(Wt)
        if t is None:
            t = OxmlElement('w:t')
            new_run.append(t)
        t.text = text
        t.set(qn('xml:space'), 'preserve')
        p_el.append(new_run)


def write_para(p_el, content):
    """content : str simple -> texte normal ; tuple (a,kw,b) -> mot-cle."""
    if isinstance(content, tuple):
        set_keyword_para(p_el, content)
    else:
        set_single_run_text(p_el, content)


def flat_text(content):
    """Convertit un contenu (str ou tuple) en texte brut concatenique."""
    if isinstance(content, tuple):
        return ''.join(content)
    return content


def set_table_cell_text(table_el, row_idx, col_idx, lines):
    """Definit le texte (liste de lignes) d'une cellule d'un tableau clone,
    en reutilisant le 1er paragraphe/run de la cellule comme gabarit."""
    rows = table_el.findall(Wtr)
    row = rows[row_idx]
    cells = row.findall(Wtc)
    cell = cells[col_idx]
    paras = cell.findall(Wp)
    first_p = paras[0]
    set_multiline_single_run(first_p, lines)
    # supprimer les paragraphes additionnels eventuels (garder 1 seul)
    for p in paras[1:]:
        p.getparent().remove(p)


class FootnoteContext:
    """Encapsule l'etat necessaire pour ajouter des notes de bas de page
    (word/footnotes.xml est un 'Part' generique en python-docx : il faut le
    parser/reconstruire nous-memes, car il n'existe pas d'API haut niveau
    pour les notes de bas de page)."""

    def __init__(self, doc):
        self.part = doc.part.part_related_by(RT.FOOTNOTES)
        self.root = etree.fromstring(self.part.blob)
        existing_ids = [int(fn.get(qn('w:id'))) for fn in self.root.findall(qn('w:footnote'))]
        self.next_id = max(existing_ids, default=0) + 1

    def add_video_footnote(self, label_text, url):
        """Cree une nouvelle note de bas de page contenant un lien hypertexte
        vers la video, et renvoie son w:id (a referencer depuis le corps)."""
        fid = self.next_id
        self.next_id += 1
        r_id = self.part.relate_to(url, RT.HYPERLINK, is_external=True)

        footnote = OxmlElement('w:footnote')
        footnote.set(qn('w:id'), str(fid))
        p = OxmlElement('w:p')
        ppr = OxmlElement('w:pPr')
        pstyle = OxmlElement('w:pStyle')
        pstyle.set(qn('w:val'), 'FootnoteText')
        ppr.append(pstyle)
        p.append(ppr)

        ref_run = OxmlElement('w:r')
        ref_rpr = OxmlElement('w:rPr')
        ref_style = OxmlElement('w:rStyle')
        ref_style.set(qn('w:val'), 'FootnoteReference')
        ref_rpr.append(ref_style)
        ref_run.append(ref_rpr)
        ref_run.append(OxmlElement('w:footnoteRef'))
        p.append(ref_run)

        sep_run = OxmlElement('w:r')
        sep_t = OxmlElement('w:t')
        sep_t.text = ' '
        sep_t.set(qn('xml:space'), 'preserve')
        sep_run.append(sep_t)
        p.append(sep_run)

        hyperlink = OxmlElement('w:hyperlink')
        hyperlink.set(qn('r:id'), r_id)
        link_run = OxmlElement('w:r')
        link_rpr = OxmlElement('w:rPr')
        link_style = OxmlElement('w:rStyle')
        link_style.set(qn('w:val'), 'Hyperlink')
        link_rpr.append(link_style)
        link_run.append(link_rpr)
        link_t = OxmlElement('w:t')
        link_t.text = f"🎥 Pour aller plus loin : {label_text}"
        link_t.set(qn('xml:space'), 'preserve')
        link_run.append(link_t)
        hyperlink.append(link_run)
        p.append(hyperlink)

        footnote.append(p)
        self.root.append(footnote)
        return fid

    def save(self):
        self.part._blob = etree.tostring(
            self.root, xml_declaration=True, encoding='UTF-8', standalone=True)


def append_footnote_marker(title_p_el, footnote_id):
    """Ajoute, a la fin d'un paragraphe de titre (ex. le titre rouge de la
    leçon), un appel de note en exposant (meme couleur/gras que le titre)."""
    run = OxmlElement('w:r')
    rpr = OxmlElement('w:rPr')
    rstyle = OxmlElement('w:rStyle')
    rstyle.set(qn('w:val'), 'FootnoteReference')
    rpr.append(rstyle)
    color = OxmlElement('w:color')
    color.set(qn('w:val'), 'C00000')
    rpr.append(color)
    b = OxmlElement('w:b')
    rpr.append(b)
    run.append(rpr)
    ref = OxmlElement('w:footnoteReference')
    ref.set(qn('w:id'), str(footnote_id))
    run.append(ref)
    title_p_el.append(run)


def _optimized_image_stream(path, max_width_px=1400, jpeg_quality=82):
    """Recompresse une image (PNG IA souvent lourd, 2-4 Mo) en JPEG de taille
    raisonnable avant insertion, pour eviter un .docx de plusieurs dizaines
    de Mo. Renvoie un BytesIO pret a etre passe a run.add_picture."""
    from io import BytesIO
    from PIL import Image
    im = Image.open(path)
    if im.mode in ('RGBA', 'P'):
        bg = Image.new('RGB', im.size, (255, 255, 255))
        bg.paste(im.convert('RGBA'), mask=im.convert('RGBA').split()[-1])
        im = bg
    else:
        im = im.convert('RGB')
    if im.width > max_width_px:
        ratio = max_width_px / im.width
        im = im.resize((max_width_px, int(im.height * ratio)), Image.LANCZOS)
    buf = BytesIO()
    im.save(buf, format='JPEG', quality=jpeg_quality, optimize=True)
    buf.seek(0)
    return buf


def mk_image_paragraph(doc, filename, width_inches=5.8):
    """Insere une image centree (gabarit : fichier de MEDIA_DIR), recompressee
    en JPEG pour limiter la taille du document. Si le fichier n'existe pas
    encore (lot d'images en cours de generation), renvoie None sans faire
    echouer la construction du manuel."""
    if not filename:
        return None
    path = os.path.join(MEDIA_DIR, filename)
    if not os.path.isfile(path):
        return None
    p = doc.add_paragraph()
    p.alignment = WD_ALIGN_PARAGRAPH.CENTER
    run = p.add_run()
    stream = _optimized_image_stream(path)
    run.add_picture(stream, width=Inches(width_inches))
    p_el = p._p
    p_el.getparent().remove(p_el)
    return p_el


def mk_caption_paragraph(role, text):
    """Construit une legende (italique, meme style que 'schema_line' /
    'observation_line') pour une image de graphique inseree sous un sous-titre."""
    p = mk(lesson_tpl, role)
    set_single_run_text(p, text)
    return p


print("Fonctions utilitaires pretes")


# ---------------------------------------------------------------------
# 3. Construction d'une seance de lecon (fiche complete)
# ---------------------------------------------------------------------
def notion_label(notion):
    """Majuscule initiale pour les phrases ('le secteur informel' -> 'Le secteur informel')."""
    n = notion
    if n.startswith("l'") or n.startswith("L'"):
        return "L'" + n[2:]
    return n[0].upper() + n[1:]


def build_exercise_block(num, points, instruction, questions):
    """Construit (header, instruction, [question_lines...]) pour un exercice
    de type 'phrase' (identique au style Geographie T8)."""
    elems = []
    h = mk(lesson_tpl, 'exercise_header')
    set_single_run_text(h, f"Exercice {num} ({points} points)")
    elems.append(h)
    ins = mk(lesson_tpl, 'instruction_italic')
    set_single_run_text(ins, instruction)
    elems.append(ins)
    for q in questions:
        qp = mk(lesson_tpl, 'question_line')
        set_single_run_text(qp, q)
        elems.append(qp)
    return elems


def build_corrige_block(num, points, answers):
    elems = []
    h = mk(lesson_tpl, 'corrige_ex_header')
    set_single_run_text(h, f"Corrigé de l'exercice {num} ({points} points) :")
    elems.append(h)
    for a in answers:
        p = mk(lesson_tpl, 'corrige_line')
        set_single_run_text(p, a)
        elems.append(p)
    return elems


def build_seance_elements(idx, total, lesson, unit, footnotes=None, doc=None):
    """idx : numero de seance global (1..76). Retourne la liste d'elements XML."""
    out = []

    marker = mk(lesson_tpl, 'seance_marker')
    set_single_run_text(marker, f"SÉANCE {idx} / {total}")
    out.append(marker)

    title_big = mk(lesson_tpl, 'title_big')
    set_single_run_text(title_big, lesson['titre'])
    out.append(title_big)

    fiche = mk(lesson_tpl, 'fiche_label')
    out.append(fiche)

    # --- meta-table ---
    meta = mk(lesson_tpl, 'meta_table')
    set_table_cell_text(meta, 0, 1, ["Géographie"])
    set_table_cell_text(meta, 1, 1, [unit["theme"]])
    set_table_cell_text(meta, 1, 3, ["T9"])
    set_table_cell_text(meta, 2, 1, [lesson['titre']])
    set_table_cell_text(meta, 2, 3, [f"{idx} / {total}"])
    set_table_cell_text(meta, 3, 1, [f"Être capable de {lesson['objectif']}."])
    set_table_cell_text(meta, 3, 3, ["60 minutes"])
    set_table_cell_text(meta, 4, 1, [lesson['documentation']])
    out.append(meta)
    out.append(mk(lesson_tpl, 'blank'))

    # --- tableau de deroulement ---
    der = mk(lesson_tpl, 'deroulement_table')
    notion_def_txt = flat_text(lesson['notion_def'])
    idea2_txt = flat_text(lesson['idea2'])
    idea3_txt = flat_text(lesson['idea3'])
    regle_txt = flat_text(lesson['regle'])
    notion_cap = notion_label(lesson['notion'])

    # Row 2 : I. RÉVISION
    rev_q_lines = lesson['revision_q']
    rev_ra_lines = ["R.A. : " + a.replace("R.A. : ", "") for a in lesson['revision_ra']]
    set_table_cell_text(der, 2, 1, rev_q_lines)
    set_table_cell_text(der, 2, 2, rev_ra_lines)

    # Row 4 : 1. Mise en situation
    set_table_cell_text(der, 4, 1, [lesson['mise_situation'],
                                     "Quelle notion géographique permet de comprendre cette situation ?"])
    set_table_cell_text(der, 4, 2, [f"R.A. : {lesson['notion']} : {notion_def_txt}"])

    # Row 5 : 2. Présentation
    set_table_cell_text(der, 5, 1, [
        f"Aujourd'hui, nous étudions « {lesson['titre']} ». À la fin de la séance, "
        f"vous saurez {lesson['objectif']}."])
    set_table_cell_text(der, 5, 2, ["Les élèves écoutent."])

    # Row 6 : 3. Observation
    set_table_cell_text(der, 6, 1, [
        f"Observez le schéma « {lesson['fig_title']} ». {lesson['obs_title']}"])
    set_table_cell_text(der, 6, 2, ["Les élèves observent silencieusement."])

    # Row 7 : 4. Analyse
    set_table_cell_text(der, 7, 1, [
        f"Qu'est-ce que {lesson['notion']} ?",
        "Quelle est une première idée importante à retenir ?",
        "Quelle autre idée complète l'explication ?",
        "Quelle règle doit guider l'analyse ou l'action ?",
    ])
    set_table_cell_text(der, 7, 2, [
        f"R.A. : {notion_def_txt}",
        f"R.A. : {idea2_txt}",
        f"R.A. : {idea3_txt}",
        f"R.A. : {regle_txt}",
    ])

    # Row 8 : 5. Synthèse
    set_table_cell_text(der, 8, 1, [
        f"{notion_cap} : {notion_def_txt} {idea2_txt} {idea3_txt} Il faut retenir : {regle_txt}"])
    set_table_cell_text(der, 8, 2, ["Les élèves écoutent."])

    # --- Exercices (4) ---
    ex1_q = [f"1. Définis {lesson['notion']}.", "2. Relève deux éléments essentiels de la leçon."]
    ex1_corr = [f"1. {notion_def_txt} (2,5 points)", f"2. {idea2_txt} (2,5 points)"]

    kw2 = lesson['idea2'][1] if isinstance(lesson['idea2'], tuple) else lesson['notion']
    kw3 = lesson['idea3'][1] if isinstance(lesson['idea3'], tuple) else lesson['notion']
    ex2_q = [f"1. {kw2}", f"2. {kw3}", "3. Écris la relation entre ces deux idées."]
    ex2_corr = [f"1. {idea2_txt} (2 points)", f"2. {idea3_txt} (2 points)",
                f"3. Ces idées sont liées dans l'étude de {lesson['notion']}. (1 point)"]

    ex3_q = [lesson['mise_situation'], "1. Nomme la notion étudiée.",
             "2. Donne l'indice qui permet de la reconnaître."]
    ex3_corr = [f"1. Il s'agit de {lesson['notion']}. (2 points)",
                f"2. {lesson['mise_ra_extra']} (3 points)"]

    ex4_q = [f"Présente {lesson['notion']}, une idée essentielle et la règle pratique à retenir."]
    ex4_corr = [f"{notion_def_txt} {idea2_txt} {regle_txt} (5 points)"]

    # Row 9 : 6. Application (exercices 1 et 2)
    set_table_cell_text(der, 9, 1,
        ["Exercice 1 : Réponds par des phrases complètes."] + ex1_q +
        [""] + ["Exercice 2 : Associe chaque idée à son explication puis justifie ton choix."] + ex2_q)
    set_table_cell_text(der, 9, 2,
        ["Corrigé de l'exercice 1 :"] + ex1_corr +
        [""] + ["Corrigé de l'exercice 2 :"] + ex2_corr)

    # Row 10 : III. ÉVALUATION (exercices 3 et 4)
    set_table_cell_text(der, 10, 1,
        ["Exercice 3 : Explique ce que montre la situation."] + ex3_q +
        [""] + ["Exercice 4 : Rédige une courte réponse organisée."] + ex4_q)
    set_table_cell_text(der, 10, 2,
        ["Corrigé de l'exercice 3 :"] + ex3_corr +
        [""] + ["Corrigé de l'exercice 4 :"] + ex4_corr)

    out.append(der)
    out.append(mk(lesson_tpl, 'blank_pagebreak'))

    # --- corps de la lecon (nouvelle page, comme dans le T8) ---
    lesson_title = mk(lesson_tpl, 'lesson_title')
    set_single_run_text(lesson_title, lesson['titre_court'])
    if footnotes is not None and lesson.get('video_url'):
        fid = footnotes.add_video_footnote(lesson['video_titre'], lesson['video_url'])
        append_footnote_marker(lesson_title, fid)
    out.append(lesson_title)
    out.append(mk(lesson_tpl, 'blank'))

    schema = mk(lesson_tpl, 'schema_line')
    set_single_run_text(schema, f"Schéma pédagogique : {lesson['fig_title']}.")
    out.append(schema)
    if doc is not None:
        img = mk_image_paragraph(doc, lesson.get('schema_img'))
        if img is not None:
            out.append(img)
    out.append(mk(lesson_tpl, 'blank'))

    observation = mk(lesson_tpl, 'observation_line')
    set_single_run_text(observation, f"Document d'observation : {lesson['obs_title']}")
    out.append(observation)
    if doc is not None:
        img = mk_image_paragraph(doc, lesson.get('obs_img'))
        if img is not None:
            out.append(img)

    for sec_idx, (sec_title, paragraphs) in enumerate(lesson['sections']):
        sub = mk(lesson_tpl, 'subtitle')
        set_single_run_text(sub, sec_title)
        out.append(sub)
        for para in paragraphs:
            if isinstance(para, tuple):
                p = mk(lesson_tpl, 'body_kw')
                set_keyword_para(p, para)
            else:
                p = mk(lesson_tpl, 'body_plain')
                set_single_run_text(p, para)
            out.append(p)
        chart = lesson.get('chart')
        if chart is not None and chart.get('after_section') == sec_idx and doc is not None:
            out.append(mk(lesson_tpl, 'blank'))
            cap = mk_caption_paragraph('schema_line', f"Graphique : {chart['caption']}")
            out.append(cap)
            img = mk_image_paragraph(doc, chart.get('image'))
            if img is not None:
                out.append(img)

    regle_p = mk(lesson_tpl, 'body_kw')
    set_keyword_para(regle_p, lesson['regle'])
    out.append(regle_p)

    # --- EXERCICES ---
    out.append(mk(lesson_tpl, 'exercices_header'))
    out.extend(build_exercise_block(1, 5, "Réponds par des phrases complètes.", ex1_q))
    out.extend(build_exercise_block(2, 5, "Associe chaque idée à son explication puis justifie ton choix.", ex2_q))
    out.extend(build_exercise_block(3, 5, "Explique ce que montre la situation.", ex3_q))
    out.extend(build_exercise_block(4, 5, "Rédige une courte réponse organisée.", ex4_q))
    total_p = mk(lesson_tpl, 'total_line')
    set_single_run_text(total_p, "Total : 20 points")
    out.append(total_p)

    out.append(mk(lesson_tpl, 'corrige_header'))
    out.extend(build_corrige_block(1, 5, ex1_corr))
    out.extend(build_corrige_block(2, 5, ex2_corr))
    out.extend(build_corrige_block(3, 5, ex3_corr))
    out.extend(build_corrige_block(4, 5, ex4_corr))

    out.append(mk(lesson_tpl, 'blank'))
    return out


# ---------------------------------------------------------------------
# 4. Construction de la seance de revision (seance 19)
# ---------------------------------------------------------------------
def clone_table_row(table_el, row_idx):
    rows = table_el.findall(Wtr)
    return clone(rows[row_idx])


def build_revision_elements(idx, total, unit, lessons):
    out = []
    marker = mk(rev_tpl, 'seance_marker')
    set_single_run_text(marker, f"SÉANCE {idx} / {total}")
    out.append(marker)

    title = mk(rev_tpl, 'rev_title')
    set_single_run_text(title, f"Révision — Unité {unit['num']} — {unit['theme'].upper()}")
    out.append(title)

    out.append(mk(rev_tpl, 'fiche_label'))

    meta = mk(rev_tpl, 'meta_table')
    set_table_cell_text(meta, 0, 1, ["Géographie"])
    set_table_cell_text(meta, 1, 1, [unit["theme"]])
    set_table_cell_text(meta, 1, 3, ["T9"])
    set_table_cell_text(meta, 2, 1, [f"Révision — Unité {unit['num']} — {unit['theme']}"])
    set_table_cell_text(meta, 2, 3, [f"{idx} / {total}"])
    set_table_cell_text(meta, 3, 1, ["Réviser et consolider toutes les notions de l'unité."])
    set_table_cell_text(meta, 3, 3, ["60 minutes"])
    set_table_cell_text(meta, 4, 1, ["Programme d'études officiel T9 — Géographie ; FRP T9, Thématique I."])
    out.append(meta)
    out.append(mk(rev_tpl, 'blank'))

    der = mk(rev_tpl, 'deroulement_table')
    last = lessons[-1]
    set_table_cell_text(der, 2, 1, last['revision_q'])
    set_table_cell_text(der, 2, 2, last['revision_ra'])

    set_table_cell_text(der, 4, 1, [
        f"Nous avons terminé l'unité {unit['num']}. Aujourd'hui, nous allons réviser ensemble "
        "toutes les notions pour bien nous en souvenir."])
    set_table_cell_text(der, 4, 2, ["Les élèves écoutent."])

    set_table_cell_text(der, 5, 1, [
        "Aujourd'hui, nous allons réviser toutes les notions de l'unité. Après cette séance, "
        "vous serez capables de bien répondre aux questions de révision et de réussir le sujet d'examen."])
    set_table_cell_text(der, 5, 2, ["Les élèves écoutent."])

    set_table_cell_text(der, 6, 1, ["Regardez et observez bien le tableau récapitulatif des notions de l'unité."])
    set_table_cell_text(der, 6, 2, ["Les élèves observent silencieusement."])

    nb_lessons = len(lessons)
    nb_lessons_fr = NUM_FR.get(nb_lessons, str(nb_lessons))
    recap_q2 = unit.get(
        'revision_recap_question',
        "Citez une notion étudiée dans chacune des grandes parties de cette unité.")
    recap_a2 = unit.get(
        'revision_recap_answer',
        "R.A. : Les élèves citent, pour chaque partie du tableau récapitulatif, une notion clé et sa définition.")
    set_table_cell_text(der, 7, 1, [
        f"Reprenons ensemble les notions des {nb_lessons_fr} séances à l'aide du tableau récapitulatif ci-dessous.",
        recap_q2])
    set_table_cell_text(der, 7, 2, [
        "R.A. : Les élèves relisent chaque ligne du tableau récapitulatif et rappellent la définition de chaque notion.",
        recap_a2])

    set_table_cell_text(der, 8, 1, [
        "Donc, prenons le temps de relire ensemble le tableau récapitulatif : chaque notion est une clé "
        "pour l'examen de l'unité."])
    set_table_cell_text(der, 8, 2, ["Les élèves écoutent."])

    set_table_cell_text(der, 9, 1, [
        "Exercice 1 : Par binôme, choisissez trois notions du tableau récapitulatif et posez-vous les "
        "questions l'un à l'autre.",
        "Chaque élève du binôme pose au moins une question.",
        "On vérifie la réponse avec le tableau récapitulatif."])
    set_table_cell_text(der, 9, 2, [
        "R.A. : Les binômes s'interrogent sur trois notions de l'unité et corrigent leurs réponses avec "
        "le tableau récapitulatif."])

    set_table_cell_text(der, 10, 1, [
        "Annonce le sujet d'examen de l'unité pour la prochaine séance et répond aux dernières questions des élèves."])
    set_table_cell_text(der, 10, 2, ["Les élèves posent leurs questions."])

    out.append(der)
    out.append(mk(rev_tpl, 'blank'))

    recap_title = mk(rev_tpl, 'recap_title')
    set_single_run_text(recap_title, f"Tableau récapitulatif — Unité {unit['num']}")
    out.append(recap_title)

    recap = mk(rev_tpl, 'recap_table')
    data_row_tpl = clone_table_row(recap, 1)
    # Retire toute ligne de données residuelle du gabarit T8 (au-dela de
    # l'en-tete ligne 0) : seule la ligne 1 sera reutilisee/ecrasee ci-dessous,
    # les autres lignes de donnees du gabarit original doivent disparaitre.
    existing_rows = recap.findall(Wtr)
    for extra_row in existing_rows[2:]:
        recap.remove(extra_row)
    for i, lesson in enumerate(lessons):
        if i == 0:
            row = recap.findall(Wtr)[1]
        else:
            row = clone(data_row_tpl)
            recap.append(row)
        cells = row.findall(Wtc)
        set_multiline_single_run(cells[0].findall(Wp)[0], [notion_label(lesson['notion'])])
        set_multiline_single_run(cells[1].findall(Wp)[0], [flat_text(lesson['notion_def'])])
    out.append(recap)
    out.append(mk(rev_tpl, 'blank'))

    qr_header = mk(rev_tpl, 'questions_rev_header')
    out.append(qr_header)
    for lesson in lessons:
        qp = mk(rev_tpl, 'rev_q')
        set_single_run_text(qp, f"Définis « {lesson['notion']} ».")
        out.append(qp)
        rap = mk(rev_tpl, 'rev_ra')
        set_single_run_text(rap, f"R.A. : {flat_text(lesson['notion_def'])}")
        out.append(rap)

    out.append(mk(rev_tpl, 'blank'))
    return out


# ---------------------------------------------------------------------
# 5. Construction du sujet d'examen (seance 20)
# ---------------------------------------------------------------------
def build_exam_elements_u1(idx, total, unit, lessons):
    out = []
    marker = mk(exam_tpl, 'seance_marker')
    set_single_run_text(marker, f"SÉANCE {idx} / {total}")
    out.append(marker)

    title = mk(exam_tpl, 'exam_title')
    set_single_run_text(title, f"Sujet d'examen T9 — Unité {unit['num']} — {unit['theme'].upper()}")
    out.append(title)

    db = mk(exam_tpl, 'duree_bareme')
    set_single_run_text(db, "Durée : 60 minutes — Barème : 20 points")
    out.append(db)

    instr = mk(exam_tpl, 'instruction_exam')
    set_single_run_text(instr, "Lis attentivement chaque consigne et rédige des réponses précises.")
    out.append(instr)

    s1, s2, s5, s6, s11, s18 = lessons[0], lessons[1], lessons[4], lessons[5], lessons[10], lessons[17]

    def cap(s):
        return s[0].upper() + s[1:] if s else s

    ex1_q = [f"1. {cap(s1['notion'])}.", f"2. {cap(s2['notion'])}."]
    ex1_corr = [f"1. {flat_text(s1['notion_def'])} (2,5 points)",
                f"2. {flat_text(s2['notion_def'])} (2,5 points)"]

    ex2_q = [f"1. Indique une idée essentielle de la leçon sur « {s5['titre']} ».",
             f"2. Indique une idée essentielle de la leçon sur « {s6['titre']} »."]
    ex2_corr = [f"1. {flat_text(s5['idea2'])} (2,5 points)",
                f"2. {flat_text(s6['idea2'])} (2,5 points)"]

    ex3_q = [f"1. {flat_text(s11['idea2'])}", f"2. {flat_text(s11['idea3'])}",
             "3. Montre le lien entre ces deux éléments et conclus sur le thème de l'unité."]
    ex3_corr = ["1. Ces éléments appartiennent à la leçon sur l'exploitation de la forêt à Madagascar. (2 points)",
                "2. Ils montrent les différents types et rôles de la forêt dans l'économie malgache. (2 points)",
                "3. L'économie malgache repose sur l'interdépendance de ses trois secteurs d'activité. (1 point)"]

    ex4_q = [s18['mise_situation'], "Présente la notion, un élément d'explication et une règle d'action."]
    ex4_corr = [f"Notion : {s18['notion']}. (1 point)",
                f"Explication : {flat_text(s18['idea2'])} (2 points)",
                f"Règle : {flat_text(s18['regle'])} (2 points)"]

    out.extend(build_exercise_block(1, 5, "Définis les deux notions.", ex1_q))
    out.extend(build_exercise_block(2, 5, "Réponds par une phrase complète.", ex2_q))
    out.extend(build_exercise_block(3, 5, "Analyse les éléments et conclus sur le thème de l'unité.", ex3_q))
    out.extend(build_exercise_block(4, 5, "Étudie la situation et propose une réponse géographique.", ex4_q))

    total_p = mk(exam_tpl, 'total_line_exam')
    set_single_run_text(total_p, "Total : 20 points")
    out.append(total_p)

    out.append(mk(exam_tpl, 'corrige_bareme_header'))

    def exam_corrige_block(num, points, answers):
        elems = []
        h = mk(lesson_tpl, 'exercise_header')
        set_single_run_text(h, f"Exercice {num} ({points} points)")
        elems.append(h)
        for a in answers:
            p = mk(lesson_tpl, 'corrige_line')
            set_single_run_text(p, a)
            elems.append(p)
        return elems

    out.extend(exam_corrige_block(1, 5, ex1_corr))
    out.extend(exam_corrige_block(2, 5, ex2_corr))
    out.extend(exam_corrige_block(3, 5, ex3_corr))
    out.extend(exam_corrige_block(4, 5, ex4_corr))

    total_p2 = mk(exam_tpl, 'total_line_exam')
    set_single_run_text(total_p2, "Total : 20 points")
    out.append(total_p2)

    return out


def build_exam_elements_from_spec(idx, total, unit, exam_spec):
    """Construit un sujet d'examen generique a partir d'une spec statique
    (exam_spec['exercises'] = liste de {points, instruction, questions,
    answers}), pour les unites dont le contenu d'examen est redige directement
    dans le fichier content_unitN.py plutot que derive dynamiquement des
    lecons (cas de l'unite 1)."""
    out = []
    marker = mk(exam_tpl, 'seance_marker')
    set_single_run_text(marker, f"SÉANCE {idx} / {total}")
    out.append(marker)

    title = mk(exam_tpl, 'exam_title')
    title_suffix = exam_spec.get('title_suffix', unit['theme'].upper())
    set_single_run_text(title, f"Sujet d'examen T9 — Unité {unit['num']} — {title_suffix}")
    out.append(title)

    db = mk(exam_tpl, 'duree_bareme')
    set_single_run_text(db, "Durée : 60 minutes — Barème : 20 points")
    out.append(db)

    instr = mk(exam_tpl, 'instruction_exam')
    set_single_run_text(instr, "Lis attentivement chaque consigne et rédige des réponses précises.")
    out.append(instr)

    exercises = exam_spec['exercises']
    for i, ex in enumerate(exercises, start=1):
        out.extend(build_exercise_block(i, ex['points'], ex['instruction'], ex['questions']))

    total_p = mk(exam_tpl, 'total_line_exam')
    set_single_run_text(total_p, "Total : 20 points")
    out.append(total_p)

    out.append(mk(exam_tpl, 'corrige_bareme_header'))

    def exam_corrige_block(num, points, answers):
        elems = []
        h = mk(lesson_tpl, 'exercise_header')
        set_single_run_text(h, f"Exercice {num} ({points} points)")
        elems.append(h)
        for a in answers:
            p = mk(lesson_tpl, 'corrige_line')
            set_single_run_text(p, a)
            elems.append(p)
        return elems

    for i, ex in enumerate(exercises, start=1):
        out.extend(exam_corrige_block(i, ex['points'], ex['answers']))

    total_p2 = mk(exam_tpl, 'total_line_exam')
    set_single_run_text(total_p2, "Total : 20 points")
    out.append(total_p2)

    return out


# ---------------------------------------------------------------------
# 6. Assemblage final du document
# ---------------------------------------------------------------------
def main():
    doc = docx.Document(SRC)
    body = doc.element.body
    footnotes = FootnoteContext(doc)

    # Repartir d'un document propre : on garde uniquement sectPr (fin de
    # document) et on retire tout le contenu de l'ancien manuel T8.
    sect_pr = body.find(qn('w:sectPr'))
    for child in list(body.iterchildren()):
        body.remove(child)

    TOTAL = 76  # numerotation globale des seances du manuel T9 complet

    # -- page de garde minimale --
    cover_p = OxmlElement('w:p')
    run = OxmlElement('w:r')
    rpr = OxmlElement('w:rPr')
    b = OxmlElement('w:b'); rpr.append(b)
    sz = OxmlElement('w:sz'); sz.set(qn('w:val'), '48'); rpr.append(sz)
    run.append(rpr)
    t = OxmlElement('w:t')
    t.text = "GÉOGRAPHIE — TERMINALE T9"
    run.append(t)
    cover_p.append(run)
    body.append(cover_p)

    sub_p = OxmlElement('w:p')
    run2 = OxmlElement('w:r')
    rpr2 = OxmlElement('w:rPr')
    i_el = OxmlElement('w:i'); rpr2.append(i_el)
    run2.append(rpr2)
    t2 = OxmlElement('w:t')
    t2.text = ("Version pilote — Unités 1 à 4 : La structure économique de Madagascar ; "
               "la méthodologie de traitement de devoir ; les potentialités naturelles de Madagascar ; "
               "les potentialités démographiques de Madagascar (50 heures, séances 1 à 58 sur 76). "
               "Document de validation du format avant la production complète des 6 unités du manuel.")
    run2.append(t2)
    sub_p.append(run2)
    body.append(sub_p)
    body.append(clone(lesson_tpl['blank']))

    # ------------------------------------------------------------------
    # Unite 1 : La structure economique de Madagascar (seances 1-20)
    # ------------------------------------------------------------------
    unit_title = mk(unit_header_tpl, 'unit_title')
    set_single_run_text(unit_title, UNIT1['toc_title'])
    body.append(unit_title)
    unit_them = mk(unit_header_tpl, 'unit_thematique')
    set_single_run_text(unit_them, UNIT1['thematique_officielle'])
    body.append(unit_them)
    body.append(mk(unit_header_tpl, 'blank'))

    # -- 18 seances de lecon --
    for i, lesson in enumerate(LESSONS, start=1):
        for el in build_seance_elements(i, TOTAL, lesson, UNIT1, footnotes=footnotes, doc=doc):
            body.append(el)

    # -- revision (seance 19) --
    for el in build_revision_elements(19, TOTAL, UNIT1, LESSONS):
        body.append(el)

    # -- examen (seance 20) --
    for el in build_exam_elements_u1(20, TOTAL, UNIT1, LESSONS):
        body.append(el)

    # ------------------------------------------------------------------
    # Unite 2 : La methodologie de traitement de devoir (seances 21-26)
    # ------------------------------------------------------------------
    body.append(clone(lesson_tpl['blank']))
    unit2_title = mk(unit_header_tpl, 'unit_title')
    set_single_run_text(unit2_title, UNIT2['toc_title'])
    body.append(unit2_title)
    unit2_them = mk(unit_header_tpl, 'unit_thematique')
    set_single_run_text(unit2_them, UNIT2['thematique_officielle'])
    body.append(unit2_them)
    body.append(mk(unit_header_tpl, 'blank'))

    # -- 4 seances de lecon (21-24) --
    for i, lesson in enumerate(LESSONS2, start=21):
        for el in build_seance_elements(i, TOTAL, lesson, UNIT2, footnotes=footnotes, doc=doc):
            body.append(el)

    # -- revision (seance 25) --
    for el in build_revision_elements(25, TOTAL, UNIT2, LESSONS2):
        body.append(el)

    # -- examen (seance 26) --
    for el in build_exam_elements_from_spec(26, TOTAL, UNIT2, EXAM2):
        body.append(el)

    # ------------------------------------------------------------------
    # Unite 3 : Les potentialites naturelles de Madagascar (seances 27-46)
    # ------------------------------------------------------------------
    body.append(clone(lesson_tpl['blank']))
    unit3_title = mk(unit_header_tpl, 'unit_title')
    set_single_run_text(unit3_title, UNIT3['toc_title'])
    body.append(unit3_title)
    unit3_them = mk(unit_header_tpl, 'unit_thematique')
    set_single_run_text(unit3_them, UNIT3['thematique_officielle'])
    body.append(unit3_them)
    body.append(mk(unit_header_tpl, 'blank'))

    # -- 18 seances de lecon (27-44) --
    for i, lesson in enumerate(LESSONS3, start=27):
        for el in build_seance_elements(i, TOTAL, lesson, UNIT3, footnotes=footnotes, doc=doc):
            body.append(el)

    # -- revision (seance 45) --
    for el in build_revision_elements(45, TOTAL, UNIT3, LESSONS3):
        body.append(el)

    # -- examen (seance 46) --
    for el in build_exam_elements_from_spec(46, TOTAL, UNIT3, EXAM3):
        body.append(el)

    # ------------------------------------------------------------------
    # Unite 4 : Les potentialites demographiques de Madagascar (seances 47-58)
    # ------------------------------------------------------------------
    body.append(clone(lesson_tpl['blank']))
    unit4_title = mk(unit_header_tpl, 'unit_title')
    set_single_run_text(unit4_title, UNIT4['toc_title'])
    body.append(unit4_title)
    unit4_them = mk(unit_header_tpl, 'unit_thematique')
    set_single_run_text(unit4_them, UNIT4['thematique_officielle'])
    body.append(unit4_them)
    body.append(mk(unit_header_tpl, 'blank'))

    # -- 10 seances de lecon (47-56) --
    for i, lesson in enumerate(LESSONS4, start=47):
        for el in build_seance_elements(i, TOTAL, lesson, UNIT4, footnotes=footnotes, doc=doc):
            body.append(el)

    # -- revision (seance 57) --
    for el in build_revision_elements(57, TOTAL, UNIT4, LESSONS4):
        body.append(el)

    # -- examen (seance 58) --
    for el in build_exam_elements_from_spec(58, TOTAL, UNIT4, EXAM4):
        body.append(el)

    # -- restaurer sectPr a la fin du document --
    if sect_pr is not None:
        body.append(sect_pr)

    footnotes.save()
    doc.save(OUT)
    print("Document enregistré :", OUT)
    strip_unused_media(str(OUT))


# ---------------------------------------------------------------------
# 7. Nettoyage : suppression des medias T8 orphelins (non referencees)
# ---------------------------------------------------------------------
def strip_unused_media(docx_path):
    import zipfile
    import shutil
    from lxml import etree as LET

    tmp_path = docx_path + ".tmp"
    with zipfile.ZipFile(docx_path, 'r') as zin:
        names = zin.namelist()
        document_xml = zin.read('word/document.xml')
        rels_xml = zin.read('word/_rels/document.xml.rels')

        # Relations d'images reellement utilisees dans le corps du document
        used_rids = set(re.findall(rb'r:embed="([^"]+)"', document_xml))
        used_rids |= set(re.findall(rb'r:id="([^"]+)"', document_xml))

        rels_root = LET.fromstring(rels_xml)
        ns = {'r': 'http://schemas.openxmlformats.org/package/2006/relationships'}
        removed_targets = set()
        for rel in list(rels_root.findall('r:Relationship', ns)):
            rid = rel.get('Id').encode()
            rtype = rel.get('Type')
            target = rel.get('Target')
            if 'image' in rtype and rid not in used_rids:
                removed_targets.add('word/' + target)
                rels_root.remove(rel)
        new_rels_xml = LET.tostring(rels_root, xml_declaration=True, encoding='UTF-8', standalone=True)

        with zipfile.ZipFile(tmp_path, 'w', zipfile.ZIP_DEFLATED) as zout:
            for item in zin.infolist():
                if item.filename in removed_targets:
                    continue
                if item.filename == 'word/_rels/document.xml.rels':
                    zout.writestr(item, new_rels_xml)
                else:
                    zout.writestr(item, zin.read(item.filename))

    shutil.move(tmp_path, docx_path)
    print(f"Médias orphelins supprimés : {len(removed_targets)}")


if __name__ == '__main__':
    main()
