import React from 'react';
import './Project.css';

const container = ({ children }) => {
  return (
    <div className="project-container">
      <div class="project">
        { children }
      </div>
    </div>
  )
}
