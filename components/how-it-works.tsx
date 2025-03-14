"use client"
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const HowItWorks = () => {
  const steps = [
    {
      title: "1. Upload Photos",
      description: "Submit 4+ high-quality selfies that are front-facing, with only one person and no hats or accessories"
    },
    {
      title: "2. Our AI in Action",
      description: "Our AI technology works its magic learning your facial features"
    },
    {
      title: "3. Headshots Ready in 30 minutes",
      description: "Get your stunning, professional headshots once the model is trained!"
    }
  ];

  const femaleImages = {
    before: [
      { src: "/images/before/img1.webp", alt: "Female selfie 1" },
      { src: "/images/before/img2.webp", alt: "Female selfie 2" },
      { src: "/images/before/img3.webp", alt: "Female selfie 3" },
      { src: "/images/before/img4.jpg", alt: "Female selfie 4" }
    ],
    after: [
      { src: "/images/after/img1.webp", alt: "Female headshot 1" },
      { src: "/images/after/img2.webp", alt: "Female headshot 2" },
      { src: "/images/after/img3.webp", alt: "Female headshot 3" },
      { src: "/images/after/img4.webp", alt: "Female headshot 4" }
    ]
  };

  const maleImages = {
    before: [
      { src: "/images/before/img5.jpg", alt: "Male selfie 1" },
      { src: "/images/before/img6.jpg", alt: "Male selfie 2" },
      { src: "/images/before/img7.jpg", alt: "Male selfie 3" },
      { src: "/images/before/img8.jpg", alt: "Male selfie 4" }
    ],
    after: [
      { src: "/images/after/img5.webp", alt: "Male headshot 1" },
      { src: "/images/after/img6.webp", alt: "Male headshot 2" },
      { src: "/images/after/img7.webp", alt: "Male headshot 3" },
      { src: "/images/after/img8.webp", alt: "Male headshot 4" }
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const arrowVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0.3 }
    }
  };

  const ImageColumn = ({ images } : { images: { before: { src: string, alt: string }[], after: { src: string, alt: string }[] } }) => (
    <div className="space-y-8 w-full max-w-md mx-auto">
      {/* Input Photos */}
      <motion.div 
        className="flex flex-wrap justify-center gap-2 sm:justify-between sm:flex-nowrap"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {images.before.map((img, index) => (
          <motion.div 
            key={`before-${index}`}
            className="overflow-hidden rounded-lg w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] md:w-[90px] md:h-[90px] lg:w-[100px] lg:h-[100px]"
            variants={itemVariants}
          >
            <Image 
              src={img.src} 
              alt={img.alt}
              width={400}
              height={400}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </motion.div>
      
      {/* Arrow */}
      <motion.div 
        className="flex justify-center"
        variants={arrowVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <svg className="w-8 h-12 md:w-12 md:h-18 text-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 20L12 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M5 13L12 20L19 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.div>
      
      {/* Output Photos */}
      <motion.div 
        className="grid grid-cols-2 gap-2 sm:gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {images.after.map((img, index) => (
          <motion.div 
            key={`after-${index}`}
            className="overflow-hidden rounded-lg relative aspect-square"
            variants={itemVariants}
          >
            <Image 
              src={img.src} 
              alt={img.alt}
              width={200}
              height={200}
              className="w-full h-full object-cover"
            />
            <motion.div 
              className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 bg-green-500 rounded-full p-1"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
              viewport={{ once: true }}
            >
              <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );

  return (
    <div className="bg-white py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-8 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">How It Works?</h2>
          <p className="text-lg sm:text-xl text-gray-600 px-2">Get your professional headshots in minutes, not days in 3 simple steps</p>
        </motion.div>

        {/* Mobile Steps - Visible only on small screens */}
        <div className="block lg:hidden mb-8">
          {steps.map((step, index) => (
            <motion.div 
              key={`mobile-step-${index}`}
              className="mb-6 last:mb-0 text-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-sm sm:text-base text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Content for larger screens */}
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8">
          {/* Left Column - Female Photos */}
          <div className="w-full lg:w-1/3">
            <ImageColumn images={femaleImages} />
          </div>
          
          {/* Middle Column - Steps (hidden on mobile) */}
          <div className="hidden lg:flex flex-col justify-between py-8 w-1/3">
            {steps.map((step, index) => (
              <motion.div 
                key={`step-${index}`}
                className="text-center mb-8 last:mb-0"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <h3 className="text-xl xl:text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm xl:text-base">{step.description}</p>
              </motion.div>
            ))}
          </div>
          
          {/* Right Column - Male Photos */}
          <div className="w-full lg:w-1/3 mt-8 lg:mt-0">
            <ImageColumn images={maleImages} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;