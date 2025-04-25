"use client"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export const BackgroundBeams = ({
  className,
}: {
  className?: string
}) => {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  })

  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const rect = ref.current?.getBoundingClientRect()
      if (rect) {
        setMousePosition({
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
        })
      }
    }

    const element = ref.current
    if (element) {
      element.addEventListener("mousemove", handleMouseMove)
    }

    return () => {
      if (element) {
        element.removeEventListener("mousemove", handleMouseMove)
      }
    }
  }, [])

  return (
    <div
      ref={ref}
      className={cn("h-full w-full bg-black flex items-center justify-center overflow-hidden rounded-lg", className)}
    >
      <svg className="absolute w-full h-full">
        <defs>
          <radialGradient id="gradient" cx="50%" cy="50%" r="50%" fx={mousePosition.x} fy={mousePosition.y}>
            <stop offset="0%" stopColor="rgba(138, 43, 226, 0.3)" />
            <stop offset="100%" stopColor="rgba(138, 43, 226, 0)" />
          </radialGradient>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#gradient)" />
      </svg>
      <motion.div
        className="absolute inset-auto h-[40%] w-[40%] bg-purple-400 opacity-50 blur-[100px]"
        animate={{
          x: mousePosition.x > 0 ? mousePosition.x - 200 : 0,
          y: mousePosition.y > 0 ? mousePosition.y - 200 : 0,
        }}
        transition={{ duration: 0.5 }}
      />
    </div>
  )
}
