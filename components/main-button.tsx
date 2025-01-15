import { cn } from "@/utils/cn";
import React from "react";

interface Props {
  text: string;
  className?: string; // Optional prop to pass additional class names
}

export const MainButton: React.FC<Props> = ({ text, className }) => {
  return (
    <button
      className={cn(
        "py-2 md:py-3 lg:py-4 bg-secondary text-[#e6e6e6] label-large border-2 border-black",
        className
      )}
    >
      {text}
    </button>
  );
};
