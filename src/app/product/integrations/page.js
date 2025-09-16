import TechStackSection from "@/app/component/Product/Integration/ContentIntegration/ContentIntegration"
import Cards from "@/app/component/Product/Integration/Cards/Cards"
import DataInsightsIntegration from "@/app/component/Product/Integration/DataInsight"
import {TestimonialHeader} from "@/app/component/Product/Integration/TestimonialHead/TestimonialHeader"
import CustomHeading from "@/app/component/Same/CustomHeading/CustomHeading"
import Hero from "@/app/component/Same/Hero/Hero"
import ImageRightSection from "@/app/component/Same/ImageRightSection/ImageRightSection"
import TestimonialSlider from "@/app/component/Same/TestimonialSlider/TestimonialSlider"
import { extSectionData } from "@/app/data/CustomHeading/CustomHeadingData"
import { platformHeroData } from "@/app/data/HeroComponentData/HeroComponentData"
import { Explore, Integration } from "@/app/data/ImageRightSection/imageRightSection"
import { integrations } from "@/app/data/IntegrationSection/cards"
import testimonials from "@/app/data/Testimonial/Accelerator/testimonials"

const Intrgration = () => {
  return (
    <>
        <Hero data={platformHeroData.find(item=> item.id === "Integrate")} /> 
        <TechStackSection />
        <DataInsightsIntegration />
        <ImageRightSection {...Integration}/>
        <TestimonialHeader />
        <TestimonialSlider data={testimonials} />
        <ImageRightSection {...Explore} />
        <Cards {...integrations}/>
        <CustomHeading {...extSectionData}/>
    </>
  )
}

export default Intrgration