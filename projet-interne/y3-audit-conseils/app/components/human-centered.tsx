import Link from "next/link"
import { FadeInWhenVisible } from "./animations"

export function HumanCentered() {
  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white w-full">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl">
        <div className="max-w-4xl">
          <FadeInWhenVisible>
            <div className="mb-2 sm:mb-3 md:mb-4 pl-4 sm:pl-8 md:pl-12 lg:pl-16 xl:pl-20 2xl:pl-[11.75rem]">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#073E5D]">Assurément à votre écoute</h2>
              <div className="w-12 sm:w-16 md:w-20 lg:w-24 h-1 bg-[#80C342] mb-3 sm:mb-4 md:mb-5"></div>
            </div>
          </FadeInWhenVisible>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <FadeInWhenVisible>
            <div>
              <div className="bg-gray-50 p-4 sm:p-5 md:p-6 lg:p-8 rounded-lg shadow-sm mb-4 sm:mb-6 md:mb-8 max-w-3xl mx-auto">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#80C342] mb-2 sm:mb-3 md:mb-4">L'humain au cœur de notre activité</h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-700">
                  Construire une relation de confiance avec vous indépendemment de la taille de votre entreprise. Raison pour laquelle une place de choix est donnée aux échanges.
                </p>
              </div>

              <div className="mt-4 sm:mt-6 md:mt-8 text-center">
                <Link
                  href="/contact/rendez-vous"
                  className="inline-block bg-[#80C342] hover:bg-gray-700 text-white font-medium px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-md transition-colors duration-300 text-sm sm:text-base"
                >
                  Voir plus
                </Link>
              </div>
            </div>
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  )
}
