#!/usr/bin/env python3
"""Version allégée du manuel 7e : recompression des illustrations.

Les scènes sont affichées sur 13 cm de large. À 800 px, cela donne
~156 DPI — au-dessus du seuil d'impression correcte (150 DPI) et bien
au-delà du besoin écran. Les schémas géométriques (PNG à aplats) sont
laissés intacts : ils sont déjà légers et la recompression JPEG les
dégraderait.
"""
import zipfile, io, os, sys
from PIL import Image

SRC = 'telechargements/Manuel-Mathematiques-7e-JLearn-FINAL.docx'
DST = 'telechargements/Manuel-Mathematiques-7e-JLearn-FINAL-leger.docx'
MAX_W, QUALITY = 800, 72

def main():
    zin = zipfile.ZipFile(SRC)
    before = after = 0
    n = 0
    with zipfile.ZipFile(DST, 'w', zipfile.ZIP_DEFLATED) as zo:
        for info in zin.infolist():
            data = zin.read(info.filename)
            if info.filename.startswith('word/media/scene'):
                before += len(data)
                im = Image.open(io.BytesIO(data)).convert('RGB')
                w, h = im.size
                if w > MAX_W:
                    im = im.resize((MAX_W, int(h * MAX_W / w)), Image.LANCZOS)
                buf = io.BytesIO()
                im.save(buf, 'JPEG', quality=QUALITY, optimize=True,
                        progressive=True)
                if buf.tell() < len(data):
                    data = buf.getvalue()
                    n += 1
                after += len(data)
            zo.writestr(info, data)
    print('Images recompressées : %d' % n)
    print('Médias   : %.2f Mo -> %.2f Mo' % (before/1048576, after/1048576))
    print('Fichier  : %.2f Mo -> %.2f Mo'
          % (os.path.getsize(SRC)/1048576, os.path.getsize(DST)/1048576))

if __name__ == '__main__':
    main()
