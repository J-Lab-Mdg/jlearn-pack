// make-svg-images.js — schémas techniques SVG → PNG pour l'Unité II (électricité) et l'Unité III (chaleur)
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");
const IMG = path.join(__dirname, "..", "images");

// ---------- primitives SVG circuits ----------
const NS = `xmlns="http://www.w3.org/2000/svg"`;
const STYLE = `font-family="Georgia, 'Times New Roman', serif"`;

function svgDoc(w, h, inner, bg = "#FDFBF6") {
  return `<svg ${NS} width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" ${STYLE}>
<rect width="${w}" height="${h}" fill="${bg}"/>${inner}</svg>`;
}
const line = (x1,y1,x2,y2,c="#1a1a1a",sw=3) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${c}" stroke-width="${sw}"/>`;
const circle = (cx,cy,r,fill="none",c="#1a1a1a",sw=3) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" stroke="${c}" stroke-width="${sw}"/>`;
const text = (x,y,t,size=20,c="#1a1a1a",anchor="middle",w="normal") => `<text x="${x}" y="${y}" font-size="${size}" fill="${c}" text-anchor="${anchor}" font-weight="${w}">${t}</text>`;
const rect = (x,y,w,h,fill="none",c="#1a1a1a",sw=3,rx=0) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${fill}" stroke="${c}" stroke-width="${sw}" rx="${rx}"/>`;

// Symbole pile (2 traits) horizontal, centré en (cx,cy), fil de part et d'autre géré par l'appelant
function pileH(cx, cy, label = "Pile") {
  return line(cx-8, cy-22, cx-8, cy+22) + `<line x1="${cx+8}" y1="${cy-12}" x2="${cx+8}" y2="${cy+12}" stroke="#1a1a1a" stroke-width="7"/>`
    + text(cx-8, cy-32, "+", 24, "#C00000", "middle", "bold")
    + text(cx+10, cy-32, "−", 24, "#1F4E79", "middle", "bold")
    + (label ? text(cx, cy+48, label, 19) : "");
}
// Symbole lampe : cercle avec croix
function lampe(cx, cy, r = 20, label = "") {
  const k = r * 0.7071;
  return circle(cx, cy, r) + line(cx-k, cy-k, cx+k, cy+k) + line(cx-k, cy+k, cx+k, cy-k)
    + (label ? text(cx, cy + r + 26, label, 19) : "");
}
// Interrupteur fermé/ouvert sur fil horizontal entre x1 et x2 à hauteur y
function interrupteur(x1, y, open = false, label = "") {
  const x2 = x1 + 46;
  const dot = (x,yy) => circle(x, yy, 4, "#1a1a1a");
  const lever = open
    ? line(x1, y, x2 - 10, y - 26)
    : line(x1, y, x2, y);
  return dot(x1, y) + dot(x2, y) + lever + (label ? text((x1+x2)/2, y + 32, label, 18) : "");
}
// Fusible : rectangle avec trait au milieu
function fusible(cx, cy, label = "Fusible") {
  return rect(cx-30, cy-12, 60, 24) + line(cx-30, cy, cx+30, cy, "#1a1a1a", 2)
    + (label ? text(cx, cy+40, label, 18) : "");
}
// Appareil de mesure : cercle avec lettre
function mesure(cx, cy, lettre, label = "") {
  return circle(cx, cy, 22) + text(cx, cy+8, lettre, 24, "#1a1a1a", "middle", "bold")
    + (label ? text(cx, cy+50, label, 18) : "");
}
// Flèche de sens du courant sur un fil horizontal (pointe vers +x si dir=1)
function fleche(cx, cy, dir = 1, c = "#C00000", label = "I") {
  const d = 12 * dir;
  return `<polygon points="${cx+d},${cy} ${cx-d},${cy-8} ${cx-d},${cy+8}" fill="${c}"/>`
    + (label ? text(cx, cy - 14, label, 19, c, "middle", "bold") : "");
}

// ---------- S11 : circuit simple ----------
function s11() {
  let g = "";
  // rectangle de circuit 140,60 -> 660,300
  g += line(140,60,660,60) + line(660,60,660,300) + line(140,300,660,300) + line(140,60,140,140) + line(140,220,140,300);
  g += pileH(140, 180, ""); // pile verticale : dessiner manuellement
  g = "";
  // fils
  g += line(120,80,680,80);           // haut
  g += line(680,80,680,280);          // droite
  g += line(120,280,680,280);         // bas
  g += line(120,80,120,150) + line(120,210,120,280); // gauche avec trou pour pile
  // pile verticale à gauche
  g += line(98,150,142,150) + `<line x1="108" y1="210" x2="132" y2="210" stroke="#1a1a1a" stroke-width="7"/>`;
  g += line(120,150,120,150);
  g += text(88,158,"+",26,"#C00000","middle","bold") + text(88,214,"−",26,"#1F4E79","middle","bold");
  g += text(60,186,"Pile",20);
  // interrupteur en haut
  g += interrupteur(360,80,false,"Interrupteur fermé");
  // lampe à droite au milieu
  g += lampe(680,180,24) + text(742,186,"Lampe",20,"#1a1a1a","middle");
  // rayons de la lampe allumée
  for (let a = 0; a < 8; a++) {
    const ang = a * Math.PI / 4;
    g += line(680 + 30*Math.cos(ang), 180 + 30*Math.sin(ang), 680 + 42*Math.cos(ang), 180 + 42*Math.sin(ang), "#E6A817", 3);
  }
  g += text(400,340,"Circuit électrique simple : pile, fils de connexion, interrupteur et lampe",21);
  return svgDoc(800,370,g);
}

// ---------- S12 : symboles normalisés ----------
function s12() {
  let g = "";
  const col1 = 210, col2 = 570;
  g += text(400,40,"Symboles normalisés des composants électriques",23,"#1a1a1a","middle","bold");
  // Pile
  g += pileH(col1,125,"") ; g += line(col1-70,125,col1-8,125) + line(col1+8,125,col1+70,125);
  g += text(col2,131,"Pile (générateur)",22,"#1a1a1a","start");
  // Lampe
  g += line(110,190,186,190) + lampe(210,190,22) + line(234,190,310,190);
  g += text(col2,196,"Lampe",22,"#1a1a1a","start");
  // Interrupteur fermé
  g += line(120,270,187,270) + interrupteur(187,270,false) + line(233,270,310,270);
  g += text(col2,276,"Interrupteur fermé",22,"#1a1a1a","start");
  // Interrupteur ouvert
  g += line(120,350,187,350) + interrupteur(187,350,true) + line(233,350,310,350);
  g += text(col2,356,"Interrupteur ouvert",22,"#1a1a1a","start");
  // Fil
  g += line(120,430,310,430);
  g += text(col2,436,"Fil de connexion",22,"#1a1a1a","start");
  // Fusible
  g += line(120,510,180,510) + fusible(210,510,"") + line(240,510,310,510);
  g += text(col2,516,"Fusible",22,"#1a1a1a","start");
  // séparation
  g += line(90,62,710,62,"#999",1);
  for (const y of [170,230,310,390,470]) g += line(90,y,710,y,"#DDD",1);
  return svgDoc(800,560,g);
}

// ---------- S13 : sens conventionnel ----------
function s13() {
  let g = "";
  g += line(120,80,680,80) + line(680,80,680,280) + line(120,280,680,280);
  g += line(120,80,120,150) + line(120,210,120,280);
  g += line(98,150,142,150) + `<line x1="108" y1="210" x2="132" y2="210" stroke="#1a1a1a" stroke-width="7"/>`;
  g += text(88,158,"+",26,"#C00000","middle","bold") + text(88,214,"−",26,"#1F4E79","middle","bold");
  g += text(58,186,"Pile",20);
  g += lampe(400,80,22) + text(400,36,"Lampe",19);
  // flèches sens conventionnel : de + vers − à l'extérieur
  g += fleche(250,80,1) + fleche(560,80,1,"#C00000","") + fleche(680,180,1,"#C00000","") ;
  // flèche verticale sur fil droit (vers le bas)
  g = g.replace(`<polygon points="692,180 668,172 668,188" fill="#C00000"/>`,"");
  // simple : mettre flèche bas à droite via rotation manuelle
  g += `<polygon points="680,190 672,170 688,170" fill="#C00000"/>`;
  g += fleche(430,280,-1,"#C00000","") + fleche(250,280,-1,"#C00000","I");
  g += text(400,330,"Le courant électrique circule, à l'extérieur du générateur,",21);
  g += text(400,356,"de la borne + vers la borne − : c'est le sens conventionnel.",21);
  return svgDoc(800,390,g);
}

// ---------- S14 : deux lampes en série ----------
function s14() {
  let g = "";
  g += line(120,80,680,80) + line(680,80,680,280) + line(120,280,680,280);
  g += line(120,80,120,150) + line(120,210,120,280);
  g += line(98,150,142,150) + `<line x1="108" y1="210" x2="132" y2="210" stroke="#1a1a1a" stroke-width="7"/>`;
  g += text(88,158,"+",26,"#C00000","middle","bold") + text(88,214,"−",26,"#1F4E79","middle","bold");
  g += text(58,186,"Pile",20);
  // deux lampes sur le fil du haut
  g += lampe(320,80,22,"L1") + lampe(500,80,22,"L2");
  g += interrupteur(600,280,false,"");
  g += text(400,340,"Deux lampes montées en série : elles forment une seule boucle.",21);
  g += text(400,366,"Si une lampe grille, l'autre s'éteint aussi.",21);
  return svgDoc(800,400,g);
}

// ---------- S15 : deux lampes en dérivation ----------
function s15() {
  let g = "";
  g += line(120,80,680,80) + line(680,80,680,320) + line(120,320,680,320);
  g += line(120,80,120,170) + line(120,230,120,320);
  g += line(98,170,142,170) + `<line x1="108" y1="230" x2="132" y2="230" stroke="#1a1a1a" stroke-width="7"/>`;
  g += text(88,178,"+",26,"#C00000","middle","bold") + text(88,234,"−",26,"#1F4E79","middle","bold");
  g += text(58,206,"Pile",20);
  // noeuds A (340,80) et B (340,320) ; branches verticales avec lampes
  g += line(340,80,340,320) ; // branche 1 (au milieu, on remplace le fil par 2 branches)
  g = "";
  g += line(120,80,620,80) + line(120,320,620,320);
  g += line(120,80,120,170) + line(120,230,120,320);
  g += line(98,170,142,170) + `<line x1="108" y1="230" x2="132" y2="230" stroke="#1a1a1a" stroke-width="7"/>`;
  g += text(88,178,"+",26,"#C00000","middle","bold") + text(88,234,"−",26,"#1F4E79","middle","bold");
  g += text(58,206,"Pile",20);
  // branche 1 : x=420
  g += line(420,80,420,178) + lampe(420,200,22,"") + line(420,222,420,320) + text(462,206,"L1",20);
  // branche 2 : x=620
  g += line(620,80,620,178) + lampe(620,200,22,"") + line(620,222,620,320) + text(662,206,"L2",20);
  // points de noeud
  g += circle(420,80,5,"#1a1a1a") + circle(620,80,5,"#1a1a1a") + circle(420,320,5,"#1a1a1a") + circle(620,320,5,"#1a1a1a");
  g += text(400,372,"Deux lampes montées en dérivation : chaque lampe a sa propre boucle.",21);
  g += text(400,398,"Si une lampe grille, l'autre reste allumée.",21);
  return svgDoc(800,430,g);
}

// ---------- S16 : comparaison série / dérivation ----------
function s16() {
  let g = "";
  // Série (gauche)
  g += text(200,40,"Montage en série",22,"#1a1a1a","middle","bold");
  g += line(70,90,330,90) + line(330,90,330,230) + line(70,230,330,230);
  g += line(70,90,70,135) + line(70,185,70,230);
  g += line(56,135,84,135) + `<line x1="62" y1="185" x2="78" y2="185" stroke="#1a1a1a" stroke-width="6"/>`;
  g += text(44,143,"+",20,"#C00000","middle","bold") + text(44,190,"−",20,"#1F4E79","middle","bold");
  g += lampe(160,90,16,"") + lampe(250,90,16,"") + text(160,60,"L1",17) + text(250,60,"L2",17);
  // Dérivation (droite)
  g += text(600,40,"Montage en dérivation",22,"#1a1a1a","middle","bold");
  g += line(470,90,730,90) + line(470,230,730,230);
  g += line(470,90,470,135) + line(470,185,470,230);
  g += line(456,135,484,135) + `<line x1="462" y1="185" x2="478" y2="185" stroke="#1a1a1a" stroke-width="6"/>`;
  g += text(444,143,"+",20,"#C00000","middle","bold") + text(444,190,"−",20,"#1F4E79","middle","bold");
  g += line(580,90,580,144) + lampe(580,160,16,"") + line(580,176,580,230) + text(608,166,"L1",17);
  g += line(700,90,700,144) + lampe(700,160,16,"") + line(700,176,700,230) + text(728,166,"L2",17);
  g += circle(580,90,4,"#1a1a1a") + circle(700,90,4,"#1a1a1a") + circle(580,230,4,"#1a1a1a") + circle(700,230,4,"#1a1a1a");
  g += line(400,60,400,250,"#999",1);
  g += text(200,280,"Une seule boucle : si L1 grille,",19) + text(200,302,"L2 s'éteint.",19);
  g += text(600,280,"Deux boucles : si L1 grille,",19) + text(600,302,"L2 reste allumée.",19);
  return svgDoc(800,330,g);
}

// ---------- S17 : fusible ----------
function s17() {
  let g = "";
  g += line(120,80,680,80) + line(680,80,680,280) + line(120,280,680,280);
  g += line(120,80,120,150) + line(120,210,120,280);
  g += line(98,150,142,150) + `<line x1="108" y1="210" x2="132" y2="210" stroke="#1a1a1a" stroke-width="7"/>`;
  g += text(88,158,"+",26,"#C00000","middle","bold") + text(88,214,"−",26,"#1F4E79","middle","bold");
  g += text(58,186,"Pile",20);
  g += fusible(300,80,"Fusible");
  g += lampe(680,180,22) + text(736,186,"Lampe",19);
  g += interrupteur(480,80,false,"");
  g += text(400,336,"Le fusible protège le circuit : si le courant devient trop fort,",21);
  g += text(400,362,"son fil fond et le circuit est coupé.",21);
  return svgDoc(800,395,g);
}

// ---------- S18 : dangers du courant du secteur ----------
function s18() {
  let g = "";
  g += text(400,42,"Les dangers du courant du secteur (220 V)",23,"#C00000","middle","bold");
  // Picto 1 : prise avec doigt barré
  g += rect(90,90,150,150,"#FFF",1.5,10);
  g += circle(165,155,38,"#F2E8DC") + circle(150,150,6,"#1a1a1a") + circle(180,150,6,"#1a1a1a");
  g += line(105,105,225,225,"#C00000",7);
  g += text(165,272,"Ne jamais toucher les",17) + text(165,292,"trous d'une prise",17);
  // Picto 2 : appareil + eau barré
  g += rect(325,90,150,150,"#FFF",1.5,10);
  g += rect(355,130,60,70,"#DDD") + text(385,172,"~",30);
  g += `<path d="M 440 130 q 10 20 0 34 q -10 -14 0 -34 Z" fill="#1F4E79"/>`;
  g += `<path d="M 452 160 q 10 20 0 34 q -10 -14 0 -34 Z" fill="#1F4E79"/>`;
  g += line(340,105,460,225,"#C00000",7);
  g += text(400,272,"Jamais d'appareil",17) + text(400,292,"électrique près de l'eau",17);
  // Picto 3 : fil dénudé barré
  g += rect(560,90,150,150,"#FFF",1.5,10);
  g += line(580,165,640,165,"#1a1a1a",10) + line(640,165,690,165,"#B87333",4);
  g += line(575,105,695,225,"#C00000",7);
  g += text(635,272,"Ne jamais toucher",17) + text(635,292,"un fil dénudé",17);
  return svgDoc(800,320,g);
}

// ---------- S19 : pannes ----------
function s19() {
  let g = "";
  // circuit avec coupure et lampe grillée
  g += line(120,90,360,90); // coupure entre 360 et 420
  g += line(420,90,680,90);
  g += line(680,90,680,290) + line(120,290,680,290);
  g += line(120,90,120,160) + line(120,220,120,290);
  g += line(98,160,142,160) + `<line x1="108" y1="220" x2="132" y2="220" stroke="#1a1a1a" stroke-width="7"/>`;
  g += text(88,168,"+",26,"#C00000","middle","bold") + text(88,224,"−",26,"#1F4E79","middle","bold");
  g += text(58,196,"Pile",20);
  g += text(390,70,"Fil coupé",19,"#C00000");
  g += `<path d="M 360 90 l 12 -8 l 0 16 Z" fill="#C00000"/>` + `<path d="M 420 90 l -12 -8 l 0 16 Z" fill="#C00000"/>`;
  // lampe grillée : croix cassée
  g += lampe(680,190,22) + line(660,168,700,212,"#C00000",3);
  g += text(680,240,"Lampe grillée",19);
  g += text(400,340,"Deux pannes courantes : le fil coupé (le circuit est ouvert)",21);
  g += text(400,366,"et la lampe grillée (son filament est cassé).",21);
  return svgDoc(800,400,g);
}

// ---------- S20 : ampèremètre et voltmètre ----------
function s20() {
  let g = "";
  g += line(120,80,680,80) + line(680,80,680,300) + line(120,300,680,300);
  g += line(120,80,120,155) + line(120,225,120,300);
  g += line(98,155,142,155) + `<line x1="108" y1="225" x2="132" y2="225" stroke="#1a1a1a" stroke-width="7"/>`;
  g += text(88,163,"+",26,"#C00000","middle","bold") + text(88,229,"−",26,"#1F4E79","middle","bold");
  g += text(58,192,"Pile",20);
  // Ampèremètre en série sur fil du haut
  g += mesure(300,80,"A") + text(300,36,"Ampèremètre (en série)",19);
  // Lampe à droite
  g += lampe(680,190,22);
  g += text(730,196,"Lampe",19,"#1a1a1a","start");
  // Voltmètre en dérivation aux bornes de la lampe
  g += line(560,110,560,168,"#1a1a1a",2) + line(560,212,560,270,"#1a1a1a",2);
  g += line(560,110,680,110,"#1a1a1a",2) + line(560,270,680,270,"#1a1a1a",2);
  g += mesure(560,190,"V") + text(528,146,"Voltmètre",19,"#1a1a1a","end") ;
  g += text(528,170,"(en dérivation)",18,"#1a1a1a","end");
  g += circle(680,110,5,"#1a1a1a") + circle(680,270,5,"#1a1a1a");
  g += text(400,352,"L'ampèremètre se branche en série ; il mesure l'intensité en ampères (A).",20);
  g += text(400,378,"Le voltmètre se branche en dérivation ; il mesure la tension en volts (V).",20);
  return svgDoc(800,410,g);
}

// ---------- S22/S23 : thermomètre + eau chaude/froide ----------
function s23() {
  let g = "";
  // thermomètre
  const tx = 150;
  g += rect(tx-12, 60, 24, 240, "#FFF", 2.5, 12);
  g += circle(tx, 320, 26, "#C00000", "#1a1a1a", 2.5);
  g += rect(tx-5, 130, 10, 190, "#C00000", "none", 0);
  for (let i = 0; i < 9; i++) g += line(tx+12, 80+i*25, tx+22, 80+i*25, "#1a1a1a", 2);
  g += text(tx, 385, "Thermomètre", 20);
  // bol eau chaude
  g += `<path d="M 320 220 q 10 90 90 90 q 80 0 90 -90 Z" fill="#F6D8C3" stroke="#1a1a1a" stroke-width="2.5"/>`;
  g += `<path d="M 380 190 q 8 -18 0 -34 M 410 195 q 8 -18 0 -34 M 440 190 q 8 -18 0 -34" stroke="#999" stroke-width="3" fill="none"/>`;
  g += text(410, 345, "Eau chaude", 20) + text(410, 368, "(température élevée)", 18);
  // bol eau froide avec glaçons
  g += `<path d="M 560 220 q 10 90 90 90 q 80 0 90 -90 Z" fill="#D7E8F7" stroke="#1a1a1a" stroke-width="2.5"/>`;
  g += rect(600, 228, 26, 26, "#EFF7FF", "#8FB8D8", 2, 4) + rect(650, 236, 24, 24, "#EFF7FF", "#8FB8D8", 2, 4);
  g += text(650, 345, "Eau froide", 20) + text(650, 368, "(température basse)", 18);
  return svgDoc(800, 400, g);
}

// ---------- S24 : conducteurs thermiques ----------
function s24() {
  let g = "";
  // casserole
  g += `<path d="M 220 180 L 240 340 L 560 340 L 580 180 Z" fill="#C9CDD3" stroke="#1a1a1a" stroke-width="3"/>`;
  g += line(180,180,620,180,"#1a1a1a",4);
  // eau chaude + vapeur
  g += `<path d="M 232 210 L 244 320 L 556 320 L 568 210 Z" fill="#F6D8C3"/>`;
  g += `<path d="M 330 160 q 8 -20 0 -38 M 400 165 q 8 -20 0 -38 M 470 160 q 8 -20 0 -38" stroke="#999" stroke-width="3.5" fill="none"/>`;
  // cuillère métal
  g += line(300,220,260,80,"#8A8F98",9) + `<ellipse cx="304" cy="232" rx="16" ry="24" fill="#8A8F98"/>`;
  g += text(238,58,"Métal",20) + text(238,80,"(brûlant)",17,"#C00000");
  // cuillère bois
  g += line(410,220,410,70,"#B98A50",9) + `<ellipse cx="410" cy="232" rx="15" ry="22" fill="#B98A50"/>`;
  g += text(410,48,"Bois",20) + text(410,68,"(reste froid)",17,"#1E7B34");
  // baguette plastique
  g += line(510,220,552,80,"#3D74B8",9);
  g += text(576,58,"Plastique",20) + text(576,80,"(reste froid)",17,"#1E7B34");
  g += text(400,392,"Le métal conduit bien la chaleur ; le bois et le plastique la conduisent mal.",20);
  return svgDoc(800,420,g);
}

// ---------- S25 : conduction ----------
function s25() {
  let g = "";
  // barre métallique chauffée à une extrémité
  g += `<defs><linearGradient id="heat" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#E23A00"/><stop offset="0.45" stop-color="#F08C3A"/><stop offset="1" stop-color="#9AA0A8"/>
  </linearGradient></defs>`;
  g += rect(180, 150, 480, 36, "url(#heat)", "#1a1a1a", 2.5, 4);
  // bougie
  g += rect(160, 250, 26, 90, "#F2E3C2", "#1a1a1a", 2, 3);
  g += `<path d="M 173 218 q 12 16 0 30 q -12 -14 0 -30 Z" fill="#F0A31F" stroke="#C00000" stroke-width="1.5"/>`;
  g += line(173, 240, 173, 252, "#1a1a1a", 2);
  g += text(173, 368, "Bougie", 19);
  // flèches de propagation
  for (const x of [280, 380, 480]) g += `<polygon points="${x+16},168 ${x-8},158 ${x-8},178" fill="#C00000"/>`;
  g += text(420, 120, "La chaleur se propage de proche en proche dans la barre", 20);
  // main à l'autre bout
  g += circle(690, 168, 24, "#F2E0CC", "#1a1a1a", 2) + text(690, 226, "Main", 19);
  g += text(400, 400, "La conduction : transfert de chaleur de proche en proche, sans déplacement de matière.", 19);
  return svgDoc(800, 430, g);
}

// ---------- S26 : convection ----------
function s26() {
  let g = "";
  // casserole sur feu
  g += `<path d="M 250 130 L 265 340 L 535 340 L 550 130 Z" fill="#C9CDD3" stroke="#1a1a1a" stroke-width="3"/>`;
  g += `<path d="M 262 160 L 274 322 L 526 322 L 538 160 Z" fill="#D7E8F7"/>`;
  // flammes
  for (const x of [320, 400, 480]) {
    g += `<path d="M ${x} 400 q -14 -26 0 -46 q 14 20 0 46 Z" fill="#F0A31F" stroke="#E23A00" stroke-width="2"/>`;
  }
  g += line(240, 402, 560, 402, "#1a1a1a", 4);
  // courants de convection : flèches circulaires
  g += `<path d="M 340 310 q -30 -60 0 -120 q 20 -30 60 -30" stroke="#C00000" stroke-width="3.5" fill="none"/>`;
  g += `<polygon points="404,158 386,150 388,170" fill="#C00000"/>`;
  g += `<path d="M 460 170 q 30 60 0 120 q -20 30 -60 30" stroke="#1F4E79" stroke-width="3.5" fill="none"/>`;
  g += `<polygon points="396,322 414,330 412,310" fill="#1F4E79"/>`;
  g += text(660, 200, "L'eau chaude monte,", 20, "#C00000", "middle");
  g += text(660, 226, "l'eau froide descend :", 20, "#1F4E79", "middle");
  g += text(660, 252, "c'est la convection.", 20);
  return svgDoc(800, 340, `<g transform="translate(0,-90)">${g}</g>`);
}

// ---------- S27 : rayonnement ----------
function s27() {
  let g = "";
  // soleil
  g += circle(150, 130, 55, "#F5C542", "#E6A817", 3);
  for (let a = 0; a < 12; a++) {
    const ang = a * Math.PI / 6;
    g += line(150 + 66*Math.cos(ang), 130 + 66*Math.sin(ang), 150 + 90*Math.cos(ang), 130 + 90*Math.sin(ang), "#E6A817", 4);
  }
  g += text(150, 250, "Soleil", 21);
  // rayons vers la personne
  for (const dy of [-24, 0, 24]) {
    g += line(250, 130+dy, 520, 220+dy, "#F0A31F", 3);
    g += `<polygon points="${532},${226+dy} ${512},${212+dy} ${508},${230+dy}" fill="#F0A31F"/>`;
  }
  // personne
  g += circle(590, 190, 26, "#F2E0CC", "#1a1a1a", 2.5);
  g += line(590, 216, 590, 310, "#1a1a1a", 4);
  g += line(590, 245, 550, 285, "#1a1a1a", 4) + line(590, 245, 630, 285, "#1a1a1a", 4);
  g += line(590, 310, 560, 380, "#1a1a1a", 4) + line(590, 310, 620, 380, "#1a1a1a", 4);
  g += text(590, 420, "On sent la chaleur du Soleil sans le toucher", 20);
  g += text(400, 460, "Le rayonnement : la chaleur est transmise à distance, sans contact et sans matière.", 19);
  return svgDoc(800, 490, g);
}

// ---------- S28 : isolants / pertes ----------
function s28() {
  let g = "";
  // tasse sans couvercle : vapeur qui s'échappe
  g += `<path d="M 150 200 q 6 110 80 110 q 74 0 80 -110 Z" fill="#FFF" stroke="#1a1a1a" stroke-width="3"/>`;
  g += `<path d="M 200 170 q 10 -22 0 -42 M 230 175 q 10 -22 0 -42 M 260 170 q 10 -22 0 -42" stroke="#999" stroke-width="3.5" fill="none"/>`;
  g += text(230, 350, "Tasse ouverte :", 20) + text(230, 374, "la chaleur s'échappe vite", 19, "#C00000");
  // récipient isolé (couvercle + paroi épaisse)
  g += `<path d="M 480 190 q 6 120 90 120 q 84 0 90 -120 Z" fill="#E8DFCE" stroke="#1a1a1a" stroke-width="7"/>`;
  g += rect(470, 172, 200, 20, "#B98A50", "#1a1a1a", 2.5, 6);
  g += rect(548, 152, 44, 20, "#B98A50", "#1a1a1a", 2.5, 6);
  g += text(570, 350, "Récipient couvert et isolé :", 20) + text(570, 374, "la chaleur est conservée", 19, "#1E7B34");
  g += text(400, 424, "Un isolant thermique et un couvercle réduisent la perte de chaleur.", 20);
  return svgDoc(800, 455, g);
}

// ---------- S29 : thermos en coupe ----------
function s29() {
  let g = "";
  g += text(400, 44, "Une bouteille thermos vue en coupe", 23, "#1a1a1a", "middle", "bold");
  // paroi externe
  g += rect(280, 90, 240, 340, "#C9CDD3", "#1a1a1a", 3, 18);
  // vide entre parois
  g += rect(304, 114, 192, 292, "#FDFBF6", "#1a1a1a", 2, 14);
  // paroi interne réfléchissante
  g += rect(326, 136, 148, 248, "#EFF3F8", "#8FB8D8", 2.5, 10);
  // liquide chaud
  g += rect(338, 200, 124, 172, "#F6D8C3", "none", 0, 8);
  // bouchon
  g += rect(300, 62, 200, 30, "#B98A50", "#1a1a1a", 2.5, 8);
  // légendes
  g += line(520, 100, 596, 100, "#666", 1.5) + text(604, 106, "Bouchon isolant", 19, "#1a1a1a", "start");
  g += line(500, 128, 596, 148, "#666", 1.5) + text(604, 154, "Vide entre les parois", 19, "#1a1a1a", "start");
  g += line(474, 260, 596, 240, "#666", 1.5) + text(604, 246, "Paroi réfléchissante", 19, "#1a1a1a", "start");
  g += line(462, 330, 596, 320, "#666", 1.5) + text(604, 326, "Boisson chaude", 19, "#1a1a1a", "start");
  g += text(420, 470, "Le vide, la paroi réfléchissante et le bouchon isolant réduisent la perte de chaleur.", 19);
  return svgDoc(840, 500, g);
}

// ---------- S30 : dilatation des solides (boule et anneau) ----------
function s30() {
  let g = "";
  g += text(230, 46, "Boule froide", 21) + text(590, 46, "Boule chauffée", 21);
  // avant : boule passe dans l'anneau
  g += `<ellipse cx="230" cy="200" rx="70" ry="16" fill="none" stroke="#1a1a1a" stroke-width="5"/>`;
  g += circle(230, 130, 44, "#9AA0A8", "#1a1a1a", 2.5);
  g += `<polygon points="230,182 220,158 240,158" fill="#1E7B34"/>`;
  g += text(230, 260, "La boule passe dans l'anneau", 19, "#1E7B34");
  // après : boule dilatée ne passe plus
  g += `<ellipse cx="590" cy="200" rx="70" ry="16" fill="none" stroke="#1a1a1a" stroke-width="5"/>`;
  g += circle(590, 130, 52, "#E8896B", "#C00000", 2.5);
  // flammes sous la boule chauffée
  g += `<path d="M 560 96 q -10 -20 0 -34 q 10 14 0 34 Z" fill="#F0A31F"/>`;
  g += line(560, 130, 620, 190, "#C00000", 0);
  g += `<line x1="556" y1="186" x2="624" y2="186" stroke="#C00000" stroke-width="5"/>`;
  g += text(590, 260, "La boule dilatée ne passe plus", 19, "#C00000");
  g += text(400, 316, "Chauffée, la boule métallique se dilate : son volume augmente.", 20);
  return svgDoc(800, 350, g);
}

// ---------- S31 : dilatation des liquides / thermomètre artisanal ----------
function s31() {
  let g = "";
  g += text(400, 40, "Un thermomètre artisanal : la dilatation d'un liquide", 22, "#1a1a1a", "middle", "bold");
  // bouteille avec eau colorée + paille, dans un bol d'eau chaude
  g += `<path d="M 250 330 q 10 80 110 80 q 100 0 110 -80 Z" fill="#F6D8C3" stroke="#1a1a1a" stroke-width="2.5"/>`;
  g += rect(310, 200, 100, 150, "#FFF", "#1a1a1a", 2.5, 10);
  g += rect(318, 250, 84, 92, "#C9E4F5", "none", 0, 6);
  // bouchon + paille
  g += rect(340, 182, 40, 20, "#B98A50", "#1a1a1a", 2, 4);
  g += rect(352, 80, 16, 110, "#FFF", "#1a1a1a", 2, 6);
  g += rect(355, 110, 10, 78, "#3D74B8", "none", 0, 4);
  g += `<polygon points="360,96 350,116 370,116" fill="#3D74B8"/>`;
  g += text(430, 100, "Le niveau monte dans la paille", 19, "#3D74B8", "start");
  g += text(430, 126, "quand l'eau se réchauffe", 19, "#3D74B8", "start");
  g += line(422, 106, 372, 106, "#666", 1.5);
  g += text(360, 448, "Bouteille + paille + eau colorée = thermomètre artisanal", 19);
  g += text(400, 478, "Chauffé, le liquide se dilate et monte dans la paille : c'est la dilatation des liquides.", 19);
  return svgDoc(800, 505, g);
}

// ---------- Tableau périodique simplifié (annexe) ----------
function periodique() {
  const W = 1180, H = 640;
  let g = "";
  g += text(W/2, 44, "Tableau périodique simplifié des éléments", 30, "#1a1a1a", "middle", "bold");
  const CW = 60, CH = 60, X0 = 40, Y0 = 80;
  // positions [symbol, name?, Z, col(1-18), row(1-7), highlight]
  const els = [
    ["H",1,1,1,1],["He",2,18,1,0],
    ["Li",3,1,2,0],["Be",4,2,2,0],["B",5,13,2,0],["C",6,14,2,1],["N",7,15,2,1],["O",8,16,2,1],["F",9,17,2,0],["Ne",10,18,2,0],
    ["Na",11,1,3,0],["Mg",12,2,3,0],["Al",13,13,3,0],["Si",14,14,3,0],["P",15,15,3,0],["S",16,16,3,0],["Cl",17,17,3,0],["Ar",18,18,3,0],
    ["K",19,1,4,0],["Ca",20,2,4,0],["Fe",26,8,4,2],["Cu",29,11,4,2],["Zn",30,12,4,2],
    ["Ag",47,11,5,2],["Sn",50,14,5,2],
    ["Au",79,11,6,2],["Hg",80,12,6,2],["Pb",82,14,6,2],
  ];
  for (const [sym, z, col, row, hl] of els) {
    const x = X0 + (col-1)*CW, y = Y0 + (row-1)*CH;
    const fill = hl===1 ? "#FBE3EC" : hl===2 ? "#E4EDF7" : "#F6F3EC";
    g += rect(x, y, CW-4, CH-4, fill, "#555", 1.5, 4);
    g += text(x + (CW-4)/2, y + 38, sym, 24, "#1a1a1a", "middle", "bold");
    g += text(x + 8, y + 16, String(z), 12, "#666", "start");
  }
  const LY = Y0 + 7*CH + 30;
  g += rect(X0, LY, 24, 24, "#FBE3EC", "#555", 1.5, 3) + text(X0+34, LY+18, "Éléments des gaz étudiés en T6 : H (dihydrogène), C et O (dioxyde de carbone), N et O (air)", 19, "#1a1a1a", "start");
  g += rect(X0, LY+36, 24, 24, "#E4EDF7", "#555", 1.5, 3) + text(X0+34, LY+54, "Métaux usuels, bons conducteurs (fer, cuivre, zinc, argent, étain, or, mercure, plomb)", 19, "#1a1a1a", "start");
  g += text(X0, LY+96, "Chaque case porte le symbole de l'élément et son numéro. Ce tableau complet sera étudié dans les classes suivantes.", 18, "#666", "start");
  return svgDoc(W, H, g);
}

// ---------- conversion ----------
async function main() {
  const jobs = [
    ["img_seance11.png", s11()],
    ["img_seance12.png", s12()],
    ["img_seance13.png", s13()],
    ["img_seance14.png", s14()],
    ["img_seance15.png", s15()],
    ["img_seance16.png", s16()],
    ["img_seance17.png", s17()],
    ["img_seance18.png", s18()],
    ["img_seance19.png", s19()],
    ["img_seance20.png", s20()],
    ["img_seance23.png", s23()],
    ["img_seance24.png", s24()],
    ["img_seance25.png", s25()],
    ["img_seance26.png", s26()],
    ["img_seance27.png", s27()],
    ["img_seance28.png", s28()],
    ["img_seance29.png", s29()],
    ["img_seance30.png", s30()],
    ["img_seance31.png", s31()],
    ["img_annexe_periodique.png", periodique()],
  ];
  for (const [name, svg] of jobs) {
    const svgPath = path.join(IMG, name.replace(".png", ".svg"));
    fs.writeFileSync(svgPath, svg);
    await sharp(Buffer.from(svg)).resize({ width: 1100 }).png().toFile(path.join(IMG, name));
    fs.unlinkSync(svgPath);
    console.log("OK", name);
  }
}
main().catch(e => { console.error(e); process.exit(1); });
