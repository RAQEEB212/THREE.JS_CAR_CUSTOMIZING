import React from "react";
import Button from "../../../components/ui/Button";
Button;

export default function HeroOverlayCard({ title, desc }) {
  return (
    <div className="flex flex-col items-start gap-y-4 justify-center bg-[#00000026] w-[50%] max-[960px]:w-[80%] flex-1 h-[521px] absolute  top-10  py-8 pr-8">
      <h1 className="text-6xl text-[#F0F0F0]">{title}</h1>
      <p className="text-2xl text-white">{desc}</p>
      <Button
        text="Explore now"
        className="bg-white
     text-black
      text-2xl
      relative
          z-50
          duration-300
           before:absolute
           before:-z-10
           hover:translate-y-2
           hover:translate-x-2
           before:h-full before:w-0
          hover:before:w-full
  hover:before:transition-all
  hover:before:duration-300
    before:left-0
    before:rounded-s-sm
    before:top-0
    before:bg-black 
    before:opacity-30
    py-3 px-6 "
      />
    </div>
  );
}
