import React from "react";
import { useNavigate } from "react-router-dom";
import { s } from "../styles";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemAnim = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeInOut" } }
};

export default function ProductsGrid() {
  const navigate = useNavigate();

  const products = [
    { id: "advanced-partner-panel", img: "product-grid-1.jpg", title: "Advanced partner panel builder with global MNC" },
    { id: "current-transformers", img: "product-grid-2.jpg", title: "Current Transformers (CT) & Potential Transformers (PT)" },
    { id: "vacuum-circuit-breakers", img: "product-grid-3.jpg", title: "Vacuum Circuit Breakers (VCB)" },
    { id: "vcb-outdoor", img: "product-grid-4.jpg", title: "Vacuum circuit breakers (VCB) for outdoor applications" },
    { id: "vacuum-contactors", img: "product-grid-5.jpg", title: "Vacuum Contactors" },
    { id: "epoxy-components", img: "product-grid-6.jpg", title: "Medium-voltage epoxy components" },
  ];

  return (
    <>
      <section className="prodGridSection" style={s.prodGridSection}>
        <div className="prodGridInner" style={s.prodGridInner}>
          <motion.h2
            className="prodGridTitle"
            style={s.prodGridTitle}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2 }}
          >
            OUR PRODUCTS
          </motion.h2>
          <motion.div
            className="prodGridContainer"
            style={s.prodGridContainer}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {products.map((p, i) => (
              <motion.div
                key={i}
                className="prodGridCard"
                style={{ ...s.prodGridCard, cursor: "pointer" }}
                variants={itemAnim}
                whileHover={{ y: -10, boxShadow: "0 20px 40px -10px rgba(0,0,0,0.15)" }}
                onClick={() => navigate(`/products/${p.id}`)}
              >
                <div className="prodGridImgWrap" style={s.prodGridImgWrap}>
                  <img
                    src={`/images/${p.img}`}
                    alt={p.title.replace("\n", " ")}
                    className="prodGridImg" style={s.prodGridImg}
                    onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder.jpg' }}
                  />
                </div>
                <p className="prodGridCardTitle" style={s.prodGridCardTitle}>
                  {p.title.split('\n').map((line, idx) => (
                    <React.Fragment key={idx}>
                      {line}
                      {idx !== p.title.split('\n').length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>
              </motion.div>
            ))}
          </motion.div>



        </div>
      </section>
    </>
  );
}
