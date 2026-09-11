from pathlib import Path
import re
from docx import Document
from docxcompose.composer import Composer
from docx.oxml.ns import qn
from docx.shared import Pt, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT

R=Path(__file__).resolve().parents[1]; W=R/'work_merge'; W.mkdir(exist_ok=True)
units=[R/f'Manuel_Mathematiques_T7_V1_UNITE{i}.docx' for i in range(1,7)]

def text(el): return ''.join(el.itertext()).strip()
def stripped(src,n):
 d=Document(src); body=d.element.body; found=False
 roman={1:'I',2:'II',3:'III',4:'IV',5:'V',6:'VI'}[n]
 for el in list(body):
  if el.tag==qn('w:sectPr'): continue
  if el.tag==qn('w:p') and f'UNITÉ {roman} —' in text(el) and 'SÉANCE' not in text(el): found=True
  if not found: body.remove(el)
 if not found: raise RuntimeError(f'Unité {n} introuvable')
 out=W/f'u{n}.docx'; d.save(out); return out

def font(run,size=11,bold=False,color=None):
 run.font.name='Times New Roman'; run.font.size=Pt(size); run.bold=bold
 if color: run.font.color.rgb=RGBColor(*color)
def head(d,s,size=18):
 p=d.add_paragraph();p.alignment=WD_ALIGN_PARAGRAPH.CENTER;font(p.add_run(s),size,True,(192,0,0))
def para(d,s,bold=False):
 p=d.add_paragraph();p.alignment=WD_ALIGN_PARAGRAPH.JUSTIFY;font(p.add_run(s),11,bold);return p

a=Document(); head(a,'ANNEXES — MATHÉMATIQUES T7',22);para(a,'Synthèse des notions étudiées dans les six unités.')
a.add_page_break();head(a,'ANNEXE 1 — GLOSSAIRE')
gloss=[('Abscisse','première coordonnée, lue sur l’axe horizontal'),('Aire','mesure de la surface d’une figure'),('Coefficient de proportionnalité','nombre constant qui permet de passer d’une quantité à l’autre'),('Dénominateur','nombre total de parts égales'),('Diamètre','segment passant par le centre et reliant deux points du cercle'),('Diviseur','nombre qui partage un autre nombre sans reste'),('Échelle','rapport entre longueur représentée et longueur réelle'),('Équation','égalité contenant une inconnue'),('Médiane','valeur centrale d’une série ordonnée'),('Mode','valeur la plus fréquente'),('Moyenne','somme des valeurs divisée par leur nombre'),('Multiple','produit d’un nombre par un entier naturel'),('Numérateur','nombre de parts considérées'),('Ordonnée','deuxième coordonnée, lue sur l’axe vertical'),('Périmètre','longueur totale du contour'),('PGCD','plus grand diviseur commun'),('PPCM','plus petit multiple commun non nul'),('Prisme','solide ayant deux bases polygonales parallèles et superposables'),('Probabilité','mesure de la possibilité d’un événement'),('Proportionnalité','relation à coefficient multiplicatif constant'),('Rayon','segment du centre à un point du cercle'),('Rendement','rapport entre résultat obtenu et résultat attendu'),('Puissance','écriture abrégée d’un produit de facteurs égaux'),('Nombre relatif','nombre positif ou négatif repéré par rapport à zéro'),('Expression littérale','expression contenant une ou plusieurs variables'),('Factorisation','transformation d’une somme en produit'),('Orthocentre','point d’intersection des hauteurs d’un triangle'),('Fréquence','rapport entre un effectif et l’effectif total'),('Volume','mesure de l’espace occupé par un solide')]
for t,v in gloss:
 p=a.add_paragraph();font(p.add_run(t+' : '),11,True,(31,78,121));font(p.add_run(v+'.'),11)
a.add_page_break();head(a,'ANNEXE 2 — FORMULES ET PROPRIÉTÉS')
rows=[('Notion','Formule ou propriété'),('Puissances','aᵐ × aⁿ = aᵐ⁺ⁿ ; aᵐ ÷ aⁿ = aᵐ⁻ⁿ ; (aᵐ)ⁿ = aᵐⁿ'),('Distributivité','k(a + b) = ka + kb'),('Pourcentage','p % de Q = Q × p ÷ 100'),('Échelle','longueur du plan ÷ longueur réelle, dans la même unité'),('Proportionnalité','y = ax'),('Angles du triangle','somme = 180°'),('Angles du quadrilatère','somme = 360°'),('Cercle','d = 2r ; C = πd = 2πr'),('Rectangle','P = 2(L + l) ; A = L × l'),('Parallélogramme','A = base × hauteur'),('Triangle','A = base × hauteur ÷ 2'),('Pavé droit','V = longueur × largeur × hauteur'),('Capacité','1 mL = 1 cm³ ; 1 L = 1 000 cm³'),('Moyenne','somme des valeurs ÷ effectif'),('Probabilité','résultats favorables ÷ résultats possibles')]
t=a.add_table(rows=0,cols=2);t.style='Table Grid';t.alignment=WD_TABLE_ALIGNMENT.CENTER
for i,row in enumerate(rows):
 c=t.add_row().cells
 for j,s in enumerate(row): font(c[j].paragraphs[0].add_run(s),10,i==0)
a.add_page_break();head(a,'ANNEXE 3 — RÉSUMÉ DES MÉTHODES')
methods=[('Comparer des fractions','Chercher un dénominateur commun, comparer les numérateurs, puis vérifier sur une droite numérique.'),('Respecter les priorités','Calculer les parenthèses, puis multiplications et divisions, enfin additions et soustractions.'),('Poser une opération','Écrire d’abord en ligne, aligner les chiffres par rang, calculer de droite à gauche et vérifier.'),('Résoudre une proportionnalité','Vérifier le coefficient constant, choisir passage à l’unité ou coefficient, calculer puis contrôler.'),('Résoudre une équation','Isoler l’inconnue avec l’opération inverse, conserver l’égalité et vérifier par remplacement.'),('Construire une figure','Lire les données, choisir les instruments, tracer dans l’ordre puis contrôler les propriétés.'),('Résoudre un problème de mesure','Choisir une unité, convertir toutes les données, appliquer la formule et écrire l’unité finale.'),('Calculer avec des relatifs','Déterminer le signe, calculer les distances à zéro, puis vérifier sur une droite graduée.'),('Développer et factoriser','Distribuer pour développer ; chercher un facteur commun pour factoriser.'),('Traiter des données','Formuler la question, collecter, organiser, représenter, interpréter et conclure.'),('Calculer une probabilité','Lister les résultats possibles, compter les favorables, former le rapport et convertir si nécessaire.')]
for name,steps in methods:
 p=a.add_paragraph();font(p.add_run(name+' — '),11,True,(31,78,121));font(p.add_run(steps),11)
a.add_page_break();head(a,'ANNEXE 4 — AUTO-ÉVALUATION')
skills=['Fractions, décimaux et pourcentages','Priorités des opérations','Échelle, taux et rendement','Proportionnalité et relations','Équations','Quadrilatères et constructions','Angles et transformations','Repérage dans le plan','Conversions de mesures','Périmètres, aires et volumes','Collecte et représentation de données','Moyenne, médiane et mode','Probabilités']
t=a.add_table(rows=1,cols=4);t.style='Table Grid'
for i,s in enumerate(['Compétence','Acquis','En cours','À revoir']):font(t.rows[0].cells[i].paragraphs[0].add_run(s),10,True)
for s in skills:
 c=t.add_row().cells;font(c[0].paragraphs[0].add_run(s),9)
 for i in range(1,4):font(c[i].paragraphs[0].add_run('☐'),14)
a.add_page_break();head(a,'ANNEXE 5 — INDEX');para(a,', '.join(sorted([x[0] for x in gloss],key=str.lower))+'.')
a.add_page_break();head(a,'ANNEXE 6 — ÉVALUATIONS FORMAT EXAMEN');para(a,'Six sujets d’examen sur 20 points figurent à la fin des unités Nombre, Opération, Algèbre, Géométrie, Mesure et Traitement de données. Ils comportent tous un corrigé détaillé.')
a.add_page_break();head(a,'BIBLIOGRAPHIE ET SOURCES');para(a,'Ministère de l’Éducation Nationale de Madagascar, Programme d’études — Classe de T6, section Mathématiques, PE_T6.docx.');para(a,'Collection J-Learn, skill de conception des manuels scolaires v18.')
# Add stable bookmarks to annex headings before composition.
from docx.oxml import OxmlElement
annex_marks={'ANNEXES — MATHÉMATIQUES T7':'annexes','ANNEXE 1 — GLOSSAIRE':'annexe1','ANNEXE 2 — FORMULES ET PROPRIÉTÉS':'annexe2','ANNEXE 3 — RÉSUMÉ DES MÉTHODES':'annexe3','ANNEXE 4 — AUTO-ÉVALUATION':'annexe4','ANNEXE 5 — INDEX':'annexe5','ANNEXE 6 — ÉVALUATIONS FORMAT EXAMEN':'annexe6','BIBLIOGRAPHIE ET SOURCES':'sources'}
mark_id=5000
for paragraph in a.paragraphs:
 if paragraph.text in annex_marks:
  start=OxmlElement('w:bookmarkStart');start.set(qn('w:id'),str(mark_id));start.set(qn('w:name'),annex_marks[paragraph.text])
  end=OxmlElement('w:bookmarkEnd');end.set(qn('w:id'),str(mark_id));paragraph._p.insert(0,start);paragraph._p.append(end);mark_id+=1
ann=W/'annexes.docx';a.save(ann)
master=Document(units[0]);composer=Composer(master)
for i in range(2,7):composer.append(Document(stripped(units[i-1],i)))
composer.append(Document(ann))

# Complete the existing interactive contents with every unit and annex.
def hyperlink_paragraph(label,anchor):
 p=OxmlElement('w:p');pPr=OxmlElement('w:pPr');spacing=OxmlElement('w:spacing');spacing.set(qn('w:after'),'80');pPr.append(spacing);p.append(pPr)
 h=OxmlElement('w:hyperlink');h.set(qn('w:anchor'),anchor);h.set(qn('w:history'),'1')
 r=OxmlElement('w:r');rPr=OxmlElement('w:rPr');color=OxmlElement('w:color');color.set(qn('w:val'),'1F4E79');underline=OxmlElement('w:u');underline.set(qn('w:val'),'single');rPr.extend([color,underline]);r.append(rPr)
 tx=OxmlElement('w:t');tx.text=label;r.append(tx);h.append(r);p.append(h);return p
body_el=master.element.body
paras=list(master.paragraphs);toc_i=next(i for i,p in enumerate(paras) if p.text=='SOMMAIRE INTERACTIF')
# Insert before the first page break following the TOC block.
insert_before=None
for par in paras[toc_i+1:]:
 if par._p.xpath('.//w:br[@w:type="page"]'):
  insert_before=par._p;break
unit_names={2:'Opération',3:'Algèbre',4:'Géométrie',5:'Mesure',6:'Traitement de données'}
romans={2:'II',3:'III',4:'IV',5:'V',6:'VI'}
links=[]
for unit_no in range(2,7):
 links.append((f'Unité {romans[unit_no]} — {unit_names[unit_no]}',f'u{unit_no}'))
 source=Document(units[unit_no-1])
 session_titles=[p.text for p in source.paragraphs if re.match(r'^SÉANCE \d+ / \d+ —',p.text)]
 for k,session_title in enumerate(session_titles,1):
  readable=re.sub(r'^SÉANCE (\d+) / \d+ — ',r'   Séance \1 — ',session_title).title()
  links.append((readable,f'u{unit_no}_l{k}'))
links.extend([('Annexes','annexes'),('Glossaire','annexe1'),('Formules et propriétés','annexe2'),('Résumé des méthodes','annexe3'),('Auto-évaluation','annexe4'),('Index','annexe5'),('Évaluations format examen','annexe6'),('Bibliographie et sources','sources')])
if insert_before is not None:
 idx=body_el.index(insert_before)
 for label,anchor in links:
  body_el.insert(idx,hyperlink_paragraph(label,anchor));idx+=1
composer.save(R/'Manuel_Mathematiques_T7_JLearn.docx')
