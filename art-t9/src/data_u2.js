// Unité II — Musique (7 séances)
module.exports = [
{
  num:7, sous:"Musique", theme:"Genres musicaux et instruments", titre:"Instruments traditionnels et modernes : familles et usages",
  objectif:"Identifier des instruments traditionnels et modernes, les classer par famille et les relier à des genres musicaux.",
  doc:"PE T9 — Musique (genres, instruments) ; FRP Arts T9 — Composante II (instruments traditionnels/modernes).",
  materiel:"Instruments disponibles ou photos, supports sonores, tableau, cahier.",
  revision:[
    {q:"Cite deux familles d’instruments de percussion fabriqués en arts visuels.", a:"Membranophones et idiophones."},
    {q:"À quoi sert une membrane tendue ?", a:"À produire le son lorsqu’on la frappe ou la fait vibrer."},
    {q:"Pourquoi tester un instrument fabriqué ?", a:"Pour vérifier que le son est clair, régulier et audible."}],
  mise:{h:"Pendant une fête, Soa entend un valiha, un sodina et un tambour. Elle reconnaît les sons, mais elle ne sait pas comment classer ces instruments. Son frère dit : « Certains ont des cordes, d’autres sont soufflés, d’autres sont frappés. » Comment peut-elle les classer ?", a:"Par famille : cordes, vent, percussions (et selon le mode de production du son).", s:"Instruments ou photos"},
  presentation:"Aujourd’hui nous allons apprendre : « Instruments traditionnels et modernes ». Après cette séance, vous serez capables de nommer des instruments, de les classer par famille et de les relier à des genres musicaux.",
  observation:{c:"Observez les instruments ou les photos : valiha, sodina, amponga, guitare, clavier, hochet. Écoutez aussi les extraits sonores proposés par l’enseignant.", s:"Instruments/photos, supports sonores"},
  analyse:[
    {q:"Le valiha possède-t-il des cordes ?", a:"Oui, c’est un instrument à cordes (cordophone)."},
    {q:"Comment joue-t-on du sodina ?", a:"En soufflant : c’est un instrument à vent (aérophone)."},
    {q:"Comment produit-on le son d’un amponga ?", a:"En frappant une membrane : c’est un membranophone."},
    {q:"Cite un instrument moderne à cordes.", a:"Guitare, basse, violon (un seul suffit)."},
    {q:"Pourquoi classer les instruments ?", a:"Pour comprendre comment le son est produit et choisir les instruments adaptés à un genre."},
    {q:"Un même genre musical utilise-t-il toujours les mêmes instruments ?", a:"Non, il peut utiliser plusieurs instruments, mais certains sont typiques du genre."}],
  synthese:"Donc, les instruments se classent selon la manière dont le son est produit : cordes, vent, percussions. Les instruments traditionnels malagasy (valiha, sodina, amponga, hochets) et modernes (guitare, clavier, batterie) peuvent accompagner différents genres : traditionnel, urbain, danses de salon.",
  app:{prod:{c:"En groupe, choisissez trois instruments ou photos. Présentez-les oralement : nom, famille, matériau principal, mode de jeu, puis reproduisez leur rythme avec la voix ou des percussions corporelles.", att:"Une présentation claire des trois instruments et une reproduction sonore plausible.", cr:["Noms corrects.","Familles correctes.","Mode de jeu expliqué.","Reproduction sonore régulière."]},
       ecrit:{c:"Complète avec les mots proposés : vent, cordes, percussions, familles.", items:["Le valiha appartient aux instruments à … .","Le sodina appartient aux instruments à … .","L’amponga appartient aux instruments à … .","Les groupes d’instruments classés par mode de production du son sont des … ."], rep:["cordes","vent","percussions","familles"]}},
  eval:{prod:{c:"Écoutez l’extrait joué par l’enseignant. Identifiez la famille dominante, puis proposez un accompagnement simple avec la voix, les mains ou un objet sonore.", att:"Une identification correcte et un accompagnement régulier adapté.", cr:["Famille identifiée.","Accompagnement régulier.","Écoute respectée.","Justification orale simple."]},
        ecrit:{c:"Indique si chaque affirmation est vraie ou fausse.", items:["Le valiha est un instrument à cordes.","Le sodina se joue en frappant une membrane.","Un membranophone produit le son par une membrane tendue.","Les instruments modernes ne peuvent pas accompagner un chant traditionnel."], rep:[{r:"Vrai",j:"le valiha a des cordes."},{r:"Faux",j:"le sodina se joue en soufflant."},{r:"Vrai",j:"la membrane est la source du son."},{r:"Faux",j:"des instruments modernes peuvent accompagner un chant traditionnel si le choix est adapté."}]}},
  lecon:{kw:["instruments traditionnels","instruments modernes","cordes","vent","percussions","genre musical"],
    sections:[
      {t:"Classer les instruments", p:["On classe les instruments selon la manière dont le son est produit. Les instruments à cordes ont des cordes que l’on pince, frotte ou frappe. Les instruments à vent utilisent l’air soufflé. Les instruments à percussion sont frappés, secoués ou entrechoqués ; parmi eux, on distingue les membranophones et les idiophones."], img:{f:"img_art_t9_s07_main.png",w:560,c:"Familles d’instruments."}},
      {t:"Traditionnels et modernes", p:["Les instruments traditionnels malagasy sont liés aux régions et aux usages culturels : valiha, sodina, amponga, jejy, hochets. Les instruments modernes peuvent être électriques ou amplifiés : guitare, basse, clavier, batterie. Les deux peuvent se rencontrer dans une même création."]},
      {t:"Relier instrument et genre", p:["Un genre musical est une manière de faire de la musique : traditionnelle malagasy, urbaine, danse de salon. Le choix des instruments dépend du style, du rythme et du message. On écoute, on compare, puis on justifie son choix."]}]}
  ,main:{f:"img_art_t9_s07_main.png",w:560,c:"Instruments traditionnels et modernes."}
},
{
  num:8, sous:"Musique", theme:"Éléments de base musicale", titre:"Tempo, pulsation et rythme binaire/ternaire",
  objectif:"Distinguer tempo et pulsation, puis reproduire des rythmes binaires et ternaires avec la voix ou les percussions corporelles.",
  doc:"PE T9 — Musique (tempo, rythme binaire/ternaire) ; FRP Arts T9 — Composante II (éléments de base).",
  materiel:"Métronome ou battement régulier, tambourin, mains, tableau, cahier.",
  revision:[
    {q:"Cite trois familles d’instruments.", a:"Cordes, vent, percussions."},
    {q:"Le sodina est-il un instrument à vent ?", a:"Oui."},
    {q:"Pourquoi écouter un extrait avant de l’accompagner ?", a:"Pour identifier le style, le rythme et les instruments adaptés."}],
  mise:{h:"Koto tape dans ses mains pour accompagner un chant. Il tape parfois vite, parfois lentement, et les autres ne savent plus quand chanter. Aina dit : « Il faut garder un battement régulier. » Quelle est la différence entre aller vite et garder le battement ?", a:"La vitesse est le tempo ; le battement régulier est la pulsation.", s:"Battements de mains"},
  presentation:"Aujourd’hui nous allons apprendre : « Tempo, pulsation, rythme binaire/ternaire ». Après cette séance, vous serez capables de garder une pulsation stable et de reproduire des rythmes à deux ou trois subdivisions.",
  observation:{c:"Écoutez l’enseignant battre une pulsation régulière, puis deux motifs : un motif binaire (1-2, 1-2) et un motif ternaire (1-2-3, 1-2-3).", s:"Pulsation et motifs rythmiques"},
  analyse:[
    {q:"Qu’appelle-t-on pulsation ?", a:"Un battement régulier, comme le tic-tac d’une horloge."},
    {q:"Qu’appelle-t-on tempo ?", a:"La vitesse d’exécution de la musique : lent, modéré, rapide."},
    {q:"Peut-on garder la même pulsation et changer le tempo ?", a:"Oui, la pulsation reste régulière mais les battements peuvent être plus ou moins rapprochés selon le tempo."},
    {q:"Dans un rythme binaire, le temps se divise souvent en combien de parties égales ?", a:"Deux parties égales."},
    {q:"Dans un rythme ternaire, le temps se divise souvent en combien de parties égales ?", a:"Trois parties égales."},
    {q:"Pourquoi la pulsation est-elle importante en groupe ?", a:"Elle permet à tous de jouer et chanter ensemble."}],
  synthese:"Donc, la pulsation est le battement régulier qui sert de repère ; le tempo indique la vitesse. Le rythme organise les sons et les silences. Un rythme binaire divise le temps en deux, un rythme ternaire le divise en trois. Pour jouer ensemble, il faut écouter et garder la pulsation.",
  app:{prod:{c:"En binôme, battez une pulsation régulière pendant huit temps. L’un joue un motif binaire (fort-doux, fort-doux), l’autre un motif ternaire (fort-doux-doux). Présentez ensuite les deux motifs à la classe.", att:"Une pulsation stable et deux motifs clairement distinguables.", cr:["Pulsation régulière.","Motif binaire correct.","Motif ternaire correct.","Présentation claire."]},
       ecrit:{c:"Complète avec les mots proposés : ternaire, pulsation, tempo, binaire.", items:["Le battement régulier qui sert de repère est la … .","La vitesse de la musique est le … .","Un rythme qui divise le temps en deux est … .","Un rythme qui divise le temps en trois est … ."], rep:["pulsation","tempo","binaire","ternaire"]}},
  eval:{prod:{c:"Écoutez le motif joué par l’enseignant. Reproduisez-le avec les mains, puis indiquez oralement s’il est binaire ou ternaire et si le tempo est lent ou rapide.", att:"Une reproduction fidèle et une identification correcte.", cr:["Reproduction régulière.","Type de rythme identifié.","Tempo identifié.","Écoute avant de jouer."]},
        ecrit:{c:"Indique si chaque affirmation est vraie ou fausse.", items:["La pulsation doit être régulière.","Le tempo indique la couleur d’un instrument.","Un rythme binaire peut se compter 1-2, 1-2.","Un rythme ternaire se compte toujours 1-2, 1-2."], rep:[{r:"Vrai",j:"la pulsation est un battement régulier."},{r:"Faux",j:"le tempo indique la vitesse, pas la couleur du son."},{r:"Vrai",j:"le binaire se divise en deux."},{r:"Faux",j:"le ternaire se compte 1-2-3."}]}},
  lecon:{kw:["pulsation","tempo","rythme","binaire","ternaire","silence"],
    sections:[
      {t:"Pulsation et tempo", p:["La pulsation est un battement régulier que l’on peut sentir, battre des mains ou marcher. Le tempo est la vitesse de la musique : lent, modéré, rapide. On peut garder une pulsation régulière tout en jouant plus ou moins vite selon le tempo indiqué."], img:{f:"img_art_t9_s08_main.png",w:560,c:"Pulsation, tempo et subdivisions."}},
      {t:"Rythme binaire et ternaire", p:["Le rythme organise les sons et les silences dans le temps. Dans un rythme binaire, le temps se divise en deux parties égales : 1-2. Dans un rythme ternaire, il se divise en trois : 1-2-3. On peut les reconnaître en écoutant et en comptant."]},
      {t:"Jouer ensemble", p:["Pour jouer en groupe, chacun écoute la pulsation commune. On commence lentement, puis on accélère seulement si le groupe reste régulier. Les silences font partie du rythme : ils doivent être respectés comme des sons."]}],
    pasapas:{intro:"Le pas-à-pas montre comment installer une pulsation. Le contre-exemple montre une pulsation irrégulière.", steps:[
      {t:"Écouter et sentir la pulsation", ok:"pasapas_s08_et1_ok.png", okc:"Battements réguliers, espace égal."},
      {t:"Compter les subdivisions", ok:"pasapas_s08_et2_ok.png", okc:"Binaire : 1-2 ; ternaire : 1-2-3."},
      {t:"Jouer le motif", ok:"pasapas_s08_et3_ok.png", okc:"Motif régulier sur la pulsation.", bad:"pasapas_s08_et3_pasok.png", badc:"Erreur fréquente : accélérer ou ralentir sans garder la pulsation."}]}},
  main:{f:"img_art_t9_s08_main.png",w:560,c:"Tempo, pulsation, rythme."}
},
{
  num:9, sous:"Musique", theme:"Éléments de base musicale", titre:"Durée des sons, silence et mesure 12/8",
  objectif:"Distinguer sons longs, courts et silences, puis lire et reproduire une mesure simple en 12/8.",
  doc:"PE T9 — Musique (durée du son, rythme 12/8) ; FRP Arts T9 — Composante II (mesure 12/8, croche).",
  materiel:"Tableau, craie, mains, tambourin, supports sonores, cahier.",
  revision:[
    {q:"Quelle est la différence entre pulsation et tempo ?", a:"La pulsation est le battement régulier ; le tempo est la vitesse."},
    {q:"Comment compte-t-on un rythme ternaire ?", a:"1-2-3, 1-2-3."},
    {q:"Les silences font-ils partie du rythme ?", a:"Oui."}],
  mise:{h:"Nivo chante une phrase musicale, mais elle coupe les silences et allonge toutes les notes de la même façon. Le chant devient difficile à reconnaître. Comment peut-elle retrouver la forme de la phrase ?", a:"En respectant la durée des sons (longs/courts) et les silences.", s:"Phrase rythmique"},
  presentation:"Aujourd’hui nous allons apprendre : « Durée des sons, silence et mesure 12/8 ». Après cette séance, vous serez capables de reproduire des sons longs, courts et des silences, et de compter une mesure 12/8.",
  observation:{c:"Observez au tableau la grille : noire, blanche, ronde, croche, silence. Écoutez l’enseignant compter 12 croches regroupées en quatre groupes de trois.", s:"Grille de durées, comptage 12/8"},
  analyse:[
    {q:"Une noire vaut-elle plus ou moins qu’une blanche dans une mesure simple ?", a:"Moins : la blanche vaut deux temps, la noire un temps."},
    {q:"Que vaut une ronde ?", a:"Quatre temps."},
    {q:"Que vaut une croche par rapport à une noire ?", a:"La moitié d’une noire."},
    {q:"Dans 12/8, combien de croches y a-t-il dans une mesure ?", a:"Douze croches."},
    {q:"Comment regroupe-t-on souvent ces douze croches ?", a:"En quatre groupes de trois croches."},
    {q:"Pourquoi le silence est-il important ?", a:"Il organise la respiration, le rythme et la forme de la phrase."}],
  synthese:"Donc, la durée des sons se mesure avec des valeurs : ronde, blanche, noire, croche. Le silence a aussi une durée. La mesure 12/8 contient douze croches, souvent regroupées en quatre groupes de trois. Pour bien jouer, il faut compter, écouter et respecter les silences.",
  app:{prod:{c:"En groupe, reproduisez la séquence suivante avec les mains : noire, noire, deux croches, noire, silence, noire. Comptez d’abord à voix haute, puis jouez sans compter.", att:"Une séquence rythmique fidèle, avec silence respecté.", cr:["Durées respectées.","Silence respecté.","Comptage correct.","Jeu régulier."]},
       ecrit:{c:"Complète avec les mots proposés : croches, silence, douze, quatre.", items:["La mesure 12/8 contient … croches.","On regroupe souvent ces croches en … groupes de trois.","Une … vaut la moitié d’une noire.","Un moment sans son s’appelle un … ."], rep:["douze","quatre","croche","silence"]}},
  eval:{prod:{c:"Écoutez la mesure 12/8 jouée par l’enseignant. Battez les quatre groupes de trois, puis chantez une courte phrase en respectant un silence à la fin.", att:"Une pulsation 12/8 stable et un silence final respecté.", cr:["Quatre groupes de trois.","Pulsation stable.","Phrase chantée.","Silence final respecté."]},
        ecrit:{c:"Indique si chaque affirmation est vraie ou fausse.", items:["Une blanche vaut deux temps.","Une croche vaut deux noires.","La mesure 12/8 contient douze croches.","Le silence ne compte pas dans la musique."], rep:[{r:"Vrai",j:"la blanche vaut deux temps."},{r:"Faux",j:"une croche vaut la moitié d’une noire."},{r:"Vrai",j:"12/8 contient douze croches."},{r:"Faux",j:"le silence a une durée et compte dans le rythme."}]}},
  lecon:{kw:["durée","noire","blanche","ronde","croche","silence","12/8"],
    sections:[
      {t:"Les valeurs de durée", p:["La musique utilise des sons longs et courts. Dans une mesure simple, la ronde vaut quatre temps, la blanche deux temps, la noire un temps, la croche un demi-temps. Ces valeurs permettent de comparer les durées et de construire un rythme."], img:{f:"img_art_t9_s09_main.png",w:560,c:"Valeurs de durée et mesure 12/8."}},
      {t:"Le silence", p:["Le silence est un moment sans son, mais il a une durée. Il permet de respirer, de séparer les phrases et de créer un effet. Un silence oublié change le rythme et peut rendre la phrase confuse."]},
      {t:"La mesure 12/8", p:["La mesure 12/8 indique douze croches par mesure. On les regroupe souvent en quatre groupes de trois croches, ce qui donne une sensation ternaire. Pour la lire, on compte les groupes et on respecte la valeur de chaque son et silence."]}],
    pasapas:{intro:"Le pas-à-pas montre comment lire une mesure 12/8. Le contre-exemple montre un comptage confus.", steps:[
      {t:"Repérer les valeurs", ok:"pasapas_s09_et1_ok.png", okc:"Noires, croches et silences identifiés."},
      {t:"Compter les groupes", ok:"pasapas_s09_et2_ok.png", okc:"Quatre groupes de trois croches."},
      {t:"Jouer la mesure", ok:"pasapas_s09_et3_ok.png", okc:"Sons et silences respectés.", bad:"pasapas_s09_et3_pasok.png", badc:"Erreur fréquente : compter 12/8 comme un binaire simple et oublier les silences."}]}},
  main:{f:"img_art_t9_s09_main.png",w:560,c:"Durées et 12/8."}
},
{
  num:10, sous:"Musique", theme:"Éléments de base musicale", titre:"Intensité et nuance : fort, doux, montant, descendant",
  objectif:"Utiliser l’intensité et les nuances pour interpréter une phrase musicale simple.",
  doc:"PE T9 — Musique (intensité, nuance) ; FRP Arts T9 — Composante II (nuances).",
  materiel:"Voix, mains, tambourin, tableau, supports sonores, cahier.",
  revision:[
    {q:"Combien de croches dans une mesure 12/8 ?", a:"Douze."},
    {q:"Que vaut une croche ?", a:"La moitié d’une noire."},
    {q:"Pourquoi respecter les silences ?", a:"Pour garder la forme et le rythme de la phrase."}],
  mise:{h:"Hery chante toujours très fort, même quand la phrase demande de la douceur. La classe n’entend plus les différences entre les moments. Que doit-il changer pour rendre le chant plus expressif ?", a:"Il doit varier l’intensité : fort, doux, et suivre les nuances montantes ou descendantes.", s:"Phrase chantée"},
  presentation:"Aujourd’hui nous allons apprendre : « Intensité et nuance ». Après cette séance, vous serez capables de chanter ou jouer en variant le volume sonore et en suivant une nuance montante ou descendante.",
  observation:{c:"Écoutez deux versions de la même phrase : une version uniforme, une version avec des nuances fort/doux et une courbe montante puis descendante.", s:"Deux versions sonores"},
  analyse:[
    {q:"Que signifie jouer fort ?", a:"Produire un son de forte intensité."},
    {q:"Que signifie jouer doux ?", a:"Produire un son de faible intensité."},
    {q:"La nuance est-elle la même chose que le tempo ?", a:"Non, la nuance concerne l’intensité ; le tempo concerne la vitesse."},
    {q:"Que fait une nuance montante ?", a:"L’intensité augmente progressivement."},
    {q:"Que fait une nuance descendante ?", a:"L’intensité diminue progressivement."},
    {q:"Pourquoi utiliser des nuances ?", a:"Pour rendre l’interprétation plus expressive et faire entendre la forme de la phrase."}],
  synthese:"Donc, l’intensité indique si le son est fort ou doux. La nuance organise les changements d’intensité : montant, descendant, ou alternance fort/doux. Elle ne remplace ni le tempo ni le rythme ; elle s’ajoute à eux pour rendre la musique expressive.",
  app:{prod:{c:"En binôme, chantez ou jouez la phrase « Le vent monte puis descend » en quatre temps : doux, moyen, fort, doux. Ajoutez un silence d’un temps à la fin.", att:"Une phrase avec courbe d’intensité claire et silence final.", cr:["Courbe doux-moyen-fort-doux.","Silence respecté.","Pulsation stable.","Expression audible."]},
       ecrit:{c:"Complète avec les mots proposés : descendante, intensité, montante, nuance.", items:["Le volume sonore d’un son s’appelle l’… .","Une augmentation progressive du volume est une nuance … .","Une diminution progressive du volume est une nuance … .","Le signe ou l’indication qui organise le volume est une … ."], rep:["intensité","montante","descendante","nuance"]}},
  eval:{prod:{c:"Écoutez la phrase de l’enseignant. Reproduisez-la en indiquant par un geste si la nuance est montante ou descendante, puis chantez-la avec la bonne intensité.", att:"Une identification correcte et une reproduction expressive.", cr:["Geste correct.","Nuance respectée.","Phrase chantée.","Écoute respectée."]},
        ecrit:{c:"Indique si chaque affirmation est vraie ou fausse.", items:["Jouer doux signifie jouer avec une faible intensité.","Une nuance montante diminue le volume.","La nuance et le tempo sont la même chose.","Les nuances rendent l’interprétation plus expressive."], rep:[{r:"Vrai",j:"doux = faible intensité."},{r:"Faux",j:"une nuance montante augmente le volume."},{r:"Faux",j:"la nuance concerne l’intensité, le tempo la vitesse."},{r:"Vrai",j:"les nuances donnent de l’expression."}]}},
  lecon:{kw:["intensité","nuance","fort","doux","montant","descendant"],
    sections:[
      {t:"Intensité du son", p:["L’intensité correspond au volume sonore : un son peut être fort ou doux. Elle ne dépend pas de la hauteur du son (grave/aigu) ni de sa durée. On peut chanter la même note fort ou doux."], img:{f:"img_art_t9_s10_main.png",w:560,c:"Courbes d’intensité."}},
      {t:"Nuances montantes et descendantes", p:["Une nuance montante augmente progressivement l’intensité ; une nuance descendante la diminue. On peut aussi alterner fort et doux. En notation, on rencontre des indications comme piano (doux), forte (fort), et des signes de croissance ou de décroissance."]},
      {t:"Interpréter avec expression", p:["Pour interpréter une phrase, on garde la pulsation et le rythme, puis on ajoute les nuances. Il faut écouter les autres : si tout le monde joue fort en même temps, la nuance disparaît. La douceur demande aussi de la précision et du contrôle."]}],
    pasapas:{intro:"Le pas-à-pas montre comment construire une nuance. Le contre-exemple montre une intensité uniforme.", steps:[
      {t:"Garder la pulsation", ok:"pasapas_s10_et1_ok.png", okc:"Battement régulier avant de nuancer."},
      {t:"Placer fort et doux", ok:"pasapas_s10_et2_ok.png", okc:"Différence audible entre fort et doux."},
      {t:"Suivre la courbe", ok:"pasapas_s10_et3_ok.png", okc:"Montée puis descente progressive.", bad:"pasapas_s10_et3_pasok.png", badc:"Erreur fréquente : tout jouer au même volume, sans expression."}]}},
  main:{f:"img_art_t9_s10_main.png",w:560,c:"Intensité et nuances."}
},
{
  num:11, sous:"Musique", theme:"Chanter et accompagner", titre:"Chanter avec des instruments à percussions",
  objectif:"Chanter un extrait traditionnel malagasy en l’accompagnant avec des instruments à percussions, en respectant les éléments de base musicale.",
  doc:"PE T9 — Musique (chanter avec percussions, genre traditionnel malagasy).",
  materiel:"Instruments à percussions disponibles ou fabriqués, supports sonores, cahier.",
  revision:[
    {q:"Que signifie une nuance descendante ?", a:"L’intensité diminue progressivement."},
    {q:"Cite deux instruments à percussion.", a:"Amponga, hochet, tambourin, capsules (deux suffisent)."},
    {q:"Pourquoi garder la pulsation en groupe ?", a:"Pour chanter et jouer ensemble."}],
  mise:{h:"La classe prépare un chant traditionnel pour la fête de l’école. Les chanteurs commencent bien, mais les tambours accélèrent et couvrent la voix. Comment réorganiser l’accompagnement ?", a:"En gardant une pulsation commune, en jouant moins fort que la voix et en respectant le rythme du chant.", s:"Chant et percussions"},
  presentation:"Aujourd’hui nous allons apprendre : « Chanter avec des percussions ». Après cette séance, vous serez capables de chanter un extrait en respectant tempo, rythme, durée, intensité et nuance, avec un accompagnement percussif adapté.",
  observation:{c:"Écoutez l’extrait traditionnel proposé par l’enseignant. Observez les instruments à percussions disponibles et la manière dont ils accompagnent la voix.", s:"Extrait sonore, instruments à percussions"},
  analyse:[
    {q:"Quel est le genre de l’extrait ?", a:"Un chant traditionnel malagasy (selon l’extrait choisi)."},
    {q:"Quels instruments à percussion peut-on utiliser ?", a:"Amponga, tambourin, hochet, capsules, bâtons (selon disponibilité)."},
    {q:"L’accompagnement doit-il être plus fort que la voix ?", a:"Non, il doit soutenir la voix sans la couvrir."},
    {q:"Que faut-il respecter en chantant ?", a:"Le tempo, le rythme, la durée des sons, les silences, l’intensité et les nuances."},
    {q:"Pourquoi répéter lentement d’abord ?", a:"Pour mémoriser la mélodie et stabiliser l’accompagnement."},
    {q:"Comment améliorer après une première présentation ?", a:"En écoutant les remarques, en ajustant le volume, la pulsation et l’entrée des instruments."}],
  synthese:"Donc, chanter avec des percussions demande une écoute commune : la voix porte le chant, les percussions soutiennent le rythme sans couvrir. On répète lentement, on stabilise la pulsation, puis on ajoute les nuances. Le choix des instruments doit respecter le genre traditionnel malagasy.",
  app:{prod:{c:"En groupe, chantez deux phrases de l’extrait traditionnel. Un sous-groupe accompagne avec un ostinato simple (fort-doux-doux) pendant que les autres chantent. Présentez ensuite l’ensemble.", att:"Un chant accompagné, régulier, où la voix reste audible.", cr:["Pulsation stable.","Ostinato régulier.","Voix audible.","Nuances respectées."]},
       ecrit:{c:"Complète avec les mots proposés : ostinato, percussions, voix, pulsation.", items:["Les instruments frappés ou secoués sont des … .","Le battement régulier commun est la … .","La partie chantée est portée par la … .","Un motif rythmique répété s’appelle un … ."], rep:["percussions","pulsation","voix","ostinato"]}},
  eval:{prod:{c:"Votre groupe présente une version courte du chant avec percussions. Après la présentation, un autre groupe donne une remarque ; vous rejouez trente secondes en tenant compte de cette remarque.", att:"Une présentation suivie d’une amélioration audible.", cr:["Présentation complète.","Remarque écoutée.","Amélioration visible/audible.","Esprit d’équipe."]},
        ecrit:{c:"Indique si chaque affirmation est vraie ou fausse.", items:["Les percussions doivent toujours couvrir la voix.","Un ostinato est un motif répété.","La pulsation aide le groupe à rester ensemble.","On peut accompagner un chant traditionnel avec des instruments fabriqués."], rep:[{r:"Faux",j:"les percussions soutiennent la voix sans la couvrir."},{r:"Vrai",j:"un ostinato est un motif répété."},{r:"Vrai",j:"la pulsation est le repère commun."},{r:"Vrai",j:"des instruments fabriqués peuvent convenir s’ils sont adaptés."}]}},
  lecon:{kw:["chant traditionnel","percussions","ostinato","pulsation","accompagnement","nuance"],
    sections:[
      {t:"Écouter et mémoriser", p:["On commence par écouter l’extrait, identifier le genre et battre la pulsation. On chante lentement pour mémoriser les paroles, la mélodie et les respirations. La démarche d’interprétation suit : familiariser, mémoriser, répéter, ajuster."], img:{f:"img_art_t9_s11_main.png",w:560,c:"Voix et percussions."}},
      {t:"Construire l’accompagnement", p:["Les percussions peuvent jouer un ostinato, c’est-à-dire un motif rythmique répété. L’accompagnement doit être plus doux que la voix. On peut utiliser des instruments fabriqués en arts visuels : membranophones et idiophones."]},
      {t:"Présenter et améliorer", p:["Le groupe présente sa version, puis écoute les remarques : volume, entrée des instruments, régularité, respect du style. On rejoue une partie en corrigeant. L’objectif n’est pas la perfection immédiate, mais l’écoute et l’amélioration collective."]}]}
  ,main:{f:"img_art_t9_s11_main.png",w:560,c:"Chanter avec percussions."}
},
{
  num:12, sous:"Musique", theme:"Chanter et accompagner", titre:"Chanter avec des instruments à cordes",
  objectif:"Chanter un extrait traditionnel malagasy en l’accompagnant avec des instruments à cordes simples ou disponibles.",
  doc:"PE T9 — Musique (chanter avec instruments à cordes, genre traditionnel malagasy).",
  materiel:"Instruments à cordes disponibles ou fabriqués (monocorde, guitare, valiha si possible), supports sonores.",
  revision:[
    {q:"Qu’est-ce qu’un ostinato ?", a:"Un motif rythmique ou musical répété."},
    {q:"Pourquoi les percussions ne doivent-elles pas couvrir la voix ?", a:"Pour que le chant reste audible et compris."},
    {q:"Cite un instrument traditionnel à cordes.", a:"Valiha (ou jejy selon les régions)."}],
  mise:{h:"Aina veut accompagner un chant avec un instrument à cordes fabriqué en classe. Elle tire toutes les cordes en même temps et le son devient confus. Comment peut-elle accompagner plus clairement ?", a:"En jouant quelques notes ou un motif simple, en respectant la pulsation et en laissant la voix devant.", s:"Instrument à cordes"},
  presentation:"Aujourd’hui nous allons apprendre : « Chanter avec des instruments à cordes ». Après cette séance, vous serez capables d’accompagner un chant avec un instrument à cordes simple, en respectant les éléments de base musicale.",
  observation:{c:"Observez l’instrument à cordes disponible : cordes, caisse de résonance, manière de pincer ou frotter. Écoutez un extrait accompagné.", s:"Instrument à cordes, extrait sonore"},
  analyse:[
    {q:"Comment produit-on le son d’un instrument à cordes ?", a:"En pinçant, frottant ou frappant les cordes."},
    {q:"Cite un instrument à cordes moderne.", a:"Guitare, basse, violon (un seul suffit)."},
    {q:"Pourquoi jouer un motif simple au début ?", a:"Pour garder la pulsation et ne pas gêner le chant."},
    {q:"L’instrument à cordes peut-il jouer la mélodie ?", a:"Oui, mais pour accompagner, il peut aussi jouer un motif ou des notes de base."},
    {q:"Que faut-il écouter dans le groupe ?", a:"La voix, la pulsation, les autres instruments et les nuances."},
    {q:"Comment améliorer l’accompagnement ?", a:"En simplifiant le motif, en ajustant le volume et en répétant lentement."}],
  synthese:"Donc, un instrument à cordes produit le son par la vibration des cordes. Pour accompagner un chant, on choisit un motif simple, on garde la pulsation, on joue moins fort que la voix et on respecte le style du chant. L’écoute du groupe permet d’ajuster l’accompagnement.",
  app:{prod:{c:"En groupe, chantez deux phrases du chant. Un élève accompagne avec un motif simple sur l’instrument à cordes (une ou deux notes répétées). Les autres écoutent et indiquent si la voix reste audible.", att:"Un accompagnement simple et régulier qui soutient le chant.", cr:["Motif simple.","Pulsation stable.","Voix audible.","Écoute du groupe."]},
       ecrit:{c:"Complète avec les mots proposés : cordes, vibration, accompagner, mélodie.", items:["Le son d’un instrument à cordes vient de la … des cordes.","La ligne principale chantée est la … .","Soutenir le chant sans le remplacer, c’est l’… .","Le valiha et la guitare sont des instruments à … ."], rep:["vibration","mélodie","accompagner","cordes"]}},
  eval:{prod:{c:"Présentez une version courte du chant avec accompagnement à cordes. Changez ensuite une seule chose : le volume, le motif ou l’entrée de l’instrument. Expliquez pourquoi ce changement améliore l’ensemble.", att:"Une présentation et une justification simple d’un ajustement.", cr:["Présentation complète.","Ajustement identifiable.","Justification orale.","Respect du chant."]},
        ecrit:{c:"Indique si chaque affirmation est vraie ou fausse.", items:["Une corde produit un son lorsqu’elle vibre.","Pour accompagner, il faut toujours jouer très fort.","Un motif simple peut aider à garder la pulsation.","Le valiha est un instrument à vent."], rep:[{r:"Vrai",j:"la vibration de la corde produit le son."},{r:"Faux",j:"l’accompagnement doit soutenir la voix, pas la couvrir."},{r:"Vrai",j:"un motif simple stabilise le groupe."},{r:"Faux",j:"le valiha est un instrument à cordes."}]}},
  lecon:{kw:["instruments à cordes","vibration","mélodie","accompagnement","motif","valiha"],
    sections:[
      {t:"Comprendre l’instrument à cordes", p:["Le son vient de la vibration d’une corde. La corde peut être pincée, frottée ou frappée. La caisse de résonance amplifie le son. On peut utiliser un instrument disponible (guitare, valiha) ou un instrument simple fabriqué avec une corde tendue."], img:{f:"img_art_t9_s12_main.png",w:560,c:"Accompagnement à cordes."}},
      {t:"Accompagner sans couvrir", p:["L’accompagnement soutient la mélodie chantée. On peut jouer une note de base, un petit motif ou un rythme doux. Il faut éviter de jouer trop de notes en même temps. La voix doit rester au premier plan."]},
      {t:"Répéter et ajuster", p:["On répète lentement, on écoute la pulsation, puis on ajuste le volume et l’entrée de l’instrument. Si l’ensemble devient confus, on simplifie. La qualité de l’accompagnement se juge à l’écoute : le chant est-il clair, régulier et expressif ?"]}]}
  ,main:{f:"img_art_t9_s12_main.png",w:560,c:"Chanter avec cordes."}
},
{
  num:13, sous:"Musique", theme:"Identité régionale et création", titre:"Choisir un chant régional et les instruments adéquats",
  objectif:"Choisir un chant qui marque l’identité de sa région, identifier les instruments adéquats et l’interpréter en groupe.",
  doc:"PE T9 — Musique (chant régional, instruments adéquats, éléments de base musicale).",
  materiel:"Chants régionaux connus des élèves, instruments disponibles, supports sonores, cahier.",
  revision:[
    {q:"Cite un instrument à cordes traditionnel.", a:"Valiha (ou jejy)."},
    {q:"Que doit faire l’accompagnement par rapport à la voix ?", a:"La soutenir sans la couvrir."},
    {q:"Pourquoi simplifier un motif ?", a:"Pour garder la pulsation et la clarté de l’ensemble."}],
  mise:{h:"La classe doit présenter une chanson qui montre l’identité de sa région. Certains veulent choisir une chanson entendue à la radio, d’autres un chant appris dans leur village. Comment choisir un chant qui représente vraiment la région ?", a:"En choisissant un chant connu localement, lié à la langue, aux usages ou à l’histoire de la région, puis en choisissant les instruments adaptés.", s:"Chants régionaux"},
  presentation:"Aujourd’hui nous allons apprendre : « Choisir un chant régional et les instruments adéquats ». Après cette séance, vous serez capables de sélectionner un chant régional, de justifier le choix des instruments et de l’interpréter en respectant les éléments de base musicale.",
  observation:{c:"Écoutez deux chants proposés : un chant régional et un chant urbain. Observez les instruments disponibles dans la classe ou la région.", s:"Deux chants, instruments disponibles"},
  analyse:[
    {q:"Qu’est-ce qu’un chant régional ?", a:"Un chant lié à une région, à sa langue, ses usages, son histoire ou ses fêtes."},
    {q:"Pourquoi choisir un chant régional ?", a:"Pour valoriser l’identité culturelle et la mémoire de la communauté."},
    {q:"Quels instruments peut-on choisir ?", a:"Des instruments disponibles dans la région ou fabriqués, adaptés au style du chant."},
    {q:"Le choix des instruments dépend-il seulement du goût personnel ?", a:"Non, il dépend aussi du genre, du rythme, du message et des moyens disponibles."},
    {q:"Que faut-il respecter en interprétant ?", a:"Tempo, rythme, durée, intensité, nuance, prononciation et esprit du chant."},
    {q:"Comment présenter le choix à la classe ?", a:"En expliquant le lien avec la région, les instruments choisis et la manière de les jouer."}],
  synthese:"Donc, un chant régional peut exprimer l’identité d’un lieu. On le choisit pour son lien avec la communauté, puis on sélectionne des instruments adéquats et disponibles. L’interprétation respecte les éléments de base musicale et se présente avec une justification simple.",
  app:{prod:{c:"En groupe, choisissez un chant régional connu d’au moins un membre. Listez les instruments possibles, choisissez-en deux ou trois, puis interprétez trente secondes du chant.", att:"Un choix justifié et une interprétation courte cohérente.", cr:["Chant régional identifiable.","Instruments justifiés.","Interprétation régulière.","Présentation orale claire."]},
       ecrit:{c:"Complète avec les mots proposés : région, identité, adéquats, interpréter.", items:["Un chant lié à un lieu et à ses usages est un chant de la … .","Ce qui caractérise la culture d’un groupe s’appelle son … .","Des instruments adaptés au chant sont des instruments … .","Chanter ou jouer une œuvre, c’est l’… ."], rep:["région","identité","adéquats","interpréter"]}},
  eval:{prod:{c:"Votre groupe présente le chant régional choisi. Un autre groupe doit pouvoir dire : quel lien avec la région ? quels instruments ? quel tempo ? quelle nuance ? Vous répondez puis rejouez le refrain.", att:"Une présentation complète et des réponses justifiées.", cr:["Lien régional expliqué.","Instruments présentés.","Éléments musicaux identifiés.","Refrain rejoué."]},
        ecrit:{c:"Indique si chaque affirmation est vraie ou fausse.", items:["Un chant régional peut valoriser l’identité d’une communauté.","Le choix des instruments ne dépend jamais du genre musical.","On peut utiliser des instruments fabriqués s’ils sont adaptés.","Interpréter un chant demande de respecter le tempo et les nuances."], rep:[{r:"Vrai",j:"le chant régional porte une identité culturelle."},{r:"Faux",j:"le choix dépend du genre, du rythme et du message."},{r:"Vrai",j:"des instruments fabriqués peuvent convenir."},{r:"Vrai",j:"l’interprétation respecte les éléments de base musicale."}]}},
  lecon:{kw:["chant régional","identité culturelle","instruments adéquats","interprétation","tempo","nuance"],
    sections:[
      {t:"Un chant qui vient d’un lieu", p:["Un chant régional est lié à une région : langue, fêtes, travail, histoire, paysage. Il peut être appris en famille ou dans la communauté. Le choisir, c’est reconnaître la valeur de la culture locale et la partager avec la classe."], img:{f:"img_art_t9_s13_main.png",w:560,c:"Chant régional et instruments."}},
      {t:"Choisir les instruments", p:["Les instruments adéquats sont ceux qui conviennent au style, au rythme et au message du chant. On utilise ce qui est disponible : instruments traditionnels, modernes ou fabriqués. Il faut expliquer pourquoi on les choisit et comment on les joue."]},
      {t:"Interpréter et présenter", p:["L’interprétation respecte le tempo, le rythme, la durée des sons, les silences, l’intensité et les nuances. Le groupe présente le chant, explique son lien avec la région et écoute les questions. Cette présentation développe l’esprit d’équipe et le respect des cultures."]}]}
  ,main:{f:"img_art_t9_s13_main.png",w:560,c:"Identité régionale en musique."}
}
];
