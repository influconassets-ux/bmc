import React from "react";
import { useNavigate } from "react-router-dom";
import { s } from "../styles";
import { motion } from "framer-motion";

export default function AboutUs() {
  const navigate = useNavigate();
  return (
    <>
{/* ================= ABOUT US ================= */}
      <section className="about" style={s.about}>
        <div className="aboutInner" style={s.aboutInner}>
          <motion.div 
            className="aboutImgWrap" 
            style={s.aboutImgWrap}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            <img src="/images/about-building.jpg" alt="BMC Building" className="aboutImg" style={s.aboutImg} />
            <div className="yearsBadge" style={s.yearsBadge}>
              <div className="yearsNum" style={s.yearsNum}>40+</div>
              <div className="yearsLabel" style={s.yearsLabel}>Years of<br />Establishment</div>
            </div>
          </motion.div>

          <motion.div 
            className="aboutText" 
            style={s.aboutText}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeInOut" }}
          >
            <div className="aboutTag" style={s.aboutTag}>
              <span className="aboutTagText" style={s.aboutTagText}>ABOUT US</span>
              <span className="aboutTagLine" style={s.aboutTagLine} />
            </div>
            <h2 className="aboutHeading" style={s.aboutHeading}>BMC Electroplast Was Founded In 1986 By A Group Of TECHNOCRAT ENTREPRENEURS</h2>
            <p className="aboutPara" style={s.aboutPara}>BMC Electroplast was founded in 1986 by a group of technocrat entrepreneurs. For the past four decades, BMC has successfully engaged in technology consultancy, manufacturing, services and tailor-made solutions for medium-voltage switchgear, instrument transformers and various cast resin components.</p>
            <p className="aboutPara" style={s.aboutPara}>BMC is an ISO 9001:2015, ISO 14001:2015, and OHSAS 18001:2007 certified company.</p>
            <p className="aboutPara" style={s.aboutPara}>
              <span className="hl" style={s.hl}>BMC is the first</span> SME in India to have been{" "}
              <span className="hl" style={s.hl}>certified by DSIR (Department of Scientific and Industrial Research),</span>{" "}
              Government of India, as an R&amp;D Centre for MV Switchgear.
            </p>
            <button className="aboutBtn" style={s.aboutBtn} onClick={() => navigate("/about")}>LEARN MORE</button>
          </motion.div>
        </div>
      </section>

          </>
  );
}