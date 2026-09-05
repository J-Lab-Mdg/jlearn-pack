# Importe le docx V1 (Math 8e … J-learn 2.docx) en JSON structuré : meta, fiche (tableau), leçon, exercices.
# Les fractions OMML sont converties en marqueurs {num/den}.
import sys, json, re
from docx import Document
from docx.oxml.ns import qn
SRC = sys.argv[1]; OUT = sys.argv[2]
d = Document(SRC)
body = d.element.body
A = '{http://schemas.openxmlformats.org/drawingml/2006/main}'
M = '{http://schemas.openxmlformats.org/officeDocument/2006/math}'
R = '{http://schemas.openxmlformats.org/officeDocument/2006/relationships}'
rels = {r.rId: r for r in d.part.rels.values()}

def mtext(el):
    return ''.join(t.text or '' for t in el.iter(M + 't'))

def ptext(p):
    out = []
    for ch in p.iter():
        if ch.tag == qn('w:t'): out.append(ch.text or '')
        elif ch.tag == M + 'f':
            num = ch.find(M + 'num'); den = ch.find(M + 'den')
            out.append('{' + mtext(num) + '/' + mtext(den) + '}')
    # remove duplicated text from nested m:t inside m:f (already handled) — m:t not w:t so fine
    return ''.join(out)

def pimgs(p):
    out = []
    for b in p.iter(A + 'blip'):
        rid = b.get(R + 'embed')
        out.append(rels[rid].target_part.partname.split('/')[-1])
    return out

def cellparas(c):
    return [ptext(p) for p in c.iter(qn('w:p')) if ptext(p).strip()]

seances = {}; cur = None; mode = None
for el in body.iterchildren():
    if el.tag == qn('w:p'):
        t = ptext(el).strip()
        m = re.match(r'FICHE DE PRÉPARATION — SÉANCE (\d+)', t)
        if m:
            cur = int(m.group(1)); seances[cur] = {'num': cur, 'meta': {}, 'fiche': [], 'lecon': [], 'exos': []}; mode = 'fiche'; continue
        if cur is None: continue
        if re.match(r'EXERCICES — Séance', t): mode = 'exos'
        if mode == 'fiche':
            if not t and not pimgs(el): continue  # paragraphe vide entre les deux tableaux de la fiche
            mode = 'lecon'
        item = {'t': t}
        im = pimgs(el)
        if im: item['img'] = im
        if t or im: seances[cur][mode].append(item)
    elif el.tag == qn('w:tbl') and cur is not None:
        rows = [[cellparas(c) for c in r.findall(qn('w:tc'))] for r in el.findall(qn('w:tr'))]
        if mode == 'fiche' and not seances[cur]['meta']:
            meta = {}
            for r in rows:
                for c in r:
                    for line in c:
                        k, sep, v = line.partition(' : ')
                        if sep: meta[k.strip()] = v.strip()
            seances[cur]['meta'] = meta
        elif mode == 'fiche':
            seances[cur]['fiche'] = rows
        else:
            seances[cur][mode].append({'table': rows})
json.dump(seances, open(OUT, 'w'), ensure_ascii=False, indent=1)
print('séances importées :', len(seances))
