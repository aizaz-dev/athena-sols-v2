import Certifications from '@/app/component/Same/Certifications/Certifications'
import ContentChallenges from '@/app/component/Same/ContentChallenge/ContentChallenge'
import CustomHeading from '@/app/component/Same/CustomHeading/CustomHeading'
import Hero from '@/app/component/Same/Hero/Hero'
import ImageRightSection from '@/app/component/Same/ImageRightSection/ImageRightSection'
import SolutionCards from '@/app/component/Same/SolutionCards/SolutionCards'
import TechStackSection from '@/app/component/Same/TechSection/TechSection'
import Testimonial from '@/app/component/Solution/Manufacturing/Testimonial'
import SolutionLogos from '@/app/component/Solution/SolutionLogos/Solutionlogos'
import { extSectionData } from '@/app/data/CustomHeading/CustomHeadingData'
import { platformHeroData } from '@/app/data/HeroComponentData/HeroComponentData'
import { WebMD } from '@/app/data/ImageRightSection/imageRightSection'
import certificationsData from '@/app/data/solutionData/certificationsData'
import contentChallenges from '@/app/data/solutionData/ContentChallenge'
import { solutionLogos } from '@/app/data/solutionData/logos'
import { solutionFeatures } from '@/app/data/solutionData/SolutionFeatures'
import { techStackForDevData } from '@/app/data/techStackSectionData/techStackSectionData'
import React from 'react'

const Manufacturing = () => {
  return (
    <>
            <Hero data={platformHeroData.find(item => item.id === "manufacturing")}/>
            <SolutionLogos logos={solutionLogos} />
            <ImageRightSection {...WebMD} />
            <TechStackSection  data={techStackForDevData}/>
            <SolutionCards features={solutionFeatures} />
            <Testimonial />
            <ContentChallenges data={contentChallenges}/>
            <Certifications data={certificationsData}
            heading={{"before":"The best way to work with","highlight":"your content","after":""}} />
            <SolutionLogos logos={solutionLogos} />
            <CustomHeading {...extSectionData}/>
     </>
  )
}

export default Manufacturing