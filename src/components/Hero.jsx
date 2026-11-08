import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { s } from "../styles";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero({ isLoading }) {
  const navigate = useNavigate();
  const [heroSlideIdx, setHeroSlideIdx] = useState(0);
  const [whatWeDoIdx, setWhatWeDoIdx] = useState(0);

  const heroSlides = [
    {
      title: "POWERING EXCELLENCE WITH OUR PRECISION ELECTRICAL SOLUTIONS",
      subtitle: "High-Performance Medium-Voltage Equipment Engineered For Reliability, Safety, And Long-Term Efficiency Across Critical Infrastructure."
    },
    {
      title: "SOLUTIONS FOCUSED ON MINIMIZING DOWNTIME AND MAXIMIZING YOUR OPERATIONAL EFFICIENCY",
      subtitle: ""
    },
    {
      title: "ROBUST TAILOR-MADE DESIGNS CUSTOMISED FOR OPTIMAL PERFORMANCE IN CHALLENGING ENVIRONMENTS",
      subtitle: ""
    },
    {
      title: "LATEST SPECIFICATIONS FOR OPTIMAL PROTECTION OF YOUR ELECTRICAL GRID",
      subtitle: ""
    },
    {
      title: "HIGH-ACCURACY MEASUREMENT STANDARDS TO ENSURE ERROR-FREE MEASUREMENT OF YOUR POWER CONSUMPTION",
      subtitle: ""
    },
    {
      title: "DECADES OF EXPERIENCE IN CATERING TO MULTINATIONAL OEMs",
      subtitle: ""
    },
    {
      title: "RETROFIT AND UPGRADATION SOLUTIONS IN EXISTING BROWNFIELD INSTALLATIONS TO ENHANCE END-OF-LIFE OF YOUR ELECTRICAL ASSETS",
      subtitle: ""
    },
    {
      title: "DECADES OF DESIGN AND ENGINEERING EXPERTISE COUPLED WITH MULTIPLE SUCCESSFUL IMPLEMENTATIONS AND DEPLOYMENTS",
      subtitle: ""
    },
    {
      title: "SECTOR-FOCUSED SKILLED ENGINEERS AND ON-GROUND WORKFORCE",
      subtitle: ""
    },
    {
      title: "FAMILIARITY WITH INTERNATIONAL QUALITY STANDARDS AND PROTOCOLS FOR ENSURING OPERATIONAL SAFETY AT YOUR PREMISES",
      subtitle: ""
    },
    {
      title: "IN-HOUSE HAND HOLDING OF R&D AND MANUFACTURING EXCELLENCE",
      subtitle: ""
    },
    {
      title: "SMART MRO (PREVENTIVE MAINTENANCE, REPAIR AND OVERHAUL) INCORPORATING CONDITION MONITORING TOOLS SUCH AS SENSORS, IOT AND DATA ANALYTICS",
      subtitle: ""
    }
  ];

  const whatWeDoList = [
    "Technology Transfer & Switchgear Manufacturing Plant Setup Consultancy",
    "Specialised Consultancy Wing For Technology And Manufacturing Solutions Of Vacuum Interrupters",
    "OEM Manufacturing & Solutions Of Instrument Transformers - CT/PT",
    "Manufacturing & Solutions Of Switchgears - Vacuum Circuit Breakers And Vacuum Contactors",
    "Manufacturing & Solutions Of Cast Resin Components And Sub - Assemblies",
    "Digitisation & Smart MRO (Maintenance, Repairing And Overhauling) In Power Systems For Sustainable Energy",
    "Advanced Partner With A Global MNC As Core Component Panel Builders",
    "Critical Servicings And AMC",
    "HT VCB Retrofits And Tailor Made - CT/PT Customisations"
  ];

  useEffect(() => {
    if (isLoading) return; 

    const timer = setInterval(() => {
      setHeroSlideIdx((prev) => (prev + 1) % heroSlides.length);
    }, 6000); 
    
    return () => clearInterval(timer);
  }, [isLoading, heroSlides.length]);

  useEffect(() => {
    if (isLoading) return; 

    const timer = setInterval(() => {
      setWhatWeDoIdx((prev) => (prev + 1) % whatWeDoList.length);
    }, 8000); 
    
    return () => clearInterval(timer);
  }, [isLoading, whatWeDoList.length]);

  return (
    <>
      <section className="hero" style={s.hero}>
        {/* Backgrounds wrapper (overflow hidden) */}
        <div className="heroBgWrapper" style={s.heroBgWrapper}>
          <div className="heroBg" style={s.heroBg} />
        </div>

        {/* Content wrapper (overflow visible) */}
        <div className="heroInner" style={s.heroInner}>
          <div className="heroLeft" style={s.heroLeft}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", width: "100%", alignItems: "start" }}>
              {heroSlides.map((slide, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ 
                    opacity: heroSlideIdx === idx ? 1 : 0, 
                    y: heroSlideIdx === idx ? 0 : (heroSlideIdx > idx ? -15 : 15),
                    pointerEvents: heroSlideIdx === idx ? "auto" : "none" 
                  }}
                  transition={{ 
                    duration: heroSlideIdx === idx ? 0.8 : 0.3, 
                    ease: heroSlideIdx === idx ? "easeOut" : "easeIn" 
                  }}
                  style={{ 
                    gridArea: "1 / 1",
                    display: "flex", 
                    flexDirection: "column", 
                    transformPerspective: 1200 
                  }}
                >
                  <h1 className="h1" style={s.h1}>
                    {slide.title}
                  </h1>
                  <p className="subtitle" style={s.subtitle}>
                    {slide.subtitle}
                  </p>
                </motion.div>
              ))}
            </div>
            <div className="slider" style={s.slider}>
              {heroSlides.map((_, i) => (
                <div 
                  className={i === heroSlideIdx ? "sliderDashActive" : "sliderDash"}
                  key={i} 
                  style={i === heroSlideIdx ? s.sliderDashActive : s.sliderDash} 
                  onClick={() => setHeroSlideIdx(i)}
                />
              ))}
            </div>
            <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
              <button className="btnOutline" style={s.btnOutline} onClick={() => navigate("/products")}>VIEW PRODUCTS</button>
              <button className="btnOutline" style={s.btnOutline} onClick={() => navigate("/services")}>VIEW SERVICES</button>
            </div>
          </div>

          <div className="cardWrapper" style={s.cardWrapper}>
            <div className="cardDots" style={s.cardDots} />
            <motion.div 
              className="card" 
              style={{ ...s.card, cursor: "pointer", borderRadius: 0 }}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" 
              }}
              transition={{ duration: 1.2, ease: "easeInOut"}}
            >
              <div className="cardTop" style={s.cardTop}>
                <span className="cardExpertise" style={s.cardExpertise}>Our Expertise <span>&rarr;</span></span>
                <span className="cardCount" style={s.cardCount}>
                  {String(whatWeDoIdx + 1).padStart(2, '0')}/{String(whatWeDoList.length).padStart(2, '0')}
                </span>
              </div>
              <div style={{ position: "relative", minHeight: "110px", margin: "0 0 20px 0" }}>
                <AnimatePresence mode="wait">
                  <motion.p
                    key={whatWeDoIdx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5 }}
                    className="cardText"
                    style={{ ...s.cardText, margin: 0, position: "absolute", top: 0, left: 0, right: 0 }}
                  >
                    {whatWeDoList[whatWeDoIdx]}
                  </motion.p>
                </AnimatePresence>
              </div>
              <div className="cardDivider" style={s.cardDivider} />
              <span className="cardWhatWeDo" style={s.cardWhatWeDo}>WHAT WE DO</span>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}