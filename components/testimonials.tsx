"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechCorp",
    image:  "/images/gallery/img3.png",
    headshot: "/images/gallery/img3.png",
    quote:
      "TryItOnAI transformed our team's professional image overnight. The quality is indistinguishable from expensive studio photography, but at a fraction of the cost and time.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Startup Founder",
    company: "InnovateLabs",
    image:  "/images/gallery/img2.png",
    headshot: "/images/gallery/img2.png",
    quote:
      "As a startup founder, I needed professional headshots for our website quickly. TryItOnAI delivered amazing results in minutes that helped us look established and trustworthy.",
    rating: 5,
  },
  {
    name: "Jessica Williams",
    role: "HR Manager",
    company: "Global Enterprises",
    image:  "/images/gallery/img1.png",
    headshot: "/images/gallery/img1.png",
    quote:
      "Managing headshots for a team of 200+ employees used to be a logistical nightmare. TryItOnAI simplified the entire process and delivered consistent, high-quality results.",
    rating: 5,
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
  "/images/gallery/img2.png",
  "/images/gallery/img3.png",
  "/images/gallery/img7.png",
  "/images/gallery/img5.png",
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
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
            What Our Customers Say
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Join over 800,000 professionals who trust TryItOnAI for their headshots
          </motion.p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-purple-50 p-8 md:p-12 rounded-2xl shadow-lg">
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="md:w-1/3">
                        <div className="relative rounded-xl overflow-hidden shadow-lg mb-6">
                          <Image
                            src={testimonial.headshot || "/placeholder.svg"}
                            alt={`${testimonial.name}'s AI Headshot`}
                            width={300}
                            height={400}
                            className="w-full h-auto"
                          />
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                            <p className="text-white text-sm font-medium">AI-Generated Headshot</p>
                          </div>
                        </div>
                      </div>

                      <div className="md:w-2/3">
                        <div className="flex items-start gap-4 mb-6">
                          <Image
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            width={64}
                            height={64}
                            className="rounded-full"
                          />
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900">{testimonial.name}</h3>
                            <p className="text-gray-600">
                              {testimonial.role}, {testimonial.company}
                            </p>
                            <div className="flex mt-2">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                              ))}
                            </div>
                          </div>
                        </div>
                        <p className="text-lg text-gray-700 italic mb-6">"{testimonial.quote}"</p>
                        <div className="flex items-center">
                          <div className="h-px bg-purple-200 flex-grow"></div>
                          <div className="px-4 text-purple-600 font-medium">Verified Customer</div>
                          <div className="h-px bg-purple-200 flex-grow"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        <div className="mt-12 flex justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full ${index === activeIndex ? "bg-purple-600" : "bg-gray-300"}`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Photo Wall of Satisfied Customers */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Join Thousands of Satisfied Professionals
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See the results our customers are achieving with TryItOnAI
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
            {resultImages.map((image, i) => (
              <motion.div
                key={i}
                className="relative aspect-square overflow-hidden"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <Image
                  src={image}
                  alt={`Customer Headshot ${i + 1}`}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

