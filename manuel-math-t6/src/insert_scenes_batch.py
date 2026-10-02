# -*- coding: utf-8 -*-
# Insère les scènes uniques pour les N premières entrées de scenes_todo.json
# Usage : python3 insert_scenes_batch.py fichier1.jpg fichier2.jpg ...
import zipfile, re, os, json, struct, sys

SRC = "manuel-math-t6/livrables/Manuel_Mathematiques_T6_JLearn_V1.docx"
SCDIR = "manuel-math-t6/assets/math-t6/scenes2"
TODO = "manuel-math-t6/src/scenes_todo.json"

files = sys.argv[1:]
todo = json.load(open(TODO, encoding="utf-8"))
assert len(files) <= len(todo)
batch = list(zip(todo[:len(files)], files))

def jpeg_size(path):
    data = open(path, "rb").read()
    i = 2
    while i < len(data):
        marker = data[i+1]
        if marker in (0xC0,0xC1,0xC2,0xC3,0xC5,0xC6,0xC7,0xC9,0xCA,0xCB,0xCD,0xCE,0xCF):
            h, w = struct.unpack(">HH", data[i+5:i+9]); return w, h
        i += 2 + struct.unpack(">H", data[i+2:i+4])[0]
    raise ValueError(path)

zin = zipfile.ZipFile(SRC)
doc = zin.read("word/document.xml").decode("utf-8")
rels = zin.read("word/_rels/document.xml.rels").decode("utf-8")

# gabarit : paragraphe-image d'une scène batch1 (media/scene_*.jpg)
rid_tpl = re.search(r'Id="(rId\d+)"[^>]*Target="media/scene_\d+\.jpg"', rels).group(1)
tpl = None
for m in re.finditer(r"<w:p\b.*?</w:p>", doc, re.S):
    if f'r:embed="{rid_tpl}"' in m.group(0):
        tpl = m.group(0); break
assert tpl, "gabarit introuvable"

paras = [(m.start(), m.end(), m.group(0)) for m in re.finditer(r"<w:p\b.*?</w:p>", doc, re.S)]
def ptxt(x): return re.sub(r"\s+", " ", re.sub(r"<[^>]+>", "", x)).strip()
texts = [ptxt(p) for s, e, p in paras]

mx = max(int(m.group(1)) for m in re.finditer(r'Id="rId(\d+)"', rels))
docpr = max(int(m.group(1)) for m in re.finditer(r'<wp:docPr id="(\d+)"', doc)) + 1

# repérer les points d'insertion : après le para « Autrement dit » qui suit le titre-leçon
plan = []  # (pos_insertion, titre, fichier)
for entry, fn in batch:
    titre = entry["titre"]
    cand = [i for i, t in enumerate(texts) if t == titre]
    # titre-leçon = celui suivi d'un « Définition — » dans les 3 paras suivants
    cand = [i for i in cand if any(texts[j].startswith("Définition —") for j in range(i+1, i+4))]
    assert len(cand) == 1, (titre, cand)
    i = cand[0]
    j = next(j for j in range(i+1, i+5) if texts[j].startswith("Autrement dit :"))
    plan.append((paras[j][1], titre, fn))

newrels = []
newmedia = {}
for pos, titre, fn in sorted(plan, key=lambda x: -x[0]):
    path = os.path.join(SCDIR, fn)
    w, h = jpeg_size(path)
    mx += 1; docpr += 1
    nrid = f"rId{mx}"
    arc = f"media/scene_{mx}.jpg"
    newrels.append(f'<Relationship Id="{nrid}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/image" Target="{arc}"/>')
    newmedia["word/" + arc] = path
    cx = 4762500; cy = int(cx * h / w)
    np_ = re.sub(r'r:embed="rId\d+"', f'r:embed="{nrid}"', tpl)
    np_ = re.sub(r'<wp:extent cx="\d+" cy="\d+"', f'<wp:extent cx="{cx}" cy="{cy}"', np_)
    np_ = re.sub(r'<a:ext cx="\d+" cy="\d+"', f'<a:ext cx="{cx}" cy="{cy}"', np_)
    np_ = re.sub(r'<wp:docPr id="\d+"', f'<wp:docPr id="{docpr}"', np_)
    doc = doc[:pos] + np_ + doc[pos:]
    print(f"INSÉRÉ {fn} ({w}x{h}) -> {titre[:60]}")

rels = rels.replace("</Relationships>", "".join(newrels) + "</Relationships>")
tmp = SRC + ".tmp"
zout = zipfile.ZipFile(tmp, "w", zipfile.ZIP_DEFLATED)
for item in zin.infolist():
    if item.filename == "word/document.xml": data = doc.encode("utf-8")
    elif item.filename == "word/_rels/document.xml.rels": data = rels.encode("utf-8")
    else: data = zin.read(item.filename)
    zout.writestr(item, data)
for arc, path in newmedia.items():
    zout.write(path, arc)
zin.close(); zout.close()
os.replace(tmp, SRC)

json.dump(todo[len(files):], open(TODO, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print("OK:", os.path.getsize(SRC), "| TODO restants:", len(todo) - len(files))
