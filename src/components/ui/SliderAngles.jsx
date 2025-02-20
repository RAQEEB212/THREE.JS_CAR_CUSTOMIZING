import React from 'react'

export default function SliderAngles({icon,slideTo,disable=""}) {
  return (
   <button onClick={slideTo} className='text-4xl cursor-pointer' disabled={disable}>
{icon}
   </button>
  )
}
