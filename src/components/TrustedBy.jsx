import React from "react";
import { s } from "../styles";

export default function TrustedBy({ customLogos, staticView = false }) {
  const defaultLogos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15].map(
    (num) => ({ src: `/images/client-${num}.png`, alt: `Client ${num}` })
  );
  
  const logos = customLogos || defaultLogos;

  if (staticView) {
    return (
      <section style={{ ...s.trustedSection, overflow: "hidden", marginBottom: 80 }}>
        <h3 className="trustedTitle" style={s.trustedTitle}>TRUSTED BY</h3>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', gap: '50px', flexWrap: 'wrap', padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
          {logos.map((logo, i) => (
             <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>
               <img 
                 src={logo.src} 
                 alt={logo.alt} 
                 style={{ ...s.trustedLogo, maxHeight: '110px', objectFit: 'contain' }} 
                 onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder.jpg' }}
               />
               {logo.title && <p style={{ textAlign: 'center', color: '#333', fontSize: '15px', fontWeight: '500', maxWidth: '220px', margin: 0, lineHeight: 1.4 }}>{logo.title}</p>}
             </div>
          ))}
        </div>
      </section>
    );
  }

  // Duplicate for seamless infinite scrolling
  const marqueeLogos = [...logos, ...logos];

  return (
    <section style={{ ...s.trustedSection, overflow: "hidden", marginBottom: 80 }}>
       <h3 className="trustedTitle" style={s.trustedTitle}>TRUSTED BY</h3>
       <div style={{ width: "100%", overflow: "hidden" }}>
         <div className="marquee-track">
           {marqueeLogos.map((logo, i) => (
             <div key={i} style={{ ...s.trustedLogoWrap, height: 'auto', flexDirection: 'column', justifyContent: 'flex-start', margin: "0 30px" }}>
               <div style={{ height: '75px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                 <img src={logo.src} alt={logo.alt} className="trustedLogo" style={{ ...s.trustedLogo, maxHeight: '70px', objectFit: 'contain' }} onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder.jpg' }} />
               </div>
               {logo.title ? (
                 <p style={{ textAlign: 'center', color: '#333', fontSize: '13px', fontWeight: '600', maxWidth: '180px', margin: '10px 0 0 0', lineHeight: 1.3, whiteSpace: 'normal' }}>
                   {logo.title}
                 </p>
               ) : (
                 <div style={{ height: '35px', margin: '10px 0 0 0' }}></div>
               )}
             </div>
           ))}
         </div>
       </div>
    </section>
  );
}
