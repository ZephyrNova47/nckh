import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, TrendingUp, Target, Zap, Database, Brain, Sparkles, Heart, Star } from "lucide-react"

const contributions = [
  {
    icon: Brain,
    title: "End-to-End Framework",
    description:
      "Coca is a fully automated weak-supervision framework that transforms unlabeled data into both high-quality datasets and robust classifiers without manual intervention.",
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

export function KeyResultsSection() {
  return (
    <section
      id="results"
      className="relative overflow-hidden bg-background py-16 md:py-24"
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
            Coca addresses critical limitations in existing programmatic labeling pipelines 
            and demonstrates substantial improvements across multiple benchmarks.
          </p>
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

        {/* Highlight Box - Cute Style */}
        <div className="mt-12 max-w-3xl mx-auto">
          <Card className="border-2 border-violet-200/60 bg-gradient-to-br from-violet-50/80 via-primary/5 to-amber-50/60 overflow-hidden">
            <CardContent className="pt-6 relative">
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-bl-full" />
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary via-rose-400 to-orange-400 flex items-center justify-center shadow-lg flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2 text-lg">Significant Improvements</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Coca enhanced label quality by up to <span className="font-bold text-primary">125%</span> over 
                    baselines on the Massive IoT Command dataset and approximately{" "}
                    <span className="font-bold text-primary">tripled</span> the downstream performance 
                    compared to Alchemist on the Chemical-Protein Relation classification task.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
