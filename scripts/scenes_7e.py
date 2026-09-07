#!/usr/bin/env python3
"""Lot pilote : insertion de 6 illustrations de scène dans le Manuel 7e.

Chaque image est placée dans la LEÇON, en tête, juste avant le premier
visuel/règle, avec une légende grise reprenant la mise en situation.
Les images sont redimensionnées à la largeur utile de la page et
compressées pour rester légères.
"""
import zipfile, shutil, os, re
from lxml import etree
from PIL import Image

NS = 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'
R  = 'http://schemas.openxmlformats.org/officeDocument/2006/relationships'
WP = 'http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing'
A  = 'http://schemas.openxmlformats.org/drawingml/2006/main'
PIC= 'http://schemas.openxmlformats.org/drawingml/2006/picture'
W = '{%s}' % NS
XML = '{http://www.w3.org/XML/1998/namespace}'

SRC = 'telechargements/Manuel-Mathematiques-7e-COMPLET-ameliore-v5.docx'
DST = 'telechargements/Manuel-Mathematiques-7e-COMPLET-ameliore-v6.docx'
GREY = '555555'
EMU = 914400
MAX_W_CM = 13.0            # largeur utile
TARGET_PX = 1100           # largeur de rééchantillonnage

SCENES = {
    1:  ('illustrations/s01-marche-tomates.png',
         "Au marché de Sabotsy : 7 caisses de 100 tomates, 6 tas de 10 et 4 tomates seules."),
    5:  ('illustrations/s05-terrain-carre.png',
         "Hery veut clôturer son potager carré : il lui faut le tour, puis la surface."),
    9:  ('illustrations/s09-carte-echelle.png',
         "Tiana mesure une distance sur la carte de Madagascar : l'échelle donne la distance réelle."),
    47: ('illustrations/s47-sac-riz.png',
         "Bao achète un sac de riz et paie le transport : le prix de revient comprend les frais."),
    62: ('illustrations/s62-partage-mangues.png',
         "Rado partage ses mangues en parts strictement égales entre ses cousins."),
    66: ('illustrations/s66-taxi-brousse.png',
         "Le taxi-brousse roule à allure régulière : c'est un mouvement uniforme."),
}

def q(t): return W + t

def txt(e): return "".join(n.text or '' for n in e.iter(q('t'))).strip()

def sid(p):
    pr = p.find(q('pPr'))
    if pr is None: return None
    st = pr.find(q('pStyle'))
    return st.get(q('val')) if st is not None else None

def run(text, **kw):
    r = etree.Element(q('r'))
    pr = etree.SubElement(r, q('rPr'))
    rf = etree.SubElement(pr, q('rFonts'))
    for a in ('ascii', 'hAnsi', 'cs'): rf.set(q(a), 'Times New Roman')
    if kw.get('italic'): etree.SubElement(pr, q('i'))
    c = etree.SubElement(pr, q('color')); c.set(q('val'), kw.get('color', '000000'))
    for tg in ('sz', 'szCs'):
        s = etree.SubElement(pr, q(tg)); s.set(q('val'), str(kw.get('size', 19)))
    t = etree.SubElement(r, q('t')); t.text = text
    t.set(XML + 'space', 'preserve')
    return r

def caption(text):
    p = etree.Element(q('p'))
    pr = etree.SubElement(p, q('pPr'))
    j = etree.SubElement(pr, q('jc')); j.set(q('val'), 'center')
    sp = etree.SubElement(pr, q('spacing')); sp.set(q('after'), '120')
    p.append(run(text, italic=True, color=GREY, size=17))
    return p

def picture_p(rid, cx, cy, name, docpr_id):
    p = etree.Element(q('p'))
    pr = etree.SubElement(p, q('pPr'))
    j = etree.SubElement(pr, q('jc')); j.set(q('val'), 'center')
    sp = etree.SubElement(pr, q('spacing'))
    sp.set(q('before'), '120'); sp.set(q('after'), '40')
    r = etree.SubElement(p, q('r'))
    dr = etree.SubElement(r, q('drawing'))
    inl = etree.SubElement(dr, '{%s}inline' % WP)
    for a, v in (('distT', '0'), ('distB', '0'), ('distL', '0'), ('distR', '0')):
        inl.set(a, v)
    ext = etree.SubElement(inl, '{%s}extent' % WP)
    ext.set('cx', str(cx)); ext.set('cy', str(cy))
    etree.SubElement(inl, '{%s}effectExtent' % WP,
                     l='0', t='0', r='0', b='0')
    dp = etree.SubElement(inl, '{%s}docPr' % WP)
    dp.set('id', str(docpr_id)); dp.set('name', name)
    dp.set('descr', name)
    gf = etree.SubElement(inl, '{%s}cNvGraphicFramePr' % WP)
    etree.SubElement(gf, '{%s}graphicFrameLocks' % A, noChangeAspect='1')
    g = etree.SubElement(inl, '{%s}graphic' % A)
    gd = etree.SubElement(g, '{%s}graphicData' % A)
    gd.set('uri', PIC)
    pic = etree.SubElement(gd, '{%s}pic' % PIC)
    nv = etree.SubElement(pic, '{%s}nvPicPr' % PIC)
    cnv = etree.SubElement(nv, '{%s}cNvPr' % PIC)
    cnv.set('id', '0'); cnv.set('name', name)
    etree.SubElement(nv, '{%s}cNvPicPr' % PIC)
    bf = etree.SubElement(pic, '{%s}blipFill' % PIC)
    blip = etree.SubElement(bf, '{%s}blip' % A)
    blip.set('{%s}embed' % R, rid)
    etree.SubElement(bf, '{%s}stretch' % A).append(
        etree.Element('{%s}fillRect' % A))
    sp2 = etree.SubElement(pic, '{%s}spPr' % PIC)
    xfrm = etree.SubElement(sp2, '{%s}xfrm' % A)
    etree.SubElement(xfrm, '{%s}off' % A, x='0', y='0')
    etree.SubElement(xfrm, '{%s}ext' % A, cx=str(cx), cy=str(cy))
    geo = etree.SubElement(sp2, '{%s}prstGeom' % A, prst='rect')
    etree.SubElement(geo, '{%s}avLst' % A)
    return p

def main():
    zin = zipfile.ZipFile(SRC)
    doc = etree.fromstring(zin.read('word/document.xml'))
    rels = etree.fromstring(zin.read('word/_rels/document.xml.rels'))
    body = doc.find(q('body'))

    # prépare les images (redimension + compression)
    os.makedirs('/tmp/scn', exist_ok=True)
    prepared = {}
    for n, (path, cap) in SCENES.items():
        im = Image.open(path).convert('RGB')
        w, h = im.size
        nh = int(h * TARGET_PX / w)
        im = im.resize((TARGET_PX, nh), Image.LANCZOS)
        out = '/tmp/scn/scene%02d.jpg' % n
        im.save(out, 'JPEG', quality=82, optimize=True)
        prepared[n] = (out, TARGET_PX, nh, os.path.getsize(out))

    # numéro de relation libre
    used = {int(m.group(1)) for m in
            (re.match(r'rId(\d+)$', r.get('Id')) for r in rels) if m}
    nxt = max(used) + 1
    RELNS = 'http://schemas.openxmlformats.org/package/2006/relationships'
    IMGT = ('http://schemas.openxmlformats.org/officeDocument/2006/'
            'relationships/image')

    kids = list(body)
    plans = []
    cur = None
    for i, e in enumerate(kids):
        if e.tag == q('p') and sid(e) == 'Heading1' and txt(e).startswith('SÉANCE'):
            cur = int(txt(e).split()[1])
        elif cur in SCENES and e.tag == q('p') and sid(e) == 'Heading2' \
                and txt(e) == 'LEÇON':
            plans.append((cur, i))
            cur = None

    media = {}
    docpr = 9000
    for num, idx in reversed(plans):
        path, pw, ph, _ = prepared[num]
        rid = 'rId%d' % nxt
        target = 'media/scene%02d.jpg' % num
        rel = etree.SubElement(rels, '{%s}Relationship' % RELNS)
        rel.set('Id', rid); rel.set('Type', IMGT); rel.set('Target', target)
        media['word/' + target] = open(path, 'rb').read()
        nxt += 1; docpr += 1

        cx = int(MAX_W_CM / 2.54 * EMU)
        cy = int(cx * ph / pw)
        anchor = kids[idx]
        # après le H2 LEÇON, on saute le titre coloré de la leçon
        j = idx + 1
        while j < len(kids) and kids[j].tag == q('p') and not txt(kids[j]):
            j += 1
        if j < len(kids) and kids[j].tag == q('p') and len(txt(kids[j])) < 80:
            anchor = kids[j]
        cap = caption(SCENES[num][1])
        img = picture_p(rid, cx, cy, 'Scene %d' % num, docpr)
        anchor.addnext(cap)
        anchor.addnext(img)

    # déclare le type JPEG dans [Content_Types].xml si absent
    ct = zin.read('[Content_Types].xml').decode('utf8')
    if 'Extension="jpg"' not in ct:
        ct = ct.replace('<Default Extension="png"',
                        '<Default Extension="jpg" ContentType="image/jpeg"/>'
                        '<Default Extension="png"', 1)

    docx = etree.tostring(doc, xml_declaration=True, encoding='UTF-8',
                          standalone=True)
    relx = etree.tostring(rels, xml_declaration=True, encoding='UTF-8',
                          standalone=True)
    with zipfile.ZipFile(DST, 'w', zipfile.ZIP_DEFLATED) as zo:
        for n in zin.namelist():
            if n == 'word/document.xml':      zo.writestr(n, docx)
            elif n == 'word/_rels/document.xml.rels': zo.writestr(n, relx)
            elif n == '[Content_Types].xml': zo.writestr(n, ct)
            else:                              zo.writestr(n, zin.read(n))
        for n, data in media.items():
            zo.writestr(n, data)

    tot = sum(v[3] for v in prepared.values())
    print('Illustrations insérées :', len(plans))
    print('Poids total des images : %.0f Ko' % (tot / 1024))
    print('Écrit :', DST)

if __name__ == '__main__':
    main()
