# -*- coding: utf-8 -*-
"""Extract per-seance structured content from the Manuel-SVT-T9-complet reference
into a pickle file, for later transplantation into the official Fiche de
preparation docx (T9 draft).
"""
import os
import re
import pickle

import docx
from docx.oxml.ns import qn
from docx.table import Table
from lxml import etree

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(os.path.dirname(HERE))
MANUAL_PATH = os.path.join(ROOT, "Manuel-SVT-T9-complet (1).docx")

Wp = qn('w:p')
Wtbl = qn('w:tbl')
Wt = qn('w:t')


def elem_text(el):
    return ''.join(t.text or '' for t in el.findall('.//' + Wt))


def main():
    d = docx.Document(MANUAL_PATH)
    body = d.element.body
    elems = list(body)

    markers = []  # (elem_index, seance_num, title)
    pat = re.compile(r'^SÉANCE (\d+) / 51\s*(?:—\s*(.*))?$')
    for i, el in enumerate(elems):
        if el.tag == Wp:
            txt = elem_text(el).strip()
            m = pat.match(txt)
            if m:
                markers.append((i, int(m.group(1)), m.group(2) or ''))

    print(f"Found {len(markers)} seance markers in manual")
    assert len(markers) == 51, len(markers)

    annexe_pat = re.compile(r'^Annexes\s*$')
    seances = {}
    for k, (start_idx, num, title) in enumerate(markers):
        end_idx = markers[k + 1][0] if k + 1 < len(markers) else len(elems)
        # the manual's own back-matter ("Annexes" section documenting sources/
        # verifications) follows the very last seance with no seance marker to
        # bound it -- cut it off explicitly.
        for j in range(start_idx, end_idx):
            el = elems[j]
            if el.tag == Wp and annexe_pat.match(elem_text(el).strip()):
                end_idx = j
                break
        seances[num] = parse_seance(d, elems, start_idx, end_idx, title)
        print(f"parsed seance {num}: {title}")

    with open(os.path.join(HERE, 'manual_seances.pkl'), 'wb') as f:
        pickle.dump(seances, f)
    print("Saved to manual_seances.pkl")


def parse_seance(d, elems, start_idx, end_idx, title):
    """start_idx points at the 'SÉANCE N / 51 — Title' paragraph."""
    objectif = None
    support = None
    theme_valeurs_line = None
    deroulement_rows = []
    note_enseignant = None

    i = start_idx + 1
    pre_table_paras = []
    while i < end_idx:
        el = elems[i]
        if el.tag == Wtbl:
            break
        if el.tag == Wp:
            txt = elem_text(el).strip()
            if txt:
                pre_table_paras.append(txt)
        i += 1

    for txt in pre_table_paras:
        if txt.startswith('Objectif spécifique'):
            objectif = txt.split(':', 1)[1].strip()
        elif txt.startswith('Support et matériel'):
            support = txt.split(':', 1)[1].strip()
        elif txt.startswith('Thème'):
            theme_valeurs_line = txt

    while i < end_idx:
        el = elems[i]
        if el.tag == Wp:
            if elem_text(el).strip():
                break  # hit real content before finding a deroulement table
            i += 1
            continue
        if el.tag == Wtbl:
            t = Table(el, d)
            if len(t.columns) == 1 and len(t.rows) == 1:
                txt = t.rows[0].cells[0].text.strip()
                if txt.startswith('🧑') or 'enseignant' in txt.lower()[:40]:
                    note_enseignant = txt
                    i += 1
                    continue
            if len(t.columns) == 6:
                for r in t.rows[1:]:
                    deroulement_rows.append([c.text.strip() for c in r.cells])
                i += 1
                break
            i += 1
            continue
        i += 1

    rest_start = i
    exercices_marker_idx = None
    corrige_marker_idx = None
    total_text = None
    corrige_pat = re.compile(r'^(CORRIGÉ|Corrigé)\b')
    for j in range(rest_start, end_idx):
        el = elems[j]
        if el.tag == Wp:
            txt = elem_text(el).strip()
            if txt in ('Section EXERCICES', 'EXERCICES') and exercices_marker_idx is None:
                exercices_marker_idx = j
            elif corrige_pat.match(txt) and corrige_marker_idx is None:
                corrige_marker_idx = j
            elif txt.startswith('TOTAL :') or txt.startswith('TOTAL:'):
                total_text = txt

    has_lecon_section = exercices_marker_idx is not None

    lecon_zone_start = rest_start
    if has_lecon_section:
        j = rest_start
        skipped_marker = False
        while j < exercices_marker_idx:
            el = elems[j]
            if el.tag == Wp:
                txt = elem_text(el).strip()
                if txt:
                    if txt == 'Page LEÇON' and not skipped_marker:
                        skipped_marker = True
                        j += 1
                        continue
                    lecon_zone_start = j + 1
                    break
            j += 1

    total_idx = None
    if exercices_marker_idx is not None or not has_lecon_section:
        scan_start = exercices_marker_idx + 1 if has_lecon_section else rest_start
        scan_end = corrige_marker_idx if corrige_marker_idx else end_idx
        for j in range(scan_start, scan_end):
            el = elems[j]
            if el.tag == Wp:
                txt = elem_text(el).strip()
                if txt.startswith('TOTAL :') or txt.startswith('TOTAL:'):
                    total_idx = j
                    break

    def copy_elems(a, b):
        return [etree.tostring(elems[x]) for x in range(a, b) if elems[x].tag in (Wp, Wtbl)]

    if has_lecon_section:
        lecon_elements = copy_elems(lecon_zone_start, exercices_marker_idx)
        exercices_start = exercices_marker_idx + 1
    else:
        lecon_elements = []
        exercices_start = rest_start

    exercices_end = total_idx if total_idx is not None else (corrige_marker_idx or end_idx)

    if corrige_marker_idx:
        exercices_elements = copy_elems(exercices_start, exercices_end)
        corrige_elements = copy_elems(corrige_marker_idx + 1, end_idx)
    else:
        exercices_elements = copy_elems(exercices_start, exercices_end)
        corrige_elements = []

    return {
        'num': None,
        'title': title,
        'objectif': objectif,
        'support': support,
        'theme_valeurs_line': theme_valeurs_line,
        'note_enseignant': note_enseignant,
        'deroulement_rows': deroulement_rows,
        'total_text': total_text,
        'lecon_elements': lecon_elements,
        'exercices_elements': exercices_elements,
        'corrige_elements': corrige_elements,
    }


if __name__ == '__main__':
    main()
