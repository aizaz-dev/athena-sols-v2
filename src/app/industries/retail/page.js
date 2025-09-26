import Certifications from "@/app/component/Same/Certifications/Certifications";
import ContentChallenges from "@/app/component/Same/ContentChallenge/ContentChallenge";
import CustomHeading from "@/app/component/Same/CustomHeading/CustomHeading";
import Hero from "@/app/component/Same/Hero/Hero";
import ImageRightSection from "@/app/component/Same/ImageRightSection/ImageRightSection";
import LogoGrid from "@/app/component/Same/LogoGrid/LogoGrid";
import SolutionCards from "@/app/component/Same/SolutionCards/SolutionCards";
import Testimonial from "@/app/component/Same/SolutionTestimonial/SolutionTestimonial";
import TechStackSection from "@/app/component/Same/TechSection/TechSection";
import SolutionLogos from "@/app/component/Solution/SolutionLogos/Solutionlogos";
import { extSectionData } from "@/app/data/CustomHeading/CustomHeadingData";
import { platformHeroData } from "@/app/data/HeroComponentData/HeroComponentData";
import { WebMD } from "@/app/data/ImageRightSection/imageRightSection";
import { educationLogos } from "@/app/data/LogoGridData/LogoGridData";
import { certificationsRetail } from "@/app/data/solutionData/certificationsData";
import { contentRetail } from "@/app/data/solutionData/ContentChallenge";
import { retailLogos } from "@/app/data/solutionData/logos";
import { TechCards } from "@/app/data/solutionData/SolutionFeatures";
import { retailTestimonial } from "@/app/data/SolutionTestimonial/SolutionTestimonial";
import { RetailTech } from "@/app/data/techStackSectionData/techStackSectionData";
import React from "react";

const Retail = () => {
  return (
    <>
      <Hero data={platformHeroData.find((item) => item.id === "retail")} />
      <SolutionLogos logos={retailLogos} />
      <ImageRightSection {...WebMD} />
      <TechStackSection data={RetailTech} />
      <SolutionCards features={TechCards} />
      <Testimonial testimonials={retailTestimonial} />
      <ContentChallenges data={contentRetail} />
      <Certifications
        heading={{
          before: "The best way to work with",
          highlight: "your content",
          after: "",
        }}
        data={certificationsRetail}
      />
      <LogoGrid logos={educationLogos} />
      <CustomHeading {...extSectionData} />
    </>
  );
};

export default Retail;
