"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Smartclues Technologies has been instrumental in optimizing our medical coding processes. Their attention to detail and commitment to quality is exceptional.",
      name: "Geetha Lakshmi",
      title: "CTO, Clarus",
      initials: "GL",
    },
    {
      quote:
        "The team at Smartclues delivered our project on time and with exceptional quality. Their expertise in medical coding has significantly improved our operational efficiency.",
      name: "Chocko Valliappa",
      title: "Operations Director, VEE Tech Healthcare",
      initials: "CV",
    },
    {
      quote:
        "Working with Smartclues has been a game-changer for our digital forensics needs. Their technical knowledge and problem-solving abilities are outstanding.",
      name: "Abhishek kumar",
      title: "Security Lead, Digital Forensics Client",
      initials: "AK",
    },
    {
      quote:
        "The GST system implemented by Smartclues has streamlined our compliance processes and saved us countless hours of manual work. Highly recommended!",
      name: "Prashant Patil",
      title: "Finance Manager, GST Project Client",
      initials: "PP",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-purple-950/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with Smartclues
            Technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full bg-black border border-purple-900/50 hover:border-purple-500/50 transition-all duration-300">
                <div className="flex flex-col h-full">
                  <div className="mb-6 text-purple-500">
                    <Quote size={32} />
                  </div>
                  <p className="text-gray-300 mb-6 italic flex-grow">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 mr-4 bg-purple-900">
                      <AvatarFallback className="bg-purple-900 text-white">{testimonial.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="text-white font-medium">{testimonial.name}</h4>
                      <p className="text-purple-400 text-sm">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
