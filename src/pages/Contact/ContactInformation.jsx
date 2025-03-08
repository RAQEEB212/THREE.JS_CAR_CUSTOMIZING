import React from 'react'
import SocialHandles from '../../components/ui/SocialHandles'
import { FaEnvelope, FaPhone, FaLocationArrow } from "react-icons/fa6";
import Border from "../../assets/images/corner-border-circle.png"

export default function ContactInformation() {


const numberCopied = async (event) =>{

 const targetedWrapper = event.target;
const number = targetedWrapper.textContent;

try{
   await navigator.clipboard.writeText(number);
    alert("Copied: "+ number)
}
catch (error) {
console.log("Failed coping")
}
}




  return (
     <div className="overflow-hidden bg-black p-8 rounded-xl space-y-16 relative">
            {/* heading */}
            <div className="space-y-1.5">
              <h1 className="text-white text-3xl">Contact Information</h1>
              <p className="font-normal text-base text-light-gray">
                Say something to start a live chat!
              </p>
            </div>
            {/* contact Address */}
            <div className="space-y-7">
              <div className="flex flex-row items-center gap-x-7 text-white">
                <FaPhone />
                <button className="font-normal text-base" onClick={numberCopied}>1234567890</button>
              </div>
              <div className="flex flex-row items-center gap-x-7 text-white">
                <FaEnvelope />
                <p className="font-normal text-base">demo@gmail.com</p>
              </div>
              <div className="flex flex-row items-center gap-x-7 text-white">
                <FaLocationArrow />
                <p className="font-normal text-base">Hyderabad</p>
              </div>
            </div>
    
            {/* Social links */}
    
    <SocialHandles/>    
    
    
    
    <img src={Border} alt="Corner-border" className="absolute -right-14 -bottom-12 w-60" />
    
          </div>  
  )
}
