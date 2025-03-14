"use client"

import type React from "react"

import Image from "next/image"
import { motion } from "framer-motion"

export default function HeroSection() {


  return (
    <section className="w-full bg-gradient-to-b from-purple-50 to-white pt-20 md:pt-32 pb-16 md:pb-16">
      <div className="container mx-auto px-4 md:px-5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="hidden md:block">
        <motion.div
            className="flex justify-center items-center "
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
              <div className="">
                <Image
                  src="/images/home1.png"
                  alt="Before: Selfie"
                  width={350}
                  height={350}
                  className="object-cover "
                  priority
                />
              </div>
          </motion.div>
        </div>
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="w-full text-center text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Transform Your <span className="text-purple-600">Professional Image</span> with AI
            </h1>
             
             <div className="flex flex-col justify-center items-center gap-5 mt-10">
              <p className="w-full text-center text-xl text-gray-600 mb-4">
                Upload a selfie, get studio-quality professional headshots in minutes. No photographer needed.
              </p>

              <div className="flex flex-col justify-center items-center sm:flex-row gap-4">
                <button className="px-8 py-4 bg-purple-600 text-white rounded-full font-medium text-lg hover:bg-purple-700 transition-all shadow-lg hover:shadow-xl">
                  Try It Now
                </button>
                <button className="px-8 py-4 bg-white text-purple-600 border border-purple-200 rounded-full font-medium text-lg hover:border-purple-400 transition-all">
                  See Examples
                </button>
              </div>

              <p className="mt-6 w-full text-center text-gray-500 text-sm">Trusted by 800,000+ professionals and 500+ global teams</p>
             </div>
          </motion.div>

          <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
              <div className="">
                <Image
                  src="/images/home2.png"
                  alt="Before: Selfie"
                  width={350}
                  height={350}
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

