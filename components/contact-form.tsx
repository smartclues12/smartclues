"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { BackgroundBeams } from "@/components/ui/aceternity/background-beams";
import Link from "next/link";

export function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <Card className="p-6 bg-black border border-purple-900/50 relative overflow-hidden">
        <BackgroundBeams className="absolute inset-0 opacity-10" />
        <div className="relative z-10">
          <h2 className="text-2xl font-bold text-white mb-6">
            Send us a message
          </h2>

          {isSubmitted ? (
            <div className="text-center py-12">
              <div className="mb-4 text-purple-500 flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Message Sent!
              </h3>
              <p className="text-gray-400">
                Thank you for reaching out. We'll get back to you as soon as
                possible.
              </p>
              <Button
                className="mt-6 bg-purple-600 hover:bg-purple-700"
                onClick={() => setIsSubmitted(false)}
              >
                Send Another Message
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-white">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="bg-black/50 border-purple-900/50 focus:border-purple-500"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-white">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="bg-black/50 border-purple-900/50 focus:border-purple-500"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-white">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  required
                  className="bg-black/50 border-purple-900/50 focus:border-purple-500"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-white">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project or inquiry..."
                  required
                  className="min-h-[150px] bg-black/50 border-purple-900/50 focus:border-purple-500 "
                />
              </div>
              <Link
                href="mailto:info@smartcluestech.com"
                passHref
                legacyBehavior
              >
                <a className="w-full">
                  <Button
                    type="button"
                    className=" w-full bg-purple-600 hover:bg-purple-700"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </a>
              </Link>
            </form>
          )}
        </div>
      </Card>
    </motion.div>
  );
}
