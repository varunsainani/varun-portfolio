"use client";
import { useState, useEffect } from "react";
import { NAV_LINKS } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="nav"
      style={{
        background: scrolled
          ? "rgba(247,244,239,0.97)"
          : "rgba(247,244,239,0.92)",
      }}
    >
      <button
        className="nav-mark"
        aria-label="VS — Varun Sainani"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        VS
      </button>

      <ul className="nav-links">
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>

      <div className="nav-right">
        <div className="avail-pill">
          <div className="avail-dot" />
          Open to Work
        </div>
        <a href="/Varun-Resume.pdf" download className="btn-resume">
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
          Resume
        </a>
      </div>
    </nav>
  );
}
