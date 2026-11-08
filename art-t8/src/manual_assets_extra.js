// Schémas déterministes des parties T8 dont les illustrations sont propres au programme.
// Ils expliquent une notion ; les scènes de classe sont des illustrations réalistes séparées.
const fs = require('fs'), path = require('path'), sharp = require('sharp');
const data = require('./data_all');
const { shortTitles } = require('./titles_short');
const A = path.join(__dirname, '../assets/diagrams');
fs.mkdirSync(A,{recursive:true});
const C={blue:'#15558B',green:'#179B61',gold:'#D59A24',ink:'#252525',muted:'#555555',pale:'#EAF3EA',paper:'#F7F9FB'};
C.green='#179B61';
const esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
function wrap(s,max=43){const a=String(s).replace(/\s+/g,' ').split(' '),o=[];let l='';for(const w of a){if((l+' '+w).trim().length>max&&l){o.push(l);l=w;}else l=(l+' '+w).trim();}if(l)o.push(l);return o;}
function text(x,y,s,size=27,color=C.ink,bold=false,max=40){return wrap(s,max).slice(0,3).map((v,i)=>`<text x="${x}" y="${y+i*(size+8)}" font-family="Arial,sans-serif" font-size="${size}" fill="${color}" font-weight="${bold?700:400}">${esc(v)}</text>`).join('');}
const line=(x1,y1,x2,y2,color=C.blue,w=5,dash='')=>`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${w}" ${dash?`stroke-dasharray="${dash}"`:''}/>`;
function icon(id,stage){
 if(id==='s05') return `<ellipse cx="310" cy="390" rx="110" ry="145" fill="none" stroke="${C.blue}" stroke-width="6"/><path d="M200 365 Q310 350 420 365 M310 250 L310 530 M260 400 Q275 420 290 400 M330 400 Q345 420 360 400 M290 470 Q310 485 330 470" fill="none" stroke="${C.green}" stroke-width="5"/><circle cx="270" cy="400" r="6" fill="${C.gold}"/><circle cx="350" cy="400" r="6" fill="${C.gold}"/>`;
 if(id==='s09') return `<rect x="100" y="300" width="150" height="150" fill="#F2C94C"/><rect x="300" y="300" width="150" height="150" fill="#E6A078"/><rect x="500" y="300" width="150" height="150" fill="#7DA6C6"/><path d="M180 490 L570 490" stroke="${C.blue}" stroke-width="4"/><circle cx="190" cy="510" r="8" fill="${C.gold}"/><circle cx="390" cy="510" r="8" fill="${C.green}"/><circle cx="590" cy="510" r="8" fill="${C.blue}"/>`;
 if(id==='s19') return `<path d="M90 340 C130 270 170 410 210 340 S290 270 330 340 S410 410 450 340" fill="none" stroke="${C.blue}" stroke-width="7"/><path d="M90 500 C120 440 150 560 180 500 S240 440 270 500 S330 560 360 500 S420 440 450 500" fill="none" stroke="${C.green}" stroke-width="7"/><path d="M500 310 L500 530 M550 310 L550 530 M600 310 L600 530" stroke="${C.gold}" stroke-width="10"/>`;
 if(id==='s22') return `<rect x="110" y="365" width="380" height="54" rx="25" fill="${C.pale}" stroke="${C.blue}" stroke-width="6"/><path d="M155 365v54 M205 365v54 M255 365v54 M305 365v54 M355 365v54 M405 365v54" stroke="${C.green}" stroke-width="6"/><path d="M510 365 L575 365 L600 392 L575 419 L510 419Z" fill="${C.pale}" stroke="${C.gold}" stroke-width="6"/><path d="M90 300 Q60 390 90 480 M625 300 Q655 390 625 480" fill="none" stroke="${C.green}" stroke-width="4" stroke-dasharray="12 10"/>`;
 if(id==='s26') return `<circle cx="300" cy="275" r="32" fill="${C.gold}"/><path d="M300 310 L300 430 M300 350 L220 390 M300 350 L380 390 M300 430 L240 520 M300 430 L370 520" fill="none" stroke="${C.blue}" stroke-width="12" stroke-linecap="round"/><path d="M465 285 Q560 320 485 370 Q420 410 520 460" fill="none" stroke="${C.green}" stroke-width="7" stroke-dasharray="15 12"/>`;
 return '';
}
function stageContent(d,stage){
 if(stage==='observe') return {head:d.observe.title,left:d.observe.bullets.slice(0,2),right:d.observe.bullets.slice(2,4),sub:'Observer avant d’agir'};
 if(stage==='prepare') return {head:d.prep.title,left:[d.prep.phrase],right:[d.materials||'Préparer le matériel utile.','Vérifier l’espace et la sécurité.'],sub:'Préparation'};
 if(stage.startsWith('step_')) {const i='abcd'.indexOf(stage.at(-1)),s=d.steps[i];return {head:s.title,left:[s.text],right:[s.phrase],sub:`Étape ${'abcd'[i]}`};}
 return {head:d.practice.title,left:[d.practice.consigne],right:d.practice.criteria.slice(0,3),sub:'À toi de faire'};
}
async function one(d,stage){
 const c=stageContent(d,stage), title=shortTitles[d.id]||d.title;
 const left=c.left.flatMap(v=>wrap(v,36).slice(0,3)),right=c.right.flatMap(v=>wrap(v,36).slice(0,3));
 const ltxt=left.map((v,i)=>text(90,260+i*76,v,25,C.ink,false,36)).join('');
 const rtxt=right.map((v,i)=>text(765,260+i*76,v,25,C.ink,false,36)).join('');
 const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="1400" height="920" viewBox="0 0 1400 920"><rect width="1400" height="920" fill="#fff"/><rect width="1400" height="120" fill="${C.blue}"/><text x="54" y="52" font-family="Arial,sans-serif" font-size="31" font-weight="700" fill="#fff">${esc(title)}</text><text x="54" y="94" font-family="Arial,sans-serif" font-size="24" fill="#fff">${esc(c.sub)} · ${esc(c.head)}</text><rect x="55" y="155" width="610" height="535" fill="${C.paper}"/><rect x="735" y="155" width="610" height="535" fill="#FBFCF9"/><text x="90" y="210" font-family="Arial,sans-serif" font-size="25" font-weight="700" fill="${C.blue}">REPÈRE</text><text x="765" y="210" font-family="Arial,sans-serif" font-size="25" font-weight="700" fill="${C.green}">À VÉRIFIER</text><line x1="700" y1="170" x2="700" y2="675" stroke="${C.gold}" stroke-width="3"/><g transform="translate(180 350) scale(.5)">${icon(d.id,stage)}</g>${ltxt}${rtxt}<line x1="55" y1="735" x2="1345" y2="735" stroke="${C.gold}" stroke-width="3"/><text x="70" y="790" font-family="Arial,sans-serif" font-size="26" font-weight="700" fill="${C.blue}">À RETENIR</text>${text(250,790,d.practice.trace||d.practice.consigne,26,C.ink,false,82)}</svg>`;
 const base=path.join(A,`${d.id}_${stage}`);fs.writeFileSync(base+'.svg',svg);await sharp(Buffer.from(svg)).png().toFile(base+'.png');
}
(async()=>{for(const id of ['s05','s09','s19','s22','s26']){const d=data.find(x=>x.id===id);if(!d)throw new Error(id);for(const st of ['observe','prepare','step_a','step_b','step_c','step_d','practice'])await one(d,st);console.log('Schémas',id);}})().catch(e=>{console.error(e);process.exit(1)});
