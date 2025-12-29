"use client"

import { useState } from "react"
import { Calendar } from "@/app/components/calendar"
import { AppointmentForm } from "@/app/components/appointment-form"
import { FadeInWhenVisible } from "@/app/components/animations"
import { MainSlider, type Slide } from "@/app/components/main-slider"
import { usePageImage } from "@/app/hooks/use-page-image"
import { MapPin, Mail } from "lucide-react"
import { EmailIcon } from "@/app/components/email-icon"
import { LocationIcon } from "@/app/components/location-icon"

export default function RendezVousPage() {
  usePageImage('/Expert.webp')
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)
  const [selectedTime, setSelectedTime] = useState<string | undefined>(undefined)

  const rendezVousSlides: Slide[] = [
    {
      id: 1,
      title: "Prendre rendez-vous",
      description: "Rencontrez nos experts pour discuter de vos besoins et découvrir nos solutions.",
      image: "/Expert.jpg",
      buttonText: "Réserver maintenant",
      buttonLink: "/contact/rendez-vous",
      priority: true,
    },
  ]

  return (
    <>
      <MainSlider slides={rendezVousSlides} />
      <main className="py-6 xs:py-8 sm:py-10 md:py-12">
      <div className="container mx-auto px-2 xs:px-4 sm:px-6 md:px-8">
        <div className="mb-6 xs:mb-8 sm:mb-10 md:mb-12 pl-1 xs:pl-2 sm:pl-4 md:pl-8 lg:pl-16 xl:pl-32">
          <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-[#073E5D] mb-2 xs:mb-3 sm:mb-4">Prendre rendez-vous</h1>
          <div className="w-12 xs:w-16 sm:w-18 md:w-20 h-1 bg-[#80C342]"></div>
          <p className="mt-3 xs:mt-4 text-xs xs:text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl">
            Sélectionnez une date et une heure qui vous conviennent, puis remplissez le formulaire pour confirmer votre
            rendez-vous avec l'un de nos experts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-8 sm:gap-10 md:gap-12 mb-8 xs:mb-12 sm:mb-16">
          <div className="space-y-6 xs:space-y-7 sm:space-y-8">
            <FadeInWhenVisible>
              <div className="bg-white p-3 xs:p-4 sm:p-5 md:p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
                <h2 className="text-lg xs:text-xl sm:text-2xl font-semibold text-[#073E5D] mb-4 xs:mb-5 sm:mb-6">Choisissez votre créneau</h2>
                <Calendar
                  selectedDate={selectedDate}
                  onDateChange={setSelectedDate}
                  selectedTime={selectedTime}
                  onTimeChange={setSelectedTime}
                />
              </div>
            </FadeInWhenVisible>

            {/* Carte interactive */}
            <FadeInWhenVisible delay={0.1}>
              <div className="bg-white p-3 xs:p-4 sm:p-5 md:p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
                <h2 className="text-lg xs:text-xl sm:text-2xl font-semibold text-[#073E5D] mb-4 xs:mb-5 sm:mb-6">Nos coordonnées</h2>

                {/* Carte statique */}
                <div className="relative h-[180px] xs:h-[200px] sm:h-[220px] md:h-[240px] w-full rounded-lg overflow-hidden mb-6 xs:mb-7 sm:mb-8">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15890.078150849655!2d-3.970157214013181!3d5.3373524371642755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1edf8d6fb7533%3A0xa6cc83ac235fb341!2sY3%20Audit%20et%20Conseils!5e0!3m2!1sfr!2sci!4v1749816029717!5m2!1sfr!2sci"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                  <div className="absolute bottom-2 xs:bottom-3 sm:bottom-4 right-2 xs:right-3 sm:right-4">
                    <a
                      href="https://maps.app.goo.gl/4FZHdb9vVnozbRi86"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#80C342] text-white px-2 xs:px-3 sm:px-4 py-1.5 xs:py-2 rounded-md hover:bg-[#073E5D] transition-colors flex items-center gap-1 xs:gap-2 text-xs xs:text-sm sm:text-base"
                    >
                      <MapPin className="h-4 w-4 xs:h-5 xs:w-5" />
                      <span className="hidden xs:inline">Obtenir l'itinéraire</span>
                      <span className="xs:hidden">Itinéraire</span>
                    </a>
                  </div>
                </div>

                {/* Coordonnées complètes */}
                <div className="space-y-4 xs:space-y-5 sm:space-y-6">
                  <div className="flex items-start">
                    <div className="bg-gray-100 rounded-full p-1.5 xs:p-2 mr-2 xs:mr-3 mt-0.5">
                      <LocationIcon size={16} className="xs:size-[18] sm:size-[20] text-green-500" />
                    </div>
                    <div>
                      <h3 className="text-sm xs:text-base sm:text-lg font-semibold text-[#073E5D]">Adresse</h3>
                      <p className="text-xs xs:text-sm sm:text-base text-gray-700">Cocody, Riviera</p>
                    </div>
                  </div>

                  <a href="https://wa.me/2250546006393" target="_blank" rel="noopener noreferrer" className="flex items-start hover:bg-gray-50 p-2 rounded-lg transition-colors">
                    <div>
                      <h3 className="text-sm xs:text-base sm:text-lg font-semibold text-[#073E5D]">WhatsApp</h3>
                      <p className="text-xs xs:text-sm sm:text-base text-gray-700 break-all">+2250546006393</p>
                    </div>
                  </a>

                  <div className="flex items-start">
                    <div className="bg-gray-100 rounded-full p-1.5 xs:p-2 mr-2 xs:mr-3 mt-0.5">
                      <EmailIcon size={16} className="xs:size-[18] sm:size-[20] text-green-500" />
                    </div>
                    <div>
                      <h3 className="text-sm xs:text-base sm:text-lg font-semibold text-[#073E5D]">Email</h3>
                      <p className="text-xs xs:text-sm sm:text-base text-gray-700 mb-2 break-all">hello@ycubeac.com</p>
                      <button 
                        onClick={() => {
                          const url = 'https://mail.google.com/mail/?view=cm&fs=1&to=hello@ycubeac.com';
                          window.open(url, '_blank');
                        }}
                        className="bg-[#80C342] text-white px-3 xs:px-4 py-1.5 xs:py-2 rounded-md hover:bg-[#073E5D] transition-colors text-xs xs:text-sm font-medium"
                      >
                        Envoyer un email
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInWhenVisible>
          </div>

          <FadeInWhenVisible delay={0.2}>
            <div className="bg-white p-6 xs:p-8 sm:p-10 md:p-12 rounded-lg shadow-lg max-w-4xl mx-auto">
              <h2 className="text-lg xs:text-xl sm:text-2xl font-semibold text-[#073E5D] mb-4 xs:mb-5 sm:mb-6">Vos informations</h2>
              <AppointmentForm selectedDate={selectedDate} selectedTime={selectedTime} />
            </div>
          </FadeInWhenVisible>
        </div>

        <div className="bg-gray-50 p-4 xs:p-5 sm:p-6 rounded-lg shadow-sm mb-8 xs:mb-12 sm:mb-16">
          <h2 className="text-lg xs:text-xl sm:text-2xl font-semibold text-[#073E5D] mb-3 xs:mb-4 text-center">
            Comment se déroule un rendez-vous ?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-5 sm:gap-6 mt-6 xs:mt-7 sm:mt-8">
            <div className="bg-white p-4 xs:p-5 sm:p-6 rounded-lg shadow-sm">
              <div className="text-[#80C342] text-base xs:text-lg font-bold mb-1 xs:mb-2">1. Prise de contact</div>
              <p className="text-xs xs:text-sm sm:text-base text-gray-700">
                Nous vous contactons pour confirmer votre rendez-vous et préciser vos besoins.
              </p>
            </div>
            <div className="bg-white p-4 xs:p-5 sm:p-6 rounded-lg shadow-sm">
              <div className="text-[#80C342] text-base xs:text-lg font-bold mb-1 xs:mb-2">2. Consultation</div>
              <p className="text-xs xs:text-sm sm:text-base text-gray-700">
                Nous échangeons sur votre situation et identifions les solutions adaptées à vos besoins.
              </p>
            </div>
            <div className="bg-white p-4 xs:p-5 sm:p-6 rounded-lg shadow-sm sm:col-span-2 lg:col-span-1">
              <div className="text-[#80C342] text-base xs:text-lg font-bold mb-1 xs:mb-2">3. Proposition</div>
              <p className="text-xs xs:text-sm sm:text-base text-gray-700">Nous vous envoyons une proposition détaillée adaptée à votre situation.</p>
            </div>
          </div>
        </div>
      </div>
      </main>
    </>
  )
}
