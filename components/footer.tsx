import { Heart } from "lucide-react"
import { SoftPinkWave } from "@/components/section-transition"

export function Footer() {
  return (
    <footer className="relative w-full overflow-hidden">
      <div className="relative bg-section-elevated pb-0 pt-4 md:pt-6">
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
            <p className="text-xs text-muted-foreground sm:text-sm">
              Made with <Heart className="mx-0.5 inline h-3.5 w-3.5 fill-rose-400 text-rose-400" /> by
              DCAI Team
            </p>
            <p className="mt-3 text-[11px] leading-relaxed text-muted-foreground sm:text-xs">
              Vietnam National University, Hanoi - University of Engineering and Technology
            </p>
            <p className="mt-4 inline-flex rounded-full bg-secondary/80 px-4 py-1.5 text-xs font-medium text-primary">
              iSE Lab - Faculty of Information Technology
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
