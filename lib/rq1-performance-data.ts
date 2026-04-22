/** Chapter 5 — Table `tab:rq1`: binary (IMDb, Yelp) & multi-class (Finance, Massive). Values from the NCKH report. */

export type Rq1DatasetKey = "imdb" | "yelp" | "finance" | "massive"

export const rq1DatasetLabels: Record<Rq1DatasetKey, string> = {
  imdb: "IMDb",
  yelp: "Yelp",
  finance: "Finance",
  massive: "Massive",
}

/** Labeling quality row — used for RQ1 lift vs programmatic baselines. */
export const rq1LabelingQuality = {
  imdb: { alchemist: 0.767, datasculpt: 0.71, tool: 0.796 },
  yelp: { alchemist: 0.769, datasculpt: 0.371, tool: 0.884 },
  finance: { alchemist: 0.57, datasculpt: 0.275, tool: 0.639 },
  massive: { alchemist: 0.591, datasculpt: 0.287, tool: 0.671 },
} as const

export function rq1LabelingQualityLiftPct(alchemist: number, datasculpt: number, tool: number) {
  const baseline = Math.max(alchemist, datasculpt)
  if (baseline <= 0) return "—"
  const pct = ((tool - baseline) / baseline) * 100
  const rounded = Math.round(pct * 10) / 10
  return rounded > 0 ? `+${rounded}%` : `${rounded}%`
}

export type Rq1SolutionId = "alchemist" | "datasculpt" | "fewshot" | "labelprop" | "snuba" | "tool"

export const rq1SolutionLabels: Record<Rq1SolutionId, string> = {
  alchemist: "Alchemist",
  datasculpt: "DataSculpt",
  fewshot: "Few-shot",
  labelprop: "Label propagation",
  snuba: "Snuba",
  tool: "Coca",
}

type Cell = number | null // null → em dash in UI

/** Order: IMDb, Yelp, Finance, Massive */
export const rq1FullTableBlocks: {
  metric: string
  rows: { solution: Rq1SolutionId; values: [Cell, Cell, Cell, Cell] }[]
}[] = [
  {
    metric: "# LFs",
    rows: [
      { solution: "alchemist", values: [15, 15, 15, 15] },
      { solution: "datasculpt", values: [90, 78, 185, 131] },
      { solution: "fewshot", values: [null, null, null, null] },
      { solution: "labelprop", values: [null, null, null, null] },
      { solution: "snuba", values: [25, 25, null, null] },
      { solution: "tool", values: [60, 60, 58, 60] },
    ],
  },
  {
    metric: "Coverage",
    rows: [
      { solution: "alchemist", values: [0.982, 0.928, 1.0, 0.935] },
      { solution: "datasculpt", values: [0.96, 0.941, 0.623, 0.698] },
      { solution: "fewshot", values: [1, 1, 1, 1] },
      { solution: "labelprop", values: [1, 1, 1, 1] },
      { solution: "snuba", values: [0.605, 0.65, null, null] },
      { solution: "tool", values: [1, 1, 1, 0.945] },
    ],
  },
  {
    metric: "Weighted F1",
    rows: [
      { solution: "alchemist", values: [0.781, 0.829, 0.57, 0.632] },
      { solution: "datasculpt", values: [0.74, 0.394, 0.442, 0.411] },
      { solution: "fewshot", values: [0.715, 0.783, 0.478, 0.532] },
      { solution: "labelprop", values: [0.568, 0.633, 0.59, 0.314] },
      { solution: "snuba", values: [0.708, 0.779, null, null] },
      { solution: "tool", values: [0.796, 0.884, 0.639, 0.671] },
    ],
  },
  {
    metric: "Labeling quality",
    rows: [
      { solution: "alchemist", values: [0.767, 0.769, 0.57, 0.591] },
      { solution: "datasculpt", values: [0.71, 0.371, 0.275, 0.287] },
      { solution: "fewshot", values: [0.715, 0.783, 0.478, 0.532] },
      { solution: "labelprop", values: [0.568, 0.633, 0.59, 0.314] },
      { solution: "snuba", values: [0.428, 0.506, null, null] },
      { solution: "tool", values: [0.796, 0.884, 0.639, 0.671] },
    ],
  },
  {
    metric: "E2E performance",
    rows: [
      { solution: "alchemist", values: [0.729, 0.841, 0.544, 0.483] },
      { solution: "datasculpt", values: [0.738, 0.366, 0.491, 0.325] },
      { solution: "fewshot", values: [0.724, 0.817, 0.504, 0.533] },
      { solution: "labelprop", values: [0.559, 0.643, 0.583, 0.307] },
      { solution: "snuba", values: [0.697, 0.773, null, null] },
      { solution: "tool", values: [0.79, 0.91, 0.638, 0.688] },
    ],
  },
]

export const rq1LiftRowOrder: Rq1DatasetKey[] = ["imdb", "yelp", "finance", "massive"]

export function formatRq1Cell(metric: string, value: Cell): string {
  if (value === null) return "—"
  if (metric === "# LFs") return String(value)
  return value.toFixed(3)
}
