import React from 'react';
import { createStore } from 'redux';
import rootReducer from '../reducers/';
import { Provider } from 'react-redux';

import Adapter from 'enzyme-adapter-react-16';
import { configure, mount, shallow, render } from 'enzyme';
import ProductOverview from '../../src/components/overview-components/ProductOverview.jsx';

const store = createStore(rootReducer);

configure({adapter: new Adapter()});

describe('ProductOverview', () => {

  it('should render correctly in "debug" mode', () => {
    const component = shallow(
      <Provider store={store}>
        <ProductOverview debug />
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });

});