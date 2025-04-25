"use client"

import { motion } from "framer-motion"
import { InfiniteMovingCards } from "@/components/ui/aceternity/infinite-moving-cards"

export function ClientsCarousel() {
  const clients = [
    {
      name: "Clarus",
      category: "Medical Coding",
      quote: "Smartclues Technologies has been instrumental in optimizing our medical coding processes.",
    },
    {
      name: "VEE Tech Healthcare",
      category: "Medical Coding",
      quote: "Their attention to detail and quality in medical coding is unmatched.",
    },
    {
      name: "Wipro",
      category: "Medical Coding",
      quote: "A reliable partner for our medical coding needs with consistent quality.",
    },
    {
      name: "Digital Forensics Client",
      category: "Digital Forensics",
      quote: "Their expertise in digital forensics has been invaluable to our operations.",
    },
    {
      name: "GST Project Client",
      category: "GST Systems",
      quote: "Smartclues delivered an efficient GST system that streamlined our compliance.",
    },
    {
      name: "IT Project Client",
      category: "IT Services",
      quote: "Their innovative approach to IT solutions has transformed our business processes.",
    },
  ]

  return (
    <section className="py-20 bg-black overflow-hidden">
      <div className="container mx-auto px-4 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Trusted Clients</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We've partnered with leading organizations across various industries to deliver exceptional results.
          </p>
        </motion.div>
      </div>

      <InfiniteMovingCards
        items={clients.map((client) => ({
          content: (
            <div className="p-4">
              <p className="text-white/80 italic mb-2">"{client.quote}"</p>
              <h3 className="text-white font-semibold">{client.name}</h3>
              <p className="text-purple-400 text-sm">{client.category}</p>
            </div>
          ),
        }))}
        direction="right"
        speed="slow"
      />
    </section>
  )
}
