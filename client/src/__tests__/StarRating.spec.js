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

  describe('should render highlighted 3.5 stars', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = mount(<StarRating value={3.5} />);
    });
    it('should render 3 full stars', () => {
      expect(wrapper.find('.full-star').length).toEqual(3);
    });
    it('should render 1 half star', () => {
      expect(wrapper.find('.half-star').length).toEqual(1);
    });
    it('should render 1 empty star', () => {
      expect(wrapper.find('.empty-star').length).toEqual(1);
    });
  });
});
