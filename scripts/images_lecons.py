# -*- coding: utf-8 -*-
"""Table de correspondance seance -> illustration, et insertion dans les sources.

    python3 scripts/images_lecons.py --etat      # ce qui manque
    python3 scripts/images_lecons.py --inserer   # pose les images disponibles

Le skill (illustrations.md) demande :
  - une illustration en haut de la page LECON, juste apres le titre ;
  - un nommage previsible : img_seanceNN.png ;
  - un mapping seance -> image SEPARE du texte (ce fichier) ;
  - un redimensionnement a ~1100 px avant integration.

Les images du pack jugees defectueuses par AUDIT-images-pack.md ne sont
jamais reutilisees ici.
"""
import argparse
import io
import os
import re
import sys

RACINE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

FICHIERS_UNITES = [
    "Unite-I-SVT-T9-seances-1-a-10.md",
    "Unite-II-SVT-T9-seances-13-a-18.md",
    "Unite-II-SVT-T9-seances-19-a-22.md",
    "Unite-III-SVT-T9-seances-25-a-33.md",
    "Unite-IV-SVT-T9-seances-36-a-41.md",
    "Unite-V-SVT-T9-seances-44-a-49.md",
    "Revisions-et-examens-SVT-T9.md",
]

# seance -> (fichier image, legende)
# Une entree par seance de CONTENU (les 10 seances de revision/examen n'en
# prennent pas, sauf les deux schemas a legender deja en place).
MAPPING = {
    1:  ("img_seance01.png", "Un repas malgache complet : riz, brèdes, haricots, poisson, tomate et banane."),
    2:  ("img_seance02.png", "Trois aliments, trois nutriments dominants : le riz (glucides), l'huile et l'arachide (lipides), le poisson et les haricots (protéines)."),
    3:  ("img_seance03.png", "Fruits et légumes riches en vitamines et en sels minéraux, et l'eau, indispensable chaque jour."),
    4:  ("img_seance04.png", "Un gramme de glucides ou de protéines libère 4 kcal ; un gramme de lipides en libère 9."),
    5:  ("img_seance05.png", "Le corps dépense de l'énergie même au repos : c'est le métabolisme de base."),
    6:  ("img_seance06.png", "Les besoins énergétiques varient selon l'âge et l'activité."),
    7:  ("img_seance07.png", "Un menu équilibré de la journée : petit-déjeuner, déjeuner et dîner."),
    8:  ("img_seance08.png", "Une alimentation équilibrée soutient la croissance et l'attention en classe."),
    9:  ("img_seance09.png", "Signes de malnutrition aiguë et aliments riches en protéines qui permettent d'y remédier."),
    10: ("img_seance10.png", "Surpoids et obésité : l'excès d'aliments gras et sucrés associé au manque d'activité."),
    13: ("plante_organes.png", "Les organes d'une plante à fleurs : racine, tige, feuilles et fleur."),
    14: ("svt9e_racine_zones.png", "Extrémité d'une racine : coiffe, zone de croissance, poils absorbants et vaisseaux conducteurs."),
    15: ("img_seance15.png", "Les soins aux cultures : arrosage, sarclage, désherbage et éclaircissage."),
    16: ("criquet_morphologie.png", "Le criquet, ravageur redouté des cultures malgaches."),
    17: ("img_seance17.png", "Préparation d'un extrait naturel de neem pour protéger les cultures."),
    18: ("img_seance18.png", "L'usage responsable des produits chimiques exige des protections."),
    19: ("svt9e_poule.png", "Anatomie externe d'une poule."),
    20: ("img_seance20.png", "Alimentation et habitat d'un élevage de volailles."),
    21: ("img_seance21.png", "La vaccination et le déparasitage protègent le troupeau."),
    22: ("svt9e_zebu.png", "Anatomie externe d'un zébu."),
    25: ("img_seance25.png", "L'organisation du système nerveux : encéphale, moelle épinière et nerfs."),
    26: ("img_seance26.png", "Cerveau, cervelet, bulbe rachidien et moelle épinière."),
    27: ("img_seance27.png", "Le réflexe inné : la main se retire avant toute réflexion."),
    28: ("img_seance28.png", "Le réflexe acquis s'installe par la répétition."),
    29: ("img_seance29.png", "Le mouvement volontaire est commandé par le cerveau."),
    30: ("svt9e_arc_reflexe.png", "Le trajet du message nerveux au cours d'un réflexe."),
    31: ("img_seance31.png", "Les catégories de substances psychoactives."),
    32: ("img_seance32.png", "Effets des substances psychoactives sur l'organisme et la vie sociale."),
    33: ("img_seance33.png", "Hygiène du système nerveux : sommeil, alimentation et activité physique."),
    36: ("img_seance36.png", "L'appareil génital féminin : repères anatomiques."),
    37: ("img_seance37.png", "Le suivi prénatal permet de prévenir les complications de l'accouchement."),
    38: ("img_seance38.png", "Les consultations prénatales accompagnent la grossesse."),
    39: ("img_seance39.png", "L'utérus : le corps et le col."),
    40: ("img_seance40.png", "Dépistage et vaccination : deux protections complémentaires."),
    41: ("img_seance41.png", "Concevoir une affiche de sensibilisation pour son école."),
    44: ("img_seance44.png", "Pierres précieuses, pierres fines et pierres organiques."),
    45: ("img_seance45.png", "Dureté, éclat et transparence : les propriétés physiques des gemmes."),
    46: ("img_seance46.png", "Les principaux gisements de pierres gemmes à Madagascar."),
    47: ("img_seance47.png", "Joaillerie et usages industriels des pierres gemmes."),
    48: ("img_seance48.png", "Extraction artisanale et extraction industrielle."),
    49: ("img_seance49.png", "Conséquences de l'exploitation minière sur les sols et les rivières."),
}


def lire(chemin):
    with io.open(chemin, encoding="utf-8") as f:
        return f.read()


def etat():
    presentes, absentes = [], []
    for n, (fichier, _) in sorted(MAPPING.items()):
        (presentes if os.path.exists(os.path.join(RACINE, fichier))
         else absentes).append((n, fichier))
    print(f"{len(MAPPING)} séances de contenu à illustrer")
    print(f"  image disponible : {len(presentes)}")
    print(f"  à générer        : {len(absentes)}")
    if absentes:
        print("  ->", ", ".join(f"S{n}" for n, _ in absentes))
    return absentes


def inserer():
    """Pose l'image juste apres le titre « ### Page LEÇON » de chaque seance."""
    poses, sautees = 0, []
    for fichier in FICHIERS_UNITES:
        chemin = os.path.join(RACINE, fichier)
        texte = lire(chemin)
        origine = texte

        for n, (image, legende) in sorted(MAPPING.items()):
            if not os.path.exists(os.path.join(RACINE, image)):
                sautees.append(n)
                continue

            # bornes de la seance n dans ce fichier
            deb = re.search(rf"^# SÉANCE {n} / 51\b", texte, flags=re.M)
            if not deb:
                continue
            suite = re.search(r"^# SÉANCE \d+ / 51\b", texte[deb.end():], flags=re.M)
            fin = deb.end() + (suite.start() if suite else len(texte) - deb.end())
            bloc = texte[deb.start():fin]

            if f"]({image})" in bloc:      # deja posee
                continue
            titre = re.search(r"^### Page LEÇON.*$", bloc, flags=re.M)
            if not titre:
                continue

            insert = f"\n\n![{legende}]({image})\n"
            nouveau = bloc[:titre.end()] + insert + bloc[titre.end():]
            texte = texte[:deb.start()] + nouveau + texte[fin:]
            poses += 1

        if texte != origine:
            with io.open(chemin, "w", encoding="utf-8") as f:
                f.write(texte)
            print(f"  {fichier} : mis à jour")

    print(f"\n{poses} image(s) posée(s)")
    if sautees:
        print(f"{len(set(sautees))} séance(s) en attente d'image : "
              + ", ".join(f"S{n}" for n in sorted(set(sautees))))
    return 0


def main():
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("--etat", action="store_true")
    ap.add_argument("--inserer", action="store_true")
    a = ap.parse_args()
    if a.inserer:
        return inserer()
    etat()
    return 0


if __name__ == "__main__":
    sys.exit(main())
