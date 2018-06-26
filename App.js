import React from 'react';
import {
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';

import Tasks from './screens/Tasks';
import SOS from './screens/SOS';
import Messages from './screens/Messages';

import Modal from './screens/Modal';

const MainStack = createBottomTabNavigator(
  {
    SOS,
    Tasks,
    Messages
  },
  {
    initialRouteName: 'Tasks'
  }
);

export default createStackNavigator(
  {
    Main: MainStack,
    Modal: Modal
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
);
