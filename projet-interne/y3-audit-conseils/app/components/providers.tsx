"use client"

import dynamic from "next/dynamic"
import type { ReactNode } from "react"

const ThemeProvider = dynamic(
  () => import("@/components/theme-provider").then((mod) => mod.ThemeProvider),
  {
    ssr: false,
    loading: () => <div className="min-h-screen" />
  }
)

const Header = dynamic(
  () => import("./header").then((mod) => mod.Header),
  {
    ssr: false,
    loading: () => <div className="h-[110px]" />
  }
)

interface ProvidersProps {
  children: ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <Header />
      <div className="w-full overflow-x-hidden">{children}</div>
    </ThemeProvider>
  )
} 