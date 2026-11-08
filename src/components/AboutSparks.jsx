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
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 1.2, ease: "easeInOut"} }
};

export default function AboutSparks() {
  const leftItems = [
    { num: "1", text: "Pioneers in switchgear mechanism design in India" },
    { num: "2", text: "Unique low cost CSS design for windmills in India." },
    { num: "3", text: "First in Asia to offer technology of VCB/VI design to European & overseas companies." },
    { num: "4", text: "Experience of manufacturing custom built self-designed epoxy cast switchgear components" },
    { num: "5", text: "Over 25 patents/design registrations on switchgear/components of switchgear" },
    { num: "6", text: "Experience of manufacturing custom-built self-designed epoxy cast dry type instrument transformers (CTs/PTs) both for indoor & outdoor applications." },
  ];

  const rightItems = [
    { num: "7", text: "Unique compact design of MV vacuum contactors" },
    { num: "8", text: "Experience in the successful design and commissioning of over 25 VCB versions." },
    { num: "9", text: "First in India to offer technology of VCB/VI design to Indian manufacturers." },
    { num: "10", text: "Pioneers in epoxy cast vacuum interrupter (embedded poles) for vacuum contactors worldwide" },
    { num: "11", text: "BMC serves as the technical and marketing consultant for a High-Power Lab in Korea, a vacuum furnace manufacturer from Germany, and a component manufacturer for vacuum interrupters." },
  ];

  const renderItem = (item) => (
    <motion.div variants={itemAnim} key={item.num} className="aboutSparkItem" style={s.aboutSparkItem}>
      <div className="aboutSparkNum" style={s.aboutSparkNum}>{item.num}</div>
      <p className="aboutSparkText" style={s.aboutSparkText}>{item.text}</p>
    </motion.div>
  );

  return (
    <section className="aboutSparksSection" style={s.aboutSparksSection}>
      <div className="aboutSparksInner" style={s.aboutSparksInner}>
        <motion.h2 
          className="aboutSparksTitle" 
          style={s.aboutSparksTitle}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2 }}
        >
          SPARKS OF EXCELLENCE AT BMC
        </motion.h2>
        <motion.p 
          className="aboutSparksSubtitle" 
          style={s.aboutSparksSubtitle}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, delay: 0.1 }}
        >
          BMC Electroplast has established itself as a technology and manufacturing center for power systems equipment<br />
          such as medium-voltage switchgear, instrument transformers, and various cast resin components.
        </motion.p>

        <div className="aboutSparksGrid" style={s.aboutSparksGrid}>
          <motion.div 
            className="aboutSparksCol" 
            style={s.aboutSparksCol}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {leftItems.map(renderItem)}
          </motion.div>
          <motion.div 
            className="aboutSparksCol" 
            style={s.aboutSparksCol}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {rightItems.map(renderItem)}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
