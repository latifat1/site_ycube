"use client"

import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { usePageImage } from "@/app/hooks/use-page-image"
import { MainSlider, type Slide } from "@/app/components/main-slider"

export default function CarrieresPage() {
  usePageImage('/Expert.webp')
  
  const carrieresSlides: Slide[] = [
    {
      id: 1,
      title: "Carrières",
      description: "Rejoignez notre équipe et développez votre carrière dans un environnement stimulant.",
      image: "/17.png",
      buttonText: "Voir les offres",
      buttonLink: "/rejoignez-nous/carrieres",
      priority: true,
    },
  ]
  
  return (
    <>
      <MainSlider slides={carrieresSlides} />
      <main className="pt-12 pb-12">
      <div className="container mx-auto px-4">
        <div className="mb-12 pl-8 md:pl-32">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#073E5D] mb-4">Carrières</h1>
          <div className="w-20 h-1 bg-[#80C342]"></div>
        </div>

        <div className="mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8 max-w-full mx-auto">
              <h2 className="text-3xl font-bold text-[#80C342] mb-4">Pourquoi nous rejoindre ?</h2>
              <p className="text-xl text-gray-700 mb-4">
              Un environnement stimulant : évoluez au sein d'une structure à taille humaine
              offrant la rigueur des standards internationaux et l'agilité d'un cabinet indépendant.
              Nos équipes bénéficient d'une autonomie réelle et d'opportunités de développement
              rapide.
            </p>
              <p className="text-xl text-gray-700 mb-4">
              Des missions variées : intervenez auprès d'entreprises locales et de filiales de
              groupes internationaux sur des secteurs diversifiés. Chaque mission est une
              opportunité d'enrichir votre expertise et d'élargir votre champ de compétences.
            </p>
             
               <p className="text-xl text-gray-700 mb-4">
               Un cadre de travail épanouissant : intégrez une équipe soudée qui privilégie la
                 collaboration, le partage de connaissances.
            </p>
            {/* <ul className="space-y-2 mb-4">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#80C342] mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Formation continue et développement des compétences</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#80C342] mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Équilibre vie professionnelle / vie personnelle</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#80C342] mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Projets variés et clients de tous secteurs</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#80C342] mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Ambiance conviviale et collaborative</span>
              </li>
            </ul> */}
          </div>
          </div>
        </div>


        <div className="mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#073E5D] p-6 rounded-lg shadow-sm mb-8 max-w-full mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4">Profils recherchés</h2>
              <div className="w-20 h-1 bg-[#80C342] mb-6"></div>
              <p className="text-xl text-gray-200 mb-4">
                Nous recrutons régulièrement des profils aux différents niveaux d'expérience.
              </p>
              <p className="text-xl text-gray-200 mb-4">
               Candidature spontanée :
               vous vous reconnaissez dans nos valeurs d'excellence, probité, partage, innovation ?
            </p>
            
            {/* <ul className="space-y-2 mb-4">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#80C342] mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Mentorat et coaching personnalisé</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#80C342] mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Formations régulières et certifications</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#80C342] mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Évolution vers des postes à responsabilité</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#80C342] mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Mobilité interne entre nos différents services</span>
              </li>
            </ul> */}
            </div>
          </div>
        </div>


        <div className="text-center">
          <h2 className="text-2xl font-semibold text-[#073E5D] mb-6">Rejoignez notre équipe</h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Transmettez-nous votre candidature à recrutement@ycubeac.com en précisant le
            domaine qui vous intéresse. Nous étudions chaque profil avec attention et revenons
            vers les candidats dont le parcours correspond à nos besoins.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/rejoignez-nous/candidature"
              className="bg-[#80C342] text-white hover:bg-[#073E5D] px-6 py-3 rounded-md transition-colors duration-300"
            >
              Candidature spontanée
            </Link>
          </div>
        </div>
      </div>
      </main>
    </>
  )
}
