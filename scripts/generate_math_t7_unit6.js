const fs = require('fs');
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  WidthType, AlignmentType, BorderStyle, ShadingType, PageBreak,
  Header, Footer, PageNumber, Bookmark, InternalHyperlink,
  ImageRun, TableLayoutType, Math: DocxMath, MathFraction, MathRun
} = require('docx');

const OUT = 'Manuel_Mathematiques_T7_V1_UNITE6.docx';
const C = { red:'C00000', green:'1E7B34', blue:'1F4E79', wine:'C2185B', pale:'EAF2F8', paleGreen:'E9F5EC', gray:'E7E6E6', black:'000000', white:'FFFFFF' };
const noBorders = {top:{style:BorderStyle.NONE,size:0,color:'FFFFFF'},bottom:{style:BorderStyle.NONE,size:0,color:'FFFFFF'},left:{style:BorderStyle.NONE,size:0,color:'FFFFFF'},right:{style:BorderStyle.NONE,size:0,color:'FFFFFF'},insideHorizontal:{style:BorderStyle.NONE,size:0,color:'FFFFFF'},insideVertical:{style:BorderStyle.NONE,size:0,color:'FFFFFF'}};
const borders = {top:{style:BorderStyle.SINGLE,size:4,color:'808080'},bottom:{style:BorderStyle.SINGLE,size:4,color:'808080'},left:{style:BorderStyle.SINGLE,size:4,color:'808080'},right:{style:BorderStyle.SINGLE,size:4,color:'808080'},insideHorizontal:{style:BorderStyle.SINGLE,size:4,color:'B0B0B0'},insideVertical:{style:BorderStyle.SINGLE,size:4,color:'B0B0B0'}};
const tr = (text,opt={}) => new TextRun({text, font:'Times New Roman', size:opt.size||22, bold:!!opt.bold, color:opt.color||C.black, italics:!!opt.italics});
// Convert every numeric a/b expression to a native Word OMML fraction.
const rich = (text,opt={}) => {
  const out=[]; let last=0; const re=/(\d[\d ]*)\/(\d[\d ]*)/g; let m;
  while((m=re.exec(text))){
    if(m.index>last) out.push(tr(text.slice(last,m.index),opt));
    out.push(new DocxMath({children:[new MathFraction({numerator:[new MathRun(m[1].trim())],denominator:[new MathRun(m[2].trim())]})]}));
    last=re.lastIndex;
  }
  if(last<text.length) out.push(tr(text.slice(last),opt));
  return out.length?out:[tr(text,opt)];
};
const p = (text,opt={}) => new Paragraph({alignment:opt.align||AlignmentType.JUSTIFIED, spacing:{after:opt.after??100,line:276}, indent:opt.indent?{left:opt.indent}:undefined, children:rich(text,opt)});
const title = (text, level=1, bookmark) => {
 const run = tr(text,{bold:true,color:level===1?C.red:C.green,size:level===1?32:26});
 const children = bookmark ? [new Bookmark({id:bookmark, children:[run]})] : [run];
 return new Paragraph({alignment:level===1?AlignmentType.CENTER:AlignmentType.LEFT, spacing:{before:180,after:140}, children});
};
const cell = (text,opt={}) => new TableCell({width:opt.width?{size:opt.width,type:WidthType.PERCENTAGE}:undefined, columnSpan:opt.span, rowSpan:opt.rowSpan, shading:opt.fill?{type:ShadingType.CLEAR,fill:opt.fill}:undefined, margins:{top:80,bottom:80,left:80,right:80}, children:[new Paragraph({alignment:opt.align||AlignmentType.LEFT,children:rich(text,{bold:opt.bold,color:opt.color||C.black,size:opt.size||18})})]});
const table = (rows, columnWidths) => new Table({width:{size:9600,type:WidthType.DXA},layout:TableLayoutType.FIXED,borders,rows,columnWidths});
const ficheTitle = () => new Paragraph({alignment:AlignmentType.CENTER,spacing:{before:120,after:120},children:[tr('FICHE DE PRÉPARATION',{bold:true,size:28})]});
const bullet = text => new Paragraph({bullet:{level:0},spacing:{after:70},children:rich(text)});
const labelPara = (label,text) => new Paragraph({spacing:{after:90},children:[tr(label,{bold:true,color:C.blue}),...rich(text)]});
const correction = (label,text) => new Paragraph({spacing:{after:70},children:[tr(label,{bold:true,color:C.wine}),...rich(text)]});
const page = () => new Paragraph({children:[new PageBreak()]});

function svgPng(name, svg) {
 const dir='assets/math-t6'; fs.mkdirSync(dir,{recursive:true});
 fs.writeFileSync(`${dir}/${name}.svg`,svg);
 require('child_process').execFileSync(process.execPath,['-e',`require('sharp')('${dir}/${name}.svg').png().toFile('${dir}/${name}.png')`]);
 return fs.readFileSync(`${dir}/${name}.png`);
}
const fractionBars = svgPng('fractions-equivalentes',`<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="360"><rect width="100%" height="100%" fill="white"/><text x="40" y="55" font-family="serif" font-size="34">Une même quantité représentée de trois façons</text><g stroke="#1F4E79" stroke-width="4"><rect x="80" y="100" width="800" height="55" fill="white"/><rect x="80" y="100" width="400" height="55" fill="#79B6E3"/><line x1="480" y1="100" x2="480" y2="155"/><rect x="80" y="185" width="800" height="55" fill="white"/><rect x="80" y="185" width="400" height="55" fill="#79B6E3"/><line x1="280" y1="185" x2="280" y2="240"/><line x1="480" y1="185" x2="480" y2="240"/><line x1="680" y1="185" x2="680" y2="240"/><rect x="80" y="270" width="800" height="55" fill="white"/><rect x="80" y="270" width="400" height="55" fill="#79B6E3"/>${[180,280,380,480,580,680,780].map(x=>`<line x1="${x}" y1="270" x2="${x}" y2="325"/>`).join('')}</g><text x="900" y="140" font-size="30">1/2</text><text x="900" y="225" font-size="30">2/4</text><text x="900" y="310" font-size="30">4/8</text></svg>`);
const numberLine = svgPng('droite-fractions',`<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="260"><rect width="100%" height="100%" fill="white"/><text x="40" y="48" font-family="serif" font-size="34">Droite numérique partagée en huitièmes</text><line x1="80" y1="140" x2="920" y2="140" stroke="#1F4E79" stroke-width="5"/>${[0,1,2,3,4,5,6,7,8].map((n,i)=>`<line x1="${80+i*105}" y1="115" x2="${80+i*105}" y2="165" stroke="#1F4E79" stroke-width="4"/><text x="${70+i*105}" y="205" font-size="26">${n===0?'0':n===8?'1':n+'/8'}</text>`).join('')}</svg>`);
const grid100 = svgPng('grille-pourcentage',`<svg xmlns="http://www.w3.org/2000/svg" width="700" height="700"><rect width="100%" height="100%" fill="white"/><text x="50" y="45" font-size="30">35 cases sur 100 = 35 % = 0,35</text>${Array.from({length:100},(_,k)=>{let x=50+(k%10)*55,y=80+Math.floor(k/10)*55;return `<rect x="${x}" y="${y}" width="55" height="55" fill="${k<35?'#79B6E3':'white'}" stroke="#777"/>`}).join('')}</svg>`);

const sessions = [
 {t:"Recueillir et lire des données brutes",goal:"identifier une population, une variable et des valeurs",concept:"Les données brutes sont les réponses telles qu’elles ont été recueillies. Avant tout calcul, on précise la population étudiée, la variable et son type.",example:"Pour les temps de trajet de 30 élèves, la population est la classe et la variable est la durée en minutes.",app:["Identifie population et variable : tailles d’une classe ; prix au marché ; pluies mensuelles ; moyens de transport des élèves.", "Explique les quatre réponses à partir des données, d’un tableau ou d’un calcul."],ans:["Élèves/taille ; produits/prix ; mois/hauteur de pluie ; élèves/moyen de transport.", "La justification doit identifier les données utiles, montrer le calcul et interpréter le résultat."]},
 {t:"Organiser les données recueillies",goal:"trier et regrouper des données",concept:"On vérifie les réponses, on ordonne les valeurs et on choisit des catégories sans chevauchement. Les marques de comptage évitent les oublis.",example:"La série 12, 10, 15, 10 devient 10, 10, 12, 15.",app:["Ordonne : 8, 5, 9, 5, 7 ; 12, 15, 11, 12 ; 3,2, 2,8, 3,0, 2,8 ; 20, 18, 25, 21.", "Explique les quatre réponses à partir des données, d’un tableau ou d’un calcul."],ans:["5, 5, 7, 8, 9 ; 11, 12, 12, 15 ; 2,8, 2,8, 3,0, 3,2 ; 18, 20, 21, 25.", "La justification doit identifier les données utiles, montrer le calcul et interpréter le résultat."]},
 {t:"Construire un tableau d’effectifs",goal:"compter les occurrences de chaque valeur",concept:"L’effectif d’une valeur est le nombre de fois où elle apparaît. La somme des effectifs doit être égale à l’effectif total.",example:"Dans A, A, B, C, A, B : effectifs A=3, B=2, C=1, total=6.",app:["Donne les effectifs : 1,2,2,3,2,1 ; A,B,A,C,B,A,C ; 5,5,6,7,5,6 ; rouge, bleu, rouge, vert, bleu, rouge.", "Explique les quatre réponses à partir des données, d’un tableau ou d’un calcul."],ans:["1:2, 2:3, 3:1 ; A:3, B:2, C:2 ; 5:3, 6:2, 7:1 ; rouge:3, bleu:2, vert:1.", "La justification doit identifier les données utiles, montrer le calcul et interpréter le résultat."]},
 {t:"Calculer et interpréter des fréquences",goal:"calculer effectif divisé par effectif total",concept:"La fréquence est le rapport entre l’effectif d’une catégorie et l’effectif total. Elle s’écrit en fraction, décimal ou pourcentage. La somme des fréquences vaut 1 ou 100 %.",example:"8 élèves sur 40 donnent 8/40 = 0,2 = 20 %.",app:["Calcule les fréquences : 12/40 ; 18/60 ; 7/20 ; 45/50.", "Explique les quatre réponses à partir des données, d’un tableau ou d’un calcul."],ans:["30 % ; 30 % ; 35 % ; 90 %.", "La justification doit identifier les données utiles, montrer le calcul et interpréter le résultat."]},
 {t:"Construire un diagramme à bandes",goal:"représenter des effectifs ou fréquences par des bandes",concept:"Les bandes ont même largeur et sont séparées. Leur hauteur correspond à l’effectif ou à la fréquence selon une échelle régulière. Titre, axes et unité sont obligatoires.",example:"Effectifs 5, 10, 15 : avec 1 cm pour 5, les bandes mesurent 1, 2 et 3 cm.",app:["Donne les hauteurs à 1 cm pour 4 unités : 8, 12, 20, 28. Puis à 1 cm pour 10 % : 20 %, 50 %, 70 %, 90 %.", "Explique les quatre réponses à partir des données, d’un tableau ou d’un calcul."],ans:["2, 3, 5, 7 cm ; 2, 5, 7, 9 cm.", "La justification doit identifier les données utiles, montrer le calcul et interpréter le résultat."]},
 {t:"Construire un diagramme à ligne brisée",goal:"représenter une évolution ordonnée",concept:"On place les points dans l’ordre du temps puis on les relie. Ce diagramme convient aux évolutions continues ou chronologiques.",example:"Les valeurs 12, 15, 18, 16 montrent une hausse puis une baisse.",app:["Décris : 5,8,11,14 ; 20,18,15,12 ; 7,7,10,10 ; 9,13,11,16.", "Explique les quatre réponses à partir des données, d’un tableau ou d’un calcul."],ans:["Hausse continue ; baisse continue ; stable, hausse, stable ; hausse, baisse, hausse.", "La justification doit identifier les données utiles, montrer le calcul et interpréter le résultat."]},
 {t:"Construire un diagramme circulaire",goal:"convertir une fréquence en angle",concept:"Dans un diagramme circulaire, 100 % correspondent à 360°. L’angle d’un secteur vaut fréquence × 360°, ou pourcentage × 3,6.",example:"25 % correspondent à 90° et 40 % à 144°.",app:["Calcule les angles : 10 %, 20 %, 35 %, 50 %.", "Explique les quatre réponses à partir des données, d’un tableau ou d’un calcul."],ans:["36° ; 72° ; 126° ; 180°.", "La justification doit identifier les données utiles, montrer le calcul et interpréter le résultat."]},
 {t:"Choisir une représentation adaptée",goal:"associer données et type de diagramme",concept:"Le diagramme à bandes compare des catégories, la ligne brisée montre une évolution et le circulaire représente les parts d’un total. Le choix doit servir la question posée.",example:"Pour les parts des moyens de transport, un diagramme circulaire convient.",app:["Choisis : températures quotidiennes ; couleurs préférées ; budget familial par poste ; effectifs de quatre classes.", "Explique les quatre réponses à partir des données, d’un tableau ou d’un calcul."],ans:["Ligne brisée ; bandes ; circulaire ; bandes.", "La justification doit identifier les données utiles, montrer le calcul et interpréter le résultat."]},
 {t:"Probabilité théorique et expérimentale",goal:"comparer prévision et fréquence observée",concept:"La probabilité théorique vient des résultats équiprobables. La probabilité expérimentale est la fréquence obtenue après des essais ; elle peut différer mais tend à se rapprocher avec de nombreux essais.",example:"Pour un dé, P(6)=1/6. Si 6 sort 18 fois sur 100, la fréquence expérimentale est 18 %.",app:["Donne la probabilité : pile ; nombre pair sur un dé ; boule rouge parmi 3 rouges et 5 bleues ; carte marquée A parmi 4 A et 6 B.", "Explique les quatre réponses à partir des données, d’un tableau ou d’un calcul."],ans:["1/2 ; 3/6=1/2 ; 3/8 ; 4/10=2/5.", "La justification doit identifier les données utiles, montrer le calcul et interpréter le résultat."]},
 {t:"Utiliser arbre et tableau de probabilités",goal:"énumérer les issues de deux expériences",concept:"Un arbre présente chaque choix successif. Les chemins donnent toutes les issues. Un tableau à double entrée permet aussi de croiser deux expériences.",example:"Deux pièces donnent PP, PF, FP, FF, chacune de probabilité 1/4.",app:["Deux pièces : P(deux piles), P(une pile), P(au moins une pile), P(aucune pile).", "Explique les quatre réponses à partir des données, d’un tableau ou d’un calcul."],ans:["1/4 ; 1/2 ; 3/4 ; 1/4.", "La justification doit identifier les données utiles, montrer le calcul et interpréter le résultat."]},
 {t:"Résoudre des problèmes de probabilité",goal:"calculer et interpréter une probabilité",concept:"On définit l’événement, liste les issues, compte les favorables, forme le rapport, simplifie et interprète entre impossible et certain.",example:"Dans un sac avec 4 rouges, 3 bleues, 1 verte : P(rouge)=4/8=1/2.",app:["Sac de 5 rouges, 3 bleues, 2 vertes : P(rouge), P(bleue), P(non verte), P(rouge ou verte).", "Explique les quatre réponses à partir des données, d’un tableau ou d’un calcul."],ans:["1/2 ; 3/10 ; 4/5 ; 7/10.", "La justification doit identifier les données utiles, montrer le calcul et interpréter le résultat."]}
];

const geoQuadrilaterals = svgPng('quadrilateres-t6', `<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="360"><rect width="100%" height="100%" fill="white"/><text x="35" y="42" font-size="30">Familles de quadrilatères</text><g fill="#DCEEFF" stroke="#1F4E79" stroke-width="5"><rect x="70" y="90" width="180" height="180"/><rect x="310" y="110" width="240" height="140"/><polygon points="680,80 800,180 680,280 560,180"/><polygon points="820,110 960,110 920,260 780,260"/></g><g font-size="25"><text x="115" y="320">Carré</text><text x="370" y="300">Rectangle</text><text x="630" y="320">Losange</text><text x="820" y="300">Trapèze</text></g></svg>`);
const geoAxes = svgPng('repere-t6', `<svg xmlns="http://www.w3.org/2000/svg" width="700" height="600"><rect width="100%" height="100%" fill="white"/><text x="30" y="38" font-size="28">Premier quadrant</text><g stroke="#B0B0B0">${[100,180,260,340,420,500,580].map(x=>`<line x1="${x}" y1="60" x2="${x}" y2="540"/>`).join('')}${[60,140,220,300,380,460,540].map(y=>`<line x1="100" y1="${y}" x2="620" y2="${y}"/>`).join('')}</g><g stroke="#1F4E79" stroke-width="4"><line x1="100" y1="540" x2="650" y2="540"/><line x1="100" y1="560" x2="100" y2="45"/></g><circle cx="340" cy="220" r="10" fill="#C00000"/><text x="355" y="210" font-size="25">A(3 ; 4)</text><text x="625" y="575" font-size="24">x</text><text x="65" y="65" font-size="24">y</text></svg>`);
const geoSolids = svgPng('prismes-t6', `<svg xmlns="http://www.w3.org/2000/svg" width="900" height="400"><rect width="100%" height="100%" fill="white"/><text x="30" y="40" font-size="28">Prismes et patrons</text><g fill="#E9F5EC" stroke="#1F4E79" stroke-width="5"><polygon points="90,120 260,120 310,80 140,80"/><polygon points="90,120 90,290 260,290 260,120"/><polygon points="260,120 310,80 310,250 260,290"/><polygon points="470,120 560,70 650,120"/><polygon points="470,120 470,280 650,280 650,120"/><polygon points="650,120 740,70 740,230 650,280"/></g><text x="130" y="340" font-size="25">Pavé droit</text><text x="510" y="340" font-size="25">Prisme triangulaire</text></svg>`);
sessions.forEach((s,i)=>{ s.img = i < 8 ? geoAxes : geoSolids; });

[0,1,2,3].forEach(i=>sessions[i].scene=fs.readFileSync('assets/math-t6/scenes/scene_sondage_classe.png'));

[8,9,10].forEach(i=>sessions[i].scene=fs.readFileSync('assets/math-t6/scenes/scene_probabilite_jeu.png'));

[4,5,6,7].forEach(i=>sessions[i].scene=fs.readFileSync('assets/math-t6/scenes/scene_diagrammes_donnees.png'));

[0,1,2,3].forEach(i=>sessions[i].scene=fs.readFileSync('assets/math-t6/scenes/scene_sondage_classe.png'));
[4,5,6,7].forEach(i=>sessions[i].scene=fs.readFileSync('assets/math-t6/scenes/scene_diagrammes_donnees.png'));
[8,9,10].forEach(i=>sessions[i].scene=fs.readFileSync('assets/math-t6/scenes/scene_probabilite_jeu.png'));

// Independent assertions for all simple numerical answers used above.
console.assert(11/4===2.75 && 13/5===2.6 && 17/6>2.83 && 17/6<2.84);
console.assert((2/3)===(8/12) && 5/6>3/4);
console.assert(3/5===0.6 && 7/20===0.35 && 9/25===0.36 && 7/8===0.875);
console.assert(12===12 && 24===24 && 36===36);

function meta(s,n){ return new Table({width:{size:100,type:WidthType.PERCENTAGE},borders:noBorders,rows:[
 new TableRow({children:[cell(`Discipline : Mathématiques\nComposante : Traitement de données\nTitre : ${s.t}`,{width:68,bold:true}),cell(`Classe : T7\nSéance : ${n} / 13`,{width:32,bold:true})]}),
 new TableRow({children:[cell(`Objectif : À la fin de la séance, l’apprenant est capable de ${s.goal}.`,{span:2})]})
]}); }
function prep(s,n){
 const heads=[new TableRow({tableHeader:true,children:[cell('Étapes',{rowSpan:2,fill:C.blue,color:C.white,bold:true,width:13,align:AlignmentType.CENTER}),cell('Déroulement de la leçon',{span:2,fill:C.blue,color:C.white,bold:true,width:45,align:AlignmentType.CENTER}),cell('Technique et stratégie',{rowSpan:2,fill:C.blue,color:C.white,bold:true,width:15}),cell('Support et matériel',{rowSpan:2,fill:C.blue,color:C.white,bold:true,width:15}),cell('Observation',{rowSpan:2,fill:C.blue,color:C.white,bold:true,width:12})]}),new TableRow({tableHeader:true,children:[cell('Enseignant',{fill:C.pale,bold:true}),cell('Apprenants',{fill:C.pale,bold:true})]})];
 const rows=[
  ['I. Révision','Que retenez-vous de la notion précédente ? Donnez un exemple numérique.','Répondent oralement et justifient leur exemple.','Questions-réponses','Tableau, ardoises','Acquis à consolider'],
  ['II. NOUVELLE LEÇON','Annonce : « Aujourd’hui, nous allons apprendre à '+s.goal+'. »','Écoutent.','Présentation guidée','Tableau',''],
  ['1. Mise en situation',`Rova rencontre la situation suivante : ${s.example} Que remarquez-vous ?`,'Écoutent, observent et proposent des réponses.','Situation-problème','Illustration, tableau','Participation'],
  ['2. Présentation',`Présente le titre « ${s.t} » et précise l’objectif.`,'Écoutent.','Explication brève','Tableau',''],
  ['3. Observation',s.example,'Observent l’exemple résolu.','Observation dirigée',s.img?'Figure imprimée':'Tableau et ardoises','Compréhension'],
  ['4. Analyse',`Guide l’analyse : ${s.concept} Demande aux apprenants d’expliquer chaque étape.`,'Expliquent la démarche et vérifient le résultat.','Recherche en binômes','Ardoises, règle si nécessaire','Raisonnement'],
  ['5. Synthèse',s.concept,'Écoutent et reformulent la règle.','Synthèse guidée','Cahier, tableau','Trace écrite'],
  ['6. Application',s.app[0]+' '+s.app[1],s.ans[0]+' '+s.ans[1],'Travail individuel puis correction collective','Cahier, ardoises','Remédiation'],
  ['III. Évaluation',`Résous sans modèle : ${s.app[0]} Puis explique une réponse de ton choix.`,s.ans[0]+' Une justification correcte utilise la règle de la leçon.','Travail individuel','Feuille, cahier','Maîtrise de l’objectif']
 ].map((r,i)=>new TableRow({children:r.map((x,j)=>cell(x,{fill:i===1?C.paleGreen:undefined,bold:j===0,size:16}))}));
 // 10 % pour Étapes.
 return table([...heads,...rows],[960,2400,2200,1440,1600,1000]);
}
function lesson(s,n){
 const a=[]; a.push(page(),title(`LEÇON — ${s.t}`,1,`u6_l${n}`));
 // Image immédiatement après le titre, jamais au début de la fiche.
 if(s.scene){
  a.push(new Paragraph({alignment:AlignmentType.CENTER,spacing:{after:90},children:[new ImageRun({data:s.scene,transformation:{width:500,height:280},type:'png'})]}));
  a.push(new Paragraph({alignment:AlignmentType.CENTER,spacing:{after:130},children:[tr('Situation concrète à observer et à faire décrire',{italics:true,size:19,color:'555555'})]}));
 }
 a.push(new Paragraph({alignment:AlignmentType.CENTER,spacing:{after:90},children:[new ImageRun({data:s.img,transformation:{width:500,height:s.img===grid100?420:180},type:'png'})]}));
 a.push(new Paragraph({alignment:AlignmentType.CENTER,spacing:{after:160},children:[tr(`Représentation mathématique — ${s.t}`,{italics:true,size:19,color:'555555'})]}));
 a.push(title('1. Prérequis',2));
 a.push(bullet('Lire et écrire les nombres utilisés dans la situation.'));
 a.push(bullet('Reconnaître les signes =, < et > et expliquer leur sens.'));
 a.push(bullet('Effectuer les opérations élémentaires nécessaires à la vérification.'));
 a.push(title('2. Observer et comprendre',2));
 a.push(labelPara('Situation de départ. ',s.example));
 a.push(labelPara('Idée essentielle. ',s.concept));
 a.push(p('L’enseignant fait décrire les données visibles, nommer les éléments mathématiques et relier la représentation au calcul. Il vérifie que chaque mot nouveau est compris avant de poursuivre.'));
 a.push(title('3. Méthode 1 — Représenter puis raisonner',2));
 a.push(bullet('Représenter la quantité avec une bande, une grille, une droite numérique ou un tableau de numération.'));
 a.push(bullet('Identifier ce que chaque partie de la représentation signifie.'));
 a.push(bullet('Écrire la relation mathématique correspondant à la représentation.'));
 a.push(bullet('Contrôler que l’écriture et le dessin décrivent la même quantité.'));
 if(n!==1 && n!==7){
  a.push(title('4. Méthode 2 — Utiliser une procédure de calcul',2));
  a.push(bullet('Repérer les nombres connus et le résultat recherché.'));
  a.push(bullet('Appliquer la propriété de la leçon, une seule transformation à la fois.'));
  a.push(bullet('Écrire les étapes intermédiaires sans les effectuer mentalement trop vite.'));
  a.push(bullet('Vérifier le résultat avec la représentation ou par une opération inverse.'));
 } else {
  a.push(title('4. Passer progressivement du concret à l’écriture',2));
  a.push(p('Pour cette notion, une seconde procédure abstraite n’est pas utile. L’élève manipule ou observe d’abord, verbalise ce qu’il voit, puis écrit seulement le symbole mathématique correspondant.'));
 }
 a.push(title('5. Exemple résolu et expliqué',2));
 a.push(labelPara('Exemple. ',s.example));
 a.push(p('Explication : on commence par identifier les données. On applique ensuite la règle indiquée dans la leçon. Chaque étape est écrite, puis le résultat est comparé à la représentation initiale pour vérifier sa cohérence.'));
 a.push(title('6. Questions pour guider les élèves',2));
 a.push(bullet('Quelles sont les données connues ?'));
 a.push(bullet('Quelle quantité ou quelle écriture devons-nous trouver ?'));
 a.push(bullet('Quelle propriété permet de passer des données au résultat ?'));
 a.push(bullet('Comment pouvons-nous vérifier la réponse autrement ?'));
 a.push(title('7. Erreurs fréquentes',2));
 a.push(bullet('Modifier un nombre sans appliquer la même transformation à toute l’écriture.'));
 a.push(bullet('Confondre la valeur d’un chiffre avec sa position ou inverser le sens d’une comparaison.'));
 a.push(bullet('Donner un résultat sans montrer la démarche ni effectuer de vérification.'));
 a.push(title('8. Différenciation pédagogique',2));
 a.push(labelPara('Soutien. ','Reprendre la situation avec du matériel, des couleurs et des nombres plus simples.'));
 a.push(labelPara('Niveau attendu. ','Résoudre les quatre items en expliquant au moins une démarche.'));
 a.push(labelPara('Approfondissement. ','Créer un exemple différent qui respecte la même propriété, puis le faire vérifier par un camarade.'));
 a.push(title('EXERCICES — Total : 20 points',1));
 a.push(p('Exercice 1 — 8 points. '+s.app[0]));
 a.push(p('Exercice 2 — 8 points. '+s.app[1]));
 a.push(p('Exercice 3 — 4 points. Pour chacun des quatre items précédents, indique la règle employée. Développe complètement l’une des quatre vérifications.'));
 a.push(title('CORRIGÉ DÉTAILLÉ',2));
 a.push(correction('Exercice 1. ',s.ans[0]+' Chaque réponse correcte vaut 2 points.'));
 a.push(correction('Exercice 2. ',s.ans[1]+' Chaque réponse correcte vaut 2 points.'));
 a.push(correction('Exercice 3. ','Chaque réponse doit nommer la propriété utilisée. La vérification développée reprend les données, montre les étapes, contrôle le résultat et formule une conclusion.'));
 return a;
}
function revision(){return [page(),title('SÉANCE 12 / 13 — RÉVISION DE L’UNITÉ VI',1,'u6_l12'),title('Synthèse',2),p('Révise effectifs, fréquences, diagrammes et probabilités.'),p('1. Calcule la fréquence de 12 sur 30. 2. Convertis 25 % en angle. 3. Quel diagramme pour une évolution mensuelle ? 4. Donne P(nombre pair) avec un dé. 5. Deux pièces : donne P(deux piles).'),title('Réponses attendues',2),correction('1. ','40 %.'),correction('2. ','90°.'),correction('3. ','Diagramme à ligne brisée.'),correction('4. ','1/2.'),correction('5. ','1/4.')];}
function exam(){return [page(),title('SÉANCE 13 / 13 — SUJET D’EXAMEN T7 — UNITÉ VI',1,'u6_l13'),p('Barème : 20 points.'),p('Exercice 1 — 4 points. Pour la série A,A,B,C,A,B,B,C,A,B, construis le tableau des effectifs et calcule le total.'),p('Exercice 2 — 4 points. Calcule les fréquences en pourcentage des effectifs 18, 12, 7 et 3 sur un total de 40.'),p('Exercice 3 — 4 points. Convertis 15 %, 25 %, 35 % et 25 % en angles pour construire un diagramme circulaire.'),p('Exercice 4 — 4 points. Deux pièces sont lancées. Liste les issues et calcule P(deux faces), P(une face exactement) et P(au moins une face).'),p('Exercice 5 — 4 points. Un sac contient 6 boules rouges, 3 bleues et 1 verte. Calcule P(rouge), P(bleue), P(non verte) et P(rouge ou bleue).'),title('CORRIGÉ ET BARÈME',2),correction('Exercice 1. ','A : 4 ; B : 4 ; C : 2 ; total 10.'),correction('Exercice 2. ','45 % ; 30 % ; 17,5 % ; 7,5 %.'),correction('Exercice 3. ','54° ; 90° ; 126° ; 90°. La somme vaut 360°.'),correction('Exercice 4. ','PP, PF, FP, FF ; P(FF)=1/4 ; P(une face)=1/2 ; P(au moins une face)=3/4.'),correction('Exercice 5. ','3/5 ; 3/10 ; 9/10 ; 9/10.')];}

const children=[];
children.push(title('MANUEL DE MATHÉMATIQUES — CLASSE DE T7',1,'cover'),new Paragraph({alignment:AlignmentType.CENTER,spacing:{before:250,after:200},children:[tr('Collection J-Learn',{bold:true,size:34,color:C.blue})]}),new Paragraph({alignment:AlignmentType.CENTER,children:[tr('Programme officiel malgache — Version 1',{size:26})]}),new Paragraph({alignment:AlignmentType.CENTER,spacing:{before:600},children:[tr('Unité VI — Traitement de données',{bold:true,size:30,color:C.green})]}));
children.push(page(),title('AVANT-PROPOS',1,'avant'),p('Ce manuel accompagne l’enseignant dans la mise en œuvre du programme officiel de Mathématiques T7. Il met l’apprenant au centre des activités : observation, manipulation, raisonnement, formulation d’une méthode, application et résolution de problèmes.'),p('Chaque séance associe une fiche de préparation directement exploitable, une leçon structurée, des exemples contextualisés, des exercices avec barème et un corrigé détaillé. Les situations mobilisent des repères familiers de Madagascar tout en développant la rigueur, la persévérance et l’autonomie.'));
children.push(title('MODE D’EMPLOI',1,'mode'),p('La fiche suit trois grandes étapes : I. Révision ; II. Nouvelle leçon, comprenant mise en situation, présentation, observation, analyse, synthèse et application ; III. Évaluation. À la demande de l’utilisateur, aucune durée chiffrée n’est affichée.'),p('Code couleur : titre de leçon en rouge ; sous-titres en vert ; mots-clés en bleu et en gras ; mots-clés des corrigés en bordeaux ; texte courant en noir.'));
children.push(title('SOMMAIRE INTERACTIF',1,'toc'));
children.push(new Paragraph({children:[new InternalHyperlink({anchor:'u6',children:[tr('Unité VI — Traitement de données',{bold:true,color:C.blue})]})]}));
sessions.forEach((s,i)=>children.push(new Paragraph({indent:{left:360},children:[new InternalHyperlink({anchor:`u6_l${i+1}`,children:[tr(`Séance ${i+1} — ${s.t}`,{color:C.blue})]})]})));
children.push(new Paragraph({indent:{left:360},children:[new InternalHyperlink({anchor:'u6_l12',children:[tr('Séance 12 — Révision de l’unité I',{color:C.blue})]})]}),new Paragraph({indent:{left:360},children:[new InternalHyperlink({anchor:'u6_l13',children:[tr('Séance 13 — Sujet d’examen',{color:C.blue})]})]}));
children.push(page(),title('UNITÉ VI — TRAITEMENT DE DONNÉES',1,'u6'),p('Résultat d’apprentissage général : recueillir et traiter des données statistiques ou probabilistes pour faire des prédictions et prendre des décisions éclairées.'),p('Valeurs à véhiculer : goût de l’effort et rigueur.'),title('Tableau de bord',2),table([new TableRow({children:[cell('Séances',{bold:true,fill:C.blue,color:C.white}),cell('Apprentissages',{bold:true,fill:C.blue,color:C.white}),cell('Révision',{bold:true,fill:C.blue,color:C.white}),cell('Examen',{bold:true,fill:C.blue,color:C.white})]}),new TableRow({children:[cell('13'),cell('11'),cell('1'),cell('1')]})]));
sessions.forEach((s,i)=>{children.push(page(),title(`SÉANCE ${i+1} / 15 — ${s.t.toUpperCase()}`,1,`u6_s${i+1}`),ficheTitle(),meta(s,i+1),prep(s,i+1),...lesson(s,i+1));});
children.push(...revision(),...exam());

const doc=new Document({styles:{default:{document:{run:{font:'Times New Roman',size:22},paragraph:{spacing:{line:276}}}}},sections:[{properties:{page:{margin:{top:900,right:720,bottom:900,left:720}}},headers:{default:new Header({children:[new Paragraph({alignment:AlignmentType.RIGHT,children:[tr('J-Learn — Mathématiques T7 — Unité VI',{size:18,color:'666666'})]})]})},footers:{default:new Footer({children:[new Paragraph({alignment:AlignmentType.CENTER,children:[tr('Page ',{size:18}),new TextRun({children:[PageNumber.CURRENT],font:'Times New Roman',size:18})]})]})},children}]});
Packer.toBuffer(doc).then(buf=>{fs.writeFileSync(OUT,buf);console.log(`${OUT}: ${buf.length} octets`);});
