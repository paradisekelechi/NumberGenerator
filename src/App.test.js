import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import './setupTests';
import App from './App';

it('renders without crashing', () => {
  const wrapper = shallow(<App />);
  const titleDiv = <div className="title">Generated Numbers</div>;
  expect(wrapper.contains(titleDiv)).toEqual(true);
});

it('should match snapshot', () => {
  const wrapper = shallow(<App />);
  console.log(wrapper.debug());
  expect(wrapper).toMatchSnapshot();
});

it('should contain the title', () => {
  const wrapper = shallow(<App />);
  const titleDiv = <div className="title">Generated Numbers</div>;
  expect(wrapper.contains(titleDiv)).toEqual(true);
  expect(wrapper.find('.title')).toBeDefined();
  expect(wrapper.find('ReactToPrint')).toBeDefined();
});

it('should contain the titlhhe', () => {
  const wrapper = shallow(<App />);
  wrapper.setState({
    number: '0809098987',
    total: 1
  });
  console.log(wrapper.debug());
  const header = <h1>0809098987</h1>;
  expect(wrapper.contains(header)).toEqual(true);
});




