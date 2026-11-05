$ErrorActionPreference = "Stop"
$AppDir = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $AppDir

$LocalPyDir = Join-Path $AppDir "runtime\python"
$LocalPyExe = Join-Path $LocalPyDir "python.exe"

# 1. Si Python portable local existe deja dans ce dossier
if (Test-Path $LocalPyExe) {
    & $LocalPyExe (Join-Path $AppDir "akademia_offline.py")
    exit $LASTEXITCODE
}

# 2. Reutilisation intelligente hors-ligne depuis les packs voisins (0 Mo Internet !)
$ParentDir = Split-Path -Parent $AppDir
$SiblingDirs = @(
    (Join-Path $ParentDir "malagasyword-offline\runtime\python"),
    (Join-Path $ParentDir "pass-education-offline\runtime\python"),
    (Join-Path $ParentDir "jw-malagasy-offline\runtime\python"),
    (Join-Path $ParentDir "facebook-offline\runtime\python")
)
foreach ($Sib in $SiblingDirs) {
    $SibExe = Join-Path $Sib "python.exe"
    if (Test-Path $SibExe) {
        Write-Host "[INFO] Copie du moteur Python portable voisin vers ce dossier (0 Mo Internet)..." -ForegroundColor Cyan
        New-Item -ItemType Directory -Force -Path $LocalPyDir | Out-Null
        Copy-Item -Path (Join-Path $Sib "*") -Destination $LocalPyDir -Recurse -Force
        & $LocalPyExe (Join-Path $AppDir "akademia_offline.py")
        exit $LASTEXITCODE
    }
}

# 3. Verification d'un Python >= 3.9 deja installe sur Windows
$SysPy = Get-Command python -ErrorAction SilentlyContinue
if ($SysPy -and ($SysPy.Source -notlike "*WindowsApps*")) {
    try {
        $verOut = & $SysPy.Source -c "import sys, sqlite3; print(f'{sys.version_info.major}.{sys.version_info.minor}')" 2>$null
        if ($LASTEXITCODE -eq 0 -and [version]$verOut -ge [version]"3.9") {
            Write-Host "[INFO] Python systeme detecte ($verOut). Demarrage..." -ForegroundColor Green
            & $SysPy.Source (Join-Path $AppDir "akademia_offline.py")
            exit $LASTEXITCODE
        }
    } catch {}
}

# 4. Telechargement unique de Python 3.12.8 portable officiel (~11 Mo)
Write-Host "[INSTALLATION UNIQUE] Telechargement de Python 3.12 portable (~11 Mo) pour autonomie totale..." -ForegroundColor Yellow
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
New-Item -ItemType Directory -Force -Path $LocalPyDir | Out-Null

$Arch = if ([Environment]::Is64BitOperatingSystem) { "amd64" } else { "win32" }
$PyUrl = "https://www.python.org/ftp/python/3.12.8/python-3.12.8-embed-$Arch.zip"
$ZipPath = Join-Path $LocalPyDir "python-embed.zip"

Invoke-WebRequest -Uri $PyUrl -OutFile $ZipPath -UseBasicParsing
Expand-Archive -Path $ZipPath -DestinationPath $LocalPyDir -Force
Remove-Item -Path $ZipPath -Force

$PthFile = Get-ChildItem -Path $LocalPyDir -Filter "python*._pth" | Select-Object -First 1
if ($PthFile) {
    $Lines = Get-Content $PthFile.FullName
    $NewLines = @()
    foreach ($Line in $Lines) {
        if ($Line -match "^#\s*import site") {
            $NewLines += "import site"
        } else {
            $NewLines += $Line
        }
    }
    $NewLines += "."
    $NewLines += ".."
    $NewLines += $AppDir
    Set-Content -Path $PthFile.FullName -Value $NewLines -Encoding ASCII
}

Write-Host "[OK] Python portable pret ! Lancement d'Akademia Malagasy Offline..." -ForegroundColor Green
& $LocalPyExe (Join-Path $AppDir "akademia_offline.py")
exit $LASTEXITCODE
