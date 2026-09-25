const {svgPng, svgHead} = require('./lib');

/* ---- L5 : opérations sur les décimaux ---- */
svgPng('t7u1s5_add', svgHead(1000,430,'Addition posée : virgule sous virgule') + `
<g font-family="serif">
<g font-family="monospace" font-size="34" font-weight="bold">
<text x="380" y="145" text-anchor="end" fill="#222">12,50</text>
<text x="380" y="195" text-anchor="end" fill="#C2185B">+  3,75</text>
<line x1="190" y1="215" x2="380" y2="215" stroke="#222" stroke-width="3"/>
<text x="380" y="265" text-anchor="end" fill="#1E7B34">16,25</text>
<circle cx="310" cy="132" r="7" fill="#C2185B"/>
<circle cx="310" cy="182" r="7" fill="#C2185B"/>
<circle cx="310" cy="252" r="7" fill="#1E7B34"/>
</g>
<text x="312" y="320" font-family="serif" font-size="22" text-anchor="middle" fill="#333">la virgule reste dans sa colonne</text>
<rect x="560" y="110" width="370" height="215" rx="12" fill="#EAF2F8" stroke="#1F4E79" stroke-width="3.5"/>
<text x="745" y="155" font-size="22" text-anchor="middle" fill="#1F4E79" font-weight="bold">à la soustraction</text>
<text x="745" y="200" font-family="monospace" font-size="24" text-anchor="middle" fill="#222">50,00 − 12,35</text>
<text x="745" y="245" font-family="monospace" font-size="28" text-anchor="middle" fill="#1E7B34" font-weight="bold">= 37,65</text>
<text x="745" y="292" font-size="19" text-anchor="middle" fill="#555">zéros d’appoint permis</text>
<text x="500" y="395" font-size="23" text-anchor="middle" fill="#333">Vérifier l’ordre de grandeur : 12,5 + 3,75 ≈ 16 ✓</text>
</g></svg>`);

svgPng('t7u1s5_mult', svgHead(1000,430,'Multiplication : compter les rangs') + `
<g font-family="serif">
<g font-family="monospace" font-size="34" font-weight="bold">
<text x="380" y="140" text-anchor="end" fill="#222">  2,5</text>
<text x="380" y="190" text-anchor="end" fill="#C2185B">× 1,2</text>
<line x1="190" y1="210" x2="380" y2="210" stroke="#222" stroke-width="3"/>
<text x="380" y="260" text-anchor="end" fill="#1E7B34">3,00</text>
</g>
<path d="M340 120 Q 440 80 540 120" fill="none" stroke="#1F4E79" stroke-width="3" marker-end="url(#ajm)"/>
<text x="440" y="85" font-size="21" text-anchor="middle" fill="#1F4E79">1 rang + 1 rang = 2 rangs</text>
<rect x="560" y="140" width="370" height="180" rx="12" fill="#E9F5EC" stroke="#1E7B34" stroke-width="3.5"/>
<text x="745" y="185" font-size="23" text-anchor="middle" fill="#1E7B34" font-weight="bold">25 × 12 = 300</text>
<text x="745" y="230" font-size="23" text-anchor="middle" fill="#222">2 rangs → 3,00</text>
<text x="745" y="278" font-size="21" text-anchor="middle" fill="#555">3,00 = 3</text>
<text x="500" y="392" font-size="22" text-anchor="middle" fill="#333">Contrôle : 2,5 × 1,2 ≈ 2,5 × 1 = 2,5 — 3 est cohérent.</text>
<defs><marker id="ajm" markerWidth="10" markerHeight="10" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#1F4E79"/></marker></defs>
</g></svg>`);

svgPng('t7u1s5_div', svgHead(1000,430,'Diviser un décimal : la virgule suit') + `
<g font-family="serif">
<g font-family="monospace" font-size="32" font-weight="bold">
<text x="220" y="150" fill="#222">5,40</text>
<line x1="330" y1="125" x2="330" y2="240" stroke="#222" stroke-width="3"/>
<line x1="180" y1="125" x2="420" y2="125" stroke="#222" stroke-width="0" />
<text x="385" y="150" fill="#C2185B">4</text>
<text x="385" y="215" text-anchor="start" fill="#1E7B34">1,35</text>
<line x1="355" y1="165" x2="475" y2="165" stroke="#222" stroke-width="2.5"/>
</g>
<text x="300" y="310" font-family="serif" font-size="22" text-anchor="middle" fill="#333">on croise la virgule : on l’écrit au quotient</text>
<rect x="590" y="120" width="340" height="200" rx="12" fill="#EAF2F8" stroke="#1F4E79" stroke-width="3.5"/>
<text x="760" y="165" font-size="23" text-anchor="middle" fill="#1F4E79" font-weight="bold">5,4 : 4 = 1,35</text>
<text x="760" y="212" font-size="22" text-anchor="middle" fill="#222">3 : 8 = 0,375</text>
<text x="760" y="260" font-size="19" text-anchor="middle" fill="#555">la division peut ne pas</text>
<text x="760" y="290" font-size="19" text-anchor="middle" fill="#555">tomber juste tout de suite</text>
</g></svg>`);

/* ---- L6 : les relatifs ---- */
svgPng('t7u1s6_famille', svgHead(1000,430,'La famille des relatifs') + `
<g font-family="serif">
<rect x="70" y="110" width="270" height="235" rx="12" fill="#E9F5EC" stroke="#1E7B34" stroke-width="3.5"/>
<text x="205" y="155" font-size="24" text-anchor="middle" fill="#1E7B34" font-weight="bold">positifs</text>
<text x="205" y="205" font-size="27" text-anchor="middle" fill="#222">+4 ; +7 ; +2,5</text>
<text x="205" y="250" font-size="20" text-anchor="middle" fill="#555">à droite de zéro</text>
<text x="205" y="300" font-size="20" text-anchor="middle" fill="#555">richesse, hauteur, chaleur</text>
<rect x="390" y="110" width="150" height="235" rx="12" fill="#F7F3EE" stroke="#C28E96" stroke-width="3.5"/>
<text x="465" y="165" font-size="34" text-anchor="middle" fill="#C2185B" font-weight="bold">0</text>
<text x="465" y="220" font-size="19" text-anchor="middle" fill="#555">sans signe,</text>
<text x="465" y="250" font-size="19" text-anchor="middle" fill="#555">la frontière</text>
<rect x="590" y="110" width="270" height="235" rx="12" fill="#FDE9E7" stroke="#C00000" stroke-width="3.5"/>
<text x="725" y="155" font-size="24" text-anchor="middle" fill="#C00000" font-weight="bold">négatifs</text>
<text x="725" y="205" font-size="27" text-anchor="middle" fill="#222">−7 ; −0,75 ; −12</text>
<text x="725" y="250" font-size="20" text-anchor="middle" fill="#555">à gauche de zéro</text>
<text x="725" y="300" font-size="20" text-anchor="middle" fill="#555">dette, sous-sol, froid</text>
<text x="500" y="400" font-size="23" text-anchor="middle" fill="#333">Entiers relatifs (sans virgule) et décimaux relatifs (avec virgule).</text>
</g></svg>`);

svgPng('t7u1s6_ligne', svgHead(1000,430,'Les relatifs sur la droite graduée') + `
<g font-family="serif">
${(()=>{const X=v=>100+(v+5)*100; let r=''; for(let v=-5;v<=3;v++){r+=`<line x1="${X(v)}" y1="195" x2="${X(v)}" y2="235" stroke="#1F4E79" stroke-width="3.5"/><text x="${X(v)}" y="272" font-size="25" text-anchor="middle" fill="${v<0?'#C00000':'#1E7B34'}" font-weight="bold">${v<0?'−'+(-v):(v>0?'+'+v:'0')}</text>`;} return r;})()}
<line x1="85" y1="215" x2="915" y2="215" stroke="#1F4E79" stroke-width="4"/>
<circle cx="300" cy="215" r="10" fill="#C00000"/>
<text x="300" y="165" font-size="24" text-anchor="middle" fill="#C00000" font-weight="bold">−3</text>
<circle cx="700" cy="215" r="10" fill="#1E7B34"/>
<text x="700" y="165" font-size="24" text-anchor="middle" fill="#1E7B34" font-weight="bold">+3</text>
<path d="M300 305 Q 500 370 700 305" fill="none" stroke="#1F4E79" stroke-width="3" stroke-dasharray="7 6"/>
<text x="500" y="365" font-size="23" text-anchor="middle" fill="#1F4E79">opposés : même distance à 0</text>
</g></svg>`);

svgPng('t7u1s6_exemples', svgHead(1000,430,'Le signe parle dans la vie') + `
<g font-family="serif">
${[['🌡','+32° chaud / −5° gel','#C00000'],['🛗','−2 : deux sous-sols','#1F4E79'],['💰','−8 000 : découvert','#1E7B34']].map((r,i)=>`<rect x="${90+i*290}" y="115" width="270" height="200" rx="12" fill="#F7F3EE" stroke="${r[2]}" stroke-width="3.5"/><text x="${225+i*290}" y="200" font-size="52" text-anchor="middle">${r[0]}</text><text x="${225+i*290}" y="270" font-size="20" text-anchor="middle" fill="#222">${r[1]}</text>`).join('')}
<text x="500" y="392" font-size="23" text-anchor="middle" fill="#333">Le signe porte l’information : au-dessus/en-dessous, avoir/devoir.</text>
</g></svg>`);

/* ---- L7 : comparaison des relatifs ---- */
svgPng('t7u1s7_regle', svgHead(1000,430,'Positif contre négatif : le positif gagne') + `
<g font-family="serif">
<rect x="100" y="130" width="360" height="150" rx="12" fill="#E9F5EC" stroke="#1E7B34" stroke-width="3.5"/>
<text x="280" y="192" font-size="30" text-anchor="middle" fill="#1E7B34" font-weight="bold">+1</text>
<text x="280" y="245" font-size="20" text-anchor="middle" fill="#555">le plus petit positif</text>
<text x="500" y="215" font-size="40" text-anchor="middle" fill="#222" font-weight="bold">&gt;</text>
<rect x="540" y="130" width="360" height="150" rx="12" fill="#FDE9E7" stroke="#C00000" stroke-width="3.5"/>
<text x="720" y="192" font-size="30" text-anchor="middle" fill="#C00000" font-weight="bold">−99</text>
<text x="720" y="245" font-size="20" text-anchor="middle" fill="#555">même très grand en chiffres</text>
<text x="500" y="372" font-size="24" text-anchor="middle" fill="#333">Tout positif dépasse tout négatif.</text>
</g></svg>`);

svgPng('t7u1s7_negatifs', svgHead(1000,430,'Entre deux négatifs : le plus proche de zéro') + `
<g font-family="serif">
${(()=>{const X=v=>120+(v+10)*76; let r=''; for(let v=-10;v<=0;v+=2){r+=`<line x1="${X(v)}" y1="195" x2="${X(v)}" y2="235" stroke="#1F4E79" stroke-width="3.5"/><text x="${X(v)}" y="272" font-size="24" text-anchor="middle" fill="${v<0?'#C00000':'#333'}">${v<0?'−'+(-v):v}</text>`;} return r;})()}
<line x1="105" y1="215" x2="895" y2="215" stroke="#1F4E79" stroke-width="4"/>
<circle cx="197" cy="215" r="10" fill="#C00000"/>
<text x="197" y="165" font-size="24" text-anchor="middle" fill="#C00000" font-weight="bold">−9</text>
<circle cx="500" cy="215" r="10" fill="#C2185B"/>
<text x="500" y="165" font-size="24" text-anchor="middle" fill="#C2185B" font-weight="bold">−4</text>
<rect x="300" y="310" width="400" height="62" rx="12" fill="#E9F5EC" stroke="#1E7B34" stroke-width="3.5"/>
<text x="500" y="350" font-size="26" text-anchor="middle" fill="#1E7B34" font-weight="bold">−4 &gt; −9</text>
</g></svg>`);

svgPng('t7u1s7_absolue', svgHead(1000,430,'La valeur absolue : distance à zéro') + `
<g font-family="serif">
${(()=>{const X=v=>140+(v+6)*120; let r=''; for(let v=-6;v<=2;v+=2){r+=`<line x1="${X(v)}" y1="195" x2="${X(v)}" y2="235" stroke="#1F4E79" stroke-width="3.5"/><text x="${X(v)}" y="272" font-size="24" text-anchor="middle" fill="#333">${v<0?'−'+(-v):v}</text>`;} return r;})()}
<line x1="125" y1="215" x2="875" y2="215" stroke="#1F4E79" stroke-width="4"/>
<circle cx="260" cy="215" r="10" fill="#C2185B"/>
<text x="260" y="165" font-size="26" text-anchor="middle" fill="#C2185B" font-weight="bold">−5</text>
<path d="M260 300 Q 500 360 740 300" fill="none" stroke="#1E7B34" stroke-width="3.5"/>
<text x="500" y="350" text-anchor="middle" font-size="23" fill="#1E7B34" font-weight="bold">|−5| = 5</text>
<text x="500" y="415" font-size="21" text-anchor="middle" fill="#333">La valeur absolue mesure la distance à zéro, sans le signe.</text>
</g></svg>`);

/* ---- L8 : opérations sur les relatifs ---- */
svgPng('t7u1s8_marche', svgHead(1000,430,'Marcher la somme : (−3) + (+7) = +4') + `
<g font-family="serif">
${(()=>{const X=v=>90+(v+5)*100; let r=''; for(let v=-5;v<=4;v++){r+=`<line x1="${X(v)}" y1="205" x2="${X(v)}" y2="245" stroke="#1F4E79" stroke-width="3.5"/><text x="${X(v)}" y="282" font-size="24" text-anchor="middle" fill="${v<0?'#C00000':'#1E7B34'}" font-weight="bold">${v<0?'−'+(-v):(v>0?'+'+v:'0')}</text>`;} return r;})()}
<line x1="75" y1="225" x2="925" y2="225" stroke="#1F4E79" stroke-width="4"/>
<circle cx="290" cy="225" r="11" fill="#C00000"/>
<text x="290" y="170" font-size="24" text-anchor="middle" fill="#C00000" font-weight="bold">départ −3</text>
<path d="M310 175 Q 540 55 770 178" fill="none" stroke="#1E7B34" stroke-width="4.5" marker-end="url(#ajw)"/>
<text x="540" y="105" font-size="26" text-anchor="middle" fill="#1E7B34" font-weight="bold">+7 pas</text>
<circle cx="790" cy="225" r="11" fill="#1E7B34"/>
<text x="790" y="170" font-size="24" text-anchor="middle" fill="#1E7B34" font-weight="bold">arrivée +4</text>
<defs><marker id="ajw" markerWidth="10" markerHeight="10" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#1E7B34"/></marker></defs>
</g></svg>`);

svgPng('t7u1s8_oppose', svgHead(1000,430,'Soustraire = ajouter l’opposé') + `
<g font-family="serif">
<rect x="80" y="115" width="400" height="110" rx="12" fill="#EAF2F8" stroke="#1F4E79" stroke-width="3.5"/>
<text x="280" y="180" font-size="30" text-anchor="middle" fill="#222">7 − (−2)</text>
<path d="M500 170 L 560 170" stroke="#1E7B34" stroke-width="5"/>
<path d="M548 158 L 565 170 L 548 182" fill="none" stroke="#1E7B34" stroke-width="5"/>
<rect x="580" y="115" width="340" height="110" rx="12" fill="#E9F5EC" stroke="#1E7B34" stroke-width="3.5"/>
<text x="750" y="180" font-size="30" text-anchor="middle" fill="#1E7B34" font-weight="bold">= 7 + 2 = 9</text>
<rect x="180" y="270" width="640" height="80" rx="12" fill="#FCE4D6" stroke="#C2185B" stroke-width="3.5"/>
<text x="500" y="318" font-size="26" text-anchor="middle" fill="#C2185B" font-weight="bold">−6 − 4 = −6 + (−4) = −10</text>
<text x="500" y="400" font-size="23" text-anchor="middle" fill="#333">Deux signes « − − » deviennent un « + » ; reculer, on additionne l’opposé.</text>
</g></svg>`);

svgPng('t7u1s8_tableau', svgHead(1000,430,'Le tableau des situations') + `
<g font-family="serif">
<rect x="120" y="100" width="380" height="52" fill="#1F4E79"/><rect x="500" y="100" width="380" height="52" fill="#1F4E79"/>
<text x="310" y="134" font-size="23" text-anchor="middle" fill="white" font-weight="bold">mêmes signes</text>
<text x="690" y="134" font-size="23" text-anchor="middle" fill="white" font-weight="bold">signes différents</text>
<rect x="120" y="152" width="380" height="110" fill="#EAF2F8" stroke="#9AB" stroke-width="1.5"/>
<rect x="500" y="152" width="380" height="110" fill="#EAF2F8" stroke="#9AB" stroke-width="1.5"/>
<text x="310" y="195" font-size="24" text-anchor="middle" fill="#222">(−3) + (−5) = −8</text>
<text x="310" y="238" font-size="20" text-anchor="middle" fill="#555">on garde le signe, on ajoute</text>
<text x="690" y="195" font-size="24" text-anchor="middle" fill="#222">(+8) + (−5) = +3</text>
<text x="690" y="238" font-size="20" text-anchor="middle" fill="#555">on soustrait, signe du plus grand</text>
<rect x="235" y="295" width="530" height="70" rx="12" fill="#FDE9E7" stroke="#C2185B" stroke-width="3.5"/>
<text x="500" y="338" font-size="24" text-anchor="middle" fill="#C2185B" font-weight="bold">soustraire = ajouter l’opposé</text>
</g></svg>`);
