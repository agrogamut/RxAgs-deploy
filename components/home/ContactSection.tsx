"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Loader2, CheckCircle, Mail, MapPin } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion"
import SectionHeader from "@/components/shared/SectionHeader"

interface FormState {
  name: string
  email: string
  company: string
  message: string
}

export default function ContactSection() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", company: "", message: "" })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMsg, setErrorMsg] = useState("")

  const set = (key: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [key]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    setErrorMsg("")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || "Something went wrong.")
      setStatus("success")
    } catch (err) {
      setStatus("error")
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.")
    }
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          title="Get in Touch"
          subtitle="Whether you're a healthcare professional, distributor, or global partner — we'd love to hear from you."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid lg:grid-cols-3 gap-12 mt-4"
        >
          {/* Info */}
          <motion.div variants={fadeUp} className="flex flex-col gap-6">
            <div className="p-6 rounded-xl bg-surface border border-brand-border">
              <div className="flex gap-3 items-start mb-4">
                <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center shrink-0">
                  <Mail size={16} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#0D1B2A] mb-1">Email</p>
                  <a href="mailto:info@agrogamut.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    info@agrogamut.com
                  </a>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center shrink-0">
                  <MapPin size={16} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#0D1B2A] mb-1">Address</p>
                  <p className="text-sm text-muted-foreground">Agrogamut Services Pvt. Ltd., India</p>
                </div>
              </div>
            </div>
            <div className="p-5 rounded-xl bg-accent border border-brand-border">
              <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1.5">Response Time</p>
              <p className="text-sm text-muted-foreground">We typically respond within 1–2 business days.</p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div variants={fadeUp} className="lg:col-span-2 bg-surface rounded-2xl border border-brand-border p-8">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <CheckCircle size={44} className="text-green-500 mb-4" />
                  <h3 className="text-lg font-bold text-[#0D1B2A] mb-2">Message Received!</h3>
                  <p className="text-sm text-muted-foreground max-w-sm">
                    Thank you for reaching out to RxAgs. Our team will get back to you shortly.
                    A confirmation has been sent to{" "}
                    <span className="font-medium text-[#0D1B2A]">{form.email}</span>.
                  </p>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-[#0D1B2A]">Full Name *</label>
                      <Input required value={form.name} onChange={set("name")} placeholder="Dr. Rajesh Sharma" className="bg-white border-brand-border" />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-[#0D1B2A]">Email *</label>
                      <Input required type="email" value={form.email} onChange={set("email")} placeholder="you@example.com" className="bg-white border-brand-border" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-[#0D1B2A]">
                      Company <span className="text-muted-foreground font-normal">(optional)</span>
                    </label>
                    <Input value={form.company} onChange={set("company")} placeholder="Hospital / Distributor / Pharma Company" className="bg-white border-brand-border" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-[#0D1B2A]">Message *</label>
                    <Textarea required rows={4} value={form.message} onChange={set("message")} placeholder="Tell us about your requirements…" className="bg-white border-brand-border resize-none" />
                  </div>
                  {status === "error" && <p className="text-sm text-red-500">{errorMsg}</p>}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary hover:bg-[#0D4F8C] disabled:opacity-60 text-white font-semibold text-sm transition-colors duration-200 self-start"
                  >
                    {status === "loading" ? <><Loader2 size={15} className="animate-spin" />Sending…</> : "Send Message"}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
