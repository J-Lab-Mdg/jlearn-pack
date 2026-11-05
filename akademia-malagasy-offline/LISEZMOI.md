# Akademia Malagasy Offline — Foibe momba ny Teny (`Port 8769`)

Application **100 % hors-ligne, portable et sans installation** dédiée aux ressources linguistiques, dictionnaires thématiques (*Voambolana*), règles d'orthographe et grands traités du **Foibe momba ny Teny an'ny Akademia Malagasy** (`https://teny-malagasy.akademia-malagasy.mg/`).

Conçue pour **usage personnel** sur **PC Windows**, **disque dur externe USB**, **Android**, **iPhone / iPad** et **Linux / macOS**.

---

## 1. Démarrage immédiat sur Windows (Zéro installation)

1. Décompressez `akademia-malagasy-offline.zip` (idéalement dans le même dossier parent que vos autres packs `malagasyword-offline`, `pass-education-offline`, `jw-malagasy-offline` ou `facebook-offline` sur votre PC ou votre disque dur externe).
2. Double-cliquez sur **`LANCER_WINDOWS.bat`** :
   - **0 Mo d'Internet requis pour démarrer** si l'un de vos autres packs hors-ligne se trouve à côté : `LANCER_WINDOWS.bat` réutilise automatiquement leur moteur `runtime\python` portable en 2 secondes !
   - Votre navigateur s'ouvre sur **`http://localhost:8769`**.
3. **Déjà prêt dès la première seconde hors-ligne** :
   - Les **8 règles officielles d'orthographe** (*Fomba fanoratra : `an-` / `am-` / `an'`*),
   - Les **16 règles officielles de malgachisation** (*Fanagasiana ny Teny vahiny*),
   - La **terminologie scientifique** (*Matematika, Fizika, Zeolozia, Meteorolojia*),
   - Les **78 thèmes culturels Vahatra**, les **27 domaines Dikanteny** et un extrait du **Voambolana Fanabeazana** sont déjà pré-intégrés.

---

## 2. Synchronisation complète 1-clic (`< 5 Mo` · ~30 secondes)

Dès que vous avez 30 secondes d'accès Internet (au cybercafé ou même via un petit forfait mobile, car tout le site texte + PDF pèse **moins de 5 Mo** au total) :

1. Cliquez sur le bouton jaune **`🔄 Synchroniser`** en haut à droite.
2. Cliquez sur **`🚀 Lancer la synchronisation (< 5 Mo)`**.
3. Le moteur télécharge et indexe automatiquement dans `data/akademia_malagasy.db` (**SQLite WAL + FTS5**) :
   - **Voambolana bilingues complets `A–Z` (`MG → FR` et `FR → MG`)** avec définitions académiques en malgache, catégories grammaticales et traductions françaises (ainsi que tout nouveau lexique ajouté sur le site),
   - **Tous les grands traités intégraux** :
     - *Ny Matoanteny eo amin'ny Teny malagasy* (**Pr. Siméon Rajaona**),
     - *Ny fifehezanteny malagasy* (**Pr. Roger Bruno Rabenilaina**),
     - *Ny feon-teny malagasy* (**Fidèle Joseph Andrianasolo**),
     - *Ny Fandrafetana ny teny siantifika* (**Pr. Raoelina Andriambololona & Fred Ramiandrasoa**),
     - *Ny Tantaran'ny Teny malagasy & Bulletin 1902–2001* (**Dr Randria Michel**),
     - *Vaovao momba ny Teny* (**Pr. Marie Jeanne Razanamanana & Dr Oliva Ramavonirina** — UNESCO, ACALAN, *Kibushi / Shibushi* Mayotte & Comores),
     - *Bibliôgrafia sy Vao niseho (1880–2001)*,
   - **Les documents PDF officiels** (`/pro/0.pdf` — *Iray volan'ny Teny malagasy 2026*, `/pro/oha.pdf` — *Concours d'ohabolana 2025*, etc.) enregistrés localement dans `fichiers/pdf/`.

> **Note technique automatique** : l'adresse `http://teny-malagasy.akademia-malagasy.mg/` renvoie parfois une erreur `HTTP 500` en `http://` non chiffré sur le serveur de l'Académie. L'application bascule automatiquement vers **`https://teny-malagasy.akademia-malagasy.mg/`** et corrige les liens cassés `localhost/rohyteny` de la page *Vahatra*.

---

## 3. Utiliser sur Android & iPhone sans Internet

1. Connectez votre téléphone et votre PC au même Wi-Fi (ou activez le **Point d'accès mobile** du téléphone sans activer les données mobiles).
2. Cliquez sur **`📱 Mobile / USB`** en haut de l'application pour voir l'adresse `http://192.168.x.x:8769` à ouvrir sur Chrome (Android) ou Safari (iPhone).

---

## 4. Ports dédiés (aucun conflit entre vos 5 outils hors-ligne)

| Application hors-ligne | Port local |
|---|---|
| `malagasyword-offline` | `8765` |
| `pass-education-offline` | `8766` |
| `jw-malagasy-offline` | `8767` |
| `facebook-offline` | `8768` |
| **`akademia-malagasy-offline`** | **`8769`** |
