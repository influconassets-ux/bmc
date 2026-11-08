import React, { useState } from "react";
import { s } from "../styles";
import { motion, AnimatePresence } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  },
  exit: {
    opacity: 0,
    transition: { staggerChildren: 0.05 }
  }
};

const itemAnim = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.2, ease: "easeInOut"} },
  exit: { opacity: 0 }
};

export default function AboutPartners() {
  const [activeCategory, setActiveCategory] = useState("Government Entities");

  const categories = [
    "Government Entities",
    "Private Entities",
    "Overseas Entities & Partners",
    "Sectors With Our Presence"
  ];

  // Data for Government Entities (as per screenshot)
  const govEntities = [
    { name: "Oil and Natural Gas Corporation", img: "logo-ongc.png" },
    { name: "Steel Authority of India Ltd.", img: "logo-sail.png" },
    { name: "Kolkata Metro", img: "logo-kolkata-metro.png" },
    { name: "Central Public Works Department", img: "logo-cpwd.png" },
    { name: "Power And Electricity Dept. Of Mizoram", img: "logo-mizoram.png" },
    { name: "Odisha Power Generation Corp.", img: "logo-odisha.png" },
    { name: "Bharat Heavy Electricals Ltd.", img: "logo-bhel.png" },
    { name: "Diesel Locomotive Works", img: "logo-dlw.png" },
    { name: "Indian Oil", img: "logo-indianoil.png" },
    { name: "Ordnance Factory Khamaria", img: "logo-ordnance.png" },
    { name: "West Bengal State Electricity Distribution Company Ltd.", img: "logo-wbsedcl.png" },
    { name: "Bombay Suburban Electric Supply", img: "logo-bses.png" },
    { name: "Gujarat State Electricity Corp. Ltd.", img: "logo-gujarat.png" },
    { name: "National Thermal Power Corporation Ltd.", img: "logo-ntpc.png" },
    { name: "Military Engineering Services", img: "logo-mes.png" },
    { name: "Indian Railways", img: "logo-railways.png" },
    { name: "West Bengal State Electricity Transmission Company Ltd.", img: "logo-wbsetcl.png" },
    { name: "Odisha Industrial Infrastructure Development Corporation", img: "logo-idco.png" }
  ];

  const privateEntities = [
    { name: "Robert Bosch GmbH.", img: "logo-bosch.png" },
    { name: "Exide", img: "logo-exide.png" },
    { name: "Jindal South West.", img: "logo-jsw.png" },
    { name: "India Power", img: "logo-india-power.png" },
    { name: "Skipperseil", img: "logo-skipperseil.png" },
    { name: "Grindwell Norton Ltd.", img: "logo-grindwell.png" },
    { name: "Simaru", img: "logo-simaru.png" },
    { name: "Tokyo Denki Kagaku Kōgyō.", img: "logo-tdk.png" },
    { name: "Pascal Switchcare", img: "logo-pascal.png" },
    { name: "Shreem Electric Ltd.", img: "logo-shreem.png" },
    { name: "Vijai Electricals Ltd.", img: "logo-vijai.png" },
    { name: "ERG", img: "logo-erg.png" },
    { name: "Larsen & Toubro Ltd.", img: "logo-lt.png" },
    { name: "Power Control Electro Systems", img: "logo-power-control.png" },
    { name: "Crompton Greaves", img: "logo-crompton.png" },
    { name: "Toshiba", img: "logo-toshiba.png" },
    { name: "Electronic Parts and COmponentS.", img: "logo-epcos.png" },
    { name: "Easun Reyrolle", img: "logo-easun.png" },
    { name: "Meditron", img: "logo-meditron.png" },
    { name: "Stelmec Ltd.", img: "logo-stelmec.png" },
    { name: "Jyoti Ltd.", img: "logo-jyoti.png" },
    { name: "Myrath", img: "logo-myrath.png" },
    { name: "Suzlon Energy Ltd.", img: "logo-suzlon.png" },
    { name: "Rashmi Group", img: "logo-rashmi.png" },
    { name: "Schneider Electric SE.", img: "logo-schneider.png" },
    { name: "TP Central Odisha Distribution Ltd.", img: "logo-tp-central.png" },
    { name: "Truvolt Engineering Company Private Ltd.", img: "logo-truvolt.png" },
    { name: "Yamuna Power And Infrastructure", img: "logo-yamuna.png" },
    { name: "Mine Line", img: "logo-mine-line.png" },
    { name: "Kirloskar", img: "logo-kirloskar.png" },
    { name: "Greenko", img: "logo-greenko.png" },
    { name: "Rungta Group", img: "logo-rungta.png" },
    { name: "Pommier", img: "logo-pommier.png" },
    { name: "Iskcon", img: "logo-iskcon.png" },
    { name: "Electrotekhnika Engineering Pvt. Ltd.", img: "logo-electrotekhnika.png" },
    { name: "Century", img: "logo-century.png" },
    { name: "Orissa Metalliks", img: "logo-orissa.png" }
  ];

  const overseasEntities = [
    { name: "Tamco Malaysia", img: "logo-tamco-malaysia.png" },
    { name: "Tamco Middle East", img: "logo-tamco-me.png" },
    { name: "ABM Ukraine", img: "logo-abm.png" },
    { name: "Betbunia Satellite Earth Station Bangladesh", img: "logo-betbunia.png" },
    { name: "Shaanxi Baoguang China", img: "logo-shaanxi.png" },
    { name: "Druk Green. Bhutan", img: "logo-druk.png" },
    { name: "Staig Germany", img: "logo-staig.png" },
    { name: "Johnson Philips Dubai", img: "logo-johnson.png" },
    { name: "Group Cahores France", img: "logo-group-cahores.png" },
    { name: "Batel Turkey", img: "logo-batel.png" },
    { name: "Keri Lab Korea", img: "logo-keri.png" },
    { name: "Sirui China", img: "logo-sirui.png" },
    { name: "Seven Star China", img: "logo-seven-star.png" },
    { name: "Southern States LLC USA", img: "logo-southern-states.png" },
    { name: "Ormazabal Spain", img: "logo-ormazabal.png" },
    { name: "Border Guard Bangladesh", img: "logo-border-guard.png" },
    { name: "Lucas Milhaupt USA", img: "logo-lucas.png" },
    { name: "PVA TEPLA Germany", img: "logo-pva.png" },
    { name: "KEPLIC. Kuwait", img: "logo-keplic.png" }
  ];

  const getActiveData = () => {
    switch(activeCategory) {
      case "Government Entities": return govEntities;
      case "Private Entities": return privateEntities;
      case "Overseas Entities & Partners": return overseasEntities;
      default: return [];
    }
  };

  const activeData = getActiveData();

  return (
    <section className="aboutPartSection" style={s.aboutPartSection} id="clients">
      <div className="aboutPartInner" style={s.aboutPartInner}>
        
        {/* Left Sidebar */}
        <div className="aboutPartSidebar" style={s.aboutPartSidebar}>
          <h2 className="aboutPartMainTitle" style={s.aboutPartMainTitle}>TRUSTED PARTNERS,<br/>CLIENTS & END USERS</h2>
          <h3 className="aboutPartCatTitle" style={s.aboutPartCatTitle}>CATEGORY</h3>
          <div className="aboutPartTabList" style={s.aboutPartTabList}>
            {categories.map((cat) => (
              <div 
                key={cat} 
                style={activeCategory === cat ? { ...s.aboutPartTab, ...s.aboutPartTabActive } : s.aboutPartTab}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </div>
            ))}
          </div>
        </div>

        {/* Right Content */}
        <div className="aboutPartContent" style={s.aboutPartContent}>
          <h3 className="aboutPartContentTitle" style={s.aboutPartContentTitle}>{activeCategory}</h3>
          
          <AnimatePresence mode="wait">
            {activeCategory === "Sectors With Our Presence" ? (
              <motion.div 
                key="sectors"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="aboutSectorsContent"
                style={s.aboutSectorsContent}
              >
                <div className="aboutSectorsBanner" style={s.aboutSectorsBanner}>
                  <img src="/images/bmc-footprint.png" alt="BMC Footprint" style={s.aboutSectorsBannerImg} />
                </div>
                <motion.div 
                  className="aboutSectorsGrid" 
                  style={s.aboutSectorsGrid}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.2 } }
                  }}
                  initial="hidden"
                  animate="visible"
                >
                  {[
                    "Petrochemicals", "Railways And Metro",
                    "Electricity Regulatory Authority", "Power Distribution",
                    "Switchgear Companies", "Aeronautics",
                    "Nuclear Power", "Cement",
                    "Defence", "Industries",
                    "Renewable Energy", "Coal",
                    "Metals & Mining", "Steel",
                    "Real Estate", "Data Centers",
                    "EV Charging Infrastructures", "Oil and Gas"
                  ].map((sector, idx) => (
                    <motion.div 
                      key={idx} 
                      className="aboutSectorItem" 
                      style={{ ...s.aboutSectorItem, cursor: "pointer" }}
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                      }}
                      whileHover={{ y: -5, scale: 1.03, boxShadow: "0 15px 35px rgba(16,47,131, 0.4)", backgroundColor: "#153a99" }}
                    >
                      <svg viewBox="0 0 24 24" style={s.aboutSectorIcon}>
                        <circle cx="12" cy="12" r="12" fill="#c4ea48"/>
                        <path d="M13 5L6 14H11L10 19L18 10H13L13 5Z" fill="#fff" />
                      </svg>
                      <span style={s.aboutSectorText}>{sector}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ) : (
              <motion.div 
                key={activeCategory}
                className="aboutPartGrid" 
                style={s.aboutPartGrid}
                variants={container}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {activeData.map((client, i) => (
                  <motion.div 
                    variants={itemAnim} 
                    whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }} 
                    key={i} 
                    className="aboutPartCard" 
                    style={{ ...s.aboutPartCard, cursor: "pointer" }}
                  >
                    <div className="aboutPartCardImgWrap" style={s.aboutPartCardImgWrap}>
                      <img 
                        src={`/images/${client.img}`} 
                        onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder.jpg' }} 
                        alt={client.name} 
                        className="aboutPartCardImg" style={s.aboutPartCardImg} 
                      />
                    </div>
                    <div className="aboutPartCardText" style={s.aboutPartCardText}>{client.name}</div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Slider Controls Removed as requested */}

        </div>

      </div>
    </section>
  );
}
