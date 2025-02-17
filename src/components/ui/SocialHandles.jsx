import React from 'react'
import {FaFacebookF,FaWhatsapp,FaTwitter,FaInstagram} from "react-icons/fa6"
import {Link} from "react-router-dom"

export default function SocialHandles() {
  return (

    // social links
    <div className='flex flex-row items-center gap-x-6'>
       
       <Link to="" className='p-0.5 bg-white  rounded-sm'><FaFacebookF/></Link>
       <Link to="" className='p-0.5 bg-white rounded-sm'><FaWhatsapp/></Link>
       <Link to="" className='p-0.5 bg-white rounded-sm'><FaTwitter/></Link>
       <Link to="" className='p-0.5 bg-white rounded-sm'><FaInstagram/></Link>
      
    </div>
  )
}
