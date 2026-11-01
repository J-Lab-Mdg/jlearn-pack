# -*- coding: utf-8 -*-
"""T6 — **FARITANA II · FITSIPIKY NY TENY** (leçon L8-L11) : LFK 2d · 2e · 2f · 2g.

Votoatiny = **FRP Malagasy T6, éd. Oktobra 2026**, p.82-83 (LFK 2d « Fandrasana teny », 2e
« Anaran'ny tsirinteny », 2f « Famadihana ny RF ho L », 2g « Filaza mandidy ») — **voasoro
teny-teny**, ka ny ôhatra rehetra (*nilalao < n-i-lalao*, *Baolina no lalaovin' i Lita*,
*Mividiana fanafody*, *vakina > vakio*, *Soa > soa-v-a*, …) dia an'ny boky.
**Tsy misy français ao amin'ny lesona** ; ny fanazavana ho an'ny mpampianatra = *note* (footer).
"""
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from fiche_t6 import fiche_t6  # noqa: E402

ZT = "Fitsipika"
FAR = "FARITANA II · FITSIPIKY NY TENY"

# =========================================================== L8 · 2d
LESONA_8 = [
    ("h2", "Ny atao hoe fandrasan-teny"),
    ("p", "« *Marika famantarana fa handrasa teny : <* ». Rehefa hijerena ny "
          "ampahany tsirairay amin'ny teny iray — ny **tsirinteny** sy ny **fototeny** — dia "
          "asandry amin'ny **« < »** ny teny feno, ary manaraka azy ny ampahany voasaraka amin'ny "
          "« - »."""),
    ("sary", "fandrasana"),
    ("tabl", (["Fandravan-teny", "Ny dikan'ireo ampahany"],
              [["*Nilalao* **<** *n-i-lalao*", "*m/n* : tovona vakiny miova nifanova amin'ny "
                "filazam-potoana **lasa** · *m/h* : **ho avy** · *m* : **ankehitriny**"],
               ["*hilalao* **<** *h-i-lalao*", "*i* : tovona vakiny **tsy miova** · *lalao* : "
                "**fototeny**"],
               ["*Nilalaovana* **<** *n(o)-i-lalao-v-ana*", "*N(o)-* : lasa · *H(o)-* : ho avy · "
                "*Φ-* : ankehitriny"],
               ["*ilalaovana* **<** *Φ-i-lalao-v-ana*", "*i-…-ana* : tsirinteny **sara-droa** · "
                "*-v-* : **fanatsaram-peo**"],
               ["*Atao* **<** *Φ-a-tao*", "*a-* : tovona **tsy mivaky** · *tao* : fototeny"],
               ["*Filalaovana* **<** *f-i-lalao-v-ana*", "*f-* : tovona **famoronana anarana**"]],
              [4100, 5767])),
    ("note", "Teny-teny avy amin'ny FRP (p.82) ny ôhatra rehetra ao amin'ity tabilao ity — ka "
             "*lalao* no fototeny ampiasaina amin'ny boky ho modely. Ny **« Φ- »** (feo very) dia "
             "marika fanao amin'ny fanasokajiana ny tovona: **tsy misy** tsirinteny hita amin'ny "
             "teny, fa filazam-potoana ankehitriny ihany no mitondra azy."),
    ("h2", "Fomba fanaovana azy"),
    ("ohatra", ["**Hodiraina** aloha ny fototeny : *lalao* · *tao* · *haka*",
                "**Avy eo** dia karohina ny tovona (mivaky / tsy mivaky) sy ny tovana "
                "(*-ana*, *-ina*)",
                "**Farany** ampiasao amin'ny fandrasana ny tsirinteny sara-droa : *i-…-ana* → *filalaovana*"]),
]

EXOS_8 = [
    {"consigne": "Efaso ny fototeny ao amin'ireto teny ireto : *milalao*, *nandrifatra*, "
                 "*mahafinaritra*, *vavana*, *kitratraina*."},
    {"consigne": "Ampifandraiso amin'ny alalan'ny tsilo : ny teny sy ny fandravany.",
     "tsilo": (["*hilalao*", "*filalaovana*", "*atao*", "*nofosana*"],
               ["*h-i-lalao*", "*f-i-lalao-v-ana*", "*Φ-a-tao*", "*nofo-s-ana*"])},
    {"consigne": "Inona no atao amin'ny marika « < » rehefa mandraza teny ?"},
    {"consigne": "Soraty amin'ny alalan'ny « < » : *mividiana*, *lalao-v-ina*."},
]

FANITSIANA_8 = [
    {"note": "*lalao* · *drifatra* · *finaritra* · *vava* · *tratra* (araka ny FRP, LFK 2b "
            "sy 2d)."},
    {"tsilo": (["*hilalao*", "*filalaovana*", "*atao*", "*nofosana*"],
               ["*h-i-lalao*", "*f-i-lalao-v-ana*", "*Φ-a-tao*", "*nofo-s-ana*"])},
    {"note": "Mamerina ny tenin'ny boky : « *Marika famantarana fa handrasa teny : <* »."},
    {"note": "*mividiana < m-i-vidi-ana* · *lalaovina < Φ-lalao-v-ina*."},
]

LOHARANO_8 = [
    "FRP T6 éd. Oktobra 2026, p.82 : « LFK 2d : FITSIPIKY NY TENY / Fandrasana teny — Marika "
    "famantarana fa handrasa teny : < ; Fomba fandrasana teny » + ny 8 ôhatra.",
    "Fifandraisana amin'ny LFK 2a (Tsirinteny) sy 1a/1e (tsipelina) : ny teny iray ihany no "
    "miverina, fa ny karazana tsirinteny no voatondro eto.",
    "RAPE T6 sept. 2026 : herinandro 22→27 ho an'ny LFK 2d-2g.",
]

# =========================================================== L9 · 2e
LESONA_9 = [
    ("h2", "Anaran'ny tsirinteny"),
    ("p", "« *Misy karazany efatra ny tsirinteny :* » — **Tovona** · **Tovana** · "
          "**Tsirinteny sara-droa** · **Tsofoka**. Itoa no anarana ampiasaina amin'ny fanerena "
          "an-tsekoly sy amin'ny fanisana ny ampahany amin'ny sampanteny."""),
    ("sary", "karazana-tsirinteny"),
    ("tabl", (["Anarana", "Amin'ny teny mazava", "Ôhatra ao amin'ny FRP"],
              [["**Tovona**", "eo **alohan'**ny fototeny", "*m-*, *a-*, *voa-*, *tafa-*, *ha-*, "
                "*f-*, *mp-*, *ki-*, *ko-*"],
               ["**Tovana**", "eo **ambany/ao anaty** — amin'ny farany", "*-ana*, *-ina* "
                "(*volo-ina*, *vava-ana*)"],
               ["**Tsirinteny sara-droa**", "**roa ampahany** mifandimby: tovona + tovana",
                "*i-…-ana* (*filalaovana*)"],
               ["**Tsofoka**", "**ao anaty** fototeny, manatevina azy", "*t-al-esaka*, "
                "*b-il-itika*, *s-ol-anga*, *f-in-aritra*"]],
              [2350, 3000, 4517])),
    ("p", "« *Ny tsofoka dia manamafy ny hevitry ny mpamari-toetra* » — izany no "
          "atao amin'ireo teny toy ny *talesaka* sy *bilitika*."),
    ("note", "Miova ho **m** ny *n* rehefa alohan'ny *b* na *p* ny tovona/tsirinteny, ary dia "
             "**maty** alohan'ny *m* na *n* : hita ao amin'ny LFK 1e (fanakambanan-teny) izany "
             "fitazana, sady mifandray amin'ny *sarin-tany* sy *tranom-pokonolona*."),
]

EXOS_9 = [
    {"consigne": "Omeo anarana ny tsirinteny isaky ny ampahany : *f-* amin'ny *filalaovana* · "
                 "*-ina* amin'ny *voloina* · *-in-* amin'ny *sinaritra* · *i-…-ana* amin'ny "
                 "*ilalaovana*."},
    {"consigne": "Ampifandraiso amin'ny alalan'ny tsilo.",
     "tsilo": (["**Tovona**", "**Tovana**", "**Sara-droa**", "**Tsofoka**"],
               ["*nofo-s-ana*", "*ka-hihitra*", "*f-in-aritra*", "*Φ-i-lalao-v-ana*"])},
    {"consigne": "Fototeny ihany ve ny *kitratraina* ? Lazao ny karazana tsirinteny hita ao."},
    {"consigne": "Mamorona roa teny misy tsofoka ary roa misy tovona tsy mivaky."},
]

FANITSIANA_9 = [
    {"note": "*f-* = tovona famoronana anarana · *-ina* = tovana · *-in-* = tsofoka · *i-…-ana* = "
             "tsirinteny sara-droa."},
    {"tsilo": (["**Tovona**", "**Tovana**", "**Sara-droa**", "**Tsofoka**"],
               ["*ka-hihitra*", "*nofo-s-ana*", "*Φ-i-lalao-v-ana*", "*f-in-aritra*"])},
    {"note": "Tsy fototeny ihany : *ki-tratra-ina* — **ki-** + *tratra* + **-ina**."},
    {"note": "Ohatra mety : *t-al-esaka*, *b-il-itika* (tsofoka) · *voalalao*, *tafa-vory* "
             "(tovona tsy mivaky) — ilay voalohany avy amin'ny FRP."},
]

LOHARANO_9 = [
    "FRP T6 éd. Oktobra 2026, p.82 : « LFK 2e : FITSIPIKY NY TENY / Anaran'ny tsirinteny » "
    "(karazana efatra).",
    "Ny ôhatra rehetra (*ma-dio*, *maha-finaritra*, *ka-hihitra*, *fa-rofy*, *volo-ina*, "
    "*nofo-s-ana*, *vava-ana*, *t-al-esaka*, *b-il-itika*, *s-ol-anga*, *f-in-aritra*, "
    "*ki-tratra-ina*) : LFK 2b, p.79-80.",
]

# =========================================================== L10 · 2f
LESONA_10 = [
    ("h2", "Ny atao hoe famadihana ny RF ho L"),
    ("p", "« *Fomba tsotra indrindra famadihana ny RF ho L* ». Ny **RF** dia ny fehezanteny **mivady** (*R* + *F* : ny toerana anaovan'ny mpandray anjara lehibe), ny "
          "**L** kosa dia ny lazaina — ka ny dingana dia : **mamerina ny EM** (ny zavatra "
          "tokony ho reniraina) **ho aloha**, ary **hamadihady ny matoanteny** mba "
          "hanarahana ny *« no »*."""),
    ("sary", "rf-ho-l"),
    ("tabl", (["Ampahany", "Ny teny"],
              [["**RF / Iharana**", "*Milalao baolina i Lita.*"],
               ["**L / Iharana** + **EM**", "*Baolina **no** *lalaovin'* i Lita.*"],
               ["**FKI mivany 2**", "*Lalaovina ny baolina.*"],
               ["**Fandravan'ny matoanteny**", "*Lalaovina* **<** *Φ-lalao-v-ina*"]],
              [3500, 6367])),
    ("p", "« *(Atao mivadi-drafitra ny fehezanteny)* » : izany hoe miova ny **firafitry** ny "
          "fehezanteny fa tsy ny hevitra. Ny matoanteny dia lasa **tovana** (*-ina* / *-ana*) : "
          "*lalaovina* ← *Φ-lalao-v-ina*."),
    ("note", "Ao amin'ny FRP (p.83) dia tsy misy fampidirana maharitra ny teny hoe « EM » sy "
             "« L » : hita ihany ao amin'ny ôhatra (*L / Iharana*, *EM*, *RF / Iharana*). Noho "
             "izany dia **tsy nampiharina fanazavana fanampiny** eto — ampiasaina toy ny ao "
             "amin'ny boky ihany ny anarana. (Jereo koa LFK 2b : « *afaka mitana anjara asa "
             "fototra (EM, L) sy fameno* ».)"),
    ("h2", "Ny fepetra"),
    ("ohatra", ["Miova ny **tovana** : *milalao* → *lalaovin'* (*lalao* + *-v-* + *-ina*)",
                "Tsy miova ny **hevitra** : ny mpandray anjara iray ihany no voalaza, fa mifindra "
                "ny lanja — eto dia eo amin'ny **baolina** ilay izy",
                "Misy **« no »** eo alohan'ny matoanteny rehefa **L / Iharana** aloha",
                "Miova koa ny **lazaina** : *i Lita* → *i Lita* (tsy misy *ianao* intsony rehefa "
                "mandidy, jereo ny LFK 2g)"]),
]

EXOS_10 = [
    {"consigne": "Ampifandraiso amin'ny alalan'ny tsilo : ny fehezanteny sy ny fomba "
                 "famadihana azy."},
    {"consigne": "Madio ho L / Iharana ny RF : « *Mividy vary i Neny.* »"},
    {"consigne": "Inona no marika mampiseho ny L / Iharana ao amin'ny fehezanteny vaovao ?"},
    {"consigne": "Soraty ny fandravan'ny matoanteny : *lalaovin'* · *vidian'*."},
]

FANITSIANA_10 = [
    {"note": "*Milalao baolina i Lita.* → *Baolina no lalaovin' i Lita.* ; *Mividy fanafody "
             "ianao.* → *Fanafody no vidaovina.* (toy ny ôhatra ao amin'ny FRP)."},
    {"note": "*Vary no vidian' i Neny.* — araka ny fomba amin'ny boky : *Baolina no lalaovin' "
             "i Lita* (*lalao* + *-v-* + *-ina*) → *vary* + *-ana* → *vidiana*, *n'* alohan'ny "
             "*i Neny*."},
    {"note": "Ny « **no** » : *Baolina **no** lalaovin' i Lita.*"},
    {"note": "*lalaovin'* **<** *Φ-lalao-v-ina* · *vidian'* **<** *Φ-vidi-ana*."},
]

LOHARANO_10 = [
    "FRP T6 éd. Oktobra 2026, p.83 : « LFK 2f : FITSIPIKY NY TENY / Famadihana ny RF ho L » + ny "
    "ôhatra (*Milalao baolina i Lita.* / *Baolina no lalaovin' i Lita.* / *Lalaovina < Φ-lalao-v-ina* "
    "/ *Lalaovina ny baolina*).",
    "Ny « anjara asa fototra (EM, L) sy fameno » : FRP LFK 2b, p.78 (mpamari-toetra).",
]

# =========================================================== L11 · 2g
LESONA_11 = [
    ("h2", "Ny atao hoe filaza mandidy"),
    ("p", "« *Matetika miavaka amin'ny filaza tsotra ny filaza mandidy amin'ny tsy fahitana ny teny "
          "atao lazaina (mpisolo tena na anarana na hafa) izay manondro ny olona itenenana na ny "
          "mpisolo tena manam-pifandraisana aminy.* ». Ary : « *Ny filaza mandidy dia "
          "fanambarana baiko, baiko omena ny olona itenenana mba hanaovany zavatra.* »"),
    ("sary", "mandidy"),
    ("tabl", (["Filaza tsotra", "Filaza mandidy", "Ny zavatra very"],
              [["*Mividy fanafody ianao.*", "*Mividiana fanafody.*", "ny mpisolo tena *ianao*"],
               ["*Manoratra any amin'ilay vazaha vavy.*", "*Manoratra any amin'ilay vazaha vavy.* "
                "(tsy misy mpisolo tena)", "—"],
               ["*Valio ihany ny taratasin'ny vadin'ise!*", "(miovam-baiko, mbaika)",
                "*-na* → *-o*"]],
              [3300, 3800, 2767])),
    ("p", "« *Ny Matoanteny sy ny mpamari-toetra dia aza atao mandidy.* » — ôhatra omen'ny boky : "
          "*Vakina* **>** ***vakio*** ; *Soa* **>** ***soa-v-a*** (misy **fanatsaram-peo** « -v- »)."),
    ("note", "Ao amin'ny FRP dia voasoratra fotsiny « *F. F. L* » etsy ambanin'ny ôhatra "
             "*Soa > soa-v-a* — tsy nohamarinina ao amin'ny boky ny dikan'ireo marika telo ireo, ka "
             "tsy nampidirina fanazavana eto. Ny momba ny « -v- » (fanatsaram-peo) dia voalaza "
             "mazava amin'ny LFK 2d : *-v-* = fanatsaram-peo."),
    ("h2", "Fomba fanaovana"),
    ("ohatra", ["**1.** Karohy ny tovona (*m-* / *m-i-* / *man-* / *ma-*).",
                "**2.** Ovao ny farany : *-na* → *-o* (*vakina* → *vakio*), na ampiany ny "
                "*-v-a* (*soa* → *soavà*).",
                "**3.** Esory ny mpisolo tena (*ianao*, *ianareo*) sady aza adino ny mari-piatoana "
                "* !* rehefa mafy ny baiko."]),
]

EXOS_11 = [
    {"consigne": "Ovao ho filaza mandidy (araka ny modely ao amin'ny FRP) : *Mividy mofomamy "
                 "ianao.* · *Mamaky boky ianao.* · *Vakina ny lahatsoratra.*"},
    {"consigne": "Ampifandraiso amin'ny alalan'ny tsilo.",
     "tsilo": (["*vakina*", "*soa*", "*valio*", "*lalaovina*"],
               ["*vakio*", "*soavà*", "filaza mandidy efa misy *-o*",
                "*lalao* + *-v-* + *-ina*"])},
    {"consigne": "Inona no atao hoe filaza mandidy ? (Lazao araka ny boky.)"},
    {"consigne": "Mamorona fehezanteny roa : iray filaza tsotra, iray filaza mandidy (fototeny "
                 "*sakana*)."},
]

FANITSIANA_11 = [
    {"note": "*Mividiana mofomamy.* · *Mamakilasy boky.* (na *Mamakiana boky.*, araka ny "
             "*mividiana* : tovona *m-* + *-ana*) · *Vakio ny lahatsoratra.* — izay no fomba "
             "amiakana amin'ny FRP : *Mividy fanafody ianao.* → *Mividiana fanafody.* ary *Vakina* "
             "→ *vakio*."},
    {"tsilo": (["*vakina*", "*soa*", "*valio*", "*lalaovina*"],
               ["*vakio*", "*soavà*", "filaza mandidy efa misy *-o*",
                "*lalao* + *-v-* + *-ina*"])},
    {"note": "Teny amin'ny FRP : « *fanambarana baiko, baiko omena ny olona itenenana mba "
             "hanaovany zavatra* »."},
    {"note": "*Misakana ny lalana ianao.* (filaza tsotra) / *Sazao ny lalana !* — na, araka ny "
             "*vakio* : *Sazao* ! (tsy voatery ho mitovy amin'ny an'ny mpampianatra ny valiny)."},
]

LOHARANO_11 = [
    "FRP T6 éd. Oktobra 2026, p.83 : « LFK 2g : FITSIPIKY NY TENY / Filaza mandidy » — ny "
    "famaritana, ny ôhatra roa, « *Ny Matoanteny sy ny mpamari-toetra dia aza atao mandidy* », "
    "*Vakina > vakio*, *Soa > soa-v-a*.",
    "Ny « *-v-* : fanatsaram-peo » : FRP LFK 2d (p.82).",
    "RAPE T6 sept. 2026 : LFK 2g → herinandro 22→27 ; 4 ora/kerinandro.",
]

FICHES = [
    fiche_t6(ZT, "Fandrasan-teny : ny marika « < » sy ny fandravan'ny teny", "LFK 2d", "22→27", 9,
             [("Avereno: inona ny karazana tsirinteny efatra ? (seho teo aloha)",
               "Mamaly.", "Asan-tarika", "—", "LFK 2a sy 2e."),
              ("Soraty ny lohateny + ny marika « < » : « *Marika famantarana fa handrasa teny* ».",
               "Mihaino.", "Asa iombonana", "Solaitrabe", "FRP p.82."),
              ("Efaso ny fototeny amin'ireo teny : *milalao*, *hilalao*, *atao*, *filalaovana*.",
               "Mamaly.", "Asa mifampiha", "Tabilao", "Miova ho *Φ-a-tao* ny *atao*."),
              ("Zarao: tovona mivaky / tsy mivaky / tovana / sara-droa / tsofoka ao amin'ny "
               "*filalaovana*.", "Mamaly.", "Asa samirery", "Kahie", ""),
              ("Sary fandrasan-teny : 4 teny, 4 fandravana.", "Mamaly amin'ny tsilo.",
               "Asa iombonana", "Solaitrabe", ""),
              ("Mandraza teny roa hafa (oh : *mahafinaritra*, *voloina*).", "Mamorona.",
               "Asa samirery", "Kahie", "Tombana : LFK 2d")],
             LESONA_8, EXOS_8, FANITSIANA_8, LOHARANO_8,
             faritana=FAR, faritana_sous="LFK 2d · herinandro 22→27 · ora 20",
             famerenana=("Inona no karazana tsirinteny ? Avereno voalaza.", "Mamaly.",
                         "Asan-tarika", "Mifototra amin'ny LFK 2a sy 2e.")),
    fiche_t6(ZT, "Anaran'ny tsirinteny (famaritana sy ôhatra)", "LFK 2e", "22→27", 10,
             [("Hamaky *f-i-lalao-v-ana* ary hanavaka ny ampahany.", "Mamaky.", "Asan-tarika",
               "Solaitrabe", ""),
              ("Soraty ny karazana efatra.", "Mihaino.", "Asa iombonana",
               "Solaitrabe", ""),
              ("Omeo anarana ny tsirinteny isaky ny ampahany.", "Mamaly.", "Asa mifampiha",
               "Tabilao", ""),
              ("Zarao amin'ny karazana efatra ny 12 teny ao amin'ny tabilao.", "Mamaly.",
               "Asa samirery", "Kahie", ""),
              ("Inona no atao amin'ny tsofoka amin'ny mpamari-toetra ?",
               "« *manamafy ny hevitra* ».", "Asa iombonana", "—", ""),
              ("Mamorona 4 teny : iray isaky ny karazana.", "Mamorona.", "Asa samirery", "Kahie",
               "")],
             LESONA_9, EXOS_9, FANITSIANA_9, LOHARANO_9,
             faritana=FAR, faritana_sous="LFK 2e · herinandro 22→27 · ora 20"),
    fiche_t6(ZT, "Famadihana ny RF ho L (EM sy L)", "LFK 2f", "22→27", 11,
             [("Avereno ny *lalaovina* sy ny *filalaovana* (seho teo aloha).", "Mamaly.",
               "Asan-tarika", "—", ""),
              ("Lazao ny lohateny + soraty ny ôhatra roa.", "Mihaino, manoratra.",
               "Asa iombonana", "Solaitrabe", "FRP p.83."),
              ("Diniho: inona no mifindra eo amin'ny *Milalao baolina i Lita* → *Baolina no "
               "lalaovin' i Lita* ?", "Mamaly.", "Asa mifampiha", "Tabilao", ""),
              ("Madio ho L/Iharana fehezanteny roa hafa.", "Mamorona.", "Asa samirery", "Kahie",
               ""),
              ("Tsilo: RF ↔ L (FANITSIANA).", "Mamaly.", "Asa iombonana", "Solaitrabe", ""),
              ("Soraty ny fandravan'ny matoanteny vaovao (*-ina* / *-ana*).", "Mamaly.",
               "Asa samirery", "Kahie", "Tombana : LFK 2f")],
             LESONA_10, EXOS_10, FANITSIANA_10, LOHARANO_10,
             faritana=FAR, faritana_sous="LFK 2f · herinandro 22→27 · ora 20",
             tombana=("Manamarina amin'ny alalan'ny efatra ôhatra : afaka mamadika RF ho L ny "
                      "mpianatra ?", "Mamaly.", "Asa samirery",
                      "Mamadihady ny RF ho L amin'ny alalan'ny « no » sy ny tovana ny mpianatra.")),
    fiche_t6(ZT, "Filaza mandidy", "LFK 2g", "22→27", 12,
             [("Mamaky ampahan-dahatsoratra misy * !* : inona no sarn'ireo fehezanteny ireo ?",
               "Mamaly.", "Asan-tarika", "Solaitrabe", ""),
              ("Lazao ny lohateny + ny famaritana ao amin'ny FRP.", "Mihaino.", "Asa iombonana",
               "—", "FRP p.83."),
              ("Ovao ho mandidy : *Mividy fanafody ianao.* → …",
               "Mamaly : *Mividiana fanafody.*", "Asa mifampiha", "Tabilao", ""),
              ("Inona no very ? Karohy ny mpisolo tena.", "Mamaly.", "Asa samirery", "Kahie", ""),
              ("Tsilo: *vakina → vakio* ; *soa → soavà* ; *valio* ; *manaovana*.", "Mamaly.",
               "Asa iombonana", "Solaitrabe", ""),
              ("Mamorona roa ôhatra ho an'ny fianakaviana / ho an'ny kilasy.", "Mamorona.",
               "Asa samirery", "Kahie", "Tombana : LFK 2g")],
             LESONA_11, EXOS_11, FANITSIANA_11, LOHARANO_11,
             faritana=FAR, faritana_sous="LFK 2g · herinandro 22→27 · ora 20",
             tombana=("Hamarino: inona no mampiavaka ny filaza mandidy ?", "Mamaly.",
                      "Asa samirery", "Mamorona fehezanteny filaza mandidy ny mpianatra.")),
]

FICHE = {"FICHES": FICHES}
