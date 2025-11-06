"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"

const WhatWeDo: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLImageElement>(null)
  const [visible, setVisible] = useState({ one: false, two: false, three: false })
  const [screenSize, setScreenSize] = useState<"mobile" | "tablet" | "laptop" | "desktop" | "large">("desktop")

  // Detect screen size with more breakpoints
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width < 768) {
        setScreenSize("mobile")
      } else if (width < 1024) {
        setScreenSize("tablet")
      } else if (width < 1440) {
        setScreenSize("laptop")
      } else if (width < 1920) {
        setScreenSize("desktop")
      } else {
        setScreenSize("large")
      }
    }

    handleResize() // Set initial size
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const sectionRect = sectionRef.current.getBoundingClientRect()
      const sectionTop = sectionRect.top
      const sectionHeight = sectionRect.height
      const windowHeight = window.innerHeight

      // Calculate progress: 0 when section enters viewport, 1 when section leaves
      const progress = Math.max(0, Math.min(1, (windowHeight - sectionTop) / (windowHeight + sectionHeight)))

      if (lineRef.current) {
        lineRef.current.style.clipPath = `inset(0 0 ${100 - progress * 100}% 0)`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Intersection observer for fade-in animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible((prev) => ({ ...prev, [entry.target.id]: true }))
          }
        })
      },
      { threshold: 0.6 },
    )

    const items = document.querySelectorAll(".fade-section")
    items.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  // Responsive values based on screen size
  const getResponsiveValue = (values: {
    mobile?: string | number
    tablet?: string | number
    laptop?: string | number
    desktop?: string | number
    large?: string | number
  }) => {
    return values[screenSize] || values.desktop || values.laptop
  }

  // Section height
  const sectionHeight = getResponsiveValue({
    mobile: "250vh",
    tablet: "450vh",
    laptop: "390vh",
    desktop: "350vh",
    large: "230vh",
  })

  // Padding
  const horizontalPadding = getResponsiveValue({
    mobile: "20px",
    tablet: "40px",
    laptop: "60px",
    desktop: "80px",
    large: "100px",
  })

  return (
    <section
      ref={sectionRef}
      className="bg-cover"
      style={{
        position: "relative",
        width: "100%",
        fontFamily: "Helvetica",
        minHeight: sectionHeight,
        backgroundColor: "#F9F1DD",
        overflow: "hidden",
        paddingLeft: horizontalPadding,
        paddingRight: horizontalPadding,
        backgroundImage: "url(/bg12.png)",
        
backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Decorative Wheels */}
      <img
        src="/wheel1.svg"
        alt="Wheel Left"
        style={{
          position: "absolute",
          top: "30px",
          left: "-40px",
          width: getResponsiveValue({
            mobile: "120px",
            tablet: "150px",
            laptop: "180px",
            desktop: "200px",
            large: "220px",
          }),
          opacity: 0.4,
        }}
      />

      <img
        src="/whatwedowheel.svg"
        alt="Wheel Right"
        style={{
          position: "absolute",
          bottom: getResponsiveValue({
            mobile: "1200px",
            tablet: "1100px",
            laptop: "900px",
            desktop: "700px",
            large: "600px",
          }),
          right: "-30px",
          width: getResponsiveValue({
            mobile: "180px",
            tablet: "220px",
            laptop: "250px",
            desktop: "300px",
            large: "320px",
          }),
          opacity: 0.4,
        }}
      />

      {/* Center Line */}
      <img
        ref={lineRef}
        src="/line.svg"
        alt="Connecting Line"
        className="left-[22%] md:left-[55%]"
        style={{
          position: "absolute",
          top: 0,
          transform: "translateX(-50%)",
          height: getResponsiveValue({
            mobile: "2000px",
            tablet: "2800px",
            laptop: "2600px",
            desktop: "2800px",
            large: "2300px",
          }),
          objectFit: "cover",
          transition: "clip-path 2s ease-out",
        }}
      />

      {/* Pot Decoration */}
      {/* <img
        src="/potwhatwedo.svg"
        alt="Pot Decoration"
        style={{
          position: "absolute",
          top: getResponsiveValue({
            mobile: "800px",
            tablet: "700px",
            laptop: "650px",
            desktop: "700px",
            large: "620px",
          }),
          right: getResponsiveValue({
            mobile: "20px",
            tablet: "30px",
            laptop: "40px",
            desktop: "80px",
            large: "820px",
          }),
          width: getResponsiveValue({
            mobile: "300px",
            tablet: "400px",
            laptop: "500px",
            desktop: "540px",
            large: "560px",
          }),
        }}
      /> */}

      {/* Game Development */}
      <div
        id="one"
        className="fade-section"
        style={{
          position: "absolute",
          top: getResponsiveValue({
            mobile: "230px",
            tablet: "360px",
            laptop: "320px",
            desktop: "280px",
            large: "260px",
          }),
          left: getResponsiveValue({
            mobile: "40px",
            tablet: "120px",
            laptop: "200px",
            desktop: "280px",
            large: "720px",
          }),
          display: "flex",
          flexDirection: getResponsiveValue({ mobile: "column", tablet: "row", laptop: "row" }) as any,
          alignItems: "center",
          gap: "30px",
          opacity: visible.one ? 1 : 0,
          transform: visible.one ? "translateY(0)" : "translateY(40px)",
          transition: "all 0.8s ease-out",
        }}
      >
        <img
          src="/do3.png"
          alt="Game Development"
          style={{
            width: getResponsiveValue({
              mobile: "300px",
              tablet: "350px",
              laptop: "400px",
              desktop: "450px",
              large: "580px",
            }),
            objectFit: "cover",
          }}
        />
        <div
          style={{
            maxWidth: getResponsiveValue({
              mobile: "320px",
              tablet: "400px",
              laptop: "450px",
              desktop: "500px",
              large: "520px",
            }),
            paddingBottom: getResponsiveValue({
              mobile: "40px",
              tablet: "80px",
              laptop: "100px",
              desktop: "110px",
              large: "120px",
            }),
          }}
        >
          <h3
            style={{
              fontSize: getResponsiveValue({
                mobile: "1.8rem",
                tablet: "2rem",
                laptop: "2.1rem",
                desktop: "2.3rem",
                large: "2.5rem",
              }),
              fontWeight: 700,
              color: "white",
              marginBottom: "10px",
              lineHeight: 1.2,
            }}
          >
            Game Development
          </h3>
          <img src="/timeline-line 3.png" alt="" />
          <p
            style={{
              color: "#E3E3E3",
              fontSize: getResponsiveValue({
                mobile: "1rem",
                tablet: "1.05rem",
                laptop: "1.1rem",
                desktop: "1.15rem",
                large: "1.2rem",
              }),
              lineHeight: 1.6,
            }}
          >
            Crafting epic action-adventure games with rich storytelling and mythic depth.
          </p>
        </div>
      </div>

      {/* Puzzle & Mechanics Design */}
      <div
        id="two"
        className="fade-section"
        style={{
          position: "absolute",
          top: getResponsiveValue({
            mobile: "700px",
            tablet: "1350px",
            laptop: "1250px",
            desktop: "1150px",
            large: "900px",
          }),
          right: getResponsiveValue({
            mobile: "40px",
            tablet: "60px",
            laptop: "80px",
            desktop: "120px",
            large: "600px",
          }),
          display: "flex",
          flexDirection: getResponsiveValue({
            mobile: "column",
            tablet: "row-reverse",
            laptop: "row-reverse",
          }) as any,
          alignItems: "center",
          gap: "30px",
          opacity: visible.two ? 1 : 0,
          transform: visible.two ? "translateY(0)" : "translateY(40px)",
          transition: "all 0.8s ease-out",
        }}
      >
        <img
          src="/do22.png"
          alt="Puzzle & Mechanics Design"
          style={{
            width: getResponsiveValue({
              mobile: "300px",
              tablet: "350px",
              laptop: "400px",
              desktop: "450px",
              large: "580px",
            }),
            objectFit: "cover",
          }}
        />
        <div
          style={{
            maxWidth: getResponsiveValue({
              mobile: "320px",
              tablet: "450px",
              laptop: "500px",
              desktop: "550px",
              large: "580px",
            }),
            paddingBottom: getResponsiveValue({
              mobile: "40px",
              tablet: "70px",
              laptop: "90px",
              desktop: "95px",
              large: "100px",
            }),
          }}
        >
          <h3
            style={{
              fontSize: getResponsiveValue({
                mobile: "1.7rem",
                tablet: "1.9rem",
                laptop: "2rem",
                desktop: "2.2rem",
                large: "2.4rem",
              }),
              fontWeight: 700,
              color: "white",
              marginBottom: "10px",
              lineHeight: 1.2,
            }}
          >
            Puzzle & Mechanics Design
          </h3>
          <img src="/timeline-line 3.png" alt="" />
          <p
            style={{
              color: "#E3E3E3",
              fontSize: getResponsiveValue({
                mobile: "1rem",
                tablet: "1.1rem",
                laptop: "1.15rem",
                desktop: "1.25rem",
                large: "1.3rem",
              }),
              lineHeight: 1.6,
            }}
          >
            Building unique gameplay that challenges both mind and reflex.
          </p>
        </div>
      </div>

      {/* World-Building */}
      <div
        id="three"
        className="fade-section"
        style={{
          position: "absolute",
          top: getResponsiveValue({
            mobile: "1200px",
            tablet: "2150px",
            laptop: "1950px",
            desktop: "1850px",
            large: "1500px",
          }),
          left: getResponsiveValue({
            mobile: "40px",
            tablet: "80px",
            laptop: "120px",
            desktop: "160px",
            large: "500px",
          }),
          display: "flex",
          flexDirection: getResponsiveValue({ mobile: "column", tablet: "row", laptop: "row" }) as any,
          alignItems: "center",
          gap: "30px",
          opacity: visible.three ? 1 : 0,
          transform: visible.three ? "translateY(0)" : "translateY(40px)",
          transition: "all 0.8s ease-out",
        }}
      >
        <img
          src="/do11.png"
          alt="World-Building"
          style={{
            width: getResponsiveValue({
              mobile: "300px",
              tablet: "350px",
              laptop: "400px",
              desktop: "450px",
              large: "580px",
            }),
            objectFit: "cover",
          }}
        />
        <div
          style={{
            maxWidth: getResponsiveValue({
              mobile: "320px",
              tablet: "400px",
              laptop: "450px",
              desktop: "500px",
              large: "540px",
            }),
            paddingBottom: getResponsiveValue({
              mobile: "40px",
              tablet: "70px",
              laptop: "90px",
              desktop: "95px",
              large: "100px",
            }),
          }}
        >
          <h3
            style={{
              fontSize: getResponsiveValue({
                mobile: "1.8rem",
                tablet: "2rem",
                laptop: "2.1rem",
                desktop: "2.3rem",
                large: "2.5rem",
              }),
              fontWeight: 700,
              color: "white",
              marginBottom: "10px",
              lineHeight: 1.2,
            }}
          >
            World-Building
          </h3>
          <img src="/timeline-line 3.png" alt="" />
          <p
            style={{
              color: "#E3E3E3",
              fontSize: getResponsiveValue({
                mobile: "1rem",
                tablet: "1.1rem",
                laptop: "1.15rem",
                desktop: "1.25rem",
                large: "1.3rem",
              }),
              lineHeight: 1.6,
            }}
          >
            Creating living, breathing universes with lore, humour, and mystery.
          </p>
        </div>
      </div>
    </section>
  )
}

export default WhatWeDo
