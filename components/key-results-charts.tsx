"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart"
import {
  kcSweepMassive,
  rq1WeightedF1ByMethod,
  table510LossLq,
  table53LabelQuality,
  table54Refinement,
  table55LlmImdb,
  table57EmbMassive,
  table58Abstain,
  table59LabelModelsMassive,
} from "@/lib/report-visualization-data"
import {
  Activity,
  BarChart3,
  Layers,
  LineChart as LineChartIcon,
  SlidersHorizontal,
  Sparkles,
} from "lucide-react"
import { Bar, BarChart, CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"

const chartCardShell =
  "group relative overflow-hidden border-2 border-border/60 bg-card/95 shadow-md transition-all duration-300 hover:border-primary/25 hover:shadow-xl"

const rq1Config = {
  alchemist: { label: "Alchemist", color: "var(--chart-3)" },
  datasculpt: { label: "DataSculpt", color: "var(--chart-4)" },
  tool: { label: "Coca", color: "var(--chart-1)" },
} satisfies ChartConfig

const rq2Config = {
  imdb: { label: "IMDb", color: "var(--chart-1)" },
  finance: { label: "Finance", color: "var(--chart-2)" },
  massive: { label: "Massive", color: "var(--chart-5)" },
} satisfies ChartConfig

const rq3RefineCompareConfig = {
  without: { label: "w/o refinement", color: "var(--chart-3)" },
  with: { label: "w/ refinement", color: "var(--chart-1)" },
} satisfies ChartConfig

const rq5KConfig = {
  coverage: { label: "Coverage", color: "var(--chart-1)" },
  lq: { label: "Label quality", color: "var(--chart-2)" },
} satisfies ChartConfig

export function KeyResultsCharts() {
  const rq3LqBars = table54Refinement.map((r) => ({
    dataset: r.dataset,
    without: r.noRefineLq,
    with: r.refineLq,
  }))
  const rq3E2eBars = table54Refinement.map((r) => ({
    dataset: r.dataset,
    without: r.noRefineE2e,
    with: r.refineE2e,
  }))

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <p className="text-center text-xs sm:text-sm text-muted-foreground max-w-3xl mx-auto px-2 leading-relaxed">
        Charts are built from the NCKH report:{" "}
        <span className="font-medium text-foreground">Table 5.3</span> (LF categories),{" "}
        <span className="font-medium text-foreground">Tables 5.4–5.5, 5.7–5.10</span> (refinement & intrinsic analysis),{" "}
        <span className="font-medium text-foreground">§5.4.4</span> (K<sub>c</sub> sweep anchors on Massive; intermediate
        points interpolated for plotting). Figure-level curves (e.g. β, α, ChemProt seeds) can be digitized later from
        the PDF.
      </p>

      {/* RQ1 — grouped wF1 */}
      <Card className={chartCardShell}>
        <CardHeader className="space-y-1 border-b border-border/50 bg-gradient-to-r from-violet-500/10 via-transparent to-cyan-500/10 pb-4">
          <div className="flex flex-wrap items-center gap-2">
            <Badge className="rounded-md border-0 bg-gradient-to-r from-violet-600 to-fuchsia-600 font-mono text-[10px] text-white">
              RQ1
            </Badge>
            <BarChart3 className="h-4 w-4 text-violet-600" />
            <CardTitle className="text-base md:text-lg">Weighted F1 vs. programmatic baselines</CardTitle>
          </div>
          <CardDescription>
            Same four-task subset as Table tab:rq1 (IMDb, Yelp, Finance, Massive). Bars = Alchemist, DataSculpt, Coca.
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-5">
          <ChartContainer config={rq1Config} className="aspect-auto h-[320px] w-full">
            <BarChart
              data={rq1WeightedF1ByMethod}
              margin={{ left: 8, right: 8, top: 16, bottom: 56 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} className="stroke-border/50" />
              <XAxis
                dataKey="dataset"
                tickLine={false}
                axisLine={false}
                tickMargin={10}
                className="text-xs font-medium"
              />
              <YAxis
                domain={[0.35, 0.95]}
                tickLine={false}
                axisLine={false}
                tickFormatter={(v) => v.toFixed(2)}
                className="text-xs"
                width={36}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <ChartLegend content={<ChartLegendContent />} />
              <Bar dataKey="alchemist" fill="var(--color-alchemist)" radius={[4, 4, 0, 0]} maxBarSize={28} />
              <Bar dataKey="datasculpt" fill="var(--color-datasculpt)" radius={[4, 4, 0, 0]} maxBarSize={28} />
              <Bar dataKey="tool" fill="var(--color-tool)" radius={[4, 4, 0, 0]} maxBarSize={28} />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* RQ2 — Table 5.3 */}
      <Card className={chartCardShell}>
        <CardHeader className="space-y-1 border-b border-border/50 bg-gradient-to-r from-sky-500/10 to-transparent pb-4">
          <div className="flex flex-wrap items-center gap-2">
            <Badge className="rounded-md border-0 bg-gradient-to-r from-sky-600 to-cyan-600 font-mono text-[10px] text-white">
              RQ2
            </Badge>
            <Layers className="h-4 w-4 text-sky-600" />
            <CardTitle className="text-base md:text-lg">LF category ablation (labeling quality)</CardTitle>
          </div>
          <CardDescription>
            Table 5.3 — Surface, Structural, Semantic, and full Coca on IMDb, Finance, and Massive (inter-type filtering
            off).
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-5">
          <ChartContainer config={rq2Config} className="aspect-auto h-[340px] w-full">
            <BarChart data={table53LabelQuality} margin={{ left: 8, right: 8, top: 12, bottom: 52 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} className="stroke-border/50" />
              <XAxis
                dataKey="config"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                interval={0}
                angle={-18}
                textAnchor="end"
                height={48}
                className="text-[10px] sm:text-xs"
              />
              <YAxis
                domain={[0.2, 0.88]}
                tickLine={false}
                axisLine={false}
                tickFormatter={(v) => v.toFixed(2)}
                className="text-xs"
                width={36}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <ChartLegend content={<ChartLegendContent />} />
              <Bar dataKey="imdb" fill="var(--color-imdb)" radius={[4, 4, 0, 0]} maxBarSize={22} />
              <Bar dataKey="finance" fill="var(--color-finance)" radius={[4, 4, 0, 0]} maxBarSize={22} />
              <Bar dataKey="massive" fill="var(--color-massive)" radius={[4, 4, 0, 0]} maxBarSize={22} />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className={chartCardShell}>
          <CardHeader className="space-y-1 border-b border-border/50 bg-gradient-to-r from-emerald-500/10 to-teal-500/5 pb-4">
            <div className="flex flex-wrap items-center gap-2">
              <Badge className="rounded-md border-0 bg-gradient-to-r from-emerald-600 to-teal-600 font-mono text-[10px] text-white">
                RQ3
              </Badge>
              <Activity className="h-4 w-4 text-emerald-600" />
              <CardTitle className="text-base md:text-lg">Refinement — labeling quality</CardTitle>
            </div>
            <CardDescription>Table 5.4: noise-aware refinement on/off (same datasets as in the report).</CardDescription>
          </CardHeader>
          <CardContent className="pt-4">
            <ChartContainer config={rq3RefineCompareConfig} className="aspect-auto h-[280px] w-full">
              <BarChart data={rq3LqBars} margin={{ left: 4, right: 8, top: 12, bottom: 8 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} className="stroke-border/50" />
                <XAxis dataKey="dataset" tickLine={false} axisLine={false} className="text-xs font-medium" />
                <YAxis
                  domain={[0.65, 0.92]}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(v) => v.toFixed(2)}
                  className="text-xs"
                  width={36}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
                <Bar dataKey="without" fill="var(--color-without)" radius={[6, 6, 0, 0]} maxBarSize={32} />
                <Bar dataKey="with" fill="var(--color-with)" radius={[6, 6, 0, 0]} maxBarSize={32} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card className={chartCardShell}>
          <CardHeader className="space-y-1 border-b border-border/50 bg-gradient-to-r from-teal-500/10 to-transparent pb-4">
            <div className="flex flex-wrap items-center gap-2">
              <Badge className="rounded-md border-0 bg-gradient-to-r from-emerald-600 to-teal-600 font-mono text-[10px] text-white">
                RQ3
              </Badge>
              <Sparkles className="h-4 w-4 text-teal-600" />
              <CardTitle className="text-base md:text-lg">Refinement — E2E performance</CardTitle>
            </div>
            <CardDescription>End-to-end F1 with and without the refinement phase (Table 5.4).</CardDescription>
          </CardHeader>
          <CardContent className="pt-4">
            <ChartContainer config={rq3RefineCompareConfig} className="aspect-auto h-[280px] w-full">
              <BarChart data={rq3E2eBars} margin={{ left: 4, right: 8, top: 12, bottom: 8 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} className="stroke-border/50" />
                <XAxis dataKey="dataset" tickLine={false} axisLine={false} className="text-xs font-medium" />
                <YAxis
                  domain={[0.52, 0.95]}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(v) => v.toFixed(2)}
                  className="text-xs"
                  width={36}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
                <Bar dataKey="without" fill="var(--color-without)" radius={[6, 6, 0, 0]} maxBarSize={32} />
                <Bar dataKey="with" fill="var(--color-with)" radius={[6, 6, 0, 0]} maxBarSize={32} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className={chartCardShell}>
          <CardHeader className="space-y-1 border-b border-border/50 bg-gradient-to-r from-orange-500/10 to-transparent pb-4">
            <div className="flex flex-wrap items-center gap-2">
              <Badge className="rounded-md border-0 bg-gradient-to-r from-orange-600 to-amber-600 font-mono text-[10px] text-white">
                RQ4
              </Badge>
              <SlidersHorizontal className="h-4 w-4 text-orange-600" />
              <CardTitle className="text-base md:text-lg">Surface LFs: LLM choice (IMDb)</CardTitle>
            </div>
            <CardDescription>Table 5.5 — labeling quality vs. LLM for surface LF generation.</CardDescription>
          </CardHeader>
          <CardContent className="pt-4">
            <ChartContainer
              config={{ lq: { label: "Label quality", color: "var(--chart-1)" } }}
              className="aspect-auto h-[300px] w-full"
            >
              <BarChart data={table55LlmImdb} layout="vertical" margin={{ left: 4, right: 16, top: 8, bottom: 8 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} className="stroke-border/50" />
                <XAxis type="number" domain={[0.75, 0.84]} tickLine={false} axisLine={false} className="text-xs" />
                <YAxis
                  type="category"
                  dataKey="llm"
                  tickLine={false}
                  axisLine={false}
                  width={108}
                  className="text-[10px] sm:text-xs"
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="lq" fill="var(--color-lq)" radius={[0, 8, 8, 0]} maxBarSize={22} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card className={chartCardShell}>
          <CardHeader className="space-y-1 border-b border-border/50 bg-gradient-to-r from-rose-500/10 to-amber-500/10 pb-4">
            <div className="flex flex-wrap items-center gap-2">
              <Badge className="rounded-md border-0 bg-gradient-to-r from-orange-600 to-rose-600 font-mono text-[10px] text-white">
                RQ4
              </Badge>
              <Layers className="h-4 w-4 text-rose-600" />
              <CardTitle className="text-base md:text-lg">Semantic LFs: encoders (Massive)</CardTitle>
            </div>
            <CardDescription>Table 5.7 — labeling quality by pretrained encoder.</CardDescription>
          </CardHeader>
          <CardContent className="pt-4">
            <ChartContainer
              config={{ lq: { label: "Label quality", color: "var(--chart-2)" } }}
              className="aspect-auto h-[300px] w-full"
            >
              <BarChart data={table57EmbMassive} layout="vertical" margin={{ left: 4, right: 16, top: 8, bottom: 8 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} className="stroke-border/50" />
                <XAxis type="number" domain={[0.7, 0.85]} tickLine={false} axisLine={false} className="text-xs" />
                <YAxis
                  type="category"
                  dataKey="model"
                  tickLine={false}
                  axisLine={false}
                  width={128}
                  className="text-[10px] sm:text-xs"
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="lq" fill="var(--color-lq)" radius={[0, 8, 8, 0]} maxBarSize={22} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className={chartCardShell}>
          <CardHeader className="space-y-1 border-b border-border/50 bg-gradient-to-r from-cyan-500/10 to-transparent pb-4">
            <Badge className="w-fit rounded-md border-0 bg-gradient-to-r from-cyan-600 to-blue-600 font-mono text-[10px] text-white">
              RQ4
            </Badge>
            <CardTitle className="text-base md:text-lg">Abstain allowance (label quality)</CardTitle>
            <CardDescription>Table 5.8 — non-abstain vs. abstain (same coverage = 1.0 in report).</CardDescription>
          </CardHeader>
          <CardContent className="pt-4">
            <ChartContainer
              config={{
                nonAbst: { label: "Non-abstain", color: "var(--chart-3)" },
                abst: { label: "Abstain", color: "var(--chart-1)" },
              }}
              className="aspect-auto h-[260px] w-full"
            >
              <BarChart
                data={table58Abstain.map((r) => ({
                  dataset: r.dataset,
                  nonAbst: r.nonAbst,
                  abst: r.abst,
                }))}
                margin={{ left: 4, right: 8, top: 12, bottom: 8 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} className="stroke-border/50" />
                <XAxis dataKey="dataset" tickLine={false} axisLine={false} className="text-xs" />
                <YAxis
                  domain={[0.58, 0.88]}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(v) => v.toFixed(2)}
                  className="text-xs"
                  width={36}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
                <Bar dataKey="nonAbst" fill="var(--color-nonAbst)" radius={[4, 4, 0, 0]} maxBarSize={28} />
                <Bar dataKey="abst" fill="var(--color-abst)" radius={[4, 4, 0, 0]} maxBarSize={28} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card className={chartCardShell}>
          <CardHeader className="space-y-1 border-b border-border/50 bg-gradient-to-r from-primary/12 to-fuchsia-500/8 pb-4">
            <Badge className="w-fit rounded-md border-0 bg-gradient-to-r from-primary to-fuchsia-600 font-mono text-[10px] text-white">
              RQ5
            </Badge>
            <CardTitle className="text-base md:text-lg">Label models (Massive)</CardTitle>
            <CardDescription>Table 5.9 — same LF set; coverage fixed across models.</CardDescription>
          </CardHeader>
          <CardContent className="pt-4">
            <ChartContainer
              config={{
                lq: { label: "Label quality", color: "var(--chart-1)" },
                e2e: { label: "E2E F1", color: "var(--chart-4)" },
              }}
              className="aspect-auto h-[280px] w-full"
            >
              <BarChart data={table59LabelModelsMassive} margin={{ left: 4, right: 8, top: 12, bottom: 40 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} className="stroke-border/50" />
                <XAxis
                  dataKey="model"
                  tickLine={false}
                  axisLine={false}
                  interval={0}
                  angle={-20}
                  textAnchor="end"
                  height={52}
                  className="text-[10px]"
                />
                <YAxis
                  domain={[0.45, 0.82]}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(v) => v.toFixed(2)}
                  className="text-xs"
                  width={36}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
                <Bar dataKey="lq" fill="var(--color-lq)" radius={[4, 4, 0, 0]} maxBarSize={20} />
                <Bar dataKey="e2e" fill="var(--color-e2e)" radius={[4, 4, 0, 0]} maxBarSize={20} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className={chartCardShell}>
          <CardHeader className="space-y-1 border-b border-border/50 bg-gradient-to-r from-indigo-500/10 to-transparent pb-4">
            <Badge className="w-fit rounded-md border-0 bg-gradient-to-r from-indigo-600 to-violet-600 font-mono text-[10px] text-white">
              RQ4 / RQ3
            </Badge>
            <CardTitle className="text-base md:text-lg">Refinement loss (label quality)</CardTitle>
            <CardDescription>Table 5.10 — L2, Hellinger, KL on three datasets.</CardDescription>
          </CardHeader>
          <CardContent className="pt-4">
            <ChartContainer
              config={{
                l2: { label: "L2", color: "var(--chart-3)" },
                hellinger: { label: "Hellinger", color: "var(--chart-4)" },
                kl: { label: "KL", color: "var(--chart-1)" },
              }}
              className="aspect-auto h-[280px] w-full"
            >
              <BarChart
                data={table510LossLq.map((r) => ({
                  dataset: r.dataset,
                  l2: r.l2,
                  hellinger: r.hellinger,
                  kl: r.kl,
                }))}
                margin={{ left: 4, right: 8, top: 12, bottom: 8 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} className="stroke-border/50" />
                <XAxis dataKey="dataset" tickLine={false} axisLine={false} className="text-xs font-medium" />
                <YAxis
                  domain={[0.65, 0.92]}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(v) => v.toFixed(2)}
                  className="text-xs"
                  width={36}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
                <Bar dataKey="l2" fill="var(--color-l2)" radius={[4, 4, 0, 0]} maxBarSize={22} />
                <Bar dataKey="hellinger" fill="var(--color-hellinger)" radius={[4, 4, 0, 0]} maxBarSize={22} />
                <Bar dataKey="kl" fill="var(--color-kl)" radius={[4, 4, 0, 0]} maxBarSize={22} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card className={chartCardShell}>
          <CardHeader className="space-y-1 border-b border-border/50 bg-gradient-to-r from-fuchsia-500/10 to-primary/10 pb-4">
            <Badge className="w-fit rounded-md border-0 bg-gradient-to-r from-fuchsia-600 to-pink-600 font-mono text-[10px] text-white">
              RQ5
            </Badge>
            <CardTitle className="text-base md:text-lg flex items-center gap-2">
              <LineChartIcon className="h-4 w-4" />
              LFs per category K<sub>c</sub> (Massive)
            </CardTitle>
            <CardDescription>
              §5.4.4 + Fig. 5.4 anchors: coverage 0.924→0.997 (5→40 LFs); label quality peaks at K=20 (0.746).
              Intermediate points interpolated for a smooth line.
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-4">
            <ChartContainer config={rq5KConfig} className="aspect-auto h-[300px] w-full">
              <LineChart data={kcSweepMassive} margin={{ left: 4, right: 8, top: 12, bottom: 8 }}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-border/50" />
                <XAxis
                  dataKey="k"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  className="text-xs"
                  name="K_c"
                />
                <YAxis
                  yAxisId="left"
                  domain={[0.88, 1.02]}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(v) => v.toFixed(2)}
                  className="text-xs"
                  width={40}
                />
                <YAxis
                  yAxisId="right"
                  orientation="right"
                  domain={[0.68, 0.78]}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(v) => v.toFixed(2)}
                  className="text-xs"
                  width={36}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
                <Line
                  yAxisId="left"
                  type="monotone"
                  dataKey="coverage"
                  stroke="var(--color-coverage)"
                  strokeWidth={3}
                  dot={{ r: 4, fill: "var(--background)", strokeWidth: 2 }}
                  name="Coverage"
                />
                <Line
                  yAxisId="right"
                  type="monotone"
                  dataKey="lq"
                  stroke="var(--color-lq)"
                  strokeWidth={3}
                  dot={{ r: 4, fill: "var(--background)", strokeWidth: 2 }}
                  name="Label quality"
                />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
