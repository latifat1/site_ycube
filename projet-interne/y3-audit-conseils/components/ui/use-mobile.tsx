import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    // Vérifier si on est côté client
    if (typeof window === "undefined") {
      setIsMobile(false)
      return
    }

    // Vérifier si matchMedia est disponible
    if (typeof window.matchMedia === "undefined") {
      // Fallback pour les navigateurs sans matchMedia
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
      return
    }

    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    
    // Vérifier si addEventListener existe
    if (mql.addEventListener) {
      mql.addEventListener("change", onChange)
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
      return () => mql.removeEventListener("change", onChange)
    } else {
      // Fallback pour les anciens navigateurs
      mql.addListener(onChange)
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
      return () => mql.removeListener(onChange)
    }
  }, [])

  return !!isMobile
}
