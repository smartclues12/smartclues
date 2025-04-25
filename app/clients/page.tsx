import { ClientsSection } from "@/components/clients-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { ClientsCarousel } from "@/components/clients-carousel"

export default function ClientsPage() {
  return (
    <main className="min-h-screen bg-black pt-16">
      <ClientsCarousel />
      <TestimonialsSection />
    </main>
  );
}
