import Image from "next/image";
import React from "react";
import ourStoryImg from "@/public/images/our-story.webp";

export const OurStory: React.FC = () => {
  return (
    <section className="border-t-2 border-black">
      <div className="grid lg:grid-cols-4 px-5 md:px-[30px] lg:px-[40px] py-20 md:py-[104px] lg:py-[144px] gap-5 md:gap-[30px] lg:gap-10">
        <h2 className="title-small text-[#990f39] lg:self-start lg:text-right">
          Our <br /> Story
        </h2>
        <div className="relative w-full h-[600px] self-center lg:col-span-2 overflow-hidden">
          <Image
            src={ourStoryImg}
            alt="our story image"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="border-2 border-black"
          />
        </div>
        <p className="body-medium-regular text-right lg:self-end lg:text-left">
          At Belleza, we&apos;re more than a wellness center; we&apos;re a
          sanctuary for holistic beauty and well-being. Founded with a mission
          to help you feel radiant inside and out, we offer a range of luxurious
          services and workshops tailored to rejuvenate and uplift you.
        </p>
      </div>
    </section>
  );
};
