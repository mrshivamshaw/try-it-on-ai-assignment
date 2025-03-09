"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

const beforeAfterPairs = [
  {
    before: "/images/transformation/corporate.png",
    after: "/images/transformation/corporate.png",
    title: "Corporate Professional",
  },
  {
    before: "/images/transformation/creative.png",
    after: "/images/transformation/creative.png",
    title: "Creative Director",
  },
  {
    before: "/images/transformation/tech.png",
    after: "/images/transformation/tech.png",
    title: "Tech Entrepreneur",
  },
]

export default function PhotoComparison() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="w-full py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            See the Transformation
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Hover over each image to see the before and after
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {beforeAfterPairs.map((pair, index) => (
            <motion.div
              key={index}
              className="relative rounded-xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative aspect-[4/5]">
                <Image
                  src={pair.before || "/placeholder.svg"}
                  alt={`Before: ${pair.title}`}
                  fill
                  className={`object-cover transition-opacity duration-500 ${
                    hoveredIndex === index ? "opacity-0" : "opacity-100"
                  }`}
                />
                <Image
                  src={pair.after || "/placeholder.svg"}
                  alt={`After: ${pair.title}`}
                  fill
                  className={`object-cover transition-opacity duration-500 ${
                    hoveredIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                />
              </div>

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white font-medium text-lg">{pair.title}</p>
                <p className="text-white/80 text-sm">
                  {hoveredIndex === index ? "After: AI Headshot" : "Before: Selfie"}
                </p>
              </div>

              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div
                  className={`bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full font-medium transition-opacity duration-300  text-black${
                    hoveredIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  See the difference
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">Ready to transform your own photos?</p>
          <button className="px-8 py-4 bg-purple-600 text-white rounded-full font-medium text-lg hover:bg-purple-700 transition-all shadow-lg">
            Try It Now
          </button>
        </div>
      </div>
    </section>
  )
}

