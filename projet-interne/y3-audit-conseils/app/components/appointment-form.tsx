"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Check, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

interface AppointmentFormProps {
  selectedDate: Date | undefined
  selectedTime: string | undefined
}

export function AppointmentForm({ selectedDate, selectedTime }: AppointmentFormProps) {
  const router = useRouter()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.firstName.trim() || !formData.lastName.trim()) {
      newErrors.name = "Le prénom et le nom sont requis"
    }

    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Format d'email invalide"
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Le téléphone est requis"
    }

    if (!formData.subject) {
      newErrors.subject = "Le service est requis"
    }

    if (!selectedDate) {
      newErrors.date = "Veuillez sélectionner une date"
    }

    if (!selectedTime) {
      newErrors.time = "Veuillez sélectionner une heure"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      const formattedDate = selectedDate
        ? selectedDate.toLocaleDateString("fr-FR", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })
        : ""

      const emailBody = `Bonjour,

Je souhaite prendre rendez-vous avec vous.

Informations de contact :
- Nom complet : ${formData.firstName} ${formData.lastName}
- Email : ${formData.email}
- Téléphone : ${formData.phone}
${formData.company ? `- Entreprise : ${formData.company}` : ""}

Détails du rendez-vous :
- Service demandé : ${formData.subject}
- Date souhaitée : ${formattedDate}
- Heure souhaitée : ${selectedTime}

${formData.message ? `Message :\n${formData.message}` : ""}

Cordialement,
${formData.firstName} ${formData.lastName}`

      // ✅ Envoi du mail au backend
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: "hello@ycubeac.com", // destinataire final
          subject: `Demande de rendez-vous - ${formData.subject}`,
          text: emailBody,
          html: emailBody.replace(/\n/g, "<br>"),
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setTimeout(() => {
          router.push("/contact/rendez-vous/confirmation")
        }, 2000)
      } else {
        const errorData = await response.json()
        alert(`Erreur : ${errorData.error || "Impossible d'envoyer l'email. Veuillez réessayer."}`)
        setIsSubmitting(false)
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'email :", error)
      alert("Erreur réseau. Veuillez vérifier votre connexion et réessayer.")
      setIsSubmitting(false)
    }
  }

  const subjects = [
    { value: "", label: "Sélectionnez un service" },
    { value: "expertise comptable", label: "Expertise comptable" },
    { value: "audit", label: "Audit" },
    { value: "conseil financier", label: "Conseil financier" },
    { value: "conseil opérationnel", label: "Conseil opérationnel" },
    { value: "autre", label: "Autre" },
  ]

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center py-8">
        <div className="rounded-full bg-green-100 p-3 mb-4">
          <Check className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-xl font-semibold text-[#073E5D] mb-2">Rendez-vous demandé</h3>
        <p className="text-gray-600 text-center">
          Votre demande de rendez-vous a été envoyée avec succès. Vous allez être redirigé...
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {(!selectedDate || !selectedTime) && (
        <div className="bg-amber-50 border border-amber-200 rounded-md p-3 mb-4">
          <p className="text-amber-800 text-base">
            {!selectedDate
              ? "Veuillez sélectionner une date pour votre rendez-vous."
              : "Veuillez sélectionner une heure pour votre rendez-vous."}
          </p>
        </div>
      )}

      {selectedDate && selectedTime && (
        <div className="bg-green-50 border border-green-200 rounded-md p-3 mb-4">
          <p className="text-green-800 text-base">
            Rendez-vous prévu le{" "}
            {selectedDate.toLocaleDateString("fr-FR", {
              weekday: "long",
              day: "numeric",
              month: "long",
              year: "numeric",
            })}{" "}
            à {selectedTime}
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 xs:gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm xs:text-base font-medium text-gray-700 mb-1">
            Prénom *
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            autoComplete="given-name"
            className={cn(
              "w-full px-3 xs:px-4 py-2.5 xs:py-3 text-sm xs:text-base border rounded-md focus:outline-none focus:ring-2 focus:ring-[#80C342]",
              errors.name ? "border-red-500" : "border-gray-300"
            )}
          />
          {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="lastName" className="block text-sm xs:text-base font-medium text-gray-700 mb-1">
            Nom *
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            autoComplete="family-name"
            className={cn(
              "w-full px-3 xs:px-4 py-2.5 xs:py-3 text-sm xs:text-base border rounded-md focus:outline-none focus:ring-2 focus:ring-[#80C342]",
              errors.name ? "border-red-500" : "border-gray-300"
            )}
          />
          {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 xs:gap-4">
        <div>
          <label htmlFor="email" className="block text-sm xs:text-base font-medium text-gray-700 mb-1">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
            className={cn(
              "w-full px-3 xs:px-4 py-2.5 xs:py-3 text-sm xs:text-base border rounded-md focus:outline-none focus:ring-2 focus:ring-[#80C342]",
              errors.email ? "border-red-500" : "border-gray-300"
            )}
          />
          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm xs:text-base font-medium text-gray-700 mb-1">
            Téléphone *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            autoComplete="tel"
            className={cn(
              "w-full px-3 xs:px-4 py-2.5 xs:py-3 text-sm xs:text-base border rounded-md focus:outline-none focus:ring-2 focus:ring-[#80C342]",
              errors.phone ? "border-red-500" : "border-gray-300"
            )}
          />
          {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="company" className="block text-sm xs:text-base font-medium text-gray-700 mb-1">
          Entreprise
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          autoComplete="organization"
          className="w-full px-3 xs:px-4 py-2.5 xs:py-3 text-sm xs:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#80C342]"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm xs:text-base font-medium text-gray-700 mb-1">
          Service demandé *
        </label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className={cn(
            "w-full px-3 xs:px-4 py-2.5 xs:py-3 text-sm xs:text-base border rounded-md focus:outline-none focus:ring-2 focus:ring-[#80C342]",
            errors.subject ? "border-red-500" : "border-gray-300"
          )}
        >
          {subjects.map((s) => (
            <option key={s.value} value={s.value}>
              {s.label}
            </option>
          ))}
        </select>
        {errors.subject && <p className="mt-1 text-sm text-red-500">{errors.subject}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm xs:text-base font-medium text-gray-700 mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-3 xs:px-4 py-2.5 xs:py-3 text-sm xs:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#80C342]"
        />
      </div>

      <button
        type="submit"
        disabled={true}
        className="w-full inline-flex items-center justify-center rounded-md bg-gray-300 px-4 xs:px-5 py-2.5 xs:py-3 text-sm xs:text-base sm:text-lg text-gray-600 font-semibold cursor-not-allowed focus:outline-none"
      >
        Prendre rendez-vous
      </button>
    </form>
  )
}
