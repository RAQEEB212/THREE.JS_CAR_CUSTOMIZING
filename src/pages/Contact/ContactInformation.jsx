import React, { useState } from 'react'
import SocialHandles from '../../components/ui/SocialHandles'
import { FaEnvelope, FaPhone, FaLocationArrow } from "react-icons/fa6";
import Border from "../../assets/images/corner-border-circle.png"
import { toast } from 'react-toastify';
import notificationPopup from '../../notifications/NotificationPopup';



export default function ContactInformation() {
const numberCopied = async (event) =>{

 const targetedWrapper = event.target;
const number = targetedWrapper.textContent;

try{
   await navigator.clipboard.writeText(number);
 
    notificationPopup("Successfully Copied", "success");
   
}
catch (error) {
console.log("Failed coping")

}
}

const showEmailDialouge = () =>{

toast(
<div>



</div>,



{ 
    position: "top-right",
    hideProgressBar: true,
    closeOnClick: true,
   
   })





};


  return (
    <>
     <div className="overflow-hidden lg:h-[629px] h-auto lg:w-96 w-full   bg-black p-8  rounded-xl flex flex-col gap-y-16  relative">
            {/* heading */}
            <div className="space-y-1.5">
              <h1 className="text-white text-3xl">Contact Information</h1>
              <p className="font-normal text-base text-light-gray">
                Say something to start a live chat!
              </p>
            </div>

            <div className='flex flex-row gap-x-16 gap-y-16 lg:flex-col '>
            {/* contact Address */}
            <div className="space-y-7 ">
              <div className="flex flex-row items-center gap-x-7 text-white">
                <FaPhone />
                <button className="font-normal text-base" onClick={numberCopied}>1234567890</button>
              </div>
              <div className="flex flex-row items-center gap-x-7 text-white">
                <FaEnvelope />
                <p className="font-normal text-base" onClick={showEmailDialouge}>demo@gmail.com</p>
              </div>
              <div className="flex flex-row items-center gap-x-7 text-white">
                <FaLocationArrow />
                <p className="font-normal text-base">Hyderabad</p>
              </div>
            </div>
            {/* Social links */}
    <SocialHandles properties ="max-lg:flex-col gap-y-2"/>    
    </div>
    
    
    <img src={Border} alt="Corner-border" className="absolute -right-14 -bottom-12 w-60" />
    


          </div>  
          </>
  )
}
