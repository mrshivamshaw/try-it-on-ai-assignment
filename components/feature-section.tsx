"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Camera, Zap, Award, Users } from "lucide-react"

const features = [
  {
    icon: <Camera className="h-8 w-8 text-purple-600" />,
    title: "Studio-Quality Results",
    description: "Professional lighting, perfect composition, and flawless retouching in every shot.",
  },
  {
    icon: <Zap className="h-8 w-8 text-purple-600" />,
    title: "Lightning Fast",
    description: "Get your professional headshots in minutes, not days or weeks.",
  },
  {
    icon: <Award className="h-8 w-8 text-purple-600" />,
    title: "Premium Quality",
    description: "AI-powered technology that delivers consistent, high-quality results every time.",
  },
  {
    icon: <Users className="h-8 w-8 text-purple-600" />,
    title: "Team Solutions",
    description: "Perfect for teams of all sizes, from startups to Fortune 500 companies.",
  },
]

const resultImages = [
  "/images/gallery/img1.png",
  "/images/gallery/img2.png",
  "/images/gallery/img3.png",
  "/images/gallery/img7.png",
  "/images/gallery/img5.png",
  "/images/gallery/img6.png",
  "/images/gallery/img8.png",
  "/images/gallery/img9.png",
]

const clientLogos = ["/images/brand/dailydot.png", "/images/brand/independent.png", "/images/brand/Indi100.png", "/images/brand/Insider_logo.png", "/images/brand/BBC.png","/images/brand/WSJ.png"]

export default function FeatureSection() {
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
            Why Choose TryItOnAI?
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Our AI-powered platform delivers professional headshots that rival traditional studio photography.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Photo Gallery Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Stunning Results for Every Professional
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Browse our gallery of AI-generated professional headshots
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {resultImages.map((image, i) => (
              <motion.div
                key={i}
                className="relative group overflow-hidden rounded-xl"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <Image
                  src={image}
                  alt={`Professional Headshot Example ${i + 1}`}
                  width={300}
                  height={400}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <p className="font-medium">Style {i + 1}</p>
                    <p className="text-sm opacity-80">Professional Headshot</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button className="px-6 py-3 bg-purple-600 text-white rounded-full font-medium hover:bg-purple-700 transition-all">
              View Full Gallery
            </button>
          </div>
        </div>

        {/* Client Logos Section */}
        <div className="mt-24">
          <div className="bg-purple-50 rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row justify-between  items-center gap-8">
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h3>
                <p className="text-lg text-gray-600 mb-6">
                  Over 500 global teams and Fortune 500 companies rely on our AI headshots for their professional needs.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {clientLogos.map((src, i) => (
                    <div key={i} className="bg-black p-4 rounded-lg shadow-sm flex items-center justify-center h-16">
                      <Image src={src} alt="Client logo" width={100} height={100} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-1">
                <Image
                  src="/images/team.png"
                  alt="Teams using TryItOnAI"
                  width={500}
                  height={300}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

