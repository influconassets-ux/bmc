import React from "react";
import { useNavigate } from "react-router-dom";
import { s } from "../styles";
import { motion } from "framer-motion";

export default function ConsultancyTechTransferContent() {
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
          Technology Transfer & Manufacturing Consultancy Wing for Medium-Voltage Switchgear
        </motion.h2>

        {/* Intro Paragraph */}
        <motion.p
          style={{ ...s.retrofitBodyText, textAlign: "center", maxWidth: "900px", margin: "0 auto 50px auto", fontWeight: 500, lineHeight: 1.6 }}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, delay: 0.1, ease: "easeInOut" }}
        >
          Switchgear panels with voltage ratings up to 33kV are termed as Medium-Voltage switchgear panels. They are a major equipment for protection and metering of the electrical power distribution systems. These panels are used for switching high-tension loads such as transformers, motors or capacitor banks.
        </motion.p>

        {/* Split Layout Block */}
        <motion.div
          style={{ display: "flex", gap: "40px", alignItems: "flex-start", flexWrap: "wrap", marginBottom: "60px" }}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeInOut" }}
        >
          {/* Left Text Col */}
          <div style={{ flex: "1 1 500px" }}>
            <ul style={s.retrofitList}>
              <li style={{ ...s.retrofitListItem, marginBottom: 25, lineHeight: 1.6 }}>
                <span style={{ ...s.retrofitBullet, top: 8 }}></span> 
                Provide training for assembly, routine testing and other needs for customer to set up their own manufacturing or assembly plant at the customer premises
              </li>
              <li style={{ ...s.retrofitListItem, marginBottom: 25, lineHeight: 1.6 }}>
                <span style={{ ...s.retrofitBullet, top: 8 }}></span> 
                Understanding and finalizing of the technical specification as required by the specific utility, geographical zone and country, abiding to domestic and international standards, as applicable.
              </li>
              <li style={{ ...s.retrofitListItem, marginBottom: 25, lineHeight: 1.6 }}>
                <span style={{ ...s.retrofitBullet, top: 8 }}></span> 
                Design and manufacturing of prototypes, for type testing by accredited labs for the specific zone and country, as per requirements guided by international standards, in the customer's brand name.
              </li>
              <li style={{ ...s.retrofitListItem, marginBottom: 25, lineHeight: 1.6 }}>
                <span style={{ ...s.retrofitBullet, top: 8 }}></span> 
                Provide the customer with detailed manufacturing drawings of the panels, for assembly at their own premises and supply of major components, in kit form such as vacuum circuit breakers (VCB), current transformers (CT) and potential transformer(PT), epoxy cast components- all of which are major components in the panel.
              </li>
            </ul>
          </div>

          {/* Right Image Col */}
          <div style={{ flex: "1 1 350px", display: "flex", flexDirection: "column", gap: "20px", alignItems: "center" }}>
            <img 
              src="/images/tech-transfer-1.png" 
              onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder.jpg' }}
              alt="Electric field simulation" 
              style={{ width: "100%", maxWidth: "450px", height: "auto", objectFit: "cover", borderRadius: "16px", boxShadow: "0 10px 30px rgba(0,0,0,0.15)" }} 
            />
            <img 
              src="/images/tech-transfer-2.png" 
              onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder.jpg' }}
              alt="Physical Panel Setup" 
              style={{ width: "100%", maxWidth: "450px", height: "auto", objectFit: "cover", borderRadius: "16px", boxShadow: "0 10px 30px rgba(0,0,0,0.15)" }} 
            />
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
          <motion.a 
            href="/pdf/BMC TECHNOLOGY CONSULTANCY.pdf"
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
