const {svgPng, svgHead} = require('./lib');

/* ---- L1 : lire et organiser des données ---- */
svgPng('t7u6s1_batons', svgHead(1000,430,'Dépouillement par paquets de cinq') + `
<g font-family="serif">
${[['Soa',2,2,'#1F4E79'],['Rado',2,0,'#C2185B'],['Tina',1,3,'#1E7B34']].map((r,i)=>{
 let g=`<text x="190" y="${152+i*95}" font-size="24" text-anchor="end" fill="${r[3]}" font-weight="bold">${r[0]}</text>`;
 for(let k=0;k<r[1];k++){
  g+=`<g stroke="${r[3]}" stroke-width="4">${[0,1,2,3].map(j=>`<line x1="${225+k*110+j*22}" y1="${120+i*95}" x2="${225+k*110+j*22}" y2="${165+i*95}"/>`).join('')}<line x1="${215+k*110}" y1="${162+i*95}" x2="${300+k*110}" y2="${122+i*95}"/></g>`;
 }
 for(let k=0;k<r[2];k++){
  const base=225+r[1]*110+k*22;
  g+=`<line x1="${base}" y1="${120+i*95}" x2="${base}" y2="${165+i*95}" stroke="${r[3]}" stroke-width="4"/>`;
 }
 g+=`<text x="${240+r[1]*110+r[2]*22}" y="${152+i*95}" font-size="24" fill="${r[3]}" font-weight="bold">= ${r[1]*5+r[2]}</text>`;
 return g;}).join('')}
<rect x="640" y="115" width="300" height="245" rx="14" fill="#EAF2F8" stroke="#1F4E79" stroke-width="3.5"/>
<text x="790" y="160" font-size="22" text-anchor="middle" fill="#1F4E79" font-weight="bold">chaque paquet barré</text>
<text x="790" y="198" font-size="22" text-anchor="middle" fill="#1F4E79" font-weight="bold">= 5 bulletins</text>
<text x="790" y="252" font-size="21" text-anchor="middle" fill="#222">Soa : 2 paquets + 2 = 12</text>
<text x="790" y="290" font-size="21" text-anchor="middle" fill="#222">Rado : 2 paquets = 10</text>
<text x="790" y="328" font-size="21" text-anchor="middle" fill="#222">Tina : 1 paquet + 3 = 8</text>
<text x="500" y="408" font-size="21" text-anchor="middle" fill="#333">Barrer le paquet de cinq ferme le comptage : rien ne se recompte.</text>
</g></svg>`);

svgPng('t7u6s1_classer', svgHead(1000,430,'Des données brutes aux catégories') + `
<g font-family="serif">
<rect x="60" y="120" width="350" height="230" rx="12" fill="#F7F3EE" stroke="#7A99AF" stroke-width="3"/>
<text x="235" y="160" font-size="22" text-anchor="middle" fill="#333" font-weight="bold">données brutes</text>
<text x="235" y="205" font-size="20" text-anchor="middle" fill="#555">38, 39, 38, 40,</text>
<text x="235" y="240" font-size="20" text-anchor="middle" fill="#555">38, 39, 39, 40,</text>
<text x="235" y="275" font-size="20" text-anchor="middle" fill="#555">38, 38, 40, 39</text>
<text x="235" y="318" font-size="18" text-anchor="middle" fill="#777">en vrac, illisibles</text>
<path d="M425 235 L 505 235" stroke="#C2185B" stroke-width="4" marker-end="url(#z1)"/>
<rect x="520" y="120" width="420" height="230" rx="12" fill="#EAF2F8" stroke="#1F4E79" stroke-width="3.5"/>
<text x="730" y="160" font-size="22" text-anchor="middle" fill="#1F4E79" font-weight="bold">organisées</text>
<text x="610" y="215" font-size="21" text-anchor="middle" fill="#222">38 → ∣∣∣∣∣</text>
<text x="610" y="258" font-size="21" text-anchor="middle" fill="#222">39 → ∣∣∣∣</text>
<text x="610" y="301" font-size="21" text-anchor="middle" fill="#222">40 → ∣∣∣</text>
<text x="840" y="215" font-size="21" fill="#1F4E79" font-weight="bold">5</text>
<text x="840" y="258" font-size="21" fill="#1F4E79" font-weight="bold">4</text>
<text x="840" y="301" font-size="21" fill="#1F4E79" font-weight="bold">3</text>
<text x="500" y="398" font-size="21" text-anchor="middle" fill="#333">Même information, lisibilité incomparable.</text>
</g><defs><marker id="z1" markerWidth="10" markerHeight="10" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#C2185B"/></marker></defs></svg>`);

svgPng('t7u6s1_vanio', svgHead(1000,430,'La conclusion d’un coup d’œil') + `
<g font-family="serif">
${[['vélos',16,'#1F4E79'],['pousse-p.',12,'#C2185B'],['motos',8,'#1E7B34'],['voitures',4,'#B0762E']].map((r,i)=>`<rect x="130" y="${120+i*72}" width="150" height="52" rx="8" fill="#F7F3EE" stroke="${r[2]}" stroke-width="2.5"/><text x="205" y="${154+i*72}" font-size="20" text-anchor="middle" fill="#333">${r[0]}</text><rect x="${290}" y="${120+i*72}" width="${r[1]*30}" height="52" rx="6" fill="${r[2]}" opacity="0.85"/><text x="${300+r[1]*30}" y="${154+i*72}" font-size="22" fill="#222" font-weight="bold">${r[1]}</text>`).join('')}
<text x="500" y="412" font-size="22" text-anchor="middle" fill="#333">La catégorie la plus fréquente saute aux yeux : les vélos dominent.</text>
</g></svg>`);

/* ---- L2 : tableau des effectifs ---- */
svgPng('t7u6s2_tableau', svgHead(1000,430,'Le tableau des effectifs du vote') + `
<g font-family="serif">
${[['catégorie','Soa','Rado','Tina','total'],['effectif','12','10','8','30']].map((row,r)=>row.map((c,i)=>`<rect x="${90+i*180}" y="${140+r*80}" width="170" height="72" rx="8" fill="${i===0?'#1F4E79':(i===4?'#E9F5EC':r===0?'#EAF2F8':'#fff')}" stroke="#1F4E79" stroke-width="2.5"/><text x="${175+i*180}" y="${186+r*80}" font-size="24" text-anchor="middle" fill="${i===0?'#fff':(i===4?'#1E7B34':'#222')}" font-weight="bold">${c}</text>`).join('')).join('')}
<rect x="240" y="330" width="520" height="60" rx="12" fill="#FCE4D6" stroke="#C2185B" stroke-width="3.5"/>
<text x="500" y="368" font-size="23" text-anchor="middle" fill="#C2185B" font-weight="bold">l’effectif = le nombre de données de la catégorie</text>
</g></svg>`);

svgPng('t7u6s2_total', svgHead(1000,430,'Vérifier le total') + `
<g font-family="serif">
<text x="500" y="170" font-size="30" text-anchor="middle" fill="#1F4E79" font-weight="bold">12 + 10 + 8 = 30</text>
<text x="500" y="230" font-size="24" text-anchor="middle" fill="#333">somme des effectifs = nombre de bulletins</text>
<rect x="300" y="270" width="400" height="65" rx="12" fill="#E9F5EC" stroke="#1E7B34" stroke-width="3.5"/>
<text x="500" y="312" font-size="26" text-anchor="middle" fill="#1E7B34" font-weight="bold">30 = 30 ✓ vérifié</text>
<text x="500" y="392" font-size="21" text-anchor="middle" fill="#333">Si le total ne tombe pas juste, une catégorie a été oubliée ou recomptée.</text>
</g></svg>`);

svgPng('t7u6s2_lire', svgHead(1000,430,'Lire colonne par colonne') + `
<g font-family="serif">
${[['catégorie','mangues','avocats','ananas'],['effectif','12','7','5']].map((row,r)=>row.map((c,i)=>`<rect x="${150+i*230}" y="${135+r*85}" width="220" height="78" rx="8" fill="${i===0?'#1F4E79':(r===0?'#EAF2F8':'#fff')}" stroke="#1F4E79" stroke-width="2.5"/><text x="${260+i*230}" y="${184+r*85}" font-size="24" text-anchor="middle" fill="${i===0?'#fff':'#222'}" font-weight="${i===0||r===0?'bold':'normal'}">${c}</text>`).join('')).join('')}
<path d="M603 300 Q 603 340 500 355" fill="none" stroke="#C2185B" stroke-width="3" marker-end="url(#y1)"/>
<text x="620" y="330" font-size="20" fill="#C2185B">colonne avocats</text>
<rect x="330" y="368" width="340" height="52" rx="12" fill="#FCE4D6" stroke="#C2185B" stroke-width="3"/>
<text x="500" y="401" font-size="22" text-anchor="middle" fill="#C2185B" font-weight="bold">7 avocats vendus</text>
</g><defs><marker id="y1" markerWidth="10" markerHeight="10" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#C2185B"/></marker></defs></svg>`);

/* ---- L3 : les fréquences ---- */
svgPng('t7u6s3_calcul', svgHead(1000,430,'12/30 = 2/5 = 0,4 = 40 %') + `
<g font-family="serif">
${[['12/30','la fraction','#1F4E79'],['2/5','simplifiée','#7A4E9E'],['0,4','le décimal','#C2185B'],['40 %','le pourcentage','#1E7B34']].map((r,i)=>`<rect x="${80+i*225}" y="140" width="195" height="130" rx="12" fill="#F7F3EE" stroke="${r[2]}" stroke-width="3.5"/><text x="${177+i*225}" y="195" font-size="30" text-anchor="middle" fill="${r[2]}" font-weight="bold">${r[0]}</text><text x="${177+i*225}" y="242" font-size="19" text-anchor="middle" fill="#333">${r[1]}</text>${i<3?`<text x="${295+i*225}" y="215" font-size="26" text-anchor="middle" fill="#222">=</text>`:''}`).join('')}
<rect x="280" y="310" width="440" height="62" rx="12" fill="#E9F5EC" stroke="#1E7B34" stroke-width="3.5"/>
<text x="500" y="349" font-size="24" text-anchor="middle" fill="#1E7B34" font-weight="bold">quatre écritures, une seule part</text>
</g></svg>`);

svgPng('t7u6s3_tableau', svgHead(1000,430,'Tableau complet : effectifs et fréquences') + `
<g font-family="serif">
${[['','Soa','Rado','Tina','total'],['effectif','12','10','8','30'],['fréquence','40 %','33 %','27 %','100 %']].map((row,r)=>row.map((c,i)=>`<rect x="${110+i*170}" y="${120+r*72}" width="160" height="64" rx="8" fill="${i===0?'#1F4E79':(i===4?'#E9F5EC':r===0?'#EAF2F8':r===2?'#FCE4D6':'#fff')}" stroke="#1F4E79" stroke-width="2.5"/><text x="${190+i*170}" y="${162+r*72}" font-size="22" text-anchor="middle" fill="${i===0?'#fff':(i===4?'#1E7B34':'#222')}" font-weight="bold">${c}</text>`).join('')).join('')}
<text x="500" y="390" font-size="21" text-anchor="middle" fill="#333">Les pourcentages arrondis sont signalés (33 % et 27 % ≈).</text>
</g></svg>`);

svgPng('t7u6s3_verifier', svgHead(1000,430,'La somme fait 100 %') + `
<g font-family="serif">
<text x="500" y="180" font-size="30" text-anchor="middle" fill="#1F4E79" font-weight="bold">40 % + 33 % + 27 % = 100 %</text>
<path d="M300 240 Q 500 310 700 240" fill="none" stroke="#1E7B34" stroke-width="3.5"/>
<rect x="350" y="300" width="300" height="64" rx="14" fill="#E9F5EC" stroke="#1E7B34" stroke-width="3.5"/>
<text x="500" y="341" font-size="26" text-anchor="middle" fill="#1E7B34" font-weight="bold">toutes les parts = le tout</text>
<text x="500" y="402" font-size="21" text-anchor="middle" fill="#333">Si la somme dépasse 100 %, un calcul de fréquence est faux.</text>
</g></svg>`);

/* ---- L4 : diagramme à bandes et ligne brisée ---- */
svgPng('t7u6s4_bandes', svgHead(1000,430,'Ventes de la semaine : le diagramme à bandes') + `
<g font-family="serif">
<line x1="120" y1="340" x2="880" y2="340" stroke="#222" stroke-width="3.5"/>
<line x1="120" y1="340" x2="120" y2="110" stroke="#222" stroke-width="3.5"/>
${[42,36,30,24,18,12,6].map(v=>`<line x1="112" y1="${340-v*4.6}" x2="880" y2="${340-v*4.6}" stroke="#E3ECF2" stroke-width="1"/><text x="105" y="${346-v*4.6}" font-size="15" text-anchor="end" fill="#555">${v}</text>`).join('')}
${[['lundi',24],['mardi',36],['mercredi',18],['jeudi',30],['vendredi',42]].map((r,i)=>`<rect x="${165+i*140}" y="${340-r[1]*4.6}" width="90" height="${r[1]*4.6}" fill="${i===4?'#1E7B34':'#1F4E79'}" opacity="${i===4?1:0.85}"/><text x="${210+i*140}" y="${326-r[1]*4.6}" font-size="19" text-anchor="middle" fill="#222" font-weight="bold">${r[1]}</text><text x="${210+i*140}" y="368" font-size="19" text-anchor="middle" fill="#333">${r[0]}</text>`).join('')}
<text x="500" y="408" font-size="21" text-anchor="middle" fill="#333">Échelle : 1 carreau = 6 kg — vendredi domine, mercredi est le creux.</text>
</g></svg>`);

svgPng('t7u6s4_ligne', svgHead(1000,430,'Températures de la semaine : la ligne brisée') + `
<g font-family="serif">
<line x1="120" y1="340" x2="880" y2="340" stroke="#222" stroke-width="3.5"/>
<line x1="120" y1="340" x2="120" y2="110" stroke="#222" stroke-width="3.5"/>
${[28,26,24,22,20].map(v=>`<line x1="112" y1="${340-(v-18)*18}" x2="880" y2="${340-(v-18)*18}" stroke="#E3ECF2" stroke-width="1"/><text x="105" y="${346-(v-18)*18}" font-size="15" text-anchor="end" fill="#555">${v}°</text>`).join('')}
${(()=>{const T=[22,24,23,26,25,27,24], D=['lun','mar','mer','jeu','ven','sam','dim']; let g=''; T.forEach((t,i)=>{const x=180+i*110, y=340-(t-18)*18; g+=`<text x="${x}" y="365" font-size="18" text-anchor="middle" fill="#333">${D[i]}</text>`; if(i<T.length-1){const x2=180+(i+1)*110, y2=340-(T[i+1]-18)*18; g+=`<line x1="${x}" y1="${y}" x2="${x2}" y2="${y2}" stroke="#C2185B" stroke-width="4"/>`;}}); T.forEach((t,i)=>{const x=180+i*110, y=340-(t-18)*18; g+=`<circle cx="${x}" cy="${y}" r="7" fill="#C2185B"/><text x="${x}" y="${y-14}" font-size="17" text-anchor="middle" fill="#222" font-weight="bold">${t}°</text>`;}); return g;})()}
<text x="500" y="408" font-size="21" text-anchor="middle" fill="#333">Montée vers le week-end, léger retour dimanche : la ligne raconte l’évolution.</text>
</g></svg>`);

svgPng('t7u6s4_choisir', svgHead(1000,430,'Quel diagramme pour quelle question ?') + `
<g font-family="serif">
<rect x="70" y="125" width="410" height="220" rx="14" fill="#EAF2F8" stroke="#1F4E79" stroke-width="3.5"/>
<text x="275" y="168" font-size="24" text-anchor="middle" fill="#1F4E79" font-weight="bold">À BANDES</text>
<text x="275" y="215" font-size="21" text-anchor="middle" fill="#222">comparer des catégories</text>
${[0,1,2].map(i=>`<rect x="${165+i*75}" y="${305-[55,85,40][i]}" width="55" height="${[55,85,40][i]}" fill="#1F4E79" opacity="0.8"/>`).join('')}
<rect x="530" y="125" width="410" height="220" rx="14" fill="#FCE4D6" stroke="#C2185B" stroke-width="3.5"/>
<text x="735" y="168" font-size="24" text-anchor="middle" fill="#C2185B" font-weight="bold">LIGNE BRISÉE</text>
<text x="735" y="215" font-size="21" text-anchor="middle" fill="#222">suivre une donnée dans le temps</text>
${(()=>{const p=[[640,270],[710,240],[780,255],[850,225]]; let g=''; for(let i=0;i<3;i++) g+=`<line x1="${p[i][0]}" y1="${p[i][1]}" x2="${p[i+1][0]}" y2="${p[i+1][1]}" stroke="#C2185B" stroke-width="3.5"/>`; p.forEach(q=>g+=`<circle cx="${q[0]}" cy="${q[1]}" r="6" fill="#C2185B"/>`); return g;})()}
<text x="500" y="398" font-size="21" text-anchor="middle" fill="#333">Le choix du diagramme dépend de la question posée.</text>
</g></svg>`);
