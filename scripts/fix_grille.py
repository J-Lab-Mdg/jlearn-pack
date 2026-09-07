#!/usr/bin/env python3
"""Correction de la grille « Déroulement de la leçon » des 81 fiches.

Défaut d'origine : la 2e ligne de l'en-tête déclare 10 cellules alors que
la table n'a que 6 colonnes. Word ne peut pas résoudre la grille et
repousse « Apprenants » (et les colonnes suivantes) hors du cadre.

Cause : les cellules vMerge=continue de cette ligne sont dupliquées, et
la cellule fusionnée « Déroulement de la leçon » (gridSpan=2) de la ligne
d'en-tête est remplacée par deux cellules distinctes sans span.

Correctif : reconstruire la 2e ligne avec exactement 6 cellules —
[vide(cont)] [Enseignant] [Apprenants] [vide(cont)] [vide(cont)] [vide(cont)]
et rétablir les largeurs cohérentes avec la ligne d'en-tête.
"""
import zipfile, sys, shutil
from lxml import etree

NS = 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'
W = '{%s}' % NS
XML = '{http://www.w3.org/XML/1998/namespace}'

def q(t): return W + t

def txt(e): return "".join(n.text or '' for n in e.iter(q('t'))).strip()

def cell_units(tr):
    u = 0
    for tc in tr.findall(q('tc')):
        pr = tc.find(q('tcPr'))
        gs = pr.find(q('gridSpan')) if pr is not None else None
        u += int(gs.get(q('val'))) if gs is not None else 1
    return u

def set_w(tc, pct):
    pr = tc.find(q('tcPr'))
    if pr is None:
        pr = etree.Element(q('tcPr')); tc.insert(0, pr)
    for old in pr.findall(q('tcW')): pr.remove(old)
    w = etree.Element(q('tcW'))
    w.set(q('w'), pct); w.set(q('type'), 'pct')
    pr.insert(0, w)

def make_vmerge_cell(model, pct):
    """Cellule vide en continuation de fusion verticale."""
    tc = etree.Element(q('tc'))
    pr = etree.SubElement(tc, q('tcPr'))
    w = etree.SubElement(pr, q('tcW'))
    w.set(q('w'), pct); w.set(q('type'), 'pct')
    vm = etree.SubElement(pr, q('vMerge')); vm.set(q('val'), 'continue')
    tc.append(etree.Element(q('p')))
    return tc

def fix_table(tbl):
    rows = tbl.findall(q('tr'))
    if len(rows) < 2:
        return False
    grid = tbl.find(q('tblGrid'))
    ncol = len(grid.findall(q('gridCol'))) if grid is not None else 0
    if ncol != 6:
        return False
    head, second = rows[0], rows[1]
    if cell_units(second) == ncol:
        return False

    # largeurs de référence, lues sur la ligne d'en-tête
    widths = []
    for tc in head.findall(q('tc')):
        pr = tc.find(q('tcPr'))
        w = pr.find(q('tcW')) if pr is not None else None
        gs = pr.find(q('gridSpan')) if pr is not None else None
        val = w.get(q('w')) if w is not None else '12%'
        span = int(gs.get(q('val'))) if gs is not None else 1
        if span == 2:                      # « Déroulement de la leçon »
            half = str(int(val.rstrip('%')) // 2) + '%'
            widths += [half, half]
        else:
            widths += [val] * span
    while len(widths) < 6:
        widths.append('12%')

    # on récupère les deux cellules porteuses de texte
    labelled = [tc for tc in second.findall(q('tc')) if txt(tc)]
    ens = next((tc for tc in labelled if txt(tc).startswith('Enseignant')), None)
    app = next((tc for tc in labelled if txt(tc).startswith('Apprenant')), None)
    if ens is None or app is None:
        return False

    # reconstruction : 6 cellules exactement
    for tc in list(second.findall(q('tc'))):
        second.remove(tc)
    second.append(make_vmerge_cell(ens, widths[0]))   # Étapes et Durée
    set_w(ens, widths[1]); second.append(ens)          # Enseignant
    set_w(app, widths[2]); second.append(app)          # Apprenants
    for i in (3, 4, 5):                                # 3 colonnes de droite
        second.append(make_vmerge_cell(ens, widths[i]))
    return True

def main(src, dst):
    zin = zipfile.ZipFile(src)
    root = etree.fromstring(zin.read('word/document.xml'))
    body = root.find(q('body'))
    n = 0
    for tbl in body.iter(q('tbl')):
        if fix_table(tbl):
            n += 1
    out = etree.tostring(root, xml_declaration=True, encoding='UTF-8',
                         standalone=True)
    with zipfile.ZipFile(dst, 'w', zipfile.ZIP_DEFLATED) as zo:
        for name in zin.namelist():
            zo.writestr(name, out if name == 'word/document.xml'
                        else zin.read(name))
    print('Grilles corrigées :', n)

if __name__ == '__main__':
    main(sys.argv[1], sys.argv[2])
