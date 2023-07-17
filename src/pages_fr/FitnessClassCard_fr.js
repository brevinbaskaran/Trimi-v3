import React from 'react';
import './FitnessClassCard.css';

const FitnessClassCard = ({ fitnessClass }) => {
  const {
    image,
    category,
    students,
    name,
    length,
    instructor,
    classes,
    difficulty,
  } = fitnessClass;

  return (
    <div className="fitness-class-card">
      <div className="image-container">
        <img src={image} alt={name} />
      </div>

      <div className="details">
        <div className="row">
          <div className="category" style={{ color: '#00FFF0' }}>
            {category}
          </div>
          <div className="info">
            <i className="fas fa-users"></i> {students} Étudiants
          </div>
        </div>
        <div className="row">
          <div className="info">
            <i className="fas fa-file-alt"></i> {name}
          </div>
          <div className="info">
            <i className="fas fa-clock"></i> {length} mins
          </div>
        </div>
        <div className="row">
          <div className="info">
            <i className="fas fa-user"></i> Enseignant : {instructor}
          </div>
        </div>
        <div className="row">
          <div className="info">Cours : {classes}</div>
          <span className="difficulty">
            Difficulté : <span className="difficulty-label">{difficulty}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default FitnessClassCard;
