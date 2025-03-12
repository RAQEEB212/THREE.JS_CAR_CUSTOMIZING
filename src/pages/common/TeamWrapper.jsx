import React from 'react'
import TeamCrousel from '../Home/Carousel/TeamCarousel'
import Wrapper from '../../components/ui/Wrapper'


export default function TeamWrapper() {
  return (
     <Wrapper properties='w-full flex flex-col items-center'>
            <h1 className="w-fit border-t-4 pt-1 font-bold text-5xl text-center mb-3">
              Our Leadership Team
            </h1>
            <p className="text-2xl font-normal text-center">
              Meet the people behind our success
            </p>
    
            <TeamCrousel />
          </Wrapper>
  )
}
