"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { BackgroundBeams } from "@/components/ui/aceternity/background-beams"

export function ContactCTA() {
  return (
    <section className="relative h-[500px] overflow-hidden bg-black">
      <BackgroundBeams className="opacity-20" />
      <div className="container relative z-10 mx-auto px-4 h-full flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-gray-300 mb-8">
            Let's discuss how Smartclues Technologies can help you achieve your business goals with our innovative IT
            solutions and services.
          </p>
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8">
            Get in Touch
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
