"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { BackgroundGradient } from "@/components/ui/aceternity/background-gradient"
import Link from "next/link"

export function AboutPreview() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">About Smartclues Technologies</h2>
            <p className="text-gray-300 mb-6">
              Smartclues Technologies LLP is a cutting-edge IT services company dedicated to delivering innovative
              digital solutions. We specialize in AI and automation-driven services that enhance business efficiency and
              security.
            </p>
            <p className="text-gray-300 mb-6">
              With a strong focus on product development, testing, security, web development, and blockchain services,
              we empower organizations to stay ahead in the digital era.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white">
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <BackgroundGradient className="rounded-[22px] max-w-sm p-4 bg-black">
              <div className="bg-black p-2 rounded-[20px]">
                <div className="space-y-6">
                  <div className="p-4 border border-purple-800 rounded-lg bg-black/50">
                    <h3 className="text-xl font-semibold text-white mb-2">Founded in 2019</h3>
                    <p className="text-gray-400">
                      Started with a vision to empower businesses through innovative digital solutions
                    </p>
                  </div>
                  <div className="p-4 border border-purple-800 rounded-lg bg-black/50">
                    <h3 className="text-xl font-semibold text-white mb-2">99.9% Quality</h3>
                    <p className="text-gray-400">In medical coding projects with 100% production efficiency</p>
                  </div>
                  <div className="p-4 border border-purple-800 rounded-lg bg-black/50">
                    <h3 className="text-xl font-semibold text-white mb-2">AI-Driven Solutions</h3>
                    <p className="text-gray-400">Leveraging cutting-edge AI technology for maximum efficiency</p>
                  </div>
                </div>
              </div>
            </BackgroundGradient>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
