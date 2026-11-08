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
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeInOut"} }
};

export default function CareersWhy() {
  return (
    <section className="careersWhySection" style={s.careersWhySection}>
      <div className="careersWhyTop" style={s.careersWhyTop}>
        <motion.div 
          className="careersWhyLeft" 
          style={s.careersWhyLeft}
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2 }}
        >
          <div className="careersWhyLabelWrap" style={s.careersWhyLabelWrap}>
            <span className="careersWhyLabelText" style={s.careersWhyLabelText}>WHY JOIN US</span>
            <div className="careersWhyLabelLine" style={s.careersWhyLabelLine}></div>
          </div>
          <h2 className="careersWhyTitle" style={s.careersWhyTitle}>
            WHY BUILD YOUR CAREER <span className="careersWhyTitleBold" style={s.careersWhyTitleBold}>WITH<br/>BMC ELECTROPLAST</span>
          </h2>
        </motion.div>
        <motion.div 
          className="careersWhyRight" 
          style={s.careersWhyRight}
          initial={{ opacity: 0, x: 15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2 }}
        >
          At BMC Electroplast, We Believe Great Engineering Starts With Great People. We Provide An Environment Where Talent Is Nurtured, Innovation Is Encouraged, And Professional Growth Is Supported At Every Stage. Work On Meaningful Projects, Gain Hands-On Industry Experience, And Grow Alongside A Team Committed To Engineering Excellence.
        </motion.div>
      </div>

      <motion.div 
        className="careersWhyGrid" 
        style={s.careersWhyGrid}
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Item 1 */}
        <motion.div variants={itemAnim} className="careersWhyCard" style={s.careersWhyCard}>
          <svg className="careersWhyIcon" style={s.careersWhyIcon} viewBox="0 0 24 24"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/></svg>
          <h3 className="careersWhyCardTitle" style={s.careersWhyCardTitle}>Career Growth</h3>
          <p className="careersWhyCardDesc" style={s.careersWhyCardDesc}>Accelerate Your Professional Journey In An Environment That Actively Promotes From Within And Rewards Initiative.</p>
        </motion.div>

        {/* Item 2 */}
        <motion.div variants={itemAnim} className="careersWhyCard" style={s.careersWhyCard}>
          <svg className="careersWhyIcon" style={s.careersWhyIcon} viewBox="0 0 24 24"><path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>
          <h3 className="careersWhyCardTitle" style={s.careersWhyCardTitle}>Learning & Development</h3>
          <p className="careersWhyCardDesc" style={s.careersWhyCardDesc}>Engage Directly With State-Of-The-Art Manufacturing Processes And Pioneer Solutions In Medium-Voltage Engineering.</p>
        </motion.div>

        {/* Item 3 */}
        <motion.div variants={itemAnim} className="careersWhyCard" style={s.careersWhyCard}>
          <svg className="careersWhyIcon" style={s.careersWhyIcon} viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
          <h3 className="careersWhyCardTitle" style={s.careersWhyCardTitle}>Collaborative Culture</h3>
          <p className="careersWhyCardDesc" style={s.careersWhyCardDesc}>Thrive In A Tight-Knit Workplace Where Expert Engineers And Technicians Freely Share Knowledge To Achieve Collective Success.</p>
        </motion.div>
      </motion.div>
    </section>
  );
}
