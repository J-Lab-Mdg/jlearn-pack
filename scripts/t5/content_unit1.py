# -*- coding: utf-8 -*-
"""Content for UNITE I - Organisation des etres vivants (seances 1-7).
Grounded in PE T5 p.107-109 (RAS: Classifier sommairement les animaux locaux
selon leurs caracteristiques / Preserver les differentes conditions de vie
des animaux dans leur milieu).
"""

THEME = "Organisation des êtres vivants"
RAS_THEME_1 = "Classifier sommairement les animaux locaux selon leurs caractéristiques"
RAS_THEME_2 = "Préserver les différentes conditions de vie des animaux dans leur milieu"
VALEURS = "sens de responsabilité, respect de toute vie"

# ---------------------------------------------------------------------------
# SEANCE 1 - Les caracteristiques des animaux et la notion de classification
# ---------------------------------------------------------------------------
S1 = {
    "num": 1, "title": "Les caractéristiques des animaux et la notion de classification",
    "theme": THEME, "ras_theme": RAS_THEME_1, "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "identifier les caractéristiques communes des animaux pour les classer en deux grands groupes.",
    "support": "photos ou images d'animaux locaux (poule, zébu, grenouille, criquet, poisson), tableau noir.",
    "cover_image": ("scripts/t5/generated_images/u1_s1_a_animaux.jpg",
                     "Des animaux malgaches variés : zébu, poule, grenouille, criquet, poisson."),
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Citez trois animaux que vous connaissez dans votre village.",
         "R.A. : le zébu, la poule, la grenouille.", "Questionnement oral", "—", ""),
        ("II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON"),
        ("1. Mise en situation", "Voici un zébu et un criquet. Sont-ils identiques ? Qu'est-ce qui les différencie ?",
         "R.A. : Non. Le zébu a quatre pattes et des poils, le criquet a six pattes et pas de poils.", "Questionnement oral", "Photos d'animaux", ""),
        ("2. Présentation", "Aujourd'hui nous allons apprendre : « Les caractéristiques des animaux et la notion de classification ».",
         "Les élèves écoutent.", "Exposé", "Tableau noir, cahier", ""),
        ("3. Observation", "Observez ces animaux : zébu, poule, grenouille, criquet, poisson. Notez leur peau, leurs membres et comment ils respirent.",
         "R.A. : poils (zébu), plumes (poule), peau lisse (grenouille), carapace (criquet), écailles (poisson).", "Observation dirigée", "Photos d'animaux", ""),
        ("4. Analyse", "Un de ces animaux a-t-il une colonne vertébrale que l'on peut sentir sous la peau, et un autre non ?",
         "R.A. : le zébu, la poule, la grenouille et le poisson ont une colonne vertébrale ; le criquet n'en a pas.", "Étude de cas", "Photos, documents", ""),
        ("5. Synthèse", "Donc, on classe les animaux selon leur peau (poils, plumes, écailles), leurs membres (pattes, ailes, nageoires), leur "
                        "respiration (pulmonaire, branchiale) et la présence ou non d'une colonne vertébrale : les animaux à colonne vertébrale sont des "
                        "vertébrés, les autres sont des invertébrés.",
         "Les élèves écoutent et notent.", "Exposé magistral", "Tableau noir", ""),
        ("6. Application", "Ex. 1 — Range le zébu, le criquet et la grenouille dans « vertébré » ou « invertébré ».",
         "Ex. 1 : zébu — vertébré ; criquet — invertébré ; grenouille — vertébré.", "Travail de groupe", "Grande ardoise", ""),
        ("III. ÉVALUATION", "Ex. 1 — Qu'est-ce qui permet de dire qu'un animal est un vertébré ?",
         "Ex. 1 : la présence d'une colonne vertébrale.", "Évaluation écrite", "Cahier", ""),
    ],
    "lecon": [
        ("section", "1. Les caractéristiques des animaux"),
        ("body", "Pour classer les animaux, on observe plusieurs caractéristiques :"),
        ("sub", "a. La peau"),
        ("body", "Poils (zébu, chien), plumes (poule, canard), écailles (poisson, caméléon) ou peau lisse et humide "
                 "(grenouille)."),
        ("sub", "b. Les membres"),
        ("body", "Pattes (zébu, poule, criquet), ailes (poule, oiseaux), nageoires (poisson)."),
        ("sub", "c. La respiration"),
        ("body", "Respiration pulmonaire (par des poumons : zébu, poule, grenouille adulte) ou respiration branchiale "
                 "(par des branchies : poisson, têtard)."),
        ("sub", "d. La colonne vertébrale"),
        ("body", "Certains animaux possèdent une colonne vertébrale (une suite d'os le long du dos) : ce sont les "
                 "vertébrés. D'autres n'en ont pas : ce sont les invertébrés."),
        ("image", ("scripts/t5/generated_images/u1_s1_b_caracteristiques.jpg",
                   "Les quatre caractéristiques utilisées pour classer les animaux : peau, membres, respiration, colonne vertébrale.")),
        ("section", "2. La notion de classification"),
        ("body", "Classer, c'est regrouper les animaux qui se ressemblent par au moins une caractéristique commune. "
                 "La première grande classification sépare les animaux en deux groupes : les vertébrés (avec colonne "
                 "vertébrale) et les invertébrés (sans colonne vertébrale)."),
        ("body", "Cette classification en deux groupes sera détaillée dans les deux prochaines séances : d'abord les "
                 "invertébrés, puis les vertébrés."),
    ],
    "exercices": [
        ("Exercice 1 (5 points)", " — Pour chacun de ces animaux, cite la caractéristique de peau correspondante : "
                                  "1. le zébu · 2. la poule · 3. le poisson · 4. la grenouille · 5. le criquet."),
        ("Exercice 2 (5 points)", " — Classe ces animaux en « vertébré » ou « invertébré » : 1. le zébu · 2. le criquet · "
                                  "3. la poule · 4. l'araignée · 5. le poisson."),
        ("Exercice 3 (6 points)", " — Vrai ou faux, puis corrige les affirmations fausses :\n"
                                  "1. Tous les animaux ont une colonne vertébrale.\n"
                                  "2. La respiration branchiale se fait grâce à des branchies.\n"
                                  "3. Les plumes sont une caractéristique de la peau des poissons.\n"
                                  "4. Un animal invertébré n'a pas de colonne vertébrale."),
        ("Exercice 4 (4 points)", " — Choisis la bonne réponse :\n"
                                  "1. Le zébu respire grâce à : A. des branchies B. des poumons C. sa peau\n"
                                  "2. La peau du poisson est couverte de : A. poils B. plumes C. écailles\n"
                                  "3. Un animal sans colonne vertébrale est dit : A. vertébré B. invertébré C. mammifère\n"
                                  "4. Classer des animaux, c'est : A. les compter B. les regrouper par ressemblance C. les peindre"),
    ],
    "total": 20,
    "corrige_lines": [
        [("Ex. 1 — ", False), ("1. poils", True), (" · 2. ", False), ("plumes", True), (" · 3. ", False),
         ("écailles", True), (" · 4. ", False), ("peau lisse", True), (" · 5. ", False), ("carapace", True)],
        [("Ex. 2 — ", False), ("1. vertébré", True), (" · 2. ", False), ("invertébré", True), (" · 3. ", False),
         ("vertébré", True), (" · 4. ", False), ("invertébré", True), (" · 5. ", False), ("vertébré", True)],
        [("Ex. 3 — ", False),
         ("1. Faux. Les invertébrés (criquet, araignée) n'ont pas de colonne vertébrale. (1,5 pt)", False)],
        [("2. Vrai. (1,5 pt)", False)],
        [("3. Faux. Les plumes sont la peau des oiseaux ; les poissons ont des écailles. (1,5 pt)", False)],
        [("4. Vrai. (1,5 pt)", False)],
        [("Ex. 4 — ", False), ("1. B", True), (" · 2. ", False), ("C", True), (" · 3. ", False),
         ("B", True), (" · 4. ", False), ("B", True)],
    ],
}

# ---------------------------------------------------------------------------
# SEANCE 2 - Classification des invertebres
# ---------------------------------------------------------------------------
S2 = {
    "num": 2, "title": "Classification des invertébrés",
    "theme": THEME, "ras_theme": RAS_THEME_1, "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "classer des invertébrés locaux selon leurs caractéristiques.",
    "support": "photos ou spécimens d'invertébrés (ver de terre, criquet, araignée, mille-pattes, crabe), tableau noir.",
    "cover_image": ("scripts/t5/generated_images/u1_s2_a_invertebres.jpg",
                     "Quelques invertébrés : ver de terre, insecte, araignée, mille-pattes, crustacé."),
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Qu'est-ce qu'un animal invertébré ?",
         "R.A. : un animal sans colonne vertébrale.", "Questionnement oral", "—", ""),
        ("II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON"),
        ("1. Mise en situation", "Voici un ver de terre, un criquet et une araignée. Sont-ils tous pareils ?",
         "R.A. : Non, ils ont des formes de corps très différentes.", "Questionnement oral", "Photos d'invertébrés", ""),
        ("2. Présentation", "Aujourd'hui nous allons apprendre : « Classification des invertébrés ».",
         "Les élèves écoutent.", "Exposé", "Tableau noir, cahier", ""),
        ("3. Observation", "Observez le nombre de pattes et la forme du corps de : ver de terre, criquet, araignée, mille-pattes, crabe.",
         "R.A. : ver — pas de pattes ; criquet — 6 pattes ; araignée — 8 pattes ; mille-pattes — beaucoup de pattes ; crabe — pattes et carapace dure.", "Observation dirigée", "Photos ou spécimens", ""),
        ("4. Analyse", "Regroupez ces invertébrés selon leurs ressemblances (nombre de pattes, carapace).",
         "R.A. : vers (pas de pattes) ; insectes (6 pattes) ; araignées (8 pattes) ; mille-pattes ; crustacés (carapace, vivent souvent dans l'eau).", "Travail de groupe", "Tableau de classement", ""),
        ("5. Synthèse", "Donc, les invertébrés se classent notamment en : vers de terre, insectes, araignées, mille-pattes et crustacés, "
                        "selon leur nombre de pattes et la forme de leur corps.",
         "Les élèves écoutent et notent.", "Exposé magistral", "Tableau noir", ""),
        ("6. Application", "Ex. 1 — Un scorpion a huit pattes. Dans quel groupe le ranger ?",
         "Ex. 1 : dans le groupe des araignées (arachnides), car il a huit pattes comme l'araignée.", "Travail de groupe", "Grande ardoise", ""),
        ("III. ÉVALUATION", "Ex. 1 — Cite deux caractéristiques des insectes.",
         "Ex. 1 : six pattes ; souvent des ailes.", "Évaluation écrite", "Cahier", ""),
    ],
    "lecon": [
        ("section", "1. Qu'est-ce qu'un invertébré ?"),
        ("body", "Un invertébré est un animal qui ne possède pas de colonne vertébrale. Son corps est souvent mou, "
                 "parfois protégé par une carapace dure (crabe) ou une coquille (escargot)."),
        ("section", "2. Les grands groupes d'invertébrés"),
        ("sub", "a. Les vers de terre"),
        ("body", "Corps allongé, mou, sans pattes. Ils vivent dans le sol et l'enrichissent en matière organique."),
        ("sub", "b. Les insectes"),
        ("body", "Corps en trois parties, six pattes, souvent des ailes. Exemples : criquet, fourmi, papillon, moustique."),
        ("sub", "c. Les araignées"),
        ("body", "Corps en deux parties, huit pattes, pas d'ailes. Exemples : araignée, scorpion."),
        ("sub", "d. Les mille-pattes"),
        ("body", "Corps allongé formé de nombreux anneaux, avec une paire de pattes (ou plus) par anneau."),
        ("sub", "e. Les crustacés"),
        ("body", "Carapace dure, souvent aquatiques. Exemples : crabe, crevette."),
        ("image", ("scripts/t5/generated_images/u1_s2_b_classification.jpg",
                   "Les cinq groupes d'invertébrés étudiés : vers de terre, insectes, araignées, mille-pattes, crustacés.")),
        ("section", "3. Pourquoi classer les invertébrés ?"),
        ("body", "Reconnaître le groupe d'un invertébré permet de comprendre son mode de vie et son rôle dans la nature "
                 "(le ver de terre enrichit le sol, l'araignée chasse les insectes nuisibles)."),
    ],
    "exercices": [
        ("Exercice 1 (5 points)", " — Classe chaque invertébré dans le bon groupe : 1. le criquet · 2. l'araignée · "
                                  "3. le ver de terre · 4. le crabe · 5. le mille-pattes."),
        ("Exercice 2 (5 points)", " — Complète : un insecte a ……… pattes ; une araignée a ……… pattes ; "
                                  "un crustacé a une ……… dure."),
        ("Exercice 3 (6 points)", " — Vrai ou faux, puis corrige les affirmations fausses :\n"
                                  "1. Le ver de terre a huit pattes.\n"
                                  "2. Le crabe est un crustacé.\n"
                                  "3. Les insectes ont six pattes.\n"
                                  "4. Le mille-pattes vit uniquement dans l'eau."),
        ("Exercice 4 (4 points)", " — Choisis la bonne réponse :\n"
                                  "1. Le scorpion est un : A. insecte B. arachnide C. crustacé\n"
                                  "2. Le ver de terre enrichit : A. l'eau B. le sol C. l'air\n"
                                  "3. Un crabe possède : A. des poils B. une carapace C. des plumes\n"
                                  "4. Les invertébrés n'ont pas de : A. pattes B. colonne vertébrale C. corps"),
    ],
    "total": 20,
    "corrige_lines": [
        [("Ex. 1 — ", False), ("1. insecte", True), (" · 2. ", False), ("araignée", True), (" · 3. ", False),
         ("ver de terre", True), (" · 4. ", False), ("crustacé", True), (" · 5. ", False), ("mille-pattes", True)],
        [("Ex. 2 — ", False), ("six", True), (" ; ", False), ("huit", True), (" ; ", False), ("carapace", True)],
        [("Ex. 3 — ", False),
         ("1. Faux. Le ver de terre n'a pas de pattes. (1,5 pt)", False)],
        [("2. Vrai. (1,5 pt)", False)],
        [("3. Vrai. (1,5 pt)", False)],
        [("4. Faux. Le mille-pattes vit surtout dans le sol et les endroits humides, pas uniquement dans l'eau. (1,5 pt)", False)],
        [("Ex. 4 — ", False), ("1. B", True), (" · 2. ", False), ("B", True), (" · 3. ", False),
         ("B", True), (" · 4. ", False), ("B", True)],
    ],
}

# ---------------------------------------------------------------------------
# SEANCE 3 - Classification des vertebres
# ---------------------------------------------------------------------------
S3 = {
    "num": 3, "title": "Classification des vertébrés",
    "theme": THEME, "ras_theme": RAS_THEME_1, "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "classer des vertébrés locaux selon leurs caractéristiques.",
    "support": "photos de vertébrés (poisson, grenouille, caméléon, poule, zébu), tableau noir.",
    "cover_image": ("scripts/t5/generated_images/u1_s3_a_vertebres.jpg",
                     "Les cinq groupes de vertébrés : poissons, amphibiens, reptiles, oiseaux, mammifères."),
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Cite trois groupes d'invertébrés.",
         "R.A. : insectes, araignées, crustacés.", "Questionnement oral", "—", ""),
        ("II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON"),
        ("1. Mise en situation", "Le poisson, la grenouille, le caméléon, la poule et le zébu ont tous une colonne vertébrale. "
                                 "Sont-ils pour autant identiques ?",
         "R.A. : Non, ils ont une peau, une respiration et un mode de vie différents.", "Questionnement oral", "Photos de vertébrés", ""),
        ("2. Présentation", "Aujourd'hui nous allons apprendre : « Classification des vertébrés ».",
         "Les élèves écoutent.", "Exposé", "Tableau noir, cahier", ""),
        ("3. Observation", "Observez la peau et le mode de respiration de chaque animal.",
         "R.A. : poisson — écailles, branchies ; grenouille — peau humide, poumons à l'âge adulte ; caméléon — écailles, poumons ; "
         "poule — plumes, poumons ; zébu — poils, poumons.", "Observation dirigée", "Photos, documents", ""),
        ("4. Analyse", "Regroupez ces vertébrés en cinq grandes familles.",
         "R.A. : poissons, amphibiens, reptiles, oiseaux, mammifères.", "Travail de groupe", "Tableau de classement", ""),
        ("5. Synthèse", "Donc, les vertébrés se répartissent en cinq groupes : les poissons (écailles, branchies, vivent dans l'eau), "
                        "les amphibiens (peau humide, vivent dans l'eau et sur terre), les reptiles (écailles sèches), les oiseaux "
                        "(plumes, bec) et les mammifères (poils, allaitent leurs petits).",
         "Les élèves écoutent et notent.", "Exposé magistral", "Tableau noir", ""),
        ("6. Application", "Ex. 1 — Range le caméléon, le canard et le zébu dans leur groupe de vertébrés.",
         "Ex. 1 : caméléon — reptile ; canard — oiseau ; zébu — mammifère.", "Travail de groupe", "Grande ardoise", ""),
        ("III. ÉVALUATION", "Ex. 1 — Quelle caractéristique distingue un mammifère des autres vertébrés ?",
         "Ex. 1 : il a des poils et allaite ses petits.", "Évaluation écrite", "Cahier", ""),
    ],
    "lecon": [
        ("section", "1. Les cinq groupes de vertébrés"),
        ("sub", "a. Les poissons"),
        ("body", "Peau couverte d'écailles, respiration branchiale, vivent dans l'eau. Exemples : carpe, tilapia, requin."),
        ("sub", "b. Les amphibiens"),
        ("body", "Peau nue et humide, vivent une partie de leur vie dans l'eau (têtard, respiration branchiale) et une "
                 "partie sur terre (adulte, respiration pulmonaire). Exemples : grenouille, crapaud."),
        ("sub", "c. Les reptiles"),
        ("body", "Peau couverte d'écailles sèches, respiration pulmonaire. Exemples : caméléon, serpent, tortue, crocodile."),
        ("sub", "d. Les oiseaux"),
        ("body", "Corps couvert de plumes, deux ailes, un bec, respiration pulmonaire. Exemples : poule, canard, pigeon."),
        ("sub", "e. Les mammifères"),
        ("body", "Corps couvert de poils, respiration pulmonaire, les petits tètent le lait de leur mère. Exemples : zébu, "
                 "chien, chat, lémurien, homme."),
        ("image", ("scripts/t5/generated_images/u1_s3_b_tableau.jpg",
                   "Tableau comparatif des cinq groupes de vertébrés : peau, respiration et exemple pour chaque groupe.")),
        ("section", "2. Résumé de la classification des animaux"),
        ("body", "Tous les animaux se répartissent en deux grands groupes : les invertébrés (vers, insectes, araignées, "
                 "mille-pattes, crustacés) et les vertébrés (poissons, amphibiens, reptiles, oiseaux, mammifères)."),
    ],
    "exercices": [
        ("Exercice 1 (5 points)", " — Classe chaque vertébré dans le bon groupe : 1. le tilapia · 2. la grenouille · "
                                  "3. le serpent · 4. la poule · 5. le chien."),
        ("Exercice 2 (5 points)", " — Complète : les poissons respirent grâce à des ……… ; les oiseaux ont des ……… ; "
                                  "les mammifères ont des ……… et allaitent leurs petits."),
        ("Exercice 3 (6 points)", " — Vrai ou faux, puis corrige les affirmations fausses :\n"
                                  "1. Les amphibiens vivent uniquement dans l'eau toute leur vie.\n"
                                  "2. Les reptiles ont une peau couverte d'écailles sèches.\n"
                                  "3. Tous les vertébrés ont des poils.\n"
                                  "4. Le zébu est un mammifère."),
        ("Exercice 4 (4 points)", " — Choisis la bonne réponse :\n"
                                  "1. Le caméléon appartient au groupe des : A. amphibiens B. reptiles C. mammifères\n"
                                  "2. La grenouille adulte respire grâce à : A. des branchies B. des poumons C. sa peau uniquement\n"
                                  "3. Les oiseaux se reconnaissent à : A. leurs poils B. leurs plumes C. leurs écailles\n"
                                  "4. Un animal qui allaite ses petits est un : A. poisson B. reptile C. mammifère"),
    ],
    "total": 20,
    "corrige_lines": [
        [("Ex. 1 — ", False), ("1. poisson", True), (" · 2. ", False), ("amphibien", True), (" · 3. ", False),
         ("reptile", True), (" · 4. ", False), ("oiseau", True), (" · 5. ", False), ("mammifère", True)],
        [("Ex. 2 — ", False), ("branchies", True), (" ; ", False), ("plumes", True), (" ; ", False), ("poils", True)],
        [("Ex. 3 — ", False),
         ("1. Faux. Les amphibiens vivent dans l'eau (têtard) puis sur terre (adulte). (1,5 pt)", False)],
        [("2. Vrai. (1,5 pt)", False)],
        [("3. Faux. Seuls les mammifères ont des poils ; les autres groupes ont écailles, peau nue ou plumes. (1,5 pt)", False)],
        [("4. Vrai. (1,5 pt)", False)],
        [("Ex. 4 — ", False), ("1. B", True), (" · 2. ", False), ("B", True), (" · 3. ", False),
         ("B", True), (" · 4. ", False), ("C", True)],
    ],
}

# ---------------------------------------------------------------------------
# SEANCE 4 - Le mode de vie des animaux : habitat et alimentation
# ---------------------------------------------------------------------------
S4 = {
    "num": 4, "title": "Le mode de vie des animaux : habitat et alimentation",
    "theme": THEME, "ras_theme": RAS_THEME_2, "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "décrire l'habitat et le régime alimentaire de quelques animaux locaux.",
    "support": "photos d'animaux dans leur milieu (forêt, rizière, basse-cour), documents, tableau noir.",
    "cover_image": ("scripts/t5/generated_images/u1_s4_a_habitat.jpg",
                     "Des animaux dans leur milieu de vie : forêt, rizière, basse-cour."),
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Cite les cinq groupes de vertébrés.",
         "R.A. : poissons, amphibiens, reptiles, oiseaux, mammifères.", "Questionnement oral", "—", ""),
        ("II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON"),
        ("1. Mise en situation", "Un poisson peut-il vivre dans une rizière asséchée ? Pourquoi ?",
         "R.A. : Non, il a besoin d'eau pour respirer et se déplacer.", "Questionnement oral", "Photos d'animaux", ""),
        ("2. Présentation", "Aujourd'hui nous allons apprendre : « Le mode de vie des animaux : habitat et alimentation ».",
         "Les élèves écoutent.", "Exposé", "Tableau noir, cahier", ""),
        ("3. Observation", "Observez où vivent et ce que mangent : le zébu, la poule, le criquet, le caméléon et le poisson.",
         "R.A. : zébu — prairie, herbe ; poule — basse-cour, graines et insectes ; criquet — champ, feuilles ; "
         "caméléon — arbre, insectes ; poisson — eau, petits organismes aquatiques.", "Observation dirigée", "Photos, documents", ""),
        ("4. Analyse", "Classez ces animaux selon leur alimentation : ceux qui mangent des plantes, ceux qui mangent "
                       "d'autres animaux, ceux qui mangent les deux.",
         "R.A. : zébu — herbivore ; caméléon — carnivore (insectes) ; poule — omnivore (graines et insectes).", "Étude de cas", "Tableau de classement", ""),
        ("5. Synthèse", "Donc, chaque animal vit dans un habitat adapté à ses besoins (forêt, eau, prairie, basse-cour) et "
                        "se nourrit selon son régime : herbivore (plantes), carnivore (autres animaux) ou omnivore (les deux).",
         "Les élèves écoutent et notent.", "Exposé magistral", "Tableau noir", ""),
        ("6. Application", "Ex. 1 — Le chat mange des souris et parfois des croquettes à base de céréales. Quel est son régime ?",
         "Ex. 1 : omnivore (ou carnivore à tendance omnivore selon son alimentation).", "Travail de groupe", "Grande ardoise", ""),
        ("III. ÉVALUATION", "Ex. 1 — Cite un animal herbivore et un animal carnivore de ta région.",
         "Ex. 1 : exemples — zébu (herbivore) ; caméléon (carnivore).", "Évaluation écrite", "Cahier", ""),
    ],
    "lecon": [
        ("section", "1. L'habitat des animaux"),
        ("body", "Chaque animal vit dans un milieu adapté à ses besoins : le poisson a besoin d'eau, l'oiseau niche "
                 "souvent dans les arbres, le zébu paît dans les prairies, la poule vit en basse-cour. Ce milieu de vie "
                 "s'appelle l'habitat."),
        ("section", "2. L'alimentation des animaux"),
        ("body", "Selon ce qu'ils mangent, les animaux se répartissent en trois groupes :"),
        ("sub", "a. Les herbivores"),
        ("body", "Ils mangent uniquement des plantes (herbe, feuilles, fruits). Exemples : zébu, lapin, criquet."),
        ("sub", "b. Les carnivores"),
        ("body", "Ils mangent d'autres animaux. Exemples : caméléon (insectes), chat (souris), crocodile."),
        ("sub", "c. Les omnivores"),
        ("body", "Ils mangent à la fois des plantes et des animaux. Exemples : poule, porc, homme."),
        ("image", ("scripts/t5/generated_images/u1_s4_b_regimes.jpg",
                   "Les trois régimes alimentaires des animaux : herbivore, carnivore, omnivore.")),
        ("section", "3. Pourquoi est-ce important de le savoir ?"),
        ("body", "Connaître l'habitat et le régime alimentaire d'un animal permet de comprendre ce dont il a besoin "
                 "pour vivre, et d'expliquer ce qui peut lui arriver si son milieu est détruit ou pollué."),
    ],
    "exercices": [
        ("Exercice 1 (5 points)", " — Pour chaque animal, cite son régime alimentaire (herbivore, carnivore ou omnivore) : "
                                  "1. le zébu · 2. le caméléon · 3. la poule · 4. le lapin · 5. le chat."),
        ("Exercice 2 (5 points)", " — Associe chaque animal à son habitat principal : 1. le poisson · 2. l'oiseau · "
                                  "3. le zébu · 4. le criquet.\nHabitats disponibles : eau, arbre, prairie, champ."),
        ("Exercice 3 (6 points)", " — Vrai ou faux, puis corrige les affirmations fausses :\n"
                                  "1. Un herbivore mange uniquement des animaux.\n"
                                  "2. La poule est un animal omnivore.\n"
                                  "3. L'habitat est le milieu de vie d'un animal.\n"
                                  "4. Tous les animaux ont le même régime alimentaire."),
        ("Exercice 4 (4 points)", " — Explique en une phrase ce qui peut arriver à un poisson si sa rivière est polluée."),
    ],
    "total": 20,
    "corrige_lines": [
        [("Ex. 1 — ", False), ("1. herbivore", True), (" · 2. ", False), ("carnivore", True), (" · 3. ", False),
         ("omnivore", True), (" · 4. ", False), ("herbivore", True), (" · 5. ", False), ("carnivore", True)],
        [("Ex. 2 — ", False), ("1. eau", True), (" · 2. ", False), ("arbre", True), (" · 3. ", False),
         ("prairie", True), (" · 4. ", False), ("champ", True)],
        [("Ex. 3 — ", False),
         ("1. Faux. Un herbivore mange uniquement des plantes. (1,5 pt)", False)],
        [("2. Vrai. (1,5 pt)", False)],
        [("3. Vrai. (1,5 pt)", False)],
        [("4. Faux. Il existe trois régimes différents : herbivore, carnivore, omnivore. (1,5 pt)", False)],
        [("Ex. 4 — ", False),
         ("il peut tomber malade, manquer de nourriture propre ou mourir, car son habitat est détruit. (4 pts)", False)],
    ],
}

# ---------------------------------------------------------------------------
# SEANCE 5 - Le mode de vie des animaux : reproduction et protection
# ---------------------------------------------------------------------------
S5 = {
    "num": 5, "title": "Le mode de vie des animaux : reproduction et protection",
    "theme": THEME, "ras_theme": RAS_THEME_2, "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "distinguer les animaux ovipares des vivipares et proposer des moyens de protéger les animaux locaux.",
    "support": "photos d'œufs et de petits animaux, documents sur la protection des animaux, tableau noir.",
    "cover_image": ("scripts/t5/generated_images/u1_s5_a_reproduction.jpg",
                     "Reproduction animale : un nid d'œufs (ovipare) et une mère allaitant son petit (vivipare)."),
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Cite un animal herbivore et un animal carnivore.",
         "R.A. : zébu (herbivore), caméléon (carnivore).", "Questionnement oral", "—", ""),
        ("II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON"),
        ("1. Mise en situation", "Comment naissent les poussins ? Et les chatons ?",
         "R.A. : les poussins sortent d'un œuf ; les chatons naissent directement du ventre de leur mère.", "Questionnement oral", "Photos", ""),
        ("2. Présentation", "Aujourd'hui nous allons apprendre : « Le mode de vie des animaux : reproduction et protection ».",
         "Les élèves écoutent.", "Exposé", "Tableau noir, cahier", ""),
        ("3. Observation", "Observez ces photos : une poule et ses œufs, un zébu et son veau nouveau-né.",
         "R.A. : la poule pond des œufs d'où sortent les poussins ; le zébu met au monde directement son veau.", "Observation dirigée", "Photos", ""),
        ("4. Analyse", "Classez poule, poisson, zébu, chat et grenouille selon leur façon de se reproduire.",
         "R.A. : poule, poisson, grenouille — pondent des œufs (ovipares) ; zébu, chat — mettent au monde leurs petits "
         "déjà formés (vivipares).", "Travail de groupe", "Tableau de classement", ""),
        ("5. Synthèse", "Donc, les animaux ovipares pondent des œufs (poule, poisson, grenouille, insectes, reptiles) tandis "
                        "que les animaux vivipares mettent au monde des petits déjà formés que la mère allaite souvent "
                        "(la plupart des mammifères). Protéger les animaux, c'est préserver leur habitat et ne pas les "
                        "chasser ou les capturer de façon excessive.",
         "Les élèves écoutent et notent.", "Exposé magistral", "Tableau noir", ""),
        ("6. Application", "Ex. 1 — Propose deux actions pour protéger les animaux de ta région et leur habitat.",
         "Ex. 1 : ne pas détruire les forêts ; ne pas chasser pendant la période de reproduction.", "Travail de groupe", "Kraft", ""),
        ("III. ÉVALUATION", "Ex. 1 — Qu'est-ce qu'un animal vivipare ?",
         "Ex. 1 : un animal qui met au monde des petits déjà formés, sans passer par un œuf pondu à l'extérieur.", "Évaluation écrite", "Cahier", ""),
    ],
    "lecon": [
        ("section", "1. Les ovipares"),
        ("body", "Les animaux ovipares pondent des œufs ; le petit se développe à l'intérieur de l'œuf puis en sort. "
                 "Exemples : poule, poisson, grenouille, tortue, la plupart des insectes."),
        ("section", "2. Les vivipares"),
        ("body", "Les animaux vivipares mettent au monde des petits déjà formés, qui se sont développés dans le ventre "
                 "de leur mère. La plupart des mammifères sont vivipares et allaitent leurs petits. Exemples : zébu, "
                 "chat, chien, homme."),
        ("image", ("scripts/t5/generated_images/u1_s5_b_ovipare_vivipare.jpg",
                   "Comparaison ovipare (œuf) / vivipare (petit déjà formé à la naissance).")),
        ("section", "3. Préserver les animaux et leur milieu de vie"),
        ("body", "Si l'habitat d'un animal est détruit ou pollué (déforestation, pollution de l'eau, feux de brousse), "
                 "l'animal peut manquer de nourriture, de refuge, ou disparaître de la région."),
        ("body", "Quelques moyens de protéger les animaux et leur milieu :"),
        ("sub", "a. Protéger l'habitat"),
        ("body", "Éviter la déforestation, ne pas polluer les rivières et les lacs."),
        ("sub", "b. Limiter la chasse et la pêche"),
        ("body", "Respecter les périodes de reproduction, ne pas capturer plus que nécessaire."),
        ("sub", "c. Sensibiliser la communauté"),
        ("body", "Expliquer aux autres pourquoi il est important de protéger les animaux locaux et leur environnement."),
    ],
    "exercices": [
        ("Exercice 1 (5 points)", " — Classe ces animaux en « ovipare » ou « vivipare » : 1. la poule · 2. le zébu · "
                                  "3. le poisson · 4. le chat · 5. la grenouille."),
        ("Exercice 2 (5 points)", " — Complète : les animaux ……… pondent des œufs ; les animaux ……… mettent au monde "
                                  "des petits déjà formés et les ……… souvent."),
        ("Exercice 3 (6 points)", " — Vrai ou faux, puis corrige les affirmations fausses :\n"
                                  "1. Tous les mammifères sont ovipares.\n"
                                  "2. La poule est un animal ovipare.\n"
                                  "3. Détruire la forêt peut faire disparaître des animaux de la région.\n"
                                  "4. Il n'est pas nécessaire de protéger les animaux locaux."),
        ("Exercice 4 (4 points)", " — Propose deux actions concrètes pour protéger les animaux et leur habitat dans ta "
                                  "communauté."),
    ],
    "total": 20,
    "corrige_lines": [
        [("Ex. 1 — ", False), ("1. ovipare", True), (" · 2. ", False), ("vivipare", True), (" · 3. ", False),
         ("ovipare", True), (" · 4. ", False), ("vivipare", True), (" · 5. ", False), ("ovipare", True)],
        [("Ex. 2 — ", False), ("ovipares", True), (" ; ", False), ("vivipares", True), (" ; ", False), ("allaitent", True)],
        [("Ex. 3 — ", False),
         ("1. Faux. La plupart des mammifères sont vivipares. (1,5 pt)", False)],
        [("2. Vrai. (1,5 pt)", False)],
        [("3. Vrai. (1,5 pt)", False)],
        [("4. Faux. Protéger les animaux et leur habitat est important pour préserver la nature. (1,5 pt)", False)],
        [("Ex. 4 — ", False),
         ("par exemple : ne pas détruire la forêt ; ne pas polluer les rivières ; ne pas chasser pendant la "
          "reproduction ; sensibiliser les voisins. (2 pts par action pertinente)", False)],
    ],
}

# ---------------------------------------------------------------------------
# SEANCE 6 - Revision - Unite I
# ---------------------------------------------------------------------------
S6 = {
    "num": 6, "title": "Révision — Unité I : Organisation des êtres vivants", "kind": "revision",
    "cover_image": ("scripts/t5/generated_images/u1_bilan_r1.jpg",
                     "Bilan de l'Unité I : classification des animaux et préservation de leur milieu de vie."),
    "theme": THEME, "ras_theme": "Classification des animaux (invertébrés/vertébrés) ; habitat, alimentation, "
                                  "reproduction et protection des animaux",
    "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "traiter un sujet complet portant sur les séances 1 à 5, puis identifier ses points faibles.",
    "support": "sujet recopié au tableau ou polycopié, cahier de brouillon.",
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Sans ouvrir votre cahier : cite un invertébré et un vertébré.",
         "R.A. : criquet (invertébré) ; poisson (vertébré).", "Questionnement oral", "—", ""),
        ("II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON"),
        ("1. Mise en situation", "Aujourd'hui vous traitez un sujet d'entraînement, comme un examen, mais sans note "
                                 "comptant pour la moyenne.",
         "Les élèves s'installent en condition d'examen.", "Consigne", "Tableau noir", ""),
        ("2. Présentation", "Quatre exercices, 20 points. Cahier de brouillon autorisé.",
         "Les élèves écoutent.", "Exposé", "Tableau noir", ""),
        ("3. Passation", "L'enseignant distribue ou recopie le sujet au tableau.",
         "Les élèves traitent le sujet.", "Travail individuel", "Sujet, cahier", ""),
        ("4. Correction collective", "Exercice par exercice, l'enseignant corrige au tableau avec la classe.",
         "Les élèves corrigent au stylo de couleur.", "Correction dirigée", "Tableau noir", ""),
        ("5. Synthèse", "Donc, les points faibles de la classe sont notés au tableau pour être repris.",
         "Les élèves notent leurs deux points faibles.", "Bilan collectif", "Cahier", ""),
        ("III. ÉVALUATION", "L'auto-évaluation tient lieu d'évaluation.",
         "Les élèves calculent leur score.", "Auto-évaluation", "Cahier", ""),
    ],
    "sujet_title": "Sujet d'entraînement — Unité I (Organisation des êtres vivants) — /20",
    "exercices": [
        ("Exercice 1 — Connaissances (4 points)",
         "A. Vrai ou faux (2 points)\n"
         "1. Un vertébré possède une colonne vertébrale.\n"
         "2. Un animal ovipare met au monde des petits déjà formés.\n"
         "B. Complète (2 points)\n"
         "3. Les animaux qui mangent uniquement des plantes sont dits ……………… .\n"
         "4. Le milieu de vie d'un animal s'appelle son ……………… ."),
        ("Exercice 2 — Exercice chiffré (6 points)",
         "Voici cinq animaux observés près d'une rizière malgache : poisson, canard, grenouille, criquet, zébu.\n"
         "1. Classe-les en vertébrés et invertébrés. (2 pts)\n"
         "2. Pour chaque vertébré, indique son groupe (poisson, amphibien, reptile, oiseau ou mammifère). (3 pts)\n"
         "3. Cite le régime alimentaire du zébu. (1 pt)"),
        ("Exercice 3 — Étude de document (6 points)",
         "Un village a brûlé une partie de sa forêt pour agrandir ses champs.\n"
         "1. Quel impact cela peut-il avoir sur les animaux qui vivaient dans cette forêt ? (2 pts)\n"
         "2. Cite deux actions que le village pourrait faire pour limiter cet impact. (2 pts)\n"
         "3. Pourquoi est-il important de protéger l'habitat des animaux ? (2 pts)"),
        ("Exercice 4 — Situation (4 points)",
         "Un camarade affirme : « Tous les animaux pondent des œufs, comme la poule. »\n"
         "Réponds-lui en donnant deux arguments tirés de la leçon."),
    ],
    "total": 20,
    "corrige_lines": [
        [("Exercice 1 (4 pts)", True)],
        [("A. 1. Vrai. 2. Faux (c'est le vivipare). (1 pt par item)", False)],
        [("B. 3. herbivores. 4. habitat. (1 pt par item)", False)],
        [("Renvoi : séances 1, 5.", True)],
        [("Exercice 2 (6 pts)", True)],
        [("1. Vertébrés : poisson, canard, grenouille, zébu. Invertébré : criquet. (2 pts)", False)],
        [("2. Poisson (poisson) ; canard (oiseau) ; grenouille (amphibien) ; zébu (mammifère). (3 pts)", False)],
        [("3. Herbivore. (1 pt)", False)],
        [("Renvoi : séances 1, 3, 4.", True)],
        [("Exercice 3 (6 pts)", True)],
        [("1. Les animaux de la forêt perdent leur habitat : ils peuvent manquer de nourriture, de refuge, ou fuir "
          "ou disparaître de la région. (2 pts)", False)],
        [("2. Par exemple : reboiser une partie des terres, créer des zones protégées, limiter les brûlis. "
          "(2 pts — 1 pt par action pertinente)", False)],
        [("3. Parce que chaque animal a besoin de son milieu pour se nourrir, se reproduire et survivre ; détruire "
          "l'habitat menace toute une espèce. (2 pts)", False)],
        [("Renvoi : séance 5.", True)],
        [("Exercice 4 (4 pts)", True)],
        [("Argument 1 — Certains animaux comme le zébu ou le chat sont vivipares : ils mettent au monde des petits "
          "déjà formés, sans œuf pondu à l'extérieur. (2 pts)", False)],
        [("Argument 2 — Seuls certains groupes (oiseaux, poissons, amphibiens, reptiles, insectes) sont généralement "
          "ovipares ; la plupart des mammifères ne le sont pas. (2 pts)", False)],
        [("Renvoi : séance 5.", True)],
        [("Repères de score : 16-20 acquis · 11-15 à consolider · 6-10 fragile · 0-5 reprendre les séances 1 à 5.", False)],
    ],
}

# ---------------------------------------------------------------------------
# SEANCE 7 - Examen - Unite I
# ---------------------------------------------------------------------------
S7 = {
    "num": 7, "title": "Sujet d'examen ST T5 — Unité I : Organisation des êtres vivants", "kind": "exam",
    "cover_image": ("scripts/t5/generated_images/u1_bilan_e1.jpg",
                     "Sujet d'examen, Unité I : Organisation des êtres vivants."),
    "theme": THEME, "ras_theme": "Classification des animaux (invertébrés/vertébrés) ; habitat, alimentation, "
                                  "reproduction et protection des animaux",
    "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "évaluer la maîtrise des notions des séances 1 à 5 — classification des animaux, habitat, "
                "alimentation, reproduction et protection.",
    "support": "sujet polycopié ou recopié au tableau, cahier de composition.",
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Rappel des consignes d'examen. Aucune question, aucun échange autorisé.",
         "Les élèves rangent cahiers et livres.", "Consigne", "—", ""),
        ("II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON"),
        ("1. Mise en situation", "L'enseignant écrit au tableau le barème de l'épreuve (20 points, quatre exercices).",
         "Les élèves notent le barème.", "Consigne", "Tableau noir", ""),
        ("2. Présentation", "Lecture à voix haute de l'intégralité du sujet avant le début de l'épreuve.",
         "Les élèves suivent et signalent une incompréhension éventuelle.", "Lecture dirigée", "Sujet", ""),
        ("3. Passation", "Surveillance active. L'enseignant ne donne aucune indication sur les réponses.",
         "Les élèves composent individuellement.", "Évaluation écrite", "Sujet, cahier", ""),
        ("4. Ramassage", "Ramassage des copies, vérification du nombre.",
         "Les élèves rendent leur copie.", "Organisation", "Copies", ""),
        ("5. Synthèse", "Donc, la correction sera rendue à la séance suivante.",
         "Les élèves écoutent.", "Bilan", "—", ""),
        ("III. ÉVALUATION", "(L'épreuve elle-même constitue l'évaluation.)",
         "", "Évaluation écrite", "Copies", ""),
    ],
    "sujet_title": "SUJET D'EXAMEN — Unité I : Organisation des êtres vivants — Durée : ____________ — /20",
    "exercices": [
        ("Exercice 1 — Connaissances (4 points)",
         "A. Complète avec le mot exact (2 points)\n"
         "1. Un animal sans colonne vertébrale est un ……………… .\n"
         "2. Un animal qui mange à la fois des plantes et des animaux est dit ……………… .\n"
         "B. QCM — une seule réponse exacte (2 points)\n"
         "1. Les oiseaux se reconnaissent à : A. leurs poils B. leurs plumes C. leurs écailles\n"
         "2. Un animal vivipare : A. pond des œufs B. met au monde des petits déjà formés C. n'a pas de petits"),
        ("Exercice 2 — Exercice chiffré (6 points)",
         "Observe ces cinq animaux : caméléon, poule, carpe, zébu, criquet.\n"
         "1. Classe-les en invertébrés et vertébrés. (2 pts)\n"
         "2. Pour chaque vertébré, donne son groupe précis. (3 pts)\n"
         "3. Cite le régime alimentaire du caméléon. (1 pt)"),
        ("Exercice 3 — Étude de document (6 points)",
         "Une rivière proche d'un village reçoit des déchets plastiques et des eaux usées.\n"
         "1. Quel impact cela peut-il avoir sur les poissons de la rivière ? (2 pts)\n"
         "2. Cite deux actions pour protéger cette rivière et ses habitants. (2 pts)\n"
         "3. Pourquoi est-il important que les villageois agissent ensemble ? (2 pts)"),
        ("Exercice 4 — Situation (4 points)",
         "Ton petit frère pense que tous les animaux naissent de la même façon.\n"
         "Explique-lui, en deux phrases, la différence entre un animal ovipare et un animal vivipare, avec un "
         "exemple pour chacun."),
    ],
    "total": 20,
    "corrige_lines": [
        [("Exercice 1 (4 pts)", True)],
        [("A. 1. invertébré. 2. omnivore. (1 pt par item)", False)],
        [("B. 1. B. 2. B. (1 pt par item)", False)],
        [("Exercice 2 (6 pts)", True)],
        [("1. Vertébrés : caméléon, poule, carpe, zébu. Invertébré : criquet. (2 pts)", False)],
        [("2. Caméléon (reptile) ; poule (oiseau) ; carpe (poisson) ; zébu (mammifère). (3 pts)", False)],
        [("3. Carnivore (il mange des insectes). (1 pt)", False)],
        [("Exercice 3 (6 pts)", True)],
        [("1. Les poissons peuvent être intoxiqués, manquer d'oxygène ou mourir à cause de l'eau polluée. (2 pts)", False)],
        [("2. Par exemple : ne plus jeter de déchets dans la rivière, traiter les eaux usées avant rejet, "
          "sensibiliser les habitants. (2 pts)", False)],
        [("3. Parce que la rivière est une ressource commune ; une seule personne ne peut pas la protéger seule, "
          "il faut l'effort de tout le village. (2 pts)", False)],
        [("Exercice 4 (4 pts)", True)],
        [("Un animal ovipare pond des œufs d'où sortent les petits, comme la poule. Un animal vivipare met au "
          "monde des petits déjà formés, comme le zébu. (2 pts par exemple correct avec explication)", False)],
    ],
}
