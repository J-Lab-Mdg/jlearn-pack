@echo off
setlocal
cd /d "%~dp0"
title JW Malagasy Offline - JWPUB EPUB PDF et Recherche (Port 8767)

echo ====================================================================
echo   JW MALAGASY OFFLINE - JWPUB / EPUB / PDF et Recherche Hors-Ligne
echo ====================================================================
echo   Astuce Disque Dur Externe : fermez proprement cette fenetre noire
echo   avant de debrancher votre disque dur externe USB !
echo ====================================================================
echo.

if exist "%~dp0runtime\python\python.exe" (
    "%~dp0runtime\python\python.exe" "%~dp0jw_malagasy_offline.py"
    goto :end
)

powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0bootstrap_windows.ps1"

:end
if errorlevel 1 (
    echo.
    echo [ERREUR] Le demarrage a rencontre un probleme.
    pause
)
