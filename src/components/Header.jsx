import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { s } from "../styles";
import ContactModal from "./ContactModal";

const NAV_LINKS = ["Home", "About", "Products", "Services", "Consultancy", "Manufacturing Facilities", "Testing Facilities", "Clients", "Careers"];

export default function Header() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      {/* MOBILE OVERLAY BACKDROP */}
      <div 
        className={`mobileBackdrop ${isMobileMenuOpen ? 'open' : ''}`} 
        onClick={closeMenu}
      />

      {/* ================= TOP BAR ================= */}
      <div className="topBar" style={s.topBar}>
        <div className="topInner" style={s.topInner}>
          <div className="topItem" style={s.topItem}>
            <svg className="iconWhite" style={s.iconWhite} viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
            <span>130/22, B. S. INDUSTRIAL ESTATE, HANSPUKUR, BAKHRAHAT ROAD, KOLKATA - 700104 (W.B.), INDIA.</span>
          </div>
          <div className="topItemMid" style={s.topItemMid}>
            <svg className="iconWhite" style={s.iconWhite} viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
            <span>connect@bmcepl.com / samrat@bmcepl.com</span>
          </div>
          <div className="topItem" style={s.topItem}>
            <svg className="iconWhite" style={s.iconWhite} viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 1.84.5 3.56 1.37 5.06L2 22l4.94-1.37C8.44 21.5 10.16 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm3.3 14.18c-.16.45-.91.87-1.31.91-.37.04-.85.12-2.73-.62-2.26-.89-3.72-3.19-3.83-3.34-.11-.15-.91-1.22-.91-2.33 0-1.11.58-1.65.79-1.87.2-.21.43-.26.57-.26.14 0 .28.01.41.02.14.01.32-.05.5.37.19.45.64 1.57.7 1.7.06.13.09.28.01.45-.09.17-.13.28-.27.45-.14.16-.3.35-.41.46-.13.13-.26.27-.11.53.15.26.66 1.1 1.41 1.77.97.87 1.8 1.14 2.06 1.27.26.13.41.11.56-.06.15-.17.65-.75.82-1.01.17-.26.34-.22.58-.13.24.09 1.51.71 1.77.84.26.13.43.19.49.3.06.11.06.63-.1 1.08z" /></svg>
            <span>+91 87775 87692 / +91 93313 32975</span>
          </div>
        </div>
      </div>

      {/* ================= NAVBAR ================= */}
      <nav className="navbar" style={s.navbar}>
        <div className="navInner" style={s.navInner}>
          <div className="logoWrap" style={s.logoWrap}>
            <Link to="/" onClick={closeMenu}>
              <img src="/images/bmc-logo.png" alt="BMC" className="logo" style={s.logo} />
            </Link>
            <img src="/images/iso-badge.png" alt="Technology Centre" className="badge" style={s.badge} />
          </div>
          
          <button className="hamburger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
            {isMobileMenuOpen ? (
              // X Close Icon
              <svg viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
            ) : (
              // Hamburger Icon
              <svg viewBox="0 0 24 24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
            )}
          </button>

          <div className={`navRight ${isMobileMenuOpen ? 'mobileOpen' : ''}`} style={s.navRight}>
            <ul className="navLinks" style={s.navLinks}>
              {NAV_LINKS.map((l) => {
                const path = l === "Home" ? "/" : l === "About" ? "/about" : l === "Products" ? "/products" : l === "Services" ? "/services" : l === "Consultancy" ? "/consultancy" : l === "Manufacturing Facilities" ? "/manufacturing-facilities" : l === "Testing Facilities" ? "/testing-facilities" : l === "Careers" ? "/careers" : l === "Clients" ? "/clients" : `#${l.toLowerCase()}`;
                const isActive = (l === "Home" && location.pathname === "/") || (l === "About" && location.pathname === "/about") || (l === "Products" && location.pathname === "/products") || (l === "Services" && location.pathname === "/services") || (l === "Consultancy" && location.pathname === "/consultancy") || (l === "Manufacturing Facilities" && location.pathname === "/manufacturing-facilities") || (l === "Testing Facilities" && location.pathname === "/testing-facilities") || (l === "Careers" && location.pathname === "/careers") || (l === "Clients" && location.pathname === "/clients");
                return (
                  <li key={l} className="navLinkWrap" style={s.navLinkWrap}>
                    <Link to={path} className="navLink" style={isActive ? { ...s.navLink, ...s.navActive } : s.navLink} onClick={closeMenu}>
                      {l}
                    </Link>
                    {isActive && <div className="navActiveLine" style={s.navActiveLine} />}
                  </li>
                );
              })}
            </ul>
            <button className="btnGreen" style={s.btnGreen} onClick={() => setIsContactModalOpen(true)}>GET IN TOUCH</button>
          </div>
        </div>
      </nav>

      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </>
  );
}