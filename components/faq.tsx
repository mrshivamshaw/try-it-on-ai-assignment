"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "How does TryItOnAI work?",
    answer:
      "TryItOnAI uses advanced artificial intelligence to transform your selfies into professional headshots. Simply upload your photo, and our AI analyzes it to create studio-quality headshots with professional lighting, composition, and retouching.",
  },
  {
    question: "How long does it take to get my headshots?",
    answer:
      "Most headshots are delivered within minutes of uploading your photo. For larger team orders, it may take a bit longer, but still significantly faster than traditional photography services.",
  },
  {
    question: "Do I need professional photography equipment?",
    answer:
      "Not at all! You can take a simple selfie with your smartphone. Our AI technology handles the rest, transforming your casual photo into a professional headshot.",
  },
  {
    question: "Can I get different styles and backgrounds?",
    answer:
      "Yes! Depending on your plan, you can choose from various professional styles and backgrounds to suit your needs and preferences.",
  },
  {
    question: "Is there a money-back guarantee?",
    answer:
      "Yes, we offer a 100% satisfaction guarantee. If you're not happy with your headshots, we'll provide a full refund within 7 days of purchase.",
  },
  {
    question: "Can I use these headshots for my LinkedIn profile?",
    answer:
      "Our headshots are perfect for LinkedIn, company websites, social media profiles, and any other professional use.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

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
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Find answers to common questions about our AI headshot service
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="mb-4 border-b border-gray-200 pb-4 last:border-b-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <button
                className="flex justify-between items-center w-full text-left py-4"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                <ChevronDown
                  className={`h-5 w-5 text-gray-500 transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-600 pb-4">{faq.answer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

