import Link from "next/link"
import { FadeInWhenVisible } from "./animations"

export function MainServices() {
  const services = [
    {
      title: "Expertise Comptable",
      description:
        "Sécurisation de vos comptes.\nConformité aux obligations légales.",
      link: "/services/expertise-comptable",
    },
    {
      title: "Audit et Assurance",
      description:
        "Certification de vos comptes. \nSécurité maximale garantie.",
      link: "/services/audit",
    },
    {
      title: "Conseil Financier",
      description:
        "Optimisation de votre structure. \nGestion de vos investissements.",
      link: "/services/conseil-financier",
    },
    {
      title: "Conseil Opérationnel",
      description: "Notre expertise vous accompagne. \nAmélioration des processus.",
      link: "/services/conseil-en-gestion",
    },
  ]

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white w-full">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl">
        <FadeInWhenVisible>
          <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-12 pl-4 sm:pl-8 md:pl-12 lg:pl-16 xl:pl-20 2xl:pl-[11.75rem]">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#073E5D] mb-2 sm:mb-3 md:mb-4 break-words">
              <span className="text-[#073E5D]">Nos</span> métiers
            </h2>
            <div className="w-12 sm:w-16 md:w-20 lg:w-24 h-1 bg-[#80C342] mb-3 sm:mb-4 md:mb-5"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-4 sm:p-5 md:p-6 rounded-lg shadow-lg border border-gray-200 hover:border-[#80C342] transition-colors duration-300 flex flex-col h-auto min-h-[140px] sm:min-h-[160px]"
              >
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-[#073E5D] text-center mb-2 sm:mb-3">{service.title}</h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 text-center mb-2 sm:mb-3">
                  {service.description.split('\n').map((line, index) => (
                    <span key={index}>
                      {line}
                      {index < service.description.split('\n').length - 1 && <br />}
                    </span>
                  ))}
                </p>
                {/* <div className="text-center">
                  <Link
                    href={service.link}
                    className="inline-block text-[#073E5D] hover:text-[#80C342] font-medium transition-colors"
                  >
                    En savoir plus
                  </Link>
                </div> */}
              </div>
            ))}
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  )
}
