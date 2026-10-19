#!/bin/sh
# Les dépendances (python-docx, Pillow) vivent hors dépôt : /home/user/pydeps
# (pip install --target /home/user/pydeps python-docx Pillow)
export PYTHONPATH=/home/user/pydeps${PYTHONPATH:+:$PYTHONPATH}
exec python3 "$@"
