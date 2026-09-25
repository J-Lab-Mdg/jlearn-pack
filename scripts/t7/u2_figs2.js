const {svgPng, svgHead} = require('./lib');

/* ---- L6 : produits sans parenthèses ---- */
svgPng('t7u2s6_panier', svgHead(1000,430,'3 × 12 + 5 : les tomates du marché') + `
<g font-family="serif">
${[0,1,2].map(i=>`<ellipse cx="${180+i*130}" cy="215" rx="58" ry="40" fill="#FCE4D6" stroke="#C2185B" stroke-width="3"/>${[0,1,2,3,4,5].map(j=>`<circle cx="${158+i*130+(j%3)*22}" cy="${200+Math.floor(j/3)*24}" r="10" fill="#C2185B"/>`).join('')}<text x="${180+i*130}" y="288" font-size="20" text-anchor="middle" fill="#333">12 tomates</text>`).join('')}
<circle cx="620" cy="200" r="10" fill="#C2185B"/><circle cx="645" cy="205" r="10" fill="#C2185B"/><circle cx="620" cy="230" r="10" fill="#C2185B"/><circle cx="645" cy="232" r="10" fill="#C2185B"/><circle cx="632" cy="216" r="10" fill="#C2185B"/>
<text x="632" y="288" font-size="20" text-anchor="middle" fill="#333">+ 5</text>
<rect x="700" y="130" width="250" height="175" rx="12" fill="#EAF2F8" stroke="#1F4E79" stroke-width="3.5"/>
<text x="825" y="172" font-size="24" text-anchor="middle" fill="#1F4E79" font-weight="bold">3 × 12 + 5</text>
<text x="825" y="218" font-size="24" text-anchor="middle" fill="#222">= 36 + 5</text>
<text x="825" y="262" font-size="28" text-anchor="middle" fill="#1E7B34" font-weight="bold">= 41</text>
<text x="500" y="380" font-size="22" text-anchor="middle" fill="#333">La multiplication compte les paniers d’abord ; puis on ajoute le reste.</text>
</g></svg>`);

svgPng('t7u2s6_priorite', svgHead(1000,430,'L’ordre des priorités') + `
<g font-family="serif">
${[['1. les PARENTHÈSES','( )','#1F4E79'],['2. les PUISSANCES','aⁿ','#7A4E9E'],['3. × et ÷','×  ÷','#C2185B'],['4. + et −','+  −','#1E7B34']].map((r,i)=>`<rect x="${100+i*208}" y="120" width="188" height="150" rx="14" fill="#F7F3EE" stroke="${r[2]}" stroke-width="3.5"/><text x="${194+i*208}" y="200" font-size="34" text-anchor="middle" fill="${r[2]}" font-weight="bold">${r[1]}</text><text x="${194+i*208}" y="245" font-size="17" text-anchor="middle" fill="#333">${r[0]}</text>`).join('')}
<path d="M500 300 Q 500 330 500 330" fill="none"/>
<rect x="250" y="320" width="500" height="60" rx="12" fill="#EAF2F8" stroke="#1F4E79" stroke-width="3.5"/>
<text x="500" y="357" font-size="22" text-anchor="middle" fill="#1F4E79" font-weight="bold">à priorité égale : de gauche à droite</text>
</g></svg>`);

svgPng('t7u2s6_relatif', svgHead(1000,430,'Puissance d’abord : 3 × (−2)²') + `
<g font-family="serif">
<rect x="70" y="120" width="420" height="230" rx="14" fill="#E9F5EC" stroke="#1E7B34" stroke-width="3.5"/>
<text x="280" y="165" font-size="26" text-anchor="middle" fill="#1E7B34" font-weight="bold">3 × (−2)²</text>
<text x="280" y="215" font-size="23" text-anchor="middle" fill="#222">= 3 × (+4)</text>
<text x="280" y="272" font-size="30" text-anchor="middle" fill="#1E7B34" font-weight="bold">= +12</text>
<text x="280" y="318" font-size="19" text-anchor="middle" fill="#333">la puissance avant le produit</text>
<rect x="530" y="120" width="420" height="230" rx="14" fill="#FDE9E7" stroke="#C00000" stroke-width="3.5"/>
<text x="740" y="165" font-size="26" text-anchor="middle" fill="#C00000" font-weight="bold">(3 × (−2))²</text>
<text x="740" y="215" font-size="23" text-anchor="middle" fill="#222">= (−6)²</text>
<text x="740" y="272" font-size="30" text-anchor="middle" fill="#C00000" font-weight="bold">= +36</text>
<text x="740" y="318" font-size="19" text-anchor="middle" fill="#333">la parenthèse avant la puissance</text>
<text x="500" y="398" font-size="22" text-anchor="middle" fill="#333">Mêmes chiffres, résultats différents : les priorités décident.</text>
</g></svg>`);

/* ---- L7 : chaînes avec parenthèses ---- */
svgPng('t7u2s7_dabord', svgHead(1000,430,'La parenthèse en premier') + `
<g font-family="serif">
<rect x="180" y="120" width="640" height="80" rx="12" fill="#EAF2F8" stroke="#1F4E79" stroke-width="3.5"/>
<text x="500" y="168" font-size="30" text-anchor="middle" fill="#1F4E79" font-weight="bold">(3 + 4) × 5</text>
<rect x="300" y="137" width="160" height="46" rx="10" fill="none" stroke="#C2185B" stroke-width="3.5" stroke-dasharray="7 5"/>
<path d="M380 185 Q 380 235 500 245" fill="none" stroke="#C2185B" stroke-width="3"/>
<text x="500" y="268" font-size="26" text-anchor="middle" fill="#222">= 7 × 5</text>
<rect x="350" y="300" width="300" height="62" rx="12" fill="#E9F5EC" stroke="#1E7B34" stroke-width="3.5"/>
<text x="500" y="340" font-size="30" text-anchor="middle" fill="#1E7B34" font-weight="bold">= 35</text>
<text x="500" y="400" font-size="21" text-anchor="middle" fill="#333">Le cadre rouge se calcule avant tout le reste.</text>
</g></svg>`);

svgPng('t7u2s7_etapes', svgHead(1000,430,'Deux étages de priorités : 24 − (7 + 3 × 2)') + `
<g font-family="serif">
<text x="500" y="140" font-size="28" text-anchor="middle" fill="#1F4E79" font-weight="bold">24 − (7 + 3 × 2)</text>
<rect x="400" y="112" width="225" height="44" rx="10" fill="none" stroke="#C2185B" stroke-width="3" stroke-dasharray="7 5"/>
<text x="760" y="145" font-size="21" anchor="start" fill="#333">dans la parenthèse : × d’abord</text>
<text x="500" y="215" font-size="26" text-anchor="middle" fill="#222">= 24 − (7 + 6)</text>
<text x="500" y="272" font-size="26" text-anchor="middle" fill="#222">= 24 − 13</text>
<rect x="360" y="305" width="280" height="62" rx="12" fill="#E9F5EC" stroke="#1E7B34" stroke-width="3.5"/>
<text x="500" y="345" font-size="30" text-anchor="middle" fill="#1E7B34" font-weight="bold">= 11</text>
<text x="500" y="405" font-size="21" text-anchor="middle" fill="#333">On ne touche à la soustraction qu’à la toute fin.</text>
</g></svg>`);

svgPng('t7u2s7_comparer', svgHead(1000,430,'Les parenthèses tranchent') + `
<g font-family="serif">
<rect x="70" y="120" width="420" height="230" rx="14" fill="#EAF2F8" stroke="#1F4E79" stroke-width="3.5"/>
<text x="280" y="168" font-size="26" text-anchor="middle" fill="#1F4E79" font-weight="bold">(12 − 2) × 3</text>
<text x="280" y="220" font-size="23" text-anchor="middle" fill="#222">= 10 × 3</text>
<text x="280" y="280" font-size="30" text-anchor="middle" fill="#1F4E79" font-weight="bold">= 30</text>
<rect x="530" y="120" width="420" height="230" rx="14" fill="#FCE4D6" stroke="#C2185B" stroke-width="3.5"/>
<text x="740" y="168" font-size="26" text-anchor="middle" fill="#C2185B" font-weight="bold">12 − 2 × 3</text>
<text x="740" y="220" font-size="23" text-anchor="middle" fill="#222">= 12 − 6</text>
<text x="740" y="280" font-size="30" text-anchor="middle" fill="#C2185B" font-weight="bold">= 6</text>
<text x="500" y="395" font-size="22" text-anchor="middle" fill="#333">Sans parenthèses : priorités. Avec parenthèses : la parenthèse commande.</text>
</g></svg>`);

/* ---- L8 : écritures fractions ↔ décimaux ---- */
svgPng('t7u2s8_dix', svgHead(1000,430,'Compter les chiffres : 0,125 = 125/1000') + `
<g font-family="serif">
<text x="270" y="175" font-size="44" text-anchor="middle" fill="#1F4E79" font-weight="bold">0,125</text>
<text x="270" y="225" font-size="22" text-anchor="middle" fill="#333">trois chiffres après la virgule</text>
<line x1="195" y1="260" x2="345" y2="260" stroke="#C2185B" stroke-width="4"/>
<text x="270" y="300" font-size="30" text-anchor="middle" fill="#C2185B" font-weight="bold">125 / 1 000</text>
<text x="620" y="175" font-size="30" text-anchor="middle" fill="#1E7B34" font-weight="bold">= 1 / 8</text>
<text x="620" y="225" font-size="21" text-anchor="middle" fill="#333">après simplification par 125</text>
<rect x="260" y="340" width="480" height="58" rx="12" fill="#E9F5EC" stroke="#1E7B34" stroke-width="3.5"/>
<text x="500" y="376" font-size="22" text-anchor="middle" fill="#1E7B34" font-weight="bold">un zéro par chiffre après la virgule</text>
</g></svg>`);

svgPng('t7u2s8_vers', svgHead(1000,430,'De la fraction au décimal : diviser') + `
<g font-family="serif">
<text x="230" y="180" font-size="42" text-anchor="middle" fill="#1F4E79" font-weight="bold">3 / 4</text>
<text x="230" y="230" font-size="23" text-anchor="middle" fill="#333">la fraction est une division</text>
<g font-family="monospace" font-size="28" font-weight="bold">
<text x="520" y="170" text-anchor="end" fill="#222">3,00</text>
<line x1="532" y1="140" x2="532" y2="185" stroke="#222" stroke-width="3"/>
<text x="560" y="170" text-anchor="start" fill="#C2185B">4</text>
<line x1="532" y1="192" x2="625" y2="192" stroke="#222" stroke-width="3"/>
<text x="560" y="250" text-anchor="start" fill="#1E7B34">0,75</text>
</g>
<rect x="250" y="330" width="500" height="60" rx="12" fill="#E9F5EC" stroke="#1E7B34" stroke-width="3.5"/>
<text x="500" y="368" font-size="26" text-anchor="middle" fill="#1E7B34" font-weight="bold">3 : 4 = 0,75 — la division tombe juste</text>
</g></svg>`);

svgPng('t7u2s8_limite', svgHead(1000,430,'Quand la division ne finit pas') + `
<g font-family="serif">
<text x="300" y="190" font-size="36" text-anchor="middle" fill="#1F4E79" font-weight="bold">1 / 3 = 0,333…</text>
<text x="300" y="245" font-size="23" text-anchor="middle" fill="#C00000" font-weight="bold">le reste 1 revient toujours</text>
<path d="M265 145 Q 330 110 395 145" fill="none" stroke="#C00000" stroke-width="3"/>
<rect x="500" y="130" width="420" height="170" rx="12" fill="#F7F3EE" stroke="#C2185B" stroke-width="3"/>
<text x="710" y="178" font-size="22" text-anchor="middle" fill="#222">on garde la fraction 1/3</text>
<text x="710" y="222" font-size="22" text-anchor="middle" fill="#222">ou une valeur approchée</text>
<text x="710" y="262" font-size="22" text-anchor="middle" fill="#C2185B" font-weight="bold">≈ 0,33 annoncée comme telle</text>
<text x="500" y="390" font-size="22" text-anchor="middle" fill="#333">Toutes les fractions ne sont pas des décimaux : c’est normal.</text>
</g></svg>`);

/* ---- L9 : encadrement et valeurs approchées ---- */
svgPng('t7u2s9_droite', svgHead(1000,430,'7/3 entre 2 et 3') + `
<g font-family="serif">
${(()=>{const X=v=>150+(v-2)*120; let r=''; for(let v=2;v<=3.01;v+=0.1){const k=Math.abs(v-Math.round(v))<0.05; r+=`<line x1="${X(v).toFixed(1)}" y1="${k?200:208}" x2="${X(v).toFixed(1)}" y2="${k?240:232}" stroke="#1F4E79" stroke-width="${k?3.5:2}"/>`; if(k) r+=`<text x="${X(v).toFixed(1)}" y="275" font-size="26" text-anchor="middle" fill="#333">${Math.round(v)}</text>`;} return r;})()}
${[2.1,2.2,2.3,2.4,2.5,2.6,2.7,2.8,2.9].map(v=>{const x=150+(v-2)*120; return `<text x="${x}" y="310" font-size="16" text-anchor="middle" fill="#7A99AF">${v.toFixed(1).replace('.',',')}</text>`;}).join('')}
<line x1="135" y1="220" x2="865" y2="220" stroke="#1F4E79" stroke-width="4"/>
<circle cx="430" cy="220" r="11" fill="#C2185B"/>
<text x="430" y="180" font-size="26" text-anchor="middle" fill="#C2185B" font-weight="bold">7/3 ≈ 2,33</text>
<rect x="290" y="330" width="420" height="62" rx="12" fill="#E9F5EC" stroke="#1E7B34" stroke-width="3.5"/>
<text x="500" y="369" font-size="25" text-anchor="middle" fill="#1E7B34" font-weight="bold">2 &lt; 7/3 &lt; 3 et même 2,3 &lt; 7/3 &lt; 2,4</text>
</g></svg>`);

svgPng('t7u2s9_zoom', svgHead(1000,430,'Zoom : au centième') + `
<g font-family="serif">
<text x="500" y="150" font-size="26" text-anchor="middle" fill="#1F4E79" font-weight="bold">7 : 3 = 2,333… on poursuit la division</text>
${(()=>{const X=i=>160+i*90; let r=''; for(let i=0;i<=10;i++){const v=(2.3+i*0.01); r+=`<line x1="${X(i)}" y1="205" x2="${X(i)}" y2="${i%1===0?240:230}" stroke="#1F4E79" stroke-width="3"/>`; if(i===0||i===3||i===4||i===10) r+=`<text x="${X(i)}" y="278" font-size="22" text-anchor="middle" fill="#333">${v.toFixed(2).replace('.',',')}</text>`;} return r;})()}
<line x1="145" y1="222" x2="880" y2="222" stroke="#1F4E79" stroke-width="4"/>
<circle cx="461" cy="222" r="11" fill="#C2185B"/>
<text x="461" y="185" font-size="24" text-anchor="middle" fill="#C2185B" font-weight="bold">7/3</text>
<rect x="290" y="330" width="420" height="62" rx="12" fill="#FCE4D6" stroke="#C2185B" stroke-width="3.5"/>
<text x="500" y="369" font-size="25" text-anchor="middle" fill="#C2185B" font-weight="bold">2,33 &lt; 7/3 &lt; 2,34</text>
</g></svg>`);

svgPng('t7u2s9_defaut', svgHead(1000,430,'Par défaut ou par excès ?') + `
<g font-family="serif">
<rect x="80" y="125" width="400" height="210" rx="14" fill="#E9F5EC" stroke="#1E7B34" stroke-width="3.5"/>
<text x="280" y="170" font-size="25" text-anchor="middle" fill="#1E7B34" font-weight="bold">PAR DÉFAUT</text>
<text x="280" y="225" font-size="22" text-anchor="middle" fill="#222">la borne inférieure</text>
<text x="280" y="265" font-size="22" text-anchor="middle" fill="#222">on coupe l’écriture</text>
<text x="280" y="312" font-size="26" text-anchor="middle" fill="#1E7B34" font-weight="bold">7/3 → 2,33</text>
<rect x="520" y="125" width="400" height="210" rx="14" fill="#FDE9E7" stroke="#C00000" stroke-width="3.5"/>
<text x="720" y="170" font-size="25" text-anchor="middle" fill="#C00000" font-weight="bold">PAR EXCÈS</text>
<text x="720" y="225" font-size="22" text-anchor="middle" fill="#222">la borne supérieure</text>
<text x="720" y="265" font-size="22" text-anchor="middle" fill="#222">on ajoute un pas</text>
<text x="720" y="312" font-size="26" text-anchor="middle" fill="#C00000" font-weight="bold">7/3 → 2,34</text>
<text x="500" y="392" font-size="22" text-anchor="middle" fill="#333">La valeur exacte reste entre les deux, toujours.</text>
</g></svg>`);
