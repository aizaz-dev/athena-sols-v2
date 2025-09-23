// components/LogoMarquee.jsx
"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

const LogoMarquee = ({ logos = [] }) => {
  const marqueeRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    // Clone the logos for seamless looping
    const content = marquee.innerHTML;
    marquee.innerHTML = content + content;

    let position = 0;
    const speed = 1; // Adjust speed if needed

    const animate = () => {
      position -= speed;

      // Reset position smoothly
      if (position <= -marquee.scrollWidth / 2) {
        position = 0;
      }

      marquee.style.transform = `translateX(${position}px)`;
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [logos]); // ✅ re-run if logos change

  return (
    <div className="w-full bg-black py-20">
      <div className="max-w-7xl mx-auto px-3">
        <div className="relative overflow-hidden">
          <div ref={marqueeRef} className="flex">
            {logos.map((logo) => (
              <div
                key={logo.id}
                className="flex-shrink-0 px-8 flex items-center justify-center"
                style={{ minWidth: "220px" }}
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
