import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { s } from "../styles";
import ProductsHero from "../components/ProductsHero";

// Helper for highlighted brand tags
const HighlightTag = ({ children }) => (
  <span style={{
    background: "#c4ea48",
    color: "#102f83",
    padding: "2px 6px",
    borderRadius: "4px",
    fontWeight: 700,
    fontSize: "0.9em",
    display: "inline-block",
    boxShadow: "0 2px 4px rgba(196, 234, 72, 0.3)"
  }}>
    {children}
  </span>
);

const DownloadCatalogButton = ({ pdf = "/pdf/Products%20PDF.pdf", fileName = "Products PDF.pdf" }) => (
  <div style={{ display: "flex", justifyContent: "center", marginTop: "40px", width: "100%" }}>
    <a
      href={pdf}
      download={fileName}
      style={{
        background: "#caee5a",
        color: "#111",
        padding: "16px 20px",
        borderRadius: "4px",
        textDecoration: "none",
        fontWeight: 700,
        fontSize: "clamp(12px, 3.5vw, 16px)",
        letterSpacing: "0.5px",
        textTransform: "uppercase",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        whiteSpace: "nowrap",
        boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 5px 15px rgba(0,0,0,0.1)";
      }}
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
        <polyline points="7 10 12 15 17 10"></polyline>
        <line x1="12" y1="15" x2="12" y2="3"></line>
      </svg>
      Download Full Product Catalog
    </a>
  </div>
);

// This is the specific layout for the first product
const AdvancedPartnerLayout = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "30px", alignItems: "stretch" }}>
      {/* Left Column */}
      <div style={{ flex: "1 1 300px", display: "flex", flexDirection: "column" }}>
        <h3 style={{ fontSize: '28px', color: '#0a2c85', fontFamily: '\'Jost\', sans-serif', fontWeight: 600, lineHeight: 1.3, marginBottom: '15px' }}>
          Manufacturer of <HighlightTag>MV Switchgear</HighlightTag> panels as core component advanced partner panel builder with <HighlightTag>SCHNEIDER ELECTRIC</HighlightTag> VCB up to <HighlightTag>36 kV</HighlightTag> system voltage.
        </h3>
        <div style={{ background: "transparent", borderRadius: "16px", padding: "15px", flexGrow: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "200px", border: "none", boxShadow: "none" }}>
          <img src="/images/prod-36kv-switchgear.png" alt="36 kV Switchgear Panel" style={{ width: "100%", maxHeight: "350px", objectFit: "contain" }} onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder.jpg' }} />
        </div>
        <p style={{ color: '#222', textAlign: 'center', marginTop: '12px', fontWeight: 600, fontSize: '14px', lineHeight: 1.3, letterSpacing: '0.5px', textTransform: 'uppercase' }}>
          36 kV SWITCHGEAR PANEL
        </p>
      </div>

      {/* Right Column */}
      <div style={{ flex: "1 1 400px", display: "flex", flexDirection: "column" }}>
        <h3 style={{ fontSize: '28px', color: '#0a2c85', fontFamily: '\'Jost\', sans-serif', fontWeight: 600, lineHeight: 1.3, marginBottom: '15px' }}>
          Advanced Panel Builder and Global OEM Supplier to <HighlightTag>SCHNEIDER ELECTRIC</HighlightTag> for CTs and PTs
        </h3>

        <div style={{ display: "flex", gap: "15px", flexGrow: 1, flexWrap: "wrap" }}>
          {/* Main 12kV Panel Image */}
          <div style={{ flex: "1 1 200px", display: "flex", flexDirection: "column" }}>
            <div style={{ background: "transparent", borderRadius: "16px", padding: "15px", flexGrow: 1, display: "flex", alignItems: "center", justifyContent: "center", minHeight: "200px", border: "none", boxShadow: "none" }}>
              <img src="/images/prod-12kv-switchgear.png" alt="12kV Switchgear Panel" style={{ width: "100%", maxHeight: "350px", objectFit: "contain" }} onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder.jpg' }} />
            </div>
            <p style={{ color: '#222', textAlign: 'center', marginTop: '12px', fontWeight: 600, fontSize: '14px', lineHeight: 1.3, letterSpacing: '0.5px', textTransform: 'uppercase' }}>
              12 kV SWITCHGEAR PANEL
            </p>
          </div>

          {/* Side VCB Images */}
          <div style={{ flex: "1 1 150px", display: "flex", flexDirection: "column", gap: "15px" }}>
            <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
              <div style={{ background: "transparent", borderRadius: "12px", padding: "10px", flexGrow: 1, display: "flex", alignItems: "center", justifyContent: "center", border: "none", boxShadow: "none" }}>
                <img src="/images/prod-12kv-vcb.png" alt="12kV Schneider Electric VCB" style={{ width: "100%", maxHeight: "240px", objectFit: "contain" }} onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder.jpg' }} />
              </div>
              <p style={{ color: '#222', textAlign: 'center', marginTop: '12px', fontWeight: 600, fontSize: '14px', lineHeight: 1.3, letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                12kV SCHNEIDER<br />ELECTRIC VCB
              </p>
            </div>
            <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
              <div style={{ background: "transparent", borderRadius: "12px", padding: "10px", flexGrow: 1, display: "flex", alignItems: "center", justifyContent: "center", border: "none", boxShadow: "none" }}>
                <img src="/images/prod-36kv-vcb.png" alt="36 kV Schneider Electric VCB" style={{ width: "100%", maxHeight: "240px", objectFit: "contain" }} onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder.jpg' }} />
              </div>
              <p style={{ color: '#222', textAlign: 'center', marginTop: '12px', fontWeight: 600, fontSize: '14px', lineHeight: 1.3, letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                36 kV SCHNEIDER<br />ELECTRIC VCB
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Layout for Current Transformers (CT) & Potential Transformers (PT) (index 1)
const TransformersLayout = () => {
  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "30px", alignItems: "stretch" }}>
        {/* Left Column */}
        <div style={{ flex: "1 1 350px", display: "flex", flexDirection: "column" }}>
          {/* Main Image */}
          <div style={{ background: "transparent", borderRadius: "16px", padding: "5px", display: "flex", alignItems: "center", justifyContent: "center", border: "none", boxShadow: "none", minHeight: "350px" }}>
            <img src="/images/prod-ct-group.png" alt="Single Phase Resin Cast CT up to 36 kV" style={{ width: "100%", maxHeight: "350px", objectFit: "contain" }} onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder.jpg' }} />
          </div>
          <p style={{ color: '#222', textAlign: 'center', marginTop: '12px', fontWeight: 600, fontSize: '14px', lineHeight: 1.3, letterSpacing: '0.5px', textTransform: 'uppercase' }}>
            SINGLE PHASE RESIN CAST CT Up to 36 kV
          </p>

          {/* Bullet Points */}
          <ul style={{ color: '#333', fontSize: '16px', fontWeight: 400, lineHeight: 1.6, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <li>First in India to Develop Import Substitute Of Loco Engine Mounted 25kV Primary current Transformer</li>
            <li>Yearly Production Capacity of 25000+ CT and PT With Over 30 Years of Designing and Manufacturing Experience</li>
            <li>Customised and Exclusive Retrofit Solutions For Any Make of CT And PT Including Imported And Obsolete Models.</li>
          </ul>
        </div>

        {/* Right Column */}
        <div style={{ flex: "1 1 450px", display: "flex", flexDirection: "column" }}>
          <h3 style={{ fontSize: '28px', color: '#0a2c85', fontFamily: '\'Jost\', sans-serif', fontWeight: 600, lineHeight: 1.3, marginBottom: '15px' }}>
            OEM and Retrofit solutions for <HighlightTag>MV Instrument</HighlightTag> Transformers up to <HighlightTag>36 kV</HighlightTag>.
          </h3>

          {/* 2x3 Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "15px", flexGrow: 1 }}>
            {/* Item 1 */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ background: "transparent", borderRadius: "12px", padding: "10px", flexGrow: 1, display: "flex", alignItems: "center", justifyContent: "center", border: "none", boxShadow: "none" }}>
                <img src="/images/prod-pt-3phase-12kv.png" alt="Three Phase Resincast PT" style={{ width: "100%", maxHeight: "140px", objectFit: "contain" }} onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder.jpg' }} />
              </div>
              <p style={{ color: '#222', textAlign: 'center', marginTop: '12px', fontWeight: 600, fontSize: '14px', lineHeight: 1.3, letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                Three Phase<br />Resincast PT Up To<br />12 kV
              </p>
            </div>

            {/* Item 2 */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ background: "transparent", borderRadius: "12px", padding: "10px", flexGrow: 1, display: "flex", alignItems: "center", justifyContent: "center", border: "none", boxShadow: "none" }}>
                <img src="/images/prod-pt-1phase-12kv.png" alt="Single Phase Resin Cast PT 12kV" style={{ width: "100%", maxHeight: "140px", objectFit: "contain" }} onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder.jpg' }} />
              </div>
              <p style={{ color: '#222', textAlign: 'center', marginTop: '12px', fontWeight: 600, fontSize: '14px', lineHeight: 1.3, letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                Single Phase Resin<br />Cast PT Up To 12kV
              </p>
            </div>

            {/* Item 3 */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ background: "transparent", borderRadius: "12px", padding: "10px", flexGrow: 1, display: "flex", alignItems: "center", justifyContent: "center", border: "none", boxShadow: "none" }}>
                <img src="/images/prod-ct-loco-25kv.png" alt="Loco Engine Mounted 25kV Primary CT" style={{ width: "100%", maxHeight: "140px", objectFit: "contain" }} onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder.jpg' }} />
              </div>
              <p style={{ color: '#222', textAlign: 'center', marginTop: '12px', fontWeight: 600, fontSize: '14px', lineHeight: 1.3, letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                Loco Engine<br />Mounted 25kV<br />Primary Current<br />Transformer
              </p>
            </div>

            {/* Item 4 */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ background: "transparent", borderRadius: "12px", padding: "10px", flexGrow: 1, display: "flex", alignItems: "center", justifyContent: "center", border: "none", boxShadow: "none" }}>
                <img src="/images/prod-ct-outdoor-36kv.png" alt="36 kV Outdoor CT" style={{ width: "100%", maxHeight: "140px", objectFit: "contain" }} onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder.jpg' }} />
              </div>
              <p style={{ color: '#222', textAlign: 'center', marginTop: '12px', fontWeight: 600, fontSize: '14px', lineHeight: 1.3, letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                36 kV Outdoor CT
              </p>
            </div>

            {/* Item 5 */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ background: "transparent", borderRadius: "12px", padding: "10px", flexGrow: 1, display: "flex", alignItems: "center", justifyContent: "center", border: "none", boxShadow: "none" }}>
                <img src="/images/prod-ct-outdoor-12kv.png" alt="12kV Outdoor CT" style={{ width: "100%", maxHeight: "140px", objectFit: "contain" }} onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder.jpg' }} />
              </div>
              <p style={{ color: '#222', textAlign: 'center', marginTop: '12px', fontWeight: 600, fontSize: '14px', lineHeight: 1.3, letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                12 kV Outdoor CT
              </p>
            </div>

            {/* Item 6 */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ background: "transparent", borderRadius: "12px", padding: "10px", flexGrow: 1, display: "flex", alignItems: "center", justifyContent: "center", border: "none", boxShadow: "none" }}>
                <img src="/images/prod-pt-1phase-36kv.png" alt="Single Phase Resin Cast PT 36 kV" style={{ width: "100%", maxHeight: "140px", objectFit: "contain" }} onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder.jpg' }} />
              </div>
              <p style={{ color: '#222', textAlign: 'center', marginTop: '12px', fontWeight: 600, fontSize: '14px', lineHeight: 1.3, letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                Single Phase Resin<br />Cast PT Up to 36 kV
              </p>
            </div>
          </div>
        </div>
      </div>
      <DownloadCatalogButton pdf="/pdf/BMC CT-PT EPOXY BROCHURE.pdf" fileName="BMC CT-PT EPOXY BROCHURE.pdf" />
    </>
  );
};

// Layout for Vacuum Circuit Breakers (VCB) (index 2)
const VacuumBreakersLayout = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "30px", alignItems: "stretch" }}>
      {/* Left Column */}
      <div style={{ flex: "1 1 250px", display: "flex", flexDirection: "column" }}>
        <h3 style={{ fontSize: '28px', color: '#0a2c85', fontFamily: '\'Jost\', sans-serif', fontWeight: 600, lineHeight: 1.3, marginBottom: '15px' }}>
          <HighlightTag>Indoor Vacuum</HighlightTag> circuit breakers and sub-assembly up to <HighlightTag>36 kV</HighlightTag>.
        </h3>
        <div style={{ background: "transparent", borderRadius: "16px", padding: "15px", flexGrow: 1, display: "flex", alignItems: "center", justifyContent: "center", minHeight: "200px", border: "none", boxShadow: "none" }}>
          <img src="/images/prod-vcb-main.png" alt="Indoor Vacuum circuit breakers" style={{ width: "100%", maxHeight: "350px", objectFit: "contain" }} onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder.jpg' }} />
        </div>
      </div>

      {/* Middle Column */}
      <div style={{ flex: "1 1 300px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <ul style={{ color: '#333', fontSize: '16px', fontWeight: 400, lineHeight: 1.6, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <li>Technology Transfer And Complete Type Testing Consultancy For MV switchgear.</li>
          <li>First in India to offer technology for VCB/VI design to Indian manufacturers.</li>
          <li>First in Asia to offer technology for VCB/VI design to European and Overseas manufacturers.</li>
          <li>Over 25 patents/ design registrations on switchgear/ Switchgear components.</li>
          <li>First MSME in India to develop economic, indigenous, and reliable medium-voltage Vacuum Circuit Breakers for Industry, bringing down costs by 30 percent.</li>
        </ul>
      </div>

      {/* Right Column */}
      <div style={{ flex: "1 1 250px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px" }}>
          {/* Item 1 */}
          <div style={{ background: "transparent", borderRadius: "12px", padding: "10px", display: "flex", alignItems: "center", justifyContent: "center", border: "none", boxShadow: "none", minHeight: "140px" }}>
            <img src="/images/prod-vcb-sub1.png" alt="VCB Sub-assembly 1" style={{ width: "100%", maxHeight: "260px", objectFit: "contain" }} onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder.jpg' }} />
          </div>

          {/* Item 2 */}
          <div style={{ background: "transparent", borderRadius: "12px", padding: "10px", display: "flex", alignItems: "center", justifyContent: "center", border: "none", boxShadow: "none", minHeight: "140px" }}>
            <img src="/images/prod-vcb-sub2.png" alt="VCB Sub-assembly 2" style={{ width: "100%", maxHeight: "260px", objectFit: "contain" }} onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder.jpg' }} />
          </div>

          {/* Item 3 */}
          <div style={{ background: "transparent", borderRadius: "12px", padding: "10px", display: "flex", alignItems: "center", justifyContent: "center", border: "none", boxShadow: "none", minHeight: "140px" }}>
            <img src="/images/prod-vcb-sub3.png" alt="VCB Sub-assembly 3" style={{ width: "100%", maxHeight: "260px", objectFit: "contain" }} onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder.jpg' }} />
          </div>

          {/* Item 4 */}
          <div style={{ background: "transparent", borderRadius: "12px", padding: "10px", display: "flex", alignItems: "center", justifyContent: "center", border: "none", boxShadow: "none", minHeight: "140px" }}>
            <img src="/images/prod-vcb-sub4.png" alt="VCB Sub-assembly 4" style={{ width: "100%", maxHeight: "260px", objectFit: "contain" }} onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder.jpg' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

// Layout for Vacuum Circuit Breakers (VCB) for Outdoor (index 3)
const OutdoorVacuumBreakersLayout = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "25px", alignItems: "center" }}>
      <h3 style={{ fontSize: '28px', color: '#0a2c85', fontFamily: '\'Jost\', sans-serif', fontWeight: 600, lineHeight: 1.3, marginBottom: '15px' }}>
        <HighlightTag>Vacuum Circuit Breakers</HighlightTag> for outdoor applications
      </h3>

      <div style={{ display: "flex", gap: "30px", flexWrap: "wrap", justifyContent: "center", width: "100%" }}>
        {/* Card 1 */}
        <div style={{ flex: "1 1 250px", display: "flex", flexDirection: "column" }}>
          <div style={{ background: "transparent", borderRadius: "16px", padding: "20px", flexGrow: 1, display: "flex", alignItems: "flex-end", justifyContent: "center", border: "none", boxShadow: "none", minHeight: "250px" }}>
            <img src="/images/prod-vcb-outdoor1.png" alt="36 kV Compact Sub-Station" style={{ width: "100%", maxHeight: "350px", objectFit: "contain" }} onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder.jpg' }} />
          </div>
          <div style={{ height: "100px", display: "flex", alignItems: "flex-start", justifyContent: "center", marginTop: "15px" }}>
            <p style={{ color: '#222', textAlign: 'center', marginTop: '12px', fontWeight: 600, fontSize: '14px', lineHeight: 1.3, letterSpacing: '0.5px', textTransform: 'uppercase' }}>
              36 kV COMPACT SUB-STATION
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div style={{ flex: "1 1 250px", display: "flex", flexDirection: "column" }}>
          <div style={{ background: "transparent", borderRadius: "16px", padding: "20px", flexGrow: 1, display: "flex", alignItems: "flex-end", justifyContent: "center", border: "none", boxShadow: "none", minHeight: "250px" }}>
            <img src="/images/prod-vcb-outdoor2.png" alt="Porcelain Clad Outdoor VCB" style={{ width: "100%", maxHeight: "350px", objectFit: "contain" }} onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder.jpg' }} />
          </div>
          <div style={{ height: "100px", display: "flex", alignItems: "flex-start", justifyContent: "center", marginTop: "15px" }}>
            <p style={{ color: '#222', textAlign: 'center', marginTop: '12px', fontWeight: 600, fontSize: '14px', lineHeight: 1.3, letterSpacing: '0.5px', textTransform: 'uppercase' }}>
              PORCELEIN CLAD OUTDOOR VCB UP<br />TO 36 kV
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div style={{ flex: "1 1 250px", display: "flex", flexDirection: "column" }}>
          <div style={{ background: "transparent", borderRadius: "16px", padding: "20px", flexGrow: 1, display: "flex", alignItems: "flex-end", justifyContent: "center", border: "none", boxShadow: "none", minHeight: "250px" }}>
            <img src="/images/prod-vcb-outdoor3.png" alt="Porcelain Clad Outdoor VCB Internal" style={{ width: "100%", maxHeight: "350px", objectFit: "contain" }} onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder.jpg' }} />
          </div>
          <div style={{ height: "100px", display: "flex", alignItems: "flex-start", justifyContent: "center", marginTop: "15px" }}>
            <p style={{ color: '#222', textAlign: 'center', marginTop: '12px', fontWeight: 600, fontSize: '14px', lineHeight: 1.3, letterSpacing: '0.5px', textTransform: 'uppercase' }}>
              PORCELEIN CLAD OUTDOOR VCB UP<br />TO 36 kV
            </p>
          </div>
        </div>
      </div>

      <p style={{ textAlign: "center", color: "#102f83", fontSize: "19px", fontWeight: 600, marginTop: "20px", marginBottom: 0 }}>
        <HighlightTag>Unique low cost</HighlightTag> Compact Sub Station design for <HighlightTag>Renewable Energy</HighlightTag> in India
      </p>
    </div>
  );
};

// Layout for Vacuum Contactors (index 4)
const VacuumContactorsLayout = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "25px", alignItems: "stretch" }}>
      <h3 style={{ fontSize: '28px', color: '#0a2c85', fontFamily: '\'Jost\', sans-serif', fontWeight: 600, lineHeight: 1.3, marginBottom: '15px' }}>
        <HighlightTag>Vacuum contactors, embedded VI poles</HighlightTag> and subassemblies for <HighlightTag>Medium-Voltage</HighlightTag> switching up to <HighlightTag>36 kV</HighlightTag>
      </h3>

      {/* 4 Image Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "20px" }}>
        {/* Card 1 */}
        <div style={{ background: "transparent", borderRadius: "16px", padding: "15px", display: "flex", alignItems: "center", justifyContent: "center", border: "none", boxShadow: "none", minHeight: "220px" }}>
          <img src="/images/prod-vc-1.png" alt="Epoxy Components" style={{ width: "100%", maxHeight: "260px", objectFit: "contain" }} onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder.jpg' }} />
        </div>

        {/* Card 2 */}
        <div style={{ background: "transparent", borderRadius: "16px", padding: "15px", display: "flex", alignItems: "center", justifyContent: "center", border: "none", boxShadow: "none", minHeight: "220px" }}>
          <img src="/images/prod-vc-2.png" alt="Vacuum Interrupter Assembly" style={{ width: "100%", maxHeight: "260px", objectFit: "contain" }} onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder.jpg' }} />
        </div>

        {/* Card 3 */}
        <div style={{ background: "transparent", borderRadius: "16px", padding: "15px", display: "flex", alignItems: "center", justifyContent: "center", border: "none", boxShadow: "none", minHeight: "220px" }}>
          <img src="/images/prod-vc-3.png" alt="Panel Interior with Poles" style={{ width: "100%", maxHeight: "260px", objectFit: "contain" }} onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder.jpg' }} />
        </div>

        {/* Card 4 */}
        <div style={{ background: "transparent", borderRadius: "16px", padding: "15px", display: "flex", alignItems: "center", justifyContent: "center", border: "none", boxShadow: "none", minHeight: "220px" }}>
          <img src="/images/prod-vc-4.png" alt="Vacuum Contactor Unit" style={{ width: "100%", maxHeight: "260px", objectFit: "contain", mixBlendMode: "multiply", filter: "brightness(1.1) contrast(1.1)", transform: "scale(1.25)" }} onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder.jpg' }} />
        </div>
      </div>

      {/* Bullet Points */}
      <ul style={{ color: '#333', fontSize: '16px', fontWeight: 400, lineHeight: 1.6, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <li>Pioneers in Epoxy Cast Vacuum Interrupters (Embedded Poles) for Vacuum contactors world wide.</li>
        <li>Unique compact design of MV Vacuum Contactors.</li>
        <li>First MSME in India to develop economic, indigenous, and reliable medium-voltage Vacuum Contactors for Industry, bringing down costs by 30 percent.</li>
      </ul>
    </div>
  );
};

// Layout for Medium Voltage Epoxy Components (index 5)
const EpoxyComponentsLayout = () => {
  return (
    <>
      <style>
        {`
          .epoxyGrid {
            display: grid;
            grid-template-columns: repeat(6, 1fr);
            gap: 20px;
            margin-top: 50px;
          }
          @media (max-width: 1200px) {
            .epoxyGrid {
              grid-template-columns: repeat(3, 1fr);
            }
          }
          @media (max-width: 768px) {
            .epoxyGrid {
              grid-template-columns: repeat(2, 1fr);
            }
            .epoxyGrid img {
              max-height: 180px !important;
            }
          }
        `}
      </style>
      
      {/* Top Section: Text & Main Image */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "40px", alignItems: "stretch" }}>
        {/* Left Column (Text) */}
        <div style={{ flex: "1 1 350px", display: "flex", flexDirection: "column", gap: "25px", justifyContent: "center" }}>
          <h3 style={{ fontSize: '32px', color: '#0a2c85', fontFamily: '\'Jost\', sans-serif', fontWeight: 600, lineHeight: 1.3, marginBottom: '5px' }}>
            <HighlightTag>OEM</HighlightTag> and <HighlightTag>Retrofit solutions</HighlightTag> for MV Instrument Transformers up to <HighlightTag>36 kV</HighlightTag>.
          </h3>

          <div style={{ background: "#f9fbfd", borderRadius: "12px", padding: "20px", borderLeft: "4px solid #c4ea48" }}>
            <p style={{ color: '#333', fontSize: '16px', fontWeight: 500, lineHeight: 1.6, margin: '0 0 10px 0' }}>
              Spouts, Embedded Poles, Housings, Drive and Support Insulators
            </p>
            <p style={{ color: '#333', fontSize: '16px', fontWeight: 400, lineHeight: 1.6, margin: 0 }}>
              <HighlightTag>Tailor-Made</HighlightTag> and Exclusive Retrofit Solutions for any make of Epoxy Components including imported and obsolete models.
            </p>
          </div>
        </div>

        {/* Right Column (Main Image) */}
        <div style={{ flex: "1 1 450px", display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ background: "transparent", borderRadius: "16px", padding: "20px", display: "flex", alignItems: "center", justifyContent: "center", border: "none", boxShadow: "none", minHeight: "220px" }}>
              <img src="/images/prod-epoxy-main.png" alt="Retrofit Epoxy Solution" style={{ width: "100%", maxHeight: "320px", objectFit: "contain" }} onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder.jpg' }} />
            </div>
            <p style={{ color: '#222', textAlign: 'center', marginTop: '15px', fontWeight: 700, fontSize: '16px', lineHeight: 1.3, letterSpacing: '0.5px', textTransform: 'uppercase' }}>
              Retrofit Epoxy Solution for 12kV Vertical Breakers
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section: Unified 6-Grid */}
      <div className="epoxyGrid">
        {/* Card 1 */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ background: "transparent", borderRadius: "12px", padding: "10px", flexGrow: 1, display: "flex", alignItems: "center", justifyContent: "center", border: "none", boxShadow: "none", minHeight: "120px" }}>
            <img src="/images/prod-epoxy-1.png" alt="Embedded Poles" style={{ width: "100%", maxHeight: "160px", objectFit: "contain" }} onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder.jpg' }} />
          </div>
          <p style={{ color: '#222', textAlign: 'center', marginTop: '12px', fontWeight: 600, fontSize: '13px', lineHeight: 1.3, letterSpacing: '0.3px', textTransform: 'uppercase' }}>
            Embedded Vacuum Interrupter Poles up to 36 kV
          </p>
        </div>
        {/* Card 2 */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ background: "transparent", borderRadius: "12px", padding: "10px", flexGrow: 1, display: "flex", alignItems: "center", justifyContent: "center", border: "none", boxShadow: "none", minHeight: "120px" }}>
            <img src="/images/prod-epoxy-2.png" alt="Drive Insulators" style={{ width: "100%", maxHeight: "160px", objectFit: "contain" }} onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder.jpg' }} />
          </div>
          <p style={{ color: '#222', textAlign: 'center', marginTop: '12px', fontWeight: 600, fontSize: '13px', lineHeight: 1.3, letterSpacing: '0.3px', textTransform: 'uppercase' }}>
            Drive Insulators for VCB up to 36 kV
          </p>
        </div>
        {/* Card 3 */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ background: "transparent", borderRadius: "12px", padding: "10px", flexGrow: 1, display: "flex", alignItems: "center", justifyContent: "center", border: "none", boxShadow: "none", minHeight: "120px" }}>
            <img src="/images/prod-epoxy-3.png" alt="Seal Off Bushings" style={{ width: "100%", maxHeight: "160px", objectFit: "contain", mixBlendMode: "multiply", filter: "brightness(1.08) contrast(1.2)" }} onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder.jpg' }} />
          </div>
          <p style={{ color: '#222', textAlign: 'center', marginTop: '12px', fontWeight: 600, fontSize: '13px', lineHeight: 1.3, letterSpacing: '0.3px', textTransform: 'uppercase' }}>
            Seal Off Bushings up to 36 kV
          </p>
        </div>
        {/* Card 4 */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ background: "transparent", borderRadius: "12px", padding: "10px", flexGrow: 1, display: "flex", alignItems: "center", justifyContent: "center", border: "none", boxShadow: "none", minHeight: "120px" }}>
            <img src="/images/prod-epoxy-4.png" alt="VCB Housings" style={{ width: "100%", maxHeight: "160px", objectFit: "contain" }} onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder.jpg' }} />
          </div>
          <p style={{ color: '#222', textAlign: 'center', marginTop: '12px', fontWeight: 600, fontSize: '13px', lineHeight: 1.3, letterSpacing: '0.3px', textTransform: 'uppercase' }}>
            VCB Housings up to 36 kV
          </p>
        </div>
        {/* Card 5 */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ background: "transparent", borderRadius: "12px", padding: "10px", flexGrow: 1, display: "flex", alignItems: "center", justifyContent: "center", border: "none", boxShadow: "none", minHeight: "120px" }}>
            <img src="/images/prod-epoxy-5.png" alt="Busbar and Cable Spouts" style={{ width: "100%", maxHeight: "160px", objectFit: "contain" }} onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder.jpg' }} />
          </div>
          <p style={{ color: '#222', textAlign: 'center', marginTop: '12px', fontWeight: 600, fontSize: '13px', lineHeight: 1.3, letterSpacing: '0.3px', textTransform: 'uppercase' }}>
            Busbar and Cable Spouts up to 36 kV
          </p>
        </div>
        {/* Card 6 */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ background: "transparent", borderRadius: "12px", padding: "10px", flexGrow: 1, display: "flex", alignItems: "center", justifyContent: "center", border: "none", boxShadow: "none", minHeight: "120px" }}>
            <img src="/images/prod-epoxy-6.png" alt="Support Insulators" style={{ width: "100%", maxHeight: "160px", objectFit: "contain", transform: "scale(1.3)" }} onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder.jpg' }} />
          </div>
          <p style={{ color: '#222', textAlign: 'center', marginTop: '12px', fontWeight: 600, fontSize: '13px', lineHeight: 1.3, letterSpacing: '0.3px', textTransform: 'uppercase' }}>
            Support Insulators up to 36 kV
          </p>
        </div>
      </div>
    </>
  );
};

const productData = {
  "advanced-partner-panel": {
    title: "Advanced Panel-Building Partner",
    component: AdvancedPartnerLayout
  },
  "current-transformers": {
    title: "Current Transformers (CT) & Potential Transformers (PT)",
    component: TransformersLayout
  },
  "vacuum-circuit-breakers": {
    title: "Vacuum Circuit Breakers (VCB)",
    component: VacuumBreakersLayout
  },
  "vcb-outdoor": {
    title: "Outdoor Vacuum Circuit Breakers (VCB)",
    component: OutdoorVacuumBreakersLayout
  },
  "vacuum-contactors": {
    title: "Vacuum Contactors",
    component: VacuumContactorsLayout
  },
  "epoxy-components": {
    title: "Medium-Voltage Epoxy Components",
    component: EpoxyComponentsLayout
  }
};

export default function ProductDetailsPage() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const product = productData[productId];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  if (!product) {
    return (
      <div style={{ padding: "120px 20px", textAlign: "center", minHeight: "60vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <h1 style={{ color: "#102f83", fontSize: "32px", marginBottom: "20px" }}>Product Not Found</h1>
        <button onClick={() => navigate('/products')} style={{ ...s.productsBtn, background: "#102f83", color: "#fff", padding: "12px 24px", borderRadius: "30px", border: "none", cursor: "pointer" }}>Back to Products</button>
      </div>
    );
  }

  const ContentComponent = product.component;

  return (
    <>
      <ProductsHero subTitle={product.title} />
      <section style={{ ...s.retrofitSection, paddingBottom: "160px" }}>
        <div style={s.retrofitInner}>
          {/* Back Button */}
          <div style={s.retrofitBackBtn} onClick={() => navigate("/products")} title="Back to Products">
            &#10094;
          </div>

          {/* Main Heading */}
          <motion.h2
            style={{ ...s.retrofitMainHeading, textTransform: "uppercase" }}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            {product.title}
          </motion.h2>

          {/* Main Content Area */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeInOut" }}
          >
            <ContentComponent />
          </motion.div>
        </div>
      </section>
    </>
  );
}
