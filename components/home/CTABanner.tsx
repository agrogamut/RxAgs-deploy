"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion"

export default function CTABanner() {
  return (
    <section className="relative py-28 overflow-hidden bg-[#0A1520]">
      {/* Deep navy background with subtle gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #0A1520 0%, #0D2540 55%, #0A1520 100%)",
        }}
      />

      {/* Faint dot grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-center">

          {/* Left: copy */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.span
              variants={fadeUp}
              className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white/35 block mb-5 flex items-center gap-2.5"
            >
              <span className="h-px w-5 bg-[#1A6FBF] inline-block" />
              Let&apos;s Collaborate
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white leading-[1.1] mb-6 max-w-2xl"
              style={{ fontFamily: "var(--font-sora)" }}
            >
              Partnering for a<br />Healthier Tomorrow.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-base text-white/50 max-w-md mb-10 leading-relaxed"
            >
              Whether you are a healthcare professional, a distribution partner, or a global
              supplier — let&apos;s collaborate to make quality healthcare accessible to everyone,
              everywhere.
            </motion.p>

            <motion.div variants={fadeUp}>
              <a
                href="/#contact"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-[#0D1B2A] font-bold text-sm hover:bg-[#F4F8FD] transition-all duration-200"
                style={{ boxShadow: "0 4px 20px rgba(255,255,255,0.12)" }}
              >
                Get in Touch
                <ArrowRight size={15} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right: decorative watermark */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 1.2 }}
            className="hidden lg:flex items-center justify-center shrink-0 relative"
          >
            <span
              className="font-bold leading-none select-none pointer-events-none"
              style={{
                fontFamily: "var(--font-sora)",
                fontSize: "clamp(100px, 14vw, 176px)",
                color: "rgba(255,255,255,0.04)",
                letterSpacing: "-0.04em",
              }}
            >
              Rx
            </span>
            {/* Concentric rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-36 h-36 rounded-full border border-white/[0.05]" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-52 h-52 rounded-full border border-white/[0.03]" />
            </div>
            {/* Blue accent dot */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#1A6FBF] opacity-40" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
