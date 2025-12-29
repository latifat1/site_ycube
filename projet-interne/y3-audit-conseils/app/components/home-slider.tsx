"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { useSlider } from "./slider-context"

interface Slide {
  id: number
  title: string
  description: string
  image: string
  buttonText: string
  buttonLink: string
  priority: boolean
}

export function HomeSlider() {
  const { setCurrentImage } = useSlider()
  const slides: Slide[] = [
    {
      id: 1,
      title: "Y3 Audit & Conseils",
      description: "Votre partenaire de confiance pour l'audit et le conseil en Côte d'Ivoire.",
      image: "/home1.jpg",
      buttonText: "Découvrir nos services",
      buttonLink: "/services",
      priority: true,
    },
    {
      id: 2,
      title: "Excellence & Expertise",
      description: "Plus de 20 ans d'expérience au service de nos clients.",
      image: "/home2.jpg",
      buttonText: "Notre équipe",
      buttonLink: "/a-propos/notre-equipe",
      priority: true,
    },
    {
      id: 3,
      title: "Innovation & Proximité",
      description: "Des solutions adaptées à vos besoins spécifiques.",
      image: "/home3.jpg",
      buttonText: "Nous contacter",
      buttonLink: "/contact",
      priority: true,
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
    <div className="relative h-[900px] overflow-hidden -mx-4 -mt-20" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{backgroundImage: `url('${slides[currentSlide].image}')`, backgroundSize: "cover", backgroundPosition: "center top", backgroundRepeat: "no-repeat"}}>
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
              src={slide.image}
              alt={slide.title}
              fill
              sizes="100vw"
              priority={slide.priority}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="absolute inset-0 flex items-center justify-start pt-4">
              <div className="container mx-auto px-8 text-left">
                <div className="max-w-4xl pl-32">
                  <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg whitespace-nowrap">{slide.title}</h2>
                  <div className="w-20 h-1 bg-[#80C342] mb-6"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

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




