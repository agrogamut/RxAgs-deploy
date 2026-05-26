"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion"

export default function CTABanner() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 animate-gradient"
        style={{
          background: "linear-gradient(135deg, #0D1B2A 0%, #0D4F8C 50%, #0D1B2A 100%)",
        }}
      />
      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.span
            variants={fadeUp}
            className="text-xs font-semibold tracking-widest uppercase text-white/50 block mb-4"
          >
            Let&apos;s Collaborate
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-5xl font-bold text-white leading-tight mb-5 max-w-3xl mx-auto"
          >
            Partnering for a Healthier Tomorrow.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-base md:text-lg text-white/65 max-w-xl mx-auto mb-10 leading-relaxed"
          >
            Whether you are a healthcare professional, a distribution partner, or a global
            supplier, let&apos;s collaborate to make quality healthcare accessible to everyone,
            everywhere.
          </motion.p>
          <motion.div variants={fadeUp}>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-[#1A6FBF] hover:bg-white hover:text-[#0D1B2A] text-white font-semibold text-sm transition-all duration-200"
            >
              Get in Touch
              <ArrowRight size={16} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
