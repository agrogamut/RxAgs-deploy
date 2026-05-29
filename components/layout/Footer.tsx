import Image from "next/image"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"

export default function Footer() {
  return (
    <footer className="bg-[#0D1B2A] text-white/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-1">
              <Image
                src="/logo.png"
                alt="RxAgs"
                width={1612}
                height={492}
                className="h-20 w-auto"
              />
            </div>
            <p className="text-xs text-white/40 mb-3">A unit of Agrogamut Services Pvt. Ltd.</p>
            <p className="text-sm leading-relaxed text-white/60 max-w-xs">
              RxAgs is the premier pharmaceutical division of Agrogamut Services Pvt. Ltd.,
              committed to making quality healthcare accessible and affordable globally.
            </p>
          </div>

          {/* Links + Contact */}
          <div className="flex flex-col gap-6">
            <div>
              <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">
                Navigate
              </h4>
              <ul className="space-y-2">
                <li><Link href="/" className="text-sm text-white/60 hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/products" className="text-sm text-white/60 hover:text-white transition-colors">Products</Link></li>
                <li><a href="/#contact" className="text-sm text-white/60 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">
                Contact
              </h4>
              <a href="mailto:info@rxags.com" className="text-sm text-white/60 hover:text-white transition-colors">
                info@rxags.com
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-white/10" />

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-white/40">
          <p>© 2026 Agrogamut Services Pvt. Ltd. All rights reserved.</p>
            <p className="max-w-lg md:text-right">
            Disclaimer: Do not use these medications without a doctor's supervision. This site is not a substitute for professional medical advice.
            </p>
        </div>
      </div>
    </footer>
  )
}
