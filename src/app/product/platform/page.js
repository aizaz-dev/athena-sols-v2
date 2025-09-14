import React from 'react'
import ControlEfficency from '../../component/Product/platform/contorl-efficency/ControlEfficency'
import ContentGovernance from '../../component/Product/platform/ContentGovernance/ContentGovernance'
import ContentManagement from '../../component/Product/platform/ContentManagement/ContentManagement'
import MissionControl from '../../component/Home/MissionControl/MissionControl'
import FlexibilitySection from '../../component/Product/platform/FlexibilitySection/FlexibilitySection'
import SuccessStories from '../../component/Product/platform/SuccessStories/SuccessStories'
import UniquePowerfull from '../../component/Product/platform/UniquePowerfull/UniquePowerfull'
import CustomHeading from '@/app/component/Same/CustomHeading/CustomHeading'
import { extSectionData } from '@/app/data/CustomHeading/CustomHeadingData'
import ContentSlider from '@/app/component/Same/ContentSlider/ContentSlider'
import { PlatformSlider } from '@/app/data/ContentSlider/ContentSliderData'
import Hero from '@/app/component/Same/Hero/Hero'
import { platformHeroData } from '@/app/data/HeroComponentData/HeroComponentData'

const ThePlatForm = () => {
  return (
    <>
      <Hero data={platformHeroData.find(item => item.id === "home")} />
      <ContentSlider slides={PlatformSlider}
      pageTitle="Create and publish content"
      pageHighlight="faster"/>
      <ControlEfficency />
      <ContentGovernance />
      <ContentManagement />
      <MissionControl />
      <FlexibilitySection />
      <SuccessStories />
      <UniquePowerfull />
      <CustomHeading {...extSectionData} />

    </>
  )
}

export default ThePlatForm