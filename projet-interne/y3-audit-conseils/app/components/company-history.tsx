import { FadeInWhenVisible } from "./animations"

export function CompanyHistory() {
  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white w-full">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl">
        <div className="max-w-4xl">
          <FadeInWhenVisible>
            <div className="mb-3 sm:mb-4 md:mb-5 pl-4 sm:pl-8 md:pl-12 lg:pl-16 xl:pl-20 2xl:pl-[11.75rem]">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#073E5D] mb-2 sm:mb-3 md:mb-4 break-words">Croître avec nos clients</h2>
              <div className="w-12 sm:w-16 md:w-20 lg:w-24 h-1 bg-[#80C342] mb-3 sm:mb-4 md:mb-5"></div>
            </div>
          </FadeInWhenVisible>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <FadeInWhenVisible>
            <div>
              <div className="bg-gray-50 p-4 sm:p-5 md:p-6 lg:p-8 rounded-lg shadow-sm mb-4 sm:mb-6 md:mb-8 max-w-4xl mx-auto">
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#80C342] mb-2 sm:mb-3 md:mb-4">30 ans d'expérience</h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-2 sm:mb-3 md:mb-4">
                   Fort d'une expérience commune au sein de cabinets internationaux que nos deux associés
                   ont eu l'ambition de créer un cabinet de référence, fondé sur l'excellence technique,
                  l'agilité de l'ensemble des équipes et une expérience client optimisée et personnalisée.
                </p>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-2 sm:mb-3 md:mb-4">
                  Y3 Audit & Conseils est un cabinet d'expertise comptable indépendant offrant une approche novatrice et
                  opérationnelle des métiers du chiffre et du conseil.
                </p>
                <p className="text-sm sm:text-base md:text-lg text-gray-700">
                  À chacun de nos clients, nous mettons à disposition nos racines locales, solides et notre expérience
                  internationale confirmée afin de les aider à atteindre leurs objectifs.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                <div className="bg-[#073E5D] text-white p-4 sm:p-5 md:p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                  <h4 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 text-center">Agilité</h4>
                  <p className="text-sm sm:text-base text-center flex-grow">
                    La culture d'entreprise et l'organisation permettent aux équipes de s'adapter aux spécificités de
                    chacun des clients.
                  </p>
                </div>
                <div className="bg-[#073E5D] text-white p-4 sm:p-5 md:p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                  <h4 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 text-center">Technicité</h4>
                  <p className="text-sm sm:text-base text-center flex-grow">
                    L'expertise pointue des fondateurs assure la renommée de notre cabinet sur le plan national,
                    sous-régional et africain.
                  </p>
                </div>
                <div className="bg-[#073E5D] text-white p-4 sm:p-5 md:p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full sm:col-span-2 lg:col-span-1">
                  <h4 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 text-center">Expérience</h4>
                  <p className="text-sm sm:text-base text-center flex-grow">
                    Notre vocation, être le partenaire privilégié de nos clients en leur assurant un accompagnement de
                    qualité.
                  </p>
                </div>
              </div>
            </div>
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  )
}
