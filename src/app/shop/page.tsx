import React from "react";
import CategorySection from "../components/CategorySection";
import ShopHeader from "../components/ShopHeader";

import ClientLogosSection from "../components/ClientLogoSection";
import Clients from "../components/Clients";

import Navbarmain from "../components/Navbarmain";
import GreenHeader from "../components/GreenHeader";
import Footer from "../components/Footer";

const Shop = () => {
  return (
    <div>
      <GreenHeader />
      <Navbarmain />
      <ShopHeader />
      <CategorySection />

      <ClientLogosSection />
      <div className="hidden sm:block">
        <Footer />
      </div>
      <Clients />
      <div className=" sm:hidden">
        <Footer />
      </div>
    </div>
  );
};

export default Shop;
