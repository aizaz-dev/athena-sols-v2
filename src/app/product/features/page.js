import BestOBread from '@/app/component/Product/Features/BestOBread/BestOBread'
import ExploreMore from '@/app/component/Product/Features/ExploreMore/ExolorMore'
import FeatureHero from '@/app/component/Product/Features/FeaturesHero/FeaturesHero'
import MissionControl from '@/app/component/Product/Features/MissionControl/MissionControl'
import TestimonialSlider from '@/app/component/Same/TestimonialSlider/TestimonialSlider'
import FeaturesSlider from '@/app/data/Testimonial/Features/FeatureSlider'
import React from 'react'

const Features = () => {
  return (
    <>
        <FeatureHero />
        <TestimonialSlider data={FeaturesSlider} />
        <BestOBread />
        <MissionControl />
        <ExploreMore />
    </>
  )
}

export default Features