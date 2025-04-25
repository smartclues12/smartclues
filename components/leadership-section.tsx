"use client"

import { motion } from "framer-motion"
import { HoverEffect } from "@/components/ui/aceternity/card-hover-effect"

export function LeadershipSection() {
  const leaders = [
    {
      name: "Ashok Pabbathi",
      title: "CEO & Co-founder",
      description: `I'm Ashok Kumar, the CEO and Co-founder of Smartclues Technologies LLP. Along with my brother Naveen, I started this company (2019) with a vision to empower businesses through innovative digital solutions driven by AI, automation, and blockchain. My journey in the tech world began with hands-on experience in digital forensics, GST systems, and income tax projects. These experiences gave me deep insight into security, compliance, and the complexities of digital infrastructure. At Smartclues, I focus on aligning our services—ranging from web development to secure product testing and development—with the evolving needs of our clients. We built this company not just to offer services, but to become a technology partner that genuinely helps organizations stay future-ready in an increasingly digital world.`,
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Naveen Kumar",
      title: "Co-founder & Managing Director",
      description: `I'm Naveen Kumar, Co-founder and Managing Director of Smartclues Technologies LLP. My role is centered around driving business growth, building client relationships, and identifying the right projects that align with our vision for innovation and impact. One of my core strengths lies in Revenue Cycle Management, particularly in medical coding, where I've spent years mastering the process from end to end. This background helps me understand complex workflows and deliver solutions that are efficient, compliant, and tailored to each client's needs. I'm passionate about bringing new opportunities to the table and making sure every project we take on at Smartclues adds real value. Together with Ashok, I'm proud of the team and the tech-driven culture we've built here.`,
      image: "/placeholder.svg?height=400&width=400",
    },
  ]

  const projects = leaders.map((leader) => ({
    title: leader.name,
    description: leader.title,
    content: leader.description,
  }))

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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Company Leadership</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Meet the visionaries behind Smartclues Technologies</p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <HoverEffect items={projects} />
        </div>
      </div>
    </section>
  )
}
