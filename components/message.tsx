import React from "react";
import bigStar from "@/public/images/big-star.svg";
import Image from "next/image";

export const Message: React.FC = () => {
  return (
    <section className="pt-1 md:pt-[150px] lg:pt-[250px] pb-20 md:pb-[104px] lg:pb-36 ">
      <div className="px-5 md:px-[30px] lg:px-[40px] mt-16 flex flex-col text-center items-center gap-5 md:gap-[30px] lg:gap-[40px]">
        <div>
          <Image
            src={bigStar}
            alt="big star"
            className="size-[80px] md:size-[100px] lg:size-[120px]"
          />
        </div>
        <h2 className="title-medium text-[#990F39]">
          Come experience the uplifting spirit of Belleza, where women support
          each other every day. Join our welcoming community and let&apos;s
          shine together.
        </h2>
        <div>
          <Image
            src={bigStar}
            alt="big star"
            className="size-[80px] md:size-[100px] lg:size-[120px]"
          />
        </div>
      </div>
    </section>
  );
};
