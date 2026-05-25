import Image from "next/image"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"

const quickLinks = [
  { label: "About Us", href: "/#about" },
  { label: "Therapeutics", href: "/#therapeutic" },
  { label: "Product Catalogue", href: "/products" },
  { label: "Contact Us", href: "/contact" },
  { label: "Sustainability", href: "/sustainability" },
]

export default function Footer() {
  return (
    <footer className="bg-[#0D1B2A] text-white/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Image
              src="/logo.png"
              alt="Agrogamut Services Pvt. Ltd."
              width={130}
              height={44}
              className="h-10 w-auto object-contain brightness-0 invert mb-4"
            />
            <p className="text-sm leading-relaxed text-white/60 max-w-xs">
              RxAgs is the premier pharmaceutical division of Agrogamut Services Pvt. Ltd.,
              committed to making quality healthcare accessible and affordable globally.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-2.5 text-sm text-white/60">
              <li>Agrogamut Services Pvt. Ltd.</li>
              <li>
                <a
                  href="mailto:info@agrogamut.com"
                  className="hover:text-white transition-colors"
                >
                  info@agrogamut.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-white/10" />

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-white/40">
          <p>© 2026 Agrogamut Services Pvt. Ltd. All rights reserved.</p>
          <p className="max-w-lg text-right">
            Disclaimer: The medical information on this site is for educational purposes only.
            Please consult a healthcare professional for medical advice, diagnosis, or treatment.
          </p>
        </div>
      </div>
    </footer>
  )
}
