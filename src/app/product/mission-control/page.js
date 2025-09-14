import MSvideo from "@/app/component/Product/MissionControl/MSvideo/MSvideo"
import DataInsights from "@/app/component/Product/MissionControl/Data-insight/Data-insight"
import ContentProduction from "@/app/component/Product/MissionControl/ContentProduction/ContentProduction"
import Testimonial from "@/app/component/Product/MissionControl/TestimonialSection/TestimonialSection"
import Resources from "@/app/component/Product/MissionControl/Resources/Resources"
import Hero from "@/app/component/Same/Hero/Hero"
import { platformHeroData } from "@/app/data/HeroComponentData/HeroComponentData"
import ImageRightSection from "@/app/component/Same/ImageRightSection/ImageRightSection"
import { EasilyWork, MointerOperationMC , NeverLoss, Tabs, workflows } from "@/app/data/ImageRightSection/imageRightSection"
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
            <Testimonial />
            <Resources />
        </>
    )
}