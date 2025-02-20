import React, { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { clients } from "../../../data/homePageData";
import SliderAngles from "../../../components/ui/SliderAngles";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { SiTruenas } from "react-icons/si";

export default function ClientCrousel() {
  const [targetingIndex, setTargetingIndex] = useState(0);
  const [currentSlidesArr, setCurrentSlidesArr] = useState(clients.slice(0, 2));

  const movePrevious = () => {
    setTargetingIndex((prevIndex) => {
      if (prevIndex > 0) {
        const newIndex = prevIndex - 1;

        setCurrentSlidesArr(clients.slice(newIndex, newIndex + 2));

        return newIndex;
      }
      return prevIndex;
    });
  };

  const moveNext = (event) => {
    setTargetingIndex((prevIndex) => {
      if (prevIndex < clients.length - 2) {
        const newIndex = prevIndex + 1;
        setCurrentSlidesArr(clients.slice(newIndex, newIndex + 2));
        return newIndex;
      }

      return prevIndex;
    });
  };

  return (
    //     <div className='flex flex-row  justify-between items-center gap-5'>

    //      <SliderAngles icon={<FaAngleLeft/>} slideTo={movePrevious} disabled={currentSlidesArr.length===1}/>

    //       <div className='flex flex-row  gap-x-6 bg-[#444444]'>
    // {currentSlidesArr &&
    // currentSlidesArr.map((slide,index)=>{
    //     return (
    // <div key={index} className={`flex-1  text-white rounded-sm p-5 flex flex-col items-center gap-y-3 justify-center border-[#C4C4C4] ${index%2===0 ? "border-r-2":"border-l-2"}`}>
    // <img src={slide.profile} alt="" className='w-32 h-32 rounded-full mb-3'/>
    // <h1 className='text-2xl font-medium'>{slide.name}</h1>
    // <p className='text-center font-light'>{slide.feedback}</p>
    //         </div>
    //     )
    // })
    // }

    //       </div>

    //       <SliderAngles icon={<FaAngleRight/>} slideTo={moveNext} />

    //     </div>

    <Swiper
      className="w-2xl bg-[#444444] !flex flex-row  justify-between items-center gap-10"
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      navigation={true}
      effect={'flip'}
      grabCursor={true}
     
      spaceBetween={30}
      slidesPerView={2}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {clients.map((slide, index) => {
        return (
          
          <SwiperSlide
            key={index}
            className={`min-h-96   text-white rounded-sm p-5 !flex flex-col items-center gap-y-3 justify-center border-[#C4C4C4] ${index%2===0?"border-r-2":"border-l-2"}`}
          >
            <img
              src={slide.profile}
              alt=""
              className="w-32 h-32 rounded-full mb-3"
            />
            <h1 className="text-2xl font-medium">{slide.name}</h1>
            <p className="text-center font-light">{slide.feedback}</p>
          </SwiperSlide>
         
         
        );
      })}
    </Swiper>
  );
}
