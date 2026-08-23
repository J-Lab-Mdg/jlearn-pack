LETTRE DE PASSATION — Manuel Mathématiques 7e (Calcul, Madagascar) — Relais n°2

1. ÉTAT D'AVANCEMENT
   - Blocs/thèmes terminés : Mois 1 complet (Trimestre 1) — 9 fiches sur 81 (fiches 1 à 9 : Arithmétique nombres 0→milliard, Géométrie carré/rectangle/triangle, Mesure longueur/échelle)
   - Bloc en cours si interrompu en plein milieu : aucun, le Mois 1 est terminé proprement, prêt à démarrer le Mois 2 depuis zéro
   - Blocs restants : Mois 2 à 9 (72 fiches), soit tout le reste du Trimestre 1, puis Trimestre 2 (Mois 4-6) et Trimestre 3 (Mois 7-9)

2. FICHIERS À RÉ-UPLOADER AVEC CETTE LETTRE
   - manuel-calcul-7e-projet.zip — contient tout le code source (src/), les figures géométriques déjà générées (assets/), le docx du Mois 1 déjà livré (output/), le plan final validé (PLAN-FINAL-81-FICHES.md) et un README technique expliquant l'architecture et les pièges déjà résolus — À LIRE EN ENTIER avant de commencer, surtout README.md et PLAN-FINAL-81-FICHES.md
   - calcul_FRA_7em.docx — le programme scolaire officiel original (fiche de répartition annuelle), toujours utile pour vérifier le contenu exact des mois restants

3. VERSION DU SKILL
   - jlearn-manuel-scolaire-skill-v19.zip — à réuploader tel quel, aucune modification nécessaire pour ce manuel (pas de version malgache, donc vocabulaire-langues.md et fiabilite-malgache.md non concernés)
   - ATTENTION — signalement de conformité pour info : vocabulaire-langues.md et discipline-malagasy.md contiennent encore l'ancienne structure "8 étapes à plat" au lieu de la structure I/II/III imposée par SKILL.md. Sans impact sur CE manuel (version française uniquement, structure I/II/III déjà appliquée correctement dans le Mois 1), mais à corriger avant tout futur manuel malgache ou anglais intégral.

4. DÉCISIONS PROPRES À CE MANUEL (absentes du skill générique)
   - Traitement C (création de zéro), matière affichée "Mathématiques", niveau 7e, version française UNIQUEMENT (pas de malgache)
   - Regroupement : 1 fiche = 1 objectif/technique précis du programme (jamais deux techniques mélangées dans une fiche) — décision explicite et validée, ne pas proposer de fusion/regroupement pour réduire le volume sans redemander à l'utilisateur
   - Calcul Mental : PAS une fiche à part — 5 min intégrées en tout début de chaque séance, avant I. Révision, technique du mois précisée
   - Corrigé en rose saumon #E9704F (remplace le bordeaux #C2185B par défaut du skill)
   - Stack technique : Node.js + docx (npm link, pas npm install — pas d'accès réseau), figures géométriques en Pillow/PNG (pas de SVG→PNG possible, outils absents)
   - 3 fiches ont un nombre de séances volontairement vide (34, 74, 79) : le programme officiel ne le précise pas à ces endroits, confirmé avec l'utilisateur — ne pas en inventer
   - Volumétrie confirmée et acceptée par l'utilisateur : Mois 1 = 44 pages/9 fiches (≈4,9 pages/fiche) → environ 400 pages pour le manuel complet
   - Barème exercices : 5 points par exercice (2 exercices en Application + 2 en Évaluation = 20 pts/fiche en général)
   - PDF de contrôle : usage interne uniquement pour vérification visuelle, JAMAIS livré à l'utilisateur (demande explicite : "pas de PDF")

5. LEXIQUE / CORRECTIONS VALIDÉES PENDANT CE RELAIS
   - Sans objet (manuel en français uniquement, pas de lexique malgache à jour)

6. À FAIRE EN PRIORITÉ PAR LE PROCHAIN RELAIS
   - Lire README.md et PLAN-FINAL-81-FICHES.md du zip en entier
   - Reproduire l'environnement (npm link docx, tester node -e "require('docx')")
   - Démarrer le Mois 2 : fiches 10 à 23 (Arithmétique : Addition/Soustraction/Multiplication/Division/Divisibilité — Géométrie : Parallélogramme/Trapèze/Losange/Cercle — Mesure : Unités de capacité/aire)
   - Pour la géométrie du Mois 2, créer figures_mois2.py sur le modèle de figures_mois1.py (parallélogramme, trapèze, losange, cercle à dessiner)
   - Vérifier chaque corrigé par calcul réel avant intégration (pas d'estimation)
   - Livrer un docx par mois (comme Mois1-Complet.docx), avec vérifications XML systématiques (sectPr=1, ns0=0, 0 double espace)

7. QUESTIONS EN SUSPENS POUR L'UTILISATEUR
   - Aucune actuellement. Si de nouvelles ambiguïtés apparaissent dans le programme officiel pour les mois restants (comme cela a été le cas au début de ce projet), les poser explicitement plutôt que de deviner — l'utilisateur a été très clair sur ce point après une première tentative de découpage erronée.
