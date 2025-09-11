import React from 'react'
import PlatForm from '../../component/Product/platform/platform-hero/platform-hero'
import ContentSlider from '../../component/Product/platform/content-slider/ContentSlider'
import ControlEfficency from '../../component/Product/platform/contorl-efficency/ControlEfficency'
import ContentGovernance from '../../component/Product/platform/ContentGovernance/ContentGovernance'
import ContentManagement from '../../component/Product/platform/ContentManagement/ContentManagement'
import MissionControl from '../../component/Home/MissionControl/MissionControl'
import FlexibilitySection from '../../component/Product/platform/FlexibilitySection/FlexibilitySection'
import SuccessStories from '../../component/Product/platform/SuccessStories/SuccessStories'
import UniquePowerfull from '../../component/Product/platform/UniquePowerfull/UniquePowerfull'
import EXTSection from '../../component/Product/platform/EXTSection/EXTSection'

const ThePlatForm = () => {
  return (
    <>
      <PlatForm />
      <ContentSlider />
      <ControlEfficency />
      <ContentGovernance />
      <ContentManagement />
      <MissionControl />
      <FlexibilitySection />
      <SuccessStories />
      <UniquePowerfull />
      <EXTSection />

    </>
  )
}

export default ThePlatForm