import React from "react";
import Logo from "@/public/images/belleza-logo.svg";
import HeroImage from "@/public/images/hero.webp";
import { MainButton } from "./main-button";

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src={HeroImage.src}
          alt="hero image"
          className="h-screen w-full object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(0deg, rgba(153, 15, 57, 0.08), rgba(153, 15, 57, 0.08)), linear-gradient(0deg, rgba(0, 0, 0, 0.36), rgba(0, 0, 0, 0.36))",
          }}
        ></div>
      </div>
      <div className="flex flex-col text-center justify-between h-full p-5 md:p-[30px] lg:p-[40px]">
        <div className="flex items-center justify-center">
          <img
            src={Logo.src}
            alt="Bellaza Logo"
            className="h-10 md:h-12 lg:h-14"
          />
        </div>
        <h1 className="title-large text-[#e6e6e6]">
          Women&apos;s Wellness Haven
        </h1>
        <MainButton text="Let's Chat" />
      </div>
    </section>
  );
};
