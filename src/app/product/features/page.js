import BestOBread from '@/app/component/Product/Features/BestOBread/BestOBread'
import ContentManagement from '@/app/component/Product/Features/ContentManagement/ContentManagement'
import ExploreMore from '@/app/component/Product/Features/ExploreMore/ExolorMore'
import FeatureHero from '@/app/component/Product/Features/FeaturesHero/FeaturesHero'
import TeamSection from '@/app/component/Product/Features/TeamSection/TeamSection'
import MissionControl from '@/app/component/Same/MissionControl/MissionControl'
import TestimonialSlider from '@/app/component/Same/TestimonialSlider/TestimonialSlider'
import { missionControlfeature } from '@/app/data/MissionControl/featureData'
import FeaturesSlider from '@/app/data/Testimonial/Features/FeatureSlider'
import React from 'react'

const Features = () => {
  return (
    <>
        <FeatureHero />
        <TestimonialSlider data={FeaturesSlider} />
        <ContentManagement />
        <TeamSection />
        <BestOBread />
        <MissionControl data={missionControlfeature} />
        <ExploreMore />
    </>
  )
}

export default Features