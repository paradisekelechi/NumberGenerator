import React, { Component } from 'react';
import ReactToPrint from "react-to-print";
import { generateNewNumber, getNumberList, clearStorageList } from './utils/generator';
import PDFPrint from './PDFPrint';
import './App.scss';
import { padNumber } from './utils/generator';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      number: '',
      isGenerating: false,
      numberList: []
    }
  }

  componentDidMount() {
    const numberList = getNumberList();
    if (numberList) {
      this.setState({
        total: numberList.length,
        numberList
      })
    }
  }

  generateNumber = () => {
    const generatedNumber = generateNewNumber();
    const numberList = getNumberList();
    if (numberList) {
      this.setState({
        number: generatedNumber,
        total: numberList.length,
        numberList
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
    const { total, number, numberList } = this.state;
    return (
      <div className="App">
        <div className="content">
          <div className="stat">
            <div className="value">{total}</div>
            <div className="title">Generated Numbers</div>
          </div>
          <div className="main">
            <div className="statWrapper">
              <h3>Minimum Number: {numberList.length > 0 && padNumber(10 - (Math.min(...numberList) + '').length, Math.min(...numberList))}</h3>
              <h3>Maximum Number: {numberList.length > 0 && padNumber(10 - (Math.max(...numberList) + '').length, Math.max(...numberList))}</h3>
            </div>
            <div className="header">
              <h1>{number === '' ? ('. . . .') : number}</h1>
            </div>

            <div className="button-wrapper">
              <button onClick={this.generateNumber} className="button generate">Generate New Number</button>
              <ReactToPrint
                trigger={() => <button className="button download">Download Generated Numbers In Ascending Order</button>}
                content={() => this.componentRef}
                onAfterPrint={this.clearStorage}
              />
              <ReactToPrint
                trigger={() => <button className="button download">Download Generated Numbers In Descending Order</button>}
                content={() => this.componentDescRef}
                onAfterPrint={this.clearStorage}
              />
              <div style={{ display: 'none' }}>
                <PDFPrint order='ascending' ref={el => (this.componentRef = el)} />
                <PDFPrint order='descending' ref={el => (this.componentDescRef = el)} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
