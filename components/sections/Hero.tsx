import { HERO_INFO_ROWS } from "@/lib/data";
import type { HeroInfoRow } from "@/types";

export default function Hero() {
  return (
    <section className="hero" style={{ padding: 0 }}>
      <div className="hero-left">
        <div className="hero-eyebrow">Full-Stack Web Developer</div>
        <h1 className="hero-name">Varun</h1>
        <span className="hero-name-italic">Sainani</span>
        <div className="hero-handle">
          <div className="hero-handle-line" />
          <div className="hero-handle-text">
            aka <span>@varcipher</span>
          </div>
        </div>
        <p className="hero-desc">
          CS student at <strong>SZABIST Karachi</strong> building
          production-ready web applications since before my degree started.
          React, Next.js, TypeScript &amp; Node.js. Eager to grow inside a
          strong team and deliver real impact.
        </p>
        <div className="hero-ctas">
          <a href="#contact" className="btn-primary-hero">
            Get in Touch
          </a>
          <a href="/Varun-resume.pdf" download className="btn-outline-hero">
            ↓ Download CV
          </a>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-quote-block">
          <span className="hero-quote-mark">&ldquo;</span>
          <p className="hero-quote-text">
            Eager to grow, built to deliver — every project is a chance to craft
            something that truly matters.
          </p>
        </div>
        <div className="hero-info-table">
          {HERO_INFO_ROWS.map((row: HeroInfoRow) => (
            <div key={row.key} className="hero-info-row">
              <span className="hero-info-key">{row.key}</span>
              <span
                className={`hero-info-val${row.variant === "rust" ? " rust" : row.variant === "green" ? " green-light" : ""}`}
              >
                {row.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
