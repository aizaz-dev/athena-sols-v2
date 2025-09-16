import DataInsightdeveloper from '@/app/component/Product/ForDeveloper/DataInsightCard/DataInsight'
import FrameworkTabs from '@/app/component/Product/ForDeveloper/FrameworkTabs/FrameworkTabs'
import CustomHeading from '@/app/component/Same/CustomHeading/CustomHeading'
import DataInsightDeveloper from '@/app/component/Same/DataInsightDeveloper/DataInsightDeveloper'
import FutureProofLogos from '@/app/component/Same/FutureProofLogos/FutureProofLogos'
import Hero from '@/app/component/Same/Hero/Hero'
import ImageRightSection from '@/app/component/Same/ImageRightSection/ImageRightSection'
import TechStackSection from '@/app/component/Same/TechSection/TechSection'
import TestimonialSlider from '@/app/component/Same/TestimonialSlider/TestimonialSlider'
import { extSectionData } from '@/app/data/CustomHeading/CustomHeadingData'
import { getInsightsData } from '@/app/data/DataInsights/DataInsights'
import { forDeveloperFutureProofData } from '@/app/data/FutureProof/FutureProofData'
import { platformHeroData } from '@/app/data/HeroComponentData/HeroComponentData'
import { Extend } from '@/app/data/ImageRightSection/imageRightSection'
import { techStackForDevData, techStackForDevData2 } from '@/app/data/techStackSectionData/techStackSectionData'
import testimonials from '@/app/data/Testimonial/Accelerator/testimonials'
import React from 'react'

const ForDeveloper = () => {
  return (
    <>
        <Hero data={platformHeroData.find(item => item.id === "forDeveloper")}/>
        <TechStackSection data={techStackForDevData}/>
        <DataInsightdeveloper />
        <FrameworkTabs />
        <FutureProofLogos data={forDeveloperFutureProofData} />
        <ImageRightSection {...Extend} />
        <TechStackSection data={techStackForDevData2} />
        <DataInsightDeveloper data={getInsightsData} />
        <TestimonialSlider data={testimonials} />
        <CustomHeading {...extSectionData}/>
    </>
  )
}

export default ForDeveloper