"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Clock } from "lucide-react"
import { cn } from "@/lib/utils"

interface CalendarProps {
  selectedDate: Date | undefined
  onDateChange: (date: Date) => void
  selectedTime: string | undefined
  onTimeChange: (time: string) => void
}

export function Calendar({ selectedDate, onDateChange, selectedTime, onTimeChange }: CalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [viewMode, setViewMode] = useState<"date" | "time">("date")

  // Get available time slots based on selected date
  const getAvailableTimeSlots = (date: Date) => {
    const dayOfWeek = date.getDay() // 0 = Sunday, 1 = Monday, etc.
    
    // Mardi (2) : 9H, 11H
    if (dayOfWeek === 2) {
      return ["09:00", "11:00"]
    }
    
    // Mercredi (3) : 10H, 12H
    if (dayOfWeek === 3) {
      return ["10:00", "12:00"]
    }
    
    // Jeudi (4) : 9H, 11H
    if (dayOfWeek === 4) {
      return ["09:00", "11:00"]
    }
    
    // Autres jours : pas de créneaux disponibles
    return []
  }

  // Get time slots for selected date
  const availableTimeSlots = selectedDate ? getAvailableTimeSlots(selectedDate) : []

  // Get days in month
  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate()
  }

  // Get day of week for first day of month (0 = Sunday, 1 = Monday, etc.)
  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay()
  }

  const year = currentMonth.getFullYear()
  const month = currentMonth.getMonth()
  const daysInMonth = getDaysInMonth(year, month)
  const firstDayOfMonth = getFirstDayOfMonth(year, month)

  // Adjust for Monday as first day of week
  const firstDayAdjusted = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1

  const monthNames = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ]

  const dayNames = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"]

  const prevMonth = () => {
    setCurrentMonth(new Date(year, month - 1, 1))
  }

  const nextMonth = () => {
    setCurrentMonth(new Date(year, month + 1, 1))
  }

  const handleDateClick = (day: number) => {
    const newDate = new Date(year, month, day)
    const dayOfWeek = newDate.getDay()
    
    // Only allow selecting Tuesday (2), Wednesday (3), Thursday (4)
    const isAllowedDay = dayOfWeek === 2 || dayOfWeek === 3 || dayOfWeek === 4
    
    // Don't allow selecting dates in the past
    const isNotPast = newDate >= new Date(new Date().setHours(0, 0, 0, 0))
    
    if (isNotPast && isAllowedDay) {
      onDateChange(newDate)
      // Automatically switch to time selection after date is selected
      setViewMode("time")
    }
  }

  const isToday = (day: number) => {
    const today = new Date()
    return day === today.getDate() && month === today.getMonth() && year === today.getFullYear()
  }

  const isPast = (day: number) => {
    const today = new Date()
    const checkDate = new Date(year, month, day)
    return checkDate < new Date(today.getFullYear(), today.getMonth(), today.getDate())
  }

  const isSelected = (day: number) => {
    return selectedDate?.getDate() === day && selectedDate?.getMonth() === month && selectedDate?.getFullYear() === year
  }

  // Check if a day has available appointments
  const hasAvailableSlots = (day: number) => {
    const date = new Date(year, month, day)
    const dayOfWeek = date.getDay()
    return dayOfWeek === 2 || dayOfWeek === 3 || dayOfWeek === 4 // Mardi, Mercredi, Jeudi
  }

  // Generate calendar days
  const calendarDays = []
  for (let i = 0; i < firstDayAdjusted; i++) {
    calendarDays.push(<div key={`empty-${i}`} className="h-10"></div>)
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const isPastDay = isPast(day)
    const dayOfWeek = new Date(year, month, day).getDay()
    const isAllowedDay = dayOfWeek === 2 || dayOfWeek === 3 || dayOfWeek === 4
    const isDisabled = isPastDay || !isAllowedDay
    
    calendarDays.push(
      <button
        key={day}
        onClick={() => handleDateClick(day)}
        disabled={isDisabled}
        className={cn(
          "h-10 w-10 rounded-full flex items-center justify-center text-sm transition-colors relative",
          isToday(day) && !isSelected(day) && "border border-[#80C342]",
          isSelected(day) && "bg-[#80C342] text-white",
          isDisabled ? "text-gray-300 cursor-not-allowed" : "hover:bg-gray-100",
          hasAvailableSlots(day) && !isPastDay && !isSelected(day) && "bg-green-50 border border-green-200",
        )}
      >
        {day}
      </button>,
    )
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("fr-FR", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    })
  }

  return (
    <div className="space-y-6">
      {/* Information about available days */}
      <div className="bg-blue-50 border border-blue-200 rounded-md p-3 mb-4">
        <p className="text-blue-800 text-sm">
          <strong>Rendez-vous disponibles :</strong> Mardi (9H, 11H), Mercredi (10H, 12H), Jeudi (9H, 11H)
        </p>
      </div>
      
      {/* Toggle between date and time selection */}
      {selectedDate && (
        <div className="flex space-x-2 mb-4">
          <button
            onClick={() => setViewMode("date")}
            className={cn(
              "flex-1 py-2 px-4 rounded-md font-medium transition-colors",
              viewMode === "date" ? "bg-[#073E5D] text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200",
            )}
          >
            Date
          </button>
          <button
            onClick={() => setViewMode("time")}
            className={cn(
              "flex-1 py-2 px-4 rounded-md font-medium transition-colors",
              viewMode === "time" ? "bg-[#073E5D] text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200",
            )}
            disabled={!selectedDate}
          >
            Heure
          </button>
        </div>
      )}

      {viewMode === "date" ? (
        <>
          <div className="flex justify-between items-center">
            <button
              onClick={prevMonth}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Mois précédent"
            >
              <ChevronLeft size={20} />
            </button>
            <h3 className="text-lg font-medium">
              {monthNames[month]} {year}
            </h3>
            <button
              onClick={nextMonth}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Mois suivant"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="grid grid-cols-7 gap-1">
            {dayNames.map((day) => (
              <div key={day} className="h-10 flex items-center justify-center text-sm font-medium text-gray-500">
                {day}
              </div>
            ))}
            {calendarDays}
          </div>

          {selectedDate && (
            <div className="mt-4 p-3 bg-blue-50 rounded-md">
              <p className="text-sm text-blue-800">
                Date sélectionnée: <strong>{formatDate(selectedDate)}</strong>
              </p>
              <p className="text-sm text-blue-600 mt-1">
                Cliquez sur "Heure" ci-dessus pour sélectionner un créneau horaire
              </p>
            </div>
          )}
        </>
      ) : (
        selectedDate && (
          <div className="mt-2">
            <div className="flex items-center mb-4 text-[#073E5D]">
              <Clock size={20} className="mr-2" />
              <h4 className="text-lg font-medium">Choisissez un horaire pour le {formatDate(selectedDate)}</h4>
            </div>

            {availableTimeSlots.length > 0 ? (
              <div>
                <h5 className="text-md font-medium text-gray-700 mb-2">Créneaux disponibles</h5>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {availableTimeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => onTimeChange(time)}
                      className={cn(
                        "py-2 px-3 border rounded-md text-sm transition-colors",
                        selectedTime === time
                          ? "bg-[#80C342] text-white border-[#80C342]"
                          : "hover:bg-gray-50 border-gray-300",
                      )}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500 mb-2">Aucun créneau disponible</p>
                <p className="text-sm text-gray-400">
                  Les rendez-vous sont disponibles uniquement le mardi, mercredi et jeudi.
                </p>
              </div>
            )}

            {selectedTime && (
              <div className="mt-4 p-3 bg-green-50 rounded-md">
                <p className="text-sm text-green-800">
                  Vous avez sélectionné le rendez-vous le <strong>{formatDate(selectedDate)}</strong> à{" "}
                  <strong>{selectedTime}</strong>
                </p>
              </div>
            )}
          </div>
        )
      )}
    </div>
  )
}
