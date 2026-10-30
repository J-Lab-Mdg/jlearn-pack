# 📚 Pass-Éducation Offline — Bibliothèque de Cours & PDF Hors-Ligne (PS → Terminale)

Application **100 % autonome** (usage personnel) permettant de choisir vos **niveaux scolaires (de la Petite Section à la Terminale)** et vos **matières**, de télécharger automatiquement tous les **vrais fichiers PDF gratuits** de `pass-education.fr` classés par dossiers, et de **chercher des mots à l'intérieur des PDF** sans connexion Internet.

---

## 🚀 Lancement rapide sous Windows (Aucune installation requise !)

1. Faites un **clic droit** sur `pass-education-offline.zip` → **« Extraire tout… »**.
2. Ouvrez le dossier extrait et double-cliquez sur **`LANCER_WINDOWS.bat`**.
   - Si Python n'est pas installé sur votre PC, le lanceur réutilise automatiquement le moteur portable de `malagasyword-offline` (s'il est à côté) ou télécharge Python 3.12 Portable officiel (~11 Mo) une seule fois.
   - Il utilise le port **`8766`** (`http://127.0.0.1:8766`) afin de pouvoir tourner **en même temps** que `MalagasyWord Offline` (`8765`) sans conflit !
3. Cliquez sur **« ⚡ Choisir Classes & Télécharger »**, cochez les classes et matières souhaitées, puis cliquez sur **« 🚀 Démarrer / Reprendre le téléchargement »**.

---

## ℹ️ Important à savoir sur les comptes Pass-Éducation

- Sur `pass-education.fr`, **il n'existe pas de compte gratuit** (l'espace adhérent est payant).
- **Sans aucun compte**, cette application récupère **100 % légalement et gratuitement** :
  1. **Plus de 6 300+ vrais fichiers PDF gratuits à imprimer** (`/free-pdf/*.pdf` : tous les *Cours, Leçons, Traces écrites, Flashcards, Coloriages gratuits & Fiches découverte*), rangés proprement sur votre PC dans `pdfs\<Classe>\<Matière>\`.
  2. **Le texte pédagogique HTML hors-ligne** de dizaines de milliers de fiches classées par niveau et matière.
- **Bonus — Vos propres PDF :** vous pouvez aussi glisser n'importe quel fichier `.pdf` personnel dans le sous-dossier `pdfs\99_Import_Personnel\` puis cliquer sur **« 📥 Indexer mes PDF »** pour les lire et faire des recherches plein-texte dedans hors-ligne !

---

## 💾 Quelle taille prévoir sur votre disque ?

Chaque PDF de cours pèse en moyenne **150 à 350 Ko** :
- **1 classe (ex. CE1 ou 6ème, toutes matières, PDF gratuits + cours)** : environ **60 à 120 Mo**.
- **Tout le Primaire (CP au CM2)** : environ **350 à 600 Mo**.
- **Tout le Collège (6ème à la 3ème)** : environ **250 à 450 Mo**.
- **Tout le site (PS → Terminale, les ~6 400 PDF gratuits + catalogue complet)** : environ **1,2 à 1,8 Go**.
