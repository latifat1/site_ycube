"use client"

import { useState } from "react"
import { MainSlider, type Slide } from "../components/main-slider"
import { 
  TrendingUp, Users, Award, ArrowRight, Calendar, Clock, Eye, Download, 
  BookOpen, FileText, Newspaper, CheckCircle, Globe
} from "lucide-react"

export default function InsightsPage() {
  const insightsSlides: Slide[] = [
    {
      id: 1,
      title: "Insights & Analyses",
      description: "Découvrez nos analyses exclusives et rapports d'experts sur l'évolution du secteur.",
      image: "/expertises.jpg",
      buttonText: "Découvrir nos insights",
      buttonLink: "/insights",
      priority: true,
    },
  ]
  
  const [activeFilter, setActiveFilter] = useState('all')

  const filters = [
    { id: 'all', label: 'Tous', icon: TrendingUp, count: 4 },
    { id: 'actualites', label: 'Actualités', icon: Newspaper, count: 2 },
    { id: 'rapports', label: 'Rapports', icon: FileText, count: 1 },
    { id: 'livres-blancs', label: 'Livres Blancs', icon: BookOpen, count: 0 },
    { id: 'articles', label: 'Articles', icon: FileText, count: 1 }
  ]

  const content = [
    {
      id: 1,
      type: 'actualites',
      title: "Révolution IA dans l'audit : l'avenir est maintenant",
      description: "Découvrez comment l'intelligence artificielle transforme radicalement les pratiques d'audit et révolutionne notre approche du conseil.",
      date: "15 Jan 2024",
      readTime: "5 min",
      views: 2847,
      trending: true,
      category: "Innovation",
      author: "Dr. Sarah Kouassi",
      featured: true,
      tags: ["IA", "Audit", "Innovation"]
    },
    {
      id: 2,
      type: 'rapports',
      title: "Baromètre Digital 2024 : Transformation des cabinets",
      description: "Analyse exclusive des tendances digitales qui redéfinissent l'expertise comptable en Côte d'Ivoire.",
      date: "12 Jan 2024",
      readTime: "12 min",
      views: 1923,
      downloadUrl: "/rapports/barometre-digital-2024.pdf",
      category: "Étude",
      author: "Équipe Recherche Y3",
      featured: true,
      tags: ["Digital", "Transformation", "Étude"]
    },
    {
      id: 3,
      type: 'articles',
      title: "Blockchain & Audit : Révolution ou Évolution ?",
      description: "Exploration des impacts de la blockchain sur les métiers de l'audit et les opportunités qu'elle présente.",
      date: "8 Jan 2024",
      readTime: "8 min",
      views: 1678,
      category: "Technologie",
      author: "Jean-Baptiste N'Guessan",
      featured: false,
      tags: ["Blockchain", "Audit", "Technologie"]
    },
    {
      id: 4,
      type: 'actualites',
      title: "Y3 Audit & Conseils : Expansion Internationale",
      description: "Notre cabinet étend son expertise à l'international avec l'ouverture de nouveaux bureaux en Afrique de l'Ouest.",
      date: "5 Jan 2024",
      readTime: "4 min",
      views: 2134,
      category: "Entreprise",
      author: "Communication Y3",
      featured: false,
      tags: ["Expansion", "International", "Entreprise"]
    }
  ]

  const filteredContent = activeFilter === 'all' ? content : content.filter(item => item.type === activeFilter)
  const featuredContent = content.filter(item => item.featured)

  const getTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      'actualites': 'from-blue-500 via-blue-600 to-blue-700',
      'rapports': 'from-[#073E5D] via-[#0a4a6b] to-[#073E5D]',
      'livres-blancs': 'from-[#80C342] via-green-500 to-green-600',
      'articles': 'from-purple-500 via-purple-600 to-purple-700'
    }
    return colors[type] || 'from-gray-500 to-gray-600'
  }

  const getTypeIcon = (type: string) => {
    const icons: Record<string, any> = {
      'actualites': Newspaper,
      'rapports': FileText,
      'livres-blancs': BookOpen,
      'articles': FileText
    }
    const Icon = icons[type] || FileText
    return <Icon size={16} />
  }

  return (
    <main className="bg-white">
      <MainSlider slides={insightsSlides} />
      
      {/* Hero Section - Style Weblium */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-[#073E5D] text-white px-6 py-2 rounded-full text-sm font-medium mb-8">
              <CheckCircle className="mr-2" size={16} />
              Contenu Expert & Actualisé
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-[#073E5D] mb-6 leading-tight">
              Insights & Analyses - NOUVEAU DESIGN
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-12 max-w-3xl mx-auto">
              Découvrez nos analyses exclusives, rapports d'experts et insights sur l'évolution 
              du secteur de l'audit et du conseil en Côte d'Ivoire.
            </p>

            {/* Stats simples et épurées */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#073E5D] mb-2">4+</div>
                <div className="text-sm text-gray-600">Publications</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#80C342] mb-2">8K+</div>
                <div className="text-sm text-gray-600">Lecteurs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#073E5D] mb-2">95%</div>
                <div className="text-sm text-gray-600">Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#80C342] mb-2">20+</div>
                <div className="text-sm text-gray-600">Experts</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content - Style Weblium */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#073E5D] mb-4">
              Publications en vedette
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Nos analyses les plus consultées et recommandées par nos experts
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {featuredContent.map((item, index) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Image placeholder avec couleur de type */}
                <div className={`h-48 bg-gradient-to-r ${getTypeColor(item.type)} flex items-center justify-center`}>
                  <div className="text-white text-center">
                    <div className="text-4xl mb-2">{getTypeIcon(item.type)}</div>
                    <div className="text-sm font-medium">{item.category}</div>
                  </div>
                </div>
                
                <div className="p-8">
                  {/* Badge et date */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-[#80C342] text-white px-3 py-1 rounded-full text-xs font-medium">
                      En vedette
                    </span>
                    <span className="text-sm text-gray-500">{item.date}</span>
                  </div>

                  {/* Titre */}
                  <h3 className="text-2xl font-bold text-[#073E5D] mb-4 leading-tight">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Auteur et stats */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-sm text-gray-500">
                      Par {item.author}
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Clock size={14} className="mr-1" />
                        {item.readTime}
                      </div>
                      <div className="flex items-center">
                        <Eye size={14} className="mr-1" />
                        {item.views.toLocaleString()}
                      </div>
                    </div>
                  </div>

                  {/* Action button */}
                  <button className="w-full bg-[#073E5D] hover:bg-[#80C342] text-white py-3 px-6 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center">
                    {item.downloadUrl ? (
                      <>
                        <Download size={18} className="mr-2" />
                        Télécharger le rapport
                      </>
                    ) : (
                      <>
                        Lire l'article complet
                        <ArrowRight size={18} className="ml-2" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section - Style Weblium */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#073E5D] mb-4">
              Toutes nos publications
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explorez notre collection complète d'analyses et de rapports
            </p>
          </div>
          
          {/* Filtres simplifiés */}
          <div className="flex flex-wrap gap-3 justify-center mb-16">
            {filters.map((filter) => {
              const Icon = filter.icon
              return (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeFilter === filter.id
                      ? 'bg-[#073E5D] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-[#80C342] hover:text-white'
                  }`}
                >
                  <Icon size={18} className="mr-2" />
                  <span className="mr-2">{filter.label}</span>
                  <span className="bg-white/20 text-xs px-2 py-1 rounded-full">
                    {filter.count}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Grille de contenu simplifiée */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {filteredContent.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                {/* Header avec couleur de type */}
                <div className={`h-2 bg-gradient-to-r ${getTypeColor(item.type)}`}></div>
                
                <div className="p-6">
                  {/* Type et date */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${getTypeColor(item.type)}`}>
                      {getTypeIcon(item.type)}
                      <span className="ml-1">{item.category}</span>
                    </span>
                    <span className="text-sm text-gray-500">{item.date}</span>
                  </div>
                  
                  {/* Titre */}
                  <h3 className="text-xl font-bold text-[#073E5D] mb-3 leading-tight">
                    {item.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Auteur et stats */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm text-gray-500">
                      Par {item.author}
                    </div>
                    <div className="flex items-center space-x-3 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Clock size={14} className="mr-1" />
                        {item.readTime}
                      </div>
                      <div className="flex items-center">
                        <Eye size={14} className="mr-1" />
                        {item.views.toLocaleString()}
                      </div>
                    </div>
                  </div>
                  
                  {/* Action button */}
                  <button className="w-full bg-gray-100 hover:bg-[#073E5D] hover:text-white text-gray-700 py-2 px-4 rounded-lg font-medium transition-colors duration-300">
                    {item.downloadUrl ? 'Télécharger' : 'Lire la suite'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Stats Section - Style Weblium */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#073E5D] rounded-lg mb-4">
                <Users size={32} className="text-white" />
              </div>
              <h3 className="text-3xl font-bold text-[#073E5D] mb-2">8K+</h3>
              <p className="text-gray-600">Lecteurs mensuels</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#80C342] rounded-lg mb-4">
                <Award size={32} className="text-white" />
              </div>
              <h3 className="text-3xl font-bold text-[#073E5D] mb-2">4+</h3>
              <p className="text-gray-600">Publications expertes</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#073E5D] rounded-lg mb-4">
                <TrendingUp size={32} className="text-white" />
              </div>
              <h3 className="text-3xl font-bold text-[#073E5D] mb-2">95%</h3>
              <p className="text-gray-600">Satisfaction client</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#80C342] rounded-lg mb-4">
                <Globe size={32} className="text-white" />
              </div>
              <h3 className="text-3xl font-bold text-[#073E5D] mb-2">5+</h3>
              <p className="text-gray-600">Pays couverts</p>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}