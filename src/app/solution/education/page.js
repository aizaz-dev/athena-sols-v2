import Certifications from "@/app/component/Same/Certifications/Certifications"
import ContentChallenges from "@/app/component/Same/ContentChallenge/ContentChallenge"
import CustomHeading from "@/app/component/Same/CustomHeading/CustomHeading"
import Hero from "@/app/component/Same/Hero/Hero"
import ImageRightSection from "@/app/component/Same/ImageRightSection/ImageRightSection"
import LogoGrid from "@/app/component/Same/LogoGrid/LogoGrid"
import SolutionCards from "@/app/component/Same/SolutionCards/SolutionCards"
import TechStackSection from "@/app/component/Same/TechSection/TechSection"
import LogoMarquee from "@/app/component/Solution/Education/logoMarquee"
import Testimonial from "@/app/component/Solution/Education/Testimonial"
import { extSectionData } from "@/app/data/CustomHeading/CustomHeadingData"
import { platformHeroData } from "@/app/data/HeroComponentData/HeroComponentData"
import { WebMD } from "@/app/data/ImageRightSection/imageRightSection"
import { educationLogos } from "@/app/data/LogoGridData/LogoGridData"
import certificationsData from "@/app/data/solutionData/certificationsData"
import contentChallenges from "@/app/data/solutionData/ContentChallenge"
import { solutionBanking } from "@/app/data/solutionData/SolutionFeatures"
import { healthcare } from "@/app/data/techStackSectionData/techStackSectionData"

const Education =() => {    
    return <>
       <Hero data={platformHeroData.find(item => item.id === "education")} /> 
        <LogoMarquee  logos={educationLogos}/>
        <ImageRightSection  {...WebMD}/>
        <TechStackSection data={healthcare} />
        <SolutionCards features={solutionBanking} />
        <Testimonial />
        <ContentChallenges data={contentChallenges} />

     <Certifications heading={{
          before: "The best way to work with",
          highlight: "your content",
          after: "",
        }} data={certificationsData
        } />
        <LogoGrid logos={educationLogos} />
        <CustomHeading  {...extSectionData} />
</>

}   


export default Education