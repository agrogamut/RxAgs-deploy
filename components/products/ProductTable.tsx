"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import SearchFilter from "./SearchFilter"
import { products, categoryColors, type ProductCategory } from "@/lib/products"

export default function ProductTable() {
  const [search, setSearch] = useState("")
  const [activeCategory, setActiveCategory] = useState<ProductCategory | "All">("All")

  const filtered = products.filter((p) => {
    const matchesSearch =
      search === "" ||
      p.brandName.toLowerCase().includes(search.toLowerCase()) ||
      p.composition.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = activeCategory === "All" || p.category === activeCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div>
      <SearchFilter
        search={search}
        onSearchChange={setSearch}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      {/* Desktop table */}
      <div className="hidden md:block rounded-xl border border-brand-border overflow-hidden bg-white shadow-sm">
        <Table>
          <TableHeader>
            <TableRow className="bg-surface hover:bg-surface">
              <TableHead className="w-12 text-xs font-semibold text-muted-foreground">#</TableHead>
              <TableHead className="text-xs font-semibold text-muted-foreground">Brand Name</TableHead>
              <TableHead className="text-xs font-semibold text-muted-foreground">Composition</TableHead>
              <TableHead className="text-xs font-semibold text-muted-foreground">Category</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <AnimatePresence mode="popLayout">
              {filtered.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={4} className="text-center py-16 text-muted-foreground text-sm">
                    No products match your search.
                  </TableCell>
                </TableRow>
              ) : (
                filtered.map((product) => (
                  <motion.tr
                    key={product.id}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="border-b border-brand-border even:bg-surface/50 hover:bg-accent/40 transition-colors"
                  >
                    <TableCell className="text-xs text-muted-foreground font-mono">{product.id}</TableCell>
                    <TableCell className="font-semibold text-sm text-[#0D1B2A]">{product.brandName}</TableCell>
                    <TableCell className="text-sm text-muted-foreground max-w-xs">{product.composition}</TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className={`text-xs ${categoryColors[product.category]}`}
                      >
                        {product.category}
                      </Badge>
                    </TableCell>
                  </motion.tr>
                ))
              )}
            </AnimatePresence>
          </TableBody>
        </Table>
      </div>

      {/* Mobile card stack */}
      <div className="md:hidden flex flex-col gap-3">
        <AnimatePresence mode="popLayout">
          {filtered.length === 0 ? (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-10 text-muted-foreground text-sm"
            >
              No products match your search.
            </motion.p>
          ) : (
            filtered.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="border border-brand-border shadow-none">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="font-semibold text-[#0D1B2A] text-sm">{product.brandName}</h3>
                      <Badge
                        variant="outline"
                        className={`text-xs shrink-0 ${categoryColors[product.category]}`}
                      >
                        {product.category}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">{product.composition}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </div>

      <p className="text-xs text-muted-foreground mt-4 text-center">
        Showing {filtered.length} of {products.length} products
      </p>
    </div>
  )
}
