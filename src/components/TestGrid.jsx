import React from "react";
import { s } from "../styles";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemAnim = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeInOut"} }
};

export default function TestGrid() {
  const images = [
    { title: "In-House 300 kVp Lightning Impulse\nVoltage Withstand Test", img: "test-grid-1.jpg" },
    { title: "Mechanical Testing Facilities", img: "test-grid-2.jpg" },
    { title: "Complete Routine Testing Setup HT Vacuum\nSwitchgear Panels", img: "test-grid-3.jpg" },
    { title: "Circuit Breaker Analyser", img: "test-grid-4.jpg" },
    { title: "Automatic OMICRON CT Analyser &\nComplete Routine Testing for CT & PT", img: "test-grid-5.jpg" },
    { title: "In-House Partial Discharge & High-Voltage\nWithstand Test Setup (Up to 100 kV)", img: "test-grid-6.jpg" },
  ];

  return (
    <section className="testGridSection" style={s.testGridSection}>
      <div className="testGridInner" style={s.testGridInner}>
        <motion.h2 
          className="testTitle" 
          style={s.testTitle}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2 }}
        >
          ADVANCED TESTING & QUALITY ASSURANCE
        </motion.h2>
        <motion.p 
          className="testSubtitle" 
          style={s.testSubtitle}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, delay: 0.1 }}
        >
          BMC follows rigorous testing and validation processes to ensure reliability, safety, and performance across power system equipment and<br />
          components. Our testing facilities are equipped with advanced systems designed to maintain precision and quality standards.
        </motion.p>

        <motion.div 
          className="testGridContainer" 
          style={s.testGridContainer}
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {images.map((item, i) => (
            <motion.div variants={itemAnim} key={i} className="testGridItem" style={s.testGridItem}>
              <div className="testGridImgWrap" style={s.testGridImgWrap}>
                 {/* Use a placeholder image if not found */}
                 <img src={`/images/${item.img}`} onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder.jpg' }} alt={item.title} className="testGridImg" style={s.testGridImg} />
              </div>
              <p className="testGridText" style={s.testGridText}>{item.title}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
