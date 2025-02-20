import React from "react";
import Button from "../../components/ui/Button";
import Slide from "./Carousel/Slide";
import HeroCrousel from "./Carousel/HeroCarousel";

export default function HeroSection() {
  return (
    <section className="relative h-screen mb-10">
      {/* backcolor effect */}
      <div className="flex flex-row absolute top-0 h-screen items-center gap-x-3 justify-between w-full    pr-28 ">
        <div className=" bg-black pl-28 w-3/5 h-screen"></div>

        <div className="bg-white flex flex-row gap-x-3 justify-between items-center w-4/5 h-screen"></div>
      </div>

      {/* Crausel */}
      <section className="pl-32 h-full relative z-50">
        {/* slide#1 */}
       <HeroCrousel/>
      </section>
    </section>
  );
}
