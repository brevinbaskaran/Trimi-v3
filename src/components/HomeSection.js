import React, { useRef, useEffect } from "react";
import './HomeSection.css';
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap";
import { Power3, gsap } from "gsap"
import './fonts/fonts.css';

export default function HeroSection() {
  let headingRef = useRef(null);
  let statsRef = useRef(null);
  const animation = gsap.timeline();

  useEffect(() => {
    animation.to(headingRef, 0.6, { opacity: 1, y: 0, ease: 'power3' });
    animation.from(statsRef, 0.7, { opacity: 0, scale: 0.5, ease: 'power3' }, "-=0.5");
  }, []);

  return (
    <div className="hero-container" id="hero">
      <div className="hero--header" ref={el => { headingRef = el }}>
        <h3 className="energize">Energize</h3>
        <h4>Your Potential</h4>

        <div className="hero--subheader">
          <h3>Achieve your fitness goals with our high-energy classes! Designed for all fitness levels, our fun and motivating workouts will push you to reach peak performance. Get ready to sweat and conquer your potential!</h3>
        </div>
        <div className="hero-btns">
          <Link to="/Classes">
            <Button variant="primary" className="custom-primary-button">Get Started</Button>
          </Link>
          <div className="stats" ref={(el) => { statsRef = el }}>
            <h4>200+</h4>
            <h5>Members Joined</h5>

          </div>
        </div>

      </div>



    </div>
  )
}