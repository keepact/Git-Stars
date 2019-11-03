import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Main from './pages/Main';
import User from './pages/User';
import Star from './pages/Star';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      User,
      Star,
    },
    {
      headerLayoutPreset: 'center',
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#7159c1',
        },
        headerTintColor: '#FFF',
        headerRight: (
          <Icon
            name="star-border"
            size={30}
            style={{ paddingRight: 16, color: 'white' }}
          />
        ),
      },
    }
  )
);

export default Routes;
