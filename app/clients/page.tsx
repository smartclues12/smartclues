import { ClientLogos } from "@/components/client-logos";
import { TestimonialsSection } from "@/components/testimonials-section";

export default function ClientsPage() {
  return (
    <main className="min-h-screen bg-black pt-16">
      {/* <ClientsSection /> */}
      <ClientLogos />
      <TestimonialsSection />
    </main>
  );
}

