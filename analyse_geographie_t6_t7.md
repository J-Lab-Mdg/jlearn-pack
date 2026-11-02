# Analyse comparative et technique — Géographie T6 / T7

**Date de l’audit : 2 novembre 2026**  
**Dépôt audité :** `J-Lab-Mdg/jlearn-pack`  
**Référence Git du dépôt principal :** `origin/main` = `b1d130df8c738044b6d412190872de435e22dbd9`

## 1. Conclusion exécutive

- Le **manuel de Géographie T6** a été retrouvé exactement sous `origin/main:Geographie_T6_JLearn.docx`, à la racine du dépôt. Il s’agit bien d’un manuel complet et non d’un programme ou d’un FRP.
- Le manuel T7 a finalement été retrouvé grâce au chemin fourni par l’utilisateur : `origin/arena/01a0d344-jlearn-pack:Nos manuels/Manuel_Geographie_T7_JLearn.docx`. Il était absent de `origin/main`, mais bien présent dans une branche de travail du dépôt.
- Le T7 est un véritable manuel J-Learn : 80 numéros, 66 leçons, 7 révisions et 7 sujets d’examen corrigés.
- Le dépôt contient également les **références officielles T7** (`PE T7.pdf`, `PE_T7.docx`, `FRP_GEO_T7.pdf`).
- `Manuel_Geographie_3e_VF_V1.docx` ne doit pas être retenu comme T7 : sa page de titre indique explicitement **Classe de 3ème** ; dans la nomenclature scolaire malgache, cela correspond à T9, pas à T7.
- Aucun manuel n’a été modifié. Le présent diagnostic est un livrable séparé.

## 2. Inventaire des fichiers retrouvés

| Fichier | Emplacement / référence | Taille | Identification | Verdict |
|---|---|---:|---|---|
| `Geographie_T6_JLearn.docx` | `origin/main:/Geographie_T6_JLearn.docx` | 19 558 707 octets | Titre `GÉOGRAPHIE T6`; classe T6; 78 numéros | **Véritable manuel T6** |
| `Manuel_Geographie_T7_JLearn.docx` | `origin/arena/01a0d344-jlearn-pack:/Nos manuels/Manuel_Geographie_T7_JLearn.docx` | 71 718 443 octets | `Manuel de Géographie T7`; 7 unités; 80 numéros | **Véritable manuel T7** |
| `Manuel_Geographie_1ereACD_V1_FINAL.docx` | racine locale et `origin/main:/Manuel_Geographie_1ereACD_V1_FINAL.docx` | 22 520 772 octets | `Classes de 1ère A, C, D`; 5 unités; 23 séances | Manuel lycée, **pas T7** |
| `Manuel_Geographie_3e_VF_V1.docx` | racine locale et `origin/main:/Manuel_Geographie_3e_VF_V1.docx` | 631 305 octets | `Classe de 3ème`; 18 séances | Manuel de 3ème/T9, **pas T7** |
| `hg geo raps.docx` | racine locale et `origin/main:/hg geo raps.docx` | 56 751 octets | Planning annuel Histoire/Géographie, dates 2020–2021, objectifs et semaines | Document de travail/planification, **pas un manuel** |
| `PE T6.pdf` | `origin/main:/PE RAPE/PE T6.pdf` | 4 425 991 octets | Programme d’études officiel, classe T6 | Référence normative T6 |
| `PE_T6.docx` | racine locale | — | Programme T6 en DOCX | Référence normative T6 |
| `FRP_GEOGRAPHIE_T6.pdf` | `origin/main:/PE RAPE/FRP_GEOGRAPHIE_T6.pdf` | 1 618 393 octets | Fascicule de ressources pédagogiques T6, 63 pages | Référence pédagogique T6 |
| `FRP_GEO_T7.pdf` | `origin/main:/PE RAPE/FRP_GEO_T7.pdf` | 2 197 519 octets | Fascicule de ressources pédagogiques T7, 72 pages | Référence pédagogique T7 |
| `PE T7.pdf` | `origin/main:/PE RAPE/PE T7.pdf` | 4 062 354 octets | Programme d’études officiel, classe T7 | Référence normative T7 |
| `PE_T7.docx` | racine locale | — | Programme T7 en DOCX | Référence normative T7 |

Le fichier T6 a été identifié dans le commit `b1d130df8c738044b6d412190872de435e22dbd9`, avec le blob `fcc064e4464a9776657e8d76f272df2b94d0673d`. Il n’est pas présent dans le checkout de la branche d’audit, mais son contenu a été lu directement par `git show origin/main:Geographie_T6_JLearn.docx`, sans le copier ni le modifier dans le dépôt de travail.

### Version et emplacement du DOCX T7

Le chemin fourni par l’utilisateur a été vérifié directement dans la branche `arena/01a0d344-jlearn-pack` :

- chemin : `Nos manuels/Manuel_Geographie_T7_JLearn.docx` ;
- commit de la dernière version observée : `fd635697baebbdade5e95f6df8ec9810b52b24a5` ;
- blob : `09a3f2ff1bf306aa2e8b505d925d7e9725888dcd` ;
- taille : 71 718 443 octets ;
- propriété interne : `Manuel de Géographie T7 — J-Learn (édition complète protégée)` ;
- révision Word : `1` ;
- création/modification dans les propriétés OOXML : `2026-10-24T07:50:01.810Z` ;
- dernier auteur indiqué : `Un-named`.

Le fichier n’a pas été copié ni modifié dans la branche de la présente analyse ; il a été lu depuis la branche de travail indiquée dans l’URL brute.

### Version interne du DOCX T6

Les propriétés OOXML indiquent :

- titre : `Manuel de Géographie T6 — J-Learn (édition complète)` ;
- créateur : `J-Lab — Collection J-Learn` ;
- dernier auteur indiqué : `Henintsoa Lamy Juno RANDRIANANTENAINA` ;
- révision Word : `2` ;
- création et dernière modification : `2026-10-30T06:08:00Z` ;
- description : 78 numéros, 66 leçons, 6 révisions, 6 sujets d’examen et annexes.

## 3. Identification et nature du manuel T7

Le fichier indiqué par l’utilisateur est bien présent dans le dépôt, mais pas dans `origin/main`. Il se trouve dans une branche de travail distincte :

`origin/arena/01a0d344-jlearn-pack:/Nos manuels/Manuel_Geographie_T7_JLearn.docx`

Le contenu confirme qu’il s’agit d’un manuel complet :

- page d’authenticité et droits J-Learn ;
- avant-propos destiné à la classe de T7 ;
- mode d’emploi ;
- table des matières interactive ;
- 7 unités ;
- 66 leçons de 60 minutes ;
- 7 révisions et 7 examens corrigés ;
- fiches de préparation, leçons, exercices, corrigés, glossaire, cartes muettes et sources.

La conclusion précédente doit donc être rectifiée : **le manuel T7 n’est pas absent du dépôt ; il est absent de `origin/main` mais présent dans la branche `arena/01a0d344-jlearn-pack`.**

Les trois autres candidats ne changent pas de statut : `Manuel_Geographie_3e_VF_V1.docx` est un manuel de 3ème/T9, `Manuel_Geographie_1ereACD_V1_FINAL.docx` concerne la 1ère A/C/D, et `hg geo raps.docx` est un planning annuel sans leçons ni corrigés.

### Structure éditoriale du T7

| Unité | Leçons | Révision | Examen | Durée officielle |
|---|---:|---:|---:|---:|
| 1. Initiation à l’étude de la Géographie | 1–6 | 7 | 8 | 6 h |
| 2. La planète Terre | 9–18 | 19 | 20 | 10 h |
| 3. Relief, climat, hydrographie et végétation | 21–32 | 33 | 34 | 12 h |
| 4. Caractéristiques de la population mondiale | 35–42 | 43 | 44 | 8 h |
| 5. Population face aux problèmes environnementaux | 45–56 | 57 | 58 | 12 h |
| 6. Activités économiques de la population mondiale | 59–64 | 65 | 66 | 6 h |
| 7. Gestion des ressources naturelles | 67–78 | 79 | 80 | 12 h |

Les leçons totalisent `6 + 10 + 12 + 8 + 12 + 6 + 12 = 66 heures`, exactement comme le PE T7. Le manuel annonce correctement deux leçons de 60 minutes par semaine pour un volume officiel de deux heures hebdomadaires. Chaque leçon comprend quatre exercices notés sur 5 points, puis un corrigé détaillé ; chaque examen est noté sur 20 points.

## 4. Structure du manuel T6

Le T6 est un manuel complet organisé en six unités conformes aux six thématiques du programme officiel :

| Unité | Séances de leçon | Révision | Sujet d’examen | Contenu couvert |
|---|---:|---:|---:|---|
| 1. Les régions administratives de Madagascar | 1–8 | 9 | 10 | Régions, chefs-lieux, districts, communes, fokontany, délimitation, superficie |
| 2. L’utilisation des ressources naturelles | 11–24 | 25 | 26 | Ressources renouvelables/non renouvelables, usages, problèmes, solutions, mini-projet |
| 3. La population malgache | 27–36 | 37 | 38 | Répartition, densité, évolution, migrations, mouvement pendulaire, structure, développement |
| 4. L’exode rural à Madagascar | 39–48 | 49 | 50 | Notion, causes, conséquences rurales/urbaines, solutions |
| 5. Les grandes zones économiques et les activités économiques | 51–64 | 65 | 66 | Zones agricole, pêche, forestière, minière, artisanale, industrielle, touristique et activités associées |
| 6. Le village écologique | 67–76 | 77 | 78 | Organisation juridique et socioéconomique, habitat, architecture, infrastructures, sites et normes |

### Comptage éditorial

- 78 séances/numéros explicitement numérotés ;
- 66 séances de leçon ;
- 6 révisions, une par unité ;
- 6 sujets d’examen, un par unité ;
- 72 occurrences de fiche de préparation dans le corps du document : les 66 leçons et les 6 révisions ; les sujets d’examen ont un corrigé/barème mais pas de fiche de préparation complète ;
- 66 blocs `EXERCICES` pour les séances de leçon ;
- chaque séance de leçon suit la séquence fiche de préparation → leçon → exercices → corrigé ;
- les leçons sont ensuite reprises dans une partie consolidée `LEÇONS`, ce qui facilite la révision mais crée une duplication éditoriale importante.

Le manuel annonce 30 minutes par séance. Les 66 séances de contenu représentent donc 33 heures, exactement comme le total des durées thématiques du PE T6 : `4 + 7 + 5 + 5 + 7 + 5 = 33 heures`. Les 6 révisions et 6 examens ajoutent 6 heures éditoriales, soit 39 blocs de 30 minutes au total. Il est plus exact de qualifier les 78 numéros de **dispositif éditorial du manuel** que de dire qu’ils constituent à eux seuls le programme officiel.

### Exercices et corrigés

Les séances de leçon utilisent une trame stable de quatre types :

1. questions à réponse courte ;
2. vrai/faux ;
3. texte ou tableau à compléter ;
4. QCM.

Les items sont séparés sur des lignes distinctes et les corrigés reprennent les exercices avec un barème. Les sujets d’examen sont également structurés en quatre exercices de 5 points, pour un total de 20 points.

## 5. Comparaison avec le PE et le FRP officiels T6

### Correspondance globale

Le PE T6 définit six thématiques :

1. Les régions administratives de Madagascar ;
2. L’utilisation des ressources naturelles ;
3. La population malgache ;
4. L’exode rural à Madagascar ;
5. Les grandes zones économiques et les activités économiques ;
6. Le village écologique.

Le FRP `FRP_GEOGRAPHIE_T6.pdf` reprend les mêmes six thématiques. L’ordre, les intitulés généraux et la progression du manuel T6 correspondent donc très fortement aux références officielles.

| Référence officielle T6 | Présence dans le manuel | Évaluation |
|---|---|---|
| 24 régions, chefs-lieux, délimitation, superficie | Séances 1–8 ; synthèse des 24 régions et cartes muettes | Couverture explicite |
| Types et utilisations des ressources | Séances 11–18 | Couverture explicite |
| Déséquilibre population/ressources, surexploitation, espèces disparues, changement climatique | Séances 19–21 | Couverture explicite |
| Solutions : limitation des naissances, infrastructures sociales, pratiques modernes, cultures adaptées, exploitation rationnelle, reboisement | Séances 22–23 et activités associées | Couverture explicite, avec vocabulaire pédagogique simplifié |
| Mini-projet économique respectueux des ressources | Séance 24 et activités de synthèse | Couverture explicite |
| Répartition, évolution, migrations, croissance et structure de la population | Séances 27–36 | Couverture explicite |
| Exode rural : notion, causes, conséquences, solutions socio-économiques | Séances 39–48 | Couverture explicite |
| Zones économiques et activités : agriculture, élevage, pêche, forêt, mines, artisanat, industrie, tourisme, commerce, transport, nouvelles technologies | Séances 51–64 | Couverture explicite |
| Village écologique : organisation, structure, habitat, architecture, infrastructures, sites et normes | Séances 67–76 | Couverture explicite |

### Alignement pédagogique

Le PE T6 recommande une démarche centrée sur l’apprenant, l’observation, la description, l’analyse et la synthèse (ODAS), les représentations spatiales, les activités contextualisées et les travaux de groupe. Le manuel reprend une démarche scolaire régulière avec mise en situation, présentation, observation, analyse, synthèse, application et évaluation. Les scénarios locaux (taxi-brousse, village, marché, rizière, ressources de la région) vont dans le sens de la contextualisation recommandée.

À vérifier lors d’une relecture pédagogique finale :

- les tableaux de préparation doivent rendre suffisamment visible la **description**, et pas seulement l’observation et l’analyse ;
- les cartes et schémas doivent être exploités comme de véritables documents géographiques, avec titre, source, légende et consigne de lecture ;
- les formulations prescriptives sur les pratiques locales doivent être relues avec des enseignants et avec le contexte régional.

## 6. Points de cohérence et réserves sur le T6

### Niveau et matière

**Cohérent :** le titre, la classe, les unités, la durée annoncée et le contenu sont T6 Géographie. Les recherches textuelles n’ont pas relevé de mélange explicite avec T7, T8, T9, les mathématiques ou l’Histoire comme discipline. Le mot « histoire » apparaît seulement dans des contextes de tourisme culturel, de récit ou d’exemple local.

**Extension à documenter :** la séance 64 s’intitule `La nouvelle technologie et l’intelligence artificielle`. Le PE T6 mentionne `la nouvelle technologie`, mais pas explicitement l’intelligence artificielle. L’ajout peut être défendable comme actualisation, mais il doit être identifié comme extension et accompagné d’une source et d’objectifs adaptés au niveau T6.

### Terminologie et faits à vérifier

- Le manuel emploie `24 régions`, conformément au PE T6. Le FRP T6 contient toutefois des formulations internes contradictoires (`24 régions` dans une partie, `23 régions` dans un titre/tableau). Cette contradiction vient de la source officielle d’accompagnement et doit être résolue dans la fiche de référence avant impression.
- La liste utilisée par le manuel comprend `Ambatosoa`, `Vatovavy` et `Fitovinany`. Ces noms apparaissent également dans les données du FRP T6 ; ils ne doivent pas être supprimés sans vérification de l’édition administrative de référence.
- La phrase selon laquelle les habitants « élisent » le chef du fokontany mérite une vérification institutionnelle séparée : le PE demande l’organisation juridique du village écologique, mais ne fixe pas cette modalité élective.
- Les données chiffrées et les superlatifs (`premier port`, superficies, effectifs de districts/communes, chiffres démographiques) doivent être datés ou sourcés dans une édition destinée à durer. Le PE/FRP et les données administratives peuvent évoluer.
- Le vocabulaire `limitation des naissances` est repris du PE, mais appelle une formulation pédagogique et civique prudente, centrée sur la santé, les droits et la responsabilité, plutôt qu’une injonction brute.

### Sources éditoriales

La section `SOURCES` du DOCX T6 cite explicitement le PE T6, mais ne cite pas le FRP Géographie T6 comme référence distincte. Il n’y a pas de bibliographie par séance, ni de crédits visibles associés aux 143 médias intégrés. Pour un manuel publiable, il faut au minimum :

- ajouter le FRP T6 et les sources cartographiques/statistiques ;
- dater les statistiques ;
- créditer les cartes, photos, schémas et illustrations ;
- vérifier les droits de réutilisation, notamment pour toute image provenant d’une source web ;
- distinguer les contenus officiels, les adaptations pédagogiques et les extensions J-Learn.

## 7. Audit OOXML du DOCX T6

Audit réalisé sur `origin/main:Geographie_T6_JLearn.docx` sans conversion ni réenregistrement :

| Contrôle | Résultat |
|---|---:|
| Test ZIP (`ZipFile.testzip`) | OK (`None`) |
| Entrées de l’archive | 165 |
| Relations OOXML totales | 163 |
| Relations internes non résolues | 0 |
| Relations externes | 3, toutes vers la page Facebook J-Learn |
| XML parseable | 100 % des XML et `.rels` inspectés |
| Médias intégrés | 143 fichiers |
| Dessins/images référencés | 144, dont une image réutilisée |
| Formats images | 66 JPEG + 77 PNG |
| Images décodables | 143/143 |
| Signets début/fin | 97/97, aucun signet orphelin |
| Signets nommés distincts | 92 |
| Hyperliens internes | 158 |
| Hyperliens internes vers une cible inexistante | 2 |
| Sauts de page explicites | 163 |

### Défauts techniques relevés

Deux ancres internes sont appelées par la table des matières mais ne possèdent pas de signet correspondant :

- `autoevaluation` → `AUTO-ÉVALUATION` ;
- `illustrations` → `TABLE DES ILLUSTRATIONS`.

La navigation est donc largement fonctionnelle, mais ces deux entrées sont techniquement cassées ou incomplètes. Il faut soit créer les deux signets, soit supprimer/corriger les liens.

Autres observations techniques :

- les propriétés `docProps/app.xml` annoncent 639 pages et 1 628 paragraphes, alors que l’analyse de la structure donne 6 225 paragraphes de document et 153 tables ; ces propriétés Word sont vraisemblablement obsolètes ou calculées selon un autre modèle et doivent être régénérées ;
- les 144 objets `wp:docPr` n’ont ni `descr` ni `title` : les images n’ont pas de texte alternatif OOXML, ce qui constitue une faiblesse d’accessibilité ;
- les relations et les médias ne présentent pas d’orphelin technique détectable ;
- la seule destination externe est la page Facebook indiquée dans la page d’authenticité et les pieds de page ; aucune source pédagogique externe n’est encodée comme lien dans le document.

## 8. Audit synthétique des autres DOCX candidats

| Fichier | ZIP/XML | Médias | Navigation | Lecture du contenu |
|---|---|---:|---|---|
| `Nos manuels/Manuel_Geographie_T7_JLearn.docx` | valide, relations internes résolues | 125 médias, 142 références d’image | 94 signets et 94 liens internes, cibles résolues | Manuel T7, 80 numéros, 7 unités |
| `Manuel_Geographie_1ereACD_V1_FINAL.docx` | valide, relations internes résolues | 15 médias, 16 références d’image | 31 signets/liens internes, cibles résolues | Manuel de 1ère A/C/D, 23 séances, 5 unités |
| `Manuel_Geographie_3e_VF_V1.docx` | valide, relations internes résolues | 2 médias | aucun signet ni lien interne | Manuel de 3ème, 18 séances |
| `hg geo raps.docx` | valide, relations internes résolues | 6 médias, dont certains réutilisés | aucun signet ni hyperlien | Planning Histoire/Géographie, 8 tableaux, pas de leçons/corrigés |

Ces trois fichiers ne doivent pas être présentés comme un manuel T7.

## 9. Comparaison du manuel T7 avec le PE et le FRP officiels

Le PE T7 et le FRP `FRP_GEO_T7.pdf` définissent sept thématiques et un volume total de 66 heures. Le manuel T7 reprend exactement ces sept unités et leur ordre.

| Référence officielle T7 | Présence dans le manuel | Évaluation |
|---|---|---|
| Initiation à la Géographie : notion, documents, démarche, éléments d’un document | Séances 1–6 | Couverture explicite |
| Planète Terre : Univers, système solaire, caractéristiques, composantes, structure interne, lignes imaginaires, coordonnées, rotation et révolution | Séances 9–18 | Couverture explicite |
| Relief, climat, hydrographie, végétation et leurs interrelations | Séances 21–32 | Couverture explicite |
| Population mondiale : répartition, facteurs et évolution | Séances 35–42 | Couverture explicite |
| Population face aux problèmes environnementaux : dégradation, dérèglement climatique, causes, conséquences, adaptation | Séances 45–56 | Couverture explicite |
| Activités économiques : secteurs, espaces économiques, mondialisation et interdépendances | Séances 59–64 | Couverture explicite |
| Gestion des ressources : renouvelables/non renouvelables, épuisement, durabilité, gestion durable | Séances 67–78 | Couverture explicite, avec mini-projet |

### Alignement pédagogique T7

Le manuel reprend la démarche ODAS du programme — observation, description, analyse et synthèse — et la décline dans les fiches de préparation. Les documents visuels, textes, tableaux et graphiques sont traités dès l’unité 1. Les cartes et schémas d’activités des annexes prolongent la construction de repères et de représentations spatiales demandée par le PE.

La progression est donc **fortement alignée sur le PE T7 et le FRP T7 sur le plan des thèmes, des durées et de la structure**. Les adaptations J-Learn sont identifiables : scènes locales, exercices, corrigés, schémas et mini-projet.

### Incomplétudes éditoriales internes au T7

Le manuel est substantiellement présent, mais certaines parties annoncées ne sont pas achevées :

- la partie consolidée `LEÇONS` ne reprend que l’unité 1 ; le paragraphe final précise que le résumé des unités 2 à 7 « sera ajouté dans une prochaine étape » ;
- le glossaire annonce `66 notions fondamentales des sept thématiques`, mais contient uniquement le glossaire de l’unité 1 ; les termes des unités 2 à 7 sont explicitement annoncés comme à ajouter ;
- les cartes et schémas d’activités sont listés en 8 annexes et présents comme supports textuellement décrits, mais leur cohérence finale avec les 66 leçons doit être vérifiée lors du rendu PDF ;
- la section des sources cite `FRP_7eme_2`, nom qui ne correspond pas au fichier retrouvé dans le dépôt (`PE RAPE/FRP_GEO_T7.pdf`) ; la référence doit être normalisée ;
- la citation du PE indique les pages 150–167. Dans le PDF officiel retrouvé, la section Géographie commence à la page physique 151 (page imprimée 120) et les pages doivent être vérifiées avant publication.

### Terminologie et relecture de langue

La structure de niveau et de matière est cohérente : aucune occurrence de T6, T8, T9, 3ème, 1ère, Mathématiques ou Histoire comme discipline concurrente n’a été relevée. Les mentions de T5/T6 dans les sources renvoient aux manuels J-Learn antérieurs utilisés comme références de scènes.

Des erreurs de formulation répétées doivent cependant être corrigées dans le gabarit des corrigés, notamment :

- `dans l'étude de érosion` → `dans l'étude de l'érosion` ;
- `Il s'agit de érosion` → `Il s'agit de l'érosion` ;
- `dans l'étude de exploitation abusive` → `dans l'étude de l'exploitation abusive` ;
- `Il s'agit de exploitation abusive` → `Il s'agit de l'exploitation abusive`.

Les données scientifiques, les chiffres démographiques, les références aux saisons, au climat, aux migrations et aux ressources doivent également être relus avec des sources datées. Le FRP contient lui-même des ressources web hétérogènes ; le manuel ne doit pas transformer une formulation de ressource en donnée non datée présentée comme définitive.

### Audit OOXML du DOCX T7

Audit réalisé directement sur le fichier de la branche `arena/01a0d344-jlearn-pack` :

| Contrôle | Résultat |
|---|---:|
| Test ZIP (`ZipFile.testzip`) | OK (`None`) |
| Entrées de l’archive | 144 |
| Relations OOXML totales | 142 |
| Relations internes non résolues | 0 |
| Relations externes | 2, toutes vers la page Facebook J-Learn |
| XML et `.rels` parseables | 100 % |
| Médias intégrés | 125 fichiers |
| Références d’image | 142 objets, 124 relations distinctes ; plusieurs images sont réutilisées |
| Formats images | 77 PNG + 48 JPEG |
| Images décodables | 125/125 |
| Signets début/fin | 94/94, aucun signet orphelin |
| Signets nommés distincts | 94 |
| Hyperliens internes | 94 |
| Hyperliens internes vers une cible inexistante | 0 |
| Hyperliens totaux dans `document.xml` | 95, dont 1 externe |
| Sauts de page explicites | 162 |
| Objets graphiques avec texte alternatif | 0 sur 142 |

La table des matières du T7 est donc techniquement mieux complète que celle du T6 : ses 94 liens internes pointent vers des signets existants. L’archive et les relations sont valides. La faiblesse commune aux deux manuels est l’accessibilité : les objets `wp:docPr` n’ont ni `descr` ni `title`.

Les propriétés étendues `docProps/app.xml` du T7 sont vides, contrairement à un DOCX Word entièrement recalculé. Le nombre de pages, de mots et de caractères devra être régénéré après la dernière mise en page et après l’ajout du glossaire et des résumés manquants.

### Sources et droits

La section `Sources` du T7 cite le PE, le FRP, les manuels GEO T5/T6 et un vocabulaire géographique général. Elle ne donne pas de crédit individuel aux médias intégrés. Les images doivent recevoir des crédits ou une mention de statut de création/adaptation, et leur réutilisation doit être vérifiée avant diffusion commerciale.

## 10. Recommandations sans modification des manuels

1. Corriger le diagnostic de localisation : **T6 est dans `origin/main` ; T7 est dans `arena/01a0d344-jlearn-pack/Nos manuels/`**.
2. Ne pas renommer `Manuel_Geographie_3e_VF_V1.docx` en T7.
3. Pour T6, corriger les deux ancres internes manquantes (`autoevaluation`, `illustrations`) avant toute nouvelle exportation PDF.
4. Pour T7, compléter la partie consolidée `LEÇONS` pour les unités 2 à 7.
5. Compléter le glossaire T7 promis pour les sept unités.
6. Normaliser les références sources (`FRP_7eme_2` vers `PE RAPE/FRP_GEO_T7.pdf`) et vérifier les pages citées du PE.
7. Régénérer les propriétés Word et renseigner les textes alternatifs des images des deux manuels.
8. Compléter les sources avec les données chiffrées, les cartes et les crédits des médias.
9. Corriger les erreurs grammaticales récurrentes dans les corrigés T7 et effectuer une relecture scientifique finale.
10. Ne modifier aucun manuel avant validation de ce diagnostic et de la liste des corrections prioritaires.
