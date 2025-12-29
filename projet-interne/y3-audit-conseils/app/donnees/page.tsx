"use client"

import { usePageImage } from "@/app/hooks/use-page-image"
import { MainSlider, type Slide } from "@/app/components/main-slider"

export default function DonneesPage() {
  usePageImage('/expertises.webp')

  const donneesSlides: Slide[] = [
    {
      id: 1,
      title: "Banking Pulse",
      description: "Découvrez nos analyses et données sur le secteur bancaire et financier.",
      image: "/15.png",
      buttonText: "Explorer les données",
      buttonLink: "/donnees",
      priority: true,
    },
  ]

  const stats = [
    {
      value: "500+",
      label: "Entreprises accompagnées",
      description: "Clients satisfaits depuis notre création"
    },
    {
      value: "30+",
      label: "Années d'expérience",
      description: "Expertise reconnue dans le secteur"
    },
    {
      value: "50+",
      label: "Experts qualifiés",
      description: "Équipe de professionnels certifiés"
    },
    {
      value: "98%",
      label: "Taux de satisfaction",
      description: "Retour positif de nos clients"
    }
  ]


  const trends = [
    {
      category: "Audit & Certification",
      percentage: 45,
      color: "bg-[#073E5D]"
    },
    {
      category: "Conseil Financier",
      percentage: 30,
      color: "bg-[#80C342]"
    },
    {
      category: "Expertise Comptable",
      percentage: 20,
      color: "bg-blue-600"
    },
    {
      category: "Conseil Opérationnel",
      percentage: 5,
      color: "bg-purple-600"
    }
  ]

  return (
    <>
      <MainSlider slides={donneesSlides} />
      <main className="bg-white">
        
        {/* Hero Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="mb-12 pl-8 md:pl-32">
              <h1 className="text-3xl md:text-4xl font-bold text-[#073E5D] mb-4">Données</h1>
              <div className="w-20 h-1 bg-[#80C342]"></div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="mb-12 pl-8 md:pl-32">
              <h2 className="text-3xl md:text-4xl font-bold text-[#073E5D] mb-4">Nos Performances</h2>
              <div className="w-20 h-1 bg-[#80C342]"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-3xl font-bold text-[#073E5D] mb-2">{stat.value}</div>
                  <div className="text-lg font-semibold text-gray-800 mb-2">{stat.label}</div>
                  <div className="text-sm text-gray-600">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* Trends Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="mb-12 pl-8 md:pl-32">
              <h2 className="text-3xl md:text-4xl font-bold text-[#073E5D] mb-4">Répartition de nos Activités</h2>
              <div className="w-20 h-1 bg-[#80C342]"></div>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="space-y-6">
                  {trends.map((trend, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-48 text-sm font-medium text-gray-700">
                        {trend.category}
                      </div>
                      <div className="flex-1 mx-4">
                        <div className="w-full bg-gray-200 rounded-full h-4">
                          <div
                            className={`h-4 rounded-full ${trend.color} transition-all duration-1000 ease-out`}
                            style={{ width: `${trend.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="w-16 text-right text-sm font-bold text-[#073E5D]">
                        {trend.percentage}%
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Graphiques Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="mb-12 pl-8 md:pl-32">
              <h2 className="text-3xl md:text-4xl font-bold text-[#073E5D] mb-4">Analyses Graphiques</h2>
              <div className="w-20 h-1 bg-[#80C342]"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Graphique en barres - Évolution des clients */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-[#073E5D] mb-6 text-center">
                  Évolution du Nombre de Clients
                </h3>
                <div className="space-y-4">
                  {[
                    { year: "2020", clients: 120, percentage: 60 },
                    { year: "2021", clients: 180, percentage: 90 },
                    { year: "2022", clients: 250, percentage: 100 },
                    { year: "2023", clients: 320, percentage: 100 },
                    { year: "2024", clients: 400, percentage: 100 }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-16 text-sm font-medium text-gray-700">
                        {item.year}
                      </div>
                      <div className="flex-1 mx-4">
                        <div className="w-full bg-gray-200 rounded-full h-6">
                          <div
                            className="h-6 rounded-full bg-gradient-to-r from-[#073E5D] to-[#80C342] transition-all duration-1000 ease-out"
                            style={{ width: `${item.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="w-20 text-right text-sm font-bold text-[#073E5D]">
                        {item.clients}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Graphique circulaire simulé - Types de services */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-[#073E5D] mb-6 text-center">
                  Répartition des Services
                </h3>
                <div className="flex justify-center mb-6">
                  <div className="relative w-48 h-48">
                    {/* Simulation d'un graphique circulaire avec des sections */}
                    <div className="absolute inset-0 rounded-full border-8 border-[#073E5D]" style={{
                      background: `conic-gradient(
                        #073E5D 0deg 162deg,
                        #80C342 162deg 270deg,
                        #3B82F6 270deg 342deg,
                        #8B5CF6 342deg 360deg
                      )`
                    }}></div>
                    <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-[#073E5D]">100%</div>
                        <div className="text-sm text-gray-600">Services</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    { label: "Audit & Certification", color: "bg-[#073E5D]", percentage: "45%" },
                    { label: "Conseil Financier", color: "bg-[#80C342]", percentage: "30%" },
                    { label: "Expertise Comptable", color: "bg-blue-600", percentage: "20%" },
                    { label: "Conseil Opérationnel", color: "bg-purple-600", percentage: "5%" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className={`w-4 h-4 rounded-full ${item.color} mr-3`}></div>
                        <span className="text-sm text-gray-700">{item.label}</span>
                      </div>
                      <span className="text-sm font-bold text-[#073E5D]">{item.percentage}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Graphique linéaire simulé - Croissance du chiffre d'affaires */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-[#073E5D] mb-6 text-center">
                  Croissance du Chiffre d'Affaires
                </h3>
                <div className="relative h-64 bg-gray-50 rounded-lg p-4">
                  {/* Simulation d'une courbe de croissance */}
                  <div className="absolute bottom-4 left-4 right-4 h-32">
                    <svg className="w-full h-full" viewBox="0 0 400 120">
                      <polyline
                        points="0,100 80,80 160,60 240,40 320,20 400,10"
                        fill="none"
                        stroke="#80C342"
                        strokeWidth="3"
                      />
                      <circle cx="0" cy="100" r="4" fill="#073E5D" />
                      <circle cx="80" cy="80" r="4" fill="#073E5D" />
                      <circle cx="160" cy="60" r="4" fill="#073E5D" />
                      <circle cx="240" cy="40" r="4" fill="#073E5D" />
                      <circle cx="320" cy="20" r="4" fill="#073E5D" />
                      <circle cx="400" cy="10" r="4" fill="#073E5D" />
                    </svg>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-500">
                    <span>2020</span>
                    <span>2021</span>
                    <span>2022</span>
                    <span>2023</span>
                    <span>2024</span>
                    <span>2025</span>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <div className="text-2xl font-bold text-[#80C342]">+25%</div>
                  <div className="text-sm text-gray-600">Croissance annuelle moyenne</div>
                </div>
              </div>

              {/* Graphique en aires - Satisfaction client */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-[#073E5D] mb-6 text-center">
                  Évolution de la Satisfaction Client
                </h3>
                <div className="space-y-4">
                  {[
                    { month: "Jan", satisfaction: 92 },
                    { month: "Fév", satisfaction: 94 },
                    { month: "Mar", satisfaction: 96 },
                    { month: "Avr", satisfaction: 95 },
                    { month: "Mai", satisfaction: 97 },
                    { month: "Jun", satisfaction: 98 }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-12 text-sm font-medium text-gray-700">
                        {item.month}
                      </div>
                      <div className="flex-1 mx-4">
                        <div className="w-full bg-gray-200 rounded-full h-4">
                          <div
                            className="h-4 rounded-full bg-gradient-to-r from-[#80C342] to-green-400 transition-all duration-1000 ease-out"
                            style={{ width: `${item.satisfaction}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="w-12 text-right text-sm font-bold text-[#073E5D]">
                        {item.satisfaction}%
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <div className="text-2xl font-bold text-[#80C342]">96.8%</div>
                  <div className="text-sm text-gray-600">Satisfaction moyenne</div>
                </div>
              </div>
            </div>
          </div>
        </section>


      </main>
    </>
  )
}
