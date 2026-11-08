import React, { useState } from "react";
import { Link } from "react-router-dom";
import { s } from "../styles";
import ContactModal from "./ContactModal";

export default function Footer() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resultMessage, setResultMessage] = useState("");

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResultMessage("Sending...");

    const formData = new FormData(event.target);
    // Using the Contact Us access key you provided earlier
    formData.append("access_key", "2fe58c28-c6d0-4f2c-966f-bae141fcf746");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResultMessage("Message sent successfully!");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResultMessage(data.message);
      }
    } catch (error) {
      console.error(error);
      setResultMessage("Something went wrong!");
    } finally {
      setIsSubmitting(false);
    }
  };
  const associations = [
    { img: "assoc-1.png", text: "FIFA WORLD CUP\nQatar 2022" },
    { img: "assoc-2.png", text: "BATEL Elektromekanik,\nturkiye", style: { height: 30 } },
    { img: "assoc-3.png", text: "Ministry of Science\nand Technology,\nGovernment of India" },
    { img: "assoc-4.png", text: "Ministry of Skill\nDevelopment and\nEntrepreneurship" },
    { img: "assoc-5.png", text: "KERI\nSouth Korea", style: { height: 55 } },
    { img: "assoc-6.png", text: "PVA TePla\nGermany", style: { height: 30 } },
    { img: "assoc-7.png", text: "Shaanxi Baoguang\nChina", style: { height: 30 } },
  ];

  return (
    <footer className="footerSection" style={s.footerSection}>
      <div className="footerContainer" style={s.footerContainer}>
        {/* Contact Row */}
        <div id="contact" className="footerContactRow" style={s.footerContactRow}>
          <div className="footerContactLeft" style={s.footerContactLeft}>
            <h2 className="footerContactTitle" style={s.footerContactTitle}>
              ANY ENQUIRIES?<br />
              <span className="footerContactTitleHighlight" style={s.footerContactTitleHighlight}>CONTACT US</span>
            </h2>
            <p className="footerContactDesc" style={s.footerContactDesc}>
              Have Questions Or Need More Information? Feel Free To Reach Out To Us. Our Team Is Ready To Assist You With Any Queries You Might Have About Our Products And Services.
            </p>
            <div className="footerContactBtns" style={s.footerContactBtns}>
              <a 
                href="https://wa.me/918777587692" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footerBtnWhatsapp" 
                style={{ ...s.footerBtnWhatsapp, textDecoration: "none", display: "inline-flex", alignItems: "center", justifyContent: "center" }}
              >
                <img src="/images/icon-whatsapp-dark.png" alt="WhatsApp" className="footerBtnIcon" style={s.footerBtnIcon} />
                WHATSAPP US
              </a>
              <a 
                href="/pdf/BMC COMPANY PPT.pdf" 
                download="BMC COMPANY PPT.pdf" 
                className="footerBtnDownload" 
                style={{ ...s.footerBtnDownload, textDecoration: "none", display: "inline-flex", alignItems: "center", justifyContent: "center" }}
              >
                DOWNLOAD PRESENTATION
              </a>
            </div>
          </div>
          
          <div className="footerFormCard" style={s.footerFormCard}>
            <h3 className="footerFormTitle" style={s.footerFormTitle}>LET'S TALK</h3>
            <p className="footerFormSubtitle" style={s.footerFormSubtitle}>We'd Love To Hear From You.</p>
            <form className="footerForm" style={s.footerForm} onSubmit={handleFormSubmit}>
              <input type="text" name="name" placeholder="Name*" className="footerInput" style={s.footerInput} required />
              <input type="text" name="phone" placeholder="Phone Number*" className="footerInput" style={s.footerInput} required />
              <input type="email" name="email" placeholder="Email*" className="footerInput" style={s.footerInput} required />
              <textarea name="message" placeholder="Message*" className="footerTextarea" style={s.footerTextarea} required></textarea>
              <button type="submit" className="footerSubmitBtn" style={s.footerSubmitBtn} disabled={isSubmitting}>
                {isSubmitting ? "SUBMITTING..." : "SUBMIT"}
              </button>
              {resultMessage && <p style={{ color: "#fff", marginTop: "10px", fontSize: "14px" }}>{resultMessage}</p>}
            </form>
          </div>
        </div>
        
        <div className="footerMainDivider" style={s.footerMainDivider}></div>
        

        {/* Grid */}
        <div className="footerGrid" style={s.footerGrid}>
          {/* Col 1 */}
          <div className="footerColBrand" style={s.footerColBrand}>
            <div className="footerLogos" style={s.footerLogos}>
              <img src="/images/footer-logo-bmc.png" alt="BMC" className="footerLogoBmc" style={s.footerLogoBmc} />
              <img src="/images/footer-logo-tech-new.png" alt="Technology Centre" className="footerLogoTech" style={{ ...s.footerLogoTech, transform: "scale(0.85)", transformOrigin: "left center" }} />
            </div>
            <p className="footerBrandText" style={s.footerBrandText}>
              A House of Quality Products Driven by High Standards of Innovation, Design, and Modern Technology.
            </p>
            <div className="footerSocials" style={s.footerSocials}>
              <a href="https://in.linkedin.com/company/bmc-electroplast" target="_blank" rel="noopener noreferrer">
                <img src="/images/icon-linkedin.png" alt="LinkedIn" className="footerSocialIcon" style={s.footerSocialIcon} />
              </a>
              <a href="https://www.instagram.com/bmc_electroplast/" target="_blank" rel="noopener noreferrer">
                <img src="/images/icon-insta.png" alt="Instagram" className="footerSocialIcon" style={s.footerSocialIcon} />
              </a>
              <a href="https://www.facebook.com/p/BMC-Electroplast-PVT-LTD-61555314545243/" target="_blank" rel="noopener noreferrer">
                <img src="/images/icon-fb.png" alt="Facebook" className="footerSocialIcon" style={s.footerSocialIcon} />
              </a>
              <img src="/images/icon-twitter.png" alt="Twitter" className="footerSocialIcon" style={s.footerSocialIcon} />
            </div>
            
            {/* Associations */}
            <div className="footerAssoc" style={{ ...s.footerAssoc, marginTop: 200, marginBottom: 0 }}>
              <h4 className="footerColTitle" style={{ ...s.footerColTitle, fontSize: 13 }}>PROUD ASSOCIATIONS:</h4>
              <div className="footerAssocLogos" style={{...s.footerAssocLogos, flexWrap: "nowrap", gap: "35px"}}>
                {associations.map((assoc, idx) => (
                  <div key={idx} className="footerAssocItem" style={s.footerAssocItem}>
                    <img src={`/images/${assoc.img}`} alt="Association" style={{...s.footerAssocImg, ...assoc.style}} />
                    <p className="footerAssocText" style={{...s.footerAssocText, textTransform: "capitalize"}}>{assoc.text.toLowerCase()}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Col 2 */}
          <div className="footerColLinks" style={s.footerColLinks}>
            <h4 className="footerColTitle" style={s.footerColTitle}>QUICK LINKS</h4>
            <ul className="footerList" style={s.footerList}>
              <li className="footerListItem" style={s.footerListItem}><Link to="/" className="footerLink" style={s.footerLink}>Home</Link></li>
              <li className="footerListItem" style={s.footerListItem}><Link to="/about" className="footerLink" style={s.footerLink}>About Us</Link></li>
              <li className="footerListItem" style={s.footerListItem}><Link to="/services" className="footerLink" style={s.footerLink}>Services</Link></li>
              <li className="footerListItem" style={s.footerListItem}><Link to="/products" className="footerLink" style={s.footerLink}>Products</Link></li>
              <li className="footerListItem" style={s.footerListItem}><Link to="/consultancy" className="footerLink" style={s.footerLink}>Consultancy</Link></li>
              <li className="footerListItem" style={s.footerListItem}><Link to="/manufacturing-facilities" className="footerLink" style={s.footerLink}>Manufacturing Facilities</Link></li>
              <li className="footerListItem" style={s.footerListItem}><Link to="/testing-facilities" className="footerLink" style={s.footerLink}>Testing Facilities</Link></li>
              <li className="footerListItem" style={s.footerListItem}><Link to="/clients" className="footerLink" style={s.footerLink}>Clients</Link></li>
              <li className="footerListItem" style={s.footerListItem}><Link to="/careers" className="footerLink" style={s.footerLink}>Careers</Link></li>
              <li className="footerListItem" style={s.footerListItem}><a href="#" onClick={(e) => { e.preventDefault(); setIsContactModalOpen(true); }} className="footerLink" style={s.footerLink}>Contact Us</a></li>
            </ul>
          </div>
          
          {/* Col 3 */}
          <div className="footerColLinks" style={s.footerColLinks}>
            <h4 className="footerColTitle" style={s.footerColTitle}>RESOURCES</h4>
            <ul className="footerList" style={s.footerList}>
              <li className="footerListItem" style={s.footerListItem}><a href="/pdf/BMC%20MAIN%20BROCHURE.pdf" target="_blank" rel="noopener noreferrer" className="footerLink" style={s.footerLink}>Brochure</a></li>
              <li className="footerListItem" style={s.footerListItem}><a href="/pdf/patent_details%20.pdf" target="_blank" rel="noopener noreferrer" className="footerLink" style={s.footerLink}>Patents</a></li>
              <li className="footerListItem" style={s.footerListItem}><a href="/pdf/BMC_Privacy_Policy.pdf" target="_blank" rel="noopener noreferrer" className="footerLink" style={s.footerLink}>Privacy Policy</a></li>
              <li className="footerListItem" style={s.footerListItem}><a href="/pdf/BMC_Electroplast_Terms_and_Conditions_Corporate.pdf" target="_blank" rel="noopener noreferrer" className="footerLink" style={s.footerLink}>Terms & Conditions</a></li>
            </ul>
          </div>
          
          {/* Col 4 (Desktop only) */}
          <div className="footerColContact footerDesktopView" style={s.footerColContact}>
            <h4 className="footerColTitle" style={s.footerColTitle}>CONTACT US</h4>
            <ul className="footerContactList" style={s.footerContactList}>
              <li className="footerContactItem" style={s.footerContactItem}>
                <img src="/images/icon-phone.png" alt="Phone" className="footerContactIcon" style={s.footerContactIcon} />
                <span className="footerContactText" style={s.footerContactText}>+91 87775 87692 /<br />+91 93313 32975</span>
              </li>
              <li className="footerContactItem" style={s.footerContactItem}>
                <img src="/images/icon-email.png" alt="Email" className="footerContactIcon" style={s.footerContactIcon} />
                <span className="footerContactText" style={s.footerContactText}>connect@bmcepl.com /<br />samrat@bmcepl.com</span>
              </li>
              <li className="footerContactItem" style={s.footerContactItem}>
                <img src="/images/icon-location.png" alt="Address" className="footerContactIcon" style={s.footerContactIcon} />
                <span className="footerContactText" style={s.footerContactText}>Head Office &amp; Works 1: 130/22 B.S. Industrial Estate, Hanspukur, Bakhrahat Road, Kolkata -700104 (W.B.) India.</span>
              </li>
              <li className="footerContactItem" style={s.footerContactItem}>
                <img src="/images/icon-location.png" alt="Address" className="footerContactIcon" style={s.footerContactIcon} />
                <span className="footerContactText" style={s.footerContactText}>Works 2: K-133, MIDC, Waluj, Aurangabad -431136 (M.S.) India.</span>
              </li>
            </ul>
          </div>
          
          {/* Col 5 (Desktop only) */}
          <div className="footerColMaps footerDesktopView" style={s.footerColMaps}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d955.1584965107486!2d88.28705931713478!3d22.448485174490237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027ae19c0a228d%3A0x86cda88c394dcce0!2sBMC%20ELECTROPLAST%20PVT.LTD.-HEAD%20OFFICE%20%26%20WORKS%2001!5e0!3m2!1sen!2sin!4v1783672103406!5m2!1sen!2sin" 
              width="100%" 
              height="200" 
              style={{ border: 0, borderRadius: "8px" }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60043.970999868376!2d75.15317382458568!3d19.850604924049247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb9a537c000001%3A0xdaa067dc876bffe6!2sB.M.C%20Electroplast%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1783672225751!5m2!1sen!2sin" 
              width="100%" 
              height="200" 
              style={{ border: 0, borderRadius: "8px", marginTop: "10px" }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Alternating Address and Map Layout (Mobile only) */}
          <div className="footerMobileView">
            <h4 className="footerColTitle" style={s.footerColTitle}>CONTACT US</h4>
            <ul className="footerContactList" style={{ ...s.footerContactList, width: "100%", listStyle: "none", padding: 0 }}>
              <li className="footerContactItem" style={{ ...s.footerContactItem, justifyContent: "center", textAlign: "center" }}>
                <img src="/images/icon-phone.png" alt="Phone" className="footerContactIcon" style={s.footerContactIcon} />
                <span className="footerContactText" style={s.footerContactText}>+91 87775 87692 /<br />+91 93313 32975</span>
              </li>
              <li className="footerContactItem" style={{ ...s.footerContactItem, justifyContent: "center", textAlign: "center", marginTop: "15px" }}>
                <img src="/images/icon-email.png" alt="Email" className="footerContactIcon" style={s.footerContactIcon} />
                <span className="footerContactText" style={s.footerContactText}>connect@bmcepl.com /<br />samrat@bmcepl.com</span>
              </li>
              
              {/* Address 1 */}
              <li className="footerContactItem" style={{ ...s.footerContactItem, justifyContent: "center", textAlign: "center", marginTop: "30px" }}>
                <img src="/images/icon-location.png" alt="Address" className="footerContactIcon" style={s.footerContactIcon} />
                <span className="footerContactText" style={s.footerContactText}>Head Office &amp; Works 1: 130/22 B.S. Industrial Estate, Hanspukur, Bakhrahat Road, Kolkata -700104 (W.B.) India.</span>
              </li>
              {/* Map 1 */}
              <li style={{ width: "100%", listStyle: "none", marginTop: "15px", marginBottom: "30px" }}>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d955.1584965107486!2d88.28705931713478!3d22.448485174490237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027ae19c0a228d%3A0x86cda88c394dcce0!2sBMC%20ELECTROPLAST%20PVT.LTD.-HEAD%20OFFICE%20%26%20WORKS%2001!5e0!3m2!1sen!2sin!4v1783672103406!5m2!1sen!2sin" 
                  width="100%" 
                  height="180" 
                  style={{ border: 0, borderRadius: "8px" }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </li>

              {/* Address 2 */}
              <li className="footerContactItem" style={{ ...s.footerContactItem, justifyContent: "center", textAlign: "center", marginTop: "10px" }}>
                <img src="/images/icon-location.png" alt="Address" className="footerContactIcon" style={s.footerContactIcon} />
                <span className="footerContactText" style={s.footerContactText}>Works 2: K-133, MIDC, Waluj, Aurangabad -431136 (M.S.) India.</span>
              </li>
              {/* Map 2 */}
              <li style={{ width: "100%", listStyle: "none", marginTop: "15px" }}>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60043.970999868376!2d75.15317382458568!3d19.850604924049247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb9a537c000001%3A0xdaa067dc876bffe6!2sB.M.C%20Electroplast%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1783672225751!5m2!1sen!2sin" 
                  width="100%" 
                  height="180" 
                  style={{ border: 0, borderRadius: "8px" }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </li>
            </ul>
          </div>

        </div>
        

        
        <div className="footerCopyrightDivider" style={s.footerCopyrightDivider}></div>
        <div className="footerCopyright" style={s.footerCopyright}>
          © 2026 BMC Electroplast Pvt. Ltd. All Rights Reserved.
        </div>
      </div>
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </footer>
  );
}