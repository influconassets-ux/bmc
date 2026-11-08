import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingVideo({ isLoading }) {
  const [isOpen, setIsOpen] = useState(true);

  if (isLoading) return null;

  return (
    <>
      {/* YouTube Logo Button (shown when video is closed) */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={() => setIsOpen(true)}
            style={{
              position: "fixed",
              bottom: 25,
              right: 25,
              zIndex: 9999,
              width: 60,
              height: 42,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              filter: "drop-shadow(0 4px 12px rgba(255, 0, 0, 0.5))",
            }}
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.95 }}
            title="Open Video"
          >
            <svg viewBox="0 0 68 48" width="60" height="42">
              <path d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.63 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z" fill="#FF0000"/>
              <path d="M45 24L27 14v20" fill="#fff"/>
            </svg>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Video Player */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.6, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 40 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            style={{
              position: "fixed",
              bottom: 25,
              right: 25,
              zIndex: 9999,
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 8px 32px rgba(0,0,0,0.35), 0 2px 8px rgba(0,0,0,0.2)",
              border: "2px solid rgba(196, 234, 72, 0.6)",
              background: "#000",
              width: 300,
              height: 190,
            }}
          >
            {/* Close Button */}
            <div
              onClick={() => setIsOpen(false)}
              style={{
                position: "absolute",
                top: 6,
                right: 6,
                width: 24,
                height: 24,
                borderRadius: "50%",
                background: "rgba(0,0,0,0.6)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                fontSize: 13,
                color: "#fff",
                zIndex: 10,
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255,80,80,0.8)"}
              onMouseLeave={(e) => e.currentTarget.style.background = "rgba(0,0,0,0.6)"}
              title="Close"
            >
              &#10005;
            </div>

            {/* Video iframe */}
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube-nocookie.com/embed/Vjoaj06V2_M?rel=0&autoplay=1&mute=1"
              title="BMC Electroplast"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ display: "block" }}
            ></iframe>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
