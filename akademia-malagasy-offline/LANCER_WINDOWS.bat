@echo off
setlocal
cd /d "%~dp0"
title Akademia Malagasy Offline - Foibe momba ny Teny (Port 8769)

echo ====================================================================
echo   AKADEMIA MALAGASY OFFLINE - Foibe momba ny Teny (Port 8769)
echo ====================================================================
echo   Astuce Disque Dur Externe : fermez proprement cette fenetre noire
echo   avant de debrancher votre disque dur externe USB !
echo ====================================================================
echo.

if exist "%~dp0runtime\python\python.exe" (
    "%~dp0runtime\python\python.exe" "%~dp0akademia_offline.py"
    goto :end
)

powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0bootstrap_windows.ps1"

:end
if errorlevel 1 (
    echo.
    echo [ERREUR] Le demarrage a rencontre un probleme.
    pause
)
