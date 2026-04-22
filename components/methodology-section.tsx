import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Filter, Layers, RefreshCw, CheckCircle2, Sparkles } from "lucide-react"

const phases = [
  {
    number: "01",
    title: "LF Exploration",
    icon: Search,
    color: "from-blue-400 to-cyan-500",
    lightColor: "bg-blue-100",
    textColor: "text-blue-600",
    description: "Systematically discover candidate Label Functions across multiple representation levels.",
    details: [
      {
        title: "Surface LFs",
        description: "Lexical patterns, keywords, and text-based heuristics using LLM-guided prompts",
      },
      {
        title: "Structural LFs",
        description: "Pattern-based rules capturing syntactic and structural relationships",
      },
      {
        title: "Semantic LFs",
        description: "Embedding-based similarity measures for semantic understanding",
      },
    ],
  },
  {
    number: "02",
    emoji: "2",
    title: "LF Exploitation",
    icon: Filter,
    color: "from-emerald-400 to-teal-500",
    lightColor: "bg-emerald-100",
    textColor: "text-emerald-600",
    description: "Select high-quality LFs through principled filtering based on accuracy and coverage.",
    details: [
      {
        title: "Quality Assessment",
        description: "Evaluate LF precision and reliability on seed data",
      },
      {
        title: "Coverage Optimization",
        description: "Balance coverage breadth with label accuracy",
      },
      {
        title: "Redundancy Removal",
        description: "Filter out conflicting or underperforming heuristics",
      },
    ],
  },
  {
    number: "03",
    title: "Weak Label Aggregation",
    icon: Layers,
    color: "from-amber-400 to-orange-500",
    lightColor: "bg-amber-100",
    textColor: "text-amber-600",
    description: "Aggregate multiple LF outputs into probabilistic labels using label models.",
    details: [
      {
        title: "Conflict Resolution",
        description: "Reconcile disagreements among multiple LFs",
      },
      {
        title: "Probability Estimation",
        description: "Generate soft labels with confidence scores",
      },
      {
        title: "Coverage Maximization",
        description: "Ensure near-complete dataset labeling",
      },
    ],
  },
  {
    number: "04",
    title: "Noise-Aware Refinement",
    icon: RefreshCw,
    color: "from-primary to-rose-500",
    lightColor: "bg-primary/10",
    textColor: "text-primary",
    description: "Iteratively correct corrupted labels using noise transition estimation.",
    details: [
      {
        title: "Clean Subset Identification",
        description: "Detect high-confidence clean samples",
      },
      {
        title: "Noise Transition Matrix",
        description: "Model systematic label corruption patterns",
      },
      {
        title: "Soft Relabeling",
        description: "Iteratively refine labels with noise-aware DNNs",
      },
    ],
  },
]

export function MethodologySection() {
  return (
    <section
      id="methodology"
      className="relative overflow-hidden bg-section-elevated py-16 md:py-24"
    >
      {/* Cute decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-3 h-3 bg-blue-400/40 rounded-full animate-bounce" style={{ animationDelay: "0s" }} />
        <div className="absolute top-40 right-20 w-4 h-4 bg-emerald-400/35 rounded-full animate-bounce" style={{ animationDelay: "0.5s" }} />
        <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-amber-400/40 rounded-full animate-bounce" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 right-10 w-3 h-3 bg-fuchsia-400/35 rounded-full animate-bounce" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 rounded-full px-4 py-1.5 border-2 border-secondary">
            <Sparkles className="h-3.5 w-3.5 mr-1.5" />
            How It Works
            <Sparkles className="h-3.5 w-3.5 ml-1.5" />
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Methodology
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
            The pipeline operates through four interconnected phases, systematically transforming
            unlabeled data into high-quality training datasets.
          </p>
        </div>

        {/* Detailed Phase Cards - Cute Style */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {phases.map((phase, index) => (
            <Card key={index} className="relative overflow-hidden border-2 border-transparent hover:border-primary/20 hover:shadow-2xl transition-all duration-300 group">
              {/* Cute corner decoration */}
              <div className={`absolute top-0 right-0 w-28 h-28 bg-gradient-to-br ${phase.color} opacity-10 rounded-bl-full`} />
              <div className={`absolute bottom-0 left-0 w-16 h-16 ${phase.lightColor} rounded-tr-full opacity-30`} />
              
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${phase.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <phase.icon className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <span className={`text-xs ${phase.textColor} font-bold uppercase tracking-wider`}>Phase {phase.number}</span>
                    <CardTitle className="text-xl">{phase.title}</CardTitle>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{phase.description}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {phase.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-start gap-3">
                      <div className={`w-6 h-6 rounded-full ${phase.lightColor} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <CheckCircle2 className={`h-4 w-4 ${phase.textColor}`} />
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-foreground">{detail.title}</span>
                        <p className="text-sm text-muted-foreground">{detail.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Note - Cute Style */}
        <div className="mt-12 text-center">
          <div className="inline-block px-8 py-5 bg-card rounded-3xl border-2 border-primary/20 shadow-xl">
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              The framework jointly maximizes <span className="font-bold text-primary">diversity</span> and{" "}
              <span className="font-bold text-primary">reliability</span> of supervision signals, 
              while incorporating noise-aware mechanisms to prevent the model from memorizing biased heuristics.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
