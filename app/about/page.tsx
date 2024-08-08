import React from "react";
import { Achievements } from "../Components/Flow5/Achievements/Achievements";
import { Awards } from "../Components/Flow5/Awards/Awards";
import { ProductsCta } from "../Components/Flow5/ProductsCta/ProductsCta";
import PageFirst from "../Components/Flow5/FirstTwo/page"
const AboutPage = () => {
  return (
    <div>
      <PageFirst />
      <Achievements />
      <Awards />
      <ProductsCta />
    </div>
  );
};

export default AboutPage