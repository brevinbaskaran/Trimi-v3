import React, { useState, useEffect } from 'react';
import './Transformations.css';
import transform1 from './transform-1.jpeg'
import transform2 from './transform-2.jpeg'
import transform3 from './transform-3.jpeg'




const Carousel = () => {
    const [index, setIndex] = useState(0);
    const clientPhotos = [
        {
            name: 'Jason Moama',
            progress: 'Gained 20lbs of muscles in 6 months!',
            photo: transform1
        },
        {
            name: 'Lily Samson',
            progress: 'Lost 50lbs in 3 months!',
            photo: transform2
        },
        {
            name: 'Peter Doe',
            progress: 'Gained 10 lbs of muscle in 1 year!',
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
        <div className="transformation">
            <br></br><br></br>
            <h2 className="TransformHeading">Past Clients</h2>

            <div className="carousel">
                <img src={clientPhotos[index].photo} alt={clientPhotos[index].name} />
                <div className="carousel-info">
                    <h2>{clientPhotos[index].name}</h2>
                    <p>{clientPhotos[index].progress}</p>
                </div>
                <div className="carousel-nav">
                    <button className="prev" onClick={prevSlide}>&#8249;</button>
                    <button className="next" onClick={nextSlide}>&#8250;</button>
                </div>
            </div>
        </div>
    );
};

export default Carousel;
