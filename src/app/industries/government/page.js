import Certifications from "@/app/component/Same/Certifications/Certifications"
import ContentChallenges from "@/app/component/Same/ContentChallenge/ContentChallenge"
import CustomHeading from "@/app/component/Same/CustomHeading/CustomHeading"
import Hero from "@/app/component/Same/Hero/Hero"
import ImageRightSection from "@/app/component/Same/ImageRightSection/ImageRightSection"
import LogoGrid from "@/app/component/Same/LogoGrid/LogoGrid"
import SolutionCards from "@/app/component/Same/SolutionCards/SolutionCards"
import TechStackSection from "@/app/component/Same/TechSection/TechSection"
import TestimonialSlider from "@/app/component/Same/TestimonialSlider/TestimonialSlider"
import SolutionLogos from "@/app/component/Solution/SolutionLogos/Solutionlogos"
import { customHeadingGovt, extSectionData } from "@/app/data/CustomHeading/CustomHeadingData"
import { platformHeroData } from "@/app/data/HeroComponentData/HeroComponentData"
import { Govermentsection } from "@/app/data/ImageRightSection/imageRightSection"
import { educationLogos } from "@/app/data/LogoGridData/LogoGridData"
import { certificationsGovt } from "@/app/data/solutionData/certificationsData"
import { contentRetail, GovermentChallenges } from "@/app/data/solutionData/ContentChallenge"
import { governLogos } from "@/app/data/solutionData/logos"
import { GovernemtCards } from "@/app/data/solutionData/SolutionFeatures"
import { GovernmentText } from "@/app/data/techStackSectionData/techStackSectionData"
import { goverTestimonial } from "@/app/data/Testimonial/Government/testimoinialGovern"

const Government = () => {
    return(
        <>
            <Hero data={platformHeroData.find(item => item.id === "government")} />
            <SolutionLogos logos={governLogos} />
            <ImageRightSection {...Govermentsection} />
            <TechStackSection data={GovernmentText} />
            <SolutionCards features={GovernemtCards}/>
            <TestimonialSlider data={goverTestimonial}/>
            <ContentChallenges data={GovermentChallenges} />
             <Certifications
                    heading={{
                      before: "The best way to work with",
                      highlight: "your content",
                      after: "",
                    }}
                    data={certificationsGovt}
                  />

                  <LogoGrid logos={educationLogos} />
                  <CustomHeading  {...customHeadingGovt}/>
            
            
        </>
    )
}


export default Government