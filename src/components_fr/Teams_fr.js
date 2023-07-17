import React, { useState } from "react";
import { Card, Container, Col } from 'react-bootstrap';
import Alex from './trainer_1.jpeg';
import Emma from './trainer-2.jpeg';
import Max from './trainer-3.jpeg';
import Sarah from './trainer-4.jpeg';

import './Teams.css';

const ContactCards = () => {
  const trainers = [
    {
      id: 1,
      name: 'Alex George',
      description: 'Présentation d\'Alex, un entraîneur personnel dévoué avec une expertise en musculation et en entraînement fonctionnel. Grâce à des entraînements sur mesure et à des conseils d\'experts, il aide les clients à développer leur force.',
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
      description: 'Rencontrez Emma, une coach sportive expérimentée spécialisée dans les entraînements par intervalles à haute intensité (HIIT) et la condition cardiovasculaire. Avec des entraînements dynamiques et des conseils personnalisés',
      image: Emma,
      socialMedia: {
        facebook: 'https://www.facebook.com/johndoe',
        twitter: 'https://www.twitter.com/johndoe',
        instagram: 'https://www.instagram.com/johndoe',
      },
    },

    {
      id: 3,
      name: 'Max Jamenson',
      description: 'Max est un entraîneur certifié passionné par l\'entraînement en force et la musculation. Avec ses connaissances et son style de coaching motivant, il aide les clients à sculpter leur physique de rêve et à atteindre leurs objectifs de fitness.',
      image: Max,
      socialMedia: {
        facebook: 'https://www.facebook.com/johndoe',
        twitter: 'https://www.twitter.com/johndoe',
        instagram: 'https://www.instagram.com/johndoe',
      },
    },

    {
      id: 4,
      name: 'Sarah Davidson',
      description: 'Rencontrez Sarah, une coach sportive polyvalente spécialisée dans l\'entraînement fonctionnel et le yoga. Elle donne aux clients les moyens d\'adopter une approche holistique, en développant leur flexibilité et leur conscience de soi pour un mode',
      image: Sarah,
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
    <div id="team" className="contact-cards-container">
      <br></br>
      <h1 className="heading">Entraînez-vous avec nos professionnels certifiés en fitness</h1>
      <br></br>
      <h3 className="subheading">Transformez votre fitness avec nos coachs certifiés et expérimentés.</h3>
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
                    <a href={trainer.socialMedia.facebook} className="facebook">
                      <i className="fab fa-facebook"></i>
                    </a>
                    <a href={trainer.socialMedia.twitter} className="twitter">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href={trainer.socialMedia.instagram} className="instagram">
                      <i className="fab fa-instagram"></i>
                    </a>
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
