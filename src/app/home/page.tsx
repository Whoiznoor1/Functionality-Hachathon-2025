import React from "react";
import BlueHeader from "../components/BlueHeader";
import Navbarmain from "../components/Navbarmain";
import Carousel from "../components/Carousel";
import EditorsPick from "../components/EditorsPick";
import ProductCardhome from "../components/ProductCardhome";
import GreenDiv from "../components/GreenDiv";
import Whitediv from "../components/WhiteDiv";
import LastDiv from "../components/LastDiv";
import Footer from "../components/Footer";

const House = () => {
  return (
    <div>
      <BlueHeader />
      <Navbarmain />

      <Carousel />
      <EditorsPick />
      <ProductCardhome />
      <GreenDiv />
      <Whitediv />
      <LastDiv />

      <Footer />
    </div>
  );
};

export default House;
