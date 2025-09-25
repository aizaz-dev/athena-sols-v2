import CardData from '@/app/component/Product/Accelerators/CardData/CardData'
import FAQ from '@/app/component/Product/Accelerators/Faq/Faq'
import WaitlistForm from '@/app/component/Product/Accelerators/Waitlist/WaitList'
import Hero from '@/app/component/Same/Hero/Hero'
import ImageRightSection from '@/app/component/Same/ImageRightSection/ImageRightSection'
import VideoSection from '@/app/component/Same/Video/VideoSection'
import { platformHeroData } from '@/app/data/HeroComponentData/HeroComponentData'
import { Genetic1, Genetic2, Genetic3, Genetic4 } from '@/app/data/ImageRightSection/imageRightSection'
import { ControlEfficiencyVideo } from '@/app/data/VideoSectionData/videoSection'
import React from 'react'

const Accelerator = () => {
  return (
    <> 
      <Hero data={platformHeroData.find(item => item.id === "accelerateHero")}/> 
      <VideoSection {...ControlEfficiencyVideo} />
      <CardData />
      <ImageRightSection {...Genetic1} />
      <ImageRightSection {...Genetic2} />
      <ImageRightSection {...Genetic3} />
      <ImageRightSection {...Genetic4} />
      <WaitlistForm />
      <FAQ />
    </>
  )
}

export default Accelerator