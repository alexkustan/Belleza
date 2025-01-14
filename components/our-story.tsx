import Image from "next/image";
import React from "react";
import ourStoryImg from "@/public/images/our-story.webp";

export const OurStory: React.FC = () => {
  return (
    <section>
      <div className="p-5 md:p-[30px] lg:p-[40px] mt-[40px]">
        <h2 className="title-small text-[#990f39] my-5">
          Our <br /> Story
        </h2>
        <Image
          src={ourStoryImg}
          alt="our story image"
          className="border-2 border-black"
        />
        <p className="body-medium-regular text-right">
          At Belleza, we&apos;re more than a wellness center; we&apos;re a
          sanctuary for holistic beauty and well-being. Founded with a mission
          to help you feel radiant inside and out, we offer a range of luxurious
          services and workshops tailored to rejuvenate and uplift you.
        </p>
      </div>
    </section>
  );
};
