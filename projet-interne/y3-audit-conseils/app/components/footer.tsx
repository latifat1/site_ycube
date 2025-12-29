"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Clock, ChevronRight, CheckCircle } from "lucide-react"
import { LinkedInLogo } from "./linkedin-logo"
import { WhatsAppIcon } from "./whatsapp-icon"
import { EmailIcon } from "./email-icon"
import { LocationIcon } from "./location-icon"

export function Footer() {
  const currentYear = new Date().getFullYear()
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleAddressClick = () => {
    window.open('https://www.google.com/maps/search/M\'Badon+Avenue+Jean+Malan+Cocody+Riviera', '_blank')
  }

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const formData = new FormData()
      formData.append("EMAIL", email)
      formData.append("u", "564210c912175ad3e644784c4")
      formData.append("id", "a26ea5c286")
      formData.append("f_id", "002ea8e4f0")

      const response = await fetch("https://gmail.us7.list-manage.com/subscribe/post?u=564210c912175ad3e644784c4&id=a26ea5c286&f_id=002ea8e4f0", {
        method: "POST",
        mode: "no-cors",
        body: formData,
      })

      setIsSubmitted(true)
      setEmail("")
      
      // Réinitialiser le message après 3 secondes
      setTimeout(() => {
        setIsSubmitted(false)
      }, 3000)
    } catch (error) {
      // En mode no-cors, on ne peut pas détecter les erreurs, mais on assume que ça fonctionne
      setIsSubmitted(true)
      setEmail("")
      setTimeout(() => {
        setIsSubmitted(false)
      }, 3000)
    } finally {
      setIsSubmitting(false)
    }
  }


  return (
    <footer className="bg-[#073E5D] text-white w-full">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-8 sm:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 xl:gap-20 max-w-7xl mx-auto">
          {/* Coordonnées */}
          <div>
            <h3 className="text-sm sm:text-base sm:text-lg font-semibold mb-4 text-white">Coordonnées</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-center">
                <a href="https://wa.me/2250546006393" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-[#80C342] transition-colors">
                  <WhatsAppIcon size={18} className="mr-2 text-green-400" />
                  <span className="text-gray-300">+2250546006393</span>
                </a>
              </li>
              <li className="flex items-center">
                <button 
                  onClick={() => {
                    const url = 'https://mail.google.com/mail/?view=cm&fs=1&to=hello@ycubeac.com';
                    window.open(url, '_blank');
                  }}
                  className="flex items-center text-gray-300 hover:text-[#80C342] transition-colors cursor-pointer"
                >
                  <EmailIcon size={18} className="mr-2 text-green-400" />
                  <span className="break-all">hello@ycubeac.com</span>
                </button>
              </li>
              <li className="flex items-center">
                <span onClick={handleAddressClick} className="flex items-center text-gray-300 hover:text-[#80C342] transition-colors cursor-pointer">
                  <LocationIcon size={18} className="mr-2 text-green-400" />
                  <span className="text-gray-300">Cocody, Riviera</span>
                </span>
              </li>
              {/*<li className="flex items-center">
                <Clock size={18} className="mr-2 text-[#80C342]" />
                <span className="text-gray-300">Lun - Ven: 8h - 18h</span>
              </li> */}
              
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm sm:text-base sm:text-lg font-semibold mb-4 text-white">Newsletter</h3>
            <p className="text-gray-300 mb-4 text-xs sm:text-sm sm:text-base">
              Inscrivez-vous à notre newsletter pour recevoir nos actualités et conseils.
            </p>
            <div className="max-w-sm">
              {isSubmitted ? (
                <div className="bg-green-500/20 border border-green-500/50 rounded-md p-3 flex items-center gap-2">
                  <CheckCircle className="text-green-400" size={20} />
                  <p className="text-green-300 text-sm">Merci pour votre inscription !</p>
                </div>
              ) : (
                <form
                  onSubmit={handleNewsletterSubmit}
                  className="space-y-2"
                >
                  <div>
                    <input
                      type="email"
                      name="EMAIL"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="Votre email"
                      className="w-full px-2 py-1.5 sm:px-3 bg-[#0A4E73] border border-[#1A6A95] rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#80C342] text-xs sm:text-sm sm:text-base"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#80C342] hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed text-white py-1.5 px-2 sm:px-4 rounded-md transition-colors text-xs sm:text-sm sm:text-base"
                  >
                    {isSubmitting ? "Inscription..." : "S'abonner"}
                  </button>
                </form>
              )}
            </div>
            <div className="mt-6">
              <a 
                href="https://www.linkedin.com/company/y3-audit-conseils/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-[#80C342] transition-colors" 
                aria-label="LinkedIn"
              >
                <LinkedInLogo size={26} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
