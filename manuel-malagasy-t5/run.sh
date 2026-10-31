#!/bin/sh
# Dépendances (python-docx, Pillow, pypdf) installées HORS dépôt dans /home/user/pydeps :
# elles ne sont donc pas dans Git, et le sandbox peut les perdre entre deux sessions.
# Ce script les réinstalle à la demande, puis lance le script python passé en argument.
#   ./run.sh src/build.py data_loha1 Manuel_Malagasy_T5_Loha1_V1
DEPS=/home/user/pydeps
export PYTHONPATH="$DEPS${PYTHONPATH:+:$PYTHONPATH}"
if ! python3 -c "import docx, PIL" >/dev/null 2>&1; then
    echo "[run.sh] installation des dépendances dans $DEPS …"
    python3 -m pip install --quiet --target "$DEPS" python-docx Pillow pypdf
fi
exec python3 "$@"
