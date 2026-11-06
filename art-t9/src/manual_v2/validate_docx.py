#!/usr/bin/env python3
import zipfile, re, sys, json
from pathlib import Path
from lxml import etree
ROOT=Path(__file__).resolve().parents[2]
DOC=ROOT/'output/Art_T9_J-Learn.docx'
DRIVE=Path(__file__).resolve().parent/'drive_audio.json'
NS={'w':'http://schemas.openxmlformats.org/wordprocessingml/2006/main','r':'http://schemas.openxmlformats.org/officeDocument/2006/relationships','wp':'http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing'}
z=zipfile.ZipFile(DOC)
root=etree.fromstring(z.read('word/document.xml'))
text=''.join(root.xpath('//w:t/text()',namespaces=NS))
drive=json.loads(DRIVE.read_text())
errors=[]
sect=root.xpath('//w:sectPr',namespaces=NS)
# 1 ouverture + 33 fiches + 36 parties (pied de page ressources) + 1 annexes = 71 sections.
if len(sect)!=71: errors.append(f'sectPr={len(sect)} attendu=71')
sizes=[int(x) for x in root.xpath('//w:sz/@w:val',namespaces=NS)]
if sizes and min(sizes)<26: errors.append(f'taille min <13pt: {min(sizes)}')
fonts=set(root.xpath('//w:rFonts/@w:ascii',namespaces=NS))
if fonts and fonts!={'Times New Roman'}: errors.append(f'fonts={fonts}')
if 'OK/PAS OK' in text or re.search(r'\bOK\b',text) or re.search(r'\bPAS OK\b',text): errors.append('OK/PAS OK présent')
if 'Acquis' not in text or 'En cours' not in text or 'À revoir' not in text: errors.append('grille Acquis/En cours/À revoir absente')
for forbidden in ['Police de lecture','Type d’exercice','Voir les six sous-étapes','Image, objet ou situation','ceci :','Donc, La']:
    if forbidden in text: errors.append('note interne/gabarit présent: '+forbidden)
for required in ['AUTHENTICITÉ ET DROITS','AVANT-PROPOS','MODE D’EMPLOI','GLOSSAIRE','SOURCES ET RESSOURCES','PROGRESSION PAR COMPÉTENCES','CONTRÔLE TERRAIN','ZIP en un clic','Transcription de la consigne générée','Version texte équivalente']:
    if required not in text: errors.append('élément attendu absent: '+required)
if text.count('Variantes selon la classe')<33: errors.append('variantes séances <33')
if text.count('Différenciation et remédiation')<33: errors.append('différenciation fiches <33')
xml_parts=[n for n in z.namelist() if re.fullmatch(r'word/(document|footer\d+|header\d+)\.xml',n)]
bookmarks=set(root.xpath('//w:bookmarkStart/@w:name',namespaces=NS))
anchors=set()
for n in xml_parts:
    xr=etree.fromstring(z.read(n))
    anchors.update(xr.xpath('//w:hyperlink/@w:anchor',namespaces=NS))
missing=anchors-bookmarks
if missing: errors.append(f'ancres sans signet: {sorted(missing)[:10]}')
lecons=[b for b in bookmarks if b.startswith('bm_lecon_')]
pratiques=[b for b in bookmarks if b.startswith('bm_pratique_')]
seances=[b for b in bookmarks if re.fullmatch(r'bm_s\d+',b)]
evals=[b for b in bookmarks if re.fullmatch(r'bm_eval_s\d+',b)]
if len(lecons)!=36: errors.append(f'leçons={len(lecons)}')
if len(pratiques)!=36: errors.append(f'pratiques={len(pratiques)}')
if len(seances)!=33: errors.append(f'séances={len(seances)}')
if len(evals)!=33: errors.append(f'grilles évaluation={len(evals)}')
media=[n for n in z.namelist() if n.startswith('word/media/')]
hyper=[]
for n in z.namelist():
    if re.fullmatch(r'word/_rels/(document|footer\d+|header\d+)\.xml\.rels',n):
        rels=etree.fromstring(z.read(n))
        hyper.extend(r.get('Target') for r in rels if r.get('Type','').endswith('/hyperlink'))
audio=[u for u in hyper if u and 'drive.google.com/file/d/' in u]
zip_links=[u for u in hyper if u and drive['zip_id'] in u]
yt=[u for u in hyper if u and 'youtube' in u]
github_raw=[u for u in hyper if u and 'raw.githubusercontent.com' in u]
if len(audio)!=36: errors.append(f'liens audio Drive individuels={len(audio)}')
for pid,fid in drive['files'].items():
    if not any(fid in (u or '') for u in audio): errors.append('audio Drive manquant: '+pid)
if not zip_links: errors.append('lien ZIP un clic absent')
if github_raw: errors.append(f'liens GitHub raw restants={len(github_raw)}')
if len(yt)<20: errors.append(f'liens YouTube={len(yt)}')
for fid in ['n-XXUXO4BOU','uyrpxv5pKTg','SDs5WE0-u-I','IaVNharOE9I','qds0LEujwGs','oABX77s9x00','WvEeYiklvH0','V8-5R5CsIWA']:
    if any(fid in (u or '') for u in yt): errors.append('vidéo retirée encore présente: '+fid)
if root.xpath('//w:fldSimple[contains(@w:instr,"TOC")]',namespaces=NS): errors.append('champ TOC natif présent')
instr=' '.join(root.xpath('//w:instrText/text()',namespaces=NS))
footer_instr=''
for n in z.namelist():
    if re.fullmatch(r'word/footer\d+\.xml',n):
        fr=etree.fromstring(z.read(n)); footer_instr+=' '+' '.join(fr.xpath('//w:instrText/text()',namespaces=NS))
if 'PAGE' not in instr and 'PAGE' not in footer_instr: errors.append('pagination footer absente')
# alt-textes descriptifs
alt=[]
for n in xml_parts:
    xr=etree.fromstring(z.read(n))
    alt.extend(x for x in xr.xpath('//wp:docPr/@descr',namespaces=NS) if x)
bad_alt=[a for a in alt if a.endswith('.png') or a.endswith('.jpg')]
if len(alt)<250: errors.append(f'alt-textes={len(alt)}')
if bad_alt: errors.append(f'alt-textes nom de fichier={len(bad_alt)}')
# tables 6 colonnes
grids=root.xpath('//w:tblGrid',namespaces=NS)
six=sum(1 for g in grids if len(g.findall('w:gridCol',NS))==6)
if six<36: errors.append(f'tables 6 colonnes={six}')
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
for t in root.xpath('//w:tbl',namespaces=NS):
    if len(t.findall('w:tblGrid/w:gridCol',NS))!=6: continue
    trs=t.findall('w:tr',NS)
    if len(trs)>1 and len(trs[1].findall('w:tc',NS))!=6:
        errors.append('en-tête déroulement ligne 2 != 6 cellules'); break
report={'file':str(DOC),'bytes':DOC.stat().st_size,'sectPr':len(sect),'min_half_points':min(sizes) if sizes else None,'fonts':sorted(fonts),'bookmarks':len(bookmarks),'internal_links':len(anchors),'lecons':len(lecons),'pratiques':len(pratiques),'seances':len(seances),'eval_grids':len(evals),'media':len(media),'alt_texts':len(alt),'audio_drive_links':len(audio),'zip_links':len(zip_links),'youtube_links':len(yt),'github_raw_links':len(github_raw),'tables_6col':six,'errors':errors}
print(json.dumps(report,ensure_ascii=False,indent=2))
if errors: sys.exit(1)
print('VALIDATION DOCX : OK')
