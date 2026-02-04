
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
import { usePathname } from "next/navigation"

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

  const pathname = usePathname()
  const isConfirmationPage = pathname === "/contact/demande-confirmation"

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
    if (typeof window === "undefined") return

    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset || 0
      setScrolled(scrollY > 50)
      setActiveDropdown(null)
    }

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
      if (hoverTimeout) clearTimeout(hoverTimeout)
    }
  }, [hoverTimeout])

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label)
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
      {/* Top Bar */}
      <div className={cn(
        "transition-all duration-300 hidden md:block",
        "bg-[#073E5D] text-white py-2 xs:py-2.5 sm:py-3"
      )}>
        <div className="container mx-auto px-2 xs:px-3 sm:px-4">
          <div className="flex flex-wrap justify-between items-center gap-2">
            <div className="flex items-center gap-3">
              <a href="https://wa.me/2250546006393" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-[#80C342] transition-colors">
                <WhatsAppIcon size={15} className="mr-1 text-green-300" />
                <span>+2250546006393</span>
              </a>
              <button
                onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=hello@ycubeac.com', '_blank')}
                className="flex items-center hover:text-[#80C342] transition-colors"
              >
                <EmailIcon size={15} className="mr-1 text-green-300" />
                <span>hello@ycubeac.com</span>
              </button>
              <a href="https://maps.app.goo.gl/QhNNqo1q4MrjWkpk8" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-[#80C342] transition-colors">
                <LocationIcon size={15} className="mr-1 text-green-300" />
                <span>Cocody, Riviera</span>
              </a>
            </div>
            <div className="flex items-center">
              <a href="https://www.linkedin.com/company/y3-audit-conseils/" target="_blank" rel="noopener noreferrer" className="text-[#073E5D] hover:text-[#80C342]" aria-label="LinkedIn">
                <LinkedInLogo size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className={cn(
        "transition-all duration-300",
        scrolled || isConfirmationPage
          ? "bg-white py-1 shadow-md"
          : "bg-transparent py-2 xs:py-2 sm:py-2.5"
      )}>
        <div className="container mx-auto px-2 xs:px-3 sm:px-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/Logo-y3.png"
              alt="Y3 Audit & Conseils"
              width={scrolled || isConfirmationPage ? 120 : 130}
              height={scrolled || isConfirmationPage ? 40 : 45}
              className="transition-all duration-300 object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <div key={item.label} className="relative group" onMouseEnter={() => item.children && handleMouseEnter(item.label)} onMouseLeave={handleMouseLeave}>
                <button
                  className={cn(
                    "flex items-center font-semibold text-lg transition-all duration-200 px-2 py-1 rounded-md",
                    scrolled || isConfirmationPage
                      ? "text-[#073E5D] hover:text-[#80C342]" // ✅ texte bleu
                      : "text-white hover:text-[#80C342]"
                  )}
                  onClick={() => toggleDropdown(item.label)}
                >
                  {item.label}
                  <ChevronDown size={16} className={`ml-1 transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                </button>

                {activeDropdown === item.label && item.children && (
                  <div className={cn(
                    "absolute left-0 mt-2 w-64 rounded-md shadow-lg py-1 z-10 border animate-fade-in-up",
                    scrolled || isConfirmationPage
                      ? "bg-gray-100 border-gray-300"
                      : "bg-gray-900/95 border-gray-700"
                  )}>
                    {item.children.map((child) => (
                      <Link key={child.label} href={child.href} className={cn(
                        "block px-4 py-2 text-base font-medium rounded-md mx-1",
                        scrolled || isConfirmationPage
                          ? "text-[#073E5D] hover:bg-gray-200 hover:text-[#80C342]" // ✅ texte bleu
                          : "text-white hover:bg-white/10 hover:text-[#80C342]"
                      )} onClick={() => setActiveDropdown(null)}>
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link href="/contact/rendez-vous" className={cn(
              "px-4 py-2 rounded-lg text-sm font-semibold shadow-lg transition-all duration-300",
              scrolled || isConfirmationPage
                ? "bg-[#80C342] hover:bg-[#073E5D] text-white"
                : "bg-[#80C342] hover:bg-[#073E5D] text-white"
            )}>
              Prendre rendez-vous
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className={cn(
              "md:hidden transition-all duration-200",
              scrolled || isConfirmationPage ? "text-[#073E5D]" : "text-white" // ✅ texte bleu mobile
            )}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-lg animate-fade-in-up max-h-[80vh] overflow-y-auto w-full">
          <div className="container mx-auto px-3 xs:px-4 py-3 w-full">
            {navItems.map((item) => (
              <div key={item.label} className="py-2">
                <button
                  className="flex items-center justify-between w-full text-[#073E5D] text-lg font-medium hover:text-[#80C342] transition-colors p-2 rounded-md"
                  onClick={() => toggleDropdown(item.label)}
                >
                  {item.label}
                  <ChevronDown size={16} className={cn("transition-transform duration-200", activeDropdown === item.label ? "rotate-180" : "")} />
                </button>
                {activeDropdown === item.label && item.children && (
                  <div className="mt-2 ml-4 border-l-2 border-[#80C342] pl-4 max-h-60 overflow-y-auto">
                    {item.children.map((child) => (
                      <Link key={child.label} href={child.href} className="block py-2 text-[#073E5D] hover:text-[#80C342] hover:bg-gray-50 rounded-md px-2" onClick={() => setIsOpen(false)}>
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-4 pt-4 border-t">
              <Link href="/contact/rendez-vous" className="block w-full bg-[#80C342] hover:bg-[#073E5D] text-white text-center px-5 py-2 rounded-md" onClick={() => setIsOpen(false)}>
                Prendre rendez-vous
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
