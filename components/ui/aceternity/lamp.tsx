"use client"
import type React from "react"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
      }
    }

    if (containerRef.current) {
      containerRef.current.addEventListener("mousemove", handleMouseMove)
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener("mousemove", handleMouseMove)
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden w-full rounded-md z-0",
        className,
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 ">
        <motion.div
          animate={{
            x: mousePosition.x > 0 ? mousePosition.x - 200 : 0,
            y: mousePosition.y > 0 ? mousePosition.y - 200 : 0,
          }}
          transition={{ type: "spring", stiffness: 150, damping: 15 }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1/4 h-1/4"
        >
          <div className="absolute inset-0 z-50 bg-purple-500 [mask-image:radial-gradient(transparent,transparent_30%,black_32%)] blur-2xl opacity-20" />
        </motion.div>

        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-black blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="absolute inset-0 z-0 bg-black"></div>
      </div>
      <div className="relative z-10 w-full">{children}</div>
    </div>
  )
}
