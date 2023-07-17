import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Features.css';

gsap.registerPlugin(ScrollTrigger);

export default function Features() {
  let headingRef = useRef(null);
  let paragraphRef = useRef(null);
  let imageRef = useRef(null);

  useEffect(() => {
    gsap.from(headingRef, {
      duration: 1,
      x: '-100%',
      opacity: 0,
      ease: 'ease-in',
      scrollTrigger: {
        trigger: headingRef,
        start: 'top 90%',
        end: 'bottom 60%',
        toggleActions: 'restart complete',
      },
    });

    gsap.from(paragraphRef, {
      duration: 1,
      x: '-100%',
      opacity: 0,
      ease: 'ease-in',
      scrollTrigger: {
        trigger: paragraphRef,
        start: 'top 90%',
        end: 'bottom 60%',
        toggleActions: 'restart complete',
      },
    });
  }, []);

  return (
    <div className="features">
      <div className="features-container">
        <div className="heading" ref={el => { headingRef = el }}>
          <h2><span>PROGRAMME D'ENTRAÎNEMENT</span></h2>
          <h2>POUR VOUS</h2>
          <div className="brush-stroke"></div>
          <br />
          <div className="paragraph" ref={el => { paragraphRef = el }}>
            <p>
              Réveillez-vous avec une méditation au lever du soleil, transpirez avec des séances de HIIT à l'heure du déjeuner.
              Vous trouverez des mouvements pour chaque humeur avec des cours triés par heure, style et niveau de compétence.
              Ou terminez votre journée avec une séance de yoga relaxante le soir et découvrez votre pouvoir transformateur.
            </p>
          </div>
        </div>
        <div className="image" ref={el => { imageRef = el }}>
          <img
            className="features-image"
            src="https://www.mensjournal.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTk2MTM2MDQyNDIzOTg1Mjk3/dbfrontsquat.jpg"
            alt="Salle de sport"
          />
        </div>
      </div>
    </div>
  );
}
