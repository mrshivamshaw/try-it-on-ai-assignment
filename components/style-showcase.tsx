"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

const styles = [
  {
    name: "Corporate",
    description: "Perfect for business professionals and executives",
    images: [
      "/images/gallery/img1.png",
      "/images/gallery/img2.png",
      "/images/gallery/img3.png",
      "/images/gallery/img7.png",
    ],
  },
  {
    name: "Creative",
    description: "Ideal for designers, artists, and creative professionals",
    images: [
      "/images/gallery/img1.png",
      "/images/gallery/img2.png",
      "/images/gallery/img3.png",
      "/images/gallery/img7.png",
    ],
  },
  {
    name: "Casual",
    description: "Great for startups, tech companies, and casual work environments",
    images: [
      "/images/gallery/img1.png",
      "/images/gallery/img2.png",
      "/images/gallery/img3.png",
      "/images/gallery/img7.png",
    ],
  },
  {
    name: "Studio",
    description: "Classic studio lighting with professional backgrounds",
    images: [
      "/images/gallery/img1.png",
      "/images/gallery/img2.png",
      "/images/gallery/img3.png",
      "/images/gallery/img7.png",
    ],
  },
]

export default function StyleShowcase() {
  const [activeStyle, setActiveStyle] = useState(0)

  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Choose Your Perfect Style
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Our AI generates multiple professional styles from a single selfie
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/4">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Available Styles</h3>
              <div className="space-y-4">
                {styles.map((style, index) => (
                  <button
                    key={index}
                    className={`w-full text-left p-4 rounded-lg transition-colors ${
                      activeStyle === index ? "bg-purple-100 text-purple-700 font-medium" : "hover:bg-gray-100"
                    }`}
                    onClick={() => setActiveStyle(index)}
                  >
                    <p className="font-medium">{style.name}</p>
                    <p className="text-sm text-gray-500 mt-1">{style.description}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:w-3/4">
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{styles[activeStyle].name} Style</h3>
              <p className="text-gray-600 mb-8">{styles[activeStyle].description}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {styles[activeStyle].images.map((image, index) => (
                  <motion.div
                    key={index}
                    className="relative rounded-xl overflow-hidden shadow-md"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${styles[activeStyle].name} Style Example ${index + 1}`}
                      width={300}
                      height={400}
                      className="w-full h-auto"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <p className="text-white font-medium">Variation {index + 1}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 flex justify-center">
                <button className="px-6 py-3 bg-purple-600 text-white rounded-full font-medium hover:bg-purple-700 transition-all">
                  Try This Style Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

