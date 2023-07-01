import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Navbar.css";

import logoImage from "./nav-logo.png";

export default function Navbar() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const section = document.querySelector(hash);
      if (section) {
        window.scrollTo({
          top: section.offsetTop,
          behavior: "smooth",
        });
      }
    }
  }, [location]);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <img src={logoImage} alt="Logo" className="logo-image" />

          <ul className="nav-menu">
            <li className="nav-item">
              <a href="/" className="nav-links">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/Classes" className="nav-links">
                Online Classes
              </a>
            </li>
            <li className="nav-item">
              <a href="/#membership" className="nav-links">
                Membership
              </a>
            </li>
            <li className="nav-item">
              <a href="/#team" className="nav-links">
                Team
              </a>
            </li>
            <li className="nav-item">
              <a href="/#contact" className="nav-links">
                Register Now
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
