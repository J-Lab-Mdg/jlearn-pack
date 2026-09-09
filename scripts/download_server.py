# -*- coding: utf-8 -*-
"""Mini-serveur de téléchargement : ne sert que le docx SVT 9e (version légère).
Lancement : python3 scripts/download_server.py  (port 8000)
"""
import http.server, os

DOCX = os.path.join(
    os.path.dirname(os.path.abspath(__file__)),
    "..", "svt-9e", "output", "SVT-9e-Bimestre1-Complet.docx",
)

class H(http.server.BaseHTTPRequestHandler):
    def do_GET(self):
        if self.path.split("?")[0] in ("/", "/docx"):
            if not os.path.exists(DOCX):
                self.send_response(404); self.end_headers(); return
            size = os.path.getsize(DOCX)
            self.send_response(200)
            self.send_header("Content-Type", "application/vnd.openxmlformats-officedocument.wordprocessingml.document")
            self.send_header("Content-Disposition", 'attachment; filename="SVT-9e-Bimestre1-Complet.docx"')
            self.send_header("Content-Length", str(size))
            self.end_headers()
            with open(DOCX, "rb") as f:
                while chunk := f.read(65536):
                    self.wfile.write(chunk)
            return
        self.send_response(404); self.end_headers()

    def log_message(self, *a):
        pass

if __name__ == "__main__":
    http.server.ThreadingHTTPServer(("0.0.0.0", 8000), H).serve_forever()
