# -*- coding: utf-8 -*-
"""Petit serveur de telechargement des livrables .docx.

    python3 scripts/serveur_fichiers.py

Sert une page unique avec un lien de telechargement par livrable. Place dans
le depot (et non dans /tmp) pour survivre au nettoyage entre les sessions.
"""
import http.server
import os
import socketserver
import urllib.parse

RACINE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(RACINE)

FICHIERS = [
    ("Fiche-gabarit-seance-1.docx", "Fiche gabarit — séance 1"),
    ("Manuel-SVT-T9-complet.docx", "Manuel SVT T9 — complet"),
    ("Note-de-synthese-ecarts-SVT-T9.docx", "Note de synthèse des écarts"),
]

GABARIT = """<!doctype html><html lang=fr><meta charset=utf-8>
<meta name=viewport content="width=device-width,initial-scale=1">
<title>Téléchargement — Manuel SVT T9</title>
<style>
 body{{font-family:Georgia,'Times New Roman',serif;max-width:680px;margin:0 auto;
      padding:48px 24px;line-height:1.7;color:#222}}
 h1{{font-size:24px;color:#1e7b34;margin-bottom:4px}}
 p.sous{{color:#666;margin-top:0;font-size:15px}}
 ul{{list-style:none;padding:0;margin-top:32px}}
 li{{margin:0 0 14px}}
 a{{display:block;padding:16px 20px;border:2px solid #1e7b34;border-radius:8px;
    color:#1e7b34;text-decoration:none;font-weight:bold;font-size:17px}}
 a:hover{{background:#1e7b34;color:#fff}}
 .taille{{display:block;font-weight:normal;font-size:13px;color:#888;margin-top:3px}}
 a:hover .taille{{color:#dfe}}
</style>
<h1>Manuel SVT — classe de T9</h1>
<p class=sous>Cliquez sur un fichier pour le télécharger.</p>
<ul>{items}</ul>
</html>"""


class Handler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        chemin = urllib.parse.unquote(self.path.split("?")[0])

        if chemin in ("/", "/index.html"):
            items = "".join(
                '<li><a download href="/{q}">{t}'
                '<span class=taille>{ko} Ko</span></a></li>'.format(
                    q=urllib.parse.quote(f), t=t,
                    ko=f"{os.path.getsize(f) // 1024:,}".replace(",", " "))
                for f, t in FICHIERS if os.path.exists(f))
            corps = GABARIT.format(items=items).encode("utf-8")
            self.send_response(200)
            self.send_header("Content-Type", "text/html; charset=utf-8")
            self.send_header("Content-Length", str(len(corps)))
            self.end_headers()
            self.wfile.write(corps)
            return

        nom = chemin.lstrip("/")
        if os.path.isfile(nom) and nom.endswith(".docx"):
            with open(nom, "rb") as fh:
                donnees = fh.read()
            self.send_response(200)
            self.send_header("Content-Type", "application/vnd.openxmlformats-"
                                             "officedocument.wordprocessingml.document")
            self.send_header("Content-Disposition", f'attachment; filename="{nom}"')
            self.send_header("Content-Length", str(len(donnees)))
            self.send_header("Access-Control-Allow-Origin", "*")
            self.end_headers()
            self.wfile.write(donnees)
            return

        self.send_error(404)

    def log_message(self, *a):
        pass


if __name__ == "__main__":
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("0.0.0.0", 8080), Handler) as srv:
        srv.serve_forever()
