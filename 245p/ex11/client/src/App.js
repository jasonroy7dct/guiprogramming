import logo from './logo.svg';
import './App.css';
import React, { useRef, useState, onSubmit } from 'react'
import LoginForm from './LoginForm';

function App() {

  // we are also writing a handleSubmit function that will be the output of our form and
  // that could be the interface to a connected backend service
  const handleSubmit = (data) => {
    const json = JSON.stringify(data, null, 4);
    console.clear(); // clearing previous console logs
    console.log(json); // showing what we actually submitted thru the form
  };

  // render method
  return (
    <div className="App">
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
}

export default App;