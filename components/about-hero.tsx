"use client"

import { motion } from "framer-motion"
import { TextRevealCard } from "@/components/ui/aceternity/text-reveal-card"

export function AboutHero() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid opacity-10"></div>
      <div className="absolute inset-0 noise-bg"></div>

      {/* Radial gradient */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background: "radial-gradient(circle at center, rgba(124, 58, 237, 0.15) 0%, rgba(15, 15, 15, 0) 70%)",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About <span className="text-gradient">Smartclues</span>
            </h1>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              Our journey, mission, and the team behind Smartclues Technologies
            </p>
          </motion.div>

          <div className="mb-16">
            <TextRevealCard text="Empowering businesses through innovative digital solutions driven by AI, automation, and blockchain. Founded in 2019, we've built a reputation for excellence with 99.9% quality and 100% production efficiency." />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800/50 backdrop-blur-sm">
              <div className="text-3xl font-bold text-purple-400 mb-2">2019</div>
              <div className="text-zinc-300 font-medium">Founded Year</div>
              <p className="text-zinc-500 mt-2 text-sm">
                Started with a vision to empower businesses through innovative solutions
              </p>
            </div>
            <div className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800/50 backdrop-blur-sm">
              <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-zinc-300 font-medium">Quality Accuracy</div>
              <p className="text-zinc-500 mt-2 text-sm">
                Consistently delivering high-quality solutions across all our projects
              </p>
            </div>
            <div className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800/50 backdrop-blur-sm">
              <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-zinc-300 font-medium">Projects Delivered</div>
              <p className="text-zinc-500 mt-2 text-sm">
                Successfully completed projects across various industries and technologies
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
