import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { s } from "./styles";
import { AnimatePresence, motion } from "framer-motion";
import LoadingScreen from "./components/LoadingScreen";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import ManufacturingFacilitiesPage from "./pages/ManufacturingFacilitiesPage";
import TestingFacilitiesPage from "./pages/TestingFacilitiesPage";
import AboutPage from "./pages/AboutPage";
import CareersPage from "./pages/CareersPage";
import ConsultancyPage from "./pages/ConsultancyPage";
import ProductsPage from "./pages/ProductsPage";
import ServiceRetrofitPage from "./pages/ServiceRetrofitPage";
import ServiceAmcPage from "./pages/ServiceAmcPage";
import ServiceDigitizationPage from "./pages/ServiceDigitizationPage";
import ClientsPage from "./pages/ClientsPage";
import ConsultancyTechTransferPage from "./pages/ConsultancyTechTransferPage";
import ConsultancyVacuumInterruptersPage from "./pages/ConsultancyVacuumInterruptersPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import FloatingVideo from "./components/FloatingVideo";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 }
};

const pageTransition = {
  type: "tween",
  ease: "easeInOut",
  duration: 0.8
};

const PageWrapper = ({ children }) => {
  // Initialize synchronously since it's a client-side Vite app
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const desktopVariants = {
    initial: { opacity: 0, y: 15 },
    in: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut"} },
    out: { opacity: 0, y: -15, transition: { duration: 0.8, ease: "easeInOut" } }
  };

  const mobileVariants = {
    initial: { opacity: 0 },
    in: { opacity: 1, transition: { duration: 0.8 } },
    out: { opacity: 0, transition: { duration: 0.8 } }
  };

  const activeVariants = isMobile ? mobileVariants : desktopVariants;
  const perspectiveStyle = isMobile ? {} : { transformPerspective: 2500, transformStyle: "preserve-3d" };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={activeVariants}
      style={{ width: "100%", ...perspectiveStyle }}
    >
      {children}
    </motion.div>
  );
};

function AnimatedRoutes({ isLoading }) {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      // Wait for the page transition animation to complete (800ms) before scrolling
      setTimeout(() => {
        const id = location.hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 850);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location.pathname, location.hash]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><HomePage isLoading={isLoading} /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><AboutPage /></PageWrapper>} />
        <Route path="/products" element={<PageWrapper><ProductsPage /></PageWrapper>} />
        <Route path="/services" element={<PageWrapper><ServicesPage /></PageWrapper>} />
        <Route path="/services/amc" element={<PageWrapper><ServiceAmcPage /></PageWrapper>} />
        <Route path="/services/digitization" element={<PageWrapper><ServiceDigitizationPage /></PageWrapper>} />
        <Route path="/services/retrofit" element={<PageWrapper><ServiceRetrofitPage /></PageWrapper>} />
        <Route path="/manufacturing-facilities" element={<PageWrapper><ManufacturingFacilitiesPage /></PageWrapper>} />
        <Route path="/testing-facilities" element={<PageWrapper><TestingFacilitiesPage /></PageWrapper>} />
        <Route path="/careers" element={<PageWrapper><CareersPage /></PageWrapper>} />
        <Route path="/clients" element={<PageWrapper><ClientsPage /></PageWrapper>} />
        <Route path="/consultancy" element={<PageWrapper><ConsultancyPage /></PageWrapper>} />
        <Route path="/consultancy/tech-transfer" element={<PageWrapper><ConsultancyTechTransferPage /></PageWrapper>} />
        <Route path="/consultancy/vacuum-interrupters" element={<PageWrapper><ConsultancyVacuumInterruptersPage /></PageWrapper>} />
        <Route path="/products/:productId" element={<PageWrapper><ProductDetailsPage /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

export default function BMCLanding() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Extended artificial delay to allow the premium intro animation to play fully
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // Increased to 5 seconds for the cinematic luxury sequence

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <AnimatePresence>
        {isLoading && <LoadingScreen key="loading" />}
      </AnimatePresence>

      <div className="wrapper" style={s.wrapper}>
        <Header />
        <AnimatedRoutes isLoading={isLoading} />
        <Footer />
        <FloatingVideo isLoading={isLoading} />
      </div>
    </Router>
  );
}
