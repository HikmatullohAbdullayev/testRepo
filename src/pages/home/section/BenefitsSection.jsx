import React from "react";
import BenefitCard from "./components/BenefitCard";
import SectionTop from "./components/SectionTop";

function BenefitsSection(props) {
  return (
    <section className="container mx-auto mt-100">
      <SectionTop
        title={"Benefits"}
        
      />

      <BenefitCard />
    </section>
  );
}

export default BenefitsSection;
