"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Briefcase,
  Users,
  Rocket,
  Heart,
  Medal,
  TrendingUp,
  Clock,
  MapPin,
  DollarSign,
  ChevronDown,
  ChevronUp,
  Mail,
  Stethoscope,
  ClipboardList,
  Dumbbell,
  SquareActivity,
} from "lucide-react";


export function CareersPage() {
  const [expandedJob, setExpandedJob] = useState(null);

  const toggleJobDetails = (id) => {
    setExpandedJob(expandedJob === id ? null : id);
  };

  const jobs = [
    {
      id: 1,
      title: "Junior Medical Coder",
      department: "Healthcare",
      location: "Hyderabad, Capital Park 4th floor, Madhapur",
      type: "Full-time",

      description:
        "Join our growing healthcare team! We're looking for a detail-oriented and motivated Junior Medical Coder to help ensure accurate coding and billing practices.",
      responsibilities: [
        "Learn and apply medical coding standards",
        "Review patient records for accurate code assignment",
        "Support the billing team with coding-related queries",
        "Participate in ongoing training and education",
        "Maintain patient confidentiality and data security",
      ],
      requirements: [
        "Knowledge of ICD-10, CPT, and HCPCS (a plus, not required)",
        "Good attention to detail",
        "Willingness to learn and grow",
        "Basic computer skills",
        "Strong work ethic and reliability",
      ],
      icon: <Stethoscope className="h-6 w-6 text-purple-400" />,
    },
    {
      id: 2,
      title: "Senior Medical Coder",
      department: "Healthcare",
      location: "Hyderabad, Capital Park 4th floor, Madhapur",
      type: "Full-time",
      description:
        "Seeking an experienced Medical Coder (1+ year) to join our dynamic healthcare team!",
      responsibilities: [
        "Assign accurate medical codes using ICD-10, CPT, and HCPCS",
        "Review and validate coding work for accuracy and compliance",
        "Identify and resolve coding discrepancies",
        "Assist in training junior coding staff",
        "Stay current with coding guidelines and regulations",
      ],
      requirements: [
        "Minimum 1 year coding experience",
        "Proficiency in ICD-10, CPT, HCPCS",
        "Accuracy & attention to detail",
        "Knowledge of medical terminology",
        "Familiarity with healthcare compliance regulations",
      ],
      icon: <ClipboardList className="h-6 w-6 text-purple-400" />,
    },
    {
      id: 3,
      title: "Group Coach",
      department: "Health Care",
      location: "Hyderabad, Capital Park 4th floor, Madhapur",
      type: "Full-time",
      description:
        "We're looking for an energetic Group Coach with 1+ year of experience to lead fun, effective sessions and inspire our community!",
      responsibilities: [
        "Lead engaging group fitness sessions",
        "Create and adapt workout programs for various fitness levels",
        "Provide guidance on proper form and technique",
        "Build rapport with clients and foster community",
        "Track client progress and provide motivational support",
      ],
      requirements: [
        "Minimum 1 year group coaching experience",
        "Great communication & leadership skills",
        "Passion for fitness and people",
        "Relevant fitness certifications",
        "Ability to motivate and inspire participants",
      ],
      icon: <SquareActivity className="h-6 w-6 text-purple-400" />,
    },
  ];

  const values = [
    {
      icon: <Medal className="h-8 w-8 text-purple-400" />,
      title: "Excellence",
      description:
        "We pursue the highest standards in everything we do, constantly seeking to improve and innovate.",
    },
    {
      icon: <Users className="h-8 w-8 text-purple-400" />,
      title: "Collaboration",
      description:
        "We believe in the power of teamwork and fostering an environment where diverse perspectives thrive.",
    },
    {
      icon: <Heart className="h-8 w-8 text-purple-400" />,
      title: "Integrity",
      description:
        "We operate with honesty, transparency, and ethical practices in all our interactions.",
    },
    {
      icon: <Rocket className="h-8 w-8 text-purple-400" />,
      title: "Innovation",
      description:
        "We embrace creative thinking and technological advancement to solve complex challenges.",
    },
  ];

  const benefits = [
    {
      icon: <TrendingUp className="h-6 w-6 text-purple-400" />,
      title: "Career Growth",
      description:
        "Continuous learning opportunities and clear paths for advancement",
    },
    {
      icon: <Clock className="h-6 w-6 text-purple-400" />,
      title: "Flexible Schedule",
      description: "Work-life balance with remote and flexible working options",
    },
    {
      icon: <DollarSign className="h-6 w-6 text-purple-400" />,
      title: "Competitive Compensation",
      description: "Salary packages that recognize your skills and experience",
    },
    {
      icon: <Users className="h-6 w-6 text-purple-400" />,
      title: "Collaborative Culture",
      description: "Supportive team environment that values every voice",
    },
  ];

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
      {/* Hero Section */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-grid opacity-10"></div>
        <div className="absolute inset-0 noise-bg"></div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Join Our <span className="text-gradient">Team</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-zinc-400 text-lg md:text-xl mb-8"
            >
              Be part of a team that's redefining cybersecurity and healthcare
              revenue management
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-white"
                onClick={() =>
                  document
                    .getElementById("open-positions")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                View Open Positions
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 md:py-20 relative bg-zinc-950/50">
        <div className="absolute inset-0 bg-grid opacity-10"></div>
        <div className="absolute inset-0 noise-bg"></div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              The principles that drive us to excellence and innovation
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col"
              >
                <Card className="bg-zinc-900/50 border-zinc-800/50 p-6 backdrop-blur-sm h-full">
                  <div className="flex flex-col items-center text-center h-full">
                    <div className="mb-4">{value.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {value.title}
                    </h3>
                    <p className="text-zinc-400 text-sm">{value.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-20 relative">
        <div className="absolute inset-0 bg-grid opacity-10"></div>
        <div className="absolute inset-0 noise-bg"></div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Why Work <span className="text-gradient">With Us</span>
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              We offer more than just a job — we provide a career with purpose
              and growth
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col"
              >
                <Card className="bg-zinc-900/50 border-zinc-800/50 p-5 backdrop-blur-sm h-full">
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">{benefit.icon}</div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-zinc-400 text-sm">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section
        id="open-positions"
        className="py-16 md:py-20 relative bg-zinc-950/50"
      >
        <div className="absolute inset-0 bg-grid opacity-10"></div>
        <div className="absolute inset-0 noise-bg"></div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Open <span className="text-gradient">Positions</span>
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Find your next career opportunity with us
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-4xl mx-auto space-y-4"
          >
            {jobs.map((job) => (
              <motion.div
                key={job.id}
                variants={itemVariants}
                className="flex flex-col"
              >
                <Card className="bg-zinc-900/50 border-zinc-800/50 backdrop-blur-sm overflow-hidden">
                  <div
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-5 cursor-pointer"
                    onClick={() => toggleJobDetails(job.id)}
                  >
                    <div className="flex items-center">
                      <div className="mr-3">{job.icon}</div>
                      <div>
                        <h3 className="text-lg font-bold text-white mb-1">
                          {job.title}
                        </h3>
                        <div className="flex flex-wrap gap-2 text-xs">
                          <span className="inline-flex items-center text-purple-400">
                            <Briefcase className="h-3 w-3 mr-1" />{" "}
                            {job.department}
                          </span>
                          <span className="inline-flex items-center text-zinc-400">
                            <MapPin className="h-3 w-3 mr-1" /> {job.location}
                          </span>
                          <span className="inline-flex items-center text-zinc-400">
                            <Clock className="h-3 w-3 mr-1" /> {job.type}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center mt-3 sm:mt-0">
                      <div className="text-sm font-medium text-purple-400 mr-3">
                        {job.salary}
                      </div>
                      {expandedJob === job.id ? (
                        <ChevronUp className="h-5 w-5 text-zinc-400" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-zinc-400" />
                      )}
                    </div>
                  </div>

                  {expandedJob === job.id && (
                    <div className="p-5 pt-0 border-t border-zinc-800/50 mt-2">
                      <p className="text-zinc-400 text-sm mb-4">
                        {job.description}
                      </p>

                      <div className="mb-4">
                        <h4 className="text-white font-medium mb-2">
                          Responsibilities:
                        </h4>
                        <ul className="text-zinc-400 text-sm space-y-1">
                          {job.responsibilities.map((item, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-purple-400 mr-2">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-5">
                        <h4 className="text-white font-medium mb-2">
                          Requirements:
                        </h4>
                        <ul className="text-zinc-400 text-sm space-y-1">
                          {job.requirements.map((item, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-purple-400 mr-2">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <a
                        href={`mailto:hr@smartcluestech.com?subject=Application for ${job.title}`}
                      >
                        <Button className="bg-purple-600 hover:bg-purple-700 text-white flex items-center justify-center gap-2">
                          <Mail className="h-4 w-4" />
                          Apply via Email
                        </Button>
                      </a>
                    </div>
                  )}
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
