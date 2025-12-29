import { HistorySlider } from "../../components/history-slider"

export default function NotreHistoirePage() {
  return (
    <main>
      <HistorySlider />
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-16 pl-8 md:pl-32 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold text-[#073E5D] mb-6 animate-fade-in-up" style={{animationDelay: '0.2s'}}>Notre horizon</h1>
            <div className="w-24 h-1 bg-[#80C342] rounded-full animate-fade-in-up" style={{animationDelay: '0.4s'}}></div>
          </div>

        <div className="max-w-4xl mx-auto mb-20 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          <div className="bg-gray-50 rounded-lg shadow-sm p-6">
            <div className="pl-4 md:pl-8">
              <h2 className="text-3xl md:text-4xl font-bold text-[#073E5D] mb-8 relative group">
                Notre vision
                <div className="absolute -bottom-2 left-0 w-16 h-1 bg-[#80C342] rounded-full group-hover:w-24 transition-all duration-300"></div>
              </h2>
              <div className="space-y-6">
                <p className="text-gray-700 text-lg leading-relaxed hover:text-gray-800 transition-colors duration-200">
                  Unis par une expérience partagée au sein de prestigieux cabinets internationaux,
                  Georges et Yves ont fondé Y3 Audit & Conseils avec l'ambition de créer un cabinet de
                  référence, alliant excellence technique, agilité opérationnelle et
                  accompagnement sur-mesure.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed hover:text-gray-800 transition-colors duration-200">
                 Y3 Audit & Conseils se positionne comme un cabinet d'expertise comptable
                 indépendant, proposant une approche innovante et pragmatique des métiers du
                 chiffre et du conseil.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed hover:text-gray-800 transition-colors duration-200">
                  Notre philosophie : conjuguer expertise de haut niveau et
                 proximité client pour répondre avec précision aux enjeux spécifiques de chaque
                 entreprise.
                </p>
                
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mb-20 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
          <div className="bg-gradient-to-br from-[#073E5D] to-[#0a4a6b] rounded-lg shadow-sm p-6 text-white transition-all duration-300 hover:-translate-y-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 relative group">
              Nos expertises
              <div className="absolute -bottom-2 left-0 w-16 h-1 bg-[#80C342] rounded-full group-hover:w-24 transition-all duration-300"></div>
            </h2>
            <div className="space-y-6">
              <p className="text-gray-100 text-lg leading-relaxed hover:text-white transition-colors duration-200">
               Notre cabinet déploie son savoir-faire autour de quatre domaines de compétences
               complémentaires :  l'expertise-comptable,l'audit,  le conseil
               financier et le conseil opérationnel.
              </p>
              <p className="text-gray-100 text-lg leading-relaxed hover:text-white transition-colors duration-200">
                Cette approche intégrée nous permet d'accompagner nos clients dans
               toutes les dimensions de leur développement, de la conformité réglementaire à la
               stratégie de croissance.
              </p>
              <p className="text-gray-100 text-lg leading-relaxed hover:text-white transition-colors duration-200">
                Aujourd'hui, notre cabinet compte plus de 40 collaborateurs qualifiés, répartis en équipes spécialisées
                pour répondre au mieux aux attentes de nos clients.
              </p>
            </div>
          </div>
        </div>


        {/* <div className="text-center">
          <h2 className="text-2xl font-semibold text-[#073E5D] mb-6">Dates clés</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-[#80C342] text-2xl font-bold mb-2">2005</div>
              <p className="text-gray-700">Création de Y3 Audit & Conseils</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-[#80C342] text-2xl font-bold mb-2">2010</div>
              <p className="text-gray-700">Ouverture de notre premier bureau à l'international</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-[#80C342] text-2xl font-bold mb-2">2018</div>
              <p className="text-gray-700">Lancement de notre département conseil en transformation digitale</p>
            </div>
          </div>
        </div> */}
        </div>
      </div>
    </main>
  )
}
  