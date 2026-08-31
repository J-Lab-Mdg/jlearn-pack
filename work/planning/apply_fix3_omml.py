# -*- coding: utf-8 -*-
"""
Fix #3: Convert plain-text numeric fractions (e.g. "8/11") into native Word OMML
math equations (m:oMath > m:f), throughout the whole document (body + all tables).

Scope: only numeric fractions matching \\d+\\s*/\\s*\\d+ (digits on both sides).
Explicitly excluded:
  - letter-variable formulas like "A / B" (algebraic formula reference lines)
  - "?/24" style fill-in-the-blank items (non-numeric placeholder) -- left as text
  - date-like patterns (none found in this document)

All 485 occurrences are confirmed to be fully contained within a single w:r run
(verified beforehand), so this script performs per-run text splitting: for each
run containing one or more numeric fraction patterns, split its text into
plain-text segments and OMML fraction nodes, replacing the single <w:r> with
a sequence of <w:r> (plain text) and <m:oMath> (fraction) siblings, preserving
the original run's formatting (w:rPr) on both the text runs and the fraction's
numerator/denominator runs.
"""
import re
import copy
import docx
from docx.oxml.ns import qn
from docx.oxml import OxmlElement

SRC = '/home/user/jlearn-pack/work/manuel_v2.docx'

FRACTION_RE = re.compile(r'(\d+)\s*/\s*(\d+)')

def build_text_run(text, rPr):
    r = OxmlElement('w:r')
    if rPr is not None:
        r.append(copy.deepcopy(rPr))
    t = OxmlElement('w:t')
    t.text = text
    t.set(qn('xml:space'), 'preserve')
    r.append(t)
    return r

def build_omath_fraction(numerator, denominator, rPr):
    oMath = OxmlElement('m:oMath')
    f = OxmlElement('m:f')
    num = OxmlElement('m:num')
    num_r = OxmlElement('m:r')
    if rPr is not None:
        num_r.append(copy.deepcopy(rPr))
    num_t = OxmlElement('m:t')
    num_t.text = str(numerator)
    num_r.append(num_t)
    num.append(num_r)
    den = OxmlElement('m:den')
    den_r = OxmlElement('m:r')
    if rPr is not None:
        den_r.append(copy.deepcopy(rPr))
    den_t = OxmlElement('m:t')
    den_t.text = str(denominator)
    den_r.append(den_t)
    den.append(den_r)
    f.append(num)
    f.append(den)
    oMath.append(f)
    return oMath

def is_excluded_context(full_text, match_start, match_end):
    """Exclude letter-variable formulas (A / B) and '?/N' or 'N/?' placeholders."""
    # letter-variable check: look at chars immediately before/after the digit-fraction;
    # if the paragraph as a whole is a formula line with capital letters like "(A / B)",
    # our regex only matches digit/digit so those are already naturally excluded.
    return False

def convert_paragraph(p_el):
    """Process a single <w:p> element in place. Returns number of fractions converted."""
    converted = 0
    runs = p_el.findall(qn('w:r'))
    for r in runs:
        t_el = r.find(qn('w:t'))
        if t_el is None or not t_el.text:
            continue
        text = t_el.text
        matches = list(FRACTION_RE.finditer(text))
        if not matches:
            continue

        rPr = r.find(qn('w:rPr'))

        # Build replacement sequence of elements (w:r for text, m:oMath for fractions)
        new_elems = []
        last_end = 0
        for m in matches:
            if is_excluded_context(text, m.start(), m.end()):
                continue
            # preceding text
            if m.start() > last_end:
                new_elems.append(build_text_run(text[last_end:m.start()], rPr))
            num, den = m.group(1), m.group(2)
            new_elems.append(build_omath_fraction(num, den, rPr))
            last_end = m.end()
            converted += 1
        # trailing text
        if last_end < len(text):
            new_elems.append(build_text_run(text[last_end:], rPr))
        elif last_end == 0:
            # no conversions actually happened (all excluded) -- skip replacement
            continue

        # Replace original run with new_elems, preserving position
        parent = r.getparent()
        idx = list(parent).index(r)
        parent.remove(r)
        for offset, elem in enumerate(new_elems):
            parent.insert(idx + offset, elem)

    return converted

def main():
    d = docx.Document(SRC)
    body = d.element.body

    total_converted = 0
    total_paras_touched = 0

    # Iterate over a static list since we mutate paragraph children (not the paragraph list itself)
    all_paragraphs = list(body.iter(qn('w:p')))
    for p_el in all_paragraphs:
        full_text = ''.join(n.text or '' for n in p_el.iter(qn('w:t')))
        if not FRACTION_RE.search(full_text):
            continue
        n = convert_paragraph(p_el)
        if n:
            total_converted += n
            total_paras_touched += 1

    print(f"Converted {total_converted} fractions across {total_paras_touched} paragraphs.")
    d.save(SRC)
    print("Saved.")

if __name__ == '__main__':
    main()
