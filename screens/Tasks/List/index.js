import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { Container, Title } from './styles';
import { FlatList } from 'react-native';
import Item from './Item';
import { createStackNavigator } from 'react-navigation';
import Detail from '../Detail';

const data = [
  {
    title: 'ENSAV UPGD - Central Heating Boiler',
    customer: 'Kieran Josh',
    address: '7 The Field, LE8',
    distance: '3 miles (5 mins)',
    id: '0'
  },
  {
    title: 'FIRST VST - Central Heating Boiler',
    customer: 'Kelly Natasha',
    address: '48 St Albans Road, LE2 1GE',
    distance: '10 miles (30 mins)',
    id: '1'
  }
];

const View = styled.View`
  background-color: red;
`;

const Text = styled.Text`
  color: white;
`;

export default class List extends PureComponent {
  static navigationOptions = {
    title: 'List'
  };

  keyExtractor = item => item.id;

  render() {
    return (
      <Container>
        <FlatList
          data={data}
          keyExtractor={this.keyExtractor}
          renderItem={({ item }) => (
            <Item {...item} />
          )}
        />
      </Container>
    );
  }
}
