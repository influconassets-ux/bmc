import React from "react";
import { useNavigate } from "react-router-dom";
import { s } from "../styles";
import { motion } from "framer-motion";

export default function Consultancy() {
  const navigate = useNavigate();
  return (
    <>
{/* ================= CONSULTANCY ================= */}
      <section className="consultSection" style={s.consultSection}>
        <div className="consultInner" style={s.consultInner}>
          <div className="consultLeft" style={s.consultLeft}>
            <div className="consultTagWrap" style={s.consultTagWrap}>
              <span className="consultTag" style={s.consultTag}>CONSULTANCY OFFERED BY BMC</span>
              <span className="consultTagLine" style={s.consultTagLine} />
            </div>
            <h2 className="consultTitle" style={s.consultTitle}>
              <span className="consultTitleLight" style={s.consultTitleLight}>BMC TECHNOLOGY</span><br />
              TRANSFER AND<br />
              CONSULTANCY WING
            </h2>
            <div className="consultList" style={s.consultList}>
              <div className="consultListItem" style={s.consultListItem}>
                <span className="consultBullet" style={s.consultBullet}>&bull;</span> Customer Brand Development &amp; Establishment
              </div>
              <div className="consultListItem" style={s.consultListItem}>
                <span className="consultBullet" style={s.consultBullet}>&bull;</span> Economical and Value-Engineered Complete Products
              </div>
              <div className="consultListItem" style={s.consultListItem}>
                <span className="consultBullet" style={s.consultBullet}>&bull;</span> Domestic &amp; Global Market Penetration
              </div>
            </div>
          </div>

          <div className="consultRight" style={s.consultRight}>
            <motion.div 
              className="consultCard" 
              style={s.consultCard}
              whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <h3 className="consultCardTitle" style={s.consultCardTitle}>Technology Transfer &amp; Switchgear<br />Manufacturing Plant Setup<br />Consultancy</h3>
              <p className="consultCardDesc" style={s.consultCardDesc}>Technology Transfer &amp; Manufacturing Consultancy Wing for Medium-Voltage Switchgear</p>
              <a onClick={(e) => { e.preventDefault(); navigate('/consultancy/tech-transfer'); }} href="/consultancy/tech-transfer" className="consultCardLinkWrap" style={s.consultCardLinkWrap}>
                <span className="consultCardLinkText" style={s.consultCardLinkText}>LEARN MORE</span> <span>&rarr;</span>
              </a>
            </motion.div>

            <motion.div 
              className="consultCard" 
              style={s.consultCard}
              whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <h3 className="consultCardTitle" style={s.consultCardTitle}>Specialised Consultancy Wing for<br />Technology and Manufacturing<br />Solutions of Vacuum Interrupters</h3>
              <p className="consultCardDesc" style={s.consultCardDesc}>Technology Transfer &amp; Manufacturing Consultancy Wing for Vacuum Interrupters</p>
              <a onClick={(e) => { e.preventDefault(); navigate('/consultancy/vacuum-interrupters'); }} href="/consultancy/vacuum-interrupters" className="consultCardLinkWrap" style={s.consultCardLinkWrap}>
                <span className="consultCardLinkText" style={s.consultCardLinkText}>LEARN MORE</span> <span>&rarr;</span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

          </>
  );
}