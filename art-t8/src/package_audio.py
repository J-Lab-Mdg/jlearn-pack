#!/usr/bin/env python3
"""Assemble les 36 MP3 en un ZIP local destiné à Google Drive (non versionné)."""
from pathlib import Path
from zipfile import ZipFile, ZIP_DEFLATED
import sys
root=Path(__file__).resolve().parents[1]
audio=root/'audio'
out=root/'output'/'Arts_T8_Audios.zip'
ids=['s01','s02','s03','s04','s05','s06a','s06b','s07','s08','s09','s10','s11','s12','s13','s14','s15','s16','s17a','s17b','s18','s19','s20','s21','s22','s23','s24','s25','s26','s27','s28a','s28b','s29','s30','s31','s32','s33']
missing=[f'{i}.mp3' for i in ids if not (audio/f'{i}.mp3').is_file()]
if missing: raise SystemExit('MP3 manquants: '+', '.join(missing))
readme=('Arts T8 — J-Learn\n36 consignes audio en français, une par partie du manuel.\n'
        'Les identifiants suivent les séances : s06a/s06b, s17a/s17b et s28a/s28b désignent les deux heures des séances charnières.\n'
        'Dézipper puis ouvrir le MP3 correspondant à la partie souhaitée.\n')
out.parent.mkdir(parents=True,exist_ok=True)
with ZipFile(out,'w',ZIP_DEFLATED,compresslevel=9) as z:
    for i in ids:z.write(audio/f'{i}.mp3',arcname=f'{i}.mp3')
    z.writestr('LISEZ-MOI.txt',readme)
with ZipFile(out) as z:
    names=z.namelist()
    if len(names)!=37 or z.testzip(): raise SystemExit('ZIP incomplet ou corrompu')
print(f'ZIP PASS — {out} — {out.stat().st_size} octets — 36 MP3 + LISEZ-MOI')
