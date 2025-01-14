import React from "react";

interface Props {
  text: string;
}

export const MainButton: React.FC<Props> = ({ text }) => {
  return (
    <button className="py-2 md:py-3 lg:py-4 bg-secondary text-[#e6e6e6] label-large border-2 border-black">
      {text}
    </button>
  );
};
