"use client"

import { motion } from "framer-motion"
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion"
import SectionHeader from "@/components/shared/SectionHeader"
import {
  CardioIcon,
  LungsIcon,
  StomachIcon,
  DNAIcon,
  CapsuleIcon,
  MoleculeIcon,
} from "@/components/shared/MedicalIcons"

const areas = [
  {
    index: "01",
    Icon: CardioIcon,
    name: "Cardiovascular Care",
    desc: "Managing hypertension, lipid disorders, and heart health to protect life's vital rhythm.",
    accent: "#E53E3E",
    bg: "bg-rose-50",
    ring: "ring-rose-100",
    text: "text-rose-600",
  },
  {
    index: "02",
    Icon: LungsIcon,
    name: "Respiratory & Pulmonology",
    desc: "Advanced therapies designed to help patients breathe easier, from asthma to acute respiratory care.",
    accent: "#0694A2",
    bg: "bg-teal-50",
    ring: "ring-teal-100",
    text: "text-teal-600",
  },
  {
    index: "03",
    Icon: StomachIcon,
    name: "Gastroenterology",
    desc: "Restoring digestive health with highly effective anti-ulcerants, antacids, and gut-health formulations.",
    accent: "#D69E2E",
    bg: "bg-amber-50",
    ring: "ring-amber-100",
    text: "text-amber-600",
  },
  {
    index: "04",
    Icon: DNAIcon,
    name: "Anti-Infectives & Antibiotics",
    desc: "Powerful, reliable defense mechanisms against bacterial and viral infections.",
    accent: "#5A67D8",
    bg: "bg-indigo-50",
    ring: "ring-indigo-100",
    text: "text-indigo-600",
  },
  {
    index: "05",
    Icon: CapsuleIcon,
    name: "Analgesics & Pain Management",
    desc: "Rapid and sustained-release formulations targeting acute, chronic, and inflammatory pain.",
    accent: "#805AD5",
    bg: "bg-violet-50",
    ring: "ring-violet-100",
    text: "text-violet-600",
  },
  {
    index: "06",
    Icon: MoleculeIcon,
    name: "Nutraceuticals & Wellness",
    desc: "Vital vitamins, minerals, and supplements designed to boost immunity and promote preventive healthcare.",
    accent: "#38A169",
    bg: "bg-green-50",
    ring: "ring-green-100",
    text: "text-green-600",
  },
]

export default function TherapeuticAreas() {
  return (
    <section id="therapeutic" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          title="Driving Care Across Therapeutic Areas"
          subtitle="From everyday wellness to chronic disease management, RxAgs offers targeted solutions across major medical specialties."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {areas.map((area) => (
            <motion.div
              key={area.name}
              variants={fadeUp}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="group relative bg-white rounded-2xl border border-brand-border p-6 overflow-hidden cursor-default"
              style={{ boxShadow: "0 1px 3px rgba(13,27,42,0.06)" }}
            >
              {/* Top accent line — slides in on hover */}
              <div
                className="absolute top-0 left-0 right-0 h-[3px] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out rounded-t-2xl"
                style={{ backgroundColor: area.accent }}
              />

              {/* Index */}
              <span className="absolute top-5 right-5 text-xs font-mono font-medium text-muted-foreground/40 select-none">
                {area.index}
              </span>

              {/* Icon */}
              <div className={`w-12 h-12 rounded-2xl ${area.bg} ring-1 ${area.ring} flex items-center justify-center mb-5`}>
                <area.Icon className={`w-6 h-6 ${area.text}`} />
              </div>

              {/* Text */}
              <h3 className="font-semibold text-[#0D1B2A] text-[15px] mb-2 leading-snug">
                {area.name}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {area.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
