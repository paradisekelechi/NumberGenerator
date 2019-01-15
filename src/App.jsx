import React, { Component } from 'react';
import { generateNewNumber } from './utils/generator';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      number: '',
      isGenerating: false
    }
  }

  generateNumber = () => {
    const generatedNumber = generateNewNumber();
    this.setState({
      number: generatedNumber
    })
  }

  render() {
    const { total, number } = this.state;
    return (
      <div className="App">
        <div className="content">
          <div className="stat">
            <div className="value">{total}</div>
            <div className="title">Generated Numbers</div>
          </div>
          <div className="main">
            <div className="header">
              <h1>{number}</h1>
            </div>
            <div className="button-wrapper">
              <button onClick={this.generateNumber} className="button generate">Generate New Number</button>
              <button className="button download">Download Generated Numbers</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
