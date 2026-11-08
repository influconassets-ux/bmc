import React from "react";
import { s } from "../styles";
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <div className="aboutHero" style={s.aboutHero}>
       <div className="aboutHeroOverlay" style={s.aboutHeroOverlay}></div>
       <div className="aboutHeroInner" style={s.aboutHeroInner}>
         <motion.h1 
           className="aboutHeroTitle" 
           style={s.aboutHeroTitle}
           initial={{ opacity: 0, y: 15 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1.2, ease: "easeInOut" }}
         >
           ABOUT US
         </motion.h1>
       </div>
    </div>
  );
}
