import React from 'react';
import ServicesHero from "../components/ServicesHero";
import Services from "../components/Services";
import Timeline from "../components/Timeline";
import TrustedBy from "../components/TrustedBy";

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <Services />
      <Timeline />
      <TrustedBy />
    </>
  );
}
