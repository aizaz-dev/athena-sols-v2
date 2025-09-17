import CustomHeading from "@/app/component/Same/CustomHeading/CustomHeading";
import Hero from "@/app/component/Same/Hero/Hero";
import ImageRightSection from "@/app/component/Same/ImageRightSection/ImageRightSection";
import TechStackSection from "@/app/component/Same/TechSection/TechSection";
import TestimonialSlider from "@/app/component/Same/TestimonialSlider/TestimonialSlider";
import Certifications from "@/app/component/Same/Certifications/Certifications";
import ContentChallenges from "@/app/component/Same/ContentChallenge/ContentChallenge";
import SolutionCards from "@/app/component/Same/SolutionCards/SolutionCards";
import SolutionLogos from "@/app/component/Solution/SolutionLogos/Solutionlogos";
import { extSectionData } from "@/app/data/CustomHeading/CustomHeadingData";
import { platformHeroData } from "@/app/data/HeroComponentData/HeroComponentData";
import { WebMD } from "@/app/data/ImageRightSection/imageRightSection";
import certificationsData from "@/app/data/solutionData/certificationsData";
import contentChallenges from "@/app/data/solutionData/ContentChallenge";
import { healthcare } from "@/app/data/techStackSectionData/techStackSectionData";
import testimonials from "@/app/data/Testimonial/Accelerator/testimonials";
import React from "react";
import { solutionFeatures } from "@/app/data/solutionData/SolutionFeatures";
import { insuranceLogos, solutionLogos } from "@/app/data/solutionData/logos";

const insurance = () => {
  return (
    <>
      <Hero data={platformHeroData.find((item) => item.id === "insurance")} />
      <SolutionLogos logos={solutionLogos} />
      <ImageRightSection {...WebMD} />
      <TechStackSection data={healthcare} />
      <SolutionCards features={solutionFeatures} />
      <TestimonialSlider data={testimonials} />
      <ContentChallenges data={contentChallenges} />
      <Certifications
        heading={{
          before: "The best way to work with",
          highlight: "your content",
          after: "",
        }}
        data={certificationsData}
      />
      <SolutionLogos logos={insuranceLogos} />
      <CustomHeading {...extSectionData} />
    </>
  );
};

export default insurance;
