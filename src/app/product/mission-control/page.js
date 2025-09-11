import MSvideo from "@/app/component/Product/MissionControl/MSvideo/MSvideo"
import MissionControllerHero from "../../component/Product/MissionControl/MissionControllerHero/MissionControllerHero"
import DataInsights from "@/app/component/Product/MissionControl/Data-insight/Data-insight"
import MoniterOperation from "@/app/component/Product/MissionControl/MointerOperation/MointerOperation"
import NeverLoss from "@/app/component/Product/MissionControl/NeverLoss/Neverloss"
import EasilyWork from "@/app/component/Product/MissionControl/EasilyWork/EasilyWork"
import Tabs from "@/app/component/Product/MissionControl/Tabs/Tabs"
import Centralized from "@/app/component/Product/MissionControl/Centralized/Centralized"
import ContentProduction from "@/app/component/Product/MissionControl/ContentProduction/ContentProduction"
import Testimonial from "@/app/component/Product/MissionControl/TestimonialSection/TestimonialSection"
import Resources from "@/app/component/Product/MissionControl/Resources/Resources"
export default function MissionController(){
    return(
        <>
            <MissionControllerHero />
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