#!/usr/bin/env python3
"""Applique au Manuel Math 7e les points 1, 2 et 3 inspirés du 8e :
1. Légendes grises #555555 8,5 pt centrées sous chaque visuel
2. Encadrés « pièges » ❌ sur fond rose pour les « Attention »
3. Tailles de police remontées (lisibilité)
"""
import zipfile, shutil, re, copy, sys
from lxml import etree

NS = 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'
W = '{%s}' % NS
SRC = 'telechargements/Manuel-Mathematiques-7e-COMPLET-ameliore.docx'
DST = 'telechargements/Manuel-Mathematiques-7e-COMPLET-ameliore-v2.docx'

GREY = '555555'
CAPTION_SZ = '17'      # demi-points => 8,5 pt
PIEGE_FILL = 'FDEDEC'  # rose du 8e
PIEGE_COLOR = 'C00000'

def q(t): return W + t

def txt(p):
    return "".join(n.text or '' for n in p.iter(q('t'))).strip()

def in_table(el):
    a = el.getparent()
    while a is not None:
        if a.tag == q('tbl'): return True
        a = a.getparent()
    return False

def get_or_add(parent, tag, pos=0):
    e = parent.find(q(tag))
    if e is None:
        e = etree.SubElement(parent, q(tag))
        parent.remove(e); parent.insert(pos, e)
    return e

def pPr(p):
    pr = p.find(q('pPr'))
    if pr is None:
        pr = etree.Element(q('pPr')); p.insert(0, pr)
    return pr

def set_caption(p):
    """Style légende : gris, 8,5 pt, centré, italique."""
    pr = pPr(p)
    for tag in ('jc',):
        old = pr.find(q(tag))
        if old is not None: pr.remove(old)
    jc = etree.SubElement(pr, q('jc')); jc.set(q('val'), 'center')
    for r in p.iter(q('r')):
        rpr = r.find(q('rPr'))
        if rpr is None:
            rpr = etree.Element(q('rPr')); r.insert(0, rpr)
        for tag in ('color', 'sz', 'szCs', 'i', 'b'):
            for old in rpr.findall(q(tag)): rpr.remove(old)
        c = etree.SubElement(rpr, q('color')); c.set(q('val'), GREY)
        for tag in ('sz', 'szCs'):
            s = etree.SubElement(rpr, q(tag)); s.set(q('val'), CAPTION_SZ)
        etree.SubElement(rpr, q('i'))

def set_piege(p):
    """Encadré piège : fond rose + bordure + ❌ en tête."""
    pr = pPr(p)
    for tag in ('shd', 'pBdr'):
        for old in pr.findall(q(tag)): pr.remove(old)
    bdr = etree.SubElement(pr, q('pBdr'))
    for side in ('top', 'left', 'bottom', 'right'):
        b = etree.SubElement(bdr, q(side))
        b.set(q('val'), 'single'); b.set(q('sz'), '6')
        b.set(q('space'), '4'); b.set(q('color'), 'E9704F')
    shd = etree.SubElement(pr, q('shd'))
    shd.set(q('val'), 'clear'); shd.set(q('color'), 'auto')
    shd.set(q('fill'), PIEGE_FILL)
    runs = p.findall(q('r'))
    if not runs: return
    # « Attention … » peut être réparti sur plusieurs runs : on nettoie
    # les premiers noeuds texte tant qu'ils portent l'amorce.
    tnodes = [t for r in runs for t in r.iter(q('t'))]
    for t in tnodes[:4]:
        cur = t.text or ''
        new_t = re.sub(r'^\s*Attention\s*:?\s*', '', cur)
        new_t = re.sub(r'^\s*Attention\s+(?:\u00e0|au|aux)\s+', '', new_t)
        t.text = new_t
        if new_t.strip():
            break
    first_t = next((t for t in tnodes if (t.text or '').strip()), tnodes[0])
    lead = (first_t.text or '').lstrip()
    lead = re.sub(r'^(?:\u00e0|au|aux)\s+', '', lead)
    if lead:
        lead = lead[0].upper() + lead[1:]
    first_t.text = '\u274c  \u00c0 \u00e9viter : ' + lead
    first_t.set('{http://www.w3.org/XML/1998/namespace}space', 'preserve')
    first = first_t.getparent()
    rpr = first.find(q('rPr'))
    if rpr is None:
        rpr = etree.Element(q('rPr')); first.insert(0, rpr)
    for old in rpr.findall(q('color')): rpr.remove(old)
    c = etree.SubElement(rpr, q('color')); c.set(q('val'), PIEGE_COLOR)
    if rpr.find(q('b')) is None: etree.SubElement(rpr, q('b'))

# Point 3 : table de conversion des tailles (demi-points)
SIZE_MAP = {'18': '26',   #  9,0 -> 13,0  (H1 séance)
            '19': '21',   #  9,5 -> 10,5  (corps)
            '20': '22',   # 10,0 -> 11,0
            '21': '23',   # 10,5 -> 11,5  (sous-titres)
            '24': '28',   # 12,0 -> 14,0  (titre de leçon)
            '26': '28'}   # 13,0 -> 14,0  (EXERCICES)

def main():
    shutil.copy(SRC, DST)
    zin = zipfile.ZipFile(SRC)
    xml = zin.read('word/document.xml')
    root = etree.fromstring(xml)
    body = root.find(q('body'))
    kids = list(body)

    stats = dict(captions=0, pieges=0, sizes=0, added=0)

    # ---- 1. LÉGENDES ----
    # a) le paragraphe qui suit immédiatement une image est sa légende
    for i, el in enumerate(kids):
        if el.tag == q('p') and el.find('.//' + q('drawing')) is not None:
            for nxt in kids[i+1:i+2]:
                if nxt.tag == q('p') and txt(nxt) and len(txt(nxt)) < 120:
                    set_caption(nxt); stats['captions'] += 1

    # b) sous les tableaux illustratifs, on ajoute une légende à partir
    #    du paragraphe d'annonce qui les précède ("Exemple posé :", etc.)
    ANNONCES = ('Exemples :', 'Exemple posé :', 'Le tableau des unités',
                'Tableau de numération')
    LABELS = {'Exemple posé :': 'Opération posée',
              'Exemples :': 'Tableau de numération',
              'Le tableau des unités': 'Tableau des unités de mesure',
              'Tableau de numération': 'Tableau de numération'}
    for i, el in enumerate(kids):
        if el.tag != q('tbl'): continue
        rows = el.findall(q('tr'))
        if len(rows) == 11: continue           # grille de déroulement
        prev = None
        for k in range(i-1, max(-1, i-3), -1):
            if kids[k].tag == q('p') and txt(kids[k]):
                prev = txt(kids[k]); break
        if prev not in ANNONCES: continue
        cap = etree.Element(q('p'))
        pr = etree.SubElement(cap, q('pPr'))
        jc = etree.SubElement(pr, q('jc')); jc.set(q('val'), 'center')
        r = etree.SubElement(cap, q('r'))
        rpr = etree.SubElement(r, q('rPr'))
        c = etree.SubElement(rpr, q('color')); c.set(q('val'), GREY)
        for tag in ('sz', 'szCs'):
            s = etree.SubElement(rpr, q(tag)); s.set(q('val'), CAPTION_SZ)
        etree.SubElement(rpr, q('i'))
        t = etree.SubElement(r, q('t')); t.text = LABELS[prev]
        el.addnext(cap)
        stats['captions'] += 1; stats['added'] += 1

    # ---- 2. ENCADRÉS PIÈGES ----
    for p in body.iter(q('p')):
        if in_table(p): continue
        t = txt(p)
        if t.startswith('Attention'):
            set_piege(p); stats['pieges'] += 1

    # ---- 3. TAILLES DE POLICE (hors tableaux) ----
    for p in body.iter(q('p')):
        if in_table(p): continue
        for r in p.iter(q('r')):
            rpr = r.find(q('rPr'))
            if rpr is None: continue
            for tag in ('sz', 'szCs'):
                for s in rpr.findall(q(tag)):
                    v = s.get(q('val'))
                    if v in SIZE_MAP:
                        s.set(q('val'), SIZE_MAP[v])
                        if tag == 'sz': stats['sizes'] += 1

    out = etree.tostring(root, xml_declaration=True,
                         encoding='UTF-8', standalone=True)
    zin_names = zin.namelist()
    with zipfile.ZipFile(DST, 'w', zipfile.ZIP_DEFLATED) as zo:
        for n in zin_names:
            zo.writestr(n, out if n == 'word/document.xml' else zin.read(n))
    print('Légendes stylées/ajoutées :', stats['captions'],
          '(dont %d nouvelles)' % stats['added'])
    print('Encadrés pièges ❌        :', stats['pieges'])
    print('Runs redimensionnés      :', stats['sizes'])
    print('Écrit :', DST)

if __name__ == '__main__':
    main()
