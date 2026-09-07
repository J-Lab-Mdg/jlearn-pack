#!/usr/bin/env python3
"""Points 5 et 6 pour le Manuel Math 7e.

5. Pages d'accueil : section « COMMENT UTILISER CE MANUEL » (mode d'emploi
   enseignant, à la manière du 8e), insérée entre l'avant-propos et le
   sommaire, avec entrée cliquable et signet.

6. Vraies listes / alignements Word :
   - les QCM sur 2 colonnes, alignés à coups d'espaces, passent sur une
     vraie tabulation (taquet à 8 cm) : l'alignement ne casse plus si la
     police change ;
   - les items « a) … » et « 1. … » reçoivent un retrait négatif (hanging
     indent) pour que les lignes qui reviennent à la ligne s'alignent sous
     le texte et non sous la puce.
"""
import zipfile, re
from lxml import etree

NS = 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'
W = '{%s}' % NS
XML = '{http://www.w3.org/XML/1998/namespace}'
SRC = 'telechargements/Manuel-Mathematiques-7e-COMPLET-ameliore-v3.docx'
DST = 'telechargements/Manuel-Mathematiques-7e-COMPLET-ameliore-v4.docx'

SALMON, GREEN, BLUE, DARK = 'E9967A', '1E7B34', '1F4E79', '000000'
TAB_POS = '4536'        # 8 cm en twips
IND_LEFT, IND_HANG = '340', '340'   # 0,6 cm

def q(t): return W + t
def txt(p): return "".join(n.text or '' for n in p.iter(q('t'))).strip()

def in_table(el):
    a = el.getparent()
    while a is not None:
        if a.tag == q('tbl'): return True
        a = a.getparent()
    return False

def pPr(p):
    pr = p.find(q('pPr'))
    if pr is None:
        pr = etree.Element(q('pPr')); p.insert(0, pr)
    return pr

def mk_p(text='', *, style=None, color=None, size=None, bold=False,
         italic=False, align=None, fill=None, space_after=None):
    p = etree.Element(q('p'))
    pr = etree.SubElement(p, q('pPr'))
    if style is not None:
        s = etree.SubElement(pr, q('pStyle')); s.set(q('val'), style)
    if align:
        j = etree.SubElement(pr, q('jc')); j.set(q('val'), align)
    if fill:
        shd = etree.SubElement(pr, q('shd'))
        shd.set(q('val'), 'clear'); shd.set(q('color'), 'auto')
        shd.set(q('fill'), fill)
    if space_after is not None:
        sp = etree.SubElement(pr, q('spacing')); sp.set(q('after'), str(space_after))
    if text:
        r = etree.SubElement(p, q('r'))
        rpr = etree.SubElement(r, q('rPr'))
        rf = etree.SubElement(rpr, q('rFonts'))
        for a in ('ascii', 'hAnsi', 'cs'):
            rf.set(q(a), 'Times New Roman')
        if bold: etree.SubElement(rpr, q('b'))
        if italic: etree.SubElement(rpr, q('i'))
        if color:
            c = etree.SubElement(rpr, q('color')); c.set(q('val'), color)
        if size:
            for tg in ('sz', 'szCs'):
                s = etree.SubElement(rpr, q(tg)); s.set(q('val'), str(size))
        t = etree.SubElement(r, q('t')); t.text = text
        t.set(XML + 'space', 'preserve')
    return p

def bookmark(p, name, bid):
    s = etree.Element(q('bookmarkStart')); s.set(q('id'), str(bid)); s.set(q('name'), name)
    e = etree.Element(q('bookmarkEnd')); e.set(q('id'), str(bid))
    p.insert(0, s); p.append(e)

# --------------------------------------------------------------- point 5
GUIDE = [
    ('h', "COMMENT UTILISER CE MANUEL"),
    ('intro', "Ce manuel s'utilise aussi bien par l'enseignant, pour préparer et "
              "conduire sa séance, que par l'élève, pour réviser seul ou avec "
              "sa famille. Voici comment sont organisées les 81 fiches."),
    ('s', "1. La structure d'une fiche"),
    ('t', "Chaque fiche porte un numéro (SÉANCE n / 81) et se lit toujours dans "
          "le même ordre, en trois temps :"),
    ('b', "La fiche de préparation — un tableau qui indique la discipline, le "
          "thème, l'objectif spécifique, la documentation officielle, le "
          "matériel et la durée, puis le déroulement minute par minute "
          "(révision, mise en situation, présentation, observation, analyse, "
          "synthèse, application, évaluation)."),
    ('b', "La LEÇON — la notion expliquée pas à pas, avec ses règles, ses "
          "exemples et ses tableaux."),
    ('b', "Les EXERCICES — quatre exercices corrigés, notés sur 20 points au "
          "total."),
    ('s', "2. Les couleurs et les repères"),
    ('t', "Les encadrés colorés permettent de repérer d'un coup d'œil la nature "
          "de ce que l'on lit :"),
    ('lg', "Fond orange — la règle ou la synthèse à retenir par cœur."),
    ('lj', "Fond jaune — un exemple traité ou un tableau modèle."),
    ('lm', "Fond vert d'eau — le corrigé d'un exercice."),
    ('lb', "Fond bleu clair — les étiquettes Application et Évaluation, qui "
           "séparent les exercices d'entraînement des exercices notés."),
    ('lr', "Fond rose, marqué ❌ À éviter — l'erreur classique à ne pas "
           "commettre. À lire attentivement avant de rédiger."),
    ('t', "Les légendes en gris et en italique, sous les tableaux et les "
          "figures, indiquent ce que l'on doit observer."),
    ('s', "3. Le barème"),
    ('t', "Chaque série d'exercices est notée sur 20 points : quatre exercices "
          "de 5 points. Dans les QCM, chaque bonne réponse vaut 1,25 point. Le "
          "barème est rappelé à la fin de chaque fiche par la mention "
          "« Total : 20 points », ce qui permet de transformer n'importe quelle "
          "fiche en devoir surveillé."),
    ('s', "4. Conseils à l'enseignant"),
    ('b', "Le calcul mental est prévu chaque jour : il figure au début du "
          "déroulement, dans la partie RÉVISION ET CALCUL MENTAL."),
    ('b', "Les exercices marqués Application se font au cahier ou à l'ardoise, "
          "collectivement ; ceux marqués Évaluation se font individuellement, "
          "sur feuille."),
    ('b', "Les réponses attendues des élèves sont notées R.A. dans la colonne "
          "« Apprenants » de la fiche de préparation."),
    ('b', "À la fin de chaque trimestre, une séance de RÉVISION, un SUJET "
          "d'examen et une séance de SOUTIEN permettent de faire le point."),
    ('s', "5. Conseils à l'élève"),
    ('b', "Lis d'abord la leçon en entier, puis relis seulement les encadrés "
          "orange : ce sont les règles à connaître."),
    ('b', "Fais les exercices sans regarder le corrigé, puis compare. Compte "
          "tes points : sur 20."),
    ('b', "Avant un examen, relis l'ANNEXE 1 (le mémento des formules) et "
          "entraîne-toi sur l'ANNEXE 2 (les 40 sujets types CEPE corrigés)."),
    ('s', "6. Se déplacer dans le manuel"),
    ('t', "Le SOMMAIRE, en tête du manuel, est cliquable : un clic sur le titre "
          "d'une fiche conduit directement à cette fiche. Dans Word, l'onglet "
          "Affichage puis le volet de navigation affichent l'arborescence "
          "complète des 81 séances."),
]

FILLS = {'lg': 'FFE0B2', 'lj': 'FEF9E7', 'lm': 'E8F8F5',
         'lb': 'EBF5FB', 'lr': 'FDEDEC'}

def build_guide(bid):
    out = []
    for kind, text in GUIDE:
        if kind == 'h':
            p = mk_p(text, style='Heading1', color=DARK, size=26, bold=True)
            bookmark(p, 'guide', bid)
            out.append(p)
        elif kind == 'intro':
            out.append(mk_p(text, color=DARK, size=21, space_after=120))
        elif kind == 's':
            out.append(mk_p(text, color=GREEN, size=23, bold=True, space_after=60))
        elif kind == 't':
            out.append(mk_p(text, color=DARK, size=21, space_after=60))
        elif kind == 'b':
            out.append(mk_p('•  ' + text, color=DARK, size=21, space_after=40))
        else:
            out.append(mk_p(text, color=DARK, size=21, bold=True,
                            fill=FILLS[kind], space_after=40))
    out.append(mk_p())
    return out

# --------------------------------------------------------------- point 6
SPLIT = re.compile(r'(?<=\S)[ \u00a0]{3,}(?=[a-d]\))')
ITEM = re.compile(r'^(?:[a-d]\)|\d+[.)])\s')

def fix_tabs(body):
    """Remplace les paquets d'espaces des QCM par une vraie tabulation."""
    n = 0
    for p in body.iter(q('p')):
        nodes = [t for r in p.findall(q('r')) for t in r.iter(q('t'))]
        if not nodes:
            continue
        whole = "".join(t.text or '' for t in nodes)
        if not SPLIT.search(whole):
            continue
        # on ne traite que les vraies lignes d'options QCM
        if not re.match(r'^\s*[a-d]\)', whole):
            continue
        for t in nodes:
            cur = t.text or ''
            if not SPLIT.search(cur):
                continue
            parts = SPLIT.split(cur)
            run = t.getparent()
            rpr = run.find(q('rPr'))
            idx = list(run).index(t)
            t.text = parts[0]
            t.set(XML + 'space', 'preserve')
            for extra in reversed(parts[1:]):
                nt = etree.Element(q('t')); nt.text = extra
                nt.set(XML + 'space', 'preserve')
                run.insert(idx + 1, nt)
                run.insert(idx + 1, etree.Element(q('tab')))
        pr = pPr(p)
        for old in pr.findall(q('tabs')): pr.remove(old)
        tabs = etree.SubElement(pr, q('tabs'))
        tb = etree.SubElement(tabs, q('tab'))
        tb.set(q('val'), 'left'); tb.set(q('pos'), TAB_POS)
        n += 1
    return n

def fix_hanging(body):
    """Retrait négatif sur les items a) / 1. pour aligner les retours ligne."""
    n = 0
    for p in body.iter(q('p')):
        if in_table(p):
            continue
        t = txt(p)
        if not ITEM.match(t) or len(t) < 12:
            continue
        pr = pPr(p)
        if pr.find(q('ind')) is not None:
            continue
        ind = etree.SubElement(pr, q('ind'))
        ind.set(q('left'), IND_LEFT); ind.set(q('hanging'), IND_HANG)
        n += 1
    return n

def main():
    zin = zipfile.ZipFile(SRC)
    root = etree.fromstring(zin.read('word/document.xml'))
    body = root.find(q('body'))
    kids = list(body)

    used = {b.get(q('name')) for b in root.iter(q('bookmarkStart'))}
    bid = 1 + max([int(b.get(q('id')) or 0) for b in root.iter(q('bookmarkStart'))] or [0])

    # --- 5 : insertion du guide juste avant le SOMMAIRE ---
    idx = next(i for i, e in enumerate(kids)
               if e.tag == q('p') and txt(e) == 'SOMMAIRE')
    for off, p in enumerate(build_guide(bid)):
        body.insert(idx + off, p)
    added = len(build_guide(bid))

    # ligne cliquable ajoutée dans l'avant-propos
    apropos = next(e for e in body.iter(q('p'))
                   if txt(e).startswith('• Le sommaire en tête'))
    link = etree.Element(q('hyperlink')); link.set(q('anchor'), 'guide')
    r = etree.SubElement(link, q('r'))
    rpr = etree.SubElement(r, q('rPr'))
    st = etree.SubElement(rpr, q('rStyle')); st.set(q('val'), 'Hyperlink')
    for tg in ('sz', 'szCs'):
        s = etree.SubElement(rpr, q(tg)); s.set(q('val'), '21')
    tt = etree.SubElement(r, q('t'))
    tt.text = "• La section « Comment utiliser ce manuel » explique la structure des fiches, le code des couleurs et le barème."
    tt.set(XML + 'space', 'preserve')
    np = etree.Element(q('p')); np.append(link)
    apropos.addprevious(np)

    ntab = fix_tabs(body)
    nind = fix_hanging(body)

    out = etree.tostring(root, xml_declaration=True,
                         encoding='UTF-8', standalone=True)
    with zipfile.ZipFile(DST, 'w', zipfile.ZIP_DEFLATED) as zo:
        for n in zin.namelist():
            zo.writestr(n, out if n == 'word/document.xml' else zin.read(n))

    print('Guide « Comment utiliser ce manuel » :', added, 'paragraphes')
    print('QCM passés en vraie tabulation       :', ntab)
    print('Items avec retrait négatif           :', nind)
    print('Écrit :', DST)

if __name__ == '__main__':
    main()
