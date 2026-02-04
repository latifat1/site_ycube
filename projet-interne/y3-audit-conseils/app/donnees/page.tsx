// "use client"

// import { usePageImage } from "@/app/hooks/use-page-image"
// import { MainSlider, type Slide } from "@/app/components/main-slider"

// export default function DonneesPage() {
//   usePageImage('/expertises.webp')

//   const donneesSlides: Slide[] = [
//     {
//       id: 1,
//       title: "Banking Pulse",
//       description: "Découvrez nos analyses et données sur le secteur bancaire et financier.",
//       image: "/15.png",
//       buttonText: "Explorer les données",
//       buttonLink: "/donnees",
//       priority: true,
//     },
//   ]

//   const stats = [
//     {
//       value: "500+",
//       label: "Entreprises accompagnées",
//       description: "Clients satisfaits depuis notre création"
//     },
//     {
//       value: "30+",
//       label: "Années d'expérience",
//       description: "Expertise reconnue dans le secteur"
//     },
//     {
//       value: "50+",
//       label: "Experts qualifiés",
//       description: "Équipe de professionnels certifiés"
//     },
//     {
//       value: "98%",
//       label: "Taux de satisfaction",
//       description: "Retour positif de nos clients"
//     }
//   ]


//   const trends = [
//     {
//       category: "Audit & Certification",
//       percentage: 45,
//       color: "bg-[#073E5D]"
//     },
//     {
//       category: "Conseil Financier",
//       percentage: 30,
//       color: "bg-[#80C342]"
//     },
//     {
//       category: "Expertise Comptable",
//       percentage: 20,
//       color: "bg-blue-600"
//     },
//     {
//       category: "Conseil Opérationnel",
//       percentage: 5,
//       color: "bg-purple-600"
//     }
//   ]

//   return (
//     <>
//       <MainSlider slides={donneesSlides} />
//       <main className="bg-white">

//         {/* Hero Section */}
//         <section className="py-20 bg-white">
//           <div className="container mx-auto px-4">
//             <div className="mb-12 pl-8 md:pl-32">
//               <h1 className="text-3xl md:text-4xl font-bold text-[#073E5D] mb-4">Données</h1>
//               <div className="w-20 h-1 bg-[#80C342]"></div>
//             </div>
//           </div>
//         </section>

//         {/* Stats Section */}
//         <section className="py-20 bg-gray-50">
//           <div className="container mx-auto px-4">
//             <div className="mb-12 pl-8 md:pl-32">
//               <h2 className="text-3xl md:text-4xl font-bold text-[#073E5D] mb-4">Nos Performances</h2>
//               <div className="w-20 h-1 bg-[#80C342]"></div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
//               {stats.map((stat, index) => (
//                 <div
//                   key={index}
//                   className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300"
//                 >
//                   <div className="text-3xl font-bold text-[#073E5D] mb-2">{stat.value}</div>
//                   <div className="text-lg font-semibold text-gray-800 mb-2">{stat.label}</div>
//                   <div className="text-sm text-gray-600">{stat.description}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>


//         {/* Trends Section */}
//         <section className="py-20 bg-gray-50">
//           <div className="container mx-auto px-4">
//             <div className="mb-12 pl-8 md:pl-32">
//               <h2 className="text-3xl md:text-4xl font-bold text-[#073E5D] mb-4">Répartition de nos Activités</h2>
//               <div className="w-20 h-1 bg-[#80C342]"></div>
//             </div>

//             <div className="max-w-4xl mx-auto">
//               <div className="bg-white p-8 rounded-lg shadow-lg">
//                 <div className="space-y-6">
//                   {trends.map((trend, index) => (
//                     <div key={index} className="flex items-center">
//                       <div className="w-48 text-sm font-medium text-gray-700">
//                         {trend.category}
//                       </div>
//                       <div className="flex-1 mx-4">
//                         <div className="w-full bg-gray-200 rounded-full h-4">
//                           <div
//                             className={`h-4 rounded-full ${trend.color} transition-all duration-1000 ease-out`}
//                             style={{ width: `${trend.percentage}%` }}
//                           ></div>
//                         </div>
//                       </div>
//                       <div className="w-16 text-right text-sm font-bold text-[#073E5D]">
//                         {trend.percentage}%
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Graphiques Section */}
//         <section className="py-20 bg-white">
//           <div className="container mx-auto px-4">
//             <div className="mb-12 pl-8 md:pl-32">
//               <h2 className="text-3xl md:text-4xl font-bold text-[#073E5D] mb-4">Analyses Graphiques</h2>
//               <div className="w-20 h-1 bg-[#80C342]"></div>
//             </div>

//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
//               {/* Graphique en barres - Évolution des clients */}
//               <div className="bg-white p-8 rounded-lg shadow-lg">
//                 <h3 className="text-2xl font-bold text-[#073E5D] mb-6 text-center">
//                   Évolution du Nombre de Clients
//                 </h3>
//                 <div className="space-y-4">
//                   {[
//                     { year: "2020", clients: 120, percentage: 60 },
//                     { year: "2021", clients: 180, percentage: 90 },
//                     { year: "2022", clients: 250, percentage: 100 },
//                     { year: "2023", clients: 320, percentage: 100 },
//                     { year: "2024", clients: 400, percentage: 100 }
//                   ].map((item, index) => (
//                     <div key={index} className="flex items-center">
//                       <div className="w-16 text-sm font-medium text-gray-700">
//                         {item.year}
//                       </div>
//                       <div className="flex-1 mx-4">
//                         <div className="w-full bg-gray-200 rounded-full h-6">
//                           <div
//                             className="h-6 rounded-full bg-gradient-to-r from-[#073E5D] to-[#80C342] transition-all duration-1000 ease-out"
//                             style={{ width: `${item.percentage}%` }}
//                           ></div>
//                         </div>
//                       </div>
//                       <div className="w-20 text-right text-sm font-bold text-[#073E5D]">
//                         {item.clients}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Graphique circulaire simulé - Types de services */}
//               <div className="bg-white p-8 rounded-lg shadow-lg">
//                 <h3 className="text-2xl font-bold text-[#073E5D] mb-6 text-center">
//                   Répartition des Services
//                 </h3>
//                 <div className="flex justify-center mb-6">
//                   <div className="relative w-48 h-48">
//                     {/* Simulation d'un graphique circulaire avec des sections */}
//                     <div className="absolute inset-0 rounded-full border-8 border-[#073E5D]" style={{
//                       background: `conic-gradient(
//                         #073E5D 0deg 162deg,
//                         #80C342 162deg 270deg,
//                         #3B82F6 270deg 342deg,
//                         #8B5CF6 342deg 360deg
//                       )`
//                     }}></div>
//                     <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center">
//                       <div className="text-center">
//                         <div className="text-2xl font-bold text-[#073E5D]">100%</div>
//                         <div className="text-sm text-gray-600">Services</div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="space-y-3">
//                   {[
//                     { label: "Audit & Certification", color: "bg-[#073E5D]", percentage: "45%" },
//                     { label: "Conseil Financier", color: "bg-[#80C342]", percentage: "30%" },
//                     { label: "Expertise Comptable", color: "bg-blue-600", percentage: "20%" },
//                     { label: "Conseil Opérationnel", color: "bg-purple-600", percentage: "5%" }
//                   ].map((item, index) => (
//                     <div key={index} className="flex items-center justify-between">
//                       <div className="flex items-center">
//                         <div className={`w-4 h-4 rounded-full ${item.color} mr-3`}></div>
//                         <span className="text-sm text-gray-700">{item.label}</span>
//                       </div>
//                       <span className="text-sm font-bold text-[#073E5D]">{item.percentage}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Graphique linéaire simulé - Croissance du chiffre d'affaires */}
//               <div className="bg-white p-8 rounded-lg shadow-lg">
//                 <h3 className="text-2xl font-bold text-[#073E5D] mb-6 text-center">
//                   Croissance du Chiffre d'Affaires
//                 </h3>
//                 <div className="relative h-64 bg-gray-50 rounded-lg p-4">
//                   {/* Simulation d'une courbe de croissance */}
//                   <div className="absolute bottom-4 left-4 right-4 h-32">
//                     <svg className="w-full h-full" viewBox="0 0 400 120">
//                       <polyline
//                         points="0,100 80,80 160,60 240,40 320,20 400,10"
//                         fill="none"
//                         stroke="#80C342"
//                         strokeWidth="3"
//                       />
//                       <circle cx="0" cy="100" r="4" fill="#073E5D" />
//                       <circle cx="80" cy="80" r="4" fill="#073E5D" />
//                       <circle cx="160" cy="60" r="4" fill="#073E5D" />
//                       <circle cx="240" cy="40" r="4" fill="#073E5D" />
//                       <circle cx="320" cy="20" r="4" fill="#073E5D" />
//                       <circle cx="400" cy="10" r="4" fill="#073E5D" />
//                     </svg>
//                   </div>
//                   <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-500">
//                     <span>2020</span>
//                     <span>2021</span>
//                     <span>2022</span>
//                     <span>2023</span>
//                     <span>2024</span>
//                     <span>2025</span>
//                   </div>
//                 </div>
//                 <div className="mt-4 text-center">
//                   <div className="text-2xl font-bold text-[#80C342]">+25%</div>
//                   <div className="text-sm text-gray-600">Croissance annuelle moyenne</div>
//                 </div>
//               </div>

//               {/* Graphique en aires - Satisfaction client */}
//               <div className="bg-white p-8 rounded-lg shadow-lg">
//                 <h3 className="text-2xl font-bold text-[#073E5D] mb-6 text-center">
//                   Évolution de la Satisfaction Client
//                 </h3>
//                 <div className="space-y-4">
//                   {[
//                     { month: "Jan", satisfaction: 92 },
//                     { month: "Fév", satisfaction: 94 },
//                     { month: "Mar", satisfaction: 96 },
//                     { month: "Avr", satisfaction: 95 },
//                     { month: "Mai", satisfaction: 97 },
//                     { month: "Jun", satisfaction: 98 }
//                   ].map((item, index) => (
//                     <div key={index} className="flex items-center">
//                       <div className="w-12 text-sm font-medium text-gray-700">
//                         {item.month}
//                       </div>
//                       <div className="flex-1 mx-4">
//                         <div className="w-full bg-gray-200 rounded-full h-4">
//                           <div
//                             className="h-4 rounded-full bg-gradient-to-r from-[#80C342] to-green-400 transition-all duration-1000 ease-out"
//                             style={{ width: `${item.satisfaction}%` }}
//                           ></div>
//                         </div>
//                       </div>
//                       <div className="w-12 text-right text-sm font-bold text-[#073E5D]">
//                         {item.satisfaction}%
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//                 <div className="mt-6 text-center">
//                   <div className="text-2xl font-bold text-[#80C342]">96.8%</div>
//                   <div className="text-sm text-gray-600">Satisfaction moyenne</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>


//       </main>
//     </>
//   )
// }


"use client"

import { usePageImage } from "@/app/hooks/use-page-image"
import { MainSlider, type Slide } from "@/app/components/main-slider"
import { FadeInWhenVisible } from "@/app/components/animations"
import { Card, CardContent } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, Legend } from "recharts"

export default function BankingPulsePage() {
  usePageImage("/images/expertises.webp")

  const slides: Slide[] = [
    {
      id: 1,
      title: "Banking Pulse 2024",
      description: "L’heure de la consolidation pour les banques cotées de l’UEMOA",
      image: "/images/15.png",
      buttonText: "Télécharger le rapport complet",
      buttonLink: "#",
      priority: true,
    },
  ]

  // 🔹 Données principales du rapport
  const bilanData = [
    { name: "Secteur bancaire", valeur: 9.3 },
    { name: "Banques cotées", valeur: 5.0 },
  ]

  const portefeuilleData = [
    { name: "Dépôts", value: 13141 },
    { name: "Crédits", value: 8756 },
  ]
  const COLORS = ["#073E5D", "#80C342"]

  const croissanceData = [
    { year: "2020", PNB: 710, ROE: 18 },
    { year: "2021", PNB: 780, ROE: 20 },
    { year: "2022", PNB: 880, ROE: 22 },
    { year: "2023", PNB: 925, ROE: 23.4 },
  ]

  const gouvernanceData = [
    { banque: "Moyenne UEMOA", femmes: 24 },
    { banque: "SGCI", femmes: 45 },
  ]

  return (
    <>
      <MainSlider slides={slides} />

      <main className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <FadeInWhenVisible>
            <div className="mb-12 pl-4 sm:pl-12 md:pl-24">
              <h1 className="text-3xl md:text-5xl font-bold text-[#073E5D] mb-4">Banking Pulse 2024</h1>
              <div className="w-24 h-1 bg-[#80C342] mb-6"></div>
              <p className="text-gray-700 max-w-3xl leading-relaxed text-lg">
                L’année 2023 a marqué une phase de **consolidation** pour les banques cotées de l’UEMOA,
                après plusieurs années de forte croissance. Malgré un contexte de resserrement monétaire
                et de pressions inflationnistes, la solidité du secteur reste remarquable, portée par une
                amélioration du rendement des capitaux propres (ROE : 23,4 %) et une croissance soutenue du
                produit net bancaire (+4,8 %).
              </p>
            </div>

            {/* SECTION 1 : Vue d'ensemble */}
            <section className="mb-20">
              <h2 className="text-2xl md:text-3xl font-bold text-[#073E5D] mb-4">Vue d’ensemble du secteur</h2>
              <p className="text-gray-600 mb-8 max-w-3xl">
                Le total de bilan du secteur bancaire régional s’est établi à **72 068 milliards FCFA** (+9,3 %),
                tandis que les banques cotées ont progressé de **5 %**, atteignant **15 299 milliards FCFA**.
              </p>

              <Card className="p-6 shadow-md">
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={bilanData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis unit="%" />
                      <Tooltip />
                      <Bar dataKey="valeur" fill="#073E5D" radius={[8, 8, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </section>

            {/* SECTION 2 : Structure du portefeuille */}
            <section className="mb-20">
              <h2 className="text-2xl md:text-3xl font-bold text-[#073E5D] mb-4">Structure du portefeuille</h2>
              <p className="text-gray-600 mb-8 max-w-3xl">
                Les **dépôts** ont atteint 13 141 milliards FCFA (+4,6 %) tandis que les **crédits** s’élèvent à 8 756 milliards FCFA (+1,6 %).
              </p>

              <div className="flex flex-col md:flex-row items-center justify-center gap-12">
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie data={portefeuilleData} dataKey="value" cx="50%" cy="50%" outerRadius={100} label>
                      {portefeuilleData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </section>

            {/* SECTION 3 : Performance financière */}
            <section className="mb-20">
              <h2 className="text-2xl md:text-3xl font-bold text-[#073E5D] mb-4">Performance financière</h2>
              <p className="text-gray-600 mb-8 max-w-3xl">
                En 2023, les banques cotées ont enregistré une croissance du **PNB de +4,8 %**, du **résultat d’exploitation de +11,7 %**,
                tandis que le **coût du risque** a progressé de +8,5 %. Le **rendement des capitaux propres (ROE)** atteint **23,4 %**,
                confirmant la résilience du secteur.
              </p>

              <Card className="p-6 shadow-md">
                <CardContent>
                  <ResponsiveContainer width="100%" height={350}>
                    <LineChart data={croissanceData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis yAxisId="left" orientation="left" stroke="#073E5D" />
                      <YAxis yAxisId="right" orientation="right" stroke="#80C342" />
                      <Tooltip />
                      <Legend />
                      <Line yAxisId="left" type="monotone" dataKey="PNB" stroke="#073E5D" strokeWidth={3} />
                      <Line yAxisId="right" type="monotone" dataKey="ROE" stroke="#80C342" strokeWidth={3} dot />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </section>

            {/* SECTION 4 : Gouvernance */}
            <section className="mb-20">
              <h2 className="text-2xl md:text-3xl font-bold text-[#073E5D] mb-4">Gouvernance et diversité</h2>
              <p className="text-gray-600 mb-8 max-w-3xl">
                En matière de gouvernance, les femmes représentent en moyenne **24 %** des conseils d’administration,
                avec un pic de **45 %** à la SGCI, soulignant une progression notable mais encore perfectible.
              </p>

              <Card className="p-6 shadow-md">
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={gouvernanceData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="banque" />
                      <YAxis unit="%" />
                      <Tooltip />
                      <Bar dataKey="femmes" fill="#80C342" radius={[8, 8, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </section>

            {/* SECTION 5 : Perspectives */}
            <section className="pb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#073E5D] mb-4">Perspectives 2024</h2>
              <p className="text-gray-600 max-w-3xl leading-relaxed">
                Les perspectives du secteur restent positives, portées par la digitalisation, l’inclusion financière
                et l’intégration régionale. Toutefois, la consolidation du marché et le renforcement des fonds propres
                demeurent des impératifs stratégiques. Les banques devront accélérer la transformation digitale
                et renforcer leur gestion des risques pour maintenir leur rentabilité à long terme.
              </p>
            </section>
          </FadeInWhenVisible>
        </div>
      </main>
    </>
  )
}

