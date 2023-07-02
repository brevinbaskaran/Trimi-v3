import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import {Button, Card} from "react-bootstrap";


import './Membership.css';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function Membership() {
  let text = useRef(null);

  useEffect(() => {
    gsap.to(text, {
      duration: 1,
      y: '10',
      opacity: 1,
      ease: 'ease-in',
      scrollTrigger: {
        trigger: text,
        start: 'top 90%',
        end: 'bottom 60%',
        toggleActions: 'restart complete ',
      },
    });
  }, []);

  return (

    <div id="membership" className="membership">
      <div className="membership--container">
        <h1>Start your Fitness Journey</h1>

        <div
          className="membership--wrap"
          ref={(el) => {
            text = el;
          }}
        >

<div className="gym-packages">
      <Card className="package-card">
        <Card.Body>
          <div className="package-header">
            <div className="package-price">
              <h5>Starter</h5>
              <br></br>
              <h2>$25.50</h2>
              <p>biweekly</p>
            </div>
          </div>
          <div className="package-features">
          <br></br>
          <p className="feature--item"> <i className="fas fa-check-circle"></i>Access to Basic Equipment</p>
            <p className="feature--item"> <i className="fas fa-check-circle"></i>Under Trainer Surveillance</p>
            <p className="feature--item"> <i className="fas fa-check-circle"></i>Indoor Swimming Pool Access</p>
            <br></br>
            <Button variant="primary" className="custom-primary-button">Get Started</Button>
          </div>
        </Card.Body>
      </Card>

      <Card className="package-card">
        <Card.Body>
          <div className="package-header">
            <div className="package-price">
            <h5>Pro</h5>
              <br></br>
              <h2>$30.25</h2>
              <p>biweekly</p>
            </div>
          </div>
          <div className="package-features">
          <br></br>
          <p className="feature--item"> <i className="fas fa-check-circle"></i>Access to ALL Equipment</p>
            <p className="feature--item"> <i className="fas fa-check-circle"></i>Guided by Trainer </p>
            <p className="feature--item"> <i className="fas fa-check-circle"></i>Sauna Access</p>
            <br></br>
          <Button variant="primary" className="custom-primary-button">Get Started</Button>
          </div>
        </Card.Body>
      </Card>

      <Card className="package-card">
        <Card.Body>
          <div className="package-header">
            <div className="package-price">
            <h5>Premium</h5>
              <br></br>
              <h2>$37.50</h2>
              <p>biweekly</p>
            </div>
          </div>
          <div className="package-features">
          <br></br>
          <p className="feature--item"> <i className="fas fa-check-circle"></i>Access to ALL Ameneties</p>
            <p className="feature--item"> <i className="fas fa-check-circle"></i>UNLIMITED Access to Classes</p>
            <p className="feature--item"> <i className="fas fa-check-circle"></i>Towel Services</p>
            <br></br>
          <Button variant="primary" className="custom-primary-button">Get Started</Button>
          </div>
        </Card.Body>
      </Card>
    </div>   
         


        
        </div>
      </div>
    </div>
  );
}
