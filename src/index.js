import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './assets/styles/main.scss';
import './init';
import { Provider } from 'react-redux';
import store from './store';
import Routes from './routes';

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('sr-app')
);

serviceWorker.unregister();
