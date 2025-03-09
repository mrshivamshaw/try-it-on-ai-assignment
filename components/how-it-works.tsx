"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Upload, Sparkles, Download } from "lucide-react"

const steps = [
  {
    icon: <Upload className="h-8 w-8 text-purple-600" />,
    title: "Upload Your Selfie",
    description: "Take a simple selfie with your phone or upload an existing photo.",
    image: "/images/gallery/img3.png",
  },
  {
    icon: <Sparkles className="h-8 w-8 text-purple-600" />,
    title: "AI Transformation",
    description: "Our AI analyzes your photo and transforms it into a professional headshot.",
    image: "/images/gallery/img3.png",
  },
  {
    icon: <Download className="h-8 w-8 text-purple-600" />,
    title: "Download & Share",
    description: "Get multiple variations and download your favorite headshots instantly.",
    image: "/images/gallery/img3.png",
  },
]

const styles = [
  {
    name: "Corporate",
    image: "/images/corporate.png",
  },
  {
    name: "Creative",
    image: "/images/creative.png",
  },
  {
    name: "Casual",
    image: "/images/casual.png",
  },
  {
    name: "Executive",
    image: "/images/executive.png",
  },
]

export default function HowItWorks() {
  return (
    <section className="w-full py-20 bg-gray-50" id="how-it-works">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            How It Works
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Get your professional headshots in just three simple steps
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-24 left-0 w-full h-0.5 bg-purple-200 z-0"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-white p-6 rounded-xl shadow-lg mb-6">
                <Image
                  src={step.image || "/placeholder.svg"}
                  alt={step.title}
                  width={300}
                  height={300}
                  className="w-full h-auto rounded-lg mb-6"
                />
                <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4 mx-auto">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">{step.title}</h3>
                <p className="text-gray-600 text-center">{step.description}</p>
              </div>

              {/* Step number */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                {index + 1}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Style Showcase */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Choose from Multiple Professional Styles
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our AI generates multiple variations in different professional styles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {styles.map((style, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative h-80">
                  <Image
                    src={style.image}
                    alt={`${style} Style`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-gray-900">{style.name} Style</h4>
                  <p className="text-gray-600 text-sm">Perfect for {style.name.toLowerCase()} environments</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Video Demo Section */}
        <div className="mt-24">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">See the Transformation in Action</h3>
                <p className="text-lg text-gray-600 mb-6">
                  Watch how our AI transforms ordinary selfies into professional headshots in minutes.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center text-white text-xs mr-2 mt-1">
                      ✓
                    </span>
                    <span className="text-gray-700">No professional equipment needed</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center text-white text-xs mr-2 mt-1">
                      ✓
                    </span>
                    <span className="text-gray-700">Works with any lighting conditions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center text-white text-xs mr-2 mt-1">
                      ✓
                    </span>
                    <span className="text-gray-700">Multiple styles generated automatically</span>
                  </li>
                </ul>
                <button className="px-6 py-3 bg-purple-600 text-white rounded-full font-medium hover:bg-purple-700 transition-all">
                  Watch Demo
                </button>
              </div>
              <div className="relative h-[300px] w-full rounded-xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gray-900">
                  <iframe src="https://www.youtube.com/embed/4UTxJbl8Gp4" className="w-full h-full"></iframe>
                  {/* <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
                      <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

