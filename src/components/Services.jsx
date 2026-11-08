import React from "react";
import { useNavigate } from "react-router-dom";
import { s } from "../styles";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeInOut"} }
};

export default function Services() {
  const navigate = useNavigate();
  return (
    <section className="servicesSection" style={s.servicesSection}>
      <div className="servicesInner" style={s.servicesInner}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <h2 className="servicesTitleCentered" style={s.servicesTitleCentered}>
            TAILOR-MADE SERVICING,<br />CRITICAL SPARES &amp; DIGITISATION
          </h2>
          <p className="servicesParaCentered" style={s.servicesParaCentered}>
            Comprehensive servicing solutions, critical spare part support, and digitisation services designed to improve equipment<br />
            reliability, operational efficiency, and long-term system performance.
          </p>
        </motion.div>

        <motion.div 
          className="servicesGrid" 
          style={s.servicesGrid}
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Card 1 */}
          <motion.div 
            className="serviceCardNew" 
            style={s.serviceCardNew}
            variants={item}
            whileHover={{ y: -15, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)" }}
          >
            <h3 className="serviceCardTitleNew" style={s.serviceCardTitleNew}>Critical Services and AMC</h3>
            <p className="serviceCardDescNew" style={s.serviceCardDescNew}>Audit &amp; Assessment</p>
            <a onClick={(e) => { e.preventDefault(); navigate('/services/amc'); }} href="/services/amc" className="serviceCardLinkWrapNew" style={s.serviceCardLinkWrapNew}>
              <span className="serviceCardLinkTextNew" style={s.serviceCardLinkTextNew}>LEARN MORE</span> <span>&rarr;</span>
            </a>
          </motion.div>
          {/* Card 2 */}
          <motion.div 
            className="serviceCardNew" 
            style={s.serviceCardNew}
            variants={item}
            whileHover={{ y: -15, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)" }}
          >
            <h3 className="serviceCardTitleNew" style={s.serviceCardTitleNew}>Digitisation &amp; Smart MRO<br />(Maintenance, Repair and<br />Overhaul) in Power Systems<br />for Sustainable Energy</h3>
            <p className="serviceCardDescNew" style={s.serviceCardDescNew}>Condition monitoring and predictive<br />maintenance of power systems</p>
            <a onClick={(e) => { e.preventDefault(); navigate('/services/digitization'); }} href="/services/digitization" className="serviceCardLinkWrapNew" style={s.serviceCardLinkWrapNew}>
              <span className="serviceCardLinkTextNew" style={s.serviceCardLinkTextNew}>LEARN MORE</span> <span>&rarr;</span>
            </a>
          </motion.div>
          {/* Card 3 */}
          <motion.div 
            className="serviceCardNew" 
            style={s.serviceCardNew}
            variants={item}
            whileHover={{ y: -15, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)" }}
          >
            <h3 className="serviceCardTitleNew" style={s.serviceCardTitleNew}>HT VCB Retrofits and Tailor&#8209;Made CT/PT Customisations</h3>
            <p className="serviceCardDescNew" style={s.serviceCardDescNew}>The Services Offered and the USPs<br />of BMC</p>
            <a onClick={(e) => { e.preventDefault(); navigate('/services/retrofit'); }} href="/services/retrofit" className="serviceCardLinkWrapNew" style={s.serviceCardLinkWrapNew}>
              <span className="serviceCardLinkTextNew" style={s.serviceCardLinkTextNew}>LEARN MORE</span> <span>&rarr;</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}