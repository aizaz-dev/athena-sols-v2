// components/LogoMarquee.jsx
"use client";
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import logoData from '../../../data/LogoData/logoData';

const LogoMarquee = () => {
  const marqueeRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    // Clone the logos for seamless looping
    const content = marquee.innerHTML;
    marquee.innerHTML = content + content;

    let position = 0;
    const speed = 1;

    const animate = () => {
      position -= speed;
      
      // Reset position when scrolled completely
      if (position <= -marquee.scrollWidth / 2) {
        position = 0;
      }
      
      marquee.style.transform = `translateX(${position}px)`;
      animationRef.current = requestAnimationFrame(animate);
    };

    // Start animation
    animationRef.current = requestAnimationFrame(animate);

    // Clean up on unmount
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="w-full py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className=" text-lg font-semibold uppercase tracking-wider text-gray-500 mb-12">
          Trusted by
        </h3>
        
        <div className="relative overflow-hidden">
          <div 
            ref={marqueeRef}
            className="flex"
          >
            {logoData.map((logo) => (
              <div
                key={logo.id}
                className="flex-shrink-0 px-8 flex items-center justify-center"
                style={{ minWidth: '220px' }}
              >
                <div className="bg-black rounded-xl p-6 w-full h-28 flex items-center justify-center transition-all duration-300 hover:opacity-100 opacity-90">
                  <div className="relative w-full h-12">
                    <Image
                      src={logo.imageUrl || `/placeholder.svg?text=${logo.name}`}
                      alt={logo.altText}
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 100px, (max-width: 768px) 120px, 150px"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoMarquee;