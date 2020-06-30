import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount, shallow, render } from 'enzyme';
import App from '../components/App';

configure({adapter: new Adapter()});

describe('App', () => {

  // it('should render correctly in "debug" mode', () => {
  //   const component = shallow(<App debug />);
  //   expect(component).toMatchSnapshot();
  // });

});