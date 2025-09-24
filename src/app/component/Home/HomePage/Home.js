import { forDeveloperFutureProofData } from "@/app/data/FutureProof/FutureProofData";
import FutureProofLogos from "../../Same/FutureProofLogos/FutureProofLogos";
import AccordionSlider from "../AccordionSlider/AccordionSlider";
import CustomerStories from "../CustomerStories/CustomerStories";
import DiscoverNext from "../DiscoverNext/DiscoverNext";
import HeroSection from "../HeroSection/HeroSection";
import CardInfo from "../Infocard/Cardsinfo";
import MissionControl from "../MissionControl/MissionControl";
import SecuritySection from "../SecurityCards/SecurityCards";
import CustomHeading from "../../Same/CustomHeading/CustomHeading";
import { extSectionData } from "@/app/data/CustomHeading/CustomHeadingData";
import LogoMarquee from "../../Same/LogoMarquee/logoMarquee";
import { homeLogos } from "@/app/data/Home/HomeLogosdata";

function HomePage() {
  return (
    <>
      <HeroSection />
      <LogoMarquee logos={homeLogos}/>
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