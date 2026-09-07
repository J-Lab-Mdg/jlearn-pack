// Séance de révision et sujet d'examen — un jeu par période.
// Conforme a manuel-structure.md section 7 : titre « Sujet d'examen 6e »,
// duree indiquee, bareme total, corrige complet.

module.exports = {
  P1: {
    revision: {
      titre: "Révision de la Période I",
      intro: "Cette séance récapitule les notions étudiées au cours de la première période : les nombres entiers naturels, les nombres décimaux, l'addition, la soustraction et la multiplication.",
      notions: [
        ["Nombre entier naturel", "Nombre sans virgule, écrit avec les dix chiffres groupés par classes de trois : unités, mille, millions."],
        ["Valeur de position", "Quantité représentée par un chiffre selon la colonne qu'il occupe. Dans 3 254 108, le 5 vaut 50 000."],
        ["Arrondi", "Valeur approchée obtenue en observant le chiffre situé juste à droite du rang choisi : de 0 à 4 on descend, de 5 à 9 on monte."],
        ["Nombre décimal", "Nombre formé d'une partie entière et d'une partie décimale séparées par une virgule."],
        ["Rangs décimaux", "Après la virgule : dixièmes, centièmes, millièmes. Chaque rang vaut dix fois moins que le précédent."],
        ["Écritures équivalentes", "Les zéros inutiles, à gauche du nombre ou tout à droite après la virgule, ne changent pas sa valeur : 3,5 = 3,50 = 03,5."],
        ["Comparaison de décimaux", "On compare d'abord les parties entières, puis les décimales rang par rang, en complétant si besoin par des zéros."],
        ["Troncature et arrondi", "Tronquer, c'est couper après le rang choisi ; arrondir, c'est tenir compte du chiffre suivant."],
        ["Addition et soustraction", "On aligne les virgules, on complète par des zéros, on calcule en partant de la droite."],
        ["Multiplication", "On calcule sans les virgules, puis le produit reçoit autant de décimales que les deux facteurs réunis."],
        ["Multiplier par 10, 100, 1 000", "La virgule se déplace vers la droite d'autant de rangs qu'il y a de zéros ; le nombre augmente."],
        ["Multiplier par 0,1 ; 0,01 ; 0,001", "La virgule se déplace vers la gauche ; le nombre diminue. Multiplier par 0,1 revient à diviser par 10."],
        ["Ordre de grandeur", "Calcul approché servant à prévoir un résultat et à vérifier qu'il est vraisemblable."],
      ],
      questions: [
        ["Quelle est la valeur du chiffre 7 dans 4 738 ?", "700, car il occupe la colonne des centaines."],
        ["Arrondis 6 482 à la centaine.", "6 500, car le chiffre des dizaines est 8."],
        ["Quelle est la partie décimale de 12,406 ?", "406."],
        ["Range dans l'ordre croissant : 5,7 ; 5,07 ; 5,77.", "5,07 < 5,7 < 5,77."],
        ["Calcule 12,5 + 3,75.", "16,25."],
        ["Calcule 20 − 7,25.", "12,75."],
        ["Calcule 2,5 × 4.", "10."],
        ["Calcule 8,4 × 10.", "84."],
        ["Calcule 350 × 0,01.", "3,5."],
        ["Donne un ordre de grandeur de 198 + 403.", "Environ 200 + 400, soit 600."],
        ["Combien de décimales comporte le produit 1,2 × 3,45 ?", "Trois décimales."],
        ["Que devient 4,900 après suppression des zéros inutiles ?", "4,9."],
      ],
    },
    examen: {
      titre: "Sujet d'examen 6e — Période I",
      duree: "1 heure",
      consigne: "Toutes les réponses doivent être justifiées par un calcul. Le soin et la présentation sont pris en compte.",
      parties: [
        {
          nom: "Première partie — Les nombres",
          exos: [
            { pts: 3, c: "Écris en chiffres : trois millions quarante mille sept cents. Puis donne la valeur du chiffre 4 dans ce nombre.",
              r: "Le nombre s'écrit [[3 040 700]]. Le chiffre 4 occupe la colonne des dizaines de mille : il vaut [[40 000]]." },
            { pts: 3, c: "Range dans l'ordre croissant : 8,7 ; 8,07 ; 8,77 ; 8,707.",
              r: "En complétant par des zéros — 8,700 ; 8,070 ; 8,770 ; 8,707 — on obtient [[8,07 < 8,7 < 8,707 < 8,77]]." },
            { pts: 2, c: "Donne la troncature puis l'arrondi de 9,368 au dixième.",
              r: "Troncature : [[9,3]]. Arrondi : [[9,4]], car le chiffre suivant est 6, supérieur à 5." },
            { pts: 2, c: "Décompose 47,05 en somme faisant apparaître la valeur de chaque chiffre.",
              r: "47,05 = [[40 + 7 + 0,05]]. Il n'y a pas de dixième, d'où le zéro à ce rang." },
          ],
        },
        {
          nom: "Deuxième partie — Calculs",
          exos: [
            { pts: 2, c: "Pose et calcule 45,8 + 12,75.",
              r: "En alignant les virgules : 45,80 + 12,75 = [[58,55]]." },
            { pts: 2, c: "Pose et calcule 50 − 18,25.",
              r: "En écrivant 50,00 − 18,25 : le résultat est [[31,75]]. Vérification : 31,75 + 18,25 = 50." },
            { pts: 2, c: "Calcule 3,5 × 12.",
              r: "35 × 12 = 420 ; le facteur 3,5 a une décimale, donc le produit est [[42]]." },
            { pts: 2, c: "Calcule astucieusement 2,5 × 7,8 × 4 en regroupant les facteurs.",
              r: "On regroupe 2,5 et 4 qui font 10 : 10 × 7,8 = [[78]]." },
          ],
        },
        {
          nom: "Troisième partie — Problème",
          exos: [
            { pts: 2, c: "Un commerçant achète 12 sacs de riz de 25 kg chacun. Quelle masse totale a-t-il achetée ?",
              r: "12 × 25 = [[300 kg]]. « Le commerçant a acheté 300 kilogrammes de riz. »" },
            { pts: 2, c: "Il paie ce riz 2 400 ariary le kilogramme. Quelle somme dépense-t-il ?",
              r: "300 × 2 400 = [[720 000 ariary]]. Un ordre de grandeur, 300 × 2 000 = 600 000, confirme la vraisemblance." },
            { pts: 2, c: "Il revend l'ensemble pour 900 000 ariary. Quel bénéfice réalise-t-il ?",
              r: "900 000 − 720 000 = [[180 000 ariary]]. « Le commerçant réalise un bénéfice de 180 000 ariary. »" },
            { pts: 2, c: "Vérifie la vraisemblance de ta réponse précédente par un ordre de grandeur.",
              r: "On estime 900 000 − 700 000 = [[200 000 ariary]], proche du résultat exact de 180 000 ariary : le calcul est donc [[vraisemblable]]." },
          ],
        },
      ],
    },
  },
};
