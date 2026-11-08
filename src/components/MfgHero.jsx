import React from "react";
import { s } from "../styles";
import { motion } from "framer-motion";

export default function MfgHero() {
  return (
    <div className="servicesHero" style={s.servicesHero}>
       <div className="servicesHeroOverlay" style={s.servicesHeroOverlay}></div>
       <div className="servicesHeroInner" style={s.servicesHeroInner}>
         <motion.h1 
           className="servicesHeroTitle" 
           style={s.servicesHeroTitle}
           initial={{ opacity: 0, y: 15 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1.2, ease: "easeInOut" }}
         >
           MANUFACTURING FACILITIES
         </motion.h1>
       </div>
    </div>
  );
}
