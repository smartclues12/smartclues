import { ProjectsSection } from "@/components/projects-section";
import { StatsSection } from "@/components/stats-section";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black pt-16">
      <ProjectsSection />
      <StatsSection />
    </main>
  );
}
