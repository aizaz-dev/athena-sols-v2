import Updates from '@/app/component/Product/Whatsnew/Updates/Updates'
import Whatstv from '@/app/component/Same/WhatsTv/WhatsTv'
import CustomHeading from '@/app/component/Same/CustomHeading/CustomHeading'
import { extSectionData } from '@/app/data/CustomHeading/CustomHeadingData'
import React from 'react'
import ContentSlider from '@/app/component/Same/ContentSlider/ContentSlider'
import { WhatsnewSlider } from '@/app/data/ContentSlider/ContentSliderData'
import Hero from '@/app/component/Same/Hero/Hero'
import { platformHeroData } from '@/app/data/HeroComponentData/HeroComponentData'
import ImageRightSection from '@/app/component/Same/ImageRightSection/ImageRightSection'
import { ContentSection, ContentSection2 } from '@/app/data/ImageRightSection/imageRightSection'
import TestimonialSlider from '@/app/component/Same/TestimonialSlider/TestimonialSlider'
import  { testimonialsIntegration, testimonialsWhatsNew } from '@/app/data/Testimonial/Accelerator/testimonials'
import { whatstvData } from '@/app/data/WhatsTvData/WhatsTv'
import { AgenticCmsData } from '@/app/data/AgenticCmsData/AgenticCmsData'
import AgenticCms from '@/app/component/Same/AgenticCMS/AgenticCMS'

const whatsNew = () => {
  return (
    <>
        <Hero  data={platformHeroData.find(item => item.id === "whatsNew")}/>
        <ImageRightSection {...ContentSection} />
        <Whatstv data={whatstvData}/>
        <ContentSlider slides={WhatsnewSlider} pageTitle="Create and publish content"
      pageHighlight="faster" />
        <ImageRightSection {...ContentSection2} />
        <AgenticCms data={AgenticCmsData} />
        <AgenticCms data={AgenticCmsData} />
        <TestimonialSlider data={testimonialsWhatsNew} />
        <CustomHeading {...extSectionData} />
        
        
    </>
  )
}

export default whatsNew