import React from 'react'
import logo from "../assets/images/logo.png"
import SocialHandles from './ui/SocialHandles'
export default function Footer() {
  return (
   <footer className='bg-black mt-10 pt-40'>

<p className='text-white font-semibold text-center mb-10'>Need help renting a car? Please call <span className='text-orange-400'>+1-333-444-5555</span></p>

<hr className='bg-gray-300 h-0.5'/>

<div className=' bg-black px-20 flex flex-row justify-between'>
 <img src={logo} alt="" className='w-48 h-20  object-cover'/>
 {/* social icons */}
 <SocialHandles/>
</div>

   </footer>
  )
}
