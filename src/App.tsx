import React from 'react';
import './App.css';
import Header from './components/Header'
import { BrowserRouter, Route, Link } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      </BrowserRouter>
    </div>
  );
}

export default App;
