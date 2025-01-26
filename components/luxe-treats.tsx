import React from "react";
import luxe1 from "@/public/images/luxe-treats-1.webp";
import luxe2 from "@/public/images/luxe-treats-2.webp";
import luxe3 from "@/public/images/luxe-treats-3.webp";

export const LuxeTreats: React.FC = () => {
  return (
    <section>
      <div className="grid md:grid-cols-2 md:grid-rows-3 lg:grid-rows-2 lg:grid-cols-4 px-5 md:px-[30px] lg:px-[40px] py-20 md:py-[104px] lg:py-[144px] gap-10 md:gap-[20px] lg:gap-10">
        <h2 className="title-small text-[#990f39]">
          Explore Our <br /> Luxe Treats
        </h2>

        <div className="lg:row-start-1 lg:col-start-3">
          <p className="body-medium-medium">Natural Beauty Facials </p>
          <div className="border-2 border-black my-2 h-[410px] relative">
            <img
              src={luxe1.src}
              alt="luxe-treats-1"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="body-medium-regular">
            Indulge in our organic facials, crafted to nourish your skin and
            leave you with a radiant, healthy glow.
          </p>
        </div>

        <div className="lg:row-start-2 lg:col-start-2 lg:-mt-3">
          <p className="body-medium-medium">Holistic Skincare Therapies</p>
          <div className="border-2 border-black my-2 h-[410px] relative">
            <img
              src={luxe2.src}
              alt="luxe-treats-2"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="body-medium-regular">
            Experience personalized skincare treatments blending ancient wisdom
            with modern techniques, ensuring your skin feels and looks amazing.
          </p>
        </div>
        <div className=" hidden md:flex" />
        <div className=" hidden md:flex" />
        <div className="lg:row-start-2 lg:col-start-4 md:mt-3 lg:-mt-12">
          <p className="body-medium-medium">Wellness Workshops</p>
          <div className="border-2 border-black my-2 h-[410px] relative">
            <img
              src={luxe3.src}
              alt="luxe-treats-3"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="body-medium-regular">
            Educational workshops on various wellness topics, such as
            mindfulness, stress management, and self-care.
          </p>
        </div>
      </div>
    </section>
  );
};
