import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Providers } from "./components/providers"
import { Footer } from "./components/footer"
import { SliderProvider } from "./components/slider-context"
import { ScrollToTop } from "./components/scroll-to-top"
import { BrowserCheck } from "./components/browser-check"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Y3 Audit & Conseils",
  description: "Cabinet d'expertise comptable et de conseil",
  icons: {
    icon: "/Logo-y3.png",
    shortcut: "/Logo-y3.png",
    apple: "/Logo-y3.png",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning data-scroll-behavior="smooth" className="overflow-x-hidden">
      <body className={`min-h-screen bg-white antialiased flex flex-col overflow-x-hidden max-w-full ${inter.className}`}>
        <SliderProvider>
          <Providers>
            {children}
            <Footer />
            <ScrollToTop />
            <BrowserCheck />
          </Providers>
        </SliderProvider>
      </body>
    </html>
  )
}
