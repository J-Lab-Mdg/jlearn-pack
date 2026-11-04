@echo off
setlocal
cd /d "%~dp0"
title Facebook Page Offline - Publications Photos Videos et Recherche (Port 8768)

echo ====================================================================
echo   FACEBOOK PAGE OFFLINE - Archive Officielle et Recherche (Port 8768)
echo ====================================================================
echo   Astuce Disque Dur Externe : fermez proprement cette fenetre noire
echo   avant de debrancher votre disque dur externe USB !
echo ====================================================================
echo.

if exist "%~dp0runtime\python\python.exe" (
    "%~dp0runtime\python\python.exe" "%~dp0facebook_offline.py"
    goto :end
)

powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0bootstrap_windows.ps1"

:end
if errorlevel 1 (
    echo.
    echo [ERREUR] Le demarrage a rencontre un probleme.
    pause
)
