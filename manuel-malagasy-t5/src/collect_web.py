# -*- coding: utf-8 -*-
"""Collecte des pages web utilisées comme contenu, en dossier + ZIP.

Pour chaque clé de `sources.py`, le script écrit :
  sources_web/NN_<clé>.txt      référence, URL, licence, passages recopiés verbatim, fiches utilisatrices
  sources_web/full/<clé>.txt    (optionnel) texte intégral de la page, déposé ici au fil des collectes
  sources_web/00_LISTE.md       index complet + plan de collecte des thèmes restants
  sources_web/RECAPITULATIF.docx version lisible (réf en gras, URL cliquable, extraits en italique)
puis emballe le tout dans output/Loharanon-kevitra_Web_<SUFFIXE>.zip

Usage : ./run.sh src/collect_web.py [suffixe, ex. V1]
"""
import importlib
import os
import re
import sys
import zipfile

HERE = os.path.dirname(os.path.abspath(__file__))
RACINE = os.path.dirname(HERE)
sys.path.insert(0, HERE)

from sources import SOURCES            # noqa: E402
from builders import norm_all          # noqa: E402

SUFFIXE = (sys.argv[1] if len(sys.argv) > 1 else "V1").strip() or "V1"
DOSSIER = os.path.join(RACINE, "sources_web")
INTEGRAL = os.path.join(DOSSIER, "full")
MODULES = ["data_pilote"] + ["data_loha%d" % i for i in range(1, 16)]

# ---------------------------------------------------------------- fiches utilisatrices
usage = {}
NFICHE = 0
for m in MODULES:
    try:
        mod = importlib.import_module(m)
    except ModuleNotFoundError:
        continue
    seances = norm_all(getattr(mod, "SEANCES", []))
    NFICHE += len(seances)
    for i, s in enumerate(seances, 1):   # le manuel numérote les fiches par position
        for k in (s.get("loharano") or []):
            usage.setdefault(k, []).append(
                "%s · fiche %d · %s · « %s »" % (
                    m.replace("data_", ""), i, s.get("zana_taranja", "?"), s.get("lohateny", "?")))


def licence(cle, ref):
    if cle.startswith("wiki_"):
        return ("Encyclopédie en ligne, article rédigé par des contributeurs ; texte sous licence "
                "Creative Commons Attribution - Partage dans les Mêmes Conditions 4.0 (CC BY-SA 4.0). "
                "La copie verbatim des passages ci-dessous est donc licite à condition de conserver "
                "l'attribution : « Wikipédia, auteurs de l'article, licence CC BY-SA 4.0 ».")
    if cle.startswith("ohab_"):
        return ("Base collaborative de ohabolana (recueil en ligne). La fiche citée porte un lien "
                "permalien, seule garantie que le texte retrouvé est bien celui consulté.")
    if cle.startswith("jica"):
        return ("Document public d'un programme de coopération : cité comme référence "
                "bibliographique (exemplaire de travail), sans reproduction intégrale.")
    return "Source en ligne publique, citée avec son URL."


os.makedirs(INTEGRAL, exist_ok=True)
cles = list(SOURCES)
fichiers = []

# ---------------------------------------------------------------- un fichier par source
for i, cle in enumerate(cles, 1):
    ref, url, passages = SOURCES[cle]
    nom = "%02d_%s.txt" % (i, cle)
    fpath = os.path.join(INTEGRAL, cle + ".txt")
    page = open(fpath, encoding="utf-8").read().split("\n") if os.path.exists(fpath) else []
    lignes = [
        "LOHARANON-KEVITRA %d — %s" % (i, cle),
        "=" * 74,
        "",
        "REFERENCE : " + ref,
        "URL       : " + url,
        "LICENCE / ATTRIBUTION : " + licence(cle, ref),
        "",
        "UTILISE DANS LE MANUEL :",
    ]
    for u in usage.get(cle, []) or [
            "(clé réservée pour les fiches à venir : aucune fiche livrée ne la cite encore)"]:
        lignes.append("  - " + u)
    if page:
        lignes.append("")
        lignes.append("La page est reproduite en entier plus bas, telle qu'elle a été ouverte : "
                      "rien n'en a été retiré, ni les titres de section, ni l'avertissement de licence.")
    lignes += ["", "-" * 74, "PASSAGES RECOPIES MOT POUR MOT (tels qu'imprimés dans le manuel) :", "-" * 74, ""]
    for j in range(len(passages)):
        lignes += ["[%d] %s" % (j + 1, passages[j]), ""]
    if page:
        lignes += ["", "-" * 74, "PEJY FENONY — texte intégral de la page, collé tel que :" + "-" * 18, ""]
        lignes += [ln.rstrip() for ln in page if ln.strip()]
    with open(os.path.join(DOSSIER, nom), "w", encoding="utf-8") as f:
        f.write("\n".join(lignes).rstrip() + "\n")
    fichiers.append(nom)

# ---------------------------------------------------------------- index + plan de collecte
A_COLLECTER = [
    ("6. Ny fifidianana", "fr.wikipedia.org/wiki/Election ; fr.wikipedia.org/wiki/Suffrage_universel"),
    ("7. Ny karazam-pihariana : ny fambolena sy ny fiompiana ary ny jono",
     "fr.wikipedia.org/wiki/Agriculture ; fr.wikipedia.org/wiki/Elevage ; fr.wikipedia.org/wiki/Pêche"),
    ("8. Ny karazam-pihariana : ny taozavatra, ny orinasa", "fr.wikipedia.org/wiki/Production_(économie) ; fr.wikipedia.org/wiki/Entreprise"),
    ("9. Ny karazam-pihariana : ny asa birao", "fr.wikipedia.org/wiki/Métier_(emploi) ; fr.wikipedia.org/wiki/Tertiaire_(économie)"),
    ("10. Ny fandrosoan'ny teknôlôjia", "fr.wikipedia.org/wiki/Technologie ; fr.wikipedia.org/wiki/Innovation_technologique"),
    ("11. Ny toe-tsaina siantifika", "fr.wikipedia.org/wiki/Méthode_scientifique ; fr.wikipedia.org/wiki/Esprit_scientifique"),
    ("12. Ny fiovan'ny toetrandro", "fr.wikipedia.org/wiki/Réchauffement_climatique ; fr.wikipedia.org/wiki/Effet_de_serre"),
    ("13. Ny finoana, ny karazam-pivavahana", "fr.wikipedia.org/wiki/Religion ; fr.wikipedia.org/wiki/Liberté_de_religion"),
    ("14. Ny fivoaran'ny kolontsaina", "fr.wikipedia.org/wiki/Culture_(sciences_sociales) ; fr.wikipedia.org/wiki/Acculturation"),
    ("15. Ady amin'ny kolikoly eo anivon'ny fiaraha-monina sy ny firenena",
     "fr.wikipedia.org/wiki/Corruption ; fr.wikipedia.org/wiki/Transparence_internationale"),
]

idx = [
    "# Loharanon-kevitra — dossier des pages web",
    "",
    "Contenu des thèmes 1 à 5 du manuel Fiteny Malagasy T5 (12 à 20 fiches livrées). Chaque fiche "
    "renvoie à une ou plusieurs clés de la liste ; le passage concerné est recopié mot pour mot après "
    "les corrigés, et ce dossier en garde la trace.",
    "",
    "| # | Clé | Référence | URL | Fiches |",
    "|---|---|---|---|---|",
]
for i, cle in enumerate(cles, 1):
    ref, url, passages = SOURCES[cle]
    idx.append("| %d | `%s` | %s | %s | %d |" % (i, cle, ref.replace("|", "/"), url, len(usage.get(cle, []))))
idx += [
    "",
    "## Méthode",
    "",
    "- Une page n'entre dans `sources.py` (et donc dans ce dossier) **que si elle a été ouverte** et si "
    "les paragraphes recopiés l'ont été depuis le texte obtenu : aucune citation n'est écrite de mémoire.",
    "- Seuls les passages utilisés sont stockés, plus l'URL, la licence et l'attribution. Le texte intégral "
    "d'une page, quand il est utile, est déposé dans `full/<clé>.txt` puis ré-emballé par ce script.",
    "- Pas de date de consultation dans le manuel : la référence complète et le permalien font foi.",
    "",
    "## A collecter (thèmes 6 à 15)",
    "",
]
for titre, urls in A_COLLECTER:
    idx.append("- **%s** → %s" % (titre, urls))
idx += ["", "## Documents ara-dalàna (hors web, dans `refs/`)", "",
        "- `PE_T5_votoatiny_malagasy.txt` — Programmes d'Études T5, extrait « Fafan'ny votoatiny » "
        "(ossature des notions, zana-taranja par zana-taranja) ;",
        "- `PE_T5_malagasy_p9-26.txt` — mêmes pages, texte brut complet (p.9 à 26) : première unité "
        "(`sahanasa`) de chaque branche, avec `Voka-pianarana manokana`, `Torohevitra`, `Tetika "
        "amam-paika`, `Fitaovana`, `Tombana` ;",
        "- FRP T5 fasc. 2 — référentiel des épreuves, utilisé pour les types d'exercices."]
with open(os.path.join(DOSSIER, "00_LISTE.md"), "w", encoding="utf-8") as f:
    f.write("\n".join(idx) + "\n")
fichiers.append("00_LISTE.md")

# ---------------------------------------------------------------- récapitulatif .docx
from docx import Document                                # noqa: E402
from docx.shared import Pt, RGBColor, Cm                  # noqa: E402
from docx.enum.text import WD_ALIGN_PARAGRAPH             # noqa: E402
from docx.oxml.ns import qn                               # noqa: E402
from docx.oxml import OxmlElement                         # noqa: E402

BLEU = RGBColor(0x05, 0x63, 0xC1)
BORDEAUX = RGBColor(0x7B, 0x1F, 0x1F)
NOIR = RGBColor(0x00, 0x00, 0x00)


def hyperlink(par, url):
    part = par.part
    r_id = part.relate_to(url,
                          "http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink",
                          is_external=True)
    hl = OxmlElement("w:hyperlink")
    hl.set(qn("r:id"), r_id)
    run = OxmlElement("w:r")
    rpr = OxmlElement("w:rPr")
    for tag, val in (("w:color", "0563C1"), ("w:u", "single")):
        e = OxmlElement(tag)
        if val:
            e.set(qn("w:val"), val)
        rpr.append(e)
    sz = OxmlElement("w:sz"); sz.set(qn("w:val"), "20"); rpr.append(sz)
    run.append(rpr)
    t = OxmlElement("w:t")
    t.text = url
    t.set(qn("xml:space"), "preserve")
    run.append(t)
    hl.append(run)
    par._p.append(hl)


doc = Document()
st = doc.styles["Normal"]
st.font.name = "Times New Roman"
st.font.size = Pt(11)
st.element.rPr.rFonts.set(qn("w:eastAsia"), "Times New Roman")

p = doc.add_paragraph()
r = p.add_run("LOHARANON-KEVITRA — dossier des pages web")
r.bold = True
r.font.size = Pt(15)
r.font.color.rgb = BORDEAUX
p = doc.add_paragraph()
r = p.add_run("Manuel Fiteny Malagasy T5 · %d loharano voamarina · %d fiches déjà écrites, "
              "avec %d renvois vers ces sources"
              % (len(cles), NFICHE, sum(len(v) for v in usage.values())))
r.italic = True
r.font.size = Pt(10)
p = doc.add_paragraph()
r = p.add_run("Une source n'est retenue que si la page a été ouverte et si le texte ci-dessous en a été "
              "tiré. La copie verbatim des articles d'encyclopédie est licite sous CC BY-SA 4.0 à "
              "condition de conserver l'attribution.")
r.font.size = Pt(10)

FULL_OK = 0
for i, cle in enumerate(cles, 1):
    ref, url, passages = SOURCES[cle]
    fpd = os.path.join(INTEGRAL, cle + ".txt")
    page = [ln.strip() for ln in open(fpd, encoding="utf-8").read().split("\n") if ln.strip()] \
        if os.path.exists(fpd) else []
    FULL_OK += 1 if page else 0
    p = doc.add_paragraph()
    p.paragraph_format.space_before = Pt(14)
    r = p.add_run("%d. %s" % (i, ref))
    r.bold = True
    r.font.size = Pt(11)
    p = doc.add_paragraph()
    p.paragraph_format.space_after = Pt(2)
    r = p.add_run("URL : ")
    r.font.size = Pt(10)
    hyperlink(p, url)
    p = doc.add_paragraph()
    r = p.add_run("Licence / attribution : " + licence(cle, ref))
    r.font.size = Pt(9)
    r.italic = True
    for u in usage.get(cle, []):
        p = doc.add_paragraph()
        p.paragraph_format.left_indent = Cm(0.5)
        p.paragraph_format.space_after = Pt(0)
        r = p.add_run("→ cité dans : " + u)
        r.font.size = Pt(9)
    for j, t in enumerate(passages, 1):
        p = doc.add_paragraph()
        p.paragraph_format.left_indent = Cm(0.5)
        r = p.add_run(t)
        r.italic = True
        r.font.size = Pt(10)
    if page:
        p = doc.add_paragraph()
        r = p.add_run("PEJY FENONY — texte intégral de la page, collé tel quel :")
        r.bold = True
        r.font.size = Pt(9)
        for ln in page:
            p = doc.add_paragraph()
            p.paragraph_format.left_indent = Cm(0.5)
            p.paragraph_format.space_after = Pt(1)
            r = p.add_run(ln)
            r.font.size = Pt(8)
    else:
        p = doc.add_paragraph()
        r = p.add_run("Passages recopiés dans le manuel ci-dessus, après les corrigés de la fiche. "
                      "Page intégrale non encore collectée.")
        r.font.size = Pt(8)

docx_name = "RECAPITULATIF.docx"
doc.save(os.path.join(DOSSIER, docx_name))
fichiers.append(docx_name)

# ---------------------------------------------------------------- ZIP
zip_nom = "Loharanon-kevitra_Web_T5_%s.zip" % SUFFIXE
zip_path = os.path.join(RACINE, "output", zip_nom)
os.makedirs(os.path.dirname(zip_path), exist_ok=True)
if os.path.exists(zip_path):
    os.remove(zip_path)
with zipfile.ZipFile(zip_path, "w", zipfile.ZIP_DEFLATED) as z:
    for f in sorted(fichiers):
        z.write(os.path.join(DOSSIER, f), "Loharanon-kevitra/" + f)
    if os.path.isdir(INTEGRAL):
        for f in sorted(os.listdir(INTEGRAL)):
            if f.endswith(".txt"):
                z.write(os.path.join(INTEGRAL, f), "Loharanon-kevitra/full/" + f)
with zipfile.ZipFile(zip_path) as z:
    noms = z.namelist()
print("ZIP : %s | %d o | %d fichiers" % (zip_nom, os.path.getsize(zip_path), len(noms)))
print("clés : %d | citations en fiche : %d | pages entières collées : %d/%d"
      % (len(cles), sum(len(v) for v in usage.values()), FULL_OK, len(cles)))
for k in cles:
    print("  %-26s %d passage(s) · %d fiche(s)" % (k, len(SOURCES[k][2]), len(usage.get(k, []))))
