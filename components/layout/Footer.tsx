export default function Footer() {
  return (
    <footer>
      <div className="footer-left">
        <div className="footer-name">Varun Sainani</div>
        <div className="footer-handle">
          aka <span>@varcipher</span> · SZABIST Karachi · 2nd Year CS
        </div>
      </div>
      <div className="footer-center">
        Open to Internships &amp; Freelance Projects
        <br />
        Karachi, Pakistan · Available Remotely
      </div>
      <div className="footer-right">
        <div className="footer-links">
          <a
            href="https://linkedin.com/in/varunsainani"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/varunsainani"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            GitHub
          </a>
          <a href="mailto:varunsainani0990@gmail.com" className="footer-link">
            Email
          </a>
        </div>
        <div className="footer-copy">
          © 2025 Varun Sainani. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
