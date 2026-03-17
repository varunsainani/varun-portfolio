"use client";

import Link from "next/link";

export default function Nav() {
  return (
    <nav className="nav">
      <Link href="/" className="nav-logo">
        VS
      </Link>

      <div className="nav-links">
        <Link href="#services" className="nav-a">
          Services
        </Link>
        <Link href="#projects" className="nav-a">
          Projects
        </Link>
        <Link href="#experience" className="nav-a">
          Experience
        </Link>
        <Link href="#about" className="nav-a">
          About
        </Link>
        <div className="nav-div" />
        <a
          href="/Varun-Resume.pdf"
          className="nav-resume"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume ↓
        </a>
        <Link href="#contact" className="nav-hire">
          Hire Me
        </Link>
      </div>

      {/* Mobile — only show Hire Me */}
      <Link
        href="#contact"
        className="nav-mobile-hire"
        style={{ display: "none" }}
      >
        Hire Me
      </Link>

      <style jsx>{`
        @media (max-width: 768px) {
          .nav-mobile-hire {
            display: block !important;
          }
        }
      `}</style>
    </nav>
  );
}
