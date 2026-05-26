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
    accent: "#C8922A",
  },
]

const stats = [
  { value: "38+", label: "Formulations" },
  { value: "6", label: "Therapeutic Areas" },
  { value: "GMP", label: "Certified" },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-28 bg-[#F4F8FD] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left: Text */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="relative"
          >
            {/* Background watermark */}
            <span
              aria-hidden
              className="absolute -top-4 -left-2 text-[clamp(80px,12vw,140px)] font-bold leading-none text-[#0D1B2A] select-none pointer-events-none"
              style={{ fontFamily: "var(--font-sora)", opacity: 0.028 }}
            >
              RxAgs
            </span>

            <span className="relative text-[11px] font-semibold tracking-[0.18em] uppercase text-primary mb-4 flex items-center gap-2.5">
              <span className="h-px w-6 bg-primary inline-block" />
              Who We Are
            </span>

            <h2
              className="relative text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-[#0D1B2A] leading-[1.15] mb-7"
              style={{ fontFamily: "var(--font-sora)" }}
            >
              Purpose-Driven<br />Pharmaceutical Care
            </h2>

            <p className="text-[#64748B] leading-relaxed mb-4 text-[0.9375rem]">
              RxAgs is the premier pharmaceutical division of Agrogamut Services Pvt. Ltd. Driven
              by a purpose to make healthcare accessible and affordable, we manufacture and market
              a diverse range of high-quality medicines.
            </p>
            <p className="text-[#64748B] leading-relaxed mb-10 text-[0.9375rem]">
              Following in the footsteps of global pharmaceutical benchmarks, our operations are
              anchored in rigorous quality standards, continuous innovation, and an unwavering
              focus on patient well-being.
            </p>

            {/* Stats */}
            <div className="flex gap-8 pt-8 border-t border-[#E2EAF4]">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p
                    className="text-4xl font-bold text-[#0D1B2A] leading-none mb-1.5"
                    style={{ fontFamily: "var(--font-sora)" }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-xs text-[#64748B] tracking-wide">{stat.label}</p>
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
            className="flex flex-col gap-3"
          >
            {pillars.map(({ Icon, title, body, accent }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 340, damping: 26 }}
                className="group relative bg-white rounded-2xl border border-[#E2EAF4] overflow-hidden cursor-default"
                style={{ boxShadow: "0 1px 6px rgba(13,27,42,0.04)" }}
              >
                {/* Accent bar */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-[3px] scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300 ease-out"
                  style={{ backgroundColor: accent }}
                />

                <div className="flex gap-4 p-5 pl-6">
                  <div
                    className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300"
                    style={{ backgroundColor: `${accent}14` }}
                  >
                    <Icon className="w-[18px] h-[18px]" style={{ color: accent }} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0D1B2A] mb-1 text-sm leading-snug">
                      {title}
                    </h3>
                    <p className="text-sm text-[#64748B] leading-relaxed">{body}</p>
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
