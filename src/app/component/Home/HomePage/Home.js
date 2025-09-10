import AccordionSlider from "../AccordionSlider/AccordionSlider";
import CTASection from "../CTASection/CTASection";
import CustomerStories from "../CustomerStories/CustomerStories";
import DiscoverNext from "../DiscoverNext/DiscoverNext";
import FutureProof from "../FutureProof/FutureProof";
import HeroSection from "../HeroSection/HeroSection";
import CardInfo from "../FutureProof/Infocard/Cardsinfo";
import LogoMarquee from "../LogoMarquee/LogoMarque";
import MissionControl from "../FutureProof/MissionControl/MissionControl";
import SecuritySection from "../FutureProof/SecurityCards/SecurityCards";

function HomePage() {
  return (
    <>
      <HeroSection />
      <LogoMarquee />
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
export default HomePage