# Script pour analyser les dependances et identifier celles qui peuvent etre supprimees
Write-Host "=== ANALYSE DES DEPENDANCES ===" -ForegroundColor Cyan
Write-Host ""

$packageJson = Get-Content "package.json" | ConvertFrom-Json
$dependencies = $packageJson.dependencies.PSObject.Properties.Name
$devDependencies = $packageJson.devDependencies.PSObject.Properties.Name

Write-Host "Dependances a analyser: $($dependencies.Count)" -ForegroundColor Yellow
Write-Host ""

# Liste des dependances potentiellement inutilisees
$potentiallyUnused = @()

# Verifier certaines dependances specifiques
$checks = @{
    "@strapi/client" = "strapi"
    "cmdk" = "cmdk"
    "input-otp" = "input-otp"
    "vaul" = "vaul"
    "react-resizable-panels" = "react-resizable"
    "recharts" = "recharts"
    "sonner" = "sonner"
    "react-day-picker" = "react-day-picker|day-picker"
    "embla-carousel-react" = "embla"
    "date-fns" = "date-fns"
    "@emotion/is-prop-valid" = "@emotion/is-prop-valid"
}

Write-Host "Verification des dependances potentiellement inutilisees:" -ForegroundColor Yellow
Write-Host ""

foreach ($dep in $checks.Keys) {
    if ($dependencies -contains $dep) {
        $pattern = $checks[$dep]
        $found = $false
        
        # Chercher dans les fichiers .ts, .tsx, .js, .jsx
        $files = Get-ChildItem -Path . -Include *.ts,*.tsx,*.js,*.jsx -Recurse -ErrorAction SilentlyContinue | 
                 Where-Object { $_.FullName -notlike "*\node_modules\*" -and $_.FullName -notlike "*\.next\*" }
        
        foreach ($file in $files) {
            $content = Get-Content $file.FullName -Raw -ErrorAction SilentlyContinue
            if ($content -and $content -match $pattern) {
                $found = $true
                break
            }
        }
        
        if (-not $found) {
            Write-Host "  [POSSIBLEMENT INUTILISE] $dep" -ForegroundColor Red
            $potentiallyUnused += $dep
        } else {
            Write-Host "  [UTILISE] $dep" -ForegroundColor Green
        }
    }
}

Write-Host ""
Write-Host "=== RECOMMANDATIONS ===" -ForegroundColor Cyan
Write-Host ""

if ($potentiallyUnused.Count -gt 0) {
    Write-Host "Dependances potentiellement inutilisees trouvees:" -ForegroundColor Yellow
    foreach ($dep in $potentiallyUnused) {
        Write-Host "  - $dep" -ForegroundColor Gray
    }
    Write-Host ""
    Write-Host "Actions recommandees:" -ForegroundColor Yellow
    Write-Host "1. Verifiez manuellement si ces dependances sont vraiment inutilisees" -ForegroundColor White
    Write-Host "2. Si confirme, supprimez-les du package.json" -ForegroundColor White
    Write-Host "3. Executez: npm install" -ForegroundColor White
    Write-Host "4. Ou utilisez: npm prune pour nettoyer automatiquement" -ForegroundColor White
} else {
    Write-Host "Toutes les dependances verifiees semblent etre utilisees." -ForegroundColor Green
}

Write-Host ""
Write-Host "=== NETTOYAGE GENERAL ===" -ForegroundColor Cyan
Write-Host ""
Write-Host "Pour nettoyer node_modules de maniere securisee:" -ForegroundColor Yellow
Write-Host "1. npm prune - Supprime les dependances non listees dans package.json" -ForegroundColor White
Write-Host "2. npm cache clean --force - Nettoie le cache npm" -ForegroundColor White
Write-Host "3. Supprimez node_modules et package-lock.json, puis npm install" -ForegroundColor White
Write-Host ""





