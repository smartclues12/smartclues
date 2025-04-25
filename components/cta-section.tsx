"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export function CtaSection() {
  return (
    <section className="py-20 relative overflow-hidden">
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

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Ready to transform your business with{" "}
              <span className="text-gradient">innovative technology?</span>
            </h2>

            <p className="text-zinc-400 mb-10 text-lg">
              Let's discuss how Smartclues Technologies can help you achieve
              your business goals with our cutting-edge IT solutions and expert
              services.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white"
                asChild
              >
                <Link href="/contact">Get in Touch</Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-zinc-700 hover:border-purple-500 text-white"
                asChild
              >
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Add gradient text style */}
      <style jsx>{`
        .text-gradient {
          background: linear-gradient(to right, #a855f7, #7e22ce);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </section>
  );
}
