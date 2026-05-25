"use client"

import { Search, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { categories, categoryColors, type ProductCategory } from "@/lib/products"

interface SearchFilterProps {
  search: string
  onSearchChange: (v: string) => void
  activeCategory: ProductCategory | "All"
  onCategoryChange: (v: ProductCategory | "All") => void
}

export default function SearchFilter({
  search,
  onSearchChange,
  activeCategory,
  onCategoryChange,
}: SearchFilterProps) {
  return (
    <div className="flex flex-col gap-4 mb-8">
      {/* Search */}
      <div className="relative max-w-md">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <Input
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search by product name or composition…"
          className="pl-9 pr-8 bg-white border-brand-border"
        />
        {search && (
          <button
            onClick={() => onSearchChange("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            <X size={14} />
          </button>
        )}
      </div>

      {/* Category pills */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onCategoryChange("All")}
          className={`px-3 py-1 rounded-full text-xs font-medium border transition-all duration-150 ${
            activeCategory === "All"
              ? "bg-[#0D1B2A] text-white border-[#0D1B2A]"
              : "bg-white text-muted-foreground border-brand-border hover:border-primary hover:text-primary"
          }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onCategoryChange(cat)}
            className={`px-3 py-1 rounded-full text-xs font-medium border transition-all duration-150 ${
              activeCategory === cat
                ? "bg-[#0D1B2A] text-white border-[#0D1B2A]"
                : "bg-white text-muted-foreground border-brand-border hover:border-primary hover:text-primary"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  )
}
