import React from 'react'
import HeroIndustries from '../component/Industries/HeroComponent/Hero'
import { platformHeroData } from '../data/HeroComponentData/HeroComponentData'
import IndustriesServices from '../component/Industries/Servies/Services'
import industries from '../data/Industries/industries'
import SuccessStories from '../component/Industries/SuccessStories/SuccessStories'
import CustomHeading from '../component/Same/CustomHeading/CustomHeading'
import { IndustriesData } from '../data/CustomHeading/CustomHeadingData'

const Page = () => {
  return (
    <>
    <HeroIndustries data={platformHeroData.find(item => item.id === "industries")} />
    <IndustriesServices data={industries} />
    <SuccessStories />
    <CustomHeading  {...IndustriesData} />
    </>
  )
}

export default Page