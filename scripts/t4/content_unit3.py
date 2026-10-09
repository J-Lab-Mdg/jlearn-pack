# -*- coding: utf-8 -*-
"""Content for UNITE III - Objet technique (seances 18-26).
Grounded in PE T4 (RAS: Classer divers materiaux selon leurs proprietes ;
detecter le meilleur moyen de joindre divers materiaux ; identifier les
besoins a l'origine de quelques outils simples ; expliquer l'action d'une
force sur un objet pour engendrer un mouvement).
"""

THEME = "Objet technique"
RAS_THEME_1 = "Classer divers matériaux selon leurs propriétés"
RAS_THEME_2 = "Détecter le meilleur moyen de joindre divers matériaux"
RAS_THEME_3 = "Identifier les besoins à l'origine de quelques outils simples"
RAS_THEME_4 = "Expliquer l'action d'une force sur un objet pour engendrer un mouvement"
VALEURS = "rigueur, respect mutuel"

# ---------------------------------------------------------------------------
# SEANCE 1 (globale 18) - Les types de materiaux
# ---------------------------------------------------------------------------
S1 = {
    "num": 1, "title": "Les types de matériaux",
    "theme": THEME, "ras_theme": RAS_THEME_1, "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "identifier et nommer les principaux types de matériaux utilisés dans les objets techniques.",
    "support": "échantillons d'objets ou de matériaux (bois, métal, plastique, tissu, raphia, argile), tableau noir.",
    "cover_image": ("scripts/t4/generated_images/u3_s1_a_materiaux.jpg",
                     "Des objets malgaches du quotidien, faits de matériaux très différents."),
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Cite un objet que tu utilises tous les jours.",
         "R.A. : un stylo, une chaise, un panier…", "Questionnement oral", "—", ""),
        ("II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON"),
        ("1. Mise en situation", "Voici une cuillère en bois et une cuillère en métal. Sont-elles faites de la "
                                 "même matière ?",
         "R.A. : non, l'une est en bois, l'autre en métal.", "Questionnement oral", "Deux cuillères", ""),
        ("2. Présentation", "Aujourd'hui nous allons apprendre : « Les types de matériaux ».",
         "Les élèves écoutent.", "Exposé", "Tableau noir, cahier", ""),
        ("3. Observation", "Observez les objets apportés : de quoi sont-ils faits ?",
         "R.A. : bois, métal, plastique, tissu, raphia, argile.", "Observation dirigée", "Échantillons d'objets", ""),
        ("4. Analyse", "Pourquoi un panier est-il tressé en raphia et une marmite en métal ? Peut-on les "
                       "échanger ?",
         "R.A. : chaque matériau a des qualités différentes, adaptées à l'usage de l'objet.", "Étude de cas", "Échantillons d'objets", ""),
        ("5. Synthèse", "Donc, on distingue plusieurs grands types de matériaux : le bois, le métal, le "
                        "plastique, le tissu, le verre et le caoutchouc. Le choix du matériau dépend de "
                        "l'usage de l'objet.",
         "Les élèves écoutent et notent.", "Exposé magistral", "Tableau noir", ""),
        ("6. Application", "Ex. 1 — Classe ces objets selon leur matériau principal : angady, lamba, marmite, "
                           "sobika, bouteille.",
         "Ex. 1 : angady — métal ; lamba — tissu ; marmite — métal ou argile ; sobika — raphia/bambou ; "
         "bouteille — plastique ou verre.", "Travail de groupe", "Cahier", ""),
        ("III. ÉVALUATION", "Ex. 1 — Cite trois types de matériaux et un objet fait avec chacun.",
         "Ex. 1 : bois — table ; métal — couteau ; tissu — vêtement.", "Évaluation écrite", "Cahier", ""),
    ],
    "lecon": [
        ("section", "1. Qu'est-ce qu'un matériau ?"),
        ("body", "Un matériau est la matière avec laquelle un objet est fabriqué. Un même objet peut parfois "
                 "être fait de plusieurs matériaux différents assemblés ensemble."),
        ("section", "2. Les grands types de matériaux"),
        ("sub", "a. Le bois"),
        ("body", "Utilisé pour les meubles, les manches d'outils, les charpentes. Facile à travailler, mais "
                 "peut pourrir avec l'humidité."),
        ("sub", "b. Le métal"),
        ("body", "Utilisé pour les outils, les marmites, les clous. Solide et résistant, mais peut rouiller."),
        ("sub", "c. Le plastique"),
        ("body", "Utilisé pour les bassines, les bouteilles, les jouets. Léger et imperméable, mais peut se "
                 "casser au froid ou se déformer à la chaleur."),
        ("sub", "d. Le tissu"),
        ("body", "Utilisé pour les vêtements, les lambas, les sacs. Souple, mais peu résistant à la déchirure."),
        ("sub", "e. Le verre"),
        ("body", "Utilisé pour les bouteilles, les vitres. Transparent, mais fragile et cassant."),
        ("sub", "f. Le caoutchouc"),
        ("body", "Utilisé pour les pneus, les semelles de chaussures. Élastique et résistant à l'eau."),
        ("image", ("scripts/t4/generated_images/u3_s1_b_classification.jpg",
                   "Les six grandes familles de matériaux et un exemple d'objet pour chacune.")),
        ("section", "3. Des matériaux locaux à Madagascar"),
        ("body", "À Madagascar, on utilise aussi beaucoup de matériaux naturels locaux : le raphia et le "
                 "bambou (volotsangana) pour les paniers (sobika) et les nattes, l'argile pour les marmites et "
                 "les briques, le bois de certains arbres pour la charpente et les pirogues."),
    ],
    "exercices": [
        ("Exercice 1 (5 points)", " — Cite les six grands types de matériaux vus en classe."),
        ("Exercice 2 (5 points)", " — Associe chaque objet à son matériau principal : 1. l'angady · "
                                  "2. le lamba · 3. la bouteille d'eau · 4. le pneu de vélo · 5. la vitre "
                                  "de fenêtre.\nMatériaux : métal, tissu, plastique, caoutchouc, verre."),
        ("Exercice 3 (6 points)", " — Vrai ou faux, puis corrige les affirmations fausses :\n"
                                  "1. Le bois ne pourrit jamais, même avec l'humidité.\n"
                                  "2. Le métal peut rouiller.\n"
                                  "3. Le verre est un matériau très résistant aux chocs.\n"
                                  "4. Le raphia est un matériau local utilisé à Madagascar pour tresser des "
                                  "paniers."),
        ("Exercice 4 (4 points)", " — Choisis la bonne réponse :\n"
                                  "1. Un sobika (panier tressé) est traditionnellement fait de : A. métal "
                                  "B. raphia ou bambou C. verre\n"
                                  "2. Le matériau le plus adapté pour un pneu de vélo est : A. le verre "
                                  "B. le caoutchouc C. l'argile\n"
                                  "3. Un matériau transparent et fragile est : A. le bois B. le verre C. le "
                                  "tissu\n"
                                  "4. Le choix d'un matériau pour un objet dépend surtout : A. de sa "
                                  "couleur préférée B. de l'usage de l'objet C. du hasard"),
    ],
    "total": 20,
    "corrige_lines": [
        [("Ex. 1 — ", False), ("bois, métal, plastique, tissu, verre, caoutchouc.", True)],
        [("Ex. 2 — ", False), ("1 → métal", True), (" · 2 → ", False), ("tissu", True), (" · 3 → ", False),
         ("plastique", True), (" · 4 → ", False), ("caoutchouc", True), (" · 5 → ", False), ("verre", True)],
        [("Ex. 3 — ", False),
         ("1. Faux. Le bois peut pourrir avec l'humidité. (1,5 pt)", False)],
        [("2. Vrai. (1,5 pt)", False)],
        [("3. Faux. Le verre est au contraire fragile et cassant. (1,5 pt)", False)],
        [("4. Vrai. (1,5 pt)", False)],
        [("Ex. 4 — ", False), ("1. B", True), (" · 2. ", False), ("B", True), (" · 3. ", False),
         ("B", True), (" · 4. ", False), ("B", True)],
    ],
}

# ---------------------------------------------------------------------------
# SEANCE 2 (globale 19) - Les proprietes des materiaux
# ---------------------------------------------------------------------------
S2 = {
    "num": 2, "title": "Les propriétés des matériaux",
    "theme": THEME, "ras_theme": RAS_THEME_1, "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "reconnaître les propriétés d'un matériau (dureté, souplesse, imperméabilité, résistance).",
    "support": "échantillons de matériaux (bois, métal, plastique, tissu, élastique), petit seau d'eau.",
    "cover_image": ("scripts/t4/generated_images/u3_s2_a_test.jpg",
                     "Tester un matériau : plier, tirer, mouiller pour découvrir ses propriétés."),
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Cite un objet fait de plastique et un objet fait de métal.",
         "R.A. : une bassine en plastique ; un couteau en métal.", "Questionnement oral", "—", ""),
        ("II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON"),
        ("1. Mise en situation", "Pourquoi utilise-t-on du métal pour un couteau et du tissu pour un "
                                 "vêtement, et non l'inverse ?",
         "R.A. : le métal est dur et coupant, le tissu est souple et confortable.", "Questionnement oral", "—", ""),
        ("2. Présentation", "Aujourd'hui nous allons apprendre : « Les propriétés des matériaux ».",
         "Les élèves écoutent.", "Exposé", "Tableau noir, cahier", ""),
        ("3. Observation", "Essayez de plier une planchette de bois, un fil de fer, un morceau de tissu. "
                           "Trempez un morceau de plastique et un morceau de tissu dans l'eau. Que "
                           "remarquez-vous ?",
         "R.A. : certains matériaux plient facilement, d'autres non ; certains laissent passer l'eau, "
         "d'autres non.", "Expérimentation dirigée", "Échantillons de matériaux, eau", ""),
        ("4. Analyse", "Classez ces matériaux selon leur dureté et selon leur perméabilité à l'eau.",
         "R.A. : les élèves construisent deux classements.", "Travail de groupe", "Échantillons de matériaux", ""),
        ("5. Synthèse", "Donc, chaque matériau a des propriétés qui le caractérisent : dur ou souple, "
                        "imperméable ou perméable, léger ou lourd, résistant ou fragile, conducteur ou isolant "
                        "de la chaleur.",
         "Les élèves écoutent et notent.", "Exposé magistral", "Tableau noir", ""),
        ("6. Application", "Ex. 1 — Pour fabriquer un manche de couteau, quelle propriété du matériau est la "
                           "plus importante ? Propose un matériau adapté.",
         "Ex. 1 : la résistance et une bonne prise en main ; le bois convient bien.", "Travail de groupe", "Cahier", ""),
        ("III. ÉVALUATION", "Ex. 1 — Cite deux propriétés qui s'opposent (par exemple dur/souple).",
         "Ex. 1 : dur/souple, imperméable/perméable, léger/lourd.", "Évaluation écrite", "Cahier", ""),
    ],
    "lecon": [
        ("section", "1. La dureté et la souplesse"),
        ("body", "Un matériau dur résiste à la déformation (le métal, la pierre) ; un matériau souple se "
                 "plie ou s'étire facilement (le tissu, le caoutchouc, un fil de raphia)."),
        ("section", "2. L'imperméabilité"),
        ("body", "Un matériau imperméable ne laisse pas passer l'eau (le plastique, le verre, le métal) ; un "
                 "matériau perméable laisse passer l'eau ou l'humidité (le tissu, certains bois non traités)."),
        ("section", "3. La résistance"),
        ("body", "Un matériau résistant supporte les chocs, la traction ou le poids sans se casser (le "
                 "métal, certains bois durs) ; un matériau fragile se casse facilement (le verre, l'argile "
                 "cuite fine)."),
        ("image", ("scripts/t4/generated_images/u3_s2_b_proprietes.jpg",
                   "Quatre paires de propriétés opposées des matériaux.")),
        ("section", "4. Le poids et la conduction de la chaleur"),
        ("body", "Un matériau peut être léger (plastique, raphia) ou lourd (métal, pierre). Il peut aussi "
                 "être conducteur de chaleur (le métal chauffe vite, comme le manche d'une marmite en métal) "
                 "ou isolant (le bois et le plastique restent plus frais au toucher, c'est pourquoi certains "
                 "manches d'ustensiles sont en bois)."),
        ("section", "5. Pourquoi connaître ces propriétés ?"),
        ("body", "Connaître les propriétés d'un matériau permet de choisir le bon matériau pour fabriquer un "
                 "objet technique adapté à son usage — c'est la base de toute conception technologique."),
    ],
    "exercices": [
        ("Exercice 1 (5 points)", " — Cite quatre propriétés qui permettent de décrire un matériau."),
        ("Exercice 2 (5 points)", " — Pour chaque objet, indique la propriété la plus importante du "
                                  "matériau utilisé : 1. une bassine à eau · 2. le manche d'une marmite · "
                                  "3. un pneu de vélo · 4. une vitre de fenêtre."),
        ("Exercice 3 (6 points)", " — Un élève veut fabriquer un parapluie. 1. Quelle propriété est "
                                  "indispensable pour le tissu de la toile ? (2 pts) 2. Quelle propriété est "
                                  "indispensable pour les tiges qui soutiennent la toile ? (2 pts) 3. "
                                  "Pourquoi ne peut-on pas fabriquer un parapluie entièrement en verre ? "
                                  "(2 pts)"),
        ("Exercice 4 (4 points)", " — Choisis la bonne réponse :\n"
                                  "1. Un matériau qui ne laisse pas passer l'eau est dit : A. dur B. "
                                  "imperméable C. léger\n"
                                  "2. Le métal est généralement un : A. isolant de la chaleur B. bon "
                                  "conducteur de la chaleur C. matériau souple\n"
                                  "3. Un matériau fragile est un matériau qui : A. se casse facilement B. "
                                  "résiste aux chocs C. flotte sur l'eau\n"
                                  "4. Le bois est souvent utilisé pour les manches d'outils car il est : A. "
                                  "conducteur de chaleur B. isolant et agréable à tenir C. transparent"),
    ],
    "total": 20,
    "corrige_lines": [
        [("Ex. 1 — ", False), ("dureté/souplesse, imperméabilité/perméabilité, résistance/fragilité, "
                                "légèreté/lourdeur (ou conduction de la chaleur).", True)],
        [("Ex. 2 — ", False),
         ("1. Imperméabilité (2. la bassine ne doit pas fuir). 2. Isolation de la chaleur (pour ne pas se "
          "brûler). 3. Résistance et élasticité (pour supporter les chocs de la route). 4. Transparence "
          "(pour laisser passer la lumière).", True)],
        [("Ex. 3 — ", False),
         ("1. La toile doit être imperméable, pour ne pas laisser passer l'eau de pluie. (2 pts)", False)],
        [("2. Les tiges doivent être résistantes mais légères, pour soutenir la toile sans casser ni "
          "alourdir le parapluie. (2 pts)", False)],
        [("3. Le verre est fragile et lourd ; il se casserait facilement et rendrait le parapluie trop "
          "lourd à porter. (2 pts)", False)],
        [("Ex. 4 — ", False), ("1. B", True), (" · 2. ", False), ("B", True), (" · 3. ", False),
         ("A", True), (" · 4. ", False), ("B", True)],
    ],
}

# ---------------------------------------------------------------------------
# SEANCE 3 (globale 20) - Les methodes d'assemblage
# ---------------------------------------------------------------------------
S3 = {
    "num": 3, "title": "Les méthodes d'assemblage",
    "theme": THEME, "ras_theme": RAS_THEME_2, "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "identifier différentes méthodes pour joindre ou assembler des matériaux.",
    "support": "exemples d'objets assemblés (chaise clouée, panier tressé, vêtement cousu), petits outils si disponibles.",
    "cover_image": ("scripts/t4/generated_images/u3_s3_a_artisan.jpg",
                     "Un artisan malgache assemble des matériaux pour fabriquer un objet."),
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Cite deux propriétés d'un matériau.",
         "R.A. : dur/souple, imperméable/perméable, par exemple.", "Questionnement oral", "—", ""),
        ("II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON"),
        ("1. Mise en situation", "Comment un sobika (panier) est-il fabriqué à partir de plusieurs brins de "
                                 "raphia séparés ?",
         "R.A. : les brins sont tressés (entrelacés) ensemble.", "Questionnement oral", "Un sobika", ""),
        ("2. Présentation", "Aujourd'hui nous allons apprendre : « Les méthodes d'assemblage ».",
         "Les élèves écoutent.", "Exposé", "Tableau noir, cahier", ""),
        ("3. Observation", "Observez ces objets : une chaise en bois clouée, un vêtement cousu, un panier "
                           "tressé. Comment les différentes parties sont-elles reliées entre elles ?",
         "R.A. : par des clous, par de la couture (fil), par tressage.", "Observation dirigée", "Objets assemblés", ""),
        ("4. Analyse", "Pourquoi n'utilise-t-on pas de clous pour assembler un vêtement en tissu ?",
         "R.A. : les clous abîmeraient le tissu ; la couture est plus adaptée à ce matériau souple.", "Étude de cas", "Objets assemblés", ""),
        ("5. Synthèse", "Donc, il existe plusieurs méthodes pour assembler des matériaux : clouer, visser, "
                        "coller, coudre, nouer, souder, tresser. Le choix de la méthode dépend du matériau et "
                        "de l'usage de l'objet.",
         "Les élèves écoutent et notent.", "Exposé magistral", "Tableau noir", ""),
        ("6. Application", "Ex. 1 — Propose une méthode d'assemblage adaptée pour : deux planches de bois ; "
                           "deux morceaux de tissu ; deux fils de raphia.",
         "Ex. 1 : clouer ou visser ; coudre ; nouer ou tresser.", "Travail de groupe", "Cahier", ""),
        ("III. ÉVALUATION", "Ex. 1 — Cite trois méthodes d'assemblage et un exemple d'objet pour chacune.",
         "Ex. 1 : clouer — une caisse ; coudre — un vêtement ; tresser — un panier.", "Évaluation écrite", "Cahier", ""),
    ],
    "lecon": [
        ("section", "1. Pourquoi assembler des matériaux ?"),
        ("body", "La plupart des objets techniques sont fabriqués en assemblant plusieurs pièces ou "
                 "plusieurs matériaux différents. Bien choisir la méthode d'assemblage garantit la solidité "
                 "et la durabilité de l'objet."),
        ("section", "2. Les principales méthodes d'assemblage"),
        ("sub", "a. Clouer"),
        ("body", "On enfonce un clou en métal pour relier deux pièces de bois. Rapide et solide."),
        ("sub", "b. Visser"),
        ("body", "On utilise une vis et parfois un tournevis. Permet de démonter et remonter l'assemblage."),
        ("sub", "c. Coller"),
        ("body", "On applique de la colle entre deux surfaces. Adapté au bois, au papier, à certains "
                 "plastiques."),
        ("sub", "d. Coudre"),
        ("body", "On relie des morceaux de tissu ou de cuir à l'aide d'un fil et d'une aiguille."),
        ("sub", "e. Nouer et tresser"),
        ("body", "On entrelace des fils, des brins de raphia ou des cordes, sans outil ni colle. Utilisé "
                 "pour les paniers, les nattes, certains liens."),
        ("sub", "f. Souder"),
        ("body", "On fait fondre localement deux pièces de métal pour les unir de façon très solide, souvent "
                 "avec de la chaleur."),
        ("image", ("scripts/t4/generated_images/u3_s3_b_methodes.jpg",
                   "Six méthodes d'assemblage courantes.")),
        ("section", "3. Assemblage direct ou indirect"),
        ("body", "On peut aussi classer les assemblages selon la présence ou non d'un élément intermédiaire. "
                 "Un assemblage direct met les pièces en contact sans rien entre elles (exemple : souder, "
                 "coincer). Un assemblage indirect utilise un élément intermédiaire comme une vis, un clou, "
                 "de la colle ou du fil pour relier les pièces (exemple : visser, clouer, coller, coudre)."),
        ("section", "4. Bien choisir sa méthode"),
        ("body", "Le choix dépend du matériau (on ne coud pas du métal, on ne soude pas du tissu), de la "
                 "solidité recherchée, et du besoin ou non de pouvoir démonter l'objet plus tard."),
    ],
    "exercices": [
        ("Exercice 1 (5 points)", " — Cite cinq méthodes d'assemblage vues en classe."),
        ("Exercice 2 (5 points)", " — Associe chaque matériau à la méthode d'assemblage la plus adaptée : "
                                  "1. deux planches de bois · 2. deux morceaux de tissu · 3. deux pièces de "
                                  "métal · 4. des brins de raphia.\nMéthodes : coudre, souder, tresser, "
                                  "clouer."),
        ("Exercice 3 (6 points)", " — Un menuisier fabrique une chaise en bois qu'il souhaite pouvoir "
                                  "réparer facilement plus tard. 1. Quelle méthode d'assemblage lui "
                                  "conseilles-tu ? (2 pts) 2. Pourquoi cette méthode est-elle adaptée ? "
                                  "(2 pts) 3. Cite une méthode moins adaptée dans ce cas, et explique "
                                  "pourquoi. (2 pts)"),
        ("Exercice 4 (4 points)", " — Choisis la bonne réponse :\n"
                                  "1. Pour assembler deux morceaux de tissu, on utilise le plus souvent : "
                                  "A. la soudure B. la couture C. le clou\n"
                                  "2. La soudure est une méthode utilisée surtout pour : A. le tissu B. le "
                                  "métal C. le raphia\n"
                                  "3. Le tressage est traditionnellement utilisé à Madagascar pour "
                                  "fabriquer : A. des paniers en raphia B. des vitres C. des couteaux\n"
                                  "4. Un assemblage qui se démonte facilement utilise plutôt : A. la colle "
                                  "B. la vis C. la soudure"),
    ],
    "total": 20,
    "corrige_lines": [
        [("Ex. 1 — ", False), ("clouer, visser, coller, coudre, nouer/tresser (ou souder).", True)],
        [("Ex. 2 — ", False), ("1 → clouer", True), (" · 2 → ", False), ("coudre", True), (" · 3 → ", False),
         ("souder", True), (" · 4 → ", False), ("tresser", True)],
        [("Ex. 3 — ", False),
         ("1. Le vissage. (2 pts)", False)],
        [("2. Parce qu'une vis peut être retirée sans abîmer le bois, ce qui permet de réparer ou de "
          "démonter la chaise facilement. (2 pts)", False)],
        [("3. Le collage (ou le clouage) est moins adapté, car il est plus difficile de séparer les pièces "
          "sans les abîmer. (2 pts)", False)],
        [("Ex. 4 — ", False), ("1. B", True), (" · 2. ", False), ("B", True), (" · 3. ", False),
         ("A", True), (" · 4. ", False), ("B", True)],
    ],
}

# ---------------------------------------------------------------------------
# SEANCE 4 (globale 21) - Assemblages permanents et non permanents
# ---------------------------------------------------------------------------
S4 = {
    "num": 4, "title": "Assemblages permanents et non permanents",
    "theme": THEME, "ras_theme": RAS_THEME_2, "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "distinguer un assemblage permanent d'un assemblage non permanent (démontable).",
    "support": "une caisse clouée (permanent), un meuble en kit vissé (non permanent), tableau noir.",
    "cover_image": ("scripts/t4/generated_images/u3_s4_a_comparaison.jpg",
                     "Une caisse clouée d'un côté, un meuble à visser de l'autre : deux façons d'assembler."),
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Cite deux méthodes d'assemblage.",
         "R.A. : coller, visser, par exemple.", "Questionnement oral", "—", ""),
        ("II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON"),
        ("1. Mise en situation", "Peut-on facilement séparer les planches d'une caisse clouée ? Et les pièces "
                                 "d'un meuble vissé ?",
         "R.A. : la caisse clouée est difficile à démonter ; le meuble vissé peut être dévissé.", "Questionnement oral", "Objets assemblés", ""),
        ("2. Présentation", "Aujourd'hui nous allons apprendre : « Assemblages permanents et non "
                            "permanents ».",
         "Les élèves écoutent.", "Exposé", "Tableau noir, cahier", ""),
        ("3. Observation", "Essayez (mentalement ou réellement) de démonter les deux objets présentés. "
                           "Lequel se démonte facilement, sans l'abîmer ?",
         "R.A. : le meuble vissé se démonte sans dommage ; la caisse clouée s'abîme si on essaie.", "Observation dirigée", "Objets assemblés", ""),
        ("4. Analyse", "Pourquoi certains objets sont-ils conçus pour être démontables et d'autres non ?",
         "R.A. : pour faciliter le transport, la réparation, ou le recyclage des pièces.", "Discussion guidée", "—", ""),
        ("5. Synthèse", "Donc, un assemblage permanent (clou, colle, soudure) ne peut pas être défait sans "
                        "abîmer les pièces ; un assemblage non permanent (vis, nœud, emboîtement) peut être "
                        "défait et refait sans dommage.",
         "Les élèves écoutent et notent.", "Exposé magistral", "Tableau noir", ""),
        ("6. Application", "Ex. 1 — Classe ces assemblages en permanents ou non permanents : clou, vis, "
                           "colle, nœud, soudure, bouton-pression.",
         "Ex. 1 : permanents — clou, colle, soudure ; non permanents — vis, nœud, bouton-pression.", "Travail de groupe", "Cahier", ""),
        ("III. ÉVALUATION", "Ex. 1 — Cite un avantage d'un assemblage non permanent.",
         "Ex. 1 : on peut démonter, réparer ou transporter l'objet plus facilement.", "Évaluation écrite", "Cahier", ""),
    ],
    "lecon": [
        ("section", "1. L'assemblage permanent"),
        ("body", "Un assemblage permanent relie deux pièces de façon définitive : on ne peut plus les "
                 "séparer sans casser ou abîmer l'une des pièces. Exemples : le clouage, le collage, la "
                 "soudure, la couture (souvent difficile à défaire sans découdre)."),
        ("section", "2. L'assemblage non permanent (démontable)"),
        ("body", "Un assemblage non permanent peut être défait puis refait sans endommager les pièces. "
                 "Exemples : le vissage, le nouage, l'emboîtement, les boutons-pression, les fermetures "
                 "éclair."),
        ("image", ("scripts/t4/generated_images/u3_s4_b_tableau.jpg",
                   "Assemblages permanents et non permanents : exemples et différences.")),
        ("section", "3. Comment choisir ?"),
        ("body", "On choisit un assemblage permanent quand on veut une grande solidité et que l'objet n'a "
                 "pas besoin d'être démonté (une charpente, une soudure de portail). On choisit un assemblage "
                 "non permanent quand l'objet doit pouvoir être réparé, transporté en pièces détachées, ou "
                 "réglé (un meuble en kit, un vêtement à boutons)."),
    ],
    "exercices": [
        ("Exercice 1 (5 points)", " — Cite deux exemples d'assemblages permanents et deux exemples "
                                  "d'assemblages non permanents."),
        ("Exercice 2 (5 points)", " — Classe ces assemblages : clou, vis, colle, bouton-pression, soudure, "
                                  "nœud.\nDeux colonnes : permanent / non permanent."),
        ("Exercice 3 (6 points)", " — Une entreprise fabrique des meubles destinés à être transportés en "
                                  "pièces détachées puis montés par le client. 1. Quel type d'assemblage "
                                  "doit-elle privilégier ? (2 pts) 2. Pourquoi ce choix est-il judicieux pour "
                                  "le transport ? (2 pts) 3. Cite un exemple d'assemblage qu'elle devrait "
                                  "éviter dans ce cas, et pourquoi. (2 pts)"),
        ("Exercice 4 (4 points)", " — Choisis la bonne réponse :\n"
                                  "1. Un assemblage qu'on ne peut pas défaire sans l'abîmer est dit : A. "
                                  "permanent B. non permanent C. léger\n"
                                  "2. La vis est un exemple d'assemblage : A. permanent B. non permanent "
                                  "C. ni l'un ni l'autre\n"
                                  "3. La soudure est un assemblage : A. permanent B. non permanent C. "
                                  "temporaire\n"
                                  "4. Un meuble en kit est généralement assemblé avec des : A. clous B. vis "
                                  "C. soudures"),
    ],
    "total": 20,
    "corrige_lines": [
        [("Ex. 1 — ", False), ("Permanents : le clou, la colle (ou la soudure). Non permanents : la vis, le "
                                "nœud (ou le bouton-pression).", True)],
        [("Ex. 2 — ", False), ("Permanents : clou, colle, soudure. Non permanents : vis, bouton-pression, "
                                "nœud.", True)],
        [("Ex. 3 — ", False),
         ("1. Un assemblage non permanent, comme le vissage. (2 pts)", False)],
        [("2. Parce que les pièces peuvent être transportées démontées, séparées, prenant moins de place, "
          "puis assemblées facilement par le client. (2 pts)", False)],
        [("3. Elle devrait éviter le collage ou la soudure, car ces assemblages sont définitifs et "
          "empêcheraient le client de monter lui-même le meuble à la livraison. (2 pts)", False)],
        [("Ex. 4 — ", False), ("1. A", True), (" · 2. ", False), ("B", True), (" · 3. ", False),
         ("A", True), (" · 4. ", False), ("B", True)],
    ],
}

# ---------------------------------------------------------------------------
# SEANCE 5 (globale 22) - Les outils simples et leurs usages
# ---------------------------------------------------------------------------
S5 = {
    "num": 5, "title": "Les outils simples et leurs usages",
    "theme": THEME, "ras_theme": RAS_THEME_3, "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "identifier des outils simples et associer chacun à son usage principal.",
    "support": "outils simples si disponibles (marteau, tournevis, pince, scie) ou photos, tableau noir.",
    "cover_image": ("scripts/t4/generated_images/u3_s5_a_boiteaoutils.jpg",
                     "Une boîte à outils : chaque outil a un usage précis."),
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Quelle est la différence entre un assemblage permanent et un assemblage non "
                        "permanent ?",
         "R.A. : le premier ne peut pas être défait sans dommage, le second oui.", "Questionnement oral", "—", ""),
        ("II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON"),
        ("1. Mise en situation", "Peut-on enfoncer un clou avec la main seule ? Avec quoi le fait-on "
                                 "d'habitude ?",
         "R.A. : c'est difficile à la main ; on utilise un marteau.", "Questionnement oral", "—", ""),
        ("2. Présentation", "Aujourd'hui nous allons apprendre : « Les outils simples et leurs usages ».",
         "Les élèves écoutent.", "Exposé", "Tableau noir, cahier", ""),
        ("3. Observation", "Observez ces outils : marteau, tournevis, scie, pince, angady. À quoi sert "
                           "chacun ?",
         "R.A. : marteau — enfoncer un clou ; tournevis — visser ; scie — couper ; pince — serrer/tenir ; "
         "angady — creuser la terre.", "Observation dirigée", "Outils ou photos d'outils", ""),
        ("4. Analyse", "Pourrait-on remplacer une scie par un marteau pour couper une planche ?",
         "R.A. : non, chaque outil est conçu pour une action précise.", "Étude de cas", "Outils ou photos d'outils", ""),
        ("5. Synthèse", "Donc, un outil simple est un instrument qui aide à réaliser une action précise "
                        "(enfoncer, visser, couper, serrer, creuser) plus facilement et plus efficacement "
                        "qu'à mains nues.",
         "Les élèves écoutent et notent.", "Exposé magistral", "Tableau noir", ""),
        ("6. Application", "Ex. 1 — Pour chaque tâche, cite l'outil adapté : enfoncer un clou ; couper une "
                           "planche ; serrer un boulon ; creuser un trou.",
         "Ex. 1 : marteau ; scie ; pince ou clé ; angady ou pelle.", "Travail de groupe", "Cahier", ""),
        ("III. ÉVALUATION", "Ex. 1 — Cite trois outils simples et l'usage de chacun.",
         "Ex. 1 : marteau — enfoncer un clou ; scie — couper ; tournevis — visser.", "Évaluation écrite", "Cahier", ""),
    ],
    "lecon": [
        ("section", "1. Qu'est-ce qu'un outil simple ?"),
        ("body", "Un outil simple est un instrument, souvent sans moteur, qui aide une personne à réaliser "
                 "une tâche précise plus facilement, plus vite ou avec plus de force qu'à mains nues."),
        ("section", "2. Quelques outils simples et leur usage"),
        ("sub", "a. Le marteau"),
        ("body", "Sert à enfoncer ou retirer des clous."),
        ("sub", "b. Le tournevis"),
        ("body", "Sert à visser ou dévisser des vis."),
        ("sub", "c. La scie"),
        ("body", "Sert à couper le bois ou certains autres matériaux."),
        ("sub", "d. La pince"),
        ("body", "Sert à serrer, tenir ou couper un fil."),
        ("sub", "e. L'angady"),
        ("body", "Bêche malgache traditionnelle : sert à creuser et retourner la terre pour les rizières et "
                 "les champs."),
        ("image", ("scripts/t4/generated_images/u3_s5_b_outils.jpg",
                   "Cinq outils simples et leur usage principal.")),
        ("section", "3. Pourquoi utiliser un outil adapté ?"),
        ("body", "Utiliser le bon outil pour la bonne tâche permet de travailler plus efficacement, en "
                 "sécurité, et sans abîmer le matériau ou l'outil lui-même. Utiliser un outil pour une tâche "
                 "qui ne lui correspond pas (par exemple un marteau pour visser) peut être dangereux ou "
                 "inefficace."),
    ],
    "exercices": [
        ("Exercice 1 (5 points)", " — Cite cinq outils simples vus en classe."),
        ("Exercice 2 (5 points)", " — Associe chaque outil à son usage : 1. marteau · 2. tournevis · "
                                  "3. scie · 4. pince · 5. angady.\nUsages : creuser la terre, enfoncer un "
                                  "clou, couper le bois, visser, serrer/tenir."),
        ("Exercice 3 (6 points)", " — Un élève veut fabriquer une petite étagère en bois. 1. Cite deux "
                                  "outils dont il aura besoin. (2 pts) 2. Pour chacun, précise à quelle "
                                  "étape de la fabrication il servira. (2 pts) 3. Pourquoi est-il dangereux "
                                  "d'utiliser un outil pour une tâche qui ne lui correspond pas ? (2 pts)"),
        ("Exercice 4 (4 points)", " — Choisis la bonne réponse :\n"
                                  "1. L'outil utilisé pour enfoncer un clou est : A. la scie B. le marteau "
                                  "C. la pince\n"
                                  "2. L'angady est traditionnellement utilisé à Madagascar pour : A. coudre "
                                  "B. creuser la terre C. couper le bois\n"
                                  "3. Pour visser une vis, on utilise : A. un tournevis B. une scie C. un "
                                  "marteau\n"
                                  "4. Utiliser le bon outil pour une tâche permet surtout de : A. perdre du "
                                  "temps B. travailler efficacement et en sécurité C. abîmer le matériau"),
    ],
    "total": 20,
    "corrige_lines": [
        [("Ex. 1 — ", False), ("marteau, tournevis, scie, pince, angady.", True)],
        [("Ex. 2 — ", False), ("1 → enfoncer un clou", True), (" · 2 → ", False), ("visser", True),
         (" · 3 → ", False), ("couper le bois", True), (" · 4 → ", False), ("serrer/tenir", True),
         (" · 5 → ", False), ("creuser la terre", True)],
        [("Ex. 3 — ", False),
         ("1. Par exemple la scie et le marteau (ou le tournevis). (2 pts)", False)],
        [("2. La scie sert à découper les planches à la bonne taille ; le marteau sert à assembler les "
          "planches avec des clous. (2 pts)", False)],
        [("3. Parce que l'outil risque de glisser, de mal fonctionner, de blesser la personne ou d'abîmer "
          "le matériau. (2 pts)", False)],
        [("Ex. 4 — ", False), ("1. B", True), (" · 2. ", False), ("B", True), (" · 3. ", False),
         ("A", True), (" · 4. ", False), ("B", True)],
    ],
}

# ---------------------------------------------------------------------------
# SEANCE 6 (globale 23) - Les besoins a l'origine des outils
# ---------------------------------------------------------------------------
S6 = {
    "num": 6, "title": "Les besoins à l'origine des outils",
    "theme": THEME, "ras_theme": RAS_THEME_3, "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "expliquer qu'un outil est inventé pour répondre à un besoin précis.",
    "support": "exemples d'outils et description des besoins associés, tableau noir.",
    "cover_image": ("scripts/t4/generated_images/u3_s6_a_besoin.jpg",
                     "Un besoin (creuser la terre) donne naissance à un outil (l'angady)."),
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Cite un outil simple et son usage.",
         "R.A. : le marteau sert à enfoncer un clou, par exemple.", "Questionnement oral", "—", ""),
        ("II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON"),
        ("1. Mise en situation", "Il y a très longtemps, les hommes creusaient la terre à mains nues. "
                                 "Pourquoi ont-ils fini par inventer une bêche ?",
         "R.A. : pour creuser plus vite, plus profondément, sans se blesser les mains.", "Questionnement oral", "—", ""),
        ("2. Présentation", "Aujourd'hui nous allons apprendre : « Les besoins à l'origine des outils ».",
         "Les élèves écoutent.", "Exposé", "Tableau noir, cahier", ""),
        ("3. Observation", "Pour chaque outil, retrouvez le besoin auquel il répond : la scie, l'aiguille, "
                           "le tamis à riz.",
         "R.A. : couper le bois ; assembler du tissu ; séparer le riz de ses impuretés.", "Observation dirigée", "Photos d'outils", ""),
        ("4. Analyse", "Un outil peut-il évoluer si le besoin change ? Donnez un exemple.",
         "R.A. : oui, par exemple l'angady traditionnel a pu être amélioré avec un manche différent ou une "
         "lame en métal plus solide.", "Discussion guidée", "—", ""),
        ("5. Synthèse", "Donc, chaque outil a été inventé, puis souvent amélioré, pour répondre à un besoin "
                        "précis de l'être humain : se nourrir, se protéger, construire, se déplacer.",
         "Les élèves écoutent et notent.", "Exposé magistral", "Tableau noir", ""),
        ("6. Application", "Ex. 1 — Propose un besoin, puis imagine un outil simple qui pourrait y répondre.",
         "Ex. 1 : réponses variées, par exemple « cueillir des fruits en hauteur » → une perche avec un "
         "crochet.", "Travail individuel", "Cahier", ""),
        ("III. ÉVALUATION", "Ex. 1 — Explique en une phrase pourquoi l'angady a été inventé.",
         "Ex. 1 : pour creuser et retourner la terre plus efficacement qu'à la main.", "Évaluation écrite", "Cahier", ""),
    ],
    "lecon": [
        ("section", "1. Un outil naît toujours d'un besoin"),
        ("body", "Avant qu'un outil existe, une personne rencontre une difficulté ou un besoin qu'elle ne "
                 "peut pas satisfaire facilement avec ses seules mains. Elle imagine alors un objet qui "
                 "l'aide à résoudre ce problème : c'est l'origine de l'outil."),
        ("section", "2. Quelques exemples de besoins et d'outils associés"),
        ("body", "Le besoin de creuser la terre a donné naissance à l'angady. Le besoin de couper le bois a "
                 "donné naissance à la scie. Le besoin d'assembler des tissus a donné naissance à l'aiguille. "
                 "Le besoin de séparer le riz de ses impuretés a donné naissance au tamis (sahafa)."),
        ("image", ("scripts/t4/generated_images/u3_s6_b_cahier.jpg",
                   "Du besoin à l'outil : analyser un problème avant d'imaginer une solution.")),
        ("section", "3. Le cahier des charges : décrire un besoin avant d'inventer"),
        ("body", "Avant de fabriquer un objet technique, il est utile de bien décrire le besoin : à quoi "
                 "doit servir l'objet, dans quelles conditions il sera utilisé, avec quel matériau il peut "
                 "être fabriqué. Cette description s'appelle un cahier des charges ; elle aide à concevoir un "
                 "outil réellement adapté."),
        ("section", "4. Les outils évoluent avec les besoins"),
        ("body", "Quand les besoins changent ou que de nouveaux matériaux apparaissent, les outils "
                 "évoluent : un angady peut recevoir un manche plus solide, une lame en métal remplace une "
                 "ancienne lame en bois durci. L'amélioration continue des outils fait partie de la "
                 "conception technologique."),
    ],
    "exercices": [
        ("Exercice 1 (5 points)", " — Pour chacun de ces outils, cite le besoin auquel il répond : "
                                  "1. l'angady · 2. la scie · 3. l'aiguille · 4. le tamis (sahafa)."),
        ("Exercice 2 (5 points)", " — Explique en deux phrases ce qu'est un cahier des charges et à quoi il "
                                  "sert."),
        ("Exercice 3 (6 points)", " — Un villageois doit souvent transporter de l'eau depuis la rivière "
                                  "jusqu'à sa maison, ce qui est fatigant avec un seau à la main. 1. Quel est "
                                  "le besoin ici ? (2 pts) 2. Propose un outil ou objet technique simple qui "
                                  "pourrait l'aider. (2 pts) 3. Pourquoi est-il utile de bien décrire le "
                                  "besoin avant d'imaginer une solution ? (2 pts)"),
        ("Exercice 4 (4 points)", " — Choisis la bonne réponse :\n"
                                  "1. Un outil est généralement inventé pour : A. décorer une maison B. "
                                  "répondre à un besoin précis C. remplacer un être humain totalement\n"
                                  "2. Le cahier des charges sert à : A. décrire le besoin avant de "
                                  "concevoir un objet B. vendre un objet C. décorer un objet\n"
                                  "3. Un outil peut évoluer quand : A. rien ne change jamais B. les besoins "
                                  "ou les matériaux changent C. on l'interdit\n"
                                  "4. Le tamis (sahafa) répond au besoin de : A. couper le bois B. séparer "
                                  "le riz de ses impuretés C. creuser la terre"),
    ],
    "total": 20,
    "corrige_lines": [
        [("Ex. 1 — ", False),
         ("1. creuser/retourner la terre. 2. couper le bois. 3. assembler des tissus. 4. séparer le riz de "
          "ses impuretés.", True)],
        [("Ex. 2 — ", False), ("Le cahier des charges décrit précisément le besoin auquel doit répondre un "
                                "objet technique (son usage, ses conditions d'utilisation, ses contraintes) "
                                "avant qu'on le fabrique. Il aide à concevoir un objet réellement adapté au "
                                "besoin.", True)],
        [("Ex. 3 — ", False),
         ("1. Le besoin de transporter de l'eau plus facilement et avec moins de fatigue. (2 pts)", False)],
        [("2. Par exemple une brouette, un chariot à roues, ou deux seaux suspendus à une perche portée sur "
          "l'épaule. (2 pts)", False)],
        [("3. Parce que bien décrire le besoin permet d'imaginer une solution réellement adaptée, et évite "
          "de fabriquer un objet inutile ou mal conçu. (2 pts)", False)],
        [("Ex. 4 — ", False), ("1. B", True), (" · 2. ", False), ("A", True), (" · 3. ", False),
         ("B", True), (" · 4. ", False), ("B", True)],
    ],
}

# ---------------------------------------------------------------------------
# SEANCE 7 (globale 24) - La force et le mouvement
# ---------------------------------------------------------------------------
S7 = {
    "num": 7, "title": "La force et le mouvement",
    "theme": THEME, "ras_theme": RAS_THEME_4, "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "expliquer l'action d'une force sur un objet pour engendrer, arrêter ou modifier un mouvement.",
    "support": "une balle, une petite voiture jouet, une charrette ou un chariot si disponible, tableau noir.",
    "cover_image": ("scripts/t4/generated_images/u3_s7_a_charrette.jpg",
                     "Pousser, tirer : des forces qui mettent les objets en mouvement."),
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Pourquoi l'angady a-t-il été inventé ?",
         "R.A. : pour creuser et retourner la terre plus facilement.", "Questionnement oral", "—", ""),
        ("II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON"),
        ("1. Mise en situation", "Une balle est immobile par terre. Comment la faire bouger sans la "
                                 "toucher avec un outil ?",
         "R.A. : en la poussant ou en la tirant avec la main ou le pied.", "Questionnement oral", "Une balle", ""),
        ("2. Présentation", "Aujourd'hui nous allons apprendre : « La force et le mouvement ».",
         "Les élèves écoutent.", "Exposé", "Tableau noir, cahier", ""),
        ("3. Observation", "Poussez une petite voiture jouet, puis arrêtez-la avec la main. Poussez-la "
                           "ensuite de côté pendant qu'elle roule. Que se passe-t-il à chaque fois ?",
         "R.A. : elle démarre, elle s'arrête, elle change de direction.", "Expérimentation dirigée", "Petite voiture jouet", ""),
        ("4. Analyse", "Dans chaque cas, qu'est-ce qui a provoqué le changement observé sur la voiture ?",
         "R.A. : une force appliquée par la main (pousser, arrêter, dévier).", "Étude de cas", "Petite voiture jouet", ""),
        ("5. Synthèse", "Donc, une force est une action qui peut mettre un objet en mouvement, l'arrêter, "
                        "changer sa direction, ou encore le déformer.",
         "Les élèves écoutent et notent.", "Exposé magistral", "Tableau noir", ""),
        ("6. Application", "Ex. 1 — Pour chaque situation, précise l'effet de la force : pousser une porte "
                           "fermée ; freiner un vélo qui roule ; tordre un fil de fer.",
         "Ex. 1 : mise en mouvement ; arrêt du mouvement ; déformation.", "Travail de groupe", "Cahier", ""),
        ("III. ÉVALUATION", "Ex. 1 — Cite les quatre effets possibles d'une force sur un objet.",
         "Ex. 1 : mettre en mouvement, arrêter, changer de direction, déformer.", "Évaluation écrite", "Cahier", ""),
    ],
    "lecon": [
        ("section", "1. Qu'est-ce qu'une force ?"),
        ("body", "Une force est une action exercée sur un objet, par exemple en le poussant, en le tirant, "
                 "en le soulevant ou en le tordant. On ne voit pas directement une force, mais on observe ses "
                 "effets sur l'objet."),
        ("section", "2. Les effets d'une force sur un objet"),
        ("sub", "a. Mettre en mouvement"),
        ("body", "Une force peut faire démarrer un objet immobile, par exemple pousser une brouette pour la "
                 "faire avancer."),
        ("sub", "b. Arrêter un mouvement"),
        ("body", "Une force peut arrêter un objet en mouvement, par exemple freiner un vélo qui roule."),
        ("sub", "c. Changer la direction"),
        ("body", "Une force peut faire dévier un objet en mouvement, par exemple donner un coup de pied sur "
                 "le côté d'un ballon qui roule."),
        ("sub", "d. Déformer un objet"),
        ("body", "Une force peut changer la forme d'un objet, par exemple tordre un fil de fer ou écraser "
                 "une boîte en carton."),
        ("image", ("scripts/t4/generated_images/u3_s7_b_effets.jpg",
                   "Les quatre effets possibles d'une force sur un objet.")),
        ("section", "3. Deux types de mouvement"),
        ("body", "Un mouvement peut être une translation (l'objet se déplace tout entier en ligne, par "
                 "exemple une voiture sur la route) ou une rotation (l'objet tourne autour d'un axe, par "
                 "exemple un manège ou une roue)."),
        ("sub", "Exemple : le puits à poulie"),
        ("body", "Pour remonter un seau d'eau d'un puits à l'aide d'une poulie et d'une manivelle, on exerce "
                 "une force en tournant la manivelle : la manivelle et la poulie effectuent un mouvement de "
                 "rotation, tandis que le seau, lui, effectue un mouvement de translation vers le haut."),
        ("section", "4. Un exemple malgache : tirer une charrette à zébu"),
        ("body", "Quand un zébu tire une charrette, il exerce une force qui met la charrette en mouvement. "
                 "Quand le conducteur tire sur les rênes, il exerce une force qui ralentit ou arrête "
                 "l'attelage. Ces gestes quotidiens illustrent bien l'action d'une force sur un objet."),
    ],
    "exercices": [
        ("Exercice 1 (5 points)", " — Cite les quatre effets possibles d'une force sur un objet."),
        ("Exercice 2 (5 points)", " — Pour chaque action, précise l'effet principal de la force exercée : "
                                  "1. pousser une brouette immobile · 2. freiner un vélo · 3. tordre un fil "
                                  "de fer · 4. dévier un ballon qui roule d'un coup de pied sur le côté."),
        ("Exercice 3 (6 points)", " — Un enfant lance une balle contre un mur. 1. Quelle force met la balle "
                                  "en mouvement au départ ? (2 pts) 2. Que se passe-t-il quand la balle "
                                  "touche le mur ? Quel effet de la force observe-t-on ? (2 pts) 3. "
                                  "Explique pourquoi la balle repart alors dans une autre direction. "
                                  "(2 pts)"),
        ("Exercice 4 (4 points)", " — Choisis la bonne réponse :\n"
                                  "1. Une force peut : A. seulement mettre en mouvement B. mettre en "
                                  "mouvement, arrêter, dévier ou déformer C. seulement déformer\n"
                                  "2. Freiner un vélo est un exemple de force qui : A. met en mouvement B. "
                                  "arrête un mouvement C. déforme l'objet\n"
                                  "3. Tordre un fil de fer illustre : A. la mise en mouvement B. la "
                                  "déformation C. l'arrêt du mouvement\n"
                                  "4. Quand un zébu tire une charrette, il exerce une force qui : A. "
                                  "déforme la charrette B. met la charrette en mouvement C. n'a aucun "
                                  "effet"),
    ],
    "total": 20,
    "corrige_lines": [
        [("Ex. 1 — ", False), ("mettre en mouvement, arrêter, changer de direction, déformer.", True)],
        [("Ex. 2 — ", False), ("1. mise en mouvement", True), (" · 2. ", False), ("arrêt du mouvement", True),
         (" · 3. ", False), ("déformation", True), (" · 4. ", False), ("changement de direction", True)],
        [("Ex. 3 — ", False),
         ("1. La force du bras de l'enfant qui lance la balle. (2 pts)", False)],
        [("2. Le mur exerce une force sur la balle qui change sa direction (elle rebondit). (2 pts)", False)],
        [("3. Parce que la force exercée par le mur repousse la balle dans le sens opposé à celui où elle "
          "arrivait, ce qui change sa trajectoire. (2 pts)", False)],
        [("Ex. 4 — ", False), ("1. B", True), (" · 2. ", False), ("B", True), (" · 3. ", False),
         ("B", True), (" · 4. ", False), ("B", True)],
    ],
}

# ---------------------------------------------------------------------------
# SEANCE 8 (globale 25) - Revision Unite III
# ---------------------------------------------------------------------------
S8 = {
    "num": 8, "title": "Révision — Unité III : Objet technique", "kind": "revision",
    "cover_image": ("scripts/t4/generated_images/u3_bilan_r1.jpg",
                     "Bilan de l'Unité III : matériaux, assemblage et objet technique."),
    "theme": THEME, "ras_theme": "Matériaux et leurs propriétés ; méthodes d'assemblage ; outils simples ; "
                                  "force et mouvement",
    "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "traiter un sujet complet portant sur les séances 18 à 24, puis identifier ses points faibles.",
    "support": "sujet recopié au tableau ou polycopié, cahier de brouillon.",
    "deroulement": [
        ("Étapes", "Déroulement de la leçon", "Déroulement de la leçon", "Technique et Stratégie", "Support et Matériel", "Observation"),
        ("", "Enseignant", "Apprenants", "", "", ""),
        ("I. RÉVISION", "Sans ouvrir votre cahier : cite un matériau et un outil simple.",
         "R.A. : le bois (matériau) ; le marteau (outil).", "Questionnement oral", "—", ""),
        ("II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON", "II. NOUVELLE LEÇON"),
        ("1. Mise en situation", "Aujourd'hui vous traitez un sujet d'entraînement, comme un examen, mais "
                                 "sans note comptant pour la moyenne.",
         "Les élèves s'installent en condition d'examen.", "Consigne", "Tableau noir", ""),
        ("2. Présentation", "Quatre exercices, 20 points. Cahier de brouillon autorisé.",
         "Les élèves écoutent.", "Exposé", "Tableau noir", ""),
        ("3. Passation", "L'enseignant distribue ou recopie le sujet au tableau.",
         "Les élèves traitent le sujet.", "Travail individuel", "Sujet, cahier", ""),
        ("4. Correction collective", "Exercice par exercice, l'enseignant corrige au tableau avec la "
                                     "classe.",
         "Les élèves corrigent au stylo de couleur.", "Correction dirigée", "Tableau noir", ""),
        ("5. Synthèse", "Donc, les points faibles de la classe sont notés au tableau pour être repris.",
         "Les élèves notent leurs deux points faibles.", "Bilan collectif", "Cahier", ""),
        ("III. ÉVALUATION", "L'auto-évaluation tient lieu d'évaluation.",
         "Les élèves calculent leur score.", "Auto-évaluation", "Cahier", ""),
    ],
    "sujet_title": "Sujet d'entraînement — Unité III (Objet technique) — /20",
    "exercices": [
        ("Exercice 1 — Connaissances (4 points)",
         "A. Associe chaque matériau à une propriété (2 points)\n"
         "1. le métal · 2. le verre · 3. le tissu · 4. le caoutchouc\n"
         "a. souple · b. élastique · c. dur et conducteur de chaleur · d. fragile et transparent"),
        ("", "B. Vrai ou faux — justifie en une phrase (2 points)\n"
              "1. La vis est un assemblage permanent.\n"
              "2. Un outil est inventé pour répondre à un besoin précis."),
        ("Exercice 2 — Exercice chiffré (6 points)",
         "Un atelier fabrique 60 chaises par semaine. 45 chaises sont assemblées avec des vis (démontables "
         "pour le transport) et le reste avec de la colle et des clous.\n"
         "1. Quel pourcentage des chaises est assemblé avec des vis ? (2 pts)\n"
         "2. Combien de chaises sont assemblées avec de la colle et des clous ? (2 pts)\n"
         "3. Si l'atelier double sa production en gardant la même proportion, combien de chaises seront "
         "assemblées avec des vis ? (2 pts)"),
        ("Exercice 3 — Étude de document (6 points)",
         "Un fabricant de meubles en kit veut que ses clients puissent monter et démonter facilement les "
         "meubles pour les transporter.\n"
         "1. Quel type d'assemblage doit-il utiliser en priorité ? (2 pts)\n"
         "2. Cite un exemple concret de ce type d'assemblage. (2 pts)\n"
         "3. Pourquoi un assemblage collé ou soudé ne conviendrait-il pas ici ? (2 pts)"),
        ("Exercice 4 — Situation (4 points)",
         "Une charrette tirée par un zébu roule sur la route, puis le conducteur tire sur les rênes et "
         "la charrette s'arrête.\n"
         "Explique en deux phrases quelles forces sont en jeu dans cette situation et quels effets elles "
         "produisent."),
    ],
    "total": 20,
    "corrige_lines": [
        [("Exercice 1 (4 pts)", True)],
        [("A. 1 → c · 2 → d · 3 → a · 4 → b (0,5 pt par association)", False)],
        [("B. (1 pt par item : 0,5 pt pour vrai/faux, 0,5 pt pour la justification)", False)],
        [("1. Faux. La vis est un assemblage non permanent (démontable) ; le clou, la colle ou la soudure "
          "sont des assemblages permanents.", False)],
        [("2. Vrai.", False)],
        [("Exercice 2 (6 pts)", True)],
        [("1. 45 ÷ 60 × 100 = 75 % des chaises. (2 pts)", False)],
        [("2. 60 − 45 = 15 chaises. (2 pts)", False)],
        [("3. Nouvelle production = 120 chaises ; 75 % de 120 = 90 chaises assemblées avec des vis. (2 pts)", False)],
        [("Renvoi : séances 20, 21.", True)],
        [("Exercice 3 (6 pts)", True)],
        [("1. Un assemblage non permanent (démontable), comme le vissage. (2 pts)", False)],
        [("2. Par exemple des vis et des boulons, ou des systèmes d'emboîtement. (2 pts)", False)],
        [("3. Parce qu'un assemblage collé ou soudé est permanent et empêcherait le client de démonter le "
          "meuble sans l'abîmer. (2 pts)", False)],
        [("Renvoi : séance 21.", True)],
        [("Exercice 4 (4 pts)", True)],
        [("Le zébu exerce une force qui met la charrette en mouvement (elle avance). (2 pts)", False)],
        [("Le conducteur, en tirant sur les rênes, exerce une force qui arrête le mouvement de la "
          "charrette. (2 pts)", False)],
        [("Renvoi : séance 24.", True)],
        [("Repères de score : 16-20 acquis · 11-15 à consolider · 6-10 fragile · 0-5 reprendre les séances "
          "18 à 24.", False)],
    ],
}

# ---------------------------------------------------------------------------
# SEANCE 9 (globale 26) - Examen Unite III
# ---------------------------------------------------------------------------
S9 = {
    "num": 9, "title": "Sujet d'examen ST T4 — Unité III : Objet technique", "kind": "exam",
    "cover_image": ("scripts/t4/generated_images/u3_bilan_e1.jpg",
                     "Sujet d'examen, Unité III : Objet technique."),
    "theme": THEME, "ras_theme": "Matériaux et leurs propriétés ; méthodes d'assemblage ; outils simples ; "
                                  "force et mouvement",
    "valeurs": VALEURS, "duree": "1 heure",
    "objectif": "évaluer la maîtrise des notions des séances 18 à 24 — matériaux, propriétés, assemblage, "
                "outils, force et mouvement.",
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
    "sujet_title": "SUJET D'EXAMEN — Unité III : Objet technique — Durée : ____________ — /20",
    "exercices": [
        ("Exercice 1 — Connaissances (4 points)",
         "A. Complète avec le mot exact (2 points)\n"
         "1. Un matériau qui ne laisse pas passer l'eau est dit ……………… .\n"
         "2. L'outil qui sert à creuser la terre à Madagascar s'appelle ……………… .\n"
         "3. Un assemblage qui peut être défait sans dommage est dit ……………… .\n"
         "4. Une force peut mettre en mouvement, arrêter, dévier ou ……………… un objet."),
        ("", "B. QCM — une seule réponse exacte (2 points)\n"
              "1. Le métal est un matériau plutôt : A. souple et transparent B. dur et conducteur de "
              "chaleur C. imperméable et léger uniquement\n"
              "2. La soudure est un assemblage : A. permanent B. non permanent C. temporaire\n"
              "3. Un outil est inventé pour répondre à : A. une mode B. un besoin précis C. le hasard\n"
              "4. Tirer sur les rênes d'un zébu qui avance a pour effet : A. de le faire accélérer B. de "
              "l'arrêter C. de le faire voler"),
        ("Exercice 2 — Exercice chiffré (6 points)",
         "Un atelier de menuiserie utilise 3 méthodes d'assemblage sur 80 meubles fabriqués : 20 meubles "
         "sont collés, 12 sont cloués, et le reste est vissé.\n"
         "1. Combien de meubles sont vissés ? (2 pts)\n"
         "2. Quel pourcentage des meubles est assemblé avec un procédé permanent (collé ou cloué) ? (2 pts)\n"
         "3. Quel pourcentage des meubles est démontable ? (2 pts)"),
        ("Exercice 3 — Étude de document (6 points)",
         "Un cultivateur utilise depuis des années un angady au manche fragile, qui casse souvent. Il "
         "décide de fabriquer un nouvel angady avec un manche plus solide.\n"
         "1. Quel était le besoin initial ayant conduit à la création de l'angady ? (1,5 pt)\n"
         "2. Pourquoi le cultivateur souhaite-t-il modifier le manche ? (1,5 pt)\n"
         "3. Quelle propriété du matériau du manche doit-il rechercher en priorité ? (2 pts)\n"
         "4. Pourquoi est-il utile de décrire précisément un besoin avant de fabriquer un objet technique ? "
         "(1 pt)"),
        ("Exercice 4 — Situation (4 points)",
         "Un camarade affirme : « Une force, ça sert juste à pousser les objets. » Réponds-lui en donnant "
         "trois autres effets possibles d'une force, chacun avec un exemple concret."),
    ],
    "total": 20,
    "corrige_lines": [
        [("Exercice 1 (4 pts)", True)],
        [("A. 1. imperméable · 2. angady · 3. non permanent (démontable) · 4. déformer (0,5 pt par "
          "réponse)", False)],
        [("B. 1. B · 2. A · 3. B · 4. B (0,5 pt par item)", False)],
        [("Renvoi : séances 18, 19, 21, 23, 24.", True)],
        [("Exercice 2 (6 pts)", True)],
        [("1. 80 − 20 − 12 = 48 meubles vissés. (2 pts)", False)],
        [("2. (20 + 12) ÷ 80 × 100 = 40 % assemblés de façon permanente. (2 pts)", False)],
        [("3. 48 ÷ 80 × 100 = 60 % démontables (vissés). (2 pts)", False)],
        [("Renvoi : séances 20, 21.", True)],
        [("Exercice 3 (6 pts)", True)],
        [("1. Le besoin de creuser et retourner la terre plus efficacement qu'à la main. (1,5 pt)", False)],
        [("2. Parce que l'ancien manche casse souvent, ce qui montre qu'il ne répond plus correctement au "
          "besoin. (1,5 pt)", False)],
        [("3. La résistance (et éventuellement la légèreté pour ne pas fatiguer l'utilisateur). (2 pts)", False)],
        [("4. Parce que cela permet de choisir un matériau et une forme réellement adaptés, et d'éviter de "
          "refabriquer un objet mal conçu. (1 pt)", False)],
        [("Renvoi : séances 22, 23.", True)],
        [("Exercice 4 (4 pts)", True)],
        [("Trois effets parmi : arrêter un mouvement (ex. freiner un vélo), changer la direction (ex. "
          "dévier un ballon d'un coup de pied), déformer un objet (ex. tordre un fil de fer). (1 pt par "
          "effet correctement illustré, dans la limite de 3 pts ; 1 pt pour la clarté de la réponse).", False)],
        [("Renvoi : séance 24.", True)],
        [("TOTAL : 20 points", True)],
    ],
}
