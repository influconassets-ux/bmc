import React from "react";
import { s } from "../styles";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemAnim = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeInOut"} }
};

export default function TestProducts() {
  return (
    <section className="testProdSection" style={s.testProdSection}>
      <div className="testProdInner" style={s.testProdInner}>
        <motion.p 
          className="testProdIntro" 
          style={s.testProdIntro}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2 }}
        >
          Representatives as "Technical/Marketing Consultants" for a High-Power Lab in Korea, a Vacuum Furnace Manufacturer from Germany, and a<br />
          Component Manufacturer for VI (Single-Window Solution for Vacuum Switchgear).
        </motion.p>

        <motion.div 
          className="testProdGrid" 
          style={s.testProdGrid}
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Product 1 */}
          <motion.div variants={itemAnim} whileHover={{ }} className="testProdCard" style={s.testProdCard}>
            <img src="/images/test-product-1.jpg" onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder.jpg' }} alt="Product 1" className="testProdImg" style={{ ...s.testProdImg, borderRadius: "16px" }} />
            <p className="testProdText" style={s.testProdText}>
              Glass Transition Temperature(Tg) Analysis For Insulation (Resin)<br />Health Monitoring
            </p>
          </motion.div>
          {/* Product 2 */}
          <motion.div variants={itemAnim} whileHover={{ }} className="testProdCard" style={s.testProdCard}>
            <img src="/images/test-product-2.jpg" onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder.jpg' }} alt="Product 2" className="testProdImg" style={{ ...s.testProdImg, borderRadius: "16px" }} />
            <p className="testProdText" style={s.testProdText}>
              Cut- Through Tester, Abrasion Tester, HV Pin Hole Tester For Conductor<br />(Super Enamelled Wire) Health Monitoring
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
