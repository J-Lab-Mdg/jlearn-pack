#!/usr/bin/env python3
"""Validation XSD WordprocessingML du lot pilote Arts T8.

C'est ce contrôle qui a révélé la cause du refus d'ouverture Word du manuel T9 V4
(texte brut dans w:tc). Il est donc rejoué systématiquement avant livraison.

Les schémas ne sont pas vendored dans le dépôt. Pour les obtenir :
    git clone --depth 1 --filter=blob:none --sparse https://github.com/plutext/docx4j.git /tmp/docx4j
    cd /tmp/docx4j && git sparse-checkout set xsd
    sed -i 's/CT_GeoHierarchyEntity "/CT_GeoHierarchyEntity"/' xsd/odrawxml/office_drawing_2014_chartex.xsd
(le sed corrige une espace finale parasite dans le XSD amont, sans rapport avec nos documents)

Usage : python art-t8/src/validate_xsd.py [chemin_du_docx] [--xsd /tmp/docx4j/xsd]
"""
import argparse
import re
import sys
import zipfile
from pathlib import Path

from lxml import etree

ROOT = Path(__file__).resolve().parents[1]


class Resolver(etree.Resolver):
    def __init__(self, xsd_root):
        self.xsd_root = xsd_root
        self.cache = {}
        for p in xsd_root.rglob('*.xsd'):
            self.cache.setdefault(p.name, p)

    def resolve(self, url, pid, ctx):
        p = self.cache.get(url.split('/')[-1])
        return self.resolve_filename(str(p), ctx) if p else None


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('doc', nargs='?', default=str(ROOT / 'output/Art_T8_Pilote.docx'))
    ap.add_argument('--xsd', default='/tmp/docx4j/xsd')
    args = ap.parse_args()
    xsd = Path(args.xsd)
    if not (xsd / 'wml/wml.xsd').exists():
        print(f'Schémas introuvables dans {xsd}. Voir le module docstring pour la commande de clone.')
        return 2
    parser = etree.XMLParser()
    parser.resolvers.add(Resolver(xsd))
    schema = etree.XMLSchema(etree.parse(str(xsd / 'wml/wml.xsd'), parser))
    z = zipfile.ZipFile(args.doc)
    parts = [n for n in z.namelist()
             if re.fullmatch(r'word/(document|footer\d+|header\d+|footnotes|endnotes|styles|numbering)\.xml', n)]
    total = 0
    for n in parts:
        if schema.validate(etree.fromstring(z.read(n))):
            print('ok  ', n)
        else:
            total += len(schema.error_log)
            print('FAIL', n, len(schema.error_log))
            for e in list(schema.error_log)[:8]:
                print('   ', e.message[:300])
    print('Erreurs XSD :', total)
    return 1 if total else 0


if __name__ == '__main__':
    sys.exit(main())
