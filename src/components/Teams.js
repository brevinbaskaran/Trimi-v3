import React, { useState } from "react";
import { Card, Container, Col } from 'react-bootstrap';
import Alex from './trainer_1.jpeg';

import './Teams.css';

const ContactCards = () => {
  const trainers = [
    {
      id: 1,
      name: 'Alex George',
      description: 'Introducing Alex, a dedicated male personal trainer with expertise in weightlifting and functional training. Through tailored workouts and expert guidance, he helps clients build strength.',
      image: Alex,
      socialMedia: {
        facebook: 'https://www.facebook.com/johndoe',
        twitter: 'https://www.twitter.com/johndoe',
        instagram: 'https://www.instagram.com/johndoe',
      },
    },
    {
      id: 2,
      name: 'Emma Austin',
      description: 'Meet Emma, an experienced personal trainer specializing in HIIT and cardiovascular conditioning. With dynamic workouts and personalized guidance, she boosts fitness levels and promotes beauty.',
      image: Alex,
      socialMedia: {
        facebook: 'https://www.facebook.com/johndoe',
        twitter: 'https://www.twitter.com/johndoe',
        instagram: 'https://www.instagram.com/johndoe',
      },
    },

    {
      id: 3,
      name: 'Max Jamenson',
      description: ' Max is  a certified trainer with a passion for strength training and bodybuilding. With his  knowledge and motivational coaching style, he helps clients sculpt their dream physiques and achieve their fitness goals.',
      image: Alex,
      socialMedia: {
        facebook: 'https://www.facebook.com/johndoe',
        twitter: 'https://www.twitter.com/johndoe',
        instagram: 'https://www.instagram.com/johndoe',
      },
    },

    {
      id: 4,
      name: 'Sarah Davidson',
      description: 'Meet Sarah, a versatile personal trainer specializing in functional training and yoga. She empowers clients through a holistic approach, building flexibility, and mindfulness for a balanced lifestyle.',
      image: Alex,
      socialMedia: {
        facebook: 'https://www.facebook.com/johndoe',
        twitter: 'https://www.twitter.com/johndoe',
        instagram: 'https://www.instagram.com/johndoe',
      },
    },
    // Add more trainers here
  ];

  const [hoveredCard, setHoveredCard] = useState(null);

  const handleCardHover = (cardId) => {
    setHoveredCard(cardId);
  };

  return (
    <div id="team" className="contact-cards-container"> <br></br>
    <h1 className="heading">Train with Our Certified Fitness Professionals</h1>
    <br></br>
    <h3 className="subheading">Transform your fitness with our certified and experienced trainers.</h3>
    <br></br> <br></br>
    <Container>
      {trainers.map((trainer) => (
        <Card 
        className={`contact-card ${hoveredCard === trainer.id ? 'hovered' : ''}`}
        onMouseEnter={() => handleCardHover(trainer.id)}
        onMouseLeave={() => handleCardHover(null)}
      >
        <Col sm={6} md={4}>
          <div className="card-image-wrapper">
            <Card.Img variant="top" src={trainer.image} alt={trainer.name} />
            {hoveredCard === trainer.id && (
            <div className="social-icons">
              {              <div className="social-icons">
                <a href={trainer.socialMedia.facebook} className="facebook">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href={trainer.socialMedia.twitter} className="twitter">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href={trainer.socialMedia.instagram} className="instagram">
                  <i className="fab fa-instagram"></i>
                </a>

              </div>}
            </div>  
          )}
          </div>
        </Col>
          <Card.Body>
            <br></br>
            <Card.Title>{trainer.name}</Card.Title>
            <br></br>
            <Card.Text>{trainer.description}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </Container>
    </div>

  );

};




export default ContactCards;
