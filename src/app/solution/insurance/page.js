import CustomHeading from "@/app/component/Same/CustomHeading/CustomHeading";
import Hero from "@/app/component/Same/Hero/Hero";
import ImageRightSection from "@/app/component/Same/ImageRightSection/ImageRightSection";
import TechStackSection from "@/app/component/Same/TechSection/TechSection";
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
import React from "react";
import {  solutioninsurance } from "@/app/data/solutionData/SolutionFeatures";
import { insuranceLogo, insuranceLogos, insuranceLogosData } from "@/app/data/solutionData/logos";
import Logos from "@/app/component/Solution/Insurrance/Logos";
import Testimonial from "@/app/component/Same/Testimonial/SolutionTestimonial";
import { testimonialWithImage, testimonialWithImageInsurance } from "@/app/data/SolutionTestimonial/SolutionTestimonial";
import LogoGrid from "@/app/component/Same/LogoGrid/LogoGrid";
import { educationLogos } from "@/app/data/LogoGridData/LogoGridData";

const insurance = () => {
  return (
    <>
      <Hero data={platformHeroData.find((item) => item.id === "insurance")} />
      <SolutionLogos logos={insuranceLogo} />
      <ImageRightSection {...WebMD} />
      <TechStackSection data={healthcare} />
      <SolutionCards features={solutioninsurance} />
      <Logos data={insuranceLogosData} />
      <Testimonial testimonials={testimonialWithImageInsurance} />
      <ContentChallenges data={contentChallenges} />
      <Certifications
        heading={{
          before: "The best way to work with",
          highlight: "your content",
          after: "",
        }}
        data={certificationsData}
      />
      <LogoGrid logos={educationLogos} />
      <CustomHeading {...extSectionData} />
    </>
  );
};

export default insurance;
