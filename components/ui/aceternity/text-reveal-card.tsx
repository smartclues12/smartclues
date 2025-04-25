"use client"
import { useRef, useState } from "react"
import type React from "react"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export const TextRevealCard = ({
  text,
  revealText,
  children,
  className,
}: {
  text: string
  revealText?: string
  children?: React.ReactNode
  className?: string
}) => {
  const [isHovered, setIsHovered] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "h-full relative overflow-hidden cursor-pointer rounded-xl p-8 md:p-10 border border-zinc-800/50 bg-zinc-900/50 backdrop-blur-sm",
        className,
      )}
    >
      <div className="relative z-10">
        <motion.div
          ref={textRef}
          className="text-zinc-300 text-xl md:text-2xl font-medium leading-relaxed md:leading-relaxed"
          animate={{
            opacity: isHovered ? 0 : 1,
            y: isHovered ? -30 : 0,
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        >
          {text}
        </motion.div>
        <motion.div
          ref={textRef}
          className="absolute inset-0 text-purple-400 text-xl md:text-2xl font-medium leading-relaxed md:leading-relaxed"
          animate={{
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : 30,
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        >
          {revealText || text}
        </motion.div>
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  )
}
