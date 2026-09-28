#!/usr/bin/env python3
"""Replace the single generic 'SVT 3e - REVISIONS' bilan image (reused across
all 10 revision/exam seances) with 5 unit-specific bilan posters.

Usage: python3 replace_bilan_images.py <src.docx> <out.docx>
"""
import sys
import docx
from docx.oxml.ns import qn
import re

SCRATCH = "scripts/t9/generated_images"

UNIT_IMAGES = {
    1: f"{SCRATCH}/bilan_unite1.jpg",
    2: f"{SCRATCH}/bilan_unite2.jpg",
    3: f"{SCRATCH}/bilan_unite3.jpg",
    4: f"{SCRATCH}/bilan_unite4.jpg",
    5: f"{SCRATCH}/bilan_unite5.jpg",
}

# seance -> unit
SEANCE_TO_UNIT = {}
for s in (11, 12):
    SEANCE_TO_UNIT[s] = 1
for s in (23, 24):
    SEANCE_TO_UNIT[s] = 2
for s in (34, 35):
    SEANCE_TO_UNIT[s] = 3
for s in (42, 43):
    SEANCE_TO_UNIT[s] = 4
for s in (50, 51):
    SEANCE_TO_UNIT[s] = 5


def elem_text(el):
    return ''.join(t.text or '' for t in el.findall('.//' + qn('w:t')))


def main(src, out):
    d = docx.Document(src)

    # Find the rId currently used for the generic bilan image (image14.jpg,
    # by content: it is the one target reused >= 10 times).
    rels = d.part.rels
    generic_rid = None
    for rid, rel in rels.items():
        if rel.target_ref.endswith('image14.jpg'):
            generic_rid = rid
            break
    if generic_rid is None:
        raise SystemExit("Could not find the generic bilan image relationship (image14.jpg)")
    print("Generic bilan image rId:", generic_rid)

    # Add the 5 new unit images as relationships, get their new rIds.
    unit_rid = {}
    for unit, path in UNIT_IMAGES.items():
        rid, _image = d.part.get_or_add_image(path)
        unit_rid[unit] = rid
        print(f"Unit {unit}: added {path} as {rid}")

    body = d.element.body
    elems = list(body)
    current_seance = None
    replaced = 0
    for el in elems:
        if el.tag == qn('w:p'):
            t = elem_text(el).strip()
            m = re.match(r'^SÉANCE (\d+) / 51', t)
            if m:
                current_seance = int(m.group(1))
        # find drawings anywhere under this element (paragraphs normally,
        # but scan generically to be safe)
        for blip in el.findall('.//' + qn('a:blip')):
            rid = blip.get(qn('r:embed'))
            if rid == generic_rid and current_seance in SEANCE_TO_UNIT:
                unit = SEANCE_TO_UNIT[current_seance]
                blip.set(qn('r:embed'), unit_rid[unit])
                replaced += 1

    print(f"Replaced {replaced} drawing references to unit-specific bilan images.")
    d.save(out)
    print("Saved:", out)


if __name__ == "__main__":
    main(sys.argv[1], sys.argv[2])
