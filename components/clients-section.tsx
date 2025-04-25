"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { BackgroundBeams } from "@/components/ui/aceternity/background-beams";
import { ExternalLink } from "lucide-react";

export function ClientsSection() {
  const clients = [
    {
      name: "Clarus",
      category: "Medical Coding",
      description:
        "Comprehensive medical coding services with high accuracy and efficiency.",
      logo: "/clarus.png",
    },
    {
      name: "VEE Healthtek",
      category: "Medical Coding",
      description:
        "End-to-end medical coding solutions for healthcare providers.",
      link: 'https://www.veehealthtek.com/',
      logo: "/vee.png",
    },
    {
      name: "Wipro",
      category: "Medical Coding",
      description:
        "Strategic partnership for medical coding and healthcare IT services.",
      logo: "/wipro.png",
    },
    {
      name: "Medcode Client",
      category: "Medcode services",
      description:
        "MEDCODE is a dynamic organization of professionals delivering superlative services and powerful transformations",
      logo: "/medcode.png",
    },
  ];

  return (
    <section className="py-20 bg-black relative">
      <BackgroundBeams className="absolute inset-0 opacity-20" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Clients
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We're proud to work with leading organizations across various
            industries, delivering exceptional results and building lasting
            partnerships.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full bg-black border border-purple-900/50 hover:border-purple-500/50 transition-all duration-300">
                <div className="flex flex-col h-full">
                  <div className="mb-6 flex justify-center">
                    <div className="w-[200px] h-[100px] bg-black/50 flex items-center justify-center rounded-md border border-purple-900/30">
                      <img
                        src={client.logo || "/placeholder.svg"}
                        alt={`${client.name} logo`}
                        className="max-h-16"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {client.name}
                  </h3>
                  
                  {client.link && (
                    <a 
                      href={client.link}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="flex items-center gap-1 text-purple-400 hover:text-purple-300 text-sm mb-3 transition-colors"
                    >
                      Visit website <ExternalLink size={12} />
                    </a>
                  )}
                  
                  <p className="text-purple-400 text-sm mb-4">
                    {client.category}
                  </p>
                  <p className="text-gray-400 flex-grow">
                    {client.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}