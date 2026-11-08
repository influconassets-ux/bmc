import React from "react";
import ConsultancyHero from "../components/ConsultancyHero";
import ConsultancyPageIntro from "../components/ConsultancyPageIntro";
import ConsultancyWhatWeDo from "../components/ConsultancyWhatWeDo";
import TrustedBy from "../components/TrustedBy";

export default function ConsultancyPage() {
  const defaultLogos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15].map(
    (num) => ({ src: `/images/client-${num}.png`, alt: `Client ${num}` })
  );

  const consultancyLogos = [
    ...defaultLogos,
    { src: "/images/logo-indian-airforce.png", alt: "Indian Air Force", title: "Indian Air Force" },
    { src: "/images/logo-dmw-patiala.png", alt: "Diesel Loco Modernisation Works, Patiala", title: "Diesel Loco Modernisation Works, Patiala" },
    { src: "/images/logo-mizoram-power.png", alt: "Power & Electricity Department", title: "Power & Electricity Department" }
  ];

  return (
    <>
      <ConsultancyHero />
      <ConsultancyPageIntro />
      <ConsultancyWhatWeDo />
      <TrustedBy customLogos={consultancyLogos} />
    </>
  );
}
