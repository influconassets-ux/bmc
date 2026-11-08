import React from "react";
import { useNavigate } from "react-router-dom";
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
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeInOut" } }
};

export default function ConsultancyWhatWeDo() {
  const navigate = useNavigate();
  return (
    <section className="whatWeDoSection" style={s.whatWeDoSection}>
      <motion.h2
        className="whatWeDoTitle"
        style={s.whatWeDoTitle}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2 }}
      >
        WHAT WE DO
      </motion.h2>
      <div className="whatWeDoContainer" style={s.whatWeDoContainer}>
        {/* Row 1: 5 items */}
        <motion.div
          className="whatWeDoRow5"
          style={s.whatWeDoRow5}
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            variants={itemAnim}

            className="whatWeDoItem"
            style={{ ...s.whatWeDoItem, display: 'flex', flexDirection: 'column' }}
          >
            <img src="/images/consult-icon-1.jpg" alt="Icon 1" className="whatWeDoIcon" style={s.whatWeDoIcon} onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder.jpg' }} />
            <p className="whatWeDoText" style={{ ...s.whatWeDoText, flexGrow: 1 }}>Technology Transfer &amp;<br />Switchgear Manufacturing Plant<br />Setup Consultancy</p>
          </motion.div>
          <motion.div
            variants={itemAnim}

            className="whatWeDoItem"
            style={{ ...s.whatWeDoItem, display: 'flex', flexDirection: 'column' }}
          >
            <img src="/images/consult-icon-2.jpg" alt="Icon 2" className="whatWeDoIcon" style={s.whatWeDoIcon} onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder.jpg' }} />
            <p className="whatWeDoText" style={{ ...s.whatWeDoText, flexGrow: 1 }}>Specialised Consultancy Wing<br />for Technology and<br />Manufacturing Solutions of<br />Vacuum Interrupters</p>
          </motion.div>
          <motion.div variants={itemAnim} className="whatWeDoItem" style={s.whatWeDoItem}>
            <img src="/images/consult-icon-3.jpg" alt="Icon 3" className="whatWeDoIcon" style={s.whatWeDoIcon} onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder.jpg' }} />
            <p className="whatWeDoText" style={s.whatWeDoText}>OEM Manufacturing &amp; Solutions<br />of Instrument Transformers<br />&ndash; CT/PT</p>
          </motion.div>
          <motion.div variants={itemAnim} className="whatWeDoItem" style={s.whatWeDoItem}>
            <img src="/images/consult-icon-4.jpg" alt="Icon 4" className="whatWeDoIcon" style={s.whatWeDoIcon} onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder.jpg' }} />
            <p className="whatWeDoText" style={s.whatWeDoText}>Manufacturing &amp; Solutions of<br />Switchgear &ndash; Vacuum Circuit<br />Breakers and Vacuum<br />Contactors</p>
          </motion.div>
          <motion.div variants={itemAnim} className="whatWeDoItem" style={s.whatWeDoItem}>
            <img src="/images/consult-icon-5.jpg" alt="Icon 5" className="whatWeDoIcon" style={s.whatWeDoIcon} onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder.jpg' }} />
            <p className="whatWeDoText" style={s.whatWeDoText}>Manufacturing &amp; Solutions of<br />Cast Resin Components and<br />Sub-Assemblies</p>
          </motion.div>
        </motion.div>

        {/* Row 2: 4 items */}
        <motion.div
          className="whatWeDoRow4"
          style={s.whatWeDoRow4}
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemAnim} className="whatWeDoItem" style={s.whatWeDoItem}>
            <img src="/images/consult-icon-6.jpg" alt="Icon 6" className="whatWeDoIcon" style={s.whatWeDoIcon} onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder.jpg' }} />
            <p className="whatWeDoText" style={s.whatWeDoText}>Digitisation &amp; Smart MRO<br />(Maintenance, Repair and<br />Overhaul) in Power Systems<br />for Sustainable Energy</p>
          </motion.div>
          <motion.div variants={itemAnim} className="whatWeDoItem" style={s.whatWeDoItem}>
            <img src="/images/consult-icon-7.jpg" alt="Icon 7" className="whatWeDoIcon" style={s.whatWeDoIcon} onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder.jpg' }} />
            <p className="whatWeDoText" style={s.whatWeDoText}>Advanced Partner with a Global<br />MNC as a Core Component Panel<br />Builder</p>
          </motion.div>
          <motion.div variants={itemAnim} className="whatWeDoItem" style={s.whatWeDoItem}>
            <img src="/images/consult-icon-8.jpg" alt="Icon 8" className="whatWeDoIcon" style={s.whatWeDoIcon} onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder.jpg' }} />
            <p className="whatWeDoText" style={s.whatWeDoText}>Critical Services and AMC</p>
          </motion.div>
          <motion.div variants={itemAnim} className="whatWeDoItem" style={s.whatWeDoItem}>
            <img src="/images/consult-icon-9.jpg" alt="Icon 9" className="whatWeDoIcon" style={s.whatWeDoIcon} onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder.jpg' }} />
            <p className="whatWeDoText" style={s.whatWeDoText}>HT VCB Retrofits and Tailor-Made<br />CT/PT Customisations</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
