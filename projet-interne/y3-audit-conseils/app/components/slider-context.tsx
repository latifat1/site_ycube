"use client"

import { createContext, useContext, useState, ReactNode } from 'react'

interface SliderContextType {
  currentImage: string
  setCurrentImage: (image: string) => void
}

const SliderContext = createContext<SliderContextType | undefined>(undefined)

export function SliderProvider({ children }: { children: ReactNode }) {
  const [currentImage, setCurrentImage] = useState('/Expert.jpg')

  return (
    <SliderContext.Provider value={{ currentImage, setCurrentImage }}>
      {children}
    </SliderContext.Provider>
  )
}

export function useSlider() {
  const context = useContext(SliderContext)
  if (context === undefined) {
    throw new Error('useSlider must be used within a SliderProvider')
  }
  return context
}


