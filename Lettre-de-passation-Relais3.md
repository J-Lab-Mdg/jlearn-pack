LETTRE DE PASSATION — Manuels de langues J-Learn (Anglais T4→T11, Français T4→T9) — Relais n°3

(Chantier distinct du Relais n°2, qui concernait le Manuel Mathématiques 7e. Cette lettre couvre le chantier « manuels de langues » mené sur la branche `arena/01a0e967-jlearn-pack`.)

1. ÉTAT D'AVANCEMENT
   - TERMINÉS ET LIVRÉS :
     - Anglais T4 (`manuel/` — attention, PAS `manuel-t4/`), T5→T10 (`manuel-t5/`…`manuel-t10/`), audios Drive inclus (T6→T11).
     - Français T4, T5, T6, T7, T8, T9 (`manuel-francais-t4/`…`manuel-francais-t9/`), 100 % complets : 60 séances (5 unités × 12), fiches de préparation, leçons style B, 4+ exercices/leçon avec corrigés gris italique, annexes, audios par leçon + 1 dictée/unité sur Drive public, liens 🎧 dans chaque leçon.
     - Retrofits T5/T6 (anglais et français) terminés.
   - EN PAUSE : Anglais T11 (`manuel-t11/`) — 42 séances sur 86 rédigées. Reprendre à la séance 43 (Unit 3) ; audios des unités déjà faites : déjà sur Drive.
   - À VENIR (annoncé par l'utilisateur, pas encore fourni) : cahiers d'élèves scannés, qui serviront de référence de style « humain ».

2. FICHIERS / DOSSIERS CLÉS DU DÉPÔT
   - `manuel-francais-tN/` : `build.js` (point d'entrée : `node build.js`), `builders.js` (helpers docx), `unit1.js`…`unit5.js` (contenus), `annexes.js`, `img/` (images compressées), `audio/` (MP3, copie de sauvegarde des fichiers Drive), `Manuel_Francais_TN_JLearn.docx` (livrable committé).
   - `coverbook/` : couvertures FOURNIES PAR L'UTILISATEUR — ne jamais inventer un design de couverture ; charte T4–T10 = photoréaliste tableau vert.
   - Avant tout rebuild après réinitialisation du bac à sable : `npm install docx --no-save` à la racine, puis `git checkout -- package.json package-lock.json` avant de committer.

3. VERSION DU SKILL
   - `jlearn-manuel-scolaire` v19 (analyse : `Analyse-Skill-jlearn-v19.md`). Règle utilisateur : mises à jour du skill ADDITIVES uniquement.

4. DÉCISIONS PROPRES À CE CHANTIER (validées par l'utilisateur — ne pas revenir dessus sans lui redemander)
   - Terminologie : « fiche de préparation » (jamais « fiche péda ») ; « Specific learning outcome » ; E.A./R.A.
   - Fiches en anglais facile (manuels anglais) / français simple (manuels français) ; durées des séances laissées vides (« ……… ») ; AUCUN malgache dans les manuels d'anglais.
   - Pédagogie leçons : règle courte + mots-outils en gras + exemples clés en gras + note [entre crochets] = image mentale à ne pas copier + exercice qui en découle. Minimum de texte, pas de « sur-IA » (trop de couleurs/encadrés).
   - Exercices : 16 types retenus ; 4+ par leçon ; corrigé gris italique APRÈS CHAQUE exercice ; chaque item a)/b)/c) à la ligne (jamais sur une seule ligne) ; exercices « relier » en 2 colonnes.
   - Audios : voix TTS « voice-01 » pour le français (« voice-00 » anglais, prononcer « Soa » = « So-ah ») ; un audio PAR LEÇON (contenu mixte : texte support s'il existe, sinon règle + exemples + « Répète avec moi ») + 1 dictée par unité (intro → texte entier → dictée lente ponctuée → relecture → pièges).
   - Hébergement audio : Google Drive public UNIQUEMENT (dossiers « JLearn Audio … », lecture seule) ; AUCUN lien GitHub dans les manuels ; les .docx ne vont JAMAIS sur Drive ; copie de sauvegarde des MP3 dans le dépôt (`audio/`).
   - Vérifications XML systématiques après chaque build : `<rootKey` = 0, « github » = 0, « arena » = 0 dans document.xml ; compter les 🎧 et drive.google.com.
   - Fiches de préparation des manuels livrés : NE PAS TOUCHER.

5. LEXIQUE / PIÈGES CONNUS
   - Faux positifs à ne PAS « corriger » : doubles espaces du lexique, mot « malgache », erreurs pédagogiques volontaires dans les exercices, « Classe : » vide.
   - Contrôler la langue des textes incrustés dans les images réutilisées entre manuels anglais et français (ex. bulles « Hello! » interdites dans un manuel de français).
   - Limites outils : 10 images et 10 clips audio par tour ; uploads Drive via le connecteur (googleapis.com bloqué en direct).

6. À FAIRE EN PRIORITÉ PAR LE PROCHAIN RELAIS
   - Reprendre l'Anglais T11 à la séance 43/86 (même formule que T10 ; audios par fournées de 10).
   - À réception des cahiers d'élèves scannés : les étudier comme référence de style AVANT toute nouvelle rédaction, proposer des ajustements et ne rien appliquer sans validation de l'utilisateur.
   - Rien d'autre n'est ouvert : Français T4→T9 livrés avec leurs 55+ audios chacun (liens 🎧 committés dans les unitN.js, source de vérité).

7. QUESTIONS EN SUSPENS POUR L'UTILISATEUR
   - Aucune. En cas d'ambiguïté (programme officiel, style, couverture), poser la question explicitement plutôt que de deviner — exigence répétée de l'utilisateur.
