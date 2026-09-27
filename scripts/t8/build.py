# -*- coding: utf-8 -*-
import copy
import os
HERE = os.path.dirname(os.path.abspath(__file__))
import docx
from docx.oxml.ns import qn
from docx.oxml import OxmlElement
from docx.table import Table
from docx.text.paragraph import Paragraph
from lxml import etree

from unit1_content import (UNIT1, LESSONS as LESSONS1, REVISION as REVISION1, EXAM as EXAM1,
                            AUTOEVAL_ROWS as AUTOEVAL_ROWS1, INDEX_TERMS as INDEX_TERMS1)
from unit2_content import (UNIT2, LESSONS as LESSONS2, REVISION as REVISION2, EXAM as EXAM2,
                            AUTOEVAL_ROWS as AUTOEVAL_ROWS2, INDEX_TERMS as INDEX_TERMS2)
from unit3_content import (UNIT3, LESSONS as LESSONS3, REVISION as REVISION3, EXAM as EXAM3,
                            AUTOEVAL_ROWS as AUTOEVAL_ROWS3, INDEX_TERMS as INDEX_TERMS3)

SRC = os.path.join(os.path.dirname(os.path.dirname(HERE)), "SVT T7 [PE] Fiche de preparation sujet corrigés J-Learn (2).docx")
OUT = os.path.join(os.path.dirname(os.path.dirname(HERE)), "SVT T8 [PE] Fiche de preparation sujet corriges J-Learn.docx")

Wp = qn('w:p')
Wtbl = qn('w:tbl')
Wt = qn('w:t')
Wr = qn('w:r')

NSMAP = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}


def ptext(el):
    return ''.join(t.text or '' for t in el.findall('.//' + Wt))


from docx.oxml import parse_xml as _docx_parse_xml

def load_bank(path):
    tree = etree.parse(path)
    root = tree.getroot()
    return [_docx_parse_xml(etree.tostring(el)) for el in root]


bank_unit_header = load_bank(os.path.join(HERE, 'tpl_unit_header.xml'))
bank_lesson = load_bank(os.path.join(HERE, 'tpl_lesson.xml'))
bank_revision = load_bank(os.path.join(HERE, 'tpl_revision.xml'))
bank_exam = load_bank(os.path.join(HERE, 'tpl_exam.xml'))

print("bank_unit_header:", len(bank_unit_header))
print("bank_lesson:", len(bank_lesson))
print("bank_revision:", len(bank_revision))
print("bank_exam:", len(bank_exam))


def clone(el):
    return copy.deepcopy(el)


def set_single_run_text(p_el, text):
    runs = p_el.findall('.//' + Wr)
    # remove drawings-only runs check not needed here
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
    for hl in list(p_el.findall(qn('w:hyperlink'))):
        if hl.find(Wr) is None:
            p_el.remove(hl)


def set_hyperlink_text(p_el, text):
    hl = p_el.find(qn('w:hyperlink'))
    target = hl if hl is not None else p_el
    runs = target.findall(Wr)
    if runs:
        t = runs[0].find(Wt)
        if t is None:
            t = OxmlElement('w:t')
            runs[0].append(t)
        t.text = text
        for r in runs[1:]:
            target.remove(r)


def strip_drawing(p_el):
    """Remove drawing/pict content from an image paragraph, keep paragraph shell."""
    for r in p_el.findall(Wr):
        p_el.remove(r)


def set_bookmark_name(p_el, name):
    for bm in p_el.findall(qn('w:bookmarkStart')):
        bm.set(qn('w:name'), name)


def multirun_set(p_el, parts):
    """parts: list of text strings to map onto existing runs in order (by count)."""
    runs = p_el.findall('.//' + Wr)
    n = min(len(runs), len(parts))
    for i in range(n):
        t = runs[i].find(Wt)
        if t is None:
            t = OxmlElement('w:t')
            runs[i].append(t)
        t.text = parts[i]
        t.set(qn('xml:space'), 'preserve')
    # remove extra runs beyond provided parts
    for r in runs[len(parts):]:
        r.getparent().remove(r)


def set_cell_lines(cell_tc, lines):
    """cell_tc: <w:tc> element. lines: list of strings, one per paragraph (collapsed to single run each)."""
    paras = cell_tc.findall(Wp)
    if not paras:
        return
    if len(lines) <= len(paras):
        for i, line in enumerate(lines):
            set_single_run_text(paras[i], line)
        # blank out extra paragraphs but keep at least them empty (remove text)
        for p in paras[len(lines):]:
            runs = p.findall(Wr)
            if runs:
                set_single_run_text(p, '')
                for r in runs[1:]:
                    pass
    else:
        for i, p in enumerate(paras):
            set_single_run_text(p, lines[i])
        last = paras[-1]
        for line in lines[len(paras):]:
            newp = clone(last)
            set_single_run_text(newp, line)
            last.addnext(newp)
            last = newp


# ---- Role templates extracted from bank_lesson by index ----
TPL = {
    'seance_marker': bank_lesson[0],
    'title': bank_lesson[1],
    'fiche_label': bank_lesson[2],
    'header_table': bank_lesson[3],
    'blank': bank_lesson[4],
    'deroulement_table': bank_lesson[5],
    'title_bm': bank_lesson[7],   # has bookmark
    'img_diagram': bank_lesson[8],
    'fig_caption': bank_lesson[9],
    'img_scene': bank_lesson[10],
    'fig_caption_b': bank_lesson[11],
    'subtitle': bank_lesson[12],
    'body_text': bank_lesson[13],
    'bullet': bank_lesson[16],
    'example_header': bank_lesson[27],
    'example_body': bank_lesson[28],
    'lesaistu_header': bank_lesson[29],
    'lesaistu_body': bank_lesson[30],
    'exercices_header': bank_lesson[31],
    'observe_figure_line': bank_lesson[33],
    'exercise_header': bank_lesson[34],
    'instruction_italic': bank_lesson[35],
    'question_line': bank_lesson[36],
    'total_line': bank_lesson[51],
    'corrige_header': bank_lesson[52],
    'corrige_figure_line': bank_lesson[54],
    'exercice_corrige_header': bank_lesson[55],
    'corrige_phrase_answer': bank_lesson[56],
}

print("Role templates extracted OK")
etree.tostring(bank_lesson[0])  # sanity


def mk(role):
    return clone(TPL[role])


# Need extra role templates from Séance 1 (QCM options, QCM corrige, VF corrige, fillblank corrige, assoc) -----
doc1 = docx.Document(SRC)
body1 = list(doc1.element.body.iterchildren())
S1_START = 93
S1 = [clone(body1[i]) for i in range(93, 201)]


def s1_para(idx_in_paragraphs_only):
    pass


# We already know exact paragraph text roles from earlier analysis using doc1.paragraphs indices;
# but here we work at the raw element level (S1 list) which INCLUDES tables. Let's map by scanning text.
def find_by_text(elems, text_exact):
    for i, el in enumerate(elems):
        if el.tag == Wp and ptext(el).strip() == text_exact.strip():
            return el
    return None


TPL['qcm_option'] = find_by_text(S1, '    A. la bouche')
TPL['qcm_corrige'] = find_by_text(S1, '1. La bonne réponse est : A. la bouche — La digestion commence dans la bouche.')
TPL['vf_question'] = find_by_text(S1, "1. Le tube digestif comprend la bouche, le pharynx, l'œsophage, l'estomac et les intestins.  (V / F)")
TPL['vf_corrige'] = find_by_text(S1, "1. Vrai. Ce sont les éléments du tube digestif.")
TPL['fillblank_question'] = find_by_text(S1, "1. Le tube digestif est formé par la bouche, le pharynx, l'œsophage, l'  …………………………………………")
TPL['fillblank_corrige'] = find_by_text(S1, "1. Le tube digestif est formé par la bouche, le pharynx, l'œsophage, l' estomac.")
TPL['assoc_colA'] = find_by_text(S1, '  1. Bouche')
TPL['assoc_colB'] = find_by_text(S1, '  A. Poche qui reçoit les aliments')
TPL['assoc_corrige'] = find_by_text(S1, '1 — B (Bouche ↔ Introduction des aliments)')
TPL['colonneA_label'] = find_by_text(S1, 'Colonne A')
TPL['colonneB_label'] = find_by_text(S1, 'Colonne B')
TPL['assoc_instruction'] = find_by_text(S1, "Écris le numéro de la colonne A devant la bonne lettre de la colonne B.")
TPL['phrase_question'] = find_by_text(S1, "1. Quel est le rôle de l'œsophage ?")  # from séance 2, fetch separately below

for k in ['qcm_option', 'qcm_corrige', 'vf_question', 'vf_corrige', 'fillblank_question',
          'fillblank_corrige', 'assoc_colA', 'assoc_colB', 'assoc_corrige', 'colonneA_label',
          'colonneB_label', 'assoc_instruction']:
    print(k, 'FOUND' if TPL.get(k) is not None else 'MISSING')

# phrase-style question/answer come from Séance 2 (children 201..285)
S2 = [clone(body1[i]) for i in range(201, 285)]
TPL['phrase_question'] = find_by_text(S2, "1. Quel est le rôle de l'œsophage ?")
print('phrase_question', 'FOUND' if TPL.get('phrase_question') is not None else 'MISSING')

bank_toc_unit_tpl = clone(body1[38])
bank_toc_seance_tpl = clone(body1[39])

with open('/tmp/t8_step1_ok.txt', 'w') as f:
    f.write('ok')
print("STEP 1 DONE")

# ============ ASSEMBLY FUNCTIONS ============
TOTAL_SEANCES = 28  # will be finalized once all 3 units are built; placeholder for now


def build_qcm_exercise(num, points, instruction, items):
    out = []
    h = mk('exercise_header'); set_single_run_text(h, f"Exercice {num} ({points} points)")
    out.append(h)
    ins = mk('instruction_italic'); set_single_run_text(ins, "Encercle la bonne réponse.")
    out.append(ins)
    letters = ['A', 'B', 'C']
    for qi, item in enumerate(items, 1):
        q = mk('question_line'); set_single_run_text(q, f"{qi}. {item['q']}")
        out.append(q)
        for li, opt in enumerate(item['options']):
            o = mk('qcm_option'); set_single_run_text(o, f"    {letters[li]}. {opt}")
            out.append(o)
    blank = mk('blank'); out.append(blank)
    return out


def build_vf_exercise(num, points, instruction, items):
    out = []
    h = mk('exercise_header'); set_single_run_text(h, f"Exercice {num} ({points} points)")
    out.append(h)
    ins = mk('instruction_italic'); set_single_run_text(ins, "Écris V si vraie, F si fausse.")
    out.append(ins)
    for qi, item in enumerate(items, 1):
        q = mk('vf_question'); set_single_run_text(q, f"{qi}. {item['text']}  (V / F)")
        out.append(q)
    blank = mk('blank'); out.append(blank)
    return out


def build_fillblank_exercise(num, points, instruction, items):
    out = []
    h = mk('exercise_header'); set_single_run_text(h, f"Exercice {num} ({points} points)")
    out.append(h)
    ins = mk('instruction_italic'); set_single_run_text(ins, "Complète les phrases.")
    out.append(ins)
    for qi, item in enumerate(items, 1):
        q = mk('fillblank_question')
        set_single_run_text(q, f"{qi}. {item['prefix']}  \u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026")
        out.append(q)
    blank = mk('blank'); out.append(blank)
    return out


def build_phrase_exercise(num, points, instruction, items):
    out = []
    h = mk('exercise_header'); set_single_run_text(h, f"Exercice {num} ({points} points)")
    out.append(h)
    ins = mk('instruction_italic'); set_single_run_text(ins, "Réponds par une phrase.")
    out.append(ins)
    for qi, item in enumerate(items, 1):
        q = mk('phrase_question'); set_single_run_text(q, f"{qi}. {item}")
        out.append(q)
    blank = mk('blank'); out.append(blank)
    return out


def build_assoc_exercise(num, points, instruction, colA, colB):
    out = []
    h = mk('exercise_header'); set_single_run_text(h, f"Exercice {num} ({points} points)")
    out.append(h)
    calabel = mk('colonneA_label'); out.append(calabel)
    for i, txt in enumerate(colA, 1):
        p = mk('assoc_colA'); set_single_run_text(p, f"  {i}. {txt}")
        out.append(p)
    cblabel = mk('colonneB_label'); out.append(cblabel)
    letters = ['A', 'B', 'C', 'D', 'E']
    for i, txt in enumerate(colB):
        p = mk('assoc_colB'); set_single_run_text(p, f"  {letters[i]}. {txt}")
        out.append(p)
    ins = mk('assoc_instruction'); out.append(ins)
    blank = mk('blank'); out.append(blank)
    return out


def build_exercise(num, ex):
    t = ex['type']
    if t == 'qcm':
        return build_qcm_exercise(num, ex['points'], ex.get('instruction', ''), ex['items'])
    if t == 'vf':
        return build_vf_exercise(num, ex['points'], ex.get('instruction', ''), ex['items'])
    if t == 'fillblank':
        return build_fillblank_exercise(num, ex['points'], ex.get('instruction', ''), ex['items'])
    if t == 'phrase':
        return build_phrase_exercise(num, ex['points'], ex.get('instruction', ''), ex['items'])
    if t == 'assoc':
        return build_assoc_exercise(num, ex['points'], ex.get('instruction', ''), ex['colA'], ex['colB'])
    raise ValueError(t)


LETTERS = ['A', 'B', 'C']


def build_qcm_corrige(num, items):
    out = []
    h = mk('exercice_corrige_header'); set_single_run_text(h, f"Exercice {num} — corrigé")
    out.append(h)
    for qi, item in enumerate(items, 1):
        p = mk('qcm_corrige')
        letter = LETTERS[item['correct']]
        opt_text = item['options'][item['correct']]
        explain = item.get('explain', '')
        suffix = f". {opt_text} — {explain}" if explain else f". {opt_text}"
        multirun_set(p, [f"{qi}. ", f"La bonne réponse est : {letter}", suffix])
        out.append(p)
    blank = mk('blank'); out.append(blank)
    return out


def build_vf_corrige(num, items):
    out = []
    h = mk('exercice_corrige_header'); set_single_run_text(h, f"Exercice {num} — corrigé")
    out.append(h)
    for qi, item in enumerate(items, 1):
        p = mk('vf_corrige')
        word = 'Vrai' if item['truth'] else 'Faux'
        explain = item.get('explain', '')
        suffix = f". {explain}" if explain else "."
        multirun_set(p, [f"{qi}. ", word, suffix])
        out.append(p)
    blank = mk('blank'); out.append(blank)
    return out


def build_fillblank_corrige(num, items):
    out = []
    h = mk('exercice_corrige_header'); set_single_run_text(h, f"Exercice {num} — corrigé")
    out.append(h)
    for qi, item in enumerate(items, 1):
        p = mk('fillblank_corrige')
        multirun_set(p, [f"{qi}. {item['prefix']}", item['answer'], item['suffix']])
        out.append(p)
    blank = mk('blank'); out.append(blank)
    return out


def build_phrase_corrige(num, items, answers):
    out = []
    h = mk('exercice_corrige_header'); set_single_run_text(h, f"Exercice {num} — corrigé")
    out.append(h)
    for qi, ans in enumerate(answers, 1):
        p = mk('corrige_phrase_answer'); set_single_run_text(p, f"{qi}. {ans}")
        out.append(p)
    blank = mk('blank'); out.append(blank)
    return out


def build_assoc_corrige(num, colA, colB, correct_map):
    out = []
    h = mk('exercice_corrige_header'); set_single_run_text(h, f"Exercice {num} — corrigé")
    out.append(h)
    letters = ['A', 'B', 'C', 'D', 'E']
    for i in sorted(correct_map.keys()):
        letter_idx = correct_map[i] - 1
        p = mk('assoc_corrige')
        line = f"{i} — {letters[letter_idx]} ({colA[i-1]} \u2194 {colB[letter_idx]})"
        multirun_set(p, [line, ''])
        out.append(p)
    blank = mk('blank'); out.append(blank)
    return out


def build_corrige(num, ex):
    t = ex['type']
    if t == 'qcm':
        return build_qcm_corrige(num, ex['items'])
    if t == 'vf':
        return build_vf_corrige(num, ex['items'])
    if t == 'fillblank':
        return build_fillblank_corrige(num, ex['items'])
    if t == 'phrase':
        return build_phrase_corrige(num, ex['items'], ex['answers'])
    if t == 'assoc':
        return build_assoc_corrige(num, ex['colA'], ex['colB'], ex['correct'])
    raise ValueError(t)


def total_points(exercises):
    return sum(e['points'] for e in exercises)


print("STEP 2 (exercise builders) DONE")

# ============ TABLE FILLERS ============

def fill_header_table(tbl_el, lesson_num, total, theme, titre, objectif, classe_label, thematique_ras, valeurs):
    """1-row x 2-col fiche header table."""
    t = Table(tbl_el, doc1)  # parent used only for style resolution; fine to reuse doc1
    row = t.rows[0]
    left = row.cells[0]
    right = row.cells[1]
    # left cell paragraphs: Discipline | Thème | Titre | Objectif spécifique
    left_lines = [
        "Discipline : Sciences de la vie et de la terre",
        f"Thème : {theme}",
        f"Titre : {titre}",
        f"Objectif spécifique : {objectif}",
    ]
    set_cell_lines(left._tc, left_lines)
    right_lines = [
        "Date : ____________",
        f"Classe : {classe_label}",
        f"Séance n° : {lesson_num} / {total}",
        "Durée : ____________",
        f"Thématique / RAS : {thematique_ras}",
        f"Valeurs à véhiculer : {valeurs}",
    ]
    set_cell_lines(right._tc, right_lines)


def fill_deroulement_table(tbl_el, d):
    """11-row x 6-col déroulement table. d is a dict with lesson fields."""
    t = Table(tbl_el, doc1)
    rows = t.rows
    # Row 2 (index 2): I. RÉVISION -> col1 (Enseignant Qs), col2 (R.A.)
    set_cell_lines(rows[2].cells[1]._tc, d['revision_q'])
    set_cell_lines(rows[2].cells[2]._tc, d['revision_ra'])
    # Row 4 (index 4): 1. Mise en situation
    set_cell_lines(rows[4].cells[1]._tc, [d['mise_situation']])
    set_cell_lines(rows[4].cells[2]._tc, [d['mise_ra']])
    # Row 5 (index 5): 2. Présentation
    presentation = (f"Aujourd'hui nous allons apprendre : « {d['title']} ». "
                     f"Après cette séance vous serez capables de {d['objectif']}.")
    set_cell_lines(rows[5].cells[1]._tc, [presentation])
    set_cell_lines(rows[5].cells[2]._tc, ["Les élèves écoutent."])
    # Row 6 (index 6): 3. Observation
    set_cell_lines(rows[6].cells[1]._tc, [d['observation']])
    set_cell_lines(rows[6].cells[2]._tc, ["Les élèves observent silencieusement."])
    set_cell_lines(rows[6].cells[4]._tc, [d['observation_support']])
    # Row 7 (index 7): 4. Analyse
    set_cell_lines(rows[7].cells[1]._tc, d['analyse_q'])
    set_cell_lines(rows[7].cells[2]._tc, d['analyse_ra'])
    set_cell_lines(rows[7].cells[4]._tc, [d['observation_support']])
    # Row 8 (index 8): 5. Synthèse
    set_cell_lines(rows[8].cells[1]._tc, [d['synthese']])
    set_cell_lines(rows[8].cells[2]._tc, ["Les élèves écoutent."])
    # Row 9 (index 9): 6. Application -> preview of exercise 1
    ex1 = d['exercises'][0]
    if ex1['type'] == 'qcm':
        preview_q = "Exercice 1\nEncercle la bonne réponse.\n" + ex1['items'][0]['q']
        preview_a = f"Exercice 1 : réponse {LETTERS[ex1['items'][0]['correct']]}."
    elif ex1['type'] == 'phrase':
        preview_q = "Exercice 1\nRéponds par une phrase.\n" + ex1['items'][0]
        preview_a = f"Exercice 1 : {ex1['answers'][0]}"
    else:
        preview_q = "Exercice 1 (voir page EXERCICES)."
        preview_a = "Voir corrigé."
    set_cell_lines(rows[9].cells[1]._tc, [preview_q])
    set_cell_lines(rows[9].cells[2]._tc, [preview_a])
    # Row 10 (index 10): III. ÉVALUATION -> full exercises summary
    set_cell_lines(rows[10].cells[1]._tc, ["Voir la page EXERCICES pour l'évaluation écrite complète."])
    set_cell_lines(rows[10].cells[2]._tc, ["Voir la page CORRIGÉ."])


print("STEP 3 (table fillers) DONE")

# ============ LESSON BLOCK BUILDER ============

def build_lesson_block(lesson, unit, lesson_num, total_seances, classe_label="T8"):
    out = []
    sm = mk('seance_marker'); set_single_run_text(sm, f"SÉANCE {lesson_num} / {total_seances}")
    out.append(sm)
    title1 = mk('title'); set_single_run_text(title1, lesson['title'])
    out.append(title1)
    out.append(mk('fiche_label'))
    header_tbl = mk('header_table')
    fill_header_table(header_tbl, lesson_num, total_seances, unit['theme'], lesson['title'],
                       lesson['objectif'], classe_label, unit['ras_short'], unit['valeurs_short'])
    out.append(header_tbl)
    out.append(mk('blank'))
    dt = mk('deroulement_table')
    fill_deroulement_table(dt, lesson)
    out.append(dt)
    out.append(mk('blank'))
    title2 = mk('title_bm')
    set_single_run_text(title2, lesson['title'])
    set_bookmark_name(title2, f"seance{lesson_num}")
    out.append(title2)
    out.append(mk('blank'))
    img1 = mk('img_diagram'); strip_drawing(img1)
    out.append(img1)
    cap1 = mk('fig_caption'); set_single_run_text(cap1, f"Figure {lesson['fignum']} — {lesson['fig_title']}.")
    out.append(cap1)
    out.append(mk('blank'))
    img2 = mk('img_scene'); strip_drawing(img2)
    out.append(img2)
    cap2 = mk('fig_caption_b'); set_single_run_text(cap2, f"Figure {lesson['fignum']}b — {lesson['fig_b']}.")
    out.append(cap2)
    # body sections
    for subtitle, body, bullets in lesson['body']:
        st = mk('subtitle'); set_single_run_text(st, subtitle)
        out.append(st)
        bt = mk('body_text'); set_single_run_text(bt, body)
        out.append(bt)
        for b in bullets:
            bl = mk('bullet'); set_single_run_text(bl, f"\u2022 {b}")
            out.append(bl)
    eh = mk('example_header'); out.append(eh)
    eb = mk('example_body'); set_single_run_text(eb, lesson['example'])
    out.append(eb)
    lh = mk('lesaistu_header'); out.append(lh)
    lb = mk('lesaistu_body'); set_single_run_text(lb, lesson['lesaistu'])
    out.append(lb)
    out.append(mk('exercices_header'))
    out.append(mk('blank'))
    ofl = mk('observe_figure_line')
    set_single_run_text(ofl, f"Observe la figure puis réponds. Figure {lesson['fignum']} — {lesson['fig_title']}.")
    out.append(ofl)
    for i, ex in enumerate(lesson['exercises'], 1):
        out.extend(build_exercise(i, ex))
    tot = mk('total_line'); set_single_run_text(tot, f"TOTAL : {total_points(lesson['exercises'])} points")
    out.append(tot)
    out.append(mk('corrige_header'))
    out.append(mk('blank'))
    cfl = mk('corrige_figure_line')
    set_single_run_text(cfl, f"Corrigé — même figure que l'exercice 1. Figure {lesson['fignum']} — {lesson['fig_title']}.")
    out.append(cfl)
    for i, ex in enumerate(lesson['exercises'], 1):
        out.extend(build_corrige(i, ex))
    out.append(mk('blank'))
    return out


print("STEP 4 (lesson block builder) DONE")

# ============ REVISION BLOCK BUILDER ============

def fill_recap_table(tbl_el, notion_rows):
    """notion_rows: list of (notion, essentiel) tuples; template has 5 data rows (+1 header)."""
    t = Table(tbl_el, doc1)
    rows = t.rows
    data_rows = rows[1:]
    n = len(notion_rows)
    if n <= len(data_rows):
        for i, (notion, essentiel) in enumerate(notion_rows):
            set_cell_lines(data_rows[i].cells[0]._tc, [notion])
            set_cell_lines(data_rows[i].cells[1]._tc, [essentiel])
        # blank extra rows' text but keep row (simplify: leave as-is if none extra since we plan exact match)
    else:
        for i, row in enumerate(data_rows):
            notion, essentiel = notion_rows[i]
            set_cell_lines(row.cells[0]._tc, [notion])
            set_cell_lines(row.cells[1]._tc, [essentiel])
        # add extra rows by cloning last row
        last_tr = data_rows[-1]._tr
        for notion, essentiel in notion_rows[len(data_rows):]:
            new_tr = clone(last_tr)
            new_row_wrapper = None
            last_tr.addnext(new_tr)
            last_tr = new_tr
            # refresh Table wrapper cells via raw search
            cells_tc = new_tr.findall(qn('w:tc'))
            set_cell_lines(cells_tc[0], [notion])
            set_cell_lines(cells_tc[1], [essentiel])


def build_revision_block(rev, unit, seance_num, total_seances):
    out = []
    sm = clone(bank_revision[0]); set_single_run_text(sm, f"SÉANCE {seance_num} / {total_seances}")
    set_bookmark_name(sm, f"seance{seance_num}")
    out.append(sm)
    title = mk('title'); set_single_run_text(title, rev['title'])
    out.append(title)
    out.append(mk('blank'))
    img = mk('img_diagram'); strip_drawing(img)
    out.append(img)
    cap = mk('fig_caption'); set_single_run_text(cap, f"Figure R{unit['num']} — {rev['fig_title']}.")
    out.append(cap)
    out.append(clone(bank_revision[4]))  # 'Tableau récapitulatif des notions'
    recap_tbl = clone(bank_revision[5])
    fill_recap_table(recap_tbl, rev['notions'])
    out.append(recap_tbl)
    out.append(clone(bank_revision[6]))  # 'Questions de révision'
    for q, ra in rev['questions']:
        qp = clone(bank_revision[7]); set_single_run_text(qp, q)
        out.append(qp)
        rap = clone(bank_revision[8]); set_single_run_text(rap, ra)
        out.append(rap)
    out.append(clone(bank_revision[15]))  # blank
    return out


print("STEP 5 (revision block builder) DONE")

# ============ EXAM BLOCK BUILDER ============

def build_exam_block(exam, unit, seance_num, total_seances):
    out = []
    sm = clone(bank_exam[0]); set_single_run_text(sm, f"SÉANCE {seance_num} / {total_seances}")
    set_bookmark_name(sm, f"seance{seance_num}")
    out.append(sm)
    title = mk('title'); set_single_run_text(title, exam['title'])
    out.append(title)
    durline = clone(bank_exam[2])
    set_single_run_text(durline, f"Durée : ____________ (laissée à l'enseignant)   \u00b7   Barème total : {exam['barème']} points")
    out.append(durline)
    out.append(clone(bank_exam[3]))  # blank
    img = mk('img_diagram'); strip_drawing(img)
    out.append(img)
    fig = clone(bank_exam[4]); set_single_run_text(fig, f"Figure E{unit['num']} — {exam['fig_title']}.")
    out.append(fig)
    for i, ex in enumerate(exam['exercises'], 1):
        out.extend(build_exercise(i, ex))
    tot = clone(bank_exam[35]); set_single_run_text(tot, f"TOTAL : {total_points(exam['exercises'])} points")
    out.append(tot)
    out.append(clone(bank_exam[36]))  # CORRIGÉ
    out.append(clone(bank_exam[37]))  # blank
    cfl = clone(bank_exam[38])
    set_single_run_text(cfl, f"Même figure que la question 1 — corrigé. Figure E{unit['num']} — {exam['fig_title']}.")
    out.append(cfl)
    for i, ex in enumerate(exam['exercises'], 1):
        out.extend(build_corrige(i, ex))
    return out


print("STEP 6 (exam block builder) DONE")

# ============ UNIT HEADER + TOC BUILDERS ============
ROMAN = {1: 'I', 2: 'II', 3: 'III'}


def build_toc_unit_line(unit):
    p = clone(bank_toc_unit_tpl)
    set_hyperlink_text(p, unit['toc_title'])
    hl = p.find(qn('w:hyperlink'))
    hl.set(qn('w:anchor'), f"unite{ROMAN[unit['num']]}")
    return p


def build_toc_seance_line(seance_num, title):
    p = clone(bank_toc_seance_tpl)
    set_hyperlink_text(p, f"Séance {seance_num} — {title}")
    hl = p.find(qn('w:hyperlink'))
    hl.set(qn('w:anchor'), f"seance{seance_num}")
    return p


def resize_table_data_rows(tbl_el, n_needed):
    """Template unit-summary table has 1 header row + 6 data rows. Adjust to n_needed data rows."""
    trs = tbl_el.findall(qn('w:tr'))
    header_tr = trs[0]
    data_trs = trs[1:]
    if n_needed <= len(data_trs):
        for tr in data_trs[n_needed:]:
            tbl_el.remove(tr)
    else:
        last = data_trs[-1]
        for _ in range(n_needed - len(data_trs)):
            new_tr = clone(last)
            last.addnext(new_tr)
            last = new_tr


def fill_unit_summary_table(tbl_el, rows):
    """rows: list of (n, title) tuples."""
    resize_table_data_rows(tbl_el, len(rows))
    t = Table(tbl_el, doc1)
    for i, (n, title) in enumerate(rows, start=1):
        row = t.rows[i]
        set_cell_lines(row.cells[0]._tc, [str(n)])
        set_cell_lines(row.cells[1]._tc, [title])


def build_unit_header_block(unit, summary_rows):
    out = []
    title = mk_uh(0)
    set_single_run_text(title, unit['toc_title'])
    set_bookmark_name(title, f"unite{ROMAN[unit['num']]}")
    out.append(title)
    ras = mk_uh(1); set_single_run_text(ras, f"Résultat d'apprentissage spécifique (PE T8) : {unit['ras_full']}")
    out.append(ras)
    val = mk_uh(2); set_single_run_text(val, f"Valeurs à véhiculer : {unit['valeurs_full']}")
    out.append(val)
    tbl = mk_uh(3)
    fill_unit_summary_table(tbl, summary_rows)
    out.append(tbl)
    out.append(mk_uh(4))
    out.append(mk_uh(5))
    return out


def mk_uh(i):
    return clone(bank_unit_header[i])


print("STEP 7 (unit header + toc builders) DONE -- but bank_toc templates not yet loaded")

# ============ BACK MATTER TEMPLATES (from T7 raw body1) ============
def clone_range(lo, hi):
    return [clone(body1[i]) for i in range(lo, hi)]


BM_ANNEXES_HEADER = clone(body1[2788])           # 'ANNEXES'
BM_ANNEX_IMG = clone(body1[2789])                # image paragraph
BM_ANNEX_CAPTION = clone(body1[2790])            # 'Figure A1 — ...'
BM_GLOSSAIRE_HEADER = clone(body1[2791])         # 'GLOSSAIRE'
_gi = sum(1 for e in body1[:2792] if e.tag == Wtbl)
BM_GLOSSAIRE_TBL = clone(doc1.tables[_gi]._tbl)
BM_AUTOEVAL_HEADER = clone(body1[2793])
BM_AUTOEVAL_INTRO = clone(body1[2794])
_ai = sum(1 for e in body1[:2795] if e.tag == Wtbl)
BM_AUTOEVAL_TBL = clone(doc1.tables[_ai]._tbl)
BM_INDEX_HEADER = clone(body1[2796])
BM_INDEX_LINE_TPL = clone(body1[2797])
BM_EVALEXAM_HEADER = clone(body1[2921])
BM_EVALEXAM_INTRO = clone(body1[2922])
BM_EVALEXAM_LINE_TPL = clone(body1[2923])
BM_ILLUS_HEADER = clone(body1[2928])
BM_ILLUS_LINE_TPL = clone(body1[2929])


def build_back_matter(units_ready, figures_list):
    """units_ready: list of unit dicts (with 'num','toc_title','glossaire','index_terms','autoeval_rows').
    figures_list: list of (label, caption) tuples e.g. ('Figure 1', 'texte...')."""
    out = []
    # ANNEXES
    out.append(clone(BM_ANNEXES_HEADER))
    img = clone(BM_ANNEX_IMG); strip_drawing(img)
    out.append(img)
    cap = clone(BM_ANNEX_CAPTION)
    set_single_run_text(cap, "Figure A1 — Schéma-bilan : la santé et le bien-être.")
    out.append(cap)
    # GLOSSAIRE
    out.append(clone(BM_GLOSSAIRE_HEADER))
    gloss_terms = []
    for u in units_ready:
        gloss_terms.extend(u['glossaire'])
    gt = clone(BM_GLOSSAIRE_TBL)
    resize_table_data_rows(gt, len(gloss_terms))
    tw = Table(gt, doc1)
    for i, (term, defi) in enumerate(gloss_terms, start=1):
        set_cell_lines(tw.rows[i].cells[0]._tc, [term])
        set_cell_lines(tw.rows[i].cells[1]._tc, [defi])
    out.append(gt)
    # AUTO-ÉVALUATION
    out.append(clone(BM_AUTOEVAL_HEADER))
    out.append(clone(BM_AUTOEVAL_INTRO))
    autoeval_rows = []
    for u in units_ready:
        autoeval_rows.extend(u['autoeval_rows'])
    at = clone(BM_AUTOEVAL_TBL)
    resize_table_data_rows(at, len(autoeval_rows))
    tw2 = Table(at, doc1)
    for i, label in enumerate(autoeval_rows, start=1):
        set_cell_lines(tw2.rows[i].cells[0]._tc, [label])
        set_cell_lines(tw2.rows[i].cells[1]._tc, ["\u2610"])
        set_cell_lines(tw2.rows[i].cells[2]._tc, ["\u2610"])
        set_cell_lines(tw2.rows[i].cells[3]._tc, ["\u2610"])
    out.append(at)
    # INDEX
    out.append(clone(BM_INDEX_HEADER))
    index_terms = {}
    for u in units_ready:
        for term, seances in u['index_terms']:
            index_terms.setdefault(term, [])
            for s in seances:
                if s not in index_terms[term]:
                    index_terms[term].append(s)
    for term in sorted(index_terms.keys()):
        line = clone(BM_INDEX_LINE_TPL)
        refs = '  '.join(f"Séance {s}" for s in index_terms[term])
        set_single_run_text(line, f"{term}  :  {refs}  ")
        out.append(line)
    # ÉVALUATIONS FORMAT EXAMEN
    out.append(clone(BM_EVALEXAM_HEADER))
    intro = clone(BM_EVALEXAM_INTRO)
    set_single_run_text(intro,
        "Les sujets d'examen 4e de chaque unité sont regroupés ci-dessous pour préparer les évaluations.")
    out.append(intro)
    for u in units_ready:
        line = clone(BM_EVALEXAM_LINE_TPL)
        unit_label = u['toc_title'].split(chr(0x2014))[0].strip()
        set_single_run_text(line, f"{unit_label} — {u['exam_title']}")
        hl = line.find(qn('w:hyperlink'))
        if hl is not None:
            hl.set(qn('w:anchor'), f"seance{u['exam_seance_num']}")
        out.append(line)
    # TABLE DES ILLUSTRATIONS
    out.append(clone(BM_ILLUS_HEADER))
    for label, caption, seance_num in figures_list:
        line = clone(BM_ILLUS_LINE_TPL)
        set_single_run_text(line, f"{label} — {caption}")
        hl = line.find(qn('w:hyperlink'))
        if hl is not None:
            hl.set(qn('w:anchor'), f"seance{seance_num}")
        out.append(line)
    return out


print("STEP 8 (back matter builder) DONE")

# ============ MAIN ASSEMBLY ============
UNIT1['index_terms'] = INDEX_TERMS1
UNIT1['autoeval_rows'] = AUTOEVAL_ROWS1
UNIT2['index_terms'] = INDEX_TERMS2
UNIT2['autoeval_rows'] = AUTOEVAL_ROWS2
UNIT3['index_terms'] = INDEX_TERMS3
UNIT3['autoeval_rows'] = AUTOEVAL_ROWS3

# Each ready unit as a tuple: (unit_dict, lessons_list, revision_dict, exam_dict)
UNITS_READY = [
    (UNIT1, LESSONS1, REVISION1, EXAM1),
    (UNIT2, LESSONS2, REVISION2, EXAM2),
    (UNIT3, LESSONS3, REVISION3, EXAM3),
]

# Full approved plan: Unit I=10 séances, Unit II=9, Unit III=9 -> 28 total.
GLOBAL_TOTAL_SEANCES = 28


def build_one_unit(unit, lessons, revision, exam, seance_offset):
    """Returns (toc_lines, unit_body_elements, figures_list, exam_seance_num, n_seances)."""
    n_lessons = len(lessons)
    n_seances = n_lessons + 2  # + révision + examen

    toc_lines = [build_toc_unit_line(unit)]
    for i, lesson in enumerate(lessons, start=1):
        toc_lines.append(build_toc_seance_line(seance_offset + i, lesson['title']))
    toc_lines.append(build_toc_seance_line(seance_offset + n_lessons + 1, revision['title']))
    toc_lines.append(build_toc_seance_line(seance_offset + n_lessons + 2, exam['title']))

    summary_rows = [(i, lesson['title']) for i, lesson in enumerate(lessons, start=1)]
    summary_rows.append((n_lessons + 1, revision['title']))
    summary_rows.append((n_lessons + 2, exam['title']))

    exam_seance_num = seance_offset + n_lessons + 2
    unit['exam_seance_num'] = exam_seance_num
    # remap index_terms from local (1..n_lessons) to global séance numbers
    unit['index_terms'] = [(term, [seance_offset + s for s in seances])
                            for term, seances in unit['index_terms']]

    unit_body = build_unit_header_block(unit, summary_rows)
    figures_list = []
    for i, lesson in enumerate(lessons, start=1):
        global_i = seance_offset + i
        unit_body.extend(build_lesson_block(lesson, unit, global_i, GLOBAL_TOTAL_SEANCES))
        figures_list.append((f"Figure {lesson['fignum']}", lesson['fig_title'] + ".", global_i))
        figures_list.append((f"Figure {lesson['fignum']}b", lesson['fig_b'] + ".", global_i))
    unit_body.extend(build_revision_block(revision, unit, seance_offset + n_lessons + 1, GLOBAL_TOTAL_SEANCES))
    figures_list.append((f"Figure R{unit['num']}", revision['fig_title'] + ".", seance_offset + n_lessons + 1))
    unit_body.extend(build_exam_block(exam, unit, exam_seance_num, GLOBAL_TOTAL_SEANCES))
    figures_list.append((f"Figure E{unit['num']}", exam['fig_title'] + ".", exam_seance_num))

    return toc_lines, unit_body, figures_list, n_seances


def main():
    front_matter = [clone(body1[i]) for i in range(0, 38)]  # 0..37 inclusive
    # retarget cover / avant-propos text from T7 (5e) to T8 (4e), 3 unites
    multirun_set(front_matter[10], ["SVT ", "T8 (4e)"])
    set_single_run_text(front_matter[14],
        "Ce manuel de Sciences de la vie et de la terre pour la classe de T8 (4e) a été élaboré à "
        "partir du Programme d'Études officiel de Madagascar, section « Sciences de la vie et de la "
        "terre ». Il couvre les trois thématiques du programme : la santé et le bien-être (appareil "
        "respiratoire, appareil circulatoire et le sang), la reproduction humaine (IST/SIDA) et la "
        "géologie (les roches).")
    set_single_run_text(front_matter[17],
        "Les séances sont regroupées en trois unités, une par thématique du programme. Chaque unité "
        "se termine par une séance de révision et un « Sujet d'examen 4e » corrigé, avec barème.")
    blank_before_units = clone(body1[86])
    sect_pr = clone(body1[-1])

    # ---- back-matter TOC lines (reuse existing anchors annexes/glossaire/autoeval/index/evalexamen/illus) ----
    bm_toc_src_idx = {'annexes': 80, 'glossaire': 81, 'autoeval': 82, 'index': 83, 'evalexamen': 84, 'illus': 85}
    bm_toc_lines = [clone(body1[bm_toc_src_idx[k]]) for k in ['annexes', 'glossaire', 'autoeval', 'index', 'evalexamen', 'illus']]

    all_toc_lines = []
    all_body = []
    all_figures = []
    units_for_back_matter = []
    offset = 0
    for (unit, lessons, revision, exam) in UNITS_READY:
        toc_lines, unit_body, figures_list, n_seances = build_one_unit(unit, lessons, revision, exam, offset)
        all_toc_lines.extend(toc_lines)
        all_body.extend(unit_body)
        all_figures.extend(figures_list)
        units_for_back_matter.append(unit)
        offset += n_seances

    back_matter = build_back_matter(units_for_back_matter, all_figures)

    # ---- Assemble final element list ----
    final_elements = (front_matter + all_toc_lines + bm_toc_lines + [blank_before_units]
                       + all_body + back_matter + [sect_pr])

    # ---- Build output docx from a fresh copy of T7 (keeps styles/media parts) ----
    import shutil
    shutil.copyfile(SRC, OUT)
    outdoc = docx.Document(OUT)
    body_el = outdoc.element.body
    for child in list(body_el):
        body_el.remove(child)
    for el in final_elements:
        body_el.append(el)

    # ---- Drop unused image relationships (orphaned media from T7 template) ----
    used_rids = set()
    xml_str = etree.tostring(body_el).decode('utf-8', errors='ignore')
    import re
    for m in re.finditer(r'r:(?:embed|link|id)="([^"]+)"', xml_str):
        used_rids.add(m.group(1))
    doc_part = outdoc.part
    rels = doc_part.rels
    to_delete = []
    for rid, rel in list(rels.items()):
        if rel.reltype.endswith('/image') and rid not in used_rids:
            to_delete.append(rid)
    for rid in to_delete:
        del rels[rid]
    print(f"Dropped {len(to_delete)} unused image relationships")

    outdoc.save(OUT)
    print("SAVED:", OUT)
    print("Total séances built:", offset, "/ target", GLOBAL_TOTAL_SEANCES)
    return final_elements


if __name__ == '__main__':
    main()
