"use client";

import { useState, useEffect } from "react";
import { NAV_LINKS } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav style={navStyle(scrolled)}>
      {/* VS Monogram */}
      <a
        href="#"
        aria-label="VS — Varun Sainani"
        style={markStyle}
        className="nav-mark"
      >
        VS
      </a>

      {/* Nav Links */}
      <ul style={linksStyle}>
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <a href={link.href} style={linkStyle} className="nav-link">
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Right side */}
      <div style={rightStyle}>
        <div style={pillStyle}>
          <span style={dotStyle} />
          Open to Work
        </div>
        <a
          href="/Varun-Resume.pdf"
          download
          style={resumeBtnStyle}
          className="resume-btn"
        >
          <DownloadIcon />
          Resume
        </a>
      </div>
    </nav>
  );
}

// ─── Inline Styles ────────────────────────────────────────────────────────────

const navStyle = (scrolled: boolean): React.CSSProperties => ({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 200,
  height: "64px",
  background: scrolled
    ? "rgba(247, 244, 239, 0.97)"
    : "rgba(247, 244, 239, 0.92)",
  backdropFilter: "blur(16px)",
  borderBottom: "1px solid #ddd8d0",
  display: "flex",
  alignItems: "center",
  padding: "0 56px",
  justifyContent: "space-between",
  transition: "background 0.3s",
});

const markStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "40px",
  height: "40px",
  border: "1.5px solid #1a1714",
  fontFamily: "'Playfair Display', serif",
  fontSize: "15px",
  fontWeight: 900,
  color: "#1a1714",
  letterSpacing: "-1px",
  flexShrink: 0,
  transition: "all 0.25s",
  cursor: "pointer",
};

const linksStyle: React.CSSProperties = {
  display: "flex",
  gap: 0,
  listStyle: "none",
};

const linkStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  padding: "0 20px",
  height: "64px",
  fontSize: "13px",
  fontWeight: 500,
  color: "#7a6e66",
  letterSpacing: "0.3px",
  transition: "color 0.2s",
};

const rightStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "14px",
};

const pillStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "7px",
  background: "#f0fdf4",
  border: "1px solid #bbf7d0",
  padding: "6px 14px",
  borderRadius: "40px",
  fontSize: "12px",
  fontWeight: 600,
  color: "#15803d",
  whiteSpace: "nowrap",
};

const dotStyle: React.CSSProperties = {
  width: "7px",
  height: "7px",
  background: "#15803d",
  borderRadius: "50%",
  display: "inline-block",
  animation: "blink 2.4s ease-in-out infinite",
};

const resumeBtnStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "6px",
  padding: "9px 20px",
  background: "#1a1714",
  color: "#f7f4ef",
  fontSize: "13px",
  fontWeight: 600,
  border: "none",
  cursor: "pointer",
  transition: "background 0.2s",
  borderRadius: "2px",
};

function DownloadIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}
