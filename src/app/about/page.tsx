import AboutSection from "../components/AboutSection";
import CompaniesSection from "../components/CompaniesSection";
import Footer from "../components/Footer";
import GrowSection from "../components/GrowSection";
import Navbarbtn from "../components/Navbarbtn";

import StatisticsSection from "../components/StatisticsSection";
import TeamSection from "../components/TeamSection";

export default function AboutUs() {
  return (
    <div>
     <Navbarbtn/>
    <AboutSection/>
      <StatisticsSection />
      <TeamSection />
      <CompaniesSection />
      <GrowSection />
      <Footer/>
    </div>
  );
}





















