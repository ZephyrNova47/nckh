import { Button } from "@/components/ui/button"
import { ArrowRight, FileText, Heart, Sparkles, Star } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Cute decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-10 w-4 h-4 bg-rose-400/50 rounded-full animate-bounce" style={{ animationDelay: "0s" }} />
        <div className="absolute top-32 right-20 w-3 h-3 bg-amber-400/70 rounded-full animate-bounce" style={{ animationDelay: "0.5s" }} />
        <div className="absolute top-40 left-1/4 w-2 h-2 bg-sky-400/60 rounded-full animate-bounce" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-40 right-1/3 w-3 h-3 bg-violet-400/50 rounded-full animate-bounce" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 right-10 w-2 h-2 bg-emerald-400/60 rounded-full animate-bounce" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-20 left-1/3 w-2.5 h-2.5 bg-fuchsia-400/45 rounded-full animate-bounce" style={{ animationDelay: "0.3s" }} />
        {/* Soft blob backgrounds — hồng + các màu kẹo ngọt */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/12 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-200/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
        <div className="absolute top-1/2 left-1/2 w-[320px] h-[320px] bg-sky-200/25 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-1/4 right-1/3 w-[280px] h-[280px] bg-violet-200/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 text-balance bg-clip-text text-transparent bg-gradient-to-r from-foreground via-primary to-primary/80">
            End-to-End Automated Weak Supervision
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-4 font-medium text-balance max-w-3xl mx-auto leading-snug">
            From Unlabeled Data to High-Quality Datasets and Classifiers
          </p>

          {/* Description with cute card */}
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 bg-primary/5 rounded-3xl blur-xl" />
            <p className="relative text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-6 py-4 bg-card/60 rounded-3xl border border-sky-200/35">
              A fully automated framework that turns unlabeled data into high-quality labeled datasets and
              strong classifiers by designing label functions in a principled way, with little or no hand
              labeling. It searches for and combines weak signals at the surface, structure, and meaning
              levels, then refines noisy aggregate labels so models can still learn well when supervision
              is partial or wrong.
            </p>
          </div>

          {/* At-a-glance facts from the report structure (no fabricated metrics). */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <div className="group relative px-6 py-4 bg-card rounded-3xl border-2 border-orange-300/45 shadow-lg shadow-orange-200/30 hover:shadow-xl hover:shadow-orange-200/40 hover:scale-105 transition-all duration-300">
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center">
                <Sparkles className="h-3 w-3 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-orange-600">11</div>
              <div className="text-sm text-muted-foreground">Text benchmarks (Table 4.1)</div>
            </div>
            <div className="group relative px-6 py-4 bg-card rounded-3xl border-2 border-amber-300/45 shadow-lg shadow-amber-200/30 hover:shadow-xl hover:shadow-amber-200/35 hover:scale-105 transition-all duration-300">
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
                <Star className="h-3 w-3 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-amber-600">3</div>
              <div className="text-sm text-muted-foreground">LF levels (surface · structure · semantic)</div>
            </div>
            <a
              href="#results"
              className="group relative px-6 py-4 bg-card rounded-3xl border-2 border-emerald-300/40 shadow-lg shadow-emerald-200/25 hover:shadow-xl hover:shadow-emerald-200/35 hover:scale-105 transition-all duration-300 text-left"
            >
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center">
                <Heart className="h-3 w-3 text-white" />
              </div>
              <div className="text-lg md:text-xl font-bold text-emerald-600 leading-tight">Results</div>
              <div className="text-sm text-muted-foreground">Coverage & lift vs. baselines (§5.1)</div>
            </a>
          </div>

          {/* CTA Button with cute styling */}
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#publications">
              <Button size="lg" className="gap-2 rounded-full px-8 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300">
                <FileText className="h-4 w-4" />
                Read Papers
                <ArrowRight className="h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
