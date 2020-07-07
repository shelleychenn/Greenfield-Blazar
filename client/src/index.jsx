import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import './styles.scss';

// var mountNode = document.getElementById('app');
// ReactDOM.render(<App />, mountNode);

import { createStore } from 'redux';
import rootReducer from './reducers/';
import { Provider } from 'react-redux';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
