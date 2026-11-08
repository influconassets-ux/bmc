import React, { useState } from "react";
import { s } from "../styles";
import { motion } from "framer-motion";

export default function Patents() {
  const [awardIndex, setAwardIndex] = useState(0);
  const awardItems = [
    { type: "video", src: "https://www.youtube-nocookie.com/embed/1gzDynzULwg" },
    { type: "image", src: "/CERTIFICATION/img1.png" },
    { type: "image", src: "/CERTIFICATION/img2_2.png" },
    { type: "image", src: "/CERTIFICATION/img3.png" },
    { type: "image", src: "/CERTIFICATION/img4.png" },
    { type: "image", src: "/CERTIFICATION/img5.png" },
    { type: "image", src: "/CERTIFICATION/img6.png" }
  ];

  const handlePrev = () => {
    setAwardIndex((prev) => (prev === 0 ? awardItems.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setAwardIndex((prev) => (prev === awardItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
{/* ================= PATENTS & AWARDS ================= */}
      <section className="paSection" style={s.paSection}>
        <div className="paInner" style={s.paInner}>
          {/* Left Column */}
          <motion.div 
            className="paLeft" 
            style={{ ...s.paLeft, display: "flex", flexDirection: "column" }}
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2 }}
          >
            <h2 className="patentsTitle" style={s.patentsTitle}>PATENTS &amp; PRODUCT<br />INNOVATION</h2>
            <p className="patentsDesc" style={s.patentsDesc}>
              Explore our patented technologies and innovations 
              developed to advance switchgear and power 
              system solutions.
            </p>
            <div className="patentImgWrap" style={{ ...s.patentImgWrap, overflow: "visible", marginTop: "auto" }}>
              <img src="/images/patent-innovation.jpg" alt="Patents" className="patentImg" style={{ ...s.patentImg, borderRadius: 12 }} />
              <div style={{ position: "absolute", bottom: -95, left: 0, width: "100%", textAlign: "center" }}>
                <a href="/pdf/patent_details .pdf" target="_blank" rel="noopener noreferrer" className="patentBtn" style={{ ...s.patentBtn, textDecoration: "none", display: "inline-block" }}>VIEW PATENTS</a>
              </div>
            </div>
          </motion.div>

          {/* Divider */}
          <div className="spDivider" style={s.spDivider}></div>

          {/* Right Column */}
          <motion.div 
            className="paRight" 
            style={{ ...s.paRight, display: "flex", flexDirection: "column" }}
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2 }}
          >
            <h2 className="awardsTitle" style={s.awardsTitle}>AWARDS &amp; RECOGNITIONS<br /><span className="awardsTitleLight" style={s.awardsTitleLight}>EARNED OVER THE YEARS</span></h2>
            <div className="awardsCard" style={{ ...s.awardsCard, overflow: "visible", marginTop: "auto" }}>
              <img src="/images/laurel-wreath.png" alt="Laurel Wreath" className="laurelImg" style={s.laurelImg} />

              <div className="awardsCarousel" style={s.awardsCarousel}>
                <span className="awardsArrow" style={s.awardsArrow} onClick={handlePrev}>&larr;</span>
                <div className="awardNewsWrap" style={{ ...s.awardNewsWrap, overflow: "hidden", borderRadius: 8 }}>
                  {awardItems[awardIndex].type === "image" ? (
                    <img 
                      src={awardItems[awardIndex].src} 
                      alt={`Award ${awardIndex + 1}`} 
                      className="awardNewsImg" 
                      style={{ ...s.awardNewsImg, maxHeight: 340, width: "100%", height: "100%", objectFit: "cover", transform: "scale(1.05)", clipPath: "inset(2%)" }} 
                    />
                  ) : (
                    <iframe 
                      width="100%" 
                      height="100%" 
                      style={{ borderRadius: 8, minHeight: 340 }}
                      src={awardItems[awardIndex].src} 
                      title="YouTube video player" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                    ></iframe>
                  )}
                </div>
                <span className="awardsArrow" style={s.awardsArrow} onClick={handleNext}>&rarr;</span>
              </div>
              
              <div style={{ position: "absolute", bottom: -70, left: 0, width: "100%", textAlign: "center" }}>
                <a 
                  href="https://drive.google.com/file/d/1i5OhCQiNvw6z9-Fv69cHAv3WJo-8vpJI/view" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="awardsBtn" 
                  style={{ ...s.awardsBtn, width: "max-content", textDecoration: "none", display: "inline-block" }}
                >
                  SEE ALL AWARDS &amp; RECOGNITIONS
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

          </>
  );
}