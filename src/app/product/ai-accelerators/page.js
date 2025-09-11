import StrengthenContent from '@/app/component/Product/Accelerators/ContentStrength/ContentStrength'
import FeatureSection from '@/app/component/Product/Accelerators/FeatureSection/FeatureSection'
import HeroAccelertor from '@/app/component/Product/Accelerators/HeroAccelerator/HeroAccelerator'
import ResponsibleAI from '@/app/component/Product/Accelerators/ResponsibleAi/ResponsibleAi'
import StartCreating from '@/app/component/Product/Accelerators/StartCreatingAi/StartCreatingAi'
import TestimonialSlider from '@/app/component/Same/TestimonialSlider/TestimonialSlider'
import testimonials from '@/app/data/Testimonial/Accelerator/testimonials'
import React from 'react'

const Accelerator = () => {
  return (
    <> 
      <HeroAccelertor /> 
      <StrengthenContent />
      <FeatureSection />
      <ResponsibleAI />
      <TestimonialSlider data={testimonials}/>
      <StartCreating />
    </>
  )
}

export default Accelerator