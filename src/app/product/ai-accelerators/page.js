import StrengthenContent from '@/app/component/Product/Accelerators/ContentStrength/ContentStrength'
import FeatureSection from '@/app/component/Product/Accelerators/FeatureSection/FeatureSection'
import ResponsibleAI from '@/app/component/Product/Accelerators/ResponsibleAi/ResponsibleAi'
import CustomHeading from '@/app/component/Same/CustomHeading/CustomHeading'
import Hero from '@/app/component/Same/Hero/Hero'
import TestimonialSlider from '@/app/component/Same/TestimonialSlider/TestimonialSlider'
import { extSectionData } from '@/app/data/CustomHeading/CustomHeadingData'
import { platformHeroData } from '@/app/data/HeroComponentData/HeroComponentData'
import { testimonialsIntegration } from '@/app/data/Testimonial/Accelerator/testimonials'
import React from 'react'

const Accelerator = () => {
  return (
    <> 
      <Hero data={platformHeroData.find(item => item.id === "accelerateHero")}/> 
      <StrengthenContent />
      <FeatureSection />
      <ResponsibleAI />
      <TestimonialSlider data={testimonialsIntegration} />
      <CustomHeading   {...extSectionData} />
    </>
  )
}

export default Accelerator