# Dump texte d'un docx (paragraphes + tableaux, dans l'ordre) pour vérification
import sys, re
from docx import Document
from docx.table import Table
from docx.text.paragraph import Paragraph
doc = Document(sys.argv[1])
body = doc.element.body
out = []
W='{http://schemas.openxmlformats.org/wordprocessingml/2006/main}'
Mm='{http://schemas.openxmlformats.org/officeDocument/2006/math}'
def para_text(el):
    out=[]
    for node in el.iter():
        if node.tag==W+'t' and node.text: out.append(node.text)
        elif node.tag==Mm+'f':
            num=''.join(t.text or '' for t in node.find(Mm+'num').iter(Mm+'t'))
            den=''.join(t.text or '' for t in node.find(Mm+'den').iter(Mm+'t'))
            out.append('{%s/%s}'%(num,den))
    # m:t inside m:f were added; remove duplicates of m:t outside? m:t tags differ from w:t so fine
    return ''.join(out)
def cell_text(c):
    return " / ".join(para_text(p._p) for p in c.paragraphs if para_text(p._p).strip())
def walk_table(tbl, depth=0):
    for row in tbl.rows:
        cells = []
        seen = set()
        for c in row.cells:
            if id(c._tc) in seen: continue
            seen.add(id(c._tc))
            cells.append(cell_text(c))
        out.append("  " * depth + "| " + " | ".join(cells))
for child in body.iterchildren():
    tag = child.tag.split('}')[1]
    if tag == 'p':
        p = Paragraph(child, doc)
        t = para_text(child)
        if child.findall('.//{http://schemas.openxmlformats.org/wordprocessingml/2006/main}drawing'): t += " [IMAGE]"
        if child.findall('.//{http://schemas.openxmlformats.org/officeDocument/2006/math}f'): t += " [FRACTION]"
        if t.strip(): out.append(t)
    elif tag == 'tbl':
        walk_table(Table(child, doc))
print("\n".join(out))
