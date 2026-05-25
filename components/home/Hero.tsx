"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { staggerFast, fadeUp, fadeIn } from "@/lib/motion"
import { ArrowRight, Users } from "lucide-react"

const headline = "Advancing Health,\nEnriching Lives."

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600&q=80')",
        }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0D1B2A]/85 via-[#0D1B2A]/70 to-[#1A6FBF]/50" />

      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-20 w-full">
        <div className="max-w-3xl">
          {/* Pill label */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-white/80 text-xs font-medium mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#1A6FBF] animate-pulse" />
            Pharmaceutical Excellence Since Day One
          </motion.div>

          {/* Headline with word-by-word stagger */}
          <motion.h1
            variants={staggerFast}
            initial="hidden"
            animate="visible"
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight mb-6"
          >
            {headline.split("\n").map((line, li) => (
              <span key={li} className="block">
                {line.split(" ").map((word, wi) => (
                  <motion.span
                    key={wi}
                    variants={fadeUp}
                    className="inline-block mr-[0.25em]"
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            ))}
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.55 }}
            className="text-lg md:text-xl text-white/75 leading-relaxed max-w-xl mb-10"
          >
            At RxAgs, we blend scientific excellence with a deep commitment to care,
            delivering high-quality, affordable healthcare solutions globally.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#1A6FBF] hover:bg-[#0D4F8C] text-white font-semibold text-sm transition-colors duration-200"
            >
              Explore Our Portfolio
              <ArrowRight size={16} />
            </Link>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/30 hover:border-white/60 bg-white/10 hover:bg-white/15 text-white font-semibold text-sm transition-all duration-200 backdrop-blur-sm"
            >
              <Users size={16} />
              Partner With Us
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent"
        />
      </motion.div>
    </section>
  )
}
