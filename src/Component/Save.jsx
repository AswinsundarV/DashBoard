import React from 'react';
import "./savepage.css"
import { FaCheckCircle } from 'react-icons/fa';

function Save() {
  return (
    <div>
         <div className="notification-container">
      <div className="notification-content">
        <div className="icon-wrapper">
          <FaCheckCircle className="iconsave" />
        </div>
        <div className="text-wrapper">
          <p className="notification-message">Saved Successfully </p>
          <p>Your data has been saved successfully.</p>
        </div>
     
      </div>
    </div>
   
     
    </div>
  );
}

export default Save



