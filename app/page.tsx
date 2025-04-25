import { HeroSection } from "@/components/hero-section"
import { ServicesGrid } from "@/components/services-grid"
import { CompanyOverview } from "@/components/company-overview"
import { FeaturedProjects } from "@/components/featured-projects"
import { ClientLogos } from "@/components/client-logos"
import { CtaSection } from "@/components/cta-section"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-b from-zinc-950 to-black">
      <HeroSection />
      <ServicesGrid />
      <CompanyOverview />
      <FeaturedProjects />
      <ClientLogos />
      <CtaSection />
    </main>
  )
}
