import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom'; 


import './Membership.css';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function Membership() {

  const history = useHistory(); 

  let text = useRef(null);

  useEffect(() => {
    gsap.to(text, {
      duration: 1,
      y: '10',
      opacity: 1,
      ease: 'ease-in',
      scrollTrigger: {
        trigger: text,
        start: 'top 91%',
        end: 'bottom 60%',
        toggleActions: 'restart complete ',
      },
    });
  }, []);

  const handleButtonClick = () => {
    history.push('/Classes'); 
  };

  return (
    <div id="membership" className="membership">
      <div className="membership--container">
        <h1>Start your Fitness Journey</h1>

        <div className="membership--wrap" ref={(el) => (text = el)}>
          <div className="gym-packages">
            <Card className="package-card">
              <Card.Body>
                <div className="package-header">
                  <div className="package-price">
                    <h5>Starter</h5>
                    <br />
                    <h2>$25.50</h2>
                    <p>biweekly</p>
                  </div>
                </div>
                <div className="package-features">
                  <br />
                  <p className="feature--item">
                    <span aria-hidden="true">
                      <i className="fas fa-check-circle"></i>
                    </span>
                    <span className="sr-only">Access to Basic Equipment</span>
                    Access to Basic Equipment
                  </p>
                  <p className="feature--item">
                    <span aria-hidden="true">
                      <i className="fas fa-check-circle"></i>
                    </span>
                    <span className="sr-only">Under Trainer Surveillance</span>
                    Under Trainer Surveillance
                  </p>
                  <p className="feature--item">
                    <span aria-hidden="true">
                      <i className="fas fa-check-circle"></i>
                    </span>
                    <span className="sr-only">Indoor Swimming Pool Access</span>
                    Indoor Swimming Pool Access
                  </p>
                  <br />
                  <Button variant="primary" className="custom-primary-button" onClick={handleButtonClick}>
                    Get Started
                  </Button>
                </div>
              </Card.Body>
            </Card>

            <Card className="package-card">
              <Card.Body>
                <div className="package-header">
                  <div className="package-price">
                    <h5>Pro</h5>
                    <br />
                    <h2>$30.25</h2>
                    <p>biweekly</p>
                  </div>
                </div>
                <div className="package-features">
                  <br />
                  <p className="feature--item">
                    <span aria-hidden="true">
                      <i className="fas fa-check-circle"></i>
                    </span>
                    <span className="sr-only">Access to ALL Equipment</span>
                    Access to ALL Equipment
                  </p>
                  <p className="feature--item">
                    <span aria-hidden="true">
                      <i className="fas fa-check-circle"></i>
                    </span>
                    <span className="sr-only">Guided by Trainer</span>
                    Guided by Trainer
                  </p>
                  <p className="feature--item">
                    <span aria-hidden="true">
                      <i className="fas fa-check-circle"></i>
                    </span>
                    <span className="sr-only">Sauna Access</span>
                    Sauna Access
                  </p>
                  <br />
                  <Button variant="primary" className="custom-primary-button" onClick={handleButtonClick}>
                    Get Started
                  </Button>
                </div>
              </Card.Body>
            </Card>

            <Card className="package-card">
              <Card.Body>
                <div className="package-header">
                  <div className="package-price">
                    <h5>Premium</h5>
                    <br />
                    <h2>$37.50</h2>
                    <p>biweekly</p>
                  </div>
                </div>
                <div className="package-features">
                  <br />
                  <p className="feature--item">
                    <span aria-hidden="true">
                      <i className="fas fa-check-circle"></i>
                    </span>
                    <span className="sr-only">Access to ALL Amenities</span>
                    Access to ALL Amenities
                  </p>
                  <p className="feature--item">
                    <span aria-hidden="true">
                      <i className="fas fa-check-circle"></i>
                    </span>
                    <span className="sr-only">UNLIMITED Access to Classes</span>
                    UNLIMITED Access to Classes
                  </p>
                  <p className="feature--item">
                    <span aria-hidden="true">
                      <i className="fas fa-check-circle"></i>
                    </span>
                    <span className="sr-only">Towel Services</span>
                    Towel Services
                  </p>
                  <br />
                  <Button variant="primary" className="custom-primary-button" onClick={handleButtonClick}>
                    Get Started
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
