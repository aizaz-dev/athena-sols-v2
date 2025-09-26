import ContentSlider from "@/app/component/Same/ContentSlider/ContentSlider";
import CustomHeading from "@/app/component/Same/CustomHeading/CustomHeading";
import Hero from "@/app/component/Same/Hero/Hero";
import ImageRightSection from "@/app/component/Same/ImageRightSection/ImageRightSection";
import TechStackSection from "@/app/component/Same/TechSection/TechSection";
import TestimonialSlider from "@/app/component/Same/TestimonialSlider/TestimonialSlider";
import Certifications from "@/app/component/Same/Certifications/Certifications";
import ContentChallenges from "@/app/component/Same/ContentChallenge/ContentChallenge";
import SolutionCards from "@/app/component/Same/SolutionCards/SolutionCards";
import TrustedPartners from "@/app/component/Solution/TrustedPartners/TrustedPartners";
import { PlatformSlider } from "@/app/data/ContentSlider/ContentSliderData";
import { extSectionData } from "@/app/data/CustomHeading/CustomHeadingData";
import { platformHeroData } from "@/app/data/HeroComponentData/HeroComponentData";
import {
  SolutionPageSection,
  WebMD,
} from "@/app/data/ImageRightSection/imageRightSection";
import certificationsData from "@/app/data/solutionData/certificationsData";
import { healthcare } from "@/app/data/techStackSectionData/techStackSectionData";
import  { testimonialsHealth } from "@/app/data/Testimonial/Accelerator/testimonials";
import {solutionHealth } from "@/app/data/solutionData/SolutionFeatures";
import SolutionLogos from "@/app/component/Solution/SolutionLogos/Solutionlogos";
import { healthCareLogo } from "@/app/data/solutionData/logos";
import { contentChallenges } from "@/app/data/solutionData/ContentChallenge";

const Healthcare = () => {
  return (
    <>
      <Hero data={platformHeroData.find((item) => item.id === "healthcare")} />
      <SolutionLogos logos={healthCareLogo} />
      <ImageRightSection {...WebMD} />
      <ContentSlider
        slides={PlatformSlider}
        pageTitle="Create and publish content"
        pageHighlight="faster"
      />
      <TechStackSection data={healthcare} />
      <SolutionCards features={solutionHealth} />
      <TrustedPartners />
      <TestimonialSlider data={testimonialsHealth} />
      <ContentChallenges data={contentChallenges} />
      <ImageRightSection {...SolutionPageSection} />
      <Certifications
        heading={{
          before: "The best way to work with",
          highlight: "your content",
          after: "",
        }}
        data={certificationsData}
      />
      <CustomHeading {...extSectionData} />
    </>
  );
};

export default Healthcare;
