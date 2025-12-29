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

export function ContactSlider() {
  const { setCurrentImage } = useSlider()
  const slides: Slide[] = [
    {
      id: 1,
      title: "Contactez-nous",
      description: "Nous sommes là pour vous accompagner dans vos projets.",
      image: "/contact1.jpg",
      buttonText: "Prendre rendez-vous",
      buttonLink: "/contact/rendez-vous",
      priority: true,
    },
    {
      id: 2,
      title: "Notre bureau",
      description: "Situé à Cocody, Riviera, nous vous accueillons dans nos locaux.",
      image: "/contact2.jpg",
      buttonText: "Nous trouver",
      buttonLink: "/contact/nous-trouver",
      priority: true,
    },
    {
      id: 3,
      title: "Échangeons",
      description: "Une question ? Un projet ? N'hésitez pas à nous contacter.",
      image: "/contact3.jpg",
      buttonText: "Nous écrire",
      buttonLink: "mailto:hello@ycubeac.com",
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














