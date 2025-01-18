"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import Logo from "@/public/images/belleza-logo.svg";
import smallStar from "@/public/images/small-star.svg";

export const Footer: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current && scrollerRef.current) {
      const scroller = scrollerRef.current;
      const scrollerWidth = scroller.scrollWidth;

      const scrollerContent = Array.from(scroller.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scroller.appendChild(duplicatedItem);
      });

      const animation = gsap.to(scroller, {
        x: -scrollerWidth,
        duration: 40,
        ease: "none",
        repeat: -1,
      });

      // Pause on hover
      containerRef.current.addEventListener("mouseenter", () => {
        animation.pause();
      });
      containerRef.current.addEventListener("mouseleave", () => {
        animation.play();
      });

      return () => {
        animation.kill();
      };
    }
  }, []);

  return (
    <footer>
      <div className="p-5 md:p-[30px] lg:p-[40px] bg-secondary text-[#e6e6e6] border-t-2 border-black">
        <div className="border-2 border-black">
          <div className="label-small flex flex-col md:flex-row md:justify-between items-center text-center gap-2 p-5">
            <div className="flex flex-col gap-3 md:text-start">
              <p>806-853-4257</p>
              <p>connect@belleza.com</p>
              <p>665 Austen Place Apt. 071</p>
            </div>
            <div>
              <p className="flex md:text-right">
                Copyright © 2024 Belleza <br /> Women&apos;s Wellness Center.
                <br /> All rights reserved.
              </p>
            </div>
          </div>
          <div
            className="relative overflow-hidden border-t-2 border-black p-5"
            ref={containerRef}
          >
            <div className="flex gap-4 w-max" ref={scrollerRef}>
              {/* Multiple pairs of images */}
              {Array.from({ length: 10 }).map((_, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Image
                    src={smallStar}
                    alt="Star"
                    className="w-5 h-5 md:w-[30px] md:h-[30px] lg:w-[40px] lg:h-[40px]"
                  />
                  <Image
                    src={Logo}
                    alt="Belleza logo"
                    className="w-[146px] h-[40px] md:w-[175px] md:h-[48px] lg:w-[205px] lg:h-[56px]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
