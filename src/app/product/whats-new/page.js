import AccelerateTV from '@/app/component/Product/Whatsnew/AccelearteTv/AccelearteTv'
import AgenticCms from '@/app/component/Product/Whatsnew/AgenticCmsSection/AgenticCmsSection'
import ContentFaster from '@/app/component/Product/Whatsnew/ContentFaster/ContentFaster'
import WhatsContentSlider from '@/app/component/Product/Whatsnew/ContentSlider/ContentSlider'
import Hero from '@/app/component/Product/Whatsnew/Hero/Hero'
import Testimonial from '@/app/component/Product/Whatsnew/Testimonial/Testimonial'
import Updates from '@/app/component/Product/Whatsnew/Updates/Updates'
import Whatstv from '@/app/component/Product/Whatsnew/WhatsTv/WhatsTv'
import CustomHeading from '@/app/component/Same/CustomHeading/CustomHeading'
import { extSectionData } from '@/app/data/CustomHeading/CustomHeadingData'


import React from 'react'

const whatsNew = () => {
  return (
    <>
        <Hero />
        <ContentFaster />
        <Whatstv />
        <WhatsContentSlider />
        <AccelerateTV />
        <AgenticCms />
        <Updates />
        <Testimonial />
        <CustomHeading {...extSectionData} />
        
        
    </>
  )
}

export default whatsNew