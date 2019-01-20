import React, { Component } from 'react';
import { getNumberList } from './utils/generator';

class PDFPrint extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers: []
    }
  }
  componentDidMount() {
    const numberList = getNumberList();
    if (numberList) {
      this.setState({
        numbers: numberList
      });
    }
  }
  render() {
    const { numbers } = this.state;
    const { order } = this.props;
    return (
      <div>
        {
          order === 'ascending' ?
            numbers.length > 0 && numbers.sort().map((number, i) => (
              <h4 key={i}>{number}</h4>
            )) :
            numbers.length > 0 && numbers.sort((a, b) => b - a).map((number, i) => (
              <h4 key={i}>{number}</h4>
            ))
        }
      </div>
    );
  }
}

export default PDFPrint;
