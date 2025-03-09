"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Basic",
    price: 29,
    description: "Perfect for individuals",
    features: [
      "10 AI headshots",
      "5 different styles",
      "High-resolution downloads",
      "Basic retouching",
      "24-hour delivery",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Professional",
    price: 49,
    description: "Ideal for professionals",
    features: [
      "25 AI headshots",
      "10 different styles",
      "Ultra high-resolution downloads",
      "Advanced retouching",
      "Same-day delivery",
      "LinkedIn optimization",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Team",
    price: 199,
    description: "Perfect for small teams",
    features: [
      "100 AI headshots",
      "All available styles",
      "Ultra high-resolution downloads",
      "Premium retouching",
      "Priority delivery",
      "Dedicated account manager",
      "Brand consistency options",
    ],
    cta: "Contact Sales",
    popular: false,
  },
]

export default function Pricing() {
  return (
    <section className="w-full py-20 bg-gray-50" id="pricing">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Simple, Transparent Pricing
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Choose the perfect plan for your needs
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden relative ${plan.popular ? "ring-2 ring-purple-600" : ""}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-purple-600 text-white px-4 py-1 text-sm font-medium">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-lg font-medium ${
                    plan.popular
                      ? "bg-purple-600 text-white hover:bg-purple-700"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  } transition-colors`}
                >
                  {plan.cta}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">Need a custom solution for your enterprise?</p>
          <button className="px-6 py-3 bg-white text-purple-600 border border-purple-200 rounded-lg font-medium hover:border-purple-400 transition-all">
            Contact Our Enterprise Team
          </button>
        </div>
      </div>
    </section>
  )
}

