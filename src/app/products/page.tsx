import React from "react";

import Footer from "../components/Footer";
import GreenHeader from "../components/GreenHeader";
import Navbarmain from "../components/Navbarmain";
import ClientLogoSection from "../components/ClientLogoSection";
import ContentSection from "../components/ContentSection";
import BestSeller from "../components/BestSeller";

const Products = () => {
  return (
    <div>
      <GreenHeader />
      <Navbarmain />
      <BestSeller />
      <ContentSection />
      <ClientLogoSection />
      <Footer />
    </div>
  );
};

export default Products;
