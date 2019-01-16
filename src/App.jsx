import React, { Component } from 'react';
import ReactToPrint from "react-to-print";
import { generateNewNumber, getNumberList, clearStorageList } from './utils/generator';
import PDFPrint from './PDFPrint';
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

  componentDidMount() {
    const numberList = getNumberList();
    if (numberList) {
      this.setState({
        total: numberList.length
      })
    }
  }

  generateNumber = () => {
    const generatedNumber = generateNewNumber();
    const numberList = getNumberList();
    if (numberList) {
      this.setState({
        number: generatedNumber,
        total: numberList.length
      })
    } else {
      this.setState({
        number: generatedNumber,
        total: 0
      });
    }
  }

  clearStorage = () => {
    clearStorageList();
    window.location.reload();
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
              <h1>{number === '' ? ('. . . .') : number}</h1>
            </div>
            <div className="button-wrapper">
              <button onClick={this.generateNumber} className="button generate">Generate New Number</button>
              <ReactToPrint
                trigger={() => <button className="button download">Download Generated Numbers</button>}
                content={() => this.componentRef}
                onAfterPrint={this.clearStorage}
              />
              <div style={{ display: 'none' }}>
                <PDFPrint ref={el => (this.componentRef = el)} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
