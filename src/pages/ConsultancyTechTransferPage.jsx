import React from 'react';
import ConsultancyHero from "../components/ConsultancyHero";
import ConsultancyTechTransferContent from "../components/ConsultancyTechTransferContent";
import TrustedBy from "../components/TrustedBy";

export default function ConsultancyTechTransferPage() {
  return (
    <>
      <ConsultancyHero subTitle="Technology Transfer" />
      <ConsultancyTechTransferContent />
      <TrustedBy />
    </>
  );
}
