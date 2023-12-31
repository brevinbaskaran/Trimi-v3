import React, { useState, useEffect } from 'react';
import './Transformations.css';
import transform1 from './transform-1.jpeg';
import transform2 from './transform-2.jpeg';
import transform3 from './transform-3.jpeg';

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const clientPhotos = [
    {
      name: 'Jason Moama',
      progress: 'Pris 20 livres de muscle en 6 mois !',
      photo: transform1
    },
    {
      name: 'Lily Samson',
      progress: 'Perdu 50 livres en 3 mois !',
      photo: transform2
    },
    {
      name: 'Peter Doe',
      progress: 'Pris 10 livres de muscle en 1 an !',
      photo: transform3
    }
  ];

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % clientPhotos.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + clientPhotos.length) % clientPhotos.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="transformation">
      <br />
      <br />
      <h2 className="TransformHeading">Clients passés</h2>

      <figure className="carousel">
        <img src={clientPhotos[index].photo} alt={clientPhotos[index].name} />
        <figcaption className="carousel-info">
          <h2>{clientPhotos[index].name}</h2>
          <p>{clientPhotos[index].progress}</p>
        </figcaption>
        <div className="carousel-nav">
          <button className="prev" onClick={prevSlide}>
            &#8249;
          </button>
          <button className="next" onClick={nextSlide}>
            &#8250;
          </button>
        </div>
      </figure>
    </section>
  );
};

export default Carousel;
