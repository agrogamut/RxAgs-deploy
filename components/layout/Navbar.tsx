"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { fadeDown } from "@/lib/motion"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  function handleHome() {
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      router.push("/")
    }
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <motion.header
      variants={fadeDown}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-brand-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/logo.png"
            alt="RxAgs"
            width={1612}
            height={492}
            className="h-9 md:h-11 w-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-3">
          <button
            onClick={handleHome}
            className={`px-3 py-2 text-sm font-medium rounded-md transition-colors duration-150 ${
              scrolled ? "text-foreground/70 hover:text-primary" : "text-white/80 hover:text-white"
            }`}
          >
            Home
          </button>
          <Link
            href="/products"
            className={`px-3 py-2 text-sm font-medium rounded-md transition-colors duration-150 ${
              scrolled ? "text-foreground/70 hover:text-primary" : "text-white/80 hover:text-white"
            }`}
          >
            Products
          </Link>
          <a
            href="/#contact"
            className="px-4 py-2 text-sm font-semibold text-white bg-primary hover:bg-[#0D4F8C] rounded-lg transition-colors duration-150"
          >
            Contact Us
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 rounded-md text-foreground/70 hover:text-primary"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:hidden overflow-hidden bg-white border-b border-brand-border"
          >
            <nav className="px-6 py-4 flex flex-col gap-1">
              <button
                onClick={() => { setOpen(false); handleHome() }}
                className="py-2.5 text-sm font-medium text-foreground/80 hover:text-primary border-b border-brand-border transition-colors text-left"
              >
                Home
              </button>
              <Link
                href="/products"
                onClick={() => setOpen(false)}
                className="py-2.5 text-sm font-medium text-foreground/80 hover:text-primary border-b border-brand-border transition-colors"
              >
                Products
              </Link>
              <a
                href="/#contact"
                onClick={() => setOpen(false)}
                className="mt-3 px-4 py-2.5 text-sm font-semibold text-white bg-primary rounded-lg text-center"
              >
                Contact Us
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
