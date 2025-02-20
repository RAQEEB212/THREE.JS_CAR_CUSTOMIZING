import React from 'react'

export default function HeroCrouselImage({content}) {
  return (
    <div className="w-full flex justify-end">
    <img src={content} alt="" className='h-[545px] w-[80%] object-cover rounded-4xl'/>
    </div>
  )
}