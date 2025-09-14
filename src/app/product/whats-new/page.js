import AccelerateTV from '@/app/component/Product/Whatsnew/AccelearteTv/AccelearteTv'
import AgenticCms from '@/app/component/Product/Whatsnew/AgenticCmsSection/AgenticCmsSection'
import ContentFaster from '@/app/component/Product/Whatsnew/ContentFaster/ContentFaster'
import Testimonial from '@/app/component/Product/Whatsnew/Testimonial/Testimonial'
import Updates from '@/app/component/Product/Whatsnew/Updates/Updates'
import Whatstv from '@/app/component/Product/Whatsnew/WhatsTv/WhatsTv'
import CustomHeading from '@/app/component/Same/CustomHeading/CustomHeading'
import { extSectionData } from '@/app/data/CustomHeading/CustomHeadingData'
import React from 'react'
import ContentSlider from '@/app/component/Same/ContentSlider/ContentSlider'
import { WhatsnewSlider } from '@/app/data/ContentSlider/ContentSliderData'
import Hero from '@/app/component/Same/Hero/Hero'
import { platformHeroData } from '@/app/data/HeroComponentData/HeroComponentData'

const whatsNew = () => {
  return (
    <>
        <Hero  data={platformHeroData.find(item => item.id === "whatsNew")}/>
        <ContentFaster />
        <Whatstv />
        <ContentSlider slides={WhatsnewSlider} pageTitle="Create and publish content"
      pageHighlight="faster" />
        <AccelerateTV />
        <AgenticCms />
        <Updates />
        <Testimonial />
        <CustomHeading {...extSectionData} />
        
        
    </>
  )
}

export default whatsNew