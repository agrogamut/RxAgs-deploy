import Hero from "@/components/home/Hero"
import AboutSection from "@/components/home/AboutSection"
import PortfolioOfCare from "@/components/home/PortfolioOfCare"
import ProductCarousel from "@/components/home/ProductCarousel"
import ContactSection from "@/components/home/ContactSection"

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <PortfolioOfCare />
      <ProductCarousel />
      <ContactSection />
    </>
  )
}
