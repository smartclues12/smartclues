import { ClientLogosClientPage } from "@/components/client-logo-clientPage";
import { TestimonialsSection } from "@/components/testimonials-section";

export default function ClientsPage() {
  return (
    <main className="min-h-screen bg-black pt-16">
      {/* <ClientsSection /> */}
      <ClientLogosClientPage />
      <TestimonialsSection />
    </main>
  );
}
