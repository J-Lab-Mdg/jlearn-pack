#!/usr/bin/env python3
import zipfile, re, sys, json, hashlib, posixpath
from pathlib import Path
from lxml import etree
ROOT=Path(__file__).resolve().parents[2]
DOC=ROOT/'output/Art_T9_J-Learn.docx'
DRIVE=Path(__file__).resolve().parent/'drive_audio.json'
NS={'w':'http://schemas.openxmlformats.org/wordprocessingml/2006/main','r':'http://schemas.openxmlformats.org/officeDocument/2006/relationships','wp':'http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing','a':'http://schemas.openxmlformats.org/drawingml/2006/main'}
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
for forbidden in ['Police de lecture','Type d’exercice','Voir les six sous-étapes','Image, objet ou situation','ceci :','Donc, La','Scène vectorielle pédagogique','provisoirement vectorielles','Audio sans smartphone']:
    if forbidden in text: errors.append('note interne/gabarit présent: '+forbidden)
for required in ['AUTHENTICITÉ ET DROITS','AVANT-PROPOS','MODE D’EMPLOI','GLOSSAIRE','SOURCES ET RESSOURCES','PROGRESSION PAR COMPÉTENCES','CONTRÔLE TERRAIN','ZIP en un clic','Transcription de la consigne générée','Version texte équivalente','30 illustrations de scène générées par IA','6 scènes pilotes conservées','S19–S21 suivent le style naturaliste de S25']:
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

# Carte réelle section -> pied de page : chaque partie doit porter SES ressources.
R='{%s}'%NS['r']
A='{%s}'%NS['a']
ASSETS=ROOT/'assets'
def sha(data): return hashlib.sha256(data).hexdigest()
def rels_for(part):
    name=posixpath.join(posixpath.dirname(part),'_rels',posixpath.basename(part)+'.rels')
    if name not in z.namelist(): return {}
    return {r.get('Id'):r for r in etree.fromstring(z.read(name))}
def target_for(part,rel):
    t=rel.get('Target','')
    return t if rel.get('TargetMode')=='External' else posixpath.normpath(posixpath.join(posixpath.dirname(part),t))
doc_rels=rels_for('word/document.xml')
body=root.find('w:body',NS)
sections=[]; current=[]
for child in body:
    current.append(child)
    sp=child.find('w:pPr/w:sectPr',NS) if child.tag==W+'p' else None
    if sp is not None:
        sections.append((current,sp)); current=[]
    elif child.tag==W+'sectPr':
        sections.append((current,child)); current=[]
if current: errors.append('contenu après la dernière section')
resource_footers=0; footer_small_audio=0; footer_qr_80=0; footer_min=999
footer_roots={n:etree.fromstring(z.read(n)) for n in z.namelist() if re.fullmatch(r'word/footer\d+\.xml',n)}
for fr in footer_roots.values():
    for run in fr.xpath('//w:r',namespaces=NS):
        txt=''.join(run.xpath('w:t/text()',namespaces=NS))
        for hv in run.xpath('w:rPr/w:sz/@w:val',namespaces=NS):
            v=int(hv); footer_min=min(footer_min,v)
            if v<26:
                if v==20 and txt=='Audio': footer_small_audio+=1
                else: errors.append(f'exception typographique footer non autorisée: {v} demi-points pour {txt!r}')
    ff=set(fr.xpath('//w:rFonts/@w:ascii',namespaces=NS))
    if ff and ff!={'Times New Roman'}: errors.append(f'police footer incorrecte: {ff}')
for elems,sp in sections:
    mar=sp.find('w:pgMar',NS)
    if mar is not None:
        if int(mar.get(W+'bottom','0'))<1800 or int(mar.get(W+'footer','9999'))>360:
            errors.append('marge basse insuffisante pour le pied de page ressources')
    bms=[b for el in elems for b in el.xpath('.//w:bookmarkStart/@w:name',namespaces=NS)]
    lids=[b[9:] for b in bms if b.startswith('bm_lecon_')]
    if not lids: continue
    if len(lids)!=1: errors.append(f'section partie avec plusieurs leçons: {lids}'); continue
    pid=lids[0]; resource_footers+=1
    ref=sp.find('w:footerReference[@w:type="default"]',NS)
    if ref is None or ref.get(R+'id') not in doc_rels:
        errors.append(f'pied de page manquant pour {pid}'); continue
    fpart=target_for('word/document.xml',doc_rels[ref.get(R+'id')])
    if fpart not in footer_roots: errors.append(f'pied de page introuvable pour {pid}: {fpart}'); continue
    fr=footer_roots[fpart]; frels=rels_for(fpart)
    fh=[]
    for h in fr.xpath('//w:hyperlink[@r:id]',namespaces=NS):
        rel=frels.get(h.get(R+'id'))
        if rel is not None and rel.get('Type','').endswith('/hyperlink'):
            fh.append((rel.get('Target',''),''.join(h.xpath('.//w:t/text()',namespaces=NS))))
    aud=[u for u,_ in fh if 'drive.google.com/file/d/' in u]
    if len(aud)!=1 or drive['files'].get(pid) not in aud[0]: errors.append(f'lien Audio incorrect pour {pid}')
    footer_anchors=fr.xpath('//w:hyperlink/@w:anchor',namespaces=NS)
    if f'bm_tr_{pid}' not in footer_anchors: errors.append(f'lien Texte incorrect pour {pid}')
    body_yt=[]
    for el in elems:
        for h in el.xpath('.//w:hyperlink[@r:id]',namespaces=NS):
            rel=doc_rels.get(h.get(R+'id'))
            if rel is not None and 'youtube' in rel.get('Target',''): body_yt.append(rel.get('Target'))
    body_yt=list(dict.fromkeys(body_yt)); foot_yt=[u for u,_ in fh if 'youtube' in u]
    if foot_yt!=body_yt: errors.append(f'vidéos footer != vidéos corps pour {pid}')
    qrfile=ASSETS/'manual/qr'/f'{pid}_audio.png'
    qrh=sha(qrfile.read_bytes()) if qrfile.exists() else None
    media_h=[]
    for embed in fr.xpath('//a:blip/@r:embed',namespaces=NS):
        rel=frels.get(embed)
        if rel is not None:
            mp=target_for(fpart,rel)
            if mp in z.namelist(): media_h.append(sha(z.read(mp)))
    if qrh not in media_h: errors.append(f'QR audio absent/incorrect dans le footer {pid}')
    exts=[(int(e.get('cx')),int(e.get('cy'))) for e in fr.xpath('//wp:extent',namespaces=NS)]
    if (762000,762000) in exts: footer_qr_80+=1
    else: errors.append(f'QR footer {pid} réduit sous 80 px')
    fi=' '.join(fr.xpath('//w:instrText/text()',namespaces=NS))+' '+' '.join(fr.xpath('//w:fldSimple/@w:instr',namespaces=NS))
    if 'PAGE' not in fi: errors.append(f'pagination absente du footer {pid}')
if resource_footers!=36: errors.append(f'pieds de page ressources={resource_footers}')
if footer_small_audio!=36: errors.append(f'liens Audio 10pt={footer_small_audio}')
if footer_qr_80!=36: errors.append(f'QR footer 80px={footer_qr_80}')

report={'file':str(DOC),'bytes':DOC.stat().st_size,'sectPr':len(sect),'min_half_points':min(sizes) if sizes else None,'fonts':sorted(fonts),'bookmarks':len(bookmarks),'internal_links':len(anchors),'lecons':len(lecons),'pratiques':len(pratiques),'seances':len(seances),'eval_grids':len(evals),'media':len(media),'alt_texts':len(alt),'audio_drive_links':len(audio),'zip_links':len(zip_links),'youtube_links':len(yt),'github_raw_links':len(github_raw),'tables_6col':six,'resource_footers':resource_footers,'footer_audio_10pt':footer_small_audio,'footer_qr_80px':footer_qr_80,'footer_min_half_points':footer_min if footer_min<999 else None,'errors':errors}
print(json.dumps(report,ensure_ascii=False,indent=2))
if errors: sys.exit(1)
print('VALIDATION DOCX : OK')
