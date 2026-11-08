import React from "react";
import { s } from "../styles";
import { motion } from "framer-motion";

export default function ProductsHero({ subTitle }) {
  return (
    <div className="servicesHero" style={s.servicesHero}>
       <div className="servicesHeroOverlay" style={s.servicesHeroOverlay}></div>
       <div className="servicesHeroInner" style={{ ...s.servicesHeroInner, display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "center" }}>
         <motion.h1 
           className="servicesHeroTitle" 
           style={{ ...s.servicesHeroTitle, margin: 0 }}
           initial={{ opacity: 0, y: 15 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1.2, ease: "easeInOut" }}
         >
           PRODUCTS
         </motion.h1>
         {subTitle && (
           <motion.h3
             style={{ color: "#c4ea48", fontSize: "24px", fontWeight: 300, marginTop: "10px", letterSpacing: "1px", textAlign: "left", textTransform: "uppercase" }}
             initial={{ opacity: 0, y: 15 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1.2, delay: 0.2, ease: "easeInOut" }}
           >
             {subTitle}
           </motion.h3>
         )}
       </div>
    </div>
  );
}
