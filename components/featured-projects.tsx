"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  Award,
  TrendingUp,
  ExternalLink,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export function FeaturedProjects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [bookmarks, setBookmarks] = useState([]);

  const projects = [
    {
      title: "Medical Coding Full Project",
      description:
        "Comprehensive medical coding solution with 99.9% accuracy and 100% production efficiency. This project streamlined the entire coding process for a major healthcare provider.",
      client: "Clarus",
      year: "2022",
      stats: [
        { label: "Accuracy", value: "99.9%" },
        { label: "Production", value: "100%" },
        { label: "Turnaround", value: "24h" },
      ],
      tags: ["Medical Coding", "Healthcare", "Automation"],
      color: "from-purple-600/20 to-purple-800/20",
      caseStudyUrl: "/case-studies/medical-coding",
    },
    {
      title: "Digital Forensics Solution",
      description:
        "Advanced digital forensics solution for secure data recovery and analysis. This project helped clients recover critical data while maintaining chain of custody.",
      client: "Digital Forensics Client",
      year: "2022",
      stats: [
        { label: "Recovery Rate", value: "98.5%" },
        { label: "Security", value: "Military-grade" },
        { label: "Analysis Time", value: "-30%" },
      ],
      tags: ["Digital Forensics", "Security", "Data Recovery"],
      color: "from-blue-600/20 to-blue-800/20",
      caseStudyUrl: "/case-studies/digital-forensics",
    },
    {
      title: "GST System Implementation",
      description:
        "End-to-end GST system implementation with automated compliance reporting. This solution simplified tax filing and reduced manual errors significantly.",
      client: "GST Project Client",
      year: "2021",
      stats: [
        { label: "Compliance", value: "100%" },
        { label: "Processing Time", value: "-60%" },
        { label: "Error Reduction", value: "95%" },
      ],
      tags: ["GST", "Compliance", "Automation"],
      color: "from-emerald-600/20 to-emerald-800/20",
      caseStudyUrl: "/case-studies/gst-implementation",
    },
  ];

  useEffect(() => {
    // Load bookmarks from localStorage if available
    const savedBookmarks = localStorage.getItem("projectBookmarks");
    if (savedBookmarks) {
      setBookmarks(JSON.parse(savedBookmarks));
    }

    // Set up autoplay interval
    let interval;
    if (autoplay) {
      interval = setInterval(() => {
        nextProject();
      }, 5000);
    }

    return () => clearInterval(interval);
  }, [autoplay, activeIndex]);

  const toggleBookmark = (index) => {
    const newBookmarks = [...bookmarks];
    if (newBookmarks.includes(index)) {
      const bookmarkIndex = newBookmarks.indexOf(index);
      newBookmarks.splice(bookmarkIndex, 1);
    } else {
      newBookmarks.push(index);
    }
    setBookmarks(newBookmarks);
    localStorage.setItem("projectBookmarks", JSON.stringify(newBookmarks));
  };

  const nextProject = () => {
    setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevProject = () => {
    setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  return (
    <section className="py-10 sm:py-16 md:py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid opacity-20"></div>
      <div className="absolute inset-0 noise-bg"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-6 sm:mb-0"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-zinc-400 max-w-xl text-sm sm:text-base">
              Explore our successful projects that have delivered exceptional
              results for our clients.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="hidden sm:flex gap-3"
          >
            <Button
              variant="outline"
              size="icon"
              onClick={prevProject}
              className="rounded-full border-zinc-700 hover:bg-zinc-800 hover:border-purple-500"
            >
              <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextProject}
              className="rounded-full border-zinc-700 hover:bg-zinc-800 hover:border-purple-500"
            >
              <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </motion.div>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-start lg:items-center"
            >
              {/* Project visual */}
              <div className="relative order-2 lg:order-1">
                <Card
                  className={`rounded-xl overflow-hidden border-zinc-800/50 p-3 sm:p-4 md:p-6 bg-gradient-to-br ${projects[activeIndex].color}`}
                >
                  <div className="aspect-[4/3] relative bg-zinc-900 rounded-lg overflow-hidden flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
                    <div className="text-center">
                      <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4">
                        {projects[activeIndex].title}
                      </div>
                      <div className="text-base sm:text-lg md:text-xl text-zinc-400 mb-4 sm:mb-6">
                        {projects[activeIndex].client}
                      </div>

                      <div className="flex justify-center gap-2 sm:gap-4 mb-4 sm:mb-8">
                        {projects[activeIndex].stats.map((stat, idx) => (
                          <div key={idx} className="text-center">
                            <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-purple-400">
                              {stat.value}
                            </div>
                            <div className="text-xs sm:text-sm text-zinc-400">
                              {stat.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap justify-center gap-1 sm:gap-2 mb-2 sm:mb-4">
                        {projects[activeIndex].tags.map((tag, idx) => (
                          <Badge
                            key={idx}
                            variant="outline"
                            className="bg-zinc-800/50 border-zinc-700/50 text-xs sm:text-sm"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Project number indicator */}
                    <div className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-zinc-900/70 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full border border-zinc-700/50 text-xs sm:text-sm">
                      Project {activeIndex + 1}/{projects.length}
                    </div>
                  </div>
                </Card>

                {/* Decorative elements */}
                <div
                  className={`absolute -z-10 -bottom-5 -right-5 h-20 w-20 sm:h-32 sm:w-32 md:h-40 md:w-40 rounded-full bg-${
                    activeIndex === 0
                      ? "purple"
                      : activeIndex === 1
                      ? "blue"
                      : "emerald"
                  }-600/10 blur-3xl`}
                ></div>
              </div>

              {/* Project details */}
              <div className="order-1 lg:order-2">
                <div className="mb-1 flex flex-wrap">
                  {projects[activeIndex].tags.map((tag, idx) => (
                    <Badge
                      key={idx}
                      variant="outline"
                      className="mr-2 mb-2 bg-zinc-900/50 border-zinc-700/50 text-zinc-300 text-xs sm:text-sm"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
                  {projects[activeIndex].title}
                </h3>
                <p className="text-sm sm:text-base text-zinc-400 mb-6 sm:mb-8">
                  {projects[activeIndex].description}
                </p>

                <div className="grid grid-cols-1 xs:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
                  {projects[activeIndex].stats.map((stat, idx) => (
                    <div
                      key={idx}
                      className="p-3 sm:p-4 rounded-lg border border-zinc-800/50 bg-zinc-900/30 backdrop-blur-sm"
                    >
                      <div className="text-purple-400 text-lg sm:text-xl md:text-2xl font-bold">
                        {stat.value}
                      </div>
                      <div className="text-zinc-500 text-xs sm:text-sm">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Project timeline */}
                <div className="mt-6 sm:mt-8">
                  <h4 className="text-base sm:text-lg font-medium mb-2 sm:mb-3 flex items-center">
                    <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-purple-400" />
                    Project Timeline
                  </h4>
                  <div className="relative pl-4 sm:pl-6 border-l border-zinc-800">
                    <div className="mb-3 sm:mb-4 relative">
                      <div className="absolute -left-[20px] sm:-left-[32px] w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-purple-500"></div>
                      <div className="text-xs sm:text-sm text-zinc-400">
                        Discovery Phase
                      </div>
                      <div className="text-sm sm:text-base font-medium">
                        Analysis and Strategy
                      </div>
                    </div>
                    <div className="mb-3 sm:mb-4 relative">
                      <div className="absolute -left-[20px] sm:-left-[32px] w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-purple-500"></div>
                      <div className="text-xs sm:text-sm text-zinc-400">
                        Development
                      </div>
                      <div className="text-sm sm:text-base font-medium">
                        Solution Implementation
                      </div>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-[20px] sm:-left-[32px] w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-purple-500"></div>
                      <div className="text-xs sm:text-sm text-zinc-400">
                        Delivery
                      </div>
                      <div className="text-sm sm:text-base font-medium">
                        Final Deployment
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Mobile navigation controls */}
          <div className="flex justify-center mt-6 sm:mt-8 gap-3 sm:hidden">
            <Button
              variant="outline"
              size="sm"
              onClick={prevProject}
              className="rounded-full border-zinc-700 hover:bg-zinc-800 h-8 w-8 p-0"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="flex items-center gap-2">
              {projects.map((_, idx) => (
                <button
                  key={idx}
                  className={`h-2 rounded-full transition-all ${
                    idx === activeIndex
                      ? "w-6 bg-purple-500"
                      : "w-2 bg-zinc-700"
                  }`}
                  onClick={() => setActiveIndex(idx)}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={nextProject}
              className="rounded-full border-zinc-700 hover:bg-zinc-800 h-8 w-8 p-0"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
