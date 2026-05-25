import Hero from "@/components/home/Hero"
import AboutSection from "@/components/home/AboutSection"
import TherapeuticAreas from "@/components/home/TherapeuticAreas"
import ProductCarousel from "@/components/home/ProductCarousel"
import CTABanner from "@/components/home/CTABanner"

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <TherapeuticAreas />
      <ProductCarousel />
      <CTABanner />
    </>
  )
}
