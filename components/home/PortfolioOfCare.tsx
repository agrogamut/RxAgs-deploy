"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion"

const areas = [
  {
    index: "01",
    name: "Cardio-Diabetic",
    eyebrow: "Heart & Metabolic Health",
    desc: "Comprehensive management of cardiovascular conditions and diabetes — from anti-hypertensives and statins to oral hypoglycaemics and insulin sensitisers. Supporting the most prevalent co-morbid disease burden in India.",
    img: "https://images.unsplash.com/photo-1682706841289-9d7ddf5eb999?w=1200&q=80",
    accent: "#E05252",
  },
  {
    index: "02",
    name: "General Division",
    eyebrow: "Primary Care",
    desc: "A broad-spectrum portfolio covering everyday infections, fever, cough, cold, and multi-vitamin deficiencies. Reliable first-line therapies for general practitioners and primary healthcare providers.",
    img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=1200&q=80",
    accent: "#1A6FBF",
  },
  {
    index: "03",
    name: "Respiratory & Immunology",
    eyebrow: "Breathing & Immune Health",
    desc: "Advanced therapies for asthma, COPD, allergic rhinitis, and immune modulation. Our portfolio spans bronchodilators, antihistamines, montelukast combinations, and immune-boosting formulations.",
    img: "https://images.unsplash.com/photo-1555708982-8645ec9ce3cc?w=1200&q=80",
    accent: "#0694A2",
  },
  {
    index: "04",
    name: "Gastroenterology & Hepatology",
    eyebrow: "Digestive & Liver Health",
    desc: "Restoring digestive balance and liver function with proven PPIs, prokinetics, hepatoprotectives, and antispasmodics. Targeted formulations for acid disorders, IBS, fatty liver, and hepatic support.",
    img: "https://plus.unsplash.com/premium_photo-1723108858066-66b1bd834675?w=1200&q=80",
    accent: "#C8922A",
  },
  {
    index: "05",
    name: "Ortho & Pain Management",
    eyebrow: "Bone, Joint & Pain Relief",
    desc: "Multi-modal pain management for acute, chronic, and musculoskeletal conditions. NSAIDs, calcium-vitamin D3 combinations, glucosamine formulations, and centrally-acting analgesics for comprehensive orthopaedic care.",
    img: "https://plus.unsplash.com/premium_photo-1661779204668-1453dc7435ae?w=1200&q=80",
    accent: "#9F5AE0",
  },
  {
    index: "06",
    name: "ED & Men's Health",
    eyebrow: "Men's Wellness",
    desc: "Specialised formulations addressing erectile dysfunction, testosterone support, and male reproductive health. Clinically validated molecules delivered with sensitivity and discretion for better patient outcomes.",
    img: "https://images.unsplash.com/photo-1625055929490-1ced51017e72?w=1200&q=80",
    accent: "#2563EB",
  },
  {
    index: "07",
    name: "Derma & Cosmetology",
    eyebrow: "Skin Health & Beauty",
    desc: "Therapeutic and cosmeceutical solutions for acne, pigmentation, fungal infections, and skin ageing. Retinoid combinations, antifungals, depigmenting agents, and moisturising formulations for complete dermatological care.",
    img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1200&q=80",
    accent: "#E05C94",
  },
  {
    index: "08",
    name: "Gynae & Obstetrics",
    eyebrow: "Women's Health",
    desc: "Dedicated support across the full reproductive lifecycle — from hormonal therapies and PCOS management to prenatal nutrition and menopausal care. Formulations designed with women's physiological needs at the forefront.",
    img: "https://images.unsplash.com/photo-1576671081837-49000212a370?w=1200&q=80",
    accent: "#D946A8",
  },
  {
    index: "09",
    name: "Metabolic Wellness & Fitness",
    eyebrow: "Preventive & Lifestyle Health",
    desc: "Science-backed nutraceuticals, vitamins, and metabolic modulators that bridge nutrition and medicine. Thyroid support, weight management, antioxidants, and energy-enhancing supplements for a proactive approach to health.",
    img: "https://images.unsplash.com/photo-1732900293895-233f769299b3?w=1200&q=80",
    accent: "#2F9E5E",
  },
]

const AUTOPLAY_MS = 3000

const ease = [0.25, 0.1, 0.25, 1] as [number, number, number, number]

const textItemVariants = {
  hidden:  { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0,  transition: { duration: 0.48, ease } },
  exit:    { opacity: 0, y: -10, transition: { duration: 0.22, ease } },
}

const textContainerVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.06 } },
  exit:    { transition: { staggerChildren: 0.04 } },
}

export default function PortfolioOfCare() {
  const [current, setCurrent] = useState(0)
  const [paused,  setPaused]  = useState(false)
  const timerRef  = useRef<ReturnType<typeof setInterval> | undefined>(undefined)

  const total = areas.length

  const go = useCallback((index: number) => {
    setCurrent(((index % total) + total) % total)
  }, [total])

  const prev = useCallback(() => setCurrent(c => ((c - 1) + total) % total), [total])
  const next = useCallback(() => setCurrent(c => (c + 1) % total), [total])

  // Auto-play — stable interval, functional update avoids stale closure
  useEffect(() => {
    if (paused) return
    timerRef.current = setInterval(() => setCurrent(c => (c + 1) % total), AUTOPLAY_MS)
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [paused, total])

  const area = areas[current]

  return (
    <section id="therapeutic" className="py-24 bg-[#040C15] relative overflow-hidden">
      {/* Atmospheric glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(26,111,191,0.06) 0%, transparent 65%)" }}
      />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10"
        >
          <div>
            <motion.span variants={fadeUp} className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#1A6FBF] flex items-center gap-2.5 mb-3">
              <span className="h-px w-5 bg-[#1A6FBF] inline-block" />
              What We Cater
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Our Portfolio of Care
            </motion.h2>
          </div>
          <motion.p variants={fadeUp} className="text-white/50 text-sm md:text-right whitespace-nowrap">
            Targeted solutions across nine major therapeutic specialties.
          </motion.p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="rounded-2xl overflow-hidden border border-white/[0.11]"
          style={{ boxShadow: "0 30px 70px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.04)" }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="flex flex-col lg:grid lg:grid-cols-[58%_42%]">

            {/* ── Image panel ── */}
            <div className="relative h-64 lg:h-[500px] overflow-hidden bg-[#060e18]">
              <AnimatePresence mode="sync" initial={false}>
                <motion.div
                  key={current}
                  className="absolute inset-0"
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.75, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <Image
                    src={area.img}
                    alt={area.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    loading="eager"
                  />
                  {/* Right-edge fade into text panel */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-[#0D1B2A]" />
                  {/* Bottom vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </motion.div>
              </AnimatePresence>

              {/* Slide counter */}
              <div className="absolute top-4 left-5 font-mono text-white/40 text-xs tracking-widest select-none z-10">
                {area.index} / {String(total).padStart(2, "0")}
              </div>

              {/* Accent bottom edge */}
              <motion.div
                key={`edge-${current}`}
                className="absolute bottom-0 left-0 h-[3px] z-10"
                style={{ backgroundColor: area.accent }}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
              />
            </div>

            {/* ── Text panel ── */}
            <div className="relative bg-[#0D1B2A] flex flex-col justify-between px-8 lg:px-10 py-8 lg:py-10 overflow-hidden">

              {/* Ghost number watermark */}
              <span
                aria-hidden
                className="absolute right-2 top-1 text-[clamp(100px,14vw,160px)] font-bold leading-none text-white select-none pointer-events-none"
                style={{
                  fontFamily: "var(--font-sora)",
                  opacity: 0.035,
                  userSelect: "none",
                }}
              >
                {area.index}
              </span>

              {/* Animated text content */}
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={current}
                  variants={textContainerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="relative z-10 flex-1 flex flex-col justify-center"
                >
                  {/* Eyebrow */}
                  <motion.span
                    variants={textItemVariants}
                    className="text-[11px] font-semibold tracking-[0.18em] uppercase block mb-4"
                    style={{ color: area.accent }}
                  >
                    {area.eyebrow}
                  </motion.span>

                  {/* Heading */}
                  <motion.h3
                    variants={textItemVariants}
                    className="text-2xl lg:text-[1.75rem] font-bold text-white leading-tight mb-4"
                    style={{ fontFamily: "var(--font-sora)" }}
                  >
                    {area.name}
                  </motion.h3>

                  {/* Divider line */}
                  <motion.div
                    variants={{
                      hidden:  { scaleX: 0 },
                      visible: { scaleX: 1, transition: { duration: 0.55, ease: "easeOut", delay: 0.12 } },
                      exit:    { scaleX: 0, transition: { duration: 0.18, ease: "easeIn" } },
                    }}
                    className="h-[2px] w-10 origin-left mb-5"
                    style={{ backgroundColor: area.accent }}
                  />

                  {/* Description */}
                  <motion.p
                    variants={textItemVariants}
                    className="text-white/60 text-sm leading-relaxed"
                  >
                    {area.desc}
                  </motion.p>
                </motion.div>
              </AnimatePresence>

              {/* Navigation row */}
              <div className="relative z-10 mt-8 flex items-center gap-5">

                {/* Arrow buttons */}
                <div className="flex gap-2.5">
                  <button
                    onClick={prev}
                    className="w-9 h-9 rounded-full border border-white/20 hover:border-white/50 hover:bg-white/5 flex items-center justify-center text-white/50 hover:text-white transition-all duration-200"
                    aria-label="Previous"
                  >
                    <ArrowLeft size={15} />
                  </button>
                  <button
                    onClick={next}
                    className="w-9 h-9 rounded-full border border-white/20 hover:border-white/50 hover:bg-white/5 flex items-center justify-center text-white/50 hover:text-white transition-all duration-200"
                    aria-label="Next"
                  >
                    <ArrowRight size={15} />
                  </button>
                </div>

                {/* Progress dots */}
                <div className="flex items-center gap-1.5 flex-1">
                  {areas.map((a, i) => (
                    <button
                      key={i}
                      onClick={() => go(i)}
                      aria-label={`Go to ${a.name}`}
                      className="relative h-[3px] rounded-full overflow-hidden transition-all duration-300"
                      style={{
                        flex: i === current ? 2 : 1,
                        backgroundColor: "rgba(255,255,255,0.12)",
                      }}
                    >
                      {/* Fill bar for past + current */}
                      {i < current && (
                        <div className="absolute inset-0 rounded-full" style={{ backgroundColor: area.accent, opacity: 0.5 }} />
                      )}
                      {i === current && (
                        <motion.div
                          key={current}
                          className="absolute inset-0 rounded-full"
                          style={{ backgroundColor: area.accent }}
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{ duration: paused ? 9999 : AUTOPLAY_MS / 1000, ease: "linear" }}
                        />
                      )}
                    </button>
                  ))}
                </div>

                {/* Slide counter label */}
                <span className="text-[11px] font-mono text-white/30 tabular-nums shrink-0">
                  {area.index} / {String(total).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
