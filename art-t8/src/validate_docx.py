#!/usr/bin/env python3
"""Contrôles structurels, typographiques et éditoriaux du lot pilote Arts T8.
Reprend le validateur T9 durci après le correctif Word 097fd24 (commit du manuel T9).
Ne remplace pas une ouverture réelle dans Word : voir l'annexe « Contrôle terrain ».
"""
import zipfile, re, sys, json
from pathlib import Path
from lxml import etree

ROOT = Path(__file__).resolve().parents[1]
DOC = ROOT / 'output/Art_T8_Pilote.docx'
NS = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main',
      'r': 'http://schemas.openxmlformats.org/officeDocument/2006/relationships',
      'wp': 'http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing',
      'a': 'http://schemas.openxmlformats.org/drawingml/2006/main'}
errors = []
z = zipfile.ZipFile(DOC)
bad = z.testzip()
if bad:
    errors.append(f'zip corrompu: {bad}')
root = etree.fromstring(z.read('word/document.xml'))
text = ''.join(root.xpath('//w:t/text()', namespaces=NS))

# 1. Architecture : ouverture + curriculum + fiche + leçon/pratique + annexes = 5 sections.
sect = root.xpath('//w:sectPr', namespaces=NS)
if len(sect) != 5:
    errors.append(f'sectPr={len(sect)} attendu=5')

# 2. Typographie imposée.
sizes = [int(x) for x in root.xpath('//w:sz/@w:val', namespaces=NS)]
if sizes and min(sizes) < 26:
    errors.append(f'taille min <13pt: {min(sizes)}')
fonts = set(root.xpath('//w:rFonts/@w:ascii', namespaces=NS))
if fonts and fonts != {'Times New Roman'}:
    errors.append(f'fonts={fonts}')

# 3. Évaluation conforme.
if re.search(r'\bOK\b', text) or 'PAS OK' in text:
    errors.append('OK/PAS OK présent')
for token in ['Acquis', 'En cours', 'À revoir']:
    if token not in text:
        errors.append(f'grille: {token} absent')

# 4. Éléments attendus du lot pilote.
required = ['AUTHENTICITÉ ET DROITS', 'CADRAGE DU LOT', 'RÉPARTITION OFFICIELLE',
            'SOMMAIRE INTERACTIF', 'CURRICULUM DES 36 PARTIES', 'FICHE DE PRÉPARATION',
            'RÉUTILISATION DES MÉDIAS', 'PROGRESSION PAR COMPÉTENCES', 'GLOSSAIRE',
            'SOURCES ET RESSOURCES', 'CONTRÔLE TERRAIN', 'CONSIGNE À LIRE',
            'ATTENTION REVENTES', 'Variantes selon la classe', 'Différenciation et remédiation',
            'Vidéos d’appoint', 'PE T8.pdf', '11 heures', '66 h', '36 parties']
for r in required:
    if r not in text:
        errors.append('élément attendu absent: ' + r)
forbidden = ['Scène vectorielle pédagogique', 'provisoirement vectorielles', 'T9 —', 'Classe : T9']
for f in forbidden:
    if f in text:
        errors.append('résidu T9/gabarit: ' + f)

# 5. Les 36 titres courts doivent être présents, en majuscules, au format DOMAINE : OBJET.
titles = json.loads((ROOT / 'src/titles.json').read_text())
if len(titles) != 36:
    errors.append(f'titles.json: {len(titles)} attendu=36')
for pid, t in titles.items():
    if t not in text:
        errors.append(f'titre absent du document: {pid} {t}')
    if t != t.upper() or ' : ' not in t:
        errors.append(f'titre non conforme: {pid} {t}')
for pid in titles:
    if f'bm_plan_{pid}' not in z.read('word/document.xml').decode('utf8'):
        errors.append(f'signet de curriculum absent: {pid}')

# 6. Compatibilité Word : conteneurs element-only sans texte brut (cause du rejet T9 V4).
ELEMENT_ONLY = {'body', 'tbl', 'tr', 'tc', 'p', 'r', 'hyperlink', 'sectPr', 'pPr', 'rPr',
                'tblPr', 'trPr', 'tcPr', 'hdr', 'ftr'}
xml_parts = [n for n in z.namelist() if re.fullmatch(r'word/(document|footer\d+|header\d+)\.xml', n)]
docpr_ids = []
for n in xml_parts:
    xr = etree.fromstring(z.read(n))
    for el in xr.iter():
        if etree.QName(el).localname in ELEMENT_ONLY:
            if (el.text or '').strip() or any((c.tail or '').strip() for c in el):
                errors.append(f'texte brut dans conteneur {etree.QName(el).localname}: {n}')
                break
    if xr.xpath('//w:p//w:tbl', namespaces=NS):
        errors.append(f'tableau imbriqué dans un paragraphe: {n}')
    if n.startswith('word/footer'):
        if len(xr) == 0 or etree.QName(xr[-1]).localname != 'p':
            errors.append(f'pied de page sans paragraphe terminal: {n}')
    for tc in xr.xpath('//w:tc', namespaces=NS):
        if len(tc) == 0 or etree.QName(tc[-1]).localname != 'p':
            errors.append(f'cellule sans paragraphe terminal: {n}')
    for tr in xr.xpath('//w:tr', namespaces=NS):
        if not tr.xpath('./w:tc', namespaces=NS):
            errors.append(f'ligne sans cellule: {n}')
    docpr_ids.extend(xr.xpath('//wp:docPr/@id', namespaces=NS))
if len(docpr_ids) != len(set(docpr_ids)):
    errors.append('ids wp:docPr dupliqués')

# 7. Signets / ancres : toute navigation interne doit résoudre.
bookmarks = set(root.xpath('//w:bookmarkStart/@w:name', namespaces=NS))
anchors = set()
for n in xml_parts:
    anchors.update(etree.fromstring(z.read(n)).xpath('//w:hyperlink/@w:anchor', namespaces=NS))
missing = anchors - bookmarks
if missing:
    errors.append(f'ancres sans signet: {sorted(missing)[:10]}')
bm_ids = root.xpath('//w:bookmarkStart/@w:id', namespaces=NS)
if len(bm_ids) != len(set(bm_ids)):
    errors.append('ids de signet dupliqués')

# 8. Relations et types de contenu.
rels = etree.fromstring(z.read('word/_rels/document.xml.rels'))
rids = [r.get('Id') for r in rels]
if len(rids) != len(set(rids)):
    errors.append('Id de relation dupliqués')
used = set(root.xpath('//@r:embed', namespaces=NS)) | set(root.xpath('//@r:id', namespaces=NS))
declared = set(rids)
if used - declared:
    errors.append(f'relations manquantes: {sorted(used - declared)[:5]}')
ct = etree.fromstring(z.read('[Content_Types].xml'))
defaults = {e.get('Extension').lower() for e in ct if etree.QName(e).localname == 'Default'}
for n in z.namelist():
    if n.startswith('word/media/'):
        ext = n.rsplit('.', 1)[-1].lower()
        if ext not in defaults:
            errors.append(f'extension média non déclarée: {ext}')

# 9. Images : 1 scène + 7 schémas + QR officiel + icône YouTube (inline, réutilisée).
media_files = [n for n in z.namelist() if n.startswith('word/media/')]
if len(media_files) < 9:
    errors.append(f'médias embarqués={len(media_files)} attendu>=9')

# 10. Pas de champ TOC natif (convention T9 : sommaire par signets).
if root.xpath('//w:instrText[contains(text(),"TOC")]', namespaces=NS):
    errors.append('champ TOC natif présent')

print(f'Document : {DOC.name} ({DOC.stat().st_size} octets)')
print(f'Sections={len(sect)} médias={len(media_files)} signets={len(bookmarks)} ancres={len(anchors)} images={len(docpr_ids)}')
print(f'Taille min={min(sizes)} demi-points · polices={fonts or "héritées"}')
if errors:
    print('\nÉCHEC :')
    for e in errors:
        print(' -', e)
    sys.exit(1)
print('\nPASS — contrôles structurels, Word, typographiques et éditoriaux.')
