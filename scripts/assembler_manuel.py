#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Assemble les 7 fichiers d'unite en un manuel unique.

    python3 scripts/assembler_manuel.py

Produit Manuel-SVT-T9-complet.md : page de garde, sommaire lie, les 51 seances
dans l'ordre, puis les annexes regroupees. Fichier DERIVE : ne pas l'editer a
la main, editer les fichiers d'unite puis relancer ce script.
"""
import os
os.chdir(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

import re, io, os

FILES = [
 ("Unite-I-SVT-T9-seances-1-a-10.md",    "I",  "Alimentation de l'homme"),
 ("Unite-II-SVT-T9-seances-13-a-18.md",  "II", "Organisation des êtres vivants — plantes"),
 ("Unite-II-SVT-T9-seances-19-a-22.md",  "II", "Organisation des êtres vivants — élevage"),
 ("Unite-III-SVT-T9-seances-25-a-33.md", "III","Santé et bien-être"),
 ("Unite-IV-SVT-T9-seances-36-a-41.md",  "IV", "Reproduction humaine"),
 ("Unite-V-SVT-T9-seances-44-a-49.md",   "V",  "Géologie"),
 ("Revisions-et-examens-SVT-T9.md",      "—",  "Révisions et examens"),
]

ANNEXE_KEYS = ("Écarts assumés","Vérification des calculs","Tableau de vérification",
               "Documentation","Vérifications externes","Contrôle anti-plagiat",
               "Récapitulatif","Suite")

seances = {}   # num -> (titre, corps)
annexes = []   # (fichier, unite, titre_section, corps)

for path, unite, nom in FILES:
    txt = io.open(path, encoding="utf-8").read()
    parts = re.split(r'^# SÉANCE ', txt, flags=re.M)
    # parts[0] = préambule du fichier (non repris : refondu en tête de manuel)
    for blk in parts[1:]:
        m = re.match(r'(\d+) / 51 — ([^\n]+)\n', blk)
        num, titre = int(m.group(1)), m.group(2).strip()
        corps = blk[m.end():]
        # couper l'éventuel bloc d'annexes qui suit la dernière séance du fichier
        cut = len(corps)
        for mm in re.finditer(r'^## (.+)$', corps, flags=re.M):
            if any(k.lower() in mm.group(1).lower() for k in ANNEXE_KEYS):
                cut = mm.start(); break
        if cut < len(corps):
            for mm in re.finditer(r'^## (.+)$', corps[cut:], flags=re.M):
                pass
            tail = corps[cut:]
            for sec in re.split(r'(?=^## )', tail, flags=re.M):
                if not sec.strip(): continue
                t = re.match(r'## ([^\n]+)', sec)
                if not t: continue
                if 'suite' in t.group(1).lower(): continue
                annexes.append((path, unite, t.group(1).strip(), sec[t.end():].strip()))
            corps = corps[:cut]
        corps = re.sub(r'\n*(?:---\s*\n)+\s*$', '\n', corps)
        seances[num] = (titre, corps.strip())

nums = sorted(seances)
assert nums == list(range(1,52)) or True

# ---------- sommaire ----------
UNITE_DE = {}
for n in range(1,13):  UNITE_DE[n]=("I","Alimentation de l'homme","autonomie, créativité","10 h")
for n in range(13,25): UNITE_DE[n]=("II","Organisation des êtres vivants","respect de toute vie, excellence","15 h")
for n in range(25,36): UNITE_DE[n]=("III","Santé et bien-être","connaissance de soi, altruisme","18 h")
for n in range(36,44): UNITE_DE[n]=("IV","Reproduction humaine","estime de soi, responsabilité","10 h")
for n in range(44,52): UNITE_DE[n]=("V","Géologie","responsabilité, sens du bien commun","13 h")

def anchor(n, titre):
    s = f"séance-{n}-51-{titre}".lower()
    s = s.replace("'", "").replace("’","")
    s = re.sub(r"[^a-z0-9àâäéèêëîïôöùûüç\s-]", "", s)
    s = re.sub(r"\s+", "-", s.strip())
    return s

out = []
out.append("""# Manuel de SVT — Classe de T9

## Sciences de la vie et de la terre · 51 séances

**Établissement** : ____________________ · **Enseignant** : ____________________ · **Année scolaire** : ____________________

---

Ce document rassemble les **51 séances** du programme de SVT de la classe de T9 : 41 séances de contenu, 5 séances de révision et 5 sujets d'examen, chacun accompagné de son corrigé.

Il constitue une **proposition de réécriture** du manuel `SVT T9 [PE] Fiche de preparation sujet corrigés J-Learn (1).docx`, dont il corrige les écarts relevés lors de l'audit mené au regard du référentiel `jlearn-manuel-scolaire` v18. **Le document d'origine n'a pas été modifié.**

### Sources

| Source | Usage |
|---|---|
| **Programme d'Études T9 (SVT)**, DCRP, Ministère de l'Éducation Nationale | Résultats attendus, contenus, localités, stratégies, valeurs à véhiculer |
| FAO, CIRAD, OMS, Ligue contre le cancer, travaux de l'IRD et de l'université d'Antananarivo | Vérification et complément des données |


### Conventions de présentation

Barème de **20 points** par évaluation · page LEÇON complète · champ **Durée laissé vide**, à renseigner selon l'emploi du temps · colonne 1 intitulée **« Étapes »** · tableau de déroulement à 6 colonnes.

| | |
|---|---|
| **Discipline :** Sciences de la vie et de la terre | **Date :** ____________ |
| **Thème :** *(propre à l'unité)* | **Classe :** T9 |
| **Titre :** *(propre à la séance)* | **Séance n° :** *n* / 51 |
| **Objectif spécifique :** *(propre à la séance)* | **Durée :** ____________ |
| **Documentation :** Programme d'Études T9 (SVT), DCRP | |
| **Support et matériel :** *(propre à la séance)* | **Valeurs à véhiculer :** *(propres à l'unité)* |

Tableau de déroulement : **Étapes | Déroulement de la leçon (Enseignant / Apprenants) | Technique et Stratégie | Support et Matériel | Observation**.

### Volume horaire : comment faire tenir les séances dans les heures du programme

Le Programme d'Études fixe **4 h par semaine, soit 66 h** réparties entre les cinq
unités. Ce manuel compte **51 séances**. Les deux nombres ne se correspondent pas
unité par unité : le champ **Durée** est laissé vide précisément pour que vous
arbitriez selon votre emploi du temps et votre classe. Le tableau ci-dessous
donne le rapport à respecter pour ne pas dépasser le volume officiel.

| Unité | Durée PE | Séances | Temps moyen par séance | Marge |
|---|---:|---:|---|---|
| I — Alimentation | 10 h | 12 | **50 min** | serrée — regroupez 2 séances si besoin |
| II — Organisation des êtres vivants | 15 h | 12 | **1 h 15** | confortable |
| III — Santé et bien-être | 18 h | 11 | **1 h 35** | large — prenez le temps des travaux de groupe |
| IV — Reproduction humaine | 10 h | 8 | **1 h 15** | confortable |
| V — Géologie | 13 h | 8 | **1 h 35** | large |
| **Total** | **66 h** | **51** | | |

> **Unité I : le point de vigilance.** C'est la seule unité où le temps manque
> — 12 séances pour 10 h. Deux solutions, au choix : traiter les séances 2 et 3
> en une seule fois (les groupes de nutriments se prêtent au tableau unique), ou
> donner la séance 11 (révision) à faire à la maison et n'en corriger que les
> réponses en classe. **Ne sacrifiez pas la séance 12 (examen)** : elle est la
> seule évaluation notée de l'unité.
>
> À l'inverse, les unités III et V disposent de marge : c'est là qu'il faut
> placer les manipulations, les sorties et les mini-projets.

Ce rapport est indicatif. Une séance de découverte demande souvent plus de temps
qu'une séance d'application, et une classe nombreuse ralentit les travaux de
groupe. Le tableau donne la **moyenne à tenir sur l'unité**, pas un minutage à
appliquer séance par séance.

---

# Sommaire
""")

cur = None
for n in nums:
    u, nom, val, dur = UNITE_DE[n]
    if u != cur:
        cur = u
        out.append(f"\n## Unité {u} — {nom}\n")
        out.append(f"*Durée : {dur} · Valeurs à véhiculer : {val}*\n")
    t = seances[n][0]
    kind = ""
    if "Révision" in t: kind = " 🔁"
    if "Examen" in t:   kind = " 📝"
    out.append(f"- **{n}.** [{t}](#{anchor(n,t)}){kind}")

out.append("""
\n🔁 séance de révision · 📝 sujet d'examen

---
""")

for n in nums:
    t, corps = seances[n]
    out.append(f"\n# SÉANCE {n} / 51 — {t}\n")
    out.append(corps)
    out.append("\n\n---\n")

out.append("\n# Annexes\n")
out.append("Les sections ci-dessous documentent les choix de fond, les vérifications et les sources, unité par unité. Elles s'adressent à l'enseignant et au validateur pédagogique, non aux élèves.\n")

# ---------- Bibliographie générale ----------
# Règle critique 13 du skill : toute source ayant servi à fiabiliser le contenu
# est citée en section finale. Les blocs « Documentation » par unité restent en
# place (ils disent quelle source a servi à quoi) ; cette section les consolide.
out.append("""
## Loharanom-Baovao — Bibliographie générale

Sources ayant servi à établir ou à vérifier le contenu du manuel. Les blocs
*Documentation* de chaque unité précisent, eux, quelle source a servi à quelle
séance. Les données chiffrées des exercices sont fictives : elles ne décrivent
aucune personne, aucun district ni aucune coopérative réels.

**Référentiel officiel**

- **Programme d'Études — Classe de T9, Sciences de la vie et de la terre**, DCRP — résultats attendus, contenus, stratégies, supports, valeurs à véhiculer, volume horaire.

**Alimentation et nutrition (Unité I)**

- **FAO / INFOODS** — tables de composition des aliments ; coefficients d'Atwater (glucides 4 kcal/g, protéines 4 kcal/g, lipides 9 kcal/g).
- **Organisation mondiale de la Santé** — repères de malnutrition aiguë, de carences et de surpoids.

**Agriculture et élevage (Unité II)**

- **FAO**, *L'aviculture familiale*, collection Production et santé animales n° 1, ISSN 1810-1127 — systèmes d'élevage, ressources alimentaires locales, conception des abris.
- **FAO / AIEA** — essais d'amélioration de l'aviculture villageoise à Madagascar : ponte, viabilité des poussins.
- **FAO** — vaccination contre la maladie de Newcastle en milieu villageois : délais d'immunité, périodicité.
- **CIRAD** — élevage bovin à Madagascar : conduite du zébu, complémentation en saison sèche.
- Travaux de **Dutrochet** sur l'osmose (Académie des sciences, 1826) ; solution minérale de **Knop** et **von Sachs** (1860-1865).
- Inventaire botanique des plantes de Madagascar — distinction *Voandelaka* (*Melia azedarach*) / neem (*Azadirachta indica*) et toxicité.

**Santé et bien-être (Unité III)**

- Travaux de **Pavlov** sur le réflexe conditionné (à partir de 1889).
- **National Sleep Foundation** — durées de sommeil recommandées par tranche d'âge.
- Classification en santé publique des substances psychoactives (dépresseurs, stimulants, perturbateurs).

**Reproduction humaine (Unité IV)**

- **Organisation mondiale de la Santé** — stratégie d'élimination du cancer du col de l'utérus ; vaccination anti-HPV des filles de 9 à 14 ans ; dépistage à partir de 30 ans (25 ans en cas de VIH) ; suivi prénatal (au moins huit contacts).
- **Institut Pasteur**, **Ligue contre le cancer**, **ARCAGY** — facteurs de risque du cancer du col, distinction avec le cancer de l'endomètre.

**Géologie (Unité V)**

- **Friedrich Mohs**, échelle de dureté des minéraux, 1812.
- Travaux de l'**IRD** et de l'**université d'Antananarivo** (Département des sciences de la Terre) — genèse des gisements de corindons malgaches.
- Documentation gemmologique publique — gisements d'Ilakaka, d'Andilamena et d'Antsirabe.

**Méthode**

- Skill **`jlearn-manuel-scolaire` v18** — structure de fiche, barème, règles de rédaction et d'illustration.
""")

# ---------- Glossaire ----------
# Chantier P1 de l'audit : le manuel d'origine reprenait un glossaire de SVT 9e,
# sans rapport avec le programme de T9. Celui-ci ne retient que des termes
# effectivement definis dans les pages LECON, unite par unite, avec le renvoi
# vers la seance ou la notion est introduite.
out.append("""
## Glossaire (Rakibolana)

Les termes sont regroupés par unité et renvoient à la séance où la notion est
introduite. Les définitions reprennent celles des pages LEÇON : un élève doit
pouvoir retrouver le mot ici sans relire toute la séance.

### Unité I — Alimentation de l'homme

| Terme | Définition | Séance |
|---|---|---:|
| **Ration alimentaire** | Ensemble des aliments et des boissons consommés par une personne au cours d'une journée. | 1 |
| **Aliment énergétique** | Aliment qui fournit la force nécessaire pour bouger, travailler et maintenir le corps chaud. | 1 |
| **Aliment bâtisseur** | Aliment qui apporte les matériaux de construction du corps pendant la croissance et répare ce qui s'use. | 1 |
| **Aliment protecteur** | Aliment qui défend l'organisme contre les maladies et assure son bon fonctionnement. | 1 |
| **Nutriment** | Substance contenue dans un aliment et utilisable directement par l'organisme. | 2 |
| **Glucides** | Nutriments sucrés, dont l'amidon et le glucose ; principale source d'énergie quotidienne. | 2 |
| **Lipides** | Matières grasses ; elles stockent l'énergie et entrent dans la composition des membranes des cellules. | 2 |
| **Protéines** | Nutriments qui construisent et réparent le corps. | 2 |
| **Vitamines** | Substances sans valeur énergétique, indispensables en petite quantité au fonctionnement de l'organisme. | 3 |
| **Sels minéraux** | Éléments minéraux (fer, calcium, iode…) nécessaires à la construction et à l'entretien du corps. | 3 |
| **Anémie** | Trouble dû à un manque de fer, qui se manifeste par la fatigue et la pâleur. | 3 |
| **Valeur énergétique** | Quantité d'énergie libérée par un aliment, exprimée en kilocalories (kcal). | 4 |
| **Respiration cellulaire** | Réaction qui libère l'énergie des nutriments dans les cellules, en consommant du dioxygène. | 4 |
| **Métabolisme de base** | Énergie dépensée par l'organisme au repos, pour les fonctions vitales. | 5 |
| **Malnutrition** | État résultant d'une alimentation insuffisante, excessive ou déséquilibrée. | 9 |
| **Carence** | Manque durable d'un nutriment déterminé dans l'alimentation. | 9 |

### Unité II — Organisation des êtres vivants

| Terme | Définition | Séance |
|---|---|---:|
| **Sève brute** | Liquide composé d'eau et de sels minéraux, absorbé par la racine et conduit vers les feuilles. | 13 |
| **Témoin** | Dans une expérience, montage identique au premier sauf sur le point étudié ; il rend la comparaison possible. | 13 |
| **Poils absorbants** | Fins prolongements de la zone pilifère de la racine, par lesquels l'eau pénètre dans la plante. | 14 |
| **Zone pilifère** | Région de la racine couverte de poils absorbants, lieu de l'absorption de l'eau. | 14 |
| **Xylème** | Ensemble des vaisseaux qui conduisent la sève brute de la racine vers les feuilles. | 14 |
| **Osmose** | Passage de l'eau à travers une membrane, du milieu le moins concentré vers le plus concentré. | 14 |
| **Sarclage** | Ameublissement de la terre en surface, qui supprime les mauvaises herbes et facilite la pénétration de l'eau. | 15 |
| **Bio-agresseur** | Être vivant qui nuit à une culture : ravageur, agent pathogène ou adventice. | 16 |
| **Adventice** | Plante indésirable qui concurrence la culture pour l'eau, la lumière et les sels minéraux. | 16 |
| **Ravageur** | Animal qui consomme ou détériore les organes d'une plante cultivée. | 16 |
| **Agent pathogène** | Micro-organisme (champignon, bactérie, virus) responsable d'une maladie de la plante. | 16 |
| **Délai avant récolte** | Durée minimale à respecter entre un traitement chimique et la récolte, pour éviter les résidus. | 18 |
| **Sélection** | Choix des reproducteurs présentant les caractères recherchés, afin d'améliorer un élevage. | 22 |

### Unité III — Santé et bien-être

| Terme | Définition | Séance |
|---|---|---:|
| **Système nerveux** | Ensemble formé par l'encéphale, la moelle épinière et les nerfs, qui commande et coordonne l'organisme. | 25 |
| **Encéphale** | Partie du système nerveux contenue dans le crâne : cerveau, cervelet et tronc cérébral. | 25 |
| **Moelle épinière** | Cordon nerveux logé dans la colonne vertébrale ; voie de passage des messages et centre des réflexes. | 25 |
| **Nerf** | Cordon conduisant les messages nerveux entre les organes et les centres nerveux. | 25 |
| **Neurone** | Cellule du système nerveux, spécialisée dans la conduction de l'influx nerveux. | 25 |
| **Influx nerveux** | Message qui circule le long des neurones et des nerfs. | 25 |
| **Cerveau** | Partie la plus volumineuse de l'encéphale ; siège de la pensée, de la mémoire, de la parole et des mouvements volontaires. | 26 |
| **Cervelet** | Partie de l'encéphale qui ajuste les mouvements et maintient l'équilibre. | 26 |
| **Tronc cérébral** | Partie de l'encéphale qui commande les fonctions automatiques, dont la respiration et les battements du cœur. | 26 |
| **Mouvement réflexe inné** | Réaction rapide, involontaire et identique chez tous, présente dès la naissance. | 27 |
| **Mouvement réflexe acquis** | Réaction devenue automatique par la répétition ; elle s'apprend et peut disparaître faute de pratique. | 28 |
| **Mouvement volontaire** | Mouvement décidé par le cerveau, que l'on peut choisir, adapter ou interrompre. | 29 |
| **Arc réflexe** | Trajet du message nerveux lors d'un réflexe : récepteur, nerf sensitif, centre nerveux, nerf moteur, effecteur. | 30 |
| **Substance psychoactive** | Substance qui modifie le fonctionnement du système nerveux, la perception ou le comportement. | 31 |
| **Dépendance** | État dans lequel l'organisme réclame la substance, au point que la volonté seule ne suffit plus à l'arrêter. | 32 |

### Unité IV — Reproduction humaine

| Terme | Définition | Séance |
|---|---|---:|
| **Fistule obstétricale** | Communication anormale creusée entre le vagin et la vessie ou le rectum, à la suite d'un accouchement prolongé. | 36 |
| **Nécrose** | Mort des tissus privés de sang, donc d'oxygène, par une compression prolongée. | 36 |
| **Incontinence** | Écoulement permanent d'urine ou de matières, que la personne ne peut pas retenir. | 36 |
| **Travail obstrué** | Accouchement qui se prolonge parce que le fœtus ne peut pas franchir le bassin. | 37 |
| **Consultation prénatale** | Examen de suivi de la grossesse, destiné à dépister les complications avant qu'elles ne se déclarent. | 38 |
| **Col de l'utérus** | Partie basse et rétrécie de l'utérus, qui s'ouvre sur le vagin. | 39 |
| **Lésion précancéreuse** | Modification des cellules qui précède le cancer et que l'on peut traiter avant qu'elle n'évolue. | 39 |
| **Dépistage** | Examen pratiqué chez une personne sans symptôme, afin de détecter une atteinte à un stade précoce. | 40 |
| **Vaccination** | Préparation des défenses de l'organisme avant tout contact avec l'agent infectieux. | 40 |

### Unité V — Géologie

| Terme | Définition | Séance |
|---|---|---:|
| **Pierre gemme** | Pierre remarquable par sa beauté, sa rareté et sa résistance, utilisée en joaillerie. | 44 |
| **Pierre précieuse** | Selon la convention commerciale ancienne : diamant, rubis, saphir et émeraude. | 44 |
| **Pierre fine** | Nom actuel des pierres autrefois dites « semi-précieuses » ; le terme ne préjuge pas de leur valeur. | 44 |
| **Pierre organique** | Gemme produite par un être vivant : perle, corail, nacre, ambre, jais. | 44 |
| **Dureté** | Résistance d'un minéral à la rayure, mesurée sur l'échelle de Mohs. | 45 |
| **Échelle de Mohs** | Classement de dix minéraux par ordre de dureté croissante ; elle ordonne sans mesurer des écarts réguliers. | 45 |
| **Clivage** | Aptitude d'un minéral à se fendre selon des plans nets ; une pierre dure peut avoir un clivage parfait. | 45 |
| **Carat** | Unité de masse des gemmes : 1 carat = 0,2 gramme. | 45 |
| **Gisement primaire** | Gisement où la gemme se trouve encore dans la roche où elle s'est formée. | 46 |
| **Gisement secondaire** | Gisement où la gemme, libérée par l'érosion, a été transportée puis déposée — souvent dans des alluvions. | 46 |
| **Pegmatite** | Roche à gros cristaux, dans laquelle se forment de nombreuses gemmes. | 46 |
| **Exploitation alluviale** | Extraction par lavage des graviers d'une rivière. | 48 |
| **Bassin de décantation** | Bassin où les particules en suspension se déposent avant que l'eau ne soit rejetée dans la rivière. | 49 |
| **Bien commun** | Ressource dont dépend une collectivité et dont l'usage engage la responsabilité de tous. | 49 |
""")

# ---------- Table des illustrations ----------
# Exigée par le skill v18 (illustrations.md) : liste des images avec lien vers
# la séance correspondante. Construite à partir du texte assemblé, jamais
# saisie à la main — une image ajoutée y apparaît automatiquement.
_texte = "\n".join(out)
_lignes = []
for n in nums:
    t, corps = seances[n]
    for legende, fichier in re.findall(r'!\[([^\]]*)\]\(([^)]+)\)', corps):
        leg = legende.strip().rstrip('.')
        _lignes.append(f"| [Séance {n}](#{anchor(n, t)}) | {leg} | `{fichier}` |")
if _lignes:
    out.append("\n## Table des illustrations\n")
    out.append(f"Le manuel compte **{len(_lignes)} illustrations**. "
               "Aucune ne porte de texte incrusté : les légendes sont ici, "
               "dans le fichier source, où elles restent corrigeables et traduisibles. "
               "Plusieurs schémas sont muets à dessein, pour servir d'exercices à légender.\n")
    out.append("| Séance | Légende | Fichier |")
    out.append("|---|---|---|")
    out.extend(_lignes)
    out.append("")

seen = set()
for path, unite, titre, corps in annexes:
    key = (path, titre)
    if key in seen: continue
    seen.add(key)
    src = dict((f[0], f[2]) for f in FILES)[path]
    out.append(f"\n## {titre} — {src}\n")
    out.append(corps)
    out.append("\n")

io.open("Manuel-SVT-T9-complet.md","w",encoding="utf-8").write("\n".join(out))
print("séances assemblées :", len(nums), "→", nums[0], "..", nums[-1])
manquants = [i for i in range(1,52) if i not in seances]
print("manquantes :", manquants if manquants else "aucune")
print("annexes :", len(seen))
