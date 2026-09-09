# build_pdf.py — rend le Markdown du manuel en PDF lisible partout (fpdf2).
import os, sys
from fpdf import FPDF
HERE = os.path.dirname(os.path.abspath(__file__))
FONT = "/usr/share/fonts/truetype/dejavu/DejaVuSerif.ttf"
FONTB = "/usr/share/fonts/truetype/dejavu/DejaVuSerif-Bold.ttf"
MODE = sys.argv[1] if len(sys.argv) > 1 else "PE"
md = open(os.path.join(HERE, "..", "output", "Manuel_Francais_9e_V2_%s.md" % MODE), encoding="utf-8").read()

pdf = FPDF()
pdf.add_font("S", "", FONT); pdf.add_font("S", "B", FONTB)
pdf.set_auto_page_break(True, 15)
pdf.add_page()
for line in md.split("\n"):
    if line.startswith("# "):
        pdf.set_font("S", "B", 16); pdf.set_text_color(192,0,0); pdf.set_x(10); pdf.multi_cell(0,8,line[2:]); pdf.ln(2)
    elif line.startswith("## "):
        pdf.add_page(); pdf.set_font("S", "B", 14); pdf.set_text_color(192,0,0); pdf.set_x(10); pdf.multi_cell(0,7,line[3:]); pdf.ln(1)
    elif line.startswith("### "):
        pdf.ln(2); pdf.set_font("S", "B", 12); pdf.set_text_color(0,0,0); pdf.set_x(10); pdf.multi_cell(0,6,line[4:]); pdf.ln(1)
    elif line.startswith("#### "):
        pdf.ln(1); pdf.set_font("S", "B", 11); pdf.set_text_color(30,123,52); pdf.set_x(10); pdf.multi_cell(0,6,line[5:]); pdf.ln(1)
    elif line.strip() in ("", "</details>"):
        continue
    elif line.startswith("<details>"):
        continue
    else:
        txt = line.replace("<summary>", "").replace("</summary>", "")
        pdf.set_font("S", "", 10); pdf.set_text_color(0,0,0); pdf.set_x(10); pdf.multi_cell(0,5,txt)
out = os.path.join(HERE, "..", "output", "Manuel_Francais_9e_V2_%s.pdf" % MODE)
pdf.output(out)
print("Généré :", out, os.path.getsize(out)//1024, "Ko")
