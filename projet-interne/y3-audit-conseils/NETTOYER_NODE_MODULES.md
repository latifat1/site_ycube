# Guide pour nettoyer node_modules

## Taille actuelle
- **node_modules** : ~600 MB

## ⚠️ IMPORTANT
**NE SUPPRIMEZ JAMAIS manuellement des fichiers dans node_modules !**
Cela peut casser votre projet. Utilisez plutôt les méthodes ci-dessous.

## Méthodes de nettoyage

### 1. Nettoyer les dépendances non utilisées (Recommandé)

```bash
# Installer depcheck (outil pour détecter les dépendances inutilisées)
npm install -g depcheck

# Analyser les dépendances
depcheck

# Supprimer les dépendances inutilisées du package.json manuellement
# Puis réinstaller
npm install
```

### 2. Nettoyer avec npm prune

```bash
# Supprime les packages non listés dans package.json
npm prune

# Avec vérification
npm prune --dry-run
```

### 3. Nettoyage complet (si vous avez des problèmes)

```bash
# 1. Supprimer node_modules et package-lock.json
rm -rf node_modules package-lock.json
# Sur Windows PowerShell:
Remove-Item -Recurse -Force node_modules, package-lock.json

# 2. Nettoyer le cache npm
npm cache clean --force

# 3. Réinstaller
npm install
```

### 4. Utiliser pnpm (plus efficace)

pnpm est plus efficace en espace disque :

```bash
# Installer pnpm
npm install -g pnpm

# Supprimer node_modules
Remove-Item -Recurse -Force node_modules

# Installer avec pnpm
pnpm install
```

## Dépendances potentiellement inutilisées à vérifier

### Dépendances à vérifier manuellement :

1. **@strapi/client** - Vérifiez si vous utilisez Strapi
   ```bash
   grep -r "@strapi/client" app/
   ```

2. **@emotion/is-prop-valid** - Utilisé par framer-motion, peut être une dépendance transitive
   - Probablement inutile si vous n'utilisez pas directement Emotion

3. **Certains composants Radix UI** - Vérifiez lesquels sont réellement utilisés :
   - `@radix-ui/react-accordion`
   - `@radix-ui/react-aspect-ratio`
   - `@radix-ui/react-avatar`
   - `@radix-ui/react-context-menu`
   - `@radix-ui/react-menubar`
   - `@radix-ui/react-navigation-menu`
   - `@radix-ui/react-progress`
   - `@radix-ui/react-radio-group`
   - `@radix-ui/react-separator`
   - `@radix-ui/react-toggle`
   - `@radix-ui/react-toggle-group`

### Composants UI utilisés (à NE PAS supprimer) :

- ✅ `sonner` - Utilisé dans `components/ui/sonner.tsx`
- ✅ `cmdk` - Utilisé dans `components/ui/command.tsx`
- ✅ `input-otp` - Utilisé dans `components/ui/input-otp.tsx`
- ✅ `vaul` - Utilisé dans `components/ui/drawer.tsx`
- ✅ `react-resizable-panels` - Utilisé dans `components/ui/resizable.tsx`
- ✅ `recharts` - Utilisé dans `components/ui/chart.tsx`
- ✅ `react-day-picker` - Utilisé dans `components/ui/calendar.tsx`
- ✅ `embla-carousel-react` - Utilisé dans `components/ui/carousel.tsx`
- ✅ `date-fns` - Utilisé avec react-day-picker

## Script d'analyse

Exécutez le script PowerShell pour analyser automatiquement :

```powershell
cd projet-interne/y3-audit-conseils
.\analyser-dependances.ps1
```

## Réduction de taille attendue

Après nettoyage, vous pouvez réduire `node_modules` de :
- **~50-100 MB** si vous supprimez les dépendances inutilisées
- **Jusqu'à 200-300 MB** si vous passez à pnpm (grâce au système de liens symboliques)

## Après nettoyage

1. Testez que tout fonctionne : `npm run dev`
2. Vérifiez le build : `npm run build`
3. Si tout fonctionne, vous pouvez supprimer les dépendances du `package.json`





