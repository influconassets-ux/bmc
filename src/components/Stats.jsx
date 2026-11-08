import React, { useEffect, useRef } from "react";
import { s } from "../styles";
import { animate, useInView } from "framer-motion";

function Counter({ to, isLoading }) {
  const ref = useRef();
  // Trigger the animation once the element is 50px into the viewport
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    // Wait until both in view and loading has finished
    if (isInView && !isLoading) {
      const controls = animate(0, to, {
        duration: 2.5, // 2.5 seconds for a smooth, cinematic count
        ease: "easeInOut",
        onUpdate(value) {
          if (ref.current) {
            ref.current.textContent = Math.round(value);
          }
        }
      });
      return () => controls.stop();
    }
  }, [to, isInView, isLoading]);

  return <span ref={ref}>0</span>;
}

export default function Stats({ isLoading }) {
  return (
    <>
{/* ================= STATS ================= */}
      <div className="statsSection" style={s.statsSection}>
        <div className="statsInner" style={s.statsInner}>
          <div className="statBlock" style={s.statBlock}>
            <div className="statVal" style={s.statVal}><Counter to={100} isLoading={isLoading} />+</div>
            <div className="statLabel" style={s.statLabel}>Clients</div>
          </div>
          <div className="slash" style={s.slash}>/</div>
          <div className="statBlock" style={s.statBlock}>
            <div className="statVal" style={s.statVal}><Counter to={150} isLoading={isLoading} />+</div>
            <div className="statLabel" style={s.statLabel}>Manpower</div>
          </div>
          <div className="slash" style={s.slash}>/</div>
          <div className="statBlock" style={s.statBlock}>
            <div className="statVal" style={s.statVal}><Counter to={15} isLoading={isLoading} />+</div>
            <div className="statLabel" style={s.statLabel}>Technology Consultancies</div>
          </div>
        </div>

      </div>
    </>
  );
}