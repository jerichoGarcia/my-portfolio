
# ==========================================
# Jericho Garcia Portfolio - Git Pull Script
# ==========================================

$ErrorActionPreference = "Stop"

# Navigate to the project directory
Set-Location $PSScriptRoot

Write-Host ""
Write-Host "==================================" -ForegroundColor Cyan
Write-Host "   PORTFOLIO GITHUB PULL SCRIPT" -ForegroundColor Cyan
Write-Host "==================================" -ForegroundColor Cyan

# Check Git repository
Write-Host "`nChecking Git repository..." -ForegroundColor Yellow

git rev-parse --is-inside-work-tree *> $null

if ($LASTEXITCODE -ne 0) {
    Write-Host "Error: Not a Git repository." -ForegroundColor Red
    exit 1
}

# Check for uncommitted or untracked changes
Write-Host "`nChecking local changes..." -ForegroundColor Yellow

$changes = @(git status --porcelain)

if ($LASTEXITCODE -ne 0) {
    Write-Host "Could not check Git status." -ForegroundColor Red
    exit 1
}

if ($changes.Count -gt 0) {
    Write-Host "`nLocal changes detected!" -ForegroundColor Yellow
    Write-Host "Please commit, stash, or review your changes before pulling."
    git status --short
    exit 1
}

# Ensure we're on main
$branch = git branch --show-current

if ($LASTEXITCODE -ne 0 -or $branch -ne "main") {
    Write-Host "Please switch to the main branch first." -ForegroundColor Red
    exit 1
}

# Pull latest changes
Write-Host "`nPulling latest changes from GitHub..." -ForegroundColor Cyan

git pull --ff-only origin main

if ($LASTEXITCODE -ne 0) {
    Write-Host "`nPull failed. Check the error above." -ForegroundColor Red
    exit 1
}

Write-Host "`nSuccessfully synchronized with GitHub!" -ForegroundColor Green
Write-Host "Your local portfolio is up to date." -ForegroundColor Green

# Show current status
Write-Host "`nCurrent Git status:" -ForegroundColor Cyan
git status --short --branch
