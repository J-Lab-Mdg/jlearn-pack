"""Enrichit l'unité Traitement de données avec des exercices distincts et corrigés."""
from pathlib import Path
import json
import sys
sys.path.insert(0, str(Path(__file__).parent))
from content_bank import BANK
import enrich_u5  # applique U1 à U5 avant l'export global

PATCHES = {
"U6-L01": ("Propose une question de sondage sur le goûter préféré.", "Réponse possible : Quel goûter préfères-tu ?", ["Transforme en question de sondage : « sport préféré ».", "Propose quatre réponses possibles à une question sur le moyen de transport.", "Quelle question est plus neutre : « Aimes-tu le football ? » ou « Quel sport préfères-tu ? » ?", "Pourquoi faut-il préciser la consigne d’un sondage ?"], ["Quel est ton sport préféré ?", "À pied, vélo, voiture et bus, par exemple.", "« Quel sport préfères-tu ? » est plus neutre.", "Pour que les répondants comprennent la même chose et que les réponses soient comparables."]),
"U6-L02": ("Enregistre : bleu, bleu, rouge, vert, bleu. Donne l’effectif de chaque réponse.", "Bleu : 3 ; rouge : 1 ; vert : 1.", ["Dans une enquête de 15 élèves, 9 choisissent le vélo. Combien choisissent autre chose ?", "Enregistre les réponses oui, non, non, oui, oui.", "Quelle règle évite de compter deux fois un répondant ?", "Combien de réponses doit-on obtenir pour un sondage de 24 élèves ?"], ["6 élèves.", "Oui : 3 ; non : 2.", "Une personne est enregistrée une seule fois.", "24 réponses."]),
"U6-L03": ("Construis le tableau des effectifs de : A, B, A, C, B, A.", "A : 3 ; B : 2 ; C : 1.", ["Construis le tableau des effectifs de : rouge, vert, rouge, rouge, vert, bleu.", "Quel est l’effectif total si les effectifs sont 6, 4 et 2 ?", "Dans un tableau, que signifie l’effectif d’une catégorie ?", "Vérifie que les effectifs correspondent au nombre de réponses."], ["Rouge : 3 ; vert : 2 ; bleu : 1.", "12.", "Le nombre de fois où la catégorie a été observée.", "3 + 2 + 1 = 6 réponses."]),
"U6-L04": ("Avec 1 symbole = 3 élèves, représente 12 élèves.", "4 symboles.", ["Avec 1 symbole = 5 élèves, représente 15 élèves.", "Quel titre convient à un diagramme des couleurs préférées ?", "Sur quel axe place-t-on habituellement les catégories ?", "Que doit indiquer la légende d’un pictogramme ?"], ["3 symboles.", "Couleurs préférées des élèves de T4.", "L’axe horizontal.", "La valeur d’un symbole, par exemple 1 symbole = 5 élèves."]),
"U6-L05": ("Effectifs : A = 7, B = 4, C = 7. Quelle conclusion peux-tu tirer ?", "A et C sont à égalité et sont les catégories majoritaires.", ["Effectifs : rouge = 9, bleu = 6, vert = 3. Quelle catégorie est majoritaire ?", "Quel est l’écart entre 9 et 3 ?", "Quelle conclusion est impossible sans information supplémentaire ?", "Si deux catégories ont le même effectif, comment les comparer ?"], ["Rouge.", "6.", "On ne peut pas inventer la cause du résultat.", "Elles sont à égalité."]),
"U6-L06": ("Après 12 lancers d’une pièce, pile apparaît 7 fois. Combien de fois face ?", "5 fois.", ["Quelles sont les issues possibles d’une pièce ?", "Un dé est lancé 15 fois ; le 6 apparaît 3 fois. Quel est son effectif ?", "Combien d’issues différentes possède un dé à six faces ?", "Pourquoi répéter une expérience aléatoire ?"], ["Pile et face.", "3.", "Six issues.", "Pour observer plusieurs résultats et comparer les fréquences."]),
"U6-L07": ("Dans un sac contenant seulement des boules vertes, tirer une boule verte est-il impossible, possible ou certain ?", "Certain.", ["Obtenir 9 avec un dé à six faces est-il impossible, possible ou certain ?", "Obtenir un nombre pair avec un dé est-il possible ?", "Tirer une boule rouge dans un sac avec 4 rouges et 1 bleue est-il probable ?", "Classe un événement qui ne peut jamais se produire."], ["Impossible.", "Possible.", "Probable, car il y a davantage de boules rouges.", "C’est un événement impossible."]),
"U6-L08": ("Un sac contient 4 jetons rouges et 1 bleu. Quelle couleur est la plus probable ?", "Rouge, car il y a 4 jetons rouges contre 1 bleu.", ["Avec une pièce équilibrée, pile et face ont-elles la même probabilité ?", "Dans 30 lancers, pile apparaît 17 fois. Combien de fois face ?", "Avec un dé, obtenir un nombre de 1 à 6 est-il certain ?", "Quelle différence fais-tu entre résultat observé et prédiction ?"], ["Oui.", "13 fois.", "Oui, c’est certain.", "Le résultat observé est obtenu après l’expérience ; la prédiction est faite avant."])
}
for key,(extra,extra_answer,items,answers) in PATCHES.items():
    BANK[key]['extra_application']=[extra]
    BANK[key]['extra_application_corrections']=[extra_answer]
    BANK[key]['evaluation']=items
    BANK[key]['evaluation_corrections']=answers

if __name__ == '__main__':
    out=Path(__file__).parent/'content_bank.json'
    out.write_text(json.dumps(BANK,ensure_ascii=False,indent=2),encoding='utf8')
    print('Enrichissement U1 à U6 exporté :',len(PATCHES),'leçons U6')
