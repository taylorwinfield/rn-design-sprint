import React from 'react';
import { createBottomTabNavigator } from 'react-navigation'

import Tasks from './screens/Tasks'
import SOS from './screens/SOS'
import Messages from './screens/Messages'

export default createBottomTabNavigator({
    SOS,
    Tasks,
    Messages
}, {
    initialRouteName: 'Tasks'
});