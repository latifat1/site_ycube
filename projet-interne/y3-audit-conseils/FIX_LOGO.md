# Guide de résolution du problème du logo

## Problème
Le logo ne s'affiche pas sur le site.

## Solutions appliquées

1. ✅ Correction de la casse : `/logo-y3.png` → `/Logo-y3.png`
2. ✅ Ajout de `unoptimized` aux composants Image pour éviter les problèmes d'optimisation

## Vérifications à faire

### 1. Redémarrer le serveur de développement
```bash
# Arrêtez le serveur (Ctrl+C) puis relancez :
cd projet-interne/y3-audit-conseils
npm run dev
```

### 2. Vider le cache du navigateur
- Appuyez sur `Ctrl + Shift + R` (ou `Cmd + Shift + R` sur Mac) pour forcer le rechargement
- Ou ouvrez les outils de développement (F12) → Onglet "Network" → Cochez "Disable cache"

### 3. Vérifier la console du navigateur
- Ouvrez les outils de développement (F12)
- Regardez l'onglet "Console" pour les erreurs
- Regardez l'onglet "Network" pour voir si le fichier `/Logo-y3.png` est chargé (statut 200) ou s'il y a une erreur 404

### 4. Vérifier que le fichier existe
Le fichier doit être à : `projet-interne/y3-audit-conseils/public/Logo-y3.png`

### 5. Si le problème persiste

#### Option A : Vérifier les permissions du fichier
Le fichier doit être accessible en lecture.

#### Option B : Vérifier la configuration Next.js
Le fichier `next.config.mjs` ne doit pas bloquer les images locales.

#### Option C : Utiliser une balise img standard (temporaire)
Si le problème persiste, vous pouvez temporairement remplacer le composant Image par une balise img standard :

```tsx
<img 
  src="/Logo-y3.png" 
  alt="Y3 Audit & Conseils" 
  className="h-14 w-auto object-contain"
/>
```

## Fichiers modifiés
- `app/components/header.tsx` - Ajout de `unoptimized`
- `app/components/navigation.tsx` - Correction de la casse et ajout de `unoptimized`
- `app/components/logo-with-text.tsx` - Ajout de `unoptimized`






