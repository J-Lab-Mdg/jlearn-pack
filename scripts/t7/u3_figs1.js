const {svgPng, svgHead} = require('./lib');

/* ---- L1 : la lettre remplace un nombre ---- */
svgPng('t7u3s1_lettre', svgHead(1000,430,'La lettre c et le produit 4c') + `
<g font-family="serif">
<rect x="120" y="130" width="180" height="180" fill="none" stroke="#1F4E79" stroke-width="4"/>
<text x="210" y="350" font-size="26" text-anchor="middle" fill="#1F4E79" font-weight="bold">côté c</text>
<text x="95" y="230" font-size="26" text-anchor="middle" fill="#1F4E79">c</text>
<text x="480" y="185" font-size="30" text-anchor="middle" fill="#333">tour : c + c + c + c</text>
<text x="480" y="245" font-size="34" text-anchor="middle" fill="#C2185B" font-weight="bold">= 4 × c = 4c</text>
<rect x="640" y="140" width="290" height="150" rx="12" fill="#EAF2F8" stroke="#1F4E79" stroke-width="3"/>
<text x="785" y="185" font-size="22" text-anchor="middle" fill="#1F4E79" font-weight="bold">le signe × s’efface</text>
<text x="785" y="228" font-size="22" text-anchor="middle" fill="#222">devant une lettre :</text>
<text x="785" y="265" font-size="22" text-anchor="middle" fill="#222">4 × c → 4c</text>
<text x="500" y="392" font-size="22" text-anchor="middle" fill="#333">Sans signe entre un nombre et une lettre : c’est la multiplication qui parle.</text>
</g></svg>`);

svgPng('t7u3s1_perimetre', svgHead(1000,430,'Le tour du jardin : P = 2 × (L + l)') + `
<g font-family="serif">
<rect x="140" y="150" width="380" height="170" fill="#E9F5EC" stroke="#1E7B34" stroke-width="4"/>
<text x="330" y="136" font-size="26" text-anchor="middle" fill="#1F4E79" font-weight="bold">L</text>
<text x="126" y="242" font-size="26" text-anchor="middle" fill="#C2185B" font-weight="bold">l</text>
<text x="330" y="352" font-size="22" text-anchor="middle" fill="#333">le jardin de l’école</text>
<rect x="590" y="140" width="350" height="190" rx="12" fill="#FCE4D6" stroke="#C2185B" stroke-width="3.5"/>
<text x="765" y="185" font-size="22" text-anchor="middle" fill="#222">deux longueurs</text>
<text x="765" y="222" font-size="22" text-anchor="middle" fill="#222">et deux largeurs :</text>
<text x="765" y="270" font-size="27" text-anchor="middle" fill="#C2185B" font-weight="bold">P = 2 × (L + l)</text>
<text x="765" y="308" font-size="20" text-anchor="middle" fill="#333">valable pour toutes</text>
<text x="765" y="332" font-size="20" text-anchor="middle" fill="#333">les dimensions</text>
<text x="500" y="398" font-size="21" text-anchor="middle" fill="#333">La formule attend les mesures : elle ne vieillit jamais.</text>
</g></svg>`);

svgPng('t7u3s1_valeur', svgHead(1000,430,'Si c = 9 m') + `
<g font-family="serif">
<text x="300" y="165" font-size="30" text-anchor="middle" fill="#1F4E79" font-weight="bold">P = 4c</text>
<text x="300" y="215" font-size="24" text-anchor="middle" fill="#333">on remplace c par 9 :</text>
<text x="300" y="265" font-size="28" text-anchor="middle" fill="#222">P = 4 × 9</text>
<rect x="200" y="295" width="200" height="60" rx="12" fill="#E9F5EC" stroke="#1E7B34" stroke-width="3.5"/>
<text x="300" y="333" font-size="28" text-anchor="middle" fill="#1E7B34" font-weight="bold">= 36 m</text>
<rect x="560" y="140" width="350" height="200" rx="12" fill="#EAF2F8" stroke="#1F4E79" stroke-width="3"/>
<text x="735" y="185" font-size="22" text-anchor="middle" fill="#1F4E79" font-weight="bold">la même formule</text>
<text x="735" y="230" font-size="22" text-anchor="middle" fill="#222">c = 9 → 36 m</text>
<text x="735" y="268" font-size="22" text-anchor="middle" fill="#222">c = 12 → 48 m</text>
<text x="735" y="306" font-size="22" text-anchor="middle" fill="#222">c = 5,5 → 22 m</text>
<text x="500" y="398" font-size="21" text-anchor="middle" fill="#333">Une lettre change de valeur : c’est bien une variable.</text>
</g></svg>`);

/* ---- L2 : calculer une expression littérale ---- */
svgPng('t7u3s2_machine', svgHead(1000,430,'La machine 3x + 2') + `
<g font-family="serif">
<rect x="90" y="165" width="120" height="70" rx="12" fill="#EAF2F8" stroke="#1F4E79" stroke-width="3.5"/>
<text x="150" y="209" font-size="28" text-anchor="middle" fill="#1F4E79" font-weight="bold">x</text>
<path d="M215 200 L 295 200" stroke="#222" stroke-width="3.5" marker-end="url(#m1)"/>
<rect x="300" y="165" width="160" height="70" rx="12" fill="#FCE4D6" stroke="#C2185B" stroke-width="3.5"/>
<text x="380" y="209" font-size="26" text-anchor="middle" fill="#C2185B" font-weight="bold">× 3</text>
<path d="M465 200 L 545 200" stroke="#222" stroke-width="3.5" marker-end="url(#m1)"/>
<rect x="550" y="165" width="160" height="70" rx="12" fill="#FCE4D6" stroke="#C2185B" stroke-width="3.5"/>
<text x="630" y="209" font-size="26" text-anchor="middle" fill="#C2185B" font-weight="bold">+ 2</text>
<path d="M715 200 L 795 200" stroke="#222" stroke-width="3.5" marker-end="url(#m1)"/>
<rect x="800" y="165" width="140" height="70" rx="12" fill="#E9F5EC" stroke="#1E7B34" stroke-width="3.5"/>
<text x="870" y="209" font-size="26" text-anchor="middle" fill="#1E7B34" font-weight="bold">3x + 2</text>
<text x="500" y="300" font-size="23" text-anchor="middle" fill="#333">l’expression est le mode d’emploi de la machine</text>
<rect x="320" y="330" width="360" height="58" rx="12" fill="#EAF2F8" stroke="#1F4E79" stroke-width="3.5"/>
<text x="500" y="367" font-size="24" text-anchor="middle" fill="#1F4E79" font-weight="bold">entrée x = 5 → sortie 17</text>
</g><defs><marker id="m1" markerWidth="10" markerHeight="10" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#222"/></marker></defs></svg>`);

svgPng('t7u3s2_tableau', svgHead(1000,430,'Substituer, puis calculer') + `
<g font-family="serif">
${[['expression','3x + 2'],['on montre les ×','3 × x + 2'],['on substitue','3 × 5 + 2'],['priorités','15 + 2'],['valeur','17']].map((r,i)=>`<rect x="150" y="${105+i*62}" width="290" height="52" rx="8" fill="#F7F3EE" stroke="#1F4E79" stroke-width="2.5"/><text x="295" y="${139+i*62}" font-size="21" text-anchor="middle" fill="#333">${r[0]}</text><rect x="470" y="${105+i*62}" width="380" height="52" rx="8" fill="${i===4?'#E9F5EC':'#fff'}" stroke="${i===4?'#1E7B34':'#C2185B'}" stroke-width="2.5"/><text x="660" y="${139+i*62}" font-size="24" text-anchor="middle" fill="${i===4?'#1E7B34':'#222'}" font-weight="bold">${r[1]}</text>`).join('')}
<text x="500" y="425" font-size="20" text-anchor="middle" fill="#333">Substitution pour x = 5 : chaque étape s’écrit.</text>
</g></svg>`);

svgPng('t7u3s2_deux', svgHead(1000,430,'Deux lettres : 2(a + b)') + `
<g font-family="serif">
<text x="500" y="145" font-size="30" text-anchor="middle" fill="#1F4E79" font-weight="bold">2(a + b) pour a = 6 et b = 4</text>
<text x="500" y="210" font-size="26" text-anchor="middle" fill="#222">= 2 × (6 + 4)</text>
<text x="500" y="270" font-size="26" text-anchor="middle" fill="#222">= 2 × 10</text>
<rect x="350" y="300" width="300" height="62" rx="12" fill="#E9F5EC" stroke="#1E7B34" stroke-width="3.5"/>
<text x="500" y="341" font-size="30" text-anchor="middle" fill="#1E7B34" font-weight="bold">= 20</text>
<text x="500" y="398" font-size="21" text-anchor="middle" fill="#333">Les parenthèses gardent le groupe (a + b) uni avant la multiplication.</text>
</g></svg>`);

/* ---- L3 : produire une expression littérale ---- */
svgPng('t7u3s3_taxi', svgHead(1000,430,'Du tarif à la formule') + `
<g font-family="serif">
<rect x="70" y="115" width="420" height="235" rx="14" fill="#F7F3EE" stroke="#1F4E79" stroke-width="3.5"/>
<text x="280" y="160" font-size="23" text-anchor="middle" fill="#1F4E79" font-weight="bold">Panneau du taxi</text>
<text x="280" y="215" font-size="22" text-anchor="middle" fill="#222">prise en charge : 1 000 FMG</text>
<text x="280" y="258" font-size="22" text-anchor="middle" fill="#222">chaque km : 500 FMG</text>
<text x="280" y="305" font-size="20" text-anchor="middle" fill="#333">x = nombre de km</text>
<path d="M500 230 L 560 230" stroke="#C2185B" stroke-width="4" marker-end="url(#t1)"/>
<rect x="570" y="115" width="380" height="235" rx="14" fill="#EAF2F8" stroke="#1F4E79" stroke-width="3.5"/>
<text x="760" y="170" font-size="24" text-anchor="middle" fill="#1F4E79" font-weight="bold">formule</text>
<text x="760" y="230" font-size="28" text-anchor="middle" fill="#C2185B" font-weight="bold">y = 1 000 + 500x</text>
<text x="760" y="280" font-size="20" text-anchor="middle" fill="#333">x = 8 → y = 5 000 FMG ✓</text>
<text x="500" y="398" font-size="21" text-anchor="middle" fill="#333">La prise en charge se paie une seule fois : elle reste hors du produit.</text>
</g><defs><marker id="t1" markerWidth="10" markerHeight="10" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#C2185B"/></marker></defs></svg>`);

svgPng('t7u3s3_relation', svgHead(1000,430,'y = 2 500x : deux grandeurs liées') + `
<g font-family="serif">
${[['x (kg)','1','2','3','4'],['y (FMG)','2 500','5 000','7 500','10 000']].map((row,r)=>row.map((c,i)=>`<rect x="${140+i*180}" y="${135+r*75}" width="170" height="68" rx="8" fill="${i===0?'#1F4E79':(r===0?'#EAF2F8':'#FCE4D6')}" stroke="#1F4E79" stroke-width="2"/><text x="${225+i*180}" y="${179+r*75}" font-size="23" text-anchor="middle" fill="${i===0?'#fff':'#222'}" font-weight="${i===0||r===0?'bold':'normal'}">${c}</text>`).join('')).join('')}
<path d="M397 320 Q 500 355 603 320" fill="none" stroke="#C2185B" stroke-width="3" marker-end="url(#r1)"/>
<text x="500" y="375" font-size="24" text-anchor="middle" fill="#C2185B" font-weight="bold">chaque x donne un seul y : y = 2 500 × x</text>
</g><defs><marker id="r1" markerWidth="10" markerHeight="10" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#C2185B"/></marker></defs></svg>`);

svgPng('t7u3s3_traduire', svgHead(1000,430,'Des mots aux symboles') + `
<g font-family="serif">
<rect x="80" y="130" width="420" height="180" rx="14" fill="#F7F3EE" stroke="#C2185B" stroke-width="3.5"/>
<text x="290" y="185" font-size="22" text-anchor="middle" fill="#222">« le triple d’un nombre,</text>
<text x="290" y="230" font-size="22" text-anchor="middle" fill="#222">augmenté de 7 »</text>
<text x="290" y="282" font-size="20" text-anchor="middle" fill="#333">le nombre : n</text>
<path d="M510 220 L 570 220" stroke="#1F4E79" stroke-width="4" marker-end="url(#d1)"/>
<rect x="580" y="130" width="340" height="180" rx="14" fill="#EAF2F8" stroke="#1F4E79" stroke-width="3.5"/>
<text x="750" y="200" font-size="28" text-anchor="middle" fill="#1F4E79" font-weight="bold">y = 3n + 7</text>
<text x="750" y="255" font-size="20" text-anchor="middle" fill="#333">n = 10 → y = 37 ✓</text>
<text x="500" y="380" font-size="22" text-anchor="middle" fill="#333">Traduire : une lettre pour l’inconnu, des signes pour les actions.</text>
</g><defs><marker id="d1" markerWidth="10" markerHeight="10" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#1F4E79"/></marker></defs></svg>`);

/* ---- L4 : réduire une expression ---- */
svgPng('t7u3s4_regrouper', svgHead(1000,430,'Même famille : 3x + 5x = 8x') + `
<g font-family="serif">
${[0,1,2].map(i=>`<rect x="${110+i*100}" y="150" width="82" height="82" rx="10" fill="#FCE4D6" stroke="#C2185B" stroke-width="3"/><text x="${151+i*100}" y="200" font-size="26" text-anchor="middle" fill="#C2185B" font-weight="bold">x</text>`).join('')}
<text x="430" y="205" font-size="40" text-anchor="middle" fill="#222">+</text>
${[0,1,2,3,4].map(i=>`<rect x="${480+i*86}" y="150" width="72" height="82" rx="10" fill="#EAF2F8" stroke="#1F4E79" stroke-width="3"/><text x="${516+i*86}" y="200" font-size="26" text-anchor="middle" fill="#1F4E79" font-weight="bold">x</text>`).join('')}
<rect x="280" y="265" width="440" height="70" rx="12" fill="#E9F5EC" stroke="#1E7B34" stroke-width="3.5"/>
<text x="500" y="310" font-size="30" text-anchor="middle" fill="#1E7B34" font-weight="bold">3x + 5x = (3 + 5)x = 8x</text>
<text x="500" y="380" font-size="22" text-anchor="middle" fill="#333">Les paniers sont identiques : on additionne simplement les comptes.</text>
</g></svg>`);

svgPng('t7u3s4_notation', svgHead(1000,430,'Écritures simplifiées') + `
<g font-family="serif">
${[['5 × a','5a'],['a × b','ab'],['x × x','x²'],['1 × x','x']].map((r,i)=>`<rect x="${110+i*210}" y="130" width="180" height="120" rx="12" fill="#F7F3EE" stroke="#1F4E79" stroke-width="3"/><text x="${200+i*210}" y="175" font-size="22" text-anchor="middle" fill="#333">${r[0]}</text><text x="${200+i*210}" y="225" font-size="30" text-anchor="middle" fill="#C2185B" font-weight="bold">= ${r[1]}</text>`).join('')}
<rect x="220" y="290" width="560" height="64" rx="12" fill="#EAF2F8" stroke="#1F4E79" stroke-width="3.5"/>
<text x="500" y="330" font-size="23" text-anchor="middle" fill="#1F4E79" font-weight="bold">le nombre d’abord : a × 5 s’écrit aussi 5a</text>
<text x="500" y="395" font-size="21" text-anchor="middle" fill="#333">1 × x s’écrit x tout court ; x × x se lit « x au carré ».</text>
</g></svg>`);

svgPng('t7u3s4_bilan', svgHead(1000,430,'Deux familles, deux regroupements') + `
<g font-family="serif">
<text x="500" y="150" font-size="30" text-anchor="middle" fill="#1F4E79" font-weight="bold">2x + 3 + 4x + 1</text>
<path d="M258 168 Q 310 195 362 168" fill="none" stroke="#C2185B" stroke-width="3"/>
<path d="M462 168 Q 514 195 566 168" fill="none" stroke="#C2185B" stroke-width="3"/>
<path d="M376 168 Q 410 192 444 168" fill="none" stroke="#1E7B34" stroke-width="3"/>
<path d="M590 168 Q 628 192 666 168" fill="none" stroke="#1E7B34" stroke-width="3"/>
<text x="500" y="225" font-size="26" text-anchor="middle" fill="#C2185B">famille x : 2x + 4x = 6x</text>
<text x="500" y="278" font-size="26" text-anchor="middle" fill="#1E7B34">famille nombres : 3 + 1 = 4</text>
<rect x="330" y="310" width="340" height="64" rx="12" fill="#E9F5EC" stroke="#1E7B34" stroke-width="3.5"/>
<text x="500" y="351" font-size="30" text-anchor="middle" fill="#1E7B34" font-weight="bold">= 6x + 4</text>
<text x="500" y="410" font-size="20" text-anchor="middle" fill="#333">Chaque famille se traite à part ; x et les nombres ne fusionnent jamais.</text>
</g></svg>`);

/* ---- L5 : développer avec la distributivité ---- */
svgPng('t7u3s5_aire', svgHead(1000,430,'Le mur : deux calculs, une aire') + `
<g font-family="serif">
<rect x="120" y="150" width="260" height="120" fill="#EAF2F8" stroke="#1F4E79" stroke-width="3.5"/>
<rect x="380" y="150" width="200" height="120" fill="#FCE4D6" stroke="#C2185B" stroke-width="3.5"/>
<text x="250" y="135" font-size="24" text-anchor="middle" fill="#1F4E79" font-weight="bold">a</text>
<text x="480" y="135" font-size="24" text-anchor="middle" fill="#C2185B" font-weight="bold">b</text>
<text x="104" y="216" font-size="24" text-anchor="middle" fill="#222" font-weight="bold">k</text>
<text x="250" y="225" font-size="26" text-anchor="middle" fill="#1F4E79" font-weight="bold">ka</text>
<text x="480" y="225" font-size="26" text-anchor="middle" fill="#C2185B" font-weight="bold">kb</text>
<text x="760" y="190" font-size="24" text-anchor="middle" fill="#222">grande bande : k(a + b)</text>
<text x="760" y="240" font-size="24" text-anchor="middle" fill="#222">deux pans : ka + kb</text>
<rect x="560" y="285" width="400" height="62" rx="12" fill="#E9F5EC" stroke="#1E7B34" stroke-width="3.5"/>
<text x="760" y="325" font-size="25" text-anchor="middle" fill="#1E7B34" font-weight="bold">k(a + b) = ka + kb</text>
<text x="500" y="398" font-size="21" text-anchor="middle" fill="#333">L’aire totale ne change pas qu’on la calcule en une fois ou en deux.</text>
</g></svg>`);

svgPng('t7u3s5_developper', svgHead(1000,430,'La flèche en éventail : 3(a + 5)') + `
<g font-family="serif">
<text x="320" y="200" font-size="36" text-anchor="middle" fill="#1F4E79" font-weight="bold">3(a + 5)</text>
<path d="M280 225 Q 250 265 262 300" fill="none" stroke="#C2185B" stroke-width="3.5" marker-end="url(#v1)"/>
<path d="M300 225 Q 330 262 352 300" fill="none" stroke="#C2185B" stroke-width="3.5" marker-end="url(#v1)"/>
<text x="200" y="340" font-size="30" text-anchor="middle" fill="#C2185B" font-weight="bold">3a</text>
<text x="420" y="340" font-size="30" text-anchor="middle" fill="#C2185B" font-weight="bold">+ 15</text>
<path d="M560 260 L 650 260" stroke="#1E7B34" stroke-width="4" marker-end="url(#v2)"/>
<text x="780" y="270" font-size="27" text-anchor="middle" fill="#1E7B34" font-weight="bold">3a + 15</text>
<text x="500" y="395" font-size="21" text-anchor="middle" fill="#333">Chaque terme reçoit le facteur : le signe d’addition reste entre eux.</text>
</g><defs><marker id="v1" markerWidth="10" markerHeight="10" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#C2185B"/></marker><marker id="v2" markerWidth="10" markerHeight="10" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#1E7B34"/></marker></defs></svg>`);

svgPng('t7u3s5_verifier', svgHead(1000,430,'Vérifier pour x = 7 : 44 des deux côtés') + `
<g font-family="serif">
<rect x="90" y="130" width="380" height="200" rx="14" fill="#EAF2F8" stroke="#1F4E79" stroke-width="3.5"/>
<text x="280" y="175" font-size="24" text-anchor="middle" fill="#1F4E79" font-weight="bold">forme produit</text>
<text x="280" y="228" font-size="24" text-anchor="middle" fill="#222">4(2 × 7 − 3)</text>
<text x="280" y="270" font-size="24" text-anchor="middle" fill="#222">= 4 × 11</text>
<text x="280" y="312" font-size="28" text-anchor="middle" fill="#1F4E79" font-weight="bold">= 44</text>
<rect x="530" y="130" width="380" height="200" rx="14" fill="#FCE4D6" stroke="#C2185B" stroke-width="3.5"/>
<text x="720" y="175" font-size="24" text-anchor="middle" fill="#C2185B" font-weight="bold">forme développée</text>
<text x="720" y="228" font-size="24" text-anchor="middle" fill="#222">8 × 7 − 12</text>
<text x="720" y="270" font-size="24" text-anchor="middle" fill="#222">= 56 − 12</text>
<text x="720" y="312" font-size="28" text-anchor="middle" fill="#C2185B" font-weight="bold">= 44</text>
<text x="500" y="390" font-size="22" text-anchor="middle" fill="#333">Même valeur : le développement est correct.</text>
</g></svg>`);
