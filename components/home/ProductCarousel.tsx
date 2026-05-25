"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/motion"
import SectionHeader from "@/components/shared/SectionHeader"

const featured = [
  {
    name: "Agtor-F",
    category: "Cardiovascular",
    snippet: "Advanced lipid-lowering management to protect cardiovascular health.",
    composition: "Atorvastatin + Fenofibrate",
    color: "bg-blue-50 text-blue-700 border-blue-200",
  },
  {
    name: "Rx-Mox CV 625",
    category: "Anti-Infective",
    snippet: "High-efficacy broad-spectrum antibiotic for stubborn bacterial infections.",
    composition: "Amoxicillin + Clavulanic Acid",
    color: "bg-indigo-50 text-indigo-700 border-indigo-200",
  },
  {
    name: "Agup-D",
    category: "Gastroenterology",
    snippet: "Fast-acting relief from acidity, GERD, and peptic ulcers.",
    composition: "Pantoprazole + Domperidone",
    color: "bg-amber-50 text-amber-700 border-amber-200",
  },
]

export default function ProductCarousel() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          title="Featured Formulations"
          subtitle="A glimpse into our trusted, high-demand medical portfolio."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
        >
          {featured.map((product) => (
            <motion.div
              key={product.name}
              variants={fadeUp}
              whileHover={{ y: -5, boxShadow: "0 12px 32px rgba(26,111,191,0.10)" }}
              transition={{ type: "spring", stiffness: 280, damping: 22 }}
            >
              <Card className="h-full border border-brand-border shadow-none bg-white">
                <CardContent className="p-6 flex flex-col h-full">
                  <Badge
                    variant="outline"
                    className={`w-fit text-xs mb-4 ${product.color}`}
                  >
                    {product.category}
                  </Badge>
                  <h3 className="text-xl font-bold text-[#0D1B2A] mb-1">{product.name}</h3>
                  <p className="text-xs text-muted-foreground mb-3">{product.composition}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {product.snippet}
                  </p>
                  <Link
                    href="/products"
                    className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-[#0D4F8C] transition-colors"
                  >
                    View Composition <ChevronRight size={14} />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* View more CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center"
        >
          <p className="text-muted-foreground text-sm mb-4">
            Looking for our complete medical portfolio?
          </p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#0D1B2A] hover:bg-[#1A2E40] text-white font-semibold text-sm transition-colors duration-200"
          >
            View Full Product Catalogue & Compositions
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
