import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  TrendingUp,
  Target,
  Zap,
  Database,
  Brain,
  Sparkles,
  Heart,
  Star,
  BarChart3,
  FlaskConical,
} from "lucide-react"

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

const metrics = [
  {
    value: "98.9%",
    label: "Label Coverage",
    description: "Near-complete coverage vs. 78.6-95.1% from baselines",
    improvement: "Highest",
    icon: Star,
    color: "text-amber-600",
    bgColor: "bg-amber-100",
  },
  {
    value: "+138%",
    label: "Label Quality",
    description: "Relative improvement over prior LF generation methods",
    improvement: "18-138%",
    icon: Heart,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    value: "+173%",
    label: "Weighted F1",
    description: "Maximum gain in downstream model performance",
    improvement: "15-173%",
    icon: Zap,
    color: "text-emerald-600",
    bgColor: "bg-emerald-100",
  },
  {
    value: "11",
    label: "Datasets",
    description: "Binary, multi-class, and multi-label benchmarks",
    improvement: "Diverse",
    icon: Database,
    color: "text-secondary-foreground",
    bgColor: "bg-secondary/30",
  },
]

const experimentSections = [
  {
    icon: BarChart3,
    badge: "RQ1 · Benchmarks",
    title: "End-to-end performance comparison",
    description:
      "We evaluated the full Coca pipeline on eleven text classification benchmarks (binary, multi-class, and multi-label), comparing against state-of-the-art automated label-function generation methods.",
    bullets: [
      "Same end-to-end protocol for every dataset: weak labels from the pipeline, then train a downstream classifier and report task metrics on held-out gold labels.",
      "Coca reaches near-complete coverage (98.9% on average) while prior automated LF methods plateau between roughly 78.6% and 95.1%.",
      "Higher weak-label quality translates directly into downstream gains: up to ~173% relative improvement in weighted F1 versus the strongest baselines, with large margins on challenging tasks such as ChemProt and Massive.",
    ],
    accent: "from-sky-500 to-indigo-600",
    light: "bg-sky-100/80",
  },
  {
    icon: FlaskConical,
    badge: "RQ2–RQ5 · Ablations",
    title: "Controlled studies on each pipeline stage",
    description:
      "Beyond aggregate scores, we isolate the value of multi-level LFs, the noise-aware refinement stage, and practical design choices that affect reliability and coverage.",
    bullets: [
      "LF categories: systematically enable surface, structural, and semantic LFs alone or in combination to quantify how each representation level contributes to labeling quality.",
      "Refinement phase: compare Coca with and without noise-aware correction to show that fixing systematically biased consensus labels is critical when heuristics agree-but-are-wrong.",
      "Intrinsic analyses span LLM and embedding choices for LF synthesis, abstain policies, exploitation filters, label-model variants, refinement losses, and soft-relabeling strategies—mirroring the sensitivity studies in the full report.",
    ],
    accent: "from-violet-500 to-fuchsia-600",
    light: "bg-violet-50",
  },
]

export function KeyResultsSection() {
  return (
    <section
      id="results"
      className="relative overflow-hidden bg-background py-16 md:py-24 scroll-mt-24"
    >
      {/* Cute decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 right-20 w-4 h-4 bg-violet-400/35 rounded-full animate-bounce" style={{ animationDelay: "0s" }} />
        <div className="absolute bottom-20 left-10 w-3 h-3 bg-amber-400/45 rounded-full animate-bounce" style={{ animationDelay: "0.7s" }} />
        <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-sky-400/50 rounded-full animate-bounce" style={{ animationDelay: "1.4s" }} />
        <div className="absolute top-1/2 right-1/4 w-2.5 h-2.5 bg-primary/30 rounded-full animate-bounce" style={{ animationDelay: "0.3s" }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 rounded-full px-4 py-1.5 border-2 border-secondary">
            <Sparkles className="h-3.5 w-3.5 mr-1.5" />
            Key Results
            <Sparkles className="h-3.5 w-3.5 ml-1.5" />
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Research Contributions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
            The framework addresses critical limitations in existing programmatic labeling pipelines
            and demonstrates substantial improvements across multiple benchmarks.
          </p>
        </div>

        {/* Experimental validation — placed early so it appears without scrolling past all contribution cards */}
        <div id="experiments" className="mb-16 max-w-5xl mx-auto scroll-mt-24">
          <div className="text-center mb-8">
            <Badge
              variant="secondary"
              className="mb-3 rounded-full px-4 py-1.5 border-2 border-secondary"
            >
              <FlaskConical className="h-3.5 w-3.5 mr-1.5" />
              Experimental validation
              <BarChart3 className="h-3.5 w-3.5 ml-1.5" />
            </Badge>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground text-balance">
              How we demonstrate pipeline effectiveness
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto text-balance text-sm mt-2">
              The evaluation mirrors the empirical methodology in our NCKH report: large-scale
              comparisons plus targeted ablations that attribute gains to specific stages of the
              system.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {experimentSections.map((block) => (
              <Card
                key={block.title}
                className="group border-2 border-transparent hover:border-primary/20 hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <CardContent className="pt-6 pb-6 relative">
                  <div
                    className={`absolute top-0 right-0 w-32 h-32 ${block.light} rounded-bl-full opacity-60`}
                  />
                  <div className="relative space-y-4">
                    <div className="flex items-start gap-4">
                      <div
                        className={`flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br ${block.accent} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <block.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <Badge variant="outline" className="mb-2 text-[10px] uppercase tracking-wide">
                          {block.badge}
                        </Badge>
                        <h4 className="font-bold text-foreground text-lg leading-snug">
                          {block.title}
                        </h4>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{block.description}</p>
                    <ul className="space-y-2.5 text-sm text-muted-foreground">
                      {block.bullets.map((line) => (
                        <li key={line} className="flex gap-2">
                          <span className="text-primary font-bold flex-shrink-0">·</span>
                          <span className="leading-relaxed">{line}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contributions - Cute Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-16 max-w-5xl mx-auto">
          {contributions.map((item, index) => (
            <Card key={index} className="group border-2 border-transparent hover:border-primary/20 hover:shadow-xl transition-all duration-300 overflow-hidden">
              <CardContent className="pt-6 relative">
                {/* Background decoration */}
                <div className={`absolute top-0 right-0 w-24 h-24 ${item.bgColor} rounded-bl-full opacity-50`} />
                
                <div className="flex gap-4 relative">
                  <div className="flex-shrink-0">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="h-7 w-7 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2 text-lg">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Metrics Grid - Cute Style */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {metrics.map((metric, index) => (
            <Card key={index} className="text-center border-2 border-transparent hover:border-primary/20 hover:shadow-xl transition-all duration-300 group overflow-hidden">
              <CardContent className="pt-6 pb-6 relative">
                {/* Icon decoration */}
                <div className={`absolute top-2 right-2 w-8 h-8 ${metric.bgColor} rounded-full flex items-center justify-center opacity-60 group-hover:scale-110 transition-transform`}>
                  <metric.icon className={`h-4 w-4 ${metric.color}`} />
                </div>
                
                <div className={`text-4xl md:text-5xl font-bold ${metric.color} mb-2`}>
                  {metric.value}
                </div>
                <div className="font-semibold text-foreground mb-2">{metric.label}</div>
                <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                  {metric.description}
                </p>
                <Badge variant="secondary" className="text-xs rounded-full">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  {metric.improvement}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
