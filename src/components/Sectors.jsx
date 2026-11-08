import React from "react";
import { s } from "../styles";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeInOut"} }
};

export default function Sectors() {
  return (
    <>
{/* ================= SECTORS & PARTNERS ================= */}
      <section className="spSection" style={s.spSection}>
        <div className="spInner" style={s.spInner}>
          {/* Left Column: Sectors */}
          <div className="spLeft" style={s.spLeft}>
            <h2 className="spTitle" style={s.spTitle}>SECTORS WITH OUR<br />PRESENCE</h2>
            <motion.div 
              className="spFootprintWrap" 
              style={s.spFootprintWrap}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            >
              <img src="/images/bmc-footprint.jpg" alt="BMC Footprint" className="spFootprintImg" style={s.spFootprintImg} />
            </motion.div>

            <motion.div 
              className="spSectorsGrid" 
              style={s.spSectorsGrid}
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {[
                "Petrochemicals", "Railways And Metro", "Electricity Regulatory Authority",
                "Power Distribution", "Switchgear Companies", "Aeronautics",
                "Nuclear Power", "Cement", "Defence",
                "Industries", "Renewable Energy", "Coal",
                "Metals & Mining", "Steel", "Real Estate",
                "Data Centers", "EV Charging Infrastructures", "Oil and Gas"
              ].map((sector, i) => (
                <motion.div key={i} className="spSectorItem" style={s.spSectorItem} variants={item} whileHover={{ x: 5 }}>
                  <div className="spSectorIconWrap" style={s.spSectorIconWrap}>
                    <svg viewBox="0 0 24 24" className="spSectorIcon" style={s.spSectorIcon}><path d="M11 21h-1l1-7H7.5c-.58 0-.57-.32-.38-.66.19-.34.05-.08.16-.27L12.5 3h1l-1 7h3.5c.49 0 .56.33.47.51l-.07.15L11 21z" /></svg>
                  </div>
                  <span className="spSectorText" style={s.spSectorText}>{sector}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Divider */}
          <div className="spDivider" style={s.spDivider}></div>

          {/* Right Column: Partners */}
          <div className="spRight" style={s.spRight}>
            <h2 className="spTitle" style={s.spTitle}>TRUSTED PARTNERS, CLIENTS &amp;<br />END USERS</h2>
            <motion.div 
              className="spPartnersGrid" 
              style={s.spPartnersGrid}
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((num) => (
                <motion.div key={num} className="spPartnerItem" style={s.spPartnerItem} variants={item} whileHover={{ rotateZ: (num%2===0 ? 5 : -5) }}>
                  <img src={`/images/client-${num}.png`} alt={`Client ${num}`} className="spPartnerImg" style={s.spPartnerImg} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

          </>
  );
}