import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import WhatWeDoSection from "./components/WhatWeDoSection";
import CampsSection from "./components/CampsSection";
import AdvantagesSection from "./components/AdvantagesSection";
import RegistrationSection from "./components/RegistrationSection";
import TrainersSection from "./components/TrainersSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <WhatWeDoSection />
        <CampsSection />
        <AdvantagesSection />
        <RegistrationSection />
        <TrainersSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
