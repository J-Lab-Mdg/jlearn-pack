// Données pédagogiques des 36 parties T8.
// Les séquences communes s’appuient sur les modules Arts T9 ; les sujets propres au T8
// sont réécrits ici et reliés au curriculum T8.
const { parts } = require('./curriculum');
const pilot = require('./data_s01');
const files = ['dessin','peinture','sculpture','musique','danse','dramatique'];
const t9 = {};
for (const f of files) for (const d of require('../../art-t9/src/manual_v2/data_' + f)) t9[d.id] = d;

const from = {
  s02:'s01', s03:'s02', s04:'s01', s05:'s02', s06a:'s06a', s06b:'s12',
  s07:'s12', s08:'s13', s09:'s12', s10:'s14', s11:'s17a',
  s12:'s06b', s13:'s06b', s14:'s07', s15:'s09', s16:'s10', s17a:'s11',
  s17b:'s17b', s18:'s18', s19:'s17b', s20:'s19', s21:'s20', s22:'s22',
  s23:'s23', s24:'s26', s25:'s25', s26:'s26', s27:'s27', s28a:'s28a',
  s28b:'s28b', s29:'s29', s30:'s30', s31:'s32', s32:'s32', s33:'s33',
};
const custom = {
  s02: {
    understand:['Une nuance est un degré de clair ou de foncé.','Trois valeurs bien séparées donnent du volume ; les traits se superposent sans trous.'],
    situation:'Le dessin d’un ballon est terminé, mais il paraît plat. Quels gris peuvent le rendre rond ?',
    situationAnswer:'Un gris clair près de la lumière, un gris moyen pour la transition et un gris foncé du côté opposé.',
    observe:{title:'Trois valeurs de gris',phrase:'Compare les trois gris : lequel paraît le plus proche de la lumière ?',bullets:['Clair : pression légère ou peu de passages.','Moyen : valeur intermédiaire régulière.','Foncé : pression renforcée, sans trou blanc.','Le passage clair-moyen-foncé suit le volume.'],support:'Nuancier à trois valeurs et dessin en volume'},
    prep:{title:'Nuancier et dégradé',phrase:'Remplis trois cases, puis relie-les par un dégradé.',text:'Garde la même forme et fais varier seulement la pression ou le nombre de passages. Compare le nuancier à une zone éclairée et à une zone sombre.'},
    questions:[['Comment obtenir un gris clair ?','Appuyer légèrement et laisser respirer le papier.'],['Comment obtenir un gris foncé ?','Renforcer progressivement la pression ou croiser les traits.'],['Pourquoi garder un gris moyen ?','Il relie les deux extrêmes et arrondit la forme.'],['Le blanc du papier est-il un gris clair ?','Non : il sert de lumière maximale.']],
    steps:[{title:'Préparer trois valeurs',text:'Tracer trois cases. Produire clair, moyen et foncé en changeant la pression, sans couleur.',phrase:'Je change la pression, pas la forme.'},{title:'Construire un dégradé',text:'Faire passer le clair au moyen, puis au foncé par petites zones qui se rejoignent.',phrase:'Un passage progressif évite les bandes.'},{title:'Suivre le volume',text:'Poser la valeur claire du côté éclairé et le foncé à l’opposé ; garder le contour lisible.',phrase:'Les valeurs suivent la forme.'},{title:'Comparer et corriger',text:'Reculer d’un pas, comparer les trois valeurs et renforcer seulement la zone trop pâle.',phrase:'Je corrige une zone à la fois.'}],
    practice:{title:'Modeler une forme simple',consigne:'Dessine une orange ou un gobelet. Pose trois gris, du côté clair vers le côté foncé, puis ajoute l’ombre portée.',criteria:['Trois valeurs distinctes.','Dégradé sans rupture forte.','Valeurs placées selon la lumière.','Ombre portée lisible.'],trace:'Je prépare trois gris. Je construis un dégradé. Je suis la forme du côté clair vers le côté foncé. Je compare et je corrige.'},
    eval:'Montre le côté clair, le gris moyen, le foncé et l’ombre portée. Explique un ajustement.',
  },
  s05: {
    understand:['Le portrait s’organise à partir de repères légers : axe du visage, ligne des yeux, base du nez et bouche.','Les proportions varient d’un modèle à l’autre ; observer avant de tracer évite un visage stéréotypé.'],
    materials:'Papier, crayon HB, gomme souple, miroir ou modèle volontaire ; aucune photo personnelle n’est nécessaire.',
    safety:'Respecter la personne modèle, demander son accord et ne pas commenter son apparence. Le modèle peut être un dessin imprimé.',
    situation:'Deux élèves dessinent le même visage : les yeux du premier sont trop hauts et la bouche touche le nez. Quels repères peuvent aider ?',
    situationAnswer:'Un axe central et des lignes légères pour les yeux, le nez et la bouche, placés en observant le modèle.',
    observe:{title:'Repères du visage',phrase:'Observe le modèle avant de tracer : axe, ligne des yeux, nez, bouche et contour.',bullets:['L’axe suit l’orientation du visage.','La ligne des yeux traverse le visage à la hauteur observée.','Le nez et la bouche se placent par comparaison, pas par formule unique.','Le contour et les cheveux varient selon le modèle.'],support:'Modèle volontaire ou portrait imprimé'},
    prep:{title:'Axes et proportions',phrase:'Trace l’ovale et l’axe très légèrement ; compare les distances du modèle.',text:'Regarde les écarts entre les éléments et leur alignement. Aucun repère ne doit enfermer le visage dans un gabarit identique pour tous.'},
    questions:[['Pourquoi tracer l’axe ?','Pour garder l’orientation et l’équilibre des deux côtés.'],['Les yeux se placent-ils toujours exactement au milieu ?','On observe le modèle ; l’axe sert de repère, pas de règle absolue.'],['Quand ajouter les détails ?','Après le contour et les repères principaux.'],['Comment respecter le modèle ?','Décrire les formes visibles sans jugement sur la personne.']],
    steps:[{title:'Observer et choisir les repères',text:'Repérer l’orientation, l’axe, la ligne des yeux et les écarts entre nez et bouche.',phrase:'Je regarde les distances avant de dessiner.'},{title:'Tracer le contour léger',text:'Esquisser l’ovale ou le contour réel du visage avec des traits faciles à corriger.',phrase:'Le contour suit le modèle, pas un symbole de mémoire.'},{title:'Placer les éléments',text:'Comparer la position des yeux, du nez et de la bouche aux lignes de repère ; corriger avant les détails.',phrase:'Je compare les alignements.'},{title:'Nuancer et nettoyer',text:'Ajouter quelques valeurs, garder les traits utiles et effacer les repères devenus inutiles.',phrase:'Je termine après avoir vérifié les proportions.'}],
    practice:{title:'Portrait d’après un autre modèle',consigne:'Choisis un modèle volontaire ou imprimé. Place l’axe et trois repères, dessine les traits principaux et ajoute deux valeurs de gris.',criteria:['Modèle observé avec respect.','Repères légers et utiles.','Éléments placés selon le modèle.','Deux valeurs ajoutent du volume.'],trace:'J’observe le modèle. Je trace l’axe et les repères. Je place les éléments, j’ajoute deux gris et j’efface les repères.'},
    eval:'Présente le portrait et montre un repère qui t’a aidé à ajuster une proportion.',
    sceneAlt:'Deux élèves dessinent un portrait d’après un modèle volontaire, sans texte ni caricature.'
  },
  s06b: {
    understand:['Les primaires de l’atelier sont le jaune, le rouge et le bleu.','Une préparation propre et un essai sur papier évitent les mélanges perdus et les pinceaux souillés.'],
    materials:'Peinture lavable jaune, rouge, bleu ; godets, pinceaux, papier brouillon, eau, chiffons et protection de table.',
    safety:'Ne pas porter la peinture à la bouche ; utiliser de l’eau propre ; essuyer immédiatement les éclaboussures.',
    situation:'La classe veut peindre demain, mais les pinceaux sont secs et les couleurs mélangées dans un même pot. Que faut-il préparer ?',
    situationAnswer:'Des godets séparés, des pinceaux propres, de l’eau, un chiffon, du papier d’essai et une zone de séchage.',
    observe:{title:'Matériel et couleurs primaires',phrase:'Nomme les trois primaires et montre le matériel qui garde chaque couleur propre.',bullets:['Jaune, rouge et bleu restent séparés au départ.','Un godet reçoit une couleur ; un autre reçoit l’eau.','Le papier d’essai sert avant la production.','Le pinceau se rince et s’essuie entre les couleurs.'],support:'Godets, pinceaux et papier d’essai'},
    prep:{title:'Installer l’atelier',phrase:'Pose le matériel dans l’ordre : peinture, eau, pinceau, essai et chiffon.',text:'Prévoir une place stable pour chaque groupe. Garder les couvercles fermés et l’eau loin du bord de la table.'},
    questions:[['Quelles sont les trois couleurs de départ ?','Jaune, rouge et bleu.'],['À quoi sert le papier d’essai ?','À vérifier une couleur ou un mélange avant la feuille finale.'],['Quand rincer le pinceau ?','Avant de passer à une autre couleur.'],['Où poser l’œuvre pour sécher ?','Sur une zone à plat qui ne gêne pas le passage.']],
    steps:[{title:'Reconnaître les primaires',text:'Nommer chaque pot et vérifier que les couleurs ne sont pas déjà mélangées.',phrase:'Je garde les trois couleurs séparées.'},{title:'Préparer les postes',text:'Placer godet, eau, pinceau, papier et chiffon à portée sans encombrer la table.',phrase:'Chaque objet a sa place.'},{title:'Faire un essai propre',text:'Poser une petite touche sur le papier, rincer le pinceau et refermer les pots.',phrase:'Je teste peu, je garde propre.'},{title:'Ranger et sécher',text:'Essuyer les outils, fermer les pots et installer une zone de séchage sûre.',phrase:'L’atelier propre permet de recommencer.'}],
    practice:{title:'Préparer un poste de peinture',consigne:'En binôme, installe les trois primaires, le matériel et le papier d’essai. Fais un échantillon de chaque couleur puis range le poste.',criteria:['Trois primaires séparées.','Matériel complet et stable.','Échantillons propres.','Poste rangé et œuvre mise à sécher.'],trace:'Je nomme les primaires. Je prépare les godets, l’eau et le papier. Je fais les essais, je nettoie et je range.'},
    eval:'Montre les trois primaires et explique comment éviter de salir les mélanges.',
    sceneAlt:'Des élèves préparent les pots de peinture primaires, pinceaux, eau et papier d’essai dans une classe.'
  },
  s09: {
    understand:['Imiter une œuvre commence par l’observation de ses couleurs, de leurs emplacements et de leurs valeurs.','On teste d’abord un mélange sur une chute de papier, puis on colorie du clair vers le foncé sans couvrir les repères utiles.'],
    materials:'Image modèle imprimée, dessin à colorier, crayons ou peinture lavable, papier d’essai, pinceau, eau et chiffon.',
    safety:'Employer des matériaux non toxiques ; protéger la table ; ne pas échanger les pinceaux portés à la bouche.',
    situation:'Le dessin est bien colorié mais ne ressemble plus au modèle : le jaune est devenu orange et les zones foncées sont trop larges. Comment reprendre ?',
    situationAnswer:'Comparer zone par zone, tester les mélanges sur une chute et ajuster la couleur avant de poursuivre.',
    observe:{title:'Modèle, couleurs et zones',phrase:'Compare les grandes zones du modèle : couleur, clarté et emplacement.',bullets:['Repérer les couleurs dominantes.','Noter les zones claires et foncées.','Observer les limites entre les couleurs.','Chercher les mélanges avant de colorier.'],support:'Image modèle et dessin non coloré'},
    prep:{title:'Nuancier d’essai',phrase:'Prépare deux ou trois petites cases pour vérifier les couleurs du modèle.',text:'L’élève nomme une couleur, propose un mélange, le teste, puis compare l’essai au modèle à côté de la feuille.'},
    questions:[['Pourquoi observer avant de commencer ?','Pour repérer couleurs, valeurs et emplacements.'],['Où tester un mélange ?','Sur une chute de papier, pas sur l’œuvre finale.'],['Par quelle zone commencer ?','Par les grandes zones claires, puis les détails et valeurs foncées.'],['Comment vérifier l’imitation ?','Comparer à distance chaque zone avec le modèle.']],
    steps:[{title:'Décrire le modèle',text:'Repérer les couleurs principales, les limites des zones et les valeurs claires ou foncées.',phrase:'Je décris avant de colorier.'},{title:'Préparer les mélanges',text:'Reproduire une petite quantité de chaque couleur sur le papier d’essai et la comparer au modèle.',phrase:'Je vérifie chaque couleur avant la feuille.'},{title:'Colorier les grandes zones',text:'Remplir les surfaces en gardant les contours propres ; poser les tons clairs avant les foncés.',phrase:'Je respecte les zones et les contours.'},{title:'Comparer et réajuster',text:'Comparer les zones à l’image, corriger une différence visible et ajouter les derniers détails.',phrase:'Je compare, puis je corrige une seule chose à la fois.'}],
    practice:{title:'Imiter un second modèle',consigne:'Choisis une petite image. Repère quatre zones, teste les couleurs sur une chute, colorie les grandes surfaces puis compare au modèle.',criteria:['Quatre zones repérées.','Mélanges testés à part.','Grandes surfaces propres.','Une différence corrigée après comparaison.'],trace:'Je repère les zones. Je teste les couleurs. Je colorie du clair au foncé. Je compare et je corrige.'},
    eval:'Montre une zone que tu as imitée et une correction faite après comparaison.',
    sceneAlt:'Une élève compare un petit modèle coloré et son coloriage d’essai, avec des godets primaires sur la table.'
  },
  s18: {
    understand:['Un instrument se décrit par ses matériaux, ses parties, la manière de le jouer et le son obtenu.','La conque antsiva est un aérophone ; le sodina est une flûte malagasy.'],
    situation:'La classe découvre une conque, une flûte et un tambour. Quels indices permettent de les décrire et de les classer ?',
    situationAnswer:'Observer les matériaux et les parties, écouter leur son et repérer comment l’air, les cordes ou la percussion le produisent.',
    observe:{title:'Instruments malagasy',phrase:'Observe les matériaux, les parties visibles et le geste qui produit le son.',bullets:['Antsiva : conque soufflée, aérophone.','Sodina : flûte malagasy, jouée avec le souffle et les doigts.','Décrire l’objet avant de le classer.','Écouter sans toucher un instrument appartenant à autrui.'],support:'Images ou démonstration d’instruments'},
    prep:{title:'Fiche d’observation sonore',phrase:'Pour chaque instrument, note matériau, partie vibrante, geste et son.',text:'Ne pas souffler dans un instrument partagé. Si l’objet réel manque, utiliser une image et un extrait sonore préparé.'},
    questions:[['Quelles parties de l’antsiva observes-tu ?','La conque et son ouverture ; le son vient du souffle.'],['Comment décrire le sodina ?','Comme une flûte malagasy à vent.'],['Un instrument se classe-t-il seulement par sa forme ?','Non, on observe aussi sa source sonore et son mode de jeu.'],['Que peut-on comparer sans jouer ?','Matériaux, parties, taille et forme.']],
    steps:[{title:'Observer les matériaux',text:'Repérer matière, forme, parties et assemblages sans inventer ce qui n’est pas visible.',phrase:'Je décris ce que je peux montrer.'},{title:'Écouter le son',text:'Écouter une démonstration ou un extrait ; noter aigu, médium ou grave si c’est audible.',phrase:'J’écoute avant de classer.'},{title:'Décrire le geste',text:'Nommer souffle, frappe ou frottement selon l’instrument présenté.',phrase:'Le geste aide à comprendre le son.'},{title:'Classer et présenter',text:'Associer nom, famille, matériau et mode d’utilisation ; présenter une particularité.',phrase:'Je relie l’objet au son.'}],
    practice:{title:'Présenter un instrument malagasy',consigne:'Choisis un instrument documenté. Décris ses matériaux, ses parties, son mode de jeu et le son ; classe-le dans une famille.',criteria:['Nom ou famille justifiés.','Matériaux et parties observés.','Mode de jeu décrit.','Son comparé sans exagération.'],trace:'J’observe l’instrument. Je décris ses parties et ses matériaux. J’écoute son son, je le classe et je présente une particularité.'},
    eval:'Présente l’instrument et justifie son classement par une observation et un indice sonore.',
    sceneAlt:'Des élèves observent des instruments malagasy et une conque antsiva avec une flûte sodina.'
  },
  s12: {
    understand:['Un objet recyclable peut devenir une partie d’instrument si sa matière, sa forme et sa sécurité conviennent.','Un gobelet, un sachet, un ruban, un bâton et un tissu peuvent avoir des rôles différents dans un amponga.'],
    situation:'Plusieurs objets propres sont disponibles, mais le groupe ne sait pas lesquels peuvent devenir des parties d’un instrument. Comment les comparer ?',
    situationAnswer:'Décrire leur matière, leur forme, leur son possible et leur rôle avant d’associer les éléments.',
    observe:{title:'Objets et modes de réalisation',phrase:'Observe les objets, puis associe chacun à une partie ou à une fonction sonore.',bullets:['Le gobelet peut former un corps ou une caisse.','Un sachet ou tissu peut fermer ou couvrir, selon le modèle.','Un ruban peut ligaturer si la fixation tient.','Un bâton peut servir de percuteur ; vérifier sa taille et ses bords.'],support:'Objets recyclables propres et modèles d’amponga'},
    prep:{title:'Trier sans assembler',phrase:'Classe les objets par matière et par fonction possible.',text:'Écarter les objets souillés, cassants, coupants ou trop petits. Ne rien découper ni percer pendant ce tri.'},
    questions:[['Pourquoi observer la matière ?','Elle aide à prévoir la forme, la solidité et le son.'],['Quel rôle peut avoir un ruban ?','Une ligature, si elle maintient sans danger.'],['Tout objet recyclable convient-il ?','Non, il doit être propre, stable et sûr.'],['Que faut-il décider avant l’assemblage ?','Le rôle de chaque élément et le mode de réalisation.']],
    steps:[{title:'Décrire les objets',text:'Nommer cinq objets propres et relever matière, forme, taille et état.',phrase:'Je décris avant de choisir.'},{title:'Associer une fonction',text:'Proposer pour chaque objet un rôle : corps, percussion, fermeture, membrane ou décoration.',phrase:'Chaque partie a une fonction.'},{title:'Vérifier la sécurité',text:'Écarter les bords coupants, les contenants sales et les pièces instables ; demander l’aide de l’enseignant.',phrase:'La sécurité passe avant le son.'},{title:'Présenter une association',text:'Montrer un instrument possible et expliquer quel objet pourrait devenir chaque partie.',phrase:'J’explique mon choix avec un indice.'}],
    practice:{title:'Associer objets et instrument possible',consigne:'Trie cinq objets propres. Associe gobelet, sachet, ruban, bâton ou tissu à un rôle possible dans un amponga ; explique une association et un risque à éviter.',criteria:['Objets propres et sûrs sélectionnés.','Au moins trois fonctions décrites.','Association cohérente avec le modèle.','Un risque repéré et écarté.'],trace:'J’observe les objets. Je les trie. J’associe chaque partie à une fonction. Je vérifie la sécurité et j’explique mon choix.'},
    eval:'Présente deux objets triés, leur fonction possible et un objet écarté pour raison de sécurité.'
  },
  s13: {
    understand:['Un plan coté montre la forme et les dimensions utiles avant la fabrication.','Le plan repère la zone sonore, les fixations et les matériaux, tout en gardant des mesures réalisables.'],
    situation:'Un instrument doit être assemblé en binôme, mais chacun imagine une forme différente. Comment se mettre d’accord avant de fabriquer ?',
    situationAnswer:'Choisir un modèle, faire un dessin annoté et noter les dimensions, la zone sonore et les fixations.',
    observe:{title:'Plan, formes et dimensions',phrase:'Observe le modèle, sa forme, ses mesures et la partie qui produit le son.',bullets:['Tracer la forme générale à taille lisible.','Noter les dimensions principales et les matériaux.','Repérer la zone sonore et les ligatures.','Prévoir un motif organisé sans gêner le son.'],support:'Gobelet ou shaker modèle, règle et feuille de plan'},
    prep:{title:'Choisir et mesurer',phrase:'Choisis un instrument simple et mesure son corps avant de dessiner.',text:'Le plan se fait sur papier. L’enseignant vérifie outils et matériaux ; aucune pièce n’est coupée ou percée à cette étape.'},
    questions:[['À quoi servent les cotes ?','À préparer des éléments de dimensions compatibles.'],['Pourquoi repérer la zone sonore ?','Pour ne pas la masquer ni la bloquer.'],['Quelles informations figurent sur le plan ?','Forme, dimensions, matériaux et fixations.'],['Que vérifier avant de fabriquer ?','La faisabilité et la sécurité des outils.']],
    steps:[{title:'Choisir un modèle',text:'Sélectionner un instrument simple que le groupe pourra fabriquer avec des matériaux disponibles.',phrase:'Je choisis selon les matériaux réels.'},{title:'Tracer la forme',text:'Dessiner le corps de l’instrument en vue claire et repérer les différentes parties.',phrase:'Le dessin montre les pièces.'},{title:'Ajouter les cotes',text:'Mesurer et noter les dimensions principales, la zone sonore et les points de fixation.',phrase:'Les mesures évitent les pièces incompatibles.'},{title:'Vérifier le plan',text:'Comparer le plan aux matériaux, montrer les gestes prévus à l’enseignant et corriger avant fabrication.',phrase:'Je vérifie avant d’assembler.'}],
    practice:{title:'Dessiner un plan coté',consigne:'En binôme, choisis un shaker ou un petit tambour. Dessine-le, note trois dimensions, les matériaux, la zone sonore et la fixation.',criteria:['Instrument et matériaux identifiés.','Forme lisible.','Trois dimensions indiquées.','Zone sonore et fixation repérées.'],trace:'Nous choisissons un modèle. Nous dessinons sa forme. Nous notons trois dimensions, les matériaux et les fixations.'},
    eval:'Montre le plan et explique comment les mesures permettent d’assembler les parties.'
  },
  s19: {
    understand:['Monophonie : un instrument joue un son à la fois. Polyphonie : plusieurs sons peuvent être entendus ensemble.','Le classement porte sur ce que l’instrument peut produire, pas sur le nombre de personnes qui jouent.'],
    situation:'Une flûte joue une mélodie seule ; une guitare fait entendre plusieurs cordes ensemble. Qu’est-ce qui change dans le son ?',
    situationAnswer:'La flûte joue un son à la fois ; la guitare peut faire entendre plusieurs sons simultanément.',
    observe:{title:'Un son ou plusieurs',phrase:'Écoute chaque exemple et compte les sons entendus au même instant.',bullets:['Monophonie : flûte, clarinette, trompette, saxophone.','Polyphonie : piano, orgue, guitare, banjo.','La comparaison se fait à l’écoute, pas seulement sur l’image.','Aigu, médium et grave décrivent la hauteur.'],support:'Flûte et guitare ou extraits sonores courts'},
    prep:{title:'Tableau d’écoute',phrase:'Trace deux colonnes : un son à la fois / plusieurs sons ensemble.',text:'Préparer des instruments ou de courts extraits. Les élèves écoutent sans parler pendant l’extrait, puis décrivent ce qu’ils ont entendu.'},
    questions:[['Que signifie monophonie ?','Un son à la fois.'],['Que signifie polyphonie ?','Plusieurs sons ensemble.'],['La flûte joue-t-elle toujours une seule note à la fois ?','Dans les exemples de la leçon, oui ; on classe l’instrument selon ce qu’il peut produire.'],['La hauteur aiguë/grave indique-t-elle le nombre de sons ?','Non, la hauteur et le nombre de sons sont deux critères différents.']],
    steps:[{title:'Écouter un son isolé',text:'Faire entendre une note de flûte ou de clarinette ; décrire le son et son registre.',phrase:'J’écoute un son à la fois.'},{title:'Écouter plusieurs sons ensemble',text:'Faire entendre un accord de guitare ou de piano ; repérer que plusieurs hauteurs sonnent ensemble.',phrase:'Plusieurs sons peuvent commencer au même instant.'},{title:'Classer des exemples',text:'Placer flûte, clarinette, trompette et saxophone d’un côté ; piano, guitare, orgue et banjo de l’autre.',phrase:'Je classe selon ce que l’instrument peut jouer.'},{title:'Comparer les hauteurs',text:'Écouter aigu, médium ou grave dans chaque exemple sans confondre hauteur et polyphonie.',phrase:'Je distingue nombre de sons et hauteur.'}],
    practice:{title:'Classer quatre instruments',consigne:'Classe une flûte, une trompette, une guitare et un piano selon un son à la fois ou plusieurs sons ensemble. Justifie chaque choix.',criteria:['Deux catégories nommées correctement.','Quatre instruments classés.','Justification fondée sur le son possible.','Hauteur distincte du nombre de sons.'],trace:'J’écoute. Je distingue un son de plusieurs sons ensemble. Je classe les instruments et je justifie mes choix.'},
    eval:'Classe deux exemples nouveaux et explique ce que tu écoutes pour décider.',
    sceneAlt:'Un élève joue une note de flûte pendant qu’une autre élève fait entendre plusieurs cordes de guitare.'
  },
  s20: {
    situation:'Le groupe accélère sans s’en rendre compte et perd les temps. Comment garder un battement commun ?',
    situationAnswer:'Marquer d’abord une pulsation régulière, puis dire les temps par deux ou par trois sans accélérer.',
    observe:{title:'Pulsation et groupes de temps',phrase:'Écoute une pulsation lente puis rapide ; marque les temps par deux puis par trois.',bullets:['La pulsation reste régulière.','Le tempo peut être lent, rapide ou saccadé.','Binaire : groupes de deux.','Ternaire : groupes de trois ; 12/8 regroupe quatre temps ternaires.'],support:'Tambour, mains ou écoute d’un extrait'},
    prep:{title:'Comptage binaire et ternaire',phrase:'Frappe 1–2, puis 1–2–3, sans changer la vitesse.',text:'Le professeur donne le tempo ; les élèves marquent seulement le premier temps plus fort puis comptent le groupe.'},
    questions:[['Qu’est-ce que la pulsation ?','Le battement régulier qui sert de repère.'],['Qu’est-ce qui change quand le tempo accélère ?','La vitesse des battements, pas leur régularité.'],['Combien de temps dans un groupe ternaire ?','Trois subdivisions dans le groupe.'],['Comment compter 12/8 dans ce repère ?','Quatre groupes de trois croches.']],
    steps:[{title:'Trouver la pulsation',text:'Marcher ou frapper un battement régulier pendant huit temps.',phrase:'Je garde le même écart entre les battements.'},{title:'Varier le tempo',text:'Reprendre le battement lentement puis plus vite, sans perdre l’égalité des temps.',phrase:'Rapide ne veut pas dire irrégulier.'},{title:'Grouper les temps',text:'Dire 1–2 pour le binaire puis 1–2–3 pour le ternaire, en accentuant le début du groupe.',phrase:'Le premier temps aide à entendre le groupe.'},{title:'Lire une mesure 12/8',text:'Dessiner douze petites cases et entourer quatre groupes de trois.',phrase:'Douze croches : quatre groupes de trois.'}],
    practice:{title:'Créer deux mesures contrastées',consigne:'Frappe huit temps réguliers, puis compte une mesure binaire et une mesure en quatre groupes de trois. Garde le tempo stable.',criteria:['Pulsation régulière.','Groupe binaire reconnu.','Quatre groupes de trois entendus.','Changement de tempo maîtrisé.'],trace:'Je trouve la pulsation. Je varie le tempo sans perdre le battement. Je groupe par deux puis par trois et je compte 12/8.'},
    eval:'Frappe une pulsation régulière puis montre un groupe binaire et un groupe ternaire.',
  },
  s21: {
    understand:['La durée distingue son long, son court et silence ; l’intensité distingue fort et doux.','Une nuance montante augmente progressivement l’intensité ; une nuance descendante la diminue.'],
    situation:'Le groupe joue toujours fort et chaque note a la même durée. Comment rendre la phrase musicale plus expressive ?',
    situationAnswer:'Varier son long et court, insérer un silence, jouer doux puis fort ou faire monter et descendre l’intensité.',
    observe:{title:'Durée, intensité et nuances',phrase:'Écoute les sons longs, courts, les silences, puis les changements fort/doux.',bullets:['Long : le son est tenu.','Court : le son s’arrête vite.','Silence : aucun son pendant le temps indiqué.','Fort/doux et montant/descendant décrivent l’intensité.'],support:'Voix, mains ou instrument disponible'},
    prep:{title:'Signes et consignes',phrase:'Prépare quatre gestes : long, court, silence, doux/fort.',text:'Le groupe choisit un signal visuel pour chaque durée et nuance. On vérifie que tous comprennent le signe avant de jouer.'},
    questions:[['Comment montrer un son long ?','Le tenir pendant plusieurs temps.'],['Que fait-on pendant un silence ?','On garde le temps sans produire de son.'],['Fort et aigu veulent-ils dire la même chose ?','Non : fort décrit l’intensité, aigu décrit la hauteur.'],['Comment jouer une nuance descendante ?','Diminuer progressivement l’intensité.']],
    steps:[{title:'Marquer long et court',text:'Dire ou jouer un son tenu sur deux temps puis un son bref sur un temps.',phrase:'La durée change, la pulsation continue.'},{title:'Placer le silence',text:'Garder un temps sans son et reprendre exactement sur le battement suivant.',phrase:'Le silence fait partie du rythme.'},{title:'Varier l’intensité',text:'Répéter une courte phrase douce puis forte, sans crier ni frapper trop fort.',phrase:'Fort ne signifie pas forcer.'},{title:'Faire monter et descendre',text:'Augmenter puis réduire progressivement l’intensité en gardant la même pulsation.',phrase:'Je change par étapes, pas d’un coup.'}],
    practice:{title:'Jouer une phrase avec nuances',consigne:'Joue quatre temps : un son long, deux sons courts, un silence ; reprends la phrase doucement puis plus fort et termine en diminuant.',criteria:['Long/court distingués.','Silence gardé dans le temps.','Fort/doux contrastés sans forcer.','Montée ou descente progressive.'],trace:'Je marque les sons longs et courts. Je garde le silence dans le temps. Je joue doux, plus fort, puis je diminue.'},
    eval:'Fais entendre un son long, un son court et un silence ; montre ensuite une nuance descendante.',
  },
  s22: {
    understand:['Un instrument à vent produit le son grâce à l’air. La sodina est une flûte ; la farara est un harmonica.','Chanter et jouer ensemble demande un repère commun, une respiration adaptée et un volume confortable.'],
    materials:'Sodina ou harmonica personnel si disponible ; sinon écoute préparée, paroles courtes, repère de pulsation et cartes de souffle.',
    safety:'Ne jamais partager l’embouchure ; nettoyer son instrument ; ne pas forcer le souffle ni le volume.',
    situation:'Le chant commence à l’heure, mais l’instrument entre trop tôt et couvre les voix. Comment coordonner le groupe ?',
    situationAnswer:'Établir un départ clair, garder la pulsation et réserver à l’instrument une courte réponse ou un appui convenu.',
    observe:{title:'Souffle, chant et pulsation',phrase:'Écoute un bref chant avec instrument à vent ; repère départ, respiration et pulsation.',bullets:['La sodina est une flûte.','La farara est un harmonica.','Le souffle reste naturel et contrôlé.','Un signe commun aide le chant et l’instrument à démarrer ensemble.'],support:'Démonstration personnelle ou extrait audio'},
    prep:{title:'Préparer l’entrée musicale',phrase:'Choisis un départ, une respiration et le moment où l’instrument répond au chant.',text:'Si aucun instrument n’est disponible, les élèves marquent la partie instrumentale par un souffle silencieux ou un geste, sans prétendre jouer l’instrument.'},
    questions:[['Qu’est-ce qui produit le son dans un instrument à vent ?','L’air mis en vibration.'],['Quel instrument est la sodina ?','Une flûte malagasy.'],['Comment est la farara ?','Un harmonica.'],['Comment éviter que l’instrument couvre le chant ?','Choisir un volume doux et un moment d’entrée précis.']],
    steps:[{title:'Écouter l’instrument',text:'Repérer le son et le souffle ; l’élève qui n’a pas d’instrument observe ou écoute.',phrase:'J’écoute le son avant d’essayer.'},{title:'Placer la pulsation',text:'Marquer quatre temps stables avec la main ou le pied, sans accélérer.',phrase:'La pulsation rassemble le groupe.'},{title:'Coordonner chant et instrument',text:'Dire ou chanter une courte phrase ; ajouter l’instrument au départ convenu, à volume doux.',phrase:'Une entrée claire évite de se couvrir.'},{title:'Reprendre et ajuster',text:'Répéter une fois, corriger le départ ou le volume, puis présenter la phrase ensemble.',phrase:'J’écoute les autres pendant que je joue.'}],
    practice:{title:'Chanter une courte phrase accompagnée',consigne:'Choisis une phrase chantée courte. Marque la pulsation, donne un signe de départ et ajoute un bref appui de sodina ou de farara si l’instrument est disponible.',criteria:['Départ commun.','Pulsation stable.','Instrument à volume confortable.','Respiration et écoute du groupe.'],trace:'Je prépare le souffle. Je marque la pulsation. Je donne le départ, je chante et j’ajoute l’instrument au bon moment.'},
    eval:'Le groupe présente une phrase courte. Explique comment le signe de départ a aidé à rester ensemble.',
    sceneAlt:'Une élève tient une sodina et un groupe chante doucement en suivant une pulsation commune.'
  },
  s23: {
    situation:'La musique avance régulièrement, mais le groupe danse chacun à son propre tempo. Comment se retrouver ?',
    situationAnswer:'Écouter le battement, compter ensemble et répéter une séquence courte sur la même pulsation.',
    observe:{title:'Mouvement et pulsation',phrase:'Écoute le battement et observe comment un mouvement commence et finit sur les temps.',bullets:['La pulsation donne un repère commun.','Un son long peut soutenir un mouvement continu.','Un son court peut déclencher un geste bref.','Un silence peut devenir une pause immobile.'],support:'Musique choisie par l’enseignant et espace dégagé'},
    prep:{title:'Compter avant de bouger',phrase:'Marche sur huit temps, puis ajoute un geste sur le premier temps.',text:'Le groupe vérifie l’espace autour de lui et s’arrête au signe de l’enseignant.'},
    questions:[['Comment garder le même tempo ?','Écouter et compter la pulsation.'],['Que faire pendant un silence ?','S’arrêter ou tenir une pose selon la consigne.'],['Quel mouvement peut suivre un son long ?','Un déplacement continu ou un geste étiré.'],['Pourquoi compter ensemble ?','Pour commencer et finir au même moment.']],
    steps:[{title:'Écouter et marcher',text:'Marcher sur place pendant huit battements réguliers.',phrase:'J’écoute avant d’ajouter un geste.'},{title:'Associer geste et durée',text:'Faire un geste continu sur un son long, puis un geste bref sur un son court.',phrase:'Le mouvement suit le son.'},{title:'Respecter les silences',text:'S’immobiliser pendant le silence et reprendre sur le départ convenu.',phrase:'Je garde le compte même quand je m’arrête.'},{title:'Enchaîner en binôme',text:'Répéter la séquence ensemble et ajuster le tempo si le groupe se disperse.',phrase:'Nous finissons ensemble.'}],
    practice:{title:'Créer une phrase de huit temps',consigne:'Sur une musique urbaine choisie, compose huit temps avec deux gestes, une pause et une fin commune. Répète avec un binôme.',criteria:['Pulsation suivie.','Deux gestes distincts.','Pause placée dans le compte.','Départ et fin coordonnés.'],trace:'J’écoute la pulsation. Je marche sur huit temps. J’ajoute deux gestes, une pause, puis je répète avec mon binôme.'},
    eval:'Présente la phrase de huit temps et montre où tombe la pause.',
  },
  s24: {
    understand:['La mobilité réunit des déplacements variés ; ils se pratiquent dans un espace dégagé et à la vitesse adaptée.','Une chute dansée est une descente contrôlée, jamais une chute réelle.'],
    situation:'Deux groupes se croisent en courant et se heurtent. Comment garder la mobilité tout en protégeant chacun ?',
    situationAnswer:'Définir des couloirs, ralentir, garder une distance et remplacer toute vraie chute par une descente contrôlée.',
    observe:{title:'Actions de mobilité',phrase:'Observe les actions puis distingue celles qui se font debout, au sol ou en rebond.',bullets:['Avancer et reculer sans se heurter.','Ramper dans une zone dédiée.','Rebondir avec les genoux souples.','Descendre au sol de façon contrôlée ; aucun porté.'],support:'Démonstration lente en espace dégagé'},
    prep:{title:'Zones et distances',phrase:'Délimite des couloirs de déplacement et garde une distance bras écartés.',text:'Retirer sacs, chaises et objets du passage ; chacun garde une zone et s’arrête au signal.'},
    questions:[['Que signifie chuter dans une danse scolaire ?','Descendre au sol de façon contrôlée, jamais tomber réellement.'],['Comment éviter les collisions ?','Garder un couloir et une distance.'],['Comment rebondir sans forcer ?','Fléchir doucement les genoux et rester stable.'],['Peut-on imposer un porté ?','Non, aucun porté ni contact imposé.']],
    steps:[{title:'Échauffer et marcher',text:'Marcher, avancer et reculer lentement en gardant une distance.',phrase:'Je regarde devant moi et je garde ma zone.'},{title:'Ramper et changer de niveau',text:'Ramper uniquement sur le sol dégagé, puis se relever sans précipitation.',phrase:'Je contrôle la descente et le retour.'},{title:'Rebondir et gambader',text:'Essayer de petits rebonds et pas légers sans traverser la zone d’un pair.',phrase:'Mes appuis restent souples.'},{title:'Enchaîner avec un arrêt',text:'Relier deux actions, s’arrêter au signal et vérifier l’espace autour.',phrase:'Je bouge, je m’arrête, je vérifie.'}],
    practice:{title:'Créer un enchaînement de mobilité',consigne:'Enchaîne avancer, reculer, un déplacement au sol et deux rebonds dans ta zone. Termine par un arrêt contrôlé.',criteria:['Quatre actions distinctes.','Distance et zone respectées.','Descente au sol maîtrisée.','Arrêt au signal.'],trace:'Je vérifie l’espace. J’avance, je recule, je descends au sol et je rebondis. Je m’arrête au signal.'},
    eval:'Montre deux actions et explique comment tu as évité une collision.',
  },
  s26: {
    understand:['Une séquence urbaine se construit par petits groupes de mouvements puis se répète sur la pulsation.','Le groupe choisit des mouvements adaptés à l’âge, à l’espace et aux capacités de chacun ; aucun geste dangereux ni contact imposé.'],
    materials:'Espace dégagé, musique urbaine à tempo adapté, repères au sol, eau à proximité ; aucune figure acrobatique.',
    safety:'Échauffement bref, sol sec, distance, chaussures stables ; pas de porté, de chute réelle ni de mouvement douloureux.',
    situation:'Le groupe veut reproduire toute une danse vue en vidéo et se perd après quelques secondes. Comment la rendre apprenable ?',
    situationAnswer:'Découper le modèle en deux mouvements, les apprendre lentement, les compter puis les relier.',
    observe:{title:'Séquence urbaine',phrase:'Observe deux mouvements à la fois : appuis, direction, niveau et compte.',bullets:['Choisir deux gestes simples et sûrs.','Repérer sur quels temps ils commencent.','Répéter chaque fragment lentement.','Assembler les fragments sans courir ni se bousculer.'],support:'Courte démonstration adaptée ou enseignant'},
    prep:{title:'Repères et espace de danse',phrase:'Marque la position de départ, la direction et huit temps au sol.',text:'Choisir une musique dont le volume permet d’entendre la voix de l’enseignant. Les mouvements sont adaptés et peuvent être simplifiés.'},
    questions:[['Pourquoi découper une séquence ?','Pour apprendre un petit fragment avant de le relier.'],['Que faut-il observer dans un mouvement ?','Appuis, direction, niveau et temps.'],['Faut-il copier exactement le modèle ?','Non, on peut adapter le geste tout en gardant son repère rythmique.'],['Quelles figures sont interdites ici ?','Portés, chutes réelles et acrobaties dangereuses.']],
    steps:[{title:'Écouter et marquer le compte',text:'Écouter la musique et marquer huit temps en marchant sur place.',phrase:'Je compte avant d’ajouter les pas.'},{title:'Apprendre deux mouvements',text:'Observer un geste simple, le répéter lentement puis le refaire sur le compte.',phrase:'Deux gestes bien appris suffisent.'},{title:'Relier les mouvements',text:'Assembler les deux gestes avec une transition sûre et garder la direction choisie.',phrase:'Je relie sans accélérer.'},{title:'Présenter en groupe',text:'Répéter à distance, démarrer ensemble et finir sur le huitième temps.',phrase:'Je garde ma place et mon compte.'}],
    practice:{title:'Présenter une séquence urbaine courte',consigne:'Crée avec un binôme une séquence de huit temps : deux mouvements simples, une transition et une fin commune. Répète-la à tempo modéré.',criteria:['Deux mouvements identifiables.','Compte de huit temps gardé.','Transition sûre.','Départ et fin coordonnés.'],trace:'Je compte huit temps. J’apprends deux gestes. Je les relie, je garde ma place et je termine avec mon groupe.'},
    eval:'Présente la séquence. Dis quel mouvement commence sur le premier temps et comment le groupe reste en sécurité.',
    sceneAlt:'Des élèves malgaches répètent deux mouvements de danse urbaine en groupe, dans un espace de classe dégagé.'
  },
  s31: {
    understand:['Le lieu, les entrées, les sorties et les objets organisent l’action et aident le public à comprendre la situation.','Un accessoire reste sûr, visible et utile au jeu ; l’espace doit permettre aux personnages de se déplacer.'],
    situation:'Deux personnages jouent au marché, mais le panier cache leur visage et l’entrée est encombrée. Que faut-il réorganiser ?',
    situationAnswer:'Déplacer l’objet, dégager le passage et choisir une place où les deux personnages restent visibles.',
    observe:{title:'Lieux, objets et espace de jeu',phrase:'Observe où les personnages entrent, se placent, utilisent l’objet et sortent.',bullets:['L’espace représente un lieu compréhensible.','Les personnages restent visibles du public.','Un objet utile se place sans bloquer les déplacements.','Les distances entre rôles rendent l’action lisible.'],support:'Espace de jeu, objet souple et plan au tableau'},
    prep:{title:'Dessiner le plan de jeu',phrase:'Trace le public, les entrées, les personnages et l’objet principal.',text:'Définir une aire de jeu dégagée et un signal d’arrêt. Utiliser uniquement des accessoires souples et non dangereux.'},
    questions:[['Pourquoi repérer les entrées et sorties ?','Pour organiser les déplacements sans collision.'],['Où placer un accessoire ?','À portée du personnage et visible sans cacher le jeu.'],['Comment vérifier la visibilité ?','Se placer côté public et contrôler que les personnages restent visibles.'],['Faut-il beaucoup d’objets ?','Non, seulement ceux qui servent à l’action.']],
    steps:[{title:'Choisir le lieu',text:'Nommer le lieu et tracer les limites simples de l’aire de jeu.',phrase:'Le lieu aide à comprendre la situation.'},{title:'Placer les personnages',text:'Marquer les positions de départ et les distances entre personnages.',phrase:'Je garde une distance lisible.'},{title:'Placer l’objet utile',text:'Installer un accessoire souple à portée sans masquer le visage ni gêner un passage.',phrase:'L’objet sert l’action.'},{title:'Essayer les déplacements',text:'Entrer, jouer une action courte, changer de place puis sortir au signal.',phrase:'Je vérifie le plan en jouant.'}],
    practice:{title:'Organiser un espace de jeu',consigne:'Avec un binôme, choisis une situation simple. Fais un plan avec public, deux positions, entrée, sortie et un objet utile. Joue vingt secondes et ajuste un placement.',criteria:['Lieu identifiable.','Entrée et sortie dégagées.','Objet utile et visible.','Deux personnages restent visibles et à distance.'],trace:'Nous choisissons un lieu. Nous dessinons les entrées, les personnages et l’objet. Nous jouons, puis nous ajustons le plan.'},
    eval:'Montre le plan et explique comment l’objet et les déplacements restent visibles et sûrs.'
  },
  s32: {
    understand:['Une mise en scène répartit les rôles, les accessoires, les positions et les déplacements avant la présentation.','Une répétition courte permet de repérer un problème et de réajuster sans imposer un contact ou un rôle inconfortable.'],
    situation:'Un groupe a une scène, mais chacun parle en même temps et l’objet change de main sans être prévu. Comment se préparer ?',
    situationAnswer:'Répartir les rôles et les tours de parole, convenir des déplacements et répéter avant de présenter.',
    observe:{title:'Rôles, objets et répétition',phrase:'Observe comment un groupe se répartit, répète, puis change un élément après un retour.',bullets:['Chaque participant connaît son rôle ou sa tâche.','Les tours de parole sont compréhensibles.','L’objet et les déplacements sont convenus.','Le groupe répète et réajuste un point précis.'],support:'Cartes de rôles, accessoire souple et espace dégagé'},
    prep:{title:'Se répartir et répéter',phrase:'Choisissez les rôles, les tours de parole et un signal de départ.',text:'Proposer aussi une tâche de narrateur, observateur ou régisseur. Chacun peut demander un rôle différent ou une participation sans contact.'},
    questions:[['Que faut-il répartir ?','Les rôles, les objets et les moments de déplacement.'],['Pourquoi répéter ?','Pour coordonner les paroles et les actions avant de présenter.'],['Comment réajuster ?','Choisir un critère observé et modifier une seule chose à la fois.'],['Comment respecter chaque participant ?','Demander son accord et offrir des rôles alternatifs.']],
    steps:[{title:'Comprendre la situation',text:'Résumer en une phrase ce qui arrive et nommer les personnages.',phrase:'Nous savons ce que nous jouons.'},{title:'Distribuer les rôles',text:'Choisir les interprètes et les tâches alternatives ; convenir des tours de parole.',phrase:'Chacun connaît sa tâche.'},{title:'Répéter la scène',text:'Jouer trente secondes avec un objet souple, une entrée et une fin convenue.',phrase:'Nous gardons les déplacements prévus.'},{title:'Réajuster et rejouer',text:'Recueillir un retour sur un critère, modifier un point, puis rejouer la scène.',phrase:'Nous améliorons un élément à la fois.'}],
    practice:{title:'Préparer et répéter une scène',consigne:'En groupe, prépare une scène de trente secondes. Répartis personnages et autres tâches, choisis un objet sûr, répète, recueille un retour et rejoue après un ajustement.',criteria:['Rôles et tâches répartis.','Objet utilisé de façon utile et sûre.','Paroles et déplacements coordonnés.','Un retour entraîne un ajustement visible.'],trace:'Nous comprenons la situation. Nous nous répartissons les rôles. Nous répétons, écoutons un retour et rejouons après un ajustement.'},
    eval:'Décris le changement apporté après le premier essai et le critère qui l’a guidé.'
  },
};

const videos = {
  s01: require('./data_s01').videos,
  s04: require('./data_s01').videos,
};
function clone(x) { return JSON.parse(JSON.stringify(x)); }
const all = parts.map((p) => {
  if (p.id === 's01') return clone(pilot);
  const base = t9[from[p.id] || p.mediaFrom || p.id];
  if (!base) throw new Error('Base de leçon absente pour ' + p.id);
  const d = { ...clone(base), ...p };
  const patch = custom[p.id] || {};
  Object.assign(d, patch);
  d.id = p.id; d.session = p.session; d.part = p.part; d.minutes = p.minutes; d.domain = p.domain;
  d.title = p.title; d.theme = p.theme; d.pe = p.pe; d.objective = p.objective;
  d.keywords = p.contents;
  d.videos = videos[p.id] || [];
  if (!d.sceneAlt) d.sceneAlt = `Illustration de la séance ${p.session} de ${p.domain} : observation et activité d’apprentissage en classe.`;
  if (!d.practice || !d.practice.criteria?.length) throw new Error('Pratique incomplète : ' + p.id);
  if (!d.steps || d.steps.length !== 4) throw new Error('Quatre étapes requises : ' + p.id);
  if (!d.audioText) d.audioText = d.practice.trace || d.practice.consigne;
  return d;
});
function normalizeStrings(value) {
  if (typeof value === 'string') return value.replace(/\bLe PE\b/g, 'Le programme officiel').replace(/\ble PE\b/g, 'le programme officiel');
  if (Array.isArray(value)) return value.map(normalizeStrings);
  if (value && typeof value === 'object') for (const key of Object.keys(value)) value[key] = normalizeStrings(value[key]);
  return value;
}
module.exports = normalizeStrings(all);
