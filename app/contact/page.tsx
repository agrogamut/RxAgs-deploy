import type { Metadata } from "next"
import Link from "next/link"
import { ChevronRight, Mail, MapPin } from "lucide-react"
import ContactForm from "@/components/contact/ContactForm"

export const metadata: Metadata = {
  title: "Contact Us | RxAgs",
  description: "Get in touch with RxAgs — for partnerships, distribution, institutional inquiries, or general questions.",
}

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#0D1B2A] pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <nav className="flex items-center gap-1.5 text-xs text-white/40 mb-6">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-white/60">Contact</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-white/60 max-w-lg">
            Whether you&apos;re a healthcare professional, distributor, or global partner —
            we&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Info sidebar */}
            <div className="lg:col-span-1 flex flex-col gap-6">
              <div>
                <h2 className="text-lg font-bold text-[#0D1B2A] mb-4">Contact Information</h2>
                <ul className="flex flex-col gap-4">
                  <li className="flex gap-3 items-start text-sm text-muted-foreground">
                    <Mail size={16} className="text-primary mt-0.5 shrink-0" />
                    <a href="mailto:info@agrogamut.com" className="hover:text-primary transition-colors">
                      info@agrogamut.com
                    </a>
                  </li>
                  <li className="flex gap-3 items-start text-sm text-muted-foreground">
                    <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
                    <span>Agrogamut Services Pvt. Ltd., India</span>
                  </li>
                </ul>
              </div>

              <div className="p-5 rounded-xl bg-accent border border-brand-border">
                <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                  Response Time
                </p>
                <p className="text-sm text-muted-foreground">
                  We typically respond to all enquiries within 1–2 business days.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2 bg-white rounded-2xl border border-brand-border p-8 shadow-sm">
              <h2 className="text-xl font-bold text-[#0D1B2A] mb-6">Send us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
