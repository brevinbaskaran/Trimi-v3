import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import './Membership.css';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function Membership() {
  const history = useHistory(); // Create a history object using useHistory

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

  const handleButtonClick = () => {
    history.push('/Classes_fr');
  };

  return (
    <div id="membership" className="membership">
      <div className="membership--container">
        <h1>Commencez votre parcours de remise en forme</h1>

        <div className="membership--wrap" ref={(el) => (text = el)}>
          <div className="gym-packages">
            <Card className="package-card">
              <Card.Body>
                <div className="package-header">
                  <div className="package-price">
                    <h5>Débutant</h5>
                    <br />
                    <h2>25,50 $</h2>
                    <p>bihebdomadaire</p>
                  </div>
                </div>
                <div className="package-features">
                  <br />
                  <p className="feature--item">
                    <span aria-hidden="true">
                      <i className="fas fa-check-circle"></i>
                    </span>
                    <span className="sr-only">Accès à l'équipement de base</span>
                    Accès à l'équipement de base
                  </p>
                  <p className="feature--item">
                    <span aria-hidden="true">
                      <i className="fas fa-check-circle"></i>
                    </span>
                    <span className="sr-only">Sous surveillance d'un entraîneur</span>
                     Surveillance entraîneur
                  </p>
                  <p className="feature--item">
                    <span aria-hidden="true">
                      <i className="fas fa-check-circle"></i>
                    </span>
                    <span className="sr-only">Accès à la piscine intérieure</span>
                    Accès à la piscine intérieure
                  </p>
                  <br />
                  <Button variant="primary" className="custom-primary-button" onClick={handleButtonClick}>
                    Commencer
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
                    <h2>30,25 $</h2>
                    <p>bihebdomadaire</p>
                  </div>
                </div>
                <div className="package-features">
                  <br />
                  <p className="feature--item">
                    <span aria-hidden="true">
                      <i className="fas fa-check-circle"></i>
                    </span>
                    <span className="sr-only">Accès à tout l'équipement</span>
                    Accès à tout l'équipement
                  </p>
                  <p className="feature--item">
                    <span aria-hidden="true">
                      <i className="fas fa-check-circle"></i>
                    </span>
                    <span className="sr-only">Encadré par un entraîneur</span>
                    Encadré par un entraîneur
                  </p>
                  <p className="feature--item">
                    <span aria-hidden="true">
                      <i className="fas fa-check-circle"></i>
                    </span>
                    <span className="sr-only">Accès au sauna</span>
                    Accès au sauna
                  </p>
                  <br />
                  <Button variant="primary" className="custom-primary-button" onClick={handleButtonClick}>
                    Commencer
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
                    <h2>37,50 $</h2>
                    <p>bihebdomadaire</p>
                  </div>
                </div>
                <div className="package-features">
                  <br />
                  <p className="feature--item">
                    <span aria-hidden="true">
                      <i className="fas fa-check-circle"></i>
                    </span>
                    <span className="sr-only">Accès à toutes les commodités</span>
                    Accès à toutes les commodités
                  </p>
                  <p className="feature--item">
                    <span aria-hidden="true">
                      <i className="fas fa-check-circle"></i>
                    </span>
                    <span className="sr-only">Accès ILLIMITÉ aux cours</span>
                    Accès ILLIMITÉ aux cours
                  </p>
                  <p className="feature--item">
                    <span aria-hidden="true">
                      <i className="fas fa-check-circle"></i>
                    </span>
                    <span className="sr-only">Services de serviettes</span>
                    Services de serviettes
                  </p>
                  <br />
                  <Button variant="primary" className="custom-primary-button" onClick={handleButtonClick}>
                    Commencer
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
