import React from 'react'
import heroImage from "../../../assets/images/hero_image.jpg"
export default function CrouselImage() {
  return (
    <div className="w-full flex justify-end">
    <img src={heroImage} alt="" className='h-[545px] w-[909px] object-cover rounded-4xl'/>
    </div>
  )
}