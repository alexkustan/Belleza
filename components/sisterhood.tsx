import Image from "next/image";
import React from "react";
import sisterHoodImg from "@/public/images/sisterhood.webp";

export const Sisterhood: React.FC = () => {
  return (
    <section>
      <div className="grid lg:grid-cols-4 px-5 md:px-[30px] lg:px-[40px] py-20 md:py-[104px] lg:py-[144px] gap-5 md:gap-[30px] lg:gap-10">
        <h2 className="title-small text-[#990f39] text-end lg:col-start-4 lg:text-left">
          Join Our <br />
          Inspiring <br />
          Sisterhood
        </h2>
        <div className="relative w-full h-[600px] self-center lg:col-span-2 lg:col-start-2 lg:row-start-1 overflow-hidden">
          <Image
            src={sisterHoodImg}
            alt="sister hood image"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="border-2 border-black"
          />
        </div>
        <p className="body-medium-regular lg:self-end lg:col-start-1 lg:row-start-1 lg:text-right">
          Come join our empowering community of women. While we don&apos;t have
          an online crew, swing by our center to dive into a world of shared
          tips, experiences, and heaps of encouragement.
        </p>
      </div>
    </section>
  );
};
