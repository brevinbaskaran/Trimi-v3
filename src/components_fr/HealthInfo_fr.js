import React, { useState } from 'react';
import './HealthInfo.css';

import UserForm from './UserForm_fr';
import Transform from './Transformations_fr';

const HealthTracker = () => {
  return (
    <div className="health-tracker">
      <div className="left-panel">
        <UserForm />
      </div>
      <div className="right-panel">
        <Transform />
      </div>
    </div>
  );
};

export default HealthTracker;
