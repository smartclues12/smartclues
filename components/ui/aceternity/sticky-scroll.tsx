"use client"
import { useRef, useState } from "react"
import { useMotionValueEvent, useScroll } from "framer-motion"
import { motion } from "framer-motion"

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string
    description: string
    stats?: { label: string; value: string }[]
  }[]
  contentClassName?: string
}) => {
  const [activeCard, setActiveCard] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  })
  const cardLength = content.length

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength)
    const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
      const distance = Math.abs(latest - breakpoint)
      if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
        return index
      }
      return acc
    }, 0)
    setActiveCard(closestBreakpointIndex)
  })

  return (
    <motion.div className="h-[30rem] overflow-y-auto flex justify-center relative space-x-10 rounded-md p-4" ref={ref}>
      <div className="div relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={index} className="my-20">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-white"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-kg text-white/70 mt-4"
              >
                {item.description}
              </motion.p>
              {item.stats && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="grid grid-cols-3 gap-4 mt-8"
                >
                  {item.stats.map((stat) => (
                    <div key={stat.label} className="bg-black/50 border border-purple-900/50 rounded-lg p-3">
                      <p className="text-purple-400 text-sm">{stat.label}</p>
                      <p className="text-white text-xl font-bold">{stat.value}</p>
                    </div>
                  ))}
                </motion.div>
              )}
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <motion.div
        animate={{
          background: `linear-gradient(to bottom, #111 ${
            (activeCard / (cardLength - 1)) * 100
          }%, #a855f7 ${(activeCard / (cardLength - 1)) * 100}%)`,
        }}
        className="hidden md:block h-full w-2 bg-gray-700 rounded-full sticky top-0"
      />
    </motion.div>
  )
}
