import { HERO_INFO_ROWS } from "@/lib/data";
import type { HeroInfoRow } from "@/types";

export default function Hero() {
  return (
    <section style={heroStyle}>
      {/* ── LEFT ── */}
      <div style={leftStyle}>
        <div style={eyebrowStyle}>Full-Stack Web Developer</div>

        <h1 style={nameStyle}>Varun</h1>
        <span style={nameItalicStyle}>Sainani</span>

        {/* @varcipher handle */}
        <div style={handleWrapStyle}>
          <div style={handleLineStyle} />
          <p style={handleTextStyle}>
            aka{" "}
            <span
              style={{ color: "#c4440a", fontWeight: 700, fontStyle: "normal" }}
            >
              @varcipher
            </span>
          </p>
        </div>

        <p style={descStyle}>
          CS student at{" "}
          <strong style={{ color: "#1a1714", fontWeight: 600 }}>
            SZABIST Karachi
          </strong>{" "}
          building production-ready web applications since before my degree
          started. React, Next.js, TypeScript &amp; Node.js. Eager to grow
          inside a strong team and deliver real impact.
        </p>

        <div style={ctasStyle}>
          <a href="#contact" style={btnPrimaryStyle} className="btn-primary">
            Get in Touch
          </a>
          <a
            href="/Varun-Resume.pdf"
            download
            style={btnOutlineStyle}
            className="btn-outline"
          >
            ↓ Download CV
          </a>
        </div>
      </div>

      {/* ── RIGHT ── */}
      <div style={rightStyle}>
        {/* Decorative VS watermark */}
        <span style={watermarkStyle} aria-hidden="true">
          VS
        </span>

        <div style={quoteBlockStyle}>
          <span style={quoteMarkStyle}>&ldquo;</span>
          <p style={quoteTextStyle}>
            Eager to grow, built to deliver — every project is a chance to craft
            something that truly matters.
          </p>
        </div>

        <div style={infoTableStyle}>
          {HERO_INFO_ROWS.map((row: HeroInfoRow) => (
            <div key={row.key} style={infoRowStyle}>
              <span style={infoKeyStyle}>{row.key}</span>
              <span style={infoValStyle(row.variant)}>
                {row.variant === "green" && <GreenDot />}
                {row.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Green pulsing dot ────────────────────────────────────────────────────────

function GreenDot() {
  return (
    <span
      style={{
        display: "inline-block",
        width: "6px",
        height: "6px",
        background: "#86efac",
        borderRadius: "50%",
        marginRight: "6px",
        animation: "blink 2.4s infinite",
        flexShrink: 0,
      }}
    />
  );
}

// ─── Value style based on variant ─────────────────────────────────────────────

function infoValStyle(variant?: HeroInfoRow["variant"]): React.CSSProperties {
  const base: React.CSSProperties = {
    fontSize: "13.5px",
    fontWeight: 300,
    display: "flex",
    alignItems: "center",
  };
  if (variant === "rust") return { ...base, color: "#e8a882", fontWeight: 500 };
  if (variant === "green")
    return { ...base, color: "#86efac", fontWeight: 600 };
  return { ...base, color: "rgba(255,255,255,0.75)" };
}

// ─── Styles ───────────────────────────────────────────────────────────────────

const heroStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  minHeight: "100vh",
  paddingTop: "64px",
};

const leftStyle: React.CSSProperties = {
  padding: "72px 56px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  borderRight: "1px solid #ddd8d0",
  position: "relative",
};

const eyebrowStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "14px",
  fontSize: "11px",
  fontWeight: 600,
  letterSpacing: "4px",
  textTransform: "uppercase",
  color: "#7a6e66",
  marginBottom: "28px",
};

const nameStyle: React.CSSProperties = {
  fontFamily: "'Playfair Display', serif",
  fontSize: "clamp(60px, 7.5vw, 96px)",
  fontWeight: 900,
  lineHeight: 0.92,
  letterSpacing: "-2.5px",
  color: "#1a1714",
  marginBottom: "4px",
};

const nameItalicStyle: React.CSSProperties = {
  fontFamily: "'Playfair Display', serif",
  fontSize: "clamp(60px, 7.5vw, 96px)",
  fontWeight: 700,
  fontStyle: "italic",
  lineHeight: 0.92,
  letterSpacing: "-2px",
  color: "#c4440a",
  display: "block",
  marginBottom: "20px",
};

const handleWrapStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "28px",
};

const handleLineStyle: React.CSSProperties = {
  width: "24px",
  height: "1px",
  background: "#cdc5bc",
};

const handleTextStyle: React.CSSProperties = {
  fontFamily: "'Playfair Display', serif",
  fontSize: "15px",
  fontStyle: "italic",
  fontWeight: 400,
  color: "#7a6e66",
  letterSpacing: "0.5px",
};

const descStyle: React.CSSProperties = {
  fontSize: "15.5px",
  fontWeight: 300,
  lineHeight: 1.85,
  color: "#7a6e66",
  maxWidth: "420px",
  marginBottom: "44px",
  borderLeft: "2px solid #e8c4b0",
  paddingLeft: "18px",
};

const ctasStyle: React.CSSProperties = {
  display: "flex",
  gap: "14px",
  flexWrap: "wrap",
};

const btnPrimaryStyle: React.CSSProperties = {
  padding: "14px 34px",
  background: "#1a1714",
  color: "#f7f4ef",
  fontSize: "13px",
  fontWeight: 600,
  letterSpacing: "0.5px",
  border: "none",
  cursor: "pointer",
  borderRadius: "2px",
  transition: "background 0.2s",
  display: "inline-block",
};

const btnOutlineStyle: React.CSSProperties = {
  padding: "14px 34px",
  background: "transparent",
  color: "#1a1714",
  fontSize: "13px",
  fontWeight: 500,
  border: "1px solid #e8e2dc",
  borderRadius: "2px",
  cursor: "pointer",
  transition: "all 0.2s",
  display: "inline-block",
};

const rightStyle: React.CSSProperties = {
  background: "#1a1714",
  padding: "72px 56px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  position: "relative",
  overflow: "hidden",
};

const watermarkStyle: React.CSSProperties = {
  position: "absolute",
  top: "-60px",
  right: "-24px",
  fontFamily: "'Playfair Display', serif",
  fontSize: "320px",
  fontWeight: 900,
  fontStyle: "italic",
  color: "rgba(255,255,255,0.03)",
  lineHeight: 1,
  pointerEvents: "none",
  userSelect: "none",
};

const quoteBlockStyle: React.CSSProperties = {
  position: "relative",
  zIndex: 1,
};

const quoteMarkStyle: React.CSSProperties = {
  fontFamily: "'Playfair Display', serif",
  fontSize: "80px",
  lineHeight: "0.6",
  color: "#c4440a",
  display: "block",
  marginBottom: "20px",
  opacity: 0.8,
};

const quoteTextStyle: React.CSSProperties = {
  fontFamily: "'Playfair Display', serif",
  fontSize: "22px",
  fontStyle: "italic",
  fontWeight: 400,
  color: "rgba(255,255,255,0.65)",
  lineHeight: 1.65,
  maxWidth: "360px",
};

const infoTableStyle: React.CSSProperties = {
  position: "relative",
  zIndex: 1,
};

const infoRowStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "16px 0",
  borderBottom: "1px solid rgba(255,255,255,0.08)",
};

const infoKeyStyle: React.CSSProperties = {
  fontSize: "10px",
  fontWeight: 600,
  letterSpacing: "3px",
  textTransform: "uppercase",
  color: "rgba(255,255,255,0.3)",
};
