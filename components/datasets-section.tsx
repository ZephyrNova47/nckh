"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { benchmarkTable41 } from "@/lib/benchmark-datasets"
import { Database, Sparkles } from "lucide-react"

function fmt(n: number) {
  return n.toLocaleString("en-US")
}

export function DatasetsSection() {
  return (
    <section
      id="datasets"
      className="relative overflow-hidden bg-background py-16 md:py-24 scroll-mt-24"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-16 right-16 w-3 h-3 rounded-full bg-teal-400/35 animate-bounce" style={{ animationDelay: "0s" }} />
        <div className="absolute bottom-24 left-12 w-2.5 h-2.5 rounded-full bg-cyan-400/40 animate-bounce" style={{ animationDelay: "0.6s" }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 rounded-full px-4 py-1.5 border-2 border-secondary">
            <Sparkles className="h-3.5 w-3.5 mr-1.5" />
            Datasets
            <Sparkles className="h-3.5 w-3.5 ml-1.5" />
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Benchmarks (Table 4.1)
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-balance text-sm sm:text-base">
            Eleven text classification datasets exactly as defined in the NCKH report (§4.1). Figures below match the
            paper; task descriptions and corpus samples are in the report, not duplicated here.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-10">
          <Card className="border-2 border-primary/10 shadow-lg overflow-hidden">
            <CardHeader className="pb-2 bg-gradient-to-r from-card via-primary/5 to-card border-b border-border/60">
              <CardTitle className="text-lg md:text-xl flex items-center gap-2">
                <Database className="h-5 w-5 text-primary" />
                Table 4.1: Dataset overview
              </CardTitle>
              <CardDescription>
                Unlabeled pool <span className="font-mono text-xs">|D|</span>, seed labels{" "}
                <span className="font-mono text-xs">|Dl|</span>, and held-out test{" "}
                <span className="font-mono text-xs">|Dtest|</span> for each benchmark.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6 px-2 sm:px-6">
              <Table>
                <TableCaption className="text-xs sm:text-sm">
                  Eleven datasets spanning binary, multi-class, and specialized domains (NCKH report §4.1).
                </TableCaption>
                <TableHeader>
                  <TableRow className="hover:bg-transparent border-b-2">
                    <TableHead className="font-semibold">Dataset</TableHead>
                    <TableHead className="font-semibold text-right"># classes</TableHead>
                    <TableHead className="font-semibold text-right">
                      <span className="font-mono text-[0.8rem] sm:text-sm">|D|</span>
                    </TableHead>
                    <TableHead className="font-semibold text-right">
                      <span className="font-mono text-[0.8rem] sm:text-sm">|Dl|</span>
                    </TableHead>
                    <TableHead className="font-semibold text-right">
                      <span className="font-mono text-[0.8rem] sm:text-sm">|Dtest|</span>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {benchmarkTable41.map((row) => (
                    <TableRow key={row.name} className="border-border/60">
                      <TableCell className="font-medium text-foreground">{row.name}</TableCell>
                      <TableCell className="text-right tabular-nums font-semibold text-foreground">
                        {row.classes}
                      </TableCell>
                      <TableCell className="text-right tabular-nums text-muted-foreground">{fmt(row.d)}</TableCell>
                      <TableCell className="text-right tabular-nums text-muted-foreground">{fmt(row.dl)}</TableCell>
                      <TableCell className="text-right tabular-nums text-muted-foreground">{fmt(row.dtest)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
