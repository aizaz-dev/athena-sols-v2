import DataInsights from "@/app/component/Product/MissionControl/Data-insight/Data-insight"
import ContentProduction from "@/app/component/Product/MissionControl/ContentProduction/ContentProduction"
import Resources from "@/app/component/Product/MissionControl/Resources/Resources"
import Hero from "@/app/component/Same/Hero/Hero"
import { platformHeroData } from "@/app/data/HeroComponentData/HeroComponentData"
import ImageRightSection from "@/app/component/Same/ImageRightSection/ImageRightSection"
import { EasilyWork, MointerOperationMC , NeverLoss, Tabs, workflows } from "@/app/data/ImageRightSection/imageRightSection"
import VideoSection from "@/app/component/Same/Video/VideoSection"
import {  MissionControlvideo } from "@/app/data/VideoSectionData/videoSection"
import Testimonial from "@/app/component/Same/SolutionTestimonial/SolutionTestimonial"
import { testimonailMS } from "@/app/data/SolutionTestimonial/SolutionTestimonial"
export default function MissionController(){
    return(
        <>
            <Hero data={platformHeroData.find(item => item.id === "missionControl") } />
            <VideoSection {...MissionControlvideo} />
            <DataInsights />
            <ImageRightSection {...MointerOperationMC}/>
            <ImageRightSection {...NeverLoss} />
            <ImageRightSection {...EasilyWork} />
            <ImageRightSection {...Tabs} />
            <ImageRightSection {...workflows} />
            <ContentProduction />
            <Testimonial testimonials={testimonailMS} />
            <Resources />
        </>
    )
}