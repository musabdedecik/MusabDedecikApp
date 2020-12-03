import 'react-native';
import React from 'react';
import App from '../App';
import Cards from '../src/components/Cards';

import renderer from 'react-test-renderer';

jest.useFakeTimers();

it('renders correctly', () => {
  renderer.create(<Cards />);
  // act
  // arrange
  // assert
});
