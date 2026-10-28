# -*- coding: utf-8 -*-
"""2e seance de `Tsipelina` : « NOHO NY SA NONY SA NO HO ».

Lecon + exercices + corrige, au gabarit de l'exemple du proprietaire
(Nos manuels/EXEMPLE DE MALAGASY.docx). Le materiel de langue vient de quatre endroits,
tous cites dans la fiche :
 - le PE T5, p.18 : la ligne de votoatiny « Fanoratana ny : samihafa/samy hafa,
   noho ny/nony/no ho » ; p.19 pour les marika « no » et « ho » ;
 - le dictionnaire en ligne (Rakibolana malagasy, via malagasyword.org / rakibolana.org) :
   citation courte avec URL, pas de copie de page (contenu non libre) ;
 - les phrases fournies et rectifiees par le proprietaire, recopiees mot pour mot dans
   refs/rakibolana_noho.txt ;
 - les ohabolana deja releves dans le depot.

    ./run.sh src/build_fiche.py data_tsipelina_s2 Manuel_Malagasy_T5_TSIPELINA-S2_V1
"""
from fiche_pe import TSIPELINA, fiche

FICHE = fiche(
    TSIPELINA,
    "NOHO NY SA NONY SA NO HO",
    [
        # ------------------------------------------------------------- leson
        ("p", "Fanoratana ny : samihafa/samy hafa, noho ny/nony/no ho"),
        ("note", "PE T5, Fiasan'ny teny · Tsipelina, p.18"),

        ("h2", "1. Noho ny (Noho)"),
        ("p", "Ampiasaina mba hanehoana ny antony mahatonga ny zavatra iray. Manaraka an'io "
              "teny io foana ny anarana na mpisolo anarana."),
        ("p", "Enti-milaza antony anaovan-javatra, satria."),
        ("note", "Rakibolana Malagasy, « noho » — https://www.rakibolana.org/rakibolana/teny/noho"),
        ("bul", [
            "Tsy nivoaka izy noho ny ranonorana.",
            "Tafita izy noho ny fiezahany.",
            "Reraka izy noho ny ratra nahazo azy.",
            "Noho ianao mividy boky betsaka, dia ahenako ny vidin'ny tsirairay.",
        ]),
        ("p", "Teny entina mampitaha zavatra roa."),
        ("bul", [
            "Ny fahasalamana dia ambony lavitra noho ny fananan-karena.",
            "Ny teny mahery lava noho ny tanana.",
        ]),
        ("note", "Phrases 1-2 : le maitre. Phrases 3-4 : Rakibolana (citees, non copiees). "
                 "Phrases 5-6 : la comparaison, ohabolana.org et JICA."),

        ("h2", "2. Nony"),
        ("p", "Rehefa (raha milaza ny lasa ny matoanteny manaraka azy)."),
        ("p", "Isaky ny (raha milaza ny ankehitriny ny matoanteny manaraka azy)."),
        ("p", "Tamin' ny (raha milaza ny ho avy ny matoanteny manaraka azy ao anatin' ny tantara)."),
        ("note", "Rakibolana malagasy, « nony » (conjonction) — https://malagasyword.org/bins/teny2/nony"),
        ("bul", [
            "Nony niamboho Ranavalona reniny, dia nitsoka ny rivo-pahafahana.",
            "Nony midona ny orana, velon-tsento i Sahondra mahatsiaro andreniny.",
            "Nony handeha indrindra izahay no avy ny orana.",
            "Nony lasa izy, dia nody izahay.",
        ]),
        ("p", "Analog : fony, raha, rehefa."),

        ("h2", "3. No ho"),
        ("p", "Tsy teny tokana mitambatra ity fa « no » sy « ho » miaraka."),
        ("p", "« no » : Ny - L “no” -EM (mivadi-drafitra). « ho » : mpanamarika ny “ ho avy ”."),
        ("note", "PE T5, Fitsipiky ny teny, p.19 : « Rafitry ny fehezanteny manana EM voasoritra — "
                 "Mivadi-drafitra : Ny - L “no” -EM » ; « Matoanteny misy ny ho-/ho mpanamarika "
                 "ny “ ho avy ” »."),
        ("p", "Raha matoantenin' ny iharana misy tovana, mitovona ny ho."),
        ("ohatra", [
            "Ho tonga rahampitso izy. = Rahampitso izy no ho tonga.",
            "Ho vita ity rahariva. = Rahariva no ho vita ity.",
            "Hovitaiko ity rahariva. = Rahariva ity no hovitaiko.",
        ]),
        ("note", "Ohatra nan'ny mpampianatra, recopies mot pour mot. Le « no » du milieu se retrouve "
                 "dans « Nony handeha indrindra izahay no avy ny orana »."),

        ("h2", "Raha hamintina"),
        ("tabl",
         [["Teny", "Fampiasana azy"],
          [["noho ny", "Satria misy… (antony) ; ampiasaina koa amin'ny fampitahana zavatra roa"],
           ["nony", "Rehefa… (fotoana)"],
           ["no ho", "« no » (mivadi-drafitra) + « ho » (ho avy) ; mitambatra rehefa misy tovana "
            "ny matoanteny"]]]),

        ("ohatra", [
            "Tsy nivoaka izy noho ny ranonorana.",
            "Nony lasa izy, dia nody izahay.",
            "Rahampitso izy no ho tonga.",
        ]),
    ],
    # ---------------------------------------------------------- fanazaran-tena
    [
        {"consigne": "1. Ampifandraiso amin'ny alalan'ny tsilo",
         "tsilo": (["Satria misy… (antony)",
                    "Rehefa… (fotoana)",
                    "« no » (mivadi-drafitra) sy « ho » (ho avy)"],
                   ["nony", "no ho", "noho ny"])},
        {"consigne": "2. Fenoy noho ny, nony na no ho ny banga.",
         "banga": [
             "Tsy nivoaka izy ………… ny ranonorana.",
             "Tafita izy ………… ny fiezahany.",
             "………… ianao mividy boky betsaka, dia ahenako ny vidin'ny tsirairay.",
             "………… niamboho Ranavalona reniny, dia nitsoka ny rivo-pahafahana.",
             "………… midona ny orana, velon-tsento i Sahondra mahatsiaro andreniny.",
             "Rahampitso izy ………… tonga.",
             "Rahariva ………… ho vita ity.",
             "Hovitaiko ity rahariva = Rahariva ity ………… hovitaiko.",
         ]},
        {"consigne": "3. Mamorona fehezanteny roa ahitana ny hoe « noho ny » sy ny hoe « nony ». "
                      "Ampiasao ireto teny ireto: ranonorana, fiezahany, orana, fotoana."},
        {"consigne": "4. Hanova ny fehezanteny ho mivadi-drafitra : « Ho tonga rahampitso izy. »"},
    ],
    # ------------------------------------------------------------- fanitsiana
    [
        {"tsilo": [("Satria misy… (antony)", "noho ny"),
                   ("Rehefa… (fotoana)", "nony"),
                   ("« no » (mivadi-drafitra) sy « ho » (ho avy)", "no ho")]},
        {"banga": ["noho ny", "noho ny", "Noho", "Nony", "Nony", "no ho", "no", "no"]},
        {"ohatra": ["Tsy nivoaka izy noho ny ranonorana.",
                     "Nony lasa izy, dia nody izahay."]},
        {"ohatra": ["Rahampitso izy no ho tonga.",
                     "Rahariva ity no hovitaiko."]},
    ],
    "Noho ny, nony, no ho",
    seho="2",
    isan="2",
    loharano=[
        "PE T5, taranja Malagasy, p.18 : Fiasan'ny teny · Tsipelina — « Fanoratana ny : samihafa/"
        "samy hafa, noho ny/nony/no ho » ; sahanasa : « handinika fehezanteny na ampahan-dahatsoratra », "
        "« hanavaka ny teny mitovitovy fanonona na fanoratra sy ny fampiasana azy ao anaty fehezanteny », "
        "« hampiasa ireo teny ao anaty fehezanteny marina ».",
        "PE T5, p.19 (Fitsipiky ny teny) : « Rafitry ny fehezanteny manana EM voasoritra — Mivadi-"
        "drafitra : Ny - L “no” -EM » ; « Matoanteny misy ny ho-/ho mpanamarika ny “ ho avy ” ».",
        "Rakibolana Malagasy, « noho » — https://www.rakibolana.org/rakibolana/teny/noho "
        "(© Eugene Heriniaina, serasera.org) ; « nony » — https://malagasyword.org/bins/teny2/nony. "
        "Contenu non libre : citations courtes avec URL, pas de copie des pages.",
        "« Ny fahasalamana dia ambony lavitra noho ny fananan-karena. » — ohabolana, ohabolana.org ; "
        "« Ny teny mahery lava noho ny tanana. » — JICA, lahatsoratra ho an'ny vakiteny.",
        "Rectification du proprietaire sur « no ho » et phrases d'exemple fournies par lui, recopiees "
        "dans refs/rakibolana_noho.txt (https://malagasyword.org/bins/teny2).",
    ],
)
