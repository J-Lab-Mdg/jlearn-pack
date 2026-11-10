# -*- coding: utf-8 -*-
"""sary_jpeg.py — PNG voaforona (`sary_src/`) → JPEG 1 200 px (`sary/`) ho an'ny build.

    ./run.sh src/sary_jpeg.py            # avy amin'ny sary_src/
    ./run.sh src/sary_jpeg.py --sivana   # fangonana ny sary_src/ efa nohavaozina
"""
import glob
import io
import os
import sys

from PIL import Image

DOS = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FODY_PNG = os.path.join(DOS, "sary_src")
FODY_JPG = os.path.join(DOS, "sary")


def main():
    os.makedirs(FODY_JPG, exist_ok=True)
    vaovao = 0
    for f in sorted(glob.glob(os.path.join(FODY_PNG, "*.png"))):
        cible = os.path.join(FODY_JPG, os.path.basename(f)[:-4] + ".jpg")
        if os.path.exists(cible):
            continue
        im = Image.open(f).convert("RGB")
        w = 1200
        im = im.resize((w, int(im.height * w / im.width)), Image.LANCZOS)
        im.save(cible, "JPEG", quality=82, optimize=True)
        vaovao += 1
    print("JPEG vaovao : %d · total ao amin'ny sary/ : %d · refy : %d Ko"
          % (vaovao, len(os.listdir(FODY_JPG)),
             sum(os.path.getsize(os.path.join(FODY_JPG, x)) for x in os.listdir(FODY_JPG)) // 1024))
    if "--sivana" in sys.argv:
        for f in glob.glob(os.path.join(FODY_PNG, "*.png")):
            os.remove(f)
        if not os.listdir(FODY_PNG):
            os.rmdir(FODY_PNG)
        print("sary_src/ : voafafa")


if __name__ == "__main__":
    main()
