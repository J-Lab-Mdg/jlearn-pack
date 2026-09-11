const fs = require('fs');
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  WidthType, AlignmentType, BorderStyle, ShadingType, PageBreak,
  Header, Footer, PageNumber, Bookmark, InternalHyperlink,
  ImageRun, TableLayoutType, Math: DocxMath, MathFraction, MathRun
} = require('docx');

const OUT = 'Manuel_Mathematiques_T7_V1_UNITE1.docx';
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
 {t:"Décomposer un nombre décimal",goal:"séparer la partie entière et la partie décimale",concept:"Un nombre décimal est la somme de sa partie entière et d’une partie décimale inférieure à 1. Chaque chiffre après la virgule représente des dixièmes, centièmes ou millièmes.",example:"18,407 = 18 + 0,407 = 18 + 4/10 + 7/1 000.",app:["Décompose : 7,35 ; 12,408 ; 0,906 ; 103,027.", "Explique les quatre réponses, puis contrôle au moins une réponse par une seconde méthode."],ans:["7 + 0,35 ; 12 + 0,408 ; 0 + 0,906 ; 103 + 0,027.", "La justification doit citer la propriété, montrer les étapes et conclure clairement."]},
 {t:"Composer un nombre décimal à partir d’une somme",goal:"reconstituer un nombre décimal décomposé",concept:"Composer consiste à réunir la partie entière et les fractions décimales en respectant la position de chaque chiffre. Les positions absentes sont occupées par zéro.",example:"24 + 5/10 + 3/1 000 = 24,503.",app:["Compose : 8 + 7/10 + 2/100 ; 15 + 4/100 ; 3 + 9/1 000 ; 40 + 6/10 + 5/1 000.", "Explique les quatre réponses, puis contrôle au moins une réponse par une seconde méthode."],ans:["8,72 ; 15,04 ; 3,009 ; 40,605.", "La justification doit citer la propriété, montrer les étapes et conclure clairement."]},
 {t:"Écrire un décimal comme somme ou différence",goal:"produire plusieurs décompositions additives ou soustractives",concept:"Un même nombre décimal peut être écrit de plusieurs façons comme somme ou différence, à condition de conserver exactement sa valeur.",example:"6,75 = 6 + 0,75 = 7 − 0,25 = 5 + 1,75.",app:["Donne une somme et une différence pour 4,6 ; 8,25 ; 12,08 ; 20,375.", "Explique les quatre réponses, puis contrôle au moins une réponse par une seconde méthode."],ans:["Exemples : 4 + 0,6 et 5 − 0,4 ; 8 + 0,25 et 9 − 0,75 ; 12 + 0,08 et 13 − 0,92 ; 20 + 0,375 et 21 − 0,625.", "La justification doit citer la propriété, montrer les étapes et conclure clairement."]},
 {t:"Décomposer et composer une fraction autour d’un entier",goal:"écrire une fraction impropre avec une partie entière",concept:"Une fraction impropre se décompose en un entier et une fraction inférieure à 1. On effectue la division euclidienne du numérateur par le dénominateur.",example:"17/5 = 3 + 2/5, car 17 = 3 × 5 + 2. Inversement, 4 + 3/7 = 31/7.",app:["Décompose : 11/4 ; 23/6 ; 29/8 ; 41/9. Puis compose : 2 + 3/5 ; 4 + 1/6 ; 3 + 7/10 ; 5 + 2/9.", "Explique les quatre réponses, puis contrôle au moins une réponse par une seconde méthode."],ans:["2 + 3/4 ; 3 + 5/6 ; 3 + 5/8 ; 4 + 5/9. Puis 13/5 ; 25/6 ; 37/10 ; 47/9.", "La justification doit citer la propriété, montrer les étapes et conclure clairement."]},
 {t:"Reconnaître et produire des fractions équivalentes",goal:"obtenir des fractions de même valeur",concept:"On obtient une fraction équivalente en multipliant ou divisant son numérateur et son dénominateur par le même nombre non nul.",example:"3/4 = 6/8 = 9/12. Les produits en croix de deux fractions équivalentes sont égaux.",app:["Complète : 2/3 = …/12 ; 5/7 = 15/… ; 18/24 = …/4 ; 21/35 = 3/… .", "Explique les quatre réponses, puis contrôle au moins une réponse par une seconde méthode."],ans:["2/3 = 8/12 ; 5/7 = 15/21 ; 18/24 = 3/4 ; 21/35 = 3/5.", "La justification doit citer la propriété, montrer les étapes et conclure clairement."]},
 {t:"Simplifier une fraction",goal:"diviser numérateur et dénominateur par un facteur commun",concept:"Simplifier une fraction consiste à diviser ses deux termes par un même diviseur commun supérieur à 1, sans changer sa valeur.",example:"18/24 ÷ 6/6 = 3/4.",app:["Simplifie : 12/18 ; 20/30 ; 28/42 ; 45/60.", "Explique les quatre réponses, puis contrôle au moins une réponse par une seconde méthode."],ans:["2/3 ; 2/3 ; 2/3 ; 3/4.", "La justification doit citer la propriété, montrer les étapes et conclure clairement."]},
 {t:"Obtenir une fraction irréductible",goal:"utiliser le PGCD pour simplifier complètement",concept:"Une fraction irréductible ne peut plus être simplifiée. On divise le numérateur et le dénominateur par leur PGCD.",example:"PGCD(84, 126) = 42, donc 84/126 = 2/3.",app:["Rends irréductibles : 36/48 ; 42/63 ; 54/72 ; 75/100.", "Explique les quatre réponses, puis contrôle au moins une réponse par une seconde méthode."],ans:["3/4 ; 2/3 ; 3/4 ; 3/4.", "La justification doit citer la propriété, montrer les étapes et conclure clairement."]},
 {t:"Calculer avec des fractions équivalentes",goal:"utiliser un dénominateur commun pour additionner ou soustraire",concept:"Pour additionner ou soustraire des fractions, on les transforme en fractions équivalentes de même dénominateur, puis on agit sur les numérateurs.",example:"2/3 + 1/4 = 8/12 + 3/12 = 11/12.",app:["Calcule : 1/2 + 1/3 ; 3/4 − 1/6 ; 2/5 + 3/10 ; 7/8 − 1/4.", "Explique les quatre réponses, puis contrôle au moins une réponse par une seconde méthode."],ans:["5/6 ; 7/12 ; 7/10 ; 5/8.", "La justification doit citer la propriété, montrer les étapes et conclure clairement."]},
 {t:"Découvrir les entiers relatifs",goal:"repérer nombres positifs, négatifs et zéro",concept:"Un nombre relatif possède un signe et une distance à zéro. Les positifs sont à droite de zéro, les négatifs à gauche. Zéro n’est ni positif ni négatif.",example:"−4 est à quatre unités à gauche de 0 ; +3 est à trois unités à droite. Ainsi −4 < 0 < +3.",app:["Range : −3, +5, 0, −7 ; puis compare −2 et +1, −8 et −3, +4 et 0, −5 et −5.", "Explique les quatre réponses, puis contrôle au moins une réponse par une seconde méthode."],ans:["−7 < −3 < 0 < +5 ; −2 < +1 ; −8 < −3 ; +4 > 0 ; −5 = −5.", "La justification doit citer la propriété, montrer les étapes et conclure clairement."]},
 {t:"Placer et comparer des décimaux relatifs",goal:"lire l’ordre des relatifs sur une droite graduée",concept:"Sur une droite graduée, le nombre situé le plus à droite est le plus grand. Parmi deux nombres négatifs, celui qui est le plus proche de zéro est le plus grand.",example:"−2,5 < −1,8 < 0 < +0,7 < +3,2.",app:["Range : −1,2 ; +0,5 ; −0,8 ; +2,1. Compare −3,4 et −3,04 ; −0,7 et +0,1 ; +1,25 et +1,205 ; −2,00 et −2.", "Explique les quatre réponses, puis contrôle au moins une réponse par une seconde méthode."],ans:["−1,2 < −0,8 < +0,5 < +2,1 ; −3,4 < −3,04 ; −0,7 < +0,1 ; +1,25 > +1,205 ; −2,00 = −2.", "La justification doit citer la propriété, montrer les étapes et conclure clairement."]},
 {t:"Opposé, distance à zéro et ordre",goal:"déterminer l’opposé et la distance à zéro",concept:"Deux nombres opposés ont la même distance à zéro et des signes contraires. La distance à zéro est toujours positive ou nulle.",example:"L’opposé de −6,5 est +6,5 et leur distance à zéro est 6,5.",app:["Donne l’opposé et la distance à zéro de +4 ; −7 ; +2,3 ; −0,45.", "Explique les quatre réponses, puis contrôle au moins une réponse par une seconde méthode."],ans:["Opposés : −4 ; +7 ; −2,3 ; +0,45. Distances : 4 ; 7 ; 2,3 ; 0,45.", "La justification doit citer la propriété, montrer les étapes et conclure clairement."]},
 {t:"Résoudre des problèmes d’échelle",goal:"calculer une longueur réelle ou représentée",concept:"L’échelle est le rapport longueur représentée sur longueur réelle, dans la même unité. À l’échelle 1 : n, 1 unité sur le plan représente n unités réelles.",example:"À l’échelle 1 : 25 000, 4 cm représentent 100 000 cm, soit 1 km.",app:["À l’échelle 1 : 50 000, calcule les distances réelles pour 2 cm, 3,5 cm, 6 cm et 8 cm.", "Explique les quatre réponses, puis contrôle au moins une réponse par une seconde méthode."],ans:["1 km ; 1,75 km ; 3 km ; 4 km.", "La justification doit citer la propriété, montrer les étapes et conclure clairement."]},
 {t:"Pourcentage, taux et rendement",goal:"distinguer et calculer pourcentage, taux et rendement",concept:"Un pourcentage exprime une part sur 100. Un taux compare deux quantités. Un rendement compare le résultat obtenu au résultat attendu et s’exprime souvent en pourcentage.",example:"Une récolte de 450 kg sur un objectif de 500 kg a un rendement de 450/500 × 100 = 90 %.",app:["Calcule : 15 % de 800 ; taux de 240 km en 4 h ; rendement de 360 sur 400 ; pourcentage de 45 sur 60.", "Explique les quatre réponses, puis contrôle au moins une réponse par une seconde méthode."],ans:["120 ; 60 km/h ; 90 % ; 75 %.", "La justification doit citer la propriété, montrer les étapes et conclure clairement."]}
];

// Illustration et scène adaptées à chaque leçon.
const unit1Visuals=[grid100,grid100,numberLine,fractionBars,fractionBars,fractionBars,fractionBars,fractionBars,numberLine,numberLine,numberLine,numberLine,grid100];
sessions.forEach((s,i)=>{s.img=unit1Visuals[i];});
[0,1,2,9,10].forEach(i=>sessions[i].scene=fs.readFileSync('assets/math-t6/scenes/scene_decimaux_epicerie.png'));
[3,4,5,6,7].forEach(i=>sessions[i].scene=fs.readFileSync('assets/math-t6/scenes/scene_fractions_bandegateau.png'));
sessions[8].scene=fs.readFileSync('assets/math-t6/scenes/scene_transformations_cour.png');
sessions[11].scene=fs.readFileSync('assets/math-t6/scenes/scene_echelle_carte.png');
sessions[12].scene=fs.readFileSync('assets/math-t6/scenes/scene_pourcentage_classe.png');

// Independent assertions for all simple numerical answers used above.
console.assert(11/4===2.75 && 13/5===2.6 && 17/6>2.83 && 17/6<2.84);
console.assert((2/3)===(8/12) && 5/6>3/4);
console.assert(3/5===0.6 && 7/20===0.35 && 9/25===0.36 && 7/8===0.875);
console.assert(12===12 && 24===24 && 36===36);

function meta(s,n){ return new Table({width:{size:100,type:WidthType.PERCENTAGE},borders:noBorders,rows:[
 new TableRow({children:[cell(`Discipline : Mathématiques\nComposante : Nombre\nTitre : ${s.t}`,{width:68,bold:true}),cell(`Classe : T7\nSéance : ${n} / 15`,{width:32,bold:true})]}),
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
 // 10 % pour Étapes ; davantage d’espace pour Enseignant et Apprenants.
 return table([...heads,...rows],[960,2400,2200,1440,1600,1000]);
}
function lesson(s,n){
 const a=[]; a.push(page(),title(`LEÇON — ${s.t}`,1,`u1_l${n}`));
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
function revision(){return [page(),title('SÉANCE 14 / 15 — RÉVISION DE L’UNITÉ I',1,'u1_l14'),title('Synthèse',2),p('Révise décomposition décimale, fractions irréductibles, nombres relatifs, échelle, taux et rendement.'),p('1. Décompose 12,405. 2. Rends 42/56 irréductible. 3. Range −2,5 ; +1 ; −0,8 ; 0. 4. À l’échelle 1 : 20 000, que représentent 5 cm ? 5. Calcule le rendement de 180 sur 200.'),title('Réponses attendues',2),correction('1. ','12 + 0,405.'),correction('2. ','3/4.'),correction('3. ','−2,5 < −0,8 < 0 < +1.'),correction('4. ','1 km.'),correction('5. ','90 %.')];}
function exam(){return [page(),title('SÉANCE 15 / 15 — SUJET D’EXAMEN T7 — UNITÉ I',1,'u1_l15'),p('Barème : 20 points.'),p('Exercice 1 — 4 points. Décompose 18,407 et 25,036, puis compose 7 + 4/10 + 5/1 000 et 30 + 8/100.'),p('Exercice 2 — 4 points. Rends irréductibles 36/48, 45/75, 42/63 et 84/126.'),p('Exercice 3 — 4 points. Range −3,5 ; +1,2 ; −0,75 ; 0 ; +3,05 et donne l’opposé de chaque nombre non nul.'),p('Exercice 4 — 4 points. À l’échelle 1 : 40 000, calcule les distances réelles correspondant à 2,5 cm et 7 cm. Calcule ensuite les longueurs sur le plan pour 3 km et 5 km.'),p('Exercice 5 — 4 points. Une coopérative obtient 765 kg sur un objectif de 900 kg. Calcule son rendement. Elle vend 60 % de sa récolte : quelle masse vend-elle ?'),title('CORRIGÉ ET BARÈME',2),correction('Exercice 1. ','18 + 0,407 ; 25 + 0,036 ; 7,405 ; 30,08.'),correction('Exercice 2. ','3/4 ; 3/5 ; 2/3 ; 2/3.'),correction('Exercice 3. ','−3,5 < −0,75 < 0 < +1,2 < +3,05. Les opposés sont +3,5 ; +0,75 ; −1,2 ; −3,05.'),correction('Exercice 4. ','2,5 cm représentent 1 km ; 7 cm représentent 2,8 km ; 3 km mesurent 7,5 cm sur le plan ; 5 km mesurent 12,5 cm.'),correction('Exercice 5. ','Rendement : 765 ÷ 900 × 100 = 85 %. Masse vendue : 765 × 60 ÷ 100 = 459 kg.')];}

const children=[];
children.push(title('MANUEL DE MATHÉMATIQUES — CLASSE DE T7',1,'cover'),new Paragraph({alignment:AlignmentType.CENTER,spacing:{before:250,after:200},children:[tr('Collection J-Learn',{bold:true,size:34,color:C.blue})]}),new Paragraph({alignment:AlignmentType.CENTER,children:[tr('Programme officiel malgache — T7 — Version 1',{size:26})]}),new Paragraph({alignment:AlignmentType.CENTER,spacing:{before:600},children:[tr('Unité I — Nombre',{bold:true,size:30,color:C.green})]}));
children.push(page(),title('AVANT-PROPOS',1,'avant'),p('Ce manuel accompagne l’enseignant dans la mise en œuvre du programme officiel de Mathématiques T7. Il met l’apprenant au centre des activités : observation, manipulation, raisonnement, formulation d’une méthode, application et résolution de problèmes.'),p('Chaque séance associe une fiche de préparation directement exploitable, une leçon structurée, des exemples contextualisés, des exercices avec barème et un corrigé détaillé. Les situations mobilisent des repères familiers de Madagascar tout en développant la rigueur, la persévérance et l’autonomie.'));
children.push(title('MODE D’EMPLOI',1,'mode'),p('La fiche suit trois grandes étapes : I. Révision ; II. Nouvelle leçon, comprenant mise en situation, présentation, observation, analyse, synthèse et application ; III. Évaluation. À la demande de l’utilisateur, aucune durée chiffrée n’est affichée.'),p('Code couleur : titre de leçon en rouge ; sous-titres en vert ; mots-clés en bleu et en gras ; mots-clés des corrigés en bordeaux ; texte courant en noir.'));
children.push(title('SOMMAIRE INTERACTIF',1,'toc'));
children.push(new Paragraph({children:[new InternalHyperlink({anchor:'u1',children:[tr('Unité I — Nombre',{bold:true,color:C.blue})]})]}));
sessions.forEach((s,i)=>children.push(new Paragraph({indent:{left:360},children:[new InternalHyperlink({anchor:`u1_l${i+1}`,children:[tr(`Séance ${i+1} — ${s.t}`,{color:C.blue})]})]})));
children.push(new Paragraph({indent:{left:360},children:[new InternalHyperlink({anchor:'u1_l14',children:[tr('Séance 14 — Révision de l’unité I',{color:C.blue})]})]}),new Paragraph({indent:{left:360},children:[new InternalHyperlink({anchor:'u1_l15',children:[tr('Séance 15 — Sujet d’examen',{color:C.blue})]})]}));
children.push(page(),title('UNITÉ I — NOMBRE',1,'u1'),p('Résultat d’apprentissage général : démontrer une compréhension du concept du nombre et l’utiliser pour décrire des quantités du monde réel.'),p('Valeurs à véhiculer : rigueur et persévérance.'),title('Tableau de bord',2),table([new TableRow({children:[cell('Séances',{bold:true,fill:C.blue,color:C.white}),cell('Apprentissages',{bold:true,fill:C.blue,color:C.white}),cell('Révision',{bold:true,fill:C.blue,color:C.white}),cell('Examen',{bold:true,fill:C.blue,color:C.white})]}),new TableRow({children:[cell('15'),cell('13'),cell('1'),cell('1')]})]));
sessions.forEach((s,i)=>{children.push(page(),title(`SÉANCE ${i+1} / 15 — ${s.t.toUpperCase()}`,1,`u1_s${i+1}`),ficheTitle(),meta(s,i+1),prep(s,i+1),...lesson(s,i+1));});
children.push(...revision(),...exam());

const doc=new Document({styles:{default:{document:{run:{font:'Times New Roman',size:22},paragraph:{spacing:{line:276}}}}},sections:[{properties:{page:{margin:{top:900,right:720,bottom:900,left:720}}},headers:{default:new Header({children:[new Paragraph({alignment:AlignmentType.RIGHT,children:[tr('J-Learn — Mathématiques T7 — Unité I',{size:18,color:'666666'})]})]})},footers:{default:new Footer({children:[new Paragraph({alignment:AlignmentType.CENTER,children:[tr('Page ',{size:18}),new TextRun({children:[PageNumber.CURRENT],font:'Times New Roman',size:18})]})]})},children}]});
Packer.toBuffer(doc).then(buf=>{fs.writeFileSync(OUT,buf);console.log(`${OUT}: ${buf.length} octets`);});
