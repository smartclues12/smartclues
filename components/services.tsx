"use client"

import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import { LampContainer } from "@/components/ui/aceternity/lamp"
import { Code, Database, Shield, Globe, Cpu, LineChart } from "lucide-react"

export function Services() {
  const services = [
    {
      title: "Product Development",
      description: "Custom-built solutions tailored to your business needs with AI-driven automation.",
      icon: <Code className="h-10 w-10 text-purple-500" />,
    },
    {
      title: "Testing & Security",
      description: "Comprehensive testing and security solutions to protect your digital assets.",
      icon: <Shield className="h-10 w-10 text-purple-500" />,
    },
    {
      title: "Web Development",
      description: "Modern, responsive web applications built with cutting-edge technologies.",
      icon: <Globe className="h-10 w-10 text-purple-500" />,
    },
    {
      title: "Blockchain Services",
      description: "Innovative blockchain solutions for secure and transparent transactions.",
      icon: <Cpu className="h-10 w-10 text-purple-500" />,
    },
    {
      title: "Revenue Cycle Management",
      description: "Specialized in medical coding with 99.9% quality and 100% production.",
      icon: <LineChart className="h-10 w-10 text-purple-500" />,
    },
    {
      title: "Database Management",
      description: "Efficient database solutions for optimal data storage and retrieval.",
      icon: <Database className="h-10 w-10 text-purple-500" />,
    },
  ]

  return (
    <section className="py-20 bg-black">
      <LampContainer>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We offer a wide range of IT services to help your business thrive in the digital era.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full bg-black border border-purple-900/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
                  <div className="flex flex-col h-full">
                    <div className="mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-400 flex-grow">{service.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </LampContainer>
    </section>
  )
}
