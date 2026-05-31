"use client"

import type { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, ArrowUp, ArrowDown } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { type Product, categoryColors } from "@/lib/products"

function SortIcon({ sorted }: { sorted: false | "asc" | "desc" }) {
  if (sorted === "asc") return <ArrowUp size={11} className="text-primary" />
  if (sorted === "desc") return <ArrowDown size={11} className="text-primary" />
  return <ArrowUpDown size={11} className="text-muted-foreground/50" />
}

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "id",
    header: "#",
    cell: ({ row, table }) => {
      const sortedRows = table.getSortedRowModel().rows
      const pos = sortedRows.findIndex((r) => r.id === row.id) + 1
      return (
        <span className="text-xs text-muted-foreground font-mono tabular-nums">
          {String(pos).padStart(2, "0")}
        </span>
      )
    },
    size: 48,
  },
  {
    accessorKey: "brandName",
    header: ({ column }) => (
      <button
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="flex items-center gap-1 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
      >
        Brand Name
        <SortIcon sorted={column.getIsSorted()} />
      </button>
    ),
    cell: ({ row }) => (
      <span className="font-semibold text-sm text-[#0D1B2A]">
        {row.getValue("brandName")}
      </span>
    ),
    size: 200,
  },
  {
    accessorKey: "composition",
    header: () => (
      <span className="text-xs font-semibold text-muted-foreground">Composition</span>
    ),
    cell: ({ row }) => (
      <span className="text-sm text-muted-foreground leading-relaxed break-words">
        {row.getValue("composition")}
      </span>
    ),
  },
  {
    accessorKey: "category",
    header: ({ column }) => (
      <button
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="flex items-center gap-1 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
      >
        Category
        <SortIcon sorted={column.getIsSorted()} />
      </button>
    ),
    cell: ({ row }) => {
      const cat = row.getValue<Product["category"]>("category")
      return (
        <Badge variant="outline" className={`text-xs ${categoryColors[cat]}`}>
          {cat}
        </Badge>
      )
    },
    size: 160,
  },
]
