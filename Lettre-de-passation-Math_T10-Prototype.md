LETTRE DE PASSATION — Manuel Mathématiques T10 — Prototype V3

1. ÉTAT D’AVANCEMENT
   - Le modèle de référence a été analysé dans `Nos manuels/Math_T5_JLearn.docx`, fichier explicitement intitulé Math T5 dans le dépôt.
   - Le Math T5 réel comprend 56 leçons, 6 révisions et 6 sujets d’examen. Il est contrôlé ligne par ligne dans `audits/AUDIT_MATH_T5_68_SEANCES_LIGNE_PAR_LIGNE.md`.
   - Un prototype T10 a été créé à partir du programme `PE_T10.docx` et du `RAPE-T10_2024_2025.docx`.
   - Le prototype retenu est : `manuel-mathematiques-t10/prototypes/Manuel_Mathematiques_T10_JLearn_V3.docx`.
   - Le V3 précédent appliquait une première approximation du design ; il sera remplacé par une version fondée sur le Math T5 réel avec les règles du skill : Times New Roman, code couleur, marges, interlignes, alinéas, méta-tables sans bordures, fiche à six colonnes, équations natives, signets et liens internes.

2. POINT DE COMMUNICATION DU DÉPÔT
   - Le modèle existant de passation est `Lettre-de-passation-Relais2.md` ; il concerne le Math T5 et ne doit pas être écrasé.
   - La procédure générale est documentée dans `skills/jlearn-manuel-scolaire-v18/continuite-multi-session.md`.
   - Cette lettre est le point de communication propre au prototype Math T10.

3. FICHIERS DE RÉFÉRENCE
   - `Nos manuels/Math_T5_JLearn.docx` : modèle Math T5 réel, original et inchangé.
   - `audits/AUDIT_MATH_T5_68_SEANCES_LIGNE_PAR_LIGNE.md` : lecture structurale et ligne par ligne des 68 sections réelles T5.
   - `PE_T10.docx` : programme d’études T10.
   - `RAPE-T10_2024_2025.docx` : répartition annuelle T10.
   - `skills/jlearn-manuel-scolaire-v18/SKILL.md` : règles générales du skill.
   - `skills/jlearn-manuel-scolaire-v18/mathematiques.md` : règles spécifiques aux mathématiques.
   - `skills/jlearn-manuel-scolaire-v18/design-fiche.md` : design de la fiche.

4. DÉCISIONS VALIDÉES
   - Niveau : T10 / 2nde.
   - Matière : Mathématiques.
   - Langue : français uniquement.
   - Police : Times New Roman.
   - Référence de conception : Math T5 existant.
   - Code couleur : rouge pour les titres principaux, vert pour les sous-titres de leçon, bleu pour les repères et exercices, noir pour le texte, rose/bordeaux réservé aux repères de corrigé.
   - La couverture n’est pas encore adaptée ; utiliser le coverbook fourni ultérieurement et ne modifier que la matière et la classe.
   - Le Math T5 original ne doit pas être modifié.

5. VÉRIFICATIONS EFFECTUÉES SUR LE V3
   - Archive DOCX valide (`testzip()` positif).
   - Une seule section Word.
   - 12 fiches de préparation.
   - Fiches avec 6 colonnes et en-tête à deux niveaux.
   - Méta-tables sans bordures visibles.
   - 116 paragraphes d’équations natives OMML.
   - 12 signets de séance et 12 liens internes du sommaire.
   - Années calendaires supprimées du contenu du manuel.
   - Illustrations conservées et décrites par un texte alternatif.

6. À FAIRE EN PRIORITÉ
   - Ouvrir le V3 dans Word PC et contrôler visuellement les pages, les tableaux et les équations.
   - Vérifier les corrigés numériques avec calcul réel avant toute diffusion.
   - Vérifier que les 12 grands thèmes correspondent au volume annuel réel du T10 ; le V3 est encore un prototype thématique, pas le manuel annuel complet.
   - Développer les séances supplémentaires si le programme exige plusieurs séances par grand thème.
   - Adapter ensuite la couverture selon les règles utilisateur.

7. QUESTIONS EN SUSPENS
   - Nombre exact de séances T10 à produire pour la version complète.
   - Découpage définitif des grands thèmes en séances quotidiennes.
   - Validation Word PC du V3.
