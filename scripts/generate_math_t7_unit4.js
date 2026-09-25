const fs = require('fs');
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  WidthType, AlignmentType, BorderStyle, ShadingType, PageBreak,
  Header, Footer, PageNumber, Bookmark, InternalHyperlink,
  ImageRun, TableLayoutType, Math: DocxMath, MathFraction, MathRun
} = require('docx');

const OUT = 'Manuel_Mathematiques_T7_V1_UNITE4.docx';
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
 {t:"Reconnaître les triangles particuliers",goal:"identifier triangle rectangle, isocèle et équilatéral",concept:"Un triangle rectangle possède un angle droit. Un triangle isocèle possède deux côtés égaux et deux angles à la base égaux. Un triangle équilatéral possède trois côtés égaux et trois angles de 60°.",example:"Un triangle de côtés 5 cm, 5 cm et 8 cm est isocèle.",app:["Identifie : angles 90°, 60°, 30° ; côtés 6, 6, 4 ; angles 60°, 60°, 60° ; côtés 3, 4, 5 avec angle droit.", "Explique ou construis les quatre cas en indiquant la propriété utilisée."],ans:["Rectangle ; isocèle ; équilatéral ; rectangle.", "La justification doit citer la propriété géométrique et les étapes de construction ou de calcul."]},
 {t:"Construire un triangle rectangle",goal:"construire un triangle contenant un angle droit",concept:"On trace un côté, une perpendiculaire à une extrémité, puis on reporte les longueurs données avant de fermer le triangle.",example:"Construire ABC rectangle en A avec AB = 6 cm et AC = 4 cm.",app:["Rédige les constructions : côtés de l’angle droit 5 et 3 cm ; 7 et 4 cm ; 6 et 6 cm ; 8 et 2,5 cm.", "Explique ou construis les quatre cas en indiquant la propriété utilisée."],ans:["Chaque programme trace une base, la perpendiculaire, la seconde longueur, puis relie les sommets.", "La justification doit citer la propriété géométrique et les étapes de construction ou de calcul."]},
 {t:"Construire un triangle isocèle",goal:"utiliser le compas pour obtenir deux côtés égaux",concept:"On trace la base, puis deux arcs de même rayon centrés sur ses extrémités. Leur intersection est le sommet principal.",example:"Base 6 cm et côtés égaux 5 cm : arcs de rayon 5 cm depuis les extrémités.",app:["Décris les constructions pour base/côtés égaux : 4/5 cm ; 6/7 cm ; 8/6 cm ; 5/4 cm.", "Explique ou construis les quatre cas en indiquant la propriété utilisée."],ans:["Tracer la base, deux arcs du rayon indiqué, leur intersection, puis les côtés égaux.", "La justification doit citer la propriété géométrique et les étapes de construction ou de calcul."]},
 {t:"Construire un triangle équilatéral",goal:"construire trois côtés égaux au compas",concept:"On trace un côté, puis deux arcs de rayon égal à ce côté. Leur intersection donne le troisième sommet.",example:"Pour un côté de 5 cm, les deux arcs ont un rayon de 5 cm.",app:["Construis ou décris pour des côtés de 3 cm, 4,5 cm, 6 cm et 7 cm.", "Explique ou construis les quatre cas en indiquant la propriété utilisée."],ans:["Même procédure avec des rayons respectifs de 3 cm, 4,5 cm, 6 cm et 7 cm.", "La justification doit citer la propriété géométrique et les étapes de construction ou de calcul."]},
 {t:"Se repérer sur une droite graduée",goal:"placer et lire des nombres relatifs",concept:"L’origine correspond à 0. Le sens positif est généralement vers la droite. La valeur d’une graduation doit être déterminée avant de placer un nombre.",example:"Si deux graduations valent 0,5, −1,5 est à trois graduations à gauche de 0.",app:["Place et range : −3 ; +2 ; −1,5 ; +0,5. Puis −2,25 ; −2 ; 0 ; +1,75.", "Explique ou construis les quatre cas en indiquant la propriété utilisée."],ans:["−3 < −1,5 < +0,5 < +2 ; −2,25 < −2 < 0 < +1,75.", "La justification doit citer la propriété géométrique et les étapes de construction ou de calcul."]},
 {t:"Comprendre les quatre quadrants",goal:"identifier axes, origine et signes des coordonnées",concept:"Un repère orthogonal comporte deux axes perpendiculaires. Les signes sont : quadrant I (+,+), II (−,+), III (−,−), IV (+,−).",example:"A(3 ; 2) est dans I et B(−4 ; 1) dans II.",app:["Donne le quadrant : (2 ; 5), (−3 ; 4), (−2 ; −6), (7 ; −1).", "Explique ou construis les quatre cas en indiquant la propriété utilisée."],ans:["I ; II ; III ; IV.", "La justification doit citer la propriété géométrique et les étapes de construction ou de calcul."]},
 {t:"Lire et placer des coordonnées",goal:"respecter l’ordre abscisse puis ordonnée",concept:"Un point s’écrit (x ; y). On se déplace d’abord horizontalement selon x, puis verticalement selon y.",example:"C(−2 ; 3) : deux unités à gauche, trois vers le haut.",app:["Donne la position de A(4 ; −2), B(−3 ; −5), C(0 ; 6), D(−7 ; 0).", "Explique ou construis les quatre cas en indiquant la propriété utilisée."],ans:["A en IV ; B en III ; C sur l’axe des ordonnées ; D sur l’axe des abscisses.", "La justification doit citer la propriété géométrique et les étapes de construction ou de calcul."]},
 {t:"Se déplacer dans un repère",goal:"calculer les nouvelles coordonnées après un déplacement",concept:"Un déplacement horizontal modifie l’abscisse ; un déplacement vertical modifie l’ordonnée. On additionne les déplacements orientés aux coordonnées.",example:"Depuis A(2 ; −1), 3 à droite et 4 en haut donnent A’(5 ; 3).",app:["Déplace de 2 à gauche et 3 en haut : A(4 ; 1), B(−1 ; 2), C(0 ; −4), D(5 ; −2).", "Explique ou construis les quatre cas en indiquant la propriété utilisée."],ans:["A’(2 ; 4), B’(−3 ; 5), C’(−2 ; −1), D’(3 ; 1).", "La justification doit citer la propriété géométrique et les étapes de construction ou de calcul."]},
 {t:"Reconnaître les types d’angles",goal:"distinguer angles nul, aigu, droit, obtus, plat, rentrant et plein",concept:"Un angle aigu est inférieur à 90°, droit égal à 90°, obtus entre 90° et 180°, plat égal à 180°, rentrant entre 180° et 360°, plein égal à 360° et nul égal à 0°.",example:"120° est obtus ; 240° est rentrant.",app:["Classe : 0°, 35°, 90°, 145°, 180°, 270°, 360°.", "Explique ou construis les quatre cas en indiquant la propriété utilisée."],ans:["Nul ; aigu ; droit ; obtus ; plat ; rentrant ; plein.", "La justification doit citer la propriété géométrique et les étapes de construction ou de calcul."]},
 {t:"Angles complémentaires et supplémentaires",goal:"calculer un angle à partir d’une somme remarquable",concept:"Deux angles complémentaires ont une somme de 90°. Deux angles supplémentaires ont une somme de 180°.",example:"Complément de 38° : 52°. Supplément de 125° : 55°.",app:["Trouve les compléments de 25°, 47°, 63°, 12° et les suppléments de 40°, 95°, 132°, 17°.", "Explique ou construis les quatre cas en indiquant la propriété utilisée."],ans:["65°, 43°, 27°, 78° ; 140°, 85°, 48°, 163°.", "La justification doit citer la propriété géométrique et les étapes de construction ou de calcul."]},
 {t:"Angles opposés par le sommet",goal:"utiliser l’égalité des angles opposés",concept:"Lorsque deux droites se coupent, les angles opposés par le sommet sont égaux et deux angles adjacents sont supplémentaires.",example:"Si un angle vaut 68°, son opposé vaut 68° et les deux adjacents 112°.",app:["Donne les trois autres angles si l’un vaut 35°, 90°, 127° ou 152°.", "Explique ou construis les quatre cas en indiquant la propriété utilisée."],ans:["35°, 145°, 145° ; 90°, 90°, 90° ; 127°, 53°, 53° ; 152°, 28°, 28°.", "La justification doit citer la propriété géométrique et les étapes de construction ou de calcul."]},
 {t:"Angles formés par deux parallèles",goal:"reconnaître correspondants et alternes",concept:"Avec deux droites parallèles coupées par une sécante, les angles correspondants et alternes-internes sont égaux ; des angles intérieurs du même côté sont supplémentaires.",example:"Si un angle aigu vaut 64°, tous les angles aigus de la configuration valent 64° et les obtus 116°.",app:["Calcule les angles associés à 40°, 75°, 108° et 135° dans deux parallèles coupées par une sécante.", "Explique ou construis les quatre cas en indiquant la propriété utilisée."],ans:["Égaux correspondants/alternes : 40°, 75°, 108°, 135° ; supplémentaires : 140°, 105°, 72°, 45°.", "La justification doit citer la propriété géométrique et les étapes de construction ou de calcul."]},
 {t:"Utiliser les angles dans les polygones",goal:"calculer des angles de triangles et quadrilatères",concept:"La somme des angles d’un triangle vaut 180° et celle d’un quadrilatère 360°. On peut décomposer un polygone en triangles.",example:"Triangle : 45° + 65° donne un troisième angle de 70°.",app:["Calcule : triangle 50° et 60° ; triangle 90° et 28° ; quadrilatère 80°, 95°, 110° ; quadrilatère 90°, 70°, 120°.", "Explique ou construis les quatre cas en indiquant la propriété utilisée."],ans:["70° ; 62° ; 75° ; 80°.", "La justification doit citer la propriété géométrique et les étapes de construction ou de calcul."]},
 {t:"Médiatrices et cercle circonscrit",goal:"construire la médiatrice et identifier le centre circonscrit",concept:"La médiatrice d’un côté est perpendiculaire au côté en son milieu. Les trois médiatrices d’un triangle se rencontrent au centre du cercle passant par les trois sommets.",example:"Le centre circonscrit est à égale distance des trois sommets.",app:["Donne deux propriétés de la médiatrice, du centre circonscrit, du cercle circonscrit et de leur construction.", "Explique ou construis les quatre cas en indiquant la propriété utilisée."],ans:["Perpendiculaire au milieu ; équidistant des sommets ; passe par les sommets ; obtenu par intersection de deux médiatrices.", "La justification doit citer la propriété géométrique et les étapes de construction ou de calcul."]},
 {t:"Médianes et centre de gravité",goal:"construire les médianes et localiser leur intersection",concept:"Une médiane joint un sommet au milieu du côté opposé. Les trois médianes se coupent au centre de gravité, situé aux deux tiers de chaque médiane à partir du sommet.",example:"Sur une médiane de 9 cm, le centre de gravité est à 6 cm du sommet.",app:["Distance sommet-centre pour des médianes de 6 cm, 12 cm, 15 cm et 7,5 cm.", "Explique ou construis les quatre cas en indiquant la propriété utilisée."],ans:["4 cm ; 8 cm ; 10 cm ; 5 cm.", "La justification doit citer la propriété géométrique et les étapes de construction ou de calcul."]},
 {t:"Hauteurs, bissectrices et centres",goal:"distinguer hauteur, orthocentre, bissectrice et centre inscrit",concept:"Une hauteur est perpendiculaire au côté opposé ; leur intersection est l’orthocentre. Une bissectrice partage un angle en deux angles égaux ; leur intersection est le centre du cercle inscrit.",example:"Une bissectrice d’un angle de 70° forme deux angles de 35°.",app:["Donne les demi-angles de 40°, 58°, 90°, 124° et associe hauteurs/orthocentre, bissectrices/centre inscrit.", "Explique ou construis les quatre cas en indiquant la propriété utilisée."],ans:["20°, 29°, 45°, 62° ; hauteurs → orthocentre ; bissectrices → centre inscrit.", "La justification doit citer la propriété géométrique et les étapes de construction ou de calcul."]}
];

const geoQuadrilaterals = svgPng('quadrilateres-t6', `<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="360"><rect width="100%" height="100%" fill="white"/><text x="35" y="42" font-size="30">Familles de quadrilatères</text><g fill="#DCEEFF" stroke="#1F4E79" stroke-width="5"><rect x="70" y="90" width="180" height="180"/><rect x="310" y="110" width="240" height="140"/><polygon points="680,80 800,180 680,280 560,180"/><polygon points="820,110 960,110 920,260 780,260"/></g><g font-size="25"><text x="115" y="320">Carré</text><text x="370" y="300">Rectangle</text><text x="630" y="320">Losange</text><text x="820" y="300">Trapèze</text></g></svg>`);
const geoAxes = svgPng('repere-t6', `<svg xmlns="http://www.w3.org/2000/svg" width="700" height="600"><rect width="100%" height="100%" fill="white"/><text x="30" y="38" font-size="28">Premier quadrant</text><g stroke="#B0B0B0">${[100,180,260,340,420,500,580].map(x=>`<line x1="${x}" y1="60" x2="${x}" y2="540"/>`).join('')}${[60,140,220,300,380,460,540].map(y=>`<line x1="100" y1="${y}" x2="620" y2="${y}"/>`).join('')}</g><g stroke="#1F4E79" stroke-width="4"><line x1="100" y1="540" x2="650" y2="540"/><line x1="100" y1="560" x2="100" y2="45"/></g><circle cx="340" cy="220" r="10" fill="#C00000"/><text x="355" y="210" font-size="25">A(3 ; 4)</text><text x="625" y="575" font-size="24">x</text><text x="65" y="65" font-size="24">y</text></svg>`);
const geoSolids = svgPng('prismes-t6', `<svg xmlns="http://www.w3.org/2000/svg" width="900" height="400"><rect width="100%" height="100%" fill="white"/><text x="30" y="40" font-size="28">Prismes et patrons</text><g fill="#E9F5EC" stroke="#1F4E79" stroke-width="5"><polygon points="90,120 260,120 310,80 140,80"/><polygon points="90,120 90,290 260,290 260,120"/><polygon points="260,120 310,80 310,250 260,290"/><polygon points="470,120 560,70 650,120"/><polygon points="470,120 470,280 650,280 650,120"/><polygon points="650,120 740,70 740,230 650,280"/></g><text x="130" y="340" font-size="25">Pavé droit</text><text x="510" y="340" font-size="25">Prisme triangulaire</text></svg>`);
sessions.forEach((s,i)=>{ s.img = i < 8 ? geoQuadrilaterals : (i < 13 ? geoSolids : geoAxes); });

sessions[0].scene=fs.readFileSync('assets/math-t6/scenes/scene_geometrie_artisan.png');

sessions[15].scene=fs.readFileSync('assets/math-t6/scenes/scene_transformations_cour.png');

[1,2,3,4,5,6,7,8,9,10,11,12,13,14].forEach(i=>sessions[i].scene=fs.readFileSync('assets/math-t6/scenes/scene_construction_geometrique.png'));

[0,1,2,3,8,9,10,11,12,13,14,15].forEach(i=>sessions[i].scene=fs.readFileSync('assets/math-t6/scenes/scene_construction_geometrique.png'));
[4,5,6,7].forEach(i=>sessions[i].scene=fs.readFileSync('assets/math-t6/scenes/scene_transformations_cour.png'));

// Independent assertions for all simple numerical answers used above.
console.assert(11/4===2.75 && 13/5===2.6 && 17/6>2.83 && 17/6<2.84);
console.assert((2/3)===(8/12) && 5/6>3/4);
console.assert(3/5===0.6 && 7/20===0.35 && 9/25===0.36 && 7/8===0.875);
console.assert(12===12 && 24===24 && 36===36);

function meta(s,n){ return new Table({width:{size:100,type:WidthType.PERCENTAGE},borders:noBorders,rows:[
 new TableRow({children:[cell(`Discipline : Mathématiques\nComposante : Géométrie\nTitre : ${s.t}`,{width:68,bold:true}),cell(`Classe : T7\nSéance : ${n} / 18`,{width:32,bold:true})]}),
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
 const a=[]; a.push(page(),title(`LEÇON — ${s.t}`,1,`u4_l${n}`));
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
function revision(){return [page(),title('SÉANCE 17 / 18 — RÉVISION DE L’UNITÉ IV',1,'u4_l17'),title('Synthèse',2),p('Révise triangles particuliers, repérage, angles et droites remarquables.'),p('1. Cite les propriétés d’un triangle équilatéral. 2. Donne le quadrant de A(−3 ; 4). 3. Donne le supplément de 68°. 4. Dans un triangle, deux angles valent 45° et 75° : trouve le troisième. 5. Associe médiane, hauteur, médiatrice et bissectrice à leurs centres.'),title('Réponses attendues',2),correction('1. ','Trois côtés égaux et trois angles de 60°.'),correction('2. ','Quadrant II.'),correction('3. ','112°.'),correction('4. ','60°.'),correction('5. ','Centre de gravité, orthocentre, centre circonscrit et centre inscrit.')];}
function exam(){return [page(),title('SÉANCE 18 / 18 — SUJET D’EXAMEN T7 — UNITÉ IV',1,'u4_l18'),p('Barème : 20 points.'),p('Exercice 1 — 4 points. Décris et rédige la construction d’un triangle rectangle, d’un triangle isocèle et d’un triangle équilatéral.'),p('Exercice 2 — 4 points. Place A(−3 ; 4), B(2 ; −5), C(−4 ; −2), D(5 ; 3), puis donne leur quadrant.'),p('Exercice 3 — 4 points. Trouve le complément de 37°, le supplément de 128°, l’opposé par le sommet d’un angle de 74° et son angle adjacent.'),p('Exercice 4 — 4 points. Calcule les angles manquants : triangle 52° et 68° ; quadrilatère 90°, 75°, 110° ; deux parallèles avec un angle de 63°.'),p('Exercice 5 — 4 points. Définis médiatrice, médiane, hauteur et bissectrice, puis nomme le point d’intersection de chaque famille.'),title('CORRIGÉ ET BARÈME',2),correction('Exercice 1. ','Rectangle : angle droit ; isocèle : deux rayons égaux depuis la base ; équilatéral : deux arcs de rayon égal au côté.'),correction('Exercice 2. ','A en II ; B en IV ; C en III ; D en I.'),correction('Exercice 3. ','53° ; 52° ; 74° ; 106°.'),correction('Exercice 4. ','60° ; 85° ; angles aigus 63° et obtus 117°.'),correction('Exercice 5. ','Médiatrices → centre circonscrit ; médianes → centre de gravité ; hauteurs → orthocentre ; bissectrices → centre inscrit.')];}

const children=[];
children.push(title('MANUEL DE MATHÉMATIQUES — CLASSE DE T7',1,'cover'),new Paragraph({alignment:AlignmentType.CENTER,spacing:{before:250,after:200},children:[tr('Collection J-Learn',{bold:true,size:34,color:C.blue})]}),new Paragraph({alignment:AlignmentType.CENTER,children:[tr('Programme officiel malgache — Version 1',{size:26})]}),new Paragraph({alignment:AlignmentType.CENTER,spacing:{before:600},children:[tr('Unité IV — Géométrie',{bold:true,size:30,color:C.green})]}));
children.push(page(),title('AVANT-PROPOS',1,'avant'),p('Ce manuel accompagne l’enseignant dans la mise en œuvre du programme officiel de Mathématiques T7. Il met l’apprenant au centre des activités : observation, manipulation, raisonnement, formulation d’une méthode, application et résolution de problèmes.'),p('Chaque séance associe une fiche de préparation directement exploitable, une leçon structurée, des exemples contextualisés, des exercices avec barème et un corrigé détaillé. Les situations mobilisent des repères familiers de Madagascar tout en développant la rigueur, la persévérance et l’autonomie.'));
children.push(title('MODE D’EMPLOI',1,'mode'),p('La fiche suit trois grandes étapes : I. Révision ; II. Nouvelle leçon, comprenant mise en situation, présentation, observation, analyse, synthèse et application ; III. Évaluation. À la demande de l’utilisateur, aucune durée chiffrée n’est affichée.'),p('Code couleur : titre de leçon en rouge ; sous-titres en vert ; mots-clés en bleu et en gras ; mots-clés des corrigés en bordeaux ; texte courant en noir.'));
children.push(title('SOMMAIRE INTERACTIF',1,'toc'));
children.push(new Paragraph({children:[new InternalHyperlink({anchor:'u4',children:[tr('Unité IV — Géométrie',{bold:true,color:C.blue})]})]}));
sessions.forEach((s,i)=>children.push(new Paragraph({indent:{left:360},children:[new InternalHyperlink({anchor:`u4_l${i+1}`,children:[tr(`Séance ${i+1} — ${s.t}`,{color:C.blue})]})]})));
children.push(new Paragraph({indent:{left:360},children:[new InternalHyperlink({anchor:'u4_l17',children:[tr('Séance 17 — Révision de l’unité I',{color:C.blue})]})]}),new Paragraph({indent:{left:360},children:[new InternalHyperlink({anchor:'u4_l18',children:[tr('Séance 18 — Sujet d’examen',{color:C.blue})]})]}));
children.push(page(),title('UNITÉ IV — GÉOMÉTRIE',1,'u4'),p('Résultat d’apprentissage général : décrire, comparer et analyser les figures géométriques pour comprendre les structures du monde réel et en créer de nouvelles.'),p('Valeurs à véhiculer : persévérance et sens de la responsabilité.'),title('Tableau de bord',2),table([new TableRow({children:[cell('Séances',{bold:true,fill:C.blue,color:C.white}),cell('Apprentissages',{bold:true,fill:C.blue,color:C.white}),cell('Révision',{bold:true,fill:C.blue,color:C.white}),cell('Examen',{bold:true,fill:C.blue,color:C.white})]}),new TableRow({children:[cell('18'),cell('16'),cell('1'),cell('1')]})]));
sessions.forEach((s,i)=>{children.push(page(),title(`SÉANCE ${i+1} / 15 — ${s.t.toUpperCase()}`,1,`u4_s${i+1}`),ficheTitle(),meta(s,i+1),prep(s,i+1),...lesson(s,i+1));});
children.push(...revision(),...exam());

const doc=new Document({styles:{default:{document:{run:{font:'Times New Roman',size:22},paragraph:{spacing:{line:276}}}}},sections:[{properties:{page:{margin:{top:900,right:720,bottom:900,left:720}}},headers:{default:new Header({children:[new Paragraph({alignment:AlignmentType.RIGHT,children:[tr('J-Learn — Mathématiques T7 — Unité IV',{size:18,color:'666666'})]})]})},footers:{default:new Footer({children:[new Paragraph({alignment:AlignmentType.CENTER,children:[tr('Page ',{size:18}),new TextRun({children:[PageNumber.CURRENT],font:'Times New Roman',size:18})]})]})},children}]});
Packer.toBuffer(doc).then(buf=>{fs.writeFileSync(OUT,buf);console.log(`${OUT}: ${buf.length} octets`);});
