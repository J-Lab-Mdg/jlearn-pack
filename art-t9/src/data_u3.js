// Unité III — Danse (6 séances)
module.exports = [
{
  num:14, sous:"Danse", theme:"Danses de salon", titre:"Valse : pulsation ternaire et pas de base",
  objectif:"Reproduire le pas de base de la valse en respectant la pulsation ternaire, l’espace et la sécurité.",
  doc:"PE T9 — Danse (danses de salon, valse, éléments de base musicale) ; FRP Arts T9 — Composante III.",
  materiel:"Espace dégagé, support sonore de valse, chaussures adaptées, craie ou ruban pour repères.",
  revision:[
    {q:"Que signifie une pulsation régulière ?", a:"Un battement stable qui sert de repère au groupe."},
    {q:"Comment compte-t-on un rythme ternaire ?", a:"1-2-3, 1-2-3."},
    {q:"Pourquoi choisir des instruments adaptés à un chant ?", a:"Pour respecter le style, le rythme et le message."}],
  mise:{h:"Soa regarde une valse et veut imiter les danseurs. Elle marche vite, sans compter, et se déséquilibre. Hery lui dit : « La valse se compte en trois temps. » Comment peut-elle retrouver l’équilibre ?", a:"En comptant 1-2-3, en faisant des pas réguliers et en gardant une posture stable.", s:"Extrait de valse"},
  presentation:"Aujourd’hui nous allons apprendre : « Valse : pulsation ternaire et pas de base ». Après cette séance, vous serez capables de reproduire un pas de valse simple en comptant trois temps et en utilisant l’espace sans vous heurter.",
  observation:{c:"Observez l’enseignant ou le support vidéo : posture, appuis, comptage 1-2-3, déplacement. Regardez aussi le schéma des pas au sol.", s:"Démonstration, schéma des pas"},
  analyse:[
    {q:"Sur combien de temps compte-t-on la valse ?", a:"Trois temps : 1-2-3."},
    {q:"Le premier pas est-il plutôt un pas d’appui ou un petit pas de côté ?", a:"Un pas d’appui, souvent vers l’avant ou le côté selon la figure."},
    {q:"Que font les deux autres temps ?", a:"Ils complètent le déplacement et ramènent les pieds joints ou prêts à recommencer."},
    {q:"Pourquoi garder les genoux souples ?", a:"Pour amortir les pas et garder l’équilibre."},
    {q:"Que faut-il regarder dans l’espace ?", a:"La direction du déplacement et la place des autres danseurs."},
    {q:"Comment améliorer après un premier essai ?", a:"En ralentissant, en comptant à voix haute et en corrigeant la posture."}],
  synthese:"Donc, la valse utilise une pulsation ternaire. Le pas de base se construit sur trois temps, avec des appuis réguliers, une posture stable et un espace respecté. On apprend lentement, puis on assemble les pas en séquence.",
  app:{prod:{c:"En binôme ou seul, reproduisez le pas de base de la valse sur huit mesures : avancez sur 1, placez le pied sur 2, joignez sur 3, puis recommencez. Gardez une distance de sécurité.", att:"Un pas de valse régulier, compté en trois temps, sans déséquilibre.", cr:["Comptage 1-2-3.","Appuis réguliers.","Posture stable.","Distance de sécurité."]},
       ecrit:{c:"Complète avec les mots proposés : ternaire, trois, posture, espace.", items:["La valse se compte sur … temps.","Un rythme à trois temps est … .","La tenue du corps s’appelle la … .","La zone disponible pour danser est l’… ."], rep:["trois","ternaire","posture","espace"]}},
  eval:{prod:{c:"Présentez une séquence de valse de quatre mesures. Un observateur compte les temps ; le danseur doit rester sur la pulsation et finir pieds joints.", att:"Une séquence courte, régulière, terminée pieds joints.", cr:["Quatre mesures.","Pulsation ternaire.","Fin pieds joints.","Sécurité respectée."]},
        ecrit:{c:"Indique si chaque affirmation est vraie ou fausse.", items:["La valse se compte généralement en trois temps.","Il faut courir pour suivre la valse.","La posture aide à garder l’équilibre.","L’espace des autres danseurs doit être respecté."], rep:[{r:"Vrai",j:"la valse est ternaire."},{r:"Faux",j:"la valse demande des pas réguliers, pas de courir."},{r:"Vrai",j:"une bonne posture stabilise le corps."},{r:"Vrai",j:"la sécurité demande de respecter l’espace."}]}},
  lecon:{kw:["valse","ternaire","pas de base","posture","espace","séquence"],
    sections:[
      {t:"Une danse à trois temps", p:["La valse est une danse de salon qui se compte en trois temps : 1-2-3. Le premier temps donne l’appui principal, les deux suivants complètent le mouvement. La musique peut être lente ou rapide, mais le comptage reste ternaire."], img:{f:"img_art_t9_s14_main.png",w:560,c:"Comptage et pas de base de la valse."}},
      {t:"Posture et sécurité", p:["Le corps reste droit, les genoux souples, le regard vers la direction du déplacement. On évite de se pencher en arrière ou de tirer sur le partenaire. Chacun garde une distance de sécurité pour éviter les collisions."]},
      {t:"Assembler les pas", p:["On apprend d’abord un pas, puis deux, puis une courte séquence. On compte à voix haute, on ralentit si nécessaire, puis on ajoute la musique. L’objectif est la régularité, pas la vitesse."]}],
    pasapas:{intro:"Le pas-à-pas montre le pas de base. Le contre-exemple montre une erreur fréquente de comptage.", steps:[
      {t:"Compter et se placer", ok:"pasapas_s14_et1_ok.png", okc:"Posture stable, comptage 1-2-3."},
      {t:"Faire les trois appuis", ok:"pasapas_s14_et2_ok.png", okc:"Pas d’appui, pas de côté, pieds joints."},
      {t:"Enchaîner la séquence", ok:"pasapas_s14_et3_ok.png", okc:"Déplacement régulier sur la pulsation.", bad:"pasapas_s14_et3_pasok.png", badc:"Erreur fréquente : compter en deux temps et perdre l’équilibre."}]}},
  main:{f:"img_art_t9_s14_main.png",w:560,c:"Valse : trois temps."}
},
{
  num:15, sous:"Danse", theme:"Danses de salon", titre:"Samba et cha-cha-cha : rythme et énergie",
  objectif:"Distinguer la samba et le cha-cha-cha, puis reproduire une séquence simple en respectant le rythme et l’espace.",
  doc:"PE T9 — Danse (danses de salon : samba, cha-cha-cha ; éléments de base musicale).",
  materiel:"Espace dégagé, supports sonores samba et cha-cha-cha, repères au sol.",
  revision:[
    {q:"Combien de temps compte-t-on dans la valse ?", a:"Trois temps."},
    {q:"Pourquoi garder les genoux souples ?", a:"Pour amortir les pas et garder l’équilibre."},
    {q:"Que faut-il respecter dans l’espace de danse ?", a:"La distance de sécurité et la place des autres."}],
  mise:{h:"Koto entend deux musiques de danse. L’une donne envie de rebondir, l’autre de faire des pas rapides et marqués. Il ne sait pas laquelle est la samba et laquelle est le cha-cha-cha. Comment les reconnaître ?", a:"En écoutant le rythme, le tempo et en observant les pas caractéristiques.", s:"Deux supports sonores"},
  presentation:"Aujourd’hui nous allons apprendre : « Samba et cha-cha-cha ». Après cette séance, vous serez capables de distinguer ces deux danses et de reproduire une séquence simple avec énergie et précision.",
  observation:{c:"Observez deux courtes démonstrations : samba (rebond, énergie) et cha-cha-cha (pas marqués, comptage). Écoutez les supports sonores.", s:"Démonstrations, supports sonores"},
  analyse:[
    {q:"La samba donne-t-elle souvent une impression de rebond ?", a:"Oui, elle utilise un mouvement de rebond et une énergie vive."},
    {q:"Le cha-cha-cha utilise-t-il des pas marqués ?", a:"Oui, des pas rapides et marqués, souvent comptés avec un rythme caractéristique."},
    {q:"Peut-on danser sans écouter la pulsation ?", a:"Non, il faut écouter la pulsation pour rester ensemble."},
    {q:"Que faut-il faire avant de danser vite ?", a:"S’échauffer et apprendre lentement."},
    {q:"Comment utiliser l’espace en groupe ?", a:"Garder des distances, suivre une trajectoire et éviter les croisements dangereux."},
    {q:"Comment améliorer une séquence ?", a:"En répéter les parties difficiles, en comptant et en ajustant l’énergie."}],
  synthese:"Donc, la samba et le cha-cha-cha sont des danses de salon avec des rythmes et des énergies différents. On les distingue à l’écoute et à l’observation des pas. Pour les reproduire, on s’échauffe, on compte, on respecte l’espace et on assemble les pas progressivement.",
  app:{prod:{c:"En groupe, créez une séquence de huit temps : quatre temps avec un rebond de samba, quatre temps avec des pas marqués de cha-cha-cha. Présentez-la sur le support sonore choisi.", att:"Une séquence où les deux styles sont reconnaissables.", cr:["Rebond samba visible.","Pas marqués cha-cha-cha.","Pulsation respectée.","Espace sécurisé."]},
       ecrit:{c:"Complète avec les mots proposés : cha-cha-cha, samba, échauffement, pulsation.", items:["La danse avec rebond vive est la … .","La danse aux pas marqués est le … .","La préparation du corps avant de danser est l’… .","Le battement régulier de la musique est la … ."], rep:["samba","cha-cha-cha","échauffement","pulsation"]}},
  eval:{prod:{c:"Écoutez l’extrait choisi par l’enseignant. Identifiez la danse, puis reproduisez quatre temps caractéristiques. Un camarade observe et donne une remarque.", att:"Une identification correcte et quatre temps caractéristiques.", cr:["Danse identifiée.","Pas caractéristiques.","Remarque écoutée.","Sécurité respectée."]},
        ecrit:{c:"Indique si chaque affirmation est vraie ou fausse.", items:["La samba utilise souvent un rebond.","Le cha-cha-cha se danse toujours sans compter.","L’échauffement prépare le corps à danser.","Il faut respecter l’espace des autres danseurs."], rep:[{r:"Vrai",j:"la samba a une énergie rebondie."},{r:"Faux",j:"le cha-cha-cha demande un comptage précis."},{r:"Vrai",j:"l’échauffement réduit les risques."},{r:"Vrai",j:"l’espace est une règle de sécurité."}]}},
  lecon:{kw:["samba","cha-cha-cha","rebond","pas marqués","échauffement","pulsation"],
    sections:[
      {t:"Deux danses, deux énergies", p:["La samba est une danse vive, souvent associée à un rebond et à une énergie festive. Le cha-cha-cha est une danse de salon aux pas marqués, avec un comptage précis. Les deux demandent de l’écoute rhythmique et de la coordination."], img:{f:"img_art_t9_s15_main.png",w:560,c:"Samba et cha-cha-cha."}},
      {t:"S’échauffer et compter", p:["Avant de danser, on échauffe les chevilles, les genoux, les hanches et les épaules. On apprend les pas lentement en comptant, puis on ajoute la musique. La vitesse ne doit pas faire perdre la précision."]},
      {t:"Danser en groupe", p:["En groupe, chacun suit une trajectoire simple et garde une distance. On peut alterner les rôles : danseur, observateur, compteur. L’observateur aide à repérer les erreurs de rythme ou d’espace."]}]}
  ,main:{f:"img_art_t9_s15_main.png",w:560,c:"Deux danses de salon."}
},
{
  num:16, sous:"Danse", theme:"Trajectoires et espace", titre:"Trajectoires : droite, circulaire, sinueuse, zigzag",
  objectif:"Utiliser différentes trajectoires dans une séquence dansée en tenant compte de l’espace et de la musique.",
  doc:"PE T9 — Danse (trajectoires : ligne droite, sinueuse, circulaire, zigzag).",
  materiel:"Espace dégagé, craie/ruban/adhésif pour tracer au sol, support sonore, cahier.",
  revision:[
    {q:"Cite deux danses de salon vues.", a:"Valse, samba, cha-cha-cha (deux suffisent)."},
    {q:"Pourquoi s’échauffer avant de danser ?", a:"Pour préparer le corps et réduire les risques de blessure."},
    {q:"Que doit faire l’observateur pendant une danse ?", a:"Regarder le rythme, l’espace et donner une remarque utile."}],
  mise:{h:"La classe danse, mais tout le monde avance en ligne droite et se croise. Nivo propose de tracer des chemins au sol : droit, rond, en serpent, en zigzag. Comment ces chemins peuvent-ils aider la danse ?", a:"Ils organisent les déplacements, évitent les collisions et donnent une forme à la chorégraphie.", s:"Trajectoires au sol"},
  presentation:"Aujourd’hui nous allons apprendre : « Trajectoires dansées ». Après cette séance, vous serez capables de suivre et créer des trajectoires droites, circulaires, sinueuses et en zigzag dans une séquence dansée.",
  observation:{c:"Observez les quatre trajectoires tracées au sol : ligne droite, cercle, ligne sinueuse, zigzag. Regardez l’enseignant les parcourir en musique.", s:"Trajectoires tracées, démonstration"},
  analyse:[
    {q:"Quelle trajectoire va d’un point à un autre sans tourner ?", a:"La ligne droite."},
    {q:"Quelle trajectoire tourne autour d’un centre ?", a:"La trajectoire circulaire."},
    {q:"Quelle trajectoire fait des courbes successives ?", a:"La trajectoire sinueuse."},
    {q:"Quelle trajectoire change brusquement de direction ?", a:"Le zigzag."},
    {q:"Pourquoi tracer les trajectoires au sol ?", a:"Pour visualiser le chemin et éviter les collisions."},
    {q:"Peut-on changer de trajectoire pendant la musique ?", a:"Oui, si le changement est préparé et reste sur la pulsation."}],
  synthese:"Donc, une trajectoire est le chemin suivi par le danseur dans l’espace. Elle peut être droite, circulaire, sinueuse ou en zigzag. Les trajectoires organisent la chorégraphie, évitent les collisions et permettent de varier les déplacements en respectant la musique.",
  app:{prod:{c:"En groupe, tracez quatre trajectoires au sol. Chaque danseur en choisit une, la parcourt sur huit temps, puis change de trajectoire au signal. Les autres observent la sécurité.", att:"Une séquence avec quatre trajectoires identifiables et des changements sûrs.", cr:["Trajectoires identifiables.","Changement au signal.","Pulsation respectée.","Aucune collision."]},
       ecrit:{c:"Complète avec les mots proposés : zigzag, circulaire, droite, sinueuse.", items:["Un chemin sans courbe est une ligne … .","Un chemin qui tourne autour d’un centre est … .","Un chemin avec des courbes douces est … .","Un chemin avec des changements brusques de direction est un … ."], rep:["droite","circulaire","sinueuse","zigzag"]}},
  eval:{prod:{c:"Créez une courte séquence de seize temps utilisant au moins trois trajectoires différentes. Présentez-la, puis nommez les trajectoires utilisées.", att:"Une séquence lisible avec trois trajectoires nommées.", cr:["Trois trajectoires.","Seize temps.","Présentation claire.","Sécurité respectée."]},
        ecrit:{c:"Indique si chaque affirmation est vraie ou fausse.", items:["Une trajectoire circulaire tourne autour d’un centre.","Le zigzag est une ligne parfaitement droite.","Les trajectoires aident à organiser l’espace.","On peut changer de trajectoire sans écouter la musique."], rep:[{r:"Vrai",j:"le cercle tourne autour d’un centre."},{r:"Faux",j:"le zigzag change brusquement de direction."},{r:"Vrai",j:"les trajectoires organisent les déplacements."},{r:"Faux",j:"le changement doit rester sur la pulsation."}]}},
  lecon:{kw:["trajectoire","ligne droite","circulaire","sinueuse","zigzag","espace"],
    sections:[
      {t:"Quatre chemins dans l’espace", p:["La trajectoire est le chemin que suit le danseur. Une ligne droite va d’un point à un autre. Une trajectoire circulaire tourne autour d’un centre. Une trajectoire sinueuse fait des courbes douces. Un zigzag change brusquement de direction."], img:{f:"img_art_t9_s16_main.png",w:560,c:"Quatre trajectoires."}},
      {t:"Tracer et sécuriser", p:["On peut tracer les trajectoires au sol avec de la craie, du ruban ou des repères. Cela aide à visualiser le chemin et à éviter les collisions. Chaque danseur doit savoir où il va et où sont les autres."]},
      {t:"Varier avec la musique", p:["On peut changer de trajectoire au signal, à la fin d’une phrase musicale ou sur un temps fort. Le changement doit rester sur la pulsation. Une chorégraphie devient plus intéressante quand elle combine plusieurs trajectoires."]}],
    pasapas:{intro:"Le pas-à-pas montre comment utiliser une trajectoire. Le contre-exemple montre un déplacement désordonné.", steps:[
      {t:"Tracer le chemin", ok:"pasapas_s16_et1_ok.png", okc:"Trajectoire visible au sol."},
      {t:"Parcourir en comptant", ok:"pasapas_s16_et2_ok.png", okc:"Pas réguliers sur le chemin."},
      {t:"Changer de trajectoire", ok:"pasapas_s16_et3_ok.png", okc:"Changement préparé, espace respecté.", bad:"pasapas_s16_et3_pasok.png", badc:"Erreur fréquente : couper les chemins et provoquer des collisions."}]}},
  main:{f:"img_art_t9_s16_main.png",w:560,c:"Trajectoires dansées."}
},
{
  num:17, sous:"Danse", theme:"Mouvements corporels", titre:"Mobilité du corps : avancer, reculer, rebondir, tourner",
  objectif:"Exécuter des mouvements variés (avancer, reculer, rebondir, tourner, rouler, ramper) et les assembler en séquence.",
  doc:"PE T9 — Danse (mobilité des parties du corps : rouler, ramper, gambader, rebondir, avancer, reculer, chuter).",
  materiel:"Espace dégagé, tapis ou sol souple si disponible, support sonore, repères.",
  revision:[
    {q:"Cite quatre trajectoires.", a:"Droite, circulaire, sinueuse, zigzag."},
    {q:"Pourquoi tracer une trajectoire au sol ?", a:"Pour visualiser le chemin et sécuriser les déplacements."},
    {q:"Que doit respecter un changement de trajectoire ?", a:"La pulsation et l’espace des autres."}],
  mise:{h:"Aina veut créer une danse, mais elle ne fait que marcher. Son groupe lui propose d’utiliser d’autres mouvements : rebondir, tourner, reculer, ramper. Comment ces mouvements peuvent-ils enrichir la danse ?", a:"Ils varient les niveaux, les directions et l’énergie, et rendent la séquence plus expressive.", s:"Mouvements variés"},
  presentation:"Aujourd’hui nous allons apprendre : « Mobilité du corps en danse ». Après cette séance, vous serez capables d’exécuter plusieurs mouvements et de les assembler en une séquence courte et sûre.",
  observation:{c:"Observez l’enseignant exécuter : avancer, reculer, rebondir, tourner, ramper, rouler (si le sol le permet). Repérez le niveau du corps : haut, moyen, bas.", s:"Démonstration de mouvements"},
  analyse:[
    {q:"Quels mouvements déplacent le corps vers l’avant ou l’arrière ?", a:"Avancer et reculer."},
    {q:"Quel mouvement donne une impression de ressort ?", a:"Rebondir."},
    {q:"Quels mouvements utilisent un niveau bas ?", a:"Ramper, rouler (si possible), s’accroupir."},
    {q:"Pourquoi varier les niveaux ?", a:"Pour rendre la danse plus expressive et éviter la monotonie."},
    {q:"Que faut-il vérifier avant de rouler ou ramper ?", a:"Que le sol est propre, souple ou sécurisé, et qu’il y a assez d’espace."},
    {q:"Comment assembler les mouvements ?", a:"En choisissant un ordre, en comptant les temps et en respectant la pulsation."}],
  synthese:"Donc, la danse utilise toute la mobilité du corps : avancer, reculer, rebondir, tourner, ramper, rouler, gambader. On varie les niveaux, les directions et l’énergie. Chaque mouvement doit être sécurisé et assemblé en séquence sur la pulsation.",
  app:{prod:{c:"En binôme, créez une séquence de huit temps avec quatre mouvements différents : un déplacement, un rebond, une rotation, un niveau bas. Présentez-la lentement puis en musique.", att:"Une séquence avec quatre mouvements identifiables et sécurisés.", cr:["Quatre mouvements.","Niveaux variés.","Pulsation respectée.","Sécurité."]},
       ecrit:{c:"Complète avec les mots proposés : bas, rebond, niveaux, rotation.", items:["Ramper se fait souvent à un niveau … .","Un mouvement de ressort est un … .","Haut, moyen et bas sont des … .","Tourner autour de soi est une … ."], rep:["bas","rebond","niveaux","rotation"]}},
  eval:{prod:{c:"Votre groupe présente la séquence. Un autre groupe identifie les mouvements et propose une amélioration de sécurité ou de rythme. Vous rejouez la séquence améliorée.", att:"Une présentation, une identification et une amélioration.", cr:["Mouvements identifiables.","Remarque pertinente.","Amélioration visible.","Esprit d’équipe."]},
        ecrit:{c:"Indique si chaque affirmation est vraie ou fausse.", items:["Rebondir demande des appuis souples.","Ramper se fait toujours debout.","Varier les niveaux rend la danse plus expressive.","On peut rouler sur un sol dangereux sans préparation."], rep:[{r:"Vrai",j:"le rebond demande de la souplesse."},{r:"Faux",j:"ramper se fait à un niveau bas."},{r:"Vrai",j:"les niveaux varient l’expression."},{r:"Faux",j:"la sécurité doit être vérifiée avant de rouler."}]}},
  lecon:{kw:["mobilité","niveaux","rebond","rotation","ramper","sécurité"],
    sections:[
      {t:"Explorer les mouvements", p:["Le corps peut avancer, reculer, tourner, rebondir, gambader, ramper ou rouler. Chaque mouvement engage des parties du corps différentes. On explore d’abord lentement, sans musique, pour comprendre l’appui et l’équilibre."], img:{f:"img_art_t9_s17_main.png",w:560,c:"Mouvements et niveaux."}},
      {t:"Varier les niveaux et l’énergie", p:["Le niveau haut correspond à la position debout ou en extension ; le niveau moyen à une position fléchie ; le niveau bas au sol ou accroupi. L’énergie peut être douce, vive, saccadée. Ces variations donnent du relief à la danse."]},
      {t:"Sécuriser et assembler", p:["Avant les mouvements au sol, on vérifie l’espace et la surface. On assemble les mouvements en comptant les temps, puis on ajoute la musique. Une séquence réussie est lisible, régulière et sûre."]}]}
  ,main:{f:"img_art_t9_s17_main.png",w:560,c:"Mobilité corporelle."}
},
{
  num:18, sous:"Danse", theme:"Création chorégraphique", titre:"Créer une courte séquence dansée",
  objectif:"Inventer une courte chorégraphie sur une danse de salon en tenant compte des éléments de base musicale, des trajectoires et de l’espace.",
  doc:"PE T9 — Danse (inventer des mouvements chorégraphiques, espace, éléments de base musicale).",
  materiel:"Espace dégagé, supports sonores, repères au sol, cahier de création, crayon.",
  revision:[
    {q:"Cite trois mouvements corporels vus en danse.", a:"Avancer, reculer, rebondir, tourner, ramper, rouler (trois suffisent)."},
    {q:"Pourquoi varier les niveaux ?", a:"Pour rendre la danse plus expressive."},
    {q:"Que faut-il vérifier avant un mouvement au sol ?", a:"La sécurité de l’espace et de la surface."}],
  mise:{h:"Le groupe de Nivo doit inventer une danse pour la classe. Ils ont beaucoup d’idées, mais tout est mélangé : pas de début, pas de fin, pas de trajectoire. Comment organiser leurs idées en chorégraphie ?", a:"En choisissant une musique, un début, une fin, des mouvements, des trajectoires et en comptant les temps.", s:"Projet de chorégraphie"},
  presentation:"Aujourd’hui nous allons apprendre : « Créer une courte séquence dansée ». Après cette séance, vous serez capables d’inventer une chorégraphie simple, organisée et présentée à la classe.",
  observation:{c:"Observez le schéma de création : musique → idée → mouvements → trajectoires → ordre → répétition → présentation. Regardez une courte chorégraphie modèle.", s:"Schéma de création, modèle"},
  analyse:[
    {q:"Par quoi commence une création chorégraphique ?", a:"Par le choix d’une musique et d’une idée ou d’une émotion."},
    {q:"Que faut-il définir avant de danser ?", a:"Le début, la fin, les mouvements, les trajectoires et le nombre de temps."},
    {q:"Pourquoi compter les temps ?", a:"Pour organiser la séquence et rester sur la pulsation."},
    {q:"Comment choisir les mouvements ?", a:"En fonction de l’idée, de la musique, de l’espace et des capacités du groupe."},
    {q:"Que faire si une partie est trop difficile ?", a:"La simplifier ou la remplacer par un mouvement plus sûr."},
    {q:"Comment améliorer après une répétition ?", a:"En filmant ou observant, en notant les problèmes et en corrigeant."}],
  synthese:"Donc, créer une chorégraphie consiste à choisir une musique et une idée, puis à organiser des mouvements et des trajectoires dans un ordre compté. On répète, on simplifie si nécessaire, on sécurise l’espace, puis on présente et on améliore grâce aux remarques.",
  app:{prod:{c:"En groupe, créez une chorégraphie de trente secondes sur une danse de salon. Elle doit avoir un début, une fin, deux trajectoires et quatre mouvements différents. Notez le plan dans le cahier.", att:"Une chorégraphie courte, structurée et notée.", cr:["Début et fin.","Deux trajectoires.","Quatre mouvements.","Plan noté."]},
       ecrit:{c:"Complète avec les mots proposés : chorégraphie, début, fin, trajectoires.", items:["Une suite organisée de pas et de mouvements est une … .","Le premier moment de la danse est le … .","Le dernier moment de la danse est la … .","Les chemins suivis dans l’espace sont des … ."], rep:["chorégraphie","début","fin","trajectoires"]}},
  eval:{prod:{c:"Présentez la chorégraphie. Les observateurs doivent identifier la danse choisie, les trajectoires et un moment fort. Le groupe explique ensuite une difficulté rencontrée et comment il l’a résolue.", att:"Une présentation complète et une explication de création.", cr:["Présentation structurée.","Éléments identifiables.","Difficulté expliquée.","Solution proposée."]},
        ecrit:{c:"Indique si chaque affirmation est vraie ou fausse.", items:["Une chorégraphie a besoin d’un début et d’une fin.","Il faut toujours choisir les mouvements les plus dangereux.","Compter les temps aide à organiser la danse.","Les remarques des autres peuvent améliorer la création."], rep:[{r:"Vrai",j:"une chorégraphie est structurée."},{r:"Faux",j:"la sécurité prime sur la difficulté."},{r:"Vrai",j:"le comptage organise la séquence."},{r:"Vrai",j:"l’appréciation aide à améliorer."}]}},
  lecon:{kw:["chorégraphie","création","début","fin","trajectoires","répétition"],
    sections:[
      {t:"De l’idée à la danse", p:["Une création chorégraphique commence par une idée : une émotion, une histoire, une image, un rythme. On choisit une musique de danse de salon, puis on cherche des mouvements qui expriment cette idée. La démarche suit : inspiration, élaboration, mise en perspective, communication."], img:{f:"img_art_t9_s18_main.png",w:560,c:"Étapes de création."}},
      {t:"Organiser la séquence", p:["On définit un début, un développement et une fin. On choisit les trajectoires, les niveaux, les formations (solo, binôme, groupe). On compte les temps pour que chacun sache quand entrer, sortir ou changer de direction."]},
      {t:"Répéter, présenter, améliorer", p:["On répète lentement, puis en musique. On observe ce qui fonctionne : régularité, sécurité, expression. On note les difficultés et on les résout. La présentation devant la classe permet de recevoir des remarques et d’améliorer la création."]}],
    pasapas:{intro:"Le pas-à-pas montre comment organiser une création. Le contre-exemple montre une suite désordonnée.", steps:[
      {t:"Choisir l’idée et la musique", ok:"pasapas_s18_et1_ok.png", okc:"Idée claire, musique adaptée."},
      {t:"Placer mouvements et trajectoires", ok:"pasapas_s18_et2_ok.png", okc:"Plan compté et sécurisé."},
      {t:"Répéter et présenter", ok:"pasapas_s18_et3_ok.png", okc:"Début, fin, remarques prises en compte.", bad:"pasapas_s18_et3_pasok.png", badc:"Erreur fréquente : enchaîner sans début, fin ni comptage."}]}},
  main:{f:"img_art_t9_s18_main.png",w:560,c:"Créer une chorégraphie."}
},
{
  num:19, sous:"Danse", theme:"Apprécier une danse", titre:"Présenter, observer et apprécier une chorégraphie",
  objectif:"Présenter une chorégraphie, l’observer avec des critères simples et formuler une appréciation constructive.",
  doc:"PE T9 — Danse (apprécier différentes danses et chorégraphies ; raconter les épreuves survenues pendant la création).",
  materiel:"Espace dégagé, supports sonores, grille d’observation, cahier.",
  revision:[
    {q:"Quelles sont les étapes d’une création chorégraphique ?", a:"Idée/musique, mouvements/trajectoires, ordre compté, répétition, présentation."},
    {q:"Pourquoi noter un plan de danse ?", a:"Pour organiser la séquence et la mémoriser."},
    {q:"Que faut-il faire si un mouvement est trop difficile ?", a:"Le simplifier ou le remplacer par un mouvement sûr."}],
  mise:{h:"Deux groupes présentent leur danse. Le premier dit seulement « c’était bien ». Le second explique le rythme, les trajectoires et ce qui pourrait être amélioré. Quelle appréciation aide le plus les danseurs ?", a:"La seconde, car elle est précise, constructive et fondée sur des critères.", s:"Deux appréciations"},
  presentation:"Aujourd’hui nous allons apprendre : « Apprécier une chorégraphie ». Après cette séance, vous serez capables d’observer une danse avec des critères, de formuler une appréciation constructive et d’expliquer votre propre création.",
  observation:{c:"Observez une chorégraphie modèle avec la grille : rythme, espace, mouvements, expression, sécurité. Notez ce que vous voyez avant de juger.", s:"Chorégraphie modèle, grille d’observation"},
  analyse:[
    {q:"Que faut-il faire avant de juger une danse ?", a:"Observer précisément et relier ce qu’on voit aux critères."},
    {q:"Cite trois critères d’appréciation.", a:"Rythme/pulsation, espace/trajectoires, mouvements, expression, sécurité (trois suffisent)."},
    {q:"Une appréciation constructive contient-elle seulement des critiques ?", a:"Non, elle indique aussi ce qui est réussi et ce qui peut être amélioré."},
    {q:"Pourquoi raconter les difficultés de création ?", a:"Pour montrer le processus, les choix et les solutions trouvées."},
    {q:"Comment recevoir une remarque ?", a:"En écoutant, en remerciant et en essayant d’améliorer."},
    {q:"Peut-on apprécier différemment une même danse ?", a:"Oui, mais l’appréciation doit s’appuyer sur ce qui est observé."}],
  synthese:"Donc, apprécier une danse consiste à examiner, relier le ressenti à ce qui est vu, puis formuler un jugement constructif. On observe le rythme, l’espace, les mouvements, l’expression et la sécurité. On présente aussi sa propre création en racontant les choix et les difficultés.",
  app:{prod:{c:"Observez la chorégraphie d’un autre groupe avec la grille. Écrivez deux réussites et une amélioration possible, puis présentez oralement votre appréciation en une minute.", att:"Une appréciation précise, constructive et orale.", cr:["Deux réussites.","Une amélioration.","Critères utilisés.","Ton respectueux."]},
       ecrit:{c:"Complète avec les mots proposés : constructive, critères, observer, appréciation.", items:["Regarder attentivement avant de juger, c’est … .","Les éléments qui servent à juger sont des … .","Un jugement qui aide à progresser est … .","L’action de porter un jugement sur une œuvre est une … ."], rep:["observer","critères","constructive","appréciation"]}},
  eval:{prod:{c:"Votre groupe présente sa création et raconte une difficulté rencontrée. Les observateurs posent une question ; vous répondez et rejouez un extrait amélioré.", att:"Une présentation, un récit de création et une amélioration.", cr:["Création présentée.","Difficulté racontée.","Question répondue.","Extrait amélioré."]},
        ecrit:{c:"Indique si chaque affirmation est vraie ou fausse.", items:["Une appréciation doit s’appuyer sur des observations.","Dire seulement « c’est nul » est une appréciation constructive.","On peut citer ce qui est réussi et ce qui peut être amélioré.","Raconter les difficultés de création fait partie de la démarche."], rep:[{r:"Vrai",j:"l’appréciation part de l’observation."},{r:"Faux",j:"une appréciation constructive est précise et respectueuse."},{r:"Vrai",j:"elle équilibre réussites et améliorations."},{r:"Vrai",j:"le récit montre le processus de création."}]}},
  lecon:{kw:["appréciation","critères","observer","constructive","création","ressenti"],
    sections:[
      {t:"La démarche d’appréciation", p:["Apprécier une danse suit trois moments : examiner ce qui est présenté, relier son ressenti à ce qui est vu, puis formuler un jugement critique. On ne se contente pas d’aimer ou de ne pas aimer ; on explique pourquoi."], img:{f:"img_art_t9_s19_main.png",w:560,c:"Grille d’appréciation."}},
      {t:"Des critères simples", p:["On peut observer : la pulsation et le rythme, l’utilisation de l’espace et des trajectoires, la variété des mouvements, l’expression du groupe, la sécurité. Chaque critère doit être illustré par un exemple précis vu pendant la danse."]},
      {t:"Présenter sa propre création", p:["Le groupe présente sa chorégraphie, explique l’idée, la musique, les choix de mouvements et les difficultés rencontrées. Il raconte comment il a résolu les problèmes. Cette présentation développe la confiance en soi et l’esprit d’équipe."]}]}
  ,main:{f:"img_art_t9_s19_main.png",w:560,c:"Apprécier une danse."}
}
];
