import type { Metadata } from "next"
import Link from "next/link"
import { ChevronRight, Leaf } from "lucide-react"

export const metadata: Metadata = {
  title: "Sustainability | RxAgs",
}

export default function SustainabilityPage() {
  return (
    <>
      <section className="bg-[#0D1B2A] pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <nav className="flex items-center gap-1.5 text-xs text-white/40 mb-6">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-white/60">Sustainability</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Sustainability</h1>
          <p className="text-lg text-white/60 max-w-lg">
            Our commitment to responsible healthcare and a greener future.
          </p>
        </div>
      </section>
      <section className="py-32 bg-surface flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center mx-auto mb-5">
            <Leaf size={28} className="text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-[#0D1B2A] mb-3">Coming Soon</h2>
          <p className="text-muted-foreground text-sm max-w-xs mx-auto mb-6">
            We&apos;re documenting our sustainability initiatives. Check back soon.
          </p>
          <Link
            href="/"
            className="text-sm font-semibold text-primary hover:text-[#0D4F8C] transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </section>
    </>
  )
}
