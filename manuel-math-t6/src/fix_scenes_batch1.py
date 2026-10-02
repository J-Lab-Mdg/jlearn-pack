# -*- coding: utf-8 -*-
# Scènes d'ambiance : suppression des doublons + batch 1 (10 scènes Géométrie uniques)
import zipfile, re, os, json, struct

SRC = "manuel-math-t6/livrables/Manuel_Mathematiques_T6_JLearn_V1.docx"
SCDIR = "manuel-math-t6/assets/math-t6/scenes2"

# batch 1 : les occurrences 1..10 de image54 (S3..S12 /18 Géométrie)
BATCH1 = [
 "scene_g03_diagonales_symetrie.jpg", "scene_g04_classer_quadrilateres.jpg",
 "scene_g05_comparer_proprietes.jpg", "scene_g06_angle_triangle.jpg",
 "scene_g07_angles_quadrilatere.jpg", "scene_g08_construire_quadrilateres.jpg",
 "scene_g09_construire_triangles.jpg", "scene_g10_cercle_polygones.jpg",
 "scene_g11_composer_figures.jpg", "scene_g12_prismes.jpg",
]

def jpeg_size(path):
    with open(path, "rb") as f:
        data = f.read()
    i = 2
    while i < len(data):
        assert data[i] == 0xFF, (path, i)
        marker = data[i+1]
        if marker in (0xC0, 0xC1, 0xC2, 0xC3, 0xC5, 0xC6, 0xC7, 0xC9, 0xCA, 0xCB, 0xCD, 0xCE, 0xCF):
            h, w = struct.unpack(">HH", data[i+5:i+9])
            return w, h
        i += 2 + struct.unpack(">H", data[i+2:i+4])[0]
    raise ValueError(path)

zin = zipfile.ZipFile(SRC)
doc = zin.read("word/document.xml").decode("utf-8")
rels = zin.read("word/_rels/document.xml.rels").decode("utf-8")
ct = zin.read("[Content_Types].xml").decode("utf-8")

rid2img = {m.group(1): m.group(2) for m in re.finditer(r'Id="(rId\d+)"[^>]*Target="media/([^"]+)"', rels)}

# paragraphes
P = [(m.start(), m.end(), m.group(0)) for m in re.finditer(r"<w:p\b.*?</w:p>", doc, re.S)]
def ptxt(x): return re.sub(r"\s+", " ", re.sub(r"<[^>]+>", "", x)).strip()

# occurrences de chaque image dans l'ordre
occ = {}
scene_paras = []   # (para_idx, rid, img, occnum)
for idx, (s, e, p) in enumerate(P):
    for m in re.finditer(r'r:embed="(rId\d+)"', p):
        rid = m.group(1); img = rid2img.get(rid, "?")
        occ[img] = occ.get(img, 0) + 1
        scene_paras.append((idx, rid, img, occ[img]))

REPEATED = {"image54.png":14,"image74.png":7,"image4.png":6,"image30.png":5,"image36.png":5,
 "image13.png":4,"image20.png":4,"image42.png":4,"image47.png":4,"image87.png":4,"image92.png":4,
 "image9.png":3,"image71.png":3,"image82.png":3,"image97.png":3,"image15.png":2}

# doublons = occurrence >= 2 des images répétées (image1 = logo avant-propos : on garde)
dups = [(idx, rid, img, o) for idx, rid, img, o in scene_paras if img in REPEATED and o >= 2]
print("doublons trouvés:", len(dups))
assert len(dups) == sum(v - 1 for v in REPEATED.values()), len(dups)  # 65? non: 59

# titre-leçon le plus proche au-dessus + titre séance pour TODO
seance_titles = {}
cur = None
lesson_of = {}
for idx, (s, e, p) in enumerate(P):
    t = ptxt(p)
    m = re.match(r"SÉANCE\s+(\d+\s*/\s*\d+)\s*—\s*(.+)$", t)
    if m: cur = (m.group(1), m.group(2))
    lesson_of[idx] = cur

# vérif : chaque para doublon est bien un para-image sans texte
for idx, rid, img, o in dups:
    assert ptxt(P[idx][2]) == "", (idx, img)

# batch1 = doublons image54 occurrences 2..11
b1 = [(idx, rid, img, o) for idx, rid, img, o in dups if img == "image54.png" and 2 <= o <= 11]
assert len(b1) == 10
b1_idx = {idx: BATCH1[i] for i, (idx, rid, img, o) in enumerate(sorted(b1))}

# nouveaux rels/media
mx = max(int(m.group(1)) for m in re.finditer(r'Id="rId(\d+)"', rels))
newrels = []
newmedia = {}   # arcname -> filepath
docpr = 2000000000

todo = []
# traiter droite -> gauche
for idx, rid, img, o in sorted(dups, key=lambda x: -x[0]):
    s, e, p = P[idx]
    if idx in b1_idx:
        fn = b1_idx[idx]
        path = os.path.join(SCDIR, fn)
        w, h = jpeg_size(path)
        mx += 1
        nrid = f"rId{mx}"
        arc = f"media/scene_{mx}.jpg"
        newrels.append(f'<Relationship Id="{nrid}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/image" Target="{arc}"/>')
        newmedia["word/" + arc] = path
        # extent : garder cx=4762500, cy selon ratio
        cx = 4762500
        cy = int(cx * h / w)
        np_ = p
        np_ = re.sub(r'r:embed="rId\d+"', f'r:embed="{nrid}"', np_)
        np_ = re.sub(r'<wp:extent cx="\d+" cy="\d+"', f'<wp:extent cx="{cx}" cy="{cy}"', np_)
        np_ = re.sub(r'<a:ext cx="\d+" cy="\d+"', f'<a:ext cx="{cx}" cy="{cy}"', np_)
        docpr += 1
        np_ = re.sub(r'<wp:docPr id="\d+"', f'<wp:docPr id="{docpr}"', np_)
        doc = doc[:s] + np_ + doc[e:]
        print(f"REMPLACÉ  para {idx} {img} -> {fn} ({w}x{h})  leçon {lesson_of[idx]}")
    else:
        doc = doc[:s] + doc[e:]
        sea = lesson_of[idx]
        todo.append({"seance": sea[0], "titre": sea[1], "ancien": img})
        # print(f"supprimé para {idx} {img} leçon {sea}")

print("supprimés:", len(todo))
todo.reverse()  # ordre du document
json.dump(todo, open("manuel-math-t6/src/scenes_todo.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)

# rels + content types
rels = rels.replace("</Relationships>", "".join(newrels) + "</Relationships>")
if 'Extension="jpg"' not in ct and 'Extension="jpeg"' not in ct:
    ct = ct.replace("</Types>", '<Default Extension="jpg" ContentType="image/jpeg"/></Types>')

tmp = SRC + ".tmp"
zout = zipfile.ZipFile(tmp, "w", zipfile.ZIP_DEFLATED)
for item in zin.infolist():
    if item.filename == "word/document.xml": data = doc.encode("utf-8")
    elif item.filename == "word/_rels/document.xml.rels": data = rels.encode("utf-8")
    elif item.filename == "[Content_Types].xml": data = ct.encode("utf-8")
    else: data = zin.read(item.filename)
    zout.writestr(item, data)
for arc, path in newmedia.items():
    zout.write(path, arc)
zin.close(); zout.close()
os.replace(tmp, SRC)
print("OK:", SRC, os.path.getsize(SRC))
