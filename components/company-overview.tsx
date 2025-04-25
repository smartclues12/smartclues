"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CompanyOverview() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={sectionRef}
      className="py-20 relative"
      style={{
        background: `linear-gradient(to bottom, rgba(20,20,20,1) 0%, rgba(30,20,40,1) 100%)`,
      }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid opacity-10"></div>
      <div className="absolute inset-0 noise-bg"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Text content */}
          <motion.div style={{ opacity, y }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About{" "}
              <span className="text-gradient">Smartclues Technologies</span>
            </h2>

            <p className="text-zinc-300 mb-6">
              Smartclues Technologies LLP is a cutting-edge IT services company
              dedicated to delivering innovative digital solutions. Founded in
              2019, we specialize in AI and automation-driven services that
              enhance business efficiency and security.
            </p>

            <p className="text-zinc-400 mb-8">
              With a strong focus on product development, testing, security, web
              development, and blockchain services, we empower organizations to
              stay ahead in the digital era. Our medical coding services
              consistently achieve 99.9% quality and 100% production efficiency.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="p-4 rounded-lg bg-zinc-800/50 border border-zinc-700/50">
                <div className="text-purple-500 text-3xl font-bold mb-1">
                  2019
                </div>
                <div className="text-zinc-400 text-sm">Founded Year</div>
              </div>
              <div className="p-4 rounded-lg bg-zinc-800/50 border border-zinc-700/50">
                <div className="text-purple-500 text-3xl font-bold mb-1">
                  99.9%
                </div>
                <div className="text-zinc-400 text-sm">Quality Assurance</div>
              </div>
            </div>

            <div className="flex flex-row gap-4">
              <Link href="/about">
                <Button className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white">
                  Learn More About Us
                </Button>
              </Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://smartclues-tech.nyggs.com/dashboard"
              >
                <Button className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white">
                  Our HRMS dashboard
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Right column - Image */}
          <motion.div
            className="relative"
            style={{
              opacity,
              y: useTransform(scrollYProgress, [0, 1], [-50, 50]),
            }}
          >
            <div className="relative rounded-2xl overflow-hidden border border-zinc-800/50 shadow-xl">
              {/* Image placeholder */}
              <div className="aspect-[4/3] relative bg-zinc-800 w-full">
                <Image
                  src="/office.jpg"
                  alt="Smartclues Technologies Office"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/30 to-transparent"></div>
              </div>

              {/* Overlaid stats */}
              <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                <div className="flex-1 p-3 rounded-lg glass-effect">
                  <div className="text-purple-400 text-sm font-medium">
                    Projects
                  </div>
                  <div className="text-white text-xl font-bold">50+</div>
                </div>
                <div className="flex-1 p-3 rounded-lg glass-effect">
                  <div className="text-purple-400 text-sm font-medium">
                    Clients
                  </div>
                  <div className="text-white text-xl font-bold">20+</div>
                </div>
                <div className="flex-1 p-3 rounded-lg glass-effect">
                  <div className="text-purple-400 text-sm font-medium">
                    Experience
                  </div>
                  <div className="text-white text-xl font-bold">5+ Years</div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -z-10 -top-5 -right-5 h-40 w-40 rounded-full bg-purple-600/10 blur-3xl"></div>
            <div className="absolute -z-10 -bottom-5 -left-5 h-40 w-40 rounded-full bg-indigo-600/10 blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
