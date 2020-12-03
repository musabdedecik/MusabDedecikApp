import 'react-native';
import React from 'react';
import {render, cleanup} from '@testing-library/react-native';
import Dashborad from '../src/screens/Dashboard';

afterEach(cleanup);

it('profil bilgisinde Musab Dedecik yazısı olmalı', () => {
  var {getByText} = render(<Dashborad></Dashborad>);
  getByText('Musab Dedecik');
});

it('profil bilgisinde Yazılım Geliştirici olmalı', () => {
  var {getByText} = render(<Dashborad></Dashborad>);
  getByText('Yazılım Geliştirici');
});

it('profil bilgisinde Musab Dedecik`in fotoğrafı olmalı', () => {
  var {getByTestId} = render(<Dashborad></Dashborad>);
  var image = getByTestId('profilePhoto');
  expect(image.props.source.testUri).toEqual('../../../src/assets/pp.png');
});
