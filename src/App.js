import React from 'react';
import './App.css';
import Header from './components/Header'
import { BrowserRouter, Route, Link } from "react-router-dom";
import * as API from './adapters/API'

const App = () => {

  API.getAllUsers()
  .then(console.log)

  
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      </BrowserRouter>
    </div>
  );
}

export default App;
