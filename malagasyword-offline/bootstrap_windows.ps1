# PowerShell 5.1+ compatible launcher & automatic portable Python 3 bootstrapper
# Zero admin rights, zero installer wizard, zero PATH changes required.

$ErrorActionPreference = "Continue"
$AppRoot = Split-Path -Parent $MyInvocation.MyCommand.Definition
Set-Location -LiteralPath $AppRoot

$Host.UI.RawUI.WindowTitle = "MalagasyWord Offline (Mode Complet)"

function Test-PythonCandidate {
    param(
        [string]$Exe,
        [string[]]$PrefixArgs = @()
    )
    if ([string]::IsNullOrWhiteSpace($Exe)) { return $false }
    if ($Exe -like "*WindowsApps*") { return $false }
    try {
        $prevEap = $ErrorActionPreference
        $ErrorActionPreference = "SilentlyContinue"
        $out = & $Exe @PrefixArgs -c "import sqlite3, ssl, http.server; c=sqlite3.connect(':memory:'); c.execute('CREATE VIRTUAL TABLE t USING fts5(x)'); print('MW_PYTHON_OK')" 2>$null
        $code = $LASTEXITCODE
        $ErrorActionPreference = $prevEap
        if ($code -eq 0 -and ($out -join "") -match "MW_PYTHON_OK") {
            return $true
        }
    } catch {
        return $false
    }
    return $false
}

function Find-WorkingPython {
    # 1. Portable Python deja telecharge dans .\runtime\python\python.exe
    $portableExe = Join-Path $AppRoot "runtime\python\python.exe"
    if (Test-Path -LiteralPath $portableExe) {
        if (Test-PythonCandidate -Exe $portableExe) {
            return @{ Exe = $portableExe; Args = @() }
        }
    }

    # 2. Lanceur officiel Windows py.exe
    $pyCmd = Get-Command "py.exe" -ErrorAction SilentlyContinue
    if ($pyCmd -and (Test-PythonCandidate -Exe $pyCmd.Source -PrefixArgs @("-3"))) {
        return @{ Exe = $pyCmd.Source; Args = @("-3") }
    }

    # 3. python.exe dans le PATH (hors alias Windows Store)
    $pyPathCmds = Get-Command "python.exe" -All -ErrorAction SilentlyContinue
    foreach ($cmd in $pyPathCmds) {
        if (Test-PythonCandidate -Exe $cmd.Source) {
            return @{ Exe = $cmd.Source; Args = @() }
        }
    }

    # 4. Dossiers d'installation courants sous Windows (meme si PATH non coche)
    $commonPatterns = @(
        "$env:LOCALAPPDATA\Programs\Python\Python3*\python.exe",
        "$env:ProgramFiles\Python3*\python.exe",
        "${env:ProgramFiles(x86)}\Python3*\python.exe",
        "C:\Python3*\python.exe"
    )
    foreach ($pat in $commonPatterns) {
        $found = Get-Item -Path $pat -ErrorAction SilentlyContinue | Sort-Object FullName -Descending
        foreach ($item in $found) {
            if (Test-PythonCandidate -Exe $item.FullName) {
                return @{ Exe = $item.FullName; Args = @() }
            }
        }
    }

    return $null
}

$pyInfo = Find-WorkingPython

if (-not $pyInfo) {
    Write-Host "======================================================================" -ForegroundColor Cyan
    Write-Host " Premier lancement : Python 3 n'est pas installe sur ce PC." -ForegroundColor Yellow
    Write-Host " Telechargement automatique de Python 3.12 Portable officiel (~11 Mo)" -ForegroundColor Cyan
    Write-Host " (Aucune installation systeme ni droits administrateur requis !)" -ForegroundColor Cyan
    Write-Host "======================================================================" -ForegroundColor Cyan
    Write-Host ""

    $runtimeDir = Join-Path $AppRoot "runtime\python"
    $zipPath = Join-Path $AppRoot "runtime\python-embed.zip"
    New-Item -ItemType Directory -Force -Path (Join-Path $AppRoot "runtime") | Out-Null

    $arch = $env:PROCESSOR_ARCHITECTURE
    if ($env:PROCESSOR_ARCHITEW6432) {
        $arch = $env:PROCESSOR_ARCHITEW6432
    }

    if ($arch -eq "ARM64") {
        $pyUrl = "https://www.python.org/ftp/python/3.12.8/python-3.12.8-embed-arm64.zip"
    } elseif ([Environment]::Is64BitOperatingSystem) {
        $pyUrl = "https://www.python.org/ftp/python/3.12.8/python-3.12.8-embed-amd64.zip"
    } else {
        $pyUrl = "https://www.python.org/ftp/python/3.12.8/python-3.12.8-embed-win32.zip"
    }

    try {
        [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
    } catch {}

    if (Test-Path -LiteralPath $zipPath) {
        Remove-Item -LiteralPath $zipPath -Force -ErrorAction SilentlyContinue
    }

    $downloaded = $false
    $curlExe = Join-Path $env:SystemRoot "System32\curl.exe"
    if (Test-Path -LiteralPath $curlExe) {
        Write-Host "[1/2] Telechargement depuis python.org ($pyUrl)..." -ForegroundColor Green
        & $curlExe -L --fail --retry 3 -o $zipPath $pyUrl
        if ($LASTEXITCODE -eq 0 -and (Test-Path -LiteralPath $zipPath) -and ((Get-Item -LiteralPath $zipPath).Length -gt 5000000)) {
            $downloaded = $true
        }
    }

    if (-not $downloaded) {
        Write-Host "[1/2] Telechargement via PowerShell depuis python.org..." -ForegroundColor Green
        try {
            $ProgressPreference = "Continue"
            Invoke-WebRequest -Uri $pyUrl -OutFile $zipPath -UseBasicParsing
            if ((Test-Path -LiteralPath $zipPath) -and ((Get-Item -LiteralPath $zipPath).Length -gt 5000000)) {
                $downloaded = $true
            }
        } catch {
            Write-Host ""
            Write-Host "[!] Echec du telechargement automatique : $($_.Exception.Message)" -ForegroundColor Red
            Write-Host "Verifiez que votre connexion Internet est active pour ce premier lancement." -ForegroundColor Yellow
            exit 1
        }
    }

    Write-Host "[2/2] Extraction du moteur Python portable dans .\runtime\python\ ..." -ForegroundColor Green
    if (Test-Path -LiteralPath $runtimeDir) {
        Remove-Item -LiteralPath $runtimeDir -Recurse -Force -ErrorAction SilentlyContinue
    }
    New-Item -ItemType Directory -Force -Path $runtimeDir | Out-Null

    try {
        Add-Type -AssemblyName System.IO.Compression.FileSystem
        [System.IO.Compression.ZipFile]::ExtractToDirectory($zipPath, $runtimeDir)
    } catch {
        Expand-Archive -LiteralPath $zipPath -DestinationPath $runtimeDir -Force
    }

    Remove-Item -LiteralPath $zipPath -Force -ErrorAction SilentlyContinue

    # Configure python312._pth SANS BOM UTF-8 pour inclure la racine de l'application
    $pthFile = Join-Path $runtimeDir "python312._pth"
    $utf8NoBom = New-Object System.Text.UTF8Encoding($false)
    [System.IO.File]::WriteAllLines($pthFile, @("python312.zip", ".", "..\..", "import site"), $utf8NoBom)

    $portableExe = Join-Path $runtimeDir "python.exe"
    if (-not (Test-PythonCandidate -Exe $portableExe)) {
        Write-Host "[!] Le moteur Python portable extrait n'a pas pu demarrer correctement." -ForegroundColor Red
        exit 1
    }

    Write-Host "Moteur Python portable pret ! (Il fonctionnera desormais 100% hors-ligne)." -ForegroundColor Green
    Write-Host ""
    $pyInfo = @{ Exe = $portableExe; Args = @() }
}

$scriptPath = Join-Path $AppRoot "malagasyword_offline.py"
$allArgs = @() + $pyInfo.Args + @($scriptPath) + $args
& $pyInfo.Exe @allArgs
exit $LASTEXITCODE
