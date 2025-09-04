import DiscoverNext from "./component/DiscoverNext";
import HeroSection from "./component/HeroSection";
import LogoMarque from "./component/LogoMarque"
// import ScrollIndicator from "./component/ScrollIndicator";

export default function Home() {
  return (
    <>
      <HeroSection />
      <LogoMarque />
      <DiscoverNext />
      {/* <ScrollIndicator /> */}
    </>
  );
}
