"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { useSlider } from "./slider-context"

interface Slide {
  id: number
  title: string
  subtitle: string
  description: string
  image: string
  buttonText: string
}

export function TeamHeroSlider() {
  const { setCurrentImage } = useSlider()
  const slides: Slide[] = [
    {
      id: 1,
      title: "Notre équipe d'experts",
      subtitle: "",
      description: "",
      image: "/boss.jpg",
      buttonText: "",
    },
    {
      id: 2,
      title: "Expertise et savoir-faire",
      subtitle: "",
      description: "",
      image: "/Expert.jpg",
      buttonText: "Nos experts",
    },
    {
      id: 3,
      title: "Accompagnement personnalisé",
      subtitle: "",
      description: "",
      image: "/Experts.jpg",
      buttonText: "Nos services",
    },
  ]

  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const startAutoPlay = () => {
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
    if (isAutoPlaying) {
      startAutoPlay()
    }

    return () => {
      stopAutoPlay()
    }
  }, [isAutoPlaying, currentSlide])

  useEffect(() => {
    setCurrentImage(slides[currentSlide].image)
  }, [currentSlide, setCurrentImage])

  const handleMouseEnter = () => {
    setIsAutoPlaying(false)
  }

  const handleMouseLeave = () => {
    setIsAutoPlaying(true)
  }

  return (
    <div className="relative h-[900px] overflow-hidden -mx-4 -mt-32 z-40" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{backgroundImage: `url('${slides[currentSlide].image}')`, backgroundSize: "cover", backgroundPosition: "center top", backgroundRepeat: "no-repeat"}}>
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0",
          )}
        >
          <div className="relative h-full w-full">
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              fill
              className="object-cover object-top"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50" />
            <div className="absolute inset-0 flex items-center justify-start pt-4">
              <div className="container mx-auto px-8 text-left text-white">
                <div className="max-w-4xl pl-32">
                  <h3 className="text-xl md:text-2xl font-medium text-[#80C342] mb-2">{slide.subtitle}</h3>
                  <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg whitespace-nowrap">{slide.title}</h2>
                  <div className="w-20 h-1 bg-[#80C342] mb-6"></div>
                  <p className="text-lg md:text-xl mb-8 max-w-2xl">{slide.description}</p>
                  {slide.buttonText && (
                    <button
                      className="inline-block bg-[#80C342] hover:bg-[#073E5D] text-white font-medium px-6 py-3 rounded-md transition-colors duration-300"
                      onClick={() => {
                        const teamSection = document.getElementById("team-section")
                        if (teamSection) {
                          teamSection.scrollIntoView({ behavior: "smooth" })
                        }
                      }}
                    >
                      {slide.buttonText}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all duration-300"
        aria-label="Diapositive précédente"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all duration-300"
        aria-label="Diapositive suivante"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300",
              index === currentSlide ? "bg-[#80C342] w-10" : "bg-white bg-opacity-50 hover:bg-opacity-100",
            )}
            aria-label={`Aller à la diapositive ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
