import React from 'react'
import { HeroBg, HeroContainer, HeroContent, HeroH1, HeroP, VideoBg } from './HeroElements'
import Video from '../../videos/Video.mp4'



const HeroSection = () => {
  return (
    <>
    <HeroContainer>
        <HeroBg>
            <VideoBg muted autoPlay loop src={Video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
          <HeroH1>JS Is The King</HeroH1>
          <HeroP>Learning JS And Frameworks</HeroP>
        </HeroContent>
    </HeroContainer>
    </>
  )
}

export default HeroSection