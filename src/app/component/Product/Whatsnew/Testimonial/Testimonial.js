import TestimonialSlider from '@/app/component/Same/TestimonialSlider/TestimonialSlider'
import WhatsReview from '@/app/data/Testimonial/WhatsReviews/WhatsReviews'
import React from 'react'

const Testimonial = () => {
  return (
         <div className="w-full bg-black text-left ">
      <h2 className="text-3xl md:text-4xl text-white px-40 font-bold leading-snug">
        See what{" "}
        <span className="text-[#866BFD]">customers are loving</span>
      </h2>
      <TestimonialSlider data={WhatsReview}/>
    </div>
)
}

export default Testimonial