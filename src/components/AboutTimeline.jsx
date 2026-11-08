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

export default function AboutTimeline() {
  const data = [
    { 
      year: "1986-87", 
      text: "Beginning of BMC at Kolkata, WB, India with epoxy cast slip ring assembly for HT motors and post insulators",
      icon: <svg viewBox="0 0 24 24" fill="#fff" style={{ width: 28, height: 28 }}><path d="M12.5 10c0-1.65-1.35-3-3-3s-3 1.35-3 3 1.35 3 3 3 3-1.35 3-3zm-3 1c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm6.5 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
    },
    { 
      year: "1988-89", 
      text: "Support subsidiaries of organizations from United Kingdom for MV switchgear modules",
      icon: <svg viewBox="0 0 24 24" fill="#fff" style={{ width: 28, height: 28 }}><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
    },
    { 
      year: "1991-92", 
      text: "Resin cast bushings for MV applications",
      icon: <svg viewBox="0 0 24 24" fill="#fff" style={{ width: 28, height: 28 }}><path d="M12 2L2 7l10 5 10-5-10-5zm0 14.5l-10-5V14l10 5 10-5v-2.5l-10 5z"/></svg>
    },
    { 
      year: "1992-93", 
      text: "Development of resin cast current transformers for MV applications",
      icon: <svg viewBox="0 0 24 24" fill="#fff" style={{ width: 28, height: 28 }}><path d="M19 13H5v-2h14v2zM17 9H7V7h10v2zm4-6H3v2h18V3zm-6 10h-6v2h6v-2z"/></svg>
    },
    { 
      year: "1994-95", 
      text: "MV Resin Cast ... Oil Circuit ... (BOC...)",
      icon: <svg viewBox="0 0 24 24" fill="#fff" style={{ width: 28, height: 28 }}><path d="M21 11V9h-2V7c0-1.1-.9-2-2-2h-2V3h-2v2h-2V3H9v2H7c-1.1 0-2 .9-2 2v2H3v2h2v2H3v2h2v2c0 1.1.9 2 2 2h2v2h2v-2h2v2h2v-2h2c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2zm-4 4H7V7h10v8z"/></svg>
    },
  ];

  return (
    <section className="aboutTimeSection" style={s.aboutTimeSection}>
      <div className="aboutTimeInner" style={s.aboutTimeInner}>
        
        <motion.h2 
          className="aboutTimeTitle" 
          style={s.aboutTimeTitle}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2 }}
        >
          <span className="aboutTimeTitleBold" style={s.aboutTimeTitleBold}>FOUR DECADES</span> OF INNOVATION<br/>
          POWERING <span className="aboutTimeTitleBold" style={s.aboutTimeTitleBold}>MODERN INFRASTRUCTURE</span>
        </motion.h2>
        
        <div className="aboutTimeWrap" style={s.aboutTimeWrap}>
          {/* Dashed Horizontal Line */}
          <div className="aboutTimeAxis" style={s.aboutTimeAxis}></div>
          
          <motion.div 
            className="aboutTimeTrack" 
            style={s.aboutTimeTrack}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {data.map((item, i) => (
              <motion.div variants={itemAnim} key={i} className="aboutTimeNode" style={s.aboutTimeNode}>
                
                {/* Year and Dot on the axis */}
                <div className="aboutTimeYearWrap" style={s.aboutTimeYearWrap}>
                  <span className="aboutTimeYear" style={s.aboutTimeYear}>{item.year}</span>
                  <div className="aboutTimeDot" style={s.aboutTimeDot}></div>
                </div>
                
                {/* Vertical connecting line */}
                <div className="aboutTimeLine" style={s.aboutTimeLine}></div>
                
                {/* Bottom Icon and Text content */}
                <div className="aboutTimeContent" style={s.aboutTimeContent}>
                  <div className="aboutTimeIcon" style={s.aboutTimeIcon}>
                    {item.icon}
                  </div>
                  <p className="aboutTimeText" style={s.aboutTimeText}>{item.text}</p>
                </div>
                
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Right Controls */}
        <div className="aboutTimeControls" style={s.aboutTimeControls}>
          <span className="facSliderArrow" style={s.facSliderArrow}>&#8592;</span>
          <div className="facSliderBar" style={s.facSliderBar}>
            <div className="facSliderProgress" style={s.facSliderProgress}></div>
          </div>
          <span className="facSliderArrow" style={s.facSliderArrow}>&#8594;</span>
        </div>

      </div>
    </section>
  );
}
