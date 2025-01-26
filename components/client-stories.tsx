import React from "react";
import star from "@/public/images/star.svg";
import { MainButton } from "./main-button";

export const ClientStories: React.FC = () => {
  const story = [
    {
      story:
        "Belleza is my haven for self-care. Their skincare treatments are pure magic, and the vibe is always so uplifting.",
      name: "Sarah",
    },
    {
      story:
        "Such a gem for wellness! The skincare treatments are top-notch, and the vibe is always so positive.",
      name: "Jessica",
    },
    {
      story:
        "Belleza's workshops are a game-changer! They've empowered me to embrace my skin and feel unstoppable.",
      name: "Emily",
    },
    {
      story:
        "Absolutely love the workshops! They've not only improved my skin but also boosted my self-esteem.",
      name: "Lily",
    },
  ];
  return (
    <section className="py-20 md:py-[100px] lg:py-[140px]">
      <div className="grid gap-5 md:gap-[30px] lg:gap-[40px] lg:grid-cols-2 px-5 md:px-[30px] lg:px-[40px]">
        <h2 className="title-small text-[#990F39]">
          Client <br />
          Stories
        </h2>
        {story.map((item, index) => (
          <div key={index} className="border-2 border-black">
            <div className="flex justify-end gap-3 p-5">
              <img src={star.src} alt="star" className="size-6" />
              <img src={star.src} alt="star" className="size-6" />
              <img src={star.src} alt="star" className="size-6" />
              <img src={star.src} alt="star" className="size-6" />
              <img src={star.src} alt="star" className="size-6" />
            </div>
            <p className="body-medium-regular border-y-2 bg-secondary text-[#e6e6e6] border-black py-10 px-5">
              {item.story}
            </p>
            <p className="p-4 body-medium-medium">{item.name}</p>
          </div>
        ))}
        <MainButton
          text="Tell Us Your Story"
          className="lg:row-start-4 lg:col-span-2"
        />
      </div>
    </section>
  );
};
