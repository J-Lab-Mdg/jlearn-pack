# -*- coding: utf-8 -*-
"""Jeu d'essai authentique pré-chargé uniquement lorsque la base `malagasyword.db` est vide.

Permet de :
1. Tester immédiatement la recherche trilingue (MG / FR / EN), les homonymes, les radicaux et les proverbes
   dès le premier lancement (avant même d'avoir lancé la synchronisation complète).
2. Ne bloquer AUCUNE tâche d'aspiration : dès que l'utilisateur clique sur « Démarrer le Mode Complet »,
   toutes les vraies pages de motmalgache.org / malagasyword.org viennent enrichir et remplacer ce jeu initial.
"""

from __future__ import annotations

from .database import DictionaryDB


def seed_demo_if_empty(db: DictionaryDB) -> None:
    stats = db.get_stats()
    if stats["total_words"] > 0:
        return

    demo_pages = [
        {
            "slug": "fihavanana",
            "updated_at": "2026/10/18",
            "anagrams": [{"word": "fivanahana", "slug": "fivanahana"}],
            "entries": [
                {
                    "headword": "fihavanana",
                    "lang": "mg",
                    "badge": "",
                    "pos": "nom",
                    "roots": [{"word": "havana", "slug": "havana"}],
                    "components": [],
                    "defs_mg": [
                        {
                            "text": (
                                "Fiombonana an-tsaina sy fo ary fanahy izay tsy voatery ho eo amin' ny olona "
                                "manana rohim-pifandraisana araka ny ra ihany fa na dia eo amin' ny samy hafa "
                                "fianakaviana sy fihaviana aza. Fifankatiavana lalim-paka nifamatoran' ny "
                                "mpiaramonina teo anivon' ny ankohonana, fianakaviana, namana sy tapaka ary "
                                "fokonolona: Tandrovy mandrakariva ny fihavanana fa ny maty aza te ho maro ~ "
                                "Ny fitia mifamaly no mahatsara fihavanana [1.62#384]"
                            ),
                            "html": (
                                "Fiombonana an-tsaina sy fo ary fanahy izay tsy voatery ho eo amin' ny olona "
                                "manana rohim-pifandraisana araka ny ra ihany fa na dia eo amin' ny samy hafa "
                                "fianakaviana sy fihaviana aza. Fifankatiavana lalim-paka nifamatoran' ny "
                                "mpiaramonina teo anivon' ny ankohonana, fianakaviana, namana sy tapaka ary "
                                "fokonolona : <em>Tandrovy mandrakariva ny fihavanana fa ny maty aza te ho maro ~ "
                                "Ny fitia mifamaly no mahatsara fihavanana</em> "
                                '<span class="mw-cite">[1.62#384]</span>'
                            ),
                        }
                    ],
                    "defs_fr": [
                        {"text": "lien de parenté [1.54]", "html": 'lien de parenté <span class="mw-cite">[1.54]</span>'},
                        {
                            "text": "parenté de sang ; amitié, bonnes relations, solidarité fraternelle [1.8]",
                            "html": 'parenté de sang ; amitié, bonnes relations, solidarité fraternelle <span class="mw-cite">[1.8]</span>',
                        },
                    ],
                    "defs_en": [
                        {
                            "text": "blood relationship; friendship, comradeship, kinship solidarity [1.7]",
                            "html": 'blood relationship; friendship, comradeship, kinship solidarity <span class="mw-cite">[1.7]</span>',
                        }
                    ],
                    "examples": [
                        {
                            "text": "Vao mitsidi-doha ny fihavanana, dia tapahin-doha ny havana! [2.528]",
                            "html": 'Vao mitsidi-doha ny fihavanana, dia tapahin-doha ny havana! <span class="mw-cite">[2.528]</span>',
                        },
                        {
                            "text": "Ny fitandroana ny fihavanana no endri-panabeazana voalohany. [2.606]",
                            "html": 'Ny fitandroana ny fihavanana no endri-panabeazana voalohany. <span class="mw-cite">[2.606]</span>',
                        },
                        {
                            "text": "Fa izahay tsy hivezovezo fa ny fihavanana tokoa no nalehanay. [2.366]",
                            "html": 'Fa izahay tsy hivezovezo fa ny fihavanana tokoa no nalehanay. <span class="mw-cite">[2.366]</span>',
                        },
                    ],
                    "morphology": [],
                    "derivatives": [],
                    "synonyms": [],
                    "antonyms": [],
                    "analogs": [],
                    "other_spellings": [],
                    "scientific_name": [],
                    "vocabulary": [],
                    "combinations_text": "15 expressions, toponymes, phytonymes et autres avec le mot fihavanana",
                    "proverb_slug": "fihavanana",
                    "extra_rows": [],
                }
            ],
        },
        {
            "slug": "havana",
            "updated_at": "2026/10/18",
            "anagrams": [{"word": "vahana", "slug": "vahana"}],
            "entries": [
                {
                    "headword": "havana",
                    "lang": "mg",
                    "badge": "",
                    "pos": "nom",
                    "roots": [],
                    "components": [],
                    "defs_mg": [
                        {
                            "text": "Olona iray firazanana na iray fianakaviana amin' ny tena ; olona akaiky am-po sy mifankatia amin' ny tena.",
                            "html": "Olona iray firazanana na iray fianakaviana amin' ny tena ; olona akaiky am-po sy mifankatia amin' ny tena.",
                        }
                    ],
                    "defs_fr": [
                        {"text": "parent, proche, ami, allié", "html": "parent, proche, ami, allié"}
                    ],
                    "defs_en": [
                        {"text": "relative, kinsman, friend", "html": "relative, kinsman, friend"}
                    ],
                    "examples": [],
                    "morphology": [
                        {"label": "Simple", "text": "havana, havako, havanao, havany, havantsika", "html": "havana, havako, havanao, havany, havantsika"}
                    ],
                    "derivatives": [
                        {
                            "label": "Noms",
                            "items": [
                                {"word": "fihavanana", "slug": "fihavanana"},
                                {"word": "mpihavana", "slug": "mpihavana"},
                            ],
                        }
                    ],
                    "synonyms": [],
                    "antonyms": [],
                    "analogs": [],
                    "other_spellings": [],
                    "scientific_name": [],
                    "vocabulary": [],
                    "combinations_text": "",
                    "proverb_slug": "havana",
                    "extra_rows": [],
                }
            ],
        },
        {
            "slug": "trano",
            "updated_at": "2026/10/18",
            "anagrams": [
                {"word": "notra", "slug": "notra"},
                {"word": "ranto", "slug": "ranto"},
                {"word": "trona", "slug": "trona"},
            ],
            "entries": [
                {
                    "headword": "trano",
                    "lang": "mg",
                    "badge": "",
                    "pos": "nom",
                    "roots": [],
                    "components": [],
                    "defs_mg": [
                        {
                            "text": "Toerana amboarin' ny olombelona hataony fonenana, mipetraka amin' ny fototra, misy rindrina efatra sy varavarana, varavarankely, ary voarakotra tafo: Misy efitra enina ny tranonay",
                            "html": "Toerana amboarin' ny olombelona hataony fonenana, mipetraka amin' ny fototra, misy rindrina efatra sy varavarana, varavarankely, ary voarakotra tafo : <em>Misy efitra enina ny tranonay</em>",
                        },
                        {
                            "text": "Orin-javatra ataon' ny olombelona na ny biby ho fonenana: Tranom-borona, tranon-kala, tranon' omby, tranon-takatra, tranon-tsoavaly",
                            "html": "Orin-javatra ataon' ny olombelona na ny biby ho fonenana : <em>Tranom-borona, tranon-kala, tranon' omby, tranon-takatra, tranon-tsoavaly</em>",
                        },
                        {
                            "text": "Fitoerana fasiana zavatra: Tranon' afokasoka, tranom-tsabatra [1.1]",
                            "html": 'Fitoerana fasiana zavatra : <em>Tranon\' afokasoka, tranom-tsabatra</em> <span class="mw-cite">[1.1]</span>',
                        },
                    ],
                    "defs_fr": [
                        {"text": "maison ; étui, cadre [1.3, 1.8]", "html": 'maison ; étui, cadre <span class="mw-cite">[1.3, 1.8]</span>'},
                        {"text": "palais, habitation, tanière, nid, cocon ; fourreau, casiers, boîte, caisse", "html": "palais, habitation, tanière, nid, cocon ; fourreau, casiers, boîte, caisse"},
                        {"text": "[traño] [Sakalava-Mayotte] maison [1.405]", "html": '[traño] [Sakalava-Mayotte] maison <span class="mw-cite">[1.405]</span>'},
                    ],
                    "defs_en": [
                        {"text": "a house; a box or frame or housing for something [1.7]", "html": 'a house; a box or frame or housing for something <span class="mw-cite">[1.7]</span>'}
                    ],
                    "examples": [
                        {"text": "Efitra roa ny tranonay. [2.472]", "html": 'Efitra roa ny tranonay. <span class="mw-cite">[2.472]</span>'},
                        {"text": "Ato an-tranontsika ianao izao e. [2.470]", "html": 'Ato an-tranontsika ianao izao e. <span class="mw-cite">[2.470]</span>'},
                        {"text": "Nangoraka daholo ny tao an-trano. [2.324]", "html": 'Nangoraka daholo ny tao an-trano. <span class="mw-cite">[2.324]</span>'},
                    ],
                    "morphology": [
                        {"label": "Simple", "text": "trano, tranoko, tranonao, tranony, tranontsika, tranonay, tranonareo, tranon', tranon-, tranom-", "html": "trano, tranoko, tranonao, tranony, tranontsika, tranonay, tranonareo, tranon', tranon-, tranom-"}
                    ],
                    "derivatives": [
                        {"label": "Verbes actifs", "items": [{"word": "miantrano", "slug": "miantrano"}]},
                        {"label": "Verbes circonstanciels", "items": [{"word": "iantranoana", "slug": "iantranoana"}]},
                        {
                            "label": "Noms",
                            "items": [
                                {"word": "fampiantranoana", "slug": "fampiantranoana"},
                                {"word": "fiantranoana", "slug": "fiantranoana"},
                                {"word": "tranotrano", "slug": "tranotrano"},
                            ],
                        },
                    ],
                    "synonyms": [],
                    "antonyms": [],
                    "analogs": [
                        {"word": "akany", "slug": "akany"},
                        {"word": "bongo", "slug": "bongo"},
                        {"word": "zohy", "slug": "zohy"},
                    ],
                    "other_spellings": [],
                    "scientific_name": [],
                    "vocabulary": [],
                    "combinations_text": "130 expressions, toponymes, phytonymes et autres avec le mot trano",
                    "proverb_slug": "trano",
                    "extra_rows": [],
                }
            ],
        },
        {
            "slug": "ravinala",
            "updated_at": "2026/04/22",
            "anagrams": [{"word": "valanira", "slug": "valanira"}],
            "entries": [
                {
                    "headword": "ravinala",
                    "lang": "mg",
                    "badge": "",
                    "pos": "nom",
                    "roots": [],
                    "components": [
                        {"word": "ravina", "slug": "ravina"},
                        {"word": "ala", "slug": "ala"},
                    ],
                    "defs_mg": [
                        {
                            "text": "Karazan-kazo lehibe izay mivelatra lehibe tahaka ny fikopaka ny raviny. Misy ilana azy avokoa ny tenan' ny ravinala manontolo: ny hodiny (rapaka), ny tahondraviny (falafa), ny raviny (raty); ary raha tsatohana antsy eo am-pototry ny raviny, dia misy rano madio sady mamy azo sotroina miboiboika [1.1]",
                            "html": "Karazan-kazo lehibe izay mivelatra lehibe tahaka ny fikopaka ny raviny. Misy ilana azy avokoa ny tenan' ny ravinala manontolo : ny hodiny (rapaka), ny tahondraviny (falafa), ny raviny (raty) ; ary raha tsatohana antsy eo am-pototry ny raviny, dia misy rano madio sady mamy azo sotroina miboiboika <span class=\"mw-cite\">[1.1]</span>",
                        }
                    ],
                    "defs_fr": [
                        {"text": "l'arbre du voyageur, connu sous le nom de ravenala (Ravenala madagascariensis). Ses feuilles, pétioles (falafa) et écorces (rapaka) servent à la construction traditionnelle.", "html": "l'arbre du voyageur, connu sous le nom de ravenala (<em>Ravenala madagascariensis</em>). Ses feuilles, pétioles (<em>falafa</em>) et écorces (<em>rapaka</em>) servent à la construction traditionnelle."}
                    ],
                    "defs_en": [
                        {"text": "the traveller's tree (Ravenala madagascariensis). By piercing the base of the younger leaves, pure drinking water may be obtained.", "html": "the traveller's tree (<em>Ravenala madagascariensis</em>). By piercing the base of the younger leaves, pure drinking water may be obtained."}
                    ],
                    "examples": [
                        {"text": "Ela ny ela, tafavoaka ny ala, hono, ny ravinala. [2.117]", "html": 'Ela ny ela, tafavoaka ny ala, hono, ny ravinala. <span class="mw-cite">[2.117]</span>'},
                        {"text": "Namakivaky ala maitso sy menamena izahay, ary nahita ravinala be dia be. [2.332]", "html": 'Namakivaky ala maitso sy menamena izahay, ary nahita ravinala be dia be. <span class="mw-cite">[2.332]</span>'},
                    ],
                    "morphology": [],
                    "derivatives": [],
                    "synonyms": [
                        {"word": "akondrohazo", "slug": "akondrohazo"},
                        {"word": "fontsy", "slug": "fontsy"},
                        {"word": "ravimpotsy", "slug": "ravimpotsy"},
                    ],
                    "antonyms": [],
                    "analogs": [],
                    "other_spellings": [],
                    "scientific_name": ["Ravenala madagascariensis"],
                    "vocabulary": ["Botanique : palmier"],
                    "combinations_text": "",
                    "proverb_slug": "ravinala",
                    "extra_rows": [],
                }
            ],
        },
        {
            "slug": "vola",
            "updated_at": "2026/10/20",
            "anagrams": [
                {"word": "lavo", "slug": "lavo"},
                {"word": "lova", "slug": "lova"},
                {"word": "valo", "slug": "valo"},
            ],
            "entries": [
                {
                    "headword": "vola",
                    "lang": "mg",
                    "badge": "1/3",
                    "pos": "nom",
                    "roots": [],
                    "components": [],
                    "defs_mg": [
                        {
                            "text": "Taratasy na metaly misy sary ary voamarika, ataon' ny fanjakan' ny tany tsirairay avy, ka manan-kery amin' io tany io hahazoana mividy zavatra: Tsy azo vidim-bola aman-karena izahy [1.1]",
                            "html": "Taratasy na metaly misy sary ary voamarika, ataon' ny fanjakan' ny tany tsirairay avy, ka manan-kery amin' io tany io hahazoana mividy zavatra : <em>Tsy azo vidim-bola aman-karena izahy</em> <span class=\"mw-cite\">[1.1]</span>",
                        }
                    ],
                    "defs_fr": [{"text": "argent ; monnaie [1.8, 1.13]", "html": 'argent ; monnaie <span class="mw-cite">[1.8, 1.13]</span>'}],
                    "defs_en": [{"text": "money in general [1.7]", "html": 'money in general <span class="mw-cite">[1.7]</span>'}],
                    "examples": [],
                    "morphology": [
                        {"label": "Simple", "text": "vola, volako, volanao, volany, volantsika, volan', volam-", "html": "vola, volako, volanao, volany, volantsika, volan', volam-"},
                        {"label": "Préfixée", "text": "-bola, -bolako, -bolanao, -bolany", "html": "-bola, -bolako, -bolanao, -bolany"},
                    ],
                    "derivatives": [{"label": "Verbes passifs", "items": [{"word": "volaina", "slug": "volaina"}]}],
                    "synonyms": [{"word": "drala", "slug": "drala"}],
                    "antonyms": [],
                    "analogs": [],
                    "other_spellings": [],
                    "scientific_name": [],
                    "vocabulary": ["Économie : finances, gestion"],
                    "combinations_text": "42 expressions avec le mot vola",
                    "proverb_slug": "vola",
                    "extra_rows": [],
                },
                {
                    "headword": "vola",
                    "lang": "mg",
                    "badge": "2/3",
                    "pos": "nom",
                    "roots": [],
                    "components": [],
                    "defs_mg": [{"text": "Metaly sarobidy, izay fotsy mamirapiratra, anaovana vola sy firavaka [1.1]", "html": 'Metaly sarobidy, izay fotsy mamirapiratra, anaovana vola sy firavaka <span class="mw-cite">[1.1]</span>'}],
                    "defs_fr": [{"text": "argent (métal, Ag)", "html": "argent (métal, Ag)"}],
                    "defs_en": [{"text": "silver [1.7]", "html": 'silver <span class="mw-cite">[1.7]</span>'}],
                    "examples": [],
                    "morphology": [],
                    "derivatives": [{"label": "Noms", "items": [{"word": "volavola", "slug": "volavola"}]}],
                    "synonyms": [{"word": "volafotsy", "slug": "volafotsy"}],
                    "antonyms": [],
                    "analogs": [],
                    "other_spellings": [],
                    "scientific_name": [],
                    "vocabulary": ["Chimie"],
                    "combinations_text": "",
                    "proverb_slug": "vola",
                    "extra_rows": [],
                },
                {
                    "headword": "vola",
                    "lang": "mg",
                    "badge": "3/3",
                    "pos": "nom",
                    "roots": [],
                    "components": [],
                    "defs_mg": [{"text": "[Antesaka] volana mpanazava alina [1.78]", "html": '[Antesaka] volana mpanazava alina <span class="mw-cite">[1.78]</span>'}],
                    "defs_fr": [{"text": "[Antesaka] lune", "html": "[Antesaka] lune"}],
                    "defs_en": [],
                    "examples": [],
                    "morphology": [],
                    "derivatives": [],
                    "synonyms": [],
                    "antonyms": [],
                    "analogs": [],
                    "other_spellings": [],
                    "scientific_name": [],
                    "vocabulary": [],
                    "combinations_text": "",
                    "proverb_slug": "",
                    "extra_rows": [],
                },
            ],
        },
        {
            "slug": "afo",
            "updated_at": "2026/10/18",
            "anagrams": [
                {"word": "fao", "slug": "fao"},
                {"word": "ofa", "slug": "ofa"},
            ],
            "entries": [
                {
                    "headword": "afo",
                    "lang": "mg",
                    "badge": "",
                    "pos": "nom",
                    "roots": [],
                    "components": [],
                    "defs_mg": [
                        {"text": "[Betsimisaraka] jiro, vain' afo [1.78]", "html": "[Betsimisaraka] jiro, vain' afo <span class=\"mw-cite\">[1.78]</span>"},
                        {
                            "text": "Fivoahan-kafanana sy hazavana miaraka, atera-javatra anankiroa: Latsaka ny hariva ka efa mampirehitra afo ny olona [1.1]",
                            "html": "Fivoahan-kafanana sy hazavana miaraka, atera-javatra anankiroa : <em>Latsaka ny hariva ka efa mampirehitra afo ny olona</em> <span class=\"mw-cite\">[1.1]</span>",
                        },
                    ],
                    "defs_fr": [
                        {"text": "feu ; fig. calamité [1.3, 1.8]", "html": 'feu ; fig. calamité <span class="mw-cite">[1.3, 1.8]</span>'},
                        {"text": "[Betsimisaraka] lampe ; braise [1.78]", "html": '[Betsimisaraka] lampe ; braise <span class="mw-cite">[1.78]</span>'},
                    ],
                    "defs_en": [
                        {"text": "fire; fig. calamity [1.2, 1.7]", "html": 'fire; fig. calamity <span class="mw-cite">[1.2, 1.7]</span>'}
                    ],
                    "examples": [
                        {"text": "Maty ny afo tao am-patana. [2.470]", "html": 'Maty ny afo tao am-patana. <span class="mw-cite">[2.470]</span>'},
                        {"text": "Nampirehitra afo ry zareo, ary tamin' izany no nisakafoany sy namindroany. [2.472]", "html": "Nampirehitra afo ry zareo, ary tamin' izany no nisakafoany sy namindroany. <span class=\"mw-cite\">[2.472]</span>"},
                    ],
                    "morphology": [{"label": "Simple", "text": "afo, afoko, afonao, afony, afontsika, afon', afom-", "html": "afo, afoko, afonao, afony, afontsika, afon', afom-"}],
                    "derivatives": [{"label": "Noms", "items": [{"word": "kiafoafo", "slug": "kiafoafo"}]}],
                    "synonyms": [],
                    "antonyms": [],
                    "analogs": [],
                    "other_spellings": [],
                    "scientific_name": [],
                    "vocabulary": [],
                    "combinations_text": "89 expressions avec le mot afo",
                    "proverb_slug": "afo",
                    "extra_rows": [],
                }
            ],
        },
        {
            "slug": "manao",
            "updated_at": "2026/10/21",
            "anagrams": [{"word": "manoa", "slug": "manoa"}, {"word": "moana", "slug": "moana"}],
            "entries": [
                {
                    "headword": "manao",
                    "lang": "mg",
                    "badge": "",
                    "pos": "verbe actif",
                    "roots": [{"word": "tao", "slug": "tao"}],
                    "components": [],
                    "defs_mg": [
                        {"text": "Mamorona zavatra vaovao ; manamboatra, manangana, mandrafitra : Nanao trano any ambanivohitra izahay", "html": "Mamorona zavatra vaovao ; manamboatra, manangana, mandrafitra : <em>Nanao trano any ambanivohitra izahay</em>"},
                        {"text": "Mikarakara sy mahavita, manatanteraka asa iray : Aoka samy hanao ny adidiny", "html": "Mikarakara sy mahavita, manatanteraka asa iray : <em>Aoka samy hanao ny adidiny</em>"},
                        {"text": "Miteny, milaza : Dia hoy Andrianampoinimerina nanao hoe : « Ny ranomasina no valampariako »", "html": "Miteny, milaza : <em>Dia hoy Andrianampoinimerina nanao hoe : « Ny ranomasina no valampariako »</em>"},
                    ],
                    "defs_fr": [{"text": "faire, agir ; fabriquer, construire ; dire ; penser [1.8]", "html": 'faire, agir ; fabriquer, construire ; dire ; penser <span class="mw-cite">[1.8]</span>'}],
                    "defs_en": [{"text": "to do, to act; to make; to think [1.7]", "html": 'to do, to act; to make; to think <span class="mw-cite">[1.7]</span>'}],
                    "examples": [],
                    "morphology": [
                        {"label": "Présent", "text": "manao", "html": "manao"},
                        {"label": "Passé", "text": "nanao", "html": "nanao"},
                        {"label": "Futur", "text": "hanao", "html": "hanao"},
                        {"label": "Impératif", "text": "manaova", "html": "manaova"},
                    ],
                    "derivatives": [],
                    "synonyms": [],
                    "antonyms": [],
                    "analogs": [],
                    "other_spellings": [],
                    "scientific_name": [],
                    "vocabulary": [],
                    "combinations_text": "441 expressions avec le mot manao",
                    "proverb_slug": "manao",
                    "extra_rows": [],
                }
            ],
        },
    ]

    for page in demo_pages:
        db.save_teny2_parsed(page, is_demo=True)

    demo_proverbs = {
        "slug": "fihavanana",
        "proverbs": [
            {
                "hash": "demo_ohab_1",
                "text_mg": "Ady lova, ady fananana ; fa tsarovy ny fihavanana. [2.415 #3166]",
                "html_mg": 'Ady lova, ady fananana ; fa tsarovy ny <a href="#/mot/fihavanana" data-slug="fihavanana" class="mw-link"><strong>fihavanana</strong></a>. <span class="mw-cite">[2.415 #3166]</span>',
                "variants": [
                    {
                        "text": "Ady lova, ady fananana ; fa tsarovy ny fihavanana. [2.415 #3166]",
                        "html": 'Ady lova, ady fananana ; fa tsarovy ny <a href="#/mot/fihavanana" data-slug="fihavanana" class="mw-link"><strong>fihavanana</strong></a>. <span class="mw-cite">[2.415 #3166]</span>',
                    },
                    {
                        "text": "Ady lova, ady fananana, fa tsimbino ny fihavanana. [2.558]",
                        "html": 'Ady lova, ady fananana, fa tsimbino ny <strong>fihavanana</strong>. <span class="mw-cite">[2.558]</span>',
                    },
                ],
                "interp_mg": [],
                "trans_fr": [
                    {
                        "text": "Dans les discussions à propos des héritages, dans les disputes d'intérêts, souvenez-vous toujours de l'amitié et du lien qui doit unir la parenté.",
                        "html": "Dans les discussions à propos des héritages, dans les disputes d'intérêts, souvenez-vous toujours de l'amitié et du lien qui doit unir la parenté.",
                    }
                ],
                "interp_fr": [
                    {
                        "text": "Les discussions matérielles ne doivent jamais briser l'union de la famille et des proches.",
                        "html": "Les discussions matérielles ne doivent jamais briser l'union de la famille et des proches.",
                    }
                ],
                "trans_en": [],
                "interp_en": [],
                "notes": [],
                "word_slugs": ["fihavanana", "havana"],
            },
            {
                "hash": "demo_ohab_2",
                "text_mg": "Aleo very tsikalakalam-bola toy izay very tsikalakalam-pihavanana. [2.415 #4103]",
                "html_mg": 'Aleo very tsikalakalam-<a href="#/mot/vola" data-slug="vola" class="mw-link">bola</a> toy izay very tsikalakalam-<strong>pihavanana</strong>. <span class="mw-cite">[2.415 #4103]</span>',
                "variants": [
                    {
                        "text": "Aleo very tsikalakalam-bola toy izay very tsikalakalam-pihavanana. [2.415 #4103]",
                        "html": 'Aleo very tsikalakalam-<a href="#/mot/vola" data-slug="vola" class="mw-link">bola</a> toy izay very tsikalakalam-<strong>pihavanana</strong>. <span class="mw-cite">[2.415 #4103]</span>',
                    }
                ],
                "interp_mg": [
                    {
                        "text": "Aleo very vola toy izay tapaka fihavanana ; nentin' ny Ntaolo hilazana fa ny fihavanana dia zavatra sarobidy miohatra noho ny vola. [1.1]",
                        "html": "Aleo very vola toy izay tapaka fihavanana ; nentin' ny Ntaolo hilazana fa ny fihavanana dia zavatra sarobidy miohatra noho ny vola.",
                    }
                ],
                "trans_fr": [
                    {
                        "text": "Il vaut mieux perdre un peu d'argent que de perdre les liens qui maintiennent l'union et l'amitié.",
                        "html": "Il vaut mieux perdre un peu d'argent que de perdre les liens qui maintiennent l'union et l'amitié.",
                    }
                ],
                "interp_fr": [],
                "trans_en": [
                    {
                        "text": "Better to lose a bit of money than to lose the threads of kinship and friendship.",
                        "html": "Better to lose a bit of money than to lose the threads of kinship and friendship.",
                    }
                ],
                "interp_en": [],
                "notes": [],
                "word_slugs": ["fihavanana", "vola"],
            },
            {
                "hash": "demo_ohab_3",
                "text_mg": "Aza atao fihavanam-bato : raha tapaka, tsy azo atohy ; fa ataovy fihavanan-dandy : raha madilana aza, tohizana. [2.653 #342]",
                "html_mg": "Aza atao <strong>fihavanam</strong>-bato : raha tapaka, tsy azo atohy ; fa ataovy <strong>fihavanan-dandy</strong> : raha madilana aza, tohizana.",
                "variants": [
                    {
                        "text": "Aza atao fihavanam-bato : raha tapaka, tsy azo atohy ; fa ataovy fihavanan-dandy : raha madilana aza, tohizana. [2.653 #342]",
                        "html": "Aza atao <strong>fihavanam</strong>-bato : raha tapaka, tsy azo atohy ; fa ataovy <strong>fihavanan-dandy</strong> : raha madilana aza, tohizana.",
                    }
                ],
                "interp_mg": [],
                "trans_fr": [
                    {
                        "text": "Ne faites pas une amitié de pierre (qui une fois brisée ne peut se recoller), mais une amitié de soie : même amincie, on peut toujours la renouer.",
                        "html": "Ne faites pas une amitié de pierre (qui une fois brisée ne peut se recoller), mais une amitié de soie : même amincie, on peut toujours la renouer.",
                    }
                ],
                "interp_fr": [],
                "trans_en": [],
                "interp_en": [],
                "notes": [],
                "word_slugs": ["fihavanana"],
            },
            {
                "hash": "demo_ohab_4",
                "text_mg": "Trano atsimo sy avaratra : izay tsy mahalen-kialofana.",
                "html_mg": '<a href="#/mot/trano" data-slug="trano" class="mw-link"><strong>Trano</strong></a> atsimo sy avaratra : izay tsy mahalen-kialofana.',
                "variants": [
                    {
                        "text": "Trano atsimo sy avaratra : izay tsy mahalen-kialofana.",
                        "html": '<a href="#/mot/trano" data-slug="trano" class="mw-link"><strong>Trano</strong></a> atsimo sy avaratra : izay tsy mahalen-kialofana.',
                    }
                ],
                "interp_mg": [
                    {
                        "text": "Fifampitsimbinana sy fifanampian' ny mpiara-monina amin' ny sarotra.",
                        "html": "Fifampitsimbinana sy fifanampian' ny mpiara-monina amin' ny sarotra.",
                    }
                ],
                "trans_fr": [
                    {
                        "text": "Maisons du sud et du nord : on s'abrite sous celle dont le toit ne fuit pas (entraide entre voisins).",
                        "html": "Maisons du sud et du nord : on s'abrite sous celle dont le toit ne fuit pas (entraide entre voisins).",
                    }
                ],
                "interp_fr": [],
                "trans_en": [],
                "interp_en": [],
                "notes": [],
                "word_slugs": ["trano"],
            },
        ],
    }
    db.save_ohabolana_parsed(demo_proverbs, is_demo=True)
