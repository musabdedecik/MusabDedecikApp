import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import Dashboard from './src/screens/Dashboard';

const App = () => {
  useEffect(() => {
    RNBootSplash.hide({fade: true});
  }, []);
  return (
    <>
      <StatusBar backgroundColor="#222831" barStyle="light-content" />
      <Dashboard></Dashboard>
    </>
  );
};

export default App;
