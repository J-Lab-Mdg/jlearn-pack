#!/usr/bin/env python3
"""Insertion incrémentale des illustrations de scène dans le Manuel 7e.

Le script scanne le dossier illustrations/ : tout fichier nommé sNN*.png
est inséré en tête de la LEÇON de la séance NN, avec une légende grise
dérivée de la mise en situation réellement écrite dans la fiche.

Il repart toujours de la v5 (version sans aucune illustration ajoutée),
ce qui le rend rejouable : on relance après chaque nouveau lot d'images
et le document est reconstruit proprement, sans doublon.
"""
import zipfile, os, re, glob, json
from lxml import etree
from PIL import Image

NS = 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'
R  = 'http://schemas.openxmlformats.org/officeDocument/2006/relationships'
WP = 'http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing'
A  = 'http://schemas.openxmlformats.org/drawingml/2006/main'
PIC= 'http://schemas.openxmlformats.org/drawingml/2006/picture'
RELNS = 'http://schemas.openxmlformats.org/package/2006/relationships'
IMGT  = ('http://schemas.openxmlformats.org/officeDocument/2006/'
         'relationships/image')
W = '{%s}' % NS
XML = '{http://www.w3.org/XML/1998/namespace}'

BASE = 'telechargements/Manuel-Mathematiques-7e-COMPLET-ameliore-v5.docx'
DST  = 'telechargements/Manuel-Mathematiques-7e-COMPLET-ameliore-v6.docx'
GREY = '555555'
EMU = 914400
MAX_W_CM = 13.0
TARGET_PX = 1000
QUALITY = 80

# légendes rédigées (priment sur l'extraction automatique)
CAPTIONS = json.load(open('scripts/scenes_captions.json', encoding='utf8')) \
    if os.path.exists('scripts/scenes_captions.json') else {}

def q(t): return W + t
def txt(e): return "".join(n.text or '' for n in e.iter(q('t'))).strip()

def sid(p):
    pr = p.find(q('pPr'))
    if pr is None: return None
    st = pr.find(q('pStyle'))
    return st.get(q('val')) if st is not None else None

def run(text, *, italic=False, color='000000', size=19):
    r = etree.Element(q('r'))
    pr = etree.SubElement(r, q('rPr'))
    rf = etree.SubElement(pr, q('rFonts'))
    for a in ('ascii', 'hAnsi', 'cs'): rf.set(q(a), 'Times New Roman')
    if italic: etree.SubElement(pr, q('i'))
    c = etree.SubElement(pr, q('color')); c.set(q('val'), color)
    for tg in ('sz', 'szCs'):
        s = etree.SubElement(pr, q(tg)); s.set(q('val'), str(size))
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
    for a, v in (('distT','0'), ('distB','0'), ('distL','0'), ('distR','0')):
        inl.set(a, v)
    ext = etree.SubElement(inl, '{%s}extent' % WP)
    ext.set('cx', str(cx)); ext.set('cy', str(cy))
    etree.SubElement(inl, '{%s}effectExtent' % WP, l='0', t='0', r='0', b='0')
    dp = etree.SubElement(inl, '{%s}docPr' % WP)
    dp.set('id', str(docpr_id)); dp.set('name', name); dp.set('descr', name)
    gf = etree.SubElement(inl, '{%s}cNvGraphicFramePr' % WP)
    etree.SubElement(gf, '{%s}graphicFrameLocks' % A, noChangeAspect='1')
    g = etree.SubElement(inl, '{%s}graphic' % A)
    gd = etree.SubElement(g, '{%s}graphicData' % A); gd.set('uri', PIC)
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
    xf = etree.SubElement(sp2, '{%s}xfrm' % A)
    etree.SubElement(xf, '{%s}off' % A, x='0', y='0')
    etree.SubElement(xf, '{%s}ext' % A, cx=str(cx), cy=str(cy))
    geo = etree.SubElement(sp2, '{%s}prstGeom' % A, prst='rect')
    etree.SubElement(geo, '{%s}avLst' % A)
    return p

def auto_caption(scene):
    """Réduit la mise en situation à une phrase de légende."""
    s = re.split(r'(?<=[.!?])\s', scene.strip())[0]
    s = re.sub(r'\s+', ' ', s)
    if len(s) > 150:
        s = s[:147].rsplit(' ', 1)[0] + '…'
    return s

def main():
    files = {}
    for f in glob.glob('illustrations/s*.jpg'):
        m = re.match(r's(\d{2})', os.path.basename(f))
        if m: files[int(m.group(1))] = f
    if not files:
        print('aucune illustration'); return

    scenes = {int(k): v for k, v in
              json.load(open('scripts/scenes_source.json', encoding='utf8')).items()}

    zin = zipfile.ZipFile(BASE)
    doc = etree.fromstring(zin.read('word/document.xml'))
    rels = etree.fromstring(zin.read('word/_rels/document.xml.rels'))
    body = doc.find(q('body'))

    os.makedirs('/tmp/scn', exist_ok=True)
    prepared = {}
    for n, path in files.items():
        im = Image.open(path).convert('RGB')
        w, h = im.size
        im = im.resize((TARGET_PX, int(h * TARGET_PX / w)), Image.LANCZOS)
        out = '/tmp/scn/scene%02d.jpg' % n
        im.save(out, 'JPEG', quality=QUALITY, optimize=True)
        prepared[n] = (out, im.size[0], im.size[1], os.path.getsize(out))

    used = {int(m.group(1)) for m in
            (re.match(r'rId(\d+)$', r.get('Id')) for r in rels) if m}
    nxt = max(used) + 1

    kids = list(body)
    plans = []
    cur = None
    for i, e in enumerate(kids):
        if e.tag == q('p') and sid(e) == 'Heading1' and txt(e).startswith('SÉANCE'):
            cur = int(txt(e).split()[1])
        elif cur in files and e.tag == q('p') and sid(e) == 'Heading2' \
                and txt(e) == 'LEÇON':
            plans.append((cur, i)); cur = None

    media = {}; docpr = 9000
    for num, idx in reversed(plans):
        path, pw, ph, _ = prepared[num]
        rid = 'rId%d' % nxt; nxt += 1; docpr += 1
        target = 'media/scene%02d.jpg' % num
        rel = etree.SubElement(rels, '{%s}Relationship' % RELNS)
        rel.set('Id', rid); rel.set('Type', IMGT); rel.set('Target', target)
        media['word/' + target] = open(path, 'rb').read()

        cx = int(MAX_W_CM / 2.54 * EMU); cy = int(cx * ph / pw)
        anchor = kids[idx]
        j = idx + 1
        while j < len(kids) and kids[j].tag == q('p') and not txt(kids[j]):
            j += 1
        if j < len(kids) and kids[j].tag == q('p') and len(txt(kids[j])) < 80:
            anchor = kids[j]
        cap = CAPTIONS.get(str(num)) or auto_caption(scenes.get(num, ''))
        anchor.addnext(caption(cap))
        anchor.addnext(picture_p(rid, cx, cy, 'Scene %d' % num, docpr))

    ct = zin.read('[Content_Types].xml').decode('utf8')
    if 'Extension="jpg"' not in ct:
        ct = ct.replace('<Default Extension="png"',
                        '<Default Extension="jpg" ContentType="image/jpeg"/>'
                        '<Default Extension="png"', 1)

    docx = etree.tostring(doc, xml_declaration=True, encoding='UTF-8', standalone=True)
    relx = etree.tostring(rels, xml_declaration=True, encoding='UTF-8', standalone=True)
    with zipfile.ZipFile(DST, 'w', zipfile.ZIP_DEFLATED) as zo:
        for n in zin.namelist():
            if   n == 'word/document.xml': zo.writestr(n, docx)
            elif n == 'word/_rels/document.xml.rels': zo.writestr(n, relx)
            elif n == '[Content_Types].xml': zo.writestr(n, ct)
            else: zo.writestr(n, zin.read(n))
        for n, data in media.items():
            zo.writestr(n, data)

    tot = sum(v[3] for v in prepared.values())
    print('Illustrations insérées : %d / 81  (séances %s)'
          % (len(plans), ', '.join(str(n) for n, _ in sorted(plans))))
    print('Poids des images       : %.1f Mo' % (tot / 1048576))
    print('Fichier                : %.1f Mo' % (os.path.getsize(DST) / 1048576))

if __name__ == '__main__':
    main()
