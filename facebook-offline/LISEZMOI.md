# Facebook Page Offline — Vos Publications, Photos & Vidéos 100 % Hors-Ligne

Transforme le fichier **`.zip` officiel exporté depuis votre Page Facebook** (ou votre profil) en une véritable application hors-ligne (comme Facebook) sur **Disque Dur Externe**, **PC Windows**, **Android** et **iPhone**, avec **zéro risque de blocage de compte**.

---

## 🛡️ Pourquoi zéro risque ?
Cet outil ne demande **jamais** votre mot de passe Facebook et ne se connecte jamais à `facebook.com`. Vous utilisez la fonction officielle **« Télécharger les informations de la Page »** de Facebook, puis `facebook-offline` reconstruit tout localement sur votre disque dur externe :
- Corrige automatiquement les accents malgaches/français et émojis souvent cassés dans le JSON de Meta (`Ã©` → `é`) ;
- Fusionne automatiquement les exports en plusieurs parties (`part1.zip`, `part2.zip`…) ;
- Indexe toutes vos publications dans **SQLite FTS5** pour une recherche instantanée par mot, hashtag ou année ;
- Intègre une **Galerie Photos** et un **Lecteur Vidéo MP4 hors-ligne**.

---

## ⚡ Mode d'emploi en 3 étapes (Spécial Cybercafé & Disque Dur Externe)

### Étape 1 — Depuis chez vous AVANT d'aller au cybercafé (1 min, ~0 Mo Internet)
*(Astuce importante : Facebook met 15 minutes à quelques heures pour préparer l'archive sur ses serveurs. Demandez-la depuis chez vous pour qu'elle soit déjà prête quand vous arriverez au cybercafé !)*
1. Sur Facebook, **basculez sur votre Page** (en tant qu'administrateur).
2. Allez dans **Paramètres et confidentialité → Paramètres → Télécharger les informations de la Page** *(ou Espace Comptes → Vos informations → Exporter vos informations)*.
3. Sélectionnez **Publications (Posts)** + **Photos et vidéos** + **Informations sur la Page**.
4. Choisissez **Période : Depuis le début**, **Format : JSON** *(recommandé, même si HTML est aussi supporté)*, **Qualité média : Élevée ou Moyenne** → cliquez sur **Créer un fichier**.

### Étape 2 — Au cybercafé
1. Téléchargez le(s) fichier(s) `.zip` préparé(s) par Facebook et placez-les dans :
   `facebook-offline\imports\`
2. Double-cliquez sur **`LANCER_WINDOWS.bat`** (s'ouvre sur **`http://127.0.0.1:8768`**).
3. Cliquez en haut à droite sur **« 📥 Importer / Mettre à jour (.zip) »** → **« Lancer l'import »**.

### Étape 3 — Mises à jour futures sans doublons
Dans 6 mois ou 1 an, exportez seulement *« Les 6 derniers mois »* depuis Facebook, déposez le nouveau `.zip` dans `imports/` et cliquez sur *Importer* : **seules les nouvelles publications s'ajoutent, sans aucun doublon** !
