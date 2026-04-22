import { Heart, Sparkles } from "lucide-react"
import { SoftPinkWave } from "@/components/section-transition"

export function Footer() {
  return (
    <footer className="relative w-full overflow-hidden">
      {/* Cùng nền elevated với sóng cuối từ Team; không border */}
      <div className="relative bg-section-elevated pb-0">
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-10 md:pt-4 md:pb-12">
          <div
            className="relative mx-auto max-w-2xl rounded-3xl bg-card px-6 py-8 text-center shadow-[0_10px_40px_rgba(0,0,0,0.05),0_2px_0_rgba(255,255,255,0.5)_inset] md:px-10 md:py-10"
          >
            <div
              className="pointer-events-none absolute right-0 top-0 h-24 w-24 overflow-hidden rounded-3xl"
              aria-hidden
            >
              <div className="absolute -right-2 -top-2 h-28 w-28 rounded-full bg-primary/12 blur-[1px]" />
            </div>
            <div
              className="pointer-events-none absolute bottom-0 left-0 h-20 w-20 overflow-hidden rounded-3xl"
              aria-hidden
            >
              <div className="absolute -bottom-3 -left-3 h-24 w-24 rounded-full bg-secondary/25 blur-[0.5px]" />
            </div>
            <div className="relative z-[1] mb-3 flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Heart
                className="h-4 w-4 shrink-0 text-rose-500"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
              />
              <span>Affiliated with</span>
              <Heart
                className="h-4 w-4 shrink-0 text-rose-500"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
              />
            </div>
            <h2 className="relative z-[1] text-balance text-lg font-bold leading-snug text-foreground md:text-xl">
              Intelligent Software Engineering (iSE) Laboratory
            </h2>
            <p className="relative z-[1] mt-2 text-sm text-muted-foreground">
              Faculty of Information Technology, VNU-UET
            </p>
          </div>
        </div>

        <SoftPinkWave fill="base" />
      </div>

      {/* Dưới: nền hồng nền trang, trang trí bán nguyệt màu hồng/đào mềm — không dùng border */}
      <div className="relative bg-background pb-10 pt-0 md:pb-12">
        <div
          className="pointer-events-none absolute left-0 top-0 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute right-0 top-0 h-44 w-44 translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/12"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute right-8 top-1/2 hidden h-20 w-20 -translate-y-1/2 rounded-full border-2 border-amber-200/30 bg-primary/10 ring-4 ring-violet-200/20 sm:block"
          aria-hidden
        />
        <div className="container relative z-10 mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 flex items-center justify-center gap-2.5">
              <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-orange-500 text-lg font-bold text-white shadow-md shadow-orange-200/50">
                <span className="lowercase">c</span>
                <Sparkles className="absolute -right-0.5 -top-0.5 h-3.5 w-3.5 text-amber-100" />
              </div>
              <span className="text-xl font-bold text-foreground">Coca</span>
            </div>
            <p className="text-xs text-muted-foreground sm:text-sm">
              Made with <Heart className="mx-0.5 inline h-3.5 w-3.5 fill-rose-400 text-rose-400" /> by
              Coca Research Team
            </p>
            <p className="mt-3 text-[11px] leading-relaxed text-muted-foreground sm:text-xs">
              Vietnam National University, Hanoi - University of Engineering and Technology
            </p>
            <p className="mt-4 inline-flex rounded-full bg-secondary/80 px-4 py-1.5 text-xs font-medium text-primary">
              Faculty of IT - iSE Lab
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
