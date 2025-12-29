"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown, Mail, MapPin, Clock } from "lucide-react"
import { LinkedInLogo } from "./linkedin-logo"
import { EmailIcon } from "./email-icon"
import { LocationIcon } from "./location-icon"
import { WhatsAppIcon } from "./whatsapp-icon"
import { cn } from "@/lib/utils"
import { useSlider } from "./slider-context"

interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const { currentImage } = useSlider()

  const navItems: NavItem[] = [
    {
      label: "Découvrez le cabinet",
      href: "#",
      children: [
        { label: "Notre histoire", href: "/a-propos/notre-histoire" },
        { label: "Notre équipe", href: "/a-propos/notre-equipe" },
        { label: "Nos valeurs", href: "/a-propos/notre-equipe#nos-valeurs" },
      ],
    },
    {
      label: "Métiers",
      href: "#",
      children: [
        { label: "Nos métiers", href: "/services/nos-metiers" },
        { label: "Audit", href: "/services/audit" },
        { label: "Expertise comptable", href: "/services/expertise-comptable"},
        { label: "Conseil financier", href: "/services/conseil-financier" },
        { label: "Conseil opérationnel", href: "/services/conseil-operationnel" },
      ],
    },
    {
      label: "Insights",
      href: "/insights",
    },
    {
      label: "Carrières",
      href: "#",
        children: [
          { label: "Candidature spontanée", href: "/rejoignez-nous/candidature" },
        ],
    },
  ]

  useEffect(() => {
    // Vérifier si on est côté client
    if (typeof window === "undefined") return

    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset || 0
      if (scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
      // Fermer les sous-menus lors du scroll
      setActiveDropdown(null)
    }

    // Utiliser requestAnimationFrame pour améliorer les performances
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  const toggleDropdown = (label: string) => {
    if (activeDropdown === label) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(label)
    }
  }

  const closeDropdown = () => {
    setActiveDropdown(null)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full" style={{backgroundImage: `url('${currentImage}')`, backgroundSize: "cover", backgroundPosition: "center top", backgroundRepeat: "no-repeat"}}>
      {/* Top Bar */}
      <div className={cn("bg-[#073E5D] text-white transition-all duration-300", scrolled ? "py-3" : "py-4")}>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            <div className="flex flex-wrap items-center space-x-6">
              <a href="https://wa.me/2250546006393" target="_blank" rel="noopener noreferrer" className="flex items-center text-sm hover:text-[#80C342] transition-colors">
                <WhatsAppIcon size={14} className="mr-1 text-green-300" />
                <span>+2250546006393</span>
              </a>
              <div className="hidden md:flex items-center text-sm">
                <EmailIcon size={14} className="mr-2 text-green-300" />
                <span>hello@ycubeac.com</span>
              </div>
              <a 
                href="https://maps.app.goo.gl/QhNNqo1q4MrjWkpk8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hidden lg:flex items-center text-sm hover:text-[#80C342] transition-colors"
              >
                <LocationIcon size={14} className="mr-2 text-green-300" />
                <span>Cocody, Riviera</span>
              </a>
              <div className="hidden lg:flex items-center text-sm">
                <Clock size={14} className="mr-2" />
                <span>Lun - Ven: 8h - 18h</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a href="https://www.linkedin.com/company/y3-audit-conseils/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#80C342]" aria-label="LinkedIn">
                <LinkedInLogo size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className={cn("bg-transparent transition-all duration-300", scrolled ? "py-2" : "py-4")}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative w-48 h-24 sm:w-60 sm:h-32 md:w-72 md:h-36">
                <Image src="/Logo-y3.png" alt="Y3 Audit & Conseils" fill sizes="(max-width: 640px) 192px, (max-width: 768px) 240px, 288px" className="object-contain" priority unoptimized />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => item.children && toggleDropdown(item.label)}
                  onMouseLeave={() => closeDropdown()}
                >
                  {item.children ? (
                    <>
                      <button
                        className="flex items-center text-white hover:text-[#80C342] font-semibold text-lg transition-colors drop-shadow-lg"
                        onClick={() => toggleDropdown(item.label)}
                      >
                        {item.label}
                        <ChevronDown size={16} className="ml-1" />
                      </button>

                      {activeDropdown === item.label && item.children && (
                        <div
                          className="absolute left-0 mt-2 w-48 bg-gray-900/95 backdrop-blur-lg rounded-md shadow-lg py-1 z-10 border border-gray-700"
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className="block px-4 py-2 text-base text-white hover:bg-white/10 hover:text-[#80C342] font-medium"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-white hover:text-[#80C342] font-semibold text-lg transition-colors drop-shadow-lg"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                href="/contact/demande-de-devis"
                className="bg-[#80C342] hover:bg-[#073E5D] text-white px-6 py-3 rounded-lg transition-colors duration-300 text-lg font-semibold shadow-lg hover:shadow-xl"
              >
                Demander un devis
              </Link>
            </nav>

            {/* Mobile Navigation Toggle */}
            <button className="md:hidden text-white hover:text-[#80C342]" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-lg border-t shadow-lg max-h-[80vh] overflow-y-auto mobile-menu-scroll smooth-scroll">
          <div className="container mx-auto px-4 py-3">
            {navItems.map((item) => (
              <div key={item.label} className="py-2">
                {item.children ? (
                  <>
                    <button
                      className="flex items-center justify-between w-full text-white font-semibold text-lg drop-shadow-lg p-2 rounded-md hover:bg-white/10 transition-colors"
                      onClick={() => toggleDropdown(item.label)}
                      aria-expanded={activeDropdown === item.label}
                    >
                      {item.label}
                      <ChevronDown
                        size={16}
                        className={cn(
                          "transition-transform duration-200",
                          activeDropdown === item.label ? "transform rotate-180" : "",
                        )}
                      />
                    </button>

                    {activeDropdown === item.label && item.children && (
                      <div className="mt-2 ml-4 border-l-2 border-[#80C342] pl-4 max-h-60 overflow-y-auto submenu-scroll smooth-scroll">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block py-2 text-white hover:text-[#80C342] text-base font-medium drop-shadow-lg hover:bg-white/5 rounded-md px-2 transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block w-full text-white font-semibold hover:text-[#80C342] text-lg drop-shadow-lg p-2 rounded-md hover:bg-white/10 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="mt-4 pt-4 border-t">
              <Link
                href="/contact/demande-de-devis"
                className="block w-full bg-[#80C342] hover:bg-[#073E5D] text-white text-center px-5 py-2 rounded-md transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Demander un devis
              </Link>
              <div className="mt-4 space-y-2">
                <a href="https://wa.me/2250546006393" target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-gray-600 hover:text-[#80C342] transition-colors">
                  <span>+2250546006393</span>
                </a>
                <div className="flex items-center text-sm text-gray-600">
                  <EmailIcon size={14} className="mr-2 text-green-400" />
                  <span>hello@ycubeac.com</span>
                </div>
                <a 
                  href="https://maps.app.goo.gl/QhNNqo1q4MrjWkpk8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-sm text-gray-600 hover:text-[#80C342] transition-colors"
                >
                  <LocationIcon size={14} className="mr-2 text-green-400" />
                  <span>Cocody, Riviera</span>
                </a>
                <div className="flex items-center text-sm text-gray-600">
                  <Clock size={14} className="mr-2 text-[#073E5D]" />
                  <span>Lun - Ven: 9h - 18h</span>
                </div>
              </div>
              <div className="mt-4 flex items-center space-x-4">
                <a href="https://www.linkedin.com/company/y3-audit-conseils/" target="_blank" rel="noopener noreferrer" className="text-[#073E5D] hover:text-[#80C342]" aria-label="LinkedIn">
                  <LinkedInLogo size={22} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
