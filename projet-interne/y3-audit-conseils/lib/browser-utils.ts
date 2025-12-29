/**
 * Utilitaires pour la détection et la compatibilité des navigateurs
 */

/**
 * Vérifie si on est côté client (browser)
 */
export const isClient = typeof window !== "undefined"

/**
 * Vérifie si une fonctionnalité est disponible
 */
export function isFeatureSupported(feature: string): boolean {
  if (!isClient) return false

  const featureMap: Record<string, () => boolean> = {
    fetch: () => typeof window.fetch !== "undefined",
    promise: () => typeof Promise !== "undefined",
    map: () => typeof Map !== "undefined",
    set: () => typeof Set !== "undefined",
    matchMedia: () => typeof window.matchMedia !== "undefined",
    intersectionObserver: () => typeof IntersectionObserver !== "undefined",
    requestAnimationFrame: () => typeof window.requestAnimationFrame !== "undefined",
    localStorage: () => {
      try {
        const test = "__localStorage_test__"
        localStorage.setItem(test, test)
        localStorage.removeItem(test)
        return true
      } catch {
        return false
      }
    },
    cssVariables: () => {
      if (!isClient) return false
      const supports = window.CSS && window.CSS.supports
      return supports ? supports("(--test: red)") : false
    },
    flexbox: () => {
      if (!isClient) return false
      const supports = window.CSS && window.CSS.supports
      return supports ? supports("display", "flex") : false
    },
    grid: () => {
      if (!isClient) return false
      const supports = window.CSS && window.CSS.supports
      return supports ? supports("display", "grid") : false
    },
  }

  const checker = featureMap[feature.toLowerCase()]
  return checker ? checker() : false
}

/**
 * Récupère le scroll Y avec fallback pour anciens navigateurs
 */
export function getScrollY(): number {
  if (!isClient) return 0
  return window.scrollY || window.pageYOffset || 0
}

/**
 * Récupère la largeur de la fenêtre
 */
export function getWindowWidth(): number {
  if (!isClient) return 0
  return window.innerWidth || document.documentElement.clientWidth || 0
}

/**
 * Récupère la hauteur de la fenêtre
 */
export function getWindowHeight(): number {
  if (!isClient) return 0
  return window.innerHeight || document.documentElement.clientHeight || 0
}

/**
 * Vérifie si le navigateur supporte les fonctionnalités essentielles
 */
export function hasRequiredFeatures(): boolean {
  return (
    isFeatureSupported("fetch") &&
    isFeatureSupported("promise") &&
    isFeatureSupported("map") &&
    isFeatureSupported("set")
  )
}

/**
 * Détecte si c'est un appareil mobile
 */
export function isMobileDevice(): boolean {
  if (!isClient) return false

  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
}

/**
 * Détecte si c'est un navigateur obsolète
 */
export function isOutdatedBrowser(): boolean {
  if (!isClient) return false

  const userAgent = navigator.userAgent

  // Détection IE
  if (userAgent.includes("Trident") || userAgent.includes("MSIE")) {
    return true
  }

  // Vérifier les versions minimales
  const chromeMatch = userAgent.match(/Chrome\/(\d+)/)
  if (chromeMatch && !userAgent.includes("Edg")) {
    const version = parseInt(chromeMatch[1], 10)
    if (version < 90) return true
  }

  const firefoxMatch = userAgent.match(/Firefox\/(\d+)/)
  if (firefoxMatch) {
    const version = parseInt(firefoxMatch[1], 10)
    if (version < 88) return true
  }

  const safariMatch = userAgent.match(/Version\/(\d+).*Safari/)
  if (safariMatch && !userAgent.includes("Chrome")) {
    const version = parseInt(safariMatch[1], 10)
    if (version < 14) return true
  }

  const edgeMatch = userAgent.match(/Edg\/(\d+)/)
  if (edgeMatch) {
    const version = parseInt(edgeMatch[1], 10)
    if (version < 90) return true
  }

  // Vérifier les fonctionnalités
  return !hasRequiredFeatures()
}

/**
 * Polyfill pour requestAnimationFrame
 */
export const requestAnimationFrame = isClient
  ? window.requestAnimationFrame ||
    ((callback: FrameRequestCallback) => {
      return window.setTimeout(() => {
        callback(Date.now())
      }, 1000 / 60)
    })
  : () => 0

/**
 * Polyfill pour cancelAnimationFrame
 */
export const cancelAnimationFrame = isClient
  ? window.cancelAnimationFrame ||
    ((id: number) => {
      window.clearTimeout(id)
    })
  : () => {}

