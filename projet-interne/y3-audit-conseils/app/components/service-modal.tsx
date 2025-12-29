"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"

interface ServiceModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  icon: React.ReactNode
  content: React.ReactNode
}

export function ServiceModal({ isOpen, onClose, title, icon, content }: ServiceModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-lg shadow-2xl max-w-6xl w-full mx-2 xs:mx-3 sm:mx-4 max-h-[95vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-3 xs:p-4 sm:p-6 rounded-t-lg">
          <div className="flex items-center justify-between gap-2 xs:gap-3">
            <div className="flex items-center space-x-2 xs:space-x-3 sm:space-x-4 min-w-0 flex-1">
              <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl font-bold text-[#073E5D] truncate">{title}</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
            >
              <X size={24} className="text-gray-500" />
            </button>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-3 xs:p-4 sm:p-6">
          {content}
        </div>
        
        {/* Footer */}
        <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 p-3 xs:p-4 sm:p-6 rounded-b-lg">
          <div className="flex flex-col xs:flex-row justify-center gap-2 xs:gap-3 sm:gap-4">
            {title.toUpperCase() === "SÉCURISEZ VOTRE CROISSANCE ET INSPIREZ CONFIANCE" ? (
              <button 
                onClick={() => {
                  const subject = encodeURIComponent('diagnostic préliminaire audit');
                  const url = `https://mail.google.com/mail/?view=cm&fs=1&to=hello@ycubeac.com&su=${subject}`;
                  window.open(url, '_blank');
                }}
                className="bg-[#80C342] hover:bg-[#073E5D] text-white font-semibold py-2 xs:py-2.5 sm:py-3 px-4 xs:px-5 sm:px-6 rounded-lg transition-colors duration-300 text-xs xs:text-sm sm:text-base text-center"
              >
                <span className="hidden sm:inline">Contactez-nous pour un diagnostic gratuit</span>
                <span className="sm:hidden">Diagnostic gratuit</span>
              </button>
            ) : title.toUpperCase() === "ACCÉLÉREZ VOTRE CROISSANCE, SÉCURISEZ VOS TRANSACTIONS" ? (
              <button 
                onClick={() => {
                  const subject = encodeURIComponent('évaluation préliminaire Conseil Financier');
                  const url = `https://mail.google.com/mail/?view=cm&fs=1&to=hello@ycubeac.com&su=${subject}`;
                  window.open(url, '_blank');
                }}
                className="bg-[#80C342] hover:bg-[#073E5D] text-white font-semibold py-2 xs:py-2.5 sm:py-3 px-4 xs:px-5 sm:px-6 rounded-lg transition-colors duration-300 text-xs xs:text-sm sm:text-base text-center"
              >
                <span className="hidden sm:inline">Contactez-nous pour une première évaluation</span>
                <span className="sm:hidden">Première évaluation</span>
              </button>
            ) : title.toUpperCase() === "OPTIMISEZ, DIGITALISEZ, ACCÉLÉREZ" ? (
              <button 
                onClick={() => {
                  const subject = encodeURIComponent('diagnostic de performance');
                  const url = `https://mail.google.com/mail/?view=cm&fs=1&to=hello@ycubeac.com&su=${subject}`;
                  window.open(url, '_blank');
                }}
                className="bg-[#80C342] hover:bg-[#073E5D] text-white font-semibold py-2 xs:py-2.5 sm:py-3 px-4 xs:px-5 sm:px-6 rounded-lg transition-colors duration-300 text-xs xs:text-sm sm:text-base text-center"
              >
                <span className="hidden sm:inline">Contactez-nous pour un diagnostic de performance</span>
                <span className="sm:hidden">Diagnostic performance</span>
              </button>
            ) : title.toUpperCase() === "CONFORMITÉ, PILOTAGE STRATÉGIQUE" ? (
              <button 
                onClick={() => {
                  const subject = encodeURIComponent('consultation pour des services d\'Expertise Comptable');
                  const url = `https://mail.google.com/mail/?view=cm&fs=1&to=hello@ycubeac.com&su=${subject}`;
                  window.open(url, '_blank');
                }}
                className="bg-[#80C342] hover:bg-[#073E5D] text-white font-semibold py-2 xs:py-2.5 sm:py-3 px-4 xs:px-5 sm:px-6 rounded-lg transition-colors duration-300 text-xs xs:text-sm sm:text-base text-center"
              >
                <span className="hidden sm:inline">Demandez votre consultation gratuite</span>
                <span className="sm:hidden">Consultation gratuite</span>
              </button>
            ) : (
              <a 
                href={`mailto:hello@ycubeac.com?subject=Demande de ${title.toLowerCase()}`}
                className="bg-[#80C342] hover:bg-[#073E5D] text-white font-semibold py-2 xs:py-2.5 sm:py-3 px-4 xs:px-5 sm:px-6 rounded-lg transition-colors duration-300 text-xs xs:text-sm sm:text-base text-center"
              >
                Contactez-nous
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}



