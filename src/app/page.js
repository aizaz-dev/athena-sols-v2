import AccordionSlider from "./component/AccordionSlider/AccordionSlider";
import CTASection from "./component/CTASection/CTASection";
import CustomerStories from "./component/CustomerStories/CustomerStories";
import DiscoverNext from "./component/DiscoverNext";
import FutureProof from "./component/FutureProof/FutureProof";
import HeroSection from "./component/HeroSection";
import CardInfo from "./component/Infocard/Cardsinfo";
import LogoMarque from "./component/LogoMarque";
import MissionControl from "./component/MissionControl/MissionControl";
import SecuritySection from "./component/SecurityCards/SecurityCards";

export default function Home() {
  return (
    <>
      <HeroSection />
      <LogoMarque />
      <CardInfo />
      <DiscoverNext />
      <AccordionSlider />
      <FutureProof />
      <MissionControl />
      <CustomerStories />
      <SecuritySection />
      <CTASection />
    </>
  );
}
