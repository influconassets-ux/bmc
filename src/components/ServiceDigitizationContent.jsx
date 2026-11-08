import React from "react";
import { useNavigate } from "react-router-dom";
import { s } from "../styles";
import { motion } from "framer-motion";

export default function ServiceDigitizationContent() {
  const navigate = useNavigate();

  return (
    <section style={s.retrofitSection}>
      <div style={s.retrofitInner}>
        
        {/* Back Button */}
        <div style={s.retrofitBackBtn} onClick={() => navigate("/services")} title="Back to Services">
          &#10094;
        </div>

        {/* Main Heading */}
        <motion.h2 
          style={s.retrofitMainHeading}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          Digitisation & Smart MRO In Power Systems
        </motion.h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "40px", marginBottom: "60px" }}>
          
          {/* Card 1: Why Digitisation */}
          <motion.div
            style={{ 
              background: "linear-gradient(135deg, #0a1128 0%, #1c3d9a 100%)", 
              borderRadius: "20px", 
              padding: "50px", 
              color: "#fff",
              boxShadow: "0 15px 30px rgba(0,0,0,0.15)"
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.1, ease: "easeInOut" }}
          >
            <h3 style={{ fontSize: "32px", fontWeight: 700, marginBottom: "25px", textAlign: "center" }}>
              Why Digitisation is a Requirement?
            </h3>
            <p style={{ fontSize: "16px", lineHeight: 1.7, color: "rgba(255,255,255,0.9)", textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
              Traditional power system audits are manual and reactive, providing limited asset visibility. Industry 4.0 requires audits to evolve into continuous, data-driven assessments based on physical HT/LT asset condition, enabling early risk detection, real-time visibility, predictive insights, and actionable maintenance decisions.
            </p>
          </motion.div>

          {/* Card 2: End-to-End Solutions */}
          <motion.div
            style={{ 
              background: "linear-gradient(135deg, #e0f7ea 0%, #d4e4ff 100%)", 
              borderRadius: "20px", 
              padding: "50px", 
              color: "#1a1a1a",
              boxShadow: "0 15px 30px rgba(0,0,0,0.08)",
              position: "relative",
              overflow: "hidden"
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeInOut" }}
          >
            {/* Logo Badge (as seen in screenshot) */}
            <div style={{ position: "absolute", top: 20, left: 20, background: "#fff", padding: "10px", borderRadius: "8px", boxShadow: "0 4px 10px rgba(0,0,0,0.05)" }}>
              <img src="/images/logo-icon-only.png" alt="BMC" style={{ height: "30px", width: "auto" }} onError={(e) => { e.target.style.display = 'none' }} />
            </div>

            <h3 style={{ fontSize: "36px", fontWeight: 800, marginBottom: "25px", textAlign: "center", paddingTop: "20px" }}>
              End-to-End <span style={{ background: "linear-gradient(90deg, #9b51e0, #c4ea48)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Digitized<br />Power System Solutions</span>
            </h3>
            
            <p style={{ fontSize: "18px", fontWeight: 700, lineHeight: 1.6, textAlign: "center", maxWidth: "800px", margin: "0 auto 30px auto" }}>
              From Intelligent Monitoring to Complete Asset Lifecycle Management which includes overhauling as well as support with BMC manufactured MV Components as OEM
            </p>

            <p style={{ fontSize: "16px", lineHeight: 1.7, color: "#333", textAlign: "center", maxWidth: "850px", margin: "0 auto" }}>
              <strong>Digitisation is most effective when it is supported by physical domain expertise.</strong><br />
              At <strong>BMC</strong>, Industry 4.0 digitisation is delivered as a complete, end-to-end solution—combining sensor-based monitoring, engineering insights, and on-ground execution across the entire lifecycle of electrical panels and their components.
            </p>
          </motion.div>

        </div>

        {/* Download Button */}
        <motion.div 
          style={s.retrofitBtnWrap}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeInOut" }}
        >
          <motion.a 
            href="/pdf/BMC Digital Brochure.pdf"
            download
            style={{ ...s.retrofitBtn, textDecoration: "none", display: "inline-block" }}
            whileHover={{ y: -3, boxShadow: "0 10px 20px rgba(196, 234, 72, 0.4)" }}
          >
            DOWNLOAD BROCHURE
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
