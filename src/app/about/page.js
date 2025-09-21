import React from 'react'
import Hero from '../component/Same/Hero/Hero'
import { platformHeroData } from '../data/HeroComponentData/HeroComponentData'
import Certifications from '../component/Same/Certifications/Certifications'
import certificationsData from '../data/solutionData/certificationsData'
import CustomHeading from '../component/Same/CustomHeading/CustomHeading'
import { aboutcustomHeadingData } from '../data/CustomHeading/CustomHeadingData'
import ExecutiveTeam from '../component/About/ExcutiveTeam/Excutiveteam'
import TimelineHistory from '../component/About/TimelineHistory/TimelineHistory'

const About = () => {
  return (
    <>
    <Hero data={platformHeroData.find(item => item.id === "about")} />
    <Certifications data={certificationsData}  heading={{
          before: "",
          highlight: "",
          after: "",
        }}/>
    <ExecutiveTeam />
    <TimelineHistory />
    <CustomHeading {...aboutcustomHeadingData } />
    </>
  )
}

export default About