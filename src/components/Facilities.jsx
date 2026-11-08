import React, { useState } from "react";
import { s } from "../styles";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeInOut"} }
};

const mfgFacilitiesData = [
  {
    sub: "Kolkata, West Bengal",
    title: <>HEAD OFFICE & <span style={{ whiteSpace: "nowrap" }}>WORKS 1</span></>,
    phone: "(+033) 2498-0645",
    address: "130/22 B.S. Industrial Estate, Hanspukur, Bakrahat Road, Kolkata – 700104 (W.B.), India",
    img: "/images/works-1.jpg"
  },
  {
    sub: "AURANGABAD, MAHARASHTRA",
    title: <>Technology Centre & <span style={{ whiteSpace: "nowrap" }}>WORKS 2</span></>,
    phone: "(+033) 2498-0645",
    address: "K-133, MIDC, Waluj, Aurangabad – 431 136 (M.S.) India.",
    img: "/images/office2.jpeg"
  }
];

export default function Facilities() {
  const navigate = useNavigate();
  const [facIndex, setFacIndex] = useState(0);

  const nextFac = () => setFacIndex((prev) => (prev === mfgFacilitiesData.length - 1 ? 0 : prev + 1));
  const prevFac = () => setFacIndex((prev) => (prev === 0 ? mfgFacilitiesData.length - 1 : prev - 1));

  const currentFac = mfgFacilitiesData[facIndex];

  return (
    <>
{/* ================= FACILITIES ================= */}
      <section className="facSection" style={s.facSection}>
        <div className="facInner" style={s.facInner}>
          {/* Left Column */}
          <div className="facLeft" style={s.facLeft}>
            <motion.h2 
              className="facTitleLeft" 
              style={s.facTitleLeft}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2 }}
            >
              MANUFACTURING FACILITIES
            </motion.h2>
            <motion.div 
              className="facCardLeft" 
              style={s.facCardLeft}
              initial={{ opacity: 0, y: 15, rotate: -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            >
              <img src={currentFac.img} alt={currentFac.title} className="facCardImg" style={s.facCardImg} />
              <div className="facCardContent" style={s.facCardContent}>
                <p className="facCardSub" style={s.facCardSub}>{currentFac.sub}</p>
                <h3 className="facCardTitle" style={{...s.facCardTitle, textTransform: "uppercase"}}>{currentFac.title}</h3>

                <div className="facContactList" style={s.facContactList}>
                  <div className="facContactItem" style={s.facContactItem}>
                    <svg viewBox="0 0 24 24" className="facIcon" style={s.facIcon}><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>
                    <span>{currentFac.phone}</span>
                  </div>
                  <div className="facContactItem" style={s.facContactItem}>
                    <svg viewBox="0 0 24 24" className="facIcon" style={s.facIcon}><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
                    <span>{currentFac.address}</span>
                  </div>
                </div>

                <a href="/manufacturing-facilities" onClick={(e) => { e.preventDefault(); navigate('/manufacturing-facilities'); }} className="facLinkWrap" style={s.facLinkWrap}>
                  <span className="facLinkText" style={s.facLinkText}>Learn More</span> <span className="facLinkArrow" style={s.facLinkArrow}>&rarr;</span>
                </a>

                <div className="facSliderControls" style={s.facSliderControls}>
                  <span className="facSliderArrow" style={{...s.facSliderArrow, cursor: "pointer", userSelect: "none"}} onClick={prevFac}>&larr;</span>
                  <div className="facSliderBar" style={s.facSliderBar}>
                    <div className="facSliderProgress" style={{...s.facSliderProgress, width: `${100 / mfgFacilitiesData.length}%`, left: `${(facIndex / mfgFacilitiesData.length) * 100}%`, transition: "left 0.3s ease"}}></div>
                  </div>
                  <span className="facSliderArrow" style={{...s.facSliderArrow, cursor: "pointer", userSelect: "none"}} onClick={nextFac}>&rarr;</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="facRight" style={s.facRight}>
            <motion.h2 
              className="facTitleRight" 
              style={s.facTitleRight}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2 }}
            >
              TESTING FACILITIES
            </motion.h2>

            <div className="facTestCarousel" style={s.facTestCarousel}>


              <motion.div 
                className="facTestGrid" 
                style={s.facTestGrid}
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                <motion.div variants={item} whileHover={{ y: -10 }} className="facTestItem" style={s.facTestItem}>
                  <img src="/images/test-fac-1.jpg" alt="Lightning Impulse" className="facTestImg" style={s.facTestImg} />
                  <p className="facTestText" style={s.facTestText}>In-House 300 kVp Lightning Impulse<br />Voltage Withstand Test</p>
                </motion.div>
                <motion.div variants={item} whileHover={{ y: -10 }} className="facTestItem" style={s.facTestItem}>
                  <img src="/images/test-fac-2.jpg" alt="Circuit Breaker Analyser" className="facTestImg" style={s.facTestImg} />
                  <p className="facTestText" style={s.facTestText}>Circuit Breaker Analyser</p>
                </motion.div>
                <motion.div variants={item} whileHover={{ y: -10 }} className="facTestItem" style={s.facTestItem}>
                  <img src="/images/test-fac-3.jpg" alt="CT Analyser" className="facTestImg" style={s.facTestImg} />
                  <p className="facTestText" style={s.facTestText}>Automatic OMICRON CT Analyser &amp;<br />Complete Routine Testing for CT &amp; PT</p>
                </motion.div>
                <motion.div variants={item} whileHover={{ y: -10 }} className="facTestItem" style={s.facTestItem}>
                  <img src="/images/test-fac-4.jpg" alt="Partial Discharge" className="facTestImg" style={s.facTestImg} />
                  <p className="facTestText" style={s.facTestText}>In-House Partial Discharge &amp;<br />High-Voltage Withstand Test Setup<br />(Up to 100 kV)</p>
                </motion.div>
              </motion.div>


            </div>

            <p className="facTestDesc" style={s.facTestDesc}>
              Representatives as "Technical/Marketing Consultants" for a High-Power Lab in<br />
              Korea, a Vacuum Furnace Manufacturer from Germany, and a Component Manufacturer for VI<br />
              (Single-Window Solution for Vacuum Switchgear).
            </p>

            <button onClick={() => navigate('/testing-facilities')} className="facTestBtn" style={s.facTestBtn}>VIEW MORE</button>
          </div>
        </div>
      </section>

          </>
  );
}