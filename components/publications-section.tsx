import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import {
  ExternalLink,
  CheckCircle2,
  Clock,
  Sparkles,
  Star,
  Rocket,
  BookOpen,
  Award,
} from "lucide-react"
import Link from "next/link"
import type { LucideIcon } from "lucide-react"

type PubItem = {
  status: string
  statusLabel: string
  journal: string
  impact: string
  year: string
  title: string
  authors: string[]
  description: string
  link: string | null
  icon: LucideIcon
  color: string
  borderColor: string
  bgColor: string
  ctaLabel?: string
}

const publications: PubItem[] = [
  {
    status: "published",
    statusLabel: "Published",
    journal: "Knowledge-Based Systems",
    impact: "ISI Q1",
    year: "2026",
    title: "Structured Exploration and Exploitation of Label Functions for Automated Data Annotation",
    authors: [
      "Phong Lam",
      "Ha-Linh Nguyen",
      "Thu-Trang Nguyen",
      "Son Nguyen",
      "Hieu Dinh Vo",
    ],
    description:
      "Empirical findings on automated label function generation, including reliability-diversity trade-offs and a principled approach to LF exploration and exploitation.",
    link: "https://www.sciencedirect.com/science/article/abs/pii/S0950705126005691",
    icon: Star,
    color: "from-amber-400 to-orange-500",
    borderColor: "border-amber-300",
    bgColor: "bg-amber-50",
  },
  {
    status: "published",
    statusLabel: "Published",
    journal: "Future Generation Computer Systems",
    impact: "ISI Q1",
    year: "2025",
    title: "Leveraging Local and Global Relationships for Corrupted Label Detection",
    authors: [
      "Phong Lam",
      "Ha-Linh Nguyen",
      "Xuan-Truc Dao Dang",
      "Van-Son Tran",
      "Minh-Duc Le",
      "Thu-Trang Nguyen",
      "Son Nguyen",
      "Hieu Dinh Vo",
    ],
    description:
      "This work presents comprehensive analyses of corrupted labels and proposes methods to detect and handle label noise using local and global relationships in the data.",
    link: "https://www.sciencedirect.com/science/article/abs/pii/S0167739X2500024X",
    icon: Rocket,
    color: "from-primary to-rose-400",
    borderColor: "border-primary/30",
    bgColor: "bg-primary/5",
  },
  {
    status: "preprint",
    statusLabel: "Preprint",
    journal: "Neurocomputing",
    impact: "Open Access",
    year: "2026",
    title: "Noise-Aware Framework for Correcting Corrupted Labels",
    authors: [
      "Ha-Linh Nguyen",
      "Hong-Anh Nguyen",
      "Minh-Duc La",
      "Phong Lam",
      "Thu-Trang Nguyen",
      "Son Nguyen",
      "Hieu Dinh Vo",
    ],
    description:
      "Evaluation of a noise-aware refinement mechanism for correcting systematically biased weak labels and improving downstream model performance.",
    link: "https://drive.google.com/file/d/1OxuXBa_NdiWbRt4wWJ0BHhK6YinCw2IJ/view?pli=1",
    icon: BookOpen,
    color: "from-sky-500 to-violet-500",
    borderColor: "border-sky-300/80",
    bgColor: "bg-sky-50",
  },
  {
    status: "patent",
    statusLabel: "Patent filed",
    journal: "Patent Filed No. 1-2025-02049",
    impact: "Vietnam IP",
    year: "2025",
    title: "Process for identifying corrupted labels by leveraging local and global data relationships",
    authors: [
      "Phong Lam",
      "Ha-Linh Nguyen",
      "Thu-Trang Nguyen",
      "Son Nguyen",
      "Hieu Dinh Vo",
    ],
    description:
      "A patent application describing a process that exploits both local and global regularities in the data to surface corrupted labels.",
    link: null,
    icon: Award,
    color: "from-emerald-500 to-teal-600",
    borderColor: "border-emerald-300/60",
    bgColor: "bg-emerald-50/80",
    ctaLabel: "Patent record (no public link)",
  },
  {
    status: "preprint",
    statusLabel: "Preprint",
    journal: "The 15th Conference on Information Technology and its Applications",
    impact: "Conference",
    year: "2026",
    title: "BayesRepair: a probabilistic data-centric approach for label noise repair",
    authors: [
      "Ha-Linh Nguyen",
      "Hong-Anh Nguyen",
      "Minh-Duc La",
      "Thu-Trang Nguyen",
      "Son Nguyen",
      "Hieu Dinh Vo",
    ],
    description:
      "A probabilistic, data-centric pipeline for repairing label noise, targeting reliable training under unknown corruption patterns.",
    link: "https://drive.google.com/file/d/1sbJaD4A_32hYt6yLABf-vkaGVU_-FJLt/view?usp=sharing",
    icon: BookOpen,
    color: "from-rose-500 to-fuchsia-600",
    borderColor: "border-rose-300/50",
    bgColor: "bg-rose-50/80",
  },
]

function StatusBadge({ status, label }: { status: string; label: string }) {
  const variants: Record<string, { className: string; icon: typeof CheckCircle2 }> = {
    published: {
      className: "border-green-300 bg-green-100 text-green-700",
      icon: CheckCircle2,
    },
    preprint: {
      className: "border-blue-300 bg-blue-100 text-blue-700",
      icon: Clock,
    },
    patent: {
      className: "border-amber-300 bg-amber-100 text-amber-900",
      icon: Award,
    },
  }

  const { className, icon: Icon } = variants[status] ?? variants.preprint

  return (
    <Badge variant="outline" className={`gap-1.5 rounded-full px-3 py-1 ${className}`}>
      <Icon className="h-3 w-3" />
      {label}
    </Badge>
  )
}

export function PublicationsSection() {
  return (
    <section
      id="publications"
      className="relative overflow-hidden bg-section-elevated py-16 md:py-24"
    >
      {/* Cute background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-3 h-3 bg-amber-400/40 rounded-full animate-bounce" style={{ animationDelay: "0.5s" }} />
        <div className="absolute bottom-40 right-20 w-4 h-4 bg-emerald-400/35 rounded-full animate-bounce" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 right-10 w-2 h-2 bg-fuchsia-400/45 rounded-full animate-bounce" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 rounded-full px-4 py-1.5 border-2 border-secondary">
            <Sparkles className="h-3.5 w-3.5 mr-1.5" />
            Research Output
            <Sparkles className="h-3.5 w-3.5 ml-1.5" />
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Our Publications
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
            Journal articles, preprints, patent filings, and work under review. Open the items that have
            a public link.
          </p>
        </div>

        <div className="grid gap-6 max-w-4xl mx-auto">
          {publications.map((pub, index) => {
            const content = (
              <Card
                className={`relative overflow-hidden border-2 ${pub.borderColor} transition-all duration-500 ${
                  pub.link
                    ? "cursor-pointer group-hover:scale-[1.02] group-hover:shadow-2xl"
                    : "group-hover:shadow-md"
                } `}
              >
                <div
                  className={`absolute -z-0 right-0 top-0 h-32 w-32 rounded-bl-full bg-gradient-to-br ${pub.color} opacity-10`}
                />
                <div className={`absolute bottom-0 left-0 -z-0 h-20 w-20 ${pub.bgColor} rounded-tr-full`} />
                <div
                  className={`absolute right-4 top-4 z-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${pub.color} shadow-lg transition-transform duration-300 ${pub.link ? "group-hover:scale-110" : ""} `}
                >
                  <pub.icon className="h-6 w-6 text-white" />
                </div>
                <CardHeader className="relative z-10 pb-2 pr-20">
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <StatusBadge status={pub.status} label={pub.statusLabel} />
                    <Badge variant="secondary" className="rounded-full">
                      {pub.impact}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{pub.year}</span>
                  </div>
                  <h3
                    className={`text-balance text-xl font-bold leading-tight text-foreground transition-colors ${pub.link ? "group-hover:text-primary" : ""}`}
                  >
                    {pub.title}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-primary">{pub.journal}</p>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="mb-4 text-sm text-muted-foreground">{pub.description}</p>
                  <div className="mb-4">
                    <p className="mb-1 text-xs font-medium text-muted-foreground">Authors:</p>
                    <p className="text-sm text-foreground">
                      {pub.authors.map((author, i) => (
                        <span key={i}>
                          {author}
                          {i < pub.authors.length - 1 && ", "}
                        </span>
                      ))}
                    </p>
                  </div>
                  {pub.link ? (
                    <div className="flex items-center gap-2 text-primary">
                      <span className="text-sm font-medium group-hover:underline">Read Full Paper</span>
                      <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  ) : (
                    <p className="text-sm text-muted-foreground">{pub.ctaLabel}</p>
                  )}
                </CardContent>
              </Card>
            )

            return pub.link ? (
              <Link
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                className="group block"
              >
                {content}
              </Link>
            ) : (
              <div key={index} className="group block">
                {content}
              </div>
            )
          })}
        </div>

        {/* Publication Summary - Cute Style */}
        <div className="mt-12 text-center">
          <div className="inline-flex max-w-full flex-wrap items-center justify-center gap-6 rounded-3xl border-2 border-primary/20 bg-card px-6 py-5 shadow-xl sm:px-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">5</div>
              <div className="text-xs font-medium text-muted-foreground">Total outputs</div>
            </div>
            <div className="h-10 w-0.5 rounded-full bg-primary/20" />
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary-foreground">2</div>
              <div className="text-xs font-medium text-muted-foreground">Q1 journals</div>
            </div>
            <div className="h-10 w-0.5 rounded-full bg-primary/20" />
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">1</div>
              <div className="text-xs font-medium text-muted-foreground">Patent</div>
            </div>
            <div className="h-10 w-0.5 hidden rounded-full bg-primary/20 sm:block" />
            <div className="hidden text-center sm:block">
              <div className="text-3xl font-bold text-accent-foreground">2</div>
              <div className="text-xs font-medium text-muted-foreground">Under review</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
