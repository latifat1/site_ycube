"use client"

import Link from "next/link"
import { CheckCircle, Calendar, Clock, ArrowLeft } from "lucide-react"
import { MainSlider, type Slide } from "@/app/components/main-slider"

// Une seule image pour le slider
const slides: Slide[] = [
  {
    title: "Merci pour votre confiance !",
    description: "Votre demande de rendez-vous a été confirmée.",
    image: "/images/22.png",
    id: 0,
    buttonText: "",
    buttonLink: "",
    priority: false,
  },
]

export default function ConfirmationPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* MainSlider avec header confondu */}
      <section>
        <MainSlider slides={slides} />
      </section>

      {/* Section de confirmation centrée */}
      <section className="flex flex-col items-center justify-center px-4 -mt-20 md:-mt-32">
        {/* -mt pour remonter légèrement au milieu du slider */}
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <div className="flex flex-col items-center text-center mb-8">
            <div className="rounded-full bg-green-100 p-4 mb-4">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-[#073E5D] mb-2">
              Demande de rendez-vous confirmée
            </h1>
            <div className="w-16 h-1 bg-[#80C342] mx-auto mb-4"></div>
            <p className="text-gray-600">
              Nous avons bien reçu votre demande de rendez-vous. Un membre de notre équipe vous contactera dans les plus
              brefs délais pour confirmer votre créneau.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <div className="flex items-start mb-4">
              <Calendar className="h-6 w-6 text-[#80C342] mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-medium text-[#073E5D]">Votre rendez-vous</h3>
                <p className="mt-1 text-gray-600">
                  Vous recevrez un email de confirmation avec tous les détails de votre rendez-vous.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Clock className="h-6 w-6 text-[#80C342] mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-medium text-[#073E5D]">Prochaines étapes</h3>
                <ul className="mt-2 space-y-2 text-gray-600">
                  <li>Un conseiller vous contactera par téléphone pour confirmer l'horaire.</li>
                  <li>Vous recevrez un rappel 24 heures avant votre rendez-vous.</li>
                  <li>Préparez vos questions et documents éventuels pour optimiser notre échange.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <Link
              href="/"
              className="flex items-center justify-center bg-white border border-[#073E5D] text-[#073E5D] py-2 px-6 rounded-md font-medium hover:bg-gray-50 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour à l'accueil
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
