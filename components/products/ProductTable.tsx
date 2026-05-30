"use client"

import { useState, useMemo, useEffect, useRef, useCallback } from "react"
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  flexRender,
  type SortingState,
  type PaginationState,
  type Updater,
} from "@tanstack/react-table"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import SearchFilter from "./SearchFilter"
import { products, categoryColors, type ProductCategory } from "@/lib/products"
import { columns } from "./columns"

const PAGE_SIZES = [10, 30, 100] as const
const SKELETON_COUNT = 7
const INITIAL_LOAD_MS = 350
const FADE_MS = 130

// Deterministic widths — no Math.random (SSR/CSR hydration safe)
const SKEL_BRAND_W = ["32%", "45%", "38%", "52%", "41%", "35%", "48%"]
const SKEL_COMP_W  = ["65%", "78%", "58%", "72%", "68%", "82%", "61%"]

function SkeletonRow({ index }: { index: number }) {
  const d = `${index * 90}ms`
  return (
    <tr className="border-b border-brand-border">
      <td className="px-3 py-[14px]">
        <div className="h-2.5 w-6 rounded-sm bg-muted/60 animate-pulse" style={{ animationDelay: d }} />
      </td>
      <td className="px-3 py-[14px]">
        <div className="h-2.5 rounded-sm bg-muted/60 animate-pulse" style={{ width: SKEL_BRAND_W[index], animationDelay: d }} />
      </td>
      <td className="px-3 py-[14px]">
        <div className="h-2.5 rounded-sm bg-muted/60 animate-pulse" style={{ width: SKEL_COMP_W[index], animationDelay: `${index * 90 + 50}ms` }} />
      </td>
      <td className="px-3 py-[14px]">
        <div className="h-5 w-[148px] rounded-full bg-muted/60 animate-pulse" style={{ animationDelay: `${index * 90 + 100}ms` }} />
      </td>
    </tr>
  )
}

function SkeletonCard({ index }: { index: number }) {
  const d = `${index * 80}ms`
  return (
    <div className="rounded-xl border border-brand-border bg-white p-4">
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="h-3.5 rounded-sm bg-muted/60 animate-pulse" style={{ width: SKEL_BRAND_W[index % 7], animationDelay: d }} />
        <div className="h-5 w-20 rounded-full bg-muted/60 animate-pulse" style={{ animationDelay: `${index * 80 + 50}ms` }} />
      </div>
      <div className="h-2.5 rounded-sm bg-muted/60 animate-pulse" style={{ width: SKEL_COMP_W[index % 7], animationDelay: `${index * 80 + 100}ms` }} />
    </div>
  )
}

const COLGROUP = (
  <colgroup>
    <col style={{ width: "52px" }} />
    <col style={{ width: "200px" }} />
    <col />
    <col style={{ width: "240px" }} />
  </colgroup>
)

function pageRange(current: number, total: number): (number | "…")[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i)
  const out: (number | "…")[] = []
  for (let i = 0; i < total; i++) {
    if (i === 0 || i === total - 1 || (i >= current - 1 && i <= current + 1)) {
      out.push(i)
    } else if (out[out.length - 1] !== "…") {
      out.push("…")
    }
  }
  return out
}

export default function ProductTable() {
  const [search, setSearch] = useState("")
  const [activeCategory, setActiveCategory] = useState<ProductCategory | "All">("All")
  const [sorting, setSorting] = useState<SortingState>([{ id: "category", desc: false }])
  const [pagination, setPagination] = useState<PaginationState>({ pageIndex: 0, pageSize: 10 })
  const [isInitialLoad, setIsInitialLoad] = useState(true)
  const [fading, setFading] = useState(false)
  const fadeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)
  const bodyWrapRef = useRef<HTMLDivElement>(null)
  const [minBodyHeight, setMinBodyHeight] = useState(0)

  useEffect(() => {
    const t = setTimeout(() => setIsInitialLoad(false), INITIAL_LOAD_MS)
    return () => clearTimeout(t)
  }, [])

  // Fade body out, run action, then let new rows fade in
  const fadeThenDo = useCallback((action: () => void) => {
    if (fadeTimer.current) clearTimeout(fadeTimer.current)
    setFading(true)
    fadeTimer.current = setTimeout(() => {
      action()
      setFading(false)
      fadeTimer.current = undefined
    }, FADE_MS)
  }, [])

  const filtered = useMemo(
    () =>
      products.filter((p) => {
        const matchSearch =
          search === "" ||
          p.brandName.toLowerCase().includes(search.toLowerCase()) ||
          p.composition.toLowerCase().includes(search.toLowerCase())
        const matchCat = activeCategory === "All" || p.category === activeCategory
        return matchSearch && matchCat
      }),
    [search, activeCategory]
  )

  // Reset to first page on filter change (direct — search is user-driven, no artificial delay)
  useEffect(() => {
    setPagination((prev) => ({ ...prev, pageIndex: 0 }))
  }, [search, activeCategory])

  // Intercept sorting so column-header clicks also get the fade
  const handleSortingChange = useCallback(
    (updater: Updater<SortingState>) => {
      fadeThenDo(() => {
        setSorting((prev) =>
          typeof updater === "function" ? updater(prev) : updater
        )
      })
    },
    [fadeThenDo]
  )

  const table = useReactTable({
    data: filtered,
    columns,
    state: { sorting, pagination },
    onSortingChange: handleSortingChange,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  })

  const rows = table.getRowModel().rows
  const { pageIndex, pageSize } = table.getState().pagination

  // Hold the tallest height seen so the table body never shrinks on shorter pages
  useEffect(() => {
    if (bodyWrapRef.current) {
      const h = bodyWrapRef.current.offsetHeight
      setMinBodyHeight((prev) => Math.max(prev, h))
    }
  }, [rows.length])

  // Reset when user switches page size — new size needs its own baseline
  useEffect(() => {
    setMinBodyHeight(0)
  }, [pageSize])
  const pageCount = table.getPageCount()
  const startRow = filtered.length === 0 ? 0 : pageIndex * pageSize + 1
  const endRow = Math.min((pageIndex + 1) * pageSize, filtered.length)
  const pages = pageRange(pageIndex, pageCount)

  const goToPage = (index: number) =>
    fadeThenDo(() => setPagination((prev) => ({ ...prev, pageIndex: index })))

  const goPrev = () => fadeThenDo(() => table.previousPage())
  const goNext = () => fadeThenDo(() => table.nextPage())
  const setPageSize = (size: number) =>
    fadeThenDo(() => setPagination({ pageIndex: 0, pageSize: size }))

  return (
    <div>
      <SearchFilter
        search={search}
        onSearchChange={setSearch}
        activeCategory={activeCategory}
        onCategoryChange={(v) => fadeThenDo(() => setActiveCategory(v))}
      />

      {/* ── Desktop ── */}
      <div className="hidden md:block rounded-xl border border-brand-border bg-white shadow-sm overflow-hidden">

        {/* Static header */}
        <table className="table-fixed w-full text-sm">
          {COLGROUP}
          <thead>
            {table.getHeaderGroups().map((hg) => (
              <tr key={hg.id} className="bg-surface border-b border-brand-border">
                {hg.headers.map((header) => (
                  <th
                    key={header.id}
                    className="h-10 px-3 text-left align-middle text-xs font-semibold text-muted-foreground"
                  >
                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
        </table>

        {/* Body — fades on page/sort changes; skeleton overlays on first load */}
        <div
          ref={bodyWrapRef}
          className="relative"
          style={{
            minHeight: minBodyHeight || undefined,
            transition: `opacity ${FADE_MS}ms ease-out`,
            opacity: fading ? 0 : 1,
          }}
        >
          {/* Real rows */}
          <table className="table-fixed w-full text-sm">
            {COLGROUP}
            <tbody className="[&_tr:last-child]:border-0">
              {rows.length === 0 && !isInitialLoad ? (
                <tr>
                  <td colSpan={columns.length} className="text-center py-16 text-muted-foreground text-sm">
                    No products match your search.
                  </td>
                </tr>
              ) : (
                rows.map((row, i) => (
                  <motion.tr
                    key={row.original.id}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.22,
                      delay: i < 12 ? i * 0.028 : 0,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                    className="border-b border-brand-border even:bg-surface/50 hover:bg-accent/40 transition-colors"
                  >
                    {row.getVisibleCells().map((cell) => (
                      <td key={cell.id} className="px-3 py-3 align-top whitespace-normal">
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </td>
                    ))}
                  </motion.tr>
                ))
              )}
            </tbody>
          </table>

          {/* Skeleton overlay — fades out after initial load, revealing real rows */}
          <AnimatePresence>
            {isInitialLoad && (
              <motion.div
                key="skeleton-overlay"
                className="absolute inset-0 bg-white z-10"
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.32, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <table className="table-fixed w-full text-sm">
                  {COLGROUP}
                  <tbody className="[&_tr:last-child]:border-0">
                    {Array.from({ length: SKELETON_COUNT }).map((_, i) => (
                      <SkeletonRow key={i} index={i} />
                    ))}
                  </tbody>
                </table>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Pagination footer */}
        <div className="flex items-center justify-between gap-4 px-4 py-3 border-t border-brand-border bg-surface/40">
          <p className="text-xs text-muted-foreground tabular-nums min-w-[140px]">
            {filtered.length === 0
              ? "No results"
              : `Showing ${startRow}–${endRow} of ${filtered.length}`}
          </p>

          <div className="flex items-center gap-0.5">
            <button
              onClick={goPrev}
              disabled={!table.getCanPreviousPage()}
              className="h-8 px-2 flex items-center gap-0.5 rounded-md text-xs font-medium text-muted-foreground hover:bg-surface hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-150"
            >
              <ChevronLeft size={14} /> Prev
            </button>

            {pages.map((p, idx) =>
              p === "…" ? (
                <span key={`ellipsis-${idx}`} className="w-8 h-8 flex items-center justify-center text-xs text-muted-foreground">…</span>
              ) : (
                <button
                  key={p}
                  onClick={() => goToPage(p)}
                  className={`w-8 h-8 rounded-md text-xs font-medium flex items-center justify-center transition-all duration-150 ${
                    pageIndex === p
                      ? "bg-primary text-white shadow-sm"
                      : "text-muted-foreground hover:bg-surface hover:text-foreground"
                  }`}
                >
                  {p + 1}
                </button>
              )
            )}

            <button
              onClick={goNext}
              disabled={!table.getCanNextPage()}
              className="h-8 px-2 flex items-center gap-0.5 rounded-md text-xs font-medium text-muted-foreground hover:bg-surface hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-150"
            >
              Next <ChevronRight size={14} />
            </button>
          </div>

          <div className="flex items-center gap-2 min-w-[140px] justify-end">
            <span className="text-xs text-muted-foreground">Show</span>
            <div className="inline-flex rounded-lg border border-brand-border overflow-hidden divide-x divide-brand-border">
              {PAGE_SIZES.map((size) => (
                <button
                  key={size}
                  onClick={() => setPageSize(size)}
                  className={`px-2.5 py-1.5 text-xs font-medium transition-all duration-150 ${
                    pageSize === size
                      ? "bg-[#0D1B2A] text-white"
                      : "bg-white text-muted-foreground hover:bg-surface hover:text-foreground"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Mobile ── */}
      <div className="md:hidden flex flex-col gap-3 relative min-h-[280px]">
        <AnimatePresence>
          {!isInitialLoad && rows.length === 0 ? (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-10 text-muted-foreground text-sm">
              No products match your search.
            </motion.p>
          ) : !isInitialLoad ? (
            rows.map((row) => {
              const p = row.original
              return (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.22, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <Card className="border border-brand-border shadow-none">
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-[#0D1B2A] text-sm mb-1.5">{p.brandName}</h3>
                      <Badge variant="outline" className={`text-xs mb-2 ${categoryColors[p.category]}`}>
                        {p.category}
                      </Badge>
                      <p className="text-xs text-muted-foreground">{p.composition}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })
          ) : null}
        </AnimatePresence>

        <AnimatePresence>
          {isInitialLoad && (
            <motion.div
              key="mobile-skeleton"
              className="absolute inset-0 flex flex-col gap-3 z-10 bg-background"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.32, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {Array.from({ length: 4 }).map((_, i) => <SkeletonCard key={i} index={i} />)}
            </motion.div>
          )}
        </AnimatePresence>

        {!isInitialLoad && pageCount > 1 && (
          <div className="flex items-center justify-between pt-2">
            <button onClick={goPrev} disabled={!table.getCanPreviousPage()} className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-brand-border text-xs font-medium text-muted-foreground disabled:opacity-30 hover:border-primary hover:text-primary transition-colors">
              <ChevronLeft size={13} /> Prev
            </button>
            <span className="text-xs text-muted-foreground tabular-nums">Page {pageIndex + 1} of {pageCount}</span>
            <button onClick={goNext} disabled={!table.getCanNextPage()} className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-brand-border text-xs font-medium text-muted-foreground disabled:opacity-30 hover:border-primary hover:text-primary transition-colors">
              Next <ChevronRight size={13} />
            </button>
          </div>
        )}

        {!isInitialLoad && (
          <div className="flex items-center justify-center gap-2 pt-1">
            <span className="text-xs text-muted-foreground">Show:</span>
            <div className="inline-flex rounded-lg border border-brand-border overflow-hidden divide-x divide-brand-border">
              {PAGE_SIZES.map((size) => (
                <button key={size} onClick={() => setPageSize(size)}
                  className={`px-2.5 py-1.5 text-xs font-medium transition-all duration-150 ${pageSize === size ? "bg-[#0D1B2A] text-white" : "bg-white text-muted-foreground hover:bg-surface"}`}>
                  {size}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
