import React from 'react'
import Wrapper from '../../components/ui/Wrapper'
import AboutHero from "../../assets/images/about_hero.jpg"
import lightPattern from "../../assets/cutLayouts/light_pattern.png"
import darkPattern from "../../assets/cutLayouts/dark_pattern.png"
import SidePattern from '../../components/ui/SidePattern'
import ServiceTrackingCard from './ServiceTrackingCard'
import workImage from "../../assets/images/work_image.png"
import TeamWrapper from '../common/TeamWrapper'
import AnimButton from '../../components/ui/AnimButton'



export default function AboutPage() {
  return (
    <>
    
{/* hero section of about */}

<section className='px-20 relative mt-20 flex flex-col items-center text-center gap-y-5 bg-gradient-to-b from-neutral-50 from-70% via-neutral-200 via-65% to-neutral-700 to-95% overflow-hidden'>
    
    <h1 className=' font-bold text-5xl'>About Us</h1>
    <p className='font-normal text-base text-dark-gray'>We're on a mission to transform the digital landscape through innovative solutions and exceptional user experiences.</p>
    <h1 className='font-semibold text-6xl'>Automotive industry in Pakistan.</h1>

<img src={AboutHero} alt="" className='max-lg:h-96 rounded-3xl h-[551px] w-full object-cover opacti'/>


{/* free cutlyouts */}

<SidePattern properties="bg-light-gray top-[390px]  -left-16 "/>
<SidePattern src={darkPattern} properties="bg-dark-gray top-96  -left-18"/>

    </section>    
    
{/* ratings card */}

    <Wrapper properties='bg-darker-gray p-10 space-y-7 '>
        <h1 className='font-bold ml-16   text-3xl text-white'>Our Success Numbers
        </h1>
      <ServiceTrackingCard/>
    </Wrapper>
    
    {/* our mission */}

<Wrapper properties='flex flex-col items-center  gap-y-10 '>
    <h1 className='font-bold text-5xl   border-t-4 pt-1 w-fit text-center'>Our Mission</h1>
    <div className='flex gap-7  max-mlg:w-full items-start max-mlg:flex-col'>
<img src={workImage} alt="" className='w-96 max-mlg:w-full max-mlg:h-96 object-cover'/>

    
    <p className='ml-3 w-96 max-mlg:w-fit'>
        <span className='font-extrabold text-2xl'> &#34; </span>
    Our mission is to provide top-tier automotive services with a commitment to quality, creativity, and customer satisfaction. We strive to make car customization easy, affordable, and accessible for everyone, ensuring every vehicle gets the care and precision it deserves. 
    <span className='font-extrabold text-2xl'> &quot; </span>
    </p>
   
    
    
    
   
    </div>
</Wrapper>

{/* Leadership team */}

<TeamWrapper/>


{/* Join team */}



<Wrapper properties='text-white bg-green-950 text-center py-10  bg-[url("src/assets/images/about_bg.jpg")]  bg-top bg-cover    bg-no-repeat relative 
space-y-8
relative before:absolute before:w-full before:left-0 before:h-full before:top-0 before:bg-greish-green before:-z-10 z-50 before:opacity-70


'>
    <h1 className=' font-bold  text-2xl'>Join the Carbanao team!</h1>
    <p className='font-medium text-base'>Do you want to be part of the Carbanao team? click "join team"</p>
    <AnimButton text="join team!" properties="bg-black px-10"/>

   
</Wrapper>













    </>
  )
}
