# Analyse de la dernière version Histoire T7 et audit de la version Histoire T8

Date de l’audit : 1 novembre 2026

## 1. Périmètre et sources contrôlés

**Correction importante :** le premier contrôle avait été effectué sur le fichier local `manuel-histoire-t7/livrables/Manuel_Histoire_T7_JLearn_V1.docx`, et non sur le fichier indiqué dans le lien GitHub. L’audit ci-dessous est maintenant recalé sur le fichier exact du lien :

- `Nos manuels/Histoire_T7_JLearn.docx` sur `origin/main` — fichier lié par l’utilisateur, 16 010 579 octets ;
- `manuel-histoire-t7/PLAN.md`
- `manuel-histoire-t7/src/engine.js`
- `PE_T7.docx`
- `manuel-histoire-t8/livrables/Manuel_Histoire_T8_JLearn_V1.docx`
- `manuel-histoire-t8/PLAN.md`
- `manuel-histoire-t8/src/engine.js`
- `manuel-histoire-t8/src/merge.py`
- `PE_T8.docx`

Le contrôle porte sur la progression, la structure DOCX, les liens internes, les images, les fiches de préparation, les leçons, les documents historiques, les exercices et les corrigés.

## 2. Analyse de la dernière version Histoire T7

### 2.1. Progression

La version T7 finale contient :

| Élément | Quantité |
|---|---:|
| Unités | 6 |
| Séances de contenu | 25 |
| Révisions d’unité | 6 |
| Sujets d’examen | 6 |
| Séances affichées dans le DOCX | 37 |
| Scènes | 25 |
| Figures mathématiques/historiques | 25 |
| Médias intégrés dans le fichier lié | 54 (25 scènes, 25 figures et médias de couverture/front matter) |

Le découpage des 25 séances de contenu est cohérent avec le `PLAN.md` :

- U1 : 4 séances ;
- U2 : 6 séances ;
- U3 : 6 séances ;
- U4 : 3 séances ;
- U5 : 4 séances ;
- U6 : 2 séances.

Les sept thématiques historiques du PE T7 sont couvertes. La première unité regroupe volontairement l’Histoire orale et les grandes périodes de la Préhistoire.

### 2.2. Structure de chaque séance de contenu

Les 25 séances de contenu ont toutes la même architecture V3 :

1. fiche de préparation ;
2. tableau de déroulement en six colonnes ;
3. nouvelle page pour la leçon ;
4. scène illustrée ;
5. parties numérotées ;
6. mots-clés mis en évidence ;
7. figure ou frise ;
8. document historique à étudier ;
9. questions et réponses sur le document ;
10. encadré `Le savais-tu ?` ;
11. petit lexique ;
12. exercices ;
13. corrigés.

Contrôle automatisé : les 25 séances ont chacune :

- 5 tableaux ;
- 2 images placées dans le document ;
- 1 document à étudier ;
- 1 encadré `Le savais-tu ?` ;
- 1 petit lexique ;
- 1 bloc d’exercices ;
- 1 bloc de corrigés.

### 2.3. Anomalie repérée dans le fichier T7 lié

La page d’authenticité du fichier lié contient la phrase :

> `Ce manuel « Géographie T4 » est une publication officielle J-Learn.`

Cette mention est incohérente dans un manuel d’Histoire T7 et doit être remplacée par une formulation Histoire T7 avant toute diffusion commerciale. La même page contient également des éléments de vente et de droits qui ne figurent pas dans la version locale du générateur : il faut donc traiter le fichier lié comme une édition différente, et non comme un simple doublon du DOCX local.

### 2.4. Conclusion sur T7

La dernière version T7 du lien constitue un **bon modèle de référence structurelle** pour T8 : la progression est lisible, les unités sont séparées, les scènes et figures sont présentes et chaque séance possède une fiche de préparation ainsi qu’une leçon documentée.

Toutefois, un défaut du moteur T7 est également présent dans T8 : le champ `s.synthese` est utilisé dans la fiche de préparation, mais il n’est pas rendu comme une trace écrite autonome dans la partie élève de la leçon. La synthèse existe donc dans le tableau enseignant, mais pas comme rubrique finale visible avant les exercices.

## 3. Audit de la dernière version Histoire T8

### 3.1. Progression PE T8

La version finale contient :

| Élément | Quantité |
|---|---:|
| Unités | 7 |
| Séances de contenu | 24 |
| Révisions d’unité | 7 |
| Sujets d’examen | 7 |
| Séances affichées dans le DOCX | 38 |
| Scènes de contenu | 24 |
| Figures de contenu | 24 |
| Images intégrées dans le DOCX | 49, couverture comprise |

Les 24 séances de contenu correspondent au découpage du `PLAN.md` :

- U1 — Histoire orale : 2 ;
- U2 — Temps modernes : 5 ;
- U3 — Époque contemporaine : 5 ;
- U4 — Royaumes malgaches : 2 ;
- U5 — Royaume de Madagascar : 3 ;
- U6 — Madagascar colonie française : 5 ;
- U7 — Patrimoines : 2.

Les sept thématiques historiques du PE T8 sont représentées et aucune unité prévue dans le programme n’est absente.

### 3.2. Couverture des contenus

Les contenus du PE T8 sont retrouvés dans les sources des unités :

- enquête orale et techniques de l’entretien ;
- production, retranscription, critique et recoupement d’une source orale ;
- délimitation des Temps modernes ;
- Grandes découvertes, facteurs, explorateurs et conséquences ;
- Renaissance et Réforme ;
- Temps modernes à Madagascar ;
- Ancien Régime et Lumières ;
- Révolution française et formation des États-Unis ;
- révolutions industrielles ;
- empires coloniaux ;
- royaumes malgaches et organisation sociale, politique et économique ;
- souverains du Royaume de Madagascar ;
- création et évolution du Royaume sous Radama I et ses successeurs ;
- origines, administration et économie de la colonisation ;
- mouvements nationalistes ;
- marche vers l’indépendance ;
- patrimoines culturels et historiques.

### 3.3. Contrôle structurel

Les 24 séances de contenu T8 ont toutes passé les contrôles suivants :

| Contrôle | Résultat |
|---|---|
| Fiche de préparation | 24/24 |
| Tableau de déroulement | 24/24 |
| Scène intégrée | 24/24 |
| Figure ou schéma intégré | 24/24 |
| Document à étudier | 24/24 |
| Questions et réponses de document | 24/24 |
| Encadré `Le savais-tu ?` | 24/24 |
| Petit lexique | 24/24 |
| Exercices | 24/24 |
| Corrigés | 24/24 |
| Révisions d’unité | 7/7 |
| Sujets d’examen | 7/7 |

Le DOCX est techniquement valide :

- archive ZIP sans erreur ;
- 53 signets internes ;
- 53 liens internes ;
- aucune ancre de lien manquante ;
- 49 médias intégrés ;
- police Times New Roman présente ;
- 7 unités correctement repérées ;
- annexes 1 à 6 présentes ;
- bibliographie et webographie présentes.

## 4. Écarts et points à corriger dans T8

### Priorité 1 — Trace écrite absente de la partie élève

Le moteur T8 possède bien un champ `s.synthese` pour chaque séance, mais cette synthèse est injectée uniquement dans la ligne `5. Synthèse` de la fiche de préparation.

Dans la leçon élève, l’ordre est actuellement :

1. parties de la leçon ;
2. figure ;
3. document à étudier ;
4. `Le savais-tu ?` ;
5. petit lexique ;
6. exercices ;
7. corrigés.

Il manque une rubrique autonome de type :

> **Synthèse** ou **À retenir**
>
> suivie de `s.synthese`, juste avant les exercices.

C’est un défaut commun à T7 et T8, mais il doit être corrigé dans T8 avant validation pédagogique finale.

### Priorité 2 — Scènes et figures trop réduites dans le moteur

Le moteur T8 place :

- les scènes JPG avec une largeur fixe de `430` ;
- les figures PNG avec une largeur fixe de `500`.

La largeur utile de la page est supérieure à ces valeurs. Les images restent donc lisibles, mais elles n’exploitent pas toute la largeur disponible, en particulier les scènes paysage.

Recommandation :

- scène paysage : environ `600–620` ;
- figure ou frise : environ `560–620` selon la densité du contenu.

Les 24 scènes et les 24 figures existent bien ; le problème est leur taille d’affichage, pas leur absence.

### Priorité 3 — Volume officiel et séances supplémentaires

Le PE T8 indique un volume de 62 heures, soit 31 séances de 2 heures. Le manuel contient 24 séances de contenu, auxquelles s’ajoutent 7 révisions et 7 examens : 38 séances affichées.

Cela représente 76 heures si chaque révision et chaque examen sont comptés comme une séance complète de 2 heures.

Ce n’est pas une omission de contenu : c’est un choix éditorial hérité de T7 qui ajoute une révision et un examen à chaque unité. Il faut cependant choisir une formulation claire :

- soit les révisions et examens sont annoncés comme des séances complémentaires hors volume PE ;
- soit ils sont intégrés dans le volume officiel et certaines séances de contenu doivent être regroupées ;
- soit le manuel affiche séparément les 24 séances PE et les évaluations complémentaires.

En l’état, le lecteur peut croire que les 38 séances appartiennent toutes au volume officiel de 62 heures.

### Priorité 4 — Traçabilité des sources

Les fiches indiquent :

> `Programme d’études T8 (MEN) ; manuel J-Learn Histoire T8`

Cette mention est correcte mais trop générale pour un manuel final. Il faudrait ajouter :

- la référence précise `PE_T8.docx` ou sa version PDF officielle ;
- les pages ou tableaux du programme concernés ;
- la référence précise des documents historiques adaptés ;
- une URL complète et vérifiée pour la plateforme éducative mentionnée dans la webographie.

### Priorité 5 — Révisions et examens hors architecture de séance

Les séances de révision et les sujets d’examen sont présents et correctement reliés au sommaire, mais ils ne possèdent pas la même fiche de préparation et le même bloc documentaire que les 24 séances de contenu.

C’est cohérent avec leur fonction d’évaluation, mais le manuel devrait le signaler explicitement dans le mode d’emploi afin d’éviter de les confondre avec des séances ordinaires.

## 5. Pass de correction appliqué

Les quatre demandes de correction ont été appliquées au générateur T8 :

1. couverture T8 conservée et front matter refait pour éviter le doublon de titre ;
2. page `AUTHENTICITÉ ET DROITS` ajoutée avec la mention correcte `Histoire T8` ;
3. révisions et examens renommés `séances complémentaires` dans le mode d’emploi, les tableaux de bord, les titres de séances et le sommaire ;
4. sources renforcées avec `PE_T8.docx`, section Histoire, pages 169–187, `PLAN.md`, et une règle de traçabilité pour les documents historiques.

Le fichier a ensuite été régénéré à partir des sept unités et réaudité :

- 24 séances de contenu ;
- 7 révisions complémentaires ;
- 7 examens complémentaires ;
- 1 page d’authenticité ;
- 0 occurrence de `Géographie T4` ;
- 49 médias intégrés ;
- 58 signets et 106 liens internes ;
- archive DOCX valide.

Les deux points signalés précédemment mais non inclus dans cette passe restent ouverts :

- ajouter la synthèse directement dans la partie élève de chaque leçon ;
- agrandir les scènes et les figures.

## 6. Verdict d’audit T8

### État structurel : ✅ conforme

La dernière version T8 est complète sur le plan de la production : les sept unités, les 24 séances de contenu, les images, les documents, les exercices, les corrigés, les révisions, les examens et les annexes sont présents.

### État pédagogique : ⚠️ à corriger avant validation finale

La version T8 ne doit pas encore être considérée comme définitivement validée pour deux raisons principales :

1. la synthèse de chaque leçon n’apparaît pas dans la partie élève avant les exercices ;
2. les scènes et figures pourraient être agrandies pour améliorer la lisibilité.

### Ordre recommandé pour la prochaine correction

1. ajouter `Synthèse` ou `À retenir` dans les 24 leçons T8 ;
2. agrandir les scènes et les figures ;
3. clarifier le statut des 14 séances de révision/examen par rapport au volume officiel ;
4. renforcer la traçabilité bibliographique ;
5. refaire l’audit DOCX et une vérification visuelle finale.
