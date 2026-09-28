# Mathématiques — spécificités

Complète le reste du skill pour la matière Mathématiques. La structure générale (8 étapes, 3 grandes parties I/II/III, moules par langue, exercices…) reste celle du skill — ce fichier ne couvre que ce qui est propre aux maths.

---

## Langue selon le niveau

À Madagascar, le programme officiel de mathématiques exige le malgache en 11e et 10e (CP1/CP2). En pratique, la fiche de préparation et le texte de la leçon sont **rédigés en français, à tous les niveaux, y compris 11e/10e** — le rédacteur n'ayant pas le temps de vérifier mot à mot une leçon entière en malgache. **Seul l'encadré VOAMBOLANA (ci-dessous) est en malgache**, en 11e/10e uniquement : c'est le geste qui permet de respecter l'exigence du programme sans exiger une vérification complète du contenu en malgache.

À partir de la 9e (CE), pas de VOAMBOLANA — tout est en français, sans élément malgache.

Cette bascule est propre aux mathématiques — ne pas l'appliquer par déduction à une autre matière sans confirmation de l'utilisateur.

---

## Encadré VOAMBOLANA (11e/10e uniquement)

Le programme officiel exigeant du malgache en 11e/10e, chaque page LEÇON comporte un encadré séparé qui traduit les termes mathématiques-clés de la séance — c'est le seul élément en malgache du manuel à ces niveaux (le reste de la fiche et de la leçon restent en français, voir "Langue selon le niveau" ci-dessus).

- **Emplacement** : bas de la page LEÇON, après le texte de la leçon.
- **Contenu** : uniquement les termes **nouveaux de cette séance** — pas un cumul des termes déjà vus dans les séances précédentes.
- **Format** : `Terme français : Terme malgache`, un par ligne.
  - Exemple : *Addition : Asa marika manampy* — *Opération : Asa marika*
- **Ne jamais l'ajouter** pour un manuel à partir de la 9e (rédigé en français, pas de traduction nécessaire).
- **Source stricte : uniquement les documents malgaches déjà uploadés par l'utilisateur** (programme officiel, manuel source, ou tout autre fichier malgache fourni pour le projet). Ne jamais inventer un terme ni le construire par recherche web générale pour ce cadre précis — si un terme mathématique nécessaire n'apparaît dans aucun document fourni, le signaler à l'utilisateur et demander la traduction plutôt que de la chercher soi-même.
- Chaque terme malgache utilisé dans ce cadre suit la même règle de vérification que le reste du contenu malgache (voir [`fiabilite-malgache.md`](fiabilite-malgache.md) section 1-2) — jamais improvisé.

---

## Encadré "Astuce" (mnémotechnique)

Séparé de la leçon elle-même, dédié à un moyen simple de retenir une formule, une méthode ou un ordre d'étapes (ex : moyen mnémotechnique pour l'ordre des opérations, une image mentale pour une propriété géométrique). Toujours facultatif — ne l'inclure que quand une astuce réelle et utile existe pour la notion traitée ; ne pas en inventer une artificielle juste pour remplir le cadre.

---

## Simplification du contenu

Priorité donnée à la clarté : phrases courtes, vocabulaire simple, démarches présentées pas à pas plutôt qu'en un seul bloc dense. S'applique à la leçon comme aux consignes d'exercices. Ne pas confondre avec un raccourcissement du contenu pédagogique : simplifier la formulation, pas sauter d'étape de raisonnement nécessaire à la compréhension.

---

## Structure de la fiche — rappel et ajustements

La structure à 8 étapes du skill général reste valable, organisée dans les mêmes 3 grandes parties (I. Révision, II. Nouvelle leçon — Mise en situation/Présentation/Observation/Analyse/Synthèse, III. Application/Évaluation). Ajustements propres aux maths pour la partie II :

- **Observation (étape 4)** : présenter un exemple résolu ou une figure, plutôt qu'un texte ou une image à décrire — cohérent avec la règle générale (observation seule, sans réponse de l'élève à ce stade). **Au primaire, un matériel manipulable (bâtonnets, solides géométriques, balance…) est une option valable à la place d'une image** — voir `design-fiche.md`, note "Matériel didactique manipulable" ; à décider au cas par cas, pas un défaut.
- **Analyse (étape 5)** : faire ressortir la méthode ou la formule à partir de l'exemple observé. Le travail de groupe sur grande ardoise est une option documentée pour cette étape (voir `design-fiche.md`) — pas un défaut, un choix parmi les autres techniques déjà valides.
- **Application (étape 7)** : même option pour la grande ardoise — le gabarit autorise déjà le travail en groupe ("Asa isan-tarika") à cette étape ; la grande ardoise en est le support documenté, à la place du cahier par défaut (voir `design-fiche.md`).
- **Synthèse (étape 6)** : la formule ou règle à retenir, énoncée par l'enseignant (jamais par les élèves — règle générale du skill). L'astuce mnémotechnique, si elle existe, vit dans son propre encadré séparé (voir ci-dessus), pas dans le texte de synthèse lui-même.

---

## Notation mathématique dans le `.docx`

**Toujours utiliser les vraies équations natives Word**, pas une approximation en texte brut ("3/4", "x^2"). La librairie `docx` (déjà utilisée dans ce skill, voir `technical-notes.md`) a un support natif d'équations (OMML) via sa classe `Math` — pas besoin d'une dépendance externe fragile (les convertisseurs LaTeX→OMML trouvés sur npm sont peu maintenus, à éviter vu l'environnement réseau capricieux ici).

Composants disponibles : `Math`, `MathFraction`, `MathRadical`, `MathSuperScript`, `MathSubScript`, `MathSum`, `MathRun`. Exemple pour une fraction :

```js
const { Math, MathFraction, MathRun } = require("docx");

new Math({
  children: [
    new MathFraction({
      numerator: [new MathRun("a")],
      denominator: [new MathRun("b")],
    }),
  ],
});
```

Les symboles Unicode simples (×, ÷, ≤, ≥, π, √ isolé sans indice de degré, etc.) peuvent rester en texte normal (`MathRun` ou texte simple) quand ils ne font pas partie d'une structure (fraction, exposant, radical) — la classe `Math` n'est nécessaire que pour les structures qui ont une vraie mise en page verticale/imbriquée.

---

## Séparateur décimal

**Toujours la virgule** (3,14), jamais le point (3.14) — norme française/malgache. Vérifier ce point particulièrement dans tout calcul fait via du code (JavaScript utilise le point par défaut) : reformater avant insertion dans le document.

---

## Vérification numérique automatique des corrigés

Contrairement au contenu narratif, une réponse de maths est objectivement vérifiable. **Calculer chaque corrigé via le bash tool avant de le livrer**, plutôt que de faire confiance au texte généré — ce type d'erreur (un calcul faux dans un corrigé) n'est détecté par aucune des vérifications XML habituelles (`technical-notes.md`). S'applique à tout exercice numérique (calcul, équation, problème avec réponse chiffrée) — pas nécessaire pour les questions purement conceptuelles (ex. "quelle est la définition de…").

---

## Distracteurs spécifiques aux maths

Complète la règle générale sur les distracteurs (SKILL.md, règle critique) : en maths, un bon distracteur est une **erreur de calcul ou de méthode plausible** — signe inversé, ordre des opérations non respecté, étape de calcul oubliée, unité incohérente (ex. confondre km et m, kg et g dans un problème). Jamais un résultat juste mais présenté comme faux, jamais une valeur totalement aléatoire sans lien avec une erreur réaliste.

---

## Illustrations mathématiques

Pour les figures géométriques, schémas, graphiques simples : privilégier l'approche SVG→PNG déjà documentée dans [`illustrations.md`](illustrations.md) (approche 2) — fiable et gratuite pour ce type de contenu. Voir aussi le mode 4 ajouté à ce fichier (prompt rédigé pour génération externe) quand un schéma dépasse ce qu'un SVG géométrique simple peut représenter.
