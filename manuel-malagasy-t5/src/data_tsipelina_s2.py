# -*- coding: utf-8 -*-
"""2e seance de `Tsipelina` : « NOHO NY SA NONY SA NO HO ».

Lecon + exercices + corrige, au gabarit de l'exemple du proprietaire. Le materiel de
langue vient de trois endroits, tous cites dans la fiche :
 - le PE T5, p.18 : la ligne de votoatiny « Fanoratana ny : samihafa/samy hafa,
   noho ny/nony/no ho » ;
 - le dictionnaire en ligne Rakibolana (citation courte, avec URL — refs/rakibolana_noho.txt) ;
 - les phrases et les definitions que le proprietaire a fournies (elles sont gardees mot
   pour mot, dans le meme fichier refs).
Ohatra voasoratra ao anaty boky taranjana : le maitre en ajoute d'autres, la fiche ne
sort rien qui n'ait pas ete lu.

    ./run.sh src/build_fiche.py data_tsipelina_s2 Manuel_Malagasy_T5_TSIPELINA-S2_V1
"""
from fiche_pe import TSIPELINA, fiche

FICHE = fiche(
    TSIPELINA,
    "NOHO NY SA NONY SA NO HO",
    [
        # ---------------------------------------------------------- la lecon
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
        ("bul", [
            "Ny fahasalamana dia ambony lavitra noho ny fananan-karena.",
            "Ny teny mahery lava noho ny tanana.",
        ]),
        ("note", "Phrases 1-2 : la cause (le maitre). Phrases 3-4 : cause et consecutif, cites du "
                 "dictionnaire Rakibolana — non copies, le site n'est pas sous licence libre. "
                 "Phrases 5-6 : la comparaison (ohabolana, JICA)."),

        ("h2", "2. Nony"),
        ("p", "Teny fampitohizana ampiasaina hanehoana fotoana. Matetika izy io no arahina "
              "matoanteny ary ampiasaina rehefa mitantara zavatra efa lasa."),
        ("bul", [
            "Nony tonga tany an-trano izy, dia natory avy hatrany.",
            "Nony nahita ny reniny ny zaza, dia nitsiky.",
        ]),

        ("h2", "3. No ho"),
        ("p", "Tsy teny tokana mitambatra ity fa teny roa miaraka : ny mpanoritra/mpisolo « no » "
              "sy ny mpampitaha « ho ». Ampiasaina amin'ny fampitahana zavatra roa izy io, "
              "indrindra rehefa misy finiavana na safidy atao."),
        ("bul", [
            "Ny hianatra no ho ny hilalao no tsara.",
            "Andriamanitra no ho ny olombelona no tokony hoterena.",
        ]),

        ("h2", "Raha hamintina"),
        ("tabl",
         [["Teny", "Fampiasana azy"],
          [["noho ny", "Satria misy… (antony)"],
           ["nony", "Rehefa… (fotoana)"],
           ["no ho", "Toy izay… (fampitahana / safidy)"]]]),

        ("ohatra", [
            "Tsy nivoaka izy noho ny ranonorana.",
            "Nony tonga tany an-trano izy, dia natory avy hatrany.",
            "Ny hianatra no ho ny hilalao no tsara.",
        ]),
    ],
    # --------------------------------------------------------- les exercices
    [
        {"consigne": "1. Ampifandraiso amin'ny alalan'ny tsilo",
         "tsilo": (["Satria misy… (antony)", "Rehefa… (fotoana)", "Toy izay… (fampitahana / safidy)"],
                   ["no ho", "noho ny", "nony"])},
        {"consigne": "2. Fenoy noho ny, nony na no ho ny banga.",
         "banga": [
             "Tsy nivoaka izy ………… ny ranonorana.",
             "Tafita izy ………… ny fiezahany.",
             "………… ianao mividy boky betsaka, dia ahenako ny vidin'ny tsirairay.",
             "………… tonga tany an-trano izy, dia natory avy hatrany.",
             "………… nahita ny reniny ny zaza, dia nitsiky.",
             "Ny hianatra ………… ny hilalao no tsara.",
         ]},
        {"consigne": "3. Mamorona fehezanteny roa ahitana ny hoe « noho ny » sy ny hoe « nony ». "
                      "Ampiasao ireto teny ireto: ranonorana, fiezahany, an-trano, zaza."},
    ],
    # ----------------------------------------------------------- le corrige
    [
        {"tsilo": [("Satria misy… (antony)", "noho ny"),
                   ("Rehefa… (fotoana)", "nony"),
                   ("Toy izay… (fampitahana / safidy)", "no ho")]},
        {"banga": ["noho ny", "noho ny", "Noho", "Nony", "Nony", "no ho"]},
        {"ohatra": ["Tsy nivoaka izy noho ny ranonorana.",
                    "Nony nahita ny reniny ny zaza, dia nitsiky."]},
    ],
    "Noho ny, nony, no ho",
    seho="2",
    isan="2",
    loharano=[
        "PE T5, taranja Malagasy, p.18 : Fiasan'ny teny · Tsipelina — « Fanoratana ny : "
        "samihafa/samy hafa, noho ny/nony/no ho » ; sahanasa : « handinika fehezanteny na "
        "ampahan-dahatsoratra », « hanavaka ny teny mitovitovy fanonona na fanoratra sy ny "
        "fampiasana azy ao anaty fehezanteny », « hampiasa ireo teny ao anaty fehezanteny marina ».",
        "Rakibolana Malagasy, article « noho » — https://www.rakibolana.org/rakibolana/teny/noho "
        "(© Eugene Heriniaina, serasera.org). Le dictionnaire n'est pas sous licence libre : ses "
        "exemples sont cites, non colles.",
        "https://www.rakibolana.org/rakibolana/teny/nony · https://www.rakibolana.org/rakibolana/teny/no · "
        "https://tenymalagasy.org/bins/teny2/noho",
        "« Ny fahasalamana dia ambony lavitra noho ny fananan-karena. » — ohabolana, ohabolana.org ; "
        "« Ny teny mahery lava noho ny tanana. » — JICA, lahatsoratra ho an'ny vakiteny.",
        "Fanazavana sy ohatra nan'ny mpampianatra, recopies mot pour mot dans "
        "refs/rakibolana_noho.txt.",
    ],
)
