import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [question1, setQuestion1] = useState(false);
  const [question2, setQuestion2] = useState(false);
  const [question3, setQuestion3] = useState(false);
  const [question4, setQuestion4] = useState(false);

  return (
    <div style={{ backgroundColor: '#18171A' }}>
      <br></br>

    <div className="FAQ">
      <h2>Frequently Asked Questions (FAQs)</h2> 
      <br></br>

      <div>
        <h3 className={question1 ? 'open' : ''} onClick={() => setQuestion1(!question1)}>
          Are personal training sessions customizable to my specific fitness goals and needs?
          <span>+</span>
        </h3>
        {question1 && <p>Yes, personal training sessions are highly customizable to your specific fitness goals and needs. When you work with a personal trainer, they will assess your current fitness level, discuss your goals, and tailor the training sessions accordingly. The trainer will design a personalized workout program that addresses your individual needs. They will also consider any health concerns you may have to ensure safe training sessions.</p>}
        <hr />
      </div>  

      <div>
        <h3 className={question2 ? 'open' : ''} onClick={() => setQuestion2(!question2)}>
        How can I create a balanced meal plan that supports my fitness goals?
          <span>+</span>
        </h3>
        {question2 && <p>To create a balanced meal plan that supports your fitness goals, start by determining your caloric needs and macronutrient requirements. Focus on incorporating lean proteins, whole grains, fruits, vegetables, and healthy fats into your meals. Additionally, our gym can provide professional guidance from nutrition experts who can assist you in creating a personalized meal plan that aligns with your fitness goals. We offer valuable advice on meal timing, food choices, and supplementation to optimize your results.</p>}
        <hr />
      </div>    

      <div>
        <h3 className={question3 ? 'open' : ''} onClick={() => setQuestion3(!question3)}>
        How often should I schedule personal training sessions?
          <span>+</span>
        </h3>
        {question3 && <p>The frequency of scheduling personal training sessions depends on your individual fitness goals, availability, and budget. It is recommended to have at least 2-3 sessions/week to see significant progress. However, if you have specific goals or require more  training, consider increasing the frequency to 4 sessions per week. Our gym offers flexible options and training plans tailored to your needs, ensuring that you receive the right level of support and guidance to achieve your fitness goals.</p>}
        <hr />
      </div>  

      <div>
        <h3 className={question4 ? 'open' : ''} onClick={() => setQuestion4(!question4)}>
        Can I try out the gym before committing to a membership?
          <span>+</span>
        </h3>
        {question4 && <p>Absolutely! We offer a trial period for prospective members to experience our gym before making a commitment.</p>}
      </div>
    </div>
    </div>
  );
};

export default FAQ;
