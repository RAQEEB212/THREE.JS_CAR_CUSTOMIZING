import React from 'react'
import Button from './ui/Button'
import Tablink from './ui/Tablink'
import logo from "../assets/images/logo.png"
export default function Header() {
  return (
<header className='flex flex-row items-center gap-x-3 justify-between w-full    pr-28 '>

<div className=' bg-black pl-28 w-3/5'> 
    <img src={logo} alt="" className='w-3xs h-28  object-cover'/>
</div>

<div className='bg-white flex flex-row gap-x-3 justify-between items-center w-4/5'>
<nav>
<div className='flex gap-x-8 flex-row items-center'>
<Tablink text="Home" path="/home"/>
<Tablink text="About" path="/about"/>
<Tablink text="Booking" path="/booking"/>
<Tablink text="Cars" path="/cars"/>
<Tablink text="Contact" path="/contact"/>
</div>
</nav>
<Button className="text-white font-normal leading-6 bg-black p-2" text="login/sign up"/>
</div>

</header>
  )
}
