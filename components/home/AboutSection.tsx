"use client"

import { motion } from "framer-motion"
import { Heart, Shield, Lightbulb } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { fadeUp, staggerContainer, cardHoverProps, viewportOnce } from "@/lib/motion"

const pillars = [
  {
    icon: Heart,
    title: "Patient-First Focus",
    body: "Every capsule, tablet, and formulation we develop is designed with the patient's recovery and comfort in mind.",
  },
  {
    icon: Shield,
    title: "Uncompromising Quality",
    body: "Operating under strict compliance with global manufacturing standards (GMP/ISO) to ensure safety and efficacy.",
  },
  {
    icon: Lightbulb,
    title: "Accessible Innovation",
    body: "Leveraging cutting-edge pharmaceutical sciences to provide premium care at accessible price points.",
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Text */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-3 block">
              Who We Are
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B2A] leading-tight mb-6">
              Purpose-Driven Pharmaceutical Care
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              RxAgs is the premier pharmaceutical division of Agrogamut Services Pvt. Ltd. Driven
              by a purpose to make healthcare accessible and affordable, we manufacture and market
              a diverse range of high-quality medicines.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Following in the footsteps of global pharmaceutical benchmarks, our operations are
              anchored in rigorous quality standards, continuous innovation, and an unwavering
              focus on patient well-being. We believe that good health is the foundation of
              vibrant lives, thriving communities, and forward progress.
            </p>
          </motion.div>

          {/* Right: Pillars */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col gap-4"
          >
            {pillars.map(({ icon: Icon, title, body }) => (
              <motion.div key={title} variants={fadeUp} {...cardHoverProps}>
                <Card className="border border-brand-border shadow-none">
                  <CardContent className="flex gap-4 p-5">
                    <div className="shrink-0 w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                      <Icon size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0D1B2A] mb-1 text-sm">{title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
