# Préférences utilisateur — J-Learn

Dernière mise à jour : 2026-11-05  
Source : conversation Arts T9 avec l'utilisateur.

## 1. Public prioritaire

L'utilisateur veut aider les élèves, mais **surtout d'abord les enseignants**.

Cas important : certaines disciplines, comme les Arts, sont nouvelles pour beaucoup d'enseignants à Madagascar. Il faut donc supposer que :

- l'enseignant peut découvrir la discipline ;
- il peut ne pas savoir quoi faire en classe ;
- il peut ne pas savoir quoi dire ;
- il peut ne pas savoir comment organiser une activité artistique ;
- il peut avoir peur de mal enseigner.

Le manuel doit donc être un **outil de sécurisation pédagogique**.

Il ne suffit pas de donner :
- une leçon à copier ;
- un exercice ;
- un corrigé.

Il faut aussi donner :
- ce que l'enseignant doit comprendre ;
- ce qu'il doit préparer ;
- ce qu'il peut dire pendant le cours ;
- ce qu'il doit montrer ;
- ce qu'il doit faire faire aux élèves ;
- comment il observe la réussite ;
- comment il corrige sans bloquer l'élève.

## 2. Style attendu

Le manuel doit être :

- riche ;
- facile à comprendre ;
- concret ;
- guidant ;
- utilisable par un enseignant qui débute dans la discipline.

Éviter :
- les titres génériques ;
- les consignes floues ;
- le jargon non expliqué ;
- les structures identiques pour toutes les sous-disciplines ;
- les exercices écrits par défaut dans une discipline pratique.

Préférer :
- des titres qui disent l'action réelle ;
- des exemples locaux ;
- des étapes visibles ;
- des phrases que l'enseignant peut réellement dire ;
- des critères d'observation simples ;
- une courte trace élève après le guide enseignant.

## 3. Méthode de travail avec l'utilisateur

- Discuter avant de produire quand la pédagogie n'est pas claire.
- Poser des questions si un choix est important.
- Ne pas deviner les paramètres du manuel.
- Ne pas interpréter une demande de clarification comme une demande de suppression.
- Si l'utilisateur demande « qu'est-ce qu'on fait exactement ? », expliquer l'activité, ne pas la remplacer automatiquement.
- Fournir des liens raw GitHub quand un fichier est livré : branche + commit si possible.
- Signaler si le fichier n'est pas sur `main`.

## 4. Sources officielles

Pour Arts T9 :

- Source de référence validée : `PE RAPE/PE T9.pdf`.
- Le fichier `PE_T9 (1).docx` peut aider, mais en cas d'écart, le PDF lié par l'utilisateur fait foi.
- Ressources pédagogiques : `FRP_3eme_ARTS.pdf`.
- Modèle média/audio : `Nos manuels/Anglais_T10_JLearn.pdf`.

Toujours vérifier le PE avant de proposer une répartition ou une démarche.

## 5. Arts T9 : décisions déjà prises

- Langue du manuel : français.
- Volume horaire cible : suivre le PDF, soit 66 h = 33 séances de 2 h, sous réserve de validation finale de la répartition.
- Séance 6 : garder l'activité du PE, sculpture / instrument à percussion recyclable, mais la rendre très claire.
- Visuels : suivre la logique du PE : modèle à observer + étapes techniques + production attendue.
- Évaluation : production de l'élève dominante ; écrit court seulement s'il est utile.
- Libellés : ne plus utiliser « OK / PAS OK ». Préférer les symboles ✔️ et ✗ rouge, seulement si un contre-exemple est utile.
- Contre-exemple : uniquement si l'erreur est fréquente.
- Médias : image scène scolaire + audio + lien vidéo quand pertinent.
- Chaque sous-discipline doit avoir sa personnalité pédagogique.

## 6. Ce qu'il ne faut pas faire

- Ne pas produire un manuel uniquement « élève » si l'utilisateur demande un guide enseignant.
- Ne pas mettre des exercices textuels partout en Arts.
- Ne pas utiliser des titres comme « Les nuances », « Les couleurs », « Les mouvements » sans action concrète.
- Ne pas supprimer une séance du PE parce qu'elle est mal comprise ; d'abord l'expliquer.
- Ne pas mélanger les durées du `.docx` et du PDF sans signaler l'écart.
- Ne pas réutiliser une structure uniforme pour arts visuels, musique, danse et art dramatique.

## 7. Préférences générales confirmées (toutes disciplines) — session Géographie T8, 2026-11-05

- **Méthode de travail avec l'utilisateur** : l'utilisateur répond rarement aux questions ouvertes (`ask_user` à choix multiples génériques) mais réagit bien à une proposition directe accompagnée d'un résumé des faits, suivie d'une confirmation courte (« oui » / « non »). Préférer : présenter les constats + une proposition concrète, puis demander une confirmation simple, plutôt que des questions ouvertes à choix multiples sans contexte.
- **Titres de rubrique (toutes disciplines)** : un titre qui introduit un exemple/une mise en situation ne doit jamais contenir de prénom, même pour « annoncer » l'exemple, car le prénom est de toute façon répété dans la première phrase du corps juste après (jugé répétitif). Utiliser un titre basé sur le type de document ou une activité/verbe, sans prénom.
- **Citations de source** : toujours vérifier qu'un nom de fichier cité comme source existe réellement dans le dépôt (`git ls-tree`, dossier `PE RAPE/`) avant de le réutiliser dans un manuel. Un nom de fichier qui « ressemble » au tome concerné (ex. `FRP_8eme` pour le tome T8) n'est pas une preuve suffisante : une vérification a révélé une citation erronée sur Géographie T8, corrigée depuis.
- **Audits de contenu (manuel vs FRP officiel)** : distinguer clairement, dans le rapport à l'utilisateur, les vrais écarts (sigle/terme absent alors que présent dans la source officielle, exemple : OPEP) des omissions éditoriales raisonnables (statistiques datées, chiffres d'une année précise) qu'il n'est pas nécessaire de figer dans un manuel durable — l'utilisateur a validé cette distinction.

## 8. Préférences confirmées — sessions manuels de langues (Anglais T4–T11, Français T4–T9), 2026-11-05

- **Terminologie** : l'utilisateur exige « fiche de préparation » (ne jamais dire « fiche péda »).
- **Langue de rédaction des fiches** : anglais facile pour les manuels d'anglais, français simple pour les manuels de français ; mots clés en gras et/ou italique ; AUCUN malgache dans les manuels d'anglais (prononciation figurée à base française acceptée).
- **Durées des séances** : laissées vides (« ……… ») dans les fiches.
- **Pédagogie des leçons** : minimum de texte — règle courte, mots-outils en gras, exemples clés en gras, note [entre crochets] comme image mentale à ne pas copier, puis exercice qui découle directement de la règle.
- **Exercices** : 4 ou plus par leçon ; corrigé gris italique immédiatement après chaque exercice ; chaque item a)/b)/c) à la ligne ; parfois des puces ; « relier » en 2 colonnes.
- **Audios** : un audio par leçon (texte support s'il existe, sinon règle + exemples + « Répète avec moi ») + 1 dictée courte par unité ; hébergement Google Drive public uniquement, jamais de lien GitHub dans le manuel, jamais de .docx sur Drive.
- **Anti « trop IA »** : trop de couleurs/encadrés = signal d'IA pour l'utilisateur ; garder surlignage jaune, images et majuscules ; s'inspirer de manuels réels sans jamais copier ; les cahiers d'élèves scannés (à venir) serviront de référence de style.
- **Couvertures** : toujours fournies par l'utilisateur (`coverbook/`) ; ne jamais inventer un design ; charte T4–T10 = photoréaliste tableau vert.
- **Validation** : ne rien appliquer de nouveau sans validation explicite ; en cas d'ambiguïté, poser la question plutôt que deviner.

— Agent « manuels de langues », 2026-11-05.
