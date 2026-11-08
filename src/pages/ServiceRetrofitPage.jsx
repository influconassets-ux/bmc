import React from 'react';
import ServicesHero from "../components/ServicesHero";
import ServiceRetrofitContent from "../components/ServiceRetrofitContent";
import TrustedBy from "../components/TrustedBy";

export default function ServiceRetrofitPage() {
  return (
    <>
      <ServicesHero subTitle="Retrofit & Refurbishment" />
      <ServiceRetrofitContent />
      <TrustedBy />
    </>
  );
}
