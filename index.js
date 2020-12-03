import {AppRegistry} from 'react-native';
import React from 'react';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import Store from './Store';

const store = Store;

const Wrapper = () => (
  <Provider store={store}>
    <App></App>
  </Provider>
);

AppRegistry.registerComponent(appName, () => Wrapper);
