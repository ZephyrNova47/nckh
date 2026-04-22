import { cn } from "@/lib/utils"

type FlowKind = "base" | "elevated"

type SectionFlowProps = {
  from: FlowKind
  to: FlowKind
  className?: string
  /** Vòng trang trí nhiều lớp (vàng / tím nhạt) giống ref — tắt nếu chật */
  withOrb?: boolean
}

const flowGradients: Record<string, string> = {
  "base-elevated": "from-background via-primary/[0.025] to-section-elevated",
  "elevated-base": "from-section-elevated via-primary/[0.02] to-background",
  "base-base": "from-background via-primary/[0.02] to-background",
  "elevated-elevated": "from-section-elevated via-primary/[0.02] to-section-elevated",
}

/**
 * Dải chuyển màu mềm giữa hai nền hồng — không dùng border.
 * Kết hợp gradient + decor tròn mờ (shadow/ring) thay vạch kẻ.
 */
export function SectionFlow({ from, to, className, withOrb = true }: SectionFlowProps) {
  const key = `${from}-${to}` as keyof typeof flowGradients
  const grad = flowGradients[key] ?? flowGradients["base-base"]
  return (
    <div
      className={cn(
        "relative h-3 w-full overflow-hidden sm:h-4 md:h-5",
        "bg-gradient-to-b",
        grad,
        className
      )}
      aria-hidden
    >
      {withOrb && (
        <div className="pointer-events-none absolute -right-6 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full border border-amber-200/20 bg-primary/5 ring-2 ring-violet-200/10" />
      )}
    </div>
  )
}

type SoftWaveProps = {
  /** Màu fill = nền section *phía dưới* (đuôi sóng) */
  fill: "base" | "elevated"
  className?: string
}

/**
 * Sóng SVG: phần tam giác dưới fill bằng màu nền kế tiếp, phía trên trong suốt — nối mượt 2 tông hồng.
 */
export function SoftPinkWave({ fill, className }: SoftWaveProps) {
  const fillClass = fill === "elevated" ? "text-section-elevated" : "text-background"
  return (
    <div
      className={cn("w-full leading-[0] -mt-px", fillClass, className)}
      aria-hidden
    >
      <svg
        viewBox="0 0 1440 32"
        className="block h-5 w-full min-w-full sm:h-6"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M0,20 C200,12 400,24 720,16 C1000,10 1200,18 1440,14 L1440,32 L0,32 Z"
        />
      </svg>
    </div>
  )
}

/**
 * Cầu nối chuẩn giữa 2 section: gradient mềm + sóng hồng (không vạch thẳng).
 * `to` = nền section *kế tiếp*.
 */
export function SectionBridge({ from, to }: { from: FlowKind; to: FlowKind }) {
  return (
    <div className="flex w-full flex-col">
      <SectionFlow
        from={from}
        to={to}
        withOrb={false}
      />
      <SoftPinkWave fill={to === "elevated" ? "elevated" : "base"} />
    </div>
  )
}
