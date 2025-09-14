import BestOBread from '@/app/component/Product/Features/BestOBread/BestOBread'
import ContentManagement from '@/app/component/Product/Features/ContentManagement/ContentManagement'
import ExploreMore from '@/app/component/Product/Features/ExploreMore/ExolorMore'
import KeepContent from '@/app/component/Product/Features/KeepContent/KeepContent'
import Planning from '@/app/component/Product/Features/Planning/Planning'
import TeamSection from '@/app/component/Product/Features/TeamSection/TeamSection'
import Hero from '@/app/component/Same/Hero/Hero'
import TestimonialSlider from '@/app/component/Same/TestimonialSlider/TestimonialSlider'
import { platformHeroData } from '@/app/data/HeroComponentData/HeroComponentData'
import FeaturesSlider from '@/app/data/Testimonial/Features/FeatureSlider'
import React from 'react'
import { features } from '@/app/data/ImageRightSection/imageRightSection';
import ImageRightSection from '@/app/component/Same/ImageRightSection/ImageRightSection'

const Features = () => {
  return (
    <>
        <Hero data={platformHeroData.find(item => item.id === "Features")} />
        <TestimonialSlider data={FeaturesSlider} />
        <ContentManagement />
        <Planning />
        <KeepContent />
        <TeamSection />
        <BestOBread />
        <ImageRightSection {...features} />
        <ExploreMore />
        
    </>
  )
}

export default Features