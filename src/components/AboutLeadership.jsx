import React, { useState, useEffect } from "react";
import { s } from "../styles";
import { motion } from "framer-motion";

export default function AboutLeadership() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1200);
    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const team = [
    {
      name: "Mr. Subodh Kumar Banerjee",
      role: "Senior Director",
      img: "leader-1.jpg",
      align: "left",
      desc: [
        "An Accomplished Electrical Engineering Technocrat, Mr. Subodh Kumar Banerjee Combines Deep Technical Expertise With A Strong Understanding Of Business And Operational Management. He Is Passionate About Factory Management Systems, Operational Excellence And Driving Continuous Improvement Across The Organization.",
        "A Hands-On Leader Who Leads By Example, Mr. Banerjee Is Known For His Approachable Personality And Ability To Inspire Teams Across All Levels - From Senior Executives To Skilled Shop-Floor Professionals. His Balanced Focus On Technology, People, And Business Growth Continues To Strengthen BMC's Culture Of Excellence And Innovation."
      ]
    },
    {
      name: "Mr. Rajiv Bhargava",
      role: "Senior Technical Director",
      img: "leader-2.jpg",
      align: "right",
      desc: [
        "A Mechanical Engineer With Over Three And A Half Decades Of Distinguished Experience In The Switchgear Industry, Mr. Rajiv Bhargava Leads BMC Electroplast's Design & Development Function, Acclaimed For His Deep Expertise In Circuit Breakers And Medium-Voltage Switchgear Systems, He Has Played A Pivotal Role In The Design, Development, And Prototype Validation Of Innovative Products And Solutions.",
        "As The Driving Force Behind BMC's Engineering Excellence, Mr. Bhargava Combines Technical Authority With A Passion For Innovation, Ensuring That Every New Development Meets The Highest Standards Of Performance, Reliability, And Safety. His Vast Industry Knowledge And Leadership Continue To Serve As The Backbone Of BMC's Product Development And Technological Advancement."
      ]
    },
    {
      name: "Mr. Siddhartha Mitra",
      role: "Senior Director",
      img: "leader-3.jpg",
      align: "left",
      desc: [
        "An Electrical Engineer With A Strong Passion For Innovation And Operational Excellence, Mr. Siddhartha Mitra Has Been Instrumental In Modernizing BMC's Manufacturing Ecosystem Through The Adoption Of Advanced Production Systems And World Class Quality, Process, And Environmental Standards. His Leadership Has Played A Key Role In Securing And Executing International Transfers And Turn-Key (MOU) Projects & Orders Of Continuous Improvement.",
        "Known For His Expertise In Epoxy Systems, Mr. Mitra Brings Together Data-Driven Decision-Making, Valuable Market Insights, And Practical Business Acumen To Guide Strategic Initiatives. His Adaptive Thinking, Flexibility, And Forward-Looking Vision Continue To Drive BMC's Expansion Into Emerging Markets And New Growth Opportunities, Positioning The Company For Sustained Success In A Rapidly Evolving Industry."
      ]
    },
    {
      name: "Mr. Girish Magre",
      role: "R&D Director",
      img: "leader-4.jpg",
      align: "right",
      desc: [
        "Mr. Girish Magre Is An Accomplished Engineer And Vacuum Technology Specialist Who Has Played A Key Role In BMC's Technological Growth And Innovation. He Established BMC's Advanced Manufacturing And R&D Facility In Aurangabad And Led The Development Of Indigenous Vacuum Interrupters And Vacuum Contactor Technologies. Under His Leadership, BMC Aurangabad Became The First MSME In India To Receive DSIR Recognition As An Approved R&D Centre For Medium-Voltage Switchgear. His Expertise And Global Vision Have Strengthened BMC's Position As A Trusted Technology Partner In India And International Markets."
      ]
    },
    {
      name: "Mr. Samrat Banerjee",
      role: "Head - Operational Excellence",
      img: "leader-5.jpg",
      align: "left",
      desc: [
        "Mr. Samrat Banerjee, A Production Engineer And MBA, He Is A Second-Generation Leader At BMC Electroplast. Drives Operational Excellence Through Lean Manufacturing, Process Optimization, And Data-Driven Management. He Is Committed To Continuous Improvement And Works Closely With Team Members, Suppliers And Partners To Strengthen The Entire Value Chain, Enhancing Quality, Efficiency, And Long-Term Collaborative Value Building, A Resilient And Future-Ready Organization."
      ]
    },
    {
      name: "Mr. Saptarshi Mitra",
      role: "Head - Strategic Initiatives",
      img: "leader-6.jpg",
      align: "right",
      desc: [
        "Mr. Saptarshi Mitra, An Applied Electronics & Instrumentation Engineer, Represents The Next Generation Of Leadership At BMC Electroplast. As Head Of Business Development, He Combines Technical Expertise With A Forward-Looking Vision, Driving Industry 4.0 Initiatives And Propelling The Organization Through Smart Manufacturing And Digital Transformation. He Is Committed To Building Strategic Partnerships, Strengthening Resilient Supply Chains, And Positioning BMC As A Trusted Technology And Manufacturing Partner, While Fostering A Culture Of Innovation, Inclusivity, And Employee Well-Being."
      ]
    }
  ];

  return (
    <section className="aboutLeadSection" style={s.aboutLeadSection}>
      {/* Background Pattern Placeholders */}
      <img src="/images/leadership-bg-left.jpg" alt="Left Pattern" className="aboutLeadBgLeft" style={s.aboutLeadBgLeft} />
      <img src="/images/leadership-bg-right.jpg" alt="Right Pattern" className="aboutLeadBgRight" style={s.aboutLeadBgRight} />

      <div className="aboutLeadInner" style={s.aboutLeadInner}>
        <motion.h2 
          className="aboutLeadTitle" 
          style={s.aboutLeadTitle}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2 }}
        >
          MEET OUR LEADERSHIP TEAM
        </motion.h2>
        <motion.p 
          className="aboutLeadSubtitle" 
          style={s.aboutLeadSubtitle}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, delay: 0.1 }}
        >
          Meet the dedicated team of professionals and engineers working together to deliver<br/>
          innovation, quality, and reliability across all our product lines and services.
        </motion.p>

        <div className="aboutLeadContainer" style={s.aboutLeadContainer}>
          {team.map((member, i) => {
            const isLeft = member.align === "left";
            return (
              <motion.div 
                key={i} 
                className="aboutLeadItemWrap"
                style={{ ...s.aboutLeadItemWrap, flexDirection: isLeft ? "row" : "row-reverse", cursor: "pointer" }}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, delay: i * 0.1, ease: "easeInOut"}}
                whileHover={{ }}
              >
                
                {/* Photo */}
                <div className="aboutLeadImgWrap" style={{ ...s.aboutLeadImgWrap, ...(member.name === "Mr. Girish Magre" ? { transform: "translateX(30px)" } : {}) }}>
                  <img src={`/images/${member.img}`} onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder.jpg' }} alt={member.name} className="aboutLeadImg" style={s.aboutLeadImg} />
                </div>

                {/* Text Box */}
                <div className="aboutLeadTextWrap" style={{ ...s.aboutLeadTextWrap, ...(isLeft ? s.aboutLeadTextWrapLeft : s.aboutLeadTextWrapRight) }}>
                  <div className={isLeft ? "aboutLeadHeaderLeft" : "aboutLeadHeaderRight"} style={isLeft ? s.aboutLeadHeaderLeft : s.aboutLeadHeaderRight}>
                    <h3 className="aboutLeadName" style={s.aboutLeadName}>{member.name}</h3>
                    <p className="aboutLeadRole" style={s.aboutLeadRole}>{member.role}</p>
                  </div>
                  <div className="aboutLeadDescWrap" style={s.aboutLeadDescWrap}>
                    {member.desc.map((para, j) => (
                      <p key={j} className="aboutLeadDesc" style={s.aboutLeadDesc}>{para}</p>
                    ))}
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
