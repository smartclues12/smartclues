"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Lightbulb, Users, Shield, Zap, Target } from "lucide-react"

export function AboutValues() {
  const values = [
    {
      title: "Innovation",
      description: "We constantly push the boundaries of what's possible with technology.",
      icon: <Lightbulb className="h-8 w-8 text-purple-500" />,
    },
    {
      title: "Client-Centric",
      description: "Our clients' success is our success. We prioritize their needs above all else.",
      icon: <Users className="h-8 w-8 text-purple-500" />,
    },
    {
      title: "Security",
      description: "We implement the highest security standards in all our solutions.",
      icon: <Shield className="h-8 w-8 text-purple-500" />,
    },
    {
      title: "Efficiency",
      description: "We optimize processes to deliver maximum value with minimal waste.",
      icon: <Zap className="h-8 w-8 text-purple-500" />,
    },
    {
      title: "Excellence",
      description: "We strive for excellence in everything we do, from code to customer service.",
      icon: <Target className="h-8 w-8 text-purple-500" />,
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Core Values</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            These principles guide everything we do at Smartclues Technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full bg-gradient-to-br from-black to-purple-950/30 border border-purple-900/50 hover:border-purple-500/50 transition-all duration-300">
                <div className="flex flex-col h-full items-center text-center">
                  <div className="mb-4 p-3 rounded-full bg-purple-900/20">{value.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
