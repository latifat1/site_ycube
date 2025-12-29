"use client"

import Link from "next/link"
import { MainSlider, type Slide } from "../../components/main-slider"
import { usePageImage } from "../../hooks/use-page-image"

export default function ExpertiseComptablePage() {
  usePageImage('/services1.jpg')
  
  const expertiseComptableSlides: Slide[] = [
    {
      id: 1,
      title: "Expertise Comptable",
      description: "Conformité, pilotage stratégique : transformez votre comptabilité en levier de performance.",
      image: "/4A.png",
      buttonText: "Découvrir nos services",
      buttonLink: "/services/expertise-comptable",
      priority: true,
    },
  ]
  
  return (
    <>
      <MainSlider slides={expertiseComptableSlides} />
      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-12 pl-8 md:pl-32">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#073E5D] mb-4">Expertise Comptable</h1>
            <div className="w-20 h-1 bg-[#80C342] mb-6"></div>
          </div>

          {/* Introduction */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-16 max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-[#073E5D] mb-4">
              L'Expertise Comptable au service de la performance de votre entreprise
            </h2>
            <h3 className="text-xl font-bold text-[#80C342] mb-4">
              Notre engagement : Fiabilité, Sérénité et Accompagnement Proactif
            </h3>
            <p className="text-xl text-gray-700 mb-4">
              L'Expertise Comptable est la colonne vertébrale de toute entreprise. Chez Y3 Audit & Conseils, nous transformons cette obligation légale en un levier de performance et un outil de pilotage stratégique.
            </p>
            <p className="text-xl text-gray-700">
              Nous vous garantissons une conformité totale avec les normes locales et internationales, tout en vous fournissant une information financière fiable et en temps réel pour vous aider à prendre les meilleures décisions et à vous concentrer pleinement sur votre cœur de métier.
            </p>
          </div>

          {/* Service 1 */}
          <div className="bg-white p-6 rounded-lg shadow-sm mb-16 max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-[#073E5D] mb-4 relative inline-block">
              Gestion comptable & externalisation
              <span className="block w-16 h-1 bg-[#80C342] mt-1 rounded-full"></span>
            </h2>
            <p className="text-xl text-gray-700 mb-2"><strong>Qu'est-ce que c'est ?</strong></p>
            <p className="text-xl text-gray-700 mb-4">
              C'est la gestion externalisée complète ou partielle de votre fonction comptable. Nous devenons votre service comptable dédié, prenant en charge l'organisation, la mise en place et la tenue quotidienne de votre comptabilité, conforme aux normes (SYSCOHADA, IFRS, etc.). Vous bénéficiez de la flexibilité d'une équipe d'experts sans les contraintes de l'interne.
            </p>
            <p className="text-xl text-gray-700 mb-2"><strong>Pourquoi c'est important pour vous ?</strong></p>
            <ul className="text-xl text-gray-700 space-y-1 mb-4">
              <li>• <strong>Réduction des Coûts et expertise continue :</strong> Vous réduisez les coûts liés à la gestion interne</li>
              <li>• <strong>Fiabilité et sérénité :</strong> Vous disposez d'une comptabilité toujours à jour et rigoureuse</li>
              <li>• <strong>Pilotage quotidien :</strong> Votre comptabilité devient un tableau de bord précis</li>
            </ul>
            <p className="text-xl text-gray-700 mb-2"><strong>Comment nous vous accompagnons ?</strong></p>
            <p className="text-xl text-gray-700">
              Nous prenons en charge tout ou partie de vos opérations (saisie, rapprochement bancaire, facturation, arrêtés de comptes). Nous organisons votre système comptable adapté à votre activité. Vous gardez un accès permanent et sécurisé à vos données via notre plateforme en ligne.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-[#073E5D] p-6 rounded-lg shadow-sm mb-16 max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-white mb-4 relative inline-block">
              Révision comptable & supervision
              <span className="block w-16 h-1 bg-[#80C342] mt-1 rounded-full"></span>
            </h2>
            <p className="text-xl text-gray-200 mb-2"><strong>Qu'est-ce que c'est ?</strong></p>
            <p className="text-xl text-gray-200 mb-4">
              La révision comptable est un processus d'examen et de vérification des comptes de votre entreprise afin de s'assurer de leur fiabilité, de leur régularité et de leur conformité aux règles comptables en vigueur. Cette mission est cruciale si vous gérez votre comptabilité en interne et avez besoin d'un regard externe avant l'établissement des comptes annuels.
            </p>
            <p className="text-xl text-gray-200 mb-2"><strong>Pourquoi c'est important pour vous ?</strong></p>
            <ul className="text-xl text-gray-200 space-y-1 mb-4">
              <li>• <strong>Sécurité et fiabilité :</strong> Vous garantissez la fiabilité de vos états financiers</li>
              <li>• <strong>Prévention des risques :</strong> Nous identifions les anomalies, les risques d'erreurs ou de fraudes</li>
              <li>• <strong>Conformité assurée :</strong> Nous vérifions l'application des normes comptables</li>
            </ul>
            <p className="text-xl text-gray-200 mb-2"><strong>Comment nous vous accompagnons ?</strong></p>
            <p className="text-xl text-gray-200">
              Nous réalisons un plan de travail précis incluant la vérification des écritures, des rapprochements bancaires et des soldes. Nous procédons aux ajustements nécessaires et validons les comptes pour la clôture. Nous vous remettons un rapport de révision décrivant nos observations et nos recommandations.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-16 max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-[#073E5D] mb-4 relative inline-block">
              Assistance fiscale & déclarations
              <span className="block w-16 h-1 bg-[#80C342] mt-1 rounded-full"></span>
            </h2>
            <p className="text-xl text-gray-700 mb-2"><strong>Qu'est-ce que c'est ?</strong></p>
            <p className="text-xl text-gray-700 mb-4">
              C'est un accompagnement complet pour garantir la conformité de vos obligations fiscales et sociales, tout en assurant l'optimisation de votre charge fiscale dans le strict respect de la loi.
            </p>
            <p className="text-xl text-gray-700 mb-2"><strong>Pourquoi c'est important pour vous ?</strong></p>
            <ul className="text-xl text-gray-700 space-y-1 mb-4">
              <li>• <strong>Sécurité fiscale :</strong> Vous évitez les pénalités de retard et les majorations</li>
              <li>• <strong>Protection :</strong> Vous êtes accompagné et représenté en cas de contrôle fiscal ou social</li>
              <li>• <strong>Gain de temps :</strong> Vous vous concentrez sur votre métier sans vous soucier de la complexité fiscale</li>
            </ul>
            <p className="text-xl text-gray-700 mb-2"><strong>Comment nous vous accompagnons ?</strong></p>
            <p className="text-xl text-gray-700">
              Nous établissons un calendrier personnalisé de vos obligations. Nous préparons et validons toutes vos déclarations (TVA, IS, IR, cotisations sociales). Nous optimisons votre charge fiscale et vous représentons et vous assistons en cas de contrôle fiscal ou social.
            </p>
          </div>

          {/* Service 4 */}
          <div className="bg-[#073E5D] p-6 rounded-lg shadow-sm mb-16 max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-white mb-4 relative inline-block">
              Consolidation & Reporting IFRS
              <span className="block w-16 h-1 bg-[#80C342] mt-1 rounded-full"></span>
            </h2>
            <p className="text-xl text-gray-200 mb-2"><strong>Qu'est-ce que c'est ?</strong></p>
            <p className="text-xl text-gray-200 mb-4">
              C'est l'harmonisation et l'établissement des comptes consolidés de votre groupe (SYSCOHADA, IFRS, etc.), fournissant une vision globale, cohérente et comparable de la performance de toutes vos entités, essentielle pour les groupes de sociétés.
            </p>
            <p className="text-xl text-gray-200 mb-2"><strong>Pourquoi c'est important pour vous ?</strong></p>
            <ul className="text-xl text-gray-200 space-y-1 mb-4">
              <li>• <strong>Pilotage de Groupe :</strong> Vous pilotez mieux votre groupe grâce à des données harmonisées</li>
              <li>• <strong>Crédibilité :</strong> Vous respectez vos obligations légales et répondez aux attentes de vos actionnaires</li>
            </ul>
            <p className="text-xl text-gray-200 mb-2"><strong>Comment nous vous accompagnons ?</strong></p>
            <p className="text-xl text-gray-200">
              Nous harmonisons les pratiques comptables de vos différentes entités. Nous établissons vos comptes consolidés selon les normes applicables. Nous fiabilisons vos données et produisons des états consolidés qui deviennent un outil de communication efficace auprès de vos actionnaires.
            </p>
          </div>

          {/* Pourquoi choisir */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-16 max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-[#073E5D] mb-4">
              Pourquoi choisir Y3 Audit & Conseils pour votre Expertise Comptable ?
            </h2>
            <p className="text-xl text-gray-700 mb-4">
              Nous sommes plus qu'un cabinet comptable, nous sommes votre partenaire de pilotage.
            </p>
            <ul className="space-y-2 text-xl text-gray-700">
              <li>• <strong>Double expertise normative :</strong> Maîtrise parfaite des normes locales (SYSCOHADA) et internationales (IFRS)</li>
              <li>• <strong>Partenaire au quotidien :</strong> Une disponibilité et une réactivité assurées</li>
              <li>• <strong>Digitalisation au service de la simplicité :</strong> Accédez à vos données à tout moment via nos outils digitaux</li>
              <li>• <strong>Conseil proactif et sur mesure :</strong> Nous adaptons nos services à votre taille et vos besoins</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-[#073E5D] mb-6">Besoin d'un expert-comptable ?</h2>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              Contactez-nous pour discuter de vos besoins spécifiques et découvrir comment nos services d'expertise comptable peuvent contribuer à la performance et au développement de votre entreprise.
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
