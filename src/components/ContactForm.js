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
      alert('Please fill in all required fields.');
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailAddress)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Submit the form or perform any further actions
   
    setFormSubmitted(true);
  };

  return (
    <div id="contact" className="form-container">
      <div className="form-content">
        <h2>Reach Out to Us Today</h2>
        <br />
        <Form onSubmit={handleSubmit}>
          <h3>Step 1: Fill out Information</h3>

          <Form.Group controlId="fullName">
            <Form.Label htmlFor="fullName"></Form.Label>
            <Form.Control
              type="text"
              id="fullName"
              placeholder="Enter your full name"
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
              placeholder="Enter your email address"
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
              placeholder="Enter your phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </Form.Group>
          <br />
          <h3>Step 2: Select Services</h3>

          <Form.Group controlId="serviceType">
            <Form.Label htmlFor="serviceType"></Form.Label>
            <Form.Control
              as="select"
              id="serviceType"
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
            >
              <option value="">Select a service type</option>
              <option value="Membership Purchases">Membership Purchases</option>
              <option value="Online Classes">Online Classes</option>
              <option value="Other">Other</option>
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
              <option value="">Select your experience level</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
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
              <option value="">Select an online class</option>
              <option value="Weight Training">Weight Training</option>
              <option value="Cardio">Cardio</option>
              <option value="Yoga">Yoga</option>
            </Form.Control>
          </Form.Group>
          <br />
          <h3>Step 3: Tell us About You</h3>
          <Form.Group controlId="describeGoals" className="describe-goals">
            <Form.Label htmlFor="describeGoals"></Form.Label>
            <Form.Control
              as="textarea"
              id="describeGoals"
              rows={3}
              placeholder="Describe your goals"
              value={describeGoals}
              onChange={(e) => setDescribeGoals(e.target.value)}
            />
          </Form.Group>
          <br />
          <br />

          <Button variant="primary" type="submit" className="submit-button">
            Submit
          </Button>
        </Form>
        {formSubmitted && <p>Form submitted successfully!</p>}
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
              <h3 className="contact-heading">Phone</h3>
              <p>(647) 768 8391</p>
            </div>
          </div>

          <div className="contact-item">
            <AiOutlineMail color="#00FFF0" size={24} />
            <div className="contact-item-content">
              <h3 className="contact-heading">Email</h3>
              <p>info@trimifitness.com</p>
            </div>
          </div>

          <div className="contact-item">
            <AiOutlineClockCircle color="#00FFF0" size={24} />
            <div className="contact-item-content">
              <h3 className="contact-heading">Opening Hours</h3>
              <p className="contact-subtext">Monday - Friday: 8:00am - 6:00pm</p>
              <p className="contact-subtext">Saturday & Sunday: 9:00am - 5:00pm</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormPage;
