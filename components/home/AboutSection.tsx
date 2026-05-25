"use client"

import { motion } from "framer-motion"
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion"
import { PatientIcon, PrecisionShieldIcon, AtomIcon } from "@/components/shared/MedicalIcons"

const pillars = [
  {
    Icon: PatientIcon,
    title: "Patient-First Focus",
    body: "Every capsule, tablet, and formulation we develop is designed with the patient's recovery and comfort in mind.",
    accent: "#1A6FBF",
  },
  {
    Icon: PrecisionShieldIcon,
    title: "Uncompromising Quality",
    body: "Operating under strict compliance with global manufacturing standards (GMP/ISO) to ensure safety and efficacy.",
    accent: "#0694A2",
  },
  {
    Icon: AtomIcon,
    title: "Accessible Innovation",
    body: "Leveraging cutting-edge pharmaceutical sciences to provide premium care at accessible price points.",
    accent: "#805AD5",
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
            <p className="text-muted-foreground leading-relaxed mb-8">
              Following in the footsteps of global pharmaceutical benchmarks, our operations are
              anchored in rigorous quality standards, continuous innovation, and an unwavering
              focus on patient well-being.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-brand-border">
              {[
                { value: "38+", label: "Formulations" },
                { value: "6", label: "Therapeutic Areas" },
                { value: "GMP", label: "Certified" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold text-[#0D1B2A] font-heading">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Pillars */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col gap-4"
          >
            {pillars.map(({ Icon, title, body, accent }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                className="group relative bg-white rounded-2xl border border-brand-border overflow-hidden"
                style={{ boxShadow: "0 1px 4px rgba(13,27,42,0.05)" }}
              >
                {/* Left accent bar */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-[3px] scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300 ease-out"
                  style={{ backgroundColor: accent }}
                />

                <div className="flex gap-4 p-5 pl-6">
                  {/* Icon */}
                  <div
                    className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${accent}15` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: accent }} />
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="font-semibold text-[#0D1B2A] mb-1 text-sm leading-snug">
                      {title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
