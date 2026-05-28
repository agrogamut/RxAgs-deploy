"use client"

import { motion } from "framer-motion"
import Hero from "@/components/home/Hero"
import AboutSection from "@/components/home/AboutSection"
import PortfolioOfCare from "@/components/home/PortfolioOfCare"
import ProductCarousel from "@/components/home/ProductCarousel"
import ContactSection from "@/components/home/ContactSection"

export default function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <Hero />
      <AboutSection />
      <PortfolioOfCare />
      <ProductCarousel />
      <ContactSection />
    </motion.div>
  )
}
