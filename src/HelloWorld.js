import React from 'react';
import logo from './logo.svg';
import time from './time.svg';
import './HelloWorld.css';

function HelloWorld() {
  return (
    <div className="Hello">
      <header className="Hello-header">
        <p>Website is in development! Please be patient </p>
        <img src={time} className="App-logo" alt="time" />
      </header>
    </div>
  );
}

export default HelloWorld;
