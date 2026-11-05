"""Corpus initial authentique issu de https://teny-malagasy.akademia-malagasy.mg/.

Permet d'utiliser immediatement les regles officielles d'orthographe (an-/am-/an'),
les 16 regles de malgachisation, la terminologie scientifique et un extrait reel du
Voambolana Fanabeazana hors-ligne avant meme la synchronisation complete (~30 sec).
"""

from __future__ import annotations

from .database import AkademiaDB
from .parser import make_entry_uid


SEED_DOCUMENTS = [
    {
        "slug": "fomba-fanoratra",
        "url": "https://teny-malagasy.akademia-malagasy.mg/fanoratra.php",
        "category": "Fitsipika & Fanoratra",
        "title": "Fomba fanoratra — Ny « ana » manomboka ny teny (an- / am- / an')",
        "author": "Foibe momba ny Teny an'ny Akademia Malagasy",
        "summary": "Fitsipika 8 ôfisialy mifehy ny fanoratana ny « ana » mitovona amin'ny teny : tsipi-panohizana (an- / am-), faingo mihantona (an') na fanakambanana mivantana, miaraka amin'ireo maningana mahazatra.",
        "toc": [
            {"id": "sec-intro", "title": "Fampimirana ara-peo (am- / a-)", "level": 2},
            {"id": "sec-r1", "title": "1 - Filazana toerana", "level": 3},
            {"id": "sec-r2", "title": "2 - Filazana fomba", "level": 3},
            {"id": "sec-r3", "title": "3 - Hevitra an-kolaka na sarinteny", "level": 3},
            {"id": "sec-r4", "title": "4 - Filazana fe-potoana", "level": 3},
            {"id": "sec-r5", "title": "5 - Filazana fitompoana", "level": 3},
            {"id": "sec-r6", "title": "6 - Filazana isa", "level": 3},
            {"id": "sec-r7", "title": "7 - Toe-javatra eo am-panatanterahana", "level": 3},
            {"id": "sec-r8", "title": "8 - Filazana fatra", "level": 3},
        ],
        "body_html": """<div class="ak-doc-content">
<h2 id="sec-intro">Ny « ana » manomboka ny teny — Fampimirana ara-peo</h2>
<p>Marihana fa mitovona amina teny ny <strong>« ana »</strong> ka mihatra toy izao manaraka izao ny fampimirana ara-peo. Raha manomboka amina renifeo ny teny itovonany dia :</p>
<ul>
  <li><strong>a)</strong> Milatsaka ny <code>-a</code> mamarana ny « ana » ary ny <code>n</code> miova ho <code>m</code>. Mety iharan'ny fiovana koa ny renifeo manomboka : <code>F → P</code>, <code>V → B</code>.<br>
  <em>Ohatra :</em> <code>ana-fianarana → am-pianarana</code> ; <code>ana-vava → am-bava</code>.</li>
  <li><strong>b)</strong> Milatsaka kosa ny <code>-na</code> amin'ny « ana » eo alohan'ny renifeo kentsona :<br>
  <em>Ohatra :</em> <code>ana-molotra → a-molotra</code>.</li>
</ul>

<h3 id="sec-r1">1 - Ampiasaina amin'ny filazana toerana ny « ana »</h3>
<p>Rehefa ampiasaina ilazana toerana ny « ana » ka afaka misaraka amin'ny teny eo aoriany ary afaka mifanova amin'ny <em>« eo amin'ny »</em> dia asiana <strong>tsipi-panohizana (-)</strong> raha miandoha amin'ny renisoratra ny teny faharoa, ary <strong>faingo mihantona (’)</strong> raha miandoha amin'ny zanatsoratra.</p>
<p><strong>Ohatra :</strong> am-baravarana, am-bata, am-bava, am-bavahady, am-bivitra, am-bohitra, am-bovo, am-bozona, am-paladia, am-pamoloana, am-parafara, am-patana, am-patrambary, am-pelatanana, am-pianarana, am-pisoko, am-po, am-potomoty, am-pototra, an’ady, an’orona, an-dafy, an-dalana, an-damosina, an-dapa, an-davaka, an-dela, an-dobo, an-doha, an-dohalela, an-joro, an-kady, an-kandrina, an-karona, an-kasarotana, an-katakonana, an-katoka, an-kavanana, an-kavia, an-kijana, an-tafontrano, an-tanana, an-tany, an-tava, an-tenda, an-tendrony, an-tevana, an-toby, an-tongotra, an-trano, an-tsaha, an-tsobika, an-tsolatra, an-tsoroka.</p>
<p><strong>Fanoratra mahazatra maningana :</strong> ana habakabaka, anaty, anelanelany, anilany, anindrana, anirotra, anivo, anoloana.</p>

<h3 id="sec-r2">2 - Ampiasaina amin'ny filazana fomba ny « ana »</h3>
<p>Rehefa milaza fomba ny « ana » ka afaka mifanova amin'ny <em>« amin'ny »</em> dia asiana tsipi-panohizana (renisoratra) na faingo mihantona (zanatsoratra).</p>
<p><strong>Ohatra :</strong> am-pahalainana, am-pahalemena, am-pahamatorana, am-pahamendrehana, am-pahatsorana, am-parimbona, am-pihanahana, am-pitaka, am-pomba, an-ditra, an-drariny, an-kadalana, an-kafaliana, an-kafetsena, an-kamehana, an-karatsiana, an-karavoana, an-karihary, an-kasarotana, an-kasoavana, an-kasomparana, an-kasosorana, an-katezerana, an-keriny, an-kerisetra, an-kitsim-po, an-kolaka, an-tandrevaka, an-terisetra, an-tsitrapo.</p>

<h3 id="sec-r3">3 - Ampiasaina ilazana hevitra an-kolaka na sarinteny tsy ara-bakiteny</h3>
<p><strong>Atambatra</strong> amin'ny teny eo aoriany ny « ana » rehefa tsy maneho hevitra ara-bakiteny fa milaza hevitra an-kolaka na sarin-teny.</p>
<p><strong>Ohatra :</strong> ambava, ambavabasy, ambavahoana, ambaviny, ambivitra, ambodiomby, ambolony, ampamatoranjanakomby, amparahatoka, andafy, andahiny, andalana, andefimandry, andoha, anjambany, ankaranany, ankatoka, ankoatra, ankoditra, antanantohatra, antenda, antendrony.</p>

<h3 id="sec-r4">4 - Ampiasaina ilazana fe-potoana ny « ana »</h3>
<p>Rehefa afaka mifanova amin'ny <em>« amana »</em> dia asiana tsipi-panohizana na faingo mihantona : <strong>am-bolana, an’androny, an-taonany</strong>.<br>
<strong>Fanoratra mahazatra maningana :</strong> <em>andavanandro, ankobanandro</em>.</p>

<h3 id="sec-r5">5 - Ampiasaina ilazana fitompoana ny « ana »</h3>
<p>Asiana tsipi-panohizana raha renisoratra ary faingo mihantona raha zanatsoratra : <strong>an’Ikoto, an-dRasolo, an’Andriamanitra, an-dry zareo, an’i Naivo</strong>.</p>

<h3 id="sec-r6">6 - Ampiasaina ilazana isa ny « ana »</h3>
<p>Asiana tsipi-panohizana na faingo mihantona : <strong>am-polony, an’aliny, an’arivony, an-jatony, an-tapitrisa</strong>.<br>
<strong>Maningana :</strong> <em>ana hetsiny</em>.</p>

<h3 id="sec-r7">7 - Ampiasaina ilazana toe-javatra eo am-panatanterahana</h3>
<p>Rehefa ialohavana mpisolo toerana (<em>eo / teo ; eny / teny</em>) dia asiana tsipi-panohizana na faingo mihantona : <strong>am-pahatongavana, am-pamafazana, am-pamakiana, am-pamaranana, am-pamolavolana, am-pandehanana, am-pandinihana, am-panoratana, am-pianarana, am-pikabariana, am-pilalaovana, am-piresahana, am-pitadiavana, am-pitenenana, am-pivavahana, am-pivoriana</strong>…</p>

<h3 id="sec-r8">8 - Ampiasaina ilazana fatra ny « ana »</h3>
<p>Rehefa milaza fatra dia <strong>tsy asiana tsipi-panohizana</strong> fa mitambatra avy hatrany : <strong>ampaha, ampahefany, ampahatelony, ampahazato, androatokony, antsasany</strong>.</p>
</div>""",
    },
    {
        "slug": "fanagasiana-teny-vahiny",
        "url": "https://teny-malagasy.akademia-malagasy.mg/fanagasiana.php",
        "category": "Fitsipika & Fanoratra",
        "title": "Fanagasiana ny Teny vahiny (Fitsipika 16 — 23 Novambra 2000)",
        "author": "Foibe momba ny Teny an'ny Akademia Malagasy",
        "summary": "Fitsipika 16 fandrindrana ny fomba fanoratra ireo teny vahiny nogasiana : fiafaran-teny (-ne, -tre, -ment, -eur, -ie, -trie, -ture), ny feo gn (ñ), ny anaram-bolana sy andro ary ny tarehintsoratra siantifika.",
        "toc": [
            {"id": "sec-g1", "title": "Fitsipika 1 hatramin'ny 5 (-in-, -ain/-en, -ne, -tre)", "level": 2},
            {"id": "sec-g6", "title": "Fitsipika 6 hatramin'ny 10 (-ment, -ent, -eur, [ô])", "level": 2},
            {"id": "sec-g11", "title": "Fitsipika 11 hatramin'ny 16 (-ie, ñ, -trie, -ture, volana & andro)", "level": 2},
        ],
        "body_html": """<div class="ak-doc-content">
<p><em>Marihana fa fisedrana eo amin'ny sehatry ny fandrindrana ny fomba fanoratra ireo teny vahiny nogasiana ireto fitsipika 16 navoakan'ny Foibe momba ny Teny tamin'ny 23 novambra 2000 ireto.</em></p>
<h2 id="sec-g1">Fitsipika 1 – 5</h2>
<ul>
  <li><strong>1 - « in- » / « -in- » :</strong> Raha manomboka ny teny dia tanana : <em>indostria</em> (« industrie »), <em>indonezia</em> (« Indonésie »). Raha anivon-teny dia lasa <code>-en-</code> (<em>sendika</em> « syndicat ») na <code>-in-</code> (<em>printsy</em> « prince »).</li>
  <li><strong>2 - Anarana olom-pirenena « -ain, -ne / -en, -nne » → « -ana / -anina » :</strong> <em>Afrikana / Afrikanina, Amerikana / Amerikanina, Indoneziana / Indonezianina, Indiana / Indianina</em>.</li>
  <li><strong>3 - Mpamari-toetra « -ain / -en » → « -ana / -anina » :</strong> <em>finoana kristiana / kristianina</em> ; <em>Filoham-panjakana amerikana / amerikanina</em>.</li>
  <li><strong>4 - Anaran-javatra miafara amin'ny « -ne » → « -nina » :</strong> <em>telefaonina</em> (« téléphone »), <em>lafarinina</em> (« farine »), <em>ozinina</em> (« usine »).</li>
  <li><strong>5 - Anarana miafara amin'ny « -tre » :</strong> lasa <code>-tatra</code> (<em>metatra</em> « mètre », <em>litatra</em> « litre »), na <code>-tra</code> (<em>rezisitra</em> « registre », <em>pretra</em> « prêtre », <em>polipitra</em> « pupitre »), na <code>-ra</code> (<em>litera</em> « lettre »).</li>
</ul>
<h2 id="sec-g6">Fitsipika 6 – 10</h2>
<ul>
  <li><strong>6 - « -ment » → « -manta » :</strong> <em>governemanta</em> (« gouvernement »). Maningana : <em>simenitra</em> (« ciment »).</li>
  <li><strong>7 - « -ent » → « -enta » :</strong> <em>talenta</em> (« talent »).</li>
  <li><strong>8 - « -eur » → « -era » na « -ora » :</strong> <em>faktera</em> (« facteur »), <em>profesora</em> (« professeur »).</li>
  <li><strong>9 - Feo [ô] :</strong> Tsy asiana satroka rehefa gasiana raha tsy enti-manavaka teny roa mitovy fanoratra fa samy hafa hevitra : <em>moto</em> sy <em>môtô</em> ; <em>motera</em> (tsy misy satroka).</li>
  <li><strong>10 - Renifeo roa mifanarakaraka :</strong> Azo tanana mba hampikoriana ny famaky : <em>faktera</em> (fa tsy fakitera), <em>administratera</em> (fa tsy adminisitratera).</li>
</ul>
<h2 id="sec-g11">Fitsipika 11 – 16</h2>
<ul>
  <li><strong>11 - « -ie » → « -ia » :</strong> <em>filozofia</em> (« philosophie »).</li>
  <li><strong>12 - Feo « gn » → « ñ » :</strong> <em>España</em> (« Espagne »).</li>
  <li><strong>13 - « -trie », « tr- », « -tr- » :</strong> <em>indostria</em> (« industrie »), <em>tribonaly</em> (« tribunal »), <em>astronomia</em> (« astronomie »), <em>metatra</em> (« mètre »). Maningana : <em>teàtra</em> (« théâtre »).</li>
  <li><strong>14 - « -ture » → « -tiora » :</strong> <em>literatiora</em> (« littérature »).</li>
  <li><strong>15 - Anaram-bolana sy andro ôfisialy :</strong><br>
  <em>Volana :</em> janoary, febroary, marsa, avrily, mey, jona, jolay, aogositra, septambra, oktobra, novambra, desambra.<br>
  <em>Andro :</em> alatsinainy, talata, alarobia, alakamisy, zoma, sabotsy, alahady.</li>
  <li><strong>16 - Teny iraisam-pirenena sy siantifika :</strong> Ho an'ireo teny toy ny <em>bungalow, quartz, taxi, uranium, wagon, watt</em>, soso-kevitra ny hampiasana amin'ny sehatra siantifika ireo tarehintsoratra <code>{ c ; q ; u ; x ; w }</code>.</li>
</ul>
</div>""",
    },
    {
        "slug": "vahatra-78",
        "url": "https://teny-malagasy.akademia-malagasy.mg/vahatra.php",
        "category": "Vahatra & Dikanteny",
        "title": "Vahatra — Lisitry ny lohahevitra 78 momba ny kolontsaina sy teny malagasy",
        "author": "Foibe momba ny Teny / Televiziona Malagasy",
        "summary": " ireo lohahevitra 78 novolavolain'ny Foibe momba ny Teny ho an'ny fandaharana Vahatra nanomboka tamin'ny taona 2002 hanehoana ny harentsaina raketin'ny Teny Malagasy.",
        "toc": [{"id": "sec-vahatra", "title": "Lisitry ny lohahevitra 1 hatramin'ny 78", "level": 2}],
        "body_html": """<div class="ak-doc-content">
<div class="ak-note-box"><strong>Momba ny fandaharana Vahatra :</strong> Fandaharana mandeha ao amin'ny Televiziona Malagasy nanomboka tamin'ny 2002 hanehoana ireo harentsaina raketin'ny Teny Malagasy sy hampiorenam-paka ny voambolana vaovao.</div>
<h2 id="sec-vahatra">Ireo lohahevitra 78 ao amin'ny Vahatra</h2>
<ol>
<li>Ny kilalao, ny loka</li><li>Akotso</li><li>Ala</li><li>Ala an-deboka</li><li>Andevo sy olo-mainty</li>
<li>Angaredona</li><li>ANTALAOTRA na talaotra</li><li>Ary</li><li>Bakalanisahaza na bakalanisahala</li><li>Barenjy (bronze)</li>
<li>Bekotromaroholatra na behotromaroholatra</li><li>Bika</li><li>Fanakadrihana</li><li>Fanamejàna</li><li>Faran’ny lohany</li>
<li>Fombam-pitenenana</li><li>Hadifetsy</li><li>Hainteny</li><li>Hamìna</li><li>Haratsaka na karatsaka</li>
<li>Harona</li><li>Heny</li><li>Hira sy zava-manenon’ny malagasy</li><li>Honko</li><li>Hova</li>
<li>Hova mainty</li><li>Jio</li><li>Jirika</li><li>Kalo</li><li>Kararàna</li>
<li>Katibo</li><li>Kato</li><li>Katra</li><li>Katsa</li><li>Kiavelo</li>
<li>Kininina</li><li>Kipahe</li><li>Lahapahitra</li><li>Lany karaoka</li><li>Lopòtra</li>
<li>Ny asa amam-piveloman’ny razana malagasy</li><li>Ny diarin’i Madagasikara</li><li>Ny dihin’ny malagasy</li><li>Ny fahagola na fahagoga</li><li>Ny fihavanan’ny malagasy (I)</li>
<li>Ny fihavanan’ny malagasy (II)</li><li>Ny finoan’ny malagasy</li><li>Ny fitafian’ny malagasy</li><li>Ny fiteny malagasy (I)</li><li>Ny fiteny malagasy (II)</li>
<li>Ny foko malagasy</li><li>Ny fonenana sy ny tranon’ny malagasy</li><li>Ny malagasy tany ambadiky Manareza</li><li>Ny malakasy andiany faharoa</li><li>Ny malakasy andiany fahatelo farany</li>
<li>Ny masombika sy ny makoa (I)</li><li>Ny masombika sy ny makoa (II)</li><li>Ny naka</li><li>Ny nosy Madagasikara</li><li>Ny saha</li>
<li>Ny volo sy ny taovolon’ny malagasy</li><li>Ohabolana</li><li>Ony asara</li><li>Palma</li><li>Rantim-panadihadiana</li>
<li>Rantim-panomanana</li><li>Ranty tomotra</li><li>Riakasia</li><li>Rihitramy</li><li>Sasin-teny</li>
<li>Savoka</li><li>Tafiana</li><li>Tetibambana, tetiriaka</li><li>Toeram-pandevenana</li><li>Tohakodia</li>
<li>Vazimba</li><li>Volo</li><li>Zazamanga</li>
</ol>
</div>""",
    },
    {
        "slug": "dikanteny-sehatra",
        "url": "https://teny-malagasy.akademia-malagasy.mg/dikanteny.php",
        "category": "Vahatra & Dikanteny",
        "title": "Sehatra efa nanaovana fandikan-teny ho amin'ny Teny malagasy",
        "author": "Foibe momba ny Teny an'ny Akademia Malagasy",
        "summary": "Lisitry ny sehatr'asa 27 nanaovan'ny Foibe momba ny Teny fandikan-teny sy fampiorenam-paka voambolana hatramin'ny taona 2002.",
        "toc": [{"id": "sec-dik", "title": "Sehatra 27 nanaovana fandikan-teny", "level": 2}],
        "body_html": """<div class="ak-doc-content">
<h2 id="sec-dik">Sehatra efa nanaovana fandikan-teny ho amin'ny Teny malagasy</h2>
<ul>
<li>Torolalalana ho an’ny olom-boafidy</li>
<li>Torolalana ho an’ny Ben’ny Tanàna</li>
<li>Etika sy Dinan’ny fahamarinana</li>
<li>Deontôlôjia ho an’ny Mpiasam-panjakana</li>
<li>Fananan-tany</li>
<li>Sahan’asa hampandrosoana ny eny Ambanivohitra</li>
<li>Fifanaraham-piaraha-miasa</li>
<li>Fampimirana lenta Prôgrama Saha</li>
<li>Fitsipika anatina orindraharaha</li>
<li>Banky</li>
<li>Fanararaotana mamoafady</li>
<li>Inona no atao hoe Lalàmpanorenana</li>
<li>Fitantanana Tranomboky</li>
<li>Prôgrama Madacraft ho an’ny mpanao asatanana</li>
<li>Fitompoan-draharaha</li>
<li>Tetipitondrana ho amin’ny Fanapariaham-pahefana sy ny Fitsinjaram-pahefana</li>
<li>Fampahalalana ny Arsiva, ny Mozea, ny Tranomboky any La Réunion</li>
<li>Fifandraisantendro aty Afrika</li>
<li>Tambazotra Shoprite</li>
<li>Ny Demokrasia</li>
<li>Teny malagasy ao amin’ny Google</li>
<li>CNAPS : Fitsipika anatiny, Fitsipiky ny malinasa, Tetipitondrana ny fitantanana ny lafiny mpiasa</li>
<li>RTM : Varotra ara-drariny</li>
<li>Orange</li>
</ul>
</div>""",
    },
    {
        "slug": "foibe-fandraisana",
        "url": "https://teny-malagasy.akademia-malagasy.mg/index.php",
        "category": "Tantara & Vaovao",
        "title": "Ny Foibe momba ny Teny an'ny Akademia Malagasy (Tahala Rarihasina Analakely)",
        "author": "Akademia Malagasy",
        "summary": "Tantaran'ny Foibe momba ny Teny, ny Rakibolana Rakipahalalana (teny iditra 35 000), ny andiana Voambolana bilingues ary ny Iray volan'ny Teny malagasy.",
        "toc": [
            {"id": "sec-hist", "title": "Ny niorenany sy ny sahanasany", "level": 2},
            {"id": "sec-sync", "title": "Tahirin-kevitra feno azo alaina amin'ny Synchronisation", "level": 2},
        ],
        "body_html": """<div class="ak-doc-content">
<h2 id="sec-hist">Ny Foibe momba ny Teny an'ny Akademia Malagasy</h2>
<p><strong>Toerana :</strong> Tahala Rarihasina Analakely (Rihana faharoa), 45–47 Lalana 26 Jona 1960, Antananarivo 101.</p>
<ul>
  <li><strong>1993–1995 :</strong> Niditra ho mpikambana tao amin'ny RINT sy RIOFIL (nivondrona ho RIFAL — <em>Réseau International Francophone d'Aménagement Linguistique</em>) ary nanofana mpikaroka momba ny fikirakirana ny Teny malagasy amin'ny fitaovana infôrmatika.</li>
  <li><strong>2000 :</strong> Nanomboka namoaka ny andiana <em>Voambolana malagasy–frantsay / Vocabulaire français–malgache</em> (Fanabeazana sy Fanofanana, Zahatany, Riaka sy ny morony...).</li>
  <li><strong>2002–2008 :</strong> Ho tsangambaton'ny faha-100 taonan'ny Akademia Malagasy dia niroso tamin'ny fanefena ny <strong>Rakibolana Rakipahalalana</strong> (teny iditra 35 000 ka zana-teny iditra ny 10 000, lahatsoratra 400, olomahay 135, pejy 1 133).</li>
  <li><strong>2009 :</strong> Lany tao Addis-Abeba (ACALAN / Firaisambe Afrikanina) ho isan'ireo <strong>teny afrikanina 12 matanjaka indrindra aty Afrika Atsinanana sy miampita sisintany</strong> ny teny malagasy (ampiasaina koa ao Mayotte sy Comores amin'ny anarana hoe <em>kibushi / shibushi</em>).</li>
</ul>
<h2 id="sec-sync">Fampidirana ny tahirin-kevitra feno (Synchronisation 1-clic, &lt; 5 Mo)</h2>
<p>Tsindrio ny bokotra <strong>« Synchroniser le site »</strong> etsy ambony hampidirana ao anatin'ny 30 segondra ny lahatsoratra feno rehetra nosoratan'ireo mpikambana ao amin'ny Akademia Malagasy :</p>
<ul>
  <li><strong>Pr. Siméon Rajaona :</strong> <em>Ny Matoanteny eo amin'ny Teny malagasy</em></li>
  <li><strong>Pr. Roger Bruno Rabenilaina :</strong> <em>Ny fifehezanteny malagasy</em></li>
  <li><strong>Fidèle Joseph Andrianasolo :</strong> <em>Ny feon-teny malagasy</em></li>
  <li><strong>Pr. Raoelina Andriambololona &amp; Ramiandrasoa Fred :</strong> <em>Ny Fandrafetana ny teny siantifika</em></li>
  <li><strong>Dr Randria Michel :</strong> <em>Ny Tantaran'ny Teny malagasy &amp; Bulletin (1902–2001)</em></li>
  <li><strong>Pr. Marie Jeanne Razanamanana &amp; Dr Oliva Ramavonirina :</strong> <em>Vaovao momba ny Teny (UNESCO, ACALAN, Kibushi)</em></li>
  <li><strong>Bibliôgrafia (1880–2001)</strong> + <strong>Voambolana A–Z (MG↔FR)</strong> + <strong>PDF Ôfisialy (/pro/0.pdf &amp; /pro/oha.pdf)</strong>.</li>
</ul>
</div>""",
    },
]

SEED_VOCAB = [
    # Voambolana Fanabeazana (MG -> FR)
    ("Fanabeazana", "mg-fr", "A", "abàka", "", "a.", "fafana fizahana marika.", "abaque n."),
    ("Fanabeazana", "mg-fr", "A", "abidia", "", "a.", "anondroana ireo litera rehetra manomboka amin'ny « a » ka hatramin'ny « z ».", "alphabet n."),
    ("Fanabeazana", "mg-fr", "A", "adidy", "", "a.", "asa fanasoavana tontosaina amin'ny mpiara-monina na ny mpiray tanindrazana ary tsy mba itakiana sandany.", "devoir n."),
    ("Fanabeazana", "mg-fr", "A", "adigasy", "", "a.", "fomba fandaharan-kevitra fampiasan'ny Malagasy manokana.", "démarche typiquement malgache loc."),
    ("Fanabeazana", "mg-fr", "A", "adihevitra", "1", "a.", "fifanazavan-kevitra sy fifandresen-dahatra ifanaovana manoloana toe-javatra tsy dia ifanarahana loatra.", "débat n."),
    ("Fanabeazana", "mg-fr", "A", "adihevitra", "2", "a.", "fifanakalozan-kevitra ataona vondron'olona iray sehatr'asa mba handraisana fanapahan-kevitra iombonana.", "délibération n."),
    ("Fanabeazana", "mg-fr", "A", "adina", "", "a.", "fanontaniana aseho amina endrika samihafa aroso hovalian'ny mpianatra na mpiofana mba hitsarana ny fahaizany.", "interrogation n."),
    ("Fanabeazana", "mg-fr", "A", "adina am-bava", "", "a.t.", "fanontaniana aseho am-bava aroso hovalian'ny mpianatra na mpiofana.", "interrogation orale loc."),
    ("Fanabeazana", "mg-fr", "A", "adina an-tsoratra", "", "a.t.", "fanontaniana aseho an-tsoratra aroso hovalian'ny mpianatra na mpiofana.", "interrogation écrite loc."),
    ("Fanabeazana", "mg-fr", "A", "ad(in)y", "2", "a.", "paikam-pandresen-dahatra hoenti-manatratra ny tanjona najoro.", "stratégie n., tactique n."),
    ("Fanabeazana", "mg-fr", "A", "adirafitra", "", "a.", "fanambarana singan-javatra roa na maromaro.", "assemblage n."),
    ("Fanabeazana", "mg-fr", "A", "afa-miaraka", "", "mpt.", "mifanentana sy mifandraika ary mifameno ka azo atambatra hahazoana vokatra mahomby.", "compatible adj."),
    ("Fanabeazana", "mg-fr", "A", "afa-mifaninana", "2", "mpt.", "sahy sehatra sy sahy sedra ka vonona hatrany hifampitaha amin'ny hafa.", "compétitif, ive adj."),
    ("Fanabeazana", "mg-fr", "A", "aingam-panahy", "", "a.", "fientanana anaty manosika ny olona ho eo amin'ny famoronana zava-kanto.", "inspiration n."),
    ("Fanabeazana", "mg-fr", "A", "akademia", "", "a.", "fikambanan'ny samy mpanoratra, mpanankanto, mpikaroka siantifika na manam-pahaizana ekena ho sangany.", "académie n."),
    ("Fanabeazana", "mg-fr", "A", "akalan-dava", "", "a.", "fanaka fipetrahana omby olona roa fara faharatsiny eny an-jaridaina na any an-tsekoly.", "banc n."),
    ("Fanabeazana", "mg-fr", "A", "akanin-jaza", "1", "a.", "toerana natokana ametrahana sy ikarakarana ny zaza manana ray aman-dreny miasa.", "crèche n."),
    ("Fanabeazana", "mg-fr", "A", "akanin-jaza", "2", "a.", "toeram-panabeazana ireo zaza tsy mbola taonan'ny sekoly hitarihan-dalana azy.", "école maternelle loc."),
    ("Fanabeazana", "mg-fr", "A", "akora trandrahana", "", "a.t.", "angona voka-pikarohana azo itrandrahan-kevitra.", "matériel de recherche loc."),
    ("Fanabeazana", "mg-fr", "A", "akoran-draha", "", "a.", "tahirin-kevitra iasana amina seha-pikarohana voafaritra mazava tsara.", "corpus n."),
    ("Fanabeazana", "mg-fr", "A", "ala diso [asa printy]", "", "a.", "asa atao hanalana ny fanoratra tsy mandeha amin'ny laoniny.", "correction n."),
    # Voambolana Fanabeazana (FR -> MG)
    ("Fanabeazana", "fr-mg", "A", "abréviation", "", "n.", "", "fanafohezan-teny a."),
    ("Fanabeazana", "fr-mg", "A", "abstrait, e", "", "adj.", "", "voasaina mpt."),
    ("Fanabeazana", "fr-mg", "A", "accord de partenariat", "", "loc.", "", "fifanekem-parimbona a."),
    ("Fanabeazana", "fr-mg", "A", "action culturelle", "", "loc.", "", "kolosaina a."),
    ("Fanabeazana", "fr-mg", "A", "action de convaincre", "", "loc.", "", "fandresen-dahatra a."),
    ("Fanabeazana", "fr-mg", "A", "addition", "", "n.", "", "adisanina a., fanambarana a., tambatra a."),
    ("Fanabeazana", "fr-mg", "A", "adjectif", "", "n.", "", "mpamari-toetra a."),
    ("Fanabeazana", "fr-mg", "A", "adverbe", "", "n.", "", "tambinteny a."),
    ("Fanabeazana", "fr-mg", "A", "alphabétisation", "", "n.", "", "fampianarana taratasy a.t., haitaratasy a."),
    ("Fanabeazana", "fr-mg", "A", "analyse", "", "n.", "", "famahavahana a., famotopotorana a., fanasinkasinana a., fandrasana a."),
    ("Fanabeazana", "fr-mg", "A", "angles égaux", "", "loc.", "", "mira zoro a.t."),
    ("Fanabeazana", "fr-mg", "A", "année scolaire", "", "loc.", "", "taom-pianarana a."),
    ("Fanabeazana", "fr-mg", "A", "antithèse", "", "n.", "", "tohi-kevitra a."),
    ("Fanabeazana", "fr-mg", "A", "apostrophe", "", "n.", "", "faingo mihantona a.t."),
    ("Fanabeazana", "fr-mg", "A", "appareil de mesure", "", "loc.", "", "fandrefy a."),
    ("Fanabeazana", "fr-mg", "B", "bachotage", "", "n.", "", "kinanga a."),
    ("Fanabeazana", "fr-mg", "B", "bibliothécaire", "", "n.", "", "mpiandraiki-boky a."),
    ("Fanabeazana", "fr-mg", "B", "bibliothèque", "", "n.", "", "tranomboky a."),
    ("Fanabeazana", "fr-mg", "B", "bien fondé, e", "", "adj.", "", "marim-pototra mpt."),
    ("Fanabeazana", "fr-mg", "B", "bourse d'étude", "", "loc.", "", "vatsim-pianarana a."),
    ("Fanabeazana", "fr-mg", "B", "brochure", "", "n.", "", "kibokiboky a."),
    ("Fanabeazana", "fr-mg", "B", "brouillon", "", "n.", "", "vakiraoka a."),
    ("Fanabeazana", "fr-mg", "B", "but", "", "n.", "", "tarigetra a., zava-kendrena a."),
    # Teny siantifika (Pr. Raoelina Andriambololona & Fred Ramiandrasoa - fandrafetana.php)
    ("Teny siantifika", "mg-fr", "A", "alijebra", "", "Matematika", "Fanagasiana teny siantifika (fandrafetana.php).", "algèbre"),
    ("Teny siantifika", "mg-fr", "D", "dôko", "", "Matematika", "Voambolana avy amin'ny tenim-paritany nampidirina amin'ny matematika.", "identité"),
    ("Teny siantifika", "mg-fr", "F", "fampimirana", "", "Matematika", "Voambolana matematika avy amin'ny fototeny « mira ».", "équation"),
    ("Teny siantifika", "mg-fr", "F", "fimirabika", "", "Zeolozia / Matematika", "Mitovy bika na rafitra.", "isomorphisme"),
    ("Teny siantifika", "mg-fr", "F", "fimirarefy", "", "Matematika", "Mitovy refy.", "isométrie"),
    ("Teny siantifika", "mg-fr", "F", "fiovan'ny lefa", "", "Matematika", "Fiovan'ny lefa f (fa tsy fihetsika).", "variation d'une fonction f"),
    ("Teny siantifika", "mg-fr", "K", "kôsy", "", "Matematika", "Fanafohezana soratra iraisam-pirenena « cos ».", "cosinus"),
    ("Teny siantifika", "mg-fr", "K", "kôtege", "", "Matematika", "Fanafohezana soratra iraisam-pirenena « cotg ».", "cotangente"),
    ("Teny siantifika", "mg-fr", "L", "laoga", "", "Matematika", "Fanafohezana soratra iraisam-pirenena « log ».", "logarithme"),
    ("Teny siantifika", "mg-fr", "L", "lefa", "", "Matematika", "Voambolana matematika.", "fonction"),
    ("Teny siantifika", "mg-fr", "M", "mira", "", "Matematika", "Fototeny avy amin'ny tenim-paritany ampiasaina ho tovona (iso- / co-).", "égal"),
    ("Teny siantifika", "mg-fr", "M", "mirabika", "", "Zeolozia", "Tovona mira- + bika.", "isomorphe"),
    ("Teny siantifika", "mg-fr", "M", "mirafandry", "", "Zeolozia", "Tovona mira- + fandry.", "isocline"),
    ("Teny siantifika", "mg-fr", "M", "mirahafanana", "", "Meteorolojia", "Tovona mira- + hafanana.", "isotherme"),
    ("Teny siantifika", "mg-fr", "M", "mirahatsiaka", "", "Meteorolojia", "Tovona mira- + hatsiaka.", "isochimène"),
    ("Teny siantifika", "mg-fr", "M", "mirahatsy", "", "Matematika", "Miray tsipika.", "colinéaire"),
    ("Teny siantifika", "mg-fr", "M", "miraivo", "", "Matematika", "Mitovy ivo.", "concentrique"),
    ("Teny siantifika", "mg-fr", "M", "miralemaka", "", "Matematika", "Ao anaty lemaka iray.", "coplanaire"),
    ("Teny siantifika", "mg-fr", "M", "mirarefy", "", "Matematika", "Mitovy refy.", "isométrique"),
    ("Teny siantifika", "mg-fr", "M", "mirazotra", "", "Matematika / Fizika", "Mitovy zotra.", "isotrope"),
    ("Teny siantifika", "mg-fr", "O", "ova x", "", "Matematika", "Teny tsotra fa tsy verindroa (ovaovao).", "variable x"),
    ("Teny siantifika", "mg-fr", "S", "siny", "", "Matematika", "Fanafohezana soratra iraisam-pirenena « sin ».", "sinus"),
    ("Teny siantifika", "mg-fr", "T", "tega", "", "Matematika", "Fanafohezana soratra iraisam-pirenena « tg ».", "tangente"),
    ("Teny siantifika", "mg-fr", "T", "tohipamadihana", "", "Matematika", "Tovona tohi- (anti-) + famadihana.", "antisymétrie"),
    ("Teny siantifika", "mg-fr", "T", "tohipamindrana", "", "Matematika", "Tovona tohi- (anti-) + famindrana.", "antidéplacement"),
    ("Teny siantifika", "mg-fr", "T", "tohipitika", "", "Fizika", "Tovona tohi- (anti-) + pitika.", "antiparticule"),
    ("Teny siantifika", "mg-fr", "T", "tokambika", "", "Matematika", "Avy amin'ny « tokana ».", "uniforme"),
    ("Teny siantifika", "mg-fr", "T", "tokambolo", "", "Fizika", "Loko tokana.", "monochrome"),
    ("Teny siantifika", "mg-fr", "T", "tokampiantaona", "", "Matematika", "Avy amin'ny « tokana ».", "monôme"),
    ("Teny siantifika", "mg-fr", "T", "tokampiova", "", "Matematika", "Avy amin'ny « tokana » + fiova.", "monotone"),
    ("Teny siantifika", "mg-fr", "T", "tokanefitra", "", "Siansa natioraly", "Sela na efitra tokana.", "unicellulaire"),
    # Kibushi / Shibushi (Teny malagasy miampita sisintany - Mayotte & Comores, vaovao.php?id=3)
    ("Kibushi (Comores & Mayotte)", "mg-fr", "A", "akori (akory)", "", "Kibushi", " Endriky ny teny malagasy ampiasaina ao Mayotte sy Comores.", "bonjour"),
    ("Kibushi (Comores & Mayotte)", "mg-fr", "D", "dzéri (jery)", "", "Kibushi", "Endriky ny « jery » amin'ny fiteny kibushi/shibushi.", "intelligence"),
    ("Kibushi (Comores & Mayotte)", "mg-fr", "H", "haligni / tsofchrou", "", "Kibushi", "Tsofotr'andro / alina amin'ny fiteny kibushi.", "nuit"),
    ("Kibushi (Comores & Mayotte)", "mg-fr", "H", "hanigni (hanina)", "", "Kibushi", "Sakafo / hanina amin'ny fiteny kibushi.", "repas"),
    ("Kibushi (Comores & Mayotte)", "mg-fr", "M", "midranou (minon-drano)", "", "Kibushi", "Misotro rano amin'ny fiteny kibushi.", "boire"),
    ("Kibushi (Comores & Mayotte)", "mg-fr", "M", "mihinagnan (mihinana)", "", "Kibushi", "Mihinana amin'ny fiteny kibushi.", "manger"),
    ("Kibushi (Comores & Mayotte)", "mg-fr", "R", "ranou massigni (ranomasina)", "", "Kibushi", "Ranomasina amin'ny fiteny kibushi.", "la mer"),
]

SEED_PDFS = [
    {
        "slug": "iray-volana-2026",
        "title": "Iray volan'ny Teny malagasy 2026 — Fifaninanana « fanabeazam-boho ny teny »",
        "description": " Antso fandraisana anjara amin'ny fifaninanana voambolana vaovao sy teny vahiny nogasiana (1 jona – 31 jolay 2026, Tahala Rarihasina Analakely).",
        "source_url": "https://teny-malagasy.akademia-malagasy.mg/pro/0.pdf",
    },
    {
        "slug": "ohabolana-2025",
        "title": "Iray volan'ny Teny malagasy 2025 — Fifaninanana mamorona ohabolana",
        "description": "Fepetra amin'ny fifaninanana mamorona ohabolana vaovao miisa folo farafahakeliny karakarain'ny Foibe momba ny Teny.",
        "source_url": "https://teny-malagasy.akademia-malagasy.mg/pro/oha.pdf",
    },
]


def ensure_seed_data(db: AkademiaDB) -> None:
    """Charge la base initiale officielle si la base SQLite vient d'etre creee."""
    if db.get_setting("seeded_v1", "0") == "1":
        return

    for doc in SEED_DOCUMENTS:
        body_text_raw = doc["body_html"]
        import re as _re
        import html as _html
        plain = _re.sub(r"<[^>]+>", " ", body_text_raw)
        plain = " ".join(_html.unescape(plain).split())
        db.upsert_document(
            slug=doc["slug"],
            url=doc["url"],
            category=doc["category"],
            title=doc["title"],
            author=doc["author"],
            summary=doc["summary"],
            body_html=doc["body_html"],
            body_text=plain,
            toc=doc["toc"],
            is_seed=True,
        )

    batch = []
    for dom, direction, letter, term, sense_num, pos, definition, translation in SEED_VOCAB:
        batch.append(
            {
                "entry_uid": make_entry_uid(dom, direction, term, sense_num, translation or definition),
                "domain": dom,
                "direction": direction,
                "letter": letter,
                "term": term,
                "sense_num": sense_num,
                "pos": pos,
                "definition": definition,
                "translation": translation,
                "source_url": "https://teny-malagasy.akademia-malagasy.mg/fanabeazana.php",
            }
        )
    db.upsert_vocab_batch(batch, is_seed=True)

    for p in SEED_PDFS:
        db.upsert_pdf(
            slug=p["slug"],
            title=p["title"],
            description=p["description"],
            source_url=p["source_url"],
            downloaded=False,
        )

    db.set_setting("seeded_v1", "1")
