"use client"

import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { MainSlider, type Slide } from "@/app/components/main-slider"
import { usePageImage } from "@/app/hooks/use-page-image"

export default function ConseilFinancierPage() {
  usePageImage('/expertises.webp')
  
  const conseilFinancierSlides: Slide[] = [
    {
      id: 1,
      title: "Conseil Financier",
      description: "Accélérez votre croissance, sécurisez vos transactions avec notre expertise en conseil financier.",
      image: "/12.png",
      buttonText: "Découvrir nos services",
      buttonLink: "/services/conseil-financier",
      priority: true,
    },
  ]
  
  return (
    <>
      <MainSlider slides={conseilFinancierSlides} />
      <main className="py-12">
      <div className="container mx-auto px-4">
        <div className="mb-12 pl-8 md:pl-32">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#073E5D] mb-4">Conseil Financier</h1>
          <div className="w-20 h-1 bg-[#80C342]"></div>
        </div>

        <div className="mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8 max-w-full mx-auto">
              <h2 className="text-3xl font-bold text-[#80C342] mb-4 relative inline-block">
                Analyse financière
                <span className="block w-16 h-1 bg-[#80C342] mt-1 rounded-full"></span>
              </h2>
              <p className="text-xl text-gray-700 mb-4">
                Nous réalisons une analyse approfondie de votre situation financière pour identifier les forces, les
                faiblesses et les opportunités d'amélioration. Cette analyse vous permet de prendre des décisions
                éclairées et d'optimiser votre stratégie financière.
              </p>
              <p className="text-xl text-gray-700 mb-4">
                Notre approche personnalisée tient compte de vos objectifs spécifiques et des particularités de votre
                secteur d'activité pour vous fournir des recommandations pertinentes et adaptées.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#073E5D] p-6 rounded-lg shadow-sm mb-8 max-w-full mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 relative inline-block">
                Planification financière
                <span className="block w-16 h-1 bg-[#80C342] mt-1 rounded-full"></span>
              </h2>
              <p className="text-xl text-gray-200 mb-4">
                Nous vous aidons à élaborer une planification financière solide pour atteindre vos objectifs à court,
                moyen et long terme. Cette démarche prospective vous permet d'anticiper les besoins de financement et
                d'optimiser l'allocation de vos ressources.
              </p>
              <p className="text-xl text-gray-200 mb-4">
                Notre expertise vous permet de sécuriser le développement de votre entreprise en identifiant les leviers
                de croissance et en prévenant les risques financiers potentiels.
              </p>
            </div>
          </div>
        </div>


        <div className="mb-12">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-semibold text-[#073E5D] mb-6">Besoin d'un conseil financier ?</h2>
          </div>
          <div className="text-center">
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              Contactez-nous pour discuter de vos besoins spécifiques et découvrir comment nos services de conseil
              financier peuvent contribuer à la performance et au développement de votre entreprise.
            </p>
            <Link
              href="/contact/rendez-vous"
              className="inline-block bg-[#80C342] hover:bg-[#073E5D] text-white font-medium px-6 py-3 rounded-md transition-colors duration-300 text-lg"
            >
              Prendre rendez-vous
            </Link>
          </div>
        </div>
      </div>
      </main>
    </>
  )
}
