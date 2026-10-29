# Téléphone Android bloqué par un code créé pendant une « clé d'accès » (passkey)

> **Date** : 29 octobre 2026
> **Sujet** : un téléphone demande un code au démarrage ; ce code a été « inventé » la veille lors de la création
> d'un compte en ligne, à cause d'une demande de **clé d'accès** (*passkey*).
> **Question posée** : comment résoudre ça ?
> **Statut** : plan d'action ouvert — blocage signalé le 29/10 : *le menu ne propose pas d'option « Wipe data »* ;
> marque du téléphone non identifiée ; photos de l'écran à fournir.

---

## 1. Le récit, tel qu'il a été raconté

> « Un ami devait créer un compte, je ne peux pas te dire lequel (sur le net) et le site demandait une clé d'accès.
> Il ne savait pas ce que cela voulait dire, mais le message l'invitait à ajouter un code (mot de passe ou je ne sais
> quoi). En fait, ce que ce site demandait était en réalité le code de son téléphone comme clé d'accès (ce n'est pas
> un scam, mais plutôt une sécurité Google je crois), alors que le téléphone n'avait jamais eu de code, ni schéma,
> ni empreinte.
> Il a alors tapé des codes qu'il a en tête, sans souvenir.
> Il n'a apparemment pas pu terminer le compte et est allé dormir.
> Le lendemain, il démarre le téléphone et ça demande un code (mot de passe).
> Comment résoudre ça ? »

**Résumé technique en une phrase** : en voulant enregistrer une *passkey*, Android a **obligé** le téléphone à
adopter un code de déverrouillage (PIN / schéma / mot de passe) ; ce code est maintenant le code de l'écran du
téléphone, et personne ne le connaît.

---

## 2. Analyse : ce qui s'est très probablement passé

### 2.1 « Clé d'accès » = *passkey* (norme FIDO2 / WebAuthn)

Depuis 2023-2024, beaucoup de sites (Google, Microsoft, Apple, PayPal, banques, forums…) proposent de créer une
**clé d'accès** au lieu d'un mot de passe. En français, Google et Android traduisent *passkey* par
« **clé d'accès** ». C'est bien de la sécurité, ce n'est pas une arnaque.

Une clé d'accès, c'est une paire de clés cryptographiques :

- une clé **privée** qui reste dans le téléphone (dans le « Gestionnaire de mots de passe Google ») ;
- une clé **publique** qui est stockée chez le site.

Pour se connecter ensuite, on ne tape pas de mot de passe : on valide avec l'empreinte, le visage… ou le **code de
l'écran du téléphone**.

### 2.2 Pourquoi Android a demandé de « créer un code »

C'est la règle : **un téléphone sans verrouillage d'écran ne peut pas stocker de clé d'accès**.
Android (via le Gestionnaire de mots de passe Google ou Chrome) refuse net et propose donc :

> « Pour créer une clé d'accès, vous devez d'abord configurer un verrouillage de l'écran »
> → *Définir un code / un schéma / un mot de passe*

Autrement dit, ce n'est pas le site qui réclamait un mot de passe de compte : c'était **Android qui exigeait un code
de déverrouillage du téléphone**, et ce code n'avait aucun rapport avec le site. `[certain]`

C'est exactement ce que décrit le récit : un téléphone qui n'avait « jamais eu de code, ni schéma, ni empreinte »
s'est retrouvé avec un code, parce qu'une application système l'a exigé pour enregistrer la clé d'accès.

### 2.3 Pourquoi le téléphone le demande « au démarrage »

Deux explications qui se cumulent :

1. Le code est devenu le **code de verrouillage de l'écran** → il est demandé à chaque allumage.
2. Android fonctionne en **chiffrement lié au code** (*File-Based Encryption*). Après un redémarrage, le téléphone
   est dans l'état « **BFU** » (*Before First Unlock*) : il ne peut pas lire les données tant que le code n'a pas été
   saisi. Il demande donc le code **avant** même de démarrer complètement.

Conséquence importante : **le code n'est pas stocké quelque part dans le téléphone**. Il sert de clé de
déchiffrement. Personne — ni un réparateur, ni un logiciel, ni Google — ne peut le « retrouver ». `[certain]`

### 2.4 Le compte en ligne est-il coincé, lui aussi ?

Pas forcément. Deux cas :

- **Le compte n'a jamais été finalisé** : il n'existe peut-être pas. Il suffit de recommencer la création plus tard,
  sur un autre appareil.
- **Le compte existe** : même si la clé d'accès est sur le téléphone, la plupart des sites gardent une solution de
  secours (mot de passe, e-mail de récupération, autre appareil connecté). Et les clés d'accès Android sont
  **sauvegardées et synchronisées** dans le compte Google : un autre appareil Android connecté au **même compte
  Google** peut les utiliser.

**Point clé** : le problème du téléphone et le problème du compte sont deux problèmes séparés. On peut très bien
récupérer le compte sans récupérer le téléphone.

### 2.5 Détail qui change tout : quel code exactement ?

Avant d'agir, il faut lire **mot pour mot** ce que l'écran affiche. Trois possibilités très différentes :

| Ce qui est écrit | Ce que c'est | Difficulté |
|---|---|---|
| « Saisissez votre code PIN » / pavé numérique + 4 points | Un PIN d'écran (4 chiffres par défaut) | Il faut le retrouver ou effacer |
| « Dessinez votre schéma » | Un schéma à 9 points | Parfois récupérable par la trace des doigts |
| « Saisissez votre mot de passe » / clavier complet | Un mot de passe alphanumérique | Le plus dur |
| « Connectez-vous avec votre compte Google » + logo Google | Mot de passe du **compte Google** | Récupérable via la procédure Google |

Si l'écran parle du **compte Google** (et non d'un code d'écran), la solution est toute différente et bien plus
simple : récupération du compte sur `accounts.google.com/signin/recovery`.

---

## 3. Ce qu'il faut faire, dans l'ordre

### Étape 0 — Ne rien casser (à faire tout de suite)

- [ ] **Ne pas multiplier les essais au hasard.** Sur Samsung, si l'option *Réinitialisation automatique* est active
      (désactivée par défaut), **15 codes faux = effacement total**. `[certain]`
- [ ] **Ne pas** appuyer sur « Effacer l'appareil » / « Rétablir la configuration d'usine » dans Localiser avant
      d'avoir vérifié les sauvegardes (étape 3).
- [ ] **Ne pas** acheter un logiciel « qui débloque sans perdre les données » : sur Android moderne, ça n'existe pas
      (voir §4).
- [ ] **Ne pas retirer la carte SD** sans raison : au contraire, c'est peut-être là que sont les photos (voir §3.3).

### Étape 1 — Retrouver le code par la mémoire (la seule méthode sans perte)

Le code a été tapé « sans souvenir », mais il a bien été **choisi** par la personne : c'est presque toujours un code
qui lui était déjà familier. Méthode :

1. **Lister par écrit** tous les codes qu'il utilise ailleurs : ancien téléphone, cadenas, carte bancaire (non !),
   dates de naissance (lui, parents, enfant), numéro de rue, années (2000, 2024…), suites (1234, 0000, 2580,
   1111, 1212), jours/mois (0101, 3112).
2. **Classer par probabilité** de gauche à droite (le plus probable d'abord).
3. **Tester 3 ou 4 codes par session**, puis attendre la fin du délai affiché (« Réessayez dans 30 secondes »,
   parfois 1 h). Attention : le délai augmente à chaque échec.
4. **Se filmer ou noter** chaque essai : après une nuit, on ne se souvient plus de ce qui a été testé.
5. Si c'était un **schéma** : éclairer l'écran avec une lampe torche, en biais, ou passer un peu de talc / de
   poudre. Les traces de doigts dessinent souvent le trajet. Puis tester les 2–3 tracés plausibles.
6. Demander à l'ami s'il se souvient de **combien de chiffres** il a tapés (4 ? 6 ?) — ça élimine la moitié des
   hypothèses.

> Réaliste : si le code a vraiment été tapé « au hasard », cette étape échouera. Elle coûte peu, donc on la fait
> d'abord — mais elle ne doit pas durer des jours.

### Étape 2 — Chercher les options officielles encore actives

Regarder l'écran de verrouillage, sous le pavé numérique :

- [ ] Un lien **« Code oublié ? » / « Mot de passe oublié ? »** → le toucher. Sur certains téléphones (Xiaomi,
      Huawei/Honor, Oppo/Realme/OnePlus, Transsion/Infinix/Tecno), cela propose de vérifier l'identité avec le
      **compte du fabricant** et de **remplacer le code sans effacer les données**. `[probable, selon modèle]`
- [ ] Une icône **empreinte digitale** encore proposée → impossible ici, aucune empreinte n'avait été enregistrée.
- [ ] Un code **PUK** ou un message de la carte SIM → problème de SIM, pas de téléphone : voir l'opérateur.

### Étape 3 — Sauver ce qui peut l'être AVANT tout effacement

Tant que le téléphone est allumé et connecté, on peut vérifier depuis un ordinateur si les données existent
ailleurs. À faire **avant** d'effacer quoi que ce soit :

- [ ] **Photos** : `photos.google.com` (si la sauvegarde automatique était active, elles sont là).
- [ ] **Contacts** : `contacts.google.com`.
- [ ] **Fichiers** : `drive.google.com` (et OneDrive / Dropbox si utilisés).
- [ ] **Documents / SMS / appels** : sauvegarde Android (`drive.google.com` → Sauvegardes) si la sauvegarde était
      activée.
- [ ] **WhatsApp** :
      - si **WhatsApp Web / Desktop** était déjà lié à un ordinateur, il continue de fonctionner : on peut lire et
        copier les conversations avant l'effacement ;
      - la sauvegarde Google Drive de WhatsApp (Paramètres → Discussions → Sauvegarde) sera restaurable après
        réinitialisation, **avec le même numéro**.
- [ ] **Carte SD** : si les photos étaient enregistrées sur la carte mémoire, elles **ne sont pas chiffrées** :
      retirer la carte, la lire sur un ordinateur, tout copier. Faire ça avant toute réinitialisation.
- [ ] **Carte SIM** : les contacts enregistrés sur la SIM sont lisibles ailleurs.

### Étape 4 — Les services officiels : ce qu'ils font vraiment

| Service | Ce qu'on peut faire | Débloque le téléphone ? |
|---|---|---|
| **Localiser (Find Hub)** de Google — `google.com/android/find` | Faire sonner, **Signaler comme égaré**, **Rétablir la configuration d'usine** | ❌ Non. « Signaler comme égaré » verrouille **avec le code existant** ; la seule autre option efface tout. `[certain]` |
| **SmartThings Find** (Samsung) — `smartthingsfind.samsung.com` | Localiser, sonner, verrouiller, **effacer les données** | ❌ Non. Le **déverrouillage à distance a été supprimé** (2023-2024). `[certain]` |
| **Assistance du fabricant** / centre de service | Diagnostic, flash, réinitialisation | ⚠️ Uniquement par effacement (avec preuve d'achat) |
| Anciens Android (≤ 7) | Réinitialisation du code à distance | ⚠️ Ne concerne pas un téléphone récent |

**Conclusion honnête** : sur Android 9+ avec chiffrement lié au code, **il n'existe aucune méthode officielle pour
retrouver l'accès sans le code et sans effacer les données.** `[certain]`
Si quelqu'un affirme le contraire, soit il parle d'un vieux téléphone, soit il vend quelque chose.

### Étape 5 — Préparer la réinitialisation (si les étapes 1–4 échouent)

Avant d'effacer, il faut **absolument** avoir :

1. **L'adresse e-mail et le mot de passe du compte Google présent sur le téléphone.**
   Après une réinitialisation, la **protection FRP** (*Factory Reset Protection*) redemande ce compte. Sans lui,
   le téléphone reste bloqué après l'effacement — on aurait perdu les données **et** le téléphone.
   → Si le mot de passe Google est oublié, le récupérer d'abord : `accounts.google.com/signin/recovery`.
2. Les sauvegardes vérifiées (étape 3).
3. La charge de la batterie (au moins 50 %) et le câble.

> Remarque : certaines personnes « retirent » l'appareil de la liste des appareils du compte Google avant de
> réinitialiser pour éviter la protection FRP. Ça ne marche pas toujours sur les versions récentes. À tenter
> seulement si le compte Google est réellement inaccessible. `[à vérifier au cas par cas]`

### Étape 6 — Réinitialiser (dernier recours)

Deux voies, même résultat — **tout est effacé** :

- **À distance** (téléphone allumé, connecté à Internet) : Localiser → sélectionner l'appareil →
  **Rétablir la configuration d'usine**.
- **Aux boutons** (téléphone éteint) : maintenir **Volume +** et **Power** jusqu'au logo (sur Samsung récent :
  téléphone branché en USB, puis **Volume +** et **Power**) → menu *Recovery* → **Wipe data / factory reset** →
  confirmer → **Reboot system now**.

Au redémarrage : configuration comme un téléphone neuf, puis **connexion avec le compte Google** qui était dessus
(protection FRP), puis restauration des sauvegardes vérifiées à l'étape 3.

### Étape 7 — Côté « compte du site » (à traiter en parallèle, ce n'est pas lié au téléphone)

- [ ] Sur un ordinateur, aller sur le site et utiliser **« Mot de passe oublié »** avec l'adresse e-mail utilisée.
- [ ] Si la création n'a jamais abouti : simplement **recommencer** plus tard — et cette fois, **refuser** la clé
      d'accès, choisir « utiliser un mot de passe ».
- [ ] S'il veut garder une clé d'accès : la créer **depuis un ordinateur** (Windows Hello, Touch ID, clé USB
      FIDO2) plutôt que depuis un téléphone partagé, ou depuis un téléphone qui a déjà un code connu.
- [ ] Dans les paramètres de sécurité du compte, **supprimer l'ancienne clé d'accès** devenue inutilisable, une
      fois reconnecté avec le mot de passe.

---

## 4. Ce qu'il ne faut PAS faire

| À éviter | Pourquoi |
|---|---|
| Taper 20–30 codes au hasard | Blocages de plus en plus longs ; risque d'effacement auto (Samsung : 15 essais si l'option est active) |
| Acheter « 4uKey », « LockWiper », « Tenorshare », « iMyFone »… | Publicités très bien référencées, résultats quasi nuls sur Android récent, souvent payantes et douteuses |
| Payer un « service de déblocage FRP » en ligne | Illégal ou arnaque ; peut rendre le téléphone inutilisable |
| Cliquer « Effacer » avant d'avoir vérifié les sauvegardes | Effacement définitif et immédiat |
| Réinitialiser sans connaître le compte Google | La protection FRP bloque ensuite l'appareil |
| Croire que le site a « piraté » le téléphone | Il n'y a eu ni virus ni arnaque : juste une exigence normale d'Android |

---

## 5. Prévention (à retenir pour la suite)

1. **Un code d'écran, on le choisit et on le note** dans un endroit sûr (carnet, gestionnaire de mots de passe),
   au moins les premiers jours.
2. Quand une application demande « **clé d'accès** », comprendre : *« on va utiliser le déverrouillage de mon
   téléphone à la place d'un mot de passe »*. Si le téléphone n'a pas de code, **Android va en créer un** — c'est le
   moment de reprendre la main et de choisir un code **connu**.
3. Toujours garder une **deuxième méthode de connexion** (mot de passe + e-mail de secours) sur les comptes
   importants.
4. Activer la **sauvegarde Google** (Photos, contacts, Drive) : c'est ce qui transforme une catastrophe en simple
   contrariété.
5. Vérifier de temps en temps qu'on connaît **le mot de passe du compte Google** du téléphone : c'est lui qui
   débloque tout après une réinitialisation.
6. Ne jamais laisser un téléphone sans code entre les mains d'un tiers « pour créer un compte » : c'est ainsi qu'on
   hérite d'un code que personne ne connaît.

---

## 6. Mise à jour du 29/10 — « le menu ne propose pas de Wipe data »

Réponse recueillie : le menu s'ouvre bien, **mais aucune option d'effacement n'apparaît**. Marque du téléphone
non identifiée. Photos de l'écran proposées par l'utilisateur.

### 6.1 Neuf fois sur dix, ce n'est pas le bon menu

| Ce qui est affiché | Ce que c'est réellement | Que faire |
|---|---|---|
| Logo + « Fastboot mode » + Start / Restart Bootloader / Recovery Mode / Power Off | **Fastboot**, pas le Recovery | Descendre sur **Recovery Mode** (Volume bas), valider avec **Power** |
| Triangle + « Downloading… Do not turn off target » | **Download / Odin** (Samsung) | Maintenir **Power + Volume bas** ~10 s pour redémarrer, puis refaire la combinaison du Recovery |
| Robot vert avec « No command » | **Recovery en attente** : le menu existe mais reste caché | Maintenir **Power**, appuyer une fois sur **Volume +**, relâcher |
| Écran texte « Android Recovery » + liste d'options | **Recovery** standard | Faire défiler : l'option est souvent sous la ligne de flottaison |
| Menu avec seulement « Reboot / Shutdown / Download » | **eRecovery** constructeur (Huawei, Honor…) | Chercher dans *More / Autres*, sinon passer par l'effacement à distance |

### 6.2 Le nom de l'option change selon les marques

Faire défiler **tout** le menu avec Volume bas avant de conclure :

- `Wipe data/factory reset`
- `Wipe all data` / `Wipe Data`
- `Factory data reset` / `Reset to factory settings`
- `Format data` / `Format /data`
- `Clear eMMC` / `Erase all data`

### 6.3 Si l'option n'existe vraiment pas

1. **Effacement à distance** — conditions : téléphone allumé, connecté à Internet, et connecté au compte.
   - Google : `google.com/android/find` → *Rétablir la configuration d'usine*
   - Samsung : `smartthingsfind.samsung.com` → *Effacer les données*
   - Xiaomi / Redmi / Poco : `i.mi.com` → *Effacer l'appareil*
   - Huawei / Honor : `cloud.huawei.com` → *Effacer les données*
   - Oppo / Realme / OnePlus / Vivo : portail cloud du constructeur
2. **Centre de service agréé**, avec preuve d'achat : reflashage du firmware (Odin, box MTK). L'effacement devient
   certain, mais les données sont perdues.
3. **Tecno / Infinix / itel** : réseau **Carlcare** (service officiel Transsion).

### 6.4 Photos à demander pour diagnostiquer

1. L'**écran de verrouillage** complet — c'est le plus important : il donne le texte exact de la demande de code.
2. Le **menu actuel**, plein écran, **avec le titre en haut** (il indique « Android Recovery », la version, le modèle).
3. Le même menu **après avoir défilé jusqu'en bas**.
4. Si possible, l'**étiquette** du téléphone (sous la batterie) ou la boîte : pour obtenir le modèle exact.

> Consigne de prudence : **masquer l'adresse e-mail** du compte Google si elle apparaît. Jamais de mot de passe ni de
> code en clair sur une photo publiée.

---

## 7. Informations à demander pour aller plus loin

Pour donner une procédure exacte (au lieu d'un plan général), il faut :

1. **Marque et modèle** du téléphone (Samsung ? Tecno ? Infinix ? Xiaomi ? itel ?).
2. **Texte exact** affiché à l'écran (photo de l'écran de verrouillage, sans données personnelles).
3. **Version d'Android** si connue.
4. Est-ce que le téléphone **capte le Wi-Fi / les données mobiles** ?
5. Est-ce que l'ami se souvient **du nombre de chiffres** tapés (4 ? 6 ? autre ?).
6. Le **compte Google** du téléphone est-il connu (adresse + mot de passe) ?

Avec ça, la réponse devient : « sur ce modèle, il y a / il n'y a pas de solution sans perte ».

---

## 8. Sources

- Google Chrome Help — *Gérer les clés d'accès dans Chrome* (Android 9+, verrouillage d'écran obligatoire) :
  <https://support.google.com/chrome/answer/13168025>
- Google Android Help (FR) — *Localiser un appareil Android égaré, le sécuriser ou en effacer les données*
  (les seules actions possibles : sonner, signaler comme égaré, effacer) :
  <https://support.google.com/android/answer/6160491?hl=fr>
- Communauté Samsung — *Mot de passe téléphone oublié* (le déverrouillage à distance n'existe plus) :
  <https://eu.community.samsung.com/t5/gamme-galaxy-s24/mot-de-passe-t%C3%A9l%C3%A9phone-oubli%C3%A9/td-p/14266356>
- Samsung — option *Réinitialisation automatique* après 15 tentatives incorrectes (désactivée par défaut) :
  <https://eu.community.samsung.com/t5/other-galaxy-s-series/unexpected-factory-reset-on-my-s21-ultra/td-p/5569008>
- Mobidocs — *Oubli du code ou schéma Samsung* (état réel de SmartThings Find) :
  <https://mobidocs.fr/tutoriels/oublie-du-code-ou-schema-de-deverrouillage-samsung>

---

### Note de fiabilité

| Affirmation | Niveau |
|---|---|
| « Clé d'accès » = *passkey*, et Android exige un verrouillage d'écran pour en stocker une | certain |
| Le code saisi est devenu le code de déverrouillage du téléphone | certain |
| Aucun outil officiel ne débloque un Android récent sans perte de données | certain |
| Le déverrouillage à distance Samsung n'existe plus | certain |
| L'option « code oublié » existe encore sur certains modèles (Xiaomi, Huawei, Transsion…) | probable, à vérifier sur l'appareil |
| Retirer l'appareil du compte Google évite la protection FRP | à vérifier, non fiable |
