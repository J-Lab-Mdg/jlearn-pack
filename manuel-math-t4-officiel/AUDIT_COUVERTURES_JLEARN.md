# Audit des bookcovers J-Learn du dépôt

## Recherche effectuée

Le dépôt contient des couvertures dans les familles suivantes :

- Mathématiques : T4, T5, T7, T8, T9 ;
- Histoire : T6, T7, T8, T9 ;
- Physique-Chimie : T6, T7, T8, T9, avec variantes A4 et variantes de personnage ;
- Tantara : T4, T5, T6, T7, T8, avec variantes A4.

## Modèle mathématique retenu

Le fichier canonique pour le T4 est :

`manuel-math-t4/assets/cover_math_t4.png`

Il reprend exactement la famille des couvertures Math T5/T7/T8/T9 :

1. en-tête « FICHE DE PRÉPARATION » ;
2. logo J-Learn en haut à droite ;
3. titre « MATH T4 » ;
4. slogan « Apprendre, c’est une vie, pas un choix. - J-Learn. » ;
5. scène de classe devant un tableau ;
6. bloc « Contenu PE » ;
7. fiche de préparation ;
8. leçon ;
9. exercices ;
10. sujet d’examen et corrigés ;
11. contact J-Learn ;
12. édition 2026.

Cette couverture est adaptée au manuel T4 et non à une autre matière. Elle est un modèle visuel/éditorial, pas une source de contenu mathématique.

## Décision pour le manuel T4 officiel

- `manuel-math-t4-officiel/assets/cover_math_t4.png` est la couverture officielle utilisée par `src/build_skill.js`.
- `cover_math_t4_scene.png` reste une illustration alternative de scène et ne remplace pas le bookcover canonique.
- La couverture canonique est intégrée au DOCX SkillV1.
- Aucun texte de programme ou contenu mathématique n’est copié depuis les autres matières ; seules les conventions graphiques communes J-Learn sont observées.

## Autres observations

- Les couvertures Physique-Chimie ajoutent une sous-ligne de matière et parfois « Annexe » dans le contenu ; ce n’est pas nécessaire sur la couverture Math T4 actuelle, car le modèle Math T5/T7/T8/T9 est la référence la plus proche.
- Les couvertures Histoire et Tantara changent les intitulés selon la matière et la langue ; elles confirment que le gabarit est commun mais que le texte de couverture doit rester spécifique à la discipline.
- Les variantes A4 sont des déclinaisons de format, pas un autre modèle éditorial.
