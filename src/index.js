import React from 'react';
import ReactDOM from 'react-dom';
import styledNormalize from 'styled-normalize';
import { injectGlobal } from 'styled-components';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';

import Home from 'home';
import reducers from './app-reducers';

const root = document.getElementById('app');

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, undefined, composeEnhancers());

const normalize = () => injectGlobal`
  ${styledNormalize}
  body {
    padding: 0;
    background-color: white;
    height: 100%;
    width: 100%;
    -webkit-overflow-scrolling : touch;
  }
  #app {
    height: 100vh;
    width: 100%;
  }
`;
normalize();

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  root,
);
