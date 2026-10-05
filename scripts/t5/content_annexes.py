# -*- coding: utf-8 -*-
"""Glossary and self-assessment data for the ST T5 ANNEXES section.
Covers all 11 units (Unité I - Organisation des êtres vivants, through
Unité XI - Électricité et magnétisme).
"""

# (term, search_key, definition) - search_key is the lowercase substring used
# to detect which seances mention the term (for the dynamic INDEX).
GLOSSARY = [
    # Unité I - Organisation des êtres vivants
    ("Vertébré", "vertébré", "Animal qui possède une colonne vertébrale (poissons, amphibiens, reptiles, "
                              "oiseaux, mammifères)."),
    ("Invertébré", "invertébré", "Animal qui ne possède pas de colonne vertébrale (vers, insectes, araignées, "
                                  "mille-pattes, crustacés)."),
    ("Herbivore", "herbivore", "Animal qui se nourrit uniquement de plantes."),
    ("Carnivore", "carnivore", "Animal qui se nourrit d'autres animaux."),
    ("Omnivore", "omnivore", "Animal qui se nourrit à la fois de plantes et d'animaux."),
    ("Ovipare", "ovipare", "Animal qui pond des œufs d'où sortent les petits."),
    ("Vivipare", "vivipare", "Animal qui met au monde des petits déjà formés."),
    ("Habitat", "habitat", "Milieu de vie naturel d'un animal."),
    # Unité II - Objet technique
    ("Outil simple", "outil simple", "Objet technique à une seule pièce qui sert à faciliter une action "
                                      "manuelle (marteau, tournevis, pince)."),
    ("Machine simple", "machine simple", "Mécanisme de base qui permet de modifier une force ou un mouvement "
                                          "(levier, poulie, plan incliné, roue et essieu)."),
    ("Levier", "levier", "Machine simple formée d'une barre rigide qui pivote autour d'un point d'appui, "
                          "utilisée pour soulever une charge."),
    ("Poulie", "poulie", "Machine simple formée d'une roue sur laquelle glisse une corde, utilisée pour "
                          "soulever une charge."),
    ("Engrenage", "engrenage", "Système de deux ou plusieurs roues dentées qui s'entraînent mutuellement pour "
                                "transmettre un mouvement."),
    ("Schéma technique", "schéma technique", "Dessin normalisé qui représente un objet technique avec ses "
                                              "dimensions et ses pièces."),
    ("Maquette", "maquette", "Modèle réduit en volume d'un objet technique, construit pour le représenter ou "
                              "le tester."),
    # Unité III - Reproduction humaine / Puberté
    ("Puberté", "puberté", "Période de la vie, généralement entre 9 et 15 ans, durant laquelle le corps d'un "
                            "enfant se transforme progressivement en corps d'adulte."),
    ("Caractères sexuels secondaires", "caractères sexuels secondaires", "Changements physiques visibles qui "
                                                                          "apparaissent à la puberté, "
                                                                          "différents chez la fille et chez le "
                                                                          "garçon (pilosité, voix, "
                                                                          "silhouette...)."),
    ("Menstruation", "menstruation", "Écoulement sanguin mensuel chez la fille à partir de la puberté, signe "
                                      "du bon fonctionnement de son appareil reproducteur."),
    ("Hygiène intime", "hygiène intime", "Ensemble des gestes de propreté du corps nécessaires, en particulier "
                                          "à partir de la puberté, pour rester en bonne santé."),
    ("Appareil reproducteur", "appareil reproducteur", "Ensemble des organes qui permettent la reproduction, "
                                                         "différent chez la femme et chez l'homme."),
    # Unité IV - Conception technologique
    ("Cahier des charges", "cahier des charges", "Liste des critères et contraintes qu'un objet technique doit "
                                                  "respecter pour répondre au besoin."),
    ("Portance", "portance", "Force exercée par l'air vers le haut sur un objet volant, qui s'oppose à son "
                              "poids."),
    ("Traînée", "traînée", "Force exercée par l'air qui s'oppose au mouvement d'un objet volant."),
    ("Prototype", "prototype", "Premier exemplaire construit d'un objet technique, destiné à être testé puis "
                                "amélioré."),
    # Unité V - Maladies infectieuses
    ("Maladie infectieuse", "maladie infectieuse", "Maladie provoquée par un agent pathogène (microbe) qui "
                                                     "peut se transmettre d'une personne à une autre."),
    ("Agent pathogène", "agent pathogène", "Micro-organisme (bactérie, virus, parasite...) capable de "
                                            "provoquer une maladie."),
    ("Épidémie", "épidémie", "Propagation rapide d'une maladie infectieuse à un grand nombre de personnes dans "
                              "une région donnée."),
    ("Pandémie", "pandémie", "Épidémie qui touche plusieurs pays, voire le monde entier."),
    ("Vaccination", "vaccination", "Méthode de prévention qui permet au corps de se défendre contre une "
                                    "maladie infectieuse précise."),
    # Unité VI - Santé et bien-être
    ("Muscle", "muscle", "Organe qui se contracte et se relâche pour produire le mouvement du corps."),
    ("Contraction musculaire", "contraction", "Raccourcissement d'un muscle qui permet de produire un "
                                               "mouvement."),
    ("Articulation", "articulation", "Zone de jonction entre deux os, qui permet le mouvement du squelette."),
    ("Squelette", "squelette", "Ensemble des os du corps, qui le soutient et protège les organes internes."),
    # Unité VII - Chaleur et température
    ("Chaleur", "chaleur", "Énergie qui se transmet d'un corps chaud vers un corps froid."),
    ("Température", "température", "Grandeur qui mesure, à l'aide d'un thermomètre, le degré de chaud ou de "
                                     "froid d'un corps."),
    ("Conduction", "conduction", "Mode de transfert de la chaleur à travers un matériau, de proche en "
                                  "proche, sans déplacement de matière."),
    ("Convection", "convection", "Mode de transfert de la chaleur par déplacement de matière, dans un liquide "
                                  "ou un gaz."),
    ("Rayonnement", "rayonnement", "Mode de transfert de la chaleur sans contact ni déplacement de matière, "
                                    "comme la chaleur du Soleil."),
    # Unité VIII - Matière
    ("Fusion", "fusion", "Changement d'état de solide à liquide, provoqué par un apport de chaleur."),
    ("Vaporisation", "vaporisation", "Changement d'état de liquide à gazeux, provoqué par un apport de "
                                      "chaleur."),
    ("Condensation", "condensation", "Changement d'état de gazeux à liquide, provoqué par un refroidissement."),
    ("Solidification", "solidification", "Changement d'état de liquide à solide, provoqué par un "
                                          "refroidissement."),
    ("Soluté", "soluté", "Substance qui se dissout dans un solvant pour former une solution."),
    ("Solvant", "solvant", "Liquide dans lequel se dissout un soluté pour former une solution (l'eau est le "
                            "solvant le plus courant)."),
    # Unité IX - Géologie
    ("Sol ferralitique", "ferralitique", "Type de sol rouge, riche en fer et en aluminium, très répandu à "
                                          "Madagascar (surnommée « la grande île rouge »)."),
    ("Sol hydromorphe", "hydromorphe", "Type de sol gorgé d'eau une bonne partie de l'année, utilisé "
                                        "notamment pour la riziculture."),
    ("Perméabilité", "perméabilité", "Capacité d'un sol à laisser passer l'eau plus ou moins facilement."),
    # Unité X - Environnement
    ("Déchet dégradable", "dégradable", "Déchet qui se décompose naturellement assez rapidement grâce aux "
                                         "micro-organismes (épluchures, papier, feuilles mortes)."),
    ("Déchet non dégradable", "non dégradable", "Déchet qui met un temps très long, voire ne se décompose "
                                                 "jamais dans la nature (plastique, verre, métal)."),
    ("4R+C", "4r", "Méthode de réduction des déchets en cinq gestes : Réduire, Réutiliser, Réparer, Recycler, "
                   "Composter."),
    ("Compostage", "compost", "Transformation des déchets organiques en engrais naturel grâce à leur "
                               "décomposition."),
    # Unité XI - Électricité et magnétisme
    ("Conducteur (électrique)", "matériau conducteur", "Matériau qui laisse passer le courant électrique "
                                                         "(la plupart des métaux)."),
    ("Isolant (électrique)", "matériau isolant", "Matériau qui ne laisse pas passer le courant électrique "
                                                   "(plastique, bois sec, caoutchouc, verre)."),
    ("Générateur", "générateur", "Élément d'un circuit électrique qui fournit l'énergie électrique (pile, "
                                  "batterie)."),
    ("Récepteur", "récepteur", "Élément d'un circuit électrique qui utilise l'énergie électrique fournie par "
                                "le générateur (lampe, DEL, moteur)."),
    ("DEL", "del", "Diode électroluminescente : composant électrique polarisé qui produit de la lumière, "
                    "plus économe en énergie qu'une lampe classique."),
    ("Court-circuit", "court-circuit", "Passage direct du courant électrique entre les deux bornes d'un "
                                        "générateur, sans récepteur, provoquant un échauffement dangereux."),
    ("Surtension", "surtension", "Application à un appareil électrique d'une tension plus forte que sa "
                                  "tension nominale, qui risque de l'endommager."),
]

# (unit_label, competence_text) - 2 rows per unit recommended.
AUTOEVAL = [
    ("Unité I", "Je sais classer un animal en vertébré ou invertébré."),
    ("Unité I", "Je sais expliquer l'habitat, le régime alimentaire et le mode de reproduction d'un animal."),
    ("Unité II", "Je sais distinguer un outil simple d'une machine simple et citer un exemple de chacun."),
    ("Unité II", "Je sais lire un schéma technique simple et comprendre à quoi sert une maquette."),
    ("Unité III", "Je sais citer les principaux changements du corps à la puberté, chez la fille et chez le "
                   "garçon."),
    ("Unité III", "Je sais expliquer pourquoi l'hygiène intime est importante à partir de la puberté."),
    ("Unité IV", "Je sais citer les quatre forces qui agissent sur un objet volant."),
    ("Unité IV", "Je sais suivre une démarche de conception : besoin, cahier des charges, construction, "
                  "test, amélioration."),
    ("Unité V", "Je sais expliquer comment se transmet une maladie infectieuse et citer un geste de "
                 "prévention."),
    ("Unité V", "Je sais faire la différence entre une épidémie et une pandémie."),
    ("Unité VI", "Je sais expliquer le rôle des muscles et des articulations dans le mouvement du corps."),
    ("Unité VI", "Je sais citer une règle d'hygiène pour protéger mon squelette et mes articulations."),
    ("Unité VII", "Je sais faire la différence entre chaleur et température."),
    ("Unité VII", "Je sais citer les trois modes de transfert de la chaleur et lire une température sur un "
                   "thermomètre."),
    ("Unité VIII", "Je sais citer les quatre changements d'état de l'eau et donner un exemple de chacun."),
    ("Unité VIII", "Je sais expliquer ce qu'est une solution aqueuse et citer un soluté et un solvant."),
    ("Unité IX", "Je sais citer les propriétés physiques et chimiques d'un sol."),
    ("Unité IX", "Je sais citer deux types de sol de Madagascar et la culture qui leur correspond."),
    ("Unité X", "Je sais distinguer un déchet dégradable d'un déchet non dégradable."),
    ("Unité X", "Je sais citer et appliquer les cinq méthodes de réduction des déchets (4R+C)."),
    ("Unité XI", "Je sais distinguer un matériau conducteur d'un matériau isolant."),
    ("Unité XI", "Je sais citer une règle de sécurité électrique et décrire les étapes de construction d'une "
                  "mini-lampe de poche."),
]
