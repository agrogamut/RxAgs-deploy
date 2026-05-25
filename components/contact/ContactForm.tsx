"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Loader2, CheckCircle } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { fadeUp, viewportOnce } from "@/lib/motion"

interface FormState {
  name: string
  email: string
  company: string
  message: string
}

export default function ContactForm() {
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
    <AnimatePresence mode="wait">
      {status === "success" ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center justify-center py-16 text-center"
        >
          <CheckCircle size={48} className="text-green-500 mb-4" />
          <h3 className="text-xl font-bold text-[#0D1B2A] mb-2">Message Received!</h3>
          <p className="text-muted-foreground text-sm max-w-sm">
            Thank you for reaching out to RxAgs. Our team will get back to you shortly.
            A confirmation has been sent to <span className="font-medium text-[#0D1B2A]">{form.email}</span>.
          </p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={handleSubmit}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col gap-5"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-[#0D1B2A]">Full Name *</label>
              <Input
                required
                value={form.name}
                onChange={set("name")}
                placeholder="Dr. Rajesh Sharma"
                className="bg-white border-brand-border"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-[#0D1B2A]">Email *</label>
              <Input
                required
                type="email"
                value={form.email}
                onChange={set("email")}
                placeholder="you@example.com"
                className="bg-white border-brand-border"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-[#0D1B2A]">
              Company / Organisation <span className="text-muted-foreground font-normal">(optional)</span>
            </label>
            <Input
              value={form.company}
              onChange={set("company")}
              placeholder="Hospital / Distributor / Pharma Company"
              className="bg-white border-brand-border"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-[#0D1B2A]">Message *</label>
            <Textarea
              required
              rows={5}
              value={form.message}
              onChange={set("message")}
              placeholder="Tell us about your requirements…"
              className="bg-white border-brand-border resize-none"
            />
          </div>

          {status === "error" && (
            <p className="text-sm text-red-500">{errorMsg}</p>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary hover:bg-[#0D4F8C] disabled:opacity-60 text-white font-semibold text-sm transition-colors duration-200 self-start"
          >
            {status === "loading" ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                Sending…
              </>
            ) : (
              "Send Message"
            )}
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  )
}
