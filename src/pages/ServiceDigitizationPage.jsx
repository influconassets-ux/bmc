import React from 'react';
import ServicesHero from "../components/ServicesHero";
import ServiceDigitizationContent from "../components/ServiceDigitizationContent";
import TrustedBy from "../components/TrustedBy";

export default function ServiceDigitizationPage() {
  return (
    <>
      <ServicesHero subTitle="Digitisation & Smart MRO In Power Systems" />
      <ServiceDigitizationContent />
      <TrustedBy />
    </>
  );
}
