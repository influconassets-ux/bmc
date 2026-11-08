import React from 'react';
import MfgHero from "../components/MfgHero";
import MfgLocations from "../components/MfgLocations";
import MfgInside from "../components/MfgInside";
import TrustedBy from "../components/TrustedBy";

export default function ManufacturingFacilitiesPage() {
  return (
    <>
      <MfgHero />
      <MfgLocations />
      <MfgInside />
      <TrustedBy />
    </>
  );
}
