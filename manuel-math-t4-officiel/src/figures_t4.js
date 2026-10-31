#!/usr/bin/env node
/* Figures mathématiques exactes pour T4 : SVG source + PNG intégrés au DOCX. */
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const OUT = path.join(__dirname, '..', 'assets', 'figures');
const BLUE = '#1F4E79', RED = '#C00000', PINK = '#C2185B', GREEN = '#2E7D32', GOLD = '#B25000', PALE = '#EAF2F8', PALEG = '#E8F5E9', PALEP = '#FDE7EF';
const font = 'DejaVu Sans';
const esc = x => String(x).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const text = (x,y,s,size=24,fill='#222',weight='normal',anchor='middle') => `<text x="${x}" y="${y}" font-family="${font}" font-size="${size}" fill="${fill}" font-weight="${weight}" text-anchor="${anchor}">${esc(s)}</text>`;
const rect = (x,y,w,h,fill='white',stroke=BLUE,rx=0) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" stroke="${stroke}" stroke-width="3"/>`;
const line = (x1,y1,x2,y2,stroke=BLUE,w=3,dash='') => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${stroke}" stroke-width="${w}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
const arrow = (x1,y1,x2,y2,c=GREEN,w=4) => `${line(x1,y1,x2,y2,c,w)}<polygon points="${x2},${y2} ${x2-12},${y2-7} ${x2-12},${y2+7}" fill="${c}"/>`;
const svg = (w,h,inner) => `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}"><rect width="100%" height="100%" fill="white"/>${inner}</svg>`;
function table(x,y,headers,rows,cw=170,rh=54) { let s=''; headers.forEach((h,i)=>{s+=rect(x+i*cw,y,cw,rh,PALE);s+=text(x+i*cw+cw/2,y+35,h,20,BLUE,'bold');});rows.forEach((row,r)=>row.forEach((v,i)=>{s+=rect(x+i*cw,y+(r+1)*rh,cw,rh,r%2?'#fff':'#F6F8FA');s+=text(x+i*cw+cw/2,y+(r+1)*rh+35,v,22); })); return s; }
function fractionBar(x,y,w,h,n,k){let s=rect(x,y,w,h,'#fff'); const cw=w/n; for(let i=0;i<k;i++)s+=`<rect x="${x+i*cw}" y="${y}" width="${cw}" height="${h}" fill="${PALEP}"/>`; for(let i=1;i<n;i++)s+=line(x+i*cw,y,x+i*cw,y+h,BLUE,2); return s+rect(x,y,w,h,'none',BLUE);}
function grid(x,y,c,k){let s='';for(let i=0;i<100;i++){const xx=x+(i%10)*c, yy=y+Math.floor(i/10)*c;s+=rect(xx,yy,c,c,i<k?PALEP:'#fff','#999',0);}return s;}
function polygon(points,fill='none',stroke=BLUE){return `<polygon points="${points.map(p=>p.join(',')).join(' ')}" fill="${fill}" stroke="${stroke}" stroke-width="4"/>`;}
const figs = {
  nombre_places: svg(1000,360, text(500,42,'Tableau de numération jusqu’à 100 000',28,BLUE,'bold') + table(100,85,['Diz. de mille','Milliers','Centaines','Dizaines','Unités'],[['5','8','3','0','4'],['50 000','8 000','300','0','4']],160,62) + text(500,300,'58 304 = 50 000 + 8 000 + 300 + 4',26,PINK,'bold')),
  fraction_parts: svg(1000,330, text(500,42,'Une fraction représente des parts égales',27,BLUE,'bold') + fractionBar(120,95,700,82,4,3) + text(470,235,'3 parts prises sur 4 parts égales : 3/4',28,PINK,'bold') + text(470,280,'numérateur = parts prises ; dénominateur = parts en tout',22,GREEN,'bold')),
  decimal_table: svg(1000,360, text(500,42,'Dixièmes et centièmes',28,BLUE,'bold') + table(115,85,['Unités','Dixièmes','Centièmes'],[['8','3','5'],['8','0,3','0,05']],230,62) + text(500,300,'8,35 = 8 + 3/10 + 5/100',28,PINK,'bold')),
  multiplication: svg(1000,380, text(500,42,'Produits partiels',28,BLUE,'bold') + table(150,80,['','Centaines','Dizaines','Unités'],[['234 × 12','','2','3','4'],['× 2','','4','6','8'],['× 10','','2 340'],['Total','','2 808']],170,52) + text(500,345,'On aligne les produits selon la valeur de chaque chiffre.',22,GREEN,'bold')),
  division: svg(1000,360, text(500,42,'Division : quotient et reste',28,BLUE,'bold') + rect(125,100,270,72,PALE) + text(260,146,'37 ÷ 5 = 7 reste 2',28,PINK,'bold') + arrow(430,136,570,136) + rect(600,100,250,72,PALEG) + text(725,146,'37 = 5 × 7 + 2',28,GREEN,'bold') + text(500,260,'Le reste doit être inférieur au diviseur.',25,GOLD,'bold')),
  sequence: svg(1000,330, text(500,42,'Suite numérique : on ajoute 3',28,BLUE,'bold') + [4,7,10,13,16].map((n,i)=>rect(90+i*170,105,110,68,i%2?PALEG:PALE)).join('') + [4,7,10,13,16].map((n,i)=>text(145+i*170,148,n,28,PINK,'bold')).join('') + [0,1,2,3].map(i=>text(230+i*170,235,'+3',22,GREEN,'bold')).join('')),
  equality: svg(1000,330, text(500,42,'Les deux membres ont la même valeur',27,BLUE,'bold') + rect(120,100,250,70,PALE) + text(245,145,'7 + 5',30,PINK,'bold') + text(500,145,'=',38,GREEN,'bold') + rect(630,100,250,70,PALEG) + text(755,145,'12',30,PINK,'bold') + text(500,250,'7 + 5 = 12 et 12 = 7 + 5',27,BLUE,'bold')),
  angles: svg(1000,370, text(500,42,'Types d’angles',28,BLUE,'bold') + line(170,270,170,115,BLUE,5)+line(170,270,320,270,BLUE,5)+text(245,310,'droit',22,GREEN,'bold') + line(430,270,575,190,BLUE,5)+line(430,270,570,270,BLUE,5)+text(500,315,'aigu',22,GREEN,'bold') + line(700,270,850,120,BLUE,5)+line(700,270,930,270,BLUE,5)+text(820,315,'obtus',22,GREEN,'bold')),
  triangles: svg(1000,370, text(500,42,'Triangles et propriétés',28,BLUE,'bold') + polygon([[110,285],[240,85],[370,285]],PALE) + text(240,330,'quelconque',21,BLUE,'bold') + polygon([[455,285],[585,105],[715,285]],PALEP) + text(585,330,'isocèle',21,PINK,'bold') + polygon([[790,285],[790,115],[940,285]],PALEG) + text(865,330,'rectangle',21,GREEN,'bold')),
  quadrilaterals: svg(1000,370, text(500,42,'Quadrilatères et propriétés',27,BLUE,'bold') + polygon([[90,280],[90,120],[300,120],[300,280]],PALE) + text(195,330,'rectangle',21,BLUE,'bold') + polygon([[400,280],[500,120],[700,120],[800,280]],PALEP) + text(600,330,'trapèze',21,PINK,'bold') + polygon([[900,200],[960,280],[900,360],[840,280]],PALEG) + text(900,375,'losange',18,GREEN,'bold')),
  circle: svg(1000,370, text(500,42,'Cercle : centre, rayon et diamètre',27,BLUE,'bold') + `<circle cx="470" cy="205" r="115" fill="${PALE}" stroke="${BLUE}" stroke-width="4"/>` + `<circle cx="470" cy="205" r="7" fill="${RED}"/>` + line(470,205,585,205,PINK,5) + line(355,205,585,205,GREEN,4,'10 8') + text(470,210,'O',22,RED,'bold') + text(530,190,'rayon',20,PINK,'bold') + text(470,245,'diamètre',20,GREEN,'bold') + text(760,175,'d = 2 × r',32,PINK,'bold') + text(760,230,'si r = 4 cm, d = 8 cm',23,GREEN,'bold')),
  transformations: svg(1000,370, text(500,42,'Translation et réflexion',27,BLUE,'bold') + polygon([[100,260],[170,120],[240,260]],PALE) + arrow(280,190,430,190) + polygon([[490,260],[560,120],[630,260]],PALEG) + line(770,80,770,315,GOLD,4,'10 8') + polygon([[850,260],[920,120],[990,260]],PALEP) + polygon([[690,260],[620,120],[550,260]],'none',PINK) + text(360,330,'translation : glisser sans tourner',20,GREEN,'bold') + text(770,350,'réflexion : même distance de l’axe',19,GOLD,'bold')),
  solids: svg(1000,390, text(500,42,'Solides et éléments caractéristiques',27,BLUE,'bold') + polygon([[120,260],[230,205],[340,260],[230,315]],PALE) + polygon([[120,260],[120,115],[230,60],[230,205]],PALEP) + polygon([[230,205],[230,60],[340,115],[340,260]],PALEG) + text(230,355,'cube : faces, arêtes, sommets',22,GREEN,'bold') + `<ellipse cx="650" cy="145" rx="110" ry="45" fill="${PALE}" stroke="${BLUE}" stroke-width="4"/><line x1="540" y1="145" x2="540" y2="275" stroke="${BLUE}" stroke-width="4"/><line x1="760" y1="145" x2="760" y2="275" stroke="${BLUE}" stroke-width="4"/><ellipse cx="650" cy="275" rx="110" ry="45" fill="none" stroke="${BLUE}" stroke-width="4"/><text x="650" y="350" font-family="${font}" font-size="22" fill="${GREEN}" font-weight="bold" text-anchor="middle">cylindre : deux bases circulaires</text>`),
  area: svg(1000,350, text(500,42,'Aire : compter puis utiliser une formule',27,BLUE,'bold') + grid(120,78,22,24) + text(230,330,'24 unités carrées',23,PINK,'bold') + rect(560,100,280,110,PALEG) + text(700,150,'A = L × l',32,GREEN,'bold') + text(700,195,'rectangle',22,BLUE,'bold')),
  conversions: svg(1000,350, text(500,42,'Tableau de conversion des longueurs',27,BLUE,'bold') + table(65,85,['km','hm','dam','m','dm','cm','mm'],[['','','3','2','5','','']],120,64) + text(500,290,'3,25 m = 325 cm',29,PINK,'bold')),
  data: svg(1000,390, text(500,42,'Tableau et diagramme à bandes',27,BLUE,'bold') + table(70,85,['Fruit','Effectif'],[['Mangue','6'],['Banane','4'],['Orange','2']],170,52) + line(500,310,930,310,BLUE,3)+line(500,310,500,90,BLUE,3)+rect(570,160,60,150,PALEP,PINK)+rect(700,210,60,100,PALEG,GREEN)+rect(830,260,60,50,'#FFF8E1',GOLD)+text(600,340,'M',20)+text(730,340,'B',20)+text(860,340,'O',20)),
  probability: svg(1000,340, text(500,42,'Événements simples',27,BLUE,'bold') + rect(95,100,240,75,PALEP,PINK) + text(215,147,'impossible',25,PINK,'bold') + rect(380,100,240,75,PALE,BLUE) + text(500,147,'possible',25,BLUE,'bold') + rect(665,100,240,75,PALEG,GREEN) + text(785,147,'certain',25,GREEN,'bold') + text(500,260,'On observe les issues possibles avant de prédire.',24,GOLD,'bold'))
};

async function generate(){
  fs.mkdirSync(OUT,{recursive:true});
  for(const [name,source] of Object.entries(figs)){
    fs.writeFileSync(path.join(OUT,`${name}.svg`),source);
    await sharp(Buffer.from(source),{density:96}).png({palette:true,colors:128,compressionLevel:9}).toFile(path.join(OUT,`${name}.png`));
  }
  return Object.keys(figs);
}
if(require.main === module){ generate().then(names=>console.log(`Figures T4 générées : ${names.length}`)).catch(e=>{console.error(e);process.exit(1)}); }
module.exports = { generate, OUT, names: Object.keys(figs) };
