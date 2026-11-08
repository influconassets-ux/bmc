import React from 'react';
import AboutHero from "../components/AboutHero";
import AboutLegacy from "../components/AboutLegacy";
import Patents from "../components/Patents";
import AboutVision from "../components/AboutVision";
import AboutSparks from "../components/AboutSparks";
import AboutLeadership from "../components/AboutLeadership";
import AboutPartners from "../components/AboutPartners";
import Timeline from "../components/Timeline";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutLegacy />
      <AboutVision />
      <AboutSparks />
      <AboutLeadership />
      <Patents />
      <AboutPartners />
      <Timeline />
    </>
  );
}
