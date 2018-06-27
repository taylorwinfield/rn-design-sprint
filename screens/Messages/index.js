import { createStackNavigator } from 'react-navigation';
import Detail from './Detail';
import List from './List';

export default createStackNavigator(
  {
    List,
    Detail
  },
  {
    navigationOptions: () => ({
      headerTitleStyle: {
        color: 'white'
      },
      headerStyle: {
        backgroundColor: '#0099FF'
      }
    })
  }
);
