import type { Metadata } from "next"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import ProductTable from "@/components/products/ProductTable"
import PageWrapper from "@/components/layout/PageWrapper"

export const metadata: Metadata = {
  title: "Product Portfolio | RxAgs",
  description:
    "Browse RxAgs' complete pharmaceutical portfolio — 56 scientifically validated formulations across cardiovascular, respiratory, gastroenterology, and more.",
}

export default function ProductsPage() {
  return (
    <PageWrapper>
      {/* Page header */}
      <section className="relative bg-[#0D1B2A] pt-28 pb-16 overflow-hidden">
        {/* Subtle radial glow */}
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(26,111,191,0.08) 0%, transparent 65%)" }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-xs text-white/35 mb-8">
            <Link href="/" className="hover:text-white/60 transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-white/55">Products</span>
          </nav>
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#1A6FBF] flex items-center gap-2.5 mb-4">
            <span className="h-px w-5 bg-[#1A6FBF] inline-block" />
            Full Portfolio
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Our Product Portfolio
          </h1>
          <p className="text-base text-white/55 max-w-lg leading-relaxed">
            Transparent, scientifically validated formulations across diverse medical categories.
          </p>
        </div>
      </section>

      {/* Table */}
      <section className="py-14 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ProductTable />
        </div>
      </section>

      {/* Footer note */}
      <section className="py-10 bg-white border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mx-auto text-center">
            All products listed are manufactured in state-of-the-art facilities compliant with
            global healthcare regulatory mandates. For bulk institutional inquiries, export
            documentation, or third-party contract manufacturing queries, please reach out to our
            corporate desk via our{" "}
            <Link href="/#contact" className="text-primary hover:underline font-medium">
              contact form
            </Link>
            .
          </p>
        </div>
      </section>
    </PageWrapper>
  )
}
