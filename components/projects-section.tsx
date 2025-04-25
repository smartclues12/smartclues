"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function ProjectsSection() {
  const projects = {
    medical: [
      {
        title: "Medical Coding",
        description:
          "Comprehensive medical coding solution with 99.9% accuracy and 100% production efficiency. This project streamlined the entire coding process for a major healthcare provider.",
        // client: "Clarus",
        year: "2022",
        stats: [
          { label: "Accuracy", value: "99.9%" },
          { label: "Production", value: "100%" },
          { label: "Turnaround Time", value: "24h" },
        ],
        tags: ["Medical Coding", "Healthcare", "Automation"],
      },
      {
        title: "Medical Coding Validation",
        description:
          "Validation project for medical coding ensuring compliance and accuracy. Our team implemented rigorous validation processes to ensure error-free coding.",
        client: "VEE Tech Healthcare",
        year: "2021",
        stats: [
          { label: "Error Rate", value: "<0.1%" },
          { label: "Compliance", value: "100%" },
          { label: "Validation Speed", value: "+40%" },
        ],
        tags: ["Validation", "Compliance", "Healthcare"],
      },
      {
        title: "Revenue Cycle Management System",
        description:
          "End-to-end revenue cycle management system for healthcare providers, integrating medical coding, billing, and claims processing.",
        client: "Wipro",
        year: "2023",
        stats: [
          { label: "Revenue Increase", value: "15%" },
          { label: "Processing Time", value: "-35%" },
          { label: "Claim Acceptance", value: "98%" },
        ],
        tags: ["RCM", "Healthcare", "Integration"],
      },
    ],
    digital: [
      {
        title: "Digital Forensics Solutions",
        description:
          "Advanced digital forensics solution for secure data recovery and analysis. This project helped clients recover critical data while maintaining chain of custody.",
        // client: "Digital Forensics Client",
        year: "2022",
        stats: [
          { label: "Recovery Rate", value: "98.5%" },
          { label: "Security", value: "Military-grade" },
          { label: "Analysis Time", value: "-30%" },
        ],
        tags: ["Digital Forensics", "Security", "Data Recovery"],
      },
      {
        title: "Cyber Security",
        description:
          "End-to-end GST system implementation with automated compliance reporting. This solution simplified tax filing and reduced manual errors significantly.",
        // client: "GST Project Client",
        year: "2021",
        stats: [
          { label: "Compliance", value: "100%" },
          { label: "Processing Time", value: "-60%" },
          { label: "Error Reduction", value: "95%" },
        ],
        tags: ["Security", "Compliance", "Automation"],
      },
    ],
    it: [
      {
        title: "AI-Driven Analytics Platform",
        description:
          "Custom analytics platform powered by AI to provide actionable insights from complex data sets. This solution helped the client make data-driven decisions.",
        client: "IT Project Client",
        year: "2023",
        stats: [
          { label: "Insight Generation", value: "+200%" },
          { label: "Decision Time", value: "-45%" },
          { label: "ROI", value: "320%" },
        ],
        tags: ["AI", "Analytics", "Big Data"],
      },
      {
        title: "Secure Web Application",
        description:
          "Highly secure web application with advanced authentication and authorization features. This project ensured the client's sensitive data remained protected.",
        client: "IT Security Client",
        year: "2022",
        stats: [
          { label: "Security Score", value: "98/100" },
          { label: "Uptime", value: "99.99%" },
          { label: "User Satisfaction", value: "4.8/5" },
        ],
        tags: ["Web Development", "Security", "UX"],
      },
    ],
  }

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Projects & Products</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore our successful projects and innovative products that have delivered exceptional results for our
            clients.
          </p>
        </motion.div>

        <Tabs defaultValue="medical" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-12 bg-black/50 border border-purple-900/50">
            <TabsTrigger value="medical" className="data-[state=active]:bg-purple-900/50">
              Medical Coding
            </TabsTrigger>
            <TabsTrigger value="digital" className="data-[state=active]:bg-purple-900/50">
              Digital Forensics & GST
            </TabsTrigger>
            <TabsTrigger value="it" className="data-[state=active]:bg-purple-900/50">
              IT Projects
            </TabsTrigger>
          </TabsList>

          <TabsContent value="medical">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {projects.medical.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="digital">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {projects.digital.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="it">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {projects.it.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }: { project: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="p-6 h-full bg-black border border-purple-900/50 hover:border-purple-500/50 transition-all duration-300">
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-bold text-white">{project.title}</h3>
            <Badge variant="outline" className="border-purple-500 text-purple-400">
              {project.year}
            </Badge>
          </div>

          <p className="text-gray-400 mb-6 flex-grow">{project.description}</p>

          <div className="mb-6">
            <p className="text-sm text-gray-500 mb-2">
              Client: <span className="text-white">{project.client}</span>
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tags.map((tag: string, i: number) => (
                <Badge key={i} variant="secondary" className="bg-purple-900/30 text-purple-200">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-auto">
            {project.stats.map((stat: any, i: number) => (
              <div key={i} className="bg-black/50 border border-purple-900/50 rounded-lg p-3">
                <p className="text-purple-400 text-xs">{stat.label}</p>
                <p className="text-white text-lg font-bold">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
