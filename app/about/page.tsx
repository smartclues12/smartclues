import { AboutHero } from "@/components/about-hero"
import { AboutTimeline } from "@/components/about-timeline"
import { TeamSection } from "@/components/team-section"
import { TestimonialsSlider } from "@/components/testimonials-slider"
import { CtaSection } from "@/components/cta-section"

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen bg-zinc-950">
      <AboutHero />
      <AboutTimeline />
      <TeamSection />
      <TestimonialsSlider />
      <CtaSection />
    </main>
  )
}
