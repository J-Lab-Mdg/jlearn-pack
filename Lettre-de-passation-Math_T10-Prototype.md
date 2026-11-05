LETTRE DE PASSATION — Manuel Mathématiques T10 — Prototype V5

1. ÉTAT D’AVANCEMENT
   - Le modèle correct a été identifié dans `Nos manuels/Math_T5_JLearn.docx`, explicitement intitulé Math T5.
   - Le Math T5 réel comprend 56 leçons, 6 révisions et 6 sujets d’examen, répartis en six unités.
   - Il contient 218 tableaux et 231 illustrations intégrées.
   - Le fichier original Math T5 est inchangé.
   - Une lecture exhaustive des 68 sections réelles est disponible dans `audits/AUDIT_MATH_T5_68_SEANCES_LIGNE_PAR_LIGNE.md`.
   - Le prototype recommandé est maintenant `manuel-mathematiques-t10/prototypes/Manuel_Mathematiques_T10_JLearn_V5.docx`. V1, V2, V3 et V4 sont conservés comme versions historiques.

2. POINT DE COMMUNICATION DU DÉPÔT
   - `Lettre-de-passation-Relais2.md` est la lettre de communication historique du projet Math 7e/ancien relais ; elle n’est pas écrasée.
   - La procédure générale se trouve dans `skills/jlearn-manuel-scolaire-v18/continuite-multi-session.md`.
   - Cette lettre est le point de communication propre au prototype Math T10.

3. FICHIERS DE RÉFÉRENCE
   - `Nos manuels/Math_T5_JLearn.docx` : modèle Math T5 réel.
   - `audits/AUDIT_MATH_T5_68_SEANCES_LIGNE_PAR_LIGNE.md` : audit ligne par ligne du modèle réel.
   - `PE_T10.docx` : programme d’études T10.
   - `RAPE-T10_2024_2025.docx` : répartition annuelle T10.
   - `skills/jlearn-manuel-scolaire-v18/SKILL.md` : règles générales.
   - `skills/jlearn-manuel-scolaire-v18/mathematiques.md` : règles propres aux mathématiques.
   - `skills/jlearn-manuel-scolaire-v18/design-fiche.md` : design de la fiche.

4. STRUCTURE T5 REPRISE DANS LE V5
   - Six unités T10 : Logique et algorithmique ; Nombres réels et encadrements ; Trinôme/systèmes/polynômes ; Équations et fonctions ; Vecteurs/droites/cercles ; Statistiques et trigonométrie.
   - Chaque unité comporte deux leçons, une révision et un sujet d’examen prototype.
   - En-tête de séance local : `SÉANCE 1 / 4 — TITRE` puis `SÉANCE 2 / 4 — TITRE`.
   - `FICHE DE PRÉPARATION` avant la méta-table.
   - Méta-table à deux cellules : informations pédagogiques à gauche, date/classe/séance/durée à droite, sans bordure.
   - Fiche de déroulement à 6 colonnes et 11 lignes, avec en-tête à deux niveaux.
   - Leçon directement après la fiche, sans titre redondant « LEÇON ».
   - Progression explicite : leçons → révision de l’unité → sujet d’examen → corrigé séparé.
   - Code couleur inspiré du T5 réel : titre rouge, sous-titres verts, repères bleus, correction rose.

5. DÉCISIONS VALIDÉES
   - Niveau : T10 / 2nde.
   - Matière : Mathématiques.
   - Langue : français uniquement.
   - Police : Times New Roman.
   - Le Math T5 original reste inchangé.
   - La couverture n’est pas encore adaptée ; utiliser le coverbook fourni ultérieurement et ne modifier que la matière et la classe.

6. VÉRIFICATIONS DU V5
   - Archive DOCX valide (`testzip()` positif).
   - Une seule section Word.
   - Six unités visibles dans le tableau de bord et dans le sommaire.
   - 12 fiches de préparation, deux par unité.
   - 6 révisions et 6 sujets d’examen format T10.
   - Méta-tables à deux cellules et sans bordures.
   - Fiches à six colonnes et 11 lignes.
   - 12 signets de séance et 12 liens internes du sommaire conservés.
   - Les formules OMML des leçons existantes sont conservées ; les nouvelles synthèses et évaluations utilisent aussi les symboles mathématiques Unicode.

7. À FAIRE EN PRIORITÉ
   - Ouvrir le V5 dans Word PC et contrôler les pages, tableaux, liens et équations.
   - Vérifier tous les corrigés par calcul réel.
   - Comparer le découpage proposé avec le volume horaire officiel T10 ; le V5 reste un prototype de structure, pas encore le manuel annuel complet.
   - Développer les deux leçons de chaque unité en séances supplémentaires si le programme T10 l’exige.
   - Adapter ensuite la couverture selon les règles utilisateur.

8. QUESTIONS EN SUSPENS
   - Nombre exact de séances T10 à produire dans la version complète.
   - Découpage définitif des grands thèmes en séances quotidiennes.
   - Validation Word PC du V5.
