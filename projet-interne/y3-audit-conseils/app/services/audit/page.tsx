"use client"

import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { MainSlider, type Slide } from "@/app/components/main-slider"
import { usePageImage } from "@/app/hooks/use-page-image"

export default function AuditPage() {
  usePageImage('/audit-légal.jpeg')
  
  const auditSlides: Slide[] = [
    {
      id: 1,
      title: "Audit",
      description: "Sécurisez votre croissance et inspirez confiance avec nos services d'audit professionnel.",
      image: "/23.png",
      buttonText: "Découvrir nos services",
      buttonLink: "/services/audit",
      priority: true,
    },
  ]
  
  return (
    <>
      <MainSlider slides={auditSlides} />
      <main className="py-12">
      <div className="container mx-auto px-8">
        <div className="mb-12 pl-32">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#073E5D] mb-4">Audit</h1>
          <div className="w-20 h-1 bg-[#80C342] mb-6"></div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-16 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-[#073E5D] mb-4 relative inline-block">
            Audit légal
            <span className="block w-16 h-1 bg-[#80C342] mt-1 rounded-full"></span>
          </h2>
          <p className="text-xl text-gray-700 mb-4">
            En tant que commissaires aux comptes, nous certifions la régularité, la sincérité et l'image fidèle des
            comptes annuels et consolidés de votre entreprise, conformément aux obligations légales.
          </p>
          <p className="text-xl text-gray-700 mb-4">
            Notre approche d'audit est rigoureuse et adaptée à la taille et à l'activité de votre entreprise. Nous
            identifions les risques significatifs et mettons en œuvre les procédures d'audit appropriées pour obtenir
            une assurance raisonnable que les comptes ne comportent pas d'anomalies significatives.
          </p>
        </div>

        <div className="bg-[#073E5D] p-6 rounded-lg shadow-sm mb-16 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-white mb-4 relative inline-block">
            Audit contractuel
            <span className="block w-16 h-1 bg-[#80C342] mt-1 rounded-full"></span>
          </h2>
          <p className="text-xl text-gray-300 mb-4">
            En complément de l'audit légal, nous proposons des missions d'audit contractuel adaptées à vos besoins
            spécifiques. Ces missions peuvent être ponctuelles ou récurrentes, et visent à vous fournir une assurance
            sur des aspects particuliers de votre activité.
          </p>
          <p className="text-xl text-gray-300 mb-4">
            Que vous souhaitiez évaluer la fiabilité de vos processus internes, préparer une opération de croissance
            externe, ou simplement améliorer votre performance, nos experts vous accompagnent avec des solutions sur
            mesure.
          </p>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-16">
          <h2 className="text-2xl font-semibold text-[#073E5D] mb-4 text-center">Notre approche</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-[#80C342] text-xl font-bold mb-2">1. Planification</div>
              <p className="text-gray-700 line-clamp-3">
              Nous clarifions avec vous le périmètre de la mission.
              Et construisons un plan d’audit adapté à vos attentes.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-[#80C342] text-xl font-bold mb-2">2. Exécution</div>
              <p className="text-gray-700 line-clamp-3">
                Nos équipes mettent en œuvre les procédures d'audit définies et analysent les résultats obtenus.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-[#80C342] text-xl font-bold mb-2">3. Conclusion</div>
              <p className="text-gray-700 line-clamp-3">
              Nous partageons ici nos principaux constats.
              Ainsi que les recommandations proposées.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-semibold text-[#073E5D] mb-6">Besoin d'un service d'audit ?</h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour discuter de vos besoins spécifiques et découvrir comment nos services d'audit peuvent
            contribuer à la sécurisation et au développement de votre entreprise.
          </p>
          <Link
            href="/contact/rendez-vous"
            className="inline-block bg-[#80C342] hover:bg-[#073E5D] text-white font-medium px-6 py-3 rounded-md transition-colors duration-300 text-lg"
          >
            Prendre rendez-vous
          </Link>
        </div>
      </div>
      </main>
    </>
  )
}
