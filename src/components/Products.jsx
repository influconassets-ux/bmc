import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { s } from "../styles";
import { motion, AnimatePresence } from "framer-motion";

export default function Products() {
  const navigate = useNavigate();
  const [startIndex, setStartIndex] = useState(0);

  const products = [
    { id: "advanced-partner-panel", img: "product-grid-1.jpg", title: "Advanced partner panel builder with global MNC" },
    { id: "current-transformers", img: "product-grid-2.jpg", title: "Current Transformers (CT) & Potential Transformers (PT)" },
    { id: "vacuum-circuit-breakers", img: "product-grid-3.jpg", title: "Vacuum Circuit Breakers (VCB)" },
    { id: "vcb-outdoor", img: "product-grid-4.jpg", title: "Vacuum circuit breakers (VCB) for outdoor applications" },
    { id: "vacuum-contactors", img: "product-grid-5.jpg", title: "Vacuum Contactors" },
    { id: "epoxy-components", img: "product-grid-6.jpg", title: "Medium-voltage epoxy components" },
  ];

  const maxIndex = products.length - 3;

  const nextSlide = () => {
    setStartIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <>
      {/* ================= PRODUCTS ================= */}
      <section className="productsSection" style={s.productsSection}>
        <motion.h2
          className="productsTitle"
          style={{ ...s.productsTitle, cursor: "pointer" }}
          onClick={() => navigate("/products")}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          OUR PRODUCTS
        </motion.h2>

        <div className="productsCarouselWrap" style={s.productsCarouselWrap}>
          <div className="productsArrowLeft" style={{ ...s.productsArrowLeft, zIndex: 10, userSelect: "none" }} onClick={prevSlide}>&larr;</div>

          <div className="homeProductsWrap" style={{ flex: 1, overflow: "hidden", margin: "0 60px" }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={startIndex}
                className="homeProductsGrid"
                style={{ display: "flex", gap: 30 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                {products.slice(startIndex, startIndex + 3).map((p, i) => {
                  return (
                    <motion.div
                      className="productCard"
                      key={p.id}
                      style={{ ...s.productCard, cursor: "pointer", flex: 1 }}
                      whileHover={{ y: -15, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)" }}
                      onClick={() => navigate(`/products/${p.id}`)}
                    >
                      <div className="productImgWrap" style={s.productImgWrap}>
                        <img
                          src={`/images/${p.img}`}
                          alt={p.title.replace("\n", " ")}
                          className="productImg"
                          style={s.productImg}
                          onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder.jpg' }}
                        />
                      </div>
                      <p className="productTitle" style={s.productTitle}>
                        {p.title.split('\n').map((line, idx) => (
                          <React.Fragment key={idx}>
                            {line}
                            {idx !== p.title.split('\n').length - 1 && <br />}
                          </React.Fragment>
                        ))}
                      </p>
                    </motion.div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="productsArrowRight" style={{ ...s.productsArrowRight, zIndex: 10, userSelect: "none" }} onClick={nextSlide}>&rarr;</div>
        </div>

        <div className="productsBtnWrap" style={s.productsBtnWrap}>
          <button className="productsBtn" style={s.productsBtn} onClick={() => navigate("/products")}>VIEW ALL</button>
        </div>
      </section>
    </>
  );
}