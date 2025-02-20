import React from 'react'
import HeroOverlayCard from './HeroOverlayCard'
import HeroCrouselImage from './HeroCarouselImage'

export default function Slide() {
  return (
    <div>
    {/* overlay section */}
    <HeroOverlayCard/>
    {/* Hero picture */}
    <HeroCrouselImage/>
        </div>
  )
}
