
param(
    [string]$Message = "Update portfolio"
)

$ErrorActionPreference = "Stop"

# Always run Git commands from the script's folder
Set-Location $PSScriptRoot

Write-Host "`nChecking Git repository..." -ForegroundColor Cyan

git rev-parse --is-inside-work-tree
if ($LASTEXITCODE -ne 0) {
    Write-Host "Not a Git repository." -ForegroundColor Red
    exit 1
}

# Stage changes (respects .gitignore)
Write-Host "`nStaging changes..." -ForegroundColor Yellow
git add .
if ($LASTEXITCODE -ne 0) { exit 1 }

# Check whether there are staged changes
git diff --cached --quiet
if ($LASTEXITCODE -eq 0) {
    Write-Host "No new changes to commit." -ForegroundColor Yellow
}
elseif ($LASTEXITCODE -eq 1) {
    Write-Host "`nCreating commit: $Message" -ForegroundColor Cyan
    git commit -m $Message
    if ($LASTEXITCODE -ne 0) { exit 1 }
}
else {
    Write-Host "Could not check staged changes." -ForegroundColor Red
    exit 1
}

# Push existing commits
Write-Host "`nPushing to GitHub..." -ForegroundColor Cyan
git push origin main
if ($LASTEXITCODE -ne 0) {
    Write-Host "Push failed. Check the error above." -ForegroundColor Red
    exit 1
}

Write-Host "`nSuccessfully pushed to GitHub!" -ForegroundColor Green
