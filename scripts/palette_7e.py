#!/usr/bin/env python3
"""Points 4 et 7 : palette de fonds thématiques du 8e + saumon unifié.

4. Fonds thématiques (repris du 8e) :
     FFE0B2 orange  -> « à retenir » (énoncés de règle, cours bleu 1F4E79)
     FEF9E7 jaune   -> exemples ("Exemples :", "Exemple posé :", "Règle")
     E8F8F5 menthe  -> corrigés ("Corrigé :")
     EBF5FB bleu    -> notes / étiquettes Application & Évaluation
     FDEDEC rose    -> pièges ❌ (déjà posé à l'étape précédente)
7. Saumon unifié : E9704F -> E9967A (dark salmon du 8e) partout.
"""
import zipfile, shutil, re
from lxml import etree

NS = 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'
W = '{%s}' % NS
SRC = 'telechargements/Manuel-Mathematiques-7e-COMPLET-ameliore-v2.docx'
DST = 'telechargements/Manuel-Mathematiques-7e-COMPLET-ameliore-v3.docx'

OLD_SALMON, NEW_SALMON = 'E9704F', 'E9967A'
F_RETENIR, F_EXEMPLE, F_CORRIGE, F_NOTE = 'FFE0B2', 'FEF9E7', 'E8F8F5', 'EBF5FB'
BORDERS = {F_RETENIR: 'E8A33D', F_EXEMPLE: 'D4B106',
           F_CORRIGE: '5FBFA8', F_NOTE: '7FB3D5'}

def q(t): return W + t

def txt(p):
    return "".join(n.text or '' for n in p.iter(q('t'))).strip()

def in_table(el):
    a = el.getparent()
    while a is not None:
        if a.tag == q('tbl'): return True
        a = a.getparent()
    return False

def colors(p):
    return {c.get(q('val')) for c in p.iter(q('color')) if c.get(q('val'))}

def sizes(p):
    return {s.get(q('val')) for s in p.iter(q('sz')) if s.get(q('val'))}

def pPr(p):
    pr = p.find(q('pPr'))
    if pr is None:
        pr = etree.Element(q('pPr')); p.insert(0, pr)
    return pr

def shade(p, fill, border=True):
    """Applique un fond + une bordure fine assortie."""
    pr = pPr(p)
    for tag in ('shd', 'pBdr'):
        for old in pr.findall(q(tag)): pr.remove(old)
    if border:
        bdr = etree.SubElement(pr, q('pBdr'))
        for side in ('top', 'left', 'bottom', 'right'):
            b = etree.SubElement(bdr, q(side))
            b.set(q('val'), 'single'); b.set(q('sz'), '4')
            b.set(q('space'), '4'); b.set(q('color'), BORDERS[fill])
    shd = etree.SubElement(pr, q('shd'))
    shd.set(q('val'), 'clear'); shd.set(q('color'), 'auto')
    shd.set(q('fill'), fill)

def has_shd(p):
    pr = p.find(q('pPr'))
    return pr is not None and pr.find(q('shd')) is not None

def main():
    zin = zipfile.ZipFile(SRC)
    root = etree.fromstring(zin.read('word/document.xml'))
    body = root.find(q('body'))
    st = dict(retenir=0, exemple=0, corrige=0, note=0, salmon=0)

    EXEMPLE_LABELS = ('Exemples :', 'Exemple posé :', 'Règle', 'Exemple :')

    for p in body.iter(q('p')):
        if in_table(p) or has_shd(p):
            continue
        t = txt(p)
        if not t:
            continue
        cols, szs = colors(p), sizes(p)

        # -- à retenir : énoncé de cours (bleu 1F4E79) ou synthèse « Donc, … » --
        if (cols == {'1F4E79'} and '22' in szs and len(t) > 60) or \
           (t.startswith(('Donc,', 'Retenons', 'On retient')) and len(t) > 40):
            shade(p, F_RETENIR); st['retenir'] += 1
        # -- exemples --
        elif t in EXEMPLE_LABELS:
            shade(p, F_EXEMPLE); st['exemple'] += 1
        # -- corrigés --
        elif t.startswith('Corrigé'):
            shade(p, F_CORRIGE); st['corrige'] += 1
        # -- étiquettes Application / Évaluation --
        elif t in ('Application', 'Évaluation'):
            shade(p, F_NOTE); st['note'] += 1

    # -- point 7 : saumon unifié --
    for c in root.iter(q('color')):
        if (c.get(q('val')) or '').upper() == OLD_SALMON:
            c.set(q('val'), NEW_SALMON); st['salmon'] += 1
    # bordures des encadrés pièges posées en saumon
    for e in root.iter():
        v = e.get(q('color'))
        if v and v.upper() == OLD_SALMON:
            e.set(q('color'), NEW_SALMON); st['salmon'] += 1

    out = etree.tostring(root, xml_declaration=True,
                         encoding='UTF-8', standalone=True)
    with zipfile.ZipFile(DST, 'w', zipfile.ZIP_DEFLATED) as zo:
        for n in zin.namelist():
            data = zin.read(n)
            if n == 'word/document.xml':
                data = out
            elif n == 'word/styles.xml':
                data = data.replace(OLD_SALMON.encode(), NEW_SALMON.encode())
            zo.writestr(n, data)

    print('Encadrés « à retenir » (orange) :', st['retenir'])
    print('Encadrés exemples (jaune)       :', st['exemple'])
    print('Encadrés corrigés (menthe)      :', st['corrige'])
    print('Étiquettes App./Éval. (bleu)    :', st['note'])
    print('Références saumon unifiées      :', st['salmon'])
    print('Écrit :', DST)

if __name__ == '__main__':
    main()
