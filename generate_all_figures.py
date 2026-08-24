#!/usr/bin/env python3
import os
import matplotlib.pyplot as plt
import matplotlib.patches as patches
import numpy as np

os.makedirs("assets_new", exist_ok=True)
plt.rcParams['font.sans-serif'] = 'DejaVu Sans'
plt.rcParams['font.family'] = 'sans-serif'
plt.rcParams['figure.autolayout'] = False

# 1. Fraction Papillon / Flèches Croisées
def create_fraction_butterfly():
    fig, ax = plt.subplots(figsize=(10, 4.5), dpi=200)
    ax.set_xlim(0, 10)
    ax.set_ylim(0, 4.5)
    ax.axis('off')

    ax.text(5, 4.15, "MÉTHODE DES FLÈCHES CROISÉES (MÉTHODE PAPILLON)", 
            fontsize=13, fontweight='bold', ha='center', color='#1F4E79')
    ax.text(5, 3.75, "Additionner deux fractions à dénominateurs différents sans se tromper", 
            fontsize=9.5, style='italic', ha='center', color='#555555')

    rect = patches.FancyBboxPatch((0.4, 0.35), 9.2, 3.1, boxstyle="round,pad=0.15", 
                                  facecolor='#F8F9FA', edgecolor='#D0D7DE', linewidth=1.5)
    ax.add_patch(rect)

    # 2/4 + 1/3
    ax.text(1.2, 2.3, "2", fontsize=24, fontweight='bold', ha='center', va='center', color='#0D47A1')
    ax.plot([0.8, 1.6], [1.9, 1.9], color='#0D47A1', lw=3)
    ax.text(1.2, 1.5, "4", fontsize=24, fontweight='bold', ha='center', va='center', color='#0D47A1')

    ax.text(2.1, 1.9, "+", fontsize=26, fontweight='bold', ha='center', va='center', color='#333333')

    ax.text(3.0, 2.3, "1", fontsize=24, fontweight='bold', ha='center', va='center', color='#0D47A1')
    ax.plot([2.6, 3.4], [1.9, 1.9], color='#0D47A1', lw=3)
    ax.text(3.0, 1.5, "3", fontsize=24, fontweight='bold', ha='center', va='center', color='#0D47A1')

    ax.text(3.9, 1.9, "=", fontsize=26, fontweight='bold', ha='center', va='center', color='#333333')

    # 6/12 + 4/12
    ax.text(4.8, 2.3, "6", fontsize=24, fontweight='bold', ha='center', va='center', color='#C2185B')
    ax.plot([4.4, 5.2], [1.9, 1.9], color='#C2185B', lw=3)
    ax.text(4.8, 1.5, "12", fontsize=24, fontweight='bold', ha='center', va='center', color='#1E7B34')

    ax.text(5.6, 1.9, "+", fontsize=26, fontweight='bold', ha='center', va='center', color='#333333')

    ax.text(6.4, 2.3, "4", fontsize=24, fontweight='bold', ha='center', va='center', color='#E65100')
    ax.plot([6.0, 6.8], [1.9, 1.9], color='#E65100', lw=3)
    ax.text(6.4, 1.5, "12", fontsize=24, fontweight='bold', ha='center', va='center', color='#1E7B34')

    ax.text(7.2, 1.9, "=", fontsize=26, fontweight='bold', ha='center', va='center', color='#333333')

    # 10/12
    ax.text(8.1, 2.3, "10", fontsize=24, fontweight='bold', ha='center', va='center', color='#C00000')
    ax.plot([7.6, 8.6], [1.9, 1.9], color='#C00000', lw=3)
    ax.text(8.1, 1.5, "12", fontsize=24, fontweight='bold', ha='center', va='center', color='#1E7B34')

    ax.text(8.9, 1.9, "=  5/6", fontsize=15, fontweight='bold', ha='left', va='center', color='#2E7D32')

    # Arrows
    arrow1 = patches.FancyArrowPatch((1.35, 2.2), (2.8, 1.65),
                                     connectionstyle="arc3,rad=-0.15",
                                     color='#E91E63', lw=2.2, arrowstyle="-|>", mutation_scale=16)
    ax.add_patch(arrow1)
    ax.text(2.15, 2.35, "2 × 3 = 6", fontsize=9.5, fontweight='bold', color='#C2185B', ha='center',
            bbox=dict(boxstyle='round,pad=0.2', facecolor='#FCE4EC', edgecolor='#E91E63', lw=1))

    arrow2 = patches.FancyArrowPatch((1.35, 1.65), (2.8, 2.2),
                                     connectionstyle="arc3,rad=0.15",
                                     color='#FF9800', lw=2.2, arrowstyle="-|>", mutation_scale=16)
    ax.add_patch(arrow2)
    ax.text(2.15, 1.35, "4 × 1 = 4", fontsize=9.5, fontweight='bold', color='#E65100', ha='center',
            bbox=dict(boxstyle='round,pad=0.2', facecolor='#FFF3E0', edgecolor='#FF9800', lw=1))

    arrow3 = patches.FancyArrowPatch((1.4, 1.2), (2.8, 1.2),
                                     connectionstyle="arc3,rad=-0.35",
                                     color='#4CAF50', lw=2.2, arrowstyle="-|>", mutation_scale=16)
    ax.add_patch(arrow3)
    ax.text(2.1, 0.55, "4 × 3 = 12 (Dénominateur commun)", fontsize=9, fontweight='bold', color='#1E7B34', ha='center',
            bbox=dict(boxstyle='round,pad=0.2', facecolor='#E8F5E9', edgecolor='#4CAF50', lw=1))

    fig.savefig("assets_new/methode_fleches_fractions.png", dpi=200, bbox_inches='tight')
    plt.close(fig)

# 2. Fraction d'une quantité
def create_fraction_quantity():
    fig, ax = plt.subplots(figsize=(10, 4.2), dpi=200)
    ax.set_xlim(0, 10)
    ax.set_ylim(0, 4.2)
    ax.axis('off')

    ax.text(5, 3.85, "COMMENT CALCULER LA FRACTION D'UNE QUANTITÉ ?", 
            fontsize=13, fontweight='bold', ha='center', color='#1F4E79')
    ax.text(5, 3.45, "Exemple : Calculer les 3/4 de 20 000 Ariary", 
            fontsize=10, style='italic', ha='center', color='#555555')

    rect = patches.FancyBboxPatch((0.5, 0.4), 9.0, 2.8, boxstyle="round,pad=0.15", 
                                  facecolor='#F0F4F8', edgecolor='#B0BEC5', linewidth=1.5)
    ax.add_patch(rect)

    # Box 1: Total
    box1 = patches.FancyBboxPatch((0.8, 1.2), 2.2, 1.4, boxstyle="round,pad=0.1", 
                                  facecolor='#E3F2FD', edgecolor='#1976D2', lw=2)
    ax.add_patch(box1)
    ax.text(1.9, 2.1, "Total de départ", fontsize=9.5, fontweight='bold', color='#0D47A1', ha='center')
    ax.text(1.9, 1.6, "20 000 Ar", fontsize=14, fontweight='bold', color='#1565C0', ha='center')

    # Arrow 1: Diviser par le bas (4)
    arrow1 = patches.FancyArrowPatch((3.1, 1.9), (4.5, 1.9), color='#C2185B', lw=2.5, arrowstyle="-|>", mutation_scale=16)
    ax.add_patch(arrow1)
    ax.text(3.8, 2.25, "÷ 4 (bas)", fontsize=10, fontweight='bold', color='#C2185B', ha='center',
            bbox=dict(boxstyle='round,pad=0.2', facecolor='#FCE4EC', edgecolor='#C2185B', lw=1))
    ax.text(3.8, 1.45, "1 part =", fontsize=8.5, color='#555555', ha='center')

    # Box 2: Valeur d'une part
    box2 = patches.FancyBboxPatch((4.6, 1.2), 2.0, 1.4, boxstyle="round,pad=0.1", 
                                  facecolor='#FFF3E0', edgecolor='#FF9800', lw=2)
    ax.add_patch(box2)
    ax.text(5.6, 2.1, "1 quart (1/4)", fontsize=9.5, fontweight='bold', color='#E65100', ha='center')
    ax.text(5.6, 1.6, "5 000 Ar", fontsize=14, fontweight='bold', color='#EF6C00', ha='center')

    # Arrow 2: Multiplier par le haut (3)
    arrow2 = patches.FancyArrowPatch((6.7, 1.9), (7.7, 1.9), color='#1E7B34', lw=2.5, arrowstyle="-|>", mutation_scale=16)
    ax.add_patch(arrow2)
    ax.text(7.2, 2.25, "× 3 (haut)", fontsize=10, fontweight='bold', color='#1E7B34', ha='center',
            bbox=dict(boxstyle='round,pad=0.2', facecolor='#E8F5E9', edgecolor='#1E7B34', lw=1))
    ax.text(7.2, 1.45, "3 parts =", fontsize=8.5, color='#555555', ha='center')

    # Box 3: Résultat final
    box3 = patches.FancyBboxPatch((7.8, 1.2), 1.5, 1.4, boxstyle="round,pad=0.1", 
                                  facecolor='#E8F5E9', edgecolor='#2E7D32', lw=2.5)
    ax.add_patch(box3)
    ax.text(8.55, 2.1, "Résultat final", fontsize=9.5, fontweight='bold', color='#1B5E20', ha='center')
    ax.text(8.55, 1.6, "15 000 Ar", fontsize=13, fontweight='bold', color='#2E7D32', ha='center')

    ax.text(5.0, 0.65, "RÈGLE D'OR : On divise toujours par le dénominateur (bas), puis on multiplie par le numérateur (haut) !", 
            fontsize=9, fontweight='bold', color='#C00000', ha='center')

    fig.savefig("assets_new/methode_fraction_quantite.png", dpi=200, bbox_inches='tight')
    plt.close(fig)

# 3. Tableaux de conversion métrique
def create_conversion_table():
    fig, ax = plt.subplots(figsize=(10, 4.2), dpi=200)
    ax.set_xlim(0, 10)
    ax.set_ylim(0, 4.2)
    ax.axis('off')

    ax.text(5, 3.85, "LE TABLEAU DE CONVERSION ET LES FLÈCHES MULTIPLICATIVES", 
            fontsize=12.5, fontweight='bold', ha='center', color='#1F4E79')
    ax.text(5, 3.45, "Unités de longueur (mètre) — Même méthode pour le gramme (g) et le litre (l)", 
            fontsize=9.5, style='italic', ha='center', color='#555555')

    units = ["km", "hm", "dam", "m", "dm", "cm", "mm"]
    colors = ["#E3F2FD", "#E3F2FD", "#E3F2FD", "#C8E6C9", "#FFF3E0", "#FFF3E0", "#FFF3E0"]
    names = ["kilomètre", "hectomètre", "décamètre", "MÈTRE (base)", "décimètre", "centimètre", "millimètre"]

    start_x = 0.5
    col_w = 1.28

    # Top arrow: vers la droite (x10 par case)
    ax.annotate("", xy=(9.4, 2.95), xytext=(0.6, 2.95),
                arrowprops=dict(arrowstyle="->", color="#C2185B", lw=2.5))
    ax.text(5.0, 3.1, "Vers la droite : on multiplie par 10 par case (j'ajoute un 0 ou décale la virgule à droite)", 
            fontsize=8.5, fontweight='bold', color='#C2185B', ha='center')

    # Draw table columns
    for idx, (u, c, n) in enumerate(zip(units, colors, names)):
        x = start_x + idx * col_w
        rect = patches.Rectangle((x, 1.4), col_w, 1.2, facecolor=c, edgecolor='#333333', lw=1.5)
        ax.add_patch(rect)
        ax.text(x + col_w/2, 2.2, u, fontsize=13, fontweight='bold', ha='center', color='#111111')
        ax.text(x + col_w/2, 1.65, n, fontsize=6.5, ha='center', color='#444444')

    # Bottom arrow: vers la gauche (/10 par case)
    ax.annotate("", xy=(0.6, 1.05), xytext=(9.4, 1.05),
                arrowprops=dict(arrowstyle="->", color="#1E7B34", lw=2.5))
    ax.text(5.0, 0.75, "Vers la gauche : on divise par 10 par case (j'enlève un 0 ou décale la virgule à gauche)", 
            fontsize=8.5, fontweight='bold', color='#1E7B34', ha='center')

    ax.text(5.0, 0.35, "Exemples : 4 m = 400 cm (2 pas à droite -> 2 zéros)  |  3500 m = 3,5 km (3 pas à gauche -> virgule)", 
            fontsize=8.5, fontweight='bold', color='#1F4E79', ha='center')

    fig.savefig("assets_new/tableau_conversion_fleches.png", dpi=200, bbox_inches='tight')
    plt.close(fig)

# 4. Triangles magiques d'économie et de commerce
def create_economy_triangles():
    fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(10, 4.2), dpi=200)
    for ax in [ax1, ax2]:
        ax.set_xlim(0, 5)
        ax.set_ylim(0, 4.2)
        ax.axis('off')

    # Triangle 1 : Vente / Bénéfice
    ax1.text(2.5, 3.85, "1. COMMERCE ET VENTE", fontsize=11, fontweight='bold', ha='center', color='#1F4E79')
    tri1 = patches.Polygon([[0.5, 0.8], [4.5, 0.8], [2.5, 3.4]], closed=True, 
                           facecolor='#FFF8E1', edgecolor='#FF8F00', lw=2)
    ax1.add_patch(tri1)
    # Split lines
    ax1.plot([1.5, 3.5], [2.1, 2.1], color='#FF8F00', lw=2)
    ax1.plot([2.5, 2.5], [0.8, 2.1], color='#FF8F00', lw=2)

    ax1.text(2.5, 2.6, "PRIX DE VENTE (PV)", fontsize=9, fontweight='bold', color='#C00000', ha='center')
    ax1.text(1.5, 1.35, "Prix d'Achat\n(PA ou PR)", fontsize=8, fontweight='bold', color='#0D47A1', ha='center')
    ax1.text(3.5, 1.35, "Bénéfice\n(B)", fontsize=8, fontweight='bold', color='#1E7B34', ha='center')

    ax1.text(2.5, 0.4, "• En haut : PV = PA + Bénéfice\n• En bas : Bénéfice = PV − PA", 
             fontsize=8.5, fontweight='bold', color='#333333', ha='center')

    # Triangle 2 : Budget Familial
    ax2.text(2.5, 3.85, "2. BUDGET FAMILIAL", fontsize=11, fontweight='bold', ha='center', color='#1F4E79')
    tri2 = patches.Polygon([[0.5, 0.8], [4.5, 0.8], [2.5, 3.4]], closed=True, 
                           facecolor='#E8F5E9', edgecolor='#2E7D32', lw=2)
    ax2.add_patch(tri2)
    ax2.plot([1.5, 3.5], [2.1, 2.1], color='#2E7D32', lw=2)
    ax2.plot([2.5, 2.5], [0.8, 2.1], color='#2E7D32', lw=2)

    ax2.text(2.5, 2.6, "GAINS TOTAUX (Revenus)", fontsize=8.5, fontweight='bold', color='#1B5E20', ha='center')
    ax2.text(1.5, 1.35, "Dépenses\n(Sorties)", fontsize=8, fontweight='bold', color='#C2185B', ha='center')
    ax2.text(3.5, 1.35, "Épargne\n(Économies)", fontsize=8, fontweight='bold', color='#0D47A1', ha='center')

    ax2.text(2.5, 0.4, "• En haut : Gains = Dépenses + Épargne\n• En bas : Épargne = Gains − Dépenses", 
             fontsize=8.5, fontweight='bold', color='#333333', ha='center')

    fig.savefig("assets_new/triangles_magiques_economie.png", dpi=200, bbox_inches='tight')
    plt.close(fig)

# 5. Étapes de résolution de problème
def create_problem_steps():
    fig, ax = plt.subplots(figsize=(10, 3.6), dpi=200)
    ax.set_xlim(0, 10)
    ax.set_ylim(0, 3.6)
    ax.axis('off')

    ax.text(5, 3.3, "MÉTHODE OFFICIELLE DE RÉSOLUTION DE PROBLÈMES EN 4 ÉTAPES", 
            fontsize=12, fontweight='bold', ha='center', color='#1F4E79')

    steps = [
        ("1. LIRE & SURLIGNER", "Lire 2 fois le texte.\nSurligner les données\net la question.", "#E3F2FD", "#1565C0"),
        ("2. FAIRE UN CROQUIS", "Dessiner la situation\n(terrain, sacs, billets,\nschéma à flèches).", "#FFF3E0", "#E65100"),
        ("3. CALCULER (3 colonnes)", "Solutions | Résultats | Opérations.\nPoser les calculs\navec les retenues.", "#E8F5E9", "#2E7D32"),
        ("4. VÉRIFIER & COHÉRENCE", "Vérifier l'unité (Ar, m, kg)\net si le résultat est\nlogique et raisonnable.", "#FCE4EC", "#C2185B")
    ]

    for idx, (title, desc, bg, border) in enumerate(steps):
        x = 0.4 + idx * 2.38
        rect = patches.FancyBboxPatch((x, 0.4), 2.15, 2.4, boxstyle="round,pad=0.1", 
                                      facecolor=bg, edgecolor=border, lw=2)
        ax.add_patch(rect)
        ax.text(x + 1.075, 2.45, title, fontsize=8.5, fontweight='bold', color=border, ha='center')
        ax.text(x + 1.075, 1.35, desc, fontsize=7.5, color='#222222', ha='center', va='center')
        if idx < 3:
            ax.annotate("", xy=(x + 2.38, 1.6), xytext=(x + 2.15, 1.6),
                        arrowprops=dict(arrowstyle="->", color="#888888", lw=2))

    fig.savefig("assets_new/etape_resolution_probleme.png", dpi=200, bbox_inches='tight')
    plt.close(fig)

# 6. Rectangle coté
def create_rectangle_schema():
    fig, ax = plt.subplots(figsize=(8, 4.2), dpi=200)
    ax.set_xlim(0, 10)
    ax.set_ylim(0, 5)
    ax.axis('off')

    ax.text(5, 4.6, "LE RECTANGLE : PÉRIMÈTRE ET SURFACE", fontsize=12, fontweight='bold', ha='center', color='#1F4E79')

    # Draw Rectangle ABCD
    rect = patches.Rectangle((1.5, 1.2), 4.5, 2.5, facecolor='#E3F2FD', edgecolor='#0D47A1', lw=2)
    ax.add_patch(rect)

    # Right angles
    for (x, y) in [(1.5, 1.2), (6.0, 1.2), (6.0, 3.7), (1.5, 3.7)]:
        dx = 0.3 if x == 1.5 else -0.3
        dy = 0.3 if y == 1.2 else -0.3
        ax.plot([x, x+dx, x+dx], [y+dy, y+dy, y], color='#C00000', lw=1.5)

    ax.text(1.3, 1.0, "A", fontsize=11, fontweight='bold', color='#0D47A1')
    ax.text(6.1, 1.0, "B", fontsize=11, fontweight='bold', color='#0D47A1')
    ax.text(6.1, 3.8, "C", fontsize=11, fontweight='bold', color='#0D47A1')
    ax.text(1.3, 3.8, "D", fontsize=11, fontweight='bold', color='#0D47A1')

    # Dimensions
    ax.text(3.75, 0.75, "Longueur (L)", fontsize=10, fontweight='bold', color='#0D47A1', ha='center')
    ax.text(0.65, 2.45, "Largeur (l)", fontsize=10, fontweight='bold', color='#0D47A1', ha='center', rotation=90)
    ax.text(3.75, 2.45, "SURFACE\nS = L × l", fontsize=11, fontweight='bold', color='#1565C0', ha='center', va='center')

    # Formulas card on the right
    f_box = patches.FancyBboxPatch((6.6, 0.8), 3.0, 3.3, boxstyle="round,pad=0.1", 
                                   facecolor='#F5F5F5', edgecolor='#BDBDBD', lw=1.5)
    ax.add_patch(f_box)
    ax.text(8.1, 3.8, "FORMULES CLÉS", fontsize=10, fontweight='bold', color='#C00000', ha='center')
    ax.text(8.1, 3.2, "• Demi-périmètre (p) :\np = L + l", fontsize=8.5, color='#222222', ha='center')
    ax.text(8.1, 2.4, "• Périmètre total (P) :\nP = (L + l) × 2\nP = p × 2", fontsize=8.5, color='#222222', ha='center')
    ax.text(8.1, 1.5, "• Longueur / Largeur :\nL = p − l  |  l = p − L", fontsize=8.5, color='#222222', ha='center')

    fig.savefig("assets_new/schema_rectangle_cote.png", dpi=200, bbox_inches='tight')
    plt.close(fig)

# 7. Carré quadrillage
def create_carre_schema():
    fig, ax = plt.subplots(figsize=(8, 4.2), dpi=200)
    ax.set_xlim(0, 10)
    ax.set_ylim(0, 5)
    ax.axis('off')

    ax.text(5, 4.6, "LE CARRÉ : 4 CÔTÉS ÉGAUX ET QUADRILLAGE", fontsize=12, fontweight='bold', ha='center', color='#1F4E79')

    # Draw Square with grid 4x4
    c_x, c_y, size = 1.5, 1.0, 3.2
    rect = patches.Rectangle((c_x, c_y), size, size, facecolor='#E8F5E9', edgecolor='#2E7D32', lw=2.5)
    ax.add_patch(rect)

    # Grid
    for k in range(1, 4):
        ax.plot([c_x + k*size/4, c_x + k*size/4], [c_y, c_y + size], color='#A5D6A7', lw=1, ls='--')
        ax.plot([c_x, c_x + size], [c_y + k*size/4, c_y + k*size/4], color='#A5D6A7', lw=1, ls='--')

    # Equal side ticks
    for mid in [(c_x + size/2, c_y), (c_x + size/2, c_y + size), (c_x, c_y + size/2), (c_x + size, c_y + size/2)]:
        ax.plot([mid[0]-0.1, mid[0]+0.1], [mid[1]-0.1, mid[1]+0.1], color='#C00000', lw=2)

    ax.text(c_x + size/2, c_y - 0.35, "côté (c)", fontsize=10, fontweight='bold', color='#2E7D32', ha='center')
    ax.text(c_x + size/2, c_y + size/2, "SURFACE\nS = c × c", fontsize=11, fontweight='bold', color='#1B5E20', ha='center', va='center')

    # Right side box
    f_box = patches.FancyBboxPatch((5.8, 0.8), 3.8, 3.4, boxstyle="round,pad=0.1", 
                                   facecolor='#F5F5F5', edgecolor='#BDBDBD', lw=1.5)
    ax.add_patch(f_box)
    ax.text(7.7, 3.85, "PROPRIÉTÉS ET FORMULES", fontsize=9.5, fontweight='bold', color='#1E7B34', ha='center')
    ax.text(7.7, 3.2, "• 4 côtés égaux et 4 angles droits.", fontsize=8.5, color='#222222', ha='center')
    ax.text(7.7, 2.5, "• Périmètre :\nP = côté × 4", fontsize=9, fontweight='bold', color='#0D47A1', ha='center')
    ax.text(7.7, 1.8, "• Côté à partir du périmètre :\ncôté = Périmètre ÷ 4", fontsize=9, fontweight='bold', color='#C2185B', ha='center')
    ax.text(7.7, 1.15, "• Surface :\nSurface = côté × côté", fontsize=9, fontweight='bold', color='#1E7B34', ha='center')

    fig.savefig("assets_new/schema_carre_quadrillage.png", dpi=200, bbox_inches='tight')
    plt.close(fig)

# 8. Triangle rectangle
def create_triangle_schema():
    fig, ax = plt.subplots(figsize=(8, 4.2), dpi=200)
    ax.set_xlim(0, 10)
    ax.set_ylim(0, 5)
    ax.axis('off')

    ax.text(5, 4.6, "LE TRIANGLE RECTANGLE : LA MOITIÉ D'UN RECTANGLE", fontsize=11.5, fontweight='bold', ha='center', color='#1F4E79')

    # Draw right triangle
    t_x, t_y, b, h = 1.5, 1.2, 4.2, 2.8
    tri = patches.Polygon([[t_x, t_y], [t_x + b, t_y], [t_x, t_y + h]], closed=True,
                          facecolor='#FFF3E0', edgecolor='#E65100', lw=2.5)
    ax.add_patch(tri)

    # Dotted complementary triangle making the full rectangle
    tri_dot = patches.Polygon([[t_x + b, t_y], [t_x + b, t_y + h], [t_x, t_y + h]], closed=True,
                              facecolor='#F5F5F5', edgecolor='#9E9E9E', lw=1.5, ls=':')
    ax.add_patch(tri_dot)

    # Right angle marker
    ax.plot([t_x, t_x+0.3, t_x+0.3], [t_y+0.3, t_y+0.3, t_y], color='#C00000', lw=1.5)

    ax.text(t_x + b/2, t_y - 0.4, "Base (b)", fontsize=10, fontweight='bold', color='#E65100', ha='center')
    ax.text(t_x - 0.4, t_y + h/2, "Hauteur (h)", fontsize=10, fontweight='bold', color='#E65100', ha='center', rotation=90)
    ax.text(t_x + b/3, t_y + h/3, "SURFACE\n(b × h) ÷ 2", fontsize=10.5, fontweight='bold', color='#BF360C', ha='center', va='center')

    # Right box
    f_box = patches.FancyBboxPatch((6.4, 0.8), 3.3, 3.4, boxstyle="round,pad=0.1", 
                                   facecolor='#F5F5F5', edgecolor='#BDBDBD', lw=1.5)
    ax.add_patch(f_box)
    ax.text(8.05, 3.85, "ASTUCE MNÉMOTECHNIQUE", fontsize=9.5, fontweight='bold', color='#C00000', ha='center')
    ax.text(8.05, 3.1, "« On calcule la surface\ncomme un rectangle,\npuis on coupe en deux ! »", 
            fontsize=8.5, style='italic', color='#333333', ha='center')
    ax.text(8.05, 2.0, "Formule de la surface :\nS = (Base × Hauteur) ÷ 2", 
            fontsize=9, fontweight='bold', color='#E65100', ha='center')
    ax.text(8.05, 1.15, "Exemple : b = 6 cm, h = 4 cm\nS = (6 × 4) ÷ 2 = 12 cm²", 
            fontsize=8, color='#1F4E79', ha='center')

    fig.savefig("assets_new/schema_triangle_rectangle.png", dpi=200, bbox_inches='tight')
    plt.close(fig)

# 9. Cercle et éléments
def create_cercle_schema():
    fig, ax = plt.subplots(figsize=(8, 4.2), dpi=200)
    ax.set_xlim(0, 10)
    ax.set_ylim(0, 5)
    ax.axis('off')

    ax.text(5, 4.6, "LE CERCLE : CENTRE, RAYON ET DIAMÈTRE", fontsize=12, fontweight='bold', ha='center', color='#1F4E79')

    # Circle
    center = (3.2, 2.4)
    radius = 1.6
    circle = patches.Circle(center, radius, facecolor='#E1F5FE', edgecolor='#0288D1', lw=2)
    ax.add_patch(circle)

    # Center O
    ax.plot(center[0], center[1], 'o', color='#C00000', ms=5)
    ax.text(center[0]-0.25, center[1]+0.15, "O", fontsize=10, fontweight='bold', color='#C00000')

    # Radius (O to top-right)
    ax.plot([center[0], center[0] + radius*np.cos(np.pi/4)], [center[1], center[1] + radius*np.sin(np.pi/4)], color='#1E7B34', lw=2)
    ax.text(center[0] + 0.6, center[1] + 0.8, "Rayon (r)", fontsize=9, fontweight='bold', color='#1E7B34')

    # Diameter (horizontal line across center)
    ax.plot([center[0]-radius, center[0]+radius], [center[1], center[1]], color='#C2185B', lw=2, ls='--')
    ax.text(center[0], center[1]-0.35, "Diamètre (D)", fontsize=9, fontweight='bold', color='#C2185B', ha='center')

    # Right side formulas
    f_box = patches.FancyBboxPatch((5.8, 0.8), 3.8, 3.4, boxstyle="round,pad=0.1", 
                                   facecolor='#F5F5F5', edgecolor='#BDBDBD', lw=1.5)
    ax.add_patch(f_box)
    ax.text(7.7, 3.85, "RELATIONS FONDAMENTALES", fontsize=9.5, fontweight='bold', color='#0288D1', ha='center')
    ax.text(7.7, 3.1, "• Diamètre = Rayon × 2\n(D = 2 × r)", fontsize=9, fontweight='bold', color='#C2185B', ha='center')
    ax.text(7.7, 2.1, "• Rayon = Diamètre ÷ 2\n(r = D ÷ 2)", fontsize=9, fontweight='bold', color='#1E7B34', ha='center')
    ax.text(7.7, 1.15, "Exemple : Si D = 18 cm,\nalors r = 18 ÷ 2 = 9 cm.", fontsize=8.5, color='#333333', ha='center')

    fig.savefig("assets_new/schema_cercle_elements.png", dpi=200, bbox_inches='tight')
    plt.close(fig)

# 10. Cube 3D et Patron
def create_cube_schema():
    fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(10, 4.2), dpi=200)
    for ax in [ax1, ax2]:
        ax.set_xlim(0, 5)
        ax.set_ylim(0, 4.5)
        ax.axis('off')

    # Cube 3D (perspective)
    ax1.text(2.5, 4.15, "CUBE EN 3D", fontsize=11, fontweight='bold', ha='center', color='#1F4E79')
    # Front face
    p_front = patches.Rectangle((0.8, 0.8), 2.2, 2.2, facecolor='#E3F2FD', edgecolor='#0D47A1', lw=2)
    ax1.add_patch(p_front)
    # Top face
    top_poly = patches.Polygon([[0.8, 3.0], [1.7, 3.9], [3.9, 3.9], [3.0, 3.0]], closed=True,
                               facecolor='#BBDEFB', edgecolor='#0D47A1', lw=2)
    ax1.add_patch(top_poly)
    # Right face
    right_poly = patches.Polygon([[3.0, 0.8], [3.9, 1.7], [3.9, 3.9], [3.0, 3.0]], closed=True,
                                 facecolor='#90CAF9', edgecolor='#0D47A1', lw=2)
    ax1.add_patch(right_poly)
    # Dotted hidden lines
    ax1.plot([0.8, 1.7], [0.8, 1.7], color='#1976D2', lw=1.5, ls=':')
    ax1.plot([1.7, 3.9], [1.7, 1.7], color='#1976D2', lw=1.5, ls=':')
    ax1.plot([1.7, 1.7], [1.7, 3.9], color='#1976D2', lw=1.5, ls=':')

    ax1.text(2.5, 0.3, "• 6 faces carrées égales\n• 12 arêtes égales  • 8 sommets", 
             fontsize=8.5, fontweight='bold', color='#0D47A1', ha='center')

    # Patron en croix
    ax2.text(2.5, 4.15, "PATRON DÉPLIÉ (EN CROIX)", fontsize=11, fontweight='bold', ha='center', color='#1F4E79')
    s = 0.7
    ox, oy = 1.2, 0.8
    # 4 vertical squares
    for k in range(4):
        ax2.add_patch(patches.Rectangle((ox + s, oy + k*s), s, s, facecolor='#E8F5E9', edgecolor='#2E7D32', lw=1.5))
    # Left and right squares
    ax2.add_patch(patches.Rectangle((ox, oy + 2*s), s, s, facecolor='#C8E6C9', edgecolor='#2E7D32', lw=1.5))
    ax2.add_patch(patches.Rectangle((ox + 2*s, oy + 2*s), s, s, facecolor='#C8E6C9', edgecolor='#2E7D32', lw=1.5))

    ax2.text(2.5, 0.3, "6 carrés identiques qui se replient\npour former le cube fermé.", 
             fontsize=8.5, fontweight='bold', color='#2E7D32', ha='center')

    fig.savefig("assets_new/schema_cube_3d_patron.png", dpi=200, bbox_inches='tight')
    plt.close(fig)

# 11. Parallélépipède 3D et Patron
def create_cuboid_schema():
    fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(10, 4.2), dpi=200)
    for ax in [ax1, ax2]:
        ax.set_xlim(0, 5)
        ax.set_ylim(0, 4.5)
        ax.axis('off')

    # Pavé droit 3D
    ax1.text(2.5, 4.15, "PARALLÉLÉPIPÈDE (PAVÉ DROIT)", fontsize=10.5, fontweight='bold', ha='center', color='#1F4E79')
    # Front face
    ax1.add_patch(patches.Rectangle((0.6, 0.9), 2.6, 1.6, facecolor='#FFF3E0', edgecolor='#E65100', lw=2))
    # Top face
    top_p = patches.Polygon([[0.6, 2.5], [1.5, 3.5], [4.1, 3.5], [3.2, 2.5]], closed=True,
                            facecolor='#FFE0B2', edgecolor='#E65100', lw=2)
    ax1.add_patch(top_p)
    # Right face
    r_p = patches.Polygon([[3.2, 0.9], [4.1, 1.9], [4.1, 3.5], [3.2, 2.5]], closed=True,
                          facecolor='#FFCC80', edgecolor='#E65100', lw=2)
    ax1.add_patch(r_p)

    ax1.text(2.5, 0.3, "• 6 faces rectangulaires (égales 2 à 2)\n• 12 arêtes  • 8 sommets", 
             fontsize=8.5, fontweight='bold', color='#E65100', ha='center')

    # Patron déplié
    ax2.text(2.5, 4.15, "PATRON DÉPLIÉ", fontsize=11, fontweight='bold', ha='center', color='#1F4E79')
    ax2.add_patch(patches.Rectangle((1.5, 0.8), 2.0, 0.6, facecolor='#FFF3E0', edgecolor='#E65100', lw=1.5))
    ax2.add_patch(patches.Rectangle((1.5, 1.4), 2.0, 1.0, facecolor='#FFE0B2', edgecolor='#E65100', lw=1.5))
    ax2.add_patch(patches.Rectangle((1.5, 2.4), 2.0, 0.6, facecolor='#FFF3E0', edgecolor='#E65100', lw=1.5))
    ax2.add_patch(patches.Rectangle((1.5, 3.0), 2.0, 1.0, facecolor='#FFE0B2', edgecolor='#E65100', lw=1.5))
    # Lateral
    ax2.add_patch(patches.Rectangle((0.7, 1.4), 0.8, 1.0, facecolor='#FFCC80', edgecolor='#E65100', lw=1.5))
    ax2.add_patch(patches.Rectangle((3.5, 1.4), 0.8, 1.0, facecolor='#FFCC80', edgecolor='#E65100', lw=1.5))

    ax2.text(2.5, 0.3, "Les 3 paires de rectangles identiques\nsont identifiées par la même couleur.", 
             fontsize=8.5, fontweight='bold', color='#BF360C', ha='center')

    fig.savefig("assets_new/schema_parallelepipede_3d_patron.png", dpi=200, bbox_inches='tight')
    plt.close(fig)

# 12. Cadran horloge
def create_clock_schema():
    fig, ax = plt.subplots(figsize=(8, 4.2), dpi=200)
    ax.set_xlim(0, 10)
    ax.set_ylim(0, 5)
    ax.axis('off')

    ax.text(5, 4.6, "LIRE L'HEURE ET CONVERTIR LES DURÉES", fontsize=12, fontweight='bold', ha='center', color='#1F4E79')

    # Clock dial
    c = (3.0, 2.3)
    r = 1.7
    circle = patches.Circle(c, r, facecolor='#FAFAFA', edgecolor='#333333', lw=2.5)
    ax.add_patch(circle)

    # Hour numbers
    for h in range(1, 13):
        angle = np.pi/2 - h * (2*np.pi/12)
        hx = c[0] + 1.35 * np.cos(angle)
        hy = c[1] + 1.35 * np.sin(angle)
        ax.text(hx, hy, str(h), fontsize=9.5, fontweight='bold', ha='center', va='center', color='#111111')

    # Center dot
    ax.plot(c[0], c[1], 'o', color='#333333', ms=5)

    # Small hand (Hours - Red pointing to 8)
    ang_h = np.pi/2 - 8.35 * (2*np.pi/12)
    ax.plot([c[0], c[0] + 0.85*np.cos(ang_h)], [c[1], c[1] + 0.85*np.sin(ang_h)], color='#C00000', lw=3.5)

    # Big hand (Minutes - Blue pointing to 4 -> 20 min)
    ang_m = np.pi/2 - 4 * (2*np.pi/12)
    ax.plot([c[0], c[0] + 1.25*np.cos(ang_m)], [c[1], c[1] + 1.25*np.sin(ang_m)], color='#0D47A1', lw=2.5)

    ax.text(c[0], 0.3, "Exemple : 8 h 20 min (Matin) ou 20 h 20 min (Soir)", fontsize=8.5, fontweight='bold', color='#1F4E79', ha='center')

    # Right side conversion guide
    f_box = patches.FancyBboxPatch((5.8, 0.7), 3.8, 3.5, boxstyle="round,pad=0.1", 
                                   facecolor='#F5F5F5', edgecolor='#BDBDBD', lw=1.5)
    ax.add_patch(f_box)
    ax.text(7.7, 3.85, "CONVERSIONS DE TEMPS", fontsize=9.5, fontweight='bold', color='#1F4E79', ha='center')
    ax.text(7.7, 3.15, "• 1 jour = 24 heures\n• 1 heure = 60 minutes\n• 1 minute = 60 secondes", 
            fontsize=8.5, fontweight='bold', color='#0D47A1', ha='center')
    ax.text(7.7, 2.05, "• Heures de l'après-midi / soir :\nOn ajoute 12 h aux heures du cadran.\n(ex : 3 h de l'après-midi = 15 h)", 
            fontsize=8, color='#333333', ha='center')
    ax.text(7.7, 1.1, "• 2 h 15 min = (2 × 60) + 15 = 135 min", fontsize=8.5, fontweight='bold', color='#C2185B', ha='center')

    fig.savefig("assets_new/schema_cadran_horloge.png", dpi=200, bbox_inches='tight')
    plt.close(fig)

# 13. Jeux Mathématiques - Pyramide & Carré Magique
def create_games_illustration():
    fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(10, 4.2), dpi=200)
    for ax in [ax1, ax2]:
        ax.set_xlim(0, 5)
        ax.set_ylim(0, 4.5)
        ax.axis('off')

    # Carré Magique
    ax1.text(2.5, 4.15, "LE CARRÉ MAGIQUE (Somme = 15)", fontsize=10.5, fontweight='bold', ha='center', color='#1F4E79')
    grid = [[8, 1, 6], [3, 5, 7], [4, 9, 2]]
    ox, oy, sz = 1.0, 1.0, 1.0
    for r in range(3):
        for col in range(3):
            val = grid[r][col]
            # Color center 5 specially
            bg = '#FFF3E0' if val == 5 else '#E3F2FD'
            ax1.add_patch(patches.Rectangle((ox + col*sz, oy + (2-r)*sz), sz, sz, facecolor=bg, edgecolor='#0D47A1', lw=2))
            ax1.text(ox + col*sz + sz/2, oy + (2-r)*sz + sz/2, str(val), fontsize=15, fontweight='bold', color='#0D47A1', ha='center', va='center')

    ax1.text(2.5, 0.4, "Chaque ligne, colonne et diagonale\nadditionne toujours 15 !", 
             fontsize=8.5, fontweight='bold', color='#C2185B', ha='center')

    # Pyramide Additive
    ax2.text(2.5, 4.15, "LA PYRAMIDE ADDITIVE", fontsize=10.5, fontweight='bold', ha='center', color='#1F4E79')
    # 3 levels of bricks
    bw, bh = 1.0, 0.8
    # Bottom: 3 bricks
    ax2.add_patch(patches.Rectangle((1.0, 1.0), bw, bh, facecolor='#E8F5E9', edgecolor='#2E7D32', lw=2))
    ax2.add_patch(patches.Rectangle((2.0, 1.0), bw, bh, facecolor='#E8F5E9', edgecolor='#2E7D32', lw=2))
    ax2.add_patch(patches.Rectangle((3.0, 1.0), bw, bh, facecolor='#E8F5E9', edgecolor='#2E7D32', lw=2))
    ax2.text(1.5, 1.4, "15", fontsize=12, fontweight='bold', color='#2E7D32', ha='center', va='center')
    ax2.text(2.5, 1.4, "25", fontsize=12, fontweight='bold', color='#2E7D32', ha='center', va='center')
    ax2.text(3.5, 1.4, "10", fontsize=12, fontweight='bold', color='#2E7D32', ha='center', va='center')

    # Middle: 2 bricks
    ax2.add_patch(patches.Rectangle((1.5, 1.8), bw, bh, facecolor='#FFF3E0', edgecolor='#FF9800', lw=2))
    ax2.add_patch(patches.Rectangle((2.5, 1.8), bw, bh, facecolor='#FFF3E0', edgecolor='#FF9800', lw=2))
    ax2.text(2.0, 2.2, "40", fontsize=12, fontweight='bold', color='#E65100', ha='center', va='center')
    ax2.text(3.0, 2.2, "35", fontsize=12, fontweight='bold', color='#E65100', ha='center', va='center')

    # Top: 1 brick
    ax2.add_patch(patches.Rectangle((2.0, 2.6), bw, bh, facecolor='#FCE4EC', edgecolor='#E91E63', lw=2))
    ax2.text(2.5, 3.0, "75", fontsize=13, fontweight='bold', color='#C2185B', ha='center', va='center')

    ax2.text(2.5, 0.4, "Chaque brique est égale à la somme\ndes deux briques du dessous !", 
             fontsize=8.5, fontweight='bold', color='#2E7D32', ha='center')

    fig.savefig("assets_new/schema_jeux_pyramide_carremagique.png", dpi=200, bbox_inches='tight')
    plt.close(fig)

# Run all
create_fraction_butterfly()
create_fraction_quantity()
create_conversion_table()
create_economy_triangles()
create_problem_steps()
create_rectangle_schema()
create_carre_schema()
create_triangle_schema()
create_cercle_schema()
create_cube_schema()
create_cuboid_schema()
create_clock_schema()
create_games_illustration()

print("All 13 pedagogical figures generated successfully in assets_new/!")
