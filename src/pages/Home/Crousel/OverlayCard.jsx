import React from 'react'
import Button from '../../../components/ui/Button'
Button

export default function OverlayCard() {
  return (
    <div className='flex flex-col items-start gap-y-4 justify-center bg-[#00000026] w-[50%] max-[960px]:w-[80%] flex-1 h-[521px] absolute  top-10  py-8 pr-8'>
    <h1 className='text-6xl text-[#F0F0F0]'>3D Car Modification and Discussion Platform</h1>
    <p className='text-2xl text-white'>Discover Car Banao’s amazing deals on car Modification. Select from a range of car options and local specials to get the best deal</p>
    <Button text="Explore now" className="bg-white text-black text-2xl py-3 px-6 "/>
    </div>
  )
}
