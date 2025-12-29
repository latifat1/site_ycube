"use client"

import { useEffect, useState } from "react"
import { AlertCircle } from "lucide-react"

/**
 * Composant qui détecte les navigateurs obsolètes et affiche un avertissement
 * si nécessaire. Se charge uniquement côté client.
 */
export function BrowserCheck() {
  const [showWarning, setShowWarning] = useState(false)
  const [browserInfo, setBrowserInfo] = useState<string>("")

  useEffect(() => {
    // Vérifier si on est côté client
    if (typeof window === "undefined") return

    const checkBrowser = () => {
      const userAgent = navigator.userAgent
      let isOutdated = false
      let browser = ""

      // Détection Chrome
      const chromeMatch = userAgent.match(/Chrome\/(\d+)/)
      if (chromeMatch && !userAgent.includes("Edg")) {
        const version = parseInt(chromeMatch[1], 10)
        browser = `Chrome ${version}`
        if (version < 90) {
          isOutdated = true
        }
      }

      // Détection Firefox
      const firefoxMatch = userAgent.match(/Firefox\/(\d+)/)
      if (firefoxMatch) {
        const version = parseInt(firefoxMatch[1], 10)
        browser = `Firefox ${version}`
        if (version < 88) {
          isOutdated = true
        }
      }

      // Détection Safari
      const safariMatch = userAgent.match(/Version\/(\d+).*Safari/)
      if (safariMatch && !userAgent.includes("Chrome")) {
        const version = parseInt(safariMatch[1], 10)
        browser = `Safari ${version}`
        if (version < 14) {
          isOutdated = true
        }
      }

      // Détection Edge
      const edgeMatch = userAgent.match(/Edg\/(\d+)/)
      if (edgeMatch) {
        const version = parseInt(edgeMatch[1], 10)
        browser = `Edge ${version}`
        if (version < 90) {
          isOutdated = true
        }
      }

      // Détection IE (toujours obsolète)
      if (userAgent.includes("Trident") || userAgent.includes("MSIE")) {
        isOutdated = true
        browser = "Internet Explorer"
      }

      // Vérification des fonctionnalités essentielles
      const hasRequiredFeatures =
        typeof window.fetch !== "undefined" &&
        typeof Promise !== "undefined" &&
        typeof Map !== "undefined" &&
        typeof Set !== "undefined" &&
        window.matchMedia !== undefined

      if (isOutdated || !hasRequiredFeatures) {
        setShowWarning(true)
        setBrowserInfo(browser || "votre navigateur")
      }
    }

    checkBrowser()
  }, [])

  if (!showWarning) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-yellow-50 border-t-2 border-yellow-400 p-4 shadow-lg">
      <div className="container mx-auto flex items-start gap-3">
        <AlertCircle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
        <div className="flex-1">
          <p className="text-sm font-medium text-yellow-800 mb-1">
            Navigateur obsolète détecté ({browserInfo})
          </p>
          <p className="text-xs text-yellow-700 mb-2">
            Pour une meilleure expérience, veuillez mettre à jour votre navigateur vers la dernière version.
            Certaines fonctionnalités peuvent ne pas fonctionner correctement.
          </p>
          <div className="flex gap-2 flex-wrap">
            <a
              href="https://www.google.com/chrome/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-yellow-800 underline hover:text-yellow-900"
            >
              Chrome
            </a>
            <a
              href="https://www.mozilla.org/fr/firefox/new/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-yellow-800 underline hover:text-yellow-900"
            >
              Firefox
            </a>
            <a
              href="https://www.microsoft.com/edge"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-yellow-800 underline hover:text-yellow-900"
            >
              Edge
            </a>
            <button
              onClick={() => setShowWarning(false)}
              className="text-xs text-yellow-800 underline hover:text-yellow-900 ml-auto"
            >
              Fermer
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

