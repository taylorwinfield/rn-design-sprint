import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { createMaterialTopTabNavigator } from 'react-navigation';
import Expo from 'expo'

import Map from './Map';
import List from './List';

export default createMaterialTopTabNavigator({
  Map,
  List
}, {
    initialRouteName: 'List',
    tabBarOptions: {
        style: {
            paddingTop: Expo.Constants.statusBarHeight,
            height: Expo.Constants.statusBarHeight + 56
        }
    }
});
