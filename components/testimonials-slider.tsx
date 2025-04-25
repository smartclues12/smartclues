"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export function TestimonialsSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-scroll testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      quote:
        "Smartclues Technologies has been instrumental in optimizing our medical coding processes. Their attention to detail and commitment to quality is exceptional.",
      name: "Geetha Lakshmi",
      initials: "GL",
    },
    {
      quote:
        "The team at Smartclues delivered our project on time and with exceptional quality. Their expertise in medical coding has significantly improved our operational efficiency.",
      name: "Chocko Valliappa",
      initials: "CV",
    },
    {
      quote:
        "Working with Smartclues has been a game-changer for our digital forensics needs. Their technical knowledge and problem-solving abilities are outstanding.",
      name: "Abhishek kumar",
      initials: "AK",
    },
    {
      quote:
        "The GST system implemented by Smartclues has streamlined our compliance processes and saved us countless hours of manual work. Highly recommended!",
      name: "Prashant Patil",
      initials: "PP",
    },
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToTestimonial = (index: number) => {
    setActiveIndex(index);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  const [direction, setDirection] = useState(0);

  return (
    <section className="py-20 relative bg-gradient-to-b from-zinc-950 to-zinc-900">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid opacity-10"></div>
      <div className="absolute inset-0 noise-bg"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Don't just take our word for it. Hear what our clients have to say
            about working with us.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <div className="relative h-80 overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Card className="w-full bg-zinc-900/50 border-zinc-800/50 p-8 backdrop-blur-sm">
                  <div className="text-purple-500 mb-6">
                    <Quote size={36} />
                  </div>
                  <p className="text-zinc-300 text-lg italic mb-8">
                    "{testimonials[activeIndex].quote}"
                  </p>
                  <div className="flex items-center">
                    <Avatar className="h-12 w-12 mr-4 bg-purple-900">
                      <AvatarFallback className="bg-purple-900 text-white">
                        {testimonials[activeIndex].initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="text-white font-medium">
                        {testimonials[activeIndex].name}
                      </h4>
                      <p className="text-purple-400 text-sm">
                        {testimonials[activeIndex].title}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation controls */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={() => {
                setDirection(-1);
                prevTestimonial();
              }}
              className="w-10 h-10 rounded-full flex items-center justify-center bg-zinc-900 hover:bg-purple-900/50 text-zinc-400 hover:text-white border border-zinc-800 hover:border-purple-500 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > activeIndex ? 1 : -1);
                    goToTestimonial(idx);
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    idx === activeIndex ? "bg-purple-500 w-6" : "bg-zinc-700"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => {
                setDirection(1);
                nextTestimonial();
              }}
              className="w-10 h-10 rounded-full flex items-center justify-center bg-zinc-900 hover:bg-purple-900/50 text-zinc-400 hover:text-white border border-zinc-800 hover:border-purple-500 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
