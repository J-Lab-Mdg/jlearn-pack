#!/usr/bin/env python3
"""Restore the 56 teacher preparation sheets into a learner-edited T5 DOCX.

Usage:
    python restore_fiches_t5.py reference.docx edited.docx output.docx report.md

The script copies only the preparation block for each real lesson:
SÉANCE heading, FICHE DE PRÉPARATION, the two preparation tables and the
page break before the learner lesson. Existing learner text, exercises,
corrections, images and user formatting are kept in the edited document.
"""
from copy import deepcopy
from pathlib import Path
from zipfile import ZIP_DEFLATED, ZipFile
import re
import sys

from lxml import etree

NS = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
W = '{%s}' % NS['w']


def read_document_xml(path):
    with ZipFile(path) as archive:
        return etree.fromstring(archive.read('word/document.xml'))


def text(element):
    return ' '.join(''.join(element.xpath('.//w:t/text()', namespaces=NS)).replace('\xa0', ' ').split())


def is_paragraph(element):
    return element.tag == W + 'p'


def is_page_break(element):
    return is_paragraph(element) and bool(element.xpath('.//w:br[@w:type="page"]', namespaces=NS))


def extract_sheets(reference_root):
    body = reference_root.find('w:body', NS)
    children = list(body)
    sheets = []
    i = 0
    while i < len(children):
        if not (is_paragraph(children[i]) and text(children[i]).startswith('SÉANCE ')):
            i += 1
            continue
        session = text(children[i])
        if 'RÉVISION' in session or 'SUJET' in session:
            i += 1
            continue
        match = re.match(r'SÉANCE (\d+) / (\d+) — (.+)', session)
        if not match:
            raise ValueError(f'Séance inattendue : {session}')
        sheet_start = i + 1
        while sheet_start < len(children) and not (
            is_paragraph(children[sheet_start])
            and text(children[sheet_start]) == 'FICHE DE PRÉPARATION'
        ):
            sheet_start += 1
        if sheet_start == len(children):
            raise ValueError(f'Fiche introuvable après : {session}')
        sheet_end = sheet_start + 1
        while sheet_end < len(children) and not is_page_break(children[sheet_end]):
            sheet_end += 1
        if sheet_end == len(children):
            raise ValueError(f'Page de séparation introuvable après : {session}')
        next_text = ''
        for candidate in children[sheet_end + 1:]:
            if is_paragraph(candidate) and text(candidate):
                next_text = text(candidate)
                break
        sheets.append({
            'session': session,
            'title': match.group(3).strip().upper(),
            'next_title': next_text,
            'elements': [deepcopy(children[i])] + [deepcopy(x) for x in children[sheet_start:sheet_end + 1]],
        })
        i = sheet_end + 1
    if len(sheets) != 56:
        raise ValueError(f'{len(sheets)} fiches trouvées ; 56 attendues')
    return sheets


def restore(reference, edited, output, report):
    reference_root = read_document_xml(reference)
    target_root = read_document_xml(edited)
    target_body = target_root.find('w:body', NS)
    sheets = extract_sheets(reference_root)
    target_children = list(target_body)
    insertions = []
    used = set()
    for sheet in sheets:
        matches = [
            i for i, element in enumerate(target_children)
            if i not in used and is_paragraph(element) and text(element) == sheet['title']
        ]
        if len(matches) != 1:
            raise ValueError(f"Titre absent ou ambigu : {sheet['title']} ({matches})")
        used.add(matches[0])
        insertions.append((matches[0], sheet))
    for index, sheet in reversed(insertions):
        for offset, element in enumerate(sheet['elements']):
            target_body.insert(index + offset, element)

    # Verify the exact teacher-sheet-to-lesson alignment and the presence of
    # exercises followed by corrections in every lesson.
    children = list(target_body)
    checks = []
    for sheet in sheets:
        # Find the specific sheet by its session immediately before it.
        session_index = next(i for i, e in enumerate(children) if is_paragraph(e) and text(e) == sheet['session'])
        fiche_index = next(i for i in range(session_index + 1, len(children)) if is_paragraph(children[i]) and text(children[i]) == 'FICHE DE PRÉPARATION')
        lesson_index = next(i for i in range(fiche_index + 1, len(children)) if is_paragraph(children[i]) and text(children[i]) == sheet['title'])
        end = lesson_index + 1
        while end < len(children):
            candidate = text(children[end])
            if is_paragraph(children[end]) and (
                candidate.startswith('SÉANCE ') or candidate.startswith('RÉVISION DE L')
                or candidate.startswith('SUJET D') or candidate.startswith('MÉTHODES D')
            ):
                break
            end += 1
        lesson_text = [text(e) for e in children[lesson_index + 1:end] if text(e)]
        exercise_index = next((i for i, t in enumerate(lesson_text) if t.upper() in {'EXERCICE', 'EXERCICES'}), None)
        correction_index = next((i for i, t in enumerate(lesson_text) if t.upper() in {'CORRECTION', 'CORRIGÉ', 'CORRIGÉS'}), None)
        exercise_count = sum(bool(re.match(r'^(?:Exercice\s+)?\d+\.', t, re.I)) for t in lesson_text[exercise_index + 1:correction_index]) if exercise_index is not None and correction_index is not None else 0
        correction_count = sum(bool(re.match(r'^(?:Exercice\s+)?\d+\.', t, re.I)) for t in lesson_text[correction_index + 1:]) if correction_index is not None else 0
        prep_end = next(i for i in range(fiche_index + 1, len(children)) if is_page_break(children[i]))
        prep_text = ' '.join(text(e) for e in children[fiche_index:prep_end])
        title_match = re.search(r'Titre\s*:\s*(.*?)Objectif spécifique\s*:', prep_text, re.I)
        prep_title = title_match.group(1).strip().upper() if title_match else ''
        if prep_title != sheet['title'] or exercise_count == 0 or correction_count == 0:
            raise ValueError(f'Vérification échouée pour {sheet["title"]}')
        checks.append((sheet['session'], sheet['title'], exercise_count, correction_count))

    output.parent.mkdir(parents=True, exist_ok=True)
    with ZipFile(edited) as source, ZipFile(output, 'w', ZIP_DEFLATED) as destination:
        for item in source.infolist():
            data = source.read(item.filename)
            if item.filename == 'word/document.xml':
                data = etree.tostring(target_root, xml_declaration=True, encoding='UTF-8', standalone='yes')
            destination.writestr(item, data)
    report.write_text(
        '# Audit de restauration — fiches de préparation Mathématiques T5\n\n'
        '- Fiches restaurées : **56**\n'
        '- Correspondance fiche ↔ leçon : **56/56 correcte**\n'
        '- Présence d’exercices et d’un corrigé après chaque leçon : **56/56 vérifiée**\n'
        '- Les pages `MON CAHIER` ne sont pas ajoutées dans cette opération.\n\n'
        '## Vérification détaillée\n\n' +
        '\n'.join(f'{i}. **OK** — {session} → {title} — exercices : {ex}; corrigé : {co}' for i, (session, title, ex, co) in enumerate(checks, 1)) + '\n',
        encoding='utf-8'
    )
    print(f'{len(checks)} fiches restaurées et vérifiées dans {output}')


if __name__ == '__main__':
    if len(sys.argv) != 5:
        raise SystemExit('Usage: restore_fiches_t5.py reference.docx edited.docx output.docx report.md')
    restore(*(Path(x) for x in sys.argv[1:]))
