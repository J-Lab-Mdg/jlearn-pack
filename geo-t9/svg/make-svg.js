const fs = require('fs');
const path = require('path');
const { allTopics } = require('../src/curriculum');
const outDir = __dirname;
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&apos;'}[c]));
function wrap(text, max=42){
  const words=String(text).split(/\s+/), lines=[]; let line='';
  for(const w of words){ const n=(line+' '+w).trim(); if(n.length>max&&line){lines.push(line);line=w}else line=n; }
  if(line)lines.push(line); return lines;
}
function textBlock(text,x,y,max,size,weight='500',fill='#17324d',anchor='start',limit=4){
  const ls=wrap(text,max).slice(0,limit);return `<text x="${x}" y="${y}" font-family="Arial, sans-serif" font-size="${size}" font-weight="${weight}" fill="${fill}" text-anchor="${anchor}">${ls.map((l,i)=>`<tspan x="${x}" dy="${i?size*1.2:0}">${esc(l)}</tspan>`).join('')}</text>`;
}
const palettes=[['#0f766e','#ccfbf1','#134e4a'],['#1d4ed8','#dbeafe','#1e3a8a'],['#b45309','#fef3c7','#78350f'],['#7e22ce','#f3e8ff','#581c87'],['#be123c','#ffe4e6','#881337'],['#047857','#d1fae5','#064e3b']];
function svgFor(topic,idx){
 const unit=topic.unitIndex||0, pal=palettes[unit%palettes.length], [main,pale,dark]=pal;
 const title=topic.titre, def=topic._definition, pts=topic._points, kws=topic.motsCles;
 const positions=[[55,310],[620,310],[55,500],[620,500]];
 let boxes='';
 pts.forEach((p,i)=>{const [x,y]=positions[i]; boxes+=`<g><rect x="${x}" y="${y}" width="525" height="145" rx="20" fill="#fff" stroke="${main}" stroke-width="3"/><circle cx="${x+38}" cy="${y+42}" r="24" fill="${main}"/><text x="${x+38}" y="${y+50}" text-anchor="middle" font-family="Arial" font-size="23" font-weight="700" fill="#fff">${i+1}</text>${textBlock(p,x+75,y+35,36,20,'600',dark,'start',4)}</g>`});
 const tl=wrap(title,55).slice(0,2); const tagList=kws.slice(1,5).length?kws.slice(1,5):kws.slice(0,4); while(tagList.length<4)tagList.push('notion clé'); const tags=tagList.map((k,i)=>`<g><rect x="${130+i*245}" y="235" width="220" height="46" rx="23" fill="${i%2?pale:'#fff'}" stroke="${main}"/><text x="${240+i*245}" y="264" text-anchor="middle" font-family="Arial" font-size="14" font-weight="700" fill="${dark}">${esc(k.length>23?k.slice(0,22)+'…':k)}</text></g>`).join('');
 const footer=`<rect x="330" y="654" width="540" height="32" rx="16" fill="${main}"/><text x="600" y="676" text-anchor="middle" font-family="Arial" font-size="14" font-weight="700" fill="#fff">NOTION CENTRALE : ${esc(String(topic._terme).toUpperCase())}</text>`;
 return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="700" viewBox="0 0 1200 700"><defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${pale}"/><stop offset="1" stop-color="#f8fafc"/></linearGradient><filter id="sh"><feDropShadow dx="0" dy="4" stdDeviation="5" flood-opacity=".15"/></filter></defs><rect width="1200" height="700" rx="28" fill="url(#bg)"/><path d="M0 0H1200V170Q900 220 600 170T0 190Z" fill="${main}"/><text x="55" y="55" font-family="Arial" font-size="18" font-weight="700" fill="#fff" opacity=".9">GÉOGRAPHIE T9 • SCHÉMA ${String(idx+1).padStart(2,'0')}</text><text x="600" y="103" text-anchor="middle" font-family="Arial" font-size="34" font-weight="800" fill="#fff">${tl.map((l,i)=>`<tspan x="600" dy="${i?41:0}">${esc(l)}</tspan>`).join('')}</text>${tags}<g filter="url(#sh)">${boxes}</g>${footer}</svg>`;
}
allTopics.forEach((t,i)=>fs.writeFileSync(path.join(outDir,`geo9_s${String(t.numero).padStart(2,'0')}.svg`),svgFor({...t,unitIndex: Math.max(0,[1,21,27,47,59,69].findLastIndex(n=>t.numero>=n))},i)));
console.log(`Créés : ${allTopics.length} schémas SVG.`);
