"use client"

import { Fragment } from "react"
import {
  formatRq1Cell,
  rq1FullTableBlocks,
  rq1SolutionLabels,
} from "@/lib/rq1-performance-data"
import { cn } from "@/lib/utils"

export function Rq1FullPerformanceTable() {
  return (
    <div className="relative rounded-2xl border border-border/70 bg-card/50 shadow-md ring-1 ring-black/5 dark:ring-white/10">
      <div className="max-h-[min(78vh,920px)] overflow-auto overscroll-contain">
        <table className="w-full min-w-[720px] border-collapse text-sm">
          <thead className="sticky top-0 z-30 border-b-2 border-border bg-muted/95 backdrop-blur-md supports-[backdrop-filter]:bg-muted/80">
            <tr>
              <th
                scope="col"
                className="sticky left-0 z-40 min-w-[9.5rem] border-b border-r border-border/80 bg-muted/95 px-3 py-3 text-left text-xs font-bold uppercase tracking-wide text-foreground shadow-[4px_0_12px_-6px_rgba(0,0,0,0.18)]"
              >
                Metric
              </th>
              <th
                scope="col"
                className="sticky left-[9.5rem] z-40 min-w-[8.5rem] border-b border-r border-border/80 bg-muted/95 px-3 py-3 text-left text-xs font-bold uppercase tracking-wide text-foreground shadow-[4px_0_12px_-6px_rgba(0,0,0,0.12)]"
              >
                Method
              </th>
              {(["IMDb", "Yelp", "Finance", "Massive"] as const).map((h) => (
                <th
                  key={h}
                  scope="col"
                  className="border-b border-border/80 px-3 py-3 text-right text-xs font-bold uppercase tracking-wide text-muted-foreground"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rq1FullTableBlocks.map((block, blockIdx) => (
              <Fragment key={block.metric}>
                {block.rows.map((row, i) => (
                  <tr
                    key={`${block.metric}-${row.solution}`}
                    className={cn(
                      "border-b border-border/50 transition-colors hover:bg-muted/40",
                      blockIdx % 2 === 0 ? "bg-card/30" : "bg-card/60",
                      row.solution === "tool" && "bg-emerald-500/[0.07] hover:bg-emerald-500/10",
                    )}
                  >
                    {i === 0 ? (
                      <th
                        scope="rowgroup"
                        rowSpan={block.rows.length}
                        className="sticky left-0 z-20 border-r border-border/80 bg-gradient-to-b from-muted/90 to-muted/70 px-3 py-2 align-top text-left text-xs font-bold leading-snug text-foreground shadow-[4px_0_12px_-6px_rgba(0,0,0,0.15)]"
                      >
                        <span className="block max-w-[9rem]">{block.metric}</span>
                      </th>
                    ) : null}
                    <th
                      scope="row"
                      className={cn(
                        "sticky left-[9.5rem] z-20 border-r border-border/80 px-3 py-2 text-left text-xs font-medium shadow-[4px_0_12px_-6px_rgba(0,0,0,0.1)]",
                        row.solution === "tool"
                          ? "bg-emerald-500/15 text-emerald-900 dark:text-emerald-200"
                          : "bg-background/90 text-foreground",
                      )}
                    >
                      <span className="flex flex-wrap items-center gap-1.5">{rq1SolutionLabels[row.solution]}</span>
                    </th>
                    {row.values.map((v, j) => (
                      <td
                        key={j}
                        className={cn(
                          "px-3 py-2 text-right tabular-nums tracking-tight",
                          row.solution === "tool"
                            ? "font-semibold text-emerald-800 dark:text-emerald-300"
                            : "text-muted-foreground",
                        )}
                      >
                        {formatRq1Cell(block.metric, v)}
                      </td>
                    ))}
                  </tr>
                ))}
                {blockIdx < rq1FullTableBlocks.length - 1 ? (
                  <tr aria-hidden className="h-0">
                    <td colSpan={6} className="h-2 border-0 bg-gradient-to-r from-transparent via-primary/15 to-transparent p-0" />
                  </tr>
                ) : null}
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>
      <p className="border-t border-border/60 bg-muted/30 px-4 py-2 text-[11px] leading-relaxed text-muted-foreground">
        Sticky headers and first columns keep metric and method visible while scrolling. Values match Table{" "}
        <span className="font-medium text-foreground">tab:rq1</span> in the thesis (binary + multi-class subset).
      </p>
    </div>
  )
}
