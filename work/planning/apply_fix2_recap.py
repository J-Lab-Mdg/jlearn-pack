# -*- coding: utf-8 -*-
"""
Fix #2 (recap "EXERCICES — Séance N" sections): expand <4-item exercise groups to 4 items.
Operates on body-level paragraphs (these sections are flat paragraph sequences, not tables).
"""
import sys, re, copy
sys.path.insert(0, '/home/user/jlearn-pack/work/planning')
import content
import docx
from docx.oxml.ns import qn

SRC = '/home/user/jlearn-pack/work/manuel_v2.docx'
d = docx.Document(SRC)
body = d.element.body

def ptext(el):
    return ''.join(n.text or '' for n in el.iter(qn('w:t')))

# Collect all body-level w:p elements in order, tagged with global index
all_p = [el for el in body if el.tag == qn('w:p')]

# Identify section boundaries: each "EXERCICES — Séance N" paragraph starts a section;
# ends at next "EXERCICES —" or "FICHE DE PRÉPARATION" paragraph.
section_starts = []
for i, el in enumerate(all_p):
    t = ptext(el)
    m = re.match(r'^EXERCICES\s*[—-]\s*Séance\s+(\d+)', t)
    if m:
        section_starts.append((i, int(m.group(1))))

sections = []
for idx, (start_i, seance) in enumerate(section_starts):
    end_i = section_starts[idx+1][0] if idx+1 < len(section_starts) else len(all_p)
    sections.append((seance, all_p[start_i:end_i]))

print(f"Found {len(sections)} recap sections.")

def parse_groups(paras_texts):
    """paras_texts: list of (elem, text). Returns groups of {'item_elems','item_texts'} keyed sequentially."""
    groups = []
    cur = None
    for el, text in paras_texts:
        t = text.strip()
        if not t:
            continue
        if re.match(r'^\d+\.\s', t):
            if cur is None:
                continue
            cur['item_elems'].append(el)
            cur['item_texts'].append(t)
        else:
            cur = {'consigne_text': t, 'item_elems': [], 'item_texts': []}
            groups.append(cur)
    return [g for g in groups if g['item_elems']]

def flat_items(paras_texts):
    out = []
    for el, text in paras_texts:
        t = text.strip()
        if re.match(r'^\d+\.\s', t):
            out.append((el, t))
    return out

total_edits = 0
log = []

for seance, paras in sections:
    # split into Application / Évaluation / Corrigé blocks by label paragraphs
    blocks = {}
    current_label = None
    for el in paras:
        t = ptext(el).strip()
        if t in ('Application', 'Évaluation', 'Corrigé'):
            current_label = t
            blocks.setdefault(current_label, [])
            continue
        if current_label:
            blocks.setdefault(current_label, []).append((el, ptext(el)))

    if 'Application' not in blocks and 'Évaluation' not in blocks:
        continue

    # Build combined corrigé flat list (Application answers come first, then Évaluation answers)
    corrige_flat = flat_items(blocks.get('Corrigé', []))

    # We need to know, for Corrigé, the split point between Application-part and Évaluation-part answers.
    # It corresponds to: len(all items across all exo-groups in Application) items first, then Évaluation's.
    app_groups = parse_groups(blocks.get('Application', []))
    eval_groups = parse_groups(blocks.get('Évaluation', []))

    app_item_count = sum(len(g['item_elems']) for g in app_groups)
    corrige_app_part = corrige_flat[:app_item_count]
    corrige_eval_part = corrige_flat[app_item_count:]

    for label, groups, corrige_part in [('Application', app_groups, corrige_app_part),
                                          ('Évaluation', eval_groups, corrige_eval_part)]:
        offsets = []
        run = 0
        for g in groups:
            offsets.append(run)
            run += len(g['item_elems'])

        for gi, g in enumerate(groups):
            n_items = len(g['item_elems'])
            if n_items >= 4:
                continue
            sig = tuple(g['item_texts'])
            if sig not in content.DATA:
                raise SystemExit(f"NO CONTENT for S{seance} {label} group {gi}: {sig}")
            spec = content.DATA[sig]
            new_ens_lines = spec['new_ens']
            new_app_lines = spec['new_app']
            need = 4 - n_items
            assert len(new_ens_lines) == need
            assert len(new_app_lines) == need

            # ---- ENS (statement) side ----
            last_ens_p = g['item_elems'][-1]
            anchor = last_ens_p
            for k, line in enumerate(new_ens_lines):
                new_num = n_items + k + 1
                new_p = copy.deepcopy(last_ens_p)
                runs = new_p.findall(qn('w:r'))
                for extra in runs[1:]:
                    new_p.remove(extra)
                t_el = runs[0].find(qn('w:t'))
                t_el.text = f"{new_num}. {line}"
                t_el.set(qn('xml:space'), 'preserve')
                anchor.addnext(new_p)
                anchor = new_p

            # ---- Corrigé side ----
            start = offsets[gi]
            end = start + n_items
            slice_ = corrige_part[start:end]
            if len(slice_) != n_items:
                raise SystemExit(f"Corrigé slice mismatch S{seance} {label} exo{gi}: expected {n_items} got {len(slice_)}")
            last_app_p = slice_[-1][0]
            anchor2 = last_app_p
            for k, line in enumerate(new_app_lines):
                new_num = n_items + k + 1
                new_p = copy.deepcopy(last_app_p)
                runs = new_p.findall(qn('w:r'))
                if len(runs) >= 2:
                    for extra in runs[2:]:
                        new_p.remove(extra)
                    t0 = runs[0].find(qn('w:t'))
                    t0.text = f"{new_num}. "
                    t0.set(qn('xml:space'), 'preserve')
                    t1 = runs[1].find(qn('w:t'))
                    t1.text = line
                elif len(runs) == 1:
                    for extra in runs[1:]:
                        new_p.remove(extra)
                    t0 = runs[0].find(qn('w:t'))
                    t0.text = f"{new_num}. {line}"
                    t0.set(qn('xml:space'), 'preserve')
                else:
                    raise SystemExit(f"Corrigé para has no runs: S{seance} {label} exo{gi}")
                anchor2.addnext(new_p)
                anchor2 = new_p

            total_edits += 1
            log.append(f"S{seance} {label} exo#{gi}: +{need} items")

print(f"Applied {total_edits} exercise-group expansions (recap sections).")
for l in log:
    print(" ", l)

d.save(SRC)
print("Saved.")
