"use client"

import { useEffect } from 'react'
import { useSlider } from '@/app/components/slider-context'

export function usePageImage(imagePath: string) {
  const { setCurrentImage } = useSlider()

  useEffect(() => {
    setCurrentImage(imagePath)
  }, [imagePath, setCurrentImage])
}




