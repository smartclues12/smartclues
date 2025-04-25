"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Database, Shield } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  // Interactive 3D tilt effect
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
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
    <section
      ref={heroRef}
      className="relative flex items-center py-24 overflow-hidden"
      style={{
        background: `radial-gradient(circle at 50% 50%, rgba(109, 40, 217, 0.2) 0%, rgba(10, 10, 10, 0) 70%)`,
      }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid opacity-30 hero-mask"></div>
      <div className="absolute inset-0 noise-bg"></div>

      {/* Animated background orbs */}
      <div
        className="absolute w-64 h-64 rounded-full bg-purple-900/20 blur-3xl"
        style={{
          top: "20%",
          left: "60%",
          transform: `translate(${mousePosition.x * 20}px, ${
            mousePosition.y * 20
          }px)`,
          transition: "transform 0.3s ease-out",
        }}
      />
      <div
        className="absolute w-80 h-80 rounded-full bg-indigo-900/20 blur-3xl"
        style={{
          top: "50%",
          left: "10%",
          transform: `translate(${mousePosition.x * -20}px, ${
            mousePosition.y * -20
          }px)`,
          transition: "transform 0.3s ease-out",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col-reverse md:flex-col-reverse lg:flex-row gap-16 items-center">
          {/* Hero text content */}
          <div
            className="w-full lg:w-1/2 mt-12 lg:mt-0"
            style={{
              opacity: 1,
              transform: "translateY(0px)",
              transition: "opacity 0.5s, transform 0.5s",
            }}
          >
            <div className="mb-3">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-900/30 text-purple-300 border border-purple-800/50">
                Innovating since 2019
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight">
              Empowering Businesses with{" "}
              <span className="text-gradient">
                Intelligent Digital Solutions
              </span>
            </h1>

            <p className="text-lg text-zinc-400 mb-8 max-w-xl leading-relaxed">
              Smartclues Technologies delivers cutting-edge IT services and
              revenue cycle management solutions powered by AI and automation to
              enhance business efficiency and security.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/services">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white shadow-lg shadow-purple-900/20 group"
                >
                  Explore Our Services
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-purple-700 text-white"
                >
                  About Us
                </Button>
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-4 md:gap-8 text-sm text-zinc-400">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-purple-500"></span>
                99.9% Quality
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-purple-500"></span>
                100% Production
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-purple-500"></span>
                AI-Driven
              </div>
            </div>
          </div>

          {/* Hero visual */}
          <div
            className="hidden w-full lg:w-1/2 lg:flex justify-center py-12"
            style={{
              opacity: 1,
              transform: "translateY(0px)",
              transition: "opacity 0.7s, transform 0.7s",
              transitionDelay: "0.2s",
            }}
          >
            <div className="relative w-full max-w-sm">
              {/* Main illustration/image placeholder */}
              <div
                className="w-full aspect-square rounded-3xl bg-gradient-to-br from-purple-500/10 to-purple-900/20 border border-white/10 p-1 backdrop-blur-sm"
                style={{
                  transform: `rotateX(${mousePosition.y * -5}deg) rotateY(${
                    mousePosition.x * 5
                  }deg)`,
                  transition: "transform 0.3s ease-out",
                }}
              >
                <div className="w-full h-full rounded-2xl bg-zinc-900/50 flex items-center justify-center overflow-hidden glass-effect">
                  <div className="relative w-full h-full p-8 flex items-center justify-center">
                    {/* Radial gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-radial from-purple-600/10 to-transparent"></div>

                    {/* Floating elements */}
                    <div
                      className="absolute top-12 left-16 p-3 rounded-xl glass-effect flex items-center shadow-lg"
                      style={{
                        animation: "floatY 4s ease-in-out infinite",
                      }}
                    >
                      <div className="mr-3 p-2 rounded-lg bg-purple-700/30">
                        <Code className="h-5 w-5 text-purple-400" />
                      </div>
                      <div>
                        <div className="text-xs font-medium text-white">
                          Product Development
                        </div>
                        <div className="text-xs text-zinc-400">
                          AI-Driven Solutions
                        </div>
                      </div>
                    </div>

                    <div
                      className="absolute bottom-12 left-20 p-3 rounded-xl glass-effect flex items-center shadow-lg"
                      style={{
                        animation: "floatY 5s ease-in-out infinite 0.5s",
                      }}
                    >
                      <div className="mr-3 p-2 rounded-lg bg-purple-700/30">
                        <Database className="h-5 w-5 text-purple-400" />
                      </div>
                      <div>
                        <div className="text-xs font-medium text-white">
                          Medical Coding
                        </div>
                        <div className="text-xs text-zinc-400">
                          1M HCC charts coded
                        </div>
                      </div>
                    </div>

                    <div
                      className="absolute top-32 right-10 p-3 rounded-xl glass-effect flex items-center shadow-lg"
                      style={{
                        animation: "floatY 4.5s ease-in-out infinite 1s",
                      }}
                    >
                      <div className="mr-3 p-2 rounded-lg bg-purple-700/30">
                        <Shield className="h-5 w-5 text-purple-400" />
                      </div>
                      <div>
                        <div className="text-xs font-medium text-white">
                          Security Services
                        </div>
                        <div className="text-xs text-zinc-400">
                          Enterprise Protection
                        </div>
                      </div>
                    </div>

                    {/* Center logo */}
                    {/* <div className="relative h-16 w-16 rounded-full bg-gradient-to-tr from-purple-600 to-purple-900 flex items-center justify-center shadow-2xl glow">
                      <span className="text-white text-2xl font-bold">S</span>
                    </div> */}
                  </div>
                </div>
              </div>

              {/* Background decoration elements */}
              <div className="absolute -z-10 -top-8 -right-8 h-64 w-64 rounded-full bg-purple-600/10 blur-3xl animate-pulse-glow"></div>
              <div className="absolute -z-10 -bottom-10 -left-10 h-64 w-64 rounded-full bg-indigo-600/10 blur-3xl animate-pulse-glow"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hidden lg:flex absolute bottom-8 left-1/2 transform -translate-x-1/2 flex-col items-center">
        <div
          className="text-zinc-500 text-sm mb-2"
          style={{
            opacity: 1,
            transform: "translateY(0px)",
            transition: "opacity 0.5s, transform 0.5s",
            transitionDelay: "1.5s",
          }}
        >
          Scroll to explore
        </div>
        <div
          style={{
            animation: "floatY 2s ease-in-out infinite",
          }}
          className="h-10 w-6 rounded-full border border-zinc-700 flex items-center justify-center"
        >
          <div
            style={{
              animation: "pulseHeight 2s infinite",
            }}
            className="h-2 w-1 bg-purple-500 rounded-full"
          ></div>
        </div>
      </div>

      {/* Required CSS animations */}
      <style jsx>{`
        @keyframes floatY {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes pulseHeight {
          0%,
          100% {
            height: 6px;
          }
          50% {
            height: 12px;
          }
        }

        .text-gradient {
          background: linear-gradient(to right, #a855f7, #7e22ce);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .glass-effect {
          background: rgba(30, 30, 40, 0.3);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .glow {
          box-shadow: 0 0 40px rgba(168, 85, 247, 0.4);
        }

        .animate-pulse-glow {
          animation: pulse-glow 4s ease-in-out infinite alternate;
        }

        @keyframes pulse-glow {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }
      `}</style>
    </section>
  );
}
