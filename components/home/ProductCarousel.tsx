"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, ChevronRight } from "lucide-react"
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/motion"

const featured = [
  {
    num: "01",
    name: "GLYGAM-EL 1000",
    category: "Cardio-Diabetic",
    snippet: "Triple-action diabetic heart care — controls blood sugar, reduces cardiovascular risk and HbA1c simultaneously.",
    composition: "Metformin 1000mg + Empagliflozin 25mg + Linagliptin 5mg",
    accent: "#E05252",
  },
  {
    num: "02",
    name: "GAMZOLE-D SR",
    category: "Gastroenterology & Hepatology",
    snippet: "Sustained-release anti-reflux formula providing 24-hour relief from GERD, acidity, and bloating.",
    composition: "Rabeprazole 20mg + Domperidone 30mg (SR)",
    accent: "#C8922A",
  },
  {
    num: "03",
    name: "LEVOGAM-M",
    category: "Respiratory & Immunology",
    snippet: "Dual-action allergy and asthma control — blocks histamine and leukotriene receptors for lasting relief.",
    composition: "Levocetirizine 5mg + Montelukast 10mg",
    accent: "#0D9488",
  },
]

export default function ProductCarousel() {
  return (
    <section className="py-28 bg-[#F4F8FD] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12"
        >
          <div>
            <motion.span
              variants={fadeUp}
              className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#1A6FBF] flex items-center gap-2.5 mb-3"
            >
              <span className="h-px w-5 bg-[#1A6FBF] inline-block" />
              Featured Formulations
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-[2.6rem] font-bold text-[#0D1B2A] leading-tight"
              style={{ fontFamily: "var(--font-sora)" }}
            >
              Trusted, High-Demand<br className="hidden md:block" /> Products
            </motion.h2>
          </div>
          <motion.p variants={fadeUp} className="text-[#64748B] text-sm max-w-xs md:text-right leading-relaxed">
            A glimpse into our pharmaceutical portfolio.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12"
        >
          {featured.map((product) => (
            <motion.div
              key={product.name}
              variants={fadeUp}
              whileHover={{ y: -6, boxShadow: "0 20px 50px rgba(13,27,42,0.14)" }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="group relative rounded-2xl border border-[#E2EAF4] bg-white p-6 flex flex-col overflow-hidden transition-shadow duration-300"
              style={{ boxShadow: "0 2px 12px rgba(13,27,42,0.07)" }}
            >
              {/* Accent top edge */}
              <div
                className="absolute top-0 left-0 right-0 h-[3px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-400 ease-out"
                style={{ backgroundColor: product.accent }}
              />

              {/* Top row: number + category tag */}
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-[#0D1B2A]/15 text-xs tracking-[0.2em]">{product.num}</span>
                <span
                  className="text-[11px] font-semibold px-2.5 py-1 rounded-full"
                  style={{ color: product.accent, backgroundColor: `${product.accent}14` }}
                >
                  {product.category}
                </span>
              </div>

              {/* Product name */}
              <Link href="/products">
                <h3
                  className="text-xl font-bold text-[#0D1B2A] hover:text-[#1A6FBF] transition-colors duration-150 mb-1.5 leading-snug cursor-pointer"
                  style={{ fontFamily: "var(--font-sora)" }}
                >
                  {product.name}
                </h3>
              </Link>

              {/* Composition */}
              <p className="text-[11px] font-mono text-[#64748B] mb-4 tracking-wide">{product.composition}</p>

              {/* Accent divider */}
              <div
                className="h-px w-8 mb-4 rounded-full transition-all duration-400 group-hover:w-16"
                style={{ backgroundColor: product.accent, opacity: 0.4 }}
              />

              {/* Description */}
              <p className="text-sm text-[#64748B] leading-relaxed flex-1">{product.snippet}</p>

              {/* Footer */}
              <div className="mt-6 pt-5 border-t border-[#E2EAF4] flex items-center justify-between">
                <Link
                  href="/products"
                  className="text-xs font-semibold text-[#64748B] hover:text-[#1A6FBF] transition-colors flex items-center gap-1"
                >
                  View Details
                  <ChevronRight size={12} />
                </Link>
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: product.accent, opacity: 0.45 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View all CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col items-center gap-5"
        >
          <p className="text-[#64748B] text-sm">Looking for our complete medical portfolio?</p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0D1B2A] hover:bg-[#1A2E40] text-white font-semibold text-sm transition-colors duration-200"
          >
            View All Medicines
            <ArrowRight size={15} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
