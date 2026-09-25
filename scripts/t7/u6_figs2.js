const {svgPng, svgHead} = require('./lib');

/* ---- L5 : diagramme circulaire ---- */
const sector=(cx,cy,r,a0,a1,fill)=>{const x0=cx+r*Math.cos(a0),y0=cy+r*Math.sin(a0),x1=cx+r*Math.cos(a1),y1=cy+r*Math.sin(a1);const big=(a1-a0)>Math.PI?1:0;return `<path d="M${cx} ${cy} L${x0.toFixed(1)} ${y0.toFixed(1)} A${r} ${r} 0 ${big} 1 ${x1.toFixed(1)} ${y1.toFixed(1)} Z" fill="${fill}"/>`;};

svgPng('t7u6s5_parts', svgHead(1000,430,'Le budget en secteurs') + `
<g font-family="serif">
${(()=>{const P=[['riz 50 %',0.5,'#B0762E'],['habit. 25 %',0.25,'#1F4E79'],['transp. 12,5 %',0.125,'#C2185B'],['autre 12,5 %',0.125,'#1E7B34']]; let a=-Math.PI/2, g=''; P.forEach(p=>{const a1=a+p[1]*2*Math.PI; g+=sector(300,250,120,a,a1,p[2])+`<path d="M300 250 L${300+120*Math.cos(a)} ${250+120*Math.sin(a)}" stroke="#fff" stroke-width="2"/>`; const mid=(a+a1)/2; g+=`<text x="${300+80*Math.cos(mid)}" y="${255+80*Math.sin(mid)}" font-size="17" text-anchor="middle" fill="#fff" font-weight="bold">${p[1]*100}%</text>`; a=a1;}); return g;})()}
<circle cx="300" cy="250" r="120" fill="none" stroke="#222" stroke-width="3.5"/>
${[['riz : 50 %','#B0762E'],['habillement : 25 %','#1F4E79'],['transport : 12,5 %','#C2185B'],['autres : 12,5 %','#1E7B34']].map((r,i)=>`<rect x="540" y="${140+i*62}" width="26" height="26" rx="5" fill="${r[1]}"/><text x="585" y="${161+i*62}" font-size="22" fill="#222">${r[0]}</text>`).join('')}
<text x="500" y="415" font-size="20" text-anchor="middle" fill="#333">Le disque entier vaut 100 % : chaque part montre sa taille réelle.</text>
</g></svg>`);

svgPng('t7u6s5_angles', svgHead(1000,430,'Fréquence × 360° = angle') + `
<g font-family="serif">
${[['50 %','× 360°','180°','demi-disque'],['25 %','× 360°','90°','quart de disque'],['12,5 %','× 360°','45°','huitième de disque']].map((r,i)=>`<rect x="90" y="${115+i*88}" width="160" height="70" rx="10" fill="#EAF2F8" stroke="#1F4E79" stroke-width="3"/><text x="170" y="${161+i*88}" font-size="25" text-anchor="middle" fill="#1F4E79" font-weight="bold">${r[0]}</text><text x="310" y="${161+i*88}" font-size="23" text-anchor="middle" fill="#333">${r[1]}</text><text x="410" y="${161+i*88}" font-size="23" text-anchor="middle" fill="#222">=</text><rect x="470" y="${115+i*88}" width="140" height="70" rx="10" fill="#FCE4D6" stroke="#C2185B" stroke-width="3"/><text x="540" y="${161+i*88}" font-size="25" text-anchor="middle" fill="#C2185B" font-weight="bold">${r[2]}</text><text x="710" y="${161+i*88}" font-size="22" fill="#333">${r[3]}</text>`).join('')}
<rect x="620" y="330" width="340" height="60" rx="12" fill="#E9F5EC" stroke="#1E7B34" stroke-width="3.5"/>
<text x="790" y="368" font-size="22" text-anchor="middle" fill="#1E7B34" font-weight="bold">total : 360° obligatoire</text>
</g></svg>`);

svgPng('t7u6s5_tracer', svgHead(1000,430,'Tracer au rapporteur') + `
<g font-family="serif">
${(()=>{let g=''; const A=[180,90,45,45], C=['#B0762E','#1F4E79','#C2185B','#1E7B34']; let a=-Math.PI/2; A.forEach((deg,i)=>{const a1=a+deg*Math.PI/180; g+=sector(270,260,110,a,a1,C[i]); a=a1;}); return g+`<circle cx="270" cy="260" r="110" fill="none" stroke="#222" stroke-width="3"/>`;})()}
<rect x="540" y="130" width="400" height="230" rx="14" fill="#EAF2F8" stroke="#1F4E79" stroke-width="3.5"/>
<text x="740" y="172" font-size="23" text-anchor="middle" fill="#1F4E79" font-weight="bold">étapes</text>
<text x="740" y="215" font-size="20" text-anchor="middle" fill="#222">1. rayon de départ tout en haut</text>
<text x="740" y="252" font-size="20" text-anchor="middle" fill="#222">2. 180° au rapporteur → riz</text>
<text x="740" y="289" font-size="20" text-anchor="middle" fill="#222">3. 90° → habillement</text>
<text x="740" y="326" font-size="20" text-anchor="middle" fill="#222">4. 45° + 45° : le tour est fait</text>
<text x="500" y="408" font-size="21" text-anchor="middle" fill="#333">Secteur après secteur, dans le même sens, jusqu’au bouclage à 360°.</text>
</g></svg>`);

/* ---- L6 : probabilité ---- */
svgPng('t7u6s6_echelle', svgHead(1000,430,'L’échelle de probabilité') + `
<g font-family="serif">
<line x1="110" y1="215" x2="890" y2="215" stroke="#222" stroke-width="5"/>
${(()=>{let g=''; for(let i=0;i<=10;i++){g+=`<line x1="${110+i*78}" y1="200" x2="${110+i*78}" y2="230" stroke="#555" stroke-width="2.5"/>`;} return g;})()}
<text x="110" y="262" font-size="28" text-anchor="middle" fill="#C00000" font-weight="bold">0</text>
<text x="110" y="297" font-size="20" text-anchor="middle" fill="#C00000">impossible</text>
<text x="500" y="262" font-size="28" text-anchor="middle" fill="#B0762E" font-weight="bold">1/2</text>
<text x="500" y="297" font-size="20" text-anchor="middle" fill="#B0762E">une chance sur deux</text>
<text x="890" y="262" font-size="28" text-anchor="middle" fill="#1E7B34" font-weight="bold">1</text>
<text x="890" y="297" font-size="20" text-anchor="middle" fill="#1E7B34">certain</text>
<circle cx="240" cy="215" r="9" fill="#B0762E"/>
<text x="240" y="180" font-size="19" text-anchor="middle" fill="#333">peu probable 1/6</text>
<circle cx="630" cy="215" r="9" fill="#1F4E79"/>
<text x="630" y="180" font-size="19" text-anchor="middle" fill="#333">plutôt probable 2/3</text>
<text x="500" y="365" font-size="22" text-anchor="middle" fill="#333">Toute probabilité vit entre 0 et 1.</text>
<text x="500" y="400" font-size="21" text-anchor="middle" fill="#555">Certain à gauche ? Jamais : 0 impossible, 1 certain.</text>
</g></svg>`);

svgPng('t7u6s6_roue', svgHead(1000,430,'Roue à 6 secteurs : P(rouge) = 1/3') + `
<g font-family="serif">
${(()=>{const S=[['#C00000'],['#C00000'],['#1F4E79'],['#1E7B34'],['#1E7B34'],['#1E7B34']]; let g='', a=-Math.PI/2; S.forEach((s,i)=>{const a1=a+Math.PI/3; g+=sector(270,250,120,a,a1,s[0]); a=a1;}); for(let i=0;i<6;i++){const ang=-Math.PI/2+i*Math.PI/3; g+=`<line x1="270" y1="250" x2="${270+120*Math.cos(ang)}" y2="${250+120*Math.sin(ang)}" stroke="#fff" stroke-width="3"/>`;} return g+`<circle cx="270" cy="250" r="120" fill="none" stroke="#222" stroke-width="3.5"/><polygon points="270,105 255,135 285,135" fill="#222"/>`;})()}
<rect x="540" y="135" width="400" height="230" rx="14" fill="#F7F3EE" stroke="#B0762E" stroke-width="3.5"/>
<text x="740" y="178" font-size="22" text-anchor="middle" fill="#333" font-weight="bold">2 rouges · 1 bleu · 3 verts</text>
<text x="740" y="228" font-size="22" text-anchor="middle" fill="#C00000" font-weight="bold">P(rouge) = 2/6 = 1/3</text>
<text x="740" y="272" font-size="22" text-anchor="middle" fill="#1F4E79" font-weight="bold">P(bleu) = 1/6</text>
<text x="740" y="316" font-size="22" text-anchor="middle" fill="#1E7B34" font-weight="bold">P(vert) = 3/6 = 1/2</text>
<text x="500" y="408" font-size="21" text-anchor="middle" fill="#333">favorables ÷ possibles : on compte des SECTEURS, pas des couleurs.</text>
</g></svg>`);

svgPng('t7u6s6_comparer', svgHead(1000,430,'Comparer les probabilités') + `
<g font-family="serif">
${[['bleu','1/6 ≈ 0,17','#1F4E79',1],['rouge','1/3 ≈ 0,33','#C00000',2],['vert','1/2 = 0,50','#1E7B34',3]].map((r,i)=>`<rect x="120" y="${125+i*85}" width="140" height="60" rx="10" fill="#F7F3EE" stroke="${r[2]}" stroke-width="3"/><text x="190" y="${164+i*85}" font-size="24" text-anchor="middle" fill="${r[2]}" font-weight="bold">${r[0]}</text><rect x="280" y="${132+i*85}" width="${r[3]*185}" height="46" rx="8" fill="${r[2]}" opacity="0.85"/><text x="${295+r[3]*185}" y="${163+i*85}" font-size="21" fill="#222" font-weight="bold">${r[1]}</text>`).join('')}
<text x="500" y="395" font-size="22" text-anchor="middle" fill="#333">Comparer les événements, c’est comparer leurs fractions : 1/6 &lt; 1/3 &lt; 1/2.</text>
</g></svg>`);

/* ---- L7 : arbre et tableau ---- */
svgPng('t7u6s7_arbre', svgHead(1000,430,'L’arbre des deux lancers') + `
<g font-family="serif">
<circle cx="140" cy="235" r="12" fill="#1F4E79"/>
${[0,1].map(i=>{const y=150+i*170; return `<line x1="152" y1="235" x2="320" y2="${y}" stroke="#1F4E79" stroke-width="3"/><circle cx="335" cy="${y}" r="12" fill="#1F4E79"/><text x="250" y="${180+i*120}" font-size="19" fill="#333">${i?'face (F)':'pile (P)'}</text>`;}).join('')}
${[150,320].map((y,j)=>[0,1].map(i=>{const y2=(j?335:135)+i*40; return `<line x1="347" y1="${y}" x2="520" y2="${y2}" stroke="#C2185B" stroke-width="3"/><text x="560" y="${y2+7}" font-size="22" fill="#222" font-weight="bold">${(j===0?(i?'PF':'PP'):(i?'FF':'FP'))}</text>`;}).join('')).join('')}
<rect x="680" y="150" width="270" height="180" rx="14" fill="#EAF2F8" stroke="#1F4E79" stroke-width="3.5"/>
<text x="815" y="195" font-size="22" text-anchor="middle" fill="#1F4E79" font-weight="bold">2 × 2 = 4 issues</text>
<text x="815" y="240" font-size="20" text-anchor="middle" fill="#222">PP — PF</text>
<text x="815" y="275" font-size="20" text-anchor="middle" fill="#222">FP — FF</text>
<text x="815" y="315" font-size="19" text-anchor="middle" fill="#333">chaque chemin = une issue</text>
</g></svg>`);

svgPng('t7u6s7_tableau', svgHead(1000,430,'Le tableau à double entrée') + `
<g font-family="serif">
${[['','P (2e)','F (2e)'],['P (1er)','PP','PF'],['F (1er)','FP','FF']].map((row,r)=>row.map((c,i)=>{
 const head=r===0||i===0;
 return `<rect x="${200+i*170}" y="${125+r*75}" width="160" height="68" rx="6" fill="${head?'#1F4E79':'#fff'}" stroke="#1F4E79" stroke-width="2.5"/><text x="${280+i*170}" y="${170+r*75}" font-size="25" text-anchor="middle" fill="${head?'#fff':'#C2185B'}" font-weight="bold">${c}</text>`;}).join('')).join('')}
<text x="500" y="392" font-size="22" text-anchor="middle" fill="#333">Croiser premier et second lancer : les 4 issues apparaissent.</text>
</g></svg>`);

svgPng('t7u6s7_prob', svgHead(1000,430,'Dénombrer puis calculer') + `
<g font-family="serif">
${[['deux piles : PP seul','1/4','#B0762E'],['un pile exactement : PF ou FP','2/4 = 1/2','#C2185B'],['au moins un pile : PP, PF, FP','3/4','#1E7B34'],['que des faces : FF seul','1/4','#1F4E79']].map((r,i)=>`<rect x="80" y="${112+i*72}" width="560" height="58" rx="10" fill="#F7F3EE" stroke="${r[2]}" stroke-width="3"/><text x="360" y="${149+i*72}" font-size="21" text-anchor="middle" fill="#222">${r[0]}</text><rect x="660" y="${112+i*72}" width="150" height="58" rx="10" fill="#fff" stroke="${r[2]}" stroke-width="3"/><text x="735" y="${149+i*72}" font-size="24" text-anchor="middle" fill="${r[2]}" font-weight="bold">${r[1]}</text>`).join('')}
<text x="500" y="412" font-size="21" text-anchor="middle" fill="#333">4 issues équiprobables : on compte les favorables sur les 4.</text>
</g></svg>`);
