"use client"

import { motion } from "framer-motion"

export function ClientLogos() {
  const clients = [
    { name: "Clarus", category: "Medical" },
    { name: "VEE Tech Healthcare", category: "Healthcare" },
    { name: "Wipro", category: "Technology" },
    { name: "Digital Forensics Client", category: "Security" },
    { name: "GST Project Client", category: "Finance" },
    { name: "IT Services Client", category: "Technology" },
    { name: "Healthcare Provider", category: "Medical" },
    { name: "Financial Services", category: "Finance" },
  ]

  return (
    <section className="py-14 relative overflow-hidden bg-zinc-950">
      <div className="absolute inset-0 noise-bg"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-10"
        >
          <h2 className="text-xl font-medium text-zinc-400">Trusted by innovative companies</h2>
        </motion.div>

        <div className="relative">
          {/* Gradient fade on sides */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-zinc-950 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-zinc-950 to-transparent z-10"></div>

          {/* Scrolling logos */}
          <div className="flex overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap">
              {clients.map((client, index) => (
                <div
                  key={`${client.name}-1-${index}`}
                  className="mx-6 py-2 px-6 flex items-center justify-center min-w-[180px] h-20 rounded-lg bg-zinc-900/50 border border-zinc-800/50 backdrop-blur-sm glass-effect"
                >
                  <div className="text-center">
                    <div className="font-medium text-white">{client.name}</div>
                    <div className="text-xs text-purple-400">{client.category}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex animate-marquee whitespace-nowrap">
              {clients.map((client, index) => (
                <div
                  key={`${client.name}-2-${index}`}
                  className="mx-6 py-2 px-6 flex items-center justify-center min-w-[180px] h-20 rounded-lg bg-zinc-900/50 border border-zinc-800/50 backdrop-blur-sm glass-effect"
                >
                  <div className="text-center">
                    <div className="font-medium text-white">{client.name}</div>
                    <div className="text-xs text-purple-400">{client.category}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
