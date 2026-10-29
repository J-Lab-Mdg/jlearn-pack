# Téléphone Android bloqué par un code créé pendant une « clé d'accès » (passkey)

> **Date** : 29 octobre 2026
> **Sujet** : un téléphone demande un code au démarrage ; ce code a été « inventé » la veille lors de la création
> d'un compte en ligne, à cause d'une demande de **clé d'accès** (*passkey*).
> **Question posée** : comment résoudre ça ?
> **Statut** : **téléphone identifié** (ZTE P615F01, Android 15) et **sans compte Google**. Le menu de
> récupération ne propose pas d'effacement — c'est voulu par le constructeur. Sans compte Google, aucune
> protection FRP : un effacement est sûr.
> **✅ Résolu le 29 octobre 2026** : effacement de `userdata` + `metadata` par le propriétaire lui-même, en mode
> BROM (Unisoc), avec `spd_dump --kick`. Le téléphone redémarre sur l'assistant de configuration, sans code.
> Aucun envoi au fabricant, aucun atelier.
> **Déblocage manuel (BROM/Unisoc) — protocole complet et retour d'expérience**
> → [`2026-10-29-zte-p615f01-deblocage-manuel-brom.md`](./2026-10-29-zte-p615f01-deblocage-manuel-brom.md)

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

## 7. Mise à jour 2 du 29/10 — le téléphone est identifié : **ZTE P615F01, Android 15**

Deux photos ont été fournies : l'écran du menu de démarrage et l'écran de verrouillage. Le diagnostic est
maintenant établi, sans supposition.

### 7.1 Ce que montrent exactement les photos

**Photo 1 — le menu de démarrage**

```
Android Recovery
ZTE/P615F01_1/P615F01
15/AP3A.240905.015.A2/20260916.1023…
user/release-keys
Use volume up/down and power.

  Reboot system now
  Apply update from SD card
  Mount /system
  View recovery logs
  Run graphics test
  Run locale test
  Power off
```

- **Modèle** : `P615F01` = plateforme **ZTE Blade A56 Pro (Z2474) / Blade A76**, puce **Unisoc**.
  Le préfixe `15/` indique **Android 15**. Le build date du **16 septembre 2026** : téléphone neuf ou très récent.
- **Confirmation du problème** : la liste ne contient **aucune ligne `Wipe data/factory reset`**. Le blocage
  signalé est donc réel, et il n'est pas dû à une mauvaise manipulation.

**Photo 2 — l'écran de verrouillage**

```
        🔒
   Saisissez votre mot de passe
   [____________________]

   URGENCE              ANNULER
   (clavier AZERTY complet : 1-0, a-z, ?123)
```

- C'est bien le **mot de passe de l'écran du téléphone**, pas un mot de passe Google. La demande d'un compte
  Google afficherait « Connectez-vous avec votre compte Google » et proposerait « Mot de passe oublié ? ».
  Ici, **aucun lien de secours** n'est proposé.
- Le champ accepte **lettres et chiffres** : le code choisi peut très bien n'être que des chiffres
  (`1234`, une date…) saisis dans un champ texte.

### 7.2 Pourquoi ce menu n'a pas d'option d'effacement

Ce n'est **ni un bug, ni un téléphone abîmé** : c'est un choix du constructeur.

Depuis Android 10, la commande d'effacement du *recovery* est réservée aux images signées par le fabricant, et la
plupart des marques retirent l'entrée du menu pour éviter qu'un voleur efface un appareil. Samsung a fait la même
chose : la One UI 8.5 ne laisse plus que trois entrées dans son menu de recovery. ZTE applique la même politique,
encore plus strictement.

**Conséquence pratique** : sur ce modèle, la réinitialisation par les touches est **impossible**. Il faut passer
par une autre voie. C'est exactement ce que dit la documentation : la seule réinitialisation officielle restante
est celle déclenchée **à distance**, depuis le compte Google.

### 7.3 La question qui décide de tout : y a-t-il un compte Google sur ce téléphone ?

| Situation | Après un effacement | Verdict |
|---|---|---|
| **Aucun compte Google** n'a jamais été ajouté | Aucune protection FRP → le téléphone démarre normalement | ✅ Effacer est **sans risque** (hors données) |
| Un **compte Google** est connecté | L'écran « Vérifiez votre compte » revient : il faut **l'adresse + le mot de passe** de ce compte | ⚠️ Sans ces identifiants, le téléphone devient inutilisable |

**Comment le savoir** : depuis l'ordinateur (on voit Chrome ouvert sur la photo), se connecter sur
`google.com/android/find` avec le compte du propriétaire.

- Si le ZTE **apparaît** dans la liste → un compte est bien connecté, **et** le téléphone est en ligne.
- S'il **n'apparaît pas** → soit aucun compte, soit téléphone hors ligne.

> Ne pas sauter cette étape. C'est elle qui autorise (ou interdit) tout le reste.

### 7.4 Plan A — l'effacement à distance (le « wipe » qui manque au menu)

1. Sur le téléphone : choisir **`Reboot system now`** pour sortir du menu, et laisser démarrer jusqu'à l'écran
   du mot de passe.
2. **Connecter le téléphone à Internet** : tirer la barre de notifications vers le bas depuis l'écran de
   verrouillage permet généralement d'activer le Wi-Fi ou les données mobiles.
3. Sur l'ordinateur : `google.com/android/find` → sélectionner le ZTE → **Rétablir la configuration d'usine**.
4. Le téléphone s'efface et redémarre.

C'est **exactement** l'effacement cherché, mais déclenché à distance. Conditions : compte Google connecté +
téléphone en ligne.

### 7.5 Plan B — la voie du réparateur (puce Unisoc)

Le matériel est un **Unisoc** (plateforme `ums9230`). Les ateliers équipés — outils type Pandora, EFT Pro,
UnlockTool, Chimera, ou l'outil officiel Unisoc *ResearchDownload* avec un firmware `.PAC` — peuvent **formater la
partition utilisateur** et **réinitialiser la protection FRP** par câble USB, en mode BROM/FDL.

- Résultat : téléphone comme neuf. **Toutes les données sont perdues.**
- À exiger avant de laisser l'appareil : **preuve d'achat**, **devis écrit**, **bon de dépôt**, et la question
  explicite « *le FRP sera-t-il aussi enlevé ?* » (sinon le téléphone redemandera le compte Google après le flash).
- À Antananarivo, les boutiques de réparation du centre-ville pratiquent ce type d'intervention. Demander
  précisément : « *flash Unisoc, format userdata, reset FRP* ».

### 7.6 Plan C — support ZTE

Formulaire officiel : `support.ztedevices.com`. Demander la procédure de réinitialisation pour **P615F01**,
en citant le numéro de build `20260916.1023…`. Réponse lente, mais officielle et gratuite.

### 7.7 Peut-on encore essayer des mots de passe ?

Oui — mais **de façon organisée et limitée**.

- Ce téléphone **n'a pas** d'effacement automatique après X essais (contrairement à l'option Samsung, désactivée
  par défaut de toute façon). Le seul coût d'un échec est le **délai d'attente**, qui augmente : 30 s, puis
  1 min, 5 min, 30 min.
- Donc : **10 à 15 essais au maximum**, choisis **à l'avance**, classés par probabilité, et **notés sur papier**.
  Pas de saisie au hasard pendant une heure.
- Rappel : les données sont chiffrées par ce mot de passe. Un logiciel ne peut pas le « casser ». Seuls des
  essais intelligents ont une chance.
- Le champ accepte lettres **et** chiffres : si l'ami n'a tapé que des chiffres, il faut les saisir **dans ce
  champ texte**, sans se laisser troubler par le clavier AZERTY.

### 7.8 Ce qu'il ne faut pas faire sur ce téléphone précis

| À éviter | Pourquoi |
|---|---|
| `Apply update from SD card` avec un `.zip` trouvé sur Internet | Aucun bénéfice, et un fichier non signé peut bloquer définitivement l'appareil |
| `Mount /system` | Inutile : le système est en lecture seule sur Android moderne |
| Payer un « déblocage sans perte de données » | Impossible : le chiffrement est lié au mot de passe |
| Faire flasher l'appareil **avant** d'avoir vérifié le compte Google | Sinon il faudra payer **en plus** un déblocage FRP |
| Publier l'IMEI ou le numéro de série | Risque d'usage frauduleux |

### 7.9 Bilan honnête

- Les données **ne sont pas encore perdues** : le téléphone démarre et affiche son écran de verrouillage.
- Mais sans le mot de passe, **personne** ne peut les lire — ni un réparateur, ni un logiciel, ni ZTE.
- Trois issues seulement : **retrouver le mot de passe** (§7.7), **effacer à distance** (§7.4), ou **passer par un
  atelier** (§7.5).
- **Avant tout effacement**, refaire le tour des sauvegardes (§3, étape 3) : photos Google, contacts, Drive, carte
  SD, WhatsApp Web si un ordinateur était déjà lié.

---

## 8. Mise à jour 3 — **aucun compte Google sur le téléphone**

Information transmise le 29/10 : *« aucun compte Google dans le téléphone, malheureusement »*.

Le mot « malheureusement » est compréhensible, mais cette information est en réalité **la meilleure nouvelle de
tout le dossier**. Voici pourquoi.

### 8.1 Ce que ça change

| Conséquence | Détail |
|---|---|
| ✅ **Le risque de brique disparaît** | La protection FRP ne se déclenche que si un compte Google était configuré. Après un effacement, le téléphone redémarrera sur l'assistant de configuration **sans réclamer d'identifiants**. C'était le seul vrai danger de l'opération. |
| ❌ **L'effacement à distance est mort** | Sans compte, l'appareil n'apparaît pas dans `google.com/android/find`. Le Plan A (§7.4) tombe. |
| ✅ **L'atelier devient la voie normale** | Formater la partition utilisateur par câble USB sur puce Unisoc est une intervention courante, rapide, et désormais **sans risque de verrouillage résiduel**. |

En clair : on perdait une porte de sortie (l'effacement à distance), on gagne la garantie que **le téléphone
restera utilisable après l'effacement**. C'est un bon échange.

### 8.2 Mais il faut en être certain — trois vérifications

Tout le raisonnement repose sur cette information. Or un compte a pu être ajouté **pendant** la création de la clé
d'accès (les clés d'accès Android sont stockées dans le Gestionnaire de mots de passe Google, lié à un compte).

| Vérification | Où | Ce qu'on regarde |
|---|---|---|
| 1. Boîte mail | La boîte utilisée par le propriétaire | Un message « Bienvenue dans votre nouveau compte Google », « Votre appareil ZTE a été ajouté », ou une alerte de connexion autour de la date du incident |
| 2. Activité du compte | `myaccount.google.com/deviceactivity` | La liste des appareils connectés : le ZTE y figure-t-il ? |
| 3. Indice très fiable | Le téléphone lui-même | **WhatsApp / Play Store installés ?** Une application installée depuis le Play Store **exige** un compte Google. Si Play Store fonctionnait, un compte existait. |

> Si l'une de ces trois vérifications révèle un compte, **ne pas faire formater** avant d'avoir retrouvé
> l'adresse et le mot de passe de ce compte. Sinon la boutique efface le téléphone et il réclamera ensuite des
> identifiants introuvables.

### 8.3 Ce qui est réellement en jeu

Sans compte Google et sur un téléphone de quelques semaines (build du 16/09/2026), le volume de données est
probablement faible. Inventaire à faire avant de décider :

| Donnée | Où elle survit | Perdue à l'effacement ? |
|---|---|---|
| Photos sur **carte SD** | Sur la carte, lisible sur un ordinateur | ❌ Non, si on retire la carte avant |
| Photos sur mémoire interne | Nulle part | ✅ Oui |
| Contacts sur **carte SIM** | Sur la SIM | ❌ Non |
| Contacts dans le téléphone | Nulle part | ✅ Oui, sauf carnet papier |
| WhatsApp | Sauvegarde locale ou Google Drive | ✅ Oui, sans sauvegarde |
| Applications (APK) | Réinstallables | ✅ Oui, mais sans importance |
| Documents, PDF | Nulle part | ✅ Oui |

**Conclusion** : le calcul coût/bénéfice penche très fortement vers l'effacement. Passer des heures (et de
l'argent) à tenter de récupérer un téléphone quasi vide n'a pas de sens.

### 8.4 Le plan, maintenant qu'il est simplifié

1. **Arrêter les essais** après 10–15 tentatives réfléchies (§7.7). Le mot de passe est un champ texte : il a pu
   contenir des lettres. Faire une liste écrite, classée, et s'y tenir.
2. **Sauver ce qui est sauvable** : retirer la **carte SD** et la lire sur un ordinateur ; sortir la **carte SIM**
   et relever les contacts ; vérifier `photos.google.com` au cas où.
3. **Passer par un atelier** (§8.5). C'est la voie normale, pas un aveu d'échec.
4. **Vérifier au retrait** : le téléphone doit s'allumer sur l'assistant de configuration (choix de la langue),
   **sans écran « Vérifiez votre compte Google »**.

### 8.5 Le script pour la boutique

À dire, dans cet ordre :

> « Bonjour. Ce téléphone ZTE (modèle **P615F01**) a un mot de passe oublié. Aucun compte Google n'est dessus.
> Je veux juste **formater la partition utilisateur** (*format userdata*), pas forcément reflasher tout le
> système. C'est une puce **Unisoc**. Vous pouvez le faire par câble USB ? »

Questions à poser **avant** de laisser l'appareil :

- « Combien ça coûte ? » (demander le prix ferme, pas une fourchette)
- « Vous formatez seulement les données, ou vous réinstallez tout le firmware ? » → **préférer le formatage simple**
  : moins risqué, plus rapide, suffisant
- « Est-ce que le téléphone redémarrera comme neuf, sans rien me demander ? »
- « Vous me donnez un reçu avec l'IMEI ? »

À exiger au retour :

- Le téléphone démarre sur l'**assistant de configuration** (langue, Wi-Fi)
- **Aucune** demande de compte Google
- Le Wi-Fi, l'appareil photo et le son fonctionnent

Outil utilisé par l'atelier : en général un logiciel de service Unisoc (Pandora, EFT Pro, UnlockTool, ou
*ResearchDownload*). Ne pas demander à le faire soi-même : sans le bon firmware `.PAC` pour ce modèle précis, le
risque de rendre l'appareil inutilisable est réel.

### 8.6 Si aucun atelier ne veut le faire

- **Support ZTE** : `support.ztedevices.com` — demander la procédure de réinitialisation pour `P615F01`, en
  citant le build `20260916.1023…`.
- **Le vendeur** : le téléphone est récent (septembre 2026). S'il a une facture et une garantie, c'est le premier
  interlocuteur. Beaucoup de revendeurs prennent en charge ce type de déblocage.
- **Autres boutiques** : les stands de réparation téléphone du centre-ville font tous du Unisoc ; il suffit d'en
  trouver un équipé du câble et du logiciel.

### 8.7 Le vrai enseignement

Le problème n'aurait pas dû exister : la clé d'accès était **facultative**. Sur presque tous les sites, un lien
« **Utiliser un mot de passe** » ou « **Plus d'options** » permet d'éviter complètement la création d'un
verrouillage d'écran. C'est cette ligne-là qui manquait au moment du choix.

Règle à retenir pour la suite : **un verrouillage d'écran se choisit, il ne se subit pas.** Si un écran propose
d'en créer un, on reprend la main, on choisit un code connu, et **on le note le jour même**.

---

## 9. Informations à demander pour aller plus loin

Pour donner une procédure exacte (au lieu d'un plan général), il faut :

1. **Marque et modèle** du téléphone (Samsung ? Tecno ? Infinix ? Xiaomi ? itel ?).
2. **Texte exact** affiché à l'écran (photo de l'écran de verrouillage, sans données personnelles).
3. **Version d'Android** si connue.
4. Est-ce que le téléphone **capte le Wi-Fi / les données mobiles** ?
5. Est-ce que l'ami se souvient **du nombre de chiffres** tapés (4 ? 6 ? autre ?).
6. Le **compte Google** du téléphone est-il connu (adresse + mot de passe) ?

Avec ça, la réponse devient : « sur ce modèle, il y a / il n'y a pas de solution sans perte ».

---

## 10. Sources

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
- Rapport d'atelier — *FRP Reset ZTE Blade A56 Pro (Z2474)* : confirme que `P615F01` est bien le produit de la
  série Blade A56/A76 (plateforme Unisoc `ums9230`, Android 15, SDK 35) :
  <https://www.gsmzone.com/experience-reports/frp-reset-zte-blade-a56-pro-z2474-pandora-tool>
- Fiche produit ZTE Blade A76 `P615F01-GREY` (Unisoc T7250, Android 15, 128 Go) :
  <https://www.roscenter.com/product/zte-blade-a76-6-75-hd-4gb-8gb-128gb-polar-grey>
- Guide *SPD Research Tool* (outil officiel Unisoc, firmwares `.PAC`, effacement des données) :
  <https://spdflashtool.com/tutorial/use-spd-research-tool/>
- PhoneArena — *Samsung retire des outils du menu recovery* (précédent de constructeur) :
  <https://www.phonearena.com/news/samsung-update-is-removing-most-android-recovery-menu-tools-from-its-phones_id178630>
- Devicеsfаq — *« L'option Wipe data/factory reset n'apparaît pas »* (causes usuelles) :
  <https://www.devicesfaq.com/en/help/what-to-do-if-the-text-no-command-appears>
- Support ZTE : <https://support.ztedevices.com>

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
| `P615F01` = ZTE Blade A56 Pro / A76, Android 15, puce Unisoc | certain |
| Le menu recovery de ce modèle n'a pas d'option d'effacement, par conception | certain (visible sur photo) |
| L'écran demande le mot de passe de l'écran, pas celui du compte Google | certain (visuel + absence de lien de secours) |
| Ce modèle n'efface pas automatiquement après 15 essais | probable (aucune option de ce type documentée chez ZTE) |
| Un atelier Unisoc peut formater et retirer le FRP | certain (rapports d'atelier publiés sur ce modèle) |
| Sans compte Google, aucun FRP ne se déclenche après effacement | certain (principe même de la protection FRP) |
| Ouvrir le Play Store ou WhatsApp exige un compte Google | certain |
