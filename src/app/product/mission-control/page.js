import MSvideo from "@/app/component/Product/MissionControl/MSvideo/MSvideo"
import DataInsights from "@/app/component/Product/MissionControl/Data-insight/Data-insight"
import MoniterOperation from "@/app/component/Product/MissionControl/MointerOperation/MointerOperation"
import NeverLoss from "@/app/component/Product/MissionControl/NeverLoss/Neverloss"
import EasilyWork from "@/app/component/Product/MissionControl/EasilyWork/EasilyWork"
import Tabs from "@/app/component/Product/MissionControl/Tabs/Tabs"
import Centralized from "@/app/component/Product/MissionControl/Centralized/Centralized"
import ContentProduction from "@/app/component/Product/MissionControl/ContentProduction/ContentProduction"
import Testimonial from "@/app/component/Product/MissionControl/TestimonialSection/TestimonialSection"
import Resources from "@/app/component/Product/MissionControl/Resources/Resources"
import Hero from "@/app/component/Same/Hero/Hero"
import { platformHeroData } from "@/app/data/HeroComponentData/HeroComponentData"
export default function MissionController(){
    return(
        <>
            <Hero data={platformHeroData.find(item => item.id === "missionControl") } />
            <MSvideo />
            <DataInsights />
            <MoniterOperation />
            <NeverLoss />
            <EasilyWork />
            <Tabs />
            <Centralized />
            <ContentProduction />
            <Testimonial />
            <Resources />
        </>
    )
}