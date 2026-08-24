# Boîte à Outils Visuelle & Index Complet des Formules et Notions Clés

INDEX_CATEGORIES = [
    {
        "category": "1. ARITHMÉTIQUE, OPÉRATIONS & FRACTIONS",
        "description": "Nombres entiers de 0 à 100 000, 4 opérations posées, fractions et nombres décimaux.",
        "rows": [
            ("Addition (Somme)", "Somme = Terme 1 + Terme 2", "3 450 + 2 120 = 5 570 (Commutative : 5 + 3 = 3 + 5)", "Blocs 2, 6, 12, 17, 24, 30"),
            ("Soustraction (Différence)", "Différence = Grand terme − Petit terme", "5 800 − 2 350 = 3 450 (Opération inverse de l'addition)", "Blocs 2, 6, 12, 17, 24, 30"),
            ("Multiplication (Produit)", "Produit = Facteur 1 × Facteur 2", "125 × 4 = 500 (Table de multiplication, distributivité)", "Blocs 7, 13, 18, 25, 31"),
            ("Division euclidienne", "Dividende = (Diviseur × Quotient) + Reste", "865 ÷ 4 -> Q = 216, R = 1 (Reste toujours < Diviseur)", "Blocs 7, 13, 18, 25, 31"),
            ("Sens de la fraction", "Numérateur (haut) / Dénominateur (bas)", "3/4 : 3 parts prises sur 4 parts égales au total", "Blocs 19, 27, 32"),
            ("Fraction d'une quantité", "(Quantité totale ÷ Bas) × Haut", "3/4 de 20 000 Ar = (20 000 ÷ 4) × 3 = 15 000 Ar", "Blocs 19, 27, 32"),
            ("Addition fractions (Papillon)", "(a/b) + (c/d) = [(a×d) + (b×c)] / (b×d)", "2/4 + 1/3 = (6 + 4) / 12 = 10/12 = 5/6", "Blocs 19, 32"),
            ("Nombre décimal", "Partie entière + virgule + Partie décimale", "1/2 = 0,5 ; 1/4 = 0,25 ; 3/4 = 0,75 ; 1/10 = 0,1", "Blocs 27, 32")
        ]
    },
    {
        "category": "2. GÉOMÉTRIE PLANE (Périmètres & Surfaces)",
        "description": "Figures usuelles : Carré, Rectangle, Triangle rectangle, Cercle.",
        "rows": [
            ("Périmètre du carré", "P = côté × 4", "Si c = 9 cm -> P = 9 × 4 = 36 cm", "Bloc 8"),
            ("Côté du carré", "côté = Périmètre ÷ 4", "Si P = 48 cm -> côté = 48 ÷ 4 = 12 cm", "Bloc 8"),
            ("Surface du carré", "Surface = côté × côté (S = c × c)", "Si c = 6 cm -> S = 6 × 6 = 36 cm²", "Blocs 8, 48"),
            ("Demi-périmètre du rectangle", "p = Longueur + largeur (p = L + l)", "Si L = 12 m et l = 8 m -> p = 12 + 8 = 20 m", "Bloc 3"),
            ("Périmètre du rectangle", "P = (L + l) × 2  ou  P = p × 2", "Si p = 20 m -> P = 20 × 2 = 40 m", "Bloc 3"),
            ("Longueur du rectangle", "Longueur = demi-périmètre − largeur", "Si p = 50 m et l = 15 m -> L = 50 − 15 = 35 m", "Bloc 3"),
            ("Largeur du rectangle", "largeur = demi-périmètre − Longueur", "Si p = 50 m et L = 35 m -> l = 50 − 35 = 15 m", "Bloc 3"),
            ("Surface du rectangle", "Surface = Longueur × largeur (S = L × l)", "Si L = 15 m et l = 8 m -> S = 15 × 8 = 120 m²", "Blocs 3, 48"),
            ("Surface triangle rectangle", "S = (Base × Hauteur) ÷ 2", "Si b = 10 cm et h = 6 cm -> S = (10 × 6) ÷ 2 = 30 cm²", "Blocs 14, 49"),
            ("Diamètre du cercle", "Diamètre = Rayon × 2 (D = 2 × r)", "Si r = 7 cm -> D = 7 × 2 = 14 cm", "Bloc 20"),
            ("Rayon du cercle", "Rayon = Diamètre ÷ 2 (r = D ÷ 2)", "Si D = 30 cm -> r = 30 ÷ 2 = 15 cm", "Bloc 20")
        ]
    },
    {
        "category": "3. SOLIDES DE L'ESPACE (Cube & Parallélépipède)",
        "description": "Propriétés spatiales, faces, arêtes, sommets et patrons de solides.",
        "rows": [
            ("Cube (Propriétés)", "6 faces carrées égales, 12 arêtes égales, 8 sommets", "Développement en croix à 6 carrés identiques", "Blocs 26, 38"),
            ("Somme des arêtes du cube", "Somme = arête × 12", "Si arête = 5 cm -> Somme = 5 × 12 = 60 cm", "Blocs 26, 38"),
            ("Parallélépipède (Pavé droit)", "6 faces rectangulaires (égales 2 à 2), 12 arêtes, 8 sommets", "3 paires de faces rectangulaires opposées identiques", "Blocs 44, 47"),
            ("Somme arêtes parallélépipède", "Somme = (Longueur + largeur + hauteur) × 4", "Si L = 8, l = 5, h = 3 -> (8+5+3) × 4 = 64 cm", "Blocs 44, 47")
        ]
    },
    {
        "category": "4. GRANDEURS, MESURES & CONVERSIONS",
        "description": "Unités officielles métriques, durées et monnaie en Ariary.",
        "rows": [
            ("Unités de longueur", "km — hm — dam — m — dm — cm — mm", "1 m = 10 dm = 100 cm = 1 000 mm ; 1 km = 1 000 m", "Blocs 4, 9"),
            ("Unités de masse", "t — q — (10 kg) — kg — hg — dag — g", "1 t = 1 000 kg ; 1 q = 100 kg ; 1 kg = 1 000 g", "Bloc 10"),
            ("Unités de capacité", "hl — dal — l — dl — cl — ml", "1 l = 10 dl = 100 cl = 1 000 ml ; 1 hl = 100 l", "Bloc 15"),
            ("Mesures de temps (durées)", "1 j = 24 h ; 1 h = 60 min ; 1 min = 60 s", "2 h 15 min = (2 × 60) + 15 = 135 min", "Bloc 45"),
            ("Monnaie malgache (Ariary)", "Billets : 100 à 20 000 Ar ; Pièces : 1 à 50 Ar", "1 billet de 20 000 Ar = 2 de 10 000 = 4 de 5 000 Ar", "Blocs 21, 28, 31, 37")
        ]
    },
    {
        "category": "5. ÉCONOMIE PRATIQUE & PROBLÈMES TYPES",
        "description": "Commerce, budget familial, clôtures de terrains et partages équitables.",
        "rows": [
            ("Prix de vente (Commerce)", "Prix de Vente = Prix d'Achat + Bénéfice (PV = PA + B)", "PA = 10 000 Ar, B = 2 500 Ar -> PV = 12 500 Ar", "Blocs 23, 25, 46"),
            ("Bénéfice (Commerce)", "Bénéfice = Prix de Vente − Prix de Revient (B = PV − PR)", "PV = 50 000 Ar, PR = 42 000 Ar -> B = 8 000 Ar", "Blocs 23, 25, 46"),
            ("Perte (Commerce)", "Perte = Prix de Revient − Prix de Vente (si PR > PV)", "PR = 20 000 Ar, PV = 18 000 Ar -> Perte = 2 000 Ar", "Blocs 23, 25, 46"),
            ("Prix de Revient", "Prix de Revient = Prix d'Achat + Frais de transport/main-d'œuvre", "Achat = 80 000 Ar, Frais = 5 000 Ar -> PR = 85 000 Ar", "Blocs 23, 25, 46"),
            ("Budget familial (Épargne)", "Épargne = Gains totaux (Revenus) − Dépenses totales", "Gains = 250 000 Ar, Dépenses = 210 000 Ar -> Épargne = 40 000 Ar", "Blocs 33, 37"),
            ("Piquets sur contour fermé", "Nombre de piquets = Périmètre ÷ Écartement", "Périmètre = 200 m, espacés de 5 m -> 200 ÷ 5 = 40 piquets", "Blocs 3, 8, 43"),
            ("Piquets sur ligne ouverte", "Nombre de piquets = (Longueur ÷ Écartement) + 1", "L = 60 m, espacés de 10 m -> (60 ÷ 10) + 1 = 7 piquets", "Bloc 43")
        ]
    }
]

print("Loaded tools & index content.")
