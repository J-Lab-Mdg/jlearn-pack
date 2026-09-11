#!/usr/bin/env python3
"""SÉANCE PILOTE ENRICHIE — Géographie 9e, séance 1 « Observer le trajet du soleil ».

Variante riche : leçon développée (5 sections + exemples + encadrés + lexique)
et 4 schémas insérés là où ils servent la séance (règle v19).
"""
import os
import sys

RACINE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.join(RACINE, "tools"))
from jlearn_docx import Doc, COULEURS                      # noqa: E402
import figures                                             # noqa: E402

SQUELETTE = os.path.join(RACINE, "..", "Manuel_Geographie_1ereACD_V1_FINAL.docx")
ASSETS = os.path.join(RACINE, "assets")
SORTIE = os.path.join(RACINE, "output", "Manuel_Geographie_9e_V2_PILOTE.docx")

L6 = [1306, 2300, 2300, 1600, 1400, 1000]
L4 = [1500, 3453, 1500, 3453]

# ── 1. générer les figures ────────────────────────────────────────────────────
print("Figures…")
for nom, fn in figures.FIGURES_S1.items():
    fn(os.path.join(ASSETS, nom))

d = Doc(template=SQUELETTE)

# ══════════════════════════════════ SÉANCE 1 ══════════════════════════════════
d.titre("SÉANCE 1 / 87", size=20, bold=True, color="noir", align="right", space_after=60)
d.titre("Observer le trajet du soleil", size=32, color="rouge", anchor="s1", space_after=240)
d.paragraphe("FICHE DE PRÉPARATION", size=22, bold=True, color="bleu", space_after=120)

méta = [
    [{"text": "Discipline :", "bold": True, "size": 18}, {"text": "Géographie", "size": 18},
     {"text": "Sous-discipline :", "bold": True, "size": 18},
     {"text": "Le repérage dans l'espace", "size": 18}],
    [{"text": "Classe :", "bold": True, "size": 18}, {"text": "9e", "size": 18},
     {"text": "Séance n° :", "bold": True, "size": 18}, {"text": "1 / 29", "size": 18}],
    [{"text": "Thème :", "bold": True, "size": 18},
     {"text": "Le repérage dans l'espace", "size": 18},
     {"text": "Durée :", "bold": True, "size": 18}, {"text": "30 min", "size": 18}],
    [{"text": "Titre :", "bold": True, "size": 18},
     {"text": "Observer le trajet du soleil", "size": 18},
     {"text": "Trimestre :", "bold": True, "size": 18}, {"text": "T1 — Semaine 1", "size": 18}],
    [{"text": "Objectif spécifique :", "bold": True, "size": 18},
     {"text": "Observer le trajet du soleil du matin au soir pour énumérer les points cardinaux.",
      "size": 18, "span": 3}],
    [{"text": "Documentation :", "bold": True, "size": 18},
     {"text": "Programme officiel de Géographie 9e — fiche de répartition annuelle des objectifs "
              "spécifiques (FRA), référence « Les points cardinaux ».", "size": 18, "span": 3}],
    [{"text": "Support et matériel :", "bold": True, "size": 18},
     {"text": "Schéma du lever et du coucher du soleil, schéma du trajet du soleil, "
              "schéma des ombres, cour de l'école, ardoise et craie, cahier.",
      "size": 18, "span": 3}],
]
d.table(méta, L4)

d.paragraphe("Déroulement de la séance", size=20, bold=True, space_after=100)

analyse = "\n".join([
    "1) Le matin, de quel côté le soleil apparaît-il dans le ciel ?",
    "R.A. : Il apparaît du côté où il se lève, à l'Est.",
    "2) Le soir, de quel côté le soleil disparaît-il ?",
    "R.A. : Il disparaît du côté opposé, à l'Ouest.",
    "3) À midi, le soleil est-il bas dans le ciel ou au-dessus de nous ?",
    "R.A. : À midi, il est haut dans le ciel, au-dessus de nous.",
    "4) Que devient l'ombre du mât de drapeau entre le matin et le midi ?",
    "R.A. : Elle est longue le matin, puis elle devient courte à midi.",
    "5) Où se trouve l'ombre de Rova le soir : du côté de l'Est ou de l'Ouest ?",
    "R.A. : Du côté de l'Est, car le soleil est à l'Ouest et l'ombre est toujours "
    "à l'opposé du soleil.",
])

application = "\n".join([
    "1. Complète avec les mots proposés : Est — Ouest — courte — longue",
    "a) Le matin, le soleil se lève à l'…",
    "b) Le soir, le soleil se couche à l'…",
    "c) À midi, notre ombre est …",
    "d) Le matin, notre ombre est …",
    "2. Observe le schéma des ombres et réponds : à quel moment de la journée l'ombre "
    "de l'enfant est-elle la plus courte ?",
])
application_c = "\n".join([
    "1. a) à l'Est — b) à l'Ouest — c) courte — d) longue",
    "2. R.A. : À midi, parce que le soleil est alors au-dessus de nous.",
])

evaluation = "\n".join([
    "1. Réponds par vrai ou faux.",
    "a) Le soleil se lève à l'Ouest.",
    "b) Le soleil se couche à l'Ouest.",
    "c) À midi, notre ombre est plus courte que le matin.",
    "d) Le soir, le soleil se trouve du même côté que le matin.",
    "2. Dessine sur ton ardoise le trajet du soleil du matin au soir.",
])
evaluation_c = "\n".join([
    "1. a) Faux — b) Vrai — c) Vrai — d) Faux",
    "2. Un arc qui part de l'Est, monte, passe au-dessus de nous à midi, puis descend "
    "vers l'Ouest.",
])

rows = [
    [{"text": "Étapes et Durée", "bold": True, "size": 16, "align": "center"},
     {"text": "Déroulement de la leçon", "bold": True, "size": 16, "align": "center", "span": 2},
     {"text": "Technique et Stratégie", "bold": True, "size": 16, "align": "center"},
     {"text": "Support et matériel", "bold": True, "size": 16, "align": "center"},
     {"text": "Observation", "bold": True, "size": 16, "align": "center"}],
    [{"text": "", "size": 16},
     {"text": "Enseignant", "bold": True, "size": 16, "align": "center"},
     {"text": "Apprenants", "bold": True, "size": 16, "align": "center"},
     {"text": "", "size": 16}, {"text": "", "size": 16}, {"text": "", "size": 16}],

    [{"text": "I. RÉVISION — 3 min", "bold": True, "size": 16},
     {"text": "1) Quand tu es arrivé à l'école ce matin, l'ombre du mât de drapeau était-elle "
              "longue ou courte ?\n2) La porte de la classe se trouve-t-elle devant toi, "
              "derrière toi ou sur le côté ?", "size": 16},
     {"text": "1) R.A. : Elle était longue.\n2) R.A. : Derrière moi. (réponse selon la classe)",
      "size": 16},
     {"text": "Question-réponse / travail oral", "size": 16},
     {"text": "—", "size": 16}, {"text": "—", "size": 16}],

    [{"text": "II. NOUVELLE LEÇON — 22 min", "bold": True, "size": 16, "span": 6}],

    [{"text": "1. Mise en situation", "bold": True, "size": 16},
     {"text": "« Le matin, quand vous marchez vers l'école, qu'est-ce qui vous éclaire et vous "
              "réchauffe ? »", "size": 16},
     {"text": "R.A. : Le soleil.", "size": 16},
     {"text": "Question-réponse", "size": 16},
     {"text": "—", "size": 16}, {"text": "—", "size": 16}],

    [{"text": "2. Présentation", "bold": True, "size": 16},
     {"text": "« Aujourd'hui, nous allons observer le trajet du soleil. Après cette séance, vous "
              "serez capables de dire de quel côté le soleil se lève et de quel côté il se "
              "couche. »", "size": 16},
     {"text": "Écoutent l'annonce du titre et de l'objectif.", "size": 16},
     {"text": "Exposé bref", "size": 16},
     {"text": "—", "size": 16}, {"text": "—", "size": 16}],

    [{"text": "3. Observation", "bold": True, "size": 16},
     {"text": "« Regardez et observez bien le schéma du lever et du coucher du soleil, puis le "
              "schéma des ombres. »", "size": 16},
     {"text": "Observent silencieusement.", "size": 16},
     {"text": "Observation collective", "size": 16},
     {"text": "Schéma du lever et du coucher, schéma des ombres", "size": 16},
     {"text": "—", "size": 16}],

    [{"text": "4. Analyse", "bold": True, "size": 16},
     {"text": analyse, "size": 16},
     {"text": "Répondent oralement, puis à l'ardoise.", "size": 16},
     {"text": "Question-réponse / travail collectif", "size": 16},
     {"text": "Ardoise et craie", "size": 16}, {"text": "—", "size": 16}],

    [{"text": "5. Synthèse", "bold": True, "size": 16},
     {"text": "« Donc, chaque jour le soleil se lève à l'Est, monte dans le ciel, passe au-dessus "
              "de nous à midi, puis descend et se couche à l'Ouest le soir. Notre ombre est "
              "longue le matin et le soir, et courte à midi : elle est toujours du côté opposé "
              "au soleil. »", "size": 16},
     {"text": "Écoutent et copient la synthèse dans leur cahier.", "size": 16},
     {"text": "Travail collectif / copie", "size": 16},
     {"text": "Cahier", "size": 16}, {"text": "—", "size": 16}],

    [{"text": "6. Application", "bold": True, "size": 16},
     {"text": application, "size": 16},
     {"text": application_c, "size": 16, "color": "corrige"},
     {"text": "Travail individuel ou en binôme", "size": 16},
     {"text": "Ardoise, cahier, schéma des ombres", "size": 16}, {"text": "—", "size": 16}],

    [{"text": "III. ÉVALUATION — 5 min", "bold": True, "size": 16},
     {"text": evaluation, "size": 16},
     {"text": evaluation_c, "size": 16, "color": "corrige"},
     {"text": "Travail individuel écrit", "size": 16},
     {"text": "Ardoise", "size": 16},
     {"text": "Corrigé en fin de séance", "size": 16}],
]
d.table(rows, L6)

# ════════════════════════════════════ LEÇON ═══════════════════════════════════
d.saut_page()
d.titre("Le trajet du soleil", size=28, color="rouge", anchor="s1_lecon", space_after=200)

# --- §1
d.paragraphe("1. Le soleil se lève à l'Est", size=22, bold=True, color="vert", space_after=80)
d.image(os.path.join(ASSETS, "img_s01_c.png"), width_px=600,
        caption="Figure 1 — Le soleil se lève du côté de l'Est et se couche du côté de l'Ouest.")
d.paragraphe(
    "Chaque matin, le soleil apparaît dans le ciel du même côté : on appelle ce côté l'Est. "
    "C'est le lever du soleil. Quand Rova part à l'école tôt le matin, le soleil est encore bas "
    "et il éclaire son dos : son ombre est longue et elle s'étire devant elle, vers l'Ouest. "
    "Le soleil semble monter au-dessus de la colline, mais en réalité c'est la Terre qui tourne.",
    size=20, align="both")
d.paragraphe(
    "Retiens bien ceci : l'Est, c'est le côté où le soleil se lève. C'est le premier repère "
    "que les gens de nos campagnes utilisent depuis toujours pour se diriger dans les rizières "
    "et sur les pistes, bien avant d'avoir une boussole.", size=20, align="both")

# --- §2
d.paragraphe("2. Le soleil monte dans le ciel", size=22, bold=True, color="vert", space_after=80)
d.paragraphe(
    "Après le lever, le soleil monte peu à peu. Vers midi, il est haut dans le ciel, presque "
    "au-dessus de notre tête. À ce moment-là, ses rayons tombent presque à la verticale : notre "
    "ombre est courte, ramassée à nos pieds. C'est le moment de la journée où il fait le plus "
    "chaud, car le soleil chauffe la terre depuis plusieurs heures.", size=20, align="both")
d.image(os.path.join(ASSETS, "img_s01_b.png"), width_px=620,
        caption="Figure 2 — L'ombre d'un enfant le matin, à midi et le soir.")

# --- §3
d.paragraphe("3. Le soleil se couche à l'Ouest", size=22, bold=True, color="vert", space_after=80)
d.paragraphe(
    "L'après-midi, le soleil redescend du côté opposé à celui du matin. Le soir, il disparaît "
    "derrière l'horizon : c'est le coucher du soleil, et ce côté s'appelle l'Ouest. Au moment "
    "du coucher, l'ombre redevient longue, mais cette fois elle pointe vers l'Est, à l'opposé "
    "du soleil. Quand Koto rentre des champs le soir, son ombre est longue devant lui.",
    size=20, align="both")

d.encadre("Le savais-tu ?",
          "À Madagascar, le soleil ne se lève pas exactement à l'Est tous les jours de l'année : "
          "selon la saison, il se lève un peu plus au nord ou un peu plus au sud. Mais il se "
          "lève toujours du côté de l'Est, et il se couche toujours du côté de l'Ouest.",
          couleur="vert")

# --- §4
d.paragraphe("4. L'ombre nous renseigne", size=22, bold=True, color="vert", space_after=80)
d.paragraphe(
    "L'ombre est toujours du côté opposé au soleil. C'est une règle très utile : si le soleil "
    "est à l'Est, l'ombre va vers l'Ouest ; si le soleil est à l'Ouest, l'ombre va vers l'Est. "
    "Le matin et le soir, le soleil est bas : l'ombre est longue. À midi, le soleil est haut : "
    "l'ombre est courte. En observant seulement son ombre, on peut donc savoir à peu près "
    "quelle heure il est et de quel côté se trouve le soleil.", size=20, align="both")

d.encadre("Attention !",
          "Ne regarde jamais le soleil en face, même un court instant : cela peut blesser tes "
          "yeux gravement. Pour observer le trajet du soleil, on regarde son ombre ou le sol "
          "autour de soi, jamais le soleil lui-même.",
          couleur="rouge")

# --- §5
d.paragraphe("5. Pourquoi repérer le trajet du soleil ?", size=22, bold=True, color="vert",
             space_after=80)
d.paragraphe(
    "Connaître le lever et le coucher du soleil permet de trouver l'Est et l'Ouest sans "
    "instrument. Une fois qu'on connaît l'Est et l'Ouest, on peut en déduire le Nord et le Sud, "
    "donc se diriger dans le village, dans la forêt ou sur une piste. C'est la première leçon "
    "du repérage : avant de savoir lire un plan, il faut savoir se repérer dehors.",
    size=20, align="both")

d.image(os.path.join(ASSETS, "img_s01_a.png"), width_px=640,
        caption="Figure 3 — Le trajet du soleil, du lever à l'Est jusqu'au coucher à l'Ouest.")

d.paragraphe("Mots clés : Est, Ouest, lever du soleil, coucher du soleil, ombre, midi, "
             "se repérer.", size=20, bold=True, color="bleu", space_after=120)

d.lexique([
    ("Est", "Le côté du ciel où le soleil se lève le matin."),
    ("Ouest", "Le côté du ciel où le soleil se couche le soir."),
    ("Lever du soleil", "Le moment du matin où le soleil apparaît à l'horizon."),
    ("Coucher du soleil", "Le moment du soir où le soleil disparaît à l'horizon."),
    ("Ombre", "La partie sombre qu'un objet, un arbre ou une personne fait sur le sol "
              "quand le soleil l'éclaire. Elle est toujours du côté opposé au soleil."),
    ("Midi", "Le moment de la journée où le soleil est le plus haut dans le ciel."),
    ("Se repérer", "Savoir de quel côté on se trouve et dans quelle direction aller."),
])

# ══════════════════════════════════ EXERCICES ═════════════════════════════════
d.saut_page()
d.titre("EXERCICES", size=24, bold=True, color="bleu", anchor="s1_ex", space_after=60)
d.paragraphe("Barème : 4 points par exercice — total 20 points.", size=18, italic=True,
             space_after=160)

d.paragraphe("Exercice 1 — 4 points", size=20, bold=True, space_after=60)
d.paragraphe("Complète avec les mots proposés : Est — Ouest — courte — longue", size=20,
             space_after=40)
for t in ["a) Le matin, le soleil se lève à l'………",
          "b) Le soir, le soleil se couche à l'………",
          "c) À midi, notre ombre est ………",
          "d) Le matin, notre ombre est ………"]:
    d.paragraphe(t, size=20, indent=567, space_after=20)
d.ligne_vide()

d.paragraphe("Exercice 2 — 4 points", size=20, bold=True, space_after=60)
d.paragraphe("Réponds par vrai ou faux.", size=20, space_after=40)
for t in ["a) Le soleil se lève à l'Ouest.",
          "b) Le soir, le soleil se couche du côté de l'Ouest.",
          "c) À midi, le soleil est bas dans le ciel.",
          "d) Le matin et le soir, notre ombre est longue."]:
    d.paragraphe(t, size=20, indent=567, space_after=20)
d.ligne_vide()

d.paragraphe("Exercice 3 — 4 points", size=20, bold=True, space_after=60)
d.paragraphe("Relie chaque moment de la journée à la position du soleil.", size=20, space_after=40)
for t in ["Le matin", "À midi", "L'après-midi", "Le soir"]:
    d.paragraphe(f"{t} → …………………………………………………………", size=20, indent=567, space_after=20)
d.ligne_vide()

d.paragraphe("Exercice 4 — 4 points", size=20, bold=True, space_after=60)
d.paragraphe("Réponds aux questions par une phrase complète.", size=20, space_after=40)
for t in ["a) De quel côté le soleil se lève-t-il ?",
          "b) De quel côté le soleil se couche-t-il ?",
          "c) Quand notre ombre est-elle la plus courte ?",
          "d) Où se trouve l'ombre quand le soleil est à l'Est ?"]:
    d.paragraphe(t, size=20, indent=567, space_after=20)
d.ligne_vide()

d.paragraphe("Exercice 5 — 4 points", size=20, bold=True, space_after=60)
d.paragraphe("Observe le schéma ci-dessous puis écris le nom des quatre points cardinaux "
             "à la bonne place.", size=20, space_after=60)
d.image(os.path.join(ASSETS, "img_s01_d.png"), width_px=460,
        caption="Figure 4 — La rose des vents.")

# ═══════════════════════════════════ CORRIGÉ ══════════════════════════════════
d.saut_page()
d.titre("CORRIGÉ — Séance 1", size=24, bold=True, color="corrige", anchor="s1_corr",
        space_after=160)

d.paragraphe("Exercice 1 — 4 points (1 point par réponse)", size=20, bold=True, space_after=60)
for t in ["a) à l'Est", "b) à l'Ouest", "c) courte", "d) longue"]:
    d.paragraphe(t, size=20, indent=567, color="corrige", space_after=20)
d.ligne_vide()

d.paragraphe("Exercice 2 — 4 points (1 point par réponse)", size=20, bold=True, space_after=60)
for t in ["a) Faux — le soleil se lève à l'Est.",
          "b) Vrai — il se couche du côté de l'Ouest.",
          "c) Faux — à midi, le soleil est haut dans le ciel.",
          "d) Vrai — l'ombre est longue le matin et le soir."]:
    d.paragraphe(t, size=20, indent=567, color="corrige", space_after=20)
d.ligne_vide()

d.paragraphe("Exercice 3 — 4 points (1 point par réponse)", size=20, bold=True, space_after=60)
for t in ["Le matin → le soleil est bas, du côté de l'Est.",
          "À midi → le soleil est haut, au-dessus de nous.",
          "L'après-midi → le soleil descend vers l'Ouest.",
          "Le soir → le soleil est bas, du côté de l'Ouest."]:
    d.paragraphe(t, size=20, indent=567, color="corrige", space_after=20)
d.ligne_vide()

d.paragraphe("Exercice 4 — 4 points (1 point par réponse)", size=20, bold=True, space_after=60)
for t in ["a) Le soleil se lève à l'Est.",
          "b) Le soleil se couche à l'Ouest.",
          "c) Notre ombre est la plus courte à midi.",
          "d) Quand le soleil est à l'Est, l'ombre se trouve du côté de l'Ouest."]:
    d.paragraphe(t, size=20, indent=567, color="corrige", space_after=20)
d.ligne_vide()

d.paragraphe("Exercice 5 — 4 points (1 point par direction)", size=20, bold=True, space_after=60)
d.paragraphe("En haut : le Nord — en bas : le Sud — à droite : l'Est — à gauche : l'Ouest. "
             "L'Est est donc du côté où le soleil se lève.", size=20, indent=567,
             color="corrige", space_after=20)

# ═══════════════════════════════════ SORTIE ═══════════════════════════════════
os.makedirs(os.path.dirname(SORTIE), exist_ok=True)
d.save(SORTIE)
v = d.verif()
print("Fichier généré :", SORTIE)
print("Contrôles :", v)
ok = (v["sectPr"] == 1 and v["ns0"] == 0 and v["namespaces"] == 32
      and v["doubles_espaces"] == 0)
print("CONFORME" if ok else "NON CONFORME — à corriger")
if v["signets"] != v["liens"]:
    print("  (info) signets sans lien :", v["signets"] - v["liens"],
          "-> normal pour une séance isolée, le sommaire les créera à l'assemblage")
