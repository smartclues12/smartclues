"use client"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string
  className?: string
}) => {
  const [renderedText, setRenderedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isGenerating, setIsGenerating] = useState(true)

  useEffect(() => {
    if (currentIndex < words.length && isGenerating) {
      const timeout = setTimeout(() => {
        setRenderedText((prev) => prev + words[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, 10)

      return () => clearTimeout(timeout)
    } else {
      setIsGenerating(false)
    }
  }, [currentIndex, words, isGenerating])

  return (
    <div className={cn("font-normal", className)}>
      <motion.div className="text-lg text-gray-300 leading-relaxed">
        {renderedText}
        {isGenerating && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
            className="inline-block ml-1 bg-purple-500 w-1 h-5"
          />
        )}
      </motion.div>
    </div>
  )
}
