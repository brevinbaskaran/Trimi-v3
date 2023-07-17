import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { AiOutlinePhone, AiOutlineMail, AiOutlineClockCircle } from 'react-icons/ai';

import './ContactForm.css';

const FormPage = () => {
  const [fullName, setFullName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [experienceLevel, setExperienceLevel] = useState('');
  const [interestedOnlineClass, setInterestedOnlineClass] = useState('');
  const [describeGoals, setDescribeGoals] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform form validation
    if (
      fullName.trim() === '' ||
      emailAddress.trim() === '' ||
      phoneNumber.trim() === '' ||
      serviceType === '' ||
      experienceLevel === ''
    ) {
      alert('Veuillez remplir tous les champs requis.');
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailAddress)) {
      alert('Veuillez entrer une adresse e-mail valide.');
      return;
    }

    // Submit the form or perform any further actions
   
    setFormSubmitted(true);
  };

  return (
    <div id="contact" className="form-container">
      <div className="form-content">
        <h2>Contactez-nous aujourd'hui</h2>
        <br />
        <Form onSubmit={handleSubmit}>
          <h3>Étape 1 : Remplissez les informations</h3>

          <Form.Group controlId="fullName">
            <Form.Label htmlFor="fullName"></Form.Label>
            <Form.Control
              type="text"
              id="fullName"
              placeholder="Entrez votre nom complet"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </Form.Group>
          <br />

          <Form.Group controlId="emailAddress">
            <Form.Label htmlFor="emailAddress"></Form.Label>
            <Form.Control
              type="email"
              id="emailAddress"
              placeholder="Entrez votre adresse e-mail"
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
            />
          </Form.Group>
          <br />

          <Form.Group controlId="phoneNumber">
            <Form.Label htmlFor="phoneNumber"></Form.Label>
            <Form.Control
              type="tel"
              id="phoneNumber"
              placeholder="Entrez votre numéro de téléphone"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </Form.Group>
          <br />
          <h3>Étape 2 : Sélectionnez les services</h3>

          <Form.Group controlId="serviceType">
            <Form.Label htmlFor="serviceType"></Form.Label>
            <Form.Control
              as="select"
              id="serviceType"
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
            >
              <option value="">Sélectionnez un type de service</option>
              <option value="Achats d'adhésion">Achats d'adhésion</option>
              <option value="Cours en ligne">Cours en ligne</option>
              <option value="Autre">Autre</option>
            </Form.Control>
          </Form.Group>
          <br />

          <Form.Group controlId="experienceLevel">
            <Form.Label htmlFor="experienceLevel"></Form.Label>
            <Form.Control
              as="select"
              id="experienceLevel"
              value={experienceLevel}
              onChange={(e) => setExperienceLevel(e.target.value)}
            >
              <option value="">Sélectionnez votre niveau d'expérience</option>
              <option value="Débutant">Débutant</option>
              <option value="Intermédiaire">Intermédiaire</option>
              <option value="Avancé">Avancé</option>
            </Form.Control>
          </Form.Group>
          <br />

          <Form.Group controlId="interestedOnlineClass">
            <Form.Label htmlFor="interestedOnlineClass"></Form.Label>
            <Form.Control
              as="select"
              id="interestedOnlineClass"
              value={interestedOnlineClass}
              onChange={(e) => setInterestedOnlineClass(e.target.value)}
            >
              <option value="">Sélectionnez un cours en ligne</option>
              <option value="Entraînement avec poids">Entraînement avec poids</option>
              <option value="Cardio">Cardio</option>
              <option value="Yoga">Yoga</option>
            </Form.Control>
          </Form.Group>
          <br />
          <h3>Étape 3 : Parlez-nous de vous</h3>
          <Form.Group controlId="describeGoals" className="describe-goals">
            <Form.Label htmlFor="describeGoals"></Form.Label>
            <Form.Control
              as="textarea"
              id="describeGoals"
              rows={3}
              placeholder="Décrivez vos objectifs"
              value={describeGoals}
              onChange={(e) => setDescribeGoals(e.target.value)}
            />
          </Form.Group>
          <br />
          <br />

          <Button variant="primary" type="submit" className="submit-button">
            Soumettre
          </Button>
        </Form>
        {formSubmitted && <p>Formulaire soumis avec succès !</p>}
      </div>

      <div className="map-container">
        <iframe
          src="https://maps.google.com/maps?width=80%25&amp;height=600&amp;hl=en&amp;q=%2075%20Laurier%20Ave%20E,%20Ottawa,%20ON%20K1N%206N5+(Smile%20Dental)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          width="500"
          height="100"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Google Map"
        ></iframe>
      </div>

      <div className="contact-info">
        <div className="contact-info-row">
          <div className="contact-item">
            <AiOutlinePhone color="#00FFF0" size={24} />
            <div className="contact-item-content">
              <h3 className="contact-heading">Téléphone</h3>
              <p>(647) 768 8391</p>
            </div>
          </div>

          <div className="contact-item">
            <AiOutlineMail color="#00FFF0" size={24} />
            <div className="contact-item-content">
              <h3 className="contact-heading">E-mail</h3>
              <p>info@trimifitness.com</p>
            </div>
          </div>

          <div className="contact-item">
            <AiOutlineClockCircle color="#00FFF0" size={24} />
            <div className="contact-item-content">
              <h3 className="contact-heading">Heures d'ouverture</h3>
              <p className="contact-subtext">Lundi - Vendredi : 8h00 - 18h00</p>
              <p className="contact-subtext">Samedi et Dimanche : 9h00 - 17h00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormPage;
