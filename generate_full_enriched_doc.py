import zipfile
import os
import xml.etree.ElementTree as ET
import re

SRC = 'Manuel_Calcul_8e_CORRIGE_BASE.docx'
OUT = 'Manuel_Calcul_8e_JLearn_FINAL.docx'

with zipfile.ZipFile(SRC, 'r') as zin:
    files = {name: zin.read(name) for name in zin.namelist()}

# Parse rels
rels_xml = files['word/_rels/document.xml.rels']
rels_root = ET.fromstring(rels_xml)

# Find max rId
max_rid = 0
for r in rels_root:
    rid_str = r.attrib.get('Id', '')
    if rid_str.startswith('rId'):
        try:
            val = int(rid_str[3:])
            if val > max_rid:
                max_rid = val
        except:
            pass

print("Max existing rId:", max_rid)

# Images to register
diagrams = [
    ('images_gen/carre_proprietes.png', 'carre_prop.png', 550, 320, 12.0),
    ('images_gen/carre_exemple.png', 'carre_ex.png', 450, 240, 10.5),
    ('images_gen/rectangle_proprietes.png', 'rect_prop.png', 550, 280, 12.0),
    ('images_gen/trapeze_proprietes.png', 'trapeze_prop.png', 550, 280, 12.0),
    ('images_gen/fractions_notion.png', 'fractions_notion.png', 600, 220, 13.0),
    ('images_gen/methode_papillon.png', 'methode_papillon.png', 560, 310, 12.5),
    ('images_gen/mult_div_fractions.png', 'mult_div_frac.png', 560, 250, 12.5),
    ('images_gen/preuve_par_9.png', 'preuve_par_9.png', 550, 290, 12.0),
    ('images_gen/conversions_sexagesimales.png', 'conversions_sexa.png', 550, 250, 12.0),
    ('images_gen/operations_decimaux.png', 'operations_dec.png', 550, 250, 12.0),
]

img_info = {}
for src_path, fname, w_px, h_px, w_cm in diagrams:
    max_rid += 1
    rid = f"rId{max_rid}"
    cx = int(w_cm * 360000)
    cy = int(w_cm * (h_px / w_px) * 360000)
    img_info[fname] = {'rId': rid, 'cx': cx, 'cy': cy}
    
    # Add file to zip
    with open(src_path, 'rb') as f:
        files[f'word/media/{fname}'] = f.read()
    
    # Add relationship
    rel_elem = ET.SubElement(rels_root, '{http://schemas.openxmlformats.org/package/2006/relationships}Relationship')
    rel_elem.attrib['Id'] = rid
    rel_elem.attrib['Type'] = 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/image'
    rel_elem.attrib['Target'] = f'media/{fname}'

files['word/_rels/document.xml.rels'] = ET.tostring(rels_root, encoding='utf-8', xml_declaration=True)
print(f"Added {len(diagrams)} images to media/ and updated rels!")

def make_formula_box(text, bg_color="FEF9E7", border_color="117A65", width_pct="4200"):
    tbl_xml = f'''<w:tbl xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
  <w:tblPr>
    <w:jc w:val="center"/>
    <w:tblW w:w="{width_pct}" w:type="pct"/>
    <w:tblBorders>
      <w:top w:val="single" w:sz="12" w:space="0" w:color="{border_color}"/>
      <w:left w:val="single" w:sz="12" w:space="0" w:color="{border_color}"/>
      <w:bottom w:val="single" w:sz="12" w:space="0" w:color="{border_color}"/>
      <w:right w:val="single" w:sz="12" w:space="0" w:color="{border_color}"/>
    </w:tblBorders>
    <w:tblCellMar>
      <w:top w:w="100" w:type="dxa"/>
      <w:left w:w="200" w:type="dxa"/>
      <w:bottom w:w="100" w:type="dxa"/>
      <w:right w:w="200" w:type="dxa"/>
    </w:tblCellMar>
  </w:tblPr>
  <w:tr>
    <w:tc>
      <w:tcPr>
        <w:tcW w:w="{width_pct}" w:type="pct"/>
        <w:shd w:val="clear" w:color="auto" w:fill="{bg_color}"/>
        <w:vAlign w:val="center"/>
      </w:tcPr>
      <w:p>
        <w:pPr>
          <w:spacing w:before="60" w:after="60"/>
          <w:jc w:val="center"/>
        </w:pPr>
        <w:r>
          <w:rPr>
            <w:rFonts w:ascii="Times New Roman" w:hAnsi="Times New Roman"/>
            <w:b/>
            <w:bCs/>
            <w:color w:val="{border_color}"/>
            <w:sz w:val="24"/>
            <w:szCs w:val="24"/>
          </w:rPr>
          <w:t xml:space="preserve">{text}</w:t>
        </w:r>
      </w:p>
    </w:tc>
  </w:tr>
</w:tbl>'''
    return ET.fromstring(tbl_xml)

doc_pr_counter = 5000

def make_drawing_p(fname, name="Figure"):
    global doc_pr_counter
    doc_pr_counter += 1
    info = img_info[fname]
    rid = info['rId']
    cx = info['cx']
    cy = info['cy']
    p_xml = f'''<w:p xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"
         xmlns:wp="http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing"
         xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main"
         xmlns:pic="http://schemas.openxmlformats.org/drawingml/2006/picture"
         xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <w:pPr>
    <w:spacing w:before="120" w:after="80"/>
    <w:jc w:val="center"/>
  </w:pPr>
  <w:r>
    <w:rPr><w:noProof/></w:rPr>
    <w:drawing>
      <wp:inline distT="0" distB="0" distL="0" distR="0">
        <wp:extent cx="{cx}" cy="{cy}"/>
        <wp:effectExtent l="0" t="0" r="0" b="0"/>
        <wp:docPr id="{doc_pr_counter}" name="{name}"/>
        <wp:cNvGraphicFramePr>
          <a:graphicFrameLocks noChangeAspect="1"/>
        </wp:cNvGraphicFramePr>
        <a:graphic>
          <a:graphicData uri="http://schemas.openxmlformats.org/drawingml/2006/picture">
            <pic:pic>
              <pic:nvPicPr>
                <pic:cNvPr id="0" name=""/>
                <pic:cNvPicPr>
                  <a:picLocks noChangeAspect="1" noChangeArrowheads="1"/>
                </pic:cNvPicPr>
              </pic:nvPicPr>
              <pic:blipFill>
                <a:blip r:embed="{rid}"/>
                <a:stretch><a:fillRect/></a:stretch>
              </pic:blipFill>
              <pic:spPr bwMode="auto">
                <a:xfrm><a:off x="0" y="0"/><a:ext cx="{cx}" cy="{cy}"/></a:xfrm>
                <a:prstGeom prst="rect"><a:avLst/></a:prstGeom>
              </pic:spPr>
            </pic:pic>
          </a:graphicData>
        </a:graphic>
      </wp:inline>
    </w:drawing>
  </w:r>
</w:p>'''
    return ET.fromstring(p_xml)

def make_text_p(text, bold=False, color="000000", size="22", align="left", space_before="60", space_after="60"):
    b_tag = '<w:b/><w:bCs/>' if bold else ''
    jc_tag = f'<w:jc w:val="{align}"/>' if align != 'left' else ''
    p_xml = f'''<w:p xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
  <w:pPr>
    <w:spacing w:before="{space_before}" w:after="{space_after}"/>
    {jc_tag}
  </w:pPr>
  <w:r>
    <w:rPr>
      <w:rFonts w:ascii="Times New Roman" w:hAnsi="Times New Roman"/>
      {b_tag}
      <w:color w:val="{color}"/>
      <w:sz w:val="{size}"/>
      <w:szCs w:val="{size}"/>
    </w:rPr>
    <w:t xml:space="preserve">{text}</w:t>
  </w:r>
</w:p>'''
    return ET.fromstring(p_xml)

def make_piege_box(text):
    tbl_xml = f'''<w:tbl xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
  <w:tblPr>
    <w:jc w:val="center"/>
    <w:tblW w:w="4800" w:type="pct"/>
    <w:tblBorders>
      <w:top w:val="single" w:sz="12" w:space="0" w:color="C0392B"/>
      <w:left w:val="single" w:sz="12" w:space="0" w:color="C0392B"/>
      <w:bottom w:val="single" w:sz="12" w:space="0" w:color="C0392B"/>
      <w:right w:val="single" w:sz="12" w:space="0" w:color="C0392B"/>
    </w:tblBorders>
    <w:tblCellMar>
      <w:top w:w="100" w:type="dxa"/>
      <w:left w:w="200" w:type="dxa"/>
      <w:bottom w:w="100" w:type="dxa"/>
      <w:right w:w="200" w:type="dxa"/>
    </w:tblCellMar>
  </w:tblPr>
  <w:tr>
    <w:tc>
      <w:tcPr>
        <w:tcW w:w="4800" w:type="pct"/>
        <w:shd w:val="clear" w:color="auto" w:fill="FDEDEC"/>
      </w:tcPr>
      <w:p>
        <w:pPr><w:spacing w:before="40" w:after="40"/></w:pPr>
        <w:r><w:rPr><w:b/><w:color w:val="C0392B"/><w:sz w:val="22"/></w:rPr><w:t>⚠ Attention au piège : </w:t></w:r>
        <w:r><w:rPr><w:color w:val="2C3E50"/><w:sz w:val="22"/></w:rPr><w:t xml:space="preserve">{text}</w:t></w:r>
      </w:p>
    </w:tc>
  </w:tr>
</w:tbl>'''
    return ET.fromstring(tbl_xml)

# Load document.xml
xml_doc = files['word/document.xml']
doc_root = ET.fromstring(xml_doc)
w_ns = 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'
body = doc_root.find(f'{{{w_ns}}}body')

# Find fiche indices
fiche_indices = []
for i, el in enumerate(body):
    t = ''.join(el.itertext()).strip()
    if 'FICHE DE PRÉPARATION — SÉANCE' in t:
        m = re.search(r'SÉANCE\s*(\d+)', t)
        if m:
            fiche_indices.append((int(m.group(1)), i))

fiche_indices.sort(key=lambda x: x[0])

def get_seance_parts(s_num):
    s_idx = None
    next_s_idx = len(body)
    for num, idx in fiche_indices:
        if num == s_num:
            s_idx = idx
        elif s_idx is not None and num == s_num + 1:
            next_s_idx = idx
            break
    tbls = []
    idx_ex = None
    idx_title = None
    for i in range(s_idx, next_s_idx):
        el = body[i]
        t = ''.join(el.itertext()).strip()
        if el.tag.endswith('tbl'):
            tbls.append(i)
        elif len(tbls) >= 2 and idx_title is None and len(t) > 0:
            idx_title = i
        if 'EXERCICES — Séance' in t:
            idx_ex = i
            break
    return {'start': s_idx, 'end': next_s_idx, 'tbl1': tbls[0], 'tbl2': tbls[1] if len(tbls) > 1 else None,
            'title': idx_title, 'exercices': idx_ex}

# We will perform enrichments session by session, from HIGHEST session number to LOWEST session number
# so that indices in earlier sessions do not shift!
sessions_to_enrich = [47, 43, 40, 39, 37, 35, 34, 30, 29, 26, 25, 24, 19, 18, 17, 14, 13, 9, 7]

for s_num in sessions_to_enrich:
    p = get_seance_parts(s_num)
    # The insertion point inside LEÇON: after the situation paragraph (title + 2 or title + 3)
    # Let's inspect the paragraphs between title and exercices
    lecon_elems = [(i, body[i], ''.join(body[i].itertext()).strip()) for i in range(p['title'], p['exercices'])]
    
    # We will build specific enriched elements for each session:
    elems_to_insert = []
    
    if s_num == 9: # Rectangle et Carré
        # Find 1. Le rectangle
        idx_sub = None
        for idx, el, t in lecon_elems:
            if t.startswith('1. Le rectangle'):
                idx_sub = idx
                break
        if idx_sub is not None:
            new_elems = [
                make_text_p("1. Le rectangle", bold=True, color="1F4E79", size="24", space_before="120", space_after="60"),
                make_text_p("Propriétés : 4 côtés, 4 angles droits, côtés opposés parallèles et de même longueur deux à deux.", space_before="40", space_after="60"),
                make_drawing_p("rect_prop.png", "Figure Rectangle"),
                make_text_p("Formule du périmètre du rectangle :", bold=True, color="1F4E79", size="22", space_before="80", space_after="40"),
                make_formula_box("P = (L + l) × 2", bg_color="EBF5FB", border_color="1F4E79", width_pct="3500"),
                make_text_p("Formule de l'aire du rectangle :", bold=True, color="1F4E79", size="22", space_before="80", space_after="40"),
                make_formula_box("A = L × l", bg_color="EBF5FB", border_color="1F4E79", width_pct="3500"),
                make_text_p("Exemple : Un rectangle de Longueur L = 8 cm et largeur l = 4 cm.", bold=True, color="2C3E50", space_before="100", space_after="40"),
                make_formula_box("P = (8 cm + 4 cm) × 2 = 12 cm × 2", bg_color="FEF9E7", border_color="B7950B", width_pct="4200"),
                make_formula_box("P = 24 cm", bg_color="E8F8F5", border_color="117A65", width_pct="2500"),
                make_formula_box("A = 8 cm × 4 cm", bg_color="FEF9E7", border_color="B7950B", width_pct="3500"),
                make_formula_box("A = 32 cm²", bg_color="E8F8F5", border_color="117A65", width_pct="2500"),
                make_text_p("2. Le carré", bold=True, color="117A65", size="24", space_before="160", space_after="60"),
                make_text_p("Propriétés : 4 côtés de même longueur, 4 angles droits.", space_before="40", space_after="60"),
                make_drawing_p("carre_prop.png", "Figure Carré"),
                make_text_p("Formule du périmètre du carré :", bold=True, color="117A65", size="22", space_before="80", space_after="40"),
                make_formula_box("P = c × 4", bg_color="E8F8F5", border_color="117A65", width_pct="3000"),
                make_text_p("Formule de l'aire du carré :", bold=True, color="117A65", size="22", space_before="80", space_after="40"),
                make_formula_box("A = c × c", bg_color="E8F8F5", border_color="117A65", width_pct="3000"),
                make_text_p("Exemple d'application : Carré de côté c = 5 m.", bold=True, color="2C3E50", space_before="100", space_after="40"),
                make_drawing_p("carre_ex.png", "Exemple Carré 5m"),
                make_formula_box("P = c × 4", bg_color="FEF9E7", border_color="B7950B", width_pct="2500"),
                make_text_p("P = 5 m × 4", bold=True, align="center", size="22", space_before="40", space_after="40"),
                make_formula_box("P = 20 m", bg_color="E8F8F5", border_color="117A65", width_pct="2500"),
                make_formula_box("A = c × c", bg_color="FEF9E7", border_color="B7950B", width_pct="2500"),
                make_text_p("A = 5 m × 5 m", bold=True, align="center", size="22", space_before="40", space_after="40"),
                make_formula_box("A = 25 m²", bg_color="E8F8F5", border_color="117A65", width_pct="2500"),
                make_text_p("", space_before="60", space_after="60"),
            ]
            body[idx_sub:p['exercices']] = new_elems
            print("Enriched Séance 09 (Rectangle & Carré)!")

    elif s_num == 26: # Trapèze
        idx_sub = None
        for idx, el, t in lecon_elems:
            if t.startswith('1. Reconnaître le trapèze') or 'propriétés suivantes' in t:
                idx_sub = idx
                break
        if idx_sub is not None:
            new_elems = [
                make_text_p("1. Définition et propriétés du trapèze", bold=True, color="1F4E79", size="24", space_before="100", space_after="60"),
                make_text_p("Le trapèze est un quadrilatère qui possède deux côtés opposés parallèles appelés les bases : la grande base (B) et la petite base (b). La hauteur (h) est la distance perpendiculaire entre les deux bases.", space_before="40", space_after="60"),
                make_drawing_p("trapeze_prop.png", "Figure Trapèze"),
                make_text_p("Formule du périmètre du trapèze :", bold=True, color="1F4E79", size="22", space_before="80", space_after="40"),
                make_formula_box("P = Grande base + petite base + côtés obliques = B + b + c₁ + c₂", bg_color="FEF9E7", border_color="B7950B", width_pct="4800"),
                make_text_p("Formule de l'aire du trapèze :", bold=True, color="1F4E79", size="22", space_before="80", space_after="40"),
                make_formula_box("A = [(B + b) × h] ÷ 2", bg_color="E8F8F5", border_color="117A65", width_pct="3500"),
                make_text_p("Exemple pas à pas : Un trapèze de grande base B = 10 cm, petite base b = 6 cm, côtés obliques 5 cm et 5 cm, et de hauteur h = 4 cm.", bold=True, color="2C3E50", space_before="100", space_after="40"),
                make_formula_box("P = 10 cm + 6 cm + 5 cm + 5 cm", bg_color="FEF9E7", border_color="B7950B", width_pct="4000"),
                make_formula_box("P = 26 cm", bg_color="E8F8F5", border_color="117A65", width_pct="2500"),
                make_formula_box("A = [(10 cm + 6 cm) × 4 cm] ÷ 2 = (16 × 4) ÷ 2 = 64 ÷ 2", bg_color="FEF9E7", border_color="B7950B", width_pct="4600"),
                make_formula_box("A = 32 cm²", bg_color="E8F8F5", border_color="117A65", width_pct="2500"),
                make_text_p("", space_before="60", space_after="60"),
            ]
            body[idx_sub:p['exercices']] = new_elems
            print("Enriched Séance 26 (Trapèze)!")

    elif s_num == 14: # Triangle
        idx_sub = None
        for idx, el, t in lecon_elems:
            if 'Périmètre' in t or 'propriétés' in t.lower():
                idx_sub = idx
                break
        if idx_sub is not None:
            new_elems = [
                make_text_p("Formules essentielles du triangle :", bold=True, color="1F4E79", size="22", space_before="80", space_after="40"),
                make_formula_box("Périmètre : P = côté a + côté b + côté c", bg_color="FEF9E7", border_color="B7950B", width_pct="4200"),
                make_formula_box("Aire : A = (Base × hauteur) ÷ 2", bg_color="E8F8F5", border_color="117A65", width_pct="3500"),
                make_text_p("Exemple : Un triangle de base b = 8 cm, hauteur h = 5 cm, et de côtés 6 cm, 8 cm et 7 cm.", bold=True, color="2C3E50", space_before="80", space_after="40"),
                make_formula_box("P = 6 cm + 8 cm + 7 cm = 21 cm", bg_color="FEF9E7", border_color="B7950B", width_pct="3800"),
                make_formula_box("A = (8 cm × 5 cm) ÷ 2 = 40 ÷ 2 = 20 cm²", bg_color="E8F8F5", border_color="117A65", width_pct="4200"),
            ]
            # insert after idx_sub
            for offset, el_new in enumerate(new_elems):
                body.insert(idx_sub + 1 + offset, el_new)
            print("Enriched Séance 14 (Triangle)!")

    elif s_num == 30: # Cercle et Disque
        idx_sub = None
        for idx, el, t in lecon_elems:
            if 'Périmètre' in t or 'circonférence' in t.lower() or 'propriétés' in t.lower():
                idx_sub = idx
                break
        if idx_sub is not None:
            new_elems = [
                make_text_p("Formules du cercle et du disque (avec π ≈ 3,14) :", bold=True, color="1F4E79", size="22", space_before="80", space_after="40"),
                make_formula_box("Périmètre (circonférence) : P = 2 × π × r = π × D", bg_color="FEF9E7", border_color="B7950B", width_pct="4400"),
                make_formula_box("Aire du disque : A = π × r × r", bg_color="E8F8F5", border_color="117A65", width_pct="3500"),
                make_text_p("Exemple : Un cercle de rayon r = 5 cm (diamètre D = 10 cm).", bold=True, color="2C3E50", space_before="80", space_after="40"),
                make_formula_box("P = 2 × 3,14 × 5 cm = 31,4 cm", bg_color="FEF9E7", border_color="B7950B", width_pct="3500"),
                make_formula_box("A = 3,14 × 5 cm × 5 cm = 3,14 × 25 = 78,5 cm²", bg_color="E8F8F5", border_color="117A65", width_pct="4400"),
            ]
            for offset, el_new in enumerate(new_elems):
                body.insert(idx_sub + 1 + offset, el_new)
            print("Enriched Séance 30 (Cercle et Disque)!")

    elif s_num == 18: # Fractions : Notion & Représentations
        idx_sub = None
        for idx, el, t in lecon_elems:
            if 'Une fraction s\'écrit avec un numérateur' in t:
                idx_sub = idx
                break
        if idx_sub is not None:
            new_elems = [
                make_drawing_p("fractions_notion.png", "Représentations géométriques de fractions"),
                make_formula_box("Fraction = Numérateur (parts prises) / Dénominateur (parts totales)", bg_color="EBF5FB", border_color="1F4E79", width_pct="4800"),
            ]
            for offset, el_new in enumerate(new_elems):
                body.insert(idx_sub + offset, el_new)
            print("Enriched Séance 18 (Fractions Notion)!")

    elif s_num == 24: # Fractions : Simplification
        idx_sub = None
        for idx, el, t in lecon_elems:
            if 'Simplifier une fraction' in t or 'même dénominateur' in t:
                idx_sub = idx
                break
        if idx_sub is not None:
            new_elems = [
                make_formula_box("Simplifier = Diviser numérateur et dénominateur par un même nombre", bg_color="FEF9E7", border_color="B7950B", width_pct="4800"),
                make_text_p("Exemple : 12 / 16 = (12 ÷ 4) / (16 ÷ 4) = 3 / 4 (fraction irréductible)", bold=True, align="center", color="117A65", size="22", space_before="60", space_after="60"),
            ]
            for offset, el_new in enumerate(new_elems):
                body.insert(idx_sub + 1 + offset, el_new)
            print("Enriched Séance 24 (Fractions Simplification)!")

    elif s_num == 29: # Fractions : Addition & Soustraction (Méthode Papillon)
        idx_sub = None
        for idx, el, t in lecon_elems:
            if 'dénominateurs différents' in t or 'même dénominateur' in t:
                idx_sub = idx
                break
        if idx_sub is not None:
            new_elems = [
                make_text_p("Addition et soustraction de fractions à dénominateurs différents :", bold=True, color="1F4E79", size="22", space_before="80", space_after="40"),
                make_drawing_p("methode_papillon.png", "Méthode Papillon"),
                make_formula_box("(A / B) ± (C / D) = [(A × D) ± (B × C)] / (B × D)", bg_color="FEF9E7", border_color="B7950B", width_pct="4600"),
                make_text_p("Exemple : 2/3 + 1/4 = (2 × 4 + 3 × 1) / (3 × 4) = (8 + 3) / 12 = 11/12", bold=True, align="center", color="117A65", size="22", space_before="60", space_after="60"),
            ]
            for offset, el_new in enumerate(new_elems):
                body.insert(idx_sub + 1 + offset, el_new)
            print("Enriched Séance 29 (Fractions Papillon)!")

    elif s_num == 34: # Fractions : Multiplication & Division
        idx_sub = None
        for idx, el, t in lecon_elems:
            if 'Multiplication et division' in t or 'Pour multiplier' in t:
                idx_sub = idx
                break
        if idx_sub is not None:
            new_elems = [
                make_drawing_p("mult_div_frac.png", "Multiplication et Division de Fractions"),
                make_formula_box("Multiplication : (A / B) × (C / D) = (A × C) / (B × D)", bg_color="EBF5FB", border_color="1F4E79", width_pct="4500"),
                make_formula_box("Division : (A / B) ÷ (C / D) = (A / B) × (D / C) = (A × D) / (B × C)", bg_color="FEF9E7", border_color="B7950B", width_pct="4800"),
            ]
            for offset, el_new in enumerate(new_elems):
                body.insert(idx_sub + 1 + offset, el_new)
            print("Enriched Séance 34 (Fractions Mult & Div)!")

    elif s_num == 7: # Multiplication & Preuve par 9
        idx_sub = None
        for idx, el, t in lecon_elems:
            if 'Synthèse' in t or 'technique' in t.lower() or idx == lecon_elems[-1][0]:
                idx_sub = idx
                break
        if idx_sub is not None:
            new_elems = [
                make_text_p("Vérification : La Preuve par 9 pour la multiplication", bold=True, color="1F4E79", size="24", space_before="120", space_after="60"),
                make_drawing_p("preuve_par_9.png", "Croix de Preuve par 9"),
                make_formula_box("Somme chiffres Facteur 1 × Somme chiffres Facteur 2 = Somme chiffres Produit (mod 9)", bg_color="E8F8F5", border_color="117A65", width_pct="4800"),
            ]
            for offset, el_new in enumerate(new_elems):
                body.insert(idx_sub + 1 + offset, el_new)
            print("Enriched Séance 07 (Multiplication & Preuve par 9)!")

    elif s_num == 13: # Décimaux : Addition & Soustraction
        idx_sub = None
        for idx, el, t in lecon_elems:
            if 'virgules alignées' in t.lower() or 'synthèse' in t.lower() or idx == lecon_elems[-1][0]:
                idx_sub = idx
                break
        if idx_sub is not None:
            new_elems = [
                make_drawing_p("operations_dec.png", "Technique des opérations décimales"),
                make_formula_box("Règle d'or : Aligner les virgules les unes sous les autres !", bg_color="E8F8F5", border_color="117A65", width_pct="4600"),
            ]
            for offset, el_new in enumerate(new_elems):
                body.insert(idx_sub + 1 + offset, el_new)
            print("Enriched Séance 13 (Décimaux +/-)!")

    elif s_num == 17: # Décimaux : Multiplication & Division
        idx_sub = None
        for idx, el, t in lecon_elems:
            if 'multiplication' in t.lower() or idx == lecon_elems[-1][0]:
                idx_sub = idx
                break
        if idx_sub is not None:
            new_elems = [
                make_formula_box("Multiplication décimale : Calculer sans virgule, puis placer la virgule selon le total des chiffres après la virgule des 2 facteurs.", bg_color="FEF9E7", border_color="B7950B", width_pct="4800"),
                make_formula_box("Division décimale : Multiplier dividende et diviseur par 10 ou 100 pour rendre le diviseur entier avant de poser.", bg_color="EBF5FB", border_color="1F4E79", width_pct="4800"),
            ]
            for offset, el_new in enumerate(new_elems):
                body.insert(idx_sub + 1 + offset, el_new)
            print("Enriched Séance 17 (Décimaux ×/÷)!")

    elif s_num in (37, 43, 47): # Sexagésimaux
        idx_sub = None
        for idx, el, t in lecon_elems:
            if '60' in t or 'conversions' in t.lower() or idx == lecon_elems[-1][0]:
                idx_sub = idx
                break
        if idx_sub is not None:
            new_elems = [
                make_drawing_p("conversions_sexa.png", "Conversions sexagésimales"),
                make_formula_box("1 jour = 24 h   |   1 h = 60 min = 3 600 s   |   1 min = 60 s", bg_color="FEF9E7", border_color="B7950B", width_pct="4600"),
            ]
            for offset, el_new in enumerate(new_elems):
                body.insert(idx_sub + 1 + offset, el_new)
            print(f"Enriched Séance {s_num} (Sexagésimaux)!")

    elif s_num in (19, 25): # Pièges gestion
        idx_sub = lecon_elems[-1][0]
        text_piege = "Le verbe « vendre » ne signifie pas toujours soustraire ! Si on cherche la recette totale de plusieurs ventes, on additionne." if s_num == 19 else "« De moins que » exprime une comparaison, pas obligatoirement une soustraction. Exemple : Jean a 12 ans, il a 10 ans de moins que Paul → Paul a 12 + 10 = 22 ans."
        body.insert(idx_sub, make_piege_box(text_piege))
        print(f"Enriched Séance {s_num} (Piège gestion)!")

    elif s_num in (35, 40): # Proportionnalité
        idx_sub = lecon_elems[-1][0]
        new_elems = [
            make_formula_box("Tableau de proportionnalité : Grandeur 2 = Grandeur 1 × Coefficient k", bg_color="E8F8F5", border_color="117A65", width_pct="4600"),
            make_formula_box("Méthode du produit en croix : Si A / B = C / X, alors X = (B × C) ÷ A", bg_color="FEF9E7", border_color="B7950B", width_pct="4600"),
        ]
        for offset, el_new in enumerate(new_elems):
            body.insert(idx_sub + offset, el_new)
        print(f"Enriched Séance {s_num} (Proportionnalité)!")

# Verify that body is valid XML
xml_out = ET.tostring(doc_root, encoding='utf-8', xml_declaration=True)
files['word/document.xml'] = xml_out

with zipfile.ZipFile(OUT, 'w', compression=zipfile.ZIP_DEFLATED) as zout:
    for name, content in files.items():
        zout.writestr(name, content)

print(f"\nSUCCESS! Enriched manual generated: {OUT}")
