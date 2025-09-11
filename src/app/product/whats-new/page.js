import ContentFaster from '@/app/component/Product/Whatsnew/ContentFaster/ContentFaster'
import Hero from '@/app/component/Product/Whatsnew/Hero/Hero'
import Whatstv from '@/app/component/Product/Whatsnew/WhatsTv/WhatsTv'
import React from 'react'

const whatsNew = () => {
  return (
    <>
        <Hero />
        <ContentFaster />
        <Whatstv />
    </>
  )
}

export default whatsNew