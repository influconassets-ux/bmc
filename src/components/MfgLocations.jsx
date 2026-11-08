import React from "react";
import { s } from "../styles";
import { motion } from "framer-motion";

export default function MfgLocations() {
  return (
    <section className="mfgLocationsSection" style={s.mfgLocationsSection}>
      <div className="mfgLocationsInner" style={s.mfgLocationsInner}>
        <motion.h2 
          className="mfgTitle" 
          style={s.mfgTitle}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2 }}
        >
          EXPLORE THE SPACES <span className="mfgTitleLight" style={s.mfgTitleLight}>BEHIND OUR<br />ENGINEERING EXCELLENCE</span>
        </motion.h2>
        <motion.p 
          className="mfgSubtitle" 
          style={s.mfgSubtitle}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, delay: 0.1 }}
        >
          Look Behind the Scenes At Our State-Of-The-Art Manufacturing Units. Find Out How We Maintain<br />
          The Highest Quality Standards At Every Step—From Conceptualizing And Prototyping To Mass Production.
        </motion.p>

        {/* WORKS 1 */}
        <div className="mfgRow" style={s.mfgRow}>
          <motion.div 
            className="mfgTextCol" 
            style={s.mfgTextCol}
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2 }}
          >
            <h3 className="mfgHeading" style={s.mfgHeading}>HEAD OFFICE &amp; WORKS 1</h3>
            <p className="mfgLocation" style={s.mfgLocation}>Kolkata, West Bengal</p>
            <p className="mfgDesc" style={s.mfgDesc}>
              Located At The Commercial Hub Of India, This Facility Supports Our Core Manufacturing Operations. The Facility Includes An In-House Setup That Functions As An Expert Team Focused On The Localized Needs.
            </p>
            <div className="mfgContact" style={s.mfgContact}>
              <svg viewBox="0 0 24 24" className="mfgIcon" style={s.mfgIcon}><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
              <span>130/22 B.S. Industrial Estate, Hanspukur, Bakrahat Road, Kolkata - 700104 (W.B), India</span>
            </div>
            <a 
              href="https://maps.app.goo.gl/urwE6K2wpBvsBNWr8" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="mfgBtn" 
              style={{ ...s.mfgBtn, textDecoration: "none", display: "inline-flex", alignItems: "center", justifyContent: "center" }}
            >
              Find Us
            </a>
          </motion.div>
          <motion.div 
            className="mfgImgCol" 
            style={s.mfgImgCol}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2 }}
          >
            <img src="/images/works-1.jpg" alt="Works 1" className="mfgImg" style={s.mfgImg} />
          </motion.div>
        </div>

        {/* WORKS 2 */}
        <div style={{ ...s.mfgRow, flexDirection: "row-reverse", marginTop: "100px" }}>
          <motion.div 
            className="mfgTextCol" 
            style={s.mfgTextCol}
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2 }}
          >
            <h3 className="mfgHeading" style={s.mfgHeading}>TECHNOLOGY CENTRE &amp; WORKS 2</h3>
            <p className="mfgLocation" style={s.mfgLocation}>Aurangabad, Maharashtra</p>
            <p className="mfgDesc" style={s.mfgDesc}>
              A State-Of-The-Art Technology Centre Spearheading Research And Innovation For New Development And Specialized Production Capabilities For Modern Power Infrastructure.
            </p>
            <div className="mfgContact" style={s.mfgContact}>
              <svg viewBox="0 0 24 24" className="mfgIcon" style={s.mfgIcon}><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
              <span>K-133, MIDC, Waluj, Aurangabad – 431 136 (M.S.) India.</span>
            </div>
            <a 
              href="https://maps.app.goo.gl/tDwrY8t4TyDqMzzH7" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="mfgBtn" 
              style={{ ...s.mfgBtn, textDecoration: "none", display: "inline-flex", alignItems: "center", justifyContent: "center" }}
            >
              Find Us
            </a>
          </motion.div>
          <motion.div 
            className="mfgImgCol" 
            style={s.mfgImgCol}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2 }}
          >
            <img src="/images/works-2.jpg" alt="Works 2" className="mfgImg" style={s.mfgImg} />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
