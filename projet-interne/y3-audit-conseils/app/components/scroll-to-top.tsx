"use client"

import { ChevronUp } from "lucide-react"

export function ScrollToTop() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 bg-[#80C342] hover:bg-[#073E5D] text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#80C342] focus:ring-offset-2"
      aria-label="Retour en haut de la page"
    >
      <ChevronUp size={24} className="animate-bounce" />
    </button>
  )
}
