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
import {
  Target,
  Zap,
  Database,
  Brain,
  Sparkles,
  FlaskConical,
  Microscope,
  TrendingUp,
} from "lucide-react"
import { KeyResultsCharts } from "@/components/key-results-charts"
import { Rq1FullPerformanceTable } from "@/components/rq1-full-performance-table"
import {
  rq1DatasetLabels,
  rq1LabelingQuality,
  rq1LabelingQualityLiftPct,
  rq1LiftRowOrder,
} from "@/lib/rq1-performance-data"
import { SectionBridge } from "@/components/section-transition"

const contributions = [
  {
    icon: Brain,
    title: "End-to-End Framework",
    description:
      "A fully automated weak-supervision framework that transforms unlabeled data into both high-quality datasets and robust classifiers without manual intervention.",
    color: "from-primary to-rose-400",
    bgColor: "bg-primary/10",
  },
  {
    icon: Target,
    title: "Multi-Level LF Exploration",
    description:
      "Systematically explores Label Functions across surface, structural, and semantic levels to ensure diversity and reliability of supervision signals.",
    color: "from-sky-500 to-cyan-500",
    bgColor: "bg-sky-100/80",
  },
  {
    icon: Zap,
    title: "Noise-Aware Refinement",
    description:
      "Employs a noise-aware DNN and iterative soft-relabeling to actively correct aggregated weak labels, ensuring robust learning under severe noise.",
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-orange-50",
  },
  {
    icon: Database,
    title: "Extensive Validation",
    description:
      "Evaluated on 11 classification datasets across diverse domains, consistently outperforming state-of-the-art automated labeling approaches.",
    color: "from-violet-500 to-fuchsia-500",
    bgColor: "bg-violet-50",
  },
]

/** Research questions + metrics only (no long prose). */
const researchQuestions = [
  {
    id: "RQ1",
    question: "How does Coca compare to state-of-the-art automated LF generation end-to-end?",
    metrics: ["11 datasets", "WHM · F1 · coverage", "E2E classifier", "vs. Alchemist / DataSculpt / graph LFs"],
  },
  {
    id: "RQ2",
    question: "How much do surface, structural, and semantic label functions each contribute?",
    metrics: ["Single-category ablations", "Pairwise combinations", "Full tri-level stack", "Table 5.3-style grid"],
  },
  {
    id: "RQ3",
    question: "Does noise-aware refinement improve weak labels after aggregation?",
    metrics: ["+refine vs. −refine", "Transition matrix", "Soft relabel rounds", "Label noise WHM"],
  },
  {
    id: "RQ4",
    question: "Which intrinsic design choices most affect labeling quality?",
    metrics: ["LLM for surface LFs", "Classifier for structural", "Embeddings for semantic", "Abstain β", "LF filter α"],
  },
  {
    id: "RQ5",
    question: "How sensitive is the pipeline to hyperparameters and data regime?",
    metrics: ["Seed ratio |Dl|/|D|", "LFs per category K_c", "Label model choice", "Refinement loss"],
  },
]

const sectionDecor = (
  <div className="absolute inset-0 -z-10">
    <div className="absolute top-10 right-20 w-4 h-4 bg-violet-400/35 rounded-full animate-bounce" style={{ animationDelay: "0s" }} />
    <div className="absolute bottom-20 left-10 w-3 h-3 bg-amber-400/45 rounded-full animate-bounce" style={{ animationDelay: "0.7s" }} />
    <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-sky-400/50 rounded-full animate-bounce" style={{ animationDelay: "1.4s" }} />
    <div className="absolute top-1/2 right-1/4 w-2.5 h-2.5 bg-primary/30 rounded-full animate-bounce" style={{ animationDelay: "0.3s" }} />
  </div>
)

export function KeyResultsSection() {
  return (
    <>
      <section
        id="experiments"
        className="relative overflow-hidden bg-background py-16 md:py-24 scroll-mt-24"
      >
        {sectionDecor}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <Badge variant="secondary" className="mb-3 rounded-full px-4 py-1.5 border-2 border-secondary">
              <FlaskConical className="h-3.5 w-3.5 mr-1.5" />
              Experiments
              <Microscope className="h-3.5 w-3.5 ml-1.5" />
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground text-balance">
              Research questions & metrics
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto text-sm mt-2">
              Each row states what we measure; detailed protocols are in the report (§4–5).
            </p>
          </div>
          <div className="max-w-5xl mx-auto space-y-4">
            {researchQuestions.map((rq) => (
              <Card
                key={rq.id}
                className="border-2 border-violet-200/30 dark:border-violet-900/40 bg-card/80 backdrop-blur-sm hover:shadow-md transition-shadow"
              >
                <CardContent className="py-4 px-4 sm:px-5">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <Badge className="rounded-md font-mono text-xs bg-gradient-to-r from-violet-600 to-fuchsia-600 border-0">
                      {rq.id}
                    </Badge>
                  </div>
                  <p className="text-sm sm:text-base text-foreground font-medium leading-snug mb-3">{rq.question}</p>
                  <div className="flex flex-wrap gap-2">
                    {rq.metrics.map((m) => (
                      <Badge key={m} variant="secondary" className="rounded-full text-xs font-normal px-3 py-1">
                        {m}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <SectionBridge from="base" to="elevated" />

      <section
        id="results"
        className="relative overflow-hidden bg-section-elevated py-16 md:py-24 scroll-mt-24"
      >
        {sectionDecor}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 rounded-full px-4 py-1.5 border-2 border-secondary">
              <Sparkles className="h-3.5 w-3.5 mr-1.5" />
              Empirical Results
              <Sparkles className="h-3.5 w-3.5 ml-1.5" />
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Tables & figures across RQ1–RQ5
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
              <span className="font-medium text-foreground">RQ1</span> tables match{" "}
              <span className="font-medium text-foreground">Table tab:rq1</span> in the NCKH report.{" "}
              <span className="font-medium text-foreground">Lift</span> (labeling quality) ={" "}
              <span className="font-medium text-foreground">((Coca − max(Alchemist, DataSculpt)) / max(·)) × 100</span>.
              Charts below are drawn from{" "}
              <span className="font-medium text-foreground">Tables 5.3–5.10</span> and §5.4–5.5 of the same PDF. Dataset
              inventory:{" "}
              <a href="#datasets" className="font-medium text-primary underline-offset-4 hover:underline">
                Table 4.1
              </a>
              .
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-10 mb-16">
            <Card className="border-2 border-violet-200/40 dark:border-violet-900/45 shadow-lg overflow-hidden">
              <CardHeader className="pb-2 bg-gradient-to-r from-card via-violet-500/10 to-fuchsia-500/8 border-b border-border/60">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <Badge className="rounded-md border-0 bg-gradient-to-r from-violet-600 to-fuchsia-600 font-mono text-[10px] text-white">
                    RQ1
                  </Badge>
                </div>
                <CardTitle className="text-lg md:text-xl flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-violet-600" />
                  Labeling quality & lift vs. programmatic baselines
                </CardTitle>
                <CardDescription>
                  Values from Performance Comparison (Table tab:rq1). Lift compares Coca to the stronger of Alchemist and
                  DataSculpt on <span className="font-medium text-foreground">labeling quality</span> (same row as in the
                  paper).
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6 px-2 sm:px-6 overflow-x-auto">
                <Table>
                  <TableCaption className="text-xs sm:text-sm text-left max-w-3xl">
                    Programmatic weak supervision baselines only in the lift denominator; Snuba / few-shot / label
                    propagation omitted for this column by design.
                  </TableCaption>
                  <TableHeader>
                    <TableRow className="hover:bg-transparent border-b-2">
                      <TableHead className="font-semibold">Dataset</TableHead>
                      <TableHead className="font-semibold text-right">Alchemist</TableHead>
                      <TableHead className="font-semibold text-right">DataSculpt</TableHead>
                      <TableHead className="font-semibold text-right text-emerald-700 dark:text-emerald-400">Coca</TableHead>
                      <TableHead className="font-semibold text-right min-w-[5.5rem]">Lift</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {rq1LiftRowOrder.map((key) => {
                      const q = rq1LabelingQuality[key]
                      return (
                        <TableRow key={key} className="border-border/60">
                          <TableCell className="font-medium text-foreground">{rq1DatasetLabels[key]}</TableCell>
                          <TableCell className="text-right tabular-nums text-muted-foreground">
                            {q.alchemist.toFixed(3)}
                          </TableCell>
                          <TableCell className="text-right tabular-nums text-muted-foreground">
                            {q.datasculpt.toFixed(3)}
                          </TableCell>
                          <TableCell className="text-right tabular-nums font-bold text-emerald-700 dark:text-emerald-400">
                            {q.tool.toFixed(3)}
                          </TableCell>
                          <TableCell className="text-right tabular-nums font-semibold text-emerald-700 dark:text-emerald-400">
                            {rq1LabelingQualityLiftPct(q.alchemist, q.datasculpt, q.tool)}
                          </TableCell>
                        </TableRow>
                      )
                    })}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/10 shadow-lg overflow-hidden">
              <CardHeader className="pb-2 bg-gradient-to-r from-card via-primary/5 to-card border-b border-border/60">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <Badge className="rounded-md border-0 bg-gradient-to-r from-violet-600 to-fuchsia-600 font-mono text-[10px] text-white">
                    RQ1
                  </Badge>
                </div>
                <CardTitle className="text-lg md:text-xl">Full labeling performance comparison</CardTitle>
                <CardDescription>
                  Binary (IMDb, Yelp) and multi-class (Finance, Massive): # LFs, coverage, weighted F1, labeling quality,
                  E2E — same cells as in the thesis table. Scroll horizontally and vertically; metric and method columns
                  stay pinned.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-2">
                <Rq1FullPerformanceTable />
              </CardContent>
            </Card>

            <KeyResultsCharts />
          </div>
        </div>
      </section>

      <SectionBridge from="elevated" to="base" />

      <section
        id="contributions"
        className="relative overflow-hidden bg-background py-16 md:py-24 scroll-mt-24"
      >
        {sectionDecor}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Research contributions</h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm mt-2">
              Capabilities described in the report that support the empirical evaluation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-0 max-w-5xl mx-auto">
            {contributions.map((item, index) => (
              <Card
                key={index}
                className="group border-2 border-transparent hover:border-primary/20 hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <CardContent className="pt-6 relative">
                  <div className={`absolute top-0 right-0 w-24 h-24 ${item.bgColor} rounded-bl-full opacity-50`} />
                  <div className="flex gap-4 relative">
                    <div className="flex-shrink-0">
                      <div
                        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <item.icon className="h-7 w-7 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-2 text-lg">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
