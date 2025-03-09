"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function ClientLogos() {
  const clientLogos = ["/images/brand/dailydot.png", "/images/brand/independent.png", "/images/brand/Indi100.png", "/images/brand/Insider_logo.png", "/images/brand/BBC.png","/images/brand/WSJ.png"]
  return (
    <section className="w-full py-9 border-b border-gray-100 bg-black">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          className="flex flex-wrap justify-center items-center gap-8 md:gap-20 "
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {clientLogos.map((src, i) => (
            <div key={i} className="">
              <div className="h-8 flex items-center">
              <Image src={src} alt="Client logo" width={100} height={100}  />

              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

