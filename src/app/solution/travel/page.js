import Certifications from '@/app/component/Same/Certifications/Certifications'
import ContentChallenges from '@/app/component/Same/ContentChallenge/ContentChallenge'
import CustomHeading from '@/app/component/Same/CustomHeading/CustomHeading'
import Hero from '@/app/component/Same/Hero/Hero'
import ImageRightSection from '@/app/component/Same/ImageRightSection/ImageRightSection'
import LogoGrid from '@/app/component/Same/LogoGrid/LogoGrid'
import SolutionCards from '@/app/component/Same/SolutionCards/SolutionCards'
import Testimonial from '@/app/component/Same/SolutionTestimonial/SolutionTestimonial'
import TechStackSection from '@/app/component/Same/TechSection/TechSection'
import { extSectionData } from '@/app/data/CustomHeading/CustomHeadingData'
import { platformHeroData } from '@/app/data/HeroComponentData/HeroComponentData'
import { WebMD } from '@/app/data/ImageRightSection/imageRightSection'
import { educationLogos, travelLogos } from '@/app/data/LogoGridData/LogoGridData'
import certificationsData from '@/app/data/solutionData/certificationsData'
import contentChallenges from '@/app/data/solutionData/ContentChallenge'
import { solutionPage } from '@/app/data/solutionData/SolutionFeatures'
import { testimonialNoImage } from '@/app/data/SolutionTestimonial/SolutionTestimonial'
import { healthcare } from '@/app/data/techStackSectionData/techStackSectionData'
import React from 'react'

const Travel = () => {
  return (
    <>
        <Hero data={platformHeroData.find(item => item.id === "travel")} />
        <LogoGrid logos={travelLogos} />
        <ImageRightSection {...WebMD} />
        <TechStackSection data={healthcare} />
        <SolutionCards features={solutionPage} />
        <Testimonial testimonials={testimonialNoImage} />
        <ContentChallenges data={contentChallenges } />
        <Certifications
         heading={{
          before: "The best way to work with",
          highlight: "your content",
          after: "",
        }}
         data={certificationsData} />
         <LogoGrid logos={educationLogos} />
         <CustomHeading {...extSectionData} />
    </>
  )
}

export default Travel