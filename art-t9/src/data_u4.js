// Unité IV — Art dramatique (6 séances)
module.exports = [
{
  num:20, sous:"Art dramatique", theme:"Moyens corporels", titre:"Attitude, geste, mimique et voix",
  objectif:"Identifier et utiliser les moyens corporels (attitude, geste, mimique, mouvement, rythme, voix) pour exprimer un personnage ou une émotion.",
  doc:"PE T9 — Art dramatique (moyens corporels) ; FRP Arts T9 — Composante IV.",
  materiel:"Espace dégagé, conte ou nouvelle courte, chaises, objets simples, cahier.",
  revision:[
    {q:"Cite trois critères pour apprécier une danse.", a:"Rythme, espace/trajectoires, mouvements, expression, sécurité (trois suffisent)."},
    {q:"Que doit contenir une appréciation constructive ?", a:"Ce qui est réussi et ce qui peut être amélioré, avec des exemples précis."},
    {q:"Pourquoi raconter les difficultés d’une création ?", a:"Pour montrer le processus et les solutions trouvées."}],
  mise:{h:"Rova doit jouer un personnage en colère, mais il reste immobile et parle d’une voix plate. La classe ne comprend pas l’émotion. Quels moyens peut-il utiliser pour rendre le personnage vivant ?", a:"L’attitude du corps, les gestes, la mimique du visage, le mouvement, le rythme et la voix.", s:"Situation de jeu"},
  presentation:"Aujourd’hui nous allons apprendre : « Moyens corporels du comédien ». Après cette séance, vous serez capables d’utiliser votre corps et votre voix pour exprimer un personnage ou une émotion.",
  observation:{c:"Observez l’enseignant jouer la même phrase avec trois émotions : joie, colère, peur. Regardez le visage, les mains, la posture, le rythme et la voix.", s:"Démonstration de jeu"},
  analyse:[
    {q:"Qu’appelle-t-on attitude ?", a:"La manière de tenir son corps : droit, penché, fermé, ouvert."},
    {q:"Qu’est-ce qu’une mimique ?", a:"Une expression du visage qui montre une émotion ou une intention."},
    {q:"Comment la voix peut-elle changer ?", a:"Par le volume, le débit, la hauteur, le rythme et les silences."},
    {q:"Un geste doit-il être grand pour être compris ?", a:"Pas toujours, mais il doit être précis et visible par le public."},
    {q:"Pourquoi varier le rythme des mouvements ?", a:"Pour montrer l’état du personnage : calme, pressé, hésitant."},
    {q:"Que faut-il respecter quand on joue ?", a:"L’espace des autres, la sécurité et le texte ou la situation choisie."}],
  synthese:"Donc, le comédien utilise des moyens corporels : attitude, geste, mimique, mouvement, rythme et voix. Ces moyens rendent le personnage lisible et l’émotion compréhensible. On les choisit selon la situation, on les répète et on les ajuste devant le public.",
  app:{prod:{c:"En binôme, choisissez une émotion (joie, colère, peur, surprise). Jouez une phrase simple de trois façons différentes en changeant seulement les moyens corporels. Les autres identifient l’émotion.", att:"Trois versions lisibles d’une même phrase, avec des moyens corporels variés.", cr:["Émotion identifiable.","Moyens corporels variés.","Voix adaptée.","Espace respecté."]},
       ecrit:{c:"Complète avec les mots proposés : mimique, attitude, geste, voix.", items:["La manière de tenir le corps est l’… .","Un mouvement de la main ou du bras est un … .","L’expression du visage est une … .","Le volume, le débit et la hauteur appartiennent à la … ."], rep:["attitude","geste","mimique","voix"]}},
  eval:{prod:{c:"Tirez une émotion au sort et jouez une courte situation sans parler, puis avec une phrase. La classe doit identifier l’émotion et citer deux moyens corporels utilisés.", att:"Une situation lisible, avec ou sans paroles, et des moyens identifiables.", cr:["Émotion reconnue.","Deux moyens cités.","Jeu engagé.","Sécurité respectée."]},
        ecrit:{c:"Indique si chaque affirmation est vraie ou fausse.", items:["L’attitude du corps peut montrer une émotion.","La mimique concerne seulement les pieds.","La voix peut varier en volume et en débit.","Un geste précis aide le public à comprendre."], rep:[{r:"Vrai",j:"la posture exprime l’état du personnage."},{r:"Faux",j:"la mimique concerne le visage."},{r:"Vrai",j:"la voix varie en volume, débit, hauteur."},{r:"Vrai",j:"un geste précis rend l’action lisible."}]}},
  lecon:{kw:["moyens corporels","attitude","geste","mimique","voix","rythme"],
    sections:[
      {t:"Le corps qui parle", p:["Au théâtre, le corps raconte avant les mots. L’attitude montre si le personnage est confiant, fatigué, effrayé ou en colère. Le geste précise une action : montrer, repousser, accueillir. La mimique du visage rend l’émotion visible."], img:{f:"img_art_t9_s20_main.png",w:560,c:"Moyens corporels du comédien."}},
      {t:"La voix qui joue", p:["La voix peut être forte ou douce, rapide ou lente, aiguë ou grave. Les silences ont aussi du sens. Une même phrase peut changer de sens selon la voix : « Viens ici » peut être un ordre, une invitation ou une peur."]},
      {t:"Choisir et répéter", p:["On choisit les moyens corporels selon le personnage, l’émotion et la situation. On répète lentement, puis on joue devant un public. Les remarques aident à rendre le jeu plus précis, sans exagération inutile."]}],
    pasapas:{intro:"Le pas-à-pas montre comment construire un personnage. Le contre-exemple montre un jeu plat.", steps:[
      {t:"Choisir l’émotion et l’attitude", ok:"pasapas_s20_et1_ok.png", okc:"Posture cohérente avec l’émotion."},
      {t:"Ajouter geste et mimique", ok:"pasapas_s20_et2_ok.png", okc:"Geste précis, visage expressif."},
      {t:"Varier la voix et le rythme", ok:"pasapas_s20_et3_ok.png", okc:"Voix et rythme adaptés.", bad:"pasapas_s20_et3_pasok.png", badc:"Erreur fréquente : corps immobile et voix plate, émotion invisible."}]}},
  main:{f:"img_art_t9_s20_main.png",w:560,c:"Corps et voix au théâtre."}
},
{
  num:21, sous:"Art dramatique", theme:"Lire et analyser une histoire", titre:"Personnages, lieux, émotions et objets dans un conte",
  objectif:"Lire un conte ou une nouvelle, identifier les personnages, les lieux, les émotions et les objets nécessaires pour le faire vivre.",
  doc:"PE T9 — Art dramatique (conte, nouvelle, pièce ; personnages, temps, lieux, émotions, outils/objets).",
  materiel:"Conte ou nouvelle courte régionale, cahier, crayon, objets simples.",
  revision:[
    {q:"Cite quatre moyens corporels du comédien.", a:"Attitude, geste, mimique, mouvement, rythme, voix (quatre suffisent)."},
    {q:"Comment la voix peut-elle montrer une émotion ?", a:"Par le volume, le débit, la hauteur, le rythme et les silences."},
    {q:"Pourquoi répéter une scène ?", a:"Pour rendre le jeu plus précis et lisible."}],
  mise:{h:"Nivo lit un conte où un personnage traverse un village, une forêt et une rivière. Elle veut le jouer, mais elle ne sait pas quels objets préparer ni quelles émotions montrer. Comment peut-elle analyser l’histoire ?", a:"En repérant les personnages, les lieux, le temps, les émotions et les objets importants.", s:"Conte court"},
  presentation:"Aujourd’hui nous allons apprendre : « Analyser un conte pour le jouer ». Après cette séance, vous serez capables d’identifier les éléments d’une histoire qui serviront à la mise en scène.",
  observation:{c:"Lisez silencieusement le conte distribué, puis observez le tableau d’analyse : personnages, lieux, temps, émotions, objets.", s:"Conte, tableau d’analyse"},
  analyse:[
    {q:"Qui sont les personnages du conte ?", a:"Les êtres qui agissent dans l’histoire (héros, opposants, aides, selon le conte)."},
    {q:"Où se passe l’histoire ?", a:"Dans les lieux cités : village, forêt, rivière, maison, champ (selon le conte)."},
    {q:"Quand se passe l’histoire ?", a:"À l’époque ou au moment indiqué : autrefois, un matin, pendant une fête (selon le conte)."},
    {q:"Quelles émotions ressentent les personnages ?", a:"Joie, peur, colère, surprise, tristesse, courage (selon les passages)."},
    {q:"Quels objets peuvent faire vivre l’histoire ?", a:"Les objets cités ou symboliques : panier, bâton, tissu, corde, lampe, fruit (selon le conte)."},
    {q:"Pourquoi analyser avant de jouer ?", a:"Pour choisir les moyens corporels, les objets et l’organisation de l’espace."}],
  synthese:"Donc, avant de jouer un conte ou une nouvelle, on analyse les personnages, les lieux, le temps, les émotions et les objets. Cette analyse permet de choisir les moyens corporels, les accessoires et l’espace de jeu pour rendre l’histoire vivante.",
  app:{prod:{c:"En groupe, remplissez le tableau d’analyse du conte : personnages, lieux, temps, émotions, objets. Choisissez ensuite un passage et jouez-le en utilisant au moins deux objets simples.", att:"Un tableau complet et un passage joué avec des objets pertinents.", cr:["Tableau complet.","Passage choisi.","Objets pertinents.","Moyens corporels utilisés."]},
       ecrit:{c:"Complète avec les mots proposés : objets, lieux, émotions, personnages.", items:["Les êtres qui agissent dans l’histoire sont les … .","Les endroits où se passe l’histoire sont les … .","Joie, peur et colère sont des … .","Les accessoires utilisés pour jouer sont des … ."], rep:["personnages","lieux","émotions","objets"]}},
  eval:{prod:{c:"À partir d’un nouveau passage du conte, identifiez oralement : un personnage, son émotion, un lieu possible et un objet nécessaire. Jouez ensuite dix secondes de ce passage.", att:"Une analyse orale correcte et un court passage joué.", cr:["Personnage identifié.","Émotion identifiée.","Lieu/objet proposés.","Jeu court lisible."]},
        ecrit:{c:"Indique si chaque affirmation est vraie ou fausse.", items:["Les objets peuvent aider à faire vivre une histoire.","Il faut analyser seulement les mots difficiles, pas les émotions.","Les lieux influencent la mise en scène.","Les émotions des personnages guident le jeu."], rep:[{r:"Vrai",j:"les objets rendent l’histoire concrète."},{r:"Faux",j:"l’analyse porte aussi sur personnages, lieux, émotions, objets."},{r:"Vrai",j:"les lieux organisent l’espace de jeu."},{r:"Vrai",j:"les émotions guident attitude, voix et gestes."}]}},
  lecon:{kw:["conte","nouvelle","personnages","lieux","émotions","objets"],
    sections:[
      {t:"Lire pour jouer", p:["Un conte, une nouvelle ou une pièce théâtrale peut devenir une scène. Pour cela, on lit l’histoire en repérant ce qui sera visible sur scène : qui agit, où, quand, avec quelle émotion et avec quels objets."], img:{f:"img_art_t9_s21_main.png",w:560,c:"Tableau d’analyse d’un conte."}},
      {t:"Le tableau d’analyse", p:["Le tableau d’analyse organise les informations : personnages (rôle, caractère), lieux (village, forêt, maison), temps (époque, moment), émotions (joie, peur, colère), objets (accessoires). Il sert de pont entre le texte et la scène."]},
      {t:"Choisir un passage", p:["On ne joue pas toujours toute l’histoire. On choisit un passage clair, avec un début et une fin, où les personnages agissent et ressentent quelque chose. Les objets choisis doivent être simples, disponibles et utiles à l’action."]}]}
  ,main:{f:"img_art_t9_s21_main.png",w:560,c:"Analyser une histoire."}
},
{
  num:22, sous:"Art dramatique", theme:"Mise en scène", titre:"Organiser l’espace et les lieux pour jouer",
  objectif:"Organiser l’espace de jeu, placer les personnages et utiliser les objets pour mettre en scène un passage de conte ou de nouvelle.",
  doc:"PE T9 — Art dramatique (mise en scène : organiser et utiliser les lieux pour jouer).",
  materiel:"Espace de classe, chaises, tables, tissus, objets simples, craie/ruban, cahier.",
  revision:[
    {q:"Quels éléments analyse-t-on avant de jouer un conte ?", a:"Personnages, lieux, temps, émotions, objets."},
    {q:"Pourquoi choisir des objets simples ?", a:"Ils sont disponibles et suffisent à faire vivre l’action."},
    {q:"Que doit avoir un passage choisi pour être joué ?", a:"Un début, une fin, des actions et des émotions lisibles."}],
  mise:{h:"Le groupe de Koto veut jouer une scène de marché, mais tout le monde reste au même endroit et tourne le dos au public. La scène est confuse. Comment organiser l’espace pour que le public comprenne ?", a:"En définissant des zones (marché, maison, chemin), en plaçant les personnages face au public et en utilisant les objets comme repères.", s:"Espace de classe"},
  presentation:"Aujourd’hui nous allons apprendre : « Mise en scène : organiser l’espace ». Après cette séance, vous serez capables de transformer un espace de classe en lieu de jeu et d’y placer personnages et objets.",
  observation:{c:"Observez le plan de scène : avant-scène, centre, arrière-plan, côté cour, côté jardin. Regardez comment une table peut devenir un étal et un tissu une rivière.", s:"Plan de scène, objets détournés"},
  analyse:[
    {q:"Qu’est-ce que la mise en scène ?", a:"L’organisation de l’espace, des déplacements, des objets et du jeu pour raconter une histoire."},
    {q:"Pourquoi placer les personnages face au public ?", a:"Pour que le public voie les visages et comprenne les actions."},
    {q:"Comment une table peut-elle devenir un étal ?", a:"Par le jeu des acteurs et quelques objets posés dessus."},
    {q:"Que faut-il éviter dans l’espace de jeu ?", a:"Les obstacles dangereux, les zones invisibles et les déplacements qui se croisent sans raison."},
    {q:"Pourquoi définir des zones ?", a:"Pour que le public sache où se passe chaque action."},
    {q:"Comment tester la mise en scène ?", a:"En jouant le passage devant un public et en demandant ce qui est compris."}],
  synthese:"Donc, la mise en scène organise l’espace pour rendre l’histoire lisible. On définit des zones, on place les personnages face au public, on utilise des objets simples comme repères et on sécurise les déplacements. Le public doit comprendre où l’on est et ce qui se passe.",
  app:{prod:{c:"En groupe, transformez un coin de la classe en lieu du conte (marché, forêt, maison, rivière). Tracez un plan simple, placez trois objets et jouez un passage de vingt secondes.", att:"Un espace transformé, un plan et un passage lisible.", cr:["Lieu identifiable.","Plan simple.","Trois objets utiles.","Passage lisible."]},
       ecrit:{c:"Complète avec les mots proposés : public, zones, mise en scène, objets.", items:["L’organisation de l’espace et du jeu est la … .","Les parties de l’espace où se passent les actions sont des … .","Les personnes qui regardent la scène sont le … .","Les accessoires utilisés comme repères sont des … ."], rep:["mise en scène","zones","public","objets"]}},
  eval:{prod:{c:"Présentez votre espace de jeu. Un autre groupe doit identifier le lieu et citer deux objets utiles. Jouez ensuite le passage en corrigeant un problème de visibilité.", att:"Un espace présenté, identifié et amélioré.", cr:["Lieu identifié.","Objets cités.","Visibilité corrigée.","Jeu sécurisé."]},
        ecrit:{c:"Indique si chaque affirmation est vraie ou fausse.", items:["La mise en scène organise l’espace de jeu.","Les acteurs doivent toujours tourner le dos au public.","Un objet simple peut représenter un lieu.","Les déplacements dangereux doivent être évités."], rep:[{r:"Vrai",j:"la mise en scène organise espace, objets et jeu."},{r:"Faux",j:"les acteurs doivent être visibles du public."},{r:"Vrai",j:"un objet peut devenir un repère de lieu."},{r:"Vrai",j:"la sécurité fait partie de la mise en scène."}]}},
  lecon:{kw:["mise en scène","espace","zones","public","objets","déplacements"],
    sections:[
      {t:"Transformer l’espace", p:["La mise en scène transforme un lieu ordinaire en lieu d’histoire. Une table devient un étal, un tissu devient une rivière, une chaise devient un trône. Ce n’est pas le décor qui fait tout, mais le jeu et les choix d’organisation."], img:{f:"img_art_t9_s22_main.png",w:560,c:"Plan de scène et zones."}},
      {t:"Placer personnages et objets", p:["On définit des zones : avant-scène, centre, arrière-plan, côtés. Les personnages se placent pour être vus du public. Les objets servent l’action : un panier pour le marché, un bâton pour le voyage, un tissu pour la rivière."]},
      {t:"Sécuriser et tester", p:["On enlève les obstacles dangereux, on prévoit des entrées et sorties, on évite les croisements confus. On teste devant un public : si le public ne comprend pas le lieu ou l’action, on ajuste la mise en scène."]}],
    pasapas:{intro:"Le pas-à-pas montre comment organiser une scène. Le contre-exemple montre un espace confus.", steps:[
      {t:"Définir les zones", ok:"pasapas_s22_et1_ok.png", okc:"Plan clair : lieu, entrées, public."},
      {t:"Placer objets et personnages", ok:"pasapas_s22_et2_ok.png", okc:"Objets utiles, personnages visibles."},
      {t:"Jouer et ajuster", ok:"pasapas_s22_et3_ok.png", okc:"Déplacements sûrs, scène lisible.", bad:"pasapas_s22_et3_pasok.png", badc:"Erreur fréquente : dos au public, objets inutiles, déplacements croisés."}]}},
  main:{f:"img_art_t9_s22_main.png",w:560,c:"Organiser l’espace de jeu."}
},
{
  num:23, sous:"Art dramatique", theme:"Interpréter un rôle", titre:"Jouer un rôle : voix, corps et écoute",
  objectif:"Interpréter un rôle dans une courte scène en utilisant les moyens corporels, la voix et l’écoute des partenaires.",
  doc:"PE T9 — Art dramatique (jouer un rôle, moyens corporels, lecture/interprétation).",
  materiel:"Courte scène ou passage de conte, espace dégagé, objets simples, cahier.",
  revision:[
    {q:"Que fait la mise en scène ?", a:"Elle organise l’espace, les zones, les objets et les déplacements pour rendre l’histoire lisible."},
    {q:"Pourquoi les acteurs doivent-ils être visibles du public ?", a:"Pour que le public comprenne les actions et les émotions."},
    {q:"Cite deux objets qui peuvent représenter un lieu.", a:"Tissu pour rivière, table pour étal, chaise pour trône, bâton pour voyage (deux suffisent)."}],
  mise:{h:"Soa joue son rôle très fort, mais elle n’écoute pas son partenaire. Il répond à côté et la scène devient bizarre. Que manque-t-il à Soa pour bien jouer ?", a:"L’écoute du partenaire : regarder, réagir, attendre sa réplique et ajuster sa voix.", s:"Scène à deux"},
  presentation:"Aujourd’hui nous allons apprendre : « Jouer un rôle ». Après cette séance, vous serez capables d’interpréter un rôle en utilisant corps, voix et écoute, dans une courte scène.",
  observation:{c:"Observez deux versions d’une scène : une où les acteurs ne s’écoutent pas, une où ils se regardent et réagissent. Repérez la différence.", s:"Deux versions de scène"},
  analyse:[
    {q:"Que signifie écouter son partenaire ?", a:"Regarder, entendre sa réplique, réagir à ce qu’il fait et attendre son tour."},
    {q:"Pourquoi ne pas parler trop vite ?", a:"Pour être compris et laisser le partenaire répondre."},
    {q:"Comment montrer qu’on écoute sans parler ?", a:"Par le regard, l’attitude, la mimique et de petits gestes."},
    {q:"Que faire si on oublie son texte ?", a:"Rester dans le personnage, écouter le partenaire et improviser simplement si nécessaire."},
    {q:"Pourquoi répéter une scène ?", a:"Pour ajuster les entrées, les déplacements, la voix et les réactions."},
    {q:"Comment savoir si la scène est comprise ?", a:"En demandant au public ce qu’il a vu et compris."}],
  synthese:"Donc, jouer un rôle demande d’utiliser son corps et sa voix, mais aussi d’écouter les partenaires. Une scène vivante naît des réactions : regard, attente, réponse, ajustement. On répète, on joue devant le public, puis on améliore.",
  app:{prod:{c:"En binôme, jouez une scène de quatre répliques. Première version : chacun joue sans écouter. Deuxième version : regardez, écoutez et réagissez. La classe compare les deux versions.", att:"Deux versions contrastées et une comparaison orale.", cr:["Scène jouée.","Écoute visible.","Comparaison claire.","Voix/corps adaptés."]},
       ecrit:{c:"Complète avec les mots proposés : réplique, écouter, rôle, partenaire.", items:["Le personnage que l’on joue est un … .","La phrase dite par un personnage est une … .","L’autre acteur avec qui on joue est le … .","Entendre et réagir à l’autre, c’est l’… ."], rep:["rôle","réplique","partenaire","écouter"]}},
  eval:{prod:{c:"Jouez une courte scène devant la classe. Après la scène, un observateur dit ce qui était compris et ce qui manquait d’écoute. Rejouez la scène en corrigeant un point.", att:"Une scène jouée, une remarque et une correction.", cr:["Scène complète.","Remarque écoutée.","Correction visible.","Esprit d’équipe."]},
        ecrit:{c:"Indique si chaque affirmation est vraie ou fausse.", items:["Écouter son partenaire fait partie du jeu.","Il faut toujours parler plus fort que les autres.","Le regard peut montrer qu’on écoute.","Une scène se répète pour être ajustée."], rep:[{r:"Vrai",j:"l’écoute rend la scène vivante."},{r:"Faux",j:"la voix doit être adaptée, pas toujours plus forte."},{r:"Vrai",j:"le regard et l’attitude montrent l’écoute."},{r:"Vrai",j:"la répétition ajuste le jeu."}]}},
  lecon:{kw:["rôle","réplique","écoute","partenaire","interprétation","réaction"],
    sections:[
      {t:"Le rôle n’est pas seul", p:["Jouer un rôle, ce n’est pas seulement réciter un texte. C’est agir avec les autres. Chaque réplique répond à une situation : une question, un ordre, une surprise, une peur. Le personnage existe dans la relation."], img:{f:"img_art_t9_s23_main.png",w:560,c:"Écoute et réaction."}},
      {t:"Corps, voix, écoute", p:["Le corps montre l’état du personnage, la voix porte les mots, l’écoute relie les partenaires. On peut écouter sans parler : regard, attitude, mimique. Si l’un n’écoute pas, la scène devient mécanique."]},
      {t:"Répéter et ajuster", p:["On répète pour trouver le bon rythme, les bons déplacements et les bonnes réactions. Devant le public, on observe ce qui est compris. Une remarque précise permet de rejouer et d’améliorer la scène."]}]}
  ,main:{f:"img_art_t9_s23_main.png",w:560,c:"Jouer avec les autres."}
},
{
  num:24, sous:"Art dramatique", theme:"Création théâtrale", titre:"Créer une courte situation dramatique",
  objectif:"Créer une courte situation théâtrale à partir d’un thème régional, en organisant personnages, lieu, conflit et fin.",
  doc:"PE T9 — Art dramatique (créer de courtes situations ou histoires théâtrales ; identité régionale).",
  materiel:"Cahier de création, crayon, objets simples, espace dégagé, thèmes régionaux.",
  revision:[
    {q:"Que manque-t-il à un acteur qui n’écoute pas son partenaire ?", a:"L’écoute et la réaction, qui rendent la scène vivante."},
    {q:"Comment montrer qu’on écoute sans parler ?", a:"Par le regard, l’attitude, la mimique et de petits gestes."},
    {q:"Pourquoi rejouer une scène après une remarque ?", a:"Pour corriger et améliorer la compréhension du public."}],
  mise:{h:"La classe veut créer une petite pièce sur la vie de la région. Certains proposent une histoire de marché, d’autres une histoire de pêche ou de fête. Ils ont des idées, mais pas de structure. Comment créer une situation qui tient debout ?", a:"En choisissant un thème, des personnages, un lieu, un problème ou conflit, puis une fin.", s:"Thèmes régionaux"},
  presentation:"Aujourd’hui nous allons apprendre : « Créer une courte situation dramatique ». Après cette séance, vous serez capables d’inventer et de jouer une scène courte avec un début, un problème et une fin.",
  observation:{c:"Observez le schéma de création : thème → personnages → lieu → problème → actions → fin. Regardez une courte scène modèle.", s:"Schéma de création, scène modèle"},
  analyse:[
    {q:"Qu’est-ce qu’une situation dramatique ?", a:"Une courte histoire jouée avec des personnages, un lieu, un problème et une fin."},
    {q:"Pourquoi choisir un thème régional ?", a:"Pour valoriser la culture locale et partir du vécu des élèves."},
    {q:"Que faut-il définir avant d’écrire les répliques ?", a:"Les personnages, le lieu, le problème et la fin."},
    {q:"Un conflit doit-il être violent ?", a:"Non, il peut être un désaccord, un obstacle, une erreur ou un choix à faire."},
    {q:"Comment garder une scène courte ?", a:"En limitant le nombre de personnages, de lieux et d’actions."},
    {q:"Comment améliorer la création ?", a:"En jouant, en observant, en coupant ce qui est confus et en renforçant ce qui est clair."}],
  synthese:"Donc, créer une situation dramatique consiste à choisir un thème, des personnages, un lieu, un problème et une fin. On écrit ou improvise les répliques, on organise l’espace, on répète et on joue. La création peut valoriser l’identité régionale et se faire en groupe.",
  app:{prod:{c:"En groupe, créez une situation de trente secondes sur un thème régional. Elle doit avoir deux personnages, un lieu, un problème et une fin. Notez le plan et jouez une première version.", att:"Une situation courte structurée et une première version jouée.", cr:["Deux personnages.","Lieu identifiable.","Problème clair.","Fin présente."]},
       ecrit:{c:"Complète avec les mots proposés : fin, problème, personnages, thème.", items:["Le sujet choisi pour la création est le … .","Les êtres qui agissent sont les … .","L’obstacle ou le désaccord est le … .","Le moment où l’histoire se termine est la … ."], rep:["thème","personnages","problème","fin"]}},
  eval:{prod:{c:"Présentez la situation créée. Les observateurs identifient le thème, le problème et la fin. Le groupe explique un choix de création et rejoue la scène en améliorant la clarté.", att:"Une présentation complète et une amélioration ciblée.", cr:["Thème identifié.","Problème/fin identifiés.","Choix expliqué.","Amélioration visible."]},
        ecrit:{c:"Indique si chaque affirmation est vraie ou fausse.", items:["Une situation dramatique a besoin d’un problème ou d’un obstacle.","Une création doit toujours durer une heure.","Le thème régional peut valoriser la culture locale.","La fin aide à fermer l’histoire."], rep:[{r:"Vrai",j:"le problème crée l’action dramatique."},{r:"Faux",j:"une situation courte peut durer trente secondes à quelques minutes."},{r:"Vrai",j:"le thème régional valorise l’identité."},{r:"Vrai",j:"la fin donne une clôture."}]}},
  lecon:{kw:["situation dramatique","création","thème régional","conflit","personnages","fin"],
    sections:[
      {t:"Une petite histoire à jouer", p:["Une situation dramatique est une courte histoire avec des personnages, un lieu, un problème et une fin. Le problème n’est pas forcément violent : un désaccord, un objet perdu, un choix difficile, une surprise peuvent suffire."], img:{f:"img_art_t9_s24_main.png",w:560,c:"Structure d’une situation dramatique."}},
      {t:"Créer à partir de la région", p:["On peut partir d’un thème régional : marché, pêche, rizière, fête, voyage, conte local. Les personnages parlent et agissent selon leur milieu. La création valorise la culture locale et développe l’imagination."]},
      {t:"Écrire, improviser, couper", p:["On peut écrire les répliques ou improviser à partir du plan. On joue une première version, puis on coupe ce qui est confus et on renforce ce qui est clair. Une scène courte doit être comprise rapidement par le public."]}],
    pasapas:{intro:"Le pas-à-pas montre comment construire une situation. Le contre-exemple montre une histoire sans structure.", steps:[
      {t:"Choisir thème, personnages, lieu", ok:"pasapas_s24_et1_ok.png", okc:"Éléments de départ clairs."},
      {t:"Poser le problème et la fin", ok:"pasapas_s24_et2_ok.png", okc:"Conflit simple, fin prévue."},
      {t:"Jouer et couper", ok:"pasapas_s24_et3_ok.png", okc:"Scène courte et lisible.", bad:"pasapas_s24_et3_pasok.png", badc:"Erreur fréquente : actions qui s’ajoutent sans problème ni fin."}]}},
  main:{f:"img_art_t9_s24_main.png",w:560,c:"Créer une situation théâtrale."}
},
{
  num:25, sous:"Art dramatique", theme:"Présenter et apprécier", titre:"Jouer devant un public et apprécier la scène",
  objectif:"Présenter une courte scène, l’apprécier avec des critères simples et formuler des remarques constructives.",
  doc:"PE T9 — Art dramatique (apprécier les productions théâtrales ; jouer, présenter, commenter).",
  materiel:"Espace de scène, objets, grille d’appréciation, cahier, supports de création.",
  revision:[
    {q:"Quels éléments structurent une situation dramatique ?", a:"Thème, personnages, lieu, problème, actions, fin."},
    {q:"Pourquoi couper une scène trop longue ?", a:"Pour garder la clarté et l’attention du public."},
    {q:"Que peut valoriser un thème régional ?", a:"La culture locale et l’identité de la communauté."}],
  mise:{h:"Deux groupes jouent leur scène. Après le premier, le public dit seulement « c’était drôle ». Après le second, il explique le jeu, l’espace, la voix et ce qui pourrait être amélioré. Quelle réaction aide le plus les comédiens ?", a:"La seconde, car elle est précise, constructive et fondée sur des critères.", s:"Deux réactions du public"},
  presentation:"Aujourd’hui nous allons apprendre : « Présenter et apprécier une scène ». Après cette séance, vous serez capables de jouer devant un public, d’apprécier une scène avec des critères et de formuler des remarques constructives.",
  observation:{c:"Observez une scène modèle avec la grille : histoire comprise, jeu/écoute, voix, espace/objets, émotion. Notez ce qui est réussi avant de proposer une amélioration.", s:"Scène modèle, grille d’appréciation"},
  analyse:[
    {q:"Que faut-il faire avant de juger une scène ?", a:"Observer précisément et relier ce qu’on voit aux critères."},
    {q:"Cite trois critères d’appréciation théâtrale.", a:"Histoire comprise, jeu/écoute, voix, espace/objets, émotion (trois suffisent)."},
    {q:"Une remarque constructive doit-elle être respectueuse ?", a:"Oui, elle aide à progresser sans blesser."},
    {q:"Pourquoi expliquer ses choix de création ?", a:"Pour que le public comprenne l’intention et le processus."},
    {q:"Comment recevoir une remarque ?", a:"En écoutant, en remerciant et en essayant d’améliorer."},
    {q:"Que peut-on faire après l’appréciation ?", a:"Rejouer un extrait amélioré ou noter les corrections pour la prochaine fois."}],
  synthese:"Donc, présenter une scène demande de jouer avec engagement et d’expliquer ses choix. Apprécier une scène demande d’observer, de relier le ressenti aux critères, puis de formuler un jugement constructif. Le public et les comédiens apprennent ensemble.",
  app:{prod:{c:"Observez la scène d’un autre groupe avec la grille. Écrivez deux réussites et une amélioration, puis présentez votre appréciation en une minute. Le groupe concerné répond et rejoue un extrait.", att:"Une appréciation précise et un échange constructif.", cr:["Deux réussites.","Une amélioration.","Critères utilisés.","Échange respectueux."]},
       ecrit:{c:"Complète avec les mots proposés : public, constructive, critères, appréciation.", items:["Les personnes qui regardent la scène sont le … .","Les éléments qui servent à juger sont des … .","Une remarque qui aide à progresser est … .","Le jugement porté sur une scène est une … ."], rep:["public","critères","constructive","appréciation"]}},
  eval:{prod:{c:"Votre groupe présente sa création finale. Après la scène, expliquez le thème, le problème et un choix de mise en scène. Le public pose une question ; vous répondez et rejouez la fin améliorée.", att:"Une présentation finale complète et une fin améliorée.", cr:["Scène complète.","Choix expliqués.","Question répondue.","Fin améliorée."]},
        ecrit:{c:"Indique si chaque affirmation est vraie ou fausse.", items:["L’appréciation théâtrale s’appuie sur des observations.","Une remarque constructive peut être blessante et vague.","Expliquer ses choix aide le public à comprendre.","Rejouer un extrait permet de montrer l’amélioration."], rep:[{r:"Vrai",j:"l’appréciation part de critères observés."},{r:"Faux",j:"une remarque constructive est précise et respectueuse."},{r:"Vrai",j:"l’explication éclaire l’intention."},{r:"Vrai",j:"rejouer montre le progrès."}]}},
  lecon:{kw:["appréciation","public","critères","constructive","création","scène"],
    sections:[
      {t:"Jouer devant un public", p:["Jouer devant un public demande de l’engagement : voix audible, gestes visibles, écoute des partenaires. Le public n’est pas un juge silencieux ; il réagit, comprend ou ne comprend pas. Ces réactions aident à améliorer la scène."], img:{f:"img_art_t9_s25_main.png",w:560,c:"Public et comédiens."}},
      {t:"Apprécier avec des critères", p:["On peut apprécier une scène avec des critères : l’histoire est-elle comprise ? Les acteurs s’écoutent-ils ? La voix est-elle adaptée ? L’espace et les objets sont-ils lisibles ? L’émotion est-elle visible ? Chaque critère doit être illustré par un exemple."]},
      {t:"Échanger et progresser", p:["Après la scène, le groupe explique ses choix : thème, personnages, problème, mise en scène. Le public pose des questions et propose des améliorations. On peut rejouer un extrait pour montrer le progrès. L’art dramatique développe la confiance en soi, l’esprit d’équipe et le respect d’autrui."]}]}
  ,main:{f:"img_art_t9_s25_main.png",w:560,c:"Présenter et apprécier."}
}
];
