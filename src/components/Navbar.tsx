import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
        <div className="navbar__inner">
          {/* Logo */}
          <a href="/" className="navbar__logo">
            <span className="navbar__logo-icon">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <circle cx="14" cy="14" r="13" stroke="#00C896" strokeWidth="2" />
                <path d="M14 7v14M7 14h14" stroke="#00C896" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </span>
            <span className="navbar__logo-text">
              Pharma<span className="navbar__logo-accent">Locate</span>
            </span>
          </a>
        </div>
      </nav>
    </>
  );
}