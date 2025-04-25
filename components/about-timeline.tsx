"use client"

import { motion, useScroll } from "framer-motion"
import { useRef } from "react"

export function AboutTimeline() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const timelineItems = [
    {
      year: "2019",
      title: "Company Founded",
      description:
        "Smartclues Technologies was founded by Ashok Pabbathi and Naveen Kumar with a vision to deliver innovative digital solutions.",
    },
    {
      year: "2020",
      title: "First Major Client",
      description:
        "Secured our first major client in the healthcare sector, delivering a comprehensive medical coding solution.",
    },
    {
      year: "2021",
      title: "Expanded Service Offerings",
      description:
        "Expanded our services to include digital forensics, GST systems, and blockchain solutions, broadening our expertise.",
    },
    {
      year: "2022",
      title: "Team Growth",
      description:
        "Grew our team of talented professionals, bringing together experts in various technological domains.",
    },
    {
      year: "2023",
      title: "Innovation Focus",
      description:
        "Strengthened our focus on AI-driven automation solutions, enhancing our product development capabilities.",
    },
    {
      year: "Today",
      title: "Continuing Excellence",
      description:
        "Continuing to deliver innovative solutions with 99.9% quality and 100% production efficiency across all projects.",
    },
  ]

  return (
    <section className="py-20 relative" ref={ref}>
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid opacity-10"></div>
      <div className="absolute inset-0 noise-bg"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            From our founding to where we are today, explore the key milestones in our company's history.
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-4xl">
          {/* Timeline line */}
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute left-9 top-2 bottom-2 w-0.5 bg-purple-700/30 origin-top"
          ></motion.div>

          {/* Timeline items */}
          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="flex items-start"
              >
                <div className="flex-shrink-0 w-20 h-20 rounded-full flex items-center justify-center bg-zinc-900 border border-purple-700/30 relative z-10">
                  <div className="text-purple-400 font-bold">{item.year}</div>
                </div>
                <div className="ml-8 bg-zinc-900/50 p-6 rounded-xl border border-zinc-800/50 backdrop-blur-sm flex-grow">
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-zinc-400">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
