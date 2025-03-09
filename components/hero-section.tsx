"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function HeroSection() {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseDown = () => {
    setIsDragging(true)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const newPosition = (x / rect.width) * 100
      setSliderPosition(Math.min(Math.max(newPosition, 0), 100))
    }
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      const x = e.touches[0].clientX - rect.left
      const newPosition = (x / rect.width) * 100
      setSliderPosition(Math.min(Math.max(newPosition, 0), 100))
    }
  }

  useEffect(() => {
    window.addEventListener("mouseup", handleMouseUp)
    return () => {
      window.removeEventListener("mouseup", handleMouseUp)
    }
  }, [])

  return (
    <section className="w-full bg-gradient-to-b from-purple-50 to-white py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-30">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Transform Your <span className="text-purple-600">Professional Image</span> with AI
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-xl">
              Upload a selfie, get studio-quality professional headshots in minutes. No photographer needed.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-purple-600 text-white rounded-full font-medium text-lg hover:bg-purple-700 transition-all shadow-lg hover:shadow-xl">
                Try It Now
              </button>
              <button className="px-8 py-4 bg-white text-purple-600 border border-purple-200 rounded-full font-medium text-lg hover:border-purple-400 transition-all">
                See Examples
              </button>
            </div>

            <p className="mt-6 text-gray-500 text-sm">Trusted by 800,000+ professionals and 500+ global teams</p>
          </motion.div>

          <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
              <div className="">
                <Image
                  src="/images/try.png"
                  alt="Before: Selfie"
                  width={500}
                  height={500}
                  className="object-cover "
                  priority
                />
              </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

