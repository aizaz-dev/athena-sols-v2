import ContentSlider from "@/app/component/Same/ContentSlider/ContentSlider"
import DataInsightDeveloper from "@/app/component/Same/DataInsightDeveloper/DataInsightDeveloper"
import Hero from "@/app/component/Same/Hero/Hero"
import ImageRightSectionGray from "@/app/component/Same/ImageRightGray/ImageRightGray"
import ImageRightSection from "@/app/component/Same/ImageRightSection/ImageRightSection"
import TechStackSection from "@/app/component/Same/TechSection/TechSection"
import VideoSection from "@/app/component/Same/Video/VideoSection"
import VideoBgBlue from "@/app/component/Same/VideoBgBlue/videoBgBLue"
import { PlatformSlider } from "@/app/data/ContentSlider/ContentSliderData"
import { getInsightsData } from "@/app/data/DataInsights/DataInsights"
import { platformHeroData } from "@/app/data/HeroComponentData/HeroComponentData"
import { Governance, WebMD } from "@/app/data/ImageRightSection/imageRightSection"
import { healthcare } from "@/app/data/techStackSectionData/techStackSectionData"
import { ControlEfficiencyVideo, HealthcareVideoGray } from "@/app/data/VideoSectionData/videoSection"

const Healthcare= () =>{
    return <>
        <Hero data={platformHeroData.find(item => item.id === "healthcare")}/>
        <ImageRightSection {...WebMD} />
        <ContentSlider slides={PlatformSlider} pageTitle="Create and publish content"
      pageHighlight="faster" />
        <VideoSection {...ControlEfficiencyVideo}/>
        <ImageRightSectionGray {...Governance}/>
        <TechStackSection data={healthcare}/>
        <DataInsightDeveloper data={getInsightsData}/>
        <VideoBgBlue {...HealthcareVideoGray} />
    </>
}

export default Healthcare