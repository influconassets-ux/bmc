import React from "react";
import { useNavigate } from "react-router-dom";
import { s } from "../styles";
import { motion } from "framer-motion";

export default function ConsultancyVacuumInterruptersContent() {
  const navigate = useNavigate();

  return (
    <section style={s.retrofitSection}>
      <div style={s.retrofitInner}>
        
        {/* Back Button */}
        <div style={s.retrofitBackBtn} onClick={() => navigate("/consultancy")} title="Back to Consultancy">
          &#10094;
        </div>

        {/* Main Heading */}
        <motion.h2 
          style={{ ...s.retrofitMainHeading, padding: "0 20px" }}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          Specialised Consultancy Wing for Technology and Manufacturing Solutions of Vacuum Interrupters for Medium-Voltage Switching Applications
        </motion.h2>

        {/* Intro Paragraph */}
        <motion.p
          style={{ ...s.retrofitBodyText, textAlign: "center", maxWidth: "1000px", margin: "0 auto 50px auto", fontWeight: 500, lineHeight: 1.6 }}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, delay: 0.1, ease: "easeInOut" }}
        >
          A vacuum interrupter is an advanced technological device used in electrical switching applications for Circuit Breakers, Contactors, Ring Main Units, Reclosers and Load Break Switches to extinguish arcs and interrupt current flow in medium and high-voltage circuits. A vacuum interrupter (VI) is considered a high-tech product due to its advanced materials, precision engineering for vacuum sealing and innovative arc-extinguishing mechanisms for ultra-high voltage insulation. It uses advanced physics & materials science to control high-energy electrical arcs and enables environmentally friendly power switching, replacing harmful SF6 gas. Interrupters provide unmatched speed, efficiency, and reliability in modern electrical grids.
        </motion.p>

        {/* Split Layout Block */}
        <motion.div
          style={{ display: "flex", gap: "40px", alignItems: "center", flexWrap: "wrap", marginBottom: "60px" }}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeInOut" }}
        >
          {/* Left Image Col */}
          <div style={{ flex: "1 1 350px", display: "flex", flexDirection: "column", gap: "50px", alignItems: "center" }}>
            <img 
              src="/images/vi-render.png" 
              onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder.jpg' }}
              alt="Vacuum Interrupter 3D Render" 
              style={{ width: "100%", maxWidth: "450px", height: "auto", objectFit: "cover", borderRadius: "16px" }} 
            />
            <img 
              src="/images/vi-cross-section.png" 
              onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder.jpg' }}
              alt="Cross section of a typical vacuum interrupter" 
              style={{ width: "100%", maxWidth: "450px", height: "auto", objectFit: "cover", borderRadius: "16px" }} 
            />
          </div>

          {/* Right Text Col */}
          <div style={{ flex: "1 1 500px" }}>
            <ul style={s.retrofitList}>
              <li style={{ ...s.retrofitListItem, marginBottom: 35, lineHeight: 1.6, fontSize: "18px" }}>
                <span style={{ ...s.retrofitBullet, top: 10 }}></span> 
                Technology transfer of Vacuum Interrupter design, manufacturing and testing.
              </li>
              <li style={{ ...s.retrofitListItem, marginBottom: 35, lineHeight: 1.6, fontSize: "18px" }}>
                <span style={{ ...s.retrofitBullet, top: 10 }}></span> 
                Detailed design transfer of VI rated from 1kV to 72kV rated voltage with a rated current ranging from 80A to 4000A and with short time fault current rating from 6kA to 44kA.
              </li>
              <li style={{ ...s.retrofitListItem, marginBottom: 35, lineHeight: 1.6, fontSize: "18px" }}>
                <span style={{ ...s.retrofitBullet, top: 10 }}></span> 
                Availability of Vacuum Interrupter designs (copyright and patented) for Contactors, Switches and Circuit Breakers exclusively for inductive, capacitive and Generator loads.
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Download Button */}
        <motion.div 
          style={s.retrofitBtnWrap}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeInOut" }}
        >
          <div style={{ display: "flex", justifyContent: "center", marginTop: "40px" }}>
            <a 
              href="/pdf/BMC TECHNOLOGY CONSULTANCY_page.pdf" 
              download="BMC TECHNOLOGY CONSULTANCY_page.pdf"
              style={{
                background: "#caee5a",
                color: "#111",
                padding: "16px 40px",
                borderRadius: "4px",
                textDecoration: "none",
                fontWeight: 700,
                fontSize: "16px",
                display: "inline-block",
                letterSpacing: "0.5px"
              }}
            >
              DOWNLOAD PRESENTATION
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
