#!/usr/bin/env python3
import zipfile, re, sys, json
from pathlib import Path
from lxml import etree
DOC=Path(__file__).resolve().parents[2]/'output/Art_T9_J-Learn.docx'
NS={'w':'http://schemas.openxmlformats.org/wordprocessingml/2006/main','r':'http://schemas.openxmlformats.org/officeDocument/2006/relationships'}
z=zipfile.ZipFile(DOC)
xml=z.read('word/document.xml')
root=etree.fromstring(xml)
text=''.join(root.xpath('//w:t/text()',namespaces=NS))
errors=[]
sect=root.xpath('//w:sectPr',namespaces=NS)
if len(sect)!=1: errors.append(f'sectPr={len(sect)}')
sizes=[int(x) for x in root.xpath('//w:sz/@w:val',namespaces=NS)]
if sizes and min(sizes)<26: errors.append(f'taille min <13pt: {min(sizes)}')
fonts=set(root.xpath('//w:rFonts/@w:ascii',namespaces=NS))
if fonts and fonts!={'Times New Roman'}: errors.append(f'fonts={fonts}')
if 'OK/PAS OK' in text or re.search(r'\bOK\b',text) or re.search(r'\bPAS OK\b',text): errors.append('OK/PAS OK présent')
if 'Acquis' not in text or 'En cours' not in text or 'À revoir' not in text: errors.append('grille Acquis/En cours/À revoir absente')
bookmarks=set(root.xpath('//w:bookmarkStart/@w:name',namespaces=NS))
anchors=set(root.xpath('//w:hyperlink/@w:anchor',namespaces=NS))
missing=anchors-bookmarks
if missing: errors.append(f'ancres sans signet: {sorted(missing)[:10]}')
lecons=[b for b in bookmarks if b.startswith('bm_lecon_')]
pratiques=[b for b in bookmarks if b.startswith('bm_pratique_')]
seances=[b for b in bookmarks if re.fullmatch(r'bm_s\d+',b)]
if len(lecons)!=36: errors.append(f'leçons={len(lecons)}')
if len(pratiques)!=36: errors.append(f'pratiques={len(pratiques)}')
if len(seances)!=33: errors.append(f'séances={len(seances)}')
media=[n for n in z.namelist() if n.startswith('word/media/')]
rels=etree.fromstring(z.read('word/_rels/document.xml.rels'))
hyper=[r.get('Target') for r in rels if r.get('Type','').endswith('/hyperlink')]
audio=[u for u in hyper if u and u.endswith('.mp3')]
yt=[u for u in hyper if u and 'youtube' in u]
if len(audio)!=36: errors.append(f'liens audio={len(audio)}')
if len(yt)<20: errors.append(f'liens YouTube={len(yt)}')
forbidden=['n-XXUXO4BOU','uyrpxv5pKTg','SDs5WE0-u-I','IaVNharOE9I','qds0LEujwGs','oABX77s9x00','WvEeYiklvH0','V8-5R5CsIWA']
for fid in forbidden:
    if any(fid in (u or '') for u in yt): errors.append('vidéo retirée encore présente: '+fid)
if root.xpath('//w:fldSimple[contains(@w:instr,"TOC")]',namespaces=NS): errors.append('champ TOC natif présent')
# tables 6 colonnes
grids=root.xpath('//w:tblGrid',namespaces=NS)
six=sum(1 for g in grids if len(g.findall('w:gridCol',NS))==6)
if six<36: errors.append(f'tables 6 colonnes={six}')
# chaque ligne de chaque tableau doit couvrir exactement sa grille (pas de cellules en trop -> débordement)
W='{%s}'%NS['w']
overflow=0
for ti,t in enumerate(root.xpath('//w:tbl',namespaces=NS)):
    grid=len(t.findall('w:tblGrid/w:gridCol',NS))
    for ri,tr in enumerate(t.findall('w:tr',NS)):
        span=0
        for tc in tr.findall('w:tc',NS):
            gs=tc.find('w:tcPr/w:gridSpan',NS)
            span+=int(gs.get(W+'val')) if gs is not None else 1
        if span!=grid:
            overflow+=1
            if overflow<4: errors.append(f'table {ti} ligne {ri}: span={span} grille={grid}')
if overflow: errors.append(f'lignes en débordement={overflow}')
# en-tête du déroulement : ligne 2 = 6 cellules (2 réelles + 4 continuations auto), pas 10
for t in root.xpath('//w:tbl',namespaces=NS):
    if len(t.findall('w:tblGrid/w:gridCol',NS))!=6: continue
    trs=t.findall('w:tr',NS)
    if len(trs)>1 and len(trs[1].findall('w:tc',NS))!=6:
        errors.append('en-tête déroulement ligne 2 != 6 cellules'); break
report={'file':str(DOC),'bytes':DOC.stat().st_size,'sectPr':len(sect),'min_half_points':min(sizes) if sizes else None,'fonts':sorted(fonts),'bookmarks':len(bookmarks),'internal_links':len(anchors),'lecons':len(lecons),'pratiques':len(pratiques),'seances':len(seances),'media':len(media),'audio_links':len(audio),'youtube_links':len(yt),'tables_6col':six,'errors':errors}
print(json.dumps(report,ensure_ascii=False,indent=2))
if errors: sys.exit(1)
print('VALIDATION DOCX : OK')
