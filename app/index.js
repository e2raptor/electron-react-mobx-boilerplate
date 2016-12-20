// @flow
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';
import routes from './routes';
import store from './store';
import { Router, hashHistory } from 'react-router';
render(
  <Provider users={store.users}>
    <Router routes={routes} history={hashHistory}/>
  </Provider>,
  document.getElementById('root')
);

// 3:56