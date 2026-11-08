import React from "react";
import { s } from "../styles";
import { motion } from "framer-motion";

export default function AboutVision() {
  return (
    <section className="aboutVisionSection" style={s.aboutVisionSection}>
      <div className="aboutVisionInner" style={s.aboutVisionInner}>
        
        {/* Top Split Section */}
        <div className="aboutVisionTop" style={s.aboutVisionTop}>
          <motion.div 
            className="aboutVisionTextCol" 
            style={s.aboutVisionTextCol}
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            <h2 className="aboutVisionTitle" style={s.aboutVisionTitle}>
              THE <span className="aboutVisionTitleBold" style={s.aboutVisionTitleBold}>BEGINNING</span> OF A <span className="aboutVisionTitleBold" style={s.aboutVisionTitleBold}>VISION</span>
            </h2>
            <p className="aboutVisionSubtitle" style={s.aboutVisionSubtitle}>
              Every great journey begins with an unexpected opportunity, and for BMC,
              that journey started not inside a factory, but on the shooting floor of a film
              studio...
            </p>
            <p className="aboutVisionDesc" style={s.aboutVisionDesc}>
              In the early years, a young electrical engineering graduate, Mr. Santanu Mitra, found
              himself working on a unique challenge. His uncle, a distinguished film director
              and one of the shareholders of a film studio, required a reliable in-house power
              backup generator solution to support the demanding requirements of film
              production. What began as an engineering assignment soon became the spark that
              ignited a lifelong passion for electrical systems, innovation, and industrial excellence.
            </p>
            <p className="aboutVisionDesc" style={s.aboutVisionDesc}>
              Driven by curiosity, technical rigor, and an unwavering commitment to solving real-world problems, Mr. Mitra gradually established himself as a respected authority in
              the field of switchgear engineering. His deep understanding of electrical protection
              and control systems, combined with a relentless pursuit of quality and innovation,
              laid the foundation for what would eventually become BMC Electroplast Pvt. Ltd.
            </p>
            <p className="aboutVisionDesc" style={s.aboutVisionDesc}>
              From its inception, BMC was built on a singular vision—to create world-class
              switchgear solutions that would meet the evolving needs of industry while being
              engineered for reliability, safety, and performance. Under Mr. Mitra's leadership, the
              company steadily expanded its capabilities, investing in research, product
              development, and manufacturing excellence.
            </p>
          </motion.div>
          <motion.div 
            className="aboutVisionImgCol" 
            style={s.aboutVisionImgCol}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            <img src="/images/vision-factory.jpg" onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder.jpg' }} alt="Factory Vision" className="aboutVisionImg" style={s.aboutVisionImg} />
          </motion.div>
        </div>

        {/* Bottom Full Width Section */}
        <motion.div 
          className="aboutVisionBottom" 
          style={s.aboutVisionBottom}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <p className="aboutVisionDesc" style={s.aboutVisionDesc}>
            Over the decades, BMC evolved into a recognized technology leader in the medium-voltage switchgear industry. The company became one of the first Indian organizations to offer comprehensive technology and solutions across the MV switchgear spectrum, including vacuum circuit breakers, vacuum contactors, and associated switching technologies. Beyond manufacturing products, BMC developed expertise in complete technology transfer, engineering support, and turnkey solutions, serving customers not only across India but also in international markets.
          </p>
          <p className="aboutVisionDesc" style={s.aboutVisionDesc}>
            What started as a young engineer's determination to solve a practical problem has today grown into an organization driven by innovation, engineering excellence, and customer-centricity. The spirit that inspired the very first solution continues to guide BMC's journey—pushing boundaries, developing indigenous technologies, and shaping the future of switchgear engineering.
          </p>
          <p className="aboutVisionFooterText" style={s.aboutVisionFooterText}>
            From a film studio floor to becoming a trusted name in medium-voltage switchgear technology, the story of BMC is a testament to vision, perseverance, and the power of engineering excellence.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
