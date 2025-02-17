import React from 'react'
import { FaAngleLeft,FaAngleRight } from "react-icons/fa6";
import { clients } from '../../../data/homePageData';

export default function ClientCrousel() {
  return (
    <div className='flex flex-row justify-between gap-5'>
      <button className='text-4xl'><FaAngleLeft/></button>
      <div className='flex flex-row gap-x-6 bg-[#444444]'>

{
clients.map((client,index)=>{
    return (
<div key={index} className={`flex-1 max-w-md w-md text-white rounded-sm p-5 flex flex-col items-center gap-y-3 justify-center border-[#C4C4C4] ${index%2===0 ? "border-r-2":"border-l-2"}`}>
<img src={client.profile} alt="" className='w-32 h-32 rounded-full mb-3'/>
<h1 className='text-2xl font-medium'>{client.name}</h1>
<p className='text-center font-light'>{client.feedback}</p>
        </div>


    )
})
}


        
       
      </div>
      <button className='text-4xl'><FaAngleRight/></button>
    </div>
  )
}
