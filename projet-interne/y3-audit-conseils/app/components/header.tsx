"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import { LinkedInLogo } from "./linkedin-logo"
import { EmailIcon } from "./email-icon"
import { LocationIcon } from "./location-icon"
import { WhatsAppIcon } from "./whatsapp-icon"
import { cn } from "@/lib/utils"

interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null)

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
        { label: "Expertise comptable", href: "/services/expertise-comptable" },
        { label: "Audit", href: "/services/audit" },
        { label: "Conseil financier", href: "/services/conseil-financier" },
        { label: "Conseil opérationnel", href: "/services/conseil-operationnel" },
      ],
    },
    {
      label: "Insights",
      href: "#",
      children: [
        { label: "Banking Pulse", href: "/donnees" },
        { label: "Actualités", href: "/actualites" },
      ],
    },
    {
      label: "Carrières",
      href: "#",
      children: [
        { label: "Offres d'emploi", href: "/rejoignez-nous/carrieres" },
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
      if (hoverTimeout) {
        clearTimeout(hoverTimeout)
      }
    }
  }, [hoverTimeout])

  const toggleDropdown = (label: string) => {
    if (activeDropdown === label) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(label)
    }
  }

  const handleMouseEnter = (label: string) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout)
      setHoverTimeout(null)
    }
    setActiveDropdown(label)
  }

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null)
    }, 200)
    setHoverTimeout(timeout)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      <div className={cn(
        "transition-all duration-300 hidden md:block",
        scrolled 
          ? "bg-[#073E5D] text-white py-2 xs:py-2.5 sm:py-3" 
          : "bg-[#073E5D] text-white py-2 xs:py-2.5 sm:py-3"
      )}>
        <div className="container mx-auto px-2 xs:px-3 sm:px-4">
          <div className="flex flex-wrap justify-between items-center gap-1 xs:gap-2 sm:gap-3 md:gap-4">
            <div className="flex flex-wrap items-center gap-1 xs:gap-2 sm:gap-3 md:gap-4 lg:gap-6">
              <a href="https://wa.me/2250546006393" target="_blank" rel="noopener noreferrer" className="flex items-center text-sm xs:text-base hover:text-[#80C342] transition-colors">
                <WhatsAppIcon size={13} className="xs:size-[15] mr-1 text-green-300" />
                <span className="leading-none">+2250546006393</span>
              </a>
              <button 
                onClick={() => {
                  const url = 'https://mail.google.com/mail/?view=cm&fs=1&to=hello@ycubeac.com';
                  window.open(url, '_blank');
                }}
                className="hidden sm:flex items-center text-sm xs:text-base hover:text-[#80C342] transition-colors"
              >
                <EmailIcon size={13} className="xs:size-[15] mr-1 text-green-300" />
                <span className="hidden md:inline leading-none">hello@ycubeac.com</span>
                <span className="md:hidden leading-none">Email</span>
              </button>
              <a 
                href="https://maps.app.goo.gl/QhNNqo1q4MrjWkpk8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hidden lg:flex items-center text-sm xs:text-base hover:text-[#80C342] transition-colors"
              >
                <LocationIcon size={13} className="xs:size-[15] mr-1 text-green-300" />
                <span className="leading-none">Cocody, Riviera</span>
              </a>
            </div>
            <div className="flex items-center justify-end">
              <a href="https://www.linkedin.com/company/y3-audit-conseils/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#80C342] transition-colors" aria-label="LinkedIn">
                <LinkedInLogo size={18} className="xs:size-[20]" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={cn(
        "transition-all duration-300",
        scrolled 
          ? "bg-gray-800/95 backdrop-blur-lg py-1.5 shadow-lg" 
          : "bg-transparent py-1.5 xs:py-2 sm:py-2.5"
      )}>
        <div className="container mx-auto px-2 xs:px-3 sm:px-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center flex-shrink-0">
              <Image
                src="/Logo-y3.png"
                alt="Y3 Audit & Conseils"
                width={120}
                height={42}
                priority
                unoptimized
                className={cn(
                  "transition-all duration-300 h-auto w-auto object-contain",
                  scrolled
                    ? "h-12 w-auto sm:h-9 sm:w-auto md:h-10 md:w-auto lg:h-11 lg:w-auto xl:h-12 xl:w-auto"
                    : "h-14 w-auto xs:h-10 xs:w-auto sm:h-11 sm:w-auto md:h-12 md:w-auto lg:h-14 lg:w-auto xl:h-16 xl:w-auto"
                )}
              />
            </Link>

            <nav className="hidden md:flex items-center space-x-3 lg:space-x-4 xl:space-x-6">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => {
                    if (item.children) {
                      handleMouseEnter(item.label)
                    }
                  }}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className={cn(
                      "flex items-center font-semibold text-lg transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[#80C342] focus-visible:outline-offset-2 rounded-md px-2 py-1",
                      scrolled 
                        ? "text-white hover:text-[#80C342] drop-shadow-none" 
                        : "text-white hover:text-[#80C342] drop-shadow-lg"
                    )}
                    onClick={() => toggleDropdown(item.label)}
                    aria-expanded={activeDropdown === item.label}
                    aria-haspopup="true"
                  >
                    {item.label}
                    <ChevronDown 
                      size={16} 
                      className={`ml-1 transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''}`} 
                    />
                  </button>

                  {activeDropdown === item.label && item.children && (
                    <div
                      className={cn(
                        "absolute left-0 mt-2 w-64 backdrop-blur-lg rounded-md shadow-lg py-1 z-10 border animate-fade-in-up",
                        scrolled 
                          ? "bg-gray-700/80 border-gray-600" 
                          : "bg-gray-900/95 border-gray-700"
                      )}
                      role="menu"
                      aria-label={`Sous-menu ${item.label}`}
                      onMouseEnter={() => {
                        if (hoverTimeout) {
                          clearTimeout(hoverTimeout)
                          setHoverTimeout(null)
                        }
                        setActiveDropdown(item.label)
                      }}
                      onMouseLeave={handleMouseLeave}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className={cn(
                            "block px-4 py-2 text-base font-medium transition-all duration-200 rounded-md mx-1 focus-visible:outline-2 focus-visible:outline-[#80C342] focus-visible:outline-offset-1",
                            scrolled 
                              ? "text-white hover:bg-gray-600/50 hover:text-[#80C342]" 
                              : "text-white hover:bg-white/10 hover:text-[#80C342]"
                          )}
                          role="menuitem"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                href="/contact/rendez-vous"
                className={cn(
                  "px-3 xs:px-4 md:px-6 py-2 xs:py-2.5 md:py-3 rounded-lg transition-all duration-300 text-sm xs:text-base md:text-lg font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2",
                  scrolled 
                    ? "bg-[#80C342] hover:bg-[#073E5D] text-white focus-visible:outline-[#80C342]" 
                    : "bg-[#80C342] hover:bg-[#073E5D] text-white focus-visible:outline-white"
                )}
              >
                <span className="hidden md:inline">Prendre rendez-vous</span>
                <span className="md:hidden">Rendez-vous</span>
              </Link>
            </nav>

            <button 
              className={cn(
                "md:hidden px-2 py-1 rounded-md transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[#80C342] focus-visible:outline-offset-2 flex items-center justify-center",
                scrolled 
                  ? "text-white hover:text-[#80C342]" 
                  : "text-white hover:text-[#80C342]"
              )}
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label="Menu de navigation"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-lg animate-fade-in-up max-h-[80vh] overflow-y-auto mobile-menu-scroll smooth-scroll w-full">
          <div className="container mx-auto px-3 xs:px-4 py-3 w-full">
            {navItems.map((item) => (
              <div key={item.label} className="py-2">
                <button
                  className="flex items-center justify-between w-full text-[#073E5D] text-lg font-medium hover:text-[#80C342] transition-colors duration-200 p-2 rounded-md focus-visible:outline-2 focus-visible:outline-[#80C342] focus-visible:outline-offset-1"
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
                        className="block py-2 text-[#073E5D] hover:text-[#80C342] hover:bg-gray-50 rounded-md px-2 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-4 pt-4 border-t">
              <Link
                href="/contact/rendez-vous"
                className="block w-full bg-[#80C342] hover:bg-[#073E5D] text-white text-center px-5 py-2 rounded-md transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Prendre rendez-vous
              </Link>
              <div className="mt-4 space-y-2">
                <a href="https://wa.me/2250546006393" target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-gray-600 hover:text-[#80C342] transition-colors">
                  <span>+2250546006393</span>
                </a>
                <button 
                  onClick={() => {
                    const url = 'https://mail.google.com/mail/?view=cm&fs=1&to=hello@ycubeac.com';
                    window.open(url, '_blank');
                  }}
                  className="flex items-center text-sm text-gray-600 hover:text-[#80C342] transition-colors"
                >
                  <EmailIcon size={14} className="mr-1 text-green-400" />
                  <span>hello@ycubeac.com</span>
                </button>
                <a 
                  href="https://maps.app.goo.gl/QhNNqo1q4MrjWkpk8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-sm text-gray-600 hover:text-[#80C342] transition-colors"
                >
                  <LocationIcon size={14} className="mr-1 text-green-400" />
                  <span>Cocody, Riviera</span>
                </a>
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

