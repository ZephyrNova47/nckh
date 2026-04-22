import { HeroSection } from "@/components/hero-section"
import { PublicationsSection } from "@/components/publications-section"
import { KeyResultsSection } from "@/components/key-results-section"
import { MethodologySection } from "@/components/methodology-section"
import { TeamSection } from "@/components/team-section"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { SectionBridge } from "@/components/section-transition"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <SectionBridge from="base" to="elevated" />
      <PublicationsSection />
      <SectionBridge from="elevated" to="base" />
      <KeyResultsSection />
      <SectionBridge from="base" to="elevated" />
      <MethodologySection />
      <SectionBridge from="elevated" to="base" />
      <TeamSection />
      <SectionBridge from="base" to="elevated" />
      <Footer />
    </main>
  )
}
