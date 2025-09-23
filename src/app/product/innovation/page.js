import Hero from '@/app/component/Same/Hero/Hero'
import ImageRightSection from '@/app/component/Same/ImageRightSection/ImageRightSection'
import { platformHeroData } from '@/app/data/HeroComponentData/HeroComponentData'
import React from 'react'
import {  Innovation, shapeTheFuture } from '@/app/data/ImageRightSection/imageRightSection';
import ContentSlider from '@/app/component/Same/ContentSlider/ContentSlider';
import { InnvotionSlider } from '@/app/data/ContentSlider/ContentSliderData';
import VideoSection from '@/app/component/Same/Video/VideoSection';
import { ControlEfficiencyVideo } from '@/app/data/VideoSectionData/videoSection';
import TestimonialSlider from '@/app/component/Same/TestimonialSlider/TestimonialSlider';
import  { testimonialsIntegration } from '@/app/data/Testimonial/Accelerator/testimonials';
import CustomHeading from '@/app/component/Same/CustomHeading/CustomHeading';
import { extSectionData } from '@/app/data/CustomHeading/CustomHeadingData';

const InnovationSection = () => {
  return (
    <>
        <Hero data={platformHeroData.find(item=> item.id === "Innvotion")} /> 
        <ImageRightSection {...Innovation}/>   
        <ImageRightSection {...shapeTheFuture} /> 
        <ContentSlider  slides={InnvotionSlider} pageTitle="Innovation Lab highlights,"
              pageHighlight="available now"/>
        <VideoSection {...ControlEfficiencyVideo} />
        <TestimonialSlider data={testimonialsIntegration} />
        <CustomHeading {...extSectionData} />
    </>
  )
}

export default InnovationSection