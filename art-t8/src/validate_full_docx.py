#!/usr/bin/env python3
"""Validation structurelle du manuel complet Arts T8 (ne remplace pas Word desktop)."""
from pathlib import Path
from zipfile import ZipFile
from lxml import etree
import json, re, sys

if len(sys.argv) != 2:
    raise SystemExit('Usage: python validate_full_docx.py MANUEL.docx')
doc = Path(sys.argv[1])
ns = {'w':'http://schemas.openxmlformats.org/wordprocessingml/2006/main',
      'a':'http://schemas.openxmlformats.org/drawingml/2006/main',
      'wp':'http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing'}
errors=[]
with ZipFile(doc) as z:
    bad=z.testzip()
    if bad: errors.append(f'ZIP corrompu: {bad}')
    xml=z.read('word/document.xml')
    root=etree.fromstring(xml)
    text=''.join(root.xpath('//w:t/text()',namespaces=ns))
    sections=root.xpath('//w:sectPr',namespaces=ns)
    if len(sections)!=72: errors.append(f'sections={len(sections)}, attendu 72')
    if text.count('LEÇON') < 36: errors.append(f'leçons={text.count("LEÇON")}, attendu au moins 36')
    if text.count('PRATIQUE') < 36: errors.append(f'pratiques={text.count("PRATIQUE")}, attendu au moins 36')
    if len(re.findall(r'FICHE SÉANCE \d+',text)) != 33: errors.append('Les 33 fiches de séance ne sont pas toutes présentes')
    for s in (6,17,28):
        if f'FICHE SÉANCE {s}' not in text: errors.append(f'Charnière S{s} absente')
    for pid in ['s01','s02','s03','s04','s05','s06a','s06b','s07','s08','s09','s10','s11','s12','s13','s14','s15','s16','s17a','s17b','s18','s19','s20','s21','s22','s23','s24','s25','s26','s27','s28a','s28b','s29','s30','s31','s32','s33']:
        for prefix in ('bm_lecon_','bm_pratique_','bm_plan_','bm_tr_'):
            if (prefix+pid).encode() not in xml: errors.append(f'Signet absent: {prefix}{pid}')
    for phrase in ('Acquis','En cours','À revoir','33 séances','66 h','36 parties','AUDIO DRIVE ET ZIP','TEXTES DES CONSIGNES AUDIO'):
        if phrase.lower() not in text.lower(): errors.append('Contenu requis absent: '+phrase)
    for phrase in ('CONSIGNE À LIRE','COURTE TRACE ÉLÈVE','PAS OK'):
        if phrase.lower() in text.lower(): errors.append('Terme interdit/retiré présent: '+phrase)
    for phrase in (r'\bEn T8\b', r'\bLe PE\b'):
        if re.search(phrase, text, flags=re.IGNORECASE): errors.append('Formulation à éviter présente: '+phrase)
    sizes=[int(x) for x in root.xpath('//w:sz/@w:val',namespaces=ns)]
    for r in root.xpath('//w:r[w:rPr/w:sz]',namespaces=ns):
        sz=int(r.xpath('string(w:rPr/w:sz/@w:val)',namespaces=ns) or '0')
        if sz<26:
            rt=''.join(r.xpath('.//w:t/text()',namespaces=ns))
            is_link=bool(r.xpath('ancestor::w:hyperlink',namespaces=ns))
            if sz<18 or not is_link or rt not in ('▶ Écouter la consigne audio','Texte'):
                errors.append(f'Texte sous 13 pt hors lien audio compact autorisé: {sz/2:g} pt {rt!r}')
    if sizes and min(sizes)<18: errors.append(f'Taille typographique inférieure à 9 pt: {min(sizes)/2:g} pt')
    fonts=set(root.xpath('//w:rFonts/@w:ascii',namespaces=ns))
    if fonts and fonts!={'Times New Roman'}: errors.append('Police différente de Times New Roman: '+repr(fonts))
    embeds=root.xpath('//a:blip/@r:embed',namespaces={**ns,'r':'http://schemas.openxmlformats.org/officeDocument/2006/relationships'})
    if len(embeds)<250: errors.append(f'Images incorporées trop peu nombreuses: {len(embeds)}')
    drive=json.loads((Path(__file__).resolve().parents[1]/'src/drive_audio_t8.json').read_text())
    relroot=etree.fromstring(z.read('word/_rels/document.xml.rels'))
    relns={'r':'http://schemas.openxmlformats.org/package/2006/relationships'}
    targets=relroot.xpath('//r:Relationship/@Target',namespaces=relns)
    for pid,item in drive['files'].items():
        if item['url'] not in targets: errors.append(f'Lien audio manquant dans le DOCX: {pid}')
    if drive['zip_url'] not in targets: errors.append('Lien ZIP Drive manquant dans le DOCX')
    if text.count('▶ Écouter la consigne audio')!=36: errors.append('Nombre de liens audio affichés différent de 36')
    # All media relationship IDs and drawing object IDs must be unique within their scopes.
    for part in [n for n in z.namelist() if n.startswith('word/') and n.endswith('.xml')]:
        if part.startswith(('word/document','word/header','word/footer')):
            x=etree.fromstring(z.read(part))
            ids=x.xpath('//wp:docPr/@id',namespaces=ns)
            if len(ids)!=len(set(ids)): errors.append(f'docPr IDs dupliqués dans {part}')
    if errors:
        print('FAIL —',len(errors),'erreurs')
        print('\n'.join(' - '+e for e in errors))
        raise SystemExit(1)
    print(f'PASS — {doc.name}: {len(sections)} sections, 36 leçons/pratiques, 33 fiches, {len(embeds)} images, police Times New Roman, minimum {min(sizes)/2:g} pt.')
