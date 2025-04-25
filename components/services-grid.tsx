"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import {
  Code,
  Database,
  Shield,
  Globe,
  Cpu,
  LineChart,
  ExternalLink,
} from "lucide-react";
import { useState } from "react";

export function ServicesGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const a1 = 1;

  const services = [
    {
      title: "Product Development",
      description:
        "Custom-built solutions tailored to your business needs with AI-driven automation.",
      icon: <Code className="h-6 w-6 text-purple-400" />,
      color: "from-purple-600/20 to-purple-900/20",
      iconBg: "bg-purple-900/20",
    },
    {
      title: "Testing & Security",
      description:
        "Comprehensive testing and security solutions to protect your digital assets.",
      icon: <Shield className="h-6 w-6 text-purple-400" />,
      color: "from-indigo-600/20 to-indigo-900/20",
      iconBg: "bg-indigo-900/20",
    },
    {
      title: "Web Development",
      description:
        "Modern, responsive web applications built with cutting-edge technologies.",
      icon: <Globe className="h-6 w-6 text-purple-400" />,
      color: "from-blue-600/20 to-blue-900/20",
      iconBg: "bg-blue-900/20",
    },
    {
      title: "Blockchain Services",
      description:
        "Innovative blockchain solutions for secure and transparent transactions.",
      icon: <Cpu className="h-6 w-6 text-purple-400" />,
      color: "from-emerald-600/20 to-emerald-900/20",
      iconBg: "bg-emerald-900/20",
    },
    {
      title: "Revenue Cycle Management",
      description:
        "Specialized in medical coding with 99.9% quality and 100% production.",
      icon: <LineChart className="h-6 w-6 text-purple-400" />,
      color: "from-amber-600/20 to-amber-900/20",
      iconBg: "bg-amber-900/20",
    },
    {
      title: "Database Management",
      description:
        "Efficient database solutions for optimal data storage and retrieval.",
      icon: <Database className="h-6 w-6 text-purple-400" />,
      color: "from-red-600/20 to-red-900/20",
      iconBg: "bg-red-900/20",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="lg:py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid opacity-20"></div>
      <div className="absolute inset-0 noise-bg"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: a1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            We offer a comprehensive range of IT services designed to help your
            business thrive in the digital era.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative"
            >
              <Card
                className={`h-full p-6 relative overflow-hidden backdrop-blur-sm bg-zinc-900/40 border-zinc-800/50 group transition-all duration-300 ${
                  hoveredIndex === index
                    ? "border-purple-500/50 shadow-lg shadow-purple-500/10"
                    : ""
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${
                    service.color
                  } opacity-20 transition-opacity duration-300 ${
                    hoveredIndex === index ? "opacity-40" : ""
                  }`}
                />

                <div className="relative z-10">
                  <div
                    className={`w-12 h-12 rounded-lg ${
                      service.iconBg
                    } flex items-center justify-center mb-5 transition-transform duration-300 ${
                      hoveredIndex === index ? "scale-110" : ""
                    }`}
                  >
                    {service.icon}
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-gradient transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-zinc-400">{service.description}</p>

                  <div
                    className={`mt-6 flex items-center text-sm font-medium text-purple-400 opacity-0 transform translate-y-2 transition-all duration-300 ${
                      hoveredIndex === index ? "opacity-100 translate-y-0" : ""
                    }`}
                  >
                    Learn more
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
