import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./ContactModal.css";

export default function ContactModal({ isOpen, onClose }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "2fe58c28-c6d0-4f2c-966f-bae141fcf746");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      if (data.success) {
        setResult("Message sent successfully!");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error(error);
      setResult("Something went wrong!");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="contactModalOverlay" onClick={onClose}>
        <motion.div 
          className="contactModalContent" 
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 1.2 }}
        >
          <button className="contactModalClose" onClick={onClose}>
            <svg viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
          </button>
          
          <div className="contactModalLeft">
            <h2 className="contactModalTitleLight">ANY ENQUIRIES?</h2>
            <h1 className="contactModalTitleBold">CONTACT US</h1>
            <p className="contactModalDesc">
              Have Questions About Our Products Or Need Assistance With Your Project? Our<br/>
              Team Is Here To Help You With The Right Electrical Solutions.
            </p>
            
            <div className="contactModalActionBtns">
              <a 
                href="https://wa.me/918777587692" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btnWhatsapp" 
                style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", justifyContent: "center" }}
              >
                <svg viewBox="0 0 24 24" className="whatsappIcon"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                CONNECT ON WHATSAPP
              </a>
              <a href="/pdf/BMC COMPANY PPT.pdf" download="BMC COMPANY PPT.pdf" className="btnDownloadPresentation" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                DOWNLOAD PRESENTATION
              </a>
            </div>

            <div className="contactModalInfoGrid">
              <div className="contactModalInfoItem">
                <svg viewBox="0 0 24 24" className="infoIcon"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                <span>+91 87775 87692 / +91 93313 32975</span>
              </div>
              <div className="contactModalInfoItem">
                <svg viewBox="0 0 24 24" className="infoIcon"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                <span>connect@bmcepl.com / samrat@bmcepl.com</span>
              </div>

              <div className="contactModalInfoItem">
                <svg viewBox="0 0 24 24" className="infoIcon"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                <span><span className="blueLabel">Regd.Off. & Works 1:</span> 130/22 B.S. Industrial Estate, Hanspukur, Bakhrahat Road, Kolkata<br/>-700104 (W.B.) India</span>
              </div>
              <div className="contactModalInfoItem">
                <svg viewBox="0 0 24 24" className="infoIcon"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                <span><span className="blueLabel">Works 2:</span> K-133,MIDC, Waluj, Aurangabad<br/>-431136 (M.S.) India.</span>
              </div>

              <div className="contactModalInfoItem">
                <svg viewBox="0 0 24 24" className="infoIcon"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                <span><span className="blueLabel">Works 3:</span> 6/2,Behala Industrial Estate, 620,D.<br/>H.Road, Kolkata-700034 India.</span>
              </div>
              <div className="contactModalInfoItem">
                <svg viewBox="0 0 24 24" className="infoIcon"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                <span><span className="blueLabel">Works 4:</span> Ground Floor, B-1305 G.D. Colony, <br/>Mayur Vihar Phase-3, New Delhi <br/>PIN Code: 110096</span>
              </div>
            </div>
          </div>
          
          <div className="contactModalRight">
            <h3 className="contactModalRightTitle">LET'S TALK</h3>
            <p className="contactModalRightDesc">Let's Talk About How We Can Help You</p>
            
            <form className="contactModalForm" onSubmit={onSubmit}>
              <input type="text" name="name" placeholder="Your Full Name" className="contactModalInput" required />
              <input type="email" name="email" placeholder="Email Address" className="contactModalInput" required />
              <input type="tel" name="phone" placeholder="Phone Number" className="contactModalInput" />
              <textarea name="message" placeholder="How Can We Help You?" className="contactModalTextarea" required></textarea>
              
              <button type="submit" className="contactModalSubmitBtn" disabled={isSubmitting}>
                {isSubmitting ? "SUBMITTING..." : "SUBMIT"}
              </button>
              {result && <p style={{ color: "#fff", marginTop: "10px", fontSize: "14px" }}>{result}</p>}
            </form>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
