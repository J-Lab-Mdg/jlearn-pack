# JW Malagasy Offline (`MG`) — JWPUB, EPUB, PDF, Mises à jour & Recherche Hors-Ligne

Outil personnel **100 % autonome (zéro installation complexe)** conçu pour stocker sur **disque dur externe**, **PC Windows** et **téléphones (Android & iPhone)** vos publications électroniques publiques en **langue malgache (`MG`)** aux formats **`JWPUB`**, **`EPUB`** et **`PDF`**, les **mettre à jour en 1 clic**, et **rechercher instantanément dans tous leurs chapitres hors-ligne**.

---

## ⚖️ Conformité & Usage strictement personnel
- **100 % respectueux des Conditions d'utilisation de JW.ORG** : cet outil ne fait **aucun scraping** de pages web HTML (`jw.org` ou `wol.jw.org`). Il télécharge uniquement les fichiers électroniques publics (`JWPUB`, `EPUB`, `PDF`) mis à disposition du public pour un **usage strictement personnel et non commercial**.
- Chaque fichier téléchargé est vérifié avec sa **somme de contrôle `MD5` officielle** pour garantir qu'aucun fichier n'est corrompu sur votre disque dur externe.
- Ne redistribuez jamais publiquement les fichiers téléchargés ni la base constituée.

---

## 🚀 Démarrage immédiat (Windows & Disque Dur Externe)

1. Décompressez le dossier **`jw-malagasy-offline`** directement **sur votre disque dur externe** (ex: `D:\jw-malagasy-offline\`) ou sur votre PC.
2. Double-cliquez sur **`LANCER_WINDOWS.bat`**.
   - Si `malagasyword-offline` ou `pass-education-offline` est dans le dossier voisin, il copie automatiquement le moteur Python portable (~25 Mo, **0 Mo d'Internet**) dans `jw-malagasy-offline\runtime\python\` pour que votre **disque dur externe fonctionne sur n'importe quel autre PC sans Internet** !
   - Sinon, au tout premier lancement en ligne, il télécharge une seule fois Python 3.12 portable officiel (~11 Mo).
3. L'interface s'ouvre toute seule sur **`http://127.0.0.1:8767`** *(port 8767, donc compatible simultanément avec MalagasyWord 8765 et Pass-Éducation 8766 !)*.

> **⚠️ Règle d'or Disque Dur Externe :** Avant de débrancher votre disque dur USB, **fermez toujours la fenêtre noire du serveur** afin que la base SQLite (`data\jw_malagasy.db`) enregistre proprement toutes ses données.

---

## 📊 Estimation de la taille sur votre disque (`MG` — `JWPUB + EPUB + PDF`)

| Sélection choisie | Taille estimée (`JWPUB + EPUB + PDF`) |
|---|---|
| **Essentiels** (Bible `bi12`, Livres d'étude `lff`, `bhs`, `rr`, `jy`…, Brochures + Périodiques depuis 2024) | **~0,8 à 1,8 Go** |
| **Bibliothèque étendue** (Tous les livres, outils de recherche `it`/`rs` + Périodiques depuis 2020) | **~2 à 4 Go** |
| **Catalogue Malgache historique complet** (Toutes catégories et années disponibles 1970–2026) | **~5 à 8 Go** |

*(Tous les chemins enregistrés dans la base sont **100 % relatifs** : même si Windows change la lettre de votre disque dur externe de `D:` en `E:` sur un autre ordinateur, tous vos livres et chapitres restent immédiatement accessibles sans aucun lien cassé !)*

---

## 🔄 Comment mettre à jour votre bibliothèque plus tard ?

Quand vous avez accès à Internet (dans 1 mois, 6 mois ou 1 an) :
1. Branchez votre disque dur externe et lancez **`LANCER_WINDOWS.bat`**.
2. Cliquez en haut à droite sur **« 🔄 Vérifier mises à jour »**.
3. L'application vérifie le manifeste officiel du catalogue Malgache (`MG`) et compare les signatures `MD5` :
   - Les fichiers déjà présents et inchangés sont **ignorés en une fraction de seconde (0 Mo retéléchargé)** ;
   - **Seuls les nouveaux numéros mensuels** (*Ny Tilikambo Fiambenana*, *Mifohaza!*, *Tari-dalana*) et les **publications révisées** sont téléchargés et indexés !

---

## 📱 Comment l'utiliser sur Téléphone (Android & iPhone) sans consommer d'Internet ?

### Option A — Recherche plein-texte + Envoi `.jwpub` en Wi-Fi local (Android & iPhone, 0 Mo data)
1. Connectez votre téléphone et le PC (avec le disque dur externe branché) au même Wi-Fi — **ou activez simplement le partage de connexion Wi-Fi du téléphone même avec les données mobiles coupées**.
2. Cliquez sur **« 📱 Téléphone & Disque Externe »** en haut de l'application pour voir l'adresse locale (ex: `http://192.168.x.x:8767`).
3. Ouvrez cette adresse dans **Chrome (Android)** ou **Safari (iPhone)** :
   - Cherchez n'importe quel mot ou verset en malgache (*Fanjakan'Andriamanitra*, *Salamo 83*, *Matio 24*…) et lisez les chapitres directement sur l'écran du téléphone ;
   - Touchez **`📲 .JWPUB (JW Library)`** sur n'importe quel livre pour l'importer immédiatement dans **JW Library** !

### Option B — Fichiers `.jwpub` directement sur le téléphone (100 % autonome dehors sans PC)
Tous vos fichiers `.jwpub` sont classés proprement dans :
```text
jw-malagasy-offline/fichiers/JWPUB/
  ├── 01_Baiboly/
  ├── 02_Fitaovana_Fikarohana/
  ├── 03_Boky/
  ├── 04_Bokikely_sy_Trakta/
  ├── 05_Tilikambo_Fiambenana/
  ├── 06_Mifohaza/
  ├── 07_Tari-dalana_sy_Fanompoana/
  └── 08_Fihirana_sy_Hafa/
```
- **Sur Android** : copiez les `.jwpub` souhaités par câble USB ou clé USB-C → ouvrez-les avec **JW Library**. *(Bonus : avec l'application gratuite **Termux** + `pkg install python`, vous pouvez même copier tout `jw-malagasy-offline` sur le téléphone et lancer `bash lancer.sh` pour avoir le moteur de recherche complet sur Android sans aucun PC !)*
- **Sur iPhone / iPad** : copiez les `.jwpub` dans l'app **Fichiers** → touchez un fichier → **Partager → JW Library** (et les `.epub` s'ouvrent aussi dans l'app **Livres** d'Apple !).
