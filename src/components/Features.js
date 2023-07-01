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
            <h2><span>WORKOUT PROGRAM</span></h2>
            <h2>MADE</h2>
            <h2>FOR YOU</h2>
            <div className="brush-stroke"></div> <br></br>
            <div className="paragraph" ref={el => { paragraphRef = el }}>
              <p>
                Wake up with a sunrise meditation, sweat it out with lunchtime HIIT.
                You’ll find movement for every mood with classes sorted by time, style, and skill level.
                Or Finish your day with a relaxing evening yoga session, and discover your transformative power.
              </p>
            </div>
          </div>
          <div className="image" ref={el => { imageRef = el }}>
            <img className="features-image" src="https://www.theglobeandmail.com/resizer/ooY9Q_M3a7_DZxyAnFM0PWmQunA=/arc-anglerfish-tgam-prod-tgam/public/RV7HT2OT6FEO7INUBJH7F3UXWU.jpg" alt="gym" />
          </div>
        </div>
      </div>
    
    
  );
  
}
