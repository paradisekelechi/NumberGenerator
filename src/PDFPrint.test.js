import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import './setupTests';
import PDFPrint from './PDFPrint';

it('renders without crashing', () => {
  shallow(<PDFPrint />);
});

it('should match snapshot', () => {
  const wrapper = shallow(<PDFPrint />);
  expect(wrapper).toMatchSnapshot();
});

it('should contain the title', () => {
  const wrapper = shallow(<PDFPrint />);
  expect(wrapper.find('h4')).toBeDefined();
});

it('should display number list', () => {
  const wrapper = shallow(<PDFPrint />);
  wrapper.setState({
    numbers: [212123212]
  });
  expect(wrapper.find('h4')).toBeDefined();
});

it('ComponentDidMount', () => {
  const wrapper = shallow(<PDFPrint />)
  wrapper.instance().componentDidMount();
  expect(wrapper.find('h4')).toBeDefined();
});




