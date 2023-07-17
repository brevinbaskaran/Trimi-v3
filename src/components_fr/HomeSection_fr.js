import React, { useRef, useEffect } from "react";
import './HomeSection.css';
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap";
import { Power3, gsap } from "gsap"
import './fonts/fonts.css';

export default function HeroSection() {
  let textRef = useRef(null);
  let statsRef = useRef(null);
  const tl = gsap.timeline();

  useEffect(() => {
    tl.to(textRef, 0.6, { opacity: 1, y: 0, ease: Power3 })
    tl.from(statsRef, 0.6, { opacity: 0, scale: 0.5, ease: Power3 }, "-=0.4");
  }, []);


  return (
    <div className="hero-container" id="hero">
      <div className="hero--header" ref={el => { textRef = el }}>
        <h3 className="energize">Revitalisez</h3>
        <h4>Votre potentiel</h4>

        <div className="hero--subheader">
          <h3>Atteignez vos objectifs de remise en forme avec nos cours haute énergie ! Conçus pour tous les niveaux de condition physique, nos entraînements amusants et motivants vous pousseront à atteindre des performances optimales. Préparez-vous à transpirer et à conquérir votre potentiel !</h3>
        </div>
        <div className="hero-btns">
          <Link to="/Classes_fr">
            <Button variant="primary" className="custom-primary-button">Commencer</Button>
          </Link>
          <div className="stats" ref={(el) => { statsRef = el }}>
            <h4>200+</h4>
            <h5>Membres inscrits</h5>
          </div>
        </div>
      </div>
    </div>
  )
}
