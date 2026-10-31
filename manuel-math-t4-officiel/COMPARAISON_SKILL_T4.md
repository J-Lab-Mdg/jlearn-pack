# Comparaison du manuel Mathématiques T4 avec le skill J-Learn

## 1. Skill retrouvé

- **Skill opérationnel** : `skills/jlearn-manuel-scolaire-v18/SKILL.md` — version v18.
- **Analyse du skill** : `skills/Analyse-Skill-jlearn-v19.md` et `Analyse-Skill-jlearn-v19.md`.
- **Spécifications complémentaires** :
  - `skills/jlearn-manuel-scolaire-v18/mathematiques.md` ;
  - `skills/jlearn-manuel-scolaire-v18/design-fiche.md` ;
  - `skills/jlearn-manuel-scolaire-v18/manuel-structure.md` ;
  - `skills/jlearn-manuel-scolaire-v18/technical-notes.md` ;
  - `skills/jlearn-manuel-scolaire-v18/illustrations.md`.
- **Référence de réalisation T5** : `manuel-math-t5/src/engine.js`, `merge.py`, `methodes.js`, `exams.js` et `AUDIT_RESTAURATION_FICHES_T5.md`.

## 2. Verdict rapide

Le livrable T4 actuel est une **version de contenu complète et vérifiée structurellement**, mais ce n’est pas encore une version finale conforme à toutes les exigences visuelles et pédagogiques du skill v18/T5.

Il couvre bien le programme officiel T4, mais son générateur actuel est un prototype Python simplifié. Le skill prévoit pour une génération de zéro le pipeline **Node.js + `docx`**, des fiches de préparation normalisées, un sommaire à signets, des illustrations, des exercices notés variés et des contrôles mathématiques plus poussés.

## 3. Tableau comparatif

| Exigence | Skill v18 / standard T5 | T4 actuel | État |
|---|---|---|---|
| Sources officielles | Programme + ressources fournis, référencés | PE T4 + FRP T4 référencés par leçon | ✅ |
| Construction de zéro | Traitement C identifié et séparé d’un ancien manuel | Dossier propre `manuel-math-t4-officiel` | ✅ |
| Progression | Unités/thèmes, tableau de bord, révision et examen | 6 unités, 57 leçons, consolidation par unité | ✅ partiel |
| Fiche enseignant | Fiche prête à l’emploi, contenu réel dans chaque cellule | Fiche générique avec descriptions d’étapes | ⚠️ |
| Structure de séance | I Révision / II Nouvelle leçon / III Évaluation ; 6 sous-étapes dans II | Bloc « Déroulement proposé » en 5 étapes génériques | ❌ |
| Table de préparation | 6 colonnes : étapes, enseignant, apprenants, stratégie, supports, observation | Tables de métadonnées et déroulement à 2 colonnes | ❌ |
| Métadonnées | Discipline, sous-discipline, thème, titre, objectif, documentation, durée, séance | Référence, objectif, contenu, matériel | ⚠️ |
| Contenu réel de la fiche | Questions/R.A. détaillées, actions directement utilisables | « Présenter », « organiser », « comparer », sans dialogue ni R.A. détaillées | ❌ |
| Leçon apprenant | Contenu substantiel, hiérarchie 1/2/3 puis a/b, exemples | « Je retiens », un exemple, un tableau visuel | ⚠️ |
| Code couleur | Titre rouge, sous-titres verts, mots-clés bleus, corrigé bordeaux | Couleurs utilisées, mais titres et hiérarchie ne suivent pas entièrement le standard | ⚠️ |
| Exercices | Au moins 2 types variés, au moins 4 items par exercice, consignes réelles | 3 consignes par leçon, souvent un seul item chacune, sans variété affichée ni barème | ❌ |
| Corrigés | Détaillés, mots-clés bordeaux, calculs contrôlés | Réponses courtes, généralement sans démarche détaillée | ⚠️ |
| Barème | Exercices de la section EXERCICES notés, total affiché | Aucun barème dans le DOCX | ❌ |
| Notation mathématique | Équations/fractions natives OMML quand nécessaire | Fractions écrites en texte `a/b` | ❌ |
| Vérification numérique | Calcul réel de chaque réponse numérique via bash | Audit structurel des sections, pas de recalcul exhaustif | ❌ |
| Illustrations | SVG/PNG/JPG selon le type, images intégrées dans les leçons | Tableaux textuels et supports décrits, pas de figures intégrées | ❌ |
| Sommaire | Liens internes vers signets, opérationnels dès l’ouverture | Sommaire textuel statique | ❌ |
| Police | Times New Roman dans le standard T5 | Aptos dans le générateur T4 | ❌ |
| Annexes | Selon la matière : glossaire, auto-évaluation, index, formules, sources | Page de références et contrôle uniquement | ⚠️ |
| Implémentation | Node.js + package `docx` pour Traitement C | Python + `python-docx` | ⚠️ |
| Audit de correspondance | Fiche–leçon–exercices–corrigé | 57/57 correspondances contrôlées | ✅ |

## 4. Ce qui est déjà solide dans le T4

1. Les contenus sont rattachés aux deux documents officiels T4.
2. Les six composantes et les durées officielles de 198 heures sont couvertes.
3. Les contenus sensibles du PE sont bien repérés : nombres jusqu’à 100 000, fractions simples, décimaux, chiffres romains, divisibilité, angles, aires, données et probabilités simples.
4. Le découpage éditorial est traçable avec des identifiants `U1-L01` à `U6-L08`.
5. Chaque identifiant apparaît dans une structure fiche–leçon–exercices–corrigé.
6. Le dossier ne réutilise pas le contenu de l’ancien dossier T4 comme source pédagogique.

## 5. Écarts prioritaires à corriger

### Priorité 1 — Refaire les fiches selon le moule du skill

Pour chaque leçon, remplacer le déroulement générique par une vraie table à six colonnes :

1. I. Révision ;
2. II. Nouvelle leçon ;
3. Mise en situation ;
4. Présentation ;
5. Observation ;
6. Analyse avec couples question/réponse attendue ;
7. Synthèse énoncée par l’enseignant ;
8. Application ;
9. III. Évaluation.

Les exercices d’Application et d’Évaluation doivent être rédigés directement dans la fiche, sans méta-instruction.

### Priorité 2 — Aligner la mise en page sur T5

- passer à Times New Roman ;
- ajouter de vrais signets et liens internes ;
- intégrer une couverture et un sommaire interactifs ;
- ajouter les pages de séparation et tableaux de bord par unité ;
- intégrer les annexes utiles ;
- utiliser les couleurs standard du skill ;
- générer des fichiers graphiques SVG/PNG pour fractions, numération, angles, solides, aires, conversions et diagrammes.

### Priorité 3 — Renforcer exercices et corrigés

- au moins quatre items par exercice ;
- au moins deux formats variés par leçon ;
- barème par exercice et total ;
- correction détaillée avec démarche ;
- recalcul automatique des réponses numériques ;
- fractions et expressions structurées en équations natives Word lorsque nécessaire.

### Priorité 4 — Choisir le pipeline technique final

Pour une conformité stricte au Traitement C du skill, migrer le générateur vers le pipeline Node.js + `docx` déjà utilisé dans le T5, ou documenter explicitement une exception validée pour Python.

## 6. Conclusion

Le T4 actuel peut être qualifié de **brouillon complet de contenu / V0 éditoriale** : la couverture du programme et la correspondance des leçons sont en place, mais il faut encore appliquer le skill J-Learn/T5 pour obtenir le livrable final attendu.

La prochaine étape correcte n’est donc pas d’ajouter arbitrairement davantage de contenu, mais de **reprendre le générateur et les 57 fiches avec le moule T5/skill**, puis de régénérer et auditer le DOCX final.
