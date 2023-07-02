import React, { useState } from 'react';
import './HealthInfo.css';

import UserForm from './UserForm';
import Transform from './Transformations';

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
