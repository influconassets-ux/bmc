import React from "react";
import { useNavigate } from "react-router-dom";
import { s } from "../styles";
import { motion } from "framer-motion";

export default function ServiceRetrofitContent() {
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
          BMC Has A Background Of Retrofitting Of Various OCB & VCB Of Imported & Obsolete Brands For Nearly Two Decades & Has Successfully Commissioned More Than 2000 OCB & VCB Of 25+ Different Makes, All Over The Country & Abroad.
        </motion.h2>

        {/* Content Block */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeInOut" }}
        >
          <h3 style={s.retrofitSubHeading}>What is RETROFIT?</h3>
          <ul style={s.retrofitList}>
            <li style={s.retrofitListItem}>
              <span style={s.retrofitBullet}></span> Upgradation Of Technology
            </li>
            <li style={s.retrofitListItem}>
              <span style={s.retrofitBullet}></span> No Change In Existing Panel And Existing Breakers.
            </li>
            <li style={s.retrofitListItem}>
              <span style={s.retrofitBullet}></span> Existing Breaker Remains Spare
            </li>
          </ul>
        </motion.div>

        {/* Images Block */}
        <motion.div 
          style={s.retrofitImagesWrap}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeInOut" }}
        >
          <div style={{ ...s.prodGridCard, flex: "1 1 300px", maxWidth: "400px" }}>
            <div style={s.prodGridImgWrap}>
              <img 
                src="/images/ocb.png" 
                onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder.jpg' }}
                alt="Oil Circuit Breakers" 
                style={s.prodGridImg} 
              />
            </div>
            <p style={s.prodGridCardTitle}>Oil Circuit Breakers</p>
          </div>
          <div style={{ ...s.prodGridCard, flex: "1 1 300px", maxWidth: "400px" }}>
            <div style={s.prodGridImgWrap}>
              <img 
                src="/images/vcb.png" 
                onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder.jpg' }}
                alt="Vacuum Circuit Breakers" 
                style={s.prodGridImg} 
              />
            </div>
            <p style={s.prodGridCardTitle}>Vacuum Circuit Breakers</p>
          </div>
        </motion.div>

        {/* Download Button */}
        <motion.div 
          style={s.retrofitBtnWrap}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, delay: 0.6, ease: "easeInOut" }}
        >
          <motion.a 
            href="/pdf/BMC RETROFIT BROCHURE.pdf"
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
