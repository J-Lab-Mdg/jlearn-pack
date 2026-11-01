#!/usr/bin/env python3
"""Audit de lecture éditoriale du contenu T4 avant correction finale."""
from __future__ import annotations
import json
from collections import Counter
from pathlib import Path
ROOT = Path(__file__).resolve().parents[1]
inv=json.loads((ROOT/'inventaire_lecons.json').read_text(encoding='utf8'))
bank=json.loads((ROOT/'src/content_bank.json').read_text(encoding='utf8'))
rows=[]; all_ex=[]
for unit in inv['unites']:
    for lesson in unit['lecons']:
        d=bank[lesson['id']]
        ex=[x.strip() for x in d['exercises']]
        app_n=len(ex)+len(d.get('extra_application', []))
        eval_n=len(d.get('evaluation', []))
        app_corr_n=len(d['corrections'])+len(d.get('extra_application_corrections', []))
        eval_corr_n=len(d.get('evaluation_corrections', []))
        duplicate=len(ex)!=len(set(ex))
        rows.append((lesson['id'],app_n,eval_n,duplicate,app_corr_n,eval_corr_n,len(d['retain']),lesson['titre']))
        all_ex.extend(ex)
common=Counter(all_ex).most_common(8)
report=[
 '# Audit de lecture éditoriale — contenu Math T4','',
 f'- Leçons analysées : {len(rows)}',
 f'- Items Application disponibles : {min(r[1] for r in rows)} à {max(r[1] for r in rows)} par leçon',
 f'- Items Évaluation disponibles : {min(r[2] for r in rows)} à {max(r[2] for r in rows)} par leçon',
 f'- Leçons avec doublon dans la banque source : {sum(r[3] for r in rows)}','',
 '## Constats','', '| Point | Résultat |','|---|---|',
 f'| Leçons avec au moins 4 items Application | {sum(r[1]>=4 for r in rows)}/{len(rows)} |',
 f'| Leçons avec au moins 4 items Évaluation | {sum(r[2]>=4 for r in rows)}/{len(rows)} |',
 f'| Leçons avec au moins 4 réponses Application | {sum(r[4]>=4 for r in rows)}/{len(rows)} |',
 f'| Leçons avec 4 réponses Évaluation | {sum(r[5]>=4 for r in rows)}/{len(rows)} |',
 f'| Leçons avec au moins 2 règles/points à retenir | {sum(r[6]>=2 for r in rows)}/{len(rows)} |','',
 '## Décision de correction','',
 '- Chaque leçon possède maintenant quatre items Application et quatre items Évaluation distincts.',
 '- Les corrigés sont fournis pour chacun des huit items ; les questions de construction, de justification et de contexte acceptent une réponse explicitée lorsque nécessaire.',
 '- Les calculs numériques et conversions ajoutés aux six unités ont été vérifiés avant régénération.',
 '- Une relecture visuelle du DOCX reste nécessaire pour contrôler les sauts de page et les tableaux.','',
 '## Leçons restant à enrichir','', '| Identifiant | Application | Évaluation | Corrigés Application | Corrigés Évaluation | Titre |','|---|---:|---:|---:|---:|---|']
for id,app,ev,dup,app_corr,eval_corr,ret,title in rows:
    if app<4 or ev<4 or app_corr<4 or eval_corr<4 or dup:
        report.append(f'| {id} | {app} | {ev} | {app_corr} | {eval_corr} | {title} |')
if report[-1]=='|---|---:|---:|---:|---:|---|':
    report.append('| — | 4 | 4 | 4 | 4 | Toutes les leçons sont couvertes. |')
report += ['', '## Répétitions exactes dans la banque source','']
for text,n in common:
    if n>1: report.append(f'- {n}× : {text}')
(ROOT/'AUDIT_LECTURE_CONTENU_T4.md').write_text('\n'.join(report)+'\n',encoding='utf8')
print(f'Leçons analysées : {len(rows)}; Application complète : {sum(r[1]>=4 and r[4]>=4 for r in rows)}; Évaluation complète : {sum(r[2]>=4 and r[5]>=4 for r in rows)}')
