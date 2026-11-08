import React from "react";
import { s } from "../styles";
import { motion } from "framer-motion";

export default function FounderMessage() {
  return (
    <>
      {/* ================= A MESSAGE FROM OUR FOUNDER ================= */}
      <section className="founder" style={s.founder}>
        <div className="founderInner" style={s.founderInner}>
          <div className="founderTop" style={s.founderTop}>
            <motion.div
              className="founderLeft"
              style={s.founderLeft}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            >
              <h2 className="founderTitle" style={s.founderTitle}>A MESSAGE FROM OUR LATE FOUNDER, AND <br className="desktopBreak" /> A VISIONARY ENGINEER: MR. SANTANU MITRA</h2>
              <p className="founderSub" style={s.founderSub}>An Innovator and Technical Entrepreneur, Loved and Respected by All</p>

              <div className="quoteSection" style={s.quoteSection}>
                <div className="quoteMarkWrap" style={s.quoteMarkWrap}>
                  <img src="/images/quote-icon.png" alt="Quote" className="quoteMarkImg" style={s.quoteMarkImg} />
                </div>
                <div className="quoteContent" style={s.quoteContent}>
                  <h4 className="visionHeading" style={s.visionHeading}>A Vision of Excellence, Innovation, and Customer-Centricity</h4>
                  <p className="founderPara" style={s.founderPara}>At BMC Electroplast Pvt. Ltd., our journey has always been guided by a simple yet powerful vision: to build an organization that stands as a &ldquo;House of Excellence in Switchgear Solutions.&rdquo;</p>
                  <p className="founderPara" style={s.founderPara}>When I founded BMC, I believed that customers deserved more than just products; they deserved a trusted partner capable of providing reliable, innovative, and comprehensive solutions for their electrical protection and control needs. My aspiration was to make BMC a &ldquo;One-Stop Destination for Switchgear Solutions,&rdquo; where quality, innovation, and customer satisfaction would form the foundation of everything we do.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="founderPhotoWrap"
              style={s.founderPhotoWrap}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            >
              <img src="/images/founder.jpg" alt="Mr. Santanu Mitra" className="founderPhoto" style={s.founderPhoto} />
            </motion.div>
          </div>

          <div className="founderBottom" style={s.founderBottom}>
            <p className="founderPara" style={s.founderPara}>To achieve this, we committed ourselves to continuous research and development, uncompromising quality standards, and optimized manufacturing processes. We constantly sought to understand the real challenges faced by our customers and develop products that not only meet technical specifications but also solve practical problems in the field. Every solution was designed to deliver dependable performance, even in the most demanding and robust operating environments.</p>
            <p className="founderPara" style={s.founderPara}>I firmly believed that excellence is not a destination but a continuous pursuit. It is achieved through innovation, discipline, and a relentless focus on improvement. This philosophy has shaped BMC&rsquo;s culture and remains at the heart of the organization today.</p>
            <p className="founderPara" style={s.founderPara}>As BMC moves forward, I hope the company continues to uphold these values, driving innovation, maintaining the highest standards of quality, and creating solutions that empower customers and contribute to industrial progress.</p>
            <p className="founderClosing" style={s.founderClosing}>Let excellence be our benchmark, innovation our strength, and customer success our ultimate achievement.</p>
          </div>

          <div className="signature" style={s.signature}>
            <div className="sigName" style={s.sigName}>&mdash; MR. SANTANU MITRA</div>
            <div className="sigRole" style={s.sigRole}>Founder, BMC Electroplast Pvt. Ltd.</div>
          </div>
        </div>
      </section>

    </>
  );
}