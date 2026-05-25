"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { BentoGrid } from "@/components/ui/bento-grid"
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion"

const areas = [
  {
    index: "01",
    name: "Cardiovascular Care",
    desc: "Managing hypertension, lipid disorders, and heart health to protect life's vital rhythm.",
    img: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=900&q=75",
    accent: "#E53E3E",
    col: "col-span-3 lg:col-span-1",
  },
  {
    index: "02",
    name: "Respiratory & Pulmonology",
    desc: "Advanced therapies that help patients breathe easier — from asthma to acute respiratory care.",
    img: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=900&q=75",
    accent: "#0694A2",
    col: "col-span-3 lg:col-span-2",
  },
  {
    index: "03",
    name: "Gastroenterology",
    desc: "Restoring digestive health with highly effective anti-ulcerants, antacids, and gut-health formulations.",
    img: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=900&q=75",
    accent: "#D69E2E",
    col: "col-span-3 lg:col-span-2",
  },
  {
    index: "04",
    name: "Anti-Infectives",
    desc: "Powerful, reliable defense mechanisms against bacterial and viral infections.",
    img: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=900&q=75",
    accent: "#5A67D8",
    col: "col-span-3 lg:col-span-1",
  },
  {
    index: "05",
    name: "Analgesics & Pain Management",
    desc: "Rapid and sustained-release formulations targeting acute, chronic, and inflammatory pain.",
    img: "https://images.unsplash.com/photo-1585435557343-3b092031a831?w=900&q=75",
    accent: "#805AD5",
    col: "col-span-3 lg:col-span-1",
  },
  {
    index: "06",
    name: "Nutraceuticals & Wellness",
    desc: "Vital vitamins, minerals, and supplements designed to boost immunity and promote preventive healthcare.",
    img: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=900&q=75",
    accent: "#38A169",
    col: "col-span-3 lg:col-span-2",
  },
]

export default function PortfolioOfCare() {
  return (
    <section id="therapeutic" className="py-24 bg-[#0D1B2A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10"
        >
          <div>
            <motion.span variants={fadeUp} className="text-xs font-semibold tracking-widest uppercase text-[#1A6FBF] block mb-3">
              What We Cater
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Our Portfolio of Care
            </motion.h2>
          </div>
          <motion.p variants={fadeUp} className="text-white/50 text-sm max-w-xs md:text-right leading-relaxed">
            Targeted solutions across six major therapeutic specialties.
          </motion.p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <BentoGrid className="grid-cols-3 auto-rows-[18rem] gap-4">
            {areas.map((area) => (
              <motion.div
                key={area.name}
                variants={fadeUp}
                className={`group relative overflow-hidden rounded-2xl cursor-default ${area.col}`}
              >
                {/* Background image */}
                <Image
                  src={area.img}
                  alt={area.name}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />

                {/* Accent tint on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  style={{ backgroundColor: area.accent }}
                />

                {/* Index */}
                <span className="absolute top-4 right-4 text-xs font-mono text-white/30 select-none">
                  {area.index}
                </span>

                {/* Text — slides up on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-2 group-hover:-translate-y-1 transition-transform duration-300">
                  <h3 className="text-white font-bold text-lg leading-snug mb-1">
                    {area.name}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed max-w-xs line-clamp-2 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-75">
                    {area.desc}
                  </p>
                  <div className="flex items-center gap-1.5 mt-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-100">
                    <span className="text-xs font-semibold text-white/80">View Products</span>
                    <ArrowRight size={12} className="text-white/80" />
                  </div>
                </div>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500 ease-out"
                  style={{ backgroundColor: area.accent }}
                />
              </motion.div>
            ))}
          </BentoGrid>
        </motion.div>
      </div>
    </section>
  )
}
