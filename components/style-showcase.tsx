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
      "/images/after/img7.webp",
      "/images/gallery/img7.png",
      "/images/after/img5.webp",
      "/images/gallery/img2.png",
      "/images/after/img8.webp",
    ],
  },
  {
    name: "Creative",
    description: "Ideal for designers, artists, and creative professionals",
    images: [
      "/images/after/img1.webp",
      "/images/gallery/img2.png",
      "/images/gallery/img3.png",
      "/images/after/img7.webp",
      "/images/gallery/img7.png",
      "/images/after/img6.webp",
    ],
  },
  {
    name: "Casual",
    description: "Great for startups, tech companies, and casual work environments",
    images: [
      "/images/after/img2.webp",
      "/images/gallery/img2.png",
      "/images/after/img3.webp",
      "/images/gallery/img7.png",
      "/images/after/img4.webp",
      "/images/gallery/img1.png",
    ],
  },
  {
    name: "Studio",
    description: "Classic studio lighting with professional backgrounds",
    images: [
      "/images/gallery/img1.png",
      "/images/gallery/img2.png",
      "/images/after/img3.webp",
      "/images/gallery/img6.png",
      "/images/gallery/img7.png",
      "/images/after/img8.webp",
    ],
  },
]

export default function StyleShowcase() {
  const [activeStyle, setActiveStyle] = useState(0)

  return (
    <section className="w-full py-10 sm:py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Choose Your Perfect Style
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Our AI generates multiple professional styles from a single selfie
          </motion.p>
        </div>

        {/* Mobile Style Selector - Horizontal scrolling tabs for small screens */}
        <div className="lg:hidden mb-6 overflow-x-auto pb-2 scrollbar-hide">
          <div className="flex space-x-2 min-w-max px-1">
            {styles.map((style, index) => (
              <button
                key={`mobile-tab-${index}`}
                className={`py-2 px-4 rounded-lg whitespace-nowrap text-sm transition-colors ${
                  activeStyle === index 
                    ? "bg-purple-100 text-purple-700 font-medium" 
                    : "bg-white hover:bg-gray-100 text-black"
                }`}
                onClick={() => setActiveStyle(index)}
              >
                {style.name}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
          {/* Desktop Sidebar - Hidden on mobile */}
          <div className="hidden lg:block lg:w-1/4">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <h3 className="text-lg xl:text-xl font-bold text-gray-900 mb-6">Available Styles</h3>
              <div className="space-y-3">
                {styles.map((style, index) => (
                  <button
                    key={`desktop-tab-${index}`}
                    className={`w-full text-left p-3 xl:p-4 rounded-lg transition-colors  ${
                      activeStyle === index ? "bg-purple-100 text-purple-700 font-medium" : "hover:bg-gray-100 text-black"
                    }`}
                    onClick={() => setActiveStyle(index)}
                  >
                    <p className="font-medium text-black">{style.name}</p>
                    <p className="text-xs xl:text-sm text-gray-500 mt-1">{style.description}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:w-3/4">
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">{styles[activeStyle].name} Style</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 md:mb-8">{styles[activeStyle].description}</p>

              {/* Responsive Grid */}
              <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                {styles[activeStyle].images.map((image, index) => (
                  <motion.div
                    key={index}
                    className="relative rounded-xl overflow-hidden shadow-md aspect-square"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${styles[activeStyle].name} Style Example ${index + 1}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2 sm:p-4">
                      <p className="text-white text-sm sm:text-base font-medium">Variation {index + 1}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 sm:mt-8 flex justify-center">
                <button className="px-4 sm:px-6 py-2 sm:py-3 bg-purple-600 text-white text-sm sm:text-base rounded-full font-medium hover:bg-purple-700 transition-all">
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