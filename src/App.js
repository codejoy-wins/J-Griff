import React, { Component } from 'react';
import logo from './logo.svg';
import griff from './griffin.MP4';

import './App.css';

class App extends Component {
  render() {
    const mySteez = {
      "width":"50%",
    }
    const mySteez2 = {
      "width":"100%",
    }
    const mySteez3 = {
      "height":"80%",
    }
    return (
      <div className="App">
        <p>
            J Griff
          </p>
        <video src={griff} type="video/mp4" style={mySteez3} controls="on"></video>
        
        <a href="https://maxjann.com" class="robo">Jann Software</a>
      </div>
    );
  }
}

export default App;
