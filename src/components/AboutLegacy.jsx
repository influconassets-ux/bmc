import React from "react";
import { s } from "../styles";
import { motion } from "framer-motion";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeInOut" } }
};

export default function AboutLegacy() {
  return (
    <section className="aboutLegacySection" style={s.aboutLegacySection}>
      <div className="aboutLegacyInner" style={s.aboutLegacyInner}>

        {/* Left Column (Image with Overlay) */}
        <motion.div
          className="aboutLegacyImgCol"
          style={s.aboutLegacyImgCol}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <img src="/images/works-1.jpg" onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder.jpg' }} alt="Facility" className="aboutLegacyImg" style={s.aboutLegacyImg} />
          <div className="aboutLegacyImgOverlay" style={s.aboutLegacyImgOverlay}>
            <h3 className="aboutLegacyImgOverlayTitle" style={s.aboutLegacyImgOverlayTitle}>40+</h3>
            <p className="aboutLegacyImgOverlayText" style={s.aboutLegacyImgOverlayText}>Years Of<br />Establishment</p>
          </div>
        </motion.div>

        {/* Right Column (Text & Stats) */}
        <motion.div
          className="aboutLegacyTextCol"
          style={s.aboutLegacyTextCol}
          initial={{ opacity: 0, x: 15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <h2 className="aboutLegacyTitle" style={s.aboutLegacyTitle}>OUR <span className="aboutLegacyTitleBold" style={s.aboutLegacyTitleBold}>LEGACY</span> AND <span className="aboutLegacyTitleBold" style={s.aboutLegacyTitleBold}>LEADERSHIP</span></h2>
          <h3 className="aboutLegacySubtitle" style={s.aboutLegacySubtitle}>Powering Excellence Since 1986</h3>
          <p className="aboutLegacyDesc" style={s.aboutLegacyDesc}>
            BMC was the brainchild of a visionary technocrat, <span className="aboutLegacyDark" style={s.aboutLegacyDark}>Late Mr. Santanu Mitra</span>, who
            founded the organization in 1986. The present leadership consists of four
            technocrat directors: <span className="aboutLegacyBlue" style={s.aboutLegacyBlue}><span style={{ whiteSpace: "nowrap" }}>Mr. Subodh Kr. Banerjee (Senior Director)</span>, Mr. Rajiv
              Bhargava (Technical Director), <span style={{ whiteSpace: "nowrap" }}>Mr. Girish V. Magre (R&D Director)</span>, Mr. Siddhartha
              Mitra, (Senior Director)</span>. Two engineers, <span className="aboutLegacyBlue" style={s.aboutLegacyBlue}><span style={{ whiteSpace: "nowrap" }}>Mr. Samrat Banerjee</span> and Mr. Saptarshi
                Mitra</span>, execute the role of top management on behalf of the leadership.
            BMC has a combined workforce of 150 plus employees comprising of graduate
            engineers, technical supervisors & skilled workmen, engaged in innovation &
            technology enhancement of power systems equipment.
          </p>

          <motion.div
            className="aboutLegacyStats"
            style={s.aboutLegacyStats}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div variants={staggerItem} className="aboutLegacyStatItem" style={s.aboutLegacyStatItem}>
              <h3 className="aboutLegacyStatNumber" style={s.aboutLegacyStatNumber}>100+</h3>
              <p className="aboutLegacyStatText" style={s.aboutLegacyStatText}>Clients</p>
            </motion.div>
            <motion.div variants={staggerItem} className="aboutLegacyStatDivider" style={s.aboutLegacyStatDivider} />
            <motion.div variants={staggerItem} className="aboutLegacyStatItem" style={s.aboutLegacyStatItem}>
              <h3 className="aboutLegacyStatNumber" style={s.aboutLegacyStatNumber}>150+</h3>
              <p className="aboutLegacyStatText" style={s.aboutLegacyStatText}>Manpower</p>
            </motion.div>
            <motion.div variants={staggerItem} className="aboutLegacyStatDivider" style={s.aboutLegacyStatDivider} />
            <motion.div variants={staggerItem} className="aboutLegacyStatItem" style={s.aboutLegacyStatItem}>
              <h3 className="aboutLegacyStatNumber" style={s.aboutLegacyStatNumber}>15+</h3>
              <p className="aboutLegacyStatText" style={s.aboutLegacyStatText}>Technology Consultancies</p>
            </motion.div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
