"use client"

import dynamic from "next/dynamic"
import { usePageImage } from "./hooks/use-page-image"

// Import statique des composants moins lourds
import { CompanyHistory } from "./components/company-history"

// Import dynamique des composants plus lourds
const MainSlider = dynamic(() => import("./components/main-slider").then((mod) => mod.MainSlider), {
  loading: () => (
    <div className="w-full h-[500px] bg-gray-100 flex items-center justify-center">Chargement du slider...</div>
  ),
})

const MainServices = dynamic(() => import("./components/main-services").then((mod) => mod.MainServices), {
  loading: () => (
    <div className="w-full py-12 bg-gray-50 flex items-center justify-center">Chargement des services...</div>
  ),
})

export default function Home() {
  usePageImage('/Expert.jpg')
  
  return (
    <main className="w-full">
      <MainSlider />
      <CompanyHistory />
      <MainServices />
    </main>
  )
}
