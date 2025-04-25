"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function ContactInfo() {
  const contactDetails = [
    {
      icon: <MapPin className="h-6 w-6 text-purple-500" />,
      title: "Our Location",
      details: "Smartclues Technologies LLP, Hyderabad, India",
    },
    {
      icon: <Phone className="h-6 w-6 text-purple-500" />,
      title: "Phone Number",
      details: "+91 8977752573",
    },
    {
      icon: <Mail className="h-6 w-6 text-purple-500" />,
      title: "Email Address",
      details: "info@smartcluestech.com",
    },
    {
      icon: <Clock className="h-6 w-6 text-purple-500" />,
      title: "Working Hours",
      details: "Monday - Friday: 9:00 AM - 6:00 PM",
    },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://in.linkedin.com/company/smartclues-technologies-llp",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      ),
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/Smartcluestech/",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
        >
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
        </svg>
      ),
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/smartclues_tech/?hl=en",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
        </svg>
      ),
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Card className="p-6 bg-black border border-purple-900/50 h-full">
        <h2 className="text-2xl font-bold text-white mb-6">
          Contact Information
        </h2>

        <div className="space-y-6 mb-8">
          {contactDetails.map((item, index) => (
            <div key={index} className="flex items-start">
              <div className="mr-4 mt-1">{item.icon}</div>
              <div>
                <h3 className="text-white font-medium">{item.title}</h3>
                <p className="text-gray-400">{item.details}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-6 border-t border-purple-900/30">
          <h3 className="text-white font-medium mb-4">Connect With Us</h3>
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-purple-900/20 rounded-full text-white hover:bg-purple-900/50 transition-colors"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-purple-900/30">
          <h3 className="text-white font-medium mb-4">Business Hours</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-400">Monday - Friday</span>
              <span className="text-white">9:00 AM - 6:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Saturday</span>
              <span className="text-white">10:00 AM - 2:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Sunday</span>
              <span className="text-white">Closed</span>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
