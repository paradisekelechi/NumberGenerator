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
      })
    }
  }
  render() {
    const { numbers } = this.state;
    return (
      <div>
        {numbers.length > 0 && numbers.sort().map((number, i) => (
          <h4 key={i}>{number}</h4>
        ))}
      </div>
    );
  }
}

export default PDFPrint;
