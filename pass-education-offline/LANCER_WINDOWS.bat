@echo off
cd /d "%~dp0"
if exist "pass_education_offline.py" goto :run
echo ======================================================================
echo  [!] ATTENTION : Archive .zip non extraite !
echo  Faites un clic droit sur pass-education-offline.zip puis choisissez
echo  "Extraire tout..." avant de double-cliquer sur LANCER_WINDOWS.bat.
echo ======================================================================
pause
exit /b 1
:run
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0bootstrap_windows.ps1" %*
if errorlevel 1 pause
