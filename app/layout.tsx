import type { Metadata } from "next"
import { Sora, DM_Sans } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import BackToTopButton from "@/components/shared/BackToTopButton"

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
})

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "RxAgs — Advancing Health, Enriching Lives",
  description:
    "RxAgs is the premier pharmaceutical division of Agrogamut Services Pvt. Ltd., delivering high-quality, affordable healthcare solutions globally.",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${sora.variable} ${dmSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <BackToTopButton />
      </body>
    </html>
  )
}
