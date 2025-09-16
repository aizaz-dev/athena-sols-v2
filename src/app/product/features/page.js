import ContentManagement from '@/app/component/Product/Features/ContentManagement/ContentManagement'
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
import CustomHeading from '@/app/component/Same/CustomHeading/CustomHeading'
import { extSectionData } from '@/app/data/CustomHeading/CustomHeadingData'
import FutureProofLogos from '@/app/component/Same/FutureProofLogos/FutureProofLogos'
import { futureProofData } from '@/app/data/FutureProof/FutureProofData'

const Features = () => {
  return (
    <>
        <Hero data={platformHeroData.find(item => item.id === "Features")} />
        <TestimonialSlider data={FeaturesSlider} />
        <ContentManagement />
        <Planning />
        <KeepContent />
        <TeamSection />
        <FutureProofLogos data={futureProofData} />
        <ImageRightSection {...features} />
        <CustomHeading {...extSectionData} />
        
    </>
  )
}

export default Features