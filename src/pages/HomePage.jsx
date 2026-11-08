import React from 'react';
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import AboutUs from "../components/AboutUs";
import FounderMessage from "../components/FounderMessage";
import Expertise from "../components/Expertise";
import Services from "../components/Services";
import Consultancy from "../components/Consultancy";
import Products from "../components/Products";
import Facilities from "../components/Facilities";
import Sectors from "../components/Sectors";
import Patents from "../components/Patents";
import Timeline from "../components/Timeline";

export default function HomePage({ isLoading }) {
  return (
    <>
      <Hero isLoading={isLoading} />
      <Stats isLoading={isLoading} />
      <AboutUs />
      <FounderMessage />
      <Expertise />
      <Services />
      <Consultancy />
      <Products />
      <Facilities />
      <Sectors />
      <Patents />
      <Timeline />
    </>
  );
}
