"use client";

import React, { useState, useEffect, useRef } from 'react';

const ImageTransitionScroller = () => {
  const scrollerRef = useRef(null);
  const [autoScrolling, setAutoScrolling] = useState(true);
  const [imageElements, setImageElements] = useState([]);
  const [hoveredImageIndex, setHoveredImageIndex] = useState(null);
  const centerBarRef = useRef(null);
  const lastScrollPositionRef = useRef(null);
  
  // Sample image pairs (original and AI-generated versions)
  const imagePairs = [
      {
        original: '/images/before/img2.webp',
        aiGenerated: '/images/after/img2.webp',
        alt: 'Person 2'
      },
      {
          original: '/images/before/img6.jpg',
          aiGenerated: '/images/after/img6.webp',
          alt: 'Person 6'
        },
        {
            original: '/images/before/img3.webp',
            aiGenerated: '/images/after/img3.webp',
            alt: 'Person 3'
        },
        {
            original: '/images/before/img7.jpg',
            aiGenerated: '/images/after/img7.webp',
            alt: 'Person 7'
        },
        {
            original: '/images/before/img4.jpg',
            aiGenerated: '/images/after/img4.webp',
            alt: 'Person 4'
        },
        {
          original: '/images/before/img1.webp',
          aiGenerated: '/images/after/img1.webp',
          alt: 'Person 1'
        },
        {
      original: '/images/before/img5.jpg',
      aiGenerated: '/images/after/img5.webp',
      alt: 'Person 5'
    },
    {
      original: '/images/before/img8.jpg',
      aiGenerated: '/images/after/img8.webp',
      alt: 'Person 8'
    },
  ];
  
  // Create multiple copies for infinite scrolling
  const allImages = [...imagePairs, ...imagePairs, ...imagePairs];
  
  // Initialize image elements with refs
  useEffect(() => {
    setImageElements(allImages.map((_, i) => React.createRef()));
  }, []);
  
  // Auto-scroll animation
  useEffect(() => {
    const scrollContainer = scrollerRef.current;
    if (!scrollContainer) return;
    
    let animationId;
    
    const scroll = () => {
      if (scrollContainer && autoScrolling) {
        // Move images from left to right by decreasing scrollLeft
        scrollContainer.scrollLeft -= 1.5;
        
        // Store the current scroll position
        lastScrollPositionRef.current = scrollContainer.scrollLeft;
        
        // If we've scrolled too far left, reset to the middle duplicate set
        if (scrollContainer.scrollLeft <= 0) {
          // Jump to the middle duplicate set without animation
          scrollContainer.scrollLeft = scrollContainer.scrollWidth / 3;
          lastScrollPositionRef.current = scrollContainer.scrollLeft;
        }
        
        // Update image transformations based on their position
        updateImageTransformations();
        
        animationId = requestAnimationFrame(scroll);
      }
    };
    
    // If we have a saved position and are resuming scrolling, use that position
    if (lastScrollPositionRef.current !== null && autoScrolling) {
      scrollContainer.scrollLeft = lastScrollPositionRef.current;
    } else if (!lastScrollPositionRef.current) {
      // Only set the initial position if we don't have a saved position
      scrollContainer.scrollLeft = scrollContainer.scrollWidth / 3;
      lastScrollPositionRef.current = scrollContainer.scrollLeft;
    }
    
    animationId = requestAnimationFrame(scroll);
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [autoScrolling, imageElements]);
  
  // Function to update images based on their position relative to the center bar
  const updateImageTransformations = () => {
    if (!centerBarRef.current || imageElements.length === 0) return;
    
    const centerBarRect = centerBarRef.current.getBoundingClientRect();
    const centerX = centerBarRect.left;
    const barWidth = centerBarRect.width;
    
    imageElements.forEach((ref, index) => {
      if (!ref.current) return;
      
      const imageRect = ref.current.getBoundingClientRect();
      const imageLeft = imageRect.left;
      const imageRight = imageRect.right;
      const imageWidth = imageRect.width;
      
      const originalImg = ref.current.querySelector('.original-img');
      const aiImg = ref.current.querySelector('.ai-img');
      const originalTag = ref.current.querySelector('.original-tag');
      const aiTag = ref.current.querySelector('.ai-tag');
      
      if (!originalImg || !aiImg || !originalTag || !aiTag) return;
      
      // Calculate how much of the image has passed through the center of the bar
      const barCenterX = centerX + (barWidth / 2);
      
      // If image is entirely left of the bar
      if (imageRight < centerX) {
        // Show original version only
        originalImg.style.clipPath = 'inset(0 0 0 0)';     // Show original
        aiImg.style.clipPath = 'inset(0 0 0 100%)';        // Hide AI version
        originalTag.style.opacity = '1';                   // Show original tag
        aiTag.style.opacity = '0';                         // Hide AI tag
      }
      // If image is entirely right of the bar
      else if (imageLeft > centerX + barWidth) {
        // Show AI version only
        originalImg.style.clipPath = 'inset(0 100% 0 0)';  // Hide original
        aiImg.style.clipPath = 'inset(0 0 0 0)';           // Show AI version
        originalTag.style.opacity = '0';                   // Hide original tag
        aiTag.style.opacity = '1';                         // Show AI tag
      }
      // If image is partially through the bar
      else {
        // Calculate progress through the bar (0-1)
        const barProgress = Math.min(1, Math.max(0, 
          (imageRight - centerX) / (imageWidth + barWidth)
        ));
        
        // Calculate reveal percentage (0-100)
        const revealPercentage = barProgress * 100;
        
        // Apply left-to-right transition
        originalImg.style.clipPath = `inset(0 ${revealPercentage}% 0 0)`; // Original fades from left
        aiImg.style.clipPath = `inset(0 0 0 ${100 - revealPercentage}%)`; // AI fades in from right
        
        // Set tag opacities based on reveal percentage
        originalTag.style.opacity = 1 - (revealPercentage / 100);
        aiTag.style.opacity = revealPercentage / 100;
      }
      
      // Apply blur effect based on hover state
      const isHovered = index === hoveredImageIndex;
      ref.current.style.filter = isHovered ? 'none' : (hoveredImageIndex !== null ? 'blur(2px)' : 'none');
      ref.current.style.transition = 'filter 0.3s ease';
    });
  };
  
  // Handle manual interaction
  const handleMouseEnter = () => {
    // Just stop scrolling without changing the position
    setAutoScrolling(false);
    // Current position is already stored in lastScrollPositionRef
  };
  
  const handleMouseLeave = () => {
    // Resume scrolling from the current position
    setAutoScrolling(true);
    setHoveredImageIndex(null);
  };
  
  const handleScroll = () => {
    if (!autoScrolling) {
      // Update the stored position when manually scrolling
      const scrollContainer = scrollerRef.current;
      if (scrollContainer) {
        lastScrollPositionRef.current = scrollContainer.scrollLeft;
      }
      updateImageTransformations();
    }
  };
  
  // Handle hover on specific image
  const handleImageHover = (index) => {
    setHoveredImageIndex(index);
  };
  
  const handleImageLeave = () => {
    setHoveredImageIndex(null);
  };
  
  return (
    <div className="relative w-full overflow-hidden bg-white mb-12">
      {/* Center vertical transition bar with enhanced styling */}
      <div 
  ref={centerBarRef}
  className="absolute left-1/2 top-4 w-6 h-[91%] z-20 transform -translate-x-1/2 flex items-center justify-center rounded-xl overflow-hidden backdrop-blur-md"
  style={{
    background: 'rgba(147, 51, 234, 0.15)',
    boxShadow: '0 8px 32px rgba(147, 51, 234, 0.25), inset 0 2px 10px rgba(255, 255, 255, 0.2)',
    border: '1px solid rgba(147, 51, 234, 0.3)',
    backdropFilter: 'blur(8px)'
  }}
>
  {/* Highlight effect on top */}
  <div className="absolute top-0 left-0 right-0 h-1/4 bg-gradient-to-b from-white/30 to-transparent"></div>
  
  {/* Subtle purple glow in the middle */}
  <div className="absolute top-1/3 bottom-1/3 left-0 right-0 bg-purple-400/20 blur-sm"></div>
  
  {/* Central line */}
  <div className="h-[80%] w-[1px] bg-white/60 rounded-full relative z-10"></div>
</div>
      
      {/* Left shadow gradient */}
      <div 
        className="absolute left-0 top-0 w-16 h-full z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 100%)'
        }}
      ></div>
      
      {/* Right shadow gradient */}
      <div 
        className="absolute right-0 top-0 w-16 h-full z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(270deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 100%)'
        }}
      ></div>
      
      {/* Image scroller */}
      <div 
        ref={scrollerRef}
        className="flex overflow-x-auto scrollbar-hide h-full"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onScroll={handleScroll}
      >
        <div className="flex space-x-6 py-4 px-4">
          {allImages.map((pair, index) => (
            <div 
              key={index} 
              ref={imageElements[index]}
              className="relative flex-shrink-0 w-64 h-80 rounded-lg overflow-hidden shadow-lg"
              onMouseEnter={() => handleImageHover(index)}
              onMouseLeave={handleImageLeave}
            >
              {/* Two separate images layered on top of each other */}
              <div className="absolute inset-0">
                {/* Original unfiltered image */}
                <img
                  src={pair.original}
                  alt={`Original ${pair.alt}`}
                  className="absolute inset-0 w-full h-full object-cover original-img"
                  style={{ 
                    clipPath: 'inset(0 0 0 0)', // Initially fully visible
                    transition: 'clip-path 0.05s linear'
                  }}
                />
                
                {/* AI-generated filtered image */}
                <img
                  src={pair.aiGenerated}
                  alt={`AI Generated ${pair.alt}`}
                  className="absolute inset-0 w-full h-full object-cover ai-img"
                  style={{ 
                    clipPath: 'inset(0 0 0 100%)', // Initially hidden from left
                    transition: 'clip-path 0.05s linear'
                  }}
                />
              </div>
              
              {/* Before (Original) tag */}
              <div 
                className="absolute bottom-3 left-3 bg-blue-500 text-white text-xs px-2 py-1 rounded-full original-tag"
                style={{ opacity: 1 }}
              >
                Before
              </div>
              
              {/* After (AI Generated) tag */}
              <div 
                className="absolute bottom-3 right-3 bg-orange-500 text-white text-xs px-2 py-1 rounded-full ai-tag "
                style={{ opacity: 0 }}
              >
                After
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageTransitionScroller;