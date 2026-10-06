import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import WhatWeDoSection from "./WhatWeDoSection";
import CampsSection from "./CampsSection";
import AdvantagesSection from "./AdvantagesSection";
import TrainersSection from "./TrainersSection";
import FAQSection from "./FAQSection";
import RegistrationSection from "./RegistrationSection";
import Footer from "./Footer";

/** Celá stránka webu – používá ji veřejný web i admin. */
export default function SitePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <WhatWeDoSection />
        <CampsSection />
        <AdvantagesSection />
        <TrainersSection />
        <FAQSection />
        <RegistrationSection />
      </main>
      <Footer />
    </>
  );
}
