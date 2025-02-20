import React from 'react'
import Button from '../../../components/ui/Button'
Button

export default function HeroOverlayCard({title,desc}) {
  return (
    <div className='flex flex-col items-start gap-y-4 justify-center bg-[#00000026] w-[50%] max-[960px]:w-[80%] flex-1 h-[521px] absolute  top-10  py-8 pr-8'>
    <h1 className='text-6xl text-[#F0F0F0]'>{title}</h1>
    <p className='text-2xl text-white'>{desc}</p>
    <Button text="Explore now" className="bg-white text-black text-2xl py-3 px-6 "/>
    </div>
  )
}
