/**
 * Numeric series digitized from NCKH report (Ch. 5) for web charts.
 * PDF: _NCKH_26__data_labeling_and_cleaning.pdf — Tables 5.3–5.12, §5.4–5.5.
 */

/** Table 5.3 — LF category ablation (label quality), three datasets. */
export const table53LabelQuality = [
  { config: "Surface", imdb: 0.761, finance: 0.615, massive: 0.637 },
  { config: "Structural", imdb: 0.801, finance: 0.511, massive: 0.631 },
  { config: "Semantic", imdb: 0.345, finance: 0.288, massive: 0.346 },
  { config: "Full (Coca)", imdb: 0.827, finance: 0.63, massive: 0.746 },
]

/** Table 5.4 — Refinement on/off (label quality & E2E). */
export const table54Refinement = [
  { dataset: "IMDb", noRefineLq: 0.747, refineLq: 0.796, noRefineE2e: 0.738, refineE2e: 0.79 },
  { dataset: "Massive", noRefineLq: 0.68, refineLq: 0.683, noRefineE2e: 0.575, refineE2e: 0.688 },
  { dataset: "Yelp", noRefineLq: 0.865, refineLq: 0.884, noRefineE2e: 0.853, refineE2e: 0.91 },
]

/** Table 5.5 — LLM choice, IMDb. */
export const table55LlmImdb = [
  { llm: "GPT-5", lq: 0.828, e2e: 0.756 },
  { llm: "GPT-4.1", lq: 0.827, e2e: 0.748 },
  { llm: "Gemini-2.5-Flash", lq: 0.814, e2e: 0.734 },
  { llm: "Qwen-2.5-7B", lq: 0.788, e2e: 0.732 },
  { llm: "Gemma3-4B", lq: 0.796, e2e: 0.717 },
]

/** Table 5.7 — Semantic embeddings, Massive. */
export const table57EmbMassive = [
  { model: "BERT-base", lq: 0.746, e2e: 0.598 },
  { model: "BGE-base-en-v1.5", lq: 0.833, e2e: 0.636 },
  { model: "BART-base", lq: 0.731, e2e: 0.605 },
  { model: "Multilingual-E5", lq: 0.817, e2e: 0.621 },
]

/** Table 5.8 — Abstain allowance (label quality lift, absolute pp reported in text). */
export const table58Abstain = [
  { dataset: "YouTube", nonAbst: 0.803, abst: 0.848 },
  { dataset: "AGNews", nonAbst: 0.817, abst: 0.855 },
  { dataset: "Finance", nonAbst: 0.599, abst: 0.623 },
]

/** Table 5.10 — Refinement loss (label quality). */
export const table510LossLq = [
  { dataset: "IMDb", l2: 0.797, hellinger: 0.788, kl: 0.796 },
  { dataset: "Massive", l2: 0.671, hellinger: 0.673, kl: 0.683 },
  { dataset: "Yelp", l2: 0.876, hellinger: 0.887, kl: 0.844 },
]

/** Table 5.9 — Label models on Massive (label quality). */
export const table59LabelModelsMassive = [
  { model: "MultiVote", lq: 0.778, e2e: 0.618 },
  { model: "W. MultiVote", lq: 0.752, e2e: 0.602 },
  { model: "DawidSkene", lq: 0.751, e2e: 0.609 },
  { model: "FlyingSquid", lq: 0.731, e2e: 0.49 },
  { model: "Snorkel", lq: 0.773, e2e: 0.607 },
]

/**
 * §5.4.4 — LFs per category K_c on Massive. Anchors from report prose; middle points linearly
 * interpolated for visualization only (exact curve in Fig. 5.4).
 */
export const kcSweepMassive = [
  { k: 5, coverage: 0.924, lq: 0.72 },
  { k: 10, coverage: 0.96, lq: 0.735 },
  { k: 15, coverage: 0.978, lq: 0.742 },
  { k: 20, coverage: 0.988, lq: 0.746 },
  { k: 30, coverage: 0.993, lq: 0.738 },
  { k: 40, coverage: 0.997, lq: 0.728 },
]

/** RQ1 — Weighted F1 (Table tab:rq1 / single-label excerpt). */
export const rq1WeightedF1ByMethod = [
  { dataset: "IMDb", alchemist: 0.781, datasculpt: 0.74, tool: 0.796 },
  { dataset: "Yelp", alchemist: 0.829, datasculpt: 0.394, tool: 0.884 },
  { dataset: "Finance", alchemist: 0.57, datasculpt: 0.442, tool: 0.639 },
  { dataset: "Massive", alchemist: 0.632, datasculpt: 0.411, tool: 0.671 },
]
