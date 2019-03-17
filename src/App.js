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
    return (
      <div className="App">
        <p>
            J Griff
          </p>
        <video src={griff} autoPlay="on" type="video/mp4" style={mySteez2}></video>
        
        <a href="https://maxjann.com" class="robo">Jann Software</a>
      </div>
    );
  }
}

export default App;
