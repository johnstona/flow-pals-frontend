import React from 'react';
import './Container.css'

const Container = ({ children }) => {
  return (
    <div className="container flex mt-4">
      { children }
    </div>
  )
};

export default Container;
