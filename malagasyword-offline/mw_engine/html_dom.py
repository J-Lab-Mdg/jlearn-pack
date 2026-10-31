# -*- coding: utf-8 -*-
"""Parseur DOM HTML5 léger et tolérant aux balises CGI non fermées (<tr>, <td>, <p>, <br>, <img>...).

Pourquoi ce module dédié ?
Les pages CGI de malagasyword.org / motmalgache.org datent de 2001 et omettent souvent
les balises fermantes </td> ou </tr>, tout en imbriquant des sous-tableaux (Morphologie, Dérivés).
Ce constructeur DOM applique les règles implicites HTML5 sur les tableaux (bornées au <table> courant)
en pur Python standard (html.parser), sans nécessiter `pip install beautifulsoup4` ni `lxml`.
"""

from __future__ import annotations

from html.parser import HTMLParser
from typing import Dict, Iterator, List, Optional, Tuple, Union

VOID_TAGS = frozenset({
    "area", "base", "br", "col", "embed", "hr", "img", "input",
    "link", "meta", "param", "source", "track", "wbr",
})

TABLE_SECTION_TAGS = frozenset({"tbody", "thead", "tfoot"})
TABLE_CELL_TAGS = frozenset({"td", "th"})


class Element:
    """Nœud élément léger de l'arbre HTML."""

    __slots__ = ("tag", "attrs", "children")

    def __init__(self, tag: str, attrs: Dict[str, str]) -> None:
        self.tag: str = tag
        self.attrs: Dict[str, str] = attrs
        self.children: List[Union["Element", str]] = []

    def get(self, attr: str, default: str = "") -> str:
        return self.attrs.get(attr, default)

    def iter_elements(self, tag: Optional[str] = None) -> Iterator["Element"]:
        """Parcourt récursivement les sous-éléments (en profondeur)."""
        for child in self.children:
            if isinstance(child, Element):
                if tag is None or child.tag == tag:
                    yield child
                yield from child.iter_elements(tag)

    def find_all(self, tag: Optional[str] = None) -> List["Element"]:
        return list(self.iter_elements(tag))

    def find_first(self, tag: str) -> Optional["Element"]:
        for el in self.iter_elements(tag):
            return el
        return None

    def has_descendant(self, tag: str) -> bool:
        for _ in self.iter_elements(tag):
            return True
        return False

    def direct_Tag_children(self, tag: str) -> List["Element"]:
        return [c for c in self.children if isinstance(c, Element) and c.tag == tag]

    def text(self, sep: str = "", strip: bool = False) -> str:
        parts: List[str] = []
        self._collect_text(parts)
        raw = sep.join(parts)
        if strip:
            return " ".join(raw.split())
        return raw

    def _collect_text(self, out: List[str]) -> None:
        for child in self.children:
            if isinstance(child, str):
                out.append(child)
            elif child.tag == "br":
                out.append("\n")
            else:
                child._collect_text(out)


class _TolerantTreeBuilder(HTMLParser):
    """Construit un arbre Element tolérant aux balises HTML omises dans les tableaux CGI."""

    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.root = Element("document", {})
        self.stack: List[Element] = [self.root]

    def _nearest_table_index(self) -> int:
        for i in range(len(self.stack) - 1, 0, -1):
            if self.stack[i].tag == "table":
                return i
        return 0

    def _close_open_in_current_table(self, targets: frozenset) -> None:
        table_idx = self._nearest_table_index()
        if table_idx == 0:
            return
        for i in range(table_idx + 1, len(self.stack)):
            if self.stack[i].tag in targets:
                del self.stack[i:]
                return

    def handle_starttag(self, tag: str, attrs: List[Tuple[str, Optional[str]]]) -> None:
        t = tag.lower()
        attr_dict = {k.lower(): (v if v is not None else "") for k, v in attrs}

        if t in TABLE_CELL_TAGS:
            # Un nouveau <td>/<th> ferme implicitement la cellule ouverte dans le même <table>
            self._close_open_in_current_table(TABLE_CELL_TAGS)
            # Si on est directement sous <table>/<tbody> sans <tr>, ouvre un <tr> implicite
            if self.stack[-1].tag in ("table", "tbody", "thead", "tfoot"):
                tr = Element("tr", {})
                self.stack[-1].children.append(tr)
                self.stack.append(tr)
        elif t == "tr":
            # Un nouveau <tr> ferme toute cellule et tout <tr> ouverts dans le même <table>
            self._close_open_in_current_table(TABLE_CELL_TAGS | frozenset({"tr"}))
        elif t in TABLE_SECTION_TAGS:
            self._close_open_in_current_table(TABLE_CELL_TAGS | frozenset({"tr"}) | TABLE_SECTION_TAGS)
        elif t == "p":
            # Ferme un <p> ouvert sans traverser une cellule de tableau
            for i in range(len(self.stack) - 1, 0, -1):
                st = self.stack[i].tag
                if st in ("td", "th", "table"):
                    break
                if st == "p":
                    del self.stack[i:]
                    break
        elif t == "li":
            for i in range(len(self.stack) - 1, 0, -1):
                st = self.stack[i].tag
                if st in ("ul", "ol", "td", "th", "table"):
                    break
                if st == "li":
                    del self.stack[i:]
                    break

        el = Element(t, attr_dict)
        self.stack[-1].children.append(el)
        if t not in VOID_TAGS:
            self.stack.append(el)

    def handle_startendtag(self, tag: str, attrs: List[Tuple[str, Optional[str]]]) -> None:
        t = tag.lower()
        attr_dict = {k.lower(): (v if v is not None else "") for k, v in attrs}
        el = Element(t, attr_dict)
        self.stack[-1].children.append(el)

    def handle_endtag(self, tag: str) -> None:
        t = tag.lower()
        if t in VOID_TAGS:
            return

        if t in TABLE_CELL_TAGS or t == "tr" or t in TABLE_SECTION_TAGS:
            # Ne jamais fermer au-delà du <table> courant
            table_idx = self._nearest_table_index()
            if table_idx == 0:
                return
            for i in range(len(self.stack) - 1, table_idx, -1):
                if self.stack[i].tag == t:
                    del self.stack[i:]
                    return
            return

        if t == "table":
            table_idx = self._nearest_table_index()
            if table_idx > 0:
                del self.stack[table_idx:]
            return

        # Autres balises : ne traverse pas une frontière <td>/<th>/<table>
        for i in range(len(self.stack) - 1, 0, -1):
            st = self.stack[i].tag
            if st == t:
                del self.stack[i:]
                return
            if st in ("td", "th", "tr", "table"):
                return

    def handle_data(self, data: str) -> None:
        if not data:
            return
        cur = self.stack[-1].children
        if cur and isinstance(cur[-1], str):
            cur[-1] += data
        else:
            cur.append(data)


def parse_html(html_text: str) -> Element:
    """Parse une chaîne HTML et retourne la racine `Element`."""
    builder = _TolerantTreeBuilder()
    builder.feed(html_text)
    builder.close()
    return builder.root


def iter_table_rows(table: Element) -> Iterator[Tuple[Element, List[Element]]]:
    """Itère les lignes directes <tr> d'un élément <table> (y compris sous <tbody>/<thead>/<tfoot>)
    sans descendre dans les sous-tableaux imbriqués.
    Retourne `(tr_element, [td_or_th_cells])`.
    """
    for child in table.children:
        if not isinstance(child, Element):
            continue
        if child.tag == "tr":
            cells = [c for c in child.children if isinstance(c, Element) and c.tag in TABLE_CELL_TAGS]
            if cells:
                yield child, cells
        elif child.tag in TABLE_SECTION_TAGS:
            for sub in child.children:
                if isinstance(sub, Element) and sub.tag == "tr":
                    cells = [c for c in sub.children if isinstance(c, Element) and c.tag in TABLE_CELL_TAGS]
                    if cells:
                        yield sub, cells
