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
      feedback = 'Super ! Vous êtes actif et maintenez un mode de vie sain.';
    } else if (stepCount >= 8000 && heartRate <= 120 && caloriesConsumed <= 2200) {
      feedback = 'Bon travail ! Vous êtes sur la bonne voie pour un mode de vie sain.';
    } else if (stepCount >= 5000 && heartRate <= 140 && caloriesConsumed <= 2500) {
      feedback = 'Vous faites des progrès ! Continuez vos efforts pour améliorer votre condition physique.';
    } else if (stepCount < 5000 || heartRate > 140 || caloriesConsumed > 2500) {
      feedback = 'Vous pourriez améliorer vos habitudes de remise en forme. Visez plus de pas, maintenez un rythme cardiaque plus bas et surveillez votre apport calorique.';
    } else {
      feedback = 'Continuez à suivre votre santé pour voir des améliorations !';
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
    <form className="UserFormContainer">
      <br />
      <br />
      <h2 className="UserFormHeading">Suivi de votre santé</h2>
        <legend>
          <i className="fas fa-walking" aria-label="Icône de marche"></i> Nombre de pas :
        </legend>
        <input
          type="number"
          value={stepCount}
          onChange={handleStepCountChange}
          className="UserFormInput"
          aria-labelledby="step-count-label"
        />
      
        <legend>
          <i className="fas fa-heart" aria-label="Icône de cœur"></i> Rythme cardiaque :
        </legend>
        <input
          type="range"
          min={50}
          max={160}
          value={heartRate}
          onChange={handleHeartRateChange}
          className="UserFormSlider"
          aria-labelledby="heart-rate-label"
          aria-describedby="heart-rate-description"
        />
        <br />
        <span className="heart-icon" role="img" aria-label="Emoji de cœur">
          &#10084;
        </span>
        <span className="heart-icon" aria-hidden="true">
          {heartRate}
        </span>
        <legend>
          <i className="fas fa-fire" aria-label="Icône de feu"></i> Calories consommées :
        </legend>
        <input
          type="number"
          value={caloriesConsumed}
          onChange={handleCaloriesChange}
          className="UserFormInput"
          aria-labelledby="calories-consumed-label"
        />
      {healthFeedback && (
        <p className={`UserFormFeedback ${healthFeedback ? 'animated zoom-in' : ''}`}>
          {healthFeedback}
        </p>
      )}
    </form>
  );
};

export default UserForm;
