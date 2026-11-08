import React from "react";
import { useNavigate } from "react-router-dom";
import { s } from "../styles";
import { motion } from "framer-motion";

export default function ServiceAmcContent() {
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
          Critical Services and AMC
        </motion.h2>

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
            <h3 style={{ ...s.retrofitSubHeading, marginBottom: 25 }}>Services Offered</h3>
            <ul style={s.retrofitList}>
              <li style={s.retrofitListItem}><span style={s.retrofitBullet}></span> Online condition monitoring of sub-station equipment</li>
              <li style={s.retrofitListItem}><span style={s.retrofitBullet}></span> Complete routine testing at site.</li>
              <li style={s.retrofitListItem}><span style={s.retrofitBullet}></span> Overhauling of complete sub-station equipment.</li>
              <li style={s.retrofitListItem}><span style={s.retrofitBullet}></span> Repair, replacement and retrofitting of complete sub-station equipment</li>
              <li style={s.retrofitListItem}><span style={s.retrofitBullet}></span> Tailor-Made spare components for imported, complex and obsolete sub-station equipment</li>
            </ul>

            <h3 style={{ ...s.retrofitSubHeading, marginBottom: 25, marginTop: 40 }}>USP</h3>
            <ul style={s.retrofitList}>
              <li style={s.retrofitListItem}><span style={s.retrofitBullet}></span> With over four decades Of experience in power distribution</li>
              <li style={s.retrofitListItem}><span style={s.retrofitBullet}></span> Ready to move skilled engineers and technicians with hands-on knowledge</li>
              <li style={s.retrofitListItem}><span style={s.retrofitBullet}></span> Cent percent problem rectification on war footing basis</li>
              <li style={s.retrofitListItem}><span style={s.retrofitBullet}></span> Customised economic solution as per equipment health, installation site condition, operator suitability and local environment condition</li>
              <li style={s.retrofitListItem}><span style={s.retrofitBullet}></span> Solution for any and all make of equipment from India and abroad</li>
            </ul>
          </div>

          {/* Right Image Col */}
          <div style={{ flex: "1 1 350px", display: "flex", justifyContent: "center", paddingTop: 10 }}>
            <img 
              src="/images/amc-engineers.png" 
              onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder.jpg' }}
              alt="Engineers inspecting equipment" 
              style={{ width: "100%", maxWidth: "450px", height: "auto", objectFit: "cover", borderRadius: "24px", boxShadow: "0 10px 30px rgba(0,0,0,0.15)" }} 
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
            href="/pdf/BMC MAIN BROCHURE.pdf"
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
