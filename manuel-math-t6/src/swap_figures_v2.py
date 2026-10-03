# -*- coding: utf-8 -*-
# Remplace les figures génériques par les figures V2 exactes (fig<idx>.png)
# idx = position de la leçon dans l'ordre du document (0..78)
import zipfile, re, os, struct, glob

SRC = "manuel-math-t6/livrables/Manuel_Mathematiques_T6_JLearn_V1.docx"
FD = "manuel-math-t6/assets/math-t6/figures2"

def png_size(path):
    d = open(path, "rb").read()
    return struct.unpack(">II", d[16:24])

new_figs = {int(re.search(r"fig(\d+)\.png", f).group(1)): f
            for f in glob.glob(FD + "/fig*.png")}
print("figures V2:", len(new_figs))

zin = zipfile.ZipFile(SRC)
doc = zin.read("word/document.xml").decode("utf-8")
rels = zin.read("word/_rels/document.xml.rels").decode("utf-8")
rid2img = {m.group(1): m.group(2) for m in re.finditer(r'Id="(rId\d+)"[^>]*Target="media/([^"]+)"', rels)}

# même repérage que l'inventaire : figure = image de leçon hors scène
paras = [(m.start(), m.end(), m.group(0)) for m in re.finditer(r"<w:p\b.*?</w:p>", doc, re.S)]
def ptxt(x): return re.sub(r"\s+", " ", re.sub(r"<[^>]+>", "", x)).strip()

figmap = []   # idx -> (media, rid)
cur = None
for i, (s, e, p) in enumerate(paras):
    t = ptxt(p)
    if re.match(r"SÉANCE\s+\d+\s*/\s*\d+\s*—\s*.+$", t): cur = t
    m = re.search(r'r:embed="(rId\d+)"', p)
    if m and cur:
        img = rid2img[m.group(1)]
        prev = ptxt(paras[i-1][2]) if i else ""
        if not img.startswith("scene_") and not prev.startswith("Autrement dit :") and img != "image1.png":
            figmap.append((img, m.group(1)))
assert len(figmap) == 79, len(figmap)

# remplacement des médias + extents
replace_media = {}
for idx, fpath in sorted(new_figs.items()):
    media, rid = figmap[idx]
    w, h = png_size(fpath)
    replace_media["word/media/" + media] = fpath
    # extent : largeur fixe 4 762 500 EMU, hauteur proportionnelle
    cx = 4762500; cy = int(cx * h / w)
    # localiser le drawing contenant ce rid et corriger ses 2 extents
    pos = doc.find(f'r:embed="{rid}"')
    assert pos > 0, rid
    dstart = doc.rfind("<w:drawing", 0, pos)
    dend = doc.find("</w:drawing>", pos)
    seg = doc[dstart:dend]
    seg = re.sub(r'<wp:extent cx="\d+" cy="\d+"', f'<wp:extent cx="{cx}" cy="{cy}"', seg)
    seg = re.sub(r'<a:ext cx="\d+" cy="\d+"', f'<a:ext cx="{cx}" cy="{cy}"', seg)
    doc = doc[:dstart] + seg + doc[dend:]
    print(f"fig{idx:<3} -> {media:<14} ({w}x{h})")

tmp = SRC + ".tmp"
zout = zipfile.ZipFile(tmp, "w", zipfile.ZIP_DEFLATED)
for item in zin.infolist():
    if item.filename == "word/document.xml":
        data = doc.encode("utf-8")
    elif item.filename in replace_media:
        data = open(replace_media[item.filename], "rb").read()
    else:
        data = zin.read(item.filename)
    zout.writestr(item, data)
zin.close(); zout.close()
os.replace(tmp, SRC)
print("OK:", os.path.getsize(SRC), "| figures remplacées:", len(replace_media))
