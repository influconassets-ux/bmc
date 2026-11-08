import React from "react";
import { useNavigate } from "react-router-dom";
import { s } from "../styles";
import { motion } from "framer-motion";

export default function Expertise() {
  const navigate = useNavigate();

  return (
    <>
      {/* ================= EXPERTISE / WHAT WE DO ================= */}
      <section className="expertiseSection" style={s.expertiseSection}>
        <motion.div
          style={{ position: "relative", width: "100%", display: "flex", justifyContent: "center" }}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <img
            src="/images/expertise-section.jpg"
            alt="Our Expertise"
            className="expertiseFullImage"
            style={s.expertiseFullImage}
          />

          {/* Invisible Interactive Overlay Button */}
          <motion.div
            onClick={() => navigate("/services")}
            title="Learn More About Services"
            style={{
              position: "absolute",
              bottom: "4.5%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "16%",
              height: "7%",
              cursor: "pointer",
              borderRadius: "4px",
              zIndex: 10
            }}
            whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.15)" }}
            whileTap={{ backgroundColor: "rgba(255, 255, 255, 0.3)" }}
          />
        </motion.div>
      </section>
    </>
  );
}