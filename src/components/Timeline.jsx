import React, { useRef, useState, useEffect } from "react";
import { s } from "../styles";

export default function Timeline() {
  const scrollRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const progress = scrollWidth > clientWidth ? scrollLeft / (scrollWidth - clientWidth) : 0;
      setScrollProgress(progress);
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <>
      <style>{`
        .timelineGrid::-webkit-scrollbar {
          display: none;
        }
        .timelineGrid {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
      {/* ================= TIMELINE ================= */}
      <section className="timelineSection" style={s.timelineSection}>
        <div className="timelineInner" style={s.timelineInner}>
          <h2 className="timelineTitle" style={s.timelineTitle}>
            <span className="timelineTitleBold" style={s.timelineTitleBold}>FOUR DECADES</span> <span className="timelineTitleLight" style={s.timelineTitleLight}>OF INNOVATION</span><br />
            <span className="timelineTitleLight" style={s.timelineTitleLight}>POWERING</span> <span className="timelineTitleBold" style={s.timelineTitleBold}>MODERN INFRASTRUCTURE</span>
          </h2>
          <div className="timelineTrackWrap" style={{ ...s.timelineTrackWrap, height: "auto", minHeight: 300 }}>
            <div className="timelineDashedLine" style={{ ...s.timelineDashedLine, width: "10000px", top: 50 }}></div>

            <div
              className="timelineGrid"
              ref={scrollRef}
              onScroll={handleScroll}
              style={{ ...s.timelineGrid, overflowX: "auto", overflowY: "hidden", scrollBehavior: "smooth", paddingBottom: 20, paddingLeft: 150, paddingRight: 150 }}
            >
              {(() => {
                const data = [
                  { year: "1986-87", icon: "icon-86.png", desc: "Beginning of BMC at Kolkata, WB, India with epoxy cast slip ring assembly for HT motors and post insulators" },
                  { year: "1988-89", icon: "icon-88.png", desc: "Support subsidiaries of organizations from United Kingdom for MV switchgear modules" },
                  { year: "1991-92", icon: "icon-91.png", desc: "Resin cast bushings for MV applications" },
                  { year: "1992-93", icon: "icon-92.png", desc: "Development of resin cast current transformers for MV applications" },
                  { year: "1994-95", icon: "icon-94.png", desc: "MV retrofit solutions for oil circuit breakers (SOCB and MOCB)" },
                  { year: "1996-97", icon: "icon-96.png", desc: "First MSME in India to develop 11kV VCB switchgear panels for indoor applications" },
                  { year: "1998-99", icon: "icon-98.png", desc: "Development of resin cast current transformers for higher voltage applications up to 33kV range" },
                  { year: "2000-01", icon: "icon-00.png", desc: "First MSME in India to develop 33kV VCB and switchgear panels for indoor applications" },
                  { year: "2001-02", icon: "icon-01.png", desc: "Beginning of design consultancy for MV transformers to Indian and overseas OEMs" },
                  { year: "2002-03", icon: "icon-02.png", desc: "Development of customised switchgear for loco mounted application for MV switchgear applications" },
                  { year: "2003-04", icon: "icon-03.png", desc: "Offerings of retrofit solutions for obsolete and imported vacuum circuit breakers and vacuum contactors" },
                  { year: "2004-05", icon: "icon-04.png", desc: "Establishment of Aurangabad unit in MIDC, Waluj, Maharashtra" },
                  { year: "2006-07", icon: "icon-06.png", desc: "First in India to develop encapsulated pole vacuum contactors for applications from 1.1kV to 11kV" },
                  { year: "2008-09", icon: "icon-08.png", desc: "Introduction of resin cast voltage transformers for MV applications" },
                  { year: "2009-10", icon: "icon-09.png", desc: "Consolidation and establishment of state-of-the-art manufacturing facility at Kolkata, WB, India" },
                  { year: "2010-11", icon: "icon-10.png", desc: "Consolidation and establishment of state-of-the-art manufacturing facility at MIDC, Waluj, Maharashtra" },
                  { year: "2012-13", icon: "icon-12.png", desc: "Commencement as OEM to South East Asian countries" },
                  { year: "2014-15", icon: "icon-14.png", desc: "Development of resin cast current transformers, voltage transformers, resin cast bushings for outdoor applications" },
                  { year: "2015-16", icon: "icon-15.png", desc: "Development of 11kV and 33kV outdoor kiosk for solar, wind and hydel power applications in the renewable energy sector" },
                  { year: "2015-18", icon: "icon-15-18.png", desc: "Supply of MV instrument transformers to FIFA World Cup 2022, Qatar" },
                  { year: "2016-17", icon: "icon-16.png", desc: "Development of resin cast voltage transformers for higher voltage applications up to 33kV range" },
                  { year: "2018-19", icon: "icon-18.png", desc: "Core component MV panel builder and global OEM for instrument transformers to Schneider Electric" },
                  { year: "2019-20", icon: "icon-19.png", desc: "First MSME in India to be approved as R&D center for switchgear by Department of Science and Industry Research under the Ministry of Science and Technology, Government of India" },
                  { year: "2021-22", icon: "icon-21.png", desc: "Commencement of exports to Middle East countries" },
                  { year: "2022-23", icon: "icon-22.png", desc: "Successful deployment of end-to-end technology transfer for vacuum interrupter manufacturing to multiple entities in India and abroad" },
                  { year: "2023-24", icon: "icon-23.png", desc: "Dedicated brownfield service and spares wing to cater to customised retrofit solutions for MV CT/PT and epoxy bushings up to 33kV rated voltage, as per end users’ tailor-made requirements" },
                  { year: "2024-25", icon: "icon-24.png", desc: "Epoxy CT/PT and bushings for customised applications in transformers, power quality equipment & other electrical loads" },
                  { year: "2025-26", icon: "icon-25.png", desc: "Establishment of MV equipment health monitoring and diagnostics including digitisation" }
                ];
                return (
                  <>
                    {data.map((item, i) => (
                      <div key={i} className="timelineItem" style={{ ...s.timelineItem, minWidth: 320, flexShrink: 0, height: 350 }}>
                        <div className="timelineAnchor" style={{ ...s.timelineAnchor, top: 20 }}>
                          <div className="timelineYear" style={s.timelineYear}>{item.year}</div>
                          <div className="timelineDot" style={s.timelineDot}></div>
                          <div className="timelineDropLine" style={s.timelineDropLine}></div>
                          <div className="timelineBottomRow" style={s.timelineBottomRow}>
                            <div className="timelineCircle" style={s.timelineCircle}>
                              <img src={`/images/${item.icon}`} alt={item.year} className="timelineIcon" style={s.timelineIcon} />
                            </div>
                            <p className="timelineDesc" style={{ ...s.timelineDesc, width: 200, paddingRight: 20 }}>{item.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                    <div style={{ minWidth: 150, flexShrink: 0, height: 350 }}></div>
                  </>
                );
              })()}
            </div>
          </div>

          <div className="timelineSliderWrap" style={{ display: "flex", justifyContent: "center", marginTop: "40px" }}>
            <div className="timelineSliderControls" style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <span className="timelineSliderArrow" style={{ cursor: "pointer", fontSize: "24px", color: "#102f83", userSelect: "none" }} onClick={scrollLeft}>&larr;</span>
              <div className="timelineSliderBar" style={{ width: "200px", height: "4px", backgroundColor: "#d1d5db", position: "relative", borderRadius: "2px" }}>
                <div
                  className="timelineSliderActive"
                  style={{
                    backgroundColor: "#102f83", height: "100%", borderRadius: "2px", position: "absolute",
                    width: "25%",
                    left: `${scrollProgress * 75}%`,
                    transition: "left 0.1s ease"
                  }}
                ></div>
              </div>
              <span className="timelineSliderArrow" style={{ cursor: "pointer", fontSize: "24px", color: "#102f83", userSelect: "none" }} onClick={scrollRight}>&rarr;</span>
            </div>
          </div>
          <div className="timelineDivider" style={s.timelineDivider}></div>
        </div>
      </section>
    </>
  );
}