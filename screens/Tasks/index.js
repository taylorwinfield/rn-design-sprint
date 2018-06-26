import React from 'react';
import {
  createMaterialTopTabNavigator,
  createStackNavigator
} from 'react-navigation';
import Expo from 'expo';

import Map from './Map';
import List from './List';
import Detail from './Detail';
import Customer from './Customer';

const Jobs = createMaterialTopTabNavigator(
  {
    Map,
    List
  },
  {
    initialRouteName: 'List',
    tabBarOptions: {
      style: {
        paddingTop: Expo.Constants.statusBarHeight,
        height: Expo.Constants.statusBarHeight + 56
      }
    }
  }
);

/*
    Conceptually, the Map/List tabs are in their own view on a stackNavigator
    and the detail page for each sits within this hierarchy.
 */
const TasksStack = createStackNavigator(
  {
    Jobs,
    Detail,
    Customer
  },
  {
    navigationOptions: ({ navigation }) => {
      const header = navigation.state.routeName === 'Jobs' && null;

      return {
        header,
        title: 'Visit info',
        headerTitleStyle: {
          color: 'white'
        },
        headerStyle: {
          backgroundColor: '#0099FF'
        }
      };
    }
  }
);

TasksStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible
  };
};

export default TasksStack;
