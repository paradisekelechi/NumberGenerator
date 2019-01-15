import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="content">
          <div className="stat">
            <div className="value">422</div>
            <div className="title">Generated Numbers</div>
          </div>
          <div className="main">
            <div className="header">
              <h1>0556556563</h1>
            </div>
            <div className="button-wrapper">
              <button className="button generate">Generate New Number</button>
              <button className="button download">Download Generated Numbers</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
