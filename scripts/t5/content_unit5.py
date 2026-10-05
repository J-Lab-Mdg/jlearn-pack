# -*- coding: utf-8 -*-
"""Content for UNITE V - Maladies infectieuses (seances 1-5).
Grounded in PE T5 p.116-118 (RAS: decrire les causes, symptomes et modes de
transmission de maladies courantes a Madagascar - paludisme, cholera, peste -
et adopter des comportements de prevention ; distinguer epidemie et
pandemie).
Source verifiee : Madagascar est le pays du monde qui declare le plus de cas
de peste chaque annee, maladie endemique sur les Hautes Terres Centrales
(sante.lefigaro.fr, rfi.fr, Institut Pasteur de Madagascar - pasteur.mg).
"""

THEME = "Maladies infectieuses"
RAS_THEME_1 = "Décrire les causes, les symptômes et les modes de transmission de maladies infectieuses courantes à Madagascar"
RAS_THEME_2 = "Adopter des comportements de prévention et distinguer épidémie et pandémie"
VALEURS = "sens de responsabilité, solidarité, hygiène, civisme sanitaire"

# ---------------------------------------------------------------------------
# SEANCE 1 - Les maladies courantes : causes, symptomes et transmission
# ---------------------------------------------------------------------------
S1 = {
    "num": 1, "title": "Les maladies courantes : causes, symptômes et transmission",
    "theme": THEME, "ras_theme": RAS_THEME_1, "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "décrire les causes, les symptômes et les modes de transmission du paludisme, du choléra et de "
                "la peste.",
    "support": "affiche ou schéma des trois maladies, images de moustique, d'eau sale, de rat et de puce, "
               "tableau noir.",
    "cover_image": ("scripts/t5/generated_images/u5_s1_a_maladies.jpg",
                     "Trois maladies infectieuses courantes à Madagascar : paludisme, choléra, peste."),
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Cite une maladie que tu connais et un symptôme associé.",
         "R.A. : le paludisme — la fièvre ; la grippe — la toux.", "Questionnement oral", "—", ""),
        ("II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON"),
        ("1. Mise en situation", "Pourquoi évite-t-on de boire de l'eau qui n'a pas été traitée ou bouillie ?",
         "R.A. : parce qu'elle peut contenir des microbes qui rendent malade.", "Questionnement oral", "—", ""),
        ("2. Présentation", "Aujourd'hui nous allons apprendre : « Les maladies courantes : causes, symptômes "
                             "et transmission ».",
         "Les élèves écoutent.", "Exposé", "Tableau noir, cahier", ""),
        ("3. Observation", "Observez l'affiche présentant le paludisme, le choléra et la peste. Repérez pour "
                            "chacune : la cause, les symptômes principaux et le mode de transmission.",
         "R.A. : paludisme — parasite transmis par piqûre de moustique, fièvre ; choléra — bactérie transmise "
         "par l'eau ou les aliments sales, diarrhée ; peste — bactérie transmise par la puce du rat, fièvre et "
         "ganglions gonflés.", "Observation dirigée", "Affiche, images", ""),
        ("4. Analyse", "Ces trois maladies se transmettent-elles de la même façon ?",
         "R.A. : non, chacune a un mode de transmission différent : moustique, eau/aliments sales, ou puce.",
         "Étude de cas", "Documents", ""),
        ("5. Synthèse", "Donc, le paludisme est causé par un parasite transmis par la piqûre d'un moustique "
                         "(anophèle) et provoque fièvre, frissons et maux de tête. Le choléra est causé par une "
                         "bactérie transmise par de l'eau ou des aliments contaminés et provoque une diarrhée "
                         "sévère et des vomissements. La peste est causée par une bactérie transmise par la "
                         "puce du rat et provoque fièvre et ganglions gonflés (bubons). Madagascar est le pays "
                         "du monde qui déclare le plus de cas de peste chaque année, surtout sur les Hautes "
                         "Terres Centrales.",
         "Les élèves écoutent et notent.", "Exposé magistral", "Tableau noir", ""),
        ("6. Application", "Ex. 1 — Un enfant a de la fièvre après avoir été piqué par un moustique. De quelle "
                            "maladie peut-il s'agir ?",
         "Ex. 1 : il peut s'agir du paludisme.", "Travail de groupe", "Grande ardoise", ""),
        ("III. ÉVALUATION", "Ex. 1 — Cite le mode de transmission du choléra.",
         "Ex. 1 : par de l'eau ou des aliments contaminés.", "Évaluation écrite", "Cahier", ""),
    ],
    "lecon": [
        ("section", "1. Le paludisme"),
        ("body", "Causé par un parasite transmis par la piqûre d'un moustique appelé anophèle. Symptômes : "
                 "fièvre, frissons, maux de tête, fatigue intense. C'est l'une des maladies infectieuses les "
                 "plus fréquentes à Madagascar, surtout dans les zones chaudes et humides."),
        ("section", "2. Le choléra"),
        ("body", "Causé par une bactérie (Vibrio cholerae) transmise par de l'eau ou des aliments contaminés "
                 "par des matières fécales. Symptômes : diarrhée sévère et soudaine, vomissements, "
                 "déshydratation rapide, qui peut être dangereuse si elle n'est pas traitée rapidement."),
        ("image", ("scripts/t5/generated_images/u5_s1_b_transmission.jpg",
                   "Les modes de transmission : moustique (paludisme), eau sale (choléra), puce du rat (peste).")),
        ("section", "3. La peste"),
        ("body", "Causée par une bactérie (Yersinia pestis) transmise à l'homme par la piqûre d'une puce qui a "
                 "mordu un rat infecté. Symptômes : fièvre élevée, ganglions gonflés et douloureux (bubons). "
                 "Madagascar est le pays du monde qui déclare le plus de cas de peste chaque année ; la maladie "
                 "reste présente de façon endémique sur les Hautes Terres Centrales."),
        ("section", "4. Pourquoi comprendre la transmission ?"),
        ("body", "Connaître le mode de transmission d'une maladie permet de savoir comment s'en protéger : "
                 "éviter les piqûres de moustiques, boire une eau propre, limiter le contact avec les rats et "
                 "leurs puces. Ces moyens de prévention seront étudiés dans la séance suivante."),
    ],
    "exercices": [
        ("Exercice 1 (6 points)", " — Pour chacune de ces maladies, cite sa cause et son mode de transmission : "
                                  "1. le paludisme · 2. le choléra · 3. la peste."),
        ("Exercice 2 (4 points)", " — Associe chaque symptôme à la maladie correspondante : 1. ganglions gonflés "
                                  "(bubons) · 2. diarrhée sévère et vomissements · 3. fièvre après une piqûre de "
                                  "moustique — A. paludisme · B. choléra · C. peste."),
        ("Exercice 3 (6 points)", " — Vrai ou faux, puis corrige les affirmations fausses :\n"
                                  "1. Le paludisme se transmet par une eau contaminée.\n"
                                  "2. Le choléra provoque une diarrhée sévère.\n"
                                  "3. La peste est transmise par la puce du rat.\n"
                                  "4. Madagascar ne connaît jamais de cas de peste."),
        ("Exercice 4 (4 points)", " — Explique en deux phrases pourquoi il est utile de connaître le mode de "
                                  "transmission d'une maladie."),
    ],
    "total": 20,
    "corrige_lines": [
        [("Ex. 1 — ", False), ("1. parasite / piqûre de moustique ; 2. bactérie / eau ou aliments contaminés ; "
                                "3. bactérie / piqûre de puce du rat. (2 pts par maladie correcte)", False)],
        [("Ex. 2 — ", False), ("1-C", True), (" · 2-", False), ("B", True), (" · 3-", False), ("A", True)],
        [("Ex. 3 — ", False),
         ("1. Faux. Le paludisme se transmet par la piqûre d'un moustique. (1,5 pt)", False)],
        [("2. Vrai. (1,5 pt)", False)],
        [("3. Vrai. (1,5 pt)", False)],
        [("4. Faux. Madagascar est le pays qui déclare le plus de cas de peste chaque année dans le monde. "
          "(1,5 pt)", False)],
        [("Ex. 4 — ", False), ("Connaître le mode de transmission permet de savoir comment éviter la maladie "
                                "(se protéger des moustiques, boire une eau propre, éviter les rats), ce qui "
                                "aide à la prévenir efficacement. (4 pts)", False)],
    ],
}

# ---------------------------------------------------------------------------
# SEANCE 2 - Prevention et comportements a adopter en cas de maladie
# ---------------------------------------------------------------------------
S2 = {
    "num": 2, "title": "Prévention et comportements à adopter en cas de maladie",
    "theme": THEME, "ras_theme": RAS_THEME_2, "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "citer des moyens de prévention des maladies infectieuses courantes et les comportements à "
                "adopter en cas de maladie.",
    "support": "moustiquaire imprégnée, image de centre de santé (CSB), affiche sur le lavage des mains, "
               "tableau noir.",
    "cover_image": ("scripts/t5/generated_images/u5_s2_a_prevention.jpg",
                     "Des moyens de prévention : moustiquaire imprégnée, eau potable, lavage des mains, centre de santé."),
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Cite le mode de transmission de la peste.",
         "R.A. : par la piqûre d'une puce qui a mordu un rat infecté.", "Questionnement oral", "—", ""),
        ("II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON"),
        ("1. Mise en situation", "Que peut-on faire pour éviter d'être piqué par un moustique la nuit ?",
         "R.A. : dormir sous une moustiquaire, surtout une moustiquaire imprégnée.", "Questionnement oral", "—", ""),
        ("2. Présentation", "Aujourd'hui nous allons apprendre : « Prévention et comportements à adopter en "
                             "cas de maladie ».",
         "Les élèves écoutent.", "Exposé", "Tableau noir, cahier", ""),
        ("3. Observation", "Observez les affiches de prévention : moustiquaire imprégnée, eau potable ou "
                            "bouillie, lavage des mains, lutte contre les rats. Associez chaque moyen à la "
                            "maladie qu'il prévient.",
         "R.A. : moustiquaire — paludisme ; eau potable et lavage des mains — choléra ; lutte contre les rats — "
         "peste.", "Observation dirigée", "Affiches", ""),
        ("4. Analyse", "Que doit faire une personne qui présente des symptômes de l'une de ces maladies ?",
         "R.A. : se rendre rapidement à un centre de santé (CSB) ou un hôpital, sans attendre.",
         "Étude de cas", "Documents", ""),
        ("5. Synthèse", "Donc, pour se protéger du paludisme, on dort sous une moustiquaire imprégnée et on "
                         "élimine les eaux stagnantes où pondent les moustiques. Pour se protéger du choléra, on "
                         "boit de l'eau potable ou bouillie et on se lave les mains avant de manger. Pour se "
                         "protéger de la peste, on lutte contre les rats et leurs puces et on évite de "
                         "manipuler des rats morts. En cas de symptômes, il faut se rendre rapidement à un "
                         "centre de santé de base (CSB) ou un hôpital.",
         "Les élèves écoutent et notent.", "Exposé magistral", "Tableau noir", ""),
        ("6. Application", "Ex. 1 — Cite deux gestes pour éviter le choléra.",
         "Ex. 1 : boire de l'eau potable ou bouillie, se laver les mains avant de manger.", "Travail de groupe",
         "Grande ardoise", ""),
        ("III. ÉVALUATION", "Ex. 1 — Que doit faire une personne malade dès l'apparition de symptômes graves ?",
         "Ex. 1 : se rendre rapidement à un centre de santé (CSB) ou un hôpital.", "Évaluation écrite", "Cahier",
         ""),
    ],
    "lecon": [
        ("section", "1. Prévenir le paludisme"),
        ("body", "Dormir sous une moustiquaire, de préférence imprégnée d'insecticide ; éliminer les eaux "
                 "stagnantes autour de la maison (elles servent de lieu de ponte aux moustiques) ; porter des "
                 "vêtements couvrants le soir."),
        ("section", "2. Prévenir le choléra"),
        ("body", "Boire de l'eau potable ou bouillie ; se laver les mains avec de l'eau et du savon avant de "
                 "manger et après être allé aux toilettes ; bien cuire les aliments et les conserver proprement ; "
                 "utiliser des latrines propres."),
        ("image", ("scripts/t5/generated_images/u5_s2_a_prevention.jpg",
                   "Des moyens de prévention : moustiquaire imprégnée, eau potable, lavage des mains, centre de santé.")),
        ("section", "3. Prévenir la peste"),
        ("body", "Lutter contre la présence des rats (bien fermer les récipients de nourriture, nettoyer "
                 "régulièrement) ; éviter de manipuler des rats morts à mains nues ; signaler aux autorités "
                 "sanitaires toute mortalité anormale de rats."),
        ("section", "4. Comportements à adopter en cas de maladie"),
        ("body", "Si une personne présente des symptômes de l'une de ces maladies (forte fièvre, diarrhée "
                 "sévère, ganglions gonflés), il faut : se rendre rapidement à un centre de santé de base (CSB) "
                 "ou un hôpital ; ne jamais attendre que les symptômes s'aggravent ; suivre le traitement "
                 "prescrit jusqu'au bout ; se reposer et bien s'hydrater."),
        ("section", "5. La responsabilité de chacun"),
        ("body", "Chaque personne a un rôle à jouer : en respectant les gestes de prévention et en consultant "
                 "rapidement un agent de santé en cas de symptômes, on se protège soi-même et on protège sa "
                 "famille et sa communauté."),
    ],
    "exercices": [
        ("Exercice 1 (6 points)", " — Pour chacune de ces maladies, cite un moyen de prévention : 1. le "
                                  "paludisme · 2. le choléra · 3. la peste."),
        ("Exercice 2 (4 points)", " — Que doit faire une personne qui présente une forte fièvre et des "
                                  "ganglions gonflés ?"),
        ("Exercice 3 (6 points)", " — Vrai ou faux, puis corrige les affirmations fausses :\n"
                                  "1. Il faut attendre que les symptômes s'aggravent avant de consulter un "
                                  "agent de santé.\n"
                                  "2. Éliminer les eaux stagnantes aide à prévenir le paludisme.\n"
                                  "3. Se laver les mains avant de manger aide à prévenir le choléra.\n"
                                  "4. Il faut arrêter un traitement dès que l'on se sent un peu mieux."),
        ("Exercice 4 (4 points)", " — Propose un message de prévention court (une phrase) pour chacune des "
                                  "trois maladies étudiées."),
    ],
    "total": 20,
    "corrige_lines": [
        [("Ex. 1 — ", False), ("1. dormir sous moustiquaire imprégnée ; 2. boire une eau potable ou bouillie ; "
                                "3. lutter contre les rats et leurs puces. (2 pts par moyen cohérent)", False)],
        [("Ex. 2 — ", False), ("Se rendre rapidement à un centre de santé (CSB) ou un hôpital. (4 pts)", False)],
        [("Ex. 3 — ", False),
         ("1. Faux. Il faut consulter rapidement, sans attendre. (1,5 pt)", False)],
        [("2. Vrai. (1,5 pt)", False)],
        [("3. Vrai. (1,5 pt)", False)],
        [("4. Faux. Il faut suivre le traitement prescrit jusqu'au bout, même en se sentant mieux. (1,5 pt)", False)],
        [("Ex. 4 — ", False), ("Réponse libre : par exemple, « Dors sous une moustiquaire pour éviter le "
                                "paludisme » ; « Bois une eau propre pour éviter le choléra » ; « Évite les rats "
                                "pour éviter la peste ». (4 pts — 1,33 pt par message cohérent)", False)],
    ],
}

# ---------------------------------------------------------------------------
# SEANCE 3 - Epidemie et pandemie : enquete et messages educatifs
# ---------------------------------------------------------------------------
S3 = {
    "num": 3, "title": "Épidémie et pandémie : enquête et messages éducatifs",
    "theme": THEME, "ras_theme": RAS_THEME_2, "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "distinguer épidémie et pandémie, et concevoir un message éducatif de prévention pour la "
                "communauté.",
    "support": "carte ou schéma de propagation d'une maladie, exemples d'affiches de sensibilisation, tableau "
               "noir.",
    "cover_image": ("scripts/t5/generated_images/u5_s3_a_epidemie_pandemie.jpg",
                     "La différence entre épidémie (une région) et pandémie (plusieurs pays/continents)."),
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Que doit faire une personne malade dès l'apparition de symptômes graves ?",
         "R.A. : se rendre rapidement à un centre de santé (CSB) ou un hôpital.", "Questionnement oral", "—", ""),
        ("II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON"),
        ("1. Mise en situation", "As-tu déjà entendu les mots « épidémie » ou « pandémie » ? Que signifient-"
                                  "ils, selon toi ?",
         "R.A. : réponses libres ; beaucoup de maladies qui touchent beaucoup de monde en même temps.",
         "Questionnement oral", "—", ""),
        ("2. Présentation", "Aujourd'hui nous allons apprendre : « Épidémie et pandémie : enquête et messages "
                             "éducatifs ».",
         "Les élèves écoutent.", "Exposé", "Tableau noir, cahier", ""),
        ("3. Observation", "Observez deux cartes : l'une montre une maladie présente dans une seule région, "
                            "l'autre montre une maladie présente sur plusieurs continents.",
         "R.A. : la première carte montre un petit nombre de zones touchées, la seconde en montre beaucoup "
         "partout dans le monde.", "Observation dirigée", "Cartes ou schémas", ""),
        ("4. Analyse", "Quelle différence de taille ou d'étendue remarquez-vous entre les deux situations ?",
         "R.A. : la première est limitée à une région ou un pays, la seconde touche plusieurs pays ou "
         "continents.", "Étude de cas", "Documents", ""),
        ("5. Synthèse", "Donc, une épidémie est l'apparition d'un grand nombre de cas d'une maladie dans une "
                         "région ou un pays, pendant une période donnée. Une pandémie est une épidémie qui "
                         "s'est propagée à plusieurs pays, voire à plusieurs continents. Face à une épidémie, "
                         "les services de santé mènent une enquête pour trouver l'origine de la maladie et "
                         "diffusent des messages éducatifs pour informer et protéger la population.",
         "Les élèves écoutent et notent.", "Exposé magistral", "Tableau noir", ""),
        ("6. Application", "En groupes, créez un message éducatif court (slogan et dessin) pour sensibiliser "
                            "votre communauté à la prévention d'une des trois maladies étudiées.",
         "Les élèves créent une affiche de sensibilisation.", "Travail de groupe", "Feuilles, crayons de "
         "couleur", ""),
        ("III. ÉVALUATION", "Ex. 1 — Quelle est la différence entre une épidémie et une pandémie ?",
         "Ex. 1 : l'épidémie touche une région ou un pays ; la pandémie touche plusieurs pays ou continents.",
         "Évaluation écrite", "Cahier", ""),
    ],
    "lecon": [
        ("section", "1. Qu'est-ce qu'une épidémie ?"),
        ("body", "Une épidémie est l'apparition d'un grand nombre de cas d'une même maladie, dans une région "
                 "ou un pays, pendant une période donnée, bien plus que ce qui est habituellement observé."),
        ("section", "2. Qu'est-ce qu'une pandémie ?"),
        ("body", "Une pandémie est une épidémie qui s'est propagée à plusieurs pays, voire à plusieurs "
                 "continents. Une pandémie touche donc un bien plus grand nombre de personnes qu'une épidémie "
                 "limitée à une seule région."),
        ("image", ("scripts/t5/generated_images/u5_s3_a_epidemie_pandemie.jpg",
                   "La différence entre épidémie (une région) et pandémie (plusieurs pays/continents).")),
        ("section", "3. L'enquête épidémiologique"),
        ("body", "Face à une épidémie, les services de santé mènent une enquête : ils recherchent l'origine de "
                 "la maladie, comptent les cas, identifient le mode de transmission, et décident des mesures à "
                 "prendre pour arrêter sa propagation."),
        ("section", "4. Les messages éducatifs"),
        ("body", "Pour protéger la population, les services de santé et les écoles diffusent des messages "
                 "éducatifs : affiches, annonces radio, discussions en classe, qui expliquent comment prévenir "
                 "la maladie et quoi faire en cas de symptômes."),
        ("section", "5. Le rôle de chaque élève"),
        ("body", "Chaque élève peut participer à la prévention en partageant ce qu'il a appris avec sa famille "
                 "et sa communauté : les gestes de prévention, et l'importance de consulter rapidement un agent "
                 "de santé en cas de symptômes."),
    ],
    "exercices": [
        ("Exercice 1 (5 points)", " — Définis en une phrase : 1. une épidémie · 2. une pandémie."),
        ("Exercice 2 (5 points)", " — Pour chaque situation, indique s'il s'agit plutôt d'une épidémie ou d'une "
                                  "pandémie : 1. une maladie touche plusieurs villages d'une même région · "
                                  "2. une maladie touche des pays sur plusieurs continents en même temps."),
        ("Exercice 3 (6 points)", " — Vrai ou faux, puis corrige les affirmations fausses :\n"
                                  "1. Une pandémie est limitée à un seul village.\n"
                                  "2. Les services de santé mènent une enquête lors d'une épidémie.\n"
                                  "3. Les messages éducatifs n'ont aucune utilité en cas d'épidémie.\n"
                                  "4. Chaque élève peut participer à la prévention des maladies."),
        ("Exercice 4 (4 points)", " — Rédige un court message éducatif (une ou deux phrases) pour sensibiliser "
                                  "ta communauté à la prévention du paludisme."),
    ],
    "total": 20,
    "corrige_lines": [
        [("Ex. 1 — ", False), ("1. apparition d'un grand nombre de cas d'une maladie dans une région ou un "
                                "pays pendant une période donnée ; 2. épidémie propagée à plusieurs pays ou "
                                "continents. (2,5 pts par définition correcte)", False)],
        [("Ex. 2 — ", False), ("1. épidémie", True), (" · 2. ", False), ("pandémie", True)],
        [("Ex. 3 — ", False),
         ("1. Faux. Une pandémie touche plusieurs pays ou continents. (1,5 pt)", False)],
        [("2. Vrai. (1,5 pt)", False)],
        [("3. Faux. Les messages éducatifs informent et protègent la population. (1,5 pt)", False)],
        [("4. Vrai. (1,5 pt)", False)],
        [("Ex. 4 — ", False), ("Réponse libre : par exemple, « Dors sous une moustiquaire chaque nuit pour te "
                                "protéger du paludisme, et parles-en autour de toi ! ». (4 pts)", False)],
    ],
}

# ---------------------------------------------------------------------------
# SEANCE 4 - Revision Unite V
# ---------------------------------------------------------------------------
S4 = {
    "num": 4, "title": "Révision — Unité V : Maladies infectieuses", "kind": "revision",
    "cover_image": ("scripts/t5/generated_images/u5_bilan_r1.jpg",
                     "Bilan de l'Unité V : causes, prévention des maladies infectieuses, épidémie et pandémie."),
    "theme": THEME, "ras_theme": "Causes, symptômes et transmission des maladies courantes ; prévention et "
                                  "comportements ; épidémie et pandémie",
    "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "traiter un sujet complet portant sur les séances 1 à 3, puis identifier ses points faibles.",
    "support": "sujet recopié au tableau ou polycopié, cahier de brouillon.",
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Sans ouvrir votre cahier : cite une maladie et son mode de transmission.",
         "R.A. : le paludisme — piqûre de moustique.", "Questionnement oral", "—", ""),
        ("II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON"),
        ("1. Mise en situation", "Aujourd'hui vous traitez un sujet d'entraînement, comme un examen, mais sans "
                                  "note comptant pour la moyenne.",
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
    "sujet_title": "Sujet d'entraînement — Unité V (Maladies infectieuses) — /20",
    "exercices": [
        ("Exercice 1 — Connaissances (4 points)",
         "A. Vrai ou faux (2 points)\n"
         "1. Le paludisme est transmis par la piqûre d'un moustique.\n"
         "2. Une épidémie touche toujours plusieurs continents.\n"
         "B. Complète (2 points)\n"
         "3. Le choléra est causé par une ……………… transmise par de l'eau ou des aliments contaminés.\n"
         "4. Madagascar est le pays qui déclare le plus de cas de ……………… chaque année dans le monde."),
        ("Exercice 2 — Exercice chiffré (6 points)",
         "Un village observe plusieurs cas de diarrhée sévère après l'utilisation d'un puits non protégé.\n"
         "1. De quelle maladie s'agit-il probablement ? (2 pts)\n"
         "2. Cite deux moyens de prévenir cette maladie. (2 pts)\n"
         "3. Que doivent faire les malades sans attendre ? (2 pts)"),
        ("Exercice 3 — Étude de document (6 points)",
         "Une maladie apparaît dans plusieurs villages d'une même région malgache, sans se propager ailleurs "
         "dans le monde.\n"
         "1. S'agit-il d'une épidémie ou d'une pandémie ? Justifie. (2 pts)\n"
         "2. Que font les services de santé pour comprendre l'origine de cette maladie ? (2 pts)\n"
         "3. Pourquoi est-il utile de diffuser des messages éducatifs à la population ? (2 pts)"),
        ("Exercice 4 — Situation (4 points)",
         "Un camarade dit : « On n'a pas besoin de dormir sous une moustiquaire si on se sent en bonne santé. »\n"
         "Réponds-lui en expliquant pourquoi la prévention est utile même sans symptômes."),
    ],
    "total": 20,
    "corrige_lines": [
        [("Exercice 1 (4 pts)", True)],
        [("A. 1. Vrai. 2. Faux (c'est le cas d'une pandémie, pas d'une épidémie). (1 pt par item)", False)],
        [("B. 3. bactérie. 4. peste. (1 pt par item)", False)],
        [("Renvoi : séances 1, 3.", True)],
        [("Exercice 2 (6 pts)", True)],
        [("1. Le choléra. (2 pts)", False)],
        [("2. Boire une eau potable ou bouillie ; se laver les mains avant de manger. (2 pts)", False)],
        [("3. Se rendre rapidement à un centre de santé (CSB) ou un hôpital. (2 pts)", False)],
        [("Renvoi : séances 1, 2.", True)],
        [("Exercice 3 (6 pts)", True)],
        [("1. Une épidémie, car elle reste limitée à une seule région sans se propager à d'autres pays. (2 pts)", False)],
        [("2. Ils mènent une enquête : rechercher l'origine, compter les cas, identifier le mode de "
          "transmission. (2 pts)", False)],
        [("3. Pour informer la population sur les gestes de prévention et limiter la propagation de la "
          "maladie. (2 pts)", False)],
        [("Renvoi : séance 3.", True)],
        [("Exercice 4 (4 pts)", True)],
        [("La prévention protège avant même l'apparition de symptômes : une personne peut être piquée et "
          "tomber malade à tout moment, donc il faut toujours se protéger, même en bonne santé. (4 pts)", False)],
        [("Renvoi : séance 2.", True)],
        [("Repères de score : 16-20 acquis · 11-15 à consolider · 6-10 fragile · 0-5 reprendre les séances 1 à 3.", False)],
    ],
}

# ---------------------------------------------------------------------------
# SEANCE 5 - Examen Unite V
# ---------------------------------------------------------------------------
S5 = {
    "num": 5, "title": "Sujet d'examen ST T5 — Unité V : Maladies infectieuses", "kind": "exam",
    "cover_image": ("scripts/t5/generated_images/u5_bilan_e1.jpg",
                     "Sujet d'examen, Unité V : Maladies infectieuses."),
    "theme": THEME, "ras_theme": "Causes, symptômes et transmission des maladies courantes ; prévention et "
                                  "comportements ; épidémie et pandémie",
    "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "évaluer la maîtrise des notions des séances 1 à 3 — maladies infectieuses, prévention, "
                "épidémie et pandémie.",
    "support": "sujet polycopié ou recopié au tableau, cahier de composition.",
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Rappel des consignes d'examen. Aucune question, aucun échange autorisé.",
         "Les élèves rangent cahiers et livres.", "Consigne", "—", ""),
        ("II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON"),
        ("1. Mise en situation", "L'enseignant écrit au tableau le barème de l'épreuve (20 points, quatre "
                                  "exercices).",
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
    "sujet_title": "SUJET D'EXAMEN — Unité V : Maladies infectieuses — Durée : ____________ — /20",
    "exercices": [
        ("Exercice 1 — Connaissances (4 points)",
         "A. Complète avec le mot exact (2 points)\n"
         "1. Le paludisme est causé par un ……………… transmis par la piqûre d'un moustique.\n"
         "2. Une épidémie propagée à plusieurs pays ou continents s'appelle une ……………… .\n"
         "B. QCM — une seule réponse exacte (2 points)\n"
         "1. La peste est transmise par : A. l'eau sale B. la puce du rat C. un moustique\n"
         "2. En cas de symptômes graves, il faut : A. attendre quelques jours B. se rendre rapidement à un "
         "centre de santé C. ne rien faire"),
        ("Exercice 2 — Exercice chiffré (6 points)",
         "Un quartier connaît plusieurs cas de forte fièvre accompagnée de ganglions gonflés, après la mort "
         "inhabituelle de nombreux rats.\n"
         "1. De quelle maladie s'agit-il probablement ? (2 pts)\n"
         "2. Cite son mode de transmission. (2 pts)\n"
         "3. Cite un geste de prévention adapté à cette situation. (2 pts)"),
        ("Exercice 3 — Étude de document (6 points)",
         "Une maladie respiratoire touche en quelques mois des pays d'Afrique, d'Asie et d'Europe.\n"
         "1. S'agit-il d'une épidémie ou d'une pandémie ? Justifie. (2 pts)\n"
         "2. Pourquoi les services de santé mènent-ils une enquête dans cette situation ? (2 pts)\n"
         "3. Cite un exemple de message éducatif utile dans ce contexte. (2 pts)"),
        ("Exercice 4 — Situation (4 points)",
         "Ton petit frère refuse de se laver les mains avant de manger.\n"
         "Explique-lui, en deux phrases, pourquoi ce geste est important pour prévenir une maladie comme le "
         "choléra."),
    ],
    "total": 20,
    "corrige_lines": [
        [("Exercice 1 (4 pts)", True)],
        [("A. 1. parasite. 2. pandémie. (1 pt par item)", False)],
        [("B. 1. B. 2. B. (1 pt par item)", False)],
        [("Exercice 2 (6 pts)", True)],
        [("1. La peste. (2 pts)", False)],
        [("2. Par la piqûre d'une puce qui a mordu un rat infecté. (2 pts)", False)],
        [("3. Lutter contre les rats (nettoyer, bien fermer la nourriture) et éviter de manipuler les rats "
          "morts. (2 pts)", False)],
        [("Exercice 3 (6 pts)", True)],
        [("1. Une pandémie, car elle touche plusieurs continents. (2 pts)", False)],
        [("2. Pour comprendre l'origine et le mode de transmission de la maladie et mieux la combattre. "
          "(2 pts)", False)],
        [("3. Par exemple : « Lave-toi les mains régulièrement et porte un masque en cas de toux. » (2 pts)", False)],
        [("Exercice 4 (4 pts)", True)],
        [("Se laver les mains élimine les microbes qui peuvent être présents sur la peau ; sans ce geste, on "
          "peut avaler des bactéries comme celle du choléra en mangeant. (4 pts)", False)],
    ],
}
