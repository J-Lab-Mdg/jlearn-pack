const {svgPng, svgHead} = require('./lib');

/* ---- L1 : la puissance entière ---- */
svgPng('t7u2s1_notation', svgHead(1000,430,'Base et exposant') + `
<g font-family="serif">
<text x="430" y="255" font-size="110" text-anchor="middle" fill="#1F4E79" font-weight="bold">a</text>
<text x="520" y="180" font-size="64" text-anchor="middle" fill="#C2185B" font-weight="bold">n</text>
<line x1="300" y1="285" x2="430" y2="285" stroke="#1F4E79" stroke-width="3" marker-end="url(#b1)"/>
<text x="310" y="322" font-size="24" fill="#1F4E79">la base : le nombre répété</text>
<line x1="568" y1="205" x2="540" y2="175" stroke="#C2185B" stroke-width="3" marker-end="url(#b2)"/>
<text x="600" y="215" font-size="24" fill="#C2185B">l’exposant : combien de facteurs</text>
<rect x="240" y="355" width="520" height="52" rx="12" fill="#EAF2F8" stroke="#1F4E79" stroke-width="3"/>
<text x="500" y="388" font-size="23" text-anchor="middle" fill="#1F4E79" font-weight="bold">on lit « a puissance n » (n facteurs a)</text>
</g><defs><marker id="b1" markerWidth="10" markerHeight="10" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#1F4E79"/></marker><marker id="b2" markerWidth="10" markerHeight="10" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#C2185B"/></marker></defs></svg>`);

svgPng('t7u2s1_lire', svgHead(1000,430,'Lire 2⁵ : cinq facteurs 2') + `
<g font-family="serif">
<text x="500" y="150" font-size="34" text-anchor="middle" fill="#222" font-weight="bold">2⁵ = 2 × 2 × 2 × 2 × 2</text>
${[0,1,2,3,4].map(i=>`<rect x="${235+i*106}" y="185" width="90" height="54" rx="10" fill="${i%2?'#FCE4D6':'#EAF2F8'}" stroke="#1F4E79" stroke-width="3"/><text x="${280+i*106}" y="221" font-size="30" text-anchor="middle" fill="#1F4E79" font-weight="bold">2</text>`).join('')}
<text x="230" y="300" font-size="24" text-anchor="middle" fill="#333">5 facteurs</text>
<path d="M235 320 Q 500 375 765 320" fill="none" stroke="#1E7B34" stroke-width="3"/>
<rect x="350" y="250" width="300" height="60" rx="12" fill="#E9F5EC" stroke="#1E7B34" stroke-width="3.5"/>
<text x="500" y="288" font-size="30" text-anchor="middle" fill="#1E7B34" font-weight="bold">= 32</text>
<text x="500" y="400" font-size="22" text-anchor="middle" fill="#333">Chaque facteur vaut 2 ; il y en a cinq : le produit vaut 32.</text>
</g></svg>`);

svgPng('t7u2s1_signes', svgHead(1000,430,'Carré et cube de −2') + `
<g font-family="serif">
<rect x="70" y="110" width="400" height="240" rx="14" fill="#E9F5EC" stroke="#1E7B34" stroke-width="3.5"/>
<text x="270" y="152" font-size="26" text-anchor="middle" fill="#1E7B34" font-weight="bold">exposant PAIR</text>
<text x="270" y="205" font-size="24" text-anchor="middle" fill="#222">(−2)² = (−2) × (−2)</text>
<text x="270" y="255" font-size="30" text-anchor="middle" fill="#1E7B34" font-weight="bold">= +4</text>
<text x="270" y="305" font-size="20" text-anchor="middle" fill="#333">négatif × négatif = positif</text>
<rect x="530" y="110" width="400" height="240" rx="14" fill="#FDE9E7" stroke="#C00000" stroke-width="3.5"/>
<text x="730" y="152" font-size="26" text-anchor="middle" fill="#C00000" font-weight="bold">exposant IMPAIR</text>
<text x="730" y="205" font-size="24" text-anchor="middle" fill="#222">(−2)³ = (−2) × (−2) × (−2)</text>
<text x="730" y="255" font-size="30" text-anchor="middle" fill="#C00000" font-weight="bold">= −8</text>
<text x="730" y="305" font-size="20" text-anchor="middle" fill="#333">positif × négatif = négatif</text>
<text x="500" y="398" font-size="22" text-anchor="middle" fill="#333">Même base −2, le signe change selon la parité de l’exposant.</text>
</g></svg>`);

/* ---- L2 : calculs avec les puissances ---- */
svgPng('t7u2s2_puiss10', svgHead(1000,430,'Puissances de 10 et de 0,1') + `
<g font-family="serif">
${[['10¹','10'],['10²','100'],['10³','1 000'],['10⁴','10 000']].map((r,i)=>`<rect x="${90+i*220}" y="115" width="195" height="100" rx="12" fill="#EAF2F8" stroke="#1F4E79" stroke-width="3"/><text x="${187+i*220}" y="155" font-size="25" text-anchor="middle" fill="#1F4E79" font-weight="bold">${r[0]}</text><text x="${187+i*220}" y="195" font-size="24" text-anchor="middle" fill="#222">${r[1]}</text>`).join('')}
<text x="500" y="252" font-size="22" text-anchor="middle" fill="#333">10 puissance n : un 1 suivi de n zéros</text>
${[['(0,1)¹','0,1'],['(0,1)²','0,01'],['(0,1)³','0,001']].map((r,i)=>`<rect x="${200+i*220}" y="285" width="195" height="100" rx="12" fill="#FCE4D6" stroke="#C2185B" stroke-width="3"/><text x="${297+i*220}" y="328" font-size="23" text-anchor="middle" fill="#C2185B" font-weight="bold">${r[0]}</text><text x="${297+i*220}" y="368" font-size="23" text-anchor="middle" fill="#222">${r[1]}</text>`).join('')}
<text x="500" y="415" font-size="22" text-anchor="middle" fill="#333">(0,1) puissance n : le 1 arrive au rang n après la virgule</text>
</g></svg>`);

svgPng('t7u2s2_parite', svgHead(1000,430,'Signe de (−2) puissance n') + `
<g font-family="serif">
${[['(−2)¹','−2','#C00000'],['(−2)²','+4','#1E7B34'],['(−2)³','−8','#C00000'],['(−2)⁴','+16','#1E7B34'],['(−2)⁵','−32','#C00000']].map((r,i)=>`<rect x="${70+i*182}" y="120" width="160" height="110" rx="12" fill="${r[2]==='#C00000'?'#FDE9E7':'#E9F5EC'}" stroke="${r[2]}" stroke-width="3"/><text x="${150+i*182}" y="162" font-size="24" text-anchor="middle" fill="${r[2]}" font-weight="bold">${r[0]}</text><text x="${150+i*182}" y="205" font-size="26" text-anchor="middle" fill="#222" font-weight="bold">${r[1]}</text>`).join('')}
<line x1="160" y1="280" x2="840" y2="280" stroke="#1F4E79" stroke-width="3" stroke-dasharray="7 6"/>
<text x="308" y="268" font-size="21" text-anchor="middle" fill="#C00000" font-weight="bold">impair → négatif</text>
<text x="700" y="268" font-size="21" text-anchor="middle" fill="#1E7B34" font-weight="bold">pair → positif</text>
<rect x="250" y="310" width="500" height="60" rx="12" fill="#EAF2F8" stroke="#1F4E79" stroke-width="3.5"/>
<text x="500" y="348" font-size="23" text-anchor="middle" fill="#1F4E79" font-weight="bold">la parité de l’exposant fixe le signe</text>
</g></svg>`);

svgPng('t7u2s2_calcul', svgHead(1000,430,'Parenthèses ou non : (−2)⁴ et −2⁴') + `
<g font-family="serif">
<rect x="80" y="115" width="380" height="230" rx="14" fill="#E9F5EC" stroke="#1E7B34" stroke-width="3.5"/>
<text x="270" y="158" font-size="28" text-anchor="middle" fill="#1E7B34" font-weight="bold">(−2)⁴</text>
<text x="270" y="208" font-size="21" text-anchor="middle" fill="#222">(−2) × (−2) × (−2) × (−2)</text>
<text x="270" y="248" font-size="21" text-anchor="middle" fill="#222">= (+4) × (+4)</text>
<text x="270" y="300" font-size="30" text-anchor="middle" fill="#1E7B34" font-weight="bold">= +16</text>
<rect x="540" y="115" width="380" height="230" rx="14" fill="#FDE9E7" stroke="#C00000" stroke-width="3.5"/>
<text x="730" y="158" font-size="28" text-anchor="middle" fill="#C00000" font-weight="bold">−2⁴</text>
<text x="730" y="208" font-size="21" text-anchor="middle" fill="#222">− (2 × 2 × 2 × 2)</text>
<text x="730" y="248" font-size="21" text-anchor="middle" fill="#222">l’opposé de 2⁴</text>
<text x="730" y="300" font-size="30" text-anchor="middle" fill="#C00000" font-weight="bold">= −16</text>
<text x="500" y="398" font-size="22" text-anchor="middle" fill="#333">La parenthèse embarque le signe dans la puissance ; sans elle, le signe reste dehors.</text>
</g></svg>`);

/* ---- L3 : propriétés des puissances ---- */
svgPng('t7u2s3_produit', svgHead(1000,430,'Produit de puissances : aⁿ × aᵐ = aⁿ⁺ᵐ') + `
<g font-family="serif">
<text x="300" y="200" font-size="30" text-anchor="middle" fill="#1F4E79" font-weight="bold">2³ × 2²</text>
<text x="300" y="255" font-size="24" text-anchor="middle" fill="#333">(2 × 2 × 2) × (2 × 2)</text>
<line x1="180" y1="300" x2="420" y2="300" stroke="#C2185B" stroke-width="3.5"/>
<text x="300" y="333" font-size="23" text-anchor="middle" fill="#C2185B" font-weight="bold">5 facteurs en tout</text>
<text x="640" y="200" font-size="30" text-anchor="middle" fill="#1E7B34" font-weight="bold">= 2³⁺² = 2⁵ = 32</text>
<rect x="210" y="355" width="580" height="52" rx="12" fill="#E9F5EC" stroke="#1E7B34" stroke-width="3"/>
<text x="500" y="389" font-size="23" text-anchor="middle" fill="#1E7B34" font-weight="bold">même base : on additionne les exposants</text>
</g></svg>`);

svgPng('t7u2s3_quotient', svgHead(1000,430,'Quotient de puissances : aⁿ : aᵐ = aⁿ⁻ᵐ') + `
<g font-family="serif">
<text x="300" y="180" font-size="30" text-anchor="middle" fill="#1F4E79" font-weight="bold">3⁵ : 3²</text>
<text x="300" y="238" font-size="23" text-anchor="middle" fill="#333">(3 × 3 × 3 × 3 × 3) : (3 × 3)</text>
<line x1="190" y1="262" x2="235" y2="262" stroke="#C00000" stroke-width="4"/>
<line x1="250" y1="262" x2="295" y2="262" stroke="#C00000" stroke-width="4"/>
<text x="300" y="300" font-size="21" text-anchor="middle" fill="#C00000">deux facteurs se simplifient</text>
<text x="300" y="352" font-size="26" text-anchor="middle" fill="#1E7B34" font-weight="bold">= 3⁵⁻² = 3³ = 27</text>
<rect x="580" y="150" width="360" height="180" rx="12" fill="#EAF2F8" stroke="#1F4E79" stroke-width="3"/>
<text x="760" y="195" font-size="22" text-anchor="middle" fill="#1F4E79" font-weight="bold">Règle</text>
<text x="760" y="245" font-size="22" text-anchor="middle" fill="#222">même base : on soustrait</text>
<text x="760" y="285" font-size="22" text-anchor="middle" fill="#222">les exposants</text>
</g></svg>`);

svgPng('t7u2s3_puis', svgHead(1000,430,'Puissance de puissance et puissance de produit') + `
<g font-family="serif">
<rect x="70" y="115" width="410" height="235" rx="14" fill="#EAF2F8" stroke="#1F4E79" stroke-width="3.5"/>
<text x="275" y="158" font-size="26" text-anchor="middle" fill="#1F4E79" font-weight="bold">(2²)³</text>
<text x="275" y="205" font-size="22" text-anchor="middle" fill="#222">= 2² × 2² × 2² = 2⁶</text>
<text x="275" y="252" font-size="28" text-anchor="middle" fill="#1F4E79" font-weight="bold">= 64</text>
<text x="275" y="305" font-size="20" text-anchor="middle" fill="#333">on multiplie les exposants</text>
<rect x="520" y="115" width="410" height="235" rx="14" fill="#FCE4D6" stroke="#C2185B" stroke-width="3.5"/>
<text x="725" y="158" font-size="26" text-anchor="middle" fill="#C2185B" font-weight="bold">(4 × 0,5)²</text>
<text x="725" y="205" font-size="22" text-anchor="middle" fill="#222">= 4² × (0,5)² = 16 × 0,25</text>
<text x="725" y="252" font-size="28" text-anchor="middle" fill="#C2185B" font-weight="bold">= 4</text>
<text x="725" y="305" font-size="20" text-anchor="middle" fill="#333">chaque facteur prend l’exposant</text>
<text x="500" y="398" font-size="22" text-anchor="middle" fill="#333">Vérifier toujours en développant une fois : la règle doit redonner le même résultat.</text>
</g></svg>`);

/* ---- L4 : chaînes d'additions-soustractions ---- */
svgPng('t7u2s4_chaine', svgHead(1000,430,'De gauche à droite') + `
<g font-family="serif">
<rect x="140" y="115" width="720" height="70" rx="12" fill="#EAF2F8" stroke="#1F4E79" stroke-width="3.5"/>
<text x="500" y="158" font-size="28" text-anchor="middle" fill="#1F4E79" font-weight="bold">−7 + 12 − 5 + 8</text>
<text x="500" y="232" font-size="24" text-anchor="middle" fill="#222">= +5 − 5 + 8</text>
<text x="500" y="285" font-size="24" text-anchor="middle" fill="#222">= 0 + 8</text>
<rect x="350" y="315" width="300" height="60" rx="12" fill="#E9F5EC" stroke="#1E7B34" stroke-width="3.5"/>
<text x="500" y="353" font-size="28" text-anchor="middle" fill="#1E7B34" font-weight="bold">= +8</text>
<text x="500" y="408" font-size="21" text-anchor="middle" fill="#333">Une étape par ligne : on transporte toujours le signe avec son nombre.</text>
</g></svg>`);

svgPng('t7u2s4_regroup', svgHead(1000,430,'Regrouper les signes semblables') + `
<g font-family="serif">
<text x="500" y="148" font-size="28" text-anchor="middle" fill="#1F4E79" font-weight="bold">−7 + 12 − 5 + 8</text>
<path d="M405 165 Q 380 210 320 225" fill="none" stroke="#C00000" stroke-width="3"/>
<path d="M345 165 Q 320 210 385 225" fill="none" stroke="#C00000" stroke-width="3"/>
<path d="M455 165 Q 500 205 590 225" fill="none" stroke="#1E7B34" stroke-width="3"/>
<path d="M585 165 Q 610 205 655 225" fill="none" stroke="#1E7B34" stroke-width="3"/>
<rect x="230" y="235" width="245" height="75" rx="12" fill="#FDE9E7" stroke="#C00000" stroke-width="3.5"/>
<text x="352" y="265" font-size="23" text-anchor="middle" fill="#C00000" font-weight="bold">−7 − 5</text>
<text x="352" y="297" font-size="24" text-anchor="middle" fill="#C00000" font-weight="bold">= −12</text>
<rect x="525" y="235" width="245" height="75" rx="12" fill="#E9F5EC" stroke="#1E7B34" stroke-width="3.5"/>
<text x="647" y="265" font-size="23" text-anchor="middle" fill="#1E7B34" font-weight="bold">+12 + 8</text>
<text x="647" y="297" font-size="24" text-anchor="middle" fill="#1E7B34" font-weight="bold">= +20</text>
<text x="500" y="360" font-size="26" text-anchor="middle" fill="#1F4E79" font-weight="bold">−12 + 20 = +8</text>
<text x="500" y="405" font-size="21" text-anchor="middle" fill="#333">Même résultat, plus sûr : commutativité et associativité l’autorisent.</text>
</g></svg>`);

svgPng('t7u2s4_oppose', svgHead(1000,430,'Les opposés s’annulent') + `
<g font-family="serif">
<text x="500" y="170" font-size="30" text-anchor="middle" fill="#1F4E79" font-weight="bold">−3,5 + 6,25 − 2,75 + 3,5</text>
<line x1="243" y1="138" x2="286" y2="138" stroke="#C00000" stroke-width="4"/>
<line x1="243" y1="183" x2="286" y2="183" stroke="#C00000" stroke-width="4"/>
<line x1="690" y1="138" x2="745" y2="138" stroke="#C00000" stroke-width="4"/>
<line x1="690" y1="183" x2="745" y2="183" stroke="#C00000" stroke-width="4"/>
<path d="M265 205 Q 470 300 715 205" fill="none" stroke="#C00000" stroke-width="3" stroke-dasharray="7 6"/>
<text x="490" y="268" font-size="22" text-anchor="middle" fill="#C00000" font-weight="bold">−3,5 + 3,5 = 0</text>
<rect x="330" y="312" width="340" height="62" rx="12" fill="#E9F5EC" stroke="#1E7B34" stroke-width="3.5"/>
<text x="500" y="351" font-size="26" text-anchor="middle" fill="#1E7B34" font-weight="bold">reste : 6,25 − 2,75 = 3,5</text>
</g></svg>`);

/* ---- L5 : la règle des signes ---- */
svgPng('t7u2s5_table', svgHead(1000,430,'Table des signes du produit') + `
<g font-family="serif">
<rect x="300" y="110" width="180" height="70" fill="#1F4E79"/>
<text x="390" y="155" font-size="30" text-anchor="middle" fill="#fff" font-weight="bold">×</text>
<rect x="480" y="110" width="180" height="70" fill="#E9F5EC" stroke="#1F4E79" stroke-width="3"/>
<text x="570" y="155" font-size="28" text-anchor="middle" fill="#1E7B34" font-weight="bold">+</text>
<rect x="660" y="110" width="180" height="70" fill="#FDE9E7" stroke="#1F4E79" stroke-width="3"/>
<text x="750" y="155" font-size="28" text-anchor="middle" fill="#C00000" font-weight="bold">−</text>
<rect x="300" y="180" width="180" height="70" fill="#E9F5EC" stroke="#1F4E79" stroke-width="3"/>
<text x="390" y="225" font-size="28" text-anchor="middle" fill="#1E7B34" font-weight="bold">+</text>
<rect x="480" y="180" width="180" height="70" fill="#E9F5EC" stroke="#1E7B34" stroke-width="3"/>
<text x="570" y="225" font-size="30" text-anchor="middle" fill="#1E7B34" font-weight="bold">+</text>
<rect x="660" y="180" width="180" height="70" fill="#FDE9E7" stroke="#C00000" stroke-width="3"/>
<text x="750" y="225" font-size="30" text-anchor="middle" fill="#C00000" font-weight="bold">−</text>
<rect x="300" y="250" width="180" height="70" fill="#FDE9E7" stroke="#1F4E79" stroke-width="3"/>
<text x="390" y="295" font-size="28" text-anchor="middle" fill="#C00000" font-weight="bold">−</text>
<rect x="480" y="250" width="180" height="70" fill="#FDE9E7" stroke="#C00000" stroke-width="3"/>
<text x="570" y="295" font-size="30" text-anchor="middle" fill="#C00000" font-weight="bold">−</text>
<rect x="660" y="250" width="180" height="70" fill="#E9F5EC" stroke="#1E7B34" stroke-width="3"/>
<text x="750" y="295" font-size="30" text-anchor="middle" fill="#1E7B34" font-weight="bold">+</text>
<text x="570" y="368" font-size="23" text-anchor="middle" fill="#333">Mêmes signes → « + » ; signes différents → « − ».</text>
</g></svg>`);

svgPng('t7u2s5_parite', svgHead(1000,430,'Compter les facteurs négatifs') + `
<g font-family="serif">
<text x="500" y="155" font-size="26" text-anchor="middle" fill="#1F4E79" font-weight="bold">(−2) × (−2) × (−2) : trois facteurs négatifs</text>
<text x="430" y="225" font-size="24" text-anchor="middle" fill="#222">(−2)×(−2) = +4</text>
<text x="430" y="278" font-size="24" text-anchor="middle" fill="#222">(+4)×(−2) = −8</text>
<rect x="640" y="140" width="290" height="200" rx="12" fill="#EAF2F8" stroke="#1F4E79" stroke-width="3.5"/>
<text x="785" y="190" font-size="23" text-anchor="middle" fill="#1E7B34" font-weight="bold">pair → positif</text>
<text x="785" y="240" font-size="23" text-anchor="middle" fill="#C00000" font-weight="bold">impair → négatif</text>
<text x="785" y="295" font-size="19" text-anchor="middle" fill="#333">les négatifs fonctionnent</text>
<text x="785" y="322" font-size="19" text-anchor="middle" fill="#333">par paires</text>
<text x="500" y="398" font-size="22" text-anchor="middle" fill="#333">Compter les facteurs négatifs fixe le signe avant tout calcul.</text>
</g></svg>`);

svgPng('t7u2s5_exemples', svgHead(1000,430,'Deux vérifications rapides') + `
<g font-family="serif">
<rect x="80" y="120" width="400" height="220" rx="14" fill="#E9F5EC" stroke="#1E7B34" stroke-width="3.5"/>
<text x="280" y="168" font-size="24" text-anchor="middle" fill="#1E7B34" font-weight="bold">(−0,5) × (−0,2)</text>
<text x="280" y="220" font-size="22" text-anchor="middle" fill="#222">mêmes signes → +</text>
<text x="280" y="262" font-size="22" text-anchor="middle" fill="#222">0,5 × 0,2 = 0,10</text>
<text x="280" y="312" font-size="28" text-anchor="middle" fill="#1E7B34" font-weight="bold">= +0,1</text>
<rect x="520" y="120" width="400" height="220" rx="14" fill="#FDE9E7" stroke="#C00000" stroke-width="3.5"/>
<text x="720" y="168" font-size="24" text-anchor="middle" fill="#C00000" font-weight="bold">(−1)⁵</text>
<text x="720" y="220" font-size="22" text-anchor="middle" fill="#222">cinq facteurs −1</text>
<text x="720" y="262" font-size="22" text-anchor="middle" fill="#222">impair → −</text>
<text x="720" y="312" font-size="28" text-anchor="middle" fill="#C00000" font-weight="bold">= −1</text>
<text x="500" y="398" font-size="22" text-anchor="middle" fill="#333">Le signe d’abord, la valeur ensuite : jamais l’inverse.</text>
</g></svg>`);
