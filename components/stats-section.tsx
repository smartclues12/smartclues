"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { BackgroundGradient } from "@/components/ui/aceternity/background-gradient"

export function StatsSection() {
  const stats = [
    {
      value: "99.9%",
      label: "Quality Accuracy",
      description: "In medical coding projects",
    },
    {
      value: "100%",
      label: "Production Efficiency",
      description: "Consistent delivery on time",
    },
    {
      value: "50+",
      label: "Projects Completed",
      description: "Across various industries",
    },
    {
      value: "24/7",
      label: "Support & Maintenance",
      description: "For all our clients",
    },
  ]

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Performance Metrics</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We pride ourselves on delivering exceptional results consistently across all our projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <BackgroundGradient className="rounded-lg">
                <Card className="p-6 h-full bg-black border-none flex flex-col items-center text-center">
                  <h3 className="text-4xl font-bold text-purple-400 mb-2">{stat.value}</h3>
                  <p className="text-white font-medium mb-2">{stat.label}</p>
                  <p className="text-gray-400 text-sm">{stat.description}</p>
                </Card>
              </BackgroundGradient>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
