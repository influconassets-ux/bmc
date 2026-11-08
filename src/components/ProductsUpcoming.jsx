import React, { useState } from "react";
import { s } from "../styles";
import { motion, AnimatePresence } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemAnim = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } },
  exit: { opacity: 0, y: -15, transition: { duration: 0.3 } }
};

export default function ProductsUpcoming() {
  const upcoming = [
    { img: "upcoming-1.jpg", title: "Voltage detecting live line indicator" },
    { img: "upcoming-2.jpg", title: "25 kV single pole primary\nvoltage transformer" },
    { img: "upcoming-3.jpg", title: "36 kV double pole vacuum contactor" },
    { img: "upcoming-4.png", title: "25 kV single pole outdoor\nvacuum circuit breaker\nand sub-assembly", noFilter: true },
  ];

  return (
    <section className="upcomingSection" style={s.upcomingSection}>
      <div className="upcomingInner" style={s.upcomingInner}>
        <motion.h2
          className="upcomingTitle"
          style={s.upcomingTitle}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2 }}
        >
          UPCOMING PRODUCTS UNDER R&D
        </motion.h2>

        <div className="upcomingCarouselWrap" style={{ ...s.upcomingCarouselWrap, display: "block" }}>

          <motion.div
            className="upcomingGrid"
            style={{ ...s.upcomingGrid, overflow: "visible" }}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {upcoming.map((p, index) => (
              <motion.div
                key={index}
                className="upcomingCard"
                style={s.upcomingCard}
                variants={itemAnim}
              >
                <div className="upcomingImgWrap" style={s.upcomingImgWrap}>
                  <img 
                    src={`/images/${p.img}`} 
                    alt={p.title.replace("\n", " ")} 
                    className="upcomingImg" 
                    style={p.noFilter ? { ...s.upcomingImg, filter: "none", transform: "scale(1.15)" } : s.upcomingImg} 
                    onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder.jpg' }} 
                  />
                </div>
                <p className="upcomingCardTitle" style={s.upcomingCardTitle}>
                  {p.title.split('\n').map((line, idx) => (
                    <React.Fragment key={idx}>
                      {line}
                      {idx !== p.title.split('\n').length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
