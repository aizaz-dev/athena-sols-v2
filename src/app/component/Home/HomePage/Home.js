import { forDeveloperFutureProofData } from "@/app/data/FutureProof/FutureProofData";
import FutureProofLogos from "../../Same/FutureProofLogos/FutureProofLogos";
import AccordionSlider from "../AccordionSlider/AccordionSlider";
import CustomerStories from "../CustomerStories/CustomerStories";
import DiscoverNext from "../DiscoverNext/DiscoverNext";
import HeroSection from "../HeroSection/HeroSection";
import CardInfo from "../Infocard/Cardsinfo";
import LogoMarquee from "../LogoMarquee/LogoMarque";
import MissionControl from "../MissionControl/MissionControl";
import SecuritySection from "../SecurityCards/SecurityCards";
import CustomHeading from "../../Same/CustomHeading/CustomHeading";
import { extSectionData } from "@/app/data/CustomHeading/CustomHeadingData";

function HomePage() {
  return (
    <>
      <HeroSection />
      <LogoMarquee />
      <CardInfo />
      <DiscoverNext />
      <AccordionSlider />
      <FutureProofLogos data={forDeveloperFutureProofData} />
      <MissionControl />
      <CustomerStories />
      <SecuritySection />
      <CustomHeading  {...extSectionData} />
    </>
  );
}
export default HomePage