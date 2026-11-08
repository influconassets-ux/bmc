import React from "react";
import { useNavigate } from "react-router-dom";
import { s } from "../styles";
import { motion } from "framer-motion";

export default function ConsultancyPageIntro() {
  const navigate = useNavigate();
  return (
    <section className="consultPageIntroSection" style={s.consultPageIntroSection}>
      <div className="consultPageIntroInner" style={s.consultPageIntroInner}>
        <motion.h2 
          className="consultPageIntroTitle" 
          style={s.consultPageIntroTitle}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2 }}
        >
          <span className="consultPageIntroTitleLight" style={s.consultPageIntroTitleLight}>BMC TECHNOLOGY</span><br />
          TRANSFER &amp; CONSULTANCY WING
        </motion.h2>
        <motion.p 
          className="consultPageIntroDesc" 
          style={s.consultPageIntroDesc}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, delay: 0.1 }}
        >
          BMC Electroplast offers consultancy and technology transfer solutions for switchgear manufacturing and power systems. Backed by<br />
          decades of engineering expertise, the company supports industrial growth through reliable technical guidance and project execution.
        </motion.p>

        <motion.div 
          className="consultPageIntroGrid" 
          style={s.consultPageIntroGrid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
        >
          {/* Card 1 */}
          <motion.div 
            className="consultPageIntroCard" 
            style={s.consultPageIntroCard}
            variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeInOut"} } }}
            whileHover={{ y: -15, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)" }}
          >
            <h3 className="consultPageIntroCardTitle" style={s.consultPageIntroCardTitle}>Technology Transfer &amp; Switchgear<br />Manufacturing Plant Setup<br />Consultancy</h3>
            <p className="consultPageIntroCardDesc" style={s.consultPageIntroCardDesc}>Technology Transfer &amp; Manufacturing Consultancy<br />Wing for Medium-Voltage Switchgear.</p>
            <a onClick={(e) => { e.preventDefault(); navigate('/consultancy/tech-transfer'); }} href="/consultancy/tech-transfer" className="consultPageIntroCardLink" style={s.consultPageIntroCardLink}>
              <span className="consultPageIntroCardLinkText" style={s.consultPageIntroCardLinkText}>LEARN MORE</span> <span>&rarr;</span>
            </a>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            className="consultPageIntroCard" 
            style={s.consultPageIntroCard}
            variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeInOut"} } }}
            whileHover={{ y: -15, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)" }}
          >
            <h3 className="consultPageIntroCardTitle" style={s.consultPageIntroCardTitle}>Specialised Consultancy Wing for<br />Technology and Manufacturing<br />Solutions of Vacuum Interrupters</h3>
            <p className="consultPageIntroCardDesc" style={s.consultPageIntroCardDesc}>Technology Transfer &amp; Manufacturing Consultancy<br />Wing for Vacuum Interrupters.</p>
            <a onClick={(e) => { e.preventDefault(); navigate('/consultancy/vacuum-interrupters'); }} href="/consultancy/vacuum-interrupters" className="consultPageIntroCardLink" style={s.consultPageIntroCardLink}>
              <span className="consultPageIntroCardLinkText" style={s.consultPageIntroCardLinkText}>LEARN MORE</span> <span>&rarr;</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
