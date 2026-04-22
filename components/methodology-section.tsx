import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Search,
  Filter,
  Layers,
  RefreshCw,
  CheckCircle2,
  Sparkles,
  ExternalLink,
  Braces,
  Code2,
  Mic,
  Stethoscope,
} from "lucide-react"

const AUTOLF_DATASET_URL =
  "https://www.kaggle.com/datasets/phonglmnguynduy/autolf-data"

/** Shared “soft” code surface (avoid harsh black blocks). */
const lfCodeShell =
  "relative overflow-hidden rounded-2xl border border-sky-200/70 bg-gradient-to-br from-sky-50/90 via-white to-violet-50/50 p-1 shadow-sm ring-1 ring-sky-100/60 dark:border-sky-800/45 dark:from-slate-900/85 dark:via-slate-900/70 dark:to-violet-950/35 dark:ring-sky-900/25"

const lfCodePre =
  "m-0 max-h-[min(400px,52vh)] overflow-auto px-4 py-3.5 pl-5 font-mono text-[11px] sm:text-xs leading-relaxed text-slate-700 dark:text-slate-200"

const lfCodeAccent =
  "pointer-events-none absolute left-0 top-3 bottom-3 w-1 rounded-full bg-gradient-to-b opacity-90"

/**
 * Excerpt from a real auto-generated keyword LF (voice-assistant intents).
 * Full script includes all 18 intent buckets + fallbacks; see Kaggle bundle.
 */
const voiceAssistantLfExcerpt = `import re

def label_function(utterance):
    utt = utterance.lower()

    # 0: Alarm
    alarm_kw = [
        'set alarm', 'wake me up', 'alarm for', 'turn off alarm',
        'cancel alarm', 'alarm at', 'set an alarm', 'snooze', 'alarm'
    ]
    if any(kw in utt for kw in alarm_kw):
        return 0

    # 1: Audio settings/control
    audio_kw = [
        'volume', 'mute', 'unmute', 'audio settings', 'increase sound',
        'decrease sound', 'turn up', 'turn down', 'louder', 'softer'
    ]
    if any(kw in utt for kw in audio_kw):
        return 1

    # 2: IoT devices
    iot_kw = [
        'smart light', 'smart plug', 'thermostat', 'security camera',
        'smart device', 'dim lamp', 'lock the door', 'unlock', 'turn on light',
        'turn off light', 'garage door', 'smart home'
    ]
    if any(kw in utt for kw in iot_kw):
        return 2

    # ... calendar, media, food, news, music, weather, Q&A, social,
    #     recommendations, cooking, travel, email, lists (labels 3–17),
    #     general fallbacks, then:
    return -1`

/** Full keyword LF for medical abstract → disease families (auto-generated). */
const medicalAbstractLfExample = `def label_function(abstract):
    abstract = abstract.lower()

    # Neoplasms (0)
    neoplasm_keywords = [
        'neoplasm', 'tumor', 'tumour', 'carcinoma', 'sarcoma', 'malignancy', 'cancer', 'oncology', 'metastasis', 'adenoma', 'lymphoma', 'leukemia', 'melanoma', 'myeloma', 'glioma'
    ]

    # Digestive system diseases (1)
    digestive_keywords = [
        'gastroenteritis', 'inflammatory bowel disease', 'crohn', 'ulcerative colitis',
        'hepatitis', 'cirrhosis', 'liver', 'hepatic', 'stomach', 'gastric', 'intestinal',
        'intestine', 'colon', 'colonic', 'colitis', 'crohn', 'esophagus', 'esophageal',
        'gastrointestinal', 'pancreas', 'pancreatitis', 'gallbladder', 'cholestasis',
        'digestive', 'bowel', 'duodenum', 'rectum', 'rectal', 'proctitis'
    ]

    # Nervous system diseases (2)
    nervous_keywords = [
        'neurological', 'neurology', 'brain', 'cerebral', 'cerebrovascular', 'alzheimer', 'parkinson',
        'multiple sclerosis', 'epilepsy', 'seizure', 'stroke', 'dementia', 'peripheral neuropathy',
        'encephalopathy', 'encephalitis', 'neuropathy', 'amyotrophic lateral sclerosis', 'huntington',
        'spinal cord', 'myasthenia gravis', 'meningitis', 'neurodegenerative'
    ]

    # Cardiovascular diseases (3)
    cardiovascular_keywords = [
        'cardiovascular', 'heart', 'coronary', 'myocardial', 'arrhythmia', 'hypertension', 'atherosclerosis',
        'angina', 'cardiac', 'myocarditis', 'pericarditis', 'stroke', 'thrombosis', 'ischemia', 'cholesterol',
        'artery', 'arterial', 'vein', 'vascular', 'endocarditis', 'congestive heart', 'heart failure', 'hyperlipidemia',
        'atrial fibrillation'
    ]

    # General pathological conditions (4)
    general_keywords = [
        'inflammation', 'infection', 'autoimmune', 'syndrome', 'disorder', 'genetic disease',
        'hereditary', 'metabolic disease', 'immune deficiency', 'syndromic', 'fever', 'sepsis',
        'shock', 'systemic', 'chronic disease', 'acute condition', 'rare disease', 'inherited',
        'idiopathic', 'dysfunction', 'failure'
    ]

    if any(k in abstract for k in neoplasm_keywords):
        return 0
    if any(k in abstract for k in digestive_keywords):
        return 1
    if any(k in abstract for k in nervous_keywords):
        return 2
    if any(k in abstract for k in cardiovascular_keywords):
        return 3
    if any(k in abstract for k in general_keywords):
        return 4

    return -1`

const keywordLfExamples = [
  {
    key: "voice",
    title: "Example 1 — Voice assistant intents",
    icon: Mic,
    accent: "from-cyan-400 to-blue-500",
    headerClass: "from-cyan-500/12 via-card to-blue-500/8",
    badges: ["Keyword LF", "18-way + abstain"],
    blurb:
      "Utterance → integer intent ids via phrase lists; −1 when no bucket fires. Representative of Massive-style commands in our runs.",
    code: voiceAssistantLfExcerpt,
    footnote:
      "Shown through IoT (label 2); the full function continues with media, weather, Q&A, and remaining intents before returning −1.",
  },
  {
    key: "medical",
    title: "Example 2 — Medical abstract categories",
    icon: Stethoscope,
    accent: "from-rose-400 to-amber-500",
    headerClass: "from-rose-500/12 via-card to-amber-500/8",
    badges: ["Keyword LF", "5 disease families"],
    blurb:
      "PubMed-style abstract → oncology / GI / neuro / cardio / general pathology. Order of checks matters when keywords overlap (e.g. stroke).",
    code: medicalAbstractLfExample,
    footnote: "Complete function as generated; −1 abstains when no clinical cue matches.",
  },
] as const

const lfConcreteExamples = [
  {
    id: "λ_structural",
    tier: "Structural",
    name: "Simple structural LF",
    summary:
      "Cheap statistics over the string—length buckets, punctuation density, or bag-of-patterns learned from seed labels.",
    sketch: `wc = len(text.split())
if wc > 180 and "!" in text:
    return NEGATIVE  # long rant heuristic
return ABSTAIN`,
  },
  {
    id: "λ_semantic",
    tier: "Semantic",
    name: "Embedding neighborhood LF",
    summary:
      "Embed the sentence; if cosine similarity to seeded positives exceeds a margin, vote +1; symmetric rule for negatives; else abstain.",
    sketch: `z = embed(text)
if cosine(z, centroid_pos) > 0.82:
    return POSITIVE
if cosine(z, centroid_neg) > 0.82:
    return NEGATIVE
return ABSTAIN`,
  },
] as const

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
      className="relative overflow-hidden bg-section-elevated py-16 md:py-24 scroll-mt-24"
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

        {/* Label functions — tied to released benchmark bundle */}
        <div className="mt-16 max-w-5xl mx-auto space-y-8">
          <div className="text-center px-2">
            <Badge variant="outline" className="mb-3 rounded-full border-violet-300/60 bg-violet-50/80 text-violet-800 dark:bg-violet-950/40 dark:text-violet-200">
              <Braces className="h-3 w-3 mr-1" />
              Labeling functions
            </Badge>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground text-balance">
              What an LF looks like in our runs
            </h3>
            <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto mt-2 text-balance">
              Each LF is a cheap program{" "}
              <span className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">λ(x) → y ∪ {"{⊥}"}</span> that votes on
              an input or abstains. Many LFs together form a <span className="font-semibold text-foreground">label matrix</span>{" "}
              <span className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">L ∈ {"{−1,0,+1}"}^{"n×m"}</span> fed to the label
              model in Phase 03.
            </p>
            <a
              href={AUTOLF_DATASET_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 mt-4 text-sm font-medium text-primary hover:underline"
            >
              Companion export: AutoLF benchmark bundle on Kaggle
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
            <p className="text-xs text-muted-foreground mt-2 max-w-xl mx-auto">
              Use that archive for the exact CSV/JSON layouts, LF counts per task, and weak-label matrices from experiments
              you can reproduce locally.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {keywordLfExamples.map((ex) => {
              const Icon = ex.icon
              return (
                <Card
                  key={ex.key}
                  className="overflow-hidden border-2 border-border/60 shadow-lg shadow-sky-100/40 transition-all hover:shadow-xl dark:shadow-none"
                >
                  <CardHeader className={`space-y-3 border-b border-border/50 bg-gradient-to-r pb-4 ${ex.headerClass}`}>
                    <div className="flex flex-wrap items-start gap-3">
                      <div
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${ex.accent} text-white shadow-md`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0 flex-1 space-y-2">
                        <CardTitle className="text-base font-bold leading-snug sm:text-lg flex items-center gap-2">
                          <Code2 className="h-4 w-4 shrink-0 text-muted-foreground" />
                          {ex.title}
                        </CardTitle>
                        <div className="flex flex-wrap gap-1.5">
                          {ex.badges.map((b) => (
                            <Badge
                              key={b}
                              variant="secondary"
                              className="rounded-full text-[10px] font-medium px-2.5 py-0.5 bg-white/80 dark:bg-slate-800/80"
                            >
                              {b}
                            </Badge>
                          ))}
                        </div>
                        <CardDescription className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
                          {ex.blurb}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-4 pb-4 px-3 sm:px-4">
                    <div className={lfCodeShell}>
                      <div className={`${lfCodeAccent} ${ex.accent}`} aria-hidden />
                      <pre className={lfCodePre}>{ex.code}</pre>
                    </div>
                    <p className="mt-3 text-[11px] leading-relaxed text-muted-foreground px-0.5">{ex.footnote}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {lfConcreteExamples.map((lf) => (
              <Card
                key={lf.id}
                className="border-2 border-violet-200/40 dark:border-violet-900/50 overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <CardHeader className="pb-2 space-y-1">
                  <div className="flex items-center justify-between gap-2">
                    <CardTitle className="text-base font-mono text-sm">{lf.id}</CardTitle>
                    <Badge variant="secondary" className="text-[10px] shrink-0">
                      {lf.tier}
                    </Badge>
                  </div>
                  <p className="text-sm font-semibold text-foreground leading-snug">{lf.name}</p>
                  <CardDescription className="text-xs leading-relaxed">{lf.summary}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className={lfCodeShell}>
                    <div
                      className={`${lfCodeAccent} from-violet-400 to-fuchsia-500`}
                      aria-hidden
                    />
                    <pre className={`${lfCodePre} max-h-48`}>{lf.sketch}</pre>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
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
