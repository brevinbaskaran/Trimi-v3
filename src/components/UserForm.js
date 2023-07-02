import React, { useState, useEffect } from 'react';
import './UserForm.css';

const UserForm = () => {
  const [stepCount, setStepCount] = useState(0);
  const [heartRate, setHeartRate] = useState(0);
  const [caloriesConsumed, setCaloriesConsumed] = useState(0);
  const [healthFeedback, setHealthFeedback] = useState('');

  useEffect(() => {
    calculateFeedback();
  }, [stepCount, heartRate, caloriesConsumed]);

  const calculateFeedback = () => {
    let feedback = '';
    if (stepCount >= 10000 && heartRate <= 100 && caloriesConsumed <= 2000) {
        feedback = 'Great job! You are staying active and maintaining a healthy lifestyle.';
      } else if (stepCount >= 8000 && heartRate <= 120 && caloriesConsumed <= 2200) {
        feedback = 'Good job! You are on the right track towards a healthy lifestyle.';
      } else if (stepCount >= 5000 && heartRate <= 140 && caloriesConsumed <= 2500) {
        feedback = 'You are making progress! Keep up the effort to improve your fitness.';
      } else if (stepCount < 5000 || heartRate > 140 || caloriesConsumed > 2500) {
        feedback = 'You could improve your fitness habits. Aim for more steps, maintain a lower heart rate, and watch your calorie intake.';
      } else {
        feedback = 'Keep tracking your health to see improvements!';

      }
      setHealthFeedback(feedback);
    };

  const handleStepCountChange = (e) => {
    const value = Number(e.target.value);
    setStepCount(value);
    calculateFeedback();
  };

  const handleHeartRateChange = (e) => {
    const value = Number(e.target.value);
    setHeartRate(value);
    calculateFeedback();
  };

  const handleCaloriesChange = (e) => {
    const value = Number(e.target.value);
    setCaloriesConsumed(value);
    calculateFeedback();
  };

  return (
    <div className="UserFormContainer">
        <br></br><br></br>
      <h2 className="UserFormHeading">Track Your Health</h2>
      <div className="UserFormInputBox calories">
        <label className="UserFormLabel">
          <i className="fas fa-walking"></i> Step Count:
        </label>
        <input
          type="number"
          value={stepCount}
          onChange={handleStepCountChange}
          className="UserFormInput"
        />
      </div>
      <div className="UserFormInputBox heart-rate">
        <label className="UserFormLabel">
          <i className="fas fa-heart"></i> Heart Rate:
        </label>
        <input
          type="range"
          min={50}
          max={160}
          value={heartRate}
          onChange={handleHeartRateChange}
          className="UserFormSlider"
        />
        <br />
        <span className="heart-icon">&#10084;</span>
        <span className="heart-icon">{heartRate}</span>
      </div>
      <div className="UserFormInputBox calories">
        <label className="UserFormLabel">
          <i className="fas fa-fire"></i> Calories Consumed:
        </label>
        <input
          type="number"
          value={caloriesConsumed}
          onChange={handleCaloriesChange}
          className="UserFormInput"
        />
      </div>
      {healthFeedback && (
        <p className={`UserFormFeedback ${healthFeedback ? 'animated zoom-in' : ''}`}>{healthFeedback}</p>
        )}
    </div>
  );
};

export default UserForm;
