import React from 'react';
import ServicesHero from "../components/ServicesHero";
import ServiceAmcContent from "../components/ServiceAmcContent";
import TrustedBy from "../components/TrustedBy";

export default function ServiceAmcPage() {
  return (
    <>
      <ServicesHero subTitle="Critical Services and AMC" />
      <ServiceAmcContent />
      <TrustedBy />
    </>
  );
}
