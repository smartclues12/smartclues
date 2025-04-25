"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Linkedin, Mail, ChevronDown, ChevronUp } from "lucide-react";

export function TeamSection() {
  const leadership = [
    {
      name: "Ashok Pabbathi",
      role: "Founder & CEO",
      bio: "Ashok Naga Sai Pabbathi the visionary founder of SmartClues Technologies LLP, is a seasoned Cybersecurity Expert and Digital Forensic Expert with over 11 years of handson experience in securing digital infrastructures and solving complex digital crimes. With a profound expertise in defending against ever-evolving cyber threats and conducting meticulous digital investigations, Ashok Pabbathi has made it their mission to help organizations protect their most valuable assets: data, systems, and reputations. With an educational background in Cyber Security & Digital Forensic specialized training in ethical hacking, penetration testing, incident response, and cyber forensics, Under Ashok Naga Sai's leadership, SmartClues Technologies LLP is focused on delivering the highest level of cybersecurity protection and digital forensics services Along with US Revenue Cycle Management Services . Their work not only helps businesses defend against cyber threats but also assists in recovering from security breaches and providing actionable insights during investigations.",
      image: "/placeholder.svg?height=400&width=400",
      social: {
        linkedin: "https://uk.linkedin.com/in/ashok-pabbathi-5b2209107",
        email: "ashok@smartcluestech.com",
      },
    },
    {
      name: "Naveen Pabbathi",
      role: "Co-founder & COO",
      bio: "Naveen Naga Sai , the Co-Founder of SmartClues Technologies LLP, is a highly experienced Revenue Cycle Management (RCM) Expert with a deep understanding of healthcare finance and operations. With over 6 years of hands-on experience in optimizing financial processes for healthcare organizations, Naveen Naga sai has been instrumental in streamlining revenue cycles and driving financial success for healthcare providers. With a strong background in healthcare administration, billing operations, and insurance processes, Naveen has dedicated their career to enhancing the efficiency and accuracy of RCM systems. Their approach blends industry best practices with innovative technology solutions, enabling healthcare providers to improve collections, minimize denials, and ensure compliance with ever-changing regulations. Naveen's expertise spans from managing end-to-end revenue cycles to implementing advanced technologies such as automation, AI-driven analytics, and electronic health records (EHR) systems that significantly improve operational efficiency and patient satisfaction. Their strategic approach has helped numerous healthcare organizations reduce administrative burdens, improve cash flow, and boost financial performance. Under Naveen's leadership, SmartClues Technologies LLP has pioneered innovative RCM solutions that not only maximize revenue but also improve the patient experience by providing greater transparency and streamlining billing processes. Naveen is passionate about empowering healthcare providers to focus on patient care while ensuring financial health through efficient and accurate revenue cycle Management",
      image: "/placeholder.svg?height=400&width=400",
      social: {
        linkedin: "https://in.linkedin.com/in/naveen-pabbathi-46b575146",
        email: "naveen@smartcluestech.com",
      },
    },
  ];

  const coreTeam = [
    {
      name: "Deepak Chopra",
      role: "Vice President",
      bio: "With a robust track record in business development and customer success, my tenure at Smartclues Technologies and Carelon Global Solutions has honed my expertise in generative AI applications and attention to detail.",
      // image: "/placeholder.svg?height=300&width=300",
      social: {
        linkedin: "https://in.linkedin.com/in/ddepak-chopra-0b04b739?trk=org-employees",
      },
    },
    {
      name: "Meda Balaji",
      role: "Operations Lead",
      bio: "As Operations Lead at Smartclues Technologies, I oversee day-to-day processes and ensure seamless project execution. With my background in operational excellence and team management, I focus on optimizing workflows and maintaining high quality standards across all our client deliverables.",
      // image: "/placeholder.svg?height=300&width=300",
      social: {
        linkedin: "https://www.linkedin.com/in/balaji-meda-0659a52a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        // email: "raj@smartcluestech.com",
      },
    },
    // {
    //   name: "Anjali Singh",
    //   role: "UX/UI Designer",
    //   bio: "Anjali creates intuitive and engaging user experiences that bring our digital solutions to life. Her background in cognitive psychology and design thinking helps ensure our products are both beautiful and functional.",
    //   image: "/placeholder.svg?height=300&width=300",
    //   social: {
    //     linkedin: "https://linkedin.com/",
    //     email: "anjali@smartcluestech.com",
    //   },
    // },
    // {
    //   name: "Vikram Mehta",
    //   role: "Project Manager",
    //   bio: "Vikram ensures our projects are delivered on time and within scope. With his PMP certification and agile methodology expertise, he coordinates between technical teams and clients to ensure smooth project execution.",
    //   image: "/placeholder.svg?height=300&width=300",
    //   social: {
    //     linkedin: "https://linkedin.com/",
    //     email: "vikram@smartcluestech.com",
    //   },
    // },
  ];

  // Track expanded state for each leader
  const [expandedLeaders, setExpandedLeaders] = useState({});

  const toggleBio = (name) => {
    setExpandedLeaders(prev => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <>
      {/* Leadership Section */}
      <section className="py-12 sm:py-16 md:py-20 relative">
        {/* Background elements */}
        <div className="absolute inset-0 bg-grid opacity-10"></div>
        <div className="absolute inset-0 noise-bg"></div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-10 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
              Our <span className="text-gradient">Leadership</span>
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto text-sm sm:text-base">
              Meet the visionaries behind Smartclues Technologies
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10"
          >
            {leadership.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col gap-4 sm:gap-6 md:gap-8"
              >
                <Card className="relative bg-zinc-900/50 border-zinc-800/50 p-4 sm:p-5 md:p-6 backdrop-blur-sm min-h-64">
                  <div className="flex flex-col h-full">
                    <div className="mb-8">
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                        {member.name}
                      </h3>
                      <p className="text-purple-400 text-xs sm:text-sm mb-3 md:mb-4">
                        {member.role}
                      </p>
                      <div className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                        {expandedLeaders[member.name] ? (
                          <p>{member.bio}</p>
                        ) : (
                          <p>{member.bio.substring(0, 200)}...</p>
                        )}
                        
                        <button 
                          onClick={() => toggleBio(member.name)}
                          className="mt-2 flex items-center gap-1 text-purple-400 hover:text-purple-300 transition-colors text-xs font-medium"
                        >
                          {expandedLeaders[member.name] ? (
                            <>
                              <span>Read Less</span>
                              <ChevronUp className="h-3 w-3" />
                            </>
                          ) : (
                            <>
                              <span>Read More</span>
                              <ChevronDown className="h-3 w-3" />
                            </>
                          )}
                        </button>
                      </div>
                    </div>

                    <div className="flex gap-2 mt-auto pt-4">
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full flex items-center justify-center bg-zinc-900/70 hover:bg-purple-900/50 backdrop-blur-sm text-zinc-300 hover:text-white transition-colors"
                        aria-label={`LinkedIn profile for ${member.name}`}
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>

                      <a
                        href={`mailto:${member.social.email}`}
                        className="w-8 h-8 rounded-full flex items-center justify-center bg-zinc-900/70 hover:bg-purple-900/50 backdrop-blur-sm text-zinc-300 hover:text-white transition-colors"
                        aria-label={`Email ${member.name}`}
                      >
                        <Mail className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Core Team Section */}
      <section className="py-12 sm:py-16 md:py-20 relative bg-zinc-950/50">
        {/* Background elements */}
        <div className="absolute inset-0 bg-grid opacity-10"></div>
        <div className="absolute inset-0 noise-bg"></div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-10 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
              Our <span className="text-gradient">Core Team</span>
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto text-sm sm:text-base">
              The talented professionals bringing our vision to life
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col items-center justify-center"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {coreTeam.map((member, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex flex-col"
                >
                  <Card className="relative bg-zinc-900/50 border-zinc-800/50 p-4 backdrop-blur-sm h-full">
                    <div className="flex flex-col h-full">
                      <div className="mb-6">
                        <h3 className="text-base sm:text-lg font-bold text-white mb-1">
                          {member.name}
                        </h3>
                        <p className="text-purple-400 text-xs mb-3">
                          {member.role}
                        </p>
                        <p className="text-zinc-400 text-xs leading-relaxed">
                          {member.bio}
                        </p>
                      </div>

                      <div className="flex gap-2 mt-auto pt-3">
                        <a
                          href={member.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-7 h-7 rounded-full flex items-center justify-center bg-zinc-900/70 hover:bg-purple-900/50 backdrop-blur-sm text-zinc-300 hover:text-white transition-colors"
                          aria-label={`LinkedIn profile for ${member.name}`}
                        >
                          <Linkedin className="h-3 w-3" />
                        </a>

                        {/* {member.social?.email && (
                          <a
                            href={`mailto:${member.social?.email}`}
                            className="w-7 h-7 rounded-full flex items-center justify-center bg-zinc-900/70 hover:bg-purple-900/50 backdrop-blur-sm text-zinc-300 hover:text-white transition-colors"
                            aria-label={`Email ${member.name}`}
                          >
                            <Mail className="h-3 w-3" />
                          </a>
                        )} */}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
