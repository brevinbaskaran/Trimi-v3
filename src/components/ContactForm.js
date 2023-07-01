import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { AiOutlinePhone, AiOutlineMail, AiOutlineClockCircle } from 'react-icons/ai';

import './ContactForm.css';

const FormPage = () => {
  return (
    <div id= "contact" className="form-container">
      <div className="form-content">
        <h2>Reach Out to Us Today</h2>
        <br></br>
        <Form>
          <Form.Group controlId="fullName">
            <Form.Label></Form.Label>
            <Form.Control type="text" placeholder="Enter your full name" />
          </Form.Group>
          <br></br>

          <Form.Group controlId="emailAddress">
            <Form.Label></Form.Label>
            <Form.Control type="email" placeholder="Enter your email address" />
          </Form.Group>
          <br></br>

          <Form.Group controlId="phoneNumber">
            <Form.Label></Form.Label>
            <Form.Control type="tel" placeholder="Enter your phone number" />
          </Form.Group>
          <br></br>

          <Form.Group controlId="serviceType">
            <Form.Label></Form.Label>
            <Form.Control as="select">
              <option>Select a service type</option>
              <option>Membership Puchases</option>
              <option>Online Classes</option>
              <option>Other</option>
            </Form.Control>
          </Form.Group>
          <br></br>

          <Form.Group controlId="experienceLevel">
            <Form.Label></Form.Label>
            <Form.Control as="select">
              <option>Select your experience level</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </Form.Control>
          </Form.Group>
          <br></br>

          <Form.Group controlId="interestedOnlineClass">
            <Form.Label></Form.Label>
            <Form.Control as="select">
              <option>Select an online class</option>
              <option>Weight Training</option>
              <option>Cardio</option>
              <option>Yoga</option>
            </Form.Control>
          </Form.Group>
          <br></br>
          <Form.Group controlId="describeGoals" className="describe-goals">
            <Form.Label>Describe your goals</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Describe your goals" />
          </Form.Group>
          <br></br>

          <Button variant="primary" type="submit" className="submit-button">
            Submit
          </Button>
        </Form>
      </div>

      <div className="map-container">
        <iframe
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=%2075%20Laurier%20Ave%20E,%20Ottawa,%20ON%20K1N%206N5+(Smile%20Dental)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          width="500"
          height="250"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
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
