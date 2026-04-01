export default function About() {
  return (
    <section id="about" className="reveal">
      <div className="section-header">
        <div className="section-num">01</div>
        <div>
          <div className="section-sub">Who I Am</div>
          <div className="section-heading">
            About <em>Me</em>
          </div>
        </div>
      </div>
      <div className="about-grid">
        <div className="about-body">
          <p>
            I&apos;m a <strong>Full-Stack Web Developer</strong> pursuing a BS
            in Computer Science at SZABIST Karachi. I didn&apos;t wait for my
            degree to start shipping real products — I&apos;ve been building and
            delivering web applications professionally since January 2024.
          </p>
          <p>
            My professional experience includes a role as{" "}
            <strong>Backend Developer Internship at Airtective</strong> (Jun–Aug
            2025), where I developed and maintained back-end features using
            Node.js and Contributed to backend API development and integration.
            I&apos;ve also delivered full-stack React, Next.js, and Node.js
            projects for clients on <strong>Fiverr</strong> — handling
            everything from requirement gathering to final deployment.
          </p>
          <p>
            I thrive in collaborative environments, write clean and maintainable
            code, and take pride in understanding the <em>why</em> behind every
            feature I build. I&apos;m actively seeking an{" "}
            <strong>internship or junior role</strong> where I can grow fast
            alongside experienced engineers.
          </p>
        </div>
        <div>
          <div className="seeking-card">
            <h4>I&apos;m looking for</h4>
            <ul className="seeking-list">
              {[
                "Software Engineering Internship",
                "Front-End / Full-Stack Internship",
                "Freelance Client Projects",
                "Entry-Level Developer Roles",
                "Open-Source Collaboration",
              ].map((item) => (
                <li key={item} className="seeking-item">
                  <span className="seeking-arr">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="cert-mini">
            <div className="cert-mini-label">Certifications</div>
            <div className="cert-tag">
              Getting Started with JavaScript v3 — Frontend Masters
            </div>
            <div className="cert-tag">
              Google Prompting Essentials — Coursera
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
