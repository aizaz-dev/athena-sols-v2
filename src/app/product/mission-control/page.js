import MSvideo from "@/app/component/Product/MissionControl/MSvideo/MSvideo"
import DataInsights from "@/app/component/Product/MissionControl/Data-insight/Data-insight"
import ContentProduction from "@/app/component/Product/MissionControl/ContentProduction/ContentProduction"
import Resources from "@/app/component/Product/MissionControl/Resources/Resources"
import Hero from "@/app/component/Same/Hero/Hero"
import { platformHeroData } from "@/app/data/HeroComponentData/HeroComponentData"
import ImageRightSection from "@/app/component/Same/ImageRightSection/ImageRightSection"
import { EasilyWork, MointerOperationMC , NeverLoss, Tabs, workflows } from "@/app/data/ImageRightSection/imageRightSection"
import TestimonialSlider from "@/app/component/Same/TestimonialSlider/TestimonialSlider"
import testimonials, { testimonialsIntegration } from "@/app/data/Testimonial/Accelerator/testimonials"
export default function MissionController(){
    return(
        <>
            <Hero data={platformHeroData.find(item => item.id === "missionControl") } />
            <MSvideo />
            <DataInsights />
            <ImageRightSection {...MointerOperationMC}/>
            <ImageRightSection {...NeverLoss} />
            <ImageRightSection {...EasilyWork} />
            <ImageRightSection {...Tabs} />
            <ImageRightSection {...workflows} />
            <ContentProduction />
        <TestimonialSlider data={testimonialsIntegration} />
            <Resources />
        </>
    )
}