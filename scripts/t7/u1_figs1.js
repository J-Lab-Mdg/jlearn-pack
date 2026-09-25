const {svgPng, svgHead} = require('./lib');

/* ---- L1 : décimaux — décomposition, tableau des rangs, zéros ---- */
svgPng('t7u1s1_decomp', svgHead(1000,430,'Décomposer un nombre décimal') + `
<g font-family="serif">
<rect x="90" y="110" width="380" height="90" rx="12" fill="#EAF2F8" stroke="#1F4E79" stroke-width="3.5"/>
<text x="280" y="166" font-size="30" text-anchor="middle" fill="#1F4E79" font-weight="bold">243</text>
<rect x="470" y="110" width="280" height="90" rx="12" fill="#FCE4D6" stroke="#C2185B" stroke-width="3.5"/>
<text x="610" y="166" font-size="30" text-anchor="middle" fill="#C2185B" font-weight="bold">,507</text>
<text x="280" y="238" font-size="22" text-anchor="middle" fill="#1F4E79">partie entière</text>
<text x="610" y="238" font-size="22" text-anchor="middle" fill="#C2185B">partie décimale</text>
<rect x="230" y="280" width="540" height="70" rx="12" fill="#E9F5EC" stroke="#1E7B34" stroke-width="3.5"/>
<text x="500" y="325" font-size="26" text-anchor="middle" fill="#1E7B34" font-weight="bold">243,507 = 243 + 0,507</text>
<text x="500" y="395" font-size="22" text-anchor="middle" fill="#333">La virgule sépare les deux parties du nombre.</text>
</g></svg>`);

svgPng('t7u1s1_tableau', svgHead(1000,430,'Le tableau des rangs') + `
<g font-family="serif">
${[['centaines',0],['dizaines',1],['unités',2],['virgule',3],['dixièmes',4],['centièmes',5],['millièmes',6]].map((c)=>`<rect x="${60+c[1]*130}" y="100" width="130" height="46" fill="${c[1]<3?'#1F4E79':(c[1]===3?'#333':'#1E7B34')}" /><text x="${125+c[1]*130}" y="131" font-size="19" text-anchor="middle" fill="white" font-weight="bold">${c[0]}</text>`).join('')}
${[0,1,2,3,4,5,6].map(i=>`<rect x="${60+i*130}" y="146" width="130" height="56" fill="#F7F3EE" stroke="#9AB" stroke-width="1.5"/>`).join('')}
${[['2',0],['4',1],['3',2],[',',3],['5',4],['0',5],['7',6]].map(d=>`<text x="${125+d[1]*130}" y="183" font-size="28" text-anchor="middle" fill="#C2185B" font-weight="bold">${d[0]}</text>`).join('')}
${[['200',0],['40',1],['3',2],['',3],['0,5',4],['0',5],['0,007',6]].map(d=>d[0]?`<text x="${125+d[1]*130}" y="248" font-size="20" text-anchor="middle" fill="#1F4E79">${d[0]}</text>`:'').join('')}
<rect x="180" y="285" width="640" height="60" rx="12" fill="#E9F5EC" stroke="#1E7B34" stroke-width="3"/>
<text x="500" y="323" font-size="23" text-anchor="middle" fill="#1E7B34" font-weight="bold">5 dixièmes, 0 centième, 7 millièmes</text>
<text x="500" y="388" font-size="22" text-anchor="middle" fill="#333">Chaque rang vaut dix fois le rang à sa droite.</text>
</g></svg>`);

svgPng('t7u1s1_zeros', svgHead(1000,430,'Les zéros de droite') + `
<g font-family="serif">
<rect x="120" y="120" width="760" height="90" rx="12" fill="#EAF2F8" stroke="#1F4E79" stroke-width="3.5"/>
<text x="500" y="177" font-size="32" text-anchor="middle" fill="#1F4E79" font-weight="bold">12,5 = 12,50 = 12,500</text>
<text x="500" y="288" font-size="24" text-anchor="middle" fill="#222">Des zéros à droite de la partie décimale</text>
<text x="500" y="330" font-size="24" text-anchor="middle" fill="#222">ne changent pas le nombre.</text>
<text x="500" y="395" font-size="21" text-anchor="middle" fill="#555">Utile pour comparer deux décimaux rang par rang.</text>
</g></svg>`);

/* ---- L2 : comparer, ranger, encadrer ---- */
svgPng('t7u1s2_calage', svgHead(1000,430,'Caler de zéros : même taille') + `
<g font-family="serif">
<rect x="90" y="115" width="390" height="185" rx="12" fill="#EAF2F8" stroke="#1F4E79" stroke-width="3.5"/>
<text x="285" y="160" font-size="23" text-anchor="middle" fill="#1F4E79" font-weight="bold">avant</text>
<text x="285" y="222" font-size="30" text-anchor="middle" fill="#222">12,5 ? 12,45</text>
<text x="285" y="272" font-size="19" text-anchor="middle" fill="#555">tailles différentes</text>
<path d="M500 205 L 555 205" stroke="#1E7B34" stroke-width="5"/>
<path d="M542 193 L 560 205 L 542 217" fill="none" stroke="#1E7B34" stroke-width="5"/>
<rect x="575" y="115" width="360" height="185" rx="12" fill="#E9F5EC" stroke="#1E7B34" stroke-width="3.5"/>
<text x="755" y="160" font-size="23" text-anchor="middle" fill="#1E7B34" font-weight="bold">après</text>
<text x="755" y="222" font-size="30" text-anchor="middle" fill="#1E7B34" font-weight="bold">12,50 &gt; 12,45</text>
<text x="755" y="272" font-size="19" text-anchor="middle" fill="#555">5 dixièmes &gt; 4 dixièmes</text>
<text x="500" y="380" font-size="23" text-anchor="middle" fill="#333">Compléter de zéros, puis comparer rang par rang.</text>
</g></svg>`);

svgPng('t7u1s2_rangs', svgHead(1000,430,'Comparer rang par rang') + `
<g font-family="serif">
${[['12,50',1,'5'],['12,45',1,'4']].map((r,i)=>`<text x="250" y="${150+i*70}" font-size="32" text-anchor="middle" fill="#222" font-weight="bold">${r[0]}</text>`).join('')}
<text x="560" y="150" font-size="24" fill="#1F4E79">entières égales : 12 = 12</text>
<text x="560" y="220" font-size="22" fill="#C2185B" font-weight="bold">dixièmes : 5 &gt; 4 → décision</text>
<rect x="230" y="290" width="540" height="64" rx="12" fill="#E9F5EC" stroke="#1E7B34" stroke-width="3.5"/>
<text x="500" y="330" font-size="26" text-anchor="middle" fill="#1E7B34" font-weight="bold">12,50 &gt; 12,45</text>
<text x="500" y="400" font-size="22" text-anchor="middle" fill="#333">On s’arrête au premier rang qui diffère.</text>
</g></svg>`);

svgPng('t7u1s2_encadre', svgHead(1000,430,'Encadrer un décimal') + `
<g font-family="serif">
${(()=>{const X=v=>100+(v-6)*100; let r=''; for(let v=6;v<=9;v++){r+=`<line x1="${X(v)}" y1="195" x2="${X(v)}" y2="235" stroke="#1F4E79" stroke-width="3.5"/><text x="${X(v)}" y="270" font-size="26" text-anchor="middle" fill="#333">${v}</text>`;} return r;})()}
<line x1="85" y1="215" x2="915" y2="215" stroke="#1F4E79" stroke-width="4"/>
<circle cx="383" cy="215" r="10" fill="#C2185B"/>
<text x="383" y="160" font-size="26" text-anchor="middle" fill="#C2185B" font-weight="bold">7,83</text>
<rect x="270" y="305" width="460" height="62" rx="12" fill="#FCE4D6" stroke="#C2185B" stroke-width="3.5"/>
<text x="500" y="345" font-size="27" text-anchor="middle" fill="#C2185B" font-weight="bold">7 &lt; 7,83 &lt; 8</text>
<text x="500" y="405" font-size="22" text-anchor="middle" fill="#333">L’encadrement coince le nombre entre deux entiers.</text>
</g></svg>`);

/* ---- L3 : fractions — lecture, termes, placement ---- */
svgPng('t7u1s3_disque', svgHead(1000,430,'Les trois quarts d’un disque') + `
<g font-family="serif">
<circle cx="260" cy="245" r="130" fill="#EAF2F8" stroke="#1F4E79" stroke-width="4"/>
<path d="M260 245 L 260 115 A 130 130 0 0 1 390 245 Z" fill="#C2185B"/>
<path d="M260 245 L 390 245 A 130 130 0 0 1 260 375 Z" fill="#C2185B"/>
<path d="M260 245 L 260 375 A 130 130 0 0 1 130 245 Z" fill="#C2185B"/>
<line x1="260" y1="115" x2="260" y2="375" stroke="#1F4E79" stroke-width="3"/>
<line x1="130" y1="245" x2="390" y2="245" stroke="#1F4E79" stroke-width="3"/>
<rect x="520" y="120" width="400" height="235" rx="12" fill="#FCE4D6" stroke="#C2185B" stroke-width="3.5"/>
<text x="720" y="170" font-size="26" text-anchor="middle" fill="#C2185B" font-weight="bold">colorié : 3/4</text>
<text x="720" y="222" font-size="22" text-anchor="middle" fill="#222">trois parts sur quatre</text>
<text x="720" y="272" font-size="22" text-anchor="middle" fill="#222">reste : 1/4</text>
<text x="720" y="322" font-size="19" text-anchor="middle" fill="#555">on lit « trois quarts »</text>
<text x="500" y="410" font-size="22" text-anchor="middle" fill="#333">En bas : en combien on coupe ; en haut : combien on prend.</text>
</g></svg>`);

svgPng('t7u1s3_termes', svgHead(1000,430,'Numérateur et dénominateur') + `
<g font-family="serif">
<text x="420" y="205" font-size="64" text-anchor="middle" fill="#C2185B" font-weight="bold">3</text>
<line x1="365" y1="230" x2="475" y2="230" stroke="#222" stroke-width="4"/>
<text x="420" y="290" font-size="64" text-anchor="middle" fill="#1F4E79" font-weight="bold">4</text>
<path d="M500 180 Q 620 165 640 175" fill="none" stroke="#C2185B" stroke-width="3" marker-end="url(#ajt)"/>
<text x="740" y="150" font-size="24" fill="#C2185B" font-weight="bold">numérateur</text>
<text x="740" y="185" font-size="20" fill="#555">parts prises : 3</text>
<path d="M500 290 Q 620 300 640 292" fill="none" stroke="#1F4E79" stroke-width="3" marker-end="url(#ajt)"/>
<text x="740" y="255" font-size="24" fill="#1F4E79" font-weight="bold">dénominateur</text>
<text x="740" y="290" font-size="20" fill="#555">parts de l’unité : 4</text>
<text x="250" y="385" font-size="23" text-anchor="middle" fill="#333">La barre se lit comme une partage ; jamais de zéro en bas.</text>
<defs><marker id="ajt" markerWidth="10" markerHeight="10" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#444"/></marker></defs>
</g></svg>`);

svgPng('t7u1s3_ligne', svgHead(1000,430,'Placer une fraction sur la ligne') + `
<g font-family="serif">
${(()=>{const X=v=>120+v*240; let r=''; for(let v=0;v<=3;v++){r+=`<line x1="${X(v)}" y1="205" x2="${X(v)}" y2="245" stroke="#1F4E79" stroke-width="3.5"/><text x="${X(v)}" y="282" font-size="26" text-anchor="middle" fill="#333">${v}</text>`;} for(let v=0;v<3;v++){for(let f=1;f<4;f++){r+=`<line x1="${X(v)+f*60}" y1="214" x2="${X(v)+f*60}" y2="236" stroke="#7A99AF" stroke-width="2.5"/>`;}} return r;})()}
<line x1="105" y1="225" x2="895" y2="225" stroke="#1F4E79" stroke-width="4"/>
<circle cx="540" cy="225" r="10" fill="#C2185B"/>
<text x="540" y="175" font-size="27" text-anchor="middle" fill="#C2185B" font-weight="bold">7/4</text>
<path d="M120 330 Q 330 385 540 330" fill="none" stroke="#1E7B34" stroke-width="3.5"/>
<text x="330" y="375" font-size="22" text-anchor="middle" fill="#1E7B34">7 parts d’un quart</text>
<rect x="620" y="120" width="330" height="90" rx="12" fill="#E9F5EC" stroke="#1E7B34" stroke-width="3"/>
<text x="785" y="158" font-size="22" text-anchor="middle" fill="#1E7B34" font-weight="bold">7/4 = 1 + 3/4</text>
<text x="785" y="192" font-size="19" text-anchor="middle" fill="#555">une unité + 3 quarts</text>
<text x="500" y="415" font-size="22" text-anchor="middle" fill="#333">La fraction peut dépasser 1 : on sort l’entier.</text>
</g></svg>`);

/* ---- L4 : équivalences et simplification ---- */
svgPng('t7u1s4_partager', svgHead(1000,430,'Même part, deux coupes : 1/2 = 2/4') + `
<g font-family="serif">
<rect x="120" y="140" width="300" height="110" fill="#EAF2F8" stroke="#1F4E79" stroke-width="3.5"/>
<rect x="120" y="140" width="150" height="110" fill="#C2185B"/>
<line x1="270" y1="140" x2="270" y2="250" stroke="#1F4E79" stroke-width="4"/>
<text x="270" y="292" font-size="26" text-anchor="middle" fill="#1F4E79" font-weight="bold">1/2</text>
<rect x="520" y="140" width="300" height="110" fill="#EAF2F8" stroke="#1F4E79" stroke-width="3.5"/>
<rect x="520" y="140" width="150" height="110" fill="#C2185B"/>
<line x1="670" y1="140" x2="670" y2="250" stroke="#1F4E79" stroke-width="4"/>
<line x1="595" y1="140" x2="595" y2="250" stroke="#1F4E79" stroke-width="3"/>
<line x1="745" y1="140" x2="745" y2="250" stroke="#1F4E79" stroke-width="3"/>
<text x="670" y="292" font-size="26" text-anchor="middle" fill="#1F4E79" font-weight="bold">2/4</text>
<rect x="300" y="330" width="400" height="60" rx="12" fill="#E9F5EC" stroke="#1E7B34" stroke-width="3.5"/>
<text x="500" y="368" font-size="26" text-anchor="middle" fill="#1E7B34" font-weight="bold">1/2 = 2/4 : même place</text>
<text x="500" y="420" font-size="20" text-anchor="middle" fill="#333">Couper autrement ne change pas la part prise.</text>
</g></svg>`);

svgPng('t7u1s4_prop', svgHead(1000,430,'Fractions équivalentes : même multiplicateur') + `
<g font-family="serif">
<text x="300" y="205" font-size="46" text-anchor="middle" fill="#222" font-weight="bold">2</text>
<line x1="255" y1="228" x2="345" y2="228" stroke="#222" stroke-width="4"/>
<text x="300" y="282" font-size="46" text-anchor="middle" fill="#222" font-weight="bold">4</text>
<path d="M370 190 Q 420 150 470 190" fill="none" stroke="#C2185B" stroke-width="3.5" marker-end="url(#aje)"/>
<text x="420" y="150" font-size="22" text-anchor="middle" fill="#C2185B" font-weight="bold">× 3</text>
<path d="M370 278 Q 420 318 470 278" fill="none" stroke="#C2185B" stroke-width="3.5" marker-end="url(#aje)"/>
<text x="420" y="330" font-size="22" text-anchor="middle" fill="#C2185B" font-weight="bold">× 3</text>
<text x="620" y="205" font-size="46" text-anchor="middle" fill="#C2185B" font-weight="bold">6</text>
<line x1="575" y1="228" x2="665" y2="228" stroke="#222" stroke-width="4"/>
<text x="620" y="282" font-size="46" text-anchor="middle" fill="#C2185B" font-weight="bold">12</text>
<text x="495" y="390" font-size="24" text-anchor="middle" fill="#1E7B34" font-weight="bold">2/4 = 6/12 : mêmes positions sur la ligne</text>
<text x="500" y="422" font-size="19" text-anchor="middle" fill="#333">On multiplie (ou divise) les deux termes par un même nombre.</text>
<defs><marker id="aje" markerWidth="10" markerHeight="10" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#C2185B"/></marker></defs>
</g></svg>`);

svgPng('t7u1s4_simplifier', svgHead(1000,430,'Simplifier jusqu’à l’irréductible') + `
<g font-family="serif">
${[['6/12','#C00000',150],['3/6','#C2185B',420],['1/2','#1E7B34',690]].map((f,i)=>`<rect x="${f[2]-95}" y="120" width="190" height="150" rx="12" fill="${i===2?'#E9F5EC':'#F7F3EE'}" stroke="${f[1]}" stroke-width="3.5"/><text x="${f[2]}" y="215" font-size="40" text-anchor="middle" fill="${f[1]}" font-weight="bold">${f[0]}</text>`).join('')}
<text x="285" y="205" font-size="26" text-anchor="middle" fill="#222" font-weight="bold">: 2</text>
<text x="555" y="205" font-size="26" text-anchor="middle" fill="#222" font-weight="bold">: 3</text>
<rect x="300" y="300" width="400" height="60" rx="12" fill="#E9F5EC" stroke="#1E7B34" stroke-width="3.5"/>
<text x="500" y="338" font-size="24" text-anchor="middle" fill="#1E7B34" font-weight="bold">1/2 est irréductible</text>
<text x="500" y="400" font-size="21" text-anchor="middle" fill="#333">On divise jusqu’à ce que plus aucun entier ne divise les deux termes.</text>
</g></svg>`);
