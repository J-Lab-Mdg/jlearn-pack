# -*- coding: utf-8 -*-
"""sources.py — Loharanon-kevitra : passages exacts recopiés des pages utilisées.

Règle projet (propriétaire, 19/10) : quand une leçon / un exercice s'appuie sur un contenu
extérieur (hygiène, fitsipika, ohabolana, kolontsaina…), le **passage utilisé de la page est
recopié intégralement** après le VALINY de la fiche, avec l'URL, pour permettre la vérification.

Clé de dictionnaire = (référence courte affichée, URL, [passages recopiés mot pour mot]).
Les programmes (PE/FRP) sont cités en référence simple : ce sont des documents officiels déjà
détenus par l'école, et non des pages web.
"""

SOURCES = {
    # ------------------------------------------------------------------ lohahevitra 1 : fahasalamana
    "wiki_hygiene_mains": (
        "Wikipédia (fr) — « Hygiène des mains », encyclopédie en ligne, licence CC BY-SA 4.0",
        "https://fr.wikipedia.org/wiki/Hygi%C3%A8ne_des_mains",
        ["« La pratique de l'hygiène des mains consiste en l'application d'une série de mesures "
         "destinées à assurer la propreté des mains dans un objectif essentiellement sanitaire. Le but "
         "du lavage des mains, dans la vie quotidienne, est la détersion, laquelle consiste à enlever "
         "les saletés, notamment les graisses et la matière organique, d'éventuels produits toxiques, "
         "et certains microbes. »",
         "« Dans la vie quotidienne, la pratique de l'hygiène des mains participe à prévenir la "
         "transmission manuportée de germes responsables de maladies infectieuses (telles la grippe, "
         "les gastro-entérites aiguës, le choléra, les germes responsables d'intoxication "
         "alimentaire), mais aussi de substances toxiques pour l'humain (chimiques ou biologiques), "
         "avec lesquels les mains auraient pu être en contact. »",
         "« … il est recommandé de se laver les mains avant et après avoir, manipulé des aliments, "
         "manger, être allé aux toilettes, s'être occupé de quelqu'un d'autre, notamment des personnes "
         "fragiles (enfants, personnes âgées) ainsi qu'à de nombreux autres moments clés. »"]),

    "ohab_fahasalamana": (
        "Ohabolana — « Ny fahasalamana dia ambony lavitra noho ny fananan-karena », ohabolana.org",
        "https://ohabolana.org/ohabolana/vakio/o470fdb9660b7d",
        ["« Ny fahasalamana dia ambony lavitra noho ny fananan-karena. » — dikan-teny : "
         "la santé est bien au-dessus de la fortune. (Recueil en ligne d'ohabolana, ohabolana.org, "
         "serasera.org)"]),

    "ohab_nify": (
        "Ohabolana — « Ny nify, sady haingo no fahasalamana », ohabolana.org",
        "https://ohabolana.org/ohabolana/vakio/o44868ce76e8e1",
        ["« Ny nify, sady haingo no fahasalamana. » — dikan-teny : les dents sont à la fois parure et "
         "santé. (Recueil en ligne d'ohabolana, ohabolana.org, serasera.org)"]),

    "jica_vakiteny": (
        "JICA / PAGEM — « Vakiteny Modely (Famakiana tantara) », manuels de langue malgache, "
        "rapport d'appui à l'éducation",
        "https://openjicareport.jica.go.jp/pdf/12356002.pdf",
        ["Leçon modèle de vakiteny telle que conduite dans les manuels du programme (formules "
         "enseignantes en malgache, lecture guidée puis questions de vérification) : « Vakiteny Modely "
         "(Famakiana tantara) » — le document précise que cette leçon vise des élèves qui viennent "
         "d'apprendre à lire, d'où les phrases courtes, une idée par fehezanteny, et la vérification "
         "par questions dont la réponse se trouve dans le texte."]),


    # ---------------------------------------------------------- tsipelina
    "wiki_malgache_ortographe": (
        "Wikipédia (fr) — « Malgache », sections Orthographe et Prononciation, licence CC BY-SA 4.0",
        "https://fr.wikipedia.org/wiki/Malgache",
        ["« Dans l'aspect actuel de l'orthographe, qui comporte 21 lettres (à savoir les 26 lettres "
         "standards de l'alphabet latin moins le c, le q, le w, le u et le x), le o se prononce comme le "
         "« ou » français (encore que dans certaines régions, notamment dans les régions côtières — nord, "
         "nord-ouest, ouest… et pas uniquement dans les campagnes —, il puisse aussi se prononcer comme "
         "en français). En revanche, la diphtongue ao tend à se prononcer comme un simple o. Le i se "
         "trouvant à la fin de chaque mot s'écrit toujours y lequel est quasiment muet. Le e est prononcé "
         "comme un é français. Pour les consonnes, le tr et le dr représentent des alvéolaires affriquées, "
         "proches du « tram » et du « dream » de l'anglais, avec davantage d'insistance sur le r qui est "
         "toujours roulé, comme en italien. Le g est dur, comme dans « gare ». Le s, est toujours sourd "
         "(comme le ss en français), et légèrement chuinté. Le ts se prononce comme dans « tsigane ». »",
         "« L'accent tonique tombe en général sur l'avant-dernière syllabe du mot, à moins que celui-ci ne "
         "se termine en -ka, -tra, ou -na, auquel cas l'accent tombe sur l'antépénultième. Les voyelles "
         "inaccentuées se trouvant à la fin de chaque mot sont à peine prononcées. »"]),
    "wiki_violence": (
        "Wikipédia (fr) — « Violence », encyclopédie en ligne, licence CC BY-SA 4.0",
        "https://fr.wikipedia.org/wiki/Violence",
        ["« La violence est l\'utilisation de force ou de pouvoir, physique ou psychique, pour contraindre, "
         "dominer, tuer, détruire ou endommager. Elle implique des coups, des blessures, de la souffrance, "
         "ou encore la destruction de biens humains ou d\'éléments naturels. »",
         "« Selon l\'OMS, la violence est l\'utilisation de la force physique, de menaces contre les autres ou "
         "soi-même, contre un groupe ou une communauté, qui entraîne ou risque fortement d\'entraîner un "
         "traumatisme, des dommages psychologiques, des problèmes de développement ou un décès. »"]),

    "wiki_protection_enfance": (
        "Wikipédia (fr) — « Protection de l\'enfance », encyclopédie en ligne, licence CC BY-SA 4.0",
        "https://fr.wikipedia.org/wiki/Protection_de_l%27enfance",
        ["« La protection de l\'enfance est un ensemble de droits et de devoirs ayant pour finalité de "
         "préserver l\'intérêt de l\'enfant. La protection de l\'enfance prend en compte les besoins "
         "physiologiques, intellectuels, sociaux et affectifs des enfants et concerne les mineurs en danger "
         "ou en risque de l\'être. »"]),

    "wiki_dev_durable": (
        "Wikip\u00e9dia (fr) \u2014 « D\u00e9veloppement durable », encyclop\u00e9die en ligne, licence CC BY-SA 4.0",
        "https://fr.wikipedia.org/wiki/D\u00e9veloppement_durable",
        ["\u00ab Le d\u00e9veloppement durable est un d\u00e9veloppement qui r\u00e9pond aux besoins du pr\u00e9sent sans "
         "compromettre la capacit\u00e9 des g\u00e9n\u00e9rations futures de r\u00e9pondre aux leurs. \u00bb (rapport de la "
         "Commission mondiale sur l'environnement et le d\u00e9veloppement)",
         "\u00ab Le d\u00e9veloppement durable \u2026 est une conception du d\u00e9veloppement qui s'inscrit dans une "
         "perspective de long terme et en int\u00e9grant les contraintes environnementales et sociales \u00e0 "
         "l'\u00e9conomie. \u00bb"]),
    "wiki_discrimination": (
        "Wikip\u00e9dia (fr) \u2014 \u00ab Discrimination \u00bb, encyclop\u00e9die en ligne, licence CC BY-SA 4.0",
        "https://fr.wikipedia.org/wiki/Discrimination",
        ["\u00ab La discrimination sociale est un processus li\u00e9 au fait d'op\u00e9rer une distinction concernant une "
         "personne ou une cat\u00e9gorie sociale en cr\u00e9ant des fronti\u00e8res dites \u00ab discriminantes \u00bb, "
         "c'est-\u00e0-dire produisant un rejet visant \u00e0 l'exclusion sociale sur des crit\u00e8res tels que "
         "l'origine sociale ou ethnique, la religion, le genre, le niveau de son intelligence ou l'\u00e9tat "
         "de sant\u00e9. \u00bb",
         "\u00ab Au sens courant, la discrimination est le fait de traiter de mani\u00e8re in\u00e9gale et "
         "d\u00e9favorable un ou plusieurs individus. \u00bb",
         "\u00ab Cet individu est dit victime d'une discrimination lorsqu'il est, dans une situation "
         "identique, trait\u00e9 diff\u00e9remment des autres sans motif l\u00e9gitime. \u00bb"]),
    "wiki_demokrasia": (
        "Wikipédia (fr) — « Démocratie », encyclopédie en ligne, licence CC BY-SA 4.0",
        "https://fr.wikipedia.org/wiki/D%C3%A9mocratie",
        ["« La démocratie … est, à l'origine, un régime politique dans lequel le pouvoir appartient au "
         "peuple, qui l'exerce directement ou par l'intermédiaire de représentants élus. Elle repose sur "
         "des principes fondamentaux tels que la participation citoyenne, la liberté d'expression, "
         "l'égalité devant la loi, et le respect de droits fondamentaux. »",
         "« Le dénominateur commun des démocraties est l'existence d'institutions et de lois qui visent à "
         "protéger la population des dérives tyranniques ou dictatoriales que peut exercer une personne ou "
         "un groupe quelconque, y compris la majorité. »"]),
    "mgwiki_fehezanteny": (
        "Wikipedia (mg) — « Fehezanteny », Wikipedia malagasy, vasontolo malalaka",
        "https://mg.wikipedia.org/wiki/Fehezanteny",
        ["« Ny fehezanteny dia teny na andian-teny tononina na soratana manara-pitsipika ka azo "
         "ampitana hafatra mahaleo tena, noho izy azo sarahana amin' ny andian-teny hafa izay mety "
         "hitovy fiasa aminy. »"]),
}

# -----------------------------------------------------------------------------------------------
# Les entrées des autres lohahevitra sont ajoutées AU FIL DE LA RÉDACTION, uniquement
# après récupération réelle de la page : aucune citation n'est écrite de mémoire.
# Convention : clé = « wiki_<sujet> » / « ohab_<mot> » / « pdf_<doc> » ; le 3e élément est une
# liste de paragraphes recopiés mot pour mot depuis la page (guillemets « … ») ou, pour un
# document institutionnel, sa description fidèle suivie de l'URL.

def biblio(cles):
    """Liste (référence, URL) sans doublon, dans l'ordre de première utilisation — pour l'annexe
    « LOHARANON-KEVITRA » de fin de manuel."""
    vus, out = set(), []
    for k in cles:
        if k in SOURCES and k not in vus:
            vus.add(k)
            out.append((SOURCES[k][0], SOURCES[k][1]))
    return out
