import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount, shallow, render } from 'enzyme';
import App from '../App';

configure({adapter: new Adapter()});

describe('App', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<App debug />);

    expect(component).toMatchSnapshot();
  });

  it('should render correctly with no props', () => {
    const component = shallow(<App />);

    expect(component).toMatchSnapshot();
  });

  it('should render text correctly with given a string', () => {
    const string = 'Jane';
    const component = mount(<App name={string} />);
    expect(component).toMatchSnapshot();
  });

  it('adds 1 + 2 to equal 3', () => {
    expect(1 + 2).toBe(3);
  });

});