import type { Metadata } from "next"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import ProductTable from "@/components/products/ProductTable"

export const metadata: Metadata = {
  title: "Product Portfolio | RxAgs",
  description:
    "Browse RxAgs' complete pharmaceutical portfolio — 38 scientifically validated formulations across cardiovascular, respiratory, gastroenterology, and more.",
}

export default function ProductsPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-[#0D1B2A] pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-xs text-white/40 mb-6">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-white/60">Products</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Product Portfolio
          </h1>
          <p className="text-lg text-white/60 max-w-xl">
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
    </>
  )
}
