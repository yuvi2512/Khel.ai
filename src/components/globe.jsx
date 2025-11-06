import React, { useState, Suspense } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const GlobeComponent = () => {
  const [hoveredPin, setHoveredPin] = useState(null);

  const globeImage = "/image.png";

  const markers = [
    {
      id: 1,
      top: "61%",
      left: "65%",
      city: "Delhi",
      name: "Virat Kohli",
      country: "India",
      img: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Virat_Kohli_in_PMO_New_Delhi.jpg",
    },
    {
      id: 2,
      top: "44%",
      left: "46%",
      city: "London",
      name: "Harry Kane",
      country: "United Kingdom",
      img: "https://upload.wikimedia.org/wikipedia/commons/b/ba/FC_Red_Bull_Salzburg_gegen_Bayern_M%C3%BCnchen_%282025-01-06_Testspiel%29_28.jpg",
    },
    {
      id: 3,
      top: "60%",
      left: "28%",
      city: "New York",
      name: "LeBron James",
      country: "USA",
      img: "https://upload.wikimedia.org/wikipedia/commons/7/7a/LeBron_James_%2851959977144%29_%28cropped2%29.jpg",
    },
    {
      id: 4,
      top: "64%",
      left: "55%",
      city: "Nagrig",
      name: "Mohamed Salah",
      country: "Egypt",
      img: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Mohamed_Salah_2018.jpg",
    },
    {
      id: 5,
      top: "47%",
      left: "50%",
      city: "Paris",
      name: "Kylian Mbappé",
      country: "France",
      img: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Picture_with_Mbapp%C3%A9_%28cropped%29.jpg",
    },
  ];

  return (
    <div style={{ width: "100%", height: "auto" }}>
      <section
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          background: "radial-gradient(circle at 50% 60%, #000 60%, #020202)",
        }}
      >
        <div style={{ position: "relative", width: "100vw" }}>
       
          <img
            src={globeImage}
            alt="Half Globe"
            loading="lazy"
            decoding="async"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "brightness(1.1) contrast(1.3)",
            }}
          />

          {markers.map((marker) => (
            <div
              key={marker.id}
              onMouseEnter={() => setHoveredPin(marker)}
              onMouseLeave={() => setHoveredPin(null)}
              style={{
                position: "absolute",
                top: marker.top,
                left: marker.left,
                transform: "translate(-50%, -100%)",
                cursor: "pointer",
                zIndex: hoveredPin?.id === marker.id ? 9999 : 10,
              }}
            >
              <FaMapMarkerAlt
                size={28}
                color={hoveredPin?.id === marker.id ? "#FF6B00" : "red"}
                style={{
                  transition: "0.3s",
                  transform:
                    hoveredPin?.id === marker.id ? "scale(1.3)" : "scale(1)",
                }}
              />

              <AnimatePresence>
                {hoveredPin?.id === marker.id && (
                  <Suspense fallback={<div style={{ color: "white" }}>Loading...</div>}>
                    <motion.div
                      key={marker.id}
                      initial={{ opacity: 0, y: 20, scale: 0.85 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        transition: {
                          duration: 0.4,
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                        },
                      }}
                      exit={{
                        opacity: 0,
                        y: 15,
                        scale: 0.9,
                        transition: { duration: 0.25 },
                      }}
                      style={{
                        position: "absolute",
                        bottom: "calc(10% + 15px)",
                        right:"5%",
                        transform: "translateX(-80%)",
                        background: "#1a1a1a",
                        color: "#fff",
                        padding: "10px 5px",
                        borderRadius: "16px",
                        pointerEvents: "none",
                        boxShadow: "0 8px 25px rgba(0, 0, 0, 0.3)",
                        width: "180px",
                        height: "200px",
                        backdropFilter: "blur(10px)",
                        zIndex: 10,
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src={hoveredPin.img}
                        alt={hoveredPin.name}
                        loading="lazy"
                        decoding="async"
                        style={{
                          width: "100%",
                          height: "150px",
                          borderRadius: "10px",
                          objectFit: "cover",
                          objectPosition: "top center",
                          marginBottom: "8px",
                        }}
                      />

                      <div style={{ padding: "0 10px", textAlign: "left" }}>
                        <div
                          style={{
                            fontSize: "16px",
                            fontWeight: "bold",
                            color: "white",
                            marginBottom: "4px",
                          }}
                        >
                          {hoveredPin.name}
                        </div>
                        <div
                          style={{
                            fontSize: "13px",
                            color: "#bbb",
                            marginBottom: "3px",
                          }}
                        >
                          {hoveredPin.country}
                        </div>
                      </div>
                    </motion.div>
                  </Suspense>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      <section
        style={{
          background: "#000",
          padding: "120px 10vw",
          color: "#fff",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <p
          style={{
            color: "#FF6B00",
            fontSize: "14px",
            marginBottom: "12px",
            letterSpacing: "2px",
          }}
        >
          ECOSYSTEM
        </p>

        <h2
          style={{
            fontSize: "48px",
            fontWeight: "700",
            lineHeight: "1.3",
            maxWidth: "900px",
          }}
        >
          We bridge sports, gaming, and lifestyle by transforming collectibles
          into dynamic, cross-platform assets across mobile experiences.
        </h2>
      </section>
    </div>
  );
};

export default GlobeComponent;
