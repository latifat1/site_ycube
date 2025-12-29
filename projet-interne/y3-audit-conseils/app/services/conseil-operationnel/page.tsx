import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { MainSlider, type Slide } from "../../components/main-slider"

export default function ConseilOperationnelPage() {
  const conseilOperationnelSlides: Slide[] = [
    {
      id: 1,
      title: "Conseil Opérationnel",
      description: "Optimisez, digitalisez, accélérez votre performance opérationnelle.",
      image: "/5.png",
      buttonText: "Découvrir nos services",
      buttonLink: "/services/conseil-operationnel",
      priority: true,
    },
  ]
  
  return (
    <>
      <MainSlider slides={conseilOperationnelSlides} />
      <main className="py-12">
      <div className="container mx-auto px-4">
        <div className="pl-4 md:pl-8 lg:pl-32 mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#073E5D] mb-4">Conseil opérationnel</h1>
          <div className="w-20 h-1 bg-[#80C342] mb-6"></div>
        </div>

        <div className="mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h2 className="text-3xl md:text-4xl font-bold text-[#073E5D] mb-8 relative group">
                Stratégie d'entreprise
                <div className="absolute -bottom-2 left-0 w-16 h-1 bg-[#80C342] rounded-full group-hover:w-24 transition-all duration-300"></div>
              </h2>
              <p className="text-xl text-gray-700 mb-4">
                Nous vous accompagnons dans la définition et la mise en œuvre de votre stratégie d'entreprise, en tenant
                compte de vos objectifs, de votre environnement concurrentiel et des tendances de votre marché.
              </p>
              <p className="text-xl text-gray-700 mb-4">
                Notre approche collaborative vous permet de bénéficier de notre expertise tout en valorisant votre
                connaissance approfondie de votre activité, pour élaborer une stratégie pertinente et réaliste.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-[#073E5D] to-[#0a4a6b] rounded-lg shadow-sm p-6 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 relative group">
                Transformation digitale
                <div className="absolute -bottom-2 left-0 w-16 h-1 bg-[#80C342] rounded-full group-hover:w-24 transition-all duration-300"></div>
              </h2>
              <div className="space-y-6">
                <p className="text-gray-100 text-xl leading-relaxed hover:text-white transition-colors duration-200">
                  Nous vous aidons à tirer parti des opportunités offertes par le digital pour transformer votre modèle
                  d'affaires, optimiser vos processus et améliorer l'expérience de vos clients.
                </p>
                <p className="text-gray-100 text-xl leading-relaxed hover:text-white transition-colors duration-200">
                  Notre expertise vous permet d'identifier les technologies les plus pertinentes pour votre activité et de
                  les intégrer efficacement dans votre organisation, en tenant compte des aspects humains et culturels du
                  changement.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg shadow-sm mb-16">
          <h2 className="text-4xl font-bold text-[#073E5D] mb-4 text-center">Nos domaines d'expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-[#80C342] text-xl font-bold mb-2">Performance opérationnelle</div>
              <p className="text-lg text-gray-700">
                Nous vous aidons à l'ensemble de vos processus et à améliorer votre efficacité opérationnelle pour gagner en
                compétitivité.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-[#80C342] text-xl font-bold mb-2">Innovation</div>
              <p className="text-lg text-gray-700">
                Nous vous accompagnons dans votre démarche d'innovation pour développer de nouveaux produits
                ou modèles d'affaires.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-[#80C342] text-xl font-bold mb-2">Conduite du changement</div>
              <p className="text-lg text-gray-700">
              Nous prenons en charge les dimensions humaines et organisationnelles.
              Afin de garantir la réussite de vos transformations.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold text-[#073E5D] mb-6">Besoin d'un accompagnement en conseil opérationnel ?</h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour discuter de vos besoins spécifiques et découvrir comment nos services de conseil opérationnel
            peuvent contribuer à la performance et au développement de votre entreprise.
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
