@echo off
cd /d "%~dp0"
if exist "malagasyword_offline.py" goto :run
echo ======================================================================
echo  [!] ATTENTION : Archive .zip non extraite !
echo  Faites un clic droit sur malagasyword-offline.zip puis choisissez
echo  "Extraire tout..." avant de double-cliquer sur LANCER_WINDOWS.bat.
echo ======================================================================
pause
exit /b 1
:run
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0bootstrap_windows.ps1" %*
if errorlevel 1 pause
