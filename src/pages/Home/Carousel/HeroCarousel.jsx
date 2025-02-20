import React, { useEffect, useState } from "react";
import {modelData} from "../../../data/homePageData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import {Pagination} from "swiper/modules";
import HeroCrouselImage from "./HeroCarouselImage";
import HeroOverlayCard from "./HeroOverlayCard";

export default function HeroCrousel() {
 

  
  return (
    <Swiper
      modules={[Pagination]}
      pagination={{ clickable: true }}
      spaceBetween={30}
      slidesPerView={1}
      // onSlideChange={() => console.log("slide change")}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      {modelData.map((slide, index) => {
        return (
          <SwiperSlide
            key={index}
          >
           <HeroCrouselImage content={slide.model}/>
           <HeroOverlayCard title={slide.title} desc={slide.desc}/>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
