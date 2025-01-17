import React from "react";

export const Faqs: React.FC = () => {
  const questions = [
    {
      num: "1",
      question: "What services do you offer?",
      answear:
        "We offer a range of luxurious services including natural beauty facials, holistic skincare therapies, and mindful beauty rituals designed to rejuvenate and pamper you.",
    },
    {
      num: "2",
      question: "What are your opening hours?",
      answear:
        "Our opening hours are Monday to Friday from 9:00 AM to 6:00 PM, and Saturday from 10:00 AM to 4:00 PM.",
    },
    {
      num: "3",
      question: "Do you accept walk-ins or appointments only?",
      answear:
        "We recommend booking an appointment to ensure you receive the full Belleza experience, but we do welcome walk-ins subject to availability.",
    },
    {
      num: "4",
      question: "Do you have parking available?",
      answear:
        "Yes, we have parking available for our clients to use during their visit.",
    },
  ];

  return (
    <section>
      <div className="px-5 md:px-[30px] lg:px-[40px] mt-16">
        <h2 className="title-small text-[#990f39] my-6 text-end">
          Got <br /> Questions?
        </h2>
        <div className="flex gap-7 flex-col">
          {questions.map((item, index) => (
            <div
              key={index}
              className="flex items-stretch border-black overflow-hidden"
            >
              {/* Number Side */}
              <div className="flex flex-col border-b-2 border-black">
                <div className="p-2 border-b-2 border-r-2 border-black">
                  <h2 className="title-medium text-[#990f39]">{item.num}</h2>
                </div>
                <div className="flex-1 border-l-2 border-black"></div>
              </div>

              {/* Text Content */}
              <div className="flex flex-1 border-t-2 border-b-2 border-r-2 md:border-r-0 border-black p-5 md:p-[30px]  gap-6">
                {/* Question */}
                <div className="flex-1">
                  <p className="body-medium-medium text-[#990f39]  leading-[18px]">
                    {item.question}
                  </p>
                </div>
                {/* Answer */}
                <div className="flex-1">
                  <p className="body-medium-regular text-[#990f39]">
                    {item.answear}
                  </p>
                </div>
              </div>

              {/* Mirrored Empty Div (md and above) */}
              <div className="hidden md:flex flex-col border-black">
                <div className="flex-1 border-r-2 border-t-2 border-black"></div>
                <div className="p-2 border-t-2 border-l-2 border-black size-16"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
