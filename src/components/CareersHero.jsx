import React from "react";
import { s } from "../styles";
import { motion } from "framer-motion";

export default function CareersHero() {
  return (
    <section className="careersHero" style={s.careersHero}>
      <div className="careersHeroOverlay" style={s.careersHeroOverlay}></div>
      <div className="careersHeroInner" style={s.careersHeroInner}>
        <motion.h1 
          className="careersHeroTitle" 
          style={s.careersHeroTitle}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          CAREERS
        </motion.h1>
      </div>
    </section>
  );
}
