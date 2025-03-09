"use client"

import { motion } from "framer-motion"

export default function CTASection() {
  return (
    <section className="w-full py-20 bg-purple-600">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Professional Image?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join over 800,000 professionals who have upgraded their headshots with TryItOnAI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-purple-600 rounded-full font-medium text-lg hover:bg-gray-100 transition-all shadow-lg">
              Try It Now
            </button>
            <button className="px-8 py-4 bg-transparent text-white border border-white rounded-full font-medium text-lg hover:bg-purple-700 transition-all">
              See Examples
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

