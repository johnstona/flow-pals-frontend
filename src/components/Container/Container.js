import React from 'react';
import './Container.css'

const Container = ({ children, center }) => {
  return (
    <div className={`container flex mt-4 ${center ? 'justify-center' : ''}`}>
      { children }
    </div>
  )
};

export default Container;
