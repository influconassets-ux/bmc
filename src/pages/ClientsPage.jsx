import React, { useEffect } from 'react';
import AboutPartners from "../components/AboutPartners";
import Timeline from "../components/Timeline";

export default function ClientsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ paddingTop: "80px", minHeight: "100vh" }}>
      <AboutPartners />
      <Timeline />
    </div>
  );
}
