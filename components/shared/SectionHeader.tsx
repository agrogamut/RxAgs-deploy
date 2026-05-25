import { motion } from "framer-motion"
import { fadeUp, viewportOnce } from "@/lib/motion"

interface SectionHeaderProps {
  title: string
  subtitle?: string
  centered?: boolean
  light?: boolean
}

export default function SectionHeader({ title, subtitle, centered = true, light = false }: SectionHeaderProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={`mb-10 ${centered ? "text-center" : ""}`}
    >
      <h2 className={`text-3xl md:text-4xl font-bold tracking-tight mb-3 ${light ? "text-white" : "text-[#0D1B2A]"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base md:text-lg max-w-2xl ${centered ? "mx-auto" : ""} ${light ? "text-white/70" : "text-muted-foreground"}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
