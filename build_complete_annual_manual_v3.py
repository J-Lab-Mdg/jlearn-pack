# -*- coding: utf-8 -*-
"""
Générateur Officiel du Manuel Annuel Complet SVT 9e (J-Learn v20)
Reconstruit avec rigueur absolue selon les directives validées :
- Fiche de préparation 6 colonnes avec méta-table bordures invisibles (2 zones)
- Leçon officielle (Titre LEÇON, Titre Séance Rouge, Sections Vertes, Mots-clés Bleu+Gras, Schémas FR avec étiquettes)
- Exercices d'évaluation strictement en Noir pur
- Corrigé avec barème détaillé
- Avant-propos mentionnant expressément le PE (Programme d'Études), le RAPE, la FRA et la FRM
- Mode d'emploi détaillé avec code couleur officiel
- Tableaux de bord par Unité (I, II, III)
- Annexe I : 5 Sujets d'Examen Types Officiels (Format CEPE) avec corrigés et barèmes sur 20 points
- Annexe II : Répertoire Général des Formules, Protocoles d'Expériences et 18 Schémas Scientifiques de 9e
- 1 seul w:sectPr et 0 ns0.
"""

import os
import sys
import docx
from docx import Document
from docx.shared import Pt, Cm, RGBColor, Inches
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT, WD_ALIGN_VERTICAL
from docx.oxml import OxmlElement, parse_xml
from docx.oxml.ns import nsdecls, qn

from constants import (
    C_RED, C_GREEN, C_BLUE, C_CORR, C_DARK, C_EMERALD, C_GRAY_TEXT,
    HEX_HDR_BG, HEX_SUBHDR_BG, HEX_SECTION_BG
)
from build_full_svt_9e_t1 import (
    add_fiche_header_and_meta, add_deroulement_table_6cols,
    add_lesson_page_skill, add_exercises_and_answers_skill,
    add_p, add_run, add_page_break,
    set_cell_margins, set_cell_shading, set_cell_border_none, C_BLACK
)
from data_sessions_all import sessions_t1
from data_review_and_exam import review_session_10, exam_session_11
from data_sessions_t2_full import sessions_t2, review_session_20, exam_session_21
from data_sessions_t3_full import sessions_t3, review_session_31, exam_session_32, exam_session_33
from data_annexes_cepe import official_exams_5, formulas_and_schemes_annex

def build_full_v3():
    doc = Document()
    
    # 1 seul sectPr pour tout le manuel
    section = doc.sections[0]
    section.top_margin = Cm(2.0)
    section.bottom_margin = Cm(2.0)
    section.left_margin = Cm(2.0)
    section.right_margin = Cm(2.0)
    section.page_width = Cm(21.0)
    section.page_height = Cm(29.7)
    
    normal = doc.styles['Normal']
    normal.font.name = 'Times New Roman'
    normal.font.size = Pt(10)
    normal.font.color.rgb = C_DARK

    # =========================================================================
    # 1. COUVERTURE DU MANUEL ANNUEL
    # =========================================================================
    add_p(doc, "COLLECTION J-LEARN", bold=True, size=16, color=C_EMERALD, align=WD_ALIGN_PARAGRAPH.CENTER, space_before=16, space_after=4)
    add_p(doc, "MANUEL SCOLAIRE ANNUEL COMPLET — ÉDITION NATIONALE MADAGASCAR", bold=False, size=10.5, color=C_GRAY_TEXT, align=WD_ALIGN_PARAGRAPH.CENTER, space_before=0, space_after=20)
    
    add_p(doc, "SCIENCES DE LA VIE ET DE LA TERRE", bold=True, size=22, color=C_DARK, align=WD_ALIGN_PARAGRAPH.CENTER, space_before=6, space_after=4)
    add_p(doc, "CONNAISSANCES USUELLES & SCIENCES D'OBSERVATION", bold=True, size=13, color=C_GREEN, align=WD_ALIGN_PARAGRAPH.CENTER, space_before=0, space_after=8)
    add_p(doc, "CLASSE DE 9e (CE1)", bold=True, size=18, color=C_RED, align=WD_ALIGN_PARAGRAPH.CENTER, space_before=0, space_after=14)
    
    add_p(doc, "PROGRAMME ANNUEL INTÉGRAL — 33 SÉANCES HEBDOMADAIRES", bold=True, size=11, color=C_BLUE, align=WD_ALIGN_PARAGRAPH.CENTER, space_before=2, space_after=12)
    
    if os.path.exists("squelette_humain.png"):
        p_cov = doc.add_paragraph()
        p_cov.alignment = WD_ALIGN_PARAGRAPH.CENTER
        p_cov.paragraph_format.space_before = Pt(2)
        p_cov.paragraph_format.space_after = Pt(6)
        run_cov = p_cov.add_run()
        run_cov.add_picture("squelette_humain.png", width=Inches(2.4))
    
    add_p(doc, "Conforme au Programme d'Études (PE), au Référentiel RAPE et aux progressions FRA / FRM", italic=True, size=9.5, color=C_DARK, align=WD_ALIGN_PARAGRAPH.CENTER, space_before=4, space_after=2)
    add_p(doc, "Fiches de préparation à 6 colonnes — Leçons illustrées en français — Exercices d'évaluation en noir — Corrigés détaillés", bold=True, size=9, color=C_EMERALD, align=WD_ALIGN_PARAGRAPH.CENTER, space_before=0, space_after=2)
    add_p(doc, "Annexes : 5 Sujets d'Examen Types CEPE Corrigés + Répertoire Général des Formules et 18 Schémas", bold=True, size=9, color=C_BLUE, align=WD_ALIGN_PARAGRAPH.CENTER, space_before=0, space_after=8)
    add_p(doc, "Ministère de l'Éducation Nationale — Madagascar • Collection J-Learn 2026", size=8.5, color=C_GRAY_TEXT, align=WD_ALIGN_PARAGRAPH.CENTER, space_before=8, space_after=0)

    # =========================================================================
    # 2. AVANT-PROPOS
    # =========================================================================
    add_page_break(doc)
    add_p(doc, "AVANT-PROPOS", bold=True, size=14, color=C_EMERALD, align=WD_ALIGN_PARAGRAPH.CENTER, space_before=8, space_after=8)
    
    add_p(doc, "Le présent manuel « Sciences de la Vie et de la Terre — Connaissances Usuelles 9e » a été conçu pour offrir aux enseignants et aux élèves de l'école primaire malgache un outil pédagogique d'excellence, rigoureux et exhaustif. Il est entièrement adossé au Programme d'Études (PE) et au Référentiel des Apprentissages et Programmes d'Enseignement (RAPE), ainsi qu'aux Fiches de Répartition Annuelle (FRA) et Mensuelle (FRM) publiées par le Ministère de l'Éducation Nationale de Madagascar.", space_before=2, space_after=5)
    
    add_p(doc, "Ce manuel réunit pour la première fois en un volume unique l'ensemble des 33 séances hebdomadaires réparties en trois grandes unités trimestrielles :", space_before=2, space_after=5)
    
    p = doc.add_paragraph()
    p.paragraph_format.left_indent = Cm(0.6)
    p.paragraph_format.space_after = Pt(2)
    add_run(p, "• Unité I (Premier Trimestre — Mois 1 à 3) : ", bold=True, color=C_EMERALD)
    add_run(p, "Le corps humain, le squelette, les membres supérieurs et inférieurs, les articulations et les muscles, l'hygiène cutanée, l'œil et la vision, l'oreille et l'audition (Séances 1 à 11).")

    p = doc.add_paragraph()
    p.paragraph_format.left_indent = Cm(0.6)
    p.paragraph_format.space_after = Pt(2)
    add_run(p, "• Unité II (Deuxième Trimestre — Mois 4 à 6) : ", bold=True, color=C_EMERALD)
    add_run(p, "La langue et le goût, les sortes de dents et la carie, l'appareil digestif et les repas équilibrés, les parasites intestinaux, les trois états de l'eau, la potabilité de l'eau et l'air respirable (Séances 12 à 21).")

    p = doc.add_paragraph()
    p.paragraph_format.left_indent = Cm(0.6)
    p.paragraph_format.space_after = Pt(2)
    add_run(p, "• Unité III (Troisième Trimestre — Mois 7 à 9) : ", bold=True, color=C_EMERALD)
    add_run(p, "L'appareil respiratoire, l'hygiène pulmonaire et la vaccination infantile (BCG, PEV), la lutte contre le paludisme (PNLP, MILDA), les parties de la plante et de l'arbre, la protection des sols contre l'érosion, l'habitat sain et les élevages utiles (poule et zébu) (Séances 22 à 32).")

    p = doc.add_paragraph()
    p.paragraph_format.left_indent = Cm(0.6)
    p.paragraph_format.space_after = Pt(6)
    add_run(p, "• Épreuve Finale Annuelle (Séance 33) : ", bold=True, color=C_RED)
    add_run(p, "Grand Examen Récapitulatif Annuel de 9e sur 20 points avec barème officiel et corrigé modèle intégral.")

    # =========================================================================
    # 3. MODE D'EMPLOI ET CODE COULEUR OFFICIEL
    # =========================================================================
    add_p(doc, "MODE D'EMPLOI ET CHARTE GRAPHIQUE", bold=True, size=13, color=C_EMERALD, align=WD_ALIGN_PARAGRAPH.CENTER, space_before=8, space_after=6)
    
    add_p(doc, "Chaque séance d'apprentissage du manuel comprend obligatoirement quatre volets méthodologiques distincts :", space_before=2, space_after=4)
    
    p = doc.add_paragraph()
    p.paragraph_format.left_indent = Cm(0.6)
    p.paragraph_format.space_after = Pt(2)
    add_run(p, "1. La Fiche de Préparation : ", bold=True, color=C_DARK)
    add_run(p, "Composée d'une méta-table d'en-tête à bordures invisibles (2 zones d'informations) et d'une table de déroulement à 6 colonnes normalisées (Étapes & Durée, Enseignant, Apprenants, Technique & Stratégie, Support & Matériel, Observation). La durée n'est affichée que sur les 3 grandes étapes (I. Révision 5 min, II. Nouvelle leçon 30 min, III. Évaluation 10 min).")

    p = doc.add_paragraph()
    p.paragraph_format.left_indent = Cm(0.6)
    p.paragraph_format.space_after = Pt(2)
    add_run(p, "2. La Leçon Illustrée : ", bold=True, color=C_DARK)
    add_run(p, "Texte de référence structuré avec titre en rouge, sous-sections numérotées en vert, mots-clés en bleu et gras, accompagné d'un schéma scientifique légendé en langue française.")

    p = doc.add_paragraph()
    p.paragraph_format.left_indent = Cm(0.6)
    p.paragraph_format.space_after = Pt(2)
    add_run(p, "3. Les Exercices d'Évaluation : ", bold=True, color=C_DARK)
    add_run(p, "Composés strictement en noir pur (sans couleur parasite), prêts pour la reprographie et les photocopies scolaires, notés sur 10 points.")

    p = doc.add_paragraph()
    p.paragraph_format.left_indent = Cm(0.6)
    p.paragraph_format.space_after = Pt(6)
    add_run(p, "4. Le Corrigé Modèle : ", bold=True, color=C_DARK)
    add_run(p, "Réservé au maître avec réponses exhaustives et barème d'attribution des points.")

    # Code couleur
    add_p(doc, "Code couleur officiel de la collection :", bold=True, size=10.5, color=C_DARK, space_before=4, space_after=2)
    add_p(doc, "• Titres de Leçon : Rouge (#DC3545)", bold=True, color=C_RED, space_before=0, space_after=1)
    add_p(doc, "• Sous-titres et Sections : Vert (#198754)", bold=True, color=C_GREEN, space_before=0, space_after=1)
    add_p(doc, "• Mots-clés scientifiques dans la leçon : Bleu + Gras (#0B5ED7)", bold=True, color=C_BLUE, space_before=0, space_after=1)
    add_p(doc, "• Exercices d'évaluation élèves : Noir pur (#000000)", bold=True, color=C_BLACK, space_before=0, space_after=1)
    add_p(doc, "• Corrigés et barèmes : Bordeaux / Rose foncé (#880E4F)", bold=True, color=C_CORR, space_before=0, space_after=6)

    # =========================================================================
    # 4. TABLE DES MATIÈRES INTERACTIVE
    # =========================================================================
    add_page_break(doc)
    add_p(doc, "SOMMAIRE GÉNÉRAL DU MANUEL ANNUEL", bold=True, size=13, color=C_EMERALD, align=WD_ALIGN_PARAGRAPH.CENTER, space_before=6, space_after=6)
    
    t_som = doc.add_table(rows=37, cols=2)
    t_som.alignment = WD_TABLE_ALIGNMENT.CENTER
    t_som.autofit = False
    t_som.rows[0].cells[0].width = Cm(13.0)
    t_som.rows[0].cells[1].width = Cm(4.0)
    
    p = t_som.rows[0].cells[0].paragraphs[0]
    add_run(p, "Contenu Notionnel / Séances & Annexes", bold=True, size=9)
    set_cell_shading(t_som.rows[0].cells[0], HEX_HDR_BG)
    
    p = t_som.rows[0].cells[1].paragraphs[0]
    add_run(p, "Période & Type", bold=True, size=9)
    p.alignment = WD_ALIGN_PARAGRAPH.RIGHT
    set_cell_shading(t_som.rows[0].cells[1], HEX_HDR_BG)
    
    annual_sommaire = [
        # Trimestre 1
        ("Séance 1 : Les différentes parties du corps humain", "T1 — Mois 1 (S1)"),
        ("Séance 2 : Les membres supérieurs et leurs articulations", "T1 — Mois 1 (S2)"),
        ("Séance 3 : Hygiène, sécurité et santé des membres supérieurs", "T1 — Mois 1 (S3)"),
        ("Séance 4 : Les membres inférieurs : anatomie, hygiène et sécurité", "T1 — Mois 2 (S4)"),
        ("Séance 5 : La peau : constitution et rôles", "T1 — Mois 2 (S5)"),
        ("Séance 6 : Les parasites et l'hygiène de la peau", "T1 — Mois 2 (S6)"),
        ("Séance 7 : L'œil : anatomie et fonctionnement de la vision", "T1 — Mois 3 (S7)"),
        ("Séance 8 : Protection et hygiène des yeux", "T1 — Mois 3 (S8)"),
        ("Séance 9 : L'oreille : audition, hygiène et soins", "T1 — Mois 3 (S9)"),
        ("Séance 10 : Révision générale — Premier Trimestre", "T1 — Bilan"),
        ("Séance 11 : Sujet d'examen type et Corrigé — Trimestre 1 (20 pts)", "T1 — Examen"),
        # Trimestre 2
        ("Séance 12 : La langue : anatomie, goût et parole", "T2 — Mois 4 (S10)"),
        ("Séance 13 : Les différentes sortes de dents et leurs rôles", "T2 — Mois 4 (S11)"),
        ("Séance 14 : L'hygiène des dents et la prévention des caries", "T2 — Mois 4 (S12)"),
        ("Séance 15 : L'appareil digestif et le trajet des aliments", "T2 — Mois 5 (S13)"),
        ("Séance 16 : L'hygiène alimentaire et la propreté des repas", "T2 — Mois 5 (S14)"),
        ("Séance 17 : Les vers et parasites intestinaux", "T2 — Mois 5 (S15)"),
        ("Séance 18 : L'eau : ses trois états et son cycle", "T2 — Mois 6 (S16)"),
        ("Séance 19 : L'eau potable et l'air que nous respirons", "T2 — Mois 6 (S17)"),
        ("Séance 20 : Révision générale — Deuxième Trimestre", "T2 — Bilan"),
        ("Séance 21 : Sujet d'examen type et Corrigé — Trimestre 2 (20 pts)", "T2 — Examen"),
        # Trimestre 3
        ("Séance 22 : L'appareil respiratoire et son fonctionnement", "T3 — Mois 7 (S18)"),
        ("Séance 23 : L'hygiène respiratoire et les maladies infantiles", "T3 — Mois 7 (S19)"),
        ("Séance 24 : Le paludisme : transmission, prévention et traitement", "T3 — Mois 8 (S20)"),
        ("Séance 25 : Les différentes parties d'une plante et d'un arbre", "T3 — Mois 8 (S21)"),
        ("Séance 26 : L'utilité des plantes pour l'alimentation et la santé", "T3 — Mois 8 (S22)"),
        ("Séance 27 : L'utilité de l'arbre : bois, sol et environnement", "T3 — Mois 8 (S23)"),
        ("Séance 28 : L'habitat sain et l'aménagement de la maison", "T3 — Mois 9 (S24)"),
        ("Séance 29 : La poule : description, variétés et élevage", "T3 — Mois 9 (S25)"),
        ("Séance 30 : Le zébu : description, utilité et entretien", "T3 — Mois 9 (S26)"),
        ("Séance 31 : Révision générale — Troisième Trimestre", "T3 — Bilan"),
        ("Séance 32 : Sujet d'examen type et Corrigé — Trimestre 3 (20 pts)", "T3 — Examen"),
        # Examen Annuel
        ("Séance 33 : Grand Examen Final Annuel et Corrigé (20 pts)", "Fin d'année 9e"),
        # Annexes
        ("Annexe I : 5 Sujets d'Examen Types Officiels (Format CEPE) Corrigés", "Évaluation Nationale"),
        ("Annexe II : Répertoire Général des Formules, Expériences & 18 Schémas", "Planches & Synthèses"),
        ("Sources Officielles et Bibliographie (Loharanom-baovao)", "Références MEN")
    ]
    
    for idx, (t_txt, p_txt) in enumerate(annual_sommaire):
        row = t_som.rows[idx+1]
        row.cells[0].width = Cm(13.0)
        row.cells[1].width = Cm(4.0)
        set_cell_margins(row.cells[0], top=22, bottom=22, left=45, right=45)
        set_cell_margins(row.cells[1], top=22, bottom=22, left=45, right=45)
        
        is_bold = "Révision" in t_txt or "Sujet d'examen" in t_txt or "Grand Examen" in t_txt or "Annexe" in t_txt
        p1 = row.cells[0].paragraphs[0]
        p1.paragraph_format.space_before = Pt(1)
        p1.paragraph_format.space_after = Pt(1)
        add_run(p1, t_txt, bold=is_bold, size=8)
        
        p2 = row.cells[1].paragraphs[0]
        p2.paragraph_format.space_before = Pt(1)
        p2.paragraph_format.space_after = Pt(1)
        p2.alignment = WD_ALIGN_PARAGRAPH.RIGHT
        add_run(p2, p_txt, italic=True, size=8, color=C_GRAY_TEXT)
        
    tblBorders = parse_xml(f'''
        <w:tblBorders {nsdecls("w")}>
            <w:top w:val="single" w:sz="4" w:space="0" w:color="CCCCCC"/>
            <w:left w:val="none" w:sz="0" w:space="0" w:color="auto"/>
            <w:bottom w:val="single" w:sz="4" w:space="0" w:color="CCCCCC"/>
            <w:right w:val="none" w:sz="0" w:space="0" w:color="auto"/>
            <w:insideH w:val="single" w:sz="4" w:space="0" w:color="EEEEEE"/>
            <w:insideV w:val="none" w:sz="0" w:space="0" w:color="auto"/>
        </w:tblBorders>
    ''')
    t_som._tbl.tblPr.append(tblBorders)

    # =========================================================================
    # 5. TABLEAUX DE BORD PAR UNITÉ
    # =========================================================================
    add_page_break(doc)
    add_p(doc, "TABLEAUX DE BORD PÉDAGOGIQUES PAR UNITÉ", bold=True, size=13, color=C_EMERALD, align=WD_ALIGN_PARAGRAPH.CENTER, space_before=6, space_after=6)
    
    units_dashboard = [
        ("UNITÉ I : LE CORPS HUMAIN, LA PEAU ET LES ORGANES DES SENS", [
            ("Mois 1 (Séances 1 à 3)", "Le corps humain, squelette, membres supérieurs, os et muscles", "3 séances", "Évaluation continue"),
            ("Mois 2 (Séances 4 à 6)", "Membres inférieurs, constitution et hygiène de la peau, gale et poux", "3 séances", "Évaluation continue"),
            ("Mois 3 (Séances 7 à 9)", "L'œil et la vision, l'oreille et l'audition, soins ORL", "3 séances", "Évaluation continue"),
            ("Bilan & Examen T1 (S10-S11)", "Révision générale Unité I + Sujet d'examen type officiel (20 pts)", "2 séances", "Examen Trimestre 1")
        ]),
        ("UNITÉ II : LA BOUCHE, LES DENTS, LA DIGESTION, L'EAU ET L'AIR", [
            ("Mois 4 (Séances 12 à 14)", "La langue et les saveurs, les sortes de dents, la carie et le brossage", "3 séances", "Évaluation continue"),
            ("Mois 5 (Séances 15 à 17)", "L'appareil digestif, hygiène alimentaire, vers et parasites intestinaux", "3 séances", "Évaluation continue"),
            ("Mois 6 (Séances 18 à 19)", "Les trois états et le cycle de l'eau, l'eau potable et l'air respirable", "2 séances", "Évaluation continue"),
            ("Bilan & Examen T2 (S20-S21)", "Révision générale Unité II + Sujet d'examen type officiel (20 pts)", "2 séances", "Examen Trimestre 2")
        ]),
        ("UNITÉ III : RESPIRATION, PALUDISME, LE MONDE VÉGÉTAL ET LES ÉLEVAGES", [
            ("Mois 7 (Séances 22 à 23)", "L'appareil respiratoire, hygiène pulmonaire et vaccination (BCG)", "2 séances", "Évaluation continue"),
            ("Mois 8 (Séances 24 à 27)", "Lutte contre le paludisme, organes des plantes et arbres, rôle anti-érosion", "4 séances", "Évaluation continue"),
            ("Mois 9 (Séances 28 à 30)", "L'habitat sain, élevage de la poule et utilité du zébu malgache", "3 séances", "Évaluation continue"),
            ("Bilan & Examens (S31-S33)", "Révision générale T3 + Examen T3 + Grand Examen Annuel (20 pts)", "3 séances", "Examen Fin d'Année")
        ])
    ]

    for u_title, u_rows in units_dashboard:
        add_p(doc, u_title, bold=True, size=10.5, color=C_EMERALD, space_before=6, space_after=3)
        t_dash = doc.add_table(rows=len(u_rows)+1, cols=4)
        t_dash.alignment = WD_TABLE_ALIGNMENT.CENTER
        t_dash.autofit = False
        t_dash.rows[0].cells[0].width = Cm(4.0)
        t_dash.rows[0].cells[1].width = Cm(8.0)
        t_dash.rows[0].cells[2].width = Cm(2.2)
        t_dash.rows[0].cells[3].width = Cm(2.8)
        
        headers = ["Période", "Notions Fondamentales", "Volume", "Évaluation"]
        for hi, htxt in enumerate(headers):
            c = t_dash.rows[0].cells[hi]
            p = c.paragraphs[0]
            add_run(p, htxt, bold=True, size=8, color=C_EMERALD)
            set_cell_shading(c, HEX_HDR_BG)
            set_cell_margins(c, top=25, bottom=25, left=40, right=40)
            
        for ri, (p_col, n_col, v_col, e_col) in enumerate(u_rows):
            row = t_dash.rows[ri+1]
            row.cells[0].width = Cm(4.0)
            row.cells[1].width = Cm(8.0)
            row.cells[2].width = Cm(2.2)
            row.cells[3].width = Cm(2.8)
            
            vals = [p_col, n_col, v_col, e_col]
            for ci, val in enumerate(vals):
                cell = row.cells[ci]
                p = cell.paragraphs[0]
                p.paragraph_format.space_before = Pt(1)
                p.paragraph_format.space_after = Pt(1)
                is_b = ci == 0 or "Examen" in val
                add_run(p, val, bold=is_b, size=7.5)
                set_cell_margins(cell, top=20, bottom=20, left=40, right=40)
                
        tblBorders = parse_xml(f'''
            <w:tblBorders {nsdecls("w")}>
                <w:top w:val="single" w:sz="4" w:space="0" w:color="0D5C3A"/>
                <w:left w:val="none" w:sz="0" w:space="0" w:color="auto"/>
                <w:bottom w:val="single" w:sz="4" w:space="0" w:color="0D5C3A"/>
                <w:right w:val="none" w:sz="0" w:space="0" w:color="auto"/>
                <w:insideH w:val="single" w:sz="4" w:space="0" w:color="EEEEEE"/>
                <w:insideV w:val="none" w:sz="0" w:space="0" w:color="auto"/>
            </w:tblBorders>
        ''')
        t_dash._tbl.tblPr.append(tblBorders)

    # =========================================================================
    # FONCTIONS DE RENDU D'UNE SÉANCE CONFORME AU SKILL
    # =========================================================================
    def render_session_full(s):
        add_page_break(doc)
        add_fiche_header_and_meta(
            doc,
            seance_num=s["seance_num"],
            titre=s["titre"],
            theme=s["theme"],
            obj=s["obj"],
            doc_ref="PE / RAPE, FRA & FRM Connaissances Usuelles 9e",
            support=s["support"],
            seance_str=f"{s['seance_num']} / 33",
            duree_str=s["duree_str"]
        )
        add_deroulement_table_6cols(
            doc,
            duree_rev=s["duree_rev"],
            rev_teacher=s["rev_teacher"],
            rev_students=s["rev_students"],
            duree_lecon=s["duree_lecon"],
            mis_teacher=s["mis_teacher"],
            mis_students=s["mis_students"],
            mis_tech=s["mis_tech"],
            mis_supp=s["mis_supp"],
            pres_teacher=s["pres_teacher"],
            pres_students=s["pres_students"],
            pres_tech=s["pres_tech"],
            pres_supp=s["pres_supp"],
            obs_teacher=s["obs_teacher"],
            obs_students=s["obs_students"],
            obs_tech=s["obs_tech"],
            obs_supp=s["obs_supp"],
            ana_q_ra_list=s["ana_q_ra_list"],
            ana_tech=s["ana_tech"],
            ana_supp=s["ana_supp"],
            syn_teacher=s["syn_teacher"],
            syn_students=s["syn_students"],
            syn_tech=s["syn_tech"],
            syn_supp=s["syn_supp"],
            app_exercises_teacher=s["app_exercises_teacher"],
            app_corriges_students=s["app_corriges_students"],
            app_tech=s["app_tech"],
            app_supp=s["app_supp"],
            duree_eval=s["duree_eval"],
            eval_exercises_teacher=s["eval_exercises_teacher"],
            eval_corriges_students=s["eval_corriges_students"],
            eval_tech=s["eval_tech"],
            eval_supp=s["eval_supp"]
        )
        add_lesson_page_skill(
            doc,
            titre_seance=f"Séance {s['seance_num']} : {s['titre']}",
            sections_list=s["lesson_sections"],
            image_path=s.get("image_path"),
            image_legend=s.get("image_legend", "")
        )
        add_exercises_and_answers_skill(
            doc,
            titre_seance=f"Séance {s['seance_num']} : {s['titre']}",
            exercices_list=s["exercices_page"],
            corriges_list=s["corriges_page"]
        )

    def render_exam_full(s):
        add_page_break(doc)
        add_p(doc, f"SÉANCE {s['seance_num']} / 33", bold=True, size=13, color=C_BLACK, align=WD_ALIGN_PARAGRAPH.CENTER, space_before=4, space_after=1)
        add_p(doc, s["titre"], bold=True, size=12, color=C_BLACK, align=WD_ALIGN_PARAGRAPH.CENTER, space_before=0, space_after=2)
        add_p(doc, f"ÉPREUVE OFFICIELLE TYPE (Barème : {s['bareme_total']})", bold=True, size=10, color=C_BLACK, align=WD_ALIGN_PARAGRAPH.CENTER, space_before=0, space_after=10)
        
        for partie in s["parties"]:
            add_p(doc, partie["titre"], bold=True, size=10.5, color=C_BLACK, space_before=6, space_after=2)
            for q in partie["questions"]:
                add_p(doc, q, size=10, color=C_BLACK, space_before=1, space_after=2)
                
        add_page_break(doc)
        add_p(doc, f"CORRIGÉ DU SUJET D'EXAMEN — SÉANCE {s['seance_num']}", bold=True, size=13, color=C_CORR, align=WD_ALIGN_PARAGRAPH.CENTER, space_before=4, space_after=2)
        add_p(doc, f"Barème officiel sur {s['bareme_total']}", bold=True, size=11, color=C_RED, align=WD_ALIGN_PARAGRAPH.CENTER, space_before=0, space_after=8)
        
        for partie in s["parties"]:
            add_p(doc, partie["titre"], bold=True, size=10.5, color=C_GREEN, space_before=6, space_after=2)
            for p_runs in partie["corriges"]:
                p = doc.add_paragraph()
                p.paragraph_format.space_before = Pt(1)
                p.paragraph_format.space_after = Pt(2)
                p.paragraph_format.line_spacing = 1.15
                for r_txt, r_bold, r_col in p_runs:
                    add_run(p, r_txt, bold=r_bold, color=r_col, size=10)

    # =========================================================================
    # TRIMESTRE 1 : SÉANCES 1 À 11
    # =========================================================================
    add_page_break(doc)
    add_p(doc, "UNITÉ I — PREMIER TRIMESTRE", bold=True, size=16, color=C_EMERALD, align=WD_ALIGN_PARAGRAPH.CENTER, space_before=18, space_after=4)
    add_p(doc, "LE CORPS HUMAIN, LA PEAU ET LES ORGANES DES SENS", bold=True, size=13, color=C_BLUE, align=WD_ALIGN_PARAGRAPH.CENTER, space_before=0, space_after=12)
    
    for s in sessions_t1:
        render_session_full(s)
    render_session_full(review_session_10)
    render_exam_full(exam_session_11)

    # =========================================================================
    # TRIMESTRE 2 : SÉANCES 12 À 21
    # =========================================================================
    add_page_break(doc)
    add_p(doc, "UNITÉ II — DEUXIÈME TRIMESTRE", bold=True, size=16, color=C_EMERALD, align=WD_ALIGN_PARAGRAPH.CENTER, space_before=18, space_after=4)
    add_p(doc, "LA BOUCHE, LES DENTS, LA DIGESTION, L'EAU ET L'AIR", bold=True, size=13, color=C_BLUE, align=WD_ALIGN_PARAGRAPH.CENTER, space_before=0, space_after=12)
    
    for s in sessions_t2:
        render_session_full(s)
    render_session_full(review_session_20)
    render_exam_full(exam_session_21)

    # =========================================================================
    # TRIMESTRE 3 : SÉANCES 22 À 32
    # =========================================================================
    add_page_break(doc)
    add_p(doc, "UNITÉ III — TROISIÈME TRIMESTRE", bold=True, size=16, color=C_EMERALD, align=WD_ALIGN_PARAGRAPH.CENTER, space_before=18, space_after=4)
    add_p(doc, "RESPIRATION, PALUDISME, LE MONDE VÉGÉTAL ET LES ANIMAUX UTILES", bold=True, size=13, color=C_BLUE, align=WD_ALIGN_PARAGRAPH.CENTER, space_before=0, space_after=12)
    
    for s in sessions_t3:
        render_session_full(s)
    render_session_full(review_session_31)
    render_exam_full(exam_session_32)

    # =========================================================================
    # SÉANCE 33 : GRAND EXAMEN ANNUEL RÉCAPITULATIF
    # =========================================================================
    render_exam_full(exam_session_33)

    # =========================================================================
    # ANNEXE I : 5 SUJETS D'EXAMEN TYPES OFFICIELS (FORMAT CEPE) & CORRIGÉS
    # =========================================================================
    add_page_break(doc)
    add_p(doc, "ANNEXE I : 5 SUJETS D'EXAMEN TYPES OFFICIELS (FORMAT CEPE)", bold=True, size=14, color=C_EMERALD, align=WD_ALIGN_PARAGRAPH.CENTER, space_before=10, space_after=2)
    add_p(doc, "ÉVALUATIONS NATIONALES TYPES — SCIENCES DE LA VIE ET DE LA TERRE 9e", bold=True, size=11, color=C_BLUE, align=WD_ALIGN_PARAGRAPH.CENTER, space_before=0, space_after=10)
    
    for ex_obj in official_exams_5:
        add_page_break(doc)
        
        # En-tête officiel (en noir pur pour impression)
        add_p(doc, "MINISTÈRE DE L'ÉDUCATION NATIONALE", bold=True, size=10, color=C_BLACK, align=WD_ALIGN_PARAGRAPH.CENTER, space_before=0, space_after=1)
        add_p(doc, f"DREN : {ex_obj['dren']}  |  CISCO : {ex_obj['cisco']}  |  ZAP : {ex_obj['zap']}", size=9, color=C_BLACK, align=WD_ALIGN_PARAGRAPH.CENTER, space_before=0, space_after=1)
        add_p(doc, f"ÉCOLE PRIMAIRE PUBLIQUE (EPP) : {ex_obj['epp']}  |  CODE : {ex_obj['code']}", size=9, color=C_BLACK, align=WD_ALIGN_PARAGRAPH.CENTER, space_before=0, space_after=4)
        add_p(doc, "----------------------------------------------------------------------------------------------------", size=8, color=C_BLACK, align=WD_ALIGN_PARAGRAPH.CENTER, space_before=0, space_after=4)
        
        add_p(doc, ex_obj["titre"], bold=True, size=12, color=C_BLACK, align=WD_ALIGN_PARAGRAPH.CENTER, space_before=2, space_after=2)
        add_p(doc, f"ÉPREUVE : SCIENCES & CONNAISSANCES USUELLES  |  DURÉE : {ex_obj['duree']}  |  BARÈME : {ex_obj['bareme_total']}", bold=True, size=9.5, color=C_BLACK, align=WD_ALIGN_PARAGRAPH.CENTER, space_before=0, space_after=8)
        
        for partie in ex_obj["parties"]:
            add_p(doc, partie["titre"], bold=True, size=10.5, color=C_BLACK, space_before=6, space_after=2)
            for q in partie["questions"]:
                add_p(doc, q, size=10, color=C_BLACK, space_before=1, space_after=2)
                
        # Corrigé officiel associé
        add_page_break(doc)
        add_p(doc, f"CORRIGÉ TYPE ET BARÈME OFFICIEL — SUJET N° {ex_obj['num']}", bold=True, size=12, color=C_CORR, align=WD_ALIGN_PARAGRAPH.CENTER, space_before=4, space_after=2)
        add_p(doc, f"Épreuve officielle notée sur {ex_obj['bareme_total']}", bold=True, size=10, color=C_RED, align=WD_ALIGN_PARAGRAPH.CENTER, space_before=0, space_after=8)
        
        for partie in ex_obj["parties"]:
            add_p(doc, partie["titre"], bold=True, size=10.5, color=C_GREEN, space_before=6, space_after=2)
            for p_runs in partie["corriges"]:
                p = doc.add_paragraph()
                p.paragraph_format.space_before = Pt(1)
                p.paragraph_format.space_after = Pt(2)
                p.paragraph_format.line_spacing = 1.15
                for r_txt, r_bold, r_col in p_runs:
                    add_run(p, r_txt, bold=r_bold, color=r_col, size=10)

    # =========================================================================
    # ANNEXE II : RÉPERTOIRE DES FORMULES & 18 SCHÉMAS DE 9e
    # =========================================================================
    add_page_break(doc)
    add_p(doc, "ANNEXE II : RÉPERTOIRE GÉNÉRAL DES SCHÉMAS ET FORMULES SCIENTIFIQUES DE 9e", bold=True, size=13, color=C_EMERALD, align=WD_ALIGN_PARAGRAPH.CENTER, space_before=8, space_after=6)
    
    # 1. Formules et expériences
    add_p(doc, "1. FORMULES, PRINCIPES ET PROTOCOLES D'EXPÉRIENCES DE 9e", bold=True, size=11, color=C_BLUE, space_before=4, space_after=3)
    
    for item in formulas_and_schemes_annex["sections"][0]["items"]:
        add_p(doc, f"• {item['nom']}", bold=True, size=10.5, color=C_GREEN, space_before=4, space_after=1)
        
        p_f = doc.add_paragraph()
        p_f.paragraph_format.left_indent = Cm(0.6)
        p_f.paragraph_format.space_before = Pt(1)
        p_f.paragraph_format.space_after = Pt(2)
        add_run(p_f, "Formule / Relation : ", bold=True, color=C_RED)
        add_run(p_f, item["formule"], bold=True, color=C_DARK)
        
        p_e = doc.add_paragraph()
        p_e.paragraph_format.left_indent = Cm(0.6)
        p_e.paragraph_format.space_before = Pt(1)
        p_e.paragraph_format.space_after = Pt(3)
        add_run(p_e, item["explication"], italic=True, color=C_GRAY_TEXT)

    # 2. Planches illustrées des 18 schémas
    add_page_break(doc)
    add_p(doc, "2. PLANCHE RÉCAPITULATIVE DES 18 SCHÉMAS SCIENTIFIQUES DE 9e", bold=True, size=11, color=C_BLUE, space_before=6, space_after=6)
    
    for sc in formulas_and_schemes_annex["sections"][1]["schemas"]:
        img_p = sc["img"]
        leg_p = sc["legende"]
        if os.path.exists(img_p):
            p_img = doc.add_paragraph()
            p_img.alignment = WD_ALIGN_PARAGRAPH.CENTER
            p_img.paragraph_format.space_before = Pt(4)
            p_img.paragraph_format.space_after = Pt(2)
            run_img = p_img.add_run()
            run_img.add_picture(img_p, width=Inches(3.0))
            add_p(doc, leg_p, bold=True, italic=True, size=8.5, color=C_DARK, align=WD_ALIGN_PARAGRAPH.CENTER, space_before=0, space_after=8)

    # =========================================================================
    # SOURCES OFFICIELLES ET BIBLIOGRAPHIE
    # =========================================================================
    add_page_break(doc)
    add_p(doc, "SOURCES OFFICIELLES ET BIBLIOGRAPHIE (LOHARANOM-BAOVAO)", bold=True, size=13, color=C_EMERALD, align=WD_ALIGN_PARAGRAPH.CENTER, space_before=10, space_after=10)
    
    sources = [
        ("Programme d'Études (PE) & Référentiel RAPE — MEN Madagascar", "Cadre curriculaire national et compétences terminales de fin de cycle primaire."),
        ("Fiche de Répartition Annuelle (FRA) — Connaissances Usuelles 9e", "Découpage officiel national des objectifs d'apprentissage et progressions hebdomadaires."),
        ("Fiche de Répartition Mensuelle (FRM) — Connaissances Usuelles 9e", "Progression mensuelle, répartition des contenus notionnels et directives méthodologiques."),
        ("Sujets d'Examens Officiels du CEPE et Évaluations de Passage 9e", "Annales des épreuves de Connaissances Usuelles des DREN Analamanga, Vakinankaratra, Matsiatra, Atsinanana, Boeny."),
        ("Programme National de Lutte contre le Paludisme (PNLP Madagascar)", "Recommandations d'usage des moustiquaires imprégnées MILDA et des TDR/CTA."),
        ("Programme Élargi de Vaccination (PEV Madagascar / OMS)", "Calendrier vaccinal du nourrisson et de l'enfant (BCG, DTCoqPolio, Rougeole)."),
        ("Collection J-Learn — Pack Officiel d'Illustrations Didactiques", "https://cdn.jsdelivr.net/gh/J-Lab-Mdg/jlearn-pack@main/"),
        ("Skill J-Learn v20 — Module svt-sciences.md", "Normes didactiques, démarche d'investigation en 6 étapes et règles de composition OpenXML.")
    ]
    
    for src_titre, src_desc in sources:
        p = doc.add_paragraph()
        p.paragraph_format.left_indent = Cm(0.5)
        p.paragraph_format.space_after = Pt(3)
        add_run(p, f"• {src_titre} : ", bold=True, color=C_DARK)
        add_run(p, src_desc, italic=True, color=C_GRAY_TEXT)

    out_annual = "Manuel_SVT_9e_COMPLET_JLearn.docx"
    doc.save(out_annual)
    print(f"Annual manual V3 generated successfully: {out_annual}")
    return out_annual

if __name__ == "__main__":
    build_full_v3()
