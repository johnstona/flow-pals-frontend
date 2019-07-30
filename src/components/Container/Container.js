import React from 'react';

const Container = ({ children }) => {
  return (
    <div className="container flex d-column">
      { children }
    </div>
  )
};

export default Container;
