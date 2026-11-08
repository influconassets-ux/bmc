import React from 'react';
import { motion } from 'framer-motion';

export default function AboutPatents() {
  return (
    <section style={{ 
      background: "linear-gradient(135deg, #0a1930 0%, #153c88 100%)", 
      padding: "100px 20px", 
      color: "#fff",
      textAlign: "center",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Decorative background elements */}
      <div style={{
        position: "absolute",
        top: -100,
        right: -100,
        width: 400,
        height: 400,
        borderRadius: "50%",
        background: "rgba(202, 238, 90, 0.04)",
        filter: "blur(60px)",
        pointerEvents: "none"
      }}></div>
      
      <div style={{
        position: "absolute",
        bottom: -150,
        left: -150,
        width: 500,
        height: 500,
        borderRadius: "50%",
        background: "rgba(16, 47, 131, 0.4)",
        filter: "blur(80px)",
        pointerEvents: "none"
      }}></div>
      
      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Shield/Badge Icon */}
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 25 }}>
            <div style={{ 
              background: "rgba(202, 238, 90, 0.1)", 
              padding: "20px", 
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid rgba(202, 238, 90, 0.2)"
            }}>
              <svg style={{ width: 45, height: 45, fill: "#caee5a" }} viewBox="0 0 24 24">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
              </svg>
            </div>
          </div>
          
          <h2 style={{ 
            fontSize: "clamp(32px, 5vw, 48px)", 
            fontWeight: 700, 
            marginBottom: "20px", 
            letterSpacing: "1px",
            textTransform: "uppercase",
            lineHeight: 1.2
          }}>
            Driven By <span style={{ color: "#caee5a" }}>Patented</span> Innovation
          </h2>
          
          <p style={{ 
            fontSize: "clamp(16px, 2vw, 19px)", 
            maxWidth: "750px", 
            margin: "0 auto 45px auto",
            color: "rgba(255, 255, 255, 0.85)",
            lineHeight: 1.7,
            fontWeight: 300
          }}>
            For over four decades, BMC has pushed the boundaries of medium-voltage switching technology. Explore our portfolio of registered patents that safeguard our proprietary designs and cement our leadership in the industry.
          </p>
          
          <motion.a 
            href="/pdf/patent_details .pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              background: "#caee5a",
              color: "#111",
              padding: "18px 45px",
              borderRadius: "50px",
              fontSize: "16px",
              fontWeight: 700,
              textDecoration: "none",
              letterSpacing: "1px",
              boxShadow: "0 10px 30px rgba(202, 238, 90, 0.25)",
            }}
            whileHover={{ y: -5, boxShadow: "0 15px 35px rgba(202, 238, 90, 0.4)", scale: 1.02 }}
            whileTap={{ y: 0, scale: 0.98 }}
          >
            VIEW OUR PATENTS
            <svg viewBox="0 0 24 24" style={{ width: 20, height: 20, fill: "currentColor" }}>
              <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
