@echo off
chcp 65001 >nul
cd /d "%~dp0"
title MalagasyWord Offline (Mode Complet)

where py >nul 2>nul
if %errorlevel%==0 (
    py -3 malagasyword_offline.py
    goto :end
)

where python >nul 2>nul
if %errorlevel%==0 (
    python malagasyword_offline.py
    goto :end
)

where python3 >nul 2>nul
if %errorlevel%==0 (
    python3 malagasyword_offline.py
    goto :end
)

echo ======================================================================
echo  [!] Python 3 n'a pas ete detecte sur cet ordinateur.
echo  Installez Python 3 gratuitement depuis : https://www.python.org/downloads/
echo  (Cochez bien "Add python.exe to PATH" lors de l'installation)
echo ======================================================================
pause

:end
