import React from 'react'
import ContentManagement from '../../component/Product/platform/ContentManagement/ContentManagement'
import MissionControl from '../../component/Home/MissionControl/MissionControl'
import FlexibilitySection from '../../component/Product/platform/FlexibilitySection/FlexibilitySection'
import SuccessStories from '../../component/Product/platform/SuccessStories/SuccessStories'
import CustomHeading from '@/app/component/Same/CustomHeading/CustomHeading'
import { extSectionData } from '@/app/data/CustomHeading/CustomHeadingData'
import ContentSlider from '@/app/component/Same/ContentSlider/ContentSlider'
import { PlatformSlider } from '@/app/data/ContentSlider/ContentSliderData'
import Hero from '@/app/component/Same/Hero/Hero'
import { platformHeroData } from '@/app/data/HeroComponentData/HeroComponentData'
import VideoSection from '@/app/component/Same/Video/VideoSection'
import { ControlEfficiencyVideo } from '@/app/data/VideoSectionData/videoSection'
import FutureProofLogos from '@/app/component/Same/FutureProofLogos/FutureProofLogos'
import { futureProofData } from '@/app/data/FutureProof/FutureProofData'
import { Governance } from '@/app/data/ImageRightSection/imageRightSection'
import ImageRightSectionGray from '@/app/component/Same/ImageRightGray/ImageRightGray'

const ThePlatForm = () => {
  return (
    <>
      <Hero data={platformHeroData.find(item => item.id === "home")} />
      <ContentSlider slides={PlatformSlider}
      pageTitle="Create and publish content"
      pageHighlight="faster"/>
      <VideoSection {...ControlEfficiencyVideo} />
      <ImageRightSectionGray {...Governance} />
      <ContentManagement />
      <MissionControl />
      <FlexibilitySection />
      <SuccessStories />
      <FutureProofLogos data={futureProofData} />
      <CustomHeading {...extSectionData} />

    </>
  )
}

export default ThePlatForm