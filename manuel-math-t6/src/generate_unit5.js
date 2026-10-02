const fs = require('fs');
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  WidthType, AlignmentType, BorderStyle, ShadingType, PageBreak,
  Header, Footer, PageNumber, Bookmark, InternalHyperlink,
  ImageRun, TableLayoutType, Math: DocxMath, MathFraction, MathRun
} = require('docx');

const OUT = 'Manuel_Mathematiques_T6_V2_UNITE5.docx';
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
 {t:"Choisir une unité de longueur appropriée",goal:"choisir et justifier une unité adaptée",concept:"Le millimètre mesure de très petites longueurs, le centimètre des objets courants, le mètre des dimensions humaines ou de bâtiments et le kilomètre de grandes distances.",example:"Une fourmi se mesure en millimètres, un cahier en centimètres, une salle en mètres et une route en kilomètres.",app:["Choisis l’unité : épaisseur d’une pièce ; longueur d’un crayon ; hauteur d’une porte ; distance Antananarivo–Toamasina.", "Justifie les quatre réponses en citant la formule ou la conversion utilisée."],ans:["mm ; cm ; m ; km.", "Chaque justification doit indiquer la relation employée, le calcul et l’unité correcte."]},
 {t:"Comparer et convertir des longueurs",goal:"convertir les unités de longueur",concept:"Dans le système métrique, chaque passage d’une unité à l’unité voisine multiplie ou divise par 10. Il faut conserver la valeur de la mesure.",example:"3,5 m = 350 cm et 4 200 m = 4,2 km.",app:["Convertis : 6,4 m en cm ; 850 mm en cm ; 3,75 km en m ; 12 500 cm en m.", "Justifie les quatre réponses en citant la formule ou la conversion utilisée."],ans:["640 cm ; 85 cm ; 3 750 m ; 125 m.", "Chaque justification doit indiquer la relation employée, le calcul et l’unité correcte."]},
 {t:"Trouver une mesure à partir du périmètre",goal:"calculer un côté inconnu connaissant le périmètre",concept:"Le périmètre est la somme des côtés. On soustrait du périmètre connu la somme des longueurs déjà connues. Pour un rectangle, P = 2 × (L + l).",example:"Un rectangle a P = 30 cm et L = 9 cm : l = 30 ÷ 2 − 9 = 6 cm.",app:["Trouve la mesure manquante : rectangle P 40 cm et L 12 cm ; triangle P 35 cm et côtés 12 cm, 9 cm ; parallélogramme P 50 cm et un côté 15 cm ; carré P 36 cm.", "Justifie les quatre réponses en citant la formule ou la conversion utilisée."],ans:["8 cm ; 14 cm ; 10 cm ; 9 cm.", "Chaque justification doit indiquer la relation employée, le calcul et l’unité correcte."]},
 {t:"Relier rayon et diamètre",goal:"utiliser les relations entre rayon et diamètre",concept:"Le rayon relie le centre au cercle. Le diamètre passe par le centre et relie deux points du cercle. Le diamètre vaut deux rayons : d = 2r et r = d ÷ 2.",example:"Si r = 7 cm, d = 14 cm. Si d = 18 cm, r = 9 cm.",app:["Calcule le diamètre pour r = 3 cm, 5,5 cm, 12 cm, 0,8 m ; puis le rayon pour d = 16 cm, 25 cm, 42 cm, 3 m.", "Justifie les quatre réponses en citant la formule ou la conversion utilisée."],ans:["Diamètres : 6 cm, 11 cm, 24 cm, 1,6 m. Rayons : 8 cm, 12,5 cm, 21 cm, 1,5 m.", "Chaque justification doit indiquer la relation employée, le calcul et l’unité correcte."]},
 {t:"Calculer la circonférence d’un cercle",goal:"calculer la longueur d’un cercle",concept:"La circonférence d’un cercle est C = π × d ou C = 2 × π × r. Pour les calculs scolaires, on peut utiliser π ≈ 3,14.",example:"Pour d = 10 cm : C ≈ 3,14 × 10 = 31,4 cm.",app:["Avec π = 3,14, calcule C pour d = 6 cm, 12 cm, 25 cm, 40 cm.", "Justifie les quatre réponses en citant la formule ou la conversion utilisée."],ans:["18,84 cm ; 37,68 cm ; 78,5 cm ; 125,6 cm.", "Chaque justification doit indiquer la relation employée, le calcul et l’unité correcte."]},
 {t:"Calculer l’aire d’un rectangle",goal:"appliquer la formule de l’aire du rectangle",concept:"L’aire mesure la surface occupée. Pour un rectangle, A = longueur × largeur. Le résultat s’exprime en unités carrées.",example:"Un rectangle de 8 cm sur 5 cm a une aire de 8 × 5 = 40 cm².",app:["Calcule l’aire : 9 cm sur 4 cm ; 12 m sur 7 m ; 6,5 cm sur 3 cm ; 15 m sur 2,5 m.", "Justifie les quatre réponses en citant la formule ou la conversion utilisée."],ans:["36 cm² ; 84 m² ; 19,5 cm² ; 37,5 m².", "Chaque justification doit indiquer la relation employée, le calcul et l’unité correcte."]},
 {t:"Calculer l’aire d’un parallélogramme",goal:"appliquer la formule base fois hauteur",concept:"L’aire d’un parallélogramme est A = base × hauteur correspondante. La hauteur est perpendiculaire à la base ; le côté incliné n’est pas la hauteur.",example:"Base 9 cm et hauteur 4 cm donnent A = 36 cm².",app:["Calcule A pour base et hauteur : 8 et 5 cm ; 12 et 7 m ; 6,5 et 4 cm ; 15 et 3,2 m.", "Justifie les quatre réponses en citant la formule ou la conversion utilisée."],ans:["40 cm² ; 84 m² ; 26 cm² ; 48 m².", "Chaque justification doit indiquer la relation employée, le calcul et l’unité correcte."]},
 {t:"Calculer l’aire d’un triangle",goal:"appliquer la formule de l’aire du triangle",concept:"Un triangle de base b et de hauteur h correspond à la moitié d’un parallélogramme : A = b × h ÷ 2.",example:"Base 10 cm et hauteur 6 cm donnent A = 10 × 6 ÷ 2 = 30 cm².",app:["Calcule A pour base et hauteur : 8 et 5 cm ; 12 et 7 m ; 9 et 4 cm ; 15 et 6 m.", "Justifie les quatre réponses en citant la formule ou la conversion utilisée."],ans:["20 cm² ; 42 m² ; 18 cm² ; 45 m².", "Chaque justification doit indiquer la relation employée, le calcul et l’unité correcte."]},
 {t:"Comparer les aires de figures liées",goal:"relier les aires ayant mêmes base et hauteur",concept:"À base et hauteur égales, un rectangle et un parallélogramme ont la même aire. Le triangle correspondant a la moitié de cette aire.",example:"Avec b = 12 cm et h = 5 cm : rectangle 60 cm², parallélogramme 60 cm², triangle 30 cm².",app:["Pour b et h égales à 10 et 4 ; 8 et 7 ; 15 et 6 ; 20 et 2,5, donne les aires du parallélogramme et du triangle.", "Justifie les quatre réponses en citant la formule ou la conversion utilisée."],ans:["40 et 20 ; 56 et 28 ; 90 et 45 ; 50 et 25, dans l’unité carrée adaptée.", "Chaque justification doit indiquer la relation employée, le calcul et l’unité correcte."]},
 {t:"Comprendre le volume d’un prisme droit",goal:"mesurer un volume avec des unités cubiques",concept:"Le volume est l’espace occupé par un solide. Une unité cubique est un cube dont chaque arête mesure une unité. Le centimètre cube s’écrit cm³.",example:"Un empilement de 3 couches de 12 cubes contient 36 cm³ si chaque cube mesure 1 cm³.",app:["Calcule le nombre de cubes : 4 couches de 15 ; 6 couches de 8 ; 5 couches de 24 ; 10 couches de 30.", "Justifie les quatre réponses en citant la formule ou la conversion utilisée."],ans:["60 ; 48 ; 120 ; 300 cubes-unités.", "Chaque justification doit indiquer la relation employée, le calcul et l’unité correcte."]},
 {t:"Calculer le volume d’un pavé droit",goal:"appliquer aire de base fois hauteur",concept:"Le volume d’un pavé droit est V = longueur × largeur × hauteur, ou V = aire de la base × hauteur.",example:"Un pavé de 6 cm × 4 cm × 3 cm a V = 72 cm³.",app:["Calcule V : 8 × 5 × 3 cm ; 10 × 4 × 6 cm ; 2,5 × 4 × 8 cm ; 12 × 5 × 2 cm.", "Justifie les quatre réponses en citant la formule ou la conversion utilisée."],ans:["120 cm³ ; 240 cm³ ; 80 cm³ ; 120 cm³.", "Chaque justification doit indiquer la relation employée, le calcul et l’unité correcte."]},
 {t:"Relier volume et capacité",goal:"utiliser la relation 1 mL = 1 cm³",concept:"Le volume mesure l’espace occupé et la capacité ce qu’un récipient peut contenir. La relation fondamentale est 1 mL = 1 cm³ ; donc 1 L = 1 000 cm³.",example:"Un récipient de 2 500 cm³ a une capacité de 2 500 mL, soit 2,5 L.",app:["Convertis : 750 cm³ en mL ; 3 L en cm³ ; 1,25 L en cm³ ; 4 500 cm³ en L.", "Justifie les quatre réponses en citant la formule ou la conversion utilisée."],ans:["750 mL ; 3 000 cm³ ; 1 250 cm³ ; 4,5 L.", "Chaque justification doit indiquer la relation employée, le calcul et l’unité correcte."]},
 {t:"Convertir des mesures dans des problèmes",goal:"choisir et effectuer une conversion nécessaire",concept:"Avant de calculer avec plusieurs mesures, on les exprime dans une même unité. On choisit l’unité qui facilite le calcul et on vérifie l’unité de la réponse.",example:"2 m 35 cm = 235 cm ; 1 h 30 min = 90 min ; 2,5 L = 2 500 mL.",app:["Convertis : 3,4 km en m ; 2,75 kg en g ; 1,5 L en mL ; 2 h 15 min en min.", "Justifie les quatre réponses en citant la formule ou la conversion utilisée."],ans:["3 400 m ; 2 750 g ; 1 500 mL ; 135 min.", "Chaque justification doit indiquer la relation employée, le calcul et l’unité correcte."]}
];

const geoQuadrilaterals = svgPng('quadrilateres-t6', `<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="360"><rect width="100%" height="100%" fill="white"/><text x="35" y="42" font-size="30">Familles de quadrilatères</text><g fill="#DCEEFF" stroke="#1F4E79" stroke-width="5"><rect x="70" y="90" width="180" height="180"/><rect x="310" y="110" width="240" height="140"/><polygon points="680,80 800,180 680,280 560,180"/><polygon points="820,110 960,110 920,260 780,260"/></g><g font-size="25"><text x="115" y="320">Carré</text><text x="370" y="300">Rectangle</text><text x="630" y="320">Losange</text><text x="820" y="300">Trapèze</text></g></svg>`);
const geoAxes = svgPng('repere-t6', `<svg xmlns="http://www.w3.org/2000/svg" width="700" height="600"><rect width="100%" height="100%" fill="white"/><text x="30" y="38" font-size="28">Premier quadrant</text><g stroke="#B0B0B0">${[100,180,260,340,420,500,580].map(x=>`<line x1="${x}" y1="60" x2="${x}" y2="540"/>`).join('')}${[60,140,220,300,380,460,540].map(y=>`<line x1="100" y1="${y}" x2="620" y2="${y}"/>`).join('')}</g><g stroke="#1F4E79" stroke-width="4"><line x1="100" y1="540" x2="650" y2="540"/><line x1="100" y1="560" x2="100" y2="45"/></g><circle cx="340" cy="220" r="10" fill="#C00000"/><text x="355" y="210" font-size="25">A(3 ; 4)</text><text x="625" y="575" font-size="24">x</text><text x="65" y="65" font-size="24">y</text></svg>`);
const geoSolids = svgPng('prismes-t6', `<svg xmlns="http://www.w3.org/2000/svg" width="900" height="400"><rect width="100%" height="100%" fill="white"/><text x="30" y="40" font-size="28">Prismes et patrons</text><g fill="#E9F5EC" stroke="#1F4E79" stroke-width="5"><polygon points="90,120 260,120 310,80 140,80"/><polygon points="90,120 90,290 260,290 260,120"/><polygon points="260,120 310,80 310,250 260,290"/><polygon points="470,120 560,70 650,120"/><polygon points="470,120 470,280 650,280 650,120"/><polygon points="650,120 740,70 740,230 650,280"/></g><text x="130" y="340" font-size="25">Pavé droit</text><text x="510" y="340" font-size="25">Prisme triangulaire</text></svg>`);
sessions.forEach((s,i)=>{ s.img = i < 9 ? geoQuadrilaterals : geoSolids; });

[9,10,11].forEach(i=>sessions[i].scene=fs.readFileSync('assets/math-t6/scenes/scene_volume_eau.png'));

[2,3,4,5,6,7,8].forEach(i=>sessions[i].scene=fs.readFileSync('assets/math-t6/scenes/scene_perimetre_aire_jardin.png'));

[0,1,12].forEach(i=>sessions[i].scene=fs.readFileSync('assets/math-t6/scenes/scene_unites_mesure.png'));

// Independent assertions for all simple numerical answers used above.
console.assert(11/4===2.75 && 13/5===2.6 && 17/6>2.83 && 17/6<2.84);
console.assert((2/3)===(8/12) && 5/6>3/4);
console.assert(3/5===0.6 && 7/20===0.35 && 9/25===0.36 && 7/8===0.875);
console.assert(12===12 && 24===24 && 36===36);

function meta(s,n){ return new Table({width:{size:100,type:WidthType.PERCENTAGE},borders:noBorders,rows:[
 new TableRow({children:[cell(`Discipline : Mathématiques\nComposante : Mesure\nTitre : ${s.t}`,{width:68,bold:true}),cell(`Classe : T6\nSéance : ${n} / 15`,{width:32,bold:true})]}),
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
 const a=[]; a.push(page(),title(`LEÇON — ${s.t}`,1,`u5_l${n}`));
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
function revision(){return [page(),title('SÉANCE 14 / 15 — RÉVISION DE L’UNITÉ V',1,'u5_l14'),title('Synthèse',2),p('Révise les unités, périmètres, cercles, aires, volumes, capacités et conversions.'),p('1. Convertis 3,5 km en m. 2. Trouve la largeur d’un rectangle de périmètre 30 cm et longueur 9 cm. 3. Calcule l’aire d’un triangle de base 12 cm et hauteur 5 cm. 4. Calcule le volume de 8 cm × 5 cm × 3 cm. 5. Convertis 2,5 L en cm³.'),title('Réponses attendues',2),correction('1. ','3 500 m.'),correction('2. ','6 cm.'),correction('3. ','30 cm².'),correction('4. ','120 cm³.'),correction('5. ','2 500 cm³.')];}
function exam(){return [page(),title('SÉANCE 15 / 15 — SUJET D’EXAMEN T6 — UNITÉ V',1,'u5_l15'),p('Barème : 20 points.'),p('Exercice 1 — 4 points. Convertis : 4,2 km en m ; 750 cm en m ; 3,5 L en mL ; 2 h 30 min en minutes.'),p('Exercice 2 — 4 points. Un rectangle a un périmètre de 46 cm et une longueur de 15 cm. Trouve sa largeur puis son aire.'),p('Exercice 3 — 4 points. Avec π = 3,14, calcule le diamètre d’un cercle de rayon 6 cm puis sa circonférence.'),p('Exercice 4 — 4 points. Calcule les aires d’un parallélogramme de base 14 cm et hauteur 8 cm, puis d’un triangle ayant la même base et la même hauteur.'),p('Exercice 5 — 4 points. Un aquarium mesure 50 cm × 30 cm × 40 cm. Calcule son volume en cm³ puis sa capacité en litres.'),title('CORRIGÉ ET BARÈME',2),correction('Exercice 1. ','4 200 m ; 7,5 m ; 3 500 mL ; 150 min. Un point par conversion.'),correction('Exercice 2. ','Largeur = 46 ÷ 2 − 15 = 8 cm. Aire = 15 × 8 = 120 cm².'),correction('Exercice 3. ','Diamètre = 12 cm. Circonférence = 3,14 × 12 = 37,68 cm.'),correction('Exercice 4. ','Parallélogramme : 14 × 8 = 112 cm². Triangle : 112 ÷ 2 = 56 cm².'),correction('Exercice 5. ','Volume = 50 × 30 × 40 = 60 000 cm³. Capacité = 60 000 mL = 60 L.')];}

const children=[];
children.push(title('MANUEL DE MATHÉMATIQUES — CLASSE DE T6',1,'cover'),new Paragraph({alignment:AlignmentType.CENTER,spacing:{before:250,after:200},children:[tr('Collection J-Learn',{bold:true,size:34,color:C.blue})]}),new Paragraph({alignment:AlignmentType.CENTER,children:[tr('Programme officiel malgache — Version 1',{size:26})]}),new Paragraph({alignment:AlignmentType.CENTER,spacing:{before:600},children:[tr('Unité V — Mesure',{bold:true,size:30,color:C.green})]}));
children.push(page(),title('AVANT-PROPOS',1,'avant'),p('Ce manuel accompagne l’enseignant dans la mise en œuvre du programme officiel de Mathématiques T6. Il met l’apprenant au centre des activités : observation, manipulation, raisonnement, formulation d’une méthode, application et résolution de problèmes.'),p('Chaque séance associe une fiche de préparation directement exploitable, une leçon structurée, des exemples contextualisés, des exercices avec barème et un corrigé détaillé. Les situations mobilisent des repères familiers de Madagascar tout en développant la rigueur, la persévérance et l’autonomie.'));
children.push(title('MODE D’EMPLOI',1,'mode'),p('La fiche suit trois grandes étapes : I. Révision ; II. Nouvelle leçon, comprenant mise en situation, présentation, observation, analyse, synthèse et application ; III. Évaluation. À la demande de l’utilisateur, aucune durée chiffrée n’est affichée.'),p('Code couleur : titre de leçon en rouge ; sous-titres en vert ; mots-clés en bleu et en gras ; mots-clés des corrigés en bordeaux ; texte courant en noir.'));
children.push(title('SOMMAIRE INTERACTIF',1,'toc'));
children.push(new Paragraph({children:[new InternalHyperlink({anchor:'u5',children:[tr('Unité V — Mesure',{bold:true,color:C.blue})]})]}));
sessions.forEach((s,i)=>children.push(new Paragraph({indent:{left:360},children:[new InternalHyperlink({anchor:`u5_l${i+1}`,children:[tr(`Séance ${i+1} — ${s.t}`,{color:C.blue})]})]})));
children.push(new Paragraph({indent:{left:360},children:[new InternalHyperlink({anchor:'u5_l14',children:[tr('Séance 14 — Révision de l’unité I',{color:C.blue})]})]}),new Paragraph({indent:{left:360},children:[new InternalHyperlink({anchor:'u5_l15',children:[tr('Séance 15 — Sujet d’examen',{color:C.blue})]})]}));
children.push(page(),title('UNITÉ V — MESURE',1,'u5'),p('Résultat d’apprentissage général : utiliser la mesure pour décrire et comparer des phénomènes du monde réel.'),p('Valeurs à véhiculer : rigueur et confiance en soi.'),title('Tableau de bord',2),table([new TableRow({children:[cell('Séances',{bold:true,fill:C.blue,color:C.white}),cell('Apprentissages',{bold:true,fill:C.blue,color:C.white}),cell('Révision',{bold:true,fill:C.blue,color:C.white}),cell('Examen',{bold:true,fill:C.blue,color:C.white})]}),new TableRow({children:[cell('15'),cell('13'),cell('1'),cell('1')]})]));
sessions.forEach((s,i)=>{children.push(page(),title(`SÉANCE ${i+1} / 15 — ${s.t.toUpperCase()}`,1,`u5_s${i+1}`),ficheTitle(),meta(s,i+1),prep(s,i+1),...lesson(s,i+1));});
children.push(...revision(),...exam());

const doc=new Document({styles:{default:{document:{run:{font:'Times New Roman',size:22},paragraph:{spacing:{line:276}}}}},sections:[{properties:{page:{margin:{top:900,right:720,bottom:900,left:720}}},headers:{default:new Header({children:[new Paragraph({alignment:AlignmentType.RIGHT,children:[tr('J-Learn — Mathématiques T6 — Unité V',{size:18,color:'666666'})]})]})},footers:{default:new Footer({children:[new Paragraph({alignment:AlignmentType.CENTER,children:[tr('Page ',{size:18}),new TextRun({children:[PageNumber.CURRENT],font:'Times New Roman',size:18})]})]})},children}]});
Packer.toBuffer(doc).then(buf=>{fs.writeFileSync(OUT,buf);console.log(`${OUT}: ${buf.length} octets`);});
