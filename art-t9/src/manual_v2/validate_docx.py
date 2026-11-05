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
if root.xpath('//w:fldSimple[contains(@w:instr,"TOC")]',namespaces=NS): errors.append('champ TOC natif présent')
# tables 6 colonnes
grids=root.xpath('//w:tblGrid',namespaces=NS)
six=sum(1 for g in grids if len(g.findall('w:gridCol',NS))==6)
if six<36: errors.append(f'tables 6 colonnes={six}')
report={'file':str(DOC),'bytes':DOC.stat().st_size,'sectPr':len(sect),'min_half_points':min(sizes) if sizes else None,'fonts':sorted(fonts),'bookmarks':len(bookmarks),'internal_links':len(anchors),'lecons':len(lecons),'pratiques':len(pratiques),'seances':len(seances),'media':len(media),'audio_links':len(audio),'youtube_links':len(yt),'tables_6col':six,'errors':errors}
print(json.dumps(report,ensure_ascii=False,indent=2))
if errors: sys.exit(1)
print('VALIDATION DOCX : OK')
