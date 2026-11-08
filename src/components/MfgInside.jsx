import React from "react";
import { s } from "../styles";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemAnim = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeInOut"} }
};

export default function MfgInside() {
  const images = [
    { title: "Moulding & Casting Bay", img: "mfg-inside-1.jpg" },
    { title: "Administrative Section", img: "mfg-inside-2.jpg" },
    { title: "Assembly And Testing Bay", img: "mfg-inside-3.jpg" },
    { title: "Automatic Pressure Gelation (APG)\nCasting Facility", img: "mfg-inside-4.jpg" },
    { title: "CT & PT Winding Bay", img: "mfg-inside-5.jpg" },
    { title: "Vacuum Casting Facility", img: "mfg-inside-6.jpg" },
    { title: "Engineering Division", img: "mfg-inside-7.jpg" },
    { title: "Office Lobby", img: "mfg-inside-8.jpg" },
    { title: "Open Space", img: "mfg-inside-9.jpg" },
  ];

  return (
    <section className="mfgInsideSection" style={s.mfgInsideSection}>
      <motion.h2 
        className="mfgInsideTitle" 
        style={s.mfgInsideTitle}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2 }}
      >
        Inside Our Facility
      </motion.h2>
      <motion.div 
        className="mfgGrid" 
        style={s.mfgGrid}
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {images.map((item, i) => (
          <motion.div variants={itemAnim} key={i} className="mfgGridItem" style={s.mfgGridItem} whileHover={{ }}>
            <div className="mfgGridImgWrap" style={s.mfgGridImgWrap}>
               {/* Use a placeholder image if not found */}
               <img src={`/images/${item.img}`} onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder.jpg' }} alt={item.title} className="mfgGridImg" style={s.mfgGridImg} />
            </div>
            <p className="mfgGridText" style={s.mfgGridText}>{item.title}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
