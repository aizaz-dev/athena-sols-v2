import React from 'react'
import Hero from '../component/Same/Hero/Hero'
import { platformHeroData } from '../data/HeroComponentData/HeroComponentData'
import Certifications from '../component/Same/Certifications/Certifications'
import certificationsData from '../data/solutionData/certificationsData'
import { aboutcustomHeadingData } from '../data/CustomHeading/CustomHeadingData'
import ExecutiveTeam from '../component/About/ExcutiveTeam/Excutiveteam'
import TimelineHistory from '../component/About/TimelineHistory/TimelineHistory'
import CustomHeading from '../component/About/CustomHeading/CustomHeading'
import MissionVision from '../component/About/MissionAndVision/MissionAndVision'
import ValuesSection from '../component/About/ValueSection/ValueSection'
import AboutCards from '../component/About/AboutCards/AboutCard'
import Investors from '../component/About/InvestorLogo/InvestorLogo'

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
    <MissionVision />
    <ValuesSection />
    <AboutCards />
    <Investors />
    <CustomHeading {...aboutcustomHeadingData } />
    </>
  )
}

export default About