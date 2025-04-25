"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Code,
  Database,
  Shield,
  Server,
  Brain,
  Clock,
  ChartBar,
  Smartphone,
  Globe,
} from "lucide-react";

// Aceternity UI inspired animations
const BackgroundGradient = ({ children, className }) => {
  return (
    <div className={`relative group ${className}`}>
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
      <div className="relative">{children}</div>
    </div>
  );
};

const CardHoverEffect = ({ children }) => {
  return (
    <div className="group relative duration-200 cursor-pointer">
      <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-purple-600 to-purple-800 opacity-0 group-hover:opacity-100 blur transition duration-1000 group-hover:duration-200" />
      <div className="relative">{children}</div>
    </div>
  );
};

const serviceCategories = [
  {
    id: "it-services",
    name: "IT Services",
    description:
      "Our comprehensive IT services span from software development to systems integration.",
  },
  {
    id: "healthcare-solutions",
    name: "Healthcare Solutions",
    description:
      "Specialized technology solutions designed for healthcare providers and facilities.",
  },
  {
    id: "security",
    name: "Security Solutions",
    description:
      "Advanced cybersecurity and physical security solutions for modern enterprises.",
  },
];

const services = [
  {
    id: 1,
    category: "it-services",
    title: "Custom Software Development",
    description:
      "Tailor-made software solutions designed to address your specific business challenges and requirements.",
    icon: <Code className="h-6 w-6 text-purple-400" />,
    features: [
      "Web Applications",
      "Mobile Apps",
      "Enterprise Software",
      "API Development",
    ],
  },
  {
    id: 2,
    category: "it-services",
    title: "Cloud Solutions",
    description:
      "Comprehensive cloud services to help you migrate, optimize, and manage your applications in the cloud.",
    icon: <Server className="h-6 w-6 text-purple-400" />,
    features: [
      "Cloud Migration",
      "AWS/Azure Solutions",
      "Cloud Architecture",
      "Serverless Applications",
    ],
  },
  {
    id: 3,
    category: "it-services",
    title: "AI & Machine Learning",
    description:
      "Harness the power of artificial intelligence to automate processes",
    icon: <Brain className="h-6 w-6 text-purple-400" />,
    features: [
      "Predictive Analytics",
      "Natural Language Processing",
      "Computer Vision",
      "AI Integration",
    ],
  },
  {
    id: 4,
    category: "healthcare-solutions",
    title: "Medical Coding",
    description:
      "Accurate and efficient medical coding services with 99.9% accuracy.",
    icon: <Database className="h-6 w-6 text-purple-400" />,
    features: [
      "ICD-10 Coding",
      "CPT Coding",
      "HCPCS Coding",
      "Medical Billing Support",
    ],
  },
  {
    id: 5,
    category: "healthcare-solutions",
    title: "Healthcare Analytics",
    description:
      "Data-driven insights to improve patient outcomes, operational efficiency, and financial performance.",
    icon: <ChartBar className="h-6 w-6 text-purple-400" />,
    features: [
      "Clinical Analytics",
      "Financial Analytics",
      "Operational Analytics",
      "Population Health",
    ],
  },
  {
    id: 6,
    category: "healthcare-solutions",
    title: "Telehealth Solutions",
    description:
      "Enable virtual healthcare delivery with our secure, user-friendly telehealth platforms.",
    icon: <Smartphone className="h-6 w-6 text-purple-400" />,
    features: [
      "Virtual Consultations",
      "Remote Monitoring",
      "Patient Portals",
      "Medical IoT",
    ],
  },
  {
    id: 7,
    category: "security",
    title: "Cyber Security",
    description:
      "Comprehensive security solutions to protect your digital assets from evolving cyber threats.",
    icon: <Shield className="h-6 w-6 text-purple-400" />,
    features: [
      "Threat Detection",
      "Vulnerability Assessment",
      "Penetration Testing",
      "Security Training",
    ],
  },
  {
    id: 8,
    category: "security",
    title: "Compliance Solutions",
    description:
      "Ensure your organization meets industry regulations and compliance requirements.",
    icon: <Clock className="h-6 w-6 text-purple-400" />,
    features: ["HIPAA Compliance", "GDPR Compliance", "ISO 27001", "PCI DSS"],
  },
  {
    id: 9,
    category: "security",
    title: "Global Security Operations",
    description:
      "24/7 monitoring and security management services to keep your business protected at all times.",
    icon: <Globe className="h-6 w-6 text-purple-400" />,
    features: [
      "Security Monitoring",
      "Incident Response",
      "Threat Intelligence",
      "Security Audits",
    ],
  },
];

// Service card component for better organization
const ServiceCard = ({ service, isHovered, onHover, onLeave }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    onMouseEnter={onHover}
    onMouseLeave={onLeave}
    className="h-full"
  >
    <CardHoverEffect>
      <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 sm:p-6 h-full flex flex-col">
        <div className="mb-4">
          <div className="p-3 rounded-lg bg-purple-900/20 inline-block">
            {service.icon}
          </div>
        </div>

        <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
          {service.title}
        </h3>
        <p className="text-zinc-400 mb-4 sm:mb-6 text-sm sm:text-base">
          {service.description}
        </p>

        <div className="space-y-2 mb-4 sm:mb-6 flex-grow">
          {service.features.map((feature, idx) => (
            <div key={idx} className="flex items-center">
              <div className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></div>
              <span className="text-zinc-300 text-xs sm:text-sm">
                {feature}
              </span>
            </div>
          ))}
        </div>

        <motion.div
          className={`mt-auto transition-opacity duration-500 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
          animate={{
            y: isHovered ? 0 : 10,
          }}
          transition={{ duration: 0.3 }}
        >
        </motion.div>
      </div>
    </CardHoverEffect>
  </motion.div>
);

// Category button component
const CategoryButton = ({ category, isActive, onClick }) => (
  <motion.button
    onClick={onClick}
    className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
      isActive
        ? "bg-purple-700 text-white"
        : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800"
    }`}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {category.name}
  </motion.button>
);

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState("it-services");
  const [hoveredService, setHoveredService] = useState(null);

  const filteredServices = services.filter(
    (service) => service.category === activeCategory
  );

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-grid opacity-10"></div>
        <div className="absolute inset-0 noise-bg"></div>

        {/* Radial gradient */}
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(circle at center, rgba(124, 58, 237, 0.15) 0%, rgba(15, 15, 15, 0) 70%)",
          }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-7xl mx-auto text-center"
          >
            <div className="mb-3 inline-block">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-purple-900/30 text-purple-300 border border-purple-800/50">
                Our Expertise
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 tracking-tight">
              Innovative Solutions for
              <span className="text-gradient block mt-2">
                Modern Businesses
              </span>
            </h1>

            <p className="text-base sm:text-lg text-zinc-400 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
              From cutting-edge IT services to specialized healthcare solutions,
              we provide the technology and expertise you need to stay ahead in
              today's competitive landscape.
            </p>
          </motion.div>
        </div>

        {/* Animated dots background */}
        <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-40 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="grid grid-cols-10 sm:grid-cols-20 gap-2 sm:gap-4 opacity-20">
              {Array.from({ length: 100 }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.005, duration: 0.4 }}
                  className="h-1 w-1 sm:h-1.5 sm:w-1.5 rounded-full bg-purple-500/50"
                ></motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 md:py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Navigation - scrollable on mobile */}
          <div className="flex justify-center mb-8 sm:mb-16 overflow-x-auto pb-4 sm:pb-0 -mx-4 px-4 sm:px-0 scrollbar-thin scrollbar-thumb-purple-700 scrollbar-track-zinc-900">
            <div className="flex space-x-2 sm:space-x-4">
              {serviceCategories.map((category) => (
                <CategoryButton
                  key={category.id}
                  category={category}
                  isActive={activeCategory === category.id}
                  onClick={() => setActiveCategory(category.id)}
                />
              ))}
            </div>
          </div>

          {/* Category Description */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8 sm:mb-16 max-w-2xl mx-auto px-4"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4">
              {serviceCategories.find((c) => c.id === activeCategory)?.name}
            </h2>
            <p className="text-zinc-400 text-sm sm:text-lg">
              {
                serviceCategories.find((c) => c.id === activeCategory)
                  ?.description
              }
            </p>
          </motion.div>

          {/* Services Grid - improved responsive layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {filteredServices.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                isHovered={hoveredService === service.id}
                onHover={() => setHoveredService(service.id)}
                onLeave={() => setHoveredService(null)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-grid opacity-10"></div>
        <div className="absolute inset-0 noise-bg"></div>

        {/* Radial gradient */}
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(circle at center, rgba(124, 58, 237, 0.15) 0%, rgba(15, 15, 15, 0) 70%)",
          }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <BackgroundGradient className="rounded-2xl overflow-hidden">
            <div className="bg-zinc-900 rounded-xl p-6 sm:p-8 md:p-12">
              <div className="max-w-3xl mx-auto text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                    Need a custom solution for your business?
                  </h2>

                  <p className="text-zinc-400 mb-6 sm:mb-8 text-sm sm:text-lg">
                    Our team of experts is ready to create a tailored approach
                    that addresses your unique business challenges and
                    requirements.
                  </p>

                  <div className="flex flex-wrap gap-4 justify-center">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white group text-sm sm:text-base py-2 sm:py-4 px-4 sm:px-6"
                      asChild
                    >
                      <Link href="/contact">
                        Schedule a Consultation
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          </BackgroundGradient>
        </div>
      </section>

      {/* Adding style for text gradient and background effects */}
      <style jsx>{`
        .text-gradient {
          background: linear-gradient(to right, #a855f7, #7e22ce);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .bg-grid {
          background-size: 25px 25px;
          @media (min-width: 640px) {
            background-size: 50px 50px;
          }
          background-image: linear-gradient(
              to right,
              rgba(255, 255, 255, 0.05) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(255, 255, 255, 0.05) 1px,
              transparent 1px
            );
        }

        .noise-bg {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          opacity: 0.05;
        }

        /* Custom scrollbar styling */
        .scrollbar-thin::-webkit-scrollbar {
          height: 4px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: rgba(39, 39, 42, 0.3);
          border-radius: 10px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: rgba(126, 34, 206, 0.5);
          border-radius: 10px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: rgba(126, 34, 206, 0.7);
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        /* Add responsive touch support for mobile */
        @media (max-width: 640px) {
          .overflow-x-auto {
            -webkit-overflow-scrolling: touch;
            scrollbar-width: thin;
          }
        }
      `}</style>
    </div>
  );
}
