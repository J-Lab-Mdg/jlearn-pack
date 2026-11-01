#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const OUT = path.join(__dirname, '..', 'assets', 'scenes');
const W=1200,H=500;
const esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
const svg=(body)=>`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}"><rect width="1200" height="500" fill="#FFFDF7"/><rect y="350" width="1200" height="150" fill="#E8F5E9"/><circle cx="1050" cy="90" r="48" fill="#FFE082"/>${body}</svg>`;
const line=(x1,y1,x2,y2,c='#1F4E79',w=6)=>`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${c}" stroke-width="${w}" stroke-linecap="round"/>`;
const rect=(x,y,w,h,fill='#E3F2FD',stroke='#1F4E79',r=8)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${fill}" stroke="${stroke}" stroke-width="5"/>`;
const circle=(x,y,r,fill='#FFF8E1',stroke='#1F4E79')=>`<circle cx="${x}" cy="${y}" r="${r}" fill="${fill}" stroke="${stroke}" stroke-width="5"/>`;
const poly=(pts,fill='#EAF2F8',stroke='#1F4E79')=>`<polygon points="${pts}" fill="${fill}" stroke="${stroke}" stroke-width="6" stroke-linejoin="round"/>`;
const scenes={
  nombre:svg(`<rect x="160" y="175" width="390" height="185" fill="#C98B5B" stroke="#7B4F2C" stroke-width="7"/><path d="M130 175 L355 70 L580 175 Z" fill="#C2185B" stroke="#7B1A3A" stroke-width="7"/>${rect(205,220,82,72,'#FFF8E1','#7B4F2C')} ${rect(315,210,82,82,'#E3F2FD','#7B4F2C')} ${rect(425,225,82,67,'#E8F5E9','#7B4F2C')} ${circle(790,270,55,'#FFCC80','#B25000')}${circle(900,270,55,'#FFCC80','#B25000')}${circle(845,190,55,'#FFCC80','#B25000')} ${rect(720,335,260,24,'#8D6E63','#6D4C41',4)}`),
  operation:svg(`${rect(160,115,210,245,'#B3E5FC','#1F4E79')} ${rect(470,115,210,245,'#C8E6C9','#2E7D32')} ${rect(780,115,210,245,'#FFE0B2','#B25000')}${[0,1,2,3].map(i=>circle(220+i*62,290,24,'#FFF8E1','#B25000')).join('')}${[0,1,2].map(i=>circle(530+i*62,290,24,'#FFF8E1','#B25000')).join('')}${[0,1].map(i=>circle(840+i*62,290,24,'#FFF8E1','#B25000')).join('')}${line(370,235,465,235,'#C2185B',9)}${line(680,235,775,235,'#C2185B',9)}`),
  algebra:svg(`${[0,1,2,3,4,5,6,7].map(i=>rect(130+i*112,190,75,75,i%2?'#C8E6C9':'#E3F2FD',i%2?'#2E7D32':'#1F4E79')).join('')}${[0,1,2,3,4].map(i=>line(165+i*112,285,165+i*112,330,'#C2185B',5)).join('')}${[0,1,2,3,4,5,6].map(i=>circle(180+i*130,105,26,i%3===0?'#FFCC80':i%3===1?'#CE93D8':'#80CBC4','#1F4E79')).join('')}`),
  geometrie:svg(`${line(120,360,500,360,'#7B4F2C',8)}${line(180,100,180,360,'#7B4F2C',8)}${line(180,100,500,360,'#7B4F2C',8)}${poly('650,340 760,120 870,340','#E3F2FD')}${circle(1030,230,105,'#E8F5E9','#2E7D32')}${line(930,230,1130,230,'#C2185B',6)}${line(1030,130,1030,330,'#C2185B',6)}`),
  mesure:svg(`${rect(130,145,390,205,'#E3F2FD','#1F4E79',3)}${[0,1,2,3,4,5,6,7].map(i=>line(130+i*55,145,130+i*55,350,'#90A4AE',2)).join('')}${[0,1,2,3].map(i=>line(130,145+i*51,520,145+i*51,'#90A4AE',2)).join('')}${rect(690,270,360,24,'#FFB74D','#B25000',12)}${[0,1,2,3,4,5,6,7,8].map(i=>line(720+i*38,270,720+i*38, i%5===0?240:255,'#7B4F2C',3)).join('')}${circle(740,170,50,'#FFF8E1','#B25000')}${line(740,120,740,220,'#B25000',4)}${line(690,170,790,170,'#B25000',4)}`),
  donnees:svg(`${rect(150,100,230,250,'#E3F2FD','#1F4E79')} ${rect(480,100,230,250,'#E8F5E9','#2E7D32')} ${rect(810,100,230,250,'#FFF8E1','#B25000')}${[0,1,2,3,4].map(i=>circle(210+i*35,180,13,'#C2185B','#7B1A3A')).join('')}${[0,1,2,3].map(i=>circle(540+i*35,180,13,'#2E7D32','#1B5E20')).join('')}${[0,1].map(i=>circle(870+i*35,180,13,'#B25000','#7B4F2C')).join('')}${rect(855,230,45,90,'#C2185B','#7B1A3A',2)}${rect(925,205,45,115,'#2E7D32','#1B5E20',2)}${rect(995,255,45,65,'#B25000','#7B4F2C',2)}`)
};
(async()=>{fs.mkdirSync(OUT,{recursive:true});for(const [name,src] of Object.entries(scenes)){fs.writeFileSync(path.join(OUT,`scene_unit_${name}.svg`),src);await sharp(Buffer.from(src)).png({compressionLevel:9}).toFile(path.join(OUT,`scene_unit_${name}.png`));}console.log(`Scènes génériques générées : ${Object.keys(scenes).length}`);})().catch(e=>{console.error(e);process.exit(1)});
