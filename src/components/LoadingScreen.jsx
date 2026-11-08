import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function LoadingScreen() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    
    // Phase 0: Intro (0-0.5s)
    // Phase 1: Logo & Text Reveal (0.5s-3.5s)
    // Phase 2: Smooth Curtain Exit (3.5s-5.0s)
    const t1 = setTimeout(() => setPhase(1), 500);
    const t2 = setTimeout(() => setPhase(2), 3500);

    return () => {
      document.body.style.overflow = 'auto';
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  const text = "ENGINEERING EXCELLENCE".split("");

  // Apple-like premium easing curves
  const premiumEase = [0.16, 1, 0.3, 1];
  const fluidEase = [0.76, 0, 0.24, 1];

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        pointerEvents: 'none',
        overflow: 'hidden'
      }}
    >
      {/* Luxurious White Background that elegantly curves and sweeps up */}
      <motion.div
        initial={{ y: 0, borderRadius: '0% 0% 0% 0%' }}
        animate={{ 
          y: phase === 2 ? '-110vh' : 0,
          borderRadius: phase === 2 ? '0% 0% 50% 50%' : '0% 0% 0% 0%'
        }}
        transition={{ duration: 1.2, ease: fluidEase }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100vw',
          height: '110vh', // Extra height to hide the curve at the top before it moves
          background: '#ffffff',
          zIndex: 1,
          boxShadow: phase === 2 ? '0px 20px 40px rgba(0,0,0,0.05)' : 'none'
        }}
      >
        {/* GPU-Accelerated subtle ambient orbs for depth (No lag) */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
          style={{
            position: 'absolute', top: '-10%', left: '-10%',
            width: '60vw', height: '60vw',
            background: 'radial-gradient(circle, rgba(46,125,50,0.04) 0%, rgba(255,255,255,0) 70%)',
            borderRadius: '50%', zIndex: 0
          }}
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 8, ease: "easeInOut", repeat: Infinity, delay: 1 }}
          style={{
            position: 'absolute', bottom: '-10%', right: '-10%',
            width: '50vw', height: '50vw',
            background: 'radial-gradient(circle, rgba(200,160,50,0.03) 0%, rgba(255,255,255,0) 70%)',
            borderRadius: '50%', zIndex: 0
          }}
        />
      </motion.div>

      {/* Main Content Wrapper - Added a Cinematic Parallax Drift */}
      <motion.div
        initial={{ }}
        animate={{ scale: phase === 2 ? 1.05 : 1 }}
        transition={{ duration: 4.5, ease: "easeInOut" }}
        style={{
          position: 'relative',
          zIndex: 5,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        {/* Flawless Logo Reveal (Rising from invisible floor) */}
        <div style={{ overflow: 'hidden', padding: '10px 20px', position: 'relative' }}>
          <motion.div
            initial={{ y: 15, opacity: 0 }}
            animate={{ 
              y: phase >= 1 ? (phase === 2 ? -100 : 0) : 150, 
              opacity: phase >= 1 ? (phase === 2 ? 0 : 1) : 0,
              scale: phase === 2 ? 0.95 : 1
            }}
            transition={{ 
              y: { duration: 1.2, ease: premiumEase },
              opacity: { duration: 1.2 },
              scale: { duration: 1.2, ease: fluidEase }
            }}
            style={{ position: 'relative' }}
          >
            <img 
              src="/images/bmc-logo.png" 
              alt="BMC Logo" 
              style={{ width: '140px', objectFit: 'contain', imageRendering: '-webkit-optimize-contrast' }} 
            />
            {/* Elegant glass reflection sweep (replaces the harsh shimmer) */}
            <motion.div
              initial={{ x: '-150%' }}
              animate={{ x: phase >= 1 ? ['-150%', '250%'] : '-150%' }}
              transition={{ duration: 2.5, ease: "easeInOut", delay: 1.2 }}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '40%',
                height: '100%',
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)',
                transform: 'skewX(-25deg)',
                mixBlendMode: 'overlay', // Softly interacts with the logo underneath
                pointerEvents: 'none'
              }}
            />
          </motion.div>
        </div>

        {/* Ultra-smooth Corporate Staggered Text */}
        <div style={{ overflow: 'hidden', marginTop: '10px', padding: '10px' }}>
          <div style={{ display: 'flex', gap: '3px' }}>
            {text.map((char, index) => (
              <motion.span
                key={index}
                initial={{ y: 15, opacity: 0 }}
                animate={{ 
                  y: phase >= 1 ? (phase === 2 ? -50 : 0) : 40, 
                  opacity: phase >= 1 ? (phase === 2 ? 0 : 1) : 0 
                }}
                transition={{
                  duration: 1.2,
                  ease: premiumEase,
                  delay: phase >= 1 ? (index * 0.02 + 0.3) : 0 
                }}
                style={{
                  fontFamily: "'Inter', 'Montserrat', sans-serif",
                  fontSize: '13px',
                  color: '#2E7D32', // Deep corporate green
                  fontWeight: 700,
                  letterSpacing: char === ' ' ? '12px' : '6px', // Increased baseline letter spacing for a more premium look
                  textTransform: 'uppercase',
                  width: char === ' ' ? '8px' : 'auto',
                  display: 'inline-block'
                }}
              >
                {char}
              </motion.span>
            ))}
          </div>
        </div>
        
        {/* Elegant Hairline Accent (Precision Engineering look) */}
        <motion.div
          initial={{ width: '0px', opacity: 0 }}
          animate={{ 
            width: phase >= 1 ? (phase === 2 ? '0px' : '120px') : '0px', 
            opacity: phase >= 1 ? (phase === 2 ? 0 : 0.8) : 0 
          }}
          transition={{ duration: 1.4, ease: fluidEase, delay: phase >= 1 ? 0.8 : 0 }}
          style={{
            marginTop: '28px',
            height: '1px', // Made it a razor-thin hairline
            background: 'linear-gradient(90deg, transparent, rgba(46,125,50,1), transparent)',
            borderRadius: '50%'
          }}
        />

      </motion.div>
    </motion.div>
  );
}
