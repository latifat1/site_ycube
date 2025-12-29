"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { useSlider } from "./slider-context"

export interface Slide {
  id: number
  title: string
  description: string
  image: string
  buttonText: string
  buttonLink: string
  priority: boolean
}

interface MainSliderProps {
  slides?: Slide[]
}

export function MainSlider({ slides: customSlides }: MainSliderProps = {}) {
  const { currentImage, setCurrentImage } = useSlider()
  
  const defaultSlides: Slide[] = [
    {
      id: 1,
      title: "Bienvenue chez Y3 Audit & Conseils",
      description: "Votre partenaire de confiance pour l'audit, le conseil et l'expertise comptable.",
      image: "/Expert.jpg",
      buttonText: "Nos services",
      buttonLink: "/services",
      priority: true,
    },
    {
      id: 2,
      title: "Des experts à votre écoute",
      description: "Une équipe pluridisciplinaire pour répondre à tous vos besoins.",
      image: "/Experts.jpg",
      buttonText: "Découvrir l'équipe",
      buttonLink: "/a-propos/notre-equipe",
      priority: true,
    },
    {
      id: 3,
      title: "Une expertise reconnue",
      description: "Audit, expertise comptable et conseil financier.",
      image: "/expertises.jpg",
      buttonText: "Nos domaines d'expertise",
      buttonLink: "/services/expertise-sectorielle",
      priority: true,
    },
  ]

  const slides = customSlides || defaultSlides
  const hasMultipleSlides = slides.length > 1

  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(hasMultipleSlides)
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const startAutoPlay = () => {
    if (!hasMultipleSlides) return
    
    if (autoPlayTimerRef.current) {
      clearInterval(autoPlayTimerRef.current)
    }

    autoPlayTimerRef.current = setInterval(() => {
      nextSlide()
    }, 5000)
  }

  const stopAutoPlay = () => {
    if (autoPlayTimerRef.current) {
      clearInterval(autoPlayTimerRef.current)
      autoPlayTimerRef.current = null
    }
  }

  useEffect(() => {
    if (isAutoPlaying && hasMultipleSlides) {
      startAutoPlay()
    }

    return () => {
      stopAutoPlay()
    }
  }, [isAutoPlaying, currentSlide, hasMultipleSlides])

  // Le MainSlider ne définit plus l'image du header
  // Chaque page gère sa propre image via usePageImage

  const handleMouseEnter = () => {
    if (hasMultipleSlides) {
      setIsAutoPlaying(false)
    }
  }

  const handleMouseLeave = () => {
    if (hasMultipleSlides) {
      setIsAutoPlaying(true)
    }
  }

  return (
    <div className="relative w-full h-[400px] sm:h-[480px] md:h-[560px] lg:h-[640px] xl:h-[720px] 2xl:h-[800px] overflow-hidden" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0",
          )}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            sizes="100vw"
            priority={slide.priority}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="absolute inset-0 flex items-center justify-start pt-[30px] sm:pt-[35px] md:pt-[40px] lg:pt-[45px] xl:pt-[50px] 2xl:pt-[55px]">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-left w-full">
              <div className="max-w-4xl pl-2 sm:pl-4 md:pl-6 lg:pl-12 xl:pl-20 2xl:pl-28 pr-4 sm:pr-6 md:pr-8 lg:pr-12">
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-white mb-2 sm:mb-3 md:mb-4 drop-shadow-lg leading-tight sm:whitespace-nowrap">{slide.title}</h2>
                <div
                  className={cn(
                    "h-1 bg-[#80C342] mb-3 sm:mb-4 md:mb-5",
                    slide.title === "Audit"
                      ? "w-8 sm:w-10 md:w-12 lg:w-14 xl:w-16"
                      : "w-12 sm:w-16 md:w-20 lg:w-24 xl:w-28",
                  )}
                ></div>
              </div>
            </div>
          </div>
        </div>
      ))}


      {hasMultipleSlides && (
        <div className="absolute bottom-4 sm:bottom-5 md:bottom-6 lg:bottom-8 left-0 right-0 z-20 flex justify-center space-x-2 sm:space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={cn(
                "w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300",
                index === currentSlide ? "bg-[#80C342] w-8 sm:w-10 md:w-12" : "bg-white bg-opacity-50 hover:bg-opacity-100",
              )}
              aria-label={`Aller à la diapositive ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
