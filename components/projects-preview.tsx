"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { StickyScroll } from "@/components/ui/aceternity/sticky-scroll"
import Link from "next/link"

export function ProjectsPreview() {
  const projects = [
    {
      title: "Medical Coding Full Project",
      description:
        "Comprehensive medical coding solution with 99.9% accuracy and 100% production efficiency. This project streamlined the entire coding process for a major healthcare provider.",
      stats: [
        { label: "Accuracy", value: "99.9%" },
        { label: "Production", value: "100%" },
        { label: "Turnaround Time", value: "24h" },
      ],
    },
    {
      title: "Medical Coding Validation",
      description:
        "Validation project for medical coding ensuring compliance and accuracy. Our team implemented rigorous validation processes to ensure error-free coding.",
      stats: [
        { label: "Error Rate", value: "<0.1%" },
        { label: "Compliance", value: "100%" },
        { label: "Validation Speed", value: "+40%" },
      ],
    },
    {
      title: "Digital Forensics Solution",
      description:
        "Advanced digital forensics solution for secure data recovery and analysis. This project helped clients recover critical data while maintaining chain of custody.",
      stats: [
        { label: "Recovery Rate", value: "98.5%" },
        { label: "Security", value: "Military-grade" },
        { label: "Analysis Time", value: "-30%" },
      ],
    },
    {
      title: "GST System Implementation",
      description:
        "End-to-end GST system implementation with automated compliance reporting. This solution simplified tax filing and reduced manual errors significantly.",
      stats: [
        { label: "Compliance", value: "100%" },
        { label: "Processing Time", value: "-60%" },
        { label: "Error Reduction", value: "95%" },
      ],
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Projects & Products</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our successful projects and innovative products that have delivered exceptional results for our
            clients.
          </p>
        </motion.div>

        <div className="h-[80vh]">
          <StickyScroll
            content={projects.map((project) => (
              <div key={project.title} className="flex flex-col gap-4">
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
                <div className="grid grid-cols-3 gap-4 mt-4">
                  {project.stats.map((stat) => (
                    <div key={stat.label} className="bg-black/50 border border-purple-900/50 rounded-lg p-3">
                      <p className="text-purple-400 text-sm">{stat.label}</p>
                      <p className="text-white text-xl font-bold">{stat.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          />
        </div>

        <div className="text-center mt-12">
          <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white">
            <Link href="/projects">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
