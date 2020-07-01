import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount, shallow, render } from 'enzyme';
import StarRating from '../components/StarRating.jsx';

configure({ adapter: new Adapter() });

describe('StarRating', () => {
  it('should render', () => {
    const wrapper = shallow(<StarRating />);
    expect(wrapper.exists()).toBeTruthy();
  });

  it('should render correctly in "debug" mode', () => {
    const component = shallow(<StarRating debug />);
    expect(component).toMatchSnapshot();
  });

  it('should render correctly with no props', () => {
    const component = shallow(<StarRating />);

    expect(component).toMatchSnapshot();
  });
});
