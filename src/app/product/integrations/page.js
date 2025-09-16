import ContentIntegration from "@/app/component/Product/ContentIntegration/ContentIntegration"
import DataInsightsIntegration from "@/app/component/Product/Integration/DataInsight"
import { TestimonialHeader } from "@/app/component/Product/Integration/TestimonialHead/TestimonialHeader"
import Hero from "@/app/component/Same/Hero/Hero"
import ImageRightSection from "@/app/component/Same/ImageRightSection/ImageRightSection"
import TestimonialSlider from "@/app/component/Same/TestimonialSlider/TestimonialSlider"
import { platformHeroData } from "@/app/data/HeroComponentData/HeroComponentData"
import { Explore, Integration } from "@/app/data/ImageRightSection/imageRightSection"
import testimonials from "@/app/data/Testimonial/Accelerator/testimonials"

const Intrgration = () => {
  return (
    <>
        <Hero data={platformHeroData.find(item=> item.id === "Integrate")} /> 
        <DataInsightsIntegration />
        <ImageRightSection {...Integration}/>
        <ContentIntegration />
        <TestimonialHeader />
        <TestimonialSlider data={testimonials} />
        <ImageRightSection {...Explore} />
    </>
  )
}

export default Intrgration