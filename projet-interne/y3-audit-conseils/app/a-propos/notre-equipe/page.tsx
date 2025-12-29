"use client"

import { useState, useEffect } from "react"
import { useSearchParams, useRouter, usePathname } from "next/navigation"
import { ExpertModal } from "@/app/components/expert-modal"
import { MainSlider, type Slide } from "@/app/components/main-slider"
import { ExpertsCarousel } from "@/app/components/experts-carousel"
import { FadeInWhenVisible } from "@/app/components/animations"
import { Expert } from "@/app/types/expert"
import { usePageImage } from "@/app/hooks/use-page-image"

// Base de données des associés
const partners: Expert[] = [
  {
    id: 1,
    name: "Georges Yao-Yao",
    position: "Associé Co-Fondateur",
    image: "/georges.PNG",
    slug: "georges-yaoyao",
    isPartner: true,
    description: [
      "Fort de plus de vingt années d’expérience en audit et en comptabilité, Georges apporte une expertise internationale remarquable, acquise notamment chez Deloitte et Grant Thornton. Son parcours l’a conduit des bureaux de Deloitte Global aux États-Unis (2007-2010) aux fonctions de direction au sein du groupe IPS (WA) et de Deloitte Afrique francophone.",
      "Spécialisé dans l’accompagnement de filiales de groupes internationaux et d’entreprises locales, Georges a développé une expertise sectorielle approfondie dans la finance, l’agro-industrie, les services, l’énergie, les médias et les télécommunications. Avant de co-fonder Y3 Audit & Conseils, il a contribué activement au développement de Grant Thornton Audit Côte d’Ivoire.",
      "Georges pilote nos missions d’audit et de conseil opérationnel, alliant rigueur technique et vision stratégique pour répondre aux enjeux de nos clients.",
    ],
    contact: {
      email: "georges.yaoyao@ycubeac.com",
      phone: "+2250546006393",
      linkedin: "https://www.linkedin.com/in/georgesyaoyao/",
    },
  },
  {
    id: 2,
    name: "Yves Dodo",
    position: "Associé Co-Fondateur",
    image: "/Yvesss.jpg",
    slug: "yves-dodo",
    isPartner: true,
    description: [
      "Reconnu pour son professionnalisme et sa vision stratégique, Yves incarne l’excellence de l’expertise comptable en Côte d’Ivoire. Fort de plus de 17 années d’expérience, il accompagne les dirigeants d’entreprises dans leurs décisions financières avec rigueur, clarté et engagement. Après avoir débuté sa carrière en France, Yves a poursuivi son parcours en Côte d’Ivoire où il a occupé des postes à responsabilité au sein de cabinets internationaux prestigieux tels que Deloitte et Grant Thornton Audit CI .",
      "Cette double expérience, entre standards internationaux et réalités locales, lui confère une vision à 360° des enjeux économiques, comptables et fiscaux des entreprises opérant en Afrique. Yves intervient dans des secteurs variés — transport aérien, banque, BTP, services — et possède une maîtrise approfondie de la consolidation des comptes de groupes, de l'analyse comptable et des référentiels IFRS, SYSCOHADA et PCG.",
      "Son sens de l’analyse, sa précision technique et sa capacité à vulgariser les chiffres en font un partenaire stratégique pour les dirigeants qu’il accompagne. Convaincu que la comptabilité est bien plus qu’une obligation légale, Yves la considère comme un levier de pilotage et d’anticipation. Il met un point d’honneur à créer une relation de confiance avec ses clients, en leur apportant des conseils sur mesure, adaptés à leur environnement et à leurs ambitions",
    ],
    contact: {
      email: "yves.dodo@ycubeac.com",
      phone: "",
      linkedin: "https://www.linkedin.com/in/yves-dodo-966094150/",
    },
  },
]

// Base de données des experts
const experts: Expert[] = [
  {
    id: 3,
    name: "Christiane Guehi",
    position: "Senior Manager Expertise Comptable",
    image: "/christiane Guei.JPG",
    slug: "christiane-guehi",
    isPartner: false,
    bio: "Christiane Guehi est Manager chez Y3 Audit & Conseils. Elle est basée à Abidjan.",
    description: [
      "Diplômée du Diplôme Supérieur de Gestion et de Comptabilité de l'INTEC Paris, Christiane a rejoint Y3 Audit & Conseils en octobre 2024, apportant une solide expérience de 9 années acquises chez Deloitte Côte d'Ivoire et Sénégal.",
      "Spécialiste reconnue en expertise comptable, audit et commissariat aux comptes, elle pilote des missions diversifiées allant de l'audit légal et contractuel à la consolidation des comptes. Son expertise s'étend également à l'optimisation fiscale, ainsi qu'à la gestion financière et de la paie.",
      "Christiane conjugue rigueur technique et approche pragmatique pour délivrer à nos clients des solutions adaptées à leurs besoins opérationnels et réglementaires.",
    ],
    contact: {
      email: "christiane.guehi@ycubeac.com",
      phone: "+225 05 64 869 789",
      linkedin: "https://www.linkedin.com/in/christiane-guehi-seoulou-5a1814135/",
    },
  },
  {
    id: 4,
    name: "Stéphane Gnahoua",
    position: " Senior Manager Expertise Comptable",
    image: "/stéphane GNAHOUA.JPG",
    slug: "stephane-gnahoua",
    isPartner: false,
    bio: "Stéphane Gnahoua est Manager chez Y3 Audit & Conseils. Il est basé à Abidjan.",
    description: [
      "Titulaire d'un Master 2 en Comptabilité, Contrôle et Audit, Stéphane enrichit notre équipe de ses 10 années d'expérience en expertise comptable, audit et conseil. Son parcours professionnel l'a mené chez Jean-Luc Ruelle puis Grant Thornton, où il a affiné son expertise.",
      "Stéphane maîtrise l'ensemble des dimensions de l'accompagnement d'entreprise : expertise comptable, audit, gestion organisationnelle et financière, ainsi que fiscalité. Cette polyvalence lui permet d'appréhender de manière globale les problématiques de nos clients et de proposer des solutions intégrées.",
      "Son approche méthodique et sa connaissance approfondie des enjeux sectoriels font de lui un interlocuteur de référence pour nos missions les plus complexes.",
    ],
    contact: {
      email: "stephane.gnahoua@ycubeac.com",
      phone: "+225 05 54 74 60 69",
      linkedin: "https://www.linkedin.com/in/st%C3%A9phane-gnahoua-09a4451b3/",
    },
  },
  {
    id: 5,
    name: "Axelle Amani",
    position: " Senior Manager Audit",
    image: "/Axelle Amani.JPG",
    slug: "axelle-amani",
    isPartner: false,
    bio: "Axelle Amani est Manager Audit chez Y3 Audit & Conseils. Elle est basée à Abidjan.",
    description: [
      "Diplômée du Diplôme Supérieur de Gestion et de Comptabilité de l'INTEC Paris, Axelle apporte à notre équipe 8 années d'expérience dont 5 années passées chez Deloitte. Cette solide formation lui a permis de développer une expertise reconnue en audit, expertise comptable et conseil.",
      "Au sein de Y3 Audit & Conseils, Axelle se consacre principalement aux missions d'audit, où elle déploie sa rigueur méthodologique et sa capacité d'analyse pour garantir la qualité de nos interventions. Son parcours chez Deloitte lui confère une vision internationale des standards d'excellence que nous appliquons quotidiennement.",
      "Axelle représente la nouvelle génération de professionnalisme alliant formation de haut niveau et expérience opérationnelle solide.",
    ],
    contact: {
      email: "axelle.amani@ycubeac.com",
      phone: "+225 05 96 45 19 03",
      linkedin: "https://www.linkedin.com/in/axelle-amani-25275592/",
    },
  },
  {
    id: 6,
    name: "Stéphanie Taki",
    position: "Manager Audit",
    image: "/stéphanie taki1.JPG",
    slug: "stephanie-taki",
    isPartner: false,
    bio: "Stéphanie Taki est Manager Conseil Fiscal chez Y3 Audit & Conseils. Elle est basée à Abidjan.",
    description: [
      "Titulaire d'un MBA en Audit et Contrôle de Gestion du CESAG, Stéphanie enrichit notre équipe de ses 8 années chez PwC. Cette formation d'excellence lui a permis de développer une expertise complète en audit.",
      "Spécialisée dans l'évaluation des procédures de contrôle interne, la collecte et validation d'informations financières, ainsi que la préparation de livrables de qualité, Stéphanie maîtrise également la question de la relation client et l'encadrement d'équipes. Ces compétences transversales en font une collaboratrice polyvalente et autonome.",
      "Au sein de Y3 Audit & Conseils, elle concentre son expertise sur nos missions d'audit en apportant la rigueur et la méthodologie acquises dans un environnement international de premier plan.",
    ],
    contact: {
      email: "stephanie.taki@ycubeac.com",
      phone: "+225 05 07 49 14 36",
      linkedin: "https://www.linkedin.com/in/stephanie-rebecca-taki-a16012108/",
    },
  },
  {
    id: 7,
    name: "Augustin Kpantché",
    position: "Manager Conseil Financier",
    image: "/Augustin.JPG",
    slug: "augustin-kpantche",
    isPartner: false,
    bio: "Augustin Kpantché est Expert Comptable Senior chez Y3 Audit & Conseils. Il est basé à Abidjan.",
    description: [
      "Titulaire d'un Master en Banque et Finance du CESAG de Dakar, Augustin apporte à Y3 Audit & Conseils plus de 10 années d'expérience dans l'univers financier. Son parcours l'a mené de l'analyse des risques à l'analyse financière, avant de diriger le département Banque d'Affaires d'une société de Gestion et d'intermédiation.",
      "Cette progression lui a permis de développer une expertise pointue en modélisation financière, valorisation d'entreprise, levée de fonds, fusions-acquisitions et élaboration de business plans. Sa vision stratégique et sa connaissance approfondie des mécanismes financiers font de lui un interlocuteur privilégié pour nos clients dans leurs projets de développement et de transformation.",
      "Augustin pilote nos missions de conseil financier avec la rigueur et l'expertise acquises au cœur des métiers de la finance, offrant à nos clients un accompagnement de haut niveau dans leurs décisions d'investissement.",
    ],
    contact: {
      email: "augustin.kpantche@ycubeac.com",
      phone: "+225 05 96 45 22 09",
      linkedin: "https://www.linkedin.com/in/augustin-kpantche-6658a427/",
    },
  },
  {
    id: 8,
    name: "Revita Ouléi",
    position: "Manager Conseil Opérationnel",
    image: "/revita oule.JPG",
    slug: "revita-oulei",
    isPartner: false,
    bio: "Revita Ouléi est Manager Conseil Opérationnel chez Y3 Audit & Conseils. Elle est basée à Abidjan.",
    description: [
      "Titulaire d'un Master en Audit & Contrôle de Gestion du CESAG, Revita apporte à notre équipe plus de 8 années d'expérience spécialisée dans l'environnement bancaire de l'UEMOA, acquise notamment chez PwC Abidjan.",
      "Son expertise s'est forgée à travers l'accompagnement de nombreux établissements financiers sur des projets stratégiques : automatisation des processus prudentiels, conformités LCB-FT et projets de transformations. Elle maîtrise parfaitement les dispositifs Bâle I et II, la conformité réglementaire, la cartographie des processus et des risques, ainsi que la gestion de projet.",
      "Cette spécialisation sectorielle unique permet à Revita d'apporter une valeur ajoutée par son expertise technique approfondie et sa connaissance spécifique à la zone UEMOA.",
    ],
    contact: {
      email: "revita.oule@ycubeac.com",
      phone: "+225 07 00 88 87 47",
      linkedin: "https://www.linkedin.com/in/r%C3%A9vita-oul%C3%A9-20a663196/",
    },
  },
  {
    id: 9,
    name: "Isabella Beda",
    position: "Responsable Ressources Humaines",
    image: "/Isabella.JPG",
    slug: "isabella-beda",
    isPartner: false,
    bio: "Isabella Beda est responsable ressources humaines chez Y3 Audit & Conseils. Elle est basée à Abidjan.",
    description: [
      "Forte d'une expertise de plus de 8 ans dans le domaine des ressources humaines, Isabella Beda est  Responsable des Ressources Humaines  de Y3 Audit & Conseils.",
      "Diplômée d'un Master Manager des Ressources Humaines du Pôle Paris Alternance, Isabella a construit son parcours professionnel autour de trois piliers fondamentaux : le recrutement stratégique, l'accompagnement managérial et le développement des talents.",
      "Son expérience diversifiée lui a permis d'évoluer au sein de structures variées, allant de l'intérim spécialisé aux services IT.",
      "Spécialiste du recrutement IT et du sourcing de profils en pénurie, Isabella a développé une expertise reconnue dans l'acquisition de talents, la gestion des carrières et la mise en œuvre de politiques RH adaptées aux enjeux des entreprises modernes. Elle a également piloté des projets structurants tels que l'amélioration du parcours d'intégration, la conception de plans de formation et le déploiement de processus RH agiles.",
      "Chez Y3 Audit & Conseils, Isabella met son savoir-faire au service du développement humain de l'entreprise, en accompagnant les équipes dans leur évolution et en garantissant une gestion RH de proximité, alignée sur les valeurs et les ambitions du cabinet.",
    ],
    contact: {
      email: "isabella.beda@ycubeac.com",
      phone: "+225 05 08 69 83 52",
      linkedin: "https://www.linkedin.com/in/isabella-beda-659918142/?originalSubdomain=fr",
    },
  },
]

export default function TeamPage() {
  usePageImage('/équipement.webp')
  
  const teamSlides: Slide[] = [
    {
      id: 1,
      title: "Une équipe pluridisciplinaire",
      description: "Des experts à votre écoute pour répondre à tous vos besoins.",
      image: "/histoire1.jpg",
      buttonText: "Découvrir l'équipe",
      buttonLink: "/a-propos/notre-equipe",
      priority: true,
    },
  ]
  
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()
  const [selectedExpert, setSelectedExpert] = useState<Expert | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Check URL for expert slug
  useEffect(() => {
    const expertSlug = searchParams.get("expert")
    if (expertSlug) {
      const expert = [...partners, ...experts].find((e) => e.slug === expertSlug)
      if (expert) {
        setSelectedExpert(expert)
        setIsModalOpen(true)
      }
    } else {
      setIsModalOpen(false)
    }
  }, [searchParams])

  const handleExpertClick = (expert: Expert) => {
    setSelectedExpert(expert)
    setIsModalOpen(true)
    const newUrl = `${pathname}?expert=${expert.slug}`
    window.history.pushState({ path: newUrl }, "", newUrl)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    window.history.pushState({ path: pathname }, "", pathname)
  }

  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      {/* Hero Slider - Optimisé pour tous les écrans */}
      <section className="w-full overflow-hidden relative pt-0 xs:pt-0 sm:pt-0 md:pt-0">
        <MainSlider slides={teamSlides} />
      </section>

      {/* Section Titre - Responsive spacing et typography */}
      <section id="team-section" className="py-6 xs:py-8 sm:py-10 md:py-12 lg:py-16">
        <div className="container mx-auto px-2 xs:px-4 sm:px-6 md:px-8 max-w-7xl">
          <FadeInWhenVisible>
            <div className="pl-2 xs:pl-4 sm:pl-6 md:pl-8 lg:pl-16 xl:pl-32 mb-6 xs:mb-8 sm:mb-10 md:mb-12 lg:mb-16">
              <h1 className="text-xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#073E5D] mb-2 xs:mb-3 sm:mb-4 lg:mb-6 leading-tight">
                Notre équipe
              </h1>
              <div className="w-12 xs:w-16 sm:w-18 md:w-20 lg:w-24 h-1 bg-[#80C342] mb-3 xs:mb-4 sm:mb-6"></div>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Carousel des Associés - Responsive spacing */}
      <section className="py-4 xs:py-5 sm:py-6 md:py-7 lg:py-8">
      <FadeInWhenVisible>
        <ExpertsCarousel experts={partners} onExpertClick={handleExpertClick} title="Nos Associés" />
      </FadeInWhenVisible>
      </section>

      {/* Carousel des Experts - Responsive spacing */}
      <section className="py-4 xs:py-5 sm:py-6 md:py-7 lg:py-8">
      <FadeInWhenVisible>
        <ExpertsCarousel experts={experts} onExpertClick={handleExpertClick} title="Nos Experts" />
      </FadeInWhenVisible>
      </section>

      {/* Section Valeurs - Perfectly responsive grid et cards */}
      <section id="nos-valeurs" className="py-6 xs:py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <FadeInWhenVisible>
          <div className="w-full max-w-7xl mx-auto px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8">
            {/* Titre responsive */}
            <div className="pl-2 xs:pl-4 sm:pl-6 md:pl-8 lg:pl-16 xl:pl-32 mb-4 xs:mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16">
              <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#073E5D] mb-2 xs:mb-3 sm:mb-4 lg:mb-6 leading-tight">
                Nos valeurs
              </h2>
              <div className="w-10 xs:w-12 sm:w-14 md:w-16 lg:w-20 xl:w-24 h-1 bg-[#80C342]"></div>
            </div>

            {/* Grid parfaitement responsive */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-5 sm:gap-6">
              <div className="bg-white p-3 xs:p-4 sm:p-5 rounded-lg shadow-lg border border-gray-200 hover:border-[#80C342] transition-colors duration-300 flex flex-col h-auto min-h-[120px] xs:min-h-[140px]">
                <h3 className="text-base xs:text-lg sm:text-lg font-bold text-[#073E5D] text-center mb-1 xs:mb-2">Excellence</h3>
                <p className="text-sm xs:text-base sm:text-lg text-gray-600 text-center mb-2">Nous visons l'excellence dans tous nos services, en maintenant les plus hauts standards de qualité.</p>
              </div>
              <div className="bg-white p-3 xs:p-4 sm:p-5 rounded-lg shadow-lg border border-gray-200 hover:border-[#80C342] transition-colors duration-300 flex flex-col h-auto min-h-[120px] xs:min-h-[140px]">
                <h3 className="text-base xs:text-lg sm:text-lg font-bold text-[#073E5D] text-center mb-1 xs:mb-2">Probité</h3>
                <p className="text-sm xs:text-base sm:text-lg text-gray-600 text-center mb-2">Nous agissons avec honnêteté et transparence dans toutes nos relations professionnelles.</p>
              </div>
              <div className="bg-white p-3 xs:p-4 sm:p-5 rounded-lg shadow-lg border border-gray-200 hover:border-[#80C342] transition-colors duration-300 flex flex-col h-auto min-h-[120px] xs:min-h-[140px]">
                <h3 className="text-base xs:text-lg sm:text-lg font-bold text-[#073E5D] text-center mb-1 xs:mb-2">Partage</h3>
                <p className="text-sm xs:text-base sm:text-lg text-gray-600 text-center mb-2">Nous recherchons constamment de nouvelles solutions pour répondre aux défis de nos clients.</p>
              </div>
              <div className="bg-white p-3 xs:p-4 sm:p-5 rounded-lg shadow-lg border border-gray-200 hover:border-[#80C342] transition-colors duration-300 flex flex-col h-auto min-h-[120px] xs:min-h-[140px]">
                <h3 className="text-base xs:text-lg sm:text-lg font-bold text-[#073E5D] text-center mb-1 xs:mb-2">Innovation</h3>
                <p className="text-sm xs:text-base sm:text-lg text-gray-600 text-center mb-2">Nous travaillons en étroite collaboration avec nos clients pour atteindre leurs objectifs.</p>
              </div>
            </div>
          </div>
      </FadeInWhenVisible>
      </section>

      {/* Modal pour afficher les détails de l'expert */}
      <ExpertModal expert={selectedExpert} isOpen={isModalOpen} onClose={handleCloseModal} />
    </main>
  )
}