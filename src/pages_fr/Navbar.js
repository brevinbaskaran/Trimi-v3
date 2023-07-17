import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Navbar.css';

import logoImage from './nav-logo.png';

export default function Navbar({ onLanguageChange }) {
  const location = useLocation();
  const [language, setLanguage] = useState('EN'); // State for language selection

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const section = document.querySelector(hash);
      if (section) {
        window.scrollTo({
          top: section.offsetTop,
          behavior: 'smooth',
        });
      }
    }
  }, [location]);

  const handleLanguageChange = () => {
    const newLanguage = language === 'EN' ? 'FR' : 'EN';
    setLanguage(newLanguage);
    onLanguageChange(newLanguage); // Notify the parent component about the language change
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <img src={logoImage} alt="Logo" className="logo-image" />

          <ul className="nav-menu">
            <li className="nav-item">
              <a
                href="/"
                className="nav-links"
                aria-current={location.pathname === '/' ? 'page' : undefined}
              >
                {language === 'EN' ? 'Home' : 'Accueil'}
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/Classes"
                className="nav-links"
                aria-current={location.pathname === '/Classes' ? 'page' : undefined}
              >
                {language === 'EN' ? 'Online Classes' : 'Cours en Ligne'}
              </a>
            </li>
            <li className="nav-item">
              <a href="/#membership" className="nav-links">
                {language === 'EN' ? 'Membership' : 'Adhésion'}
              </a>
            </li>
            <li className="nav-item">
              <a href="/#team" className="nav-links">
                {language === 'EN' ? 'Team' : 'Équipe'}
              </a>
            </li>
            <li className="nav-item">
              <a href="/#contact" className="nav-links">
                {language === 'EN' ? 'Register' : 'Sinscrire'}
              </a>
            </li>
            <li className="nav-item">
              <div className="language-section">
                <button className="language-button" onClick={handleLanguageChange}>
                  {language}
                </button>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
