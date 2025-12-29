"use client"

import Link from "next/link"
import { CheckCircle, ChevronDown, ChevronUp } from "lucide-react"
import { MainSlider, type Slide } from "../../components/main-slider"
import { ServiceModal } from "../../components/service-modal"
import { usePageImage } from "../../hooks/use-page-image"
import { useState } from "react"

export default function NosMetiersPage() {
  usePageImage('/services1.jpg')
  const [activeModal, setActiveModal] = useState<string | null>(null)
  
  const nosMetiersSlides: Slide[] = [
    {
      id: 1,
      title: "Nos Métiers",
      description: "Découvrez l'ensemble de nos services d'expertise comptable, d'audit et de conseil.",
      image: "/4A.png",
      buttonText: "Découvrir nos services",
      buttonLink: "/services/nos-metiers",
      priority: true,
    },
  ]
  
  const openModal = (service: string) => {
    setActiveModal(service)
  }
  
  const closeModal = () => {
    setActiveModal(null)
  }
  
  return (
    <main>
      <MainSlider slides={nosMetiersSlides} />
      <div className="py-12">
        <div className="container mx-auto px-4">
        <div className="pl-4 md:pl-8 lg:pl-32 mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#073E5D] mb-4">Métiers</h1>
          <div className="w-20 h-1 bg-[#80C342] mb-6"></div>
        </div>

        {/* Grille 2x2 - Style comme l'image */}
        <div className="max-w-7xl mx-auto mb-16">
          {/* Ligne du haut - 2 sections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Section 1: EXPERTISE COMPTABLE */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-white h-full">
              <div className="mb-6">
                <h2 className="text-3xl lg:text-3xl font-bold mb-2"> Expertise Comptable</h2>
                <p className="text-lg text-[#80C342] font-semibold">Conformité, pilotage stratégique</p>
              </div>
              
              <p className="text-gray-200 mb-4 leading-relaxed">
                L'Expertise Comptable est la colonne vertébrale de toute entreprise. Chez Y3 Audit & Conseils, nous transformons cette obligation légale en un levier de performance et un outil de pilotage stratégique.
              </p>
              
              <p className="text-gray-200 mb-6 leading-relaxed">
                Nous vous garantissons une conformité totale avec les normes locales et internationales, tout en vous fournissant une information financière fiable et en temps réel pour vous aider à prendre les meilleures décisions et à vous concentrer pleinement sur votre cœur de métier.
              </p>
              
              <div className="text-center">
                <button 
                  onClick={() => openModal('expertise-comptable')}
                  className="inline-flex items-center text-white font-semibold hover:text-[#80C342] transition-colors duration-300"
                >
                  En savoir plus
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Section 2: AUDIT COMPTABLE */}
            <div className="bg-white p-8 rounded-lg shadow-lg h-full">
              <div className="mb-6">
                <h2 className="text-3xl lg:text-3xl font-bold text-[#073E5D] mb-2"> Audit</h2>
                <p className="text-lg text-[#80C342] font-semibold">Sécurisez votre croissance et inspirez confiance</p>
              </div>
              
              <p className="text-gray-700 mb-4 leading-relaxed">
                Dans un environnement économique en constante évolution, la confiance et la transparence sont vos actifs les plus précieux. Chez Y3 Audit & Conseils, notre mission va au-delà de la simple vérification des chiffres.
              </p>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Nous vous offrons une assurance professionnelle indépendante pour sécuriser vos opérations, valider vos informations financières et transformer les risques en opportunités de croissance.
              </p>
              
              <div className="text-center">
                <button 
                  onClick={() => openModal('audit-comptable')}
                  className="inline-flex items-center text-[#80C342] font-semibold hover:text-[#073E5D] transition-colors duration-300"
                >
                  En savoir plus
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
                </div>
                
          {/* Ligne du bas - 2 sections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Section 3: CONSEIL FINANCIER */}
            <div className="bg-[#073E5D] p-8 rounded-lg shadow-lg text-white h-full">
              <div className="mb-6">
                <h2 className="text-3xl lg:text-3xl font-bold mb-2">Conseil Financier</h2>
                <p className="text-lg text-[#80C342] font-semibold">Accélérez votre croissance, sécurisez vos transactions</p>
              </div>
              
              <p className="text-gray-200 mb-4 leading-relaxed">
                Dans un monde des affaires complexe, la performance ne s'improvise pas. Elle est le fruit de décisions financières éclairées et d'une stratégie rigoureuse. Chez Y3 Audit & Conseils, nous sommes votre partenaire stratégique dédié à la création de valeur.
              </p>
              
              <p className="text-gray-200 mb-6 leading-relaxed">
                Que vous cherchiez à financer une expansion, à sécuriser une acquisition ou à rétablir la performance, notre expertise en Conseil Financier vous apporte la clarté, les outils et l'accompagnement nécessaires pour concrétiser vos ambitions.
              </p>
              
              <div className="text-center">
                <button 
                  onClick={() => openModal('conseil-financier')}
                  className="inline-flex items-center text-white font-semibold hover:text-[#80C342] transition-colors duration-300"
                >
                  En savoir plus
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Section 4: CONSEIL OPÉRATIONNEL */}
            <div className="bg-[#80C342] p-8 rounded-lg shadow-lg text-white h-full">
              <div className="mb-6">
                <h2 className="text-3xl lg:text-3xl font-bold mb-2"> Conseil Opérationnel</h2>
                <p className="text-lg text-white font-semibold">Optimisez, digitalisez, accélérez</p>
              </div>
                
              <p className="text-gray-100 mb-4 leading-relaxed">
                Dans le contexte économique actuel, l'efficacité opérationnelle est la clé de la compétitivité et de la croissance. Chez Y3 Audit & Conseils, nous allons au-delà du simple conseil : nous sommes votre partenaire d'exécution pour transformer vos processus, digitaliser vos opérations et garantir une performance mesurable sur le terrain.
              </p>
              
              <p className="text-gray-100 mb-6 leading-relaxed">
                Nous vous aidons à passer d'une gestion réactive à un pilotage proactif, en vous fournissant les outils et les méthodes pour maximiser votre rentabilité et gagner en agilité.
              </p>
              
              <div className="text-center">
                <button 
                  onClick={() => openModal('conseil-operationnel')}
                  className="inline-flex items-center text-white font-semibold hover:text-gray-200 transition-colors duration-300"
                >
                  En savoir plus
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>


        <div className="text-center">
          <h2 className="text-3xl font-semibold text-[#073E5D] mb-6">Besoin d'un expert-comptable ?</h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour discuter de vos besoins spécifiques  en cliquant sur le bouton ci-dessous et découvrir comment nos services d'expertise
            comptable peuvent contribuer à la performance et au développement de votre entreprise.
          </p>
          <Link
            href="/contact/rendez-vous"
            className="inline-block bg-[#80C342] hover:bg-[#073E5D] text-white font-medium px-6 py-3 rounded-md transition-colors duration-300 text-lg"
          >
            Prendre rendez-vous
          </Link>
        </div>
        </div>
      </div>

      {/* Modals */}
      <ServiceModal
        isOpen={activeModal === 'expertise-comptable'}
        onClose={closeModal}
        title="Conformité, pilotage stratégique"
        icon={
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        }
        content={
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-[#073E5D] mb-2">L'Expertise Comptable au service de la performance de votre entreprise</h3>
              <h4 className="text-3xl font-bold text-[#80C342] mb-4">Notre engagement : Fiabilité, Sérénité et Accompagnement Proactif</h4>
              <p className="text-gray-700 text-lg mb-4">
                L'Expertise Comptable est la colonne vertébrale de toute entreprise. Chez Y3 Audit & Conseils, nous transformons cette obligation légale en un levier de performance et un outil de pilotage stratégique.
              </p>
              <p className="text-gray-700 text-lg mb-4">
                Nous vous garantissons une conformité totale avec les normes locales et internationales, tout en vous fournissant une information financière fiable et en temps réel pour vous aider à prendre les meilleures décisions et à vous concentrer pleinement sur votre cœur de métier.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-3xl font-bold text-[#073E5D] mb-4">Nos Piliers de Services en Expertise Comptable</h4>
              <div className="space-y-4">
                <div className="border-l-4 border-[#80C342] pl-4">
                  <h5 className="text-xl font-bold text-[#073E5D]">1. Gestion comptable & externalisation</h5>
                  <p className="text-gray-700 text-lg mb-1"><strong>Objectif :</strong> Assurer la tenue, l'organisation et la gestion quotidienne de votre comptabilité</p>
                  <p className="text-gray-600 text-lg"><strong>Bénéfice :</strong> Gain de temps et réduction des coûts grâce à une équipe d'experts dédiée</p>
                </div>
                <div className="border-l-4 border-[#80C342] pl-4">
                  <h5 className="text-xl font-bold text-[#073E5D]">2. Révision comptable & supervision</h5>
                  <p className="text-gray-700 text-lg mb-1"><strong>Objectif :</strong> Vérifier la fiabilité, la régularité et la conformité de vos comptes</p>
                  <p className="text-gray-600 text-lg"><strong>Bénéfice :</strong> Sécurité et fiabilité des états financiers pour la prise de décision</p>
                </div>
                <div className="border-l-4 border-[#80C342] pl-4">
                  <h5 className="text-xl font-bold text-[#073E5D]">3. Assistance fiscale & déclarations</h5>
                  <p className="text-gray-700 text-lg mb-1"><strong>Objectif :</strong> Garantir la conformité et optimiser la charge fiscale</p>
                  <p className="text-gray-600 text-lg"><strong>Bénéfice :</strong> Sécurité fiscale et représentation auprès des administrations</p>
                </div>
                <div className="border-l-4 border-[#80C342] pl-4">
                  <h5 className="text-xl font-bold text-[#073E5D]">4. Consolidation & Reporting IFRS</h5>
                  <p className="text-gray-700 text-lg mb-1"><strong>Objectif :</strong> Fournir une vision globale, cohérente et comparable de la performance du groupe</p>
                  <p className="text-gray-600 text-lg"><strong>Bénéfice :</strong> Pilotage de groupe et crédibilité auprès des actionnaires</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-lg">
              <h4 className="text-3xl font-bold text-[#073E5D] mb-4">Détail de nos services d'Expertise Comptable</h4>
              
              <div className="space-y-6">
                <div>
                  <h5 className="text-xl font-bold text-[#073E5D] mb-2">1. Gestion comptable & externalisation</h5>
                  <p className="text-gray-700 text-lg mb-2"><strong>Qu'est-ce que c'est ?</strong></p>
                  <p className="text-gray-700 text-lg mb-3">C'est la gestion externalisée complète ou partielle de votre fonction comptable. Nous devenons votre service comptable dédié, prenant en charge l'organisation, la mise en place et la tenue quotidienne de votre comptabilité, conforme aux normes (SYSCOHADA, IFRS, etc.). Vous bénéficiez de la flexibilité d'une équipe d'experts sans les contraintes de l'interne.</p>
                  
                  <p className="text-gray-700 text-lg mb-2"><strong>Pourquoi c'est important pour vous ?</strong></p>
                  <ul className="text-gray-700 text-lg space-y-1 mb-3">
                    <li>• <strong>Réduction des Coûts et expertise continue :</strong> Vous réduisez les coûts liés à la gestion interne</li>
                    <li>• <strong>Fiabilité et sérénité :</strong> Vous disposez d'une comptabilité toujours à jour et rigoureuse</li>
                    <li>• <strong>Pilotage quotidien :</strong> Votre comptabilité devient un tableau de bord précis</li>
                  </ul>
                  
                  <p className="text-gray-700 text-lg mb-2"><strong>Comment nous vous accompagnons ?</strong></p>
                  <p className="text-gray-700 text-lg">Nous prenons en charge tout ou partie de vos opérations (saisie, rapprochement bancaire, facturation, arrêtés de comptes). Nous organisons votre système comptable adapté à votre activité. Vous gardez un accès permanent et sécurisé à vos données via notre plateforme en ligne.</p>
                </div>

                <div>
                  <h5 className="text-xl font-bold text-[#073E5D] mb-2">2. Révision comptable & supervision</h5>
                  <p className="text-gray-700 text-lg mb-2"><strong>Qu'est-ce que c'est ?</strong></p>
                  <p className="text-gray-700 text-lg mb-3">La révision comptable est un processus d'examen et de vérification des comptes de votre entreprise afin de s'assurer de leur fiabilité, de leur régularité et de leur conformité aux règles comptables en vigueur. Cette mission est cruciale si vous gérez votre comptabilité en interne et avez besoin d'un regard externe avant l'établissement des comptes annuels.</p>
                  
                  <p className="text-gray-700 text-lg mb-2"><strong>Pourquoi c'est important pour vous ?</strong></p>
                  <ul className="text-gray-700 text-lg space-y-1 mb-3">
                    <li>• <strong>Sécurité et fiabilité :</strong> Vous garantissez la fiabilité de vos états financiers</li>
                    <li>• <strong>Prévention des risques :</strong> Nous identifions les anomalies, les risques d'erreurs ou de fraudes</li>
                    <li>• <strong>Conformité assurée :</strong> Nous vérifions l'application des normes comptables</li>
                  </ul>
                  
                  <p className="text-gray-700 text-lg mb-2"><strong>Comment nous vous accompagnons ?</strong></p>
                  <p className="text-gray-700 text-lg">Nous réalisons un plan de travail précis incluant la vérification des écritures, des rapprochements bancaires et des soldes. Nous procédons aux ajustements nécessaires et validons les comptes pour la clôture. Nous vous remettons un rapport de révision décrivant nos observations et nos recommandations.</p>
                </div>

                <div>
                  <h5 className="text-xl font-bold text-[#073E5D] mb-2">3. Assistance fiscale & déclarations</h5>
                  <p className="text-gray-700 text-lg mb-2"><strong>Qu'est-ce que c'est ?</strong></p>
                  <p className="text-gray-700 text-lg mb-3">C'est un accompagnement complet pour garantir la conformité de vos obligations fiscales et sociales, tout en assurant l'optimisation de votre charge fiscale dans le strict respect de la loi.</p>
                  
                  <p className="text-gray-700 text-lg mb-2"><strong>Pourquoi c'est important pour vous ?</strong></p>
                  <ul className="text-gray-700 text-lg space-y-1 mb-3">
                    <li>• <strong>Sécurité fiscale :</strong> Vous évitez les pénalités de retard et les majorations</li>
                    <li>• <strong>Protection :</strong> Vous êtes accompagné et représenté en cas de contrôle fiscal ou social</li>
                    <li>• <strong>Gain de temps :</strong> Vous vous concentrez sur votre métier sans vous soucier de la complexité fiscale</li>
                  </ul>
                  
                  <p className="text-gray-700 text-lg mb-2"><strong>Comment nous vous accompagnons ?</strong></p>
                  <p className="text-gray-700 text-lg">Nous établissons un calendrier personnalisé de vos obligations. Nous préparons et validons toutes vos déclarations (TVA, IS, IR, cotisations sociales). Nous optimisons votre charge fiscale et vous représentons et vous assistons en cas de contrôle fiscal ou social.</p>
                </div>

                <div>
                  <h5 className="text-xl font-bold text-[#073E5D] mb-2">4. Consolidation & Reporting IFRS</h5>
                  <p className="text-gray-700 text-lg mb-2"><strong>Qu'est-ce que c'est ?</strong></p>
                  <p className="text-gray-700 text-lg mb-3">C'est l'harmonisation et l'établissement des comptes consolidés de votre groupe (SYSCOHADA, IFRS, etc.), fournissant une vision globale, cohérente et comparable de la performance de toutes vos entités, essentielle pour les groupes de sociétés.</p>
                  
                  <p className="text-gray-700 text-lg mb-2"><strong>Pourquoi c'est important pour vous ?</strong></p>
                  <ul className="text-gray-700 text-lg space-y-1 mb-3">
                    <li>• <strong>Pilotage de Groupe :</strong> Vous pilotez mieux votre groupe grâce à des données harmonisées</li>
                    <li>• <strong>Crédibilité :</strong> Vous respectez vos obligations légales et répondez aux attentes de vos actionnaires</li>
                  </ul>
                  
                  <p className="text-gray-700 text-lg mb-2"><strong>Comment nous vous accompagnons ?</strong></p>
                  <p className="text-gray-700 text-lg">Nous harmonisons les pratiques comptables de vos différentes entités. Nous établissons vos comptes consolidés selon les normes applicables. Nous fiabilisons vos données et produisons des états consolidés qui deviennent un outil de communication efficace auprès de vos actionnaires.</p>
                </div>
              </div>
            </div>

            <div className="bg-[#073E5D]/10 p-6 rounded-lg">
              <h4 className="text-3xl font-bold text-[#073E5D] mb-3">Pourquoi choisir Y3 Audit & Conseils pour votre Expertise Comptable ?</h4>
              <p className="text-gray-700 text-lg mb-3">Nous sommes plus qu'un cabinet comptable, nous sommes votre partenaire de pilotage.</p>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Double expertise normative :</strong> Maîtrise parfaite des normes locales (SYSCOHADA) et internationales (IFRS)</li>
                <li>• <strong>Partenaire au quotidien :</strong> Une disponibilité et une réactivité assurées</li>
                <li>• <strong>Digitalisation au service de la simplicité :</strong> Accédez à vos données à tout moment via nos outils digitaux</li>
                <li>• <strong>Conseil proactif et sur mesure :</strong> Nous adaptons nos services à votre taille et vos besoins</li>
              </ul>
            </div>

            <div className="bg-[#073E5D] text-white p-6 rounded-lg text-center">
              <h4 className="text-3xl font-bold mb-2">Prochaine étape : transformez votre comptabilité en outil stratégique</h4>
              <p className="text-gray-200 mb-4">Ne laissez plus la comptabilité être une contrainte, faites-en un atout.</p>
              <p className="text-lg text-gray-300">Contactez Y3 Audit & Conseils dès aujourd'hui pour une évaluation gratuite de votre organisation comptable.</p>
            </div>
          </div>
        }
      />

      <ServiceModal
        isOpen={activeModal === 'conseil-financier'}
        onClose={closeModal}
        title="Accélérez votre croissance, sécurisez vos transactions"
        icon={
          <svg className="w-6 h-6 text-[#073E5D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
          </svg>
        }
        content={
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-[#073E5D] mb-2">Le conseil financier stratégique de Y3 Audit & Conseils</h3>
              <h4 className="text-3xl font-bold text-[#80C342] mb-4">Notre engagement : transformer vos ambitions en réalité financière</h4>
              <p className="text-gray-700 text-lg mb-4">
                Dans un monde des affaires complexe, la performance ne s'improvise pas. Elle est le fruit de décisions financières éclairées et d'une stratégie rigoureuse. Chez Y3 Audit & Conseils, nous sommes votre partenaire stratégique dédié à la création de valeur.
              </p>
              <p className="text-gray-700 text-lg mb-4">
                Que vous cherchiez à financer une expansion, à sécuriser une acquisition ou à rétablir la performance, notre expertise en Conseil Financier vous apporte la clarté, les outils et l'accompagnement nécessaires pour concrétiser vos ambitions et assurer la pérennité de votre entreprise.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-3xl font-bold text-[#073E5D] mb-4">Nos piliers de services en Conseil Financier</h4>
              <div className="space-y-4">
                <div className="border-l-4 border-[#80C342] pl-4">
                  <h5 className="text-xl font-bold text-[#073E5D]">1. Stratégie Financière & Levées de Fonds</h5>
                  <p className="text-gray-700 text-lg mb-1"><strong>Objectif :</strong> Structurer le financement optimal de vos projets de développement</p>
                  <p className="text-gray-600 text-lg"><strong>Bénéfice :</strong> Financement optimisé et maximisation de votre capacité de négociation</p>
                </div>
                <div className="border-l-4 border-[#80C342] pl-4">
                  <h5 className="text-xl font-bold text-[#073E5D]">2. Évaluation d'Entreprises & Due Diligence</h5>
                  <p className="text-gray-700 text-lg mb-1"><strong>Objectif :</strong> Sécuriser vos transactions (achat/vente) par une valorisation juste</p>
                  <p className="text-gray-600 text-lg"><strong>Bénéfice :</strong> Sécurité transactionnelle et prise de décision basée sur une connaissance parfaite</p>
                </div>
                <div className="border-l-4 border-[#80C342] pl-4">
                  <h5 className="text-xl font-bold text-[#073E5D]">3. Restructuration & Optimisation Financière</h5>
                  <p className="text-gray-700 text-lg mb-1"><strong>Objectif :</strong> Rétablir la performance et la solidité financière durable</p>
                  <p className="text-gray-600 text-lg"><strong>Bénéfice :</strong> Pérennité assurée et rétablissement de la confiance des partenaires</p>
                </div>
                <div className="border-l-4 border-[#80C342] pl-4">
                  <h5 className="text-xl font-bold text-[#073E5D]">4. Modélisation Financière & Business Plan</h5>
                  <p className="text-gray-700 text-lg mb-1"><strong>Objectif :</strong> Créer le tableau de bord stratégique pour le pilotage</p>
                  <p className="text-gray-600 text-lg"><strong>Bénéfice :</strong> Pilotage fiable et crédibilité accrue auprès des banques et investisseurs</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-lg">
              <h4 className="text-3xl font-bold text-[#073E5D] mb-4">Détail de nos services de Conseil Financier</h4>
              
              <div className="space-y-6">
                <div>
                  <h5 className="text-xl font-bold text-[#073E5D] mb-2">1. Stratégie financière & levées de fonds</h5>
                  <p className="text-gray-700 text-lg mb-2"><strong>Qu'est-ce que c'est ?</strong></p>
                  <p className="text-gray-700 text-lg mb-3">C'est un accompagnement de A à Z pour structurer votre stratégie financière et concrétiser vos projets de développement par l'obtention de financements optimaux. Nous vous aidons à identifier les meilleures sources de capitaux pour votre croissance, vos investissements ou le lancement de nouvelles activités.</p>
                  
                  <p className="text-gray-700 text-lg mb-2"><strong>Pourquoi c'est important pour vous ?</strong></p>
                  <ul className="text-gray-700 text-lg space-y-1 mb-3">
                    <li>• <strong>Financement optimisé :</strong> Vous accédez aux sources de financement les plus adaptées</li>
                    <li>• <strong>Négociation puissante :</strong> Vous négociez dans les meilleures conditions grâce à un dossier solide</li>
                    <li>• <strong>Gain de temps stratégique :</strong> Vous gagnez un temps précieux en étant accompagné par un expert</li>
                  </ul>
                  
                  <p className="text-gray-700 text-lg mb-2"><strong>Comment nous vous accompagnons ?</strong></p>
                  <p className="text-gray-700 text-lg">Nous élaborons votre stratégie de financement sur mesure. Nous structurons un Dossier d'Investissement professionnel, identifions et approchons les sources de financement pertinentes et vous assistons activement dans les négociations.</p>
                </div>

                <div>
                  <h5 className="text-xl font-bold text-[#073E5D] mb-2">2. Évaluation d'entreprises & Due Diligence</h5>
                  <p className="text-gray-700 text-lg mb-2"><strong>Qu'est-ce que c'est ?</strong></p>
                  <p className="text-gray-700 text-lg mb-3">L'estimation rigoureuse de la valeur d'une entreprise (Évaluation) et l'examen approfondi de ses risques et opportunités (Due Diligence) sont les piliers de toute transaction réussie (cession, acquisition, fusion).</p>
                  
                  <p className="text-gray-700 text-lg mb-2"><strong>Pourquoi c'est important pour vous ?</strong></p>
                  <ul className="text-gray-700 text-lg space-y-1 mb-3">
                    <li>• <strong>Sécurité transactionnelle :</strong> Vous savez exactement ce que vous achetez ou vendez</li>
                    <li>• <strong>Négociation au juste prix :</strong> Vous connaissez la vraie valeur de votre entreprise</li>
                    <li>• <strong>Justification en levée de fonds :</strong> Vous justifiez votre valorisation auprès des investisseurs</li>
                  </ul>
                  
                  <p className="text-gray-700 text-lg mb-2"><strong>Comment nous vous accompagnons ?</strong></p>
                  <p className="text-gray-700 text-lg">Nous valorisons votre entreprise selon les méthodologies reconnues (DCF, multiples de marché, approche patrimoniale) en les adaptant à la réalité de votre secteur pour une valorisation juste et défendable.</p>
                </div>

                <div>
                  <h5 className="text-xl font-bold text-[#073E5D] mb-2">3. Restructuration & optimisation financière</h5>
                  <p className="text-gray-700 text-lg mb-2"><strong>Qu'est-ce que c'est ?</strong></p>
                  <p className="text-gray-700 text-lg mb-3">C'est un accompagnement proactif pour rétablir la performance financière durable de votre entreprise, que ce soit en cas de difficultés ou dans une démarche d'amélioration significative de la rentabilité et de la structure financière.</p>
                  
                  <p className="text-gray-700 text-lg mb-2"><strong>Pourquoi c'est important pour vous ?</strong></p>
                  <ul className="text-gray-700 text-lg space-y-1 mb-3">
                    <li>• <strong>Pérennité assurée :</strong> Vous mettez en place un plan d'action concret pour retrouver l'équilibre</li>
                    <li>• <strong>Optimisation de la structure :</strong> Vous identifiez rapidement les causes des difficultés</li>
                    <li>• <strong>Confiance rétablie :</strong> Vous rassurez vos partenaires avec un plan crédible</li>
                  </ul>
                </div>

                <div>
                  <h5 className="text-xl font-bold text-[#073E5D] mb-2">4. Modélisation financière & Business Plan</h5>
                  <p className="text-gray-700 text-lg mb-2"><strong>Qu'est-ce que c'est ?</strong></p>
                  <p className="text-gray-700 text-lg mb-3">La construction d'un modèle financier dynamique qui traduit votre stratégie en projections chiffrées réalistes (Business Plan). Ce modèle devient votre tableau de bord essentiel pour le pilotage, la prise de décision interne et la communication externe.</p>
                  
                  <p className="text-gray-700 text-lg mb-2"><strong>Pourquoi c'est important pour vous ?</strong></p>
                  <ul className="text-gray-700 text-lg space-y-1 mb-3">
                    <li>• <strong>Pilotage fiable :</strong> Vous transformez votre vision en projections chiffrées cohérentes</li>
                    <li>• <strong>Crédibilité maximale :</strong> Vous disposez d'un outil puissant pour convaincre banques et investisseurs</li>
                    <li>• <strong>Anticipation des risques :</strong> Prenez de meilleures décisions grâce à des simulations fiables</li>
                  </ul>
                  
                  <p className="text-gray-700 text-lg mb-2"><strong>Comment nous vous accompagnons ?</strong></p>
                  <p className="text-gray-700 text-lg">Nous construisons un modèle financier robuste qui intègre tous les paramètres de votre activité. Nous réalisons des projections financières sur 3 à 5 ans et vous livrons un modèle robuste et pédagogique dont vous conservez la pleine maîtrise.</p>
                </div>
              </div>
            </div>

            <div className="bg-[#073E5D]/10 p-6 rounded-lg">
              <h4 className="text-3xl font-bold text-[#073E5D] mb-3">Pourquoi choisir Y3 Audit & Conseils pour votre Conseil Financier ?</h4>
              <p className="text-gray-700 text-lg mb-3">Notre approche est celle d'un partenaire engagé dans votre réussite.</p>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Proximité et expertise PME :</strong> Nous connaissons les enjeux des PME/ETI locales</li>
                <li>• <strong>Pragmatisme et mise en œuvre :</strong> Nos solutions sont concrètes et nous vous accompagnons activement</li>
                <li>• <strong>Approche stratégique sur mesure :</strong> Chaque mission est unique et alignée sur votre stratégie</li>
                <li>• <strong>Un réseau au service de votre succès :</strong> Nous facilitons vos relations avec notre réseau de banques et d'investisseurs</li>
              </ul>
            </div>

            <div className="bg-[#073E5D] text-white p-6 rounded-lg text-center">
              <h4 className="text-3xl font-bold mb-2">Prochaine étape : concrétisons ensemble votre stratégie</h4>
              <p className="text-gray-200 mb-4">Ne laissez pas le doute financier freiner votre potentiel.</p>
              <p className="text-lg text-gray-300">Contactez Y3 Audit & Conseils dès aujourd'hui pour une première évaluation confidentielle de votre stratégie financière.</p>
            </div>
          </div>
        }
      />

      <ServiceModal
        isOpen={activeModal === 'conseil-operationnel'}
        onClose={closeModal}
        title="Optimisez, digitalisez, accélérez"
        icon={
          <svg className="w-6 h-6 text-[#80C342]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        }
        content={
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-[#073E5D] mb-2">Le Conseil Opérationnel pour transformer l'efficacité de votre entreprise</h3>
              <h4 className="text-3xl font-bold text-[#80C342] mb-4">Notre engagement : de l'analyse à l'action, pour une performance durable</h4>
              <p className="text-gray-700 text-lg mb-4">
                Dans le contexte économique actuel, l'efficacité opérationnelle est la clé de la compétitivité et de la croissance. Chez Y3 Audit & Conseils, nous allons au-delà du simple conseil : nous sommes votre partenaire d'exécution pour transformer vos processus, digitaliser vos opérations et garantir une performance mesurable sur le terrain.
              </p>
              <p className="text-gray-700 text-lg mb-4">
                Nous vous aidons à passer d'une gestion réactive à un pilotage proactif, en vous fournissant les outils et les méthodes pour maximiser votre rentabilité et gagner en agilité.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-3xl font-bold text-[#073E5D] mb-4">Nos piliers de services en Conseil Opérationnel</h4>
              <div className="space-y-4">
                <div className="border-l-4 border-[#80C342] pl-4">
                  <h5 className="text-xl font-bold text-[#073E5D]">1. Organisation & Processus</h5>
                  <p className="text-gray-700 text-lg mb-1"><strong>Objectif :</strong> Structurer une organisation qui élimine les frictions et soutient la croissance</p>
                  <p className="text-gray-600 text-lg"><strong>Bénéfice :</strong> Efficacité maximale et réduction du stress opérationnel</p>
                </div>
                <div className="border-l-4 border-[#80C342] pl-4">
                  <h5 className="text-xl font-bold text-[#073E5D]">2. Performance & Pilotage (BI)</h5>
                  <p className="text-gray-700 text-lg mb-1"><strong>Objectif :</strong> Mettre en place des tableaux de bord pour un pilotage proactif et éclairé</p>
                  <p className="text-gray-600 text-lg"><strong>Bénéfice :</strong> Prise de décision rapide basée sur des données fiables et en temps réel</p>
                </div>
                <div className="border-l-4 border-[#80C342] pl-4">
                  <h5 className="text-xl font-bold text-[#073E5D]">3. Transformation Digitale</h5>
                  <p className="text-gray-700 text-lg mb-1"><strong>Objectif :</strong> Intégrer les outils numériques pour moderniser et automatiser vos opérations</p>
                  <p className="text-gray-600 text-lg"><strong>Bénéfice :</strong> Avantage concurrentiel et libération des équipes pour les tâches à forte valeur ajoutée</p>
                </div>
                <div className="border-l-4 border-[#80C342] pl-4">
                  <h5 className="text-xl font-bold text-[#073E5D]">4. Gestion des Risques & Conformité</h5>
                  <p className="text-gray-700 text-lg mb-1"><strong>Objectif :</strong> Protéger l'entreprise contre les imprévus, la fraude et les sanctions</p>
                  <p className="text-gray-600 text-lg"><strong>Bénéfice :</strong> Résilience et sérénité grâce à un dispositif de contrôle interne robuste</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-lg">
              <h4 className="text-3xl font-bold text-[#073E5D] mb-4">Détail de nos services en Conseil Opérationnel</h4>
              
              <div className="space-y-6">
                <div>
                  <h5 className="text-xl font-bold text-[#073E5D] mb-2">1. Organisation & Processus</h5>
                  <p className="text-gray-700 text-lg mb-2"><strong>Qu'est-ce que c'est ?</strong></p>
                  <p className="text-gray-700 text-lg mb-3">C'est un diagnostic complet de vos flux de travail pour éliminer les frictions et structurer une organisation qui soutient votre croissance et la qualité de vos services. Nous analysons vos processus métiers (production, ventes, logistique, etc.) pour identifier les goulots d'étranglement et les sources d'inefficacité.</p>
                  
                  <p className="text-gray-700 text-lg mb-2"><strong>Pourquoi c'est important pour vous ?</strong></p>
                  <ul className="text-gray-700 text-lg space-y-1 mb-3">
                    <li>• <strong>Efficacité maximale :</strong> Vous gagnez en efficacité en éliminant les tâches inutiles et les doublons</li>
                    <li>• <strong>Clarté opérationnelle :</strong> Vous clarifiez les rôles et responsabilités de chacun</li>
                    <li>• <strong>Agilité :</strong> Vous gagnez en souplesse pour vous adapter plus rapidement aux changements du marché</li>
                  </ul>
                  
                  <p className="text-gray-700 text-lg mb-2"><strong>Comment nous vous accompagnons ?</strong></p>
                  <p className="text-gray-700 text-lg">Nous cartographions vos processus actuels, identifions les sources d'inefficacité et redessinons avec vous des processus optimisés. Nous assurons un accompagnement au changement pour garantir l'adoption et la pérennité des nouvelles méthodes par vos équipes.</p>
                </div>

                <div>
                  <h5 className="text-xl font-bold text-[#073E5D] mb-2">2. Performance & Pilotage (Business Intelligence)</h5>
                  <p className="text-gray-700 text-lg mb-2"><strong>Qu'est-ce que c'est ?</strong></p>
                  <p className="text-gray-700 text-lg mb-3">C'est la mise en place d'un système de Business Intelligence (BI) et de tableaux de bord qui transforment vos données brutes en leviers de décision stratégiques. Vous passez d'une gestion à l'instinct à un pilotage précis basé sur des indicateurs de performance (KPI) pertinents.</p>
                  
                  <p className="text-gray-700 text-lg mb-2"><strong>Pourquoi c'est important pour vous ?</strong></p>
                  <ul className="text-gray-700 text-lg space-y-1 mb-3">
                    <li>• <strong>Prise de décision éclairée :</strong> Vous pilotez votre entreprise avec des données fiables et à jour</li>
                    <li>• <strong>Anticipation :</strong> Vous détectez rapidement les problèmes et les opportunités</li>
                    <li>• <strong>Culture de la performance :</strong> Vous mobilisez vos équipes autour d'objectifs clairs et mesurables</li>
                  </ul>
                  
                  <p className="text-gray-700 text-lg mb-2"><strong>Comment nous vous accompagnons ?</strong></p>
                  <p className="text-gray-700 text-lg">Nous définissons les KPI adaptés à vos objectifs et construisons des tableaux de bord simples, visuels et automatisés. Nous mettons en place des outils de reporting connectés à vos systèmes existants et formons vos équipes à l'analyse des données.</p>
                </div>

                <div>
                  <h5 className="text-xl font-bold text-[#073E5D] mb-2">3. Transformation digitale</h5>
                  <p className="text-gray-700 text-lg mb-2"><strong>Qu'est-ce que c'est ?</strong></p>
                  <p className="text-gray-700 text-lg mb-3">L'intégration stratégique des outils numériques pour moderniser vos opérations, propulser votre compétitivité et vous positionner en leader de votre marché. Il s'agit de choisir et de mettre en place les solutions digitales qui répondent vraiment à vos besoins d'efficacité.</p>
                  
                  <p className="text-gray-700 text-lg mb-2"><strong>Pourquoi c'est important pour vous ?</strong></p>
                  <ul className="text-gray-700 text-lg space-y-1 mb-3">
                    <li>• <strong>Focus sur le métier :</strong> Libérez vos équipes des tâches répétitives grâce à l'automatisation</li>
                    <li>• <strong>Réduction des erreurs :</strong> Vous améliorez la qualité et la rapidité de votre service</li>
                    <li>• <strong>Avantage concurrentiel :</strong> Vous accédez à vos informations en temps réel et facilitez la collaboration</li>
                  </ul>
                  
                  <p className="text-gray-700 text-lg mb-2"><strong>Comment nous vous accompagnons ?</strong></p>
                  <p className="text-gray-700 text-lg">Nous évaluons votre niveau de digitalisation et vous aidons à choisir les solutions technologiques les plus adaptées à vos besoins et à votre budget (ERP, CRM, BI, etc.). Nous pilotons le déploiement, gérons la migration de vos données et assurons la formation et l'adoption par vos équipes.</p>
                </div>

                <div>
                  <h5 className="text-xl font-bold text-[#073E5D] mb-2">4. Gestion des risques & conformité</h5>
                  <p className="text-gray-700 text-lg mb-2"><strong>Qu'est-ce que c'est ?</strong></p>
                  <p className="text-gray-700 text-lg mb-3">L'établissement d'un dispositif de contrôle interne robuste et d'une cartographie des risques pour protéger votre entreprise contre les menaces (fraude, erreurs, non-conformité) et assurer sa résilience.</p>
                  
                  <p className="text-gray-700 text-lg mb-2"><strong>Pourquoi c'est important pour vous ?</strong></p>
                  <ul className="text-gray-700 text-lg space-y-1 mb-3">
                    <li>• <strong>Résilience et sérénité :</strong> Vous dormez tranquille en sachant que votre entreprise est protégée</li>
                    <li>• <strong>Protection juridique :</strong> Vous évitez les sanctions financières liées au non-respect des réglementations</li>
                    <li>• <strong>Sécurité des opérations :</strong> Vous sécurisez vos opérations contre la fraude, les erreurs et les abus</li>
                  </ul>
                  
                  <p className="text-gray-700 text-lg mb-2"><strong>Comment nous vous accompagnons ?</strong></p>
                  <p className="text-gray-700 text-lg">Nous identifions et évaluons les principaux risques, et établissons une cartographie pour définir les priorités d'action. Nous mettons en place un dispositif de contrôle interne adapté à la taille et à la complexité de votre PME/ETI et formons vos équipes à la gestion des risques et au respect des règles de conformité.</p>
                </div>
              </div>
            </div>

            <div className="bg-[#073E5D]/10 p-6 rounded-lg">
              <h4 className="text-3xl font-bold text-[#073E5D] mb-3">Pourquoi choisir Y3 Audit & Conseils pour votre Conseil Opérationnel ?</h4>
              <p className="text-gray-700 text-lg mb-3">Notre expertise est ancrée dans la réalité du terrain et orientée vers le résultat.</p>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Pragmatisme et mise en œuvre :</strong> Nous ne produisons pas de rapports théoriques</li>
                <li>• <strong>Expertise locale et réalité africaine :</strong> Nous comprenons vos contraintes spécifiques</li>
                <li>• <strong>Performance mesurable :</strong> Nous définissons ensemble des indicateurs de succès</li>
                <li>• <strong>Autonomie assurée :</strong> Nous formons vos équipes et transférons les compétences nécessaires</li>
              </ul>
            </div>

            <div className="bg-[#073E5D] text-white p-6 rounded-lg text-center">
              <h4 className="text-3xl font-bold mb-2">Prochaine étape : transformons ensemble votre efficacité</h4>
              <p className="text-gray-200 mb-4">Ne laissez pas des processus obsolètes freiner votre croissance.</p>
              <p className="text-lg text-gray-300">Contactez Y3 Audit & Conseils dès aujourd'hui pour un diagnostic de performance opérationnelle.</p>
            </div>
          </div>
        }
      />

      <ServiceModal
        isOpen={activeModal === 'audit-comptable'}
        onClose={closeModal}
        title="Sécurisez votre croissance et inspirez confiance"
        icon={
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        }
        content={
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-[#073E5D] mb-2">L'expertise Audit & Assurance de Y3 Audit & Conseils</h3>
              <h4 className="text-3xl font-bold text-[#80C342] mb-4">Notre Engagement : une vision claire pour des décisions sereines</h4>
              <p className="text-gray-700 text-lg mb-4">
                Dans un environnement économique en constante évolution, la confiance et la transparence sont vos actifs les plus précieux. Chez Y3 Audit & Conseils, notre mission va au-delà de la simple vérification des chiffres. Nous vous offrons une assurance professionnelle indépendante pour sécuriser vos opérations, valider vos informations financières et transformer les risques en opportunités de croissance.
              </p>
              <p className="text-gray-700 text-lg mb-4">
                Que ce soit pour répondre à une obligation légale, pour rassurer vos partenaires ou pour éclairer une décision stratégique, nos experts sont à vos côtés.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-3xl font-bold text-[#073E5D] mb-4">Nos piliers de services en Audit et Assurance</h4>
              <div className="space-y-4">
                <div className="border-l-4 border-[#80C342] pl-4">
                  <h5 className="text-xl font-bold text-[#073E5D]">1. Commissariat aux Comptes (Audit Légal)</h5>
                  <p className="text-gray-700 text-lg mb-1"><strong>Objectif :</strong> Certifier la fidélité de vos comptes annuels</p>
                  <p className="text-gray-600 text-lg"><strong>Bénéfice :</strong> Crédibilité accrue auprès des banques, investisseurs et autorités</p>
                </div>
                <div className="border-l-4 border-[#80C342] pl-4">
                  <h5 className="text-xl font-bold text-[#073E5D]">2. Audit Contractuel (Audit Volontaire)</h5>
                  <p className="text-gray-700 text-lg mb-1"><strong>Objectif :</strong> Fournir un diagnostic indépendant pour une décision stratégique</p>
                  <p className="text-gray-600 text-lg"><strong>Bénéfice :</strong> Sécurité des transactions et prise de décision éclairée (acquisition, levée de fonds)</p>
                </div>
                <div className="border-l-4 border-[#80C342] pl-4">
                  <h5 className="text-xl font-bold text-[#073E5D]">3. Audit de Projets (Bailleurs de Fonds)</h5>
                  <p className="text-gray-700 text-lg mb-1"><strong>Objectif :</strong> Vérifier la conformité des dépenses aux exigences des financeurs</p>
                  <p className="text-gray-600 text-lg"><strong>Bénéfice :</strong> Continuité des financements et renforcement de la réputation auprès des bailleurs</p>
                </div>
                <div className="border-l-4 border-[#80C342] pl-4">
                  <h5 className="text-xl font-bold text-[#073E5D]">4. Missions Ciblées et Attestations Spécifiques</h5>
                  <p className="text-gray-700 text-lg mb-1"><strong>Objectif :</strong> Obtenir une validation externe rapide sur un sujet précis</p>
                  <p className="text-gray-600 text-lg"><strong>Bénéfice :</strong> Maîtrise des coûts et réponse rapide aux besoins d'assurance ciblés</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-lg">
              <h4 className="text-3xl font-bold text-[#073E5D] mb-4">Détail de nos services d'audit</h4>
              
              <div className="space-y-6">
                <div>
                  <h5 className="text-xl font-bold text-[#073E5D] mb-2">1. Commissariat aux Comptes (Audit Légal)</h5>
                  <p className="text-gray-700 text-lg mb-2"><strong>Qu'est-ce que c'est ?</strong></p>
                  <p className="text-gray-700 text-lg mb-3">Le Commissariat aux Comptes est une mission d'intérêt public et une obligation légale pour de nombreuses entreprises. Il consiste en un examen indépendant de vos comptes annuels par un professionnel certifié, visant à certifier que vos états financiers reflètent, sincèrement et fidèlement, la réalité de votre entreprise.</p>
                  
                  <p className="text-gray-700 text-lg mb-2"><strong>Pourquoi c'est important pour vous ?</strong></p>
                  <ul className="text-gray-700 text-lg space-y-1 mb-3">
                    <li>• <strong>Crédibilité et confiance :</strong> Vous gagnez en crédibilité auprès de vos banques, investisseurs et partenaires commerciaux</li>
                    <li>• <strong>Sécurité des actionnaires :</strong> Vous rassurez vos associés sur la santé financière de votre entreprise</li>
                    <li>• <strong>Analyse experte :</strong> Bénéficiez d'un regard expert sur vos processus comptables et financiers</li>
                  </ul>
                  
                  <p className="text-gray-700 text-lg mb-2"><strong>Comment nous vous accompagnons ?</strong></p>
                  <p className="text-gray-700 text-lg">Nous certifions vos comptes annuels selon les normes en vigueur (SYSCOHADA, IFRS, PCB, CIMA, etc.), vérifions la régularité de vos opérations et évaluons la fiabilité de vos contrôles internes.</p>
                </div>

                <div>
                  <h5 className="text-xl font-bold text-[#073E5D] mb-2">2. Audit Contractuel (Audit Volontaire)</h5>
                  <p className="text-gray-700 text-lg mb-2"><strong>Qu'est-ce que c'est ?</strong></p>
                  <p className="text-gray-700 text-lg mb-3">C'est un audit que vous choisissez de faire réaliser (sans obligation légale) pour obtenir une évaluation indépendante et stratégique de vos comptes et de votre situation financière. Il est essentiel à la prise de décisions majeures telles qu'une acquisition, une cession, une restructuration ou une levée de fonds.</p>
                  
                  <p className="text-gray-700 text-lg mb-2"><strong>Pourquoi c'est important pour vous ?</strong></p>
                  <ul className="text-gray-700 text-lg space-y-1 mb-3">
                    <li>• <strong>Sécurité des transactions :</strong> Obtenez la validation externe indispensable pour vos opérations</li>
                    <li>• <strong>Confiance Renforcée :</strong> Vous renforcez la crédibilité auprès de vos banquiers et partenaires</li>
                    <li>• <strong>Diagnostic objectif :</strong> Vous disposez d'une photographie objective de la santé de votre entreprise</li>
                  </ul>
                </div>

                <div>
                  <h5 className="text-xl font-bold text-[#073E5D] mb-2">3. Audit de Projets (Bailleurs de Fonds)</h5>
                  <p className="text-gray-700 text-lg mb-2"><strong>Qu'est-ce que c'est ?</strong></p>
                  <p className="text-gray-700 text-lg mb-3">Ce service répond à l'exigence des bailleurs internationaux (Banque Mondiale, BAD, AFD, Union Européenne, etc.) ou de l'État. Il s'agit de la vérification de l'utilisation correcte des fonds alloués à un projet, conformément aux accords de financement et aux normes d'audit spécifiques.</p>
                  
                  <p className="text-gray-700 text-lg mb-2"><strong>Pourquoi c'est important pour vous ?</strong></p>
                  <ul className="text-gray-700 text-lg space-y-1 mb-3">
                    <li>• <strong>Continuité des financements :</strong> Vous évitez les blocages de décaissement des fonds</li>
                    <li>• <strong>Optimisation de la gestion :</strong> Vous prouvez la bonne utilisation des fonds</li>
                    <li>• <strong>Conformité assurée :</strong> Vous vous assurez que les procédures sont tenues selon les standards</li>
                  </ul>
                </div>

                <div>
                  <h5 className="text-xl font-bold text-[#073E5D] mb-2">4. Missions Ciblées et Attestations Spécifiques</h5>
                  <p className="text-gray-700 text-lg mb-2"><strong>Qu'est-ce que c'est ?</strong></p>
                  <p className="text-gray-700 text-lg mb-3">Ce sont des missions d'examen et de vérification sur mesure, adaptées à vos besoins précis. Plus ciblées et rapides qu'un audit complet, elles vous apportent une assurance professionnelle sur un périmètre défini, tout en vous permettant de maîtriser vos coûts d'audit.</p>
                  
                  <p className="text-gray-700 text-lg mb-2"><strong>Pourquoi c'est important pour vous ?</strong></p>
                  <ul className="text-gray-700 text-lg space-y-1 mb-3">
                    <li>• <strong>Réponse rapide :</strong> Vous obtenez une validation externe sur un sujet précis</li>
                    <li>• <strong>Crédibilité immédiate :</strong> Vous répondez rapidement aux demandes spécifiques</li>
                    <li>• <strong>Maîtrise des coûts :</strong> Vous optimisez votre budget d'audit</li>
                  </ul>
                  
                  <p className="text-gray-700 text-lg mb-2"><strong>Comment nous vous accompagnons ?</strong></p>
                  <ul className="text-gray-700 text-lg space-y-1">
                    <li>• Revues limitées de comptes : Examen moins approfondi qu'un audit complet</li>
                    <li>• Attestations spécifiques : Validation de chiffres d'affaires, de subventions</li>
                    <li>• Procédures convenues : Vérifications définies précisément avec vous</li>
                    <li>• Audits de conformité : Vérification du respect des réglementations</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-[#80C342]/10 p-6 rounded-lg">
              <h4 className="text-3xl font-bold text-[#073E5D] mb-3">Pourquoi choisir Y3 Audit & Conseils ?</h4>
              <p className="text-gray-700 text-lg mb-3">Notre approche de l'audit est basée sur le partenariat et l'impact concret.</p>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Expertise sectorielle :</strong> Nous comprenons votre environnement, vos défis et les spécificités de votre secteur</li>
                <li>• <strong>Garantie de qualité :</strong> Nous appliquons rigoureusement les normes internationales (ISA)</li>
                <li>• <strong>Au-delà du rapport :</strong> Nos recommandations sont des leviers d'action concrets</li>
                <li>• <strong>Partenariat de confiance :</strong> Une équipe disponible et réactive, à vos côtés toute l'année</li>
              </ul>
            </div>

            <div className="bg-[#073E5D] text-white p-6 rounded-lg text-center">
              <h4 className="text-3xl font-bold mb-2">Prochaine étape : sécurisons ensemble votre avenir</h4>
              <p className="text-gray-200 mb-4">Ne laissez pas l'incertitude freiner votre potentiel.</p>
              <p className="text-lg text-gray-300">Contactez Y3 Audit & Conseils dès aujourd'hui pour une évaluation confidentielle de vos besoins en Audit et Assurance.</p>
            </div>
          </div>
        }
      />
    </main>
  )
}

