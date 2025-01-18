"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export const MindfulnessMarqueeAnimation: React.FC = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (marqueeRef.current) {
      const marquee = marqueeRef.current;
      const marqueeWidth = marquee.scrollWidth;
      const originalContent = marquee.innerHTML;
      marquee.innerHTML += originalContent;

      const animation = gsap.to(marquee, {
        x: -marqueeWidth,
        duration: 20,
        ease: "none",
        repeat: -1,
      });

      // Pause on hover
      marquee.parentElement?.addEventListener("mouseenter", () => {
        animation.pause();
      });
      marquee.parentElement?.addEventListener("mouseleave", () => {
        animation.play();
      });

      return () => {
        animation.kill(); // Cleanup on unmount
      };
    }
  }, []);

  return (
    <section className="px-5 md:px-[30px] lg:px-[40px] md:mt-7 lg:-mt-2">
      <div className="border-2 border-[#990F39] py-2 md:py-[10px] lg:py-[14px] overflow-hidden relative">
        <div
          className="label-large text-[#990F39] whitespace-nowrap flex"
          ref={marqueeRef}
        >
          Dive into Mindfulness, Stress Management, and Self-Care at Belleza
        </div>
      </div>
    </section>
  );
};
