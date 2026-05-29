"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { staggerFast, fadeUp, fadeIn } from "@/lib/motion"
import { ArrowRight, Users } from "lucide-react"

const slides = [
  {
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600&q=80",
    alt: "Medical laboratory",
  },
  {
    img: "https://images.unsplash.com/photo-1624421514201-db391243ed51?w=1600&q=80",
    alt: "Abstract light patterns",
  },
  {
    img: "https://images.unsplash.com/photo-1643780668909-580822430155?w=1600&q=80",
    alt: "Abstract blue and purple structure",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1668487827156-7aa259d7ffa3?w=1600&q=80",
    alt: "Laboratory test tubes",
  },
  {
    img: "https://images.unsplash.com/photo-1732900293895-233f769299b3?w=1600&q=80",
    alt: "Metabolic wellness and fitness",
    position: "center 65%",
  },
]

const SLIDE_MS = 5500
const TOTAL = slides.length

const headline = "Advancing Health,\nEnriching Lives."

const stats = [
  { value: "56+", label: "Formulations" },
  { value: "9",   label: "Specialties" },
  { value: "GMP", label: "Certified" },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | undefined>(undefined)

  useEffect(() => {
    timerRef.current = setInterval(() => setCurrent(c => (c + 1) % TOTAL), SLIDE_MS)
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [])

  const go = useCallback((i: number) => {
    setCurrent(i)
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => setCurrent(c => (c + 1) % TOTAL), SLIDE_MS)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background carousel — dark base prevents flash between slides */}
      <div className="absolute inset-0 bg-[#060e18]">
        <AnimatePresence mode="sync" initial={false}>
          <motion.div
            key={current}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Image
              src={slides[current].img}
              alt={slides[current].alt}
              fill
              className="object-cover object-center"
              style={{ objectPosition: slides[current].position ?? "center" }}
              sizes="100vw"
              loading="eager"
              priority={current === 0}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0D1B2A]/92 via-[#0D1B2A]/78 to-[#1A6FBF]/48" />

      {/* Atmospheric radial glow */}
      <div
        className="absolute -left-20 top-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(26,111,191,0.12) 0%, transparent 65%)" }}
      />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-20 w-full">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 lg:gap-6">

          {/* Left: main copy */}
          <div className="max-w-2xl">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.1 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="h-px w-8 bg-[#1A6FBF]" />
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white/55">
                Pharmaceutical Excellence
              </span>
            </motion.div>

            <motion.h1
              variants={staggerFast}
              initial="hidden"
              animate="visible"
              className="font-bold text-white leading-[1.04] tracking-tight mb-8"
              style={{
                fontFamily: "var(--font-sora)",
                fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
              }}
            >
              {headline.split("\n").map((line, li) => (
                <span key={li} className="block">
                  {line.split(" ").map((word, wi) => (
                    <motion.span key={wi} variants={fadeUp} className="inline-block mr-[0.22em]">
                      {word}
                    </motion.span>
                  ))}
                </span>
              ))}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.55 }}
              className="text-base md:text-lg text-white/60 leading-relaxed max-w-md mb-10"
            >
              Blending scientific excellence with a deep commitment to care —
              delivering high-quality, affordable healthcare solutions globally.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-3"
            >
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1A6FBF] hover:bg-[#1580d4] text-white font-semibold text-sm transition-all duration-200"
                style={{ boxShadow: "0 4px 24px rgba(26,111,191,0.40)" }}
              >
                Explore Our Portfolio
                <ArrowRight size={15} />
              </Link>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 hover:border-white/45 bg-white/[0.07] hover:bg-white/[0.13] text-white font-semibold text-sm transition-all duration-200 backdrop-blur-sm"
              >
                <Users size={15} />
                Partner With Us
              </a>
            </motion.div>
          </div>

          {/* Right: floating stat cards */}
          <motion.div
            variants={staggerFast}
            initial="hidden"
            animate="visible"
            className="flex flex-row lg:flex-col gap-3 shrink-0"
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                variants={fadeUp}
                transition={{ delay: 0.8 + i * 0.1 }}
                className="flex-1 lg:flex-none px-5 py-4 rounded-2xl border border-white/[0.10] bg-white/[0.06] backdrop-blur-md min-w-[90px] lg:min-w-[120px]"
              >
                <p
                  className="text-[1.75rem] lg:text-[2rem] font-bold text-white leading-none mb-1"
                  style={{ fontFamily: "var(--font-sora)" }}
                >
                  {s.value}
                </p>
                <p className="text-[11px] text-white/45 tracking-wide">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Slide indicators */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2"
      >
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="rounded-full transition-all duration-300"
            style={{
              width:           i === current ? "24px" : "6px",
              height:          "6px",
              backgroundColor: i === current ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.30)",
            }}
          />
        ))}
      </motion.div>
    </section>
  )
}
