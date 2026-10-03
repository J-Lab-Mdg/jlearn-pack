# -*- coding: utf-8 -*-
"""Content for the ANNEXES section of ST T4: glossaire, auto-evaluation,
index (computed dynamically from the actual lesson text so it never goes
stale), evaluations format examen, and table des illustrations.

Each glossary entry is (term, search_key, definition). search_key is the
lowercase substring used to locate every seance (title + lecon + deroulement
text) where the term is actually taught or used, to build the INDEX
automatically and accurately rather than by hand.
"""

GLOSSARY = [
    ("Aliment constructeur", "aliment constructeur",
     "Aliment qui apporte les matériaux pour construire le corps pendant la croissance et réparer ce qui "
     "s'use (poisson, viande, œufs, haricots, lait)."),
    ("Aliment énergétique", "aliment énergétique",
     "Aliment qui donne la force nécessaire pour bouger, travailler et se réchauffer (riz, manioc, huile, "
     "sucre)."),
    ("Aliment protecteur", "aliment protecteur",
     "Aliment qui défend l'organisme contre les maladies et assure son bon fonctionnement (brèdes, "
     "légumes, fruits)."),
    ("Date de péremption", "péremption",
     "Date au-delà de laquelle un aliment peut devenir dangereux pour la santé, même si son aspect paraît "
     "normal."),
    ("Hygiène alimentaire", "hygiène",
     "Ensemble des règles qui protègent un aliment de la contamination avant, pendant et après sa "
     "préparation."),
    ("Menu varié", "menu varié",
     "Repas qui associe les trois rôles des aliments (énergétique, constructeur, protecteur) en quantité "
     "adaptée à la personne."),
    ("Appareil reproducteur (plante)", "appareil reproducteur",
     "Partie de la plante (fleur, fruit, graine) qui assure sa reproduction."),
    ("Appareil végétatif", "appareil végétatif",
     "Partie de la plante (racine, tige, feuille) qui assure sa nutrition et sa croissance."),
    ("Cotylédon", "cotylédon",
     "Première feuille, déjà présente dans la graine, qui apparaît lors de la germination."),
    ("Dicotylédone", "dicotylédone",
     "Plante à fleurs dont la graine a deux cotylédons et dont les feuilles ont des nervures en réseau."),
    ("Famadihana", "famadihana",
     "Cérémonie traditionnelle malgache de retournement des morts, durant laquelle un plat de riz (vary "
     "be menaka) est partagé en famille."),
    ("Famorana", "famorana",
     "Circoncision traditionnelle malgache, lors de laquelle la canne à sucre est offerte en symbole de "
     "vie douce et heureuse."),
    ("Monocotylédone", "monocotylédone",
     "Plante à fleurs dont la graine a un seul cotylédon et dont les feuilles ont des nervures "
     "parallèles."),
    ("Spore", "spore",
     "Cellule minuscule qui permet la reproduction des plantes sans fleurs (mousses, fougères, algues, "
     "champignons)."),
    ("Angady", "angady",
     "Bêche malgache traditionnelle utilisée pour creuser et retourner la terre des rizières et des "
     "champs."),
    ("Assemblage non permanent", "assemblage non permanent",
     "Assemblage qui peut être défait puis refait sans abîmer les pièces (vissage, nouage, emboîtement)."),
    ("Assemblage permanent", "assemblage permanent",
     "Assemblage qui relie deux pièces de façon définitive, sans pouvoir les séparer sans les abîmer "
     "(clouage, collage, soudure)."),
    ("Cahier des charges", "cahier des charges",
     "Document qui décrit, avant la fabrication, ce que doit faire un objet technique et les conditions "
     "qu'il doit respecter."),
    ("Force", "une force",
     "Action exercée sur un objet (pousser, tirer, soulever, tordre) qui peut le faire démarrer, "
     "s'arrêter, dévier ou changer de forme."),
    ("Matériau", "matériau",
     "Matière avec laquelle un objet est fabriqué (bois, métal, plastique, tissu, verre, caoutchouc...)."),
    ("Sahafa", "sahafa",
     "Tamis ou van traditionnel malgache utilisé pour séparer le riz de ses impuretés."),
    ("Organes génitaux externes", "organes génitaux externes",
     "Parties visibles de l'appareil reproducteur (pénis et bourses chez le garçon, vulve chez la "
     "fille)."),
    ("Puberté", "puberté",
     "Période de la vie où le corps se transforme progressivement, en préparation à l'âge adulte."),
    ("Coque", "coque",
     "Partie d'un bateau qui flotte sur l'eau et porte la charge transportée."),
    ("Croquis", "croquis",
     "Dessin rapide, réalisé à main levée, qui représente la forme générale d'un objet avant sa "
     "fabrication."),
    ("Prototype", "prototype",
     "Premier exemplaire construit d'un objet technique, destiné à être testé puis amélioré."),
    ("Schéma de principe", "schéma de principe",
     "Dessin très simplifié, fait de formes géométriques, qui montre comment un objet fonctionne."),
    ("Iris", "iris",
     "Partie colorée de l'œil (bleu, marron, vert...), qui entoure la pupille."),
    ("Organe sensoriel", "sensoriel",
     "Organe qui permet de percevoir une information du monde extérieur (œil, oreille, nez, langue, "
     "peau)."),
    ("Papilles gustatives", "papilles gustatives",
     "Petites structures réparties sur la langue qui permettent de reconnaître les saveurs."),
    ("Pupille", "pupille",
     "Petit point noir au centre de l'œil, qui s'élargit dans le noir et se rétrécit en pleine lumière."),
    ("Tympan", "tympan",
     "Fine membrane de l'oreille qui vibre quand un son arrive."),
    ("Érosion", "érosion",
     "Usure et entraînement de la terre par la pluie et le vent, favorisés par l'absence de végétation."),
    ("Horizon (du sol)", "horizon",
     "Chacune des couches superposées qui composent le sol."),
    ("Humus", "humus",
     "Matière organique décomposée qui rend le sol sombre et fertile."),
    ("Lavaka", "lavaka",
     "Grand ravin d'érosion creusé dans les collines des Hautes Terres malgaches par la pluie et le vent, "
     "après la disparition de la végétation."),
    ("Tavy", "tavy",
     "Technique traditionnelle consistant à brûler la végétation pour préparer un champ, qui dégrade le "
     "sol si elle est répétée."),
    ("Terre arable", "terre arable",
     "Couche de sol la plus fertile, riche en humus, où les racines des plantes puisent l'eau et les "
     "éléments nutritifs."),
    ("Condensation", "condensation",
     "Passage de l'état gazeux à l'état liquide, par exemple quand la vapeur d'eau forme de la buée sur "
     "une surface froide."),
    ("Cycle de l'eau", "cycle de l'eau",
     "Circulation continue de l'eau entre les mers, l'atmosphère, le sol et les rivières."),
    ("États physiques de la matière", "états physiques",
     "Les trois façons dont se présente la matière : solide, liquide ou gazeux."),
    ("Fusion", "fusion",
     "Passage de l'état solide à l'état liquide sous l'effet de la chaleur."),
    ("Solidification", "solidification",
     "Passage de l'état liquide à l'état solide sous l'effet du froid."),
    ("Vaporisation", "vaporisation",
     "Passage de l'état liquide à l'état gazeux sous l'effet de la chaleur."),
    ("Aimant", "aimant",
     "Objet qui a la propriété d'attirer certains métaux (fer, acier, nickel)."),
    ("Charge électrique", "charge électrique",
     "Quantité d'électricité statique portée par un objet électrisé, positive ou négative."),
    ("Électrisation", "électrisation",
     "Fait de charger un objet d'électricité statique, le plus souvent par frottement."),
    ("Magnétisme", "magnétisme",
     "Propriété d'un aimant d'attirer certains métaux."),
    ("Pôle (d'un aimant)", "pôle",
     "Chacune des deux extrémités d'un aimant (Nord et Sud), où la force d'attraction est la plus "
     "forte."),
]

# Two self-assessment competency statements per unit (18 rows), derived
# directly from each unit's "Resultat d'apprentissage specifique" (PE T4).
AUTOEVAL = [
    ("Unité I", "Élaborer un menu varié"),
    ("Unité I", "Appliquer des mesures d'hygiène des aliments et analyser un emballage alimentaire"),
    ("Unité II", "Classifier des plantes selon leurs caractéristiques"),
    ("Unité II", "Expliquer l'importance des plantes pour l'environnement et la vie quotidienne"),
    ("Unité III", "Classer des matériaux et choisir une méthode d'assemblage adaptée"),
    ("Unité III", "Identifier le besoin à l'origine d'un outil et expliquer l'action d'une force"),
    ("Unité IV", "Décrire les organes génitaux externes et leurs rôles"),
    ("Unité IV", "Déterminer les moyens pour prendre soin des organes génitaux externes"),
    ("Unité V", "Dessiner le croquis et le schéma de principe d'un mini-bateau"),
    ("Unité V", "Construire un mini-bateau simple en équipe"),
    ("Unité VI", "Décrire les organes sensoriels et leurs rôles"),
    ("Unité VI", "Déterminer les moyens pour prendre soin des organes sensoriels"),
    ("Unité VII", "Analyser un échantillon de sol"),
    ("Unité VII", "Proposer des moyens de lutte contre la dégradation du sol"),
    ("Unité VIII", "Expliquer les propriétés et les états physiques de la matière"),
    ("Unité VIII", "Expliquer les changements d'état physique de l'eau et le cycle de l'eau"),
    ("Unité IX", "Interpréter l'interaction des aimants entre eux et avec des matériaux"),
    ("Unité IX", "Interpréter l'interaction d'un objet électrisé avec des matériaux quotidiens"),
]
