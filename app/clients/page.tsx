import { ClientsSection } from "@/components/clients-section";
import { TestimonialsSection } from "@/components/testimonials-section";

export default function ClientsPage() {
  return (
    <main className="min-h-screen bg-black pt-16">
      <ClientsSection />
      <TestimonialsSection />
    </main>
  );
}
