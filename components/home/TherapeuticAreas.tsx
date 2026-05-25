"use client"

import { motion } from "framer-motion"
import { Heart, Wind, Leaf, Shield, Zap, Apple } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { fadeUp, staggerContainer, cardHoverProps, viewportOnce } from "@/lib/motion"
import SectionHeader from "@/components/shared/SectionHeader"

const areas = [
  {
    icon: Heart,
    name: "Cardiovascular Care",
    desc: "Managing hypertension, lipid disorders, and heart health to protect life's vital rhythm.",
    color: "bg-rose-50 text-rose-600",
  },
  {
    icon: Wind,
    name: "Respiratory & Pulmonology",
    desc: "Advanced therapies designed to help patients breathe easier, from asthma to acute respiratory care.",
    color: "bg-teal-50 text-teal-600",
  },
  {
    icon: Leaf,
    name: "Gastroenterology",
    desc: "Restoring digestive health with highly effective anti-ulcerants, antacids, and gut-health formulations.",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: Shield,
    name: "Anti-Infectives & Antibiotics",
    desc: "Powerful, reliable defense mechanisms against bacterial and viral infections.",
    color: "bg-indigo-50 text-indigo-600",
  },
  {
    icon: Zap,
    name: "Analgesics & Pain Management",
    desc: "Rapid and sustained-release formulations targeting acute, chronic, and inflammatory pain.",
    color: "bg-violet-50 text-violet-600",
  },
  {
    icon: Apple,
    name: "Nutraceuticals & Wellness",
    desc: "Vital vitamins, minerals, and supplements designed to boost immunity and promote preventive healthcare.",
    color: "bg-green-50 text-green-600",
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
            <motion.div key={area.name} variants={fadeUp} {...cardHoverProps}>
              <Card className="h-full border border-brand-border shadow-none hover:border-primary/40 transition-colors duration-200">
                <CardContent className="p-6">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${area.color}`}>
                    <area.icon size={22} />
                  </div>
                  <h3 className="font-semibold text-[#0D1B2A] mb-2">{area.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{area.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
