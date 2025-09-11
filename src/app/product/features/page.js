import BestOBread from '@/app/component/Product/Features/BestOBread/BestOBread'
import ExploreMore from '@/app/component/Product/Features/ExploreMore/ExolorMore'
import FeatureHero from '@/app/component/Product/Features/FeaturesHero/FeaturesHero'
import MissionControl from '@/app/component/Product/Features/MissionControl/MissionControl'
import React from 'react'

const Features = () => {
  return (
    <>
        <FeatureHero />
        <BestOBread />
        <MissionControl />
        <ExploreMore />
    </>
  )
}

export default Features