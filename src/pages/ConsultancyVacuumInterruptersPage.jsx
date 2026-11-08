import React from 'react';
import ConsultancyHero from "../components/ConsultancyHero";
import ConsultancyVacuumInterruptersContent from "../components/ConsultancyVacuumInterruptersContent";
import TrustedBy from "../components/TrustedBy";

export default function ConsultancyVacuumInterruptersPage() {
  return (
    <>
      <ConsultancyHero subTitle="Vacuum Interrupters" />
      <ConsultancyVacuumInterruptersContent />
      <TrustedBy />
    </>
  );
}
