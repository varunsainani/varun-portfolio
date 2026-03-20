import Link from "next/link";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-bg" />
      <div className="hero-dots" />

      <div className="hero-inner">
        <div className="hero-status">
          <div className="status-dot" />
          Available for internships &amp; freelance
        </div>

        <p className="hero-statement">
          <strong>Full-Stack Web Developer</strong> building complete web
          applications — from interface to backend.
          <br />
          CS student at SZABIST shipping <em>real products</em> since before the
          degree started.
        </p>

        <h1 className="hero-name">Varun Sainani</h1>
        <span className="hero-aka">aka Varcipher</span>

        <div className="hero-proof">
          <span className="proof-item">CS @ SZABIST Karachi</span>
          <span className="proof-item">Contributor @ Airtective</span>
          <span className="proof-item">Freelance Dev on Fiverr</span>
          <span className="proof-item">React · Next.js · Node.js</span>
        </div>

        <div className="hero-ctas">
          <Link href="#projects" className="cta-primary">
            View My Work ↓
          </Link>
          <Link href="#contact" className="cta-secondary">
            Work With Me
          </Link>
        </div>
      </div>

      <div className="hero-scroll">
        <div className="scroll-line" />
        <span className="scroll-txt">Scroll</span>
      </div>
    </section>
  );
}
