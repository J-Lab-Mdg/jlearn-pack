# -*- coding: utf-8 -*-
"""Mini-serveur de telechargement des livrables SVT T9.

Lancement :
    python3 scripts/download_server.py        (port 8000, toutes interfaces)

Routes :
    /                 page d'index avec les liens
    /manuel.docx      Manuel-SVT-T9-complet.docx
    /note.docx        Note-de-synthese-ecarts-SVT-T9.docx
    /manuel.md        Manuel-SVT-T9-complet.md
"""
import http.server
import os
import urllib.parse

RACINE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

DOCX = "application/vnd.openxmlformats-officedocument.wordprocessingml.document"

FICHIERS = {
    "/manuel.docx": ("Manuel-SVT-T9-complet.docx", DOCX),
    "/note.docx": ("Note-de-synthese-ecarts-SVT-T9.docx", DOCX),
    "/manuel.md": ("Manuel-SVT-T9-complet.md", "text/markdown; charset=utf-8"),
}


def octets(n):
    for unite in ("o", "Ko", "Mo"):
        if n < 1024 or unite == "Mo":
            return f"{n:.0f} {unite}" if unite == "o" else f"{n:.1f} {unite}"
        n /= 1024


def page_index():
    lignes = []
    for route, (nom, _) in FICHIERS.items():
        chemin = os.path.join(RACINE, nom)
        if not os.path.exists(chemin):
            continue
        taille = octets(os.path.getsize(chemin))
        lignes.append(
            f'<li><a href="{route}"><strong>{nom}</strong></a> '
            f'<span class="t">{taille}</span></li>'
        )
    return f"""<!doctype html>
<html lang="fr"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Manuel SVT T9 — telechargement</title>
<style>
 body {{ font-family: system-ui, sans-serif; max-width: 40rem; margin: 3rem auto;
        padding: 0 1.5rem; line-height: 1.6; color: #1a1a1a; }}
 h1 {{ font-size: 1.4rem; }}
 ul {{ list-style: none; padding: 0; }}
 li {{ padding: .9rem 1rem; border: 1px solid #ddd; border-radius: .5rem;
       margin-bottom: .6rem; }}
 a {{ color: #1558b0; text-decoration: none; }}
 a:hover {{ text-decoration: underline; }}
 .t {{ color: #666; font-size: .9rem; float: right; }}
 p.n {{ color: #555; font-size: .92rem; }}
</style></head><body>
<h1>Manuel de SVT — classe de T9</h1>
<p class="n">51 seances : 41 de contenu, 5 revisions, 5 examens avec corriges.
Cliquez pour telecharger.</p>
<ul>{''.join(lignes)}</ul>
<p class="n">Le <code>.docx</code> est un fichier derive du Markdown.
Pour le modifier, editez le fichier d'unite puis relancez
<code>assembler_manuel.py</code> et <code>md2docx.py</code>.</p>
</body></html>"""


class Handler(http.server.BaseHTTPRequestHandler):
    def _envoyer(self, code, corps, ctype, nom=None):
        self.send_response(code)
        self.send_header("Content-Type", ctype)
        self.send_header("Content-Length", str(len(corps)))
        if nom:
            self.send_header("Content-Disposition",
                             f'attachment; filename="{nom}"')
        # Le serveur est joint via un hote de previsualisation distant.
        self.send_header("Access-Control-Allow-Origin", "*")
        self.end_headers()
        self.wfile.write(corps)

    def do_GET(self):
        route = urllib.parse.urlparse(self.path).path
        if route in ("/", "/index.html"):
            self._envoyer(200, page_index().encode("utf-8"),
                          "text/html; charset=utf-8")
            return
        if route in FICHIERS:
            nom, ctype = FICHIERS[route]
            chemin = os.path.join(RACINE, nom)
            if not os.path.exists(chemin):
                self._envoyer(404, b"Fichier absent", "text/plain; charset=utf-8")
                return
            with open(chemin, "rb") as f:
                self._envoyer(200, f.read(), ctype, nom)
            return
        self._envoyer(404, b"Route inconnue", "text/plain; charset=utf-8")

    def log_message(self, formt, *args):
        print(f"  {self.address_string()} {formt % args}", flush=True)


if __name__ == "__main__":
    serveur = http.server.ThreadingHTTPServer(("0.0.0.0", 8000), Handler)
    print("Telechargement disponible sur le port 8000", flush=True)
    for route, (nom, _) in FICHIERS.items():
        etat = "ok" if os.path.exists(os.path.join(RACINE, nom)) else "ABSENT"
        print(f"  {route:<14} -> {nom} [{etat}]", flush=True)
    serveur.serve_forever()
